import { useState } from 'react'
import Card from '../ui/Card'
import Input from '../ui/Input'
import Button from '../ui/Button'

const initialState = {
  nome: '',
  cpf: '',
  telefone: ''
}

export default function AssinaturaForm({ onSubmit, loading }) {
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
    <Card title="Nova assinatura" subtitle="Cadastro alinhado com o DTO AssinaturaRequest do seu backend.">
      <form className="form-grid" onSubmit={handleSubmit}>
        <Input label="Nome" name="nome" value={form.nome} onChange={handleChange} required />
        <Input label="CPF" name="cpf" value={form.cpf} onChange={handleChange} required />
        <Input label="Telefone" name="telefone" value={form.telefone} onChange={handleChange} required />
        <div className="form-actions form-col-2">
          <Button type="submit" disabled={loading}>{loading ? 'Salvando...' : 'Cadastrar assinatura'}</Button>
        </div>
      </form>
    </Card>
  )
}
