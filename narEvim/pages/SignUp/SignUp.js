import {useDispatch, useSelector} from 'react-redux';
import {registerProcess} from '../../api';
import {Alert, Text, View, ActivityIndicator} from 'react-native'; // ActivityIndicator eklendi
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {Input} from '../../components/Input/Input';
import SignupStyle from './Signup.style';
import {SpecButton} from '../../components/Button/Button';
import ButtonStyle from '../../components/Button/Button.style';
import {useState, useEffect} from 'react';

export const SignUp = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [telephone, setTelephone] = useState('');
  const [surname, setSurname] = useState('');
  const [nameSurname, setNameSurname] = useState(''); // nameSurname state'i eklendi

  const dispatch = useDispatch();
  const {isLoading, error} = useSelector(state => state.auth);

  useEffect(() => {
    // name ve surname birleştirildiğinde nameSurname güncellenir
    setNameSurname(`${name.trim()} ${surname.trim()}`);
  }, [name, surname]);

  const handleRegister = async () => {
    if (
      email.trim() === '' ||
      password.trim() === '' ||
      telephone.trim() === '' ||
      name.trim() === '' ||
      surname.trim() === ''
    ) {
      Alert.alert(
        'Uyarı',
        'Email, şifre, telefon, isim ve soyisim boş bırakılamaz',
      );
    } else {
      // Boş değilse kayıt işlemini başlat
      const resultAction = await dispatch(
        registerProcess({
          email,
          password,
          telephone,
          name: nameSurname, // name olarak nameSurname gönderiliyor
        }),
      );

      if (registerProcess.fulfilled.match(resultAction)) {
        Alert.alert('Başarılı', 'Kayıt başarılı!');
        navigation.navigate('AccountNav'); // Kayıt başarılıysa AccountNav'a yönlendir
      } else {
        Alert.alert('Hata', 'Kayıt sırasında bir hata oluştu');
      }
    }
  };

  return (
    <SafeAreaView style={SignupStyle.container}>
      <View style={SignupStyle.form}>
        <View style={SignupStyle.firstBlock}>
          <Text style={SignupStyle.sectionTitle}>İletişim Bilgileri</Text>
          <View />
          <View style={SignupStyle.inputContainer}>
            <Icon
              style={SignupStyle.Icon}
              name="account"
              type={IconType.MaterialCommunityIcons}
            />
            <Input
              placeholder="Ad"
              preset="tertiary"
              value={name}
              onChangeText={setName}
            />
          </View>

          <View style={SignupStyle.Surname}>
            <Input
              placeholder="Soyad"
              preset="SurnameInput"
              value={surname}
              onChangeText={setSurname}
            />
          </View>
          <View style={SignupStyle.inputContainer}>
            <Icon
              style={SignupStyle.Icon}
              name="phone"
              type={IconType.MaterialCommunityIcons}
            />
            <Input
              placeholder="Telefon"
              preset="tertiary"
              value={telephone}
              onChangeText={setTelephone}
            />
          </View>
        </View>

        <View style={SignupStyle.secondBlock}>
          <Text style={SignupStyle.sectionTitle}>E-Posta & Şifre</Text>
          <View style={SignupStyle.inputContainer}>
            <Icon
              style={SignupStyle.Icon}
              name="email"
              type={IconType.MaterialCommunityIcons}
            />
            <Input
              placeholder="E-posta"
              preset="tertiary"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={SignupStyle.inputContainer}>
            <Icon
              style={SignupStyle.Icon}
              name="lock"
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
          <View style={ButtonStyle.buttonContainer}>
            <SpecButton
              theme="primary"
              text="Kaydet"
              onPress={handleRegister}
              disabled={isLoading} // Kayıt işlemi sırasında butonu devre dışı bırak
            />
          </View>
          {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
          {error ? <Text style={{color: 'red'}}>{error}</Text> : null}
        </View>
      </View>
    </SafeAreaView>
  );
};
