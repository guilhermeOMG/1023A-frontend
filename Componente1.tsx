import {useEffect, useState } from "react"
import "./main.tsx"
import { NavLink } from "react-router-dom"

function Componente1(){
    return(
        <>
            <NavLink to="/componente1" end> Navegar para o componente 1</NavLink>
            <h1>Componente 1</h1>
        </>
    )
}
export default Componente1