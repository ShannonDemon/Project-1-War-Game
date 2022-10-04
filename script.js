Cards = {
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
let cpuCard = document.querySelector('#cpu-card')
let cpuScore = document.querySelector('#cpu-score')
let playerCard = document.querySelector('#player-card')
let dealBtn = document.querySelector('.deal')

dealBtn.addEventListener('click', winRound)

console.log(cpuCard.className)
let count = 0
function winRound(e) {
    count++
    console.log('winRound')
    if(Cards[cpuCard.classList[2]] > Cards[playerCard.classList[2]]){
        cpuScore.innerText = ` Score: ${count}`
    } else {
        // cpuScore.innerText = ` Score: ${count}`

    }
}