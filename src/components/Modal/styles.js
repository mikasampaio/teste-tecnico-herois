import styled from "styled-components"

export const H1 = styled.h1`
  text-align: center;
  font-weight: 400;
  font-size: 20px;
`

export const ContainerItens = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
`

export const ContainerButton = styled.div`
  display: flex;
  justify-content: end;
`

export const Button = styled.button`
  height: 40px;
  padding: 10px;
  width: 90px;
  cursor: pointer;
  border: 1px solid #02408b;
  color: #02408b;
  border-radius: 4px;
  background: none;
  transition: ease-in-out;
  font-weight: 400;

  &:hover {
    background-color: #02408b;
    color: #ffffff;
  }
`

export const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "85%",
  height: "auto",
  minHeight: 500,
  bgcolor: "rgba(233, 239, 255)",
  borderRadius: 2,
  boxShadow: 24,
  outline: "none",
  p: 2,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between"
}
