import styles from "./Offer.module.scss";
import cn from "classnames";
import money from "./img/money.svg";

const Offer = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.content}>
              <div className={styles.titleWrap}>  <h2 className={`${styles.title} ${styles.red}`}>Ya</h2><h2 className={styles.title}>Office</h2></div>
                <Cities/>
                <Icons/>
                <Registration/>
            </div>

        </div>

    )
};


const Cities = () => {
    return (
        <div className={styles.list}>
            <button className={styles.listItem}>Алматы</button>
            <button className={styles.listItem}>Нур-Султан</button>
            <button className={styles.listItem}>Шымкент</button>
            <button className={styles.listItem}>Актобе</button>
        </div>
    )
};

const Icons = () => {
    return (
        <div className={styles.listIcons}>
            <div className={styles.iconWrapper}>
                <div><i className="fa fa-users" aria-hidden="true"></i></div>
                <div className={styles.cityTitle}>У нас на 30% больше заказов чем в любом другом таксопарке!</div>
            </div>
            <div className={styles.iconWrapper}>
               <div> <i className="fa fa-money" aria-hidden="true"></i></div>
                <div className={styles.cityTitle}>Минимальный заказ 250-400 тенге.</div>
            </div>
            <div className={styles.iconWrapper}>
                <div><i className="fa fa-phone" aria-hidden="true"></i></div>
                <div className={styles.cityTitle}>Техподдержка водителя 24/7.</div>
            </div>
            <div className={styles.iconWrapper}>
                <div><i className="fa fa-thumbs-up"></i></div>
                <div className={styles.cityTitle}>Ежедневные выплаты.</div>
                <img style={{border: "2px solid red", borderRadius: "50%", padding: "10px", backgroundColor: 'white'}} src={money} alt=""/>
            </div>
        </div>
    )
};

const Registration = () => {
    return (
        <button className={styles.register}>
            Регистрация
        </button>
    )
}


export default Offer;