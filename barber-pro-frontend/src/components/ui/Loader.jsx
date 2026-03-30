export default function Loader({ text = 'Carregando...' }) {
  return (
    <div className="feedback-box">
      <div className="spinner" />
      <p>{text}</p>
    </div>
  )
}
