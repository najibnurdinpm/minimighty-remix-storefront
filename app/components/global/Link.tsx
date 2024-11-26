import { Link as RemixLink, LinkProps } from "@remix-run/react";

export default function Link(props: LinkProps) {
  const { to, className, ...resOfProps } = props;

  return (
    <RemixLink
      prefetch="intent"
      to={to}
      className={className}
      {...resOfProps}
      preventScrollReset
    />
  );
}