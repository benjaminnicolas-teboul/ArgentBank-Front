import "./Banner.scss";
import BannerText from "../Text/Text";
import SubTitle from "../SubTitle/SubTitle";

const Banner = () => {
  return (
    <div className="hero">
      <section className="hero-content">
        <SubTitle className="sr-only" text="Promoted Content" />
        <BannerText className="subtitle" text="No fees." />
        <BannerText className="subtitle" text="No minimum deposit." />
        <BannerText className="subtitle" text="High interest rates." />
        <BannerText
          className="text"
          text="Open a savings account with Argent Bank today!"
        />
      </section>
    </div>
  );
};

export default Banner;
