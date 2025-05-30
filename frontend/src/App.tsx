import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/index';
import Login from './pages/login';
import Cadastro from './pages/cadastro';
import { getCookie } from './services/cookies';
import type { UserProfile } from './types/user';
import NotFound from './pages/not-found';
import './global.css';
import { useEffect, useState } from 'react';


function App() {
  const [userData, setUserData] = useState<UserProfile | null>(null)
  let userToken: string | null = getCookie('session_token')

  useEffect(() => {    
    if ( userToken && ! userData ) {
      const parsed = JSON.parse(atob(decodeURIComponent(userToken)));
      setUserData(parsed);
    }
  })

  return (
    <Routes>
      { userData
        ? <Route path="/" element={<Home userData={userData} setUserData={setUserData} />} />
        : 
          <>
            <Route path="/" element={<Login setUserData={setUserData} />} />
            <Route path="/cadastro" element={<Cadastro />} />
          </>
      }
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
