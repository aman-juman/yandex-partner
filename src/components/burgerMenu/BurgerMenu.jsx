import React from "react";
import { push as Menu } from "react-burger-menu";
import './BurgerMenu.css';
export default props => {
    return (
        // Pass on our props
        <Menu {...props}>
            <a onClick={()=> props.changeTypes(0)} className="menu-item" >
                Главная
            </a>
            <a className="menu-item" href="#tax">
                Комиссия
            </a>

            <a className="menu-item" href="#offer">
                Работа
            </a>

            <a className="menu-item" href="#promotion">
                Акция
            </a>
        </Menu>
    );
};






















// import React from "react";
// import { slide as Menu } from "react-burger-menu";
// import './BurgerMenu.css';
//
// export default props => {
//     return (
//         <Menu {...props}>
//             <a className="menu-item" href="#tax">
//                 Комиссия
//             </a>
//             <a className="menu-item" href="#offer">
//                 Работа
//             </a>
//             <a className="menu-item" href="#promotion">
//                 Акция
//             </a>
//         </Menu>
//     );
// };
