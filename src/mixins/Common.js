import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export default {
  name: "CommonMixin",

  methods: {
    formatDate (dateISOString) {
      return format(new Date(dateISOString), 'dd/MM/yyyy', { localte: ptBR })
    }
  }
}