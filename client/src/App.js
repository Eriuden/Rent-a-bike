import { Route, Routes } from 'react-router';
import './App.css';
import Navbar from './Components/Navbar';
import Bike from './Pages/Bike';
import ConnexionForm from './Pages/ConnexionForm';
import Home from './Pages/Home';
import InscriptionForm from './Pages/InscriptionForm';
import ProfilUser from './Pages/Profil/ProfilUser';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/bike/:id" element={<Bike/>}/>
      <Route exact path="/connexion" element={<ConnexionForm/>}/>
      <Route exact path="/inscription" element={<InscriptionForm/>}/>
      <Route exact path="/profil" element={<ProfilUser/>}/>
    </Routes>

    
    
    </div>
  );
}

export default App;
