console.log(`fcks`)

type Color = {
    value: `red` | `white` | `blue` | `greeg` | `orange` | `red`;
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
    color: string;
}


