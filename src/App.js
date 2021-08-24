import { Container } from '@material-ui/core';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Definitions from "./Component/Definitions/Definitions";

//https://api.dictionaryapi.dev/api/v2/entries/en/<word>

function App() {

  const [word, setWord] = useState("");
  const [meaning,setMeaning] = useState([]);
  const [category,setCategory] = useState("en");

  const dictionaryApi = async() => {
    try{
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`);
      //console.log(data);
      setMeaning(data.data);
    }catch(error)
    {
      console.log(error);
    }
  }

  console.log(meaning);
  useEffect(()=>{
    dictionaryApi(); 
  },[word, category]);
  
  return (
    <div className="App" style = {{height:'100vh', backgroundColor: '#282c34', color: "white"}}>
      <Container maxWidth="md" style={{display: "flex", flexDirection:"column", height:"100vh"}}>
        <Header category={category} setCategory={setCategory} word={word} setWord={setWord}/>
        <Definitions/>
      </Container>
    </div>
  );
}

export default App;
