import { useEffect } from 'react'
import SectionTitle from '../components/ui/SectionTitle'
import Loader from '../components/ui/Loader'
import ErrorState from '../components/ui/ErrorState'
import AssinaturaTable from '../components/assinaturas/AssinaturaTable'
import { useAsync } from '../hooks/useAsync'
import { assinaturaService } from '../services/assinaturaService'

export default function AssinaturasPage() {
  const request = useAsync(assinaturaService.listar)

  useEffect(() => {
    request.execute()
  }, [])

  return (
    <div>
      <SectionTitle
        eyebrow="base de clientes"
        title="Lista de assinaturas"
        description="Visualização completa dos assinantes cadastrados no backend."
      />

      {request.loading && <Loader text="Carregando assinaturas..." />}
      {request.error && <ErrorState message={request.error} />}
      {!request.loading && !request.error && <AssinaturaTable data={Array.isArray(request.data) ? request.data : []} />}
    </div>
  )
}
