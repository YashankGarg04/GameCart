'use client';
import { useState } from 'react';
import './style.css';

const SpinWheel = () => {
    const [rotation, setRotation] = useState(0);

    const spinWheel = () => {
        const newRotation = rotation + Math.ceil(Math.random() * 3600);
        setRotation(newRotation);
    };

    return (
        <div className="container">
            <div className="spinBtn" onClick={spinWheel}>Spin</div>
            <div className="wheel" style={{ transform: `rotate(${rotation}deg)` }}>
                {[100, 1, 50, 0, 1000, 10, 5, 20].map((value, index) => (
                    <div 
                        key={index} 
                        className="text" 
                        style={{ 
                            '--i': index + 1, 
                            '--clr': ['#db7093', '#20b2aa', '#d63e92', '#daa520', '#ff340f', '#ff7f50', '#3cb371', '#4169e1'][index] 
                        }}
                    >
                        <span>{value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SpinWheel;
