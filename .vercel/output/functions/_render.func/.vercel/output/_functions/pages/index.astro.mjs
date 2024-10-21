import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../chunks/astro/server_DyQOWlKk.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CNfmwfF3.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_D07zSGO7.mjs';
import { B as Button } from '../chunks/Footer_CPb6o6Yt.mjs';
import { K as KittyAstronaut } from '../chunks/logo_Da9e7QRB.mjs';
/* empty css                                 */
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://celestial.hyperoot.dev");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "pattern py-6 w-full md:w-3/4 md:max-w-8xl min-h-dynamic_hero flex flex-col items-center justify-center",
    className
  ], "class:list")} data-astro-cid-aa5qonbu> <div class="flex flex-col-reverse md:flex-row" data-astro-cid-aa5qonbu> <div class="flex flex-col gap-4 md:w-1/2 p-8 justify-center items-center md:items-start" data-astro-cid-aa5qonbu> <h1 class="text-pretty text-center md:text-left md:text-4xl lg:text-5xl tracking-wide" data-astro-cid-aa5qonbu>
BBSS <i class="text-primary" data-astro-cid-aa5qonbu>Hack Club</i> </h1> <p class="text-center md:text-left text-lg md:text-2xl" data-astro-cid-aa5qonbu>
Take an idea you're interested in and bring it to Life
</p> <!-- Wrap the Button in an anchor tag to create the link --> <a class="mt-4" href="#calltoaction" data-astro-cid-aa5qonbu> ${renderComponent($$result, "Button", Button, { "data-astro-cid-aa5qonbu": true }, { "default": ($$result2) => renderTemplate`
What?
<span class="hand-drawn-arrow animate-bounce" data-astro-cid-aa5qonbu></span>  ` })} </a> </div> <div class="hidden md:flex w-1/2 justify-center align-middle" data-astro-cid-aa5qonbu> ${renderComponent($$result, "Image", $$Image, { "src": KittyAstronaut, "alt": "404", "data-astro-cid-aa5qonbu": true })} </div> </div> </div> `;
}, "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/components/home/hero.astro", void 0);

const $$CallToAction = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="calltoaction" class="cta-container" data-astro-cid-fuxbkuvm> <h1 class="text-center" data-astro-cid-fuxbkuvm>Take an idea you're interested in and bring it to <i data-astro-cid-fuxbkuvm>L</i>ife</h1> </div> `;
}, "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/components/home/CallToAction.astro", void 0);

const zennethmotivational = new Proxy({"src":"/_astro/zennethmotivational.B_sNaE4C.webp","width":5608,"height":3739,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/assets/img/zennethmotivational.webp";
							}
							
							return target[name];
						}
					});

const $$Entice = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl mx-auto pb-16 px-4 md:px-0"> <div class="flex-shrink-0 mb-6 md:mb-0 md:mr-8"> ${renderComponent($$result, "Image", $$Image, { "src": zennethmotivational, "alt": "Motivational image", "width": 320, "height": 320, "class": "w-full md:w-auto" })} </div> <div class="flex-grow"> <p class="text-base md:text-lg text-[#cbd4f5] space-y-2 text-center md:text-left">
Ever wanted to make a <a href="https://hackclub.com/onboard/" class="text-[#00ff29]">PCB</a>?
<br>
What about a <a href="https://sprig.hackclub.com/" class="text-[#00ffb3]">game</a>?
<br>
What about a <a href="https://saumilthecode.github.io/dancefloor/" class="text-[#f2ed6d]">3D website</a>?
<br> <br>
I could keep this list going but you get what I'm talking about.
<br>
Ever wanted to make something with Tech but never knew how to?
<br>
With BBSS Hack Club we <strong>will</strong> give you the resources, time and (<em>possibly</em>) funding to work on your projects
<br> <br> <a href="/projects" class="font-bold hover:underline transition-all duration-300 inline-block mt-4 text-lg">
🚀 <i class="text-primary">Explore Our Exciting Projects!</i> </a> </p> </div> </div>`;
}, "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/components/home/entice.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "BBSS Hack Club", "description": "Official website of THE Hack Club in BBSS." }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, {})}  ${renderComponent($$result2, "CallToAction", $$CallToAction, { "id": "calltoaction" })}  ${renderComponent($$result2, "Entice", $$Entice, {})} ` })}`;
}, "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/pages/index.astro", void 0);

const $$file = "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
