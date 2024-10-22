import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DyQOWlKk.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_D07zSGO7.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Bqv0R2Wu.mjs';
import { K as KittyAstronaut } from '../chunks/logo_Da9e7QRB.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://celestial.hyperoot.dev");
const $$404 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  let countdown = 5;
  let timer;
  const updateCountdown = () => {
    const countdownElement = document.getElementById("countdown-timer");
    if (countdownElement) {
      countdownElement.innerText = countdown.toString();
    }
  };
  const startCountdown = () => {
    updateCountdown();
    timer = setInterval(() => {
      countdown--;
      updateCountdown();
      if (countdown <= 0) {
        clearInterval(timer);
        window.location.href = "/";
      }
    }, 1e3);
  };
  if (typeof window !== "undefined") {
    window.onload = startCountdown;
  }
  return renderTemplate(_a || (_a = __template(["", " <!-- Tell Astro to run this client-side --> <script>\n  let countdown = 5; \n  let timer;\n\n  const updateCountdown = () => {\n    const countdownElement = document.getElementById('countdown-timer');\n    if (countdownElement) {\n      countdownElement.innerText = countdown.toString();\n    }\n  };\n\n  const startCountdown = () => {\n    updateCountdown();\n    timer = setInterval(() => {\n      countdown--;\n      updateCountdown();\n      if (countdown <= 0) {\n        clearInterval(timer);\n        window.location.href = '/';\n      }\n    }, 1000);\n  };\n\n  window.onload = startCountdown;\n<\/script>"])), renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-5xl font-extrabold text-center text-blue-700 mb-6">Oops! Page Not Found</h1> <div class="flex justify-center items-center"> ${renderComponent($$result2, "Image", $$Image, { "src": KittyAstronaut, "alt": "A description of my image.", "class": "h-auto max-h-[60vh] w-auto rounded-lg shadow-lg transition-transform transform hover:scale-105" })} </div> <p class="text-lg text-center text-gray-600 mt-4">
It seems we can't find the page you're looking for. Please check the URL or return to the homepage.
</p> <p class="text-lg text-center text-gray-600 mt-4">
Redirecting in <span id="countdown-timer">5</span> seconds...
</p> ` }));
}, "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/pages/404.astro", void 0);

const $$file = "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
