import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderComponent, k as renderUniqueStylesheet, l as renderScriptElement, n as createHeadAndContent, u as unescapeHTML, m as maybeRenderHead, o as createTransitionScope, s as spreadAttributes, f as renderSlot } from './astro/server_DyQOWlKk.mjs';
/* empty css                               */
import { clsx } from 'clsx';
import { jsxs, jsx } from 'react/jsx-runtime';
import * as React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { ChevronRightIcon, CheckIcon, DotFilledIcon } from '@radix-ui/react-icons';
import { Sun, Moon, X, MenuIcon, Github, Mail } from 'lucide-react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { s as removeBase, i as isRemotePath, V as VALID_INPUT_FORMATS, A as AstroError, U as UnknownContentCollectionError, t as prependForwardSlash } from './astro/assets-service_DbSabjp0.mjs';
import { u as unflatten } from './parse_T7v4SRek.mjs';
import { twMerge } from 'tailwind-merge';

const $$Astro$k = createAstro("https://celestial.hyperoot.dev");
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/node_modules/.pnpm/astro@4.16.6_@types+node@22.7.7_rollup@4.24.0_typescript@5.6.3/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$j = createAstro("https://celestial.hyperoot.dev");
const $$HeadSEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$HeadSEO;
  const canonicalURL = new URL(Astro2.url);
  if (Astro2.props.ogImage === void 0) {
    Astro2.props.ogImage = new URL("og-image.jpg", canonicalURL);
  }
  const { title, description, ogImage } = Astro2.props;
  return renderTemplate`<meta charset="utf-8"><meta name="robots" content="index, follow"><meta name="googlebot" content="index, follow"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="canonical"${addAttribute(canonicalURL, "href")}><link rel="shortcut icon" type="image/svg+xml" href="/favicon.svg"><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><meta property="og:type" content="website"><meta property="og:url"${addAttribute(canonicalURL, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(ogImage, "content")}><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(canonicalURL, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(ogImage, "content")}>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}`;
}, "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/components/core/HeadSEO.astro", void 0);

