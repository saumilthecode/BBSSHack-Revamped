import{$ as r,c as n}from"./_astro_assets.sjPZgb6Y.js";import{$ as l}from"./Callout.BtiGBbjL.js";import{F as o}from"./utils.C2p3Gn_G.js";import{C as a}from"./cat.D8FjX6R9.js";import"./astro/assets-service.B8jKZLxS.js";import"./index.CVpbhN_F.js";import"./button.CsBxPiYM.js";import"./createLucideIcon.p0hNPnRc.js";const c={title:"Callout"};function y(){return[{depth:2,slug:"callout",text:"Callout"},{depth:3,slug:"props",text:"Props"},{depth:3,slug:"basic-usage",text:"Basic Usage"},{depth:3,slug:"default-behavior",text:"Default Behavior"}]}const D=!0;function t(i){const e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...i.components};return n(o,{children:[n(e.h2,{id:"callout",children:"Callout"}),`
`,n(e.p,{children:["The ",n(e.code,{children:"Callout"})," component is designed to highlight important information, warnings, errors, or successes in your application. It is a versatile alert box with customizable variants and titles."]}),`
`,n(e.h3,{id:"props",children:"Props"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[`
`,n(e.p,{children:n(e.strong,{children:n(e.code,{children:"variant"})})}),`
`,n(e.p,{children:["Type: ",n(e.code,{children:"string"})]}),`
`,n(e.p,{children:"Default: “info”"}),`
`,n(e.p,{children:["Options: ",n(e.code,{children:'"info" | "warning" | "danger" | "success"'})]}),`
`,n(e.p,{children:"Description: Defines the type of alert to display. The variant determines the color, icon, and default title of the alert."}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:n(e.strong,{children:n(e.code,{children:"title"})})}),`
`,n(e.p,{children:["Type: ",n(e.code,{children:"string"})]}),`
`,n(e.p,{children:"Default: Default titles based on the variant"}),`
`,n(e.p,{children:"Description: Custom title for the alert. If not provided, the default title for the specified variant will be used."}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:n(e.strong,{children:n(e.code,{children:"icon"})})}),`
`,n(e.p,{children:["Type: ",n(e.code,{children:"LucideIcon"})," (optional)"]}),`
`,n(e.p,{children:"Default: Default icon based on the variant"}),`
`,n(e.p,{children:["Description: A custom icon to use in the alert. If not provided, the default icon for the specified variant will be used. You can look for icons at ",n(e.a,{href:"https://lucide.dev/icons/",rel:"nofollow",target:"_blank",children:"lucide.dev"}),"."]}),`
`]}),`
`]}),`
`,n(e.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,n(e.p,{children:"To use the Callout component, import it and use it in your Astro files with the desired variant and title."}),`
`,n(l,{variant:"info",children:n(e.p,{children:"This is an info message."})}),`
`,n(l,{variant:"warning",title:"Custom Warning Title",children:n(e.p,{children:"This is a warning message with a custom title."})}),`
`,n(l,{variant:"danger",icon:a,children:n(e.p,{children:"This is a danger message with a custom icon."})}),`
`,n(l,{variant:"success",title:"Custom Success Title",icon:a,children:n(e.p,{children:"This is a success message with a custom title and custom icon."})}),`
`,n(e.pre,{class:"astro-code astro-code-themes catppuccin-latte catppuccin-macchiato",style:{backgroundColor:"#eff1f5","--shiki-dark-bg":"#24273a",color:"#4c4f69","--shiki-dark":"#cad3f5",overflowX:"auto"},tabindex:"0","data-language":"mdx",children:n(e.code,{children:[n(e.span,{class:"line",children:n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"import Callout from '@/components/Callout.astro';"})}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"import { Cat } from 'lucide-react';"})}),`
`,n(e.span,{class:"line"}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:'<Callout variant="info">'})}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"  This is an info message."})}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"</Callout>"})}),`
`,n(e.span,{class:"line"}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:'<Callout variant="warning" title="Custom Warning Title">'})}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"  This is a warning message with a custom title."})}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"</Callout>"})}),`
`,n(e.span,{class:"line"}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:'<Callout variant="danger" icon={Cat}>'})}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"  This is a danger message with a custom icon."})}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"</Callout>"})}),`
`,n(e.span,{class:"line"}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:'<Callout variant="success" title="Custom Success Title" icon={Cat}>'})}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"  This is a success message with a custom title and custom icon."})}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"</Callout>"})}),`
`,n(e.span,{class:"line"})]})}),`
`,n(e.h3,{id:"default-behavior",children:"Default Behavior"}),`
`,n(e.p,{children:"If no variant is provided, the info variant will be used by default. Similarly, if no title is provided, the default title for the specified variant will be used."}),`
`,n(l,{children:n(e.p,{children:"This is an info message using the default settings."})}),`
`,n(e.pre,{class:"astro-code astro-code-themes catppuccin-latte catppuccin-macchiato",style:{backgroundColor:"#eff1f5","--shiki-dark-bg":"#24273a",color:"#4c4f69","--shiki-dark":"#cad3f5",overflowX:"auto"},tabindex:"0","data-language":"astro",children:n(e.code,{children:[n(e.span,{class:"line",children:n(e.span,{style:{color:"#9CA0B0",fontStyle:"italic","--shiki-dark":"#6E738D","--shiki-dark-font-style":"italic"},children:"---"})}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#8839EF","--shiki-dark":"#C6A0F6"},children:"import"}),n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:" Callout "}),n(e.span,{style:{color:"#8839EF","--shiki-dark":"#C6A0F6"},children:"from"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" '@/components/Callout.astro'"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:";"})]}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#9CA0B0",fontStyle:"italic","--shiki-dark":"#6E738D","--shiki-dark-font-style":"italic"},children:"---"})}),`
`,n(e.span,{class:"line"}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#9CA0B0",fontStyle:"italic","--shiki-dark":"#6E738D","--shiki-dark-font-style":"italic"},children:"<!-- Using default info variant and title -->"})}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:"<"}),n(e.span,{style:{color:"#EA76CB","--shiki-dark":"#F5BDE6"},children:"Callout"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:">"})]}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"  This is an info message using the default settings."})}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:"</"}),n(e.span,{style:{color:"#EA76CB","--shiki-dark":"#F5BDE6"},children:"Callout"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:">"})]}),`
`,n(e.span,{class:"line"})]})})]})}function d(i={}){const{wrapper:e}=i.components||{};return e?n(e,{...i,children:n(t,{...i})}):t(i)}const F="src/content/docs/Custom%20Components/Callout.mdx",v="/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/content/docs/Custom Components/Callout.mdx",s=(i={})=>d({...i,components:{Fragment:o,...i.components,"astro-image":i.components?.img??r}});s[Symbol.for("mdx-component")]=!0;s[Symbol.for("astro.needsHeadRendering")]=!c.layout;s.moduleId="/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/content/docs/Custom Components/Callout.mdx";export{s as Content,D as __usesAstroImage,s as default,v as file,c as frontmatter,y as getHeadings,F as url};
