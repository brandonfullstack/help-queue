import React from "react";
import Header from "./Header";
import TicketControl from "./TicketControl";

function App(){
  return (
    <React.Fragment>
      <Header />
      <TicketControl />
      {/* This is a JSX comment. */}
      <hr/>
    </React.Fragment>
  );
}

export default App;