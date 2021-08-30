document.addEventListener('DOMContentLoaded', () =>{

    const cardArray = [
        {
            name: 'tigre' ,
            img : 'images/tigre.jpg'
        },
        {
            name: 'tigre' ,
            img : 'images/tigre.jpg'
        },
        {
            name: 'wolf' ,
            img : 'images/wolf.jpg'
            
        },
        {
            name: 'wolf' ,
            img : 'images/wolf.jpg'
            
            
        },
        {
            name: 'bear' ,
            img : 'images/bear.jpg'
            
        },
        {
            name: 'bear' ,
            img : 'images/bear.jpg'
            
        },
        {
            name: 'pig' ,
            img: 'images/pig.jpg'
            
        },
        {
            name: 'pig' ,
            img :'images/pig.jpg'
            
        },
        {
            name: 'cat' , 
            img :'images/catt.jpg'
            
        },
        {
            name: 'cat' ,
            img : 'images/catt.jpg'
            
        },
        {
            name: 'laqlaq',
            img :'images/laqlaq.jpg'
            
        },
        {
            name: 'laqlaq' ,
            img: 'images/laqlaq.jpg'
            
        },
    ]
    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/yellowww.jpg')
        card.setAttribute('data-id', i)
        card.setAttribute('class', 'peep')
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //check for matches
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/yellowww.jpg')
        cards[optionTwoId].setAttribute('src', 'images/yellowww.jpg')
        alert('You have clicked the same image!')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        alert(' Voila` ! You found a match')

        cards[optionOneId].setAttribute('src', 'images/whityt.png')
        cards[optionTwoId].setAttribute('src', 'images/whityt.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click',flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'images/yellowww.jpg')
        cards[optionTwoId].setAttribute('src', 'images/yellowww.jpg')
        alert('Bof, try again')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
      }
    }
  
    //flip your card
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
  })