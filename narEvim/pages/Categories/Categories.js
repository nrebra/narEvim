import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import CategoriesStyle from './Categories.style';
import {useDispatch, useSelector} from 'react-redux';
import {categoriesProcess} from '../../api';
import {CATEGORIES_URL} from '@env';
export const Categories = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  //const handleThirdClick = () => navigation.navigate('ThirdCategory');

  React.useEffect(() => {
    dispatch(categoriesProcess());
  }, [dispatch]);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  const {data, status, error, isLoading} = useSelector(
    state => state.categories,
  );

  console.log(data);

  const handleSecondClick = (categoryId, categoryTitle) => {
    navigation.navigate('SecondCategory', {
      categoryId: categoryId,
      CategoryTitle: categoryTitle,
    });
  };
  const renderCategoryItem = ({item}) => {
    return (
      <TouchableOpacity
        style={CategoriesStyle.categoryItem}
        onPress={() => handleSecondClick(item.id, item.title)}>
        <View style={{width: 50, height: 50}}>
          <Image
            source={{uri: CATEGORIES_URL + item.img_url}}
            resizeMode="cover"
            style={CategoriesStyle.image}
          />
        </View>
        <Text style={CategoriesStyle.categoryName}>{item.title}</Text>
      </TouchableOpacity>
    );
  };
  const renderHeader = () => (
    <Text style={CategoriesStyle.headerTitle}>Kategoriler</Text>
  );
  return (
    <FlatList
      data={data}
      renderItem={renderCategoryItem}
      keyExtractor={item => item.id.toString()}
      ListHeaderComponent={renderHeader}
    />
  );
};
