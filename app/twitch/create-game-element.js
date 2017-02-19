export default function createGameElement(item) {
  const gameItem = document.createElement('div');
  gameItem.classList = ('game-item');

  gameItem.innerHTML = `
  <h3 class='game-item__name'></h3>
  <h4 class='game-item__popularity'></h4>
  <img class="game-item__pic" src="" alt="">
  `;

  gameItem.querySelector('.game-item__name').innerText = item.name;
  gameItem.querySelector('.game-item__popularity').innerText = `${item.popularity} Viewers`;
  gameItem.querySelector('.game-item__pic').src = item.box.large;
  gameItem.querySelector('.game-item__pic').alt = item.name;

  return gameItem;
}
