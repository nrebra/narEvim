import colors from '@/assets/colors';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  Modal,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ProductListStyle from '../ProductList.style';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-dynamic-vector-icons';
import {BASE_BRANDS_IMAGE_URL} from '@env';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const ProductList = () => {
  const SortModal = ({visible, onClose, onSort}) => (
    <Modal transparent={true} visible={visible} onRequestClose={onClose}>
      <View style={ProductListStyle.modalOverlay}>
        <View style={ProductListStyle.modalContainer}>
          <View style={{flexDirection: 'row'}}>
            <Text style={ProductListStyle.modalTitle}>Ürünleri Sırala</Text>
            <TouchableOpacity onPress={onClose}>
              <AntDesign
                style={{left: 160, top: -10}}
                name="closesquare"
                size={30}
                color={colors.primary}
              />
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Entypo name="arrow-bold-up" size={36} color={colors.primary} />
            <TouchableOpacity
              onPress={() => {
                onSort('ASC');
                onClose();
              }}>
              <Text style={ProductListStyle.option}>Fiyata göre artan</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Entypo name="arrow-bold-down" size={36} color={colors.primary} />
            <TouchableOpacity
              onPress={() => {
                onSort('DESC');
                onClose();
              }}>
              <Text style={ProductListStyle.option}>Fiyata göre azalan</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );

  // BrandProdList Component
  const BrandProdList = ({
    brandId,
    title,
    isHomeVisible,
    isBraProdVisible,
    setIsHomeVisible,
    setIsBraProdVisible,
  }) => {
    const dispatch = useDispatch();
    const brandProds = useSelector(state => state.brandProdList);
    const [numColumns, setNumColumns] = useState(2);
    const icons = Array(5).fill(null);
    const [sort, setSort] = useState('ASC');
    const [modalVisible, setModalVisible] = useState(false);
    const [brandProdListVis, setBrandProdListVis] = useState(true);
    const [prodInfoVis, setProdInfoVis] = useState(false);
    const [selectedProd, setSelectedProd] = useState('');
    const [searchProdVis, setSearchProdVis] = useState(true);

    const handleSort = order => {
      console.log(`Sıralama seçildi: ${order}`);
      setSort(order);
      dispatch(
        fetchBrandProd({
          page: '0',
          per_page: '100',
          brand_id: brandId,
          sorting: order,
        }),
      );
    };

    useEffect(() => {
      if (brandId) {
        dispatch(
          fetchBrandProd({
            page: '0',
            per_page: '100',
            brand_id: brandId,
            sorting: sort,
          }),
        );
        console.log(brandProds.message);
      }
      return () => {
        dispatch(resetBrandProdList());
      };
    }, [dispatch, brandId, sort]);

    const backPress = () => {
      setIsHomeVisible(!isHomeVisible);
      setIsBraProdVisible(!isBraProdVisible);
    };

    const handleProdInfo = item => {
      setBrandProdListVis(!brandProdListVis);
      setProdInfoVis(!prodInfoVis);
      setSelectedProd(item);
      console.log(item.id);
    };

    const renderItem = ({item}) => (
      <View style={ProductListStyle.item}>
        <Image
          resizeMode="contain"
          source={{uri: `${BASE_BRANDS_IMAGE_URL}${item.img_url}`}}
          style={ProductListStyle.prodImage}
        />
        <Text style={ProductListStyle.brandTitle}>{item.brand}</Text>
        <Text style={ProductListStyle.title}>{item.title}</Text>
        <View style={{flex: 1, flexDirection: 'row'}}>
          {icons.map((_, index) => (
            <Entypo key={index} name="star" size={18} color={colors.gray} />
          ))}
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={[ProductListStyle.priceTitle]}>
            {item.price ? item.price.slice(0, 5) : 'N/A'} TL
          </Text>
          <TouchableOpacity onPress={() => handleProdInfo(item)}>
            <View style={ProductListStyle.button}>
              <Text style={ProductListStyle.buttonText}>Ürün Detayı</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );

    return (
      <SafeAreaView style={{flex: 1, backgroundColor: colors.background}}>
        <View style={ProductListStyle.container}>
          {brandProdListVis && (
            <View style={ProductListStyle.topContain}>
              <TouchableOpacity onPress={backPress}>
                <Ionicons name="arrow-back" size={36} color={colors.primary} />
              </TouchableOpacity>
              <Text
                style={{
                  color: colors.primary,
                  fontSize: 24,
                  fontWeight: '600',
                }}>
                {title}
              </Text>
            </View>
          )}
          {brandProdListVis && (
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <View style={ProductListStyle.sortContain}>
                <MaterialCommunityIcons
                  name="sort-variant"
                  size={36}
                  color={colors.primary}
                />
                <Text
                  style={{
                    color: colors.primary,
                    fontSize: 24,
                    fontWeight: '600',
                  }}>
                  Sırala
                </Text>
              </View>
            </TouchableOpacity>
          )}
          {brandProdListVis && (
            <SortModal
              visible={modalVisible}
              onClose={() => setModalVisible(false)}
              onSort={handleSort}
            />
          )}
          {brandProdListVis && (
            <View style={ProductListStyle.products}>
              {brandProds.status === 'failed' && (
                <Text style={{fontSize: 15}}>{brandProds.message}</Text>
              )}
              <FlatList
                data={brandProds.data}
                renderItem={renderItem}
                keyExtractor={(item, index) => `${item.id}-${index}`}
                numColumns={numColumns}
                key={numColumns}
                contentContainerStyle={ProductListStyle.container2}
              />
            </View>
          )}
          {prodInfoVis && selectedProd !== '' && (
            <ProductPage
              prodId={selectedProd.id}
              setSearchProdVis={setSearchProdVis}
              searchProdVis={searchProdVis}
              brandProdListVis={brandProdListVis}
              prodInfoVis={prodInfoVis}
              setProdInfoVis={setProdInfoVis}
              setBrandProdListVis={setBrandProdListVis}
            />
          )}
        </View>
      </SafeAreaView>
    );
  };
};
