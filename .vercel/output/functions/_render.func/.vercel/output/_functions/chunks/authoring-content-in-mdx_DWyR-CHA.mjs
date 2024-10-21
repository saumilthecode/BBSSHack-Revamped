import { F as Fragment, _ as __astro_tag_component__, g as createVNode } from './astro/server_B4TpmAlj.mjs';
import { $ as $$Image } from './_astro_assets_DOqoC0-U.mjs';
import 'clsx';

const frontmatter = {
  "title": "Authoring Content in MDX"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "using-a-component",
    "text": "Using a component"
  }, {
    "depth": 2,
    "slug": "using-gfm-github-flavored-markdown",
    "text": "Using GFM (GitHub-Flavored Markdown)"
  }, {
    "depth": 3,
    "slug": "task-lists",
    "text": "Task Lists"
  }, {
    "depth": 3,
    "slug": "tables",
    "text": "Tables"
  }, {
    "depth": 3,
    "slug": "strikethrough",
    "text": "Strikethrough"
  }, {
    "depth": 2,
    "slug": "frontmatter",
    "text": "Frontmatter"
  }, {
    "depth": 2,
    "slug": "using-javascript-expressions",
    "text": "Using JavaScript Expressions"
  }, {
    "depth": 2,
    "slug": "syntax-highlighting",
    "text": "Syntax Highlighting"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    del: "del",
    h2: "h2",
    h3: "h3",
    input: "input",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["CelestialDocs supports ", createVNode(_components.a, {
        href: "https://mdxjs.com/",
        rel: "nofollow",
        target: "_blank",
        children: "MDX"
      }), " files, which extend Markdown by allowing the inclusion of React components within your content. This enables dynamic and interactive documentation. We specifically use ", createVNode(_components.a, {
        href: "https://mdxjs.com/guides/gfm/",
        rel: "nofollow",
        target: "_blank",
        children: "GitHub flavored markdown (GFM)"
      }), ". Markdown features, refer to the ", createVNode(_components.a, {
        href: "/guides/authoring-content-in-md",
        children: "Markdown documentation"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "using-a-component",
      children: "Using a component"
    }), "\n", createVNode(_components.p, {
      children: "You can use a component by importing it into your MDX file and then rendering it as a JSX tag. These look like HTML tags but start with an uppercase letter matching the name in your import statement:"
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
              color: "#40A02B",
              "--shiki-dark": "#A6DA95"
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
            children: " Welcome to my docs"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#40A02B",
              "--shiki-dark": "#A6DA95"
            },
            children: "---"
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
            children: "import Callout from \"@/components/Callout.astro\";"
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
            children: "Sample callout"
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
    }), "\n", createVNode(_components.p, {
      children: ["See the ", createVNode(_components.a, {
        href: "/guides/components",
        children: "components"
      }), " for all custom components and their available fields."]
    }), "\n", createVNode(_components.h2, {
      id: "using-gfm-github-flavored-markdown",
      children: "Using GFM (GitHub-Flavored Markdown)"
    }), "\n", createVNode(_components.p, {
      children: ["MDX in CelestialDocs supports ", createVNode(_components.a, {
        href: "https://mdxjs.com/guides/gfm/",
        rel: "nofollow",
        target: "_blank",
        children: "GitHub flavored markdown (GFM)"
      }), ", which includes additional features such as tables, task lists, and strikethrough text."]
    }), "\n", createVNode(_components.h3, {
      id: "task-lists",
      children: "Task Lists"
    }), "\n", createVNode(_components.p, {
      children: "You can create task lists using GFM syntax."
    }), "\n", createVNode(_components.ul, {
      class: "contains-task-list",
      children: ["\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " Task 1"]
      }), "\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Task 2"]
      }), "\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Task 3"]
      }), "\n"]
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
      "data-language": "md",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#179299",
              "--shiki-dark": "#8BD5CA"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#7287FD",
              "--shiki-dark": "#B7BDF8"
            },
            children: " ["
          }), createVNode(_components.span, {
            style: {
              color: "#7287FD",
              "--shiki-dark": "#B7BDF8"
            },
            children: "x"
          }), createVNode(_components.span, {
            style: {
              color: "#7287FD",
              "--shiki-dark": "#B7BDF8"
            },
            children: "]"
          }), createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: " Task 1"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#179299",
              "--shiki-dark": "#8BD5CA"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: " [ ] Task 2"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#179299",
              "--shiki-dark": "#8BD5CA"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: " [ ] Task 3"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "tables",
      children: "Tables"
    }), "\n", createVNode(_components.p, {
      children: "You can also create tables using GFM."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Syntax"
          }), createVNode(_components.th, {
            children: "Description"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Header"
          }), createVNode(_components.td, {
            children: "Title"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Paragraph"
          }), createVNode(_components.td, {
            children: "Text"
          })]
        })]
      })]
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
      "data-language": "md",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#7C7F93",
              "--shiki-dark": "#939AB7"
            },
            children: "|"
          }), createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: " Syntax    "
          }), createVNode(_components.span, {
            style: {
              color: "#7C7F93",
              "--shiki-dark": "#939AB7"
            },
            children: "|"
          }), createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: " Description "
          }), createVNode(_components.span, {
            style: {
              color: "#7C7F93",
              "--shiki-dark": "#939AB7"
            },
            children: "|"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#7C7F93",
              "--shiki-dark": "#939AB7"
            },
            children: "|"
          }), createVNode(_components.span, {
            style: {
              color: "#7C7F93",
              "--shiki-dark": "#939AB7"
            },
            children: " ---------"
          }), createVNode(_components.span, {
            style: {
              color: "#7C7F93",
              "--shiki-dark": "#939AB7"
            },
            children: " |"
          }), createVNode(_components.span, {
            style: {
              color: "#7C7F93",
              "--shiki-dark": "#939AB7"
            },
            children: " -----------"
          }), createVNode(_components.span, {
            style: {
              color: "#7C7F93",
              "--shiki-dark": "#939AB7"
            },
            children: " |"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#7C7F93",
              "--shiki-dark": "#939AB7"
            },
            children: "|"
          }), createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: " Header    "
          }), createVNode(_components.span, {
            style: {
              color: "#7C7F93",
              "--shiki-dark": "#939AB7"
            },
            children: "|"
          }), createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: " Title       "
          }), createVNode(_components.span, {
            style: {
              color: "#7C7F93",
              "--shiki-dark": "#939AB7"
            },
            children: "|"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#7C7F93",
              "--shiki-dark": "#939AB7"
            },
            children: "|"
          }), createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: " Paragraph "
          }), createVNode(_components.span, {
            style: {
              color: "#7C7F93",
              "--shiki-dark": "#939AB7"
            },
            children: "|"
          }), createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: " Text        "
          }), createVNode(_components.span, {
            style: {
              color: "#7C7F93",
              "--shiki-dark": "#939AB7"
            },
            children: "|"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "strikethrough",
      children: "Strikethrough"
    }), "\n", createVNode(_components.p, {
      children: ["Strikethrough text can be created using double tilde ", createVNode(_components.code, {
        children: "~~"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["This is ", createVNode(_components.del, {
        children: "strikethrough"
      }), " text."]
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
      "data-language": "md",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: "This is "
          }), createVNode(_components.span, {
            style: {
              color: "#7C7F93",
              "--shiki-dark": "#939AB7"
            },
            children: "~~"
          }), createVNode(_components.span, {
            style: {
              color: "#6C6F85",
              "--shiki-dark": "#A5ADCB"
            },
            children: "strikethrough"
          }), createVNode(_components.span, {
            style: {
              color: "#7C7F93",
              "--shiki-dark": "#939AB7"
            },
            children: "~~"
          }), createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: " text."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "frontmatter",
      children: "Frontmatter"
    }), "\n", createVNode(_components.p, {
      children: "MDX files support frontmatter in the same way as Markdown files. You can define metadata at the top of the file."
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
              color: "#40A02B",
              "--shiki-dark": "#A6DA95"
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
            children: " Sample MDX Page"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#40A02B",
              "--shiki-dark": "#A6DA95"
            },
            children: "---"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: "Page content goes here, after "
          }), createVNode(_components.span, {
            style: {
              color: "#40A02B",
              "--shiki-dark": "#A6DA95"
            },
            children: "`"
          }), createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: "---"
          }), createVNode(_components.span, {
            style: {
              color: "#40A02B",
              "--shiki-dark": "#A6DA95"
            },
            children: "`"
          }), createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: "."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Refer to the frontmatter reference for all available fields and how to add custom fields."
    }), "\n", createVNode(_components.h2, {
      id: "using-javascript-expressions",
      children: "Using JavaScript Expressions"
    }), "\n", createVNode(_components.p, {
      children: "MDX allows you to use JavaScript expressions within your content. This can be useful for dynamic content and calculations."
    }), "\n", createVNode(_components.p, {
      children: ["Current year: ", new Date().getFullYear()]
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
            children: "Current year: {new Date().getFullYear()}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
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
          children: [createVNode(_components.span, {
            style: {
              color: "#40A02B",
              "--shiki-dark": "#A6DA95"
            },
            children: "**"
          }), createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: "Fibonacci Sequence"
          }), createVNode(_components.span, {
            style: {
              color: "#40A02B",
              "--shiki-dark": "#A6DA95"
            },
            children: "**"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: "The first 10 numbers in the Fibonacci sequence are:"
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
            children: "{"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: "  Array.from({ length: 10 }).map(("
          }), createVNode(_components.span, {
            style: {
              color: "#40A02B",
              "--shiki-dark": "#A6DA95"
            },
            children: "_"
          }), createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: ", i) => ("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: "    <span key={i}>{fibonacci(i)} </span>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: "  ))"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "syntax-highlighting",
      children: "Syntax Highlighting"
    }), "\n", createVNode(_components.p, {
      children: "MDX supports syntax highlighting for code blocks using backticks. You can specify the language for proper highlighting."
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
          children: [createVNode(_components.span, {
            style: {
              color: "#40A02B",
              "--shiki-dark": "#A6DA95"
            },
            children: "```"
          }), createVNode(_components.span, {
            style: {
              color: "#1E66F5",
              fontStyle: "italic",
              "--shiki-dark": "#8AADF4",
              "--shiki-dark-font-style": "italic"
            },
            children: "jsx"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: "const MyComponent = () => {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: "  return <div>Hello, MDX!</div>;"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: "};"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#40A02B",
              "--shiki-dark": "#A6DA95"
            },
            children: "```"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["MDX combines the best of Markdown and JSX, making it a powerful tool for creating rich, interactive documentation. For more details on Markdown syntax, please see the ", createVNode(_components.a, {
        href: "/guides/authoring-content-in-md",
        children: "Markdown documentation"
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

const url = "src/content/docs/Guides/authoring-content-in-mdx.mdx";
const file = "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/content/docs/Guides/authoring-content-in-mdx.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/content/docs/Guides/authoring-content-in-mdx.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
