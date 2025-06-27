import { useMutation, useQuery } from "@tanstack/react-query";
import * as API from "@/queries/api/user";
import { LoginReq, UseMutationQ, UserReq } from "@/interfaces";

export function useGetUserById(id: string) {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () => API.getUserById(id),
  });
}

export function useCreateUser({ onSuccess, onError }: UseMutationQ) {
  return useMutation({
    mutationKey: ["createUser"],
    mutationFn: (user: UserReq) => API.createUser(user),
    onSuccess,
    onError,
  });
}

export function useLoginUser({ onSuccess, onError }: UseMutationQ) {
  return useMutation({
    mutationKey: ["loginUser"],
    mutationFn: (user: LoginReq) => API.loginUser(user),
    onSuccess,
    onError,
  });
}
