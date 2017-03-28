import React from 'react';
import { Link } from 'react-router'

export default class Index extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="athletes-selector">
          React will do the magic
          <li><Link to="/test" activeStyle={{ color: 'red' }}>About</Link></li>
        </div>
        {this.props.children}
      </div>
    );
  }
}