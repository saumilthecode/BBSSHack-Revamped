import { F as Fragment, _ as __astro_tag_component__, g as createVNode } from './astro/server_B4TpmAlj.mjs';
import { $ as $$Image } from './_astro_assets_DOqoC0-U.mjs';
import 'clsx';

const frontmatter = {
  "title": "Guides"
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Our Guides section offers in-depth tutorials and instructions on various features and best practices. Explore these guides to enhance your knowledge and make the most out of your documentation setup."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "./authoring-content-in-md",
          children: "Authoring Content in Markdown"
        }), ": Learn how to author content using Markdown."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "./authoring-content-in-mdx",
          children: "Authoring Content in MDX"
        }), ": Discover how to use MDX for more dynamic content."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "./breadcrumbs",
          children: "Breadcrumbs"
        }), ": Understand how to implement breadcrumbs for better navigation."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "./pages",
          children: "Pages"
        }), ": A guide on managing and creating pages in your documentation."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "./sidebar-navigation",
          children: "Sidebar Navigation"
        }), ": Learn about configuring sidebar navigation for a better user experience."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "./site-search",
          children: "Site Search"
        }), ": Instructions on adding search functionality to your site."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "./table-of-contents",
          children: "Table of Contents"
        }), ": How to add and configure a Table of Contents for your documentation."]
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/docs/Guides/index.mdx";
const file = "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/content/docs/Guides/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/content/docs/Guides/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
