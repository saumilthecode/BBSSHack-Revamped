import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent, f as renderSlot, e as renderHead } from '../chunks/astro/server_DyQOWlKk.mjs';
import { c as capitalizeFirstLetter, e as createHeadingHierarchy, L as LOCALE, d as cn, f as buildBreadcrumbs, B as Button, g as docconfig, S as SITE, $ as $$HeadSEO, a as $$Header, m as menu, b as $$Footer, h as getCollection } from '../chunks/Footer_Da7bObhW.mjs';
import 'clsx';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { Calendar, ChevronUpIcon } from 'lucide-react';
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
export { renderers } from '../renderers.mjs';

const $$Astro$5 = createAstro("https://celestial.hyperoot.dev");
const $$SideNavMenu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$SideNavMenu;
  const { items, level } = Astro2.props;
  const pathname = new URL(Astro2.request.url).pathname;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute(["list-none m-0", className], "class:list")}> ${items.filter((item) => !item.draft).map((item) => {
    const label = item.title ? capitalizeFirstLetter(item.title) : capitalizeFirstLetter(item.slug.split("/").pop() || "");
    const className2 = `
        ${level === 0 ? "font-semibold" : "text-muted-foreground"}
        ${pathname === "/" + item.slug ? "text-primary" : "no-underline"}
        `.trim();
    return renderTemplate`<li class="w-full"> <a${addAttribute(`/${item.slug}`, "href")}${addAttribute(`${className2}  text-sm leading-none w-full`, "class")}> ${label} </a> ${item.children.length > 0 && renderTemplate`${renderComponent($$result, "Astro.self", Astro2.self, { "items": item.children, "level": level + 1 })}`} </li>`;
  })} </ul>`;
}, "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/components/docs/SideNavMenu.astro", void 0);

const $$Astro$4 = createAstro("https://celestial.hyperoot.dev");
const $$TableofContents = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$TableofContents;
  const { headings } = Astro2.props;
  const toc = createHeadingHierarchy(headings ?? []);
  const hasToC = toc.length > 1;
  const { class: className } = Astro2.props;
  return renderTemplate`${hasToC && renderTemplate`${maybeRenderHead()}<div${addAttribute(["relative", className], "class:list")}><h2 class="text-xl border-none italic">On This Page</h2><ul class="list-none m-0">${toc.map((heading) => renderTemplate`<li${addAttribute(`${heading.depth === 2 ? "font-semibold" : "text-muted-foreground"}`, "class")}><a${addAttribute(`#${heading.slug}`, "href")} class="text-sm w-full leading-none no-underline">${heading.text}</a></li>`)}</ul></div>`}`;
}, "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/components/docs/TableofContents.astro", void 0);

function Datetime({
  hide_datetime,
  hide_time,
  pubDatetime,
  modDatetime,
  className
}) {
  if (hide_datetime) {
    return;
  }
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `flex items-center text-muted-foreground gap-2 ${className}`,
      children: [
        /* @__PURE__ */ jsx(Calendar, { className: "w-[1.2rem]" }),
        /* @__PURE__ */ jsx("div", { className: "italic text-sm", children: /* @__PURE__ */ jsx(
          FormattedDatetime,
          {
            pubDatetime,
            modDatetime,
            hide_time
          }
        ) })
      ]
    }
  );
}
function FormattedDatetime({
  pubDatetime,
  modDatetime,
  hide_time
}) {
  const myDatetime = new Date(
    modDatetime && modDatetime > pubDatetime ? modDatetime : pubDatetime
  );
  const date = myDatetime.toLocaleDateString(LOCALE.langTag, {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
  const time = myDatetime.toLocaleTimeString(LOCALE.langTag, {
    hour: "2-digit",
    minute: "2-digit"
  });
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("time", { dateTime: myDatetime.toISOString(), children: [
    date,
    !hide_time && /* @__PURE__ */ jsxs(Fragment, { children: [
      " ",
      time
    ] })
  ] }) });
}

const Breadcrumb = React.forwardRef(({ ...props }, ref) => /* @__PURE__ */ jsx("nav", { ref, "aria-label": "breadcrumb", ...props }));
Breadcrumb.displayName = "Breadcrumb";
const BreadcrumbList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "ol",
  {
    ref,
    className: cn(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      className
    ),
    ...props
  }
));
BreadcrumbList.displayName = "BreadcrumbList";
const BreadcrumbItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "li",
  {
    ref,
    className: cn("inline-flex items-center gap-1.5", className),
    ...props
  }
));
BreadcrumbItem.displayName = "BreadcrumbItem";
const BreadcrumbLink = React.forwardRef(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      ref,
      className: cn("transition-colors hover:text-foreground", className),
      ...props
    }
  );
});
BreadcrumbLink.displayName = "BreadcrumbLink";
const BreadcrumbPage = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "span",
  {
    ref,
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: cn("font-normal text-foreground", className),
    ...props
  }
));
BreadcrumbPage.displayName = "BreadcrumbPage";

const $$Astro$3 = createAstro("https://celestial.hyperoot.dev");
const $$Breadcrumbs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Breadcrumbs;
  const slug = Astro2.url.pathname;
  const breadcrumbs = buildBreadcrumbs(slug || "");
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(className, "class:list")}> ${renderComponent($$result, "Breadcrumb", Breadcrumb, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BreadcrumbList", BreadcrumbList, { "className": "m-0" }, { "default": ($$result3) => renderTemplate`${breadcrumbs.map((breadcrumb, index) => renderTemplate`${renderComponent($$result3, "BreadcrumbItem", BreadcrumbItem, {}, { "default": ($$result4) => renderTemplate`${index < breadcrumbs.length - 1 ? renderTemplate`${renderComponent($$result4, "BreadcrumbLink", BreadcrumbLink, { "href": breadcrumb.link, "className": "no-underline" }, { "default": ($$result5) => renderTemplate`${breadcrumb.title}` })}` : renderTemplate`<span>${breadcrumb.title}</span>`}${index < breadcrumbs.length - 1 && renderTemplate`<span> / </span>`}` })}`)}` })} ` })} </div>`;
}, "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/components/docs/Breadcrumbs.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$BacktoTop = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<div class="transition-opacity duration-300 sticky bottom-8 flex justify-center py-4 opacity-0"> <div onclick="scrollToTop()" id="back-to-top" class="w-fit"> ', ' </div> </div> <script>\n  const backToTopButton = document.getElementById("back-to-top");\n\n  const toggleVisibility = () => {\n    if (window.scrollY > window.innerHeight / 2) {\n      backToTopButton.classList.remove("opacity-0");\n      backToTopButton.classList.add("opacity-100");\n    } else {\n      backToTopButton.classList.remove("opacity-100");\n      backToTopButton.classList.add("opacity-0");\n    }\n  };\n\n  const scrollToTop = () => {\n    window.scrollTo({\n      top: 0,\n      behavior: "smooth",\n    });\n  };\n\n  window.addEventListener("scroll", toggleVisibility);\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "Button", Button, { "variant": "secondary", "className": "gap-2", "size": "icon" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ChevronUpIcon", ChevronUpIcon, {})} ` }));
}, "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/components/core/BacktoTop.astro", void 0);

