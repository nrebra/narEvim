import { StyleSheet, ViewStyle } from 'react-native';
import colors from '../../styles/colors';

const baseContainer: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  borderWidth: 2,
  borderRadius: 5,
  marginVertical: 10,
  borderColor:colors.darkgray,
  
};

export const container = StyleSheet.create({
  primary: {
    paddingHorizontal: 3,
    ...baseContainer},
  secondary: { // homeInputContainer
    ...baseContainer,
    paddingHorizontal: 3,
    borderColor: colors.primary,
  },
  tertiary: { // loginInput
    ...baseContainer,
    paddingHorizontal: 3,
    borderColor: colors.lightgray,
    marginRight:20,
    
  },
  quaternary: {
    ...baseContainer,
    paddingHorizontal: 1,
  },
  icon: { // iconStyle
    marginLeft: 10,
    color:colors.primary,
  },
  SignUpInputContainer: {
    ...baseContainer,
    paddingHorizontal: 1,
  },
  input: {
    
    flex: 1,
    height: 50,
    paddingHorizontal: 10,
    fontSize: 14,
    color: colors.gray,
    paddingLeft: 10,
  },
  SurnameInput: {
    ...baseContainer,
    paddingHorizontal: 3,
    borderColor: colors.lightgray,
    flexDirection: 'row',
    alignItems: 'center',
    
  },
});
