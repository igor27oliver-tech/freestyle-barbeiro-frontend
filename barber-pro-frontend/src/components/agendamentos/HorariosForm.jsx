import { useState } from 'react'
import Card from '../ui/Card'
import Input from '../ui/Input'
import Button from '../ui/Button'

export default function HorariosForm({ onSubmit, loading }) {
  const [form, setForm] = useState({ dataInicio: '', dataFim: '' })

  function handleChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <Card title="Consultar horários" subtitle="Pesquisa de disponibilidade no formato esperado pelo endpoint /agendamento/horarios.">
      <form className="form-grid" onSubmit={(e) => { e.preventDefault(); onSubmit(form) }}>
        <Input label="Data início" type="datetime-local" name="dataInicio" value={form.dataInicio} onChange={handleChange} required />
        <Input label="Data fim" type="datetime-local" name="dataFim" value={form.dataFim} onChange={handleChange} required />
        <div className="form-actions form-col-2">
          <Button type="submit" disabled={loading}>{loading ? 'Consultando...' : 'Consultar horários'}</Button>
        </div>
      </form>
    </Card>
  )
}
