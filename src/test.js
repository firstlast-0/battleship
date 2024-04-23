const index = require('./index');
let ship = index.Ship(3);

test('Ship length', () => {
    expect(ship.length).toBe(3);
});

test('Ship initial state', () => {
    expect(ship.timesHit).toBe(0);
});

test('Ship hit', () => {
    expect(ship.hit()).toBe(undefined);
});

test('Ship not sunk', () => {
    expect(ship.isSunk()).toBe(false);
});

test('Ship hit', () => {
    expect(ship.hit()).toBe(undefined);
});

test('Ship hit', () => {
    expect(ship.hit()).toBe(undefined);
});

test('Ship sunk', () => {
    expect(ship.isSunk()).toBe(true);
});

let board1 = index.Gameboard();

test('Place ship', () => {
    expect(board1.placeShip(0, 0, 1)).toBe(undefined);
});

test('Check ship', () => {
    expect(board1.board[0][0]).toBe(1);
});