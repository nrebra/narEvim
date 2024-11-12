import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const baseStyle = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    marginLeft: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default {
  primary: StyleSheet.create({
    ...baseStyle,
    button: {
      ...baseStyle.button,
      backgroundColor: colors.primary,
    },
    buttonText: {
      ...baseStyle.buttonText,
      color: 'white',
    },
  }),
  secondary: StyleSheet.create({
    ...baseStyle,
    button: {
      ...baseStyle.button,
      backgroundColor: 'white',
      borderColor: colors.primary,
      borderWidth: 1,
    },
    buttonText: {
      ...baseStyle.buttonText,
      color: colors.primary,
    },
  }),
};
