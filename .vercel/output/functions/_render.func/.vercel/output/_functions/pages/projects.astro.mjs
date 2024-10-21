import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, b as addAttribute } from '../chunks/astro/server_DyQOWlKk.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_C6TJjYtZ.mjs';
import { jsx } from 'react/jsx-runtime';
import { Swiper, SwiperSlide } from 'swiper/react';
/* empty css                                    */
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Fragment } from 'preact/compat';
export { renderers } from '../renderers.mjs';

const SwiperCarousel = ({ images }) => {
  return /* @__PURE__ */ jsx(
    Swiper,
    {
      modules: [Autoplay, Pagination, Navigation],
      spaceBetween: 20,
      slidesPerView: 1,
      pagination: { clickable: true },
      loop: true,
      autoplay: { delay: 5e3 },
      navigation: true,
      children: images.map((imageUrl, index) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsx("img", { src: imageUrl, alt: `Carousel Image ${index + 1}`, class: "carousel-image" }) }, index))
    }
  );
};

const $$Astro = createAstro("https://celestial.hyperoot.dev");
const $$GridView = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GridView;
  const { items } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid-container" data-astro-cid-i3eacrnh> ${items.map((item) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "key": item.id }, { "default": ($$result2) => renderTemplate` <div class="grid-item" data-astro-cid-i3eacrnh> ${Array.isArray(item.imageUrl) ? renderTemplate`${renderComponent($$result2, "SwiperCarousel", SwiperCarousel, { "images": item.imageUrl, "data-astro-cid-i3eacrnh": true })}` : renderTemplate`<img${addAttribute(item.imageUrl, "src")}${addAttribute(item.title, "alt")} class="grid-image"${addAttribute(`object-fit: contain; width: 80%; height: auto; border-radius: ${item.cornerRadius || "0.5rem"};`, "style")} data-astro-cid-i3eacrnh>`} <h3 class="grid-title" data-astro-cid-i3eacrnh>${item.title}</h3> ${item.description && renderTemplate`<p class="grid-description" data-astro-cid-i3eacrnh>${item.description}</p>`} </div> ` })}`)} </div> `;
}, "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/components/GridView.astro", void 0);

const $$Projects$1 = createComponent(($$result, $$props, $$slots) => {
  const items = [
    { id: "1", title: "Grass", imageUrl: "src/assets/img/grass.jpg", description: "Created by Saumil in 2022 under the Swift Accelerator Programme, Grass is a application that aims to help forgetful plant owners who oftentimes want to have a plant but cant seem to sustain one for the life of them (and the life of the plant)  :) Grass helps you (yes you forgetful plant owner) to water and fertilize your plant through frequent notifications.\nYou can check it out at https://app.swiftinsg.org/grass!", cornerRadius: "22px" },
    { id: "2", title: "Journify", imageUrl: "src/assets/img/Journify.png", description: "Created by Daivik in 2023 under the Swift Accelerator Programme, Journify is a application that allows you to set up a itinerary to keep your travels organized! You can check it out at https://app.swiftinsg.org/journify!.", cornerRadius: "22px" },
    { id: "3", title: "About BBSS!", imageUrl: ["src/assets/img/screenshot1.webp", "src/assets/img/screenshot2.webp", "src/assets/img/screenshot3.webp", "src/assets/img/screenshot4.webp", "src/assets/img/screenshot5.webp"], description: "During the Swift Explorers Programme 2024 Saumil, Daivik and Zenneth made 'About BBSS' as a supliment to our existing school outreach schemes! Check it out at https://github.com/saumilthecode/propoganda!." },
    { id: "4", title: "Recycler", imageUrl: ["src/assets/img/recycler1.webp", "src/assets/img/recycler2.webp", "src/assets/img/recycler3.webp", "src/assets/img/recycler4.webp", "src/assets/img/recycler5.webp"], description: "Recycler is a simple project that allows you to recycle your own items." },
    { id: "5", title: "Rain and Trees", imageUrl: "src/assets/img/clipboard-image-2.png", description: "Daivik made this 3D website as part of <a href='https://fraps.hackclub.com/'>Fraps</a>. Check it out at https://gz56.github.io/glitch/." }
  ];
  return renderTemplate`${maybeRenderHead()}<h1 class="text-pretty text-center md:text-left md:text-4xl lg:text-5xl tracking-wide">
Projects made for an impact <i class="text-primary">for an impact</i> </h1> ${renderComponent($$result, "GridView", $$GridView, { "items": items })}`;
}, "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/components/projects/projects.astro", void 0);

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "BBSS Hack Club", "description": "Official website of THE Hack Club in BBSS." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ProjectsComponent", $$Projects$1, {})} ` })}`;
}, "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/pages/projects.astro", void 0);

const $$file = "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/pages/projects.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projects,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
