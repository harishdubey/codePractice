import logo from './logo.svg';
import Year from './year';
// import PostsWithPagination from './PostsWithPagination';
import PostPagination from './postsPagination'
// import Accordion from './Accordion';
import Accordion2 from "./Accordion2";
// import ImageSlider from './imageSlider';
import MyImageSlider from "./myslider";
import './App.css';

function App() {
  return (
    <div className="App">
      <MyImageSlider />
      {/* <ImageSlider /> */}
      <Accordion2 />
      {/* <Accordion /> */}
      <PostPagination />
      {/* <PostsWithPagination /> */}

      <Year />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header>

    </div>
  );
}

export default App;
