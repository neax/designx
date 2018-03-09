spostcss-brunch
==============

Please see the original module [postcss-brunch](https://github.com/brunch/postcss-brunch) if you're looking for a original `postcss-brunch`.

This module is just to support sass +  postcss (esp; autoprefixer). Once the war has been ended, it will no longer be needed.

### An example of sass-brunch + autoprefixer

```js
module.exports = {
	// ...
  plugins: {
    postcss: {
      ignore: /vendor.scss/,
      processors: [
        require('autoprefixer')()
      ]
    },
    sass: {
      allowCache: true,
      options: {
        includePaths: ['node_modules/bootstrap/scss', 'node_modules/font-awesome/scss'],
        precision: 8
      }
    }
  }
}
```

### Why does the module name have "s" prefix?

> Plugins are executed in order they are specified in package.json: when they operate on the same files (usually target files), their order can impact their ability to work.  - http://brunch.io/docs/using-plugins

`postcss-brunch` plugin has to be executed after executing `sass-brunch`.  Like..

```json
  "devDependencies": {
    "autoprefixer": "^7.1.4",
    "sass-brunch": "^2.10.4",
    "spostcss-brunch": "^1.0.0"
  },
```

## License

MIT
