//login_page

const form = document.forms[0];

const login_page = document.getElementById("login");


const player1 = form.nickname1;
const player2 = form.nickname2;

let player1_value = player1.value;
let player2_value = player2.value;



function clickPlay(event) {
  event.preventDefault();
  player1_value = player1.value;
  player2_value = player2.value;

  if (
    !(
      player1_value.match(/^[A-Za-z0-9]+$/) &&
      player2_value.match(/^[A-Za-z0-9]+$/)
    )
  ) {
    alert("Please reenter nickname");
  } else {
    login_page.style.display = "none";
  }
}

//main_page

const divPhrase = document.querySelector(".phrase");

const imageTarget = document.querySelector(".imageTarget");

const imagesObjects = [
  {
    id_img: 0,
    link_img: "./meme_for_hackaton/10GUY.jpg",
  },
  {
    id_img: 1,
    link_img: "./meme_for_hackaton/3059_135068129530.jpg",
  },
  {
    id_img: 2,
    link_img: "./meme_for_hackaton/Aliens.jpg",
  },
  {
    id_img: 3,
    link_img: "./meme_for_hackaton/And_Its_Gone.png",
  },
  {
    id_img: 4,
    link_img: "./meme_for_hackaton/BadLuckBryan.jpg",
  },
  {
    id_img: 5,
    link_img: "./meme_for_hackaton/c09.jpg",
  },
  {
    id_img: 6,
    link_img: "./meme_for_hackaton/chubbybubbles.jpg",
  },
  {
    id_img: 7,
    link_img: "./meme_for_hackaton/confusedtravolta.jpg",
  },
  {
    id_img: 8,
    link_img: "./meme_for_hackaton/db1.jpg",
  },
  {
    id_img: 9,
    link_img: "./meme_for_hackaton/drilpic.jpg",
  },
  {
    id_img: 10,
    link_img: "./meme_for_hackaton/dweller.jpg",
  },
  {
    id_img: 11,
    link_img: "./meme_for_hackaton/FaZd-hmWYAU3O6d.jpg",
  },
  {
    id_img: 12,
    link_img: "./meme_for_hackaton/fellowkids.jpg",
  },
  {
    id_img: 13,
    link_img: "./meme_for_hackaton/FKBoXcKVkAIJ7Ia.jpg",
  },
  {
    id_img: 14,
    link_img: "./meme_for_hackaton/FmtBz6JXoA8hTX8.jpg",
  },
  {
    id_img: 15,
    link_img: "./meme_for_hackaton/hidethepainharold.jpg",
  },
  {
    id_img: 16,
    link_img: "./meme_for_hackaton/jordan.jpg",
  },
  {
    id_img: 17,
    link_img: "./meme_for_hackaton/nedstark.jpg",
  },
  {
    id_img: 18,
    link_img: "./meme_for_hackaton/rick.jpg",
  },
  {
    id_img: 19,
    link_img: "./meme_for_hackaton/SadKeanu.jpg",
  },
  {
    id_img: 20,
    link_img: "./meme_for_hackaton/sideeyechloe.jpg",
  },
  {
    id_img: 21,
    link_img: "./meme_for_hackaton/thumb.png",
  },
  {
    id_img: 22,
    link_img: "./meme_for_hackaton/Untitled-1.png",
  },
  {
    id_img: 23,
    link_img: "./meme_for_hackaton/v4ic7qanr7i.jpg",
  },
  {
    id_img: 24,
    link_img: "./meme_for_hackaton/WAT.jpg",
  },
  {
    id_img: 25,
    link_img: "./meme_for_hackaton/x.jpg",
  },
];

const questionsObjects = [
  {
    id_answer: 0,
    questionsImg: [1],
    question: "When received my first salary in an Hi-Tech company",
  },
  {
    id_answer: 1,
    questionsImg: [2],
    question: "When received the first task in the Hi-Tech company",
  },
  {
    id_answer: 2,
    questionsImg: [3],
    question: "When received the first task in the Hi-Tech company",
  },
  {
    id_answer: 3,
    questionsImg: [4],
    question: "when you look at classmates who do not work in IT",
  },
  {
    id_answer: 4,
    questionsImg: [5],
    question: "when to do a hackathon before thursday",
  },
  {
    id_answer: 5,
    questionsImg: [6],
    question: "when to refactor",
  },
  {
    id_answer: 6,
    questionsImg: [7],
    question: "when found the answer on Stack Overflow",
  },
  {
    id_answer: 7,
    questionsImg: [8],
    question: "got a job in a startup",
  },
  {
    id_answer: 8,
    questionsImg: [9],
    question: "reaction to the first question in a technical interview",
  },
  {
    id_answer: 9,
    questionsImg: [10],
    question: "when the senior developer looks at you before giving a task",
  },
];

let cards = document.querySelector(".cards");

let usedQuestion = [];


nextMeme()


//делаем получатель карточек

imageTarget.addEventListener("drop", handleDrop);
imageTarget.addEventListener("dragover", allowDrop);
imageTarget.addEventListener("dragenter", handleDragEnter);
imageTarget.addEventListener("dragleave", handleDragLeave);

function nextMeme() {
  console.log(usedQuestion); 
  if (usedQuestion.length == 10){
    console.log('finish');
    return
  }

  clean()

  addImages();

  addPhrase();
}

function clean(){
  imageTarget.innerHTML = '';
  cards.innerHTML = '';
}

function handleDragEnter() {
  //console.log("dragenter");
}

function dragStart(event) {
  event.dataTransfer.setData("startId", event.target.id);
  //console.log("dragStart", event.target.id);
  let id = event.dataTransfer.getData("startId");
  //console.log(id);
  //console.log(event.target);
}

function handleDragLeave() {
  //console.log("dragleave");
}

function allowDrop(event) {
  event.preventDefault();
  //console.log("dragover");
}

function handleDrop(event) {
  event.preventDefault();
  if (imageTarget.children.length > 0) return;

  //console.log("handledrop");
  let id = event.dataTransfer.getData("startId");
  let div = document.getElementById(id);
  //console.log(id);
  //console.log(div);
  imageTarget.append(div);
}

//добавление карточек

function addImages() {
  let arr = getRandomNumbersImg();
  for (let i = 0; i < 4; i++) {
    let divCard = document.createElement("div");
    divCard.classList.add("card");
    let image = document.createElement("img");
    image.setAttribute("draggable", "true");
    image.setAttribute("src", `${imagesObjects[arr[i]].link_img}`);
    image.setAttribute("id", `${i}`);
    image.addEventListener("dragstart", dragStart);
    divCard.appendChild(image);
    cards.appendChild(divCard);
  }
}

//добавление фраз

function addPhrase() {
  let number = getRandomNumberQuestion();
  divPhrase.textContent = questionsObjects[number].question;
}

//начало: сделали рандомизарот

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

//конец: сделали рандомизарот
