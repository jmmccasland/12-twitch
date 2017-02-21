export default function createGameElement(item) {
  const gameItem = document.createElement('div');
  gameItem.className = ('game-item');

  gameItem.innerHTML = `
  <h3 class='game-item__name'></h3>
  <h4 class='game-item__popularity'></h4>
  <img class="game-item__pic" src="" alt="">
  `;

  gameItem.querySelector('.game-item__name').innerText = item.name;
  gameItem.querySelector('.game-item__popularity').innerText = `${item.popularity} Viewers`;

  const picEl = gameItem.querySelector('.game-item__pic');
  picEl.src = item.box.large;
  picEl.alt = item.name;

  return gameItem;
}
