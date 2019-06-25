import React from 'react';

export default class Thing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return <span className="thing">Thing</span>
  }
}