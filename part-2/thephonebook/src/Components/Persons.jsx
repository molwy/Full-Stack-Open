const Name = ({ id, name , number, deleteFunction}) => {
    return (
      <div>
        <p>{name}: {number}</p>
        <button onClick={() => deleteFunction(id)}>delete</button>
      </div>
    )
  }

const Persons = ({ personsToShow, deleteFunction }) => {
  return (
      <ul>
      {personsToShow.map(person => 
      <Name id={person.id} name={person.name} number={person.number} deleteFunction={deleteFunction} key={person.name}/>
      )}
      </ul>
  )
  }

export default Persons