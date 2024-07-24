import "server-only";

const languages = {
    en: () => import("./en.json").then((module) => module.default),
    bn: () => import("./bn.json").then((module) => module.default),
};

export const getLang = async (locale) => languages[locale]();
