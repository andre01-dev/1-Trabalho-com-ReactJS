import './e5.scss';
import { useState } from 'react';
import { Link } from 'react-router';

export default function E5() {
    const [notap, setNotap] = useState(0)
    const [notas, setNotas] = useState(0)
    const [notat, setNotat] = useState(0)
    const [resultado, setResultado] = useState(0)
    const [situacao, setSituacao] = useState()

    function calcularMedia() {
        let resultado = (Number(notap) + Number(notas) + Number(notat)) / 3
        setResultado(resultado)
        let situ = '';
        if(resultado >= 6){
            situ = 'True'
        }
        else[
            situ = 'False'
        ]
        setSituacao(situ)
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
                <h1 className="titulo"> Exercicio 05 - Média de notas</h1>
            </div>
            <div class="linha-roxa"></div>
            
            <div className="enunciado">
                 <p className="card">Implemente um programa em Javascript para verificar se um aluno passou ou não, baseado em 3 notas, considerando que a média mínima para passar é 6.</p>
            </div>

            <div className="contas-5">
         <div className="card2-5">

            <div>
             <h3 className="text-5">Nota: 1</h3>
             <input className='input-5' value={notap} onChange={(e) => setNotap(e.target.value)} />
            </div>
            <div>
             <h3 className="text-5">Nota 2:</h3>
             <input className='input-5' value={notas} onChange={(e) => setNotas(e.target.value)}/>
            </div>
            <div>
             <h3 className="text-5">Nota 3:</h3>
             <input className='input-5' value={notat} onChange={(e) => setNotat(e.target.value)}/>
            </div>
             <br />
             <div className="local-5">
            <button className='botao-5' onClick={calcularMedia}>Executar</button>
             </div>
            
            </div>
          </div> 
        <h2>Resultado: A média é {resultado} <br />O aluno passou? {situacao} </h2>
        </main>

        </div>
    )
    
}