const id = "Guides/pages.mdx";
						const collection = "docs";
						const slug = "guides/pages";
						const body = "\nCelestialDocs creates your site's HTML pages from your content, offering flexible options through Markdown frontmatter. Additionally, CelestialDocs projects have complete access to [Astro's robust page generation tools](https://docs.astro.build/en/basics/astro-pages/). This guide explains how page generation works in CelestialDocs.\n\n## Content pages\n\n### File formats\n\nCelestialDocs supports authoring content in Markdown and MDX with no configuration required. \n\n### Add pages\n\nAdd new pages to your site by creating `.md` or `.mdx` files in `src/content/docs/`. Use sub-folders to organize your files and to create multiple path segments.\n\n### Type-safe frontmatter\n\nAll CelestialDocs pages share a customizable set of frontmatter properties that control their appearance:\n\n```yaml\n---\ntitle: Sample\nauthor: hyperoot\npubDatetime: 2024-04-09T12:00:00-05:30\nmodDatetime: 2024-08-01T12:00:00-05:30 \ndescription: 'Sample description'\ndraft: true\ntags:\n- anything\n- you\n- want\nhide_toc: \nhide_sidenav: \nhide_breadcrumbs: \n---\n```\n\nA snippet template is also included with this project if you are using vscode. Just type `docs` in any `.md` or `.mdx` file and you will see a suggestion for a template named `docs`. Most of the frontmatter properties are commented. Uncomment them by removing `#`. For date and time we use [standard date-time string format](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format).";
						const data = {title:"Pages",author:"saumilthecode",draft:false,tags:[],hide_breadcrumbs:false,hide_toc:false,hide_sidenav:false,max_width:false};
						const _internal = {
							type: 'content',
							filePath: "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/content/docs/Guides/pages.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
