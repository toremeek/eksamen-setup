import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

const navItems = [
  {
    name: 'Bli medlem',
    href: '/medlem',
  },
  {
    name: 'Finn treningssenter',
    href: '/finn',
  },
  {
    name: 'Treningstilbud',
    href: '/trening',
  },
];

const StyledNav = styled.nav`
  background-color: ${({ theme }) => theme.nav.background};
  display: flex;
  align-items: center;
`;

const StyledLogo = styled.img`
  max-width: 100%;
  padding: 1rem 2rem;
`;

const StyledUl = styled.ul`
  display: flex;
`;

const StyledLi = styled.li`
  color: ${({ theme }) => theme.nav.link};
  font-size: 1.2rem;
  & a {
    color: inherit;
    text-decoration: none;
    padding: 1rem;
    &:hover {
      color: #ccc;
    }
    &.active {
      text-decoration: underline;
    }
  }
`;

const Navigation = () => (
  <StyledNav>
    <NavLink to="/">
      <StyledLogo
        src="https://www.sats.no/Images/SATS/logo2-no.svg?version=5"
        alt="Sats logo"
        height="33px"
      />
    </NavLink>
    <StyledUl>
      {navItems.map((navItem) => (
        <StyledLi key={navItem.name}>
          <NavLink exact to={navItem.href} activeClassName="active">
            {navItem.name}
          </NavLink>
        </StyledLi>
      ))}
    </StyledUl>
  </StyledNav>
);

export default Navigation;
