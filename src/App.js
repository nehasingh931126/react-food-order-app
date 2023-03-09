import React, {Fragment} from 'react';
import classes from './App.module.css';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
function App() {
    return (
        <Fragment>
            <Header/>
            <main>
                <Meals/>
            </main>
        </Fragment>
    )
}

export default App;
