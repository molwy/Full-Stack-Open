  import { useState, useEffect } from 'react'
  import Filter from './Components/Filter.jsx'
  import Persons from './Components/Persons.jsx'
  import PersonForm from './Components/PersonForm.jsx'
  import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([ ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    personService
      .getAll()
      .then(initialPersons => {
        console.log('promise fulfilled')
        setPersons(initialPersons)
      })
  }, [])

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
      personService
        .create(nameObject)
        .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
    })
  }
}
const removeName = (id) => {
  if (window.confirm("Are you sure you want to delete this name?")) {
    const newPersonList = persons.filter(person => person.id !== id)
    personService
      .removeName(id)
      .then(() => {
        setPersons(newPersonList)
      })
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

      <Filter filterState={filter} updateFilterState={updateFilter} />

      <h3>New Contact</h3>

      <PersonForm addName={addName} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />

      <h3>Numbers</h3>

      <Persons personsToShow={personsToShow} deleteFunction={removeName} /> 

    </div>
    )
}

export default App