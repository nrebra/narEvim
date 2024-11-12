import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AccountPage, Login} from '../../pages';
import {SignUp} from '../../pages/SignUp/SignUp';
import {ForgotPassword} from '../../pages/Login/ForgotPassword/ForgotPassword';

const Stack = createNativeStackNavigator();
export const Account = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="AccountPage" component={AccountPage} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
};
