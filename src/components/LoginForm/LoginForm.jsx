import { useState } from 'react';
import './LoginForm.scss'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser,fetchUserProfile } from '../../slices/UserSlice';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
   const [errorMessage, setErrorMessage] = useState(""); 
   const dispatch = useDispatch();
  const { loading, profileError } = useSelector(state => state.auth);


   const handleSubmit = async (e) => {
    e.preventDefault();
    // Dispatch du thunk loginUser
    try {
      setErrorMessage("");
      await dispatch(loginUser({ email, password })).unwrap();
    } catch (err) {
      setErrorMessage(err?.message || "Erreur lors de la connexion");
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
    {errorMessage  && <div className="error-message">{errorMessage}</div>}
    {profileError && (<div className="error-message">  {profileError}
      <button type="button" onClick={() => dispatch(fetchUserProfile())}></button></div>)}
  </form>
);

};

export default LoginForm;
