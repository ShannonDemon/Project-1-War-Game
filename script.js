const Cards = {
    //Clubs
    c02: 2,
    c03: 3,
    c04: 4,
    c05: 5,
    c06: 6,
    c07: 7,
    c08: 8,
    c09: 9,
    c10: 10,
    cJ: 11,
    cQ: 12,
    cK: 13,
    cA: 14,
    //Spades
    s02: 2,
    s03: 3,
    s04: 4,
    s05: 5,
    s06: 6,
    s07: 7,
    s08: 8,
    s09: 9,
    s10: 10,
    sJ: 11,
    sQ: 12,
    sK: 13,
    sA: 14,
    //Hearts
    h02: 2,
    h03: 3,
    h04: 4,
    h05: 5,
    h06: 6,
    h07: 7,
    h08: 8,
    h09: 9,
    h10: 10,
    hJ: 11,
    hQ: 12,
    hK: 13,
    hA: 14,
    //Diamonds
    d02: 2,
    d03: 3,
    d04: 4,
    d05: 5,
    d06: 6,
    d07: 7,
    d08: 8,
    d09: 9,
    d10: 10,
    dJ: 11,
    dQ: 12,
    dK: 13,
    dA: 14,
}

// const cards = [all 52 cards]
// let dealerDeck = cards (or just retype all 52 cards if you want)
// let playerDeck = [] (starts empty)
// while(dealerDeck.length>26){
// // pick a random number between 0 and dealerDeck.length
// // splice out the card at dealerDeck[randumNum]
// // push that card into playerDeck
// }
const cardList = []
for(x in Cards){
    cardList.push(x)
}
console.log(cardList)


let cpuDeck = cardList
console.log(cpuDeck)
let playerDeck = []


while(cpuDeck.length>26){
    randNumb = Math.floor(Math.random() *cpuDeck.length)
    playerDeck.push(cpuDeck.splice(randNumb,1)[0])
}

console.log(cpuDeck)
console.log(playerDeck)

console.log(playerDeck.some(ele => cpuDeck.includes(ele)))

