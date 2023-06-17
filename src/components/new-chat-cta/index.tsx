import {useColorScheme, TouchableOpacity, Text} from 'react-native';
import {COLORS} from '../../constants/Colors';
import NewChat from '../../icons/NewChat';
import {styles} from './style';
import React from 'react';
interface Props {
  onNewChatPress: () => void;
}

const NewChatCta = (props: Props) => {
  const handleNewChatPress = () => {
    props.onNewChatPress();
  };
  return (
    <TouchableOpacity
      onPress={handleNewChatPress}
      style={{
        ...styles.wrapper,
        backgroundColor: COLORS[useColorScheme() || 'light'].newChat,
        shadowColor: COLORS[useColorScheme() || 'light'].backgroundInverse,
      }}>
      <NewChat />
      <Text style={styles.text}>New Chat</Text>
    </TouchableOpacity>
  );
};

export default NewChatCta;
