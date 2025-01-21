  import { useState } from 'react'
const Name = ({ name , number}) => {
  return (
    <div>
      <p>{name}: {number}</p>
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    // hardcode some data temporarily
    // { name: 'Arto Hellas', number: '040-123456', id: 1 },
    // { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    // { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    // { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

const addName = (event) => {
  event.preventDefault()
  if (persons.some(person => person.name === newName)) {
    window.alert(newName + ' is already added to phonebook')
    } else if (persons.some(person => person.number === newNumber)) {
    window.alert(newNumber + ' is already added to phonebook')
    } else {
        const nameObject = {
          name: newName,
          number: newNumber,
          id: String(persons.length + 1),
          }
        setPersons(persons.concat(nameObject))
        setNewName('')
        setNewNumber('')
        }
    }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const personsToShow = persons.filter(
    (person) => {
      return person.name
      .toLowerCase()
      .includes(
        filter.toLowerCase()
      )
    }
    )

  const updateFilter = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          Search: 
          <input value={filter} onChange={updateFilter}></input>
        </div>
      </form>
      <h2>New Contact</h2>
      <form onSubmit = {addName}>
        <div>
          name: 
            <input 
            value={newName.name}
            onChange={handleNameChange}
            />
        </div>
        <div> 
          number: <input 
          value={newNumber}
          onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map(person => 
          <Name key={person.name} name={person.name} number={person.number} />
        )}
      </ul>
    </div>
  )
}

export default App