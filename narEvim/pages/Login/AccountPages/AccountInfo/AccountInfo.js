import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AccountInfoStyle from './AccountInfo.style';
import colors from '../../../../styles/colors';
import {useDispatch, useSelector} from 'react-redux';
import {getMemberInfo} from '../../../../api';

export const AccountInfo = () => {
  const dispatch = useDispatch();
  const {data, status, message} = useSelector(state => state.memberInfo);

  useEffect(() => {
    dispatch(getMemberInfo());
  }, [dispatch]);

  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <View style={AccountInfoStyle.midContain}>
        {/* İsim Soyisim */}
        <View style={AccountInfoStyle.textContain}>
          <MaterialCommunityIcons
            style={{top: 10, left: 5}}
            name="account-circle-outline"
            size={30}
            color={colors.primary}
          />
          <Text style={AccountInfoStyle.text}>İsim Soyisim : </Text>
          <Text style={AccountInfoStyle.infoText}>
            {data?.name} {data?.surname}
          </Text>
        </View>

        {/* E-Posta Adresi */}
        <View style={AccountInfoStyle.textContain}>
          <MaterialCommunityIcons
            style={{top: 10, left: 5}}
            name="email"
            size={30}
            color={colors.primary}
          />
          <Text style={AccountInfoStyle.text}>E-Posta Adresi : </Text>
          <Text style={AccountInfoStyle.infoText}>{data?.email}</Text>
        </View>

        {/* Telefon Numarası */}
        <View style={AccountInfoStyle.textContain}>
          <FontAwesome
            style={{top: 10, left: 7}}
            name="phone"
            size={30}
            color={colors.primary}
          />
          <Text style={AccountInfoStyle.text}>Telefon Numarası : </Text>
          <Text style={AccountInfoStyle.infoText}>{data?.telephone}</Text>
        </View>
      </View>
    </View>
  );
};
