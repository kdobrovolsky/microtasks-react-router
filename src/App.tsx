import { NavLink, Route, Routes} from "react-router-dom";
import {PageOne} from "./components/pages/PageOne";
import {PageThree} from "./components/pages/PageThree";
import {PageTwo} from "./components/pages/PageTwo";
import styles from "./components/Site.module.css";
import {Error404} from "./components/pages/Error404";
import './index.css'

const PATH = {
    PAGE1: '/page1',
    PAGE2: '/page2',
    PAGE3: '/page3',
    PAGE4: '/error404',
} as const

const getNavLinkClass = ({isActive}: { isActive: boolean }) =>
    isActive ? 'activeNavLink' : 'navLink';
export const App = () => {
    return (
        <div>

            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <div><NavLink to={PATH.PAGE1}>Page1</NavLink></div>
                    <div><NavLink to={PATH.PAGE2} className={getNavLinkClass}>Page2</NavLink></div>
                    <div><NavLink to={PATH.PAGE3} className={getNavLinkClass}>Page3</NavLink></div>
                </div>
                <div className={styles.content}>
                    Здесь будут кроссовки
                    <Routes>
                        <Route path={PATH.PAGE1} element={<PageOne/>}/>
                        <Route path={PATH.PAGE2} element={<PageTwo/>}/>
                        <Route path={PATH.PAGE3} element={<PageThree/>}/>
                        <Route path={PATH.PAGE4} element={<Error404/>}/>
                        <Route path={"/*"} element={<Error404/>}/>

                    </Routes>
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}
