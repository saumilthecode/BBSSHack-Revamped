import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderComponent, e as renderHead, f as renderSlot } from './astro/server_DyQOWlKk.mjs';
<<<<<<<< HEAD:.vercel/output/functions/_render.func/.vercel/output/_functions/chunks/BaseLayout_CNfmwfF3.mjs
import { c as capitalizeFirstLetter, S as SITE, $ as $$HeadSEO, L as LOCALE, a as $$Header, b as $$Footer } from './Footer_CPb6o6Yt.mjs';
========
import { c as capitalizeFirstLetter, S as SITE, $ as $$HeadSEO, L as LOCALE, a as $$Header, b as $$Footer } from './Footer_CMP-zAKs.mjs';
>>>>>>>> origin/main:.vercel/output/functions/_render.func/.vercel/output/_functions/chunks/BaseLayout_CAI9o3vV.mjs

const $$Astro = createAstro("https://celestial.hyperoot.dev");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description, ogImage } = Astro2.props;
  return renderTemplate`<html${addAttribute(`${LOCALE.lang}`, "lang")} class="scroll-smooth"> <head>${renderComponent($$result, "HeadSEO", $$HeadSEO, { "title": `${title ? capitalizeFirstLetter(title) : SITE.title}`, "description": description, "ogImage": ogImage })}${renderHead()}</head> <body class="bg-background text-foreground font-sans"> <div class="flex flex-col min-h-screen"> ${renderComponent($$result, "Header", $$Header, { "class": "bg-background" })} <main class="flex flex-1 flex-col justify-center items-center px-4"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, { "class": "border-t border-border bg-background" })} </div> </body></html>`;
}, "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
