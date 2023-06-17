import {StyleSheet} from 'react-native';
import {TEXT} from '../../constants/Text';

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#000000aa',
  },
  modalView: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 15,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },

  button: {
    backgroundColor: '#075E54',
    borderRadius: 20,
    padding: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    ...TEXT.title,
  },
});
