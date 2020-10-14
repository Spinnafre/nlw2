import { StatusBar } from 'expo-status-bar';
import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LandingPage from './src/pages/landing/landing'
import {AppLoading} from 'expo'
import {Archivo_400Regular,Archivo_700Bold,useFonts} from '@expo-google-fonts/archivo'
import {Poppins_600SemiBold} from '@expo-google-fonts/poppins'

import Appstack from './src/routes/AppStack'
export default function App() {
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_600SemiBold

  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }else{
    return (
      <>
        <StatusBar style="light" />
        < Appstack/>
      </>
    );
  }
  
}
