import React, { useState, useEffect } from "react";
import {
  Image,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import AsyncStorage from '@react-native-community/async-storage'
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

import PageHeader from "../../components/pageHeader/pageHeader";
import TeacherItem from "../../components/TeacherItem/TeacherItem";

import api from "../../services/api";

import { TeacherProps } from "../../components/TeacherItem/TeacherItem";
import { useFocusEffect } from "@react-navigation/native";

import styles from "./styles";

function TeacherList() {
  const [subject, setSubject] = useState("");
  const [teachers, setTeacher] = useState([]);
  const [Favorites, setFavorites] = useState<number[]>([]);
  const [week_day, setWeekDay] = useState("");
  const [time, setTime] = useState("");

  const [FiltersVisible, setFilterVisible] = useState(false);
  // Adicionar os itens com ID do localStorage nos favoritos
  function loadFavorites(){
    AsyncStorage.getItem('favorites').then(resp=>{
      if(resp){
        const favoriteTeacher=JSON.parse(resp)
        const favoriteTeacherId=favoriteTeacher.map((teacher:TeacherProps)=>{
          return teacher.id
        })
        setFavorites(favoriteTeacherId)
      }
    })
  }

  useFocusEffect(()=>{
    loadFavorites()
  })
  
  function setFilterShow() {
    setFilterVisible(!FiltersVisible);
  }
  async function handleSubmit() {
    loadFavorites()
    const resp = await api.get("classes", {
      params: {
        subject,
        week_day,
        time,
      },
    });
    setTeacher(resp.data);
  }

  return (
    <View style={styles.container}>
      <PageHeader
        title="Proffys Disponíveis"
        headerRight={
          <BorderlessButton onPress={setFilterShow}>
            <Feather name="filter" size={20} color="#fff" />
          </BorderlessButton>
        }
      >
        {FiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.Label}>Matéria</Text>
            <TextInput
              style={styles.input}
              placeholder="Selecione a matéria"
              placeholderTextColor="#c1bccc"
              value={subject}
              onChangeText={(e) => setSubject(e)}
            />
            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.Label}>Dia da Semana</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Selecione o dia"
                  placeholderTextColor="#c1bccc"
                  value={week_day}
                  onChangeText={(e) => setWeekDay(e)}
                />
              </View>
              <View style={styles.inputBlock}>
                <Text style={styles.Label}>Horário</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Selecione o Horário"
                  placeholderTextColor="#c1bccc"
                  value={time}
                  onChangeText={(e) => setTime(e)}
                />
              </View>
            </View>
            <RectButton style={styles.buttonSubmit} onPress={handleSubmit}>
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {teachers.map((teacher: TeacherProps) => {
          // Se tiver algum item favoritado, irá passar para o componente TeacherItem
          // o atributo favorited com valor verdadeiro, caso contrário irá passar falso
          return <TeacherItem key={teacher.id} teacherItem={teacher} favorited={Favorites.includes(teacher.id)}/>;
        })}
      </ScrollView>
    </View>
  );
}

export default TeacherList;
