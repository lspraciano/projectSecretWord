/* CSS */
import './GameOver.css';

function GameOver({retry, score}) {
    return (
        <div className="game-over-container">
            <h1 className="game-over-container__title">
                Fim de Jogo !
            </h1>
            <h2 className="game-over-container__general-message">
                A Sua Pontuação foi de:
                <span className="general-message__points-value">
                    {score}
                </span>
            </h2>
            <button className="game-over-container__button-retry" onClick={retry}>
                TENTAR NOVAMENTE
            </button>

        </div>
    );
}

export default GameOver;