var e=e=>Object.prototype.toString.call(e),t=e=>ArrayBuffer.isView(e)&&!(e instanceof DataView),o=t=>"[object Date]"===e(t),n=t=>"[object RegExp]"===e(t),r=t=>"[object Error]"===e(t),s=t=>"[object Boolean]"===e(t),l=t=>"[object Number]"===e(t),i=t=>"[object String]"===e(t),c=Array.isArray,u=Object.getOwnPropertyDescriptor,a=Object.prototype.propertyIsEnumerable,f=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,h=Object.keys;function d(e){const t=h(e),o=f(e);for(let n=0;n<o.length;n++)a.call(e,o[n])&&t.push(o[n]);return t}function b(e,t){return !u(e,t)?.writable}function y(e,u){if("object"==typeof e&&null!==e){let a;if(c(e))a=[];else if(o(e))a=new Date(e.getTime?e.getTime():e);else if(n(e))a=new RegExp(e);else if(r(e))a={message:e.message};else if(s(e)||l(e)||i(e))a=Object(e);else {if(t(e))return e.slice();a=Object.create(Object.getPrototypeOf(e));}const f=u.includeSymbols?d:h;for(const t of f(e))a[t]=e[t];return a}return e}var g={includeSymbols:!1,immutable:!1};function m(e,t,o=g){const n=[],r=[];let s=!0;const l=o.includeSymbols?d:h,i=!!o.immutable;return function e(u){const a=i?y(u,o):u,f={};let h=!0;const d={node:a,node_:u,path:[].concat(n),parent:r[r.length-1],parents:r,key:n[n.length-1],isRoot:0===n.length,level:n.length,circular:void 0,isLeaf:!1,notLeaf:!0,notRoot:!0,isFirst:!1,isLast:!1,update:function(e,t=!1){d.isRoot||(d.parent.node[d.key]=e),d.node=e,t&&(h=!1);},delete:function(e){delete d.parent.node[d.key],e&&(h=!1);},remove:function(e){c(d.parent.node)?d.parent.node.splice(d.key,1):delete d.parent.node[d.key],e&&(h=!1);},keys:null,before:function(e){f.before=e;},after:function(e){f.after=e;},pre:function(e){f.pre=e;},post:function(e){f.post=e;},stop:function(){s=!1;},block:function(){h=!1;}};if(!s)return d;function g(){if("object"==typeof d.node&&null!==d.node){d.keys&&d.node_===d.node||(d.keys=l(d.node)),d.isLeaf=0===d.keys.length;for(let e=0;e<r.length;e++)if(r[e].node_===u){d.circular=r[e];break}}else d.isLeaf=!0,d.keys=null;d.notLeaf=!d.isLeaf,d.notRoot=!d.isRoot;}g();const m=t(d,d.node);if(void 0!==m&&d.update&&d.update(m),f.before&&f.before(d,d.node),!h)return d;if("object"==typeof d.node&&null!==d.node&&!d.circular){r.push(d),g();for(const[t,o]of Object.entries(d.keys??[])){n.push(o),f.pre&&f.pre(d,d.node[o],o);const r=e(d.node[o]);i&&p.call(d.node,o)&&!b(d.node,o)&&(d.node[o]=r.node),r.isLast=!!d.keys?.length&&+t==d.keys.length-1,r.isFirst=0==+t,f.post&&f.post(d,r),n.pop();}r.pop();}return f.after&&f.after(d,d.node),d}(e).node}var j=class{#e;#t;constructor(e,t=g){this.#e=e,this.#t=t;}get(e){let t=this.#e;for(let o=0;t&&o<e.length;o++){const n=e[o];if(!p.call(t,n)||!this.#t.includeSymbols&&"symbol"==typeof n)return;t=t[n];}return t}has(e){let t=this.#e;for(let o=0;t&&o<e.length;o++){const n=e[o];if(!p.call(t,n)||!this.#t.includeSymbols&&"symbol"==typeof n)return !1;t=t[n];}return !0}set(e,t){let o=this.#e,n=0;for(n=0;n<e.length-1;n++){const t=e[n];p.call(o,t)||(o[t]={}),o=o[t];}return o[e[n]]=t,t}map(e){return m(this.#e,e,{immutable:!0,includeSymbols:!!this.#t.includeSymbols})}forEach(e){return this.#e=m(this.#e,e,this.#t),this.#e}reduce(e,t){const o=1===arguments.length;let n=o?this.#e:t;return this.forEach(((t,r)=>{t.isRoot&&o||(n=e(t,n,r));})),n}paths(){const e=[];return this.forEach((t=>{e.push(t.path);})),e}nodes(){const e=[];return this.forEach((t=>{e.push(t.node);})),e}clone(){const e=[],o=[],n=this.#t;return t(this.#e)?this.#e.slice():function t(r){for(let t=0;t<e.length;t++)if(e[t]===r)return o[t];if("object"==typeof r&&null!==r){const s=y(r,n);e.push(r),o.push(s);const l=n.includeSymbols?d:h;for(const e of l(r))s[e]=t(r[e]);return e.pop(),o.pop(),s}return r}(this.#e)}};

/*
How it works:
`this.#head` is an instance of `Node` which keeps track of its current value and nests another instance of `Node` that keeps the value that comes after it. When a value is provided to `.enqueue()`, the code needs to iterate through `this.#head`, going deeper and deeper to find the last value. However, iterating through every single item is slow. This problem is solved by saving a reference to the last value as `this.#tail` so that it can reference it to add a new value.
*/

class Node {
	value;
	next;

	constructor(value) {
		this.value = value;
	}
}

class Queue {
	#head;
	#tail;
	#size;

	constructor() {
		this.clear();
	}

	enqueue(value) {
		const node = new Node(value);

		if (this.#head) {
			this.#tail.next = node;
			this.#tail = node;
		} else {
			this.#head = node;
			this.#tail = node;
		}

		this.#size++;
	}

	dequeue() {
		const current = this.#head;
		if (!current) {
			return;
		}

		this.#head = this.#head.next;
		this.#size--;
		return current.value;
	}

	peek() {
		if (!this.#head) {
			return;
		}

		return this.#head.value;

		// TODO: Node.js 18.
		// return this.#head?.value;
	}

	clear() {
		this.#head = undefined;
		this.#tail = undefined;
		this.#size = 0;
	}

	get size() {
		return this.#size;
	}

	* [Symbol.iterator]() {
		let current = this.#head;

		while (current) {
			yield current.value;
			current = current.next;
		}
	}
}

function pLimit(concurrency) {
	validateConcurrency(concurrency);

	const queue = new Queue();
	let activeCount = 0;

	const resumeNext = () => {
		if (activeCount < concurrency && queue.size > 0) {
			queue.dequeue()();
			// Since `pendingCount` has been decreased by one, increase `activeCount` by one.
			activeCount++;
		}
	};

	const next = () => {
		activeCount--;

		resumeNext();
	};

	const run = async (function_, resolve, arguments_) => {
		const result = (async () => function_(...arguments_))();

		resolve(result);

		try {
			await result;
		} catch {}

		next();
	};

	const enqueue = (function_, resolve, arguments_) => {
		// Queue `internalResolve` instead of the `run` function
		// to preserve asynchronous context.
		new Promise(internalResolve => {
			queue.enqueue(internalResolve);
		}).then(
			run.bind(undefined, function_, resolve, arguments_),
		);

		(async () => {
			// This function needs to wait until the next microtask before comparing
			// `activeCount` to `concurrency`, because `activeCount` is updated asynchronously
			// after the `internalResolve` function is dequeued and called. The comparison in the if-statement
			// needs to happen asynchronously as well to get an up-to-date value for `activeCount`.
			await Promise.resolve();

			if (activeCount < concurrency) {
				resumeNext();
			}
		})();
	};

	const generator = (function_, ...arguments_) => new Promise(resolve => {
		enqueue(function_, resolve, arguments_);
	});

	Object.defineProperties(generator, {
		activeCount: {
			get: () => activeCount,
		},
		pendingCount: {
			get: () => queue.size,
		},
		clearQueue: {
			value() {
				queue.clear();
			},
		},
		concurrency: {
			get: () => concurrency,

			set(newConcurrency) {
				validateConcurrency(newConcurrency);
				concurrency = newConcurrency;

				queueMicrotask(() => {
					// eslint-disable-next-line no-unmodified-loop-condition
					while (activeCount < concurrency && queue.size > 0) {
						resumeNext();
					}
				});
			},
		},
	});

	return generator;
}

function validateConcurrency(concurrency) {
	if (!((Number.isInteger(concurrency) || concurrency === Number.POSITIVE_INFINITY) && concurrency > 0)) {
		throw new TypeError('Expected `concurrency` to be a number from 1 and up');
	}
}

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1);
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class DataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_BcEe_9wP.mjs');
      if (data.default instanceof Map) {
        return DataStore.fromMap(data.default);
      }
      const map = unflatten(data.default);
      return DataStore.fromMap(map);
    } catch {
    }
    return new DataStore();
  }
  static async fromMap(data) {
    const store = new DataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = DataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://celestial.hyperoot.dev", "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./_astro_asset-imports_D9aVaOQr.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        const entry = {
          ...rawEntry,
          data,
          collection
        };
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, {})?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new j(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/docs/Custom Components/Callout.mdx": () => import('./Callout_iKFtzRha.mjs'),"/src/content/docs/Custom Components/Card.mdx": () => import('./Card_Da2w3oDI.mjs'),"/src/content/docs/Custom Components/index.mdx": () => import('./index_BE9770do.mjs'),"/src/content/docs/Guides/authoring-content-in-md.mdx": () => import('./authoring-content-in-md_fzCbh6NX.mjs'),"/src/content/docs/Guides/authoring-content-in-mdx.mdx": () => import('./authoring-content-in-mdx_c-rxxmO7.mjs'),"/src/content/docs/Guides/breadcrumbs.mdx": () => import('./breadcrumbs_C5OSujhx.mjs'),"/src/content/docs/Guides/index.mdx": () => import('./index_N-VJg-J2.mjs'),"/src/content/docs/Guides/pages.mdx": () => import('./pages_D3jZPUJE.mjs'),"/src/content/docs/Guides/sidebar-navigation.mdx": () => import('./sidebar-navigation_4BUDYzyk.mjs'),"/src/content/docs/Guides/site-search.mdx": () => import('./site-search_D4UAtv1v.mjs'),"/src/content/docs/Guides/table-of-contents.mdx": () => import('./table-of-contents_jXtzVvvE.mjs'),"/src/content/docs/Reference/configuration-ref.mdx": () => import('./configuration-ref_Bw7Hmywl.mjs'),"/src/content/docs/Reference/frontmatter-ref.mdx": () => import('./frontmatter-ref_kSEk9VYS.mjs'),"/src/content/docs/Resources/deployment.mdx": () => import('./deployment_BWzx1Jgy.mjs'),"/src/content/docs/Resources/index.mdx": () => import('./index_mZvLonvs.mjs'),"/src/content/docs/Resources/site-showcase.mdx": () => import('./site-showcase_bZfjPjpp.mjs'),"/src/content/docs/getting-started.mdx": () => import('./getting-started_BWZOQvU8.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"docs":{"type":"content","entries":{"getting-started":"/src/content/docs/getting-started.mdx","custom-components/callout":"/src/content/docs/Custom Components/Callout.mdx","custom-components/card":"/src/content/docs/Custom Components/Card.mdx","custom-components":"/src/content/docs/Custom Components/index.mdx","guides/authoring-content-in-md":"/src/content/docs/Guides/authoring-content-in-md.mdx","guides/authoring-content-in-mdx":"/src/content/docs/Guides/authoring-content-in-mdx.mdx","guides/breadcrumbs":"/src/content/docs/Guides/breadcrumbs.mdx","guides":"/src/content/docs/Guides/index.mdx","guides/pages":"/src/content/docs/Guides/pages.mdx","guides/sidebar-navigation":"/src/content/docs/Guides/sidebar-navigation.mdx","guides/site-search":"/src/content/docs/Guides/site-search.mdx","reference/configuration-ref":"/src/content/docs/Reference/configuration-ref.mdx","guides/table-of-contents":"/src/content/docs/Guides/table-of-contents.mdx","reference/frontmatter-ref":"/src/content/docs/Reference/frontmatter-ref.mdx","resources/deployment":"/src/content/docs/Resources/deployment.mdx","resources":"/src/content/docs/Resources/index.mdx","resources/site-showcase":"/src/content/docs/Resources/site-showcase.mdx"}}};

new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/docs/Custom Components/Callout.mdx": () => import('./Callout_CCBSLcR0.mjs'),"/src/content/docs/Custom Components/Card.mdx": () => import('./Card_BQOGIszK.mjs'),"/src/content/docs/Custom Components/index.mdx": () => import('./index_zWkdwaE2.mjs'),"/src/content/docs/Guides/authoring-content-in-md.mdx": () => import('./authoring-content-in-md_C6B518zl.mjs'),"/src/content/docs/Guides/authoring-content-in-mdx.mdx": () => import('./authoring-content-in-mdx_CxQTA6go.mjs'),"/src/content/docs/Guides/breadcrumbs.mdx": () => import('./breadcrumbs_BgMr2M8y.mjs'),"/src/content/docs/Guides/index.mdx": () => import('./index_DSmPycBc.mjs'),"/src/content/docs/Guides/pages.mdx": () => import('./pages_CCH7cv96.mjs'),"/src/content/docs/Guides/sidebar-navigation.mdx": () => import('./sidebar-navigation_Bs5bhXmF.mjs'),"/src/content/docs/Guides/site-search.mdx": () => import('./site-search_xIYJ6NP-.mjs'),"/src/content/docs/Guides/table-of-contents.mdx": () => import('./table-of-contents_D5bNm8sH.mjs'),"/src/content/docs/Reference/configuration-ref.mdx": () => import('./configuration-ref_7dRy-2HZ.mjs'),"/src/content/docs/Reference/frontmatter-ref.mdx": () => import('./frontmatter-ref_DTWeylJ_.mjs'),"/src/content/docs/Resources/deployment.mdx": () => import('./deployment_B45OUuXs.mjs'),"/src/content/docs/Resources/index.mdx": () => import('./index_C54fYGbt.mjs'),"/src/content/docs/Resources/site-showcase.mdx": () => import('./site-showcase_BWUE6mM4.mjs'),"/src/content/docs/getting-started.mdx": () => import('./getting-started_JdNb0saE.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

const SITE = {
  website: "http://bbsshack.club/",
  // replace this with your deployed domain
  author: "saumilthecode",
  desc: "Official Website of THE BBSS Hack Club",
  title: "BBSS Hack Club",
  ogImage: "logo.webp",
  repo: "https://github.com/saumilthecode/bbsshackclub"
};
const LOCALE = {
  lang: "en",
  // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"]
  // BCP 47 Language Tags. Set this empty [] to use the environment default
};
const menu_items = [
  // {
  //   title: "Home",
  //   href: "/",
  // },
];
const side_nav_menu_order = [
  "projects",
  "competition",
  "our-people",
  "join-us"
];
const docconfig = {
  hide_table_of_contents: false,
  hide_breadcrumbs: false,
  hide_side_navigations: false,
  hide_datetime: false,
  hide_time: true,
  hide_search: true,
  hide_repo_button: false,
  hide_author: true
};
const Socials = [
  {
    name: "Github",
    href: "https://github.com/saumilthecode/",
    linkTitle: ` ${SITE.title} on Github`,
    active: true
  },
  {
    name: "Facebook",
    href: "https://github.com/saumilthecode/",
    linkTitle: `${SITE.title} on Facebook`,
    active: false
  },
  {
    name: "Instagram",
    href: "https://github.com/saumilthecode/",
    linkTitle: `${SITE.title} on Instagram`,
    active: false
  },
  {
    name: "LinkedIn",
    href: "https://github.com/saumilthecode/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: false
  },
  {
    name: "Mail",
    href: "mailto:saumil@bbsshack.club",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true
  },
  {
    name: "Twitter",
    href: "https://github.com/saumilthecode/",
    linkTitle: `${SITE.title} on Twitter`,
    active: false
  },
  {
    name: "Twitch",
    href: "https://github.com/saumilthecode/",
    linkTitle: `${SITE.title} on Twitch`,
    active: false
  },
  {
    name: "YouTube",
    href: "https://github.com/saumilthecode/",
    linkTitle: `${SITE.title} on YouTube`,
    active: false
  },
  {
    name: "WhatsApp",
    href: "https://github.com/saumilthecode/",
    linkTitle: `${SITE.title} on WhatsApp`,
    active: false
  },
  {
    name: "Snapchat",
    href: "https://github.com/saumilthecode/",
    linkTitle: `${SITE.title} on Snapchat`,
    active: false
  },
  {
    name: "Pinterest",
    href: "https://github.com/saumilthecode/",
    linkTitle: `${SITE.title} on Pinterest`,
    active: false
  },
  {
    name: "Discord",
    href: "https://discord.gg/saumilthecode",
    linkTitle: `${SITE.title} on Discord`,
    active: false
  },
  {
    name: "GitLab",
    href: "https://github.com/saumilthecode/",
    linkTitle: `${SITE.title} on GitLab`,
    active: false
  },
  {
    name: "Reddit",
    href: "https://github.com/saumilthecode/",
    linkTitle: `${SITE.title} on Reddit`,
    active: false
  },
  {
    name: "Telegram",
    href: "https://github.com/saumilthecode/",
    linkTitle: `${SITE.title} on Telegram`,
    active: false
  },
  {
    name: "Mastodon",
    href: "https://mastodon.social/@saumilthecode",
    linkTitle: `${SITE.title} on Mastodon`,
    active: false
  }
];

function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const docs = await getCollection("docs");
const capitalizeFirstLetter = (str) => {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};
function sortItems(items, orderMap) {
  return items.slice().sort((a, b) => {
    const aIndex = orderMap.get(a.slug) ?? Infinity;
    const bIndex = orderMap.get(b.slug) ?? Infinity;
    return aIndex - bIndex;
  });
}
function buildMenu(items) {
  const menu2 = [];
  const orderMap = new Map(
    side_nav_menu_order.map((item, index) => [item, index])
  );
  function sortTopLevel(items2) {
    const topLevelItems = items2.filter((item) => !item.slug.includes("/"));
    const nestedItems = items2.filter((item) => item.slug.includes("/"));
    const sortedTopLevelItems = sortItems(topLevelItems, orderMap);
    const nestedMenu = [];
    nestedItems.forEach((item) => {
      const parts = item.slug.split("/");
      let currentLevel = nestedMenu;
      parts.forEach((part, index) => {
        let existingItem = currentLevel.find(
          (i) => i.slug === parts.slice(0, index + 1).join("/")
        );
        if (!existingItem) {
          existingItem = {
            title: capitalizeFirstLetter(part),
            slug: parts.slice(0, index + 1).join("/"),
            draft: item.draft,
            children: []
          };
          currentLevel.push(existingItem);
        }
        currentLevel = existingItem.children;
      });
    });
    sortedTopLevelItems.forEach((item) => {
      if (item.children) {
        item.children = sortItems(item.children, orderMap);
      }
    });
    return sortedTopLevelItems;
  }
  items.forEach((item) => {
    const parts = item.slug.split("/");
    let currentLevel = menu2;
    parts.forEach((part, index) => {
      let existingItem = currentLevel.find(
        (i) => i.slug === parts.slice(0, index + 1).join("/")
      );
      if (!existingItem) {
        existingItem = {
          title: index === parts.length - 1 ? capitalizeFirstLetter(item.data.title || "") : capitalizeFirstLetter(part),
          slug: parts.slice(0, index + 1).join("/"),
          draft: item.data.draft,
          children: []
        };
        currentLevel.push(existingItem);
      } else {
        if (index === parts.length - 1) {
          existingItem.title = capitalizeFirstLetter(item.data.title || "");
        }
      }
      currentLevel = existingItem.children;
    });
  });
  const topLevelMenu = sortTopLevel(menu2);
  return topLevelMenu;
}
const menu = buildMenu(docs);
function buildBreadcrumbs(slug) {
  const parts = slug.split("/");
  const breadcrumbs = [];
  let currentPath = "";
  parts.forEach((part, index) => {
    if (part) {
      currentPath += `/${part}`;
      breadcrumbs.push({
        title: part,
        link: `${currentPath}`
      });
    }
  });
  return breadcrumbs;
}
function createHeadingHierarchy(headings) {
  const topLevelHeadings = [];
  headings.forEach((heading) => {
    const h = {
      ...heading,
      subheadings: []
    };
    if (h.depth >= 2) {
      topLevelHeadings.push(h);
    } else {
      let parent = topLevelHeadings[topLevelHeadings.length - 1];
      if (parent) {
        parent.subheadings.push(h);
      }
    }
  });
  return topLevelHeadings;
}

const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuSubTrigger = React.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.SubTrigger,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ChevronRightIcon, { className: "ml-auto h-4 w-4" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
const DropdownMenuSubContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.SubContent,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
const DropdownMenuContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
const DropdownMenuItem = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
const DropdownMenuCheckboxItem = React.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.CheckboxItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(CheckIcon, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
const DropdownMenuRadioItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(DotFilledIcon, { className: "h-4 w-4 fill-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
const DropdownMenuLabel = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Label,
  {
    ref,
    className: cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
const DropdownMenuSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

function ModeToggle() {
  const [theme, setThemeState] = React.useState("theme-light");
  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setThemeState(isDarkMode ? "dark" : "theme-light");
  }, []);
  React.useEffect(() => {
    const isDark = theme === "dark" || theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  }, [theme]);
  return /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsx("div", { className: "min-w-[1.2rem]", children: /* @__PURE__ */ jsxs(Button, { variant: "ghost", size: "icon", children: [
      /* @__PURE__ */ jsx(Sun, { className: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" }),
      /* @__PURE__ */ jsx(Moon, { className: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" }),
      /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Toggle theme" })
    ] }) }) }),
    /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "end", children: [
      /* @__PURE__ */ jsx(DropdownMenuItem, { onClick: () => setThemeState("theme-light"), children: "Light" }),
      /* @__PURE__ */ jsx(DropdownMenuItem, { onClick: () => setThemeState("dark"), children: "Dark" }),
      /* @__PURE__ */ jsx(DropdownMenuItem, { onClick: () => setThemeState("system"), children: "System" })
    ] })
  ] });
}

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Navmenue = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div id="menu-toggle" data-astro-cid-egsepbbd> ', ' </div> <div class="menu-overlay" role="dialog" aria-modal="true" data-astro-cid-egsepbbd> <div class="close-button" data-astro-cid-egsepbbd> ', ' </div> <nav class="menu-content" data-astro-cid-egsepbbd> <ul class="menu-list flex flex-col items-center space-y-6 text-xl w-full" data-astro-cid-egsepbbd> <li class="menu-item" data-astro-cid-egsepbbd> <a href="/" data-astro-cid-egsepbbd> ', ' </a> </li> <li class="menu-item" data-astro-cid-egsepbbd> <a href="/projects" data-astro-cid-egsepbbd> ', ' </a> </li> <li class="menu-item" data-astro-cid-egsepbbd> <a href="/competition" data-astro-cid-egsepbbd> ', ' </a> </li> <li class="menu-item" data-astro-cid-egsepbbd> <a href="/our-people" data-astro-cid-egsepbbd> ', ' </a> </li> <li class="menu-item" data-astro-cid-egsepbbd> <a href="/join-us" data-astro-cid-egsepbbd> ', " </a> </li> </ul> </nav> </div> <script>\n  function toggleMenu() {\n    const menuOverlay = document.querySelector('.menu-overlay');\n    if (menuOverlay) {\n      menuOverlay.classList.toggle('active');\n      document.body.style.overflow = menuOverlay.classList.contains('active') ? 'hidden' : '';\n    }\n  }\n\n  document.getElementById('menu-toggle')?.addEventListener('click', toggleMenu);\n  document.getElementById('close-menu')?.addEventListener('click', toggleMenu);\n\n  document.querySelectorAll('.menu-overlay a').forEach(link => {\n    link.addEventListener('click', toggleMenu);\n  });\n\n  document.addEventListener('keydown', (e) => {\n    if (e.key === 'Escape') {\n      const menuOverlay = document.querySelector('.menu-overlay');\n      if (menuOverlay?.classList.contains('active')) {\n        toggleMenu();\n      }\n    }\n  });\n<\/script>"])), maybeRenderHead(), renderComponent($$result, "Button", Button, { "variant": "ghost", "size": "icon", "client:load": true, "aria-label": "Toggle menu", "client:component-hydration": "load", "client:component-path": "@/components/ui/button", "client:component-export": "Button", "data-astro-cid-egsepbbd": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "MenuIcon", MenuIcon, { "className": "h-[1.2rem] w-[1.2rem]", "data-astro-cid-egsepbbd": true })} ` }), renderComponent($$result, "Button", Button, { "variant": "ghost", "size": "icon", "client:load": true, "id": "close-menu", "aria-label": "Close menu", "client:component-hydration": "load", "client:component-path": "@/components/ui/button", "client:component-export": "Button", "data-astro-cid-egsepbbd": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "X", X, { "className": "h-[1.2rem] w-[1.2rem]", "data-astro-cid-egsepbbd": true })} ` }), renderComponent($$result, "Button", Button, { "client:load": true, "variant": "link", "size": "lg", "className": "w-full", "client:component-hydration": "load", "client:component-path": "@/components/ui/button", "client:component-export": "Button", "data-astro-cid-egsepbbd": true }, { "default": ($$result2) => renderTemplate`Home` }), renderComponent($$result, "Button", Button, { "client:load": true, "variant": "link", "size": "lg", "className": "w-full", "client:component-hydration": "load", "client:component-path": "@/components/ui/button", "client:component-export": "Button", "data-astro-cid-egsepbbd": true }, { "default": ($$result2) => renderTemplate`Projects` }), renderComponent($$result, "Button", Button, { "client:load": true, "variant": "link", "size": "lg", "className": "w-full", "client:component-hydration": "load", "client:component-path": "@/components/ui/button", "client:component-export": "Button", "data-astro-cid-egsepbbd": true }, { "default": ($$result2) => renderTemplate`Competition` }), renderComponent($$result, "Button", Button, { "client:load": true, "variant": "link", "size": "lg", "className": "w-full", "client:component-hydration": "load", "client:component-path": "@/components/ui/button", "client:component-export": "Button", "data-astro-cid-egsepbbd": true }, { "default": ($$result2) => renderTemplate`Our People` }), renderComponent($$result, "Button", Button, { "client:load": true, "variant": "default", "size": "lg", "className": "w-full", "client:component-hydration": "load", "client:component-path": "@/components/ui/button", "client:component-export": "Button", "data-astro-cid-egsepbbd": true }, { "default": ($$result2) => renderTemplate`Join Us` }));
}, "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/components/core/navmenue.astro", void 0);

