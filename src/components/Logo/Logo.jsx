import './Logo.scss';
import argentBankLogo from '../../assets/argentBankLogo.webp';


const Logo = ({ className }) => {
  return (
    <div  className={className }>
      <img
        className="main-nav-logo-image"
        src={argentBankLogo}
        alt="Argent Bank Logo"
      />
      <h1 className="sr-only">Argent Bank</h1>
    </div>
  );
};

export default Logo;
