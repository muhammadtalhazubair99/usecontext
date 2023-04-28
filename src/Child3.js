import React from 'react'
import './App.css'
import Child4 from './Child4'

const Child3 = () => {
  return (
    <div>
       <table className='table3'>
      <thead>
          <th className='tabTitle'>Child No. 03</th>
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
      <Child4/>
    </div>
  )
}

export default Child3