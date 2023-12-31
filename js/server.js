async function connect(){
    const require = await fetch('http://localhost:3000/game')
    const response = await require.json()

    return response
}

async function createGame(game){
    const require = await fetch('http://localhost:3000/game', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            title: game.title,
            gender: game.gender,
            dateRelease: game.dateRelease,
            plat: game.plat,
            desc: game.descript,
            img: game.img
        })
    })
    if(!require.ok){
        throw new Error("Não foi possível cadastrar este game")
    }
    const response = await require.json()
    return response
}

async function editGame(game){
    const require = await fetch('http://localhost:3000/game', {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            title: game.title,
            gender: game.gender,
            dateRelease: game.dateRelease,
            plat: game.plat,
            desc: game.descript,
            img: game.img
        })
    })
    if(!require.ok){
        throw new Error("Não foi possível editar este game")
    }
    const response = await require.json()
    return response
}

export const connectDB = {
    connect, createGame, editGame
}