import { readdirSync } from "fs";
import { join, resolve, extname } from "path";

let baseDir = resolve(__dirname, "lang");
const definitions: Record<string, any> = {};

const loadTranslations = () => {
    const files = readdirSync(baseDir);

    for(const file of files) {
        if(extname(file) === ".json") {
            const lang = file.replace(".json", "");
            definitions[lang] = require(join(baseDir, file));
        }
    }
}

loadTranslations();

export const lang = definitions;
export const supports = lang => Object.keys(definitions).includes(lang);