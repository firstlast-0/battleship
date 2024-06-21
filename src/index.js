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
msg.textContent = `Input coordinates for ${pieces[ind][0]} position (length: ${pieces[ind][1]})`;
submit.addEventListener('click', () => {
    human.board.placeShip(+x.value, +y.value, pieces[ind][1], dir.value);

    let cX, cY, cDir, check;
    do {
        cX = Math.floor(Math.random() * 10);
        cY = Math.floor(Math.random() * 10);
        cDir = Math.floor(Math.random() * 2) === 0 ? 'h' : 'v';
        if (cDir === 'h') {
        }
        check = cDir === 'h' ? cX + pieces[ind][1] : cY + pieces[ind][1];
    } while (check > 10);
    comp.board.placeShip(cX, cY, pieces[ind][1], cDir);
    p2.replaceChildren();
    displayBoard(comp, p2);

    ind++;
    msg.textContent = ind < 5 ? `Input coordinates for ${pieces[ind][0]} position (length: ${pieces[ind][1]})` : 'Click on the right board to attack';
    p1.replaceChildren();
    displayBoard(human, p1);
});

displayBoard(human, p1);

let p2 = document.querySelector('#p2');
let comp = Player('comp');
// comp.board.placeShip(2, 2, 1, 'v');
// comp.board.placeShip(9, 8, 2, 'v');
displayBoard(comp, p2);

p2.addEventListener('click', () => {});

export { human, p1 };
