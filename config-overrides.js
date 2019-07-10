const {override, fixBabelImports, addLessLoader} = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
            '@font-family': 'PFDinDisplayPro-Reg',
            '@primary-color': '#76b828',
            // '@border-radius-base': '0',
            // '@border-radius-sm': '0',
        },
    }),
);