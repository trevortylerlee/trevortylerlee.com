import Toastify from './Toastify';
import toast from 'react-hot-toast';
import style from '../styles/TestButton.module.css'

export default Toastify(function Button({message}) {
  const notify = () => {
    if (message === 'trevortylerlee@gmail.com') {
      try {
        copy(message) && toast.success('Email copied!')
      } catch (err) {
        console.log(err)
        toast.error('Error copying to clipboard')
      }
    } else {
      try {
        copy(message) && toast.success('Phone number copied!')
      } catch (err) {
        console.log(err)
        toast.error('Error copying to clipboard')
      }
    }
  }

  const copy = async (message) => {
    try {
      navigator.clipboard.writeText(message)
      return true
    } catch (err) {
      console.log(err)
      return false
    }
  }

  return <>
    <button style={style} onClick={notify}>{message}</button>
  </>
})