const $$Astro$i = createAstro("https://celestial.hyperoot.dev");
const $$NavMenu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$NavMenu;
  const pathname = new URL(Astro2.request.url).pathname;
  const pathname_part = pathname.split("/")[1];
  return renderTemplate`${maybeRenderHead()}<div class="flex gap-4"> ${menu_items.map((item) => renderTemplate`<a${addAttribute(item.href, "href")}> ${renderComponent($$result, "Button", Button, { "variant": "/" + pathname_part === "/" + item.href.split("/")[1] ? "secondary" : "ghost", "key": item.href, "className": "/" + pathname_part === "/" + item.href.split("/")[1] ? "text-foreground" : "text-muted-foreground", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/ui/button", "client:component-export": "Button" }, { "default": ($$result2) => renderTemplate`${item.title}` })} </a>`)} </div>`;
}, "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/components/core/NavMenu.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$h = createAstro("https://celestial.hyperoot.dev");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Header;
  const { class: className } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", "<header", '> <div class="flex justify-between items-center"> <!-- Left Side Logo --> <div class="font-bold flex items-center"> <a href="/" class="no-underline"> ', ' </a> <div class="hidden md:block"> ', ' </div> </div> <!-- Center Navigation Links - Only visible on desktop --> <div class="hidden md:flex items-center gap-6"> <a href="/projects"> ', ' </a> <a href="/competition"> ', ' </a> <a href="/our-people"> ', ' </a> </div> <!-- Right Side Buttons and Controls --> <div class="flex items-center gap-1 sm:gap-2"> ', " ", ' <!-- Join Us button - Only visible on desktop --> <div class="hidden md:block"> <a href="/join-us"> ', " </a> </div> ", ' <div class="md:hidden"> ', ' </div> </div> </div> </header> <script>\n  function setDarkMode(document) {\n    const getThemePreference = () => {\n      if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {\n        return localStorage.getItem("theme");\n      }\n      return window.matchMedia("(prefers-color-scheme: dark)").matches\n        ? "dark"\n        : "theme-light";\n    };\n    const isDark = getThemePreference() === "dark";\n    document.documentElement.classList[isDark ? "add" : "remove"]("dark");\n\n    if (typeof localStorage !== "undefined") {\n      const observer = new MutationObserver(() => {\n        const isDark = document.documentElement.classList.contains("dark");\n        localStorage.setItem("theme", isDark ? "dark" : "theme-light");\n      });\n      observer.observe(document.documentElement, {\n        attributes: true,\n        attributeFilter: ["class"],\n      });\n    }\n  }\n\n  setDarkMode(document);\n\n  document.addEventListener("astro:before-swap", (ev) => {\n    setDarkMode(ev.newDocument);\n  });\n<\/script>'])), maybeRenderHead(), addAttribute([
    "py-2 px-2 sm:py-3 sm:px-4 md:px-6 lg:px-12 w-full sticky top-0 z-50",
    className
  ], "class:list"), renderComponent($$result, "Button", Button, { "client:load": true, "className": "flex gap-2 hover:no-underline text-lg sm:text-xl md:text-2xl p-1 sm:p-2", "variant": "link", "client:component-hydration": "load", "client:component-path": "@/components/ui/button", "client:component-export": "Button" }, { "default": ($$result2) => renderTemplate` <img src="/logo.webp" alt="Logo" class="w-6 h-6 sm:w-8 sm:h-8"> ${SITE.title}` }), renderComponent($$result, "NavMenu", $$NavMenu, {}), renderComponent($$result, "Button", Button, { "variant": "ghost" }, { "default": ($$result2) => renderTemplate`Projects` }), renderComponent($$result, "Button", Button, { "variant": "ghost" }, { "default": ($$result2) => renderTemplate`Competition` }), renderComponent($$result, "Button", Button, { "variant": "ghost" }, { "default": ($$result2) => renderTemplate`Our People` }), !docconfig.hide_search, renderTemplate`<a${addAttribute(SITE.repo, "href")} target="_blank" class="hidden sm:inline-block"> ${renderComponent($$result, "Button", Button, { "client:load": true, "variant": "ghost", "size": "icon", "className": "p-1 sm:p-2", "client:component-hydration": "load", "client:component-path": "@/components/ui/button", "client:component-export": "Button" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Github", Github, { "className": "w-4 h-4 sm:w-5 sm:h-5" })} ` })} </a>`, renderComponent($$result, "Button", Button, { "client:load": true, "variant": "default", "client:component-hydration": "load", "client:component-path": "@/components/ui/button", "client:component-export": "Button" }, { "default": ($$result2) => renderTemplate`Join Us` }), renderComponent($$result, "ModeToggle", ModeToggle, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/core/ModeToggle", "client:component-export": "ModeToggle", "data-astro-transition-persist": createTransitionScope($$result, "vm6dclw4") }), renderComponent($$result, "NavMenue", $$Navmenue, {}));
}, "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/components/core/Header.astro", "self");

const $$Astro$g = createAstro("https://celestial.hyperoot.dev");
const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$;
  const size = Astro2.props.size;
  delete Astro2.props.size;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(size ?? 24, "width")}${addAttribute(size ?? 24, "height")} fill="currentColor" viewBox="0 0 24 24"${spreadAttributes(Astro2.props)}> ${renderSlot($$result, $$slots["default"])} </svg>`;
}, "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/node_modules/.pnpm/simple-icons-astro@13.14.1_astro@4.16.6_@types+node@22.7.7_rollup@4.24.0_typescript@5.6.3_/node_modules/simple-icons-astro/dist/.Layout.astro", void 0);

