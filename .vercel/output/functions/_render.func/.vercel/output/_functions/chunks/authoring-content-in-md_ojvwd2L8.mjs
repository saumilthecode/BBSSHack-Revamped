import { F as Fragment, _ as __astro_tag_component__, g as createVNode } from './astro/server_DyQOWlKk.mjs';
import { $ as $$Image } from './_astro_assets_D07zSGO7.mjs';
import 'clsx';

const __0__________assets_KittyAstronaut_svg__ = new Proxy({"src":"/_astro/KittyAstronaut.BK7vpFjd.svg","width":500,"height":500,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/assets/KittyAstronaut.svg";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Authoring Content in Markdown"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "frontmatter",
    "text": "Frontmatter"
  }, {
    "depth": 2,
    "slug": "inline-styles",
    "text": "Inline styles"
  }, {
    "depth": 2,
    "slug": "images",
    "text": "Images"
  }, {
    "depth": 2,
    "slug": "headings",
    "text": "Headings"
  }, {
    "depth": 3,
    "slug": "how-to-structure-page-content-in-celestialdocs",
    "text": "How to structure page content in CelestialDocs"
  }, {
    "depth": 3,
    "slug": "automatic-heading-anchor-links",
    "text": "Automatic heading anchor links"
  }, {
    "depth": 2,
    "slug": "blockquotes",
    "text": "Blockquotes"
  }, {
    "depth": 2,
    "slug": "code-blocks",
    "text": "Code blocks"
  }, {
    "depth": 2,
    "slug": "details",
    "text": "Details"
  }, {
    "depth": 2,
    "slug": "other-common-markdown-features",
    "text": "Other common Markdown features"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    "astro-image": "astro-image",
    blockquote: "blockquote",
    code: "code",
    del: "del",
    em: "em",
    h2: "h2",
    h3: "h3",
    img: "img",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ...props.components
  }, _component0 = _components["astro-image"];
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["CelestialDocs supports the full range of Markdown syntax in ", createVNode(_components.code, {
        children: ".md"
      }), " files as well as frontmatter YAML to define metadata such as a tilte and description."]
    }), "\n", createVNode(_components.h2, {
      id: "frontmatter",
      children: "Frontmatter"
    }), "\n", createVNode(_components.p, {
      children: ["You can modify individual pages in CelestialDocs by setting values in their fromtmatter. Frontmetter is set at the top of your files between ", createVNode(_components.code, {
        children: "---"
      }), " separators."]
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
          children: createVNode(_components.span, {
            style: {
              color: "#179299",
              "--shiki-dark": "#8BD5CA"
            },
            children: "---"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: "title: Sample"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#FE640B",
              "--shiki-dark": "#F5A97F"
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
            children: "`---`"
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
      children: ["Every page must include at least a ", createVNode(_components.code, {
        children: "title"
      }), ". See the ", createVNode(_components.a, {
        href: "/reference/frontmatter-ref",
        children: "frontmatter reference"
      }), " for all available fields and how to add custom fields."]
    }), "\n", createVNode(_components.h2, {
      id: "inline-styles",
      children: "Inline styles"
    }), "\n", createVNode(_components.p, {
      children: ["Text can be ", createVNode(_components.strong, {
        children: "bold"
      }), ", ", createVNode(_components.em, {
        children: "italic"
      }), " or ", createVNode(_components.del, {
        children: "strikethrough"
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
      "data-language": "md",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: "Text can be "
          }), createVNode(_components.span, {
            style: {
              color: "#7C7F93",
              "--shiki-dark": "#939AB7"
            },
            children: "**"
          }), createVNode(_components.span, {
            style: {
              color: "#D20F39",
              fontWeight: "bold",
              "--shiki-dark": "#ED8796",
              "--shiki-dark-font-weight": "bold"
            },
            children: "bold"
          }), createVNode(_components.span, {
            style: {
              color: "#7C7F93",
              "--shiki-dark": "#939AB7"
            },
            children: "**"
          }), createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#7C7F93",
              "--shiki-dark": "#939AB7"
            },
            children: "_"
          }), createVNode(_components.span, {
            style: {
              color: "#D20F39",
              fontStyle: "italic",
              "--shiki-dark": "#ED8796",
              "--shiki-dark-font-style": "italic"
            },
            children: "italic"
          }), createVNode(_components.span, {
            style: {
              color: "#7C7F93",
              "--shiki-dark": "#939AB7"
            },
            children: "_"
          }), createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: " or "
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
            children: "."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["You can ", createVNode(_components.a, {
        href: "/getting-started",
        children: "link to another page"
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
      "data-language": "md",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: "You can "
          }), createVNode(_components.span, {
            style: {
              color: "#7287FD",
              "--shiki-dark": "#B7BDF8"
            },
            children: "["
          }), createVNode(_components.span, {
            style: {
              color: "#7287FD",
              "--shiki-dark": "#B7BDF8"
            },
            children: "link to another page"
          }), createVNode(_components.span, {
            style: {
              color: "#7287FD",
              "--shiki-dark": "#B7BDF8"
            },
            children: "]"
          }), createVNode(_components.span, {
            style: {
              color: "#7C7F93",
              "--shiki-dark": "#939AB7"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#1E66F5",
              "--shiki-dark": "#8AADF4"
            },
            children: "/getting-started"
          }), createVNode(_components.span, {
            style: {
              color: "#7C7F93",
              "--shiki-dark": "#939AB7"
            },
            children: ")"
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
      children: ["You can highlight ", createVNode(_components.code, {
        children: "inline code"
      }), " with backticks."]
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
            children: "You can highlight "
          }), createVNode(_components.span, {
            style: {
              color: "#40A02B",
              "--shiki-dark": "#A6DA95"
            },
            children: "`inline code`"
          }), createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: " with backticks. "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "images",
      children: "Images"
    }), "\n", createVNode(_components.p, {
      children: ["Images in CelestialDocs use ", createVNode(_components.a, {
        href: "https://docs.astro.build/en/guides/images/",
        rel: "nofollow",
        target: "_blank",
        children: "Astro’s built-in optimized asset support"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: "Markdown and MDX support the Markdown syntax for displaying images that includes alt-text for screen readers and assistive technology."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://raw.githubusercontent.com/withastro/docs/main/public/default-og-image.png",
        alt: "An illustration of planets and stars featuring the word “astro”"
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
      "data-language": "md",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#1E66F5",
              "--shiki-dark": "#8AADF4"
            },
            children: "!["
          }), createVNode(_components.span, {
            style: {
              color: "#40A02B",
              "--shiki-dark": "#A6DA95"
            },
            children: "An illustration of planets and stars featuring the word “astro”"
          }), createVNode(_components.span, {
            style: {
              color: "#1E66F5",
              "--shiki-dark": "#8AADF4"
            },
            children: "]"
          }), createVNode(_components.span, {
            style: {
              color: "#7C7F93",
              "--shiki-dark": "#939AB7"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#1E66F5",
              "--shiki-dark": "#8AADF4"
            },
            children: "https://raw.githubusercontent.com/withastro/docs/main/public/default-og-image.png"
          }), createVNode(_components.span, {
            style: {
              color: "#7C7F93",
              "--shiki-dark": "#939AB7"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Relative image paths are also supported for images stored locally in your project."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_component0, {
        alt: "A kitty in space",
        src: __0__________assets_KittyAstronaut_svg__
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
      "data-language": "md",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#1E66F5",
              "--shiki-dark": "#8AADF4"
            },
            children: "!["
          }), createVNode(_components.span, {
            style: {
              color: "#40A02B",
              "--shiki-dark": "#A6DA95"
            },
            children: "A kitty in space"
          }), createVNode(_components.span, {
            style: {
              color: "#1E66F5",
              "--shiki-dark": "#8AADF4"
            },
            children: "]"
          }), createVNode(_components.span, {
            style: {
              color: "#7C7F93",
              "--shiki-dark": "#939AB7"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#1E66F5",
              "--shiki-dark": "#8AADF4"
            },
            children: "../../../assets/KittyAstronaut.svg"
          }), createVNode(_components.span, {
            style: {
              color: "#7C7F93",
              "--shiki-dark": "#939AB7"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "headings",
      children: "Headings"
    }), "\n", createVNode(_components.p, {
      children: "You can structure content using a heading. Headings in Markdown are indicated by a number of # at the start of the line."
    }), "\n", createVNode(_components.h3, {
      id: "how-to-structure-page-content-in-celestialdocs",
      children: "How to structure page content in CelestialDocs"
    }), "\n", createVNode(_components.p, {
      children: ["CelestialDocs is configured to automatically use your page title as a top-level heading and will include an “Overview” heading at top of each page’s table of contents. We recommend starting each page with regular paragraph text content and using on-page headings from ", createVNode(_components.code, {
        children: "<h2>"
      }), " and down:"]
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
          children: createVNode(_components.span, {
            style: {
              color: "#179299",
              "--shiki-dark": "#8BD5CA"
            },
            children: "---"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: "title: Markdown Guide"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: "description: How to use Markdown in CelestialDocs"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#FE640B",
              "--shiki-dark": "#F5A97F"
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
            children: "This page describes how to use Markdown in CelestialDocs."
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#FE640B",
              "--shiki-dark": "#F5A97F"
            },
            children: "## Inline Styles"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#FE640B",
              "--shiki-dark": "#F5A97F"
            },
            children: "## Headings"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "automatic-heading-anchor-links",
      children: "Automatic heading anchor links"
    }), "\n", createVNode(_components.p, {
      children: "Using headings in Markdown will automatically give you anchor links so you can link directly to certain sections of your page:"
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
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "---"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "title: My page of content"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "description: How to use CelestialDocs's built-in anchor links"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "---"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "## Introduction"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "I can link to [my conclusion](#conclusion) lower on the same page."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "## Conclusion"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "`https://my-site.com/page1/#introduction` navigates directly to my Introduction."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Level 2 (", createVNode(_components.code, {
        children: "<h2>"
      }), ") and Level 3 (", createVNode(_components.code, {
        children: "<h3>"
      }), ") headings will automatically appear in the page table of contents."]
    }), "\n", createVNode(_components.p, {
      children: ["Learn more about how Astro processes heading ids in the ", createVNode(_components.a, {
        href: "https://docs.astro.build/en/guides/markdown-content/#heading-ids",
        rel: "nofollow",
        target: "_blank",
        children: "Astro Documentation"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "blockquotes",
      children: "Blockquotes"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "This is a blockquote, which is commonly used when quoting another person or document."
      }), "\n", createVNode(_components.p, {
        children: ["Blockquotes are indicated by a ", createVNode(_components.code, {
          children: ">"
        }), " at the start of each line."]
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
          children: createVNode(_components.span, {
            style: {
              color: "#EA76CB",
              "--shiki-dark": "#F5BDE6"
            },
            children: "> This is a blockquote, which is commonly used when quoting another person or document."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#EA76CB",
              "--shiki-dark": "#F5BDE6"
            },
            children: ">"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#EA76CB",
              "--shiki-dark": "#F5BDE6"
            },
            children: "> Blockquotes are indicated by a "
          }), createVNode(_components.span, {
            style: {
              color: "#40A02B",
              "--shiki-dark": "#A6DA95"
            },
            children: "`>`"
          }), createVNode(_components.span, {
            style: {
              color: "#EA76CB",
              "--shiki-dark": "#F5BDE6"
            },
            children: " at the start of each line."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "code-blocks",
      children: "Code blocks"
    }), "\n", createVNode(_components.p, {
      children: "A code block is indicated by a block with three backticks ``` at the start and end. You can indicate the programming language being used after the opening backticks."
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
            children: "// Javascript code with syntax highlighting."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#8839EF",
              "--shiki-dark": "#C6A0F6"
            },
            children: "var"
          }), createVNode(_components.span, {
            style: {
              color: "#1E66F5",
              fontStyle: "italic",
              "--shiki-dark": "#8AADF4",
              "--shiki-dark-font-style": "italic"
            },
            children: " fun"
          }), createVNode(_components.span, {
            style: {
              color: "#179299",
              "--shiki-dark": "#8BD5CA"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#8839EF",
              "--shiki-dark": "#C6A0F6"
            },
            children: " function"
          }), createVNode(_components.span, {
            style: {
              color: "#1E66F5",
              fontStyle: "italic",
              "--shiki-dark": "#8AADF4",
              "--shiki-dark-font-style": "italic"
            },
            children: " lang"
          }), createVNode(_components.span, {
            style: {
              color: "#7C7F93",
              "--shiki-dark": "#939AB7"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E64553",
              fontStyle: "italic",
              "--shiki-dark": "#EE99A0",
              "--shiki-dark-font-style": "italic"
            },
            children: "l"
          }), createVNode(_components.span, {
            style: {
              color: "#7C7F93",
              "--shiki-dark": "#939AB7"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#7C7F93",
              "--shiki-dark": "#939AB7"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: "  dateformat"
          }), createVNode(_components.span, {
            style: {
              color: "#179299",
              "--shiki-dark": "#8BD5CA"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: "i18n "
          }), createVNode(_components.span, {
            style: {
              color: "#179299",
              "--shiki-dark": "#8BD5CA"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#1E66F5",
              fontStyle: "italic",
              "--shiki-dark": "#8AADF4",
              "--shiki-dark-font-style": "italic"
            },
            children: " require"
          }), createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#40A02B",
              "--shiki-dark": "#A6DA95"
            },
            children: "'./lang/'"
          }), createVNode(_components.span, {
            style: {
              color: "#179299",
              "--shiki-dark": "#8BD5CA"
            },
            children: " +"
          }), createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: " l)"
          }), createVNode(_components.span, {
            style: {
              color: "#7C7F93",
              "--shiki-dark": "#939AB7"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#8839EF",
              "--shiki-dark": "#C6A0F6"
            },
            children: "  return"
          }), createVNode(_components.span, {
            style: {
              color: "#FE640B",
              "--shiki-dark": "#F5A97F"
            },
            children: " true"
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
              color: "#7C7F93",
              "--shiki-dark": "#939AB7"
            },
            children: "};"
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
      "data-language": "text",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "```js"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "// Javascript code with syntax highlighting."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "var fun = function lang(l) {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  dateformat.i18n = require('./lang/' + l);"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  return true;"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "};"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "```"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "details",
      children: "Details"
    }), "\n", createVNode(_components.p, {
      children: "Details (also known as “disclosures” or “accordions”) are useful to hide content that is not immediately relevant. Users can click a short summary to expand and view the full content."
    }), "\n", createVNode(_components.p, {
      children: ["Use the standard HTML ", createVNode(_components.code, {
        children: "<details>"
      }), " and ", createVNode(_components.code, {
        children: "<summary>"
      }), " elements in your Markdown content to create a disclosure widget."]
    }), "\n", createVNode(_components.p, {
      children: ["You can nest any other Markdown syntax inside a ", createVNode(_components.code, {
        children: "<details>"
      }), " element."]
    }), "\n", createVNode("details", {
      children: [createVNode("summary", {
        children: "Where and when is the Andromeda constellation most visible?"
      }), createVNode(_components.p, {
        children: ["The ", createVNode(_components.a, {
          href: "https://en.wikipedia.org/wiki/Andromeda_(constellation)",
          rel: "nofollow",
          target: "_blank",
          children: "Andromeda constellation"
        }), " is most visible in the night sky during the month of November at latitudes between ", createVNode(_components.code, {
          children: "+90°"
        }), " and ", createVNode(_components.code, {
          children: "-40°"
        }), "."]
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
      "data-language": "html",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#179299",
              "--shiki-dark": "#8BD5CA"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#1E66F5",
              "--shiki-dark": "#8AADF4"
            },
            children: "details"
          }), createVNode(_components.span, {
            style: {
              color: "#179299",
              "--shiki-dark": "#8BD5CA"
            },
            children: ">"
          })]
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
              color: "#1E66F5",
              "--shiki-dark": "#8AADF4"
            },
            children: "summary"
          }), createVNode(_components.span, {
            style: {
              color: "#179299",
              "--shiki-dark": "#8BD5CA"
            },
            children: ">"
          }), createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: "Where and when is the Andromeda constellation most visible?"
          }), createVNode(_components.span, {
            style: {
              color: "#179299",
              "--shiki-dark": "#8BD5CA"
            },
            children: "</"
          }), createVNode(_components.span, {
            style: {
              color: "#1E66F5",
              "--shiki-dark": "#8AADF4"
            },
            children: "summary"
          }), createVNode(_components.span, {
            style: {
              color: "#179299",
              "--shiki-dark": "#8BD5CA"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: "The [Andromeda constellation]("
          }), createVNode(_components.span, {
            style: {
              color: "#179299",
              "--shiki-dark": "#8BD5CA"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#1E66F5",
              "--shiki-dark": "#8AADF4"
            },
            children: "https://en.wikipedia.org/wiki/Andromeda_(constellation)"
          }), createVNode(_components.span, {
            style: {
              color: "#179299",
              "--shiki-dark": "#8BD5CA"
            },
            children: ">"
          }), createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: ") is most visible in the night sky during the month of November at latitudes between `+90°` and `-40°`."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
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
              color: "#1E66F5",
              "--shiki-dark": "#8AADF4"
            },
            children: "details"
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
    }), "\n", createVNode(_components.h2, {
      id: "other-common-markdown-features",
      children: "Other common Markdown features"
    }), "\n", createVNode(_components.p, {
      children: ["CelestialDocs supports all other Markdown authoring syntax, such as lists and tables. See the ", createVNode(_components.a, {
        href: "https://www.markdownguide.org/cheat-sheet/",
        rel: "nofollow",
        target: "_blank",
        children: "Markdown Cheat Sheet from The Markdown Guide"
      }), " for a quick overview of all the Markdown syntax elements."]
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

const url = "src/content/docs/Guides/authoring-content-in-md.mdx";
const file = "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/content/docs/Guides/authoring-content-in-md.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/content/docs/Guides/authoring-content-in-md.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
