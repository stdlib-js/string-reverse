<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# reverseString

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Reverse a string.

<section class="installation">

## Installation

```bash
npm install @stdlib/string-reverse
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

</section>

<section class="usage">

## Usage

```javascript
var reverseString = require( '@stdlib/string-reverse' );
```

#### reverseString( str )

Reverses a `string`.

```javascript
var out = reverseString( 'last man standing' );
// returns 'gnidnats nam tsal'

out = reverseString( 'Hidden Treasures' );
// returns 'serusaerT neddiH'

out = reverseString( 'Lorem ipsum 𝌆 dolor sit ameͨ͆t.' );
// returns '.teͨ͆ma tis rolod 𝌆 muspi meroL'
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var reverseString = require( '@stdlib/string-reverse' );

var str = reverseString( 'last man standing' );
// returns 'gnidnats nam tsal'

str = reverseString( 'presidential election' );
// returns 'noitcele laitnediserp'

str = reverseString( 'javaScript' );
// returns 'tpircSavaj'

str = reverseString( 'Hidden Treasures' );
// returns 'serusaerT neddiH'
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="installation">

## Installation

To use the module as a general utility, install the module globally

```bash
npm install -g @stdlib/string-reverse
```

</section>

<!-- CLI usage documentation. -->

<section class="usage">

### Usage

```text
Usage: reverse [options] [<string>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --split sep           Delimiter for stdin data. Default: '/\\r?\\n/'.
```

</section>

<!-- /.usage -->

<!-- CLI usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

### Notes

-   If the split separator is a [regular expression][mdn-regexp], ensure that the `split` option is either properly escaped or enclosed in quotes.

    ```bash
    # Not escaped...
    $ echo -n $'beep\nboop' | reverse --split /\r?\n/

    # Escaped...
    $ echo -n $'beep\nboop' | reverse --split /\\r?\\n/
    ```

-   The implementation ignores trailing delimiters.

</section>

<!-- /.notes -->

<section class="examples">

### Examples

```bash
$ reverse foobar
raboof
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 'foobar' | reverse
raboof
```

By default, when used as a [standard stream][standard-streams], the implementation assumes newline-delimited data. To specify an alternative delimiter, set the `split` option.

```bash
$ echo -n 'foobar\tbaz' | reverse --split '\t'
raboof
zab
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/string-reverse.svg
[npm-url]: https://npmjs.org/package/@stdlib/string-reverse

[test-image]: https://github.com/stdlib-js/string-reverse/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/string-reverse/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/string-reverse/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/string-reverse?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/string-reverse.svg
[dependencies-url]: https://david-dm.org/stdlib-js/string-reverse/main

-->

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/string-reverse/tree/deno
[umd-url]: https://github.com/stdlib-js/string-reverse/tree/umd
[esm-url]: https://github.com/stdlib-js/string-reverse/tree/esm

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/string-reverse/main/LICENSE

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

</section>

<!-- /.links -->
