import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Arthur</em>
          </strong>
          <br />
          here are my works
        </h1>
        <div className="header__text">
          <p></p>
        </div>
        <a href="#!" className="btn">
          Summary
        </a>
      </div>
    </header>
  );
};

export default Header;
