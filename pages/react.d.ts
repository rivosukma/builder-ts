import { ReactNode } from "react";

export type Props = { children?: ReactNode };

declare module "grapesjs-preset-newsletter" {
  let newsletter: any;
  export = newsletter;
}
