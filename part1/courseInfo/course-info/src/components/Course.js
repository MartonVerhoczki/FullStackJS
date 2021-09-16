import React from "react";

const Header = ({ courseName }) => {
  return <h1>{courseName}</h1>;
};

const Content = ({ parts }) => {
  return parts.map((part) => {
    const { id, name, exercises } = part;
    return <Part key={id} name={name} exercises={exercises} />;
  });
};

const Total = ({ sum }) => {
  return <p>Number of exercises {sum}</p>;
};

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

const Course = ({ course }) => {
  return (
    <div key={course.id}>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <Total
        sum={course.parts.map((a) => a.exercises).reduce((a, b) => a + b)}
      />
    </div>
  );
};

export default Course;
