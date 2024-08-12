import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import Home from './Home';
// import ReadUser from './ReadUser';
// import UpdateUser from './UpdateUser';
import SignIn from './SignIn';
import SignUp from './SignUp';

function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<SignIn/>} />
      <Route path='/signup' element={<SignUp/>} />
        {/* <Route path='/' element={<Home/>} />
        <Route path='/readuser/:id' element={<ReadUser/>} />
        <Route path='/updateuser/:id' element={<UpdateUser/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;