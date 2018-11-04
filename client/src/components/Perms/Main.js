import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home';
import Products from '../Products'
import Hydra from '../Products/Hydra/index'
import Monstar from '../Products/Monstar/index'
import Maxx from '../Products/Maxx/index'
import About from '../About'
import Faqs from '../Faqs'
import Order from '../Order'
import Login from '../Login';
import Error from './Error'


const Main = () => (
  <main>
    <Switch>
      <Route path='/products/hydra' component={Hydra} />
      <Route path='/products/monstar' component={Monstar} />
      <Route path='/products/maxx' component={Maxx} />
      <Route path='/products' component={Products} />
      <Route path='/about' component={About} />
      <Route path='/faqs' component={Faqs} />
      <Route path='/order' component={Order} />
      <Route path='/login' component={Login} />
      <Route exact path='/' component={Home}/>
      <Route component={Error} />
    </Switch>
  </main>
)

export default Main