const $$Astro$f = createAstro("https://celestial.hyperoot.dev");
const $$Discord = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Discord;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "fill": "#5865F2", ...Astro2.props }, { "default": ($$result2) => renderTemplate` <title>Discord</title>${maybeRenderHead()}<path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"></path> ` })}`;
}, "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/node_modules/.pnpm/simple-icons-astro@13.14.1_astro@4.16.6_@types+node@22.7.7_rollup@4.24.0_typescript@5.6.3_/node_modules/simple-icons-astro/dist/Discord.astro", void 0);

const $$Astro$e = createAstro("https://celestial.hyperoot.dev");
const $$Facebook = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Facebook;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "fill": "#0866FF", ...Astro2.props }, { "default": ($$result2) => renderTemplate` <title>Facebook</title>${maybeRenderHead()}<path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"></path> ` })}`;
}, "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/node_modules/.pnpm/simple-icons-astro@13.14.1_astro@4.16.6_@types+node@22.7.7_rollup@4.24.0_typescript@5.6.3_/node_modules/simple-icons-astro/dist/Facebook.astro", void 0);

const $$Astro$d = createAstro("https://celestial.hyperoot.dev");
const $$Github = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Github;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "fill": "#181717", ...Astro2.props }, { "default": ($$result2) => renderTemplate` <title>GitHub</title>${maybeRenderHead()}<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path> ` })}`;
}, "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/node_modules/.pnpm/simple-icons-astro@13.14.1_astro@4.16.6_@types+node@22.7.7_rollup@4.24.0_typescript@5.6.3_/node_modules/simple-icons-astro/dist/Github.astro", void 0);

const $$Astro$c = createAstro("https://celestial.hyperoot.dev");
const $$Gitlab = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Gitlab;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "fill": "#FC6D26", ...Astro2.props }, { "default": ($$result2) => renderTemplate` <title>GitLab</title>${maybeRenderHead()}<path d="m23.6004 9.5927-.0337-.0862L20.3.9814a.851.851 0 0 0-.3362-.405.8748.8748 0 0 0-.9997.0539.8748.8748 0 0 0-.29.4399l-2.2055 6.748H7.5375l-2.2057-6.748a.8573.8573 0 0 0-.29-.4412.8748.8748 0 0 0-.9997-.0537.8585.8585 0 0 0-.3362.4049L.4332 9.5015l-.0325.0862a6.0657 6.0657 0 0 0 2.0119 7.0105l.0113.0087.03.0213 4.976 3.7264 2.462 1.8633 1.4995 1.1321a1.0085 1.0085 0 0 0 1.2197 0l1.4995-1.1321 2.4619-1.8633 5.006-3.7489.0125-.01a6.0682 6.0682 0 0 0 2.0094-7.003z"></path> ` })}`;
}, "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/node_modules/.pnpm/simple-icons-astro@13.14.1_astro@4.16.6_@types+node@22.7.7_rollup@4.24.0_typescript@5.6.3_/node_modules/simple-icons-astro/dist/Gitlab.astro", void 0);

