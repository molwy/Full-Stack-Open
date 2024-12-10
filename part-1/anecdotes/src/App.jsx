import { useState } from 'react'

const VoteButton = (props) => {
  // console.log(props)
  var handleVoteClick = props.phandleVoteClick
  var text = props.ptext
  return <button onClick={handleVoteClick}>{text}</button>
}

const votesArray = new Array(8).fill(0)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [currentVoteCount, setCurrentVoteCount] = useState(0)
  const [topAnecdote, setTopAnecdote] = useState(
    {
      'anecdote': anecdotes[0],
      'votes': votesArray[0]
    }
  )

  const handleVoteClick = () => {
    votesArray[selected] += 1
    setCurrentVoteCount(votesArray[selected])
    if (votesArray[selected] > topAnecdote['votes']) { 
      setTopAnecdote({
        'anecdote': anecdotes[selected],
        'votes': votesArray[selected]
      }
      )
    }
  }

  const nextAnecdote = () => {
    const randomNumber = Math.floor(Math.random() * 8)
    // console.log(randomNumber)
    const newSelected = randomNumber
    setSelected(newSelected)
    setCurrentVoteCount(votesArray[newSelected])
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {currentVoteCount} votes</p>
      <p>
        <VoteButton phandleVoteClick={handleVoteClick} ptext="vote" />
      </p>
      <p>
        <button onClick={nextAnecdote}>
          next anecdote
        </button>
      </p>
      <h1>Anecdote with most votes</h1>
      <p>{topAnecdote['anecdote']}</p>
      <p>has {topAnecdote['votes']} votes</p>
    </div>
  )
}

export default App