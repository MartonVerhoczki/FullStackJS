import React, { useState } from "react";

const Feedback = ({ handleFeedback }) => {
  return (
    <>
      <h1>Give feedback</h1>
      <Button text="Good" onClick={handleFeedback("good")} />
      <Button text="Neutral" onClick={handleFeedback("neutral")} />
      <Button text="Bad" onClick={handleFeedback("bad")} />
    </>
  );
};

const Statistics = ({ statistics }) => {
  if (statistics.all === 0) {
    return <p>No feedback given</p>;
  }
  return (
    <>
      <h1>Statistics</h1>
      <table>
        <tbody>
          {Object.entries(statistics).map((value, index) => {
            return (
              <tr key={index}>
                <td>{value[0]}</td>
                <td>{value[1]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = () => {
  const [statistics, setStatistics] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    all: 0,
    average: 0,
  });

  const handleFeedback = (feedback) => (event) => {
    const { good, average, neutral, bad, all } = statistics;
    if (feedback === "good") {
      setStatistics({
        ...statistics,
        good: good + 1,
        average: average + 1,
        all: all + 1,
      });
    } else if (feedback === "neutral") {
      setStatistics({ ...statistics, neutral: neutral + 1, all: all + 1 });
    } else if (feedback === "bad") {
      setStatistics({
        ...statistics,
        bad: bad + 1,
        average: average - 1,
        all: all + 1,
      });
    }
  };

  const positivePercentage = () => {
    const result = (statistics.good / statistics.all) * 100;
    return result.toString().concat("%");
  };

  console.log(statistics);

  return (
    <>
      <Feedback handleFeedback={handleFeedback} />
      <Statistics
        statistics={{
          ...statistics,
          positive: positivePercentage(),
        }}
      />
    </>
  );
};

export default App;
