/**
 * @license
 * ayodis.js - v0.0.1
 * Copyright (c) 2014-2015, Dhumez Sébastien
 * 
 *
 * Compiled: 2014-05-25
 *
 * ayodis.js is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license.php
 */
"use strict";var Ayodis=function(){function a(){}return a.exists=function(a){return this._key[a]?void 0:0},a.hdel=function(a,b){var c=0;return this._hash[a]&&this._hash[a][b]&&(c=1,delete this._hash[a][b]),c},a.hexists=function(a,b){return this._hash[a]&&this._hash[a][b]?1:0},a.hget=function(a,b,c){c(0,this._hash[a]&&this._hash[a][b]?this._hash[a][b]:null)},a.hgetall=function(a){var b=[];for(var c in this._hash[a])b.push(c),b.push(this._hash[a][c]);return b},a.hkeys=function(a){var b=[];for(var c in this._hash[a])b.push(c);return b},a.hlen=function(a){var b=0;for(var c in this._hash[a])this._hash[a].hasOwnProperty(c)&&b++;return b},a.hmget=function(a){for(var b=arguments,c=[],d=1,e=b.length;e>d;d++)c.push(this._hash[a]&&this._hash[a][b[d]]?this._hash[a][b[d]]:null);return c},a.hset=function(a,b,c){var d=this._hash[a]&&this._hash[a][b]?0:1;return this._hash[a]||(this._hash[a]={}),this._hash[a][b]=c,d},a._hash={},a._key={},a}();