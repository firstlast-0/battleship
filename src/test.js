import { Ship, Gameboard } from './fact';
let ship = Ship(3);

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

let board1 = Gameboard();

// test('Place ship', () => {
//     expect(board1.placeShip(0, 0, 1)).toBe(undefined);
// });

// test('Check ship', () => {
//     expect(board1.board[0][0]).toBe(1);
// });

// test('Receive hit', () => {
//     expect(board1.receiveAttack(0, 0)).toBe(undefined);
// });

// test('Receive missed hit', () => {
//     expect(board1.receiveAttack(1, 1)).toBe(undefined);
// });

// test('Check ship state', () => {
//     expect(board1.ships[0].timesHit).toBe(1);
// });

// test('Check missedShots array', () => {
//     expect(board1.missedShots).toContain('11');
// });

// test('Check if allShipsSunk', () => {
//     expect(board1.allShipsSunk()).toBe(true);
// });

// test('Place ship', () => {
//     expect(board1.placeShip(5, 5, 1)).toBe(undefined);
// });

// test('Check if allShipsSunk', () => {
//     expect(board1.allShipsSunk()).toBe(false);
// });

test('Place long ship', () => {
    expect(board1.placeShip(5, 5, 3, 'h')).toBe(undefined);
});

test('Check long ship', () => {
    expect(board1.board[7][5]).toBe(1);
});