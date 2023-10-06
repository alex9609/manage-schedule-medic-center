import './App.css'
import Login from './pages/Login'
import Inicio from './pages/Inicio'
import MedicoGeneral from './pages/MedicoGeneral'
import Especialista from './pages/Especialista'
import Laboratorio from './pages/Laboratorio'

import ProtectedRoute from './pages/ProtectedRoute'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    index
                    element={
                        <Login />
                    }
                />
                <Route element={<ProtectedRoute children={undefined} />}>
                    <Route path='/inicio' element={<Inicio />} />
                    <Route path='/inicio/MedicoGeneral' element={<MedicoGeneral />} />
                    <Route path='/inicio/Especialista' element={<Especialista />} />
                    <Route path='/inicio/Laboratorio' element={<Laboratorio />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
