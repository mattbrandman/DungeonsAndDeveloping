import Header from '../components/Header';
import styled from 'styled-components';
import BlogPreview from '../components/BlogPreview'
import { createClient } from '../common/contentful';
export default function Index(props) {
  return (
    <Container>
      <HeaderContent>
          <Header />
      </HeaderContent>
      <BlogContent>
        <BlogPreview />
      </BlogContent>
    </Container>
  );
}

Index.getInitialProps = async function(context) {
  const client = createClient();
  const entries = await client.getEntries({});
  console.log(`Fetched show: ${JSON.stringify(entries)}`);
  return { someEntryAsProp: entries.items[0] };
};

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

const contentful = require('contentful')