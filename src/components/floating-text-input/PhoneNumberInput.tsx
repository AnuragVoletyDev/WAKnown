import React, {useEffect, useState} from 'react';
import {
  View,
  TextInput,
  Text,
  TextInputProps,
  useColorScheme,
} from 'react-native';
import {COLORS} from '../../constants/Colors';
import {TEXT} from '../../constants/Text';
import {getCountryCode, getRawPhoneNumber} from '../../utils/PhoneNumber';
import {PhoneNumberInputStyles as styles} from './styles';

interface Props extends TextInputProps {
  label: string;
}

const FloatingTextInput = (props: Props) => {
  const {label, value, onChangeText, ...others} = props;

  const [countryCode, setCountryCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    setCountryCode(getCountryCode(value || '') || '91');
    setPhoneNumber(getRawPhoneNumber(value || ''));
  }, [value]);

  const handleCountryCodeChange = (_countryCode: string) => {
    setCountryCode(_countryCode);
    if (onChangeText) {
      onChangeText(`+${_countryCode}-${phoneNumber}`);
    }
  };

  const handlePhoneNumberChange = (_phoneNumber: string) => {
    setPhoneNumber(_phoneNumber);
    if (onChangeText) {
      onChangeText(`+${countryCode}-${_phoneNumber}`);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <Text
          style={{
            ...styles.label,
            color: COLORS[useColorScheme() || 'light'].textSecondary,
          }}>
          {label}
        </Text>
        <View style={styles.inputContainer}>
          <View
            style={{
              ...styles.countryCode,
              borderColor: COLORS[useColorScheme() || 'light'].border,
            }}>
            <Text
              style={{
                ...TEXT.extraLarge,
                color: COLORS[useColorScheme() || 'light'].textPrimary,
              }}>
              +
            </Text>
            <TextInput
              style={{
                ...TEXT.extraLarge,
              }}
              maxLength={3}
              defaultValue={countryCode}
              onChangeText={handleCountryCodeChange}
              {...others}
            />
          </View>
          <TextInput
            defaultValue={phoneNumber}
            onChangeText={handlePhoneNumberChange}
            style={{
              ...styles.phoneNumber,
              borderColor: COLORS[useColorScheme() || 'light'].border,
            }}
            {...others}
          />
        </View>
      </View>
    </View>
  );
};

export default FloatingTextInput;
