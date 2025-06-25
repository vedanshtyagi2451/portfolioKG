import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Basic from './Navbar';
import Banner from './Banner';
import './App.css'; 
import FigureExample from './about';
import Skills from './Skills';
import Projects from './Projects';
import Footer from './Footer';
function App() {
  return (
    <div className="app cointainer">\
         <Basic />
     <Banner />
     <br />
     <br />
     <br />
     <br />

     <h2>About me</h2>
     <FigureExample />
     <br />
     <br />
     <br />
     <br />
    <section id="skills">
       <h2>Skills</h2>{/* This is your actual Skills component */}
     <br />
  <Skills />  
</section>

     <br />
     <br />
     <br />
     <br />
       <section id="projects">
          <h2>Projects</h2>
      <Projects />
        <br />
     <br />
     <br />

   

</section>
<footer id="footer" className="footer bg-dark text-white py-4">
  {/* Footer content */}
  <Footer />
</footer>

  

    </div>
  );
}

export default App;
