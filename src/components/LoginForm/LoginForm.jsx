import { useState,useEffect  } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.scss'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser,fetchUserProfile } from '../../slices/AuthSlice';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

   const dispatch = useDispatch();
  const navigate = useNavigate()
  const { loading, error, isAuthenticated } = useSelector(state => state.auth);
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchUserProfile());
      navigate('/user');
    }
  }, [isAuthenticated, dispatch, navigate]);
   const handleSubmit = async (e) => {
    e.preventDefault();
    // Dispatch du thunk loginUser
    try {
      await dispatch(loginUser({ email, password })).unwrap();
      // Optionnel : va chercher le profil utilisateur après connexion
      await dispatch(fetchUserProfile()).unwrap();
      // Redirection vers /user si login réussi
      navigate('/user');
    } catch (err) {
      // L'erreur est déjà gérée dans le store, tu peux éventuellement afficher un toast ici
    }
  };
 return (
  <form onSubmit={handleSubmit}>
    <div className="input-wrapper">
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
    </div>
    <div className="input-wrapper">
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
    </div>
    <div className="input-remember">
      <input
        type="checkbox"
        id="remember-me"
        checked={rememberMe}
        onChange={e => setRememberMe(e.target.checked)}
      />
      <label htmlFor="remember-me">Remember me</label>
    </div>
    <button className="sign-in-button" type="submit" disabled={loading}>
      {loading ? 'Connexion...' : 'Sign In'}
    </button>
    {error && <div className="error-message">{error}</div>}
  </form>
);

};

export default LoginForm;
