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
    const calculateSum = (sum, element) => {
      // console.log(sum, element)
      return sum + element.exercises
    }
  
    var total = parts.reduce(calculateSum, 0)
    // console.log(total)
    return (
      <div>
        Total Number of exercises is {total}
      </div>
    )
  }
  
  const Course = ({ course }) => {
    // console.log(course)
    return (
      <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    )
  }
  
export default Course