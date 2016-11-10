
exports.localeReplace = function (localeRegions,locale) {

    var normalizedLocale = locale;
    var region, separator, language;

    //  Matches if a string is two lowercase or uppercase letters, followed by an underscore or hyphen, followed by two lowercase or uppercase letters.
    const regexLoose = /^[a-zA-Z]{2}[-_][a-zA-Z]{2}$/;

    //  Matches if a string is two lowercase letters, followed by a hyphen, followed by two uppercase letters
    const regexStrict = /^[a-z]{2}[-][A-Z]{2}$/;

    if (!regexLoose.test(locale)) {
        console.warn("WARNING: locale should be in the following format: 'en-US' (two lowercase letters, hyphen, two uppercase letters).");
        //return locale;
    }

    if (!regexStrict.test(locale)) {
        region = locale.substr(0,2).toLowerCase();
        separator = "-";
        language = locale.substr(3,4).toUpperCase();
        normalizedLocale = region + separator + language;
    }

    return [normalizedLocale, localeRegions[normalizedLocale]];

}
