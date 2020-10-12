import Rover from "../Rover";
import Button from "../Button";
import styles from "./app.module.scss";

const App = () => {
  return `
        <header>Nasa Space!</header>
            <main>
                <div>
                    <div class=${styles.buttons}>
                        ${Button("Curiosity")}
                        ${Button("Opportunity")}
                        ${Button("Spirit")}        
                    </div>
                    ${Rover()}
                </div>
            </main>
        <footer></footer>
    `;
};

export default App;
