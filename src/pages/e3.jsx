import './e3.scss'
import { useState } from 'react'
import { Link } from 'react-router';

export default function E3() {
    const [pequeno, setPequeno] = useState(0)
    const [medio, setMedio] = useState(0)
    const [grande, setGrande] = useState(0)
    const [resultado, setResultado] = useState(0)

    function calcular() {
        let resultado = (Number(pequeno) * 13.50) + (Number(medio) * 15) + (Number(grande) * 17.50)
        setResultado(resultado)
    }

    return(
        <div>
            <header className="header">
            <div className="cabec">
                <img className="logo" src="logo.png" />
                <h1 className="h1">React FreiS</h1>
            </div>
            <div className="li"> 
                <li>Inicio</li>
                <li>Sobre</li>
            </div>
            </header>

            <main>
            <div className="main">
                <Link to ={"/"}>
                    <img src="/seta.png" height={40} />
                </Link>
                <h1 className="titulo"> Exercicio 03 - Valor total por quantidade</h1>
            </div>
            <div class="linha-azul"></div>
            
            <div className="enunciado">
                 <p className="card">Implementar um programa em Javascript para calcular o total de uma venda de açaí a partir das quantidades compradas para cada tamanho: pequeno, médio e grande, sabendo que o valor do açaí é R$ 13,50; R$ 15,00 e R$ 17,50 respectivamente</p>
            </div>

            <div className="contas-3">
         <div className="card2-3">

            <div>
             <h3 className="text-3">Quantidade pequeno</h3>
             <input className='input-3' value={pequeno} onChange={(e) => setPequeno(e.target.value)} />
            </div>
            <div>
             <h3 className="text-3">Quantidade média</h3>
             <input className='input-3' value={medio} onChange={(e) => setMedio(e.target.value)}/>
            </div>
            <div>
             <h3 className="text-3">Quantidade grande</h3>
             <input className='input-3' value={grande} onChange={(e) => setGrande(e.target.value)}/>
            </div>
             <br />
             <div className="local-3">
            <button className='botao-3' onClick={calcular}>Executar</button>
             </div>
            
            </div>
          </div> 
        <h2>Resultado: O total é R${resultado}</h2>
        </main>

        </div>
    )
}