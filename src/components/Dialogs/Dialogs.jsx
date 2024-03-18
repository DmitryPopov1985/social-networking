import React from 'react'
import cl from './Dialogs.module.css'
import { Message } from './Message/Message'
import { DialogItem } from './DialogItem/DialogItem'
import { Navigate } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../common/FormsControls/FormsControls'
import { maxLengthCreator, minLengthCreator, required } from '../../utils/validators/validators'


export function Dialogs(props) {
console.log(props)
  const addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody)
  }
  if (!props.isAuth) {
    return <Navigate to={'/login'} />
  }
  return (
    <div className={cl.dialogsWrapper} >
      <div className={cl.dialogs} >
        {props.dialogsData.map(el => <DialogItem key={el.id} name={el.name} id={el.id} />)}
      </div>
      <div className={cl.messages} >
        {props.messagesData.map(el => <Message key={el.id} message={el.message} />)}
      </div>
      <AddMessageReduxForm onSubmit={addNewMessage} />
    </div>
  )
}

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} >
      <div>
        <Field name="newMessageBody" component={Textarea} placeholder='Напишите сообщение'
          validate={[required, maxLengthCreator(100), minLengthCreator(2)]}
        />
      </div>
      <div><button>Отправить</button></div>
    </form>
  )
}
const AddMessageReduxForm = reduxForm({
  form: 'dialogAddMessageForm'
})(AddMessageForm)