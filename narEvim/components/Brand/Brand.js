import {View, Image, FlatList} from 'react-native';
import React from 'react';
import {BASE_BRANDS_IMAGE_URL} from '@env';

export const Brand = ({data}) => {
  const renderItem = ({item}) => {
    return (
      <View>
        <Image
          style={{width: 100, height: 70, resizeMode: 'contain', margin: 10}}
          source={{uri: BASE_BRANDS_IMAGE_URL + item.img_url}}
        />
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        horizontal
      />
    </View>
  );
};
