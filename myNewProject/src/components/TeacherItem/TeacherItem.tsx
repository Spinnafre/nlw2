import React, { useEffect, useState } from "react";
import {
  Image,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { RectButton } from "react-native-gesture-handler";

import { useNavigation } from "@react-navigation/native";

import heartOutlinetIcon from "../../assets/images/icons/heart-outline.png";
import unFavoriteIcon from "../../assets/images/icons/unfavorite.png";
import whatsappIcon from "../../assets/images/icons/whatsapp.png";
import api from '../../services/api'

import styles from "./styles";

export interface TeacherProps {
  id: number;
  subject: string;
  cost: number;
  UserId: number;
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
}

interface TeacherItemProps {
  teacherItem: TeacherProps;
  favorited: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({teacherItem,favorited}) => {
  const [isFavorited, setFavorited] = useState(favorited);

  const { navigate } = useNavigation();
  function handleBack() {
    navigate("Landing");
  }
  function handleLinkToWhatsapp() {
    api.post('connections',{
      user_id:teacherItem.id
    })
    Linking.openURL(`whatsapp://send?phone=${teacherItem.whatsapp}`);
  }

  async function toggleFavorited() {
    // Pega os items do localStorage
    const favorites = await AsyncStorage.getItem("favorites");
    // Irá ter os ID's dos itens favoritos
    let favoritesArray = [];
    // Se tiver itens com favoritos no LocalStorage irá adicionar todos eles no array
    // e irá passar para o localStorage os itens
    if (favorites) {
      favoritesArray = JSON.parse(favorites);
    }
    // Se tiver algum item favoritado
    if (isFavorited) {
      // Pega o item do array de itens favoritados com i id
      // igual ao que quero desfavoritas
      const favoriteIndex = favoritesArray.findIndex((item: TeacherProps) => {
        return item.id === teacherItem.id;
      });
      favoritesArray.splice(favoriteIndex, 1);
      setFavorited(false);
    } else {
      // Se não tiver itens com favoritos irá
      // Adicionar ao array o item que escolhi como favoritos
      favoritesArray.push(teacherItem);
      setFavorited(true);
    }
    await AsyncStorage.setItem("favorites", JSON.stringify(favoritesArray));
  }

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{
            uri: teacherItem.avatar,
          }}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{teacherItem.name}</Text>
          <Text style={styles.subject}>{teacherItem.subject}</Text>
        </View>
      </View>

      <Text style={styles.bio}>{teacherItem.bio}</Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora <Text style={styles.priceValue}>{teacherItem.cost}</Text>
        </Text>
      </View>
      <View style={styles.ButtonsContainer}>
        <RectButton
          onPress={toggleFavorited}
          style={[
            styles.FavoriteButton,
            // Adiciona a cor vermelha na caixa do botão favorito caso o ícone seja
            // favoritado
            isFavorited ? styles.favorited : {},
          ]}
        >
          {/* Se tiver favoritos irá mostrar o ícone do coração cortado
          caso contrário irá mostrar o coração cheio
          */}
          {isFavorited ? (
            <Image source={unFavoriteIcon} />
          ) : (
            <Image source={heartOutlinetIcon} />
          )}
        </RectButton>
        <RectButton style={styles.ContactButton} onPress={handleLinkToWhatsapp}>
          <Image source={whatsappIcon} />
          <Text style={styles.ContactButtonText}>Entrar em contato</Text>
        </RectButton>
      </View>
    </View>
  );
};

export default TeacherItem;
