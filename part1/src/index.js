import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const getMostVoted = (points) => {
  const maxValue = Math.max(...points)
  console.log(maxValue)
  return points.indexOf(maxValue)
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [mostVoted, setMostvoted] = useState(0)
  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0])

  const handleNextClick = () => {
    const randomPosition = Math.round(Math.random() * 5)
    setSelected(randomPosition)
  }

  const handleVoteClick = () => {
    const newPoints = [...points]
    newPoints[selected]++
    setPoints(newPoints)
    setMostvoted(getMostVoted(newPoints))
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]} <br />
      Has {points[selected]} votes. <br />
      <button onClick={handleVoteClick}>Vote</button>&nbsp;
      <button onClick={handleNextClick}>Next anecdote</button><br />

      <h1>Anecdote with most votes</h1>
      {props.anecdotes[mostVoted]} <br />
      Has {points[mostVoted]} votes. <br />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)