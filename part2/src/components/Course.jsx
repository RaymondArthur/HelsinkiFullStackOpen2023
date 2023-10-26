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
    parts.map(p=>console.log(p.exercises))
    const total = parts.reduce((a,b) => a + b.exercises,0)
    console.log("Total:", total)

    return (
        <>
            {parts.map((p)=><Part key={p.id} part={p}/>)}
            <Part part={{name:"Total of " + parts.reduce((a,b) => a + b.exercises,0) + " exercises"}}/>
        </>
    )
}    

const Course = (props) =>{
    return (
        <>
            <Header course={props.course.name} />
            <Content parts={props.course.parts} />
        </>
    )
}

export default Course
