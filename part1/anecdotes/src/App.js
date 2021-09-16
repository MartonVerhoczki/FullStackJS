import React, { useState, useEffect } from "react";

const Anecdote = ({ header, text }) => {
  return (
    <>
      <h1>{header}</h1>
      <p>{text}</p>
    </>
  );
};

const Votes = ({ numOfVotes, voteHandler }) => {
  return (
    <>
      <p>Votes: {numOfVotes}</p>
      <button onClick={voteHandler()}>Vote</button>
    </>
  );
};

const RandomButton = ({ text, collection, callback }) => {
  const randomIndex = Math.floor(Math.random() * collection.length);
  const randomItem = collection[randomIndex];
  return <button onClick={callback(randomItem)}>{text}</button>;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  const [max_, setMax_] = useState(0);

  const incrementVote = () => () => {
    let items = [...votes];
    items[selected]++;
    setVotes(items);
  };

  useEffect(() => {
    setMax_(getMax());
  }, [votes]);

  const getMax = () => votes.indexOf(Math.max(...votes));

  const handleNextAnecdote = (anecdote) => (event) => {
    const index = anecdotes.indexOf(anecdote);
    setSelected(index === selected ? (index + 1) % anecdotes.length : index);
  };

  return (
    <div>
      <Anecdote header="Andecdote of the day" text={anecdotes[selected]} />
      <Votes numOfVotes={votes[selected]} voteHandler={incrementVote} />
      <RandomButton
        text="Next anecdote"
        collection={anecdotes}
        callback={handleNextAnecdote}
      />
      <Anecdote header="Anecdote with most votes" text={anecdotes[max_]} />
    </div>
  );
};

export default App;
