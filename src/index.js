import { Ship, Gameboard, Player } from './fact';
import { displayBoard } from './dom';
import './style.css';

let p1 = document.querySelector('#p1');
let human = Player('human');
let x = document.querySelector('#posx');
let y = document.querySelector('#posy');
let dir = document.querySelector('#dir');
let msg = document.querySelector('#place > div');
let submit = document.querySelector('#place > button');
let pieces = [
    ['Carrier', 5],
    ['Battleship', 4],
    ['Destroyer', 3],
    ['Submarine', 3],
    ['Patrol Boat', 2],
];
let ind = 0;
msg.textContent = `Select position for ${pieces[ind][0]}`;
submit.addEventListener('click', () => {
    console.log(x.value, y.value, pieces[ind][1], dir.value);
    human.board.placeShip(x.value, y.value, pieces[ind][1], dir.value);
    ind++;
    msg.textContent = `Select position for ${pieces[ind][0]}`;
    p1.replaceChildren();
    displayBoard(human, p1);
});

displayBoard(human, p1);

let p2 = document.querySelector('#p2');
let comp = Player('comp');
comp.board.placeShip(2, 2, 1, 'v');
comp.board.placeShip(9, 8, 2, 'v');
displayBoard(comp, p2);

p2.addEventListener('click', () => {});

export { human, p1 };
