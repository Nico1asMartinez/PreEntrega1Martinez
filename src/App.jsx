

import Main from './components/Main'
import NavBar from './components/NavBar'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'
import CartProvider from './components/cartProvider'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';








function App() {


  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Main />
        <Footer />
      </CartProvider>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
