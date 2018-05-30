const packager = require('electron-packager')
const rimraf = require('rimraf')

const outPath = '../BUILD/'

rimraf.sync(outPath + '*')

packager({
  dir: __dirname,
  out: outPath,
  asar: false,
  ignore: [
    /(^|\/)\.[^/.]/,
    /tsconfig*/,
    /webpack*/,
    /package-lock.json/,
    /src/,
    /node_modules\/@/, // unsafe ?
    /cli-/,
  ]
})
