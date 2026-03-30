import Card from '../ui/Card'
import EmptyState from '../ui/EmptyState'
import { formatPhone } from '../../utils/format'

export default function AssinaturaTable({ data = [] }) {
  if (!data.length) {
    return <EmptyState title="Sem assinaturas" description="Nenhum assinante retornado pela API." />
  }

  return (
    <Card title="Lista de assinaturas" subtitle="Clientes cadastrados para acompanhamento administrativo.">
      <div className="table-wrapper">
        <table className="modern-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>CPF</th>
              <th>Telefone</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id ?? index}>
                <td>{item.id ?? '-'}</td>
                <td>{item.nome ?? '-'}</td>
                <td>{item.cpf ?? '-'}</td>
                <td>{formatPhone(item.telefone)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
