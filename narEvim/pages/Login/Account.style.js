import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: colors.background,
  },
  topContainer: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.lightgray,
  },
  midContainer: {
    flex: 1, // Sayfanın ortası için daha fazla yer ayırın
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  imgContain: {
    width: 290,
    height: 200,
    marginBottom: 5,
  },
  touchContain: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    backgroundColor: colors.background,
    marginBottom: 15,
    shadowColor: colors.darkgray,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 1,
    width: '90%', // Butonların genişliğini container'a uyumlu hale getirin
  },
  listContain: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    borderBottomColor: colors.gray,
  },
  headerText: {
    marginBottom: 10,
    fontSize: 20,
    color: colors.primary,
    fontWeight: 'bold',
    paddingHorizontal: 10, // Yazıyı yanyana tutmak için sağ ve sol boşluk ekleyin
    paddingVertical: 5, // Üst ve alt boşluk için
    alignSelf: 'flex-start',
  },
  midText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },
});
