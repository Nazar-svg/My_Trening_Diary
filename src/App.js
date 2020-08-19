import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Layout from './hoc/Layout/Layout'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Cycling from './containers/Cycling/Cycling'
import Travel from './containers/Travel/Travel'
import ComprehensiveTraining from './containers/ComprehensiveTraining/comprehensiveTraining'
import Run from './containers/Run/Run'
import Photo from './containers/Photo/Photo'

const App = () => {
  return (
    <Layout>
      <Header />
      <Menu />
      <Switch>
        <Route path='/cycling' component={Cycling} />
        <Route path='/travel' component={Travel} />
        <Route path='/comprehensiveTraining' component={ComprehensiveTraining} />
        <Route path='/run' component={Run} />
        <Route path='/photo' component={Photo} />
      </Switch>
    </Layout>

  )
}

export default App;
