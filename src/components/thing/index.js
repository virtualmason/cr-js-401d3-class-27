import React from 'react';

export default class Thing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <section>
        <span className="thing">Thing</span>
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