const $$Astro$b = createAstro("https://celestial.hyperoot.dev");
const $$Instagram = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Instagram;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "fill": "#E4405F", ...Astro2.props }, { "default": ($$result2) => renderTemplate` <title>Instagram</title>${maybeRenderHead()}<path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"></path> ` })}`;
}, "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/node_modules/.pnpm/simple-icons-astro@13.14.1_astro@4.16.6_@types+node@22.7.7_rollup@4.24.0_typescript@5.6.3_/node_modules/simple-icons-astro/dist/Instagram.astro", void 0);

const $$Astro$a = createAstro("https://celestial.hyperoot.dev");
const $$Linkedin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Linkedin;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "fill": "#0A66C2", ...Astro2.props }, { "default": ($$result2) => renderTemplate` <title>LinkedIn</title>${maybeRenderHead()}<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path> ` })}`;
}, "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/node_modules/.pnpm/simple-icons-astro@13.14.1_astro@4.16.6_@types+node@22.7.7_rollup@4.24.0_typescript@5.6.3_/node_modules/simple-icons-astro/dist/Linkedin.astro", void 0);

const $$Astro$9 = createAstro("https://celestial.hyperoot.dev");
const $$Mastodon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Mastodon;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "fill": "#6364FF", ...Astro2.props }, { "default": ($$result2) => renderTemplate` <title>Mastodon</title>${maybeRenderHead()}<path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z"></path> ` })}`;
}, "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/node_modules/.pnpm/simple-icons-astro@13.14.1_astro@4.16.6_@types+node@22.7.7_rollup@4.24.0_typescript@5.6.3_/node_modules/simple-icons-astro/dist/Mastodon.astro", void 0);

const $$Astro$8 = createAstro("https://celestial.hyperoot.dev");
const $$Pinterest = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Pinterest;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "fill": "#BD081C", ...Astro2.props }, { "default": ($$result2) => renderTemplate` <title>Pinterest</title>${maybeRenderHead()}<path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"></path> ` })}`;
}, "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/node_modules/.pnpm/simple-icons-astro@13.14.1_astro@4.16.6_@types+node@22.7.7_rollup@4.24.0_typescript@5.6.3_/node_modules/simple-icons-astro/dist/Pinterest.astro", void 0);

