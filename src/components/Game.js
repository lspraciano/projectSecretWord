/* CSS */
import './Game.css';

function Game({verifyLetter}) {
    return (
        <div className="game-container">

            <p className="game-container__points">
                <span className="points__value">
                    Pontuação: 000
                </span>
            </p>
            <h1 className="game-container__general-title">
                Adivinhe a Palavra
            </h1>
            <h3 className="game-container__message-title">
                Dica da Palavra:
                <span className="message-title__value">
                    Dica...
                </span>
            </h3>

            <div className="game-container__word-container">
                <span className="word-container__letter-value">
                    A
                </span>
                <span className="word-container__blank-square">

                </span>
            </div>

            <div className="game-container__letter-container">
                <p className="letter-container__message">
                </p>

                <form className="game-container__form">
                    <input className="form-letter" type="text" name="form-letter" maxLength="1" required />
                    <button>
                        Jogar!
                    </button>
                </form>
            </div>

            <div className="game-container__wrong-letters-container">
                <p className="wrong-letters-container__message">
                    Letras já Utilizadas:
                </p>
                <span className="wrong-letters-container__letter-value">
                    a,
                </span>
                <span className="wrong-letters-container__letter-value">
                    b,
                </span>

            </div>

        </div>
    );
}

export default Game;