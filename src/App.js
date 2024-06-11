import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import FormComponent from './components/form/form';
import Header from './components/header/header';
import Layout from './components/layout/layout';
import Footer from './components/footer/footer';
import Order from './page/order/order';
import Booking from './page/booking/booking';
import ScrollToTop from './helper/scrollToTop/scrollToTop';

function App() {
  
  return (
    <div className="App max-w-screen overflow-x-hidden">
       <BrowserRouter>
       <ScrollToTop/>
       <Header/>
        <Routes>
          <Route path='/' element={<Layout/>}/>
          <Route path='/order' element={<Order/>}/>
          <Route path='/booking' element={<Booking/>}/>
          {/* <Route path='/form' element={<FormComponent/>}/> */}
        </Routes>
        <Footer/>
       </BrowserRouter>
    </div>
  );
}

export default App;
