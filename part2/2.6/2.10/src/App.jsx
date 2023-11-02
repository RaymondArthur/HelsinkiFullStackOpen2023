import { useState } from 'react'
import SubHeading from './components/SubHeading'
import PhoneBookList from './components/PhoneBookList'
import PersonForm from './components/PersonForm'
import InputGroup from './components/InputGroup'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number:'040-1234567' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhonenumber, setNewPhonenumber] = useState('')
  const [filterText, setFilterText] = useState('')

  //objectsAreEqual() is used to check if two objects are 'equal'
  const objectsAreEqual = (obj1,obj2) => {
    
    //first we check if memory address is the same
    if(obj1 === obj2){
        return true
    }
    
    //check if array lengh is equal. If unequal, return false
    if(Object.keys(obj1).length != Object.keys(obj2).length){
        return false
    }
    
    //next check if keys of both objects are the same
    for(const key in obj1){
        if(!Object.keys(obj2).includes(key)){
            return false
        }
    }
    
    for(const key in obj2){
        if(!Object.keys(obj1).includes(key)){
            return false
        }
    }
    
    //finally, we check that the values of both objects are the same
    for(const key in obj1){
        if(obj1[key] !== obj2[key]){
            return false
        }    
    }
    
    //if all keys and values are equal, the objects are 'equal'
    return true
  }

  const personInArray = (arr,obj) => {
    
    for(let i = 0; i < arr.length; i++){
      if(objectsAreEqual(arr[i].name,obj.name)){
        return true //obj is already in array, hence return true
      }
    }

    return false //obj is not in array, hence return false
  }

  //saving the new name from the form into the newName state
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  //saving the new phone numbe from the form into the newPhonenumber state
  const handleNumberChange = (event) => {
    setNewPhonenumber(event.target.value)
  }

  //saving the applied filter text
  const handleFilterTextChange = (event) => {
    setFilterText(event.target.value)
  }

  //adding the newName state to the persons state 
  const addNewPerson = (event) => {

    event.preventDefault() //stops the form submit from reloading the page
    const newNameObject = {
      name: newName,
      number: newPhonenumber
    }
    
    //we don't allow blank strings
    if(newNameObject.name !== ""){
      //we don't allow duplicate names to be added (we ARE case sensitive)
      if(personInArray(persons,newNameObject) === false){
        //we use Array.concat() to add the newName state to the existing persons array
        //recall that concat() returns a NEW array
        setPersons(persons.concat(newNameObject))
      } else {
        alert(`${newName} is already added to the phonebook`)
      }
    } else {
      alert("Please enter a non-empty name to add to the dictionary")
    }
    
    //resetting the newName state
    setNewName('')
    setNewPhonenumber('')
  }

  return (
    
    <div>
      <SubHeading text="Phonebook" />
      <InputGroup formLabel="filter shown with" value={filterText} handleChange ={handleFilterTextChange} />


      <SubHeading text="add a new" />
      <PersonForm  addNewPerson={addNewPerson} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} 
        newName={newName} newPhonenumber={newPhonenumber}/>

      <SubHeading text="Numbers" />
      <PhoneBookList persons={persons} filterText = {filterText}/>
    </div>
  )
}

export default App