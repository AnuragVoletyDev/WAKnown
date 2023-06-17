import React from 'react';
import {Text, TouchableOpacity, View, useColorScheme} from 'react-native';
import {COLORS} from '../../constants/Colors';
import {TEXT} from '../../constants/Text';
import {getNameShortForm} from '../../utils/Name';
import {styles} from './styles';

export interface Chat {
  phoneNumber: string;
  name?: string;
}

interface Props {
  chat: Chat;
  onChatItemClick: (chat: Chat) => void;
}

const ChatItem = (props: Props) => {
  const shortForm = getNameShortForm(props.chat);
  const handleChatItemClick = () => {
    props.onChatItemClick(props.chat);
  };
  return (
    <TouchableOpacity onPress={handleChatItemClick}>
      <View
        style={{
          ...styles.wrapper,
          borderBottomColor: COLORS[useColorScheme() || 'light'].border,
        }}>
        <View
          style={{
            ...styles.avatar,
            borderColor: COLORS[useColorScheme() || 'light'].border,
            backgroundColor: COLORS[useColorScheme() || 'light'].textSecondary,
          }}>
          <Text
            style={{
              ...TEXT.subtitle,
              color: COLORS[useColorScheme() || 'light'].header,
            }}>
            {shortForm}
          </Text>
        </View>
        <View>
          <View style={styles.textSection}>
            <Text
              style={{
                ...TEXT.title,
                color: COLORS[useColorScheme() || 'light'].textPrimary,
              }}>
              {props.chat.name}
            </Text>
            <Text
              style={{
                ...TEXT.large,
                color: COLORS[useColorScheme() || 'light'].textSecondary,
              }}>
              ({props.chat.phoneNumber})
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ChatItem;
