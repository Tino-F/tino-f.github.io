import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './carousel.css';

export class Carousel extends Component {

  static defaultProps = {
    routerUrl: '/projects/',
    index: 0
  }

  constructor() {

    super();

    this.state = {
      numOfItems: 0
    }

  }

  componentDidMount() {

    this.innerEl = document.querySelector('#carousel .inner');

    this.setState({
      numOfItems: this.innerEl.children.length
    }, function () {

      //stretch out the sliding element so that each project will fit without overlapping
      this.innerEl.style.width = ( this.state.numOfItems * 100 ) + '%';

    });

  }

  render() {

    let index = parseInt(this.props.index);

    let leftURL = ( index - 1 ) < 0 ? this.state.numOfItems - 1 : index - 1;
    let rightURL = ( index + 1 ) > this.state.numOfItems - 1 ? 0 : index + 1;

    leftURL = this.props.routerUrl + leftURL;
    rightURL = this.props.routerUrl + rightURL;


    return(
      <div id='carousel' style={{...this.props.style}}>

        <div className='leftArrow'>
          <Link to={leftURL}>
            <img alt='left' src={require('./imgs/chevron-left.png')}/>
          </Link>
        </div>

        <div className='rightArrow'>
          <Link to={rightURL}>
            <img alt='right' src={require('./imgs/chevron-right.png')}/>
          </Link>
        </div>

        <div className='inner' style={{transform: `translateX(${-100/this.state.numOfItems * this.props.index}%)`}}>

          {this.props.children}

        </div>

      </div>
    )

  }

}

export class Project extends Component {

  render() {
    return(
      <div id='project' align='center'>
        <div className='projectInner'>
          <h1>{this.props.title}</h1>
          <img alt={this.props.title} src={this.props.src}/>
          <br/>
          {this.props.children}
        </div>
      </div>
    );
  }

}

export class Listener {

  start() {

  }

  stop() {

  }

}
