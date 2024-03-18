import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../common/FormsControls/FormsControls'
import { required } from '../../utils/validators/validators'
import { connect } from 'react-redux'
import { login } from '../../redux/auth-reducer'
import { Navigate } from 'react-router-dom'

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} >
      <div>
        <label htmlFor="login"></label>
        <Field name="email" component={Input} type="text" placeholder='Email'
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

 const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe )
  }

  if (props.isAuth) {
    return <Navigate to={'/profile'}/>
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth 
  }
}
export default connect(mapStateToProps, {login})(Login)
