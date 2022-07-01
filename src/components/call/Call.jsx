import styles from "./Call.module.scss";
import {motion} from "framer-motion";

const Call = () => {
    return (
        <a className={styles.link} href="tel:+7 702 201 12 21">
            <div

                className={styles.wrap}>
                <motion.i
                    animate={{
                        scale:1.05,
                    }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        repeatDelay:1,
                        repeatType: 'reverse',
                        ease: 'easeIn',
                        type: 'tween',

                    }}
                    className={`${styles.icon} fa fa-phone`}><span>Позвонить</span></motion.i>
            </div>
        </a>
    )
};


export default Call;