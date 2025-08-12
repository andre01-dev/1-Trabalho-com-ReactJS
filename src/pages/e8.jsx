import './e8.scss';
import { useState } from 'react';
import { Link } from 'react-router';

export default function E8() {
    const [temp, setTemp] = useState(0)
    const [resultado, setResultado] = useState()

    function verificar() {
        let resultado = ""
        if(temp >= 41){
            resultado = "Hipertermia"
        }
        else if(temp >= 39.6 && temp <= 41){
            resultado = "Febre Alta"
        }
        else if(temp >= 37.6 && temp <= 39.6){
            resultado = "Febre"
        }
        else if(temp >= 36 && temp <= 37.6){
            resultado = "Normal"
        }
        else if(temp <= 36){
            resultado = "Hipotermia"
        }
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
                <h1 className="titulo"> Exercicio 08 - Temperatura</h1>
            </div>
            <div class="linha-preta"></div>
            
            <div className="enunciado">
                 <p className="card">Implementar um programa em javascript que a partir da temperatura, avalie a situação da pessoa conforme a tabela. Ao final, apresente a classificação</p>
            </div>

            <div className="contas-2">
         <div className="card2-2">
             <h3 className="text-2">Temperatura</h3>
             <input value={temp} onChange={(e) => setTemp(e.target.value)}/>
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