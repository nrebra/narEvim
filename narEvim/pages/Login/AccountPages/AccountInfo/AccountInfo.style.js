// AccountInfo.style.js
import {StyleSheet} from 'react-native';
import colors from '../../../../styles/colors';
export default StyleSheet.create({
  topContain: {
    flex: 0.8,
    borderWidth: 1,
    borderColor: colors.lightgray,
    alignItems: 'center',
    flexDirection: 'row',
  },
  headText: {
    fontSize: 22,
    color: colors.primary,
    fontWeight: '600',
  },
  midContain: {
    paddingTop: 50,
    flex: 9,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textContain: {
    flex: 1,
    borderWidth: 0.5,
    marginBottom: 10,
    borderColor: colors.gray,
    borderRadius: 15,
    width: 350,
    maxHeight: 50,
    flexDirection: 'row',
  },
  text: {
    fontSize: 18,
    color: colors.primary,
    textAlign: 'left',
    height: 50,
    marginLeft: 20,
    lineHeight: 50,
    fontWeight: '700',
  },
  infoText: {
    fontSize: 18,
    textAlign: 'left',
    height: 50,
    lineHeight: 50,
    color: 'black',
  },
  item: {
    padding: 30,
    borderBottomWidth: 1,
    borderBottomColor: colors.background,
  },
});
