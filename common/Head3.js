import React from "react";
import style from "../styles/login.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Head3 = () => {
  const router = useRouter();
  const logoutFn = () => {
    localStorage.removeItem("loginstatus");
    localStorage.removeItem("username");
    localStorage.removeItem("name");
  };
  return (
    <div className="col-2">
      <button type="button" className={style.login_btn}>
        <Link href="/login">Login</Link>
      </button>
      <button type="button" className={style.login_btn} onClick={logoutFn}>
        Logout
      </button>
    </div>
  );
};

export default Head3;
