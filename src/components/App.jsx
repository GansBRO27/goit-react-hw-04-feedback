import Section from 'components/section/section';
import Statistics from 'components/statistics/statistics';
import FeedbackOptions from './options/options';
import React from 'react';

import AppWrap from './app.styled';
export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countPositiveFeedbackPercentage = () => {
    const total = Number(this.state.good + this.state.neutral + this.state.bad);
    return Math.round((this.state.good / total) * 100);
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  togle = () => {
    this.setState({
      good: this.state.good + 1,
    });
  };
  handleIncrement = evt => {
    if (evt.target.textContent === 'good') {
      this.setState({
        good: this.state.good + 1,
      });
    }

    if (evt.target.textContent === 'neutral') {
      this.setState({
        neutral: this.state.neutral + 1,
      });
    }
    if (evt.target.textContent === 'bad') {
      this.setState({
        bad: this.state.bad + 1,
      });
    }
  };
  render() {
    return (
      <AppWrap>
        <Section title="Please leave feedBack">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            options={this.state}
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </AppWrap>
    );
  }
}
