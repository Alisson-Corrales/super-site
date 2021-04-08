"use strict";

let string = `{
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
      {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": [
          "Radiation resistance",
          "Turning tiny",
          "Radiation blast"
        ]
      },
      {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },
      {
        "name": "Eternal Flame",
        "age": 1000000,
        "secretIdentity": "Unknown",
        "powers": [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      },
      {
        "name": "Cheese Duke",
        "age": 42,
        "secretIdentity": "Melvin Carver",
        "powers": [
          "Fondue Gun",
          "Brie Bomb",
          "American Cheese Slap"
          "Rat army"
        ]
      }
    ]
  }`

//initialized the startin variables
let header = document.getElementById('header');
let section = document.getElementById('section');
let superObj = JSON.parse(string);

//called functions to make the header and section
createHeader(superObj);
createSection(superObj);

//functions to turn the JSON into HTML for header and section
function createHeader(obj){
  //makes the header
  const H1 = document.createElement("h1");
  //obj.squadname === obj["squadname"] V V V V
  H1.textContent = obj.squadName;
  //Adds H1 element to header element in the HTML
  header.appendChild(H1)
  let isActive = "" //this is called a state (as in a state of being)
  if(obj["active"] == true){
    isActive = "They are currently on patrol"
  }else{
    isActive = "They are being held by Dr. Evil"
  }
  //creates the subheader
  const PARA = document.createElement("p");
  PARA.textContent = `Home Town: ${obj["homeTown"]} || Formed: ${obj["formed"]} || ${isActive}`;
  header.appendChild(PARA)
}

function createSection(obj){
  //HEROES stores an array of every hero on the database
  const HEROES = obj["members"]

  for(let hero in HEROES){
    //initialized all of the HTML elements we are going to need for each hero
    const ARTICLE = document.createElement("article")
    const H2 = document.createElement("h2")
    const P1 = document.createElement("p")
    const P2 = document.createElement("p")
    const P3 = document.createElement("p")
    const LIST = document.createElement("ul")

    //puts the heroes names in the H2 element
    H2.textContent = HEROES[hero]["name"]
    P1.textContent =`Secret Identity: ${HEROES[hero]["secretIdentity"]}`
    P2.textContent = `Age: ${HEROES[hero]["age"]}`
    P3.textContent = `Super Powers:`

    //loop through all of the powers and loop them to the LIST
    const POWERS = HEROES[hero]["powers"];
    for(let power in POWERS){
      const ITEM = document.createElement("li");
      ITEM.textContent = POWERS[power];
      LIST.appendChild(ITEM)
    }

    ARTICLE.appendChild(H2)
    ARTICLE.appendChild(P1)
    ARTICLE.appendChild(P2)
    ARTICLE.appendChild(P3)
    ARTICLE.appendChild(LIST)

    section.appendChild(ARTICLE)
  }
}