import { LoginReq, UserReq } from "@/interfaces";
import { axiosInstance } from "@/queries/api";

export async function getUserById(id: string) {
  const { data } = await axiosInstance.get(`/user/${id}`);

  return data;
}

export async function loginUser(user: LoginReq) {
  const { data } = await axiosInstance.post("/user/login", user);

  return data;
}

export async function createUser(user: UserReq) {
  const { data } = await axiosInstance.post("/user/create", user);

  return data;
}

export async function updateUser(id: string, user: UserReq) {
  const { data } = await axiosInstance.put(`/user/${id}`, user);

  return data;
}
