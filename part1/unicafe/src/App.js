import React, { useState } from "react";

const Feedback = ({ goodClick, neutralClick, badClick }) => {
  return (
    <>
      <h1>Give feedback</h1>
      <Button text="Good" onClick={goodClick} />
      <Button text="Neutral" onClick={neutralClick} />
      <Button text="Bad" onClick={badClick} />
    </>
  );
};

const Statistics = ({ statObject }) => {
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

  const increaseGood = () => setGood(good + 1);
  const increaseNeutral = () => setNeutral(neutral + 1);
  const increaseBad = () => setBad(bad + 1);

  return (
    <>
      <Feedback
        goodClick={increaseGood}
        neutralClick={increaseNeutral}
        badClick={increaseBad}
      />
      <Statistics statObject={{ Good: good, Neutral: neutral, Bad: bad }} />
    </>
  );
};

export default App;
