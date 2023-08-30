import { connectDB } from './server.js'

const cards = document.querySelector("[data-cards]")

export default function constructCard(title, gender, dateRelease, plat, desc, img){
    const card = document.createElement('li')
    card.className = "view__list-item"
    card.innerHTML = `
    <div class="list__card">
    <div class="card__items">
    <div class="card__items-descript">
    <h3 class="list__item-title">${title}</h3>
    <p class="list__item-descript">${desc}</p>
    <div class="list__footer">
    <span class="footer__item">Gênero: ${gender}</span>
    <span class="footer__item">Data de Lançamento: ${dateRelease}</span>
    <span class="footer__item">Plataforma: ${plat}</span>
    </div>
    </div>
    <img src="${img}" alt="Capa do jogo" class="list__item-img">
    </div>
    </div>`
    
    return card
}

async function cardGames(){
    try{
        const games = await connectDB.connect()
        games.forEach(element => cards.appendChild(constructCard(element.title, element.gender, element.dateRelease, element.plat, element.desc, element.img)))
    } catch {
        const errorModal = document.querySelector('#errorModal');
        errorModal.style.display = "flex"
        errorModal.addEventListener('click', () => {
            location.reload();
        });
    }
}

cardGames()