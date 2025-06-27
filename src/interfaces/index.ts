export interface BookReq {
  titulo: string;
  autor: string;
  editora: string;
  genero: string;
  link: string;
}

export interface UserReq {
  nome: string;
  email: string;
  senha: string;
}

export interface LoginReq {
  email: string;
  senha: string;
}

export interface UseMutationQ {
  onSuccess?: () => void;
  onError?: (error: any) => void;
}
