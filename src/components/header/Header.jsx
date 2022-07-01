import styles from "./Header.module.scss";
import img1 from "./auto.png";
import img2 from "./taxi.png";
import img3 from "./freight.png";
import img4 from "./courier.png";
import Call from "../call/Call";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import { motion } from "framer-motion";


const Header = ({types, changeTypes}) => {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.content}>
                    <a href="/"> <div className={styles.logo}>Ya <span>Office</span></div></a>
                    <Nav/>
                    <Socials/>
                </div>
            </div>
            <Types changeTypes={changeTypes} />

        </header>
    )
};


const Nav = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                {/*<li className={styles.navItem}>О нас</li>*/}
                <a href="#tax"><li className={styles.navItem}>Комиссия</li></a>
                <a href="#offer"><li className={styles.navItem}>Работа</li></a>
                <a href="#promotion"><li className={styles.navItem}>Акция</li></a>
            </ul>
        </nav>
    )
};

export const Socials = () => {
    const list = [
        "whatsapp",
        "telegram",
        "instagram",
        "facebook"
    ];
    const listVariants = {
        visible: i=>({
            opacity:1,
            x:0,
            transition:{
                delay: i*0.4,
                duration: 0.5
            }
        }),
        hidden: {
            opacity: 0,
            x:"100vw"
        }
    };
    return (
        <div className={styles.socials}>
            <div className={styles.socialList}>
                {
                    list.map((el, i)=>(
                        <motion.a
                            key={i}
                            animate='visible'
                            initial='hidden'
                            variants={listVariants}
                            custom={i}
                            href="https://wa.me/77022011221?text=Я%20хочу%20Стать%20партнером%20"
                        >
                            <div className={styles.socialWrap}><i className={`fa fa-${el}`}></i></div>
                        </motion.a>
                    ))
                }
            </div>
        </div>
    )
};

const Types = ({changeTypes}) =>{
    const listVariants = {
        visible: i=>({
            opacity:1,
            x:0,
            transition:{
                delay: i*0.4,
                duration: 0.5
            }
        }),
        hidden: {
            opacity: 0,
            x:"-100px"
        }
    };
    const list =[
        img1,
        img2,
        img3,
        img4
    ];
    return(
        <div className={styles.types}>
            {
                list.map((el, i)=>(
                    <motion.div
                        key={i}
                        animate='visible'
                        initial='hidden'
                        variants={listVariants}
                        custom={i}
                        onClick={() => changeTypes(i)}
                    >
                        <img src={el} alt=""/>
                    </motion.div>
                ))
            }
        </div>
    )
};




export default Header;