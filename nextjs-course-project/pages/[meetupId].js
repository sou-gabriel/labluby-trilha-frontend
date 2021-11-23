import Head from 'next/head'
import { MongoClient, ObjectId } from 'mongodb'
import { MeetupDetail } from '../components/MeetupDetail'

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(
    'mongodb+srv://gabrielramos:vencedor0012@nextjs-project.dvvoq.mongodb.net/meetups?retryWrites=true&w=majority'
  )
  const db = client.db()
  const meetupsCollection = db.collection('meetups')
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray()

  client.close()

  return {
    fallback: 'blocking',
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() }
    }))
  }
}

export const getStaticProps = async (context) => {
  // fetch data for a single meetup
  const meetupId = context.params.meetupId

  const client = await MongoClient.connect(
    'mongodb+srv://gabrielramos:vencedor0012@nextjs-project.dvvoq.mongodb.net/meetups?retryWrites=true&w=majority'
  )
  const db = client.db()
  const meetupsCollection = db.collection('meetups')
  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId)
  })

  client.close()

  return {
    props: {
      meetup: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        address: selectedMeetup.address,
        description: selectedMeetup.description
      }
    }
  }
}

const MeetupDetails = (props) => {
  return (
    <>
      <Head>
        <title>{props.meetup.title}</title>
        <meta name='description' content={props.meetup.description} />
      </Head>
      <MeetupDetail meetup={props.meetup} />
    </>
  )
}

export default MeetupDetails
