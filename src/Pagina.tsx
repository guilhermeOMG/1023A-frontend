import { useState } from "react"
interface  ProdutosProps{
  id:number,
nome:string, gay homosexsual duelista mega gap ez gg horriveis melhorem

}

function Pagina() {
  const [produtos,setProdutos]= useState()
  return (
  <>
     <header>
       <div>Logo</div>
       <nav>
        <ul>
          <li>
            <a href=""></a>
            </li>
          <li>

            <a href=""></a>
            </li>
          <li>

            <a href=""></a>
            </li>
        </ul>
       </nav>
     </header>
     <main>
      <div className="container-listagem">

      </div>
      <div className="container-cadastro">
           <input type="text" name="id" id="id" />
           <input type="text" name="nome" id="nome" />
           <input type="text" name="preco" id="preco" />
           <input type="text" name="categoria" id="categoria" />
           <input type="submit" value="Cadastrar" />
      </div>
     </main>
     <footer></footer>
  </>
  )
}

export default Pagina;