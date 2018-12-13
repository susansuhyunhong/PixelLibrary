import React, { Component } from 'react';
import { Pagination } from 'react-materialize'

class PageNavBar extends Component {
  render() {
    return (
      <div className='PageNavBar'>
        <Pagination
          items={10}
          activePage={2}
          maxButtons={8}
          onSelect={(currPage)=>console.log(
            'Page #' + currPage + ' selected!'
          )}
        />
      </div>
    );
  }
}

export default PageNavBar;
