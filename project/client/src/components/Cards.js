import styled from 'styled-components/macro';

/* eslint-disable prettier/prettier */
const StyledCards = styled.section`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 10px;
`;

const Cards = ({children}) => (<StyledCards>{children}</StyledCards>)

export default Cards;