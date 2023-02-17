import { ReactNode } from "react";
import type { NextPage } from "next";

// TODO: must be check !!!
export type IGetLayout = (page: ReactNode) => NextPage | any;
