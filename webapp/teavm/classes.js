"use strict";
var main;(function(){
var $rt_seed=2463534242;function $rt_nextId(){var x=$rt_seed;x^=x<<13;x^=x>>17;x^=x<<5;$rt_seed=x;return x;}function $rt_compare(a,b){return a>b?1:a<b? -1:a===b?0:1;}function $rt_isInstance(obj,cls){return obj!==null&&!!obj.constructor.$meta&&$rt_isAssignable(obj.constructor,cls);}function $rt_isAssignable(from,to){if(from===to){return true;}if(to.$meta.item!==null){return from.$meta.item!==null&&$rt_isAssignable(from.$meta.item,to.$meta.item);}var supertypes=from.$meta.supertypes;for(var i=0;i<supertypes.length;i
=i+1|0){if($rt_isAssignable(supertypes[i],to)){return true;}}return false;}function $rt_createArray(cls,sz){var data=new Array(sz);var arr=new $rt_array(cls,data);if(sz>0){var i=0;do {data[i]=null;i=i+1|0;}while(i<sz);}return arr;}function $rt_wrapArray(cls,data){return new $rt_array(cls,data);}function $rt_createUnfilledArray(cls,sz){return new $rt_array(cls,new Array(sz));}function $rt_createLongArray(sz){var data=new Array(sz);var arr=new $rt_array($rt_longcls(),data);for(var i=0;i<sz;i=i+1|0){data[i]=Long_ZERO;}return arr;}function $rt_createNumericArray(cls,
nativeArray){return new $rt_array(cls,nativeArray);}function $rt_createCharArray(sz){return $rt_createNumericArray($rt_charcls(),new Uint16Array(sz));}function $rt_createByteArray(sz){return $rt_createNumericArray($rt_bytecls(),new Int8Array(sz));}function $rt_createShortArray(sz){return $rt_createNumericArray($rt_shortcls(),new Int16Array(sz));}function $rt_createIntArray(sz){return $rt_createNumericArray($rt_intcls(),new Int32Array(sz));}function $rt_createBooleanArray(sz){return $rt_createNumericArray($rt_booleancls(),
new Int8Array(sz));}function $rt_createFloatArray(sz){return $rt_createNumericArray($rt_floatcls(),new Float32Array(sz));}function $rt_createDoubleArray(sz){return $rt_createNumericArray($rt_doublecls(),new Float64Array(sz));}function $rt_arraycls(cls){var result=cls.$array;if(result===null){var arraycls={};var name="["+cls.$meta.binaryName;arraycls.$meta={item:cls,supertypes:[$rt_objcls()],primitive:false,superclass:$rt_objcls(),name:name,binaryName:name,enum:false};arraycls.classObject=null;arraycls.$array
=null;result=arraycls;cls.$array=arraycls;}return result;}function $rt_createcls(){return {$array:null,classObject:null,$meta:{supertypes:[],superclass:null}};}function $rt_createPrimitiveCls(name,binaryName){var cls=$rt_createcls();cls.$meta.primitive=true;cls.$meta.name=name;cls.$meta.binaryName=binaryName;cls.$meta.enum=false;cls.$meta.item=null;return cls;}var $rt_booleanclsCache=null;function $rt_booleancls(){if($rt_booleanclsCache===null){$rt_booleanclsCache=$rt_createPrimitiveCls("boolean","Z");}return $rt_booleanclsCache;}var $rt_charclsCache
=null;function $rt_charcls(){if($rt_charclsCache===null){$rt_charclsCache=$rt_createPrimitiveCls("char","C");}return $rt_charclsCache;}var $rt_byteclsCache=null;function $rt_bytecls(){if($rt_byteclsCache===null){$rt_byteclsCache=$rt_createPrimitiveCls("byte","B");}return $rt_byteclsCache;}var $rt_shortclsCache=null;function $rt_shortcls(){if($rt_shortclsCache===null){$rt_shortclsCache=$rt_createPrimitiveCls("short","S");}return $rt_shortclsCache;}var $rt_intclsCache=null;function $rt_intcls(){if($rt_intclsCache
===null){$rt_intclsCache=$rt_createPrimitiveCls("int","I");}return $rt_intclsCache;}var $rt_longclsCache=null;function $rt_longcls(){if($rt_longclsCache===null){$rt_longclsCache=$rt_createPrimitiveCls("long","J");}return $rt_longclsCache;}var $rt_floatclsCache=null;function $rt_floatcls(){if($rt_floatclsCache===null){$rt_floatclsCache=$rt_createPrimitiveCls("float","F");}return $rt_floatclsCache;}var $rt_doubleclsCache=null;function $rt_doublecls(){if($rt_doubleclsCache===null){$rt_doubleclsCache=$rt_createPrimitiveCls("double",
"D");}return $rt_doubleclsCache;}var $rt_voidclsCache=null;function $rt_voidcls(){if($rt_voidclsCache===null){$rt_voidclsCache=$rt_createPrimitiveCls("void","V");}return $rt_voidclsCache;}function $rt_throw(ex){throw $rt_exception(ex);}function $rt_exception(ex){var err=ex.$jsException;if(!err){err=new Error("Java exception thrown");if(typeof Error.captureStackTrace==="function"){Error.captureStackTrace(err);}err.$javaException=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return err;}function $rt_fillStack(err,
ex){if(typeof $rt_decodeStack==="function"&&err.stack){var stack=$rt_decodeStack(err.stack);var javaStack=$rt_createArray($rt_objcls(),stack.length);var elem;var noStack=false;for(var i=0;i<stack.length;++i){var element=stack[i];elem=$rt_createStackElement($rt_str(element.className),$rt_str(element.methodName),$rt_str(element.fileName),element.lineNumber);if(elem==null){noStack=true;break;}javaStack.data[i]=elem;}if(!noStack){$rt_setStack(ex,javaStack);}}}function $rt_createMultiArray(cls,dimensions){var first
=0;for(var i=dimensions.length -1;i>=0;i=i -1|0){if(dimensions[i]===0){first=i;break;}}if(first>0){for(i=0;i<first;i=i+1|0){cls=$rt_arraycls(cls);}if(first===dimensions.length -1){return $rt_createArray(cls,dimensions[first]);}}var arrays=new Array($rt_primitiveArrayCount(dimensions,first));var firstDim=dimensions[first]|0;for(i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createArray(cls,firstDim);}return $rt_createMultiArrayImpl(cls,arrays,dimensions,first);}function $rt_createByteMultiArray(dimensions){var arrays
=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_bytecls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createByteArray(firstDim);}return $rt_createMultiArrayImpl($rt_bytecls(),arrays,dimensions);}function $rt_createCharMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_charcls(),dimensions);}var firstDim=dimensions[0]|0;for
(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createCharArray(firstDim);}return $rt_createMultiArrayImpl($rt_charcls(),arrays,dimensions,0);}function $rt_createBooleanMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_booleancls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createBooleanArray(firstDim);}return $rt_createMultiArrayImpl($rt_booleancls(),arrays,dimensions,0);}function $rt_createShortMultiArray(dimensions)
{var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_shortcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createShortArray(firstDim);}return $rt_createMultiArrayImpl($rt_shortcls(),arrays,dimensions,0);}function $rt_createIntMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_intcls(),dimensions);}var firstDim=dimensions[0]
|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createIntArray(firstDim);}return $rt_createMultiArrayImpl($rt_intcls(),arrays,dimensions,0);}function $rt_createLongMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_longcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createLongArray(firstDim);}return $rt_createMultiArrayImpl($rt_longcls(),arrays,dimensions,0);}function $rt_createFloatMultiArray(dimensions)
{var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_floatcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createFloatArray(firstDim);}return $rt_createMultiArrayImpl($rt_floatcls(),arrays,dimensions,0);}function $rt_createDoubleMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_doublecls(),dimensions);}var firstDim
=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createDoubleArray(firstDim);}return $rt_createMultiArrayImpl($rt_doublecls(),arrays,dimensions,0);}function $rt_primitiveArrayCount(dimensions,start){var val=dimensions[start+1]|0;for(var i=start+2;i<dimensions.length;i=i+1|0){val=val*(dimensions[i]|0)|0;if(val===0){break;}}return val;}function $rt_createMultiArrayImpl(cls,arrays,dimensions,start){var limit=arrays.length;for(var i=start+1|0;i<dimensions.length;i=i+1|0){cls=$rt_arraycls(cls);var dim
=dimensions[i];var index=0;var packedIndex=0;while(index<limit){var arr=$rt_createUnfilledArray(cls,dim);for(var j=0;j<dim;j=j+1|0){arr.data[j]=arrays[index];index=index+1|0;}arrays[packedIndex]=arr;packedIndex=packedIndex+1|0;}limit=packedIndex;}return arrays[0];}function $rt_assertNotNaN(value){if(typeof value==='number'&&isNaN(value)){throw "NaN";}return value;}var $rt_stdoutBuffer="";var $rt_putStdout=typeof $rt_putStdoutCustom==="function"?$rt_putStdoutCustom:function(ch){if(ch===0xA){if(console){console.info($rt_stdoutBuffer);}$rt_stdoutBuffer
="";}else {$rt_stdoutBuffer+=String.fromCharCode(ch);}};var $rt_stderrBuffer="";var $rt_putStderr=typeof $rt_putStderrCustom==="function"?$rt_putStderrCustom:function(ch){if(ch===0xA){if(console){console.error($rt_stderrBuffer);}$rt_stderrBuffer="";}else {$rt_stderrBuffer+=String.fromCharCode(ch);}};var $rt_packageData=null;function $rt_packages(data){var i=0;var packages=new Array(data.length);for(var j=0;j<data.length;++j){var prefixIndex=data[i++];var prefix=prefixIndex>=0?packages[prefixIndex]:"";packages[j]
=prefix+data[i++]+".";}$rt_packageData=packages;}function $rt_metadata(data){var packages=$rt_packageData;var i=0;while(i<data.length){var cls=data[i++];cls.$meta={};var m=cls.$meta;var className=data[i++];m.name=className!==0?className:null;if(m.name!==null){var packageIndex=data[i++];if(packageIndex>=0){m.name=packages[packageIndex]+m.name;}}m.binaryName="L"+m.name+";";var superclass=data[i++];m.superclass=superclass!==0?superclass:null;m.supertypes=data[i++];if(m.superclass){m.supertypes.push(m.superclass);cls.prototype
=Object.create(m.superclass.prototype);}else {cls.prototype={};}var flags=data[i++];m.enum=(flags&8)!==0;m.flags=flags;m.primitive=false;m.item=null;cls.prototype.constructor=cls;cls.classObject=null;m.accessLevel=data[i++];var clinit=data[i++];cls.$clinit=clinit!==0?clinit:function(){};var virtualMethods=data[i++];if(virtualMethods!==0){for(var j=0;j<virtualMethods.length;j+=2){var name=virtualMethods[j];var func=virtualMethods[j+1];if(typeof name==='string'){name=[name];}for(var k=0;k<name.length;++k){cls.prototype[name[k]]
=func;}}}cls.$array=null;}}function $rt_threadStarter(f){return function(){var args=Array.prototype.slice.apply(arguments);$rt_startThread(function(){f.apply(this,args);});};}function $rt_mainStarter(f){return function(args,callback){if(!args){args=[];}var javaArgs=$rt_createArray($rt_objcls(),args.length);for(var i=0;i<args.length;++i){javaArgs.data[i]=$rt_str(args[i]);}$rt_startThread(function(){f.call(null,javaArgs);},callback);};}var $rt_stringPool_instance;function $rt_stringPool(strings){$rt_stringPool_instance
=new Array(strings.length);for(var i=0;i<strings.length;++i){$rt_stringPool_instance[i]=$rt_intern($rt_str(strings[i]));}}function $rt_s(index){return $rt_stringPool_instance[index];}function $rt_eraseClinit(target){return target.$clinit=function(){};}var $rt_numberConversionView=new DataView(new ArrayBuffer(8));function $rt_doubleToLongBits(n){$rt_numberConversionView.setFloat64(0,n,true);return new Long($rt_numberConversionView.getInt32(0,true),$rt_numberConversionView.getInt32(4,true));}function $rt_longBitsToDouble(n)
{$rt_numberConversionView.setInt32(0,n.lo,true);$rt_numberConversionView.setInt32(4,n.hi,true);return $rt_numberConversionView.getFloat64(0,true);}function $rt_floatToIntBits(n){$rt_numberConversionView.setFloat32(0,n);return $rt_numberConversionView.getInt32(0);}function $rt_intBitsToFloat(n){$rt_numberConversionView.setInt32(0,n);return $rt_numberConversionView.getFloat32(0);}function $rt_javaException(e){return e instanceof Error&&typeof e.$javaException==='object'?e.$javaException:null;}function $rt_jsException(e)
{return typeof e.$jsException==='object'?e.$jsException:null;}function $rt_wrapException(err){var ex=err.$javaException;if(!ex){ex=$rt_createException($rt_str("(JavaScript) "+err.toString()));err.$javaException=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return ex;}function $dbg_class(obj){var cls=obj.constructor;var arrayDegree=0;while(cls.$meta&&cls.$meta.item){++arrayDegree;cls=cls.$meta.item;}var clsName="";if(cls===$rt_booleancls()){clsName="boolean";}else if(cls===$rt_bytecls()){clsName="byte";}else if
(cls===$rt_shortcls()){clsName="short";}else if(cls===$rt_charcls()){clsName="char";}else if(cls===$rt_intcls()){clsName="int";}else if(cls===$rt_longcls()){clsName="long";}else if(cls===$rt_floatcls()){clsName="float";}else if(cls===$rt_doublecls()){clsName="double";}else {clsName=cls.$meta?cls.$meta.name||"a/"+cls.name:"@"+cls.name;}while(arrayDegree-->0){clsName+="[]";}return clsName;}function Long(lo,hi){this.lo=lo|0;this.hi=hi|0;}Long.prototype.__teavm_class__=function(){return "long";};Long.prototype.toString
=function(){var result=[];var n=this;var positive=Long_isPositive(n);if(!positive){n=Long_neg(n);}var radix=new Long(10,0);do {var divRem=Long_divRem(n,radix);result.push(String.fromCharCode(48+divRem[1].lo));n=divRem[0];}while(n.lo!==0||n.hi!==0);result=(result.reverse()).join('');return positive?result:"-"+result;};Long.prototype.valueOf=function(){return Long_toNumber(this);};var Long_ZERO=new Long(0,0);var Long_MAX_NORMAL=1<<18;function Long_fromInt(val){return val>=0?new Long(val,0):new Long(val, -1);}function Long_fromNumber(val)
{if(val>=0){return new Long(val|0,val/0x100000000|0);}else {return Long_neg(new Long( -val|0, -val/0x100000000|0));}}function Long_toNumber(val){var lo=val.lo;var hi=val.hi;if(lo<0){lo+=0x100000000;}return 0x100000000*hi+lo;}var $rt_imul=Math.imul||function(a,b){var ah=a>>>16&0xFFFF;var al=a&0xFFFF;var bh=b>>>16&0xFFFF;var bl=b&0xFFFF;return al*bl+(ah*bl+al*bh<<16>>>0)|0;};var $rt_udiv=function(a,b){if(a<0){a+=0x100000000;}if(b<0){b+=0x100000000;}return a/b|0;};var $rt_umod=function(a,b){if(a<0){a+=0x100000000;}if
(b<0){b+=0x100000000;}return a%b|0;};function $rt_setCloneMethod(target, f){target.dF=f;}
function $rt_cls(cls){return HO(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return Dn(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.t.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return C; }
function $rt_nullCheck(val) {if (val === null) {$rt_throw(RC());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return ADY(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
var A=Object.create(null);
var G=$rt_throw;var BW=$rt_compare;var ADZ=$rt_nullCheck;var D=$rt_cls;var E=$rt_createArray;var ACM=$rt_isInstance;var AD0=$rt_nativeThread;var AD1=$rt_suspending;var AD2=$rt_resuming;var AD3=$rt_invalidPointer;var B=$rt_s;var Bc=$rt_eraseClinit;var Ce=$rt_imul;var Bd=$rt_wrapException;
function C(){this.$id$=0;}
function AB$(){var a=new C();L(a);return a;}
function L(a){return;}
function Cf(a){return HO(a.constructor);}
function Tt(a){return Er(a);}
function N3(a,b){return a!==b?0:1;}
function RY(a){return J().a(Cf(a).bW()).a(B(0)).a(MV(Er(a))).e();}
function Er(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AAb(a){var b,c,d;if(!ACM(a,B5)){b=a;if(b.constructor.$meta.item===null)G(AA6());}c=Oc(a);b=c;d=$rt_nextId();b.$id$=d;return c;}
function K(){var a=this;C.call(a);a.e_=null;a.fM=null;}
function AD4(){var a=new K();Q(a);return a;}
function Q(a){L(a);}
function To(a,b){if(!b&&a.e_===null)a.e_=a.u();else if(b&&a.fM===null)a.fM=a.u().b6(1);if(b)return a.fM;return a.e_;}
function M2(){K.call(this);}
function ABA(){var a=new M2();Ue(a);return a;}
function Ue(a){Q(a);}
function Tw(a){return Bx().bf(32).bf(9);}
function JY(){K.call(this);}
function ACx(){var a=new JY();X7(a);return a;}
function X7(a){Q(a);}
function Og(a){return Bx().I(0,31).bf(127);}
function CL(){var a=this;C.call(a);a.fm=null;a.dD=null;a.dZ=0;a.ew=0;a.hF=null;}
function AD5(){var a=new CL();Ld(a);return a;}
function AD6(a){var b=new CL();F6(b,a);return b;}
function AD7(a,b){var c=new CL();MN(c,a,b);return c;}
function AD8(a){var b=new CL();Lf(b,a);return b;}
function Ld(a){a.dZ=1;a.ew=1;a.ee();}
function F6(a,b){a.dZ=1;a.ew=1;a.ee();a.fm=b;}
function MN(a,b,c){a.dZ=1;a.ew=1;a.ee();a.fm=b;a.dD=c;}
function Lf(a,b){a.dZ=1;a.ew=1;a.ee();a.dD=b;}
function Vx(a){return a;}
function TR(a){return a.fm;}
function WA(a){return a.dO();}
function XF(a){a.hq(Ci());}
function ZG(a,b){var c,d,e,f,g;b.bH(Cf(a).bW());c=a.j2();if(c!==null)b.bH(J().a(B(1)).a(c).e());a:{b.lx();if(a.hF!==null){d=a.hF.data;e=d.length;f=0;while(true){if(f>=e)break a;g=d[f];b.bH(B(2));b.lq(g);f=f+1|0;}}}if(a.dD!==null&&a.dD!==a){b.bH(B(3));a.dD.hq(b);}}
function Br(){CL.call(this);}
function AD9(){var a=new Br();C4(a);return a;}
function AD$(a){var b=new Br();GQ(b,a);return b;}
function C4(a){Ld(a);}
function GQ(a,b){F6(a,b);}
function T(){Br.call(this);}
function AD_(){var a=new T();BA(a);return a;}
function ADY(a){var b=new T();Df(b,a);return b;}
function BA(a){C4(a);}
function Df(a,b){GQ(a,b);}
function C5(){T.call(this);}
function Cq(){var a=new C5();I3(a);return a;}
function Bp(a){var b=new C5();L1(b,a);return b;}
function I3(a){BA(a);}
function L1(a,b){Df(a,b);}
function Ct(){C.call(this);}
function AEa(){var a=new Ct();Eo(a);return a;}
function Eo(a){L(a);}
function I(){var a=this;Ct.call(a);a.G=0;a.T=0;a.J=null;a.dn=null;a.dV=null;a.y=0;}
var AEb=null;function E5(){E5=Bc(I);Tg();}
function AEc(){var a=new I();P(a);return a;}
function P(a){E5();Eo(a);a.J=ABX(2048);}
function Re(a){return null;}
function PL(a){return a.J;}
function N8(a){var b,c;if(!a.T){b=a.J;c=b.dm(0)>=2048?0:1;}else c=a.J.k_(0)>=2048?0:1;return c;}
function Xo(a){return a.y;}
function Vl(a){return a;}
function Qd(a){var b;if(a.dV===null){b=a.bb();a.dV=ADW(a,b);a.dV.b6(a.T);}return a.dV;}
function Rp(a){var b;if(a.dn===null){b=a.bb();a.dn=ADQ(a,b,a);a.dn.b6(a.c2());a.dn.y=a.y;}return a.dn;}
function YB(a){return 0;}
function WF(a,b){if(a.G^b){a.G=a.G?0:1;a.T=a.T?0:1;}if(!a.y)a.y=1;return a;}
function VC(a){return a.G;}
function DU(b,c){E5();return b.j(c);}
function CV(b,c){E5();if(b.L()!==null&&c.L()!==null)return b.L().j9(c.L());return 1;}
function Gf(b,c){E5();return LC(AEb,b).kS(c);}
function Tg(){AEb=ADn();}
function MM(){I.call(this);this.k$=null;}
function AB5(a){var b=new MM();O6(b,a);return b;}
function O6(a,b){a.k$=b;P(a);}
function PP(a,b){return FY(b);}
function BY(){Br.call(this);}
function PD(){var a=new BY();HR(a);return a;}
function HR(a){C4(a);}
function Cm(){BY.call(this);}
function AEd(){var a=new Cm();Fp(a);return a;}
function Fp(a){HR(a);}
function JA(){Cm.call(this);this.iE=0;}
function ABT(a){var b=new JA();Ql(b,a);return b;}
function Ql(a,b){Fp(a);a.iE=b;}
function U9(a){return J().a(B(4)).n(a.iE).e();}
function Kr(){K.call(this);}
function AB0(){var a=new Kr();O_(a);return a;}
function O_(a){Q(a);}
function Uv(a){var b;b=ACf(a);b.y=1;return b;}
function HW(){var a=this;C.call(a);a.gF=null;a.iA=null;a.hV=0;a.f3=0;}
function ABB(a,b){var c=new HW();VR(c,a,b);return c;}
function VR(a,b,c){L(a);a.gF=b;a.iA=c;}
function UG(a){return BR(a.gF);}
function UO(a,b){return W(a.iA)<b?0:1;}
function V5(a,b){a.hV=b;}
function AAE(a,b){a.f3=b;}
function BP(){}
function BN(){C.call(this);}
function AEe(){var a=new BN();F1(a);return a;}
function F1(a){L(a);}
function BE(){}
function C$(){BN.call(this);this.iN=0;}
var AEf=null;function B6(){B6=Bc(C$);UZ();}
function ACS(a){var b=new C$();DN(b,a);return b;}
function DN(a,b){B6();F1(a);a.iN=b;}
function JB(b,c){B6();if(!(c>=2&&c<=36))c=10;return ADm(20).gW(b,c).e();}
function MV(b){B6();return Oe(b,4);}
function Ir(b){B6();return JB(b,10);}
function CX(b,c){var d,e,f,g,h;B6();if(c>=2&&c<=36){if(b!==null&&!b.Q()){a:{d=0;e=0;switch(b.d(0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=0;if(e==b.g())G(Ca());while(e<b.g()){g=e+1|0;h=Eh(b.d(e));if(h<0)G(BV(J().a(B(5)).a(b).e()));if(h>=c)G(BV(J().a(B(6)).n(c).a(B(1)).a(b).e()));f=Ce(c,f)+h|0;if(f<0){if(g==b.g()&&f==(-2147483648)&&d)return (-2147483648);G(BV(J().a(B(7)).a(b).e()));}e=g;}if(d)f= -f;return f;}G(BV(B(8)));}G(BV(J().a(B(9)).n(c).e()));}
function JS(b){B6();return CX(b,10);}
function XW(a){return Ir(a.iN);}
function EP(b){var c,d,e;B6();if(!b)return 32;c=0;d=b>>>16;if(d)c=16;else d=b;e=d>>>8;if(!e)e=d;else c=c|8;d=e>>>4;if(!d)d=e;else c=c|4;e=d>>>2;if(!e)e=d;else c=c|2;if(e>>>1)c=c|1;return (32-c|0)-1|0;}
function CY(b){var c,d,e;B6();if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;e=d<<8;if(!e)e=d;else c=c|8;d=e<<4;if(!d)d=e;else c=c|4;e=d<<2;if(!e)e=d;else c=c|2;if(e<<1)c=c|1;return (32-c|0)-1|0;}
function KI(b,c){var d;B6();d=c&31;return b<<d|b>>>(32-d|0);}
function UZ(){AEf=D($rt_intcls());}
function Kb(){Br.call(this);}
function AA6(){var a=new Kb();Yu(a);return a;}
function Yu(a){C4(a);}
function Cg(){C.call(this);}
var AEg=null;var AEh=null;var AEi=null;var AEj=null;var AEk=null;function AB6(){AB6=Bc(Cg);YO();}
function YO(){var b,c;b=$rt_createIntArray(10);c=b.data;c[0]=1;c[1]=10;c[2]=100;c[3]=1000;c[4]=10000;c[5]=100000;c[6]=1000000;c[7]=10000000;c[8]=100000000;c[9]=1000000000;AEg=b;b=$rt_createLongArray(19);c=b.data;c[0]=Long_fromInt(1);c[1]=Long_fromInt(10);c[2]=Long_fromInt(100);c[3]=Long_fromInt(1000);c[4]=Long_fromInt(10000);c[5]=Long_fromInt(100000);c[6]=Long_fromInt(1000000);c[7]=Long_fromInt(10000000);c[8]=Long_fromInt(100000000);c[9]=Long_fromInt(1000000000);c[10]=new Long(1410065408, 2);c[11]=new Long(1215752192, 23);c[12]
=new Long(3567587328, 232);c[13]=new Long(1316134912, 2328);c[14]=new Long(276447232, 23283);c[15]=new Long(2764472320, 232830);c[16]=new Long(1874919424, 2328306);c[17]=new Long(1569325056, 23283064);c[18]=new Long(2808348672, 232830643);AEh=b;b=$rt_createLongArray(6);c=b.data;c[0]=Long_fromInt(1);c[1]=Long_fromInt(10);c[2]=Long_fromInt(100);c[3]=Long_fromInt(10000);c[4]=Long_fromInt(100000000);c[5]=new Long(1874919424, 2328306);AEi=b;AEj=ABf();AEk=ACW();}
function R(){var a=this;C.call(a);a.f=null;a.bd=0;a.hL=null;a.hy=0;}
var AEl=0;function Ji(){Ji=Bc(R);ZH();}
function AEm(){var a=new R();Bo(a);return a;}
function AEn(a){var b=new R();Eb(b,a);return b;}
function Bo(a){var b,c;Ji();L(a);b=new C$;c=AEl;AEl=c+1|0;DN(b,c);a.hL=b.e();}
function Eb(a,b){var c,d;Ji();L(a);c=new C$;d=AEl;AEl=d+1|0;DN(c,d);a.hL=c.e();a.f=b;}
function C7(a,b,c,d){var e;e=d.q();while(true){if(b>e)return (-1);if(a.b(b,c,d)>=0)break;b=b+1|0;}return b;}
function Db(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.b(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function SZ(a,b){a.hy=b;}
function RI(a){return a.hy;}
function UN(a){return a.f;}
function FK(a,b){a.f=b;}
function WL(a,b){return 1;}
function YH(a){return null;}
function GH(a){var b;a.bd=1;if(a.f!==null){if(!a.f.bd){b=a.f.ch();if(b!==null){a.f.bd=1;a.f=b;}a.f.bB();}else if(a.f instanceof CK&&a.f.br.ff)a.f=a.f.f;}}
function ZH(){AEl=1;}
function V(){var a=this;R.call(a);a.N=null;a.br=null;a.A=0;}
function AEo(){var a=new V();BC(a);return a;}
function ADI(a,b){var c=new V();H1(c,a,b);return c;}
function BC(a){Bo(a);}
function H1(a,b,c){Bo(a);a.N=b;a.br=c;a.A=c.c9();}
function WS(a,b,c,d){var e,f,g,h,i;if(a.N===null)return (-1);e=d.cD(a.A);d.bM(a.A,b);f=a.N.U();g=0;while(true){if(g>=f){d.bM(a.A,e);return (-1);}h=a.N.E(g);i=h.b(b,c,d);if(i>=0)break;g=g+1|0;}return i;}
function QV(a,b){a.br.s(b);}
function AAC(a,b){var c;a:{if(a.N!==null){c=a.N.X();while(true){if(!c.Y())break a;if(!c.V().Z(b))continue;else return 1;}}}return 0;}
function Sn(a,b){var c,d;a:{if(b.eA(a.A)>=0){c=b.cD(a.A);d=a.A;if(c==b.eA(d)){c=0;break a;}}c=1;}return c;}
function St(a){var b,c,d,e;a.bd=1;if(a.br!==null&&!a.br.bd)a.br.bB();a:{if(a.N!==null){b=a.N.U();c=0;while(true){if(c>=b)break a;d=a.N.E(c);e=d.ch();if(e===null)e=d;else{d.bd=1;a.N.iD(c);a.N.lI(c,e);}if(!e.bd)e.bB();c=c+1|0;}}}if(a.f!==null)GH(a);}
function CK(){V.call(this);this.bl=null;}
function ABv(a,b){var c=new CK();Jv(c,a,b);return c;}
function Jv(a,b,c){BC(a);a.bl=b;a.br=c;a.A=c.c9();}
function Oz(a,b,c,d){var e,f;e=d.cD(a.A);d.bM(a.A,b);f=a.bl.b(b,c,d);if(f>=0)return f;d.bM(a.A,e);return (-1);}
function NC(a,b,c,d){var e;e=a.bl.bh(b,c,d);if(e>=0)d.bM(a.A,e);return e;}
function T8(a,b,c,d,e){var f;f=a.bl.be(b,c,d,e);if(f>=0)e.bM(a.A,f);return f;}
function AAp(a,b){return a.bl.Z(b);}
function Q0(a){var b;b=ABt(a);a.f=b;return b;}
function YP(a){var b;a.bd=1;if(a.br!==null&&!a.br.bd)a.br.bB();if(a.bl!==null&&!a.bl.bd){b=a.bl.ch();if(b!==null){a.bl.bd=1;a.bl=b;}a.bl.bB();}}
function BF(){}
function V1(b){return b;}
function Dk(){}
function El(){}
function BK(){}
function KD(){}
function Zm(){return window.document;}
function Gg(){BN.call(this);}
var AEp=null;function U5(){U5=Bc(Gg);Xc();}
function Mk(b,c){var d,e,f,g,h;U5();if(c>=2&&c<=36){if(b!==null&&!b.Q()){a:{d=0;e=0;switch(b.d(0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=Long_ZERO;while(e<b.g()){g=e+1|0;h=Eh(b.d(e));if(h<0)G(BV(J().a(B(5)).a(b).e()));if(h>=c)G(BV(J().a(B(6)).n(c).a(B(1)).a(b).e()));f=Long_add(Long_mul(Long_fromInt(c),f),Long_fromInt(h));if(Long_lt(f,Long_ZERO)){if(g==b.g()&&Long_eq(f,new Long(0, 2147483648))&&d)return new Long(0, 2147483648);G(BV(J().a(B(7)).a(b).e()));}e=g;}if(d)f=Long_neg(f);return f;}G(BV(B(8)));}G(BV(J().a(B(9)).n(c).e()));}
function FU(b){U5();return Mk(b,10);}
function Xc(){AEp=D($rt_longcls());}
function Gb(){}
function EB(){}
function Ja(){var a=this;C.call(a);a.dC=null;a.eR=null;a.bq=0;a.iY=0;}
function PN(a){var b=new Ja();YY(b,a);return b;}
function YY(a,b){L(a);while(b>=a.bq){a.bq=a.bq<<1|1;}a.bq=a.bq<<1|1;a.dC=$rt_createIntArray(a.bq+1|0);a.eR=$rt_createIntArray(a.bq+1|0);a.iY=b;}
function X5(a,b,c){var d,e,f;d=0;e=b&a.bq;while(a.dC.data[e]&&a.dC.data[e]!=b){f=d+1|0;d=f&a.bq;f=e+d|0;e=f&a.bq;}a.dC.data[e]=b;a.eR.data[e]=c;}
function NR(a,b){var c,d,e,f;c=b&a.bq;d=0;while(true){e=a.dC.data[c];if(!e)break;if(e==b)return a.eR.data[c];f=d+1|0;d=f&a.bq;f=c+d|0;c=f&a.bq;}return a.iY;}
function Ee(){K.call(this);}
function AC8(){var a=new Ee();Jo(a);return a;}
function Jo(a){Q(a);}
function Jg(a){return Bx().I(97,122).I(65,90);}
function DM(){K.call(this);}
function ADF(){var a=new DM();Kx(a);return a;}
function Kx(a){Q(a);}
function Gw(a){return Bx().I(48,57);}
function Ki(){DM.call(this);}
function ACY(){var a=new Ki();Zz(a);return a;}
function Zz(a){Kx(a);}
function Xa(a){var b;b=Gw(a).b6(1);b.y=1;return b;}
function Hg(){CK.call(this);}
function ABt(a){var b=new Hg();S6(b,a);return b;}
function S6(a,b){Jv(a,b.bl,b.br);}
function VN(a,b,c,d){var e,f,g;e=0;f=d.q();a:{while(true){if(b>f){b=e;break a;}g=d.cD(a.A);d.bM(a.A,b);e=a.bl.b(b,c,d);if(e>=0)break;d.bM(a.A,g);b=b+1|0;}}return b;}
function AAl(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=e.cD(a.A);e.bM(a.A,c);f=a.bl.b(c,d,e);if(f>=0)break;e.bM(a.A,g);c=c+(-1)|0;}}return c;}
function SJ(a){return null;}
function L5(){T.call(this);}
function ADA(){var a=new L5();Pt(a);return a;}
function Pt(a){BA(a);}
function CD(){var a=this;V.call(a);a.gQ=0;a.c0=0;}
function ADE(a,b){var c=new CD();Fb(c,a,b);return c;}
function Fb(a,b,c){BC(a);a.gQ=b;a.c0=c;}
function PG(a,b,c,d){var e,f,g,h;e=a.c4(d);if(e!==null&&(b+e.g()|0)<=d.q()){f=0;while(true){if(f>=e.g()){d.C(a.c0,e.g());return a.f.b(b+e.g()|0,c,d);}g=e.d(f);h=b+f|0;if(g!=c.d(h)&&C6(e.d(f))!=c.d(h))break;f=f+1|0;}return (-1);}return (-1);}
function Ss(a,b){a.f=b;}
function S_(a,b){var c;c=b.jW(a.gQ);return c;}
function Tb(a,b){var c;c=!b.bD(a.c0)?0:1;b.C(a.c0,(-1));return c;}
function Du(){K.call(this);}
function ABb(){var a=new Du();Ke(a);return a;}
function Ke(a){Q(a);}
function M6(a){return Bx().I(97,122).I(65,90).I(48,57).bf(95);}
function KA(){Du.call(this);}
function ABp(){var a=new KA();XZ(a);return a;}
function XZ(a){Ke(a);}
function O4(a){var b;b=M6(a).b6(1);b.y=1;return b;}
function KU(){var a=this;I.call(a);a.g8=null;a.kX=null;}
function ADW(a,b){var c=new KU();AAi(c,a,b);return c;}
function AAi(a,b,c){a.kX=b;a.g8=c;P(a);}
function U3(a,b){var c,d,e;c=b-55296|0;if(c>=0&&c<2048){d=a.T;e=a.g8;d=d^e.bL(c);}else d=0;return d;}
function KR(){var a=this;I.call(a);a.hS=null;a.ij=null;a.ki=null;}
function ADQ(a,b,c){var d=new KR();PW(d,a,b,c);return d;}
function PW(a,b,c,d){a.ki=b;a.hS=c;a.ij=d;P(a);}
function Ot(a,b){var c,d,e,f;c=b-55296|0;if(c>=0&&c<2048){d=a.T;e=a.hS;f=d^e.bL(c);}else f=0;return a.ij.j(b)&&!f?1:0;}
function Kc(){K.call(this);}
function ABM(){var a=new Kc();Qo(a);return a;}
function Qo(a){Q(a);}
function PM(a){var b;b=ABW(a);b.y=1;return b;}
function Y(){R.call(this);this.P=0;}
function AEq(a){var b=new Y();Hq(b,a);return b;}
function AEr(){var a=new Y();BH(a);return a;}
function Hq(a,b){Eb(a,b);a.P=1;a.gA(1);}
function BH(a){Bo(a);a.P=1;}
function ZQ(a,b,c,d){var e;if((b+a.ba()|0)>d.q()){d.by=1;return (-1);}e=a.H(b,c);if(e<0)return (-1);return a.f.b(b+e|0,c,d);}
function VB(a){return a.P;}
function YV(a,b){return 1;}
function Ht(){Y.call(this);this.dA=null;}
function ADX(a){var b=new Ht();Xn(b,a);return b;}
function Xn(a,b){BH(a);a.dA=b.e();a.P=b.g();}
function Ud(a,b,c){var d,e,f,g;d=0;while(true){if(d>=a.dA.g())return a.dA.g();e=a.dA.d(d);f=b+d|0;if(e!=c.d(f)){g=a.dA;if(C6(g.d(d))!=c.d(f))break;}d=d+1|0;}return (-1);}
function BM(){R.call(this);this.w=null;}
function AEs(a,b,c){var d=new BM();CZ(d,a,b,c);return d;}
function CZ(a,b,c,d){Eb(a,c);a.w=b;a.gA(d);}
function Z8(a){return a.w;}
function T9(a,b){return !a.w.Z(b)&&!a.f.Z(b)?0:1;}
function Xe(a,b){return 1;}
function Ok(a){var b;a.bd=1;if(a.f!==null&&!a.f.bd){b=a.f.ch();if(b!==null){a.f.bd=1;a.f=b;}a.f.bB();}if(a.w!==null){if(!a.w.bd){b=a.w.ch();if(b!==null){a.w.bd=1;a.w=b;}a.w.bB();}else if(a.w instanceof CK&&a.w.br.ff)a.w=a.w.f;}}
function Bw(){BM.call(this);this.B=null;}
function ABP(a,b,c){var d=new Bw();Cr(d,a,b,c);return d;}
function Cr(a,b,c,d){CZ(a,b,c,d);a.B=b;}
function N5(a,b,c,d){var e,f;e=0;a:{while((b+a.B.ba()|0)<=d.q()){f=a.B.H(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.f.b(b,c,d);if(f>=0)break;b=b-a.B.ba()|0;e=e+(-1)|0;}return f;}
function Cd(){Bw.call(this);this.cm=null;}
function ACk(a,b,c,d){var e=new Cd();Gh(e,a,b,c,d);return e;}
function Gh(a,b,c,d,e){Cr(a,c,d,e);a.cm=b;}
function Qp(a,b,c,d){var e,f,g,h;e=a.cm.cZ();f=a.cm.c1();g=0;while(true){if(g>=e){a:{while(g<f){if((b+a.B.ba()|0)>d.q())break a;h=a.B.H(b,c);if(h<1)break a;b=b+h|0;g=g+1|0;}}while(true){if(g<e)return (-1);h=a.f.b(b,c,d);if(h>=0)break;b=b-a.B.ba()|0;g=g+(-1)|0;}return h;}if((b+a.B.ba()|0)>d.q()){d.by=1;return (-1);}h=a.B.H(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}return (-1);}
function Jh(){Cd.call(this);}
function AC7(a,b,c,d){var e=new Jh();OG(e,a,b,c,d);return e;}
function OG(a,b,c,d,e){Gh(a,b,c,d,e);}
function T_(a,b,c,d){var e,f,g,h;e=a.cm.cZ();f=a.cm.c1();g=0;while(true){if(g>=e){a:{while(true){if(g>=f)break a;if((b+a.B.ba()|0)>d.q())break a;h=a.B.H(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}}return a.f.b(b,c,d);}if((b+a.B.ba()|0)>d.q()){d.by=1;return (-1);}h=a.B.H(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}return (-1);}
function Dg(){}
function B9(){CL.call(this);}
function AEt(a,b){var c=new B9();IF(c,a,b);return c;}
function AEu(a){var b=new B9();J1(b,a);return b;}
function AEv(a){var b=new B9();Ih(b,a);return b;}
function IF(a,b,c){MN(a,b,c);}
function J1(a,b){F6(a,b);}
function Ih(a,b){Lf(a,b);}
function CO(){B9.call(this);}
function AEw(a){var b=new CO();G2(b,a);return b;}
function G2(a,b){J1(a,b);}
function Dw(){}
function Ml(){C5.call(this);}
function Ff(){var a=new Ml();VM(a);return a;}
function VM(a){I3(a);}
function EE(){var a=this;T.call(a);a.ln=null;a.k6=null;}
function AA5(a,b,c){var d=new EE();Vq(d,a,b,c);return d;}
function Vq(a,b,c,d){Df(a,b);a.ln=c;a.k6=d;}
function JI(){I.call(this);this.la=null;}
function ADs(a){var b=new JI();Yh(b,a);return b;}
function Yh(a,b){a.la=b;P(a);}
function N_(a,b){return EO(b);}
function IB(){var a=this;I.call(a);a.ea=null;a.jt=null;}
function ACz(a,b){var c=new IB();Yt(c,a,b);return c;}
function Yt(a,b,c){a.jt=b;a.ea=c;P(a);}
function AAn(a,b){return a.G^a.ea.bL(b);}
function WG(a){var b,c;b=J();c=a.ea.dm(0);while(c>=0){b.d_(CJ(c));b.bx(124);c=a.ea.dm(c+1|0);}if(b.g()>0)b.iw(b.g()-1|0);return b.e();}
function DY(){var a=this;C.call(a);a.kR=null;a.gw=0.0;a.ls=0.0;a.cl=null;a.cJ=null;a.d8=null;a.bO=0;}
function AEx(a,b,c){var d=new DY();MO(d,a,b,c);return d;}
function MO(a,b,c,d){L(a);a.cl=B(10);B7();a.cJ=AEy;a.d8=AEy;if(c<=0.0)G(By(J().a(B(11)).ik(c).e()));if(d>0.0){a.kR=b;a.gw=c;a.ls=d;return;}G(By(J().a(B(12)).ik(d).e()));}
function K_(a,b){if(b!==null){a.cJ=b;a.fT(b);return a;}G(By(B(13)));}
function W4(a,b){return;}
function HM(a,b){if(b!==null){a.d8=b;a.ft(b);return a;}G(By(B(13)));}
function Xw(a,b){return;}
function FA(a,b,c,d){var e,f,g,$$je;if(!(a.bO==2&&!d)&&a.bO!=3){a.bO=d?2:1;while(true){try{e=a.jw(b,c);}catch($$e){$$je=Bd($$e);if($$je instanceof T){f=$$je;G(TE(f));}else{throw $$e;}}if(e.da())return e;if(e.dH()){if(d&&BR(b)){g=a.cJ;B7();if(g===AEy)return BL(W(b));if(W(c)<=a.cl.g())return AEz;b.eq(BG(b)+W(b)|0);if(a.cJ===AEA)DR(c,a.cl);}return e;}if(e.hX()){g=a.cJ;B7();if(g===AEy)return e;if(a.cJ===AEA){if(W(c)<a.cl.g())return AEz;DR(c,a.cl);}b.eq(BG(b)+e.g()|0);}else if(e.fZ()){g=a.d8;B7();if(g===AEy)break;if
(a.d8===AEA){if(W(c)<a.cl.g())return AEz;DR(c,a.cl);}b.eq(BG(b)+e.g()|0);}}return e;}G(C0());}
function My(a,b){if(a.bO!=3&&a.bO!=2)G(C0());a.bO=3;return a.kH(b);}
function LD(a){a.bO=0;a.kB();return a;}
function I7(a,b){var c,d,e;if(a.bO&&a.bO!=3)G(C0());if(!W(b))return Mu(0);if(a.bO)LD(a);c=Mu(Bq(8,W(b)*a.gw|0));while(true){d=FA(a,b,c,0);if(d.dH())break;if(d.da())c=En(a,c);if(!d.fR())continue;d.gY();}e=FA(a,b,c,1);if(e.fR())e.gY();while(true){e=My(a,c);if(e.dH())break;c=En(a,c);}G4(c);return c;}
function En(a,b){var c,d,e;c=E8(b);d=c.data;d=EM(c,Bq(8,d.length*2|0));e=OZ(d);e.fb(BG(b));return e;}
function O5(a,b){Bg();return AEB;}
function UE(a){return;}
function Bv(){BM.call(this);}
function ABR(a,b,c){var d=new Bv();Cz(d,a,b,c);return d;}
function Cz(a,b,c,d){CZ(a,b,c,d);}
function Ow(a,b,c,d){var e;if(!a.w.x(d))return a.f.b(b,c,d);e=a.w.b(b,c,d);if(e>=0)return e;return a.f.b(b,c,d);}
function Na(){Bv.call(this);}
function ACo(a,b,c){var d=new Na();V2(d,a,b,c);return d;}
function V2(a,b,c,d){Cz(a,b,c,d);Ea();b.s(AEC);}
function S4(a,b,c,d){var e;while(true){e=a.w.b(b,c,d);if(e<=0)break;b=e;}return a.f.b(b,c,d);}
function LH(){CD.call(this);}
function ADg(a,b){var c=new LH();V$(c,a,b);return c;}
function V$(a,b,c){Fb(a,b,c);}
function Nz(a,b,c,d){var e,f,g,h;e=a.c4(d);if(e!==null&&(b+e.g()|0)<=d.q()){f=0;while(true){if(f>=e.g()){d.C(a.c0,e.g());return a.f.b(b+e.g()|0,c,d);}g=BI(Bz(e.d(f)));h=b+f|0;h=Bz(c.d(h));if(g!=BI(h))break;f=f+1|0;}return (-1);}return (-1);}
function Iy(){var a=this;I.call(a);a.h1=null;a.kK=null;}
function ABg(a,b){var c=new Iy();TD(c,a,b);return c;}
function TD(a,b,c){a.kK=b;a.h1=c;P(a);}
function S7(a,b){return a.h1.j(b);}
function D0(){C.call(this);this.j3=null;}
var AED=null;var AEE=null;function YR(){YR=Bc(D0);AAa();}
function UB(a){var b=new D0();Go(b,a);return b;}
function Go(a,b){YR();L(a);a.j3=b;}
function AAa(){AED=UB(B(14));AEE=UB(B(15));}
function Iz(){var a=this;I.call(a);a.h6=null;a.lt=null;}
function ABI(a,b){var c=new Iz();Ov(c,a,b);return c;}
function Ov(a,b,c){a.lt=b;a.h6=c;P(a);}
function V9(a,b){return a.h6.j(b)?0:1;}
function IA(){var a=this;I.call(a);a.ht=0;a.h4=null;a.ir=null;a.jH=null;}
function ACq(a,b,c,d){var e=new IA();Th(e,a,b,c,d);return e;}
function Th(a,b,c,d,e){a.jH=b;a.ht=c;a.h4=d;a.ir=e;P(a);}
function AAI(a,b){return !(a.ht^a.h4.j(b))&&!a.ir.j(b)?0:1;}
function Lu(){C.call(this);}
function RN(b){var c,d,e,f,g,h;c=0;d=1;while(true){e=b.hl.data;f=b.iS;b.iS=f+1|0;g=Qs(e[f]);h=(g%2|0)!=1?0:1;c=c+Ce(d,g/2|0)|0;d=d*46|0;if(!h)break;}return c;}
function Hk(b){var c,d;c=RN(b);d=c/2|0;if(c%2|0)d= -d;return d;}
function Qs(b){if(b<34)return b-32|0;if(b>=92)return (b-32|0)-2|0;return (b-32|0)-1|0;}
function L8(){var a=this;K.call(a);a.fz=0;a.eD=0;a.hM=0;}
function S(a,b){var c=new L8();SP(c,a,b);return c;}
function ADV(a,b,c){var d=new L8();Yl(d,a,b,c);return d;}
function SP(a,b,c){Q(a);a.eD=c;a.fz=b;}
function Yl(a,b,c,d){Q(a);a.hM=d;a.eD=c;a.fz=b;}
function VL(a){var b;b=ADt(a.fz);if(a.hM)b.J.d7(0,2048);b.y=a.eD;return b;}
function Jj(){var a=this;I.call(a);a.ip=0;a.gI=null;a.gU=null;a.ky=null;}
function ADS(a,b,c,d){var e=new Jj();V0(e,a,b,c,d);return e;}
function V0(a,b,c,d,e){a.ky=b;a.ip=c;a.gI=d;a.gU=e;P(a);}
function W7(a,b){return !(a.ip^a.gI.j(b))&&!a.gU.j(b)?1:0;}
function IC(){var a=this;I.call(a);a.hz=0;a.g6=null;a.i9=null;a.kg=null;}
function ADL(a,b,c,d){var e=new IC();Us(e,a,b,c,d);return e;}
function Us(a,b,c,d,e){a.kg=b;a.hz=c;a.g6=d;a.i9=e;P(a);}
function Rl(a,b){return a.hz^a.g6.j(b)&&a.i9.j(b)?1:0;}
function GA(){Y.call(this);this.dM=null;}
function ADM(a){var b=new GA();We(b,a);return b;}
function We(a,b){var c,d;BH(a);c=J();d=0;while(d<b.g()){c.bx(BI(Bz(b.d(d))));d=d+1|0;}a.dM=c.e();a.P=c.g();}
function NE(a,b,c){var d;d=0;while(true){if(d>=a.dM.g())return a.dM.g();if(a.dM.d(d)!=BI(Bz(c.d(b+d|0))))break;d=d+1|0;}return (-1);}
function ID(){var a=this;I.call(a);a.ha=0;a.gE=null;a.hr=null;a.kP=null;}
function ACg(a,b,c,d){var e=new ID();OY(e,a,b,c,d);return e;}
function OY(a,b,c,d,e){a.kP=b;a.ha=c;a.gE=d;a.hr=e;P(a);}
function RO(a,b){return a.ha^a.gE.j(b)&&a.hr.j(b)?0:1;}
function Mo(){BM.call(this);}
function ACV(a,b,c){var d=new Mo();PS(d,a,b,c);return d;}
function PS(a,b,c,d){CZ(a,b,c,d);}
function Z3(a,b,c,d){var e;e=d.q();if(e>b)return a.f.be(b,e,c,d);return a.f.b(b,c,d);}
function Vr(a,b,c,d){var e;e=d.q();if(a.f.be(b,e,c,d)>=0)return b;return (-1);}
function IE(){var a=this;I.call(a);a.iB=null;a.gP=0;a.jc=null;}
function ABz(a,b,c){var d=new IE();Qc(d,a,b,c);return d;}
function Qc(a,b,c,d){a.jc=b;a.iB=c;a.gP=d;P(a);}
function Y3(a,b){return a.iB.j(b)&&a.gP^a.jc.v.bL(b)?1:0;}
function Lp(){I.call(this);this.kV=null;}
function ADG(a){var b=new Lp();Nk(b,a);return b;}
function Nk(a,b){a.kV=b;P(a);}
function YG(a,b){return MU(b);}
function Ix(){var a=this;I.call(a);a.hh=null;a.jb=0;a.gO=null;}
function ADJ(a,b,c){var d=new Ix();NT(d,a,b,c);return d;}
function NT(a,b,c,d){a.gO=b;a.hh=c;a.jb=d;P(a);}
function V8(a,b){return a.hh.j(b)&&a.jb^a.gO.v.bL(b)?0:1;}
function Bs(){var a=this;R.call(a);a.ff=0;a.c7=0;}
var AEC=null;function Ea(){Ea=Bc(Bs);U6();}
function AB9(a){var b=new Bs();Cl(b,a);return b;}
function Cl(a,b){Ea();Bo(a);a.c7=b;}
function Qm(a,b,c,d){var e,f;e=d.eA(a.c7);d.fy(a.c7,b);f=a.f.b(b,c,d);if(f<0)d.fy(a.c7,e);return f;}
function N$(a){return a.c7;}
function Rk(a,b){return 0;}
function U6(){AEC=ABV();}
function Fu(){Bs.call(this);}
function AEF(a){var b=new Fu();Ln(b,a);return b;}
function Ln(a,b){Cl(a,b);}
function Rz(a,b,c,d){var e,f;e=a.c9();f=d.bD(e);if(f!=b)b=(-1);return b;}
function CG(){var a=this;C.call(a);a.o=null;a.D=0;}
function AEG(){var a=new CG();EY(a);return a;}
function ADm(a){var b=new CG();EJ(b,a);return b;}
function EY(a){EJ(a,16);}
function EJ(a,b){L(a);a.o=$rt_createCharArray(b);}
function Ia(a,b){return a.fA(a.D,b);}
function J5(a,b,c){var d,e,f;if(b>=0&&b<=a.D){if(c===null)c=B(16);else if(c.Q())return a;a.b0(a.D+c.g()|0);d=a.D-1|0;while(d>=b){a.o.data[d+c.g()|0]=a.o.data[d];d=d+(-1)|0;}a.D=a.D+c.g()|0;d=0;while(d<c.g()){e=a.o.data;f=b+1|0;e[b]=c.d(d);d=d+1|0;b=f;}return a;}G(Ff());}
function Il(a,b){return a.gW(b,10);}
function PH(a,b,c){return a.jC(a.D,b,c);}
function Yi(a,b,c,d){var e,f,g,h,i,j,k,l;e=1;if(c<0){e=0;c= -c;}a:{if(c<d){if(e)BB(a,b,b+1|0);else{BB(a,b,b+2|0);f=a.o.data;g=b+1|0;f[b]=45;b=g;}a.o.data[b]=D_(c,d);}else{h=1;i=1;j=2147483647/d|0;b:{while(true){k=Ce(h,d);if(k>c){k=h;break b;}i=i+1|0;if(k>j)break;h=k;}}if(!e)i=i+1|0;BB(a,b,b+i|0);if(e)l=b;else{f=a.o.data;l=b+1|0;f[b]=45;}while(true){if(k<=0)break a;f=a.o.data;g=l+1|0;f[l]=D_(c/k|0,d);c=c%k|0;k=k/d|0;l=g;}}}return a;}
function Kh(a,b){return a.i0(a.D,b);}
function Hy(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=BW(c,0.0);if(!d){BB(a,b,b+3|0);e=a.o.data;d=b+1|0;e[b]=48;e=a.o.data;f=d+1|0;e[d]=46;a.o.data[f]=48;return a;}if(!d){BB(a,b,b+4|0);e=a.o.data;d=b+1|0;e[b]=45;e=a.o.data;f=d+1|0;e[d]=48;e=a.o.data;d=f+1|0;e[f]=46;a.o.data[d]=48;return a;}if(isNaN(c)?1:0){BB(a,b,b+3|0);e=a.o.data;d=b+1|0;e[b]=78;e=a.o.data;f=d+1|0;e[d]=97;a.o.data[f]=78;return a;}if(!isFinite(c)?1:0){if(d>0){BB(a,b,b+8|0);d=b;}else{BB(a,b,b+9|0);e=a.o.data;d=b+1|0;e[b]=45;}e=a.o.data;f=d+
1|0;e[d]=73;e=a.o.data;d=f+1|0;e[f]=110;e=a.o.data;f=d+1|0;e[d]=102;e=a.o.data;d=f+1|0;e[f]=105;e=a.o.data;f=d+1|0;e[d]=110;e=a.o.data;d=f+1|0;e[f]=105;e=a.o.data;f=d+1|0;e[d]=116;a.o.data[f]=121;return a;}AB6();g=AEk;G_(c,g);h=g.fQ;i=g.fq;j=g.g$;k=1;l=1;if(j){j=1;l=2;}m=9;n=VD(h);if(n>0)m=m-n|0;if(i<7&&i>=(-3)){if(i>=0){k=i+1|0;m=Bq(m,k+1|0);i=0;}else if(i<0){h=h/AEg.data[ -i]|0;m=m-i|0;i=0;}}if(i){l=l+2|0;if(!(i>(-10)&&i<10))l=l+1|0;if(i<0)l=l+1|0;}if(i&&m==k)m=m+1|0;d=l+m|0;BB(a,b,b+d|0);if(!j)f=b;else{e
=a.o.data;f=b+1|0;e[b]=45;}o=100000000;p=0;while(p<m){if(o<=0)q=0;else{q=h/o|0;h=h%o|0;}e=a.o.data;d=f+1|0;e[f]=(48+q|0)&65535;k=k+(-1)|0;if(k)f=d;else{e=a.o.data;f=d+1|0;e[d]=46;}o=o/10|0;p=p+1|0;}if(i){e=a.o.data;d=f+1|0;e[f]=69;if(i>=0)f=d;else{i= -i;e=a.o.data;f=d+1|0;e[d]=45;}if(i<10)r=f;else{e=a.o.data;r=f+1|0;e[f]=(48+(i/10|0)|0)&65535;}a.o.data[r]=(48+(i%10|0)|0)&65535;}return a;}
function VD(b){var c,d,e,f;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;f=e*100|0;if(b%f|0)f=e;else c=c|2;if(!(b%(f*10|0)|0))c=c|1;return c;}
function F8(a,b){return a.fN(a.D,b);}
function F4(a,b,c){BB(a,b,b+1|0);a.o.data[b]=c;return a;}
function L6(a,b){return a.hP(a.D,b);}
function Km(a,b,c){return a.fA(b,c===null?B(16):c.e());}
function ES(a,b){var c,d;if(a.o.data.length>=b)return;if(a.o.data.length>=1073741823)c=2147483647;else{d=a.o.data.length*2|0;c=Bq(b,Bq(d,5));}a.o=EM(a.o,c);}
function EF(a){return E_(a.o,0,a.D);}
function FR(a){return a.D;}
function Ha(a,b){if(b>=0&&b<a.D)return a.o.data[b];G(Cq());}
function FZ(a,b,c,d){return a.e9(a.D,b,c,d);}
function EG(a,b,c,d,e){var f,g,h,i,j;BB(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.o.data;i=b+1|0;j=d+1|0;h[b]=g[d];b=i;d=j;}return a;}
function EU(a,b){return a.fW(b,0,b.data.length);}
function K5(a,b,c,d,e){var f,g,h,i;if(b>c)G(Bp(B(17)));while(b<c){f=d.data;g=e+1|0;h=a.o.data;i=b+1|0;f[e]=h[b];e=g;b=i;}}
function FE(a,b){a.D=b;}
function Le(a,b){var c,d,e;if(b>=0&&b<a.D){a.D=a.D-1|0;while(b<a.D){c=a.o.data;d=a.o.data;e=b+1|0;c[b]=d[e];b=e;}return a;}G(Ff());}
function LG(a,b,c){var d,e,f,g,h,i;d=BW(b,c);if(d<=0&&b<=a.D){if(!d)return a;e=a.D-c|0;a.D=a.D-(c-b|0)|0;f=0;while(f<e){g=a.o.data;d=b+1|0;h=a.o.data;i=c+1|0;g[b]=h[c];f=f+1|0;b=d;c=i;}return a;}G(Ff());}
function BB(a,b,c){var d,e;d=a.D-b|0;a.b0((a.D+c|0)-b|0);e=d-1|0;while(e>=0){a.o.data[c+e|0]=a.o.data[b+e|0];e=e+(-1)|0;}a.D=a.D+(c-b|0)|0;}
function Dd(){}
function GR(){CG.call(this);}
function GS(a){var b=new GR();Zo(b,a);return b;}
function J(){var a=new GR();YI(a);return a;}
function Zo(a,b){EJ(a,b);}
function YI(a){EY(a);}
function Op(a,b){Ia(a,b);return a;}
function Pe(a,b){Il(a,b);return a;}
function Xf(a,b){Kh(a,b);return a;}
function Ob(a,b){F8(a,b);return a;}
function Tj(a,b,c,d){FZ(a,b,c,d);return a;}
function UY(a,b){EU(a,b);return a;}
function Ox(a,b){L6(a,b);return a;}
function Vp(a,b,c){Hy(a,b,c);return a;}
function S0(a,b,c,d,e){EG(a,b,c,d,e);return a;}
function Zt(a,b,c){Km(a,b,c);return a;}
function P4(a,b,c){F4(a,b,c);return a;}
function XN(a,b,c){LG(a,b,c);return a;}
function VI(a,b){Le(a,b);return a;}
function ZM(a,b,c){J5(a,b,c);return a;}
function ZZ(a,b){FE(a,b);}
function UP(a,b,c,d,e){K5(a,b,c,d,e);}
function ZE(a,b,c,d,e){return a.lS(b,c,d,e);}
function Ub(a,b,c,d){return a.jN(b,c,d);}
function Q3(a){return FR(a);}
function RD(a){return EF(a);}
function Z4(a,b){ES(a,b);}
function Ou(a,b,c){return a.j5(b,c);}
function NA(a,b,c){return a.li(b,c);}
function Xi(a,b,c){return a.k9(b,c);}
function AAq(a,b,c){return a.j1(b,c);}
function DF(){Ee.call(this);}
function AAQ(){var a=new DF();Mb(a);return a;}
function Mb(a){Jo(a);}
function KL(a){return Jg(a).I(48,57);}
function KZ(){T.call(this);}
function ABJ(){var a=new KZ();ZO(a);return a;}
function ZO(a){BA(a);}
function KM(){var a=this;V.call(a);a.fE=null;a.e7=null;}
function E0(a,b){var c=new KM();YZ(c,a,b);return c;}
function YZ(a,b,c){BC(a);a.fE=b;a.e7=c;}
function Qf(a,b,c,d){var e;e=a.fE.b(b,c,d);if(e<0)e=a.e7.b(b,c,d);if(e>=0)return e;return (-1);}
function Qv(a,b){a.f=b;a.e7.s(b);a.fE.s(b);}
function RT(a,b){return 1;}
function Rc(a,b){return 1;}
function Ga(){}
function Dt(){}
function E7(){}
function BU(){C.call(this);}
function AEH(){var a=new BU();CR(a);return a;}
function CR(a){L(a);}
function OO(a,b,c,d){var e,f,g;e=0;while(e<d){f=b.data;g=c+1|0;a.e1(f[c]);e=e+1|0;c=g;}}
function Mz(){var a=this;BU.call(a);a.b4=null;a.cq=0;}
function AAU(){var a=new Mz();ZY(a);return a;}
function AEI(a){var b=new Mz();H6(b,a);return b;}
function ZY(a){H6(a,32);}
function H6(a,b){CR(a);a.b4=$rt_createByteArray(b);}
function OM(a,b){var c,d;ER(a,a.cq+1|0);c=a.b4.data;d=a.cq;a.cq=d+1|0;c[d]=b<<24>>24;}
function Qa(a,b,c,d){var e,f,g,h,i;ER(a,a.cq+d|0);e=0;while(e<d){f=b.data;g=a.b4.data;h=a.cq;a.cq=h+1|0;i=c+1|0;g[h]=f[c];e=e+1|0;c=i;}}
function ER(a,b){var c;if(a.b4.data.length<b){c=Bq(b,(a.b4.data.length*3|0)/2|0);a.b4=FQ(a.b4,c);}}
function W5(a,b){return ABE(a.b4,0,a.cq,b);}
function GU(){var a=this;V.call(a);a.ia=null;a.js=0;}
function AAT(a){var b=new GU();Ww(b,a);return b;}
function Ww(a,b){BC(a);a.ia=b.c6();a.js=b.G;}
function Vu(a,b){a.f=b;}
function XX(a,b,c,d){var e,f,g,h,i,j,k;e=d.bv();f=d.q();g=b+1|0;h=BW(g,f);if(h>0){d.by=1;return (-1);}i=c.d(b);if(!a.ia.j(i))return (-1);if(Bm(i)){if(h<0){j=c.d(g);if(Bt(j))return (-1);}}else if(Bt(i)&&b>e){k=c.d(b-1|0);if(Bm(k))return (-1);}return a.f.b(g,c,d);}
function Mn(){Bv.call(this);}
function ACK(a,b,c){var d=new Mn();R8(d,a,b,c);return d;}
function R8(a,b,c,d){Cz(a,b,c,d);}
function Y_(a,b,c,d){var e;if(!a.w.x(d))return a.f.b(b,c,d);e=a.f.b(b,c,d);if(e>=0)return e;return a.w.b(b,c,d);}
function Cp(){Bs.call(this);}
function ADi(){var a=new Cp();Wf(a);return a;}
function Wf(a){Cl(a,0);}
function Xs(a,b,c,d){if(d.ih()!=1&&b!=d.q())return (-1);d.jL();d.fy(0,b);return b;}
function Ic(){B9.call(this);}
function TE(a){var b=new Ic();Or(b,a);return b;}
function Or(a,b){Ih(a,b);}
function J7(){Bv.call(this);}
function AA3(a,b,c){var d=new J7();Zr(d,a,b,c);return d;}
function Zr(a,b,c,d){Cz(a,b,c,d);Ea();b.s(AEC);}
function OL(a,b,c,d){var e,f;e=a.w.b(b,c,d);if(e<0)return (-1);if(e>b){while(true){f=a.w.b(e,c,d);if(f<=e)break;e=f;}b=e;}return a.f.b(b,c,d);}
function Ks(){Y.call(this);}
function Cu(a){var b=new Ks();Oq(b,a);return b;}
function Oq(a,b){Hq(a,b);a.P=0;}
function Uz(a,b,c){return 0;}
function Vs(a,b,c,d){var e,f,g,h,i;e=d.q();f=d.bv();while(true){g=BW(b,e);if(g>0)return (-1);if(g<0){h=c.d(b);if(Bt(h)&&b>f){i=c.d(b-1|0);if(Bm(i)){b=b+1|0;continue;}}}if(a.f.b(b,c,d)>=0)break;b=b+1|0;}return b;}
function SC(a,b,c,d,e){var f,g,h,i;f=e.q();g=e.bv();while(true){if(c<b)return (-1);if(c<f){h=d.d(c);if(Bt(h)&&c>g){i=d.d(c-1|0);if(Bm(i)){c=c+(-1)|0;continue;}}}if(a.f.b(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function Pa(a,b){return 0;}
function Im(){CG.call(this);}
function SS(){var a=new Im();XD(a);return a;}
function XD(a){EY(a);}
function Vv(a,b){F8(a,b);return a;}
function Y$(a,b,c,d){FZ(a,b,c,d);return a;}
function UD(a,b){EU(a,b);return a;}
function Oi(a,b,c,d,e){EG(a,b,c,d,e);return a;}
function XM(a,b,c){F4(a,b,c);return a;}
function OS(a,b){FE(a,b);}
function VH(a,b,c,d,e){return a.jG(b,c,d,e);}
function Rh(a,b,c,d){return a.lT(b,c,d);}
function NU(a,b){return Ha(a,b);}
function ZT(a){return FR(a);}
function Rx(a){return EF(a);}
function R2(a,b){ES(a,b);}
function Vy(a,b,c){return a.lH(b,c);}
function CC(){var a=this;C.call(a);a.fX=0;a.K=0;a.bI=0;a.db=0;}
function AEJ(a){var b=new CC();Fy(b,a);return b;}
function Fy(a,b){L(a);a.db=(-1);a.fX=b;a.bI=b;}
function Kd(a){return a.fX;}
function BG(a){return a.K;}
function FF(a,b){if(b>=0&&b<=a.bI){a.K=b;if(b<a.db)a.db=0;return a;}G(By(J().a(B(18)).n(b).a(B(19)).n(a.bI).a(B(20)).e()));}
function KE(a){return a.bI;}
function IW(a){a.K=0;a.bI=a.fX;a.db=(-1);return a;}
function ME(a){a.bI=a.K;a.K=0;a.db=(-1);return a;}
function W(a){return a.bI-a.K|0;}
function BR(a){return a.K>=a.bI?0:1;}
function Gs(){I.call(this);this.jo=null;}
function AAZ(a){var b=new Gs();Zf(b,a);return b;}
function Zf(a,b){a.jo=b;P(a);}
function YT(a,b){return KF(b);}
function Da(){C.call(this);}
var AEK=null;var AEL=null;var AEM=null;function AB7(){AB7=Bc(Da);Uo();}
function ADn(){var a=new Da();KH(a);return a;}
function KH(a){AB7();L(a);}
function LC(a,b){var c,d,e;c=0;while(true){if(c>=AEM.data.length)G(AA5(B(21),B(21),b));d=AEM.data[c];e=d.data;if(b.bQ(e[0]))break;c=c+1|0;}return e[1];}
function Uo(){var b,c,d,e;AEK=ACD();AEL=ADF();b=E($rt_arraycls(C),194);c=b.data;d=E(C,2);e=d.data;e[0]=B(22);e[1]=ADD();c[0]=d;d=E(C,2);e=d.data;e[0]=B(23);e[1]=AAV();c[1]=d;d=E(C,2);e=d.data;e[0]=B(24);e[1]=ACv();c[2]=d;d=E(C,2);e=d.data;e[0]=B(25);e[1]=AC8();c[3]=d;d=E(C,2);e=d.data;e[0]=B(26);e[1]=AEL;c[4]=d;d=E(C,2);e=d.data;e[0]=B(27);e[1]=AAQ();c[5]=d;d=E(C,2);e=d.data;e[0]=B(28);e[1]=ADx();c[6]=d;d=E(C,2);e=d.data;e[0]=B(29);e[1]=ABn();c[7]=d;d=E(C,2);e=d.data;e[0]=B(30);e[1]=AA9();c[8]=d;d=E(C,2);e=
d.data;e[0]=B(31);e[1]=ABA();c[9]=d;d=E(C,2);e=d.data;e[0]=B(32);e[1]=ACx();c[10]=d;d=E(C,2);e=d.data;e[0]=B(33);e[1]=ABs();c[11]=d;d=E(C,2);e=d.data;e[0]=B(34);e[1]=ABM();c[12]=d;d=E(C,2);e=d.data;e[0]=B(35);e[1]=AAR();c[13]=d;d=E(C,2);e=d.data;e[0]=B(36);e[1]=ACX();c[14]=d;d=E(C,2);e=d.data;e[0]=B(37);e[1]=ACp();c[15]=d;d=E(C,2);e=d.data;e[0]=B(38);e[1]=AAO();c[16]=d;d=E(C,2);e=d.data;e[0]=B(39);e[1]=ACj();c[17]=d;d=E(C,2);e=d.data;e[0]=B(40);e[1]=AAP();c[18]=d;d=E(C,2);e=d.data;e[0]=B(41);e[1]=ABH();c[19]
=d;d=E(C,2);e=d.data;e[0]=B(42);e[1]=ADj();c[20]=d;d=E(C,2);e=d.data;e[0]=B(43);e[1]=AB0();c[21]=d;d=E(C,2);e=d.data;e[0]=B(44);e[1]=AA1();c[22]=d;d=E(C,2);e=d.data;e[0]=B(45);e[1]=ACs();c[23]=d;d=E(C,2);e=d.data;e[0]=B(46);e[1]=ACh();c[24]=d;d=E(C,2);e=d.data;e[0]=B(47);e[1]=ADd();c[25]=d;d=E(C,2);e=d.data;e[0]=B(48);e[1]=ABG();c[26]=d;d=E(C,2);e=d.data;e[0]=B(49);e[1]=ABZ();c[27]=d;d=E(C,2);e=d.data;e[0]=B(50);e[1]=AEK;c[28]=d;d=E(C,2);e=d.data;e[0]=B(51);e[1]=ABb();c[29]=d;d=E(C,2);e=d.data;e[0]=B(52);e[1]
=ABp();c[30]=d;d=E(C,2);e=d.data;e[0]=B(53);e[1]=AEK;c[31]=d;d=E(C,2);e=d.data;e[0]=B(54);e[1]=AAK();c[32]=d;d=E(C,2);e=d.data;e[0]=B(55);e[1]=AEL;c[33]=d;d=E(C,2);e=d.data;e[0]=B(56);e[1]=ACY();c[34]=d;d=E(C,2);e=d.data;e[0]=B(57);e[1]=H(0,127);c[35]=d;d=E(C,2);e=d.data;e[0]=B(58);e[1]=H(128,255);c[36]=d;d=E(C,2);e=d.data;e[0]=B(59);e[1]=H(256,383);c[37]=d;d=E(C,2);e=d.data;e[0]=B(60);e[1]=H(384,591);c[38]=d;d=E(C,2);e=d.data;e[0]=B(61);e[1]=H(592,687);c[39]=d;d=E(C,2);e=d.data;e[0]=B(62);e[1]=H(688,767);c[40]
=d;d=E(C,2);e=d.data;e[0]=B(63);e[1]=H(768,879);c[41]=d;d=E(C,2);e=d.data;e[0]=B(64);e[1]=H(880,1023);c[42]=d;d=E(C,2);e=d.data;e[0]=B(65);e[1]=H(1024,1279);c[43]=d;d=E(C,2);e=d.data;e[0]=B(66);e[1]=H(1280,1327);c[44]=d;d=E(C,2);e=d.data;e[0]=B(67);e[1]=H(1328,1423);c[45]=d;d=E(C,2);e=d.data;e[0]=B(68);e[1]=H(1424,1535);c[46]=d;d=E(C,2);e=d.data;e[0]=B(69);e[1]=H(1536,1791);c[47]=d;d=E(C,2);e=d.data;e[0]=B(70);e[1]=H(1792,1871);c[48]=d;d=E(C,2);e=d.data;e[0]=B(71);e[1]=H(1872,1919);c[49]=d;d=E(C,2);e=d.data;e[0]
=B(72);e[1]=H(1920,1983);c[50]=d;d=E(C,2);e=d.data;e[0]=B(73);e[1]=H(2304,2431);c[51]=d;d=E(C,2);e=d.data;e[0]=B(74);e[1]=H(2432,2559);c[52]=d;d=E(C,2);e=d.data;e[0]=B(75);e[1]=H(2560,2687);c[53]=d;d=E(C,2);e=d.data;e[0]=B(76);e[1]=H(2688,2815);c[54]=d;d=E(C,2);e=d.data;e[0]=B(77);e[1]=H(2816,2943);c[55]=d;d=E(C,2);e=d.data;e[0]=B(78);e[1]=H(2944,3071);c[56]=d;d=E(C,2);e=d.data;e[0]=B(79);e[1]=H(3072,3199);c[57]=d;d=E(C,2);e=d.data;e[0]=B(80);e[1]=H(3200,3327);c[58]=d;d=E(C,2);e=d.data;e[0]=B(81);e[1]=H(3328,
3455);c[59]=d;d=E(C,2);e=d.data;e[0]=B(82);e[1]=H(3456,3583);c[60]=d;d=E(C,2);e=d.data;e[0]=B(83);e[1]=H(3584,3711);c[61]=d;d=E(C,2);e=d.data;e[0]=B(84);e[1]=H(3712,3839);c[62]=d;d=E(C,2);e=d.data;e[0]=B(85);e[1]=H(3840,4095);c[63]=d;d=E(C,2);e=d.data;e[0]=B(86);e[1]=H(4096,4255);c[64]=d;d=E(C,2);e=d.data;e[0]=B(87);e[1]=H(4256,4351);c[65]=d;d=E(C,2);e=d.data;e[0]=B(88);e[1]=H(4352,4607);c[66]=d;d=E(C,2);e=d.data;e[0]=B(89);e[1]=H(4608,4991);c[67]=d;d=E(C,2);e=d.data;e[0]=B(90);e[1]=H(4992,5023);c[68]=d;d=E(C,
2);e=d.data;e[0]=B(91);e[1]=H(5024,5119);c[69]=d;d=E(C,2);e=d.data;e[0]=B(92);e[1]=H(5120,5759);c[70]=d;d=E(C,2);e=d.data;e[0]=B(93);e[1]=H(5760,5791);c[71]=d;d=E(C,2);e=d.data;e[0]=B(94);e[1]=H(5792,5887);c[72]=d;d=E(C,2);e=d.data;e[0]=B(95);e[1]=H(5888,5919);c[73]=d;d=E(C,2);e=d.data;e[0]=B(96);e[1]=H(5920,5951);c[74]=d;d=E(C,2);e=d.data;e[0]=B(97);e[1]=H(5952,5983);c[75]=d;d=E(C,2);e=d.data;e[0]=B(98);e[1]=H(5984,6015);c[76]=d;d=E(C,2);e=d.data;e[0]=B(99);e[1]=H(6016,6143);c[77]=d;d=E(C,2);e=d.data;e[0]=
B(100);e[1]=H(6144,6319);c[78]=d;d=E(C,2);e=d.data;e[0]=B(101);e[1]=H(6400,6479);c[79]=d;d=E(C,2);e=d.data;e[0]=B(102);e[1]=H(6480,6527);c[80]=d;d=E(C,2);e=d.data;e[0]=B(103);e[1]=H(6528,6623);c[81]=d;d=E(C,2);e=d.data;e[0]=B(104);e[1]=H(6624,6655);c[82]=d;d=E(C,2);e=d.data;e[0]=B(105);e[1]=H(6656,6687);c[83]=d;d=E(C,2);e=d.data;e[0]=B(106);e[1]=H(7424,7551);c[84]=d;d=E(C,2);e=d.data;e[0]=B(107);e[1]=H(7552,7615);c[85]=d;d=E(C,2);e=d.data;e[0]=B(108);e[1]=H(7616,7679);c[86]=d;d=E(C,2);e=d.data;e[0]=B(109);e[1]
=H(7680,7935);c[87]=d;d=E(C,2);e=d.data;e[0]=B(110);e[1]=H(7936,8191);c[88]=d;d=E(C,2);e=d.data;e[0]=B(111);e[1]=H(8192,8303);c[89]=d;d=E(C,2);e=d.data;e[0]=B(112);e[1]=H(8304,8351);c[90]=d;d=E(C,2);e=d.data;e[0]=B(113);e[1]=H(8352,8399);c[91]=d;d=E(C,2);e=d.data;e[0]=B(114);e[1]=H(8400,8447);c[92]=d;d=E(C,2);e=d.data;e[0]=B(115);e[1]=H(8448,8527);c[93]=d;d=E(C,2);e=d.data;e[0]=B(116);e[1]=H(8528,8591);c[94]=d;d=E(C,2);e=d.data;e[0]=B(117);e[1]=H(8592,8703);c[95]=d;d=E(C,2);e=d.data;e[0]=B(118);e[1]=H(8704,
8959);c[96]=d;d=E(C,2);e=d.data;e[0]=B(119);e[1]=H(8960,9215);c[97]=d;d=E(C,2);e=d.data;e[0]=B(120);e[1]=H(9216,9279);c[98]=d;d=E(C,2);e=d.data;e[0]=B(121);e[1]=H(9280,9311);c[99]=d;d=E(C,2);e=d.data;e[0]=B(122);e[1]=H(9312,9471);c[100]=d;d=E(C,2);e=d.data;e[0]=B(123);e[1]=H(9472,9599);c[101]=d;d=E(C,2);e=d.data;e[0]=B(124);e[1]=H(9600,9631);c[102]=d;d=E(C,2);e=d.data;e[0]=B(125);e[1]=H(9632,9727);c[103]=d;d=E(C,2);e=d.data;e[0]=B(126);e[1]=H(9728,9983);c[104]=d;d=E(C,2);e=d.data;e[0]=B(127);e[1]=H(9984,10175);c[105]
=d;d=E(C,2);e=d.data;e[0]=B(128);e[1]=H(10176,10223);c[106]=d;d=E(C,2);e=d.data;e[0]=B(129);e[1]=H(10224,10239);c[107]=d;d=E(C,2);e=d.data;e[0]=B(130);e[1]=H(10240,10495);c[108]=d;d=E(C,2);e=d.data;e[0]=B(131);e[1]=H(10496,10623);c[109]=d;d=E(C,2);e=d.data;e[0]=B(132);e[1]=H(10624,10751);c[110]=d;d=E(C,2);e=d.data;e[0]=B(133);e[1]=H(10752,11007);c[111]=d;d=E(C,2);e=d.data;e[0]=B(134);e[1]=H(11008,11263);c[112]=d;d=E(C,2);e=d.data;e[0]=B(135);e[1]=H(11264,11359);c[113]=d;d=E(C,2);e=d.data;e[0]=B(136);e[1]=H(11392,
11519);c[114]=d;d=E(C,2);e=d.data;e[0]=B(137);e[1]=H(11520,11567);c[115]=d;d=E(C,2);e=d.data;e[0]=B(138);e[1]=H(11568,11647);c[116]=d;d=E(C,2);e=d.data;e[0]=B(139);e[1]=H(11648,11743);c[117]=d;d=E(C,2);e=d.data;e[0]=B(140);e[1]=H(11776,11903);c[118]=d;d=E(C,2);e=d.data;e[0]=B(141);e[1]=H(11904,12031);c[119]=d;d=E(C,2);e=d.data;e[0]=B(142);e[1]=H(12032,12255);c[120]=d;d=E(C,2);e=d.data;e[0]=B(143);e[1]=H(12272,12287);c[121]=d;d=E(C,2);e=d.data;e[0]=B(144);e[1]=H(12288,12351);c[122]=d;d=E(C,2);e=d.data;e[0]=B(145);e[1]
=H(12352,12447);c[123]=d;d=E(C,2);e=d.data;e[0]=B(146);e[1]=H(12448,12543);c[124]=d;d=E(C,2);e=d.data;e[0]=B(147);e[1]=H(12544,12591);c[125]=d;d=E(C,2);e=d.data;e[0]=B(148);e[1]=H(12592,12687);c[126]=d;d=E(C,2);e=d.data;e[0]=B(149);e[1]=H(12688,12703);c[127]=d;d=E(C,2);e=d.data;e[0]=B(150);e[1]=H(12704,12735);c[128]=d;d=E(C,2);e=d.data;e[0]=B(151);e[1]=H(12736,12783);c[129]=d;d=E(C,2);e=d.data;e[0]=B(152);e[1]=H(12784,12799);c[130]=d;d=E(C,2);e=d.data;e[0]=B(153);e[1]=H(12800,13055);c[131]=d;d=E(C,2);e=d.data;e[0]
=B(154);e[1]=H(13056,13311);c[132]=d;d=E(C,2);e=d.data;e[0]=B(155);e[1]=H(13312,19893);c[133]=d;d=E(C,2);e=d.data;e[0]=B(156);e[1]=H(19904,19967);c[134]=d;d=E(C,2);e=d.data;e[0]=B(157);e[1]=H(19968,40959);c[135]=d;d=E(C,2);e=d.data;e[0]=B(158);e[1]=H(40960,42127);c[136]=d;d=E(C,2);e=d.data;e[0]=B(159);e[1]=H(42128,42191);c[137]=d;d=E(C,2);e=d.data;e[0]=B(160);e[1]=H(42752,42783);c[138]=d;d=E(C,2);e=d.data;e[0]=B(161);e[1]=H(43008,43055);c[139]=d;d=E(C,2);e=d.data;e[0]=B(162);e[1]=H(44032,55203);c[140]=d;d=E(C,
2);e=d.data;e[0]=B(163);e[1]=H(55296,56191);c[141]=d;d=E(C,2);e=d.data;e[0]=B(164);e[1]=H(56192,56319);c[142]=d;d=E(C,2);e=d.data;e[0]=B(165);e[1]=H(56320,57343);c[143]=d;d=E(C,2);e=d.data;e[0]=B(166);e[1]=H(57344,63743);c[144]=d;d=E(C,2);e=d.data;e[0]=B(167);e[1]=H(63744,64255);c[145]=d;d=E(C,2);e=d.data;e[0]=B(168);e[1]=H(64256,64335);c[146]=d;d=E(C,2);e=d.data;e[0]=B(169);e[1]=H(64336,65023);c[147]=d;d=E(C,2);e=d.data;e[0]=B(170);e[1]=H(65024,65039);c[148]=d;d=E(C,2);e=d.data;e[0]=B(171);e[1]=H(65040,65055);c[149]
=d;d=E(C,2);e=d.data;e[0]=B(172);e[1]=H(65056,65071);c[150]=d;d=E(C,2);e=d.data;e[0]=B(173);e[1]=H(65072,65103);c[151]=d;d=E(C,2);e=d.data;e[0]=B(174);e[1]=H(65104,65135);c[152]=d;d=E(C,2);e=d.data;e[0]=B(175);e[1]=H(65136,65279);c[153]=d;d=E(C,2);e=d.data;e[0]=B(176);e[1]=H(65280,65519);c[154]=d;d=E(C,2);e=d.data;e[0]=B(177);e[1]=H(0,1114111);c[155]=d;d=E(C,2);e=d.data;e[0]=B(178);e[1]=ABu();c[156]=d;d=E(C,2);e=d.data;e[0]=B(179);e[1]=S(0,1);c[157]=d;d=E(C,2);e=d.data;e[0]=B(180);e[1]=Dc(62,1);c[158]=d;d=E(C,
2);e=d.data;e[0]=B(181);e[1]=S(1,1);c[159]=d;d=E(C,2);e=d.data;e[0]=B(182);e[1]=S(2,1);c[160]=d;d=E(C,2);e=d.data;e[0]=B(183);e[1]=S(3,0);c[161]=d;d=E(C,2);e=d.data;e[0]=B(184);e[1]=S(4,0);c[162]=d;d=E(C,2);e=d.data;e[0]=B(185);e[1]=S(5,1);c[163]=d;d=E(C,2);e=d.data;e[0]=B(186);e[1]=Dc(448,1);c[164]=d;d=E(C,2);e=d.data;e[0]=B(187);e[1]=S(6,1);c[165]=d;d=E(C,2);e=d.data;e[0]=B(188);e[1]=S(7,0);c[166]=d;d=E(C,2);e=d.data;e[0]=B(189);e[1]=S(8,1);c[167]=d;d=E(C,2);e=d.data;e[0]=B(190);e[1]=Dc(3584,1);c[168]=d;d
=E(C,2);e=d.data;e[0]=B(191);e[1]=S(9,1);c[169]=d;d=E(C,2);e=d.data;e[0]=B(192);e[1]=S(10,1);c[170]=d;d=E(C,2);e=d.data;e[0]=B(193);e[1]=S(11,1);c[171]=d;d=E(C,2);e=d.data;e[0]=B(194);e[1]=Dc(28672,0);c[172]=d;d=E(C,2);e=d.data;e[0]=B(195);e[1]=S(12,0);c[173]=d;d=E(C,2);e=d.data;e[0]=B(196);e[1]=S(13,0);c[174]=d;d=E(C,2);e=d.data;e[0]=B(197);e[1]=S(14,0);c[175]=d;d=E(C,2);e=d.data;e[0]=B(198);e[1]=ADo(983040,1,1);c[176]=d;d=E(C,2);e=d.data;e[0]=B(199);e[1]=S(15,0);c[177]=d;d=E(C,2);e=d.data;e[0]=B(200);e[1]
=S(16,1);c[178]=d;d=E(C,2);e=d.data;e[0]=B(201);e[1]=S(18,1);c[179]=d;d=E(C,2);e=d.data;e[0]=B(202);e[1]=ADV(19,0,1);c[180]=d;d=E(C,2);e=d.data;e[0]=B(203);e[1]=Dc(1643118592,1);c[181]=d;d=E(C,2);e=d.data;e[0]=B(204);e[1]=S(20,0);c[182]=d;d=E(C,2);e=d.data;e[0]=B(205);e[1]=S(21,0);c[183]=d;d=E(C,2);e=d.data;e[0]=B(206);e[1]=S(22,0);c[184]=d;d=E(C,2);e=d.data;e[0]=B(207);e[1]=S(23,0);c[185]=d;d=E(C,2);e=d.data;e[0]=B(208);e[1]=S(24,1);c[186]=d;d=E(C,2);e=d.data;e[0]=B(209);e[1]=Dc(2113929216,1);c[187]=d;d=E(C,
2);e=d.data;e[0]=B(210);e[1]=S(25,1);c[188]=d;d=E(C,2);e=d.data;e[0]=B(211);e[1]=S(26,0);c[189]=d;d=E(C,2);e=d.data;e[0]=B(212);e[1]=S(27,0);c[190]=d;d=E(C,2);e=d.data;e[0]=B(213);e[1]=S(28,1);c[191]=d;d=E(C,2);e=d.data;e[0]=B(214);e[1]=S(29,0);c[192]=d;d=E(C,2);e=d.data;e[0]=B(215);e[1]=S(30,0);c[193]=d;AEM=b;}
function CN(){var a=this;C.call(a);a.g7=null;a.kL=0;}
function AEN(a,b){var c=new CN();FS(c,a,b);return c;}
function FS(a,b,c){L(a);a.g7=b;a.kL=c;}
function MK(a){return a.g7;}
function J6(b,c){var d,e,f,g,h;d=b.j7();if(d===null)G(By(J().a(B(216)).a(b.bW()).e()));e=d.data;f=e.length;g=0;while(true){if(g>=f)G(By(J().a(B(217)).a(b.bW()).a(B(218)).ic(c).a(B(219)).e()));h=e[g];if(MK(h).bQ(c))break;g=g+1|0;}return h;}
function B4(){CN.call(this);}
var AEO=null;var AEP=null;var AEQ=null;var AER=null;var AES=null;function Fw(){Fw=Bc(B4);Si();}
function FO(a,b){var c=new B4();HY(c,a,b);return c;}
function WC(){Fw();return AES.dF();}
function GZ(b){Fw();return J6(D(B4),b);}
function HY(a,b,c){Fw();FS(a,b,c);}
function Si(){var b,c;AEO=FO(B(220),0);AEP=FO(B(221),1);AEQ=FO(B(222),2);AER=FO(B(223),3);b=E(B4,4);c=b.data;c[0]=AEO;c[1]=AEP;c[2]=AEQ;c[3]=AER;AES=b;}
function Gl(){K.call(this);}
function AA1(){var a=new Gl();Sj(a);return a;}
function Sj(a){Q(a);}
function Wr(a){var b;b=ACa(a);b.y=1;return b;}
function Cj(){var a=this;V.call(a);a.c$=0;a.fu=null;a.eN=null;a.eE=0;}
function ADR(a,b){var c=new Cj();ET(c,a,b);return c;}
function ET(a,b,c){BC(a);a.c$=1;a.eN=b;a.eE=c;}
function YK(a,b){a.f=b;}
function Qw(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;e=$rt_createIntArray(4);f=0;g=d.q();if(b>=g)return (-1);h=a.f$(b,c,g);i=b+a.c$|0;j=KV(h);if(j===null){k=e.data;l=1;k[f]=h;}else{l=j.data.length;Gp(j,0,e,0,l);l=f+l|0;}a:{if(i<g){m=a.f$(i,c,g);while(l<4){if(!Q$(m)){k=e.data;n=l+1|0;k[l]=m;}else{k=KV(m).data;if(k.length!=2){o=e.data;n=l+1|0;o[l]=k[0];}else{o=e.data;m=l+1|0;o[l]=k[0];n=m+1|0;o[m]=k[1];}}i=i+a.c$|0;if(i>=g){l=n;break a;}m=a.f$(i,c,g);l=n;}}}if(l!=a.eE)return (-1);p=0;while(true){if(p>=l)return a.f.b(i,
c,d);if(e.data[p]!=a.eN.data[p])break;p=p+1|0;}return (-1);}
function FM(a){var b,c;if(a.fu===null){b=J();c=0;while(c<a.eE){b.d_(CJ(a.eN.data[c]));c=c+1|0;}a.fu=b.e();}return a.fu;}
function Yy(a,b,c,d){var e,f,g,h,i;a.c$=1;if(b>=(d-1|0))e=c.d(b);else{f=b+1|0;e=c.d(b);g=c.d(f);if(CT(e,g)){h=$rt_createCharArray(2);i=h.data;i[0]=e;i[1]=g;e=Iv(h,0);a.c$=2;}}return e;}
function ZD(a,b){var c,d;a:{if(b instanceof Cj){c=b;if(!FM(c).bQ(FM(a))){d=0;break a;}}d=1;}return d;}
function SB(a,b){return 1;}
function H8(){Cj.call(this);}
function ADK(a,b){var c=new H8();RP(c,a,b);return c;}
function RP(a,b,c){ET(a,b,c);}
function B$(){CN.call(this);}
var AET=null;var AEU=null;var AEV=null;var AEW=null;function DT(){DT=Bc(B$);Qi();}
function KK(a,b){var c=new B$();He(c,a,b);return c;}
function RF(){DT();return AEW.dF();}
function Ho(b){DT();return J6(D(B$),b);}
function He(a,b,c){DT();FS(a,b,c);}
function Qi(){var b,c;AET=KK(B(224),0);AEU=KK(B(225),1);AEV=KK(B(226),2);b=E(B$,3);c=b.data;c[0]=AET;c[1]=AEU;c[2]=AEV;AEW=b;}
function CB(){CO.call(this);}
function AEX(a){var b=new CB();FL(b,a);return b;}
function FL(a,b){G2(a,b);}
function K6(){CB.call(this);}
function AEY(a){var b=new K6();SA(b,a);return b;}
function SA(a,b){FL(a,b);}
function Mx(){Bs.call(this);}
function AAW(){var a=new Mx();Nm(a);return a;}
function Nm(a){Cl(a,(-1));}
function ST(a,b,c,d){return b;}
function J8(){K.call(this);}
function ACv(){var a=new J8();QZ(a);return a;}
function QZ(a){Q(a);}
function UW(a){return Bx().I(0,127);}
function D$(){V.call(this);}
function ADr(a,b){var c=new D$();HN(c,a,b);return c;}
function HN(a,b,c){H1(a,b,c);}
function Qx(a,b,c,d){var e,f,g,h,i;e=d.bD(a.A);d.C(a.A,b);f=a.N.U();g=0;while(true){if(g>=f){d.C(a.A,e);return (-1);}h=a.N.E(g);i=h.b(b,c,d);if(i>=0)break;g=g+1|0;}return i;}
function Ta(a,b){var c;c=b.bD(a.A);return !c?0:1;}
function BT(){D$.call(this);}
function ABc(a,b){var c=new BT();Dh(c,a,b);return c;}
function Dh(a,b,c){HN(a,b,c);}
function TU(a,b,c,d){var e,f,g,h,i;e=d.bD(a.A);d.C(a.A,b);f=a.N.U();g=0;while(g<f){h=a.N.E(g);i=h.b(b,c,d);if(i>=0)return a.f.b(a.br.bt(),c,d);g=g+1|0;}d.C(a.A,e);return (-1);}
function Sy(a,b){a.f=b;}
function GJ(){BT.call(this);}
function ACd(a,b){var c=new GJ();Wx(c,a,b);return c;}
function Wx(a,b,c){Dh(a,b,c);}
function QI(a,b,c,d){var e,f,g,h;e=a.N.U();f=0;while(f<e){g=a.N.E(f);h=g.b(b,c,d);if(h>=0)return a.f.b(b,c,d);f=f+1|0;}return (-1);}
function WX(a,b){return 0;}
function Cy(){C.call(this);this.k4=null;}
function AEZ(){var a=new Cy();EN(a);return a;}
function AE0(a){var b=new Cy();Lr(b,a);return b;}
function EN(a){Lr(a,AB$());}
function Lr(a,b){L(a);a.k4=b;}
function M1(){var a=this;Cy.call(a);a.cW=null;a.ez=0;}
function EC(a){var b=new M1();TB(b,a);return b;}
function TB(a,b){EN(a);if(b!==null){a.cW=b;return;}G(RC());}
function Tx(a,b,c,d){var e,f,g,h,i,j;MP(a);if(a.ez>=a.cW.g())return (-1);e=U(a.cW.g()-a.ez|0,d);f=0;while(f<e){g=b.data;h=c+1|0;i=a.cW;j=a.ez;a.ez=j+1|0;g[c]=i.d(j);f=f+1|0;c=h;}return e;}
function Nn(a){a.cW=null;}
function MP(a){if(a.cW!==null)return;G(PD());}
function Kw(){BT.call(this);}
function AAS(a,b){var c=new Kw();Vo(c,a,b);return c;}
function Vo(a,b,c){Dh(a,b,c);}
function Q9(a,b,c,d){var e,f,g;e=a.N.U();f=0;while(true){if(f>=e)return a.f.b(b,c,d);g=a.N.E(f);if(g.b(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function VO(a,b){return 0;}
function Fn(){}
function HP(){var a=this;C.call(a);a.eh=0;a.io=0;a.it=0;a.gJ=0;a.dd=null;}
function ABi(a){var b=new HP();Rj(b,a);return b;}
function Rj(a,b){a.dd=b;L(a);a.io=a.dd.b_;a.it=a.dd.U();a.gJ=(-1);}
function O8(a){return a.eh>=a.it?0:1;}
function Wt(a){var b,c;Jm(a);a.gJ=a.eh;b=a.dd;c=a.eh;a.eh=c+1|0;return b.E(c);}
function Jm(a){if(a.io>=a.dd.b_)return;G(ABJ());}
function Fj(){}
function DJ(){}
function D5(){}
function Fx(){}
function D1(){}
function JJ(){}
function Me(b){var c,d;c=b.lastChild;while(c!==null){d=c.previousSibling;if(c.nodeType!=2)b.removeChild(c);c=d;}return b;}
function I0(){var a=this;C.call(a);a.gN=null;a.iL=Long_ZERO;a.iP=0.0;}
function ABw(a,b){var c=new I0();Yb(c,a,b);return c;}
function Pn(b,c){var d,e,$$je;a:{try{d=Ys(b,EC(c));}catch($$e){$$je=Bd($$e);if($$je instanceof BY){e=$$je;break a;}else{throw $$e;}}return d;}Ci().l(B(227));e.eu();return null;}
function Ys(b,c){var d,e,f,g,h,i,$$je;d=BX();e=Ej(c);a:{while(true){try{f=e.el();if(f===null)break a;g=B8(f,32);if(!f.ek(B(228))&&g.U()>=2){h=g.E(0).c5();if(h.g()==2&&b.cx(h.d(0))>=0&&b.cx(h.d(1))>=0){i=FU(g.E(1));d.bo(ABw(h,i));}}continue;}catch($$e){$$je=Bd($$e);f=$$je;}}e.bG();G(f);}e.bG();TP(d);return d;}
function TP(b){var c,d,e;c=Long_ZERO;d=b.X();while(d.Y()){e=d.V();c=Long_add(c,e.dp());}d=b.X();while(d.Y()){e=d.V();e.iP=Long_toNumber(e.dp())/Long_toNumber(c);}}
function Yb(a,b,c){L(a);a.gN=b;a.iL=c;}
function TS(a){return a.gN;}
function AAe(a){return a.iL;}
function X8(a){return a.iP;}
function B5(){}
function G$(){var a=this;Ct.call(a);a.gl=0;a.eo=0;}
function ABL(a,b){var c=new G$();Yx(c,a,b);return c;}
function Yx(a,b,c){Eo(a);a.gl=b;a.eo=c;}
function WE(a){return a.gl;}
function WY(a){return a.eo;}
function PC(a){return J().a(B(229)).n(a.gl).a(B(230)).a(a.eo==2147483647?B(21):ACS(a.eo).e()).a(B(231)).e();}
function DV(){T.call(this);}
function AC1(){var a=new DV();GI(a);return a;}
function GI(a){BA(a);}
function MJ(){DV.call(this);}
function Gu(){var a=new MJ();YX(a);return a;}
function YX(a){GI(a);}
function GN(){I.call(this);this.jq=null;}
function ABe(a){var b=new GN();U1(b,a);return b;}
function U1(a,b){a.jq=b;P(a);}
function QD(a,b){return Gt(b);}
function Hs(){C.call(this);}
function IZ(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(Cv());}return b.data.length;}
function I5(b,c){if(b===null)G(RC());if(b===D($rt_voidcls()))G(Cv());if(c<0)G(ADf());return X6(b.lu(),c);}
function X6(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
function Ij(){C.call(this);}
function ABf(){var a=new Ij();RG(a);return a;}
function RG(a){L(a);}
function JQ(){C.call(this);}
function D2(){DY.call(this);}
function AE1(a,b,c){var d=new D2();Ie(d,a,b,c);return d;}
function Ie(a,b,c,d){MO(a,b,c,d);}
function WI(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=$rt_createByteArray(U(W(b),512));e=0;f=0;g=$rt_createCharArray(U(W(c),512));a:{while(true){if((e+32|0)>f&&BR(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=U(W(b)+j|0,i.length);b.lm(d,j,f-j|0);e=0;}if(!BR(c)){if(!BR(b)&&e>=f){Bg();k=AEB;}else{Bg();k=AEz;}break a;}i=g.data;l=U(W(c),i.length);m=ABK(b,c);k=a.kp(d,e,f,g,0,l,m);e=m.iQ;if(k===null&&0==m.fa){Bg();k=AEB;}j=m.fa;c.kY(g,0,j);if(k!==null)break;}}b.eq(BG(b)-(f-e|0)|0);return k;}
function HJ(){D2.call(this);}
function ABY(a){var b=new HJ();Z0(b,a);return b;}
function Z0(a,b){Ie(a,b,0.3333333432674408,0.5);}
function Yd(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(h.dl())break a;Bg();i=AEB;break a;}n=k+1|0;o=j[k];if(!Ck(a,o)){c=n+(-2)|0;i=BL(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|o&63)&65535;k=n;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(h.dl())break a;Bg();i=AEB;break a;}p=k+1|0;o=j[k];k=p+1|0;q=j[p];if(!Ck(a,o))break b;if(!Ck(a,q))break b;r
=((l&15)<<12|(o&63)<<6|q&63)&65535;if(D3(r)){c=k+(-3)|0;i=BL(3);break a;}j=e.data;m=f+1|0;j[f]=r;}else{if((l&248)!=240){c=k+(-1)|0;i=BL(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(h.dl())break a;Bg();i=AEB;break a;}if((f+2|0)>g){c=k+(-1)|0;if(h.dB(2))break a;Bg();i=AEz;break a;}p=k+1|0;o=j[k];m=p+1|0;q=j[p];k=m+1|0;s=j[m];if(!Ck(a,o))break c;if(!Ck(a,q))break c;if(!Ck(a,s))break c;j=e.data;t=(l&7)<<18|(o&63)<<12|(q&63)<<6|s&63;p=f+1|0;j[f]=CQ(t);m=p+1|0;j[p]=CF(t);}c=k;f=m;}break a;}c=k+(-3)|0;i=BL(1);break a;}c
=k+(-3)|0;i=BL(1);}h.f9(c);h.eL(f);return i;}
function Ck(a,b){return (b&192)!=128?0:1;}
function H3(){CB.call(this);}
function AE2(a){var b=new H3();R6(b,a);return b;}
function R6(a,b){FL(a,b);}
function H2(){K.call(this);}
function ACj(){var a=new H2();R7(a);return a;}
function R7(a){Q(a);}
function Uf(a){var b;b=ABj(a);b.y=1;return b;}
function FB(){}
function DA(){}
function Dl(){C.call(this);}
function AE3(){var a=new Dl();Lz(a);return a;}
function Lz(a){L(a);}
function UX(a,b){var c,d,e,f;c=b.data;d=a.U();e=c.length;if(e<d)b=I5(Cf(b).eB(),d);else while(d<e){c[d]=null;d=d+1|0;}d=0;f=a.X();while(f.Y()){c=b.data;e=d+1|0;c[d]=f.V();d=e;}return b;}
function Nc(){Bw.call(this);}
function ACe(a,b,c){var d=new Nc();SK(d,a,b,c);return d;}
function SK(a,b,c,d){Cr(a,b,c,d);}
function PA(a,b,c,d){var e;a:{while(true){if((b+a.B.ba()|0)>d.q())break a;e=a.B.H(b,c);if(e<1)break;b=b+e|0;}}return a.f.b(b,c,d);}
function Jp(){var a=this;C.call(a);a.gy=null;a.hU=null;a.iQ=0;a.fa=0;}
function ABK(a,b){var c=new Jp();Pm(c,a,b);return c;}
function Pm(a,b,c){L(a);a.gy=b;a.hU=c;}
function Ph(a){return BR(a.gy);}
function Ri(a,b){return W(a.hU)<b?0:1;}
function WW(a,b){a.iQ=b;}
function S3(a,b){a.fa=b;}
function JT(){C.call(this);}
function Oe(b,c){var d,e,f,g,h,i,j,k;if(!b)return B(232);d=1<<c;e=d-1|0;f=(((32-EP(b)|0)+c|0)-1|0)/c|0;g=$rt_createCharArray(f);h=Ce(f-1|0,c);i=0;while(h>=0){j=g.data;k=i+1|0;j[i]=D_(b>>>h&e,d);h=h-c|0;i=k;}return Dn(g);}
function Cb(){Bw.call(this);}
function AAX(a,b,c){var d=new Cb();Em(d,a,b,c);return d;}
function Em(a,b,c,d){Cr(a,b,c,d);}
function NJ(a,b,c,d){var e;e=a.w.b(b,c,d);if(e<0)e=a.f.b(b,c,d);return e;}
function AAD(a,b){FK(a,b);a.w.s(b);}
function KN(){Cb.call(this);}
function AA4(a,b,c){var d=new KN();Y5(d,a,b,c);return d;}
function Y5(a,b,c,d){Em(a,b,c,d);}
function OK(a,b,c,d){var e;if((b+a.B.ba()|0)<=d.q()){e=a.B.H(b,c);if(e>=1)b=b+e|0;}return a.f.b(b,c,d);}
function Ik(){I.call(this);this.lr=null;}
function ACJ(a){var b=new Ik();NW(b,a);return b;}
function NW(a,b){a.lr=b;P(a);}
function QB(a,b){return CI(b);}
function Gj(){}
function H4(){I.call(this);this.kT=null;}
function ACa(a){var b=new H4();Zw(b,a);return b;}
function Zw(a,b){a.kT=b;P(a);}
function XV(a,b){return Ll(b);}
function K3(){Bw.call(this);}
function ACU(a,b,c){var d=new K3();AAG(d,a,b,c);return d;}
function AAG(a,b,c,d){Cr(a,b,c,d);}
function QM(a,b,c,d){var e;while(true){e=a.f.b(b,c,d);if(e>=0)break;if((b+a.B.ba()|0)<=d.q()){e=a.B.H(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
function Jq(){C.call(this);}
function CS(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Dz(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
function G3(){I.call(this);this.lK=null;}
function ADP(a){var b=new G3();Te(b,a);return b;}
function Te(a,b){a.lK=b;P(a);}
function Tu(a,b){return L0(b);}
function IT(){C.call(this);}
function Tn(b){var c,d,e,f;c=AB_(b.ct());d=Hk(c);e=$rt_createIntArray(d);f=0;while(f<d){e.data[f]=Hk(c);f=f+1|0;}return e;}
function D9(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function AAA(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;c=E(EK,16384);d=$rt_createByteArray(16384);e=0;f=0;g=0;h=0;while(h<b.g()){i=D9(b.d(h));if(i==64){h=h+1|0;i=D9(b.d(h));j=0;k=1;l=0;while(l<3){h=h+1|0;m=D9(b.d(h));j=j|Ce(k,m);k=k*64|0;l=l+1|0;}}else if(i<32)j=1;else{i=(i-32|0)<<24>>24;h=h+1|0;j=D9(b.d(h));}if(!i&&j>=128){if(e>0){n=c.data;o=f+1|0;n[f]=VJ(g,g+e|0,FQ(d,e));f=o;}g=g+(e+j|0)|0;e=0;}else{p=d.data;o=e+j|0;if(o<p.length)q=f;else{n=c.data;q=f+1|0;n[f]=VJ(g,g+e|0,FQ(d,e));g=g+o|0;e=0;}while(true){o=j
+(-1)|0;if(j<=0)break;r=e+1|0;p[e]=i;e=r;j=o;}f=q;}h=h+1|0;}return L9(c,f);}
function GX(){var a=this;C.call(a);a.lG=null;a.bU=null;a.fO=0;a.fn=0;a.fd=null;a.cU=null;a.fe=null;}
function ON(){var a=new GX();SV(a);return a;}
function SV(a){L(a);a.bU=BX();a.fd=$rt_createDoubleArray(3);a.cU=$rt_createDoubleMultiArray([3,4]);DT();a.fe=AET;}
function TN(a,b,c){var d,e,$$je;a:{try{a.lG=c;HZ(a,EC(b));d=MR(a);}catch($$e){$$je=Bd($$e);if($$je instanceof Br){e=$$je;break a;}else{throw $$e;}}return d;}Ci().l(B(233));e.eu();return 0;}
function HZ(a,b){var c,d,e,f,g,h,i,$$je;c=Ej(b);a:{try{d=0;while(true){e=c.el();if(e===null)break;f=e.cx(35);if(f>=0)e=e.cf(0,f);e=e.hO();if(!e.g())continue;g=B8(e,32);h=0;while(h<g.U()){i=AB8(g.E(h),d,h);a.bU.bo(i);h=h+1|0;}if(g.U()>a.fO)a.fO=g.U();d=d+1|0;if(d>a.fn)a.fn=d;}}catch($$e){$$je=Bd($$e);e=$$je;break a;}c.bG();return;}c.bG();G(e);}
function MR(a){var b,c;b=0;while(b<a.bU.U()){c=0;while(c<a.bU.U()){if(b!=c&&a.bU.E(c).g_(a.bU.E(b).iO()))return 0;c=c+1|0;}b=b+1|0;}return 1;}
function Pi(a,b){var c,d;c=a.bU.X();while(true){if(!c.Y())return null;d=c.V();if(d.g_(b))break;}return d;}
function AAJ(a,b,c){var d,e;d=a.bU.X();while(true){if(!d.Y())return null;e=d.V();if(e.dr()==b&&e.lk()==c)break;}return e;}
function Zq(a){var b,c,d;b=J();c=a.bU.X();while(c.Y()){d=c.V();b.d_(d.dT());}return b.e();}
function QJ(a){return a.fO;}
function Wj(a){return a.fn;}
function OQ(a,b){return a.fd.data[b];}
function Zj(a,b,c){a.fd.data[b]=c;}
function YJ(a,b,c){if(b>4)b=9-b|0;if(a.cU.data.length<=b)return 0.0;return a.cU.data[b].data[c];}
function Un(a,b,c,d){a.cU.data[b].data[c]=d;}
function RQ(a,b){var c;if(b>4)b=9-b|0;if(a.cU.data.length<=b)return 0;c=0;while(c<3){if(a.cU.data[b].data[c]>0.0)return 1;c=c+1|0;}return 0;}
function Xj(a){return a.fe;}
function TL(a,b){a.fe=b;}
function Ef(){DF.call(this);}
function ABn(){var a=new Ef();I9(a);return a;}
function I9(a){Mb(a);}
function Gr(a){return KL(a).I(33,64).I(91,96).I(123,126);}
function Mq(){Ef.call(this);}
function AA9(){var a=new Mq();Vk(a);return a;}
function Vk(a){I9(a);}
function Om(a){return Gr(a).bf(32);}
function JF(){K.call(this);}
function ACh(){var a=new JF();PB(a);return a;}
function PB(a){Q(a);}
function WD(a){return ADe(a);}
function Ei(){}
function D8(){var a=this;C.call(a);a.fo=null;a.ef=null;}
function AE4(a,b){var c=new D8();MS(c,a,b);return c;}
function MS(a,b,c){L(a);a.fo=b;a.ef=c;}
function ED(){var a=this;D8.call(a);a.eU=0;a.di=null;}
function ACt(a,b){var c=new ED();RK(c,a,b);return c;}
function RK(a,b,c){MS(a,b,null);a.eU=c;}
function LR(){BT.call(this);}
function AB3(a,b){var c=new LR();VF(c,a,b);return c;}
function VF(a,b,c){Dh(a,b,c);}
function Sm(a,b,c,d){var e,f,g,h,i;e=a.N.U();f=!d.dc()?d.bv():0;a:{g=a.f.b(b,c,d);if(g>=0){d.C(a.A,b);h=0;while(true){if(h>=e)break a;i=a.N.E(h);if(i.be(f,b,c,d)>=0){d.C(a.A,(-1));return g;}h=h+1|0;}}}return (-1);}
function AAv(a,b){return 0;}
function Dj(){var a=this;C.call(a);a.jQ=null;a.fV=null;a.jX=0.0;a.go=0.0;a.fg=null;a.f_=null;a.cR=0;}
function AE5(a,b,c,d){var e=new Dj();L2(e,a,b,c,d);return e;}
function AE6(a,b,c){var d=new Dj();Lb(d,a,b,c);return d;}
function L2(a,b,c,d,e){L(a);B7();a.fg=AEy;a.f_=AEy;LO(a,e);a.jQ=b;a.fV=e.dF();a.jX=c;a.go=d;}
function Lb(a,b,c,d){var e;e=$rt_createByteArray(1);e.data[0]=63;L2(a,b,c,d,e);}
function LO(a,b){var c;if(b!==null){c=b.data.length;if(c&&c>=a.go)return;}G(By(B(234)));}
function Gk(a,b){if(b!==null){a.fg=b;a.fT(b);return a;}G(By(B(235)));}
function Y8(a,b){return;}
function LU(a,b){if(b!==null){a.f_=b;a.ft(b);return a;}G(By(B(235)));}
function Yf(a,b){return;}
function H_(a,b,c,d){var e,f,g,h,$$je;a:{if(a.cR!=3){if(d)break a;if(a.cR!=2)break a;}G(C0());}a.cR=!d?1:2;while(true){try{e=a.j6(b,c);}catch($$e){$$je=Bd($$e);if($$je instanceof T){f=$$je;G(TE(f));}else{throw $$e;}}if(e.dH()){if(!d)return e;g=W(b);if(g<=0)return e;e=BL(g);}else if(e.da())break;h=!e.fZ()?a.fg:a.f_;b:{B7();if(h!==AEA){if(h===AE7)break b;else return e;}if(W(c)<a.fV.data.length)return AEz;KT(c,a.fV);}b.fb(BG(b)+e.g()|0);}return e;}
function GY(a,b){var c;if(a.cR!=2&&a.cR!=4)G(C0());c=a.ju(b);Bg();if(c===AEB)a.cR=3;return c;}
function N0(a,b){Bg();return AEB;}
function Ms(){var a=this;Y.call(a);a.bj=null;a.fB=null;a.eM=null;}
function ADp(a){var b=new Ms();TC(b,a);return b;}
function TC(a,b){var c;BH(a);a.bj=b.e();a.P=b.g();a.fB=PN(a.P);a.eM=PN(a.P);c=0;while(c<(a.P-1|0)){a.fB.i2(a.bj.d(c),(a.P-c|0)-1|0);a.eM.i2(a.bj.d((a.P-c|0)-1|0),(a.P-c|0)-1|0);c=c+1|0;}}
function TK(a,b,c){return !a.fP(c,b)?(-1):a.P;}
function QW(a,b,c,d){var e,f;e=d.q();while(true){if(b>e)return (-1);f=a.jp(c,b,e);if(f<0)return (-1);if(a.f.b(f+a.P|0,c,d)>=0)break;b=f+1|0;}return f;}
function Wm(a,b,c,d,e){var f;while(true){if(c<b)return (-1);f=a.jA(d,b,c);if(f<0)return (-1);if(a.f.b(f+a.P|0,d,e)>=0)break;c=f+(-1)|0;}return f;}
function XE(a,b){var c,d,e,f,g;if(b instanceof B1)return b.cg()!=a.bj.d(0)?0:1;if(b instanceof B3)return b.H(0,a.bj.cf(0,1))<=0?0:1;if(!(b instanceof BJ)){if(!(b instanceof B0))return 1;a:{if(a.bj.g()>1){c=b;d=c.gf();e=a.bj.d(0);c=a.bj;f=c.d(1);if(d==BS(e,f)){e=1;break a;}}e=0;}return e;}b:{c:{c=b;if(!c.j(a.bj.d(0))){g=a.bj;if(g.g()<=1)break c;g=a.bj;e=BS(g.d(0),a.bj.d(1));if(!c.j(e))break c;}e=1;break b;}e=0;}return e;}
function W6(a,b,c,d){var e,f;e=a.bj.d(a.P-1|0);while(true){if(c>(d-a.P|0))return (-1);f=b.d((c+a.P|0)-1|0);if(f==e&&a.fP(b,c))break;c=c+a.fB.fC(f)|0;}return c;}
function Vz(a,b,c,d){var e,f,g,h;e=a.bj.d(0);f=b.g();g=(f-d|0)-a.P|0;if(g<=0)d=d+g|0;while(true){if(d<c)return (-1);h=b.d(d);if(h==e&&a.fP(b,d))break;d=d-a.eM.fC(h)|0;}return d;}
function XY(a,b,c){var d;d=0;while(d<a.P){if(b.d(d+c|0)!=a.bj.d(d))return 0;d=d+1|0;}return 1;}
function Li(){R.call(this);}
function ACP(){var a=new Li();YD(a);return a;}
function YD(a){Bo(a);}
function Qn(a,b,c,d){var e;e=!d.dc()?d.q():c.g();if(b<e)return (-1);d.by=1;d.kM=1;return a.f.b(b,c,d);}
function No(a,b){return 0;}
function Lk(){T.call(this);}
function J_(){var a=new Lk();Vw(a);return a;}
function Vw(a){BA(a);}
function CM(){Bv.call(this);}
function ADv(a,b,c){var d=new CM();Eu(d,a,b,c);return d;}
function Eu(a,b,c,d){Cz(a,b,c,d);}
function U0(a,b,c,d){var e;if(!a.w.x(d))return a.f.b(b,c,d);e=a.w.b(b,c,d);if(e>=0)return e;return a.f.b(b,c,d);}
function XH(a,b){FK(a,b);a.w.s(b);}
function J2(){K.call(this);}
function AAV(){var a=new J2();Y4(a);return a;}
function Y4(a){Q(a);}
function VV(a){return Bx().I(65,90);}
function DH(){var a=this;CC.call(a);a.f5=0;a.e8=null;a.lR=null;}
function AE8(a,b,c,d,e){var f=new DH();HQ(f,a,b,c,d,e);return f;}
function HQ(a,b,c,d,e,f){Fy(a,c);YR();a.lR=AED;a.f5=b;a.e8=d;a.K=e;a.bI=f;}
function Mg(b,c,d){return ACE(0,b.data.length,b,c,c+d|0,0,0);}
function Ux(b){return Mg(b,0,b.data.length);}
function Ti(a,b,c,d){var e,f,g,h,i,j;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Bp(J().a(B(236)).n(g).a(B(237)).n(f).e()));if(W(a)<d)G(Ye());if(d<0)G(Bp(J().a(B(238)).n(d).a(B(239)).e()));h=a.K+a.f5|0;i=0;while(i<d){g=c+1|0;j=a.e8.data;f=h+1|0;e[c]=j[h];i=i+1|0;c=g;h=f;}a.K=a.K+d|0;return a;}}e=b.data;G(Bp(J().a(B(240)).n(c).a(B(19)).n(e.length).a(B(241)).e()));}
function XA(a,b,c,d){var e,f,g,h,i,j;if(!d)return a;if(a.dK())G(Gu());if(W(a)<d)G(I6());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Bp(J().a(B(242)).n(g).a(B(237)).n(f).e()));if(d<0)G(Bp(J().a(B(238)).n(d).a(B(239)).e()));h=a.K+a.f5|0;i=0;while(i<d){j=a.e8.data;g=h+1|0;f=c+1|0;j[h]=e[c];i=i+1|0;h=g;c=f;}a.K=a.K+d|0;return a;}}e=b.data;G(Bp(J().a(B(240)).n(c).a(B(19)).n(e.length).a(B(241)).e()));}
function KT(a,b){return a.hW(b,0,b.data.length);}
function EW(a){IW(a);return a;}
function VA(a,b){FF(a,b);return a;}
function Lx(){var a=this;DH.call(a);a.jl=0;a.gM=0;}
function ACE(a,b,c,d,e,f,g){var h=new Lx();OR(h,a,b,c,d,e,f,g);return h;}
function OR(a,b,c,d,e,f,g,h){HQ(a,b,c,d,e,f);a.jl=g;a.gM=h;}
function W9(a){return a.gM;}
function DW(){}
function Fl(){var a=this;C.call(a);a.bs=null;a.dq=null;a.gb=null;a.gk=null;a.hH=0;a.ev=0;a.fk=0;a.ja=0;a.bA=0;a.ji=0;a.jh=0;a.by=0;a.kM=0;a.cL=0;a.fs=0;}
function AE9(a,b,c,d,e,f){var g=new Fl();Hw(g,a,b,c,d,e,f);return g;}
function Hw(a,b,c,d,e,f,g){var h;L(a);a.cL=(-1);h=e+1|0;a.hH=h;a.bs=$rt_createIntArray(h*2|0);a.dq=$rt_createIntArray(g);DC(a.dq,(-1));if(f>0)a.gb=$rt_createIntArray(f);DC(a.bs,(-1));a.h9(b,c,d);}
function Xl(a,b,c){a.dq.data[b]=c;}
function AAH(a,b){return a.dq.data[b];}
function NO(a){return a.f8(0);}
function ZV(a,b){F$(a,b);return a.bs.data[(b*2|0)+1|0];}
function S$(a,b,c){a.bs.data[b*2|0]=c;}
function QY(a,b,c){a.bs.data[(b*2|0)+1|0]=c;}
function Sd(a,b){return a.bs.data[b*2|0];}
function Sw(a,b){return a.bs.data[(b*2|0)+1|0];}
function Zv(a,b){var c,d;c=a.cD(b);d=a.eA(b);if((d|c|(d-c|0))>=0&&d<=a.gk.g())return a.gk.fp(c,d).e();return null;}
function Sh(a){return a.eZ(0);}
function SD(a,b){F$(a,b);return a.bs.data[b*2|0];}
function NM(a){if(a.bs.data[0]==(-1)){a.bs.data[0]=a.bA;a.bs.data[1]=a.bA;}a.cL=a.ec();}
function Oo(a,b){return a.gb.data[b];}
function Sp(a,b,c){a.gb.data[b]=c;}
function F$(a,b){if(!a.ev)G(C0());if(b>=0&&b<a.hH)return;G(Bp(EL(b)));}
function XP(a){a.ev=1;}
function XR(a){return a.ev;}
function Zb(a,b,c,d){a.ev=0;a.fs=2;DC(a.bs,(-1));DC(a.dq,(-1));if(b!==null)a.gk=b;if(c>=0)Ls(a,c,d);a.bA=a.fk;}
function Tv(a){a.h9(null,(-1),(-1));}
function Ls(a,b,c){a.fk=b;a.ja=c;}
function TQ(a,b){a.bA=b;if(a.cL>=0)b=a.cL;a.cL=b;}
function RH(a){return a.fk;}
function NK(a){return a.ja;}
function Um(a,b){a.fs=b;}
function Wc(a){return a.fs;}
function XB(a){return a.jh;}
function On(a){return a.ji;}
function PX(a){return a.cL;}
function IY(){var a=this;Y.call(a);a.iH=null;a.lf=0;}
function Xq(a){var b=new IY();PO(b,a);return b;}
function PO(a,b){BH(a);a.iH=b.c6();a.lf=b.G;}
function ZB(a,b,c){var d,e;d=a.iH;e=Bz(c.d(b));return !d.j(BI(e))?(-1):1;}
function GD(){var a=this;C.call(a);a.g9=0;a.h0=Long_ZERO;a.g0=0.0;}
function ACy(a,b){var c=new GD();Pj(c,a,b);return c;}
function OH(b,c){var d,e,$$je;a:{try{d=U$(b,EC(c));}catch($$e){$$je=Bd($$e);if($$je instanceof BY){e=$$je;break a;}else{throw $$e;}}return d;}Ci().l(B(243));e.eu();return null;}
function U$(b,c){var d,e,f,g,h,i,$$je;d=BX();e=Ej(c);a:{while(true){try{f=e.el();if(f===null)break a;g=B8(f,32);if(!f.ek(B(228))&&g.U()>=2){h=g.E(0).c5();if(h.g()==1&&b.fK(h)){i=FU(g.E(1));d.bo(ACy(h.d(0),i));}}continue;}catch($$e){$$je=Bd($$e);f=$$je;}}e.bG();G(f);}e.bG();Wq(d);return d;}
function Wq(b){var c,d,e;c=Long_ZERO;d=b.X();while(d.Y()){e=d.V();c=Long_add(c,e.dp());}d=b.X();while(d.Y()){e=d.V();e.g0=Long_toNumber(e.dp())/Long_toNumber(c);}}
function JP(b,c){var d,e;d=c.X();while(true){if(!d.Y())return null;e=d.V();if(b==e.cg())break;}return e;}
function Pj(a,b,c){L(a);a.g9=b;a.h0=c;}
function O1(a){return a.g9;}
function OI(a){return a.h0;}
function OJ(a){return a.g0;}
function GF(){I.call(this);this.jf=null;}
function ABo(a){var b=new GF();Zh(b,a);return b;}
function Zh(a,b){a.jf=b;P(a);}
function ZF(a,b){return MF(b);}
function H$(){C.call(this);this.dY=null;}
function IX(a){var b=new H$();QE(b,a);return b;}
function Pl(b){var c,d,e,f,g;B2();c=AE$.data;d=c.length;e=0;while(e<d){f=c[e];if(b.jS(f.bW())){f.eJ(1);g=IX(f);g.fl();return f;}e=e+1|0;}return null;}
function ZJ(){var b,c,d,e,f;B2();b=AE_.data;c=b.length;d=0;while(d<c){e=b[d];e.eJ(1);f=IX(e);f.fl();d=d+1|0;}}
function Wu(){var b,c,d,e,f;B2();b=AFa.data;c=b.length;d=0;while(d<c){e=b[d];e.eJ(1);f=IX(e);f.fl();d=d+1|0;}}
function QE(a,b){L(a);a.dY=b;}
function W1(a){var b,c,d;b=new XMLHttpRequest();c=CS(AA_(a,b),"stateChanged");b.onreadystatechange=c;d=J().a(B(244)).a(a.dY.hs()).e();b.open("GET",$rt_ustr(d));b.send();}
function Kf(a,b){a.dY.lM(b);E3().l(J().a(B(245)).a(a.dY.hs()).e());V6();}
function V6(){var b,c,d,e,f,g,h,i,j;b=0;c=0;B2();d=AE$.data;e=d.length;f=0;while(f<e){g=d[f];if(g.eY())c=c+1|0;if(g.bP()!==null)b=b+1|0;f=f+1|0;}d=AE_.data;f=d.length;h=0;while(h<f){i=d[h];if(i.eY())c=c+1|0;if(i.bP()!==null)b=b+1|0;h=h+1|0;}d=AFa.data;e=d.length;f=0;while(f<e){j=d[f];if(j.eY())c=c+1|0;if(j.bP()!==null)b=b+1|0;f=f+1|0;}if(!c)c=1;if(b>=c){BQ(null);LS(1);}else BQ(J().a(B(246)).n((100*b|0)/c|0).a(B(247)).e());}
function QS(b,c){Kf(b,c);}
function IU(){C.call(this);}
function Oc(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function Pz(b,c){return b!==null&&!(typeof b.constructor.$meta==='undefined'?1:0)&&HT(b.constructor,c)?1:0;}
function HT(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(HT(d[e],c))return 1;e=e+1|0;}return 0;}
function PI(b){var c='$$enumConstants$$';B4[c]=WC;B$[c]=RF;PI=function(cls){if(!cls.hasOwnProperty(c)){return null;}if(typeof cls[c]==="function"){cls[c]=cls[c]();}return cls[c];};return PI(b);}
function JZ(b){return V1(String.fromCharCode(b));}
function UU(b){return b.$meta.primitive?1:0;}
function Sx(b){return b.$meta.enum?1:0;}
function YU(b){return b.$meta.item;}
function UK(b){return $rt_str(b.$meta.name);}
function Ds(){var a=this;C.call(a);a.jj=null;a.k5=null;}
function AFb(a,b){var c=new Ds();Je(c,a,b);return c;}
function Je(a,b,c){var d,e,f,g;d=c.data;L(a);Fm(b);e=d.length;f=0;while(f<e){g=d[f];Fm(g);f=f+1|0;}a.jj=b;a.k5=c.dF();}
function Fm(b){var c,d;if(b.Q())G(KP(b));if(!JE(b.d(0)))G(KP(b));c=1;while(c<b.g()){a:{d=b.d(c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(JE(d))break a;else G(KP(b));}}c=c+1|0;}}
function JE(b){return !(b>=48&&b<=57)&&!(b>=97&&b<=122)&&b<65&&b>90?0:1;}
function Oy(b){var c;if(b===null)G(By(B(248)));Fm(b);c=Gm().gi(b.c5());if(c!==null)return c;G(AC$(b));}
function GW(a,b){var c,d,e,$$je;a:{try{c=a.j_();B7();d=AEA;d=K_(c,d);c=AEA;d=HM(d,c);d=I7(d,b);}catch($$e){$$je=Bd($$e);if($$je instanceof Cm){e=$$je;break a;}else{throw $$e;}}return d;}G(ACB(B(249),e));}
function C8(){C.call(this);this.k1=null;}
var AE7=null;var AEA=null;var AEy=null;function B7(){B7=Bc(C8);NZ();}
function LM(a){var b=new C8();Jr(b,a);return b;}
function Jr(a,b){B7();L(a);a.k1=b;}
function NZ(){AE7=LM(B(250));AEA=LM(B(251));AEy=LM(B(252));}
function Ky(){T.call(this);}
function ACF(){var a=new Ky();Yo(a);return a;}
function Yo(a){BA(a);}
function BO(){T.call(this);}
function Cv(){var a=new BO();C3(a);return a;}
function By(a){var b=new BO();M3(b,a);return b;}
function C3(a){BA(a);}
function M3(a,b){Df(a,b);}
function JR(){BO.call(this);this.jY=null;}
function KP(a){var b=new JR();VU(b,a);return b;}
function VU(a,b){C3(a);a.jY=b;}
function Hx(){R.call(this);this.gm=null;}
function ACR(a){var b=new Hx();Sg(b,a);return b;}
function Sg(a,b){Bo(a);a.gm=b;}
function Sq(a,b,c,d){var e,f;a:{if(b!=d.q()){if(!b)break a;if(d.cS()&&b==d.bv())break a;e=a.gm;f=b-1|0;if(e.hd(c.d(f),c.d(b)))break a;}return (-1);}return a.f.b(b,c,d);}
function Wo(a,b){return 0;}
function Gc(){}
function Kn(){C.call(this);}
function Dv(){BU.call(this);this.gh=null;}
function AFc(a){var b=new Dv();G8(b,a);return b;}
function G8(a,b){CR(a);a.gh=b;}
function K2(){var a=this;Dv.call(a);a.j$=0;a.f6=0;a.bN=null;a.dk=null;a.hv=null;}
function Pc(a,b){var c=new K2();Lj(c,a,b);return c;}
function ADq(a){var b=new K2();Rm(b,a);return b;}
function Lj(a,b,c){G8(a,b);a.bN=J();a.dk=$rt_createCharArray(32);a.j$=c;a.hv=XT();}
function Rm(a,b){Lj(a,b,0);}
function PK(a,b,c,d){var $$je;if(!Ka(a))return;a:{try{a.gh.df(b,c,d);break a;}catch($$e){$$je=Bd($$e);if($$je instanceof BY){}else{throw $$e;}}a.f6=1;}}
function Ka(a){if(a.gh===null)a.f6=1;return a.f6?0:1;}
function EX(a,b,c,d){var e,f,g,h,i,j,k,l;e=b.data;f=MC(b,c,d-c|0);g=$rt_createByteArray(Bq(16,U(e.length,1024)));h=Ux(g);i=a.hv.kU();B7();j=AEA;i=Gk(i,j);j=AEA;k=LU(i,j);while(true){l=H_(k,f,h,1).da();a.df(g,0,BG(h));EW(h);if(!l)break;}while(true){l=GY(k,h).da();a.df(g,0,BG(h));EW(h);if(!l)break;}}
function Uh(a,b){a.dk.data[0]=b;EX(a,a.dk,0,1);}
function YE(a,b){a.bN.a(b);Dx(a);}
function So(a,b){a.bN.a(b).bx(10);Dx(a);}
function Zp(a,b){a.bN.ic(b).bx(10);Dx(a);}
function SW(a){a.ke(10);}
function Dx(a){var b;b=a.bN.g()<=a.dk.data.length?a.dk:$rt_createCharArray(a.bN.g());a.bN.g2(0,a.bN.g(),b,0);EX(a,b,0,a.bN.g());a.bN.dQ(0);}
function FH(){}
function HL(){BT.call(this);}
function ACQ(a,b){var c=new HL();OT(c,a,b);return c;}
function OT(a,b,c){Dh(a,b,c);}
function N2(a,b,c,d){var e,f,g,h;e=a.N.U();d.C(a.A,b);f=0;while(true){if(f>=e)return a.f.b(b,c,d);g=a.N.E(f);h=g.be(0,b,c,d);if(h>=0)break;f=f+1|0;}return (-1);}
function TA(a,b){return 0;}
function K1(){CD.call(this);}
function ABa(a,b){var c=new K1();Xh(c,a,b);return c;}
function Xh(a,b,c){Fb(a,b,c);}
function S2(a,b,c,d){var e,f;e=a.c4(d);if(e!==null&&(b+e.g()|0)<=d.q()){f=!c.e().iq(e,b)?(-1):e.g();if(f<0)return (-1);d.C(a.c0,f);return a.f.b(b+f|0,c,d);}return (-1);}
function WP(a,b,c,d){var e,f,g,h;e=a.c4(d);f=d.bv();if(e!==null&&(b+e.g()|0)<=f){g=c.e();while(true){if(b>f)return (-1);h=g.gK(e,b);if(h<0)return (-1);if(a.f.b(h+e.g()|0,c,d)>=0)break;b=h+1|0;}return h;}return (-1);}
function O7(a,b,c,d,e){var f,g,h;f=a.c4(e);if(f===null)return (-1);g=d.e();a:{while(true){if(c<b)return (-1);h=g.lC(f,c);if(h<0)break a;if(h<b)break a;if(a.f.b(h+f.g()|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function Os(a,b){return 1;}
function I4(){K.call(this);}
function ADD(){var a=new I4();WT(a);return a;}
function WT(a){Q(a);}
function TZ(a){return Bx().I(97,122);}
function Iw(){BM.call(this);this.fF=null;}
function ABF(a,b,c,d){var e=new Iw();RM(e,a,b,c,d);return e;}
function RM(a,b,c,d,e){CZ(a,b,c,d);a.fF=e;}
function Q1(a,b,c,d){var e,f;e=d.q();f=Fg(a,b,e,c);if(f>=0)e=f;if(e>b)return a.f.be(b,e,c,d);return a.f.b(b,c,d);}
function NS(a,b,c,d){var e,f,g,h,i;e=d.q();f=a.f.bh(b,c,d);if(f<0)return (-1);g=Fg(a,f,e,c);if(g>=0)e=g;h=a.f.be(f,e,c,d);if(f<h)f=h;i=f>0?K9(a,b,f-1|0,c):f?(-1):0;if(i>=b)b=i>=f?i:i+1|0;return b;}
function Fg(a,b,c,d){while(true){if(b>=c)return (-1);if(a.fF.dh(d.d(b)))break;b=b+1|0;}return b;}
function K9(a,b,c,d){while(true){if(c<b)return (-1);if(a.fF.dh(d.d(c)))break;c=c+(-1)|0;}return c;}
function JM(){K.call(this);}
function ADj(){var a=new JM();XU(a);return a;}
function XU(a){Q(a);}
function ZW(a){var b;b=ABo(a);b.y=1;return b;}
function KB(){C.call(this);}
function DQ(){C.call(this);}
var AFd=null;var AFe=null;function MA(){MA=Bc(DQ);Vh();}
function G_(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;MA();d=$rt_floatToIntBits(b);c.g$=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.fQ=0;c.fq=0;return;}g=0;if(f)h=e|8388608;else{h=e<<1;while(Long_eq(Long_and(Long_fromInt(h),Long_fromInt(8388608)),Long_ZERO)){h=h<<1;f=f+(-1)|0;g=g+1|0;}}i=Ps(AFe,f);if(i<0)i= -i-2|0;j=f-AFe.data[i]|0;k=9+j|0;l=Long_fromInt(h);m=Long_shru(Long_mul(l,Long_fromInt(AFd.data[i])),32-k|0).lo;if(m>=1000000000){i=i+1|0;n=f-AFe.data[i]|0;k=9+n|0;m=Long_shru(Long_mul(l,Long_fromInt(AFd.data[i])),
32-k|0).lo;}n=(31-k|0)-g|0;o=n>=0?AFd.data[i]>>>n:AFd.data[i]<< -n;p=(o+1|0)>>1;q=o>>1;if(h==4194304)q=q>>2;r=Hl(m,q);s=KG(m,p);h=BW(r,s);h=h>0?Ce(m/r|0,r):h<0?Ce(m/s|0,s)+s|0:Ce((m+(s/2|0)|0)/s|0,s);if(h>=1000000000){i=i+1|0;h=h/10|0;}else if(h<100000000){i=i+(-1)|0;h=h*10|0;}c.fQ=h;c.fq=i-50|0;}
function Hl(b,c){var d,e;MA();d=10;while(d<=c){d=d*10|0;}e=b%d|0;if(e>=(c/2|0))d=d/10|0;return d;}
function KG(b,c){var d,e;MA();d=10;while(d<=c){d=d*10|0;}e=b%d|0;if((d-e|0)>(c/2|0))d=d/10|0;return d;}
function Vh(){var b,c,d,e,f,g,h,i,j,k,l;AFd=$rt_createIntArray(100);AFe=$rt_createIntArray(100);b=2000000000;c=127;d=0;e=b;while(d<50){f=AFd.data;g=d+50|0;f[g]=$rt_udiv(e,20);AFe.data[g]=c;g=$rt_udiv(e,10);h=$rt_umod(g,10);while(g<=b&&!(g&(-2147483648))){g=g<<1;c=c+1|0;h=h<<1;}e=g+(h/10|0)|0;d=d+1|0;}i=214748364;e=127;d=0;while(d<50){j=0;k=b;while(k>i){k=k>>1;j=j+1|0;e=e+(-1)|0;}k=k*10|0;if(j<=0)b=k;else{l=Long_fromInt(b&((1<<j)-1|0));b=Long_add(Long_fromInt(k),Long_shr(Long_mul(l,Long_fromInt(10)),j)).lo;}f
=AFd.data;k=(50-d|0)-1|0;f[k]=$rt_udiv(b,20);AFe.data[k]=e;d=d+1|0;}}
function LA(){K.call(this);}
function ADd(){var a=new LA();R$(a);return a;}
function R$(a){Q(a);}
function R4(a){return ADz(a);}
function DG(){C.call(this);}
function AFf(){var a=new DG();J4(a);return a;}
function J4(a){L(a);}
function Is(){R.call(this);}
function ACl(){var a=new Is();Vg(a);return a;}
function Vg(a){Bo(a);}
function Y0(a,b,c,d){if(b!=d.lw())return (-1);return a.f.b(b,c,d);}
function AAh(a,b){return 0;}
function KW(){Bw.call(this);}
function ABU(a){var b=new KW();YF(b,a);return b;}
function YF(a,b){Cr(a,b.eg(),b.kd(),b.cN());a.w.s(a);}
function ZC(a,b,c,d){var e;while((b+a.B.ba()|0)<=d.q()){e=a.B;if(e.H(b,c)<=0)break;b=b+a.B.ba()|0;}return a.f.b(b,c,d);}
function Pf(a,b,c,d){var e,f,g;e=a.f.bh(b,c,d);if(e<0)return (-1);f=e-a.B.ba()|0;while(f>=b&&a.B.H(f,c)>0){g=f-a.B.ba()|0;e=f;f=g;}return e;}
function EH(){}
function KX(){var a=this;C.call(a);a.fv=null;a.bV=null;}
function ABS(a){var b=new KX();Vj(b,a);return b;}
function Vj(a,b){var c;L(a);a.bV=b;c=a;b.classObject=c;}
function HO(b){var c;if(b===null)return null;c=b.classObject;if(c===null)c=ABS(b);return c;}
function QP(a){return a.bV;}
function Ug(a,b){return Pz(b,a.bV);}
function ZP(a){if(a.fv===null)a.fv=UK(a.bV);return a.fv;}
function WU(a){return UU(a.bV);}
function Ra(a){return Sx(a.bV);}
function NX(a){return HO(YU(a.bV));}
function Su(a){if(!a.kI())return null;a.bV.$clinit();return PI(a.bV).dF();}
function LB(){var a=this;C.call(a);a.p=null;a.z=0;}
function AAB(){var a=new LB();R5(a);return a;}
function ABX(a){var b=new LB();OB(b,a);return b;}
function R5(a){L(a);a.p=$rt_createIntArray(0);}
function OB(a,b){L(a);a.p=$rt_createIntArray(((b+32|0)-1|0)/32|0);}
function Sl(a,b){var c,d;c=b/32|0;if(b>=a.z){C2(a,c+1|0);a.z=b+1|0;}d=a.p.data;d[c]=d[c]|1<<(b%32|0);}
function XG(a,b,c){var d,e,f,g;if(b>c)G(Cq());d=b/32|0;e=c/32|0;if(c>a.z){C2(a,e+1|0);a.z=c;}if(d==e){f=a.p.data;f[d]=f[d]|C9(a,b)&CU(a,c);}else{f=a.p.data;f[d]=f[d]|C9(a,b);g=d+1|0;while(g<e){a.p.data[g]=(-1);g=g+1|0;}f=a.p.data;f[e]=f[e]|CU(a,c);}}
function C9(a,b){var c;c=b%32|0;return (-1)<<c;}
function CU(a,b){var c;c=b%32|0;return !c?0:(-1)>>>(32-c|0);}
function AAz(a,b){var c,d;c=b/32|0;if(c<a.p.data.length){d=a.p.data;d[c]=d[c]&KI((-2),b%32|0);if(b==(a.z-1|0))CH(a);}}
function O0(a,b,c){var d,e,f,g,h;if(b>c)G(Cq());if(b>=a.z)return;d=U(a.z,c);e=b/32|0;f=d/32|0;if(e==f){g=a.p.data;g[e]=g[e]&(CU(a,b)|C9(a,d));}else{g=a.p.data;g[e]=g[e]&CU(a,b);h=e+1|0;while(h<f){a.p.data[h]=0;h=h+1|0;}g=a.p.data;g[f]=g[f]&C9(a,d);}CH(a);}
function O9(a,b){var c;c=b/32|0;return c<a.p.data.length&&a.p.data[c]&1<<(b%32|0)?1:0;}
function Zx(a,b){var c,d,e,f,g;if(b>=a.z)return (-1);c=b/32|0;d=a.p.data[c];e=d>>>(b%32|0);if(e)return CY(e)+b|0;f=(a.z+31|0)/32|0;g=c+1|0;while(g<f){if(a.p.data[g])return (g*32|0)+CY(a.p.data[g])|0;g=g+1|0;}return (-1);}
function RJ(a,b){var c,d,e,f,g;if(b>=a.z)return b;c=b/32|0;d=a.p.data[c]^(-1);e=d>>>(b%32|0);if(e)return CY(e)+b|0;f=(a.z+31|0)/32|0;g=c+1|0;while(g<f){if(a.p.data[g]!=(-1))return (g*32|0)+CY(a.p.data[g]^(-1))|0;g=g+1|0;}return a.z;}
function C2(a,b){var c;if(a.p.data.length>=b)return;c=Bq((b*3|0)/2|0,(a.p.data.length*2|0)+1|0);a.p=Zk(a.p,c);}
function CH(a){var b,c,d;b=(a.z+31|0)/32|0;a.z=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=EP(a.p.data[c]);if(d<32)break;c=c+(-1)|0;a.z=a.z-32|0;}a.z=a.z-d|0;}}
function QO(a,b){var c,d;c=U(a.p.data.length,b.p.data.length);d=0;while(d<c){if(a.p.data[d]&b.p.data[d])return 1;d=d+1|0;}return 0;}
function X4(a,b){var c,d,e;c=U(a.p.data.length,b.p.data.length);d=0;while(d<c){e=a.p.data;e[d]=e[d]&b.p.data[d];d=d+1|0;}while(c<a.p.data.length){a.p.data[c]=0;c=c+1|0;}a.z=U(a.z,b.z);CH(a);}
function ZR(a,b){var c,d,e;c=U(a.p.data.length,b.p.data.length);d=0;while(d<c){e=a.p.data;e[d]=e[d]&(b.p.data[d]^(-1));d=d+1|0;}CH(a);}
function XQ(a,b){var c,d,e;a.z=Bq(a.z,b.z);C2(a,(a.z+31|0)/32|0);c=U(a.p.data.length,b.z);d=0;while(d<c){e=a.p.data;e[d]=e[d]|b.p.data[d];d=d+1|0;}}
function Z2(a,b){var c,d,e;a.z=Bq(a.z,b.z);C2(a,(a.z+31|0)/32|0);c=U(a.p.data.length,b.z);d=0;while(d<c){e=a.p.data;e[d]=e[d]^b.p.data[d];d=d+1|0;}CH(a);}
function X_(a){return a.z?0:1;}
function F5(){}
function GL(){I.call(this);this.jZ=null;}
function ACf(a){var b=new GL();AAf(b,a);return b;}
function AAf(a,b){a.jZ=b;P(a);}
function TY(a,b){return Mi(b);}
function F_(){Bs.call(this);}
function AFg(a){var b=new F_();G7(b,a);return b;}
function G7(a,b){Cl(a,b);}
function O3(a,b,c,d){var e;e=a.c9();d.C(e,b-d.bD(e)|0);return a.f.b(b,c,d);}
function T2(a,b){return 0;}
function Bf(){C.call(this);}
var AFh=null;var AFi=null;var AFj=null;var AFk=null;var AFl=null;var AFm=null;var AFn=null;var AFo=null;var AFp=null;var AFq=null;var AFr=null;var AFs=null;var AFt=null;var AFu=null;var AFv=null;var AFw=0;var AFx=null;function Bj(){Bj=Bc(Bf);Ws();}
function PT(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;Bj();c=AFj;d="v1.24";c.innerHTML=d;BQ(B(253));CE(null);e=B(254);f=$rt_str(AFh.location.href);if(f.fK(B(255))){g=f.e$(f.cx(63)+1|0);h=g.i3(B(256));i=h.data;j=i.length;k=0;while(k<j){l=i[k];m=l.i3(B(257));n=m.data;if(B(258).bQ(n[0]))e=n[1];k=k+1|0;}}E3().l(J().a(B(259)).a(e).e());AFx=Pl(e);if(AFx!==null)E3().l(J().a(B(259)).a(AFx.bW()).e());ZJ();Wu();o=AFi.getElementById("layoutOptionCustom");AFk.options.remove(0);B2();i=AE_.data;j=i.length;k=0;while(k<
j){p=i[k];q=o.cloneNode(!!1);c=$rt_ustr(p.bW());q.text=c;AFk.options.add(q);k=k+1|0;}AFk.options.add(o);c=AFk;r=ABQ();c.addEventListener("change",CS(r,"handleEvent"));s=AFi.getElementById("configOptionCustom");AFl.options.remove(0);i=AFa.data;j=i.length;k=0;while(k<j){t=i[k];u=s.cloneNode(!!1);c=$rt_ustr(t.bW());u.text=c;c=$rt_ustr(t.i7());u.title=c;AFl.options.add(u);k=k+1|0;}AFl.options.add(s);c=AFl;r=ADB();c.addEventListener("change",CS(r,"handleEvent"));c=AFq;r=AAL();c.addEventListener("click",CS(r,"handleEvent"));c
=AFs;r=ADw();c.addEventListener("click",CS(r,"handleEvent"));}
function Fq(){var b,c,d,e;Bj();b=ON();b.iR($rt_str(AFm.value),B(21));c=XJ();c.g4(b,$rt_str(AFn.value));d=NN(b,null);if(AFt.firstChild!==null)Me(AFt);e=d.jd(AFi,0);if(e===null)AFt.setAttribute("style","display:none");else{AFt.appendChild(e);AFt.setAttribute("style","display:block");}}
function LS(b){var c,d,e,f;Bj();AFw=b;if(AFw){c=AFk;d=0;c.selectedIndex=d;B2();e=AE_.data[0];Ge(e.bP());c=AFl;d=2;c.selectedIndex=d;f=AFa.data[2];Eg(f.bP());Fq();}}
function LE(){var b,c,d,e,f,g,h,i,j,$$je;Bj();b=ON();b.iR($rt_str(AFm.value),B(21));c=XJ();c.g4(b,$rt_str(AFn.value));if(AFx!==null&&AFx.bP().g()){d=OH(b.d9(),AFx.bP());e=Pn(b.d9(),AFx.bP());f=AA8();g=f.jV(b,d,e);h=NN(b,g.lj());CE(h.jd(AFi,1));a:{try{i=ADO(5);j=i.lg(g);BQ(j);break a;}catch($$e){$$je=Bd($$e);if($$je instanceof BY){}else{throw $$e;}}BQ(B(260));}return;}BQ(B(261));}
function Ge(b){var c,d;Bj();if(AFm.firstChild!==null){c=AFm;d=AFm.firstChild;c.removeChild(d);}d=AFm;c=AFi.createTextNode($rt_ustr(b));d.appendChild(c);c=AFm;d=$rt_ustr(b);c.value=d;}
function Eg(b){var c,d;Bj();if(AFn.firstChild!==null){c=AFn;d=AFn.firstChild;c.removeChild(d);}d=AFn;c=AFi.createTextNode($rt_ustr(b));d.appendChild(c);c=AFn;d=$rt_ustr(b);c.value=d;}
function CE(b){Bj();if(AFu.firstChild!==null)Me(AFu);if(b===null)AFu.setAttribute("style","display:none");else{AFu.appendChild(b);AFu.setAttribute("style","display:block");}}
function BQ(b){var c,d;Bj();if(AFv.firstChild!==null){c=AFv;d=AFv.firstChild;c.removeChild(d);}if(b!==null){c=AFv;d=$rt_ustr(b);c.innerHTML=d;}else{c=AFx===null?B(262):J().a(B(263)).a(AFx.i7()).e();d=AFv;c=$rt_ustr(J().a(c).a(B(264)).e());d.innerHTML=c;}}
function Ev(){Bj();return AFk;}
function DI(){Bj();Fq();}
function Eq(){Bj();return AFl;}
function Ew(){Bj();return AFm;}
function E1(){Bj();return AFo;}
function E2(){Bj();return AFn;}
function Ep(){Bj();return AFp;}
function IV(){Bj();return AFr;}
function M4(){Bj();return AFw;}
function G5(){Bj();LE();}
function Ws(){AFh=window;AFi=Zm();AFj=AFi.getElementById("version-text");AFk=AFi.getElementById("layout-select");AFl=AFi.getElementById("config-select");AFm=AFi.getElementById("layout-input");AFn=AFi.getElementById("config-input");AFo=AFi.getElementById("modal-layout-input");AFp=AFi.getElementById("modal-config-input");AFq=AFi.getElementById("save-input-button");AFr=AFi.getElementById("close-input-button");AFs=AFi.getElementById("analyze-button");AFt=AFi.getElementById("keyboard-panel-fingers");AFu=AFi.getElementById("keyboard-panel-heatmap");AFv
=AFi.getElementById("output-panel");AFw=0;}
function D4(){BN.call(this);}
var AFy=0.0;var AFz=null;function AFA(){AFA=Bc(D4);Rr();}
function Rr(){AFy=NaN;AFz=D($rt_floatcls());}
function H5(){C.call(this);}
function EM(b,c){var d,e,f,g;d=b.data;e=$rt_createCharArray(c);f=U(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function FQ(b,c){var d,e,f,g;d=b.data;e=$rt_createByteArray(c);f=U(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function Zk(b,c){var d,e,f,g;d=b.data;e=$rt_createIntArray(c);f=U(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function L9(b,c){var d,e,f,g;d=b.data;e=I5(Cf(b).eB(),c);f=U(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function Vf(b,c,d,e){var f,g;if(c>d)G(Cv());while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function DC(b,c){Vf(b,0,b.data.length,c);}
function UR(b,c,d,e){var f,g;if(c>d)G(Cv());while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function Sa(b,c){UR(b,0,b.data.length,c);}
function Ps(b,c){return QR(b,0,b.data.length,c);}
function QR(b,c,d,e){var f,g,h,i;if(c>d)G(Cv());f=d-1|0;while(true){g=b.data;h=(c+f|0)/2|0;i=g[h];if(i==e)break;if(e>=i){c=h+1|0;if(c>f)return  -h-2|0;}else{f=h-1|0;if(f<c)return  -h-1|0;}}return h;}
function B1(){Y.call(this);this.b$=0;}
function JV(a){var b=new B1();R3(b,a);return b;}
function R3(a,b){BH(a);a.b$=b;}
function Za(a){return 1;}
function Xk(a,b,c){return a.b$!=c.d(b)?(-1):1;}
function UL(a,b,c,d){var e,f,g,h;if(!(c instanceof Bh))return C7(a,b,c,d);e=c;f=d.q();while(true){if(b>=f)return (-1);g=e.cE(a.b$,b);if(g<0)return (-1);h=a.f;b=g+1|0;if(h.b(b,c,d)>=0)break;}return g;}
function Zn(a,b,c,d,e){var f,g;if(!(d instanceof Bh))return Db(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);g=f.er(a.b$,c);if(g<0)break a;if(g<b)break a;if(a.f.b(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function Q_(a){return a.b$;}
function Wd(a,b){if(b instanceof B1)return b.cg()!=a.b$?0:1;if(!(b instanceof B3)){if(b instanceof BJ)return b.j(a.b$);if(!(b instanceof B0))return 1;return 0;}return b.H(0,FV(a.b$))<=0?0:1;}
function Gz(){Y.call(this);this.iT=0;}
function ABq(a){var b=new Gz();U_(b,a);return b;}
function U_(a,b){BH(a);a.P=2;a.iT=Co(Cn(b));}
function Uj(a,b,c){var d,e,f;d=b+1|0;e=c.d(b);f=c.d(d);return a.iT!=Co(Cn(BS(e,f)))?(-1):2;}
function Mh(){BU.call(this);}
function AC4(){var a=new Mh();OC(a);return a;}
function OC(a){CR(a);}
function N6(a,b){$rt_putStdout(b);}
function DD(){C.call(this);}
var AFB=null;var AFC=null;function E3(){if(AFB===null)AFB=Pc(AC4(),0);return AFB;}
function Ci(){if(AFC===null)AFC=Pc(ACO(),0);return AFC;}
function Gp(b,c,d,e,f){var g,h,i,j,k,l,m,n;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=IZ(b)){g=e+f|0;if(g<=IZ(d)){a:{b:{if(b!==d){h=Cf(b).eB();i=Cf(d).eB();if(h!==null&&i!==null){if(h===i)break b;if(!h.ep()&&!i.ep()){j=b;k=0;g=c;while(k<f){l=j.data;m=g+1|0;n=l[g];if(!i.jP(n)){F9(b,c,d,e,k);G(J_());}k=k+1|0;g=m;}F9(b,c,d,e,f);return;}if(!h.ep())break a;if(i.ep())break b;else break a;}G(J_());}}F9(b,c,d,e,f);return;}G(J_());}}G(Cq());}G(SN(B(265)));}
function F9(b,c,d,e,f){if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}} else {c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function IG(){var a=this;I.call(a);a.eG=0;a.hC=null;a.fS=null;}
function AAN(a,b,c){var d=new IG();Y9(d,a,b,c);return d;}
function Y9(a,b,c,d){a.fS=b;a.eG=c;a.hC=d;P(a);}
function Ui(a,b){return !(a.eG^a.fS.v.bL(b))&&!(a.eG^a.fS.bK^a.hC.j(b))?0:1;}
function IN(){var a=this;I.call(a);a.i$=0;a.iX=null;a.iu=null;a.lB=null;}
function ADT(a,b,c,d){var e=new IN();VP(e,a,b,c,d);return e;}
function VP(a,b,c,d,e){a.lB=b;a.i$=c;a.iX=d;a.iu=e;P(a);}
function Nf(a,b){return a.i$^(!a.iX.j(b)&&!a.iu.j(b)?0:1)?0:1;}
function II(){var a=this;I.call(a);a.i4=null;a.jn=null;}
function ACA(a,b){var c=new II();NG(c,a,b);return c;}
function NG(a,b,c){a.jn=b;a.i4=c;P(a);}
function Tk(a,b){return a.i4.j(b);}
function IH(){var a=this;I.call(a);a.eS=0;a.h5=null;a.e5=null;}
function ACb(a,b,c){var d=new IH();N1(d,a,b,c);return d;}
function N1(a,b,c,d){a.e5=b;a.eS=c;a.h5=d;P(a);}
function ND(a,b){return !(a.eS^a.e5.v.bL(b))&&!(a.eS^a.e5.bK^a.h5.j(b))?1:0;}
function JC(){var a=this;K.call(a);a.iM=0;a.je=0;}
function H(a,b){var c=new JC();Yj(c,a,b);return c;}
function Yj(a,b,c){Q(a);a.iM=b;a.je=c;}
function AAF(a){var b;b=Bx().I(a.iM,a.je);return b;}
function IJ(){var a=this;I.call(a);a.ii=null;a.lJ=null;}
function ACw(a,b){var c=new IJ();NV(c,a,b);return c;}
function NV(a,b,c){a.lJ=b;a.ii=c;P(a);}
function WV(a,b){return a.ii.j(b);}
function Ju(){K.call(this);}
function ABs(){var a=new Ju();Rt(a);return a;}
function Rt(a){Q(a);}
function YA(a){return Bx().I(48,57).I(97,102).I(65,70);}
function IQ(){var a=this;I.call(a);a.gV=null;a.g5=0;a.gL=null;}
function AA7(a,b,c){var d=new IQ();TO(d,a,b,c);return d;}
function TO(a,b,c,d){a.gL=b;a.gV=c;a.g5=d;P(a);}
function S8(a,b){return !a.gV.j(b)&&!(a.g5^a.gL.v.bL(b))?1:0;}
function IM(){var a=this;I.call(a);a.iF=0;a.h$=null;a.h2=null;a.kj=null;}
function AC0(a,b,c,d){var e=new IM();OD(e,a,b,c,d);return e;}
function OD(a,b,c,d,e){a.kj=b;a.iF=c;a.h$=d;a.h2=e;P(a);}
function Uk(a,b){return a.iF^(!a.h$.j(b)&&!a.h2.j(b)?0:1);}
function IL(){var a=this;I.call(a);a.ig=null;a.kF=null;}
function AC_(a,b){var c=new IL();NY(c,a,b);return c;}
function NY(a,b,c){a.kF=b;a.ig=c;P(a);}
function NF(a,b){return a.ig.j(b)?0:1;}
function I_(){V.call(this);this.ge=null;}
function AB1(a){var b=new I_();SG(b,a);return b;}
function SG(a,b){BC(a);a.ge=b;}
function P_(a,b,c,d){var e,f,g,h,i;e=d.q();f=b+1|0;if(f>e){d.by=1;return (-1);}g=c.d(b);if(Bm(g)){h=b+2|0;if(h<=e){i=c.d(f);if(CT(g,i))return a.ge.dh(BS(g,i))?(-1):a.f.b(h,c,d);}}return a.ge.dh(g)?(-1):a.f.b(f,c,d);}
function TT(a,b){a.f=b;}
function Nd(a){return (-2147483602);}
function ZN(a,b){return 1;}
function IO(){var a=this;I.call(a);a.gv=null;a.i1=0;a.hw=null;}
function ABD(a,b,c){var d=new IO();WH(d,a,b,c);return d;}
function WH(a,b,c,d){a.hw=b;a.gv=c;a.i1=d;P(a);}
function WZ(a,b){return !a.gv.j(b)&&!(a.i1^a.hw.v.bL(b))?0:1;}
function Gq(){var a=this;C.call(a);a.kr=null;a.h7=null;a.dy=null;a.S=null;a.eb=0;a.ed=0;}
function ACI(a,b){var c=new Gq();Nq(c,a,b);return c;}
function Es(a,b){var c,d;c=a.dy.g();if(b>=0&&b<=c){d=Jw(a,b);if(d>=0&&a.S.jv()){a.S.kG();return 1;}a.S.bA=(-1);return 0;}G(Bp(EL(b)));}
function Jw(a,b){var c;a.S.kn();a.S.d6(1);a.S.kz(b);c=a.h7.bh(b,a.dy,a.S);if(c==(-1))a.S.by=1;return c;}
function K7(a){var b,c;b=a.dy.g();if(!HE(a))b=a.ed;if(a.S.bA>=0&&a.S.ih()==1){a.S.bA=a.S.ec();if(a.S.ec()==a.S.hE()){c=a.S;c.bA=c.bA+1|0;}return a.S.bA<=b&&Es(a,a.S.bA)?1:0;}return Es(a,a.eb);}
function MW(a,b){return a.S.eZ(b);}
function Hh(a,b){return a.S.f8(b);}
function Mf(a){return MW(a,0);}
function Kj(a){return Hh(a,0);}
function HE(a){return a.S.dc();}
function Nq(a,b,c){var d,e,f,g,h;L(a);a.eb=(-1);a.ed=(-1);a.kr=b;a.h7=b.eI;a.dy=c;a.eb=0;a.ed=a.dy.g();d=new Fl;e=a.eb;f=a.ed;g=G9(b);h=K4(b);Hw(d,c,e,f,g,h,If(b));a.S=d;}
function BZ(){C.call(this);}
var AFD=null;var AFE=null;var AFF=null;var AFG=null;var AFH=null;var AFI=null;function N(){N=Bc(BZ);Py();}
function FV(b){var c,d;N();c=new Bh;d=$rt_createCharArray(1);d.data[0]=b;Dr(c,d);return c;}
function G1(b){N();return b>0&&b<=65535?1:0;}
function DZ(b){N();return b>=65536&&b<=1114111?1:0;}
function Bm(b){N();return (b&64512)!=55296?0:1;}
function Bt(b){N();return (b&64512)!=56320?0:1;}
function D3(b){N();return !Bm(b)&&!Bt(b)?0:1;}
function CT(b,c){N();return Bm(b)&&Bt(c)?1:0;}
function BS(b,c){N();return ((b&1023)<<10|c&1023)+65536|0;}
function Iv(b,c){N();return IP(b,c,b.data.length);}
function IP(b,c,d){var e,f;N();if(c<(d-1|0)){e=b.data;if(Bm(e[c])){f=c+1|0;if(Bt(e[f]))return BS(e[c],e[f]);}}return b.data[c];}
function CQ(b){var c;N();c=b-65536|0;return (55296|c>>10&1023)&65535;}
function CF(b){N();return (56320|b&1023)&65535;}
function BI(b){N();return Co(b)&65535;}
function Co(b){N();return JZ(b).toLowerCase().charCodeAt(0);}
function Bz(b){N();return Cn(b)&65535;}
function Cn(b){N();return JZ(b).toUpperCase().charCodeAt(0);}
function E9(b,c){N();return J$(b,c);}
function J$(b,c){var d;N();if(c>=2&&c<=36){d=Fh(b);if(d>=c)d=(-1);return d;}return (-1);}
function Eh(b){N();return Fh(b);}
function Fh(b){var c,d,e,f,g,h,i,j;N();c=GT();d=c.data;e=0;f=(d.length/2|0)-1|0;while(f>=e){g=(e+f|0)/2|0;h=g*2|0;i=d[h];j=BW(b,i);if(j>0)e=g+1|0;else{if(j>=0)return d[h+1|0];f=g-1|0;}}return (-1);}
function D_(b,c){N();if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function MB(b){N();return Bn(b)!=9?0:1;}
function GT(){N();if(AFE===null)AFE=Tn((GG().value!==null?$rt_str(GG().value):null));return AFE;}
function GG(){N();if(AFH===null)AFH=LI();return AFH;}
function LK(){N();if(AFF===null)AFF=AAA((KC().value!==null?$rt_str(KC().value):null));return AFF;}
function KC(){N();if(AFI===null)AFI=MT();return AFI;}
function CJ(b){var c,d;N();if(b<65536){c=$rt_createCharArray(1);c.data[0]=b&65535;return c;}c=$rt_createCharArray(2);d=c.data;d[0]=CQ(b);d[1]=CF(b);return c;}
function Lh(b){var c;N();a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}c=1;break a;}c=0;}return c;}
function C_(b){N();return Bn(b);}
function Bn(b){var c,d,e,f,g,h;N();if(G1(b)&&D3(b&65535))return 19;c=LK();d=c.data;e=0;f=d.length-1|0;while(e<=f){g=(e+f|0)/2|0;h=d[g];if(b>=h.gz)e=g+1|0;else{if(b>=h.fJ)return h.ie.data[b-h.fJ|0];f=g-1|0;}}return 0;}
function Iq(b){N();return FP(b);}
function FP(b){N();return Bn(b)!=2?0:1;}
function Gt(b){N();return Bn(b)!=1?0:1;}
function Hc(b){N();return Bn(b)!=3?0:1;}
function MU(b){N();return !Bn(b)?0:1;}
function Ll(b){N();switch(Bn(b)){case 1:case 2:case 3:case 4:case 5:break;default:return 0;}return 1;}
function F2(b){N();return EO(b);}
function EO(b){N();a:{switch(Bn(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function Mi(b){N();a:{switch(Bn(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break a;default:break a;}return 1;}return CI(b);}
function MF(b){N();a:{switch(Bn(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break a;default:break a;}return 1;}return CI(b);}
function Ly(b){N();a:{switch(Bn(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break a;default:break a;}return 1;}return 0;}
function L0(b){N();a:{switch(Bn(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break a;default:break a;}return 1;}return CI(b);}
function KF(b){N();a:{switch(Bn(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break a;default:break a;}return 1;}return CI(b);}
function CI(b){N();a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Bn(b)!=16?0:1;}
function Fr(b){N();switch(Bn(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function I$(b){N();return FY(b);}
function FY(b){N();switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return Fr(b);}return 1;}
function Py(){AFD=D($rt_charcls());AFG=E(BZ,128);}
function LI(){return {"value":"oD#*% .%%2%)6%-:%1>%5B%9F%=J%AN%Eo%Is%Mw%Q{%U!\'Y&\'^*\'b.\'f2\'j6\'n:\'r>\'vB\'zF\'!#J\'&#N\'*#R\'.#V\'2#Z\'6#_\':#c\'>#g\'B#k\'F#o\'J#s\'N#w\'R#6)I:)M>)QB)UF)YJ)^N)bR)fV)jZ)n_)rc)vg)zk)!#o)&#s)*#w).#{)2#!+6#&+:#*+>#.+B#2+F#6+J#:+N#>+R#{R# !T#%&T#)*T#-.T#12T#56T#9:T#=>T#ABT#E6a# :a#%>a#)Ba#-Fa#1Ja#5Na#9Ra#=Va#AZa#E:s# >s#%Bs#)Fs#-Js#1Ns#5Rs#9Vs#=Zs#A_s#EZ:% _:%%c:%)g:%-k:%1o:%5s:%9w:%={:%A!<%E2F% 6F%%:F%)>F%-BF%1FF%5JF%9NF%=RF%AVF%EgP% kP%%oP%)sP%-wP%1{P%5!R%9&R%=*R%A.R%E>]% B]%%F]%)J]%-N]%1R]%5V]%9Z]%=_]%Ac]%Esg% wg%%{g%)!i%-&"
+"i%1*i%5.i%92i%=6i%A:i%EJs% Ns%%Rs%)Vs%-Zs%1_s%5cs%9gs%=ks%Aos%E!!\' &!\'%*!\').!\'-2!\'16!\'5:!\'9>!\'=B!\'AF!\'EV,\' Z,\'%_,\')c,\'-g,\'1k,\'5o,\'9s,\'=w,\'A{,\'E.8\' 28\'%68\'):8\'->8\'1B8\'5F8\'9J8\'=N8\'AR8\'EcB\' gB\'%kB\')oB\'-sB\'1wB\'5{B\'9!D\'=&D\'A*D\'E>L\' BL\'%FL\')JL\'-NL\'1RL\'5VL\'9ZL\'=_L\'AcL\'EsV\' wV\'%{V\')!X\'-&X\'1*X\'5.X\'92X\'=6X\'A:X\'EB_\' F_\'%J_\')N_\'-R_\'1V_\'5Z_\'9__\'=c_\'Ag_\'Esw\' ww\'%{w\')!y\'-&y\'1*y\'5.y\'92y\'=6y\'A:y\'EB!) F!)%J!))N!)-R!)1V!)5Z!)9_!)=c!)Ag!)Egi+ ki+%oi+)si+-wi+1{i+5!k+9&k+=*k+A.k+Eom+ sm+%wm+){m+-!o+1&o+5*o+9.o+=2o+A6o+E>,- B,-%F"
+",-)J,--N,-1R,-5V,-9Z,-=_,-Ac,-E>8- B8-%F8-)J8--N8-1R8-5V8-9Z8-=_8-Ac8-E{F- !H-%&H-)*H--.H-12H-56H-9:H-=>H-ABH-E_H- cH-%gH-)kH--oH-1sH-5wH-9{H-=!J-A&J-E!Z- &Z-%*Z-).Z--2Z-16Z-5:Z-9>Z-=BZ-AFZ-E2c- 6c-%:c-)>c--Bc-1Fc-5Jc-9Nc-=Rc-AVc-EJo- No-%Ro-)Vo--Zo-1_o-5co-9go-=ko-Aoo-E.q- 2q-%6q-):q-->q-1Bq-5Fq-9Jq-=Nq-ARq-E&4r *4r%.4r)24r-64r1:4r5>4r9B4r=F4rAJ4rE{or !qr%&qr)*qr-.qr12qr56qr9:qr=>qrABqrE&ur *ur%.ur)2ur-6ur1:ur5>ur9Bur=FurAJurE**t .*t%2*t)6*t-:*t1>*t5B*t9F*t=J*tAN*tEN,t R,t%V,t)Z,t-_,t1c,t5g,t9k,t=o,tAs,tE_"
+"4t c4t%g4t)k4t-o4t1s4t5w4t9{4t=!6tA&6tEgXt kXt%oXt)sXt-wXt1{Xt5!Zt9&Zt=*ZtA.ZtE{c@# !e@#%&e@#)*e@#-.e@#12e@#56e@#9:e@#=>e@#ABe@#Ece@#Ige@#Mke@#Qoe@#Use@#Ywe@#^{e@#b!g@#f&g@#j*g@#n.g@#r2g@#v6g@#z:g@#!#>g@#&#Bg@#*#Fg@#.#Jg@#2#Ng@#6#Rg@#:#Vg@#>#Zg@#B#_g@#F#cg@#J#gg@#N#kg@#R#*i@#I.i@#M2i@#Q6i@#U:i@#Y>i@#^Bi@#bFi@#fJi@#jNi@#nRi@#rVi@#vZi@#z_i@#!#ci@#&#gi@#*#ki@#.#oi@#2#si@#6#wi@#:#{i@#>#!k@#B#&k@#F#*k@#J#.k@#N#2k@#R#s&D# w&D#%{&D#)!(D#-&(D#1*(D#5.(D#92(D#=6(D#A:(D#E2.H# 6.H#%:.H#)>.H#-B.H#1F.H#5J.H#9N.H#=R.H#AV."
+"H#EwuH# {uH#%!wH#)&wH#-*wH#1.wH#52wH#96wH#=:wH#A>wH#Ew$J# {$J#%!&J#)&&J#-*&J#1.&J#52&J#96&J#=:&J#A>&J#E{*J# !,J#%&,J#)*,J#-.,J#12,J#56,J#9:,J#=>,J#AB,J#E_8J# c8J#%g8J#)k8J#-o8J#1s8J#5w8J#9{8J#=!:J#A&:J#E2RJ# 6RJ#%:RJ#)>RJ#-BRJ#1FRJ#5JRJ#9NRJ#=RRJ#AVRJ#ENqJ# RqJ#%VqJ#)ZqJ#-_qJ#1cqJ#5gqJ#9kqJ#=oqJ#AsqJ#E&}J# *}J#%.}J#)2}J#-6}J#1:}J#5>}J#9B}J#=F}J#AJ}J#Eg@L# k@L#%o@L#)s@L#-w@L#1{@L#5!BL#9&BL#=*BL#A.BL#EZJL# _JL#%cJL#)gJL#-kJL#1oJL#5sJL#9wJL#={JL#A!LL#ENTL# RTL#%VTL#)ZTL#-_TL#1cTL#5gTL#9kTL#=oTL#AsTL#E:{L# >{L#"
+"%B{L#)F{L#-J{L#1N{L#5R{L#9V{L#=Z{L#A_{L#ERkN# VkN#%ZkN#)_kN#-ckN#1gkN#5kkN#9okN#=skN#AwkN#E_$P# c$P#%g$P#)k$P#-o$P#1s$P#5w$P#9{$P#=!&P#A&&P#E.,P# 2,P#%6,P#):,P#->,P#1B,P#5F,P#9J,P#=N,P#AR,P#EFau# Jau#%Nau#)Rau#-Vau#1Zau#5_au#9cau#=gau#Akau#Eouu# suu#%wuu#){uu#-!wu#1&wu#5*wu#9.wu#=2wu#A6wu#EF0N% J0N%%N0N%)R0N%-V0N%1Z0N%5_0N%9c0N%=g0N%Ak0N%Eo0N% s0N%%w0N%){0N%-!2N%1&2N%5*2N%9.2N%=22N%A62N%E:2N% >2N%%B2N%)F2N%-J2N%1N2N%5R2N%9V2N%=Z2N%A_2N%Ec2N% g2N%%k2N%)o2N%-s2N%1w2N%5{2N%9!4N%=&4N%A*4N%E.4N% 24N%%64N%):4N%->"
+"4N%1B4N%5F4N%9J4N%=N4N%AR4N%ERJR% VJR%%ZJR%)_JR%-cJR%1gJR%5kJR%9oJR%=sJR%AwJR%E>qR% BqR%%FqR%)JqR%-NqR%1RqR%5VqR%9ZqR%=_qR%AcqR%E:FV% >FV%%BFV%)FFV%-JFV%1NFV%5RFV%9VFV%=ZFV%A_FV%E"};}
function MT(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
+"!#!#!#!#!#!#!#!#!#!#!#!#!#=G&H#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!# BGA#%Y\'CJ95A#^#; GN5\'9G#9G#9\'A)F<A%F%Y#A,Q\'Z$Y#;Y#^#G,91 Y#FA%F+G6J+Y%F#\'b&D! 9&G(1=G\'E#G#=G%F#J+F$^#&Y/ 1&\'F?G<A#b&:! G,&A/J+FBG*E#=Y$%A#\'[#F7G%%G*%G$%G&A#Y0 F:G$A#9 F,AVF6 F)A6G01GA)FW\')\'&I$G)I%\'I#&G(F+G#Y#J+9%F0\'I# F)A#F#A#F7 F( &A$F%A#\'&I$G%A#I#A#I#\'&A))A%F# F$G#A#J+F#[#L\'=;&9\'A#G#) F\'A%F#A#F7 F( F# F# F#A#\' "
+"I$G#A%G#A#G$A$\'A(F% &A(J+G#F$\'9A+G#) F* F$ F7 F( F# F&A#\'&I$G& G#) I#\'A#&A0F#G#A#J+9;A(&G\' \'I# F)A#F#A#F7 F( F# F&A#\'&)\')G%A#I#A#I#\'A)\')A%F# F$G#A#J+=&L\'A+\'& F\'A$F$ F%A$F# & F#A$F#A$F$A$F-A%I#\'I#A$I$ I$\'A#&A\')A/J+L$^\';=A&\'I$\'F) F$ F8 F1A$&G$I% G$ G%A(G# F$A&F#G#A#J+A(9L(=&\'I#9F) F$ F8 F+ F&A#\'&)\'I& \'I# I#G#A(I#A(& F#G#A#J+ F#A.G#I# F) F$ FJG#&I$G% I$ I$\'&=A%F$)L(F$G#A#J+L*=F\'A#I# F3A$F9 F* &A#F(A$\'A%I$G$ \' I)A\'J+A#I#9A-FQ\'F#G(A%;F\'%G)9J+Y#AFF# & F& F9 & F+\'F#G*&A#F& % G\'A#J+A#F%AA&^$Y0=9^$G#^\'J+L+=\'=\'=\'6767"
+"I#F) FEA%G/)G&9G#F&G, GE ^)\'^\' ^#Y&^%Y#AFFLI#G%)G\')G#I#G#&J+Y\'F\'I#G#F%G$&I$F#I(F$G%F.\'I#G#I\'\'&)J+I$\'^#BG !A&!A#CL9%C$b&*&  F%A#F( & F%A#FJ F%A#FB F%A#F( & F%A#F0 FZ F%A#FeA#G$Y*L5A$F1^+A\'b!7! A#C\'A#5b&M* =9F2-F;67A$FmY$K$F)A(F. F%G$A,F3G$Y#A*F3G#A-F. F$ G#A-FUG#)G(I)\'I#G,Y$%Y$;&\'A#J+A\'L+A\'Y\'5Y%G$1 J+A\'FD%FVA(F&G#FC\'&A&FhA+F@ G$I%G#I$A%I#\'I\'G$A%=A$Y#J+F?A#F&A,FMA%F;A\'J+,A$^CF8G#I#\'A#Y#FV)\')G( \')\'I#G)I\'G+A#\'J+A\'J+A\'Y(%Y\'A#G/(AcG%)FP\')G&)\'I&\'I#F(A%J+Y(^+G*^*A$G#)F?)G%I#G#)G$F#J+FM\')G#I$\')G$I#A)Y%FEI)G)I#G#A$Y&"
+"J+A$F$J+F?E\'Y#C*A(BLA#B$Y)A)G$9G.)G(F%\'F\'\'F#)G#&A&CMEaC.%CCEFG[ G&!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C*!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C*B)C\'A#B\'A#C)B)C)B)C\'A#B\'A#C) ! ! ! !C)B)C/A#C)D)C)D)C)D)C& C#B%$<#]$C$ C#B%$]$C%A#C#B% ]$C)B&]$A#C$ C#B%$]# M,Q&U\'Y#>?6_#?6>Y)./Q&-Y*>?Y%X#Y$:67Y,:98Y+-Q& Q+,%A#L\'Z$67%L+Z$67 E.A$[AA1G.H%\'H$G-A0^#"
+"!^%!^##B$C#B$#=!^#:B&^\'!=!=!=B%=#B%#F%#^#C#B#Z&!C%=:^##=L1KD!#K%,^#A%Z&^&Z#^%:^#:^#:^(:^@Z#^#:=:^@b:-% ^)6767^5Z#^(67b=2! :^?Z:^IZ\'^gA:^,A6L^^pL7b=X# :^*:^WZ)b=P! :b=Y$ 67676767676767L?^MZ&67Z@6767676767Z1b= % b:$# 6767676767676767676767Za6767ZA67b:#% ^QZ6^#Z\'^HA#^AA#b=I! BP CP !#B$C#!#!#!#B%#!C#!C\'E#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#^\'!#!#G$!#A&Y%,Y#CG #A&#A#FYA(%9A/\'F8A*F( F( F( F( F( F( F( F( GAY#>?>?Y$>?9>?Y*5Y#59>?Y#>?67676767Y&%Y+U#Y%"
+"596Y.AQ^; b=:! A-b=7$ A;^-A%-Y$=%&+6767676767^#6767676756W#=K*G%I#5E&^#K$%&9^# b&7! A#G#]#E#&5b&;! 9E$&A&FL b&?!  ^#L%^+F<A&^EA-F1^@ L+^?L)=L0^AL+^HL0b= & &b UG!&A+^b&b   %b O(!&A1F6%b&X2 A$^XA*FIE\'Y#b&-% %Y$F1J+F#A5!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#&\'H$9G+9%!#!#!#!#!#!#!#!#!#!#!#!#!#!#E#G#FhK+G#Y\'A)]8E*]#!#!#!#!#!#!#!C$!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#%C)!#!#B##!#!#!#!#%]#!#!#&!#!C$!#!#!#!#!#!#!#!#!#!#B&#B&#!#!#!#!#!#A#!#B$AQ&E##F(\'F$\'F%\'F8I#G#)^%A%L\'^#;=A\'FUY%A)I#F"
+"SI1G#A)Y#J+A\'G3F\'Y$&9F#\'J+F=G)Y#F8G,I#A,9F>A$G$)FP\'I#G%I#G#I$Y. %J+A%Y#F&\'%F*J+F& FJG\'I#G#I#G#A*F$\'F)\')A#J+A#Y%F1%F\'^$&)\')FS\'&G$F#G#F&G#&\'&A9F#%Y#F,)G#I#Y#&E#)\'A+F\'A#F\'A#F\'A*F( F( CL<E%C)A)b#1! FDI#\'I#\'I#9)\'A#J+A\'&b CO#&A-F8A%FRA%4b `. T#b `! T#b `0 43b `D!3b&O& A#b&K! AGC(A-C&A&&\'F+:F. F& & F# F# b&M! ]1A2b&L& 76A1FbA#FWAIF-;=A#G1Y(679A\'G19U#X#6767676767676767Y#67Y%X$Y$ Y%5676767Y$:5Z$ 9;Y#A%F& b&(# A#1 Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:67967Y#F+%FNE#F@A$F\'A#F\'A#F\'A#F$A$[#:<=[# =Z%^#A+Q$^#A#F- F; F4 F# F0"
+"A#F/ACb&]! A&Y$A%LNA$^*KVL%^2L#^$ ^-A%=AP^N\'b ## F>A$FRA0\'L<A%FAL%A*F5+F)+A&FGG&A&F? 9FEA%F)9K&AKBICIFpA#J+A\'BEA%CEA%FIA)FUA,9b 1# b&X% A*F7A+F)b 9# F\'A#& FM F#A$&A#F8 9L)F8^#L(F@A)L*AQF4 F#A&L&F7L\'A$9F;A&9AbFYA%L#F#L1A#LO&G$ G#A&G%F% F$ F>A#G$A%\'L*A(Y*A(F>L#9F>L$AAF)=F=G#A%L&Y(A*FWA$Y(F7A#L)F4A&L)F3A(Y%A-L(b 1! FkAXBTA.CTA(L\'FEG%A)J+b G% L@b !# F>L+&A)F7G,L%Y&b \'# F8A*)\')FVG0Y(A%L5J+A0G$)FNI$G%I#G#Y#1Y%A,1A#F:A(J+A\'G$FEG&)G) J+Y%&I#A*FD\'Y#&A*G#)FQI$G*I#F%Y%G%9A#J+&9&Y$ L5A,F3 F:I$G$I#\')G#Y\'\'AcF( & F% F0 F+"
+"9A\'FP\'I$G)A&J+A\'G#I# F)A#F#A#F7 F( F# F& G#&I#\'I%A#I#A#I$A#&A\')A&F&I#A#G(A$G&b ,# FVI$G)I#G$)\'F%Y&J+ 9 9\'&AAFQI$G\')\'I%G#)G#F#9&A)J+b G# FPI$G%A#I%G#)G#Y8F%G#ACFQI$G)I#\')G#Y$&A,J+A\'Y.A4FL\')\'I#G\')\'&A(J+AWF<A#G$I#G%)G&A%J+L#Y$=b  $ FMI$G*)G#9b E! BACAJ+L*A-&b A# F)A#FHI$G%A#G#I%\'&9&)A<&G+FIG\')&G%Y)\'A)&G\'I#G$FOG.)G#Y$&Y&A>FZb (% F* FF)G( G\')\'&Y&A+J+L4A$Y#F?A#G7 )G()G#)G#AkF( F# FGG\'A$\' G# G(&\'A)J+A\'F\' F# FAI& G# I#\')\'&A(J+b W% F4G#I#Y#b ($ L6^)[%^2A.9b&;/ b G! b+P!  Y&A,b&%$ b ^K b&P1  Q*b (a b&(* b Z\'#b&Z) A(F"
+"@ J+A%Y#b A! F?A#G&9A+FQG(Y&^%E%9=A+J+ L( F6A&F4b Q+ BACAL8Y%b F! FmA%\'&IXA(G%E.AbE#9%A=&b W@!&A)b&T, b .5#b&@% ARF$A2F%A)b&-\' b %E b&L! A&F.A$F*A(F+A#=G#9Q%b =.!b=W$ A+^HA#^^I#G$^$I\'Q)G)^#G(^?G%^]A8^dG$=b ;# L5A-b=8! A*L:b (# B;C;B;C( C3B;C;! B#A#!A#B#A#B% B)C% # C( C,B;C;B# B%A#B) B( C;B# B% B& !A$B( C;B;C;B;C;B;C;B;C;B;C;B;C=A#B::C::C\'B::C::C\'B::C::C\'B::C::C\'B::C::C\'!#A#JSb= ) GX^%GS^)\'^/\'^#Y&A0G& G0b 16 G( G2A#G( G# G&b 6$ FNA$G(E(A#J+A%&=b Q& FMG%J+A&;b  5 b&&$ A#L*G(AJBCCCG(%A%J+A%Y#b 2- L]=L$;L%AnLN="
+"L0b #$ F% F< F# &A#& F+ F% & &A\'&A%& & & F$ F# &A#& & & & & F# &A#F% F( F% F% & F+ F2A&F$ F& F2AUZ#b /% ^MA%b=E! A-^0A#^0 ^0 ^FA+L.A$b=>! A$^_AZ^>A.^MA%^*A(^#A/^\'b ;# b=]$ ]&b=7, A+^.A$^,A&b=U! A-b=:! A(^-A5^-A%^YA)^+A\'^IA)^?b 3! ^- b=F!  ^%A$^JA#^\'A$^>A#b=(# A-^/A#^%A%^$A&^$A.^\'b K6 &b   %b   %b 6<#&AJ&b T !&A,&b =$ &A#&b  ;!&A/&b PU!&b @Q b&?) b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   "
+"%b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b D8 1A?b1A! b  # b\'Q$ b   %b   %b   %b 1Y$3b   %b   %b   %b ^a$3A#3b   %b   %b   %b ^a$3"};}
function La(){V.call(this);}
function ADl(){var a=new La();P5(a);return a;}
function P5(a){BC(a);}
function Zl(a,b,c,d){var e,f,g,h,i;e=d.q();f=b+1|0;if(f>e){d.by=1;return (-1);}g=c.d(b);if(Bm(g)){h=b+2|0;if(h<=e){i=c.d(f);if(CT(g,i))return a.f.b(h,c,d);}}return a.f.b(f,c,d);}
function Ry(a,b){a.f=b;}
function PQ(a){return (-2147483602);}
function Rv(a,b){return 1;}
function GK(){var a=this;Y.call(a);a.ix=0;a.g3=0;}
function R_(a){var b=new GK();Tr(b,a);return b;}
function Tr(a,b){BH(a);a.ix=b;a.g3=C6(b);}
function Ol(a,b,c){return a.ix!=c.d(b)&&a.g3!=c.d(b)?(-1):1;}
function B0(){var a=this;Y.call(a);a.et=0;a.d$=0;a.dW=0;}
function ABx(a){var b=new B0();ZL(b,a);return b;}
function ZL(a,b){var c,d;BH(a);a.P=2;a.dW=b;c=CJ(b);d=c.data;a.et=d[0];a.d$=d[1];}
function Tc(a,b,c){var d,e,f;d=b+1|0;e=c.d(b);f=c.d(d);return a.et==e&&a.d$==f?2:(-1);}
function Pr(a,b,c,d){var e,f,g,h;if(!(c instanceof Bh))return C7(a,b,c,d);e=c;f=d.q();while(b<f){g=e.cE(a.et,b);if(g<0)return (-1);b=g+1|0;if(b>=f)continue;h=e.d(b);if(a.d$==h&&a.f.b(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function R0(a,b,c,d,e){var f,g,h;if(!(d instanceof Bh))return Db(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);g=f.er(a.d$,c);h=g+(-1)|0;if(h<0)break a;if(h<b)break a;if(a.et==f.d(h)&&a.f.b(h+2|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function N7(a){return a.dW;}
function SR(a,b){if(b instanceof B0)return b.gf()!=a.dW?0:1;if(b instanceof BJ)return b.j(a.dW);if(b instanceof B1)return 0;if(!(b instanceof B3))return 1;return 0;}
function G6(){I.call(this);this.lN=null;}
function ABW(a){var b=new G6();UJ(b,a);return b;}
function UJ(a,b){a.lN=b;P(a);}
function Xp(a,b){return FP(b);}
function Mr(){var a=this;K.call(a);a.fw=0;a.eW=0;a.gT=0;}
function Dc(a,b){var c=new Mr();Uw(c,a,b);return c;}
function ADo(a,b,c){var d=new Mr();Nv(d,a,b,c);return d;}
function Uw(a,b,c){Q(a);a.eW=c;a.fw=b;}
function Nv(a,b,c,d){Q(a);a.gT=d;a.eW=c;a.fw=b;}
function Nu(a){var b;b=ABl(a.fw);if(a.gT)b.J.d7(0,2048);b.y=a.eW;return b;}
function BJ(){var a=this;V.call(a);a.bY=null;a.lP=0;}
function Zs(a){var b=new BJ();Iu(b,a);return b;}
function Iu(a,b){BC(a);a.bY=b.c6();a.lP=b.G;}
function US(a,b,c,d){var e,f,g,h,i;e=d.q();if(b<e){f=b+1|0;g=c.d(b);if(a.j(g)){h=a.f.b(f,c,d);if(h>0)return h;}if(f<e){h=f+1|0;i=c.d(f);if(CT(g,i)&&a.j(BS(g,i)))return a.f.b(h,c,d);}}return (-1);}
function VY(a,b){return a.bY.j(b);}
function P2(a,b){if(b instanceof B0)return DU(a.bY,b.gf());if(b instanceof B1)return DU(a.bY,b.cg());if(b instanceof BJ)return CV(a.bY,b.bY);if(!(b instanceof B3))return 1;return CV(a.bY,b.fc());}
function Zg(a){return a.bY;}
function Va(a,b){a.f=b;}
function Vc(a,b){return 1;}
function GV(){BJ.call(this);}
function Pp(a){var b=new GV();TF(b,a);return b;}
function TF(a,b){Iu(a,b);}
function YW(a,b){return a.bY.j(Co(Cn(b)));}
function Nb(){K.call(this);}
function AAR(){var a=new Nb();SY(a);return a;}
function SY(a){Q(a);}
function NP(a){var b;b=ABe(a);b.y=1;return b;}
function B_(){C.call(this);}
var AFJ=null;var AFK=null;function AFL(){var a=new B_();Fk(a);return a;}
function Fk(a){L(a);}
function Fo(b){if(!(b&1)){if(AFK!==null)return AFK;AFK=ACL();return AFK;}if(AFJ!==null)return AFJ;AFJ=ABO();return AFJ;}
function E6(){var a=this;V.call(a);a.b2=null;a.fr=null;a.dj=0;}
function Wz(a,b){var c=new E6();OF(c,a,b);return c;}
function OF(a,b,c){BC(a);a.b2=b;a.dj=c;}
function NH(a,b){a.f=b;}
function FI(a){if(a.fr===null)a.fr=Dn(a.b2);return a.fr;}
function NI(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;e=d.q();f=0;g=$rt_createIntArray(3);h=(-1);i=(-1);if(b>=e)return (-1);j=b+1|0;k=c.d(b);l=TG(k);if(l!==null){m=l.data;n=0;if(m.length!=a.dj)return (-1);while(true){if(n>=a.dj)return a.f.b(j,c,d);if(m[n]!=a.b2.data[n])break;n=n+1|0;}return (-1);}o=g.data;o[f]=k;p=k-4352|0;if(p>=0&&p<19){if(j<e){k=c.d(j);h=k-4449|0;}if(h>=0&&h<21){q=j+1|0;o[1]=k;if(q<e){k=c.d(q);i=k-4519|0;}if(i>=0&&i<28){r=q+1|0;o[2]=k;if(a.dj==3&&o[0]==a.b2.data[0]&&o[1]==a.b2.data[1]&&o[2]
==a.b2.data[2]){s=a.f;r=s.b(r,c,d);}else r=(-1);return r;}if(a.dj==2&&o[0]==a.b2.data[0]&&o[1]==a.b2.data[1]){s=a.f;r=s.b(q,c,d);}else r=(-1);return r;}return (-1);}return (-1);}
function Rw(a,b){var c,d;a:{if(b instanceof E6){c=b;if(!FI(c).bQ(FI(a))){d=0;break a;}}d=1;}return d;}
function Wv(a,b){return 1;}
function Dq(){CC.call(this);}
function AFM(a,b,c){var d=new Dq();GB(d,a,b,c);return d;}
function GB(a,b,c,d){Fy(a,b);a.K=c;a.bI=d;}
function Mu(b){if(b>=0)return ABk(b);G(By(J().a(B(266)).n(b).e()));}
function MC(b,c,d){return ABN(0,b.data.length,b,c,c+d|0,0);}
function OZ(b){return MC(b,0,b.data.length);}
function PJ(a,b,c,d){var e,f,g,h,i;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Bp(J().a(B(267)).n(g).a(B(237)).n(f).e()));if(W(a)<d)G(Ye());if(d<0)G(Bp(J().a(B(238)).n(d).a(B(239)).e()));h=a.K;i=0;while(i<d){g=c+1|0;f=h+1|0;e[c]=a.lo(h);i=i+1|0;c=g;h=f;}a.K=a.K+d|0;return a;}}e=b.data;G(Bp(J().a(B(240)).n(c).a(B(19)).n(e.length).a(B(241)).e()));}
function Sz(a,b){return a.iC(b,0,b.data.length);}
function AAg(a,b,c,d){var e,f,g,h,i;if(a.dK())G(Gu());if(W(a)<d)G(I6());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Bp(J().a(B(268)).n(g).a(B(237)).n(f).e()));if(d<0)G(Bp(J().a(B(238)).n(d).a(B(239)).e()));h=a.K;i=0;while(i<d){g=h+1|0;f=c+1|0;a.he(h,e[c]);i=i+1|0;h=g;c=f;}a.K=a.K+d|0;return a;}}e=b.data;G(Bp(J().a(B(240)).n(c).a(B(19)).n(e.length).a(B(241)).e()));}
function QC(a,b,c,d){var e,f,g,h,i,j;if(a.dK())G(Gu());e=d-c|0;if(W(a)<e)G(I6());if(c>=0&&c<b.g()){if(d>b.g()){f=new C5;g=J().a(B(268)).n(d).a(B(269));L1(f,g.n(b.g()).e());G(f);}if(c>d)G(Bp(J().a(B(270)).n(c).a(B(271)).n(d).e()));h=a.K;while(c<d){i=h+1|0;j=c+1|0;a.he(h,b.d(c));h=i;c=j;}a.K=a.K+e|0;return a;}G(Bp(J().a(B(270)).n(c).a(B(19)).n(b.g()).a(B(241)).e()));}
function DR(a,b){return a.lh(b,0,b.g());}
function IR(a){return a.jB();}
function E8(a){return a.lz();}
function G4(a){ME(a);return a;}
function Nl(a,b){FF(a,b);return a;}
function DP(){Dq.call(this);}
function AFN(a,b,c){var d=new DP();Js(d,a,b,c);return d;}
function Js(a,b,c,d){GB(a,b,c,d);}
function Zu(a){return a.kQ();}
function LZ(){var a=this;DP.call(a);a.iU=0;a.fG=0;a.ex=null;}
function ABk(a){var b=new LZ();Rn(b,a);return b;}
function ABN(a,b,c,d,e,f){var g=new LZ();MY(g,a,b,c,d,e,f);return g;}
function Rn(a,b){MY(a,0,b,$rt_createCharArray(b),0,b,0);}
function MY(a,b,c,d,e,f,g){Js(a,c,e,f);a.fG=b;a.iU=g;a.ex=d;}
function Qh(a,b){return a.ex.data[b+a.fG|0];}
function Ni(a,b,c){a.ex.data[b+a.fG|0]=c;}
function P$(a){return 1;}
function V_(a){return a.ex;}
function Y1(a){return a.iU;}
function M0(){K.call(this);}
function ADx(){var a=new M0();OU(a);return a;}
function OU(a){Q(a);}
function Xx(a){return Bx().I(33,64).I(91,96).I(123,126);}
function EQ(){var a=this;C.call(a);a.cB=null;a.eF=null;}
var AFO=null;function AAY(){AAY=Bc(EQ);Np();}
function NN(a,b){var c=new EQ();Gv(c,a,b);return c;}
function Gv(a,b,c){AAY();L(a);a.cB=b;a.eF=c;}
function Td(a,b,c){var d,e,f,g,h,i,j,k,l;d=b.createElement("div");e=0;while(e<a.cB.d5()){f=0;while(f<a.cB.ei()){g=(5-a.cB.d5()|0)+e|0;h=LN(a,g,f);if(h>0){i=FW(a,b,h);d.appendChild(i);}j=a.cB.dJ(e,f);if(j!==null){k=KY(a,b,j,c);d.appendChild(k);}else{i=FW(a,b,30);d.appendChild(i);}f=f+1|0;}l=b.createElement("br");d.appendChild(l);e=e+1|0;}return d;}
function KY(a,b,c,d){var e,f,g,h,i,j,k,l;e=b.createElement("span");e.setAttribute("class","key");f=null;if(!d)f=AFO.data[c.bc()];else{g=a.eF.gi(c);if(g!==null){h=U(255,160+(g.dS()*1000.0|0)|0);i=Bq(0,160-(g.dS()*1500.0|0)|0);f=J().a(B(272)).n(h).a(B(230)).n(i).a(B(230)).n(i).a(B(241)).e();}}if(f===null){j=!!1;e.hidden=j;}else{k=J().a(B(273)).a(f).e();e.setAttribute("style",$rt_ustr(k));}if(!d){l=J().a(B(274)).a(Dn(c.dT())).a(B(275));l=l.a($rt_str(c.iV().toFixed(1))).e();e.setAttribute("title",$rt_ustr(l));}
else{g=a.eF.gi(c);if(g!==null){j=J().a(B(274)).a(Dn(c.dT())).a(B(276));j=j.a($rt_str((g.dS()*100.0).toFixed(2))).a(B(247)).e();e.setAttribute("title",$rt_ustr(j));}}j=MG(c.iO());j=b.createTextNode($rt_ustr(j));e.appendChild(j);return e;}
function FW(a,b,c){var d,e;d=b.createElement("span");d.setAttribute("class","keygap");e=J().a(B(277)).n(c).a(B(278)).e();d.setAttribute("style",$rt_ustr(e));return d;}
function LN(a,b,c){var d,e;a:{d=a.cB.kt();DT();if(d===AET){if(b==1&&!c)return 0;if(b==2&&!c)return 15;if(b==3&&!c)return 22;if(b!=4)break a;if(c)break a;return 37;}if(d!==AEU){if(d!==AEV)break a;if(c&&c!=5)break a;return 15;}if(b==1&&!c)return 0;if(b==2&&!c)return 15;if(b==3&&!c)return 22;e=BW(b,4);if(!e&&!c)return 7;if(!e&&c==5)return 30;}return 0;}
function Np(){var b,c;b=E(Bh,10);c=b.data;c[0]=B(279);c[1]=B(280);c[2]=B(281);c[3]=B(282);c[4]=null;c[5]=null;c[6]=B(283);c[7]=B(281);c[8]=B(280);c[9]=B(279);AFO=b;}
function H0(){I.call(this);this.kb=null;}
function ADz(a){var b=new H0();NL(b,a);return b;}
function NL(a,b){a.kb=b;P(a);}
function W0(a,b){return Hc(b);}
function De(){var a=this;C.call(a);a.hx=null;a.hk=null;a.gC=null;a.gr=null;a.i5=0;}
function Z(a,b,c){var d=new De();Qy(d,a,b,c);return d;}
function Qy(a,b,c,d){L(a);a.hx=b;a.hk=c;a.gC=d;}
function OP(a){return a.hx;}
function Ya(a){return a.hk;}
function Od(a){return a.gC;}
function Sf(a){return a.gr;}
function AAx(a,b){a.gr=b;}
function QF(a){return a.i5;}
function QN(a,b){a.i5=b;}
function CA(){}
function HG(){C.call(this);}
function ADw(){var a=new HG();AAm(a);return a;}
function AAm(a){L(a);}
function MX(a,b){if(M4())G5();}
function Xm(a,b){MX(a,b);}
function MH(){C.call(this);}
function HI(){C.call(this);}
function AAL(){var a=new HI();TV(a);return a;}
function TV(a){L(a);}
function Lt(a,b){var c,d;if(!$rt_str(E1().value).bQ($rt_str(Ew().value))){c=Ew();d=$rt_ustr($rt_str(E1().value));c.value=d;c=Ev();B2();d=AE_.data.length;c.selectedIndex=d;}if(!$rt_str(Ep().value).bQ($rt_str(E2().value))){c=E2();d=$rt_ustr($rt_str(Ep().value));c.value=d;c=Eq();B2();d=AFa.data.length;c.selectedIndex=d;}IV().click();DI();CE(null);BQ(null);}
function AAw(a,b){Lt(a,b);}
function Hi(){C.call(this);}
function ADB(){var a=new Hi();Z9(a);return a;}
function Z9(a){L(a);}
function JN(a,b){var c,d;c=Eq().selectedIndex;B2();if(c<AFa.data.length){d=AFa.data[c];Eg(d.bP());DI();CE(null);BQ(null);}}
function Wy(a,b){JN(a,b);}
function Gy(){var a=this;C.call(a);a.iy=null;a.iz=null;a.gt=null;}
function Ro(a,b,c){var d=new Gy();VW(d,a,b,c);return d;}
function VW(a,b,c,d){L(a);a.iy=b;a.iz=c;a.gt=d;}
function Vd(a){return a.iy;}
function YN(a){return a.iz;}
function PY(a){return a.gt;}
function SO(b){var c,d,e,f,g,h;c=$rt_createDoubleArray(10);d=b.X();while(d.Y()){e=d.V();f=e.cr().bc();g=e.du().bc();if(HS(f,g)){h=c.data;h[f]=h[f]+e.cs().bJ();}}return c;}
function ML(){I.call(this);this.kN=null;}
function ABC(a){var b=new ML();VS(b,a);return b;}
function VS(a,b){a.kN=b;P(a);}
function VK(a,b){return 0;}
function L7(){BO.call(this);this.lO=null;}
function AC$(a){var b=new L7();Qr(b,a);return b;}
function Qr(a,b){C3(a);a.lO=b;}
function Hj(){C.call(this);}
function ABQ(){var a=new Hj();Tz(a);return a;}
function Tz(a){L(a);}
function KS(a,b){var c,d;c=Ev().selectedIndex;B2();if(c<AE_.data.length){d=AE_.data[c];Ge(d.bP());DI();CE(null);BQ(null);}}
function UM(a,b){KS(a,b);}
function Lq(){I.call(this);this.lQ=null;}
function AB4(a){var b=new Lq();VZ(b,a);return b;}
function VZ(a,b){a.lQ=b;P(a);}
function Ty(a,b){return Lh(b);}
function J9(){R.call(this);this.h_=0;}
function V4(a){var b=new J9();Y2(b,a);return b;}
function Y2(a,b){Bo(a);a.h_=b;}
function Q8(a,b,c,d){var e,f,g,h,i;e=b<d.q()?c.d(b):32;f=!b?32:c.d(b-1|0);g=!d.dc()?d.bv():0;h=e!=32&&!FJ(a,e,b,g,c)?0:1;i=f!=32&&!FJ(a,f,b-1|0,g,c)?0:1;return h^i^a.h_?(-1):a.f.b(b,c,d);}
function Ru(a,b){return 0;}
function FJ(a,b,c,d,e){var f;if(!F2(b)&&b!=95){a:{if(C_(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=e.d(c);if(F2(f))return 0;if(C_(f)!=6)return 1;}}return 1;}return 0;}
function KQ(){R.call(this);this.dE=0;}
function AAM(a){var b=new KQ();Wi(b,a);return b;}
function Wi(a,b){Bo(a);a.dE=b;}
function ZK(a,b,c,d){var e;e=!d.cS()?c.g():d.q();if(b>=e){d.C(a.dE,0);return a.f.b(b,c,d);}if((e-b|0)==1&&c.d(b)==10){d.C(a.dE,1);return a.f.b(b+1|0,c,d);}return (-1);}
function Wb(a,b){var c;c=!b.bD(a.dE)?0:1;b.C(a.dE,(-1));return c;}
function Dm(){K.call(this);}
function ACD(){var a=new Dm();L4(a);return a;}
function L4(a){Q(a);}
function LV(a){return Bx().I(9,13).bf(32);}
function Hf(){var a=this;C.call(a);a.ku=null;a.iZ=null;a.hc=null;a.h3=null;a.ko=0.0;a.hm=null;a.gq=null;a.hI=null;}
function ACN(a,b,c,d,e,f,g,h){var i=new Hf();Vt(i,a,b,c,d,e,f,g,h);return i;}
function Vt(a,b,c,d,e,f,g,h,i){L(a);a.ku=b;a.iZ=c;a.hc=d;a.h3=e;a.ko=f;a.hm=g;a.gq=h;a.hI=i;}
function PU(a){return a.iZ;}
function Ve(a){return a.hc;}
function WK(a){return a.h3;}
function Pv(a){return a.hm;}
function YS(a){return a.gq;}
function T$(a){return a.hI;}
function LQ(){Y.call(this);this.gu=0;}
function SI(a){var b=new LQ();Pb(b,a);return b;}
function Pb(a,b){BH(a);a.gu=BI(Bz(b));}
function Nr(a,b,c){return a.gu!=BI(Bz(c.d(b)))?(-1):1;}
function DO(){BN.call(this);this.gX=0.0;}
var AFP=0.0;var AFQ=null;function FD(){FD=Bc(DO);SE();}
function AB2(a){var b=new DO();Lg(b,a);return b;}
function Lg(a,b){FD();F1(a);a.gX=b;}
function AAd(a){return a.gX;}
function Fz(b){FD();return AB2(b);}
function DE(b){var c,d,e,f,g,h,i,j,k,l,m,n,o;FD();if(b.Q())G(Ca());c=0;d=b.g();while(true){if(b.d(c)>32){while(b.d(d-1|0)<=32){d=d+(-1)|0;}e=0;if(b.d(c)==45){c=c+1|0;e=1;}else if(b.d(c)==43)c=c+1|0;if(c==d)G(Ca());a:{f=b.d(c);g=Long_ZERO;h=0;i=0;if(f!=46){i=1;if(f>=48&&f<=57){b:{while(c<d){if(b.d(c)!=48)break b;c=c+1|0;}}while(c<d){j=b.d(c);if(j<48)break a;if(j>57)break a;if(Long_toNumber(g)>=1.0E17)h=h+1|0;else g=Long_add(Long_mul(g,Long_fromInt(10)),Long_fromInt(j-48|0));c=c+1|0;}}else G(Ca());}}if(c<d&&b.d(c)
==46){c=c+1|0;c:{while(true){if(c>=d)break c;k=b.d(c);if(k<48)break c;if(k>57)break;if(Long_toNumber(g)<1.0E17){g=Long_add(Long_mul(g,Long_fromInt(10)),Long_fromInt(k-48|0));h=h+(-1)|0;}c=c+1|0;i=1;}}if(!i)G(Ca());}if(c<d){k=b.d(c);if(k!=101&&k!=69)G(Ca());l=c+1|0;m=0;if(l==d)G(Ca());if(b.d(l)==45){l=l+1|0;m=1;}else if(b.d(l)==43)l=l+1|0;n=0;k=0;d:{while(true){if(l>=d)break d;o=b.d(l);if(o<48)break d;if(o>57)break;n=(10*n|0)+(o-48|0)|0;k=1;l=l+1|0;}}if(!k)G(Ca());if(m)n= -n;h=h+n|0;}e:{j=BW(h,308);if(j<=0){if
(j)break e;if(Long_le(g,new Long(2133831477, 4185580)))break e;}return e?(-Infinity):Infinity;}if(e)g=Long_neg(g);return Long_toNumber(g)*K0(h);}c=c+1|0;if(c==d)break;}G(Ca());}
function K0(b){var c,d;FD();if(b>=0)c=10.0;else{c=0.1;b= -b;}d=1.0;while(b){if(b%2|0)d=d*c;c=c*c;b=b/2|0;}return d;}
function SE(){AFP=NaN;AFQ=D($rt_doublecls());}
function Ey(){Bs.call(this);this.gS=0;}
function AFR(a){var b=new Ey();Mt(b,a);return b;}
function Mt(a,b){Cl(a,b);}
function Pk(a,b,c,d){var e;e=a.c9();d.C(e,b-d.bD(e)|0);a.gS=b;return b;}
function RS(a){return a.gS;}
function Q4(a,b){return 0;}
function Do(){V.call(this);this.cG=0;}
function P1(a){var b=new Do();RZ(b,a);return b;}
function RZ(a,b){BC(a);a.cG=b;}
function QH(a,b){a.f=b;}
function SL(a,b,c,d){var e,f,g;e=b+1|0;if(e>d.q()){d.by=1;return (-1);}f=c.d(b);if(b>d.bv()){g=c.d(b-1|0);if(Bm(g))return (-1);}if(a.cG!=f)return (-1);return a.f.b(e,c,d);}
function Xz(a,b,c,d){var e,f,g,h,i;if(!(c instanceof Bh))return C7(a,b,c,d);e=c;f=d.bv();g=d.q();while(true){if(b>=g)return (-1);h=e.cE(a.cG,b);if(h<0)return (-1);if(h>f&&Bm(e.d(h-1|0))){b=h+1|0;continue;}i=a.f;b=h+1|0;if(i.b(b,c,d)>=0)break;}return h;}
function T4(a,b,c,d,e){var f,g,h;if(!(d instanceof Bh))return Db(a,b,c,d,e);f=e.bv();g=d;a:{while(true){if(c<b)return (-1);h=g.er(a.cG,c);if(h<0)break a;if(h<b)break a;if(h>f&&Bm(g.d(h-1|0))){c=h+(-2)|0;continue;}if(a.f.b(h+1|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function OW(a,b){if(b instanceof B1)return 0;if(b instanceof B3)return 0;if(b instanceof BJ)return 0;if(b instanceof B0)return 0;if(b instanceof Dy)return 0;if(!(b instanceof Do))return 1;return b.cG!=a.cG?0:1;}
function VT(a,b){return 1;}
function E$(){}
function LP(){B9.call(this);}
function ACB(a,b){var c=new LP();T5(c,a,b);return c;}
function T5(a,b,c){IF(a,b,c);}
function LJ(){var a=this;C.call(a);a.cz=null;a.iJ=0;a.b9=0;a.ey=0;a.iv=0.0;}
function AB8(a,b,c){var d=new LJ();W8(d,a,b,c);return d;}
function W8(a,b,c,d){var e,f,g;L(a);if(b.g()!=1)a.cz=b.ct();else{e=Zi(b.d(0));if(!e){f=$rt_createCharArray(1);f.data[0]=b.d(0);a.cz=f;}else{f=$rt_createCharArray(2);g=f.data;g[0]=b.d(0);g[1]=e;a.cz=f;}}a.iJ=c;a.b9=d;a.ey=M5(a);}
function WN(a){return Bz(a.cz.data[0]);}
function Z7(a){return a.iJ;}
function Xu(a){return a.b9;}
function Y6(a){return a.ey>4?1:0;}
function T6(a){return a.ey;}
function Q7(a,b){a.ey=b;}
function PE(a){return a.iv;}
function T7(a,b){a.iv=b;}
function Q5(a){return a.cz;}
function Pg(a,b){var c,d,e,f;c=a.cz.data;d=c.length;e=0;while(e<d){f=c[e];if(f==Bz(b))return 1;e=e+1|0;}return 0;}
function M5(a){if(a.b9<=3)return a.b9;if(a.b9==4)return 3;if(a.b9==5)return 6;if(a.b9>9)return 9;return a.b9;}
function Zi(b){if(Ly(b)){if(!Iq(b))return BI(b);return Bz(b);}a:{switch(b){case 39:break;case 40:case 41:case 42:case 43:case 58:case 60:case 62:case 63:case 64:case 65:case 66:case 67:case 68:case 69:case 70:case 71:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 80:case 81:case 82:case 83:case 84:case 85:case 86:case 87:case 88:case 89:case 90:case 92:break a;case 44:return 60;case 45:return 95;case 46:return 62;case 47:return 63;case 48:return 41;case 49:return 33;case 50:return 64;case 51:return 35;case 52:return 36;case 53:return 37;case 54:return 94;case 55:return 38;case 56:return 42;case 57:return 40;case 59:return 58;case 61:return 43;case 91:return 123;case 93:return 125;default:break a;}return 34;}return 0;}
function Ch(){var a=this;Bv.call(a);a.cn=null;a.bz=0;}
function AFS(a,b,c,d,e){var f=new Ch();Dp(f,a,b,c,d,e);return f;}
function Dp(a,b,c,d,e,f){Cz(a,c,d,e);a.cn=b;a.bz=f;}
function AAo(a,b,c,d){var e,f,g,h;e=d.hR(a.bz);if(!a.w.x(d))return a.f.b(b,c,d);if(e>=a.cn.c1())return a.f.b(b,c,d);f=a.bz;g=e+1|0;d.b3(f,g);h=a.w.b(b,c,d);if(h>=0){d.b3(a.bz,0);return h;}f=a.bz;g=g+(-1)|0;d.b3(f,g);if(g>=a.cn.cZ())return a.f.b(b,c,d);d.b3(a.bz,0);return (-1);}
function Fe(){Ch.call(this);}
function AFT(a,b,c,d,e){var f=new Fe();HC(f,a,b,c,d,e);return f;}
function HC(a,b,c,d,e,f){Dp(a,b,c,d,e,f);}
function Pq(a,b,c,d){var e,f;e=d.hR(a.bz);if(!a.w.x(d))return a.f.b(b,c,d);if(e>=a.cn.c1()){d.b3(a.bz,0);return a.f.b(b,c,d);}if(e<a.cn.cZ()){d.b3(a.bz,e+1|0);f=a.w.b(b,c,d);}else{f=a.f.b(b,c,d);if(f>=0){d.b3(a.bz,0);return f;}d.b3(a.bz,e+1|0);f=a.w.b(b,c,d);}return f;}
function EA(){}
function DB(){Dl.call(this);this.b_=0;}
function AFU(){var a=new DB();Ma(a);return a;}
function Ma(a){Lz(a);}
function U7(a){return ABi(a);}
function EZ(){}
function Ib(){var a=this;DB.call(a);a.bk=null;a.bn=0;}
function BX(){var a=new Ib();VX(a);return a;}
function AFV(a){var b=new Ib();GO(b,a);return b;}
function VX(a){GO(a,10);}
function GO(a,b){Ma(a);a.bk=E(C,b);}
function Px(a,b){var c,d;if(a.bk.data.length<b){if(a.bk.data.length>=1073741823)c=2147483647;else{d=a.bk.data.length*2|0;c=Bq(b,Bq(d,5));}a.bk=L9(a.bk,c);}}
function S9(a,b){Ex(a,b);return a.bk.data[b];}
function QL(a){return a.bn;}
function XI(a,b){var c,d;a.b0(a.bn+1|0);c=a.bk.data;d=a.bn;a.bn=d+1|0;c[d]=b;a.b_=a.b_+1|0;return 1;}
function YM(a,b,c){var d;JO(a,b);a.b0(a.bn+1|0);d=a.bn;while(d>b){a.bk.data[d]=a.bk.data[d-1|0];d=d+(-1)|0;}a.bk.data[b]=c;a.bn=a.bn+1|0;a.b_=a.b_+1|0;}
function TH(a,b){var c,d,e,f;Ex(a,b);c=a.bk.data[b];a.bn=a.bn-1|0;while(b<a.bn){d=a.bk.data;e=a.bk.data;f=b+1|0;d[b]=e[f];b=f;}a.bk.data[a.bn]=null;a.b_=a.b_+1|0;return c;}
function Ex(a,b){if(b>=0&&b<a.bn)return;G(Cq());}
function JO(a,b){if(b>=0&&b<=a.bn)return;G(Cq());}
function E4(){}
function Fd(){}
function HF(){C.call(this);}
function Nw(a,b,c){a.mu($rt_str(b),Dz(c,"handleEvent"));}
function N9(a,b,c){a.nL($rt_str(b),Dz(c,"handleEvent"));}
function P9(a,b){return a.nd(b);}
function Qt(a,b,c,d){a.mA($rt_str(b),Dz(c,"handleEvent"),d?1:0);}
function XO(a,b){return !!a.mz(b);}
function Sk(a){return a.m9();}
function Oa(a,b,c,d){a.oR($rt_str(b),Dz(c,"handleEvent"),d?1:0);}
function K$(){CM.call(this);}
function ACu(a,b,c){var d=new K$();Rb(d,a,b,c);return d;}
function Rb(a,b,c,d){Eu(a,b,c,d);}
function RU(a,b,c,d){var e;if(!a.w.x(d))return a.f.b(b,c,d);e=a.f.b(b,c,d);if(e<0)e=a.w.b(b,c,d);return e;}
function Hu(){C.call(this);}
function Bh(){var a=this;C.call(a);a.t=null;a.dI=0;}
var AFW=null;function CP(){CP=Bc(Bh);WO();}
function Dn(a){var b=new Bh();Dr(b,a);return b;}
function E_(a,b,c){var d=new Bh();M8(d,a,b,c);return d;}
function ABE(a,b,c,d){var e=new Bh();H9(e,a,b,c,d);return e;}
function AFX(a,b,c,d){var e=new Bh();F0(e,a,b,c,d);return e;}
function AC2(a,b,c){var d=new Bh();Gn(d,a,b,c);return d;}
function Dr(a,b){var c,d,e;CP();c=b.data;L(a);d=c.length;a.t=$rt_createCharArray(d);e=0;while(e<d){a.t.data[e]=c[e];e=e+1|0;}}
function M8(a,b,c,d){var e,f;CP();L(a);a.t=$rt_createCharArray(d);e=0;while(e<d){f=b.data;a.t.data[e]=f[e+c|0];e=e+1|0;}}
function H9(a,b,c,d,e){CP();F0(a,b,c,d,Oy(e.e()));}
function F0(a,b,c,d,e){CP();L(a);I8(a,b,c,d,e);}
function Gn(a,b,c,d){var e,f,g,h,i,j,k;CP();L(a);a.t=$rt_createCharArray(d*2|0);e=0;f=0;while(f<d){g=b.data;h=c+1|0;i=g[c];if(i<65536){g=a.t.data;j=e+1|0;g[e]=i&65535;}else{g=a.t.data;k=e+1|0;g[e]=CQ(i);g=a.t.data;j=k+1|0;g[k]=CF(i);}f=f+1|0;c=h;e=j;}if(e<a.t.data.length)a.t=EM(a.t,e);}
function I8(a,b,c,d,e){var f;f=GW(e,Mg(b,c,d));if(IR(f)&&!BG(f)&&KE(f)==Kd(f))a.t=E8(f);else{a.t=$rt_createCharArray(W(f));f.kv(a.t);}}
function Qj(a,b){if(b>=0&&b<a.t.data.length)return a.t.data[b];G(Ff());}
function Wa(a){return a.t.data.length;}
function Y7(a){return a.t.data.length?0:1;}
function RA(a,b,c){var d,e,f;if((c+b.g()|0)>a.g())return 0;d=0;while(d<b.g()){e=b.d(d);f=c+1|0;if(e!=a.d(c))return 0;d=d+1|0;c=f;}return 1;}
function Ze(a,b){if(a===b)return 1;return a.iq(b,0);}
function PV(a,b,c){var d,e,f,g;d=Bq(0,c);if(b<65536){e=b&65535;while(true){if(d>=a.t.data.length)return (-1);if(a.t.data[d]==e)break;d=d+1|0;}return d;}f=CQ(b);g=CF(b);while(true){if(d>=(a.t.data.length-1|0))return (-1);if(a.t.data[d]==f&&a.t.data[d+1|0]==g)break;d=d+1|0;}return d;}
function UQ(a,b){return a.cE(b,0);}
function Qu(a,b,c){var d,e,f,g,h,i;d=U(c,a.g()-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.t.data[d]==e)break;d=d+(-1)|0;}return d;}f=CQ(b);g=CF(b);while(true){if(d<1)return (-1);if(a.t.data[d]==g){h=a.t.data;i=d-1|0;if(h[i]==f)break;}d=d+(-1)|0;}return i;}
function Ul(a,b,c){var d,e,f;d=Bq(0,c);e=a.g()-b.g()|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=b.g())break a;if(a.d(d+f|0)!=b.d(f))break;f=f+1|0;}d=d+1|0;}return d;}
function UF(a,b,c){var d,e;d=U(c,a.g()-b.g()|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=b.g())break a;if(a.d(d+e|0)!=b.d(e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function OA(a,b,c){if(b>c)G(Cq());return E_(a.t,b,c-b|0);}
function Yn(a,b){return a.cf(b,a.g());}
function U2(a,b,c){return a.cf(b,c);}
function Ng(a,b){var c,d,e;c=a.g()-b.g()|0;d=0;while(d<=c){e=0;while(true){if(e>=b.g())return 1;if(a.d(d+e|0)!=b.d(e))break;e=e+1|0;}d=d+1|0;}return 0;}
function ZI(a){var b,c;b=0;c=a.g()-1|0;a:{while(b<=c){if(a.d(b)>32)break a;b=b+1|0;}}while(b<=c&&a.d(c)<=32){c=c+(-1)|0;}return a.cf(b,c+1|0);}
function RX(a){return a;}
function Zc(a){var b,c,d;b=$rt_createCharArray(a.t.data.length);c=0;while(true){d=b.data;if(c>=d.length)break;d[c]=a.t.data[c];c=c+1|0;}return b;}
function MG(b){var c,d;CP();c=new Bh;d=$rt_createCharArray(1);d.data[0]=b;Dr(c,d);return c;}
function EL(b){CP();return J().n(b).e();}
function XC(a,b){var c,d;if(a===b)return 1;if(!(b instanceof Bh))return 0;c=b;if(c.g()!=a.g())return 0;d=0;while(d<c.g()){if(a.d(d)!=c.d(d))return 0;d=d+1|0;}return 1;}
function X0(a,b){var c;if(a===b)return 1;if(b===null)return 0;if(a.g()!=b.g())return 0;c=0;while(c<a.g()){if(BI(a.d(c))!=BI(b.d(c)))return 0;c=c+1|0;}return 1;}
function P7(a){var b,c,d,e;a:{if(!a.dI){b=a.t.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.dI=(31*a.dI|0)+e|0;d=d+1|0;}}}return a.dI;}
function O2(a){var b,c,d,e,f,g,h,i;if(a.Q())return a;b=$rt_createIntArray(a.t.data.length);c=0;d=0;while(d<a.t.data.length){a:{if(d!=(a.t.data.length-1|0)&&Bm(a.t.data[d])){e=a.t.data;f=d+1|0;g=e[f];if(Bt(g)){h=b.data;i=c+1|0;h[c]=Cn(BS(a.t.data[d],a.t.data[f]));d=f;break a;}}h=b.data;i=c+1|0;h[c]=Bz(a.t.data[d]);}d=d+1|0;c=i;}return AC2(b,0,c);}
function AAc(a,b){return Hz(TJ(b),a.e());}
function WO(){AFW=ADc();}
function FT(){C.call(this);}
var AFY=null;function ADH(){ADH=Bc(FT);Uc();}
function Gm(){ADH();return AFY;}
function Uc(){AFY=AAy();AFY.hD(B(284),XT());}
function M$(){T.call(this);}
function ADf(){var a=new M$();Q2(a);return a;}
function Q2(a){BA(a);}
function Ig(){Cb.call(this);}
function ACr(a,b,c){var d=new Ig();VG(d,a,b,c);return d;}
function VG(a,b,c,d){Em(a,b,c,d);}
function PR(a,b,c,d){var e;e=a.f.b(b,c,d);if(e>=0)return e;return a.w.b(b,c,d);}
function Ed(){Dj.call(this);}
function AFZ(a,b,c){var d=new Ed();Jf(d,a,b,c);return d;}
function Jf(a,b,c,d){Lb(a,b,c,d);}
function Qz(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=$rt_createCharArray(U(W(b),512));e=0;f=0;g=$rt_createByteArray(U(W(c),512));a:{while(true){if((e+32|0)>f&&BR(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=U(W(b)+j|0,i.length);b.iC(d,j,f-j|0);e=0;}if(!BR(c)){if(!BR(b)&&e>=f){Bg();k=AEB;}else{Bg();k=AEz;}break a;}i=g.data;l=U(W(c),i.length);m=ABB(b,c);k=a.jE(d,e,f,g,0,l,m);e=m.hV;if(k===null&&0==m.f3){Bg();k=AEB;}j=m.f3;c.hW(g,0,j);if(k!==null)break;}}b.fb(BG(b)-(f-e|0)|0);return k;}
function JU(){Ed.call(this);}
function ACm(a){var b=new JU();UT(b,a);return b;}
function UT(a,b){Jf(a,b,2.0,4.0);}
function ZX(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(h.dB(2))break a;Bg();i=AEz;break a;}k=e.data;n=f+1|0;k[f]=(192|l>>6)<<24>>24;m=n+1|0;k[n]=(128|l&63)<<24>>24;}else if(!D3(l)){if((f+3|0)>g){j=j+(-1)|0;if(h.dB(3))break a;Bg();i=AEz;break a;}k=e.data;o=f+1|0;k[f]=(224|l>>12)<<24>>24;n=o+1|0;k[o]=(128|l>>6&63)<<24>>24;m=n+1|0;k[n]=(128|l&63)<<24>>24;}else{if
(!Bm(l)){i=BL(1);break a;}if(j>=d){if(h.dl())break a;Bg();i=AEB;break a;}n=j+1|0;p=k[j];if(!Bt(p)){j=n+(-2)|0;i=BL(1);break a;}if((f+4|0)>g){j=n+(-2)|0;if(h.dB(4))break a;Bg();i=AEz;break a;}k=e.data;q=BS(l,p);j=f+1|0;k[f]=(240|q>>18)<<24>>24;o=j+1|0;k[j]=(128|q>>12&63)<<24>>24;j=o+1|0;k[o]=(128|q>>6&63)<<24>>24;m=j+1|0;k[j]=(128|q&63)<<24>>24;j=n;}c=j;f=m;}j=c;}h.f9(j);h.eL(f);return i;}
function Jb(){K.call(this);}
function ACX(){var a=new Jb();Q6(a);return a;}
function Q6(a){Q(a);}
function Yr(a){return AB5(a);}
function Kp(){C.call(this);}
function XJ(){var a=new Kp();P6(a);return a;}
function P6(a){L(a);}
function Pu(a,b,c){var d,e,$$je;a:{try{d=Ip(a,b,EC(c));}catch($$e){$$je=Bd($$e);if($$je instanceof BY){e=$$je;break a;}else{throw $$e;}}return d;}Ci().l(B(285));e.eu();return 0;}
function Ip(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,$$je;Fw();d=AEO;e=Ej(c);a:{try{f=0;while(true){g=e.el();if(g===null)break;h=g.cx(35);if(h>=0)g=g.cf(0,h);i=g.hO();if(!i.g())continue;if(i.fK(B(286))){j=B8(i,58);try{g=GZ(j.E(0).c5());d=g;k=0;f=k;d=g;f=k;continue;}catch($$e){$$je=Bd($$e);if($$je instanceof Br){}else{throw $$e;}}Ci().l(J().a(B(287)).a(j.E(0)).e());continue;}if(d===AEO){j=B8(i,32);l=0;while(l<b.ei()){m=b.dJ(f,l);if(m!==null)m.ly(JS(j.E(l)));l=l+1|0;}f=f+1|0;}else if(d===AEP){j=B8(i,32);l=0;while(l
<b.ei()){m=b.dJ(f,l);if(m!==null)m.lD(DE(j.E(l)));l=l+1|0;}f=f+1|0;}else if(d===AEQ){b:{j=B8(i,32);if(f){n=f-1|0;o=0;while(true){if(o>=j.U())break b;b.lA(n,o,DE(j.E(o)));o=o+1|0;}}o=0;while(o<j.U()){b.jJ(o,DE(j.E(o)));o=o+1|0;}}f=f+1|0;}else if(d===AER){j=B8(i,32);c:{try{b.km(Ho(j.E(0).c5()));break c;}catch($$e){$$je=Bd($$e);if($$je instanceof Br){}else{throw $$e;}}Ci().l(J().a(B(288)).a(j.E(0)).e());}f=f+1|0;}}break a;}catch($$e){$$je=Bd($$e);g=$$je;}e.bG();G(g);}e.bG();return 1;}
function HS(b,c){return b!=c?0:1;}
function Uy(b,c){var d;d=b-c|0;return d!=1&&d!=(-1)?0:1;}
function L$(b,c){var d,e;d=b<=4?b:9-b|0;e=c<=4?c:9-c|0;if(d<e)c=b;return c;}
function Io(){R.call(this);}
function ABV(){var a=new Io();Z5(a);return a;}
function Z5(a){Bo(a);}
function ZA(a,b,c,d){return b;}
function QT(a,b){return 0;}
function C1(){BO.call(this);}
function Ca(){var a=new C1();P3(a);return a;}
function BV(a){var b=new C1();AAk(b,a);return b;}
function P3(a){C3(a);}
function AAk(a,b){M3(a,b);}
function EI(){Ch.call(this);}
function AF0(a,b,c,d,e){var f=new EI();HH(f,a,b,c,d,e);return f;}
function HH(a,b,c,d,e,f){Dp(a,b,c,d,e,f);Ea();c.s(AEC);}
function X$(a,b,c,d){var e,f,g;e=0;f=a.cn.c1();a:{while(true){g=a.w.b(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.cn.cZ())return (-1);return a.f.b(b,c,d);}
function MQ(){Ds.call(this);}
function XT(){var a=new MQ();Yc(a);return a;}
function Yc(a){Je(a,B(284),E(Bh,0));}
function Up(a){return ABY(a);}
function Yg(a){return ACm(a);}
function GC(){R.call(this);this.co=0;}
function AA0(a){var b=new GC();AAs(b,a);return b;}
function AAs(a,b){Bo(a);a.co=b;}
function Yk(a,b,c,d){var e,f,g;e=!d.cS()?c.g()-b|0:d.bv()-b|0;if(!e){d.C(a.co,0);return a.f.b(b,c,d);}if(e<2){f=c.d(b);g=97;}else{f=c.d(b);g=c.d(b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:d.C(a.co,0);return a.f.b(b,c,d);case 13:if(g!=10){d.C(a.co,0);return a.f.b(b,c,d);}d.C(a.co,0);return a.f.b(b,c,d);default:}return (-1);}
function SQ(a,b){var c;c=!b.bD(a.co)?0:1;b.C(a.co,(-1));return c;}
function Ii(){C.call(this);}
function Hn(){var a=this;Cy.call(a);a.ds=null;a.cY=null;a.b1=0;a.d4=0;a.eP=0;a.hJ=0;}
function AF1(a,b){var c=new Hn();J3(c,a,b);return c;}
function Ej(a){var b=new Hn();Ur(b,a);return b;}
function J3(a,b,c){EN(a);a.hJ=(-1);if(c<0)G(Cv());a.ds=b;a.cY=$rt_createCharArray(Bq(64,c));}
function Ur(a,b){J3(a,b,1024);}
function Z$(a){FG(a);a.ds.bG();a.ds=null;}
function ZU(a){var b,c,d,e;FG(a);if(a.eP&&a.b1>=a.d4)return null;b=J();a:{while(true){if(a.b1>=a.d4&&!Ez(a,0))break a;c=a.cY.data;d=a.b1;a.b1=d+1|0;e=c[d];if(e==10)break;if(e==13){if(a.b1>=a.d4&&!Ez(a,0))break a;if(a.cY.data[a.b1]!=10)break a;a.b1=a.b1+1|0;break a;}b.bx(e);}}return b.e();}
function Ez(a,b){var c;if(a.eP)return 0;a:{while(true){if(b>=a.cY.data.length)break a;c=a.ds.kk(a.cY,b,a.cY.data.length-b|0);if(c==(-1)){a.eP=1;break a;}if(!c)break;b=b+c|0;}}a.d4=b;a.b1=0;a.hJ=(-1);return 1;}
function FG(a){if(a.ds!==null)return;G(PD());}
function It(){K.call(this);}
function ACp(){var a=new It();Oj(a);return a;}
function Oj(a){Q(a);}
function Tm(a){return ABC(a);}
function Jd(){I.call(this);this.jR=null;}
function ABj(a){var b=new Jd();Nx(b,a);return b;}
function Nx(a,b){a.jR=b;P(a);}
function Xv(a,b){return MB(b);}
function Jl(){K.call(this);}
function ABH(){var a=new Jl();OV(a);return a;}
function OV(a){Q(a);}
function Ns(a){return AB4(a);}
function Hp(){Br.call(this);}
function C0(){var a=new Hp();UV(a);return a;}
function UV(a){C4(a);}
function Dy(){V.call(this);this.cK=0;}
function Yq(a){var b=new Dy();Qg(b,a);return b;}
function Qg(a,b){BC(a);a.cK=b;}
function R1(a,b){a.f=b;}
function N4(a,b,c,d){var e,f,g,h,i;e=d.q();f=b+1|0;g=BW(f,e);if(g>0){d.by=1;return (-1);}h=c.d(b);if(g<0){i=c.d(f);if(Bt(i))return (-1);}if(a.cK!=h)return (-1);return a.f.b(f,c,d);}
function Rs(a,b,c,d){var e,f,g;if(!(c instanceof Bh))return C7(a,b,c,d);e=c;f=d.q();while(true){if(b>=f)return (-1);g=e.cE(a.cK,b);if(g<0)return (-1);b=g+1|0;if(b<f&&Bt(e.d(b))){b=g+2|0;continue;}if(a.f.b(b,c,d)>=0)break;}return g;}
function Ua(a,b,c,d,e){var f,g,h,i;if(!(d instanceof Bh))return Db(a,b,c,d,e);f=d;g=e.q();a:{while(true){if(c<b)return (-1);h=f.er(a.cK,c);if(h<0)break a;if(h<b)break a;i=h+1|0;if(i<g&&Bt(f.d(i))){c=h+(-1)|0;continue;}if(a.f.b(i,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function TM(a,b){if(b instanceof B1)return 0;if(b instanceof B3)return 0;if(b instanceof BJ)return 0;if(b instanceof B0)return 0;if(b instanceof Do)return 0;if(!(b instanceof Dy))return 1;return b.cK!=a.cK?0:1;}
function RR(a,b){return 1;}
function LT(){Cd.call(this);}
function ADk(a,b,c,d){var e=new LT();Rq(e,a,b,c,d);return e;}
function Rq(a,b,c,d,e){Gh(a,b,c,d,e);}
function UC(a,b,c,d){var e,f,g,h,i;e=a.cm.cZ();f=a.cm.c1();g=0;while(true){if(g>=e){a:{while(true){h=a.f.b(b,c,d);if(h>=0)break;if((b+a.B.ba()|0)<=d.q()){h=a.B.H(b,c);b=b+h|0;g=g+1|0;}if(h<1)break a;if(g>f)break a;}return h;}return (-1);}if((b+a.B.ba()|0)>d.q()){d.by=1;return (-1);}i=a.B.H(b,c);if(i<1)break;b=b+i|0;g=g+1|0;}return (-1);}
function GM(){T.call(this);}
function SN(a){var b=new GM();U8(b,a);return b;}
function RC(){var a=new GM();Sv(a);return a;}
function U8(a,b){Df(a,b);}
function Sv(a){BA(a);}
function LX(){R.call(this);}
function Wn(){var a=new LX();T0(a);return a;}
function T0(a){Bo(a);}
function AAu(a,b,c,d){if(b&&!(d.cS()&&b==d.bv()))return (-1);return a.f.b(b,c,d);}
function Yw(a,b){return 0;}
function JX(){I.call(this);this.lb=null;}
function ADe(a){var b=new JX();Wk(b,a);return b;}
function Wk(a,b){a.lb=b;P(a);}
function Sr(a,b){return Fr(b);}
function Ku(){var a=this;C.call(a);a.dU=null;a.hY=null;}
function AA_(a,b){var c=new Ku();WM(c,a,b);return c;}
function WM(a,b,c){a.hY=b;a.dU=c;L(a);}
function W2(a){if(a.dU.readyState==4&&a.dU.status==200)QS(a.hY,$rt_str(a.dU.responseText));}
function SH(a){a.jD();}
function LW(){C.call(this);}
function U(b,c){if(b<c)c=b;return c;}
function Bq(b,c){if(b>c)c=b;return c;}
function GE(b){if(b<=0)b= -b;return b;}
function Kq(){K.call(this);}
function ABG(){var a=new Kq();Tp(a);return a;}
function Tp(a){Q(a);}
function Pw(a){var b;b=AAZ(a);b.y=1;return b;}
function FN(){var a=this;BO.call(a);a.hi=null;a.dL=null;a.dt=0;}
function Ba(a,b,c){var d=new FN();HB(d,a,b,c);return d;}
function HB(a,b,c,d){C3(a);a.dt=(-1);a.hi=b;a.dL=c;a.dt=d;}
function Yz(a){var b,c;b=B(21);if(a.dt>=1){c=$rt_createCharArray(a.dt);Sa(c,32);b=Dn(c);}return J().a(a.hi).a(a.dL!==null&&a.dL.g()?J().n(a.dt).a(B(289)).a(a.dL).a(B(289)).a(b).e():B(21)).e();}
function Kv(){K.call(this);}
function AAO(){var a=new Kv();S1(a);return a;}
function S1(a){Q(a);}
function Ts(a){var b;b=ADG(a);b.J.d7(0,2048);b.y=1;return b;}
function Di(){C.call(this);}
var AE_=null;var AFa=null;var AE$=null;function B2(){B2=Bc(Di);Rf();}
function Rf(){var b,c;b=E(De,11);c=b.data;c[0]=Z(B(290),B(21),B(291));c[1]=Z(B(292),B(21),B(293));c[2]=Z(B(294),B(21),B(295));c[3]=Z(B(296),B(21),B(297));c[4]=Z(B(298),B(21),B(299));c[5]=Z(B(300),B(21),B(301));c[6]=Z(B(302),B(21),B(303));c[7]=Z(B(304),B(21),B(305));c[8]=Z(B(306),B(21),B(307));c[9]=Z(B(308),B(21),B(309));c[10]=Z(B(310),B(21),B(311));AE_=b;b=E(De,4);c=b.data;c[0]=Z(B(312),B(313),B(314));c[1]=Z(B(315),B(316),B(317));c[2]=Z(B(318),B(319),B(320));c[3]=Z(B(321),B(322),B(323));AFa=b;b=E(De,10);c=b.data;c[0]
=Z(B(254),B(324),B(325));c[1]=Z(B(326),B(327),B(328));c[2]=Z(B(329),B(330),B(331));c[3]=Z(B(332),B(333),B(334));c[4]=Z(B(335),B(336),B(337));c[5]=Z(B(338),B(339),B(340));c[6]=Z(B(341),B(342),B(343));c[7]=Z(B(344),B(345),B(346));c[8]=Z(B(347),B(348),B(349));c[9]=Z(B(350),B(351),B(352));AE$=b;}
function H7(){C.call(this);}
function ADc(){var a=new H7();QU(a);return a;}
function QU(a){L(a);}
function EV(){C.call(this);}
var AF2=null;function ACc(){ACc=Bc(EV);Oh();}
function AA8(){var a=new EV();KJ(a);return a;}
function KJ(a){ACc();L(a);}
function Uq(a,b,c,d){var e,f,g,h,i,j,k,l;e=Hv(a,b);f=M7(a,b,c);g=MZ(a,b,c);h=M_(a,b,d);i=Id(a,b,d);j=JL(a,b,d);k=E($rt_arraycls($rt_doublecls()),3);l=k.data;l[0]=I1(a,b,c);l[1]=Mp(a,b,i);l[2]=IK(a,b,j);return ACN(b,e,f,g,h,i,j,k);}
function Hv(a,b){var c,d,e,f;c=BX();d=b.d9();if(b.d5()>4)c.bo(B(353));e=65;while(e<=90){if(d.cx(e)<0)c.bo(J().a(B(354)).bx(e).a(B(355)).e());e=(e+1|0)&65535;}f=0;while(f<d.g()){e=d.d(f);f=f+1|0;if(d.cE(e,f)>=0)c.bo(J().a(B(354)).bx(e).a(B(356)).e());}return c;}
function M7(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=AAy();e=0;while(e<b.d5()){f=0;while(f<b.ei()){g=b.dJ(e,f);if(g!==null){h=Fz(0.0);i=g.dT().data;j=i.length;k=0;while(k<j){l=i[k];m=JP(l,c);if(m!==null)h=Fz(h.dS()+m.bJ());k=k+1|0;}d.hD(g,h);}f=f+1|0;}e=e+1|0;}return d;}
function MZ(a,b,c){var d,e,f,g,h,i,j;d=$rt_createDoubleArray(10);e=c.X();while(e.Y()){f=e.V();g=f.cg();h=b.cb(g);if(h!==null){i=d.data;j=h.bc();i[j]=i[j]+f.bJ();}}return d;}
function M_(a,b,c){var d,e,f,g,h,i,j;d=0.0;e=c.X();while(e.Y()){f=e.V();g=f.c3().ct();h=g.data;i=b.cb(h[0]);j=b.cb(h[1]);if(i.gs()!=j.gs())d=d+f.bJ();}return d;}
function Id(a,b,c){var d,e,f,g,h,i,j,k;d=BX();e=c.X();while(e.Y()){f=e.V();g=f.c3().ct();h=g.data;i=b.cb(h[0]);j=b.cb(h[1]);if(i!==null&&j!==null&&h[0]!=h[1]&&HS(i.bc(),j.bc())){k=Ro(i,j,f);d.bo(k);}}return d;}
function JL(a,b,c){var d,e,f,g,h,i,j,k,l;d=BX();e=c.X();while(e.Y()){f=e.V();g=f.c3().ct();h=g.data;i=b.cb(h[0]);j=b.cb(h[1]);if(i!==null&&j!==null&&Uy(i.bc(),j.bc())){k=L$(i.bc(),j.bc());if(b.k2(k)){l=Ro(i,j,f);d.bo(l);}}}return d;}
function I1(a,b,c){var d,e,f,g,h,i,j,k,l;d=$rt_createDoubleArray(10);e=b.d9().ct().data;f=e.length;g=0;while(g<f){h=e[g];i=b.cb(h);j=JP(h,c);if(j!==null){k=d.data;l=i.bc();k[l]=k[l]+i.iV()*j.bJ();}g=g+1|0;}return d;}
function Mp(a,b,c){var d,e,f,g,h,i,j;d=$rt_createDoubleArray(10);e=c.X();while(e.Y()){f=d.data;g=e.V();h=g.cr().bc();i=U(2,GE(g.cr().dr()-g.du().dr()|0));j=b.k3(i);f[h]=f[h]+g.cs().bJ()*j;}return d;}
function IK(a,b,c){var d,e,f,g,h,i,j,k,l;d=$rt_createDoubleArray(10);e=c.X();while(e.Y()){f=d.data;g=e.V();h=g.cr().bc();i=g.du().bc();j=L$(h,i);k=U(2,GE(g.cr().dr()-g.du().dr()|0));l=b.lU(j,k);f[j]=f[j]+g.cs().bJ()*l;}return d;}
function Oh(){AF2=BX();}
function LL(){var a=this;C.call(a);a.c=null;a.bm=0;a.fj=null;a.gZ=0;a.bT=0;a.b7=0;a.O=0;a.eI=null;}
function AA2(){var a=new LL();Of(a);return a;}
function Lc(a,b){return ACI(a,b);}
function HA(a,b,c){var d,e,f,g,h,i;d=BX();e=Lc(a,b);f=0;g=0;if(!b.g()){h=E(Bh,1);h.data[0]=B(21);return h;}while(K7(e)){i=f+1|0;if(i>=c&&c>0)break;d.bo(b.fp(g,Mf(e)).e());g=Kj(e);f=i;}a:{d.bo(b.fp(g,b.g()).e());i=f+1|0;if(!c)while(true){i=i+(-1)|0;if(i<0)break;if(d.E(i).e().g())break a;d.iD(i);}}if(i<0)i=0;return d.jm(E(Bh,i));}
function Hz(a,b){return HA(a,b,0);}
function DL(a){return a.c.e();}
function UA(b,c){if(b===null)G(SN(B(357)));if(c&&(c|255)!=255)G(By(B(21)));Ji();AEl=1;return Kz(AA2(),b,c);}
function Kz(a,b,c){a.c=ACC(b,c);a.bm=c;a.eI=Gd(a,(-1),a.bm,null);if(a.c.Q()){Kl(a);return a;}G(Ba(B(21),a.c.e(),a.c.bt()));}
function L3(a,b){var c,d,e;c=AC5(Bb(a,2),Bb(a,64));while(!a.c.Q()){d=a.c;if(!d.cp())break;d=a.c;if(d.bi()&&a.c.bi()!=(-536870788)){d=a.c;if(d.bi()!=(-536870871))break;}c.bf(a.c.m());if(a.c.R()!=(-536870788))continue;a.c.m();}e=Ec(a,c);e.s(b);return e;}
function Gd(a,b,c,d){var e,f,g,h,i,j;e=BX();f=a.bm;g=0;if(c!=a.bm)a.bm=c;a:{switch(b){case -1073741784:h=new F_;i=a.O+1|0;a.O=i;G7(h,i);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new Fu;i=a.O+1|0;a.O=i;Ln(h,i);break a;case -33554392:h=new Ey;i=a.O+1|0;a.O=i;Mt(h,i);break a;default:a.bT=a.bT+1|0;if(d!==null)h=AB9(a.bT);else{h=ADi();g=1;}if(a.bT<=(-1))break a;if(a.bT>=10)break a;a.fj.data[a.bT]=h;break a;}h=AAW();}while(true){if(a.c.cp()&&a.c.bi()==(-536870788))j=L3(a,h);else if
(a.c.R()==(-536870788)){j=Cu(h);a.c.m();}else{j=Fi(a,h);if(a.c.R()==(-536870788))a.c.m();}if(j!==null)e.bo(j);if(a.c.Q())break;if(a.c.R()==(-536870871))break;}if(a.c.kO()==(-536870788))e.bo(Cu(h));if(a.bm!=f&&!g){a.bm=f;a.c.kA(a.bm);}switch(b){case -1073741784:break;case -536870872:return ACd(e,h);case -268435416:return AAS(e,h);case -134217688:return AB3(e,h);case -67108824:return ACQ(e,h);case -33554392:return ABc(e,h);default:switch(e.U()){case 0:break;case 1:return ABv(e.E(0),h);default:return ADI(e,h);}return Cu(h);}return ADr(e,
h);}
function JK(a){var b,c,d;b=SS();while(!a.c.Q()){c=a.c;if(!c.cp())break;c=a.c;if(c.hK())break;c=a.c;if(c.iW())break;c=a.c;if(!(!c.fi()&&!a.c.bi())){c=a.c;if(!(!c.fi()&&DX(a.c.bi()))){c=a.c;if(c.bi()!=(-536870871)){c=a.c;if((c.bi()&(-2147418113))!=(-2147483608)){c=a.c;if(c.bi()!=(-536870788)){c=a.c;if(c.bi()!=(-536870876))break;}}}}}d=a.c.m();if(!DZ(d))b.g1(d&65535);else b.kx(CJ(d));}if(!Bb(a,2))return ADp(b);if(Bb(a,64))return ADM(b);return ADX(b);}
function JW(a){var b,c,d,e,f,g,h,i,j,k;b=$rt_createIntArray(4);c=0;d=(-1);e=(-1);if(!a.c.Q()&&a.c.cp()){f=b.data;d=a.c.m();f[c]=d;e=d-4352|0;}if(e>=0&&e<19){g=$rt_createCharArray(3);f=g.data;f[c]=d&65535;h=a.c.R();i=h-4449|0;if(i>=0&&i<21){f[1]=h&65535;a.c.m();j=a.c.R();h=j-4519|0;if(h>=0&&h<28){f[2]=j&65535;a.c.m();return Wz(g,3);}return Wz(g,2);}if(!Bb(a,2))return JV(f[0]);if(Bb(a,64))return SI(f[0]);return R_(f[0]);}k=1;while(k<4&&!a.c.Q()&&a.c.cp()){f=b.data;j=k+1|0;f[k]=a.c.m();k=j;}if(k==1){f=b.data;if
(!Nh(f[0]))return F7(a,f[0]);}if(!Bb(a,2))return ADR(b,k);if(Bb(a,64))return AC9(b,k);return ADK(b,k);}
function Fi(a,b){var c,d,e,f;if(a.c.cp()&&!a.c.fi()&&DX(a.c.bi())){if(!Bb(a,128)){if(!a.c.hK()&&!a.c.iW())c=JK(a);else{d=F3(a,b);c=D6(a,b,d);}}else{c=JW(a);if(!a.c.Q()){e=a.c;if(!(e.R()==(-536870871)&&!(b instanceof Cp))){e=a.c;if(e.R()!=(-536870788)&&!a.c.cp())c=D6(a,b,c);}}}}else if(a.c.R()!=(-536870871)){d=F3(a,b);c=D6(a,b,d);}else{if(b instanceof Cp)G(Ba(B(21),a.c.e(),a.c.bt()));c=Cu(b);}a:{if(!a.c.Q()){e=a.c;if(!(e.R()==(-536870871)&&!(b instanceof Cp))){e=a.c;if(e.R()!=(-536870788)){f=Fi(a,b);if(c instanceof Bw
&&!(c instanceof Cd)&&!(c instanceof Bv)&&!(c instanceof Cb)){e=c;if(!f.Z(e.eg()))c=ABU(e);}if((f.cN()&65535)!=43)c.s(f);else c.s(f.eg());break a;}}}if(c===null)return null;c.s(b);}if((c.cN()&65535)!=43)return c;return c.eg();}
function D6(a,b,c){var d,e,f,g,h,i,j;d=a.c.R();if(c!==null&&!(c instanceof Y)){switch(d){case -2147483606:a.c.m();return ACo(c,b,d);case -2147483605:a.c.m();return AA3(c,b,(-2147483606));case -2147483585:a.c.m();return ABm(c,b,(-536870849));case -2147483525:e=new EI;f=a.c.cw();g=a.b7+1|0;a.b7=g;HH(e,f,c,b,(-536870849),g);return e;case -1073741782:case -1073741781:a.c.m();h=ACK(c,b,d);c.s(h);return h;case -1073741761:a.c.m();h=ACu(c,b,(-536870849));c.s(b);return h;case -1073741701:h=new Fe;e=a.c;e=e.cw();i=a.b7
+1|0;a.b7=i;HC(h,e,c,b,(-536870849),i);c.s(h);return h;case -536870870:case -536870869:a.c.m();h=c.cN()!=(-2147483602)?ABR(c,b,d):Bb(a,32)?ACV(c,b,d):ABF(c,b,d,Fo(a.bm));c.s(h);return h;case -536870849:a.c.m();h=ADv(c,b,(-536870849));c.s(b);return h;case -536870789:h=new Ch;e=a.c;e=e.cw();g=a.b7+1|0;a.b7=g;Dp(h,e,c,b,(-536870849),g);c.s(h);return h;default:}return c;}j=null;if(c!==null)j=c;switch(d){case -2147483606:case -2147483605:a.c.m();h=ACe(j,b,d);j.s(h);return h;case -2147483585:a.c.m();return AA4(j,
b,(-2147483585));case -2147483525:return AC7(a.c.cw(),j,b,(-2147483525));case -1073741782:case -1073741781:a.c.m();h=ACU(j,b,d);j.s(h);return h;case -1073741761:a.c.m();return ACr(j,b,(-1073741761));case -1073741701:return ADk(a.c.cw(),j,b,(-1073741701));case -536870870:case -536870869:a.c.m();h=ABP(j,b,d);j.s(h);return h;case -536870849:a.c.m();return AAX(j,b,(-536870849));case -536870789:return ACk(a.c.cw(),j,b,(-536870789));default:}return c;}
function F3(a,b){var c,d,e,f,g,h,i,j,k,l;c=null;while(true){a:{d=a.c.R();if((d&(-2147418113))==(-2147483608)){a.c.m();e=(d&16711680)>>16;d=d&(-16711681);if(d==(-16777176))a.bm=e;else{if(d!=(-1073741784))e=a.bm;c=Gd(a,d,e,b);if(a.c.R()!=(-536870871))G(Ba(B(21),a.c.e(),a.c.bt()));a.c.m();}}else{b:{c:{switch(d){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:f=(d&2147483647)-48|0;if(a.bT<f)G(Ba(B(21),a.c.e(),
a.c.bt()));a.c.m();a.O=a.O+1|0;c=!Bb(a,2)?ABa(f,a.O):Bb(a,64)?ADg(f,a.O):ADE(f,a.O);a.fj.data[f].ff=1;a.gZ=1;break a;case -2147483583:break;case -2147483582:a.c.m();c=V4(0);break a;case -2147483577:a.c.m();c=ACl();break a;case -2147483558:a.c.m();c=new FX;g=a.O+1|0;a.O=g;Kt(c,g);break a;case -2147483550:a.c.m();c=V4(1);break a;case -2147483526:a.c.m();c=ACP();break a;case -536870876:break c;case -536870866:a.c.m();if(Bb(a,32)){c=ADl();break a;}c=AB1(Fo(a.bm));break a;case -536870821:a.c.m();h=0;if(a.c.R()==
(-536870818)){h=1;a.c.m();}c=HK(a,h,b);if(a.c.R()!=(-536870819))G(Ba(B(21),a.c.e(),a.c.bt()));a.c.d6(1);a.c.m();break a;case -536870818:a.c.m();a.O=a.O+1|0;if(!Bb(a,8)){c=Wn();break a;}c=ACR(Fo(a.bm));break a;case 0:i=a.c.fh();if(i!==null)c=Ec(a,i);else{if(a.c.Q()){c=Cu(b);break a;}c=JV(d&65535);}a.c.m();break a;default:break b;}a.c.m();c=Wn();break a;}a.c.m();a.O=a.O+1|0;if(Bb(a,8)){if(Bb(a,1)){c=ADh(a.O);break a;}c=AA0(a.O);break a;}if(Bb(a,1)){c=AAM(a.O);break a;}c=ACi(a.O);break a;}if(d>=0&&!a.c.dg()){c
=F7(a,d);a.c.m();}else if(d==(-536870788))c=Cu(b);else{if(d!=(-536870871)){j=new FN;k=a.c;if(!k.dg()){g=d&65535;k=FV(g);}else k=a.c.fh().e();l=a.c;HB(j,k,l.e(),a.c.bt());G(j);}if(b instanceof Cp)G(Ba(B(21),a.c.e(),a.c.bt()));c=Cu(b);}}}if(d!=(-16777176))break;}return c;}
function HK(a,b,c){var d,e;d=Cs(a,b);e=Ec(a,d);e.s(c);return e;}
function Cs(a,b){var c,d,e,f,g,h,i,j,k,$$je;c=ACH(b,Bb(a,2),Bb(a,64));d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(a.c.Q())break a;f=a.c.R()==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(a.c.R()){case -536870874:if(d>=0)c.bf(d);d=a.c.m();if(a.c.R()!=(-536870874)){d=38;break d;}if(a.c.bi()==(-536870821)){a.c.m();e=1;d=(-1);break d;}a.c.m();if(g){c=Cs(a,0);break d;}if(a.c.R()==(-536870819))break d;c.gp(Cs(a,0));break d;case -536870867:if(!g&&a.c.bi()!=(-536870819)){h=a.c;if(h.bi()!=(-536870821)&&d>=0){a.c.m();i=
a.c.R();if(a.c.dg())break c;if(i<0){h=a.c;if(h.bi()!=(-536870819)){h=a.c;if(h.bi()!=(-536870821)&&d>=0)break c;}}e:{try{if(DX(i))break e;i=i&65535;break e;}catch($$e){$$je=Bd($$e);if($$je instanceof Br){break b;}else{throw $$e;}}}try{c.I(d,i);}catch($$e){$$je=Bd($$e);if($$je instanceof Br){break b;}else{throw $$e;}}a.c.m();d=(-1);break d;}}if(d>=0)c.bf(d);d=45;a.c.m();break d;case -536870821:if(d>=0){c.bf(d);d=(-1);}a.c.m();j=0;if(a.c.R()==(-536870818)){a.c.m();j=1;}if(!e)c.jK(Cs(a,j));else c.gp(Cs(a,j));e=
0;a.c.m();break d;case -536870819:if(d>=0)c.bf(d);d=93;a.c.m();break d;case -536870818:if(d>=0)c.bf(d);d=94;a.c.m();break d;case 0:if(d>=0)c.bf(d);k=a.c.fh();if(k===null)d=0;else{c.lF(k);d=(-1);}a.c.m();break d;default:}if(d>=0)c.bf(d);d=a.c.m();}g=0;}G(Ba(B(21),DL(a),a.c.bt()));}G(Ba(B(21),DL(a),a.c.bt()));}if(!f){if(d>=0)c.bf(d);return c;}G(Ba(B(21),DL(a),a.c.bt()-1|0));}
function F7(a,b){var c;c=DZ(b);if(Bb(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return R_(b&65535);}if(Bb(a,64)&&b>128){if(c)return ABq(b);if(Fc(b))return P1(b&65535);if(!Ek(b))return SI(b&65535);return Yq(b&65535);}}if(c)return ABx(b);if(Fc(b))return P1(b&65535);if(!Ek(b))return JV(b&65535);return Yq(b&65535);}
function Ec(a,b){var c,d;if(!b.jy()){if(!b.gx()){if(b.cj())return Xq(b);return V7(b);}if(b.cj())return Pp(b);return Zs(b);}c=b.jk();d=AAT(c);if(!b.gx()){if(b.cj())return E0(Xq(b.dN()),d);return E0(V7(b.dN()),d);}if(b.cj())return E0(Pp(b.dN()),d);return E0(Zs(b.dN()),d);}
function TJ(b){return UA(b,0);}
function Kl(a){if(a.gZ)a.eI.bB();}
function Zy(b){var c,d,e,f;c=J().a(B(358));d=0;while(true){e=b.gK(B(359),d);if(e<0)break;f=e+2|0;c.a(b.cf(d,f)).a(B(360));d=f;}return c.a(b.e$(d)).a(B(359)).e();}
function G9(a){return a.bT;}
function K4(a){return a.b7+1|0;}
function If(a){return a.O+1|0;}
function C6(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function Bb(a,b){return (a.bm&b)!=b?0:1;}
function Of(a){L(a);a.fj=E(Bs,10);a.bT=(-1);a.b7=(-1);a.O=(-1);}
function Jy(){CM.call(this);}
function ABm(a,b,c){var d=new Jy();V3(d,a,b,c);return d;}
function V3(a,b,c,d){Eu(a,b,c,d);Ea();b.s(AEC);}
function Zd(a,b,c,d){var e;e=a.w.b(b,c,d);if(e<=0)e=b;return a.f.b(e,c,d);}
function PF(a,b){a.f=b;}
function Lv(){T.call(this);}
function I6(){var a=new Lv();Wg(a);return a;}
function Wg(a){BA(a);}
function Hb(){K.call(this);}
function AAP(){var a=new Hb();NB(a);return a;}
function NB(a){Q(a);}
function Ym(a){var b;b=ACJ(a);b.y=1;return b;}
function Mv(){var a=this;DG.call(a);a.c_=0;a.bp=null;a.es=0;a.i6=0.0;a.f4=0;}
function AAy(){var a=new Mv();Ut(a);return a;}
function AF3(a){var b=new Mv();Gx(b,a);return b;}
function AF4(a,b){var c=new Mv();L_(c,a,b);return c;}
function W3(a,b){return E(ED,b);}
function Ut(a){Gx(a,16);}
function Gx(a,b){L_(a,b,0.75);}
function LY(b){var c,d;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;d=c|c>>1;d=d|d>>2;d=d|d>>4;d=d|d>>8;d=d|d>>16;return d+1|0;}
function L_(a,b,c){var d;J4(a);if(b>=0&&c>0.0){d=LY(b);a.c_=0;a.bp=a.hg(d);a.i6=c;Fa(a);return;}G(Cv());}
function Fa(a){a.f4=a.bp.data.length*a.i6|0;}
function Xd(a,b){var c;c=Hm(a,b);if(c===null)return null;return c.ef;}
function Hm(a,b){var c,d,e;if(b===null)c=Gi(a);else{d=I2(b);e=d&(a.bp.data.length-1|0);c=FC(a,b,e,d);}return c;}
function FC(a,b,c,d){var e,f;e=a.bp.data[c];while(e!==null){if(e.eU==d){f=e.fo;if(Qe(b,f))break;}e=e.di;}return e;}
function Gi(a){var b;b=a.bp.data[0];while(b!==null&&b.fo!==null){b=b.di;}return b;}
function Pd(a,b,c){return a.lp(b,c);}
function WB(a,b,c){var d,e,f,g,h;if(b===null){d=Gi(a);if(d===null){a.es=a.es+1|0;d=a.hB(null,0,0);e=a.c_+1|0;a.c_=e;if(e>a.f4)a.hA();}}else{f=I2(b);g=f&(a.bp.data.length-1|0);d=FC(a,b,g,f);if(d===null){a.es=a.es+1|0;d=a.hB(b,g,f);e=a.c_+1|0;a.c_=e;if(e>a.f4)a.hA();}}h=d.ef;d.ef=c;return h;}
function R9(a,b,c,d){var e;e=ACt(b,d);e.di=a.bp.data[c];a.bp.data[c]=e;return e;}
function Wp(a,b){var c,d,e,f,g,h,i;c=LY(!b?1:b<<1);d=a.hg(c);e=0;while(e<a.bp.data.length){f=a.bp.data[e];a.bp.data[e]=null;while(f!==null){g=d.data;h=f.eU&(c-1|0);i=f.di;f.di=g[h];g[h]=f;f=i;}e=e+1|0;}a.bp=d;Fa(a);}
function SU(a){a.kl(a.bp.data.length);}
function I2(b){return b.hN();}
function Qe(b,c){return b!==c&&!b.bQ(c)?0:1;}
function G0(){R.call(this);this.c8=0;}
function ADh(a){var b=new G0();Xr(b,a);return b;}
function Xr(a,b){Bo(a);a.c8=b;}
function Qk(a,b,c,d){var e;e=!d.cS()?c.g()-b|0:d.q()-b|0;if(e<=0){d.C(a.c8,0);return a.f.b(b,c,d);}if(c.d(b)!=10)return (-1);d.C(a.c8,1);return a.f.b(b+1|0,c,d);}
function VQ(a,b){var c;c=!b.bD(a.c8)?0:1;b.C(a.c8,(-1));return c;}
function HX(){C.call(this);}
function B8(b,c){var d,e,f;d=BX();e=SS();f=0;while(f<b.g()){if(b.d(f)!=c)e.g1(b.d(f));if(!(b.d(f)!=c&&f!=(b.g()-1|0))&&e.g()>0){d.bo(e.e());e.dQ(0);}f=f+1|0;}return d;}
function Mm(){K.call(this);}
function ACs(){var a=new Mm();AAj(a);return a;}
function AAj(a){Q(a);}
function Z6(a){var b;b=ADs(a);b.y=1;return b;}
function EK(){var a=this;C.call(a);a.fJ=0;a.gz=0;a.ie=null;}
function VJ(a,b,c){var d=new EK();Vi(d,a,b,c);return d;}
function Vi(a,b,c,d){L(a);a.fJ=b;a.gz=c;a.ie=d;}
function DS(){var a=this;C.call(a);a.cP=0;a.d0=0;}
var AEB=null;var AEz=null;function Bg(){Bg=Bc(DS);UI();}
function In(a,b){var c=new DS();Jz(c,a,b);return c;}
function Jz(a,b,c){Bg();L(a);a.cP=b;a.d0=c;}
function OX(a){return a.cP?0:1;}
function W$(a){return a.cP!=1?0:1;}
function ZS(a){return !a.hX()&&!a.fZ()?0:1;}
function Xb(a){return a.cP!=2?0:1;}
function Xt(a){return a.cP!=3?0:1;}
function Vn(a){if(a.fR())return a.d0;G(AC1());}
function BL(b){Bg();return In(2,b);}
function T3(a){switch(a.cP){case 0:G(ACF());case 1:G(ADA());case 2:G(ABT(a.d0));case 3:G(ACG(a.d0));default:}}
function UI(){AEB=In(0,0);AEz=In(1,0);}
function FX(){R.call(this);this.cT=0;}
function ACi(a){var b=new FX();Kt(b,a);return b;}
function Kt(a,b){Bo(a);a.cT=b;}
function Sb(a,b,c,d){var e,f,g,h;e=!d.cS()?c.g():d.q();if(b>=e){d.C(a.cT,0);return a.f.b(b,c,d);}f=e-b|0;if(f==2&&c.d(b)==13){g=b+1|0;if(c.d(g)==10){d.C(a.cT,0);return a.f.b(b,c,d);}}a:{if(f==1){h=c.d(b);if(h==10)break a;if(h==13)break a;if(h==133)break a;if((h|1)==8233)break a;}return (-1);}d.C(a.cT,0);return a.f.b(b,c,d);}
function SM(a,b){var c;c=!b.bD(a.cT)?0:1;b.C(a.cT,(-1));return c;}
function JH(){B_.call(this);}
function ACL(){var a=new JH();Xy(a);return a;}
function Xy(a){Fk(a);}
function UH(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function Yv(a,b,c){var d;a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}d=1;break a;}d=0;}return d;}
function JG(){B_.call(this);}
function ABO(){var a=new JG();QQ(a);return a;}
function QQ(a){Fk(a);}
function Sc(a,b){return b!=10?0:1;}
function S5(a,b,c){return b!=10?0:1;}
function LF(){CO.call(this);}
function M9(){K.call(this);}
function ABZ(){var a=new M9();XL(a);return a;}
function XL(a){Q(a);}
function TI(a){var b;b=ADP(a);b.y=1;return b;}
function CW(){var a=this;C.call(a);a.r=null;a.cQ=0;a.bF=0;a.ib=0;a.fI=0;a.bC=0;a.i=0;a.gH=0;a.cM=null;a.cd=null;a.k=0;a.dw=0;a.dG=0;a.dv=0;a.hj=null;}
var AF5=null;var AF6=null;var AF7=0;function ACC(a,b){var c=new CW();WQ(c,a,b);return c;}
function WQ(a,b,c){L(a);a.bF=1;a.hj=b;if((c&16)>0)b=Zy(b);else if((c&128)>0)b=Tf(b);a.r=$rt_createCharArray(b.g()+2|0);Gp(b.ct(),0,a.r,0,b.g());a.r.data[a.r.data.length-1|0]=0;a.r.data[a.r.data.length-2|0]=0;a.gH=a.r.data.length;a.cQ=c;Cc(a);Cc(a);}
function Z1(a){return a.bC;}
function Se(a,b){if(b>0&&b<3)a.bF=b;if(b==1)Lm(a);}
function RL(a,b){a.cQ=b;a.i=a.bC;a.cd=a.cM;a.k=a.dG+1|0;a.dv=a.dG;Cc(a);}
function TW(a){return a.cM;}
function RW(a){return a.cM===null?0:1;}
function RB(a){return a.cd===null?0:1;}
function Tq(a){Cc(a);return a.fI;}
function SX(a){var b;b=a.cM;Cc(a);return b;}
function P8(a){return a.i;}
function Vm(a){return a.fI;}
function Tf(b){return b;}
function Lm(a){a.i=a.bC;a.cd=a.cM;a.k=a.dv;a.dv=a.dG;Cc(a);}
function Cc(a){var b,c,d,e,f,g,h,$$je;a.fI=a.bC;a.bC=a.i;a.cM=a.cd;a.dG=a.dv;a.dv=a.k;while(true){b=0;a.i=a.k>=a.r.data.length?0:DK(a);a.cd=null;if(a.bF==4){if(a.i!=92)return;a.i=a.k>=a.r.data.length?0:a.r.data[X(a)];switch(a.i){case 69:break;default:a.i=92;a.k=a.dw;return;}a.bF=a.ib;a.i=a.k>(a.r.data.length-2|0)?0:DK(a);}a:{if(a.i!=92){if(a.bF==1)switch(a.i){case 36:a.i=(-536870876);break a;case 40:if(a.r.data[a.k]!=63){a.i=(-2147483608);break a;}X(a);c=a.r.data[a.k];d=0;while(true){b:{if(d){d=0;switch(c){case 33:break;case 61:a.i
=(-134217688);X(a);break b;default:G(Ba(B(21),a.e(),a.k));}a.i=(-67108824);X(a);}else{switch(c){case 33:break;case 60:X(a);c=a.r.data[a.k];d=1;break b;case 61:a.i=(-536870872);X(a);break b;case 62:a.i=(-33554392);X(a);break b;default:a.i=MI(a);if(a.i<256){a.cQ=a.i;a.i=a.i<<16;a.i=(-1073741784)|a.i;break b;}a.i=a.i&255;a.cQ=a.i;a.i=a.i<<16;a.i=(-16777176)|a.i;break b;}a.i=(-268435416);X(a);}}if(!d)break;}break a;case 41:a.i=(-536870871);break a;case 42:case 43:case 63:e=a.k>=a.r.data.length?42:a.r.data[a.k];switch
(e){case 43:a.i=a.i|(-2147483648);X(a);break a;case 63:a.i=a.i|(-1073741824);X(a);break a;default:}a.i=a.i|(-536870912);break a;case 46:a.i=(-536870866);break a;case 91:a.i=(-536870821);a.d6(2);break a;case 93:if(a.bF!=2)break a;a.i=(-536870819);break a;case 94:a.i=(-536870818);break a;case 123:a.cd=Lo(a,a.i);break a;case 124:a.i=(-536870788);break a;default:}else if(a.bF==2)switch(a.i){case 38:a.i=(-536870874);break a;case 45:a.i=(-536870867);break a;case 91:a.i=(-536870821);break a;case 93:a.i=(-536870819);break a;case 94:a.i
=(-536870818);break a;default:}}else{f=a.k>=(a.r.data.length-2|0)?(-1):DK(a);c:{a.i=f;switch(a.i){case -1:G(Ba(B(21),a.e(),a.k));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.i
=HU(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.bF!=1)break a;a.i=(-2147483648)|a.i;break a;case 65:a.i=(-2147483583);break a;case 66:a.i=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:G(Ba(B(21),a.e(),a.k));case 68:case 83:case 87:case 100:case 115:case 119:a.cd=Gf(E_(a.r,
a.dw,1),0);a.i=0;break a;case 71:a.i=(-2147483577);break a;case 80:case 112:break c;case 81:a.ib=a.bF;a.bF=4;b=1;break a;case 90:a.i=(-2147483558);break a;case 97:a.i=7;break a;case 98:a.i=(-2147483550);break a;case 99:if(a.k>=(a.r.data.length-2|0))G(Ba(B(21),a.e(),a.k));a.i=a.r.data[X(a)]&31;break a;case 101:a.i=27;break a;case 102:a.i=12;break a;case 110:a.i=10;break a;case 114:a.i=13;break a;case 116:a.i=9;break a;case 117:a.i=Ft(a,4);break a;case 120:a.i=Ft(a,2);break a;case 122:a.i=(-2147483526);break a;default:}break a;}g
=Hr(a);h=0;if(a.i==80)h=1;try{a.cd=Gf(g,h);}catch($$e){$$je=Bd($$e);if($$je instanceof EE){G(Ba(B(21),a.e(),a.k));}else{throw $$e;}}a.i=0;}}if(b)continue;else break;}}
function Hr(a){var b,c,d;b=GS(10);if(a.k<(a.r.data.length-2|0)){if(a.r.data[a.k]!=123)return J().a(B(361)).a(E_(a.r,X(a),1)).e();X(a);c=0;a:{while(a.k<(a.r.data.length-2|0)){c=a.r.data[X(a)];if(c==125)break a;b.bx(c);}}if(c!=125)G(Ba(B(21),a.e(),a.k));}if(!b.g())G(Ba(B(21),a.e(),a.k));d=b.e();if(d.g()==1)return J().a(B(361)).a(d).e();b:{c:{if(d.g()>3){if(d.ek(B(361)))break c;if(d.ek(B(362)))break c;}break b;}d=d.e$(2);}return d;}
function Lo(a,b){var c,d,e,f,$$je;c=GS(4);d=(-1);e=2147483647;a:{while(true){if(a.k>=a.r.data.length)break a;b=a.r.data[X(a)];if(b==125)break a;if(b==44&&d<0)try{d=CX(c.e(),10);c.j0(0,c.g());continue;}catch($$e){$$je=Bd($$e);if($$je instanceof C1){break;}else{throw $$e;}}c.bx(b&65535);}G(Ba(B(21),a.e(),a.k));}if(b!=125)G(Ba(B(21),a.e(),a.k));if(c.g()>0)b:{try{e=CX(c.e(),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=Bd($$e);if($$je instanceof C1){}else{throw $$e;}}G(Ba(B(21),a.e(),a.k));}else if(d<0)G(Ba(B(21),
a.e(),a.k));if((d|e|(e-d|0))<0)G(Ba(B(21),a.e(),a.k));f=a.k>=a.r.data.length?42:a.r.data[a.k];c:{switch(f){case 43:a.i=(-2147483525);X(a);break c;case 63:a.i=(-1073741701);X(a);break c;default:}a.i=(-536870789);}return ABL(d,e);}
function Wh(a){return a.hj;}
function X2(a){return !a.bC&&!a.i&&a.k==a.gH&&!a.dg()?1:0;}
function DX(b){return b<0?0:1;}
function YL(a){return !a.Q()&&!a.dg()&&DX(a.bC)?1:0;}
function Rg(a){return a.bC<=56319&&a.bC>=55296?1:0;}
function Tl(a){return a.bC<=57343&&a.bC>=56320?1:0;}
function Ek(b){return b<=56319&&b>=55296?1:0;}
function Fc(b){return b<=57343&&b>=56320?1:0;}
function Ft(a,b){var c,d,e,f,$$je;c=GS(b);d=a.r.data.length-2|0;e=0;while(true){f=BW(e,b);if(f>=0)break;if(a.k>=d)break;c.bx(a.r.data[X(a)]);e=e+1|0;}if(!f)a:{try{f=CX(c.e(),16);}catch($$e){$$je=Bd($$e);if($$je instanceof C1){break a;}else{throw $$e;}}return f;}G(Ba(B(21),a.e(),a.k));}
function HU(a){var b,c,d,e,f;b=3;c=1;d=a.r.data.length-2|0;e=E9(a.r.data[a.k],8);switch(e){case -1:break;default:if(e>3)b=2;X(a);a:{while(true){if(c>=b)break a;if(a.k>=d)break a;f=E9(a.r.data[a.k],8);if(f<0)break;e=(e*8|0)+f|0;X(a);c=c+1|0;}}return e;}G(Ba(B(21),a.e(),a.k));}
function MI(a){var b,c,d;b=1;c=a.cQ;a:while(true){if(a.k>=a.r.data.length)G(Ba(B(21),a.e(),a.k));b:{c:{d=a.r.data[a.k];switch(d){case 41:X(a);return c|256;case 45:if(!b)G(Ba(B(21),a.e(),a.k));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}X(a);}X(a);return c;}
function X(a){a.dw=a.k;if(a.cQ&4)HD(a);else a.k=a.k+1|0;return a.dw;}
function HD(a){var b;b=a.r.data.length-2|0;a.k=a.k+1|0;a:while(true){if(a.k<b&&I$(a.r.data[a.k])){a.k=a.k+1|0;continue;}if(a.k>=b)break;if(a.r.data[a.k]!=35)break;a.k=a.k+1|0;while(true){if(a.k>=b)continue a;if(K8(a,a.r.data[a.k]))continue a;a.k=a.k+1|0;}}return a.k;}
function K8(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function KV(b){return AF5.oC(b);}
function TG(b){var c,d,e,f,g,h,i;c=b-44032|0;if(c>=0&&c<11172){d=4352+(c/588|0)|0;e=4449+((c%588|0)/28|0)|0;f=c%28|0;if(!f){g=$rt_createIntArray(2);h=g.data;h[0]=d;h[1]=e;}else{i=4519+f|0;g=$rt_createIntArray(3);h=g.data;h[0]=d;h[1]=e;h[2]=i;}return g;}return null;}
function Nh(b){var c;c=AF6.fC(b);return c==AF7?0:1;}
function Q$(b){return (b!=832?0:1)|(b!=833?0:1)|(b!=835?0:1)|(b!=836?0:1);}
function DK(a){var b,c,d;b=a.r.data[X(a)];if(Bm(b)){c=a.dw+1|0;if(c<a.r.data.length){d=a.r.data[c];if(Bt(d)){X(a);return BS(b,d);}}}return b;}
function Rd(a){return a.dG;}
function Kg(){K.call(this);}
function ABu(){var a=new Kg();YQ(a);return a;}
function YQ(a){Q(a);}
function X3(a){return Bx().I(65279,65279).I(65520,65533);}
function Jx(){var a=this;C.call(a);a.hl=null;a.iS=0;}
function AB_(a){var b=new Jx();TX(b,a);return b;}
function TX(a,b){L(a);a.hl=b;}
function Mw(){Dm.call(this);}
function AAK(){var a=new Mw();XK(a);return a;}
function XK(a){L4(a);}
function QK(a){var b;b=LV(a).b6(1);b.y=1;return b;}
function Mj(){C.call(this);this.fD=0;}
function ADO(a){var b=new Mj();Uu(b,a);return b;}
function Uu(a,b){L(a);a.fD=b;}
function RE(a,b){var c,d;c=AAU();d=ADq(c);Jt(a,b,d);return c.kc(B(284));}
function Jt(a,b,c){Jn(a,b.kq(),c);GP(a,b.k7(),c);Hd(a,b.hT(),c);c.bH(B(363));c.bH(B(364));Md(a,b.hT(),a.fD,c);c.bH(B(365));c.bH(B(366));IS(a,b.lL(),a.fD,c);c.bH(B(365));c.bH(B(365));Lw(a,b.jz(),c);}
function Jn(a,b,c){var d,e;a:{if(b!==null){d=b.X();while(true){if(!d.Y())break a;e=d.V();c.l(J().a(B(367)).a(e).a(B(368)).e());}}}}
function GP(a,b,c){var d,e,f,g,h,i,j;c.l(B(369));c.l(B(370));d=0.0;e=0.0;f=0;while(f<5){g=b.data;h=9-f|0;if(!(g[f]<=0.0&&g[h]<=0.0)){c.l(B(371));i=J().a(B(372)).n(f).a(B(373)).a(Bl(g[f]*100.0,2)).a(B(374)).n(h).a(B(373));j=g[h]*100.0;i=i.a(Bl(j,2)).a(B(375)).e();c.l(i);c.l(B(376));}d=d+g[f];e=e+g[h];f=f+1|0;}c.l(B(377));i=J().a(B(378)).a(Bl(d*100.0,2)).a(B(379));j=e*100.0;i=i.a(Bl(j,2)).a(B(375)).e();c.l(i);c.l(B(376));c.l(B(380));}
function Hd(a,b,c){var d,e,f,g,h,i,j;d=SO(b);c.l(B(381));c.l(B(370));e=0.0;f=0;while(f<5){g=d.data;h=9-f|0;if(!(g[f]<=0.0&&g[h]<=0.0)){c.l(B(371));i=J().a(B(372)).n(f).a(B(373)).a(Bl(g[f]*100.0,3)).a(B(374)).n(h).a(B(373));j=g[h]*100.0;i=i.a(Bl(j,3)).a(B(375)).e();c.l(i);c.l(B(376));j=e+g[f];e=j+g[h];}f=f+1|0;}c.l(B(377));i=J().a(B(382));j=e*100.0;i=i.a(Bl(j,3)).a(B(375)).e();c.l(i);c.l(B(376));c.l(B(380));}
function Md(a,b,c,d){var e,f,g,h;d.l(B(383));d.l(B(370));e=0;f=b.X();a:{while(true){if(!f.Y())break a;g=f.V();d.l(B(371));h=J().a(B(372)).n(g.cr().bc()).a(B(373));h=h.a(g.cs().c3()).a(B(373));h=h.a(Bl(g.cs().bJ()*100.0,3)).a(B(375)).e();d.l(h);d.l(B(376));e=e+1|0;if(e>=c)break;}}d.l(B(380));}
function IS(a,b,c,d){var e,f,g,h;d.l(B(384));d.l(B(370));e=0;f=b.X();a:{while(true){if(!f.Y())break a;g=f.V();d.l(B(371));h=J().a(B(372)).n(g.cr().bc()).a(B(385));h=h.n(g.du().bc()).a(B(373));h=h.a(g.cs().c3()).a(B(373));h=h.a(Bl(g.cs().bJ()*100.0,3)).a(B(375)).e();d.l(h);d.l(B(376));e=e+1|0;if(e>=c)break;}}d.l(B(380));}
function Lw(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;c.l(B(386));c.l(B(370));c.l(B(371));c.l(B(387));c.l(B(376));d=$rt_createDoubleArray(3);e=0;while(e<10){f=b.data;g=f[0].data[e]+f[1].data[e]+f[2].data[e];if(f[0].data[e]>0.0){h=d.data;c.l(B(371));i=J().a(B(372)).n(e).a(B(373)).a(Bl(f[0].data[e],5)).a(B(388));j=f[1].data[e];k=i.a(Bl(j,5)).a(B(388));j=f[2].data[e];i=k.a(Bl(j,5)).a(B(388));i=i.a(Bl(g,5)).a(B(389)).e();c.l(i);c.l(B(376));h[0]=h[0]+f[0].data[e];h[1]=h[1]+f[1].data[e];h[2]=h[2]+f[2].data[e];}e=e+1|0;}l=
d.data;m=l[1]+l[2];n=l[0]+m;c.l(B(377));i=J().a(B(390)).a(Bl(l[0],5)).a(B(391));j=l[1];i=i.a(Bl(j,5)).a(B(391));j=l[2];i=i.a(Bl(j,5)).a(B(391));i=i.a(Bl(n,5)).a(B(389)).e();c.l(i);c.l(B(376));c.l(B(380));}
function Bl(b,c){return $rt_str(b.toFixed(c));}
function B3(){var a=this;Y.call(a);a.ck=null;a.jO=0;}
function V7(a){var b=new B3();RV(b,a);return b;}
function RV(a,b){BH(a);a.ck=b.c6();a.jO=b.G;}
function Nj(a,b,c){return !a.ck.j(c.d(b))?(-1):1;}
function QX(a,b){if(b instanceof B1)return DU(a.ck,b.cg());if(b instanceof B3)return CV(a.ck,b.ck);if(b instanceof BJ)return CV(a.ck,b.fc());if(!(b instanceof B0))return 1;return 0;}
function QA(a){return a.ck;}
function D7(){I.call(this);this.eV=0;}
function ADt(a){var b=new D7();HV(b,a);return b;}
function HV(a,b){P(a);a.eV=b;}
function QG(a,b){return a.G^(a.eV!=C_(b&65535)?0:1);}
function MD(){D7.call(this);}
function ABl(a){var b=new MD();O$(b,a);return b;}
function O$(a,b){HV(a,b);}
function Vb(a,b){return a.G^(!(a.eV>>C_(b&65535)&1)?0:1);}
function Ko(){Cm.call(this);this.im=0;}
function ACG(a){var b=new Ko();Yp(b,a);return b;}
function Yp(a,b){Fp(a);a.im=b;}
function T1(a){return J().a(B(392)).n(a.im).e();}
function Jc(){var a=this;I.call(a);a.eO=0;a.gR=0;a.dX=0;a.f7=0;a.bK=0;a.cu=0;a.v=null;a.F=null;}
function Bx(){var a=new Jc();Z_(a);return a;}
function AC5(a,b){var c=new Jc();Jk(c,a,b);return c;}
function ACH(a,b,c){var d=new Jc();OE(d,a,b,c);return d;}
function Z_(a){P(a);a.v=AAB();}
function Jk(a,b,c){P(a);a.v=AAB();a.eO=b;a.gR=c;}
function OE(a,b,c,d){Jk(a,c,d);a.b6(b);}
function Ne(a,b){a:{if(a.eO){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.bK){a.v.eT(C6(b&65535));break a;}a.v.gd(C6(b&65535));break a;}if(a.gR&&b>128){a.dX=1;b=Co(Cn(b));}}}if(!(!Ek(b)&&!Fc(b))){if(a.f7)a.J.eT(b-55296|0);else a.J.gd(b-55296|0);}if(a.bK)a.v.eT(b);else a.v.gd(b);if(!a.y&&DZ(b))a.y=1;return a;}
function AAr(a,b){var c,d;if(!a.y&&b.y)a.y=1;if(a.f7){if(!b.T)a.J.cV(b.bb());else a.J.bu(b.bb());}else if(!b.T)a.J.cC(b.bb());else{a.J.cO(b.bb());a.J.bu(b.bb());a.T=a.T?0:1;a.f7=1;}if(!a.cu&&b.L()!==null){if(a.bK){if(!b.c2())a.v.cV(b.L());else a.v.bu(b.L());}else if(!b.c2())a.v.cC(b.L());else{a.v.cO(b.L());a.v.bu(b.L());a.G=a.G?0:1;a.bK=1;}}else{c=a.G;if(a.F!==null){d=a.F;if(!c)a.F=AC0(a,c,d,b);else a.F=ADT(a,c,d,b);}else{if(c&&!a.bK&&a.v.Q())a.F=ACA(a,b);else if(!c)a.F=AAN(a,c,b);else a.F=ACb(a,c,b);a.cu=1;}}return a;}
function WJ(a,b,c){if(b>c)G(Cv());a:{if(!a.eO&&!(c>=55296&&b<=57343)){if(a.bK)a.v.jF(b,c+1|0);else a.v.d7(b,c+1|0);}else while(true){if(b>=(c+1|0))break a;a.bf(b);b=b+1|0;}}return a;}
function NQ(a,b){var c,d;if(!a.y&&b.y)a.y=1;if(b.cj())a.dX=1;if(!(a.T^b.T)){if(!a.T)a.J.cC(b.bb());else a.J.bu(b.bb());}else if(a.T)a.J.cV(b.bb());else{a.J.cO(b.bb());a.J.bu(b.bb());a.T=1;}if(!a.cu&&b.L()!==null){if(!(a.G^b.c2())){if(!a.G)a.v.cC(b.L());else a.v.bu(b.L());}else if(a.G)a.v.cV(b.L());else{a.v.cO(b.L());a.v.bu(b.L());a.G=1;}}else{c=a.G;if(a.F!==null){d=a.F;if(!c)a.F=ACq(a,c,d,b);else a.F=ADS(a,c,d,b);}else{if(!a.bK&&a.v.Q()){if(!c)a.F=ACw(a,b);else a.F=AC_(a,b);}else if(!c)a.F=ABD(a,b,c);else a.F
=AA7(a,b,c);a.cu=1;}}}
function W_(a,b){var c,d;if(!a.y&&b.y)a.y=1;if(b.cj())a.dX=1;if(!(a.T^b.T)){if(!a.T)a.J.bu(b.bb());else a.J.cC(b.bb());}else if(!a.T)a.J.cV(b.bb());else{a.J.cO(b.bb());a.J.bu(b.bb());a.T=0;}if(!a.cu&&b.L()!==null){if(!(a.G^b.c2())){if(!a.G)a.v.bu(b.L());else a.v.cC(b.L());}else if(!a.G)a.v.cV(b.L());else{a.v.cO(b.L());a.v.bu(b.L());a.G=0;}}else{c=a.G;if(a.F!==null){d=a.F;if(!c)a.F=ADL(a,c,d,b);else a.F=ACg(a,c,d,b);}else{if(!a.bK&&a.v.Q()){if(!c)a.F=ABg(a,b);else a.F=ABI(a,b);}else if(!c)a.F=ABz(a,b,c);else a.F
=ADJ(a,b,c);a.cu=1;}}}
function SF(a,b){if(a.F!==null)return a.G^a.F.j(b);return a.G^a.v.bL(b);}
function AAt(a){if(!a.cu)return a.v;return null;}
function U4(a){return a.J;}
function Wl(a){var b,c;if(a.F!==null)return a;b=a.L();c=ACz(a,b);return c.b6(a.c2());}
function Po(a){var b,c;b=J();c=a.v.dm(0);while(c>=0){b.d_(CJ(c));b.bx(124);c=a.v.dm(c+1|0);}if(b.g()>0)b.iw(b.g()-1|0);return b.e();}
function VE(a){return a.dX;}
function KO(){T.call(this);}
function Ye(){var a=new KO();XS(a);return a;}
function XS(a){BA(a);}
function JD(){BU.call(this);}
function ACO(){var a=new JD();YC(a);return a;}
function YC(a){CR(a);}
function Xg(a,b){WR(b);}
function WR(b){$rt_putStderr(b);}
function J0(){var a=this;C.call(a);a.fQ=0;a.fq=0;a.g$=0;}
function ACW(){var a=new J0();Nt(a);return a;}
function Nt(a){L(a);}
function Mc(){Cj.call(this);}
function AC9(a,b){var c=new Mc();X1(c,a,b);return c;}
function X1(a,b,c){ET(a,b,c);}
$rt_packages([-1,"java",0,"util",1,"regex",0,"nio",3,"charset",0,"io",0,"lang",-1,"io",7,"github",8,"colemakmods",9,"keyboard"]);
$rt_metadata([C,"Object",6,0,[],0,3,0,["nO",function(){return Cf(this);},"hN",function(){return Tt(this);},"bQ",function(b){return N3(this,b);},"e",function(){return RY(this);},"lY",function(){return Er(this);},"dF",function(){return AAb(this);}],K,0,C,[],1,0,0,["kS",function(b){return To(this,b);}],M2,0,K,[],0,0,0,["u",function(){return Tw(this);}],JY,0,K,[],0,0,0,["u",function(){return Og(this);}],CL,0,C,[],0,3,0,["ee",function(){return Vx(this);},"dO",function(){return TR(this);},"j2",function(){return WA(this);
},"eu",function(){XF(this);},"hq",function(b){ZG(this,b);}],Br,0,CL,[],0,3,0,0,T,0,Br,[],0,3,0,0,C5,"IndexOutOfBoundsException",6,T,[],0,3,0,0,Ct,0,C,[],1,0,0,0,I,0,Ct,[],1,0,E5,["L",function(){return Re(this);},"bb",function(){return PL(this);},"jy",function(){return N8(this);},"gx",function(){return Xo(this);},"c6",function(){return Vl(this);},"jk",function(){return Qd(this);},"dN",function(){return Rp(this);},"cj",function(){return YB(this);},"b6",function(b){return WF(this,b);},"c2",function(){return VC(this);
}],MM,"AbstractCharClass$LazyJavaWhitespace$1",2,I,[],0,0,0,["j",function(b){return PP(this,b);}],BY,"IOException",5,Br,[],0,3,0,0,Cm,0,BY,[],0,3,0,0,JA,"MalformedInputException",4,Cm,[],0,3,0,["dO",function(){return U9(this);}],Kr,0,K,[],0,0,0,["u",function(){return Uv(this);}],HW,0,C,[],0,3,0,["dl",function(){return UG(this);},"dB",function(b){return UO(this,b);},"f9",function(b){V5(this,b);},"eL",function(b){AAE(this,b);}],BP,0,C,[],3,3,0,0,BN,0,C,[BP],1,3,0,0,BE,0,C,[],3,3,0,0,C$,0,BN,[BE],0,3,B6,["e",function()
{return XW(this);}],Kb,"CloneNotSupportedException",6,Br,[],0,3,0,0,Cg,0,C,[],0,0,AB6,0,R,0,C,[],1,0,Ji,["bh",function(b,c,d){return C7(this,b,c,d);},"be",function(b,c,d,e){return Db(this,b,c,d,e);},"gA",function(b){SZ(this,b);},"cN",function(){return RI(this);},"kd",function(){return UN(this);},"s",function(b){FK(this,b);},"Z",function(b){return WL(this,b);},"ch",function(){return YH(this);},"bB",function(){GH(this);}],V,0,R,[],0,0,0,["b",function(b,c,d){return WS(this,b,c,d);},"s",function(b){QV(this,b);},
"Z",function(b){return AAC(this,b);},"x",function(b){return Sn(this,b);},"bB",function(){St(this);}],CK,0,V,[],0,0,0,["b",function(b,c,d){return Oz(this,b,c,d);},"bh",function(b,c,d){return NC(this,b,c,d);},"be",function(b,c,d,e){return T8(this,b,c,d,e);},"Z",function(b){return AAp(this,b);},"ch",function(){return Q0(this);},"bB",function(){YP(this);}],BF,0,C,[],3,3,0,0,Dk,0,C,[BF],3,3,0,0,El,0,C,[Dk],3,3,0,0,BK,0,C,[BF],3,3,0,0,KD,0,C,[El,BK],3,3,0,0,Gg,0,BN,[BE],0,3,U5,0,Gb,0,C,[BF],3,3,0,0,EB,0,C,[],3,3,
0,0,Ja,0,C,[],0,0,0,["i2",function(b,c){X5(this,b,c);},"fC",function(b){return NR(this,b);}],Ee,0,K,[],0,0,0,["u",function(){return Jg(this);}],DM,0,K,[],0,0,0,["u",function(){return Gw(this);}],Ki,0,DM,[],0,0,0,["u",function(){return Xa(this);}],Hg,0,CK,[],0,0,0,["bh",function(b,c,d){return VN(this,b,c,d);},"be",function(b,c,d,e){return AAl(this,b,c,d,e);},"ch",function(){return SJ(this);}],L5,"BufferOverflowException",4,T,[],0,3,0,0,CD,0,V,[],0,0,0,["b",function(b,c,d){return PG(this,b,c,d);},"s",function(b)
{Ss(this,b);},"c4",function(b){return S_(this,b);},"x",function(b){return Tb(this,b);}],Du,0,K,[],0,0,0,["u",function(){return M6(this);}],KA,0,Du,[],0,0,0,["u",function(){return O4(this);}],KU,"AbstractCharClass$1",2,I,[],0,0,0,["j",function(b){return U3(this,b);}],KR,"AbstractCharClass$2",2,I,[],0,0,0,["j",function(b){return Ot(this,b);}],Kc,0,K,[],0,0,0,["u",function(){return PM(this);}],Y,0,R,[],1,0,0,["b",function(b,c,d){return ZQ(this,b,c,d);},"ba",function(){return VB(this);},"x",function(b){return YV(this,
b);}],Ht,0,Y,[],0,0,0,["H",function(b,c){return Ud(this,b,c);}],BM,0,R,[],1,0,0,["eg",function(){return Z8(this);},"Z",function(b){return T9(this,b);},"x",function(b){return Xe(this,b);},"bB",function(){Ok(this);}],Bw,0,BM,[],0,0,0,["b",function(b,c,d){return N5(this,b,c,d);}],Cd,0,Bw,[],0,0,0,["b",function(b,c,d){return Qp(this,b,c,d);}]]);
$rt_metadata([Jh,0,Cd,[],0,0,0,["b",function(b,c,d){return T_(this,b,c,d);}],Dg,0,C,[],3,3,0,0,B9,0,CL,[],0,3,0,0,CO,0,B9,[],0,3,0,0,Dw,0,C,[BK],3,3,0,0,Ml,"StringIndexOutOfBoundsException",6,C5,[],0,3,0,0,EE,"MissingResourceException",1,T,[],0,3,0,0,JI,"AbstractCharClass$LazyJavaLetterOrDigit$1",2,I,[],0,0,0,["j",function(b){return N_(this,b);}],IB,"CharClass$18",2,I,[],0,0,0,["j",function(b){return AAn(this,b);},"e",function(){return WG(this);}],DY,0,C,[],1,3,0,["me",function(b){return K_(this,b);},"fT",function(b)
{W4(this,b);},"mY",function(b){return HM(this,b);},"ft",function(b){Xw(this,b);},"m4",function(b,c,d){return FA(this,b,c,d);},"oL",function(b){return My(this,b);},"oz",function(){return LD(this);},"lv",function(b){return I7(this,b);},"mn",function(b){return En(this,b);},"kH",function(b){return O5(this,b);},"kB",function(){UE(this);}],Bv,0,BM,[],0,0,0,["b",function(b,c,d){return Ow(this,b,c,d);}],Na,0,Bv,[],0,0,0,["b",function(b,c,d){return S4(this,b,c,d);}],LH,0,CD,[],0,0,0,["b",function(b,c,d){return Nz(this,
b,c,d);}],Iy,0,I,[],0,0,0,["j",function(b){return S7(this,b);}],D0,0,C,[],4,3,YR,0,Iz,0,I,[],0,0,0,["j",function(b){return V9(this,b);}],IA,0,I,[],0,0,0,["j",function(b){return AAI(this,b);}],Lu,0,C,[],4,3,0,0,L8,0,K,[],0,0,0,["u",function(){return VL(this);}],Jj,0,I,[],0,0,0,["j",function(b){return W7(this,b);}],IC,0,I,[],0,0,0,["j",function(b){return Rl(this,b);}],GA,0,Y,[],0,0,0,["H",function(b,c){return NE(this,b,c);}],ID,0,I,[],0,0,0,["j",function(b){return RO(this,b);}],Mo,0,BM,[],0,0,0,["b",function(b,
c,d){return Z3(this,b,c,d);},"bh",function(b,c,d){return Vr(this,b,c,d);}],IE,0,I,[],0,0,0,["j",function(b){return Y3(this,b);}],Lp,"AbstractCharClass$LazyJavaDefined$1",2,I,[],0,0,0,["j",function(b){return YG(this,b);}],Ix,0,I,[],0,0,0,["j",function(b){return V8(this,b);}],Bs,0,R,[],0,0,Ea,["b",function(b,c,d){return Qm(this,b,c,d);},"c9",function(){return N$(this);},"x",function(b){return Rk(this,b);}],Fu,0,Bs,[],0,0,0,["b",function(b,c,d){return Rz(this,b,c,d);}],CG,0,C,[BP,Dg],0,0,0,["oZ",function(b){return Ia(this,
b);},"fA",function(b,c){return J5(this,b,c);},"oA",function(b){return Il(this,b);},"gW",function(b,c){return PH(this,b,c);},"jC",function(b,c,d){return Yi(this,b,c,d);},"nJ",function(b){return Kh(this,b);},"i0",function(b,c){return Hy(this,b,c);},"mb",function(b){return F8(this,b);},"fN",function(b,c){return F4(this,b,c);},"ou",function(b){return L6(this,b);},"hP",function(b,c){return Km(this,b,c);},"b0",function(b){ES(this,b);},"e",function(){return EF(this);},"g",function(){return FR(this);},"d",function(b)
{return Ha(this,b);},"fW",function(b,c,d){return FZ(this,b,c,d);},"e9",function(b,c,d,e){return EG(this,b,c,d,e);},"oU",function(b){return EU(this,b);},"g2",function(b,c,d,e){K5(this,b,c,d,e);},"dQ",function(b){FE(this,b);},"nm",function(b){return Le(this,b);},"nq",function(b,c){return LG(this,b,c);},"nH",function(b,c){BB(this,b,c);}],Dd,0,C,[],3,3,0,0,GR,0,CG,[Dd],0,3,0,["a",function(b){return Op(this,b);},"n",function(b){return Pe(this,b);},"ik",function(b){return Xf(this,b);},"bx",function(b){return Ob(this,
b);},"jN",function(b,c,d){return Tj(this,b,c,d);},"d_",function(b){return UY(this,b);},"ic",function(b){return Ox(this,b);},"k9",function(b,c){return Vp(this,b,c);},"lS",function(b,c,d,e){return S0(this,b,c,d,e);},"j5",function(b,c){return Zt(this,b,c);},"li",function(b,c){return P4(this,b,c);},"j0",function(b,c){return XN(this,b,c);},"iw",function(b){return VI(this,b);},"j1",function(b,c){return ZM(this,b,c);},"dQ",function(b){ZZ(this,b);},"g2",function(b,c,d,e){UP(this,b,c,d,e);},"e9",function(b,c,d,e){return ZE(this,
b,c,d,e);},"fW",function(b,c,d){return Ub(this,b,c,d);},"g",function(){return Q3(this);},"e",function(){return RD(this);},"b0",function(b){Z4(this,b);},"hP",function(b,c){return Ou(this,b,c);},"fN",function(b,c){return NA(this,b,c);},"i0",function(b,c){return Xi(this,b,c);},"fA",function(b,c){return AAq(this,b,c);}],DF,0,Ee,[],0,0,0,["u",function(){return KL(this);}],KZ,"ConcurrentModificationException",1,T,[],0,3,0,0,KM,0,V,[],0,0,0,["b",function(b,c,d){return Qf(this,b,c,d);},"s",function(b){Qv(this,b);},
"x",function(b){return RT(this,b);},"Z",function(b){return Rc(this,b);}],Ga,0,C,[],3,3,0,0,Dt,0,C,[Ga],3,3,0,0,E7,0,C,[],3,3,0,0,BU,0,C,[Dt,E7],1,3,0,["df",function(b,c,d){OO(this,b,c,d);}],Mz,0,BU,[],0,3,0,["e1",function(b){OM(this,b);},"df",function(b,c,d){Qa(this,b,c,d);},"b0",function(b){ER(this,b);},"kc",function(b){return W5(this,b);}],GU,0,V,[],0,0,0,["s",function(b){Vu(this,b);},"b",function(b,c,d){return XX(this,b,c,d);}],Mn,0,Bv,[],0,0,0,["b",function(b,c,d){return Y_(this,b,c,d);}],Cp,0,Bs,[],0,0,
0,["b",function(b,c,d){return Xs(this,b,c,d);}],Ic,0,B9,[],0,3,0,0,J7,0,Bv,[],0,0,0,["b",function(b,c,d){return OL(this,b,c,d);}],Ks,0,Y,[],0,0,0,["H",function(b,c){return Uz(this,b,c);},"bh",function(b,c,d){return Vs(this,b,c,d);},"be",function(b,c,d,e){return SC(this,b,c,d,e);},"x",function(b){return Pa(this,b);}],Im,0,CG,[Dd],0,3,0,["g1",function(b){return Vv(this,b);},"lT",function(b,c,d){return Y$(this,b,c,d);},"kx",function(b){return UD(this,b);},"jG",function(b,c,d,e){return Oi(this,b,c,d,e);},"lH",function(b,
c){return XM(this,b,c);},"dQ",function(b){OS(this,b);},"e9",function(b,c,d,e){return VH(this,b,c,d,e);},"fW",function(b,c,d){return Rh(this,b,c,d);},"d",function(b){return NU(this,b);},"g",function(){return ZT(this);},"e",function(){return Rx(this);},"b0",function(b){R2(this,b);},"fN",function(b,c){return Vy(this,b,c);}],CC,0,C,[],1,3,0,["l5",function(){return Kd(this);},"oM",function(){return BG(this);},"l9",function(b){return FF(this,b);},"mm",function(){return KE(this);},"m8",function(){return IW(this);},
"oH",function(){return ME(this);},"nB",function(){return W(this);},"m5",function(){return BR(this);}],Gs,"AbstractCharClass$LazyJavaUnicodeIdentifierPart$1",2,I,[],0,0,0,["j",function(b){return YT(this,b);}],Da,0,C,[],4,0,AB7,["oW",function(b){return LC(this,b);}]]);
$rt_metadata([CN,0,C,[BE,BP],1,3,0,["l6",function(){return MK(this);}],B4,"FingerConfig$Section",10,CN,[],12,3,Fw,0,Gl,0,K,[],0,0,0,["u",function(){return Wr(this);}],Cj,0,V,[],0,0,0,["s",function(b){YK(this,b);},"b",function(b,c,d){return Qw(this,b,c,d);},"jg",function(){return FM(this);},"f$",function(b,c,d){return Yy(this,b,c,d);},"Z",function(b){return ZD(this,b);},"x",function(b){return SB(this,b);}],H8,0,Cj,[],0,0,0,0,B$,"KeyboardLayout$KeyboardType",10,CN,[],12,3,DT,0,CB,0,CO,[],0,3,0,0,K6,0,CB,[],0,
3,0,0,Mx,0,Bs,[],0,0,0,["b",function(b,c,d){return ST(this,b,c,d);}],J8,0,K,[],0,0,0,["u",function(){return UW(this);}],D$,0,V,[],0,0,0,["b",function(b,c,d){return Qx(this,b,c,d);},"x",function(b){return Ta(this,b);}],BT,0,D$,[],0,0,0,["b",function(b,c,d){return TU(this,b,c,d);},"s",function(b){Sy(this,b);}],GJ,0,BT,[],0,0,0,["b",function(b,c,d){return QI(this,b,c,d);},"x",function(b){return WX(this,b);}],Cy,0,C,[Dt],1,3,0,0,M1,0,Cy,[],0,3,0,["kk",function(b,c,d){return Tx(this,b,c,d);},"bG",function(){Nn(this);
},"nQ",function(){MP(this);}],Kw,0,BT,[],0,0,0,["b",function(b,c,d){return Q9(this,b,c,d);},"x",function(b){return VO(this,b);}],Fn,0,C,[],3,3,0,0,HP,0,C,[Fn],0,0,0,["Y",function(){return O8(this);},"V",function(){return Wt(this);},"mO",function(){Jm(this);}],Fj,0,C,[Dk],3,3,0,0,DJ,0,C,[BK],3,3,0,0,D5,0,C,[BK],3,3,0,0,Fx,0,C,[BK],3,3,0,0,D1,0,C,[BK],3,3,0,0,JJ,0,C,[Fj,Gb,BK,DJ,D5,Fx,D1,Dw],3,3,0,0,I0,0,C,[],0,3,0,["c3",function(){return TS(this);},"dp",function(){return AAe(this);},"bJ",function(){return X8(this);
}],B5,0,C,[],3,3,0,0,G$,"Quantifier",2,Ct,[B5],0,0,0,["cZ",function(){return WE(this);},"c1",function(){return WY(this);},"e",function(){return PC(this);}],DV,"UnsupportedOperationException",6,T,[],0,3,0,0,MJ,"ReadOnlyBufferException",3,DV,[],0,3,0,0,GN,"AbstractCharClass$LazyJavaUpperCase$1",2,I,[],0,0,0,["j",function(b){return QD(this,b);}],Hs,0,C,[],4,3,0,0,Ij,0,C,[],0,3,0,0,JQ,0,C,[],4,0,0,0,D2,0,DY,[],1,3,0,["jw",function(b,c){return WI(this,b,c);}],HJ,0,D2,[],0,3,0,["kp",function(b,c,d,e,f,g,h){return Yd(this,
b,c,d,e,f,g,h);},"mh",function(b){return Ck(this,b);}],H3,0,CB,[],0,3,0,0,H2,0,K,[],0,0,0,["u",function(){return Uf(this);}],FB,0,C,[],3,3,0,0,DA,0,C,[FB],3,3,0,0,Dl,0,C,[DA],1,3,0,["jm",function(b){return UX(this,b);}],Nc,0,Bw,[],0,0,0,["b",function(b,c,d){return PA(this,b,c,d);}],Jp,0,C,[],0,3,0,["dl",function(){return Ph(this);},"dB",function(b){return Ri(this,b);},"f9",function(b){WW(this,b);},"eL",function(b){S3(this,b);}],JT,0,C,[],4,3,0,0,Cb,0,Bw,[],0,0,0,["b",function(b,c,d){return NJ(this,b,c,d);},
"s",function(b){AAD(this,b);}],KN,0,Cb,[],0,0,0,["b",function(b,c,d){return OK(this,b,c,d);}],Ik,"AbstractCharClass$LazyJavaIdentifierIgnorable$1",2,I,[],0,0,0,["j",function(b){return QB(this,b);}],Gj,0,C,[],3,3,0,0,H4,"AbstractCharClass$LazyJavaLetter$1",2,I,[],0,0,0,["j",function(b){return XV(this,b);}],K3,0,Bw,[],0,0,0,["b",function(b,c,d){return QM(this,b,c,d);}],Jq,0,C,[],4,0,0,0]);
$rt_metadata([G3,"AbstractCharClass$LazyJavaUnicodeIdentifierStart$1",2,I,[],0,0,0,["j",function(b){return Tu(this,b);}],IT,0,C,[],4,3,0,0,GX,0,C,[],0,3,0,["iR",function(b,c){return TN(this,b,c);},"oq",function(b){HZ(this,b);},"n5",function(){return MR(this);},"cb",function(b){return Pi(this,b);},"dJ",function(b,c){return AAJ(this,b,c);},"d9",function(){return Zq(this);},"ei",function(){return QJ(this);},"d5",function(){return Wj(this);},"k3",function(b){return OQ(this,b);},"jJ",function(b,c){Zj(this,b,c);},
"lU",function(b,c){return YJ(this,b,c);},"lA",function(b,c,d){Un(this,b,c,d);},"k2",function(b){return RQ(this,b);},"kt",function(){return Xj(this);},"km",function(b){TL(this,b);}],Ef,0,DF,[],0,0,0,["u",function(){return Gr(this);}],Mq,0,Ef,[],0,0,0,["u",function(){return Om(this);}],JF,0,K,[],0,0,0,["u",function(){return WD(this);}],Ei,0,C,[],3,3,0,0,D8,0,C,[Ei,B5],0,0,0,0,ED,0,D8,[],0,0,0,0,LR,0,BT,[],0,0,0,["b",function(b,c,d){return Sm(this,b,c,d);},"x",function(b){return AAv(this,b);}],Dj,0,C,[],1,3,0,
["mX",function(b){LO(this,b);},"mv",function(b){return Gk(this,b);},"fT",function(b){Y8(this,b);},"oO",function(b){return LU(this,b);},"ft",function(b){Yf(this,b);},"oj",function(b,c,d){return H_(this,b,c,d);},"mp",function(b){return GY(this,b);},"ju",function(b){return N0(this,b);}],Ms,0,Y,[],0,0,0,["H",function(b,c){return TK(this,b,c);},"bh",function(b,c,d){return QW(this,b,c,d);},"be",function(b,c,d,e){return Wm(this,b,c,d,e);},"Z",function(b){return XE(this,b);},"jp",function(b,c,d){return W6(this,b,c,
d);},"jA",function(b,c,d){return Vz(this,b,c,d);},"fP",function(b,c){return XY(this,b,c);}],Li,0,R,[],0,0,0,["b",function(b,c,d){return Qn(this,b,c,d);},"x",function(b){return No(this,b);}],Lk,"ArrayStoreException",6,T,[],0,3,0,0,CM,0,Bv,[],0,0,0,["b",function(b,c,d){return U0(this,b,c,d);},"s",function(b){XH(this,b);}],J2,0,K,[],0,0,0,["u",function(){return VV(this);}],DH,0,CC,[BE],1,3,0,["lm",function(b,c,d){return Ti(this,b,c,d);},"hW",function(b,c,d){return XA(this,b,c,d);},"mQ",function(b){return KT(this,
b);},"nC",function(){return EW(this);},"eq",function(b){return VA(this,b);}],Lx,0,DH,[],0,0,0,["dK",function(){return W9(this);}],DW,0,C,[],3,3,0,0,Fl,0,C,[DW],0,0,0,["C",function(b,c){Xl(this,b,c);},"bD",function(b){return AAH(this,b);},"ec",function(){return NO(this);},"f8",function(b){return ZV(this,b);},"bM",function(b,c){S$(this,b,c);},"fy",function(b,c){QY(this,b,c);},"cD",function(b){return Sd(this,b);},"eA",function(b){return Sw(this,b);},"jW",function(b){return Zv(this,b);},"hE",function(){return Sh(this);
},"eZ",function(b){return SD(this,b);},"kG",function(){NM(this);},"hR",function(b){return Oo(this,b);},"b3",function(b,c){Sp(this,b,c);},"nS",function(b){F$(this,b);},"jL",function(){XP(this);},"jv",function(){return XR(this);},"h9",function(b,c,d){Zb(this,b,c,d);},"kn",function(){Tv(this);},"oV",function(b,c){Ls(this,b,c);},"kz",function(b){TQ(this,b);},"bv",function(){return RH(this);},"q",function(){return NK(this);},"d6",function(b){Um(this,b);},"ih",function(){return Wc(this);},"cS",function(){return XB(this);
},"dc",function(){return On(this);},"lw",function(){return PX(this);}],IY,0,Y,[],0,0,0,["H",function(b,c){return ZB(this,b,c);}],GD,0,C,[],0,3,0,["cg",function(){return O1(this);},"dp",function(){return OI(this);},"bJ",function(){return OJ(this);}],GF,"AbstractCharClass$LazyJavaJavaIdentifierPart$1",2,I,[],0,0,0,["j",function(b){return ZF(this,b);}],H$,0,C,[],0,3,0,["fl",function(){W1(this);},"mf",function(b){Kf(this,b);}],IU,0,C,[],4,3,0,0,Ds,0,C,[BE],1,3,0,["lv",function(b){return GW(this,b);}],C8,0,C,[],
0,3,B7,0,Ky,"BufferUnderflowException",4,T,[],0,3,0,0,BO,"IllegalArgumentException",6,T,[],0,3,0,0,JR,"IllegalCharsetNameException",4,BO,[],0,3,0,0,Hx,0,R,[],0,0,0,["b",function(b,c,d){return Sq(this,b,c,d);},"x",function(b){return Wo(this,b);}],Gc,0,C,[BF],3,3,0,0,Kn,0,C,[BF],1,3,0,0,Dv,0,BU,[],0,3,0,0,K2,0,Dv,[],0,3,0,["df",function(b,c,d){PK(this,b,c,d);},"mR",function(){return Ka(this);},"mL",function(b,c,d){EX(this,b,c,d);},"ke",function(b){Uh(this,b);},"bH",function(b){YE(this,b);},"l",function(b){So(this,
b);},"lq",function(b){Zp(this,b);},"lx",function(){SW(this);},"lZ",function(){Dx(this);}],FH,0,C,[],3,3,0,0,HL,0,BT,[],0,0,0,["b",function(b,c,d){return N2(this,b,c,d);},"x",function(b){return TA(this,b);}],K1,0,CD,[],0,0,0,["b",function(b,c,d){return S2(this,b,c,d);},"bh",function(b,c,d){return WP(this,b,c,d);},"be",function(b,c,d,e){return O7(this,b,c,d,e);},"Z",function(b){return Os(this,b);}],I4,0,K,[],0,0,0,["u",function(){return TZ(this);}],Iw,0,BM,[],0,0,0,["b",function(b,c,d){return Q1(this,b,c,d);},
"bh",function(b,c,d){return NS(this,b,c,d);},"nw",function(b,c,d){return Fg(this,b,c,d);},"oJ",function(b,c,d){return K9(this,b,c,d);}],JM,0,K,[],0,0,0,["u",function(){return ZW(this);}],KB,0,C,[BF],1,3,0,0,DQ,0,C,[],4,3,MA,0,LA,0,K,[],0,0,0,["u",function(){return R4(this);}],DG,0,C,[EB],1,3,0,0,Is,0,R,[],0,0,0,["b",function(b,c,d){return Y0(this,b,c,d);},"x",function(b){return AAh(this,b);}],KW,0,Bw,[],0,0,0,["b",function(b,c,d){return ZC(this,b,c,d);},"bh",function(b,c,d){return Pf(this,b,c,d);}],EH,0,C,[],
3,3,0,0,KX,0,C,[EH],0,3,0,["lu",function(){return QP(this);},"jP",function(b){return Ug(this,b);},"bW",function(){return ZP(this);},"ep",function(){return WU(this);},"kI",function(){return Ra(this);},"eB",function(){return NX(this);},"j7",function(){return Su(this);}],LB,0,C,[B5,BP],0,3,0,["gd",function(b){Sl(this,b);},"d7",function(b,c){XG(this,b,c);},"m$",function(b){return C9(this,b);},"l4",function(b){return CU(this,b);},"eT",function(b){AAz(this,b);},"jF",function(b,c){O0(this,b,c);},"bL",function(b){return O9(this,
b);},"dm",function(b){return Zx(this,b);},"k_",function(b){return RJ(this,b);},"b0",function(b){C2(this,b);},"nl",function(){CH(this);},"j9",function(b){return QO(this,b);},"bu",function(b){X4(this,b);},"cV",function(b){ZR(this,b);},"cC",function(b){XQ(this,b);},"cO",function(b){Z2(this,b);},"Q",function(){return X_(this);}]]);
$rt_metadata([F5,0,C,[],3,3,0,0,GL,"AbstractCharClass$LazyJavaJavaIdentifierStart$1",2,I,[],0,0,0,["j",function(b){return TY(this,b);}],F_,0,Bs,[],0,0,0,["b",function(b,c,d){return O3(this,b,c,d);},"x",function(b){return T2(this,b);}],Bf,0,C,[],0,3,Bj,0,D4,0,BN,[BE],0,3,AFA,0,H5,0,C,[],0,3,0,0,B1,0,Y,[],0,0,0,["ba",function(){return Za(this);},"H",function(b,c){return Xk(this,b,c);},"bh",function(b,c,d){return UL(this,b,c,d);},"be",function(b,c,d,e){return Zn(this,b,c,d,e);},"cg",function(){return Q_(this);
},"Z",function(b){return Wd(this,b);}],Gz,0,Y,[],0,0,0,["H",function(b,c){return Uj(this,b,c);}],Mh,0,BU,[],0,0,0,["e1",function(b){N6(this,b);}],DD,0,C,[],4,3,0,0,IG,0,I,[],0,0,0,["j",function(b){return Ui(this,b);}],IN,0,I,[],0,0,0,["j",function(b){return Nf(this,b);}],II,0,I,[],0,0,0,["j",function(b){return Tk(this,b);}],IH,0,I,[],0,0,0,["j",function(b){return ND(this,b);}],JC,0,K,[],0,0,0,["u",function(){return AAF(this);}],IJ,0,I,[],0,0,0,["j",function(b){return WV(this,b);}],Ju,0,K,[],0,0,0,["u",function()
{return YA(this);}],IQ,0,I,[],0,0,0,["j",function(b){return S8(this,b);}],IM,0,I,[],0,0,0,["j",function(b){return Uk(this,b);}],IL,0,I,[],0,0,0,["j",function(b){return NF(this,b);}],I_,0,V,[],4,0,0,["b",function(b,c,d){return P_(this,b,c,d);},"s",function(b){TT(this,b);},"cN",function(){return Nd(this);},"x",function(b){return ZN(this,b);}],IO,0,I,[],0,0,0,["j",function(b){return WZ(this,b);}],Gq,0,C,[DW],4,3,0,["nT",function(b){return Es(this,b);},"no",function(b){return Jw(this,b);},"mS",function(){return K7(this);
},"eZ",function(b){return MW(this,b);},"f8",function(b){return Hh(this,b);},"hE",function(){return Mf(this);},"ec",function(){return Kj(this);},"dc",function(){return HE(this);}],BZ,0,C,[BE],0,3,N,0,La,0,V,[],0,0,0,["b",function(b,c,d){return Zl(this,b,c,d);},"s",function(b){Ry(this,b);},"cN",function(){return PQ(this);},"x",function(b){return Rv(this,b);}],GK,0,Y,[],0,0,0,["H",function(b,c){return Ol(this,b,c);}],B0,0,Y,[],0,0,0,["H",function(b,c){return Tc(this,b,c);},"bh",function(b,c,d){return Pr(this,b,
c,d);},"be",function(b,c,d,e){return R0(this,b,c,d,e);},"gf",function(){return N7(this);},"Z",function(b){return SR(this,b);}],G6,"AbstractCharClass$LazyJavaLowerCase$1",2,I,[],0,0,0,["j",function(b){return Xp(this,b);}],Mr,0,K,[],0,0,0,["u",function(){return Nu(this);}],BJ,0,V,[],0,0,0,["b",function(b,c,d){return US(this,b,c,d);},"j",function(b){return VY(this,b);},"Z",function(b){return P2(this,b);},"fc",function(){return Zg(this);},"s",function(b){Va(this,b);},"x",function(b){return Vc(this,b);}],GV,0,BJ,
[],0,0,0,["j",function(b){return YW(this,b);}],Nb,0,K,[],0,0,0,["u",function(){return NP(this);}],B_,0,C,[],1,0,0,0,E6,0,V,[],0,0,0,["s",function(b){NH(this,b);},"jg",function(){return FI(this);},"b",function(b,c,d){return NI(this,b,c,d);},"Z",function(b){return Rw(this,b);},"x",function(b){return Wv(this,b);}],Dq,0,CC,[BE,Dd,Dg,Gj],1,3,0,["iC",function(b,c,d){return PJ(this,b,c,d);},"kv",function(b){return Sz(this,b);},"kY",function(b,c,d){return AAg(this,b,c,d);},"lh",function(b,c,d){return QC(this,b,c,d);
},"os",function(b){return DR(this,b);},"nU",function(){return IR(this);},"oy",function(){return E8(this);},"n2",function(){return G4(this);},"fb",function(b){return Nl(this,b);}],DP,0,Dq,[],1,0,0,["dK",function(){return Zu(this);}],LZ,0,DP,[],0,0,0,["lo",function(b){return Qh(this,b);},"he",function(b,c){Ni(this,b,c);},"jB",function(){return P$(this);},"lz",function(){return V_(this);},"kQ",function(){return Y1(this);}],M0,0,K,[],0,0,0,["u",function(){return Xx(this);}],EQ,0,C,[],0,3,AAY,["jd",function(b,c)
{return Td(this,b,c);},"n1",function(b,c,d){return KY(this,b,c,d);},"ns",function(b,c){return FW(this,b,c);},"op",function(b,c){return LN(this,b,c);}],H0,"AbstractCharClass$LazyJavaTitleCase$1",2,I,[],0,0,0,["j",function(b){return W0(this,b);}],De,0,C,[],0,3,0,["bW",function(){return OP(this);},"i7",function(){return Ya(this);},"hs",function(){return Od(this);},"bP",function(){return Sf(this);},"lM",function(b){AAx(this,b);},"eY",function(){return QF(this);},"eJ",function(b){QN(this,b);}],CA,0,C,[BF],3,3,0,
0,HG,0,C,[CA],4,0,0,["fL",function(b){MX(this,b);},"e0",function(b){return Xm(this,b);}],MH,0,C,[],0,3,0,0,HI,0,C,[CA],4,0,0,["fL",function(b){Lt(this,b);},"e0",function(b){return AAw(this,b);}],Hi,0,C,[CA],4,0,0,["fL",function(b){JN(this,b);},"e0",function(b){return Wy(this,b);}],Gy,0,C,[],0,3,0,["cr",function(){return Vd(this);},"du",function(){return YN(this);},"cs",function(){return PY(this);}],ML,"AbstractCharClass$LazyJavaMirrored$1",2,I,[],0,0,0,["j",function(b){return VK(this,b);}],L7,"UnsupportedCharsetException",
4,BO,[],0,3,0,0,Hj,0,C,[CA],4,0,0,["fL",function(b){KS(this,b);},"e0",function(b){return UM(this,b);}]]);
$rt_metadata([Lq,"AbstractCharClass$LazyJavaISOControl$1",2,I,[],0,0,0,["j",function(b){return Ty(this,b);}],J9,0,R,[],0,0,0,["b",function(b,c,d){return Q8(this,b,c,d);},"x",function(b){return Ru(this,b);},"mj",function(b,c,d,e){return FJ(this,b,c,d,e);}],KQ,0,R,[],4,0,0,["b",function(b,c,d){return ZK(this,b,c,d);},"x",function(b){return Wb(this,b);}],Dm,0,K,[],0,0,0,["u",function(){return LV(this);}],Hf,0,C,[],0,3,0,["kq",function(){return PU(this);},"lj",function(){return Ve(this);},"k7",function(){return WK(this);
},"hT",function(){return Pv(this);},"lL",function(){return YS(this);},"jz",function(){return T$(this);}],LQ,0,Y,[],0,0,0,["H",function(b,c){return Nr(this,b,c);}],DO,0,BN,[BE],0,3,FD,["dS",function(){return AAd(this);}],Ey,0,Bs,[],0,0,0,["b",function(b,c,d){return Pk(this,b,c,d);},"bt",function(){return RS(this);},"x",function(b){return Q4(this,b);}],Do,0,V,[],0,0,0,["s",function(b){QH(this,b);},"b",function(b,c,d){return SL(this,b,c,d);},"bh",function(b,c,d){return Xz(this,b,c,d);},"be",function(b,c,d,e){return T4(this,
b,c,d,e);},"Z",function(b){return OW(this,b);},"x",function(b){return VT(this,b);}],E$,0,C,[BK,DJ,D5,D1,Dw],3,3,0,0,LP,0,B9,[],0,3,0,0,LJ,0,C,[],0,3,0,["iO",function(){return WN(this);},"dr",function(){return Z7(this);},"lk",function(){return Xu(this);},"gs",function(){return Y6(this);},"bc",function(){return T6(this);},"ly",function(b){Q7(this,b);},"iV",function(){return PE(this);},"lD",function(b){T7(this,b);},"dT",function(){return Q5(this);},"g_",function(b){return Pg(this,b);},"nX",function(){return M5(this);
}],Ch,0,Bv,[],0,0,0,["b",function(b,c,d){return AAo(this,b,c,d);}],Fe,0,Ch,[],0,0,0,["b",function(b,c,d){return Pq(this,b,c,d);}],EA,0,C,[DA],3,3,0,0,DB,0,Dl,[EA],1,3,0,["X",function(){return U7(this);}],EZ,0,C,[],3,3,0,0,Ib,0,DB,[B5,BP,EZ],0,3,0,["b0",function(b){Px(this,b);},"E",function(b){return S9(this,b);},"U",function(){return QL(this);},"bo",function(b){return XI(this,b);},"lI",function(b,c){YM(this,b,c);},"iD",function(b){return TH(this,b);},"m_",function(b){Ex(this,b);},"mt",function(b){JO(this,b);
}],E4,0,C,[],3,3,0,0,Fd,0,C,[BF],3,3,0,0,HF,0,C,[BF,E$,E4,Fd],1,3,0,["m0",function(b,c){return Nw(this,b,c);},"oo",function(b,c){return N9(this,b,c);},"l$",function(b){return P9(this,b);},"mg",function(b,c,d){return Qt(this,b,c,d);},"nZ",function(b){return XO(this,b);},"n7",function(){return Sk(this);},"m2",function(b,c,d){return Oa(this,b,c,d);}],K$,0,CM,[],0,0,0,["b",function(b,c,d){return RU(this,b,c,d);}],Hu,0,C,[],0,0,0,0,Bh,0,C,[BP,BE,Dg],0,3,CP,["oI",function(b,c,d,e){I8(this,b,c,d,e);},"d",function(b)
{return Qj(this,b);},"g",function(){return Wa(this);},"Q",function(){return Y7(this);},"iq",function(b,c){return RA(this,b,c);},"ek",function(b){return Ze(this,b);},"cE",function(b,c){return PV(this,b,c);},"cx",function(b){return UQ(this,b);},"er",function(b,c){return Qu(this,b,c);},"gK",function(b,c){return Ul(this,b,c);},"lC",function(b,c){return UF(this,b,c);},"cf",function(b,c){return OA(this,b,c);},"e$",function(b){return Yn(this,b);},"fp",function(b,c){return U2(this,b,c);},"fK",function(b){return Ng(this,
b);},"hO",function(){return ZI(this);},"e",function(){return RX(this);},"ct",function(){return Zc(this);},"bQ",function(b){return XC(this,b);},"jS",function(b){return X0(this,b);},"hN",function(){return P7(this);},"c5",function(){return O2(this);},"i3",function(b){return AAc(this,b);}],FT,0,C,[],0,0,ADH,0,M$,"NegativeArraySizeException",6,T,[],0,3,0,0,Ig,0,Cb,[],0,0,0,["b",function(b,c,d){return PR(this,b,c,d);}],Ed,0,Dj,[],1,3,0,["j6",function(b,c){return Qz(this,b,c);}],JU,0,Ed,[],0,3,0,["jE",function(b,c,
d,e,f,g,h){return ZX(this,b,c,d,e,f,g,h);}],Jb,0,K,[],0,0,0,["u",function(){return Yr(this);}],Kp,0,C,[],0,3,0,["g4",function(b,c){return Pu(this,b,c);},"mI",function(b,c){return Ip(this,b,c);}],Io,0,R,[],0,0,0,["b",function(b,c,d){return ZA(this,b,c,d);},"x",function(b){return QT(this,b);}],C1,"NumberFormatException",6,BO,[],0,3,0,0,EI,0,Ch,[],0,0,0,["b",function(b,c,d){return X$(this,b,c,d);}],MQ,0,Ds,[],0,3,0,["j_",function(){return Up(this);},"kU",function(){return Yg(this);}],GC,0,R,[],0,0,0,["b",function(b,
c,d){return Yk(this,b,c,d);},"x",function(b){return SQ(this,b);}],Ii,0,C,[],0,0,0,0,Hn,0,Cy,[],0,3,0,["bG",function(){Z$(this);},"el",function(){return ZU(this);},"on",function(b){return Ez(this,b);},"nK",function(){FG(this);}],It,0,K,[],0,0,0,["u",function(){return Tm(this);}],Jd,"AbstractCharClass$LazyJavaDigit$1",2,I,[],0,0,0,["j",function(b){return Xv(this,b);}],Jl,0,K,[],0,0,0,["u",function(){return Ns(this);}],Hp,"IllegalStateException",6,Br,[],0,3,0,0,Dy,0,V,[],0,0,0,["s",function(b){R1(this,b);},"b",
function(b,c,d){return N4(this,b,c,d);},"bh",function(b,c,d){return Rs(this,b,c,d);},"be",function(b,c,d,e){return Ua(this,b,c,d,e);},"Z",function(b){return TM(this,b);},"x",function(b){return RR(this,b);}],LT,0,Cd,[],0,0,0,["b",function(b,c,d){return UC(this,b,c,d);}],GM,"NullPointerException",6,T,[],0,3,0,0,LX,0,R,[],4,0,0,["b",function(b,c,d){return AAu(this,b,c,d);},"x",function(b){return Yw(this,b);}],JX,"AbstractCharClass$LazyJavaSpaceChar$1",2,I,[],0,0,0,["j",function(b){return Sr(this,b);}],Ku,0,C,[Gc],
0,0,0,["jD",function(){W2(this);},"oN",function(){return SH(this);}],LW,0,C,[],4,3,0,0,Kq,0,K,[],0,0,0,["u",function(){return Pw(this);}]]);
$rt_metadata([FN,"PatternSyntaxException",2,BO,[],0,3,0,["dO",function(){return Yz(this);}],Kv,0,K,[],0,0,0,["u",function(){return Ts(this);}],Di,0,C,[],0,3,B2,0,H7,0,C,[F5],0,3,0,0,EV,0,C,[],0,3,ACc,["jV",function(b,c,d){return Uq(this,b,c,d);},"nf",function(b){return Hv(this,b);},"oY",function(b,c){return M7(this,b,c);},"oi",function(b,c){return MZ(this,b,c);},"nc",function(b,c){return M_(this,b,c);},"ok",function(b,c){return Id(this,b,c);},"nV",function(b,c){return JL(this,b,c);},"oE",function(b,c){return I1(this,
b,c);},"n6",function(b,c){return Mp(this,b,c);},"oG",function(b,c){return IK(this,b,c);}],LL,0,C,[BP],4,3,0,["ng",function(b){return Lc(this,b);},"mk",function(b,c){return HA(this,b,c);},"nr",function(b){return Hz(this,b);},"oK",function(){return DL(this);},"l3",function(b,c){return Kz(this,b,c);},"n4",function(b){return L3(this,b);},"np",function(b,c,d){return Gd(this,b,c,d);},"ne",function(){return JK(this);},"oc",function(){return JW(this);},"oT",function(b){return Fi(this,b);},"mZ",function(b,c){return D6(this,
b,c);},"m6",function(b){return F3(this,b);},"mH",function(b,c){return HK(this,b,c);},"nR",function(b){return Cs(this,b);},"oX",function(b){return F7(this,b);},"mw",function(b){return Ec(this,b);},"l1",function(){Kl(this);},"ms",function(){return G9(this);},"mG",function(){return K4(this);},"nj",function(){return If(this);},"nF",function(b){return Bb(this,b);}],Jy,0,CM,[],0,0,0,["b",function(b,c,d){return Zd(this,b,c,d);},"s",function(b){PF(this,b);}],Lv,"BufferOverflowException",3,T,[],0,3,0,0,Hb,0,K,[],0,0,
0,["u",function(){return Ym(this);}],Mv,0,DG,[B5,BP],0,3,0,["hg",function(b){return W3(this,b);},"ow",function(){Fa(this);},"gi",function(b){return Xd(this,b);},"oa",function(b){return Hm(this,b);},"ol",function(b,c,d){return FC(this,b,c,d);},"oD",function(){return Gi(this);},"hD",function(b,c){return Pd(this,b,c);},"lp",function(b,c){return WB(this,b,c);},"hB",function(b,c,d){return R9(this,b,c,d);},"kl",function(b){Wp(this,b);},"hA",function(){SU(this);}],G0,0,R,[],0,0,0,["b",function(b,c,d){return Qk(this,
b,c,d);},"x",function(b){return VQ(this,b);}],HX,0,C,[],0,3,0,0,Mm,0,K,[],0,0,0,["u",function(){return Z6(this);}],EK,0,C,[],0,3,0,0,DS,0,C,[],0,3,Bg,["dH",function(){return OX(this);},"da",function(){return W$(this);},"fR",function(){return ZS(this);},"hX",function(){return Xb(this);},"fZ",function(){return Xt(this);},"g",function(){return Vn(this);},"gY",function(){T3(this);}],FX,0,R,[],4,0,0,["b",function(b,c,d){return Sb(this,b,c,d);},"x",function(b){return SM(this,b);}],JH,0,B_,[],4,0,0,["dh",function(b)
{return UH(this,b);},"hd",function(b,c){return Yv(this,b,c);}],JG,0,B_,[],4,0,0,["dh",function(b){return Sc(this,b);},"hd",function(b,c){return S5(this,b,c);}],LF,0,CO,[],0,3,0,0,M9,0,K,[],0,0,0,["u",function(){return TI(this);}],CW,0,C,[],0,0,0,["R",function(){return Z1(this);},"d6",function(b){Se(this,b);},"kA",function(b){RL(this,b);},"fh",function(){return TW(this);},"dg",function(){return RW(this);},"fi",function(){return RB(this);},"m",function(){return Tq(this);},"cw",function(){return SX(this);},"bi",
function(){return P8(this);},"kO",function(){return Vm(this);},"nh",function(){Lm(this);},"oS",function(){Cc(this);},"nI",function(){return Hr(this);},"m3",function(b){return Lo(this,b);},"e",function(){return Wh(this);},"Q",function(){return X2(this);},"cp",function(){return YL(this);},"hK",function(){return Rg(this);},"iW",function(){return Tl(this);},"my",function(b){return Ft(this,b);},"mJ",function(){return HU(this);},"ov",function(){return MI(this);},"l2",function(){return X(this);},"nx",function(){return HD(this);
},"mN",function(b){return K8(this,b);},"nu",function(){return DK(this);},"bt",function(){return Rd(this);}],Kg,0,K,[],0,0,0,["u",function(){return X3(this);}],Jx,0,C,[],0,3,0,0,Mw,0,Dm,[],0,0,0,["u",function(){return QK(this);}],Mj,0,C,[FH],0,3,0,["lg",function(b){return RE(this,b);},"or",function(b,c){Jt(this,b,c);},"ny",function(b,c){Jn(this,b,c);},"mD",function(b,c){GP(this,b,c);},"nN",function(b,c){Hd(this,b,c);},"mq",function(b,c,d){Md(this,b,c,d);},"mB",function(b,c,d){IS(this,b,c,d);},"mU",function(b,
c){Lw(this,b,c);}],B3,0,Y,[],0,0,0,["H",function(b,c){return Nj(this,b,c);},"Z",function(b){return QX(this,b);},"fc",function(){return QA(this);}],D7,"UnicodeCategory",2,I,[],0,0,0,["j",function(b){return QG(this,b);}],MD,"UnicodeCategoryScope",2,D7,[],0,0,0,["j",function(b){return Vb(this,b);}],Ko,"UnmappableCharacterException",4,Cm,[],0,3,0,["dO",function(){return T1(this);}],Jc,"CharClass",2,I,[],0,0,0,["bf",function(b){return Ne(this,b);},"lF",function(b){return AAr(this,b);},"I",function(b,c){return WJ(this,
b,c);},"jK",function(b){NQ(this,b);},"gp",function(b){W_(this,b);},"j",function(b){return SF(this,b);},"L",function(){return AAt(this);},"bb",function(){return U4(this);},"c6",function(){return Wl(this);},"e",function(){return Po(this);},"cj",function(){return VE(this);}],KO,"BufferUnderflowException",3,T,[],0,3,0,0,JD,0,BU,[],0,0,0,["e1",function(b){Xg(this,b);}],J0,0,C,[],0,3,0,0,Mc,0,Cj,[],0,0,0,0]);
function $rt_array(cls,data){this.rK=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["@",": ","    at ","Caused by: ","Malformed input of length ","String contains invalid digits: ","String contains digits out of radix ","The value is too big for int type: ","String is null or empty","Illegal radix: ","�","averageCharsPerByte must be positive. Actual value is ","maxCharsPerByte must be positive. Actual value is ","newAction must be non-null","BIG_ENDIAN","LITTLE_ENDIAN","null",
"Index out of bounds","New position "," is outside of range [0;","]","","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","W","s","S","d","D","BasicLatin",
"Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog","Hanunoo","Buhid",
"Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements","GeometricShapes",
"MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo","Kanbun","BopomofoExtended",
"CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms","SmallFormVariants",
"ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","Class does not represent enum: ","Enum "," does not have the ","constant","FINGERS","EFFORT","PENALTIES","TYPE","STD","ANGLE","MATRIX","Unable to load bigram frequency string","#","{",",","}","0","Unable to read layout data","Replacement preconditions do not hold",
"Action must be non-null","The last byte in dst "," is outside of array of size ","Length "," must be non-negative","Offset ",")","The last byte in src ","Unable to load char frequency string","resources/","loaded ","Loading...","%","charsetName is null","Should never been thrown","IGNORE","REPLACE","REPORT","Initializing...","en","?","&","=","freq","Using frequency resource: ","\n[ An error occurred. Please check inputs ]\n","\n[ An error occurred. Frequency data was missing. ]\n","No frequency data found",
"Using frequency information: ","\n\nReady.","Either src or dest is null","Capacity is negative: ","The last char in dst ","The last char in src "," is outside of string of size ","Start "," must be before end ","rgb(","background-color:","Key ","  Effort: "," Usage: ","width:","px","#80c4c4","#ca80ca","#80b780","#7a93c0","#8080ca","UTF-8","Unable to load finger key definitions file",":","Invalid section ","Invalid KeyboardType ",", ","Mod-DH","layout/colemak_dh.keyb","Colemak","layout/colemak.keyb","Dvorak",
"layout/dvorak.keyb","Workman","layout/workman.keyb","MTGAP","layout/mtgap.keyb","qgmlwyfub","layout/qgmlwyfub.keyb","Asset","layout/asset.keyb","Norman","layout/norman.keyb","Qwpr","layout/qwpr.keyb","Minimak-8","layout/minimak8.keyb","Qwerty","layout/qwerty.keyb","Traditional","The traditional typing method","config/effort_traditional_config.dat","Alternative","An alternative typing method","config/effort_alternative_config.dat","Ergonomic","An ergonomic method using the Angle Mod","config/effort_ergonomic_config.dat",
"Matrix","A Matrix or ortholinear colemakmods","config/effort_matrix_config.dat","Default English data","freq/en_books.freq","en_norvig","English Data from\n  Peter Norvig, norvig.com/mayzner.html","freq/en_norvig.freq","en_wikipedia","Data from the 100 most popular\n  Wikipedia articles","freq/en_wikipedia.freq","linux_src","Data from the Linux source code","freq/linux_src.freq","da","Danish data","freq/practical_cryptography/da_pc.freq","de","German data","freq/practical_cryptography/de_pc.freq","es","Spanish data",
"freq/practical_cryptography/es_pc.freq","fr","French data","freq/practical_cryptography/fr_pc.freq","pl","Polish data","freq/practical_cryptography/pl_pc.freq","sv","Swedish data","freq/practical_cryptography/sv_pc.freq","Warning: Too many rows","Warning: letter "," is missing from layout. "," appears more than once on layout. ","Patter is null","\\Q","\\E","\\\\E\\Q","Is","In","<div style=\"display: table-row\">","<div style=\"display: table-cell\">","</div>","<div style=\"display: table-cell;padding-left:2ex\">",
"<b style=\"color:red\">","</b>","<b><u>Finger Frequency</u></b>","<table>","<tr>","<td>finger "," </td><td>","%</td><td>&nbsp;finger ","%</td>","</tr>","<tr class=\"row_total\">","<td class=\"center\">total L </td><td>","%</td><td class=\"center\">total R </td><td>","</table>","<b><u>Finger Bigram Frequency</u></b>","<td class=\"center\" colspan=\"2\" style=\"text-align:right\">total</td><td class=\"center\" colspan=\"2\">","<b><u>Top Same-Finger Bigrams</u></b>","<b><u>Top Neighbour-Finger Bigrams</u></b>",
"-","<b><u>Finger Effort</u></b>","<th> </th><th>base</th><th>s-bigrams</th><th>n-bigrams</th><th>total</th>","</td><td>","</td>","<td>total * </td><td>","</td><td> ","Unmappable characters of length "]);
Bh.prototype.toString=function(){return $rt_ustr(this);};
Bh.prototype.valueOf=Bh.prototype.toString;C.prototype.toString=function(){return $rt_ustr(RY(this));};
C.prototype.__teavm_class__=function(){return $dbg_class(this);};
function Long_eq(a,b){return a.hi===b.hi&&a.lo===b.lo;}function Long_ne(a,b){return a.hi!==b.hi||a.lo!==b.lo;}function Long_gt(a,b){if(a.hi<b.hi){return false;}if(a.hi>b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x>y;}return (a.lo&1)>(b.lo&1);}function Long_ge(a,b){if(a.hi<b.hi){return false;}if(a.hi>b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x>=y;}return (a.lo&1)>=(b.lo&1);}function Long_lt(a,b){if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}var x=a.lo>>>
1;var y=b.lo>>>1;if(x!==y){return x<y;}return (a.lo&1)<(b.lo&1);}function Long_le(a,b){if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x<=y;}return (a.lo&1)<=(b.lo&1);}function Long_add(a,b){if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return Long_fromNumber(a.lo+b.lo);}else if(Math.abs(a.hi)<Long_MAX_NORMAL&&Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)+Long_toNumber(b));}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi
=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=a_lolo+b_lolo|0;var lohi=a_lohi+b_lohi+(lolo>>16)|0;var hilo=a_hilo+b_hilo+(lohi>>16)|0;var hihi=a_hihi+b_hihi+(hilo>>16)|0;return new Long(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF|(hihi&0xFFFF)<<16);}function Long_inc(a){var lo=a.lo+1|0;var hi=a.hi;if(lo===0){hi=hi+1|0;}return new Long(lo,hi);}function Long_dec(a){var lo=a.lo -1|0;var hi=a.hi;if(lo=== -1){hi=hi -1|0;}return new Long(lo,hi);}function Long_neg(a)
{return Long_inc(new Long(a.lo^0xFFFFFFFF,a.hi^0xFFFFFFFF));}function Long_sub(a,b){if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return Long_fromNumber(a.lo -b.lo);}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=a_lolo -b_lolo|0;var lohi=a_lohi -b_lohi+(lolo>>16)|0;var hilo=a_hilo -b_hilo+(lohi>>16)|0;var hihi=a_hihi -b_hihi+(hilo>>16)|0;return new Long(lolo&0xFFFF|(lohi&0xFFFF)<<
16,hilo&0xFFFF|(hihi&0xFFFF)<<16);}function Long_compare(a,b){var r=a.hi -b.hi;if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);}function Long_isPositive(a){return (a.hi&0x80000000)===0;}function Long_isNegative(a){return (a.hi&0x80000000)!==0;}function Long_mul(a,b){var positive=Long_isNegative(a)===Long_isNegative(b);if(Long_isNegative(a)){a=Long_neg(a);}if(Long_isNegative(b)){b=Long_neg(b);}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi
=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=0;var lohi=0;var hilo=0;var hihi=0;lolo=a_lolo*b_lolo|0;lohi=lolo>>>16;lohi=(lohi&0xFFFF)+a_lohi*b_lolo|0;hilo=hilo+(lohi>>>16)|0;lohi=(lohi&0xFFFF)+a_lolo*b_lohi|0;hilo=hilo+(lohi>>>16)|0;hihi=hilo>>>16;hilo=(hilo&0xFFFF)+a_hilo*b_lolo|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lohi*b_lohi|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lolo*b_hilo|0;hihi=hihi+(hilo>>>16)|0;hihi=hihi+a_hihi*b_lolo
+a_hilo*b_lohi+a_lohi*b_hilo+a_lolo*b_hihi|0;var result=new Long(lolo&0xFFFF|lohi<<16,hilo&0xFFFF|hihi<<16);return positive?result:Long_neg(result);}function Long_div(a,b){if(Math.abs(a.hi)<Long_MAX_NORMAL&&Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_divRem(a,b))[0];}function Long_udiv(a,b){if(a.hi>=0&&a.hi<Long_MAX_NORMAL&&b.hi>=0&&b.hi<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_udivRem(a,b))[0];}function Long_rem(a,
b){if(Math.abs(a.hi)<Long_MAX_NORMAL&&Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)%Long_toNumber(b));}return (Long_divRem(a,b))[1];}function Long_urem(a,b){if(a.hi>=0&&a.hi<Long_MAX_NORMAL&&b.hi>=0&&b.hi<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_udivRem(a,b))[1];}function Long_divRem(a,b){if(b.lo===0&&b.hi===0){throw new Error("Division by zero");}var positive=Long_isNegative(a)===Long_isNegative(b);if(Long_isNegative(a)){a=Long_neg(a);}if
(Long_isNegative(b)){b=Long_neg(b);}a=new LongInt(a.lo,a.hi,0);b=new LongInt(b.lo,b.hi,0);var q=LongInt_div(a,b);a=new Long(a.lo,a.hi);q=new Long(q.lo,q.hi);return positive?[q,a]:[Long_neg(q),Long_neg(a)];}function Long_udivRem(a,b){if(b.lo===0&&b.hi===0){throw new Error("Division by zero");}a=new LongInt(a.lo,a.hi,0);b=new LongInt(b.lo,b.hi,0);var q=LongInt_div(a,b);a=new Long(a.lo,a.hi);q=new Long(q.lo,q.hi);return [q,a];}function Long_shiftLeft16(a){return new Long(a.lo<<16,a.lo>>>16|a.hi<<16);}function Long_shiftRight16(a)
{return new Long(a.lo>>>16|a.hi<<16,a.hi>>>16);}function Long_and(a,b){return new Long(a.lo&b.lo,a.hi&b.hi);}function Long_or(a,b){return new Long(a.lo|b.lo,a.hi|b.hi);}function Long_xor(a,b){return new Long(a.lo^b.lo,a.hi^b.hi);}function Long_shl(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo<<b,a.lo>>>32 -b|a.hi<<b);}else if(b===32){return new Long(0,a.lo);}else {return new Long(0,a.lo<<b -32);}}function Long_shr(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo>>>b|a.hi
<<32 -b,a.hi>>b);}else if(b===32){return new Long(a.hi,a.hi>>31);}else {return new Long(a.hi>>b -32,a.hi>>31);}}function Long_shru(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo>>>b|a.hi<<32 -b,a.hi>>>b);}else if(b===32){return new Long(a.hi,0);}else {return new Long(a.hi>>>b -32,0);}}function LongInt(lo,hi,sup){this.lo=lo;this.hi=hi;this.sup=sup;}function LongInt_mul(a,b){var a_lolo=(a.lo&0xFFFF)*b|0;var a_lohi=(a.lo>>>16)*b|0;var a_hilo=(a.hi&0xFFFF)*b|0;var a_hihi=(a.hi>>>16)*b|0;var sup
=a.sup*b|0;a_lohi=a_lohi+(a_lolo>>>16)|0;a_hilo=a_hilo+(a_lohi>>>16)|0;a_hihi=a_hihi+(a_hilo>>>16)|0;sup=sup+(a_hihi>>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup&0xFFFF;}function LongInt_sub(a,b){var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;a_lolo=a_lolo -b_lolo|0;a_lohi=a_lohi -b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo -b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi -
b_hihi+(a_hilo>>16)|0;var sup=a.sup -b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;}function LongInt_add(a,b){var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;a_lolo=a_lolo+b_lolo|0;a_lohi=a_lohi+b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo+b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi+b_hihi+(a_hilo>>16)|0;var sup=a.sup+b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF
|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;}function LongInt_inc(a){a.lo=a.lo+1|0;if(a.lo===0){a.hi=a.hi+1|0;if(a.hi===0){a.sup=a.sup+1&0xFFFF;}}}function LongInt_dec(a){a.lo=a.lo -1|0;if(a.lo=== -1){a.hi=a.hi -1|0;if(a.hi=== -1){a.sup=a.sup -1&0xFFFF;}}}function LongInt_ucompare(a,b){var r=a.sup -b.sup;if(r!==0){return r;}r=(a.hi>>>1) -(b.hi>>>1);if(r!==0){return r;}r=(a.hi&1) -(b.hi&1);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);}function LongInt_numOfLeadingZeroBits(a)
{var n=0;var d=16;while(d>0){if(a>>>d!==0){a>>>=d;n=n+d|0;}d=d/2|0;}return 31 -n;}function LongInt_shl(a,b){if(b===0){return;}if(b<32){a.sup=(a.hi>>>32 -b|a.sup<<b)&0xFFFF;a.hi=a.lo>>>32 -b|a.hi<<b;a.lo<<=b;}else if(b===32){a.sup=a.hi&0xFFFF;a.hi=a.lo;a.lo=0;}else if(b<64){a.sup=(a.lo>>>64 -b|a.hi<<b -32)&0xFFFF;a.hi=a.lo<<b;a.lo=0;}else if(b===64){a.sup=a.lo&0xFFFF;a.hi=0;a.lo=0;}else {a.sup=a.lo<<b -64&0xFFFF;a.hi=0;a.lo=0;}}function LongInt_shr(a,b){if(b===0){return;}if(b===32){a.lo=a.hi;a.hi=a.sup;a.sup
=0;}else if(b<32){a.lo=a.lo>>>b|a.hi<<32 -b;a.hi=a.hi>>>b|a.sup<<32 -b;a.sup>>>=b;}else if(b===64){a.lo=a.sup;a.hi=0;a.sup=0;}else if(b<64){a.lo=a.hi>>>b -32|a.sup<<64 -b;a.hi=a.sup>>>b -32;a.sup=0;}else {a.lo=a.sup>>>b -64;a.hi=0;a.sup=0;}}function LongInt_copy(a){return new LongInt(a.lo,a.hi,a.sup);}function LongInt_div(a,b){var bits=b.hi!==0?LongInt_numOfLeadingZeroBits(b.hi):LongInt_numOfLeadingZeroBits(b.lo)+32;var sz=1+(bits/16|0);var dividentBits=bits%16;LongInt_shl(b,bits);LongInt_shl(a,dividentBits);var q
=new LongInt(0,0,0);while(sz-->0){LongInt_shl(q,16);var digitA=(a.hi>>>16)+0x10000*a.sup;var digitB=b.hi>>>16;var digit=digitA/digitB|0;var t=LongInt_copy(b);LongInt_mul(t,digit);if(LongInt_ucompare(t,a)>=0){while(LongInt_ucompare(t,a)>0){LongInt_sub(t,b); --digit;}}else {while(true){var nextT=LongInt_copy(t);LongInt_add(nextT,b);if(LongInt_ucompare(nextT,a)>0){break;}t=nextT;++digit;}}LongInt_sub(a,t);q.lo|=digit;LongInt_shl(a,16);}LongInt_shr(a,bits+16);return q;}function $rt_startThread(runner,callback){var result;try {result
=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}main=$rt_mainStarter(PT);
(function(){var c;c=HG.prototype;c.handleEvent=c.e0;c=HI.prototype;c.handleEvent=c.e0;c=Hi.prototype;c.handleEvent=c.e0;c=Hj.prototype;c.handleEvent=c.e0;c=HF.prototype;c.dispatchEvent=c.nZ;c.addEventListener=c.m0;c.removeEventListener=c.oo;c.getLength=c.n7;c.get=c.l$;c.addEventListener=c.m2;c.removeEventListener=c.mg;c=Ku.prototype;c.stateChanged=c.oN;})();
})();
