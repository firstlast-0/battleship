function Ship(length) {
    function hit() {
        this.timesHit++;
    }

    function isSunk() {
        if (this.length === this.timesHit) return true;
        return false;
    }

    return { length, timesHit: 0, isSunk, hit };
}

function Gameboard() {
    let board = [];
    for (let i = 0; i < 10; i++) {
        board[i] = [];
        for (let j = 0; j < 10; j++) board[i][j] = 0;
    }
    let ships = [];
    let usedIDS = [];
    let missedShots = [];
    let hitShots = [];

    function placeShip(x, y, length, dir) {
        let ship = Ship(length);
        let id = 1;
        while (usedIDS.includes(id)) id++;
        ship.id = id;
        usedIDS.push(id);
        ships.push(ship);
        console.log(board);
        if (dir === 'h') {
            for (let i = 0; i < length; i++) board[x + i][y] = id;
        } else {
            for (let i = 0; i < length; i++) board[x][y + i] = id;
        }
    }

    function receiveAttack(x, y) {
        if (board[x][y] > 0) {
            for (let i = 0; i < ships.length; i++) {
                if (ships[i].id === board[x][y]) ships[i].hit();
            }
            hitShots.push(x.toString() + y);
        } else {
            missedShots.push(x.toString() + y);
        }
    }

    function allShipsSunk() {
        let ships = this.ships;
        for (let ship of ships) {
            if (!ship.isSunk()) return false;
        }
        return true;
    }

    return { board, ships, missedShots, hitShots, placeShip, receiveAttack, allShipsSunk };
}

function Player(type) {
    let board = Gameboard();
    return { type, board };
}

// let board1 = Gameboard();
// board1.placeShip(5, 5, 1);
// console.log(board1.allShipsSunk());

// module.exports = { Ship, Gameboard };
export { Ship, Gameboard, Player };
