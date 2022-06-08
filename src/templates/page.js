// import React from 'react';
// import { graphql } from 'gatsby';
// import { css } from '@emotion/core';
// import Layout from '../components/layout';

// export const query = graphql`
//   query($slug: String!) {
//     allWpPage(nodes: { slug: { eq: $slug } }) {
//         nodes {
//         slug
//       }
//     }
//   }
// `;

// const PostTemplate = ({ data: { allWpPage: page } }) => (
//   <Layout>
//     <h1>{post.frontmatter.slug}</h1>
//     <p
//       css={css`
//         font-size: 0.75rem;
//       `}
//     >
//       Posted by {page.nodes.slug}
//     </p>
//     <ReadLink to="/">&larr; back to all posts</ReadLink>
//   </Layout>
// );

// export default PostTemplate;

// export const pageQuery = graphql`
//   query PageById(
//     $id: String!
//   ) {
//     page: wpPage(id: { eq: $id }) {
//       id
//       content
//       title
//       date(formatString: "MMMM DD, YYYY")
//       featuredImage {
//         node {
//           altText
//           localFile {
//             childImageSharp {
//               gatsbyImageData(
//                 quality: 100
//                 placeholder: TRACED_SVG
//                 layout: FULL_WIDTH
//               )
//             }
//           }
//         }
//       }
//     }
//   }
// `