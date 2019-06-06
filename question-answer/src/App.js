import React from 'react';
//import logo from './logo.svg';
import Questions from './components/questions'
import './App.css';

class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      questions:[
        "Introduce yourself",
        "What is your Passion?",
        "Why are you interested in this role?",
        "Share your project that you have done in react.js",
        "How would you rate your technical skill on scale of 1 to 10?"

      ],
      completed: false,

    }

    this.toggleShow =this.toggleShow.bind(this)

  }

  toggleShow = () => this.setState((prevState) => ({

    completed:!prevState.completed

  }))
// Managing all the app components here
  render(){
  return (
    <div className="container">
        <div className="content-wrapper">
          <div className="questions-list">
            {!this.state.completed &&
              this.state.questions.map((item, idx) => (
                <Questions key={item} question={item} index={idx + 1} />
              ))}
          </div>

          <div className="btn-wrapper">
            <button onClick={this.toggleShow}>
              {" "}
              {this.state.completed ? "Start Again" : "Finish"}
            </button>
          </div>
        </div>
      </div>
  );
 }
}

export default App;
