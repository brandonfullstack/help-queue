import React from "react";
import flexImage from "./../img/flex.png";

function Header(){
  return (
    <React.Fragment>
    <h1>Help Queue</h1>
    <img class= "scale-up-left" src={flexImage} alt="flexing" />
    </React.Fragment>
  );
}

export default Header;