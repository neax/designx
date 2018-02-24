exports.files = {
  javascripts: {
    entryPoints: {
       'app/scripts/app.js': {
         'js/app.js': /^app\/scripts/,
         'js/vendor.js': /^(?!app\/scripts)/
       }
     },
  },
  stylesheets: {joinTo: {'app.css': 'app/styles/app.scss'}},
  templates: {
    joinTo: 'js/app.js'
  }
};

exports.plugins = {
  babel: {presets: ['latest']},
  sass: {
    options: {
      includePaths: require('bourbon').includePaths.concat(
        require("bourbon-neat").includePaths).concat(
          ['node_modules/normalize.css']
        )
    }
  }
  // autoReload: {enabled: true}
  // postcss: {processors: [
  //   require('postcss-cssnext')('last 2 versions'),
  //   require('csswring')()
  // ]}
};
