import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import ButtonStyle from './Button.style';

export const SpecButton = ({text, onPress, theme}) => {
  return (
    <TouchableOpacity style={ButtonStyle[theme].button} onPress={onPress}>
      <Text style={ButtonStyle[theme].buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};
