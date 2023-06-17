import {Text, View, useColorScheme} from 'react-native';
import Info from '../../icons/Info';
import {styles} from './style';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import React from 'react';
const NoCollectAlert = () => {
  return (
    <View
      style={{
        ...styles.wrapper,
        shadowColor: Colors[useColorScheme() || 'light'].backgroundInverse,
      }}>
      <Info />
      <Text style={styles.text}>
        Your messages are securely stored locally on your device. We do not
        collect or store your messages in the cloud.
      </Text>
    </View>
  );
};

export default NoCollectAlert;
