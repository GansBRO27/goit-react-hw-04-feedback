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

  handleIncrement = name => {
    this.setState({
      [name]: this.state[name] + 1,
    });
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
