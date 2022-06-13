import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import {Routes,Route, useNavigate} from "react-router-dom"
import Login from "./pages/Login";
import RequiredAuth from "./hoc/RequiredAuth";
import { useEffect } from "react";
import { useSelector } from "react-redux";
function App() {

  const navigate=useNavigate()
  const {loading,error,data}=useSelector((state)=>state.auth)
  useEffect(()=>{
    navigate("/login")
  },[])

  console.log(loading,error,data,"checking")
  if(loading){
   return <h1>loading...</h1>
  }
  if(error){
    return <h1>something went wrong...</h1>
  }
  return <div className="App">{/* code here */}
   <Navbar />
        <Routes>
           <Route path="/" element={<RequiredAuth  ><Home /></RequiredAuth>}></Route>
           {/* <Route path="/" element={<Login />}></Route>  */}
        
          
          
          <Route path="/login" element={<Login />}></Route>
        </Routes>
  </div>;
}

export default App;
