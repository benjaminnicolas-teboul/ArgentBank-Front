import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import './Sign-in.scss';
import LoginForm from "../../components/LoginForm/LoginForm";
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const SignIn = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const user = useSelector(state => state.auth.user);

  // Redirection immédiate si déjà connecté et profil chargé
  if (isAuthenticated && user) {
    return <Navigate to="/user" replace />;
  }

  return (
    <div>
      <Header />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <LoginForm />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SignIn;
