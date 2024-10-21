import { F as Fragment, _ as __astro_tag_component__, g as createVNode } from './astro/server_DyQOWlKk.mjs';
import { $ as $$Image } from './_astro_assets_D07zSGO7.mjs';
import 'clsx';

const frontmatter = {
  "title": "Deployment"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "deploying-with-github-actions",
    "text": "Deploying with GitHub Actions"
  }, {
    "depth": 3,
    "slug": "adding-a-cname-file",
    "text": "Adding a CNAME File"
  }, {
    "depth": 2,
    "slug": "deploy-with-other-services",
    "text": "Deploy with other services"
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
    children: [createVNode(_components.p, {
      children: "Deploying your site is straightforward with CelestialDocs. This guide will help you set up deployment using GitHub Actions and configure your domain with a CNAME file. Follow the steps below to get your site live."
    }), "\n", createVNode(_components.h2, {
      id: "deploying-with-github-actions",
      children: "Deploying with GitHub Actions"
    }), "\n", createVNode(_components.p, {
      children: ["CelestialDocs includes a ", createVNode(_components.code, {
        children: "deploy.yml"
      }), " file configured for GitHub Actions to automate the deployment process. Here’s how you can use it:"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Steps:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Add the ", createVNode(_components.code, {
            children: "deploy.yml"
          }), " File"]
        }), "\n", createVNode(_components.p, {
          children: ["Make sure the ", createVNode(_components.code, {
            children: "deploy.yml"
          }), " file is included in your project under the .github/workflows directory. This file contains the workflow configuration to handle the deployment."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Configure Your GitHub Repository"
        }), "\n", createVNode(_components.p, {
          children: "Ensure that your GitHub repository is correctly set up to use GitHub Actions. You may need to grant the necessary permissions and configure your repository settings to enable deployments."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Set Up Deployment Secrets"
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "If your deployment requires secrets (e.g., API keys, deployment tokens), add them to your GitHub repository settings:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Go to your repository on GitHub."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Navigate to Settings > Secrets and variables > Actions."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Add your secrets here. For example, you might need to add deployment tokens or API keys for your hosting provider."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Trigger the Deployment"
        }), "\n", createVNode(_components.p, {
          children: ["Once the ", createVNode(_components.code, {
            children: "deploy.yml"
          }), " file is in place and your secrets are configured, any push to the main branch (or the branch specified in the workflow) will trigger the deployment. GitHub Actions will automatically build and deploy your site based on the configuration in ", createVNode(_components.code, {
            children: "deploy.yml"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "adding-a-cname-file",
      children: "Adding a CNAME File"
    }), "\n", createVNode(_components.p, {
      children: "If you’re using a custom domain, you need to include a CNAME file in the public directory of your project. This file ensures that your site is correctly mapped to your custom domain."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Steps:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Create the CNAME File"
        }), "\n", createVNode(_components.p, {
          children: "In the public directory of your project, create a file named CNAME (with no file extension)."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Add Your Domain Name"
        }), "\n", createVNode(_components.p, {
          children: "Open the CNAME file and add your custom domain name. For example:"
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
                children: "www.yourcustomdomain.com"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {})
            })]
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Commit and Push"
        }), "\n", createVNode(_components.p, {
          children: "After creating the CNAME file, commit your changes and push them to your repository:"
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
                children: " add"
              }), createVNode(_components.span, {
                style: {
                  color: "#40A02B",
                  "--shiki-dark": "#A6DA95"
                },
                children: " public/CNAME"
              })]
            }), "\n", createVNode(_components.span, {
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
                children: " commit"
              }), createVNode(_components.span, {
                style: {
                  color: "#40A02B",
                  "--shiki-dark": "#A6DA95"
                },
                children: " -m"
              }), createVNode(_components.span, {
                style: {
                  color: "#40A02B",
                  "--shiki-dark": "#A6DA95"
                },
                children: " \"Add CNAME file for custom domain\""
              })]
            }), "\n", createVNode(_components.span, {
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
                children: " push"
              }), createVNode(_components.span, {
                style: {
                  color: "#40A02B",
                  "--shiki-dark": "#A6DA95"
                },
                children: " origin"
              }), createVNode(_components.span, {
                style: {
                  color: "#40A02B",
                  "--shiki-dark": "#A6DA95"
                },
                children: " main"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line"
            })]
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Verify Domain Configuration"
        }), "\n", createVNode(_components.p, {
          children: "Ensure that your domain is correctly configured with your DNS provider to point to your deployment. This usually involves setting up DNS records such as A records or CNAME records to match your hosting provider’s requirements."
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "deploy-with-other-services",
      children: "Deploy with other services"
    }), "\n", createVNode(_components.p, {
      children: ["Publish your work with the ", createVNode(_components.a, {
        href: "https://docs.astro.build/en/guides/deploy/",
        rel: "nofollow",
        target: "_blank",
        children: "Deploy your site"
      }), " guide in the Astro docs."]
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

const url = "src/content/docs/Resources/deployment.mdx";
const file = "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/content/docs/Resources/deployment.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/content/docs/Resources/deployment.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
