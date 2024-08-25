const contentCard = document.getElementById('content__card-score');
const btnContinue = document.createElement('button');

function createdCardScore(category, iconSrc, score) {
    const cardScore = document.createElement('div');
    const div = document.createElement('div');
    const imagen = document.createElement('img');
    const spanText = document.createElement('span');
    const paragraph = document.createElement('p');
    const spanScore = document.createElement('span');    
    const textParagraph = document.createTextNode(score);


    cardScore.appendChild(div);
    div.appendChild(imagen);
    div.appendChild(spanText);
    paragraph.appendChild(textParagraph);
    paragraph.appendChild(spanScore);
    cardScore.appendChild(paragraph);
    contentCard.appendChild(cardScore);

    imagen.src = iconSrc;
    spanText.textContent = category;
    spanScore.textContent = ' / 100';

    switch (category) {
        case 'Reaction':
            cardScore.classList.add('card__score', 'reaction');
            break;
        case 'Memory':
            cardScore.classList.add('card__score', 'memory');
            break;
        case 'Verbal':
            cardScore.classList.add('card__score', 'verbal');
            break;
        case 'Visual':
            cardScore.classList.add('card__score', 'visual');
            break;
        default:
            break;
    }

}

function getData() {
    fetch('./data.json')
    .then( response => response.json())
    .then( data => {
        data.forEach(element => {
            createdCardScore(element.category, element.icon, element.score);
        });
        btnContinue.textContent = 'Continue';
        contentCard.appendChild(btnContinue);
    })
    .catch( error => {
        console.error('Error al cargar el archivo JSON', error);
        
    });
}
getData();
