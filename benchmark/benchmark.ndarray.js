/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

/* eslint-disable array-element-newline */

'use strict';

// MODULES //

var bench = require( '@stdlib/bench-harness' );
var uniform = require( '@stdlib/random-base-discrete-uniform' ).factory;
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var pow = require( '@stdlib/math-base-special-pow' );
var resolveStr = require( '@stdlib/strided-base-dtype-resolve-str' );
var pkg = require( './../package.json' ).name;
var strided = require( './../lib/ndarray.js' );
var filledBy = require( './fixtures/filled_by.js' );
var filled = require( './fixtures/filled.js' );


// VARIABLES //

var types = [
	'float64', 'float64', 'float64',
	'float32', 'float32', 'float32',
	'int32', 'int32', 'int32',
	'uint8', 'uint8', 'uint8',
	'complex64', 'complex64', 'complex64',
	'complex128', 'complex128', 'complex128'
];
var rand = uniform( 0.0, 10.0 );


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} len - array length
* @param {string} xtype - input array data type
* @param {string} ytype - input array data type
* @param {string} ztype - output array data type
* @returns {Function} benchmark function
*/
function createBenchmark( len, xtype, ytype, ztype ) {
	var x;
	var y;
	var z;

	x = filledBy( len, xtype, rand );
	y = filledBy( len, ytype, rand );
	z = filled( len, ztype, 0.0 );

	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var out;
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			out = strided( len, xtype, x, 1, 0, ytype, y, 1, 0, ztype, z, 1, 0 ); // eslint-disable-line max-len
			if ( typeof out !== 'object' ) {
				b.fail( 'should return an array' );
			}
		}
		b.toc();
		if ( typeof out.get === 'function' ) {
			if ( isnan( out.get( i%len ) ) ) {
				b.fail( 'should not return NaN' );
			}
		} else if ( isnan( out[ i%len ] ) ) {
			b.fail( 'should not return NaN' );
		}
		b.pass( 'benchmark finished' );
		b.end();
	}
}


// MAIN //

/**
* Main execution sequence.
*
* @private
*/
function main() {
	var len;
	var min;
	var max;
	var t1;
	var t2;
	var t3;
	var re;
	var N;
	var f;
	var i;
	var j;

	min = 1; // 10^min
	max = 6; // 10^max

	re = /^complex/;

	for ( j = 0; j < types.length; j += 3 ) {
		t1 = resolveStr( types[ j ] );
		t2 = resolveStr( types[ j+1 ] );
		t3 = resolveStr( types[ j+2 ] );

		if ( re.test( t1 ) || re.test( t2 ) || re.test( t3 ) ) {
			N = 4;
		} else {
			N = max;
		}
		for ( i = min; i <= N; i++ ) {
			len = pow( 10, i );
			f = createBenchmark( len, t1, t2, t3 );
			bench( pkg+':ndarray:len='+len+',xtype='+t1+',ytype='+t2+',ztype='+t3, f );
		}
	}
}

main();
