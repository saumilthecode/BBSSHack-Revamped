import type { MarkdownHeading } from "astro";
import { getCollection } from "astro:content";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import type {
  DocsEntry,
  HeadingHierarchy,
  MenuItem,
  MenuItemWithDraft,
} from "@/lib/types";

import { side_nav_menu_order } from "@/config";

// Utility function for class names
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Fetch the collection of documents
const docs: DocsEntry[] = await getCollection("docs");

// Capitalize the first letter of a string
export const capitalizeFirstLetter = (str: string) => {
  return str ? str.charAt(0).toUpperCase() + str.slice(1) : str;
};

// Sort items based on the provided order map
function sortItems(
  items: MenuItemWithDraft[],
  orderMap: Map<string, number>,
): MenuItemWithDraft[] {
  return items.slice().sort((a, b) => {
    const aIndex = orderMap.get(a.slug) ?? Infinity;
    const bIndex = orderMap.get(b.slug) ?? Infinity;
    return aIndex - bIndex;
  });
}

// Build a nested menu structure
function buildMenu(items: DocsEntry[]): MenuItem[] {
  const menu: MenuItemWithDraft[] = [];
  const orderMap = new Map(side_nav_menu_order.map((item, index) => [item, index]));

  // Sort top-level and nested items
  function sortTopLevel(items: MenuItemWithDraft[]): MenuItemWithDraft[] {
    const topLevelItems = items.filter(item => !item.slug.includes("/"));
    const nestedItems = items.filter(item => item.slug.includes("/"));
    const sortedTopLevelItems = sortItems(topLevelItems, orderMap);
    const nestedMenu: MenuItemWithDraft[] = [];

    nestedItems.forEach(item => {
      const parts = item.slug.split("/");
      let currentLevel = nestedMenu;

      parts.forEach((part, index) => {
        let existingItem = currentLevel.find(i => i.slug === parts.slice(0, index + 1).join("/"));
        if (!existingItem) {
          existingItem = {
            title: capitalizeFirstLetter(part),
            slug: parts.slice(0, index + 1).join("/"),
            draft: item.draft,
            children: [],
          };
          currentLevel.push(existingItem);
        }
        currentLevel = existingItem.children;
      });
    });

    sortedTopLevelItems.forEach(item => {
      if (item.children) {
        item.children = sortItems(item.children, orderMap);
      }
    });

    return sortedTopLevelItems;
  }

  items.forEach(item => {
    const parts = item.slug.split("/");
    let currentLevel = menu;

    parts.forEach((part, index) => {
      let existingItem = currentLevel.find(i => i.slug === parts.slice(0, index + 1).join("/"));
      if (!existingItem) {
        existingItem = {
          title: index === parts.length - 1 ? capitalizeFirstLetter(item.data.title || "") : capitalizeFirstLetter(part),
          slug: parts.slice(0, index + 1).join("/"),
          draft: item.data.draft,
          children: [],
        };
        currentLevel.push(existingItem);
      } else if (index === parts.length - 1) {
        existingItem.title = capitalizeFirstLetter(item.data.title || "");
      }
      currentLevel = existingItem.children;
    });
  });

  return sortTopLevel(menu);
}

export const menu = buildMenu(docs);

// Build breadcrumb structure
export function buildBreadcrumbs(slug: string): { title: string; link: string }[] {
  const parts = slug.split("/");
  const breadcrumbs: { title: string; link: string }[] = [];
  let currentPath = "";

  parts.forEach(part => {
    if (part) {
      currentPath += `/${part}`;
      breadcrumbs.push({ title: part, link: currentPath });
    }
  });

  return breadcrumbs;
}

// Create headings for Table of Contents
export function createHeadingHierarchy(headings: MarkdownHeading[]) {
  const topLevelHeadings: HeadingHierarchy[] = [];

  headings.forEach(heading => {
    const h = { ...heading, subheadings: [] };
    if (h.depth >= 2) {
      topLevelHeadings.push(h);
    } else {
      const parent = topLevelHeadings[topLevelHeadings.length - 1];
      if (parent) {
        parent.subheadings.push(h);
      }
    }
  });

  return topLevelHeadings;
}
