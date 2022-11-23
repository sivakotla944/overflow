import {BrowserRouter as Router} from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchAllquestions } from './actions/question';

import './App.css';
import Navbar from './components/navbar/navbar';
import AllRoutes  from './AllRoutes';



function App() {

  // const dispatch =useDispatch()


//   useEffect=(()=>{
// dispatch(fetchAllquestions())
//  }, [dispatch] )

  return (
    <div className="App">
      <Router >
  <Navbar />
  <AllRoutes />
  
 
  </Router>
    </div>
  );
}

export default App;
