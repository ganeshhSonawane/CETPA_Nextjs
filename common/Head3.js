import React from "react";
import style from "../styles/Login.module.css";
import Link from "next/link";

const Head3 = () => {
  return (
    <div className="col-2">
      <button type="button" className={style.login_btn}>
        <Link href="/login">Login</Link>
      </button>
    </div>
  );
};

export default Head3;
