const id = "Guides/site-search.mdx";
						const collection = "docs";
						const slug = "guides/site-search";
						const body = "import Callout from \"@/components/Callout.astro\";\n\nBy default, CelestialDocs sites include full-text search powered by [Fuse.js](https://www.fusejs.io/), which is a fast and low-bandwidth search tool for static sites.\n\nNo configuration is required to enable search. Build and deploy your site, then use the search bar in the site header to find content.\n\n<Callout variant=\"info\">\nYou can trigger search using keyboard shortcut also. Just press `ctrl` + `K`\n</Callout>\n\n## Hide search\n\nIn `config.js`, you can disable the search function by keeping the value of `hide_search` as `true`.\n\n```js\n// config.js\n\nexport const docconfig = {\n  ...\n  hide_search: true,\n  ...\n};\n```\n";
						const data = {title:"Site Search",author:"saumilthecode",draft:false,tags:[],hide_breadcrumbs:false,hide_toc:false,hide_sidenav:false,max_width:false};
						const _internal = {
							type: 'content',
							filePath: "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/content/docs/Guides/site-search.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
