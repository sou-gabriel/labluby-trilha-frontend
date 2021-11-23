import Head from 'next/head'
import { NewMeetupForm } from '../components/NewMeetupForm'

const NewMeetup = () => {
  const addNewMeetup = async (meetupData) => {
    fetch('/api/new-meetup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(meetupData)
    })
  }

  return (
    <>
      <Head>
        <title>Add a New Meetup</title>
        <meta
          name='description'
          content='Add your own meetups and create amazing networking opportunities!'
        />
      </Head>
      <NewMeetupForm onAddNewMeetup={addNewMeetup} />
    </>
  )
}

export default NewMeetup
