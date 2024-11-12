import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {myCart} from './pages/myCart/myCart';
import {Home} from './pages/Home/Home';
import {Categories} from './pages/Categories/Categories';
import {Account} from './navigation/AccountNav/Account';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import colors from './styles/colors';
import {AccountNav} from './navigation/AccountNav/AccountNav';
import {Login} from './pages/Login/LoginScreen/Login';
import {AccountPage} from './pages/Login/AccountPage';
import {useSelector} from 'react-redux';
import {CategoriesNav} from './navigation/CategoriesNav/CategoriesNav';

const Tab = createBottomTabNavigator();

export const Router = () => {
  const {isSignedIn} = useSelector(state => state.auth);
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 50,
            paddingVertical: 2,
          },
          tabBarIconStyle: {
            alignItems: 'center',
            justifyContent: 'center',
          },
        }}>
        <Tab.Screen
          name="Anasayfa"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <Icon
                name="home"
                type={IconType.FontAwesome}
                size={30}
                color={focused ? colors.primary : 'gray'}
              />
            ),
          }}
        />
        <Tab.Screen
          name="CategoriesNav"
          component={CategoriesNav}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <Icon
                name="window"
                type={IconType.MaterialIcons}
                size={30}
                color={focused ? colors.primary : 'gray'}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Sepetim"
          component={myCart}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <Icon
                name="shopping-cart"
                type={IconType.FontAwesome5}
                size={25}
                color={focused ? colors.primary : 'gray'}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Hesabım"
          component={isSignedIn === '1' ? AccountNav : Account}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <Icon
                name="account-circle-outline"
                type={IconType.MaterialCommunityIcons}
                color={focused ? colors.primary : 'gray'}
                size={30}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
