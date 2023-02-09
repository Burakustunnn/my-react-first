import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h2> copyright by Premier League, {new Date().getFullYear()}</h2>
      <p>
        <a href="https://github.com/Burakustunnn">GİTHUP</a>
      </p>
      <p>
        <a href="https://www.linkedin.com/in/burakustunnn/">LİNKEDIN</a>
      </p>
    </div>
  );
};

export default Footer;
