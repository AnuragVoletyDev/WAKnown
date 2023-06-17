import React, {useEffect, useState} from 'react';
import {FlatList, View, useColorScheme} from 'react-native';
import ChatItem, {Chat} from '../../components/chat-item';
import NewChatCta from '../../components/new-chat-cta';
import NoCollectAlert from '../../components/no-collect-alert';
import NewChatPopup from '../../components/new-chat-popup';
import {sanitizePhoneNumber} from '../../utils/PhoneNumber';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {COLORS} from '../../constants/Colors';
import {styles} from './style';

function HomeScreen(props: any) {
  const [showPopup, setShowPopup] = useState(true);
  const [initialChat, setInitialChat] = useState<Chat>();

  useEffect(() => {
    setInitialChat({
      phoneNumber: sanitizePhoneNumber(props.route.params.initialPhoneNumber),
    });
  }, [props.route.params.initialPhoneNumber]);
  const [historicChats, setHistoricChats] = useState<Chat[]>([]);
  const getPastHistoricChats = async () => {
    try {
      const value = await AsyncStorage.getItem('@WAKnown/Chats');
      if (value) {
        setHistoricChats(JSON.parse(value));
      }
    } catch (e) {}
  };

  useEffect(() => {
    getPastHistoricChats();
  }, []);

  const handleChatItemClick = (chat: Chat) => {
    setInitialChat({
      phoneNumber: chat.phoneNumber,
      name: chat.name,
    });
    setShowPopup(true);
  };

  const renderChatItem = ({item, index}: {item: Chat; index: number}) => {
    return (
      <ChatItem key={index} chat={item} onChatItemClick={handleChatItemClick} />
    );
  };

  const onNewChatPress = () => {
    setInitialChat(undefined);
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    setInitialChat(undefined);
  };

  const handleSendMessage = (chatItem: Chat) => {
    setShowPopup(false);
    setInitialChat(undefined);

    const updatedChats = [...historicChats];

    const currentChatIndex = updatedChats.findIndex(
      chat => chat.phoneNumber === chatItem.phoneNumber,
    );

    if (currentChatIndex > -1) {
      updatedChats.splice(currentChatIndex, 1);
    }

    AsyncStorage.setItem(
      '@WAKnown/Chats',
      JSON.stringify([chatItem, ...historicChats]),
    );
    setHistoricChats([chatItem, ...historicChats]);
  };

  return (
    <>
      <NewChatPopup
        onSendMessage={handleSendMessage}
        showPopup={showPopup}
        initialChat={initialChat}
        onHidePopup={handlePopupClose}
      />
      <NoCollectAlert />
      <View
        style={{
          ...styles.wrapper,
          backgroundColor: COLORS[useColorScheme() || 'light'].background,
        }}>
        <FlatList renderItem={renderChatItem} data={historicChats} />
      </View>
      <NewChatCta onNewChatPress={onNewChatPress} />
    </>
  );
}

export default HomeScreen;
