import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import {connect} from 'react-redux';
import {bindActionCreators} from'redux'
import * as actions from '../redux/actions'
import './App.css';
import {Api} from "../redux/api"
import Menu from "./menu"
import Content from "./content"
import {BrowserRouter as Router,Link,Route} from "react-router-dom";

class App extends Component {
  componentDidMount(){
    this.props.actions.getList()
  }
  render() {
    const {list,actions,match,activeID} = this.props
    return (
      <Container className="App">
            <div>
              <Menu match={match}/>
              <Content activeID={activeID} list={list} actions={actions}/>
            </div>
      </Container>
    );
  }
}

const mapDispatchToProps = function (dispatch){  
  return {
      actions: bindActionCreators(actions,dispatch)
  }
}
const mapStateToProps = function (store){ 
  return {
    list:store.products,
    activeID:store.active
  }
}

export default App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
