import React from "react";
import Profile from "./Profile/Profile";
import "./App.css";
import image from "./gmc.png";
function App() {
  const showAlert = (name) => alert(name);
  return (
    <div>
      <Profile
        Donnee={{
          fullName: "Amor Marouen",
          Bio: "Bio : 	2019: Ingénierie de logiciel et systèmes d'information  ",
          profession: "développeur",
        }}
        showName={showAlert}
      >
        <img src={image} alt="cbvccgc" />
      </Profile>
    </div>
  );
}

export default App;
