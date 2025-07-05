import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import './Sign-in.scss';
import LoginForm from "../../components/LoginForm/LoginForm";

const SignIn = () => (
  <div>
    <Header/>
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <LoginForm/>
    </section>
    </main>
    <Footer/>
  </div>
);

export default SignIn;