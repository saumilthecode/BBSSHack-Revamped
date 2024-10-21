const id = "Guides/breadcrumbs.mdx";
						const collection = "docs";
						const slug = "guides/breadcrumbs";
						const body = "By default, CelestialDocs sites supports breadcrumbs. It is generated after scanning the folder structure of `docs` folder.\n\n## Hide breadcrumbs\n\n### Hide globally\n\nIn `config.js`, you can disable the search function by keeping the value of `hide_breadcrumbs` as `true`.\n\n```js\n// config.js\n\nexport const docconfig = {\n  ...\n  hide_breadcrumbs: true\n  ...\n};\n```\n\n### Hide locally\n\nTo hide ToC for specific pages only, then add `hide_breadcrumbs` in the frontmatter as `true`.\n\n```yaml\n---\nhide_breadcrumbs: true\n---\n```\n";
						const data = {title:"Breadcrumbs",author:"saumilthecode",draft:false,tags:[],hide_breadcrumbs:false,hide_toc:false,hide_sidenav:false,max_width:false};
						const _internal = {
							type: 'content',
							filePath: "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/content/docs/Guides/breadcrumbs.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
