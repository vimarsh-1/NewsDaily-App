import React, { useState } from "react";
import "./LR.css";
import { TbUserHexagon } from "react-icons/tb";
import { FaUserLock } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { useFormik } from "formik";
import { signupSchema } from "../schemas";

    const initialValues = {
    UserName: "",
    Password: "",
    Email: "",
    };
    const LoginRegister = () => {
    const { values, handleBlur, handleChange, handleSubmit, errors, touched ,dirty,isValid} =
        useFormik({
        initialValues,
        validationSchema: signupSchema,
        onSubmit: (values, actions) => {
            console.log(values);
            actions.resetForm();
        },
        });
    console.log(touched);

    const [action, setAction] = useState("");

    const registerLink = () => {
        setAction(" active");
    };
    const loginLink = () => {
        setAction(" ");
    };
    //const [color , setcolor] = useState(true)

    return (
        <div className={`wrapper${action}`}>
        <div className="form-box login">
            <form action="" onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className="input-box">
                <input
                type="text"
                name="UserName"
                placeholder="UserName"
                value={values.UserName}
                onBlur={handleBlur}
                onChange={handleChange}
                required
                />
                <br />
                <TbUserHexagon className="icon" /> </div>
            <div className="error_container">
                {errors.UserName && touched.UserName && (
                <p className="form_error">{errors.UserName}</p>
                )}
            </div>
            <div className="input-box">
                <input
                type="email"
                name="Email"
                placeholder="Email"
                value={values.Email}
                onBlur={handleBlur}
                onChange={handleChange}
                required
                />
                <MdMarkEmailUnread className="icon" />
            </div>
            <div className="error_container">
                {errors.Email && touched.Email && (
                <p className="form_error">{errors.Email}</p>
                )}
            </div>
            <div className="input-box">
                <input
                type="Password"
                name="Password"
                placeholder="Password"
                value={values.Password}
                onBlur={handleBlur}
                onChange={handleChange}
                required
                />
                <br />
                <FaUserLock className="icon" />
            </div>
            <div className="error_container">
                {errors.Password && touched.Password && (
                <p className="form_error">{errors.Password}</p>
                )}
            </div>
            <br />

            <div className="remember-forgot">
                <label>
                <input type="checkbox" />
                Remember Me
                </label>
                <a href="#">Forgot Password</a>
            </div>
           
                <button type="submit" disabled={!isValid || !dirty}>
                Login
                </button>
            
            <div className="register-link">
                <p>
                don't have any account?
                <a href="#" onClick={registerLink}>
                    Register
                </a>
                </p>
            </div>
            </form>
        </div>

        <div className="form-box register">
            <form action="" onSubmit={handleSubmit}>
            <h1>Registration</h1>
            <div className="input-box">
                <input
                type="text"
                name="UserName"
                placeholder="UserName"
                value={values.UserName}
                onBlur={handleBlur}
                onChange={handleChange}
                required
                />
                <TbUserHexagon className="icon" />
            </div>

            <div className="error_container">
                {errors.UserName && touched.UserName && (
                <p className="form_error">{errors.UserName}</p>
                )}
            </div>
            <div className="input-box">
                <input
                type="email"
                name="Email"
                placeholder="Email"
                value={values.Email}
                onBlur={handleBlur}
                onChange={handleChange}
                required
                />
                <MdMarkEmailUnread className="icon" />
            </div>
            <div className="error_container">
                {errors.Email && touched.Email && (
                <p className="form_error">{errors.Email}</p>
                )}
            </div>
            <div className="input-box">
                <input
                type="Password"
                name="Password"
                placeholder="Password"
                value={values.Password}
                onBlur={handleBlur}
                onChange={handleChange}
                required
                />
                <br />
                <FaUserLock className="icon" />
            </div>
            <div className="error_container">
                {errors.Password && touched.Password && (
                <p className="form_error">{errors.Password}</p>
                )}
            </div>
            <br />
            <div className="remember-forgot">
                <label>
                <input type="checkbox"  required/>I agree to the Terms & Conditions
                </label>
            </div>
            <button type="submit" disabled={!isValid || !dirty}>Register</button>
            <div className="register-link">
                <p>
                Already have any account?
                <a href="#" onClick={loginLink}>
                    Login
                </a>
                </p>
            </div>
            </form>
        </div>
        </div>
  );
};

export default LoginRegister;
