import styles from "./Offer.module.scss";
import icon1 from "./img/money.svg";
import icon2 from "./img/wallet.svg";
import icon3 from "./img/gas.svg";
import icon4 from "./img/percent.svg";
import icon5 from "./img/time.svg";
import icon6 from "./img/client.svg";
import {motion} from "framer-motion";



const Offer = () => {
    const textAnimation = {
        hidden:{
            x: -100,
            opacity:0
        },
        visible: custom =>({
            x: 0,
            opacity:1,
            transition:{
                delay: custom * 0.5,
                duration:0.5,
            }
        })
    };
    return (
        <div id="offer" className={styles.wrap}>
            <div className="container">
                <h3 className={styles.headline}>Центр по подключение водителей и парков </h3>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        amount:0.2,
                        once: true
                    }}
                    className={styles.content}
                >
                    <div className={styles.description}>
                        <div className={styles.row}>
                            <motion.div
                                className={styles.item}
                                variants={textAnimation}
                                custom={1}
                            >
                                <img src={icon1} className={styles.icon}/> <h5 className={styles.title}> Появится деньги с первой поездки после оформление</h5></motion.div>
                            <motion.div
                                className={styles.item}
                                variants={textAnimation}
                                custom={2}
                            >
                                <img src={icon2} className={styles.icon}/> <h5 className={styles.title}>Выплаты без задержек</h5></motion.div>
                        </div>
                        <div className={styles.row}>
                            <motion.div
                                className={styles.item}
                                variants={textAnimation}
                                custom={3}
                            >
                                <img src={icon3} className={styles.icon}/> <h5 className={styles.title}>Появится деньги с первой поездки после оформление</h5></motion.div>
                            <motion.div
                                className={styles.item}
                                variants={textAnimation}
                                custom={4}
                            >
                                <img src={icon4} className={styles.icon}/> <h5 className={styles.title}>Выплаты без задержек</h5></motion.div>
                        </div>
                        <div className={styles.row}>
                            <motion.div
                                className={styles.item}
                                variants={textAnimation}
                                custom={5}
                            >
                                <img src={icon5} className={styles.icon}/> <h5 className={styles.title}>Появится деньги с первой поездки после оформление</h5></motion.div>
                            <motion.div
                                className={styles.item}
                                variants={textAnimation}
                                custom={6}
                            >
                                <img src={icon6} className={styles.icon}/> <h5 className={styles.title}>Выплаты без задержек</h5></motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>

        </div>
    )
};


export default Offer;