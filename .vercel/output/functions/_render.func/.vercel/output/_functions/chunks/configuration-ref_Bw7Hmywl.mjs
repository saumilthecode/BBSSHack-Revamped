const id = "Reference/configuration-ref.mdx";
						const collection = "docs";
						const slug = "reference/configuration-ref";
						const body = "import Callout from \"@/components/Callout.astro\";\n\nThis document describes the available configuration options for your site. These settings are defined in the `config.ts` file and control various aspects of your site's behavior and appearance. Below is a detailed reference for each configuration property, including examples where applicable.\n\n## Site Configuration\n\n### `website`\n\n- **Type**: `string`\n- **Description**: The URL of your site. Replace this with the deployed domain of your site to direct users to the correct address.\n- **Example**: `\"https://hyperoot.dev\"`\n\n### `author`\n\n- **Type**: `string`\n- **Description**: The name of the author or creator of the site. This value will be used to attribute content and provide credit.\n- **Example**: `\"HYP3R00T\"`\n\n### `desc`\n\n- **Type**: `string`\n- **Description**: A brief description of your site. This summary provides context and information about the purpose and content of the site.\n- **Example**: `\"Documentation template using Astro and Shadcn\"`\n\n### `title`\n\n- **Type**: `string`\n- **Description**: The title of your site. This will be displayed in the browser tab and used for branding purposes.\n- **Example**: `\"CelestialDocs\"`\n\n### `ogImage`\n\n- **Type**: `string`\n- **Description**: The filename of the image used for Open Graph (OG) sharing. This image will be shown when your site is shared on social media platforms.\n- **Example**: `\"og-image.jpg\"`\n\n### `repo`\n\n- **Type**: `string`\n- **Description**: The URL to the repository hosting the source code of your site. This provides a link to where the site's code can be found.\n- **Example**: `\"https://github.com/HYP3R00T/CelestialDocs\"`\n\n## Locale Configuration\n\n### `lang`\n\n- **Type**: `string`\n- **Default**: `\"en\"`\n- **Description**: The HTML language code for your site. Set this to specify the language used for the content. If left empty, it defaults to `\"en\"`.\n- **Example**: `\"en\"` (for English)\n\n### `langTag`\n\n- **Type**: `array of strings`\n- **Default**: `[\"en-EN\"]`\n- **Description**: BCP 47 language tags used to specify the language and regional variations. Set this to customize the language settings. An empty array defaults to the environment's default language.\n- **Example**: `[\"en-EN\"]` for English (United Kingdom)\n\n## Menu Configuration\n\n### `menu_items`\n\n- **Type**: `array of objects`\n- **Description**: An array of menu items for the site's navigation. Each item should have a `title` and `href` to define the menu link. This is currently empty but can be populated to create navigation links.\n- **Example**:\n  ```ts\n  export const menu_items = [\n    { title: \"Home\", href: \"/\" },\n    { title: \"About\", href: \"/about\" },\n    { title: \"Contact\", href: \"/contact\" },\n  ];\n  ```\n<Callout variant=\"danger\">\nIf you don't want any menu item, then keep the array empty.\n</Callout>\n\n## Sidebar Navigation Configuration\n\n### `side_nav_menu_order`\n\n- **Type**: `array of strings`\n- **Description**: An array defining the order of items in the sidebar navigation. The list should contain top-level folders and files (without extensions) to organize the sidebar menu.\n- **Example**:\n  ```ts\n  export const side_nav_menu_order = [\n    \"getting-started\",\n    \"guides\",\n    \"custom-components\",\n    \"reference\",\n  ];\n  ```\n<Callout variant=\"danger\">\nIf you don't want to order it manually, then keep the array empty.\n</Callout>\n\n## Global Settings\n\n<Callout variant=\"danger\">\nDon't comment or delete anything. Use `true` or `false` to enable disable or enable the feature.\n</Callout>\n\n### `hide_table_of_contents`\n\n- **Type**: `boolean`\n- **Default**: `false`\n- **Description**: Controls whether the Table of Contents (ToC) is hidden. Set this to `true` to prevent the ToC from being displayed.\n- **Example**: `true` (to hide the ToC)\n\n### `hide_breadcrumbs`\n\n- **Type**: `boolean`\n- **Default**: `false`\n- **Description**: Determines whether breadcrumbs should be hidden. Setting this to `true` will hide breadcrumbs from the site's pages.\n- **Example**: `true` (to hide breadcrumbs)\n\n### `hide_side_navigations`\n\n- **Type**: `boolean`\n- **Default**: `false`\n- **Description**: Controls whether sidebar navigation should be hidden. Setting this to `true` will hide the sidebar.\n- **Example**: `true` (to hide sidebar navigation)\n\n### `hide_datetime`\n\n- **Type**: `boolean`\n- **Default**: `false`\n- **Description**: Indicates whether the date and time should be hidden. If set to `true`, date and time information will not be displayed.\n- **Example**: `true` (to hide date and time)\n\n### `hide_time`\n\n- **Type**: `boolean`\n- **Default**: `true`\n- **Description**: Controls whether the time should be hidden. This is set to `true` by default to omit time information from being shown.\n- **Example**: `false` (to show time)\n\n### `hide_search`\n\n- **Type**: `boolean`\n- **Default**: `false`\n- **Description**: Determines if the search functionality should be hidden. Setting this to `true` will remove the search feature from the site.\n- **Example**: `true` (to hide the search feature)\n\n### `hide_repo_button`\n\n- **Type**: `boolean`\n- **Default**: `false`\n- **Description**: Controls whether the repository button is hidden. If set to `true`, the button linking to the repository will not be displayed.\n- **Example**: `true` (to hide the repository button)\n\n### `hide_author`\n\n- **Type**: `boolean`\n- **Default**: `false`\n- **Description**: Specifies whether the author's information should be hidden. Setting this to `true` will prevent the author's details from being shown.\n- **Example**: `true` (to hide author information)\n\nYou can append the following section to your existing documentation:\n\n---\n\n## Social Configuration\n\n- **Type**: `array of objects`\n- **Description**: An array defining the social media links that will appear in the footer of your site. Each object in the array should include `name`, `href`, `linkTitle`, and `active` properties to specify the social media platform, link, title, and whether the link is active.\n- **Example**:\n\n  ```ts\n  export const Socials: SocialObjects = [\n    ...\n    {\n      name: \"Github\",\n      href: \"https://github.com/HYP3R00T/\",\n      linkTitle: `${SITE.title} on Github`,\n      active: true,\n    },\n    ...\n  ];\n  ```\n\n<Callout variant=\"danger\">\nIf you don't want any social links, then disable it using `false` for `active`. Don't delete anything.\n</Callout>\n\nThis reference guide provides a comprehensive overview of the configuration options available for your site. Adjust these settings as needed to customize the appearance and behavior of your site according to your preferences.";
						const data = {title:"Configuration Reference",author:"saumilthecode",draft:false,tags:[],hide_breadcrumbs:false,hide_toc:false,hide_sidenav:false,max_width:false};
						const _internal = {
							type: 'content',
							filePath: "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/content/docs/Reference/configuration-ref.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };