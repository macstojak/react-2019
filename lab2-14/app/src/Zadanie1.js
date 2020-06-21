import React, { useState } from 'react'
import './App.css'

const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email)

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  repeatPassword: '',
}

function App() {
  const [values, setValues] = useState({ ...initialValues })
  const [errors, setErrors] = useState({})

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (!validate()) {
      return
    }
    console.log(values)
  }

  const reset = () => {
    setValues({ ...initialValues })
    setErrors({})
  }

  const validate = () => {
    const validateErrors = {}

    if (!values.firstName) {
      validateErrors.firstName = 'Wymagane'
    } else if (values.firstName.length > 20) {
      validateErrors.firstName = 'Maksymalna dlugosc 20'
    }

    if (!values.lastName) {
      validateErrors.lastName = 'Wymagane'
    } else if (values.lastName.length > 20) {
      validateErrors.lastName = 'Maksymalna dlugosc 20'
    }

    if (!values.email) {
      validateErrors.email = 'Wymagane'
    } else if (!isValidEmail(values.email)) {
      validateErrors.email = 'Niepoprawny email'
    }

    if (!values.password) {
      validateErrors.password = 'Wymagane'
    }

    if (!values.repeatPassword) {
      validateErrors.repeatPassword = 'Wymagane'
    } else if (values.repeatPassword !== values.password) {
      validateErrors.repeatPassword = 'Haslo nie pasuje'
    }

    setErrors(validateErrors)

    return Object.keys(validateErrors).length === 0
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label>
            Imie
            <input
              type="text"
              className={errors.firstName ? 'errorInput' : ''}
              name="firstName"
              value={values.firstName}
              onChange={onChange}
            />
            {errors.firstName && (
              <span className="error">{errors.firstName}</span>
            )}
          </label>
        </div>
        <div>
          <label>
            Nazwisko
            <input
              type="text"
              className={errors.lastName ? 'errorInput' : ''}
              name="lastName"
              value={values.lastName}
              onChange={onChange}
            />
            {errors.lastName && (
              <span className="error">{errors.lastName}</span>
            )}
          </label>
        </div>
        <div>
          <label>
            Email
            <input
              type="text"
              className={errors.email ? 'errorInput' : ''}
              name="email"
              value={values.email}
              onChange={onChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </label>
        </div>
        <div>
          <label>
            Haslo
            <input
              type="password"
              className={errors.password ? 'errorInput' : ''}
              name="password"
              value={values.password}
              onChange={onChange}
            />
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
          </label>
        </div>
        <div>
          <label>
            Powtorz haslo
            <input
              type="password"
              className={errors.repeatPassword ? 'errorInput' : ''}
              name="repeatPassword"
              value={values.repeatPassword}
              onChange={onChange}
            />
            {errors.repeatPassword && (
              <span className="error">{errors.repeatPassword}</span>
            )}
          </label>
        </div>
        <button type="submit">Zarejestruj</button>
        <button type="button" onClick={reset}>
          Wyczysc
        </button>
      </form>
    </div>
  )
}

export default App
