import { useState } from 'react'
import Card from '../ui/Card'
import Input from '../ui/Input'
import Button from '../ui/Button'

const initialState = {
  tipoServico: '',
  nome: '',
  telefone: '',
  data: ''
}

export default function AgendamentoForm({ onSubmit, loading }) {
  const [form, setForm] = useState(initialState)

  function handleChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    await onSubmit(form)
    setForm(initialState)
  }

  return (
    <Card title="Novo agendamento" subtitle="Cadastre um horário com os campos exatos do seu backend Spring Boot.">
      <form className="form-grid" onSubmit={handleSubmit}>
        <Input label="Tipo de serviço" name="tipoServico" value={form.tipoServico} onChange={handleChange} placeholder="Ex: Corte + Barba" required />
        <Input label="Nome do cliente" name="nome" value={form.nome} onChange={handleChange} required />
        <Input label="Telefone" name="telefone" value={form.telefone} onChange={handleChange} required />
        <Input label="Data e hora" type="datetime-local" name="data" value={form.data} onChange={handleChange} required />
        <div className="form-actions form-col-2">
          <Button type="submit" disabled={loading}>{loading ? 'Salvando...' : 'Criar agendamento'}</Button>
        </div>
      </form>
    </Card>
  )
}
