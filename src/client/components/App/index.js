import Rover from "../Rover";
import { store } from "../../store";

const App = () => {
  return `
        <header></header>
        <main>
            <section>
                <h1>Tabs</h1>
                <div></div>
                ${Rover()}
            </section>
        </main>
        <footer></footer>
    `;
};

export default App;
