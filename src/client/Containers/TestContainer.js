import React from 'react';
import { Link } from 'react-router'

export default class TestContainer extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="athletes-selector">
          This is a test container
          <li><Link to="/" activeStyle={{ color: 'red' }}>Navigate to home</Link></li>
        </div>
      </div>
    );
  }
}