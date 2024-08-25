// utils/navigate.ts
import { useRouter } from "next/router";

export const useNavigate = () => {
  const router = useRouter();
  return (path: string) => router.push(path);
};
