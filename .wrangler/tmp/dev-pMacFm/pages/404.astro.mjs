globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createComponent, k as renderComponent, r as renderTemplate } from '../chunks/astro/server_UrxGwwQU.mjs';
import { $ as $$Layout } from '../chunks/Layout_Ck2Mg-5P.mjs';
import { j as jsxRuntimeExports, P as PageRoot } from '../chunks/PageRoot_CAKxSx1p.mjs';
import { a as reactExports } from '../chunks/_@astro-renderers_BOWlyOdS.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_BOWlyOdS.mjs';

const NotFound = () => {
  reactExports.useEffect(() => {
    if (typeof window !== "undefined") {
      console.error("404 Error: User attempted to access non-existent route:", window.location.pathname);
    }
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mb-4 text-4xl font-bold", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-xl text-muted-foreground", children: "Oops! Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "text-primary underline hover:text-primary/90", children: "Return to Home" })
  ] }) });
};

function NotFoundIsland() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PageRoot, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(NotFound, {}) });
}

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Page not found | Celsius Herbs", "description": "The page you requested could not be found." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NotFoundIsland", NotFoundIsland, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/bruno/Downloads/Projeto/celsius-astrolovable/src/islands/common/NotFound", "client:component-export": "default" })} ` })}`;
}, "C:/Users/bruno/Downloads/Projeto/celsius-astrolovable/src/pages/404.astro", void 0);

const $$file = "C:/Users/bruno/Downloads/Projeto/celsius-astrolovable/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
