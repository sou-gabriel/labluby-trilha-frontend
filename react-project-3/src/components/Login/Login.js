import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
  useRef,
} from "react";
import AuthContext from "../../store/authContext";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

const emailReducer = (state, action) => {
  switch (action.type) {
    case "email_change":
      return { ...state, value: action.value };
    case "validate_email":
      return { ...state, isValid: state.value.includes("@") };
    default:
      return state;
  }
};

const passwordReducer = (state, action) => {
  switch (action.type) {
    case "password_change":
      return { ...state, value: action.value };
    case "validate_password":
      return { ...state, isValid: state.value.trim().length > 6 };
    default:
      return state;
  }
};

const Login = () => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailState, emailDispatch] = useReducer(emailReducer, {
    value: "",
    isValid: false,
  });
  const [passwordState, passwordDispatch] = useReducer(passwordReducer, {
    value: "",
    isValid: false,
  });
  const authContext = useContext(AuthContext);
  const emailInputRef = useRef()
  const passwordInputRef = useRef()

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    emailDispatch({ type: "email_change", value: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    passwordDispatch({ type: "password_change", value: event.target.value });
    setFormIsValid(emailState.isValid && passwordState.isValid);
  };

  const validateEmailHandler = () => {
    emailDispatch({ type: "validate_email" });
  };

  const validatePasswordHandler = () => {
    passwordDispatch({ type: "validate_password" });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (formIsValid) {
      authContext.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      emailInputRef.current.focus()
    } else {
      passwordInputRef.current.focus()
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          id="email"
          label="E-mail"
          type="email"
          isValid={emailIsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={passwordInputRef}
          id="password"
          label="Pasword"
          type="password"
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
