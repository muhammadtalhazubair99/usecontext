import React, { useContext } from 'react'
import './App.css'
import {allData} from './App'

const Child4 = () => {
  const user=useContext(allData)
  return (
    <div>

      <table className='table'>
      <thead>
          <th className='tabTitle'>Child No.04</th>
        </thead>
        <thead>
          <th className='th'>Name</th>
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
    </div>
  )
}

export default Child4