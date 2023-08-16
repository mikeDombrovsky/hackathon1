//login_page
const form = document.forms[0];
const login_page = document.getElementById("login");
const player1 = form.nickname1;

let player1_value = player1.value;

function clickPlay(event) {
  event.preventDefault();
  player1_value = player1.value;

  if (
    !(
      player1_value.match(/^[A-Za-z0-9]+$/)
    )
  ) {
    alert("Please reenter nickname");
  } else {
    login_page.style.display = "none";
  }
}

//main_page
const main_page = document.querySelector("main");
const divPhrase = document.querySelector(".phrase");
const result_page = document.querySelector("section.result");
const imageTarget = document.querySelector(".imageTarget");
const playerName = document.querySelector(".nameplayer1");
const playerPoints = document.querySelector(".pointsplayer1");

const imagesObjects = [
  {
    id_img: 0,
    points:0,
    link_img: "./meme_for_hackaton/10GUY.jpg",
  },
  {
    id_img: 1,
    points:0,
    link_img: "./meme_for_hackaton/3059_135068129530.jpg",
  },
  {
    id_img: 2,
    points:0,
    link_img: "./meme_for_hackaton/Aliens.jpg",
  },
  {
    id_img: 3,
    points:0,
    link_img: "./meme_for_hackaton/And_Its_Gone.png",
  },
  {
    id_img: 4,
    points:0,
    link_img: "./meme_for_hackaton/BadLuckBryan.jpg",
  },
  {
    id_img: 5,
    points:0,
    link_img: "./meme_for_hackaton/c09.jpg",
  },
  {
    id_img: 6,
    points:0,
    link_img: "./meme_for_hackaton/chubbybubbles.jpg",
  },
  {
    id_img: 7,
    points:0,
    link_img: "./meme_for_hackaton/confusedtravolta.jpg",
  },
  {
    id_img: 8,
    points:0,
    link_img: "./meme_for_hackaton/db1.jpg",
  },
  {
    id_img: 9,
    points:0,
    link_img: "./meme_for_hackaton/drilpic.jpg",
  },
  {
    id_img: 10,
    points:0,
    link_img: "./meme_for_hackaton/dweller.jpg",
  },
  {
    id_img: 11,
    points:0,
    link_img: "./meme_for_hackaton/FaZd-hmWYAU3O6d.jpg",
  },
  {
    id_img: 12,
    points:0,
    link_img: "./meme_for_hackaton/fellowkids.jpg",
  },
  {
    id_img: 13,
    points:0,
    link_img: "./meme_for_hackaton/FKBoXcKVkAIJ7Ia.jpg",
  },
  {
    id_img: 14,
    points:0,
    link_img: "./meme_for_hackaton/FmtBz6JXoA8hTX8.jpg",
  },
  {
    id_img: 15,
    points:0,
    link_img: "./meme_for_hackaton/hidethepainharold.jpg",
  },
  {
    id_img: 16,
    points:0,
    link_img: "./meme_for_hackaton/jordan.jpg",
  },
  {
    id_img: 17,
    points:0,
    link_img: "./meme_for_hackaton/nedstark.jpg",
  },
  {
    id_img: 18,
    points:0,
    link_img: "./meme_for_hackaton/rick.jpg",
  },
  {
    id_img: 19,
    points:0,
    link_img: "./meme_for_hackaton/SadKeanu.jpg",
  },
  {
    id_img: 20,
    points:0,
    link_img: "./meme_for_hackaton/sideeyechloe.jpg",
  },
  {
    id_img: 21,
    points:0,
    link_img: "./meme_for_hackaton/thumb.png",
  },
  {
    id_img: 22,
    points:0,
    link_img: "./meme_for_hackaton/Untitled-1.png",
  },
  {
    id_img: 23,
    points:0,
    link_img: "./meme_for_hackaton/v4ic7qanr7i.jpg",
  },
  {
    id_img: 24,
    points:0,
    link_img: "./meme_for_hackaton/WAT.jpg",
  },
  {
    id_img: 25,
    points:0,
    link_img: "./meme_for_hackaton/x.jpg",
  },
];

