import React, { Component } from 'react';
import { Navbar, NavItem, Icon, Autocomplete, Row, Input } from 'react-materialize'

import './Styles.css';

class NavBar extends Component {

  complete(value) {
    console.log('search called with '+ value);
  }

  change(event, value) {
    console.log('event ' + event + 'and value ' + value + ' called');
    console.log(event)
  }

  uploadFiles = async (data) => {
    var formData  = new FormData();
    for(var name in data) {
      formData.append(name, data[name]);
    }
    return fetch('/photos', {
      method: 'POST',
      body: formData
    })
    .then(res => console.log(res))
    .catch(error => console.error(error));
  }

  render() {
    return (
      <div>
        <Navbar className="NavTitle purple" brand='Pixel Library' right>
          <NavItem href='get-started.html'><Icon>search</Icon></NavItem>
          <NavItem href='get-started.html'><Icon>view_module</Icon></NavItem>
          <NavItem href='get-started.html'><Icon>refresh</Icon></NavItem>
          <NavItem href='get-started.html'><Icon>more_vert</Icon></NavItem>
        </Navbar>
        <Row>
          {
            //ToDo: Replace this component to a file upload modal
          }
          <Input
            type="file"
            label="File"
            s={12}
            multiple placeholder="Upload one or more files"
            onChange={(e, v) => this.uploadFiles(v)}
          />
        </Row>
        <Row>
          <Autocomplete
            className='SearchBar'
            placeholder='Please type a search keyword'
            icon='search'
            data={{
              'Apple': null,
              'Banana': null
            }}
            onChange={(event, value) =>this.change(event, value)}
            onAutocomplete={(value)=>this.complete(value)}
            onKeyPress={(event)=>console.log(event)}
          />
        </Row>

      </div>
    );
  }
}

export default NavBar;
