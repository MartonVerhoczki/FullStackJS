import React from "react";

const Header = (props) => {
  return <h1>{props.courseName}</h1>;
};

const Content = (props) => {
  console.log(props.parts);
  return props.parts.map((part) => (
    <Part name={part.name} exercises={part.exercises} />
  ));
};

const Total = (props) => {
  return <p>Number of exercises {props.sum}</p>;
};

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <Total
        sum={course.parts.map((a) => a.exercises).reduce((a, b) => a + b)}
      />
    </div>
  );
};

export default App;
