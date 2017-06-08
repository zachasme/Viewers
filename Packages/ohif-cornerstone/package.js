Package.describe({
    name: 'ohif:cornerstone',
    summary: 'Cornerstone Web-based Medical Imaging libraries',
    version: '0.0.1'
});

Npm.depends({
    'cornerstone-core': '0.11.0',
    'cornerstone-wado-image-loader': '0.14.6',
    'cornerstone-tools': '0.8.7',
    'cornerstone-math': '0.1.5',
    'dicom-parser': '1.7.5',
    'hammerjs': '2.0.8',
    'jquery-hammerjs': '2.0.0'
});

Package.onUse(function(api) {
    api.versionsFrom('1.5');

    api.use('ecmascript');
    api.use('jquery');
    api.use('ohif:core');

    api.addAssets('public/js/cornerstoneWADOImageLoaderCodecs.es5.js', 'client');
    api.addAssets('public/js/cornerstoneWADOImageLoaderWebWorker.es5.js', 'client');

    api.mainModule('main.js', 'client');

    api.export('cornerstone', 'client');
    api.export('cornerstoneMath', 'client');
    api.export('cornerstoneTools', 'client');
    api.export('cornerstoneWADOImageLoader', 'client');
    api.export('dicomParser', 'client');
});
