import React from "react";

type ISectionTitle = {
  children: string | JSX.Element | JSX.Element[];
  small?: boolean;
  xSmall?: boolean;
  bold?: boolean;
};

export default function SectionTitle({
  children,
  small,
  xSmall,
  bold,
}: ISectionTitle) {
  let boldClass = bold ? "font-[700]" : "font-medium ";

  let fontSizeClass = `text-[32px] leading-[40px] lg:text-[64px] lg:leading-[72px] ${boldClass}`;
  if (small)
    fontSizeClass = `text-[40px] leading-[38px] lg:text-[72px] lg:leading-[76.8px] ${boldClass}`;
  if (xSmall)
    fontSizeClass = `text-[24px] leading-[26.4px] xl:text-[32px] lg:leading-[35.2px] ${boldClass}`;

  return (
    <div className={`tracking-[-0.02em] ${fontSizeClass}`}>{children}</div>
  );
}
