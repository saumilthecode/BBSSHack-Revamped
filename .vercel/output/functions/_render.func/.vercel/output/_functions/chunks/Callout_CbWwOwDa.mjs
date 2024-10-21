import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, f as renderSlot } from './astro/server_DyQOWlKk.mjs';
import { jsx } from 'react/jsx-runtime';
import * as React from 'react';
import { cva } from 'class-variance-authority';
import { d as cn, B as Button } from './Footer_Da7bObhW.mjs';
import { Info, TriangleAlert, Skull, PartyPopper } from 'lucide-react';

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
const Alert = React.forwardRef(({ className, variant, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    role: "alert",
    className: cn(alertVariants({ variant }), className),
    ...props
  }
));
Alert.displayName = "Alert";
const AlertTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "h5",
  {
    ref,
    className: cn("mb-1 font-medium leading-none tracking-tight", className),
    ...props
  }
));
AlertTitle.displayName = "AlertTitle";
const AlertDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("text-sm [&_p]:leading-relaxed", className),
    ...props
  }
));
AlertDescription.displayName = "AlertDescription";

const $$Astro = createAstro("https://celestial.hyperoot.dev");
const $$Callout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Callout;
  const { variant, title, icon: CustomIcon } = Astro2.props;
  const variantClasses = {
    info: "border-Blue bg-Blue text-background hover:bg-Blue cursor-default",
    warning: "border-Orange bg-Orange text-background hover:bg-Orange cursor-default",
    danger: "border-Red bg-Red text-background hover:bg-Red cursor-default",
    success: "border-Green bg-Green text-background hover:bg-Green cursor-default"
  };
  const variantIcons = {
    info: Info,
    warning: TriangleAlert,
    danger: Skull,
    success: PartyPopper
  };
  const defaultTitles = {
    info: "Info",
    warning: "Watch Out",
    danger: "Danger",
    success: "Success"
  };
  const validVariant = variant && variantClasses[variant] ? variant : "info";
  const Icon = CustomIcon || variantIcons[validVariant];
  const alertTitle = title || defaultTitles[validVariant];
  const alertClasses = variantClasses[validVariant];
  return renderTemplate`${maybeRenderHead()}<div class="callout py-2 w-full"> ${renderComponent($$result, "Alert", Alert, { "className": `flex flex-row items-start gap-2 ${alertClasses}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Button", Button, { "variant": "ghost", "size": "icon", "className": `${alertClasses}` }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Icon", Icon, { "className": "h-[1.2rem] w-[1.2rem]" })} ` })} <div> ${renderComponent($$result2, "AlertTitle", AlertTitle, { "className": "m-0" }, { "default": ($$result3) => renderTemplate`${alertTitle}` })} ${renderComponent($$result2, "AlertDescription", AlertDescription, {}, { "default": ($$result3) => renderTemplate` ${renderSlot($$result3, $$slots["default"])} ` })} </div> ` })} </div>`;
}, "/Users/tkrobot/Library/Mobile Documents/com~apple~CloudDocs/Documents/BBSSHack-Revamped/src/components/Callout.astro", void 0);

export { $$Callout as $ };
