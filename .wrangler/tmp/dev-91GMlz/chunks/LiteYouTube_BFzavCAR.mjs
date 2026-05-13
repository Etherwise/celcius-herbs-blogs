globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createLucideIcon, j as jsxRuntimeExports, a as cn } from './PageRoot_CAKxSx1p.mjs';
import { a as reactExports } from './_@astro-renderers_BOWlyOdS.mjs';

/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Play = createLucideIcon("Play", [
  ["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]
]);

const LiteYouTube = ({
  id,
  start,
  title,
  className,
  aspectClassName = "aspect-video"
}) => {
  const [active, setActive] = reactExports.useState(false);
  const poster = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
  const src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0${start ? `&start=${start}` : ""}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: cn(
        "relative w-full overflow-hidden rounded-2xl bg-ink-deep",
        aspectClassName,
        className
      ),
      children: active ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "iframe",
        {
          src,
          title,
          loading: "lazy",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
          allowFullScreen: true,
          className: "absolute inset-0 h-full w-full border-0"
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => setActive(true),
          "aria-label": `Play video: ${title}`,
          className: "group absolute inset-0 h-full w-full focus:outline-none focus:ring-2 focus:ring-ring",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: poster,
                alt: "",
                loading: "lazy",
                decoding: "async",
                className: "absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-ink-deep/55 via-ink-deep/10 to-transparent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-16 w-16 items-center justify-center rounded-full bg-background/95 shadow-lg ring-1 ring-foreground/10 transition group-hover:scale-105", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "ml-1 h-7 w-7 fill-foreground text-foreground" }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-3 left-3 right-3 text-left text-[11px] tracking-[0.18em] uppercase text-background/90", children: title })
          ]
        }
      )
    }
  );
};

export { LiteYouTube as L, Play as P };
