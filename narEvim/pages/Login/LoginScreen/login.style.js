import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.background,
  },
  logo: {
    width: 250,
    height: 150,
    alignSelf: 'center',
    marginBottom: 30,
  },
  bodyContainer: {
    marginTop: 10,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 5,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  Icon: {
    marginRight: 10,
    color: colors.primary,
  },
  forgotPasswordWrapper: {
    marginLeft: 50,
    marginTop: 10,
  },
  forgotPasswordText: {
    fontSize: 14,
  },
});
