const Button = (props) => {
    return (
      <div>
        <button type={props.buttonType}>{props.buttonText}</button>
      </div>
    )
  }

export default Button