const $$Astro$2 = createAstro("https://celestial.hyperoot.dev");
const $$MainContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$MainContent;
  const {
    title,
    author,
    pubDatetime,
    modDatetime,
    description,
    draft,
    tags,
    hide_breadcrumbs,
    headings
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-background pt-4 px-6 min-h-static_sidemenu"> ${!hide_breadcrumbs && renderTemplate`${renderComponent($$result, "Breadcrumbs", $$Breadcrumbs, { "class": "" })}`} <h1 class="pb-2 italic">${capitalizeFirstLetter(title)}</h1> ${pubDatetime && renderTemplate`${renderComponent($$result, "Datetime", Datetime, { "hide_datetime": docconfig.hide_datetime, "hide_time": docconfig.hide_time, "pubDatetime": pubDatetime, "modDatetime": modDatetime, "className": "my-2" })}`} ${!docconfig.hide_author} <div class="prose pt-4"> ${renderSlot($$result, $$slots["default"])} </div> ${renderComponent($$result, "BacktoTop", $$BacktoTop, {})} </div>`;
}, "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/components/docs/MainContent.astro", void 0);

const $$Astro$1 = createAstro("https://celestial.hyperoot.dev");
const $$DocsLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$DocsLayout;
  const {
    title,
    author,
    pubDatetime,
    modDatetime,
    description,
    draft,
    tags,
    hide_breadcrumbs,
    hide_toc,
    hide_sidenav,
    max_width,
    headings
  } = Astro2.props;
  return renderTemplate`<html${addAttribute(`${LOCALE.lang}`, "lang")} class="scroll-smooth"> <head>${renderComponent($$result, "HeadSEO", $$HeadSEO, { "title": `${title ? capitalizeFirstLetter(title) + " | " + SITE.title : SITE.title}`, "description": description })}${renderHead()}</head> <body${addAttribute(`font-sans ${hide_toc && hide_sidenav && max_width ? "" : "bg-card"}`, "class")}> ${renderComponent($$result, "Copy", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/core/Copy", "client:component-export": "Copy" })} <div class="flex flex-col min-h-screen"> ${renderComponent($$result, "Header", $$Header, { "class": "border-b bg-background" })} <main class="flex flex-1 flex-col md:flex-row container"> <div${addAttribute(`py-4 hidden md:flex max-h-static_sidemenu sticky top-[69px] 
          ${hide_toc && hide_sidenav && max_width ? "w-screen" : "md:px-6 md:w-1/4 lg:w-1/5"}`, "class")}> ${renderComponent($$result, "ScrollArea", null, { "className": "h-full w-full", "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/ui/scroll-area", "client:component-export": "ScrollArea" }, { "default": ($$result2) => renderTemplate`${!hide_sidenav && renderTemplate`${renderComponent($$result2, "SideNavMenu", $$SideNavMenu, { "items": menu, "level": 0 })}`}` })} </div> <div${addAttribute(`w-full ${hide_toc && hide_sidenav && max_width ? "" : "md:w-3/4 lg:w-3/5"}`, "class")}> ${renderComponent($$result, "MainContent", $$MainContent, { "title": title, "author": author, "pubDatetime": pubDatetime, "modDatetime": modDatetime, "description": description, "draft": draft, "tags": tags, "hide_breadcrumbs": hide_breadcrumbs, "headings": headings }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} </div> <div${addAttribute(`py-4 hidden lg:flex max-h-static_sidemenu sticky top-[69px] ${hide_toc && hide_sidenav && max_width ? "" : "px-6 lg:w-1/5"}`, "class")}> ${renderComponent($$result, "ScrollArea", null, { "className": "h-full w-full", "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/ui/scroll-area", "client:component-export": "ScrollArea" }, { "default": ($$result2) => renderTemplate`${!hide_toc && renderTemplate`${renderComponent($$result2, "TableofContent", $$TableofContents, { "headings": headings })}`}` })} </div> </main> ${renderComponent($$result, "Footer", $$Footer, { "class": "border-t border-border bg-background" })} </div> </body></html>`;
}, "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/layouts/DocsLayout.astro", void 0);

const $$Astro = createAstro("https://celestial.hyperoot.dev");
const getStaticPaths = async () => {
  const docs = await getCollection(
    "docs",
    (data) => !data.data.draft
  );
  const headings = await Promise.all(
    docs.map(
      (entry) => entry.render().then((data) => data.headings)
    )
  );
  const posts = docs.map((entry, index) => {
    return {
      params: { slug: entry.slug },
      props: { entry, headings: headings[index] }
    };
  });
  return posts;
};
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { entry, headings } = Astro2.props;
  const { Content } = await entry.render();
  const idAndData = { headings, ...entry.data };
  return renderTemplate`${renderComponent($$result, "DocsLayout", $$DocsLayout, { ...idAndData }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/pages/[...slug].astro", void 0);

const $$file = "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/pages/[...slug].astro";
const $$url = "/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
