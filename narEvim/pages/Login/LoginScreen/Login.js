import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Alert,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {loginProcess} from '../../../api';
import loginStyle from './login.style';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {Input} from '../../../components/Input/Input';
import {SpecButton} from '../../../components/Button/Button';
import {ForgotPassword} from '../ForgotPassword/ForgotPassword';
export const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const {status, error} = useSelector(state => state.auth);
  console.log(status + '************');

  const handleLogin = () => {
    if (email.trim() === '' || password.trim() === '') {
      Alert.alert('Uyarı', 'Email ve şifre boş bırakılamaz');
    } else {
      dispatch(loginProcess({email: email, password: password}));
    }
  };

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <SafeAreaView style={loginStyle.container}>
      <View>
        <Image
          source={require('../../../assets/images/logo2.png')}
          style={loginStyle.logo}
          resizeMode="contain"
        />
        <View>
          <View style={loginStyle.bodyContainer}>
            <View style={loginStyle.inputWrapper}>
              <Icon
                name="user-alt"
                style={loginStyle.Icon}
                type={IconType.FontAwesome5}
              />
              <Input
                placeholder="E-posta"
                preset="tertiary"
                value={email}
                onChangeText={setEmail}
              />
            </View>
            <View style={loginStyle.inputWrapper}>
              <Icon
                name="key-variant"
                style={loginStyle.Icon}
                type={IconType.MaterialCommunityIcons}
              />
              <Input
                placeholder="Şifre"
                secureTextEntry
                preset="tertiary"
                value={password}
                onChangeText={setPassword}
              />
            </View>
          </View>
          <View style={loginStyle.buttonContainer}>
            <SpecButton
              theme="primary"
              text={'Giriş Yap'}
              onPress={handleLogin}
            />
            <SpecButton
              theme="secondary"
              text={'Kayıt Ol'}
              onPress={handleSignUp}
            />
          </View>
          {/* Şifremi Unuttum */}
          <TouchableOpacity
            onPress={handleForgotPassword}
            style={loginStyle.forgotPasswordWrapper}>
            <Text style={loginStyle.forgotPasswordText}>Şifremi Unuttum</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
