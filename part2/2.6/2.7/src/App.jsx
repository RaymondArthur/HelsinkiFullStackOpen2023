import { useState } from 'react'

const InputField = (props) => {

  return (
    <div>
      
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

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

  const objInArray = (arr,obj) => {
    
    for(let i = 0; i < arr.length; i++){
      if(objectsAreEqual(arr[i],obj)){
        return true //obj is already in array, hence return true
      }
    }

    return false //obj is not in array, hence return false
  }

  //saving the new name from the form into the newName state
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  //adding the newName dtate to the persons state 
  const addNewPerson = (event) => {

    event.preventDefault() //stops the form submit from reloading the page
    const newNameObject = {
      name: newName
    }
    
    //we don't allow blank strings
    if(newNameObject.name !== ""){
      //we don't allow duplicate names to be added (we ARE case sensitive)
      if(objInArray(persons,newNameObject) === false){
        //we use Array.concat() to add the newName state to the existing persons array
        //recall that concat() returns a NEW array
        setPersons(persons.concat(newNameObject))
      } else {
        alert(`${newName}$ is already added to the phonebook`)
      }
    } else {
      alert("Please enter a non-empty name to add to the dictionary")
    }
    
    //resetting the newName state
    setNewName('')
  }

  return (
    
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={addNewPerson}>
        <div>
          name: <input defaultValue={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <ul>
        {persons.map(p=><li key={p.name}>{p.name}</li>)}
      </ul>
    </div>
  )
}

export default App