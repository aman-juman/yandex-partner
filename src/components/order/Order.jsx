import styles from "./Order.module.scss";
import Statement from "../statement/Statement";
import {motion} from "framer-motion";
import taxi from './taxi.jpg';
import cargo from './cargo.png';
import React, {useEffect, useState} from "react";
import cn from 'classnames';


const Order = ({types}) => {

    return (
        <>
            {types === 'owner' && <Owner/>}
            {types === 'rent' && <Rent/>}
            {types === 'cargo' && <Cargo/>}
            {types === 'courier' && <Courier/>}
        </>
    )
};


const Owner = () => {
    return (
        <div className={styles.wrap}>
            <div className="container">
                <motion.div
                    className={styles.content}
                    initial={{
                        y: "100px",
                        opacity: 0
                    }}
                    animate={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{
                        delay: 0.5,
                        duration: 1.5
                    }}
                >
                    <h3>НАЧНИ ЗАРАБАТЫВАТЬ
                        до <span>45 000 ₸</span> в день!</h3>
                    <h5>Станьте водителем Яндекс. Такси в Нурсултане</h5>
                    <a href="https://wa.me/87022011221?text=Я%20хочу%20Стать%20партнером%20">
                        <button className={styles.submit}>Оставить заявку
                        </button>
                    </a>
                    {/*<Statement theme={false}/>*/}
                </motion.div>
            </div>

        </div>
    )
};


const Rent = () => {
    return (
        <div className={styles.wrap}>
            <div className="container">
                <motion.div
                    className={styles.content}
                    initial={{
                        y: "100px",
                        opacity: 0
                    }}
                    animate={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{
                        delay: 0.5,
                        duration: 1.5
                    }}
                >
                    <h3>Аренда авто под
                        Яндекс GO</h3>
                    <h5>Станьте водителем Яндекс. Такси в Нурсултане</h5>
                    <a href="https://wa.me/87022011221?text=Я%20хочу%20Стать%20партнером%20">
                        <button className={styles.submit}>Оставить заявку
                        </button>
                    </a>
                </motion.div>
            </div>

        </div>
    )
};


const Cargo = () => {
    return (
        <div className={styles.wrap1}>
            <div className="container">
                <div className={styles.right}>
                    <motion.div
                        className={styles.content}
                        initial={{
                            y: "100px",
                            opacity: 0
                        }}
                        animate={{
                            y: 0,
                            opacity: 1
                        }}
                        transition={{
                            delay: 0.5,
                            duration: 1.5
                        }}
                    >
                        <h3>РЕГИСТРИРУЙСЯ!
                            ЗАКАЗЫ ЕСТЬ ВСЕГДА!</h3>
                        <h5>Станьте водителем Яндекс.Такси Грузовой в Нурсултане</h5>
                        <a href="https://wa.me/87022011221?text=Я%20хочу%20Стать%20партнером%20">
                            <button className={styles.submit}>Оставить заявку
                            </button>
                        </a>
                    </motion.div>
                </div>
            </div>

        </div>
    )
};


const Courier = () => {
    return (
        <div className={styles.wrap2}>
            <div className="container">
                <motion.div
                    className={styles.content}
                    initial={{
                        y: "100px",
                        opacity: 0
                    }}
                    animate={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{
                        delay: 0.5,
                        duration: 1.5
                    }}
                >
                    <h3>РАБОТАЙ КУРЬЕРОМ!
                        заработай от <span>850₸</span> за каждый заказ!*</h3>
                    <h5>*условия гарантии минимальной стоимости поездки
                        в период с 10:00 до 20:00, ежедневно</h5>
                    <a href="https://wa.me/87022011221?text=Я%20хочу%20Стать%20партнером%20">
                        <button className={styles.submit}>Оставить заявку
                        </button>
                    </a>
                </motion.div>
            </div>

        </div>
    )
};


export default Order;


// const Order = ({types}) => {
//
//     return (
//         <div className={styles.wrap}>
//             <div className="container">
//                 <motion.div
//                     className={styles.content}
//                     initial={{
//                         y: "100px",
//                         opacity: 0
//                     }}
//                     animate={{
//                         y: 0,
//                         opacity: 1
//                     }}
//                     transition={{
//                         delay: 0.7,
//                         duration: 1.5
//                     }}
//                 >
//                     {types === 'owner' && <>
//                         <h3>НАЧНИ ЗАРАБАТЫВАТЬ
//                             до <span>45 000 ₸</span> в день!</h3>
//                         <h5>Станьте водителем Яндекс. Такси в Нурсултане</h5>
//                     </>}
//                     {types === 'rent' && <>
//                         <h3>Аренда авто под
//                             Яндекс GO</h3>
//                         <h5>Станьте водителем Яндекс. Такси в Нурсултане</h5>
//                     </>}
//                     {types === 'cargo' && <>
//                         <h3>РЕГИСТРИРУЙСЯ!
//                             ЗАКАЗЫ ЕСТЬ ВСЕГДА!</h3>
//                         <h5>Станьте водителем Яндекс.Такси Грузовой в Нурсултане</h5>
//                     </>}
//                     {types === 'courier' && <>
//                         <h3>РАБОТАЙ КУРЬЕРОМ!
//                             заработай от <span>850₸</span> за каждый заказ!*</h3>
//                         <h5>*условия гарантии минимальной стоимости поездки
//                             в период с 10:00 до 20:00, ежедневно</h5>
//                     </>}
//                     {
//                         types === 'rent' ? <a href="https://wa.me/87022011221?text=Я%20хочу%20Стать%20партнером%20">
//                             <button className={styles.submit}>Оставить заявку
//                             </button>
//                         </a> : <Statement theme={false}/>
//                     }
//                 </motion.div>
//             </div>
//
//         </div>
//     )
// };