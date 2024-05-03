const cards = document.querySelectorAll('.card');
let currentCardIndex = 0;
let cardFronts = ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.", 
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."];
let cardBacks = ["Back of card 1", "Back of card 2", "Back of card 3", "Back of card 4", "Back of card 5"];
function showCard(index) {
      document.getElementById('card-front').innerHTML = cardFronts[index];
      document.getElementById('card-back').innerHTML = cardBacks[index];
}

function showNextCard() {
  if(currentCardIndex < cardFronts.length - 1)
  {
    currentCardIndex = (currentCardIndex + 1);
    showCard(currentCardIndex);
  }
}

function showPrevCard() {
  if(currentCardIndex != 0)
  {
    currentCardIndex = (currentCardIndex - 1);
    showCard(currentCardIndex);
  }
}

document.getElementById('next-btn').addEventListener('click', showNextCard);
document.getElementById('prev-btn').addEventListener('click', showPrevCard);

showCard(currentCardIndex);

[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  });
});