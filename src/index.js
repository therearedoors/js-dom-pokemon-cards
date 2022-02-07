const pokeList = document.querySelector(".cards")


function addCardTo(listElement){
    const card = document.createElement('li')
    card.className = 'card'
    listElement.appendChild(card)
    return card
}

function addNameTo(cardElement, elementNo){
    const h2 = document.createElement('h2')
    const name = data[elementNo].name
    h2.innerText = name.charAt(0).toUpperCase() + name.substring(1)
    cardElement.appendChild(h2)
}

function addImgTo(cardElement, elementNo){
    const img = document.createElement('img')
    const name = cardElement.querySelector('h2')
    //img.setAttribute('id', name.innerText)
    img.setAttribute('src', data[elementNo].sprites.other['official-artwork'].front_default)
    img.className = "card--img"
    cardElement.appendChild(img)
}

function addStatsTo(cardElement,elementNo){
    const stats = document.createElement('ul')
    for(let i=0;i<data[elementNo].stats.length;i++){
        dataObj = data[elementNo].stats[i]
        const stat = document.createElement('li')
        stat.innerText = dataObj.stat.name.toUpperCase() + ': ' + dataObj["base_stat"]
        stats.appendChild(stat)
    }
    cardElement.appendChild(stats)
}

/*
function addVersionsTo(cardElement,elementNo){
    const versions = document.createElement('ul')
    const dataObj = data[elementNo]["game_indices"]
    for(let i=0;i<dataObj.length))
}


function toggleImg() {
    const img = document.getElementById("Bulbasaur")
    img.setAttribute('src', data[0].sprites.other['dream_world'].front_default)
}
*/

for(let i=0;i<data.length;i++){
    card = addCardTo(pokeList)
    addNameTo(card,i)
    addImgTo(card,i)
    addStatsTo(card,i)
    //card.setAttribute('onclick', toggleImg())
}