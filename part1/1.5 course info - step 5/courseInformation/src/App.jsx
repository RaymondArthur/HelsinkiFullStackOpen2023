const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <p>{props.partData}</p>
  )
}

//note I had to add curly braces to props parameter to treat it as an array
const Content = ({props}) => {
  return (
    <div>
      <Part partData = {props[0].name + " " + props[0].exercises} />
      <Part partData = {props[1].name + " " + props[1].exercises} />
      <Part partData = {props[2].name + " " + props[2].exercises} />
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
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
      name:'Fundamentals of React',
      exercises: 1
      },
      {
      name:'Using props to pass data',
      exercises: 7
      },
      {
      name:'State of a component',
      exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course = {course.name} />
      <Content props = {course.parts} />
      <Total total = {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}/>
    </div>
  )
}

export default App

