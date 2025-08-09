import './e1.scss';
import { useState } from "react";
import { Link } from 'react-router';

export default function E1() {
    const [numero, setNumero] = useState(0)
    const [pedido, setPedido] = useState(0)
    const [cupom, setCupom] = useState(0)

    function calculo () {
        let resultado = Number(pedido) - Number(cupom)
        setNumero(resultado)
    }

    return(
        <div>
            <header className="header">
            <div className="cabec">
                <img className="logo" src="/public/logo.png" />
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
                <h1 className="titulo"> Exercicio 01 - Cupom de desconto</h1>
            </div>
            
            <div class="linha-amarela"></div>
            
            <div className="enunciado">
                 <p className="card">Implementar um programa em Java Script para calcular o valor final de uma compra a partir do valor da compra e do cupom de desconto. O cupom diz quantos reais terá de desconto.</p>
            </div>
    <div className="contas">  
         <div className="card2">
             <h3 className="text">Informe o valor do pedido </h3>
             <input className='input-1' value={pedido} onChange={(e) => setPedido(e.target.value)} />
             <br />
             <h3 className="text">Informe o valor do cupom </h3>
              <input className='input-1' value={cupom} onChange={(e) => setCupom(e.target.value)} />
             <br />
             <div className="local">
                 <button className="botao" onClick={calculo}>Executar</button>
             </div>
            </div>
          </div> 
        <h2>Resultado: O total é R${numero}</h2>
        </main>

        </div>
    )
}