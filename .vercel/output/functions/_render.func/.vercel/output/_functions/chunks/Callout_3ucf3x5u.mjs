import { F as Fragment, _ as __astro_tag_component__, g as createVNode } from './astro/server_DyQOWlKk.mjs';
import { $ as $$Image } from './_astro_assets_D07zSGO7.mjs';
import { $ as $$Callout } from './Callout_D3e1QwRt.mjs';
import { Cat } from 'lucide-react';
import 'clsx';

const frontmatter = {
  "title": "Callout"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "callout",
    "text": "Callout"
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
      id: "callout",
      children: "Callout"
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "Callout"
      }), " component is designed to highlight important information, warnings, errors, or successes in your application. It is a versatile alert box with customizable variants and titles."]
    }), "\n", createVNode(_components.h3, {
      id: "props",
      children: "Props"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: createVNode(_components.code, {
              children: "variant"
            })
          })
        }), "\n", createVNode(_components.p, {
          children: ["Type: ", createVNode(_components.code, {
            children: "string"
          })]
        }), "\n", createVNode(_components.p, {
          children: "Default: “info”"
        }), "\n", createVNode(_components.p, {
          children: ["Options: ", createVNode(_components.code, {
            children: "\"info\" | \"warning\" | \"danger\" | \"success\""
          })]
        }), "\n", createVNode(_components.p, {
          children: "Description: Defines the type of alert to display. The variant determines the color, icon, and default title of the alert."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
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
          children: "Default: Default titles based on the variant"
        }), "\n", createVNode(_components.p, {
          children: "Description: Custom title for the alert. If not provided, the default title for the specified variant will be used."
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
          children: "Default: Default icon based on the variant"
        }), "\n", createVNode(_components.p, {
          children: ["Description: A custom icon to use in the alert. If not provided, the default icon for the specified variant will be used. You can look for icons at ", createVNode(_components.a, {
            href: "https://lucide.dev/icons/",
            rel: "nofollow",
            target: "_blank",
            children: "lucide.dev"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "basic-usage",
      children: "Basic Usage"
    }), "\n", createVNode(_components.p, {
      children: "To use the Callout component, import it and use it in your Astro files with the desired variant and title."
    }), "\n", createVNode($$Callout, {
      variant: "info",
      children: createVNode(_components.p, {
        children: "This is an info message."
      })
    }), "\n", createVNode($$Callout, {
      variant: "warning",
      title: "Custom Warning Title",
      children: createVNode(_components.p, {
        children: "This is a warning message with a custom title."
      })
    }), "\n", createVNode($$Callout, {
      variant: "danger",
      icon: Cat,
      children: createVNode(_components.p, {
        children: "This is a danger message with a custom icon."
      })
    }), "\n", createVNode($$Callout, {
      variant: "success",
      title: "Custom Success Title",
      icon: Cat,
      children: createVNode(_components.p, {
        children: "This is a success message with a custom title and custom icon."
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
            children: "import Callout from '@/components/Callout.astro';"
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
            children: "<Callout variant=\"info\">"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: "  This is an info message."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: "</Callout>"
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
            children: "<Callout variant=\"warning\" title=\"Custom Warning Title\">"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: "  This is a warning message with a custom title."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: "</Callout>"
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
            children: "<Callout variant=\"danger\" icon={Cat}>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: "  This is a danger message with a custom icon."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: "</Callout>"
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
            children: "<Callout variant=\"success\" title=\"Custom Success Title\" icon={Cat}>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: "  This is a success message with a custom title and custom icon."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: "</Callout>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "default-behavior",
      children: "Default Behavior"
    }), "\n", createVNode(_components.p, {
      children: "If no variant is provided, the info variant will be used by default. Similarly, if no title is provided, the default title for the specified variant will be used."
    }), "\n", createVNode($$Callout, {
      children: createVNode(_components.p, {
        children: "This is an info message using the default settings."
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
      "data-language": "astro",
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
            children: "---"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#8839EF",
              "--shiki-dark": "#C6A0F6"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: " Callout "
          }), createVNode(_components.span, {
            style: {
              color: "#8839EF",
              "--shiki-dark": "#C6A0F6"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#40A02B",
              "--shiki-dark": "#A6DA95"
            },
            children: " '@/components/Callout.astro'"
          }), createVNode(_components.span, {
            style: {
              color: "#7C7F93",
              "--shiki-dark": "#939AB7"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#9CA0B0",
              fontStyle: "italic",
              "--shiki-dark": "#6E738D",
              "--shiki-dark-font-style": "italic"
            },
            children: "---"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#9CA0B0",
              fontStyle: "italic",
              "--shiki-dark": "#6E738D",
              "--shiki-dark-font-style": "italic"
            },
            children: "<!-- Using default info variant and title -->"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#179299",
              "--shiki-dark": "#8BD5CA"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#EA76CB",
              "--shiki-dark": "#F5BDE6"
            },
            children: "Callout"
          }), createVNode(_components.span, {
            style: {
              color: "#179299",
              "--shiki-dark": "#8BD5CA"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: "  This is an info message using the default settings."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#179299",
              "--shiki-dark": "#8BD5CA"
            },
            children: "</"
          }), createVNode(_components.span, {
            style: {
              color: "#EA76CB",
              "--shiki-dark": "#F5BDE6"
            },
            children: "Callout"
          }), createVNode(_components.span, {
            style: {
              color: "#179299",
              "--shiki-dark": "#8BD5CA"
            },
            children: ">"
          })]
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

const url = "src/content/docs/Custom%20Components/Callout.mdx";
const file = "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/content/docs/Custom Components/Callout.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/content/docs/Custom Components/Callout.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
