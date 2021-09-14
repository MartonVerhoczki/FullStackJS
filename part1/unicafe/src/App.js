import React, { useState } from "react";

const Feedback = ({ clickHandler }) => {
  return (
    <>
      <h1>Give feedback</h1>
      <Button text="Good" onClick={() => clickHandler("good")} />
      <Button text="Neutral" onClick={() => clickHandler("neutral")} />
      <Button text="Bad" onClick={() => clickHandler("bad")} />
    </>
  );
};

const Statistics = ({ statObject }) => {
  if (statObject.Good === 0 && statObject.Neutral === 0 && statObject.Bad === 0)
    return <p>No feedback given</p>;
  return (
    <>
      <h1>Statistics</h1>
      <table>
        {Object.entries(statObject).map((value, index) => {
          return (
            <tr>
              <td>{value[0]}</td>
              <td>{value[1]}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);

  const handleClick = (feedback) => {
    setAll(all + 1);
    if (feedback === "good") {
      setGood(good + 1);
      setAverage(average + 1);
    } else if (feedback === "neutral") {
      setNeutral(neutral + 1);
    } else if (feedback === "bad") {
      setBad(bad + 1);
      setAverage(average - 1);
    }
  };

  const positivePercentage = () => {
    const result = (good / all) * 100;
    return result.toString().concat("%");
  };

  return (
    <>
      <Feedback clickHandler={handleClick} />
      <Statistics
        statObject={{
          Good: good,
          Neutral: neutral,
          Bad: bad,
          All: all,
          Average: average / all,
          Positive: positivePercentage(),
        }}
      />
    </>
  );
};

export default App;
