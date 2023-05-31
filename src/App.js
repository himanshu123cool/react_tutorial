// Simple 

// import Header from "./Header";

// function App() {
//   return (
//     <div className="App">
//       <Header/>
//       <h1>Hello world React Tutorial</h1>
//     </div>
//   );
// }

// export default App;



// Bootstrap 


import React from 'react';
import Header from './Bootstrap/Header.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Hero from './Bootstrap/Hero.js';
import About from './Bootstrap/About.js';
import Service from './Bootstrap/Service.js';
import Contact from './Bootstrap/Contact.js';
import Footer from './Bootstrap/Footer.js';

function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Service/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App

