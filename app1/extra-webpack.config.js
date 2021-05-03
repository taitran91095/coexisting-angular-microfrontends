const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default

module.exports = (angularWebpackConfig, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(angularWebpackConfig, options)
    singleSpaWebpackConfig.externals = {
        0:"zone.js",
        "rxjs": "rxjs",
        "@angular/core": "@angular/core",
        "@angular/common": "@angular/common",
        "@angular/common/http": "@angular/common.http",
        "@angular/platform-browser": "@angular/platform-browser",
        "@angular/platform-browser-dynamic": "@angular/platform-browser-dynamic",
        "@angular/compiler": "@angular/compiler",
        "@angular/elements": "@angular/elements",
        "@angular/router": "@angular/router",
        "@angular/forms": "@angular/forms",
        'ag-grid-angular':'ag-grid-angular',
    }
  // Feel free to modify this webpack config however you'd like to
  return singleSpaWebpackConfig
}
