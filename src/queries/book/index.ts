import { useMutation, useQuery } from "@tanstack/react-query";
import * as API from "@/queries/api/book";
import { BookReq } from "@/interfaces";

export function useGetBooks() {
  return useQuery({
    queryKey: ["books"],
    queryFn: API.getBooks,
  });
}

export function useGetBookById(id: string) {
  return useQuery({
    queryKey: ["book", id],
    queryFn: () => API.getBookById(id),
  });
}

export function useCreateBook(book: BookReq) {
  return useMutation({
    mutationKey: ["createBook"],
    mutationFn: () => API.createBook(book),
  });
}
