import styled from "styled-components";

export default styled.button<{ $bg?: string }>`
  padding: 8px 16px;
  background-color: ${(props) => props.$bg ?? "var(--point-color)"};
  color: white;
  font-size: 1.2em;

  &:hover {
    opacity: 0.8;
  }
`;
