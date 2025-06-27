import { BookReq } from "@/interfaces";
import { axiosInstance } from "@/queries/api";

console.log("NEXT_API_URL:", process.env.NEXT_API_URL);

export async function getBooks() {
  const { data } = await axiosInstance.get("/book/");

  return data;
}

export async function getBookById(id: string) {
  const { data } = await axiosInstance.get(`/book/${id}`);

  return data;
}

export async function createBook(book: BookReq) {
  const { data } = await axiosInstance.post("/book", book);

  return data;
}

export async function updateBook(id: string, book: BookReq) {
  const { data } = await axiosInstance.put(`/book/${id}`, book);

  return data;
}
