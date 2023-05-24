import { InputHTMLAttributes } from "react";
import { Container } from "./styles";

interface PrimaryInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function PrimaryInput({ ...rest }: PrimaryInputProps) {
  return (
    <Container 
      {...rest}
    />
  )
}