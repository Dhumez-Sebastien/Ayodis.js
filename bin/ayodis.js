/**
 * @license
 * ayodis.js - v0.0.1
 * Copyright (c) 2014-2015, Dhumez Sébastien
 * 
 *
 * Compiled: 2014-05-26
 *
 * ayodis.js is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license.php
 */
"use strict";var Ayodis=function(){function a(){}return a.exists=function(a){return this._key[a]?void 0:0},a.hdel=function(a,b,c){var d=0;return this._hash[a]&&this._hash[a][b]&&(d=1,delete this._hash[a][b]),c&&c(null,d),d},a.hexists=function(a,b,c){var d=this._hash[a]&&this._hash[a][b]?1:0;return c&&c(null,d),d},a.hget=function(a,b,c){var d=this._hash[a]&&this._hash[a][b]?this._hash[a][b]:null;return c&&c(null,d),d},a.hgetall=function(a,b){var c=[];for(var d in this._hash[a])c.push(d),c.push(this._hash[a][d]);return b&&b(null,c),c},a.hkeys=function(a,b){var c=[];for(var d in this._hash[a])c.push(d);return b&&b(null,c),c},a.hlen=function(a,b){var c=0;for(var d in this._hash[a])this._hash[a].hasOwnProperty(d)&&c++;return b&&b(null,c),c},a.hmget=function(a){var b,c=arguments,d=[],e=c.length;c[c.length-1]&&c[c.length-1]&&c[c.length-1].constructor&&c[c.length-1].call&&c[c.length-1].apply&&(b=c[c.length-1],e--);for(var f=1,g=e;g>f;f++)d.push(this._hash[a]&&this._hash[a][c[f]]?this._hash[a][c[f]]:null);return b&&b(null,d),d},a.hset=function(a,b,c){var d=this._hash[a]&&this._hash[a][b]?0:1;return this._hash[a]||(this._hash[a]={}),this._hash[a][b]=c,d},a._hash={},a._key={},a}();