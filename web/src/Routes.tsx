import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import Landing from './pages/Landing/landing'
import Teacher from './pages/Teacher/Teacher'
import TeacherForm from './pages/TeacherForm/TeacherForm'

function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" component={Landing} exact/>
            <Route path="/study" component={Teacher} exact/>
            <Route path="/give-classes" component={TeacherForm} exact/>
        </BrowserRouter>
    )
}
export default Routes