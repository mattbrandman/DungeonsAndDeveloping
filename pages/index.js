import Layout from '../components/MyLayout'
import styled from 'styled-components';
import BlogPreview from '../components/BlogPreview'
import { createClient } from '../common/contentful';
export default function Index(props) {
  return (
    <Layout>
      <BlogContent>
        {props.BlogPostArray.map((blogPost, index) => {
          return <BlogPreview key={index} {...blogPost.fields}></BlogPreview>
        })}
      </BlogContent>
    </Layout>
  );                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
}

Index.getInitialProps = async function(context) {
  const client = createClient();
  const entries = await client.getEntries({'content_type': 'blogPost', 'select': 'fields'});
  console.log(JSON.stringify(entries.items))
  return { BlogPostArray: entries.items };
};

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

const contentful = require('contentful')