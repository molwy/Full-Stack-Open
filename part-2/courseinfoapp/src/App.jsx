const Header = (props) => {
  // console.log(props)
  return (
    <div>
      <h1><p>{props.course}</p></h1>
    </div>
  )
}

const Part = (props) => {
  // console.log(props)
  return (
    <div>
      <p>{props.content} has {props.exercises} exercises </p>
    </div>
  )
}

const Content = (props) => {
  // console.log(props)

  var parts = props.parts 
  const getPartComponent = (x) => {
    return (
      <Part key={x.name} content={x.name} exercises={x.exercises} />
    )
  }

  var partsArray = parts.map(getPartComponent)

  return (
    <div>
      {partsArray}
    </div> 
  )
}

const Total = (props) => { 
  // console.log(props)
  var parts = props.parts
  var total = 0
  parts.forEach(element => {
    console.log(element.name)
    total = total + element.exercises 
  });
  console.log(total)
  return (
    <div>
      Total Number of exercises is {total}
    </div>
  )
}

const Course = ({ course }) => {
  return (
  <div>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>
  )
}

const App = () => {
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
  <Course course={course} />
)
}

export default App