exports.files = {
  javascripts: {
    joinTo: {
      'vendor.js': /^(?!app)/,
      'app.js': /^app/
    }
  },
  stylesheets: {joinTo: {'app.css': 'app/styles/app.scss'}}
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
  // postcss: {processors: [
  //   require('postcss-cssnext')('last 2 versions'),
  //   require('csswring')()
  // ]}
};

exports.npm = {
  globals: {
    $: 'jquery',
    jQuery: 'jquery',
    Popper: 'popper.js'
  }
}
