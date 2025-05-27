module.exports = {
    locales: ['en', 'pt'],
    output: 'public/locales/$LOCALE/translation.json',
    input: [
      'src/**/*.{js,jsx,ts,tsx}'
    ],
    defaultValue: '',
    useKeysAsDefaultValue: false,
    keySeparator: false,
    namespaceSeparator: false,
  };
  