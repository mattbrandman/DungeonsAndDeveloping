import Link from 'next/link';
import styled from 'styled-components';

const linkStyle = {
  flex: 1,
  marginRight: 15,
  textAlign: 'center',
  borderBottom: 'solid',
  borderColor: 'black',
  textDecoration: 'none',
  color: 'black',
  margin: 0

};

const Header = () => (
  <LinkContainer>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/projects">
      <a style={linkStyle}>Projects</a>
    </Link>
    <Link href="/sandbox">
      <a style={linkStyle}>Sandbox</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </LinkContainer>
);

export default Header;

const LinkContainer = styled.div`
  display: flex;
 
`;