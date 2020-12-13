window.onload = function () {};

const listaDeProdutos = [
  {
    images: 'images/foto1.jpg',
    tituloP: 'Vestido Preto e Branco',
    descricaoP:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
    precoP: 329.99,
    qtdP: 1,
    referencia: 1,
  },
  {
    images: 'images/foto2.jpg',
    tituloP: 'Vestido Colorido',
    descricaoP:
      'Tatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
    precoP: 229.99,
    qtdP: 1,
    referencia: 2,
  },
  {
    images: 'images/foto3.jpg',
    tituloP: 'Blusa listrada',
    descricaoP: 'Sed ut perspiciatis unde omnis iste  sunt explicabo',
    precoP: 115.0,
    qtdP: 1,
    referencia: 3,
  },
  {
    images: 'images/foto4.jpg',
    tituloP: 'Anel Verde',
    descricaoP:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
    precoP: 25.5,
    qtdP: 1,
    referencia: 4,
  },
  {
    images: 'images/foto5.jpg',
    tituloP: 'Blusa Xadrez',
    descricaoP:
      ' iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
    precoP: 180.0,
    qtdP: 1,
    referencia: 5,
  },
];

const cardWraper = document.querySelector('.cardsWraper');

listaDeProdutos.forEach((e) => {
  let newCard = `<div class="cards">
<img src="${e.images}" alt="#" />
<p class="quickView">Quick View</p>
<p class="priceTag">
  ${e.tituloP}
  <br />
  ${e.precoP}
</p>
<div class="addRemoveButton">
  <div>-</div>
  <div>${e.qtdP}</div>
  <div>+</div>
</div>
<div class="addToCartButton">Add to Cart</div>
</div>
`;

  cardWraper.innerHTML += newCard;
});

const rightarrow = document.querySelector('.rightArrow');
rightarrow.addEventListener('click', () => {
  cardWraper.scrollBy({ left: 400, behavior: 'smooth' });
});

const lefttarrow = document.querySelector('.leftArrow');
lefttarrow.addEventListener('click', () => {
  cardWraper.scrollBy({ left: -400, behavior: 'smooth' });
});
