import { useContext } from "react";
import { StudentContext } from "../StudentContext";

export function useUser() {
  return useContext(StudentContext);
}