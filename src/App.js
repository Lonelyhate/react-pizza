import React from 'react';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import PropTypes from 'prop-types';
import axios from 'axios';

function App() {
    const [pizzas, setPizzas] = React.useState([]);

    React.useEffect(() => {
        axios.get('http://localhost:3000/db.json').then(({ data }) => setPizzas(data.pizzas));
    }, []);

    return (
        <div className="wrapper">
            <Header />
            <div className="contenаt">
                <Routes>
                    <Route path="/" element={<Home items={pizzas} />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
