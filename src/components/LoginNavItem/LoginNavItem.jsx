import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../slices/UserSlice'; 
import './LoginNavItem.scss';

function LoginNavItem() {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector(state => state.auth);

  const handleLogout =  () => {
     dispatch(logout());
  };

  if (isAuthenticated && user) {
    return (
      <div className="main-nav-item user-info">
        <i className="fa fa-user-circle"></i>
        <span>
          {user.firstName} {user.lastName}
        </span>
        <button
          className="logout-btn"
          onClick={handleLogout}
          style={{
            background: 'none',
            border: 'none',
            color: 'inherit',
            cursor: 'pointer',
            marginLeft: '1rem'
          }}
        >
          <i className="fa fa-sign-out"></i>
          Logout
        </button>
      </div>
    );
  }

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
