import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ContainerItens = styled.div`
  width: 91%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 15px;
  padding: 10px;
  padding-bottom: 95px;
  justify-items: center;

  @media screen and (max-width: 820px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 620px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 520px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1900px) {
    grid-template-columns: repeat(7, 1fr);
  }
`
