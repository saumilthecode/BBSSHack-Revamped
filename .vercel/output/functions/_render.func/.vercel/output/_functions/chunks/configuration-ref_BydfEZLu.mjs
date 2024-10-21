import { F as Fragment, _ as __astro_tag_component__, g as createVNode } from './astro/server_DyQOWlKk.mjs';
import { $ as $$Image } from './_astro_assets_D07zSGO7.mjs';
import { $ as $$Callout } from './Callout_BYJ5as1m.mjs';
import 'clsx';

const frontmatter = {
  "title": "Configuration Reference"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "site-configuration",
    "text": "Site Configuration"
  }, {
    "depth": 3,
    "slug": "website",
    "text": "website"
  }, {
    "depth": 3,
    "slug": "author",
    "text": "author"
  }, {
    "depth": 3,
    "slug": "desc",
    "text": "desc"
  }, {
    "depth": 3,
    "slug": "title",
    "text": "title"
  }, {
    "depth": 3,
    "slug": "ogimage",
    "text": "ogImage"
  }, {
    "depth": 3,
    "slug": "repo",
    "text": "repo"
  }, {
    "depth": 2,
    "slug": "locale-configuration",
    "text": "Locale Configuration"
  }, {
    "depth": 3,
    "slug": "lang",
    "text": "lang"
  }, {
    "depth": 3,
    "slug": "langtag",
    "text": "langTag"
  }, {
    "depth": 2,
    "slug": "menu-configuration",
    "text": "Menu Configuration"
  }, {
    "depth": 3,
    "slug": "menu_items",
    "text": "menu_items"
  }, {
    "depth": 2,
    "slug": "sidebar-navigation-configuration",
    "text": "Sidebar Navigation Configuration"
  }, {
    "depth": 3,
    "slug": "side_nav_menu_order",
    "text": "side_nav_menu_order"
  }, {
    "depth": 2,
    "slug": "global-settings",
    "text": "Global Settings"
  }, {
    "depth": 3,
    "slug": "hide_table_of_contents",
    "text": "hide_table_of_contents"
  }, {
    "depth": 3,
    "slug": "hide_breadcrumbs",
    "text": "hide_breadcrumbs"
  }, {
    "depth": 3,
    "slug": "hide_side_navigations",
    "text": "hide_side_navigations"
  }, {
    "depth": 3,
    "slug": "hide_datetime",
    "text": "hide_datetime"
  }, {
    "depth": 3,
    "slug": "hide_time",
    "text": "hide_time"
  }, {
    "depth": 3,
    "slug": "hide_search",
    "text": "hide_search"
  }, {
    "depth": 3,
    "slug": "hide_repo_button",
    "text": "hide_repo_button"
  }, {
    "depth": 3,
    "slug": "hide_author",
    "text": "hide_author"
  }, {
    "depth": 2,
    "slug": "social-configuration",
    "text": "Social Configuration"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    hr: "hr",
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
      children: ["This document describes the available configuration options for your site. These settings are defined in the ", createVNode(_components.code, {
        children: "config.ts"
      }), " file and control various aspects of your site’s behavior and appearance. Below is a detailed reference for each configuration property, including examples where applicable."]
    }), "\n", createVNode(_components.h2, {
      id: "site-configuration",
      children: "Site Configuration"
    }), "\n", createVNode(_components.h3, {
      id: "website",
      children: createVNode(_components.code, {
        children: "website"
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
        }), ": The URL of your site. Replace this with the deployed domain of your site to direct users to the correct address."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Example"
        }), ": ", createVNode(_components.code, {
          children: "\"https://hyperoot.dev\""
        })]
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
          children: "Description"
        }), ": The name of the author or creator of the site. This value will be used to attribute content and provide credit."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Example"
        }), ": ", createVNode(_components.code, {
          children: "\"HYP3R00T\""
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "desc",
      children: createVNode(_components.code, {
        children: "desc"
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
        }), ": A brief description of your site. This summary provides context and information about the purpose and content of the site."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Example"
        }), ": ", createVNode(_components.code, {
          children: "\"Documentation template using Astro and Shadcn\""
        })]
      }), "\n"]
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
        }), ": The title of your site. This will be displayed in the browser tab and used for branding purposes."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Example"
        }), ": ", createVNode(_components.code, {
          children: "\"CelestialDocs\""
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "ogimage",
      children: createVNode(_components.code, {
        children: "ogImage"
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
        }), ": The filename of the image used for Open Graph (OG) sharing. This image will be shown when your site is shared on social media platforms."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Example"
        }), ": ", createVNode(_components.code, {
          children: "\"og-image.jpg\""
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "repo",
      children: createVNode(_components.code, {
        children: "repo"
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
        }), ": The URL to the repository hosting the source code of your site. This provides a link to where the site’s code can be found."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Example"
        }), ": ", createVNode(_components.code, {
          children: "\"https://github.com/HYP3R00T/CelestialDocs\""
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "locale-configuration",
      children: "Locale Configuration"
    }), "\n", createVNode(_components.h3, {
      id: "lang",
      children: createVNode(_components.code, {
        children: "lang"
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
        }), ": ", createVNode(_components.code, {
          children: "\"en\""
        })]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Description"
        }), ": The HTML language code for your site. Set this to specify the language used for the content. If left empty, it defaults to ", createVNode(_components.code, {
          children: "\"en\""
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Example"
        }), ": ", createVNode(_components.code, {
          children: "\"en\""
        }), " (for English)"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "langtag",
      children: createVNode(_components.code, {
        children: "langTag"
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
          children: "[\"en-EN\"]"
        })]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Description"
        }), ": BCP 47 language tags used to specify the language and regional variations. Set this to customize the language settings. An empty array defaults to the environment’s default language."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Example"
        }), ": ", createVNode(_components.code, {
          children: "[\"en-EN\"]"
        }), " for English (United Kingdom)"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "menu-configuration",
      children: "Menu Configuration"
    }), "\n", createVNode(_components.h3, {
      id: "menu_items",
      children: createVNode(_components.code, {
        children: "menu_items"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Type"
        }), ": ", createVNode(_components.code, {
          children: "array of objects"
        })]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Description"
        }), ": An array of menu items for the site’s navigation. Each item should have a ", createVNode(_components.code, {
          children: "title"
        }), " and ", createVNode(_components.code, {
          children: "href"
        }), " to define the menu link. This is currently empty but can be populated to create navigation links."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Example"
        }), ":\n", createVNode(_components.pre, {
          class: "astro-code astro-code-themes catppuccin-latte catppuccin-macchiato",
          style: {
            backgroundColor: "#eff1f5",
            "--shiki-dark-bg": "#24273a",
            color: "#4c4f69",
            "--shiki-dark": "#cad3f5",
            overflowX: "auto"
          },
          tabindex: "0",
          "data-language": "ts",
          children: createVNode(_components.code, {
            children: [createVNode(_components.span, {
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
                children: " menu_items "
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
                  color: "#7C7F93",
                  "--shiki-dark": "#939AB7"
                },
                children: "  {"
              }), createVNode(_components.span, {
                style: {
                  color: "#4C4F69",
                  "--shiki-dark": "#CAD3F5"
                },
                children: " title"
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
                children: " \"Home\""
              }), createVNode(_components.span, {
                style: {
                  color: "#7C7F93",
                  "--shiki-dark": "#939AB7"
                },
                children: ","
              }), createVNode(_components.span, {
                style: {
                  color: "#4C4F69",
                  "--shiki-dark": "#CAD3F5"
                },
                children: " href"
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
                children: " \"/\""
              }), createVNode(_components.span, {
                style: {
                  color: "#7C7F93",
                  "--shiki-dark": "#939AB7"
                },
                children: " },"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#7C7F93",
                  "--shiki-dark": "#939AB7"
                },
                children: "  {"
              }), createVNode(_components.span, {
                style: {
                  color: "#4C4F69",
                  "--shiki-dark": "#CAD3F5"
                },
                children: " title"
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
                children: " \"About\""
              }), createVNode(_components.span, {
                style: {
                  color: "#7C7F93",
                  "--shiki-dark": "#939AB7"
                },
                children: ","
              }), createVNode(_components.span, {
                style: {
                  color: "#4C4F69",
                  "--shiki-dark": "#CAD3F5"
                },
                children: " href"
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
                children: " \"/about\""
              }), createVNode(_components.span, {
                style: {
                  color: "#7C7F93",
                  "--shiki-dark": "#939AB7"
                },
                children: " },"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#7C7F93",
                  "--shiki-dark": "#939AB7"
                },
                children: "  {"
              }), createVNode(_components.span, {
                style: {
                  color: "#4C4F69",
                  "--shiki-dark": "#CAD3F5"
                },
                children: " title"
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
                children: " \"Contact\""
              }), createVNode(_components.span, {
                style: {
                  color: "#7C7F93",
                  "--shiki-dark": "#939AB7"
                },
                children: ","
              }), createVNode(_components.span, {
                style: {
                  color: "#4C4F69",
                  "--shiki-dark": "#CAD3F5"
                },
                children: " href"
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
                children: " \"/contact\""
              }), createVNode(_components.span, {
                style: {
                  color: "#7C7F93",
                  "--shiki-dark": "#939AB7"
                },
                children: " },"
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
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode($$Callout, {
      variant: "danger",
      children: createVNode(_components.p, {
        children: "If you don’t want any menu item, then keep the array empty."
      })
    }), "\n", createVNode(_components.h2, {
      id: "sidebar-navigation-configuration",
      children: "Sidebar Navigation Configuration"
    }), "\n", createVNode(_components.h3, {
      id: "side_nav_menu_order",
      children: createVNode(_components.code, {
        children: "side_nav_menu_order"
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
          children: "Description"
        }), ": An array defining the order of items in the sidebar navigation. The list should contain top-level folders and files (without extensions) to organize the sidebar menu."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Example"
        }), ":\n", createVNode(_components.pre, {
          class: "astro-code astro-code-themes catppuccin-latte catppuccin-macchiato",
          style: {
            backgroundColor: "#eff1f5",
            "--shiki-dark-bg": "#24273a",
            color: "#4c4f69",
            "--shiki-dark": "#cad3f5",
            overflowX: "auto"
          },
          tabindex: "0",
          "data-language": "ts",
          children: createVNode(_components.code, {
            children: [createVNode(_components.span, {
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
                children: " side_nav_menu_order "
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
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode($$Callout, {
      variant: "danger",
      children: createVNode(_components.p, {
        children: "If you don’t want to order it manually, then keep the array empty."
      })
    }), "\n", createVNode(_components.h2, {
      id: "global-settings",
      children: "Global Settings"
    }), "\n", createVNode($$Callout, {
      variant: "danger",
      children: createVNode(_components.p, {
        children: ["Don’t comment or delete anything. Use ", createVNode(_components.code, {
          children: "true"
        }), " or ", createVNode(_components.code, {
          children: "false"
        }), " to enable disable or enable the feature."]
      })
    }), "\n", createVNode(_components.h3, {
      id: "hide_table_of_contents",
      children: createVNode(_components.code, {
        children: "hide_table_of_contents"
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
        }), ": Controls whether the Table of Contents (ToC) is hidden. Set this to ", createVNode(_components.code, {
          children: "true"
        }), " to prevent the ToC from being displayed."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Example"
        }), ": ", createVNode(_components.code, {
          children: "true"
        }), " (to hide the ToC)"]
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
        }), ": Determines whether breadcrumbs should be hidden. Setting this to ", createVNode(_components.code, {
          children: "true"
        }), " will hide breadcrumbs from the site’s pages."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Example"
        }), ": ", createVNode(_components.code, {
          children: "true"
        }), " (to hide breadcrumbs)"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "hide_side_navigations",
      children: createVNode(_components.code, {
        children: "hide_side_navigations"
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
        }), ": Controls whether sidebar navigation should be hidden. Setting this to ", createVNode(_components.code, {
          children: "true"
        }), " will hide the sidebar."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Example"
        }), ": ", createVNode(_components.code, {
          children: "true"
        }), " (to hide sidebar navigation)"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "hide_datetime",
      children: createVNode(_components.code, {
        children: "hide_datetime"
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
        }), ": Indicates whether the date and time should be hidden. If set to ", createVNode(_components.code, {
          children: "true"
        }), ", date and time information will not be displayed."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Example"
        }), ": ", createVNode(_components.code, {
          children: "true"
        }), " (to hide date and time)"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "hide_time",
      children: createVNode(_components.code, {
        children: "hide_time"
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
          children: "true"
        })]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Description"
        }), ": Controls whether the time should be hidden. This is set to ", createVNode(_components.code, {
          children: "true"
        }), " by default to omit time information from being shown."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Example"
        }), ": ", createVNode(_components.code, {
          children: "false"
        }), " (to show time)"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "hide_search",
      children: createVNode(_components.code, {
        children: "hide_search"
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
        }), ": Determines if the search functionality should be hidden. Setting this to ", createVNode(_components.code, {
          children: "true"
        }), " will remove the search feature from the site."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Example"
        }), ": ", createVNode(_components.code, {
          children: "true"
        }), " (to hide the search feature)"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "hide_repo_button",
      children: createVNode(_components.code, {
        children: "hide_repo_button"
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
        }), ": Controls whether the repository button is hidden. If set to ", createVNode(_components.code, {
          children: "true"
        }), ", the button linking to the repository will not be displayed."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Example"
        }), ": ", createVNode(_components.code, {
          children: "true"
        }), " (to hide the repository button)"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "hide_author",
      children: createVNode(_components.code, {
        children: "hide_author"
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
        }), ": Specifies whether the author’s information should be hidden. Setting this to ", createVNode(_components.code, {
          children: "true"
        }), " will prevent the author’s details from being shown."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Example"
        }), ": ", createVNode(_components.code, {
          children: "true"
        }), " (to hide author information)"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "You can append the following section to your existing documentation:"
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "social-configuration",
      children: "Social Configuration"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Type"
          }), ": ", createVNode(_components.code, {
            children: "array of objects"
          })]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Description"
          }), ": An array defining the social media links that will appear in the footer of your site. Each object in the array should include ", createVNode(_components.code, {
            children: "name"
          }), ", ", createVNode(_components.code, {
            children: "href"
          }), ", ", createVNode(_components.code, {
            children: "linkTitle"
          }), ", and ", createVNode(_components.code, {
            children: "active"
          }), " properties to specify the social media platform, link, title, and whether the link is active."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Example"
          }), ":"]
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
          "data-language": "ts",
          children: createVNode(_components.code, {
            children: [createVNode(_components.span, {
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
                children: " Socials"
              }), createVNode(_components.span, {
                style: {
                  color: "#179299",
                  "--shiki-dark": "#8BD5CA"
                },
                children: ":"
              }), createVNode(_components.span, {
                style: {
                  color: "#DF8E1D",
                  fontStyle: "italic",
                  "--shiki-dark": "#EED49F",
                  "--shiki-dark-font-style": "italic"
                },
                children: " SocialObjects "
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
                children: "  {"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#4C4F69",
                  "--shiki-dark": "#CAD3F5"
                },
                children: "    name"
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
                children: " \"Github\""
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
                children: "    href"
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
                children: " \"https://github.com/HYP3R00T/\""
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
                children: "    linkTitle"
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
                children: " `"
              }), createVNode(_components.span, {
                style: {
                  color: "#7C7F93",
                  "--shiki-dark": "#939AB7"
                },
                children: "${"
              }), createVNode(_components.span, {
                style: {
                  color: "#FE640B",
                  "--shiki-dark": "#F5A97F"
                },
                children: "SITE"
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
                children: "title"
              }), createVNode(_components.span, {
                style: {
                  color: "#7C7F93",
                  "--shiki-dark": "#939AB7"
                },
                children: "}"
              }), createVNode(_components.span, {
                style: {
                  color: "#40A02B",
                  "--shiki-dark": "#A6DA95"
                },
                children: " on Github`"
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
                children: "    active"
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
                  color: "#7C7F93",
                  "--shiki-dark": "#939AB7"
                },
                children: "  },"
              })
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
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode($$Callout, {
      variant: "danger",
      children: createVNode(_components.p, {
        children: ["If you don’t want any social links, then disable it using ", createVNode(_components.code, {
          children: "false"
        }), " for ", createVNode(_components.code, {
          children: "active"
        }), ". Don’t delete anything."]
      })
    }), "\n", createVNode(_components.p, {
      children: "This reference guide provides a comprehensive overview of the configuration options available for your site. Adjust these settings as needed to customize the appearance and behavior of your site according to your preferences."
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

const url = "src/content/docs/Reference/configuration-ref.mdx";
const file = "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/content/docs/Reference/configuration-ref.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/content/docs/Reference/configuration-ref.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
