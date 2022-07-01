import styles from "./Promotion.module.scss";
import ZeroPercent from "./img/percent.png";
import GasPrize from "./img/gas.png";


const Promotion = () => {
    return (
        <div id="promotion" className={styles.wrap}>
            <div className="container">
                <h3 className={styles.headline}>Акция</h3>
                <div className={styles.content}>
                    <Zero/>
                    <Gas/>
                </div>
                <a href="https://wa.me/77022011221?text=Я%20хочу%20участвовать%20в%20акций%20">
                    <button className={styles.btn}>Участвовать</button>
                </a>
            </div>
        </div>
    )
};


const Zero = () => {
    return (
        <div className={styles.block}>
            <img className={styles.img} src={ZeroPercent} alt=""/>
            <h5 className={styles.title}>Первая неделя</h5>

        </div>
    )
};

const Gas = () => {
    return (
        <div className={styles.block}>
            <img className={styles.img} src={GasPrize} alt=""/>
            <h5 className={styles.title}>Розыгрыш каждую неделю</h5>
        </div>
    )
}


export default Promotion;