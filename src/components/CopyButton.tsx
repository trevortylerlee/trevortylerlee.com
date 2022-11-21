export default function CopyButton({ label }) {
  async function handleClick() {
    let text = label
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.log(err)
    }
  }


  return <button style={{
    cursor: 'pointer',
    marginTop: '1rem',
    padding: '0.25rem 0.5rem'
  }} onClick={handleClick}>{label}</button>
}