import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../styles/colors';

const screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  listContainer: {
    paddingHorizontal: 0,
  },
  subCategoryItem: {
    width: screenWidth,
    marginVertical: 2, // Dikeyde boşluk bıraktım
    padding: 9,
    backgroundColor: colors.background,
    justifyContent: 'flex-start',
    alignItems: 'center',
    elevation: 2,
    flexDirection: 'row',
    gap: 15,
  },
  subCategoryImage: {
    width: 100,
    height: 70,
    marginBottom: 1,
  },
  subCategoryTitle: {
    fontSize: 15,
    color: colors.darkgray,
  },
});
