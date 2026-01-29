//const element = <h1>Hello</h1>
//<Navbar> this is props
import Navbar from "./component/Navbar"
import Home from "./pages/Home"
import Service from "./pages/Service"
import Contact from "./pages/Contact"
import About from "./pages/About"
import UseState from "./Hooks/UseState"
import Login from "./Auth/Login"
import Hook from "./Hooks/Hook"
import UseEffect from "./Hooks/UseEffect"
import UseEffectApi from "./Hooks/UseEffectApi"
import Signup from "./Auth/Signup"
import UseRef from "./Hooks/UseRef"
import UseReducer from "./Hooks/UseReducer"
import UseMemo from "./Hooks/UseMemo"
import UseCallback from "./Hooks/UseCallback"


//import Counter from "./component/Counter"
import {Route ,Routes} from "react-router-dom"
const App = ()=>{
const element = <h1>Hello</h1>
 return(
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home name="pavi"/>}/>
      <Route path='/about' element={<About name="pavi" age={19} dept="DS"/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/service' element={<Service/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/Signup' element={<Signup/>}></Route>

      {/* Hooks */}

      <Route path='/hook'element={<Hook/>}>
        <Route path='useState' element={<UseState/>}></Route>
        <Route path='useEffect' element={<UseEffect/>}></Route>
        <Route path='useEffectApi' element={<UseEffectApi/>}></Route>
        <Route path ='UseRef' element={<UseRef/>}/>
        <Route path ='UseReducer' element={<UseReducer/>}/>
        <Route path ='UseMemo' element={<UseMemo/>}/>
        <Route path ='UseCallback' element={<UseCallback/>}/>
      </Route>  

    </Routes>
    {/*<h1>Hello</h1>
    <h2>World</h2>
    {element}
  
    <Home name="pavi"/>
    <Service/>
    <Contact/>
    <About/>
    <Counter/>*/}
    </>
  )
}
export default App