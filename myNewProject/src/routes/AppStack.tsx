import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import Landing from '../pages/landing/landing'
import GiveClasses from '../pages/GiveClasses/giveClasses'
import StudyTabs from './StudyTabs'

const {Navigator,Screen} =createStackNavigator()

function AppStack(){
    return(
        <NavigationContainer>
            <Navigator screenOptions={{headerShown:false}}>
                <Screen name='Landing' component={Landing}/>
                <Screen name='GiveClasses' component={GiveClasses}/>
                <Screen name='StudyTabs' component={StudyTabs}/>
            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack