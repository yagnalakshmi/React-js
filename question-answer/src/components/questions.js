import React from 'react'
import {FaMicrophoneAlt} from 'react-icons/fa'
import "./styles.css"

//-----------------SPEECH RECOGNITION SETUP---------------------

const SpeechRecognition = window.SpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.continous = true
recognition.interimResults = true
recognition.lang = 'en-US'
//------------------------COMPONENT-----------------------------


class Questions extends React.Component{

  constructor(props){

    super(props)
    this.state = {
    answer:'',
    listening: false

    }
 this.updateAnswer = this.updateAnswer.bind(this)
 this.toggleListen = this.toggleListen.bind(this)
 this.handleListen = this.handleListen.bind(this)
  }

updateAnswer = (event) => this.setState({answer:event.target.value})

toggleListen() {
    this.setState({
      listening: !this.state.listening
    }, this.handleListen)
  }

  handleListen(){
    // handle speech recognition here
    //need to handle continuous listening here
    if (this.state.listening) recognition.start()

    let finalTranscript = ''
    recognition.onresult = event => {
      let interimTranscript = ''

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) finalTranscript += transcript + ' ';
        else interimTranscript += transcript;
      }
      console.log("Interim Results : "+ interimTranscript);
      document.getElementById('final').innerHTML = finalTranscript
      this.setState({
        answer:finalTranscript
      })
  }
}

render(){

  return(

    <div className="question-item">
            <p className="question">
              Q{this.props.index}. {this.props.question}{" "}
            </p>
            <div className="answer">
              <div>
                <div id="microphone-btn" onClick={this.toggleListen}>
                  <FaMicrophoneAlt size="25px" color="rgb(160, 155, 199)" />
                </div>
              </div>
              <textarea
                id="final"
                placeholder="Your Answer"
                value={this.state.answer}
                onChange ={this.updateAnswer}
              />
            </div>
          </div>
  );
}
}



export default Questions
