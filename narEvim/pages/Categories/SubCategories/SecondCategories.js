import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import SubCategoriesStyle from './SubCategories.style';
import {SECOND_CATEGORIES_URL} from '@env';
import {secondCategoriesProcess} from '../../../api';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export const SecondCategory = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();
  const {categoryId, CategoryTitle} = route.params;

  const {data, status, error, isLoading} = useSelector(
    state => state.secondCategories,
  );

  // categoryId varsa, alt kategorileri çekmek için POST isteği yap
  useEffect(() => {
    if (categoryId) {
      dispatch(secondCategoriesProcess(categoryId));
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
  const handleThirdClick = (categoryId, categoryTitle) => {
    navigation.navigate('ThirdCategory', {
      categoryId: categoryId,
      CategoryTitle: categoryTitle,
    });
  };
  // Alt kategorileri listele
  const renderSecondCategoriesItem = ({item}) => (
    <TouchableOpacity
      style={SubCategoriesStyle.subCategoryItem}
      onPress={() => handleThirdClick(item.id, item.title)}>
      <Image
        source={{uri: SECOND_CATEGORIES_URL + item.img_url}}
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
        renderItem={renderSecondCategoriesItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};
