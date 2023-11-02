import Person from "./Person"

const PhoneBookList = ({persons, filterText}) => {

    //the examples creates a filtered copy of the original array of object
    // const peopleToShow = filterText === "" 
    //   ? persons 
    //   : persons.filter(p=>p.name.includes(filterText))
  
    //however I've experimented with filtering in the return statement
    return (
      <div>
        <ul>
          {persons.map((p)=> {
  
            //String.toLowerCase() converts to lowercase e.g. https://stackoverflow.com/questions/48145432/javascript-includes-case-insensitive
            if(filterText === "" || p.name.toLowerCase().includes(filterText.toLowerCase())){
              return <Person key={p.name} name={p.name} number={p.number} />
            }
          }
          )}
        </ul>
      </div>
    )
  }

  export default PhoneBookList