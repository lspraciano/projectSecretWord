/* React */
import { useState, useRef } from "react";

/* CSS */
import './Game.css';

const Game = ({verifyLetter, pickedWord, pickedCategory, letters, guessedLetters, guesses, wrongLetters, score}) => {
    const [letter, setLetter] = useState("");
    const letterInputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (/^[a-z]/i.test(letter.normalize('NFD').replace(/[\u0300-\u036f]/g, ""))) {
            verifyLetter(letter);
            setLetter("");
            letterInputRef.current.focus();

        } else {
            setLetter("");
            letterInputRef.current.focus();
            alert("Apenas letras são aceitas com valor válido");
        }

    };

    return (
        <div className="game-container">

            <p className="game-container__points">
                <span className="points__value">
                    Pontuação: {score}
                </span>
            </p>
            <h1 className="game-container__general-title">
                Adivinhe a Palavra
            </h1>
            <h3 className="game-container__message-title">
                Dica da Palavra:
                <span className="message-title__value">
                    {pickedCategory}
                </span>
            </h3>

            <div className="game-container__word-container">
                {letters.map((letter, index) =>
                    guessedLetters.includes(letter) ? (
                        <span className="word-container__letter-value" key={index}>
                        {letter}
                        </span>
                    ) : (
                        <span key={index} className="word-container__blank-square">
                        </span>
                    )
                )}
            </div>

            <div className="game-container__letter-container">
                <p className="letter-container__message">
                    Você possui {guesses} tentativa(s), escolha uma letra
                </p>
                <form className="game-container__form" onSubmit={handleSubmit}>
                    <input className="form__letter" type="text" name="form-form__letter" maxLength="1" required
                           onChange={(e) => setLetter(e.target.value)}
                           value={letter}
                           ref={letterInputRef}
                    />
                    <button className="form__button-test-letter">
                        ENVIAR
                    </button>
                </form>
            </div>

            <div className="game-container__wrong-letters-container">
                <p className="wrong-letters-container__message">
                    Letras já Utilizadas:
                </p>
                {wrongLetters.map((letter, index) => (
                    <span className="wrong-letters-container__letter-value" key={index}>{letter},
                    </span>
                ))}
            </div>

        </div>
    );
}

export default Game;