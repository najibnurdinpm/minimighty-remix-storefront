import type { LinksFunction } from "@remix-run/node";
import {
  Form,
  Links,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useNavigation,
  useSubmit,
} from "@remix-run/react";

import { Layout } from "./components/layout";
import stylesheet from "~/tailwind.css?url";



import type {
  LinksFunction,
  LoaderFunctionArgs,
} from "@remix-run/node";


export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export default function App() {


  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
