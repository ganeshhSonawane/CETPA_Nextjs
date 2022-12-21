import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

export const getStaticProps = () => {
  let url = process.env.BASE_URL;
  return {
    props: {
      baseurl: url,
    },
  };
};
const Login = (props) => {
  const [formdata, setFormdata] = useState({});
  const [submitstatus, setsubmitstatus] = useState(false);
  const router = useRouter();
  const { baseurl } = props;
  const loginFn = async () => {
    const url = baseurl + "api/users/login";
    try {
      const response = await axios.post(url, formdata);
      console.log(response.data);
      if (response.data.userid) {
        localStorage.setItem("loginstatus", true);
        localStorage.setItem("username", response.data.email);
        localStorage.setItem("name", response.data.name);
        router.push("/");
      }
    } catch {
      setsubmitstatus(true);
    }
  };
  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    let tempObj = {};
    tempObj[e.target.name] = e.target.value;
    setFormdata({ ...formdata, ...tempObj });
  };

  return (
    <div className="row justify-content-center align-items-center">
      <div className="col-sm-6">
        <h2 className="mb-3 mt-3">SignIn</h2>
        {submitstatus && (
          <div class="alert alert-danger" role="alert">
            Oops !!! Login Failed, Please try again...
          </div>
        )}
        <div className="bg-light p-4 rounded mb-4 mt-4">
          <div className="form-outline mb-4">
            <label className="form-label">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              onChange={handleChange}
            />
          </div>

          <div className="form-outline mb-4">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              onChange={handleChange}
            />
          </div>

          <div className="row mb-4">
            <div className="col d-flex justify-content-center">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" />
                <label className="form-check-label"> Remember me </label>
              </div>
            </div>

            <div className="col">
              <Link href="#!">Forgot password?</Link>
            </div>
          </div>

          <button
            type="button"
            className="btn btn-primary btn-block mx-auto d-block mb-4"
            onClick={loginFn}
          >
            Sign in
          </button>

          <div className="text-center">
            <p>
              Not a member? <Link href="registration">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
