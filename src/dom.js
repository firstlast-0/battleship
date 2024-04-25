import { human, p1 } from './index';

function displayBoard(player, cont) {
    for (let i = 0; i < player.board.board.length; i++) {
        let div = document.createElement('div');
        for (let j = 0; j < 10; j++) {
            let d = document.createElement('div');
            if (player.board.missedShots.includes(i.toString() + j) || player.board.hitShots.includes(i.toString() + j)) {
            } else {
                d.addEventListener('click', () => {
                    player.board.receiveAttack(i, j);
                    cont.replaceChildren();
                    if (player.board.allShipsSunk()) document.querySelector('#msg').textContent = 'Player wins!';
                    else {
                        let x, y;
                        do {
                            x = Math.floor(Math.random() * 10);
                            y = Math.floor(Math.random() * 10);
                        } while (human.board.missedShots.includes(x.toString() + y) || human.board.hitShots.includes(x.toString() + y));

                        human.board.receiveAttack(x, y);
                        p1.replaceChildren();
                        if (human.board.allShipsSunk()) document.querySelector('#msg').textContent = 'Computer wins!';
                        displayBoard(human, p1);
                    }
                    displayBoard(player, cont);
                });
            }

            if (player.board.board[i][j] > 0 && player.type === 'human') d.classList.add('ship');
            else if (player.board.missedShots.includes(i.toString() + j)) d.classList.add('missedShot');
            if (player.board.hitShots.includes(i.toString() + j)) d.classList.add('hitShot');
            div.appendChild(d);
        }
        cont.appendChild(div);
    }
}

export { displayBoard };
