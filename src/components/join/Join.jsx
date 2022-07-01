import styles from "./Join.module.scss";


const Join = () => {
    return (
        <div className={styles.wrap}>
            <div className="container">
                <div className={styles.content}>
                    <h3 className={styles.headline}>
                        Как начать зарабатывать уже через
                        <span>10 минут</span>
                        ?
                    </h3>
                    <div className={styles.row}>
                        <div className={styles.point}>
                            <div className={styles.number}>1</div>
                            <h5 className={styles.title}>Оставить заявку</h5>
                        </div>
                        <div className={styles.point}>
                            <div className={styles.number}>2</div>
                            <h5 className={styles.title}>Получить консультацию</h5>
                        </div>
                        <div className={styles.point}>
                            <div className={styles.number}>3</div>
                            <h5 className={styles.title}>Отправить документы</h5>
                        </div>
                        <div className={styles.point}>
                            <div className={styles.number}>4</div>
                            <h5 className={styles.title}>Приступить к работе</h5>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
};


export default Join;