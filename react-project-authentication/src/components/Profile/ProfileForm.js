import { useContext } from 'react';
import { AuthContext } from '../context/authContext';
import { useHistory } from 'react-router-dom';

import classes from './ProfileForm.module.css';

const apiKey = 'AIzaSyCKxbvUf7gLxwf0vjfzkZqr0rIy4_Q4d6s'
const newPasswordUrl = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${apiKey}`

const ProfileForm = () => {
  const history = useHistory()
  const { token } = useContext(AuthContext)

  const submitHandler = event => {
    event.preventDefault()

    const enteredNewPassword = event.target.newPassword.value

    // add validation...

    fetch(newPasswordUrl, {
      method: 'POST',
      body: JSON.stringify({
        idToken: token,
        password: enteredNewPassword, 
        returnSecureToken: false
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(() => {
      history.replace('/')
    })
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='newPassword'>New Password</label>
        <input type='password' minLength="7" id='newPassword' />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
