import { TipoUsuario } from "@/models/Login/LoginEnum"

export type LoginBase = {
  email: string;
  senha: string;
  // acessoUsuario: ListaAcessosUsuario | null;
}

// export type AcessoUsuario = {
//   chave: TipoUsuario;
//   valor: string;
// }

// export type ListaAcessosUsuario = AcessoUsuario[];

export type Login = LoginBase & { [key in keyof LoginBase]: string }