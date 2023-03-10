import React, {useState} from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart'
import CartProvider from './store/CartProvider';
function App() {
    const [showCart, setCartShowFlag] = useState(false)
    const showCartHandler = () => {
        setCartShowFlag(true);
    }

    const hideCartHandler = () => {
        setCartShowFlag(false);
    }


    return (
        <CartProvider>
            {showCart && <Cart onClose={hideCartHandler} />}
            <Header onShowCart={showCartHandler} />
            <main>
                <Meals/>
            </main>
        </CartProvider>
    )
}

export default App;
