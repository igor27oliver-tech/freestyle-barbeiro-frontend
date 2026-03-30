import { useEffect } from 'react'
import SectionTitle from '../components/ui/SectionTitle'
import Loader from '../components/ui/Loader'
import ErrorState from '../components/ui/ErrorState'
import StatCard from '../components/dashboard/StatCard'
import Card from '../components/ui/Card'
import { useAsync } from '../hooks/useAsync'
import { agendamentoService } from '../services/agendamentoService'
import { assinaturaService } from '../services/assinaturaService'

export default function DashboardPage() {
  const agendamentos = useAsync(agendamentoService.listarPublico)
  const assinaturas = useAsync(assinaturaService.listar)
  const admin = useAsync(agendamentoService.listarAdmin)

  useEffect(() => {
    agendamentos.execute()
    assinaturas.execute()
    admin.execute()
  }, [])

  const loading = agendamentos.loading || assinaturas.loading || admin.loading
  const error = agendamentos.error || assinaturas.error || admin.error

  const totalAgendamentos = Array.isArray(agendamentos.data) ? agendamentos.data.length : 0
  const totalAssinaturas = Array.isArray(assinaturas.data) ? assinaturas.data.length : 0
  const totalAdmin = admin.data ? Object.keys(admin.data).length : 0

  return (
    <div>
      <SectionTitle
        eyebrow="visão geral"
        title="Dashboard premium"
        description="Resumo operacional do seu sistema de barbearia com leitura direta da API Spring Boot."
      />

      {loading && <Loader text="Buscando indicadores do sistema..." />}
      {error && <ErrorState message={error} />}

      {!loading && !error && (
        <>
          <div className="stats-grid">
            <StatCard label="Agendamentos" value={totalAgendamentos} helper="Retorno de /agendamento/test" />
            <StatCard label="Assinaturas" value={totalAssinaturas} helper="Retorno de /assinatura/listaCompleta" />
            <StatCard label="Painel admin" value={totalAdmin} helper="Entradas do HashMap administrativo" />
          </div>

          <Card title="Resumo técnico" subtitle="Como o frontend foi adaptado ao backend enviado.">
            <ul className="summary-list">
              <li>Cadastro de agendamento envia: tipoServico, nome, telefone e data.</li>
              <li>Consulta de horários envia: dataInicio e dataFim.</li>
              <li>Painel administrativo lê um objeto com data como chave e detalhes como valor.</li>
              <li>Cadastro de assinatura envia: nome, cpf e telefone.</li>
            </ul>
          </Card>
        </>
      )}
    </div>
  )
}
