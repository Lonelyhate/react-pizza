import React from 'react';
import { connect } from 'react-redux';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import axios from 'axios';
import { setPizzas } from './redux/actions/pizzas';

function App() {
    React.useEffect(() => {
        axios.get('http://localhost:3000/db.json').then(({ data }) => {
            
        });
    }, []);

    return (
        <div className="wrapper">
            <Header />
            <div className="contenаt">
                <Routes>
                    <Route path="/" element={<Home items={[]} />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        items: state.pizzas.items
    }
}

export default connect(mapStateToProps)(App);
