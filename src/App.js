import React from 'react'
// import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';

import './App.css';




class App extends React.Component {
  constructor() {
    super();


    this.state = {
      input: '',
    }
  }

  onInputChange = (e) => {
    console.log(e.target.value);
  }


  onButtonSubmit = () => {

    app.models.predict("08437eed2f7c44b4951d0480cc5a7246", "https://samples.clarifai.com/face-det.jpg").then(
      function (response) {

      },
      function (err) {

      }
    )

  }



  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        {/* <FaceRecognition /> */}
      </div>
    )
  }
}

export default App;
