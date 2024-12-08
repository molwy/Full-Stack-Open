import { useState } from 'react'

const Button = (props) => {
  // console.log(props)

  return (
    <button onClick={() => props.setChoice(props.choice + 1)}>
      {props.text}
    </button>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  // console.log(props)

  var pgood = props.good
  var pneutral = props.neutral
  var pbad = props.bad
  var getAll = (pgood + pbad + pneutral)
  var getAverage = (pgood + -pbad) / 3
  var getPositive = pgood / getAll

  if (getAll === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  else return (
    <table>
      <tbody>
        <StatisticLine text="good" value={pgood} />
        <StatisticLine text="neutral" value={pneutral} />
        <StatisticLine text="bad" value={pbad} />
        <StatisticLine text="all" value={getAll} />
        <StatisticLine text="average" value={getAverage} />
        <StatisticLine text="positive" value={getPositive} />
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button choice={good} setChoice={setGood} text='good' />
      <Button choice={neutral} setChoice={setNeutral} text='neutral' />
      <Button choice={bad} setChoice={setBad} text='bad' />

      <h1>statistics</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad} />
    </div>
  )
}

export default App
