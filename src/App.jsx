import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [names, setNames] = useState([])

  const [characters, setCharacters] = useState([{}])

  useEffect(() => {
    getAnimes()
    console.log("Componente montado");
  }, [])

  const getAnimes = async () => {
    const response = await fetch('http://localhost:3000/api/anime-list')
    const data = await response.json()
    setNames(data.animes.map((anime) => anime.title));
  }

  console.log(names);
  return (
    <>
      {
        names.map((name, index) => (
          <h2 key={index}>{name}</h2>
        ))
      }
    </>
  )
}

export default App
