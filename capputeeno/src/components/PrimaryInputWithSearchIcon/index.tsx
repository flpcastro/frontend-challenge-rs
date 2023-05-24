import { SearchIcon } from "../Icons/SearchIcon";
import { PrimaryInput } from "../PrimaryInput";
import { Container } from "./styles";

interface PrimaryInputWithSearchIconProps {
  placeholder: string;
}

export function PrimaryInputWithSearchIcon({ placeholder }: PrimaryInputWithSearchIconProps) {
  return (
    <Container>
      <PrimaryInput 
        placeholder={placeholder}
      />
      <SearchIcon />
    </Container>
  )
}