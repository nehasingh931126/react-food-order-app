import React, {Fragment, useState} from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart'
function App() {
    const [showCart, setCartShowFlag] = useState(false)
    const showCartHandler = () => {
        setCartShowFlag(true);
    }

    const hideCartHandler = () => {
        setCartShowFlag(false);
    }


    return (
        <Fragment>
            {showCart && <Cart onClose={hideCartHandler} />}
            <Header onShowCart={showCartHandler} />
            <main>
                <Meals/>
            </main>
        </Fragment>
    )
}

export default App;