const $$Astro$7 = createAstro("https://celestial.hyperoot.dev");
const $$Reddit = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Reddit;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "fill": "#FF4500", ...Astro2.props }, { "default": ($$result2) => renderTemplate` <title>Reddit</title>${maybeRenderHead()}<path d="M12 0C5.373 0 0 5.373 0 12c0 3.314 1.343 6.314 3.515 8.485l-2.286 2.286C.775 23.225 1.097 24 1.738 24H12c6.627 0 12-5.373 12-12S18.627 0 12 0Zm4.388 3.199c1.104 0 1.999.895 1.999 1.999 0 1.105-.895 2-1.999 2-.946 0-1.739-.657-1.947-1.539v.002c-1.147.162-2.032 1.15-2.032 2.341v.007c1.776.067 3.4.567 4.686 1.363.473-.363 1.064-.58 1.707-.58 1.547 0 2.802 1.254 2.802 2.802 0 1.117-.655 2.081-1.601 2.531-.088 3.256-3.637 5.876-7.997 5.876-4.361 0-7.905-2.617-7.998-5.87-.954-.447-1.614-1.415-1.614-2.538 0-1.548 1.255-2.802 2.803-2.802.645 0 1.239.218 1.712.585 1.275-.79 2.881-1.291 4.64-1.365v-.01c0-1.663 1.263-3.034 2.88-3.207.188-.911.993-1.595 1.959-1.595Zm-8.085 8.376c-.784 0-1.459.78-1.506 1.797-.047 1.016.64 1.429 1.426 1.429.786 0 1.371-.369 1.418-1.385.047-1.017-.553-1.841-1.338-1.841Zm7.406 0c-.786 0-1.385.824-1.338 1.841.047 1.017.634 1.385 1.418 1.385.785 0 1.473-.413 1.426-1.429-.046-1.017-.721-1.797-1.506-1.797Zm-3.703 4.013c-.974 0-1.907.048-2.77.135-.147.015-.241.168-.183.305.483 1.154 1.622 1.964 2.953 1.964 1.33 0 2.47-.81 2.953-1.964.057-.137-.037-.29-.184-.305-.863-.087-1.795-.135-2.769-.135Z"></path> ` })}`;
}, "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/node_modules/.pnpm/simple-icons-astro@13.14.1_astro@4.16.6_@types+node@22.7.7_rollup@4.24.0_typescript@5.6.3_/node_modules/simple-icons-astro/dist/Reddit.astro", void 0);

const $$Astro$6 = createAstro("https://celestial.hyperoot.dev");
const $$Snapchat = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Snapchat;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "fill": "#FFFC00", ...Astro2.props }, { "default": ($$result2) => renderTemplate` <title>Snapchat</title>${maybeRenderHead()}<path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.15-.055-.225-.015-.243.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.307-4.837C7.392 1.077 10.739.807 11.727.807l.419-.015h.06z"></path> ` })}`;
}, "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/node_modules/.pnpm/simple-icons-astro@13.14.1_astro@4.16.6_@types+node@22.7.7_rollup@4.24.0_typescript@5.6.3_/node_modules/simple-icons-astro/dist/Snapchat.astro", void 0);

