import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home';
import Products from '../Products'
import About from '../About'
import Faqs from '../Faqs'
import Order from '../Order'
import Error from './Error'


const Main = () => (
  <main>
    <Switch>
      <Route path='/products' component={Products} />
      <Route path='/about' component={About} />
      <Route path='/faqs' component={Faqs} />
      <Route path='/order' component={Order} />
      <Route exact path='/' component={Home}/>
      <Route component={Error} />
    </Switch>
  </main>
)

export default Main