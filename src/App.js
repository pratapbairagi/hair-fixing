import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import FormComponent from './components/form/form';
import Header from './components/header/header';
import Layout from './components/layout/layout';

function App() {
  
  return (
    <div className="App max-w-screen overflow-x-hidden">
       <BrowserRouter>
       <Header/>
        <Routes>
          <Route path='/' element={<Layout/>}/>
          {/* <Route path='/form' element={<FormComponent/>}/> */}
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
