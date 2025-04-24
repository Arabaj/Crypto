import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Home from './Pages/Home';
import Chart from './components/Chart';

function App() {

  return (

    <BrowserRouter>
      <div className='bg-dark text-white' style={{ minHeight: "100vh" }}>
        <Header />
        
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>


  );
}

export default App;
