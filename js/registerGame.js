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

    try{
        await connectDB.createGame(game)
        form.reset()
    } catch (e){
        document.querySelector('.section__register').innerHTML = `<h2 class="list__erro">Não foi possível carregar os vídeos</h2>`
        console.log(e)
    }
}

form.addEventListener('submit', (e) => createGame(e))