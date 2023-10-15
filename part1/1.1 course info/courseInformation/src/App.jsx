const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>Fundamentals of React {props.exercise1}</p>
      <p>Using props to pass data {props.exercise2}</p>
      <p>State of a component {props.exercises3}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const exerciseObject = {
    "exercises1": exercises1,
    "exercises2": exercises2,
    "exercises3": exercises3
  }

  return (
    <div>
      <Header course = {course} />
      <Content exerciseObject />
      <Total total = {exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App
 