const path = require("path");

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPage = path.resolve("./src/templates/post.jsx");
  const pagePage = path.resolve("./src/templates/page.jsx");
  const tagPage = path.resolve("./src/templates/tag.jsx");

  const result = await graphql(
    `
      {
        allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              id
              frontmatter {
                title
                tags
                template
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  const all = result.data.allMdx.edges;
  const posts = all.filter((post) => post.node.frontmatter.template === "post");
  const pages = all.filter((post) => post.node.frontmatter.template === "page");
  const tagSet = new Set();

  // =====================================================================================
  // Posts
  // =====================================================================================

  posts.forEach((post, i) => {
    const previous = i === posts.length - 1 ? null : posts[i + 1].node;
    const next = i === 0 ? null : posts[i - 1].node;

    if (post.node.frontmatter.tags) {
      post.node.frontmatter.tags.forEach((tag) => {
        tagSet.add(tag);
      });
    }

    createPage({
      path: post.node.fields.slug,
      component: blogPage,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    });
  });

  // =====================================================================================
  // Pages
  // =====================================================================================

  pages.forEach((page) => {
    createPage({
      path: page.node.fields.slug,
      component: pagePage,
      context: {
        slug: page.node.fields.slug,
      },
    });
  });

  // =====================================================================================
  // Tags
  // =====================================================================================

  // Helpers
  function slugify(str) {
    return (
      str &&
      str
        .match(
          /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
        )
        .map((x) => x.toLowerCase())
        .join("-")
    );
  }

  const tagList = Array.from(tagSet);
  tagList.forEach((tag) => {
    createPage({
      path: `/tags/${slugify(tag)}/`,
      component: tagPage,
      context: {
        tag,
      },
    });
  });
};

const createNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  // =====================================================================================
  // Slugs
  // =====================================================================================

  let slug;
  if (node.internal.type === "Mdx") {
    const fileNode = getNode(node.parent);
    const parsedFilePath = path.parse(fileNode.relativePath);

    if (Object.prototype.hasOwnProperty.call(node.frontmatter, "slug")) {
      slug = `/${node.frontmatter.slug}/`;
    } else {
      slug = `/${parsedFilePath.name}/`;
    }

    createNodeField({
      name: "slug",
      node,
      value: slug,
    });
  }
};

exports.createPages = createPages;
exports.onCreateNode = createNode;
