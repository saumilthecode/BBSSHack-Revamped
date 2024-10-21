import { F as Fragment, _ as __astro_tag_component__, g as createVNode } from './astro/server_B4TpmAlj.mjs';
import { $ as $$Image } from './_astro_assets_DOqoC0-U.mjs';
import 'clsx';

const frontmatter = {
  "title": "Breadcrumbs"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "hide-breadcrumbs",
    "text": "Hide breadcrumbs"
  }, {
    "depth": 3,
    "slug": "hide-globally",
    "text": "Hide globally"
  }, {
    "depth": 3,
    "slug": "hide-locally",
    "text": "Hide locally"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["By default, CelestialDocs sites supports breadcrumbs. It is generated after scanning the folder structure of ", createVNode(_components.code, {
        children: "docs"
      }), " folder."]
    }), "\n", createVNode(_components.h2, {
      id: "hide-breadcrumbs",
      children: "Hide breadcrumbs"
    }), "\n", createVNode(_components.h3, {
      id: "hide-globally",
      children: "Hide globally"
    }), "\n", createVNode(_components.p, {
      children: ["In ", createVNode(_components.code, {
        children: "config.js"
      }), ", you can disable the search function by keeping the value of ", createVNode(_components.code, {
        children: "hide_breadcrumbs"
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
            children: "  hide_breadcrumbs: "
          }), createVNode(_components.span, {
            style: {
              color: "#FE640B",
              "--shiki-dark": "#F5A97F"
            },
            children: "true"
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
    }), "\n", createVNode(_components.h3, {
      id: "hide-locally",
      children: "Hide locally"
    }), "\n", createVNode(_components.p, {
      children: ["To hide ToC for specific pages only, then add ", createVNode(_components.code, {
        children: "hide_breadcrumbs"
      }), " in the frontmatter as ", createVNode(_components.code, {
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
      "data-language": "yaml",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#EA76CB",
              "--shiki-dark": "#F5BDE6"
            },
            children: "---"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#1E66F5",
              "--shiki-dark": "#8AADF4"
            },
            children: "hide_breadcrumbs"
          }), createVNode(_components.span, {
            style: {
              color: "#179299",
              "--shiki-dark": "#8BD5CA"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#FE640B",
              "--shiki-dark": "#F5A97F"
            },
            children: " true"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#EA76CB",
              "--shiki-dark": "#F5BDE6"
            },
            children: "---"
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

const url = "src/content/docs/Guides/breadcrumbs.mdx";
const file = "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/content/docs/Guides/breadcrumbs.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/content/docs/Guides/breadcrumbs.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
