import { useEffect } from 'react'
import SectionTitle from '../components/ui/SectionTitle'
import Loader from '../components/ui/Loader'
import ErrorState from '../components/ui/ErrorState'
import AgendamentoTable from '../components/agendamentos/AgendamentoTable'
import { useAsync } from '../hooks/useAsync'
import { agendamentoService } from '../services/agendamentoService'

export default function AgendamentosPage() {
  const request = useAsync(agendamentoService.listarPublico)

  useEffect(() => {
    request.execute()
  }, [])

  return (
    <div>
      <SectionTitle
        eyebrow="listagem"
        title="Lista de agendamentos"
        description="Consulta completa usando o endpoint /agendamento/test."
      />

      {request.loading && <Loader text="Carregando agendamentos..." />}
      {request.error && <ErrorState message={request.error} />}
      {!request.loading && !request.error && <AgendamentoTable data={Array.isArray(request.data) ? request.data : []} />}
    </div>
  )
}
