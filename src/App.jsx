import { useState } from 'react'
import './App.css'
import Filters from './Components/Filters'
import Card from './Components/Card'
import Header from './Components/Header'
import BodyFooter from './Components/BodyFooter'

function App() {
  const [count, setCount] = useState(0)

  const arrayTitulos = ["armarios y cómodas" , "estanterías", "mesas y escritorios", "aparadores", "camas y cabeceros", "mesillas", "sillones y sofás", "lámparas", "sillas y taburetes", "percheros", "marcos y espejos", "otros objetos"]
  const arrayRecuperados = [29,16,9,8,21,8,8,21,14,19,9,15]
  const arrayDisponibles = [7,12,2,7,7,6,1,17,3,1,0,8]


  return (
    <>
      <div className='bg-gray-300 h-100% px-20 py-10'>
        <Header/>
        <div className="flex mt-14">
       <Filters/>
          <div className="grid grid-cols-3 gap-y-4 gap-x-52 w-full">
            <Card imagen={"src/assets/muebleAbitacolo.png"} titulo = {arrayTitulos[0]} recuperados={arrayRecuperados[0]} disponibles={arrayDisponibles[0]}/>
            <Card imagen={"src/assets/muebleAbitacolo.png"} titulo = {arrayTitulos[1]} recuperados={arrayRecuperados[1]} disponibles={arrayDisponibles[1]}/>
            <Card imagen={"src/assets/muebleAbitacolo.png"} titulo = {arrayTitulos[2]} recuperados={arrayRecuperados[2]} disponibles={arrayDisponibles[2]}/>
            <Card imagen={"src/assets/muebleAbitacolo.png"} titulo = {arrayTitulos[3]} recuperados={arrayRecuperados[3]} disponibles={arrayDisponibles[3]}/>
            <Card imagen={"src/assets/muebleAbitacolo.png"} titulo = {arrayTitulos[4]} recuperados={arrayRecuperados[4]} disponibles={arrayDisponibles[4]}/>
            <Card imagen={"src/assets/muebleAbitacolo.png"} titulo = {arrayTitulos[5]} recuperados={arrayRecuperados[5]} disponibles={arrayDisponibles[5]}/>
            <Card imagen={"src/assets/muebleAbitacolo.png"} titulo = {arrayTitulos[6]} recuperados={arrayRecuperados[6]} disponibles={arrayDisponibles[6]}/>
            <Card imagen={"src/assets/muebleAbitacolo.png"} titulo = {arrayTitulos[7]} recuperados={arrayRecuperados[7]} disponibles={arrayDisponibles[7]}/>
            <Card imagen={"src/assets/muebleAbitacolo.png"} titulo = {arrayTitulos[8]} recuperados={arrayRecuperados[8]} disponibles={arrayDisponibles[8]}/>
            <Card imagen={"src/assets/muebleAbitacolo.png"} titulo = {arrayTitulos[9]} recuperados={arrayRecuperados[9]} disponibles={arrayDisponibles[9]}/>
            <Card imagen={"src/assets/muebleAbitacolo.png"} titulo = {arrayTitulos[10]} recuperados={arrayRecuperados[10]} disponibles={arrayDisponibles[10]}/>
            <Card imagen={"src/assets/muebleAbitacolo.png"} titulo = {arrayTitulos[11]} recuperados={arrayRecuperados[11]} disponibles={arrayDisponibles[11]}/>

          </div>
        </div>
        <BodyFooter />
      </div>
    
    </>
  )
}

export default App