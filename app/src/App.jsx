import { useState } from 'react';
import Cadastrar from './components/Formularios/User/Cadastrar';
import MenuHeader from './components/MenuHeader/MenuHeader';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Listar from './components/Formularios/User/Listar';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <MenuHeader />

        <Routes>
          <Route path="/" element={<Cadastrar />} />
          <Route path="/listar" element={<Listar />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
