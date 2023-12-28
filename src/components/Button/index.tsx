import styled from "styled-components";

export default styled.button<{ $bg?: string; $margin?: string }>`
  padding: 8px 16px;
  margin: ${(props) => props.$margin ?? "unset"};
  background-color: ${(props) => props.$bg ?? "var(--point-color)"};
  color: white;
  font-size: 1.2em;
  border-radius: 4px;

  &:hover {
    opacity: 0.8;
  }
`;
