import styles from "./Requirement.module.scss";


const Requirement = () => {
    return (
        <div className="background">
            <div className="container">
                <div className={styles.wrap}>
                    <h3 className={styles.title}>Требования к автомобилю:</h3>
                    <a href="https://pro.yandex.com/kz-ru/nur-sultan/knowledge-base/taxi/tariffs/auto-list"><button className={styles.button}>по городу Нурсултан</button></a>
                </div>
            </div>
        </div>
    )
};


export default Requirement;