const $$Astro$5 = createAstro("https://celestial.hyperoot.dev");
const $$Telegram = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Telegram;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "fill": "#26A5E4", ...Astro2.props }, { "default": ($$result2) => renderTemplate` <title>Telegram</title>${maybeRenderHead()}<path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"></path> ` })}`;
}, "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/node_modules/.pnpm/simple-icons-astro@13.14.1_astro@4.16.6_@types+node@22.7.7_rollup@4.24.0_typescript@5.6.3_/node_modules/simple-icons-astro/dist/Telegram.astro", void 0);

const $$Astro$4 = createAstro("https://celestial.hyperoot.dev");
const $$Twitch = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Twitch;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "fill": "#9146FF", ...Astro2.props }, { "default": ($$result2) => renderTemplate` <title>Twitch</title>${maybeRenderHead()}<path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"></path> ` })}`;
}, "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/node_modules/.pnpm/simple-icons-astro@13.14.1_astro@4.16.6_@types+node@22.7.7_rollup@4.24.0_typescript@5.6.3_/node_modules/simple-icons-astro/dist/Twitch.astro", void 0);

const $$Astro$3 = createAstro("https://celestial.hyperoot.dev");
const $$Whatsapp = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Whatsapp;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "fill": "#25D366", ...Astro2.props }, { "default": ($$result2) => renderTemplate` <title>WhatsApp</title>${maybeRenderHead()}<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path> ` })}`;
}, "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/node_modules/.pnpm/simple-icons-astro@13.14.1_astro@4.16.6_@types+node@22.7.7_rollup@4.24.0_typescript@5.6.3_/node_modules/simple-icons-astro/dist/Whatsapp.astro", void 0);

const $$Astro$2 = createAstro("https://celestial.hyperoot.dev");
const $$X = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$X;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "fill": "#000000", ...Astro2.props }, { "default": ($$result2) => renderTemplate` <title>X</title>${maybeRenderHead()}<path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path> ` })}`;
}, "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/node_modules/.pnpm/simple-icons-astro@13.14.1_astro@4.16.6_@types+node@22.7.7_rollup@4.24.0_typescript@5.6.3_/node_modules/simple-icons-astro/dist/X.astro", void 0);

