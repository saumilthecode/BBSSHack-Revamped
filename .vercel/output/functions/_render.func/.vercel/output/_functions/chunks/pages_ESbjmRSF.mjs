import { F as Fragment, _ as __astro_tag_component__, g as createVNode } from './astro/server_DyQOWlKk.mjs';
import { $ as $$Image } from './_astro_assets_D07zSGO7.mjs';
import 'clsx';

const frontmatter = {
  "title": "Pages"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "content-pages",
    "text": "Content pages"
  }, {
    "depth": 3,
    "slug": "file-formats",
    "text": "File formats"
  }, {
    "depth": 3,
    "slug": "add-pages",
    "text": "Add pages"
  }, {
    "depth": 3,
    "slug": "type-safe-frontmatter",
    "text": "Type-safe frontmatter"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
      children: ["CelestialDocs creates your site’s HTML pages from your content, offering flexible options through Markdown frontmatter. Additionally, CelestialDocs projects have complete access to ", createVNode(_components.a, {
        href: "https://docs.astro.build/en/basics/astro-pages/",
        rel: "nofollow",
        target: "_blank",
        children: "Astro’s robust page generation tools"
      }), ". This guide explains how page generation works in CelestialDocs."]
    }), "\n", createVNode(_components.h2, {
      id: "content-pages",
      children: "Content pages"
    }), "\n", createVNode(_components.h3, {
      id: "file-formats",
      children: "File formats"
    }), "\n", createVNode(_components.p, {
      children: "CelestialDocs supports authoring content in Markdown and MDX with no configuration required."
    }), "\n", createVNode(_components.h3, {
      id: "add-pages",
      children: "Add pages"
    }), "\n", createVNode(_components.p, {
      children: ["Add new pages to your site by creating ", createVNode(_components.code, {
        children: ".md"
      }), " or ", createVNode(_components.code, {
        children: ".mdx"
      }), " files in ", createVNode(_components.code, {
        children: "src/content/docs/"
      }), ". Use sub-folders to organize your files and to create multiple path segments."]
    }), "\n", createVNode(_components.h3, {
      id: "type-safe-frontmatter",
      children: "Type-safe frontmatter"
    }), "\n", createVNode(_components.p, {
      children: "All CelestialDocs pages share a customizable set of frontmatter properties that control their appearance:"
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
            children: "title"
          }), createVNode(_components.span, {
            style: {
              color: "#179299",
              "--shiki-dark": "#8BD5CA"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#40A02B",
              "--shiki-dark": "#A6DA95"
            },
            children: " Sample"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#1E66F5",
              "--shiki-dark": "#8AADF4"
            },
            children: "author"
          }), createVNode(_components.span, {
            style: {
              color: "#179299",
              "--shiki-dark": "#8BD5CA"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#40A02B",
              "--shiki-dark": "#A6DA95"
            },
            children: " hyperoot"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#1E66F5",
              "--shiki-dark": "#8AADF4"
            },
            children: "pubDatetime"
          }), createVNode(_components.span, {
            style: {
              color: "#179299",
              "--shiki-dark": "#8BD5CA"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: " 2024-04-09T12:00:00-05:30"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#1E66F5",
              "--shiki-dark": "#8AADF4"
            },
            children: "modDatetime"
          }), createVNode(_components.span, {
            style: {
              color: "#179299",
              "--shiki-dark": "#8BD5CA"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: " 2024-08-01T12:00:00-05:30 "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#1E66F5",
              "--shiki-dark": "#8AADF4"
            },
            children: "description"
          }), createVNode(_components.span, {
            style: {
              color: "#179299",
              "--shiki-dark": "#8BD5CA"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#40A02B",
              "--shiki-dark": "#A6DA95"
            },
            children: " 'Sample description'"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#1E66F5",
              "--shiki-dark": "#8AADF4"
            },
            children: "draft"
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
          children: [createVNode(_components.span, {
            style: {
              color: "#1E66F5",
              "--shiki-dark": "#8AADF4"
            },
            children: "tags"
          }), createVNode(_components.span, {
            style: {
              color: "#179299",
              "--shiki-dark": "#8BD5CA"
            },
            children: ":"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#7C7F93",
              "--shiki-dark": "#939AB7"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#40A02B",
              "--shiki-dark": "#A6DA95"
            },
            children: " anything"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#7C7F93",
              "--shiki-dark": "#939AB7"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#40A02B",
              "--shiki-dark": "#A6DA95"
            },
            children: " you"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#7C7F93",
              "--shiki-dark": "#939AB7"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#40A02B",
              "--shiki-dark": "#A6DA95"
            },
            children: " want"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#1E66F5",
              "--shiki-dark": "#8AADF4"
            },
            children: "hide_toc"
          }), createVNode(_components.span, {
            style: {
              color: "#179299",
              "--shiki-dark": "#8BD5CA"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: " "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#1E66F5",
              "--shiki-dark": "#8AADF4"
            },
            children: "hide_sidenav"
          }), createVNode(_components.span, {
            style: {
              color: "#179299",
              "--shiki-dark": "#8BD5CA"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: " "
          })]
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
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: " "
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
    }), "\n", createVNode(_components.p, {
      children: ["A snippet template is also included with this project if you are using vscode. Just type ", createVNode(_components.code, {
        children: "docs"
      }), " in any ", createVNode(_components.code, {
        children: ".md"
      }), " or ", createVNode(_components.code, {
        children: ".mdx"
      }), " file and you will see a suggestion for a template named ", createVNode(_components.code, {
        children: "docs"
      }), ". Most of the frontmatter properties are commented. Uncomment them by removing ", createVNode(_components.code, {
        children: "#"
      }), ". For date and time we use ", createVNode(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format",
        rel: "nofollow",
        target: "_blank",
        children: "standard date-time string format"
      }), "."]
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

const url = "src/content/docs/Guides/pages.mdx";
const file = "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/content/docs/Guides/pages.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/content/docs/Guides/pages.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
