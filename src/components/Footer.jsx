import React from 'react'
import '../sass/Footer.scss'

const Footer = () => {
    async function getImgs(id){
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        const data = await response.json()
        return data.sprites.other['official-artwork'].front_default;
      }
let celesteImg = getImgs(1)
  return (
   
        
    <div className='nombres'>
        <ul className="list-name">
            <li>Leslie</li>
            <li>Martin</li>
            <li>Luciano</li>
            <li>Luz</li>
            <li>Celeste
            {/* <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png" className='img-list'/> */}
            </li>
            <li>Leandro</li>
            <li>Hebe</li>
        </ul>
    </div>
  )
}

export {Footer}