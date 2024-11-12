import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AccountStyle from './Account.style';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';
import {logoutProcess} from '../../api';

export const AccountPage = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleOrdersClick = () => navigation.navigate('Orders');
  const handleFavorittesClick = () => navigation.navigate('FavProducts');
  const handleAddressesClick = () => navigation.navigate('Adress');
  const handleInfoClick = () => navigation.navigate('AccountInfo');
  const handleChaPassClick = () => navigation.navigate('PasswordChng');

  const handleLogout = async () => {
    try {
      const result = await dispatch(logoutProcess()).unwrap();
      console.log('Logout result:', result); // Logout sonucunu loglayın
      if (result?.status === 'success') {
        navigation.navigate('Login');
      } else {
        Alert.alert('Hata', 'Çıkış işlemi başarısız.');
      }
    } catch (error) {
      Alert.alert('Hata', 'Çıkış işlemi başarısız oldu.');
      console.log('Logout failed:', error.message); // Hata mesajını loglayın
    }
  };

  return (
    <View style={AccountStyle.container}>
      <View style={AccountStyle.topContainer}>
        <Text style={AccountStyle.headerText}>Hesabım</Text>
      </View>

      <View style={AccountStyle.midContainer}>
        <Image
          source={require('../../assets/images/logo2.png')}
          style={AccountStyle.imgContain}
          resizeMode="contain"
        />
        <TouchableOpacity
          onPress={handleOrdersClick}
          style={AccountStyle.touchContain}>
          <View style={AccountStyle.listContain}>
            <FontAwesome name="history" size={24} color="black" />
            <Text style={AccountStyle.midText}> Siparişlerim</Text>
            <Entypo name="arrow-with-circle-right" size={25} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleFavorittesClick}
          style={AccountStyle.touchContain}>
          <AntDesign name="heart" size={24} color="black" />
          <View style={AccountStyle.listContain}>
            <Text style={AccountStyle.midText}> Favorilerim</Text>
            <Entypo name="arrow-with-circle-right" size={25} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleAddressesClick}
          style={AccountStyle.touchContain}>
          <View style={AccountStyle.listContain}>
            <FontAwesome6 name="location-dot" size={24} color="black" />
            <Text style={AccountStyle.midText}> Adreslerim</Text>
            <Entypo name="arrow-with-circle-right" size={25} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleInfoClick}
          style={AccountStyle.touchContain}>
          <View style={AccountStyle.listContain}>
            <FontAwesome5 name="user-edit" size={24} color="black" />
            <Text style={AccountStyle.midText}> Kullanıcı Bilgileri</Text>
            <Entypo name="arrow-with-circle-right" size={25} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleChaPassClick}
          style={AccountStyle.touchContain}>
          <View style={AccountStyle.listContain}>
            <MaterialCommunityIcons name="key" size={24} color="black" />
            <Text style={AccountStyle.midText}> Şifre değiştir</Text>
            <Entypo name="arrow-with-circle-right" size={25} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleLogout}
          style={[AccountStyle.touchContain, {marginBottom: 100}]}>
          <View style={AccountStyle.listContain}>
            <AntDesign name="logout" size={24} color="black" />
            <Text style={AccountStyle.midText}> Çıkış yap</Text>
            <Entypo name="arrow-with-circle-right" size={25} color="black" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
