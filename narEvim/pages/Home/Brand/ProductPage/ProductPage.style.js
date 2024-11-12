import {StyleSheet} from 'react-native';
import colors from '@/assets/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
  },
  topContain: {
    height: 70,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.primary,
  },
  midContain: {
    flex: 10,
    width: '95%',
  },
  bottomContain: {
    flex: 1,
    flexDirection: 'row',
  },
  priceTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  image: {
    width: 410,
    height: 550,
  },
  productTitle: {
    fontSize: 20,
    marginTop: 20,
    color: colors.darkgray,
  },
  infoHeader: {
    color: colors.darkgray,
    fontSize: 22,
    fontWeight: '900',
    marginTop: 20,
  },
  description: {
    fontSize: 24,
    marginTop: 20,
    color: colors.darkgray,
  },
  priceContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    justifyContent: 'center',
    backgroundColor: colors.primary,
    borderRadius: 3,
    width: 100,
    height: 40,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
});

export default styles;
