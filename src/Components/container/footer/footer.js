import React, { Component } from 'react';
import './footer.css';

export default class Footer extends Component {

  constructor() {

    super();

    this.links = [
      {
        img: require('./imgs/github.png'),
        url: 'https://github.com/Tino-F',
        title: 'Github'
      },
      {
        img: require('./imgs/codepen.png'),
        url: 'https://codepen.io/TinoF',
        title: 'Codepen'
      },
      {
        img: require('./imgs/instagram.png'),
        url: 'https://www.instagram.com/tinofileccia/',
        title: 'Instagram'
      },
      {
        img: require('./imgs/twitter.png'),
        url: 'https://twitter.com/TinoFileccia',
        title: 'Twitter'
      },
      {
        img: require('./imgs/npm.png'),
        url: 'https://www.npmjs.com/~tinof',
        title: 'npmjs'
      },
      {
        img: require('./imgs/tw.svg'),
        url: 'https://tessera.works/#about',
        title: 'TesseraWorks'
      }
    ]

  }

  render() {

    let links = this.links.map( ( { img, url, title } ) => {
      return(
        <a href={url} target='_blank' rel="noopener noreferrer" key={title}>
          <img alt={title} src={img}/>
        </a>
      )
    });

    return(
      <footer>
        {links}
      </footer>
    );

  }

}
