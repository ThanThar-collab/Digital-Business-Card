// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import './App.css'

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Header() {
  return (
    <img src="./src/assets/profile.jpg" alt="card-photo" height="200" className="profile-photo" />
  );
}

function MainContent(){
  return (
    <div>
    <div className="profile-role-container" >
      <h2>Chit Hmue Than Thar</h2>
      <p>Full Stack Developer</p>
    </div>
    
    <div className="button-group">
        <button type="button"><a href="mailto:juliawilson757@gmail.com"><FaEnvelope />Email</a></button>
        <button type="button" ><a href="https://www.linkedin.com/in/chit-hmue-than-thar-a87452254/"><FaLinkedin />LinkedIn</a></button>
    </div>
    <div className="main-container">
      <h3>About</h3>
      <p>I'm a computer science engineering bachelor student at myanmar institute of information technology (shorts for MIIT), Mandalay. I have skills in Frontend and Backend Technologies. I enjoy learning new tech stacks and I have determined to become a full-stack developer who can assist developer community.</p>

      <h3>Interests</h3>
      <p>I'm interested in building complete web applications—from polished user interfaces to efficient server logic. They enjoy working with modern frameworks, improving user experience, optimizing APIs, and exploring new tools. Their passion lies in solving real-world problems and creating smooth, scalable digital solutions.</p>
    </div>
    </div>
  );
}


function Footer() {
  return (
    <div className="footer-icons">
      <a href="https://facebook.com" target="_blank" rel="noreferrer">
        <FaFacebook />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noreferrer">
        <FaTwitter />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noreferrer">
        <FaInstagram />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noreferrer">
        <FaLinkedin />
        </a>
    
    </div>
  );
}

function App() {
    return (
      <div className="card-container">
        <Header />
        <MainContent />
        <Footer />
      </div>
    );
}

export default App