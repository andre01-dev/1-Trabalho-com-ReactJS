import './e4.scss';
import { useState } from 'react';
import { Link } from 'react-router';

export default function E4() {
    const [paginas, setPaginas] = useState(0)
    const [tempo, setTempo] = useState(0)
    const [resultado, setResultado] = useState(0)
    const [nome, setNome] = useState()

    function calcular() {
        let resultado = Number(paginas) * Number(tempo)
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
                <h1 className="titulo"> Exercicio 04 - Leitura do livro</h1>
            </div>
            <div class="linha-azul2"></div>
            
            <div className="enunciado">
                 <p className="card">Implementar um programa em Javascript que calcule o tempo que um livro será lido por uma pessoa a partir do nome do livro, do total de páginas e do tempo em segundos de leitura por página</p>
            </div>

            <div className="contas-4">
         <div className="card2-4">

            <div>
             <h3 className="text-4 nome">Nome do livro</h3>
             <input value={nome} onChange={(e) => setNome(e.target.value)} />
            </div>

            <div>
             <h3 className="text-4">Quantidade de páginas do livro</h3>
             <input value={paginas} onChange={(e) => setPaginas(e.target.value)} />
            </div>

            <div>
             <h3 className="text-4">Tempo por página</h3>
             <input value={tempo} onChange={(e) => setTempo(e.target.value)}/>
            </div>

             <br />
            <div className="local-4">
            <button className='botao-4' onClick={calcular}>Executar</button>
             </div>

            </div>
          </div> 
        <h2 className='resposta'>Você lerá o livro: {nome +' ' + resultado / 60} minutos</h2>
        </main>
        </div>
    )
}