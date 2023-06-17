import {Chat} from '../components/chat-item';

export const getNameShortForm = (chat: Chat) => {
  if (chat.name) {
    const names = chat.name.split(' ');
    let initials = `${names[0][0].toLocaleUpperCase()}`;
    if (names.length > 1) {
      initials += names[1][0].toLocaleUpperCase();
    }
    return initials;
  }
  return '?';
};
