import logo from './logo.svg';
import Year from './year';
// import PostsWithPagination from './PostsWithPagination';
import PostPagination from './postsPagination'
// import Accordion from './Accordion';
import Accordion2 from "./Accordion2";
// import ImageSlider from './imageSlider;
import MyImageSlider from "./myslider";
import ErrorBoundry from './ErrorBoundry';
import RiskyComponent from "./RiskyComponent";
import ContextCheck from './ContextCheck';
import Hooks from "./Hooks";
import './App.css';

function App() {
  return (
    <div className="App">
      <Hooks />
      <ErrorBoundry>
        <RiskyComponent />
      </ErrorBoundry>
      <ContextCheck />
      <MyImageSlider />
      {/* <ImageSlider /> */}
      <Accordion2 />
      {/* <Accordion /> */}
      <PostPagination />
      {/* <PostsWithPagination /> */}

      <Year />

    </div>
  );
}

export default App;
