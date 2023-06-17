import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    padding: 12,
    borderBottomWidth: 1,
    alignItems: 'center',
    gap: 16,
  },
  avatar: {
    minHeight: 50,
    minWidth: 50,
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSection: {
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
    alignItems: 'baseline',
  },
});
