import React from "react";
import "./Login.css";
import arrow from "../../../assets/icons/arraw.svg";
import { BiHide, BiShow } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import line from "../../../assets/icons/line.svg";
import { Link } from "react-router-dom";
function Login() {
  const [showIcon, setShowIcon] = React.useState(<BiHide />);

  const [show, setShow] = React.useState(false);
  const toggleShow = () => {
    if (show) {
      setShowIcon(<BiHide />);
    } else {
      setShowIcon(<BiShow />);
    }
    setShow(!show);
  };

  return (
    <div className="login-page">
      <div className="login-top">
        <div className="topcontent">
          <h2>Welcome to the Family </h2>
          <p>
            we provide a shared, easily-accessible virtual space where family
            members and friends can pay homage to a special life while helping
            each other heal by sharing their feelings, warm memories, and words
            of support.
          </p>
        </div>
      </div>

      <div className="login-card">
        <div className="firstLine">
          <h2>Login</h2>
          <div className="singp">
            <p>Create your account</p>

            <span>
              <b>
                <Link to="/signup">Sign up</Link>
              </b>{" "}
              <img src={arrow} width={30} />
            </span>
          </div>
        </div>

        <div className="loginsingle-line">
          <div className="loginsingle-input">
            <p>Email</p>
            <input type="email" />
          </div>
          <div className="loginsingle-input">
            <p>Password</p>
            <input type={show ? "text" : "password"} />
            <span className="icons" onClick={toggleShow}>
              {showIcon}
            </span>
          </div>

          <div className="rember">
            <div>
              <input
                type="radio"
                id="remember-me"
                name="remember"
                value="yes"
              />
              <label for="remember-me" className="remberme">
                Remember Me
              </label>
            </div>
            <p>forgot password?</p>
          </div>
        </div>

        <button className="login">Login</button>

        <div className="ordivire">
          <img src={line} /> or <img src={line} />{" "}
        </div>
        <button className="goolge">
          <FcGoogle style={{ marginRight: "10px" }} />
          Continue with google
        </button>
      </div>
      <div className="Lbottom"></div>
    </div>
  );
}

export default Login;
