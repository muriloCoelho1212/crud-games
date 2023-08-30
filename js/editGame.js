import { connectDB } from "./server.js";

const form = document.querySelector('[data-form]')

async function editGame(e){
  e.preventDefault()

  try{
    const games = await connectDB.connect()
  } catch {
    
  }
}

form.addEventListener('submit', (e) => editGame(e))