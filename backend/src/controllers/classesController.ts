import db from '../database/connection'
import TimeInMinutes from '../Utils/ConverHourToMinutes'
import { Request, Response } from 'express'
interface ScheduleItemInteface {
    week_day: number,
    from: string,
    to: string
}
export default class ClassController {
    async index(request: Request, response: Response) {
        const filters = request.query

        if (!filters.week_day || !filters.subject || !filters.time) {
            return response.status(400).json({ error: "Error ao filtrar as tarefas" })
        }
        const timeMinutes = TimeInMinutes(filters.time as string)

        const classes = await db('Classes')
            .whereExists(function () {
                this.select('Class_Schedule.*')
                    .from('Class_Schedule')
                    .whereRaw('`Class_Schedule`.`class_id`=`Classes`.`id`')
                    .whereRaw('`Class_Schedule`.`week_day`= ??', [Number(filters.week_day)])
                    .whereRaw('`Class_Schedule`.`from`<=??',[timeMinutes])
                    .whereRaw('`Class_Schedule`.`to`>??',[timeMinutes])
            })
            .where('Classes.subject', '=', filters.subject as string)
            .join('Users', 'Classes.UserId', '=', 'Users.id')
            .select(['Classes.*', 'users.*'])

        return response.status(200).json(classes)
    }

    async create(request: Request, response: Response) {
        const { name, avatar, whatsapp, bio, subject, cost, schedule } = request.body
        // Executa tudo ao mesmo, se der error desfaz.Muito usado para evitar que ocora error em algum
        // Processo específico inserindo ao banco os dados de maneira incoreeta
        const trx = await db.transaction()
        try {
            const insertedUserId = await trx('Users').insert({
                name,
                avatar,
                whatsapp,
                bio
            })
            const UserId = insertedUserId[0]
            const InsertClassId = await trx('Classes').insert({
                subject,
                cost,
                UserId
            })
            // class_id
            const class_id = InsertClassId[0]

            const ScheduleClass = schedule.map((sheduleItem: ScheduleItemInteface) => {
                return {
                    class_id,
                    week_day: sheduleItem.week_day,
                    // Função que irá retornar o valor convertido em minutos
                    from: TimeInMinutes(sheduleItem.from),
                    to: TimeInMinutes(sheduleItem.to)
                }
            })
            await trx('Class_Schedule').insert(ScheduleClass)
            // Adiciona ao banco
            await trx.commit()
            return response.status(201).send()

        } catch (error) {
            // Desfaz tudo
            await trx.rollback()
            return response.status(400).json({ "error": "Error ao criar nova aula" })
        }
    }
}