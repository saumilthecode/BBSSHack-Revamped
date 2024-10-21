import { F as Fragment, _ as __astro_tag_component__, g as createVNode } from './astro/server_DyQOWlKk.mjs';
import { $ as $$Image } from './_astro_assets_D07zSGO7.mjs';
import { $ as $$Callout } from './Callout_D1fb6UXX.mjs';
import 'clsx';

const frontmatter = {
  "title": "Site Search"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "hide-search",
    "text": "Hide search"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["By default, CelestialDocs sites include full-text search powered by ", createVNode(_components.a, {
        href: "https://www.fusejs.io/",
        rel: "nofollow",
        target: "_blank",
        children: "Fuse.js"
      }), ", which is a fast and low-bandwidth search tool for static sites."]
    }), "\n", createVNode(_components.p, {
      children: "No configuration is required to enable search. Build and deploy your site, then use the search bar in the site header to find content."
    }), "\n", createVNode($$Callout, {
      variant: "info",
      children: createVNode(_components.p, {
        children: ["You can trigger search using keyboard shortcut also. Just press ", createVNode(_components.code, {
          children: "ctrl"
        }), " + ", createVNode(_components.code, {
          children: "K"
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "hide-search",
      children: "Hide search"
    }), "\n", createVNode(_components.p, {
      children: ["In ", createVNode(_components.code, {
        children: "config.js"
      }), ", you can disable the search function by keeping the value of ", createVNode(_components.code, {
        children: "hide_search"
      }), " as ", createVNode(_components.code, {
        children: "true"
      }), "."]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code astro-code-themes catppuccin-latte catppuccin-macchiato",
      style: {
        backgroundColor: "#eff1f5",
        "--shiki-dark-bg": "#24273a",
        color: "#4c4f69",
        "--shiki-dark": "#cad3f5",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "js",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#9CA0B0",
              fontStyle: "italic",
              "--shiki-dark": "#6E738D",
              "--shiki-dark-font-style": "italic"
            },
            children: "// config.js"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#8839EF",
              "--shiki-dark": "#C6A0F6"
            },
            children: "export"
          }), createVNode(_components.span, {
            style: {
              color: "#8839EF",
              "--shiki-dark": "#C6A0F6"
            },
            children: " const"
          }), createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: " docconfig "
          }), createVNode(_components.span, {
            style: {
              color: "#179299",
              "--shiki-dark": "#8BD5CA"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#7C7F93",
              "--shiki-dark": "#939AB7"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#179299",
              "--shiki-dark": "#8BD5CA"
            },
            children: "  ..."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: "  hide_search: "
          }), createVNode(_components.span, {
            style: {
              color: "#FE640B",
              "--shiki-dark": "#F5A97F"
            },
            children: "true"
          }), createVNode(_components.span, {
            style: {
              color: "#7C7F93",
              "--shiki-dark": "#939AB7"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#179299",
              "--shiki-dark": "#8BD5CA"
            },
            children: "  ..."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7C7F93",
              "--shiki-dark": "#939AB7"
            },
            children: "};"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
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

const url = "src/content/docs/Guides/site-search.mdx";
const file = "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/content/docs/Guides/site-search.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/content/docs/Guides/site-search.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
