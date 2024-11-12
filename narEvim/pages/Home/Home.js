import * as React from 'react';
import {View, Image, TouchableOpacity, ScrollView, Text} from 'react-native';
import HomeStyle from './Home.style';
import {Input} from '../../components/Input/Input';
import {useSelector} from 'react-redux';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {getBrandProduct, getSlider} from '../../api';
import {Slider} from '../../components';
import {Brand} from '../../components';

export const Home = () => {
  const [searchValue, setSearchValue] = React.useState('');
  const {data} = useSelector(state => state.slider);
  const {data: brandData} = useSelector(state => state.brandProduct);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSlider());
    dispatch(getBrandProduct());
  }, [dispatch]);

  const handleSearch = () => {
    console.log('Aranan ürün:', searchValue);
  };
  return (
    <View style={HomeStyle.bodyContainer}>
      <View style={HomeStyle.logoContainer}>
        <Image
          source={require('../../assets/images/logo2.png')}
          style={HomeStyle.logo}
          resizeMode="contain"
        />
      </View>
      <View style={HomeStyle.InputContainer}>
        <Input
          placeholder="Aramak istediğiniz ürünü girin.."
          value={searchValue}
          iconName="search"
          onChangeText={setSearchValue}
          onSubmitEditing={handleSearch}
          preset="secondary"
        />
      </View>
      <ScrollView>
        <Slider data={data} />
        <Text style={HomeStyle.brandsTitle}>Markalar</Text>
        <Brand data={brandData} />
        <Text style={HomeStyle.brandsTitle}>En Beğenilen Ürünler</Text>
      </ScrollView>
    </View>
  );
};
