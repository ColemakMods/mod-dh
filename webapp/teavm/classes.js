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
(b<0){b+=0x100000000;}return a%b|0;};function $rt_setCloneMethod(target, f){target.dI=f;}
function $rt_cls(cls){return HU(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return GE(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.t.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return C; }
function $rt_nullCheck(val) {if (val === null) {$rt_throw(RJ());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return AEb(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
var A=Object.create(null);
var G=$rt_throw;var BY=$rt_compare;var AEc=$rt_nullCheck;var D=$rt_cls;var F=$rt_createArray;var AC0=$rt_isInstance;var AEd=$rt_nativeThread;var AEe=$rt_suspending;var AEf=$rt_resuming;var AEg=$rt_invalidPointer;var B=$rt_s;var Be=$rt_eraseClinit;var Ce=$rt_imul;var Bb=$rt_wrapException;
function C(){this.$id$=0;}
function ACn(){var a=new C();M(a);return a;}
function M(a){return;}
function Cf(a){return HU(a.constructor);}
function TB(a){return Es(a);}
function N8(a,b){return a!==b?0:1;}
function R6(a){return J().a(Cf(a).bY()).a(B(0)).a(MY(Es(a))).e();}
function Es(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AAp(a){var b,c,d;if(!AC0(a,B6)){b=a;if(b.constructor.$meta.item===null)G(ABj());}c=Oh(a);b=c;d=$rt_nextId();b.$id$=d;return c;}
function L(){var a=this;C.call(a);a.fd=null;a.fV=null;}
function AEh(){var a=new L();Q(a);return a;}
function Q(a){M(a);}
function Tv(a,b){if(!b&&a.fd===null)a.fd=a.u();else if(b&&a.fV===null)a.fV=a.u().b9(1);if(b)return a.fV;return a.fd;}
function M6(){L.call(this);}
function ABQ(){var a=new M6();Up(a);return a;}
function Up(a){Q(a);}
function TE(a){return By().bh(32).bh(9);}
function JZ(){L.call(this);}
function ACL(){var a=new JZ();Yj(a);return a;}
function Yj(a){Q(a);}
function Ol(a){return By().J(0,31).bh(127);}
function CM(){var a=this;C.call(a);a.fr=null;a.dG=null;a.d1=0;a.ex=0;a.hI=null;}
function AEi(){var a=new CM();Lc(a);return a;}
function AEj(a){var b=new CM();F8(b,a);return b;}
function AEk(a,b){var c=new CM();MR(c,a,b);return c;}
function AEl(a){var b=new CM();Le(b,a);return b;}
function Lc(a){a.d1=1;a.ex=1;a.ee();}
function F8(a,b){a.d1=1;a.ex=1;a.ee();a.fr=b;}
function MR(a,b,c){a.d1=1;a.ex=1;a.ee();a.fr=b;a.dG=c;}
function Le(a,b){a.d1=1;a.ex=1;a.ee();a.dG=b;}
function VI(a){return a;}
function T1(a){return a.fr;}
function WO(a){return a.dR();}
function XS(a){a.hu(Cz());}
function ZU(a,b){var c,d,e,f,g;b.bL(Cf(a).bY());c=a.j8();if(c!==null)b.bL(J().a(B(1)).a(c).e());a:{b.lG();if(a.hI!==null){d=a.hI.data;e=d.length;f=0;while(true){if(f>=e)break a;g=d[f];b.bL(B(2));b.ly(g);f=f+1|0;}}}if(a.dG!==null&&a.dG!==a){b.bL(B(3));a.dG.hu(b);}}
function Br(){CM.call(this);}
function AEm(){var a=new Br();C4(a);return a;}
function AEn(a){var b=new Br();Eu(b,a);return b;}
function C4(a){Lc(a);}
function Eu(a,b){F8(a,b);}
function U(){Br.call(this);}
function AEo(){var a=new U();BB(a);return a;}
function AEb(a){var b=new U();Df(b,a);return b;}
function BB(a){C4(a);}
function Df(a,b){Eu(a,b);}
function C5(){U.call(this);}
function Cp(){var a=new C5();I5(a);return a;}
function Bp(a){var b=new C5();L2(b,a);return b;}
function I5(a){BB(a);}
function L2(a,b){Df(a,b);}
function Ct(){C.call(this);}
function AEp(){var a=new Ct();Eq(a);return a;}
function Eq(a){M(a);}
function I(){var a=this;Ct.call(a);a.G=0;a.W=0;a.K=null;a.ds=null;a.dX=null;a.y=0;}
var AEq=null;function E6(){E6=Be(I);Tn();}
function AEr(){var a=new I();P(a);return a;}
function P(a){E6();Eq(a);a.K=ACb(2048);}
function Rl(a){return null;}
function PQ(a){return a.K;}
function Ob(a){var b,c;if(!a.W){b=a.K;c=b.dr(0)>=2048?0:1;}else c=a.K.lh(0)>=2048?0:1;return c;}
function XB(a){return a.y;}
function Vw(a){return a;}
function Qi(a){var b;if(a.dX===null){b=a.bc();a.dX=AD_(a,b);a.dX.b9(a.W);}return a.dX;}
function Rw(a){var b;if(a.ds===null){b=a.bc();a.ds=AD5(a,b,a);a.ds.b9(a.c3());a.ds.y=a.y;}return a.ds;}
function YO(a){return 0;}
function WS(a,b){if(a.G^b){a.G=a.G?0:1;a.W=a.W?0:1;}if(!a.y)a.y=1;return a;}
function VN(a){return a.G;}
function DW(b,c){E6();return b.j(c);}
function CW(b,c){E6();if(b.M()!==null&&c.M()!==null)return b.M().ke(c.M());return 1;}
function Gj(b,c){E6();return LC(AEq,b).kZ(c);}
function Tn(){AEq=ADB();}
function MQ(){I.call(this);this.lg=null;}
function ACj(a){var b=new MQ();O_(b,a);return b;}
function O_(a,b){a.lg=b;P(a);}
function PU(a,b){return F0(b);}
function BZ(){Br.call(this);}
function PI(){var a=new BZ();HX(a);return a;}
function ABH(a){var b=new BZ();WD(b,a);return b;}
function HX(a){C4(a);}
function WD(a,b){Eu(a,b);}
function Cl(){BZ.call(this);}
function AEs(){var a=new Cl();Fr(a);return a;}
function Fr(a){HX(a);}
function JC(){Cl.call(this);this.iI=0;}
function AB9(a){var b=new JC();Qq(b,a);return b;}
function Qq(a,b){Fr(a);a.iI=b;}
function Vi(a){return J().a(B(4)).m(a.iI).e();}
function Ks(){L.call(this);}
function ACe(){var a=new Ks();Pe(a);return a;}
function Pe(a){Q(a);}
function UG(a){var b;b=ACt(a);b.y=1;return b;}
function H1(){var a=this;C.call(a);a.gL=null;a.iE=null;a.hX=0;a.gb=0;}
function ABR(a,b){var c=new H1();V2(c,a,b);return c;}
function V2(a,b,c){M(a);a.gL=b;a.iE=c;}
function UQ(a){return BT(a.gL);}
function UZ(a,b){return X(a.iE)<b?0:1;}
function Wg(a,b){a.hX=b;}
function AAS(a,b){a.gb=b;}
function BS(){}
function BP(){C.call(this);}
function AEt(){var a=new BP();F3(a);return a;}
function F3(a){M(a);}
function BE(){}
function C$(){BP.call(this);this.iR=0;}
var AEu=null;function B7(){B7=Be(C$);U$();}
function AC5(a){var b=new C$();DP(b,a);return b;}
function DP(a,b){B7();F3(a);a.iR=b;}
function JD(b,c){B7();if(!(c>=2&&c<=36))c=10;return ADA(20).g2(b,c).e();}
function MY(b){B7();return Oj(b,4);}
function Iu(b){B7();return JD(b,10);}
function CY(b,c){var d,e,f,g,h;B7();if(c>=2&&c<=36){if(b!==null&&!b.E()){a:{d=0;e=0;switch(b.d(0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=0;if(e==b.g())G(Ca());while(e<b.g()){g=e+1|0;h=Ei(b.d(e));if(h<0)G(BX(J().a(B(5)).a(b).e()));if(h>=c)G(BX(J().a(B(6)).m(c).a(B(1)).a(b).e()));f=Ce(c,f)+h|0;if(f<0){if(g==b.g()&&f==(-2147483648)&&d)return (-2147483648);G(BX(J().a(B(7)).a(b).e()));}e=g;}if(d)f= -f;return f;}G(BX(B(8)));}G(BX(J().a(B(9)).m(c).e()));}
function DN(b){B7();return CY(b,10);}
function X9(a){return Iu(a.iR);}
function EP(b){var c,d,e;B7();if(!b)return 32;c=0;d=b>>>16;if(d)c=16;else d=b;e=d>>>8;if(!e)e=d;else c=c|8;d=e>>>4;if(!d)d=e;else c=c|4;e=d>>>2;if(!e)e=d;else c=c|2;if(e>>>1)c=c|1;return (32-c|0)-1|0;}
function CZ(b){var c,d,e;B7();if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;e=d<<8;if(!e)e=d;else c=c|8;d=e<<4;if(!d)d=e;else c=c|4;e=d<<2;if(!e)e=d;else c=c|2;if(e<<1)c=c|1;return (32-c|0)-1|0;}
function KJ(b,c){var d;B7();d=c&31;return b<<d|b>>>(32-d|0);}
function U$(){AEu=D($rt_intcls());}
function Kc(){Br.call(this);}
function ABj(){var a=new Kc();YH(a);return a;}
function YH(a){C4(a);}
function Cg(){C.call(this);}
var AEv=null;var AEw=null;var AEx=null;var AEy=null;var AEz=null;function ACk(){ACk=Be(Cg);Y1();}
function Y1(){var b,c;b=$rt_createIntArray(10);c=b.data;c[0]=1;c[1]=10;c[2]=100;c[3]=1000;c[4]=10000;c[5]=100000;c[6]=1000000;c[7]=10000000;c[8]=100000000;c[9]=1000000000;AEv=b;b=$rt_createLongArray(19);c=b.data;c[0]=Long_fromInt(1);c[1]=Long_fromInt(10);c[2]=Long_fromInt(100);c[3]=Long_fromInt(1000);c[4]=Long_fromInt(10000);c[5]=Long_fromInt(100000);c[6]=Long_fromInt(1000000);c[7]=Long_fromInt(10000000);c[8]=Long_fromInt(100000000);c[9]=Long_fromInt(1000000000);c[10]=new Long(1410065408, 2);c[11]=new Long(1215752192, 23);c[12]
=new Long(3567587328, 232);c[13]=new Long(1316134912, 2328);c[14]=new Long(276447232, 23283);c[15]=new Long(2764472320, 232830);c[16]=new Long(1874919424, 2328306);c[17]=new Long(1569325056, 23283064);c[18]=new Long(2808348672, 232830643);AEw=b;b=$rt_createLongArray(6);c=b.data;c[0]=Long_fromInt(1);c[1]=Long_fromInt(10);c[2]=Long_fromInt(100);c[3]=Long_fromInt(10000);c[4]=Long_fromInt(100000000);c[5]=new Long(1874919424, 2328306);AEx=b;AEy=ABu();AEz=AC9();}
function R(){var a=this;C.call(a);a.f=null;a.bf=0;a.hO=null;a.hB=0;}
var AEA=0;function Jk(){Jk=Be(R);ZV();}
function AEB(){var a=new R();Bo(a);return a;}
function AEC(a){var b=new R();Ed(b,a);return b;}
function Bo(a){var b,c;Jk();M(a);b=new C$;c=AEA;AEA=c+1|0;DP(b,c);a.hO=b.e();}
function Ed(a,b){var c,d;Jk();M(a);c=new C$;d=AEA;AEA=d+1|0;DP(c,d);a.hO=c.e();a.f=b;}
function C7(a,b,c,d){var e;e=d.q();while(true){if(b>e)return (-1);if(a.b(b,c,d)>=0)break;b=b+1|0;}return b;}
function Db(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.b(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function S5(a,b){a.hB=b;}
function RP(a){return a.hB;}
function UX(a){return a.f;}
function FN(a,b){a.f=b;}
function WY(a,b){return 1;}
function YU(a){return null;}
function GN(a){var b;a.bf=1;if(a.f!==null){if(!a.f.bf){b=a.f.cl();if(b!==null){a.f.bf=1;a.f=b;}a.f.bD();}else if(a.f instanceof CL&&a.f.bs.fk)a.f=a.f.f;}}
function ZV(){AEA=1;}
function W(){var a=this;R.call(a);a.O=null;a.bs=null;a.A=0;}
function AED(){var a=new W();BD(a);return a;}
function ADX(a,b){var c=new W();H4(c,a,b);return c;}
function BD(a){Bo(a);}
function H4(a,b,c){Bo(a);a.O=b;a.bs=c;a.A=c.c$();}
function W5(a,b,c,d){var e,f,g,h,i;if(a.O===null)return (-1);e=d.cE(a.A);d.bQ(a.A,b);f=a.O.X();g=0;while(true){if(g>=f){d.bQ(a.A,e);return (-1);}h=a.O.H(g);i=h.b(b,c,d);if(i>=0)break;g=g+1|0;}return i;}
function Q3(a,b){a.bs.s(b);}
function AAQ(a,b){var c;a:{if(a.O!==null){c=a.O.S();while(true){if(!c.U())break a;if(!c.R().ba(b))continue;else return 1;}}}return 0;}
function Su(a,b){var c,d;a:{if(b.eB(a.A)>=0){c=b.cE(a.A);d=a.A;if(c==b.eB(d)){c=0;break a;}}c=1;}return c;}
function SA(a){var b,c,d,e;a.bf=1;if(a.bs!==null&&!a.bs.bf)a.bs.bD();a:{if(a.O!==null){b=a.O.X();c=0;while(true){if(c>=b)break a;d=a.O.H(c);e=d.cl();if(e===null)e=d;else{d.bf=1;a.O.iH(c);a.O.lR(c,e);}if(!e.bf)e.bD();c=c+1|0;}}}if(a.f!==null)GN(a);}
function CL(){W.call(this);this.bm=null;}
function ABL(a,b){var c=new CL();Jx(c,a,b);return c;}
function Jx(a,b,c){BD(a);a.bm=b;a.bs=c;a.A=c.c$();}
function OE(a,b,c,d){var e,f;e=d.cE(a.A);d.bQ(a.A,b);f=a.bm.b(b,c,d);if(f>=0)return f;d.bQ(a.A,e);return (-1);}
function NH(a,b,c,d){var e;e=a.bm.bi(b,c,d);if(e>=0)d.bQ(a.A,e);return e;}
function Ug(a,b,c,d,e){var f;f=a.bm.bg(b,c,d,e);if(f>=0)e.bQ(a.A,f);return f;}
function AAD(a,b){return a.bm.ba(b);}
function Q8(a){var b;b=ABJ(a);a.f=b;return b;}
function Y2(a){var b;a.bf=1;if(a.bs!==null&&!a.bs.bf)a.bs.bD();if(a.bm!==null&&!a.bm.bf){b=a.bm.cl();if(b!==null){a.bm.bf=1;a.bm=b;}a.bm.bD();}}
function BF(){}
function Wb(b){return b;}
function Dl(){}
function En(){}
function BL(){}
function KE(){}
function Zy(){return window.document;}
function Gk(){BP.call(this);}
var AEE=null;function Ve(){Ve=Be(Gk);Xo();}
function Mn(b,c){var d,e,f,g,h;Ve();if(c>=2&&c<=36){if(b!==null&&!b.E()){a:{d=0;e=0;switch(b.d(0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=Long_ZERO;while(e<b.g()){g=e+1|0;h=Ei(b.d(e));if(h<0)G(BX(J().a(B(5)).a(b).e()));if(h>=c)G(BX(J().a(B(6)).m(c).a(B(1)).a(b).e()));f=Long_add(Long_mul(Long_fromInt(c),f),Long_fromInt(h));if(Long_lt(f,Long_ZERO)){if(g==b.g()&&Long_eq(f,new Long(0, 2147483648))&&d)return new Long(0, 2147483648);G(BX(J().a(B(7)).a(b).e()));}e=g;}if(d)f=Long_neg(f);return f;}G(BX(B(8)));}G(BX(J().a(B(9)).m(c).e()));}
function FW(b){Ve();return Mn(b,10);}
function Xo(){AEE=D($rt_longcls());}
function Gd(){}
function EB(){}
function Jc(){var a=this;C.call(a);a.dF=null;a.eU=null;a.br=0;a.i0=0;}
function PS(a){var b=new Jc();Y$(b,a);return b;}
function Y$(a,b){M(a);while(b>=a.br){a.br=a.br<<1|1;}a.br=a.br<<1|1;a.dF=$rt_createIntArray(a.br+1|0);a.eU=$rt_createIntArray(a.br+1|0);a.i0=b;}
function Yh(a,b,c){var d,e,f;d=0;e=b&a.br;while(a.dF.data[e]&&a.dF.data[e]!=b){f=d+1|0;d=f&a.br;f=e+d|0;e=f&a.br;}a.dF.data[e]=b;a.eU.data[e]=c;}
function NW(a,b){var c,d,e,f;c=b&a.br;d=0;while(true){e=a.dF.data[c];if(!e)break;if(e==b)return a.eU.data[c];f=d+1|0;d=f&a.br;f=c+d|0;c=f&a.br;}return a.i0;}
function Eg(){L.call(this);}
function ADk(){var a=new Eg();Jq(a);return a;}
function Jq(a){Q(a);}
function Ji(a){return By().J(97,122).J(65,90);}
function DO(){L.call(this);}
function ADU(){var a=new DO();Ky(a);return a;}
function Ky(a){Q(a);}
function GA(a){return By().J(48,57);}
function Kk(){DO.call(this);}
function AC_(){var a=new Kk();ZN(a);return a;}
function ZN(a){Ky(a);}
function Xm(a){var b;b=GA(a).b9(1);b.y=1;return b;}
function Hm(){CL.call(this);}
function ABJ(a){var b=new Hm();Ta(b,a);return b;}
function Ta(a,b){Jx(a,b.bm,b.bs);}
function VY(a,b,c,d){var e,f,g;e=0;f=d.q();a:{while(true){if(b>f){b=e;break a;}g=d.cE(a.A);d.bQ(a.A,b);e=a.bm.b(b,c,d);if(e>=0)break;d.bQ(a.A,g);b=b+1|0;}}return b;}
function AAz(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=e.cE(a.A);e.bQ(a.A,c);f=a.bm.b(c,d,e);if(f>=0)break;e.bQ(a.A,g);c=c+(-1)|0;}}return c;}
function SQ(a){return null;}
function L7(){U.call(this);}
function ADP(){var a=new L7();Pz(a);return a;}
function Pz(a){BB(a);}
function CE(){var a=this;W.call(a);a.gW=0;a.c1=0;}
function ADT(a,b){var c=new CE();Fc(c,a,b);return c;}
function Fc(a,b,c){BD(a);a.gW=b;a.c1=c;}
function PL(a,b,c,d){var e,f,g,h;e=a.c5(d);if(e!==null&&(b+e.g()|0)<=d.q()){f=0;while(true){if(f>=e.g()){d.C(a.c1,e.g());return a.f.b(b+e.g()|0,c,d);}g=e.d(f);h=b+f|0;if(g!=c.d(h)&&C6(e.d(f))!=c.d(h))break;f=f+1|0;}return (-1);}return (-1);}
function Sz(a,b){a.f=b;}
function Tg(a,b){var c;c=b.j1(a.gW);return c;}
function Ti(a,b){var c;c=!b.bF(a.c1)?0:1;b.C(a.c1,(-1));return c;}
function Dw(){L.call(this);}
function ABq(){var a=new Dw();Kf(a);return a;}
function Kf(a){Q(a);}
function M$(a){return By().J(97,122).J(65,90).J(48,57).bh(95);}
function KB(){Dw.call(this);}
function ABE(){var a=new KB();Ya(a);return a;}
function Ya(a){Kf(a);}
function O9(a){var b;b=M$(a).b9(1);b.y=1;return b;}
function KT(){var a=this;I.call(a);a.ha=null;a.k5=null;}
function AD_(a,b){var c=new KT();AAw(c,a,b);return c;}
function AAw(a,b,c){a.k5=b;a.ha=c;P(a);}
function Vc(a,b){var c,d,e;c=b-55296|0;if(c>=0&&c<2048){d=a.W;e=a.ha;d=d^e.bP(c);}else d=0;return d;}
function KQ(){var a=this;I.call(a);a.hU=null;a.il=null;a.kp=null;}
function AD5(a,b,c){var d=new KQ();P1(d,a,b,c);return d;}
function P1(a,b,c,d){a.kp=b;a.hU=c;a.il=d;P(a);}
function Oy(a,b){var c,d,e,f;c=b-55296|0;if(c>=0&&c<2048){d=a.W;e=a.hU;f=d^e.bP(c);}else f=0;return a.il.j(b)&&!f?1:0;}
function Kd(){L.call(this);}
function AB2(){var a=new Kd();Qt(a);return a;}
function Qt(a){Q(a);}
function PR(a){var b;b=ACa(a);b.y=1;return b;}
function Z(){R.call(this);this.Q=0;}
function AEF(a){var b=new Z();Hw(b,a);return b;}
function AEG(){var a=new Z();BH(a);return a;}
function Hw(a,b){Ed(a,b);a.Q=1;a.gH(1);}
function BH(a){Bo(a);a.Q=1;}
function Z4(a,b,c,d){var e;if((b+a.bb()|0)>d.q()){d.by=1;return (-1);}e=a.I(b,c);if(e<0)return (-1);return a.f.b(b+e|0,c,d);}
function VM(a){return a.Q;}
function Y7(a,b){return 1;}
function Hz(){Z.call(this);this.dD=null;}
function AEa(a){var b=new Hz();XA(b,a);return b;}
function XA(a,b){BH(a);a.dD=b.e();a.Q=b.g();}
function Uo(a,b,c){var d,e,f,g;d=0;while(true){if(d>=a.dD.g())return a.dD.g();e=a.dD.d(d);f=b+d|0;if(e!=c.d(f)){g=a.dD;if(C6(g.d(d))!=c.d(f))break;}d=d+1|0;}return (-1);}
function BO(){R.call(this);this.w=null;}
function AEH(a,b,c){var d=new BO();C0(d,a,b,c);return d;}
function C0(a,b,c,d){Ed(a,c);a.w=b;a.gH(d);}
function AAk(a){return a.w;}
function Uh(a,b){return !a.w.ba(b)&&!a.f.ba(b)?0:1;}
function Xq(a,b){return 1;}
function Op(a){var b;a.bf=1;if(a.f!==null&&!a.f.bf){b=a.f.cl();if(b!==null){a.f.bf=1;a.f=b;}a.f.bD();}if(a.w!==null){if(!a.w.bf){b=a.w.cl();if(b!==null){a.w.bf=1;a.w=b;}a.w.bD();}else if(a.w instanceof CL&&a.w.bs.fk)a.w=a.w.f;}}
function Bx(){BO.call(this);this.B=null;}
function AB5(a,b,c){var d=new Bx();Cq(d,a,b,c);return d;}
function Cq(a,b,c,d){C0(a,b,c,d);a.B=b;}
function N$(a,b,c,d){var e,f;e=0;a:{while((b+a.B.bb()|0)<=d.q()){f=a.B.I(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.f.b(b,c,d);if(f>=0)break;b=b-a.B.bb()|0;e=e+(-1)|0;}return f;}
function Cd(){Bx.call(this);this.cq=null;}
function ACy(a,b,c,d){var e=new Cd();Gl(e,a,b,c,d);return e;}
function Gl(a,b,c,d,e){Cq(a,c,d,e);a.cq=b;}
function Qv(a,b,c,d){var e,f,g,h;e=a.cq.c0();f=a.cq.c2();g=0;while(true){if(g>=e){a:{while(g<f){if((b+a.B.bb()|0)>d.q())break a;h=a.B.I(b,c);if(h<1)break a;b=b+h|0;g=g+1|0;}}while(true){if(g<e)return (-1);h=a.f.b(b,c,d);if(h>=0)break;b=b-a.B.bb()|0;g=g+(-1)|0;}return h;}if((b+a.B.bb()|0)>d.q()){d.by=1;return (-1);}h=a.B.I(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}return (-1);}
function Jj(){Cd.call(this);}
function ADj(a,b,c,d){var e=new Jj();OM(e,a,b,c,d);return e;}
function OM(a,b,c,d,e){Gl(a,b,c,d,e);}
function Uk(a,b,c,d){var e,f,g,h;e=a.cq.c0();f=a.cq.c2();g=0;while(true){if(g>=e){a:{while(true){if(g>=f)break a;if((b+a.B.bb()|0)>d.q())break a;h=a.B.I(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}}return a.f.b(b,c,d);}if((b+a.B.bb()|0)>d.q()){d.by=1;return (-1);}h=a.B.I(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}return (-1);}
function Dg(){}
function B$(){CM.call(this);}
function AEI(a,b){var c=new B$();II(c,a,b);return c;}
function AEJ(a){var b=new B$();J2(b,a);return b;}
function AEK(a){var b=new B$();Ij(b,a);return b;}
function II(a,b,c){MR(a,b,c);}
function J2(a,b){F8(a,b);}
function Ij(a,b){Le(a,b);}
function CP(){B$.call(this);}
function AEL(a){var b=new CP();G8(b,a);return b;}
function G8(a,b){J2(a,b);}
function Dy(){}
function Mo(){C5.call(this);}
function Fg(){var a=new Mo();VX(a);return a;}
function VX(a){I5(a);}
function EE(){var a=this;U.call(a);a.lv=null;a.lc=null;}
function ABi(a,b,c){var d=new EE();VB(d,a,b,c);return d;}
function VB(a,b,c,d){Df(a,b);a.lv=c;a.lc=d;}
function J3(){C.call(this);}
function LL(b,c){var d,e,$$je;a:{try{d=Qu(b,EC(c));}catch($$e){$$je=Bb($$e);if($$je instanceof BZ){e=$$je;break a;}else{throw $$e;}}return d;}Cz().o(B(10));e.ev();return 0;}
function Qu(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,$$je;FZ();d=AEM;e=3;f=El(c);a:{try{g=0;}catch($$e){$$je=Bb($$e);h=$$je;break a;}b:{try{while(true){h=f.el();if(h===null)break;i=h.ch(35);if(i>=0)h=h.cj(0,i);h=h.fC();if(!h.g())continue;if(h.fT(B(11))){j=B9(h,58);try{k=e;l=g;h=L4(j.H(0).c6());d=h;if(j.X()<=1){d=h;k=e;l=g;e=3;k=e;}else{d=h;k=e;l=g;e=DN(j.H(1).fC());k=e;}d=h;l=g;k=e;g=0;l=g;d=h;continue;}catch($$e){$$je=Bb($$e);if($$je instanceof Br){}else{throw $$e;}}Cz().o(J().a(B(12)).a(j.H(0)).e());g=l;e=k;continue;}if
(d===AEN){j=B9(h,32);m=0;while(m<j.X()){n=g+(b.co()-e|0)|0;if(n>=0){o=b.dM(n,m);if(o!==null)o.lM(DG(j.H(m)));}m=m+1|0;}g=g+1|0;}else if(d===AEM){j=B9(h,32);m=0;while(m<j.X()){n=g+(b.co()-e|0)|0;if(n>=0){o=b.dM(n,m);if(o!==null)o.lH(DN(j.H(m)));}m=m+1|0;}g=g+1|0;}else if(d===AEO){c:{j=B9(h,32);if(g){p=g-1|0;q=0;while(true){if(q>=j.X())break c;b.lJ(p,q,DG(j.H(q)));q=q+1|0;}}q=0;while(q<j.X()){b.jO(q,DG(j.H(q)));q=q+1|0;}}g=g+1|0;}else if(d===AEP){j=B9(h,32);try{b.kt(Hu(j.H(0).c6()));}catch($$e){$$je=Bb($$e);if
($$je instanceof Br){break b;}else{throw $$e;}}g=g+1|0;}}}catch($$e){$$je=Bb($$e);h=$$je;break a;}f.bK();return 1;}try{G(ABH(J().a(B(13)).a(j.H(0)).e()));}catch($$e){$$je=Bb($$e);h=$$je;}}f.bK();G(h);}
function Ik(b,c){return b!=c?0:1;}
function TO(b,c){var d;d=b-c|0;return d!=1&&d!=(-1)?0:1;}
function M4(b,c){var d,e;d=b<=4?b:9-b|0;e=c<=4?c:9-c|0;if(d<e)c=b;return c;}
function JK(){I.call(this);this.li=null;}
function ADH(a){var b=new JK();Yu(b,a);return b;}
function Yu(a,b){a.li=b;P(a);}
function Oe(a,b){return EO(b);}
function IE(){var a=this;I.call(a);a.ea=null;a.jx=null;}
function ACN(a,b){var c=new IE();YG(c,a,b);return c;}
function YG(a,b,c){a.jx=b;a.ea=c;P(a);}
function AAB(a,b){return a.G^a.ea.bP(b);}
function WT(a){var b,c;b=J();c=a.ea.dr(0);while(c>=0){b.fH(CK(c));b.bn(124);c=a.ea.dr(c+1|0);}if(b.g()>0)b.iA(b.g()-1|0);return b.e();}
function D0(){var a=this;C.call(a);a.kY=null;a.gC=0.0;a.lA=0.0;a.cp=null;a.cK=null;a.d9=null;a.bS=0;}
function AEQ(a,b,c){var d=new D0();MS(d,a,b,c);return d;}
function MS(a,b,c,d){M(a);a.cp=B(14);B8();a.cK=AER;a.d9=AER;if(c<=0.0)G(Bz(J().a(B(15)).im(c).e()));if(d>0.0){a.kY=b;a.gC=c;a.lA=d;return;}G(Bz(J().a(B(16)).im(d).e()));}
function K$(a,b){if(b!==null){a.cK=b;a.f3(b);return a;}G(Bz(B(17)));}
function Xf(a,b){return;}
function HS(a,b){if(b!==null){a.d9=b;a.fz(b);return a;}G(Bz(B(17)));}
function XJ(a,b){return;}
function FC(a,b,c,d){var e,f,g,$$je;if(!(a.bS==2&&!d)&&a.bS!=3){a.bS=d?2:1;while(true){try{e=a.jA(b,c);}catch($$e){$$je=Bb($$e);if($$je instanceof U){f=$$je;G(TM(f));}else{throw $$e;}}if(e.db())return e;if(e.dK()){if(d&&BT(b)){g=a.cK;B8();if(g===AER)return BM(X(b));if(X(c)<=a.cp.g())return AES;b.er(BG(b)+X(b)|0);if(a.cK===AET)DT(c,a.cp);}return e;}if(e.hZ()){g=a.cK;B8();if(g===AER)return e;if(a.cK===AET){if(X(c)<a.cp.g())return AES;DT(c,a.cp);}b.er(BG(b)+e.g()|0);}else if(e.f9()){g=a.d9;B8();if(g===AER)break;if
(a.d9===AET){if(X(c)<a.cp.g())return AES;DT(c,a.cp);}b.er(BG(b)+e.g()|0);}}return e;}G(C1());}
function MC(a,b){if(a.bS!=3&&a.bS!=2)G(C1());a.bS=3;return a.kN(b);}
function LD(a){a.bS=0;a.kH();return a;}
function I9(a,b){var c,d,e;if(a.bS&&a.bS!=3)G(C1());if(!X(b))return My(0);if(a.bS)LD(a);c=My(Bq(8,X(b)*a.gC|0));while(true){d=FC(a,b,c,0);if(d.dK())break;if(d.db())c=Ep(a,c);if(!d.f0())continue;d.g4();}e=FC(a,b,c,1);if(e.f0())e.g4();while(true){e=MC(a,c);if(e.dK())break;c=Ep(a,c);}G$(c);return c;}
function Ep(a,b){var c,d,e;c=E9(b);d=c.data;d=EM(c,Bq(8,d.length*2|0));e=O4(d);e.fg(BG(b));return e;}
function O$(a,b){Bj();return AEU;}
function UO(a){return;}
function Bv(){BO.call(this);}
function AB7(a,b,c){var d=new Bv();CA(d,a,b,c);return d;}
function CA(a,b,c,d){C0(a,b,c,d);}
function OB(a,b,c,d){var e;if(!a.w.x(d))return a.f.b(b,c,d);e=a.w.b(b,c,d);if(e>=0)return e;return a.f.b(b,c,d);}
function Ne(){Bv.call(this);}
function ACC(a,b,c){var d=new Ne();Wd(d,a,b,c);return d;}
function Wd(a,b,c,d){CA(a,b,c,d);Ec();b.s(AEV);}
function S$(a,b,c,d){var e;while(true){e=a.w.b(b,c,d);if(e<=0)break;b=e;}return a.f.b(b,c,d);}
function LI(){CE.call(this);}
function ADu(a,b){var c=new LI();Wl(c,a,b);return c;}
function Wl(a,b,c){Fc(a,b,c);}
function NE(a,b,c,d){var e,f,g,h;e=a.c5(d);if(e!==null&&(b+e.g()|0)<=d.q()){f=0;while(true){if(f>=e.g()){d.C(a.c1,e.g());return a.f.b(b+e.g()|0,c,d);}g=BI(BA(e.d(f)));h=b+f|0;h=BA(c.d(h));if(g!=BI(h))break;f=f+1|0;}return (-1);}return (-1);}
function IB(){var a=this;I.call(a);a.h3=null;a.kQ=null;}
function ABv(a,b){var c=new IB();TL(c,a,b);return c;}
function TL(a,b,c){a.kQ=b;a.h3=c;P(a);}
function Tb(a,b){return a.h3.j(b);}
function D2(){C.call(this);this.j9=null;}
var AEW=null;var AEX=null;function Y4(){Y4=Be(D2);AAo();}
function UL(a){var b=new D2();Gs(b,a);return b;}
function Gs(a,b){Y4();M(a);a.j9=b;}
function AAo(){AEW=UL(B(18));AEX=UL(B(19));}
function IC(){var a=this;I.call(a);a.h8=null;a.lB=null;}
function ABY(a,b){var c=new IC();OA(c,a,b);return c;}
function OA(a,b,c){a.lB=b;a.h8=c;P(a);}
function Wk(a,b){return a.h8.j(b)?0:1;}
function ID(){var a=this;I.call(a);a.hw=0;a.h6=null;a.iu=null;a.jM=null;}
function ACE(a,b,c,d){var e=new ID();To(e,a,b,c,d);return e;}
function To(a,b,c,d,e){a.jM=b;a.hw=c;a.h6=d;a.iu=e;P(a);}
function AAW(a,b){return !(a.hw^a.h6.j(b))&&!a.iu.j(b)?0:1;}
function Lu(){C.call(this);}
function RU(b){var c,d,e,f,g,h;c=0;d=1;while(true){e=b.ho.data;f=b.iU;b.iU=f+1|0;g=Qy(e[f]);h=(g%2|0)!=1?0:1;c=c+Ce(d,g/2|0)|0;d=d*46|0;if(!h)break;}return c;}
function Hq(b){var c,d;c=RU(b);d=c/2|0;if(c%2|0)d= -d;return d;}
function Qy(b){if(b<34)return b-32|0;if(b>=92)return (b-32|0)-2|0;return (b-32|0)-1|0;}
function L_(){var a=this;L.call(a);a.fG=0;a.eE=0;a.hP=0;}
function T(a,b){var c=new L_();SW(c,a,b);return c;}
function AD$(a,b,c){var d=new L_();Yy(d,a,b,c);return d;}
function SW(a,b,c){Q(a);a.eE=c;a.fG=b;}
function Yy(a,b,c,d){Q(a);a.hP=d;a.eE=c;a.fG=b;}
function VW(a){var b;b=ADI(a.fG);if(a.hP)b.K.d8(0,2048);b.y=a.eE;return b;}
function Jl(){var a=this;I.call(a);a.is=0;a.gO=null;a.g0=null;a.kE=null;}
function AD7(a,b,c,d){var e=new Jl();Wa(e,a,b,c,d);return e;}
function Wa(a,b,c,d,e){a.kE=b;a.is=c;a.gO=d;a.g0=e;P(a);}
function Xi(a,b){return !(a.is^a.gO.j(b))&&!a.g0.j(b)?1:0;}
function IF(){var a=this;I.call(a);a.hC=0;a.g$=null;a.ja=null;a.kn=null;}
function AD0(a,b,c,d){var e=new IF();UD(e,a,b,c,d);return e;}
function UD(a,b,c,d,e){a.kn=b;a.hC=c;a.g$=d;a.ja=e;P(a);}
function Rs(a,b){return a.hC^a.g$.j(b)&&a.ja.j(b)?1:0;}
function GF(){Z.call(this);this.dP=null;}
function AD1(a){var b=new GF();Wr(b,a);return b;}
function Wr(a,b){var c,d;BH(a);c=J();d=0;while(d<b.g()){c.bn(BI(BA(b.d(d))));d=d+1|0;}a.dP=c.e();a.Q=c.g();}
function NJ(a,b,c){var d;d=0;while(true){if(d>=a.dP.g())return a.dP.g();if(a.dP.d(d)!=BI(BA(c.d(b+d|0))))break;d=d+1|0;}return (-1);}
function IG(){var a=this;I.call(a);a.he=0;a.gK=null;a.hv=null;a.kW=null;}
function ACu(a,b,c,d){var e=new IG();O3(e,a,b,c,d);return e;}
function O3(a,b,c,d,e){a.kW=b;a.he=c;a.gK=d;a.hv=e;P(a);}
function RV(a,b){return a.he^a.gK.j(b)&&a.hv.j(b)?0:1;}
function Mr(){BO.call(this);}
function AC8(a,b,c){var d=new Mr();PX(d,a,b,c);return d;}
function PX(a,b,c,d){C0(a,b,c,d);}
function AAf(a,b,c,d){var e;e=d.q();if(e>b)return a.f.bg(b,e,c,d);return a.f.b(b,c,d);}
function VC(a,b,c,d){var e;e=d.q();if(a.f.bg(b,e,c,d)>=0)return b;return (-1);}
function IH(){var a=this;I.call(a);a.iF=null;a.gV=0;a.jf=null;}
function ABP(a,b,c){var d=new IH();Qh(d,a,b,c);return d;}
function Qh(a,b,c,d){a.jf=b;a.iF=c;a.gV=d;P(a);}
function Zd(a,b){return a.iF.j(b)&&a.gV^a.jf.v.bP(b)?1:0;}
function Lo(){I.call(this);this.k2=null;}
function ADV(a){var b=new Lo();No(b,a);return b;}
function No(a,b){a.k2=b;P(a);}
function YT(a,b){return MX(b);}
function IA(){var a=this;I.call(a);a.hl=null;a.je=0;a.gU=null;}
function ADY(a,b,c){var d=new IA();NY(d,a,b,c);return d;}
function NY(a,b,c,d){a.gU=b;a.hl=c;a.je=d;P(a);}
function Wj(a,b){return a.hl.j(b)&&a.je^a.gU.v.bP(b)?0:1;}
function Bt(){var a=this;R.call(a);a.fk=0;a.c8=0;}
var AEV=null;function Ec(){Ec=Be(Bt);Vf();}
function ACm(a){var b=new Bt();Ck(b,a);return b;}
function Ck(a,b){Ec();Bo(a);a.c8=b;}
function Qr(a,b,c,d){var e,f;e=d.eB(a.c8);d.fF(a.c8,b);f=a.f.b(b,c,d);if(f<0)d.fF(a.c8,e);return f;}
function Od(a){return a.c8;}
function Rr(a,b){return 0;}
function Vf(){AEV=AB_();}
function Fx(){Bt.call(this);}
function AEY(a){var b=new Fx();Lm(b,a);return b;}
function Lm(a,b){Ck(a,b);}
function RG(a,b,c,d){var e,f;e=a.c$();f=d.bF(e);if(f!=b)b=(-1);return b;}
function CH(){var a=this;C.call(a);a.l=null;a.D=0;}
function AEZ(){var a=new CH();EY(a);return a;}
function ADA(a){var b=new CH();EJ(b,a);return b;}
function AE0(a){var b=new CH();Mt(b,a);return b;}
function AE1(a){var b=new CH();JT(b,a);return b;}
function EY(a){EJ(a,16);}
function EJ(a,b){M(a);a.l=$rt_createCharArray(b);}
function Mt(a,b){JT(a,b);}
function JT(a,b){var c;M(a);a.l=$rt_createCharArray(b.g());c=0;while(c<a.l.data.length){a.l.data[c]=b.d(c);c=c+1|0;}a.D=b.g();}
function ES(a,b){return a.d_(a.D,b);}
function Fu(a,b,c){var d,e,f;if(b>=0&&b<=a.D){if(c===null)c=B(20);else if(c.E())return a;a.b2(a.D+c.g()|0);d=a.D-1|0;while(d>=b){a.l.data[d+c.g()|0]=a.l.data[d];d=d+(-1)|0;}a.D=a.D+c.g()|0;d=0;while(d<c.g()){e=a.l.data;f=b+1|0;e[b]=c.d(d);d=d+1|0;b=f;}return a;}G(Fg());}
function Ip(a,b){return a.g2(b,10);}
function PM(a,b,c){return a.jH(a.D,b,c);}
function Yv(a,b,c,d){var e,f,g,h,i,j,k,l;e=1;if(c<0){e=0;c= -c;}a:{if(c<d){if(e)BC(a,b,b+1|0);else{BC(a,b,b+2|0);f=a.l.data;g=b+1|0;f[b]=45;b=g;}a.l.data[b]=Eb(c,d);}else{h=1;i=1;j=2147483647/d|0;b:{while(true){k=Ce(h,d);if(k>c){k=h;break b;}i=i+1|0;if(k>j)break;h=k;}}if(!e)i=i+1|0;BC(a,b,b+i|0);if(e)l=b;else{f=a.l.data;l=b+1|0;f[b]=45;}while(true){if(k<=0)break a;f=a.l.data;g=l+1|0;f[l]=Eb(c/k|0,d);c=c%k|0;k=k/d|0;l=g;}}}return a;}
function Kj(a,b){return a.i2(a.D,b);}
function HE(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=BY(c,0.0);if(!d){BC(a,b,b+3|0);e=a.l.data;d=b+1|0;e[b]=48;e=a.l.data;f=d+1|0;e[d]=46;a.l.data[f]=48;return a;}if(!d){BC(a,b,b+4|0);e=a.l.data;d=b+1|0;e[b]=45;e=a.l.data;f=d+1|0;e[d]=48;e=a.l.data;d=f+1|0;e[f]=46;a.l.data[d]=48;return a;}if(isNaN(c)?1:0){BC(a,b,b+3|0);e=a.l.data;d=b+1|0;e[b]=78;e=a.l.data;f=d+1|0;e[d]=97;a.l.data[f]=78;return a;}if(!isFinite(c)?1:0){if(d>0){BC(a,b,b+8|0);d=b;}else{BC(a,b,b+9|0);e=a.l.data;d=b+1|0;e[b]=45;}e=a.l.data;f=d+
1|0;e[d]=73;e=a.l.data;d=f+1|0;e[f]=110;e=a.l.data;f=d+1|0;e[d]=102;e=a.l.data;d=f+1|0;e[f]=105;e=a.l.data;f=d+1|0;e[d]=110;e=a.l.data;d=f+1|0;e[f]=105;e=a.l.data;f=d+1|0;e[d]=116;a.l.data[f]=121;return a;}ACk();g=AEz;Hf(c,g);h=g.fZ;i=g.fw;j=g.hc;k=1;l=1;if(j){j=1;l=2;}m=9;n=VO(h);if(n>0)m=m-n|0;if(i<7&&i>=(-3)){if(i>=0){k=i+1|0;m=Bq(m,k+1|0);i=0;}else if(i<0){h=h/AEv.data[ -i]|0;m=m-i|0;i=0;}}if(i){l=l+2|0;if(!(i>(-10)&&i<10))l=l+1|0;if(i<0)l=l+1|0;}if(i&&m==k)m=m+1|0;d=l+m|0;BC(a,b,b+d|0);if(!j)f=b;else{e
=a.l.data;f=b+1|0;e[b]=45;}o=100000000;p=0;while(p<m){if(o<=0)q=0;else{q=h/o|0;h=h%o|0;}e=a.l.data;d=f+1|0;e[f]=(48+q|0)&65535;k=k+(-1)|0;if(k)f=d;else{e=a.l.data;f=d+1|0;e[d]=46;}o=o/10|0;p=p+1|0;}if(i){e=a.l.data;d=f+1|0;e[f]=69;if(i>=0)f=d;else{i= -i;e=a.l.data;f=d+1|0;e[d]=45;}if(i<10)r=f;else{e=a.l.data;r=f+1|0;e[f]=(48+(i/10|0)|0)&65535;}a.l.data[r]=(48+(i%10|0)|0)&65535;}return a;}
function VO(b){var c,d,e,f;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;f=e*100|0;if(b%f|0)f=e;else c=c|2;if(!(b%(f*10|0)|0))c=c|1;return c;}
function F$(a,b){return a.fW(a.D,b);}
function F6(a,b,c){BC(a,b,b+1|0);a.l.data[b]=c;return a;}
function L8(a,b){return a.hR(a.D,b);}
function Ko(a,b,c){return a.d_(b,c===null?B(20):c.e());}
function ET(a,b){var c,d;if(a.l.data.length>=b)return;if(a.l.data.length>=1073741823)c=2147483647;else{d=a.l.data.length*2|0;c=Bq(b,Bq(d,5));}a.l=EM(a.l,c);}
function EF(a){return Fa(a.l,0,a.D);}
function FT(a){return a.D;}
function Hg(a,b){if(b>=0&&b<a.D)return a.l.data[b];G(Cp());}
function F1(a,b,c,d){return a.fb(a.D,b,c,d);}
function EG(a,b,c,d,e){var f,g,h,i,j;BC(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.l.data;i=b+1|0;j=d+1|0;h[b]=g[d];b=i;d=j;}return a;}
function EV(a,b){return a.f6(b,0,b.data.length);}
function K4(a,b,c,d,e){var f,g,h,i;if(b>c)G(Bp(B(21)));while(b<c){f=d.data;g=e+1|0;h=a.l.data;i=b+1|0;f[e]=h[b];e=g;b=i;}}
function FH(a,b){a.D=b;}
function Ld(a,b){var c,d,e;if(b>=0&&b<a.D){a.D=a.D-1|0;while(b<a.D){c=a.l.data;d=a.l.data;e=b+1|0;c[b]=d[e];b=e;}return a;}G(Fg());}
function LH(a,b,c){var d,e,f,g,h,i;d=BY(b,c);if(d<=0&&b<=a.D){if(!d)return a;e=a.D-c|0;a.D=a.D-(c-b|0)|0;f=0;while(f<e){g=a.l.data;d=b+1|0;h=a.l.data;i=c+1|0;g[b]=h[c];f=f+1|0;b=d;c=i;}return a;}G(Fg());}
function BC(a,b,c){var d,e;d=a.D-b|0;a.b2((a.D+c|0)-b|0);e=d-1|0;while(e>=0){a.l.data[c+e|0]=a.l.data[b+e|0];e=e+(-1)|0;}a.D=a.D+(c-b|0)|0;}
function Dd(){}
function GW(){CH.call(this);}
function GX(a){var b=new GW();ZA(b,a);return b;}
function J(){var a=new GW();YV(a);return a;}
function ZA(a,b){EJ(a,b);}
function YV(a){EY(a);}
function Ou(a,b){ES(a,b);return a;}
function Pj(a,b){Ip(a,b);return a;}
function Xr(a,b){Kj(a,b);return a;}
function Og(a,b){F$(a,b);return a;}
function Tq(a,b,c,d){F1(a,b,c,d);return a;}
function U9(a,b){EV(a,b);return a;}
function OC(a,b){L8(a,b);return a;}
function VA(a,b,c){HE(a,b,c);return a;}
function S6(a,b,c,d,e){EG(a,b,c,d,e);return a;}
function ZH(a,b,c){Ko(a,b,c);return a;}
function P9(a,b,c){F6(a,b,c);return a;}
function XZ(a,b,c){LH(a,b,c);return a;}
function VT(a,b){Ld(a,b);return a;}
function Z0(a,b,c){Fu(a,b,c);return a;}
function AAb(a,b){FH(a,b);}
function U0(a,b,c,d,e){K4(a,b,c,d,e);}
function ZS(a,b,c,d,e){return a.l0(b,c,d,e);}
function Um(a,b,c,d){return a.jS(b,c,d);}
function Q_(a){return FT(a);}
function RK(a){return EF(a);}
function AAg(a,b){ET(a,b);}
function Oz(a,b,c){return a.j_(b,c);}
function NF(a,b,c){return a.lr(b,c);}
function Xu(a,b,c){return a.lf(b,c);}
function AAE(a,b,c){return a.j7(b,c);}
function DH(){Eg.call(this);}
function AA4(){var a=new DH();Me(a);return a;}
function Me(a){Jq(a);}
function KK(a){return Ji(a).J(48,57);}
function KY(){U.call(this);}
function ABZ(){var a=new KY();Z2(a);return a;}
function Z2(a){BB(a);}
function KL(){var a=this;W.call(a);a.fN=null;a.e_=null;}
function E0(a,b){var c=new KL();Y_(c,a,b);return c;}
function Y_(a,b,c){BD(a);a.fN=b;a.e_=c;}
function Qk(a,b,c,d){var e;e=a.fN.b(b,c,d);if(e<0)e=a.e_.b(b,c,d);if(e>=0)return e;return (-1);}
function QB(a,b){a.f=b;a.e_.s(b);a.fN.s(b);}
function R0(a,b){return 1;}
function Rj(a,b){return 1;}
function Gc(){}
function Dv(){}
function E8(){}
function BW(){C.call(this);}
function AE2(){var a=new BW();CS(a);return a;}
function CS(a){M(a);}
function OT(a,b,c,d){var e,f,g;e=0;while(e<d){f=b.data;g=c+1|0;a.e5(f[c]);e=e+1|0;c=g;}}
function MD(){var a=this;BW.call(a);a.b7=null;a.cu=0;}
function AA9(){var a=new MD();AAa(a);return a;}
function AE3(a){var b=new MD();H9(b,a);return b;}
function AAa(a){H9(a,32);}
function H9(a,b){CS(a);a.b7=$rt_createByteArray(b);}
function OS(a,b){var c,d;ER(a,a.cu+1|0);c=a.b7.data;d=a.cu;a.cu=d+1|0;c[d]=b<<24>>24;}
function Qe(a,b,c,d){var e,f,g,h,i;ER(a,a.cu+d|0);e=0;while(e<d){f=b.data;g=a.b7.data;h=a.cu;a.cu=h+1|0;i=c+1|0;g[h]=f[c];e=e+1|0;c=i;}}
function ER(a,b){var c;if(a.b7.data.length<b){c=Bq(b,(a.b7.data.length*3|0)/2|0);a.b7=FS(a.b7,c);}}
function Xg(a,b){return ABU(a.b7,0,a.cu,b);}
function GZ(){var a=this;W.call(a);a.ic=null;a.jw=0;}
function AA8(a){var b=new GZ();WK(b,a);return b;}
function WK(a,b){BD(a);a.ic=b.c7();a.jw=b.G;}
function VF(a,b){a.f=b;}
function X$(a,b,c,d){var e,f,g,h,i,j,k;e=d.bw();f=d.q();g=b+1|0;h=BY(g,f);if(h>0){d.by=1;return (-1);}i=c.d(b);if(!a.ic.j(i))return (-1);if(Bm(i)){if(h<0){j=c.d(g);if(Bu(j))return (-1);}}else if(Bu(i)&&b>e){k=c.d(b-1|0);if(Bm(k))return (-1);}return a.f.b(g,c,d);}
function Mq(){Bv.call(this);}
function ACY(a,b,c){var d=new Mq();Se(d,a,b,c);return d;}
function Se(a,b,c,d){CA(a,b,c,d);}
function Zl(a,b,c,d){var e;if(!a.w.x(d))return a.f.b(b,c,d);e=a.f.b(b,c,d);if(e>=0)return e;return a.w.b(b,c,d);}
function Co(){Bt.call(this);}
function ADw(){var a=new Co();Ws(a);return a;}
function Ws(a){Ck(a,0);}
function XF(a,b,c,d){if(d.ij()!=1&&b!=d.q())return (-1);d.jQ();d.fF(0,b);return b;}
function Ie(){B$.call(this);}
function TM(a){var b=new Ie();Ow(b,a);return b;}
function Ow(a,b){Ij(a,b);}
function J8(){Bv.call(this);}
function ABg(a,b,c){var d=new J8();ZF(d,a,b,c);return d;}
function ZF(a,b,c,d){CA(a,b,c,d);Ec();b.s(AEV);}
function OR(a,b,c,d){var e,f;e=a.w.b(b,c,d);if(e<0)return (-1);if(e>b){while(true){f=a.w.b(e,c,d);if(f<=e)break;e=f;}b=e;}return a.f.b(b,c,d);}
function Kt(){Z.call(this);}
function Cu(a){var b=new Kt();Ov(b,a);return b;}
function Ov(a,b){Hw(a,b);a.Q=0;}
function UJ(a,b,c){return 0;}
function VD(a,b,c,d){var e,f,g,h,i;e=d.q();f=d.bw();while(true){g=BY(b,e);if(g>0)return (-1);if(g<0){h=c.d(b);if(Bu(h)&&b>f){i=c.d(b-1|0);if(Bm(i)){b=b+1|0;continue;}}}if(a.f.b(b,c,d)>=0)break;b=b+1|0;}return b;}
function SJ(a,b,c,d,e){var f,g,h,i;f=e.q();g=e.bw();while(true){if(c<b)return (-1);if(c<f){h=d.d(c);if(Bu(h)&&c>g){i=d.d(c-1|0);if(Bm(i)){c=c+(-1)|0;continue;}}}if(a.f.b(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function Pf(a,b){return 0;}
function Iq(){CH.call(this);}
function SZ(){var a=new Iq();XQ(a);return a;}
function Te(a){var b=new Iq();ZE(b,a);return b;}
function XQ(a){EY(a);}
function ZE(a,b){Mt(a,b);}
function TW(a,b){ES(a,b);return a;}
function VG(a,b){F$(a,b);return a;}
function Zk(a,b,c,d){F1(a,b,c,d);return a;}
function UN(a,b){EV(a,b);return a;}
function On(a,b,c,d,e){EG(a,b,c,d,e);return a;}
function XY(a,b,c){F6(a,b,c);return a;}
function TZ(a,b,c){Fu(a,b,c);return a;}
function OX(a,b){FH(a,b);}
function VS(a,b,c,d,e){return a.jL(b,c,d,e);}
function Ro(a,b,c,d){return a.l2(b,c,d);}
function NZ(a,b){return Hg(a,b);}
function Z7(a){return FT(a);}
function RE(a){return EF(a);}
function R$(a,b){ET(a,b);}
function VJ(a,b,c){return a.lQ(b,c);}
function Om(a,b,c){return a.k4(b,c);}
function CD(){var a=this;C.call(a);a.f7=0;a.L=0;a.bM=0;a.dc=0;}
function AE4(a){var b=new CD();FA(b,a);return b;}
function FA(a,b){M(a);a.dc=(-1);a.f7=b;a.bM=b;}
function Ke(a){return a.f7;}
function BG(a){return a.L;}
function FI(a,b){if(b>=0&&b<=a.bM){a.L=b;if(b<a.dc)a.dc=0;return a;}G(Bz(J().a(B(22)).m(b).a(B(23)).m(a.bM).a(B(24)).e()));}
function KF(a){return a.bM;}
function IY(a){a.L=0;a.bM=a.f7;a.dc=(-1);return a;}
function MJ(a){a.bM=a.L;a.L=0;a.dc=(-1);return a;}
function X(a){return a.bM-a.L|0;}
function BT(a){return a.L>=a.bM?0:1;}
function Gw(){I.call(this);this.js=null;}
function ABc(a){var b=new Gw();Zr(b,a);return b;}
function Zr(a,b){a.js=b;P(a);}
function Y5(a,b){return KG(b);}
function Da(){C.call(this);}
var AE5=null;var AE6=null;var AE7=null;function ACl(){ACl=Be(Da);Uz();}
function ADB(){var a=new Da();KI(a);return a;}
function KI(a){ACl();M(a);}
function LC(a,b){var c,d,e;c=0;while(true){if(c>=AE7.data.length)G(ABi(B(25),B(25),b));d=AE7.data[c];e=d.data;if(b.bz(e[0]))break;c=c+1|0;}return e[1];}
function Uz(){var b,c,d,e;AE5=ACR();AE6=ADU();b=F($rt_arraycls(C),194);c=b.data;d=F(C,2);e=d.data;e[0]=B(26);e[1]=ADS();c[0]=d;d=F(C,2);e=d.data;e[0]=B(27);e[1]=AA$();c[1]=d;d=F(C,2);e=d.data;e[0]=B(28);e[1]=ACJ();c[2]=d;d=F(C,2);e=d.data;e[0]=B(29);e[1]=ADk();c[3]=d;d=F(C,2);e=d.data;e[0]=B(30);e[1]=AE6;c[4]=d;d=F(C,2);e=d.data;e[0]=B(31);e[1]=AA4();c[5]=d;d=F(C,2);e=d.data;e[0]=B(32);e[1]=ADM();c[6]=d;d=F(C,2);e=d.data;e[0]=B(33);e[1]=ABC();c[7]=d;d=F(C,2);e=d.data;e[0]=B(34);e[1]=ABm();c[8]=d;d=F(C,2);e=
d.data;e[0]=B(35);e[1]=ABQ();c[9]=d;d=F(C,2);e=d.data;e[0]=B(36);e[1]=ACL();c[10]=d;d=F(C,2);e=d.data;e[0]=B(37);e[1]=ABI();c[11]=d;d=F(C,2);e=d.data;e[0]=B(38);e[1]=AB2();c[12]=d;d=F(C,2);e=d.data;e[0]=B(39);e[1]=AA5();c[13]=d;d=F(C,2);e=d.data;e[0]=B(40);e[1]=AC$();c[14]=d;d=F(C,2);e=d.data;e[0]=B(41);e[1]=ACD();c[15]=d;d=F(C,2);e=d.data;e[0]=B(42);e[1]=AA2();c[16]=d;d=F(C,2);e=d.data;e[0]=B(43);e[1]=ACx();c[17]=d;d=F(C,2);e=d.data;e[0]=B(44);e[1]=AA3();c[18]=d;d=F(C,2);e=d.data;e[0]=B(45);e[1]=ABX();c[19]
=d;d=F(C,2);e=d.data;e[0]=B(46);e[1]=ADx();c[20]=d;d=F(C,2);e=d.data;e[0]=B(47);e[1]=ACe();c[21]=d;d=F(C,2);e=d.data;e[0]=B(48);e[1]=ABe();c[22]=d;d=F(C,2);e=d.data;e[0]=B(49);e[1]=ACG();c[23]=d;d=F(C,2);e=d.data;e[0]=B(50);e[1]=ACv();c[24]=d;d=F(C,2);e=d.data;e[0]=B(51);e[1]=ADr();c[25]=d;d=F(C,2);e=d.data;e[0]=B(52);e[1]=ABW();c[26]=d;d=F(C,2);e=d.data;e[0]=B(53);e[1]=ACd();c[27]=d;d=F(C,2);e=d.data;e[0]=B(54);e[1]=AE5;c[28]=d;d=F(C,2);e=d.data;e[0]=B(55);e[1]=ABq();c[29]=d;d=F(C,2);e=d.data;e[0]=B(56);e[1]
=ABE();c[30]=d;d=F(C,2);e=d.data;e[0]=B(57);e[1]=AE5;c[31]=d;d=F(C,2);e=d.data;e[0]=B(58);e[1]=AAY();c[32]=d;d=F(C,2);e=d.data;e[0]=B(59);e[1]=AE6;c[33]=d;d=F(C,2);e=d.data;e[0]=B(60);e[1]=AC_();c[34]=d;d=F(C,2);e=d.data;e[0]=B(61);e[1]=H(0,127);c[35]=d;d=F(C,2);e=d.data;e[0]=B(62);e[1]=H(128,255);c[36]=d;d=F(C,2);e=d.data;e[0]=B(63);e[1]=H(256,383);c[37]=d;d=F(C,2);e=d.data;e[0]=B(64);e[1]=H(384,591);c[38]=d;d=F(C,2);e=d.data;e[0]=B(65);e[1]=H(592,687);c[39]=d;d=F(C,2);e=d.data;e[0]=B(66);e[1]=H(688,767);c[40]
=d;d=F(C,2);e=d.data;e[0]=B(67);e[1]=H(768,879);c[41]=d;d=F(C,2);e=d.data;e[0]=B(68);e[1]=H(880,1023);c[42]=d;d=F(C,2);e=d.data;e[0]=B(69);e[1]=H(1024,1279);c[43]=d;d=F(C,2);e=d.data;e[0]=B(70);e[1]=H(1280,1327);c[44]=d;d=F(C,2);e=d.data;e[0]=B(71);e[1]=H(1328,1423);c[45]=d;d=F(C,2);e=d.data;e[0]=B(72);e[1]=H(1424,1535);c[46]=d;d=F(C,2);e=d.data;e[0]=B(73);e[1]=H(1536,1791);c[47]=d;d=F(C,2);e=d.data;e[0]=B(74);e[1]=H(1792,1871);c[48]=d;d=F(C,2);e=d.data;e[0]=B(75);e[1]=H(1872,1919);c[49]=d;d=F(C,2);e=d.data;e[0]
=B(76);e[1]=H(1920,1983);c[50]=d;d=F(C,2);e=d.data;e[0]=B(77);e[1]=H(2304,2431);c[51]=d;d=F(C,2);e=d.data;e[0]=B(78);e[1]=H(2432,2559);c[52]=d;d=F(C,2);e=d.data;e[0]=B(79);e[1]=H(2560,2687);c[53]=d;d=F(C,2);e=d.data;e[0]=B(80);e[1]=H(2688,2815);c[54]=d;d=F(C,2);e=d.data;e[0]=B(81);e[1]=H(2816,2943);c[55]=d;d=F(C,2);e=d.data;e[0]=B(82);e[1]=H(2944,3071);c[56]=d;d=F(C,2);e=d.data;e[0]=B(83);e[1]=H(3072,3199);c[57]=d;d=F(C,2);e=d.data;e[0]=B(84);e[1]=H(3200,3327);c[58]=d;d=F(C,2);e=d.data;e[0]=B(85);e[1]=H(3328,
3455);c[59]=d;d=F(C,2);e=d.data;e[0]=B(86);e[1]=H(3456,3583);c[60]=d;d=F(C,2);e=d.data;e[0]=B(87);e[1]=H(3584,3711);c[61]=d;d=F(C,2);e=d.data;e[0]=B(88);e[1]=H(3712,3839);c[62]=d;d=F(C,2);e=d.data;e[0]=B(89);e[1]=H(3840,4095);c[63]=d;d=F(C,2);e=d.data;e[0]=B(90);e[1]=H(4096,4255);c[64]=d;d=F(C,2);e=d.data;e[0]=B(91);e[1]=H(4256,4351);c[65]=d;d=F(C,2);e=d.data;e[0]=B(92);e[1]=H(4352,4607);c[66]=d;d=F(C,2);e=d.data;e[0]=B(93);e[1]=H(4608,4991);c[67]=d;d=F(C,2);e=d.data;e[0]=B(94);e[1]=H(4992,5023);c[68]=d;d=F(C,
2);e=d.data;e[0]=B(95);e[1]=H(5024,5119);c[69]=d;d=F(C,2);e=d.data;e[0]=B(96);e[1]=H(5120,5759);c[70]=d;d=F(C,2);e=d.data;e[0]=B(97);e[1]=H(5760,5791);c[71]=d;d=F(C,2);e=d.data;e[0]=B(98);e[1]=H(5792,5887);c[72]=d;d=F(C,2);e=d.data;e[0]=B(99);e[1]=H(5888,5919);c[73]=d;d=F(C,2);e=d.data;e[0]=B(100);e[1]=H(5920,5951);c[74]=d;d=F(C,2);e=d.data;e[0]=B(101);e[1]=H(5952,5983);c[75]=d;d=F(C,2);e=d.data;e[0]=B(102);e[1]=H(5984,6015);c[76]=d;d=F(C,2);e=d.data;e[0]=B(103);e[1]=H(6016,6143);c[77]=d;d=F(C,2);e=d.data;e[0]
=B(104);e[1]=H(6144,6319);c[78]=d;d=F(C,2);e=d.data;e[0]=B(105);e[1]=H(6400,6479);c[79]=d;d=F(C,2);e=d.data;e[0]=B(106);e[1]=H(6480,6527);c[80]=d;d=F(C,2);e=d.data;e[0]=B(107);e[1]=H(6528,6623);c[81]=d;d=F(C,2);e=d.data;e[0]=B(108);e[1]=H(6624,6655);c[82]=d;d=F(C,2);e=d.data;e[0]=B(109);e[1]=H(6656,6687);c[83]=d;d=F(C,2);e=d.data;e[0]=B(110);e[1]=H(7424,7551);c[84]=d;d=F(C,2);e=d.data;e[0]=B(111);e[1]=H(7552,7615);c[85]=d;d=F(C,2);e=d.data;e[0]=B(112);e[1]=H(7616,7679);c[86]=d;d=F(C,2);e=d.data;e[0]=B(113);e[1]
=H(7680,7935);c[87]=d;d=F(C,2);e=d.data;e[0]=B(114);e[1]=H(7936,8191);c[88]=d;d=F(C,2);e=d.data;e[0]=B(115);e[1]=H(8192,8303);c[89]=d;d=F(C,2);e=d.data;e[0]=B(116);e[1]=H(8304,8351);c[90]=d;d=F(C,2);e=d.data;e[0]=B(117);e[1]=H(8352,8399);c[91]=d;d=F(C,2);e=d.data;e[0]=B(118);e[1]=H(8400,8447);c[92]=d;d=F(C,2);e=d.data;e[0]=B(119);e[1]=H(8448,8527);c[93]=d;d=F(C,2);e=d.data;e[0]=B(120);e[1]=H(8528,8591);c[94]=d;d=F(C,2);e=d.data;e[0]=B(121);e[1]=H(8592,8703);c[95]=d;d=F(C,2);e=d.data;e[0]=B(122);e[1]=H(8704,
8959);c[96]=d;d=F(C,2);e=d.data;e[0]=B(123);e[1]=H(8960,9215);c[97]=d;d=F(C,2);e=d.data;e[0]=B(124);e[1]=H(9216,9279);c[98]=d;d=F(C,2);e=d.data;e[0]=B(125);e[1]=H(9280,9311);c[99]=d;d=F(C,2);e=d.data;e[0]=B(126);e[1]=H(9312,9471);c[100]=d;d=F(C,2);e=d.data;e[0]=B(127);e[1]=H(9472,9599);c[101]=d;d=F(C,2);e=d.data;e[0]=B(128);e[1]=H(9600,9631);c[102]=d;d=F(C,2);e=d.data;e[0]=B(129);e[1]=H(9632,9727);c[103]=d;d=F(C,2);e=d.data;e[0]=B(130);e[1]=H(9728,9983);c[104]=d;d=F(C,2);e=d.data;e[0]=B(131);e[1]=H(9984,10175);c[105]
=d;d=F(C,2);e=d.data;e[0]=B(132);e[1]=H(10176,10223);c[106]=d;d=F(C,2);e=d.data;e[0]=B(133);e[1]=H(10224,10239);c[107]=d;d=F(C,2);e=d.data;e[0]=B(134);e[1]=H(10240,10495);c[108]=d;d=F(C,2);e=d.data;e[0]=B(135);e[1]=H(10496,10623);c[109]=d;d=F(C,2);e=d.data;e[0]=B(136);e[1]=H(10624,10751);c[110]=d;d=F(C,2);e=d.data;e[0]=B(137);e[1]=H(10752,11007);c[111]=d;d=F(C,2);e=d.data;e[0]=B(138);e[1]=H(11008,11263);c[112]=d;d=F(C,2);e=d.data;e[0]=B(139);e[1]=H(11264,11359);c[113]=d;d=F(C,2);e=d.data;e[0]=B(140);e[1]=H(11392,
11519);c[114]=d;d=F(C,2);e=d.data;e[0]=B(141);e[1]=H(11520,11567);c[115]=d;d=F(C,2);e=d.data;e[0]=B(142);e[1]=H(11568,11647);c[116]=d;d=F(C,2);e=d.data;e[0]=B(143);e[1]=H(11648,11743);c[117]=d;d=F(C,2);e=d.data;e[0]=B(144);e[1]=H(11776,11903);c[118]=d;d=F(C,2);e=d.data;e[0]=B(145);e[1]=H(11904,12031);c[119]=d;d=F(C,2);e=d.data;e[0]=B(146);e[1]=H(12032,12255);c[120]=d;d=F(C,2);e=d.data;e[0]=B(147);e[1]=H(12272,12287);c[121]=d;d=F(C,2);e=d.data;e[0]=B(148);e[1]=H(12288,12351);c[122]=d;d=F(C,2);e=d.data;e[0]=B(149);e[1]
=H(12352,12447);c[123]=d;d=F(C,2);e=d.data;e[0]=B(150);e[1]=H(12448,12543);c[124]=d;d=F(C,2);e=d.data;e[0]=B(151);e[1]=H(12544,12591);c[125]=d;d=F(C,2);e=d.data;e[0]=B(152);e[1]=H(12592,12687);c[126]=d;d=F(C,2);e=d.data;e[0]=B(153);e[1]=H(12688,12703);c[127]=d;d=F(C,2);e=d.data;e[0]=B(154);e[1]=H(12704,12735);c[128]=d;d=F(C,2);e=d.data;e[0]=B(155);e[1]=H(12736,12783);c[129]=d;d=F(C,2);e=d.data;e[0]=B(156);e[1]=H(12784,12799);c[130]=d;d=F(C,2);e=d.data;e[0]=B(157);e[1]=H(12800,13055);c[131]=d;d=F(C,2);e=d.data;e[0]
=B(158);e[1]=H(13056,13311);c[132]=d;d=F(C,2);e=d.data;e[0]=B(159);e[1]=H(13312,19893);c[133]=d;d=F(C,2);e=d.data;e[0]=B(160);e[1]=H(19904,19967);c[134]=d;d=F(C,2);e=d.data;e[0]=B(161);e[1]=H(19968,40959);c[135]=d;d=F(C,2);e=d.data;e[0]=B(162);e[1]=H(40960,42127);c[136]=d;d=F(C,2);e=d.data;e[0]=B(163);e[1]=H(42128,42191);c[137]=d;d=F(C,2);e=d.data;e[0]=B(164);e[1]=H(42752,42783);c[138]=d;d=F(C,2);e=d.data;e[0]=B(165);e[1]=H(43008,43055);c[139]=d;d=F(C,2);e=d.data;e[0]=B(166);e[1]=H(44032,55203);c[140]=d;d=F(C,
2);e=d.data;e[0]=B(167);e[1]=H(55296,56191);c[141]=d;d=F(C,2);e=d.data;e[0]=B(168);e[1]=H(56192,56319);c[142]=d;d=F(C,2);e=d.data;e[0]=B(169);e[1]=H(56320,57343);c[143]=d;d=F(C,2);e=d.data;e[0]=B(170);e[1]=H(57344,63743);c[144]=d;d=F(C,2);e=d.data;e[0]=B(171);e[1]=H(63744,64255);c[145]=d;d=F(C,2);e=d.data;e[0]=B(172);e[1]=H(64256,64335);c[146]=d;d=F(C,2);e=d.data;e[0]=B(173);e[1]=H(64336,65023);c[147]=d;d=F(C,2);e=d.data;e[0]=B(174);e[1]=H(65024,65039);c[148]=d;d=F(C,2);e=d.data;e[0]=B(175);e[1]=H(65040,65055);c[149]
=d;d=F(C,2);e=d.data;e[0]=B(176);e[1]=H(65056,65071);c[150]=d;d=F(C,2);e=d.data;e[0]=B(177);e[1]=H(65072,65103);c[151]=d;d=F(C,2);e=d.data;e[0]=B(178);e[1]=H(65104,65135);c[152]=d;d=F(C,2);e=d.data;e[0]=B(179);e[1]=H(65136,65279);c[153]=d;d=F(C,2);e=d.data;e[0]=B(180);e[1]=H(65280,65519);c[154]=d;d=F(C,2);e=d.data;e[0]=B(181);e[1]=H(0,1114111);c[155]=d;d=F(C,2);e=d.data;e[0]=B(182);e[1]=ABK();c[156]=d;d=F(C,2);e=d.data;e[0]=B(183);e[1]=T(0,1);c[157]=d;d=F(C,2);e=d.data;e[0]=B(184);e[1]=Dc(62,1);c[158]=d;d=F(C,
2);e=d.data;e[0]=B(185);e[1]=T(1,1);c[159]=d;d=F(C,2);e=d.data;e[0]=B(186);e[1]=T(2,1);c[160]=d;d=F(C,2);e=d.data;e[0]=B(187);e[1]=T(3,0);c[161]=d;d=F(C,2);e=d.data;e[0]=B(188);e[1]=T(4,0);c[162]=d;d=F(C,2);e=d.data;e[0]=B(189);e[1]=T(5,1);c[163]=d;d=F(C,2);e=d.data;e[0]=B(190);e[1]=Dc(448,1);c[164]=d;d=F(C,2);e=d.data;e[0]=B(191);e[1]=T(6,1);c[165]=d;d=F(C,2);e=d.data;e[0]=B(192);e[1]=T(7,0);c[166]=d;d=F(C,2);e=d.data;e[0]=B(193);e[1]=T(8,1);c[167]=d;d=F(C,2);e=d.data;e[0]=B(194);e[1]=Dc(3584,1);c[168]=d;d
=F(C,2);e=d.data;e[0]=B(195);e[1]=T(9,1);c[169]=d;d=F(C,2);e=d.data;e[0]=B(196);e[1]=T(10,1);c[170]=d;d=F(C,2);e=d.data;e[0]=B(197);e[1]=T(11,1);c[171]=d;d=F(C,2);e=d.data;e[0]=B(198);e[1]=Dc(28672,0);c[172]=d;d=F(C,2);e=d.data;e[0]=B(199);e[1]=T(12,0);c[173]=d;d=F(C,2);e=d.data;e[0]=B(200);e[1]=T(13,0);c[174]=d;d=F(C,2);e=d.data;e[0]=B(201);e[1]=T(14,0);c[175]=d;d=F(C,2);e=d.data;e[0]=B(202);e[1]=ADC(983040,1,1);c[176]=d;d=F(C,2);e=d.data;e[0]=B(203);e[1]=T(15,0);c[177]=d;d=F(C,2);e=d.data;e[0]=B(204);e[1]
=T(16,1);c[178]=d;d=F(C,2);e=d.data;e[0]=B(205);e[1]=T(18,1);c[179]=d;d=F(C,2);e=d.data;e[0]=B(206);e[1]=AD$(19,0,1);c[180]=d;d=F(C,2);e=d.data;e[0]=B(207);e[1]=Dc(1643118592,1);c[181]=d;d=F(C,2);e=d.data;e[0]=B(208);e[1]=T(20,0);c[182]=d;d=F(C,2);e=d.data;e[0]=B(209);e[1]=T(21,0);c[183]=d;d=F(C,2);e=d.data;e[0]=B(210);e[1]=T(22,0);c[184]=d;d=F(C,2);e=d.data;e[0]=B(211);e[1]=T(23,0);c[185]=d;d=F(C,2);e=d.data;e[0]=B(212);e[1]=T(24,1);c[186]=d;d=F(C,2);e=d.data;e[0]=B(213);e[1]=Dc(2113929216,1);c[187]=d;d=F(C,
2);e=d.data;e[0]=B(214);e[1]=T(25,1);c[188]=d;d=F(C,2);e=d.data;e[0]=B(215);e[1]=T(26,0);c[189]=d;d=F(C,2);e=d.data;e[0]=B(216);e[1]=T(27,0);c[190]=d;d=F(C,2);e=d.data;e[0]=B(217);e[1]=T(28,1);c[191]=d;d=F(C,2);e=d.data;e[0]=B(218);e[1]=T(29,0);c[192]=d;d=F(C,2);e=d.data;e[0]=B(219);e[1]=T(30,0);c[193]=d;AE7=b;}
function Gp(){L.call(this);}
function ABe(){var a=new Gp();Sq(a);return a;}
function Sq(a){Q(a);}
function WF(a){var b;b=ACp(a);b.y=1;return b;}
function Ci(){var a=this;W.call(a);a.c_=0;a.fA=null;a.eP=null;a.eF=0;}
function AD6(a,b){var c=new Ci();EU(c,a,b);return c;}
function EU(a,b,c){BD(a);a.c_=1;a.eP=b;a.eF=c;}
function YX(a,b){a.f=b;}
function QC(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;e=$rt_createIntArray(4);f=0;g=d.q();if(b>=g)return (-1);h=a.gi(b,c,g);i=b+a.c_|0;j=KU(h);if(j===null){k=e.data;l=1;k[f]=h;}else{l=j.data.length;Gt(j,0,e,0,l);l=f+l|0;}a:{if(i<g){m=a.gi(i,c,g);while(l<4){if(!Rf(m)){k=e.data;n=l+1|0;k[l]=m;}else{k=KU(m).data;if(k.length!=2){o=e.data;n=l+1|0;o[l]=k[0];}else{o=e.data;m=l+1|0;o[l]=k[0];n=m+1|0;o[m]=k[1];}}i=i+a.c_|0;if(i>=g){l=n;break a;}m=a.gi(i,c,g);l=n;}}}if(l!=a.eF)return (-1);p=0;while(true){if(p>=l)return a.f.b(i,
c,d);if(e.data[p]!=a.eP.data[p])break;p=p+1|0;}return (-1);}
function FP(a){var b,c;if(a.fA===null){b=J();c=0;while(c<a.eF){b.fH(CK(a.eP.data[c]));c=c+1|0;}a.fA=b.e();}return a.fA;}
function YL(a,b,c,d){var e,f,g,h,i;a.c_=1;if(b>=(d-1|0))e=c.d(b);else{f=b+1|0;e=c.d(b);g=c.d(f);if(CU(e,g)){h=$rt_createCharArray(2);i=h.data;i[0]=e;i[1]=g;e=Iy(h,0);a.c_=2;}}return e;}
function ZR(a,b){var c,d;a:{if(b instanceof Ci){c=b;if(!FP(c).bz(FP(a))){d=0;break a;}}d=1;}return d;}
function SI(a,b){return 1;}
function H_(){Ci.call(this);}
function ADZ(a,b){var c=new H_();RW(c,a,b);return c;}
function RW(a,b,c){EU(a,b,c);}
function CO(){var a=this;C.call(a);a.g_=null;a.kR=0;}
function AE8(a,b){var c=new CO();FU(c,a,b);return c;}
function FU(a,b,c){M(a);a.g_=b;a.kR=c;}
function MO(a){return a.g_;}
function J7(b,c){var d,e,f,g,h;d=b.kb();if(d===null)G(Bz(J().a(B(220)).a(b.bY()).e()));e=d.data;f=e.length;g=0;while(true){if(g>=f)G(Bz(J().a(B(221)).a(b.bY()).a(B(222)).ie(c).a(B(223)).e()));h=e[g];if(MO(h).bz(c))break;g=g+1|0;}return h;}
function B4(){CO.call(this);}
var AE9=null;var AE$=null;var AE_=null;var AFa=null;var AFb=null;function DV(){DV=Be(B4);Qn();}
function FF(a,b){var c=new B4();Hk(c,a,b);return c;}
function RM(){DV();return AFb.dI();}
function Hu(b){DV();return J7(D(B4),b);}
function Hk(a,b,c){DV();FU(a,b,c);}
function Qn(){var b,c;AE9=FF(B(224),0);AE$=FF(B(225),1);AE_=FF(B(226),2);AFa=FF(B(227),3);b=F(B4,4);c=b.data;c[0]=AE9;c[1]=AE$;c[2]=AE_;c[3]=AFa;AFb=b;}
function CC(){CP.call(this);}
function AFc(a){var b=new CC();FO(b,a);return b;}
function FO(a,b){G8(a,b);}
function K5(){CC.call(this);}
function AFd(a){var b=new K5();SH(b,a);return b;}
function SH(a,b){FO(a,b);}
function MB(){Bt.call(this);}
function AA_(){var a=new MB();Nq(a);return a;}
function Nq(a){Ck(a,(-1));}
function S0(a,b,c,d){return b;}
function J9(){L.call(this);}
function ACJ(){var a=new J9();Q7(a);return a;}
function Q7(a){Q(a);}
function U7(a){return By().J(0,127);}
function Ea(){W.call(this);}
function ADG(a,b){var c=new Ea();HT(c,a,b);return c;}
function HT(a,b,c){H4(a,b,c);}
function QD(a,b,c,d){var e,f,g,h,i;e=d.bF(a.A);d.C(a.A,b);f=a.O.X();g=0;while(true){if(g>=f){d.C(a.A,e);return (-1);}h=a.O.H(g);i=h.b(b,c,d);if(i>=0)break;g=g+1|0;}return i;}
function Th(a,b){var c;c=b.bF(a.A);return !c?0:1;}
function BV(){Ea.call(this);}
function ABr(a,b){var c=new BV();Dh(c,a,b);return c;}
function Dh(a,b,c){HT(a,b,c);}
function T4(a,b,c,d){var e,f,g,h,i;e=d.bF(a.A);d.C(a.A,b);f=a.O.X();g=0;while(g<f){h=a.O.H(g);i=h.b(b,c,d);if(i>=0)return a.f.b(a.bs.bu(),c,d);g=g+1|0;}d.C(a.A,e);return (-1);}
function SF(a,b){a.f=b;}
function GP(){BV.call(this);}
function ACr(a,b){var c=new GP();WL(c,a,b);return c;}
function WL(a,b,c){Dh(a,b,c);}
function QP(a,b,c,d){var e,f,g,h;e=a.O.X();f=0;while(f<e){g=a.O.H(f);h=g.b(b,c,d);if(h>=0)return a.f.b(b,c,d);f=f+1|0;}return (-1);}
function W$(a,b){return 0;}
function Cy(){C.call(this);this.la=null;}
function AFe(){var a=new Cy();EN(a);return a;}
function AFf(a){var b=new Cy();Lr(b,a);return b;}
function EN(a){Lr(a,ACn());}
function Lr(a,b){M(a);a.la=b;}
function M5(){var a=this;Cy.call(a);a.cX=null;a.eA=0;}
function EC(a){var b=new M5();TJ(b,a);return b;}
function TJ(a,b){EN(a);if(b!==null){a.cX=b;return;}G(RJ());}
function TF(a,b,c,d){var e,f,g,h,i,j;MT(a);if(a.eA>=a.cX.g())return (-1);e=V(a.cX.g()-a.eA|0,d);f=0;while(f<e){g=b.data;h=c+1|0;i=a.cX;j=a.eA;a.eA=j+1|0;g[c]=i.d(j);f=f+1|0;c=h;}return e;}
function Ns(a){a.cX=null;}
function MT(a){if(a.cX!==null)return;G(PI());}
function Kx(){BV.call(this);}
function AA6(a,b){var c=new Kx();Vz(c,a,b);return c;}
function Vz(a,b,c){Dh(a,b,c);}
function Re(a,b,c,d){var e,f,g;e=a.O.X();f=0;while(true){if(f>=e)return a.f.b(b,c,d);g=a.O.H(f);if(g.b(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function VZ(a,b){return 0;}
function Fo(){}
function HV(){var a=this;C.call(a);a.ei=0;a.ir=0;a.iw=0;a.gP=0;a.de=null;}
function ABx(a){var b=new HV();Rq(b,a);return b;}
function Rq(a,b){a.de=b;M(a);a.ir=a.de.cc;a.iw=a.de.X();a.gP=(-1);}
function Pb(a){return a.ei>=a.iw?0:1;}
function WH(a){var b,c;Jo(a);a.gP=a.ei;b=a.de;c=a.ei;a.ei=c+1|0;return b.H(c);}
function Jo(a){if(a.ir>=a.de.cc)return;G(ABZ());}
function Fk(){}
function DK(){}
function D7(){}
function Fz(){}
function D3(){}
function JL(){}
function Mh(b){var c,d;c=b.lastChild;while(c!==null){d=c.previousSibling;if(c.nodeType!=2)b.removeChild(c);c=d;}return b;}
function I2(){var a=this;C.call(a);a.gT=null;a.iP=Long_ZERO;a.iS=0.0;}
function ABM(a,b){var c=new I2();Yo(c,a,b);return c;}
function Pt(b,c){var d,e,$$je;a:{try{d=YF(b,EC(c));}catch($$e){$$je=Bb($$e);if($$je instanceof BZ){e=$$je;break a;}else{throw $$e;}}return d;}Cz().o(B(228));e.ev();return null;}
function YF(b,c){var d,e,f,g,h,i,$$je;d=BN();e=El(c);a:{while(true){try{f=e.el();if(f===null)break a;g=B9(f,32);if(!f.ek(B(229))&&g.X()>=2){h=g.H(0).c6();if(h.g()==2&&b.ch(h.d(0))>=0&&b.ch(h.d(1))>=0){i=FW(g.H(1));d.be(ABM(h,i));}}continue;}catch($$e){$$je=Bb($$e);f=$$je;}}e.bK();G(f);}e.bK();TY(d);return d;}
function TY(b){var c,d,e;c=Long_ZERO;d=b.S();while(d.U()){e=d.R();c=Long_add(c,e.dt());}d=b.S();while(d.U()){e=d.R();e.iS=Long_toNumber(e.dt())/Long_toNumber(c);}}
function Yo(a,b,c){M(a);a.gT=b;a.iP=c;}
function T2(a){return a.gT;}
function AAs(a){return a.iP;}
function Yk(a){return a.iS;}
function B6(){}
function He(){var a=this;Ct.call(a);a.gt=0;a.ep=0;}
function AB1(a,b){var c=new He();YK(c,a,b);return c;}
function YK(a,b,c){Eq(a);a.gt=b;a.ep=c;}
function WR(a){return a.gt;}
function W_(a){return a.ep;}
function PH(a){return J().a(B(230)).m(a.gt).a(B(231)).a(a.ep==2147483647?B(25):AC5(a.ep).e()).a(B(232)).e();}
function DX(){U.call(this);}
function ADc(){var a=new DX();GO(a);return a;}
function GO(a){BB(a);}
function MN(){DX.call(this);}
function Gy(){var a=new MN();Y9(a);return a;}
function Y9(a){GO(a);}
function GT(){I.call(this);this.ju=null;}
function ABt(a){var b=new GT();Va(b,a);return b;}
function Va(a,b){a.ju=b;P(a);}
function QJ(a,b){return Gx(b);}
function Hy(){C.call(this);}
function I1(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(Cv());}return b.data.length;}
function I7(b,c){if(b===null)G(RJ());if(b===D($rt_voidcls()))G(Cv());if(c<0)G(ADt());return Yi(b.lD(),c);}
function Yi(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
function In(){C.call(this);}
function ABu(){var a=new In();RN(a);return a;}
function RN(a){M(a);}
function G3(){var a=this;C.call(a);a.i8=0;a.i7=0;a.lk=null;}
function AA7(a,b,c){var d=new G3();Ps(d,a,b,c);return d;}
function Ps(a,b,c,d){a.lk=b;M(a);a.i8=c;a.i7=d;}
function JR(){C.call(this);}
function D4(){D0.call(this);}
function AFg(a,b,c){var d=new D4();Ig(d,a,b,c);return d;}
function Ig(a,b,c,d){MS(a,b,c,d);}
function WV(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=$rt_createByteArray(V(X(b),512));e=0;f=0;g=$rt_createCharArray(V(X(c),512));a:{while(true){if((e+32|0)>f&&BT(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=V(X(b)+j|0,i.length);b.lu(d,j,f-j|0);e=0;}if(!BT(c)){if(!BT(b)&&e>=f){Bj();k=AEU;}else{Bj();k=AES;}break a;}i=g.data;l=V(X(c),i.length);m=AB0(b,c);k=a.kw(d,e,f,g,0,l,m);e=m.iT;if(k===null&&0==m.ff){Bj();k=AEU;}j=m.ff;c.k6(g,0,j);if(k!==null)break;}}b.er(BG(b)-(f-e|0)|0);return k;}
function HP(){D4.call(this);}
function ACc(a){var b=new HP();AAc(b,a);return b;}
function AAc(a,b){Ig(a,b,0.3333333432674408,0.5);}
function Yq(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(h.dq())break a;Bj();i=AEU;break a;}n=k+1|0;o=j[k];if(!Cj(a,o)){c=n+(-2)|0;i=BM(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|o&63)&65535;k=n;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(h.dq())break a;Bj();i=AEU;break a;}p=k+1|0;o=j[k];k=p+1|0;q=j[p];if(!Cj(a,o))break b;if(!Cj(a,q))break b;r
=((l&15)<<12|(o&63)<<6|q&63)&65535;if(D5(r)){c=k+(-3)|0;i=BM(3);break a;}j=e.data;m=f+1|0;j[f]=r;}else{if((l&248)!=240){c=k+(-1)|0;i=BM(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(h.dq())break a;Bj();i=AEU;break a;}if((f+2|0)>g){c=k+(-1)|0;if(h.dE(2))break a;Bj();i=AES;break a;}p=k+1|0;o=j[k];m=p+1|0;q=j[p];k=m+1|0;s=j[m];if(!Cj(a,o))break c;if(!Cj(a,q))break c;if(!Cj(a,s))break c;j=e.data;t=(l&7)<<18|(o&63)<<12|(q&63)<<6|s&63;p=f+1|0;j[f]=CR(t);m=p+1|0;j[p]=CG(t);}c=k;f=m;}break a;}c=k+(-3)|0;i=BM(1);break a;}c
=k+(-3)|0;i=BM(1);}h.gh(c);h.eN(f);return i;}
function Cj(a,b){return (b&192)!=128?0:1;}
function H6(){CC.call(this);}
function AFh(a){var b=new H6();Sc(b,a);return b;}
function Sc(a,b){FO(a,b);}
function H5(){L.call(this);}
function ACx(){var a=new H5();Sd(a);return a;}
function Sd(a){Q(a);}
function Uq(a){var b;b=ABy(a);b.y=1;return b;}
function FD(){}
function DC(){}
function Dn(){C.call(this);}
function AFi(){var a=new Dn();Lz(a);return a;}
function Lz(a){M(a);}
function UY(a){return a.X()?0:1;}
function U8(a,b){var c,d,e,f;c=b.data;d=a.X();e=c.length;if(e<d)b=I7(Cf(b).eC(),d);else while(d<e){c[d]=null;d=d+1|0;}d=0;f=a.S();while(f.U()){c=b.data;e=d+1|0;c[d]=f.R();d=e;}return b;}
function QS(a,b){var c,d;c=0;d=b.S();while(d.U()){if(!a.be(d.R()))continue;c=1;}return c;}
function Ng(){Bx.call(this);}
function ACs(a,b,c){var d=new Ng();SR(d,a,b,c);return d;}
function SR(a,b,c,d){Cq(a,b,c,d);}
function PF(a,b,c,d){var e;a:{while(true){if((b+a.B.bb()|0)>d.q())break a;e=a.B.I(b,c);if(e<1)break;b=b+e|0;}}return a.f.b(b,c,d);}
function Jr(){var a=this;C.call(a);a.gF=null;a.hW=null;a.iT=0;a.ff=0;}
function AB0(a,b){var c=new Jr();Pr(c,a,b);return c;}
function Pr(a,b,c){M(a);a.gF=b;a.hW=c;}
function Pm(a){return BT(a.gF);}
function Rp(a,b){return X(a.hW)<b?0:1;}
function W9(a,b){a.iT=b;}
function S9(a,b){a.ff=b;}
function JU(){C.call(this);}
function Oj(b,c){var d,e,f,g,h,i,j,k;if(!b)return B(233);d=1<<c;e=d-1|0;f=(((32-EP(b)|0)+c|0)-1|0)/c|0;g=$rt_createCharArray(f);h=Ce(f-1|0,c);i=0;while(h>=0){j=g.data;k=i+1|0;j[i]=Eb(b>>>h&e,d);h=h-c|0;i=k;}return GE(g);}
function Cb(){Bx.call(this);}
function ABa(a,b,c){var d=new Cb();Eo(d,a,b,c);return d;}
function Eo(a,b,c,d){Cq(a,b,c,d);}
function NO(a,b,c,d){var e;e=a.w.b(b,c,d);if(e<0)e=a.f.b(b,c,d);return e;}
function AAR(a,b){FN(a,b);a.w.s(b);}
function KM(){Cb.call(this);}
function ABh(a,b,c){var d=new KM();Zf(d,a,b,c);return d;}
function Zf(a,b,c,d){Eo(a,b,c,d);}
function OQ(a,b,c,d){var e;if((b+a.B.bb()|0)<=d.q()){e=a.B.I(b,c);if(e>=1)b=b+e|0;}return a.f.b(b,c,d);}
function Io(){I.call(this);this.lz=null;}
function ACX(a){var b=new Io();N1(b,a);return b;}
function N1(a,b){a.lz=b;P(a);}
function QH(a,b){return CJ(b);}
function Gn(){}
function H7(){I.call(this);this.k0=null;}
function ACp(a){var b=new H7();ZK(b,a);return b;}
function ZK(a,b){a.k0=b;P(a);}
function X8(a,b){return Lk(b);}
function K2(){Bx.call(this);}
function AC7(a,b,c){var d=new K2();AAU(d,a,b,c);return d;}
function AAU(a,b,c,d){Cq(a,b,c,d);}
function QU(a,b,c,d){var e;while(true){e=a.f.b(b,c,d);if(e>=0)break;if((b+a.B.bb()|0)<=d.q()){e=a.B.I(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
function Js(){C.call(this);}
function CT(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function DB(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
function G9(){I.call(this);this.lT=null;}
function AD4(a){var b=new G9();Tl(b,a);return b;}
function Tl(a,b){a.lT=b;P(a);}
function TC(a,b){return L1(b);}
function IW(){C.call(this);}
function Tu(b){var c,d,e,f;c=ACo(b.b3());d=Hq(c);e=$rt_createIntArray(d);f=0;while(f<d){e.data[f]=Hq(c);f=f+1|0;}return e;}
function D_(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function AAO(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;c=F(EK,16384);d=$rt_createByteArray(16384);e=0;f=0;g=0;h=0;while(h<b.g()){i=D_(b.d(h));if(i==64){h=h+1|0;i=D_(b.d(h));j=0;k=1;l=0;while(l<3){h=h+1|0;m=D_(b.d(h));j=j|Ce(k,m);k=k*64|0;l=l+1|0;}}else if(i<32)j=1;else{i=(i-32|0)<<24>>24;h=h+1|0;j=D_(b.d(h));}if(!i&&j>=128){if(e>0){n=c.data;o=f+1|0;n[f]=VU(g,g+e|0,FS(d,e));f=o;}g=g+(e+j|0)|0;e=0;}else{p=d.data;o=e+j|0;if(o<p.length)q=f;else{n=c.data;q=f+1|0;n[f]=VU(g,g+e|0,FS(d,e));g=g+o|0;e=0;}while(true){o=j
+(-1)|0;if(j<=0)break;r=e+1|0;p[e]=i;e=r;j=o;}f=q;}h=h+1|0;}return Ma(c,f);}
function G2(){var a=this;C.call(a);a.lP=null;a.dn=null;a.fX=0;a.fs=0;a.fi=null;a.cV=null;a.fj=null;}
function VE(a){var b=new G2();Xx(b,a);return b;}
function Xx(a,b){M(a);a.dn=BN();a.fi=$rt_createDoubleArray(3);a.cV=$rt_createDoubleMultiArray([3,4]);DV();a.fj=AE9;a.lP=b;}
function R1(a,b,c,d){var e;e=ADi(b,c,d);a.dn.be(e);if(a.fX<(e.em()+1|0))a.fX=e.em()+1|0;if(a.fs<(e.ce()+1|0))a.fs=e.ce()+1|0;}
function Nr(a){var b,c,d,e,f,g,h,i,j;b=a.dp();c=BN();d=B(234).b3().data;e=d.length;f=0;while(f<e){g=d[f];if(b.ch(g)<0)c.be(J().a(B(235)).bn(g).a(B(236)).e());f=f+1|0;}h=0;while(h<(b.g()-1|0)){i=h+1|0;j=i;while(j<b.g()){if(b.d(h)==b.d(j))c.be(J().a(B(235)).bn(b.d(h)).a(B(237)).e());j=j+1|0;}h=i;}return c;}
function Pn(a,b){var c,d;c=a.dn.S();while(true){if(!c.U())return null;d=c.R();if(d.kc(b))break;}return d;}
function AAX(a,b,c){var d,e;d=a.dn.S();while(true){if(!d.U())return null;e=d.R();if(e.ce()==b&&e.em()==c)break;}return e;}
function ZD(a){var b,c,d;b=J();c=a.dn.S();while(c.U()){d=c.R();b.a(d.dT());}return b.e();}
function QQ(a){return a.fX;}
function Ww(a){return a.fs;}
function OV(a,b){return a.fi.data[b];}
function Zv(a,b,c){a.fi.data[b]=c;}
function YW(a,b,c){if(b>4)b=9-b|0;if(a.cV.data.length<=b)return 0.0;return a.cV.data[b].data[c];}
function Uy(a,b,c,d){a.cV.data[b].data[c]=d;}
function RX(a,b){var c;if(b>4)b=9-b|0;if(a.cV.data.length<=b)return 0;c=0;while(c<3){if(a.cV.data[b].data[c]>0.0)return 1;c=c+1|0;}return 0;}
function Xv(a){return a.fj;}
function TU(a,b){a.fj=b;}
function Eh(){DH.call(this);}
function ABC(){var a=new Eh();I_(a);return a;}
function I_(a){Me(a);}
function Gv(a){return KK(a).J(33,64).J(91,96).J(123,126);}
function Mu(){Eh.call(this);}
function ABm(){var a=new Mu();Vv(a);return a;}
function Vv(a){I_(a);}
function Or(a){return Gv(a).bh(32);}
function JH(){L.call(this);}
function ACv(){var a=new JH();PG(a);return a;}
function PG(a){Q(a);}
function WQ(a){return ADs(a);}
function Ej(){}
function D$(){var a=this;C.call(a);a.ft=null;a.ef=null;}
function AFj(a,b){var c=new D$();MV(c,a,b);return c;}
function MV(a,b,c){M(a);a.ft=b;a.ef=c;}
function ED(){var a=this;D$.call(a);a.eX=0;a.dk=null;}
function ACH(a,b){var c=new ED();RR(c,a,b);return c;}
function RR(a,b,c){MV(a,b,null);a.eX=c;}
function LS(){BV.call(this);}
function ACh(a,b){var c=new LS();VQ(c,a,b);return c;}
function VQ(a,b,c){Dh(a,b,c);}
function St(a,b,c,d){var e,f,g,h,i;e=a.O.X();f=!d.dd()?d.bw():0;a:{g=a.f.b(b,c,d);if(g>=0){d.C(a.A,b);h=0;while(true){if(h>=e)break a;i=a.O.H(h);if(i.bg(f,b,c,d)>=0){d.C(a.A,(-1));return g;}h=h+1|0;}}}return (-1);}
function AAJ(a,b){return 0;}
function Dj(){var a=this;C.call(a);a.jV=null;a.f5=null;a.j2=0.0;a.gw=0.0;a.fl=null;a.gj=null;a.cS=0;}
function AFk(a,b,c,d){var e=new Dj();L3(e,a,b,c,d);return e;}
function AFl(a,b,c){var d=new Dj();La(d,a,b,c);return d;}
function L3(a,b,c,d,e){M(a);B8();a.fl=AER;a.gj=AER;LP(a,e);a.jV=b;a.f5=e.dI();a.j2=c;a.gw=d;}
function La(a,b,c,d){var e;e=$rt_createByteArray(1);e.data[0]=63;L3(a,b,c,d,e);}
function LP(a,b){var c;if(b!==null){c=b.data.length;if(c&&c>=a.gw)return;}G(Bz(B(238)));}
function Go(a,b){if(b!==null){a.fl=b;a.f3(b);return a;}G(Bz(B(239)));}
function Zi(a,b){return;}
function LV(a,b){if(b!==null){a.gj=b;a.fz(b);return a;}G(Bz(B(239)));}
function Ys(a,b){return;}
function Ic(a,b,c,d){var e,f,g,h,$$je;a:{if(a.cS!=3){if(d)break a;if(a.cS!=2)break a;}G(C1());}a.cS=!d?1:2;while(true){try{e=a.ka(b,c);}catch($$e){$$je=Bb($$e);if($$je instanceof U){f=$$je;G(TM(f));}else{throw $$e;}}if(e.dK()){if(!d)return e;g=X(b);if(g<=0)return e;e=BM(g);}else if(e.db())break;h=!e.f9()?a.fl:a.gj;b:{B8();if(h!==AET){if(h===AFm)break b;else return e;}if(X(c)<a.f5.data.length)return AES;KS(c,a.f5);}b.fg(BG(b)+e.g()|0);}return e;}
function G4(a,b){var c;if(a.cS!=2&&a.cS!=4)G(C1());c=a.jy(b);Bj();if(c===AEU)a.cS=3;return c;}
function N5(a,b){Bj();return AEU;}
function Mw(){var a=this;Z.call(a);a.bk=null;a.fI=null;a.eO=null;}
function ADD(a){var b=new Mw();TK(b,a);return b;}
function TK(a,b){var c;BH(a);a.bk=b.e();a.Q=b.g();a.fI=PS(a.Q);a.eO=PS(a.Q);c=0;while(c<(a.Q-1|0)){a.fI.i4(a.bk.d(c),(a.Q-c|0)-1|0);a.eO.i4(a.bk.d((a.Q-c|0)-1|0),(a.Q-c|0)-1|0);c=c+1|0;}}
function TT(a,b,c){return !a.fY(c,b)?(-1):a.Q;}
function Q4(a,b,c,d){var e,f;e=d.q();while(true){if(b>e)return (-1);f=a.jt(c,b,e);if(f<0)return (-1);if(a.f.b(f+a.Q|0,c,d)>=0)break;b=f+1|0;}return f;}
function Wz(a,b,c,d,e){var f;while(true){if(c<b)return (-1);f=a.jF(d,b,c);if(f<0)return (-1);if(a.f.b(f+a.Q|0,d,e)>=0)break;c=f+(-1)|0;}return f;}
function XR(a,b){var c,d,e,f,g;if(b instanceof B2)return b.ck()!=a.bk.d(0)?0:1;if(b instanceof B3)return b.I(0,a.bk.cj(0,1))<=0?0:1;if(!(b instanceof BK)){if(!(b instanceof B1))return 1;a:{if(a.bk.g()>1){c=b;d=c.go();e=a.bk.d(0);c=a.bk;f=c.d(1);if(d==BU(e,f)){e=1;break a;}}e=0;}return e;}b:{c:{c=b;if(!c.j(a.bk.d(0))){g=a.bk;if(g.g()<=1)break c;g=a.bk;e=BU(g.d(0),a.bk.d(1));if(!c.j(e))break c;}e=1;break b;}e=0;}return e;}
function Xh(a,b,c,d){var e,f;e=a.bk.d(a.Q-1|0);while(true){if(c>(d-a.Q|0))return (-1);f=b.d((c+a.Q|0)-1|0);if(f==e&&a.fY(b,c))break;c=c+a.fI.fK(f)|0;}return c;}
function VK(a,b,c,d){var e,f,g,h;e=a.bk.d(0);f=b.g();g=(f-d|0)-a.Q|0;if(g<=0)d=d+g|0;while(true){if(d<c)return (-1);h=b.d(d);if(h==e&&a.fY(b,d))break;d=d-a.eO.fK(h)|0;}return d;}
function X_(a,b,c){var d;d=0;while(d<a.Q){if(b.d(d+c|0)!=a.bk.d(d))return 0;d=d+1|0;}return 1;}
function Lh(){R.call(this);}
function AC2(){var a=new Lh();YQ(a);return a;}
function YQ(a){Bo(a);}
function Qs(a,b,c,d){var e;e=!d.dd()?d.q():c.g();if(b<e)return (-1);d.by=1;d.kS=1;return a.f.b(b,c,d);}
function Nt(a,b){return 0;}
function Lj(){U.call(this);}
function Ka(){var a=new Lj();VH(a);return a;}
function VH(a){BB(a);}
function CN(){Bv.call(this);}
function ADK(a,b,c){var d=new CN();Ev(d,a,b,c);return d;}
function Ev(a,b,c,d){CA(a,b,c,d);}
function U_(a,b,c,d){var e;if(!a.w.x(d))return a.f.b(b,c,d);e=a.w.b(b,c,d);if(e>=0)return e;return a.f.b(b,c,d);}
function XU(a,b){FN(a,b);a.w.s(b);}
function J4(){L.call(this);}
function AA$(){var a=new J4();Ze(a);return a;}
function Ze(a){Q(a);}
function V6(a){return By().J(65,90);}
function DJ(){var a=this;CD.call(a);a.gd=0;a.fa=null;a.lZ=null;}
function AFn(a,b,c,d,e){var f=new DJ();HW(f,a,b,c,d,e);return f;}
function HW(a,b,c,d,e,f){FA(a,c);Y4();a.lZ=AEW;a.gd=b;a.fa=d;a.L=e;a.bM=f;}
function Mj(b,c,d){return ACS(0,b.data.length,b,c,c+d|0,0,0);}
function UI(b){return Mj(b,0,b.data.length);}
function Tp(a,b,c,d){var e,f,g,h,i,j;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Bp(J().a(B(240)).m(g).a(B(241)).m(f).e()));if(X(a)<d)G(Yr());if(d<0)G(Bp(J().a(B(242)).m(d).a(B(243)).e()));h=a.L+a.gd|0;i=0;while(i<d){g=c+1|0;j=a.fa.data;f=h+1|0;e[c]=j[h];i=i+1|0;c=g;h=f;}a.L=a.L+d|0;return a;}}e=b.data;G(Bp(J().a(B(244)).m(c).a(B(23)).m(e.length).a(B(245)).e()));}
function XN(a,b,c,d){var e,f,g,h,i,j;if(!d)return a;if(a.dN())G(Gy());if(X(a)<d)G(I8());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Bp(J().a(B(246)).m(g).a(B(241)).m(f).e()));if(d<0)G(Bp(J().a(B(242)).m(d).a(B(243)).e()));h=a.L+a.gd|0;i=0;while(i<d){j=a.fa.data;g=h+1|0;f=c+1|0;j[h]=e[c];i=i+1|0;h=g;c=f;}a.L=a.L+d|0;return a;}}e=b.data;G(Bp(J().a(B(244)).m(c).a(B(23)).m(e.length).a(B(245)).e()));}
function KS(a,b){return a.hY(b,0,b.data.length);}
function EW(a){IY(a);return a;}
function VL(a,b){FI(a,b);return a;}
function Lx(){var a=this;DJ.call(a);a.jp=0;a.gS=0;}
function ACS(a,b,c,d,e,f,g){var h=new Lx();OW(h,a,b,c,d,e,f,g);return h;}
function OW(a,b,c,d,e,f,g,h){HW(a,b,c,d,e,f);a.jp=g;a.gS=h;}
function Xj(a){return a.gS;}
function DY(){}
function Fm(){var a=this;C.call(a);a.bt=null;a.du=null;a.gl=null;a.gs=null;a.hK=0;a.ew=0;a.fp=0;a.jd=0;a.bC=0;a.jm=0;a.jl=0;a.by=0;a.kS=0;a.cM=0;a.fy=0;}
function AFo(a,b,c,d,e,f){var g=new Fm();HC(g,a,b,c,d,e,f);return g;}
function HC(a,b,c,d,e,f,g){var h;M(a);a.cM=(-1);h=e+1|0;a.hK=h;a.bt=$rt_createIntArray(h*2|0);a.du=$rt_createIntArray(g);DE(a.du,(-1));if(f>0)a.gl=$rt_createIntArray(f);DE(a.bt,(-1));a.h_(b,c,d);}
function Xy(a,b,c){a.du.data[b]=c;}
function AAV(a,b){return a.du.data[b];}
function NT(a){return a.gg(0);}
function Z9(a,b){Ga(a,b);return a.bt.data[(b*2|0)+1|0];}
function Tf(a,b,c){a.bt.data[b*2|0]=c;}
function Q6(a,b,c){a.bt.data[(b*2|0)+1|0]=c;}
function Sl(a,b){return a.bt.data[b*2|0];}
function SD(a,b){return a.bt.data[(b*2|0)+1|0];}
function ZJ(a,b){var c,d;c=a.cE(b);d=a.eB(b);if((d|c|(d-c|0))>=0&&d<=a.gs.g())return a.gs.fu(c,d).e();return null;}
function Sp(a){return a.e3(0);}
function SK(a,b){Ga(a,b);return a.bt.data[b*2|0];}
function NR(a){if(a.bt.data[0]==(-1)){a.bt.data[0]=a.bC;a.bt.data[1]=a.bC;}a.cM=a.ec();}
function Ot(a,b){return a.gl.data[b];}
function Sw(a,b,c){a.gl.data[b]=c;}
function Ga(a,b){if(!a.ew)G(C1());if(b>=0&&b<a.hK)return;G(Bp(EL(b)));}
function X1(a){a.ew=1;}
function X3(a){return a.ew;}
function Zn(a,b,c,d){a.ew=0;a.fy=2;DE(a.bt,(-1));DE(a.du,(-1));if(b!==null)a.gs=b;if(c>=0)Ls(a,c,d);a.bC=a.fp;}
function TD(a){a.h_(null,(-1),(-1));}
function Ls(a,b,c){a.fp=b;a.jd=c;}
function T0(a,b){a.bC=b;if(a.cM>=0)b=a.cM;a.cM=b;}
function RO(a){return a.fp;}
function NP(a){return a.jd;}
function Ux(a,b){a.fy=b;}
function Wp(a){return a.fy;}
function XO(a){return a.jl;}
function Os(a){return a.jm;}
function P2(a){return a.cM;}
function I0(){var a=this;Z.call(a);a.iL=null;a.lo=0;}
function XD(a){var b=new I0();PT(b,a);return b;}
function PT(a,b){BH(a);a.iL=b.c7();a.lo=b.G;}
function ZP(a,b,c){var d,e;d=a.iL;e=BA(c.d(b));return !d.j(BI(e))?(-1):1;}
function GJ(){var a=this;C.call(a);a.hb=0;a.h2=Long_ZERO;a.g6=0.0;}
function ACM(a,b){var c=new GJ();Po(c,a,b);return c;}
function ON(b,c){var d,e,$$je;a:{try{d=Vj(b,EC(c));}catch($$e){$$je=Bb($$e);if($$je instanceof BZ){e=$$je;break a;}else{throw $$e;}}return d;}Cz().o(B(247));e.ev();return null;}
function Vj(b,c){var d,e,f,g,h,i,$$je;d=BN();e=El(c);a:{while(true){try{f=e.el();if(f===null)break a;g=B9(f,32);if(!f.ek(B(229))&&g.X()>=2){h=g.H(0).c6();if(h.g()==1&&b.fT(h)){i=FW(g.H(1));d.be(ACM(h.d(0),i));}}continue;}catch($$e){$$je=Bb($$e);f=$$je;}}e.bK();G(f);}e.bK();WE(d);return d;}
function WE(b){var c,d,e;c=Long_ZERO;d=b.S();while(d.U()){e=d.R();c=Long_add(c,e.dt());}d=b.S();while(d.U()){e=d.R();e.g6=Long_toNumber(e.dt())/Long_toNumber(c);}}
function JQ(b,c){var d,e;d=c.S();while(true){if(!d.U())return null;e=d.R();if(b==e.ck())break;}return e;}
function Po(a,b,c){M(a);a.hb=b;a.h2=c;}
function O6(a){return a.hb;}
function OO(a){return a.h2;}
function OP(a){return a.g6;}
function GL(){I.call(this);this.jj=null;}
function ABD(a){var b=new GL();Zt(b,a);return b;}
function Zt(a,b){a.jj=b;P(a);}
function ZT(a,b){return MK(b);}
function Ib(){C.call(this);this.d0=null;}
function IZ(a){var b=new Ib();QK(b,a);return b;}
function Pq(b){var c,d,e,f,g;BQ();c=AFp.data;d=c.length;e=0;while(e<d){f=c[e];if(b.jX(f.bY())){f.eL(1);g=IZ(f);g.fq();return f;}e=e+1|0;}return null;}
function ZX(){var b,c,d,e,f;BQ();b=AFq.data;c=b.length;d=0;while(d<c){e=b[d];if(!e.dj().E()){e.eL(1);f=IZ(e);f.fq();}d=d+1|0;}}
function WI(){var b,c,d,e,f;BQ();b=AFr.data;c=b.length;d=0;while(d<c){e=b[d];e.eL(1);f=IZ(e);f.fq();d=d+1|0;}}
function QK(a,b){M(a);a.d0=b;}
function Xc(a){var b,c,d;b=new XMLHttpRequest();c=CT(ABo(a,b),"stateChanged");b.onreadystatechange=c;d=J().a(B(248)).a(a.d0.dj()).e();b.open("GET",$rt_ustr(d));b.send();}
function Kg(a,b){a.d0.lU(b);E3().o(J().a(B(249)).a(a.d0.dj()).e());Wh();}
function Wh(){var b,c,d,e,f,g,h,i,j;b=0;c=0;BQ();d=AFp.data;e=d.length;f=0;while(f<e){g=d[f];if(g.e2())c=c+1|0;if(g.bH()!==null)b=b+1|0;f=f+1|0;}d=AFq.data;f=d.length;h=0;while(h<f){i=d[h];if(i.e2())c=c+1|0;if(i.bH()!==null)b=b+1|0;h=h+1|0;}d=AFr.data;e=d.length;f=0;while(f<e){j=d[f];if(j.e2())c=c+1|0;if(j.bH()!==null)b=b+1|0;f=f+1|0;}if(!c)c=1;if(b>=c){BJ(null);LT(1);}else BJ(J().a(B(250)).m((100*b|0)/c|0).a(B(251)).e());}
function Q0(b,c){Kg(b,c);}
function IX(){C.call(this);}
function Oh(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function PE(b,c){return b!==null&&!(typeof b.constructor.$meta==='undefined'?1:0)&&HY(b.constructor,c)?1:0;}
function HY(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(HY(d[e],c))return 1;e=e+1|0;}return 0;}
function PN(b){var c='$$enumConstants$$';B4[c]=RM;B5[c]=Yg;PN=function(cls){if(!cls.hasOwnProperty(c)){return null;}if(typeof cls[c]==="function"){cls[c]=cls[c]();}return cls[c];};return PN(b);}
function J0(b){return Wb(String.fromCharCode(b));}
function U5(b){return b.$meta.primitive?1:0;}
function SE(b){return b.$meta.enum?1:0;}
function Y6(b){return b.$meta.item;}
function UU(b){return $rt_str(b.$meta.name);}
function Du(){var a=this;C.call(a);a.jn=null;a.lb=null;}
function AFs(a,b){var c=new Du();Jg(c,a,b);return c;}
function Jg(a,b,c){var d,e,f,g;d=c.data;M(a);Fn(b);e=d.length;f=0;while(f<e){g=d[f];Fn(g);f=f+1|0;}a.jn=b;a.lb=c.dI();}
function Fn(b){var c,d;if(b.E())G(KO(b));if(!JG(b.d(0)))G(KO(b));c=1;while(c<b.g()){a:{d=b.d(c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(JG(d))break a;else G(KO(b));}}c=c+1|0;}}
function JG(b){return !(b>=48&&b<=57)&&!(b>=97&&b<=122)&&b<65&&b>90?0:1;}
function OD(b){var c;if(b===null)G(Bz(B(252)));Fn(b);c=Gq().gr(b.c6());if(c!==null)return c;G(ADm(b));}
function G1(a,b){var c,d,e,$$je;a:{try{c=a.kg();B8();d=AET;d=K$(c,d);c=AET;d=HS(d,c);d=I9(d,b);}catch($$e){$$je=Bb($$e);if($$je instanceof Cl){e=$$je;break a;}else{throw $$e;}}return d;}G(ACP(B(253),e));}
function C8(){C.call(this);this.k9=null;}
var AFm=null;var AET=null;var AER=null;function B8(){B8=Be(C8);N4();}
function LO(a){var b=new C8();Jt(b,a);return b;}
function Jt(a,b){B8();M(a);a.k9=b;}
function N4(){AFm=LO(B(254));AET=LO(B(255));AER=LO(B(256));}
function Kz(){U.call(this);}
function ACT(){var a=new Kz();YB(a);return a;}
function YB(a){BB(a);}
function BR(){U.call(this);}
function Cv(){var a=new BR();C3(a);return a;}
function Bz(a){var b=new BR();M7(b,a);return b;}
function C3(a){BB(a);}
function M7(a,b){Df(a,b);}
function JS(){BR.call(this);this.j3=null;}
function KO(a){var b=new JS();V5(b,a);return b;}
function V5(a,b){C3(a);a.j3=b;}
function HD(){R.call(this);this.gu=null;}
function AC4(a){var b=new HD();So(b,a);return b;}
function So(a,b){Bo(a);a.gu=b;}
function Sx(a,b,c,d){var e,f;a:{if(b!=d.q()){if(!b)break a;if(d.cT()&&b==d.bw())break a;e=a.gu;f=b-1|0;if(e.hh(c.d(f),c.d(b)))break a;}return (-1);}return a.f.b(b,c,d);}
function WB(a,b){return 0;}
function Ge(){}
function Kp(){C.call(this);}
function Dx(){BW.call(this);this.gq=null;}
function AFt(a){var b=new Dx();Hc(b,a);return b;}
function Hc(a,b){CS(a);a.gq=b;}
function K1(){var a=this;Dx.call(a);a.kf=0;a.ge=0;a.bR=null;a.dm=null;a.hy=null;}
function Ph(a,b){var c=new K1();Li(c,a,b);return c;}
function ADF(a){var b=new K1();Rt(b,a);return b;}
function Li(a,b,c){Hc(a,b);a.bR=J();a.dm=$rt_createCharArray(32);a.kf=c;a.hy=X5();}
function Rt(a,b){Li(a,b,0);}
function PP(a,b,c,d){var $$je;if(!Kb(a))return;a:{try{a.gq.dg(b,c,d);break a;}catch($$e){$$je=Bb($$e);if($$je instanceof BZ){}else{throw $$e;}}a.ge=1;}}
function Kb(a){if(a.gq===null)a.ge=1;return a.ge?0:1;}
function EX(a,b,c,d){var e,f,g,h,i,j,k,l;e=b.data;f=MH(b,c,d-c|0);g=$rt_createByteArray(Bq(16,V(e.length,1024)));h=UI(g);i=a.hy.k1();B8();j=AET;i=Go(i,j);j=AET;k=LV(i,j);while(true){l=Ic(k,f,h,1).db();a.dg(g,0,BG(h));EW(h);if(!l)break;}while(true){l=G4(k,h).db();a.dg(g,0,BG(h));EW(h);if(!l)break;}}
function Us(a,b){a.dm.data[0]=b;EX(a,a.dm,0,1);}
function YR(a,b){a.bR.a(b);Dz(a);}
function Sv(a,b){a.bR.a(b).bn(10);Dz(a);}
function ZC(a,b){a.bR.ie(b).bn(10);Dz(a);}
function S2(a){a.kl(10);}
function Dz(a){var b;b=a.bR.g()<=a.dm.data.length?a.dm:$rt_createCharArray(a.bR.g());a.bR.g7(0,a.bR.g(),b,0);EX(a,b,0,a.bR.g());a.bR.dS(0);}
function FK(){}
function HR(){BV.call(this);}
function AC3(a,b){var c=new HR();OY(c,a,b);return c;}
function OY(a,b,c){Dh(a,b,c);}
function N7(a,b,c,d){var e,f,g,h;e=a.O.X();d.C(a.A,b);f=0;while(true){if(f>=e)return a.f.b(b,c,d);g=a.O.H(f);h=g.bg(0,b,c,d);if(h>=0)break;f=f+1|0;}return (-1);}
function TI(a,b){return 0;}
function K0(){CE.call(this);}
function ABp(a,b){var c=new K0();Xt(c,a,b);return c;}
function Xt(a,b,c){Fc(a,b,c);}
function S8(a,b,c,d){var e,f;e=a.c5(d);if(e!==null&&(b+e.g()|0)<=d.q()){f=!c.e().it(e,b)?(-1):e.g();if(f<0)return (-1);d.C(a.c1,f);return a.f.b(b+f|0,c,d);}return (-1);}
function W2(a,b,c,d){var e,f,g,h;e=a.c5(d);f=d.bw();if(e!==null&&(b+e.g()|0)<=f){g=c.e();while(true){if(b>f)return (-1);h=g.gQ(e,b);if(h<0)return (-1);if(a.f.b(h+e.g()|0,c,d)>=0)break;b=h+1|0;}return h;}return (-1);}
function Pa(a,b,c,d,e){var f,g,h;f=a.c5(e);if(f===null)return (-1);g=d.e();a:{while(true){if(c<b)return (-1);h=g.lL(f,c);if(h<0)break a;if(h<b)break a;if(a.f.b(h+f.g()|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function Ox(a,b){return 1;}
function I6(){L.call(this);}
function ADS(){var a=new I6();W6(a);return a;}
function W6(a){Q(a);}
function T9(a){return By().J(97,122);}
function Iz(){BO.call(this);this.fO=null;}
function ABV(a,b,c,d){var e=new Iz();RT(e,a,b,c,d);return e;}
function RT(a,b,c,d,e){C0(a,b,c,d);a.fO=e;}
function Q9(a,b,c,d){var e,f;e=d.q();f=Fh(a,b,e,c);if(f>=0)e=f;if(e>b)return a.f.bg(b,e,c,d);return a.f.b(b,c,d);}
function NX(a,b,c,d){var e,f,g,h,i;e=d.q();f=a.f.bi(b,c,d);if(f<0)return (-1);g=Fh(a,f,e,c);if(g>=0)e=g;h=a.f.bg(f,e,c,d);if(f<h)f=h;i=f>0?K8(a,b,f-1|0,c):f?(-1):0;if(i>=b)b=i>=f?i:i+1|0;return b;}
function Fh(a,b,c,d){while(true){if(b>=c)return (-1);if(a.fO.di(d.d(b)))break;b=b+1|0;}return b;}
function K8(a,b,c,d){while(true){if(c<b)return (-1);if(a.fO.di(d.d(c)))break;c=c+(-1)|0;}return c;}
function JN(){L.call(this);}
function ADx(){var a=new JN();X6(a);return a;}
function X6(a){Q(a);}
function Z$(a){var b;b=ABD(a);b.y=1;return b;}
function KC(){C.call(this);}
function DS(){C.call(this);}
var AFu=null;var AFv=null;function ME(){ME=Be(DS);Vs();}
function Hf(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;ME();d=$rt_floatToIntBits(b);c.hc=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.fZ=0;c.fw=0;return;}g=0;if(f)h=e|8388608;else{h=e<<1;while(Long_eq(Long_and(Long_fromInt(h),Long_fromInt(8388608)),Long_ZERO)){h=h<<1;f=f+(-1)|0;g=g+1|0;}}i=Py(AFv,f);if(i<0)i= -i-2|0;j=f-AFv.data[i]|0;k=9+j|0;l=Long_fromInt(h);m=Long_shru(Long_mul(l,Long_fromInt(AFu.data[i])),32-k|0).lo;if(m>=1000000000){i=i+1|0;n=f-AFv.data[i]|0;k=9+n|0;m=Long_shru(Long_mul(l,Long_fromInt(AFu.data[i])),
32-k|0).lo;}n=(31-k|0)-g|0;o=n>=0?AFu.data[i]>>>n:AFu.data[i]<< -n;p=(o+1|0)>>1;q=o>>1;if(h==4194304)q=q>>2;r=Hr(m,q);s=KH(m,p);h=BY(r,s);h=h>0?Ce(m/r|0,r):h<0?Ce(m/s|0,s)+s|0:Ce((m+(s/2|0)|0)/s|0,s);if(h>=1000000000){i=i+1|0;h=h/10|0;}else if(h<100000000){i=i+(-1)|0;h=h*10|0;}c.fZ=h;c.fw=i-50|0;}
function Hr(b,c){var d,e;ME();d=10;while(d<=c){d=d*10|0;}e=b%d|0;if(e>=(c/2|0))d=d/10|0;return d;}
function KH(b,c){var d,e;ME();d=10;while(d<=c){d=d*10|0;}e=b%d|0;if((d-e|0)>(c/2|0))d=d/10|0;return d;}
function Vs(){var b,c,d,e,f,g,h,i,j,k,l;AFu=$rt_createIntArray(100);AFv=$rt_createIntArray(100);b=2000000000;c=127;d=0;e=b;while(d<50){f=AFu.data;g=d+50|0;f[g]=$rt_udiv(e,20);AFv.data[g]=c;g=$rt_udiv(e,10);h=$rt_umod(g,10);while(g<=b&&!(g&(-2147483648))){g=g<<1;c=c+1|0;h=h<<1;}e=g+(h/10|0)|0;d=d+1|0;}i=214748364;e=127;d=0;while(d<50){j=0;k=b;while(k>i){k=k>>1;j=j+1|0;e=e+(-1)|0;}k=k*10|0;if(j<=0)b=k;else{l=Long_fromInt(b&((1<<j)-1|0));b=Long_add(Long_fromInt(k),Long_shr(Long_mul(l,Long_fromInt(10)),j)).lo;}f
=AFu.data;k=(50-d|0)-1|0;f[k]=$rt_udiv(b,20);AFv.data[k]=e;d=d+1|0;}}
function LA(){L.call(this);}
function ADr(){var a=new LA();Sg(a);return a;}
function Sg(a){Q(a);}
function Sa(a){return ADO(a);}
function DI(){C.call(this);}
function AFw(){var a=new DI();J6(a);return a;}
function J6(a){M(a);}
function Iv(){R.call(this);}
function ACz(){var a=new Iv();Vr(a);return a;}
function Vr(a){Bo(a);}
function Za(a,b,c,d){if(b!=d.lF())return (-1);return a.f.b(b,c,d);}
function AAv(a,b){return 0;}
function KV(){Bx.call(this);}
function AB$(a){var b=new KV();YS(b,a);return b;}
function YS(a,b){Cq(a,b.eg(),b.kk(),b.cO());a.w.s(a);}
function ZQ(a,b,c,d){var e;while((b+a.B.bb()|0)<=d.q()){e=a.B;if(e.I(b,c)<=0)break;b=b+a.B.bb()|0;}return a.f.b(b,c,d);}
function Pk(a,b,c,d){var e,f,g;e=a.f.bi(b,c,d);if(e<0)return (-1);f=e-a.B.bb()|0;while(f>=b&&a.B.I(f,c)>0){g=f-a.B.bb()|0;e=f;f=g;}return e;}
function EH(){}
function KW(){var a=this;C.call(a);a.fB=null;a.bW=null;}
function AB8(a){var b=new KW();Vu(b,a);return b;}
function Vu(a,b){var c;M(a);a.bW=b;c=a;b.classObject=c;}
function HU(b){var c;if(b===null)return null;c=b.classObject;if(c===null)c=AB8(b);return c;}
function QX(a){return a.bW;}
function Ur(a,b){return PE(b,a.bW);}
function Z3(a){if(a.fB===null)a.fB=UU(a.bW);return a.fB;}
function W7(a){return U5(a.bW);}
function Rh(a){return SE(a.bW);}
function N2(a){return HU(Y6(a.bW));}
function SB(a){if(!a.kO())return null;a.bW.$clinit();return PN(a.bW).dI();}
function LB(){var a=this;C.call(a);a.p=null;a.z=0;}
function AAP(){var a=new LB();Sb(a);return a;}
function ACb(a){var b=new LB();OG(b,a);return b;}
function Sb(a){M(a);a.p=$rt_createIntArray(0);}
function OG(a,b){M(a);a.p=$rt_createIntArray(((b+32|0)-1|0)/32|0);}
function Ss(a,b){var c,d;c=b/32|0;if(b>=a.z){C2(a,c+1|0);a.z=b+1|0;}d=a.p.data;d[c]=d[c]|1<<(b%32|0);}
function XT(a,b,c){var d,e,f,g;if(b>c)G(Cp());d=b/32|0;e=c/32|0;if(c>a.z){C2(a,e+1|0);a.z=c;}if(d==e){f=a.p.data;f[d]=f[d]|C9(a,b)&CV(a,c);}else{f=a.p.data;f[d]=f[d]|C9(a,b);g=d+1|0;while(g<e){a.p.data[g]=(-1);g=g+1|0;}f=a.p.data;f[e]=f[e]|CV(a,c);}}
function C9(a,b){var c;c=b%32|0;return (-1)<<c;}
function CV(a,b){var c;c=b%32|0;return !c?0:(-1)>>>(32-c|0);}
function AAN(a,b){var c,d;c=b/32|0;if(c<a.p.data.length){d=a.p.data;d[c]=d[c]&KJ((-2),b%32|0);if(b==(a.z-1|0))CI(a);}}
function O5(a,b,c){var d,e,f,g,h;if(b>c)G(Cp());if(b>=a.z)return;d=V(a.z,c);e=b/32|0;f=d/32|0;if(e==f){g=a.p.data;g[e]=g[e]&(CV(a,b)|C9(a,d));}else{g=a.p.data;g[e]=g[e]&CV(a,b);h=e+1|0;while(h<f){a.p.data[h]=0;h=h+1|0;}g=a.p.data;g[f]=g[f]&C9(a,d);}CI(a);}
function Pc(a,b){var c;c=b/32|0;return c<a.p.data.length&&a.p.data[c]&1<<(b%32|0)?1:0;}
function ZL(a,b){var c,d,e,f,g;if(b>=a.z)return (-1);c=b/32|0;d=a.p.data[c];e=d>>>(b%32|0);if(e)return CZ(e)+b|0;f=(a.z+31|0)/32|0;g=c+1|0;while(g<f){if(a.p.data[g])return (g*32|0)+CZ(a.p.data[g])|0;g=g+1|0;}return (-1);}
function RQ(a,b){var c,d,e,f,g;if(b>=a.z)return b;c=b/32|0;d=a.p.data[c]^(-1);e=d>>>(b%32|0);if(e)return CZ(e)+b|0;f=(a.z+31|0)/32|0;g=c+1|0;while(g<f){if(a.p.data[g]!=(-1))return (g*32|0)+CZ(a.p.data[g]^(-1))|0;g=g+1|0;}return a.z;}
function C2(a,b){var c;if(a.p.data.length>=b)return;c=Bq((b*3|0)/2|0,(a.p.data.length*2|0)+1|0);a.p=Zw(a.p,c);}
function CI(a){var b,c,d;b=(a.z+31|0)/32|0;a.z=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=EP(a.p.data[c]);if(d<32)break;c=c+(-1)|0;a.z=a.z-32|0;}a.z=a.z-d|0;}}
function QW(a,b){var c,d;c=V(a.p.data.length,b.p.data.length);d=0;while(d<c){if(a.p.data[d]&b.p.data[d])return 1;d=d+1|0;}return 0;}
function Yf(a,b){var c,d,e;c=V(a.p.data.length,b.p.data.length);d=0;while(d<c){e=a.p.data;e[d]=e[d]&b.p.data[d];d=d+1|0;}while(c<a.p.data.length){a.p.data[c]=0;c=c+1|0;}a.z=V(a.z,b.z);CI(a);}
function Z5(a,b){var c,d,e;c=V(a.p.data.length,b.p.data.length);d=0;while(d<c){e=a.p.data;e[d]=e[d]&(b.p.data[d]^(-1));d=d+1|0;}CI(a);}
function X2(a,b){var c,d,e;a.z=Bq(a.z,b.z);C2(a,(a.z+31|0)/32|0);c=V(a.p.data.length,b.z);d=0;while(d<c){e=a.p.data;e[d]=e[d]|b.p.data[d];d=d+1|0;}}
function AAe(a,b){var c,d,e;a.z=Bq(a.z,b.z);C2(a,(a.z+31|0)/32|0);c=V(a.p.data.length,b.z);d=0;while(d<c){e=a.p.data;e[d]=e[d]^b.p.data[d];d=d+1|0;}CI(a);}
function Yn(a){return a.z?0:1;}
function F7(){}
function GR(){I.call(this);this.j5=null;}
function ACt(a){var b=new GR();AAt(b,a);return b;}
function AAt(a,b){a.j5=b;P(a);}
function T8(a,b){return Ml(b);}
function Gb(){Bt.call(this);}
function AFx(a){var b=new Gb();Hb(b,a);return b;}
function Hb(a,b){Ck(a,b);}
function O8(a,b,c,d){var e;e=a.c$();d.C(e,b-d.bF(e)|0);return a.f.b(b,c,d);}
function Ua(a,b){return 0;}
function Bf(){C.call(this);}
var AFy=null;var AFz=null;var AFA=null;var AFB=null;var AFC=null;var AFD=null;var AFE=null;var AFF=null;var AFG=null;var AFH=null;var AFI=null;var AFJ=null;var AFK=null;var AFL=null;var AFM=null;var AFN=0;var AFO=null;var AFP=0;function Bh(){Bh=Be(Bf);WG();}
function PY(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$$je;Bh();c=AFA;d="v1.32";c.innerHTML=d;BJ(B(257));CF(null);e=B(258);f=$rt_str(AFy.location.href);if(f.fT(B(259))){g=f.fc(f.ch(63)+1|0);h=g.i5(B(260));i=h.data;j=i.length;k=0;while(k<j){a:{l=i[k];m=l.i5(B(261));n=m.data;if(B(262).bz(n[0]))e=n[1];else if(B(263).bz(n[0]))try{AFP=DN(n[1]);break a;}catch($$e){$$je=Bb($$e);if($$je instanceof Cs){}else{throw $$e;}}}k=k+1|0;}}E3().o(J().a(B(264)).a(e).e());AFO=Pq(e);if(AFO!==null)E3().o(J().a(B(264)).a(AFO.bY()).e());ZX();WI();o
=AFz.getElementById("layout-option-custom");AFB.options.remove(0);BQ();i=AFq.data;j=i.length;k=0;while(k<j){p=i[k];q=o.cloneNode(!!1);c=$rt_ustr(p.bY());q.text=c;c=!!p.dj().E();q.disabled=c;AFB.options.add(q);k=k+1|0;}AFB.options.add(o);c=AFB;r=AB6();c.addEventListener("change",CT(r,"handleEvent"));s=AFz.getElementById("config-option-custom");AFC.options.remove(0);i=AFr.data;j=i.length;k=0;while(k<j){t=i[k];u=s.cloneNode(!!1);c=$rt_ustr(t.bY());u.text=c;c=$rt_ustr(t.fv());u.title=c;AFC.options.add(u);k=k+1|
0;}AFC.options.add(s);c=AFC;r=ADQ();c.addEventListener("change",CT(r,"handleEvent"));c=AFH;r=AAZ();c.addEventListener("click",CT(r,"handleEvent"));c=AFJ;r=ADL();c.addEventListener("click",CT(r,"handleEvent"));}
function G5(b){var c,d,e,f;Bh();c=0;a:{while(true){if(c>=AFC.options.length)break a;if(b.bz($rt_str(AFC.options.item(c).text)))break;c=c+1|0;}d=AFC;e=c;d.selectedIndex=e;BQ();f=AFr.data[c];Dk(f.bH());}}
function Fs(){var b,c,d;Bh();b=VE($rt_str(AFB.value));M8(b,$rt_str(AFD.value));LL(b,$rt_str(AFE.value));c=NS(b,null);if(AFK.firstChild!==null)Mh(AFK);d=c.jg(AFz,0);if(d===null)AFK.setAttribute("style","display:none");else{AFK.appendChild(d);AFK.setAttribute("style","display:block");}}
function LT(b){var c,d,e,f;Bh();AFN=b;if(AFN){c=AFB;d=0;c.selectedIndex=d;BQ();e=AFq.data[AFB.selectedIndex];Gi(e.bH());c=AFC;d=2;c.selectedIndex=d;f=AFr.data[AFC.selectedIndex];Dk(f.bH());Fs();}}
function LE(){var b,c,d,e,f,g,h,i,j,k,l,m,$$je;Bh();b=VE($rt_str(AFB.value));M8(b,$rt_str(AFD.value));LL(b,$rt_str(AFE.value));c=b.l1();if(!c.E()){d=Te(B(265));e=c.S();while(e.U()){f=e.R();d.eM(f).e7(10);}BJ(d.e());return;}if(AFO!==null&&AFO.bH().g()){g=ON(b.dp(),AFO.bH());h=Pt(b.dp(),AFO.bH());i=ABl();j=i.j0(b,g,h);k=NS(b,j.ls());CF(k.jg(AFz,1));a:{try{l=AD3(AFP);m=l.lp(j);BJ(m);break a;}catch($$e){$$je=Bb($$e);if($$je instanceof BZ){}else{throw $$e;}}BJ(B(266));}return;}BJ(B(267));}
function Gi(b){var c,d;Bh();if(AFD.firstChild!==null){c=AFD;d=AFD.firstChild;c.removeChild(d);}d=AFD;c=AFz.createTextNode($rt_ustr(b));d.appendChild(c);c=AFD;d=$rt_ustr(b);c.value=d;}
function Dk(b){var c,d;Bh();if(AFE.firstChild!==null){c=AFE;d=AFE.firstChild;c.removeChild(d);}d=AFE;c=AFz.createTextNode($rt_ustr(b));d.appendChild(c);c=AFE;d=$rt_ustr(b);c.value=d;}
function CF(b){Bh();if(AFL.firstChild!==null)Mh(AFL);if(b===null)AFL.setAttribute("style","display:none");else{AFL.appendChild(b);AFL.setAttribute("style","display:block");}}
function BJ(b){var c,d;Bh();if(AFM.firstChild!==null){c=AFM;d=AFM.firstChild;c.removeChild(d);}if(b!==null){c=AFM;d=$rt_ustr(b);c.innerHTML=d;}else{c=AFO===null?B(268):J().a(B(269)).a(AFO.fv()).e();d=AFM;c=$rt_ustr(J().a(c).a(B(270)).e());d.innerHTML=c;}}
function Ew(){Bh();return AFB;}
function L9(b){Bh();G5(b);}
function Dm(){Bh();Fs();}
function Fq(){Bh();return AFC;}
function E1(){Bh();return AFD;}
function E2(){Bh();return AFF;}
function Er(){Bh();return AFE;}
function Gf(){Bh();return AFG;}
function Mb(){Bh();return AFI;}
function G_(){Bh();return AFN;}
function Ki(){Bh();LE();}
function WG(){AFy=window;AFz=Zy();AFA=AFz.getElementById("version-text");AFB=AFz.getElementById("layout-select");AFC=AFz.getElementById("config-select");AFD=AFz.getElementById("layout-input");AFE=AFz.getElementById("config-input");AFF=AFz.getElementById("modal-layout-input");AFG=AFz.getElementById("modal-config-input");AFH=AFz.getElementById("save-input-button");AFI=AFz.getElementById("close-input-button");AFJ=AFz.getElementById("analyze-button");AFK=AFz.getElementById("keyboard-panel-fingers");AFL=AFz.getElementById("keyboard-panel-heatmap");AFM
=AFz.getElementById("output-panel");AFN=0;AFP=5;}
function D6(){BP.call(this);}
var AFQ=0.0;var AFR=null;function AFS(){AFS=Be(D6);Ry();}
function Ry(){AFQ=NaN;AFR=D($rt_floatcls());}
function H8(){C.call(this);}
function EM(b,c){var d,e,f,g;d=b.data;e=$rt_createCharArray(c);f=V(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function FS(b,c){var d,e,f,g;d=b.data;e=$rt_createByteArray(c);f=V(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function Zw(b,c){var d,e,f,g;d=b.data;e=$rt_createIntArray(c);f=V(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function Ma(b,c){var d,e,f,g;d=b.data;e=I7(Cf(b).eC(),c);f=V(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function Vq(b,c,d,e){var f,g;if(c>d)G(Cv());while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function DE(b,c){Vq(b,0,b.data.length,c);}
function U2(b,c,d,e){var f,g;if(c>d)G(Cv());while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function Si(b,c){U2(b,0,b.data.length,c);}
function Py(b,c){return QZ(b,0,b.data.length,c);}
function QZ(b,c,d,e){var f,g,h,i;if(c>d)G(Cv());f=d-1|0;while(true){g=b.data;h=(c+f|0)/2|0;i=g[h];if(i==e)break;if(e>=i){c=h+1|0;if(c>f)return  -h-2|0;}else{f=h-1|0;if(f<c)return  -h-1|0;}}return h;}
function B2(){Z.call(this);this.cb=0;}
function JW(a){var b=new B2();R_(b,a);return b;}
function R_(a,b){BH(a);a.cb=b;}
function Zm(a){return 1;}
function Xw(a,b,c){return a.cb!=c.d(b)?(-1):1;}
function UV(a,b,c,d){var e,f,g,h;if(!(c instanceof Bk))return C7(a,b,c,d);e=c;f=d.q();while(true){if(b>=f)return (-1);g=e.cF(a.cb,b);if(g<0)return (-1);h=a.f;b=g+1|0;if(h.b(b,c,d)>=0)break;}return g;}
function Zz(a,b,c,d,e){var f,g;if(!(d instanceof Bk))return Db(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);g=f.es(a.cb,c);if(g<0)break a;if(g<b)break a;if(a.f.b(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function Rg(a){return a.cb;}
function Wq(a,b){if(b instanceof B2)return b.ck()!=a.cb?0:1;if(!(b instanceof B3)){if(b instanceof BK)return b.j(a.cb);if(!(b instanceof B1))return 1;return 0;}return b.I(0,FX(a.cb))<=0?0:1;}
function GD(){Z.call(this);this.iV=0;}
function ABF(a){var b=new GD();Vk(b,a);return b;}
function Vk(a,b){BH(a);a.Q=2;a.iV=Cn(Cm(b));}
function Uu(a,b,c){var d,e,f;d=b+1|0;e=c.d(b);f=c.d(d);return a.iV!=Cn(Cm(BU(e,f)))?(-1):2;}
function Mk(){BW.call(this);}
function ADf(){var a=new Mk();OH(a);return a;}
function OH(a){CS(a);}
function N_(a,b){$rt_putStdout(b);}
function DF(){C.call(this);}
var AFT=null;var AFU=null;function E3(){if(AFT===null)AFT=Ph(ADf(),0);return AFT;}
function Cz(){if(AFU===null)AFU=Ph(AC1(),0);return AFU;}
function Gt(b,c,d,e,f){var g,h,i,j,k,l,m,n;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=I1(b)){g=e+f|0;if(g<=I1(d)){a:{b:{if(b!==d){h=Cf(b).eC();i=Cf(d).eC();if(h!==null&&i!==null){if(h===i)break b;if(!h.eq()&&!i.eq()){j=b;k=0;g=c;while(k<f){l=j.data;m=g+1|0;n=l[g];if(!i.jU(n)){F_(b,c,d,e,k);G(Ka());}k=k+1|0;g=m;}F_(b,c,d,e,f);return;}if(!h.eq())break a;if(i.eq())break b;else break a;}G(Ka());}}F_(b,c,d,e,f);return;}G(Ka());}}G(Cp());}G(SU(B(271)));}
function F_(b,c,d,e,f){if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}} else {c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function IJ(){var a=this;I.call(a);a.eI=0;a.hF=null;a.f1=null;}
function AA1(a,b,c){var d=new IJ();Zj(d,a,b,c);return d;}
function Zj(a,b,c,d){a.f1=b;a.eI=c;a.hF=d;P(a);}
function Ut(a,b){return !(a.eI^a.f1.v.bP(b))&&!(a.eI^a.f1.bO^a.hF.j(b))?0:1;}
function IQ(){var a=this;I.call(a);a.jb=0;a.iZ=null;a.ix=null;a.lK=null;}
function AD8(a,b,c,d){var e=new IQ();V0(e,a,b,c,d);return e;}
function V0(a,b,c,d,e){a.lK=b;a.jb=c;a.iZ=d;a.ix=e;P(a);}
function Nj(a,b){return a.jb^(!a.iZ.j(b)&&!a.ix.j(b)?0:1)?0:1;}
function IL(){var a=this;I.call(a);a.i6=null;a.jr=null;}
function ACO(a,b){var c=new IL();NL(c,a,b);return c;}
function NL(a,b,c){a.jr=b;a.i6=c;P(a);}
function Tr(a,b){return a.i6.j(b);}
function IK(){var a=this;I.call(a);a.eV=0;a.h7=null;a.e$=null;}
function ACq(a,b,c){var d=new IK();N6(d,a,b,c);return d;}
function N6(a,b,c,d){a.e$=b;a.eV=c;a.h7=d;P(a);}
function NI(a,b){return !(a.eV^a.e$.v.bP(b))&&!(a.eV^a.e$.bO^a.h7.j(b))?1:0;}
function JE(){var a=this;L.call(a);a.iQ=0;a.jh=0;}
function H(a,b){var c=new JE();Yw(c,a,b);return c;}
function Yw(a,b,c){Q(a);a.iQ=b;a.jh=c;}
function AAT(a){var b;b=By().J(a.iQ,a.jh);return b;}
function IM(){var a=this;I.call(a);a.ik=null;a.lS=null;}
function ACK(a,b){var c=new IM();N0(c,a,b);return c;}
function N0(a,b,c){a.lS=b;a.ik=c;P(a);}
function W8(a,b){return a.ik.j(b);}
function Jw(){L.call(this);}
function ABI(){var a=new Jw();RA(a);return a;}
function RA(a){Q(a);}
function YN(a){return By().J(48,57).J(97,102).J(65,70);}
function IT(){var a=this;I.call(a);a.g1=null;a.g9=0;a.gR=null;}
function ABk(a,b,c){var d=new IT();TX(d,a,b,c);return d;}
function TX(a,b,c,d){a.gR=b;a.g1=c;a.g9=d;P(a);}
function Tc(a,b){return !a.g1.j(b)&&!(a.g9^a.gR.v.bP(b))?1:0;}
function IP(){var a=this;I.call(a);a.iJ=0;a.ia=null;a.h4=null;a.kq=null;}
function ADb(a,b,c,d){var e=new IP();OI(e,a,b,c,d);return e;}
function OI(a,b,c,d,e){a.kq=b;a.iJ=c;a.ia=d;a.h4=e;P(a);}
function Uv(a,b){return a.iJ^(!a.ia.j(b)&&!a.h4.j(b)?0:1);}
function IO(){var a=this;I.call(a);a.ii=null;a.kL=null;}
function ADn(a,b){var c=new IO();N3(c,a,b);return c;}
function N3(a,b,c){a.kL=b;a.ii=c;P(a);}
function NK(a,b){return a.ii.j(b)?0:1;}
function Jb(){W.call(this);this.gn=null;}
function ACf(a){var b=new Jb();SN(b,a);return b;}
function SN(a,b){BD(a);a.gn=b;}
function Qd(a,b,c,d){var e,f,g,h,i;e=d.q();f=b+1|0;if(f>e){d.by=1;return (-1);}g=c.d(b);if(Bm(g)){h=b+2|0;if(h<=e){i=c.d(f);if(CU(g,i))return a.gn.di(BU(g,i))?(-1):a.f.b(h,c,d);}}return a.gn.di(g)?(-1):a.f.b(f,c,d);}
function T3(a,b){a.f=b;}
function Nh(a){return (-2147483602);}
function Z1(a,b){return 1;}
function IR(){var a=this;I.call(a);a.gB=null;a.i3=0;a.hz=null;}
function ABT(a,b,c){var d=new IR();WU(d,a,b,c);return d;}
function WU(a,b,c,d){a.hz=b;a.gB=c;a.i3=d;P(a);}
function Xa(a,b){return !a.gB.j(b)&&!(a.i3^a.hz.v.bP(b))?0:1;}
function Gu(){var a=this;C.call(a);a.ky=null;a.h9=null;a.dB=null;a.V=null;a.eb=0;a.ed=0;}
function ACW(a,b){var c=new Gu();Nv(c,a,b);return c;}
function Et(a,b){var c,d;c=a.dB.g();if(b>=0&&b<=c){d=Jy(a,b);if(d>=0&&a.V.jz()){a.V.kM();return 1;}a.V.bC=(-1);return 0;}G(Bp(EL(b)));}
function Jy(a,b){var c;a.V.ku();a.V.d7(1);a.V.kF(b);c=a.h9.bi(b,a.dB,a.V);if(c==(-1))a.V.by=1;return c;}
function K6(a){var b,c;b=a.dB.g();if(!HK(a))b=a.ed;if(a.V.bC>=0&&a.V.ij()==1){a.V.bC=a.V.ec();if(a.V.ec()==a.V.hH()){c=a.V;c.bC=c.bC+1|0;}return a.V.bC<=b&&Et(a,a.V.bC)?1:0;}return Et(a,a.eb);}
function MZ(a,b){return a.V.e3(b);}
function Hn(a,b){return a.V.gg(b);}
function Mi(a){return MZ(a,0);}
function Kl(a){return Hn(a,0);}
function HK(a){return a.V.dd();}
function Nv(a,b,c){var d,e,f,g,h;M(a);a.eb=(-1);a.ed=(-1);a.ky=b;a.h9=b.eK;a.dB=c;a.eb=0;a.ed=a.dB.g();d=new Fm;e=a.eb;f=a.ed;g=Hd(b);h=K3(b);HC(d,c,e,f,g,h,Ih(b));a.V=d;}
function B0(){C.call(this);}
var AFV=null;var AFW=null;var AFX=null;var AFY=null;var AFZ=null;var AF0=null;function N(){N=Be(B0);PD();}
function FX(b){var c,d;N();c=new Bk;d=$rt_createCharArray(1);d.data[0]=b;Dt(c,d);return c;}
function G7(b){N();return b>0&&b<=65535?1:0;}
function D1(b){N();return b>=65536&&b<=1114111?1:0;}
function Bm(b){N();return (b&64512)!=55296?0:1;}
function Bu(b){N();return (b&64512)!=56320?0:1;}
function D5(b){N();return !Bm(b)&&!Bu(b)?0:1;}
function CU(b,c){N();return Bm(b)&&Bu(c)?1:0;}
function BU(b,c){N();return ((b&1023)<<10|c&1023)+65536|0;}
function Iy(b,c){N();return IS(b,c,b.data.length);}
function IS(b,c,d){var e,f;N();if(c<(d-1|0)){e=b.data;if(Bm(e[c])){f=c+1|0;if(Bu(e[f]))return BU(e[c],e[f]);}}return b.data[c];}
function CR(b){var c;N();c=b-65536|0;return (55296|c>>10&1023)&65535;}
function CG(b){N();return (56320|b&1023)&65535;}
function BI(b){N();return Cn(b)&65535;}
function Cn(b){N();return J0(b).toLowerCase().charCodeAt(0);}
function BA(b){N();return Cm(b)&65535;}
function Cm(b){N();return J0(b).toUpperCase().charCodeAt(0);}
function E$(b,c){N();return J_(b,c);}
function J_(b,c){var d;N();if(c>=2&&c<=36){d=Fi(b);if(d>=c)d=(-1);return d;}return (-1);}
function Ei(b){N();return Fi(b);}
function Fi(b){var c,d,e,f,g,h,i,j;N();c=GY();d=c.data;e=0;f=(d.length/2|0)-1|0;while(f>=e){g=(e+f|0)/2|0;h=g*2|0;i=d[h];j=BY(b,i);if(j>0)e=g+1|0;else{if(j>=0)return d[h+1|0];f=g-1|0;}}return (-1);}
function Eb(b,c){N();if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function MG(b){N();return Bn(b)!=9?0:1;}
function GY(){N();if(AFW===null)AFW=Tu((GM().value!==null?$rt_str(GM().value):null));return AFW;}
function GM(){N();if(AFZ===null)AFZ=LJ();return AFZ;}
function LM(){N();if(AFX===null)AFX=AAO((KD().value!==null?$rt_str(KD().value):null));return AFX;}
function KD(){N();if(AF0===null)AF0=MW();return AF0;}
function CK(b){var c,d;N();if(b<65536){c=$rt_createCharArray(1);c.data[0]=b&65535;return c;}c=$rt_createCharArray(2);d=c.data;d[0]=CR(b);d[1]=CG(b);return c;}
function Lg(b){var c;N();a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}c=1;break a;}c=0;}return c;}
function C_(b){N();return Bn(b);}
function Bn(b){var c,d,e,f,g,h;N();if(G7(b)&&D5(b&65535))return 19;c=LM();d=c.data;e=0;f=d.length-1|0;while(e<=f){g=(e+f|0)/2|0;h=d[g];if(b>=h.gG)e=g+1|0;else{if(b>=h.fS)return h.ih.data[b-h.fS|0];f=g-1|0;}}return 0;}
function It(b){N();return FR(b);}
function FR(b){N();return Bn(b)!=2?0:1;}
function Gx(b){N();return Bn(b)!=1?0:1;}
function Hi(b){N();return Bn(b)!=3?0:1;}
function MX(b){N();return !Bn(b)?0:1;}
function Lk(b){N();switch(Bn(b)){case 1:case 2:case 3:case 4:case 5:break;default:return 0;}return 1;}
function F4(b){N();return EO(b);}
function EO(b){N();a:{switch(Bn(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function Ml(b){N();a:{switch(Bn(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break a;default:break a;}return 1;}return CJ(b);}
function MK(b){N();a:{switch(Bn(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break a;default:break a;}return 1;}return CJ(b);}
function Ly(b){N();a:{switch(Bn(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break a;default:break a;}return 1;}return 0;}
function L1(b){N();a:{switch(Bn(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break a;default:break a;}return 1;}return CJ(b);}
function KG(b){N();a:{switch(Bn(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break a;default:break a;}return 1;}return CJ(b);}
function CJ(b){N();a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Bn(b)!=16?0:1;}
function Ft(b){N();switch(Bn(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function Ja(b){N();return F0(b);}
function F0(b){N();switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return Ft(b);}return 1;}
function PD(){AFV=D($rt_charcls());AFY=F(B0,128);}
function LJ(){return {"value":"oD#*% .%%2%)6%-:%1>%5B%9F%=J%AN%Eo%Is%Mw%Q{%U!\'Y&\'^*\'b.\'f2\'j6\'n:\'r>\'vB\'zF\'!#J\'&#N\'*#R\'.#V\'2#Z\'6#_\':#c\'>#g\'B#k\'F#o\'J#s\'N#w\'R#6)I:)M>)QB)UF)YJ)^N)bR)fV)jZ)n_)rc)vg)zk)!#o)&#s)*#w).#{)2#!+6#&+:#*+>#.+B#2+F#6+J#:+N#>+R#{R# !T#%&T#)*T#-.T#12T#56T#9:T#=>T#ABT#E6a# :a#%>a#)Ba#-Fa#1Ja#5Na#9Ra#=Va#AZa#E:s# >s#%Bs#)Fs#-Js#1Ns#5Rs#9Vs#=Zs#A_s#EZ:% _:%%c:%)g:%-k:%1o:%5s:%9w:%={:%A!<%E2F% 6F%%:F%)>F%-BF%1FF%5JF%9NF%=RF%AVF%EgP% kP%%oP%)sP%-wP%1{P%5!R%9&R%=*R%A.R%E>]% B]%%F]%)J]%-N]%1R]%5V]%9Z]%=_]%Ac]%Esg% wg%%{g%)!i%-&"
+"i%1*i%5.i%92i%=6i%A:i%EJs% Ns%%Rs%)Vs%-Zs%1_s%5cs%9gs%=ks%Aos%E!!\' &!\'%*!\').!\'-2!\'16!\'5:!\'9>!\'=B!\'AF!\'EV,\' Z,\'%_,\')c,\'-g,\'1k,\'5o,\'9s,\'=w,\'A{,\'E.8\' 28\'%68\'):8\'->8\'1B8\'5F8\'9J8\'=N8\'AR8\'EcB\' gB\'%kB\')oB\'-sB\'1wB\'5{B\'9!D\'=&D\'A*D\'E>L\' BL\'%FL\')JL\'-NL\'1RL\'5VL\'9ZL\'=_L\'AcL\'EsV\' wV\'%{V\')!X\'-&X\'1*X\'5.X\'92X\'=6X\'A:X\'EB_\' F_\'%J_\')N_\'-R_\'1V_\'5Z_\'9__\'=c_\'Ag_\'Esw\' ww\'%{w\')!y\'-&y\'1*y\'5.y\'92y\'=6y\'A:y\'EB!) F!)%J!))N!)-R!)1V!)5Z!)9_!)=c!)Ag!)Egi+ ki+%oi+)si+-wi+1{i+5!k+9&k+=*k+A.k+Eom+ sm+%wm+){m+-!o+1&o+5*o+9.o+=2o+A6o+E>,- B,-%F"
+",-)J,--N,-1R,-5V,-9Z,-=_,-Ac,-E>8- B8-%F8-)J8--N8-1R8-5V8-9Z8-=_8-Ac8-E{F- !H-%&H-)*H--.H-12H-56H-9:H-=>H-ABH-E_H- cH-%gH-)kH--oH-1sH-5wH-9{H-=!J-A&J-E!Z- &Z-%*Z-).Z--2Z-16Z-5:Z-9>Z-=BZ-AFZ-E2c- 6c-%:c-)>c--Bc-1Fc-5Jc-9Nc-=Rc-AVc-EJo- No-%Ro-)Vo--Zo-1_o-5co-9go-=ko-Aoo-E.q- 2q-%6q-):q-->q-1Bq-5Fq-9Jq-=Nq-ARq-E&4r *4r%.4r)24r-64r1:4r5>4r9B4r=F4rAJ4rE{or !qr%&qr)*qr-.qr12qr56qr9:qr=>qrABqrE&ur *ur%.ur)2ur-6ur1:ur5>ur9Bur=FurAJurE**t .*t%2*t)6*t-:*t1>*t5B*t9F*t=J*tAN*tEN,t R,t%V,t)Z,t-_,t1c,t5g,t9k,t=o,tAs,tE_"
+"4t c4t%g4t)k4t-o4t1s4t5w4t9{4t=!6tA&6tEgXt kXt%oXt)sXt-wXt1{Xt5!Zt9&Zt=*ZtA.ZtE{c@# !e@#%&e@#)*e@#-.e@#12e@#56e@#9:e@#=>e@#ABe@#Ece@#Ige@#Mke@#Qoe@#Use@#Ywe@#^{e@#b!g@#f&g@#j*g@#n.g@#r2g@#v6g@#z:g@#!#>g@#&#Bg@#*#Fg@#.#Jg@#2#Ng@#6#Rg@#:#Vg@#>#Zg@#B#_g@#F#cg@#J#gg@#N#kg@#R#*i@#I.i@#M2i@#Q6i@#U:i@#Y>i@#^Bi@#bFi@#fJi@#jNi@#nRi@#rVi@#vZi@#z_i@#!#ci@#&#gi@#*#ki@#.#oi@#2#si@#6#wi@#:#{i@#>#!k@#B#&k@#F#*k@#J#.k@#N#2k@#R#s&D# w&D#%{&D#)!(D#-&(D#1*(D#5.(D#92(D#=6(D#A:(D#E2.H# 6.H#%:.H#)>.H#-B.H#1F.H#5J.H#9N.H#=R.H#AV."
+"H#EwuH# {uH#%!wH#)&wH#-*wH#1.wH#52wH#96wH#=:wH#A>wH#Ew$J# {$J#%!&J#)&&J#-*&J#1.&J#52&J#96&J#=:&J#A>&J#E{*J# !,J#%&,J#)*,J#-.,J#12,J#56,J#9:,J#=>,J#AB,J#E_8J# c8J#%g8J#)k8J#-o8J#1s8J#5w8J#9{8J#=!:J#A&:J#E2RJ# 6RJ#%:RJ#)>RJ#-BRJ#1FRJ#5JRJ#9NRJ#=RRJ#AVRJ#ENqJ# RqJ#%VqJ#)ZqJ#-_qJ#1cqJ#5gqJ#9kqJ#=oqJ#AsqJ#E&}J# *}J#%.}J#)2}J#-6}J#1:}J#5>}J#9B}J#=F}J#AJ}J#Eg@L# k@L#%o@L#)s@L#-w@L#1{@L#5!BL#9&BL#=*BL#A.BL#EZJL# _JL#%cJL#)gJL#-kJL#1oJL#5sJL#9wJL#={JL#A!LL#ENTL# RTL#%VTL#)ZTL#-_TL#1cTL#5gTL#9kTL#=oTL#AsTL#E:{L# >{L#"
+"%B{L#)F{L#-J{L#1N{L#5R{L#9V{L#=Z{L#A_{L#ERkN# VkN#%ZkN#)_kN#-ckN#1gkN#5kkN#9okN#=skN#AwkN#E_$P# c$P#%g$P#)k$P#-o$P#1s$P#5w$P#9{$P#=!&P#A&&P#E.,P# 2,P#%6,P#):,P#->,P#1B,P#5F,P#9J,P#=N,P#AR,P#EFau# Jau#%Nau#)Rau#-Vau#1Zau#5_au#9cau#=gau#Akau#Eouu# suu#%wuu#){uu#-!wu#1&wu#5*wu#9.wu#=2wu#A6wu#EF0N% J0N%%N0N%)R0N%-V0N%1Z0N%5_0N%9c0N%=g0N%Ak0N%Eo0N% s0N%%w0N%){0N%-!2N%1&2N%5*2N%9.2N%=22N%A62N%E:2N% >2N%%B2N%)F2N%-J2N%1N2N%5R2N%9V2N%=Z2N%A_2N%Ec2N% g2N%%k2N%)o2N%-s2N%1w2N%5{2N%9!4N%=&4N%A*4N%E.4N% 24N%%64N%):4N%->"
+"4N%1B4N%5F4N%9J4N%=N4N%AR4N%ERJR% VJR%%ZJR%)_JR%-cJR%1gJR%5kJR%9oJR%=sJR%AwJR%E>qR% BqR%%FqR%)JqR%-NqR%1RqR%5VqR%9ZqR%=_qR%AcqR%E:FV% >FV%%BFV%)FFV%-JFV%1NFV%5RFV%9VFV%=ZFV%A_FV%E"};}
function MW(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
function K_(){W.call(this);}
function ADz(){var a=new K_();P$(a);return a;}
function P$(a){BD(a);}
function Zx(a,b,c,d){var e,f,g,h,i;e=d.q();f=b+1|0;if(f>e){d.by=1;return (-1);}g=c.d(b);if(Bm(g)){h=b+2|0;if(h<=e){i=c.d(f);if(CU(g,i))return a.f.b(h,c,d);}}return a.f.b(f,c,d);}
function RF(a,b){a.f=b;}
function PV(a){return (-2147483602);}
function RC(a,b){return 1;}
function GQ(){var a=this;Z.call(a);a.iB=0;a.g8=0;}
function Sh(a){var b=new GQ();Tz(b,a);return b;}
function Tz(a,b){BH(a);a.iB=b;a.g8=C6(b);}
function Oq(a,b,c){return a.iB!=c.d(b)&&a.g8!=c.d(b)?(-1):1;}
function B1(){var a=this;Z.call(a);a.eu=0;a.d$=0;a.dY=0;}
function ABN(a){var b=new B1();ZZ(b,a);return b;}
function ZZ(a,b){var c,d;BH(a);a.Q=2;a.dY=b;c=CK(b);d=c.data;a.eu=d[0];a.d$=d[1];}
function Tj(a,b,c){var d,e,f;d=b+1|0;e=c.d(b);f=c.d(d);return a.eu==e&&a.d$==f?2:(-1);}
function Px(a,b,c,d){var e,f,g,h;if(!(c instanceof Bk))return C7(a,b,c,d);e=c;f=d.q();while(b<f){g=e.cF(a.eu,b);if(g<0)return (-1);b=g+1|0;if(b>=f)continue;h=e.d(b);if(a.d$==h&&a.f.b(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function R8(a,b,c,d,e){var f,g,h;if(!(d instanceof Bk))return Db(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);g=f.es(a.d$,c);h=g+(-1)|0;if(h<0)break a;if(h<b)break a;if(a.eu==f.d(h)&&a.f.b(h+2|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function Oa(a){return a.dY;}
function SY(a,b){if(b instanceof B1)return b.go()!=a.dY?0:1;if(b instanceof BK)return b.j(a.dY);if(b instanceof B2)return 0;if(!(b instanceof B3))return 1;return 0;}
function Ha(){I.call(this);this.lV=null;}
function ACa(a){var b=new Ha();UT(b,a);return b;}
function UT(a,b){a.lV=b;P(a);}
function XC(a,b){return FR(b);}
function Mv(){var a=this;L.call(a);a.fD=0;a.e0=0;a.gZ=0;}
function Dc(a,b){var c=new Mv();UH(c,a,b);return c;}
function ADC(a,b,c){var d=new Mv();NA(d,a,b,c);return d;}
function UH(a,b,c){Q(a);a.e0=c;a.fD=b;}
function NA(a,b,c,d){Q(a);a.gZ=d;a.e0=c;a.fD=b;}
function Nz(a){var b;b=ABA(a.fD);if(a.gZ)b.K.d8(0,2048);b.y=a.e0;return b;}
function BK(){var a=this;W.call(a);a.b0=null;a.lX=0;}
function ZG(a){var b=new BK();Ix(b,a);return b;}
function Ix(a,b){BD(a);a.b0=b.c7();a.lX=b.G;}
function U3(a,b,c,d){var e,f,g,h,i;e=d.q();if(b<e){f=b+1|0;g=c.d(b);if(a.j(g)){h=a.f.b(f,c,d);if(h>0)return h;}if(f<e){h=f+1|0;i=c.d(f);if(CU(g,i)&&a.j(BU(g,i)))return a.f.b(h,c,d);}}return (-1);}
function V9(a,b){return a.b0.j(b);}
function P7(a,b){if(b instanceof B1)return DW(a.b0,b.go());if(b instanceof B2)return DW(a.b0,b.ck());if(b instanceof BK)return CW(a.b0,b.b0);if(!(b instanceof B3))return 1;return CW(a.b0,b.fh());}
function Zs(a){return a.b0;}
function Vl(a,b){a.f=b;}
function Vn(a,b){return 1;}
function G0(){BK.call(this);}
function Pv(a){var b=new G0();TN(b,a);return b;}
function TN(a,b){Ix(a,b);}
function Y8(a,b){return a.b0.j(Cn(Cm(b)));}
function Nf(){L.call(this);}
function AA5(){var a=new Nf();S4(a);return a;}
function S4(a){Q(a);}
function NU(a){var b;b=ABt(a);b.y=1;return b;}
function B_(){C.call(this);}
var AF1=null;var AF2=null;function AF3(){var a=new B_();Fl(a);return a;}
function Fl(a){M(a);}
function Fp(b){if(!(b&1)){if(AF2!==null)return AF2;AF2=ACZ();return AF2;}if(AF1!==null)return AF1;AF1=AB4();return AF1;}
function E7(){var a=this;W.call(a);a.b5=null;a.fx=null;a.dl=0;}
function WN(a,b){var c=new E7();OL(c,a,b);return c;}
function OL(a,b,c){BD(a);a.b5=b;a.dl=c;}
function NM(a,b){a.f=b;}
function FL(a){if(a.fx===null)a.fx=GE(a.b5);return a.fx;}
function NN(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;e=d.q();f=0;g=$rt_createIntArray(3);h=(-1);i=(-1);if(b>=e)return (-1);j=b+1|0;k=c.d(b);l=TP(k);if(l!==null){m=l.data;n=0;if(m.length!=a.dl)return (-1);while(true){if(n>=a.dl)return a.f.b(j,c,d);if(m[n]!=a.b5.data[n])break;n=n+1|0;}return (-1);}o=g.data;o[f]=k;p=k-4352|0;if(p>=0&&p<19){if(j<e){k=c.d(j);h=k-4449|0;}if(h>=0&&h<21){q=j+1|0;o[1]=k;if(q<e){k=c.d(q);i=k-4519|0;}if(i>=0&&i<28){r=q+1|0;o[2]=k;if(a.dl==3&&o[0]==a.b5.data[0]&&o[1]==a.b5.data[1]&&o[2]
==a.b5.data[2]){s=a.f;r=s.b(r,c,d);}else r=(-1);return r;}if(a.dl==2&&o[0]==a.b5.data[0]&&o[1]==a.b5.data[1]){s=a.f;r=s.b(q,c,d);}else r=(-1);return r;}return (-1);}return (-1);}
function RD(a,b){var c,d;a:{if(b instanceof E7){c=b;if(!FL(c).bz(FL(a))){d=0;break a;}}d=1;}return d;}
function WJ(a,b){return 1;}
function Ds(){CD.call(this);}
function AF4(a,b,c){var d=new Ds();GG(d,a,b,c);return d;}
function GG(a,b,c,d){FA(a,b);a.L=c;a.bM=d;}
function My(b){if(b>=0)return ABz(b);G(Bz(J().a(B(272)).m(b).e()));}
function MH(b,c,d){return AB3(0,b.data.length,b,c,c+d|0,0);}
function O4(b){return MH(b,0,b.data.length);}
function PO(a,b,c,d){var e,f,g,h,i;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Bp(J().a(B(273)).m(g).a(B(241)).m(f).e()));if(X(a)<d)G(Yr());if(d<0)G(Bp(J().a(B(242)).m(d).a(B(243)).e()));h=a.L;i=0;while(i<d){g=c+1|0;f=h+1|0;e[c]=a.lw(h);i=i+1|0;c=g;h=f;}a.L=a.L+d|0;return a;}}e=b.data;G(Bp(J().a(B(244)).m(c).a(B(23)).m(e.length).a(B(245)).e()));}
function SG(a,b){return a.iG(b,0,b.data.length);}
function AAu(a,b,c,d){var e,f,g,h,i;if(a.dN())G(Gy());if(X(a)<d)G(I8());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Bp(J().a(B(274)).m(g).a(B(241)).m(f).e()));if(d<0)G(Bp(J().a(B(242)).m(d).a(B(243)).e()));h=a.L;i=0;while(i<d){g=h+1|0;f=c+1|0;a.hi(h,e[c]);i=i+1|0;h=g;c=f;}a.L=a.L+d|0;return a;}}e=b.data;G(Bp(J().a(B(244)).m(c).a(B(23)).m(e.length).a(B(245)).e()));}
function QI(a,b,c,d){var e,f,g,h,i,j;if(a.dN())G(Gy());e=d-c|0;if(X(a)<e)G(I8());if(c>=0&&c<b.g()){if(d>b.g()){f=new C5;g=J().a(B(274)).m(d).a(B(275));L2(f,g.m(b.g()).e());G(f);}if(c>d)G(Bp(J().a(B(276)).m(c).a(B(277)).m(d).e()));h=a.L;while(c<d){i=h+1|0;j=c+1|0;a.hi(h,b.d(c));h=i;c=j;}a.L=a.L+e|0;return a;}G(Bp(J().a(B(276)).m(c).a(B(23)).m(b.g()).a(B(245)).e()));}
function DT(a,b){return a.lq(b,0,b.g());}
function IU(a){return a.jG();}
function E9(a){return a.lI();}
function G$(a){MJ(a);return a;}
function Np(a,b){FI(a,b);return a;}
function DR(){Ds.call(this);}
function AF5(a,b,c){var d=new DR();Ju(d,a,b,c);return d;}
function Ju(a,b,c,d){GG(a,b,c,d);}
function ZI(a){return a.kX();}
function L0(){var a=this;DR.call(a);a.iW=0;a.fP=0;a.ey=null;}
function ABz(a){var b=new L0();Ru(b,a);return b;}
function AB3(a,b,c,d,e,f){var g=new L0();M1(g,a,b,c,d,e,f);return g;}
function Ru(a,b){M1(a,0,b,$rt_createCharArray(b),0,b,0);}
function M1(a,b,c,d,e,f,g){Ju(a,c,e,f);a.fP=b;a.iW=g;a.ey=d;}
function Qm(a,b){return a.ey.data[b+a.fP|0];}
function Nm(a,b,c){a.ey.data[b+a.fP|0]=c;}
function Qc(a){return 1;}
function Wm(a){return a.ey;}
function Zb(a){return a.iW;}
function M3(){L.call(this);}
function ADM(){var a=new M3();OZ(a);return a;}
function OZ(a){Q(a);}
function XK(a){return By().J(33,64).J(91,96).J(123,126);}
function EQ(){var a=this;C.call(a);a.ci=null;a.eG=null;}
var AF6=null;function ABb(){ABb=Be(EQ);Nu();}
function NS(a,b){var c=new EQ();Gz(c,a,b);return c;}
function Gz(a,b,c){ABb();M(a);a.ci=b;a.eG=c;}
function Tk(a,b,c){var d,e,f,g,h,i;d=b.createElement("div");d.setAttribute("style","position:relative;");e=0;while(e<a.ci.co()){f=0;while(f<a.ci.iy()){g=a.ci.dM(e,f);if(g!==null){h=KX(a,b,g,c);d.appendChild(h);}f=f+1|0;}i=b.createElement("br");d.appendChild(i);e=e+1|0;}return d;}
function KX(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=b.createElement("span");e.setAttribute("class","key");f=null;if(!d)f=AF6.data[c.bd()];else{g=a.eG.gr(c);if(g!==null){h=V(255,160+(g.dV()*1000.0|0)|0);i=Bq(0,160-(g.dV()*1500.0|0)|0);f=J().a(B(278)).m(h).a(B(231)).m(i).a(B(231)).m(i).a(B(245)).e();}}j=(5-a.ci.co()|0)+c.ce()|0;k=Lp(a,j,c.em(),a.ci.co(),c.eH());l=Te(B(279));l.eM(J().a(B(280)).m(k.i8).a(B(281)).m(k.i7).a(B(282)).e());if(f===null){m=!!1;e.hidden=m;}else l.eM(J().a(B(283)).a(f).a(B(284)).e());n=l.e();e.setAttribute("style",
$rt_ustr(n));if(!d){n=J().a(B(285)).a(c.dT()).a(B(286));n=n.a($rt_str(c.iX().toFixed(1))).e();e.setAttribute("title",$rt_ustr(n));}else{g=a.eG.gr(c);if(g!==null){n=J().a(B(285)).a(c.dT()).a(B(287));n=n.a($rt_str((g.dV()*100.0).toFixed(2))).a(B(251)).e();e.setAttribute("title",$rt_ustr(n));}}m=Gg(c.lC());m=b.createTextNode($rt_ustr(m));e.appendChild(m);return e;}
function Lp(a,b,c,d,e){var f,g,h,i;f=a.ci.kz();g=(c*36|0)+10|0;h=d<=3?(b*28|0)-36|0:(b*28|0)-24|0;a:{DV();if(f===AE9){if(b==1)break a;if(b==2){g=g+18|0;break a;}if(b==3){g=g+27|0;break a;}if(b!=4)break a;g=g+45|0;break a;}if(f===AE$){if(b==1)break a;if(b==2){g=g+18|0;break a;}if(b==3){g=g+27|0;break a;}if(b!=4)break a;g=g+(e?45:9)|0;break a;}if(f===AE_){if(e<=0)break a;g=g+18|0;break a;}if(f!==AFa)break a;if(e>0)g=g+90|0;if(b!=1&&b!=2)break a;if(c==10){g=g+(-180)|0;break a;}i=BY(c,11);if(!i){g=g+(-252)|0;break a;}if
(i<=0)break a;g=g+(-72)|0;}return AA7(a,g,h);}
function Nu(){var b,c;b=F(Bk,10);c=b.data;c[0]=B(288);c[1]=B(289);c[2]=B(290);c[3]=B(291);c[4]=null;c[5]=null;c[6]=B(292);c[7]=B(290);c[8]=B(289);c[9]=B(288);AF6=b;}
function B5(){CO.call(this);}
var AEM=null;var AEN=null;var AEO=null;var AEP=null;var AF7=null;function FZ(){FZ=Be(B5);Ui();}
function E4(a,b){var c=new B5();LF(c,a,b);return c;}
function Yg(){FZ();return AF7.dI();}
function L4(b){FZ();return J7(D(B5),b);}
function LF(a,b,c){FZ();FU(a,b,c);}
function Ui(){var b,c;AEM=E4(B(293),0);AEN=E4(B(294),1);AEO=E4(B(295),2);AEP=E4(B(296),3);b=F(B5,4);c=b.data;c[0]=AEM;c[1]=AEN;c[2]=AEO;c[3]=AEP;AF7=b;}
function H3(){I.call(this);this.ki=null;}
function ADO(a){var b=new H3();NQ(b,a);return b;}
function NQ(a,b){a.ki=b;P(a);}
function Xb(a,b){return Hi(b);}
function De(){var a=this;C.call(a);a.hA=null;a.gE=null;a.gJ=null;a.gy=null;a.i9=0;}
function S(a,b,c){var d=new De();QE(d,a,b,c);return d;}
function QE(a,b,c,d){M(a);a.hA=b;a.gE=c;a.gJ=J().a(d).a(B(297)).e();}
function OU(a){return a.hA;}
function X7(a){return a.gE;}
function Oi(a){return a.gJ;}
function Sn(a){return a.gy;}
function AAL(a,b){a.gy=b;}
function QL(a){return a.i9;}
function QV(a,b){a.i9=b;}
function CB(){}
function HM(){C.call(this);}
function ADL(){var a=new HM();AAA(a);return a;}
function AAA(a){M(a);}
function M0(a,b){if(G_())Ki();}
function Xz(a,b){M0(a,b);}
function ML(){C.call(this);}
function HO(){C.call(this);}
function AAZ(){var a=new HO();T5(a);return a;}
function T5(a){M(a);}
function Lt(a,b){var c,d;if(!$rt_str(E2().value).bz($rt_str(E1().value))){c=E1();d=$rt_ustr($rt_str(E2().value));c.value=d;c=Ew();BQ();d=AFq.data.length;c.selectedIndex=d;}if(!$rt_str(Gf().value).bz($rt_str(Er().value))){c=Er();d=$rt_ustr($rt_str(Gf().value));c.value=d;c=Fq();BQ();d=AFr.data.length;c.selectedIndex=d;}Mb().click();Dm();CF(null);BJ(null);}
function AAK(a,b){Lt(a,b);}
function Ho(){C.call(this);}
function ADQ(){var a=new Ho();AAl(a);return a;}
function AAl(a){M(a);}
function JO(a,b){var c,d;c=Fq().selectedIndex;BQ();if(c<AFr.data.length){d=AFr.data[c];Dk(d.bH());Dm();CF(null);BJ(null);}}
function WM(a,b){JO(a,b);}
function GC(){var a=this;C.call(a);a.iC=null;a.iD=null;a.gz=null;}
function Rv(a,b,c){var d=new GC();V7(d,a,b,c);return d;}
function V7(a,b,c,d){M(a);a.iC=b;a.iD=c;a.gz=d;}
function Vo(a){return a.iC;}
function Y0(a){return a.iD;}
function P3(a){return a.gz;}
function SV(b){var c,d,e,f,g,h;c=$rt_createDoubleArray(10);d=b.S();while(d.U()){e=d.R();f=e.cv().bd();g=e.dx().bd();if(Ik(f,g)){h=c.data;h[f]=h[f]+e.cw().bN();}}return c;}
function MP(){I.call(this);this.kT=null;}
function ABS(a){var b=new MP();V3(b,a);return b;}
function V3(a,b){a.kT=b;P(a);}
function VV(a,b){return 0;}
function L$(){BR.call(this);this.lW=null;}
function ADm(a){var b=new L$();Qx(b,a);return b;}
function Qx(a,b){C3(a);a.lW=b;}
function Hp(){C.call(this);}
function AB6(){var a=new Hp();TH(a);return a;}
function TH(a){M(a);}
function KR(a,b){var c,d;c=Ew().selectedIndex;BQ();if(c<AFq.data.length){d=AFq.data[c];if(!d.dj().E()){Gi(d.bH());L9(d.fv());Dm();CF(null);BJ(null);}}}
function UW(a,b){KR(a,b);}
function Lq(){I.call(this);this.lY=null;}
function ACi(a){var b=new Lq();V_(b,a);return b;}
function V_(a,b){a.lY=b;P(a);}
function TG(a,b){return Lg(b);}
function J$(){R.call(this);this.ib=0;}
function Wf(a){var b=new J$();Zc(b,a);return b;}
function Zc(a,b){Bo(a);a.ib=b;}
function Rd(a,b,c,d){var e,f,g,h,i;e=b<d.q()?c.d(b):32;f=!b?32:c.d(b-1|0);g=!d.dd()?d.bw():0;h=e!=32&&!FM(a,e,b,g,c)?0:1;i=f!=32&&!FM(a,f,b-1|0,g,c)?0:1;return h^i^a.ib?(-1):a.f.b(b,c,d);}
function RB(a,b){return 0;}
function FM(a,b,c,d,e){var f;if(!F4(b)&&b!=95){a:{if(C_(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=e.d(c);if(F4(f))return 0;if(C_(f)!=6)return 1;}}return 1;}return 0;}
function KP(){R.call(this);this.dH=0;}
function AA0(a){var b=new KP();Wv(b,a);return b;}
function Wv(a,b){Bo(a);a.dH=b;}
function ZY(a,b,c,d){var e;e=!d.cT()?c.g():d.q();if(b>=e){d.C(a.dH,0);return a.f.b(b,c,d);}if((e-b|0)==1&&c.d(b)==10){d.C(a.dH,1);return a.f.b(b+1|0,c,d);}return (-1);}
function Wo(a,b){var c;c=!b.bF(a.dH)?0:1;b.C(a.dH,(-1));return c;}
function Do(){L.call(this);}
function ACR(){var a=new Do();L6(a);return a;}
function L6(a){Q(a);}
function LW(a){return By().J(9,13).bh(32);}
function Hl(){var a=this;C.call(a);a.kA=null;a.i1=null;a.hg=null;a.h5=null;a.kv=0.0;a.hq=null;a.hp=null;a.ji=null;a.hL=null;}
function ADE(a,b,c,d,e,f,g,h,i){var j=new Hl();Qf(j,a,b,c,d,e,f,g,h,i);return j;}
function Qf(a,b,c,d,e,f,g,h,i,j){M(a);a.kA=b;a.i1=c;a.hg=d;a.h5=e;a.kv=f;a.hq=g;a.hp=h;a.ji=i;a.hL=j;}
function PZ(a){return a.i1;}
function Vp(a){return a.hg;}
function WX(a){return a.h5;}
function PA(a){return a.hq;}
function Wc(a){return a.hp;}
function Uj(a){return a.hL;}
function LR(){Z.call(this);this.gA=0;}
function SP(a){var b=new LR();Pg(b,a);return b;}
function Pg(a,b){BH(a);a.gA=BI(BA(b));}
function Nw(a,b,c){return a.gA!=BI(BA(c.d(b)))?(-1):1;}
function DQ(){BP.call(this);this.g3=0.0;}
var AF8=0.0;var AF9=null;function FG(){FG=Be(DQ);SL();}
function ACg(a){var b=new DQ();Lf(b,a);return b;}
function Lf(a,b){FG();F3(a);a.g3=b;}
function AAr(a){return a.g3;}
function FB(b){FG();return ACg(b);}
function DG(b){var c,d,e,f,g,h,i,j,k,l,m,n,o;FG();if(b.E())G(Ca());c=0;d=b.g();while(true){if(b.d(c)>32){while(b.d(d-1|0)<=32){d=d+(-1)|0;}e=0;if(b.d(c)==45){c=c+1|0;e=1;}else if(b.d(c)==43)c=c+1|0;if(c==d)G(Ca());a:{f=b.d(c);g=Long_ZERO;h=0;i=0;if(f!=46){i=1;if(f>=48&&f<=57){b:{while(c<d){if(b.d(c)!=48)break b;c=c+1|0;}}while(c<d){j=b.d(c);if(j<48)break a;if(j>57)break a;if(Long_toNumber(g)>=1.0E17)h=h+1|0;else g=Long_add(Long_mul(g,Long_fromInt(10)),Long_fromInt(j-48|0));c=c+1|0;}}else G(Ca());}}if(c<d&&b.d(c)
==46){c=c+1|0;c:{while(true){if(c>=d)break c;k=b.d(c);if(k<48)break c;if(k>57)break;if(Long_toNumber(g)<1.0E17){g=Long_add(Long_mul(g,Long_fromInt(10)),Long_fromInt(k-48|0));h=h+(-1)|0;}c=c+1|0;i=1;}}if(!i)G(Ca());}if(c<d){k=b.d(c);if(k!=101&&k!=69)G(Ca());l=c+1|0;m=0;if(l==d)G(Ca());if(b.d(l)==45){l=l+1|0;m=1;}else if(b.d(l)==43)l=l+1|0;n=0;k=0;d:{while(true){if(l>=d)break d;o=b.d(l);if(o<48)break d;if(o>57)break;n=(10*n|0)+(o-48|0)|0;k=1;l=l+1|0;}}if(!k)G(Ca());if(m)n= -n;h=h+n|0;}e:{j=BY(h,308);if(j<=0){if
(j)break e;if(Long_le(g,new Long(2133831477, 4185580)))break e;}return e?(-Infinity):Infinity;}if(e)g=Long_neg(g);return Long_toNumber(g)*KZ(h);}c=c+1|0;if(c==d)break;}G(Ca());}
function KZ(b){var c,d;FG();if(b>=0)c=10.0;else{c=0.1;b= -b;}d=1.0;while(b){if(b%2|0)d=d*c;c=c*c;b=b/2|0;}return d;}
function SL(){AF8=NaN;AF9=D($rt_doublecls());}
function Ey(){Bt.call(this);this.gY=0;}
function AF$(a){var b=new Ey();Mx(b,a);return b;}
function Mx(a,b){Ck(a,b);}
function Pp(a,b,c,d){var e;e=a.c$();d.C(e,b-d.bF(e)|0);a.gY=b;return b;}
function RZ(a){return a.gY;}
function Ra(a,b){return 0;}
function Dp(){W.call(this);this.cH=0;}
function P6(a){var b=new Dp();R7(b,a);return b;}
function R7(a,b){BD(a);a.cH=b;}
function QO(a,b){a.f=b;}
function SS(a,b,c,d){var e,f,g;e=b+1|0;if(e>d.q()){d.by=1;return (-1);}f=c.d(b);if(b>d.bw()){g=c.d(b-1|0);if(Bm(g))return (-1);}if(a.cH!=f)return (-1);return a.f.b(e,c,d);}
function XM(a,b,c,d){var e,f,g,h,i;if(!(c instanceof Bk))return C7(a,b,c,d);e=c;f=d.bw();g=d.q();while(true){if(b>=g)return (-1);h=e.cF(a.cH,b);if(h<0)return (-1);if(h>f&&Bm(e.d(h-1|0))){b=h+1|0;continue;}i=a.f;b=h+1|0;if(i.b(b,c,d)>=0)break;}return h;}
function Uc(a,b,c,d,e){var f,g,h;if(!(d instanceof Bk))return Db(a,b,c,d,e);f=e.bw();g=d;a:{while(true){if(c<b)return (-1);h=g.es(a.cH,c);if(h<0)break a;if(h<b)break a;if(h>f&&Bm(g.d(h-1|0))){c=h+(-2)|0;continue;}if(a.f.b(h+1|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function O1(a,b){if(b instanceof B2)return 0;if(b instanceof B3)return 0;if(b instanceof BK)return 0;if(b instanceof B1)return 0;if(b instanceof DA)return 0;if(!(b instanceof Dp))return 1;return b.cH!=a.cH?0:1;}
function V4(a,b){return 1;}
function E_(){}
function LQ(){B$.call(this);}
function ACP(a,b){var c=new LQ();Ud(c,a,b);return c;}
function Ud(a,b,c){II(a,b,c);}
function LK(){var a=this;C.call(a);a.iN=0;a.ca=0;a.cB=null;a.ez=0;a.iz=0.0;}
function ADi(a,b,c){var d=new LK();QN(d,a,b,c);return d;}
function QN(a,b,c,d){M(a);a.iN=b;a.ca=c;a.kU(d);a.ez=M9(a);}
function W0(a){return BA(a.cB.d(0));}
function AAj(a){return a.iN;}
function XH(a){return a.ca;}
function Zg(a){return a.ez>4?1:0;}
function Ue(a){return a.ez;}
function Rc(a,b){a.ez=b;}
function PJ(a){return a.iz;}
function Uf(a,b){a.iz=b;}
function OK(a){return a.cB;}
function Pl(a,b){var c,d,e,f;c=a.cB.b3().data;d=c.length;e=0;while(e<d){f=c[e];if(f==BA(b))return 1;e=e+1|0;}return 0;}
function Tw(a,b){var c;if(b.g()!=1)a.cB=b;else{c=Zu(b.d(0));if(!c)a.cB=b;else a.cB=J().a(Gg(b.d(0))).bn(c).e();}}
function M9(a){if(a.ca<=3)return a.ca;if(a.ca==4)return 3;if(a.ca==5)return 6;if(a.ca>9)return 9;return a.ca;}
function Zu(b){if(Ly(b)){if(!It(b))return BI(b);return BA(b);}a:{switch(b){case 39:break;case 40:case 41:case 42:case 43:case 58:case 60:case 62:case 63:case 64:case 65:case 66:case 67:case 68:case 69:case 70:case 71:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 80:case 81:case 82:case 83:case 84:case 85:case 86:case 87:case 88:case 89:case 90:case 92:break a;case 44:return 60;case 45:return 95;case 46:return 62;case 47:return 63;case 48:return 41;case 49:return 33;case 50:return 64;case 51:return 35;case 52:return 36;case 53:return 37;case 54:return 94;case 55:return 38;case 56:return 42;case 57:return 40;case 59:return 58;case 61:return 43;case 91:return 123;case 93:return 125;default:break a;}return 34;}return 0;}
function Ch(){var a=this;Bv.call(a);a.cr=null;a.bB=0;}
function AF_(a,b,c,d,e){var f=new Ch();Dr(f,a,b,c,d,e);return f;}
function Dr(a,b,c,d,e,f){CA(a,c,d,e);a.cr=b;a.bB=f;}
function AAC(a,b,c,d){var e,f,g,h;e=d.hT(a.bB);if(!a.w.x(d))return a.f.b(b,c,d);if(e>=a.cr.c2())return a.f.b(b,c,d);f=a.bB;g=e+1|0;d.b6(f,g);h=a.w.b(b,c,d);if(h>=0){d.b6(a.bB,0);return h;}f=a.bB;g=g+(-1)|0;d.b6(f,g);if(g>=a.cr.c0())return a.f.b(b,c,d);d.b6(a.bB,0);return (-1);}
function Ff(){Ch.call(this);}
function AGa(a,b,c,d,e){var f=new Ff();HI(f,a,b,c,d,e);return f;}
function HI(a,b,c,d,e,f){Dr(a,b,c,d,e,f);}
function Pw(a,b,c,d){var e,f;e=d.hT(a.bB);if(!a.w.x(d))return a.f.b(b,c,d);if(e>=a.cr.c2()){d.b6(a.bB,0);return a.f.b(b,c,d);}if(e<a.cr.c0()){d.b6(a.bB,e+1|0);f=a.w.b(b,c,d);}else{f=a.f.b(b,c,d);if(f>=0){d.b6(a.bB,0);return f;}d.b6(a.bB,e+1|0);f=a.w.b(b,c,d);}return f;}
function EA(){}
function DD(){Dn.call(this);this.cc=0;}
function AGb(){var a=new DD();Md(a);return a;}
function Md(a){Lz(a);}
function Vg(a){return ABx(a);}
function EZ(){}
function Id(){var a=this;DD.call(a);a.bl=null;a.bp=0;}
function BN(){var a=new Id();V8(a);return a;}
function AGc(a){var b=new Id();GU(b,a);return b;}
function V8(a){GU(a,10);}
function GU(a,b){Md(a);a.bl=F(C,b);}
function PC(a,b){var c,d;if(a.bl.data.length<b){if(a.bl.data.length>=1073741823)c=2147483647;else{d=a.bl.data.length*2|0;c=Bq(b,Bq(d,5));}a.bl=Ma(a.bl,c);}}
function Td(a,b){Ex(a,b);return a.bl.data[b];}
function QT(a){return a.bp;}
function XV(a,b){var c,d;a.b2(a.bp+1|0);c=a.bl.data;d=a.bp;a.bp=d+1|0;c[d]=b;a.cc=a.cc+1|0;return 1;}
function YZ(a,b,c){var d;JP(a,b);a.b2(a.bp+1|0);d=a.bp;while(d>b){a.bl.data[d]=a.bl.data[d-1|0];d=d+(-1)|0;}a.bl.data[b]=c;a.bp=a.bp+1|0;a.cc=a.cc+1|0;}
function TQ(a,b){var c,d,e,f;Ex(a,b);c=a.bl.data[b];a.bp=a.bp-1|0;while(b<a.bp){d=a.bl.data;e=a.bl.data;f=b+1|0;d[b]=e[f];b=f;}a.bl.data[a.bp]=null;a.cc=a.cc+1|0;return c;}
function Ex(a,b){if(b>=0&&b<a.bp)return;G(Cp());}
function JP(a,b){if(b>=0&&b<=a.bp)return;G(Cp());}
function E5(){}
function Fe(){}
function HL(){C.call(this);}
function NB(a,b,c){a.mE($rt_str(b),DB(c,"handleEvent"));}
function Oc(a,b,c){a.nX($rt_str(b),DB(c,"handleEvent"));}
function Qb(a,b){return a.nn(b);}
function Qz(a,b,c,d){a.mK($rt_str(b),DB(c,"handleEvent"),d?1:0);}
function X0(a,b){return !!a.mJ(b);}
function Sr(a){return a.nh();}
function Of(a,b,c,d){a.oZ($rt_str(b),DB(c,"handleEvent"),d?1:0);}
function K9(){CN.call(this);}
function ACI(a,b,c){var d=new K9();Ri(d,a,b,c);return d;}
function Ri(a,b,c,d){Ev(a,b,c,d);}
function R2(a,b,c,d){var e;if(!a.w.x(d))return a.f.b(b,c,d);e=a.f.b(b,c,d);if(e<0)e=a.w.b(b,c,d);return e;}
function HA(){C.call(this);}
function Bk(){var a=this;C.call(a);a.t=null;a.dL=0;}
var AGd=null;function CQ(){CQ=Be(Bk);W1();}
function GE(a){var b=new Bk();Dt(b,a);return b;}
function Fa(a,b,c){var d=new Bk();Na(d,a,b,c);return d;}
function ABU(a,b,c,d){var e=new Bk();Ia(e,a,b,c,d);return e;}
function AGe(a,b,c,d){var e=new Bk();F2(e,a,b,c,d);return e;}
function ADd(a,b,c){var d=new Bk();Gr(d,a,b,c);return d;}
function Dt(a,b){var c,d,e;CQ();c=b.data;M(a);d=c.length;a.t=$rt_createCharArray(d);e=0;while(e<d){a.t.data[e]=c[e];e=e+1|0;}}
function Na(a,b,c,d){var e,f;CQ();M(a);a.t=$rt_createCharArray(d);e=0;while(e<d){f=b.data;a.t.data[e]=f[e+c|0];e=e+1|0;}}
function Ia(a,b,c,d,e){CQ();F2(a,b,c,d,OD(e.e()));}
function F2(a,b,c,d,e){CQ();M(a);I$(a,b,c,d,e);}
function Gr(a,b,c,d){var e,f,g,h,i,j,k;CQ();M(a);a.t=$rt_createCharArray(d*2|0);e=0;f=0;while(f<d){g=b.data;h=c+1|0;i=g[c];if(i<65536){g=a.t.data;j=e+1|0;g[e]=i&65535;}else{g=a.t.data;k=e+1|0;g[e]=CR(i);g=a.t.data;j=k+1|0;g[k]=CG(i);}f=f+1|0;c=h;e=j;}if(e<a.t.data.length)a.t=EM(a.t,e);}
function I$(a,b,c,d,e){var f;f=G1(e,Mj(b,c,d));if(IU(f)&&!BG(f)&&KF(f)==Ke(f))a.t=E9(f);else{a.t=$rt_createCharArray(X(f));f.kB(a.t);}}
function Qo(a,b){if(b>=0&&b<a.t.data.length)return a.t.data[b];G(Fg());}
function Wn(a){return a.t.data.length;}
function Zh(a){return a.t.data.length?0:1;}
function RH(a,b,c){var d,e,f;if((c+b.g()|0)>a.g())return 0;d=0;while(d<b.g()){e=b.d(d);f=c+1|0;if(e!=a.d(c))return 0;d=d+1|0;c=f;}return 1;}
function Zq(a,b){if(a===b)return 1;return a.it(b,0);}
function P0(a,b,c){var d,e,f,g;d=Bq(0,c);if(b<65536){e=b&65535;while(true){if(d>=a.t.data.length)return (-1);if(a.t.data[d]==e)break;d=d+1|0;}return d;}f=CR(b);g=CG(b);while(true){if(d>=(a.t.data.length-1|0))return (-1);if(a.t.data[d]==f&&a.t.data[d+1|0]==g)break;d=d+1|0;}return d;}
function U1(a,b){return a.cF(b,0);}
function QA(a,b,c){var d,e,f,g,h,i;d=V(c,a.g()-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.t.data[d]==e)break;d=d+(-1)|0;}return d;}f=CR(b);g=CG(b);while(true){if(d<1)return (-1);if(a.t.data[d]==g){h=a.t.data;i=d-1|0;if(h[i]==f)break;}d=d+(-1)|0;}return i;}
function Uw(a,b,c){var d,e,f;d=Bq(0,c);e=a.g()-b.g()|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=b.g())break a;if(a.d(d+f|0)!=b.d(f))break;f=f+1|0;}d=d+1|0;}return d;}
function UP(a,b,c){var d,e;d=V(c,a.g()-b.g()|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=b.g())break a;if(a.d(d+e|0)!=b.d(e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function OF(a,b,c){if(b>c)G(Cp());return Fa(a.t,b,c-b|0);}
function YA(a,b){return a.cj(b,a.g());}
function Vb(a,b,c){return a.cj(b,c);}
function Nk(a,b){var c,d,e;c=a.g()-b.g()|0;d=0;while(d<=c){e=0;while(true){if(e>=b.g())return 1;if(a.d(d+e|0)!=b.d(e))break;e=e+1|0;}d=d+1|0;}return 0;}
function ZW(a){var b,c;b=0;c=a.g()-1|0;a:{while(b<=c){if(a.d(b)>32)break a;b=b+1|0;}}while(b<=c&&a.d(c)<=32){c=c+(-1)|0;}return a.cj(b,c+1|0);}
function R5(a){return a;}
function Zo(a){var b,c,d;b=$rt_createCharArray(a.t.data.length);c=0;while(true){d=b.data;if(c>=d.length)break;d[c]=a.t.data[c];c=c+1|0;}return b;}
function Gg(b){var c,d;CQ();c=new Bk;d=$rt_createCharArray(1);d.data[0]=b;Dt(c,d);return c;}
function EL(b){CQ();return J().m(b).e();}
function XP(a,b){var c,d;if(a===b)return 1;if(!(b instanceof Bk))return 0;c=b;if(c.g()!=a.g())return 0;d=0;while(d<c.g()){if(a.d(d)!=c.d(d))return 0;d=d+1|0;}return 1;}
function Yb(a,b){var c;if(a===b)return 1;if(b===null)return 0;if(a.g()!=b.g())return 0;c=0;while(c<a.g()){if(BI(a.d(c))!=BI(b.d(c)))return 0;c=c+1|0;}return 1;}
function P_(a){var b,c,d,e;a:{if(!a.dL){b=a.t.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.dL=(31*a.dL|0)+e|0;d=d+1|0;}}}return a.dL;}
function O7(a){var b,c,d,e,f,g,h,i;if(a.E())return a;b=$rt_createIntArray(a.t.data.length);c=0;d=0;while(d<a.t.data.length){a:{if(d!=(a.t.data.length-1|0)&&Bm(a.t.data[d])){e=a.t.data;f=d+1|0;g=e[f];if(Bu(g)){h=b.data;i=c+1|0;h[c]=Cm(BU(a.t.data[d],a.t.data[f]));d=f;break a;}}h=b.data;i=c+1|0;h[c]=BA(a.t.data[d]);}d=d+1|0;c=i;}return ADd(b,0,c);}
function AAq(a,b){return HF(TS(b),a.e());}
function W1(){AGd=ADq();}
function FV(){C.call(this);}
var AGf=null;function ADW(){ADW=Be(FV);Un();}
function Gq(){ADW();return AGf;}
function Un(){AGf=AAM();AGf.hG(B(298),X5());}
function Nc(){U.call(this);}
function ADt(){var a=new Nc();Q$(a);return a;}
function Q$(a){BB(a);}
function Ii(){Cb.call(this);}
function ACF(a,b,c){var d=new Ii();VR(d,a,b,c);return d;}
function VR(a,b,c,d){Eo(a,b,c,d);}
function PW(a,b,c,d){var e;e=a.f.b(b,c,d);if(e>=0)return e;return a.w.b(b,c,d);}
function Ef(){Dj.call(this);}
function AGg(a,b,c){var d=new Ef();Jh(d,a,b,c);return d;}
function Jh(a,b,c,d){La(a,b,c,d);}
function QF(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=$rt_createCharArray(V(X(b),512));e=0;f=0;g=$rt_createByteArray(V(X(c),512));a:{while(true){if((e+32|0)>f&&BT(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=V(X(b)+j|0,i.length);b.iG(d,j,f-j|0);e=0;}if(!BT(c)){if(!BT(b)&&e>=f){Bj();k=AEU;}else{Bj();k=AES;}break a;}i=g.data;l=V(X(c),i.length);m=ABR(b,c);k=a.jJ(d,e,f,g,0,l,m);e=m.hX;if(k===null&&0==m.gb){Bj();k=AEU;}j=m.gb;c.hY(g,0,j);if(k!==null)break;}}b.fg(BG(b)-(f-e|0)|0);return k;}
function JV(){Ef.call(this);}
function ACA(a){var b=new JV();U4(b,a);return b;}
function U4(a,b){Jh(a,b,2.0,4.0);}
function Z_(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(h.dE(2))break a;Bj();i=AES;break a;}k=e.data;n=f+1|0;k[f]=(192|l>>6)<<24>>24;m=n+1|0;k[n]=(128|l&63)<<24>>24;}else if(!D5(l)){if((f+3|0)>g){j=j+(-1)|0;if(h.dE(3))break a;Bj();i=AES;break a;}k=e.data;o=f+1|0;k[f]=(224|l>>12)<<24>>24;n=o+1|0;k[o]=(128|l>>6&63)<<24>>24;m=n+1|0;k[n]=(128|l&63)<<24>>24;}else{if
(!Bm(l)){i=BM(1);break a;}if(j>=d){if(h.dq())break a;Bj();i=AEU;break a;}n=j+1|0;p=k[j];if(!Bu(p)){j=n+(-2)|0;i=BM(1);break a;}if((f+4|0)>g){j=n+(-2)|0;if(h.dE(4))break a;Bj();i=AES;break a;}k=e.data;q=BU(l,p);j=f+1|0;k[f]=(240|q>>18)<<24>>24;o=j+1|0;k[j]=(128|q>>12&63)<<24>>24;j=o+1|0;k[o]=(128|q>>6&63)<<24>>24;m=j+1|0;k[j]=(128|q&63)<<24>>24;j=n;}c=j;f=m;}j=c;}h.gh(j);h.eN(f);return i;}
function Jd(){L.call(this);}
function AC$(){var a=new Jd();Rb(a);return a;}
function Rb(a){Q(a);}
function YE(a){return ACj(a);}
function Is(){R.call(this);}
function AB_(){var a=new Is();AAh(a);return a;}
function AAh(a){Bo(a);}
function ZO(a,b,c,d){return b;}
function Q1(a,b){return 0;}
function Cs(){BR.call(this);}
function Ca(){var a=new Cs();P8(a);return a;}
function BX(a){var b=new Cs();AAy(b,a);return b;}
function P8(a){C3(a);}
function AAy(a,b){M7(a,b);}
function EI(){Ch.call(this);}
function AGh(a,b,c,d,e){var f=new EI();HN(f,a,b,c,d,e);return f;}
function HN(a,b,c,d,e,f){Dr(a,b,c,d,e,f);Ec();c.s(AEV);}
function Ym(a,b,c,d){var e,f,g;e=0;f=a.cr.c2();a:{while(true){g=a.w.b(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.cr.c0())return (-1);return a.f.b(b,c,d);}
function MU(){Du.call(this);}
function X5(){var a=new MU();Yp(a);return a;}
function Yp(a){Jg(a,B(298),F(Bk,0));}
function UA(a){return ACc(a);}
function Yt(a){return ACA(a);}
function GH(){R.call(this);this.cs=0;}
function ABd(a){var b=new GH();AAG(b,a);return b;}
function AAG(a,b){Bo(a);a.cs=b;}
function Yx(a,b,c,d){var e,f,g;e=!d.cT()?c.g()-b|0:d.bw()-b|0;if(!e){d.C(a.cs,0);return a.f.b(b,c,d);}if(e<2){f=c.d(b);g=97;}else{f=c.d(b);g=c.d(b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:d.C(a.cs,0);return a.f.b(b,c,d);case 13:if(g!=10){d.C(a.cs,0);return a.f.b(b,c,d);}d.C(a.cs,0);return a.f.b(b,c,d);default:}return (-1);}
function SX(a,b){var c;c=!b.bF(a.cs)?0:1;b.C(a.cs,(-1));return c;}
function Im(){C.call(this);}
function Ht(){var a=this;Cy.call(a);a.dv=null;a.cZ=null;a.b4=0;a.d6=0;a.eR=0;a.hM=0;}
function AGi(a,b){var c=new Ht();J5(c,a,b);return c;}
function El(a){var b=new Ht();UC(b,a);return b;}
function J5(a,b,c){EN(a);a.hM=(-1);if(c<0)G(Cv());a.dv=b;a.cZ=$rt_createCharArray(Bq(64,c));}
function UC(a,b){J5(a,b,1024);}
function AAm(a){FJ(a);a.dv.bK();a.dv=null;}
function Z8(a){var b,c,d,e;FJ(a);if(a.eR&&a.b4>=a.d6)return null;b=J();a:{while(true){if(a.b4>=a.d6&&!Ez(a,0))break a;c=a.cZ.data;d=a.b4;a.b4=d+1|0;e=c[d];if(e==10)break;if(e==13){if(a.b4>=a.d6&&!Ez(a,0))break a;if(a.cZ.data[a.b4]!=10)break a;a.b4=a.b4+1|0;break a;}b.bn(e);}}return b.e();}
function Ez(a,b){var c;if(a.eR)return 0;a:{while(true){if(b>=a.cZ.data.length)break a;c=a.dv.kr(a.cZ,b,a.cZ.data.length-b|0);if(c==(-1)){a.eR=1;break a;}if(!c)break;b=b+c|0;}}a.d6=b;a.b4=0;a.hM=(-1);return 1;}
function FJ(a){if(a.dv!==null)return;G(PI());}
function Iw(){L.call(this);}
function ACD(){var a=new Iw();Oo(a);return a;}
function Oo(a){Q(a);}
function Tt(a){return ABS(a);}
function Jf(){I.call(this);this.jW=null;}
function ABy(a){var b=new Jf();NC(b,a);return b;}
function NC(a,b){a.jW=b;P(a);}
function XI(a,b){return MG(b);}
function Jn(){L.call(this);}
function ABX(){var a=new Jn();O0(a);return a;}
function O0(a){Q(a);}
function Nx(a){return ACi(a);}
function Hv(){Br.call(this);}
function C1(){var a=new Hv();U6(a);return a;}
function U6(a){C4(a);}
function DA(){W.call(this);this.cL=0;}
function YD(a){var b=new DA();Ql(b,a);return b;}
function Ql(a,b){BD(a);a.cL=b;}
function R9(a,b){a.f=b;}
function N9(a,b,c,d){var e,f,g,h,i;e=d.q();f=b+1|0;g=BY(f,e);if(g>0){d.by=1;return (-1);}h=c.d(b);if(g<0){i=c.d(f);if(Bu(i))return (-1);}if(a.cL!=h)return (-1);return a.f.b(f,c,d);}
function Rz(a,b,c,d){var e,f,g;if(!(c instanceof Bk))return C7(a,b,c,d);e=c;f=d.q();while(true){if(b>=f)return (-1);g=e.cF(a.cL,b);if(g<0)return (-1);b=g+1|0;if(b<f&&Bu(e.d(b))){b=g+2|0;continue;}if(a.f.b(b,c,d)>=0)break;}return g;}
function Ul(a,b,c,d,e){var f,g,h,i;if(!(d instanceof Bk))return Db(a,b,c,d,e);f=d;g=e.q();a:{while(true){if(c<b)return (-1);h=f.es(a.cL,c);if(h<0)break a;if(h<b)break a;i=h+1|0;if(i<g&&Bu(f.d(i))){c=h+(-1)|0;continue;}if(a.f.b(i,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function TV(a,b){if(b instanceof B2)return 0;if(b instanceof B3)return 0;if(b instanceof BK)return 0;if(b instanceof B1)return 0;if(b instanceof Dp)return 0;if(!(b instanceof DA))return 1;return b.cL!=a.cL?0:1;}
function RY(a,b){return 1;}
function LU(){Cd.call(this);}
function ADy(a,b,c,d){var e=new LU();Rx(e,a,b,c,d);return e;}
function Rx(a,b,c,d,e){Gl(a,b,c,d,e);}
function UM(a,b,c,d){var e,f,g,h,i;e=a.cq.c0();f=a.cq.c2();g=0;while(true){if(g>=e){a:{while(true){h=a.f.b(b,c,d);if(h>=0)break;if((b+a.B.bb()|0)<=d.q()){h=a.B.I(b,c);b=b+h|0;g=g+1|0;}if(h<1)break a;if(g>f)break a;}return h;}return (-1);}if((b+a.B.bb()|0)>d.q()){d.by=1;return (-1);}i=a.B.I(b,c);if(i<1)break;b=b+i|0;g=g+1|0;}return (-1);}
function GS(){U.call(this);}
function SU(a){var b=new GS();Vh(b,a);return b;}
function RJ(){var a=new GS();SC(a);return a;}
function Vh(a,b){Df(a,b);}
function SC(a){BB(a);}
function LY(){R.call(this);}
function WA(){var a=new LY();T$(a);return a;}
function T$(a){Bo(a);}
function AAI(a,b,c,d){if(b&&!(d.cT()&&b==d.bw()))return (-1);return a.f.b(b,c,d);}
function YJ(a,b){return 0;}
function JY(){I.call(this);this.lj=null;}
function ADs(a){var b=new JY();Wx(b,a);return b;}
function Wx(a,b){a.lj=b;P(a);}
function Sy(a,b){return Ft(b);}
function Kv(){var a=this;C.call(a);a.dW=null;a.h0=null;}
function ABo(a,b){var c=new Kv();WZ(c,a,b);return c;}
function WZ(a,b,c){a.h0=b;a.dW=c;M(a);}
function Xd(a){if(a.dW.readyState==4&&a.dW.status==200)Q0(a.h0,$rt_str(a.dW.responseText));}
function SO(a){a.jI();}
function LX(){C.call(this);}
function V(b,c){if(b<c)c=b;return c;}
function Bq(b,c){if(b>c)c=b;return c;}
function GK(b){if(b<=0)b= -b;return b;}
function Kr(){L.call(this);}
function ABW(){var a=new Kr();Tx(a);return a;}
function Tx(a){Q(a);}
function PB(a){var b;b=ABc(a);b.y=1;return b;}
function FQ(){var a=this;BR.call(a);a.hm=null;a.dO=null;a.dw=0;}
function Ba(a,b,c){var d=new FQ();HH(d,a,b,c);return d;}
function HH(a,b,c,d){C3(a);a.dw=(-1);a.hm=b;a.dO=c;a.dw=d;}
function YM(a){var b,c;b=B(25);if(a.dw>=1){c=$rt_createCharArray(a.dw);Si(c,32);b=GE(c);}return J().a(a.hm).a(a.dO!==null&&a.dO.g()?J().m(a.dw).a(B(299)).a(a.dO).a(B(299)).a(b).e():B(25)).e();}
function GI(){C.call(this);}
function M8(b,c){var d,$$je;a:{try{ZB(b,EC(c));}catch($$e){$$je=Bb($$e);if($$je instanceof Br){d=$$je;break a;}else{throw $$e;}}return 1;}Cz().o(B(300));d.ev();return 0;}
function ZB(b,c){var d,e,f,g,h,i,j,$$je;d=El(c);a:{try{e=0;while(true){f=d.el();if(f===null)break;g=f.ch(35);if(g>=0)f=f.cj(0,g);f=f.fC();if(!f.g())continue;h=B9(f,32);i=0;while(i<h.X()){j=h.H(i);b.j4(e,i,j);i=i+1|0;}e=e+1|0;}}catch($$e){$$je=Bb($$e);f=$$je;break a;}d.bK();return;}d.bK();G(f);}
function Kw(){L.call(this);}
function AA2(){var a=new Kw();S7(a);return a;}
function S7(a){Q(a);}
function TA(a){var b;b=ADV(a);b.K.d8(0,2048);b.y=1;return b;}
function Di(){C.call(this);}
var AFq=null;var AFr=null;var AFp=null;function BQ(){BQ=Be(Di);Rm();}
function Rm(){var b,c;b=F(De,15);c=b.data;c[0]=S(B(301),B(302),B(303));c[1]=S(B(304),B(302),B(305));c[2]=S(B(306),B(307),B(308));c[3]=S(B(309),B(307),B(310));c[4]=S(B(311),B(307),B(312));c[5]=S(B(313),B(307),B(314));c[6]=S(B(315),B(307),B(316));c[7]=S(B(317),B(307),B(318));c[8]=S(B(319),B(320),B(321));c[9]=S(B(322),B(320),B(323));c[10]=S(B(324),B(307),B(325));c[11]=S(B(326),B(307),B(327));c[12]=S(B(328),B(307),B(329));c[13]=S(B(330),B(307),B(331));c[14]=S(B(332),B(307),B(333));AFq=b;b=F(De,5);c=b.data;c[0]=
S(B(307),B(334),B(335));c[1]=S(B(320),B(336),B(337));c[2]=S(B(302),B(338),B(339));c[3]=S(B(340),B(341),B(342));c[4]=S(B(343),B(344),B(345));AFr=b;b=F(De,11);c=b.data;c[0]=S(B(258),B(346),B(347));c[1]=S(B(348),B(349),B(350));c[2]=S(B(351),B(352),B(353));c[3]=S(B(354),B(355),B(356));c[4]=S(B(357),B(358),B(359));c[5]=S(B(360),B(361),B(362));c[6]=S(B(363),B(364),B(365));c[7]=S(B(366),B(367),B(368));c[8]=S(B(369),B(370),B(371));c[9]=S(B(372),B(373),B(374));c[10]=S(B(375),B(376),B(377));AFp=b;}
function H$(){C.call(this);}
function ADq(){var a=new H$();Q2(a);return a;}
function Q2(a){M(a);}
function Il(){C.call(this);}
function ABl(){var a=new Il();V$(a);return a;}
function V$(a){M(a);}
function UB(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=HB(a,b);f=M_(a,b,c);g=M2(a,b,c);h=Nd(a,b,d);i=If(a,b,d);j=Ek(a,b,d,0);k=Ek(a,b,d,1);l=F($rt_arraycls($rt_doublecls()),3);m=l.data;m[0]=I3(a,b,c);m[1]=Ms(a,b,i);n=MF(a,j,k);m[2]=IN(a,b,n);return ADE(b,e,f,g,h,i,j,k,l);}
function MF(a,b,c){var d;d=BN();d.ip(b);d.ip(c);return d;}
function HB(a,b){var c,d,e,f;c=BN();d=b.dp();if(b.co()>4)c.be(B(378));e=65;while(e<=90){if(d.ch(e)<0)c.be(J().a(B(379)).bn(e).a(B(380)).e());e=(e+1|0)&65535;}f=0;while(f<d.g()){e=d.d(f);f=f+1|0;if(d.cF(e,f)>=0)c.be(J().a(B(379)).bn(e).a(B(381)).e());}return c;}
function M_(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=AAM();e=0;while(e<b.co()){f=0;while(f<b.iy()){g=b.dM(e,f);if(g!==null){h=FB(0.0);i=g.dT().b3().data;j=i.length;k=0;while(k<j){l=i[k];m=JQ(l,c);if(m!==null)h=FB(h.dV()+m.bN());k=k+1|0;}d.hG(g,h);}f=f+1|0;}e=e+1|0;}return d;}
function M2(a,b,c){var d,e,f,g,h,i,j;d=$rt_createDoubleArray(10);e=c.S();while(e.U()){f=e.R();g=f.ck();h=b.cd(g);if(h!==null){i=d.data;j=h.bd();i[j]=i[j]+f.bN();}}return d;}
function Nd(a,b,c){var d,e,f,g,h,i,j;d=0.0;e=c.S();while(e.U()){f=e.R();g=f.c4().b3();h=g.data;i=b.cd(h[0]);j=b.cd(h[1]);if(i.eH()!=j.eH())d=d+f.bN();}return d;}
function If(a,b,c){var d,e,f,g,h,i,j,k;d=BN();e=c.S();while(e.U()){f=e.R();g=f.c4().b3();h=g.data;i=b.cd(h[0]);j=b.cd(h[1]);if(i!==null&&j!==null&&h[0]!=h[1]&&Ik(i.bd(),j.bd())){k=Rv(i,j,f);d.be(k);}}return d;}
function Ek(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=BN();f=c.S();while(f.U()){g=f.R();h=g.c4().b3();i=h.data;j=b.cd(i[0]);k=b.cd(i[1]);if(j!==null&&k!==null&&TO(j.bd(),k.bd())){l=M4(j.bd(),k.bd());m=Rv(j,k,g);if(b.k$(l)!=d)e.be(m);}}return e;}
function I3(a,b,c){var d,e,f,g,h,i,j,k,l;d=$rt_createDoubleArray(10);e=b.dp().b3().data;f=e.length;g=0;while(g<f){h=e[g];i=b.cd(h);j=JQ(h,c);if(j!==null){k=d.data;l=i.bd();k[l]=k[l]+i.iX()*j.bN();}g=g+1|0;}return d;}
function Ms(a,b,c){var d,e,f,g,h,i,j;d=$rt_createDoubleArray(10);e=c.S();while(e.U()){f=d.data;g=e.R();h=g.cv().bd();i=V(2,GK(g.cv().ce()-g.dx().ce()|0));j=b.k_(i);f[h]=f[h]+g.cw().bN()*j;}return d;}
function IN(a,b,c){var d,e,f,g,h,i,j,k,l;d=$rt_createDoubleArray(10);e=c.S();while(e.U()){f=d.data;g=e.R();h=g.cv().bd();i=g.dx().bd();j=M4(h,i);k=V(2,GK(g.cv().ce()-g.dx().ce()|0));l=b.l3(j,k);f[j]=f[j]+g.cw().bN()*l;}return d;}
function LN(){var a=this;C.call(a);a.c=null;a.bo=0;a.fo=null;a.g5=0;a.bV=0;a.b$=0;a.P=0;a.eK=null;}
function ABf(){var a=new LN();Ok(a);return a;}
function Lb(a,b){return ACW(a,b);}
function HG(a,b,c){var d,e,f,g,h,i;d=BN();e=Lb(a,b);f=0;g=0;if(!b.g()){h=F(Bk,1);h.data[0]=B(25);return h;}while(K6(e)){i=f+1|0;if(i>=c&&c>0)break;d.be(b.fu(g,Mi(e)).e());g=Kl(e);f=i;}a:{d.be(b.fu(g,b.g()).e());i=f+1|0;if(!c)while(true){i=i+(-1)|0;if(i<0)break;if(d.H(i).e().g())break a;d.iH(i);}}if(i<0)i=0;return d.jq(F(Bk,i));}
function HF(a,b){return HG(a,b,0);}
function DM(a){return a.c.e();}
function UK(b,c){if(b===null)G(SU(B(382)));if(c&&(c|255)!=255)G(Bz(B(25)));Jk();AEA=1;return KA(ABf(),b,c);}
function KA(a,b,c){a.c=ACQ(b,c);a.bo=c;a.eK=Gh(a,(-1),a.bo,null);if(a.c.E()){Kn(a);return a;}G(Ba(B(25),a.c.e(),a.c.bu()));}
function L5(a,b){var c,d,e;c=ADg(Bd(a,2),Bd(a,64));while(!a.c.E()){d=a.c;if(!d.ct())break;d=a.c;if(d.bj()&&a.c.bj()!=(-536870788)){d=a.c;if(d.bj()!=(-536870871))break;}c.bh(a.c.n());if(a.c.T()!=(-536870788))continue;a.c.n();}e=Ee(a,c);e.s(b);return e;}
function Gh(a,b,c,d){var e,f,g,h,i,j;e=BN();f=a.bo;g=0;if(c!=a.bo)a.bo=c;a:{switch(b){case -1073741784:h=new Gb;i=a.P+1|0;a.P=i;Hb(h,i);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new Fx;i=a.P+1|0;a.P=i;Lm(h,i);break a;case -33554392:h=new Ey;i=a.P+1|0;a.P=i;Mx(h,i);break a;default:a.bV=a.bV+1|0;if(d!==null)h=ACm(a.bV);else{h=ADw();g=1;}if(a.bV<=(-1))break a;if(a.bV>=10)break a;a.fo.data[a.bV]=h;break a;}h=AA_();}while(true){if(a.c.ct()&&a.c.bj()==(-536870788))j=L5(a,h);else if
(a.c.T()==(-536870788)){j=Cu(h);a.c.n();}else{j=Fj(a,h);if(a.c.T()==(-536870788))a.c.n();}if(j!==null)e.be(j);if(a.c.E())break;if(a.c.T()==(-536870871))break;}if(a.c.kV()==(-536870788))e.be(Cu(h));if(a.bo!=f&&!g){a.bo=f;a.c.kG(a.bo);}switch(b){case -1073741784:break;case -536870872:return ACr(e,h);case -268435416:return AA6(e,h);case -134217688:return ACh(e,h);case -67108824:return AC3(e,h);case -33554392:return ABr(e,h);default:switch(e.X()){case 0:break;case 1:return ABL(e.H(0),h);default:return ADX(e,h);}return Cu(h);}return ADG(e,
h);}
function JM(a){var b,c,d;b=SZ();while(!a.c.E()){c=a.c;if(!c.ct())break;c=a.c;if(c.hN())break;c=a.c;if(c.iY())break;c=a.c;if(!(!c.fn()&&!a.c.bj())){c=a.c;if(!(!c.fn()&&DZ(a.c.bj()))){c=a.c;if(c.bj()!=(-536870871)){c=a.c;if((c.bj()&(-2147418113))!=(-2147483608)){c=a.c;if(c.bj()!=(-536870788)){c=a.c;if(c.bj()!=(-536870876))break;}}}}}d=a.c.n();if(!D1(d))b.e7(d&65535);else b.kD(CK(d));}if(!Bd(a,2))return ADD(b);if(Bd(a,64))return AD1(b);return AEa(b);}
function JX(a){var b,c,d,e,f,g,h,i,j,k;b=$rt_createIntArray(4);c=0;d=(-1);e=(-1);if(!a.c.E()&&a.c.ct()){f=b.data;d=a.c.n();f[c]=d;e=d-4352|0;}if(e>=0&&e<19){g=$rt_createCharArray(3);f=g.data;f[c]=d&65535;h=a.c.T();i=h-4449|0;if(i>=0&&i<21){f[1]=h&65535;a.c.n();j=a.c.T();h=j-4519|0;if(h>=0&&h<28){f[2]=j&65535;a.c.n();return WN(g,3);}return WN(g,2);}if(!Bd(a,2))return JW(f[0]);if(Bd(a,64))return SP(f[0]);return Sh(f[0]);}k=1;while(k<4&&!a.c.E()&&a.c.ct()){f=b.data;j=k+1|0;f[k]=a.c.n();k=j;}if(k==1){f=b.data;if
(!Nl(f[0]))return F9(a,f[0]);}if(!Bd(a,2))return AD6(b,k);if(Bd(a,64))return ADl(b,k);return ADZ(b,k);}
function Fj(a,b){var c,d,e,f;if(a.c.ct()&&!a.c.fn()&&DZ(a.c.bj())){if(!Bd(a,128)){if(!a.c.hN()&&!a.c.iY())c=JM(a);else{d=F5(a,b);c=D8(a,b,d);}}else{c=JX(a);if(!a.c.E()){e=a.c;if(!(e.T()==(-536870871)&&!(b instanceof Co))){e=a.c;if(e.T()!=(-536870788)&&!a.c.ct())c=D8(a,b,c);}}}}else if(a.c.T()!=(-536870871)){d=F5(a,b);c=D8(a,b,d);}else{if(b instanceof Co)G(Ba(B(25),a.c.e(),a.c.bu()));c=Cu(b);}a:{if(!a.c.E()){e=a.c;if(!(e.T()==(-536870871)&&!(b instanceof Co))){e=a.c;if(e.T()!=(-536870788)){f=Fj(a,b);if(c instanceof Bx
&&!(c instanceof Cd)&&!(c instanceof Bv)&&!(c instanceof Cb)){e=c;if(!f.ba(e.eg()))c=AB$(e);}if((f.cO()&65535)!=43)c.s(f);else c.s(f.eg());break a;}}}if(c===null)return null;c.s(b);}if((c.cO()&65535)!=43)return c;return c.eg();}
function D8(a,b,c){var d,e,f,g,h,i,j;d=a.c.T();if(c!==null&&!(c instanceof Z)){switch(d){case -2147483606:a.c.n();return ACC(c,b,d);case -2147483605:a.c.n();return ABg(c,b,(-2147483606));case -2147483585:a.c.n();return ABB(c,b,(-536870849));case -2147483525:e=new EI;f=a.c.cz();g=a.b$+1|0;a.b$=g;HN(e,f,c,b,(-536870849),g);return e;case -1073741782:case -1073741781:a.c.n();h=ACY(c,b,d);c.s(h);return h;case -1073741761:a.c.n();h=ACI(c,b,(-536870849));c.s(b);return h;case -1073741701:h=new Ff;e=a.c;e=e.cz();i=a.b$
+1|0;a.b$=i;HI(h,e,c,b,(-536870849),i);c.s(h);return h;case -536870870:case -536870869:a.c.n();h=c.cO()!=(-2147483602)?AB7(c,b,d):Bd(a,32)?AC8(c,b,d):ABV(c,b,d,Fp(a.bo));c.s(h);return h;case -536870849:a.c.n();h=ADK(c,b,(-536870849));c.s(b);return h;case -536870789:h=new Ch;e=a.c;e=e.cz();g=a.b$+1|0;a.b$=g;Dr(h,e,c,b,(-536870849),g);c.s(h);return h;default:}return c;}j=null;if(c!==null)j=c;switch(d){case -2147483606:case -2147483605:a.c.n();h=ACs(j,b,d);j.s(h);return h;case -2147483585:a.c.n();return ABh(j,
b,(-2147483585));case -2147483525:return ADj(a.c.cz(),j,b,(-2147483525));case -1073741782:case -1073741781:a.c.n();h=AC7(j,b,d);j.s(h);return h;case -1073741761:a.c.n();return ACF(j,b,(-1073741761));case -1073741701:return ADy(a.c.cz(),j,b,(-1073741701));case -536870870:case -536870869:a.c.n();h=AB5(j,b,d);j.s(h);return h;case -536870849:a.c.n();return ABa(j,b,(-536870849));case -536870789:return ACy(a.c.cz(),j,b,(-536870789));default:}return c;}
function F5(a,b){var c,d,e,f,g,h,i,j,k,l;c=null;while(true){a:{d=a.c.T();if((d&(-2147418113))==(-2147483608)){a.c.n();e=(d&16711680)>>16;d=d&(-16711681);if(d==(-16777176))a.bo=e;else{if(d!=(-1073741784))e=a.bo;c=Gh(a,d,e,b);if(a.c.T()!=(-536870871))G(Ba(B(25),a.c.e(),a.c.bu()));a.c.n();}}else{b:{c:{switch(d){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:f=(d&2147483647)-48|0;if(a.bV<f)G(Ba(B(25),a.c.e(),
a.c.bu()));a.c.n();a.P=a.P+1|0;c=!Bd(a,2)?ABp(f,a.P):Bd(a,64)?ADu(f,a.P):ADT(f,a.P);a.fo.data[f].fk=1;a.g5=1;break a;case -2147483583:break;case -2147483582:a.c.n();c=Wf(0);break a;case -2147483577:a.c.n();c=ACz();break a;case -2147483558:a.c.n();c=new FY;g=a.P+1|0;a.P=g;Ku(c,g);break a;case -2147483550:a.c.n();c=Wf(1);break a;case -2147483526:a.c.n();c=AC2();break a;case -536870876:break c;case -536870866:a.c.n();if(Bd(a,32)){c=ADz();break a;}c=ACf(Fp(a.bo));break a;case -536870821:a.c.n();h=0;if(a.c.T()==
(-536870818)){h=1;a.c.n();}c=HQ(a,h,b);if(a.c.T()!=(-536870819))G(Ba(B(25),a.c.e(),a.c.bu()));a.c.d7(1);a.c.n();break a;case -536870818:a.c.n();a.P=a.P+1|0;if(!Bd(a,8)){c=WA();break a;}c=AC4(Fp(a.bo));break a;case 0:i=a.c.fm();if(i!==null)c=Ee(a,i);else{if(a.c.E()){c=Cu(b);break a;}c=JW(d&65535);}a.c.n();break a;default:break b;}a.c.n();c=WA();break a;}a.c.n();a.P=a.P+1|0;if(Bd(a,8)){if(Bd(a,1)){c=ADv(a.P);break a;}c=ABd(a.P);break a;}if(Bd(a,1)){c=AA0(a.P);break a;}c=ACw(a.P);break a;}if(d>=0&&!a.c.dh()){c
=F9(a,d);a.c.n();}else if(d==(-536870788))c=Cu(b);else{if(d!=(-536870871)){j=new FQ;k=a.c;if(!k.dh()){g=d&65535;k=FX(g);}else k=a.c.fm().e();l=a.c;HH(j,k,l.e(),a.c.bu());G(j);}if(b instanceof Co)G(Ba(B(25),a.c.e(),a.c.bu()));c=Cu(b);}}}if(d!=(-16777176))break;}return c;}
function HQ(a,b,c){var d,e;d=Cr(a,b);e=Ee(a,d);e.s(c);return e;}
function Cr(a,b){var c,d,e,f,g,h,i,j,k,$$je;c=ACV(b,Bd(a,2),Bd(a,64));d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(a.c.E())break a;f=a.c.T()==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(a.c.T()){case -536870874:if(d>=0)c.bh(d);d=a.c.n();if(a.c.T()!=(-536870874)){d=38;break d;}if(a.c.bj()==(-536870821)){a.c.n();e=1;d=(-1);break d;}a.c.n();if(g){c=Cr(a,0);break d;}if(a.c.T()==(-536870819))break d;c.gx(Cr(a,0));break d;case -536870867:if(!g&&a.c.bj()!=(-536870819)){h=a.c;if(h.bj()!=(-536870821)&&d>=0){a.c.n();i=
a.c.T();if(a.c.dh())break c;if(i<0){h=a.c;if(h.bj()!=(-536870819)){h=a.c;if(h.bj()!=(-536870821)&&d>=0)break c;}}e:{try{if(DZ(i))break e;i=i&65535;break e;}catch($$e){$$je=Bb($$e);if($$je instanceof Br){break b;}else{throw $$e;}}}try{c.J(d,i);}catch($$e){$$je=Bb($$e);if($$je instanceof Br){break b;}else{throw $$e;}}a.c.n();d=(-1);break d;}}if(d>=0)c.bh(d);d=45;a.c.n();break d;case -536870821:if(d>=0){c.bh(d);d=(-1);}a.c.n();j=0;if(a.c.T()==(-536870818)){a.c.n();j=1;}if(!e)c.jP(Cr(a,j));else c.gx(Cr(a,j));e=
0;a.c.n();break d;case -536870819:if(d>=0)c.bh(d);d=93;a.c.n();break d;case -536870818:if(d>=0)c.bh(d);d=94;a.c.n();break d;case 0:if(d>=0)c.bh(d);k=a.c.fm();if(k===null)d=0;else{c.lO(k);d=(-1);}a.c.n();break d;default:}if(d>=0)c.bh(d);d=a.c.n();}g=0;}G(Ba(B(25),DM(a),a.c.bu()));}G(Ba(B(25),DM(a),a.c.bu()));}if(!f){if(d>=0)c.bh(d);return c;}G(Ba(B(25),DM(a),a.c.bu()-1|0));}
function F9(a,b){var c;c=D1(b);if(Bd(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return Sh(b&65535);}if(Bd(a,64)&&b>128){if(c)return ABF(b);if(Fd(b))return P6(b&65535);if(!Em(b))return SP(b&65535);return YD(b&65535);}}if(c)return ABN(b);if(Fd(b))return P6(b&65535);if(!Em(b))return JW(b&65535);return YD(b&65535);}
function Ee(a,b){var c,d;if(!b.jC()){if(!b.gD()){if(b.cm())return XD(b);return Wi(b);}if(b.cm())return Pv(b);return ZG(b);}c=b.jo();d=AA8(c);if(!b.gD()){if(b.cm())return E0(XD(b.dQ()),d);return E0(Wi(b.dQ()),d);}if(b.cm())return E0(Pv(b.dQ()),d);return E0(ZG(b.dQ()),d);}
function TS(b){return UK(b,0);}
function Kn(a){if(a.g5)a.eK.bD();}
function ZM(b){var c,d,e,f;c=J().a(B(383));d=0;while(true){e=b.gQ(B(384),d);if(e<0)break;f=e+2|0;c.a(b.cj(d,f)).a(B(385));d=f;}return c.a(b.fc(d)).a(B(384)).e();}
function Hd(a){return a.bV;}
function K3(a){return a.b$+1|0;}
function Ih(a){return a.P+1|0;}
function C6(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function Bd(a,b){return (a.bo&b)!=b?0:1;}
function Ok(a){M(a);a.fo=F(Bt,10);a.bV=(-1);a.b$=(-1);a.P=(-1);}
function JA(){CN.call(this);}
function ABB(a,b,c){var d=new JA();We(d,a,b,c);return d;}
function We(a,b,c,d){Ev(a,b,c,d);Ec();b.s(AEV);}
function Zp(a,b,c,d){var e;e=a.w.b(b,c,d);if(e<=0)e=b;return a.f.b(e,c,d);}
function PK(a,b){a.f=b;}
function Lv(){U.call(this);}
function I8(){var a=new Lv();Wt(a);return a;}
function Wt(a){BB(a);}
function Hh(){L.call(this);}
function AA3(){var a=new Hh();NG(a);return a;}
function NG(a){Q(a);}
function Yz(a){var b;b=ACX(a);b.y=1;return b;}
function Mz(){var a=this;DI.call(a);a.da=0;a.bq=null;a.et=0;a.i$=0.0;a.gc=0;}
function AAM(){var a=new Mz();UE(a);return a;}
function AGj(a){var b=new Mz();GB(b,a);return b;}
function AGk(a,b){var c=new Mz();Mc(c,a,b);return c;}
function Xe(a,b){return F(ED,b);}
function UE(a){GB(a,16);}
function GB(a,b){Mc(a,b,0.75);}
function LZ(b){var c,d;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;d=c|c>>1;d=d|d>>2;d=d|d>>4;d=d|d>>8;d=d|d>>16;return d+1|0;}
function Mc(a,b,c){var d;J6(a);if(b>=0&&c>0.0){d=LZ(b);a.da=0;a.bq=a.hk(d);a.i$=c;Fb(a);return;}G(Cv());}
function Fb(a){a.gc=a.bq.data.length*a.i$|0;}
function Xp(a,b){var c;c=Hs(a,b);if(c===null)return null;return c.ef;}
function Hs(a,b){var c,d,e;if(b===null)c=Gm(a);else{d=I4(b);e=d&(a.bq.data.length-1|0);c=FE(a,b,e,d);}return c;}
function FE(a,b,c,d){var e,f;e=a.bq.data[c];while(e!==null){if(e.eX==d){f=e.ft;if(Qj(b,f))break;}e=e.dk;}return e;}
function Gm(a){var b;b=a.bq.data[0];while(b!==null&&b.ft!==null){b=b.dk;}return b;}
function Pi(a,b,c){return a.lx(b,c);}
function WP(a,b,c){var d,e,f,g,h;if(b===null){d=Gm(a);if(d===null){a.et=a.et+1|0;d=a.hE(null,0,0);e=a.da+1|0;a.da=e;if(e>a.gc)a.hD();}}else{f=I4(b);g=f&(a.bq.data.length-1|0);d=FE(a,b,g,f);if(d===null){a.et=a.et+1|0;d=a.hE(b,g,f);e=a.da+1|0;a.da=e;if(e>a.gc)a.hD();}}h=d.ef;d.ef=c;return h;}
function Sf(a,b,c,d){var e;e=ACH(b,d);e.dk=a.bq.data[c];a.bq.data[c]=e;return e;}
function WC(a,b){var c,d,e,f,g,h,i;c=LZ(!b?1:b<<1);d=a.hk(c);e=0;while(e<a.bq.data.length){f=a.bq.data[e];a.bq.data[e]=null;while(f!==null){g=d.data;h=f.eX&(c-1|0);i=f.dk;f.dk=g[h];g[h]=f;f=i;}e=e+1|0;}a.bq=d;Fb(a);}
function S1(a){a.ks(a.bq.data.length);}
function I4(b){return b.hQ();}
function Qj(b,c){return b!==c&&!b.bz(c)?0:1;}
function G6(){R.call(this);this.c9=0;}
function ADv(a){var b=new G6();XE(b,a);return b;}
function XE(a,b){Bo(a);a.c9=b;}
function Qp(a,b,c,d){var e;e=!d.cT()?c.g()-b|0:d.q()-b|0;if(e<=0){d.C(a.c9,0);return a.f.b(b,c,d);}if(c.d(b)!=10)return (-1);d.C(a.c9,1);return a.f.b(b+1|0,c,d);}
function V1(a,b){var c;c=!b.bF(a.c9)?0:1;b.C(a.c9,(-1));return c;}
function H2(){C.call(this);}
function B9(b,c){var d,e,f;d=BN();e=SZ();f=0;while(f<b.g()){if(b.d(f)!=c)e.e7(b.d(f));if(!(b.d(f)!=c&&f!=(b.g()-1|0))&&e.g()>0){d.be(e.e());e.dS(0);}f=f+1|0;}return d;}
function Mp(){L.call(this);}
function ACG(){var a=new Mp();AAx(a);return a;}
function AAx(a){Q(a);}
function AAi(a){var b;b=ADH(a);b.y=1;return b;}
function EK(){var a=this;C.call(a);a.fS=0;a.gG=0;a.ih=null;}
function VU(a,b,c){var d=new EK();Vt(d,a,b,c);return d;}
function Vt(a,b,c,d){M(a);a.fS=b;a.gG=c;a.ih=d;}
function DU(){var a=this;C.call(a);a.cQ=0;a.d2=0;}
var AEU=null;var AES=null;function Bj(){Bj=Be(DU);US();}
function Ir(a,b){var c=new DU();JB(c,a,b);return c;}
function JB(a,b,c){Bj();M(a);a.cQ=b;a.d2=c;}
function O2(a){return a.cQ?0:1;}
function Xk(a){return a.cQ!=1?0:1;}
function Z6(a){return !a.hZ()&&!a.f9()?0:1;}
function Xn(a){return a.cQ!=2?0:1;}
function XG(a){return a.cQ!=3?0:1;}
function Vy(a){if(a.f0())return a.d2;G(ADc());}
function BM(b){Bj();return Ir(2,b);}
function Ub(a){switch(a.cQ){case 0:G(ACT());case 1:G(ADP());case 2:G(AB9(a.d2));case 3:G(ACU(a.d2));default:}}
function US(){AEU=Ir(0,0);AES=Ir(1,0);}
function FY(){R.call(this);this.cU=0;}
function ACw(a){var b=new FY();Ku(b,a);return b;}
function Ku(a,b){Bo(a);a.cU=b;}
function Sj(a,b,c,d){var e,f,g,h;e=!d.cT()?c.g():d.q();if(b>=e){d.C(a.cU,0);return a.f.b(b,c,d);}f=e-b|0;if(f==2&&c.d(b)==13){g=b+1|0;if(c.d(g)==10){d.C(a.cU,0);return a.f.b(b,c,d);}}a:{if(f==1){h=c.d(b);if(h==10)break a;if(h==13)break a;if(h==133)break a;if((h|1)==8233)break a;}return (-1);}d.C(a.cU,0);return a.f.b(b,c,d);}
function ST(a,b){var c;c=!b.bF(a.cU)?0:1;b.C(a.cU,(-1));return c;}
function JJ(){B_.call(this);}
function ACZ(){var a=new JJ();XL(a);return a;}
function XL(a){Fl(a);}
function UR(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function YI(a,b,c){var d;a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}d=1;break a;}d=0;}return d;}
function JI(){B_.call(this);}
function AB4(){var a=new JI();QY(a);return a;}
function QY(a){Fl(a);}
function Sk(a,b){return b!=10?0:1;}
function S_(a,b,c){return b!=10?0:1;}
function LG(){CP.call(this);}
function Nb(){L.call(this);}
function ACd(){var a=new Nb();XX(a);return a;}
function XX(a){Q(a);}
function TR(a){var b;b=AD4(a);b.y=1;return b;}
function CX(){var a=this;C.call(a);a.r=null;a.cR=0;a.bI=0;a.id=0;a.fR=0;a.bE=0;a.i=0;a.gN=0;a.cN=null;a.cg=null;a.k=0;a.dz=0;a.dJ=0;a.dy=0;a.hn=null;}
var AGl=null;var AGm=null;var AGn=0;function ACQ(a,b){var c=new CX();W3(c,a,b);return c;}
function W3(a,b,c){M(a);a.bI=1;a.hn=b;if((c&16)>0)b=ZM(b);else if((c&128)>0)b=Tm(b);a.r=$rt_createCharArray(b.g()+2|0);Gt(b.b3(),0,a.r,0,b.g());a.r.data[a.r.data.length-1|0]=0;a.r.data[a.r.data.length-2|0]=0;a.gN=a.r.data.length;a.cR=c;Cc(a);Cc(a);}
function AAd(a){return a.bE;}
function Sm(a,b){if(b>0&&b<3)a.bI=b;if(b==1)Ll(a);}
function RS(a,b){a.cR=b;a.i=a.bE;a.cg=a.cN;a.k=a.dJ+1|0;a.dy=a.dJ;Cc(a);}
function T6(a){return a.cN;}
function R4(a){return a.cN===null?0:1;}
function RI(a){return a.cg===null?0:1;}
function Ty(a){Cc(a);return a.fR;}
function S3(a){var b;b=a.cN;Cc(a);return b;}
function Qa(a){return a.i;}
function Vx(a){return a.fR;}
function Tm(b){return b;}
function Ll(a){a.i=a.bE;a.cg=a.cN;a.k=a.dy;a.dy=a.dJ;Cc(a);}
function Cc(a){var b,c,d,e,f,g,h,$$je;a.fR=a.bE;a.bE=a.i;a.cN=a.cg;a.dJ=a.dy;a.dy=a.k;while(true){b=0;a.i=a.k>=a.r.data.length?0:DL(a);a.cg=null;if(a.bI==4){if(a.i!=92)return;a.i=a.k>=a.r.data.length?0:a.r.data[Y(a)];switch(a.i){case 69:break;default:a.i=92;a.k=a.dz;return;}a.bI=a.id;a.i=a.k>(a.r.data.length-2|0)?0:DL(a);}a:{if(a.i!=92){if(a.bI==1)switch(a.i){case 36:a.i=(-536870876);break a;case 40:if(a.r.data[a.k]!=63){a.i=(-2147483608);break a;}Y(a);c=a.r.data[a.k];d=0;while(true){b:{if(d){d=0;switch(c){case 33:break;case 61:a.i
=(-134217688);Y(a);break b;default:G(Ba(B(25),a.e(),a.k));}a.i=(-67108824);Y(a);}else{switch(c){case 33:break;case 60:Y(a);c=a.r.data[a.k];d=1;break b;case 61:a.i=(-536870872);Y(a);break b;case 62:a.i=(-33554392);Y(a);break b;default:a.i=MM(a);if(a.i<256){a.cR=a.i;a.i=a.i<<16;a.i=(-1073741784)|a.i;break b;}a.i=a.i&255;a.cR=a.i;a.i=a.i<<16;a.i=(-16777176)|a.i;break b;}a.i=(-268435416);Y(a);}}if(!d)break;}break a;case 41:a.i=(-536870871);break a;case 42:case 43:case 63:e=a.k>=a.r.data.length?42:a.r.data[a.k];switch
(e){case 43:a.i=a.i|(-2147483648);Y(a);break a;case 63:a.i=a.i|(-1073741824);Y(a);break a;default:}a.i=a.i|(-536870912);break a;case 46:a.i=(-536870866);break a;case 91:a.i=(-536870821);a.d7(2);break a;case 93:if(a.bI!=2)break a;a.i=(-536870819);break a;case 94:a.i=(-536870818);break a;case 123:a.cg=Ln(a,a.i);break a;case 124:a.i=(-536870788);break a;default:}else if(a.bI==2)switch(a.i){case 38:a.i=(-536870874);break a;case 45:a.i=(-536870867);break a;case 91:a.i=(-536870821);break a;case 93:a.i=(-536870819);break a;case 94:a.i
=(-536870818);break a;default:}}else{f=a.k>=(a.r.data.length-2|0)?(-1):DL(a);c:{a.i=f;switch(a.i){case -1:G(Ba(B(25),a.e(),a.k));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.i
=HZ(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.bI!=1)break a;a.i=(-2147483648)|a.i;break a;case 65:a.i=(-2147483583);break a;case 66:a.i=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:G(Ba(B(25),a.e(),a.k));case 68:case 83:case 87:case 100:case 115:case 119:a.cg=Gj(Fa(a.r,
a.dz,1),0);a.i=0;break a;case 71:a.i=(-2147483577);break a;case 80:case 112:break c;case 81:a.id=a.bI;a.bI=4;b=1;break a;case 90:a.i=(-2147483558);break a;case 97:a.i=7;break a;case 98:a.i=(-2147483550);break a;case 99:if(a.k>=(a.r.data.length-2|0))G(Ba(B(25),a.e(),a.k));a.i=a.r.data[Y(a)]&31;break a;case 101:a.i=27;break a;case 102:a.i=12;break a;case 110:a.i=10;break a;case 114:a.i=13;break a;case 116:a.i=9;break a;case 117:a.i=Fw(a,4);break a;case 120:a.i=Fw(a,2);break a;case 122:a.i=(-2147483526);break a;default:}break a;}g
=Hx(a);h=0;if(a.i==80)h=1;try{a.cg=Gj(g,h);}catch($$e){$$je=Bb($$e);if($$je instanceof EE){G(Ba(B(25),a.e(),a.k));}else{throw $$e;}}a.i=0;}}if(b)continue;else break;}}
function Hx(a){var b,c,d;b=GX(10);if(a.k<(a.r.data.length-2|0)){if(a.r.data[a.k]!=123)return J().a(B(386)).a(Fa(a.r,Y(a),1)).e();Y(a);c=0;a:{while(a.k<(a.r.data.length-2|0)){c=a.r.data[Y(a)];if(c==125)break a;b.bn(c);}}if(c!=125)G(Ba(B(25),a.e(),a.k));}if(!b.g())G(Ba(B(25),a.e(),a.k));d=b.e();if(d.g()==1)return J().a(B(386)).a(d).e();b:{c:{if(d.g()>3){if(d.ek(B(386)))break c;if(d.ek(B(387)))break c;}break b;}d=d.fc(2);}return d;}
function Ln(a,b){var c,d,e,f,$$je;c=GX(4);d=(-1);e=2147483647;a:{while(true){if(a.k>=a.r.data.length)break a;b=a.r.data[Y(a)];if(b==125)break a;if(b==44&&d<0)try{d=CY(c.e(),10);c.j6(0,c.g());continue;}catch($$e){$$je=Bb($$e);if($$je instanceof Cs){break;}else{throw $$e;}}c.bn(b&65535);}G(Ba(B(25),a.e(),a.k));}if(b!=125)G(Ba(B(25),a.e(),a.k));if(c.g()>0)b:{try{e=CY(c.e(),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=Bb($$e);if($$je instanceof Cs){}else{throw $$e;}}G(Ba(B(25),a.e(),a.k));}else if(d<0)G(Ba(B(25),
a.e(),a.k));if((d|e|(e-d|0))<0)G(Ba(B(25),a.e(),a.k));f=a.k>=a.r.data.length?42:a.r.data[a.k];c:{switch(f){case 43:a.i=(-2147483525);Y(a);break c;case 63:a.i=(-1073741701);Y(a);break c;default:}a.i=(-536870789);}return AB1(d,e);}
function Wu(a){return a.hn;}
function Yd(a){return !a.bE&&!a.i&&a.k==a.gN&&!a.dh()?1:0;}
function DZ(b){return b<0?0:1;}
function YY(a){return !a.E()&&!a.dh()&&DZ(a.bE)?1:0;}
function Rn(a){return a.bE<=56319&&a.bE>=55296?1:0;}
function Ts(a){return a.bE<=57343&&a.bE>=56320?1:0;}
function Em(b){return b<=56319&&b>=55296?1:0;}
function Fd(b){return b<=57343&&b>=56320?1:0;}
function Fw(a,b){var c,d,e,f,$$je;c=GX(b);d=a.r.data.length-2|0;e=0;while(true){f=BY(e,b);if(f>=0)break;if(a.k>=d)break;c.bn(a.r.data[Y(a)]);e=e+1|0;}if(!f)a:{try{f=CY(c.e(),16);}catch($$e){$$je=Bb($$e);if($$je instanceof Cs){break a;}else{throw $$e;}}return f;}G(Ba(B(25),a.e(),a.k));}
function HZ(a){var b,c,d,e,f;b=3;c=1;d=a.r.data.length-2|0;e=E$(a.r.data[a.k],8);switch(e){case -1:break;default:if(e>3)b=2;Y(a);a:{while(true){if(c>=b)break a;if(a.k>=d)break a;f=E$(a.r.data[a.k],8);if(f<0)break;e=(e*8|0)+f|0;Y(a);c=c+1|0;}}return e;}G(Ba(B(25),a.e(),a.k));}
function MM(a){var b,c,d;b=1;c=a.cR;a:while(true){if(a.k>=a.r.data.length)G(Ba(B(25),a.e(),a.k));b:{c:{d=a.r.data[a.k];switch(d){case 41:Y(a);return c|256;case 45:if(!b)G(Ba(B(25),a.e(),a.k));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}Y(a);}Y(a);return c;}
function Y(a){a.dz=a.k;if(a.cR&4)HJ(a);else a.k=a.k+1|0;return a.dz;}
function HJ(a){var b;b=a.r.data.length-2|0;a.k=a.k+1|0;a:while(true){if(a.k<b&&Ja(a.r.data[a.k])){a.k=a.k+1|0;continue;}if(a.k>=b)break;if(a.r.data[a.k]!=35)break;a.k=a.k+1|0;while(true){if(a.k>=b)continue a;if(K7(a,a.r.data[a.k]))continue a;a.k=a.k+1|0;}}return a.k;}
function K7(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function KU(b){return AGl.oI(b);}
function TP(b){var c,d,e,f,g,h,i;c=b-44032|0;if(c>=0&&c<11172){d=4352+(c/588|0)|0;e=4449+((c%588|0)/28|0)|0;f=c%28|0;if(!f){g=$rt_createIntArray(2);h=g.data;h[0]=d;h[1]=e;}else{i=4519+f|0;g=$rt_createIntArray(3);h=g.data;h[0]=d;h[1]=e;h[2]=i;}return g;}return null;}
function Nl(b){var c;c=AGm.fK(b);return c==AGn?0:1;}
function Rf(b){return (b!=832?0:1)|(b!=833?0:1)|(b!=835?0:1)|(b!=836?0:1);}
function DL(a){var b,c,d;b=a.r.data[Y(a)];if(Bm(b)){c=a.dz+1|0;if(c<a.r.data.length){d=a.r.data[c];if(Bu(d)){Y(a);return BU(b,d);}}}return b;}
function Rk(a){return a.dJ;}
function Kh(){L.call(this);}
function ABK(){var a=new Kh();Y3(a);return a;}
function Y3(a){Q(a);}
function Ye(a){return By().J(65279,65279).J(65520,65533);}
function Jz(){var a=this;C.call(a);a.ho=null;a.iU=0;}
function ACo(a){var b=new Jz();T7(b,a);return b;}
function T7(a,b){M(a);a.ho=b;}
function MA(){Do.call(this);}
function AAY(){var a=new MA();XW(a);return a;}
function XW(a){L6(a);}
function QR(a){var b;b=LW(a).b9(1);b.y=1;return b;}
function Mm(){C.call(this);this.fL=0;}
function AD3(a){var b=new Mm();UF(b,a);return b;}
function UF(a,b){M(a);a.fL=b;}
function RL(a,b){var c,d;c=AA9();d=ADF(c);Jv(a,b,d);return c.kj(B(298));}
function Jv(a,b,c){Jp(a,b.kx(),c);GV(a,b.ld(),c);Hj(a,b.hV(),c);c.bL(B(388));c.bL(B(389));Mg(a,b.hV(),a.fL,c);c.bL(B(390));c.bL(B(391));IV(a,b.jE(),a.fL,c);c.bL(B(390));c.bL(B(390));Lw(a,b.jD(),c);}
function Jp(a,b,c){var d,e;a:{if(b!==null){d=b.S();while(true){if(!d.U())break a;e=d.R();c.o(J().a(B(392)).a(e).a(B(393)).e());}}}}
function GV(a,b,c){var d,e,f,g,h,i,j;c.o(B(394));c.o(B(395));d=0.0;e=0.0;f=0;while(f<5){g=b.data;h=9-f|0;if(!(g[f]<=0.0&&g[h]<=0.0)){c.o(B(396));i=J().a(B(397)).m(f).a(B(398)).a(Bl(g[f]*100.0,2)).a(B(399)).m(h).a(B(398));j=g[h]*100.0;i=i.a(Bl(j,2)).a(B(400)).e();c.o(i);c.o(B(401));}d=d+g[f];e=e+g[h];f=f+1|0;}c.o(B(402));i=J().a(B(403)).a(Bl(d*100.0,2)).a(B(404));j=e*100.0;i=i.a(Bl(j,2)).a(B(400)).e();c.o(i);c.o(B(401));c.o(B(405));}
function Hj(a,b,c){var d,e,f,g,h,i,j;d=SV(b);c.o(B(406));c.o(B(395));e=0.0;f=0;while(f<5){g=d.data;h=9-f|0;if(!(g[f]<=0.0&&g[h]<=0.0)){c.o(B(396));i=J().a(B(397)).m(f).a(B(398)).a(Bl(g[f]*100.0,3)).a(B(399)).m(h).a(B(398));j=g[h]*100.0;i=i.a(Bl(j,3)).a(B(400)).e();c.o(i);c.o(B(401));j=e+g[f];e=j+g[h];}f=f+1|0;}c.o(B(402));i=J().a(B(407));j=e*100.0;i=i.a(Bl(j,3)).a(B(400)).e();c.o(i);c.o(B(401));c.o(B(405));}
function Mg(a,b,c,d){var e,f,g,h;d.o(B(408));d.o(B(395));e=0;f=b.S();a:{while(true){if(!f.U())break a;g=f.R();d.o(B(396));h=J().a(B(397)).m(g.cv().bd()).a(B(398));h=h.a(g.cw().c4()).a(B(398));h=h.a(Bl(g.cw().bN()*100.0,3)).a(B(400)).e();d.o(h);d.o(B(401));e=e+1|0;if(e>=c)break;}}d.o(B(405));}
function IV(a,b,c,d){var e,f,g,h;d.o(B(409));d.o(B(395));e=0;f=b.S();a:{while(true){if(!f.U())break a;g=f.R();d.o(B(396));h=J().a(B(397)).m(g.cv().bd()).a(B(410));h=h.m(g.dx().bd()).a(B(398));h=h.a(g.cw().c4()).a(B(398));h=h.a(Bl(g.cw().bN()*100.0,3)).a(B(400)).e();d.o(h);d.o(B(401));e=e+1|0;if(e>=c)break;}}d.o(B(405));}
function Lw(a,b,c){var d,e,f,g,h,i,j,k,l,m;c.o(B(411));c.o(B(395));c.o(B(396));c.o(B(412));c.o(B(401));d=$rt_createDoubleArray(3);e=0;while(e<10){f=b.data;g=f[0].data[e]+f[1].data[e]+f[2].data[e];if(f[0].data[e]>0.0){c.o(B(396));h=J().a(B(397)).m(e).a(B(398));i=f[0].data[e];h=h.a(Bl(i,3)).a(B(413));i=f[1].data[e];j=h.a(Bl(i,3)).a(B(413));if(e>2&&e<7)h=B(25);else{i=f[2].data[e];h=Bl(i,3);}k=d.data;h=j.a(h).a(B(413));h=h.a(Bl(g,3)).a(B(414)).e();c.o(h);c.o(B(401));k[0]=k[0]+f[0].data[e];k[1]=k[1]+f[1].data[e];k[2]
=k[2]+f[2].data[e];}e=e+1|0;}k=d.data;l=k[1]+k[2];m=k[0]+l;c.o(B(402));h=J().a(B(415)).a(Bl(k[0],3)).a(B(416));i=k[1];h=h.a(Bl(i,3)).a(B(416));i=k[2];h=h.a(Bl(i,3)).a(B(416));h=h.a(Bl(m,3)).a(B(414)).e();c.o(h);c.o(B(401));c.o(B(405));}
function Bl(b,c){return $rt_str(b.toFixed(c));}
function B3(){var a=this;Z.call(a);a.cn=null;a.jT=0;}
function Wi(a){var b=new B3();R3(b,a);return b;}
function R3(a,b){BH(a);a.cn=b.c7();a.jT=b.G;}
function Nn(a,b,c){return !a.cn.j(c.d(b))?(-1):1;}
function Q5(a,b){if(b instanceof B2)return DW(a.cn,b.ck());if(b instanceof B3)return CW(a.cn,b.cn);if(b instanceof BK)return CW(a.cn,b.fh());if(!(b instanceof B1))return 1;return 0;}
function QG(a){return a.cn;}
function D9(){I.call(this);this.eY=0;}
function ADI(a){var b=new D9();H0(b,a);return b;}
function H0(a,b){P(a);a.eY=b;}
function QM(a,b){return a.G^(a.eY!=C_(b&65535)?0:1);}
function MI(){D9.call(this);}
function ABA(a){var b=new MI();Pd(b,a);return b;}
function Pd(a,b){H0(a,b);}
function Vm(a,b){return a.G^(!(a.eY>>C_(b&65535)&1)?0:1);}
function Kq(){Cl.call(this);this.iq=0;}
function ACU(a){var b=new Kq();YC(b,a);return b;}
function YC(a,b){Fr(a);a.iq=b;}
function T_(a){return J().a(B(417)).m(a.iq).e();}
function Je(){var a=this;I.call(a);a.eQ=0;a.gX=0;a.dZ=0;a.gf=0;a.bO=0;a.cx=0;a.v=null;a.F=null;}
function By(){var a=new Je();AAn(a);return a;}
function ADg(a,b){var c=new Je();Jm(c,a,b);return c;}
function ACV(a,b,c){var d=new Je();OJ(d,a,b,c);return d;}
function AAn(a){P(a);a.v=AAP();}
function Jm(a,b,c){P(a);a.v=AAP();a.eQ=b;a.gX=c;}
function OJ(a,b,c,d){Jm(a,c,d);a.b9(b);}
function Ni(a,b){a:{if(a.eQ){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.bO){a.v.eW(C6(b&65535));break a;}a.v.gm(C6(b&65535));break a;}if(a.gX&&b>128){a.dZ=1;b=Cn(Cm(b));}}}if(!(!Em(b)&&!Fd(b))){if(a.gf)a.K.eW(b-55296|0);else a.K.gm(b-55296|0);}if(a.bO)a.v.eW(b);else a.v.gm(b);if(!a.y&&D1(b))a.y=1;return a;}
function AAF(a,b){var c,d;if(!a.y&&b.y)a.y=1;if(a.gf){if(!b.W)a.K.cW(b.bc());else a.K.bv(b.bc());}else if(!b.W)a.K.cD(b.bc());else{a.K.cP(b.bc());a.K.bv(b.bc());a.W=a.W?0:1;a.gf=1;}if(!a.cx&&b.M()!==null){if(a.bO){if(!b.c3())a.v.cW(b.M());else a.v.bv(b.M());}else if(!b.c3())a.v.cD(b.M());else{a.v.cP(b.M());a.v.bv(b.M());a.G=a.G?0:1;a.bO=1;}}else{c=a.G;if(a.F!==null){d=a.F;if(!c)a.F=ADb(a,c,d,b);else a.F=AD8(a,c,d,b);}else{if(c&&!a.bO&&a.v.E())a.F=ACO(a,b);else if(!c)a.F=AA1(a,c,b);else a.F=ACq(a,c,b);a.cx=1;}}return a;}
function WW(a,b,c){if(b>c)G(Cv());a:{if(!a.eQ&&!(c>=55296&&b<=57343)){if(a.bO)a.v.jK(b,c+1|0);else a.v.d8(b,c+1|0);}else while(true){if(b>=(c+1|0))break a;a.bh(b);b=b+1|0;}}return a;}
function NV(a,b){var c,d;if(!a.y&&b.y)a.y=1;if(b.cm())a.dZ=1;if(!(a.W^b.W)){if(!a.W)a.K.cD(b.bc());else a.K.bv(b.bc());}else if(a.W)a.K.cW(b.bc());else{a.K.cP(b.bc());a.K.bv(b.bc());a.W=1;}if(!a.cx&&b.M()!==null){if(!(a.G^b.c3())){if(!a.G)a.v.cD(b.M());else a.v.bv(b.M());}else if(a.G)a.v.cW(b.M());else{a.v.cP(b.M());a.v.bv(b.M());a.G=1;}}else{c=a.G;if(a.F!==null){d=a.F;if(!c)a.F=ACE(a,c,d,b);else a.F=AD7(a,c,d,b);}else{if(!a.bO&&a.v.E()){if(!c)a.F=ACK(a,b);else a.F=ADn(a,b);}else if(!c)a.F=ABT(a,b,c);else a.F
=ABk(a,b,c);a.cx=1;}}}
function Xl(a,b){var c,d;if(!a.y&&b.y)a.y=1;if(b.cm())a.dZ=1;if(!(a.W^b.W)){if(!a.W)a.K.bv(b.bc());else a.K.cD(b.bc());}else if(!a.W)a.K.cW(b.bc());else{a.K.cP(b.bc());a.K.bv(b.bc());a.W=0;}if(!a.cx&&b.M()!==null){if(!(a.G^b.c3())){if(!a.G)a.v.bv(b.M());else a.v.cD(b.M());}else if(!a.G)a.v.cW(b.M());else{a.v.cP(b.M());a.v.bv(b.M());a.G=0;}}else{c=a.G;if(a.F!==null){d=a.F;if(!c)a.F=AD0(a,c,d,b);else a.F=ACu(a,c,d,b);}else{if(!a.bO&&a.v.E()){if(!c)a.F=ABv(a,b);else a.F=ABY(a,b);}else if(!c)a.F=ABP(a,b,c);else a.F
=ADY(a,b,c);a.cx=1;}}}
function SM(a,b){if(a.F!==null)return a.G^a.F.j(b);return a.G^a.v.bP(b);}
function AAH(a){if(!a.cx)return a.v;return null;}
function Vd(a){return a.K;}
function Wy(a){var b,c;if(a.F!==null)return a;b=a.M();c=ACN(a,b);return c.b9(a.c3());}
function Pu(a){var b,c;b=J();c=a.v.dr(0);while(c>=0){b.fH(CK(c));b.bn(124);c=a.v.dr(c+1|0);}if(b.g()>0)b.iA(b.g()-1|0);return b.e();}
function VP(a){return a.dZ;}
function KN(){U.call(this);}
function Yr(){var a=new KN();X4(a);return a;}
function X4(a){BB(a);}
function JF(){BW.call(this);}
function AC1(){var a=new JF();YP(a);return a;}
function YP(a){CS(a);}
function Xs(a,b){W4(b);}
function W4(b){$rt_putStderr(b);}
function J1(){var a=this;C.call(a);a.fZ=0;a.fw=0;a.hc=0;}
function AC9(){var a=new J1();Ny(a);return a;}
function Ny(a){M(a);}
function Mf(){Ci.call(this);}
function ADl(a,b){var c=new Mf();Yc(c,a,b);return c;}
function Yc(a,b,c){EU(a,b,c);}
$rt_packages([-1,"java",0,"util",1,"regex",0,"nio",3,"charset",0,"io",0,"lang",-1,"io",7,"github",8,"colemakmods",9,"keyboard"]);
$rt_metadata([C,"Object",6,0,[],0,3,0,["n0",function(){return Cf(this);},"hQ",function(){return TB(this);},"bz",function(b){return N8(this,b);},"e",function(){return R6(this);},"l7",function(){return Es(this);},"dI",function(){return AAp(this);}],L,0,C,[],1,0,0,["kZ",function(b){return Tv(this,b);}],M6,0,L,[],0,0,0,["u",function(){return TE(this);}],JZ,0,L,[],0,0,0,["u",function(){return Ol(this);}],CM,0,C,[],0,3,0,["ee",function(){return VI(this);},"dR",function(){return T1(this);},"j8",function(){return WO(this);
},"ev",function(){XS(this);},"hu",function(b){ZU(this,b);}],Br,0,CM,[],0,3,0,0,U,0,Br,[],0,3,0,0,C5,"IndexOutOfBoundsException",6,U,[],0,3,0,0,Ct,0,C,[],1,0,0,0,I,0,Ct,[],1,0,E6,["M",function(){return Rl(this);},"bc",function(){return PQ(this);},"jC",function(){return Ob(this);},"gD",function(){return XB(this);},"c7",function(){return Vw(this);},"jo",function(){return Qi(this);},"dQ",function(){return Rw(this);},"cm",function(){return YO(this);},"b9",function(b){return WS(this,b);},"c3",function(){return VN(this);
}],MQ,"AbstractCharClass$LazyJavaWhitespace$1",2,I,[],0,0,0,["j",function(b){return PU(this,b);}],BZ,"IOException",5,Br,[],0,3,0,0,Cl,0,BZ,[],0,3,0,0,JC,"MalformedInputException",4,Cl,[],0,3,0,["dR",function(){return Vi(this);}],Ks,0,L,[],0,0,0,["u",function(){return UG(this);}],H1,0,C,[],0,3,0,["dq",function(){return UQ(this);},"dE",function(b){return UZ(this,b);},"gh",function(b){Wg(this,b);},"eN",function(b){AAS(this,b);}],BS,0,C,[],3,3,0,0,BP,0,C,[BS],1,3,0,0,BE,0,C,[],3,3,0,0,C$,0,BP,[BE],0,3,B7,["e",function()
{return X9(this);}],Kc,"CloneNotSupportedException",6,Br,[],0,3,0,0,Cg,0,C,[],0,0,ACk,0,R,0,C,[],1,0,Jk,["bi",function(b,c,d){return C7(this,b,c,d);},"bg",function(b,c,d,e){return Db(this,b,c,d,e);},"gH",function(b){S5(this,b);},"cO",function(){return RP(this);},"kk",function(){return UX(this);},"s",function(b){FN(this,b);},"ba",function(b){return WY(this,b);},"cl",function(){return YU(this);},"bD",function(){GN(this);}],W,0,R,[],0,0,0,["b",function(b,c,d){return W5(this,b,c,d);},"s",function(b){Q3(this,b);
},"ba",function(b){return AAQ(this,b);},"x",function(b){return Su(this,b);},"bD",function(){SA(this);}],CL,0,W,[],0,0,0,["b",function(b,c,d){return OE(this,b,c,d);},"bi",function(b,c,d){return NH(this,b,c,d);},"bg",function(b,c,d,e){return Ug(this,b,c,d,e);},"ba",function(b){return AAD(this,b);},"cl",function(){return Q8(this);},"bD",function(){Y2(this);}],BF,0,C,[],3,3,0,0,Dl,0,C,[BF],3,3,0,0,En,0,C,[Dl],3,3,0,0,BL,0,C,[BF],3,3,0,0,KE,0,C,[En,BL],3,3,0,0,Gk,0,BP,[BE],0,3,Ve,0,Gd,0,C,[BF],3,3,0,0,EB,0,C,[],
3,3,0,0,Jc,0,C,[],0,0,0,["i4",function(b,c){Yh(this,b,c);},"fK",function(b){return NW(this,b);}],Eg,0,L,[],0,0,0,["u",function(){return Ji(this);}],DO,0,L,[],0,0,0,["u",function(){return GA(this);}],Kk,0,DO,[],0,0,0,["u",function(){return Xm(this);}],Hm,0,CL,[],0,0,0,["bi",function(b,c,d){return VY(this,b,c,d);},"bg",function(b,c,d,e){return AAz(this,b,c,d,e);},"cl",function(){return SQ(this);}],L7,"BufferOverflowException",4,U,[],0,3,0,0,CE,0,W,[],0,0,0,["b",function(b,c,d){return PL(this,b,c,d);},"s",function(b)
{Sz(this,b);},"c5",function(b){return Tg(this,b);},"x",function(b){return Ti(this,b);}],Dw,0,L,[],0,0,0,["u",function(){return M$(this);}],KB,0,Dw,[],0,0,0,["u",function(){return O9(this);}],KT,"AbstractCharClass$1",2,I,[],0,0,0,["j",function(b){return Vc(this,b);}],KQ,"AbstractCharClass$2",2,I,[],0,0,0,["j",function(b){return Oy(this,b);}],Kd,0,L,[],0,0,0,["u",function(){return PR(this);}],Z,0,R,[],1,0,0,["b",function(b,c,d){return Z4(this,b,c,d);},"bb",function(){return VM(this);},"x",function(b){return Y7(this,
b);}],Hz,0,Z,[],0,0,0,["I",function(b,c){return Uo(this,b,c);}],BO,0,R,[],1,0,0,["eg",function(){return AAk(this);},"ba",function(b){return Uh(this,b);},"x",function(b){return Xq(this,b);},"bD",function(){Op(this);}],Bx,0,BO,[],0,0,0,["b",function(b,c,d){return N$(this,b,c,d);}],Cd,0,Bx,[],0,0,0,["b",function(b,c,d){return Qv(this,b,c,d);}]]);
$rt_metadata([Jj,0,Cd,[],0,0,0,["b",function(b,c,d){return Uk(this,b,c,d);}],Dg,0,C,[],3,3,0,0,B$,0,CM,[],0,3,0,0,CP,0,B$,[],0,3,0,0,Dy,0,C,[BL],3,3,0,0,Mo,"StringIndexOutOfBoundsException",6,C5,[],0,3,0,0,EE,"MissingResourceException",1,U,[],0,3,0,0,J3,0,C,[],0,3,0,0,JK,"AbstractCharClass$LazyJavaLetterOrDigit$1",2,I,[],0,0,0,["j",function(b){return Oe(this,b);}],IE,"CharClass$18",2,I,[],0,0,0,["j",function(b){return AAB(this,b);},"e",function(){return WT(this);}],D0,0,C,[],1,3,0,["mn",function(b){return K$(this,
b);},"f3",function(b){Xf(this,b);},"m8",function(b){return HS(this,b);},"fz",function(b){XJ(this,b);},"nc",function(b,c,d){return FC(this,b,c,d);},"oS",function(b){return MC(this,b);},"oG",function(){return LD(this);},"lE",function(b){return I9(this,b);},"mx",function(b){return Ep(this,b);},"kN",function(b){return O$(this,b);},"kH",function(){UO(this);}],Bv,0,BO,[],0,0,0,["b",function(b,c,d){return OB(this,b,c,d);}],Ne,0,Bv,[],0,0,0,["b",function(b,c,d){return S$(this,b,c,d);}],LI,0,CE,[],0,0,0,["b",function(b,
c,d){return NE(this,b,c,d);}],IB,0,I,[],0,0,0,["j",function(b){return Tb(this,b);}],D2,0,C,[],4,3,Y4,0,IC,0,I,[],0,0,0,["j",function(b){return Wk(this,b);}],ID,0,I,[],0,0,0,["j",function(b){return AAW(this,b);}],Lu,0,C,[],4,3,0,0,L_,0,L,[],0,0,0,["u",function(){return VW(this);}],Jl,0,I,[],0,0,0,["j",function(b){return Xi(this,b);}],IF,0,I,[],0,0,0,["j",function(b){return Rs(this,b);}],GF,0,Z,[],0,0,0,["I",function(b,c){return NJ(this,b,c);}],IG,0,I,[],0,0,0,["j",function(b){return RV(this,b);}],Mr,0,BO,[],
0,0,0,["b",function(b,c,d){return AAf(this,b,c,d);},"bi",function(b,c,d){return VC(this,b,c,d);}],IH,0,I,[],0,0,0,["j",function(b){return Zd(this,b);}],Lo,"AbstractCharClass$LazyJavaDefined$1",2,I,[],0,0,0,["j",function(b){return YT(this,b);}],IA,0,I,[],0,0,0,["j",function(b){return Wj(this,b);}],Bt,0,R,[],0,0,Ec,["b",function(b,c,d){return Qr(this,b,c,d);},"c$",function(){return Od(this);},"x",function(b){return Rr(this,b);}],Fx,0,Bt,[],0,0,0,["b",function(b,c,d){return RG(this,b,c,d);}],CH,0,C,[BS,Dg],0,0,
0,["o7",function(b){return ES(this,b);},"d_",function(b,c){return Fu(this,b,c);},"oH",function(b){return Ip(this,b);},"g2",function(b,c){return PM(this,b,c);},"jH",function(b,c,d){return Yv(this,b,c,d);},"nV",function(b){return Kj(this,b);},"i2",function(b,c){return HE(this,b,c);},"mk",function(b){return F$(this,b);},"fW",function(b,c){return F6(this,b,c);},"oB",function(b){return L8(this,b);},"hR",function(b,c){return Ko(this,b,c);},"b2",function(b){ET(this,b);},"e",function(){return EF(this);},"g",function()
{return FT(this);},"d",function(b){return Hg(this,b);},"f6",function(b,c,d){return F1(this,b,c,d);},"fb",function(b,c,d,e){return EG(this,b,c,d,e);},"o2",function(b){return EV(this,b);},"g7",function(b,c,d,e){K4(this,b,c,d,e);},"dS",function(b){FH(this,b);},"nw",function(b){return Ld(this,b);},"nB",function(b,c){return LH(this,b,c);},"nT",function(b,c){BC(this,b,c);}],Dd,0,C,[],3,3,0,0,GW,0,CH,[Dd],0,3,0,["a",function(b){return Ou(this,b);},"m",function(b){return Pj(this,b);},"im",function(b){return Xr(this,
b);},"bn",function(b){return Og(this,b);},"jS",function(b,c,d){return Tq(this,b,c,d);},"fH",function(b){return U9(this,b);},"ie",function(b){return OC(this,b);},"lf",function(b,c){return VA(this,b,c);},"l0",function(b,c,d,e){return S6(this,b,c,d,e);},"j_",function(b,c){return ZH(this,b,c);},"lr",function(b,c){return P9(this,b,c);},"j6",function(b,c){return XZ(this,b,c);},"iA",function(b){return VT(this,b);},"j7",function(b,c){return Z0(this,b,c);},"dS",function(b){AAb(this,b);},"g7",function(b,c,d,e){U0(this,
b,c,d,e);},"fb",function(b,c,d,e){return ZS(this,b,c,d,e);},"f6",function(b,c,d){return Um(this,b,c,d);},"g",function(){return Q_(this);},"e",function(){return RK(this);},"b2",function(b){AAg(this,b);},"hR",function(b,c){return Oz(this,b,c);},"fW",function(b,c){return NF(this,b,c);},"i2",function(b,c){return Xu(this,b,c);},"d_",function(b,c){return AAE(this,b,c);}],DH,0,Eg,[],0,0,0,["u",function(){return KK(this);}],KY,"ConcurrentModificationException",1,U,[],0,3,0,0,KL,0,W,[],0,0,0,["b",function(b,c,d){return Qk(this,
b,c,d);},"s",function(b){QB(this,b);},"x",function(b){return R0(this,b);},"ba",function(b){return Rj(this,b);}],Gc,0,C,[],3,3,0,0,Dv,0,C,[Gc],3,3,0,0,E8,0,C,[],3,3,0,0,BW,0,C,[Dv,E8],1,3,0,["dg",function(b,c,d){OT(this,b,c,d);}],MD,0,BW,[],0,3,0,["e5",function(b){OS(this,b);},"dg",function(b,c,d){Qe(this,b,c,d);},"b2",function(b){ER(this,b);},"kj",function(b){return Xg(this,b);}],GZ,0,W,[],0,0,0,["s",function(b){VF(this,b);},"b",function(b,c,d){return X$(this,b,c,d);}],Mq,0,Bv,[],0,0,0,["b",function(b,c,d){
return Zl(this,b,c,d);}],Co,0,Bt,[],0,0,0,["b",function(b,c,d){return XF(this,b,c,d);}],Ie,0,B$,[],0,3,0,0,J8,0,Bv,[],0,0,0,["b",function(b,c,d){return OR(this,b,c,d);}],Kt,0,Z,[],0,0,0,["I",function(b,c){return UJ(this,b,c);},"bi",function(b,c,d){return VD(this,b,c,d);},"bg",function(b,c,d,e){return SJ(this,b,c,d,e);},"x",function(b){return Pf(this,b);}],Iq,0,CH,[Dd],0,3,0,["eM",function(b){return TW(this,b);},"e7",function(b){return VG(this,b);},"l2",function(b,c,d){return Zk(this,b,c,d);},"kD",function(b)
{return UN(this,b);},"jL",function(b,c,d,e){return On(this,b,c,d,e);},"lQ",function(b,c){return XY(this,b,c);},"k4",function(b,c){return TZ(this,b,c);},"dS",function(b){OX(this,b);},"fb",function(b,c,d,e){return VS(this,b,c,d,e);},"f6",function(b,c,d){return Ro(this,b,c,d);},"d",function(b){return NZ(this,b);},"g",function(){return Z7(this);},"e",function(){return RE(this);},"b2",function(b){R$(this,b);},"fW",function(b,c){return VJ(this,b,c);},"d_",function(b,c){return Om(this,b,c);}],CD,0,C,[],1,3,0,["mc",
function(){return Ke(this);},"oT",function(){return BG(this);},"mg",function(b){return FI(this,b);},"mw",function(){return KF(this);},"ng",function(){return IY(this);},"oO",function(){return MJ(this);},"nM",function(){return X(this);},"nd",function(){return BT(this);}],Gw,"AbstractCharClass$LazyJavaUnicodeIdentifierPart$1",2,I,[],0,0,0,["j",function(b){return Y5(this,b);}]]);
$rt_metadata([Da,0,C,[],4,0,ACl,["o4",function(b){return LC(this,b);}],Gp,0,L,[],0,0,0,["u",function(){return WF(this);}],Ci,0,W,[],0,0,0,["s",function(b){YX(this,b);},"b",function(b,c,d){return QC(this,b,c,d);},"jk",function(){return FP(this);},"gi",function(b,c,d){return YL(this,b,c,d);},"ba",function(b){return ZR(this,b);},"x",function(b){return SI(this,b);}],H_,0,Ci,[],0,0,0,0,CO,0,C,[BE,BS],1,3,0,["md",function(){return MO(this);}],B4,"KeyboardLayout$KeyboardType",10,CO,[],12,3,DV,0,CC,0,CP,[],0,3,0,0,K5,
0,CC,[],0,3,0,0,MB,0,Bt,[],0,0,0,["b",function(b,c,d){return S0(this,b,c,d);}],J9,0,L,[],0,0,0,["u",function(){return U7(this);}],Ea,0,W,[],0,0,0,["b",function(b,c,d){return QD(this,b,c,d);},"x",function(b){return Th(this,b);}],BV,0,Ea,[],0,0,0,["b",function(b,c,d){return T4(this,b,c,d);},"s",function(b){SF(this,b);}],GP,0,BV,[],0,0,0,["b",function(b,c,d){return QP(this,b,c,d);},"x",function(b){return W$(this,b);}],Cy,0,C,[Dv],1,3,0,0,M5,0,Cy,[],0,3,0,["kr",function(b,c,d){return TF(this,b,c,d);},"bK",function()
{Ns(this);},"n2",function(){MT(this);}],Kx,0,BV,[],0,0,0,["b",function(b,c,d){return Re(this,b,c,d);},"x",function(b){return VZ(this,b);}],Fo,0,C,[],3,3,0,0,HV,0,C,[Fo],0,0,0,["U",function(){return Pb(this);},"R",function(){return WH(this);},"mX",function(){Jo(this);}],Fk,0,C,[Dl],3,3,0,0,DK,0,C,[BL],3,3,0,0,D7,0,C,[BL],3,3,0,0,Fz,0,C,[BL],3,3,0,0,D3,0,C,[BL],3,3,0,0,JL,0,C,[Fk,Gd,BL,DK,D7,Fz,D3,Dy],3,3,0,0,I2,0,C,[],0,3,0,["c4",function(){return T2(this);},"dt",function(){return AAs(this);},"bN",function()
{return Yk(this);}],B6,0,C,[],3,3,0,0,He,"Quantifier",2,Ct,[B6],0,0,0,["c0",function(){return WR(this);},"c2",function(){return W_(this);},"e",function(){return PH(this);}],DX,"UnsupportedOperationException",6,U,[],0,3,0,0,MN,"ReadOnlyBufferException",3,DX,[],0,3,0,0,GT,"AbstractCharClass$LazyJavaUpperCase$1",2,I,[],0,0,0,["j",function(b){return QJ(this,b);}],Hy,0,C,[],4,3,0,0,In,0,C,[],0,3,0,0,G3,0,C,[],0,0,0,0,JR,0,C,[],4,0,0,0,D4,0,D0,[],1,3,0,["jA",function(b,c){return WV(this,b,c);}],HP,0,D4,[],0,3,0,["kw",
function(b,c,d,e,f,g,h){return Yq(this,b,c,d,e,f,g,h);},"mq",function(b){return Cj(this,b);}],H6,0,CC,[],0,3,0,0,H5,0,L,[],0,0,0,["u",function(){return Uq(this);}],FD,0,C,[],3,3,0,0,DC,0,C,[FD],3,3,0,0,Dn,0,C,[DC],1,3,0,["E",function(){return UY(this);},"jq",function(b){return U8(this,b);},"ip",function(b){return QS(this,b);}],Ng,0,Bx,[],0,0,0,["b",function(b,c,d){return PF(this,b,c,d);}],Jr,0,C,[],0,3,0,["dq",function(){return Pm(this);},"dE",function(b){return Rp(this,b);},"gh",function(b){W9(this,b);},"eN",
function(b){S9(this,b);}],JU,0,C,[],4,3,0,0,Cb,0,Bx,[],0,0,0,["b",function(b,c,d){return NO(this,b,c,d);},"s",function(b){AAR(this,b);}],KM,0,Cb,[],0,0,0,["b",function(b,c,d){return OQ(this,b,c,d);}],Io,"AbstractCharClass$LazyJavaIdentifierIgnorable$1",2,I,[],0,0,0,["j",function(b){return QH(this,b);}],Gn,0,C,[],3,3,0,0,H7,"AbstractCharClass$LazyJavaLetter$1",2,I,[],0,0,0,["j",function(b){return X8(this,b);}],K2,0,Bx,[],0,0,0,["b",function(b,c,d){return QU(this,b,c,d);}]]);
$rt_metadata([Js,0,C,[],4,0,0,0,G9,"AbstractCharClass$LazyJavaUnicodeIdentifierStart$1",2,I,[],0,0,0,["j",function(b){return TC(this,b);}],IW,0,C,[],4,3,0,0,G2,0,C,[],0,3,0,["j4",function(b,c,d){R1(this,b,c,d);},"l1",function(){return Nr(this);},"cd",function(b){return Pn(this,b);},"dM",function(b,c){return AAX(this,b,c);},"dp",function(){return ZD(this);},"iy",function(){return QQ(this);},"co",function(){return Ww(this);},"k_",function(b){return OV(this,b);},"jO",function(b,c){Zv(this,b,c);},"l3",function(b,
c){return YW(this,b,c);},"lJ",function(b,c,d){Uy(this,b,c,d);},"k$",function(b){return RX(this,b);},"kz",function(){return Xv(this);},"kt",function(b){TU(this,b);}],Eh,0,DH,[],0,0,0,["u",function(){return Gv(this);}],Mu,0,Eh,[],0,0,0,["u",function(){return Or(this);}],JH,0,L,[],0,0,0,["u",function(){return WQ(this);}],Ej,0,C,[],3,3,0,0,D$,0,C,[Ej,B6],0,0,0,0,ED,0,D$,[],0,0,0,0,LS,0,BV,[],0,0,0,["b",function(b,c,d){return St(this,b,c,d);},"x",function(b){return AAJ(this,b);}],Dj,0,C,[],1,3,0,["m7",function(b)
{LP(this,b);},"mF",function(b){return Go(this,b);},"f3",function(b){Zi(this,b);},"oW",function(b){return LV(this,b);},"fz",function(b){Ys(this,b);},"os",function(b,c,d){return Ic(this,b,c,d);},"mz",function(b){return G4(this,b);},"jy",function(b){return N5(this,b);}],Mw,0,Z,[],0,0,0,["I",function(b,c){return TT(this,b,c);},"bi",function(b,c,d){return Q4(this,b,c,d);},"bg",function(b,c,d,e){return Wz(this,b,c,d,e);},"ba",function(b){return XR(this,b);},"jt",function(b,c,d){return Xh(this,b,c,d);},"jF",function(b,
c,d){return VK(this,b,c,d);},"fY",function(b,c){return X_(this,b,c);}],Lh,0,R,[],0,0,0,["b",function(b,c,d){return Qs(this,b,c,d);},"x",function(b){return Nt(this,b);}],Lj,"ArrayStoreException",6,U,[],0,3,0,0,CN,0,Bv,[],0,0,0,["b",function(b,c,d){return U_(this,b,c,d);},"s",function(b){XU(this,b);}],J4,0,L,[],0,0,0,["u",function(){return V6(this);}],DJ,0,CD,[BE],1,3,0,["lu",function(b,c,d){return Tp(this,b,c,d);},"hY",function(b,c,d){return XN(this,b,c,d);},"mZ",function(b){return KS(this,b);},"nN",function()
{return EW(this);},"er",function(b){return VL(this,b);}],Lx,0,DJ,[],0,0,0,["dN",function(){return Xj(this);}],DY,0,C,[],3,3,0,0,Fm,0,C,[DY],0,0,0,["C",function(b,c){Xy(this,b,c);},"bF",function(b){return AAV(this,b);},"ec",function(){return NT(this);},"gg",function(b){return Z9(this,b);},"bQ",function(b,c){Tf(this,b,c);},"fF",function(b,c){Q6(this,b,c);},"cE",function(b){return Sl(this,b);},"eB",function(b){return SD(this,b);},"j1",function(b){return ZJ(this,b);},"hH",function(){return Sp(this);},"e3",function(b)
{return SK(this,b);},"kM",function(){NR(this);},"hT",function(b){return Ot(this,b);},"b6",function(b,c){Sw(this,b,c);},"n4",function(b){Ga(this,b);},"jQ",function(){X1(this);},"jz",function(){return X3(this);},"h_",function(b,c,d){Zn(this,b,c,d);},"ku",function(){TD(this);},"o3",function(b,c){Ls(this,b,c);},"kF",function(b){T0(this,b);},"bw",function(){return RO(this);},"q",function(){return NP(this);},"d7",function(b){Ux(this,b);},"ij",function(){return Wp(this);},"cT",function(){return XO(this);},"dd",function()
{return Os(this);},"lF",function(){return P2(this);}],I0,0,Z,[],0,0,0,["I",function(b,c){return ZP(this,b,c);}],GJ,0,C,[],0,3,0,["ck",function(){return O6(this);},"dt",function(){return OO(this);},"bN",function(){return OP(this);}],GL,"AbstractCharClass$LazyJavaJavaIdentifierPart$1",2,I,[],0,0,0,["j",function(b){return ZT(this,b);}],Ib,0,C,[],0,3,0,["fq",function(){Xc(this);},"mo",function(b){Kg(this,b);}],IX,0,C,[],4,3,0,0,Du,0,C,[BE],1,3,0,["lE",function(b){return G1(this,b);}],C8,0,C,[],0,3,B8,0,Kz,"BufferUnderflowException",
4,U,[],0,3,0,0,BR,"IllegalArgumentException",6,U,[],0,3,0,0,JS,"IllegalCharsetNameException",4,BR,[],0,3,0,0,HD,0,R,[],0,0,0,["b",function(b,c,d){return Sx(this,b,c,d);},"x",function(b){return WB(this,b);}],Ge,0,C,[BF],3,3,0,0,Kp,0,C,[BF],1,3,0,0,Dx,0,BW,[],0,3,0,0,K1,0,Dx,[],0,3,0,["dg",function(b,c,d){PP(this,b,c,d);},"m0",function(){return Kb(this);},"mU",function(b,c,d){EX(this,b,c,d);},"kl",function(b){Us(this,b);},"bL",function(b){YR(this,b);},"o",function(b){Sv(this,b);},"ly",function(b){ZC(this,b);},
"lG",function(){S2(this);},"l8",function(){Dz(this);}],FK,0,C,[],3,3,0,0,HR,0,BV,[],0,0,0,["b",function(b,c,d){return N7(this,b,c,d);},"x",function(b){return TI(this,b);}],K0,0,CE,[],0,0,0,["b",function(b,c,d){return S8(this,b,c,d);},"bi",function(b,c,d){return W2(this,b,c,d);},"bg",function(b,c,d,e){return Pa(this,b,c,d,e);},"ba",function(b){return Ox(this,b);}],I6,0,L,[],0,0,0,["u",function(){return T9(this);}],Iz,0,BO,[],0,0,0,["b",function(b,c,d){return Q9(this,b,c,d);},"bi",function(b,c,d){return NX(this,
b,c,d);},"nG",function(b,c,d){return Fh(this,b,c,d);},"oQ",function(b,c,d){return K8(this,b,c,d);}],JN,0,L,[],0,0,0,["u",function(){return Z$(this);}],KC,0,C,[BF],1,3,0,0,DS,0,C,[],4,3,ME,0,LA,0,L,[],0,0,0,["u",function(){return Sa(this);}],DI,0,C,[EB],1,3,0,0,Iv,0,R,[],0,0,0,["b",function(b,c,d){return Za(this,b,c,d);},"x",function(b){return AAv(this,b);}],KV,0,Bx,[],0,0,0,["b",function(b,c,d){return ZQ(this,b,c,d);},"bi",function(b,c,d){return Pk(this,b,c,d);}],EH,0,C,[],3,3,0,0,KW,0,C,[EH],0,3,0,["lD",function()
{return QX(this);},"jU",function(b){return Ur(this,b);},"bY",function(){return Z3(this);},"eq",function(){return W7(this);},"kO",function(){return Rh(this);},"eC",function(){return N2(this);},"kb",function(){return SB(this);}]]);
$rt_metadata([LB,0,C,[B6,BS],0,3,0,["gm",function(b){Ss(this,b);},"d8",function(b,c){XT(this,b,c);},"ni",function(b){return C9(this,b);},"mb",function(b){return CV(this,b);},"eW",function(b){AAN(this,b);},"jK",function(b,c){O5(this,b,c);},"bP",function(b){return Pc(this,b);},"dr",function(b){return ZL(this,b);},"lh",function(b){return RQ(this,b);},"b2",function(b){C2(this,b);},"nv",function(){CI(this);},"ke",function(b){return QW(this,b);},"bv",function(b){Yf(this,b);},"cW",function(b){Z5(this,b);},"cD",function(b)
{X2(this,b);},"cP",function(b){AAe(this,b);},"E",function(){return Yn(this);}],F7,0,C,[],3,3,0,0,GR,"AbstractCharClass$LazyJavaJavaIdentifierStart$1",2,I,[],0,0,0,["j",function(b){return T8(this,b);}],Gb,0,Bt,[],0,0,0,["b",function(b,c,d){return O8(this,b,c,d);},"x",function(b){return Ua(this,b);}],Bf,0,C,[],0,3,Bh,0,D6,0,BP,[BE],0,3,AFS,0,H8,0,C,[],0,3,0,0,B2,0,Z,[],0,0,0,["bb",function(){return Zm(this);},"I",function(b,c){return Xw(this,b,c);},"bi",function(b,c,d){return UV(this,b,c,d);},"bg",function(b,
c,d,e){return Zz(this,b,c,d,e);},"ck",function(){return Rg(this);},"ba",function(b){return Wq(this,b);}],GD,0,Z,[],0,0,0,["I",function(b,c){return Uu(this,b,c);}],Mk,0,BW,[],0,0,0,["e5",function(b){N_(this,b);}],DF,0,C,[],4,3,0,0,IJ,0,I,[],0,0,0,["j",function(b){return Ut(this,b);}],IQ,0,I,[],0,0,0,["j",function(b){return Nj(this,b);}],IL,0,I,[],0,0,0,["j",function(b){return Tr(this,b);}],IK,0,I,[],0,0,0,["j",function(b){return NI(this,b);}],JE,0,L,[],0,0,0,["u",function(){return AAT(this);}],IM,0,I,[],0,0,
0,["j",function(b){return W8(this,b);}],Jw,0,L,[],0,0,0,["u",function(){return YN(this);}],IT,0,I,[],0,0,0,["j",function(b){return Tc(this,b);}],IP,0,I,[],0,0,0,["j",function(b){return Uv(this,b);}],IO,0,I,[],0,0,0,["j",function(b){return NK(this,b);}],Jb,0,W,[],4,0,0,["b",function(b,c,d){return Qd(this,b,c,d);},"s",function(b){T3(this,b);},"cO",function(){return Nh(this);},"x",function(b){return Z1(this,b);}],IR,0,I,[],0,0,0,["j",function(b){return Xa(this,b);}],Gu,0,C,[DY],4,3,0,["n5",function(b){return Et(this,
b);},"nz",function(b){return Jy(this,b);},"m1",function(){return K6(this);},"e3",function(b){return MZ(this,b);},"gg",function(b){return Hn(this,b);},"hH",function(){return Mi(this);},"ec",function(){return Kl(this);},"dd",function(){return HK(this);}],B0,0,C,[BE],0,3,N,0,K_,0,W,[],0,0,0,["b",function(b,c,d){return Zx(this,b,c,d);},"s",function(b){RF(this,b);},"cO",function(){return PV(this);},"x",function(b){return RC(this,b);}],GQ,0,Z,[],0,0,0,["I",function(b,c){return Oq(this,b,c);}],B1,0,Z,[],0,0,0,["I",
function(b,c){return Tj(this,b,c);},"bi",function(b,c,d){return Px(this,b,c,d);},"bg",function(b,c,d,e){return R8(this,b,c,d,e);},"go",function(){return Oa(this);},"ba",function(b){return SY(this,b);}],Ha,"AbstractCharClass$LazyJavaLowerCase$1",2,I,[],0,0,0,["j",function(b){return XC(this,b);}],Mv,0,L,[],0,0,0,["u",function(){return Nz(this);}],BK,0,W,[],0,0,0,["b",function(b,c,d){return U3(this,b,c,d);},"j",function(b){return V9(this,b);},"ba",function(b){return P7(this,b);},"fh",function(){return Zs(this);
},"s",function(b){Vl(this,b);},"x",function(b){return Vn(this,b);}],G0,0,BK,[],0,0,0,["j",function(b){return Y8(this,b);}],Nf,0,L,[],0,0,0,["u",function(){return NU(this);}],B_,0,C,[],1,0,0,0,E7,0,W,[],0,0,0,["s",function(b){NM(this,b);},"jk",function(){return FL(this);},"b",function(b,c,d){return NN(this,b,c,d);},"ba",function(b){return RD(this,b);},"x",function(b){return WJ(this,b);}],Ds,0,CD,[BE,Dd,Dg,Gn],1,3,0,["iG",function(b,c,d){return PO(this,b,c,d);},"kB",function(b){return SG(this,b);},"k6",function(b,
c,d){return AAu(this,b,c,d);},"lq",function(b,c,d){return QI(this,b,c,d);},"oz",function(b){return DT(this,b);},"n6",function(){return IU(this);},"oF",function(){return E9(this);},"ob",function(){return G$(this);},"fg",function(b){return Np(this,b);}],DR,0,Ds,[],1,0,0,["dN",function(){return ZI(this);}],L0,0,DR,[],0,0,0,["lw",function(b){return Qm(this,b);},"hi",function(b,c){Nm(this,b,c);},"jG",function(){return Qc(this);},"lI",function(){return Wm(this);},"kX",function(){return Zb(this);}],M3,0,L,[],0,0,0,
["u",function(){return XK(this);}],EQ,0,C,[],0,3,ABb,["jg",function(b,c){return Tk(this,b,c);},"oa",function(b,c,d){return KX(this,b,c,d);},"oV",function(b,c,d,e){return Lp(this,b,c,d,e);}],B5,"KeyboardConfig$Section",10,CO,[],12,3,FZ,0,H3,"AbstractCharClass$LazyJavaTitleCase$1",2,I,[],0,0,0,["j",function(b){return Xb(this,b);}],De,0,C,[],0,3,0,["bY",function(){return OU(this);},"fv",function(){return X7(this);},"dj",function(){return Oi(this);},"bH",function(){return Sn(this);},"lU",function(b){AAL(this,b);
},"e2",function(){return QL(this);},"eL",function(b){QV(this,b);}],CB,0,C,[BF],3,3,0,0,HM,0,C,[CB],4,0,0,["fU",function(b){M0(this,b);},"e4",function(b){return Xz(this,b);}],ML,0,C,[],0,3,0,0,HO,0,C,[CB],4,0,0,["fU",function(b){Lt(this,b);},"e4",function(b){return AAK(this,b);}],Ho,0,C,[CB],4,0,0,["fU",function(b){JO(this,b);},"e4",function(b){return WM(this,b);}],GC,0,C,[],0,3,0,["cv",function(){return Vo(this);},"dx",function(){return Y0(this);},"cw",function(){return P3(this);}],MP,"AbstractCharClass$LazyJavaMirrored$1",
2,I,[],0,0,0,["j",function(b){return VV(this,b);}]]);
$rt_metadata([L$,"UnsupportedCharsetException",4,BR,[],0,3,0,0,Hp,0,C,[CB],4,0,0,["fU",function(b){KR(this,b);},"e4",function(b){return UW(this,b);}],Lq,"AbstractCharClass$LazyJavaISOControl$1",2,I,[],0,0,0,["j",function(b){return TG(this,b);}],J$,0,R,[],0,0,0,["b",function(b,c,d){return Rd(this,b,c,d);},"x",function(b){return RB(this,b);},"ms",function(b,c,d,e){return FM(this,b,c,d,e);}],KP,0,R,[],4,0,0,["b",function(b,c,d){return ZY(this,b,c,d);},"x",function(b){return Wo(this,b);}],Do,0,L,[],0,0,0,["u",function()
{return LW(this);}],Hl,0,C,[],0,3,0,["kx",function(){return PZ(this);},"ls",function(){return Vp(this);},"ld",function(){return WX(this);},"hV",function(){return PA(this);},"jE",function(){return Wc(this);},"jD",function(){return Uj(this);}],LR,0,Z,[],0,0,0,["I",function(b,c){return Nw(this,b,c);}],DQ,0,BP,[BE],0,3,FG,["dV",function(){return AAr(this);}],Ey,0,Bt,[],0,0,0,["b",function(b,c,d){return Pp(this,b,c,d);},"bu",function(){return RZ(this);},"x",function(b){return Ra(this,b);}],Dp,0,W,[],0,0,0,["s",function(b)
{QO(this,b);},"b",function(b,c,d){return SS(this,b,c,d);},"bi",function(b,c,d){return XM(this,b,c,d);},"bg",function(b,c,d,e){return Uc(this,b,c,d,e);},"ba",function(b){return O1(this,b);},"x",function(b){return V4(this,b);}],E_,0,C,[BL,DK,D7,D3,Dy],3,3,0,0,LQ,0,B$,[],0,3,0,0,LK,0,C,[],0,3,0,["lC",function(){return W0(this);},"ce",function(){return AAj(this);},"em",function(){return XH(this);},"eH",function(){return Zg(this);},"bd",function(){return Ue(this);},"lH",function(b){Rc(this,b);},"iX",function(){return PJ(this);
},"lM",function(b){Uf(this,b);},"dT",function(){return OK(this);},"kc",function(b){return Pl(this,b);},"kU",function(b){Tw(this,b);},"n8",function(){return M9(this);}],Ch,0,Bv,[],0,0,0,["b",function(b,c,d){return AAC(this,b,c,d);}],Ff,0,Ch,[],0,0,0,["b",function(b,c,d){return Pw(this,b,c,d);}],EA,0,C,[DC],3,3,0,0,DD,0,Dn,[EA],1,3,0,["S",function(){return Vg(this);}],EZ,0,C,[],3,3,0,0,Id,0,DD,[B6,BS,EZ],0,3,0,["b2",function(b){PC(this,b);},"H",function(b){return Td(this,b);},"X",function(){return QT(this);},
"be",function(b){return XV(this,b);},"lR",function(b,c){YZ(this,b,c);},"iH",function(b){return TQ(this,b);},"nj",function(b){Ex(this,b);},"mD",function(b){JP(this,b);}],E5,0,C,[],3,3,0,0,Fe,0,C,[BF],3,3,0,0,HL,0,C,[BF,E_,E5,Fe],1,3,0,["m$",function(b,c){return NB(this,b,c);},"ox",function(b,c){return Oc(this,b,c);},"mh",function(b){return Qb(this,b);},"mp",function(b,c,d){return Qz(this,b,c,d);},"n$",function(b){return X0(this,b);},"of",function(){return Sr(this);},"na",function(b,c,d){return Of(this,b,c,d);
}],K9,0,CN,[],0,0,0,["b",function(b,c,d){return R2(this,b,c,d);}],HA,0,C,[],0,0,0,0,Bk,0,C,[BS,BE,Dg],0,3,CQ,["oP",function(b,c,d,e){I$(this,b,c,d,e);},"d",function(b){return Qo(this,b);},"g",function(){return Wn(this);},"E",function(){return Zh(this);},"it",function(b,c){return RH(this,b,c);},"ek",function(b){return Zq(this,b);},"cF",function(b,c){return P0(this,b,c);},"ch",function(b){return U1(this,b);},"es",function(b,c){return QA(this,b,c);},"gQ",function(b,c){return Uw(this,b,c);},"lL",function(b,c){return UP(this,
b,c);},"cj",function(b,c){return OF(this,b,c);},"fc",function(b){return YA(this,b);},"fu",function(b,c){return Vb(this,b,c);},"fT",function(b){return Nk(this,b);},"fC",function(){return ZW(this);},"e",function(){return R5(this);},"b3",function(){return Zo(this);},"bz",function(b){return XP(this,b);},"jX",function(b){return Yb(this,b);},"hQ",function(){return P_(this);},"c6",function(){return O7(this);},"i5",function(b){return AAq(this,b);}],FV,0,C,[],0,0,ADW,0,Nc,"NegativeArraySizeException",6,U,[],0,3,0,0,Ii,
0,Cb,[],0,0,0,["b",function(b,c,d){return PW(this,b,c,d);}],Ef,0,Dj,[],1,3,0,["ka",function(b,c){return QF(this,b,c);}],JV,0,Ef,[],0,3,0,["jJ",function(b,c,d,e,f,g,h){return Z_(this,b,c,d,e,f,g,h);}],Jd,0,L,[],0,0,0,["u",function(){return YE(this);}],Is,0,R,[],0,0,0,["b",function(b,c,d){return ZO(this,b,c,d);},"x",function(b){return Q1(this,b);}],Cs,"NumberFormatException",6,BR,[],0,3,0,0,EI,0,Ch,[],0,0,0,["b",function(b,c,d){return Ym(this,b,c,d);}],MU,0,Du,[],0,3,0,["kg",function(){return UA(this);},"k1",
function(){return Yt(this);}],GH,0,R,[],0,0,0,["b",function(b,c,d){return Yx(this,b,c,d);},"x",function(b){return SX(this,b);}],Im,0,C,[],0,0,0,0,Ht,0,Cy,[],0,3,0,["bK",function(){AAm(this);},"el",function(){return Z8(this);},"ow",function(b){return Ez(this,b);},"nW",function(){FJ(this);}],Iw,0,L,[],0,0,0,["u",function(){return Tt(this);}],Jf,"AbstractCharClass$LazyJavaDigit$1",2,I,[],0,0,0,["j",function(b){return XI(this,b);}],Jn,0,L,[],0,0,0,["u",function(){return Nx(this);}],Hv,"IllegalStateException",6,
Br,[],0,3,0,0,DA,0,W,[],0,0,0,["s",function(b){R9(this,b);},"b",function(b,c,d){return N9(this,b,c,d);},"bi",function(b,c,d){return Rz(this,b,c,d);},"bg",function(b,c,d,e){return Ul(this,b,c,d,e);},"ba",function(b){return TV(this,b);},"x",function(b){return RY(this,b);}],LU,0,Cd,[],0,0,0,["b",function(b,c,d){return UM(this,b,c,d);}],GS,"NullPointerException",6,U,[],0,3,0,0,LY,0,R,[],4,0,0,["b",function(b,c,d){return AAI(this,b,c,d);},"x",function(b){return YJ(this,b);}],JY,"AbstractCharClass$LazyJavaSpaceChar$1",
2,I,[],0,0,0,["j",function(b){return Sy(this,b);}],Kv,0,C,[Ge],0,0,0,["jI",function(){Xd(this);},"oU",function(){return SO(this);}],LX,0,C,[],4,3,0,0]);
$rt_metadata([Kr,0,L,[],0,0,0,["u",function(){return PB(this);}],FQ,"PatternSyntaxException",2,BR,[],0,3,0,["dR",function(){return YM(this);}],GI,0,C,[],0,3,0,0,Kw,0,L,[],0,0,0,["u",function(){return TA(this);}],Di,0,C,[],0,3,BQ,0,H$,0,C,[F7],0,3,0,0,Il,0,C,[],0,3,0,["j0",function(b,c,d){return UB(this,b,c,d);},"mt",function(b,c){return MF(this,b,c);},"np",function(b){return HB(this,b);},"o6",function(b,c){return M_(this,b,c);},"or",function(b,c){return M2(this,b,c);},"nm",function(b,c){return Nd(this,b,c);
},"ot",function(b,c){return If(this,b,c);},"nJ",function(b,c,d){return Ek(this,b,c,d);},"oL",function(b,c){return I3(this,b,c);},"oe",function(b,c){return Ms(this,b,c);},"oN",function(b,c){return IN(this,b,c);}],LN,0,C,[BS],4,3,0,["nq",function(b){return Lb(this,b);},"mu",function(b,c){return HG(this,b,c);},"nC",function(b){return HF(this,b);},"oR",function(){return DM(this);},"ma",function(b,c){return KA(this,b,c);},"od",function(b){return L5(this,b);},"nA",function(b,c,d){return Gh(this,b,c,d);},"no",function()
{return JM(this);},"ol",function(){return JX(this);},"o1",function(b){return Fj(this,b);},"m9",function(b,c){return D8(this,b,c);},"ne",function(b){return F5(this,b);},"mR",function(b,c){return HQ(this,b,c);},"n3",function(b){return Cr(this,b);},"o5",function(b){return F9(this,b);},"mG",function(b){return Ee(this,b);},"l$",function(){Kn(this);},"mC",function(){return Hd(this);},"mQ",function(){return K3(this);},"nt",function(){return Ih(this);},"nQ",function(b){return Bd(this,b);}],JA,0,CN,[],0,0,0,["b",function(b,
c,d){return Zp(this,b,c,d);},"s",function(b){PK(this,b);}],Lv,"BufferOverflowException",3,U,[],0,3,0,0,Hh,0,L,[],0,0,0,["u",function(){return Yz(this);}],Mz,0,DI,[B6,BS],0,3,0,["hk",function(b){return Xe(this,b);},"oD",function(){Fb(this);},"gr",function(b){return Xp(this,b);},"oj",function(b){return Hs(this,b);},"ou",function(b,c,d){return FE(this,b,c,d);},"oJ",function(){return Gm(this);},"hG",function(b,c){return Pi(this,b,c);},"lx",function(b,c){return WP(this,b,c);},"hE",function(b,c,d){return Sf(this,
b,c,d);},"ks",function(b){WC(this,b);},"hD",function(){S1(this);}],G6,0,R,[],0,0,0,["b",function(b,c,d){return Qp(this,b,c,d);},"x",function(b){return V1(this,b);}],H2,0,C,[],0,3,0,0,Mp,0,L,[],0,0,0,["u",function(){return AAi(this);}],EK,0,C,[],0,3,0,0,DU,0,C,[],0,3,Bj,["dK",function(){return O2(this);},"db",function(){return Xk(this);},"f0",function(){return Z6(this);},"hZ",function(){return Xn(this);},"f9",function(){return XG(this);},"g",function(){return Vy(this);},"g4",function(){Ub(this);}],FY,0,R,[],
4,0,0,["b",function(b,c,d){return Sj(this,b,c,d);},"x",function(b){return ST(this,b);}],JJ,0,B_,[],4,0,0,["di",function(b){return UR(this,b);},"hh",function(b,c){return YI(this,b,c);}],JI,0,B_,[],4,0,0,["di",function(b){return Sk(this,b);},"hh",function(b,c){return S_(this,b,c);}],LG,0,CP,[],0,3,0,0,Nb,0,L,[],0,0,0,["u",function(){return TR(this);}],CX,0,C,[],0,0,0,["T",function(){return AAd(this);},"d7",function(b){Sm(this,b);},"kG",function(b){RS(this,b);},"fm",function(){return T6(this);},"dh",function()
{return R4(this);},"fn",function(){return RI(this);},"n",function(){return Ty(this);},"cz",function(){return S3(this);},"bj",function(){return Qa(this);},"kV",function(){return Vx(this);},"nr",function(){Ll(this);},"o0",function(){Cc(this);},"nU",function(){return Hx(this);},"nb",function(b){return Ln(this,b);},"e",function(){return Wu(this);},"E",function(){return Yd(this);},"ct",function(){return YY(this);},"hN",function(){return Rn(this);},"iY",function(){return Ts(this);},"mI",function(b){return Fw(this,
b);},"mS",function(){return HZ(this);},"oC",function(){return MM(this);},"l_",function(){return Y(this);},"nH",function(){return HJ(this);},"mW",function(b){return K7(this,b);},"nE",function(){return DL(this);},"bu",function(){return Rk(this);}],Kh,0,L,[],0,0,0,["u",function(){return Ye(this);}],Jz,0,C,[],0,3,0,0,MA,0,Do,[],0,0,0,["u",function(){return QR(this);}],Mm,0,C,[FK],0,3,0,["lp",function(b){return RL(this,b);},"oy",function(b,c){Jv(this,b,c);},"nI",function(b,c){Jp(this,b,c);},"mN",function(b,c){GV(this,
b,c);},"nZ",function(b,c){Hj(this,b,c);},"mA",function(b,c,d){Mg(this,b,c,d);},"mL",function(b,c,d){IV(this,b,c,d);},"m4",function(b,c){Lw(this,b,c);}],B3,0,Z,[],0,0,0,["I",function(b,c){return Nn(this,b,c);},"ba",function(b){return Q5(this,b);},"fh",function(){return QG(this);}],D9,"UnicodeCategory",2,I,[],0,0,0,["j",function(b){return QM(this,b);}],MI,"UnicodeCategoryScope",2,D9,[],0,0,0,["j",function(b){return Vm(this,b);}],Kq,"UnmappableCharacterException",4,Cl,[],0,3,0,["dR",function(){return T_(this);
}],Je,"CharClass",2,I,[],0,0,0,["bh",function(b){return Ni(this,b);},"lO",function(b){return AAF(this,b);},"J",function(b,c){return WW(this,b,c);},"jP",function(b){NV(this,b);},"gx",function(b){Xl(this,b);},"j",function(b){return SM(this,b);},"M",function(){return AAH(this);},"bc",function(){return Vd(this);},"c7",function(){return Wy(this);},"e",function(){return Pu(this);},"cm",function(){return VP(this);}],KN,"BufferUnderflowException",3,U,[],0,3,0,0,JF,0,BW,[],0,0,0,["e5",function(b){Xs(this,b);}],J1,0,
C,[],0,3,0,0,Mf,0,Ci,[],0,0,0,0]);
function $rt_array(cls,data){this.rX=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["@",": ","    at ","Caused by: ","Malformed input of length ","String contains invalid digits: ","String contains digits out of radix ","The value is too big for int type: ","String is null or empty","Illegal radix: ","Unable to load finger key definitions file",":","Invalid section ","Invalid KeyboardType ","�","averageCharsPerByte must be positive. Actual value is ","maxCharsPerByte must be positive. Actual value is ",
"newAction must be non-null","BIG_ENDIAN","LITTLE_ENDIAN","null","Index out of bounds","New position "," is outside of range [0;","]","","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart",
"Space","w","W","s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics",
"Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics",
"BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo",
"HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks",
"CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","Class does not represent enum: ","Enum "," does not have the ","constant","STD","ANGLE","MATRIX_SIMPLE","MATRIX_ERGODOX","Unable to load bigram frequency string","#","{",",","}","0","ABCDEFGHIJKLMNOPQRSTUVWXYZ",
"• Symbol "," has no mapping"," has duplicate mapping","Replacement preconditions do not hold","Action must be non-null","The last byte in dst "," is outside of array of size ","Length "," must be non-negative","Offset ",")","The last byte in src ","Unable to load char frequency string","resources/","loaded ","Loading...","%","charsetName is null","Should never been thrown","IGNORE","REPLACE","REPORT","Initializing...","en","?","&","=","freq","bigrams","Using frequency resource: ","\n[A layout configuration error occurred]\n",
"\n[ An error occurred. Please check inputs ]\n","\n[ An error occurred. Frequency data was missing. ]\n","No frequency data found","Using frequency information: ","\n\nReady.","Either src or dest is null","Capacity is negative: ","The last char in dst ","The last char in src "," is outside of string of size ","Start "," must be before end ","rgb(","position:absolute;","left:","px;top:","px;","background-color:",";","Key ","  Effort: "," Usage: ","#80c4c4","#ca80ca","#80b780","#7a93c0","#8080ca","FINGERS","EFFORT",
"PENALTIES","TYPE","?20210306","UTF-8",", ","Unable to read layout data","Colemak-DH","Ergonomic","layout_full/colemak_dh.keyb","Colemak-DHk","layout_full/colemak_dhk.keyb","Colemak","Traditional","layout_full/colemak.keyb","Dvorak","layout_full/dvorak.keyb","Workman","layout_full/workman.keyb","MTGAP","layout_full/mtgap.keyb","qgmlwyfub","layout_full/qgmlwyfub.keyb","Halmak","layout_full/halmak.keyb","Soul","Alternative","layout_full/soul.keyb","Niro","layout_full/niro.keyb","Asset","layout_full/asset.keyb",
"Norman","layout_full/norman.keyb","Qwpr","layout_full/qwpr.keyb","Minimak-8","layout_full/minimak8.keyb","Qwerty","layout_full/qwerty.keyb","The traditional typing method","config/effort_traditional_config.dat","An alternative typing method","config/effort_alternative_config.dat","An ergonomic method using the Angle Mod","config/effort_ergonomic_config.dat","Matrix Simple","A simple split matrix keyboard","config/effort_matrix_simple_config.dat","Matrix Ergodox","A matrix-like keyboard similar to the Ergodox",
"config/effort_matrix_ergodox_config.dat","Default English data","freq/en_books.freq","en_norvig","English Data from\n  Peter Norvig, norvig.com/mayzner.html","freq/en_norvig.freq","en_wikipedia","Data from the 100 most popular\n  Wikipedia articles","freq/en_wikipedia.freq","linux_src","Data from the Linux source code","freq/linux_src.freq","da","Danish data","freq/practical_cryptography/da_pc.freq","de","German data","freq/practical_cryptography/de_pc.freq","es","Spanish data","freq/practical_cryptography/es_pc.freq",
"fi","Finnish data","freq/practical_cryptography/fi_pc.freq","fr","French data","freq/practical_cryptography/fr_pc.freq","pl","Polish data","freq/practical_cryptography/pl_pc.freq","sv","Swedish data","freq/practical_cryptography/sv_pc.freq","Warning: Too many rows","Warning: letter "," is missing from layout. "," appears more than once on layout. ","Patter is null","\\Q","\\E","\\\\E\\Q","Is","In","<div style=\"display: table-row\">","<div style=\"display: table-cell\">","</div>","<div style=\"display: table-cell;padding-left:2ex\">",
"<b style=\"color:red\">","</b>","<b><u>Finger Frequency</u></b>","<table>","<tr>","<td>finger "," </td><td>","%</td><td>&nbsp;finger ","%</td>","</tr>","<tr class=\"row_total\">","<td class=\"center\">total L </td><td>","%</td><td class=\"center\">total R </td><td>","</table>","<b><u>Finger Bigram Frequency</u></b>","<td class=\"center\" colspan=\"2\" style=\"text-align:right\">total</td><td class=\"center\" colspan=\"2\">","<b><u>Top Same-Finger Bigrams</u></b>","<b><u>Top Neighbour-Finger Bigrams</u></b>",
"-","<b><u>Finger Effort</u></b>","<th> </th><th>base</th><th>s-bigrams</th><th>n-bigrams</th><th>total</th>","</td><td>","</td>","<td>total * </td><td>","</td><td> ","Unmappable characters of length "]);
Bk.prototype.toString=function(){return $rt_ustr(this);};
Bk.prototype.valueOf=Bk.prototype.toString;C.prototype.toString=function(){return $rt_ustr(R6(this));};
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
=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}main=$rt_mainStarter(PY);
(function(){var c;c=HM.prototype;c.handleEvent=c.e4;c=HO.prototype;c.handleEvent=c.e4;c=Ho.prototype;c.handleEvent=c.e4;c=Hp.prototype;c.handleEvent=c.e4;c=HL.prototype;c.dispatchEvent=c.n$;c.addEventListener=c.m$;c.removeEventListener=c.ox;c.getLength=c.of;c.get=c.mh;c.addEventListener=c.na;c.removeEventListener=c.mp;c=Kv.prototype;c.stateChanged=c.oU;})();
})();
