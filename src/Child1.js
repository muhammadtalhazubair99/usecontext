import React from 'react'
import './App.css'
import Child2 from './Child2'

const Child1 = () => {
  return (
    <div>
       <table className='table1'>
      <thead>
          <th className='tabTitle'>Child No. 01</th>
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
      <Child2/>
    </div>
  )
}

export default Child1