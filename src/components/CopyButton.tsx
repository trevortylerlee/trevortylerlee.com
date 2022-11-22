import style from '../styles/CopyButton.module.css'

export default function CopyButton({ label }) {
  async function handleClick() {
    let text = label
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.log(err)
    }
  }

  return <button style={style} onClick={handleClick}>{label}</button>
}