import createMessageItem from './create-message-item';

export default function addMessageItem(list, message) {
  const element = createMessageItem(message);

  list.appendChild(element);
}
