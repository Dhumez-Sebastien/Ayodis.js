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
"use strict";var Ayodis=function(){function a(){}return a.exists=function(a){return this._key[a]?void 0:0},a.hdel=function(a,b,c){var d=0;return this._hash[a]&&this._hash[a][b]&&(d=1,delete this._hash[a][b]),c&&c(null,d),d},a.hexists=function(a,b,c){var d=this._hash[a]&&this._hash[a][b]?1:0;return c&&c(null,d),d},a.hget=function(a,b,c){var d=this._hash[a]&&this._hash[a][b]?this._hash[a][b]:null;return c&&c(null,d),d},a.hgetall=function(a,b){var c=[];for(var d in this._hash[a])c.push(d),c.push(this._hash[a][d]);return b&&b(null,c),c},a.hkeys=function(a,b){var c=[];for(var d in this._hash[a])c.push(d);return b&&b(null,c),c},a.hlen=function(a,b){var c=0;for(var d in this._hash[a])this._hash[a].hasOwnProperty(d)&&c++;return b&&b(null,c),c},a.hmget=function(a){var b,c=arguments,d=[],e=c.length;c[c.length-1]&&c[c.length-1]&&c[c.length-1].constructor&&c[c.length-1].call&&c[c.length-1].apply&&(b=c[c.length-1],e--);for(var f=1,g=e;g>f;f++)d.push(this._hash[a]&&this._hash[a][c[f]]?this._hash[a][c[f]]:null);return b&&b(null,d),d},a.hmset=function(a){var b,c=arguments,d="ERR wrong number of arguments for HMSET",e=c.length;c[c.length-1]&&c[c.length-1]&&c[c.length-1].constructor&&c[c.length-1].call&&c[c.length-1].apply&&(b=c[c.length-1],e--);for(var f=1,g=e,h=!0;g>f;f++)if(h&&"[object String]"==Object.prototype.toString.call(c[f]))h=!1;else{if(h&&"[object String]"!=Object.prototype.toString.call(c[f]))return b&&b(d,null),d;h||(h=!0)}if(!h)return b&&b(d,null),d;for(var i,f=1,g=e,h=!0;g>f;f++)h&&"[object String]"==Object.prototype.toString.call(c[f])?(i=c[f],h=!1):(this._hash[a]||(this._hash[a]={}),h||(this._hash[a][i]=c[f],h=!0));return b&&b(null,"OK"),"OK"},a.hset=function(a,b,c,d){var e=this._hash[a]&&this._hash[a][b]?0:1;return this._hash[a]||(this._hash[a]={}),this._hash[a][b]=c,d&&d(null,e),e},a.__msg={ERR_HMSET:"ERR wrong number of arguments for HMSET",OK:"OK"},a._hash={},a._key={},a}();