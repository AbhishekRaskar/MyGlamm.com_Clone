import './App.css';
import { Box } from '@chakra-ui/react'
import Navbar from './Components/Navbar';
import AllRoutes from './Components/AllRoutes';
import Footer from './Components/Footer';

function App() {
  return (
    <Box className='App'>
      <Navbar />
      <br />
      <AllRoutes />
      <br />
      <Footer />
    </Box>
  );
}

export default App;