function shuffle(array) {
    let currentIndex = array.length, randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

let shuffledCpuDeck = shuffle(cpuDeck)
let shuffledPlayerDeck = shuffle(playerDeck)




let cpuCard = document.querySelector('#cpu-card')
let cpuScore = document.querySelector('#cpu-score')
let playerCard = document.querySelector('#player-card')
let playerScore = document.querySelector('#player-score')
let dealBtn = document.querySelector('.deal')

//dealBtn.addEventListener('click', winRound)

// console.log(cpuCard.className)
// let count = 0
// function winRound(e) {
//     count++
//     console.log('winRound')
//     if(Cards[cpuCard.classList[2]] > Cards[playerCard.classList[2]]){
//         cpuScore.innerText = ` Score: ${count}`
//     } else if(Cards[playerCard.classList[2]] > Cards[cpuCard.classList[2]]) {
//         playerScore.innerText = ` Score: ${count}`

//     }
// }

let scoreOfCpu = ()=>{return shuffledCpuDeck.length}
let scoreOfPlayer = ()=> {return shuffledPlayerDeck.length}
console.log(scoreOfCpu())
console.log(scoreOfPlayer())

// console.log(shuffle(playerDeck)[0]<shuffle(cpuDeck)[0])

dealBtn.addEventListener('click', playingTheGame)

function winnerAnnoucer(){
    if (shuffledCpuDeck.length === 52 && shuffledPlayerDeck.length === 0){
        console.log('CPU is the Winner')
    }
    else if (shuffledPlayerDeck.length === 52 && shuffledCpuDeck.length === 0){
        console.log('Player is the Winner')
    }
}
playerCard.classList.add(`card`)
playerCard.classList.add(`${shuffledPlayerDeck[0]}`)
cpuCard.classList.add(`card`)
cpuCard.classList.add(`${shuffledCpuDeck[0]}`)

function displayCard(){
    console.log(shuffledPlayerDeck[0])
    playerCard.className = ''
    playerCard.classList.add(`card`)
    playerCard.classList.add(`${shuffledPlayerDeck[0]}`)
    
    console.log(shuffledCpuDeck[0])
    cpuCard.className = ''
    cpuCard.classList.add(`card`)
    cpuCard.classList.add(`${shuffledCpuDeck[0]}`)
}

function playingTheGame(){
    displayCard()
    // console.log('play fn')
    if(Cards[shuffledPlayerDeck[0]]>Cards[shuffledCpuDeck[0]]){
        shuffledPlayerDeck.push(shuffledCpuDeck.shift())
        scoreOfPlayer()
        scoreOfCpu()
        cpuScore.innerText = ` Score: ${scoreOfCpu()}`
        playerScore.innerText = ` Score: ${scoreOfPlayer()}`
        shuffle(shuffledPlayerDeck)
        
        // displayCard()
        
        // object[array[]].v
        
        
    }
    else if(Cards[shuffledPlayerDeck[0]]<Cards[shuffledCpuDeck[0]]){
        shuffledCpuDeck.push(shuffledPlayerDeck.shift())
        scoreOfPlayer()
        scoreOfCpu()
        cpuScore.innerText = ` Score: ${scoreOfCpu()}`
        playerScore.innerText = ` Score: ${scoreOfPlayer()
        }`
        shuffle(shuffledCpuDeck)
        
        
    }
    else if(Cards[shuffledPlayerDeck[0]]===Cards[shuffledCpuDeck[0]]){
        if(Cards[shuffledPlayerDeck[2]] > Cards[shuffledCpuDeck[2]]){
            if(shuffledPlayerDeck.length<3){
                shuffledPlayerDeck.push(shuffledCpuDeck.shift())
                shuffledPlayerDeck.push(shuffledCpuDeck.shift())
                scoreOfPlayer()
                scoreOfCpu()
                cpuScore.innerText = ` Score: ${scoreOfCpu()}`
                playerScore.innerText = ` Score: ${scoreOfPlayer()}`
                shuffle(shuffledPlayerDeck)
                
            } else if(shuffledCpuDeck.length<3){
                shuffledCpuDeck.push(shuffledPlayerDeck.shift())
                shuffledCpuDeck.push(shuffledPlayerDeck.shift())
                scoreOfPlayer()
                scoreOfCpu()
                cpuScore.innerText = ` Score: ${scoreOfCpu()}`
                playerScore.innerText = ` Score: ${scoreOfPlayer()}`
                shuffle(shuffledCpuDeck)
            }
            shuffledPlayerDeck.push(shuffledCpuDeck.shift())
            shuffledPlayerDeck.push(shuffledCpuDeck.shift())
            shuffledPlayerDeck.push(shuffledCpuDeck.shift())
            scoreOfPlayer()
            scoreOfCpu()
            cpuScore.innerText = ` Score: ${scoreOfCpu()}`
            playerScore.innerText = ` Score: ${scoreOfPlayer()}`
            shuffle(shuffledPlayerDeck)
            
        }
        else if(Cards[shuffledPlayerDeck[2]] < Cards[shuffledCpuDeck[2]]){
            if(shuffledPlayerDeck.length<3){
                shuffledCpuDeck.push(shuffledPlayerDeck.shift())
                shuffledCpuDeck.push(shuffledPlayerDeck.shift())
                scoreOfPlayer()
                scoreOfCpu()
                cpuScore.innerText = ` Score: ${scoreOfCpu()}`
                playerScore.innerText = ` Score: ${scoreOfPlayer()}`
                shuffle(shuffledCpuDeck)
                
            } else if(shuffledCpuDeck.length<3){
                shuffledCpuDeck.push(shuffledPlayerDeck.shift())
                shuffledCpuDeck.push(shuffledPlayerDeck.shift())
                scoreOfPlayer()
                scoreOfCpu()
                cpuScore.innerText = ` Score: ${scoreOfCpu()}`
                playerScore.innerText = ` Score: ${scoreOfPlayer()}`
                shuffle(shuffledPlayerDeck)
            }
            shuffledCpuDeck.push(shuffledPlayerDeck.shift())
            shuffledCpuDeck.push(shuffledPlayerDeck.shift())
            shuffledCpuDeck.push(shuffledPlayerDeck.shift())
            scoreOfPlayer()
            scoreOfCpu()
            cpuScore.innerText = ` Score: ${scoreOfCpu()}`
            playerScore.innerText = ` Score: ${scoreOfPlayer()}`
            shuffle(shuffledCpuDeck)
        }
    } else if (shuffledCpuDeck.length === 52 && shuffledPlayerDeck.length === 0){
        console.log('CPU is the Winner')
    }
    else if (shuffledPlayerDeck.length === 52 && shuffledCpuDeck.length === 0){
        console.log('Player is the Winner')
    }
    
}