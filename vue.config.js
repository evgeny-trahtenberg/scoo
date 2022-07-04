const configureWebpack = require('./webpack.config');

module.exports = {

  outputDir: './public',

  transpileDependencies: [
    'vuetify'
  ],

  /**
   * CSS settings.
   */
  css: {
    /**
     * Scss source maps
     */
    sourceMap: true,

    extract: true,
  },

  configureWebpack
}
