const game2: {
    id: number,
    platform: {
        id: number,
        name: string
    },
    title: string,
    publisher: string,
    launch?: string | Date
} = {
    id: 1,
    platform: {
        id: 1,
        name: "Playstation"
    },
    title: "The Last of Us",
    publisher: "Naughty Dog",
    launch: "2013-06-14" 
}

const games2: {
    id: number,
    platform: {
        id: number,
        name: string
    },
    title: string,
    publisher: string,
    launch?: string | Date
}[] = [game2];

function play2(game: any){
    // runs the game
    console.log(game);
}
