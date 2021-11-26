import { useEffect, useState } from 'react'
import { MeetupList } from '../components/MeetupList/MeetupList'

export const AllMeetups = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [meetups, setMeetups] = useState([])

  useEffect(() => {
    const fetchMeetups = async () => {
      try {
        setIsLoading(true)

        const response = await fetch(
          'https://react-app-7de28-default-rtdb.firebaseio.com/meetups.json'
        )

        if (!response.ok) {
          throw new Error('Error!')
        }

        const data = await response.json()

        const meetupsWithId = Object.values(data).map((meetup) => ({
          ...meetup,
          id: Math.random()
        }))

        console.log(meetupsWithId)

        setMeetups(meetupsWithId)
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
        console.log(error.message)
      }
    }

    fetchMeetups()
  }, [])

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    )
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={meetups} />
    </section>
  )
}
