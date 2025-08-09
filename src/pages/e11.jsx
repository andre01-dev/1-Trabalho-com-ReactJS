import './e11.scss'
import { Link } from 'react-router'
import { useState } from 'react'

export default function E11() {
    const [numero, setNumero] = useState(0);
    const [resultado, setResultado] = useState([]);

    function calcular() {
        
        let vetor = []
        for(let i = 1; i <= 10; i++){
            let conta = numero * i;
            let resultado= `${numero} x ${i} = ${conta}`
            vetor.push(resultado)
            
        }
        setResultado(vetor)
    }
    return(
        <div>
            <header className="header">
                <div className="cabec">
                    <img className="logo" src="/logo.png" />
                    <h1 className="h1">React FreiS</h1>
                </div>
                <div className="li">
                    <li>Inicio</li>
                    <li>Sobre</li>
                </div>
            </header>

            <main>
                <div className="main">
                    <Link to={"/"}>
                        <img src="/seta.png" height={40} />
                    </Link>
                    <h1 className="titulo"> Exercicio 11 - Tabuada </h1>
                </div>

                <div class="linha-roxa"></div>

                <div className="enunciado">
                    <p className="card">ppppppppppp</p>
                </div>
                <div className="contas">
                    <div className="card2">
                        <h3 className="text-6">Informe o numero para tabuada</h3>
                        <input className='input-1' value={numero} onChange={(e) => setNumero(e.target.value)}/>
                        <br />
                        <div className="local">
                            <button className="botao" onClick={calcular}>Executar</button>
                        </div>
                    </div>
                </div>
                <ul>{resultado.map((linha, index) => (
                    <li className='li-e11' key={index}>
                        {linha}
                    </li>
                ))}</ul>
            </main>
        </div>
    )
}