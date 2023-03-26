import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import SecondNav from './component/SecondNav';
import Cardsection from './component/Cardsection';
import Printshop from './component/Printshop';
import CustomersReport from './component/CustomersReport';
import Services from './component/Services';
import Amazingworks from './component/Amazingworks';
import Footer from './component/Footer';
import CopyRight from './component/CopyRight';

function App() {
  return (
     <>
     <Navbar />
     <SecondNav />
     <Cardsection />
     <Printshop />
     <CustomersReport />
     <Services />
     <Amazingworks />
     <Footer />
     <CopyRight />
     </>
  );
}

export default App;
