import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  bodyContainer: {
    flex: 1,
  },
  InputContainer: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  logoContainer: {
    alignItems: 'center',
    marginVertical: 5,
  },
  logo: {
    width: 200,
    height: 50,
  },
  bannerContainer: {
    marginVertical: 10,
  },
  bannerImage: {
    width: '100px',
    height: 200,
    resizeMode: 'cover',
    margin: 10,
  },
  imageWrapper: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  brandLogo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginRight: 15,
  },
  popularProductsSection: {
    marginVertical: 20,
  },
  productContainer: {
    marginBottom: 20,
  },
  productImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  productName: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 16,
  },
  brandsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
    marginVertical: 10,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  populerProductsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
    marginVertical: 10,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  brandContainer: {
    marginBottom: 20,
  },
  brandWrapper: {
    marginHorizontal: 10,
    alignItems: 'center',
  },

  brandimage: {
    width: 90, // Resim genişliği
    height: 40, // Resim yüksekliği

    //resizeMode: 'cover', // Resim boyutlandırma
  },
  Brandcontainer: {
    // flex: 1,

    flexDirection: 'row',
  },
});
