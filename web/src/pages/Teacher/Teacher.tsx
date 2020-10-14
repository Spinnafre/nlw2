import React, { useState, useEffect, FormEvent } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../../components/pageHeader/index'
import TeachList,{TeacherProps} from '../../components/TeachList'
import InputComponent from '../../components/inputs/InputsComponents'
import SelectArea from '../../components/selectInput/SelectInputComponent'
import Api from '../../services/api'
import './TeacherCSS.css'

interface Teacher{
    id:number
}

function TeacherList() {
    const [subject, setSubject] = useState('')
    const [teachers,setTeacher]=useState([])
    const [week_day, setWeekDay] = useState('')
    const [time, setTime] = useState('')
    
    async function searchTeacher(e:FormEvent){
        e.preventDefault()

        const resp=await Api.get('classes',{
            params:{
                subject,
                week_day,
                time
            }
        })
        setTeacher(resp.data)
    }
    return (
        <div id='page-teacher-list' className="container" >
            <PageHeader title='Estes são os proffys disponíveis'>

                <form id='seach-teachers' onSubmit={searchTeacher}>
                    <SelectArea
                        name='subject'
                        value={subject}
                        onChange={e => setSubject(e.target.value)}
                        label='Matéria'
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Química', label: 'Química' },
                            { value: 'História', label: 'História' },
                            { value: 'Matemática', label: 'Matemática' }
                        ]}
                    />
                    <SelectArea
                        name='weekday'
                        label='Dia da semana'
                        value={week_day}
                        onChange={e => setWeekDay(e.target.value)}
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda-feira' },
                            { value: '2', label: 'Terça-feira' },
                            { value: '3', label: 'Quarta-feira' },
                            { value: '4', label: 'Quinta-feir' },
                            { value: '5', label: 'Sexta-feira' },
                            { value: '6', label: 'Sábado' }
                        ]}
                    />
                    <InputComponent
                        value={time}
                        type='time'
                        name='time'
                        label='Horário'
                        onChange={e=>setTime(e.target.value)}
                    />
                    <button type='submit'>
                        Buscar       
                    </button>
                </form>

            </PageHeader>
            <main>
                {teachers.map((teacher:TeacherProps)=>(
                    <TeachList key={teacher.id} teacher={teacher}/>
                ))}
                

            </main>


        </div>

    )
}

export default TeacherList
