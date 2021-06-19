import React from 'react';
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = (props) => {
    return (
        <header className="App-header">
            <div className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="navbar-brand mb-0 h1">
                        <svg viewBox="0 0 57.376 57.376" width="30px" height="30px">
                            <path d="M28.689,0C12.87,0,0,12.869,0,28.688c0,15.818,12.87,28.688,28.689,28.688
              c15.817,0,28.686-12.869,28.686-28.688S44.507,0,28.689,0z M28.689,54.375c-14.165,0-25.689-11.523-25.689-25.688
              c0-14.164,11.524-25.688,25.689-25.688c14.163,0,25.686,11.523,25.686,25.688C54.375,42.852,42.853,54.375,28.689,54.375z"/>
                            <path d="M31.341,14.779c-0.221-0.506-0.848-0.916-1.399-0.916h-2.575c-0.553,0-1.178,0.41-1.396,0.918
              L15.912,38.053c-0.219,0.506,0.051,0.918,0.604,0.918h4.099c0.553,0,1.164-0.418,1.366-0.932l1.36-3.459
              c0.202-0.514,0.813-0.93,1.366-0.93h7.751c0.554,0,1.17,0.414,1.377,0.926l1.41,3.467c0.207,0.512,0.824,0.928,1.377,0.928h4.24
              c0.553,0,0.821-0.41,0.602-0.918L31.341,14.779z M30.579,28.971h-4.135c-0.553,0-0.837-0.418-0.636-0.932l2.321-5.939
              c0.201-0.516,0.529-0.516,0.733-0.002l2.35,5.943C31.413,28.555,31.132,28.971,30.579,28.971z"/>
                        </svg>
                    </div>

                    {props.isAuth ? <div className={s.loginBlock}><img src="#" /><span>UserName</span></div> : <NavLink to="/login" >Войти</NavLink>}
                </div>
            </div>
        </header>
    );
}

export { Header };