import React, { Component } from 'react';
/*import PropTypes from 'prop-types';*/

export class Statistics extends Component  {
   render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive Percentage: {positivePercentage}%</p>
      </div>
    );
  }
}
export default Statistics;


