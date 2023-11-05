import styled from "styled-components"

export const Nav = styled.nav`
  width: 100%;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #02408b;
  color: #ffffff;
  font-size: 30px;

  p {
    font-size: 14px;
  }
`

export const H1 = styled.h1`
  font-weight: 400;
`

export const TopHeader = styled.header`
  display: flex;
  justify-content: space-between;

  width: 90%;
  max-width: 1210px;
  margin: 50px 0;
  padding-bottom: 10px;

  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  p {
    width: 95%;
  }

  @media screen and (max-width: 660px) {
    flex-direction: column;

    p {
      margin: 10px 0;
    }
  }
`

export const Input = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  outline: none;
  padding-left: 10px;
  height: 40px;
`
