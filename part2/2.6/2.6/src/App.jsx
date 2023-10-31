import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

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
    //we use Array.concat() to add the newName state to the existing persons array
    //recall that concat() returns a NEW array
    setPersons(persons.concat(newNameObject))
    
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
        {persons.map(p=><li>{p.name}</li>)}
      </ul>
    </div>
  )
}

export default App