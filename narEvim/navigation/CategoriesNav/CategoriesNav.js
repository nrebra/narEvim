import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Categories} from '../../pages/Categories/Categories';
import {SecondCategory} from '../../pages/Categories/SubCategories/SecondCategories';
import {ThirdCategory} from '../../pages/Categories/SubCategories/ThirdCategories';
const Stack = createNativeStackNavigator();
export const CategoriesNav = () => {
  return (
    <Stack.Navigator initialRouteName="Categories">
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SecondCategory"
        component={SecondCategory}
        //  options={{headerShown: false}}
      />
      <Stack.Screen
        name="ThirdCategory"
        component={ThirdCategory}
        //options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
