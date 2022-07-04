# Version Guard

Used to ensure modern CLI scripts fail silently on old node.js versions

[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg)](https://github.com/voxpelli/eslint-config)
[![ES Module Ready Badge](https://img.shields.io/badge/es%20module%20ready-yes-success.svg)](https://esmodules.dev/)
[![Types in JS](https://img.shields.io/badge/types_in_js-yes-brightgreen)](https://github.com/voxpelli/types-in-js)

## Usage

Add a top-level file to your project, eg. `cli.js`, containing something like:

```javascript
require('version-guard')('./path/to/file/to/run', 14, 18);
```

## Syntax

`versionGuard(filePath, minMajor, [minMinor])`

* **filePath** - a path to the modern file that should be run
* **minMajor** - the lowest major Node.js version that should be allowed to run the file
* **[minMinor]** - the lowest minor version of `minMajor` that should be allowed to run the file

Returns no data. Throws when configured incorrectly. Logs when failing silently.

`filePath` gets imported using the [dynamic `import()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import), thus supporting both ESM and CJS modules.

This project itself is a CJS project as the entire point is to work on incredibly old node.js versions.

## Used by

* [`dependency-check`](https://www.npmjs.com/package/dependency-check) - _in progress_
* [`installed-check`](https://www.npmjs.com/package/installed-check) - _in progress_