const questionsObjects = [
  {
    id_answer: 0,
    question: "When received your first salary in an Hi-Tech company",
  },
  {
    id_answer: 1,
    question: "When received the first task in the Hi-Tech company",
  },
  {
    id_answer: 2,
    question: "When you failed your first interview",
  },
  {
    id_answer: 3,
    question: "When you look at classmates who do not work in IT",
  },
  {
    id_answer: 4,
    question: "When you must have done a hackathon before thursday",
  },
  {
    id_answer: 5,
    question: "When you have to refactor",
  },
  {
    id_answer: 6,
    question: "When found the answer on Stack Overflow",
  },
  {
    id_answer: 7,
    question: "Got a job in a startup",
  },
  {
    id_answer: 8,
    question: "Reaction to the first question in a technical interview",
  },
  {
    id_answer: 9,
    question: "How the senior developer looks at you before giving a task",
  },
];

fillPoints()

function fillPoints(){
  for(let obj of imagesObjects){
    obj.points = getRandomNumber(10);
  }
}

console.log(imagesObjects);

let cards = document.querySelector(".cards");
let usedQuestion = [];

let pointSum = 0;

let divPointSum = document.getElementById('point_sum')

addImages();
addPhrase();

imageTarget.addEventListener("drop", handleDrop);
imageTarget.addEventListener("dragover", allowDrop);
imageTarget.addEventListener("dragstart", dragStart);

function mix() {
  clean();
  addImages();
}

function nextMeme() {
  if (imageTarget.children.length == 0){
   return;
  }
  if (usedQuestion.length == 10){
    playerName.innerHTML = player1.value;
    playerPoints.innerHTML = pointSum;
    result_page.style.display = "block";
    return;
  }
  let currentImg = imageTarget.querySelector('img')
  console.log(currentImg);
  let id = currentImg.getAttribute('id')
  let points = imagesObjects[id].points;
  pointSum += points;
  console.log(currentImg, id, points, pointSum);
  divPointSum.innerHTML = `Current points: ${pointSum}`

  clean();
  addImages();
  addPhrase();
}

function playAgain() {
  result_page.style.display = 'none';
  pointSum = 0;
  divPointSum.innerHTML = 'Current points: 0';
  clean();
  usedQuestion = [];
  addImages();
  addPhrase();

}

function clean(){
  imageTarget.innerHTML = '';
  cards.innerHTML = '';
}

function dragStart(event) {
  event.dataTransfer.setData("startId", event.target.id);
}

function allowDrop(event) {
  event.preventDefault();
  console.log("dragover");
}

function handleDrop(event) {
  event.preventDefault();
  if (this.children.length > 0 ) return;
  let id = event.dataTransfer.getData("startId");
  let div = document.getElementById(id);
  event.target.append(div);
}

function addImages() {
  let arr = getRandomNumbersImg();
  for (let i = 0; i < 4; i++) {
    let divCard = document.createElement("div");
    divCard.classList.add("card");
    let image = document.createElement("img");
    image.setAttribute("draggable", "true");
    image.setAttribute("src", `${imagesObjects[arr[i]].link_img}`);
    let id = imagesObjects[arr[i]].id_img;
    image.setAttribute("id", `${id}`);
    image.addEventListener("dragstart", dragStart);
    divCard.addEventListener("drop", handleDrop);
    divCard.addEventListener("dragover", allowDrop);
    divCard.appendChild(image);
    cards.appendChild(divCard);
  }
}

function addPhrase() {
  let number = getRandomNumberQuestion();
  divPhrase.textContent = questionsObjects[number].question;
}

function getRandomNumberQuestion() {
  let number = getRandomNumber(10);
  while (usedQuestion.includes(number)) {
    number = getRandomNumber(10);
  }
  usedQuestion.push(number)
  return number;
}

function getRandomNumbersImg() {
  let arrNumberImages = [];
  let number = getRandomNumber(25);

  for (let i = 0; i < 4; i++) {
    while (arrNumberImages.includes(number)) {
      number = getRandomNumber(25);
    }
    arrNumberImages.push(number);
  }

  return arrNumberImages;
}

function getRandomNumber(n) {
  return Math.floor(Math.random() * n);
}

