import React,{useEffect} from 'react'
import './App.scss'
import RouterView from './router'

import config from '@/config'

console.info(config)

function App() {
  useEffect(()=>{
    console.log(process.env,8888);
    
  },[])
  return <RouterView></RouterView>
}

export default App
