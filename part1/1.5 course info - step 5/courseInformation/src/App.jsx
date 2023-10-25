import { useState } from 'react' //import useState object from react?

// const Display = (props) => {
  
//   return (
//     <div>
//       {props.leftProp} | {props.rightProp}
//     </div>
//   )
// }

// const History = (props) =>{
//   if(props.clickHistory.length === 0){
//     return (
//       <p>No clicks registered yet.</p>
//     )
//   } else {
//       return (
//         <div>
//           <p>Registered Clicks:</p>
//           <p>{props.clickHistory}</p>
//           <p>Total Clicks:</p>
//           <p>{props.clickHistory.length}</p>
//         </div>
//       )
//   }
// }

// //we're creating a button component that will receive its event-handler
// //via the props object, and the text value via the props object
// //'props' is the collection of data passed down to the React component
// //anything we place in <propName> = <propData> form is added to the props object!
// const Button = ({handleClick, text}) => <button onClick = {handleClick}>{text}</button>

// const App = () => {

//   //destructuring and initializing useState to an unnamed object!
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAllClicks] = useState([]) //initialliting to empty array
//   const [totalClicks, setTotalClicks] = useState(0) //initializing total clicks to 0

//   //event handlers
//   const setLeftAction = () => {
//     setAllClicks(allClicks.concat("L"))
//     setTotalClicks(totalClicks + 1)
//     setLeft(left+1)
//   }
//   const setRightAction = () => {
//     setAllClicks(allClicks.concat("R"))
//     setTotalClicks(totalClicks + 1)
//     setRight(right + 1)
//   }
//   const resetBoth = () => {
//     setAllClicks([])
//     setTotalClicks(0)
//     setLeft(0)
//     setRight(0)
//   }
    
//   return (
//     <div>
//       <Display leftProp = {left} rightProp = {right} />
//       <Button handleClick={setLeftAction} text="Left +" />
//       <Button handleClick={setRightAction} text="Right +" />
//       <Button handleClick={resetBoth} text="Reset" />
//       <History clickHistory = {allClicks}/>
//     </div>
//   )
// }

const Button = (props) => {
  return (
    <div>
      <button onClick = {props.handleClick}>{props.buttonText}</button>
    </div>
  )
}

const App = () => {
  const[value, setValue] = useState(0) //useState returns a pair: the initial state value and the function to change it

  const reset = () => {
    setValue(0)
  }

  const incrementValue = () => {
    setValue(value + 1)
  }

  const functionToExecute = (func) => {

  }

  return (
    <div>
      {value}
      <Button handleClick={incrementValue} buttonText = "Increase by 1" />
      <Button handleClick={reset} buttonText = "Reset to 0" />
    </div>
  )
}

export default App

