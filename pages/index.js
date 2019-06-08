import Header from '../components/Header';
import styled from 'styled-components';
export default function Index() {
  return (
    <Container>
      <HeaderContent>
          <Header />
        </HeaderContent>
        <BlogContent>
        <p>Hello Next.js</p>
        </BlogContent>
        
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 10% 15% auto 15% 10%;
  grid-template-rows: 100px;
  font-family: 'Roboto', sans-serif;
`;

const HeaderContent = styled.div`
  grid-column-start: 2;
  grid-column-end: -2;
  align-self: end;
  border: 1px;
`;

const BlogContent = styled.div`
  grid-row-start: 2;
  grid-column-start: 3;
  grid-column-end: 4;
  margin-top: 30px;
`;