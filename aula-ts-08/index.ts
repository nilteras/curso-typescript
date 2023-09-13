import { gameType } from "./protocols/protocols.game";

const game: gameType = {
    id: 1,
    platform: {
        id: 1,
        name: "Playstation"
    },
    title: "The Last of Us",
    publisher: "Naughty Dog",
    launch: "2013-06-14" // pode ser um Date. também pode ser vazio
}

const games: gameType[] = [game];

function play(game: gameType) {
    // runs the game
    console.log(game);
}