const $$Astro$1 = createAstro("https://celestial.hyperoot.dev");
const $$Youtube = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Youtube;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "fill": "#FF0000", ...Astro2.props }, { "default": ($$result2) => renderTemplate` <title>YouTube</title>${maybeRenderHead()}<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path> ` })}`;
}, "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/node_modules/.pnpm/simple-icons-astro@13.14.1_astro@4.16.6_@types+node@22.7.7_rollup@4.24.0_typescript@5.6.3_/node_modules/simple-icons-astro/dist/Youtube.astro", void 0);

const ICONS = {
  Github: $$Github,
  Facebook: $$Facebook,
  Instagram: $$Instagram,
  LinkedIn: $$Linkedin,
  Mail,
  Twitter: $$X,
  Twitch: $$Twitch,
  YouTube: $$Youtube,
  WhatsApp: $$Whatsapp,
  Snapchat: $$Snapchat,
  Pinterest: $$Pinterest,
  Discord: $$Discord,
  GitLab: $$Gitlab,
  Reddit: $$Reddit,
  Telegram: $$Telegram,
  Mastodon: $$Mastodon
};
const getIconByName = (name) => {
  return ICONS[name] || null;
};

const $$Astro = createAstro("https://celestial.hyperoot.dev");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Footer;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<footer${addAttribute(["py-[1.2rem] px-6 w-full", className], "class:list")}> <div class="flex flex-col items-center justify-between gap-4 md:flex-row container"> <p class="text-center text-sm leading-loose text-muted-foreground md:text-left">
Built by <a href="https://github.com/saumilthecode" target="_blank" rel="noreferrer" class="font-medium underline underline-offset-4">Saumil</a>. The source code is available on
<a href="https://github.com/saumilthecode/bbsshackclub" target="_blank" rel="noreferrer" class="font-medium underline underline-offset-4">GitHub</a>.
</p> <div class="flex gap-4"> ${Socials.filter((social) => social.active).map((social) => {
    const Icon = getIconByName(social.name);
    return renderTemplate`<a${addAttribute(social.href, "href")}${addAttribute(social.linkTitle, "title")} target="_blank" rel="noreferrer" class="text-muted-foreground hover:text-primary"> ${renderComponent($$result, "Button", Button, { "size": "icon", "variant": "ghost" }, { "default": ($$result2) => renderTemplate`${Icon && renderTemplate`${renderComponent($$result2, "Icon", Icon, { "className": "h-[1.2rem] w-[1.2rem]" })}`}` })} </a>`;
  })} </div> </div> </footer>`;
}, "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/components/core/Footer.astro", void 0);

export { $$HeadSEO as $, Button as B, LOCALE as L, SITE as S, $$Header as a, $$Footer as b, capitalizeFirstLetter as c, cn as d, createHeadingHierarchy as e, buildBreadcrumbs as f, docconfig as g, getCollection as h, menu as m };
