import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {Ionicons} from '@expo/vector-icons'

import TeacherList from '../pages/TeacherList/TeacherList'
import Favourites from '../pages/Favourites/Favourites'

const { Navigator, Screen } = createBottomTabNavigator()

function Tabs() {
    return (
        <Navigator
            tabBarOptions={{
                style: {
                    elevation: 0,
                    shadowOpacity:0,
                    height:64

                },
                tabStyle:{
                    flexDirection:'row',
                    alignItems:'center',
                    justifyContent:'center'
                },
                iconStyle:{
                    flex:0,
                    width:20,
                    height:20
                },
                labelStyle:{
                    fontFamily:'Archivo_700Bold',
                    fontSize:16,
                    marginLeft:16
                },
                inactiveBackgroundColor:'#fafafc',
                activeBackgroundColor:'#ebebf5',
                activeTintColor:'#8257e5',
                inactiveTintColor:'#dedede'
            }}
        >
            <Screen
                name='TeacherList'
                component={TeacherList}
                options={
                    {
                        tabBarLabel:'Proffys',
                        tabBarIcon:({color,size,focused})=>(
                            <Ionicons name="ios-easel" size={size} color={focused?'#8257e5':color}/>
                        )
                    }
                }
            />

            <Screen
                name='Favourites'
                component={Favourites}
                options={
                    {
                        tabBarLabel:'Favoritos',
                        tabBarIcon:({color,size,focused})=>(
                            <Ionicons name="ios-heart" size={size} color={focused?'#8257e5':color}/>
                        )
                    }
                }
            />
        </Navigator>
    )
}
export default Tabs