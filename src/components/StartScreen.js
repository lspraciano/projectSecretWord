import "./StartScreen.css";

const StartScreen = ({startGame}) => {
    return (
        <div className="start-screen-zone">
            <button className="start-screen-zone__button"  onClick={startGame}>
                Clique Aqui para Começar o Jogo
            </button>
        </div>
    );
};

export default StartScreen