import './e6.scss';
import { useState } from 'react';
import { Link } from 'react-router';

export default function E6() {
    const [salario, setSalario] = useState(0)
    const [porcentagem, setPorcentagem] = useState(0)
    const [desconto, setDesconto] = useState(0)
    const [resultado, setResultado] = useState(0)

    function calcular() {
        let resultado = Number(salario) + Number((desconto/100)*1000) - Number(porcentagem)
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
                <h1 className="titulo"> Exercicio 06 - Salário líquido</h1>
            </div>
            <div class="linha-vermelha"></div>
            
            <div className="enunciado">
                 <p className="card">Implemente um programa em javascript para calcular o salário líquido de um funcionário, a partir de seu salário base, do bônus mensal em porcentagem e do total de descontos em reais</p>
            </div>

            <div className="contas-6">
         <div className="card2-6">

            <div>
             <h3 className="text-6">Salário</h3>
             <input className='input-6' value={salario} onChange={(e) => setSalario(e.target.value)}/>
            </div>
            <div>
             <h3 className="text-6">Porcentagem</h3>
             <input className='input-6' value={porcentagem} onChange={(e) => setPorcentagem(e.target.value)}/>
            </div>
            <div>
             <h3 className="text-6">Desconto</h3>
             <input className='input-6' value={desconto} onChange={(e) => setDesconto(e.target.value)}/>
            </div>
             <br />
             <div className="local-6">
            <button className='botao-6' onClick={calcular}>Executar</button>
             </div>
            
            </div>
          </div> 
        <h2>Resultado: O total é R${resultado}</h2>
        </main>
        </div>
    )
}
