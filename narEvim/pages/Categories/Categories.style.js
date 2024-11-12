import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../styles/colors';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.background,
  },
  TopContainer: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    width: '100%',
    marginBottom: 16, // Üstten biraz boşluk bırakmak için
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    color: colors.primary,
    width: '100%',
  },
  categoryItem: {
    width: width, // Padding ile uyumlu hale getirmek için
    marginVertical: 0.5,
    padding: 20,
    borderRadius: 8,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
    elevation: 3,
    shadowColor: colors.lightgray,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1, // Daha hafif gölge için
    shadowRadius: 5,
    flexDirection: 'row',
    gap: 15,
  },
  subCategoryItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.darkgray,
  },
  categoryName: {
    fontSize: 15,
    fontWeight: 'normal',
    color: colors.darkgray,
    textAlign: 'left',
  },
  subCategoryName: {
    fontSize: 18,
    color: colors.primary,
  },
  headerTitle: {
    padding: 15,
    fontSize: 25,
    color: colors.primary,
    backgroundColor: colors.background,
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 70, // Sabit bir yükseklik verebilirsiniz veya ekran yüksekliğine göre hesaplayabilirsiniz
    resizeMode: 'cover', // Resmin container'a uygun şekilde kesilmesini sağlar
    borderBottomWidth: 2, // Üstteki ve alttaki çizgilere göre hizalanması için
    borderBottomColor: colors.primary,
  },
});
