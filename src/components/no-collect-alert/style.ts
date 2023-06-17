import {StyleSheet} from 'react-native';
import {TEXT} from '../../constants/Text';

export const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#ffe491',
    gap: 8,
    padding: 8,
    paddingHorizontal: 16,
    paddingRight: 50,
    elevation: 5,
  },
  text: {
    ...TEXT.medium,
    color: '#777777',
  },
});
