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
          <Part content={course.parts[0].name} exercises={course.parts[0].exercises} />
          <Part content={course.parts[1].name} exercises={course.parts[1].exercises} />
          <Part content={course.parts[2].name} exercises={course.parts[2].exercises} />
      </div> 
    )
  }

  const Total = (props) => { 
    console.log(props)
    return (
      <div>
        Total Number of exercises is {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}
      </div>
    )
  }

  const course = {
    name: 'Half Stack application development',
    parts: [
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
}

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App