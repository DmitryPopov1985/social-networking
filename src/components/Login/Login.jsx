import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../common/FormsControls/FormsControls'
import { required } from '../../utils/validators/validators'

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} >
      <div>
        <label htmlFor="login"></label>
        <Field name="login" component={Input} type="text" placeholder='Login'
         validate={[required]}
        />
      </div>
      <div>
        <label htmlFor="password"></label>
        <Field name="password" component={Input} type="password" placeholder='Password'
         validate={[required]}
        />
      </div>
      <div>
        <label htmlFor="rememberMe"></label>
        <Field name="rememberMe" component={Input} type="checkbox" />remember me
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
