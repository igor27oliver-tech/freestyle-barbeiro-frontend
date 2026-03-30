import Card from '../ui/Card'
import EmptyState from '../ui/EmptyState'
import { formatDateTime, formatPhone } from '../../utils/format'

export default function AgendamentoTable({ data = [], title = 'Agendamentos', subtitle = 'Lista organizada de horários agendados.' }) {
  if (!data.length) {
    return <EmptyState title="Sem agendamentos" description="Nenhum agendamento retornado pela API." />
  }

  return (
    <Card title={title} subtitle={subtitle}>
      <div className="table-wrapper">
        <table className="modern-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Cliente</th>
              <th>Telefone</th>
              <th>Serviço</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id ?? index}>
                <td>{item.id ?? '-'}</td>
                <td>{item.nome ?? '-'}</td>
                <td>{formatPhone(item.telefone)}</td>
                <td>{item.tipoServico ?? '-'}</td>
                <td>{formatDateTime(item.data)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
