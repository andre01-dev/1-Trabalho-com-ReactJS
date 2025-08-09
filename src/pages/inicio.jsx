
import './inicio.scss'
import { Link, Links } from 'react-router';

export default function Inicio() {


    return(
        <div className="conteiner-inicio">
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
            <h1 className="titulo">Escolha um treino...</h1>
            <div className="todos-ex">
                <Link to = {"/cupom-de-desconto"} >
                <div className="exercicios">
                <div className="cores1 quad"></div>
                <h3>Cupom de Desconto</h3>
                <p>Exercício 01</p>
            </div>
                </Link>
            <Link to ={"/kilo-grama"}>
            <div className="exercicios">
                <div className="cores2 quad"></div>
                <h3>Converter Kg/gramas</h3>
                <p>Exercício 02</p>
            </div>
            </Link>
            <Link to ={"/valor-total-por-quantidade"}>
            <div className="exercicios">
                <div className="cores3 quad"></div>
                <h3>Valor total por quantidade</h3>
                <p>Exercício 03</p>
            </div>
            </Link>
            <Link to ={"/leitura-de-livro"}>
            <div className="exercicios">
                <div className="cores4 quad"></div>
                <h3>Leitura do livro</h3>
                <p>Exercício 04</p>
            </div>
            </Link>
            <Link to ={"/media-de-nota"}>
            <div className="exercicios">
                <div className="cores5 quad"></div>
                <h3>Média de notas</h3>
                <p>Exercício 05</p>
            </div>
            </Link>
            <Link to={"/salario-liquido"}>
            <div className="exercicios">
                <div className="cores6 quad"></div>
                <h3>Salário líquido</h3>
                <p>Exercício 06</p>
            </div>
            </Link>
            <Link to={"/cores-primarias"}>
            <div className="exercicios">
                <div className="cores7 quad"></div>
                <h3>Cores primárias</h3>
                <p>Exercício 07</p>
            </div>
            </Link>
            <Link to = {"/temperatura"}>
            <div className="exercicios">
                <div className="cores8 quad"></div>
                <h3>Temperatura</h3>
                <p>Exercício 08</p>
            </div>
            </Link>
            <Link to = {"/sorveteria"}>
            <div className="exercicios">
                <div className="cores9 quad"></div>
                <h3>Sorveteria</h3>
                <p>Exercício 09</p>
            </div>
            </Link>
            <Link to = {"/imc"}>
            <div className="exercicios">
                <div className="cores10 quad"></div>
                <h3>Cálculo de IMC com histórico</h3>
                <p>Exercício 10</p>
            </div>
            </Link>
            <Link to={"/tabuada"}>
            <div className="exercicios">
                <div className="cores11 quad"></div>
                <h3>Tabuada</h3>
                <p>Exercício 11</p>
            </div>
            </Link>
            <div className="exercicios">
                <div className="cores12 quad"></div>
                <h3>Comparador de pessoas</h3>
                <p>Exercício 12</p>
            </div>
            </div>
            
        </main>
        </div>
    )
}