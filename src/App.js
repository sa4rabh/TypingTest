import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import OneMin from './timer/OneMin'
import ThreeMin from './timer/ThreeMin'
import FiveMin from './timer/FiveMin'
import Timer from './timer/Timer'
import Basics from './basics/Basics'
import One from './basics/One'
import Three from './basics/Three'
import Five from './basics/Five'
import Hard from './hard/Hard'
import O from './hard/O'
import T from './hard/T'
import F from './hard/F'
import Easy from './easy/Easy'
import On from './easy/On'
import Th from './easy/Th'
import Fi from './easy/Fi'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Basics />} >
          <Route path='/' element={<One />} />
          <Route path='three' element={<Three />} />
          <Route path='five' element={<Five />} />
        </Route>

        <Route path='/easy' element={<Easy />} >
          <Route path='on' element={<On />} />
          <Route path='th' element={<Th />} />
          <Route path='fi' element={<Fi />} />
        </Route>

        <Route path='/medium' element={<Timer />} >
          <Route path='oneMin' element={<OneMin />} />
          <Route path='threeMin' element={<ThreeMin />} />
          <Route path='fiveMin' element={<FiveMin />} />
        </Route>

        <Route path='/hard' element={<Hard />} >
          <Route path='o' element={<O />} />
          <Route path='t' element={<T />} />
          <Route path='f' element={<F />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
