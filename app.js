const cardImages = [
  {
    order: 2,
    symbol: 'diamonds'
  },
  {
    order: 3,
    symbol: 'diamonds'
  },
  {
    order: 5,
    symbol: 'diamonds'
  },
  {
    order: 7,
    symbol: 'spades',
  }
];



// Bu bir kart dagitma islemi olabilir...
for (let image of cardImages) {
  createCard(image.order, image.symbol);
}

function createCard(order, symbol) {
  const img = document.createElement('img');
  img.className = 'card';
  img.src = `card_images/${order}_of_${symbol}.png`;

  createCardImage();

  document.body.appendChild(img);
}

function createCardImage() {
  console.log('Bora is aweosme');
}
