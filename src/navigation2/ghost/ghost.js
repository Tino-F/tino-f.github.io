import React, { Component } from 'react';
import { connect } from 'react-redux';
import toggleMenu from '../../actions/toggleMenu';
import './ghost.css';

function Bar (props) {
  return <div className='bar' style={{height: props.height}}></div>
}

class Ghost extends Component {

  constructor() {
    super();

    this.state = {
      bars: 150,
      barHeight: []
    }

    this.bars = [];

    this.onMouseMove = this.onMouseMove.bind( this );
  }

  componentDidMount() {
    document.addEventListener('mousemove', this.onMouseMove);

    for( let i = 0; i < this.state.bars; i++ ) {
      this.setState(( state ) => {
        return state.barHeight.push('0px')
      });
    }
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.onMouseMove);
  }

  onMouseMove( e ) {
    let pct = e.clientX / window.innerWidth;
    let bar = Math.floor(this.state.bars * pct);
    //width must be an odd number
    let width = 3;
    let height = 30;

    this.setState( ( state ) => {

      let barHeight = state.barHeight.map( ( barEl, index ) => {
        if ( index >= ( bar - Math.floor( width ) ) && index <= bar + Math.floor(width) + 1 ) {
          let curBar = index - ( bar - Math.floor( width ) );
          let val = Math.sin( ( curBar * Math.PI/2 ) / width ) * height;
          val = val < 1 ? '0' : val;
          return val + 'px';
        } else {
          return '0px';
        }
      })

      return {
        barHeight: barHeight
      }
    });
  }

  render() {

    this.bars = [];

    for( let i = 0; i < this.state.bars; i++ ) {
      this.bars.push(<Bar height={this.state.barHeight[i]}/>)
    }

    return(
      <div align='center' style={{width: '100vw'}}>
        <div className='barContainer' style={{width: this.props.width}}>
          {this.bars}
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
  return {
    toggleMenu: toggleChoice => {
      dispatch(toggleMenu(toggleChoice));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Ghost);
