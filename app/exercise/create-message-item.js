export default function createMessageItem(message) {
  const element = document.createElement('LI');
  element.innerHTML = `<span class="message-item__username">${message.username}</span> ${message.message}`;


  return element;
}
