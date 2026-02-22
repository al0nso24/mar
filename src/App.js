import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Inicio from './Inicio';
import Menu from './Menu';
import Footer from './Footer';
import Tiburones from './Tiburones';
import Cetaceos from './Cetaceos';
import Abisal from './Abisal';
import Corales from './Corales';

function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route path='/' element={<Inicio></Inicio>}></Route>
        <Route path="/inicio" element={<Inicio></Inicio>}></Route>
        <Route path='/tiburones' element={<Tiburones></Tiburones>}></Route>
        <Route path='/cetaceos' element={<Cetaceos></Cetaceos>}></Route>
        <Route path='/abisal' element={<Abisal></Abisal>}></Route>
        <Route path='/corales' element={<Corales></Corales>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
