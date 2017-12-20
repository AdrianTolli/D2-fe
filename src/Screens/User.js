import React, { Component } from 'react';
import './User.css';

class Home extends Component {

  constructor(){
    super();

    this.state={
      profile:null,
    }
  }

  componentDidMount(){
    fetch('http://localhost:5050/searchUser/CxyAdrian')
      .then(res => res.json())
      .then(json => {
        console.log(json);
        this.setState({
          profile: json.Response,
        })
      })
  }

  render() {
    if(this.state.profile===null){
      return <div> You have no profile loaded </div>
    }

    let characters = this.state.profile.characters.data;

    let componentArray = [];
    for(let key in characters){
      let character = characters[key];
      let emblemPath = 'https://www.bungie.net' + character.emblemBackgroundPath;
      componentArray.push(
      <div style={{backgroundImage:"url("+ emblemPath + ")", width:474, height:96, color:'white'}}>
      <div className='lvl'> {character.levelProgression.level} </div>
      <div className='light'> {character.light} </div>
      <div className='raceClass'> {character.raceType} {character.classType} </div>
      
      </div>
    );
    }

    return (
      <div className="User">
        {componentArray}
      </div>
    );
  }
}

export default Home;
