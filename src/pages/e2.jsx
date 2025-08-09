import './e2.scss';
import { useState } from 'react';
import { Link } from 'react-router';

export default function E2() {
    const [numero, setNumero] = useState(0)
    const [resultado, setResultado] = useState(0)

    function calculo(){
        let resultado = Number(numero) * 1000
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
                <h1 className="titulo"> Exercicio 02 - Converter Kg/Gramas</h1>
            </div>
            <div class="linha-verde"></div>
            
            <div className="enunciado">
                 <p className="card">Implementar um programa em Javascript para converter kilos em gramas.</p>
            </div>

            <div className="contas-2">
         <div className="card2-2">
             <h3 className="text-2">Valor em Kilos</h3>
             <input value={numero} onChange={(e) => setNumero(e.target.value)}/>
             <br />
             <div className="local-2">
            <button className='botao-2' onClick={calculo}>Executar</button>
             </div>
            </div>
          </div> 
        <h2>Resultado: O total é {resultado} gramas</h2>

        </main>
        </div>
    )
}
