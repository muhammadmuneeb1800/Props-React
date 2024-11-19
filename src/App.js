import React from "react";
import Card from "./components/card/Card"
import imgx from "./assets/Dog.png"

function App() {
  return (
   <div className="App">
    <Card img = {imgx}
    title="MUhammad Muneeb"
    text = "Welcome to Muneeb Sir! I can help you" />
   </div> 
  )
}

export default App;
