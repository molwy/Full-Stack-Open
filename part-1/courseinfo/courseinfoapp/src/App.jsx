const App = () => {
  const Header = (props) => {
    console.log(props)
    return (
      <div>
        <h1><p>{props.course}</p></h1>
      </div>
    )
  }
  const Part = (props) => {
    console.log(props)
    return (
      <div>
        <p>{props.content} has {props.exercises} exercises </p>
      </div>
    )
  }
  const Content = (props) => {
    console.log(props)
    return (
      <div>
          <Part content={parts[0].name} exercises={parts[0].exercises} />
          <Part content={parts[1].name} exercises={parts[1].exercises} />
          <Part content={parts[2].name} exercises={parts[2].exercises} />
      </div>
    )
  }

  const Total = (props) => { 
    console.log(props)
    return (
      <div>
        Total Number of exercises is {parts[0].exercises + parts[1].exercises + parts[2].exercises}
      </div>
    )
  }

  const course = 'Half Stack application development'
  const parts = [
    {
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }
]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App