import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Footer } from './components/Footer';
import { Login } from './pages/Login/Login'
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { UserStorage } from './userContext';
import { User } from './components/User';
import { ProtectedRoute } from './components/Helper/ProtectedRoute';

const App = () => {
 
  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            
            <Route path="/" element={<ProtectedRoute />}>
              <Route  path="conta/*" element={<User />}/>
            </Route>
          </Routes>
          <Footer />
        </UserStorage>  
        </BrowserRouter>
      
      <GlobalStyle />
    </>
  );
}

export default App;
