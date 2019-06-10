import Link from 'next/link';
import styled from 'styled-components';

const linkStyle = {
  flex: 1,
  textAlign: 'center',
  borderColor: 'black',
  textDecoration: 'none',
  color: 'black',

};

const Header = () => (
  <div>
    <Logo>Dungeons and Development</Logo>
    <LinkContainer>
      <Link href="/">
        <a style={linkStyle}>Blog</a>
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
  </div>
);

export default Header;

const LinkContainer = styled.div`
  align-self: end;
  display: flex;
`;

const Logo = styled.h2`
  text-align: center;
`;