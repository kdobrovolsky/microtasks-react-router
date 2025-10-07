import {Link, NavLink, Outlet, useNavigate} from "react-router-dom";
import styles from "./components/Site.module.css";
import './index.css'

const getNavLinkClass = ({isActive}: { isActive: boolean }) =>
    isActive ? 'activeNavLink' : 'navLink';

export const App = () => {
    const navigate = useNavigate();
    const navigateHandler = () => {
        navigate (-1)
    }
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <div><NavLink to="/adidas" className={getNavLinkClass}>Каталог adidas</NavLink></div>
                    <div><NavLink to="/puma" className={getNavLinkClass}>Каталог Puma</NavLink></div>
                    <div><NavLink to="/nike" className={getNavLinkClass}>Каталог Nike</NavLink></div>
                    <div><NavLink to="/prices" className={getNavLinkClass}>Каталог Prices</NavLink></div>
                    <div><NavLink to="/protectedPage" className={getNavLinkClass}>ProtectedPage</NavLink></div>
                </div>
                <div className={styles.content}>
                    <div className={styles.HorizontalNavigation}>
                        <NavLink to={'/adidas'} className={styles.LinkLikeButton}>Главная страница</NavLink>

                        <button onClick={navigateHandler} className={styles.LinkLikeButton}>Назад</button>
                    </div>

                    <Outlet/>
                </div>

            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}