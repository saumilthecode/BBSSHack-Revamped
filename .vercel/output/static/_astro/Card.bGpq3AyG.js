import{$ as d,c as n}from"./_astro_assets.sjPZgb6Y.js";import{$ as o}from"./Card.BhQuEi3m.js";import{F as l}from"./utils.C2p3Gn_G.js";import{C as s}from"./cat.D8FjX6R9.js";import"./astro/assets-service.B8jKZLxS.js";import"./button.CsBxPiYM.js";import"./index.CVpbhN_F.js";import"./createLucideIcon.p0hNPnRc.js";const t={title:"Card"};function g(){return[{depth:2,slug:"card",text:"Card"},{depth:3,slug:"props",text:"Props"},{depth:3,slug:"basic-usage",text:"Basic Usage"},{depth:3,slug:"default-behavior",text:"Default Behavior"}]}const y=!0;function c(r){const e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...r.components};return n(l,{children:[n(e.h2,{id:"card",children:"Card"}),`
`,n(e.p,{children:["The ",n(e.code,{children:"Card"})," component is designed to present content in a styled container with support for custom icons and colors. It is a versatile component for displaying information with optional icon and color customization."]}),`
`,n(e.h3,{id:"props",children:"Props"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[`
`,n(e.p,{children:n(e.strong,{children:n(e.code,{children:"title"})})}),`
`,n(e.p,{children:["Type: ",n(e.code,{children:"string"})]}),`
`,n(e.p,{children:"Description: The title text to display in the card."}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:n(e.strong,{children:n(e.code,{children:"icon"})})}),`
`,n(e.p,{children:["Type: ",n(e.code,{children:"LucideIcon"})," (optional)"]}),`
`,n(e.p,{children:["Default: ",n(e.code,{children:"Terminal"})]}),`
`,n(e.p,{children:["Description: A custom icon to display in the card. If not provided, the default ",n(e.code,{children:"Terminal"})," icon will be used. You can look for icons at ",n(e.a,{href:"https://lucide.dev/icons/",rel:"nofollow",target:"_blank",children:"lucide.dev"}),"."]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:n(e.strong,{children:n(e.code,{children:"color"})})}),`
`,n(e.p,{children:["Type: ",n(e.code,{children:"string"})," (optional)"]}),`
`,n(e.p,{children:["Default: ",n(e.code,{children:'"primary"'})]}),`
`,n(e.p,{children:[`Options:
`,n("span",{class:"bg-Pink text-background p-1 border rounded text-sm font-semibold",children:"“Pink”"}),`
`,n("span",{class:"bg-Purple text-background p-1 border rounded text-sm font-semibold",children:"“Purple”"}),`
`,n("span",{class:"bg-Red text-background p-1 border rounded text-sm font-semibold",children:"“Red”"}),`
`,n("span",{class:"bg-Orange text-background p-1 border rounded text-sm font-semibold",children:"“Orange”"}),`
`,n("span",{class:"bg-Yellow text-background p-1 border rounded text-sm font-semibold",children:"“Yellow”"}),`
`,n("span",{class:"bg-Green text-background p-1 border rounded text-sm font-semibold",children:"“Green”"}),`
`,n("span",{class:"bg-Teal text-background p-1 border rounded text-sm font-semibold",children:"“Teal”"}),`
`,n("span",{class:"bg-Sky text-background p-1 border rounded text-sm font-semibold",children:"“Sky”"}),`
`,n("span",{class:"bg-Blue text-background p-1 border rounded text-sm font-semibold",children:"“Blue”"})]}),`
`,n(e.p,{children:["Description: The background color for the card. This is used for both the card’s background and the button’s hover state. If not provided, the default color is ",n("span",{class:"bg-primary text-background p-1 border rounded text-sm font-semibold",children:"“primary”"}),"."]}),`
`]}),`
`]}),`
`,n(e.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,n(e.p,{children:"To use the Card component, import it and use it in your Astro files with the desired title, optional custom icon, and color."}),`
`,n(o,{title:"Default Card",children:n(e.p,{children:"This is a card with default settings."})}),`
`,n(o,{title:"Card with Custom Icon",icon:s,children:n(e.p,{children:"This is a card with a custom icon."})}),`
`,n(o,{title:"Card with Custom Icon and Color",icon:s,color:"Red",children:n(e.p,{children:"This is a card with a custom icon and color."})}),`
`,n(o,{title:"Card with Custom Color",color:"Green",children:n(e.p,{children:"This is a card with a custom color."})}),`
`,n(e.pre,{class:"astro-code astro-code-themes catppuccin-latte catppuccin-macchiato",style:{backgroundColor:"#eff1f5","--shiki-dark-bg":"#24273a",color:"#4c4f69","--shiki-dark":"#cad3f5",overflowX:"auto"},tabindex:"0","data-language":"mdx",children:n(e.code,{children:[n(e.span,{class:"line",children:n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"import Card from '@/components/Card.astro';"})}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"import { Cat } from 'lucide-react';"})}),`
`,n(e.span,{class:"line"}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:'<Card title="Default Card">'})}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"  This is a card with default settings."})}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"</Card>"})}),`
`,n(e.span,{class:"line"}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:'<Card title="Card with Custom Icon" icon={Cat}>'})}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"  This is a card with a custom icon."})}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"</Card>"})}),`
`,n(e.span,{class:"line"}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:'<Card title="Card with Custom Icon and Color" icon={Cat} color="Red">'})}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"  This is a card with a custom icon and color."})}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"</Card>"})}),`
`,n(e.span,{class:"line"}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:'<Card title="Card with Custom Color" color="Green">'})}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"  This is a card with a custom color."})}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"</Card>"})}),`
`,n(e.span,{class:"line"})]})}),`
`,n(e.h3,{id:"default-behavior",children:"Default Behavior"}),`
`,n(e.p,{children:["If no ",n(e.code,{children:"icon"})," is provided, the ",n(e.code,{children:"Terminal"})," icon will be used by default. Similarly, if no ",n(e.code,{children:"color"})," is provided, the default color will be ",n(e.code,{children:'"primary"'}),"."]}),`
`,n(e.pre,{class:"astro-code astro-code-themes catppuccin-latte catppuccin-macchiato",style:{backgroundColor:"#eff1f5","--shiki-dark-bg":"#24273a",color:"#4c4f69","--shiki-dark":"#cad3f5",overflowX:"auto"},tabindex:"0","data-language":"mdx",children:n(e.code,{children:[n(e.span,{class:"line",children:n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"import Card from '@/components/Card.astro';"})}),`
`,n(e.span,{class:"line"}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:'<Card title="Default Card">'})}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"  This is a card with default settings."})}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"</Card>"})}),`
`,n(e.span,{class:"line"})]})})]})}function a(r={}){const{wrapper:e}=r.components||{};return e?n(e,{...r,children:n(c,{...r})}):c(r)}const F="src/content/docs/Custom%20Components/Card.mdx",D="/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/content/docs/Custom Components/Card.mdx",i=(r={})=>a({...r,components:{Fragment:l,...r.components,"astro-image":r.components?.img??d}});i[Symbol.for("mdx-component")]=!0;i[Symbol.for("astro.needsHeadRendering")]=!t.layout;i.moduleId="/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/content/docs/Custom Components/Card.mdx";export{i as Content,y as __usesAstroImage,i as default,D as file,t as frontmatter,g as getHeadings,F as url};
