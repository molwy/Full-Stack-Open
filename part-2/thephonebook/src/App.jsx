  import { useState } from 'react'
  import Filter from './Components/Filter.jsx'
  import Persons from './Components/Persons.jsx'
  import PersonForm from './Components/PersonForm.jsx'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 }
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

      <Filter filterState = {filter} updateFilterState = {updateFilter} />

      <h3>New Contact</h3>

      <PersonForm addName = {addName} newName = {newName} handleNameChange = {handleNameChange} newNumber = {newNumber} handleNumberChange = {handleNumberChange} />

      <h3>Numbers</h3>

      <Persons personsToShow = {personsToShow} /> 

    </div>
  )
}

export default App