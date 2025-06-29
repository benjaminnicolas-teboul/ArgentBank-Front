import './FeatureItem.scss';


const FeatureItem = ({ image, alt, title, text }) => (
  <div className="feature-item">
    <img src={image} alt={alt} className="feature-icon" />
    <h3 className="feature-item-title">{title}</h3>
    <p className="feature-text">{text}</p>
  </div>
);

export default FeatureItem;


