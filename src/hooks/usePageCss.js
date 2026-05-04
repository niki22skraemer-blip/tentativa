import { useEffect } from "react";

export default function usePageCss(href) {
  useEffect(() => {
    if (!href) return;

    const id = `page-css:${href}`;
    let link = document.querySelector(`link[data-page-css="${id}"]`);

    if (!link) {
      link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      link.setAttribute("data-page-css", id);
      document.head.appendChild(link);
    }

    return () => {
      const existing = document.querySelector(`link[data-page-css="${id}"]`);
      if (existing) existing.remove();
    };
  }, [href]);
}
