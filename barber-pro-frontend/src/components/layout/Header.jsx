export default function Header() {
  const today = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'full' }).format(new Date())

  return (
    <header className="topbar">
      <div>
        <span className="eyebrow">barbearia moderna</span>
        <h2>Sistema de agendamento e assinaturas</h2>
        <p className="topbar-date">{today}</p>
      </div>
      <div className="topbar-badge">API local</div>
    </header>
  )
}
