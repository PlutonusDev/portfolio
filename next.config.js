const { readdirSync } = require("fs")
const { resolve, extname } = require("path");

const getLocales = () => {
    const i18nDir = resolve(__dirname, 'src/lib/i18n/lang');
    const files = readdirSync(i18nDir);

    return files
        .filter(file => extname(file) === '.json')
        .map(file => file.replace('.json', ''));
};

const locales = getLocales();

module.exports = {
    i18n: {
        locales,
        defaultLocale: "en"
    }
}