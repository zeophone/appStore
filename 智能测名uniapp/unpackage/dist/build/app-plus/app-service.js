var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190312_syb_scopedata*/global.__wcc_version__='v0.5vv_20190312_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[4],[[5],[[5],[1,'w-picker-cnt']],[[2,'?:'],[[7],[3,'showPicker']],[1,'show'],[1,'']]]])
Z([3,'__e'])
Z([3,'w-picker-hd'])
Z([[4],[[5],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'=='],[[7],[3,'mode']],[1,'region']])
Z([[2,'||'],[[2,'||'],[[2,'=='],[[7],[3,'mode']],[1,'date']],[[2,'=='],[[7],[3,'mode']],[1,'dateTime']]],[[2,'=='],[[7],[3,'mode']],[1,'yearMonth']]])
Z([[2,'=='],[[7],[3,'date_type']],[1,2]])
Z(z[5])
Z(z[1])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'bindChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'height: 40px;'])
Z([[7],[3,'pickVal']])
Z([[2,'!='],[[7],[3,'mode']],[1,'yearMonth']])
Z([[2,'=='],[[7],[3,'mode']],[1,'dateTime']])
Z(z[13])
Z([[2,'=='],[[7],[3,'mode']],[1,'time']])
Z(z[4])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content data-v-c87dadbc'])
Z([3,'__l'])
Z([3,'__e'])
Z([3,'data-v-c87dadbc vue-ref'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^confirm']],[[4],[[5],[[4],[[5],[1,'onConfirm']]]]]]]]])
Z([3,'picker'])
Z([[7],[3,'defaultVal']])
Z([3,'2019'])
Z([[7],[3,'mode']])
Z([3,'1940'])
Z([3,'#f00'])
Z([3,'1'])
Z(z[1])
Z([3,'data-v-c87dadbc'])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'middle data-v-20f3d2f9'])
Z([1,false])
Z([3,'__l'])
Z([3,'data-v-20f3d2f9'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'data']])
Z([3,'info data-v-58a58d1e'])
Z([3,'box_m data-v-58a58d1e'])
Z([[2,'!'],[[6],[[6],[[7],[3,'$store']],[3,'state']],[3,'isFree']]])
Z([3,'__l'])
Z([3,'data-v-58a58d1e'])
Z([[6],[[6],[[7],[3,'data']],[3,'charts']],[3,'female_nums_list']])
Z([3,'listA'])
Z([[6],[[6],[[7],[3,'data']],[3,'charts']],[3,'male_nums_list']])
Z([3,'1'])
Z([[4],[[5],[1,'default']]])
Z([[6],[[6],[[7],[3,'data']],[3,'charts']],[3,'year_list']])
Z(z[4])
Z(z[5])
Z([[6],[[6],[[7],[3,'data']],[3,'charts']],[3,'first_female_nums']])
Z([3,'listB'])
Z([[6],[[6],[[7],[3,'data']],[3,'charts']],[3,'first_male_nums']])
Z([3,'2'])
Z(z[10])
Z(z[11])
Z([[2,'=='],[[6],[[6],[[6],[[7],[3,'data']],[3,'name']],[3,'word']],[3,'length']],[1,2]])
Z(z[4])
Z(z[5])
Z([[6],[[6],[[7],[3,'data']],[3,'charts']],[3,'second_male_nums']])
Z([3,'listC'])
Z([[6],[[6],[[7],[3,'data']],[3,'charts']],[3,'second_female_nums']])
Z([3,'3'])
Z(z[10])
Z(z[11])
Z(z[20])
Z(z[4])
Z(z[5])
Z([3,'4'])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'info2 data-v-5c551258'])
Z([[6],[[6],[[7],[3,'$store']],[3,'state']],[3,'isFree']])
Z([3,'p_l20 p_r20 data-v-5c551258'])
Z(z[1])
Z([3,'__i0__'])
Z([3,'item'])
Z([[7],[3,'fiveLine']])
Z([3,'name'])
Z([[2,'!'],[[6],[[6],[[7],[3,'$store']],[3,'state']],[3,'isFree']]])
Z([3,'i'])
Z(z[5])
Z([[6],[[6],[[7],[3,'data']],[3,'luck_god']],[3,'five_line_explain']])
Z(z[9])
Z(z[8])
Z([3,'__i5__'])
Z(z[5])
Z([[7],[3,'fiveGe']])
Z(z[7])
Z([3,'five_ge data-v-5c551258'])
Z([[6],[[7],[3,'item']],[3,'score']])
Z([[6],[[7],[3,'item']],[3,'jixiong']])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'data-v-250b2c30 vue-ref'])
Z([3,'popups'])
Z([3,'联系客服'])
Z([3,'1'])
Z([[4],[[5],[1,'default']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/Popups.wxml','./components/Youshi.wxml','./components/w-picker/w-picker.wxml','./pages/index/index.wxml','./pages/middle/CanvasLine.wxml','./pages/middle/index.wxml','./pages/middle/info.wxml','./pages/middle/info2.wxml','./pages/query/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_n('slot')
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var fE=_n('view')
_rz(z,fE,'class',0,e,s,gg)
var cI=_mz(z,'view',['catchtouchmove',1,'class',1,'data-event-opts',2],[],e,s,gg)
var oJ=_v()
_(cI,oJ)
if(_oz(z,4,e,s,gg)){oJ.wxVkey=1
}
var lK=_v()
_(cI,lK)
if(_oz(z,5,e,s,gg)){lK.wxVkey=1
var aL=_v()
_(lK,aL)
if(_oz(z,6,e,s,gg)){aL.wxVkey=1
}
aL.wxXCkey=1
}
oJ.wxXCkey=1
lK.wxXCkey=1
_(fE,cI)
var cF=_v()
_(fE,cF)
if(_oz(z,7,e,s,gg)){cF.wxVkey=1
var tM=_mz(z,'picker-view',['bindchange',8,'data-event-opts',1,'indicatorStyle',2,'value',3],[],e,s,gg)
var eN=_v()
_(tM,eN)
if(_oz(z,12,e,s,gg)){eN.wxVkey=1
}
var bO=_v()
_(tM,bO)
if(_oz(z,13,e,s,gg)){bO.wxVkey=1
}
var oP=_v()
_(tM,oP)
if(_oz(z,14,e,s,gg)){oP.wxVkey=1
}
eN.wxXCkey=1
bO.wxXCkey=1
oP.wxXCkey=1
_(cF,tM)
}
var hG=_v()
_(fE,hG)
if(_oz(z,15,e,s,gg)){hG.wxVkey=1
}
var oH=_v()
_(fE,oH)
if(_oz(z,16,e,s,gg)){oH.wxVkey=1
}
cF.wxXCkey=1
hG.wxXCkey=1
oH.wxXCkey=1
_(r,fE)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var oR=_n('view')
_rz(z,oR,'class',0,e,s,gg)
var fS=_mz(z,'w-picker',['bind:__l',1,'bind:confirm',1,'class',2,'data-event-opts',3,'data-ref',4,'defaultVal',5,'endYear',6,'mode',7,'startYear',8,'themeColor',9,'vueId',10],[],e,s,gg)
_(oR,fS)
var cT=_mz(z,'youshi',['bind:__l',12,'class',1,'vueId',2],[],e,s,gg)
_(oR,cT)
_(r,oR)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var oV=_n('slot')
_(r,oV)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var oX=_n('view')
_rz(z,oX,'class',0,e,s,gg)
var lY=_v()
_(oX,lY)
if(_oz(z,1,e,s,gg)){lY.wxVkey=1
}
var aZ=_mz(z,'info',['bind:__l',2,'class',1,'vueId',2],[],e,s,gg)
_(oX,aZ)
lY.wxXCkey=1
_(r,oX)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var e2=_v()
_(r,e2)
if(_oz(z,0,e,s,gg)){e2.wxVkey=1
var b3=_n('view')
_rz(z,b3,'class',1,e,s,gg)
var o4=_n('view')
_rz(z,o4,'class',2,e,s,gg)
var x5=_v()
_(o4,x5)
if(_oz(z,3,e,s,gg)){x5.wxVkey=1
}
var c8=_mz(z,'canvas-line',['bind:__l',4,'class',1,'female',2,'id',3,'male',4,'vueId',5,'vueSlots',6,'year',7],[],e,s,gg)
_(o4,c8)
var h9=_mz(z,'canvas-line',['bind:__l',12,'class',1,'female',2,'id',3,'male',4,'vueId',5,'vueSlots',6,'year',7],[],e,s,gg)
_(o4,h9)
var o6=_v()
_(o4,o6)
if(_oz(z,20,e,s,gg)){o6.wxVkey=1
var o0=_mz(z,'canvas-line',['bind:__l',21,'class',1,'female',2,'id',3,'male',4,'vueId',5,'vueSlots',6,'year',7],[],e,s,gg)
_(o6,o0)
}
var f7=_v()
_(o4,f7)
if(_oz(z,29,e,s,gg)){f7.wxVkey=1
}
x5.wxXCkey=1
o6.wxXCkey=1
o6.wxXCkey=3
f7.wxXCkey=1
_(b3,o4)
var cAB=_mz(z,'info2',['bind:__l',30,'class',1,'vueId',2],[],e,s,gg)
_(b3,cAB)
_(e2,b3)
}
e2.wxXCkey=1
e2.wxXCkey=3
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var lCB=_n('view')
_rz(z,lCB,'class',0,e,s,gg)
var aDB=_v()
_(lCB,aDB)
if(_oz(z,1,e,s,gg)){aDB.wxVkey=1
}
var tEB=_n('view')
_rz(z,tEB,'class',2,e,s,gg)
var eFB=_v()
_(tEB,eFB)
if(_oz(z,3,e,s,gg)){eFB.wxVkey=1
}
var bGB=_v()
_(tEB,bGB)
var oHB=function(oJB,xIB,fKB,gg){
var hMB=_v()
_(fKB,hMB)
if(_oz(z,8,oJB,xIB,gg)){hMB.wxVkey=1
}
hMB.wxXCkey=1
return fKB
}
bGB.wxXCkey=2
_2z(z,6,oHB,e,s,gg,bGB,'item','__i0__','name')
var oNB=_v()
_(tEB,oNB)
var cOB=function(lQB,oPB,aRB,gg){
var eTB=_v()
_(aRB,eTB)
if(_oz(z,13,lQB,oPB,gg)){eTB.wxVkey=1
}
eTB.wxXCkey=1
return aRB
}
oNB.wxXCkey=2
_2z(z,11,cOB,e,s,gg,oNB,'item','i','i')
eFB.wxXCkey=1
_(lCB,tEB)
var bUB=_v()
_(lCB,bUB)
var oVB=function(oXB,xWB,fYB,gg){
var h1B=_n('view')
_rz(z,h1B,'class',18,oXB,xWB,gg)
var o2B=_v()
_(h1B,o2B)
if(_oz(z,19,oXB,xWB,gg)){o2B.wxVkey=1
}
var c3B=_v()
_(h1B,c3B)
if(_oz(z,20,oXB,xWB,gg)){c3B.wxVkey=1
}
o2B.wxXCkey=1
c3B.wxXCkey=1
_(fYB,h1B)
return fYB
}
bUB.wxXCkey=2
_2z(z,16,oVB,e,s,gg,bUB,'item','__i5__','name')
aDB.wxXCkey=1
_(r,lCB)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var l5B=_mz(z,'popups',['bind:__l',0,'class',1,'data-ref',1,'title',2,'vueId',3,'vueSlots',4],[],e,s,gg)
_(r,l5B)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/index/index","pages/middle/index","pages/query/index"],"subPackages":[],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"智能测名","navigationBarBackgroundColor":"#333945","backgroundColor":"#F8F8F8"},"nvueCompiler":"weex","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"智能测名uniapp","compilerVersion":"2.0.1","usingComponents":{}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/Popups.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/Popups.wxml']=$gwx('./components/Popups.wxml');

__wxAppCode__['components/w-picker/w-picker.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/w-picker/w-picker.wxml']=$gwx('./components/w-picker/w-picker.wxml');

__wxAppCode__['components/Youshi.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/Youshi.wxml']=$gwx('./components/Youshi.wxml');

__wxAppCode__['pages/index/index.json']={"navigationBarTitleText":"智能测名","usingComponents":{"w-picker":"/components/w-picker/w-picker","youshi":"/components/Youshi"}};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/middle/CanvasLine.json']={"usingComponents":{},"component":true};
__wxAppCode__['pages/middle/CanvasLine.wxml']=$gwx('./pages/middle/CanvasLine.wxml');

__wxAppCode__['pages/middle/index.json']={"navigationBarTitleText":"测名详情","usingComponents":{"info":"/pages/middle/info"}};
__wxAppCode__['pages/middle/index.wxml']=$gwx('./pages/middle/index.wxml');

__wxAppCode__['pages/middle/info.json']={"usingComponents":{"canvas-line":"/pages/middle/CanvasLine","info2":"/pages/middle/info2"},"component":true};
__wxAppCode__['pages/middle/info.wxml']=$gwx('./pages/middle/info.wxml');

__wxAppCode__['pages/middle/info2.json']={"usingComponents":{},"component":true};
__wxAppCode__['pages/middle/info2.wxml']=$gwx('./pages/middle/info2.wxml');

__wxAppCode__['pages/query/index.json']={"navigationBarTitleText":"订单查询","usingComponents":{"popups":"/components/Popups"}};
__wxAppCode__['pages/query/index.wxml']=$gwx('./pages/query/index.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"5a4c":function(n,t,o){},8959:function(n,t,o){"use strict";o.r(t);var u=o("bbc7");for(var a in u)"default"!==a&&function(n){o.d(t,n,function(){return u[n]})}(a);o("926c");var c,e,r=o("2877"),i=Object(r["a"])(u["default"],c,e,!1,null,null,null);t["default"]=i.exports},"926c":function(n,t,o){"use strict";var u=o("5a4c"),a=o.n(u);a.a},bbc7:function(n,t,o){"use strict";o.r(t);var u=o("d264"),a=o.n(u);for(var c in u)"default"!==c&&function(n){o.d(t,n,function(){return u[n]})}(c);t["default"]=a.a},d264:function(n,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={onLaunch:function(){alert(navigator.appVersion)},onShow:function(){},onHide:function(){}};t.default=u}},[["5e65","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function t(t) {
    for (var r, o, u = t[0], s = t[1], l = t[2], p = 0, c = []; p < u.length; p++) {
      o = u[p], i[o] && c.push(i[o][0]), i[o] = 0;
    }

    for (r in s) {
      Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r]);
    }

    f && f(t);

    while (c.length) {
      c.shift()();
    }

    return a.push.apply(a, l || []), n();
  }

  function n() {
    for (var e, t = 0; t < a.length; t++) {
      for (var n = a[t], r = !0, o = 1; o < n.length; o++) {
        var u = n[o];
        0 !== i[u] && (r = !1);
      }

      r && (a.splice(t--, 1), e = s(s.s = n[0]));
    }

    return e;
  }

  var r = {},
      o = {
    "common/runtime": 0
  },
      i = {
    "common/runtime": 0
  },
      a = [];

  function u(e) {
    return s.p + "" + e + ".js";
  }

  function s(t) {
    if (r[t]) return r[t].exports;
    var n = r[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(n.exports, n, n.exports, s), n.l = !0, n.exports;
  }

  s.e = function (e) {
    var t = [],
        n = {
      "components/w-picker/w-picker": 1,
      "components/Youshi": 1,
      "pages/middle/info": 1,
      "components/Popups": 1,
      "pages/middle/CanvasLine": 1,
      "pages/middle/info2": 1
    };
    o[e] ? t.push(o[e]) : 0 !== o[e] && n[e] && t.push(o[e] = new Promise(function (t, n) {
      for (var r = ({
        "components/w-picker/w-picker": "components/w-picker/w-picker",
        "components/Youshi": "components/Youshi",
        "pages/middle/info": "pages/middle/info",
        "components/Popups": "components/Popups",
        "pages/middle/CanvasLine": "pages/middle/CanvasLine",
        "pages/middle/info2": "pages/middle/info2"
      }[e] || e) + ".wxss", i = s.p + r, a = document.getElementsByTagName("link"), u = 0; u < a.length; u++) {
        var l = a[u],
            p = l.getAttribute("data-href") || l.getAttribute("href");
        if ("stylesheet" === l.rel && (p === r || p === i)) return t();
      }

      var c = document.getElementsByTagName("style");

      for (u = 0; u < c.length; u++) {
        l = c[u], p = l.getAttribute("data-href");
        if (p === r || p === i) return t();
      }

      var f = document.createElement("link");
      f.rel = "stylesheet", f.type = "text/css", f.onload = t, f.onerror = function (t) {
        var r = t && t.target && t.target.src || i,
            a = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ")");
        a.request = r, delete o[e], f.parentNode.removeChild(f), n(a);
      }, f.href = i;
      var d = document.getElementsByTagName("head")[0];
      d.appendChild(f);
    }).then(function () {
      o[e] = 0;
    }));
    var r = i[e];
    if (0 !== r) if (r) t.push(r[2]);else {
      var a = new Promise(function (t, n) {
        r = i[e] = [t, n];
      });
      t.push(r[2] = a);
      var l,
          p = document.createElement("script");
      p.charset = "utf-8", p.timeout = 120, s.nc && p.setAttribute("nonce", s.nc), p.src = u(e), l = function l(t) {
        p.onerror = p.onload = null, clearTimeout(c);
        var n = i[e];

        if (0 !== n) {
          if (n) {
            var r = t && ("load" === t.type ? "missing" : t.type),
                o = t && t.target && t.target.src,
                a = new Error("Loading chunk " + e + " failed.\n(" + r + ": " + o + ")");
            a.type = r, a.request = o, n[1](a);
          }

          i[e] = void 0;
        }
      };
      var c = setTimeout(function () {
        l({
          type: "timeout",
          target: p
        });
      }, 12e4);
      p.onerror = p.onload = l, document.head.appendChild(p);
    }
    return Promise.all(t);
  }, s.m = e, s.c = r, s.d = function (e, t, n) {
    s.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    });
  }, s.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, s.t = function (e, t) {
    if (1 & t && (e = s(e)), 8 & t) return e;
    if (4 & t && "object" === typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (s.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var r in e) {
      s.d(n, r, function (t) {
        return e[t];
      }.bind(null, r));
    }
    return n;
  }, s.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return s.d(t, "a", t), t;
  }, s.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, s.p = "/", s.oe = function (e) {
    throw console.error(e), e;
  };
  var l = global["webpackJsonp"] = global["webpackJsonp"] || [],
      p = l.push.bind(l);
  l.push = t, l = l.slice();

  for (var c = 0; c < l.length; c++) {
    t(l[c]);
  }

  var f = p;
  n();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"1b34":function(e,l,a){"use strict";(function(e){a("b52b");t(a("66fd"));var l=t(a("3612"));function t(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},"22a1":function(e,l,a){"use strict";(function(e){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var a={data:function(){return{data:null}},created:function(){var l=this;e.getStorage({key:"ceming_res",success:function(e){l.data=e.data}})},computed:{nameInfo:function(){var e=[],l={word:this.data.surname.first.word,five:this.fiveToText(this.data.surname.first.info.five_line),pinyin:this.data.surname.first.info.phonetic_spell};if(e.push(l),this.data.surname.word.length>1){var a={word:this.data.surname.second.word,five:this.fiveToText(this.data.surname.second.info.five_line),pinyin:this.data.surname.second.info.phonetic_spell};e.push(a)}var t={word:this.data.name.first.word,five:this.fiveToText(this.data.name.first.info.five_line),pinyin:this.data.name.first.info.phonetic_spell};if(e.push(t),this.data.name.word.length>1){var u={word:this.data.name.second.word,five:this.fiveToText(this.data.name.second.info.five_line),pinyin:this.data.name.second.info.phonetic_spell};e.push(u)}return e},nameArr:function(){var e=[],l={word:this.data.name.first.word,name_mean:this.data.name.first.info.name_mean,phonetic_spell:this.data.name.first.info.phonetic_spell};if(e.push(l),this.data.name.word.length>1){var a={word:this.data.name.second.word,name_mean:this.data.name.second.info.name_mean,phonetic_spell:this.data.name.second.info.phonetic_spell};e.push(a)}return e},characterToText:function(e){return function(e){for(var l in this.data.name_character)if(e==l)return this.data.name_character[l]}},objLength:function(e){return function(e){var l=0;for(var a in e)l++;return l}},sounds:function(){var e=[{title:"字义解释",desc:this.data.sounds.ziyijiesi_desc,level:this.data.sounds.ziyijiesi_level,star:this.starToNum(this.data.sounds.ziyijiesi_level)},{title:"寓意得分",desc:this.data.sounds.yuyi_desc,level:this.data.sounds.yuyi_level,star:this.starToNum(this.data.sounds.yuyi_level)},{title:"文化印象",desc:this.data.sounds.wenhuayinxiang_desc,level:this.data.sounds.wenhuayinxiang_level,star:this.starToNum(this.data.sounds.mingziyinlv_level)},{title:"名字年代",desc:this.data.sounds.mingziniandai_desc,level:this.data.sounds.mingziniandai_level,star:this.starToNum(this.data.sounds.mingziniandai_level)},{title:"敏感词汇",desc:this.data.sounds.mingancihui_desc,level:this.data.sounds.mingancihui_level,star:this.starToNum(this.data.sounds.mingancihui_level)},{title:"性别符合",desc:this.data.sounds.xiebiefuhe_desc,level:this.data.sounds.xiebiefuhe_level,star:this.starToNum(this.data.sounds.xiebiefuhe_level)},{title:"名字谐音",desc:this.data.sounds.mingzixieyin_desc,level:this.data.sounds.mingzixieyin_level,star:this.starToNum(this.data.sounds.mingzixieyin_level)}];return e},fiveLine:function(){var e=[{name:"金",score:this.data.luck_god.percent_jin,color:"#b8860b"},{name:"木",score:this.data.luck_god.percent_mu,color:"#008000"},{name:"水",score:this.data.luck_god.percent_shui,color:"#0073cf"},{name:"火",score:this.data.luck_god.percent_huo,color:"#e25822"},{name:"土",score:this.data.luck_god.percent_tu,color:"#a67b5b"}];if(!this.$store.state.isFree){var l=[{title:"名字音律",desc:this.data.sounds.mingziyinlv_desc,level:this.data.sounds.mingziyinlv_level,star:this.starToNum(this.data.sounds.mingziyinlv_level)},{title:"好写好记",desc:this.data.sounds.haoxiehaoji_desc,level:this.data.sounds.haoxiehaoji_level,star:this.starToNum(this.data.sounds.haoxiehaoji_level)}];e=l.concat(e)}return e},fiveGe:function(){var e=[{name:"天格\n解析",score:this.data.three_five.info.sky,jixiong:this.data.three_five.analysis_tian,color:this.jixiongColor(this.data.three_five.analysis_tian),lang:this.data.three_five.tian,tig:"天格数是先祖留传下来的，其数理对人影响不大。"},{name:"地格\n解析",score:this.data.three_five.info.earth,jixiong:this.data.three_five.analysis_di,color:this.jixiongColor(this.data.three_five.analysis_di),lang:this.data.three_five.di,tig:"地格数又称前运，影响人中年（36岁）以前的活动力。"},{name:"人格\n解析",score:this.data.three_five.info.human,jixiong:this.data.three_five.analysis_ren,color:this.jixiongColor(this.data.three_five.analysis_ren),lang:this.data.three_five.ren,tig:"人格数又称主运，是整个姓名的中心点，影响人的一生命运。"},{name:"外格\n解析",score:this.data.three_five.info.out,jixiong:this.data.three_five.analysis_wai,color:this.jixiongColor(this.data.three_five.analysis_wai),lang:this.data.three_five.wai,tig:"外格又称变格，影响人的社交、智慧等，其数理不用重点去看。"},{name:"总格\n解析",score:this.data.three_five.info.total,jixiong:this.data.three_five.analysis_zong,color:this.jixiongColor(this.data.three_five.analysis_zong),lang:this.data.three_five.zong,tig:"总格又称后运，影响人中年（36岁）以后的命运。"},{name:"三才\n解析",lang:this.data.three_five.three_powers.meaning},{name:"基础运\n解析",lang:this.data.three_five.three_powers.lucky_base},{name:"成功运\n解析",lang:this.data.three_five.three_powers.success_lucky},{name:"人际\n关系\n解析",lang:this.data.three_five.three_powers.communication_lucky},{name:"性格\n影响\n解析",lang:this.data.three_five.three_powers.character_feature}];return e},baguaJiexi:function(){var e=[{name:"大象",lang:this.data.gossip.big_el},{name:"总论",lang:this.data.gossip.total_explain},{name:"建议",lang:this.data.gossip.suggest},{name:"事业",lang:this.data.gossip.success_mean},{name:"经商",lang:this.data.gossip.business_mean},{name:"求名",lang:this.data.gossip.for_name},{name:"婚恋",lang:this.data.gossip.marry_mean}];return e}},methods:{payView:function(){this.$store.commit("SET_PAYPOP",!0)},jixiongColor:function(e){switch(e){case"大吉":return"#2da9df";case"半吉":return"#e67829";case"吉":return"#6fc898";case"凶":return"#c9aa8d";case"半凶":return"#fbc30b";case"大凶":return"#db3b3e"}},starToNum:function(e){switch(e){case"高":return 0;case"中":return 1;case"低":return 2;case"差":return 3}},fiveToText:function(e){switch(e){case"1":return"金";case"2":return"木";case"3":return"水";case"4":return"火";case"5":return"土"}}}};l.default=a}).call(this,a("6e42")["default"])},2863:function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=[[[{label:"东城区",value:"110101"},{label:"西城区",value:"110102"},{label:"朝阳区",value:"110105"},{label:"丰台区",value:"110106"},{label:"石景山区",value:"110107"},{label:"海淀区",value:"110108"},{label:"门头沟区",value:"110109"},{label:"房山区",value:"110111"},{label:"通州区",value:"110112"},{label:"顺义区",value:"110113"},{label:"昌平区",value:"110114"},{label:"大兴区",value:"110115"},{label:"怀柔区",value:"110116"},{label:"平谷区",value:"110117"},{label:"密云区",value:"110118"},{label:"延庆区",value:"110119"}]],[[{label:"和平区",value:"120101"},{label:"河东区",value:"120102"},{label:"河西区",value:"120103"},{label:"南开区",value:"120104"},{label:"河北区",value:"120105"},{label:"红桥区",value:"120106"},{label:"东丽区",value:"120110"},{label:"西青区",value:"120111"},{label:"津南区",value:"120112"},{label:"北辰区",value:"120113"},{label:"武清区",value:"120114"},{label:"宝坻区",value:"120115"},{label:"滨海新区",value:"120116"},{label:"宁河区",value:"120117"},{label:"静海区",value:"120118"},{label:"蓟州区",value:"120119"}]],[[{label:"长安区",value:"130102"},{label:"桥西区",value:"130104"},{label:"新华区",value:"130105"},{label:"井陉矿区",value:"130107"},{label:"裕华区",value:"130108"},{label:"藁城区",value:"130109"},{label:"鹿泉区",value:"130110"},{label:"栾城区",value:"130111"},{label:"井陉县",value:"130121"},{label:"正定县",value:"130123"},{label:"行唐县",value:"130125"},{label:"灵寿县",value:"130126"},{label:"高邑县",value:"130127"},{label:"深泽县",value:"130128"},{label:"赞皇县",value:"130129"},{label:"无极县",value:"130130"},{label:"平山县",value:"130131"},{label:"元氏县",value:"130132"},{label:"赵县",value:"130133"},{label:"石家庄高新技术产业开发区",value:"130171"},{label:"石家庄循环化工园区",value:"130172"},{label:"辛集市",value:"130181"},{label:"晋州市",value:"130183"},{label:"新乐市",value:"130184"}],[{label:"路南区",value:"130202"},{label:"路北区",value:"130203"},{label:"古冶区",value:"130204"},{label:"开平区",value:"130205"},{label:"丰南区",value:"130207"},{label:"丰润区",value:"130208"},{label:"曹妃甸区",value:"130209"},{label:"滦县",value:"130223"},{label:"滦南县",value:"130224"},{label:"乐亭县",value:"130225"},{label:"迁西县",value:"130227"},{label:"玉田县",value:"130229"},{label:"唐山市芦台经济技术开发区",value:"130271"},{label:"唐山市汉沽管理区",value:"130272"},{label:"唐山高新技术产业开发区",value:"130273"},{label:"河北唐山海港经济开发区",value:"130274"},{label:"遵化市",value:"130281"},{label:"迁安市",value:"130283"}],[{label:"海港区",value:"130302"},{label:"山海关区",value:"130303"},{label:"北戴河区",value:"130304"},{label:"抚宁区",value:"130306"},{label:"青龙满族自治县",value:"130321"},{label:"昌黎县",value:"130322"},{label:"卢龙县",value:"130324"},{label:"秦皇岛市经济技术开发区",value:"130371"},{label:"北戴河新区",value:"130372"}],[{label:"邯山区",value:"130402"},{label:"丛台区",value:"130403"},{label:"复兴区",value:"130404"},{label:"峰峰矿区",value:"130406"},{label:"肥乡区",value:"130407"},{label:"永年区",value:"130408"},{label:"临漳县",value:"130423"},{label:"成安县",value:"130424"},{label:"大名县",value:"130425"},{label:"涉县",value:"130426"},{label:"磁县",value:"130427"},{label:"邱县",value:"130430"},{label:"鸡泽县",value:"130431"},{label:"广平县",value:"130432"},{label:"馆陶县",value:"130433"},{label:"魏县",value:"130434"},{label:"曲周县",value:"130435"},{label:"邯郸经济技术开发区",value:"130471"},{label:"邯郸冀南新区",value:"130473"},{label:"武安市",value:"130481"}],[{label:"桥东区",value:"130502"},{label:"桥西区",value:"130503"},{label:"邢台县",value:"130521"},{label:"临城县",value:"130522"},{label:"内丘县",value:"130523"},{label:"柏乡县",value:"130524"},{label:"隆尧县",value:"130525"},{label:"任县",value:"130526"},{label:"南和县",value:"130527"},{label:"宁晋县",value:"130528"},{label:"巨鹿县",value:"130529"},{label:"新河县",value:"130530"},{label:"广宗县",value:"130531"},{label:"平乡县",value:"130532"},{label:"威县",value:"130533"},{label:"清河县",value:"130534"},{label:"临西县",value:"130535"},{label:"河北邢台经济开发区",value:"130571"},{label:"南宫市",value:"130581"},{label:"沙河市",value:"130582"}],[{label:"竞秀区",value:"130602"},{label:"莲池区",value:"130606"},{label:"满城区",value:"130607"},{label:"清苑区",value:"130608"},{label:"徐水区",value:"130609"},{label:"涞水县",value:"130623"},{label:"阜平县",value:"130624"},{label:"定兴县",value:"130626"},{label:"唐县",value:"130627"},{label:"高阳县",value:"130628"},{label:"容城县",value:"130629"},{label:"涞源县",value:"130630"},{label:"望都县",value:"130631"},{label:"安新县",value:"130632"},{label:"易县",value:"130633"},{label:"曲阳县",value:"130634"},{label:"蠡县",value:"130635"},{label:"顺平县",value:"130636"},{label:"博野县",value:"130637"},{label:"雄县",value:"130638"},{label:"保定高新技术产业开发区",value:"130671"},{label:"保定白沟新城",value:"130672"},{label:"涿州市",value:"130681"},{label:"定州市",value:"130682"},{label:"安国市",value:"130683"},{label:"高碑店市",value:"130684"}],[{label:"桥东区",value:"130702"},{label:"桥西区",value:"130703"},{label:"宣化区",value:"130705"},{label:"下花园区",value:"130706"},{label:"万全区",value:"130708"},{label:"崇礼区",value:"130709"},{label:"张北县",value:"130722"},{label:"康保县",value:"130723"},{label:"沽源县",value:"130724"},{label:"尚义县",value:"130725"},{label:"蔚县",value:"130726"},{label:"阳原县",value:"130727"},{label:"怀安县",value:"130728"},{label:"怀来县",value:"130730"},{label:"涿鹿县",value:"130731"},{label:"赤城县",value:"130732"},{label:"张家口市高新技术产业开发区",value:"130771"},{label:"张家口市察北管理区",value:"130772"},{label:"张家口市塞北管理区",value:"130773"}],[{label:"双桥区",value:"130802"},{label:"双滦区",value:"130803"},{label:"鹰手营子矿区",value:"130804"},{label:"承德县",value:"130821"},{label:"兴隆县",value:"130822"},{label:"滦平县",value:"130824"},{label:"隆化县",value:"130825"},{label:"丰宁满族自治县",value:"130826"},{label:"宽城满族自治县",value:"130827"},{label:"围场满族蒙古族自治县",value:"130828"},{label:"承德高新技术产业开发区",value:"130871"},{label:"平泉市",value:"130881"}],[{label:"新华区",value:"130902"},{label:"运河区",value:"130903"},{label:"沧县",value:"130921"},{label:"青县",value:"130922"},{label:"东光县",value:"130923"},{label:"海兴县",value:"130924"},{label:"盐山县",value:"130925"},{label:"肃宁县",value:"130926"},{label:"南皮县",value:"130927"},{label:"吴桥县",value:"130928"},{label:"献县",value:"130929"},{label:"孟村回族自治县",value:"130930"},{label:"河北沧州经济开发区",value:"130971"},{label:"沧州高新技术产业开发区",value:"130972"},{label:"沧州渤海新区",value:"130973"},{label:"泊头市",value:"130981"},{label:"任丘市",value:"130982"},{label:"黄骅市",value:"130983"},{label:"河间市",value:"130984"}],[{label:"安次区",value:"131002"},{label:"广阳区",value:"131003"},{label:"固安县",value:"131022"},{label:"永清县",value:"131023"},{label:"香河县",value:"131024"},{label:"大城县",value:"131025"},{label:"文安县",value:"131026"},{label:"大厂回族自治县",value:"131028"},{label:"廊坊经济技术开发区",value:"131071"},{label:"霸州市",value:"131081"},{label:"三河市",value:"131082"}],[{label:"桃城区",value:"131102"},{label:"冀州区",value:"131103"},{label:"枣强县",value:"131121"},{label:"武邑县",value:"131122"},{label:"武强县",value:"131123"},{label:"饶阳县",value:"131124"},{label:"安平县",value:"131125"},{label:"故城县",value:"131126"},{label:"景县",value:"131127"},{label:"阜城县",value:"131128"},{label:"河北衡水经济开发区",value:"131171"},{label:"衡水滨湖新区",value:"131172"},{label:"深州市",value:"131182"}]],[[{label:"小店区",value:"140105"},{label:"迎泽区",value:"140106"},{label:"杏花岭区",value:"140107"},{label:"尖草坪区",value:"140108"},{label:"万柏林区",value:"140109"},{label:"晋源区",value:"140110"},{label:"清徐县",value:"140121"},{label:"阳曲县",value:"140122"},{label:"娄烦县",value:"140123"},{label:"山西转型综合改革示范区",value:"140171"},{label:"古交市",value:"140181"}],[{label:"城区",value:"140202"},{label:"矿区",value:"140203"},{label:"南郊区",value:"140211"},{label:"新荣区",value:"140212"},{label:"阳高县",value:"140221"},{label:"天镇县",value:"140222"},{label:"广灵县",value:"140223"},{label:"灵丘县",value:"140224"},{label:"浑源县",value:"140225"},{label:"左云县",value:"140226"},{label:"大同县",value:"140227"},{label:"山西大同经济开发区",value:"140271"}],[{label:"城区",value:"140302"},{label:"矿区",value:"140303"},{label:"郊区",value:"140311"},{label:"平定县",value:"140321"},{label:"盂县",value:"140322"},{label:"山西阳泉经济开发区",value:"140371"}],[{label:"城区",value:"140402"},{label:"郊区",value:"140411"},{label:"长治县",value:"140421"},{label:"襄垣县",value:"140423"},{label:"屯留县",value:"140424"},{label:"平顺县",value:"140425"},{label:"黎城县",value:"140426"},{label:"壶关县",value:"140427"},{label:"长子县",value:"140428"},{label:"武乡县",value:"140429"},{label:"沁县",value:"140430"},{label:"沁源县",value:"140431"},{label:"山西长治高新技术产业园区",value:"140471"},{label:"潞城市",value:"140481"}],[{label:"城区",value:"140502"},{label:"沁水县",value:"140521"},{label:"阳城县",value:"140522"},{label:"陵川县",value:"140524"},{label:"泽州县",value:"140525"},{label:"高平市",value:"140581"}],[{label:"朔城区",value:"140602"},{label:"平鲁区",value:"140603"},{label:"山阴县",value:"140621"},{label:"应县",value:"140622"},{label:"右玉县",value:"140623"},{label:"怀仁县",value:"140624"},{label:"山西朔州经济开发区",value:"140671"}],[{label:"榆次区",value:"140702"},{label:"榆社县",value:"140721"},{label:"左权县",value:"140722"},{label:"和顺县",value:"140723"},{label:"昔阳县",value:"140724"},{label:"寿阳县",value:"140725"},{label:"太谷县",value:"140726"},{label:"祁县",value:"140727"},{label:"平遥县",value:"140728"},{label:"灵石县",value:"140729"},{label:"介休市",value:"140781"}],[{label:"盐湖区",value:"140802"},{label:"临猗县",value:"140821"},{label:"万荣县",value:"140822"},{label:"闻喜县",value:"140823"},{label:"稷山县",value:"140824"},{label:"新绛县",value:"140825"},{label:"绛县",value:"140826"},{label:"垣曲县",value:"140827"},{label:"夏县",value:"140828"},{label:"平陆县",value:"140829"},{label:"芮城县",value:"140830"},{label:"永济市",value:"140881"},{label:"河津市",value:"140882"}],[{label:"忻府区",value:"140902"},{label:"定襄县",value:"140921"},{label:"五台县",value:"140922"},{label:"代县",value:"140923"},{label:"繁峙县",value:"140924"},{label:"宁武县",value:"140925"},{label:"静乐县",value:"140926"},{label:"神池县",value:"140927"},{label:"五寨县",value:"140928"},{label:"岢岚县",value:"140929"},{label:"河曲县",value:"140930"},{label:"保德县",value:"140931"},{label:"偏关县",value:"140932"},{label:"五台山风景名胜区",value:"140971"},{label:"原平市",value:"140981"}],[{label:"尧都区",value:"141002"},{label:"曲沃县",value:"141021"},{label:"翼城县",value:"141022"},{label:"襄汾县",value:"141023"},{label:"洪洞县",value:"141024"},{label:"古县",value:"141025"},{label:"安泽县",value:"141026"},{label:"浮山县",value:"141027"},{label:"吉县",value:"141028"},{label:"乡宁县",value:"141029"},{label:"大宁县",value:"141030"},{label:"隰县",value:"141031"},{label:"永和县",value:"141032"},{label:"蒲县",value:"141033"},{label:"汾西县",value:"141034"},{label:"侯马市",value:"141081"},{label:"霍州市",value:"141082"}],[{label:"离石区",value:"141102"},{label:"文水县",value:"141121"},{label:"交城县",value:"141122"},{label:"兴县",value:"141123"},{label:"临县",value:"141124"},{label:"柳林县",value:"141125"},{label:"石楼县",value:"141126"},{label:"岚县",value:"141127"},{label:"方山县",value:"141128"},{label:"中阳县",value:"141129"},{label:"交口县",value:"141130"},{label:"孝义市",value:"141181"},{label:"汾阳市",value:"141182"}]],[[{label:"新城区",value:"150102"},{label:"回民区",value:"150103"},{label:"玉泉区",value:"150104"},{label:"赛罕区",value:"150105"},{label:"土默特左旗",value:"150121"},{label:"托克托县",value:"150122"},{label:"和林格尔县",value:"150123"},{label:"清水河县",value:"150124"},{label:"武川县",value:"150125"},{label:"呼和浩特金海工业园区",value:"150171"},{label:"呼和浩特经济技术开发区",value:"150172"}],[{label:"东河区",value:"150202"},{label:"昆都仑区",value:"150203"},{label:"青山区",value:"150204"},{label:"石拐区",value:"150205"},{label:"白云鄂博矿区",value:"150206"},{label:"九原区",value:"150207"},{label:"土默特右旗",value:"150221"},{label:"固阳县",value:"150222"},{label:"达尔罕茂明安联合旗",value:"150223"},{label:"包头稀土高新技术产业开发区",value:"150271"}],[{label:"海勃湾区",value:"150302"},{label:"海南区",value:"150303"},{label:"乌达区",value:"150304"}],[{label:"红山区",value:"150402"},{label:"元宝山区",value:"150403"},{label:"松山区",value:"150404"},{label:"阿鲁科尔沁旗",value:"150421"},{label:"巴林左旗",value:"150422"},{label:"巴林右旗",value:"150423"},{label:"林西县",value:"150424"},{label:"克什克腾旗",value:"150425"},{label:"翁牛特旗",value:"150426"},{label:"喀喇沁旗",value:"150428"},{label:"宁城县",value:"150429"},{label:"敖汉旗",value:"150430"}],[{label:"科尔沁区",value:"150502"},{label:"科尔沁左翼中旗",value:"150521"},{label:"科尔沁左翼后旗",value:"150522"},{label:"开鲁县",value:"150523"},{label:"库伦旗",value:"150524"},{label:"奈曼旗",value:"150525"},{label:"扎鲁特旗",value:"150526"},{label:"通辽经济技术开发区",value:"150571"},{label:"霍林郭勒市",value:"150581"}],[{label:"东胜区",value:"150602"},{label:"康巴什区",value:"150603"},{label:"达拉特旗",value:"150621"},{label:"准格尔旗",value:"150622"},{label:"鄂托克前旗",value:"150623"},{label:"鄂托克旗",value:"150624"},{label:"杭锦旗",value:"150625"},{label:"乌审旗",value:"150626"},{label:"伊金霍洛旗",value:"150627"}],[{label:"海拉尔区",value:"150702"},{label:"扎赉诺尔区",value:"150703"},{label:"阿荣旗",value:"150721"},{label:"莫力达瓦达斡尔族自治旗",value:"150722"},{label:"鄂伦春自治旗",value:"150723"},{label:"鄂温克族自治旗",value:"150724"},{label:"陈巴尔虎旗",value:"150725"},{label:"新巴尔虎左旗",value:"150726"},{label:"新巴尔虎右旗",value:"150727"},{label:"满洲里市",value:"150781"},{label:"牙克石市",value:"150782"},{label:"扎兰屯市",value:"150783"},{label:"额尔古纳市",value:"150784"},{label:"根河市",value:"150785"}],[{label:"临河区",value:"150802"},{label:"五原县",value:"150821"},{label:"磴口县",value:"150822"},{label:"乌拉特前旗",value:"150823"},{label:"乌拉特中旗",value:"150824"},{label:"乌拉特后旗",value:"150825"},{label:"杭锦后旗",value:"150826"}],[{label:"集宁区",value:"150902"},{label:"卓资县",value:"150921"},{label:"化德县",value:"150922"},{label:"商都县",value:"150923"},{label:"兴和县",value:"150924"},{label:"凉城县",value:"150925"},{label:"察哈尔右翼前旗",value:"150926"},{label:"察哈尔右翼中旗",value:"150927"},{label:"察哈尔右翼后旗",value:"150928"},{label:"四子王旗",value:"150929"},{label:"丰镇市",value:"150981"}],[{label:"乌兰浩特市",value:"152201"},{label:"阿尔山市",value:"152202"},{label:"科尔沁右翼前旗",value:"152221"},{label:"科尔沁右翼中旗",value:"152222"},{label:"扎赉特旗",value:"152223"},{label:"突泉县",value:"152224"}],[{label:"二连浩特市",value:"152501"},{label:"锡林浩特市",value:"152502"},{label:"阿巴嘎旗",value:"152522"},{label:"苏尼特左旗",value:"152523"},{label:"苏尼特右旗",value:"152524"},{label:"东乌珠穆沁旗",value:"152525"},{label:"西乌珠穆沁旗",value:"152526"},{label:"太仆寺旗",value:"152527"},{label:"镶黄旗",value:"152528"},{label:"正镶白旗",value:"152529"},{label:"正蓝旗",value:"152530"},{label:"多伦县",value:"152531"},{label:"乌拉盖管委会",value:"152571"}],[{label:"阿拉善左旗",value:"152921"},{label:"阿拉善右旗",value:"152922"},{label:"额济纳旗",value:"152923"},{label:"内蒙古阿拉善经济开发区",value:"152971"}]],[[{label:"和平区",value:"210102"},{label:"沈河区",value:"210103"},{label:"大东区",value:"210104"},{label:"皇姑区",value:"210105"},{label:"铁西区",value:"210106"},{label:"苏家屯区",value:"210111"},{label:"浑南区",value:"210112"},{label:"沈北新区",value:"210113"},{label:"于洪区",value:"210114"},{label:"辽中区",value:"210115"},{label:"康平县",value:"210123"},{label:"法库县",value:"210124"},{label:"新民市",value:"210181"}],[{label:"中山区",value:"210202"},{label:"西岗区",value:"210203"},{label:"沙河口区",value:"210204"},{label:"甘井子区",value:"210211"},{label:"旅顺口区",value:"210212"},{label:"金州区",value:"210213"},{label:"普兰店区",value:"210214"},{label:"长海县",value:"210224"},{label:"瓦房店市",value:"210281"},{label:"庄河市",value:"210283"}],[{label:"铁东区",value:"210302"},{label:"铁西区",value:"210303"},{label:"立山区",value:"210304"},{label:"千山区",value:"210311"},{label:"台安县",value:"210321"},{label:"岫岩满族自治县",value:"210323"},{label:"海城市",value:"210381"}],[{label:"新抚区",value:"210402"},{label:"东洲区",value:"210403"},{label:"望花区",value:"210404"},{label:"顺城区",value:"210411"},{label:"抚顺县",value:"210421"},{label:"新宾满族自治县",value:"210422"},{label:"清原满族自治县",value:"210423"}],[{label:"平山区",value:"210502"},{label:"溪湖区",value:"210503"},{label:"明山区",value:"210504"},{label:"南芬区",value:"210505"},{label:"本溪满族自治县",value:"210521"},{label:"桓仁满族自治县",value:"210522"}],[{label:"元宝区",value:"210602"},{label:"振兴区",value:"210603"},{label:"振安区",value:"210604"},{label:"宽甸满族自治县",value:"210624"},{label:"东港市",value:"210681"},{label:"凤城市",value:"210682"}],[{label:"古塔区",value:"210702"},{label:"凌河区",value:"210703"},{label:"太和区",value:"210711"},{label:"黑山县",value:"210726"},{label:"义县",value:"210727"},{label:"凌海市",value:"210781"},{label:"北镇市",value:"210782"}],[{label:"站前区",value:"210802"},{label:"西市区",value:"210803"},{label:"鲅鱼圈区",value:"210804"},{label:"老边区",value:"210811"},{label:"盖州市",value:"210881"},{label:"大石桥市",value:"210882"}],[{label:"海州区",value:"210902"},{label:"新邱区",value:"210903"},{label:"太平区",value:"210904"},{label:"清河门区",value:"210905"},{label:"细河区",value:"210911"},{label:"阜新蒙古族自治县",value:"210921"},{label:"彰武县",value:"210922"}],[{label:"白塔区",value:"211002"},{label:"文圣区",value:"211003"},{label:"宏伟区",value:"211004"},{label:"弓长岭区",value:"211005"},{label:"太子河区",value:"211011"},{label:"辽阳县",value:"211021"},{label:"灯塔市",value:"211081"}],[{label:"双台子区",value:"211102"},{label:"兴隆台区",value:"211103"},{label:"大洼区",value:"211104"},{label:"盘山县",value:"211122"}],[{label:"银州区",value:"211202"},{label:"清河区",value:"211204"},{label:"铁岭县",value:"211221"},{label:"西丰县",value:"211223"},{label:"昌图县",value:"211224"},{label:"调兵山市",value:"211281"},{label:"开原市",value:"211282"}],[{label:"双塔区",value:"211302"},{label:"龙城区",value:"211303"},{label:"朝阳县",value:"211321"},{label:"建平县",value:"211322"},{label:"喀喇沁左翼蒙古族自治县",value:"211324"},{label:"北票市",value:"211381"},{label:"凌源市",value:"211382"}],[{label:"连山区",value:"211402"},{label:"龙港区",value:"211403"},{label:"南票区",value:"211404"},{label:"绥中县",value:"211421"},{label:"建昌县",value:"211422"},{label:"兴城市",value:"211481"}]],[[{label:"南关区",value:"220102"},{label:"宽城区",value:"220103"},{label:"朝阳区",value:"220104"},{label:"二道区",value:"220105"},{label:"绿园区",value:"220106"},{label:"双阳区",value:"220112"},{label:"九台区",value:"220113"},{label:"农安县",value:"220122"},{label:"长春经济技术开发区",value:"220171"},{label:"长春净月高新技术产业开发区",value:"220172"},{label:"长春高新技术产业开发区",value:"220173"},{label:"长春汽车经济技术开发区",value:"220174"},{label:"榆树市",value:"220182"},{label:"德惠市",value:"220183"}],[{label:"昌邑区",value:"220202"},{label:"龙潭区",value:"220203"},{label:"船营区",value:"220204"},{label:"丰满区",value:"220211"},{label:"永吉县",value:"220221"},{label:"吉林经济开发区",value:"220271"},{label:"吉林高新技术产业开发区",value:"220272"},{label:"吉林中国新加坡食品区",value:"220273"},{label:"蛟河市",value:"220281"},{label:"桦甸市",value:"220282"},{label:"舒兰市",value:"220283"},{label:"磐石市",value:"220284"}],[{label:"铁西区",value:"220302"},{label:"铁东区",value:"220303"},{label:"梨树县",value:"220322"},{label:"伊通满族自治县",value:"220323"},{label:"公主岭市",value:"220381"},{label:"双辽市",value:"220382"}],[{label:"龙山区",value:"220402"},{label:"西安区",value:"220403"},{label:"东丰县",value:"220421"},{label:"东辽县",value:"220422"}],[{label:"东昌区",value:"220502"},{label:"二道江区",value:"220503"},{label:"通化县",value:"220521"},{label:"辉南县",value:"220523"},{label:"柳河县",value:"220524"},{label:"梅河口市",value:"220581"},{label:"集安市",value:"220582"}],[{label:"浑江区",value:"220602"},{label:"江源区",value:"220605"},{label:"抚松县",value:"220621"},{label:"靖宇县",value:"220622"},{label:"长白朝鲜族自治县",value:"220623"},{label:"临江市",value:"220681"}],[{label:"宁江区",value:"220702"},{label:"前郭尔罗斯蒙古族自治县",value:"220721"},{label:"长岭县",value:"220722"},{label:"乾安县",value:"220723"},{label:"吉林松原经济开发区",value:"220771"},{label:"扶余市",value:"220781"}],[{label:"洮北区",value:"220802"},{label:"镇赉县",value:"220821"},{label:"通榆县",value:"220822"},{label:"吉林白城经济开发区",value:"220871"},{label:"洮南市",value:"220881"},{label:"大安市",value:"220882"}],[{label:"延吉市",value:"222401"},{label:"图们市",value:"222402"},{label:"敦化市",value:"222403"},{label:"珲春市",value:"222404"},{label:"龙井市",value:"222405"},{label:"和龙市",value:"222406"},{label:"汪清县",value:"222424"},{label:"安图县",value:"222426"}]],[[{label:"道里区",value:"230102"},{label:"南岗区",value:"230103"},{label:"道外区",value:"230104"},{label:"平房区",value:"230108"},{label:"松北区",value:"230109"},{label:"香坊区",value:"230110"},{label:"呼兰区",value:"230111"},{label:"阿城区",value:"230112"},{label:"双城区",value:"230113"},{label:"依兰县",value:"230123"},{label:"方正县",value:"230124"},{label:"宾县",value:"230125"},{label:"巴彦县",value:"230126"},{label:"木兰县",value:"230127"},{label:"通河县",value:"230128"},{label:"延寿县",value:"230129"},{label:"尚志市",value:"230183"},{label:"五常市",value:"230184"}],[{label:"龙沙区",value:"230202"},{label:"建华区",value:"230203"},{label:"铁锋区",value:"230204"},{label:"昂昂溪区",value:"230205"},{label:"富拉尔基区",value:"230206"},{label:"碾子山区",value:"230207"},{label:"梅里斯达斡尔族区",value:"230208"},{label:"龙江县",value:"230221"},{label:"依安县",value:"230223"},{label:"泰来县",value:"230224"},{label:"甘南县",value:"230225"},{label:"富裕县",value:"230227"},{label:"克山县",value:"230229"},{label:"克东县",value:"230230"},{label:"拜泉县",value:"230231"},{label:"讷河市",value:"230281"}],[{label:"鸡冠区",value:"230302"},{label:"恒山区",value:"230303"},{label:"滴道区",value:"230304"},{label:"梨树区",value:"230305"},{label:"城子河区",value:"230306"},{label:"麻山区",value:"230307"},{label:"鸡东县",value:"230321"},{label:"虎林市",value:"230381"},{label:"密山市",value:"230382"}],[{label:"向阳区",value:"230402"},{label:"工农区",value:"230403"},{label:"南山区",value:"230404"},{label:"兴安区",value:"230405"},{label:"东山区",value:"230406"},{label:"兴山区",value:"230407"},{label:"萝北县",value:"230421"},{label:"绥滨县",value:"230422"}],[{label:"尖山区",value:"230502"},{label:"岭东区",value:"230503"},{label:"四方台区",value:"230505"},{label:"宝山区",value:"230506"},{label:"集贤县",value:"230521"},{label:"友谊县",value:"230522"},{label:"宝清县",value:"230523"},{label:"饶河县",value:"230524"}],[{label:"萨尔图区",value:"230602"},{label:"龙凤区",value:"230603"},{label:"让胡路区",value:"230604"},{label:"红岗区",value:"230605"},{label:"大同区",value:"230606"},{label:"肇州县",value:"230621"},{label:"肇源县",value:"230622"},{label:"林甸县",value:"230623"},{label:"杜尔伯特蒙古族自治县",value:"230624"},{label:"大庆高新技术产业开发区",value:"230671"}],[{label:"伊春区",value:"230702"},{label:"南岔区",value:"230703"},{label:"友好区",value:"230704"},{label:"西林区",value:"230705"},{label:"翠峦区",value:"230706"},{label:"新青区",value:"230707"},{label:"美溪区",value:"230708"},{label:"金山屯区",value:"230709"},{label:"五营区",value:"230710"},{label:"乌马河区",value:"230711"},{label:"汤旺河区",value:"230712"},{label:"带岭区",value:"230713"},{label:"乌伊岭区",value:"230714"},{label:"红星区",value:"230715"},{label:"上甘岭区",value:"230716"},{label:"嘉荫县",value:"230722"},{label:"铁力市",value:"230781"}],[{label:"向阳区",value:"230803"},{label:"前进区",value:"230804"},{label:"东风区",value:"230805"},{label:"郊区",value:"230811"},{label:"桦南县",value:"230822"},{label:"桦川县",value:"230826"},{label:"汤原县",value:"230828"},{label:"同江市",value:"230881"},{label:"富锦市",value:"230882"},{label:"抚远市",value:"230883"}],[{label:"新兴区",value:"230902"},{label:"桃山区",value:"230903"},{label:"茄子河区",value:"230904"},{label:"勃利县",value:"230921"}],[{label:"东安区",value:"231002"},{label:"阳明区",value:"231003"},{label:"爱民区",value:"231004"},{label:"西安区",value:"231005"},{label:"林口县",value:"231025"},{label:"牡丹江经济技术开发区",value:"231071"},{label:"绥芬河市",value:"231081"},{label:"海林市",value:"231083"},{label:"宁安市",value:"231084"},{label:"穆棱市",value:"231085"},{label:"东宁市",value:"231086"}],[{label:"爱辉区",value:"231102"},{label:"嫩江县",value:"231121"},{label:"逊克县",value:"231123"},{label:"孙吴县",value:"231124"},{label:"北安市",value:"231181"},{label:"五大连池市",value:"231182"}],[{label:"北林区",value:"231202"},{label:"望奎县",value:"231221"},{label:"兰西县",value:"231222"},{label:"青冈县",value:"231223"},{label:"庆安县",value:"231224"},{label:"明水县",value:"231225"},{label:"绥棱县",value:"231226"},{label:"安达市",value:"231281"},{label:"肇东市",value:"231282"},{label:"海伦市",value:"231283"}],[{label:"加格达奇区",value:"232701"},{label:"松岭区",value:"232702"},{label:"新林区",value:"232703"},{label:"呼中区",value:"232704"},{label:"呼玛县",value:"232721"},{label:"塔河县",value:"232722"},{label:"漠河县",value:"232723"}]],[[{label:"黄浦区",value:"310101"},{label:"徐汇区",value:"310104"},{label:"长宁区",value:"310105"},{label:"静安区",value:"310106"},{label:"普陀区",value:"310107"},{label:"虹口区",value:"310109"},{label:"杨浦区",value:"310110"},{label:"闵行区",value:"310112"},{label:"宝山区",value:"310113"},{label:"嘉定区",value:"310114"},{label:"浦东新区",value:"310115"},{label:"金山区",value:"310116"},{label:"松江区",value:"310117"},{label:"青浦区",value:"310118"},{label:"奉贤区",value:"310120"},{label:"崇明区",value:"310151"}]],[[{label:"玄武区",value:"320102"},{label:"秦淮区",value:"320104"},{label:"建邺区",value:"320105"},{label:"鼓楼区",value:"320106"},{label:"浦口区",value:"320111"},{label:"栖霞区",value:"320113"},{label:"雨花台区",value:"320114"},{label:"江宁区",value:"320115"},{label:"六合区",value:"320116"},{label:"溧水区",value:"320117"},{label:"高淳区",value:"320118"}],[{label:"锡山区",value:"320205"},{label:"惠山区",value:"320206"},{label:"滨湖区",value:"320211"},{label:"梁溪区",value:"320213"},{label:"新吴区",value:"320214"},{label:"江阴市",value:"320281"},{label:"宜兴市",value:"320282"}],[{label:"鼓楼区",value:"320302"},{label:"云龙区",value:"320303"},{label:"贾汪区",value:"320305"},{label:"泉山区",value:"320311"},{label:"铜山区",value:"320312"},{label:"丰县",value:"320321"},{label:"沛县",value:"320322"},{label:"睢宁县",value:"320324"},{label:"徐州经济技术开发区",value:"320371"},{label:"新沂市",value:"320381"},{label:"邳州市",value:"320382"}],[{label:"天宁区",value:"320402"},{label:"钟楼区",value:"320404"},{label:"新北区",value:"320411"},{label:"武进区",value:"320412"},{label:"金坛区",value:"320413"},{label:"溧阳市",value:"320481"}],[{label:"虎丘区",value:"320505"},{label:"吴中区",value:"320506"},{label:"相城区",value:"320507"},{label:"姑苏区",value:"320508"},{label:"吴江区",value:"320509"},{label:"苏州工业园区",value:"320571"},{label:"常熟市",value:"320581"},{label:"张家港市",value:"320582"},{label:"昆山市",value:"320583"},{label:"太仓市",value:"320585"}],[{label:"崇川区",value:"320602"},{label:"港闸区",value:"320611"},{label:"通州区",value:"320612"},{label:"海安县",value:"320621"},{label:"如东县",value:"320623"},{label:"南通经济技术开发区",value:"320671"},{label:"启东市",value:"320681"},{label:"如皋市",value:"320682"},{label:"海门市",value:"320684"}],[{label:"连云区",value:"320703"},{label:"海州区",value:"320706"},{label:"赣榆区",value:"320707"},{label:"东海县",value:"320722"},{label:"灌云县",value:"320723"},{label:"灌南县",value:"320724"},{label:"连云港经济技术开发区",value:"320771"},{label:"连云港高新技术产业开发区",value:"320772"}],[{label:"淮安区",value:"320803"},{label:"淮阴区",value:"320804"},{label:"清江浦区",value:"320812"},{label:"洪泽区",value:"320813"},{label:"涟水县",value:"320826"},{label:"盱眙县",value:"320830"},{label:"金湖县",value:"320831"},{label:"淮安经济技术开发区",value:"320871"}],[{label:"亭湖区",value:"320902"},{label:"盐都区",value:"320903"},{label:"大丰区",value:"320904"},{label:"响水县",value:"320921"},{label:"滨海县",value:"320922"},{label:"阜宁县",value:"320923"},{label:"射阳县",value:"320924"},{label:"建湖县",value:"320925"},{label:"盐城经济技术开发区",value:"320971"},{label:"东台市",value:"320981"}],[{label:"广陵区",value:"321002"},{label:"邗江区",value:"321003"},{label:"江都区",value:"321012"},{label:"宝应县",value:"321023"},{label:"扬州经济技术开发区",value:"321071"},{label:"仪征市",value:"321081"},{label:"高邮市",value:"321084"}],[{label:"京口区",value:"321102"},{label:"润州区",value:"321111"},{label:"丹徒区",value:"321112"},{label:"镇江新区",value:"321171"},{label:"丹阳市",value:"321181"},{label:"扬中市",value:"321182"},{label:"句容市",value:"321183"}],[{label:"海陵区",value:"321202"},{label:"高港区",value:"321203"},{label:"姜堰区",value:"321204"},{label:"泰州医药高新技术产业开发区",value:"321271"},{label:"兴化市",value:"321281"},{label:"靖江市",value:"321282"},{label:"泰兴市",value:"321283"}],[{label:"宿城区",value:"321302"},{label:"宿豫区",value:"321311"},{label:"沭阳县",value:"321322"},{label:"泗阳县",value:"321323"},{label:"泗洪县",value:"321324"},{label:"宿迁经济技术开发区",value:"321371"}]],[[{label:"上城区",value:"330102"},{label:"下城区",value:"330103"},{label:"江干区",value:"330104"},{label:"拱墅区",value:"330105"},{label:"西湖区",value:"330106"},{label:"滨江区",value:"330108"},{label:"萧山区",value:"330109"},{label:"余杭区",value:"330110"},{label:"富阳区",value:"330111"},{label:"临安区",value:"330112"},{label:"桐庐县",value:"330122"},{label:"淳安县",value:"330127"},{label:"建德市",value:"330182"}],[{label:"海曙区",value:"330203"},{label:"江北区",value:"330205"},{label:"北仑区",value:"330206"},{label:"镇海区",value:"330211"},{label:"鄞州区",value:"330212"},{label:"奉化区",value:"330213"},{label:"象山县",value:"330225"},{label:"宁海县",value:"330226"},{label:"余姚市",value:"330281"},{label:"慈溪市",value:"330282"}],[{label:"鹿城区",value:"330302"},{label:"龙湾区",value:"330303"},{label:"瓯海区",value:"330304"},{label:"洞头区",value:"330305"},{label:"永嘉县",value:"330324"},{label:"平阳县",value:"330326"},{label:"苍南县",value:"330327"},{label:"文成县",value:"330328"},{label:"泰顺县",value:"330329"},{label:"温州经济技术开发区",value:"330371"},{label:"瑞安市",value:"330381"},{label:"乐清市",value:"330382"}],[{label:"南湖区",value:"330402"},{label:"秀洲区",value:"330411"},{label:"嘉善县",value:"330421"},{label:"海盐县",value:"330424"},{label:"海宁市",value:"330481"},{label:"平湖市",value:"330482"},{label:"桐乡市",value:"330483"}],[{label:"吴兴区",value:"330502"},{label:"南浔区",value:"330503"},{label:"德清县",value:"330521"},{label:"长兴县",value:"330522"},{label:"安吉县",value:"330523"}],[{label:"越城区",value:"330602"},{label:"柯桥区",value:"330603"},{label:"上虞区",value:"330604"},{label:"新昌县",value:"330624"},{label:"诸暨市",value:"330681"},{label:"嵊州市",value:"330683"}],[{label:"婺城区",value:"330702"},{label:"金东区",value:"330703"},{label:"武义县",value:"330723"},{label:"浦江县",value:"330726"},{label:"磐安县",value:"330727"},{label:"兰溪市",value:"330781"},{label:"义乌市",value:"330782"},{label:"东阳市",value:"330783"},{label:"永康市",value:"330784"}],[{label:"柯城区",value:"330802"},{label:"衢江区",value:"330803"},{label:"常山县",value:"330822"},{label:"开化县",value:"330824"},{label:"龙游县",value:"330825"},{label:"江山市",value:"330881"}],[{label:"定海区",value:"330902"},{label:"普陀区",value:"330903"},{label:"岱山县",value:"330921"},{label:"嵊泗县",value:"330922"}],[{label:"椒江区",value:"331002"},{label:"黄岩区",value:"331003"},{label:"路桥区",value:"331004"},{label:"三门县",value:"331022"},{label:"天台县",value:"331023"},{label:"仙居县",value:"331024"},{label:"温岭市",value:"331081"},{label:"临海市",value:"331082"},{label:"玉环市",value:"331083"}],[{label:"莲都区",value:"331102"},{label:"青田县",value:"331121"},{label:"缙云县",value:"331122"},{label:"遂昌县",value:"331123"},{label:"松阳县",value:"331124"},{label:"云和县",value:"331125"},{label:"庆元县",value:"331126"},{label:"景宁畲族自治县",value:"331127"},{label:"龙泉市",value:"331181"}]],[[{label:"瑶海区",value:"340102"},{label:"庐阳区",value:"340103"},{label:"蜀山区",value:"340104"},{label:"包河区",value:"340111"},{label:"长丰县",value:"340121"},{label:"肥东县",value:"340122"},{label:"肥西县",value:"340123"},{label:"庐江县",value:"340124"},{label:"合肥高新技术产业开发区",value:"340171"},{label:"合肥经济技术开发区",value:"340172"},{label:"合肥新站高新技术产业开发区",value:"340173"},{label:"巢湖市",value:"340181"}],[{label:"镜湖区",value:"340202"},{label:"弋江区",value:"340203"},{label:"鸠江区",value:"340207"},{label:"三山区",value:"340208"},{label:"芜湖县",value:"340221"},{label:"繁昌县",value:"340222"},{label:"南陵县",value:"340223"},{label:"无为县",value:"340225"},{label:"芜湖经济技术开发区",value:"340271"},{label:"安徽芜湖长江大桥经济开发区",value:"340272"}],[{label:"龙子湖区",value:"340302"},{label:"蚌山区",value:"340303"},{label:"禹会区",value:"340304"},{label:"淮上区",value:"340311"},{label:"怀远县",value:"340321"},{label:"五河县",value:"340322"},{label:"固镇县",value:"340323"},{label:"蚌埠市高新技术开发区",value:"340371"},{label:"蚌埠市经济开发区",value:"340372"}],[{label:"大通区",value:"340402"},{label:"田家庵区",value:"340403"},{label:"谢家集区",value:"340404"},{label:"八公山区",value:"340405"},{label:"潘集区",value:"340406"},{label:"凤台县",value:"340421"},{label:"寿县",value:"340422"}],[{label:"花山区",value:"340503"},{label:"雨山区",value:"340504"},{label:"博望区",value:"340506"},{label:"当涂县",value:"340521"},{label:"含山县",value:"340522"},{label:"和县",value:"340523"}],[{label:"杜集区",value:"340602"},{label:"相山区",value:"340603"},{label:"烈山区",value:"340604"},{label:"濉溪县",value:"340621"}],[{label:"铜官区",value:"340705"},{label:"义安区",value:"340706"},{label:"郊区",value:"340711"},{label:"枞阳县",value:"340722"}],[{label:"迎江区",value:"340802"},{label:"大观区",value:"340803"},{label:"宜秀区",value:"340811"},{label:"怀宁县",value:"340822"},{label:"潜山县",value:"340824"},{label:"太湖县",value:"340825"},{label:"宿松县",value:"340826"},{label:"望江县",value:"340827"},{label:"岳西县",value:"340828"},{label:"安徽安庆经济开发区",value:"340871"},{label:"桐城市",value:"340881"}],[{label:"屯溪区",value:"341002"},{label:"黄山区",value:"341003"},{label:"徽州区",value:"341004"},{label:"歙县",value:"341021"},{label:"休宁县",value:"341022"},{label:"黟县",value:"341023"},{label:"祁门县",value:"341024"}],[{label:"琅琊区",value:"341102"},{label:"南谯区",value:"341103"},{label:"来安县",value:"341122"},{label:"全椒县",value:"341124"},{label:"定远县",value:"341125"},{label:"凤阳县",value:"341126"},{label:"苏滁现代产业园",value:"341171"},{label:"滁州经济技术开发区",value:"341172"},{label:"天长市",value:"341181"},{label:"明光市",value:"341182"}],[{label:"颍州区",value:"341202"},{label:"颍东区",value:"341203"},{label:"颍泉区",value:"341204"},{label:"临泉县",value:"341221"},{label:"太和县",value:"341222"},{label:"阜南县",value:"341225"},{label:"颍上县",value:"341226"},{label:"阜阳合肥现代产业园区",value:"341271"},{label:"阜阳经济技术开发区",value:"341272"},{label:"界首市",value:"341282"}],[{label:"埇桥区",value:"341302"},{label:"砀山县",value:"341321"},{label:"萧县",value:"341322"},{label:"灵璧县",value:"341323"},{label:"泗县",value:"341324"},{label:"宿州马鞍山现代产业园区",value:"341371"},{label:"宿州经济技术开发区",value:"341372"}],[{label:"金安区",value:"341502"},{label:"裕安区",value:"341503"},{label:"叶集区",value:"341504"},{label:"霍邱县",value:"341522"},{label:"舒城县",value:"341523"},{label:"金寨县",value:"341524"},{label:"霍山县",value:"341525"}],[{label:"谯城区",value:"341602"},{label:"涡阳县",value:"341621"},{label:"蒙城县",value:"341622"},{label:"利辛县",value:"341623"}],[{label:"贵池区",value:"341702"},{label:"东至县",value:"341721"},{label:"石台县",value:"341722"},{label:"青阳县",value:"341723"}],[{label:"宣州区",value:"341802"},{label:"郎溪县",value:"341821"},{label:"广德县",value:"341822"},{label:"泾县",value:"341823"},{label:"绩溪县",value:"341824"},{label:"旌德县",value:"341825"},{label:"宣城市经济开发区",value:"341871"},{label:"宁国市",value:"341881"}]],[[{label:"鼓楼区",value:"350102"},{label:"台江区",value:"350103"},{label:"仓山区",value:"350104"},{label:"马尾区",value:"350105"},{label:"晋安区",value:"350111"},{label:"闽侯县",value:"350121"},{label:"连江县",value:"350122"},{label:"罗源县",value:"350123"},{label:"闽清县",value:"350124"},{label:"永泰县",value:"350125"},{label:"平潭县",value:"350128"},{label:"福清市",value:"350181"},{label:"长乐市",value:"350182"}],[{label:"思明区",value:"350203"},{label:"海沧区",value:"350205"},{label:"湖里区",value:"350206"},{label:"集美区",value:"350211"},{label:"同安区",value:"350212"},{label:"翔安区",value:"350213"}],[{label:"城厢区",value:"350302"},{label:"涵江区",value:"350303"},{label:"荔城区",value:"350304"},{label:"秀屿区",value:"350305"},{label:"仙游县",value:"350322"}],[{label:"梅列区",value:"350402"},{label:"三元区",value:"350403"},{label:"明溪县",value:"350421"},{label:"清流县",value:"350423"},{label:"宁化县",value:"350424"},{label:"大田县",value:"350425"},{label:"尤溪县",value:"350426"},{label:"沙县",value:"350427"},{label:"将乐县",value:"350428"},{label:"泰宁县",value:"350429"},{label:"建宁县",value:"350430"},{label:"永安市",value:"350481"}],[{label:"鲤城区",value:"350502"},{label:"丰泽区",value:"350503"},{label:"洛江区",value:"350504"},{label:"泉港区",value:"350505"},{label:"惠安县",value:"350521"},{label:"安溪县",value:"350524"},{label:"永春县",value:"350525"},{label:"德化县",value:"350526"},{label:"金门县",value:"350527"},{label:"石狮市",value:"350581"},{label:"晋江市",value:"350582"},{label:"南安市",value:"350583"}],[{label:"芗城区",value:"350602"},{label:"龙文区",value:"350603"},{label:"云霄县",value:"350622"},{label:"漳浦县",value:"350623"},{label:"诏安县",value:"350624"},{label:"长泰县",value:"350625"},{label:"东山县",value:"350626"},{label:"南靖县",value:"350627"},{label:"平和县",value:"350628"},{label:"华安县",value:"350629"},{label:"龙海市",value:"350681"}],[{label:"延平区",value:"350702"},{label:"建阳区",value:"350703"},{label:"顺昌县",value:"350721"},{label:"浦城县",value:"350722"},{label:"光泽县",value:"350723"},{label:"松溪县",value:"350724"},{label:"政和县",value:"350725"},{label:"邵武市",value:"350781"},{label:"武夷山市",value:"350782"},{label:"建瓯市",value:"350783"}],[{label:"新罗区",value:"350802"},{label:"永定区",value:"350803"},{label:"长汀县",value:"350821"},{label:"上杭县",value:"350823"},{label:"武平县",value:"350824"},{label:"连城县",value:"350825"},{label:"漳平市",value:"350881"}],[{label:"蕉城区",value:"350902"},{label:"霞浦县",value:"350921"},{label:"古田县",value:"350922"},{label:"屏南县",value:"350923"},{label:"寿宁县",value:"350924"},{label:"周宁县",value:"350925"},{label:"柘荣县",value:"350926"},{label:"福安市",value:"350981"},{label:"福鼎市",value:"350982"}]],[[{label:"东湖区",value:"360102"},{label:"西湖区",value:"360103"},{label:"青云谱区",value:"360104"},{label:"湾里区",value:"360105"},{label:"青山湖区",value:"360111"},{label:"新建区",value:"360112"},{label:"南昌县",value:"360121"},{label:"安义县",value:"360123"},{label:"进贤县",value:"360124"}],[{label:"昌江区",value:"360202"},{label:"珠山区",value:"360203"},{label:"浮梁县",value:"360222"},{label:"乐平市",value:"360281"}],[{label:"安源区",value:"360302"},{label:"湘东区",value:"360313"},{label:"莲花县",value:"360321"},{label:"上栗县",value:"360322"},{label:"芦溪县",value:"360323"}],[{label:"濂溪区",value:"360402"},{label:"浔阳区",value:"360403"},{label:"柴桑区",value:"360404"},{label:"武宁县",value:"360423"},{label:"修水县",value:"360424"},{label:"永修县",value:"360425"},{label:"德安县",value:"360426"},{label:"都昌县",value:"360428"},{label:"湖口县",value:"360429"},{label:"彭泽县",value:"360430"},{label:"瑞昌市",value:"360481"},{label:"共青城市",value:"360482"},{label:"庐山市",value:"360483"}],[{label:"渝水区",value:"360502"},{label:"分宜县",value:"360521"}],[{label:"月湖区",value:"360602"},{label:"余江县",value:"360622"},{label:"贵溪市",value:"360681"}],[{label:"章贡区",value:"360702"},{label:"南康区",value:"360703"},{label:"赣县区",value:"360704"},{label:"信丰县",value:"360722"},{label:"大余县",value:"360723"},{label:"上犹县",value:"360724"},{label:"崇义县",value:"360725"},{label:"安远县",value:"360726"},{label:"龙南县",value:"360727"},{label:"定南县",value:"360728"},{label:"全南县",value:"360729"},{label:"宁都县",value:"360730"},{label:"于都县",value:"360731"},{label:"兴国县",value:"360732"},{label:"会昌县",value:"360733"},{label:"寻乌县",value:"360734"},{label:"石城县",value:"360735"},{label:"瑞金市",value:"360781"}],[{label:"吉州区",value:"360802"},{label:"青原区",value:"360803"},{label:"吉安县",value:"360821"},{label:"吉水县",value:"360822"},{label:"峡江县",value:"360823"},{label:"新干县",value:"360824"},{label:"永丰县",value:"360825"},{label:"泰和县",value:"360826"},{label:"遂川县",value:"360827"},{label:"万安县",value:"360828"},{label:"安福县",value:"360829"},{label:"永新县",value:"360830"},{label:"井冈山市",value:"360881"}],[{label:"袁州区",value:"360902"},{label:"奉新县",value:"360921"},{label:"万载县",value:"360922"},{label:"上高县",value:"360923"},{label:"宜丰县",value:"360924"},{label:"靖安县",value:"360925"},{label:"铜鼓县",value:"360926"},{label:"丰城市",value:"360981"},{label:"樟树市",value:"360982"},{label:"高安市",value:"360983"}],[{label:"临川区",value:"361002"},{label:"东乡区",value:"361003"},{label:"南城县",value:"361021"},{label:"黎川县",value:"361022"},{label:"南丰县",value:"361023"},{label:"崇仁县",value:"361024"},{label:"乐安县",value:"361025"},{label:"宜黄县",value:"361026"},{label:"金溪县",value:"361027"},{label:"资溪县",value:"361028"},{label:"广昌县",value:"361030"}],[{label:"信州区",value:"361102"},{label:"广丰区",value:"361103"},{label:"上饶县",value:"361121"},{label:"玉山县",value:"361123"},{label:"铅山县",value:"361124"},{label:"横峰县",value:"361125"},{label:"弋阳县",value:"361126"},{label:"余干县",value:"361127"},{label:"鄱阳县",value:"361128"},{label:"万年县",value:"361129"},{label:"婺源县",value:"361130"},{label:"德兴市",value:"361181"}]],[[{label:"历下区",value:"370102"},{label:"市中区",value:"370103"},{label:"槐荫区",value:"370104"},{label:"天桥区",value:"370105"},{label:"历城区",value:"370112"},{label:"长清区",value:"370113"},{label:"章丘区",value:"370114"},{label:"平阴县",value:"370124"},{label:"济阳县",value:"370125"},{label:"商河县",value:"370126"},{label:"济南高新技术产业开发区",value:"370171"}],[{label:"市南区",value:"370202"},{label:"市北区",value:"370203"},{label:"黄岛区",value:"370211"},{label:"崂山区",value:"370212"},{label:"李沧区",value:"370213"},{label:"城阳区",value:"370214"},{label:"即墨区",value:"370215"},{label:"青岛高新技术产业开发区",value:"370271"},{label:"胶州市",value:"370281"},{label:"平度市",value:"370283"},{label:"莱西市",value:"370285"}],[{label:"淄川区",value:"370302"},{label:"张店区",value:"370303"},{label:"博山区",value:"370304"},{label:"临淄区",value:"370305"},{label:"周村区",value:"370306"},{label:"桓台县",value:"370321"},{label:"高青县",value:"370322"},{label:"沂源县",value:"370323"}],[{label:"市中区",value:"370402"},{label:"薛城区",value:"370403"},{label:"峄城区",value:"370404"},{label:"台儿庄区",value:"370405"},{label:"山亭区",value:"370406"},{label:"滕州市",value:"370481"}],[{label:"东营区",value:"370502"},{label:"河口区",value:"370503"},{label:"垦利区",value:"370505"},{label:"利津县",value:"370522"},{label:"广饶县",value:"370523"},{label:"东营经济技术开发区",value:"370571"},{label:"东营港经济开发区",value:"370572"}],[{label:"芝罘区",value:"370602"},{label:"福山区",value:"370611"},{label:"牟平区",value:"370612"},{label:"莱山区",value:"370613"},{label:"长岛县",value:"370634"},{label:"烟台高新技术产业开发区",value:"370671"},{label:"烟台经济技术开发区",value:"370672"},{label:"龙口市",value:"370681"},{label:"莱阳市",value:"370682"},{label:"莱州市",value:"370683"},{label:"蓬莱市",value:"370684"},{label:"招远市",value:"370685"},{label:"栖霞市",value:"370686"},{label:"海阳市",value:"370687"}],[{label:"潍城区",value:"370702"},{label:"寒亭区",value:"370703"},{label:"坊子区",value:"370704"},{label:"奎文区",value:"370705"},{label:"临朐县",value:"370724"},{label:"昌乐县",value:"370725"},{label:"潍坊滨海经济技术开发区",value:"370772"},{label:"青州市",value:"370781"},{label:"诸城市",value:"370782"},{label:"寿光市",value:"370783"},{label:"安丘市",value:"370784"},{label:"高密市",value:"370785"},{label:"昌邑市",value:"370786"}],[{label:"任城区",value:"370811"},{label:"兖州区",value:"370812"},{label:"微山县",value:"370826"},{label:"鱼台县",value:"370827"},{label:"金乡县",value:"370828"},{label:"嘉祥县",value:"370829"},{label:"汶上县",value:"370830"},{label:"泗水县",value:"370831"},{label:"梁山县",value:"370832"},{label:"济宁高新技术产业开发区",value:"370871"},{label:"曲阜市",value:"370881"},{label:"邹城市",value:"370883"}],[{label:"泰山区",value:"370902"},{label:"岱岳区",value:"370911"},{label:"宁阳县",value:"370921"},{label:"东平县",value:"370923"},{label:"新泰市",value:"370982"},{label:"肥城市",value:"370983"}],[{label:"环翠区",value:"371002"},{label:"文登区",value:"371003"},{label:"威海火炬高技术产业开发区",value:"371071"},{label:"威海经济技术开发区",value:"371072"},{label:"威海临港经济技术开发区",value:"371073"},{label:"荣成市",value:"371082"},{label:"乳山市",value:"371083"}],[{label:"东港区",value:"371102"},{label:"岚山区",value:"371103"},{label:"五莲县",value:"371121"},{label:"莒县",value:"371122"},{label:"日照经济技术开发区",value:"371171"},{label:"日照国际海洋城",value:"371172"}],[{label:"莱城区",value:"371202"},{label:"钢城区",value:"371203"}],[{label:"兰山区",value:"371302"},{label:"罗庄区",value:"371311"},{label:"河东区",value:"371312"},{label:"沂南县",value:"371321"},{label:"郯城县",value:"371322"},{label:"沂水县",value:"371323"},{label:"兰陵县",value:"371324"},{label:"费县",value:"371325"},{label:"平邑县",value:"371326"},{label:"莒南县",value:"371327"},{label:"蒙阴县",value:"371328"},{label:"临沭县",value:"371329"},{label:"临沂高新技术产业开发区",value:"371371"},{label:"临沂经济技术开发区",value:"371372"},{label:"临沂临港经济开发区",value:"371373"}],[{label:"德城区",value:"371402"},{label:"陵城区",value:"371403"},{label:"宁津县",value:"371422"},{label:"庆云县",value:"371423"},{label:"临邑县",value:"371424"},{label:"齐河县",value:"371425"},{label:"平原县",value:"371426"},{label:"夏津县",value:"371427"},{label:"武城县",value:"371428"},{label:"德州经济技术开发区",value:"371471"},{label:"德州运河经济开发区",value:"371472"},{label:"乐陵市",value:"371481"},{label:"禹城市",value:"371482"}],[{label:"东昌府区",value:"371502"},{label:"阳谷县",value:"371521"},{label:"莘县",value:"371522"},{label:"茌平县",value:"371523"},{label:"东阿县",value:"371524"},{label:"冠县",value:"371525"},{label:"高唐县",value:"371526"},{label:"临清市",value:"371581"}],[{label:"滨城区",value:"371602"},{label:"沾化区",value:"371603"},{label:"惠民县",value:"371621"},{label:"阳信县",value:"371622"},{label:"无棣县",value:"371623"},{label:"博兴县",value:"371625"},{label:"邹平县",value:"371626"}],[{label:"牡丹区",value:"371702"},{label:"定陶区",value:"371703"},{label:"曹县",value:"371721"},{label:"单县",value:"371722"},{label:"成武县",value:"371723"},{label:"巨野县",value:"371724"},{label:"郓城县",value:"371725"},{label:"鄄城县",value:"371726"},{label:"东明县",value:"371728"},{label:"菏泽经济技术开发区",value:"371771"},{label:"菏泽高新技术开发区",value:"371772"}]],[[{label:"中原区",value:"410102"},{label:"二七区",value:"410103"},{label:"管城回族区",value:"410104"},{label:"金水区",value:"410105"},{label:"上街区",value:"410106"},{label:"惠济区",value:"410108"},{label:"中牟县",value:"410122"},{label:"郑州经济技术开发区",value:"410171"},{label:"郑州高新技术产业开发区",value:"410172"},{label:"郑州航空港经济综合实验区",value:"410173"},{label:"巩义市",value:"410181"},{label:"荥阳市",value:"410182"},{label:"新密市",value:"410183"},{label:"新郑市",value:"410184"},{label:"登封市",value:"410185"}],[{label:"龙亭区",value:"410202"},{label:"顺河回族区",value:"410203"},{label:"鼓楼区",value:"410204"},{label:"禹王台区",value:"410205"},{label:"祥符区",value:"410212"},{label:"杞县",value:"410221"},{label:"通许县",value:"410222"},{label:"尉氏县",value:"410223"},{label:"兰考县",value:"410225"}],[{label:"老城区",value:"410302"},{label:"西工区",value:"410303"},{label:"瀍河回族区",value:"410304"},{label:"涧西区",value:"410305"},{label:"吉利区",value:"410306"},{label:"洛龙区",value:"410311"},{label:"孟津县",value:"410322"},{label:"新安县",value:"410323"},{label:"栾川县",value:"410324"},{label:"嵩县",value:"410325"},{label:"汝阳县",value:"410326"},{label:"宜阳县",value:"410327"},{label:"洛宁县",value:"410328"},{label:"伊川县",value:"410329"},{label:"洛阳高新技术产业开发区",value:"410371"},{label:"偃师市",value:"410381"}],[{label:"新华区",value:"410402"},{label:"卫东区",value:"410403"},{label:"石龙区",value:"410404"},{label:"湛河区",value:"410411"},{label:"宝丰县",value:"410421"},{label:"叶县",value:"410422"},{label:"鲁山县",value:"410423"},{label:"郏县",value:"410425"},{label:"平顶山高新技术产业开发区",value:"410471"},{label:"平顶山市新城区",value:"410472"},{label:"舞钢市",value:"410481"},{label:"汝州市",value:"410482"}],[{label:"文峰区",value:"410502"},{label:"北关区",value:"410503"},{label:"殷都区",value:"410505"},{label:"龙安区",value:"410506"},{label:"安阳县",value:"410522"},{label:"汤阴县",value:"410523"},{label:"滑县",value:"410526"},{label:"内黄县",value:"410527"},{label:"安阳高新技术产业开发区",value:"410571"},{label:"林州市",value:"410581"}],[{label:"鹤山区",value:"410602"},{label:"山城区",value:"410603"},{label:"淇滨区",value:"410611"},{label:"浚县",value:"410621"},{label:"淇县",value:"410622"},{label:"鹤壁经济技术开发区",value:"410671"}],[{label:"红旗区",value:"410702"},{label:"卫滨区",value:"410703"},{label:"凤泉区",value:"410704"},{label:"牧野区",value:"410711"},{label:"新乡县",value:"410721"},{label:"获嘉县",value:"410724"},{label:"原阳县",value:"410725"},{label:"延津县",value:"410726"},{label:"封丘县",value:"410727"},{label:"长垣县",value:"410728"},{label:"新乡高新技术产业开发区",value:"410771"},{label:"新乡经济技术开发区",value:"410772"},{label:"新乡市平原城乡一体化示范区",value:"410773"},{label:"卫辉市",value:"410781"},{label:"辉县市",value:"410782"}],[{label:"解放区",value:"410802"},{label:"中站区",value:"410803"},{label:"马村区",value:"410804"},{label:"山阳区",value:"410811"},{label:"修武县",value:"410821"},{label:"博爱县",value:"410822"},{label:"武陟县",value:"410823"},{label:"温县",value:"410825"},{label:"焦作城乡一体化示范区",value:"410871"},{label:"沁阳市",value:"410882"},{label:"孟州市",value:"410883"}],[{label:"华龙区",value:"410902"},{label:"清丰县",value:"410922"},{label:"南乐县",value:"410923"},{label:"范县",value:"410926"},{label:"台前县",value:"410927"},{label:"濮阳县",value:"410928"},{label:"河南濮阳工业园区",value:"410971"},{label:"濮阳经济技术开发区",value:"410972"}],[{label:"魏都区",value:"411002"},{label:"建安区",value:"411003"},{label:"鄢陵县",value:"411024"},{label:"襄城县",value:"411025"},{label:"许昌经济技术开发区",value:"411071"},{label:"禹州市",value:"411081"},{label:"长葛市",value:"411082"}],[{label:"源汇区",value:"411102"},{label:"郾城区",value:"411103"},{label:"召陵区",value:"411104"},{label:"舞阳县",value:"411121"},{label:"临颍县",value:"411122"},{label:"漯河经济技术开发区",value:"411171"}],[{label:"湖滨区",value:"411202"},{label:"陕州区",value:"411203"},{label:"渑池县",value:"411221"},{label:"卢氏县",value:"411224"},{label:"河南三门峡经济开发区",value:"411271"},{label:"义马市",value:"411281"},{label:"灵宝市",value:"411282"}],[{label:"宛城区",value:"411302"},{label:"卧龙区",value:"411303"},{label:"南召县",value:"411321"},{label:"方城县",value:"411322"},{label:"西峡县",value:"411323"},{label:"镇平县",value:"411324"},{label:"内乡县",value:"411325"},{label:"淅川县",value:"411326"},{label:"社旗县",value:"411327"},{label:"唐河县",value:"411328"},{label:"新野县",value:"411329"},{label:"桐柏县",value:"411330"},{label:"南阳高新技术产业开发区",value:"411371"},{label:"南阳市城乡一体化示范区",value:"411372"},{label:"邓州市",value:"411381"}],[{label:"梁园区",value:"411402"},{label:"睢阳区",value:"411403"},{label:"民权县",value:"411421"},{label:"睢县",value:"411422"},{label:"宁陵县",value:"411423"},{label:"柘城县",value:"411424"},{label:"虞城县",value:"411425"},{label:"夏邑县",value:"411426"},{label:"豫东综合物流产业聚集区",value:"411471"},{label:"河南商丘经济开发区",value:"411472"},{label:"永城市",value:"411481"}],[{label:"浉河区",value:"411502"},{label:"平桥区",value:"411503"},{label:"罗山县",value:"411521"},{label:"光山县",value:"411522"},{label:"新县",value:"411523"},{label:"商城县",value:"411524"},{label:"固始县",value:"411525"},{label:"潢川县",value:"411526"},{label:"淮滨县",value:"411527"},{label:"息县",value:"411528"},{label:"信阳高新技术产业开发区",value:"411571"}],[{label:"川汇区",value:"411602"},{label:"扶沟县",value:"411621"},{label:"西华县",value:"411622"},{label:"商水县",value:"411623"},{label:"沈丘县",value:"411624"},{label:"郸城县",value:"411625"},{label:"淮阳县",value:"411626"},{label:"太康县",value:"411627"},{label:"鹿邑县",value:"411628"},{label:"河南周口经济开发区",value:"411671"},{label:"项城市",value:"411681"}],[{label:"驿城区",value:"411702"},{label:"西平县",value:"411721"},{label:"上蔡县",value:"411722"},{label:"平舆县",value:"411723"},{label:"正阳县",value:"411724"},{label:"确山县",value:"411725"},{label:"泌阳县",value:"411726"},{label:"汝南县",value:"411727"},{label:"遂平县",value:"411728"},{label:"新蔡县",value:"411729"},{label:"河南驻马店经济开发区",value:"411771"}],[{label:"济源市",value:"419001"}]],[[{label:"江岸区",value:"420102"},{label:"江汉区",value:"420103"},{label:"硚口区",value:"420104"},{label:"汉阳区",value:"420105"},{label:"武昌区",value:"420106"},{label:"青山区",value:"420107"},{label:"洪山区",value:"420111"},{label:"东西湖区",value:"420112"},{label:"汉南区",value:"420113"},{label:"蔡甸区",value:"420114"},{label:"江夏区",value:"420115"},{label:"黄陂区",value:"420116"},{label:"新洲区",value:"420117"}],[{label:"黄石港区",value:"420202"},{label:"西塞山区",value:"420203"},{label:"下陆区",value:"420204"},{label:"铁山区",value:"420205"},{label:"阳新县",value:"420222"},{label:"大冶市",value:"420281"}],[{label:"茅箭区",value:"420302"},{label:"张湾区",value:"420303"},{label:"郧阳区",value:"420304"},{label:"郧西县",value:"420322"},{label:"竹山县",value:"420323"},{label:"竹溪县",value:"420324"},{label:"房县",value:"420325"},{label:"丹江口市",value:"420381"}],[{label:"西陵区",value:"420502"},{label:"伍家岗区",value:"420503"},{label:"点军区",value:"420504"},{label:"猇亭区",value:"420505"},{label:"夷陵区",value:"420506"},{label:"远安县",value:"420525"},{label:"兴山县",value:"420526"},{label:"秭归县",value:"420527"},{label:"长阳土家族自治县",value:"420528"},{label:"五峰土家族自治县",value:"420529"},{label:"宜都市",value:"420581"},{label:"当阳市",value:"420582"},{label:"枝江市",value:"420583"}],[{label:"襄城区",value:"420602"},{label:"樊城区",value:"420606"},{label:"襄州区",value:"420607"},{label:"南漳县",value:"420624"},{label:"谷城县",value:"420625"},{label:"保康县",value:"420626"},{label:"老河口市",value:"420682"},{label:"枣阳市",value:"420683"},{label:"宜城市",value:"420684"}],[{label:"梁子湖区",value:"420702"},{label:"华容区",value:"420703"},{label:"鄂城区",value:"420704"}],[{label:"东宝区",value:"420802"},{label:"掇刀区",value:"420804"},{label:"京山县",value:"420821"},{label:"沙洋县",value:"420822"},{label:"钟祥市",value:"420881"}],[{label:"孝南区",value:"420902"},{label:"孝昌县",value:"420921"},{label:"大悟县",value:"420922"},{label:"云梦县",value:"420923"},{label:"应城市",value:"420981"},{label:"安陆市",value:"420982"},{label:"汉川市",value:"420984"}],[{label:"沙市区",value:"421002"},{label:"荆州区",value:"421003"},{label:"公安县",value:"421022"},{label:"监利县",value:"421023"},{label:"江陵县",value:"421024"},{label:"荆州经济技术开发区",value:"421071"},{label:"石首市",value:"421081"},{label:"洪湖市",value:"421083"},{label:"松滋市",value:"421087"}],[{label:"黄州区",value:"421102"},{label:"团风县",value:"421121"},{label:"红安县",value:"421122"},{label:"罗田县",value:"421123"},{label:"英山县",value:"421124"},{label:"浠水县",value:"421125"},{label:"蕲春县",value:"421126"},{label:"黄梅县",value:"421127"},{label:"龙感湖管理区",value:"421171"},{label:"麻城市",value:"421181"},{label:"武穴市",value:"421182"}],[{label:"咸安区",value:"421202"},{label:"嘉鱼县",value:"421221"},{label:"通城县",value:"421222"},{label:"崇阳县",value:"421223"},{label:"通山县",value:"421224"},{label:"赤壁市",value:"421281"}],[{label:"曾都区",value:"421303"},{label:"随县",value:"421321"},{label:"广水市",value:"421381"}],[{label:"恩施市",value:"422801"},{label:"利川市",value:"422802"},{label:"建始县",value:"422822"},{label:"巴东县",value:"422823"},{label:"宣恩县",value:"422825"},{label:"咸丰县",value:"422826"},{label:"来凤县",value:"422827"},{label:"鹤峰县",value:"422828"}],[{label:"仙桃市",value:"429004"},{label:"潜江市",value:"429005"},{label:"天门市",value:"429006"},{label:"神农架林区",value:"429021"}]],[[{label:"芙蓉区",value:"430102"},{label:"天心区",value:"430103"},{label:"岳麓区",value:"430104"},{label:"开福区",value:"430105"},{label:"雨花区",value:"430111"},{label:"望城区",value:"430112"},{label:"长沙县",value:"430121"},{label:"浏阳市",value:"430181"},{label:"宁乡市",value:"430182"}],[{label:"荷塘区",value:"430202"},{label:"芦淞区",value:"430203"},{label:"石峰区",value:"430204"},{label:"天元区",value:"430211"},{label:"株洲县",value:"430221"},{label:"攸县",value:"430223"},{label:"茶陵县",value:"430224"},{label:"炎陵县",value:"430225"},{label:"云龙示范区",value:"430271"},{label:"醴陵市",value:"430281"}],[{label:"雨湖区",value:"430302"},{label:"岳塘区",value:"430304"},{label:"湘潭县",value:"430321"},{label:"湖南湘潭高新技术产业园区",value:"430371"},{label:"湘潭昭山示范区",value:"430372"},{label:"湘潭九华示范区",value:"430373"},{label:"湘乡市",value:"430381"},{label:"韶山市",value:"430382"}],[{label:"珠晖区",value:"430405"},{label:"雁峰区",value:"430406"},{label:"石鼓区",value:"430407"},{label:"蒸湘区",value:"430408"},{label:"南岳区",value:"430412"},{label:"衡阳县",value:"430421"},{label:"衡南县",value:"430422"},{label:"衡山县",value:"430423"},{label:"衡东县",value:"430424"},{label:"祁东县",value:"430426"},{label:"衡阳综合保税区",value:"430471"},{label:"湖南衡阳高新技术产业园区",value:"430472"},{label:"湖南衡阳松木经济开发区",value:"430473"},{label:"耒阳市",value:"430481"},{label:"常宁市",value:"430482"}],[{label:"双清区",value:"430502"},{label:"大祥区",value:"430503"},{label:"北塔区",value:"430511"},{label:"邵东县",value:"430521"},{label:"新邵县",value:"430522"},{label:"邵阳县",value:"430523"},{label:"隆回县",value:"430524"},{label:"洞口县",value:"430525"},{label:"绥宁县",value:"430527"},{label:"新宁县",value:"430528"},{label:"城步苗族自治县",value:"430529"},{label:"武冈市",value:"430581"}],[{label:"岳阳楼区",value:"430602"},{label:"云溪区",value:"430603"},{label:"君山区",value:"430611"},{label:"岳阳县",value:"430621"},{label:"华容县",value:"430623"},{label:"湘阴县",value:"430624"},{label:"平江县",value:"430626"},{label:"岳阳市屈原管理区",value:"430671"},{label:"汨罗市",value:"430681"},{label:"临湘市",value:"430682"}],[{label:"武陵区",value:"430702"},{label:"鼎城区",value:"430703"},{label:"安乡县",value:"430721"},{label:"汉寿县",value:"430722"},{label:"澧县",value:"430723"},{label:"临澧县",value:"430724"},{label:"桃源县",value:"430725"},{label:"石门县",value:"430726"},{label:"常德市西洞庭管理区",value:"430771"},{label:"津市市",value:"430781"}],[{label:"永定区",value:"430802"},{label:"武陵源区",value:"430811"},{label:"慈利县",value:"430821"},{label:"桑植县",value:"430822"}],[{label:"资阳区",value:"430902"},{label:"赫山区",value:"430903"},{label:"南县",value:"430921"},{label:"桃江县",value:"430922"},{label:"安化县",value:"430923"},{label:"益阳市大通湖管理区",value:"430971"},{label:"湖南益阳高新技术产业园区",value:"430972"},{label:"沅江市",value:"430981"}],[{label:"北湖区",value:"431002"},{label:"苏仙区",value:"431003"},{label:"桂阳县",value:"431021"},{label:"宜章县",value:"431022"},{label:"永兴县",value:"431023"},{label:"嘉禾县",value:"431024"},{label:"临武县",value:"431025"},{label:"汝城县",value:"431026"},{label:"桂东县",value:"431027"},{label:"安仁县",value:"431028"},{label:"资兴市",value:"431081"}],[{label:"零陵区",value:"431102"},{label:"冷水滩区",value:"431103"},{label:"祁阳县",value:"431121"},{label:"东安县",value:"431122"},{label:"双牌县",value:"431123"},{label:"道县",value:"431124"},{label:"江永县",value:"431125"},{label:"宁远县",value:"431126"},{label:"蓝山县",value:"431127"},{label:"新田县",value:"431128"},{label:"江华瑶族自治县",value:"431129"},{label:"永州经济技术开发区",value:"431171"},{label:"永州市金洞管理区",value:"431172"},{label:"永州市回龙圩管理区",value:"431173"}],[{label:"鹤城区",value:"431202"},{label:"中方县",value:"431221"},{label:"沅陵县",value:"431222"},{label:"辰溪县",value:"431223"},{label:"溆浦县",value:"431224"},{label:"会同县",value:"431225"},{label:"麻阳苗族自治县",value:"431226"},{label:"新晃侗族自治县",value:"431227"},{label:"芷江侗族自治县",value:"431228"},{label:"靖州苗族侗族自治县",value:"431229"},{label:"通道侗族自治县",value:"431230"},{label:"怀化市洪江管理区",value:"431271"},{label:"洪江市",value:"431281"}],[{label:"娄星区",value:"431302"},{label:"双峰县",value:"431321"},{label:"新化县",value:"431322"},{label:"冷水江市",value:"431381"},{label:"涟源市",value:"431382"}],[{label:"吉首市",value:"433101"},{label:"泸溪县",value:"433122"},{label:"凤凰县",value:"433123"},{label:"花垣县",value:"433124"},{label:"保靖县",value:"433125"},{label:"古丈县",value:"433126"},{label:"永顺县",value:"433127"},{label:"龙山县",value:"433130"},{label:"湖南吉首经济开发区",value:"433172"},{label:"湖南永顺经济开发区",value:"433173"}]],[[{label:"荔湾区",value:"440103"},{label:"越秀区",value:"440104"},{label:"海珠区",value:"440105"},{label:"天河区",value:"440106"},{label:"白云区",value:"440111"},{label:"黄埔区",value:"440112"},{label:"番禺区",value:"440113"},{label:"花都区",value:"440114"},{label:"南沙区",value:"440115"},{label:"从化区",value:"440117"},{label:"增城区",value:"440118"}],[{label:"武江区",value:"440203"},{label:"浈江区",value:"440204"},{label:"曲江区",value:"440205"},{label:"始兴县",value:"440222"},{label:"仁化县",value:"440224"},{label:"翁源县",value:"440229"},{label:"乳源瑶族自治县",value:"440232"},{label:"新丰县",value:"440233"},{label:"乐昌市",value:"440281"},{label:"南雄市",value:"440282"}],[{label:"罗湖区",value:"440303"},{label:"福田区",value:"440304"},{label:"南山区",value:"440305"},{label:"宝安区",value:"440306"},{label:"龙岗区",value:"440307"},{label:"盐田区",value:"440308"},{label:"龙华区",value:"440309"},{label:"坪山区",value:"440310"}],[{label:"香洲区",value:"440402"},{label:"斗门区",value:"440403"},{label:"金湾区",value:"440404"}],[{label:"龙湖区",value:"440507"},{label:"金平区",value:"440511"},{label:"濠江区",value:"440512"},{label:"潮阳区",value:"440513"},{label:"潮南区",value:"440514"},{label:"澄海区",value:"440515"},{label:"南澳县",value:"440523"}],[{label:"禅城区",value:"440604"},{label:"南海区",value:"440605"},{label:"顺德区",value:"440606"},{label:"三水区",value:"440607"},{label:"高明区",value:"440608"}],[{label:"蓬江区",value:"440703"},{label:"江海区",value:"440704"},{label:"新会区",value:"440705"},{label:"台山市",value:"440781"},{label:"开平市",value:"440783"},{label:"鹤山市",value:"440784"},{label:"恩平市",value:"440785"}],[{label:"赤坎区",value:"440802"},{label:"霞山区",value:"440803"},{label:"坡头区",value:"440804"},{label:"麻章区",value:"440811"},{label:"遂溪县",value:"440823"},{label:"徐闻县",value:"440825"},{label:"廉江市",value:"440881"},{label:"雷州市",value:"440882"},{label:"吴川市",value:"440883"}],[{label:"茂南区",value:"440902"},{label:"电白区",value:"440904"},{label:"高州市",value:"440981"},{label:"化州市",value:"440982"},{label:"信宜市",value:"440983"}],[{label:"端州区",value:"441202"},{label:"鼎湖区",value:"441203"},{label:"高要区",value:"441204"},{label:"广宁县",value:"441223"},{label:"怀集县",value:"441224"},{label:"封开县",value:"441225"},{label:"德庆县",value:"441226"},{label:"四会市",value:"441284"}],[{label:"惠城区",value:"441302"},{label:"惠阳区",value:"441303"},{label:"博罗县",value:"441322"},{label:"惠东县",value:"441323"},{label:"龙门县",value:"441324"}],[{label:"梅江区",value:"441402"},{label:"梅县区",value:"441403"},{label:"大埔县",value:"441422"},{label:"丰顺县",value:"441423"},{label:"五华县",value:"441424"},{label:"平远县",value:"441426"},{label:"蕉岭县",value:"441427"},{label:"兴宁市",value:"441481"}],[{label:"城区",value:"441502"},{label:"海丰县",value:"441521"},{label:"陆河县",value:"441523"},{label:"陆丰市",value:"441581"}],[{label:"源城区",value:"441602"},{label:"紫金县",value:"441621"},{label:"龙川县",value:"441622"},{label:"连平县",value:"441623"},{label:"和平县",value:"441624"},{label:"东源县",value:"441625"}],[{label:"江城区",value:"441702"},{label:"阳东区",value:"441704"},{label:"阳西县",value:"441721"},{label:"阳春市",value:"441781"}],[{label:"清城区",value:"441802"},{label:"清新区",value:"441803"},{label:"佛冈县",value:"441821"},{label:"阳山县",value:"441823"},{label:"连山壮族瑶族自治县",value:"441825"},{label:"连南瑶族自治县",value:"441826"},{label:"英德市",value:"441881"},{label:"连州市",value:"441882"}],[{label:"东莞市",value:"441900"}],[{label:"中山市",value:"442000"}],[{label:"湘桥区",value:"445102"},{label:"潮安区",value:"445103"},{label:"饶平县",value:"445122"}],[{label:"榕城区",value:"445202"},{label:"揭东区",value:"445203"},{label:"揭西县",value:"445222"},{label:"惠来县",value:"445224"},{label:"普宁市",value:"445281"}],[{label:"云城区",value:"445302"},{label:"云安区",value:"445303"},{label:"新兴县",value:"445321"},{label:"郁南县",value:"445322"},{label:"罗定市",value:"445381"}]],[[{label:"兴宁区",value:"450102"},{label:"青秀区",value:"450103"},{label:"江南区",value:"450105"},{label:"西乡塘区",value:"450107"},{label:"良庆区",value:"450108"},{label:"邕宁区",value:"450109"},{label:"武鸣区",value:"450110"},{label:"隆安县",value:"450123"},{label:"马山县",value:"450124"},{label:"上林县",value:"450125"},{label:"宾阳县",value:"450126"},{label:"横县",value:"450127"}],[{label:"城中区",value:"450202"},{label:"鱼峰区",value:"450203"},{label:"柳南区",value:"450204"},{label:"柳北区",value:"450205"},{label:"柳江区",value:"450206"},{label:"柳城县",value:"450222"},{label:"鹿寨县",value:"450223"},{label:"融安县",value:"450224"},{label:"融水苗族自治县",value:"450225"},{label:"三江侗族自治县",value:"450226"}],[{label:"秀峰区",value:"450302"},{label:"叠彩区",value:"450303"},{label:"象山区",value:"450304"},{label:"七星区",value:"450305"},{label:"雁山区",value:"450311"},{label:"临桂区",value:"450312"},{label:"阳朔县",value:"450321"},{label:"灵川县",value:"450323"},{label:"全州县",value:"450324"},{label:"兴安县",value:"450325"},{label:"永福县",value:"450326"},{label:"灌阳县",value:"450327"},{label:"龙胜各族自治县",value:"450328"},{label:"资源县",value:"450329"},{label:"平乐县",value:"450330"},{label:"荔浦县",value:"450331"},{label:"恭城瑶族自治县",value:"450332"}],[{label:"万秀区",value:"450403"},{label:"长洲区",value:"450405"},{label:"龙圩区",value:"450406"},{label:"苍梧县",value:"450421"},{label:"藤县",value:"450422"},{label:"蒙山县",value:"450423"},{label:"岑溪市",value:"450481"}],[{label:"海城区",value:"450502"},{label:"银海区",value:"450503"},{label:"铁山港区",value:"450512"},{label:"合浦县",value:"450521"}],[{label:"港口区",value:"450602"},{label:"防城区",value:"450603"},{label:"上思县",value:"450621"},{label:"东兴市",value:"450681"}],[{label:"钦南区",value:"450702"},{label:"钦北区",value:"450703"},{label:"灵山县",value:"450721"},{label:"浦北县",value:"450722"}],[{label:"港北区",value:"450802"},{label:"港南区",value:"450803"},{label:"覃塘区",value:"450804"},{label:"平南县",value:"450821"},{label:"桂平市",value:"450881"}],[{label:"玉州区",value:"450902"},{label:"福绵区",value:"450903"},{label:"容县",value:"450921"},{label:"陆川县",value:"450922"},{label:"博白县",value:"450923"},{label:"兴业县",value:"450924"},{label:"北流市",value:"450981"}],[{label:"右江区",value:"451002"},{label:"田阳县",value:"451021"},{label:"田东县",value:"451022"},{label:"平果县",value:"451023"},{label:"德保县",value:"451024"},{label:"那坡县",value:"451026"},{label:"凌云县",value:"451027"},{label:"乐业县",value:"451028"},{label:"田林县",value:"451029"},{label:"西林县",value:"451030"},{label:"隆林各族自治县",value:"451031"},{label:"靖西市",value:"451081"}],[{label:"八步区",value:"451102"},{label:"平桂区",value:"451103"},{label:"昭平县",value:"451121"},{label:"钟山县",value:"451122"},{label:"富川瑶族自治县",value:"451123"}],[{label:"金城江区",value:"451202"},{label:"宜州区",value:"451203"},{label:"南丹县",value:"451221"},{label:"天峨县",value:"451222"},{label:"凤山县",value:"451223"},{label:"东兰县",value:"451224"},{label:"罗城仫佬族自治县",value:"451225"},{label:"环江毛南族自治县",value:"451226"},{label:"巴马瑶族自治县",value:"451227"},{label:"都安瑶族自治县",value:"451228"},{label:"大化瑶族自治县",value:"451229"}],[{label:"兴宾区",value:"451302"},{label:"忻城县",value:"451321"},{label:"象州县",value:"451322"},{label:"武宣县",value:"451323"},{label:"金秀瑶族自治县",value:"451324"},{label:"合山市",value:"451381"}],[{label:"江州区",value:"451402"},{label:"扶绥县",value:"451421"},{label:"宁明县",value:"451422"},{label:"龙州县",value:"451423"},{label:"大新县",value:"451424"},{label:"天等县",value:"451425"},{label:"凭祥市",value:"451481"}]],[[{label:"秀英区",value:"460105"},{label:"龙华区",value:"460106"},{label:"琼山区",value:"460107"},{label:"美兰区",value:"460108"}],[{label:"海棠区",value:"460202"},{label:"吉阳区",value:"460203"},{label:"天涯区",value:"460204"},{label:"崖州区",value:"460205"}],[{label:"西沙群岛",value:"460321"},{label:"南沙群岛",value:"460322"},{label:"中沙群岛的岛礁及其海域",value:"460323"}],[{label:"儋州市",value:"460400"}],[{label:"五指山市",value:"469001"},{label:"琼海市",value:"469002"},{label:"文昌市",value:"469005"},{label:"万宁市",value:"469006"},{label:"东方市",value:"469007"},{label:"定安县",value:"469021"},{label:"屯昌县",value:"469022"},{label:"澄迈县",value:"469023"},{label:"临高县",value:"469024"},{label:"白沙黎族自治县",value:"469025"},{label:"昌江黎族自治县",value:"469026"},{label:"乐东黎族自治县",value:"469027"},{label:"陵水黎族自治县",value:"469028"},{label:"保亭黎族苗族自治县",value:"469029"},{label:"琼中黎族苗族自治县",value:"469030"}]],[[{label:"万州区",value:"500101"},{label:"涪陵区",value:"500102"},{label:"渝中区",value:"500103"},{label:"大渡口区",value:"500104"},{label:"江北区",value:"500105"},{label:"沙坪坝区",value:"500106"},{label:"九龙坡区",value:"500107"},{label:"南岸区",value:"500108"},{label:"北碚区",value:"500109"},{label:"綦江区",value:"500110"},{label:"大足区",value:"500111"},{label:"渝北区",value:"500112"},{label:"巴南区",value:"500113"},{label:"黔江区",value:"500114"},{label:"长寿区",value:"500115"},{label:"江津区",value:"500116"},{label:"合川区",value:"500117"},{label:"永川区",value:"500118"},{label:"南川区",value:"500119"},{label:"璧山区",value:"500120"},{label:"铜梁区",value:"500151"},{label:"潼南区",value:"500152"},{label:"荣昌区",value:"500153"},{label:"开州区",value:"500154"},{label:"梁平区",value:"500155"},{label:"武隆区",value:"500156"}],[{label:"城口县",value:"500229"},{label:"丰都县",value:"500230"},{label:"垫江县",value:"500231"},{label:"忠县",value:"500233"},{label:"云阳县",value:"500235"},{label:"奉节县",value:"500236"},{label:"巫山县",value:"500237"},{label:"巫溪县",value:"500238"},{label:"石柱土家族自治县",value:"500240"},{label:"秀山土家族苗族自治县",value:"500241"},{label:"酉阳土家族苗族自治县",value:"500242"},{label:"彭水苗族土家族自治县",value:"500243"}]],[[{label:"锦江区",value:"510104"},{label:"青羊区",value:"510105"},{label:"金牛区",value:"510106"},{label:"武侯区",value:"510107"},{label:"成华区",value:"510108"},{label:"龙泉驿区",value:"510112"},{label:"青白江区",value:"510113"},{label:"新都区",value:"510114"},{label:"温江区",value:"510115"},{label:"双流区",value:"510116"},{label:"郫都区",value:"510117"},{label:"金堂县",value:"510121"},{label:"大邑县",value:"510129"},{label:"蒲江县",value:"510131"},{label:"新津县",value:"510132"},{label:"都江堰市",value:"510181"},{label:"彭州市",value:"510182"},{label:"邛崃市",value:"510183"},{label:"崇州市",value:"510184"},{label:"简阳市",value:"510185"}],[{label:"自流井区",value:"510302"},{label:"贡井区",value:"510303"},{label:"大安区",value:"510304"},{label:"沿滩区",value:"510311"},{label:"荣县",value:"510321"},{label:"富顺县",value:"510322"}],[{label:"东区",value:"510402"},{label:"西区",value:"510403"},{label:"仁和区",value:"510411"},{label:"米易县",value:"510421"},{label:"盐边县",value:"510422"}],[{label:"江阳区",value:"510502"},{label:"纳溪区",value:"510503"},{label:"龙马潭区",value:"510504"},{label:"泸县",value:"510521"},{label:"合江县",value:"510522"},{label:"叙永县",value:"510524"},{label:"古蔺县",value:"510525"}],[{label:"旌阳区",value:"510603"},{label:"罗江区",value:"510604"},{label:"中江县",value:"510623"},{label:"广汉市",value:"510681"},{label:"什邡市",value:"510682"},{label:"绵竹市",value:"510683"}],[{label:"涪城区",value:"510703"},{label:"游仙区",value:"510704"},{label:"安州区",value:"510705"},{label:"三台县",value:"510722"},{label:"盐亭县",value:"510723"},{label:"梓潼县",value:"510725"},{label:"北川羌族自治县",value:"510726"},{label:"平武县",value:"510727"},{label:"江油市",value:"510781"}],[{label:"利州区",value:"510802"},{label:"昭化区",value:"510811"},{label:"朝天区",value:"510812"},{label:"旺苍县",value:"510821"},{label:"青川县",value:"510822"},{label:"剑阁县",value:"510823"},{label:"苍溪县",value:"510824"}],[{label:"船山区",value:"510903"},{label:"安居区",value:"510904"},{label:"蓬溪县",value:"510921"},{label:"射洪县",value:"510922"},{label:"大英县",value:"510923"}],[{label:"市中区",value:"511002"},{label:"东兴区",value:"511011"},{label:"威远县",value:"511024"},{label:"资中县",value:"511025"},{label:"内江经济开发区",value:"511071"},{label:"隆昌市",value:"511083"}],[{label:"市中区",value:"511102"},{label:"沙湾区",value:"511111"},{label:"五通桥区",value:"511112"},{label:"金口河区",value:"511113"},{label:"犍为县",value:"511123"},{label:"井研县",value:"511124"},{label:"夹江县",value:"511126"},{label:"沐川县",value:"511129"},{label:"峨边彝族自治县",value:"511132"},{label:"马边彝族自治县",value:"511133"},{label:"峨眉山市",value:"511181"}],[{label:"顺庆区",value:"511302"},{label:"高坪区",value:"511303"},{label:"嘉陵区",value:"511304"},{label:"南部县",value:"511321"},{label:"营山县",value:"511322"},{label:"蓬安县",value:"511323"},{label:"仪陇县",value:"511324"},{label:"西充县",value:"511325"},{label:"阆中市",value:"511381"}],[{label:"东坡区",value:"511402"},{label:"彭山区",value:"511403"},{label:"仁寿县",value:"511421"},{label:"洪雅县",value:"511423"},{label:"丹棱县",value:"511424"},{label:"青神县",value:"511425"}],[{label:"翠屏区",value:"511502"},{label:"南溪区",value:"511503"},{label:"宜宾县",value:"511521"},{label:"江安县",value:"511523"},{label:"长宁县",value:"511524"},{label:"高县",value:"511525"},{label:"珙县",value:"511526"},{label:"筠连县",value:"511527"},{label:"兴文县",value:"511528"},{label:"屏山县",value:"511529"}],[{label:"广安区",value:"511602"},{label:"前锋区",value:"511603"},{label:"岳池县",value:"511621"},{label:"武胜县",value:"511622"},{label:"邻水县",value:"511623"},{label:"华蓥市",value:"511681"}],[{label:"通川区",value:"511702"},{label:"达川区",value:"511703"},{label:"宣汉县",value:"511722"},{label:"开江县",value:"511723"},{label:"大竹县",value:"511724"},{label:"渠县",value:"511725"},{label:"达州经济开发区",value:"511771"},{label:"万源市",value:"511781"}],[{label:"雨城区",value:"511802"},{label:"名山区",value:"511803"},{label:"荥经县",value:"511822"},{label:"汉源县",value:"511823"},{label:"石棉县",value:"511824"},{label:"天全县",value:"511825"},{label:"芦山县",value:"511826"},{label:"宝兴县",value:"511827"}],[{label:"巴州区",value:"511902"},{label:"恩阳区",value:"511903"},{label:"通江县",value:"511921"},{label:"南江县",value:"511922"},{label:"平昌县",value:"511923"},{label:"巴中经济开发区",value:"511971"}],[{label:"雁江区",value:"512002"},{label:"安岳县",value:"512021"},{label:"乐至县",value:"512022"}],[{label:"马尔康市",value:"513201"},{label:"汶川县",value:"513221"},{label:"理县",value:"513222"},{label:"茂县",value:"513223"},{label:"松潘县",value:"513224"},{label:"九寨沟县",value:"513225"},{label:"金川县",value:"513226"},{label:"小金县",value:"513227"},{label:"黑水县",value:"513228"},{label:"壤塘县",value:"513230"},{label:"阿坝县",value:"513231"},{label:"若尔盖县",value:"513232"},{label:"红原县",value:"513233"}],[{label:"康定市",value:"513301"},{label:"泸定县",value:"513322"},{label:"丹巴县",value:"513323"},{label:"九龙县",value:"513324"},{label:"雅江县",value:"513325"},{label:"道孚县",value:"513326"},{label:"炉霍县",value:"513327"},{label:"甘孜县",value:"513328"},{label:"新龙县",value:"513329"},{label:"德格县",value:"513330"},{label:"白玉县",value:"513331"},{label:"石渠县",value:"513332"},{label:"色达县",value:"513333"},{label:"理塘县",value:"513334"},{label:"巴塘县",value:"513335"},{label:"乡城县",value:"513336"},{label:"稻城县",value:"513337"},{label:"得荣县",value:"513338"}],[{label:"西昌市",value:"513401"},{label:"木里藏族自治县",value:"513422"},{label:"盐源县",value:"513423"},{label:"德昌县",value:"513424"},{label:"会理县",value:"513425"},{label:"会东县",value:"513426"},{label:"宁南县",value:"513427"},{label:"普格县",value:"513428"},{label:"布拖县",value:"513429"},{label:"金阳县",value:"513430"},{label:"昭觉县",value:"513431"},{label:"喜德县",value:"513432"},{label:"冕宁县",value:"513433"},{label:"越西县",value:"513434"},{label:"甘洛县",value:"513435"},{label:"美姑县",value:"513436"},{label:"雷波县",value:"513437"}]],[[{label:"南明区",value:"520102"},{label:"云岩区",value:"520103"},{label:"花溪区",value:"520111"},{label:"乌当区",value:"520112"},{label:"白云区",value:"520113"},{label:"观山湖区",value:"520115"},{label:"开阳县",value:"520121"},{label:"息烽县",value:"520122"},{label:"修文县",value:"520123"},{label:"清镇市",value:"520181"}],[{label:"钟山区",value:"520201"},{label:"六枝特区",value:"520203"},{label:"水城县",value:"520221"},{label:"盘州市",value:"520281"}],[{label:"红花岗区",value:"520302"},{label:"汇川区",value:"520303"},{label:"播州区",value:"520304"},{label:"桐梓县",value:"520322"},{label:"绥阳县",value:"520323"},{label:"正安县",value:"520324"},{label:"道真仡佬族苗族自治县",value:"520325"},{label:"务川仡佬族苗族自治县",value:"520326"},{label:"凤冈县",value:"520327"},{label:"湄潭县",value:"520328"},{label:"余庆县",value:"520329"},{label:"习水县",value:"520330"},{label:"赤水市",value:"520381"},{label:"仁怀市",value:"520382"}],[{label:"西秀区",value:"520402"},{label:"平坝区",value:"520403"},{label:"普定县",value:"520422"},{label:"镇宁布依族苗族自治县",value:"520423"},{label:"关岭布依族苗族自治县",value:"520424"},{label:"紫云苗族布依族自治县",value:"520425"}],[{label:"七星关区",value:"520502"},{label:"大方县",value:"520521"},{label:"黔西县",value:"520522"},{label:"金沙县",value:"520523"},{label:"织金县",value:"520524"},{label:"纳雍县",value:"520525"},{label:"威宁彝族回族苗族自治县",value:"520526"},{label:"赫章县",value:"520527"}],[{label:"碧江区",value:"520602"},{label:"万山区",value:"520603"},{label:"江口县",value:"520621"},{label:"玉屏侗族自治县",value:"520622"},{label:"石阡县",value:"520623"},{label:"思南县",value:"520624"},{label:"印江土家族苗族自治县",value:"520625"},{label:"德江县",value:"520626"},{label:"沿河土家族自治县",value:"520627"},{label:"松桃苗族自治县",value:"520628"}],[{label:"兴义市",value:"522301"},{label:"兴仁县",value:"522322"},{label:"普安县",value:"522323"},{label:"晴隆县",value:"522324"},{label:"贞丰县",value:"522325"},{label:"望谟县",value:"522326"},{label:"册亨县",value:"522327"},{label:"安龙县",value:"522328"}],[{label:"凯里市",value:"522601"},{label:"黄平县",value:"522622"},{label:"施秉县",value:"522623"},{label:"三穗县",value:"522624"},{label:"镇远县",value:"522625"},{label:"岑巩县",value:"522626"},{label:"天柱县",value:"522627"},{label:"锦屏县",value:"522628"},{label:"剑河县",value:"522629"},{label:"台江县",value:"522630"},{label:"黎平县",value:"522631"},{label:"榕江县",value:"522632"},{label:"从江县",value:"522633"},{label:"雷山县",value:"522634"},{label:"麻江县",value:"522635"},{label:"丹寨县",value:"522636"}],[{label:"都匀市",value:"522701"},{label:"福泉市",value:"522702"},{label:"荔波县",value:"522722"},{label:"贵定县",value:"522723"},{label:"瓮安县",value:"522725"},{label:"独山县",value:"522726"},{label:"平塘县",value:"522727"},{label:"罗甸县",value:"522728"},{label:"长顺县",value:"522729"},{label:"龙里县",value:"522730"},{label:"惠水县",value:"522731"},{label:"三都水族自治县",value:"522732"}]],[[{label:"五华区",value:"530102"},{label:"盘龙区",value:"530103"},{label:"官渡区",value:"530111"},{label:"西山区",value:"530112"},{label:"东川区",value:"530113"},{label:"呈贡区",value:"530114"},{label:"晋宁区",value:"530115"},{label:"富民县",value:"530124"},{label:"宜良县",value:"530125"},{label:"石林彝族自治县",value:"530126"},{label:"嵩明县",value:"530127"},{label:"禄劝彝族苗族自治县",value:"530128"},{label:"寻甸回族彝族自治县",value:"530129"},{label:"安宁市",value:"530181"}],[{label:"麒麟区",value:"530302"},{label:"沾益区",value:"530303"},{label:"马龙县",value:"530321"},{label:"陆良县",value:"530322"},{label:"师宗县",value:"530323"},{label:"罗平县",value:"530324"},{label:"富源县",value:"530325"},{label:"会泽县",value:"530326"},{label:"宣威市",value:"530381"}],[{label:"红塔区",value:"530402"},{label:"江川区",value:"530403"},{label:"澄江县",value:"530422"},{label:"通海县",value:"530423"},{label:"华宁县",value:"530424"},{label:"易门县",value:"530425"},{label:"峨山彝族自治县",value:"530426"},{label:"新平彝族傣族自治县",value:"530427"},{label:"元江哈尼族彝族傣族自治县",value:"530428"}],[{label:"隆阳区",value:"530502"},{label:"施甸县",value:"530521"},{label:"龙陵县",value:"530523"},{label:"昌宁县",value:"530524"},{label:"腾冲市",value:"530581"}],[{label:"昭阳区",value:"530602"},{label:"鲁甸县",value:"530621"},{label:"巧家县",value:"530622"},{label:"盐津县",value:"530623"},{label:"大关县",value:"530624"},{label:"永善县",value:"530625"},{label:"绥江县",value:"530626"},{label:"镇雄县",value:"530627"},{label:"彝良县",value:"530628"},{label:"威信县",value:"530629"},{label:"水富县",value:"530630"}],[{label:"古城区",value:"530702"},{label:"玉龙纳西族自治县",value:"530721"},{label:"永胜县",value:"530722"},{label:"华坪县",value:"530723"},{label:"宁蒗彝族自治县",value:"530724"}],[{label:"思茅区",value:"530802"},{label:"宁洱哈尼族彝族自治县",value:"530821"},{label:"墨江哈尼族自治县",value:"530822"},{label:"景东彝族自治县",value:"530823"},{label:"景谷傣族彝族自治县",value:"530824"},{label:"镇沅彝族哈尼族拉祜族自治县",value:"530825"},{label:"江城哈尼族彝族自治县",value:"530826"},{label:"孟连傣族拉祜族佤族自治县",value:"530827"},{label:"澜沧拉祜族自治县",value:"530828"},{label:"西盟佤族自治县",value:"530829"}],[{label:"临翔区",value:"530902"},{label:"凤庆县",value:"530921"},{label:"云县",value:"530922"},{label:"永德县",value:"530923"},{label:"镇康县",value:"530924"},{label:"双江拉祜族佤族布朗族傣族自治县",value:"530925"},{label:"耿马傣族佤族自治县",value:"530926"},{label:"沧源佤族自治县",value:"530927"}],[{label:"楚雄市",value:"532301"},{label:"双柏县",value:"532322"},{label:"牟定县",value:"532323"},{label:"南华县",value:"532324"},{label:"姚安县",value:"532325"},{label:"大姚县",value:"532326"},{label:"永仁县",value:"532327"},{label:"元谋县",value:"532328"},{label:"武定县",value:"532329"},{label:"禄丰县",value:"532331"}],[{label:"个旧市",value:"532501"},{label:"开远市",value:"532502"},{label:"蒙自市",value:"532503"},{label:"弥勒市",value:"532504"},{label:"屏边苗族自治县",value:"532523"},{label:"建水县",value:"532524"},{label:"石屏县",value:"532525"},{label:"泸西县",value:"532527"},{label:"元阳县",value:"532528"},{label:"红河县",value:"532529"},{label:"金平苗族瑶族傣族自治县",value:"532530"},{label:"绿春县",value:"532531"},{label:"河口瑶族自治县",value:"532532"}],[{label:"文山市",value:"532601"},{label:"砚山县",value:"532622"},{label:"西畴县",value:"532623"},{label:"麻栗坡县",value:"532624"},{label:"马关县",value:"532625"},{label:"丘北县",value:"532626"},{label:"广南县",value:"532627"},{label:"富宁县",value:"532628"}],[{label:"景洪市",value:"532801"},{label:"勐海县",value:"532822"},{label:"勐腊县",value:"532823"}],[{label:"大理市",value:"532901"},{label:"漾濞彝族自治县",value:"532922"},{label:"祥云县",value:"532923"},{label:"宾川县",value:"532924"},{label:"弥渡县",value:"532925"},{label:"南涧彝族自治县",value:"532926"},{label:"巍山彝族回族自治县",value:"532927"},{label:"永平县",value:"532928"},{label:"云龙县",value:"532929"},{label:"洱源县",value:"532930"},{label:"剑川县",value:"532931"},{label:"鹤庆县",value:"532932"}],[{label:"瑞丽市",value:"533102"},{label:"芒市",value:"533103"},{label:"梁河县",value:"533122"},{label:"盈江县",value:"533123"},{label:"陇川县",value:"533124"}],[{label:"泸水市",value:"533301"},{label:"福贡县",value:"533323"},{label:"贡山独龙族怒族自治县",value:"533324"},{label:"兰坪白族普米族自治县",value:"533325"}],[{label:"香格里拉市",value:"533401"},{label:"德钦县",value:"533422"},{label:"维西傈僳族自治县",value:"533423"}]],[[{label:"城关区",value:"540102"},{label:"堆龙德庆区",value:"540103"},{label:"林周县",value:"540121"},{label:"当雄县",value:"540122"},{label:"尼木县",value:"540123"},{label:"曲水县",value:"540124"},{label:"达孜县",value:"540126"},{label:"墨竹工卡县",value:"540127"},{label:"格尔木藏青工业园区",value:"540171"},{label:"拉萨经济技术开发区",value:"540172"},{label:"西藏文化旅游创意园区",value:"540173"},{label:"达孜工业园区",value:"540174"}],[{label:"桑珠孜区",value:"540202"},{label:"南木林县",value:"540221"},{label:"江孜县",value:"540222"},{label:"定日县",value:"540223"},{label:"萨迦县",value:"540224"},{label:"拉孜县",value:"540225"},{label:"昂仁县",value:"540226"},{label:"谢通门县",value:"540227"},{label:"白朗县",value:"540228"},{label:"仁布县",value:"540229"},{label:"康马县",value:"540230"},{label:"定结县",value:"540231"},{label:"仲巴县",value:"540232"},{label:"亚东县",value:"540233"},{label:"吉隆县",value:"540234"},{label:"聂拉木县",value:"540235"},{label:"萨嘎县",value:"540236"},{label:"岗巴县",value:"540237"}],[{label:"卡若区",value:"540302"},{label:"江达县",value:"540321"},{label:"贡觉县",value:"540322"},{label:"类乌齐县",value:"540323"},{label:"丁青县",value:"540324"},{label:"察雅县",value:"540325"},{label:"八宿县",value:"540326"},{label:"左贡县",value:"540327"},{label:"芒康县",value:"540328"},{label:"洛隆县",value:"540329"},{label:"边坝县",value:"540330"}],[{label:"巴宜区",value:"540402"},{label:"工布江达县",value:"540421"},{label:"米林县",value:"540422"},{label:"墨脱县",value:"540423"},{label:"波密县",value:"540424"},{label:"察隅县",value:"540425"},{label:"朗县",value:"540426"}],[{label:"乃东区",value:"540502"},{label:"扎囊县",value:"540521"},{label:"贡嘎县",value:"540522"},{label:"桑日县",value:"540523"},{label:"琼结县",value:"540524"},{label:"曲松县",value:"540525"},{label:"措美县",value:"540526"},{label:"洛扎县",value:"540527"},{label:"加查县",value:"540528"},{label:"隆子县",value:"540529"},{label:"错那县",value:"540530"},{label:"浪卡子县",value:"540531"}],[{label:"那曲县",value:"542421"},{label:"嘉黎县",value:"542422"},{label:"比如县",value:"542423"},{label:"聂荣县",value:"542424"},{label:"安多县",value:"542425"},{label:"申扎县",value:"542426"},{label:"索县",value:"542427"},{label:"班戈县",value:"542428"},{label:"巴青县",value:"542429"},{label:"尼玛县",value:"542430"},{label:"双湖县",value:"542431"}],[{label:"普兰县",value:"542521"},{label:"札达县",value:"542522"},{label:"噶尔县",value:"542523"},{label:"日土县",value:"542524"},{label:"革吉县",value:"542525"},{label:"改则县",value:"542526"},{label:"措勤县",value:"542527"}]],[[{label:"新城区",value:"610102"},{label:"碑林区",value:"610103"},{label:"莲湖区",value:"610104"},{label:"灞桥区",value:"610111"},{label:"未央区",value:"610112"},{label:"雁塔区",value:"610113"},{label:"阎良区",value:"610114"},{label:"临潼区",value:"610115"},{label:"长安区",value:"610116"},{label:"高陵区",value:"610117"},{label:"鄠邑区",value:"610118"},{label:"蓝田县",value:"610122"},{label:"周至县",value:"610124"}],[{label:"王益区",value:"610202"},{label:"印台区",value:"610203"},{label:"耀州区",value:"610204"},{label:"宜君县",value:"610222"}],[{label:"渭滨区",value:"610302"},{label:"金台区",value:"610303"},{label:"陈仓区",value:"610304"},{label:"凤翔县",value:"610322"},{label:"岐山县",value:"610323"},{label:"扶风县",value:"610324"},{label:"眉县",value:"610326"},{label:"陇县",value:"610327"},{label:"千阳县",value:"610328"},{label:"麟游县",value:"610329"},{label:"凤县",value:"610330"},{label:"太白县",value:"610331"}],[{label:"秦都区",value:"610402"},{label:"杨陵区",value:"610403"},{label:"渭城区",value:"610404"},{label:"三原县",value:"610422"},{label:"泾阳县",value:"610423"},{label:"乾县",value:"610424"},{label:"礼泉县",value:"610425"},{label:"永寿县",value:"610426"},{label:"彬县",value:"610427"},{label:"长武县",value:"610428"},{label:"旬邑县",value:"610429"},{label:"淳化县",value:"610430"},{label:"武功县",value:"610431"},{label:"兴平市",value:"610481"}],[{label:"临渭区",value:"610502"},{label:"华州区",value:"610503"},{label:"潼关县",value:"610522"},{label:"大荔县",value:"610523"},{label:"合阳县",value:"610524"},{label:"澄城县",value:"610525"},{label:"蒲城县",value:"610526"},{label:"白水县",value:"610527"},{label:"富平县",value:"610528"},{label:"韩城市",value:"610581"},{label:"华阴市",value:"610582"}],[{label:"宝塔区",value:"610602"},{label:"安塞区",value:"610603"},{label:"延长县",value:"610621"},{label:"延川县",value:"610622"},{label:"子长县",value:"610623"},{label:"志丹县",value:"610625"},{label:"吴起县",value:"610626"},{label:"甘泉县",value:"610627"},{label:"富县",value:"610628"},{label:"洛川县",value:"610629"},{label:"宜川县",value:"610630"},{label:"黄龙县",value:"610631"},{label:"黄陵县",value:"610632"}],[{label:"汉台区",value:"610702"},{label:"南郑区",value:"610703"},{label:"城固县",value:"610722"},{label:"洋县",value:"610723"},{label:"西乡县",value:"610724"},{label:"勉县",value:"610725"},{label:"宁强县",value:"610726"},{label:"略阳县",value:"610727"},{label:"镇巴县",value:"610728"},{label:"留坝县",value:"610729"},{label:"佛坪县",value:"610730"}],[{label:"榆阳区",value:"610802"},{label:"横山区",value:"610803"},{label:"府谷县",value:"610822"},{label:"靖边县",value:"610824"},{label:"定边县",value:"610825"},{label:"绥德县",value:"610826"},{label:"米脂县",value:"610827"},{label:"佳县",value:"610828"},{label:"吴堡县",value:"610829"},{label:"清涧县",value:"610830"},{label:"子洲县",value:"610831"},{label:"神木市",value:"610881"}],[{label:"汉滨区",value:"610902"},{label:"汉阴县",value:"610921"},{label:"石泉县",value:"610922"},{label:"宁陕县",value:"610923"},{label:"紫阳县",value:"610924"},{label:"岚皋县",value:"610925"},{label:"平利县",value:"610926"},{label:"镇坪县",value:"610927"},{label:"旬阳县",value:"610928"},{label:"白河县",value:"610929"}],[{label:"商州区",value:"611002"},{label:"洛南县",value:"611021"},{label:"丹凤县",value:"611022"},{label:"商南县",value:"611023"},{label:"山阳县",value:"611024"},{label:"镇安县",value:"611025"},{label:"柞水县",value:"611026"}]],[[{label:"城关区",value:"620102"},{label:"七里河区",value:"620103"},{label:"西固区",value:"620104"},{label:"安宁区",value:"620105"},{label:"红古区",value:"620111"},{label:"永登县",value:"620121"},{label:"皋兰县",value:"620122"},{label:"榆中县",value:"620123"},{label:"兰州新区",value:"620171"}],[{label:"嘉峪关市",value:"620201"}],[{label:"金川区",value:"620302"},{label:"永昌县",value:"620321"}],[{label:"白银区",value:"620402"},{label:"平川区",value:"620403"},{label:"靖远县",value:"620421"},{label:"会宁县",value:"620422"},{label:"景泰县",value:"620423"}],[{label:"秦州区",value:"620502"},{label:"麦积区",value:"620503"},{label:"清水县",value:"620521"},{label:"秦安县",value:"620522"},{label:"甘谷县",value:"620523"},{label:"武山县",value:"620524"},{label:"张家川回族自治县",value:"620525"}],[{label:"凉州区",value:"620602"},{label:"民勤县",value:"620621"},{label:"古浪县",value:"620622"},{label:"天祝藏族自治县",value:"620623"}],[{label:"甘州区",value:"620702"},{label:"肃南裕固族自治县",value:"620721"},{label:"民乐县",value:"620722"},{label:"临泽县",value:"620723"},{label:"高台县",value:"620724"},{label:"山丹县",value:"620725"}],[{label:"崆峒区",value:"620802"},{label:"泾川县",value:"620821"},{label:"灵台县",value:"620822"},{label:"崇信县",value:"620823"},{label:"华亭县",value:"620824"},{label:"庄浪县",value:"620825"},{label:"静宁县",value:"620826"},{label:"平凉工业园区",value:"620871"}],[{label:"肃州区",value:"620902"},{label:"金塔县",value:"620921"},{label:"瓜州县",value:"620922"},{label:"肃北蒙古族自治县",value:"620923"},{label:"阿克塞哈萨克族自治县",value:"620924"},{label:"玉门市",value:"620981"},{label:"敦煌市",value:"620982"}],[{label:"西峰区",value:"621002"},{label:"庆城县",value:"621021"},{label:"环县",value:"621022"},{label:"华池县",value:"621023"},{label:"合水县",value:"621024"},{label:"正宁县",value:"621025"},{label:"宁县",value:"621026"},{label:"镇原县",value:"621027"}],[{label:"安定区",value:"621102"},{label:"通渭县",value:"621121"},{label:"陇西县",value:"621122"},{label:"渭源县",value:"621123"},{label:"临洮县",value:"621124"},{label:"漳县",value:"621125"},{label:"岷县",value:"621126"}],[{label:"武都区",value:"621202"},{label:"成县",value:"621221"},{label:"文县",value:"621222"},{label:"宕昌县",value:"621223"},{label:"康县",value:"621224"},{label:"西和县",value:"621225"},{label:"礼县",value:"621226"},{label:"徽县",value:"621227"},{label:"两当县",value:"621228"}],[{label:"临夏市",value:"622901"},{label:"临夏县",value:"622921"},{label:"康乐县",value:"622922"},{label:"永靖县",value:"622923"},{label:"广河县",value:"622924"},{label:"和政县",value:"622925"},{label:"东乡族自治县",value:"622926"},{label:"积石山保安族东乡族撒拉族自治县",value:"622927"}],[{label:"合作市",value:"623001"},{label:"临潭县",value:"623021"},{label:"卓尼县",value:"623022"},{label:"舟曲县",value:"623023"},{label:"迭部县",value:"623024"},{label:"玛曲县",value:"623025"},{label:"碌曲县",value:"623026"},{label:"夏河县",value:"623027"}]],[[{label:"城东区",value:"630102"},{label:"城中区",value:"630103"},{label:"城西区",value:"630104"},{label:"城北区",value:"630105"},{label:"大通回族土族自治县",value:"630121"},{label:"湟中县",value:"630122"},{label:"湟源县",value:"630123"}],[{label:"乐都区",value:"630202"},{label:"平安区",value:"630203"},{label:"民和回族土族自治县",value:"630222"},{label:"互助土族自治县",value:"630223"},{label:"化隆回族自治县",value:"630224"},{label:"循化撒拉族自治县",value:"630225"}],[{label:"门源回族自治县",value:"632221"},{label:"祁连县",value:"632222"},{label:"海晏县",value:"632223"},{label:"刚察县",value:"632224"}],[{label:"同仁县",value:"632321"},{label:"尖扎县",value:"632322"},{label:"泽库县",value:"632323"},{label:"河南蒙古族自治县",value:"632324"}],[{label:"共和县",value:"632521"},{label:"同德县",value:"632522"},{label:"贵德县",value:"632523"},{label:"兴海县",value:"632524"},{label:"贵南县",value:"632525"}],[{label:"玛沁县",value:"632621"},{label:"班玛县",value:"632622"},{label:"甘德县",value:"632623"},{label:"达日县",value:"632624"},{label:"久治县",value:"632625"},{label:"玛多县",value:"632626"}],[{label:"玉树市",value:"632701"},{label:"杂多县",value:"632722"},{label:"称多县",value:"632723"},{label:"治多县",value:"632724"},{label:"囊谦县",value:"632725"},{label:"曲麻莱县",value:"632726"}],[{label:"格尔木市",value:"632801"},{label:"德令哈市",value:"632802"},{label:"乌兰县",value:"632821"},{label:"都兰县",value:"632822"},{label:"天峻县",value:"632823"},{label:"大柴旦行政委员会",value:"632857"},{label:"冷湖行政委员会",value:"632858"},{label:"茫崖行政委员会",value:"632859"}]],[[{label:"兴庆区",value:"640104"},{label:"西夏区",value:"640105"},{label:"金凤区",value:"640106"},{label:"永宁县",value:"640121"},{label:"贺兰县",value:"640122"},{label:"灵武市",value:"640181"}],[{label:"大武口区",value:"640202"},{label:"惠农区",value:"640205"},{label:"平罗县",value:"640221"}],[{label:"利通区",value:"640302"},{label:"红寺堡区",value:"640303"},{label:"盐池县",value:"640323"},{label:"同心县",value:"640324"},{label:"青铜峡市",value:"640381"}],[{label:"原州区",value:"640402"},{label:"西吉县",value:"640422"},{label:"隆德县",value:"640423"},{label:"泾源县",value:"640424"},{label:"彭阳县",value:"640425"}],[{label:"沙坡头区",value:"640502"},{label:"中宁县",value:"640521"},{label:"海原县",value:"640522"}]],[[{label:"天山区",value:"650102"},{label:"沙依巴克区",value:"650103"},{label:"新市区",value:"650104"},{label:"水磨沟区",value:"650105"},{label:"头屯河区",value:"650106"},{label:"达坂城区",value:"650107"},{label:"米东区",value:"650109"},{label:"乌鲁木齐县",value:"650121"},{label:"乌鲁木齐经济技术开发区",value:"650171"},{label:"乌鲁木齐高新技术产业开发区",value:"650172"}],[{label:"独山子区",value:"650202"},{label:"克拉玛依区",value:"650203"},{label:"白碱滩区",value:"650204"},{label:"乌尔禾区",value:"650205"}],[{label:"高昌区",value:"650402"},{label:"鄯善县",value:"650421"},{label:"托克逊县",value:"650422"}],[{label:"伊州区",value:"650502"},{label:"巴里坤哈萨克自治县",value:"650521"},{label:"伊吾县",value:"650522"}],[{label:"昌吉市",value:"652301"},{label:"阜康市",value:"652302"},{label:"呼图壁县",value:"652323"},{label:"玛纳斯县",value:"652324"},{label:"奇台县",value:"652325"},{label:"吉木萨尔县",value:"652327"},{label:"木垒哈萨克自治县",value:"652328"}],[{label:"博乐市",value:"652701"},{label:"阿拉山口市",value:"652702"},{label:"精河县",value:"652722"},{label:"温泉县",value:"652723"}],[{label:"库尔勒市",value:"652801"},{label:"轮台县",value:"652822"},{label:"尉犁县",value:"652823"},{label:"若羌县",value:"652824"},{label:"且末县",value:"652825"},{label:"焉耆回族自治县",value:"652826"},{label:"和静县",value:"652827"},{label:"和硕县",value:"652828"},{label:"博湖县",value:"652829"},{label:"库尔勒经济技术开发区",value:"652871"}],[{label:"阿克苏市",value:"652901"},{label:"温宿县",value:"652922"},{label:"库车县",value:"652923"},{label:"沙雅县",value:"652924"},{label:"新和县",value:"652925"},{label:"拜城县",value:"652926"},{label:"乌什县",value:"652927"},{label:"阿瓦提县",value:"652928"},{label:"柯坪县",value:"652929"}],[{label:"阿图什市",value:"653001"},{label:"阿克陶县",value:"653022"},{label:"阿合奇县",value:"653023"},{label:"乌恰县",value:"653024"}],[{label:"喀什市",value:"653101"},{label:"疏附县",value:"653121"},{label:"疏勒县",value:"653122"},{label:"英吉沙县",value:"653123"},{label:"泽普县",value:"653124"},{label:"莎车县",value:"653125"},{label:"叶城县",value:"653126"},{label:"麦盖提县",value:"653127"},{label:"岳普湖县",value:"653128"},{label:"伽师县",value:"653129"},{label:"巴楚县",value:"653130"},{label:"塔什库尔干塔吉克自治县",value:"653131"}],[{label:"和田市",value:"653201"},{label:"和田县",value:"653221"},{label:"墨玉县",value:"653222"},{label:"皮山县",value:"653223"},{label:"洛浦县",value:"653224"},{label:"策勒县",value:"653225"},{label:"于田县",value:"653226"},{label:"民丰县",value:"653227"}],[{label:"伊宁市",value:"654002"},{label:"奎屯市",value:"654003"},{label:"霍尔果斯市",value:"654004"},{label:"伊宁县",value:"654021"},{label:"察布查尔锡伯自治县",value:"654022"},{label:"霍城县",value:"654023"},{label:"巩留县",value:"654024"},{label:"新源县",value:"654025"},{label:"昭苏县",value:"654026"},{label:"特克斯县",value:"654027"},{label:"尼勒克县",value:"654028"}],[{label:"塔城市",value:"654201"},{label:"乌苏市",value:"654202"},{label:"额敏县",value:"654221"},{label:"沙湾县",value:"654223"},{label:"托里县",value:"654224"},{label:"裕民县",value:"654225"},{label:"和布克赛尔蒙古自治县",value:"654226"}],[{label:"阿勒泰市",value:"654301"},{label:"布尔津县",value:"654321"},{label:"富蕴县",value:"654322"},{label:"福海县",value:"654323"},{label:"哈巴河县",value:"654324"},{label:"青河县",value:"654325"},{label:"吉木乃县",value:"654326"}],[{label:"石河子市",value:"659001"},{label:"阿拉尔市",value:"659002"},{label:"图木舒克市",value:"659003"},{label:"五家渠市",value:"659004"},{label:"铁门关市",value:"659006"}]],[[{label:"台北",value:"660101"}],[{label:"高雄",value:"660201"}],[{label:"基隆",value:"660301"}],[{label:"台中",value:"660401"}],[{label:"台南",value:"660501"}],[{label:"新竹",value:"660601"}],[{label:"嘉义",value:"660701"}],[{label:"宜兰",value:"660801"}],[{label:"桃园",value:"660901"}],[{label:"苗栗",value:"661001"}],[{label:"彰化",value:"661101"}],[{label:"南投",value:"661201"}],[{label:"云林",value:"661301"}],[{label:"屏东",value:"661401"}],[{label:"台东",value:"661501"}],[{label:"花莲",value:"661601"}],[{label:"澎湖",value:"661701"}]],[[{label:"香港岛",value:"670101"}],[{label:"九龙",value:"670201"}],[{label:"新界",value:"670301"}]],[[{label:"澳门半岛",value:"680101"}],[{label:"氹仔岛",value:"680201"}],[{label:"路环岛",value:"680301"}],[{label:"路氹城",value:"680401"}]]],u=t;l.default=u},2877:function(e,l,a){"use strict";function t(e,l,a,t,u,n,i,o){var r,v="function"===typeof e?e.options:e;if(l&&(v.render=l,v.staticRenderFns=a,v._compiled=!0),t&&(v.functional=!0),n&&(v._scopeId="data-v-"+n),i?(r=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),u&&u.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},v._ssrRegister=r):u&&(r=o?function(){u.call(this,this.$root.$options.shadowRoot)}:u),r)if(v.functional){v._injectStyles=r;var b=v.render;v.render=function(e,l){return r.call(l),b(e,l)}}else{var s=v.beforeCreate;v.beforeCreate=s?[].concat(s,r):[r]}return{exports:e,options:v}}a.d(l,"a",function(){return t})},"2f62":function(e,l,a){"use strict";a.r(l),a.d(l,"Store",function(){return f}),a.d(l,"install",function(){return O}),a.d(l,"mapState",function(){return k}),a.d(l,"mapMutations",function(){return M}),a.d(l,"mapGetters",function(){return C}),a.d(l,"mapActions",function(){return L}),a.d(l,"createNamespacedHelpers",function(){return E});
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var t=function(e){var l=Number(e.version.split(".")[0]);if(l>=2)e.mixin({beforeCreate:t});else{var a=e.prototype._init;e.prototype._init=function(e){void 0===e&&(e={}),e.init=e.init?[t].concat(e.init):t,a.call(this,e)}}function t(){var e=this.$options;e.store?this.$store="function"===typeof e.store?e.store():e.store:e.parent&&e.parent.$store&&(this.$store=e.parent.$store)}},u="undefined"!==typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function n(e){u&&(e._devtoolHook=u,u.emit("vuex:init",e),u.on("vuex:travel-to-state",function(l){e.replaceState(l)}),e.subscribe(function(e,l){u.emit("vuex:mutation",e,l)}))}function i(e,l){Object.keys(e).forEach(function(a){return l(e[a],a)})}function o(e){return null!==e&&"object"===typeof e}function r(e){return e&&"function"===typeof e.then}var v=function(e,l){this.runtime=l,this._children=Object.create(null),this._rawModule=e;var a=e.state;this.state=("function"===typeof a?a():a)||{}},b={namespaced:{configurable:!0}};b.namespaced.get=function(){return!!this._rawModule.namespaced},v.prototype.addChild=function(e,l){this._children[e]=l},v.prototype.removeChild=function(e){delete this._children[e]},v.prototype.getChild=function(e){return this._children[e]},v.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},v.prototype.forEachChild=function(e){i(this._children,e)},v.prototype.forEachGetter=function(e){this._rawModule.getters&&i(this._rawModule.getters,e)},v.prototype.forEachAction=function(e){this._rawModule.actions&&i(this._rawModule.actions,e)},v.prototype.forEachMutation=function(e){this._rawModule.mutations&&i(this._rawModule.mutations,e)},Object.defineProperties(v.prototype,b);var s=function(e){this.register([],e,!1)};function c(e,l,a){if(l.update(a),a.modules)for(var t in a.modules){if(!l.getChild(t))return void 0;c(e.concat(t),l.getChild(t),a.modules[t])}}s.prototype.get=function(e){return e.reduce(function(e,l){return e.getChild(l)},this.root)},s.prototype.getNamespace=function(e){var l=this.root;return e.reduce(function(e,a){return l=l.getChild(a),e+(l.namespaced?a+"/":"")},"")},s.prototype.update=function(e){c([],this.root,e)},s.prototype.register=function(e,l,a){var t=this;void 0===a&&(a=!0);var u=new v(l,a);if(0===e.length)this.root=u;else{var n=this.get(e.slice(0,-1));n.addChild(e[e.length-1],u)}l.modules&&i(l.modules,function(l,u){t.register(e.concat(u),l,a)})},s.prototype.unregister=function(e){var l=this.get(e.slice(0,-1)),a=e[e.length-1];l.getChild(a).runtime&&l.removeChild(a)};var h;var f=function(e){var l=this;void 0===e&&(e={}),!h&&"undefined"!==typeof window&&window.Vue&&O(window.Vue);var a=e.plugins;void 0===a&&(a=[]);var t=e.strict;void 0===t&&(t=!1);var u=e.state;void 0===u&&(u={}),"function"===typeof u&&(u=u()||{}),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new s(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new h;var i=this,o=this,r=o.dispatch,v=o.commit;this.dispatch=function(e,l){return r.call(i,e,l)},this.commit=function(e,l,a){return v.call(i,e,l,a)},this.strict=t,x(this,u,[],this._modules.root),y(this,u),a.forEach(function(e){return e(l)}),h.config.devtools&&n(this)},p={state:{configurable:!0}};function d(e,l){return l.indexOf(e)<0&&l.push(e),function(){var a=l.indexOf(e);a>-1&&l.splice(a,1)}}function g(e,l){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var a=e.state;x(e,a,[],e._modules.root,!0),y(e,a,l)}function y(e,l,a){var t=e._vm;e.getters={};var u=e._wrappedGetters,n={};i(u,function(l,a){n[a]=function(){return l(e)},Object.defineProperty(e.getters,a,{get:function(){return e._vm[a]},enumerable:!0})});var o=h.config.silent;h.config.silent=!0,e._vm=new h({data:{$$state:l},computed:n}),h.config.silent=o,e.strict&&S(e),t&&(a&&e._withCommit(function(){t._data.$$state=null}),h.nextTick(function(){return t.$destroy()}))}function x(e,l,a,t,u){var n=!a.length,i=e._modules.getNamespace(a);if(t.namespaced&&(e._modulesNamespaceMap[i]=t),!n&&!u){var o=T(l,a.slice(0,-1)),r=a[a.length-1];e._withCommit(function(){h.set(o,r,t.state)})}var v=t.context=_(e,i,a);t.forEachMutation(function(l,a){var t=i+a;w(e,t,l,v)}),t.forEachAction(function(l,a){var t=l.root?a:i+a,u=l.handler||l;A(e,t,u,v)}),t.forEachGetter(function(l,a){var t=i+a;P(e,t,l,v)}),t.forEachChild(function(t,n){x(e,l,a.concat(n),t,u)})}function _(e,l,a){var t=""===l,u={dispatch:t?e.dispatch:function(a,t,u){var n=$(a,t,u),i=n.payload,o=n.options,r=n.type;return o&&o.root||(r=l+r),e.dispatch(r,i)},commit:t?e.commit:function(a,t,u){var n=$(a,t,u),i=n.payload,o=n.options,r=n.type;o&&o.root||(r=l+r),e.commit(r,i,o)}};return Object.defineProperties(u,{getters:{get:t?function(){return e.getters}:function(){return m(e,l)}},state:{get:function(){return T(e.state,a)}}}),u}function m(e,l){var a={},t=l.length;return Object.keys(e.getters).forEach(function(u){if(u.slice(0,t)===l){var n=u.slice(t);Object.defineProperty(a,n,{get:function(){return e.getters[u]},enumerable:!0})}}),a}function w(e,l,a,t){var u=e._mutations[l]||(e._mutations[l]=[]);u.push(function(l){a.call(e,t.state,l)})}function A(e,l,a,t){var u=e._actions[l]||(e._actions[l]=[]);u.push(function(l,u){var n=a.call(e,{dispatch:t.dispatch,commit:t.commit,getters:t.getters,state:t.state,rootGetters:e.getters,rootState:e.state},l,u);return r(n)||(n=Promise.resolve(n)),e._devtoolHook?n.catch(function(l){throw e._devtoolHook.emit("vuex:error",l),l}):n})}function P(e,l,a,t){e._wrappedGetters[l]||(e._wrappedGetters[l]=function(e){return a(t.state,t.getters,e.state,e.getters)})}function S(e){e._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}function T(e,l){return l.length?l.reduce(function(e,l){return e[l]},e):e}function $(e,l,a){return o(e)&&e.type&&(a=l,l=e,e=e.type),{type:e,payload:l,options:a}}function O(e){h&&e===h||(h=e,t(h))}p.state.get=function(){return this._vm._data.$$state},p.state.set=function(e){0},f.prototype.commit=function(e,l,a){var t=this,u=$(e,l,a),n=u.type,i=u.payload,o=(u.options,{type:n,payload:i}),r=this._mutations[n];r&&(this._withCommit(function(){r.forEach(function(e){e(i)})}),this._subscribers.forEach(function(e){return e(o,t.state)}))},f.prototype.dispatch=function(e,l){var a=this,t=$(e,l),u=t.type,n=t.payload,i={type:u,payload:n},o=this._actions[u];if(o)return this._actionSubscribers.forEach(function(e){return e(i,a.state)}),o.length>1?Promise.all(o.map(function(e){return e(n)})):o[0](n)},f.prototype.subscribe=function(e){return d(e,this._subscribers)},f.prototype.subscribeAction=function(e){return d(e,this._actionSubscribers)},f.prototype.watch=function(e,l,a){var t=this;return this._watcherVM.$watch(function(){return e(t.state,t.getters)},l,a)},f.prototype.replaceState=function(e){var l=this;this._withCommit(function(){l._vm._data.$$state=e})},f.prototype.registerModule=function(e,l,a){void 0===a&&(a={}),"string"===typeof e&&(e=[e]),this._modules.register(e,l),x(this,this.state,e,this._modules.get(e),a.preserveState),y(this,this.state)},f.prototype.unregisterModule=function(e){var l=this;"string"===typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var a=T(l.state,e.slice(0,-1));h.delete(a,e[e.length-1])}),g(this)},f.prototype.hotUpdate=function(e){this._modules.update(e),g(this,!0)},f.prototype._withCommit=function(e){var l=this._committing;this._committing=!0,e(),this._committing=l},Object.defineProperties(f.prototype,p);var k=R(function(e,l){var a={};return F(l).forEach(function(l){var t=l.key,u=l.val;a[t]=function(){var l=this.$store.state,a=this.$store.getters;if(e){var t=D(this.$store,"mapState",e);if(!t)return;l=t.context.state,a=t.context.getters}return"function"===typeof u?u.call(this,l,a):l[u]},a[t].vuex=!0}),a}),M=R(function(e,l){var a={};return F(l).forEach(function(l){var t=l.key,u=l.val;a[t]=function(){var l=[],a=arguments.length;while(a--)l[a]=arguments[a];var t=this.$store.commit;if(e){var n=D(this.$store,"mapMutations",e);if(!n)return;t=n.context.commit}return"function"===typeof u?u.apply(this,[t].concat(l)):t.apply(this.$store,[u].concat(l))}}),a}),C=R(function(e,l){var a={};return F(l).forEach(function(l){var t=l.key,u=l.val;u=e+u,a[t]=function(){if(!e||D(this.$store,"mapGetters",e))return this.$store.getters[u]},a[t].vuex=!0}),a}),L=R(function(e,l){var a={};return F(l).forEach(function(l){var t=l.key,u=l.val;a[t]=function(){var l=[],a=arguments.length;while(a--)l[a]=arguments[a];var t=this.$store.dispatch;if(e){var n=D(this.$store,"mapActions",e);if(!n)return;t=n.context.dispatch}return"function"===typeof u?u.apply(this,[t].concat(l)):t.apply(this.$store,[u].concat(l))}}),a}),E=function(e){return{mapState:k.bind(null,e),mapGetters:C.bind(null,e),mapMutations:M.bind(null,e),mapActions:L.bind(null,e)}};function F(e){return Array.isArray(e)?e.map(function(e){return{key:e,val:e}}):Object.keys(e).map(function(l){return{key:l,val:e[l]}})}function R(e){return function(l,a){return"string"!==typeof l?(a=l,l=""):"/"!==l.charAt(l.length-1)&&(l+="/"),e(l,a)}}function D(e,l,a){var t=e._modulesNamespaceMap[a];return t}var j={Store:f,install:O,version:"3.0.1",mapState:k,mapMutations:M,mapGetters:C,mapActions:L,createNamespacedHelpers:E};l["default"]=j},"4f38":function(e,l,a){"use strict";(function(e){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=u(a("8e37"));function u(e){return e&&e.__esModule?e:{default:e}}function n(e,l){return r(e)||o(e,l)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function o(e,l){var a=[],t=!0,u=!1,n=void 0;try{for(var i,o=e[Symbol.iterator]();!(t=(i=o.next()).done);t=!0)if(a.push(i.value),l&&a.length===l)break}catch(r){u=!0,n=r}finally{try{t||null==o["return"]||o["return"]()}finally{if(u)throw n}}return a}function r(e){if(Array.isArray(e))return e}var v={"Content-Type":"application/x-www-form-urlencoded;charset=utf-8"},b=function(e){return e},s={post:function(l,a){return e.request({url:t.default.state.baseUrl+l,data:a,method:"POST",header:v}).then(function(e){var l=n(e,2),a=(l[0],l[1]);return b(a.data)})},get:function(l,a){return e.request({url:t.default.state.baseUrl+l,data:a,method:"GET",header:v}).then(function(e){var l=n(e,2),a=(l[0],l[1]);return b(a.data)})}};l.default=s}).call(this,a("6e42")["default"])},"5e65":function(e,l,a){"use strict";(function(e){a("b52b");var l=i(a("66fd")),t=i(a("8959")),u=i(a("8e37")),n=i(a("4f38"));function i(e){return e&&e.__esModule?e:{default:e}}function o(e){for(var l=1;l<arguments.length;l++){var a=null!=arguments[l]?arguments[l]:{},t=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.forEach(function(l){r(e,l,a[l])})}return e}function r(e,l,a){return l in e?Object.defineProperty(e,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[l]=a,e}l.default.config.productionTip=!1,l.default.prototype.$http=n.default,t.default.mpType="app";var v=new l.default(o({store:u.default},t.default));e(v).$mount()}).call(this,a("6e42")["createApp"])},"66fd":function(e,l,a){"use strict";a.r(l),function(e){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var a=Object.freeze({});function t(e){return void 0===e||null===e}function u(e){return void 0!==e&&null!==e}function n(e){return!0===e}function i(e){return!1===e}function o(e){return"string"===typeof e||"number"===typeof e||"symbol"===typeof e||"boolean"===typeof e}function r(e){return null!==e&&"object"===typeof e}var v=Object.prototype.toString;function b(e){return"[object Object]"===v.call(e)}function s(e){return"[object RegExp]"===v.call(e)}function c(e){var l=parseFloat(String(e));return l>=0&&Math.floor(l)===l&&isFinite(e)}function h(e){return u(e)&&"function"===typeof e.then&&"function"===typeof e.catch}function f(e){return null==e?"":Array.isArray(e)||b(e)&&e.toString===v?JSON.stringify(e,null,2):String(e)}function p(e){var l=parseFloat(e);return isNaN(l)?e:l}function d(e,l){for(var a=Object.create(null),t=e.split(","),u=0;u<t.length;u++)a[t[u]]=!0;return l?function(e){return a[e.toLowerCase()]}:function(e){return a[e]}}d("slot,component",!0);var g=d("key,ref,slot,slot-scope,is");function y(e,l){if(e.length){var a=e.indexOf(l);if(a>-1)return e.splice(a,1)}}var x=Object.prototype.hasOwnProperty;function _(e,l){return x.call(e,l)}function m(e){var l=Object.create(null);return function(a){var t=l[a];return t||(l[a]=e(a))}}var w=/-(\w)/g,A=m(function(e){return e.replace(w,function(e,l){return l?l.toUpperCase():""})}),P=m(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),S=/\B([A-Z])/g,T=m(function(e){return e.replace(S,"-$1").toLowerCase()});function $(e,l){function a(a){var t=arguments.length;return t?t>1?e.apply(l,arguments):e.call(l,a):e.call(l)}return a._length=e.length,a}function O(e,l){return e.bind(l)}var k=Function.prototype.bind?O:$;function M(e,l){l=l||0;var a=e.length-l,t=new Array(a);while(a--)t[a]=e[a+l];return t}function C(e,l){for(var a in l)e[a]=l[a];return e}function L(e){for(var l={},a=0;a<e.length;a++)e[a]&&C(l,e[a]);return l}function E(e,l,a){}var F=function(e,l,a){return!1},R=function(e){return e};function D(e,l){if(e===l)return!0;var a=r(e),t=r(l);if(!a||!t)return!a&&!t&&String(e)===String(l);try{var u=Array.isArray(e),n=Array.isArray(l);if(u&&n)return e.length===l.length&&e.every(function(e,a){return D(e,l[a])});if(e instanceof Date&&l instanceof Date)return e.getTime()===l.getTime();if(u||n)return!1;var i=Object.keys(e),o=Object.keys(l);return i.length===o.length&&i.every(function(a){return D(e[a],l[a])})}catch(v){return!1}}function j(e,l){for(var a=0;a<e.length;a++)if(D(e[a],l))return a;return-1}function I(e){var l=!1;return function(){l||(l=!0,e.apply(this,arguments))}}var z=["component","directive","filter"],H=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],N={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:F,isReservedAttr:F,isUnknownElement:F,getTagNamespace:E,parsePlatformTagName:R,mustUseProp:F,async:!0,_lifecycleHooks:H},W=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function B(e){var l=(e+"").charCodeAt(0);return 36===l||95===l}function V(e,l,a,t){Object.defineProperty(e,l,{value:a,enumerable:!!t,writable:!0,configurable:!0})}var U=new RegExp("[^"+W.source+".$_\\d]");function G(e){if(!U.test(e)){var l=e.split(".");return function(e){for(var a=0;a<l.length;a++){if(!e)return;e=e[l[a]]}return e}}}var X,q="__proto__"in{},J="undefined"!==typeof window,Y="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,K=Y&&WXEnvironment.platform.toLowerCase(),Z=J&&window.navigator.userAgent.toLowerCase(),Q=Z&&/msie|trident/.test(Z),ee=(Z&&Z.indexOf("msie 9.0"),Z&&Z.indexOf("edge/")>0),le=(Z&&Z.indexOf("android"),Z&&/iphone|ipad|ipod|ios/.test(Z)||"ios"===K),ae=(Z&&/chrome\/\d+/.test(Z),Z&&/phantomjs/.test(Z),Z&&Z.match(/firefox\/(\d+)/),{}.watch);if(J)try{var te={};Object.defineProperty(te,"passive",{get:function(){}}),window.addEventListener("test-passive",null,te)}catch(lu){}var ue=function(){return void 0===X&&(X=!J&&!Y&&"undefined"!==typeof e&&(e["process"]&&"server"===e["process"].env.VUE_ENV)),X},ne=J&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ie(e){return"function"===typeof e&&/native code/.test(e.toString())}var oe,re="undefined"!==typeof Symbol&&ie(Symbol)&&"undefined"!==typeof Reflect&&ie(Reflect.ownKeys);oe="undefined"!==typeof Set&&ie(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var ve=E,be=0,se=function(){this.id=be++,this.subs=[]};se.prototype.addSub=function(e){this.subs.push(e)},se.prototype.removeSub=function(e){y(this.subs,e)},se.prototype.depend=function(){se.target&&se.target.addDep(this)},se.prototype.notify=function(){var e=this.subs.slice();for(var l=0,a=e.length;l<a;l++)e[l].update()},se.target=null;var ce=[];function he(e){ce.push(e),se.target=e}function fe(){ce.pop(),se.target=ce[ce.length-1]}var pe=function(e,l,a,t,u,n,i,o){this.tag=e,this.data=l,this.children=a,this.text=t,this.elm=u,this.ns=void 0,this.context=n,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=l&&l.key,this.componentOptions=i,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=o,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},de={child:{configurable:!0}};de.child.get=function(){return this.componentInstance},Object.defineProperties(pe.prototype,de);var ge=function(e){void 0===e&&(e="");var l=new pe;return l.text=e,l.isComment=!0,l};function ye(e){return new pe(void 0,void 0,void 0,String(e))}function xe(e){var l=new pe(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return l.ns=e.ns,l.isStatic=e.isStatic,l.key=e.key,l.isComment=e.isComment,l.fnContext=e.fnContext,l.fnOptions=e.fnOptions,l.fnScopeId=e.fnScopeId,l.asyncMeta=e.asyncMeta,l.isCloned=!0,l}var _e=Array.prototype,me=Object.create(_e),we=["push","pop","shift","unshift","splice","sort","reverse"];we.forEach(function(e){var l=_e[e];V(me,e,function(){var a=[],t=arguments.length;while(t--)a[t]=arguments[t];var u,n=l.apply(this,a),i=this.__ob__;switch(e){case"push":case"unshift":u=a;break;case"splice":u=a.slice(2);break}return u&&i.observeArray(u),i.dep.notify(),n})});var Ae=Object.getOwnPropertyNames(me),Pe=!0;function Se(e){Pe=e}var Te=function(e){this.value=e,this.dep=new se,this.vmCount=0,V(e,"__ob__",this),Array.isArray(e)?(q?$e(e,me):Oe(e,me,Ae),this.observeArray(e)):this.walk(e)};function $e(e,l){e.__proto__=l}function Oe(e,l,a){for(var t=0,u=a.length;t<u;t++){var n=a[t];V(e,n,l[n])}}function ke(e,l){var a;if(r(e)&&!(e instanceof pe))return _(e,"__ob__")&&e.__ob__ instanceof Te?a=e.__ob__:Pe&&!ue()&&(Array.isArray(e)||b(e))&&Object.isExtensible(e)&&!e._isVue&&(a=new Te(e)),l&&a&&a.vmCount++,a}function Me(e,l,a,t,u){var n=new se,i=Object.getOwnPropertyDescriptor(e,l);if(!i||!1!==i.configurable){var o=i&&i.get,r=i&&i.set;o&&!r||2!==arguments.length||(a=e[l]);var v=!u&&ke(a);Object.defineProperty(e,l,{enumerable:!0,configurable:!0,get:function(){var l=o?o.call(e):a;return se.target&&(n.depend(),v&&(v.dep.depend(),Array.isArray(l)&&Ee(l))),l},set:function(l){var t=o?o.call(e):a;l===t||l!==l&&t!==t||o&&!r||(r?r.call(e,l):a=l,v=!u&&ke(l),n.notify())}})}}function Ce(e,l,a){if(Array.isArray(e)&&c(l))return e.length=Math.max(e.length,l),e.splice(l,1,a),a;if(l in e&&!(l in Object.prototype))return e[l]=a,a;var t=e.__ob__;return e._isVue||t&&t.vmCount?a:t?(Me(t.value,l,a),t.dep.notify(),a):(e[l]=a,a)}function Le(e,l){if(Array.isArray(e)&&c(l))e.splice(l,1);else{var a=e.__ob__;e._isVue||a&&a.vmCount||_(e,l)&&(delete e[l],a&&a.dep.notify())}}function Ee(e){for(var l=void 0,a=0,t=e.length;a<t;a++)l=e[a],l&&l.__ob__&&l.__ob__.dep.depend(),Array.isArray(l)&&Ee(l)}Te.prototype.walk=function(e){for(var l=Object.keys(e),a=0;a<l.length;a++)Me(e,l[a])},Te.prototype.observeArray=function(e){for(var l=0,a=e.length;l<a;l++)ke(e[l])};var Fe=N.optionMergeStrategies;function Re(e,l){if(!l)return e;for(var a,t,u,n=re?Reflect.ownKeys(l):Object.keys(l),i=0;i<n.length;i++)a=n[i],"__ob__"!==a&&(t=e[a],u=l[a],_(e,a)?t!==u&&b(t)&&b(u)&&Re(t,u):Ce(e,a,u));return e}function De(e,l,a){return a?function(){var t="function"===typeof l?l.call(a,a):l,u="function"===typeof e?e.call(a,a):e;return t?Re(t,u):u}:l?e?function(){return Re("function"===typeof l?l.call(this,this):l,"function"===typeof e?e.call(this,this):e)}:l:e}function je(e,l){var a=l?e?e.concat(l):Array.isArray(l)?l:[l]:e;return a?Ie(a):a}function Ie(e){for(var l=[],a=0;a<e.length;a++)-1===l.indexOf(e[a])&&l.push(e[a]);return l}function ze(e,l,a,t){var u=Object.create(e||null);return l?C(u,l):u}Fe.data=function(e,l,a){return a?De(e,l,a):l&&"function"!==typeof l?e:De(e,l)},H.forEach(function(e){Fe[e]=je}),z.forEach(function(e){Fe[e+"s"]=ze}),Fe.watch=function(e,l,a,t){if(e===ae&&(e=void 0),l===ae&&(l=void 0),!l)return Object.create(e||null);if(!e)return l;var u={};for(var n in C(u,e),l){var i=u[n],o=l[n];i&&!Array.isArray(i)&&(i=[i]),u[n]=i?i.concat(o):Array.isArray(o)?o:[o]}return u},Fe.props=Fe.methods=Fe.inject=Fe.computed=function(e,l,a,t){if(!e)return l;var u=Object.create(null);return C(u,e),l&&C(u,l),u},Fe.provide=De;var He=function(e,l){return void 0===l?e:l};function Ne(e,l){var a=e.props;if(a){var t,u,n,i={};if(Array.isArray(a)){t=a.length;while(t--)u=a[t],"string"===typeof u&&(n=A(u),i[n]={type:null})}else if(b(a))for(var o in a)u=a[o],n=A(o),i[n]=b(u)?u:{type:u};else 0;e.props=i}}function We(e,l){var a=e.inject;if(a){var t=e.inject={};if(Array.isArray(a))for(var u=0;u<a.length;u++)t[a[u]]={from:a[u]};else if(b(a))for(var n in a){var i=a[n];t[n]=b(i)?C({from:n},i):{from:i}}else 0}}function Be(e){var l=e.directives;if(l)for(var a in l){var t=l[a];"function"===typeof t&&(l[a]={bind:t,update:t})}}function Ve(e,l,a){if("function"===typeof l&&(l=l.options),Ne(l,a),We(l,a),Be(l),!l._base&&(l.extends&&(e=Ve(e,l.extends,a)),l.mixins))for(var t=0,u=l.mixins.length;t<u;t++)e=Ve(e,l.mixins[t],a);var n,i={};for(n in e)o(n);for(n in l)_(e,n)||o(n);function o(t){var u=Fe[t]||He;i[t]=u(e[t],l[t],a,t)}return i}function Ue(e,l,a,t){if("string"===typeof a){var u=e[l];if(_(u,a))return u[a];var n=A(a);if(_(u,n))return u[n];var i=P(n);if(_(u,i))return u[i];var o=u[a]||u[n]||u[i];return o}}function Ge(e,l,a,t){var u=l[e],n=!_(a,e),i=a[e],o=Ye(Boolean,u.type);if(o>-1)if(n&&!_(u,"default"))i=!1;else if(""===i||i===T(e)){var r=Ye(String,u.type);(r<0||o<r)&&(i=!0)}if(void 0===i){i=Xe(t,u,e);var v=Pe;Se(!0),ke(i),Se(v)}return i}function Xe(e,l,a){if(_(l,"default")){var t=l.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[a]&&void 0!==e._props[a]?e._props[a]:"function"===typeof t&&"Function"!==qe(l.type)?t.call(e):t}}function qe(e){var l=e&&e.toString().match(/^\s*function (\w+)/);return l?l[1]:""}function Je(e,l){return qe(e)===qe(l)}function Ye(e,l){if(!Array.isArray(l))return Je(l,e)?0:-1;for(var a=0,t=l.length;a<t;a++)if(Je(l[a],e))return a;return-1}function Ke(e,l,a){he();try{if(l){var t=l;while(t=t.$parent){var u=t.$options.errorCaptured;if(u)for(var n=0;n<u.length;n++)try{var i=!1===u[n].call(t,e,l,a);if(i)return}catch(lu){Qe(lu,t,"errorCaptured hook")}}}Qe(e,l,a)}finally{fe()}}function Ze(e,l,a,t,u){var n;try{n=a?e.apply(l,a):e.call(l),n&&!n._isVue&&h(n)&&!n._handled&&(n.catch(function(e){return Ke(e,t,u+" (Promise/async)")}),n._handled=!0)}catch(lu){Ke(lu,t,u)}return n}function Qe(e,l,a){if(N.errorHandler)try{return N.errorHandler.call(null,e,l,a)}catch(lu){lu!==e&&el(lu,null,"config.errorHandler")}el(e,l,a)}function el(e,l,a){if(!J&&!Y||"undefined"===typeof console)throw e;console.error(e)}var ll,al=[],tl=!1;function ul(){tl=!1;var e=al.slice(0);al.length=0;for(var l=0;l<e.length;l++)e[l]()}if("undefined"!==typeof Promise&&ie(Promise)){var nl=Promise.resolve();ll=function(){nl.then(ul),le&&setTimeout(E)}}else if(Q||"undefined"===typeof MutationObserver||!ie(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())ll="undefined"!==typeof setImmediate&&ie(setImmediate)?function(){setImmediate(ul)}:function(){setTimeout(ul,0)};else{var il=1,ol=new MutationObserver(ul),rl=document.createTextNode(String(il));ol.observe(rl,{characterData:!0}),ll=function(){il=(il+1)%2,rl.data=String(il)}}function vl(e,l){var a;if(al.push(function(){if(e)try{e.call(l)}catch(lu){Ke(lu,l,"nextTick")}else a&&a(l)}),tl||(tl=!0,ll()),!e&&"undefined"!==typeof Promise)return new Promise(function(e){a=e})}var bl=new oe;function sl(e){cl(e,bl),bl.clear()}function cl(e,l){var a,t,u=Array.isArray(e);if(!(!u&&!r(e)||Object.isFrozen(e)||e instanceof pe)){if(e.__ob__){var n=e.__ob__.dep.id;if(l.has(n))return;l.add(n)}if(u){a=e.length;while(a--)cl(e[a],l)}else{t=Object.keys(e),a=t.length;while(a--)cl(e[t[a]],l)}}}var hl=m(function(e){var l="&"===e.charAt(0);e=l?e.slice(1):e;var a="~"===e.charAt(0);e=a?e.slice(1):e;var t="!"===e.charAt(0);return e=t?e.slice(1):e,{name:e,once:a,capture:t,passive:l}});function fl(e,l){function a(){var e=arguments,t=a.fns;if(!Array.isArray(t))return Ze(t,null,arguments,l,"v-on handler");for(var u=t.slice(),n=0;n<u.length;n++)Ze(u[n],null,e,l,"v-on handler")}return a.fns=e,a}function pl(e,l,a,u,i,o){var r,v,b,s;for(r in e)v=e[r],b=l[r],s=hl(r),t(v)||(t(b)?(t(v.fns)&&(v=e[r]=fl(v,o)),n(s.once)&&(v=e[r]=i(s.name,v,s.capture)),a(s.name,v,s.capture,s.passive,s.params)):v!==b&&(b.fns=v,e[r]=b));for(r in l)t(e[r])&&(s=hl(r),u(s.name,l[r],s.capture))}function dl(e,l,a){var n=l.options.props;if(!t(n)){var i={},o=e.attrs,r=e.props;if(u(o)||u(r))for(var v in n){var b=T(v);gl(i,r,v,b,!0)||gl(i,o,v,b,!1)}return i}}function gl(e,l,a,t,n){if(u(l)){if(_(l,a))return e[a]=l[a],n||delete l[a],!0;if(_(l,t))return e[a]=l[t],n||delete l[t],!0}return!1}function yl(e){for(var l=0;l<e.length;l++)if(Array.isArray(e[l]))return Array.prototype.concat.apply([],e);return e}function xl(e){return o(e)?[ye(e)]:Array.isArray(e)?ml(e):void 0}function _l(e){return u(e)&&u(e.text)&&i(e.isComment)}function ml(e,l){var a,i,r,v,b=[];for(a=0;a<e.length;a++)i=e[a],t(i)||"boolean"===typeof i||(r=b.length-1,v=b[r],Array.isArray(i)?i.length>0&&(i=ml(i,(l||"")+"_"+a),_l(i[0])&&_l(v)&&(b[r]=ye(v.text+i[0].text),i.shift()),b.push.apply(b,i)):o(i)?_l(v)?b[r]=ye(v.text+i):""!==i&&b.push(ye(i)):_l(i)&&_l(v)?b[r]=ye(v.text+i.text):(n(e._isVList)&&u(i.tag)&&t(i.key)&&u(l)&&(i.key="__vlist"+l+"_"+a+"__"),b.push(i)));return b}function wl(e){var l=e.$options.provide;l&&(e._provided="function"===typeof l?l.call(e):l)}function Al(e){var l=Pl(e.$options.inject,e);l&&(Se(!1),Object.keys(l).forEach(function(a){Me(e,a,l[a])}),Se(!0))}function Pl(e,l){if(e){for(var a=Object.create(null),t=re?Reflect.ownKeys(e):Object.keys(e),u=0;u<t.length;u++){var n=t[u];if("__ob__"!==n){var i=e[n].from,o=l;while(o){if(o._provided&&_(o._provided,i)){a[n]=o._provided[i];break}o=o.$parent}if(!o)if("default"in e[n]){var r=e[n].default;a[n]="function"===typeof r?r.call(l):r}else 0}}return a}}function Sl(e,l){if(!e||!e.length)return{};for(var a={},t=0,u=e.length;t<u;t++){var n=e[t],i=n.data;if(i&&i.attrs&&i.attrs.slot&&delete i.attrs.slot,n.context!==l&&n.fnContext!==l||!i||null==i.slot)(a.default||(a.default=[])).push(n);else{var o=i.slot,r=a[o]||(a[o]=[]);"template"===n.tag?r.push.apply(r,n.children||[]):r.push(n)}}for(var v in a)a[v].every(Tl)&&delete a[v];return a}function Tl(e){return e.isComment&&!e.asyncFactory||" "===e.text}function $l(e,l,t){var u,n=Object.keys(l).length>0,i=e?!!e.$stable:!n,o=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(i&&t&&t!==a&&o===t.$key&&!n&&!t.$hasNormal)return t;for(var r in u={},e)e[r]&&"$"!==r[0]&&(u[r]=Ol(l,r,e[r]))}else u={};for(var v in l)v in u||(u[v]=kl(l,v));return e&&Object.isExtensible(e)&&(e._normalized=u),V(u,"$stable",i),V(u,"$key",o),V(u,"$hasNormal",n),u}function Ol(e,l,a){var t=function(){var e=arguments.length?a.apply(null,arguments):a({});return e=e&&"object"===typeof e&&!Array.isArray(e)?[e]:xl(e),e&&(0===e.length||1===e.length&&e[0].isComment)?void 0:e};return a.proxy&&Object.defineProperty(e,l,{get:t,enumerable:!0,configurable:!0}),t}function kl(e,l){return function(){return e[l]}}function Ml(e,l){var a,t,n,i,o;if(Array.isArray(e)||"string"===typeof e)for(a=new Array(e.length),t=0,n=e.length;t<n;t++)a[t]=l(e[t],t);else if("number"===typeof e)for(a=new Array(e),t=0;t<e;t++)a[t]=l(t+1,t);else if(r(e))if(re&&e[Symbol.iterator]){a=[];var v=e[Symbol.iterator](),b=v.next();while(!b.done)a.push(l(b.value,a.length)),b=v.next()}else for(i=Object.keys(e),a=new Array(i.length),t=0,n=i.length;t<n;t++)o=i[t],a[t]=l(e[o],o,t);return u(a)||(a=[]),a._isVList=!0,a}function Cl(e,l,a,t){var u,n=this.$scopedSlots[e];n?(a=a||{},t&&(a=C(C({},t),a)),u=n(a)||l):u=this.$slots[e]||l;var i=a&&a.slot;return i?this.$createElement("template",{slot:i},u):u}function Ll(e){return Ue(this.$options,"filters",e,!0)||R}function El(e,l){return Array.isArray(e)?-1===e.indexOf(l):e!==l}function Fl(e,l,a,t,u){var n=N.keyCodes[l]||a;return u&&t&&!N.keyCodes[l]?El(u,t):n?El(n,e):t?T(t)!==l:void 0}function Rl(e,l,a,t,u){if(a)if(r(a)){var n;Array.isArray(a)&&(a=L(a));var i=function(i){if("class"===i||"style"===i||g(i))n=e;else{var o=e.attrs&&e.attrs.type;n=t||N.mustUseProp(l,o,i)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var r=A(i),v=T(i);if(!(r in n)&&!(v in n)&&(n[i]=a[i],u)){var b=e.on||(e.on={});b["update:"+i]=function(e){a[i]=e}}};for(var o in a)i(o)}else;return e}function Dl(e,l){var a=this._staticTrees||(this._staticTrees=[]),t=a[e];return t&&!l?t:(t=a[e]=this.$options.staticRenderFns[e].call(this._renderProxy,null,this),Il(t,"__static__"+e,!1),t)}function jl(e,l,a){return Il(e,"__once__"+l+(a?"_"+a:""),!0),e}function Il(e,l,a){if(Array.isArray(e))for(var t=0;t<e.length;t++)e[t]&&"string"!==typeof e[t]&&zl(e[t],l+"_"+t,a);else zl(e,l,a)}function zl(e,l,a){e.isStatic=!0,e.key=l,e.isOnce=a}function Hl(e,l){if(l)if(b(l)){var a=e.on=e.on?C({},e.on):{};for(var t in l){var u=a[t],n=l[t];a[t]=u?[].concat(u,n):n}}else;return e}function Nl(e,l,a,t){l=l||{$stable:!a};for(var u=0;u<e.length;u++){var n=e[u];Array.isArray(n)?Nl(n,l,a):n&&(n.proxy&&(n.fn.proxy=!0),l[n.key]=n.fn)}return t&&(l.$key=t),l}function Wl(e,l){for(var a=0;a<l.length;a+=2){var t=l[a];"string"===typeof t&&t&&(e[l[a]]=l[a+1])}return e}function Bl(e,l){return"string"===typeof e?l+e:e}function Vl(e){e._o=jl,e._n=p,e._s=f,e._l=Ml,e._t=Cl,e._q=D,e._i=j,e._m=Dl,e._f=Ll,e._k=Fl,e._b=Rl,e._v=ye,e._e=ge,e._u=Nl,e._g=Hl,e._d=Wl,e._p=Bl}function Ul(e,l,t,u,i){var o,r=this,v=i.options;_(u,"_uid")?(o=Object.create(u),o._original=u):(o=u,u=u._original);var b=n(v._compiled),s=!b;this.data=e,this.props=l,this.children=t,this.parent=u,this.listeners=e.on||a,this.injections=Pl(v.inject,u),this.slots=function(){return r.$slots||$l(e.scopedSlots,r.$slots=Sl(t,u)),r.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return $l(e.scopedSlots,this.slots())}}),b&&(this.$options=v,this.$slots=this.slots(),this.$scopedSlots=$l(e.scopedSlots,this.$slots)),v._scopeId?this._c=function(e,l,a,t){var n=ua(o,e,l,a,t,s);return n&&!Array.isArray(n)&&(n.fnScopeId=v._scopeId,n.fnContext=u),n}:this._c=function(e,l,a,t){return ua(o,e,l,a,t,s)}}function Gl(e,l,t,n,i){var o=e.options,r={},v=o.props;if(u(v))for(var b in v)r[b]=Ge(b,v,l||a);else u(t.attrs)&&ql(r,t.attrs),u(t.props)&&ql(r,t.props);var s=new Ul(t,r,i,n,e),c=o.render.call(null,s._c,s);if(c instanceof pe)return Xl(c,t,s.parent,o,s);if(Array.isArray(c)){for(var h=xl(c)||[],f=new Array(h.length),p=0;p<h.length;p++)f[p]=Xl(h[p],t,s.parent,o,s);return f}}function Xl(e,l,a,t,u){var n=xe(e);return n.fnContext=a,n.fnOptions=t,l.slot&&((n.data||(n.data={})).slot=l.slot),n}function ql(e,l){for(var a in l)e[A(a)]=l[a]}Vl(Ul.prototype);var Jl={init:function(e,l){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var a=e;Jl.prepatch(a,a)}else{var t=e.componentInstance=Zl(e,Aa);t.$mount(l?e.elm:void 0,l)}},prepatch:function(e,l){var a=l.componentOptions,t=l.componentInstance=e.componentInstance;$a(t,a.propsData,a.listeners,l,a.children)},insert:function(e){var l=e.context,a=e.componentInstance;a._isMounted||(a._isMounted=!0,Ca(a,"mounted")),e.data.keepAlive&&(l._isMounted?Ba(a):ka(a,!0))},destroy:function(e){var l=e.componentInstance;l._isDestroyed||(e.data.keepAlive?Ma(l,!0):l.$destroy())}},Yl=Object.keys(Jl);function Kl(e,l,a,i,o){if(!t(e)){var v=a.$options._base;if(r(e)&&(e=v.extend(e)),"function"===typeof e){var b;if(t(e.cid)&&(b=e,e=fa(b,v),void 0===e))return ha(b,l,a,i,o);l=l||{},ct(e),u(l.model)&&la(e.options,l);var s=dl(l,e,o);if(n(e.options.functional))return Gl(e,s,l,a,i);var c=l.on;if(l.on=l.nativeOn,n(e.options.abstract)){var h=l.slot;l={},h&&(l.slot=h)}Ql(l);var f=e.options.name||o,p=new pe("vue-component-"+e.cid+(f?"-"+f:""),l,void 0,void 0,void 0,a,{Ctor:e,propsData:s,listeners:c,tag:o,children:i},b);return p}}}function Zl(e,l){var a={_isComponent:!0,_parentVnode:e,parent:l},t=e.data.inlineTemplate;return u(t)&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),new e.componentOptions.Ctor(a)}function Ql(e){for(var l=e.hook||(e.hook={}),a=0;a<Yl.length;a++){var t=Yl[a],u=l[t],n=Jl[t];u===n||u&&u._merged||(l[t]=u?ea(n,u):n)}}function ea(e,l){var a=function(a,t){e(a,t),l(a,t)};return a._merged=!0,a}function la(e,l){var a=e.model&&e.model.prop||"value",t=e.model&&e.model.event||"input";(l.attrs||(l.attrs={}))[a]=l.model.value;var n=l.on||(l.on={}),i=n[t],o=l.model.callback;u(i)?(Array.isArray(i)?-1===i.indexOf(o):i!==o)&&(n[t]=[o].concat(i)):n[t]=o}var aa=1,ta=2;function ua(e,l,a,t,u,i){return(Array.isArray(a)||o(a))&&(u=t,t=a,a=void 0),n(i)&&(u=ta),na(e,l,a,t,u)}function na(e,l,a,t,n){if(u(a)&&u(a.__ob__))return ge();if(u(a)&&u(a.is)&&(l=a.is),!l)return ge();var i,o,r;(Array.isArray(t)&&"function"===typeof t[0]&&(a=a||{},a.scopedSlots={default:t[0]},t.length=0),n===ta?t=xl(t):n===aa&&(t=yl(t)),"string"===typeof l)?(o=e.$vnode&&e.$vnode.ns||N.getTagNamespace(l),i=N.isReservedTag(l)?new pe(N.parsePlatformTagName(l),a,t,void 0,void 0,e):a&&a.pre||!u(r=Ue(e.$options,"components",l))?new pe(l,a,t,void 0,void 0,e):Kl(r,a,e,t,l)):i=Kl(l,a,e,t);return Array.isArray(i)?i:u(i)?(u(o)&&ia(i,o),u(a)&&oa(a),i):ge()}function ia(e,l,a){if(e.ns=l,"foreignObject"===e.tag&&(l=void 0,a=!0),u(e.children))for(var i=0,o=e.children.length;i<o;i++){var r=e.children[i];u(r.tag)&&(t(r.ns)||n(a)&&"svg"!==r.tag)&&ia(r,l,a)}}function oa(e){r(e.style)&&sl(e.style),r(e.class)&&sl(e.class)}function ra(e){e._vnode=null,e._staticTrees=null;var l=e.$options,t=e.$vnode=l._parentVnode,u=t&&t.context;e.$slots=Sl(l._renderChildren,u),e.$scopedSlots=a,e._c=function(l,a,t,u){return ua(e,l,a,t,u,!1)},e.$createElement=function(l,a,t,u){return ua(e,l,a,t,u,!0)};var n=t&&t.data;Me(e,"$attrs",n&&n.attrs||a,null,!0),Me(e,"$listeners",l._parentListeners||a,null,!0)}var va,ba=null;function sa(e){Vl(e.prototype),e.prototype.$nextTick=function(e){return vl(e,this)},e.prototype._render=function(){var e,l=this,a=l.$options,t=a.render,u=a._parentVnode;u&&(l.$scopedSlots=$l(u.data.scopedSlots,l.$slots,l.$scopedSlots)),l.$vnode=u;try{ba=l,e=t.call(l._renderProxy,l.$createElement)}catch(lu){Ke(lu,l,"render"),e=l._vnode}finally{ba=null}return Array.isArray(e)&&1===e.length&&(e=e[0]),e instanceof pe||(e=ge()),e.parent=u,e}}function ca(e,l){return(e.__esModule||re&&"Module"===e[Symbol.toStringTag])&&(e=e.default),r(e)?l.extend(e):e}function ha(e,l,a,t,u){var n=ge();return n.asyncFactory=e,n.asyncMeta={data:l,context:a,children:t,tag:u},n}function fa(e,l){if(n(e.error)&&u(e.errorComp))return e.errorComp;if(u(e.resolved))return e.resolved;var a=ba;if(a&&u(e.owners)&&-1===e.owners.indexOf(a)&&e.owners.push(a),n(e.loading)&&u(e.loadingComp))return e.loadingComp;if(a&&!u(e.owners)){var i=e.owners=[a],o=!0,v=null,b=null;a.$on("hook:destroyed",function(){return y(i,a)});var s=function(e){for(var l=0,a=i.length;l<a;l++)i[l].$forceUpdate();e&&(i.length=0,null!==v&&(clearTimeout(v),v=null),null!==b&&(clearTimeout(b),b=null))},c=I(function(a){e.resolved=ca(a,l),o?i.length=0:s(!0)}),f=I(function(l){u(e.errorComp)&&(e.error=!0,s(!0))}),p=e(c,f);return r(p)&&(h(p)?t(e.resolved)&&p.then(c,f):h(p.component)&&(p.component.then(c,f),u(p.error)&&(e.errorComp=ca(p.error,l)),u(p.loading)&&(e.loadingComp=ca(p.loading,l),0===p.delay?e.loading=!0:v=setTimeout(function(){v=null,t(e.resolved)&&t(e.error)&&(e.loading=!0,s(!1))},p.delay||200)),u(p.timeout)&&(b=setTimeout(function(){b=null,t(e.resolved)&&f(null)},p.timeout)))),o=!1,e.loading?e.loadingComp:e.resolved}}function pa(e){return e.isComment&&e.asyncFactory}function da(e){if(Array.isArray(e))for(var l=0;l<e.length;l++){var a=e[l];if(u(a)&&(u(a.componentOptions)||pa(a)))return a}}function ga(e){e._events=Object.create(null),e._hasHookEvent=!1;var l=e.$options._parentListeners;l&&ma(e,l)}function ya(e,l){va.$on(e,l)}function xa(e,l){va.$off(e,l)}function _a(e,l){var a=va;return function t(){var u=l.apply(null,arguments);null!==u&&a.$off(e,t)}}function ma(e,l,a){va=e,pl(l,a||{},ya,xa,_a,e),va=void 0}function wa(e){var l=/^hook:/;e.prototype.$on=function(e,a){var t=this;if(Array.isArray(e))for(var u=0,n=e.length;u<n;u++)t.$on(e[u],a);else(t._events[e]||(t._events[e]=[])).push(a),l.test(e)&&(t._hasHookEvent=!0);return t},e.prototype.$once=function(e,l){var a=this;function t(){a.$off(e,t),l.apply(a,arguments)}return t.fn=l,a.$on(e,t),a},e.prototype.$off=function(e,l){var a=this;if(!arguments.length)return a._events=Object.create(null),a;if(Array.isArray(e)){for(var t=0,u=e.length;t<u;t++)a.$off(e[t],l);return a}var n,i=a._events[e];if(!i)return a;if(!l)return a._events[e]=null,a;var o=i.length;while(o--)if(n=i[o],n===l||n.fn===l){i.splice(o,1);break}return a},e.prototype.$emit=function(e){var l=this,a=l._events[e];if(a){a=a.length>1?M(a):a;for(var t=M(arguments,1),u='event handler for "'+e+'"',n=0,i=a.length;n<i;n++)Ze(a[n],l,t,l,u)}return l}}var Aa=null;function Pa(e){var l=Aa;return Aa=e,function(){Aa=l}}function Sa(e){var l=e.$options,a=l.parent;if(a&&!l.abstract){while(a.$options.abstract&&a.$parent)a=a.$parent;a.$children.push(e)}e.$parent=a,e.$root=a?a.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function Ta(e){e.prototype._update=function(e,l){var a=this,t=a.$el,u=a._vnode,n=Pa(a);a._vnode=e,a.$el=u?a.__patch__(u,e):a.__patch__(a.$el,e,l,!1),n(),t&&(t.__vue__=null),a.$el&&(a.$el.__vue__=a),a.$vnode&&a.$parent&&a.$vnode===a.$parent._vnode&&(a.$parent.$el=a.$el)},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){Ca(e,"beforeDestroy"),e._isBeingDestroyed=!0;var l=e.$parent;!l||l._isBeingDestroyed||e.$options.abstract||y(l.$children,e),e._watcher&&e._watcher.teardown();var a=e._watchers.length;while(a--)e._watchers[a].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),Ca(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}function $a(e,l,t,u,n){var i=u.data.scopedSlots,o=e.$scopedSlots,r=!!(i&&!i.$stable||o!==a&&!o.$stable||i&&e.$scopedSlots.$key!==i.$key),v=!!(n||e.$options._renderChildren||r);if(e.$options._parentVnode=u,e.$vnode=u,e._vnode&&(e._vnode.parent=u),e.$options._renderChildren=n,e.$attrs=u.data.attrs||a,e.$listeners=t||a,l&&e.$options.props){Se(!1);for(var b=e._props,s=e.$options._propKeys||[],c=0;c<s.length;c++){var h=s[c],f=e.$options.props;b[h]=Ge(h,f,l,e)}Se(!0),e.$options.propsData=l}t=t||a;var p=e.$options._parentListeners;e.$options._parentListeners=t,ma(e,t,p),v&&(e.$slots=Sl(n,u.context),e.$forceUpdate())}function Oa(e){while(e&&(e=e.$parent))if(e._inactive)return!0;return!1}function ka(e,l){if(l){if(e._directInactive=!1,Oa(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var a=0;a<e.$children.length;a++)ka(e.$children[a]);Ca(e,"activated")}}function Ma(e,l){if((!l||(e._directInactive=!0,!Oa(e)))&&!e._inactive){e._inactive=!0;for(var a=0;a<e.$children.length;a++)Ma(e.$children[a]);Ca(e,"deactivated")}}function Ca(e,l){he();var a=e.$options[l],t=l+" hook";if(a)for(var u=0,n=a.length;u<n;u++)Ze(a[u],e,null,e,t);e._hasHookEvent&&e.$emit("hook:"+l),fe()}var La=[],Ea=[],Fa={},Ra=!1,Da=!1,ja=0;function Ia(){ja=La.length=Ea.length=0,Fa={},Ra=Da=!1}var za=Date.now;if(J&&!Q){var Ha=window.performance;Ha&&"function"===typeof Ha.now&&za()>document.createEvent("Event").timeStamp&&(za=function(){return Ha.now()})}function Na(){var e,l;for(za(),Da=!0,La.sort(function(e,l){return e.id-l.id}),ja=0;ja<La.length;ja++)e=La[ja],e.before&&e.before(),l=e.id,Fa[l]=null,e.run();var a=Ea.slice(),t=La.slice();Ia(),Va(a),Wa(t),ne&&N.devtools&&ne.emit("flush")}function Wa(e){var l=e.length;while(l--){var a=e[l],t=a.vm;t._watcher===a&&t._isMounted&&!t._isDestroyed&&Ca(t,"updated")}}function Ba(e){e._inactive=!1,Ea.push(e)}function Va(e){for(var l=0;l<e.length;l++)e[l]._inactive=!0,ka(e[l],!0)}function Ua(e){var l=e.id;if(null==Fa[l]){if(Fa[l]=!0,Da){var a=La.length-1;while(a>ja&&La[a].id>e.id)a--;La.splice(a+1,0,e)}else La.push(e);Ra||(Ra=!0,vl(Na))}}var Ga=0,Xa=function(e,l,a,t,u){this.vm=e,u&&(e._watcher=this),e._watchers.push(this),t?(this.deep=!!t.deep,this.user=!!t.user,this.lazy=!!t.lazy,this.sync=!!t.sync,this.before=t.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=a,this.id=++Ga,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new oe,this.newDepIds=new oe,this.expression="","function"===typeof l?this.getter=l:(this.getter=G(l),this.getter||(this.getter=E)),this.value=this.lazy?void 0:this.get()};Xa.prototype.get=function(){var e;he(this);var l=this.vm;try{e=this.getter.call(l,l)}catch(lu){if(!this.user)throw lu;Ke(lu,l,'getter for watcher "'+this.expression+'"')}finally{this.deep&&sl(e),fe(),this.cleanupDeps()}return e},Xa.prototype.addDep=function(e){var l=e.id;this.newDepIds.has(l)||(this.newDepIds.add(l),this.newDeps.push(e),this.depIds.has(l)||e.addSub(this))},Xa.prototype.cleanupDeps=function(){var e=this.deps.length;while(e--){var l=this.deps[e];this.newDepIds.has(l.id)||l.removeSub(this)}var a=this.depIds;this.depIds=this.newDepIds,this.newDepIds=a,this.newDepIds.clear(),a=this.deps,this.deps=this.newDeps,this.newDeps=a,this.newDeps.length=0},Xa.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Ua(this)},Xa.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||r(e)||this.deep){var l=this.value;if(this.value=e,this.user)try{this.cb.call(this.vm,e,l)}catch(lu){Ke(lu,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,e,l)}}},Xa.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Xa.prototype.depend=function(){var e=this.deps.length;while(e--)this.deps[e].depend()},Xa.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||y(this.vm._watchers,this);var e=this.deps.length;while(e--)this.deps[e].removeSub(this);this.active=!1}};var qa={enumerable:!0,configurable:!0,get:E,set:E};function Ja(e,l,a){qa.get=function(){return this[l][a]},qa.set=function(e){this[l][a]=e},Object.defineProperty(e,a,qa)}function Ya(e){e._watchers=[];var l=e.$options;l.props&&Ka(e,l.props),l.methods&&nt(e,l.methods),l.data?Za(e):ke(e._data={},!0),l.computed&&lt(e,l.computed),l.watch&&l.watch!==ae&&it(e,l.watch)}function Ka(e,l){var a=e.$options.propsData||{},t=e._props={},u=e.$options._propKeys=[],n=!e.$parent;n||Se(!1);var i=function(n){u.push(n);var i=Ge(n,l,a,e);Me(t,n,i),n in e||Ja(e,"_props",n)};for(var o in l)i(o);Se(!0)}function Za(e){var l=e.$options.data;l=e._data="function"===typeof l?Qa(l,e):l||{},b(l)||(l={});var a=Object.keys(l),t=e.$options.props,u=(e.$options.methods,a.length);while(u--){var n=a[u];0,t&&_(t,n)||B(n)||Ja(e,"_data",n)}ke(l,!0)}function Qa(e,l){he();try{return e.call(l,l)}catch(lu){return Ke(lu,l,"data()"),{}}finally{fe()}}var et={lazy:!0};function lt(e,l){var a=e._computedWatchers=Object.create(null),t=ue();for(var u in l){var n=l[u],i="function"===typeof n?n:n.get;0,t||(a[u]=new Xa(e,i||E,E,et)),u in e||at(e,u,n)}}function at(e,l,a){var t=!ue();"function"===typeof a?(qa.get=t?tt(l):ut(a),qa.set=E):(qa.get=a.get?t&&!1!==a.cache?tt(l):ut(a.get):E,qa.set=a.set||E),Object.defineProperty(e,l,qa)}function tt(e){return function(){var l=this._computedWatchers&&this._computedWatchers[e];if(l)return l.dirty&&l.evaluate(),se.target&&l.depend(),l.value}}function ut(e){return function(){return e.call(this,this)}}function nt(e,l){e.$options.props;for(var a in l)e[a]="function"!==typeof l[a]?E:k(l[a],e)}function it(e,l){for(var a in l){var t=l[a];if(Array.isArray(t))for(var u=0;u<t.length;u++)ot(e,a,t[u]);else ot(e,a,t)}}function ot(e,l,a,t){return b(a)&&(t=a,a=a.handler),"string"===typeof a&&(a=e[a]),e.$watch(l,a,t)}function rt(e){var l={get:function(){return this._data}},a={get:function(){return this._props}};Object.defineProperty(e.prototype,"$data",l),Object.defineProperty(e.prototype,"$props",a),e.prototype.$set=Ce,e.prototype.$delete=Le,e.prototype.$watch=function(e,l,a){var t=this;if(b(l))return ot(t,e,l,a);a=a||{},a.user=!0;var u=new Xa(t,e,l,a);if(a.immediate)try{l.call(t,u.value)}catch(n){Ke(n,t,'callback for immediate watcher "'+u.expression+'"')}return function(){u.teardown()}}}var vt=0;function bt(e){e.prototype._init=function(e){var l=this;l._uid=vt++,l._isVue=!0,e&&e._isComponent?st(l,e):l.$options=Ve(ct(l.constructor),e||{},l),l._renderProxy=l,l._self=l,Sa(l),ga(l),ra(l),Ca(l,"beforeCreate"),"mp-toutiao"!==l.mpHost&&Al(l),Ya(l),"mp-toutiao"!==l.mpHost&&wl(l),"mp-toutiao"!==l.mpHost&&Ca(l,"created"),l.$options.el&&l.$mount(l.$options.el)}}function st(e,l){var a=e.$options=Object.create(e.constructor.options),t=l._parentVnode;a.parent=l.parent,a._parentVnode=t;var u=t.componentOptions;a.propsData=u.propsData,a._parentListeners=u.listeners,a._renderChildren=u.children,a._componentTag=u.tag,l.render&&(a.render=l.render,a.staticRenderFns=l.staticRenderFns)}function ct(e){var l=e.options;if(e.super){var a=ct(e.super),t=e.superOptions;if(a!==t){e.superOptions=a;var u=ht(e);u&&C(e.extendOptions,u),l=e.options=Ve(a,e.extendOptions),l.name&&(l.components[l.name]=e)}}return l}function ht(e){var l,a=e.options,t=e.sealedOptions;for(var u in a)a[u]!==t[u]&&(l||(l={}),l[u]=a[u]);return l}function ft(e){this._init(e)}function pt(e){e.use=function(e){var l=this._installedPlugins||(this._installedPlugins=[]);if(l.indexOf(e)>-1)return this;var a=M(arguments,1);return a.unshift(this),"function"===typeof e.install?e.install.apply(e,a):"function"===typeof e&&e.apply(null,a),l.push(e),this}}function dt(e){e.mixin=function(e){return this.options=Ve(this.options,e),this}}function gt(e){e.cid=0;var l=1;e.extend=function(e){e=e||{};var a=this,t=a.cid,u=e._Ctor||(e._Ctor={});if(u[t])return u[t];var n=e.name||a.options.name;var i=function(e){this._init(e)};return i.prototype=Object.create(a.prototype),i.prototype.constructor=i,i.cid=l++,i.options=Ve(a.options,e),i["super"]=a,i.options.props&&yt(i),i.options.computed&&xt(i),i.extend=a.extend,i.mixin=a.mixin,i.use=a.use,z.forEach(function(e){i[e]=a[e]}),n&&(i.options.components[n]=i),i.superOptions=a.options,i.extendOptions=e,i.sealedOptions=C({},i.options),u[t]=i,i}}function yt(e){var l=e.options.props;for(var a in l)Ja(e.prototype,"_props",a)}function xt(e){var l=e.options.computed;for(var a in l)at(e.prototype,a,l[a])}function _t(e){z.forEach(function(l){e[l]=function(e,a){return a?("component"===l&&b(a)&&(a.name=a.name||e,a=this.options._base.extend(a)),"directive"===l&&"function"===typeof a&&(a={bind:a,update:a}),this.options[l+"s"][e]=a,a):this.options[l+"s"][e]}})}function mt(e){return e&&(e.Ctor.options.name||e.tag)}function wt(e,l){return Array.isArray(e)?e.indexOf(l)>-1:"string"===typeof e?e.split(",").indexOf(l)>-1:!!s(e)&&e.test(l)}function At(e,l){var a=e.cache,t=e.keys,u=e._vnode;for(var n in a){var i=a[n];if(i){var o=mt(i.componentOptions);o&&!l(o)&&Pt(a,n,t,u)}}}function Pt(e,l,a,t){var u=e[l];!u||t&&u.tag===t.tag||u.componentInstance.$destroy(),e[l]=null,y(a,l)}bt(ft),rt(ft),wa(ft),Ta(ft),sa(ft);var St=[String,RegExp,Array],Tt={name:"keep-alive",abstract:!0,props:{include:St,exclude:St,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)Pt(this.cache,e,this.keys)},mounted:function(){var e=this;this.$watch("include",function(l){At(e,function(e){return wt(l,e)})}),this.$watch("exclude",function(l){At(e,function(e){return!wt(l,e)})})},render:function(){var e=this.$slots.default,l=da(e),a=l&&l.componentOptions;if(a){var t=mt(a),u=this,n=u.include,i=u.exclude;if(n&&(!t||!wt(n,t))||i&&t&&wt(i,t))return l;var o=this,r=o.cache,v=o.keys,b=null==l.key?a.Ctor.cid+(a.tag?"::"+a.tag:""):l.key;r[b]?(l.componentInstance=r[b].componentInstance,y(v,b),v.push(b)):(r[b]=l,v.push(b),this.max&&v.length>parseInt(this.max)&&Pt(r,v[0],v,this._vnode)),l.data.keepAlive=!0}return l||e&&e[0]}},$t={KeepAlive:Tt};function Ot(e){var l={get:function(){return N}};Object.defineProperty(e,"config",l),e.util={warn:ve,extend:C,mergeOptions:Ve,defineReactive:Me},e.set=Ce,e.delete=Le,e.nextTick=vl,e.observable=function(e){return ke(e),e},e.options=Object.create(null),z.forEach(function(l){e.options[l+"s"]=Object.create(null)}),e.options._base=e,C(e.options.components,$t),pt(e),dt(e),gt(e),_t(e)}Ot(ft),Object.defineProperty(ft.prototype,"$isServer",{get:ue}),Object.defineProperty(ft.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(ft,"FunctionalRenderContext",{value:Ul}),ft.version="2.6.10";var kt="[object Array]",Mt="[object Object]";function Ct(e,l){var a={};return Lt(e,l),Et(e,l,"",a),a}function Lt(e,l){if(e!==l){var a=Rt(e),t=Rt(l);if(a==Mt&&t==Mt){if(Object.keys(e).length>=Object.keys(l).length)for(var u in l){var n=e[u];void 0===n?e[u]=null:Lt(n,l[u])}}else a==kt&&t==kt&&e.length>=l.length&&l.forEach(function(l,a){Lt(e[a],l)})}}function Et(e,l,a,t){if(e!==l){var u=Rt(e),n=Rt(l);if(u==Mt)if(n!=Mt||Object.keys(e).length<Object.keys(l).length)Ft(t,a,e);else{var i=function(u){var n=e[u],i=l[u],o=Rt(n),r=Rt(i);if(o!=kt&&o!=Mt)n!=l[u]&&Ft(t,(""==a?"":a+".")+u,n);else if(o==kt)r!=kt?Ft(t,(""==a?"":a+".")+u,n):n.length<i.length?Ft(t,(""==a?"":a+".")+u,n):n.forEach(function(e,l){Et(e,i[l],(""==a?"":a+".")+u+"["+l+"]",t)});else if(o==Mt)if(r!=Mt||Object.keys(n).length<Object.keys(i).length)Ft(t,(""==a?"":a+".")+u,n);else for(var v in n)Et(n[v],i[v],(""==a?"":a+".")+u+"."+v,t)};for(var o in e)i(o)}else u==kt?n!=kt?Ft(t,a,e):e.length<l.length?Ft(t,a,e):e.forEach(function(e,u){Et(e,l[u],a+"["+u+"]",t)}):Ft(t,a,e)}}function Ft(e,l,a){e[l]=a}function Rt(e){return Object.prototype.toString.call(e)}function Dt(e){if(e.__next_tick_callbacks&&e.__next_tick_callbacks.length){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var l=e.$scope;console.log("["+ +new Date+"]["+(l.is||l.route)+"]["+e._uid+"]:flushCallbacks["+e.__next_tick_callbacks.length+"]")}var a=e.__next_tick_callbacks.slice(0);e.__next_tick_callbacks.length=0;for(var t=0;t<a.length;t++)a[t]()}}function jt(e){return La.find(function(l){return e._watcher===l})}function It(e,l){if(!e.__next_tick_pending&&!jt(e)){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var a=e.$scope;console.log("["+ +new Date+"]["+(a.is||a.route)+"]["+e._uid+"]:nextVueTick")}return vl(l,e)}if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var t=e.$scope;console.log("["+ +new Date+"]["+(t.is||t.route)+"]["+e._uid+"]:nextMPTick")}var u;if(e.__next_tick_callbacks||(e.__next_tick_callbacks=[]),e.__next_tick_callbacks.push(function(){if(l)try{l.call(e)}catch(lu){Ke(lu,e,"nextTick")}else u&&u(e)}),!l&&"undefined"!==typeof Promise)return new Promise(function(e){u=e})}function zt(e){var l=[].concat(Object.keys(e._data||{}),Object.keys(e._computedWatchers||{})),a=l.reduce(function(l,a){return l[a]=e[a],l},Object.create(null));return Object.assign(a,e.$mp.data||{}),Array.isArray(e.$options.behaviors)&&-1!==e.$options.behaviors.indexOf("uni://form-field")&&(a["name"]=e.name,a["value"]=e.value),JSON.parse(JSON.stringify(a))}var Ht=function(e,l){var a=this;if(null!==l&&("page"===this.mpType||"component"===this.mpType)){var t=this.$scope,u=zt(this);u.__webviewId__=t.data.__webviewId__;var n=Object.create(null);Object.keys(u).forEach(function(e){n[e]=t.data[e]});var i=Ct(u,n);Object.keys(i).length?(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(t.is||t.route)+"]["+this._uid+"]差量更新",JSON.stringify(i)),this.__next_tick_pending=!0,t.setData(i,function(){a.__next_tick_pending=!1,Dt(a)})):Dt(this)}};function Nt(){}function Wt(e,l,a){if(!e.mpType)return e;"app"===e.mpType&&(e.$options.render=Nt),e.$options.render||(e.$options.render=Nt),"mp-toutiao"!==e.mpHost&&Ca(e,"beforeMount");var t=function(){e._update(e._render(),a)};return new Xa(e,t,E,{before:function(){e._isMounted&&!e._isDestroyed&&Ca(e,"beforeUpdate")}},!0),a=!1,e}function Bt(e,l){return u(e)||u(l)?Vt(e,Ut(l)):""}function Vt(e,l){return e?l?e+" "+l:e:l||""}function Ut(e){return Array.isArray(e)?Gt(e):r(e)?Xt(e):"string"===typeof e?e:""}function Gt(e){for(var l,a="",t=0,n=e.length;t<n;t++)u(l=Ut(e[t]))&&""!==l&&(a&&(a+=" "),a+=l);return a}function Xt(e){var l="";for(var a in e)e[a]&&(l&&(l+=" "),l+=a);return l}var qt=m(function(e){var l={},a=/;(?![^(]*\))/g,t=/:(.+)/;return e.split(a).forEach(function(e){if(e){var a=e.split(t);a.length>1&&(l[a[0].trim()]=a[1].trim())}}),l});function Jt(e){return Array.isArray(e)?L(e):"string"===typeof e?qt(e):e}var Yt=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Kt(e,l){var a=l.split("."),t=a[0];return 0===t.indexOf("__$n")&&(t=parseInt(t.replace("__$n",""))),1===a.length?e[t]:Kt(e[t],a.slice(1).join("."))}function Zt(e){var l=e.prototype.$emit;e.prototype.$emit=function(e){return this.$scope&&e&&this.$scope["triggerEvent"](e,{__args__:M(arguments,1)}),l.apply(this,arguments)},e.prototype.$nextTick=function(e){return It(this,e)},Yt.forEach(function(l){e.prototype[l]=function(e){if(this.$scope)return this.$scope[l](e)}}),e.prototype.__init_provide=wl,e.prototype.__init_injections=Al,e.prototype.__call_hook=function(e,l){var a=this;he();var t,u=a.$options[e],n=e+" hook";if(u)for(var i=0,o=u.length;i<o;i++)t=Ze(u[i],a,l?[l]:null,a,n);return a._hasHookEvent&&a.$emit("hook:"+e),fe(),t},e.prototype.__set_model=function(e,l,a,t){Array.isArray(t)&&(-1!==t.indexOf("trim")&&(a=a.trim()),-1!==t.indexOf("number")&&(a=this._n(a))),e||(e=this),e[l]=a},e.prototype.__set_sync=function(e,l,a){e||(e=this),e[l]=a},e.prototype.__get_orig=function(e){return b(e)&&e["$orig"]||e},e.prototype.__get_value=function(e,l){return Kt(l||this,e)},e.prototype.__get_class=function(e,l){return Bt(l,e)},e.prototype.__get_style=function(e,l){if(!e&&!l)return"";var a=Jt(e),t=l?C(l,a):a;return Object.keys(t).map(function(e){return T(e)+":"+t[e]}).join(";")}}var Qt=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function eu(e){var l=e.extend;e.extend=function(e){e=e||{};var a=e.methods;return a&&Object.keys(a).forEach(function(l){-1!==Qt.indexOf(l)&&(e[l]=a[l],delete a[l])}),l.call(this,e)};var a=e.config.optionMergeStrategies,t=a.created;Qt.forEach(function(e){a[e]=t}),e.prototype.__lifecycle_hooks__=Qt}ft.prototype.__patch__=Ht,ft.prototype.$mount=function(e,l){return Wt(this,e,l)},eu(ft),Zt(ft),l["default"]=ft}.call(this,a("c8ba"))},"6e42":function(e,l,a){"use strict";(function(e){Object.defineProperty(l,"__esModule",{value:!0}),l.createApp=Be,l.createPage=Ze,l.createComponent=Qe,l.default=void 0;var t=u(a("66fd"));function u(e){return e&&e.__esModule?e:{default:e}}function n(e,l){return r(e)||o(e,l)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function o(e,l){var a=[],t=!0,u=!1,n=void 0;try{for(var i,o=e[Symbol.iterator]();!(t=(i=o.next()).done);t=!0)if(a.push(i.value),l&&a.length===l)break}catch(r){u=!0,n=r}finally{try{t||null==o["return"]||o["return"]()}finally{if(u)throw n}}return a}function r(e){if(Array.isArray(e))return e}function v(e,l,a){return l in e?Object.defineProperty(e,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[l]=a,e}var b=Object.prototype.toString,s=Object.prototype.hasOwnProperty;function c(e){return"function"===typeof e}function h(e){return"string"===typeof e}function f(e){return"[object Object]"===b.call(e)}function p(e,l){return s.call(e,l)}function d(){}function g(e){var l=Object.create(null);return function(a){var t=l[a];return t||(l[a]=e(a))}}var y=/-(\w)/g,x=g(function(e){return e.replace(y,function(e,l){return l?l.toUpperCase():""})}),_=/^\$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,m=/^create|Manager$/,w=/^on/;function A(e){return m.test(e)}function P(e){return _.test(e)}function S(e){return w.test(e)}function T(e){return e.then(function(e){return[null,e]}).catch(function(e){return[e]})}function $(e){return!(A(e)||P(e)||S(e))}function O(e,l){return $(e)?function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length,t=new Array(a>1?a-1:0),u=1;u<a;u++)t[u-1]=arguments[u];return c(e.success)||c(e.fail)||c(e.complete)?l.apply(void 0,[e].concat(t)):T(new Promise(function(a,u){l.apply(void 0,[Object.assign({},e,{success:a,fail:u})].concat(t)),Promise.prototype.finally||(Promise.prototype.finally=function(e){var l=this.constructor;return this.then(function(a){return l.resolve(e()).then(function(){return a})},function(a){return l.resolve(e()).then(function(){throw a})})})}))}:l}var k=1e-4,M=750,C=!1,L=0,E=0;function F(){var e=wx.getSystemInfoSync(),l=e.platform,a=e.pixelRatio,t=e.windowWidth;L=t,E=a,C="ios"===l}function R(e,l){if(0===L&&F(),e=Number(e),0===e)return 0;var a=e/M*(l||L);return a<0&&(a=-a),a=Math.floor(a+k),0===a?1!==E&&C?.5:1:e<0?-a:a}var D={},j=[],I=[],z=["success","fail","cancel","complete"];function H(e,l,a){return function(t){return l(W(e,t,a))}}function N(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},u=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(f(l)){var n=!0===u?l:{};for(var i in c(a)&&(a=a(l,n)||{}),l)if(p(a,i)){var o=a[i];c(o)&&(o=o(l[i],l,n)),o?h(o)?n[o]=l[i]:f(o)&&(n[o.name?o.name:i]=o.value):console.warn("app-plus ".concat(e,"暂不支持").concat(i))}else-1!==z.indexOf(i)?n[i]=H(e,l[i],t):u||(n[i]=l[i]);return n}return c(l)&&(l=H(e,l,t)),l}function W(e,l,a){var t=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return c(D.returnValue)&&(l=D.returnValue(e,l)),N(e,l,a,{},t)}function B(e,l){if(p(D,e)){var a=D[e];return a?function(l,t){var u=a;c(a)&&(u=a(l)),l=N(e,l,u.args,u.returnValue);var n=[l];"undefined"!==typeof t&&n.push(t);var i=wx[u.name||e].apply(wx,n);return P(e)?W(e,i,u.returnValue,A(e)):i}:function(){console.error("app-plus 暂不支持".concat(e))}}return l}var V=Object.create(null),U=["subscribePush","unsubscribePush","onPush","offPush","share"];function G(e){return function(l){var a=l.fail,t=l.complete,u={errMsg:"".concat(e,":fail:暂不支持 ").concat(e," 方法")};c(a)&&a(u),c(t)&&t(u)}}U.forEach(function(e){V[e]=G(e)});var X=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return e||(e=new t.default),e};var e}();function q(e,l,a){return e[l].apply(e,a)}function J(){return q(X(),"$on",Array.prototype.slice.call(arguments))}function Y(){return q(X(),"$off",Array.prototype.slice.call(arguments))}function K(){return q(X(),"$once",Array.prototype.slice.call(arguments))}function Z(){return q(X(),"$emit",Array.prototype.slice.call(arguments))}var Q=Object.freeze({$on:J,$off:Y,$once:K,$emit:Z});function ee(e){e.$processed=!0,e.postMessage=function(l){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:l},e.id)};var l=[];if(e.onMessage=function(e){l.push(e)},e.$consumeMessage=function(e){l.forEach(function(l){return l(e)})},e.__uniapp_mask_id){var a=e.__uniapp_mask,t=plus.webview.getWebviewById(e.__uniapp_mask_id);t=t.parent()||t;var u=e.show,n=e.hide,i=e.close,o=function(){t.setStyle({mask:a})},r=function(){t.setStyle({mask:"none"})};e.show=function(){o();for(var l=arguments.length,a=new Array(l),t=0;t<l;t++)a[t]=arguments[t];return u.apply(e,a)},e.hide=function(){r();for(var l=arguments.length,a=new Array(l),t=0;t<l;t++)a[t]=arguments[t];return n.apply(e,a)},e.close=function(){r(),l=[];for(var a=arguments.length,t=new Array(a),u=0;u<a;u++)t[u]=arguments[u];return i.apply(e,t)}}}function le(e){var l=plus.webview.getWebviewById(e);return l&&!l.$processed&&ee(l),l}function ae(e){return"undefined"!==typeof weex?weex.requireModule(e):__requireNativePlugin__(e)}var te=Object.freeze({requireNativePlugin:ae,getSubNVueById:le}),ue=Page,ne=Component,ie=/:/g,oe=g(function(e){return x(e.replace(ie,"-"))});function re(e){if(wx.canIUse("nextTick")){var l=e.triggerEvent;e.triggerEvent=function(a){for(var t=arguments.length,u=new Array(t>1?t-1:0),n=1;n<t;n++)u[n-1]=arguments[n];return l.apply(e,[oe(a)].concat(u))}}}function ve(e,l){var a=l[e];l[e]=a?function(){re(this);for(var e=arguments.length,l=new Array(e),t=0;t<e;t++)l[t]=arguments[t];return a.apply(this,l)}:function(){re(this)}}Page=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return ve("onLoad",e),ue(e)},Component=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return ve("created",e),ne(e)};var be=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function se(e,l){var a=e.$mp[e.mpType];l.forEach(function(l){p(a,l)&&(e[l]=a[l])})}function ce(e,l){l.forEach(function(l){e[l]=function(e){return this.$vm&&this.$vm.__call_hook(l,e)}})}function he(e,l){var a;return l=l.default||l,c(l)?(a=l,l=a.extendOptions):a=e.extend(l),[a,l]}function fe(e,l){if(Array.isArray(l)&&l.length){var a=Object.create(null);l.forEach(function(e){a[e]=!0}),e.$scopedSlots=e.$slots=a}}function pe(e,l){e=(e||"").split(",");var a=e.length;1===a?l._$vueId=e[0]:2===a&&(l._$vueId=e[0],l._$vuePid=e[1])}function de(e,l){var a=e.data||{},t=e.methods||{};if("function"===typeof a)try{a=a.call(l)}catch(u){Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",a)}else try{a=JSON.parse(JSON.stringify(a))}catch(u){}return f(a)||(a={}),Object.keys(t).forEach(function(e){-1!==l.__lifecycle_hooks__.indexOf(e)||p(a,e)||(a[e]=t[e])}),a}var ge=[String,Number,Boolean,Object,Array,null];function ye(e){return function(l,a){this.$vm&&(this.$vm[e]=l)}}function xe(e,l){var a=e["behaviors"],t=e["extends"],u=e["mixins"],n=e["props"];n||(e["props"]=n=[]);var i=[];return Array.isArray(a)&&a.forEach(function(e){i.push(e.replace("uni://","wx".concat("://"))),"uni://form-field"===e&&(Array.isArray(n)?(n.push("name"),n.push("value")):(n["name"]=String,n["value"]=null))}),f(t)&&t.props&&i.push(l({properties:me(t.props,!0)})),Array.isArray(u)&&u.forEach(function(e){f(e)&&e.props&&i.push(l({properties:me(e.props,!0)}))}),i}function _e(e,l,a,t){return Array.isArray(l)&&1===l.length?l[0]:l}function me(e){var l=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",t={};return l||(t.vueId={type:String,value:""},t.vueSlots={type:null,value:[],observer:function(e,l){var a=Object.create(null);e.forEach(function(e){a[e]=!0}),this.setData({$slots:a})}}),Array.isArray(e)?e.forEach(function(e){t[e]={type:null,observer:ye(e)}}):f(e)&&Object.keys(e).forEach(function(l){var u=e[l];if(f(u)){var n=u["default"];c(n)&&(n=n()),u.type=_e(l,u.type,n,a),t[l]={type:-1!==ge.indexOf(u.type)?u.type:null,value:n,observer:ye(l)}}else{var i=_e(l,u,null,a);t[l]={type:-1!==ge.indexOf(i)?i:null,observer:ye(l)}}}),t}function we(e){try{e.mp=JSON.parse(JSON.stringify(e))}catch(l){}return e.stopPropagation=d,e.preventDefault=d,e.target=e.target||{},p(e,"detail")||(e.detail={}),f(e.detail)&&(e.target=Object.assign({},e.target,e.detail)),e}function Ae(e,l){var a=e;return l.forEach(function(l){var t=l[0],u=l[2];if(t||"undefined"!==typeof u){var n=l[1],i=l[3],o=t?e.__get_value(t,a):a;Number.isInteger(o)?a=u:n?Array.isArray(o)?a=o.find(function(l){return e.__get_value(n,l)===u}):f(o)?a=Object.keys(o).find(function(l){return e.__get_value(n,o[l])===u}):console.error("v-for 暂不支持循环数据：",o):a=o[u],i&&(a=e.__get_value(i,a))}}),a}function Pe(e,l,a){var t={};return Array.isArray(l)&&l.length&&l.forEach(function(l,u){"string"===typeof l?l?"$event"===l?t["$"+u]=a:0===l.indexOf("$event.")?t["$"+u]=e.__get_value(l.replace("$event.",""),a):t["$"+u]=e.__get_value(l):t["$"+u]=e:t["$"+u]=Ae(e,l)}),t}function Se(e){for(var l={},a=1;a<e.length;a++){var t=e[a];l[t[0]]=t[1]}return l}function Te(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],u=arguments.length>4?arguments[4]:void 0,n=arguments.length>5?arguments[5]:void 0,i=!1;if(u&&(i=l.currentTarget&&l.currentTarget.dataset&&"wx"===l.currentTarget.dataset.comType,!a.length))return i?[l]:l.detail.__args__||l.detail;var o=Pe(e,t,l),r=[];return a.forEach(function(e){"$event"===e?"__set_model"!==n||u?u&&!i?r.push(l.detail.__args__[0]):r.push(l):r.push(l.target.value):Array.isArray(e)&&"o"===e[0]?r.push(Se(e)):"string"===typeof e&&p(o,e)?r.push(o[e]):r.push(e)}),r}var $e="~",Oe="^";function ke(e,l){return e===l||"regionchange"===l&&("begin"===e||"end"===e)}function Me(e){var l=this;e=we(e);var a=(e.currentTarget||e.target).dataset.eventOpts;if(!a)return console.warn("事件信息不存在");var t=e.type;a.forEach(function(a){var u=a[0],n=a[1],i=u.charAt(0)===Oe;u=i?u.slice(1):u;var o=u.charAt(0)===$e;u=o?u.slice(1):u,n&&ke(t,u)&&n.forEach(function(a){var t=a[0];if(t){var u=l.$vm;u.$options.generic&&u.$parent&&u.$parent.$parent&&(u=u.$parent.$parent);var n=u[t];if(!c(n))throw new Error(" _vm.".concat(t," is not a function"));if(o){if(n.once)return;n.once=!0}n.apply(u,Te(l.$vm,e,a[1],a[2],i,t))}})})}var Ce=["onShow","onHide","onError","onPageNotFound"];function Le(e,l){var a=l.mocks,u=l.initRefs;t.default.prototype.mpHost="app-plus",t.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=v({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(u(this),se(this,a)))}});var n={onLaunch:function(l){this.$vm=e,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",l),this.$vm.__call_hook("onLaunch",l)}};return n.globalData=e.$options.globalData||{},ce(n,Ce),n}var Ee=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function Fe(e,l){var a=e.$children,t=a.find(function(e){return e.$scope._$vueId===l});if(t)return t;for(var u=a.length-1;u>=0;u--)if(t=Fe(a[u],l),t)return t}function Re(e){return Behavior(e)}function De(){return!!this.route}function je(e){this.triggerEvent("__l",e)}function Ie(e){var l=e.$scope;Object.defineProperty(e,"$refs",{get:function(){var e={},a=l.selectAllComponents(".vue-ref");a.forEach(function(l){var a=l.dataset.ref;e[a]=l.$vm||l});var t=l.selectAllComponents(".vue-ref-in-for");return t.forEach(function(l){var a=l.dataset.ref;e[a]||(e[a]=[]),e[a].push(l.$vm||l)}),e}})}function ze(e){var l,a=e.detail||e.value,t=a.vuePid,u=a.vueOptions;t&&(l=Fe(this.$vm,t)),l||(l=this.$vm),u.parent=l}function He(e){return Le(e,{mocks:Ee,initRefs:Ie})}var Ne=["onUniNViewMessage"];function We(e){var l=He(e);return ce(l,Ne),l}function Be(e){return App(We(e)),e}function Ve(e){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=l.isPage,u=l.initRelation,i=he(t.default,e),o=n(i,2),r=o[0],v=o[1],b={options:{multipleSlots:!0,addGlobalClass:!0},data:de(v,t.default.prototype),behaviors:xe(v,Re),properties:me(v.props,!1,v.__file),lifetimes:{attached:function(){var e=this.properties,l={mpType:a.call(this)?"page":"component",mpInstance:this,propsData:e};pe(e.vueId,this),u.call(this,{vuePid:this._$vuePid,vueOptions:l}),this.$vm=new r(l),fe(this.$vm,e.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(e){this.$vm&&this.$vm.__call_hook("onPageShow",e)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(e){this.$vm&&this.$vm.__call_hook("onPageResize",e)}},methods:{__l:ze,__e:Me}};return a?b:[b,r]}function Ue(e){return Ve(e,{isPage:De,initRelation:je})}function Ge(e){var l=Ue(e);return l.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},l}var Xe=["onShow","onHide","onUnload"];function qe(e,l){var a=l.isPage,t=l.initRelation,u=Ge(e,{isPage:a,initRelation:t});return ce(u.methods,Xe),u.methods.onLoad=function(e){this.$vm.$mp.query=e,this.$vm.__call_hook("onLoad",e)},u}function Je(e){return qe(e,{isPage:De,initRelation:je})}Xe.push.apply(Xe,be);var Ye=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function Ke(e){var l=Je(e);return ce(l.methods,Ye),l}function Ze(e){return Component(Ke(e))}function Qe(e){return Component(Ge(e))}j.forEach(function(e){D[e]=!1}),I.forEach(function(e){var l=D[e]&&D[e].name?D[e].name:e;wx.canIUse(l)||(D[e]=!1)});var el={};"undefined"!==typeof Proxy?el=new Proxy({},{get:function(e,l){return"upx2px"===l?R:te[l]?O(l,te[l]):Q[l]?Q[l]:p(wx,l)||p(D,l)?O(l,B(l,wx[l])):void 0}}):(el.upx2px=R,Object.keys(Q).forEach(function(e){el[e]=Q[e]}),Object.keys(te).forEach(function(e){el[e]=O(e,te[e])}),Object.keys(wx).forEach(function(e){(p(wx,e)||p(D,e))&&(el[e]=O(e,B(e,wx[e])))})),"undefined"!==typeof e&&(e.UniEmitter=Q),wx.createApp=Be,wx.createPage=Ze,wx.createComponent=Qe;var ll=el,al=ll;l.default=al}).call(this,a("c8ba"))},"8e37":function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=n(a("66fd")),u=n(a("2f62"));function n(e){return e&&e.__esModule?e:{default:e}}t.default.use(u.default);var i=new u.default.Store({state:{baseUrl:"/dpc",masterInfo:null,islogin:!1,isFree:!0,pay_Pop:!1,scrollPay:!1},mutations:{SET_MASTERINFO:function(e,l){e.masterInfo=l},SET_ISLOGIN:function(e,l){e.islogin=l},SET_ISFREE:function(e,l){e.isFree=l},SET_PAYPOP:function(e,l){e.pay_Pop=l},SET_SCROLLPAY:function(e,l){e.scrollPay=l}},actions:{}}),o=i;l.default=o},"9fd2":function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=[[{label:"市辖区",value:"1101"}],[{label:"市辖区",value:"1201"}],[{label:"石家庄市",value:"1301"},{label:"唐山市",value:"1302"},{label:"秦皇岛市",value:"1303"},{label:"邯郸市",value:"1304"},{label:"邢台市",value:"1305"},{label:"保定市",value:"1306"},{label:"张家口市",value:"1307"},{label:"承德市",value:"1308"},{label:"沧州市",value:"1309"},{label:"廊坊市",value:"1310"},{label:"衡水市",value:"1311"}],[{label:"太原市",value:"1401"},{label:"大同市",value:"1402"},{label:"阳泉市",value:"1403"},{label:"长治市",value:"1404"},{label:"晋城市",value:"1405"},{label:"朔州市",value:"1406"},{label:"晋中市",value:"1407"},{label:"运城市",value:"1408"},{label:"忻州市",value:"1409"},{label:"临汾市",value:"1410"},{label:"吕梁市",value:"1411"}],[{label:"呼和浩特市",value:"1501"},{label:"包头市",value:"1502"},{label:"乌海市",value:"1503"},{label:"赤峰市",value:"1504"},{label:"通辽市",value:"1505"},{label:"鄂尔多斯市",value:"1506"},{label:"呼伦贝尔市",value:"1507"},{label:"巴彦淖尔市",value:"1508"},{label:"乌兰察布市",value:"1509"},{label:"兴安盟",value:"1522"},{label:"锡林郭勒盟",value:"1525"},{label:"阿拉善盟",value:"1529"}],[{label:"沈阳市",value:"2101"},{label:"大连市",value:"2102"},{label:"鞍山市",value:"2103"},{label:"抚顺市",value:"2104"},{label:"本溪市",value:"2105"},{label:"丹东市",value:"2106"},{label:"锦州市",value:"2107"},{label:"营口市",value:"2108"},{label:"阜新市",value:"2109"},{label:"辽阳市",value:"2110"},{label:"盘锦市",value:"2111"},{label:"铁岭市",value:"2112"},{label:"朝阳市",value:"2113"},{label:"葫芦岛市",value:"2114"}],[{label:"长春市",value:"2201"},{label:"吉林市",value:"2202"},{label:"四平市",value:"2203"},{label:"辽源市",value:"2204"},{label:"通化市",value:"2205"},{label:"白山市",value:"2206"},{label:"松原市",value:"2207"},{label:"白城市",value:"2208"},{label:"延边朝鲜族自治州",value:"2224"}],[{label:"哈尔滨市",value:"2301"},{label:"齐齐哈尔市",value:"2302"},{label:"鸡西市",value:"2303"},{label:"鹤岗市",value:"2304"},{label:"双鸭山市",value:"2305"},{label:"大庆市",value:"2306"},{label:"伊春市",value:"2307"},{label:"佳木斯市",value:"2308"},{label:"七台河市",value:"2309"},{label:"牡丹江市",value:"2310"},{label:"黑河市",value:"2311"},{label:"绥化市",value:"2312"},{label:"大兴安岭地区",value:"2327"}],[{label:"市辖区",value:"3101"}],[{label:"南京市",value:"3201"},{label:"无锡市",value:"3202"},{label:"徐州市",value:"3203"},{label:"常州市",value:"3204"},{label:"苏州市",value:"3205"},{label:"南通市",value:"3206"},{label:"连云港市",value:"3207"},{label:"淮安市",value:"3208"},{label:"盐城市",value:"3209"},{label:"扬州市",value:"3210"},{label:"镇江市",value:"3211"},{label:"泰州市",value:"3212"},{label:"宿迁市",value:"3213"}],[{label:"杭州市",value:"3301"},{label:"宁波市",value:"3302"},{label:"温州市",value:"3303"},{label:"嘉兴市",value:"3304"},{label:"湖州市",value:"3305"},{label:"绍兴市",value:"3306"},{label:"金华市",value:"3307"},{label:"衢州市",value:"3308"},{label:"舟山市",value:"3309"},{label:"台州市",value:"3310"},{label:"丽水市",value:"3311"}],[{label:"合肥市",value:"3401"},{label:"芜湖市",value:"3402"},{label:"蚌埠市",value:"3403"},{label:"淮南市",value:"3404"},{label:"马鞍山市",value:"3405"},{label:"淮北市",value:"3406"},{label:"铜陵市",value:"3407"},{label:"安庆市",value:"3408"},{label:"黄山市",value:"3410"},{label:"滁州市",value:"3411"},{label:"阜阳市",value:"3412"},{label:"宿州市",value:"3413"},{label:"六安市",value:"3415"},{label:"亳州市",value:"3416"},{label:"池州市",value:"3417"},{label:"宣城市",value:"3418"}],[{label:"福州市",value:"3501"},{label:"厦门市",value:"3502"},{label:"莆田市",value:"3503"},{label:"三明市",value:"3504"},{label:"泉州市",value:"3505"},{label:"漳州市",value:"3506"},{label:"南平市",value:"3507"},{label:"龙岩市",value:"3508"},{label:"宁德市",value:"3509"}],[{label:"南昌市",value:"3601"},{label:"景德镇市",value:"3602"},{label:"萍乡市",value:"3603"},{label:"九江市",value:"3604"},{label:"新余市",value:"3605"},{label:"鹰潭市",value:"3606"},{label:"赣州市",value:"3607"},{label:"吉安市",value:"3608"},{label:"宜春市",value:"3609"},{label:"抚州市",value:"3610"},{label:"上饶市",value:"3611"}],[{label:"济南市",value:"3701"},{label:"青岛市",value:"3702"},{label:"淄博市",value:"3703"},{label:"枣庄市",value:"3704"},{label:"东营市",value:"3705"},{label:"烟台市",value:"3706"},{label:"潍坊市",value:"3707"},{label:"济宁市",value:"3708"},{label:"泰安市",value:"3709"},{label:"威海市",value:"3710"},{label:"日照市",value:"3711"},{label:"莱芜市",value:"3712"},{label:"临沂市",value:"3713"},{label:"德州市",value:"3714"},{label:"聊城市",value:"3715"},{label:"滨州市",value:"3716"},{label:"菏泽市",value:"3717"}],[{label:"郑州市",value:"4101"},{label:"开封市",value:"4102"},{label:"洛阳市",value:"4103"},{label:"平顶山市",value:"4104"},{label:"安阳市",value:"4105"},{label:"鹤壁市",value:"4106"},{label:"新乡市",value:"4107"},{label:"焦作市",value:"4108"},{label:"濮阳市",value:"4109"},{label:"许昌市",value:"4110"},{label:"漯河市",value:"4111"},{label:"三门峡市",value:"4112"},{label:"南阳市",value:"4113"},{label:"商丘市",value:"4114"},{label:"信阳市",value:"4115"},{label:"周口市",value:"4116"},{label:"驻马店市",value:"4117"},{label:"省直辖县级行政区划",value:"4190"}],[{label:"武汉市",value:"4201"},{label:"黄石市",value:"4202"},{label:"十堰市",value:"4203"},{label:"宜昌市",value:"4205"},{label:"襄阳市",value:"4206"},{label:"鄂州市",value:"4207"},{label:"荆门市",value:"4208"},{label:"孝感市",value:"4209"},{label:"荆州市",value:"4210"},{label:"黄冈市",value:"4211"},{label:"咸宁市",value:"4212"},{label:"随州市",value:"4213"},{label:"恩施土家族苗族自治州",value:"4228"},{label:"省直辖县级行政区划",value:"4290"}],[{label:"长沙市",value:"4301"},{label:"株洲市",value:"4302"},{label:"湘潭市",value:"4303"},{label:"衡阳市",value:"4304"},{label:"邵阳市",value:"4305"},{label:"岳阳市",value:"4306"},{label:"常德市",value:"4307"},{label:"张家界市",value:"4308"},{label:"益阳市",value:"4309"},{label:"郴州市",value:"4310"},{label:"永州市",value:"4311"},{label:"怀化市",value:"4312"},{label:"娄底市",value:"4313"},{label:"湘西土家族苗族自治州",value:"4331"}],[{label:"广州市",value:"4401"},{label:"韶关市",value:"4402"},{label:"深圳市",value:"4403"},{label:"珠海市",value:"4404"},{label:"汕头市",value:"4405"},{label:"佛山市",value:"4406"},{label:"江门市",value:"4407"},{label:"湛江市",value:"4408"},{label:"茂名市",value:"4409"},{label:"肇庆市",value:"4412"},{label:"惠州市",value:"4413"},{label:"梅州市",value:"4414"},{label:"汕尾市",value:"4415"},{label:"河源市",value:"4416"},{label:"阳江市",value:"4417"},{label:"清远市",value:"4418"},{label:"东莞市",value:"4419"},{label:"中山市",value:"4420"},{label:"潮州市",value:"4451"},{label:"揭阳市",value:"4452"},{label:"云浮市",value:"4453"}],[{label:"南宁市",value:"4501"},{label:"柳州市",value:"4502"},{label:"桂林市",value:"4503"},{label:"梧州市",value:"4504"},{label:"北海市",value:"4505"},{label:"防城港市",value:"4506"},{label:"钦州市",value:"4507"},{label:"贵港市",value:"4508"},{label:"玉林市",value:"4509"},{label:"百色市",value:"4510"},{label:"贺州市",value:"4511"},{label:"河池市",value:"4512"},{label:"来宾市",value:"4513"},{label:"崇左市",value:"4514"}],[{label:"海口市",value:"4601"},{label:"三亚市",value:"4602"},{label:"三沙市",value:"4603"},{label:"儋州市",value:"4604"},{label:"省直辖县级行政区划",value:"4690"}],[{label:"市辖区",value:"5001"},{label:"县",value:"5002"}],[{label:"成都市",value:"5101"},{label:"自贡市",value:"5103"},{label:"攀枝花市",value:"5104"},{label:"泸州市",value:"5105"},{label:"德阳市",value:"5106"},{label:"绵阳市",value:"5107"},{label:"广元市",value:"5108"},{label:"遂宁市",value:"5109"},{label:"内江市",value:"5110"},{label:"乐山市",value:"5111"},{label:"南充市",value:"5113"},{label:"眉山市",value:"5114"},{label:"宜宾市",value:"5115"},{label:"广安市",value:"5116"},{label:"达州市",value:"5117"},{label:"雅安市",value:"5118"},{label:"巴中市",value:"5119"},{label:"资阳市",value:"5120"},{label:"阿坝藏族羌族自治州",value:"5132"},{label:"甘孜藏族自治州",value:"5133"},{label:"凉山彝族自治州",value:"5134"}],[{label:"贵阳市",value:"5201"},{label:"六盘水市",value:"5202"},{label:"遵义市",value:"5203"},{label:"安顺市",value:"5204"},{label:"毕节市",value:"5205"},{label:"铜仁市",value:"5206"},{label:"黔西南布依族苗族自治州",value:"5223"},{label:"黔东南苗族侗族自治州",value:"5226"},{label:"黔南布依族苗族自治州",value:"5227"}],[{label:"昆明市",value:"5301"},{label:"曲靖市",value:"5303"},{label:"玉溪市",value:"5304"},{label:"保山市",value:"5305"},{label:"昭通市",value:"5306"},{label:"丽江市",value:"5307"},{label:"普洱市",value:"5308"},{label:"临沧市",value:"5309"},{label:"楚雄彝族自治州",value:"5323"},{label:"红河哈尼族彝族自治州",value:"5325"},{label:"文山壮族苗族自治州",value:"5326"},{label:"西双版纳傣族自治州",value:"5328"},{label:"大理白族自治州",value:"5329"},{label:"德宏傣族景颇族自治州",value:"5331"},{label:"怒江傈僳族自治州",value:"5333"},{label:"迪庆藏族自治州",value:"5334"}],[{label:"拉萨市",value:"5401"},{label:"日喀则市",value:"5402"},{label:"昌都市",value:"5403"},{label:"林芝市",value:"5404"},{label:"山南市",value:"5405"},{label:"那曲地区",value:"5424"},{label:"阿里地区",value:"5425"}],[{label:"西安市",value:"6101"},{label:"铜川市",value:"6102"},{label:"宝鸡市",value:"6103"},{label:"咸阳市",value:"6104"},{label:"渭南市",value:"6105"},{label:"延安市",value:"6106"},{label:"汉中市",value:"6107"},{label:"榆林市",value:"6108"},{label:"安康市",value:"6109"},{label:"商洛市",value:"6110"}],[{label:"兰州市",value:"6201"},{label:"嘉峪关市",value:"6202"},{label:"金昌市",value:"6203"},{label:"白银市",value:"6204"},{label:"天水市",value:"6205"},{label:"武威市",value:"6206"},{label:"张掖市",value:"6207"},{label:"平凉市",value:"6208"},{label:"酒泉市",value:"6209"},{label:"庆阳市",value:"6210"},{label:"定西市",value:"6211"},{label:"陇南市",value:"6212"},{label:"临夏回族自治州",value:"6229"},{label:"甘南藏族自治州",value:"6230"}],[{label:"西宁市",value:"6301"},{label:"海东市",value:"6302"},{label:"海北藏族自治州",value:"6322"},{label:"黄南藏族自治州",value:"6323"},{label:"海南藏族自治州",value:"6325"},{label:"果洛藏族自治州",value:"6326"},{label:"玉树藏族自治州",value:"6327"},{label:"海西蒙古族藏族自治州",value:"6328"}],[{label:"银川市",value:"6401"},{label:"石嘴山市",value:"6402"},{label:"吴忠市",value:"6403"},{label:"固原市",value:"6404"},{label:"中卫市",value:"6405"}],[{label:"乌鲁木齐市",value:"6501"},{label:"克拉玛依市",value:"6502"},{label:"吐鲁番市",value:"6504"},{label:"哈密市",value:"6505"},{label:"昌吉回族自治州",value:"6523"},{label:"博尔塔拉蒙古自治州",value:"6527"},{label:"巴音郭楞蒙古自治州",value:"6528"},{label:"阿克苏地区",value:"6529"},{label:"克孜勒苏柯尔克孜自治州",value:"6530"},{label:"喀什地区",value:"6531"},{label:"和田地区",value:"6532"},{label:"伊犁哈萨克自治州",value:"6540"},{label:"塔城地区",value:"6542"},{label:"阿勒泰地区",value:"6543"},{label:"自治区直辖县级行政区划",value:"6590"}],[{label:"台北",value:"6601"},{label:"高雄",value:"6602"},{label:"基隆",value:"6603"},{label:"台中",value:"6604"},{label:"台南",value:"6605"},{label:"新竹",value:"6606"},{label:"嘉义",value:"6607"},{label:"宜兰",value:"6608"},{label:"桃园",value:"6609"},{label:"苗栗",value:"6610"},{label:"彰化",value:"6611"},{label:"南投",value:"6612"},{label:"云林",value:"6613"},{label:"屏东",value:"6614"},{label:"台东",value:"6615"},{label:"花莲",value:"6616"},{label:"澎湖",value:"6617"}],[{label:"香港岛",value:"6701"},{label:"九龙",value:"6702"},{label:"新界",value:"6703"}],[{label:"澳门半岛",value:"6801"},{label:"氹仔岛",value:"6802"},{label:"路环岛",value:"6803"},{label:"路氹城",value:"6804"}]],u=t;l.default=u},b52b:function(e,l,a){},c8ba:function(e,l){var a;a=function(){return this}();try{a=a||new Function("return this")()}catch(t){"object"===typeof window&&(a=window)}e.exports=a},cb49:function(e,l,a){"use strict";function t(e){return e<10?"0"+e:e+""}function u(e,l){for(var a=new Date(e,l,0).getDate(),u=[],n=1;n<=a;n++)u.push(t(n));return u}function n(e,l){for(var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"date",u=arguments.length>3?arguments[3]:void 0,n=new Date(e),i=new Date(l),o=n.getFullYear(),r=n.getMonth(),v=i.getFullYear(),b=[],s=[],c=[],h=[],f=[],p=[],d=new Date(o,r,0).getDate(),g=o;g<=v;g++)b.push(g+"");for(var y=1;y<=12;y++)s.push(t(y));for(var x=1;x<=d;x++)c.push(t(x));for(var _=0;_<24;_++)h.push(t(_));for(var m=0;m<60;m+=1*u)f.push(t(m));for(var w=0;w<60;w++)p.push(t(w));switch(a){case"date":return{years:b,months:s,days:c};case"yearMonth":return{years:b,months:s};case"dateTime":return{years:b,months:s,days:c,hours:h,minutes:f,seconds:p};case"time":return{hours:h,minutes:f,seconds:p}}}Object.defineProperty(l,"__esModule",{value:!0}),l.initDays=u,l.initPicker=n},dfac:function(e,l,a){"use strict";(function(l){var a={yAxisWidth:15,yAxisSplit:5,xAxisHeight:15,xAxisLineHeight:15,legendHeight:15,yAxisTitleWidth:15,padding:12,pixelRatio:1,rotate:!1,columePadding:3,fontSize:13,dataPointShape:["circle","circle","circle","circle"],colors:["#1890ff","#2fc25b","#facc14","#f04864","#8543e0","#90ed7d"],pieChartLinePadding:15,pieChartTextPadding:5,xAxisTextPadding:3,titleColor:"#333333",titleFontSize:20,subtitleColor:"#999999",subtitleFontSize:15,toolTipPadding:3,toolTipBackground:"#000000",toolTipOpacity:.7,toolTipLineHeight:20,radarGridCount:3,radarLabelTextMargin:15,gaugeLabelTextMargin:15};function t(e,l){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var a=Object(e),t=1;t<arguments.length;t++){var u=arguments[t];if(null!=u)for(var n in u)Object.prototype.hasOwnProperty.call(u,n)&&(a[n]=u[n])}return a}var u={toFixed:function(e,l){return l=l||2,this.isFloat(e)&&(e=e.toFixed(l)),e},isFloat:function(e){return e%1!==0},approximatelyEqual:function(e,l){return Math.abs(e-l)<1e-10},isSameSign:function(e,l){return Math.abs(e)===e&&Math.abs(l)===l||Math.abs(e)!==e&&Math.abs(l)!==l},isSameXCoordinateArea:function(e,l){return this.isSameSign(e.x,l.x)},isCollision:function(e,l){e.end={},e.end.x=e.start.x+e.width,e.end.y=e.start.y-e.height,l.end={},l.end.x=l.start.x+l.width,l.end.y=l.start.y-l.height;var a=l.start.x>e.end.x||l.end.x<e.start.x||l.end.y>e.start.y||l.start.y<e.end.y;return!a}};function n(e,l){var a=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,t=e.replace(a,function(e,l,a,t){return l+l+a+a+t+t}),u=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t),n=parseInt(u[1],16),i=parseInt(u[2],16),o=parseInt(u[3],16);return"rgba("+n+","+i+","+o+","+l+")"}function i(e,l,a){if(isNaN(e))throw new Error("[wxCharts] unvalid series data!");a=a||10,l=l||"upper";var t=1;while(a<1)a*=10,t*=10;e="upper"===l?Math.ceil(e*t):Math.floor(e*t);while(e%a!==0)"upper"===l?e++:e--;return e/t}function o(e,l,a,t){for(var u=[],n=0;n<e.length;n++){for(var i={data:[],name:l[n],color:a[n]},o=0,r=t.length;o<r;o++)if(o<e[n])i.data.push(null);else{for(var v=0,b=0;b<e[n];b++)v+=t[o-b][1];i.data.push(+(v/e[n]).toFixed(3))}u.push(i)}return u}function r(e,l,a,t){var u=t.width-a.padding-l.xAxisPoints[0],n=l.eachSpacing*t.categories.length,i=e;return e>=0?i=0:Math.abs(e)>=n-u&&(i=u-n),i}function v(e,l,a){function t(e){while(e<0)e+=2*Math.PI;while(e>2*Math.PI)e-=2*Math.PI;return e}return e=t(e),l=t(l),a=t(a),l>a&&(a+=2*Math.PI,e<l&&(e+=2*Math.PI)),e>=l&&e<=a}function b(e,l,a){var t=e,u=a-l,n=t+(a-u-t)/Math.sqrt(2);n*=-1;var i=(a-u)*(Math.sqrt(2)-1)-(a-u-t)/Math.sqrt(2);return{transX:n,transY:i}}function s(e,l){function a(e,l){return!(!e[l-1]||!e[l+1])&&(e[l].y>=Math.max(e[l-1].y,e[l+1].y)||e[l].y<=Math.min(e[l-1].y,e[l+1].y))}var t=.2,u=.2,n=null,i=null,o=null,r=null;if(l<1?(n=e[0].x+(e[1].x-e[0].x)*t,i=e[0].y+(e[1].y-e[0].y)*t):(n=e[l].x+(e[l+1].x-e[l-1].x)*t,i=e[l].y+(e[l+1].y-e[l-1].y)*t),l>e.length-3){var v=e.length-1;o=e[v].x-(e[v].x-e[v-1].x)*u,r=e[v].y-(e[v].y-e[v-1].y)*u}else o=e[l+1].x-(e[l+2].x-e[l].x)*u,r=e[l+1].y-(e[l+2].y-e[l].y)*u;return a(e,l+1)&&(r=e[l+1].y),a(e,l)&&(i=e[l].y),{ctrA:{x:n,y:i},ctrB:{x:o,y:r}}}function c(e,l,a){return{x:a.x+e,y:a.y-l}}function h(e,l){if(l)while(u.isCollision(e,l))e.start.x>0?e.start.y--:e.start.x<0?e.start.y++:e.start.y>0?e.start.y++:e.start.y--;return e}function f(e,l){var a=0;return e.map(function(e){return e.color||(e.color=l.colors[a],a=(a+1)%l.colors.length),e})}function p(e,l){return e.map(function(e){return e.type||(e.type=l.type),e})}function d(e,l){var a=0,t=l-e;return a=t>=1e4?1e3:t>=1e3?100:t>=100?10:t>=10?5:t>=1?1:t>=.1?.1:.01,{minRange:i(e,"lower",a),maxRange:i(l,"upper",a)}}function g(e){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.fontSize;e=String(e);e=e.split("");for(var t=0,u=0;u<e.length;u++){var n=e[u];/[a-zA-Z]/.test(n)?t+=7:/[0-9]/.test(n)?t+=5.5:/\./.test(n)?t+=2.7:/-/.test(n)?t+=3.25:/[\u4e00-\u9fa5]/.test(n)?t+=10:/\(|\)/.test(n)?t+=3.73:/\s/.test(n)?t+=2.5:/%/.test(n)?t+=8:t+=10}return t*l/10}function y(e){return e.reduce(function(e,l){return(e.data?e.data:e).concat(l.data)},[])}function x(e){for(var l=new Array(e[0].data.length),a=0;a<l.length;a++)l[a]=0;for(var t=0;t<e.length;t++)for(a=0;a<l.length;a++)l[a]+=e[t].data[a];return e.reduce(function(e,a){return(e.data?e.data:e).concat(a.data).concat(l)},[])}function _(e,l,a){var t,u;return e.clientX?l.rotate?(u=l.height-e.clientX*l.pixelRatio,t=(e.pageY-a.currentTarget.offsetTop-l.height/l.pixelRatio/2*(l.pixelRatio-1))*l.pixelRatio):(t=e.clientX*l.pixelRatio,u=(e.pageY-a.currentTarget.offsetTop-l.height/l.pixelRatio/2*(l.pixelRatio-1))*l.pixelRatio):l.rotate?(u=l.height-e.x*l.pixelRatio,t=e.y*l.pixelRatio):(t=e.x*l.pixelRatio,u=e.y*l.pixelRatio),{x:t,y:u}}function m(e,l){for(var a=[],t=0;t<e.length;t++){var u=e[t];if(null!==u.data[l]&&"undefined"!==typeof u.data[l]){var n={};n.color=u.color,n.type=u.type,n.style=u.style,n.shape=u.shape,n.disableLegend=u.disableLegend,n.name=u.name,n.data=u.format?u.format(u.data[l]):u.data[l],a.push(n)}}return a}function w(e){var l=e.map(function(e){return g(e)});return Math.max.apply(null,l)}function A(e){for(var l=2*Math.PI/e,a=[],t=0;t<e;t++)a.push(l*t);return a.map(function(e){return-1*e+Math.PI/2})}function P(e,l,a,t){for(var u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},n=e.map(function(e){return{text:u.format?u.format(e,t[a]):e.name+": "+e.data,color:e.color}}),i=[],o={x:0,y:0},r=0;r<l.length;r++){var v=l[r];"undefined"!==typeof v[a]&&null!==v[a]&&i.push(v[a])}for(var b=0;b<i.length;b++){var s=i[b];o.x=Math.round(s.x),o.y+=s.y}return o.y/=i.length,{textList:n,offset:o}}function S(e,l,a,t){var u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},n=e.map(function(e){return{text:u.format?u.format(e,t[a]):e.name+": "+e.data,color:e.color,disableLegend:!!e.disableLegend}});n=n.filter(function(e){if(!0!==e.disableLegend)return e});for(var i=[],o={x:0,y:0},r=0;r<l.length;r++){var v=l[r];"undefined"!==typeof v[a]&&null!==v[a]&&i.push(v[a])}for(var b=0;b<i.length;b++){var s=i[b];o.x=Math.round(s.x),o.y+=s.y}return o.y/=i.length,{textList:n,offset:o}}function T(e,l,a,t,u,n){arguments.length>6&&void 0!==arguments[6]&&arguments[6];var i=n.color.upFill,o=n.color.downFill,r=[i,i,o,i],v=[],b={text:u[t],color:null};v.push(b),l.map(function(l){0==t&&l.data[1]-l.data[0]<0?r[1]=o:(l.data[0]<e[t-1][1]&&(r[0]=o),l.data[1]<l.data[0]&&(r[1]=o),l.data[2]>e[t-1][1]&&(r[2]=i),l.data[3]<e[t-1][1]&&(r[3]=o));var a={text:"开盘："+l.data[0],color:r[0]},u={text:"收盘："+l.data[1],color:r[1]},n={text:"最低："+l.data[2],color:r[2]},b={text:"最高："+l.data[3],color:r[3]};v.push(a,u,n,b)});for(var s=[],c={x:0,y:0},h=0;h<a.length;h++){var f=a[h];"undefined"!==typeof f[t]&&null!==f[t]&&s.push(f[t])}return c.x=Math.round(s[0][0].x),{textList:v,offset:c}}function $(e,l,a,t){var u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,n=-1;return O(e,a,t)&&l.forEach(function(l,a){e.x+u>l&&(n=a)}),n}function O(e,l,a){return e.x<l.width-a.padding&&e.x>a.padding+a.yAxisWidth+a.yAxisTitleWidth&&e.y>a.padding&&e.y<l.height-a.legendHeight-a.xAxisHeight-a.padding}function k(e,l,a){var t=2*Math.PI/a,u=-1;if(C(e,l.center,l.radius)){var n=function(e){return e<0&&(e+=2*Math.PI),e>2*Math.PI&&(e-=2*Math.PI),e},i=Math.atan2(l.center.y-e.y,e.x-l.center.x);i*=-1,i<0&&(i+=2*Math.PI);var o=l.angleList.map(function(e){return e=n(-1*e),e});o.forEach(function(e,l){var a=n(e-t/2),o=n(e+t/2);o<a&&(o+=2*Math.PI),(i>=a&&i<=o||i+2*Math.PI>=a&&i+2*Math.PI<=o)&&(u=l)})}return u}function M(e,l){var a=-1;if(C(e,l.center,l.radius)){var t=Math.atan2(l.center.y-e.y,e.x-l.center.x);t=-t;for(var u=0,n=l.series.length;u<n;u++){var i=l.series[u];if(v(t,i._start_,i._start_+2*i._proportion_*Math.PI)){a=u;break}}}return a}function C(e,l,a){return Math.pow(e.x-l.x,2)+Math.pow(e.y-l.y,2)<=Math.pow(a,2)}function L(e){var l=[],a=[];return e.forEach(function(e,t){null!==e?a.push(e):(a.length&&l.push(a),a=[])}),a.length&&l.push(a),l}function E(e,l,a){if(!1===l.legend)return{legendList:[],legendHeight:0};for(var t=5*l.pixelRatio,u=8*l.pixelRatio,n=15*l.pixelRatio,i=[],o=0,r=[],v=0;v<e.length;v++){var b=e[v],s=3*t+n+g(b.name||"undefined");o+s>l.width?(i.push(r),o=s,r=[b]):(o+=s,r.push(b))}return r.length&&i.push(r),{legendList:i,legendHeight:i.length*(a.fontSize+u)+t}}function F(e,l,a){var t={angle:0,xAxisHeight:a.xAxisHeight},u=U(e,l,a),n=u.eachSpacing,i=e.map(function(e){return g(e)}),o=Math.max.apply(this,i);return 1==l.xAxis.rotateLabel&&o+2*a.xAxisTextPadding>n&&(t.angle=45*Math.PI/180,t.xAxisHeight=2*a.xAxisTextPadding+o*Math.sin(t.angle)),t}function R(e,l,a,t,u){var n=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,i=u.extra.radar||{};i.max=i.max||0;for(var o=Math.max(i.max,Math.max.apply(null,y(t))),r=[],v=function(u){var i=t[u],v={};v.color=i.color,v.data=[],i.data.forEach(function(t,u){var i={};i.angle=e[u],i.proportion=t/o,i.position=c(a*i.proportion*n*Math.cos(i.angle),a*i.proportion*n*Math.sin(i.angle),l),v.data.push(i)}),r.push(v)},b=0;b<t.length;b++)v(b);return r}function D(e,l){for(var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,t=0,u=0,n=0;n<e.length;n++){var i=e[n];i.data=null===i.data?0:i.data,t+=i.data}for(var o=0;o<e.length;o++){var r=e[o];r.data=null===r.data?0:r.data,r._proportion_=0===t?1/e.length*a:r.data/t*a,r._radius_=l}for(var v=0;v<e.length;v++){var b=e[v];b._start_=u,u+=2*b._proportion_*Math.PI}return e}function j(e,l,a,t){for(var u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,n=0,i=0,o=[],r=0;r<e.length;r++){var v=e[r];v.data=null===v.data?0:v.data,n+=v.data,o.push(v.data)}for(var b=o.pop(),s=o.shift(),c=t-a,h=0;h<e.length;h++){var f=e[h];f.data=null===f.data?0:f.data,f._proportion_=0===n||"area"==l?1/e.length*u:f.data/n*u,f._radius_=a+c*((f.data-b)/(s-b))}for(var p=0;p<e.length;p++){var d=e[p];d._start_=i,i+=2*d._proportion_*Math.PI}return e}function I(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;1==a&&(a=.999999);for(var t=0;t<e.length;t++){var u=e[t];u.data=null===u.data?0:u.data;var n=void 0;n="default"==l.type?l.startAngle-l.endAngle+1:2,u._proportion_=n*u.data*a+l.startAngle,u._proportion_>=2&&(u._proportion_=u._proportion_%2)}return e}function z(e,l,a){for(var t=l-a+1,u=l,n=0;n<e.length;n++)e[n].value=null===e[n].value?0:e[n].value,e[n]._startAngle_=u,e[n]._endAngle_=t*e[n].value+l,e[n]._endAngle_>=2&&(e[n]._endAngle_=e[n]._endAngle_%2),u=e[n]._endAngle_;return e}function H(e,l,a){for(var t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,u=0;u<e.length;u++){var n=e[u];if(n.data=null===n.data?0:n.data,"auto"==a.pointer.color){for(var i=0;i<l.length;i++)if(n.data<=l[i].value){n.color=l[i].color;break}}else n.color=a.pointer.color;var o=a.startAngle-a.endAngle+1;n._endAngle_=o*n.data+a.startAngle,n._oldAngle_=a.oldAngle,a.oldAngle<a.endAngle&&(n._oldAngle_+=2),n.data>=a.oldData?n._proportion_=(n._endAngle_-n._oldAngle_)*t+a.oldAngle:n._proportion_=n._oldAngle_-(n._oldAngle_-n._endAngle_)*t,n._proportion_>=2&&(n._proportion_=n._proportion_%2)}return e}function N(e){e=D(e);for(var l=0,a=0;a<e.length;a++){var t=e[a],n=t.format?t.format(+t._proportion_.toFixed(2)):u.toFixed(100*t._proportion_)+"%";l=Math.max(l,g(n))}return l}function W(e,l,a,t,u,n){return e.map(function(e){return null===e?null:(e.width=Math.ceil((l-2*u.columePadding)/a),n.extra.column&&n.extra.column.width&&+n.extra.column.width>0&&(e.width=Math.min(e.width,+n.extra.column.width)),e.x+=(t+.5-a/2)*e.width,e)})}function B(e,l,a,t,u,n,i){return e.map(function(e){return null===e?null:(e.width=l-2*u.columePadding,n.extra.column&&n.extra.column.width&&+n.extra.column.width>0?e.width=Math.min(e.width,+n.extra.column.width):e.width=Math.min(e.width,25),t>0&&(e.width-=2*i),e)})}function V(e,l,a,t,u,n,i){return e.map(function(e,a){return null===e?null:(e.width=l-2*u.columePadding,n.extra.column&&n.extra.column.width&&+n.extra.column.width>0?e.width=Math.min(e.width,+n.extra.column.width):e.width=Math.min(e.width,25),e)})}function U(e,l,a){var t=a.yAxisWidth+a.yAxisTitleWidth,u=l.width-2*a.padding-t,n=l.enableScroll?Math.min(l.xAxis.itemCount,e.length):e.length,i=u/n,o=[],r=a.padding+t,v=l.width-a.padding;return e.forEach(function(e,l){o.push(r+l*i)}),!0===l.enableScroll?o.push(r+e.length*i):o.push(v),{xAxisPoints:o,startX:r,endX:v,eachSpacing:i}}function G(e,l,a,t,u,n,i){var o=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1,r=[],v=n.height-2*i.padding-i.xAxisHeight-i.legendHeight;return e.forEach(function(e,b){if(null===e)r.push(null);else{var s=[];e.forEach(function(e,r){var c={};c.x=t[b]+Math.round(u/2);var h=e.value||e,f=v*(h-l)/(a-l);f*=o,c.y=n.height-i.xAxisHeight-i.legendHeight-Math.round(f)-i.padding,s.push(c)}),r.push(s)}}),r}function X(e,l,a,t,u,n,i){var o=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1,r=[],v=n.height-2*i.padding-i.xAxisHeight-i.legendHeight;return e.forEach(function(e,b){if(null===e)r.push(null);else{var s={};s.color=e.color,s.x=t[b]+Math.round(u/2);var c=e;"object"===typeof e&&null!==e&&(c=e.value);var h=v*(c-l)/(a-l);h*=o,s.y=n.height-i.xAxisHeight-i.legendHeight-Math.round(h)-i.padding,r.push(s)}}),r}function q(e,l,a,t,u,n,i,o,r){var v=arguments.length>9&&void 0!==arguments[9]?arguments[9]:1,b=[],s=n.height-2*i.padding-i.xAxisHeight-i.legendHeight;return e.forEach(function(e,c){if(null===e)b.push(null);else{var h={};if(h.color=e.color,h.x=t[c]+Math.round(u/2),o>0){for(var f=0,p=0;p<=o;p++)f+=r[p].data[c];var d=f-e,g=s*(f-l)/(a-l),y=s*(d-l)/(a-l)}else f=e,g=s*(f-l)/(a-l),y=0;var x=y;g*=v,x*=v,h.y=n.height-i.xAxisHeight-i.legendHeight-Math.round(g)-i.padding,h.y0=n.height-i.xAxisHeight-i.legendHeight-Math.round(x)-i.padding,b.push(h)}}),b}function J(e,l,a,t){var u;u="stack"==t?x(e):y(e);var n=[];u=u.filter(function(e){return"object"===typeof e&&null!==e?e.constructor==Array?null!==e:null!==e.value:null!==e}),u.map(function(e){"object"===typeof e?e.constructor==Array?e.map(function(e){n.push(e)}):n.push(e.value):n.push(e)});var i=0,o=0;if(n.length>0&&(i=Math.min.apply(this,n),o=Math.max.apply(this,n)),"number"===typeof l.yAxis.min&&(i=Math.min(l.yAxis.min,i)),"number"===typeof l.yAxis.max&&(o=Math.max(l.yAxis.max,o)),i===o){var r=o||10;o+=r}for(var v=d(i,o),b=v.minRange,s=v.maxRange,c=[],h=(s-b)/a.yAxisSplit,f=0;f<=a.yAxisSplit;f++)c.push(b+h*f);return c.reverse()}function Y(e,l,a){var n=t({},l.extra.column||{type:""}),i=J(e,l,a,n.type),o=a.yAxisWidth,r=i.map(function(e){return e=u.toFixed(e,2),e=l.yAxis.format?l.yAxis.format(Number(e)):e,o=Math.max(o,g(e)+5),e});return!0===l.yAxis.disabled&&(o=0),{rangesFormat:r,ranges:i,yAxisWidth:o}}function K(e,l,a,t,u){var n=J(l,a,t),i=a.height-2*t.padding-t.xAxisHeight-t.legendHeight,o=n[0],r=n[n.length-1],v=t.padding,b=t.padding+i,s=o-(o-r)*(e-v)/(b-v);return s=a.yAxis.format?a.yAxis.format(Number(s)):s,s}function Z(e,l){!0!==l.rotateLock?(e.translate(l.height,0),e.rotate(90*Math.PI/180)):!0!==l._rotate_&&(e.translate(l.height,0),e.rotate(90*Math.PI/180),l._rotate_=!0)}function Q(e,l,a,t,u){t.beginPath(),t.setStrokeStyle("#ffffff"),t.setLineWidth(1*u.pixelRatio),t.setFillStyle(l),"diamond"===a?e.forEach(function(e,l){null!==e&&(t.moveTo(e.x,e.y-4.5),t.lineTo(e.x-4.5,e.y),t.lineTo(e.x,e.y+4.5),t.lineTo(e.x+4.5,e.y),t.lineTo(e.x,e.y-4.5))}):"circle"===a?e.forEach(function(e,l){null!==e&&(t.moveTo(e.x+3.5*u.pixelRatio,e.y),t.arc(e.x,e.y,4*u.pixelRatio,0,2*Math.PI,!1))}):"rect"===a?e.forEach(function(e,l){null!==e&&(t.moveTo(e.x-3.5,e.y-3.5),t.rect(e.x-3.5,e.y-3.5,7,7))}):"triangle"===a&&e.forEach(function(e,l){null!==e&&(t.moveTo(e.x,e.y-4.5),t.lineTo(e.x-4.5,e.y+4.5),t.lineTo(e.x+4.5,e.y+4.5),t.lineTo(e.x,e.y-4.5))}),t.closePath(),t.fill(),t.stroke()}function ee(e,l,a){var t=e.title.fontSize||l.titleFontSize,u=e.subtitle.fontSize||l.subtitleFontSize,n=e.title.name||"",i=e.subtitle.name||"",o=e.title.color||l.titleColor,r=e.subtitle.color||l.subtitleColor,v=n?t:0,b=i?u:0,s=5;if(i){var c=g(i,u),h=(e.width-c)/2+(e.subtitle.offsetX||0),f=(e.height-l.legendHeight+u)/2+(e.subtitle.offsetY||0);n&&(f-=(v+s)/2),a.beginPath(),a.setFontSize(u),a.setFillStyle(r),a.fillText(i,h,f),a.closePath(),a.stroke()}if(n){var p=g(n,t),d=(e.width-p)/2+(e.title.offsetX||0),y=(e.height-l.legendHeight+t)/2+(e.title.offsetY||0);i&&(y+=(b+s)/2),a.beginPath(),a.setFontSize(t),a.setFillStyle(o),a.fillText(n,d,y),a.closePath(),a.stroke()}}function le(e,l,a,t){var u=l.data;e.forEach(function(e,n){if(null!==e){t.beginPath(),t.setFontSize(l.textSize||a.fontSize),t.setFillStyle(l.textColor||"#666666");var i=u[n];"object"===typeof u[n]&&null!==u[n]&&(i=u[n].value);var o=l.format?l.format(i):i;t.fillText(o,e.x-g(o,l.textSize||a.fontSize)/2,e.y-2),t.closePath(),t.stroke()}})}function ae(e,l,a,t,u,n){l-=e.width/2+u.gaugeLabelTextMargin;for(var i=e.startAngle-e.endAngle+1,o=i/e.splitLine.splitNumber,r=e.endNumber-e.startNumber,v=r/e.splitLine.splitNumber,b=e.startAngle,s=e.startNumber,c=0;c<e.splitLine.splitNumber+1;c++){var h={x:l*Math.cos(b*Math.PI),y:l*Math.sin(b*Math.PI)},f=e.labelFormat?e.labelFormat(s):s;h.x+=a.x-g(f)/2,h.y+=a.y;var p=h.x,d=h.y;n.beginPath(),n.setFontSize(u.fontSize),n.setFillStyle(e.labelColor||"#666666"),n.fillText(f,p,d+u.fontSize/2),n.closePath(),n.stroke(),b+=o,b>=2&&(b%=2),s+=v}}function te(e,l,a,t,n,i){var o=t.extra.radar||{};l+=n.radarLabelTextMargin,e.forEach(function(e,r){var v={x:l*Math.cos(e),y:l*Math.sin(e)},b=c(v.x,v.y,a),s=b.x,h=b.y;u.approximatelyEqual(v.x,0)?s-=g(t.categories[r]||"")/2:v.x<0&&(s-=g(t.categories[r]||"")),i.beginPath(),i.setFontSize(n.fontSize),i.setFillStyle(o.labelColor||"#666666"),i.fillText(t.categories[r]||"",s,h+n.fontSize/2),i.closePath(),i.stroke()})}function ue(e,l,a,t,n,i){for(var o=a.pieChartLinePadding,r=[],v=null,b=e.map(function(e){var l=2*Math.PI-(e._start_+2*Math.PI*e._proportion_/2),a=e.format?e.format(+e._proportion_.toFixed(2)):u.toFixed(100*e._proportion_)+"%",t=e.color,n=e._radius_;return{arc:l,text:a,color:t,radius:n,textColor:e.textColor,textSize:e.textSize}}),s=0;s<b.length;s++){var f=b[s],p=Math.cos(f.arc)*(f.radius+o),d=Math.sin(f.arc)*(f.radius+o),y=Math.cos(f.arc)*f.radius,x=Math.sin(f.arc)*f.radius,_=p>=0?p+a.pieChartTextPadding:p-a.pieChartTextPadding,m=d,w=g(f.text),A=m;v&&u.isSameXCoordinateArea(v.start,{x:_})&&(A=_>0?Math.min(m,v.start.y):p<0?Math.max(m,v.start.y):m>0?Math.max(m,v.start.y):Math.min(m,v.start.y)),_<0&&(_-=w);var P={lineStart:{x:y,y:x},lineEnd:{x:p,y:d},start:{x:_,y:A},width:w,height:a.fontSize,text:f.text,color:f.color,textColor:f.textColor,textSize:f.textSize};v=h(P,v),r.push(v)}for(var S=0;S<r.length;S++){var T=r[S],$=c(T.lineStart.x,T.lineStart.y,i),O=c(T.lineEnd.x,T.lineEnd.y,i),k=c(T.start.x,T.start.y,i);t.setLineWidth(1*l.pixelRatio),t.setFontSize(a.fontSize),t.beginPath(),t.setStrokeStyle(T.color),t.setFillStyle(T.color),t.moveTo($.x,$.y);var M=T.start.x<0?k.x+T.width:k.x,C=T.start.x<0?k.x-5:k.x+5;t.quadraticCurveTo(O.x,O.y,M,k.y),t.moveTo($.x,$.y),t.stroke(),t.closePath(),t.beginPath(),t.moveTo(k.x+T.width,k.y),t.arc(M,k.y,2,0,2*Math.PI),t.closePath(),t.fill(),t.beginPath(),t.setFontSize(T.textSize||a.fontSize),t.setFillStyle(T.textColor||"#666666"),t.fillText(T.text,C,k.y+3),t.closePath(),t.stroke(),t.closePath()}}function ne(e,l,a,t){var u=l.extra.tooltip||{};u.gridType=void 0==u.gridType?"solid":u.gridType,u.dashLength=void 0==u.dashLength?4:u.dashLength;var i=a.padding,o=l.height-a.padding-a.xAxisHeight-a.legendHeight;if("dash"==u.gridType&&t.setLineDash([u.dashLength,u.dashLength]),t.beginPath(),t.setStrokeStyle(u.gridColor||"#cccccc"),t.setLineWidth(1*l.pixelRatio),t.moveTo(e,i),t.lineTo(e,o),t.closePath(),t.stroke(),t.setLineDash([]),u.xAxisLabel){var r=l.categories[l.tooltip.index];t.setFontSize(a.fontSize);var v=t.measureText(r).width,b=e-a.toolTipPadding-.5*v,s=o;t.beginPath(),t.setFillStyle(n(u.labelBgColor||a.toolTipBackground,u.labelBgOpacity||a.toolTipOpacity)),t.setStrokeStyle(u.labelBgColor||a.toolTipBackground),t.setLineWidth(1*l.pixelRatio),t.rect(b,s,v+2*a.toolTipPadding,a.fontSize+2*a.toolTipPadding),t.closePath(),t.stroke(),t.fill(),t.beginPath(),t.setFontSize(a.fontSize),t.setFillStyle(u.labelFontColor||a.fontColor),t.fillText(r,b+2*a.toolTipPadding,s+a.toolTipPadding+a.fontSize),t.closePath(),t.stroke()}}function ie(e,l,a,t,u){var i=e.extra.tooltip||{};i.gridType=void 0==i.gridType?"solid":i.gridType,i.dashLength=void 0==i.dashLength?4:i.dashLength;var o=l.padding+l.yAxisWidth+l.yAxisTitleWidth,r=e.width-l.padding;if("dash"==i.gridType&&a.setLineDash([i.dashLength,i.dashLength]),a.beginPath(),a.setStrokeStyle(i.gridColor||"#cccccc"),a.setLineWidth(1*e.pixelRatio),a.moveTo(o,e.tooltip.offset.y),a.lineTo(r,e.tooltip.offset.y),a.closePath(),a.stroke(),a.setLineDash([]),i.yAxisLabel){var v=K(e.tooltip.offset.y,e.series,e,l,t);a.setFontSize(l.fontSize);var b=a.measureText(v).width,s=o-2*l.toolTipPadding-b,c=e.tooltip.offset.y;a.beginPath(),a.setFillStyle(n(i.labelBgColor||l.toolTipBackground,i.labelBgOpacity||l.toolTipOpacity)),a.setStrokeStyle(i.labelBgColor||l.toolTipBackground),a.setLineWidth(1*e.pixelRatio),a.rect(s,c-.5*l.fontSize-l.toolTipPadding,b+2*l.toolTipPadding,l.fontSize+2*l.toolTipPadding),a.closePath(),a.stroke(),a.fill(),a.beginPath(),a.setFontSize(l.fontSize),a.setFillStyle(i.labelFontColor||l.fontColor),a.fillText(v,s+l.toolTipPadding,c+.5*l.fontSize),a.closePath(),a.stroke()}}function oe(e,l,a,t,u){var i=l.extra.tooltip||{activeBgColor:"#000000",activeBgOpacity:.08};i.activeBgColor=i.activeBgColor?i.activeBgColor:"#000000",i.activeBgOpacity=i.activeBgOpacity?i.activeBgOpacity:.08;var o=a.padding,r=l.height-a.padding-a.xAxisHeight-a.legendHeight;t.beginPath(),t.setFillStyle(n(i.activeBgColor,i.activeBgOpacity)),t.rect(e-u/2,o,u,r-o),t.closePath(),t.fill()}function re(e,l,a,u,i,o,r){var v=a.extra.tooltip||{bgColor:"#000000",bgOpacity:.7,fontColor:"#FFFFFF"};v.bgColor=v.bgColor?v.bgColor:"#000000",v.bgOpacity=v.bgOpacity?v.bgOpacity:.7,v.fontColor=v.fontColor?v.fontColor:"#FFFFFF";var b=4*a.pixelRatio,s=5*a.pixelRatio,c=8*a.pixelRatio,h=!1;"line"!=a.type&&"area"!=a.type&&"candle"!=a.type&&"mix"!=a.type||ne(a.tooltip.offset.x,a,u,i),l=t({x:0,y:0},l),l.y-=8*a.pixelRatio;var f=e.map(function(e){return g(e.text)}),p=b+s+4*u.toolTipPadding+Math.max.apply(null,f),d=2*u.toolTipPadding+e.length*u.toolTipLineHeight;l.x-Math.abs(a._scrollDistance_)+c+p>a.width&&(h=!0),i.beginPath(),i.setFillStyle(n(v.bgColor||u.toolTipBackground,v.bgOpacity||u.toolTipOpacity)),h?(i.moveTo(l.x,l.y+10*a.pixelRatio),i.lineTo(l.x-c,l.y+10*a.pixelRatio-5*a.pixelRatio),i.lineTo(l.x-c,l.y),i.lineTo(l.x-c-Math.round(p),l.y),i.lineTo(l.x-c-Math.round(p),l.y+d),i.lineTo(l.x-c,l.y+d),i.lineTo(l.x-c,l.y+10*a.pixelRatio+5*a.pixelRatio),i.lineTo(l.x,l.y+10*a.pixelRatio)):(i.moveTo(l.x,l.y+10*a.pixelRatio),i.lineTo(l.x+c,l.y+10*a.pixelRatio-5*a.pixelRatio),i.lineTo(l.x+c,l.y),i.lineTo(l.x+c+Math.round(p),l.y),i.lineTo(l.x+c+Math.round(p),l.y+d),i.lineTo(l.x+c,l.y+d),i.lineTo(l.x+c,l.y+10*a.pixelRatio+5*a.pixelRatio),i.lineTo(l.x,l.y+10*a.pixelRatio)),i.closePath(),i.fill(),e.forEach(function(e,a){if(null!==e.color){i.beginPath(),i.setFillStyle(e.color);var t=l.x+c+2*u.toolTipPadding,n=l.y+(u.toolTipLineHeight-u.fontSize)/2+u.toolTipLineHeight*a+u.toolTipPadding+1;h&&(t=l.x-p-c+2*u.toolTipPadding),i.fillRect(t,n,b,u.fontSize),i.closePath()}}),e.forEach(function(e,a){var t=l.x+c+2*u.toolTipPadding+b+s;h&&(t=l.x-p-c+2*u.toolTipPadding+ +b+s);var n=l.y+(u.toolTipLineHeight-u.fontSize)/2+u.toolTipLineHeight*a+u.toolTipPadding;i.beginPath(),i.setFontSize(u.fontSize),i.setFillStyle(v.fontColor),i.fillText(e.text,t,n+u.fontSize),i.closePath(),i.stroke()})}function ve(e,l,a,t){var u=a.xAxisHeight+(l.height-a.xAxisHeight-g(e))/2;t.save(),t.beginPath(),t.setFontSize(a.fontSize),t.setFillStyle(l.yAxis.titleFontColor||"#333333"),t.translate(0,l.height),t.rotate(-90*Math.PI/180),t.fillText(e,u,a.padding+.5*a.fontSize),t.closePath(),t.stroke(),t.restore()}function be(e,l,a,t){var u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,n=l.extra.column||{type:{},meter:{}};n.type=void 0==n.type?"group":n.type,n.meter=n.meter||{},n.meter.border=void 0==n.meter.border?4:n.meter.border,n.meter.fillColor=void 0==n.meter.fillColor?"#FFFFFF":n.meter.fillColor;var i=Y(e,l,a),o=i.ranges,r=U(l.categories,l,a),v=r.xAxisPoints,b=r.eachSpacing,s=o.pop(),c=o.shift(),h=[];return t.save(),l._scrollDistance_&&0!==l._scrollDistance_&&!0===l.enableScroll&&t.translate(l._scrollDistance_,0),l.tooltip&&l.tooltip.textList&&l.tooltip.textList.length&&1===u&&oe(l.tooltip.offset.x,l,a,t,b),e.forEach(function(i,o){var r=i.data;switch(n.type){case"group":var f=X(r,s,c,v,b,l,a,u),p=q(r,s,c,v,b,l,a,o,e,u);h.push(p),f=W(f,b,e.length,o,a,l),f.forEach(function(e,u){if(null!==e){t.beginPath(),t.setFillStyle(e.color||i.color);var n=e.x-e.width/2+1,o=l.height-e.y-a.padding-a.xAxisHeight-a.legendHeight;t.moveTo(n,e.y),t.fillRect(n,e.y,e.width-2,o),t.closePath(),t.fill()}});break;case"stack":f=q(r,s,c,v,b,l,a,o,e,u);h.push(f),f=V(f,b,e.length,o,a,l,e),f.forEach(function(e,u){if(null!==e){t.beginPath(),t.setFillStyle(e.color||i.color);var n=e.x-e.width/2+1,r=l.height-e.y-a.padding-a.xAxisHeight-a.legendHeight,v=l.height-e.y0-a.padding-a.xAxisHeight-a.legendHeight;o>0&&(r-=v),t.moveTo(n,e.y),t.fillRect(n,e.y,e.width-2,r),t.closePath(),t.fill()}});break;case"meter":f=X(r,s,c,v,b,l,a,u);h.push(f),f=B(f,b,e.length,o,a,l,n.meter.border),0==o?f.forEach(function(e,u){if(null!==e){t.beginPath(),t.setFillStyle(n.meter.fillColor);var o=e.x-e.width/2,r=l.height-e.y-a.padding-a.xAxisHeight-a.legendHeight;t.moveTo(o,e.y),t.fillRect(o,e.y,e.width,r),t.closePath(),t.fill(),n.meter.border>0&&(t.beginPath(),t.setStrokeStyle(i.color),t.setLineWidth(n.meter.border*l.pixelRatio),t.moveTo(o+.5*n.meter.border,e.y+r),t.lineTo(o+.5*n.meter.border,e.y+.5*n.meter.border),t.lineTo(o+e.width-.5*n.meter.border,e.y+.5*n.meter.border),t.lineTo(o+e.width-.5*n.meter.border,e.y+r),t.stroke())}}):f.forEach(function(e,u){if(null!==e){t.beginPath(),t.setFillStyle(e.color||i.color);var n=e.x-e.width/2,o=l.height-e.y-a.padding-a.xAxisHeight-a.legendHeight;t.moveTo(n,e.y),t.fillRect(n,e.y,e.width,o),t.closePath(),t.fill()}});break}}),!1!==l.dataLabel&&1===u&&e.forEach(function(i,o){var r=i.data;switch(n.type){case"group":var h=X(r,s,c,v,b,l,a,u);h=W(h,b,e.length,o,a,l),le(h,i,a,t);break;case"stack":h=q(r,s,c,v,b,l,a,o,e,u);le(h,i,a,t);break;case"meter":h=X(r,s,c,v,b,l,a,u);le(h,i,a,t);break}}),t.restore(),{xAxisPoints:v,calPoints:h,eachSpacing:b}}function se(e,l,a,t,u){var n=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,i=a.extra.candle||{color:{},average:{}};i.color.upLine=i.color.upLine?i.color.upLine:"#f04864",i.color.upFill=i.color.upFill?i.color.upFill:"#f04864",i.color.downLine=i.color.downLine?i.color.downLine:"#2fc25b",i.color.downFill=i.color.downFill?i.color.downFill:"#2fc25b",i.average.show=!0===i.average.show,i.average.name=i.average.name?i.average.name:[],i.average.day=i.average.day?i.average.day:[],i.average.color=i.average.color?i.average.color:["#1890ff","#2fc25b","#facc14","#f04864","#8543e0","#90ed7d"],a.extra.candle=i;var o=Y(e,a,t),r=o.ranges,v=U(a.categories,a,t),b=v.xAxisPoints,c=v.eachSpacing,h=r.pop(),f=r.shift(),p=[];return u.save(),a._scrollDistance_&&0!==a._scrollDistance_&&!0===a.enableScroll&&u.translate(a._scrollDistance_,0),i.average.show&&l.forEach(function(e,l){var i=e.data,o=X(i,h,f,b,c,a,t,n),r=L(o);r.forEach(function(l,a){u.beginPath(),u.setStrokeStyle(e.color),u.setLineWidth(1),1===l.length?(u.moveTo(l[0].x,l[0].y),u.arc(l[0].x,l[0].y,1,0,2*Math.PI)):(u.moveTo(l[0].x,l[0].y),l.forEach(function(e,a){if(a>0){var t=s(l,a-1);u.bezierCurveTo(t.ctrA.x,t.ctrA.y,t.ctrB.x,t.ctrB.y,e.x,e.y)}}),u.moveTo(l[0].x,l[0].y)),u.closePath(),u.stroke()})}),e.forEach(function(e,l){var o=e.data,r=G(o,h,f,b,c,a,t,n);p.push(r);var v=L(r);v=v[0],v.forEach(function(e,l){u.beginPath(),o[l][1]-o[l][0]>0?(u.setStrokeStyle(i.color.upLine),u.setFillStyle(i.color.upFill),u.setLineWidth(1*a.pixelRatio),u.moveTo(e[3].x,e[3].y),u.lineTo(e[1].x,e[1].y),u.lineTo(e[1].x-c/4,e[1].y),u.lineTo(e[0].x-c/4,e[0].y),u.lineTo(e[0].x,e[0].y),u.lineTo(e[2].x,e[2].y),u.lineTo(e[0].x,e[0].y),u.lineTo(e[0].x+c/4,e[0].y),u.lineTo(e[1].x+c/4,e[1].y),u.lineTo(e[1].x,e[1].y),u.moveTo(e[3].x,e[3].y)):(u.setStrokeStyle(i.color.downLine),u.setFillStyle(i.color.downFill),u.setLineWidth(1*a.pixelRatio),u.moveTo(e[3].x,e[3].y),u.lineTo(e[0].x,e[0].y),u.lineTo(e[0].x-c/4,e[0].y),u.lineTo(e[1].x-c/4,e[1].y),u.lineTo(e[1].x,e[1].y),u.lineTo(e[2].x,e[2].y),u.lineTo(e[1].x,e[1].y),u.lineTo(e[1].x+c/4,e[1].y),u.lineTo(e[0].x+c/4,e[0].y),u.lineTo(e[0].x,e[0].y),u.moveTo(e[3].x,e[3].y)),u.closePath(),u.fill(),u.stroke()})}),u.restore(),{xAxisPoints:b,calPoints:p,eachSpacing:c}}function ce(e,l,a,t){var u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,i=l.extra.area||{type:"straight",opacity:.5,addLine:!1,width:2};i.type=i.type?i.type:"straight",i.opacity=i.opacity?i.opacity:.2,i.addLine=1==i.addLine,i.width=i.width?i.width:2;var o=Y(e,l,a),r=o.ranges,v=U(l.categories,l,a),b=v.xAxisPoints,c=v.eachSpacing,h=r.pop(),f=r.shift(),p=l.height-a.padding-a.xAxisHeight-a.legendHeight,d=[];return t.save(),l._scrollDistance_&&0!==l._scrollDistance_&&!0===l.enableScroll&&t.translate(l._scrollDistance_,0),l.tooltip&&l.tooltip.textList&&l.tooltip.textList.length&&1===u&&ne(l.tooltip.offset.x,l,a,t),e.forEach(function(e,o){var r=e.data,v=X(r,h,f,b,c,l,a,u);d.push(v);for(var g=L(v),y=function(a){var u=g[a];if(t.beginPath(),t.setStrokeStyle(n(e.color,i.opacity)),t.setFillStyle(n(e.color,i.opacity)),t.setLineWidth(i.width*l.pixelRatio),u.length>1){var o=u[0],r=u[u.length-1];t.moveTo(o.x,o.y),"curve"===i.type?u.forEach(function(e,l){if(l>0){var a=s(u,l-1);t.bezierCurveTo(a.ctrA.x,a.ctrA.y,a.ctrB.x,a.ctrB.y,e.x,e.y)}}):u.forEach(function(e,l){l>0&&t.lineTo(e.x,e.y)}),t.lineTo(r.x,p),t.lineTo(o.x,p),t.lineTo(o.x,o.y)}else{var v=u[0];t.moveTo(v.x-c/2,v.y),t.lineTo(v.x+c/2,v.y),t.lineTo(v.x+c/2,p),t.lineTo(v.x-c/2,p),t.moveTo(v.x-c/2,v.y)}t.closePath(),t.fill(),i.addLine&&(t.beginPath(),t.setStrokeStyle(e.color),t.setLineWidth(i.width*l.pixelRatio),1===u.length?(t.moveTo(u[0].x,u[0].y),t.arc(u[0].x,u[0].y,1,0,2*Math.PI)):(t.moveTo(u[0].x,u[0].y),"curve"===i.type?u.forEach(function(e,l){if(l>0){var a=s(u,l-1);t.bezierCurveTo(a.ctrA.x,a.ctrA.y,a.ctrB.x,a.ctrB.y,e.x,e.y)}}):u.forEach(function(e,l){l>0&&t.lineTo(e.x,e.y)}),t.moveTo(u[0].x,u[0].y)),t.closePath(),t.stroke())},x=0;x<g.length;x++)y(x);if(!1!==l.dataPointShape){var _=a.dataPointShape[o%a.dataPointShape.length];Q(v,e.color,_,t,l)}}),!1!==l.dataLabel&&1===u&&e.forEach(function(e,n){var i=e.data,o=X(i,h,f,b,c,l,a,u);le(o,e,a,t)}),t.restore(),{xAxisPoints:b,calPoints:d,eachSpacing:c}}function he(e,l,a,t){var u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,n=l.extra.line||{type:"straight",width:2};n.type=n.type?n.type:"straight",n.width=n.width?n.width:2;var i=Y(e,l,a),o=i.ranges,r=U(l.categories,l,a),v=r.xAxisPoints,b=r.eachSpacing,c=o.pop(),h=o.shift(),f=[];return t.save(),l._scrollDistance_&&0!==l._scrollDistance_&&!0===l.enableScroll&&t.translate(l._scrollDistance_,0),l.tooltip&&l.tooltip.textList&&l.tooltip.textList.length&&1===u&&ne(l.tooltip.offset.x,l,a,t),e.forEach(function(e,i){var o=e.data,r=X(o,c,h,v,b,l,a,u);f.push(r);var p=L(r);if(p.forEach(function(a,u){t.beginPath(),t.setStrokeStyle(e.color),t.setLineWidth(n.width*l.pixelRatio),1===a.length?(t.moveTo(a[0].x,a[0].y),t.arc(a[0].x,a[0].y,1,0,2*Math.PI)):(t.moveTo(a[0].x,a[0].y),"curve"===n.type?a.forEach(function(e,l){if(l>0){var u=s(a,l-1);t.bezierCurveTo(u.ctrA.x,u.ctrA.y,u.ctrB.x,u.ctrB.y,e.x,e.y)}}):a.forEach(function(e,l){l>0&&t.lineTo(e.x,e.y)}),t.moveTo(a[0].x,a[0].y)),t.closePath(),t.stroke()}),!1!==l.dataPointShape){var d=a.dataPointShape[i%a.dataPointShape.length];Q(r,e.color,d,t,l)}}),!1!==l.dataLabel&&1===u&&e.forEach(function(e,n){var i=e.data,o=X(i,c,h,v,b,l,a,u);le(o,e,a,t)}),t.restore(),{xAxisPoints:v,calPoints:f,eachSpacing:b}}function fe(e,l,a,t){var u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,n=Y(e,l,a),i=n.ranges,o=U(l.categories,l,a),r=o.xAxisPoints,v=o.eachSpacing,b=i.pop(),c=i.shift(),h=l.height-a.padding-a.xAxisHeight-a.legendHeight,f=[],p=0,d=0;if(e.forEach(function(e,l){"column"==e.type&&(d+=1)}),t.save(),l._scrollDistance_&&0!==l._scrollDistance_&&!0===l.enableScroll&&t.translate(l._scrollDistance_,0),l.tooltip&&l.tooltip.textList&&l.tooltip.textList.length&&1===u&&ne(l.tooltip.offset.x,l,a,t),e.forEach(function(e,n){var i=e.data,o=X(i,b,c,r,v,l,a,u);if(f.push(o),"column"==e.type&&(o=W(o,v,d,p,a,l),o.forEach(function(u,n){if(null!==u){t.beginPath(),t.setFillStyle(u.color||e.color);var i=u.x-u.width/2+1,o=l.height-u.y-a.padding-a.xAxisHeight-a.legendHeight;t.moveTo(i,u.y),t.rect(i,u.y,u.width-2,o),t.closePath(),t.fill()}}),p+=1),"area"==e.type)for(var g=L(o),y=function(a){var u=g[a];if(t.beginPath(),t.setStrokeStyle(e.color),t.setFillStyle(e.color),t.setGlobalAlpha(.2),t.setLineWidth(2*l.pixelRatio),u.length>1){_=u[0];var n=u[u.length-1];t.moveTo(_.x,_.y),"curve"===e.style?u.forEach(function(e,l){if(l>0){var a=s(u,l-1);t.bezierCurveTo(a.ctrA.x,a.ctrA.y,a.ctrB.x,a.ctrB.y,e.x,e.y)}}):u.forEach(function(e,l){l>0&&t.lineTo(e.x,e.y)}),t.lineTo(n.x,h),t.lineTo(_.x,h),t.lineTo(_.x,_.y)}else{var i=u[0];t.moveTo(i.x-v/2,i.y),t.lineTo(i.x+v/2,i.y),t.lineTo(i.x+v/2,h),t.lineTo(i.x-v/2,h),t.moveTo(i.x-v/2,i.y)}t.closePath(),t.fill(),t.setGlobalAlpha(1)},x=0;x<g.length;x++){var _;y(x)}if("line"==e.type){var m=L(o);m.forEach(function(a,u){t.beginPath(),t.setStrokeStyle(e.color),t.setLineWidth(2*l.pixelRatio),1===a.length?(t.moveTo(a[0].x,a[0].y),t.arc(a[0].x,a[0].y,1,0,2*Math.PI)):(t.moveTo(a[0].x,a[0].y),"curve"==e.style?a.forEach(function(e,l){if(l>0){var u=s(a,l-1);t.bezierCurveTo(u.ctrA.x,u.ctrA.y,u.ctrB.x,u.ctrB.y,e.x,e.y)}}):a.forEach(function(e,l){l>0&&t.lineTo(e.x,e.y)}),t.moveTo(a[0].x,a[0].y)),t.closePath(),t.stroke()})}if("point"==e.type&&o.forEach(function(a,u){a&&(t.beginPath(),t.setFillStyle(e.color),t.setStrokeStyle("#FFFFFF"),t.setLineWidth(1*l.pixelRatio),t.moveTo(a.x+3.5*l.pixelRatio,a.y),t.arc(a.x,a.y,4*l.pixelRatio,0,2*Math.PI),t.closePath(),t.fill(),t.stroke())}),1==e.addPoint&&"column"!==e.type){var w=a.dataPointShape[n%a.dataPointShape.length];Q(o,e.color,w,t,l)}}),!1!==l.dataLabel&&1===u){p=0;e.forEach(function(e,n){var i=e.data,o=X(i,b,c,r,v,l,a,u);"column"!==e.type?le(o,e,a,t):(o=W(o,v,d,p,a,l),le(o,e,a,t),p+=1)})}return t.restore(),{xAxisPoints:r,calPoints:f,eachSpacing:v}}function pe(e,l,a,t,u,n){var i=e.extra.tooltip||{};i.horizentalLine&&e.tooltip&&1===t&&("line"==e.type||"area"==e.type||"column"==e.type||"candle"==e.type||"mix"==e.type)&&ie(e,l,a,u,n),a.save(),e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&a.translate(e._scrollDistance_,0),e.tooltip&&e.tooltip.textList&&e.tooltip.textList.length&&1===t&&re(e.tooltip.textList,e.tooltip.offset,e,l,a,u,n),a.restore()}function de(e,l,a,t){var u=U(e,l,a),n=u.xAxisPoints,i=u.startX,o=u.endX,r=u.eachSpacing,v=l.height-a.padding-a.xAxisHeight-a.legendHeight,s=a.padding;if(l.enableScroll&&l.xAxis.scrollShow){var c=l.height-a.padding-a.legendHeight+6*l.pixelRatio,h=o-i,f=r*(n.length-1),p=h*h/f,d=0;l._scrollDistance_&&(d=-l._scrollDistance_*h/f),t.beginPath(),t.setLineCap("round"),t.setLineWidth(6*l.pixelRatio),t.setStrokeStyle(l.xAxis.scrollBackgroundColor||"#EFEBEF"),t.moveTo(i,c),t.lineTo(o,c),t.stroke(),t.closePath(),t.beginPath(),t.setLineCap("round"),t.setLineWidth(6*l.pixelRatio),t.setStrokeStyle(l.xAxis.scrollColor||"#A6A6A6"),t.moveTo(i+d,c),t.lineTo(i+d+p,c),t.stroke(),t.setLineCap("butt"),t.closePath()}if(t.save(),l._scrollDistance_&&0!==l._scrollDistance_&&t.translate(l._scrollDistance_,0),t.beginPath(),t.setStrokeStyle(l.xAxis.gridColor||"#cccccc"),t.setLineCap("butt"),t.setLineWidth(1*l.pixelRatio),"dash"==l.xAxis.gridType&&t.setLineDash([l.xAxis.dashLength,l.xAxis.dashLength]),!0!==l.xAxis.disableGrid&&("calibration"===l.xAxis.type?n.forEach(function(e,a){a>0&&(t.moveTo(e-r/2,v),t.lineTo(e-r/2,v+4*l.pixelRatio))}):(l.xAxis.gridEval=l.xAxis.gridEval||1,n.forEach(function(e,a){a%l.xAxis.gridEval==0&&(t.moveTo(e,v),t.lineTo(e,s))}))),t.closePath(),t.stroke(),t.setLineDash([]),!0!==l.xAxis.disabled){l.width,a.padding,a.yAxisWidth,a.yAxisTitleWidth;var y=e.length;l.xAxis.labelCount&&(y=l.xAxis.itemCount?Math.ceil(e.length/l.xAxis.itemCount*l.xAxis.labelCount):l.xAxis.labelCount,y-=1);for(var x=Math.ceil(e.length/y),_=[],m=e.length,w=0;w<m;w++)w%x!==0?_.push(""):_.push(e[w]);_[m-1]=e[m-1];var A=l.xAxis.fontSize||a.fontSize;0===a._xAxisTextAngle_?_.forEach(function(e,a){var u=r/2-g(e,A)/2;t.beginPath(),t.setFontSize(A),t.setFillStyle(l.xAxis.fontColor||"#666666"),t.fillText(e,n[a]+u,v+A+5),t.closePath(),t.stroke()}):_.forEach(function(e,u){t.save(),t.beginPath(),t.setFontSize(A),t.setFillStyle(l.xAxis.fontColor||"#666666");var i=g(e),o=r/2-i,s=b(n[u]+r/2,v+A/2+5,l.height),c=s.transX,h=s.transY;t.rotate(-1*a._xAxisTextAngle_),t.translate(c,h),t.fillText(e,n[u]+o,v+A+5),t.closePath(),t.stroke(),t.restore()})}t.restore()}function ge(e,l,a,t){if(!0!==l.yAxis.disableGrid){for(var u=l.height-2*a.padding-a.xAxisHeight-a.legendHeight,n=Math.floor(u/a.yAxisSplit),i=a.yAxisWidth+a.yAxisTitleWidth,o=a.padding+i,r=U(e,l,a),v=r.xAxisPoints,b=r.eachSpacing,s=b*(v.length-1),c=o+s,h=[],f=0;f<a.yAxisSplit;f++)h.push(a.padding+n*f);h.push(a.padding+n*a.yAxisSplit+2),t.save(),l._scrollDistance_&&0!==l._scrollDistance_&&t.translate(l._scrollDistance_,0),"dash"==l.yAxis.gridType&&t.setLineDash([l.yAxis.dashLength,l.yAxis.dashLength]),t.beginPath(),t.setStrokeStyle(l.yAxis.gridColor||"#cccccc"),t.setLineWidth(1*l.pixelRatio),h.forEach(function(e,l){t.moveTo(o,e),t.lineTo(c,e)}),t.closePath(),t.stroke(),t.setLineDash([]),t.restore()}}function ye(e,l,a,t){if(!0!==l.yAxis.disabled){var u=Y(e,l,a),n=u.rangesFormat,i=a.yAxisWidth+a.yAxisTitleWidth,o=l.height-2*a.padding-a.xAxisHeight-a.legendHeight,r=Math.floor(o/a.yAxisSplit),v=a.padding+i,b=l.width-a.padding,s=l.height-a.padding-a.xAxisHeight-a.legendHeight+a.xAxisTextPadding;t.beginPath(),t.setFillStyle(l.background||"#ffffff"),l._scrollDistance_<0&&t.fillRect(0,0,v,s+a.xAxisHeight),t.fillRect(b,0,l.width,s+a.xAxisHeight),t.closePath(),t.stroke();for(var c=[],h=0;h<=a.yAxisSplit;h++)c.push(a.padding+r*h);var f=l.yAxis.fontSize||a.fontSize;n.forEach(function(e,u){var n=c[u]?c[u]:s;t.beginPath(),t.setFontSize(f),t.setFillStyle(l.yAxis.fontColor||"#666666"),t.fillText(e,a.padding+a.yAxisTitleWidth,n+f/2),t.closePath(),t.stroke()}),l.yAxis.title&&ve(l.yAxis.title,l,a,t)}}function xe(e,l,a,t){if(!1!==l.legend){var u=E(e,l,a),n=u.legendList,i=5*l.pixelRatio,o=10*l.pixelRatio,r=15*l.pixelRatio;n.forEach(function(e,u){for(var n=0,v=0;v<e.length;v++){var b=e[v];b.name=b.name||"undefined",n+=3*i+g(b.name)+r}var s=(l.width-n)/2+i,c=l.height-a.padding-a.legendHeight+u*(a.fontSize+o)+i+o;t.setFontSize(a.fontSize);for(var h=0;h<e.length;h++){var f=e[h];switch(l.type){case"line":t.beginPath(),t.setLineWidth(1*l.pixelRatio),t.setStrokeStyle(f.color),t.setFillStyle(f.color),t.moveTo(s+7.5*l.pixelRatio,c+5*l.pixelRatio),t.arc(s+7.5*l.pixelRatio,c+5*l.pixelRatio,6*l.pixelRatio,0,2*Math.PI),t.closePath(),t.fill(),t.stroke();break;case"pie":t.beginPath(),t.setLineWidth(1*l.pixelRatio),t.setStrokeStyle(f.color),t.setFillStyle(f.color),t.moveTo(s+7.5*l.pixelRatio,c+5*l.pixelRatio),t.arc(s+7.5*l.pixelRatio,c+5*l.pixelRatio,6*l.pixelRatio,0,2*Math.PI),t.closePath(),t.fill(),t.stroke();break;case"ring":case"rose":t.beginPath(),t.setLineWidth(1*l.pixelRatio),t.setStrokeStyle(f.color),t.setFillStyle(f.color),t.moveTo(s+7.5*l.pixelRatio,c+5*l.pixelRatio),t.arc(s+7.5*l.pixelRatio,c+5*l.pixelRatio,6*l.pixelRatio,0,2*Math.PI),t.closePath(),t.fill(),t.stroke();break;case"gauge":break;case"arcbar":break;default:t.beginPath(),t.setLineWidth(1*l.pixelRatio),t.setStrokeStyle(f.color),t.setFillStyle(f.color),t.moveTo(s,c),t.fillRect(s,c,15*l.pixelRatio,10*l.pixelRatio),t.closePath(),t.fill(),t.stroke()}s+=i+r,t.beginPath(),t.setFontSize(a.fontSize),t.setFillStyle(l.extra.legendTextColor||"#333333"),t.fillText(f.name,s,c+6*l.pixelRatio+3*l.pixelRatio),t.closePath(),t.stroke(),s+=g(f.name)+2*i}})}}function _e(e,l,a,t){var u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,i=l.extra.pie||{},o={x:l.width/2,y:(l.height-a.legendHeight)/2},r=Math.min(o.x-a.pieChartLinePadding-a.pieChartTextPadding-a._pieTextMaxLength_,o.y-a.pieChartLinePadding-a.pieChartTextPadding);l.dataLabel?r-=10:r-=2*a.padding,e=D(e,r,u);var v=a.pieChartLinePadding/2;if(e=e.map(function(e){return e._start_+=(i.offsetAngle||0)*Math.PI/180,e}),e.forEach(function(e,a){l.tooltip&&l.tooltip.index==a&&(t.beginPath(),t.setFillStyle(n(e.color,l.extra.pie.activeOpacity||.5)),t.moveTo(o.x,o.y),t.arc(o.x,o.y,e._radius_+v,e._start_,e._start_+2*e._proportion_*Math.PI),t.closePath(),t.fill()),t.beginPath(),t.setLineWidth(2*l.pixelRatio),t.lineJoin="round",t.setStrokeStyle("#ffffff"),t.setFillStyle(e.color),t.moveTo(o.x,o.y),t.arc(o.x,o.y,e._radius_,e._start_,e._start_+2*e._proportion_*Math.PI),t.closePath(),t.fill(),!0!==l.disablePieStroke&&t.stroke()}),"ring"===l.type){var b=.6*r;"number"===typeof l.extra.pie.ringWidth&&l.extra.pie.ringWidth>0&&(b=Math.max(0,r-l.extra.pie.ringWidth)),t.beginPath(),t.setFillStyle(l.background||"#ffffff"),t.moveTo(o.x,o.y),t.arc(o.x,o.y,b,0,2*Math.PI),t.closePath(),t.fill()}if(!1!==l.dataLabel&&1===u){for(var s=!1,c=0,h=e.length;c<h;c++)if(e[c].data>0){s=!0;break}s&&ue(e,l,a,t,r,o)}return 1===u&&"ring"===l.type&&ee(l,a,t),{center:o,radius:r,series:e}}function me(e,l,a,t){var u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,i=l.extra.rose||{};i.type=i.type||"area";var o={x:l.width/2,y:(l.height-a.legendHeight)/2},r=Math.min(o.x-a.pieChartLinePadding-a.pieChartTextPadding-a._pieTextMaxLength_,o.y-a.pieChartLinePadding-a.pieChartTextPadding);l.dataLabel?r-=10:r-=2*a.padding;var v=i.minRadius||.5*r;e=j(e,i.type,v,r,u);var b=a.pieChartLinePadding/2;if(e=e.map(function(e){return e._start_+=(i.offsetAngle||0)*Math.PI/180,e}),e.forEach(function(e,a){l.tooltip&&l.tooltip.index==a&&(t.beginPath(),t.setFillStyle(n(e.color,i.activeOpacity||.5)),t.moveTo(o.x,o.y),t.arc(o.x,o.y,b+e._radius_,e._start_,e._start_+2*e._proportion_*Math.PI),t.closePath(),t.fill()),t.beginPath(),t.setLineWidth(2*l.pixelRatio),t.lineJoin="round",t.setStrokeStyle("#ffffff"),t.setFillStyle(e.color),t.moveTo(o.x,o.y),t.arc(o.x,o.y,e._radius_,e._start_,e._start_+2*e._proportion_*Math.PI),t.closePath(),t.fill(),!0!==l.disablePieStroke&&t.stroke()}),!1!==l.dataLabel&&1===u){for(var s=!1,c=0,h=e.length;c<h;c++)if(e[c].data>0){s=!0;break}s&&ue(e,l,a,t,r,o)}return{center:o,radius:r,series:e}}function we(e,l,a,t){var u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,n=l.extra.arcbar||{};n.startAngle=n.startAngle?n.startAngle:.75,n.endAngle=n.endAngle?n.endAngle:.25,n.type=n.type?n.type:"default",e=I(e,n,u);var i={x:l.width/2,y:l.height/2},o=Math.min(i.x,i.y);"number"===typeof n.width&&n.width>0?n.width=n.width:n.width=12*l.pixelRatio,o-=a.padding+n.width/2,t.setLineWidth(n.width),t.setStrokeStyle(n.backgroundColor||"#E9E9E9"),t.setLineCap("round"),t.beginPath(),"default"==n.type?t.arc(i.x,i.y,o,n.startAngle*Math.PI,n.endAngle*Math.PI,!1):t.arc(i.x,i.y,o,0,2*Math.PI,!1),t.stroke();for(var r=0;r<e.length;r++){var v=e[r];t.setLineWidth(n.width),t.setStrokeStyle(v.color),t.setLineCap("round"),t.beginPath(),t.arc(i.x,i.y,o,n.startAngle*Math.PI,v._proportion_*Math.PI,!1),t.stroke()}return ee(l,a,t),{center:i,radius:o,series:e}}function Ae(e,l,a,t,u){var n=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,i=a.extra.gauge||{};i.startAngle=i.startAngle?i.startAngle:.75,void 0==i.oldAngle&&(i.oldAngle=i.startAngle),void 0==i.oldData&&(i.oldData=0),i.endAngle=i.endAngle?i.endAngle:.25,e=z(e,i.startAngle,i.endAngle);var o={x:a.width/2,y:a.height/2},r=Math.min(o.x,o.y);"number"===typeof i.width&&i.width>0?i.width=i.width:i.width=15*a.pixelRatio,r-=t.padding+i.width/2;var v=r-i.width;u.setLineWidth(i.width),u.setLineCap("butt");for(var b=0;b<e.length;b++){var s=e[b];u.beginPath(),u.setStrokeStyle(s.color),u.arc(o.x,o.y,r,s._startAngle_*Math.PI,s._endAngle_*Math.PI,!1),u.stroke()}u.save();var c=i.startAngle-i.endAngle+1;i.splitLine.fixRadius=i.splitLine.fixRadius?i.splitLine.fixRadius:0,i.splitLine.splitNumber=i.splitLine.splitNumber?i.splitLine.splitNumber:10,i.splitLine.width=i.splitLine.width?i.splitLine.width:15*a.pixelRatio,i.splitLine.color=i.splitLine.color?i.splitLine.color:"#FFFFFF",i.splitLine.childNumber=i.splitLine.childNumber?i.splitLine.childNumber:5,i.splitLine.childWidth=i.splitLine.childWidth?i.splitLine.childWidth:5*a.pixelRatio;var h=c/i.splitLine.splitNumber,f=c/i.splitLine.splitNumber/i.splitLine.childNumber,p=-r-.5*i.width-i.splitLine.fixRadius,d=-r-.5*i.width-i.splitLine.fixRadius+i.splitLine.width,g=-r-.5*i.width-i.splitLine.fixRadius+i.splitLine.childWidth;u.translate(o.x,o.y),u.rotate((i.startAngle-1)*Math.PI);for(var y=0;y<i.splitLine.splitNumber+1;y++)u.beginPath(),u.setStrokeStyle(i.splitLine.color),u.setLineWidth(2*a.pixelRatio),u.moveTo(p,0),u.lineTo(d,0),u.stroke(),u.rotate(h*Math.PI);u.restore(),u.save(),u.translate(o.x,o.y),u.rotate((i.startAngle-1)*Math.PI);for(var x=0;x<i.splitLine.splitNumber*i.splitLine.childNumber+1;x++)u.beginPath(),u.setStrokeStyle(i.splitLine.color),u.setLineWidth(1*a.pixelRatio),u.moveTo(p,0),u.lineTo(g,0),u.stroke(),u.rotate(f*Math.PI);u.restore(),i.pointer.width=i.pointer.width?i.pointer.width:15*a.pixelRatio,void 0==i.pointer.color||"auto"==i.pointer.color?i.pointer.color:(i.pointer.color,i.pointer.color),l=H(l,e,i,n);for(var _=0;_<l.length;_++){var m=l[_];u.save(),u.translate(o.x,o.y),u.rotate((m._proportion_-1)*Math.PI),u.beginPath(),u.setFillStyle(m.color),u.moveTo(i.pointer.width,0),u.lineTo(0,-i.pointer.width/2),u.lineTo(-v,0),u.lineTo(0,i.pointer.width/2),u.lineTo(i.pointer.width,0),u.closePath(),u.fill(),u.beginPath(),u.setFillStyle("#FFFFFF"),u.arc(0,0,i.pointer.width/6,0,2*Math.PI,!1),u.fill(),u.restore()}return!1!==a.dataLabel&&ae(i,r,o,a,t,u),ee(a,t,u),1===n&&"gauge"===a.type&&(i.oldAngle=l[0]._proportion_,i.oldData=l[0].data),{center:o,radius:r,innerRadius:v,categories:e,totalAngle:c}}function Pe(e,l,a,t){var u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,n=l.extra.radar||{},i=A(l.categories.length),o={x:l.width/2,y:(l.height-a.legendHeight)/2},r=Math.min(o.x-(w(l.categories)+a.radarLabelTextMargin),o.y-a.radarLabelTextMargin);r-=a.padding,t.beginPath(),t.setLineWidth(1*l.pixelRatio),t.setStrokeStyle(n.gridColor||"#cccccc"),i.forEach(function(e){var l=c(r*Math.cos(e),r*Math.sin(e),o);t.moveTo(o.x,o.y),t.lineTo(l.x,l.y)}),t.stroke(),t.closePath();for(var v=function(e){var u={};t.beginPath(),t.setLineWidth(1*l.pixelRatio),t.setStrokeStyle(n.gridColor||"#cccccc"),i.forEach(function(l,n){var i=c(r/a.radarGridCount*e*Math.cos(l),r/a.radarGridCount*e*Math.sin(l),o);0===n?(u=i,t.moveTo(i.x,i.y)):t.lineTo(i.x,i.y)}),t.lineTo(u.x,u.y),t.stroke(),t.closePath()},b=1;b<=a.radarGridCount;b++)v(b);var s=R(i,o,r,e,l,u);return s.forEach(function(e,u){if(t.beginPath(),t.setFillStyle(e.color),t.setGlobalAlpha(.3),e.data.forEach(function(e,l){0===l?t.moveTo(e.position.x,e.position.y):t.lineTo(e.position.x,e.position.y)}),t.closePath(),t.fill(),t.setGlobalAlpha(1),!1!==l.dataPointShape){var n=a.dataPointShape[u%a.dataPointShape.length],i=e.data.map(function(e){return e.position});Q(i,e.color,n,t,l)}}),te(i,r,o,l,a,t),{center:o,radius:r,angleList:i}}function Se(e,l){l.draw()}var Te={easeIn:function(e){return Math.pow(e,3)},easeOut:function(e){return Math.pow(e-1,3)+1},easeInOut:function(e){return(e/=.5)<1?.5*Math.pow(e,3):.5*(Math.pow(e-2,3)+2)},linear:function(e){return e}};function $e(e){this.isStop=!1,e.duration="undefined"===typeof e.duration?1e3:e.duration,e.timing=e.timing||"linear";var l=17,a=function(){return"undefined"!==typeof requestAnimationFrame?requestAnimationFrame:"undefined"!==typeof setTimeout?function(e,l){setTimeout(function(){var l=+new Date;e(l)},l)}:function(e){e(null)}},t=a(),u=null,n=function(a){if(null===a||!0===this.isStop)return e.onProcess&&e.onProcess(1),void(e.onAnimationFinish&&e.onAnimationFinish());if(null===u&&(u=a),a-u<e.duration){var i=(a-u)/e.duration,o=Te[e.timing];i=o(i),e.onProcess&&e.onProcess(i),t(n,l)}else e.onProcess&&e.onProcess(1),e.onAnimationFinish&&e.onAnimationFinish()};n=n.bind(this),t(n,l)}function Oe(e,l,a,u){var n=this,i=l.series,r=l.categories;i=f(i,a),i=p(i,l);var v=null;if("candle"==e){var b=t({},l.extra.candle.average);b.show&&(v=o(b.day,b.name,b.color,i[0].data),l.seriesMA=v)}var s=E(i,l,a),c=s.legendHeight;a.legendHeight=c;var h=Y(i,l,a),d=h.yAxisWidth;if(a.yAxisWidth=d,r&&r.length){var g=F(r,l,a),y=g.xAxisHeight,x=g.angle;a.xAxisHeight=y,a._xAxisTextAngle_=x}"pie"!==e&&"ring"!==e&&"rose"!==e||(a._pieTextMaxLength_=!1===l.dataLabel?0:N(i));var _=l.animation?l.duration:0;switch(this.animationInstance&&this.animationInstance.stop(),e){case"line":this.animationInstance=new $e({timing:"easeIn",duration:_,onProcess:function(e){u.clearRect(0,0,l.width,l.height),l.rotate&&Z(u,l),ge(r,l,a,u),de(r,l,a,u);var t=he(i,l,a,u,e),o=t.xAxisPoints,v=t.calPoints,b=t.eachSpacing;n.chartData.xAxisPoints=o,n.chartData.calPoints=v,n.chartData.eachSpacing=b,xe(l.series,l,a,u),ye(i,l,a,u),pe(l,a,u,e,b,o),Se(l,u)},onAnimationFinish:function(){n.event.trigger("renderComplete")}});break;case"mix":this.animationInstance=new $e({timing:"easeIn",duration:_,onProcess:function(e){u.clearRect(0,0,l.width,l.height),l.rotate&&Z(u,l),ge(r,l,a,u),de(r,l,a,u);var t=fe(i,l,a,u,e),o=t.xAxisPoints,v=t.calPoints,b=t.eachSpacing;n.chartData.xAxisPoints=o,n.chartData.calPoints=v,n.chartData.eachSpacing=b,xe(l.series,l,a,u),ye(i,l,a,u),pe(l,a,u,e,b,o),Se(l,u)},onAnimationFinish:function(){n.event.trigger("renderComplete")}});break;case"column":this.animationInstance=new $e({timing:"easeIn",duration:_,onProcess:function(e){u.clearRect(0,0,l.width,l.height),l.rotate&&Z(u,l),ge(r,l,a,u),de(r,l,a,u);var t=be(i,l,a,u,e),o=t.xAxisPoints,v=t.calPoints,b=t.eachSpacing;n.chartData.xAxisPoints=o,n.chartData.calPoints=v,n.chartData.eachSpacing=b,xe(l.series,l,a,u),ye(i,l,a,u),pe(l,a,u,e,b,o),Se(l,u)},onAnimationFinish:function(){n.event.trigger("renderComplete")}});break;case"area":this.animationInstance=new $e({timing:"easeIn",duration:_,onProcess:function(e){u.clearRect(0,0,l.width,l.height),l.rotate&&Z(u,l),ge(r,l,a,u),de(r,l,a,u);var t=ce(i,l,a,u,e),o=t.xAxisPoints,v=t.calPoints,b=t.eachSpacing;n.chartData.xAxisPoints=o,n.chartData.calPoints=v,n.chartData.eachSpacing=b,xe(l.series,l,a,u),ye(i,l,a,u),pe(l,a,u,e,b,o),Se(l,u)},onAnimationFinish:function(){n.event.trigger("renderComplete")}});break;case"ring":case"pie":this.animationInstance=new $e({timing:"easeInOut",duration:_,onProcess:function(e){u.clearRect(0,0,l.width,l.height),l.rotate&&Z(u,l),n.chartData.pieData=_e(i,l,a,u,e),xe(l.series,l,a,u),pe(l,a,u,e),Se(l,u)},onAnimationFinish:function(){n.event.trigger("renderComplete")}});break;case"rose":this.animationInstance=new $e({timing:"easeInOut",duration:_,onProcess:function(e){u.clearRect(0,0,l.width,l.height),l.rotate&&Z(u,l),n.chartData.pieData=me(i,l,a,u,e),xe(l.series,l,a,u),pe(l,a,u,e),Se(l,u)},onAnimationFinish:function(){n.event.trigger("renderComplete")}});break;case"radar":this.animationInstance=new $e({timing:"easeInOut",duration:_,onProcess:function(e){u.clearRect(0,0,l.width,l.height),l.rotate&&Z(u,l),n.chartData.radarData=Pe(i,l,a,u,e),xe(l.series,l,a,u),pe(l,a,u,e),Se(l,u)},onAnimationFinish:function(){n.event.trigger("renderComplete")}});break;case"arcbar":this.animationInstance=new $e({timing:"easeInOut",duration:_,onProcess:function(e){u.clearRect(0,0,l.width,l.height),l.rotate&&Z(u,l),n.chartData.arcbarData=we(i,l,a,u,e),Se(l,u)},onAnimationFinish:function(){n.event.trigger("renderComplete")}});break;case"gauge":this.animationInstance=new $e({timing:"easeInOut",duration:_,onProcess:function(e){u.clearRect(0,0,l.width,l.height),l.rotate&&Z(u,l),n.chartData.gaugeData=Ae(r,i,l,a,u,e),Se(l,u)},onAnimationFinish:function(){n.event.trigger("renderComplete")}});break;case"candle":this.animationInstance=new $e({timing:"easeIn",duration:_,onProcess:function(e){u.clearRect(0,0,l.width,l.height),l.rotate&&Z(u,l),ge(r,l,a,u),de(r,l,a,u);var t=se(i,v,l,a,u,e),o=t.xAxisPoints,b=t.calPoints,s=t.eachSpacing;n.chartData.xAxisPoints=o,n.chartData.calPoints=b,n.chartData.eachSpacing=s,xe(v||l.series,l,a,u),ye(i,l,a,u),pe(l,a,u,e,s,o),Se(l,u)},onAnimationFinish:function(){n.event.trigger("renderComplete")}});break}}function ke(){this.events={}}$e.prototype.stop=function(){this.isStop=!0},ke.prototype.addEventListener=function(e,l){this.events[e]=this.events[e]||[],this.events[e].push(l)},ke.prototype.trigger=function(){for(var e=arguments.length,l=Array(e),a=0;a<e;a++)l[a]=arguments[a];var t=l[0],u=l.slice(1);this.events[t]&&this.events[t].forEach(function(e){try{e.apply(null,u)}catch(l){console.error(l," at components\\u-charts\\u-charts.js:3613")}})};var Me=function(e){e.pixelRatio=e.pixelRatio?e.pixelRatio:1,e.fontSize=e.fontSize?e.fontSize*e.pixelRatio:13*e.pixelRatio,e.title=t({},e.title),e.subtitle=t({},e.subtitle),e.yAxis=t({},{gridType:"solid",dashLength:4*e.pixelRatio},e.yAxis),e.xAxis=t({},{rotateLabel:!1,type:"calibration",gridType:"solid",dashLength:4*e.pixelRatio,scrollAlign:"left"},e.xAxis),e.extra=t({},e.extra),e.rotate=!!e.rotate,e.animation=!!e.animation;var u=t({},a);if(u.yAxisTitleWidth=!0!==e.yAxis.disabled&&e.yAxis.title?u.yAxisTitleWidth:0,"pie"!=e.type&&"ring"!=e.type||(u.pieChartLinePadding=!1===e.dataLabel?0:e.extra.pie.labelWidth*e.pixelRatio||u.pieChartLinePadding*e.pixelRatio),"rose"==e.type&&(u.pieChartLinePadding=!1===e.dataLabel?0:e.extra.rose.labelWidth*e.pixelRatio||u.pieChartLinePadding*e.pixelRatio),u.pieChartTextPadding=!1===e.dataLabel?0:u.pieChartTextPadding*e.pixelRatio,u.yAxisSplit=e.yAxis.splitNumber?e.yAxis.splitNumber:a.yAxisSplit,u.rotate=e.rotate,e.rotate){var n=e.width,i=e.height;e.width=i,e.height=n}if(u.yAxisWidth=a.yAxisWidth*e.pixelRatio,u.xAxisHeight=a.xAxisHeight*e.pixelRatio,e.enableScroll&&e.xAxis.scrollShow&&(u.xAxisHeight+=6*e.pixelRatio),u.xAxisLineHeight=a.xAxisLineHeight*e.pixelRatio,u.legendHeight=a.legendHeight*e.pixelRatio,u.padding=a.padding*e.pixelRatio,u.fontSize=e.fontSize,u.titleFontSize=a.titleFontSize*e.pixelRatio,u.subtitleFontSize=a.subtitleFontSize*e.pixelRatio,u.toolTipPadding=a.toolTipPadding*e.pixelRatio,u.toolTipLineHeight=a.toolTipLineHeight*e.pixelRatio,u.columePadding=a.columePadding*e.pixelRatio,this.opts=e,this.config=u,e.$this=e.$this?e.$this:this,this.context=l.createCanvasContext(e.canvasId,e.$this),this.chartData={},this.event=new ke,this.scrollOption={currentOffset:0,startTouchX:0,distance:0,lastMoveTime:0},e.enableScroll&&"right"==e.xAxis.scrollAlign){var o=Y(e.series,e,u),r=o.yAxisWidth;u.yAxisWidth=r;var v=0,b=U(e.categories,e,u),s=b.xAxisPoints,c=b.startX,h=b.endX,f=b.eachSpacing,p=f*(s.length-1),d=h-c;v=d-p,this.scrollOption={currentOffset:v,startTouchX:v,distance:0,lastMoveTime:0},e._scrollDistance_=v}Oe.call(this,e.type,e,u,this.context)};Me.prototype.updateData=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.opts=t({},this.opts,e);var l=e.scrollPosition||"current";switch(l){case"current":this.opts._scrollDistance_=this.scrollOption.currentOffset;break;case"left":this.opts._scrollDistance_=0,this.scrollOption={currentOffset:0,startTouchX:0,distance:0,lastMoveTime:0};break;case"right":var a=Y(this.opts.series,this.opts,this.config),u=a.yAxisWidth;this.config.yAxisWidth=u;var n=0,i=U(this.opts.categories,this.opts,this.config),o=i.xAxisPoints,r=i.startX,v=i.endX,b=i.eachSpacing,s=b*(o.length-1),c=v-r;n=c-s,this.scrollOption={currentOffset:n,startTouchX:n,distance:0,lastMoveTime:0},this.opts._scrollDistance_=n;break}Oe.call(this,this.opts.type,this.opts,this.config,this.context)},Me.prototype.zoom=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.opts.xAxis.itemCount;if(!0===this.opts.enableScroll){var l=Math.round(Math.abs(this.scrollOption.currentOffset)/this.chartData.eachSpacing)+Math.round(this.opts.xAxis.itemCount/2);this.opts.animation=!1,this.opts.xAxis.itemCount=e.itemCount;var a=Y(this.opts.series,this.opts,this.config),t=a.yAxisWidth;this.config.yAxisWidth=t;var u=0,n=U(this.opts.categories,this.opts,this.config),i=n.xAxisPoints,o=n.startX,r=n.endX,v=n.eachSpacing,b=v*l,s=r-o,c=s-v*(i.length-1);u=s/2-b,u>0&&(u=0),u<c&&(u=c),this.scrollOption={currentOffset:u,startTouchX:u,distance:0,lastMoveTime:0},this.opts._scrollDistance_=u,Oe.call(this,this.opts.type,this.opts,this.config,this.context)}else console.log("请启用滚动条后使用！"," at components\\u-charts\\u-charts.js:3767")},Me.prototype.stopAnimation=function(){this.animationInstance&&this.animationInstance.stop()},Me.prototype.addEventListener=function(e,l){this.event.addEventListener(e,l)},Me.prototype.getCurrentDataIndex=function(e){var l=null;if(l=e.changedTouches?e.changedTouches[0]:e.mp.changedTouches[0],l){var a=_(l,this.opts,e);return"pie"===this.opts.type||"ring"===this.opts.type||"rose"===this.opts.type?M({x:a.x,y:a.y},this.chartData.pieData):"radar"===this.opts.type?k({x:a.x,y:a.y},this.chartData.radarData,this.opts.categories.length):$({x:a.x,y:a.y},this.chartData.xAxisPoints,this.opts,this.config,Math.abs(this.scrollOption.currentOffset))}return-1},Me.prototype.showToolTip=function(e){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=null;if(a=e.changedTouches?e.changedTouches[0]:e.mp.changedTouches[0],a){var u=_(a,this.opts,e);if("line"===this.opts.type||"area"===this.opts.type||"column"===this.opts.type){var n=this.getCurrentDataIndex(e),i=this.scrollOption.currentOffset,o=t({},this.opts,{_scrollDistance_:i,animation:!1});if(n>-1){var r=m(this.opts.series,n);if(0!==r.length){var v=P(r,this.chartData.calPoints,n,this.opts.categories,l),b=v.textList,s=v.offset;s.y=u.y,o.tooltip={textList:b,offset:s,option:l,index:n}}}Oe.call(this,o.type,o,this.config,this.context)}if("mix"===this.opts.type){n=this.getCurrentDataIndex(e),i=this.scrollOption.currentOffset,o=t({},this.opts,{_scrollDistance_:i,animation:!1});if(n>-1){r=m(this.opts.series,n);if(0!==r.length){var c=S(r,this.chartData.calPoints,n,this.opts.categories,l);b=c.textList,s=c.offset;s.y=u.y,o.tooltip={textList:b,offset:s,option:l,index:n}}}Oe.call(this,o.type,o,this.config,this.context)}if("candle"===this.opts.type){n=this.getCurrentDataIndex(e),i=this.scrollOption.currentOffset,o=t({},this.opts,{_scrollDistance_:i,animation:!1});if(n>-1){r=m(this.opts.series,n);if(0!==r.length){v=T(this.opts.series[0].data,r,this.chartData.calPoints,n,this.opts.categories,this.opts.extra.candle,l),b=v.textList,s=v.offset;s.y=u.y,o.tooltip={textList:b,offset:s,option:l,index:n}}}Oe.call(this,o.type,o,this.config,this.context)}if("pie"===this.opts.type||"ring"===this.opts.type||"rose"===this.opts.type){n=this.getCurrentDataIndex(e),i=this.scrollOption.currentOffset,o=t({},this.opts,{_scrollDistance_:i,animation:!1});if(n>-1){r=this.opts.series[n],b=[{text:l.format?l.format(r):r.name+": "+r.data,color:r.color}],s={x:u.x,y:u.y};o.tooltip={textList:b,offset:s,option:l,index:n}}Oe.call(this,o.type,o,this.config,this.context)}if("radar"===this.opts.type){n=this.getCurrentDataIndex(e),i=this.scrollOption.currentOffset,o=t({},this.opts,{_scrollDistance_:i,animation:!1});if(n>-1){r=m(this.opts.series,n);if(0!==r.length){b=r.map(function(e){return{text:l.format?l.format(e):e.name+": "+e.data,color:e.color}}),s={x:u.x,y:u.y};o.tooltip={textList:b,offset:s,option:l,index:n}}}Oe.call(this,o.type,o,this.config,this.context)}}else console.log("touchError"," at components\\u-charts\\u-charts.js:3852")},Me.prototype.translate=function(e){this.scrollOption={currentOffset:e,startTouchX:e,distance:0,lastMoveTime:0};var l=t({},this.opts,{_scrollDistance_:e,animation:!1});Oe.call(this,this.opts.type,l,this.config,this.context)},Me.prototype.scrollStart=function(e){var l=null;l=e.changedTouches?e.changedTouches[0]:e.mp.changedTouches[0];var a=_(l,this.opts,e);l&&!0===this.opts.enableScroll&&(this.scrollOption.startTouchX=a.x)},Me.prototype.scroll=function(e){0===this.scrollOption.lastMoveTime&&(this.scrollOption.lastMoveTime=Date.now());var l=this.opts.extra.touchMoveLimit||20,a=Date.now(),u=a-this.scrollOption.lastMoveTime;if(!(u<Math.floor(1e3/l))){this.scrollOption.lastMoveTime=a;var n=null;n=e.changedTouches?e.changedTouches[0]:e.mp.changedTouches[0];var i=_(n,this.opts,e);if(n&&!0===this.opts.enableScroll){var o;o=i.x-this.scrollOption.startTouchX;var v=this.scrollOption.currentOffset,b=r(v+o,this.chartData,this.config,this.opts);this.scrollOption.distance=o=b-v;var s=t({},this.opts,{_scrollDistance_:v+o,animation:!1});return Oe.call(this,s.type,s,this.config,this.context),v+o}}},Me.prototype.scrollEnd=function(e){if(!0===this.opts.enableScroll){var l=this.scrollOption,a=l.currentOffset,t=l.distance;this.scrollOption.currentOffset=a+t,this.scrollOption.distance=0}},"object"===typeof e.exports&&(e.exports=Me)}).call(this,a("6e42")["default"])},e99e:function(e,l,a){"use strict";(function(e){a("b52b");t(a("66fd"));var l=t(a("183d"));function t(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},eb72:function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=[{label:"北京市",value:"11"},{label:"天津市",value:"12"},{label:"河北省",value:"13"},{label:"山西省",value:"14"},{label:"内蒙古自治区",value:"15"},{label:"辽宁省",value:"21"},{label:"吉林省",value:"22"},{label:"黑龙江省",value:"23"},{label:"上海市",value:"31"},{label:"江苏省",value:"32"},{label:"浙江省",value:"33"},{label:"安徽省",value:"34"},{label:"福建省",value:"35"},{label:"江西省",value:"36"},{label:"山东省",value:"37"},{label:"河南省",value:"41"},{label:"湖北省",value:"42"},{label:"湖南省",value:"43"},{label:"广东省",value:"44"},{label:"广西壮族自治区",value:"45"},{label:"海南省",value:"46"},{label:"重庆市",value:"50"},{label:"四川省",value:"51"},{label:"贵州省",value:"52"},{label:"云南省",value:"53"},{label:"西藏自治区",value:"54"},{label:"陕西省",value:"61"},{label:"甘肃省",value:"62"},{label:"青海省",value:"63"},{label:"宁夏回族自治区",value:"64"},{label:"新疆维吾尔自治区",value:"65"},{label:"台湾",value:"66"},{label:"香港",value:"67"},{label:"澳门",value:"68"}],u=t;l.default=u},ff00:function(e,l,a){"use strict";(function(e){a("b52b");t(a("66fd"));var l=t(a("2c26"));function t(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'components/Popups';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/Popups.js';

define('components/Popups.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/Popups"], {
  "1ead": function ead(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("38d0"),
        r = e("d0bb");

    for (var i in r) {
      "default" !== i && function (t) {
        e.d(n, t, function () {
          return r[t];
        });
      }(i);
    }

    e("7cfb");
    var o = e("2877"),
        c = Object(o["a"])(r["default"], u["a"], u["b"], !1, null, "6b8ef6e7", null);
    n["default"] = c.exports;
  },
  "38d0": function d0(t, n, e) {
    "use strict";

    var u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        r = [];

    e.d(n, "a", function () {
      return u;
    }), e.d(n, "b", function () {
      return r;
    });
  },
  "7cfb": function cfb(t, n, e) {
    "use strict";

    var u = e("92c9"),
        r = e.n(u);
    r.a;
  },
  "92c9": function c9(t, n, e) {},
  be75: function be75(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var u = {
      data: function data() {
        return {
          isShow: !1
        };
      },
      props: {
        title: {
          type: String,
          required: !0
        }
      },
      methods: {
        show: function show() {
          this.isShow = !0;
        },
        hide: function hide() {
          this.isShow = !1;
        }
      }
    };
    n.default = u;
  },
  d0bb: function d0bb(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("be75"),
        r = e.n(u);

    for (var i in u) {
      "default" !== i && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(i);
    }

    n["default"] = r.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/Popups-create-component', {
  'components/Popups-create-component': function componentsPopupsCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("1ead"));
  }
}, [['components/Popups-create-component']]]);
});
require('components/Popups.js');
__wxRoute = 'components/w-picker/w-picker';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/w-picker/w-picker.js';

define('components/w-picker/w-picker.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/w-picker/w-picker"], {
  "21de": function de(a, t, e) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var r = e("cb49"),
        c = i(e("eb72")),
        l = i(e("9fd2")),
        n = i(e("2863"));

    function i(a) {
      return a && a.__esModule ? a : {
        default: a
      };
    }

    var s = {
      data: function data() {
        return {
          result: [],
          data: {},
          checkArr: [],
          checkValue: [],
          pickVal: [],
          showPicker: !1,
          resultStr: "",
          date_type: 1,
          is_leap: 0
        };
      },
      computed: {},
      props: {
        mode: {
          type: String,
          default: function _default() {
            return "date";
          }
        },
        themeColor: {
          type: String,
          default: function _default() {
            return "#f00";
          }
        },
        startYear: {
          type: String,
          default: function _default() {
            return "1970";
          }
        },
        endYear: {
          type: String,
          default: function _default() {
            return new Date().getFullYear() + "";
          }
        },
        defaultVal: {
          type: Array,
          default: function _default() {
            return [0, 0, 0, 0, 0, 0];
          }
        },
        step: {
          type: null,
          default: 1
        }
      },
      watch: {
        mode: function mode() {
          this.initData();
        }
      },
      methods: {
        maskTap: function maskTap() {
          this.showPicker = !1;
        },
        setDateType: function setDateType(a) {
          this.date_type = a, 1 == a && (this.is_leap = 0);
        },
        show: function show() {
          this.showPicker = !0;
        },
        hide: function hide() {
          this.showPicker = !1;
        },
        checkboxChange: function checkboxChange(a) {
          this.is_leap = a.detail.value.length;
        },
        pickerCancel: function pickerCancel() {
          this.$emit("cancel", {
            checkArr: this.checkArr,
            defaultVal: this.pickVal
          }), this.showPicker = !1;
        },
        pickerConfirm: function pickerConfirm(a) {
          "date" == this.mode || "dateTime" == this.mode || "yearMonth" == this.mode ? this.$emit("confirm", {
            checkArr: this.checkArr,
            defaultVal: this.pickVal,
            date_type: this.date_type,
            is_leap: this.is_leap
          }) : this.$emit("confirm", {
            checkArr: this.checkArr,
            defaultVal: this.pickVal
          }), this.showPicker = !1;
        },
        bindChange: function bindChange(a) {
          var t,
              e,
              c,
              i = this,
              s = a.detail.value,
              u = "",
              d = "",
              o = "",
              f = "",
              h = "",
              k = "",
              p = i.checkArr,
              y = [],
              m = i.mode;

          switch (m) {
            case "date":
              u = i.data.years[s[0]], d = i.data.months[s[1]], o = i.data.days[s[2]], u != p[0] && (y = (0, r.initDays)(u, d), i.data.days = y), d != p[1] && (y = (0, r.initDays)(u, d), i.data.days = y), i.checkArr = [u, d, o], i.resultStr = "".concat(u + "-" + d + "-" + o);
              break;

            case "yearMonth":
              u = i.data.years[s[0]], d = i.data.months[s[1]], i.checkArr = [u, d], i.resultStr = "".concat(u + "-" + d);
              break;

            case "dateTime":
              u = i.data.years[s[0]], d = i.data.months[s[1]], o = i.data.days[s[2]], f = i.data.hours[s[3]], h = i.data.minutes[s[4]], k = i.data.seconds[s[5]], u != p[0] && (y = (0, r.initDays)(u, d), i.data.days = y), d != p[1] && (y = (0, r.initDays)(u, d), i.data.days = y), i.checkArr = [u, d, o, f, h, k], i.resultStr = "".concat(u + "-" + d + "-" + o + " " + f + ":" + h + ":" + k);
              break;

            case "time":
              f = i.data.hours[s[0]], h = i.data.minutes[s[1]], k = i.data.seconds[s[2]], i.checkArr = [f, h, k], i.resultStr = "".concat(f + ":" + h + ":" + k);
              break;

            case "region":
              t = i.data.provinces[s[0]].label, e = i.data.citys[s[1]].label, c = i.data.areas[s[2]].label, t != p[0] && (i.data.citys = l.default[s[0]], i.data.areas = n.default[s[0]][0], s[1] = 0, s[2] = 0, e = i.data.citys[s[1]].label, c = i.data.areas[s[2]].label), e != p[1] && (i.data.areas = n.default[s[0]][s[1]], s[2] = 0, c = i.data.areas[s[2]].label), i.checkArr = [t, e, c], i.checkValue = [i.data.provinces[s[0]].value, i.data.provinces[s[0]].value, i.data.areas[s[2]].value], i.resultStr = t + e + c;
              break;
          }

          i.$nextTick(function () {
            i.pickVal = s;
          });
        },
        initData: function initData() {
          var a,
              t,
              e,
              i,
              s,
              u,
              d,
              o,
              f,
              h = this,
              k = {},
              p = h.mode;

          switch (k = "region" != p ? (0, r.initPicker)(h.startYear, h.endYear, h.mode, h.step) : {
            provinces: c.default,
            citys: l.default[h.defaultVal[0]],
            areas: n.default[h.defaultVal[0]][h.defaultVal[1]]
          }, h.data = k, p) {
            case "date":
              a = k.years[h.defaultVal[0]], t = k.months[h.defaultVal[1]], e = k.days[h.defaultVal[2]], h.checkArr = [a, t, e], h.resultStr = "".concat(a + "-" + t + "-" + e);
              break;

            case "yearMonth":
              a = k.years[h.defaultVal[0]], t = k.months[h.defaultVal[1]], h.checkArr = [a, t], h.resultStr = "".concat(a + "-" + t);
              break;

            case "dateTime":
              a = k.years[h.defaultVal[0]], t = k.months[h.defaultVal[1]], e = k.days[h.defaultVal[2]], i = k.hours[h.defaultVal[3]], s = k.minutes[h.defaultVal[4]], u = k.seconds[h.defaultVal[5]], h.resultStr = "".concat(a + "-" + t + "-" + e + " " + i + ":" + s + ":" + u), h.checkArr = [a, t, e, i, s];
              break;

            case "time":
              i = k.hours[h.defaultVal[0]], s = k.minutes[h.defaultVal[1]], u = k.seconds[h.defaultVal[2]], h.checkArr = [i, s, u], h.resultStr = "".concat(i + ":" + s + ":" + u);
              break;

            case "region":
              d = k.provinces[h.defaultVal[0]], o = k.citys[h.defaultVal[1]], f = k.areas[h.defaultVal[2]], h.checkArr = [d.label, o.label, f.label], h.checkValue = [d.value, o.value, f.value], h.resultStr = d.label + o.label + f.label;
              break;
          }

          h.$nextTick(function () {
            h.pickVal = h.defaultVal;
          });
        }
      },
      mounted: function mounted() {
        this.initData();
      }
    };
    t.default = s;
  },
  "5a09": function a09(a, t, e) {
    "use strict";

    e.r(t);
    var r = e("6862"),
        c = e("64a3");

    for (var l in c) {
      "default" !== l && function (a) {
        e.d(t, a, function () {
          return c[a];
        });
      }(l);
    }

    e("cf0f");
    var n = e("2877"),
        i = Object(n["a"])(c["default"], r["a"], r["b"], !1, null, null, null);
    t["default"] = i.exports;
  },
  "64a3": function a3(a, t, e) {
    "use strict";

    e.r(t);
    var r = e("21de"),
        c = e.n(r);

    for (var l in r) {
      "default" !== l && function (a) {
        e.d(t, a, function () {
          return r[a];
        });
      }(l);
    }

    t["default"] = c.a;
  },
  6862: function _(a, t, e) {
    "use strict";

    var r = function r() {
      var a = this,
          t = a.$createElement;
      a._self._c;
    },
        c = [];

    e.d(t, "a", function () {
      return r;
    }), e.d(t, "b", function () {
      return c;
    });
  },
  8650: function _(a, t, e) {},
  cf0f: function cf0f(a, t, e) {
    "use strict";

    var r = e("8650"),
        c = e.n(r);
    c.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/w-picker/w-picker-create-component', {
  'components/w-picker/w-picker-create-component': function componentsWPickerWPickerCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("5a09"));
  }
}, [['components/w-picker/w-picker-create-component']]]);
});
require('components/w-picker/w-picker.js');
__wxRoute = 'components/Youshi';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/Youshi.js';

define('components/Youshi.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/Youshi"], {
  "6f6a": function f6a(n, t, e) {},
  "7e85": function e85(n, t, e) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var u = {
      data: function data() {
        return {};
      }
    };
    t.default = u;
  },
  a05d: function a05d(n, t, e) {
    "use strict";

    var u = function u() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        a = [];

    e.d(t, "a", function () {
      return u;
    }), e.d(t, "b", function () {
      return a;
    });
  },
  bd55: function bd55(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("a05d"),
        a = e("d6fd");

    for (var f in a) {
      "default" !== f && function (n) {
        e.d(t, n, function () {
          return a[n];
        });
      }(f);
    }

    e("f106");
    var r = e("2877"),
        o = Object(r["a"])(a["default"], u["a"], u["b"], !1, null, "0904f18e", null);
    t["default"] = o.exports;
  },
  d6fd: function d6fd(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("7e85"),
        a = e.n(u);

    for (var f in u) {
      "default" !== f && function (n) {
        e.d(t, n, function () {
          return u[n];
        });
      }(f);
    }

    t["default"] = a.a;
  },
  f106: function f106(n, t, e) {
    "use strict";

    var u = e("6f6a"),
        a = e.n(u);
    a.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/Youshi-create-component', {
  'components/Youshi-create-component': function componentsYoushiCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("bd55"));
  }
}, [['components/Youshi-create-component']]]);
});
require('components/Youshi.js');
__wxRoute = 'pages/middle/CanvasLine';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/middle/CanvasLine.js';

define('pages/middle/CanvasLine.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/middle/CanvasLine"], {
  "079a": function a(e, t, i) {
    "use strict";

    (function (e) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var a,
          n = r(i("dfac"));

      function r(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }

      var o = null,
          u = {
        data: function data() {
          return {
            cWidth: "",
            cHeight: "",
            pixelRatio: 1
          };
        },
        props: {
          male: String,
          female: String,
          year: String,
          id: String
        },
        created: function created() {
          a = this, this.cWidth = e.upx2px(650), this.cHeight = e.upx2px(500), this.getServerData();
        },
        methods: {
          getServerData: function getServerData() {
            var e = {
              categories: JSON.parse(this.year),
              series: [{
                name: "男性",
                data: JSON.parse(this.male),
                color: "#1890ff",
                type: "line"
              }, {
                name: "女性",
                data: JSON.parse(this.female),
                color: "#e50053",
                type: "line"
              }]
            };
            a.showLineA(this.id, e);
          },
          showLineA: function showLineA(e, t) {
            o = new n.default({
              $this: a,
              canvasId: e,
              type: "line",
              fontSize: 11,
              legend: !0,
              dataLabel: !1,
              dataPointShape: !0,
              background: "#FFFFFF",
              pixelRatio: a.pixelRatio,
              categories: t.categories,
              series: t.series,
              animation: !0,
              xAxis: {
                type: "grid",
                gridColor: "#CCCCCC",
                gridType: "dash",
                dashLength: 8
              },
              yAxis: {
                gridType: "dash",
                gridColor: "#CCCCCC",
                dashLength: 8,
                splitNumber: 5,
                min: 10,
                max: 180,
                format: function format(e) {
                  return e.toFixed(0);
                }
              },
              width: a.cWidth * a.pixelRatio,
              height: a.cHeight * a.pixelRatio,
              extra: {
                line: {
                  type: "straight"
                }
              }
            });
          },
          touchLineA: function touchLineA(e) {
            o.showToolTip(e, {
              format: function format(e, t) {
                return t + " " + e.name + ":" + e.data;
              }
            });
          }
        }
      };
      t.default = u;
    }).call(this, i("6e42")["default"]);
  },
  "72a8": function a8(e, t, i) {
    "use strict";

    i.r(t);
    var a = i("079a"),
        n = i.n(a);

    for (var r in a) {
      "default" !== r && function (e) {
        i.d(t, e, function () {
          return a[e];
        });
      }(r);
    }

    t["default"] = n.a;
  },
  "78f3": function f3(e, t, i) {
    "use strict";

    var a = function a() {
      var e = this,
          t = e.$createElement;
      e._self._c;
    },
        n = [];

    i.d(t, "a", function () {
      return a;
    }), i.d(t, "b", function () {
      return n;
    });
  },
  "79d0": function d0(e, t, i) {
    "use strict";

    i.r(t);
    var a = i("78f3"),
        n = i("72a8");

    for (var r in n) {
      "default" !== r && function (e) {
        i.d(t, e, function () {
          return n[e];
        });
      }(r);
    }

    i("fb55");
    var o = i("2877"),
        u = Object(o["a"])(n["default"], a["a"], a["b"], !1, null, null, null);
    t["default"] = u.exports;
  },
  af2e: function af2e(e, t, i) {},
  fb55: function fb55(e, t, i) {
    "use strict";

    var a = i("af2e"),
        n = i.n(a);
    n.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['pages/middle/CanvasLine-create-component', {
  'pages/middle/CanvasLine-create-component': function pagesMiddleCanvasLineCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("79d0"));
  }
}, [['pages/middle/CanvasLine-create-component']]]);
});
require('pages/middle/CanvasLine.js');
__wxRoute = 'pages/middle/info';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/middle/info.js';

define('pages/middle/info.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/middle/info"], {
  "4e0c": function e0c(n, e, t) {
    "use strict";

    t.r(e);
    var a = t("8cb7"),
        r = t("a779");

    for (var i in r) {
      "default" !== i && function (n) {
        t.d(e, n, function () {
          return r[n];
        });
      }(i);
    }

    t("f56a");
    var u = t("2877"),
        o = Object(u["a"])(r["default"], a["a"], a["b"], !1, null, "58a58d1e", null);
    e["default"] = o.exports;
  },
  "7ce7": function ce7(n, e, t) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var a = r(t("22a1"));

    function r(n) {
      return n && n.__esModule ? n : {
        default: n
      };
    }

    var i = function i() {
      return Promise.all([t.e("common/vendor"), t.e("pages/middle/CanvasLine")]).then(t.bind(null, "79d0"));
    },
        u = function u() {
      return t.e("pages/middle/info2").then(t.bind(null, "1a09"));
    },
        o = {
      components: {
        CanvasLine: i,
        Info2: u
      },
      mixins: [a.default]
    };

    e.default = o;
  },
  "8cb7": function cb7(n, e, t) {
    "use strict";

    var a = function a() {
      var n = this,
          e = n.$createElement,
          t = (n._self._c, n.nameInfo.map(function (e, t) {
        var a = e.pinyin.split("、");
        return {
          $orig: n.__get_orig(e),
          g0: a
        };
      })),
          a = n.objLength(n.data.name_character_bili),
          r = n.data.name_character_bili.map(function (e, t) {
        var a = n.characterToText(t);
        return {
          $orig: n.__get_orig(e),
          m1: a
        };
      });
      n.$mp.data = Object.assign({}, {
        $root: {
          l0: t,
          m0: a,
          l1: r
        }
      });
    },
        r = [];

    t.d(e, "a", function () {
      return a;
    }), t.d(e, "b", function () {
      return r;
    });
  },
  a579: function a579(n, e, t) {},
  a779: function a779(n, e, t) {
    "use strict";

    t.r(e);
    var a = t("7ce7"),
        r = t.n(a);

    for (var i in a) {
      "default" !== i && function (n) {
        t.d(e, n, function () {
          return a[n];
        });
      }(i);
    }

    e["default"] = r.a;
  },
  f56a: function f56a(n, e, t) {
    "use strict";

    var a = t("a579"),
        r = t.n(a);
    r.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['pages/middle/info-create-component', {
  'pages/middle/info-create-component': function pagesMiddleInfoCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("4e0c"));
  }
}, [['pages/middle/info-create-component']]]);
});
require('pages/middle/info.js');
__wxRoute = 'pages/middle/info2';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/middle/info2.js';

define('pages/middle/info2.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/middle/info2"], {
  "1a09": function a09(n, t, e) {
    "use strict";

    e.r(t);
    var a = e("feda"),
        u = e("c3f4");

    for (var f in u) {
      "default" !== f && function (n) {
        e.d(t, n, function () {
          return u[n];
        });
      }(f);
    }

    e("8fc8");
    var r = e("2877"),
        c = Object(r["a"])(u["default"], a["a"], a["b"], !1, null, "5c551258", null);
    t["default"] = c.exports;
  },
  "2f41": function f41(n, t, e) {},
  "8fc8": function fc8(n, t, e) {
    "use strict";

    var a = e("2f41"),
        u = e.n(a);
    u.a;
  },
  c3f4: function c3f4(n, t, e) {
    "use strict";

    e.r(t);
    var a = e("d6aa"),
        u = e.n(a);

    for (var f in a) {
      "default" !== f && function (n) {
        e.d(t, n, function () {
          return a[n];
        });
      }(f);
    }

    t["default"] = u.a;
  },
  d6aa: function d6aa(n, t, e) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var a = u(e("22a1"));

    function u(n) {
      return n && n.__esModule ? n : {
        default: n
      };
    }

    var f = {
      mixins: [a.default]
    };
    t.default = f;
  },
  feda: function feda(n, t, e) {
    "use strict";

    var a = function a() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        u = [];

    e.d(t, "a", function () {
      return a;
    }), e.d(t, "b", function () {
      return u;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['pages/middle/info2-create-component', {
  'pages/middle/info2-create-component': function pagesMiddleInfo2CreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("1a09"));
  }
}, [['pages/middle/info2-create-component']]]);
});
require('pages/middle/info2.js');

__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"183d":function(t,e,i){"use strict";i.r(e);var n=i("9c20"),s=i("b883");for(var a in s)"default"!==a&&function(t){i.d(e,t,function(){return s[t]})}(a);i("2a9a");var o=i("2877"),c=Object(o["a"])(s["default"],n["a"],n["b"],!1,null,"c87dadbc",null);e["default"]=c.exports},"2a9a":function(t,e,i){"use strict";var n=i("676c"),s=i.n(n);s.a},"676c":function(t,e,i){},"9c20":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.isTime=!t.isTime})},s=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return s})},b883:function(t,e,i){"use strict";i.r(e);var n=i("f8d3"),s=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e["default"]=s.a},f8d3:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=function(){return Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(i.bind(null,"5a09"))},s=function(){return i.e("components/Youshi").then(i.bind(null,"bd55"))},a={data:function(){return{isTime:!0,name:"",region:"",birth_time:"",date:"",sex:1,tabIndex:0,city_code:120101,date_type:1,is_leap:0,name_type:0,tabList:[{mode:"dateTime",name:"日期时间选择",value:[50,2,0,1,3]},{mode:"region",name:"省市区",value:[10,0,5]}]}},onLoad:function(){},computed:{mode:function(){return this.tabList[this.tabIndex].mode},defaultVal:function(){return this.tabList[this.tabIndex].value}},methods:{submit:function(){this.$http.post("/v5/ceming/submit",{test_name:this.name,sex:this.sex,birth_date:this.birth_time,date_type:this.date_type,is_leapL:this.is_leap,ztys:1,city_code:this.city_code,birth_address:this.region,is_test_date:this.isTime?1:0}).then(function(e){1==e.code?t.setStorage({key:"ceming_res",data:e.data,success:function(){t.navigateTo({url:"/pages/middle/index"})}}):t.showToast({title:e.msg,icon:"none"})})},onConfirm:function(t){0==this.tabIndex?(this.birth_time=t.checkArr[0]+"/"+t.checkArr[1]+"/"+t.checkArr[2]+" "+t.checkArr[3]+":"+t.checkArr[4],this.date_type=t.date_type,this.is_leap=t.is_leap,this.date=this.birth_time+(1==this.date_type?" 公历 ":" 农历 ")+(1==this.is_leap?"闰月":"")):(this.region=t.checkArr.join("-"),this.city_code=t.defaultVal.join(""))},birthDate:function(){this.tabIndex=0,this.$refs.picker.show()},birthAddress:function(){this.tabIndex=1,this.$refs.picker.show()},setSex:function(t){this.sex=t+1}},components:{wPicker:n,Youshi:s}};e.default=a}).call(this,i("6e42")["default"])}},[["e99e","common/runtime","common/vendor"]]]);
});
require('pages/index/index.js');
__wxRoute = 'pages/middle/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/middle/index.js';

define('pages/middle/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/middle/index"],{"2c26":function(n,e,t){"use strict";t.r(e);var o=t("7af2"),u=t("891e");for(var i in u)"default"!==i&&function(n){t.d(e,n,function(){return u[n]})}(i);t("65b0");var r=t("2877"),c=Object(r["a"])(u["default"],o["a"],o["b"],!1,null,"20f3d2f9",null);e["default"]=c.exports},"65b0":function(n,e,t){"use strict";var o=t("8b38"),u=t.n(o);u.a},"7af2":function(n,e,t){"use strict";var o=function(){var n=this,e=n.$createElement;n._self._c},u=[];t.d(e,"a",function(){return o}),t.d(e,"b",function(){return u})},"891e":function(n,e,t){"use strict";t.r(e);var o=t("e1e1"),u=t.n(o);for(var i in o)"default"!==i&&function(n){t.d(e,n,function(){return o[n]})}(i);e["default"]=u.a},"8b38":function(n,e,t){},e1e1:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=u(t("22a1"));function u(n){return n&&n.__esModule?n:{default:n}}var i=function(){return t.e("pages/middle/info").then(t.bind(null,"4e0c"))},r={components:{Info:i},mixins:[o.default],onPageScroll:function(n){n.scrollTop>600?this.$store.commit("SET_SCROLLPAY",!0):this.$store.commit("SET_SCROLLPAY",!1)},onLoad:function(n){console.log(n," at pages\\middle\\index.vue:72")},methods:{close:function(){this.$store.commit("SET_PAYPOP",!1)}}};e.default=r}},[["ff00","common/runtime","common/vendor"]]]);
});
require('pages/middle/index.js');
__wxRoute = 'pages/query/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/query/index.js';

define('pages/query/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/query/index"],{1044:function(n,e,t){},"2e14":function(n,e,t){"use strict";var u=t("1044"),o=t.n(u);o.a},"35b3":function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=o(t("4f38"));function o(n){return n&&n.__esModule?n:{default:n}}var r=function(){return t.e("components/Popups").then(t.bind(null,"1ead"))},i={components:{Popups:r},data:function(){return{}},methods:{kefu:function(){this.$refs.popups.show()},submit:function(){u.default.post("/newqiming/ceming/order_query/",{froms:"mob",mobile:"18508442669"}).then(function(n){console.log(n," at pages\\query\\index.vue:51")})}}};e.default=i},3612:function(n,e,t){"use strict";t.r(e);var u=t("e237"),o=t("486d");for(var r in o)"default"!==r&&function(n){t.d(e,n,function(){return o[n]})}(r);t("2e14");var i=t("2877"),c=Object(i["a"])(o["default"],u["a"],u["b"],!1,null,"250b2c30",null);e["default"]=c.exports},"486d":function(n,e,t){"use strict";t.r(e);var u=t("35b3"),o=t.n(u);for(var r in u)"default"!==r&&function(n){t.d(e,n,function(){return u[n]})}(r);e["default"]=o.a},e237:function(n,e,t){"use strict";var u=function(){var n=this,e=n.$createElement;n._self._c},o=[];t.d(e,"a",function(){return u}),t.d(e,"b",function(){return o})}},[["1b34","common/runtime","common/vendor"]]]);
});
require('pages/query/index.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

