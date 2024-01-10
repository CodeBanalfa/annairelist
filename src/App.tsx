import { Route, BrowserRouter as Router, Routes, } from "react-router-dom";
import AnnairList from "./compose/AnnairList/AnnairList";
import Footer from "./compose/footer/Footer";
import Headre from "./compose/headre/Headre";
import Main from "./compose/main/Main";


const App = () => {
  return (
    <>
      <Headre />
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </Router>
      
    
      </main>
      <Footer />
    </>
  );
};
export default App;

