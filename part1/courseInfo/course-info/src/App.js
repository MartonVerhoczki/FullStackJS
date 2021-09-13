import React from "react";

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  return props.parts.map((part) => (
    <Part title={part.title} numberOfExcercises={part.numberOfExcercises} />
  ));
};

const Total = (props) => {
  return <p>Number of exercises {props.sum}</p>;
};

const Part = (props) => {
  return (
    <p>
      {props.title} {props.numberOfExcercises}
    </p>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content
        parts={[
          { title: part1, numberOfExcercises: exercises1 },
          { title: part2, numberOfExcercises: exercises2 },
          { title: part3, numberOfExcercises: exercises3 },
        ]}
      />
      <Total sum={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;
