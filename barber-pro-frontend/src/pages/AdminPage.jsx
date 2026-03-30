import { useEffect } from 'react'
import SectionTitle from '../components/ui/SectionTitle'
import Loader from '../components/ui/Loader'
import ErrorState from '../components/ui/ErrorState'
import Card from '../components/ui/Card'
import AdminAgendamentosTable from '../components/agendamentos/AdminAgendamentosTable'
import { useAsync } from '../hooks/useAsync'
import { agendamentoService } from '../services/agendamentoService'

export default function AdminPage() {
  const request = useAsync(agendamentoService.listarAdmin)

  useEffect(() => {
    request.execute()
  }, [])

  const total = request.data ? Object.keys(request.data).length : 0

  return (
    <div>
      <SectionTitle
        eyebrow="administração"
        title="Painel administrativo"
        description="Tela adaptada ao retorno real do endpoint /adm/agendamentos."
      />

      {request.loading && <Loader text="Carregando mapa administrativo..." />}
      {request.error && <ErrorState message={request.error} />}

      {!request.loading && !request.error && (
        <>
          <Card title="Resumo operacional" subtitle="Leitura do endpoint administrativo em tempo real.">
            <div className="admin-highlight">
              <span>Total de entradas no mapa</span>
              <strong>{total}</strong>
            </div>
          </Card>
          <AdminAgendamentosTable data={request.data || {}} />
        </>
      )}
    </div>
  )
}
