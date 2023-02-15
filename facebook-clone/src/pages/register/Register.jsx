import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Stay Tuned</h1>
          <p>If your register is done. Please click on login.</p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <Link to="/login">
              <button>Login</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
