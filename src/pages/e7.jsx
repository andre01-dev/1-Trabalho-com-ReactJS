import './e7.scss';
import { useState } from 'react';
import { Link } from 'react-router';

export default function E7() {
    const [cor, setCor] = useState();
    const [corr, setCorr] = useState();
    const [resultado, setResultado] = useState();
    
    function verificar() {
        let resultado = ""
    if(cor == 'Vermelho' && corr =='Amarelo' || cor == 'vermelho' && corr =='amarelo'){
        resultado = 'True' 
    }
    else if(cor == 'Azul' && corr =='Vermelho'||cor == 'azul' && corr =='vermelho'){
        resultado = 'True' 
    }
    else if(cor == 'Amarelo' && corr =='Azul'||cor == 'Amarelo' && corr =='Azul'){
        resultado = 'True' 
    }
    else if(cor == 'Amarelo' && corr =='Vermelho'||cor == 'amarelo' && corr =='vermelho'){
        resultado = 'True' 
    }
    else if(cor == 'Vermelho' && corr =='Azul'||cor == 'vermelho' && corr =='azul'){
        resultado = 'True' 
    }
    else if(cor == 'Azul' && corr =='Amarelo'||cor == 'azul' && corr =='amarelo'){
        resultado = 'True' 
    }
    else{
        resultado = 'False'
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
                <h1 className="titulo"> Exercicio 07 - Cores Primárias</h1>
            </div>
            <div class="linha-verde"></div>
            
            <div className="enunciado">
                 <p className="card">Implementar um programa em javascript para verificar se duas cores são primárias</p>
            </div>

            <div className="contas-7">
         <div className="card2-7">

            <div>
             <h3 className="text-7">Cor 1:</h3>
             <input value={cor} onChange={(e) => setCor(e.target.value)}/>
            </div>
            <div>
             <h3 className="text-7">Cor 2:</h3>
             <input value={corr} onChange={(e) => setCorr(e.target.value)}/>
            </div>
             <br />
            <div className="local-7">
            <button className='botao-7' onClick={verificar}>Executar</button>
             </div>
            </div>
          </div> 
        <h2>As duas cores são primárias? {resultado} </h2>
        </main>
        </div>
    )
}