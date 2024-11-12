import {TextInput, View} from 'react-native';
import InputStyle, {container} from '../Input/input.style';
import Icon from 'react-native-vector-icons/MaterialIcons';
export const Input = ({
  placeholder,
  value,
  onChangeText,
  onSubmitEditing,
  iconName,
  containerStyle,
  preset = 'primary',
}) => {
  return (
    <View style={[container[preset], containerStyle]}>
      <TextInput
        style={container.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        returnKeyType="search"
        autoCorrect={false}
        autoCapitalize="none"
      />
      <Icon preset="primary" name={iconName} size={30} style={container.icon} />
    </View>
  );
};
