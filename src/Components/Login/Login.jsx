import React from "react"
import s from './Login.module.css';
import Preloader from "../Common/Preloader";
import {useForm} from 'react-hook-form';

function Login (props) {
    return (
        <div className={s.login}>
            <h1>Login</h1>
            <div className={s.username}>
                {props.isAuth && `hello, ${props.login}!`}
            </div>
            <div>
                {props.isAuth
                    ? <button onClick={() => {props.logOutMe()}}>Log out</button>
                    : <LoginForm captchaUrl={props.captchaUrl} loginMe={props.loginMe}/>
                }
            </div>
            {props.isFetching && <Preloader/>}
        </div>
    );
}

const LoginForm = (props) => {
    const {register, handleSubmit, errors, setError} = useForm({
        mode: "onBlur"
    });

    const onSubmit = (data) => {
        if(props.captchaUrl === "") props.loginMe(data.email, data.password, data.rememberMe, (message) => {
            setError("button", {
                type: "manual",
                message: message
            });
        });
        else {
            props.loginMe(data.email, data.password, data.rememberMe, (message) => {
                setError("button", {
                    type: "manual",
                    message: message
                });
            }, data.captcha)
        }
    };

    return (
        <form className={s.loginForm} onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input aria-invalid={errors.email ? "true" : "false"} type="text" name="email" placeholder="email" ref={register({ required: true })}/>
                <span>
                    {errors.email && errors.email.type === "required" && "email is required. "}
                    {errors.email && <p>{errors.email.message}</p>}
                </span>
            </div>
            <div>
                <input aria-invalid={errors.password ? "true" : "false"} type="password" name="password" placeholder="password" ref={register({ required: true, maxLength: 20, minLength: 6 })}/>
                <span>
                    {errors.password && errors.password.type === "required" && "password is required. "}
                </span>
            </div>
            <div>
                <label htmlFor="rememberMe">remember me</label><input name="rememberMe" type="checkbox" ref={register}/>
            </div>
            {(props.captchaUrl !== "") &&
                    <div>
                        <img src={props.captchaUrl}/>
                    </div>
            }
            <div>
                <input className={(props.captchaUrl === "") && s.hidden} type="text" name="captcha" placeholder="enter captcha" ref={register({ required: (props.captchaUrl !== "")})}/>
            </div>
            <div>
                <div>
                    {errors.button && <span className={s.queryError}>{errors.button.message}</span>}
                </div>
                <button name="button" type="submit" ref={register}>Log in</button>
            </div>
        </form>
    );
}

export default Login;