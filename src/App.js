import React from 'react';
import Header from './components/header/index';
import styles from './main.scss';

const App = () => (
    <div className = { styles.divExample }>
        <div className = { styles.divExample }>sa</div>
        <p>React here!</p>
        <Header />
    </div>
);

export default App;
