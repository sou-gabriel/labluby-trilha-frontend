import { Card } from './Card'

import classes from '../styles/NewMeetupForm.module.css'

export const NewMeetupForm = (props) => {
  const handleFormSubmit = (event) => {
    event.preventDefault()

    const titleInputValue = event.target.title.value
    const imageInputValue = event.target.image.value
    const addressInputValue = event.target.address.value 
    const descriptionInputValue = event.target.description.value

    props.onAddNewMeetup({ 
      title: titleInputValue, 
      image: imageInputValue, 
      address: addressInputValue, 
      description: descriptionInputValue
    })
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={handleFormSubmit}>
        <div className={classes.control}>
          <label htmlFor='title'>Meetup Title</label>
          <input type='text' required id='title' />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Meetup Image</label>
          <input type='url' required id='image' />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Meetup Address</label>
          <input type='text' required id='address' />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Meetup Description</label>
          <textarea required id='description' row='5' />
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  )
}