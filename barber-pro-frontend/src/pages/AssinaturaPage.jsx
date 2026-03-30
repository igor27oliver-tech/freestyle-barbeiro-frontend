import SectionTitle from '../components/ui/SectionTitle'
import ErrorState from '../components/ui/ErrorState'
import Card from '../components/ui/Card'
import AssinaturaForm from '../components/assinaturas/AssinaturaForm'
import { useAsync } from '../hooks/useAsync'
import { assinaturaService } from '../services/assinaturaService'

export default function AssinaturaPage() {
  const request = useAsync(assinaturaService.assinar)

  return (
    <div>
      <SectionTitle
        eyebrow="clientes"
        title="Cadastrar assinatura"
        description="Formulário preparado com os campos do DTO AssinaturaRequest."
      />

      {request.error && <ErrorState message={request.error} />}
      <AssinaturaForm onSubmit={request.execute} loading={request.loading} />

      {request.data && (
        <Card title="Assinatura criada" subtitle="Resposta recebida da API.">
          <pre className="code-preview">{JSON.stringify(request.data, null, 2)}</pre>
        </Card>
      )}
    </div>
  )
}
