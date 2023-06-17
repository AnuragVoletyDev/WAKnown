import {StyleSheet} from 'react-native';
import {TEXT} from '../../constants/Text';

export const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    display: 'flex',
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 50,
    elevation: 10,
  },
  text: {
    ...TEXT.title,
    color: 'white',
  },
});
