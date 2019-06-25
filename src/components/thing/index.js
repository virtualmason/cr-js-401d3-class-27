import React from 'react';

export default class Thing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flag: true,
    };
  }

  handleClick = e => {
    this.setState(state => ({ flag: !state.flag }))
  }

  render() {
    return (
      <section>
        <span className="thing" onClick={this.handleClick}>
          Thing (Flag = {this.state.flag ? 'On' : 'Off'})
        </span>
        <Thing2 />
      </section>
    );
  }
}

class Thing2 extends React.Component {
  render() {
    return (<div>Thing 2</div>);
  }
}