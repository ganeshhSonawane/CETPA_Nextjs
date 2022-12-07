import React from "react";
import style from '../styles/Login.module.css';
import Link from 'next/link';

const Head3 = () => {
    return (
        <div className="col-2">
            <ul className="navbar-nav sm-icons mr-0 d-block float-right text-end">
                <button type="button" className={style.login_btn}><Link href="/login">Login</Link></button>
            </ul>
        </div>
    )
}

export default Head3;