// import './style.css';

function Ship(length) {
    this.length = length;

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
    for (let i = 0; i < 10; i++) board[i] = [];
    let usedIDS = [];

    function placeShip(x, y, length) {
        let ship = Ship(length);
        let id = 1;
        while (usedIDS.includes(id)) id++;
        ship.id = id;

        board[x][y] = id;
    }

    function receiveAttack(x, y) {
        
    }

    return { board, placeShip };
}

module.exports = { Ship, Gameboard };
