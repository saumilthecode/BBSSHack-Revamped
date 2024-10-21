import { F as Fragment, _ as __astro_tag_component__, g as createVNode } from './astro/server_DyQOWlKk.mjs';
import { $ as $$Image } from './_astro_assets_D07zSGO7.mjs';
import { $ as $$Card } from './Card_aoLQD33x.mjs';
import { Cat } from 'lucide-react';
import 'clsx';

const frontmatter = {
  "title": "Card"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "card",
    "text": "Card"
  }, {
    "depth": 3,
    "slug": "props",
    "text": "Props"
  }, {
    "depth": 3,
    "slug": "basic-usage",
    "text": "Basic Usage"
  }, {
    "depth": 3,
    "slug": "default-behavior",
    "text": "Default Behavior"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "card",
      children: "Card"
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "Card"
      }), " component is designed to present content in a styled container with support for custom icons and colors. It is a versatile component for displaying information with optional icon and color customization."]
    }), "\n", createVNode(_components.h3, {
      id: "props",
      children: "Props"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: createVNode(_components.code, {
              children: "title"
            })
          })
        }), "\n", createVNode(_components.p, {
          children: ["Type: ", createVNode(_components.code, {
            children: "string"
          })]
        }), "\n", createVNode(_components.p, {
          children: "Description: The title text to display in the card."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: createVNode(_components.code, {
              children: "icon"
            })
          })
        }), "\n", createVNode(_components.p, {
          children: ["Type: ", createVNode(_components.code, {
            children: "LucideIcon"
          }), " (optional)"]
        }), "\n", createVNode(_components.p, {
          children: ["Default: ", createVNode(_components.code, {
            children: "Terminal"
          })]
        }), "\n", createVNode(_components.p, {
          children: ["Description: A custom icon to display in the card. If not provided, the default ", createVNode(_components.code, {
            children: "Terminal"
          }), " icon will be used. You can look for icons at ", createVNode(_components.a, {
            href: "https://lucide.dev/icons/",
            rel: "nofollow",
            target: "_blank",
            children: "lucide.dev"
          }), "."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: createVNode(_components.code, {
              children: "color"
            })
          })
        }), "\n", createVNode(_components.p, {
          children: ["Type: ", createVNode(_components.code, {
            children: "string"
          }), " (optional)"]
        }), "\n", createVNode(_components.p, {
          children: ["Default: ", createVNode(_components.code, {
            children: "\"primary\""
          })]
        }), "\n", createVNode(_components.p, {
          children: ["Options:\n", createVNode("span", {
            class: "bg-Pink text-background p-1 border rounded text-sm font-semibold",
            children: "“Pink”"
          }), "\n", createVNode("span", {
            class: "bg-Purple text-background p-1 border rounded text-sm font-semibold",
            children: "“Purple”"
          }), "\n", createVNode("span", {
            class: "bg-Red text-background p-1 border rounded text-sm font-semibold",
            children: "“Red”"
          }), "\n", createVNode("span", {
            class: "bg-Orange text-background p-1 border rounded text-sm font-semibold",
            children: "“Orange”"
          }), "\n", createVNode("span", {
            class: "bg-Yellow text-background p-1 border rounded text-sm font-semibold",
            children: "“Yellow”"
          }), "\n", createVNode("span", {
            class: "bg-Green text-background p-1 border rounded text-sm font-semibold",
            children: "“Green”"
          }), "\n", createVNode("span", {
            class: "bg-Teal text-background p-1 border rounded text-sm font-semibold",
            children: "“Teal”"
          }), "\n", createVNode("span", {
            class: "bg-Sky text-background p-1 border rounded text-sm font-semibold",
            children: "“Sky”"
          }), "\n", createVNode("span", {
            class: "bg-Blue text-background p-1 border rounded text-sm font-semibold",
            children: "“Blue”"
          })]
        }), "\n", createVNode(_components.p, {
          children: ["Description: The background color for the card. This is used for both the card’s background and the button’s hover state. If not provided, the default color is ", createVNode("span", {
            class: "bg-primary text-background p-1 border rounded text-sm font-semibold",
            children: "“primary”"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "basic-usage",
      children: "Basic Usage"
    }), "\n", createVNode(_components.p, {
      children: "To use the Card component, import it and use it in your Astro files with the desired title, optional custom icon, and color."
    }), "\n", createVNode($$Card, {
      title: "Default Card",
      children: createVNode(_components.p, {
        children: "This is a card with default settings."
      })
    }), "\n", createVNode($$Card, {
      title: "Card with Custom Icon",
      icon: Cat,
      children: createVNode(_components.p, {
        children: "This is a card with a custom icon."
      })
    }), "\n", createVNode($$Card, {
      title: "Card with Custom Icon and Color",
      icon: Cat,
      color: "Red",
      children: createVNode(_components.p, {
        children: "This is a card with a custom icon and color."
      })
    }), "\n", createVNode($$Card, {
      title: "Card with Custom Color",
      color: "Green",
      children: createVNode(_components.p, {
        children: "This is a card with a custom color."
      })
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
      "data-language": "mdx",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: "import Card from '@/components/Card.astro';"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: "import { Cat } from 'lucide-react';"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: "<Card title=\"Default Card\">"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: "  This is a card with default settings."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: "</Card>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: "<Card title=\"Card with Custom Icon\" icon={Cat}>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: "  This is a card with a custom icon."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: "</Card>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: "<Card title=\"Card with Custom Icon and Color\" icon={Cat} color=\"Red\">"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: "  This is a card with a custom icon and color."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: "</Card>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: "<Card title=\"Card with Custom Color\" color=\"Green\">"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: "  This is a card with a custom color."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: "</Card>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "default-behavior",
      children: "Default Behavior"
    }), "\n", createVNode(_components.p, {
      children: ["If no ", createVNode(_components.code, {
        children: "icon"
      }), " is provided, the ", createVNode(_components.code, {
        children: "Terminal"
      }), " icon will be used by default. Similarly, if no ", createVNode(_components.code, {
        children: "color"
      }), " is provided, the default color will be ", createVNode(_components.code, {
        children: "\"primary\""
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
      "data-language": "mdx",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: "import Card from '@/components/Card.astro';"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: "<Card title=\"Default Card\">"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: "  This is a card with default settings."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: "</Card>"
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

const url = "src/content/docs/Custom%20Components/Card.mdx";
const file = "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/content/docs/Custom Components/Card.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/content/docs/Custom Components/Card.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
