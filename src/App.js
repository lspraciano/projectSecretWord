/* Import React */
import {useCallback, useEffect, useState} from "react";


/* Import Components */
import StartScreen from './components/StartScreen.js';
import Game from "./components/Game.js";
import GameOver from "./components/GameOver.js";

/* Import CSS */
import './App.css';


/* Import Data */
import {wordsList} from "./data/words.js";

const stages = [
    {id: 1, name: "start"},
    {id: 2, name: "game"},
    {id: 3, name: "end"},
];

function App() {
    const [words] = useState(wordsList);
    const [gameStages, setGameStage] = useState(stages[0].name);

    const [pickedWord, setPickedWord] = useState("");
    const [pickedCategory, setPickedCategory] = useState("");
    const [letters, setLetters] = useState([]);

    const pickWordAndCategory = () => {
        // pick a random category
        const categories = Object.keys(words);
        const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

        // pick a random word
        const word = words[category][Math.floor(Math.random() * words[category].length)];

        return {category, word};
    };


    // Start Game Function
    const startGame = () => {
        // choose a category and word
        const {category, word} = pickWordAndCategory();

        // Letters in Word
        let wordLetters = word.split("");
        wordLetters = wordLetters.map((l) => l.toLowerCase());

        // Setting useState
        setPickedCategory(category);
        setPickedWord(word);
        setLetters(wordLetters);
        setGameStage(stages[1].name


        );
    };

    // Process the Letter Inputed
    const verifyLetter = () => {
        setGameStage(stages[2].name);
    }

    // Restart the Game
    const retry = () => {
        setGameStage(stages[0].name);
    }

    return (
        <div className="App">
            {gameStages === "start" && <StartScreen startGame={startGame}/>}
            {gameStages === "game" && <Game verifyLetter={verifyLetter}/>}
            {gameStages === "end" && <GameOver retry={retry}/>}
        </div>
    );
}

export default App;
