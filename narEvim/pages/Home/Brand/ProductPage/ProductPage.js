import React, {useEffect, useState} from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ScrollView,
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProductDetail} from '../../slices/product/productDetail';
import {fetchFavoritte} from '../../slices/favoritte/toggleFavoritte';
import {fetchAddBasket} from '../../slices/cart/addBasket';
import ProductPageStyle from './ProductPage.style';

export const ProductPage = ({
  prodId,
  prodInfoVis,
  brandProdListVis,
  searchProdVis,
  setBrandProdListVis,
  setProdInfoVis,
  setSearchProdVis,
}) => {
  const dispatch = useDispatch();
  const productDetail = useSelector(state => state.productDetail);
  const [favoritteColor, setFavoritteColor] = useState(colors.gray);

  useEffect(() => {
    dispatch(fetchProductDetail({product_id: prodId}));
  }, [dispatch, prodId]);

  if (productDetail.status === 'loading') {
    return <Text>Loading...</Text>;
  }

  if (productDetail.status === 'failed') {
    return <Text>Error: {productDetail.message}</Text>;
  }

  const backClick = () => {
    if (brandProdListVis) {
      setBrandProdListVis(true);
      setProdInfoVis(false);
    }
    if (searchProdVis) {
      setSearchProdVis(true);
      setProdInfoVis(false);
    }
  };

  const handleFavoritteClick = () => {
    dispatch(fetchFavoritte({product_id: prodId}));
    setFavoritteColor(prevColor =>
      prevColor === colors.gray ? colors.primary : colors.gray,
    );
  };

  const handleAddBasket = () => {
    dispatch(fetchAddBasket({product_id: prodId, qty: '1'}));
  };

  return (
    <View style={ProductPageStyle.container}>
      <View style={ProductPageStyle.topContain}>
        <View style={{flex: 1}}>
          <TouchableOpacity onPress={backClick}>
            <Ionicons name="arrow-back" size={36} color={colors.primary} />
          </TouchableOpacity>
        </View>
        <View style={{flex: 9}}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={ProductPageStyle.title}>
            {productDetail.data
              ? productDetail.data.title
              : 'Product not found'}
          </Text>
        </View>
      </View>

      <View style={ProductPageStyle.midContain}>
        <ScrollView>
          <FlatList
            data={productDetail.images}
            horizontal
            keyExtractor={item => item}
            renderItem={({item}) => (
              <Image
                resizeMode="contain"
                source={{uri: item}}
                style={ProductPageStyle.image}
              />
            )}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          />
          <Text style={ProductPageStyle.productTitle}>
            {productDetail.data?.title}
          </Text>
          <Text style={ProductPageStyle.infoHeader}>
            Ürün hakkında bilgiler:
          </Text>
          <Text style={ProductPageStyle.description}>
            {productDetail.data?.description}
          </Text>
        </ScrollView>
      </View>

      <View style={ProductPageStyle.bottomContain}>
        <View style={ProductPageStyle.priceContainer}>
          <Text style={ProductPageStyle.priceTitle}>
            {productDetail.data
              ? productDetail.data.price
              : 'Product not found'}{' '}
            TL
          </Text>
        </View>
        <View style={ProductPageStyle.iconContainer}>
          <TouchableOpacity onPress={handleFavoritteClick}>
            <Ionicons
              name="heart-circle-outline"
              size={48}
              color={favoritteColor}
            />
          </TouchableOpacity>
        </View>
        <View style={ProductPageStyle.buttonContainer}>
          <TouchableOpacity onPress={handleAddBasket}>
            <View style={ProductPageStyle.addButton}>
              <Text style={ProductPageStyle.buttonText}>Sepete Ekle</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
