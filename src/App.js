import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageAddress from './components/ImageAddress/ImageAddress';
import Rank from './components/Rank/Rank';
import Signin from './components/Signin/Signin';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Register from './components/Register/Register';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

class App extends Component{
  constructor(){
    super();
    this.state = {
      input: '',
      imageURL: '',
      route: 'signin', 
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: new Date()
      }
    }
  }

  loadUser = (data)=>{
    this.setState({user:{
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }
    })
  }
  
  OnInputchange = (event) => {
    this.setState({
      input: event.target.value
    })
  }
  OnSubmit = () => {
    this.setState({
      imageURL: this.state.input
    });
    fetch('http://localhost:3000/image', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
          id: this.state.user.id
      })
    })
    .then(response => response.json())
    .then(count => {
      this.setState(Object.assign(this.state.user, {entries: count}))
    })
  }
  OnSignin = (route) => {
    this.setState({
      route: route
    })
  }
  render(){
    const particlesInit = async (main) => {
      console.log(main);
      await loadFull(main);
    };
    return (
      <div className='App'>
      <Particles
      id="tsparticles"
      init={particlesInit}

      options={{
        "fullScreen": {
            "zIndex": -1
        },
        "particles": {
            "number": {
                "value": 100,
                "density": {
                    "enable": true,
                    "area": 500
                }
            },
            "color": {
                "value": "#FFFFFF",
                "animation": {
                    "enable": true,
                    "speed": 20,
                    "sync": true
                }
            },
            "opacity": {
                "value": 0.3
            },
            "size": {
                "value": {
                    "min": 0.1,
                    "max": 3
                }
            },
            "links": {
                "enable": true,
                "distance": 120,
                "color": "#FFFFFF",
                "opacity": 0.5,
                "width": 2
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "outModes": {
                    "default": "out"
                }
            }
        },
        "interactivity": {
            "events": {
                "onHover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onClick": {
                    "enable": true,
                    "mode": "push"
                }
            },
            "modes": {
                "repulse": {
                    "distance": 150
                },
                "push": {
                    "quantity": 4
                }
            }
        },
    }}
    />
        <Navigation route={this.state.route} OnSignin={this.OnSignin}/>
        {this.state.route === 'home'?
        <div>
          <Logo />
          <Rank name={this.state.user.name} entries={this.state.user.entries}/>
          <ImageAddress OnInputchange={this.OnInputchange} OnSubmit={this.OnSubmit} />
          <FaceRecognition imageURL={this.state.imageURL}/>
        </div>
        :(
          this.state.route === 'signin'?
          <Signin loadUser={this.loadUser} OnSignin={this.OnSignin}/>
          :<Register loadUser={this.loadUser} OnSignin={this.OnSignin}/>
        )
        }
      </div>
    );
  }
}

export default App;
