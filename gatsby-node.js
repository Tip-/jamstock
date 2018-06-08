const path = require('path');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    const productTemplate = path.resolve('src/templates/product.js');
    resolve(
      graphql(`
        {
          allContentfulProduct(limit: 100) {
            edges {
              node {
                id
                slug
                createdAt
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors);
        }
        result.data.allContentfulProduct.edges.forEach(edge => {
          createPage({
            path: `/jams/${edge.node.slug}`,
            component: productTemplate,
            context: {
              slug: edge.node.slug,
            },
          });
        });
        return;
      })
    );
  });
};
