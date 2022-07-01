import Offer from "./components/offer/Offer";
import Header from "./components/header/Header";
import "./styles/globals.scss";
import Order from "./components/order/Order";
import Requirement from "./components/requirement/Requirement";
import Tax from "./components/tax/Tax";
import Balance from "./components/balance/Balance";
import Promotion from "./components/promotion/Promotion";
import Join from "./components/join/Join";
import Call from "./components/call/Call";
import BurgerMenu from "./components/burgerMenu/BurgerMenu";
import {useState} from "react";


const App = () => {
    const typesArray = [
        'owner',
        'rent',
        'cargo',
        'courier'
    ];
    const [types, setTypes] = useState(typesArray[0]);
    const changeTypes = (value) => {
        setTypes(typesArray[value])
    };
    console.log(types)
    return (
        <div id="outer-container">
            <div className="burger-menu">
                <BurgerMenu changeTypes={changeTypes} pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
            </div>
            {/*<div id="page-wrap">*/}
                <Header changeTypes={changeTypes} types={types}/>
                <Order types={types}/>
                {
                    types === 'owner' && <Requirement/>
                }
                {
                    types === 'owner' && <Offer/>
                }
                {
                    types === 'owner' && <Tax/>
                }
                {
                    types === 'owner' && <Balance/>
                }
                {
                    types === 'owner' && <Promotion/>
                }


                <Join/>
                <Call/>
            {/*</div>*/}

        </div>
    )
};

export default App;