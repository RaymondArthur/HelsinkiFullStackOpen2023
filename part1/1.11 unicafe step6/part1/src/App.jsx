import { useState } from 'react'

const Button = ({handleClick, label}) => {
  return (
    <>
      <button onClick = {handleClick}>{label}</button>
    </>
  )
}

const ButtonGroup = (props) => {


  return (
    <div>
      <Button buttonText="good" />
      <Button buttonText="neutral" />
      <Button buttonText="bad" />
    </div>
  )
}

const Heading = (props) => {
  return (
    <div>
      <h1>{props.headingText}</h1>
    </div>
  )
}

const Statistics = (props) => {
    if(props.total === 0){
      return (
        <table>
          <tbody>
            <StatisticLine label="No feedback given" statisticToDisplay="" />
          </tbody>
        </table>
      )
    } else {
      return (
        <>
          <table>
            <tbody>
                <StatisticLine label="good" statisticToDisplay={props.goodCount} />
                <StatisticLine label="neutral" statisticToDisplay={props.neutralCount} />
                <StatisticLine label="bad" statisticToDisplay={props.badCount} />
                <StatisticLine label="total" statisticToDisplay={props.total} />
                <StatisticLine label="average" statisticToDisplay={props.average} />
                <StatisticLine label="positive" statisticToDisplay={props.percentOfGood + " %"} />
            </tbody>
          </table>
        </>
      )
    }
}

const StatisticLine = ({label, statisticToDisplay}) => {
  return (
    <tr>
      <td>
        {label}
      </td>
      <td>
        {statisticToDisplay}
      </td>
    </tr>
  )
}

const App = () => {
  const [goodCount, setGood] = useState(0)
  const [neutralCount, setNeutral] = useState(0)
  const [badCount, setBad] = useState(0)

  const increaseGood = () => setGood(goodCount + 1)
  const increaseNeutral = () => setNeutral(neutralCount + 1)
  const increaseBad = () => setBad(badCount + 1)

  let total = goodCount + neutralCount + badCount
  let average = Number.parseFloat((goodCount * 1 + neutralCount* 0 + badCount*-1)/total).toFixed(1)

  let percentOfGood = goodCount
  if(!Number.isNaN(goodCount/total)){
    percentOfGood = Number.parseFloat(goodCount/total*100).toFixed(1)
  }
  

  return (
    <div>
      <Heading headingText = "give feedback" />
      <Button handleClick={increaseGood} label="good" />
      <Button handleClick={increaseNeutral} label="neutral" />
      <Button handleClick={increaseBad} label="bad" />

      <Heading headingText = "statistics" />
      <Statistics goodCount = {goodCount} 
        badCount = {badCount} 
        neutralCount = {neutralCount}
        total = {total}
        average = {average}
        percentOfGood = {Number.parseFloat(percentOfGood).toFixed(1)}
        />
    </div>
  )
}

export default App
