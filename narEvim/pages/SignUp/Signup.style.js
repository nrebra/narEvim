import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../styles/colors';
const {width} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
  },
  bodyContainer: {
    marginRight: 33,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: -15,
  },
  Icon: {
    marginRight: 5,
    marginLeft: -6,
    color: colors.primary,
    fontSize: 25,
  },
  Surname: {
    marginRight: 3,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
    marginLeft: 30,
  },
  separator: {
    height: 5,
    width: width,
    backgroundColor: colors.lightgray,
    marginVertical: 16,
  },
  bottomSection: {
    flex: 1,
    justifyContent: 'center',
  },
  firstBlock: {
    width: width,
    height: '100',
    marginBottom: 10,
    backgroundColor: 'white',
    right: 40,
    padding: 20,
  },
  secondBlock: {
    width: width,
    marginBottom: 250,
    backgroundColor: 'white',
    padding: 22,
    right: 40,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'normal',
    marginBottom: 10,
    color: colors.primary,
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: -180,
    padding: 15,
  },
  inputContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 5,
    marginRight: 10,
  },
});
