import InputGroup from "./InputGroup"
import Button from "./Button"

const PersonForm = (props) => {
    return (
      <form onSubmit={props.addNewPerson}>
        <InputGroup formLabel="name" value={props.newName} handleChange={props.handleNameChange}  />
        <InputGroup formLabel="number" value={props.newPhonenumber} handleChange={props.handleNumberChange}  />
        <Button buttonType="submit" buttonText="add"/>
      </form>
    )
  }

export default PersonForm