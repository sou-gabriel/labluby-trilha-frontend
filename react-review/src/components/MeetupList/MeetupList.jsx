import { MeetupItem } from '../MeetupItem/MeetupItem'

import classes from './MeetupList.module.css'

export const MeetupList = (props) => {
  props.meetups.forEach((meetup) => {
    console.log(meetup)
  })

  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem key={meetup.id} meetup={meetup} />
      ))}
    </ul>
  )
}
