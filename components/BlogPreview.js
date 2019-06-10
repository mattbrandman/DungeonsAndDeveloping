import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
const BlogPreview = ({ blogPostTitle, blogPostText }) => (
    <StyledLi>
        <BlogTitle>
            {blogPostTitle}
        </BlogTitle>
        <BlogPreviewText>
            <ReactMarkdown source={blogPostText} />
        </BlogPreviewText>
        <BlogMetaText>

        </BlogMetaText>
    </StyledLi>
);
export default BlogPreview

const StyledLi = styled.li`
    border-bottom: solid;
    transition: 0.3s ease-in-out;
    border-width: 1px;
    border-color: lightgrey;
    &: hover {
        opacity: 0.5;
        cursor: pointer;
      }
`;
const BlogTitle = styled.p`
    font-weight: 700;
`;
const BlogPreviewText = styled.div`
    line-height: 1.5;
`;
const BlogMetaText = styled.p`
 
`;