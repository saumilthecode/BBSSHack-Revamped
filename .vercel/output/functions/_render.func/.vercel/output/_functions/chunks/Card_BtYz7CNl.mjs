import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent, f as renderSlot } from './astro/server_DyQOWlKk.mjs';
import { Terminal } from 'lucide-react';
import { B as Button } from './Footer_Cg9xIOBF.mjs';

const $$Astro = createAstro("https://celestial.hyperoot.dev");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { title, icon: Icon = Terminal, color = "primary" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`border w-full px-6 py-4 flex flex-col gap-4 items-start bg-card text-card-foreground`, "class")}> <div class="flex flex-row gap-4 justify-center"> ${renderComponent($$result, "Button", Button, { "size": "icon", "variant": "outline", "className": `bg-${color} text-background hover:bg-${color} hover:text-background cursor-default bg-opacity-50 border-${color}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", Icon, { "className": "w-[1.2rem] h-[1.2rem]" })} ` })} <h4 class="font-semibold tracking-wide m-0"> ${title} </h4> </div> <div class="text-muted-foreground"> ${renderSlot($$result, $$slots["default"])} </div> </div>`;
}, "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/components/Card.astro", void 0);

export { $$Card as $ };
