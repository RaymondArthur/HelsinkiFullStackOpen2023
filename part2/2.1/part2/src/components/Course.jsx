import { useState } from "react";

const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <p>Number of exercises {sum}</p>

const Part = ({ part }) => {
  return (
    <p>
     {part.name} {part.exercises}
    </p>
  )
}

const Content = ({ parts }) => {
    console.log(parts)
    return (
        parts.map((p)=><Part part={p}/>)
    )
}    

const Course = (props) =>{
    console.log(props)

    return (
        <>
            <Header course={props.course.name} />
            <Content parts={props.course.parts} />
        </>
    )
}

export default Course