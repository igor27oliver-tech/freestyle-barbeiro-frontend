export default function ErrorState({ message = 'Ocorreu um erro.' }) {
  return (
    <div className="feedback-box error-box">
      <h4>Erro</h4>
      <p>{message}</p>
    </div>
  )
}
