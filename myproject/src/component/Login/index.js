import styles from "./styles.module.css";
import { useState } from "react";
const Login = () => {
  const [isBlack, setIsBlack] = useState(false);

  const toggleColor = () => {
    setIsBlack((prevIsBlack) => !prevIsBlack);
  };

  const bodyStyle = {
    backgroundColor: isBlack ? "black" : "#ebe8e8",
    color: isBlack ? "black" : "blue",

    height: "100vh", // Ensure the color covers the entire screen
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div className={styles.login_container} style={bodyStyle}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <form className={styles.form_container}>
            <h1>Login to Your Account</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              required
              className={styles.input}
            />

            <button type="submit" className={styles.green_btn}>
              Sing In
            </button>
          </form>
        </div>
        <div className={styles.right}>
          <button className={styles.white_btn} onClick={toggleColor}>
            Toggle Color
          </button>

          <h1>New Here ?</h1>

          <button type="button" className={styles.white_btn}>
            Sing Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
