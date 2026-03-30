import api from './api'

export const agendamentoService = {
  criar: async (payload) => {
    const { data } = await api.post('/agendamento/criar', payload)
    return data
  },

  listarPublico: async () => {
    const { data } = await api.get('/agendamento/test')
    return data
  },

  consultarHorarios: async (payload) => {
    const { data } = await api.post('/agendamento/horarios', payload)
    return data
  },

  listarAdmin: async () => {
    const { data } = await api.get('/adm/agendamentos')
    return data
  }
}
