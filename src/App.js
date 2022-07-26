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

const guessesQty = 3;

function App() {
    const [words] = useState(wordsList);
    const [gameStages, setGameStage] = useState(stages[0].name);

    const [pickedWord, setPickedWord] = useState("");
    const [pickedCategory, setPickedCategory] = useState("");
    const [letters, setLetters] = useState([]);

    const [guessedLetters, setGuessedLetters] = useState([]);
    const [wrongLetters, setWrongLetters] = useState([]);
    const [guesses, setGuesses] = useState(guessesQty);
    const [score, setScore] = useState(0);

    const pickWordAndCategory = useCallback(() => {
        // pick a random category
        const categories = Object.keys(words);
        const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

        // pick a random word
        const word = words[category][Math.floor(Math.random() * words[category].length)];

        return {category, word};
    }, [words]);


    // Start Game Function
    const startGame = useCallback(() => {
        // Clear All Letters
        clearLettersStates();

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
    }, [pickWordAndCategory]);

    // Process the Letter Inputed
    const verifyLetter = (letter) => {
        const normalizedLetter = letter.toLowerCase();
        if (
            guessedLetters.includes(normalizedLetter) ||
            wrongLetters.includes(normalizedLetter)
        ) {
            return;
        }

        if (letters.includes(normalizedLetter)) {
            setGuessedLetters((actualGuessedLetters) => [
                ...actualGuessedLetters,
                letter,
            ]);
        } else {
            setWrongLetters((actualWrongLetters) => [
                ...actualWrongLetters,
                normalizedLetter,
            ]);
            setGuesses((actualGuesses) => actualGuesses - 1);
        }

    };

    const clearLettersStates = () => {
        setGuessedLetters([]);
        setWrongLetters([]);
    };

    useEffect(() => {
        if (guesses <= 0) {
            clearLettersStates();
            setGameStage(stages[2].name);
        }
    }, [guesses]);

    useEffect(() => {
        const uniqueLetters = [...new Set(letters)];

        // win condition
        if (guessedLetters.length === uniqueLetters.length && gameStages === stages[1].name) {
            // add score
            setScore((actualScore) => (actualScore += 100));

            // reset Guesses
            setGuesses(guessesQty);

            // restart game with new word
            startGame();
        }
    }, [guessedLetters, letters, startGame, gameStages]);

    // Restart the Game
    const retry = () => {
        setScore(0);
        setGuesses(guessesQty);
        setGameStage(stages[0].name);
    }

    return (
        <div className="App">
            {gameStages === "start" && <StartScreen startGame={startGame}/>}
            {gameStages === "game" &&
                <Game verifyLetter={verifyLetter}
                      pickedWord={pickedWord}
                      pickedCategory={pickedCategory}
                      letters={letters}
                      guessedLetters={guessedLetters}
                      wrongLetters={wrongLetters}
                      guesses={guesses}
                      score={score}
                />}
            {gameStages === "end" && <GameOver retry={retry} score={score}/>}
        </div>
    );
}

export default App;
