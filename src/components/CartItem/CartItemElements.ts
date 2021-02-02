import styled from 'styled-components'

export const El = styled.li`
  padding: 0.5rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 120px;
  background: #fdfdfd;
  //border: 1px solid #000;
`
export const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
`

export const ProductLink = styled.a`
  text-decoration: underline;
  cursor: pointer;
`

export const RemoveFromCartBtn = styled.button`
  font-size: calc(1.5rem + 0.1vw);
  border: none;
  background: transparent;
  background-color: transparent;
  border-color: #333333;
  color: #333333;
  cursor: pointer;

  &:disabled {
    opacity: 1;
  }
`

export const QuantityForm = styled.form`
  margin: 2rem 0;
  display: flex;
  flex-direction: row;
`

export const InputField = styled.input`
  padding: 0.5em;
  margin-right: 1rem;
  max-width: 60px;
  font-size: 1rem;
  text-align: center;
  background-color: #f2f2f2;
  color: #43454b;
  border: none;
  box-sizing: border-box;
  font-weight: 400;

  &[type='number']::-webkit-inner-spin-button {
    opacity: 1;
  }
`
export const UpdateCartItemBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333333;
  border-color: #333333;
  color: #ffffff;
  cursor: pointer;
  padding: 0.5em 1.5em;
  width: calc(75px + 0.2vw);
  height: 41px;
  //display: inline-block;
  transition: all 0.2s ease-in-out;
`

export const UpdateText = styled.p`
  font-weight: 600;
  font-size: calc(0.75rem + 0.1vw);
`