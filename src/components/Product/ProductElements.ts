import styled from 'styled-components'
import { RiShoppingCart2Fill } from 'react-icons/ri'

export const ProductCard = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const ProductImgWrapper = styled.div`
  height: 300px;
  width: 100%;
  overflow: hidden;
  position: relative;
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  padding: 0.75rem;
  //position: absolute;
  object-fit: cover;
  transition: 0.5s all;
  //border-radius: 30px;
  /* top: 0;
  left: 0; */
`

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
`

export const RegularPrice = styled.p<{ isOnSale: boolean }>`
  color: ${({ theme }) => theme.primaryText};
  text-decoration: ${({ isOnSale }) => (isOnSale ? `line-through` : `none`)};
  font-weight: bolder;
  font-size: ${({ isOnSale }) => (isOnSale ? `calc(0.8rem +  0.1vw)` : `calc(1rem +  0.1vw)`)};
  margin: 0 0.25rem;
  opacity: ${({ isOnSale }) => (isOnSale ? `0.5` : `0.9`)};
`
export const SalePrice = styled.p`
  color: ${({ theme }) => theme.primaryText};
  font-weight: bold;
  font-size: calc(1rem + 0.1vw);
  margin: 0 0.25rem;
  opacity: 0.9;
`
export const AddToCartIcon = styled(RiShoppingCart2Fill)`
  font-size: calc(1.5rem + 0.1vw);
  align-self: auto;
  color: ${({ theme }) => theme.primaryText};
  cursor: pointer;
  margin: 0 0.25rem;
`

export const ProductName = styled.a`
  font-size: calc(1rem + 0.1vw);
  align-self: auto;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  color: ${({ theme }) => theme.primaryText};

  &:hover {
    color: ${({ theme }) => theme.primaryGreen};
  }

  margin: 0 1rem;
`
