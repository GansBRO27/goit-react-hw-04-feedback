import React from 'react';
export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map(option => (
    <button
      key={option}
      type="button"
      onClick={() => onLeaveFeedback(option)}
      name={option}
    >
      {option}
    </button>
  ));
}
