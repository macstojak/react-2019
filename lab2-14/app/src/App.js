import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'

import './App.css'

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  repeatPassword: '',
}

const RegisterSchema = yup.object().shape({
  firstName: yup
    .string()
    .required('Pole wymagane')
    .max(20, 'Maksymalna dlugosc 20 znakow'),
  lastName: yup
    .string()
    .required('Pole wymagane')
    .max(20, 'Maksymalna dlugosc 20 znakow'),
  email: yup.string().required('Pole wymagane').email('Niepoprawny adres'),
  password: yup.string().required('Pole wymagane'),
  repeatPassword: yup
    .string()
    .required('Pole wymagane')
    .oneOf([yup.ref('password')], 'Hasla sa rozne'),
})

function App() {
  const formik = useFormik({
    initialValues,
    // validateOnBlur: false,
    // validateOnChange: false,
    validationSchema: RegisterSchema,
    onSubmit: async (values) => {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      console.log(values)
    },
  })

  const {
    errors,
    handleSubmit,
    resetForm,
    getFieldProps,
    dirty,
    isValid,
    isSubmitting,
  } = formik

  const disabled = isSubmitting || !(dirty && isValid)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Imie
            <input
              type="text"
              className={errors.firstName ? 'errorInput' : ''}
              {...getFieldProps('firstName')}
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
              {...getFieldProps('lastName')}
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
              {...getFieldProps('email')}
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
              {...getFieldProps('password')}
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
              {...getFieldProps('repeatPassword')}
            />
            {errors.repeatPassword && (
              <span className="error">{errors.repeatPassword}</span>
            )}
          </label>
        </div>
        <button type="submit" disabled={disabled}>
          Zarejestruj
        </button>
        <button type="button" onClick={resetForm}>
          Wyczysc
        </button>
      </form>
    </div>
  )
}

export default App
