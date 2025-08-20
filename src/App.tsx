import { NavLink, Route, Routes} from "react-router-dom";
import styles from "./components/Site.module.css";
import {Error404} from "./components/pages/Error404";
import './index.css'
import {Adidas} from "./components/pages/Adidas.tsx";
import {Puma} from "./components/pages/Puma.tsx";
import {Nike} from "./components/pages/Nike.tsx";
import {Model} from "./components/pages/Model.tsx";

const PATH = {
    PAGE0: '/',
    PAGE1: '/adidas',
    PAGE2: '/puma',
    PAGE3: '/nike',
    PAGE4: '/error404',
    PAGE5: '/adidas/:id',
    PAGE6: '/nike/:id',
} as const

const getNavLinkClass = ({isActive}: { isActive: boolean }) =>
    isActive ? 'activeNavLink' : 'navLink';

export const App = () => {
    return (
        <div>

            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>

                    <div><NavLink to={PATH.PAGE1}>Каталог adidas</NavLink></div>
                    <div><NavLink to={PATH.PAGE2} className={getNavLinkClass}>Каталог Puma</NavLink></div>
                    <div><NavLink to={PATH.PAGE3} className={getNavLinkClass}>Каталог Nike</NavLink></div>
                </div>
                <div className={styles.content}>
                    Здесь будут кроссовки
                    <Routes>
                        <Route path={PATH.PAGE0} element={<Adidas/>}/>
                        <Route path={PATH.PAGE1} element={<Adidas/>}/>
                        <Route path={PATH.PAGE2} element={<Puma/>}/>
                        <Route path={PATH.PAGE3} element={<Nike/>}/>
                        {/* Сначала специфичные маршруты */}
                        <Route path={PATH.PAGE5} element={<Model/>} />
                        <Route path={PATH.PAGE6} element={<Model/>} />
                        {/* Затем общие */}
                        <Route path={PATH.PAGE4} element={<Error404/>}/>
                        <Route path="/*" element={<Error404/>}/>
                    </Routes>
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}
