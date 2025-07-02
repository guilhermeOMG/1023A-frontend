import {useEffect, useState } from "react"
import "./main.tsx"
import { NavLink } from "react-router-dom"

function Componente2(){
    return(
        <>
            <NavLink to="/componente2" end> Navegar para o componente 2</NavLink>
            <h1>Componente 2</h1>
        </>
    )
}
export default Componente2