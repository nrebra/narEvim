import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import SubCategoriesStyle from './SubCategories.style';
import {thirdCategoriesProcess} from '../../../api';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {THIRD_CATEGORIES_URL} from '@env';
export const ThirdCategory = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();
  const {categoryId, CategoryTitle} = route.params;

  const {data, status, error, isLoading} = useSelector(
    state => state.thirdCategories,
  );

  // categoryId varsa, alt kategorileri çekmek için POST isteği yap
  useEffect(() => {
    console.log('categoryId:', categoryId + '-----------------');
    if (categoryId) {
      dispatch(thirdCategoriesProcess(categoryId));
    }
  }, [dispatch, categoryId]);

  // Sayfa başlığını ayarla
  useEffect(() => {
    navigation.setOptions({
      title: CategoryTitle || 'Alt Kategoriler',
      headerTitleStyle: {
        color: '#DE3459',
        fontSize: 18,
        fontWeight: 'bold',
      },
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTintColor: '#DE3459',
      headerTitleAlign: 'center',
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{marginLeft: 2}}>
          <FontAwesome5 name="arrow-left" size={24} color="#DE3459" />
        </TouchableOpacity>
      ),
    });
  }, [CategoryTitle, navigation]);

  // Veriler yüklenirken "Loading..." mesajı göster
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  // Hata oluştuğunda hatayı göster
  if (error) {
    return <Text>Error: {error}</Text>;
  }

  // Alt kategorileri listele
  const renderThirdCategoriesItem = ({item}) => (
    <TouchableOpacity style={SubCategoriesStyle.subCategoryItem}>
      <Image
        source={{uri: THIRD_CATEGORIES_URL + item.img_url}}
        resizeMode="cover"
        style={SubCategoriesStyle.subCategoryImage}
      />
      <Text style={SubCategoriesStyle.subCategoryTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={SubCategoriesStyle.container}>
      <FlatList
        data={data}
        renderItem={renderThirdCategoriesItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};
