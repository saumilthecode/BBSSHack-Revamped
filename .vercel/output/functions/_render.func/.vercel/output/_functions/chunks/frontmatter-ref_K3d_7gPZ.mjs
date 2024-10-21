import { F as Fragment, _ as __astro_tag_component__, g as createVNode } from './astro/server_B4TpmAlj.mjs';
import { $ as $$Image } from './_astro_assets_DOqoC0-U.mjs';
import 'clsx';

const frontmatter = {
  "title": "Frontmatter Reference"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "properties",
    "text": "Properties"
  }, {
    "depth": 3,
    "slug": "title",
    "text": "title"
  }, {
    "depth": 3,
    "slug": "author",
    "text": "author"
  }, {
    "depth": 3,
    "slug": "pubdatetime",
    "text": "pubDatetime"
  }, {
    "depth": 3,
    "slug": "moddatetime",
    "text": "modDatetime"
  }, {
    "depth": 3,
    "slug": "description",
    "text": "description"
  }, {
    "depth": 3,
    "slug": "draft",
    "text": "draft"
  }, {
    "depth": 3,
    "slug": "tags",
    "text": "tags"
  }, {
    "depth": 3,
    "slug": "hide_breadcrumbs",
    "text": "hide_breadcrumbs"
  }, {
    "depth": 3,
    "slug": "hide_toc",
    "text": "hide_toc"
  }, {
    "depth": 3,
    "slug": "hide_sidenav",
    "text": "hide_sidenav"
  }, {
    "depth": 3,
    "slug": "max_width",
    "text": "max_width"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
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
    children: [createVNode(_components.p, {
      children: ["You can customize individual Markdown and MDX pages in CelestialDocs by setting values in their frontmatter. For example, a regular page might set ", createVNode(_components.code, {
        children: "title"
      }), " and ", createVNode(_components.code, {
        children: "description"
      }), " fields."]
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
              color: "#7C7F93",
              "--shiki-dark": "#939AB7"
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
            children: " Sample description"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7C7F93",
              "--shiki-dark": "#939AB7"
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
      children: "This document describes the available frontmatter properties for your content files. Frontmatter is a block of metadata that provides context and configuration for your content. Below is a detailed reference for each property, including their types, default values, and descriptions."
    }), "\n", createVNode(_components.h2, {
      id: "properties",
      children: "Properties"
    }), "\n", createVNode(_components.h3, {
      id: "title",
      children: createVNode(_components.code, {
        children: "title"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Type"
        }), ": ", createVNode(_components.code, {
          children: "string"
        })]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Description"
        }), ": The title of the content. This is a required field that represents the main heading or name of your document."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "author",
      children: createVNode(_components.code, {
        children: "author"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Type"
        }), ": ", createVNode(_components.code, {
          children: "string"
        })]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Default"
        }), ": The author defined in the site configuration (", createVNode(_components.code, {
          children: "SITE.author"
        }), ")"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Description"
        }), ": The name of the person or entity responsible for creating the content. If not specified, it defaults to the author defined in the site’s configuration."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "pubdatetime",
      children: createVNode(_components.code, {
        children: "pubDatetime"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Type"
        }), ": ", createVNode(_components.code, {
          children: "Date"
        }), " (optional)"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Description"
        }), ": The date and time when the content was published. This field is optional and can be used to specify when the content was made available."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "moddatetime",
      children: createVNode(_components.code, {
        children: "modDatetime"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Type"
        }), ": ", createVNode(_components.code, {
          children: "Date"
        }), " (optional, nullable)"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Description"
        }), ": The date and time when the content was last modified. This field is optional and can be null if no modification has occurred. It helps track the latest changes made to the content."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "description",
      children: createVNode(_components.code, {
        children: "description"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Type"
        }), ": ", createVNode(_components.code, {
          children: "string"
        }), " (optional)"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Description"
        }), ": A brief summary or description of the content. This optional field provides additional context or a teaser for the document."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "draft",
      children: createVNode(_components.code, {
        children: "draft"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Type"
        }), ": ", createVNode(_components.code, {
          children: "boolean"
        })]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Default"
        }), ": ", createVNode(_components.code, {
          children: "false"
        })]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Description"
        }), ": Indicates whether the content is a draft. If set to ", createVNode(_components.code, {
          children: "true"
        }), ", the content is considered a draft and may not be published or visible on the site."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "tags",
      children: createVNode(_components.code, {
        children: "tags"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Type"
        }), ": ", createVNode(_components.code, {
          children: "array of strings"
        })]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Default"
        }), ": ", createVNode(_components.code, {
          children: "[]"
        }), " (empty array)"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Description"
        }), ": A list of tags associated with the content. Tags can be used for categorization and filtering purposes. The default is an empty array, meaning no tags are assigned unless specified."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "hide_breadcrumbs",
      children: createVNode(_components.code, {
        children: "hide_breadcrumbs"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Type"
        }), ": ", createVNode(_components.code, {
          children: "boolean"
        }), " (optional)"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Default"
        }), ": ", createVNode(_components.code, {
          children: "false"
        })]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Description"
        }), ": Determines whether breadcrumbs should be hidden for the content. If set to ", createVNode(_components.code, {
          children: "true"
        }), ", breadcrumbs will not be displayed. This is useful for customizing the navigation experience."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "hide_toc",
      children: createVNode(_components.code, {
        children: "hide_toc"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Type"
        }), ": ", createVNode(_components.code, {
          children: "boolean"
        }), " (optional)"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Default"
        }), ": ", createVNode(_components.code, {
          children: "false"
        })]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Description"
        }), ": Specifies whether the Table of Contents (ToC) should be hidden. Setting this to ", createVNode(_components.code, {
          children: "true"
        }), " will prevent the ToC from being shown, allowing for a cleaner layout if the ToC is not needed."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "hide_sidenav",
      children: createVNode(_components.code, {
        children: "hide_sidenav"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Type"
        }), ": ", createVNode(_components.code, {
          children: "boolean"
        }), " (optional)"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Default"
        }), ": ", createVNode(_components.code, {
          children: "false"
        })]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Description"
        }), ": Indicates whether the sidebar navigation should be hidden. If set to ", createVNode(_components.code, {
          children: "true"
        }), ", the sidebar will not be displayed, which can be useful for pages where a sidebar is unnecessary."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "max_width",
      children: createVNode(_components.code, {
        children: "max_width"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Type"
        }), ": ", createVNode(_components.code, {
          children: "boolean"
        }), " (optional)"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Default"
        }), ": ", createVNode(_components.code, {
          children: "false"
        })]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Description"
        }), ": Controls whether the content should use the maximum available width. Setting this to ", createVNode(_components.code, {
          children: "true"
        }), " allows the content to stretch to the full width of the container, providing a more expansive layout."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "This reference guide should help you configure the frontmatter for your content effectively. Adjust these properties to control various aspects of how your content is presented and organized."
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

const url = "src/content/docs/Reference/frontmatter-ref.mdx";
const file = "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/content/docs/Reference/frontmatter-ref.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/content/docs/Reference/frontmatter-ref.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
