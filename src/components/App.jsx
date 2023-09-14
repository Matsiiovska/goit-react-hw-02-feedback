
import React, { Component } from 'react';
import { Container } from './App.styled';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statictics';
import { Notification } from './Notification/Notification';
export class App extends Component {
 state = { 
      good: 0,
      neutral: 0,
      bad: 0
  };

  onLeaveFeedback = state => {
    this.setState(prevState => ({

      [state]: prevState[state] + 1
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const feedbackValues = Object.values({ good, neutral, bad });
  const totalFeedback = feedbackValues.reduce((total, value) => total + value, 0);
  return totalFeedback;
  }
  
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return Math.round((good / total) * 100) || 0;
  }


  render() {
    const options = Object.keys(this.state);
    const totalFeedback = this.countTotalFeedback();


    return (
      <Container>
        <Section title="Please leave feedback">
<FeedbackOptions
          options={options} onLeaveFeedback={this.onLeaveFeedback} />
      </Section>  
        <Section title="Statistics">
          {totalFeedback !== 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />) : (
            <Notification message="There is no feedback" />)}

        </Section> 
          
   
      </Container>
        
      
    );
  }
};
