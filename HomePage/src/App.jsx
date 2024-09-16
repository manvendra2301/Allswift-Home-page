import { useEffect, useState } from 'react'
import { Footer } from './Components/Footer/Footer'
import { Header } from './Components/Header/Header'
import { Middle } from './Components/Middle/middle'




import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(()=>{

    const loadscript = (src) =>{
      return new Promise((resolve,reject)=>{
        const script = document.querySelector("script");
        script.src=src;
        script.onload =resolve;
        script.onerror =reject;
        document.body.appendChild(script);
      })
    }

       const loadScripts = async () => {
         try {
           await loadScripts("./src/Components/javascript/jquery.js");
           await loadScripts("./src/Components/javascript/javascript1.js");
         } catch (error) {
           console.error("error loading scripts", error);
         }
       };
       loadScripts();
  },[])
 

  
  return (

    

    <>
     
      <Header />
      <Middle/>
      <Footer />
    </>
  );
}

export default App
