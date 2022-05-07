import styled from "styled-components";

export const Wrapper = styled.div`
  min-width: 30%;
  background-color: #22272e;
  padding: 1rem;

  &:hover {
    background-color: black;
    border: 0.0313rem solid #ccc;
  }

  @media screen and (max-width: 560px) {
    min-width: 100%;
  }
`;
