import axios, { AxiosResponse } from "axios";

const URL_SERVICO = 'http://localhost:5206';
const TIMEOUT_SERVICO = 5000;

const api = axios.create({
  baseURL: URL_SERVICO,
  timeout: TIMEOUT_SERVICO
});

export async function RequestGetAsync(
  endpoint: string
)
{
  return await api.get(endpoint);
}

export async function RequestPostAsync(
  endpoint: string,
  dto: object
)
{
  return await api.post(endpoint, dto);
}

export async function RequestPutAsync(
  endpoint: string,
  dto: object
)
{
  return await api.put(endpoint, dto);
}

export async function RequestDeleteAsync(
  endpoint: string
)
{
  return await api.delete(endpoint);
}

api.interceptors.response.use(
  (config: AxiosResponse) => {
    return config;
  },
  erro => {
    ControleAcesso(erro);
  }
)

function ControleAcesso(erro: any) {
  if (erro.response.status == 401) {
    console.log('Credenciais');
  }
}