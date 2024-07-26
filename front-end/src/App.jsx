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
        <h1>Submit button to watch database items</h1>
        <div>
        {name.map((card) => {
          console.log(card.photo)
          return (
            <Card 
              location={card.photo}
              name={card.name}
            />
          );
        })} 
        </div>
        <button type='submit'>Please submit</button>
      </form>
      
      <Footer />
    </>
  );
}

export default App;
