import createGameElement from './create-game-element';

export default function showGamesInList(parentEl, data) {


  // clearing grid
  parentEl.innerHTML = ' ';

  // running loop
  for (let i = 0; i < data.length; i += 1) {
    const gameItem = data[i];
    const el = createGameElement(gameItem.game);

    parentEl.appendChild(el);
  }
}
