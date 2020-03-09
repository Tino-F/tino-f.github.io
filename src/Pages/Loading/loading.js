import React, { Component } from 'react';
import './loading.css';

export default class Loading extends Component {

  render() {

    return(
      <div id='loadingScreen'>

        <div className='loading-icon' align='center'>
          <span className='loading_bar'/>
          <span className='loading_bar'/>
          <span className='loading_bar'/>
          <span className='loading_bar'/>
          <span className='loading_bar'/>
          <span className='loading_bar'/>
        </div>

        <br/>

        <p id='loading'>Loading...</p>

        <p id='developed'>This website was developed by Tino Fileccia</p>

      </div>
    );

  }

}
