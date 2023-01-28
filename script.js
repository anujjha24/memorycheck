const cardArray = [
    {
        name: 'fries',
        img: 'Image/fries.png'
    }, {
        name: 'cheeseburger',
        img: 'Image/cheeseburger.png'
    }, {
        name: 'hotdog',
        img: 'Image/hotdog.png'
    }, {
        name: 'ice-cream',
        img: 'Image/ice-cream.png'
    }, {
        name: 'milkshake',
        img: 'Image/milkshake.png'
    }, {
        name: 'pizza',
        img: 'Image/pizza.png'
    },
    {
        name: 'fries',
        img: 'Image/fries.png'
    }, {
        name: 'cheeseburger',
        img: 'Image/cheeseburger.png'
    }, {
        name: 'hotdog',
        img: 'Image/hotdog.png'
    }, {
        name: 'ice-cream',
        img: 'Image/ice-cream.png'
    }, {
        name: 'milkshake',
        img: 'Image/milkshake.png'
    }, {
        name: 'pizza',
        img: 'Image/pizza.png'
    }
]
cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
let cardchosen = [];
let cardchosenid = [];
const cardwon = [];
const result = document.querySelector("#score")
const music = document.getElementById('sound')
const music2 = document.getElementById('sound2')
// Creating board by using blank images for the default display

function createboard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'Image/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipcard)
        card.addEventListener('click',playsound)
        gridDisplay.appendChild(card)
    }

}
createboard();

// Creating function to play sound
function playsound(){
    music.play();
}
function winsound(){

    music2.play()
}



// Creating the function for checking the match between
function checkmatch() {
    const cards = document.querySelectorAll('img')
    const optiononeId = cardchosenid[0]
    const optiontwoId = cardchosenid[1]
    if(optiononeId==optiontwoId){
        alert('You clicked on same image');
    }

    if (cardchosen[0] == cardchosen[1]) {
        alert("yayy! it's a match");
        cards[optiononeId].setAttribute('src', 'Image/white.png')
        cards[optiontwoId].setAttribute('src', 'Image/white.png')
        cards[optiononeId].removeEventListener('click', flipcard)
        cards[optiontwoId].removeEventListener('click', flipcard)
        cards[optiononeId].removeEventListener('click', playsound)
        cards[optiontwoId].removeEventListener('click', playsound)
        cardwon.push(cardchosen)
    }else{
        cards[optiononeId].setAttribute('src', 'Image/blank.png')
        cards[optiontwoId].setAttribute('src', 'Image/blank.png')
    }
    cardchosen = []
    cardchosenid = []
    result.textContent=cardwon.length;

    if(cardwon.length==cardArray.length/2){
        result.innerHTML= "Congrats! you found them all"
        winsound()

    }

}



// Function which will allow to flip card 
function flipcard() {
    const cardid = this.getAttribute('data-id');
    cardchosen.push(cardArray[cardid].name);
    cardchosenid.push(cardid)
    this.setAttribute('src', cardArray[cardid].img);
    if (cardchosen.length === 2) {
        setTimeout(checkmatch, 500)
    }
}