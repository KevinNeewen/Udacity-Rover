import Rover from "../Rover";
import styles from "./app.module.scss";

const App = () => {
  return `
        <header>Nasa Space!</header>
            <main>
                <div class=${styles.app}>
                    <div></div>
                    ${Rover()}
                </div>
            </main>
        <footer></footer>
    `;
};

export default App;
