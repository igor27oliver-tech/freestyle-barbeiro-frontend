# Barber Pro Frontend

Frontend profissional em React + Vite para sua API Spring Boot de agendamento de barbearia.

## Endpoints usados
- `POST /agendamento/criar`
- `GET /agendamento/test`
- `POST /agendamento/horarios`
- `GET /adm/agendamentos`
- `POST /assinatura/assinar`
- `GET /assinatura/listaCompleta`

## JSONs identificados no backend enviado

### POST `/agendamento/criar`
Request:
```json
{
  "tipoServico": "Corte + Barba",
  "nome": "Igor",
  "telefone": "11999999999",
  "data": "2026-03-30T14:00:00"
}
```

Response:
```json
{
  "id": 1,
  "nome": "Igor",
  "telefone": "11999999999",
  "data": "2026-03-30T14:00:00",
  "tipoServico": "Corte + Barba"
}
```

### GET `/agendamento/test`
Response:
```json
[
  {
    "id": 1,
    "nome": "Igor",
    "telefone": "11999999999",
    "data": "2026-03-30T14:00:00",
    "tipoServico": "Corte + Barba"
  }
]
```

### POST `/agendamento/horarios`
Request:
```json
{
  "dataInicio": "2026-03-30T08:00:00",
  "dataFim": "2026-03-30T18:00:00"
}
```

Response:
```json
{
  "2026-03-30T08:00:00": true,
  "2026-03-30T09:00:00": false
}
```

### GET `/adm/agendamentos`
Response:
```json
{
  "2026-03-30T14:00:00": "Igor - Corte + Barba - 11999999999"
}
```

### POST `/assinatura/assinar`
Request:
```json
{
  "nome": "Igor",
  "cpf": "12345678900",
  "telefone": "11999999999"
}
```

Response:
```json
{
  "id": 1,
  "nome": "Igor",
  "cpf": "12345678900",
  "telefone": "11999999999"
}
```

### GET `/assinatura/listaCompleta`
Response:
```json
[
  {
    "id": 1,
    "nome": "Igor",
    "cpf": "12345678900",
    "telefone": "11999999999"
  }
]
```

## Como rodar
```bash
npm install
npm run dev
```

## Observação
Se aparecer erro de CORS, adicione configuração `@CrossOrigin` no backend Spring Boot.
