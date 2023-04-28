import React, { createContext } from "react";
import './App.css'
import Child1 from "./Child1";

export const allData = createContext();
function App() {
  const user={
    name:"M.Talha Zubair",
    age:24,
    gender:"Male"
  }

  return (
    <allData.Provider value={user}>
      <div className="mainDiv">
        
      <table className='table'>
      <thead>
      <th className='tabTitle'>Parent Class</th>
          
        </thead>
        <thead>
          <th className='th' onClick={()=>{
            alert("Hy Mr. Talha")
          }}>Name</th>
          <th className='th'>Age</th>
          <th className='th'>Gender</th>
        </thead>
        <tbody>
          <tr>
            <td className='td'>{user.name}</td>
            <td className='td'>{user.age}</td>
            <td className='td'>{user.gender}</td>

          </tr>
        </tbody>
      </table>
      
        <Child1 />
      </div>
    </allData.Provider>
  );
}

export default App;
