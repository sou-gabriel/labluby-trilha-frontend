import Head from 'next/head'
import { MongoClient } from 'mongodb'
import { MeetupList } from '../components/MeetupList'

// export const getServerSideProps = async (context) => {
//   // fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   }
// }

export const getStaticProps = async () => {
  // Fetch data from an API
  const client = await MongoClient.connect(
    'mongodb+srv://gabrielramos:vencedor0012@nextjs-project.dvvoq.mongodb.net/meetups?retryWrites=true&w=majority'
  )
  const db = client.db()
  const meetupsCollection = db.collection('meetups')
  const meetups = await meetupsCollection.find().toArray()

  client.close()

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        id: meetup._id.toString(),
        title: meetup.title,
        image: meetup.image,
        address: meetup.address
      })),
      revalidate: 10
    }
  }
}

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>Meetups</title>
        <meta
          name='description'
          content='Browse a huge list of highly active React meetups!'
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  )
}

export default HomePage
