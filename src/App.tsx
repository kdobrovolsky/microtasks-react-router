import {NavLink, Outlet} from "react-router-dom";
import styles from "./components/Site.module.css";
import './index.css'

const getNavLinkClass = ({isActive}: { isActive: boolean }) =>
    isActive ? 'activeNavLink' : 'navLink';

export const App = () => {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <div><NavLink to="/adidas">Каталог adidas</NavLink></div>
                    <div><NavLink to="/puma" className={getNavLinkClass}>Каталог Puma</NavLink></div>
                    <div><NavLink to="/nike" className={getNavLinkClass}>Каталог Nike</NavLink></div>
                    <div><NavLink to="/prices" className={getNavLinkClass}>Каталог Prices</NavLink></div>
                    <div><NavLink to="/protectedPage" className={getNavLinkClass}>ProtectedPage</NavLink></div>
                </div>
                <div className={styles.content}>
                    <Outlet/> {/* Здесь будут рендериться дочерние компоненты */}
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}