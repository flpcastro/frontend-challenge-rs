import { SearchIcon } from "../Icons/SearchIcon";
import { PrimaryInput } from "../PrimaryInput";
import { Container } from "./styles";

interface PrimaryInputWithSearchIconProps {
  placeholder: string;
  value: string;
  handleChange: (value: string) => void;
}

export function PrimaryInputWithSearchIcon({ placeholder, value, handleChange }: PrimaryInputWithSearchIconProps) {
  return (
    <Container>
      <PrimaryInput 
        placeholder={placeholder}
        onChange={(event) => handleChange(event.target.value)}
      />
      <SearchIcon />
    </Container>
  )
}