type Color = {
    value: `red` | `white` | `blue` | `green` | `orange` | `red`;
}

type Postition = {
    x: number;
    y: number;
    z: number;
}

interface Piece {
    id: number;
    position: Postition;
}

interface Center extends Piece {
    color: Color;
}

const id: number[] = Array.from({length: 26}, (_, i) => i + 1)

console.log(id)

const CUBE_SIZE = 5;
const NUM_CENTERS = 6;
const NUM_CORNERS = 8;
// const NUMBER_FACES = 88; // TODO
// const NUMBER_EDGES = 88; // TODO
const NUM_PIECES = (CUBE_SIZE * CUBE_SIZE * CUBE_SIZE) - (CUBE_SIZE - 2)**3; // this is correct
console.log(`num pieces ${NUM_PIECES}`)

const colors = [`red`, `white`, `blue`, `green`, `orange`, `red`]
const centerPositions: Postition[] = [
    { x: 1, y: 0, z: 0 },
    { x: -1, y: 0, z: 0 },
    { x: 0, y: 1, z: 0 },
    { x: 0, y: -1, z: 0 },
    { x: 0, y: 0, z: 1 },
    { x: 0, y: 0, z: -1 },
]


