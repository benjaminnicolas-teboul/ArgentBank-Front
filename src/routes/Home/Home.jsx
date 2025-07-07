import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/banner";
import FeatureItem from "../../components/FeatureItem/FeatureItem";
import "./Home.scss";
import iconChat from "../../assets/icon-chat.webp";
import iconMoney from "../../assets/icon-money.webp";
import iconSecurity from "../../assets/icon-security.webp";
import Footer from "../../components/Footer/Footer";
import FullWidthDivider from "../../components/FullWidthDivider/FullWidthDivider";
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Home = () => {
 const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  // Redirection immédiate si déjà connecté
  if (isAuthenticated) {
    return <Navigate to="/user" replace />;
  }
  return (
    <div>
      <Header />
      <Banner />
      <section className="features">
        <FeatureItem
          image={iconChat}
          alt="Chat Icon"
          title="You are our #1 priority"
          text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        />
         <FeatureItem
          image={iconMoney}
          alt="Chat Icon"
          title="More savings means higher rates"
          text="The more you save with us, the higher your interest rate will be! ."
        />
         <FeatureItem
          image={iconSecurity}
          alt="Chat Icon"
          title="Security you can trust"
          text="We use top of the line encryption to make sure your data and money is always safe."
        />
      </section>
      <FullWidthDivider/>
      <Footer/>
    </div>
  );
};

export default Home;
