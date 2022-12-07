module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['.'],
                alias: {
                    '@Components': './src/Components',
                    '@Styled': './src/Styled',
                    '@Definitions': './src/Definitions',
                    '@Interfaces': './src/Interfaces',
                    '@I18n': './src/I18n',
                    '@Router': './src/Router',
                    '@Services': './src/Services',
                    '@Scenes': './scenes',
                    '@Apollo': './src/Apollo',
                    '@Screens': './src/Screens',
                },
            },
        ],
        [
            'module:react-native-dotenv',
            {
                envName: 'APP_ENV',
                moduleName: '@env',
                path: '.env',
                blocklist: null,
                allowlist: null,
                safe: false,
                allowUndefined: true,
                verbose: false,
            },
        ],
    ],
};
