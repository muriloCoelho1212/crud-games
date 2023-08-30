import { connectDB } from './server.js'

const form = document.querySelector('[data-form]')

async function createGame(e){
    e.preventDefault()

    const game = {
        title: document.querySelector('[data-input-title]').value,
        gender: document.querySelector('[data-input-gender]').value,
        dateRelease: document.querySelector('[data-input-lanc]').value,
        plat: document.querySelector('[data-input-plat]').value,
        descript: document.querySelector('[data-input-desc]').value,
        img: document.querySelector('[data-input-img]').value
    }

    if(game.title.length >= 11){
        
    }

    try{
        await connectDB.createGame(game)

        form.reset()
    } catch (e){
        alert(e)
    }
}

form.addEventListener('submit', (e) => createGame(e))