import { F as Fragment, _ as __astro_tag_component__, g as createVNode } from './astro/server_DyQOWlKk.mjs';
import { $ as $$Image } from './_astro_assets_D07zSGO7.mjs';
<<<<<<<< HEAD:.vercel/output/functions/_render.func/.vercel/output/_functions/chunks/getting-started_D0VDdY3F.mjs
import { $ as $$Callout } from './Callout_D1fb6UXX.mjs';
========
import { $ as $$Callout } from './Callout_CkoauDfB.mjs';
>>>>>>>> origin/main:.vercel/output/functions/_render.func/.vercel/output/_functions/chunks/getting-started_JK4pkfmC.mjs
import 'clsx';

const frontmatter = {
  "title": "Getting Started",
  "hide_breadcrumbs": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "create-a-new-project",
    "text": "Create a new project"
  }, {
    "depth": 2,
    "slug": "local-setup",
    "text": "Local Setup"
  }, {
    "depth": 2,
    "slug": "customizing-your-documentation",
    "text": "Customizing Your Documentation"
  }, {
    "depth": 2,
    "slug": "next-steps",
    "text": "Next Steps"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: createVNode(_components.em, {
          children: "Celestial Docs"
        })
      }), " is a documentation theme built on top of the ", createVNode(_components.a, {
        href: "https://astro.build/",
        rel: "nofollow",
        target: "_blank",
        children: "Astro"
      }), " framework. This guide will help you get started with a new project."]
    }), "\n", createVNode(_components.h2, {
      id: "create-a-new-project",
      children: "Create a new project"
    }), "\n", createVNode(_components.p, {
      children: "To create your own documentation site using CelestialDocs, follow these steps:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Visit the ", createVNode(_components.a, {
          href: "https://github.com/HYP3R00T/CelestialDocs",
          rel: "nofollow",
          target: "_blank",
          children: "CelestialDocs GitHub"
        }), " repository."]
      }), "\n", createVNode(_components.li, {
        children: "Click on the “Use this template” button."
      }), "\n", createVNode(_components.li, {
        children: "Follow the prompts to create a new repository using this template."
      }), "\n"]
    }), "\n", createVNode($$Callout, {
      variant: "info",
      children: createVNode(_components.p, {
        children: ["Try CelestialDocs in your browser: ", createVNode(_components.a, {
          href: "https://stackblitz.com/github/HYP3R00T/CelestialDocs",
          rel: "nofollow",
          target: "_blank",
          children: "open the template on StackBlitz"
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "local-setup",
      children: "Local Setup"
    }), "\n", createVNode(_components.p, {
      children: "After creating your repository, follow these steps to set up the project locally:"
    }), "\n", createVNode(_components.p, {
      children: "Clone your repository:"
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
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#1E66F5",
              fontStyle: "italic",
              "--shiki-dark": "#8AADF4",
              "--shiki-dark-font-style": "italic"
            },
            children: "git"
          }), createVNode(_components.span, {
            style: {
              color: "#40A02B",
              "--shiki-dark": "#A6DA95"
            },
            children: " clone"
          }), createVNode(_components.span, {
            style: {
              color: "#40A02B",
              "--shiki-dark": "#A6DA95"
            },
            children: " https://github.com/yourusername/your-repo-name.git"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D20F39",
              fontStyle: "italic",
              "--shiki-dark": "#ED8796",
              "--shiki-dark-font-style": "italic"
            },
            children: "cd"
          }), createVNode(_components.span, {
            style: {
              color: "#40A02B",
              "--shiki-dark": "#A6DA95"
            },
            children: " your-repo-name"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Install dependencies:"
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
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#1E66F5",
              fontStyle: "italic",
              "--shiki-dark": "#8AADF4",
              "--shiki-dark-font-style": "italic"
            },
            children: "npm"
          }), createVNode(_components.span, {
            style: {
              color: "#40A02B",
              "--shiki-dark": "#A6DA95"
            },
            children: " install"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Start the development server:"
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
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#1E66F5",
              fontStyle: "italic",
              "--shiki-dark": "#8AADF4",
              "--shiki-dark-font-style": "italic"
            },
            children: "npm"
          }), createVNode(_components.span, {
            style: {
              color: "#40A02B",
              "--shiki-dark": "#A6DA95"
            },
            children: " run"
          }), createVNode(_components.span, {
            style: {
              color: "#40A02B",
              "--shiki-dark": "#A6DA95"
            },
            children: " dev"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Your documentation site will be available at ", createVNode(_components.code, {
        children: "http://localhost:4321"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "customizing-your-documentation",
      children: "Customizing Your Documentation"
    }), "\n", createVNode(_components.p, {
      children: "CelestialDocs is built to be highly customizable. You can start editing the markdown files in the content folder to create your own documentation pages."
    }), "\n", createVNode(_components.p, {
      children: "To add new pages or sections, simply create new markdown files and folders inside the content directory, following the existing structure."
    }), "\n", createVNode(_components.h2, {
      id: "next-steps",
      children: "Next Steps"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Configure:"
        }), " Learn about common options in ", createVNode(_components.a, {
          href: "/guides",
          children: "“Guides”"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Authoring Content in Markdown:"
        }), " Learn about options and features of ", createVNode(_components.a, {
          href: "/guides/authoring-content-in-md",
          children: "“Markdown”"
        }), " guide."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Components:"
        }), " Discover built-in callout and more in the ", createVNode(_components.a, {
          href: "/custom-components",
          children: "“Components”"
        }), " guide."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Deploy:"
        }), " Publish your work with the ", createVNode(_components.a, {
          href: "/resources/deployment",
          children: "“Deploy your site”"
        }), " guide in the Astro docs."]
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

const url = "src/content/docs/getting-started.mdx";
const file = "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/content/docs/getting-started.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/content/docs/getting-started.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
