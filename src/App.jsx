import animals from "./assets/data/animals"
import './App.css'
import AnimalList from "./assets/components/animalist/Animalist";

function App() {
  console.log(animals);


  return (
    <>
    <AnimalList animals={animals}/>
    </>
  )
}

export default App
