import React,{useState,useEffect} from 'react';

import Logoimg from '../../assets/images/logo.svg'
import Landing from '../../assets/images/landing.svg'
import StudyIcons from '../../assets/images/icons/study.svg'
import PurpleHeartIcon from '../../assets/images/icons/purple-heart.svg'
import GiveClasses from '../../assets/images/icons/give-classes.svg'
import api from '../../services/api'
import {Link} from 'react-router-dom'

import './landingCSS.css'

function LandPage() {
    const [totalConnection,setTotalConnections]=useState(0)
    
    useEffect(()=>{
        api.get('connections').then(resp=>setTotalConnections(resp.data.total))
    },[totalConnection])

    return (
        <div id='page-landing'>
            <div className="container" id='page-landing-content'>
                <div className="logo-container">
                    <img src={Logoimg} alt="logo image" />
                    <h2 className='slogan'>Sua plataforma de estudos</h2>
                </div>

                <img src={Landing} alt="Plataforma de estudos" className='hero-image'/>

                <div className='buttons-container'>
                    <Link to="/study" className='study'>
                        <img src={StudyIcons} alt="Estudar"/>
                        Estudar
                    </Link>
                    <Link to="/give-classes" className='give-classes'>
                        <img src={GiveClasses} alt="Dar aulas"/>
                        Dar Aula
                    </Link>
                </div>

                <span className="total-connections">
                    Total de {totalConnection} conexões já realizadas
                    <img src={PurpleHeartIcon} alt="Coração"/>
                </span>
                <h3 className="ref'">Feito por Davis</h3>
            </div>
        </div>
    )
}
export default LandPage