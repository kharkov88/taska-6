import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input , Label} from 'semantic-ui-react'
import "./add.css"

const SimpleForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form className="form" onSubmit={handleSubmit}>
    <div>
      <div className="form-row">
        <Label >Название:</Label>
        <div>
        <Input>
            <Field
            name="name"
            component="input"
            type="text"
            placeholder="Название книги"
            />
        </Input>    
        </div>
      </div>
      <div className="form-row">
      <Label >Автор:</Label>
        <div>
        <Input>
          <Field
            name="author"
            component="input"
            type="text"
            placeholder="Автор"
          />
        </Input>
        </div>
      </div>
      <div className="form-row">
      <Label >Год издания:</Label>
        <div>
        <Input>
          <Field
            name="year"
            component="input"
            type="text"
            placeholder="Год издания"
          />
        </Input>
        </div>
      </div>
      <div className="form-row">
      <Label >src image:</Label>
        <div>
        <Input>
          <Field
            name="image_url"
            component="input"
            type="text"
            placeholder="src image"
          />
        </Input>
        </div>
      </div>
    </div>

    <div> 
      <div className="form-row">
        <Label >Краткое описание:</Label>
        <div>
          <Field name="except" component="textarea"  rows="3" cols="45"/>
        </div>
      </div>

      <div className="form-row">
        <Label >Описание:</Label>
        <div>
          <Field name="content" component="textarea"  rows="8" cols="45"/>
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </div>
    </form>
  )
}

export default reduxForm({
  form: 'simple' // a unique identifier for this form
})(SimpleForm)
