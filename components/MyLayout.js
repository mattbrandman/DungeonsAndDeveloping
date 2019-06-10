import Header from '../components/Header'
import styled from 'styled-components'
export default function Layout(props) {
    return (
      <Container>
        <HeaderContent>
            <Header />
        </HeaderContent>
        {props.children}
      </Container>
    )
  }
  const Container = styled.div`
  display: grid;
  grid-template-columns: 10% 15% auto 15% 10%;
  grid-template-rows: 100px;
  font-family: 'Roboto', sans-serif;
  color: #333;
`;

const HeaderContent = styled.div`
  display: grid;
  grid-column-start: 1;
  grid-column-end: -1;
  border: 1px;
  box-shadow: 0px 3px 3px 1px #ccc;
  position: sticky;
`;

const BlogContent = styled.ul`
  grid-row-start: 3;
  grid-column-start: 3;
  grid-column-end: 4;
  margin-top: ;
  list-style: none;
`;
