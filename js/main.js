let data = []

const form = document.querySelector('[data-form]')
const nome = document.querySelector('[data-input-name]')
const age = document.querySelector('[data-input-age]')
const ul = document.querySelector('ul')
const register = localStorage.getItem('register')

function saveLocalStorage(){
    localStorage.setItem('register', JSON.stringify(data))
}

if(register){
    data = JSON.parse(register)
    showRegister()
} else {
    data = []
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    createPerson()
    showRegister()
})

function createPerson(){
    const nameRegistering = nome.value
    const ageRegistering = age.value
    data.some((element) => element.name.toUpperCase() === nameRegistering.toUpperCase()) ? alert("Oiojd") : data.push({
        name: nameRegistering,
        age: ageRegistering
    })
    nome.value = ""
    age.value = ""
}

function showRegister(){
    ul.innerHTML = ""
    data.forEach((data) => {
        ul.innerHTML += `<li>Nome: ${data.name} Idade: ${data.age}</li>`
    })
    saveLocalStorage()
}