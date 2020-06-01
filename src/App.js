import React, { Component } from 'react';
import Header from './component/header/Header';
import Box from './component/box/Box';
import Fade from 'react-reveal/Fade';

class App extends Component {

  state = {
    country: 'Guatemala',
    discovery: false
  }

  componentDidMount(){
    this.showDiscovery();
  }

  showDiscovery = () => {
    setTimeout(() => {
      this.setState({
        discovery: true
      })
    }, 2000);
  }

  getCountry = value => {
    this.setState({
      country: value
    })
  }


  showBg = () => {
    if (this.state.country === '') return <Inital />
    if (this.state.country === 'Guatemala') return <Guatemala discovery={this.state.discovery}/>
    if (this.state.country === 'ElSalvador') return <Salvador />
    if (this.state.country === 'Belice') return <Belice />
  }

  render() {
    console.log(this.state.country)

    return (
      <div className="">
        {this.showBg()}
        <Header />
        <div className='container'>
          <Box getCountry={this.getCountry} />
        </div>
      </div>
    );
  }
}

const Guatemala = (props) => (
  <React.Fragment>
    <div className='containerBox'
      // style={{ backgroundImage: `url(https://images.unsplash.com/photo-1528543010705-e7e75169b717?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80)`
      style={{ backgroundImage: `url(https://i.ibb.co/DLskJmH/bgHome.jpg)`   
    }}>
      <div className='slogan'>
        <h1 className=''>All your travel needs</h1>
        <h1 className=''>in one place</h1>
      </div>
      {props.discovery ? <div className='contentText'>
        <Fade left>
          <h1>Discover Guatemala</h1>
        </Fade>
      </div>: null}
    </div>
  </React.Fragment>
)

const Salvador = () => (
  <React.Fragment>
    <div className='containerBox'
      style={{ backgroundImage: `url(https://images.unsplash.com/photo-1519421840190-84d0cab37fb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80)` }}>
      <div className='contentText'>
        <Fade left>
          <h1>Discover El Salvador</h1>
        </Fade>
      </div>
    </div>
  </React.Fragment>
)

const Belice = () => (
  <React.Fragment>
    <div className='containerBox'
      style={{ backgroundImage: `url(https://images.unsplash.com/photo-1484821582734-6c6c9f99a672?ixlib=rb-1.2.1&auto=format&fit=crop&w=1491&q=80)` }}>
      <div className='contentText'>
        <Fade left>
          <h1 className='slogan'>All your travel needs</h1>
          <h1>Discover Belice</h1>
        </Fade>
      </div>
    </div>
  </React.Fragment>
)

const Inital = () => (
  <>
    <div className='containerBox' style={{ backgroundImage: `url(https://i.ibb.co/DLskJmH/bgHome.jpg)` }}>
      {/* <div className='water'>
      </div>
      <svg>
        <filter id="turbulence" x="0" y="0" width="100%" height="100%">
          <feTurbulence id="sea-filter" numOctaves="3" seed="2" baseFrequency="0.02 0.05"></feTurbulence>
          <feDisplacementMap scale="20" in="SourceGraphic"></feDisplacementMap>
          <animate xlinkHref="#sea-filter" attributeName="baseFrequency" dur="60s" keyTimes="0;0.5;1" values="0.02 0.06;0.04 0.08;0.02 0.06" repeatCount="indefinite" />
        </filter>
      </svg> */}
    </div>
  </>
)

export default App;
