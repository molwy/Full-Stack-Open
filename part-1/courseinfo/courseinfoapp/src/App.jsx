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
        <p>{props.content} has {props.exercises} exercises</p>
      </div>
    )
  }
  const Content = (props) => {
    console.log(props)
    return (
      <div>
          <Part content={part1.name} exercises={part1.exercises} />
          <Part content={part2.name} exercises={part2.exercises} />
          <Part content={part3.name} exercises={part3.exercises} />
      </div>
    )
  }

  const Total = (props) => { 
    console.log(props)
    return (
      <div>
        Total Number of exercises is {props.total}
      </div>
    )
  }

  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

export default App