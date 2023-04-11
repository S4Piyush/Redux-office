import logo from './logo.svg';
import './App.css';
import { tempdata } from './Redux/Action/Action';
import { useDispatch, useSelector } from 'react-redux';
import Home from './Redux/Home';

function App() {

  // const dispatch = useDispatch();
  // const apiDataget = useSelector((ele) => ele)
  // console.log("apiDataget", apiDataget)

  // const handleClick = () => {
  //   dispatch(tempdata())
  // }

  return (
    <div className="App">
      <Home />
      {/* <button onClick={() => handleClick()}>Submit</button> */}
    </div>
  );
}

export default App;
