import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import UpComingItems from './Components/upComingItems';
import Header from './Components/header';
import NavBar from './Components/navBar'
import CurrentItems from './Components/getCurrentItems';
import GetPopularItems from './Components/getPopularItems'
import Footer from './Components/footer'

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <div>
      <Header />
      <NavBar />
      <Route path="/" exact component={CurrentItems} />
      <Route path="/fortnite-item-shop" exact component={CurrentItems} />
      <Route path="/currentItems" exact component={CurrentItems} />
      <Route path="/upcomingItems" exact component={UpComingItems} />
      <Route path="/GetAllItems" exact component={GetPopularItems} />
      <Footer />
    </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

