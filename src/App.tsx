import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Cadastro from './pages/cadastro/Cadastro';
import Header from './components/header/Header';
import ListaProduto from './components/card/listaProduto/ListaProduto';
import { AuthProvider } from './contexts/AuthContext';

import ListaCategoria from './components/categoria/listaCategoria/ListaCategoria';
import FormularioCategoria from './components/categoria/formularioCategoria/FormularioCategoria';
import DeletarCategoria from './components/categoria/deletarCategoria/DeletarCategoria';
import FormularioProduto from './components/produto/formularioProduto/FormularioProduto';

function App() {
  return (
   
    <AuthProvider>
      <BrowserRouter>
          <Navbar />
            <Header />
              <div className='min-h-[80vh] bg-gray-300 '>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/cadastro" element={<Cadastro />} />
                  <Route path="/apostilas" element={<ListaProduto />} />
                  <Route path="/categoria" element={<ListaCategoria />} />
                  <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
                  <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
                  <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
                  <Route path="/cadastroProduto" element={<FormularioProduto />} />
                  <Route path="/editarProduto/:id" element={<FormularioProduto />} />
                  
              </Routes>
            </div> 
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    
  );
}

export default App;