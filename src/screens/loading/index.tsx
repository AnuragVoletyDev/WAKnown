import React from 'react';
import NoCollectAlert from '../../components/no-collect-alert';
import {COLORS} from '../../constants/Colors';
import {View, useColorScheme} from 'react-native';
import {styles} from '../home/style';
const LoadingScreen = () => {
  return (
    <>
      <NoCollectAlert />
      <View
        style={{
          ...styles.wrapper,
          backgroundColor: COLORS[useColorScheme() || 'light'].background,
        }}
      />
    </>
  );
};
export default LoadingScreen;
