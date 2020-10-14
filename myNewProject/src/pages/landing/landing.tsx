import React,{useEffect,useState} from 'react'
import {Image,View,Text,TouchableOpacity,StyleSheet} from 'react-native'
// Rect Button adapta o bottão ao sistema operacional mobile
import {RectButton} from 'react-native-gesture-handler'

import image from '../../assets/images/landing.png'
import StudyIcon from '../../assets/images/icons/study.png'
import GiveClassesIcon from '../../assets/images/icons/give-classes.png'
import heartIcon from '../../assets/images/icons/heart.png'

import {useNavigation} from '@react-navigation/native'

import api from '../../services/api'

import styles from './styles'
const Landing=()=>{
    const [totalConnection,setTotalConnections]=useState(0)
    
    useEffect(()=>{
        api.get('connections').then(resp=>setTotalConnections(resp.data.total))
    },[totalConnection])
    const {navigate}=useNavigation()

    function HandleNavigationtoGiveClassPage(){
        navigate('GiveClasses')
    }
    function NavigateToStudyPage(){
        navigate('StudyTabs')
    }
    return(
        <View style={styles.container}>
            <Image source={image} style={styles.img}/>
            <Text style={styles.title}>
                Seja bem vindo. {'\n'}
                <Text style={styles.titleBold}>
                    O que deseja fazer?
                </Text>
            </Text>
            <View style={styles.Buttoncontainer}>
                <RectButton style={[styles.button,styles.Buttonprimary]} onPress={NavigateToStudyPage} >
                    <Image source={StudyIcon}/>
                    <Text style={styles.ButtonText}>Estudar</Text>
                </RectButton>
                <RectButton style={[styles.button,styles.ButtonSecondary]}  onPress={HandleNavigationtoGiveClassPage}>
                    <Image source={GiveClassesIcon}/>
                    <Text style={styles.ButtonText}>Dar aulas</Text>
                </RectButton>
            </View>
            <Text style={styles.ConnectionsText}>
                Total de conexões realizadas {totalConnection}{' '}<Image source={heartIcon}/>
            </Text>
        </View>
    )
}
export default Landing

