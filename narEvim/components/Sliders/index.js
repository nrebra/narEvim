import {View, Text, SafeAreaView, Image, FlatList} from 'react-native';
import React from 'react';
import {BASE_IMAGE_URL} from '@env';

export const Slider = ({data}) => {
  const renderItem = ({item}) => {
    return (
      <View>
        <Image
          style={{width: '100px', height: 200, resizeMode: 'cover', margin: 10}}
          source={{uri: BASE_IMAGE_URL + item.img_url}}
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
      />
    </View>
  );
};
