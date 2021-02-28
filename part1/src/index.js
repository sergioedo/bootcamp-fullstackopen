import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const totalFeedback = good + neutral + bad
  const average = (good - bad) / totalFeedback
  const positive = (good / totalFeedback) * 100
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>good {bad}</p>
      <p>all {totalFeedback}</p>
      <p>average {average}</p>
      <p>positive {positive}%</p>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)