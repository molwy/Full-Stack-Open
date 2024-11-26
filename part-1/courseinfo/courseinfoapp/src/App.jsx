const App = () => {
  const Header = (props) => {
    return (
      <div>
        <h1><p>{props.course}</p></h1>
      </div>
    )
  }
  const Part = (props) => {
    return (
      <div>
        <p>{props.content} has {props.exercises} exercises</p>
      </div>
    )
  }
  const Content = (props) => {
    return (
      <div>
          <Part content={part1} exercises={exercises1} />
          <Part content={part2} exercises={exercises2} />
          <Part content={part3} exercises={exercises3} /> 
      </div>
    )
  }
  const Total = (props) => { 
    return (
      <div>
        Total Number of exercises is {props.total}
      </div>
    )
  }

  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App