




import { useEffect, useState } from 'react';
import Footer from "./Footer";
import Header from './Header';
import axios from "axios";
import Card from "./Card"

function App() {
  const [name, setName] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/setData");
        console.log(res.data);
        setName(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []); // The empty array means this useEffect runs once when the component mounts

  return (
    <>
      <Header />
      <div className="all-cards">
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
      <Footer />
    </>
  );
}

export default App;
