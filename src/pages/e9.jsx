import './e9.scss'
import { useState } from 'react'
import { Link } from 'react-router'

export default function E9() {
    const [sorvete, setSorvete] = useState(0)
    const [resultado, setResultado] = useState(0)

    function verificar() {
        let resultado = 0
        if(temp > 1000){
            let kg = sorvete * 3
            resultado = kg
        }
        else{
            let g = sorvete * 3.5
            resultado = g
        }
        setResultado(resultado)
    }
    return (
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
                    <Link to={"/"}>
                        <img src="/seta.png" height={40} />
                    </Link>
                    <h1 className="titulo"> Exercicio 09 - Sorveteria</h1>
                </div>
                <div class="linha-cinza"></div>

                <div className="enunciado">
                    <p className="card">pppppppp</p>
                </div>

                <div className="contas-2">
                    <div className="card2-2">
                        <h3 className="text-2">Quantidade em gramas:</h3>
                        <input value={sorvete} onChange={(e) => setSorvete(e.target.value)} />
                        <br />
                        <div className="local-2">
                            <button className='botao-2' onClick={verificar}>Executar</button>
                        </div>
                    </div>
                </div>
                <h2>Resultado: {resultado} </h2>
            </main>
        </div>
    )
}