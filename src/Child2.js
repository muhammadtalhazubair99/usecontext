import React from 'react'
import './App.css'
import Child3 from './Child3'

const Child2 = () => {
  return (
    <div>
       <table className='table2'>
      <thead>
          <th className='tabTitle'>Child No. 02</th>
        </thead>
        <thead>
          <th className='th'>Name</th>
          <th className='th'>Age</th>
          <th className='th'>Gender</th>
        </thead>
        <tbody>
          <tr>
            <td className='td'>.</td>
            <td className='td'>.</td>
            <td className='td'>.</td>

          </tr>
        </tbody>
      </table>
      <Child3/>
    </div>
  )
}

export default Child2