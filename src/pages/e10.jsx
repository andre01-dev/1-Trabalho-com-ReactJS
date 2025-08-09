import './e10.scss'
import { Link } from 'react-router'
import { useState } from 'react'

export default function E10() {
    const [altura, setAltura] = useState(0)
    const [peso, setPeso] = useState(0)
    const [resultado, setResultado] = useState(0)

    function calculo () {
        let resultado = ""
        let calculo = Number(peso) / (Number(altura) * Number(altura))
        if(calculo >= 40){
            resultado = "Obesidade Grau III"
        }
        else if(calculo >= 35 && calculo <= 39.9){
            resultado = "Obesidade Grau II"
        }
        else if(calculo >= 30 && calculo <= 34.9){
            resultado = "Obesidade Grau I"
        }
        else if(calculo >= 25 && calculo <= 29.9){
            resultado = "Sobrepeso"
        }
        else if(calculo >= 18.5 && calculo <= 24.9){
            resultado = "Peso normal"
        }
        else if(calculo <= 18.5){
            resultado = "Abaixo do peso"
        }
        setResultado(resultado)
    }

    return (
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
                    <Link to={"/"}>
                        <img src="/seta.png" height={40} />
                    </Link>
                    <h1 className="titulo"> Exercicio 10 - IMC </h1>
                </div>

                <div class="linha-marrom"></div>

                <div className="enunciado">
                    <p className="card">ppppppppppp</p>
                </div>
                <div className="contas">
                    <div className="card2">
                        <h3 className="text">Informe a altura</h3>
                        <input className='input-1' value={altura} onChange={(e) => setAltura(e.target.value)} />
                        <br />
                        <h3 className="text">Informe o peso </h3>
                        <input className='input-1' value={peso} onChange={(e) => setPeso(e.target.value)} />
                        <br />
                        <div className="local">
                            <button className="botao" onClick={calculo}>Executar</button>
                        </div>
                    </div>
                </div>
                <h2>Resultado: {resultado}</h2>
            </main>
        </div>
    )
}