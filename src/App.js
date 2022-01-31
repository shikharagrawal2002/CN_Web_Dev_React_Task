import LandingPage from "./LandingPage";
import NotesPage from "./NotesPage";
import NavBar from "./NavBar";
// import ContactPage from "./ContactPage";
import RestaurantsPage from "./RestaurantsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<LandingPage/>} />
        <Route path="/notes" exact element={<NotesPage/>} />
        <Route path="/restaurant" exact element={<RestaurantsPage/>} />
        {/* <Route path="/contact" exact element={<ContactPage/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
