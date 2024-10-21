const id = "Guides/sidebar-navigation.mdx";
						const collection = "docs";
						const slug = "guides/sidebar-navigation";
						const body = "By default, CelestialDocs sites include sidebar navigation. It is generated after parsing the folder structure of `docs` folder.\n\n## Custom order\n\nBy default, it will order the side navigation items (folders and files) alphabetically. But we can provide a custom order to the side navigation items. \n\nIn `config.js` you can set `side_nav_menu_order` with an order of items. Mind that the type is an array of strings. Each string is just the `slug` of that page.\n\n```js\n// config.js\n\nexport const side_nav_menu_order: string[] = [\n  \"getting-started\",\n  \"guides\",\n  \"guides/pages\",\n  \"guides/table-of-contents\",\n  \"guides/sidebar-navigation\",\n  \"custom-components\",\n  \"reference\",\n];\n```\n\nYou can include `folder-name`, `md` & `mdx` files. If you don't order every items, then the left out folders and files will the ordered after that alphabetically. Don't add extensions for `md` & `mdx` files.\n\nYou can find the slug of any page, if you simply run an instance of your project and look for the path after the port number in the url. For instance, the url in my local machine for this exact page is\n```\nhttp://localhost:4321/guides/sidebar-navigation\n```\n\nThe slug will be `guides/sidebar-navigation`. \n\n## Hide Sidebar Navigation\n\n### Hide globally\n\nIn `config.js`, you can hide sidebar navigation by keeping the value of `hide_side_navigations` as `true`. This will hide the sidebar navigation for all pages. \n\n```js\n// config.js\n\nexport const docconfig = {\n  ...\n  hide_side_navigations: true,\n  ...\n};\n```\n\n### Hide locally\n\nTo hide sidebar navigation for specific pages only, then add `hide_sidenav` in the frontmatter as `true`.\n\n```yaml\n---\nhide_sidenav: true\n---\n```";
						const data = {title:"Sidebar Navigation",author:"saumilthecode",draft:false,tags:[],hide_breadcrumbs:false,hide_toc:false,hide_sidenav:false,max_width:false};
						const _internal = {
							type: 'content',
							filePath: "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/content/docs/Guides/sidebar-navigation.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
