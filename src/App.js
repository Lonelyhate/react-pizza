import React from 'react';
import { useDispatch } from 'react-redux';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import axios from 'axios';
import { setPizzas } from './redux/actions/pizzas';

function App() {
    const dispatch = useDispatch();

    React.useEffect(() => {
        axios.get('http://localhost:3001/pizzas').then(({ data }) => {
            dispatch(setPizzas(data));
        });
    }, []);

    return (
        <div className="wrapper">
            <Header />
            <div className="contenаt">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
