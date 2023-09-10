import styled from "@emotion/styled";


export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`

export const Button = styled.button`
width: 80px;
  font-size: 14px;
  padding: 7px;
  border-radius: 7px;
  border: 1px solid gray;
  box-shadow: 0 3px 5px hsla(0, 0%, 100%, 0.3);

  &:hover,
  &:focus {
    color: white;
    background-color: green;
    cursor: pointer;
  }
`

