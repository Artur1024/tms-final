import Header from "../components/header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>JavaScript, TypeScript, ReactJS, Redux, HTML, CSS,</p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Other</h2>
              <p>
                The portfolio should include your achievements, looking at which
                you will want to be hired. First of all, of course, this is your
                work. However, there is something that many designers forget
                about. These are awards and diplomas that you received at
                competitions or after training.
              </p>
            </li>
          </ul>
        </div>
      </main>{" "}
    </>
  );
};

export default Home;
