/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var prevGraphemeClusterBreak = require( '@stdlib/string-prev-grapheme-cluster-break' );
var isString = require( '@stdlib/assert-is-string' ).isPrimitive;
var format = require( '@stdlib/string-format' );


// MAIN //

/**
* Reverses a string.
*
* @param {string} str - input string
* @throws {TypeError} must provide a string primitive
* @returns {string} reversed string
*
* @example
* var out = reverse( 'last man standing' );
* // returns 'gnidnats nam tsal'
*
* @example
* var out = reverse( 'presidential election' );
* // returns 'noitcele laitnediserp'
*
* @example
* var out = reverse( 'javaScript' );
* // returns 'tpircSavaj'
*
* @example
* var out = reverse( 'Hidden Treasures' );
* // returns 'serusaerT neddiH'
*/
function reverse( str ) {
	var out;
	var brk;
	var idx;
	var i;
	if ( !isString( str ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a string. Value: `%s`.', str ) );
	}
	if ( str === '' ) {
		return '';
	}

	out = [];
	idx = str.length - 1;
	while ( idx >= 0 ) {
		brk = prevGraphemeClusterBreak( str, idx );
		for ( i = brk + 1; i <= idx; i++ ) {
			out.push( str.charAt( i ) );
		}
		idx = brk;
	}
	return out.join( '' );
}


// EXPORTS //

module.exports = reverse;
