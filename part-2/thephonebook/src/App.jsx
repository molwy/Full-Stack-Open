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
    { name: 'Arto Hellas', number: '111-222-3333' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit = {addName}>
        <div>
          name: <input 
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
        {persons.map(person => 
          <Name key={person.name} name={person.name} number={person.number} />
        )}
      </ul>
    </div>
  )
}

export default App