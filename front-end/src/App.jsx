import { useState } from 'react';

import Footer from "./Footer";
import Header from './Header';
import axios from "axios";
import Card from "./Card"



function App() {
  const [name, setName] = useState([]);

  async function submit(e) {
 
   e.preventDefault();
    try {
      const res = await axios.get("http://localhost:3000/setData");
      
      console.log(res.data);
      setName(res.data);
      
      
    } catch (err) {
      console.log(err);
    }
    
  }
  return (
    <>
      <Header />
      <form onSubmit={submit}>
        <h1>Please type button to show database</h1>
        {name.map((card) => {
          console.log(card.photo)
          return (
            <Card 
              location={card.photo}
              name={card.name}
            />
          );
        })}
        <button type='submit'>Please submit</button>
      </form>
      
      <Footer />
    </>
  );
}

export default App;
