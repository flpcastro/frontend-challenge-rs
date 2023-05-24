'use client';

import { CartControl } from "../CartControl";
import { PrimaryInputWithSearchIcon } from "../PrimaryInputWithSearchIcon";
import { Container, Logo } from "./styles";
import { Saira_Stencil_One } from 'next/font/google'

const sairaStencilOne = Saira_Stencil_One({
  weight: ['400'],
  subsets: ['latin'] 
})

export function Header() {
  return (
    <Container>
      <Logo
        className={sairaStencilOne.className}
      >
        Capputeeno
      </Logo>

      <div>
        <PrimaryInputWithSearchIcon 
          placeholder="Procurando por algo específico?"
        />

        <CartControl />
      </div>
    </Container>
  )
}