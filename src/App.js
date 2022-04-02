import React, { useState, useRef, CSSProperties} from 'react';
// import uuidv4 from 'uuid/v4';
import Card from './components/Card';
import './assets/css/Home.css';

import Shape1 from './components/Shape1';
import './assets/css/Shape1.css';

function App() {
    const [] = useState([])
    return (
        <div id="home">
            <Card shape={<Shape1/>} />
            <Card shape={<Shape1/>} />
            <Card shape={<Shape1/>} />
        </div>
    )
}

export default App;