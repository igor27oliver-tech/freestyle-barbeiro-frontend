export default function EmptyState({ title = 'Sem dados', description = 'Nenhum dado encontrado.' }) {
  return (
    <div className="feedback-box">
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  )
}
