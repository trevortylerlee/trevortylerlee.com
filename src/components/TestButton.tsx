import Toastify from './Toastify';
import toast from 'react-hot-toast';

export default Toastify(function Button() {
  const notify = () => {
    toast.success('Here is the toast')
    console.log('toasted')
  }

  return <>
    <button onClick={notify}>Notify</button>
  </>
})