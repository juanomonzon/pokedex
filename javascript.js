function previous() {
    let pokemonId = document.pokemonKeySend.pokemonId.value
    pokemonId = (Number(pokemonId)-1 <= 1) ? 1 : Number(pokemonId)-1;
    getPokemon(pokemonId)
}

function next() {
    let pokemonId = document.pokemonKeySend.pokemonId.value
    pokemonId = (Number(pokemonId)+1 >= 898) ? 898 : Number(pokemonId)+1;
    getPokemon(pokemonId)
}

function pokemonKeyId() {
    let pokemonId = document.pokemonKeySend.pokemonId.value
    pokemonId = (pokemonId <= 1) ? 1 : pokemonId;
    pokemonId = (pokemonId >= 898) ? 898 : pokemonId;
    getPokemon(pokemonId)
}

function getPokemon(id = 1) {  
    typesJson = '{'+
    '"bug": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Pok%C3%A9mon_Bug_Type_Icon.svg/120px-Pok%C3%A9mon_Bug_Type_Icon.svg.png",'+
    '"dark": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Pok%C3%A9mon_Dark_Type_Icon.svg/120px-Pok%C3%A9mon_Dark_Type_Icon.svg.png",'+
    '"dragon": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pok%C3%A9mon_Dragon_Type_Icon.svg/120px-Pok%C3%A9mon_Dragon_Type_Icon.svg.png",'+
    '"electric": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Pok%C3%A9mon_Electric_Type_Icon.svg/120px-Pok%C3%A9mon_Electric_Type_Icon.svg.png",'+
    '"fairy": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Pok%C3%A9mon_Fairy_Type_Icon.svg/120px-Pok%C3%A9mon_Fairy_Type_Icon.svg.png",'+
    '"fighting": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Pok%C3%A9mon_Fighting_Type_Icon.svg/120px-Pok%C3%A9mon_Fighting_Type_Icon.svg.png",'+
    '"fire": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Pok%C3%A9mon_Fire_Type_Icon.svg/120px-Pok%C3%A9mon_Fire_Type_Icon.svg.png",'+
    '"flying": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Pok%C3%A9mon_Flying_Type_Icon.svg/120px-Pok%C3%A9mon_Flying_Type_Icon.svg.png",'+
    '"ghost": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pok%C3%A9mon_Ghost_Type_Icon.svg/120px-Pok%C3%A9mon_Ghost_Type_Icon.svg.png",'+
    '"grass": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Pok%C3%A9mon_Grass_Type_Icon.svg/120px-Pok%C3%A9mon_Grass_Type_Icon.svg.png",'+
    '"ground": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Pok%C3%A9mon_Ground_Type_Icon.svg/120px-Pok%C3%A9mon_Ground_Type_Icon.svg.png",'+
    '"ice": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Pok%C3%A9mon_Ice_Type_Icon.svg/120px-Pok%C3%A9mon_Ice_Type_Icon.svg.png",'+
    '"normal": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Pok%C3%A9mon_Normal_Type_Icon.svg/120px-Pok%C3%A9mon_Normal_Type_Icon.svg.png",'+
    '"poison": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Pok%C3%A9mon_Poison_Type_Icon.svg/120px-Pok%C3%A9mon_Poison_Type_Icon.svg.png",'+
    '"psychic": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Pok%C3%A9mon_Psychic_Type_Icon.svg/120px-Pok%C3%A9mon_Psychic_Type_Icon.svg.png",'+
    '"rock": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Pok%C3%A9mon_Rock_Type_Icon.svg/120px-Pok%C3%A9mon_Rock_Type_Icon.svg.png",'+
    '"steel": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Pok%C3%A9mon_Steel_Type_Icon.svg/120px-Pok%C3%A9mon_Steel_Type_Icon.svg.png",'+
    '"water": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Pok%C3%A9mon_Water_Type_Icon.svg/120px-Pok%C3%A9mon_Water_Type_Icon.svg.png"'+
'}'
  
    let pokemonApi = "https://pokeapi.co/api/v2/pokemon/"+id
    // let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    let pokemonreq = new XMLHttpRequest();
    let typesreq = new XMLHttpRequest();
    pokemonreq.open("GET", pokemonApi, false)
    pokemonreq.send()
    let pokemonData = JSON.parse(pokemonreq.responseText)
    document.getElementById("pokemonId").value = pokemonData.id
    document.getElementById("name-display").innerHTML = pokemonData.name
    document.getElementById("imgPokemon").src = pokemonData.sprites.front_default
    document.getElementById("pokemonType").innerHTML = ""
    pokemonTypes = JSON.parse(typesJson)                     
    pokemonData.types.map(item =>                                           document.getElementById("pokemonType").innerHTML += "<img src="+pokemonTypes[item.type.name]+"  height=50>")
}