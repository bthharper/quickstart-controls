(function (global) {

    //map tells the System loader where to look for things
    var map = {
        'app': 'app',

        '@angular':         'node_modules/@angular', // sufficient if we didn't pin the version
        'rxjs':             'node_modules//rxjs',
        'ts':               'node_modules/plugin-typescript/lib/plugin.js',
        'typescript':       'node_modules/typescript/lib/typescript.js'
    };

    //packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app':          { main: 'main.ts', defaultExtension: 'ts' },
        'rxjs':         { defaultExtension: 'js' }
    };

    var ngPackageNames = [
      'common',
      'compiler',
      'core',
      'http',
      'platform-browser',
      'platform-browser-dynamic'
    ];

    // Add map entries for each angular package
    // only because we're pinning the version with `ngVer`.
    ngPackageNames.forEach(function (pkgName) {
        map['@angular/' + pkgName] = 'node_modules/@angular/' + pkgName;
    });

    // Add package entries for angular packages
    ngPackageNames.forEach(function (pkgName) {

        // Bundled (~40 requests):
        packages['@angular/' + pkgName] = { main: pkgName + '.umd.js', defaultExtension: 'js' };

        // Individual files (~300 requests):
        //packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
    });

        var config = {
            transpiler: 'typescript',
            typescriptOptions: {
                tsconfig: true,
                experimentalDecorators: true
            },
            meta: {
                'typescript': { "exports": "ts" },
                format: 'esm'

    },
        map: map,
        packages: packages
    }

    System.config(config);

})(this);
