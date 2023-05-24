import { useState } from "react";
import { ArrowIcon } from "../Icons/ArrowIcon";
import { Container, PriorityFilter } from "./styles";
import { useFilter } from "@/hooks/useFilter";
import { PriorityTypes } from "@/types/priority-types";

export function FilterByPriority() {
  const [isOpen, setIsOpen] = useState(false);
  const { setPriority } = useFilter();

  function handleOpen() {
    setIsOpen(prevstate => !prevstate)
  }

  function handleUpdatePriority(value: PriorityTypes) {
    setPriority(value)
    setIsOpen(false)
  }

  return (
    <Container>
      <button onClick={handleOpen}>
        Organizar por
        <ArrowIcon />
      </button>
      
      {isOpen && (
        <PriorityFilter>
          <li 
            onClick={() => handleUpdatePriority(PriorityTypes.NEWS)}
          >
            Novidades
          </li>

          <li 
            onClick={() => handleUpdatePriority(PriorityTypes.BIGGEST_PRICE)}
          >
            Preço: Maior - menor
          </li>

          <li 
            onClick={() => handleUpdatePriority(PriorityTypes.MINOR_PRICE)}
          >
            Preço: Menor - maior
          </li>

          <li 
            onClick={() => handleUpdatePriority(PriorityTypes.POPULARITY)}
          >
            Mais vendidos
          </li>
        </PriorityFilter>
      )}
    </Container>
  )
}