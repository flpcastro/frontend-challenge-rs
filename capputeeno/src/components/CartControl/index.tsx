'use client';

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "../Icons/CartIcon";
import { styled } from "styled-components";
import { CartCount, Container } from "./styles";

export function CartControl() {
  const { value } = useLocalStorage('cart-items')

  return (
    <Container>
      <CartIcon />
      {value.length && <CartCount>{value.length}</CartCount>}
    </Container>
  )
}