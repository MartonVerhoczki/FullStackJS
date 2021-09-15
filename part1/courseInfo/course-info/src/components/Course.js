import React from "react";

const Header = (props) => {
  return <h1>{props.courseName}</h1>;
};

const Content = (props) => {
  return props.parts.map((part) => (
    <Part key={props.id} name={part.name} exercises={part.exercises} />
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

const Course = ({ courses }) => {
  return courses.map((course) => {
    return (
      <div key={course.id}>
        <Header courseName={course.name} />
        <Content parts={course.parts} />
        <Total
          sum={course.parts.map((a) => a.exercises).reduce((a, b) => a + b)}
        />
      </div>
    );
  });
};

export default Course;
