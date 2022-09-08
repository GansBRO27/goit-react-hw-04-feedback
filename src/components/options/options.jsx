
import React from 'react';
export default function FeedbackOptions({ options ,onLeaveFeedback}) {
    const obj = Object.keys(options);
    return obj.map((option) => <button key={option} type='button' onClick={onLeaveFeedback} name={option}>{option}</button>)
    
      
    }
