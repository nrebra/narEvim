import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Image, Alert} from 'react-native';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {loginProcess} from '../../../api';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {Input} from '../../../components/Input/Input';
import {SpecButton} from '../../../components/Button/Button';
import loginStyle from '../LoginScreen/login.style';

export const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const {status, error} = useSelector(state => state.auth);

  const handleLogin = () => {
    if (email.trim() === '') {
      Alert.alert('Uyarı', 'Email boş bırakılamaz');
    } else {
      dispatch(loginProcess({email: email}));
    }
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
          </View>
          <View style={loginStyle.buttonContainer}>
            <SpecButton
              theme="primary"
              text={'Şİfreyi Sıfırla'}
              onPress={handleLogin}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
