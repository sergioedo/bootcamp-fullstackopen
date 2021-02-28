import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = ({ text, value }) => {
  return (
    <tr key={text}>
      <td><p>{text}</p></td>
      <td><p>{value}</p></td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const totalFeedback = good + neutral + bad
  const average = (good - bad) / totalFeedback
  const positive = (good / totalFeedback) * 100
  if (totalFeedback > 0) {
    return (
      <>
        <h1>statistics</h1>
        <table>
          <tbody>
            <Statistic text='good' value={good} />
            <Statistic text='neutral' value={neutral} />
            <Statistic text='bad' value={bad} />
            <Statistic text='all' value={totalFeedback} />
            <Statistic text='average' value={average} />
            <Statistic text='positive' value={`${positive}%`} />
          </tbody>
        </table>
      </>
    )
  } else {
    return <p>no feedback given</p>
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)