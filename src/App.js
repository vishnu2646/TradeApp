import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Sidebar from './Components/Sidebar/Sidebar';
import Backdrop from './Components/Backdrop/Backdrop';
import { Component } from 'react';
import Home from './Components/Home';
import Market from './Components/MarketDepth/Market';
import ProSetup from './Components/Charts/ProSetup'
import Swing from './Components/Swing';
import Footer from './Components/Footer';
import conversation from './Components/conversation/conversation';

class App extends Component{
  state = {
    sideDrawerOpen:false,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backDropClickHandler = () => {
    this.setState({sideDrawerOpen:false})
  }

  render(){
    let backDrop;

    if(this.state.sideDrawerOpen){
      backDrop = <Backdrop click = {this.backDropClickHandler}/>
    }

    return (
      <Router>
        <div style={{height:'100%'}}>
          <Layout drawerClickHandler = {this.drawerToggleClickHandler}/>
          <Sidebar show = {this.state.sideDrawerOpen}/>
          {backDrop}
          <Route path="/" exact component={Home}/>
          <Route path="/market" component={Market}/>
          <Route path="/pro-setup" component={ProSetup}/>
          <Route path="/swing-center" component={Swing}/>
          <Route path="/conversation" component={conversation} />
        </div>
        <Footer/>
      </Router>
    );
  }
}

export default App;
