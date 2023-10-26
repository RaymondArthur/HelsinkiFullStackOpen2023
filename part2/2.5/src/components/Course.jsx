import { useState } from "react";

const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <p>Number of exercises {sum}</p>

const Part = ({ part, type }) => {
    if(type == "totalRow"){
        return (
        <p>
            <b>{part.name} {part.exercises}</b>
        </p>
        )
        
    } else {
        return (
            <p>
             {part.name} {part.exercises}
            </p>
          )
    }
  
}

const Content = ({ parts }) => {
    console.log(parts)
    parts.map(p=>console.log(p.exercises))
    const total = parts.reduce((a,b) => a + b.exercises,0)
    console.log("Total:", total)

    return (
        <>
            {parts.map((p)=><Part key={p.id} part={p} type="normalRow"/>)}
            <Part part={{name:"Total of " + parts.reduce((a,b) => a + b.exercises,0) + " exercises"}} type="totalRow"/>
        </>
    )
}    

const Course = ({courses}) =>{
    
    return (
        <>
            {courses.map((course)=>{
                return (
                <>
                    <Header course={course.name} />
                    <Content parts={course.parts} />   
                </>
                )
            })}
        </>
    )
}

export default Course
