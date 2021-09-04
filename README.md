# PostCSS Strip Header Comment

A [PostCSS] plugin to strip header comment.

[PostCSS]: https://github.com/postcss/postcss

```css
/*
 * CSS Reset
 */
body {
  margin: 0;
}
```

```css
body {
  margin: 0;
}
```

## Usage

**Step 1:** Install plugin:

```sh
npm install --save-dev postcss postcss-strip-header-comment
```

**Step 2:** Check you project for existed PostCSS config: `postcss.config.js`
in the project root, `"postcss"` section in `package.json`
or `postcss` in bundle config.

If you do not use PostCSS, add it according to [official docs]
and set this plugin in settings.

**Step 3:** Add the plugin to plugins list:

```diff
module.exports = {
  plugins: [
+   require('postcss-strip-header-comment'),
    require('autoprefixer')
  ]
}
```

[official docs]: https://github.com/postcss/postcss#usage
