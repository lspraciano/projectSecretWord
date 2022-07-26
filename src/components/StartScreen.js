import "./StartScreen.css";

const StartScreen = ({startGame}) => {
    return (
        <div className="start-screen-zone" onClick={startGame}>
            <button className="start-screen-zone__button">
                Clique Aqui para Começar o Jogo
            </button>
        </div>
    );
};

export default StartScreen