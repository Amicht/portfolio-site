import React from "react";
import { en } from "../locales/en";

const changeLang = (lang: string) => {};

export const LanguageCtxt = React.createContext({lang: en, changeLang });
