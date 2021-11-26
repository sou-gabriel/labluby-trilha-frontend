import { useHistory } from 'react-router-dom'
import { NewMeetupForm } from "../components/NewMeetupForm/NewMeetupForm"

export const NewMeetup = () => {
  const history = useHistory()

  const addNewMeetup = async (meetup) => {
    try {
      const response = await fetch('https://react-app-7de28-default-rtdb.firebaseio.com/meetups.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(meetup)
      })

      if (!response.ok) {
        throw new Error('Error!')
      }

      history.replace('/')
    } catch (error) {
      console.log(error.message)
    }
  }
  
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddNewMeetup={addNewMeetup} />
    </section>
  )
}