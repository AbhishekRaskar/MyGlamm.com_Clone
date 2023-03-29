import './App.css';
import { Box } from '@chakra-ui/react'
import Navbar from './Components/Navbar';
import AllRoutes from './Components/AllRoutes';

function App() {
  return (
    <Box className='App'>
      <Navbar />
      <AllRoutes />
    </Box>
  );
}

export default App;
