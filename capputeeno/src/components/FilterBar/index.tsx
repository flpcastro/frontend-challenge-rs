"use client";

import { FilterByPriority } from "../FilterByPriority";
import { FilterByType } from "../FilterByType";
import { Container } from "./styles";

export function FilterBar() {
  return (
    <Container>
      <FilterByType />
      <FilterByPriority />
    </Container>
  )
}