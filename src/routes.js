import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Entries from './pages/Entries'
import Invoices from './pages/Invoices'
import Stock from './pages/Stock'

const Rutas = () => {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<Home />} />
                <Route path="/entries" element={<Entries />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/stock" element={<Stock />} />
            </Routes>
        </Router>
    )
}

export default Rutas