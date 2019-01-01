import React, { Component } from 'react';
import './banner.css';
import { connect } from 'react-redux';

class Banner extends Component {

  static defaultProps = {
    text: 'Breaking the traditional'
  }

  render() {

    return(
      <div id='banner' align='center'>
        <div className='banner_content'>
          {this.props.text}
        </div>
      </div>
    );

  }

}

const mapStateToProps = store => {
  return {
    menu: store.menu
  };
}

const mapDispatchToProps = dispatch => {
  return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
