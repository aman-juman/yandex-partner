import styles from "./Tax.module.scss";
import Slider from "../slider/Slider";


const Tax = () => {
    return (
        <div id="tax" className={styles.wrap}>
            <div className="container">
                <h3 className={styles.title}>Комиссия за заказ</h3>
                <div className={styles.content}>
                    <div className={styles.taxWrap}>
                        <div className={styles.tax}>
                            <a className={styles.button} href="https://wa.me/77022011221?text=Я%20хочу%20Стать%20партнером%20">
                                <div >Стать нашим партнером</div>
                            </a>
                        </div>
                    </div>
                    <div className={styles.slider}>
                        <Slider/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Tax;