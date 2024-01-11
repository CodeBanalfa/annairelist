import { Route, Routes, } from "react-router-dom";
import Footer from "./compose/footer/Footer";
import Headre from "./compose/headre/Headre";
import Main from "./compose/main/Main";


const App = () => {
  
  return (
    <>
      <Headre />
      <main>
      
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        
      
    
      </main>
      <Footer />
    </>
  );
};
export default App;

