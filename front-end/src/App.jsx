import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Footer from "./Footer";
import Header from './Header';
import axios from "axios";

function App() {
  const [name, setName] = useState('');

  async function submit(e) {
 
   e.preventDefault();
    try {
      const res = await axios.get("http://localhost:3000/setData");

      console.log(res);

    } catch (err) {
      console.log(err);
    }
    
  }
  return (
    <>
      <Header />
      <form onSubmit={submit}>
        <h1>Please type button to show database</h1>
        <button type='submit'>Please submit</button>
      </form>
      <Footer />
    </>
  );
}

export default App;
