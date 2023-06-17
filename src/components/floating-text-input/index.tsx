import React, {useRef} from 'react';
import {
  View,
  TextInput,
  Text,
  Animated,
  TextInputProps,
  useColorScheme,
} from 'react-native';
import {COLORS} from '../../constants/Colors';
import {InputStyles as styles} from './styles';

interface Props extends TextInputProps {
  label: string;
}

const FloatingTextInput = (props: Props) => {
  const {label, value, onChangeText, ...others} = props;
  const moveText = useRef(new Animated.Value(0)).current;

  const onFocusHandler = () => {
    if (!value) {
      moveTextTop();
    }
  };
  const onBlur = () => {
    if (!value) {
      moveTextBottom();
    }
  };
  const handleChangeText = (textValue: string) => {
    if (onChangeText) {
      onChangeText(textValue);
    }
    if (textValue !== '') {
      moveTextTop();
    } else if (value === '') {
      moveTextBottom();
    }
  };

  const moveTextTop = () => {
    Animated.timing(moveText, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const moveTextBottom = () => {
    Animated.timing(moveText, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const yVal = moveText.interpolate({
    inputRange: [0, 1],
    outputRange: [4, -20],
  });

  const animStyle = {
    transform: [{translateY: yVal}],
  };

  if (value) {
    moveTextTop();
  }

  return (
    <View style={styles.container}>
      <Animated.View
        pointerEvents={'none'}
        style={[styles.animatedStyle, animStyle]}>
        <Text
          style={{
            ...styles.label,
            color: COLORS[useColorScheme() || 'light'].textSecondary,
          }}>
          {label}
        </Text>
      </Animated.View>
      <TextInput
        value={value}
        onBlur={onBlur}
        style={{
          ...styles.input,
          borderColor: COLORS[useColorScheme() || 'light'].border,
          height: others.multiline ? 24 * (others.numberOfLines || 0) + 2 : 50,
          maxHeight: others.multiline
            ? 24 * (others.numberOfLines || 0) + 2
            : 50,
        }}
        onFocus={onFocusHandler}
        onChangeText={handleChangeText}
        {...others}
      />
    </View>
  );
};

export default FloatingTextInput;
