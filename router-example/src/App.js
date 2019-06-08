import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

class User extends React.Component{
  render(){
  return(

    <h1>  Welcome User </h1>

  );

}
}

class App extends React.Component{

  constructor(props){
    super(props)
    this.state ={
      username:''
    }
    this.updateChange = this.updateChange.bind(this)
    this.handleStart = this.handleStart.bind(this)
  }

updateChange = (event) => {
this.setState({
  username : event.target.value
  })
  }

  handleStart = () => {

    history.push(`/user/${this.state.username}`)
  }

  render(){
    return(

      <Router>

      <div className="box">

            <div className="user">


                <Route path="/" exact render={
                     ()=> {return(
                  <div>
                      <h1> Welcome </h1>
                      <input type="text"
                        id="username"
                        placeholder="username"
                        value={this.state.username}
                        onChange={this.updateChange} />

                     <input type="submit"
                            value="Start"
                            onClick={this.handleStart}/>
                  </div>
                    );
                  }
                  }/>

                  <Route path="/user/:username" exact component={User}/>



              </div>

      </div>
      </Router>


    );

}
}


export default App;
