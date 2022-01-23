import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from './Landing';
import Dashboard from './Dashboard'
import AuthContextProvider from './AuthContext';
function App() {
  return(
      <AuthContextProvider>
      <Router>
          <Routes>
              <Route exact path="/dashboard" element={<Landing/>}/>
              <Route exact path="/loggedin" element={<Dashboard/>}/>
          </Routes>
      </Router>
      </AuthContextProvider>
  )
}

export default App;
