import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { PageOne } from "./components/pages/PageOne";
import { PageThree } from "./components/pages/PageThree";
import { PageTwo } from "./components/pages/PageTwo";
import styles from "./components/Site.module.css";
import { Error404 } from "./components/pages/Error404";
import './index.css'
import styled from "styled-components";

export const App = ()=> {
  return (
    <div>
      <div className={styles.header}><h1>HEADER</h1></div>
      <div className={styles.body}>
        <div className={styles.nav}>
          <div><NavLink to={'/page1'} className={({isActive}) => isActive ? 'activeNavLink': 'navLink'} >Page1</NavLink> </div>
          <div><NavLink to={'/page2'} className={({isActive}) => isActive ? 'activeNavLink': 'navLink'}>Page2</NavLink></div>
          <div><NavLink to={'/page3'} className={({isActive}) => isActive ? 'activeNavLink': 'navLink'}>Page3</NavLink></div>
         </div>
        <div className={styles.content}>
          Здесь будут кроссовки
          <Routes>
            <Route path="/page1" element={<PageOne/>} />
            <Route path="/page2" element={<PageTwo/>}/>
            <Route path="/page3" element={<PageThree/>}/>
            <Route path="/error404" element={<Error404/>}/>

            <Route path="*" element={<Navigate to={'/error404'}/>}/>
            <Route path="/" element={<Navigate to={'/page1'}/>}/>
          </Routes>
        </div>
      </div>
      <div className={styles.footer}>abibas 2023</div>
    </div>
  );
}

const NavWrapper=styled.div`
    margin-left: 10px;
    font-size: 20px;
    &>a{
        text-decoration: none;
        color: #1e3786;
    }
    &>a.active{
        text-decoration: none;
        color: #03eaff;
    }
    &>a:hover{
        color: steelblue;
    }
`