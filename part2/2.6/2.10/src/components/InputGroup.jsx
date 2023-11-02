const InputGroup = (props) => {

    return (
      <div>
          {props.formLabel}: <input defaultValue={props.defaultValue} onChange={props.handleChange} />
      </div>
    )
  }

  export default InputGroup