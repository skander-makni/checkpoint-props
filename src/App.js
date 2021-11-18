import './App.css';
import Profile from "./profil/profile";
import foto from "./image.png";

function App() { 
   const handelname=(fullName) => alert(fullName)
  return (
<Profile fullName="makni skander"  Bio ="hi everybody !" profession="etudiant" handelname={handelname}>
  {<img src={foto}alt ="react" style={{ width: "200"}}></img>}

</Profile>
   
  );
}

export default App;
