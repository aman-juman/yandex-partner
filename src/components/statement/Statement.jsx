import styles from "./Statement.module.scss";


const Statement = (props) => {
    const theme = props.theme;

    return (
        <form className={styles.form}>
            <label style={theme ? {color: "white"} : null} className={styles.column}>
                Имя
                <input style={theme ? {color: "white", background: "#696866"} : null} type="text"/>
            </label>
            <label style={theme ? {color: "white"} : null} className={styles.column}>
                Телефон *
                <input style={theme ? {color: "white", background: "#696866"} : null} type="phone"/>
            </label>
            <div className={styles.row}>
                <input style={theme ? {background: "white"} : null} type="checkbox"/>
                <p style={theme ? {color: "white"} : null}>Я принимаю условия Оферты (Публичный договор присоединения)
                    *</p>
            </div>
            <a href="https://wa.me/87022011221?text=Я%20хочу%20Стать%20партнером%20">
                <button style={theme ? {color: "white", background: "transparent", border: "2px solid white"} : null}
                        className={styles.submit}>Оставить заявку
                </button>
            </a>
        </form>
    )
};

export default Statement;