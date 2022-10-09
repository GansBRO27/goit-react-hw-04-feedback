import Section from 'components/section/section';
import Statistics from 'components/statistics/statistics';
import FeedbackOptions from './options/options';
import React from 'react';
import { useState } from 'react';
import AppWrap from './app.styled';
export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  function clickOnBtn(feedback) {
    switch (feedback) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  }
  const countPositiveFeedbackPercentage = () => {
    const total = Number(good + neutral + bad);
    return Math.round((good / total) * 100);
  };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  return (
    <AppWrap>
      <Section title="Please leave feedBack">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={clickOnBtn}
        />
      </Section>

      <Section title="Statistics">
        <Statistics
          options={['good', 'neutral', 'bad']}
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </AppWrap>
  );
}
