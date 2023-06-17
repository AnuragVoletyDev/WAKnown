import {StyleSheet} from 'react-native';
import {TEXT} from '../../constants/Text';

export const InputStyles = StyleSheet.create({
  container: {
    width: '100%',
    alignSelf: 'center',
  },
  input: {
    borderBottomWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 8,
    marginTop: 8,
    textAlignVertical: 'top',
    height: 50,
    maxHeight: 50,
    ...TEXT.extraLarge,
  },
  label: {
    marginTop: 12,
    fontSize: 16,
  },
  animatedStyle: {
    top: 4,
    left: 8,
    position: 'absolute',
    borderRadius: 90,
    zIndex: 10000,
  },
});

export const PhoneNumberInputStyles = StyleSheet.create({
  container: {
    width: '100%',
    alignSelf: 'center',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: 'grey',
    paddingVertical: 12,
    paddingHorizontal: 8,
    marginTop: 8,
    textAlignVertical: 'top',
    height: 50,
    maxHeight: 50,
    ...TEXT.extraLarge,
  },
  label: {
    ...TEXT.extraLarge,
  },
  inputWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  animatedStyle: {
    top: 4,
    left: 8,
    position: 'absolute',
    borderRadius: 90,
    zIndex: 10000,
  },
  countryCode: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  phoneNumber: {
    flex: 1,
    ...TEXT.extraLarge,
    width: 120,
    maxWidth: 120,
    borderBottomWidth: 1,
    marginLeft: 12,
  },
});
