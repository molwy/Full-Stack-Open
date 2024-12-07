import { useState } from 'react'

const Statistics = (props) => {
  console.log(props)

  var pgood = props.good
  var pneutral = props.neutral
  var pbad = props.bad
  var getAll = (pgood + pbad + pneutral)
  var getAverage = (pgood + -pbad) / 3
  var getPositive = pgood / getAll

  return (
    <div>
      <p>good {pgood}</p>
      <p>neutral {pneutral}</p>
      <p>bad {pbad}</p>
      <p>all {getAll}</p>
      <p>average {getAverage}</p>
      <p>positive {getPositive}</p>
    </div>
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
      <button onClick={() => setGood(good + 1)}>
        good
      </button>
      <button onClick={() => setNeutral(neutral + 1)}>
        neutral
      </button>
      <button onClick={() => setBad(bad + 1)}>
        bad
      </button>

      <h1>statistics</h1>
      <Statistics
        good={good}
        bad={bad}
        neutral={neutral} />
    </div>
  )
}

export default App
