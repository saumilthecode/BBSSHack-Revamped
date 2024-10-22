import{$ as r,c as n}from"./_astro_assets.DO9Fleac.js";import{F as l}from"./utils.Br1n13RH.js";import"./astro/assets-service.B8jKZLxS.js";import"./index.CVpbhN_F.js";const c={title:"Authoring Content in MDX"};function k(){return[{depth:2,slug:"using-a-component",text:"Using a component"},{depth:2,slug:"using-gfm-github-flavored-markdown",text:"Using GFM (GitHub-Flavored Markdown)"},{depth:3,slug:"task-lists",text:"Task Lists"},{depth:3,slug:"tables",text:"Tables"},{depth:3,slug:"strikethrough",text:"Strikethrough"},{depth:2,slug:"frontmatter",text:"Frontmatter"},{depth:2,slug:"using-javascript-expressions",text:"Using JavaScript Expressions"},{depth:2,slug:"syntax-highlighting",text:"Syntax Highlighting"}]}const u=!0;function a(i){const e={a:"a",code:"code",del:"del",h2:"h2",h3:"h3",input:"input",li:"li",p:"p",pre:"pre",span:"span",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i.components};return n(l,{children:[n(e.p,{children:["CelestialDocs supports ",n(e.a,{href:"https://mdxjs.com/",rel:"nofollow",target:"_blank",children:"MDX"})," files, which extend Markdown by allowing the inclusion of React components within your content. This enables dynamic and interactive documentation. We specifically use ",n(e.a,{href:"https://mdxjs.com/guides/gfm/",rel:"nofollow",target:"_blank",children:"GitHub flavored markdown (GFM)"}),". Markdown features, refer to the ",n(e.a,{href:"/guides/authoring-content-in-md",children:"Markdown documentation"}),"."]}),`
`,n(e.h2,{id:"using-a-component",children:"Using a component"}),`
`,n(e.p,{children:"You can use a component by importing it into your MDX file and then rendering it as a JSX tag. These look like HTML tags but start with an uppercase letter matching the name in your import statement:"}),`
`,n(e.pre,{class:"astro-code astro-code-themes catppuccin-latte catppuccin-macchiato",style:{backgroundColor:"#eff1f5","--shiki-dark-bg":"#24273a",color:"#4c4f69","--shiki-dark":"#cad3f5",overflowX:"auto"},tabindex:"0","data-language":"mdx",children:n(e.code,{children:[n(e.span,{class:"line",children:n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"---"})}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"title: Welcome to my docs"})}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"---"})}),`
`,n(e.span,{class:"line"}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:'import Callout from "@/components/Callout.astro";'})}),`
`,n(e.span,{class:"line"}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:'<Callout variant="info">'})}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"Sample callout"})}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"</Callout>"})}),`
`,n(e.span,{class:"line"})]})}),`
`,n(e.p,{children:["See the ",n(e.a,{href:"/guides/components",children:"components"})," for all custom components and their available fields."]}),`
`,n(e.h2,{id:"using-gfm-github-flavored-markdown",children:"Using GFM (GitHub-Flavored Markdown)"}),`
`,n(e.p,{children:["MDX in CelestialDocs supports ",n(e.a,{href:"https://mdxjs.com/guides/gfm/",rel:"nofollow",target:"_blank",children:"GitHub flavored markdown (GFM)"}),", which includes additional features such as tables, task lists, and strikethrough text."]}),`
`,n(e.h3,{id:"task-lists",children:"Task Lists"}),`
`,n(e.p,{children:"You can create task lists using GFM syntax."}),`
`,n(e.ul,{class:"contains-task-list",children:[`
`,n(e.li,{class:"task-list-item",children:[n(e.input,{type:"checkbox",checked:!0,disabled:!0})," Task 1"]}),`
`,n(e.li,{class:"task-list-item",children:[n(e.input,{type:"checkbox",disabled:!0})," Task 2"]}),`
`,n(e.li,{class:"task-list-item",children:[n(e.input,{type:"checkbox",disabled:!0})," Task 3"]}),`
`]}),`
`,n(e.pre,{class:"astro-code astro-code-themes catppuccin-latte catppuccin-macchiato",style:{backgroundColor:"#eff1f5","--shiki-dark-bg":"#24273a",color:"#4c4f69","--shiki-dark":"#cad3f5",overflowX:"auto"},tabindex:"0","data-language":"md",children:n(e.code,{children:[n(e.span,{class:"line",children:[n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:"-"}),n(e.span,{style:{color:"#7287FD","--shiki-dark":"#B7BDF8"},children:" ["}),n(e.span,{style:{color:"#7287FD","--shiki-dark":"#B7BDF8"},children:"x"}),n(e.span,{style:{color:"#7287FD","--shiki-dark":"#B7BDF8"},children:"]"}),n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:" Task 1"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:"-"}),n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:" [ ] Task 2"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:"-"}),n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:" [ ] Task 3"})]}),`
`,n(e.span,{class:"line"})]})}),`
`,n(e.h3,{id:"tables",children:"Tables"}),`
`,n(e.p,{children:"You can also create tables using GFM."}),`

















`,n(e.table,{children:[n(e.thead,{children:n(e.tr,{children:[n(e.th,{children:"Syntax"}),n(e.th,{children:"Description"})]})}),n(e.tbody,{children:[n(e.tr,{children:[n(e.td,{children:"Header"}),n(e.td,{children:"Title"})]}),n(e.tr,{children:[n(e.td,{children:"Paragraph"}),n(e.td,{children:"Text"})]})]})]}),`
`,n(e.pre,{class:"astro-code astro-code-themes catppuccin-latte catppuccin-macchiato",style:{backgroundColor:"#eff1f5","--shiki-dark-bg":"#24273a",color:"#4c4f69","--shiki-dark":"#cad3f5",overflowX:"auto"},tabindex:"0","data-language":"md",children:n(e.code,{children:[n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"|"}),n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:" Syntax    "}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"|"}),n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:" Description "}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"|"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"|"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:" ---------"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:" |"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:" -----------"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:" |"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"|"}),n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:" Header    "}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"|"}),n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:" Title       "}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"|"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"|"}),n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:" Paragraph "}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"|"}),n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:" Text        "}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"|"})]}),`
`,n(e.span,{class:"line"})]})}),`
`,n(e.h3,{id:"strikethrough",children:"Strikethrough"}),`
`,n(e.p,{children:["Strikethrough text can be created using double tilde ",n(e.code,{children:"~~"}),"."]}),`
`,n(e.p,{children:["This is ",n(e.del,{children:"strikethrough"})," text."]}),`
`,n(e.pre,{class:"astro-code astro-code-themes catppuccin-latte catppuccin-macchiato",style:{backgroundColor:"#eff1f5","--shiki-dark-bg":"#24273a",color:"#4c4f69","--shiki-dark":"#cad3f5",overflowX:"auto"},tabindex:"0","data-language":"md",children:n(e.code,{children:[n(e.span,{class:"line",children:[n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"This is "}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"~~"}),n(e.span,{style:{color:"#6C6F85","--shiki-dark":"#A5ADCB"},children:"strikethrough"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"~~"}),n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:" text."})]}),`
`,n(e.span,{class:"line"})]})}),`
`,n(e.h2,{id:"frontmatter",children:"Frontmatter"}),`
`,n(e.p,{children:"MDX files support frontmatter in the same way as Markdown files. You can define metadata at the top of the file."}),`
`,n(e.pre,{class:"astro-code astro-code-themes catppuccin-latte catppuccin-macchiato",style:{backgroundColor:"#eff1f5","--shiki-dark-bg":"#24273a",color:"#4c4f69","--shiki-dark":"#cad3f5",overflowX:"auto"},tabindex:"0","data-language":"mdx",children:n(e.code,{children:[n(e.span,{class:"line",children:n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"---"})}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"title: Sample MDX Page"})}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"---"})}),`
`,n(e.span,{class:"line"}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"Page content goes here, after "}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:"`"}),n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"---"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:"`"}),n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"."})]}),`
`,n(e.span,{class:"line"})]})}),`
`,n(e.p,{children:"Refer to the frontmatter reference for all available fields and how to add custom fields."}),`
`,n(e.h2,{id:"using-javascript-expressions",children:"Using JavaScript Expressions"}),`
`,n(e.p,{children:"MDX allows you to use JavaScript expressions within your content. This can be useful for dynamic content and calculations."}),`
`,n(e.p,{children:["Current year: ",new Date().getFullYear()]}),`
`,n(e.pre,{class:"astro-code astro-code-themes catppuccin-latte catppuccin-macchiato",style:{backgroundColor:"#eff1f5","--shiki-dark-bg":"#24273a",color:"#4c4f69","--shiki-dark":"#cad3f5",overflowX:"auto"},tabindex:"0","data-language":"mdx",children:n(e.code,{children:[n(e.span,{class:"line",children:n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"Current year: {new Date().getFullYear()}"})}),`
`,n(e.span,{class:"line"})]})}),`
`,n(e.pre,{class:"astro-code astro-code-themes catppuccin-latte catppuccin-macchiato",style:{backgroundColor:"#eff1f5","--shiki-dark-bg":"#24273a",color:"#4c4f69","--shiki-dark":"#cad3f5",overflowX:"auto"},tabindex:"0","data-language":"mdx",children:n(e.code,{children:[n(e.span,{class:"line",children:[n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:"**"}),n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"Fibonacci Sequence"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:"**"})]}),`
`,n(e.span,{class:"line"}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"The first 10 numbers in the Fibonacci sequence are:"})}),`
`,n(e.span,{class:"line"}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"{"})}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"  Array.from({ length: 10 }).map(("}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:"_"}),n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:", i) => ("})]}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"    <span key={i}>{fibonacci(i)} </span>"})}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"  ))"})}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"}"})}),`
`,n(e.span,{class:"line"})]})}),`
`,n(e.h2,{id:"syntax-highlighting",children:"Syntax Highlighting"}),`
`,n(e.p,{children:"MDX supports syntax highlighting for code blocks using backticks. You can specify the language for proper highlighting."}),`
`,n(e.pre,{class:"astro-code astro-code-themes catppuccin-latte catppuccin-macchiato",style:{backgroundColor:"#eff1f5","--shiki-dark-bg":"#24273a",color:"#4c4f69","--shiki-dark":"#cad3f5",overflowX:"auto"},tabindex:"0","data-language":"mdx",children:n(e.code,{children:[n(e.span,{class:"line",children:[n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:"```"}),n(e.span,{style:{color:"#1E66F5",fontStyle:"italic","--shiki-dark":"#8AADF4","--shiki-dark-font-style":"italic"},children:"jsx"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#8839EF","--shiki-dark":"#C6A0F6"},children:"const"}),n(e.span,{style:{color:"#1E66F5",fontStyle:"italic","--shiki-dark":"#8AADF4","--shiki-dark-font-style":"italic"},children:" MyComponent"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:" ="}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:" ()"}),n(e.span,{style:{color:"#8839EF","--shiki-dark":"#C6A0F6"},children:" =>"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:" {"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#8839EF","--shiki-dark":"#C6A0F6"},children:"  return"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:" <"}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"div"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:">"}),n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"Hello, MDX!"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:"</"}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"div"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:">"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:";"})]}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"};"})}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:"```"})}),`
`,n(e.span,{class:"line"})]})}),`
`,n(e.p,{children:["MDX combines the best of Markdown and JSX, making it a powerful tool for creating rich, interactive documentation. For more details on Markdown syntax, please see the ",n(e.a,{href:"/guides/authoring-content-in-md",children:"Markdown documentation"}),"."]})]})}function t(i={}){const{wrapper:e}=i.components||{};return e?n(e,{...i,children:n(a,{...i})}):a(i)}const y="src/content/docs/Guides/authoring-content-in-mdx.mdx",g="/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/content/docs/Guides/authoring-content-in-mdx.mdx",s=(i={})=>t({...i,components:{Fragment:l,...i.components,"astro-image":i.components?.img??r}});s[Symbol.for("mdx-component")]=!0;s[Symbol.for("astro.needsHeadRendering")]=!c.layout;s.moduleId="/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/content/docs/Guides/authoring-content-in-mdx.mdx";export{s as Content,u as __usesAstroImage,s as default,g as file,c as frontmatter,k as getHeadings,y as url};
