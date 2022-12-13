import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

const Registration = () => {
  const [formdata, setFormdata] = useState({});
  const [submitstatus, setsubmitstatus] = useState(false);
  const router = useRouter();
  const resetObj = {
    name: "",
    email: "",
    mobile: "",
    password: "",
  };
  const registerFn = async () => {
    const url = "http://localhost:3000/api/users/register";
    const response = await axios.post(url, formdata);
    console.log(response.data);
    if (response.status === 201) {
      setsubmitstatus(true);
      setFormdata(resetObj);
      router.push("/login");
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
        <h2 className="mb-3 mt-3">SignUp</h2>
        {submitstatus && (
          <div class="alert alert-success" role="alert">
            Form Submitted Successfully...
          </div>
        )}
        <div className="bg-light p-4 rounded mb-4 mt-4">
          <div className="form-outline mb-4">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              onChange={handleChange}
            />
          </div>

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
            <label className="form-label">Mobile Number</label>
            <input
              type="number"
              name="mobile"
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
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="form2Example31"
                />
                <label className="form-check-label" for="form2Example31">
                  {" "}
                  Remember me{" "}
                </label>
              </div>
            </div>

            <div className="col">
              <Link href="#!">Forgot password?</Link>
            </div>
          </div>

          <button
            type="button"
            className="btn btn-primary btn-block mx-auto d-block mb-4"
            onClick={registerFn}
          >
            Register
          </button>

          <div className="text-center">
            <p>
              Not a member? <Link href="login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
