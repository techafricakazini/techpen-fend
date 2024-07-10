import TopBar from "./layouts/TopBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Write from "./pages/Write";

/* Use this App.js to view the pages and layouts that are not included here such as login,register and posts while developing*/




function App() {
  return (<>
    <TopBar/>
    <Home/>
    <About/>
   <Contact/>
    <Write/>
    </>
    
  );
}

export default App;
