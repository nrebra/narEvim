import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AccountInfo} from '../../pages/Login/AccountPages/AccountInfo/AccountInfo.js';
import {PasswordChng} from '../../pages/Login/AccountPages/PasswordChng/PasswordChng.js';
import {Orders} from '../../pages/Login/AccountPages/Orders/Orders.js';
import {FavProducts} from '../../pages/Login/AccountPages/FavProducts/FavProducts.js';
import {AccountPage} from '../../pages/Login/AccountPage.js';
import {Text} from 'react-native';
import {Adress} from '../../pages/Login/AccountPages/Adress/Adress.js';
import AccountStyle from '../../pages/Login/Account.style.js';

const Stack = createNativeStackNavigator();

export const AccountNav = () => {
  return (
    <Stack.Navigator initialRouteName="AccountPage">
      <Stack.Screen
        name="AccountPage"
        component={AccountPage} // AccountPage'i ekle
        options={{headerShown: false}} // Header'ı gizlemek istersen
      />
      <Stack.Screen
        name="Orders"
        component={Orders}
        options={{
          headerTitle: () => (
            <Text style={AccountStyle.headerText}>Siparişlerim</Text>
          ),
        }}
      />
      <Stack.Screen
        name="FavProducts"
        component={FavProducts}
        options={{
          headerTitle: () => (
            <Text style={AccountStyle.headerText}>Favorilerim</Text>
          ),
        }}
      />
      <Stack.Screen
        name="Adress"
        component={Adress}
        options={{
          headerTitle: () => (
            <Text style={AccountStyle.headerText}>Adreslerim</Text>
          ),
        }}
      />
      <Stack.Screen
        name="AccountInfo"
        component={AccountInfo}
        options={{
          headerTitle: () => (
            <Text style={AccountStyle.headerText}>Kullanıcı Bilgilerim</Text>
          ),
        }}
      />
      <Stack.Screen
        name="PasswordChng"
        component={PasswordChng}
        options={{
          headerTitle: () => (
            <Text style={AccountStyle.headerText}>Şifre İşlemleri</Text>
          ),
        }}
      />
    </Stack.Navigator>
  );
};
