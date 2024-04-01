import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import routes from './routes/index';
import { Suspense } from 'react';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Footer from './components/Footer';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} index />
      

      {routes.map((route, index) => {
          const { path, component: Component } = route;
          return (
            <Route
              key={index}
              path={path}
              element={
                <Suspense fallback={<div className='font-poppins text-4xl text-center font-extrabold'>Loading...</div>}>
                  <Component />
                </Suspense>
              }
            />
          );
        })}
             
      </Routes>
      <Footer />
    </Router>
  )
}

export default App