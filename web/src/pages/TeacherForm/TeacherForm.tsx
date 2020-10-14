import React, { useState, useEffect, FormEvent } from 'react'
import {useHistory} from 'react-router-dom'
import PageHeader from '../../components/pageHeader/index'
import InputComponent from '../../components/inputs/InputsComponents'
import TextArea from '../../components/Textarea/TextAreas'
import SelectArea from '../../components/selectInput/SelectInputComponent'
import warningIcon from '../../assets/images/icons/warning.svg'
import api from '../../services/api'
import './Form.css'

function Form() {
    const history=useHistory()
    const [name, setName] = useState('')
    const [whatsapp, setwhatsapp] = useState('')
    const [avatar, setAvatar] = useState('')
    const [bio, setBio] = useState('')

    const [subject, setSubject] = useState('')
    const [cost, setCost] = useState('')

    const [schedule, setSchedule] = useState([
        { week_day: 0, from: '', to: '' }
    ])

    function addSchedule() {
        setSchedule([
            ...schedule,
            { week_day: 0, from: '0:00 AM', to: '0:00 AM' }

        ])
    }
    function handleSubmit(e: FormEvent) {
        e.preventDefault()
        api.post('classes',{
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost:Number(cost),
            schedule
        }).then(()=>{
            alert('Cadastrado com sucesso!')
            history.push('/')
        })
        .catch(()=>{
            alert('Error no cadastro')
        })
        

    }
    function setScheduleItemValue(index: number, field: string, value: string) {
        const arrayCopy = schedule.map((scheduleItem, scheduleIndex) => {
            // Identifica o campo e irá sofrer alteração e modifica ele
            if (index === scheduleIndex) {
                return {
                    ...scheduleItem,
                    [field]: value
                }
            }
            return scheduleItem
        })
        setSchedule(arrayCopy)
    }

    return (
        <div id='page-teacher-form' className="container" >
            <PageHeader title='Que incrível que você quer dar aulas' description='O primeiro passo é preencher o formulário' />
            <main>
                <form onSubmit={handleSubmit} >

                    <fieldset>
                        <legend>Seus dados</legend>
                        <InputComponent type='text' name='input-name' label='Nome completo' onChange={e => setName(e.target.value)} />
                        <InputComponent name='input-avatar' label='Avatar' onChange={e => setAvatar(e.target.value)}/>
                        <InputComponent type="number" name='input-whatsapp' label='Whatsapp' onChange={e => setwhatsapp(e.target.value)} />
                        <TextArea name='bio' label='Biografia' onChange={e => setBio(e.target.value)}/>
                    </fieldset>

                    <fieldset>
                        <legend>Sobre a aula</legend>
                        <SelectArea
                            name='subject'
                            label='Matéria'
                            value={subject}
                            options={[
                                { value: 'Artes', label: 'Artes' },
                                { value: 'Biologia', label: 'Biologia' },
                                { value: 'Química', label: 'Química' },
                                { value: 'História', label: 'História' },
                                { value: 'Matemática', label: 'Matemática' }
                            ]}
                            onChange={e => { setSubject(e.target.value) }}
                        />
                        <InputComponent type='text' name='cost' label='Custo da hora por aula' onChange={e => { setCost(e.target.value) }} />

                    </fieldset>

                    <fieldset>
                        <legend>
                            Horários Disponíveis
                        <button type='button' onClick={addSchedule}>+ Novo horário</button>
                        </legend>
                        {schedule.map((e, index) => (
                            <div key={index} className='schedule-item'>
                                <SelectArea
                                    name='weekday'
                                    label='Dia da semana'
                                    value={e.week_day}
                                    options={[
                                        { value: '0', label: 'Domingo' },
                                        { value: '1', label: 'Segunda-feira' },
                                        { value: '2', label: 'Terça-feira' },
                                        { value: '3', label: 'Quarta-feira' },
                                        { value: '4', label: 'Quinta-feir' },
                                        { value: '5', label: 'Sexta-feira' },
                                        { value: '6', label: 'Sábado' }
                                    ]}
                                    onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                                />
                                <InputComponent
                                    type='time'
                                    name='from'
                                    label='Das'
                                    value={e.from}
                                    onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                                />
                                <InputComponent
                                    type='time'
                                    name='to'
                                    value={e.to}
                                    label='Até'
                                    onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                                />
                            </div>
                        ))}


                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso importante" />
                        Importante
                        <br />
                        Preencha os dados do formário
                    </p>
                        <button type='submit'>
                            Salvar Cadastro
                        </button>
                    </footer>

                </form>

            </main>

        </div>
    )
}

export default Form
