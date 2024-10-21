import { F as Fragment, _ as __astro_tag_component__, g as createVNode } from './astro/server_B4TpmAlj.mjs';
import { $ as $$Image } from './_astro_assets_DOqoC0-U.mjs';
import 'clsx';

const frontmatter = {
  "title": "Sidebar Navigation"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "custom-order",
    "text": "Custom order"
  }, {
    "depth": 2,
    "slug": "hide-sidebar-navigation",
    "text": "Hide Sidebar Navigation"
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
      children: ["By default, CelestialDocs sites include sidebar navigation. It is generated after parsing the folder structure of ", createVNode(_components.code, {
        children: "docs"
      }), " folder."]
    }), "\n", createVNode(_components.h2, {
      id: "custom-order",
      children: "Custom order"
    }), "\n", createVNode(_components.p, {
      children: "By default, it will order the side navigation items (folders and files) alphabetically. But we can provide a custom order to the side navigation items."
    }), "\n", createVNode(_components.p, {
      children: ["In ", createVNode(_components.code, {
        children: "config.js"
      }), " you can set ", createVNode(_components.code, {
        children: "side_nav_menu_order"
      }), " with an order of items. Mind that the type is an array of strings. Each string is just the ", createVNode(_components.code, {
        children: "slug"
      }), " of that page."]
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
            children: " side_nav_menu_order"
          }), createVNode(_components.span, {
            style: {
              color: "#179299",
              "--shiki-dark": "#8BD5CA"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#8839EF",
              "--shiki-dark": "#C6A0F6"
            },
            children: " string"
          }), createVNode(_components.span, {
            style: {
              color: "#DF8E1D",
              fontStyle: "italic",
              "--shiki-dark": "#EED49F",
              "--shiki-dark-font-style": "italic"
            },
            children: "[] "
          }), createVNode(_components.span, {
            style: {
              color: "#179299",
              "--shiki-dark": "#8BD5CA"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: " ["
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#40A02B",
              "--shiki-dark": "#A6DA95"
            },
            children: "  \"getting-started\""
          }), createVNode(_components.span, {
            style: {
              color: "#7C7F93",
              "--shiki-dark": "#939AB7"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#40A02B",
              "--shiki-dark": "#A6DA95"
            },
            children: "  \"guides\""
          }), createVNode(_components.span, {
            style: {
              color: "#7C7F93",
              "--shiki-dark": "#939AB7"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#40A02B",
              "--shiki-dark": "#A6DA95"
            },
            children: "  \"guides/pages\""
          }), createVNode(_components.span, {
            style: {
              color: "#7C7F93",
              "--shiki-dark": "#939AB7"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#40A02B",
              "--shiki-dark": "#A6DA95"
            },
            children: "  \"guides/table-of-contents\""
          }), createVNode(_components.span, {
            style: {
              color: "#7C7F93",
              "--shiki-dark": "#939AB7"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#40A02B",
              "--shiki-dark": "#A6DA95"
            },
            children: "  \"guides/sidebar-navigation\""
          }), createVNode(_components.span, {
            style: {
              color: "#7C7F93",
              "--shiki-dark": "#939AB7"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#40A02B",
              "--shiki-dark": "#A6DA95"
            },
            children: "  \"custom-components\""
          }), createVNode(_components.span, {
            style: {
              color: "#7C7F93",
              "--shiki-dark": "#939AB7"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#40A02B",
              "--shiki-dark": "#A6DA95"
            },
            children: "  \"reference\""
          }), createVNode(_components.span, {
            style: {
              color: "#7C7F93",
              "--shiki-dark": "#939AB7"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4C4F69",
              "--shiki-dark": "#CAD3F5"
            },
            children: "]"
          }), createVNode(_components.span, {
            style: {
              color: "#7C7F93",
              "--shiki-dark": "#939AB7"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["You can include ", createVNode(_components.code, {
        children: "folder-name"
      }), ", ", createVNode(_components.code, {
        children: "md"
      }), " & ", createVNode(_components.code, {
        children: "mdx"
      }), " files. If you don’t order every items, then the left out folders and files will the ordered after that alphabetically. Don’t add extensions for ", createVNode(_components.code, {
        children: "md"
      }), " & ", createVNode(_components.code, {
        children: "mdx"
      }), " files."]
    }), "\n", createVNode(_components.p, {
      children: "You can find the slug of any page, if you simply run an instance of your project and look for the path after the port number in the url. For instance, the url in my local machine for this exact page is"
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
            children: "http://localhost:4321/guides/sidebar-navigation"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["The slug will be ", createVNode(_components.code, {
        children: "guides/sidebar-navigation"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "hide-sidebar-navigation",
      children: "Hide Sidebar Navigation"
    }), "\n", createVNode(_components.h3, {
      id: "hide-globally",
      children: "Hide globally"
    }), "\n", createVNode(_components.p, {
      children: ["In ", createVNode(_components.code, {
        children: "config.js"
      }), ", you can hide sidebar navigation by keeping the value of ", createVNode(_components.code, {
        children: "hide_side_navigations"
      }), " as ", createVNode(_components.code, {
        children: "true"
      }), ". This will hide the sidebar navigation for all pages."]
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
            children: "  hide_side_navigations: "
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
    }), "\n", createVNode(_components.h3, {
      id: "hide-locally",
      children: "Hide locally"
    }), "\n", createVNode(_components.p, {
      children: ["To hide sidebar navigation for specific pages only, then add ", createVNode(_components.code, {
        children: "hide_sidenav"
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
            children: "hide_sidenav"
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

const url = "src/content/docs/Guides/sidebar-navigation.mdx";
const file = "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/content/docs/Guides/sidebar-navigation.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/content/docs/Guides/sidebar-navigation.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
