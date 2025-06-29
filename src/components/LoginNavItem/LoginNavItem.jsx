import { Link } from 'react-router-dom';
import './LoginNavItem.scss';

function LoginNavItem() {
  return (
    <div>
      <Link className="main-nav-item" to="/Signin">
        <i className="fa fa-user-circle"></i>
        Sign In
      </Link>
    </div>
  );
}

export default LoginNavItem;
