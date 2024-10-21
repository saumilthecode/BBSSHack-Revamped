import { F as Fragment, _ as __astro_tag_component__, g as createVNode } from './astro/server_DyQOWlKk.mjs';
import { $ as $$Image } from './_astro_assets_D07zSGO7.mjs';
import { $ as $$Callout } from './Callout_BYJ5as1m.mjs';
import { $ as $$Card } from './Card_BtYz7CNl.mjs';
import { Cat } from 'lucide-react';
import 'clsx';

const frontmatter = {
  "title": "Components"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "callout",
    "text": "Callout"
  }, {
    "depth": 2,
    "slug": "card",
    "text": "Card"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["Components let you easily reuse a piece of UI or styling consistently. Examples might include a link card or a YouTube embed. CelestialDocs supports the use of components in ", createVNode(_components.a, {
        href: "https://mdxjs.com/",
        rel: "nofollow",
        target: "_blank",
        children: "MDX"
      }), " files and provides some common components for you to use."]
    }), "\n", createVNode(_components.h2, {
      id: "callout",
      children: "Callout"
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "Callout"
      }), " component is designed to highlight important information, warnings, errors, or successes in your application. It is a versatile alert box with customizable variants and titles."]
    }), "\n", createVNode($$Callout, {
      children: createVNode(_components.p, {
        children: ["See the ", createVNode(_components.a, {
          href: "/custom-components/callout",
          children: "Callout"
        }), " for all custom props and their usages."]
      })
    }), "\n", createVNode(_components.h2, {
      id: "card",
      children: "Card"
    }), "\n", createVNode(_components.p, {
      children: ["You can display content in a box matching CelestialDocs’ styles using the ", createVNode(_components.code, {
        children: "<Card>"
      }), " component."]
    }), "\n", createVNode($$Card, {
      title: "Card with Custom Icon and Color",
      icon: Cat,
      color: "Red",
      children: createVNode(_components.p, {
        children: "This is a card with a custom icon and color."
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

const url = "src/content/docs/Custom%20Components/index.mdx";
const file = "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/content/docs/Custom Components/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/content/docs/Custom Components/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
