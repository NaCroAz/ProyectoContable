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
                <Route path="/" exact component={Home} />
                <Route path="/entries" component={Entries} />
                <Route path="/invoices" component={Invoices} />
                <Route path="/stock" component={Stock} />
            </Routes>
        </Router>
    )
}

export default Rutas