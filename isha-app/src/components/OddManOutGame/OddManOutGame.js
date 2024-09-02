import React from 'react'
import { useState } from "react";
import "./OddManOutGame.css"

// Importing images for all items in the categories
import appleImg from '../..//images/apple.png';
import bananaImg from '../..//images/banana.png';
import cherryImg from '../..//images/cherry.png';
import grapeImg from '../..//images/grape.png';
import flowerImg from '../..//images/flower.png';

import redImg from '../..//images/red.jpeg';
import blueImg from '../..//images/blue.jpeg';
import pinkImg from '../..//images/pink.jpeg';
import yellowImg from '../..//images/yellow.jpeg';
import dogImg from '../..//images/dog.jpeg';

import carImg from '../..//images/car.jpeg';
import bikeImg from '../..//images/bike.jpeg';
import busImg from '../..//images/bus.jpeg';
import truckImg from '../..//images/truck.jpeg';
import bookImg from '../..//images/book.jpeg';  // Odd one out

import dogAnimalImg from '../..//images/dogAnimal.jpeg';
import catAnimalImg from '../..//images/catAnimal.jpeg';
import elephantImg from '../..//images/elephant.jpeg';
import lionImg from '../..//images/lion.jpeg';
import chairImg from '../..//images/chair.jpeg';  // Odd one out

import tableImg from '../..//images/table.png';
import chairItemImg from '../..//images/chairItem.jpeg';
import bedImg from '../..//images/bed.jpg';
import lampImg from '../..//images/lamp.png';
import airplaneImg from '../..//images/airplane.png';  // Odd one out

function OddManOutGame() {
    const categories = {
        fruits: [
            { name: "apple", image: appleImg },
            { name: "banana", image: bananaImg },
            { name: "cherry", image: cherryImg },
            { name: "grape", image: grapeImg },
            { name: "flower", image: flowerImg },  // Odd one out
        ],
        colors: [
            { name: "red", image: redImg },
            { name: "blue", image: blueImg },
            { name: "pink", image: pinkImg },
            { name: "yellow", image: yellowImg },
            { name: "dog", image: dogImg },  // Odd one out
        ],
        vehicles: [
            { name: "car", image: carImg },
            { name: "bike", image: bikeImg },
            { name: "bus", image: busImg },
            { name: "truck", image: truckImg },
            { name: "book", image: bookImg },  // Odd one out
        ],
        animals: [
            { name: "dog", image: dogAnimalImg },
            { name: "cat", image: catAnimalImg },
            { name: "elephant", image: elephantImg },
            { name: "lion", image: lionImg },
            { name: "chair", image: chairImg },  // Odd one out
        ],
        householdItems: [
            { name: "table", image: tableImg },
            { name: "chair", image: chairItemImg },
            { name: "bed", image: bedImg },
            { name: "lamp", image: lampImg },
            { name: "airplane", image: airplaneImg },  // Odd one out
        ],
    };

    const [category, setCategory] = useState("");
    const [items, setItems] = useState([]);
    const [selected, setSelected] = useState(null);
    const [result, setResult] = useState("");
    const [showAnswer, setShowAnswer] = useState(false);

    const startGame = () => {
        const categoriesArray = Object.entries(categories);
        const randomCategory = categoriesArray[Math.floor(Math.random() * categoriesArray.length)];
        const [categoryName, categoryItems] = randomCategory;

        const shuffledItems = [...categoryItems].sort(() => Math.random() - 0.5);

        setCategory(categoryName);
        setItems(shuffledItems);
        setSelected(null);
        setResult("");
        setShowAnswer(false);
    };

    const handleSelection = (item, index) => {
        setSelected(index);


        const oddOneOutName = items.find(i => i.name === "flower" || i.name === "dog" || i.name === "book" || i.name === "chair" || i.name === "airplane").name;

        if (item.name === oddOneOutName) {
            setResult("Correct! You found the odd one out.");
        } else {
            setResult("Oops! That's not the odd one out.");
        }
    };

    const revealAnswer = () => {
        setShowAnswer(true);
        const oddOneOut = items.find(i => i.name === "flower" || i.name === "dog" || i.name === "book" || i.name === "chair" || i.name === "airplane").name;
        setResult(`The odd one out is: ${oddOneOut}`);
    };

    return (



        <div className="container">
            <h1>Odd Man Out Game</h1>
            <button className="start-button" onClick={startGame}>
                Start Game
            </button>

            {category && (
                <div>
                    <h2>Category: {category.charAt(0).toUpperCase() + category.slice(1)}</h2>
                    <div className="item-container">
                        {items.map((item, index) => (
                            <img
                                key={index}
                                src={item.image}
                                alt={item.name}
                                className={`item-image ${selected === index ? "selected" : ""}`}
                                onClick={() => handleSelection(item, index)}
                            />
                        ))}
                    </div>
                    {result && <h3>{result}</h3>}

                    {!showAnswer && (
                        <button className="show-answer-button" onClick={revealAnswer}>
                            Show Answer
                        </button>
                    )}

                    {showAnswer && (
                        <button className="next-button" onClick={startGame}>
                            Next
                        </button>
                    )}
                </div>
            )}
        </div>
    );

}

export default OddManOutGame