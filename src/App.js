import './App.css';
import {Characters} from "./components/Characters/Characters";
import {Simpsons} from "./components/Simpsons/Simpsons";

const App = () => {
    return (
        <div className={"Wrap"}>
            <div className={"Characters-cont"}><Characters/></div>
            <div className={"Simpsons-cont"}><Simpsons/></div>
        </div>
    );
};

export default App;
