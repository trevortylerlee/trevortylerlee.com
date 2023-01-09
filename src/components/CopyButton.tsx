import Toastify from './Toastify';
import toast from 'react-hot-toast';
import style from '../styles/CopyButton.module.css'

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

  const copy = async (message: string) => {
    try {
      navigator.clipboard.writeText(message)
      return true
    } catch (err) {
      console.log(err)
      return false
    }
  }

  return <>
    <button 
      aria-label={message === 'trevortylerlee@gmail.com'
        ? 'Copy email' : 'Copy phone number'}
      onClick={notify}
      style={style
        // {
        //   borderRadius: '8px',
        //   padding: '0.75rem',
        //   fontWeight: 'bold',
        //   background: '#ffffff',
        //   border: 'none',
        //   boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
        //   cursor: 'pointer',
        //   transition: '0.2s'
        // }
      }
      >{message}</button>
  </>
})