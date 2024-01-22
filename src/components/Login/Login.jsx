import React from 'react'
import { Field, reduxForm } from 'redux-form'

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} >
      <div>
        <label htmlFor="login"></label>
        <Field name="login" component="input" type="text" placeholder='Login' />
      </div>
      <div>
        <label htmlFor="password"></label>
        <Field name="password" component="input" type="password" placeholder='Password' />
      </div>
      <div>
        <label htmlFor="rememberMe"></label>
        <Field name="rememberMe" component="input" type="checkbox" />remember me
      </div>
      <button type="submit">Login</button>
    </form>
  )
}
const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)

export const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData)
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}
