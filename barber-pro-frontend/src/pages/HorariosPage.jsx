import SectionTitle from '../components/ui/SectionTitle'
import ErrorState from '../components/ui/ErrorState'
import EmptyState from '../components/ui/EmptyState'
import Card from '../components/ui/Card'
import HorariosForm from '../components/agendamentos/HorariosForm'
import { useAsync } from '../hooks/useAsync'
import { agendamentoService } from '../services/agendamentoService'
import { formatDateTime } from '../utils/format'

export default function HorariosPage() {
  const request = useAsync(agendamentoService.consultarHorarios)
  const entries = request.data ? Object.entries(request.data) : []

  return (
    <div>
      <SectionTitle
        eyebrow="disponibilidade"
        title="Horários disponíveis"
        description="Visualize horários livres e indisponíveis entre duas datas."
      />

      <HorariosForm onSubmit={request.execute} loading={request.loading} />
      {request.error && <ErrorState message={request.error} />}

      {request.data && (
        <Card title="Resultado da consulta" subtitle="Leitura do HashMap<LocalDateTime, Boolean> retornado pelo backend.">
          {entries.length ? (
            <div className="availability-grid">
              {entries.map(([date, available]) => (
                <div key={date} className={`availability-card ${available ? 'ok' : 'off'}`}>
                  <strong>{formatDateTime(date)}</strong>
                  <span>{available ? 'Disponível' : 'Indisponível'}</span>
                </div>
              ))}
            </div>
          ) : (
            <EmptyState title="Nenhum horário encontrado" description="A API não retornou horários nesse intervalo." />
          )}
        </Card>
      )}
    </div>
  )
}
