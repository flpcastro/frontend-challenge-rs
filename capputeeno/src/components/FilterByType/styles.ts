import { styled } from "styled-components";

interface FilterItemProps {
  selected: boolean;
}

export const Container = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  list-style: none;
`;

export const FilterItem = styled.li<FilterItemProps>`
  color: var(--text-dark);
  text-transform: uppercase;
  text-align: center;
  font-family: inherit;
  font-weight: ${props => props.selected ? '600' : '400'};
  font-size: 16px;
  line-height: 22px;
  cursor: pointer;
  border-bottom: ${props => props.selected ? '4px solid var(--orange-low)' : ''};
`;