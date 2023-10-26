import { useState } from "react";

const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <p>Number of exercises {sum}</p>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => 
  <>
    {parts.map((p)=><Part part={p}/>)}    
    
  </>

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