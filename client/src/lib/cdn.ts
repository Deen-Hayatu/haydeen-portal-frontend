import type { SyntheticEvent } from "react";

const CDN_BASE = import.meta.env.VITE_IMAGEKIT_BASE?.replace(/\/$/, "");

type SrcSetConfig = {
  widths?: number[];
  quality?: number;
};

export const buildCdnSources = (
  path: string,
  { widths = [480, 768, 1200, 1600], quality = 75 }: SrcSetConfig = {}
) => {
  if (!CDN_BASE) return undefined;

  const src = `${CDN_BASE}/${path}?tr=f-auto,q-${quality},w-${widths[widths.length - 1]}`;
  const srcSet = widths
    .map((w) => `${CDN_BASE}/${path}?tr=f-auto,q-${quality},w-${w} ${w}w`)
    .join(", ");

  return { src, srcSet };
};

export const cdnAvailable = Boolean(CDN_BASE);

/**
 * The CDN account only has a subset of referenced assets uploaded, so a
 * `cdn.src` URL can 404 even when CDN_BASE is configured. Attach this to
 * onError to fall back to the locally bundled image instead of a broken
 * <img>. Clears srcset too, so the browser doesn't retry other CDN widths.
 */
export const onCdnImgError =
  (fallbackSrc: string) => (e: SyntheticEvent<HTMLImageElement>) => {
    if (e.currentTarget.src === fallbackSrc) return;
    e.currentTarget.srcset = "";
    e.currentTarget.src = fallbackSrc;
  };

