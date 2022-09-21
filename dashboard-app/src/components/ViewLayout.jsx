import React,{useState} from 'react'
import GridView from '../components/Panel/GridView'
import ListView from '../components/Panel/ListView'
const ViewLayout = () => {
    const [view,setView] = useState("list");
  return (
    <>
    <button onClick={setView("list")}> List </button>
    <button  onClick={setView("grid")}>Grid</button>
    {view === "list" ? <ListView /> : <GridView />}

    </>
  )
}

export default ViewLayout