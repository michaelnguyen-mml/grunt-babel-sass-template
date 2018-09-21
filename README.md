# # Grunt Babel Webpack ES5+ Scss 


This is a template/environment containing Grunt, Babel, Sass, ES5+, Node and Express.

# Features!

  - Compile .scss to .css 
  - Compile ES5+ to JavaScript
  - Minify .css and .js files 
  - Combined js files into one
  - Watch enabled
 
# Getting Started

```sh
$ npm install
```

If running on IDE such as WebStorm, use built-in server otherwise run 

```sh
$ node prod/server/server.js
```

# Running Grunt

To start Grunt, use command
```sh
$ grunt
```
# Notes
The template is still in beta phase ( I just made that up) so there still may be some issues.
For now, you'll need to manually add stylesheet(s) into index.html at /prod/client.

However, JavaScript files should already be compiled from ES5+ to JS, minified and combined into one JS called app.min.js. This is already referenced in the index.html

# Issues / Errors
 Compass related
 Install compass
 | OS | Commands |
| ------ | ------ |
|Windows|gem install compass|
|Mac OS| sudo gem install compass|

If Sass is not installed
```sh
npm
$ npm install -g sass
```

```sh
Chocolatey
$ choco install sass
```

```sh
Homebrew 
$ brew install sass/sass/sass
```

### Links
 - https://github.com/gruntjs/grunt-contrib-compass
 - https://github.com/gruntjs/grunt-contrib-clean
 - https://github.com/gruntjs/grunt-contrib-watch
 - https://github.com/gruntjs/grunt-contrib-uglify
 - https://github.com/babel/grunt-babel
 - https://www.npmjs.com/package/grunt-postcss
 - https://rubygems.org/