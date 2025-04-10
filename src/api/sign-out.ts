import { api } from "@/lib/axios";

export interface SignInBody {
  email: string;
}

export async function signOut() {
  await api.post("/sign-out", {});
}