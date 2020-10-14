import React, { ReactNode } from 'react'
import {Image,View,Text,ImageBackground,TouchableOpacity,StyleSheet} from 'react-native'
import {BorderlessButton} from 'react-native-gesture-handler'

import {useNavigation} from '@react-navigation/native'

import backIcon from '../../assets/images/icons/back.png'
import Logo from '../../assets/images/logo.png'

import styles from './styles'

interface PageHeader{
    title:string,
    // React Node significa que pode receber um componente
    // Como propriedade
    headerRight?:ReactNode
}

const PageHeader:React.FC<PageHeader>=({title,children,headerRight})=>{
    const {navigate}=useNavigation()
    function handleBack(){
        navigate('Landing')
    }
    return(
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton onPress={handleBack}>
                    <Image source={backIcon} resizeMode='contain'/>

                </BorderlessButton>
                <Image source={Logo} resizeMode='contain'/>
            </View>
            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
                {headerRight}
            </View>
                {children}
        </View>
    )
}

export default PageHeader