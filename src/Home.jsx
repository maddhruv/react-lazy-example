import { Link } from "react-router-dom";

const Home = () => {
  return (
    <header className="App-header">
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        The Energetic React Lazy
      </a>
      <Link to="/material">Material</Link>
      <Link to="/antd">AntD</Link>
    </header>
  );
};

export default Home;
