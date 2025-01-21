const Name = ({ name , number}) => {
    return (
      <div>
        <p>{name}: {number}</p>
      </div>
    )
  }

const Persons = ({ personsToShow }) => {

return (
    <ul>
    {personsToShow.map(person => 
    <Name key={person.name} name={person.name} number={person.number} />
    )}
    </ul>
)
}

export default Persons