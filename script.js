const form = document.forms[0]

const login_page = document.getElementById('login')
console.log(login_page);

const player1 = form.nickname1;
const player2 = form.nickname2;

let player1_value = player1.value;
let player2_value = player2.value;

console.log(player1_value);

function clickPlay (event) {
    event.preventDefault();
    player1_value = player1.value;
    player2_value = player2.value;

        if (!(player1_value.match(/^[A-Za-z0-9]+$/) && player2_value.match(/^[A-Za-z0-9]+$/))){
            alert('Please reenter nickname');
        }else{
            login_page.style.display = 'none';
        }
    }


