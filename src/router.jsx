import { BrowserRouter, Routes, Route } from "react-router";
import Inicio from './pages/inicio.jsx';
import E1 from './pages/e1.jsx';
import E2 from './pages/e2.jsx';
import E3 from './pages/e3.jsx';
import E4 from './pages/e4.jsx';
import E5 from './pages/e5.jsx';
import E6 from './pages/e6.jsx';
import E7 from './pages/e7.jsx';
import E8 from './pages/e8.jsx';
import E9 from './pages/e9.jsx';
import E10 from './pages/e10.jsx';
import E11 from './pages/e11.jsx';

export default function Navegacao() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />}/>
                <Route path="/cupom-de-desconto" element={<E1 />}/>
                <Route path="/kilo-grama" element={<E2 />}/>
                <Route path="/valor-total-por-quantidade" element={<E3 />}/>
                <Route path="/leitura-de-livro" element={<E4 />}/>
                <Route path="/media-de-nota" element={<E5 />}/>
                <Route path="/salario-liquido" element={<E6 />}/>
                <Route path="/cores-primarias" element={<E7 />}/>
                <Route path="/temperatura" element={<E8 />}/>
                <Route path="/sorveteria" element={<E9 />}/>
                <Route path="/imc" element={<E10 />}/>
                <Route path="/tabuada" element={<E11 />}/>
            </Routes>
        </BrowserRouter>
    )
}