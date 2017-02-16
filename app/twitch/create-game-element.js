export default null;
// import data from './data.json';

// IMG SWAP
const gameImg = document.querySelector('.game__img');
gameImg.src = data.top[0].game.box.large;

// TITLE SWAP
const gameTitle = document.querySelector('.game__title');
gameTitle.innerText = 'CONNECTED, WOO WOO';
