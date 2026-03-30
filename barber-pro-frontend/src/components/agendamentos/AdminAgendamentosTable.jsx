import Card from '../ui/Card'
import EmptyState from '../ui/EmptyState'
import { formatDateTime } from '../../utils/format'

export default function AdminAgendamentosTable({ data = {} }) {
  const entries = Object.entries(data || {})

  if (!entries.length) {
    return <EmptyState title="Sem registros administrativos" description="O mapa retornado por /adm/agendamentos está vazio." />
  }

  return (
    <Card title="Painel administrativo" subtitle="Leitura do HashMap retornado pelo backend.">
      <div className="table-wrapper">
        <table className="modern-table">
          <thead>
            <tr>
              <th>Data</th>
              <th>Detalhes</th>
            </tr>
          </thead>
          <tbody>
            {entries.map(([date, details]) => (
              <tr key={date}>
                <td>{formatDateTime(date)}</td>
                <td>{details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
