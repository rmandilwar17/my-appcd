//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React ,{ useState }from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter,
  Routes,
  Route,  

} from "react-router-dom";



//let name=" Vandana Cotoure";

function App() {

  const[mode, setMode]= useState('light');
  const[alert, setAlert]=useState(null);


  const showAlert =(message, type)=>{

         setAlert({

         msg: message,
         type:type

 

         })

         setTimeout(() => {

          setAlert(null);
          
         }, 2000);

  }

  const toggleMode =()=>{

     if(mode=== 'light'){

        setMode('dark')
        document.body.style.backgroundColor='#342d2d';   
        showAlert("Dark mode has been enabled", "success");
        document.title='TextUtils -Dark Mode';

     }

     else{

      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled", "success");
      document.title='TextUtils -Light Mode';

     }



  }
  return (
    
    <>
   
   
   
   <Alert alert={alert}/>
   

   <div className="container my-3">

   <BrowserRouter>
   <Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode}/>
   <Routes>
          <Route  path="about/*" element={<About />}/>
            
          <Route  path="/" element={ <TextForm showAlert={showAlert} heading="Enter the text you want to analyse" mode={mode}/> }/>
         
          </Routes>
        </BrowserRouter>
        </div>
        
   
   


    </>

   
  );
}

export default App;
