export default function Statistics({ good,
  neutral,
  bad,total,positivePercentage,
}) {

  return (
  good||
  neutral||
  bad >0?
    <div>

      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total:{total}</p>
      {positivePercentage?
      <p>Positive feedback:{positivePercentage}% </p>:<p>Positive feedback:0% </p>}
    </div>:'No feedBack given')
}