import styled from 'styled-components'

const BlogPreview = (props) => (
    <div>
        <BlogTitle>
            {props.blogTitle}
        </BlogTitle>
        <BlogPreviewText>
            {props.blogPreviewText}
        </BlogPreviewText>
        <BlogMetaText>
            {props.MetaText}
        </BlogMetaText>
    </div>
);
export default BlogPreview


const BlogTitle = styled.p`
    font-weight: 700;
`;
const BlogPreviewText = styled.p`
    line-height: 1.2px;
`;
const BlogMetaText = styled.p`
    font-weight: 100;
`;