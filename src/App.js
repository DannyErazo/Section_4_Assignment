import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {

state = {

characters : null,
chars : null,
result: ''


}

 counterHandler = (event) => {


const numOfCharacters = event.target.value.length;

const strings = event.target.value;

const letters = strings.split('');


this.setState({

  characters: numOfCharacters,
  chars: letters,
 

}

); 


}



  render() {

    const sentence = (event) => {

      const words = event.target.value ; 

      const characters = words.split('');

      return characters

      


    }
  
  




    return (
      <div className="App">
        <ol>
          <li>Step 1 Completed</li>
          <li>Step 2 Completed</li>
          <li>Step 3 Completed</li>
          <li>Step 4 Completed</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

<input type = 'text' onChange = {this.counterHandler}></input>

<Validation length = {this.state.characters} />

<Char letters = {this.state.chars} />



</div>




    );
  }
}

export default App;
