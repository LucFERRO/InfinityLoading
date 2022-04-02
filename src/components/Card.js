import React, { Component } from 'react'
import Shape1 from './Shape1';
import '../assets/css/Shape1.css';

export default function Card() {
    return (
        <div class="card-container">
            <button>Infinity</button>
            <Shape1 />
        </div>
    )
}
