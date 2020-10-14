import React from 'react'
import WhatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './teachList.css'

export interface TeacherProps{
        id: number,
        subject: string,
        cost: number,
        UserId: number,
        name: string,
        avatar: string,
        whatsapp: string,
        bio: string
}
interface PropsItem{
    teacher:TeacherProps
}

const teachList:React.FC<PropsItem>=({teacher})=> {
    return (
        <article className='teacher-list'>
            <header>
                <img src={teacher.avatar} alt="Image Avatar" />
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>

            </header>
            <p>
                {teacher.bio}
            </p>
            <footer>
                <p>
                    Preço/Hora
                    <strong>R${teacher.cost}</strong>
                </p>

                <a target='_blank' href={`https://wa.me/${teacher.whatsapp}` }>
                    <img src={WhatsappIcon} alt="Icone do whatsapp" />
                            Entrar em contato
                </a>
            </footer>
        </article>

    )
}
export default teachList