//login_page

const form = document.forms[0];

const login_page = document.getElementById("login");
console.log(login_page);

const player1 = form.nickname1;
const player2 = form.nickname2;

let player1_value = player1.value;
let player2_value = player2.value;

console.log(player1_value);

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

const imagesObjects = [
  {
    id_img: 0,
    link_img: "./meme_for_hackaton/10GUY.jpg",
  },
  {
    id_img: 1,
    link_img: "./meme_for_hackaton/Aliens.jpg",
  },
  {
    id_img: 2,
    link_img: "./meme_for_hackaton/db1.jpg",
  },
  {
    id_img: 3,
    link_img: "./meme_for_hackaton/x.jpg",
  },
  {
    id_img: 4,
    link_img: "./meme_for_hackaton/fellowkids.jpg",
  },
  {
    id_img: 5,
    link_img: "./meme_for_hackaton/c09.jpg",
  },
  {
    id_img: 6,
    link_img: "./meme_for_hackaton/3059_135068129530.jpg",
  },
  {
    id_img: 7,
    link_img: "./meme_for_hackaton/jordan.jpg",
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

addImages();

addPhrase();

function addImages() {
  let arr = getRandomNumbersImg()
  for (let i = 0; i < 4; i++) {
    let divCard = document.createElement("div");
    divCard.classList.add("card");
    divCard.innerHTML = `<img src='${imagesObjects[arr[i]].link_img}'>`;
    cards.appendChild(divCard);
  }
}

function addPhrase() {
  let number = getRandomNumberQuestion();
  number = number + 1;
  divPhrase.textContent = questionsObjects[number].question;
}

//начало: сделали рандомизарот

function getRandomNumberQuestion() {
  let number = getRandomNumber(10);
  while (usedQuestion.includes(number)) {
    number = getRandomNumber(10);
  }
  return number;
}

function getRandomNumbersImg() {
  let arrNumberImages = [];
  let number = getRandomNumber(26);

  for (let i = 0; i < 4; i++) {
    while (arrNumberImages.includes(number)) {
      number = getRandomNumber(26);
    }
    arrNumberImages.push(number);
  }

  return arrNumberImages;
}

function getRandomNumber(n) {
  return Math.floor(Math.random() * n);
}

//конец: сделали рандомизарот
