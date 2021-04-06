/* eslint-disable prettier/prettier */
import styled from 'styled-components/macro';

const StyledArticle = styled.article`
  display: block;
  margin: 0;
  height: auto;
  with: 100%;
  z-index: 2;
  overflow: hidden;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
  border-radius: 0;
  position: relative;
`;

const StyledCardContent = styled.section`
  position: absolute;
  bottom: -50px;
  padding: 1rem;
  width: 100%;
  left: 0;
  background-color: ${({ theme }) => theme.nav.background};
  transition: all 250ms ease-in-out;
  &:hover {
    bottom: 0;
  }
`;

const StyledH2 = styled.h2`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 900;
`;

const StyledCardImage = styled.img`
  max-width: 100%;
`;

const StyledCardLink = styled.a`
  display: inline-block;
  text-allign: center;
  padding: 0.6rem 0.9rem;
  color: #fff;
  border: 1px solid #fff;
  text-transform: none;
  font-weight: 900;
  padding: 0.5rem 1rem;
  min-width: 54px;
  text-transform: uppercase;
  text-decoration: none;
  font-style: italic;
  margin-top: 1.5rem;
  &:hover {
    background-color: white;
    color: #333;
  }
`;

const StyledCardLead = styled.p`
  font-size: 1.2rem;
  line-height: 2.4rem;
  color: #fff;
`;

// eslint-disable-next-line no-unused-vars
const Card = ({ img, title, text, link }) => (
  <StyledArticle>
    <StyledCardImage
      src={img.asset.url}
      alt={img.alt}
    />
    <StyledCardContent>
      <StyledH2>{title}</StyledH2>
      <StyledCardLead>{text}</StyledCardLead>
      {link.length > 0 && 
      link.map((l) => (
        <StyledCardLink key={l._key} href={l.href}>{l.name}</StyledCardLink>
      ))}
      
    </StyledCardContent>
  </StyledArticle>
);

export default Card;
