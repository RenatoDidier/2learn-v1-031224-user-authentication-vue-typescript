import { TipoUsuarioEnum } from "@/models/Login/LoginEnum";

type LoginBase = {
  email: string;
  senha: string;
}

export type Login = LoginBase & { [key in keyof LoginBase]: string }

export type ObjetoChaveValor = {
  chave: string,
  valor: number,
  selecionado: boolean
}
