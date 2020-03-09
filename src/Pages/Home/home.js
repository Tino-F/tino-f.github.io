import React, { Component } from 'react';
import Name from '../../Scenes/name';
import Plus from '../../Components/ui/logos/plus/plus';
import './home.css';

export default class Home extends Component {

  render() {
    return(
      <div>
        <Name/>
        <div className='homeContent' align='center'>
          <div>
            <Plus/>
            <p>
              Less is more.
            </p>
          </div>
        </div>
      </div>
    )
  }

}
