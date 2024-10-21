import { a as createComponent, r as renderTemplate, d as renderComponent } from '../chunks/astro/server_DyQOWlKk.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CAGoNJn7.mjs';
export { renderers } from '../renderers.mjs';

const $$OurPeople = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "BBSS Hack Club", "description": "Official website of THE Hack Club in BBSS." })}`;
}, "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/pages/our-people.astro", void 0);

const $$file = "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/pages/our-people.astro";
const $$url = "/our-people";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$OurPeople,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
