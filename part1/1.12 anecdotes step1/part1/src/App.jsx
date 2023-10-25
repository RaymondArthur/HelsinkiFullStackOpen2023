import { useState } from 'react'

const Heading = (props) => {
  return (
    <div>
      <h1>{props.headingText}</h1>
    </div>
  )
}

const Display = (props) => {
  return (
    <div>
      {props.text}
    </div>
  )
}

const Button = ({text, handleClick}) => {
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length))

  const randomSelect = () => {
    let randomIndex = Math.floor(Math.random()*(anecdotes.length-1))
    setSelected(randomIndex)
  }

  const incrementVotes = () => {
    const newVotes = [...votes]
    newVotes[selected] = votes[selected] + 1
    setVotes(newVotes)
  }

  const mostPopularIndex = votes.indexOf(Math.max(...votes))

  return (
    <div>
      <Heading headingText="Anecdote of the day" />
      <Display text = {anecdotes[selected]} />
      <Display text = {"has " + votes[selected] + " votes"} />
      <Button handleClick={incrementVotes} text = "vote" />
      <Button handleClick={randomSelect} text = "next anecdote" />

      <Heading headingText="Anecdote with the most votes" />
      <Display text = {anecdotes[mostPopularIndex]} />
    </div>
  )
}

export default App