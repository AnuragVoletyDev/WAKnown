import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
  Alert,
  Linking,
  useColorScheme,
} from 'react-native';
import FloatingTextInput from '../floating-text-input';
import PhoneNumberInput from '../floating-text-input/PhoneNumberInput';
import {Chat} from '../chat-item';
import {COLORS} from '../../constants/Colors';
import {styles} from './style';

interface Props {
  showPopup: boolean;
  initialChat?: Chat;
  onHidePopup: () => void;
  onSendMessage: (chat: Chat) => void;
}

const MyFormComponent = (props: Props) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (props.initialChat) {
      setPhoneNumber(props.initialChat.phoneNumber);
      setName(props.initialChat.name || '');
    } else {
      setPhoneNumber('');
      setName('');
    }
  }, [props.initialChat]);

  const handleSend = () => {
    if (phoneNumber.trim() === '') {
      Alert.alert('Please enter the phone number.');
      return;
    }

    if (message.trim() === '') {
      Alert.alert('Please enter the message.');
      return;
    }

    Linking.openURL(`whatsapp://send?text=${message}&phone=${phoneNumber}`);

    props.onSendMessage({phoneNumber, name});
    props.onHidePopup();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.showPopup}
      onRequestClose={props.onHidePopup}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.centeredView}>
          <View
            style={{
              ...styles.modalView,
              backgroundColor: COLORS[useColorScheme() || 'light'].background,
            }}>
            <PhoneNumberInput
              label={'Send to *'}
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              keyboardType="numeric"
            />

            <FloatingTextInput
              label="Name"
              value={name}
              onChangeText={setName}
            />

            <FloatingTextInput
              label="Message *"
              multiline={true}
              numberOfLines={4}
              value={message}
              onChangeText={setMessage}
            />

            <Pressable onPress={handleSend}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Send</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default MyFormComponent;
