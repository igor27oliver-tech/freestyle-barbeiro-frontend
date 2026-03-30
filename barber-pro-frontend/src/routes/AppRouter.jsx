import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import DashboardPage from '../pages/DashboardPage'
import NovoAgendamentoPage from '../pages/NovoAgendamentoPage'
import HorariosPage from '../pages/HorariosPage'
import AgendamentosPage from '../pages/AgendamentosPage'
import AssinaturaPage from '../pages/AssinaturaPage'
import AssinaturasPage from '../pages/AssinaturasPage'
import AdminPage from '../pages/AdminPage'

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="agendamentos/novo" element={<NovoAgendamentoPage />} />
        <Route path="agendamentos/horarios" element={<HorariosPage />} />
        <Route path="agendamentos/lista" element={<AgendamentosPage />} />
        <Route path="assinaturas/nova" element={<AssinaturaPage />} />
        <Route path="assinaturas/lista" element={<AssinaturasPage />} />
        <Route path="admin" element={<AdminPage />} />
      </Route>
    </Routes>
  )
}
