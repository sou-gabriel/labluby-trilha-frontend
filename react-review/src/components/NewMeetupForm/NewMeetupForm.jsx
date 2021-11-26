import { Wrapper } from '../Wrapper/Wrapper'

import classes from './NewMeetupForm.module.css'

export const NewMeetupForm = (props) => {
  const handleNewMeetupSubmit = (event) => {
    event.preventDefault()
  
    const meetup = {
      id: Date.now(),
      title: event.target.title.value,
      image: event.target.image.value,
      address: event.target.address.value,
      description: event.target.description.value
    }

    props.onAddNewMeetup(meetup)
  }

  return (
    <Wrapper>
      <form className={classes.form} onSubmit={handleNewMeetupSubmit}>
        <div className={classes.control}> 
          <label htmlFor='title'>Title</label>
          <input type='text'required id='title' />
        </div>

        <div className={classes.control}> 
          <label htmlFor='image'>Image</label>
          <input type='url'required id='image' />
        </div>

        <div className={classes.control}> 
          <label htmlFor='address'>Address</label>
          <input type='text'required id='address' />
        </div>

        <div className={classes.control}> 
          <label htmlFor='description'>Description</label>
          <textarea rows='5' required id='description' />
        </div>

        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Wrapper>
  )
}