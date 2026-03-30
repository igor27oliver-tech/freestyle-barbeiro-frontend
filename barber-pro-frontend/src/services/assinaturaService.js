import api from './api'

export const assinaturaService = {
  assinar: async (payload) => {
    const { data } = await api.post('/assinatura/assinar', payload)
    return data
  },

  listar: async () => {
    const { data } = await api.get('/assinatura/listaCompleta')
    return data
  }
}
