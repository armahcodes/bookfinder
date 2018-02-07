import React, {Component} from 'react';
import {formGroup, FormControl, InputGroup, Glyphicon, FormGroup} from 'react-bootstrap';
import Gallery from './gallery'

class Global extends Component{
  constructor(props){
    super(props);
    this.state = {
      query: '',
      items: []
    }
  }


search(){
  const BASE_URL = 'https://www.google.com/books/v1/volumes?q=';
  fetch(`${BASE_URL}${this.query.state}, {method: 'GET'}`)
  .then(response => response.json())
.then(json => {
  let {items} = json;
  this.setState((items))
    });
}

render(){
  return(
    <div className="Global">
      <h2>Book Finder</h2>
      <FormGroup>
        <InputGroup>
          <FormControl
            type="text"
            placeholder="Find A Book"
            onChange={event => this.state({query: event.target.value})}
            onKeyPress={event => {
              if (event.key === 'Enter'){
                this.search();
              }
            }}
            />
          <InputGroup.Addon onClick = {() => this.search()}>
            <Glyphicon glyph="search"></Glyphicon>
          </InputGroup.Addon>
        </InputGroup>
      </FormGroup>
      <Gallery items={this.state.items}/>
    </div>
  )
  }
}

export default Global;
