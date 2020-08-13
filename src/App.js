import React from 'react'
import './App.css'
import Layout from './hoc/Layout/Layout'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'

const App = () => {
  return (
    <Layout>
      <Header />
      <Menu />
    </Layout>
    
  )
}

export default App;
