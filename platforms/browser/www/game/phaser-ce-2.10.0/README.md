# Phaser CE (Community Edition)

<img src="http://phaser.io/images/github/arcade-cab.png" align="right" width="400" height="617">

Phaser is a fast, free, and fun open source HTML5 game framework. It uses a custom build of [Pixi.js](https://github.com/GoodBoyDigital/pixi.js/) for WebGL and Canvas rendering, and supports desktop and mobile web browsers. Games can be compiled to iOS, Android and native desktop apps via 3rd party tools. You can use JavaScript or TypeScript for development. Years after release, Phaser is still one of the [most starred game frameworks](https://github.com/showcases/javascript-game-engines) on GitHub.

Thousands of developers worldwide use Phaser. From indies and multi-national digital agencies, to schools and Universities. Each creating their own incredible [games](http://phaser.io/games/).

Phaser v2 was built and maintained by [Photon Storm](http://www.photonstorm.com) and turned over to the community (as Phaser CE) in November 2016. [Phaser v3](https://github.com/photonstorm/phaser/tree/master/v3) is in active development.

The [current Phaser CE release is 2.10.0](https://github.com/photonstorm/phaser-ce/releases/tag/v2.10.0).

- **Visit:** The [Phaser website](http://phaser.io) and follow on [Twitter](https://twitter.com/photonstorm) (#[phaserjs](https://twitter.com/hashtag/phaserjs))
- **Learn:** [API Docs](https://photonstorm.github.io/phaser-ce/), [Support Forum][forum] and [StackOverflow](http://stackoverflow.com/questions/tagged/phaser-framework)
- **Code:** 700+ [Examples](http://phaser.io/examples) ([source][examples]), new [Phaser CE examples](https://codepen.io/collection/AMbZgY/)
- **Read:** Weekly [Phaser World](#newsletter) Newsletter
- **Chat:** [Slack](http://phaser.io/community/slack) and [Discord](http://phaser.io/community/discord)
- **Extend:** Phaser plugins – [Shop](http://phaser.io/shop/plugins), [GitHub](https://github.com/search?q=topic%3Aphaser-plugin&type=Repositories "Phaser plugins on GitHub"), [NPM](https://www.npmjs.com/browse/keyword/phaser-plugin "Phaser plugins on NPM")
- **Be awesome:** [Support](#support) the future of Phaser

Grab the source and join in the fun!

## Contents

- [What's New?](#whats-new)
- [Games made with Phaser](#games)
- [Requirements](#requirements)
- [Download Phaser](#download)
- [Getting Started](#getting-started)
- [Building Phaser](#building-phaser)
- [Support Phaser](#support)
- [Phaser World Newsletter](#newsletter)
- [Contributing](#contributing)
- [Change Log](#change-log)

<a name="whats-new"></a>

## What's New

### 23rd March 2017

[Phaser CE](https://github.com/photonstorm/phaser-ce) is the Community Edition of [Phaser](https://github.com/photonstorm/phaser). In short, it's a version of Phaser that you, the community, have direct control over.

It was started with the 2.7.0 release and since then the community has worked to continue updating it, fixing bugs and adding new features.

Phaser 2 was a massive milestone for us, and we're still constantly amazed at all the cool things you created, and continue to create with it. Thank you to everyone who has submitted an issue or pull request over the years, or helped the framework grow in any shape or capacity.

As of today all of our in-house resources are spent on building Phaser 3 and beyond. However we fully recognize that lots of you still use Phaser 2, and have a lot to contribute to its future. So this is what we've done:

* [Phaser 2.6.2](https://github.com/photonstorm/phaser/releases/tag/v2.6.2) is the last 'official' release, published on npm as [phaser](https://www.npmjs.com/package/phaser)
* [Phaser 2.7.0 and all future versions](https://github.com/photonstorm/phaser-ce/releases) have been given to the community to maintain, published on npm as [phaser-ce](https://www.npmjs.com/package/phaser-ce)

**All Pull Requests made against this repo will be unconditionally approved**.

We'll give GitHub permissions to a select few individuals to help with this process if they request them. And when you, the community, request it, we will publish new versions to npm.

We believe this set-up will give us the best of both worlds. It will allow us to continue focusing our efforts on Phaser 3. And it will allow the community to enhance Phaser 2 for as long as they wish.

As always, check the [Change Log](#change-log) to see what was added recently.

Keep your eyes on the web site, and subscribe to the weekly Phaser World [newsletter](#newsletter). You can also follow on [Twitter](https://twitter.com/photonstorm), or chat in the Phaser [Slack](http://phaser.io/community/slack) and [Discord](http://phaser.io/community/discord) channels.

There are also now more ways than before to help [support](#support) the development of Phaser. The uptake so far has been fantastic, but this is an on-going mission. Thank you to everyone who supports our development. Who shares our belief in the future of HTML5 gaming, and Phasers role in that.

Happy coding everyone!

Cheers,

Rich - [@photonstorm](https://twitter.com/photonstorm)

![boogie](http://www.phaser.io/images/spacedancer.gif)

<a name="games"></a>

## Made With Phaser

Thousands of [games](http://phaser.io/news/category/game) have been made in Phaser. From game jam entries, to titles by some of the largest entertainment brands in the world. You can find [hundreds more on our web site](http://phaser.io/games).

We add [new games](http://phaser.io/news/category/game) to the Phaser site weekly, so be sure to send us yours when it's finished!

<a name="requirements"></a>

## Requirements

Phaser requires a web browser that supports the [canvas tag](http://caniuse.com/#feat=canvas). This includes Internet Explorer 9+, Firefox, Chrome, Safari and Opera on desktop. iOS Safari, Android Browser and Chrome for Android are supported on mobile.

While Phaser does its best to ensure a consistent cross-platform experience, always be aware of browser and device limitations. This is especially important with memory and GPU limitations on mobile, and legacy browser HTML5 compatibility.

### IE9

If you need to support IE9 / Android 2.x _and_ use P2 physics, then you must use the polyfills in the [resources/IE9 Polyfill folder](https://github.com/photonstorm/phaser-ce/tree/master/resources/IE9%20Polyfill). If you don't use P2 (or don't care about IE9!) you can skip this.

### JavaScript and TypeScript

Phaser is developed in ES5 JavaScript. We've made no assumptions about how you like to code, and were careful not to impose a strict structure upon you. You won't find Phaser split into modules, requiring a build step, or making you use a class / inheritance OOP approach. That doesn't mean you can't do so, it just means we don't _force_ you to. It's your choice.

If you code with [TypeScript](http://www.typescriptlang.org/) there are comprehensive definition files in the [typescript folder](https://github.com/photonstorm/phaser-ce/tree/master/typescript). They are for TypeScript 1.4+.

<a name="download"></a>

## Download Phaser

Phaser is [hosted on Github][phaser]. There are a number of ways to download it:

* Clone the git repository via [https][clone-http], [ssh][clone-ssh] or with the Github [Windows][clone-ghwin] or [Mac][clone-ghmac] clients.
* Download as [zip][get-zip] or [tar.gz][get-tgz]
* Download just the build files: [phaser.js][get-js] and [phaser.min.js][get-minjs]
* Checkout with [svn][clone-svn]

### Bower / NPM

Install via [bower](http://bower.io):

```bash
bower install phaser-ce
```

Install via [npm](https://www.npmjs.com):

```bash
npm install phaser-ce
```

Please see additional steps for [Browserify/CommonJS](#browserify) and [Webpack](#webpack).

### CDN

[Phaser CE is on jsDelivr](http://www.jsdelivr.com/projects/phaser-ce), a "super-fast CDN for developers". Include the following in your html:

```html
<script src="//cdn.jsdelivr.net/npm/phaser-ce@2.10.0/build/phaser.js"></script>
```

or the minified version:

```html
<script src="//cdn.jsdelivr.net/npm/phaser-ce@2.10.0"></script>
```

[Custom builds](https://cdn.jsdelivr.net/npm/phaser-ce@2.10.0/build/custom/) are available too.

<a name="getting-started"></a>

## Getting Started

Our [Getting Started Guide](http://phaser.io/tutorials/getting-started) will get you up to speed quickly: from [setting up a web server](https://phaser.io/tutorials/getting-started/part2) to picking an editor/IDE. After that read our [Making your first Game](http://phaser.io/tutorials/making-your-first-phaser-game) tutorial. Please work through this, **no matter what your development experience**, to learn how Phaser approaches things.

The single biggest Phaser resource is the [Phaser web site](http://phaser.io/news). You'll find hundreds of tutorials, with new ones added every week. Subscribe to the [Phaser World](http://phaser.io/community/newsletter) newsletter for a weekly links round-up.

Using **TypeScript**? See Phaser's [TypeScript definitions](https://github.com/photonstorm/phaser-ce/tree/master/typescript) and the [Using Phaser with TypeScript](https://phaser.io/tutorials/how-to-use-phaser-with-typescript).

Prefer **videos**? Zenva have an excellent [Phaser video course](https://academy.zenva.com/product/the-complete-mobile-game-development-course-platinum-edition/?a=13), with hours of great material.

### Source Code Examples

Ever since we started Phaser we've been growing and expanding our extensive set of examples. Currently there are over 700 of them, with the full source code and assets available.

Browse [Phaser Examples](http://phaser.io/examples) or clone [phaser-examples-mirror](https://github.com/samme/phaser-examples-mirror) and eat your heart out!

### Web Templates

If you'd like to try coding in Phaser right now, with nothing more than your web browser, open up the [Phaser CE Game Template](http://codepen.io/pen?template=vyKJvw). There are [CoffeeScript](http://codepen.io/pen?template=OWxELE) and [ES6](http://codepen.io/pen?template=pRGPKG) variants too.

### http-server

For most development, you'll need to run a local web server. If you already have [node](https://nodejs.org), it's as easy as:

```bash
npm install -g http-server
```

Then from your project:

```bash
http-server . -c-1 -o
```

There are [many other options](https://gist.github.com/willurd/5720255 "List of http static server one-liners") that you may already have installed as well.

<a name="browserify"></a>

### Browserify / CommonJS

Phaser was never written to be modular. Everything exists under one single global namespace, and you cannot `require` selected parts of it into your builds. It expects 3 global vars to exist in order to work properly: `Phaser`, `PIXI` and `p2`. The following is one way of doing this:

```javascript
window.PIXI   = require('phaser-ce/build/custom/pixi');
window.p2     = require('phaser-ce/build/custom/p2');
window.Phaser = require('phaser-ce/build/custom/phaser-split');
```

If you [build a custom version of Phaser](#building-phaser) it will split the 3 core libs out into their own files, allowing you to require them as above.

Full module-based development is available in Phaser v3.

<a name="webpack"></a>

### Webpack

As with browserify, use the **pixi**, **p2**, and **phaser-split** modules in [build/custom](https://github.com/photonstorm/phaser-ce/tree/master/build/custom). You can then use [expose-loader](https://webpack.js.org/loaders/expose-loader/) to expose them as `PIXI`, `p2`, and `Phaser`.

See [our webpack project template](https://github.com/photonstorm/phaser-ce/tree/master/resources/Project%20Templates/Webpack) or [lean/phaser-es6-webpack](https://github.com/lean/phaser-es6-webpack) for a sample configuration.

### Ionic

For using phaser-ce with [ionic](https://ionicframework.com), have a look at the [ionic example](https://github.com/photonstorm/phaser-ce/tree/master/resources/Project%20Templates/ionic-example) within project templates. To get phaser-ce working with ionic in general, you've to extend "only" the webpack config used by ionic. To get this done are a few steps are necessary.

- Install dependencies [webpack-merge](https://www.npmjs.com/package/webpack-merge) and [expose-loader](https://www.npmjs.com/package/expose-loader):

  ```bash
  npm install webpack-merge expose-loader --save-dev
  ```

- Create a [new webpack config](https://github.com/photonstorm/phaser-ce/blob/master/resources/Project%20Templates/ionic-example/webpack.config.js) setting up expose-loader and merging it with the ionic webpack script.

- Add own webpack config at package.json, so that ionic will use it:

  ```json
  {
    "config": {
      "ionic_webpack": "./webpack.config.js"
    }
  }
  ```

- Import **pixi**, **p2** and **phaser-ce** within your project:

  ```javascript
  import "pixi";
  import "p2";
  import * as Phaser from "phaser-ce";
  ```

### Interphase

[Interphase](http://phaser.io/interphase) is a programming book for Phaser developers of all skill levels.

With 400 pages of content you'll find detailed articles, game development "Making Of" guides and tutorials. All were written using the latest version of Phaser, so you won't be learning any out-dated tricks.

As well as the [book](http://phaser.io/interphase) you get all the source code, graphics and assets to go with it, and lots of extras too.

### Phaser Editor - A complete Phaser Editor

[Phaser Editor](http://phaser.io/shop/apps/phaser-editor) is a brand new Eclipse based editor that offers lots of built-in tools specifically for Phaser developers. Handy features include Smart code auto-completion, built-in web server, documentation search, asset management, texture atlas creator, audio sprite creator, asset previews and lots more.

### Game Mechanic Explorer

The [Game Mechanic Explorer](http://gamemechanicexplorer.com) is a great interactive way to learn how to develop specific game mechanics in Phaser. Well worth exploring once you've got your dev environment set-up.

### Mighty Editor - Visual Game Editor

[MightyEditor](http://mightyfingers.com/) is a browser-based visual Phaser game editor. Create your maps with ease, position objects and share them in seconds. It also exports to native Phaser code. Excellent for quickly setting-up levels and scenes.

<a name="building-phaser"></a>

## Building Phaser

Phaser is provided ready compiled in the `build` folder of the repository. There are both plain and minified versions. The plain version is for use during development, and the minified version for production. You can also create your own builds.

### Custom Builds

Phaser includes a grunt based build system, which allows you to strip out  features you may not require, saving hundreds of KB in the process. Don't use any Sound in your game? Then exclude the entire sound system. Don't need Keyboard support? That can be excluded too.

As a result of this work the minimum build size of Phaser is now just 80KB minified and gzipped.

1. Run `npm install`
2. Run `grunt custom` to see the module and argument lists (it will error; that's OK)
3. Run, e.g., `grunt custom --exclude=sound,keyboard` and then find the built script in [dist](dist/).

See the [Creating a Custom Phaser Build](http://phaser.io/tutorials/creating-custom-phaser-builds) tutorial for details.

### Building from source

Should you wish to build Phaser from source you can take advantage of the provided [Grunt](http://gruntjs.com/) scripts. Ensure you have the required packages by running `npm install` first.

Run `grunt` to perform a default build to the `dist` folder.

### Packaging a new release

Releases of new versions of Phaser CE are under the communities control. If you feel there are sufficient fixes, or important ones that warrant a new version release, then please do the following:

1. Make sure the version number is increased, in line with semver policies, in the following files: `package.json` and `src/Phaser.js`

2. Make sure that you have added details of the new version to the `README.md` and `CHANGELOG.md`. This should include a summary of changes made in the version. You can usually obtain this from the commit / PR history. It's nice to credit who made the changes by linking to their GitHub user ID, but isn't a requirement.

3. From the root repo folder, run `grunt jshint` and make sure there are no jshint errors. If there are, please fix them, or request that the original author of the code does so.

4. Once jshint passes run `grunt release`, sit back, and wait. It will build all of the versions of Phaser required, update the doc files, TypeScript defs and lots more. When finished, commit all of the new files and make sure to include a clear message in your commit saying you want this release pushed to npm. Be sure to tag me when doing this, i.e. 'Phaser CE Version 2.X.X. Please publish to npm @photonstorm' - I'll see it, and then publish as soon as I can (often the same day).

<a name="support"></a>

## Support Phaser

Developing Phaser takes a lot of time, effort, and money. There are monthly running costs; such as the forum and site, which we maintain 100% ad-free. As well as countless hours of development time, community support, and assistance resolving issues. We do this out of our love for Phaser of course, but at the end of the day there are real tangible costs involved.

If you have found Phaser useful in your development life. Or have made income as a result of using it, and are in a position to support us financially, without causing any detriment to yourself, then please do. There are a number of ways:

* A monthly contribution via [Patreon](https://www.patreon.com/photonstorm).
* A [one-off donation](http://phaser.io/community/donate) via PayPal.
* Purchase any of our [plugins or books](http://phaser.io/shop).
* Companies can sponsor a release of Phaser, or an issue of our newsletter.

It all helps cover our running costs, and genuinely contributes towards future development.

If you would like to sponsor Phaser then please [get in touch](mailto:support@phaser.io). We have sponsorship options available on our GitHub repo, web site, and newsletter. All of which receive tens of thousands of eyeballs per day.

<a name="newsletter"></a>

## Weekly Newsletter

Every Friday we publish the [Phaser World](http://phaser.io/community/newsletter) newsletter. It's packed full of the latest Phaser games, tutorials, videos, meet-ups, talks, and more. It also contains our weekly Development Progress updates. If you want to know what we're working on, this is the newsletter to read!

Previous editions can found on our [Back Issues](http://phaser.io/community/backissues) page.

<a name="contributing"></a>

# Contributing

The [Contributors Guide][contribute] contains full details on how to help with Phaser development. The main points are:

- Found a bug? Report it on [GitHub Issues][issues] and include a code sample.
- Before submitting a Pull Request run your code through [JSHint](http://www.jshint.com/) using our [config](https://github.com/photonstorm/phaser-ce/blob/master/.jshintrc).
- Before contributing read the [code of conduct](https://github.com/photonstorm/phaser-ce/blob/master/CODE_OF_CONDUCT.md).

Written something cool in Phaser? Please tell us about it in the [forum][forum], or email support@phaser.io

<a name="change-log"></a>

# Change Log

## Version 2.10.0 - 18 January 2018

### New Features

* New [game config](https://photonstorm.github.io/phaser-ce/global.html#GameConfig) arguments:
    - `alignH`, `alignV`
    - `crisp`
    - `disableStart`
    - `failIfMajorPerformanceCaveat`
    - `roundPixels`
    - `scaleH`, `scaleV`, `trimH`, `trimV`
* New game loop features:
    - Phaser.Game#dropFrames skips renders when the game loop delta time is spiraling upwards (#314).
    - Phaser.Game#forceSingleRender can be set to `false` to reduce the render rate to match Phaser.Time#desiredFps (#313).
    - Phaser.Time#ups tracks updates per second when [advanced timing](https://photonstorm.github.io/phaser-ce/Phaser.Time#advancedTiming) is enabled.
    - Phaser.Time#rps tracks renders per second when [advanced timing](https://photonstorm.github.io/phaser-ce/Phaser.Time#advancedTiming) is enabled.
* [Phaser.Color](https://photonstorm.github.io/phaser-ce/Phaser.Color.html) constants AQUA, BLACK, BLUE, GRAY, GREEN, ORANGE, RED, VIOLET, WHITE, and YELLOW. You can use these anywhere you use a numeric (hex) color value: [Graphics](https://photonstorm.github.io/phaser-ce/Phaser.Graphics.html), [Sprite#tint](https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#tint), [Stage#backgroundColor](https://photonstorm.github.io/phaser-ce/Phaser.Stage.html#backgroundColor).
* Phaser.Game#pendingDestroy marks the game for destruction at the next update. It can be used safely within an update callback.
* Phaser.Point#round rounds a point's coordinates.
* Phaser.SoundManager#onTouchUnlock signal (#434)
* Phaser.SoundManager#removeAll destroys all sounds and removes them from the Manager.
* [Phaser.Utils.Debug](https://photonstorm.github.io/phaser-ce/Phaser.Utils.Debug.html) methods:
    - Debug#loader displays [loader](https://photonstorm.github.io/phaser-ce/Phaser.Loader.html) progress.
    - Debug#scale displays game/canvas dimensions and [Scale Manager](https://photonstorm.github.io/phaser-ce/Phaser.ScaleManager.html) state.
    - Debug#sound displays [Sound Manager](https://photonstorm.github.io/phaser-ce/Phaser.SoundManager.html) state.
* Phaser.Video#playWhenUnlocked
* Phaser.Video#onTouchUnlock signal

### Updates

* Phaser now falls back to the Canvas renderer if AUTO is selected and WebGL context creation fails. [Phaser.Device#webGL](https://photonstorm.github.io/phaser-ce/Phaser.Device.html#webGL) is now a soft check and doesn't create a test WebGL context. This is slightly more accurate (#402) and slightly faster (#420). Phaser.Device#webGLError was removed.
* [Gamepad](https://photonstorm.github.io/phaser-ce/Phaser.Gamepad.html) input is now enabled while the game is paused (#423).
* Removed gain smoothing for WebAudio volume changes (#385).
* Updated ionic example project (#381).
* Removed these deprecated items (#403):
    - Phaser.ArrayUtils.rotate             → [Phaser.ArrayUtils.rotateLeft](https://photonstorm.github.io/phaser-ce/Phaser.ArrayUtils.html#_rotateLeft)
    - Phaser.Device.isConsoleOpen
    - Phaser.Loader#useXDomainRequest      → [xhrLoadWithXDR.js](resources/IE9/xhrLoadWithXDR.js)
    - Phaser.Loader#xhrLoadWithXDR         → [xhrLoadWithXDR.js](resources/IE9/xhrLoadWithXDR.js)
    - Phaser.Particles#update
    - Phaser.Polygon#points (as a setter)  → [Phaser.Polygon#setTo](https://photonstorm.github.io/phaser-ce/Phaser.Polygon.html#setTo)
    - Phaser.Touch#addTouchLockCallback    → [Phaser.Input#addTouchLockCallback](https://photonstorm.github.io/phaser-ce/Phaser.Input.html#addTouchLockCallback)
    - Phaser.Touch#removeTouchLockCallback → [Phaser.Input#removeTouchLockCallback](https://photonstorm.github.io/phaser-ce/Phaser.Input.html#removeTouchLockCallback)
    - PIXI.BaseTexture#updateSourceImage   → [Phaser.Component.LoadTexture#loadTexture](https://photonstorm.github.io/phaser-ce/Phaser.Component.LoadTexture.html#loadTexture)
    - RevoluteConstraint#motorIsEnabled    → RevoluteConstraint#motorEnabled
    - Shape.RECTANGLE                      → Shape.BOX

### Bug Fixes

* Fixed a false positive in [TweenManager#isTweening](https://photonstorm.github.io/phaser-ce/Phaser.TweenManager.html#isTweening) (#414).
* Changing a display object's [smoothed](https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#smoothed) property now marks the WebGL texture as dirty (#432, #433).
* Fixed Phaser.Sound temporarily having an incorrect gain setting at creation time.
* Fixed sprites not receiving [onInputOut](https://photonstorm.github.io/phaser-ce/Phaser.Events.html#onInputOver) when the pointer leaves the game canvas (#429).
* Fixed some TypeScript definitions.

### Thanks

@ankush-badyal, @Dreaded-Gnu, @Mertank, @pavle-goloskokovic, @photonstorm, @qdrj, @samme, @squaresun

For changes in previous releases please see the extensive [Change Log](https://github.com/photonstorm/phaser-ce/blob/master/CHANGELOG.md).

# License

Phaser is released under the [MIT License](http://opensource.org/licenses/MIT).

# Created by

Phaser is a [Photon Storm](http://www.photonstorm.com) production.

![storm](http://www.phaser.io/images/github/photonstorm-x2.png)

Created by [Richard Davey](mailto:rich@photonstorm.com). Powered by coffee, anime, pixels and love.

The Phaser logo and characters are © 2017 Photon Storm Limited.

All rights reserved.

"Above all, video games are meant to be just one thing: fun. Fun for everyone." - Satoru Iwata

[![Analytics](https://ga-beacon.appspot.com/UA-44006568-2/phaser/index)](https://github.com/igrigorik/ga-beacon)

[get-js]: https://github.com/photonstorm/phaser-ce/releases/download/v2.10.0/phaser.js
[get-minjs]: https://github.com/photonstorm/phaser-ce/releases/download/v2.10.0/phaser.min.js
[get-zip]: https://github.com/photonstorm/phaser-ce/archive/v2.10.0.zip
[get-tgz]: https://github.com/photonstorm/phaser-ce/archive/v2.10.0.tar.gz
[clone-http]: https://github.com/photonstorm/phaser.git
[clone-ssh]: ssh://git@github.com:photonstorm/phaser.git
[clone-svn]: https://github.com/photonstorm/phaser
[clone-ghwin]: github-windows://openRepo/https://github.com/photonstorm/phaser-ce
[clone-ghmac]: github-mac://openRepo/https://github.com/photonstorm/phaser-ce
[phaser]: https://github.com/photonstorm/phaser-ce
[issues]: https://github.com/photonstorm/phaser-ce/issues
[examples]: https://github.com/photonstorm/phaser-examples
[contribute]: https://github.com/photonstorm/phaser-ce/blob/master/.github/CONTRIBUTING.md
[forum]: http://www.html5gamedevs.com/forum/14-phaser/