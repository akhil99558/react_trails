
//import Message  from "./Message";
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
function App(){

  const[alertVisible,setAlertVisible]=useState(false);
  let items = ["NYC", "LA", "Chicago", "Paris", "Ottowa"];

  const handleSelectItem=(item:string)=>{
    console.log(item);
  }
  //return <div> <Message/> </div>
  return <div>
   // <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
    <div>
      {alertVisible && <Alert onClose={()=>setAlertVisible(false)}> 
      My Alert
       </Alert>}</div>
       <div><Button onClick={()=>setAlertVisible(true)}> My Button </Button></div>
    </div>
}

export default App;