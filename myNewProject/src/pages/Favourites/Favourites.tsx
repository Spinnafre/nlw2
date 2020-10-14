import React,{useEffect,useState} from "react";
import {
  Image,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from "react-native";

import PageHeader from "../../components/pageHeader/pageHeader";
import TeacherItem,{TeacherProps} from '../../components/TeacherItem/TeacherItem'
import AsyncStorage from '@react-native-community/async-storage'
import { useFocusEffect } from "@react-navigation/native";

import styles from "./styles";

function Favourites() {
  const [Favorites, setFavorites] = useState([]);

  useFocusEffect(()=>{
    loadFavorites()
  })

  function loadFavorites(){
    AsyncStorage.getItem('favorites').then(resp=>{
      if(resp){
        const favoriteTeacher=JSON.parse(resp)
        setFavorites(favoriteTeacher)
      }
    })
  }
  return (
    <View style={styles.container}>
      <PageHeader title="Proffys favoritos" />
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {Favorites.map((item:TeacherProps)=>{
          return <TeacherItem  key={item.id} teacherItem={item} favorited/>
        })}
        
        
      </ScrollView>
    </View>
  );
}

export default Favourites;
