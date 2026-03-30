import SectionTitle from '../components/ui/SectionTitle'
import ErrorState from '../components/ui/ErrorState'
import Card from '../components/ui/Card'
import AgendamentoForm from '../components/agendamentos/AgendamentoForm'
import { useAsync } from '../hooks/useAsync'
import { agendamentoService } from '../services/agendamentoService'

export default function NovoAgendamentoPage() {
  const request = useAsync(agendamentoService.criar)

  return (
    <div>
      <SectionTitle
        eyebrow="cadastro"
        title="Novo agendamento"
        description="Crie um agendamento com o payload exato esperado pelo endpoint /agendamento/criar."
      />

      {request.error && <ErrorState message={request.error} />}
      <AgendamentoForm onSubmit={request.execute} loading={request.loading} />

      {request.data && (
        <Card title="Agendamento criado" subtitle="Resposta recebida da API.">
          <pre className="code-preview">{JSON.stringify(request.data, null, 2)}</pre>
        </Card>
      )}
    </div>
  )
}
