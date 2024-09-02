import React, { useState } from 'react';
import "./GuessTheShape.css"
const rounds = [
    {
        image: 'https://images.unsplash.com/photo-1495207891418-d31dfd782030?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Placeholder for pizza image
        correctShape: 'Triangle',
        options: ['Square', 'Circle', 'Triangle', 'Rectangle'],
    },
    {
        image: 'https://plus.unsplash.com/premium_photo-1668032525876-a30c0f987936?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Placeholder for ball image
        correctShape: 'Circle',
        options: ['Square', 'Circle', 'Triangle', 'Hexagon'],
    },
    {
        image: 'https://plus.unsplash.com/premium_photo-1676686126007-d586c5029287?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Placeholder for table image
        correctShape: 'Oval',
        options: ['Circle', 'Oval', 'Rectangle', 'Pentagon'],
    },
];

const GuessTheShape = () => {
    const [currentRound, setCurrentRound] = useState(0);
    const [score, setScore] = useState(0);
    const [selected, setSelected] = useState(null);
    const [message, setMessage] = useState('');

    const handleSelect = (shape) => {
        setSelected(shape);

        if (shape === rounds[currentRound].correctShape) {
            setScore(score + 1);
            setMessage('Correct! Moving to the next round.');
        } else {
            setMessage('Incorrect! Try the next round.');
        }

        setTimeout(() => {
            setSelected(null);
            setMessage('');
            if (currentRound < rounds.length - 1) {
                setCurrentRound(currentRound + 1);
            } else {
                setMessage(`Game Complete! Your final score is ${score + (shape === rounds[currentRound].correctShape ? 1 : 0)}.`);
            }
        }, 1000);
    };

    return (
        <div className="game">
            <h2>Guess the Shape Game</h2>
            {currentRound < rounds.length ? (
                <>
                    <p>Round {currentRound + 1}</p>
                    <img src={rounds[currentRound].image} alt="Guess the shape" />
                    <div className="options-grid">
                        {rounds[currentRound].options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleSelect(option)}
                                style={{
                                    backgroundColor: selected === option ? '#add8e6' : 'Black',
                                }}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                    <p>{message}</p>
                </>
            ) : (
                <p>{message}</p>
            )}
            <p>Score: {score}</p>
        </div>
    );
};

export default GuessTheShape;
