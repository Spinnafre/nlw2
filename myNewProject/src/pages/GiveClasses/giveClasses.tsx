import React from 'react'
import {Image,View,Text,ImageBackground,TouchableOpacity,StyleSheet} from 'react-native'

import GiveImageBackgroud from '../../assets/images/give-classes-background.png'

import styles from './styles'
import { RectButton } from 'react-native-gesture-handler'

import {useNavigation} from '@react-navigation/native'

function GiveClasses(){
    const {goBack}=useNavigation()
    function HandleNavigationtoBack(){
        goBack()
    }
    return(
        <View style={styles.container}>
            <ImageBackground resizeMode='contain' source={GiveImageBackgroud} style={styles.content}>
                <Text style={styles.title}>Quer ser um proffy?</Text>
                <Text style={styles.description}>Para começar você precisa se cadastrar na plataforma web</Text>
            </ImageBackground>
            <RectButton style={[styles.button,styles.Buttonprimary]} onPress={HandleNavigationtoBack}>
                <Text style={styles.ButtonText}>Dar aulas</Text>
            </RectButton>
        </View>
    )
}
export default GiveClasses