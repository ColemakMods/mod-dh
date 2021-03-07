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
function $rt_nullCheck(val) {if (val === null) {$rt_throw(RK());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return AEc(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
var A=Object.create(null);
var G=$rt_throw;var B4=$rt_compare;var AEd=$rt_nullCheck;var D=$rt_cls;var F=$rt_createArray;var AC1=$rt_isInstance;var AEe=$rt_nativeThread;var AEf=$rt_suspending;var AEg=$rt_resuming;var AEh=$rt_invalidPointer;var B=$rt_s;var Be=$rt_eraseClinit;var Ce=$rt_imul;var Bb=$rt_wrapException;
function C(){this.$id$=0;}
function ACn(){var a=new C();M(a);return a;}
function M(a){return;}
function Cf(a){return HU(a.constructor);}
function TB(a){return Es(a);}
function N8(a,b){return a!==b?0:1;}
function R7(a){return J().a(Cf(a).bZ()).a(B(0)).a(MZ(Es(a))).e();}
function Es(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AAo(a){var b,c,d;if(!AC1(a,B5)){b=a;if(b.constructor.$meta.item===null)G(ABi());}c=Oh(a);b=c;d=$rt_nextId();b.$id$=d;return c;}
function L(){var a=this;C.call(a);a.fa=null;a.fR=null;}
function AEi(){var a=new L();Q(a);return a;}
function Q(a){M(a);}
function Tv(a,b){if(!b&&a.fa===null)a.fa=a.u();else if(b&&a.fR===null)a.fR=a.u().b9(1);if(b)return a.fR;return a.fa;}
function M7(){L.call(this);}
function ABP(){var a=new M7();Up(a);return a;}
function Up(a){Q(a);}
function TE(a){return By().bg(32).bg(9);}
function JZ(){L.call(this);}
function ACM(){var a=new JZ();Yh(a);return a;}
function Yh(a){Q(a);}
function Ol(a){return By().J(0,31).bg(127);}
function CM(){var a=this;C.call(a);a.fo=null;a.dG=null;a.d0=0;a.ex=0;a.hI=null;}
function AEj(){var a=new CM();Le(a);return a;}
function AEk(a){var b=new CM();F8(b,a);return b;}
function AEl(a,b){var c=new CM();MS(c,a,b);return c;}
function AEm(a){var b=new CM();Lg(b,a);return b;}
function Le(a){a.d0=1;a.ex=1;a.ee();}
function F8(a,b){a.d0=1;a.ex=1;a.ee();a.fo=b;}
function MS(a,b,c){a.d0=1;a.ex=1;a.ee();a.fo=b;a.dG=c;}
function Lg(a,b){a.d0=1;a.ex=1;a.ee();a.dG=b;}
function VH(a){return a;}
function T1(a){return a.fo;}
function WM(a){return a.dR();}
function XQ(a){a.hu(Cz());}
function ZS(a,b){var c,d,e,f,g;b.bL(Cf(a).bZ());c=a.j9();if(c!==null)b.bL(J().a(B(1)).a(c).e());a:{b.lH();if(a.hI!==null){d=a.hI.data;e=d.length;f=0;while(true){if(f>=e)break a;g=d[f];b.bL(B(2));b.lA(g);f=f+1|0;}}}if(a.dG!==null&&a.dG!==a){b.bL(B(3));a.dG.hu(b);}}
function Br(){CM.call(this);}
function AEn(){var a=new Br();C4(a);return a;}
function AEo(a){var b=new Br();Eu(b,a);return b;}
function C4(a){Le(a);}
function Eu(a,b){F8(a,b);}
function U(){Br.call(this);}
function AEp(){var a=new U();BB(a);return a;}
function AEc(a){var b=new U();Df(b,a);return b;}
function BB(a){C4(a);}
function Df(a,b){Eu(a,b);}
function C5(){U.call(this);}
function Cp(){var a=new C5();I4(a);return a;}
function Bp(a){var b=new C5();L3(b,a);return b;}
function I4(a){BB(a);}
function L3(a,b){Df(a,b);}
function Ct(){C.call(this);}
function AEq(){var a=new Ct();Eq(a);return a;}
function Eq(a){M(a);}
function I(){var a=this;Ct.call(a);a.G=0;a.X=0;a.K=null;a.ds=null;a.dW=null;a.y=0;}
var AEr=null;function E7(){E7=Be(I);Tn();}
function AEs(){var a=new I();P(a);return a;}
function P(a){E7();Eq(a);a.K=ACa(2048);}
function Rm(a){return null;}
function PR(a){return a.K;}
function Ob(a){var b,c;if(!a.X){b=a.K;c=b.dr(0)>=2048?0:1;}else c=a.K.li(0)>=2048?0:1;return c;}
function Xz(a){return a.y;}
function Vv(a){return a;}
function Qj(a){var b;if(a.dW===null){b=a.bc();a.dW=AEa(a,b);a.dW.b9(a.X);}return a.dW;}
function Rx(a){var b;if(a.ds===null){b=a.bc();a.ds=AD6(a,b,a);a.ds.b9(a.c4());a.ds.y=a.y;}return a.ds;}
function YM(a){return 0;}
function WQ(a,b){if(a.G^b){a.G=a.G?0:1;a.X=a.X?0:1;}if(!a.y)a.y=1;return a;}
function VM(a){return a.G;}
function DW(b,c){E7();return b.j(c);}
function CW(b,c){E7();if(b.M()!==null&&c.M()!==null)return b.M().ke(c.M());return 1;}
function Gj(b,c){E7();return LD(AEr,b).k0(c);}
function Tn(){AEr=ADC();}
function MR(){I.call(this);this.lh=null;}
function ACj(a){var b=new MR();Pa(b,a);return b;}
function Pa(a,b){a.lh=b;P(a);}
function PV(a,b){return F0(b);}
function BY(){Br.call(this);}
function PJ(){var a=new BY();HX(a);return a;}
function ABG(a){var b=new BY();WB(b,a);return b;}
function HX(a){C4(a);}
function WB(a,b){Eu(a,b);}
function Cl(){BY.call(this);}
function AEt(){var a=new Cl();Fs(a);return a;}
function Fs(a){HX(a);}
function JC(){Cl.call(this);this.iI=0;}
function AB8(a){var b=new JC();Qr(b,a);return b;}
function Qr(a,b){Fs(a);a.iI=b;}
function Vh(a){return J().a(B(4)).m(a.iI).e();}
function Ks(){L.call(this);}
function ACd(){var a=new Ks();Pf(a);return a;}
function Pf(a){Q(a);}
function UG(a){var b;b=ACu(a);b.y=1;return b;}
function H1(){var a=this;C.call(a);a.gJ=null;a.iE=null;a.hX=0;a.f9=0;}
function ABQ(a,b){var c=new H1();V1(c,a,b);return c;}
function V1(a,b,c){M(a);a.gJ=b;a.iE=c;}
function UQ(a){return BT(a.gJ);}
function UY(a,b){return X(a.iE)<b?0:1;}
function We(a,b){a.hX=b;}
function AAR(a,b){a.f9=b;}
function BS(){}
function BP(){C.call(this);}
function AEu(){var a=new BP();F3(a);return a;}
function F3(a){M(a);}
function BE(){}
function C$(){BP.call(this);this.iR=0;}
var AEv=null;function B6(){B6=Be(C$);U9();}
function AC6(a){var b=new C$();DP(b,a);return b;}
function DP(a,b){B6();F3(a);a.iR=b;}
function JD(b,c){B6();if(!(c>=2&&c<=36))c=10;return ADB(20).g0(b,c).e();}
function MZ(b){B6();return Oj(b,4);}
function It(b){B6();return JD(b,10);}
function CY(b,c){var d,e,f,g,h;B6();if(c>=2&&c<=36){if(b!==null&&!b.H()){a:{d=0;e=0;switch(b.d(0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=0;if(e==b.g())G(Ca());while(e<b.g()){g=e+1|0;h=Ei(b.d(e));if(h<0)G(BX(J().a(B(5)).a(b).e()));if(h>=c)G(BX(J().a(B(6)).m(c).a(B(1)).a(b).e()));f=Ce(c,f)+h|0;if(f<0){if(g==b.g()&&f==(-2147483648)&&d)return (-2147483648);G(BX(J().a(B(7)).a(b).e()));}e=g;}if(d)f= -f;return f;}G(BX(B(8)));}G(BX(J().a(B(9)).m(c).e()));}
function DN(b){B6();return CY(b,10);}
function X7(a){return It(a.iR);}
function EP(b){var c,d,e;B6();if(!b)return 32;c=0;d=b>>>16;if(d)c=16;else d=b;e=d>>>8;if(!e)e=d;else c=c|8;d=e>>>4;if(!d)d=e;else c=c|4;e=d>>>2;if(!e)e=d;else c=c|2;if(e>>>1)c=c|1;return (32-c|0)-1|0;}
function CZ(b){var c,d,e;B6();if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;e=d<<8;if(!e)e=d;else c=c|8;d=e<<4;if(!d)d=e;else c=c|4;e=d<<2;if(!e)e=d;else c=c|2;if(e<<1)c=c|1;return (32-c|0)-1|0;}
function KJ(b,c){var d;B6();d=c&31;return b<<d|b>>>(32-d|0);}
function U9(){AEv=D($rt_intcls());}
function Kc(){Br.call(this);}
function ABi(){var a=new Kc();YF(a);return a;}
function YF(a){C4(a);}
function Cg(){C.call(this);}
var AEw=null;var AEx=null;var AEy=null;var AEz=null;var AEA=null;function ACk(){ACk=Be(Cg);YZ();}
function YZ(){var b,c;b=$rt_createIntArray(10);c=b.data;c[0]=1;c[1]=10;c[2]=100;c[3]=1000;c[4]=10000;c[5]=100000;c[6]=1000000;c[7]=10000000;c[8]=100000000;c[9]=1000000000;AEw=b;b=$rt_createLongArray(19);c=b.data;c[0]=Long_fromInt(1);c[1]=Long_fromInt(10);c[2]=Long_fromInt(100);c[3]=Long_fromInt(1000);c[4]=Long_fromInt(10000);c[5]=Long_fromInt(100000);c[6]=Long_fromInt(1000000);c[7]=Long_fromInt(10000000);c[8]=Long_fromInt(100000000);c[9]=Long_fromInt(1000000000);c[10]=new Long(1410065408, 2);c[11]=new Long(1215752192, 23);c[12]
=new Long(3567587328, 232);c[13]=new Long(1316134912, 2328);c[14]=new Long(276447232, 23283);c[15]=new Long(2764472320, 232830);c[16]=new Long(1874919424, 2328306);c[17]=new Long(1569325056, 23283064);c[18]=new Long(2808348672, 232830643);AEx=b;b=$rt_createLongArray(6);c=b.data;c[0]=Long_fromInt(1);c[1]=Long_fromInt(10);c[2]=Long_fromInt(100);c[3]=Long_fromInt(10000);c[4]=Long_fromInt(100000000);c[5]=new Long(1874919424, 2328306);AEy=b;AEz=ABt();AEA=AC$();}
function R(){var a=this;C.call(a);a.f=null;a.be=0;a.hO=null;a.hB=0;}
var AEB=0;function Jj(){Jj=Be(R);ZT();}
function AEC(){var a=new R();Bo(a);return a;}
function AED(a){var b=new R();Ed(b,a);return b;}
function Bo(a){var b,c;Jj();M(a);b=new C$;c=AEB;AEB=c+1|0;DP(b,c);a.hO=b.e();}
function Ed(a,b){var c,d;Jj();M(a);c=new C$;d=AEB;AEB=d+1|0;DP(c,d);a.hO=c.e();a.f=b;}
function C7(a,b,c,d){var e;e=d.q();while(true){if(b>e)return (-1);if(a.b(b,c,d)>=0)break;b=b+1|0;}return b;}
function Db(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.b(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function S6(a,b){a.hB=b;}
function RQ(a){return a.hB;}
function UX(a){return a.f;}
function FN(a,b){a.f=b;}
function WW(a,b){return 1;}
function YS(a){return null;}
function GN(a){var b;a.be=1;if(a.f!==null){if(!a.f.be){b=a.f.cl();if(b!==null){a.f.be=1;a.f=b;}a.f.bD();}else if(a.f instanceof CL&&a.f.br.fh)a.f=a.f.f;}}
function ZT(){AEB=1;}
function W(){var a=this;R.call(a);a.O=null;a.br=null;a.A=0;}
function AEE(){var a=new W();BD(a);return a;}
function ADY(a,b){var c=new W();H4(c,a,b);return c;}
function BD(a){Bo(a);}
function H4(a,b,c){Bo(a);a.O=b;a.br=c;a.A=c.c_();}
function W3(a,b,c,d){var e,f,g,h,i;if(a.O===null)return (-1);e=d.cF(a.A);d.bR(a.A,b);f=a.O.T();g=0;while(true){if(g>=f){d.bR(a.A,e);return (-1);}h=a.O.C(g);i=h.b(b,c,d);if(i>=0)break;g=g+1|0;}return i;}
function Q4(a,b){a.br.s(b);}
function AAP(a,b){var c;a:{if(a.O!==null){c=a.O.V();while(true){if(!c.W())break a;if(!c.U().ba(b))continue;else return 1;}}}return 0;}
function Sv(a,b){var c,d;a:{if(b.eB(a.A)>=0){c=b.cF(a.A);d=a.A;if(c==b.eB(d)){c=0;break a;}}c=1;}return c;}
function SB(a){var b,c,d,e;a.be=1;if(a.br!==null&&!a.br.be)a.br.bD();a:{if(a.O!==null){b=a.O.T();c=0;while(true){if(c>=b)break a;d=a.O.C(c);e=d.cl();if(e===null)e=d;else{d.be=1;a.O.iH(c);a.O.lS(c,e);}if(!e.be)e.bD();c=c+1|0;}}}if(a.f!==null)GN(a);}
function CL(){W.call(this);this.bl=null;}
function ABK(a,b){var c=new CL();Jw(c,a,b);return c;}
function Jw(a,b,c){BD(a);a.bl=b;a.br=c;a.A=c.c_();}
function OF(a,b,c,d){var e,f;e=d.cF(a.A);d.bR(a.A,b);f=a.bl.b(b,c,d);if(f>=0)return f;d.bR(a.A,e);return (-1);}
function NH(a,b,c,d){var e;e=a.bl.bh(b,c,d);if(e>=0)d.bR(a.A,e);return e;}
function Ug(a,b,c,d,e){var f;f=a.bl.bf(b,c,d,e);if(f>=0)e.bR(a.A,f);return f;}
function AAC(a,b){return a.bl.ba(b);}
function Q9(a){var b;b=ABI(a);a.f=b;return b;}
function Y0(a){var b;a.be=1;if(a.br!==null&&!a.br.be)a.br.bD();if(a.bl!==null&&!a.bl.be){b=a.bl.cl();if(b!==null){a.bl.be=1;a.bl=b;}a.bl.bD();}}
function BF(){}
function V_(b){return b;}
function Dl(){}
function En(){}
function BL(){}
function KE(){}
function Zw(){return window.document;}
function Gk(){BP.call(this);}
var AEF=null;function Vd(){Vd=Be(Gk);Xm();}
function Mo(b,c){var d,e,f,g,h;Vd();if(c>=2&&c<=36){if(b!==null&&!b.H()){a:{d=0;e=0;switch(b.d(0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=Long_ZERO;while(e<b.g()){g=e+1|0;h=Ei(b.d(e));if(h<0)G(BX(J().a(B(5)).a(b).e()));if(h>=c)G(BX(J().a(B(6)).m(c).a(B(1)).a(b).e()));f=Long_add(Long_mul(Long_fromInt(c),f),Long_fromInt(h));if(Long_lt(f,Long_ZERO)){if(g==b.g()&&Long_eq(f,new Long(0, 2147483648))&&d)return new Long(0, 2147483648);G(BX(J().a(B(7)).a(b).e()));}e=g;}if(d)f=Long_neg(f);return f;}G(BX(B(8)));}G(BX(J().a(B(9)).m(c).e()));}
function FW(b){Vd();return Mo(b,10);}
function Xm(){AEF=D($rt_longcls());}
function Gd(){}
function EB(){}
function Jb(){var a=this;C.call(a);a.dF=null;a.eT=null;a.bq=0;a.i1=0;}
function PT(a){var b=new Jb();Y8(b,a);return b;}
function Y8(a,b){M(a);while(b>=a.bq){a.bq=a.bq<<1|1;}a.bq=a.bq<<1|1;a.dF=$rt_createIntArray(a.bq+1|0);a.eT=$rt_createIntArray(a.bq+1|0);a.i1=b;}
function Yf(a,b,c){var d,e,f;d=0;e=b&a.bq;while(a.dF.data[e]&&a.dF.data[e]!=b){f=d+1|0;d=f&a.bq;f=e+d|0;e=f&a.bq;}a.dF.data[e]=b;a.eT.data[e]=c;}
function NW(a,b){var c,d,e,f;c=b&a.bq;d=0;while(true){e=a.dF.data[c];if(!e)break;if(e==b)return a.eT.data[c];f=d+1|0;d=f&a.bq;f=c+d|0;c=f&a.bq;}return a.i1;}
function Eg(){L.call(this);}
function ADl(){var a=new Eg();Jp(a);return a;}
function Jp(a){Q(a);}
function Jh(a){return By().J(97,122).J(65,90);}
function DO(){L.call(this);}
function ADV(){var a=new DO();Ky(a);return a;}
function Ky(a){Q(a);}
function GA(a){return By().J(48,57);}
function Kk(){DO.call(this);}
function ADa(){var a=new Kk();ZL(a);return a;}
function ZL(a){Ky(a);}
function Xk(a){var b;b=GA(a).b9(1);b.y=1;return b;}
function Hm(){CL.call(this);}
function ABI(a){var b=new Hm();Tb(b,a);return b;}
function Tb(a,b){Jw(a,b.bl,b.br);}
function VX(a,b,c,d){var e,f,g;e=0;f=d.q();a:{while(true){if(b>f){b=e;break a;}g=d.cF(a.A);d.bR(a.A,b);e=a.bl.b(b,c,d);if(e>=0)break;d.bR(a.A,g);b=b+1|0;}}return b;}
function AAy(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=e.cF(a.A);e.bR(a.A,c);f=a.bl.b(c,d,e);if(f>=0)break;e.bR(a.A,g);c=c+(-1)|0;}}return c;}
function SR(a){return null;}
function L8(){U.call(this);}
function ADQ(){var a=new L8();PA(a);return a;}
function PA(a){BB(a);}
function CE(){var a=this;W.call(a);a.gU=0;a.c2=0;}
function ADU(a,b){var c=new CE();Fd(c,a,b);return c;}
function Fd(a,b,c){BD(a);a.gU=b;a.c2=c;}
function PM(a,b,c,d){var e,f,g,h;e=a.c6(d);if(e!==null&&(b+e.g()|0)<=d.q()){f=0;while(true){if(f>=e.g()){d.D(a.c2,e.g());return a.f.b(b+e.g()|0,c,d);}g=e.d(f);h=b+f|0;if(g!=c.d(h)&&C6(e.d(f))!=c.d(h))break;f=f+1|0;}return (-1);}return (-1);}
function SA(a,b){a.f=b;}
function Tg(a,b){var c;c=b.j2(a.gU);return c;}
function Ti(a,b){var c;c=!b.bF(a.c2)?0:1;b.D(a.c2,(-1));return c;}
function Dw(){L.call(this);}
function ABp(){var a=new Dw();Kf(a);return a;}
function Kf(a){Q(a);}
function M_(a){return By().J(97,122).J(65,90).J(48,57).bg(95);}
function KB(){Dw.call(this);}
function ABD(){var a=new KB();X$(a);return a;}
function X$(a){Kf(a);}
function O$(a){var b;b=M_(a).b9(1);b.y=1;return b;}
function KV(){var a=this;I.call(a);a.g_=null;a.k6=null;}
function AEa(a,b){var c=new KV();AAv(c,a,b);return c;}
function AAv(a,b,c){a.k6=b;a.g_=c;P(a);}
function Vb(a,b){var c,d,e;c=b-55296|0;if(c>=0&&c<2048){d=a.X;e=a.g_;d=d^e.bQ(c);}else d=0;return d;}
function KS(){var a=this;I.call(a);a.hU=null;a.il=null;a.kp=null;}
function AD6(a,b,c){var d=new KS();P2(d,a,b,c);return d;}
function P2(a,b,c,d){a.kp=b;a.hU=c;a.il=d;P(a);}
function Oz(a,b){var c,d,e,f;c=b-55296|0;if(c>=0&&c<2048){d=a.X;e=a.hU;f=d^e.bQ(c);}else f=0;return a.il.j(b)&&!f?1:0;}
function Kd(){L.call(this);}
function AB1(){var a=new Kd();Qu(a);return a;}
function Qu(a){Q(a);}
function PS(a){var b;b=AB_(a);b.y=1;return b;}
function Z(){R.call(this);this.Q=0;}
function AEG(a){var b=new Z();Hw(b,a);return b;}
function AEH(){var a=new Z();BH(a);return a;}
function Hw(a,b){Ed(a,b);a.Q=1;a.gF(1);}
function BH(a){Bo(a);a.Q=1;}
function Z2(a,b,c,d){var e;if((b+a.bb()|0)>d.q()){d.by=1;return (-1);}e=a.I(b,c);if(e<0)return (-1);return a.f.b(b+e|0,c,d);}
function VL(a){return a.Q;}
function Y5(a,b){return 1;}
function Hz(){Z.call(this);this.dD=null;}
function AEb(a){var b=new Hz();Xy(b,a);return b;}
function Xy(a,b){BH(a);a.dD=b.e();a.Q=b.g();}
function Uo(a,b,c){var d,e,f,g;d=0;while(true){if(d>=a.dD.g())return a.dD.g();e=a.dD.d(d);f=b+d|0;if(e!=c.d(f)){g=a.dD;if(C6(g.d(d))!=c.d(f))break;}d=d+1|0;}return (-1);}
function BO(){R.call(this);this.w=null;}
function AEI(a,b,c){var d=new BO();C0(d,a,b,c);return d;}
function C0(a,b,c,d){Ed(a,c);a.w=b;a.gF(d);}
function AAi(a){return a.w;}
function Uh(a,b){return !a.w.ba(b)&&!a.f.ba(b)?0:1;}
function Xo(a,b){return 1;}
function Oq(a){var b;a.be=1;if(a.f!==null&&!a.f.be){b=a.f.cl();if(b!==null){a.f.be=1;a.f=b;}a.f.bD();}if(a.w!==null){if(!a.w.be){b=a.w.cl();if(b!==null){a.w.be=1;a.w=b;}a.w.bD();}else if(a.w instanceof CL&&a.w.br.fh)a.w=a.w.f;}}
function Bx(){BO.call(this);this.B=null;}
function AB4(a,b,c){var d=new Bx();Cq(d,a,b,c);return d;}
function Cq(a,b,c,d){C0(a,b,c,d);a.B=b;}
function N$(a,b,c,d){var e,f;e=0;a:{while((b+a.B.bb()|0)<=d.q()){f=a.B.I(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.f.b(b,c,d);if(f>=0)break;b=b-a.B.bb()|0;e=e+(-1)|0;}return f;}
function Cd(){Bx.call(this);this.cq=null;}
function ACz(a,b,c,d){var e=new Cd();Gl(e,a,b,c,d);return e;}
function Gl(a,b,c,d,e){Cq(a,c,d,e);a.cq=b;}
function Qw(a,b,c,d){var e,f,g,h;e=a.cq.c1();f=a.cq.c3();g=0;while(true){if(g>=e){a:{while(g<f){if((b+a.B.bb()|0)>d.q())break a;h=a.B.I(b,c);if(h<1)break a;b=b+h|0;g=g+1|0;}}while(true){if(g<e)return (-1);h=a.f.b(b,c,d);if(h>=0)break;b=b-a.B.bb()|0;g=g+(-1)|0;}return h;}if((b+a.B.bb()|0)>d.q()){d.by=1;return (-1);}h=a.B.I(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}return (-1);}
function Ji(){Cd.call(this);}
function ADk(a,b,c,d){var e=new Ji();ON(e,a,b,c,d);return e;}
function ON(a,b,c,d,e){Gl(a,b,c,d,e);}
function Uk(a,b,c,d){var e,f,g,h;e=a.cq.c1();f=a.cq.c3();g=0;while(true){if(g>=e){a:{while(true){if(g>=f)break a;if((b+a.B.bb()|0)>d.q())break a;h=a.B.I(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}}return a.f.b(b,c,d);}if((b+a.B.bb()|0)>d.q()){d.by=1;return (-1);}h=a.B.I(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}return (-1);}
function Dg(){}
function B9(){CM.call(this);}
function AEJ(a,b){var c=new B9();IH(c,a,b);return c;}
function AEK(a){var b=new B9();J2(b,a);return b;}
function AEL(a){var b=new B9();Ij(b,a);return b;}
function IH(a,b,c){MS(a,b,c);}
function J2(a,b){F8(a,b);}
function Ij(a,b){Lg(a,b);}
function CP(){B9.call(this);}
function AEM(a){var b=new CP();G8(b,a);return b;}
function G8(a,b){J2(a,b);}
function Dy(){}
function Mp(){C5.call(this);}
function Fh(){var a=new Mp();VW(a);return a;}
function VW(a){I4(a);}
function EE(){var a=this;U.call(a);a.lx=null;a.ld=null;}
function ABh(a,b,c){var d=new EE();VA(d,a,b,c);return d;}
function VA(a,b,c,d){Df(a,b);a.lx=c;a.ld=d;}
function J3(){C.call(this);}
function LM(b,c){var d,e,$$je;a:{try{d=Qv(b,EC(c));}catch($$e){$$je=Bb($$e);if($$je instanceof BY){e=$$je;break a;}else{throw $$e;}}return d;}Cz().o(B(10));e.ev();return 0;}
function Qv(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,$$je;FZ();d=AEN;e=3;f=El(c);a:{try{g=0;}catch($$e){$$je=Bb($$e);h=$$je;break a;}b:{try{while(true){h=f.el();if(h===null)break;i=h.cA(35);if(i>=0)h=h.cj(0,i);h=h.fz();if(!h.g())continue;if(h.fP(B(11))){j=B8(h,58);try{k=e;l=g;h=L5(j.C(0).c7());d=h;if(j.T()<=1){d=h;k=e;l=g;e=3;k=e;}else{d=h;k=e;l=g;e=DN(j.C(1).fz());k=e;}d=h;l=g;k=e;g=0;l=g;d=h;continue;}catch($$e){$$je=Bb($$e);if($$je instanceof Br){}else{throw $$e;}}Cz().o(J().a(B(12)).a(j.C(0)).e());g=l;e=k;continue;}if
(d===AEO){j=B8(h,32);m=0;while(m<j.T()){n=g+(b.co()-e|0)|0;if(n>=0){o=b.dM(n,m);if(o!==null)o.lN(DG(j.C(m)));}m=m+1|0;}g=g+1|0;}else if(d===AEN){j=B8(h,32);m=0;while(m<j.T()){n=g+(b.co()-e|0)|0;if(n>=0){o=b.dM(n,m);if(o!==null)o.lI(DN(j.C(m)));}m=m+1|0;}g=g+1|0;}else if(d===AEP){c:{j=B8(h,32);if(g){p=g-1|0;q=0;while(true){if(q>=j.T())break c;b.lK(p,q,DG(j.C(q)));q=q+1|0;}}q=0;while(q<j.T()){b.jP(q,DG(j.C(q)));q=q+1|0;}}g=g+1|0;}else if(d===AEQ){j=B8(h,32);try{b.kt(Hu(j.C(0).c7()));}catch($$e){$$je=Bb($$e);if
($$je instanceof Br){break b;}else{throw $$e;}}g=g+1|0;}}}catch($$e){$$je=Bb($$e);h=$$je;break a;}f.bK();return 1;}try{G(ABG(J().a(B(13)).a(j.C(0)).e()));}catch($$e){$$je=Bb($$e);h=$$je;}}f.bK();G(h);}
function Ik(b,c){return b!=c?0:1;}
function TO(b,c){var d;d=b-c|0;return d!=1&&d!=(-1)?0:1;}
function M5(b,c){var d,e;d=b<=4?b:9-b|0;e=c<=4?c:9-c|0;if(d<e)c=b;return c;}
function JK(){I.call(this);this.lj=null;}
function ADI(a){var b=new JK();Ys(b,a);return b;}
function Ys(a,b){a.lj=b;P(a);}
function Oe(a,b){return EO(b);}
function ID(){var a=this;I.call(a);a.ea=null;a.jy=null;}
function ACO(a,b){var c=new ID();YE(c,a,b);return c;}
function YE(a,b,c){a.jy=b;a.ea=c;P(a);}
function AAA(a,b){return a.G^a.ea.bQ(b);}
function WR(a){var b,c;b=J();c=a.ea.dr(0);while(c>=0){b.fE(CK(c));b.bt(124);c=a.ea.dr(c+1|0);}if(b.g()>0)b.iA(b.g()-1|0);return b.e();}
function D0(){var a=this;C.call(a);a.kZ=null;a.gz=0.0;a.lC=0.0;a.cp=null;a.cL=null;a.d8=null;a.bT=0;}
function AER(a,b,c){var d=new D0();MT(d,a,b,c);return d;}
function MT(a,b,c,d){M(a);a.cp=B(14);B7();a.cL=AES;a.d8=AES;if(c<=0.0)G(Bz(J().a(B(15)).im(c).e()));if(d>0.0){a.kZ=b;a.gz=c;a.lC=d;return;}G(Bz(J().a(B(16)).im(d).e()));}
function La(a,b){if(b!==null){a.cL=b;a.fZ(b);return a;}G(Bz(B(17)));}
function Xd(a,b){return;}
function HS(a,b){if(b!==null){a.d8=b;a.fw(b);return a;}G(Bz(B(17)));}
function XH(a,b){return;}
function FD(a,b,c,d){var e,f,g,$$je;if(!(a.bT==2&&!d)&&a.bT!=3){a.bT=d?2:1;while(true){try{e=a.jB(b,c);}catch($$e){$$je=Bb($$e);if($$je instanceof U){f=$$je;G(TM(f));}else{throw $$e;}}if(e.dd())return e;if(e.dK()){if(d&&BT(b)){g=a.cL;B7();if(g===AES)return BM(X(b));if(X(c)<=a.cp.g())return AET;b.er(BG(b)+X(b)|0);if(a.cL===AEU)DT(c,a.cp);}return e;}if(e.hZ()){g=a.cL;B7();if(g===AES)return e;if(a.cL===AEU){if(X(c)<a.cp.g())return AET;DT(c,a.cp);}b.er(BG(b)+e.g()|0);}else if(e.f5()){g=a.d8;B7();if(g===AES)break;if
(a.d8===AEU){if(X(c)<a.cp.g())return AET;DT(c,a.cp);}b.er(BG(b)+e.g()|0);}}return e;}G(C1());}
function MD(a,b){if(a.bT!=3&&a.bT!=2)G(C1());a.bT=3;return a.kO(b);}
function LE(a){a.bT=0;a.kI();return a;}
function I8(a,b){var c,d,e;if(a.bT&&a.bT!=3)G(C1());if(!X(b))return Mz(0);if(a.bT)LE(a);c=Mz(Bq(8,X(b)*a.gz|0));while(true){d=FD(a,b,c,0);if(d.dK())break;if(d.dd())c=Ep(a,c);if(!d.fW())continue;d.g2();}e=FD(a,b,c,1);if(e.fW())e.g2();while(true){e=MD(a,c);if(e.dK())break;c=Ep(a,c);}G$(c);return c;}
function Ep(a,b){var c,d,e;c=E$(b);d=c.data;d=EM(c,Bq(8,d.length*2|0));e=O5(d);e.fd(BG(b));return e;}
function O_(a,b){Bj();return AEV;}
function UO(a){return;}
function Bv(){BO.call(this);}
function AB6(a,b,c){var d=new Bv();CA(d,a,b,c);return d;}
function CA(a,b,c,d){C0(a,b,c,d);}
function OC(a,b,c,d){var e;if(!a.w.x(d))return a.f.b(b,c,d);e=a.w.b(b,c,d);if(e>=0)return e;return a.f.b(b,c,d);}
function Nf(){Bv.call(this);}
function ACD(a,b,c){var d=new Nf();Wb(d,a,b,c);return d;}
function Wb(a,b,c,d){CA(a,b,c,d);Ec();b.s(AEW);}
function S_(a,b,c,d){var e;while(true){e=a.w.b(b,c,d);if(e<=0)break;b=e;}return a.f.b(b,c,d);}
function LJ(){CE.call(this);}
function ADv(a,b){var c=new LJ();Wj(c,a,b);return c;}
function Wj(a,b,c){Fd(a,b,c);}
function NE(a,b,c,d){var e,f,g,h;e=a.c6(d);if(e!==null&&(b+e.g()|0)<=d.q()){f=0;while(true){if(f>=e.g()){d.D(a.c2,e.g());return a.f.b(b+e.g()|0,c,d);}g=BI(BA(e.d(f)));h=b+f|0;h=BA(c.d(h));if(g!=BI(h))break;f=f+1|0;}return (-1);}return (-1);}
function IA(){var a=this;I.call(a);a.h3=null;a.kR=null;}
function ABu(a,b){var c=new IA();TL(c,a,b);return c;}
function TL(a,b,c){a.kR=b;a.h3=c;P(a);}
function Tc(a,b){return a.h3.j(b);}
function D2(){C.call(this);this.j$=null;}
var AEX=null;var AEY=null;function Y2(){Y2=Be(D2);AAn();}
function UL(a){var b=new D2();Gs(b,a);return b;}
function Gs(a,b){Y2();M(a);a.j$=b;}
function AAn(){AEX=UL(B(18));AEY=UL(B(19));}
function IB(){var a=this;I.call(a);a.h8=null;a.lD=null;}
function ABX(a,b){var c=new IB();OB(c,a,b);return c;}
function OB(a,b,c){a.lD=b;a.h8=c;P(a);}
function Wi(a,b){return a.h8.j(b)?0:1;}
function IC(){var a=this;I.call(a);a.hw=0;a.h6=null;a.iu=null;a.jN=null;}
function ACF(a,b,c,d){var e=new IC();To(e,a,b,c,d);return e;}
function To(a,b,c,d,e){a.jN=b;a.hw=c;a.h6=d;a.iu=e;P(a);}
function AAV(a,b){return !(a.hw^a.h6.j(b))&&!a.iu.j(b)?0:1;}
function Lv(){C.call(this);}
function RV(b){var c,d,e,f,g,h;c=0;d=1;while(true){e=b.ho.data;f=b.iV;b.iV=f+1|0;g=Qz(e[f]);h=(g%2|0)!=1?0:1;c=c+Ce(d,g/2|0)|0;d=d*46|0;if(!h)break;}return c;}
function Hq(b){var c,d;c=RV(b);d=c/2|0;if(c%2|0)d= -d;return d;}
function Qz(b){if(b<34)return b-32|0;if(b>=92)return (b-32|0)-2|0;return (b-32|0)-1|0;}
function Ma(){var a=this;L.call(a);a.fD=0;a.eE=0;a.hP=0;}
function T(a,b){var c=new Ma();SX(c,a,b);return c;}
function AD_(a,b,c){var d=new Ma();Yw(d,a,b,c);return d;}
function SX(a,b,c){Q(a);a.eE=c;a.fD=b;}
function Yw(a,b,c,d){Q(a);a.hP=d;a.eE=c;a.fD=b;}
function VV(a){var b;b=ADJ(a.fD);if(a.hP)b.K.d7(0,2048);b.y=a.eE;return b;}
function Jk(){var a=this;I.call(a);a.is=0;a.gM=null;a.gY=null;a.kF=null;}
function AD8(a,b,c,d){var e=new Jk();V$(e,a,b,c,d);return e;}
function V$(a,b,c,d,e){a.kF=b;a.is=c;a.gM=d;a.gY=e;P(a);}
function Xg(a,b){return !(a.is^a.gM.j(b))&&!a.gY.j(b)?1:0;}
function IE(){var a=this;I.call(a);a.hC=0;a.g9=null;a.jb=null;a.kn=null;}
function AD1(a,b,c,d){var e=new IE();UD(e,a,b,c,d);return e;}
function UD(a,b,c,d,e){a.kn=b;a.hC=c;a.g9=d;a.jb=e;P(a);}
function Rt(a,b){return a.hC^a.g9.j(b)&&a.jb.j(b)?1:0;}
function GF(){Z.call(this);this.dP=null;}
function AD2(a){var b=new GF();Wp(b,a);return b;}
function Wp(a,b){var c,d;BH(a);c=J();d=0;while(d<b.g()){c.bt(BI(BA(b.d(d))));d=d+1|0;}a.dP=c.e();a.Q=c.g();}
function NJ(a,b,c){var d;d=0;while(true){if(d>=a.dP.g())return a.dP.g();if(a.dP.d(d)!=BI(BA(c.d(b+d|0))))break;d=d+1|0;}return (-1);}
function IF(){var a=this;I.call(a);a.he=0;a.gI=null;a.hv=null;a.kX=null;}
function ACv(a,b,c,d){var e=new IF();O4(e,a,b,c,d);return e;}
function O4(a,b,c,d,e){a.kX=b;a.he=c;a.gI=d;a.hv=e;P(a);}
function RW(a,b){return a.he^a.gI.j(b)&&a.hv.j(b)?0:1;}
function Ms(){BO.call(this);}
function AC9(a,b,c){var d=new Ms();PY(d,a,b,c);return d;}
function PY(a,b,c,d){C0(a,b,c,d);}
function AAd(a,b,c,d){var e;e=d.q();if(e>b)return a.f.bf(b,e,c,d);return a.f.b(b,c,d);}
function VB(a,b,c,d){var e;e=d.q();if(a.f.bf(b,e,c,d)>=0)return b;return (-1);}
function IG(){var a=this;I.call(a);a.iF=null;a.gT=0;a.jg=null;}
function ABO(a,b,c){var d=new IG();Qi(d,a,b,c);return d;}
function Qi(a,b,c,d){a.jg=b;a.iF=c;a.gT=d;P(a);}
function Zb(a,b){return a.iF.j(b)&&a.gT^a.jg.v.bQ(b)?1:0;}
function Lq(){I.call(this);this.k3=null;}
function ADW(a){var b=new Lq();Np(b,a);return b;}
function Np(a,b){a.k3=b;P(a);}
function YR(a,b){return MY(b);}
function Iz(){var a=this;I.call(a);a.hl=null;a.jf=0;a.gS=null;}
function ADZ(a,b,c){var d=new Iz();NY(d,a,b,c);return d;}
function NY(a,b,c,d){a.gS=b;a.hl=c;a.jf=d;P(a);}
function Wh(a,b){return a.hl.j(b)&&a.jf^a.gS.v.bQ(b)?0:1;}
function Bt(){var a=this;R.call(a);a.fh=0;a.c9=0;}
var AEW=null;function Ec(){Ec=Be(Bt);Ve();}
function ACm(a){var b=new Bt();Ck(b,a);return b;}
function Ck(a,b){Ec();Bo(a);a.c9=b;}
function Qs(a,b,c,d){var e,f;e=d.eB(a.c9);d.fC(a.c9,b);f=a.f.b(b,c,d);if(f<0)d.fC(a.c9,e);return f;}
function Od(a){return a.c9;}
function Rs(a,b){return 0;}
function Ve(){AEW=AB$();}
function Fy(){Bt.call(this);}
function AEZ(a){var b=new Fy();Lo(b,a);return b;}
function Lo(a,b){Ck(a,b);}
function RH(a,b,c,d){var e,f;e=a.c_();f=d.bF(e);if(f!=b)b=(-1);return b;}
function CH(){var a=this;C.call(a);a.l=null;a.E=0;}
function AE0(){var a=new CH();EZ(a);return a;}
function ADB(a){var b=new CH();EJ(b,a);return b;}
function AE1(a){var b=new CH();Mu(b,a);return b;}
function AE2(a){var b=new CH();JT(b,a);return b;}
function EZ(a){EJ(a,16);}
function EJ(a,b){M(a);a.l=$rt_createCharArray(b);}
function Mu(a,b){JT(a,b);}
function JT(a,b){var c;M(a);a.l=$rt_createCharArray(b.g());c=0;while(c<a.l.data.length){a.l.data[c]=b.d(c);c=c+1|0;}a.E=b.g();}
function ES(a,b){return a.d_(a.E,b);}
function Fv(a,b,c){var d,e,f;if(b>=0&&b<=a.E){if(c===null)c=B(20);else if(c.H())return a;a.b3(a.E+c.g()|0);d=a.E-1|0;while(d>=b){a.l.data[d+c.g()|0]=a.l.data[d];d=d+(-1)|0;}a.E=a.E+c.g()|0;d=0;while(d<c.g()){e=a.l.data;f=b+1|0;e[b]=c.d(d);d=d+1|0;b=f;}return a;}G(Fh());}
function Io(a,b){return a.g0(b,10);}
function PN(a,b,c){return a.jI(a.E,b,c);}
function Yt(a,b,c,d){var e,f,g,h,i,j,k,l;e=1;if(c<0){e=0;c= -c;}a:{if(c<d){if(e)BC(a,b,b+1|0);else{BC(a,b,b+2|0);f=a.l.data;g=b+1|0;f[b]=45;b=g;}a.l.data[b]=Eb(c,d);}else{h=1;i=1;j=2147483647/d|0;b:{while(true){k=Ce(h,d);if(k>c){k=h;break b;}i=i+1|0;if(k>j)break;h=k;}}if(!e)i=i+1|0;BC(a,b,b+i|0);if(e)l=b;else{f=a.l.data;l=b+1|0;f[b]=45;}while(true){if(k<=0)break a;f=a.l.data;g=l+1|0;f[l]=Eb(c/k|0,d);c=c%k|0;k=k/d|0;l=g;}}}return a;}
function Kj(a,b){return a.i3(a.E,b);}
function HE(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=B4(c,0.0);if(!d){BC(a,b,b+3|0);e=a.l.data;d=b+1|0;e[b]=48;e=a.l.data;f=d+1|0;e[d]=46;a.l.data[f]=48;return a;}if(!d){BC(a,b,b+4|0);e=a.l.data;d=b+1|0;e[b]=45;e=a.l.data;f=d+1|0;e[d]=48;e=a.l.data;d=f+1|0;e[f]=46;a.l.data[d]=48;return a;}if(isNaN(c)?1:0){BC(a,b,b+3|0);e=a.l.data;d=b+1|0;e[b]=78;e=a.l.data;f=d+1|0;e[d]=97;a.l.data[f]=78;return a;}if(!isFinite(c)?1:0){if(d>0){BC(a,b,b+8|0);d=b;}else{BC(a,b,b+9|0);e=a.l.data;d=b+1|0;e[b]=45;}e=a.l.data;f=d+
1|0;e[d]=73;e=a.l.data;d=f+1|0;e[f]=110;e=a.l.data;f=d+1|0;e[d]=102;e=a.l.data;d=f+1|0;e[f]=105;e=a.l.data;f=d+1|0;e[d]=110;e=a.l.data;d=f+1|0;e[f]=105;e=a.l.data;f=d+1|0;e[d]=116;a.l.data[f]=121;return a;}ACk();g=AEA;Hf(c,g);h=g.fV;i=g.ft;j=g.hb;k=1;l=1;if(j){j=1;l=2;}m=9;n=VN(h);if(n>0)m=m-n|0;if(i<7&&i>=(-3)){if(i>=0){k=i+1|0;m=Bq(m,k+1|0);i=0;}else if(i<0){h=h/AEw.data[ -i]|0;m=m-i|0;i=0;}}if(i){l=l+2|0;if(!(i>(-10)&&i<10))l=l+1|0;if(i<0)l=l+1|0;}if(i&&m==k)m=m+1|0;d=l+m|0;BC(a,b,b+d|0);if(!j)f=b;else{e
=a.l.data;f=b+1|0;e[b]=45;}o=100000000;p=0;while(p<m){if(o<=0)q=0;else{q=h/o|0;h=h%o|0;}e=a.l.data;d=f+1|0;e[f]=(48+q|0)&65535;k=k+(-1)|0;if(k)f=d;else{e=a.l.data;f=d+1|0;e[d]=46;}o=o/10|0;p=p+1|0;}if(i){e=a.l.data;d=f+1|0;e[f]=69;if(i>=0)f=d;else{i= -i;e=a.l.data;f=d+1|0;e[d]=45;}if(i<10)r=f;else{e=a.l.data;r=f+1|0;e[f]=(48+(i/10|0)|0)&65535;}a.l.data[r]=(48+(i%10|0)|0)&65535;}return a;}
function VN(b){var c,d,e,f;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;f=e*100|0;if(b%f|0)f=e;else c=c|2;if(!(b%(f*10|0)|0))c=c|1;return c;}
function F$(a,b){return a.fS(a.E,b);}
function F6(a,b,c){BC(a,b,b+1|0);a.l.data[b]=c;return a;}
function L9(a,b){return a.hR(a.E,b);}
function Ko(a,b,c){return a.d_(b,c===null?B(20):c.e());}
function ET(a,b){var c,d;if(a.l.data.length>=b)return;if(a.l.data.length>=1073741823)c=2147483647;else{d=a.l.data.length*2|0;c=Bq(b,Bq(d,5));}a.l=EM(a.l,c);}
function EF(a){return Fb(a.l,0,a.E);}
function FT(a){return a.E;}
function Hg(a,b){if(b>=0&&b<a.E)return a.l.data[b];G(Cp());}
function F1(a,b,c,d){return a.e$(a.E,b,c,d);}
function EG(a,b,c,d,e){var f,g,h,i,j;BC(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.l.data;i=b+1|0;j=d+1|0;h[b]=g[d];b=i;d=j;}return a;}
function EV(a,b){return a.f2(b,0,b.data.length);}
function K6(a,b,c,d,e){var f,g,h,i;if(b>c)G(Bp(B(21)));while(b<c){f=d.data;g=e+1|0;h=a.l.data;i=b+1|0;f[e]=h[b];e=g;b=i;}}
function FH(a,b){a.E=b;}
function Lf(a,b){var c,d,e;if(b>=0&&b<a.E){a.E=a.E-1|0;while(b<a.E){c=a.l.data;d=a.l.data;e=b+1|0;c[b]=d[e];b=e;}return a;}G(Fh());}
function LI(a,b,c){var d,e,f,g,h,i;d=B4(b,c);if(d<=0&&b<=a.E){if(!d)return a;e=a.E-c|0;a.E=a.E-(c-b|0)|0;f=0;while(f<e){g=a.l.data;d=b+1|0;h=a.l.data;i=c+1|0;g[b]=h[c];f=f+1|0;b=d;c=i;}return a;}G(Fh());}
function BC(a,b,c){var d,e;d=a.E-b|0;a.b3((a.E+c|0)-b|0);e=d-1|0;while(e>=0){a.l.data[c+e|0]=a.l.data[b+e|0];e=e+(-1)|0;}a.E=a.E+(c-b|0)|0;}
function Dd(){}
function GW(){CH.call(this);}
function GX(a){var b=new GW();Zy(b,a);return b;}
function J(){var a=new GW();YT(a);return a;}
function Zy(a,b){EJ(a,b);}
function YT(a){EZ(a);}
function Ov(a,b){ES(a,b);return a;}
function Pk(a,b){Io(a,b);return a;}
function Xp(a,b){Kj(a,b);return a;}
function Og(a,b){F$(a,b);return a;}
function Tq(a,b,c,d){F1(a,b,c,d);return a;}
function U8(a,b){EV(a,b);return a;}
function OD(a,b){L9(a,b);return a;}
function Vz(a,b,c){HE(a,b,c);return a;}
function S7(a,b,c,d,e){EG(a,b,c,d,e);return a;}
function ZF(a,b,c){Ko(a,b,c);return a;}
function P$(a,b,c){F6(a,b,c);return a;}
function XX(a,b,c){LI(a,b,c);return a;}
function VS(a,b){Lf(a,b);return a;}
function ZY(a,b,c){Fv(a,b,c);return a;}
function Z_(a,b){FH(a,b);}
function UZ(a,b,c,d,e){K6(a,b,c,d,e);}
function ZQ(a,b,c,d,e){return a.l1(b,c,d,e);}
function Um(a,b,c,d){return a.jT(b,c,d);}
function Ra(a){return FT(a);}
function RL(a){return EF(a);}
function AAe(a,b){ET(a,b);}
function OA(a,b,c){return a.ka(b,c);}
function NF(a,b,c){return a.lt(b,c);}
function Xs(a,b,c){return a.lg(b,c);}
function AAD(a,b,c){return a.j8(b,c);}
function DH(){Eg.call(this);}
function AA3(){var a=new DH();Mf(a);return a;}
function Mf(a){Jp(a);}
function KM(a){return Jh(a).J(48,57);}
function K0(){U.call(this);}
function ABY(){var a=new K0();Z0(a);return a;}
function Z0(a){BB(a);}
function KN(){var a=this;W.call(a);a.fJ=null;a.e8=null;}
function E1(a,b){var c=new KN();Y9(c,a,b);return c;}
function Y9(a,b,c){BD(a);a.fJ=b;a.e8=c;}
function Ql(a,b,c,d){var e;e=a.fJ.b(b,c,d);if(e<0)e=a.e8.b(b,c,d);if(e>=0)return e;return (-1);}
function QC(a,b){a.f=b;a.e8.s(b);a.fJ.s(b);}
function R1(a,b){return 1;}
function Rk(a,b){return 1;}
function Gc(){}
function Dv(){}
function E9(){}
function BW(){C.call(this);}
function AE3(){var a=new BW();CS(a);return a;}
function CS(a){M(a);}
function OU(a,b,c,d){var e,f,g;e=0;while(e<d){f=b.data;g=c+1|0;a.e3(f[c]);e=e+1|0;c=g;}}
function ME(){var a=this;BW.call(a);a.b7=null;a.cu=0;}
function AA8(){var a=new ME();Z$(a);return a;}
function AE4(a){var b=new ME();H9(b,a);return b;}
function Z$(a){H9(a,32);}
function H9(a,b){CS(a);a.b7=$rt_createByteArray(b);}
function OT(a,b){var c,d;ER(a,a.cu+1|0);c=a.b7.data;d=a.cu;a.cu=d+1|0;c[d]=b<<24>>24;}
function Qf(a,b,c,d){var e,f,g,h,i;ER(a,a.cu+d|0);e=0;while(e<d){f=b.data;g=a.b7.data;h=a.cu;a.cu=h+1|0;i=c+1|0;g[h]=f[c];e=e+1|0;c=i;}}
function ER(a,b){var c;if(a.b7.data.length<b){c=Bq(b,(a.b7.data.length*3|0)/2|0);a.b7=FS(a.b7,c);}}
function Xe(a,b){return ABT(a.b7,0,a.cu,b);}
function GZ(){var a=this;W.call(a);a.ic=null;a.jx=0;}
function AA7(a){var b=new GZ();WI(b,a);return b;}
function WI(a,b){BD(a);a.ic=b.c8();a.jx=b.G;}
function VE(a,b){a.f=b;}
function X8(a,b,c,d){var e,f,g,h,i,j,k;e=d.bw();f=d.q();g=b+1|0;h=B4(g,f);if(h>0){d.by=1;return (-1);}i=c.d(b);if(!a.ic.j(i))return (-1);if(Bm(i)){if(h<0){j=c.d(g);if(Bu(j))return (-1);}}else if(Bu(i)&&b>e){k=c.d(b-1|0);if(Bm(k))return (-1);}return a.f.b(g,c,d);}
function Mr(){Bv.call(this);}
function ACZ(a,b,c){var d=new Mr();Sf(d,a,b,c);return d;}
function Sf(a,b,c,d){CA(a,b,c,d);}
function Zj(a,b,c,d){var e;if(!a.w.x(d))return a.f.b(b,c,d);e=a.f.b(b,c,d);if(e>=0)return e;return a.w.b(b,c,d);}
function Co(){Bt.call(this);}
function ADx(){var a=new Co();Wq(a);return a;}
function Wq(a){Ck(a,0);}
function XD(a,b,c,d){if(d.ij()!=1&&b!=d.q())return (-1);d.jR();d.fC(0,b);return b;}
function Ie(){B9.call(this);}
function TM(a){var b=new Ie();Ox(b,a);return b;}
function Ox(a,b){Ij(a,b);}
function J8(){Bv.call(this);}
function ABf(a,b,c){var d=new J8();ZD(d,a,b,c);return d;}
function ZD(a,b,c,d){CA(a,b,c,d);Ec();b.s(AEW);}
function OS(a,b,c,d){var e,f;e=a.w.b(b,c,d);if(e<0)return (-1);if(e>b){while(true){f=a.w.b(e,c,d);if(f<=e)break;e=f;}b=e;}return a.f.b(b,c,d);}
function Kt(){Z.call(this);}
function Cu(a){var b=new Kt();Ow(b,a);return b;}
function Ow(a,b){Hw(a,b);a.Q=0;}
function UJ(a,b,c){return 0;}
function VC(a,b,c,d){var e,f,g,h,i;e=d.q();f=d.bw();while(true){g=B4(b,e);if(g>0)return (-1);if(g<0){h=c.d(b);if(Bu(h)&&b>f){i=c.d(b-1|0);if(Bm(i)){b=b+1|0;continue;}}}if(a.f.b(b,c,d)>=0)break;b=b+1|0;}return b;}
function SK(a,b,c,d,e){var f,g,h,i;f=e.q();g=e.bw();while(true){if(c<b)return (-1);if(c<f){h=d.d(c);if(Bu(h)&&c>g){i=d.d(c-1|0);if(Bm(i)){c=c+(-1)|0;continue;}}}if(a.f.b(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function Pg(a,b){return 0;}
function Ip(){CH.call(this);}
function S0(){var a=new Ip();XO(a);return a;}
function ACg(a){var b=new Ip();ZC(b,a);return b;}
function XO(a){EZ(a);}
function ZC(a,b){Mu(a,b);}
function TW(a,b){ES(a,b);return a;}
function VF(a,b){F$(a,b);return a;}
function Zi(a,b,c,d){F1(a,b,c,d);return a;}
function UN(a,b){EV(a,b);return a;}
function Oo(a,b,c,d,e){EG(a,b,c,d,e);return a;}
function XW(a,b,c){F6(a,b,c);return a;}
function TZ(a,b,c){Fv(a,b,c);return a;}
function OY(a,b){FH(a,b);}
function VR(a,b,c,d,e){return a.jM(b,c,d,e);}
function Rp(a,b,c,d){return a.l2(b,c,d);}
function NZ(a,b){return Hg(a,b);}
function Z5(a){return FT(a);}
function RF(a){return EF(a);}
function R_(a,b){ET(a,b);}
function VI(a,b,c){return a.lR(b,c);}
function Om(a,b,c){return a.k5(b,c);}
function CD(){var a=this;C.call(a);a.f3=0;a.L=0;a.bM=0;a.de=0;}
function AE5(a){var b=new CD();FB(b,a);return b;}
function FB(a,b){M(a);a.de=(-1);a.f3=b;a.bM=b;}
function Ke(a){return a.f3;}
function BG(a){return a.L;}
function FI(a,b){if(b>=0&&b<=a.bM){a.L=b;if(b<a.de)a.de=0;return a;}G(Bz(J().a(B(22)).m(b).a(B(23)).m(a.bM).a(B(24)).e()));}
function KF(a){return a.bM;}
function IX(a){a.L=0;a.bM=a.f3;a.de=(-1);return a;}
function MK(a){a.bM=a.L;a.L=0;a.de=(-1);return a;}
function X(a){return a.bM-a.L|0;}
function BT(a){return a.L>=a.bM?0:1;}
function Gw(){I.call(this);this.jt=null;}
function ABb(a){var b=new Gw();Zp(b,a);return b;}
function Zp(a,b){a.jt=b;P(a);}
function Y3(a,b){return KG(b);}
function Da(){C.call(this);}
var AE6=null;var AE7=null;var AE8=null;function ACl(){ACl=Be(Da);Uz();}
function ADC(){var a=new Da();KI(a);return a;}
function KI(a){ACl();M(a);}
function LD(a,b){var c,d,e;c=0;while(true){if(c>=AE8.data.length)G(ABh(B(25),B(25),b));d=AE8.data[c];e=d.data;if(b.bz(e[0]))break;c=c+1|0;}return e[1];}
function Uz(){var b,c,d,e;AE6=ACS();AE7=ADV();b=F($rt_arraycls(C),194);c=b.data;d=F(C,2);e=d.data;e[0]=B(26);e[1]=ADT();c[0]=d;d=F(C,2);e=d.data;e[0]=B(27);e[1]=AA9();c[1]=d;d=F(C,2);e=d.data;e[0]=B(28);e[1]=ACK();c[2]=d;d=F(C,2);e=d.data;e[0]=B(29);e[1]=ADl();c[3]=d;d=F(C,2);e=d.data;e[0]=B(30);e[1]=AE7;c[4]=d;d=F(C,2);e=d.data;e[0]=B(31);e[1]=AA3();c[5]=d;d=F(C,2);e=d.data;e[0]=B(32);e[1]=ADN();c[6]=d;d=F(C,2);e=d.data;e[0]=B(33);e[1]=ABB();c[7]=d;d=F(C,2);e=d.data;e[0]=B(34);e[1]=ABl();c[8]=d;d=F(C,2);e=
d.data;e[0]=B(35);e[1]=ABP();c[9]=d;d=F(C,2);e=d.data;e[0]=B(36);e[1]=ACM();c[10]=d;d=F(C,2);e=d.data;e[0]=B(37);e[1]=ABH();c[11]=d;d=F(C,2);e=d.data;e[0]=B(38);e[1]=AB1();c[12]=d;d=F(C,2);e=d.data;e[0]=B(39);e[1]=AA4();c[13]=d;d=F(C,2);e=d.data;e[0]=B(40);e[1]=AC_();c[14]=d;d=F(C,2);e=d.data;e[0]=B(41);e[1]=ACE();c[15]=d;d=F(C,2);e=d.data;e[0]=B(42);e[1]=AA1();c[16]=d;d=F(C,2);e=d.data;e[0]=B(43);e[1]=ACy();c[17]=d;d=F(C,2);e=d.data;e[0]=B(44);e[1]=AA2();c[18]=d;d=F(C,2);e=d.data;e[0]=B(45);e[1]=ABW();c[19]
=d;d=F(C,2);e=d.data;e[0]=B(46);e[1]=ADy();c[20]=d;d=F(C,2);e=d.data;e[0]=B(47);e[1]=ACd();c[21]=d;d=F(C,2);e=d.data;e[0]=B(48);e[1]=ABd();c[22]=d;d=F(C,2);e=d.data;e[0]=B(49);e[1]=ACH();c[23]=d;d=F(C,2);e=d.data;e[0]=B(50);e[1]=ACw();c[24]=d;d=F(C,2);e=d.data;e[0]=B(51);e[1]=ADs();c[25]=d;d=F(C,2);e=d.data;e[0]=B(52);e[1]=ABV();c[26]=d;d=F(C,2);e=d.data;e[0]=B(53);e[1]=ACc();c[27]=d;d=F(C,2);e=d.data;e[0]=B(54);e[1]=AE6;c[28]=d;d=F(C,2);e=d.data;e[0]=B(55);e[1]=ABp();c[29]=d;d=F(C,2);e=d.data;e[0]=B(56);e[1]
=ABD();c[30]=d;d=F(C,2);e=d.data;e[0]=B(57);e[1]=AE6;c[31]=d;d=F(C,2);e=d.data;e[0]=B(58);e[1]=AAX();c[32]=d;d=F(C,2);e=d.data;e[0]=B(59);e[1]=AE7;c[33]=d;d=F(C,2);e=d.data;e[0]=B(60);e[1]=ADa();c[34]=d;d=F(C,2);e=d.data;e[0]=B(61);e[1]=H(0,127);c[35]=d;d=F(C,2);e=d.data;e[0]=B(62);e[1]=H(128,255);c[36]=d;d=F(C,2);e=d.data;e[0]=B(63);e[1]=H(256,383);c[37]=d;d=F(C,2);e=d.data;e[0]=B(64);e[1]=H(384,591);c[38]=d;d=F(C,2);e=d.data;e[0]=B(65);e[1]=H(592,687);c[39]=d;d=F(C,2);e=d.data;e[0]=B(66);e[1]=H(688,767);c[40]
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
=d;d=F(C,2);e=d.data;e[0]=B(176);e[1]=H(65056,65071);c[150]=d;d=F(C,2);e=d.data;e[0]=B(177);e[1]=H(65072,65103);c[151]=d;d=F(C,2);e=d.data;e[0]=B(178);e[1]=H(65104,65135);c[152]=d;d=F(C,2);e=d.data;e[0]=B(179);e[1]=H(65136,65279);c[153]=d;d=F(C,2);e=d.data;e[0]=B(180);e[1]=H(65280,65519);c[154]=d;d=F(C,2);e=d.data;e[0]=B(181);e[1]=H(0,1114111);c[155]=d;d=F(C,2);e=d.data;e[0]=B(182);e[1]=ABJ();c[156]=d;d=F(C,2);e=d.data;e[0]=B(183);e[1]=T(0,1);c[157]=d;d=F(C,2);e=d.data;e[0]=B(184);e[1]=Dc(62,1);c[158]=d;d=F(C,
2);e=d.data;e[0]=B(185);e[1]=T(1,1);c[159]=d;d=F(C,2);e=d.data;e[0]=B(186);e[1]=T(2,1);c[160]=d;d=F(C,2);e=d.data;e[0]=B(187);e[1]=T(3,0);c[161]=d;d=F(C,2);e=d.data;e[0]=B(188);e[1]=T(4,0);c[162]=d;d=F(C,2);e=d.data;e[0]=B(189);e[1]=T(5,1);c[163]=d;d=F(C,2);e=d.data;e[0]=B(190);e[1]=Dc(448,1);c[164]=d;d=F(C,2);e=d.data;e[0]=B(191);e[1]=T(6,1);c[165]=d;d=F(C,2);e=d.data;e[0]=B(192);e[1]=T(7,0);c[166]=d;d=F(C,2);e=d.data;e[0]=B(193);e[1]=T(8,1);c[167]=d;d=F(C,2);e=d.data;e[0]=B(194);e[1]=Dc(3584,1);c[168]=d;d
=F(C,2);e=d.data;e[0]=B(195);e[1]=T(9,1);c[169]=d;d=F(C,2);e=d.data;e[0]=B(196);e[1]=T(10,1);c[170]=d;d=F(C,2);e=d.data;e[0]=B(197);e[1]=T(11,1);c[171]=d;d=F(C,2);e=d.data;e[0]=B(198);e[1]=Dc(28672,0);c[172]=d;d=F(C,2);e=d.data;e[0]=B(199);e[1]=T(12,0);c[173]=d;d=F(C,2);e=d.data;e[0]=B(200);e[1]=T(13,0);c[174]=d;d=F(C,2);e=d.data;e[0]=B(201);e[1]=T(14,0);c[175]=d;d=F(C,2);e=d.data;e[0]=B(202);e[1]=ADD(983040,1,1);c[176]=d;d=F(C,2);e=d.data;e[0]=B(203);e[1]=T(15,0);c[177]=d;d=F(C,2);e=d.data;e[0]=B(204);e[1]
=T(16,1);c[178]=d;d=F(C,2);e=d.data;e[0]=B(205);e[1]=T(18,1);c[179]=d;d=F(C,2);e=d.data;e[0]=B(206);e[1]=AD_(19,0,1);c[180]=d;d=F(C,2);e=d.data;e[0]=B(207);e[1]=Dc(1643118592,1);c[181]=d;d=F(C,2);e=d.data;e[0]=B(208);e[1]=T(20,0);c[182]=d;d=F(C,2);e=d.data;e[0]=B(209);e[1]=T(21,0);c[183]=d;d=F(C,2);e=d.data;e[0]=B(210);e[1]=T(22,0);c[184]=d;d=F(C,2);e=d.data;e[0]=B(211);e[1]=T(23,0);c[185]=d;d=F(C,2);e=d.data;e[0]=B(212);e[1]=T(24,1);c[186]=d;d=F(C,2);e=d.data;e[0]=B(213);e[1]=Dc(2113929216,1);c[187]=d;d=F(C,
2);e=d.data;e[0]=B(214);e[1]=T(25,1);c[188]=d;d=F(C,2);e=d.data;e[0]=B(215);e[1]=T(26,0);c[189]=d;d=F(C,2);e=d.data;e[0]=B(216);e[1]=T(27,0);c[190]=d;d=F(C,2);e=d.data;e[0]=B(217);e[1]=T(28,1);c[191]=d;d=F(C,2);e=d.data;e[0]=B(218);e[1]=T(29,0);c[192]=d;d=F(C,2);e=d.data;e[0]=B(219);e[1]=T(30,0);c[193]=d;AE8=b;}
function Gp(){L.call(this);}
function ABd(){var a=new Gp();Sr(a);return a;}
function Sr(a){Q(a);}
function WD(a){var b;b=ACp(a);b.y=1;return b;}
function Ci(){var a=this;W.call(a);a.db=0;a.fx=null;a.eO=null;a.eF=0;}
function AD7(a,b){var c=new Ci();EU(c,a,b);return c;}
function EU(a,b,c){BD(a);a.db=1;a.eO=b;a.eF=c;}
function YV(a,b){a.f=b;}
function QD(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;e=$rt_createIntArray(4);f=0;g=d.q();if(b>=g)return (-1);h=a.ge(b,c,g);i=b+a.db|0;j=KW(h);if(j===null){k=e.data;l=1;k[f]=h;}else{l=j.data.length;Gt(j,0,e,0,l);l=f+l|0;}a:{if(i<g){m=a.ge(i,c,g);while(l<4){if(!Rg(m)){k=e.data;n=l+1|0;k[l]=m;}else{k=KW(m).data;if(k.length!=2){o=e.data;n=l+1|0;o[l]=k[0];}else{o=e.data;m=l+1|0;o[l]=k[0];n=m+1|0;o[m]=k[1];}}i=i+a.db|0;if(i>=g){l=n;break a;}m=a.ge(i,c,g);l=n;}}}if(l!=a.eF)return (-1);p=0;while(true){if(p>=l)return a.f.b(i,
c,d);if(e.data[p]!=a.eO.data[p])break;p=p+1|0;}return (-1);}
function FP(a){var b,c;if(a.fx===null){b=J();c=0;while(c<a.eF){b.fE(CK(a.eO.data[c]));c=c+1|0;}a.fx=b.e();}return a.fx;}
function YJ(a,b,c,d){var e,f,g,h,i;a.db=1;if(b>=(d-1|0))e=c.d(b);else{f=b+1|0;e=c.d(b);g=c.d(f);if(CU(e,g)){h=$rt_createCharArray(2);i=h.data;i[0]=e;i[1]=g;e=Ix(h,0);a.db=2;}}return e;}
function ZP(a,b){var c,d;a:{if(b instanceof Ci){c=b;if(!FP(c).bz(FP(a))){d=0;break a;}}d=1;}return d;}
function SJ(a,b){return 1;}
function H_(){Ci.call(this);}
function AD0(a,b){var c=new H_();RX(c,a,b);return c;}
function RX(a,b,c){EU(a,b,c);}
function CO(){var a=this;C.call(a);a.g$=null;a.kS=0;}
function AE9(a,b){var c=new CO();FU(c,a,b);return c;}
function FU(a,b,c){M(a);a.g$=b;a.kS=c;}
function MP(a){return a.g$;}
function J7(b,c){var d,e,f,g,h;d=b.kc();if(d===null)G(Bz(J().a(B(220)).a(b.bZ()).e()));e=d.data;f=e.length;g=0;while(true){if(g>=f)G(Bz(J().a(B(221)).a(b.bZ()).a(B(222)).ie(c).a(B(223)).e()));h=e[g];if(MP(h).bz(c))break;g=g+1|0;}return h;}
function B$(){CO.call(this);}
var AE$=null;var AE_=null;var AFa=null;var AFb=null;function DV(){DV=Be(B$);Qo();}
function KL(a,b){var c=new B$();Hk(c,a,b);return c;}
function RN(){DV();return AFb.dI();}
function Hu(b){DV();return J7(D(B$),b);}
function Hk(a,b,c){DV();FU(a,b,c);}
function Qo(){var b,c;AE$=KL(B(224),0);AE_=KL(B(225),1);AFa=KL(B(226),2);b=F(B$,3);c=b.data;c[0]=AE$;c[1]=AE_;c[2]=AFa;AFb=b;}
function CC(){CP.call(this);}
function AFc(a){var b=new CC();FO(b,a);return b;}
function FO(a,b){G8(a,b);}
function K7(){CC.call(this);}
function AFd(a){var b=new K7();SI(b,a);return b;}
function SI(a,b){FO(a,b);}
function MC(){Bt.call(this);}
function AA$(){var a=new MC();Nr(a);return a;}
function Nr(a){Ck(a,(-1));}
function S1(a,b,c,d){return b;}
function J9(){L.call(this);}
function ACK(){var a=new J9();Q8(a);return a;}
function Q8(a){Q(a);}
function U6(a){return By().J(0,127);}
function Ea(){W.call(this);}
function ADH(a,b){var c=new Ea();HT(c,a,b);return c;}
function HT(a,b,c){H4(a,b,c);}
function QE(a,b,c,d){var e,f,g,h,i;e=d.bF(a.A);d.D(a.A,b);f=a.O.T();g=0;while(true){if(g>=f){d.D(a.A,e);return (-1);}h=a.O.C(g);i=h.b(b,c,d);if(i>=0)break;g=g+1|0;}return i;}
function Th(a,b){var c;c=b.bF(a.A);return !c?0:1;}
function BV(){Ea.call(this);}
function ABq(a,b){var c=new BV();Dh(c,a,b);return c;}
function Dh(a,b,c){HT(a,b,c);}
function T4(a,b,c,d){var e,f,g,h,i;e=d.bF(a.A);d.D(a.A,b);f=a.O.T();g=0;while(g<f){h=a.O.C(g);i=h.b(b,c,d);if(i>=0)return a.f.b(a.br.bu(),c,d);g=g+1|0;}d.D(a.A,e);return (-1);}
function SG(a,b){a.f=b;}
function GP(){BV.call(this);}
function ACs(a,b){var c=new GP();WJ(c,a,b);return c;}
function WJ(a,b,c){Dh(a,b,c);}
function QQ(a,b,c,d){var e,f,g,h;e=a.O.T();f=0;while(f<e){g=a.O.C(f);h=g.b(b,c,d);if(h>=0)return a.f.b(b,c,d);f=f+1|0;}return (-1);}
function W8(a,b){return 0;}
function Cy(){C.call(this);this.lb=null;}
function AFe(){var a=new Cy();EN(a);return a;}
function AFf(a){var b=new Cy();Ls(b,a);return b;}
function EN(a){Ls(a,ACn());}
function Ls(a,b){M(a);a.lb=b;}
function M6(){var a=this;Cy.call(a);a.cY=null;a.eA=0;}
function EC(a){var b=new M6();TJ(b,a);return b;}
function TJ(a,b){EN(a);if(b!==null){a.cY=b;return;}G(RK());}
function TF(a,b,c,d){var e,f,g,h,i,j;MU(a);if(a.eA>=a.cY.g())return (-1);e=V(a.cY.g()-a.eA|0,d);f=0;while(f<e){g=b.data;h=c+1|0;i=a.cY;j=a.eA;a.eA=j+1|0;g[c]=i.d(j);f=f+1|0;c=h;}return e;}
function Ns(a){a.cY=null;}
function MU(a){if(a.cY!==null)return;G(PJ());}
function Kx(){BV.call(this);}
function AA5(a,b){var c=new Kx();Vy(c,a,b);return c;}
function Vy(a,b,c){Dh(a,b,c);}
function Rf(a,b,c,d){var e,f,g;e=a.O.T();f=0;while(true){if(f>=e)return a.f.b(b,c,d);g=a.O.C(f);if(g.b(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function VY(a,b){return 0;}
function Fp(){}
function HV(){var a=this;C.call(a);a.ei=0;a.ir=0;a.iw=0;a.gN=0;a.dg=null;}
function ABw(a){var b=new HV();Rr(b,a);return b;}
function Rr(a,b){a.dg=b;M(a);a.ir=a.dg.cc;a.iw=a.dg.T();a.gN=(-1);}
function Pc(a){return a.ei>=a.iw?0:1;}
function WF(a){var b,c;Jn(a);a.gN=a.ei;b=a.dg;c=a.ei;a.ei=c+1|0;return b.C(c);}
function Jn(a){if(a.ir>=a.dg.cc)return;G(ABY());}
function Fl(){}
function DK(){}
function D7(){}
function FA(){}
function D3(){}
function JL(){}
function Mi(b){var c,d;c=b.lastChild;while(c!==null){d=c.previousSibling;if(c.nodeType!=2)b.removeChild(c);c=d;}return b;}
function I1(){var a=this;C.call(a);a.gR=null;a.iP=Long_ZERO;a.iT=0.0;}
function ABL(a,b){var c=new I1();Ym(c,a,b);return c;}
function Pu(b,c){var d,e,$$je;a:{try{d=YD(b,EC(c));}catch($$e){$$je=Bb($$e);if($$je instanceof BY){e=$$je;break a;}else{throw $$e;}}return d;}Cz().o(B(227));e.ev();return null;}
function YD(b,c){var d,e,f,g,h,i,$$je;d=BN();e=El(c);a:{while(true){try{f=e.el();if(f===null)break a;g=B8(f,32);if(!f.ek(B(228))&&g.T()>=2){h=g.C(0).c7();if(h.g()==2&&b.cA(h.d(0))>=0&&b.cA(h.d(1))>=0){i=FW(g.C(1));d.bm(ABL(h,i));}}continue;}catch($$e){$$je=Bb($$e);f=$$je;}}e.bK();G(f);}e.bK();TY(d);return d;}
function TY(b){var c,d,e;c=Long_ZERO;d=b.V();while(d.W()){e=d.U();c=Long_add(c,e.dt());}d=b.V();while(d.W()){e=d.U();e.iT=Long_toNumber(e.dt())/Long_toNumber(c);}}
function Ym(a,b,c){M(a);a.gR=b;a.iP=c;}
function T2(a){return a.gR;}
function AAr(a){return a.iP;}
function Yi(a){return a.iT;}
function B5(){}
function He(){var a=this;Ct.call(a);a.gp=0;a.ep=0;}
function AB0(a,b){var c=new He();YI(c,a,b);return c;}
function YI(a,b,c){Eq(a);a.gp=b;a.ep=c;}
function WP(a){return a.gp;}
function W9(a){return a.ep;}
function PI(a){return J().a(B(229)).m(a.gp).a(B(230)).a(a.ep==2147483647?B(25):AC6(a.ep).e()).a(B(231)).e();}
function DX(){U.call(this);}
function ADd(){var a=new DX();GO(a);return a;}
function GO(a){BB(a);}
function MO(){DX.call(this);}
function Gy(){var a=new MO();Y7(a);return a;}
function Y7(a){GO(a);}
function GT(){I.call(this);this.jv=null;}
function ABs(a){var b=new GT();U_(b,a);return b;}
function U_(a,b){a.jv=b;P(a);}
function QK(a,b){return Gx(b);}
function Hy(){C.call(this);}
function I0(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(Cv());}return b.data.length;}
function I6(b,c){if(b===null)G(RK());if(b===D($rt_voidcls()))G(Cv());if(c<0)G(ADu());return Yg(b.lE(),c);}
function Yg(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
function Im(){C.call(this);}
function ABt(){var a=new Im();RO(a);return a;}
function RO(a){M(a);}
function G3(){var a=this;C.call(a);a.i9=0;a.i8=0;a.lm=null;}
function AA6(a,b,c){var d=new G3();Pt(d,a,b,c);return d;}
function Pt(a,b,c,d){a.lm=b;M(a);a.i9=c;a.i8=d;}
function JR(){C.call(this);}
function D4(){D0.call(this);}
function AFg(a,b,c){var d=new D4();Ig(d,a,b,c);return d;}
function Ig(a,b,c,d){MT(a,b,c,d);}
function WT(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=$rt_createByteArray(V(X(b),512));e=0;f=0;g=$rt_createCharArray(V(X(c),512));a:{while(true){if((e+32|0)>f&&BT(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=V(X(b)+j|0,i.length);b.lw(d,j,f-j|0);e=0;}if(!BT(c)){if(!BT(b)&&e>=f){Bj();k=AEV;}else{Bj();k=AET;}break a;}i=g.data;l=V(X(c),i.length);m=ABZ(b,c);k=a.kw(d,e,f,g,0,l,m);e=m.iU;if(k===null&&0==m.fc){Bj();k=AEV;}j=m.fc;c.k7(g,0,j);if(k!==null)break;}}b.er(BG(b)-(f-e|0)|0);return k;}
function HP(){D4.call(this);}
function ACb(a){var b=new HP();AAa(b,a);return b;}
function AAa(a,b){Ig(a,b,0.3333333432674408,0.5);}
function Yo(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(h.dq())break a;Bj();i=AEV;break a;}n=k+1|0;o=j[k];if(!Cj(a,o)){c=n+(-2)|0;i=BM(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|o&63)&65535;k=n;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(h.dq())break a;Bj();i=AEV;break a;}p=k+1|0;o=j[k];k=p+1|0;q=j[p];if(!Cj(a,o))break b;if(!Cj(a,q))break b;r
=((l&15)<<12|(o&63)<<6|q&63)&65535;if(D5(r)){c=k+(-3)|0;i=BM(3);break a;}j=e.data;m=f+1|0;j[f]=r;}else{if((l&248)!=240){c=k+(-1)|0;i=BM(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(h.dq())break a;Bj();i=AEV;break a;}if((f+2|0)>g){c=k+(-1)|0;if(h.dE(2))break a;Bj();i=AET;break a;}p=k+1|0;o=j[k];m=p+1|0;q=j[p];k=m+1|0;s=j[m];if(!Cj(a,o))break c;if(!Cj(a,q))break c;if(!Cj(a,s))break c;j=e.data;t=(l&7)<<18|(o&63)<<12|(q&63)<<6|s&63;p=f+1|0;j[f]=CR(t);m=p+1|0;j[p]=CG(t);}c=k;f=m;}break a;}c=k+(-3)|0;i=BM(1);break a;}c
=k+(-3)|0;i=BM(1);}h.gd(c);h.eM(f);return i;}
function Cj(a,b){return (b&192)!=128?0:1;}
function H6(){CC.call(this);}
function AFh(a){var b=new H6();Sd(b,a);return b;}
function Sd(a,b){FO(a,b);}
function H5(){L.call(this);}
function ACy(){var a=new H5();Se(a);return a;}
function Se(a){Q(a);}
function Uq(a){var b;b=ABx(a);b.y=1;return b;}
function FE(){}
function DC(){}
function Dn(){C.call(this);}
function AFi(){var a=new Dn();LA(a);return a;}
function LA(a){M(a);}
function U7(a,b){var c,d,e,f;c=b.data;d=a.T();e=c.length;if(e<d)b=I6(Cf(b).eC(),d);else while(d<e){c[d]=null;d=d+1|0;}d=0;f=a.V();while(f.W()){c=b.data;e=d+1|0;c[d]=f.U();d=e;}return b;}
function QT(a,b){var c,d;c=0;d=b.V();while(d.W()){if(!a.bm(d.U()))continue;c=1;}return c;}
function Nh(){Bx.call(this);}
function ACt(a,b,c){var d=new Nh();SS(d,a,b,c);return d;}
function SS(a,b,c,d){Cq(a,b,c,d);}
function PG(a,b,c,d){var e;a:{while(true){if((b+a.B.bb()|0)>d.q())break a;e=a.B.I(b,c);if(e<1)break;b=b+e|0;}}return a.f.b(b,c,d);}
function Jq(){var a=this;C.call(a);a.gD=null;a.hW=null;a.iU=0;a.fc=0;}
function ABZ(a,b){var c=new Jq();Ps(c,a,b);return c;}
function Ps(a,b,c){M(a);a.gD=b;a.hW=c;}
function Pn(a){return BT(a.gD);}
function Rq(a,b){return X(a.hW)<b?0:1;}
function W7(a,b){a.iU=b;}
function S$(a,b){a.fc=b;}
function JU(){C.call(this);}
function Oj(b,c){var d,e,f,g,h,i,j,k;if(!b)return B(232);d=1<<c;e=d-1|0;f=(((32-EP(b)|0)+c|0)-1|0)/c|0;g=$rt_createCharArray(f);h=Ce(f-1|0,c);i=0;while(h>=0){j=g.data;k=i+1|0;j[i]=Eb(b>>>h&e,d);h=h-c|0;i=k;}return GE(g);}
function Cb(){Bx.call(this);}
function AA_(a,b,c){var d=new Cb();Eo(d,a,b,c);return d;}
function Eo(a,b,c,d){Cq(a,b,c,d);}
function NO(a,b,c,d){var e;e=a.w.b(b,c,d);if(e<0)e=a.f.b(b,c,d);return e;}
function AAQ(a,b){FN(a,b);a.w.s(b);}
function KO(){Cb.call(this);}
function ABg(a,b,c){var d=new KO();Zd(d,a,b,c);return d;}
function Zd(a,b,c,d){Eo(a,b,c,d);}
function OR(a,b,c,d){var e;if((b+a.B.bb()|0)<=d.q()){e=a.B.I(b,c);if(e>=1)b=b+e|0;}return a.f.b(b,c,d);}
function In(){I.call(this);this.lB=null;}
function ACY(a){var b=new In();N1(b,a);return b;}
function N1(a,b){a.lB=b;P(a);}
function QI(a,b){return CJ(b);}
function Gn(){}
function H7(){I.call(this);this.k1=null;}
function ACp(a){var b=new H7();ZI(b,a);return b;}
function ZI(a,b){a.k1=b;P(a);}
function X6(a,b){return Lm(b);}
function K4(){Bx.call(this);}
function AC8(a,b,c){var d=new K4();AAT(d,a,b,c);return d;}
function AAT(a,b,c,d){Cq(a,b,c,d);}
function QV(a,b,c,d){var e;while(true){e=a.f.b(b,c,d);if(e>=0)break;if((b+a.B.bb()|0)<=d.q()){e=a.B.I(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
function Jr(){C.call(this);}
function CT(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function DB(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
function G9(){I.call(this);this.lU=null;}
function AD5(a){var b=new G9();Tl(b,a);return b;}
function Tl(a,b){a.lU=b;P(a);}
function TC(a,b){return L2(b);}
function IV(){C.call(this);}
function Tu(b){var c,d,e,f;c=ACo(b.ch());d=Hq(c);e=$rt_createIntArray(d);f=0;while(f<d){e.data[f]=Hq(c);f=f+1|0;}return e;}
function D_(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function AAN(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;c=F(EK,16384);d=$rt_createByteArray(16384);e=0;f=0;g=0;h=0;while(h<b.g()){i=D_(b.d(h));if(i==64){h=h+1|0;i=D_(b.d(h));j=0;k=1;l=0;while(l<3){h=h+1|0;m=D_(b.d(h));j=j|Ce(k,m);k=k*64|0;l=l+1|0;}}else if(i<32)j=1;else{i=(i-32|0)<<24>>24;h=h+1|0;j=D_(b.d(h));}if(!i&&j>=128){if(e>0){n=c.data;o=f+1|0;n[f]=VT(g,g+e|0,FS(d,e));f=o;}g=g+(e+j|0)|0;e=0;}else{p=d.data;o=e+j|0;if(o<p.length)q=f;else{n=c.data;q=f+1|0;n[f]=VT(g,g+e|0,FS(d,e));g=g+o|0;e=0;}while(true){o=j
+(-1)|0;if(j<=0)break;r=e+1|0;p[e]=i;e=r;j=o;}f=q;}h=h+1|0;}return Mb(c,f);}
function G2(){var a=this;C.call(a);a.lQ=null;a.bP=null;a.fT=0;a.fp=0;a.ff=null;a.cW=null;a.fg=null;}
function VD(a){var b=new G2();Xv(b,a);return b;}
function Xv(a,b){M(a);a.bP=BN();a.ff=$rt_createDoubleArray(3);a.cW=$rt_createDoubleMultiArray([3,4]);DV();a.fg=AE$;a.lQ=b;}
function R2(a,b,c,d){var e;e=ADj(b,c,d);a.bP.bm(e);if(a.fT<(e.em()+1|0))a.fT=e.em()+1|0;if(a.fp<(e.ce()+1|0))a.fp=e.ce()+1|0;}
function AAl(a){var b,c;b=0;while(b<a.bP.T()){if(a.bP.C(b).da()===null)return 0;c=0;while(c<a.bP.T()){if(b!=c&&a.bP.C(c).hd(a.bP.C(b).iS()))return 0;c=c+1|0;}b=b+1|0;}return 1;}
function Po(a,b){var c,d;c=a.bP.V();while(true){if(!c.W())return null;d=c.U();if(d.hd(b))break;}return d;}
function AAW(a,b,c){var d,e;d=a.bP.V();while(true){if(!d.W())return null;e=d.U();if(e.ce()==b&&e.em()==c)break;}return e;}
function ZB(a){var b,c,d;b=J();c=a.bP.V();while(c.W()){d=c.U();b.a(d.da());}return b.e();}
function QR(a){return a.fT;}
function Wu(a){return a.fp;}
function OW(a,b){return a.ff.data[b];}
function Zt(a,b,c){a.ff.data[b]=c;}
function YU(a,b,c){if(b>4)b=9-b|0;if(a.cW.data.length<=b)return 0.0;return a.cW.data[b].data[c];}
function Uy(a,b,c,d){a.cW.data[b].data[c]=d;}
function RY(a,b){var c;if(b>4)b=9-b|0;if(a.cW.data.length<=b)return 0;c=0;while(c<3){if(a.cW.data[b].data[c]>0.0)return 1;c=c+1|0;}return 0;}
function Xt(a){return a.fg;}
function TU(a,b){a.fg=b;}
function Eh(){DH.call(this);}
function ABB(){var a=new Eh();I$(a);return a;}
function I$(a){Mf(a);}
function Gv(a){return KM(a).J(33,64).J(91,96).J(123,126);}
function Mv(){Eh.call(this);}
function ABl(){var a=new Mv();Vu(a);return a;}
function Vu(a){I$(a);}
function Os(a){return Gv(a).bg(32);}
function JH(){L.call(this);}
function ACw(){var a=new JH();PH(a);return a;}
function PH(a){Q(a);}
function WO(a){return ADt(a);}
function Ej(){}
function D$(){var a=this;C.call(a);a.fq=null;a.ef=null;}
function AFj(a,b){var c=new D$();MW(c,a,b);return c;}
function MW(a,b,c){M(a);a.fq=b;a.ef=c;}
function ED(){var a=this;D$.call(a);a.eW=0;a.dm=null;}
function ACI(a,b){var c=new ED();RS(c,a,b);return c;}
function RS(a,b,c){MW(a,b,null);a.eW=c;}
function LT(){BV.call(this);}
function ACh(a,b){var c=new LT();VP(c,a,b);return c;}
function VP(a,b,c){Dh(a,b,c);}
function Su(a,b,c,d){var e,f,g,h,i;e=a.O.T();f=!d.df()?d.bw():0;a:{g=a.f.b(b,c,d);if(g>=0){d.D(a.A,b);h=0;while(true){if(h>=e)break a;i=a.O.C(h);if(i.bf(f,b,c,d)>=0){d.D(a.A,(-1));return g;}h=h+1|0;}}}return (-1);}
function AAI(a,b){return 0;}
function Dj(){var a=this;C.call(a);a.jW=null;a.f1=null;a.j3=0.0;a.gs=0.0;a.fi=null;a.gf=null;a.cT=0;}
function AFk(a,b,c,d){var e=new Dj();L4(e,a,b,c,d);return e;}
function AFl(a,b,c){var d=new Dj();Lc(d,a,b,c);return d;}
function L4(a,b,c,d,e){M(a);B7();a.fi=AES;a.gf=AES;LQ(a,e);a.jW=b;a.f1=e.dI();a.j3=c;a.gs=d;}
function Lc(a,b,c,d){var e;e=$rt_createByteArray(1);e.data[0]=63;L4(a,b,c,d,e);}
function LQ(a,b){var c;if(b!==null){c=b.data.length;if(c&&c>=a.gs)return;}G(Bz(B(233)));}
function Go(a,b){if(b!==null){a.fi=b;a.fZ(b);return a;}G(Bz(B(234)));}
function Zg(a,b){return;}
function LW(a,b){if(b!==null){a.gf=b;a.fw(b);return a;}G(Bz(B(234)));}
function Yq(a,b){return;}
function Ic(a,b,c,d){var e,f,g,h,$$je;a:{if(a.cT!=3){if(d)break a;if(a.cT!=2)break a;}G(C1());}a.cT=!d?1:2;while(true){try{e=a.kb(b,c);}catch($$e){$$je=Bb($$e);if($$je instanceof U){f=$$je;G(TM(f));}else{throw $$e;}}if(e.dK()){if(!d)return e;g=X(b);if(g<=0)return e;e=BM(g);}else if(e.dd())break;h=!e.f5()?a.fi:a.gf;b:{B7();if(h!==AEU){if(h===AFm)break b;else return e;}if(X(c)<a.f1.data.length)return AET;KU(c,a.f1);}b.fd(BG(b)+e.g()|0);}return e;}
function G4(a,b){var c;if(a.cT!=2&&a.cT!=4)G(C1());c=a.jz(b);Bj();if(c===AEV)a.cT=3;return c;}
function N5(a,b){Bj();return AEV;}
function Mx(){var a=this;Z.call(a);a.bj=null;a.fF=null;a.eN=null;}
function ADE(a){var b=new Mx();TK(b,a);return b;}
function TK(a,b){var c;BH(a);a.bj=b.e();a.Q=b.g();a.fF=PT(a.Q);a.eN=PT(a.Q);c=0;while(c<(a.Q-1|0)){a.fF.i5(a.bj.d(c),(a.Q-c|0)-1|0);a.eN.i5(a.bj.d((a.Q-c|0)-1|0),(a.Q-c|0)-1|0);c=c+1|0;}}
function TT(a,b,c){return !a.fU(c,b)?(-1):a.Q;}
function Q5(a,b,c,d){var e,f;e=d.q();while(true){if(b>e)return (-1);f=a.ju(c,b,e);if(f<0)return (-1);if(a.f.b(f+a.Q|0,c,d)>=0)break;b=f+1|0;}return f;}
function Wx(a,b,c,d,e){var f;while(true){if(c<b)return (-1);f=a.jG(d,b,c);if(f<0)return (-1);if(a.f.b(f+a.Q|0,d,e)>=0)break;c=f+(-1)|0;}return f;}
function XP(a,b){var c,d,e,f,g;if(b instanceof B1)return b.ck()!=a.bj.d(0)?0:1;if(b instanceof B2)return b.I(0,a.bj.cj(0,1))<=0?0:1;if(!(b instanceof BK)){if(!(b instanceof B0))return 1;a:{if(a.bj.g()>1){c=b;d=c.gk();e=a.bj.d(0);c=a.bj;f=c.d(1);if(d==BU(e,f)){e=1;break a;}}e=0;}return e;}b:{c:{c=b;if(!c.j(a.bj.d(0))){g=a.bj;if(g.g()<=1)break c;g=a.bj;e=BU(g.d(0),a.bj.d(1));if(!c.j(e))break c;}e=1;break b;}e=0;}return e;}
function Xf(a,b,c,d){var e,f;e=a.bj.d(a.Q-1|0);while(true){if(c>(d-a.Q|0))return (-1);f=b.d((c+a.Q|0)-1|0);if(f==e&&a.fU(b,c))break;c=c+a.fF.fG(f)|0;}return c;}
function VJ(a,b,c,d){var e,f,g,h;e=a.bj.d(0);f=b.g();g=(f-d|0)-a.Q|0;if(g<=0)d=d+g|0;while(true){if(d<c)return (-1);h=b.d(d);if(h==e&&a.fU(b,d))break;d=d-a.eN.fG(h)|0;}return d;}
function X9(a,b,c){var d;d=0;while(d<a.Q){if(b.d(d+c|0)!=a.bj.d(d))return 0;d=d+1|0;}return 1;}
function Lj(){R.call(this);}
function AC3(){var a=new Lj();YO(a);return a;}
function YO(a){Bo(a);}
function Qt(a,b,c,d){var e;e=!d.df()?d.q():c.g();if(b<e)return (-1);d.by=1;d.kT=1;return a.f.b(b,c,d);}
function Nt(a,b){return 0;}
function Ll(){U.call(this);}
function Ka(){var a=new Ll();VG(a);return a;}
function VG(a){BB(a);}
function CN(){Bv.call(this);}
function ADL(a,b,c){var d=new CN();Ev(d,a,b,c);return d;}
function Ev(a,b,c,d){CA(a,b,c,d);}
function U$(a,b,c,d){var e;if(!a.w.x(d))return a.f.b(b,c,d);e=a.w.b(b,c,d);if(e>=0)return e;return a.f.b(b,c,d);}
function XS(a,b){FN(a,b);a.w.s(b);}
function J4(){L.call(this);}
function AA9(){var a=new J4();Zc(a);return a;}
function Zc(a){Q(a);}
function V5(a){return By().J(65,90);}
function DJ(){var a=this;CD.call(a);a.f_=0;a.e9=null;a.l0=null;}
function AFn(a,b,c,d,e){var f=new DJ();HW(f,a,b,c,d,e);return f;}
function HW(a,b,c,d,e,f){FB(a,c);Y2();a.l0=AEX;a.f_=b;a.e9=d;a.L=e;a.bM=f;}
function Mk(b,c,d){return ACT(0,b.data.length,b,c,c+d|0,0,0);}
function UI(b){return Mk(b,0,b.data.length);}
function Tp(a,b,c,d){var e,f,g,h,i,j;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Bp(J().a(B(235)).m(g).a(B(236)).m(f).e()));if(X(a)<d)G(Yp());if(d<0)G(Bp(J().a(B(237)).m(d).a(B(238)).e()));h=a.L+a.f_|0;i=0;while(i<d){g=c+1|0;j=a.e9.data;f=h+1|0;e[c]=j[h];i=i+1|0;c=g;h=f;}a.L=a.L+d|0;return a;}}e=b.data;G(Bp(J().a(B(239)).m(c).a(B(23)).m(e.length).a(B(240)).e()));}
function XL(a,b,c,d){var e,f,g,h,i,j;if(!d)return a;if(a.dN())G(Gy());if(X(a)<d)G(I7());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Bp(J().a(B(241)).m(g).a(B(236)).m(f).e()));if(d<0)G(Bp(J().a(B(237)).m(d).a(B(238)).e()));h=a.L+a.f_|0;i=0;while(i<d){j=a.e9.data;g=h+1|0;f=c+1|0;j[h]=e[c];i=i+1|0;h=g;c=f;}a.L=a.L+d|0;return a;}}e=b.data;G(Bp(J().a(B(239)).m(c).a(B(23)).m(e.length).a(B(240)).e()));}
function KU(a,b){return a.hY(b,0,b.data.length);}
function EX(a){IX(a);return a;}
function VK(a,b){FI(a,b);return a;}
function Ly(){var a=this;DJ.call(a);a.jq=0;a.gQ=0;}
function ACT(a,b,c,d,e,f,g){var h=new Ly();OX(h,a,b,c,d,e,f,g);return h;}
function OX(a,b,c,d,e,f,g,h){HW(a,b,c,d,e,f);a.jq=g;a.gQ=h;}
function Xh(a){return a.gQ;}
function DY(){}
function Fn(){var a=this;C.call(a);a.bs=null;a.du=null;a.gh=null;a.go=null;a.hK=0;a.ew=0;a.fm=0;a.je=0;a.bC=0;a.jn=0;a.jm=0;a.by=0;a.kT=0;a.cN=0;a.fv=0;}
function AFo(a,b,c,d,e,f){var g=new Fn();HC(g,a,b,c,d,e,f);return g;}
function HC(a,b,c,d,e,f,g){var h;M(a);a.cN=(-1);h=e+1|0;a.hK=h;a.bs=$rt_createIntArray(h*2|0);a.du=$rt_createIntArray(g);DE(a.du,(-1));if(f>0)a.gh=$rt_createIntArray(f);DE(a.bs,(-1));a.h_(b,c,d);}
function Xw(a,b,c){a.du.data[b]=c;}
function AAU(a,b){return a.du.data[b];}
function NT(a){return a.gc(0);}
function Z7(a,b){Ga(a,b);return a.bs.data[(b*2|0)+1|0];}
function Tf(a,b,c){a.bs.data[b*2|0]=c;}
function Q7(a,b,c){a.bs.data[(b*2|0)+1|0]=c;}
function Sm(a,b){return a.bs.data[b*2|0];}
function SE(a,b){return a.bs.data[(b*2|0)+1|0];}
function ZH(a,b){var c,d;c=a.cF(b);d=a.eB(b);if((d|c|(d-c|0))>=0&&d<=a.go.g())return a.go.fr(c,d).e();return null;}
function Sq(a){return a.e1(0);}
function SL(a,b){Ga(a,b);return a.bs.data[b*2|0];}
function NR(a){if(a.bs.data[0]==(-1)){a.bs.data[0]=a.bC;a.bs.data[1]=a.bC;}a.cN=a.ec();}
function Ou(a,b){return a.gh.data[b];}
function Sx(a,b,c){a.gh.data[b]=c;}
function Ga(a,b){if(!a.ew)G(C1());if(b>=0&&b<a.hK)return;G(Bp(EL(b)));}
function XZ(a){a.ew=1;}
function X1(a){return a.ew;}
function Zl(a,b,c,d){a.ew=0;a.fv=2;DE(a.bs,(-1));DE(a.du,(-1));if(b!==null)a.go=b;if(c>=0)Lt(a,c,d);a.bC=a.fm;}
function TD(a){a.h_(null,(-1),(-1));}
function Lt(a,b,c){a.fm=b;a.je=c;}
function T0(a,b){a.bC=b;if(a.cN>=0)b=a.cN;a.cN=b;}
function RP(a){return a.fm;}
function NP(a){return a.je;}
function Ux(a,b){a.fv=b;}
function Wn(a){return a.fv;}
function XM(a){return a.jm;}
function Ot(a){return a.jn;}
function P3(a){return a.cN;}
function IZ(){var a=this;Z.call(a);a.iL=null;a.lq=0;}
function XB(a){var b=new IZ();PU(b,a);return b;}
function PU(a,b){BH(a);a.iL=b.c8();a.lq=b.G;}
function ZN(a,b,c){var d,e;d=a.iL;e=BA(c.d(b));return !d.j(BI(e))?(-1):1;}
function GJ(){var a=this;C.call(a);a.ha=0;a.h2=Long_ZERO;a.g4=0.0;}
function ACN(a,b){var c=new GJ();Pp(c,a,b);return c;}
function OO(b,c){var d,e,$$je;a:{try{d=Vi(b,EC(c));}catch($$e){$$je=Bb($$e);if($$je instanceof BY){e=$$je;break a;}else{throw $$e;}}return d;}Cz().o(B(242));e.ev();return null;}
function Vi(b,c){var d,e,f,g,h,i,$$je;d=BN();e=El(c);a:{while(true){try{f=e.el();if(f===null)break a;g=B8(f,32);if(!f.ek(B(228))&&g.T()>=2){h=g.C(0).c7();if(h.g()==1&&b.fP(h)){i=FW(g.C(1));d.bm(ACN(h.d(0),i));}}continue;}catch($$e){$$je=Bb($$e);f=$$je;}}e.bK();G(f);}e.bK();WC(d);return d;}
function WC(b){var c,d,e;c=Long_ZERO;d=b.V();while(d.W()){e=d.U();c=Long_add(c,e.dt());}d=b.V();while(d.W()){e=d.U();e.g4=Long_toNumber(e.dt())/Long_toNumber(c);}}
function JQ(b,c){var d,e;d=c.V();while(true){if(!d.W())return null;e=d.U();if(b==e.ck())break;}return e;}
function Pp(a,b,c){M(a);a.ha=b;a.h2=c;}
function O7(a){return a.ha;}
function OP(a){return a.h2;}
function OQ(a){return a.g4;}
function GL(){I.call(this);this.jk=null;}
function ABC(a){var b=new GL();Zr(b,a);return b;}
function Zr(a,b){a.jk=b;P(a);}
function ZR(a,b){return ML(b);}
function Ib(){C.call(this);this.dZ=null;}
function IY(a){var b=new Ib();QL(b,a);return b;}
function Pr(b){var c,d,e,f,g;BQ();c=AFp.data;d=c.length;e=0;while(e<d){f=c[e];if(b.jY(f.bZ())){f.eK(1);g=IY(f);g.fn();return f;}e=e+1|0;}return null;}
function ZV(){var b,c,d,e,f;BQ();b=AFq.data;c=b.length;d=0;while(d<c){e=b[d];if(!e.dl().H()){e.eK(1);f=IY(e);f.fn();}d=d+1|0;}}
function WG(){var b,c,d,e,f;BQ();b=AFr.data;c=b.length;d=0;while(d<c){e=b[d];e.eK(1);f=IY(e);f.fn();d=d+1|0;}}
function QL(a,b){M(a);a.dZ=b;}
function Xa(a){var b,c,d;b=new XMLHttpRequest();c=CT(ABn(a,b),"stateChanged");b.onreadystatechange=c;d=J().a(B(243)).a(a.dZ.dl()).e();b.open("GET",$rt_ustr(d));b.send();}
function Kg(a,b){a.dZ.lV(b);E4().o(J().a(B(244)).a(a.dZ.dl()).e());Wf();}
function Wf(){var b,c,d,e,f,g,h,i,j;b=0;c=0;BQ();d=AFp.data;e=d.length;f=0;while(f<e){g=d[f];if(g.e0())c=c+1|0;if(g.bH()!==null)b=b+1|0;f=f+1|0;}d=AFq.data;f=d.length;h=0;while(h<f){i=d[h];if(i.e0())c=c+1|0;if(i.bH()!==null)b=b+1|0;h=h+1|0;}d=AFr.data;e=d.length;f=0;while(f<e){j=d[f];if(j.e0())c=c+1|0;if(j.bH()!==null)b=b+1|0;f=f+1|0;}if(!c)c=1;if(b>=c){BJ(null);LU(1);}else BJ(J().a(B(245)).m((100*b|0)/c|0).a(B(246)).e());}
function Q1(b,c){Kg(b,c);}
function IW(){C.call(this);}
function Oh(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function PF(b,c){return b!==null&&!(typeof b.constructor.$meta==='undefined'?1:0)&&HY(b.constructor,c)?1:0;}
function HY(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(HY(d[e],c))return 1;e=e+1|0;}return 0;}
function PO(b){var c='$$enumConstants$$';B$[c]=RN;B3[c]=Ye;PO=function(cls){if(!cls.hasOwnProperty(c)){return null;}if(typeof cls[c]==="function"){cls[c]=cls[c]();}return cls[c];};return PO(b);}
function J0(b){return V_(String.fromCharCode(b));}
function U4(b){return b.$meta.primitive?1:0;}
function SF(b){return b.$meta.enum?1:0;}
function Y4(b){return b.$meta.item;}
function UU(b){return $rt_str(b.$meta.name);}
function Du(){var a=this;C.call(a);a.jo=null;a.lc=null;}
function AFs(a,b){var c=new Du();Jf(c,a,b);return c;}
function Jf(a,b,c){var d,e,f,g;d=c.data;M(a);Fo(b);e=d.length;f=0;while(f<e){g=d[f];Fo(g);f=f+1|0;}a.jo=b;a.lc=c.dI();}
function Fo(b){var c,d;if(b.H())G(KQ(b));if(!JG(b.d(0)))G(KQ(b));c=1;while(c<b.g()){a:{d=b.d(c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(JG(d))break a;else G(KQ(b));}}c=c+1|0;}}
function JG(b){return !(b>=48&&b<=57)&&!(b>=97&&b<=122)&&b<65&&b>90?0:1;}
function OE(b){var c;if(b===null)G(Bz(B(247)));Fo(b);c=Gq().gn(b.c7());if(c!==null)return c;G(ADn(b));}
function G1(a,b){var c,d,e,$$je;a:{try{c=a.kg();B7();d=AEU;d=La(c,d);c=AEU;d=HS(d,c);d=I8(d,b);}catch($$e){$$je=Bb($$e);if($$je instanceof Cl){e=$$je;break a;}else{throw $$e;}}return d;}G(ACQ(B(248),e));}
function C8(){C.call(this);this.k$=null;}
var AFm=null;var AEU=null;var AES=null;function B7(){B7=Be(C8);N4();}
function LP(a){var b=new C8();Js(b,a);return b;}
function Js(a,b){B7();M(a);a.k$=b;}
function N4(){AFm=LP(B(249));AEU=LP(B(250));AES=LP(B(251));}
function Kz(){U.call(this);}
function ACU(){var a=new Kz();Yz(a);return a;}
function Yz(a){BB(a);}
function BR(){U.call(this);}
function Cv(){var a=new BR();C3(a);return a;}
function Bz(a){var b=new BR();M8(b,a);return b;}
function C3(a){BB(a);}
function M8(a,b){Df(a,b);}
function JS(){BR.call(this);this.j4=null;}
function KQ(a){var b=new JS();V4(b,a);return b;}
function V4(a,b){C3(a);a.j4=b;}
function HD(){R.call(this);this.gq=null;}
function AC5(a){var b=new HD();Sp(b,a);return b;}
function Sp(a,b){Bo(a);a.gq=b;}
function Sy(a,b,c,d){var e,f;a:{if(b!=d.q()){if(!b)break a;if(d.cU()&&b==d.bw())break a;e=a.gq;f=b-1|0;if(e.hh(c.d(f),c.d(b)))break a;}return (-1);}return a.f.b(b,c,d);}
function Wz(a,b){return 0;}
function Ge(){}
function Kp(){C.call(this);}
function Dx(){BW.call(this);this.gm=null;}
function AFt(a){var b=new Dx();Hc(b,a);return b;}
function Hc(a,b){CS(a);a.gm=b;}
function K3(){var a=this;Dx.call(a);a.kf=0;a.ga=0;a.bS=null;a.dp=null;a.hy=null;}
function Pi(a,b){var c=new K3();Lk(c,a,b);return c;}
function ADG(a){var b=new K3();Ru(b,a);return b;}
function Lk(a,b,c){Hc(a,b);a.bS=J();a.dp=$rt_createCharArray(32);a.kf=c;a.hy=X3();}
function Ru(a,b){Lk(a,b,0);}
function PQ(a,b,c,d){var $$je;if(!Kb(a))return;a:{try{a.gm.di(b,c,d);break a;}catch($$e){$$je=Bb($$e);if($$je instanceof BY){}else{throw $$e;}}a.ga=1;}}
function Kb(a){if(a.gm===null)a.ga=1;return a.ga?0:1;}
function EY(a,b,c,d){var e,f,g,h,i,j,k,l;e=b.data;f=MI(b,c,d-c|0);g=$rt_createByteArray(Bq(16,V(e.length,1024)));h=UI(g);i=a.hy.k2();B7();j=AEU;i=Go(i,j);j=AEU;k=LW(i,j);while(true){l=Ic(k,f,h,1).dd();a.di(g,0,BG(h));EX(h);if(!l)break;}while(true){l=G4(k,h).dd();a.di(g,0,BG(h));EX(h);if(!l)break;}}
function Us(a,b){a.dp.data[0]=b;EY(a,a.dp,0,1);}
function YP(a,b){a.bS.a(b);Dz(a);}
function Sw(a,b){a.bS.a(b).bt(10);Dz(a);}
function ZA(a,b){a.bS.ie(b).bt(10);Dz(a);}
function S3(a){a.kl(10);}
function Dz(a){var b;b=a.bS.g()<=a.dp.data.length?a.dp:$rt_createCharArray(a.bS.g());a.bS.g6(0,a.bS.g(),b,0);EY(a,b,0,a.bS.g());a.bS.dS(0);}
function FK(){}
function HR(){BV.call(this);}
function AC4(a,b){var c=new HR();OZ(c,a,b);return c;}
function OZ(a,b,c){Dh(a,b,c);}
function N7(a,b,c,d){var e,f,g,h;e=a.O.T();d.D(a.A,b);f=0;while(true){if(f>=e)return a.f.b(b,c,d);g=a.O.C(f);h=g.bf(0,b,c,d);if(h>=0)break;f=f+1|0;}return (-1);}
function TI(a,b){return 0;}
function K2(){CE.call(this);}
function ABo(a,b){var c=new K2();Xr(c,a,b);return c;}
function Xr(a,b,c){Fd(a,b,c);}
function S9(a,b,c,d){var e,f;e=a.c6(d);if(e!==null&&(b+e.g()|0)<=d.q()){f=!c.e().it(e,b)?(-1):e.g();if(f<0)return (-1);d.D(a.c2,f);return a.f.b(b+f|0,c,d);}return (-1);}
function W0(a,b,c,d){var e,f,g,h;e=a.c6(d);f=d.bw();if(e!==null&&(b+e.g()|0)<=f){g=c.e();while(true){if(b>f)return (-1);h=g.gO(e,b);if(h<0)return (-1);if(a.f.b(h+e.g()|0,c,d)>=0)break;b=h+1|0;}return h;}return (-1);}
function Pb(a,b,c,d,e){var f,g,h;f=a.c6(e);if(f===null)return (-1);g=d.e();a:{while(true){if(c<b)return (-1);h=g.lM(f,c);if(h<0)break a;if(h<b)break a;if(a.f.b(h+f.g()|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function Oy(a,b){return 1;}
function I5(){L.call(this);}
function ADT(){var a=new I5();W4(a);return a;}
function W4(a){Q(a);}
function T9(a){return By().J(97,122);}
function Iy(){BO.call(this);this.fK=null;}
function ABU(a,b,c,d){var e=new Iy();RU(e,a,b,c,d);return e;}
function RU(a,b,c,d,e){C0(a,b,c,d);a.fK=e;}
function Q$(a,b,c,d){var e,f;e=d.q();f=Fi(a,b,e,c);if(f>=0)e=f;if(e>b)return a.f.bf(b,e,c,d);return a.f.b(b,c,d);}
function NX(a,b,c,d){var e,f,g,h,i;e=d.q();f=a.f.bh(b,c,d);if(f<0)return (-1);g=Fi(a,f,e,c);if(g>=0)e=g;h=a.f.bf(f,e,c,d);if(f<h)f=h;i=f>0?K$(a,b,f-1|0,c):f?(-1):0;if(i>=b)b=i>=f?i:i+1|0;return b;}
function Fi(a,b,c,d){while(true){if(b>=c)return (-1);if(a.fK.dk(d.d(b)))break;b=b+1|0;}return b;}
function K$(a,b,c,d){while(true){if(c<b)return (-1);if(a.fK.dk(d.d(c)))break;c=c+(-1)|0;}return c;}
function JN(){L.call(this);}
function ADy(){var a=new JN();X4(a);return a;}
function X4(a){Q(a);}
function Z8(a){var b;b=ABC(a);b.y=1;return b;}
function KC(){C.call(this);}
function DS(){C.call(this);}
var AFu=null;var AFv=null;function MF(){MF=Be(DS);Vr();}
function Hf(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;MF();d=$rt_floatToIntBits(b);c.hb=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.fV=0;c.ft=0;return;}g=0;if(f)h=e|8388608;else{h=e<<1;while(Long_eq(Long_and(Long_fromInt(h),Long_fromInt(8388608)),Long_ZERO)){h=h<<1;f=f+(-1)|0;g=g+1|0;}}i=Pz(AFv,f);if(i<0)i= -i-2|0;j=f-AFv.data[i]|0;k=9+j|0;l=Long_fromInt(h);m=Long_shru(Long_mul(l,Long_fromInt(AFu.data[i])),32-k|0).lo;if(m>=1000000000){i=i+1|0;n=f-AFv.data[i]|0;k=9+n|0;m=Long_shru(Long_mul(l,Long_fromInt(AFu.data[i])),
32-k|0).lo;}n=(31-k|0)-g|0;o=n>=0?AFu.data[i]>>>n:AFu.data[i]<< -n;p=(o+1|0)>>1;q=o>>1;if(h==4194304)q=q>>2;r=Hr(m,q);s=KH(m,p);h=B4(r,s);h=h>0?Ce(m/r|0,r):h<0?Ce(m/s|0,s)+s|0:Ce((m+(s/2|0)|0)/s|0,s);if(h>=1000000000){i=i+1|0;h=h/10|0;}else if(h<100000000){i=i+(-1)|0;h=h*10|0;}c.fV=h;c.ft=i-50|0;}
function Hr(b,c){var d,e;MF();d=10;while(d<=c){d=d*10|0;}e=b%d|0;if(e>=(c/2|0))d=d/10|0;return d;}
function KH(b,c){var d,e;MF();d=10;while(d<=c){d=d*10|0;}e=b%d|0;if((d-e|0)>(c/2|0))d=d/10|0;return d;}
function Vr(){var b,c,d,e,f,g,h,i,j,k,l;AFu=$rt_createIntArray(100);AFv=$rt_createIntArray(100);b=2000000000;c=127;d=0;e=b;while(d<50){f=AFu.data;g=d+50|0;f[g]=$rt_udiv(e,20);AFv.data[g]=c;g=$rt_udiv(e,10);h=$rt_umod(g,10);while(g<=b&&!(g&(-2147483648))){g=g<<1;c=c+1|0;h=h<<1;}e=g+(h/10|0)|0;d=d+1|0;}i=214748364;e=127;d=0;while(d<50){j=0;k=b;while(k>i){k=k>>1;j=j+1|0;e=e+(-1)|0;}k=k*10|0;if(j<=0)b=k;else{l=Long_fromInt(b&((1<<j)-1|0));b=Long_add(Long_fromInt(k),Long_shr(Long_mul(l,Long_fromInt(10)),j)).lo;}f
=AFu.data;k=(50-d|0)-1|0;f[k]=$rt_udiv(b,20);AFv.data[k]=e;d=d+1|0;}}
function LB(){L.call(this);}
function ADs(){var a=new LB();Sh(a);return a;}
function Sh(a){Q(a);}
function Sb(a){return ADP(a);}
function DI(){C.call(this);}
function AFw(){var a=new DI();J6(a);return a;}
function J6(a){M(a);}
function Iu(){R.call(this);}
function ACA(){var a=new Iu();Vq(a);return a;}
function Vq(a){Bo(a);}
function Y$(a,b,c,d){if(b!=d.lG())return (-1);return a.f.b(b,c,d);}
function AAu(a,b){return 0;}
function KX(){Bx.call(this);}
function AB9(a){var b=new KX();YQ(b,a);return b;}
function YQ(a,b){Cq(a,b.eg(),b.kk(),b.cP());a.w.s(a);}
function ZO(a,b,c,d){var e;while((b+a.B.bb()|0)<=d.q()){e=a.B;if(e.I(b,c)<=0)break;b=b+a.B.bb()|0;}return a.f.b(b,c,d);}
function Pl(a,b,c,d){var e,f,g;e=a.f.bh(b,c,d);if(e<0)return (-1);f=e-a.B.bb()|0;while(f>=b&&a.B.I(f,c)>0){g=f-a.B.bb()|0;e=f;f=g;}return e;}
function EH(){}
function KY(){var a=this;C.call(a);a.fy=null;a.bX=null;}
function AB7(a){var b=new KY();Vt(b,a);return b;}
function Vt(a,b){var c;M(a);a.bX=b;c=a;b.classObject=c;}
function HU(b){var c;if(b===null)return null;c=b.classObject;if(c===null)c=AB7(b);return c;}
function QY(a){return a.bX;}
function Ur(a,b){return PF(b,a.bX);}
function Z1(a){if(a.fy===null)a.fy=UU(a.bX);return a.fy;}
function W5(a){return U4(a.bX);}
function Ri(a){return SF(a.bX);}
function N2(a){return HU(Y4(a.bX));}
function SC(a){if(!a.kP())return null;a.bX.$clinit();return PO(a.bX).dI();}
function LC(){var a=this;C.call(a);a.p=null;a.z=0;}
function AAO(){var a=new LC();Sc(a);return a;}
function ACa(a){var b=new LC();OH(b,a);return b;}
function Sc(a){M(a);a.p=$rt_createIntArray(0);}
function OH(a,b){M(a);a.p=$rt_createIntArray(((b+32|0)-1|0)/32|0);}
function St(a,b){var c,d;c=b/32|0;if(b>=a.z){C2(a,c+1|0);a.z=b+1|0;}d=a.p.data;d[c]=d[c]|1<<(b%32|0);}
function XR(a,b,c){var d,e,f,g;if(b>c)G(Cp());d=b/32|0;e=c/32|0;if(c>a.z){C2(a,e+1|0);a.z=c;}if(d==e){f=a.p.data;f[d]=f[d]|C9(a,b)&CV(a,c);}else{f=a.p.data;f[d]=f[d]|C9(a,b);g=d+1|0;while(g<e){a.p.data[g]=(-1);g=g+1|0;}f=a.p.data;f[e]=f[e]|CV(a,c);}}
function C9(a,b){var c;c=b%32|0;return (-1)<<c;}
function CV(a,b){var c;c=b%32|0;return !c?0:(-1)>>>(32-c|0);}
function AAM(a,b){var c,d;c=b/32|0;if(c<a.p.data.length){d=a.p.data;d[c]=d[c]&KJ((-2),b%32|0);if(b==(a.z-1|0))CI(a);}}
function O6(a,b,c){var d,e,f,g,h;if(b>c)G(Cp());if(b>=a.z)return;d=V(a.z,c);e=b/32|0;f=d/32|0;if(e==f){g=a.p.data;g[e]=g[e]&(CV(a,b)|C9(a,d));}else{g=a.p.data;g[e]=g[e]&CV(a,b);h=e+1|0;while(h<f){a.p.data[h]=0;h=h+1|0;}g=a.p.data;g[f]=g[f]&C9(a,d);}CI(a);}
function Pd(a,b){var c;c=b/32|0;return c<a.p.data.length&&a.p.data[c]&1<<(b%32|0)?1:0;}
function ZJ(a,b){var c,d,e,f,g;if(b>=a.z)return (-1);c=b/32|0;d=a.p.data[c];e=d>>>(b%32|0);if(e)return CZ(e)+b|0;f=(a.z+31|0)/32|0;g=c+1|0;while(g<f){if(a.p.data[g])return (g*32|0)+CZ(a.p.data[g])|0;g=g+1|0;}return (-1);}
function RR(a,b){var c,d,e,f,g;if(b>=a.z)return b;c=b/32|0;d=a.p.data[c]^(-1);e=d>>>(b%32|0);if(e)return CZ(e)+b|0;f=(a.z+31|0)/32|0;g=c+1|0;while(g<f){if(a.p.data[g]!=(-1))return (g*32|0)+CZ(a.p.data[g]^(-1))|0;g=g+1|0;}return a.z;}
function C2(a,b){var c;if(a.p.data.length>=b)return;c=Bq((b*3|0)/2|0,(a.p.data.length*2|0)+1|0);a.p=Zu(a.p,c);}
function CI(a){var b,c,d;b=(a.z+31|0)/32|0;a.z=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=EP(a.p.data[c]);if(d<32)break;c=c+(-1)|0;a.z=a.z-32|0;}a.z=a.z-d|0;}}
function QX(a,b){var c,d;c=V(a.p.data.length,b.p.data.length);d=0;while(d<c){if(a.p.data[d]&b.p.data[d])return 1;d=d+1|0;}return 0;}
function Yd(a,b){var c,d,e;c=V(a.p.data.length,b.p.data.length);d=0;while(d<c){e=a.p.data;e[d]=e[d]&b.p.data[d];d=d+1|0;}while(c<a.p.data.length){a.p.data[c]=0;c=c+1|0;}a.z=V(a.z,b.z);CI(a);}
function Z3(a,b){var c,d,e;c=V(a.p.data.length,b.p.data.length);d=0;while(d<c){e=a.p.data;e[d]=e[d]&(b.p.data[d]^(-1));d=d+1|0;}CI(a);}
function X0(a,b){var c,d,e;a.z=Bq(a.z,b.z);C2(a,(a.z+31|0)/32|0);c=V(a.p.data.length,b.z);d=0;while(d<c){e=a.p.data;e[d]=e[d]|b.p.data[d];d=d+1|0;}}
function AAc(a,b){var c,d,e;a.z=Bq(a.z,b.z);C2(a,(a.z+31|0)/32|0);c=V(a.p.data.length,b.z);d=0;while(d<c){e=a.p.data;e[d]=e[d]^b.p.data[d];d=d+1|0;}CI(a);}
function Yl(a){return a.z?0:1;}
function F7(){}
function GR(){I.call(this);this.j6=null;}
function ACu(a){var b=new GR();AAs(b,a);return b;}
function AAs(a,b){a.j6=b;P(a);}
function T8(a,b){return Mm(b);}
function Gb(){Bt.call(this);}
function AFx(a){var b=new Gb();Hb(b,a);return b;}
function Hb(a,b){Ck(a,b);}
function O9(a,b,c,d){var e;e=a.c_();d.D(e,b-d.bF(e)|0);return a.f.b(b,c,d);}
function Ua(a,b){return 0;}
function Bf(){C.call(this);}
var AFy=null;var AFz=null;var AFA=null;var AFB=null;var AFC=null;var AFD=null;var AFE=null;var AFF=null;var AFG=null;var AFH=null;var AFI=null;var AFJ=null;var AFK=null;var AFL=null;var AFM=null;var AFN=0;var AFO=null;var AFP=0;function Bh(){Bh=Be(Bf);WE();}
function PZ(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$$je;Bh();c=AFA;d="v1.30";c.innerHTML=d;BJ(B(252));CF(null);e=B(253);f=$rt_str(AFy.location.href);if(f.fP(B(254))){g=f.e_(f.cA(63)+1|0);h=g.i6(B(255));i=h.data;j=i.length;k=0;while(k<j){a:{l=i[k];m=l.i6(B(256));n=m.data;if(B(257).bz(n[0]))e=n[1];else if(B(258).bz(n[0]))try{AFP=DN(n[1]);break a;}catch($$e){$$je=Bb($$e);if($$je instanceof Cs){}else{throw $$e;}}}k=k+1|0;}}E4().o(J().a(B(259)).a(e).e());AFO=Pr(e);if(AFO!==null)E4().o(J().a(B(259)).a(AFO.bZ()).e());ZV();WG();o
=AFz.getElementById("layout-option-custom");AFB.options.remove(0);BQ();i=AFq.data;j=i.length;k=0;while(k<j){p=i[k];q=o.cloneNode(!!1);c=$rt_ustr(p.bZ());q.text=c;c=!!p.dl().H();q.disabled=c;AFB.options.add(q);k=k+1|0;}AFB.options.add(o);c=AFB;r=AB5();c.addEventListener("change",CT(r,"handleEvent"));s=AFz.getElementById("config-option-custom");AFC.options.remove(0);i=AFr.data;j=i.length;k=0;while(k<j){t=i[k];u=s.cloneNode(!!1);c=$rt_ustr(t.bZ());u.text=c;c=$rt_ustr(t.fs());u.title=c;AFC.options.add(u);k=k+1|
0;}AFC.options.add(s);c=AFC;r=ADR();c.addEventListener("change",CT(r,"handleEvent"));c=AFH;r=AAY();c.addEventListener("click",CT(r,"handleEvent"));c=AFJ;r=ADM();c.addEventListener("click",CT(r,"handleEvent"));}
function G5(b){var c,d,e,f;Bh();c=0;a:{while(true){if(c>=AFC.options.length)break a;if(b.bz($rt_str(AFC.options.item(c).text)))break;c=c+1|0;}d=AFC;e=c;d.selectedIndex=e;BQ();f=AFr.data[c];Dk(f.bH());}}
function Ft(){var b,c,d;Bh();b=VD($rt_str(AFB.value));M9(b,$rt_str(AFD.value));LM(b,$rt_str(AFE.value));c=NS(b,null);if(AFK.firstChild!==null)Mi(AFK);d=c.jh(AFz,0);if(d===null)AFK.setAttribute("style","display:none");else{AFK.appendChild(d);AFK.setAttribute("style","display:block");}}
function LU(b){var c,d,e,f;Bh();AFN=b;if(AFN){c=AFB;d=0;c.selectedIndex=d;BQ();e=AFq.data[AFB.selectedIndex];Gi(e.bH());c=AFC;d=2;c.selectedIndex=d;f=AFr.data[AFC.selectedIndex];Dk(f.bH());Ft();}}
function LF(){var b,c,d,e,f,g,h,i,$$je;Bh();b=VD($rt_str(AFB.value));M9(b,$rt_str(AFD.value));LM(b,$rt_str(AFE.value));if(!b.ll()){BJ(B(260));return;}if(AFO!==null&&AFO.bH().g()){c=OO(b.d9(),AFO.bH());d=Pu(b.d9(),AFO.bH());e=ABk();f=e.j1(b,c,d);g=NS(b,f.lu());CF(g.jh(AFz,1));a:{try{h=AD4(AFP);i=h.lr(f);BJ(i);break a;}catch($$e){$$je=Bb($$e);if($$je instanceof BY){}else{throw $$e;}}BJ(B(261));}return;}BJ(B(262));}
function Gi(b){var c,d;Bh();if(AFD.firstChild!==null){c=AFD;d=AFD.firstChild;c.removeChild(d);}d=AFD;c=AFz.createTextNode($rt_ustr(b));d.appendChild(c);c=AFD;d=$rt_ustr(b);c.value=d;}
function Dk(b){var c,d;Bh();if(AFE.firstChild!==null){c=AFE;d=AFE.firstChild;c.removeChild(d);}d=AFE;c=AFz.createTextNode($rt_ustr(b));d.appendChild(c);c=AFE;d=$rt_ustr(b);c.value=d;}
function CF(b){Bh();if(AFL.firstChild!==null)Mi(AFL);if(b===null)AFL.setAttribute("style","display:none");else{AFL.appendChild(b);AFL.setAttribute("style","display:block");}}
function BJ(b){var c,d;Bh();if(AFM.firstChild!==null){c=AFM;d=AFM.firstChild;c.removeChild(d);}if(b!==null){c=AFM;d=$rt_ustr(b);c.innerHTML=d;}else{c=AFO===null?B(263):J().a(B(264)).a(AFO.fs()).e();d=AFM;c=$rt_ustr(J().a(c).a(B(265)).e());d.innerHTML=c;}}
function Ew(){Bh();return AFB;}
function L$(b){Bh();G5(b);}
function Dm(){Bh();Ft();}
function Fr(){Bh();return AFC;}
function E2(){Bh();return AFD;}
function E3(){Bh();return AFF;}
function Er(){Bh();return AFE;}
function Gf(){Bh();return AFG;}
function Mc(){Bh();return AFI;}
function G_(){Bh();return AFN;}
function Ki(){Bh();LF();}
function WE(){AFy=window;AFz=Zw();AFA=AFz.getElementById("version-text");AFB=AFz.getElementById("layout-select");AFC=AFz.getElementById("config-select");AFD=AFz.getElementById("layout-input");AFE=AFz.getElementById("config-input");AFF=AFz.getElementById("modal-layout-input");AFG=AFz.getElementById("modal-config-input");AFH=AFz.getElementById("save-input-button");AFI=AFz.getElementById("close-input-button");AFJ=AFz.getElementById("analyze-button");AFK=AFz.getElementById("keyboard-panel-fingers");AFL=AFz.getElementById("keyboard-panel-heatmap");AFM
=AFz.getElementById("output-panel");AFN=0;AFP=5;}
function D6(){BP.call(this);}
var AFQ=0.0;var AFR=null;function AFS(){AFS=Be(D6);Rz();}
function Rz(){AFQ=NaN;AFR=D($rt_floatcls());}
function H8(){C.call(this);}
function EM(b,c){var d,e,f,g;d=b.data;e=$rt_createCharArray(c);f=V(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function FS(b,c){var d,e,f,g;d=b.data;e=$rt_createByteArray(c);f=V(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function Zu(b,c){var d,e,f,g;d=b.data;e=$rt_createIntArray(c);f=V(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function Mb(b,c){var d,e,f,g;d=b.data;e=I6(Cf(b).eC(),c);f=V(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function Vp(b,c,d,e){var f,g;if(c>d)G(Cv());while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function DE(b,c){Vp(b,0,b.data.length,c);}
function U1(b,c,d,e){var f,g;if(c>d)G(Cv());while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function Sj(b,c){U1(b,0,b.data.length,c);}
function Pz(b,c){return Q0(b,0,b.data.length,c);}
function Q0(b,c,d,e){var f,g,h,i;if(c>d)G(Cv());f=d-1|0;while(true){g=b.data;h=(c+f|0)/2|0;i=g[h];if(i==e)break;if(e>=i){c=h+1|0;if(c>f)return  -h-2|0;}else{f=h-1|0;if(f<c)return  -h-1|0;}}return h;}
function B1(){Z.call(this);this.cb=0;}
function JW(a){var b=new B1();Sa(b,a);return b;}
function Sa(a,b){BH(a);a.cb=b;}
function Zk(a){return 1;}
function Xu(a,b,c){return a.cb!=c.d(b)?(-1):1;}
function UV(a,b,c,d){var e,f,g,h;if(!(c instanceof Bk))return C7(a,b,c,d);e=c;f=d.q();while(true){if(b>=f)return (-1);g=e.cG(a.cb,b);if(g<0)return (-1);h=a.f;b=g+1|0;if(h.b(b,c,d)>=0)break;}return g;}
function Zx(a,b,c,d,e){var f,g;if(!(d instanceof Bk))return Db(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);g=f.es(a.cb,c);if(g<0)break a;if(g<b)break a;if(a.f.b(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function Rh(a){return a.cb;}
function Wo(a,b){if(b instanceof B1)return b.ck()!=a.cb?0:1;if(!(b instanceof B2)){if(b instanceof BK)return b.j(a.cb);if(!(b instanceof B0))return 1;return 0;}return b.I(0,FX(a.cb))<=0?0:1;}
function GD(){Z.call(this);this.iW=0;}
function ABE(a){var b=new GD();Vj(b,a);return b;}
function Vj(a,b){BH(a);a.Q=2;a.iW=Cn(Cm(b));}
function Uu(a,b,c){var d,e,f;d=b+1|0;e=c.d(b);f=c.d(d);return a.iW!=Cn(Cm(BU(e,f)))?(-1):2;}
function Ml(){BW.call(this);}
function ADg(){var a=new Ml();OI(a);return a;}
function OI(a){CS(a);}
function N_(a,b){$rt_putStdout(b);}
function DF(){C.call(this);}
var AFT=null;var AFU=null;function E4(){if(AFT===null)AFT=Pi(ADg(),0);return AFT;}
function Cz(){if(AFU===null)AFU=Pi(AC2(),0);return AFU;}
function Gt(b,c,d,e,f){var g,h,i,j,k,l,m,n;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=I0(b)){g=e+f|0;if(g<=I0(d)){a:{b:{if(b!==d){h=Cf(b).eC();i=Cf(d).eC();if(h!==null&&i!==null){if(h===i)break b;if(!h.eq()&&!i.eq()){j=b;k=0;g=c;while(k<f){l=j.data;m=g+1|0;n=l[g];if(!i.jV(n)){F_(b,c,d,e,k);G(Ka());}k=k+1|0;g=m;}F_(b,c,d,e,f);return;}if(!h.eq())break a;if(i.eq())break b;else break a;}G(Ka());}}F_(b,c,d,e,f);return;}G(Ka());}}G(Cp());}G(SV(B(266)));}
function F_(b,c,d,e,f){if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}} else {c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function II(){var a=this;I.call(a);a.eH=0;a.hF=null;a.fX=null;}
function AA0(a,b,c){var d=new II();Zh(d,a,b,c);return d;}
function Zh(a,b,c,d){a.fX=b;a.eH=c;a.hF=d;P(a);}
function Ut(a,b){return !(a.eH^a.fX.v.bQ(b))&&!(a.eH^a.fX.bO^a.hF.j(b))?0:1;}
function IP(){var a=this;I.call(a);a.jc=0;a.i0=null;a.ix=null;a.lL=null;}
function AD9(a,b,c,d){var e=new IP();VZ(e,a,b,c,d);return e;}
function VZ(a,b,c,d,e){a.lL=b;a.jc=c;a.i0=d;a.ix=e;P(a);}
function Nk(a,b){return a.jc^(!a.i0.j(b)&&!a.ix.j(b)?0:1)?0:1;}
function IK(){var a=this;I.call(a);a.i7=null;a.js=null;}
function ACP(a,b){var c=new IK();NL(c,a,b);return c;}
function NL(a,b,c){a.js=b;a.i7=c;P(a);}
function Tr(a,b){return a.i7.j(b);}
function IJ(){var a=this;I.call(a);a.eU=0;a.h7=null;a.e7=null;}
function ACq(a,b,c){var d=new IJ();N6(d,a,b,c);return d;}
function N6(a,b,c,d){a.e7=b;a.eU=c;a.h7=d;P(a);}
function NI(a,b){return !(a.eU^a.e7.v.bQ(b))&&!(a.eU^a.e7.bO^a.h7.j(b))?1:0;}
function JE(){var a=this;L.call(a);a.iQ=0;a.ji=0;}
function H(a,b){var c=new JE();Yu(c,a,b);return c;}
function Yu(a,b,c){Q(a);a.iQ=b;a.ji=c;}
function AAS(a){var b;b=By().J(a.iQ,a.ji);return b;}
function IL(){var a=this;I.call(a);a.ik=null;a.lT=null;}
function ACL(a,b){var c=new IL();N0(c,a,b);return c;}
function N0(a,b,c){a.lT=b;a.ik=c;P(a);}
function W6(a,b){return a.ik.j(b);}
function Jv(){L.call(this);}
function ABH(){var a=new Jv();RB(a);return a;}
function RB(a){Q(a);}
function YL(a){return By().J(48,57).J(97,102).J(65,70);}
function IS(){var a=this;I.call(a);a.gZ=null;a.g8=0;a.gP=null;}
function ABj(a,b,c){var d=new IS();TX(d,a,b,c);return d;}
function TX(a,b,c,d){a.gP=b;a.gZ=c;a.g8=d;P(a);}
function Td(a,b){return !a.gZ.j(b)&&!(a.g8^a.gP.v.bQ(b))?1:0;}
function IO(){var a=this;I.call(a);a.iJ=0;a.ia=null;a.h4=null;a.kq=null;}
function ADc(a,b,c,d){var e=new IO();OJ(e,a,b,c,d);return e;}
function OJ(a,b,c,d,e){a.kq=b;a.iJ=c;a.ia=d;a.h4=e;P(a);}
function Uv(a,b){return a.iJ^(!a.ia.j(b)&&!a.h4.j(b)?0:1);}
function IN(){var a=this;I.call(a);a.ii=null;a.kM=null;}
function ADo(a,b){var c=new IN();N3(c,a,b);return c;}
function N3(a,b,c){a.kM=b;a.ii=c;P(a);}
function NK(a,b){return a.ii.j(b)?0:1;}
function Ja(){W.call(this);this.gj=null;}
function ACe(a){var b=new Ja();SO(b,a);return b;}
function SO(a,b){BD(a);a.gj=b;}
function Qe(a,b,c,d){var e,f,g,h,i;e=d.q();f=b+1|0;if(f>e){d.by=1;return (-1);}g=c.d(b);if(Bm(g)){h=b+2|0;if(h<=e){i=c.d(f);if(CU(g,i))return a.gj.dk(BU(g,i))?(-1):a.f.b(h,c,d);}}return a.gj.dk(g)?(-1):a.f.b(f,c,d);}
function T3(a,b){a.f=b;}
function Ni(a){return (-2147483602);}
function ZZ(a,b){return 1;}
function IQ(){var a=this;I.call(a);a.gy=null;a.i4=0;a.hz=null;}
function ABS(a,b,c){var d=new IQ();WS(d,a,b,c);return d;}
function WS(a,b,c,d){a.hz=b;a.gy=c;a.i4=d;P(a);}
function W$(a,b){return !a.gy.j(b)&&!(a.i4^a.hz.v.bQ(b))?0:1;}
function Gu(){var a=this;C.call(a);a.ky=null;a.h9=null;a.dB=null;a.S=null;a.eb=0;a.ed=0;}
function ACX(a,b){var c=new Gu();Nv(c,a,b);return c;}
function Et(a,b){var c,d;c=a.dB.g();if(b>=0&&b<=c){d=Jx(a,b);if(d>=0&&a.S.jA()){a.S.kN();return 1;}a.S.bC=(-1);return 0;}G(Bp(EL(b)));}
function Jx(a,b){var c;a.S.ku();a.S.d6(1);a.S.kG(b);c=a.h9.bh(b,a.dB,a.S);if(c==(-1))a.S.by=1;return c;}
function K8(a){var b,c;b=a.dB.g();if(!HK(a))b=a.ed;if(a.S.bC>=0&&a.S.ij()==1){a.S.bC=a.S.ec();if(a.S.ec()==a.S.hH()){c=a.S;c.bC=c.bC+1|0;}return a.S.bC<=b&&Et(a,a.S.bC)?1:0;}return Et(a,a.eb);}
function M0(a,b){return a.S.e1(b);}
function Hn(a,b){return a.S.gc(b);}
function Mj(a){return M0(a,0);}
function Kl(a){return Hn(a,0);}
function HK(a){return a.S.df();}
function Nv(a,b,c){var d,e,f,g,h;M(a);a.eb=(-1);a.ed=(-1);a.ky=b;a.h9=b.eJ;a.dB=c;a.eb=0;a.ed=a.dB.g();d=new Fn;e=a.eb;f=a.ed;g=Hd(b);h=K5(b);HC(d,c,e,f,g,h,Ih(b));a.S=d;}
function BZ(){C.call(this);}
var AFV=null;var AFW=null;var AFX=null;var AFY=null;var AFZ=null;var AF0=null;function N(){N=Be(BZ);PE();}
function FX(b){var c,d;N();c=new Bk;d=$rt_createCharArray(1);d.data[0]=b;Dt(c,d);return c;}
function G7(b){N();return b>0&&b<=65535?1:0;}
function D1(b){N();return b>=65536&&b<=1114111?1:0;}
function Bm(b){N();return (b&64512)!=55296?0:1;}
function Bu(b){N();return (b&64512)!=56320?0:1;}
function D5(b){N();return !Bm(b)&&!Bu(b)?0:1;}
function CU(b,c){N();return Bm(b)&&Bu(c)?1:0;}
function BU(b,c){N();return ((b&1023)<<10|c&1023)+65536|0;}
function Ix(b,c){N();return IR(b,c,b.data.length);}
function IR(b,c,d){var e,f;N();if(c<(d-1|0)){e=b.data;if(Bm(e[c])){f=c+1|0;if(Bu(e[f]))return BU(e[c],e[f]);}}return b.data[c];}
function CR(b){var c;N();c=b-65536|0;return (55296|c>>10&1023)&65535;}
function CG(b){N();return (56320|b&1023)&65535;}
function BI(b){N();return Cn(b)&65535;}
function Cn(b){N();return J0(b).toLowerCase().charCodeAt(0);}
function BA(b){N();return Cm(b)&65535;}
function Cm(b){N();return J0(b).toUpperCase().charCodeAt(0);}
function E_(b,c){N();return J_(b,c);}
function J_(b,c){var d;N();if(c>=2&&c<=36){d=Fj(b);if(d>=c)d=(-1);return d;}return (-1);}
function Ei(b){N();return Fj(b);}
function Fj(b){var c,d,e,f,g,h,i,j;N();c=GY();d=c.data;e=0;f=(d.length/2|0)-1|0;while(f>=e){g=(e+f|0)/2|0;h=g*2|0;i=d[h];j=B4(b,i);if(j>0)e=g+1|0;else{if(j>=0)return d[h+1|0];f=g-1|0;}}return (-1);}
function Eb(b,c){N();if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function MH(b){N();return Bn(b)!=9?0:1;}
function GY(){N();if(AFW===null)AFW=Tu((GM().value!==null?$rt_str(GM().value):null));return AFW;}
function GM(){N();if(AFZ===null)AFZ=LK();return AFZ;}
function LN(){N();if(AFX===null)AFX=AAN((KD().value!==null?$rt_str(KD().value):null));return AFX;}
function KD(){N();if(AF0===null)AF0=MX();return AF0;}
function CK(b){var c,d;N();if(b<65536){c=$rt_createCharArray(1);c.data[0]=b&65535;return c;}c=$rt_createCharArray(2);d=c.data;d[0]=CR(b);d[1]=CG(b);return c;}
function Li(b){var c;N();a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}c=1;break a;}c=0;}return c;}
function C_(b){N();return Bn(b);}
function Bn(b){var c,d,e,f,g,h;N();if(G7(b)&&D5(b&65535))return 19;c=LN();d=c.data;e=0;f=d.length-1|0;while(e<=f){g=(e+f|0)/2|0;h=d[g];if(b>=h.gE)e=g+1|0;else{if(b>=h.fO)return h.ih.data[b-h.fO|0];f=g-1|0;}}return 0;}
function Is(b){N();return FR(b);}
function FR(b){N();return Bn(b)!=2?0:1;}
function Gx(b){N();return Bn(b)!=1?0:1;}
function Hi(b){N();return Bn(b)!=3?0:1;}
function MY(b){N();return !Bn(b)?0:1;}
function Lm(b){N();switch(Bn(b)){case 1:case 2:case 3:case 4:case 5:break;default:return 0;}return 1;}
function F4(b){N();return EO(b);}
function EO(b){N();a:{switch(Bn(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function Mm(b){N();a:{switch(Bn(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break a;default:break a;}return 1;}return CJ(b);}
function ML(b){N();a:{switch(Bn(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break a;default:break a;}return 1;}return CJ(b);}
function Lz(b){N();a:{switch(Bn(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break a;default:break a;}return 1;}return 0;}
function L2(b){N();a:{switch(Bn(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break a;default:break a;}return 1;}return CJ(b);}
function KG(b){N();a:{switch(Bn(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break a;default:break a;}return 1;}return CJ(b);}
function CJ(b){N();a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Bn(b)!=16?0:1;}
function Fu(b){N();switch(Bn(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function I_(b){N();return F0(b);}
function F0(b){N();switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return Fu(b);}return 1;}
function PE(){AFV=D($rt_charcls());AFY=F(BZ,128);}
function LK(){return {"value":"oD#*% .%%2%)6%-:%1>%5B%9F%=J%AN%Eo%Is%Mw%Q{%U!\'Y&\'^*\'b.\'f2\'j6\'n:\'r>\'vB\'zF\'!#J\'&#N\'*#R\'.#V\'2#Z\'6#_\':#c\'>#g\'B#k\'F#o\'J#s\'N#w\'R#6)I:)M>)QB)UF)YJ)^N)bR)fV)jZ)n_)rc)vg)zk)!#o)&#s)*#w).#{)2#!+6#&+:#*+>#.+B#2+F#6+J#:+N#>+R#{R# !T#%&T#)*T#-.T#12T#56T#9:T#=>T#ABT#E6a# :a#%>a#)Ba#-Fa#1Ja#5Na#9Ra#=Va#AZa#E:s# >s#%Bs#)Fs#-Js#1Ns#5Rs#9Vs#=Zs#A_s#EZ:% _:%%c:%)g:%-k:%1o:%5s:%9w:%={:%A!<%E2F% 6F%%:F%)>F%-BF%1FF%5JF%9NF%=RF%AVF%EgP% kP%%oP%)sP%-wP%1{P%5!R%9&R%=*R%A.R%E>]% B]%%F]%)J]%-N]%1R]%5V]%9Z]%=_]%Ac]%Esg% wg%%{g%)!i%-&"
+"i%1*i%5.i%92i%=6i%A:i%EJs% Ns%%Rs%)Vs%-Zs%1_s%5cs%9gs%=ks%Aos%E!!\' &!\'%*!\').!\'-2!\'16!\'5:!\'9>!\'=B!\'AF!\'EV,\' Z,\'%_,\')c,\'-g,\'1k,\'5o,\'9s,\'=w,\'A{,\'E.8\' 28\'%68\'):8\'->8\'1B8\'5F8\'9J8\'=N8\'AR8\'EcB\' gB\'%kB\')oB\'-sB\'1wB\'5{B\'9!D\'=&D\'A*D\'E>L\' BL\'%FL\')JL\'-NL\'1RL\'5VL\'9ZL\'=_L\'AcL\'EsV\' wV\'%{V\')!X\'-&X\'1*X\'5.X\'92X\'=6X\'A:X\'EB_\' F_\'%J_\')N_\'-R_\'1V_\'5Z_\'9__\'=c_\'Ag_\'Esw\' ww\'%{w\')!y\'-&y\'1*y\'5.y\'92y\'=6y\'A:y\'EB!) F!)%J!))N!)-R!)1V!)5Z!)9_!)=c!)Ag!)Egi+ ki+%oi+)si+-wi+1{i+5!k+9&k+=*k+A.k+Eom+ sm+%wm+){m+-!o+1&o+5*o+9.o+=2o+A6o+E>,- B,-%F"
+",-)J,--N,-1R,-5V,-9Z,-=_,-Ac,-E>8- B8-%F8-)J8--N8-1R8-5V8-9Z8-=_8-Ac8-E{F- !H-%&H-)*H--.H-12H-56H-9:H-=>H-ABH-E_H- cH-%gH-)kH--oH-1sH-5wH-9{H-=!J-A&J-E!Z- &Z-%*Z-).Z--2Z-16Z-5:Z-9>Z-=BZ-AFZ-E2c- 6c-%:c-)>c--Bc-1Fc-5Jc-9Nc-=Rc-AVc-EJo- No-%Ro-)Vo--Zo-1_o-5co-9go-=ko-Aoo-E.q- 2q-%6q-):q-->q-1Bq-5Fq-9Jq-=Nq-ARq-E&4r *4r%.4r)24r-64r1:4r5>4r9B4r=F4rAJ4rE{or !qr%&qr)*qr-.qr12qr56qr9:qr=>qrABqrE&ur *ur%.ur)2ur-6ur1:ur5>ur9Bur=FurAJurE**t .*t%2*t)6*t-:*t1>*t5B*t9F*t=J*tAN*tEN,t R,t%V,t)Z,t-_,t1c,t5g,t9k,t=o,tAs,tE_"
+"4t c4t%g4t)k4t-o4t1s4t5w4t9{4t=!6tA&6tEgXt kXt%oXt)sXt-wXt1{Xt5!Zt9&Zt=*ZtA.ZtE{c@# !e@#%&e@#)*e@#-.e@#12e@#56e@#9:e@#=>e@#ABe@#Ece@#Ige@#Mke@#Qoe@#Use@#Ywe@#^{e@#b!g@#f&g@#j*g@#n.g@#r2g@#v6g@#z:g@#!#>g@#&#Bg@#*#Fg@#.#Jg@#2#Ng@#6#Rg@#:#Vg@#>#Zg@#B#_g@#F#cg@#J#gg@#N#kg@#R#*i@#I.i@#M2i@#Q6i@#U:i@#Y>i@#^Bi@#bFi@#fJi@#jNi@#nRi@#rVi@#vZi@#z_i@#!#ci@#&#gi@#*#ki@#.#oi@#2#si@#6#wi@#:#{i@#>#!k@#B#&k@#F#*k@#J#.k@#N#2k@#R#s&D# w&D#%{&D#)!(D#-&(D#1*(D#5.(D#92(D#=6(D#A:(D#E2.H# 6.H#%:.H#)>.H#-B.H#1F.H#5J.H#9N.H#=R.H#AV."
+"H#EwuH# {uH#%!wH#)&wH#-*wH#1.wH#52wH#96wH#=:wH#A>wH#Ew$J# {$J#%!&J#)&&J#-*&J#1.&J#52&J#96&J#=:&J#A>&J#E{*J# !,J#%&,J#)*,J#-.,J#12,J#56,J#9:,J#=>,J#AB,J#E_8J# c8J#%g8J#)k8J#-o8J#1s8J#5w8J#9{8J#=!:J#A&:J#E2RJ# 6RJ#%:RJ#)>RJ#-BRJ#1FRJ#5JRJ#9NRJ#=RRJ#AVRJ#ENqJ# RqJ#%VqJ#)ZqJ#-_qJ#1cqJ#5gqJ#9kqJ#=oqJ#AsqJ#E&}J# *}J#%.}J#)2}J#-6}J#1:}J#5>}J#9B}J#=F}J#AJ}J#Eg@L# k@L#%o@L#)s@L#-w@L#1{@L#5!BL#9&BL#=*BL#A.BL#EZJL# _JL#%cJL#)gJL#-kJL#1oJL#5sJL#9wJL#={JL#A!LL#ENTL# RTL#%VTL#)ZTL#-_TL#1cTL#5gTL#9kTL#=oTL#AsTL#E:{L# >{L#"
+"%B{L#)F{L#-J{L#1N{L#5R{L#9V{L#=Z{L#A_{L#ERkN# VkN#%ZkN#)_kN#-ckN#1gkN#5kkN#9okN#=skN#AwkN#E_$P# c$P#%g$P#)k$P#-o$P#1s$P#5w$P#9{$P#=!&P#A&&P#E.,P# 2,P#%6,P#):,P#->,P#1B,P#5F,P#9J,P#=N,P#AR,P#EFau# Jau#%Nau#)Rau#-Vau#1Zau#5_au#9cau#=gau#Akau#Eouu# suu#%wuu#){uu#-!wu#1&wu#5*wu#9.wu#=2wu#A6wu#EF0N% J0N%%N0N%)R0N%-V0N%1Z0N%5_0N%9c0N%=g0N%Ak0N%Eo0N% s0N%%w0N%){0N%-!2N%1&2N%5*2N%9.2N%=22N%A62N%E:2N% >2N%%B2N%)F2N%-J2N%1N2N%5R2N%9V2N%=Z2N%A_2N%Ec2N% g2N%%k2N%)o2N%-s2N%1w2N%5{2N%9!4N%=&4N%A*4N%E.4N% 24N%%64N%):4N%->"
+"4N%1B4N%5F4N%9J4N%=N4N%AR4N%ERJR% VJR%%ZJR%)_JR%-cJR%1gJR%5kJR%9oJR%=sJR%AwJR%E>qR% BqR%%FqR%)JqR%-NqR%1RqR%5VqR%9ZqR%=_qR%AcqR%E:FV% >FV%%BFV%)FFV%-JFV%1NFV%5RFV%9VFV%=ZFV%A_FV%E"};}
function MX(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
function Lb(){W.call(this);}
function ADA(){var a=new Lb();P_(a);return a;}
function P_(a){BD(a);}
function Zv(a,b,c,d){var e,f,g,h,i;e=d.q();f=b+1|0;if(f>e){d.by=1;return (-1);}g=c.d(b);if(Bm(g)){h=b+2|0;if(h<=e){i=c.d(f);if(CU(g,i))return a.f.b(h,c,d);}}return a.f.b(f,c,d);}
function RG(a,b){a.f=b;}
function PW(a){return (-2147483602);}
function RD(a,b){return 1;}
function GQ(){var a=this;Z.call(a);a.iB=0;a.g7=0;}
function Si(a){var b=new GQ();Tz(b,a);return b;}
function Tz(a,b){BH(a);a.iB=b;a.g7=C6(b);}
function Or(a,b,c){return a.iB!=c.d(b)&&a.g7!=c.d(b)?(-1):1;}
function B0(){var a=this;Z.call(a);a.eu=0;a.d$=0;a.dX=0;}
function ABM(a){var b=new B0();ZX(b,a);return b;}
function ZX(a,b){var c,d;BH(a);a.Q=2;a.dX=b;c=CK(b);d=c.data;a.eu=d[0];a.d$=d[1];}
function Tj(a,b,c){var d,e,f;d=b+1|0;e=c.d(b);f=c.d(d);return a.eu==e&&a.d$==f?2:(-1);}
function Py(a,b,c,d){var e,f,g,h;if(!(c instanceof Bk))return C7(a,b,c,d);e=c;f=d.q();while(b<f){g=e.cG(a.eu,b);if(g<0)return (-1);b=g+1|0;if(b>=f)continue;h=e.d(b);if(a.d$==h&&a.f.b(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function R9(a,b,c,d,e){var f,g,h;if(!(d instanceof Bk))return Db(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);g=f.es(a.d$,c);h=g+(-1)|0;if(h<0)break a;if(h<b)break a;if(a.eu==f.d(h)&&a.f.b(h+2|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function Oa(a){return a.dX;}
function SZ(a,b){if(b instanceof B0)return b.gk()!=a.dX?0:1;if(b instanceof BK)return b.j(a.dX);if(b instanceof B1)return 0;if(!(b instanceof B2))return 1;return 0;}
function Ha(){I.call(this);this.lW=null;}
function AB_(a){var b=new Ha();UT(b,a);return b;}
function UT(a,b){a.lW=b;P(a);}
function XA(a,b){return FR(b);}
function Mw(){var a=this;L.call(a);a.fA=0;a.eY=0;a.gX=0;}
function Dc(a,b){var c=new Mw();UH(c,a,b);return c;}
function ADD(a,b,c){var d=new Mw();NA(d,a,b,c);return d;}
function UH(a,b,c){Q(a);a.eY=c;a.fA=b;}
function NA(a,b,c,d){Q(a);a.gX=d;a.eY=c;a.fA=b;}
function Nz(a){var b;b=ABz(a.fA);if(a.gX)b.K.d7(0,2048);b.y=a.eY;return b;}
function BK(){var a=this;W.call(a);a.b1=null;a.lY=0;}
function ZE(a){var b=new BK();Iw(b,a);return b;}
function Iw(a,b){BD(a);a.b1=b.c8();a.lY=b.G;}
function U2(a,b,c,d){var e,f,g,h,i;e=d.q();if(b<e){f=b+1|0;g=c.d(b);if(a.j(g)){h=a.f.b(f,c,d);if(h>0)return h;}if(f<e){h=f+1|0;i=c.d(f);if(CU(g,i)&&a.j(BU(g,i)))return a.f.b(h,c,d);}}return (-1);}
function V8(a,b){return a.b1.j(b);}
function P8(a,b){if(b instanceof B0)return DW(a.b1,b.gk());if(b instanceof B1)return DW(a.b1,b.ck());if(b instanceof BK)return CW(a.b1,b.b1);if(!(b instanceof B2))return 1;return CW(a.b1,b.fe());}
function Zq(a){return a.b1;}
function Vk(a,b){a.f=b;}
function Vm(a,b){return 1;}
function G0(){BK.call(this);}
function Pw(a){var b=new G0();TN(b,a);return b;}
function TN(a,b){Iw(a,b);}
function Y6(a,b){return a.b1.j(Cn(Cm(b)));}
function Ng(){L.call(this);}
function AA4(){var a=new Ng();S5(a);return a;}
function S5(a){Q(a);}
function NU(a){var b;b=ABs(a);b.y=1;return b;}
function B_(){C.call(this);}
var AF1=null;var AF2=null;function AF3(){var a=new B_();Fm(a);return a;}
function Fm(a){M(a);}
function Fq(b){if(!(b&1)){if(AF2!==null)return AF2;AF2=AC0();return AF2;}if(AF1!==null)return AF1;AF1=AB3();return AF1;}
function E8(){var a=this;W.call(a);a.b5=null;a.fu=null;a.dn=0;}
function WL(a,b){var c=new E8();OM(c,a,b);return c;}
function OM(a,b,c){BD(a);a.b5=b;a.dn=c;}
function NM(a,b){a.f=b;}
function FL(a){if(a.fu===null)a.fu=GE(a.b5);return a.fu;}
function NN(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;e=d.q();f=0;g=$rt_createIntArray(3);h=(-1);i=(-1);if(b>=e)return (-1);j=b+1|0;k=c.d(b);l=TP(k);if(l!==null){m=l.data;n=0;if(m.length!=a.dn)return (-1);while(true){if(n>=a.dn)return a.f.b(j,c,d);if(m[n]!=a.b5.data[n])break;n=n+1|0;}return (-1);}o=g.data;o[f]=k;p=k-4352|0;if(p>=0&&p<19){if(j<e){k=c.d(j);h=k-4449|0;}if(h>=0&&h<21){q=j+1|0;o[1]=k;if(q<e){k=c.d(q);i=k-4519|0;}if(i>=0&&i<28){r=q+1|0;o[2]=k;if(a.dn==3&&o[0]==a.b5.data[0]&&o[1]==a.b5.data[1]&&o[2]
==a.b5.data[2]){s=a.f;r=s.b(r,c,d);}else r=(-1);return r;}if(a.dn==2&&o[0]==a.b5.data[0]&&o[1]==a.b5.data[1]){s=a.f;r=s.b(q,c,d);}else r=(-1);return r;}return (-1);}return (-1);}
function RE(a,b){var c,d;a:{if(b instanceof E8){c=b;if(!FL(c).bz(FL(a))){d=0;break a;}}d=1;}return d;}
function WH(a,b){return 1;}
function Ds(){CD.call(this);}
function AF4(a,b,c){var d=new Ds();GG(d,a,b,c);return d;}
function GG(a,b,c,d){FB(a,b);a.L=c;a.bM=d;}
function Mz(b){if(b>=0)return ABy(b);G(Bz(J().a(B(267)).m(b).e()));}
function MI(b,c,d){return AB2(0,b.data.length,b,c,c+d|0,0);}
function O5(b){return MI(b,0,b.data.length);}
function PP(a,b,c,d){var e,f,g,h,i;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Bp(J().a(B(268)).m(g).a(B(236)).m(f).e()));if(X(a)<d)G(Yp());if(d<0)G(Bp(J().a(B(237)).m(d).a(B(238)).e()));h=a.L;i=0;while(i<d){g=c+1|0;f=h+1|0;e[c]=a.ly(h);i=i+1|0;c=g;h=f;}a.L=a.L+d|0;return a;}}e=b.data;G(Bp(J().a(B(239)).m(c).a(B(23)).m(e.length).a(B(240)).e()));}
function SH(a,b){return a.iG(b,0,b.data.length);}
function AAt(a,b,c,d){var e,f,g,h,i;if(a.dN())G(Gy());if(X(a)<d)G(I7());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Bp(J().a(B(269)).m(g).a(B(236)).m(f).e()));if(d<0)G(Bp(J().a(B(237)).m(d).a(B(238)).e()));h=a.L;i=0;while(i<d){g=h+1|0;f=c+1|0;a.hi(h,e[c]);i=i+1|0;h=g;c=f;}a.L=a.L+d|0;return a;}}e=b.data;G(Bp(J().a(B(239)).m(c).a(B(23)).m(e.length).a(B(240)).e()));}
function QJ(a,b,c,d){var e,f,g,h,i,j;if(a.dN())G(Gy());e=d-c|0;if(X(a)<e)G(I7());if(c>=0&&c<b.g()){if(d>b.g()){f=new C5;g=J().a(B(269)).m(d).a(B(270));L3(f,g.m(b.g()).e());G(f);}if(c>d)G(Bp(J().a(B(271)).m(c).a(B(272)).m(d).e()));h=a.L;while(c<d){i=h+1|0;j=c+1|0;a.hi(h,b.d(c));h=i;c=j;}a.L=a.L+e|0;return a;}G(Bp(J().a(B(271)).m(c).a(B(23)).m(b.g()).a(B(240)).e()));}
function DT(a,b){return a.ls(b,0,b.g());}
function IT(a){return a.jH();}
function E$(a){return a.lJ();}
function G$(a){MK(a);return a;}
function Nq(a,b){FI(a,b);return a;}
function DR(){Ds.call(this);}
function AF5(a,b,c){var d=new DR();Jt(d,a,b,c);return d;}
function Jt(a,b,c,d){GG(a,b,c,d);}
function ZG(a){return a.kY();}
function L1(){var a=this;DR.call(a);a.iX=0;a.fL=0;a.ey=null;}
function ABy(a){var b=new L1();Rv(b,a);return b;}
function AB2(a,b,c,d,e,f){var g=new L1();M2(g,a,b,c,d,e,f);return g;}
function Rv(a,b){M2(a,0,b,$rt_createCharArray(b),0,b,0);}
function M2(a,b,c,d,e,f,g){Jt(a,c,e,f);a.fL=b;a.iX=g;a.ey=d;}
function Qn(a,b){return a.ey.data[b+a.fL|0];}
function Nn(a,b,c){a.ey.data[b+a.fL|0]=c;}
function Qd(a){return 1;}
function Wk(a){return a.ey;}
function Y_(a){return a.iX;}
function M4(){L.call(this);}
function ADN(){var a=new M4();O0(a);return a;}
function O0(a){Q(a);}
function XI(a){return By().J(33,64).J(91,96).J(123,126);}
function EQ(){var a=this;C.call(a);a.ci=null;a.eG=null;}
var AF6=null;function ABa(){ABa=Be(EQ);Nu();}
function NS(a,b){var c=new EQ();Gz(c,a,b);return c;}
function Gz(a,b,c){ABa();M(a);a.ci=b;a.eG=c;}
function Tk(a,b,c){var d,e,f,g,h,i;d=b.createElement("div");d.setAttribute("style","position:relative;");e=0;while(e<a.ci.co()){f=0;while(f<a.ci.iy()){g=a.ci.dM(e,f);if(g!==null){h=KZ(a,b,g,c);d.appendChild(h);}f=f+1|0;}i=b.createElement("br");d.appendChild(i);e=e+1|0;}return d;}
function KZ(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=b.createElement("span");e.setAttribute("class","key");f=null;if(!d)f=AF6.data[c.bd()];else{g=a.eG.gn(c);if(g!==null){h=V(255,160+(g.dU()*1000.0|0)|0);i=Bq(0,160-(g.dU()*1500.0|0)|0);f=J().a(B(273)).m(h).a(B(230)).m(i).a(B(230)).m(i).a(B(240)).e();}}j=(5-a.ci.co()|0)+c.ce()|0;k=JB(a,j,c.em(),a.ci.co());l=ACg(B(274));l.gC(J().a(B(275)).m(k.i9).a(B(276)).m(k.i8).a(B(277)).e());if(f===null){m=!!1;e.hidden=m;}else l.gC(J().a(B(278)).a(f).a(B(279)).e());n=l.e();e.setAttribute("style",
$rt_ustr(n));if(!d){n=J().a(B(280)).a(c.da()).a(B(281));n=n.a($rt_str(c.iY().toFixed(1))).e();e.setAttribute("title",$rt_ustr(n));}else{g=a.eG.gn(c);if(g!==null){n=J().a(B(280)).a(c.da()).a(B(282));n=n.a($rt_str((g.dU()*100.0).toFixed(2))).a(B(246)).e();e.setAttribute("title",$rt_ustr(n));}}m=Gg(c.iS());m=b.createTextNode($rt_ustr(m));e.appendChild(m);return e;}
function JB(a,b,c,d){var e,f,g;e=a.ci.kA();f=(c*36|0)+10|0;g=d<=3?(b*28|0)-36|0:(b*28|0)-24|0;a:{DV();if(e===AE$){if(b==1)break a;if(b==2){f=f+18|0;break a;}if(b==3){f=f+27|0;break a;}if(b!=4)break a;f=f+45|0;break a;}if(e===AE_){if(b==1)break a;if(b==2){f=f+18|0;break a;}if(b==3){f=f+27|0;break a;}if(b!=4)break a;f=f+(c>=5?45:9)|0;break a;}if(e!==AFa)break a;if(b==1){if(c<5)break a;f=f+90|0;if(c!=11)break a;f=f+(-36)|0;g=g+28|0;break a;}if(b!=2){if(c<5)break a;f=f+90|0;break a;}if(c>=5&&c<10){f=f+90|0;break a;}if
(c==10){f=f+(-180)|0;break a;}if(c!=11)break a;f=f+(-162)|0;}return AA6(a,f,g);}
function Nu(){var b,c;b=F(Bk,10);c=b.data;c[0]=B(283);c[1]=B(284);c[2]=B(285);c[3]=B(286);c[4]=null;c[5]=null;c[6]=B(287);c[7]=B(285);c[8]=B(284);c[9]=B(283);AF6=b;}
function B3(){CO.call(this);}
var AEN=null;var AEO=null;var AEP=null;var AEQ=null;var AF7=null;function FZ(){FZ=Be(B3);Ui();}
function E5(a,b){var c=new B3();LG(c,a,b);return c;}
function Ye(){FZ();return AF7.dI();}
function L5(b){FZ();return J7(D(B3),b);}
function LG(a,b,c){FZ();FU(a,b,c);}
function Ui(){var b,c;AEN=E5(B(288),0);AEO=E5(B(289),1);AEP=E5(B(290),2);AEQ=E5(B(291),3);b=F(B3,4);c=b.data;c[0]=AEN;c[1]=AEO;c[2]=AEP;c[3]=AEQ;AF7=b;}
function H3(){I.call(this);this.ki=null;}
function ADP(a){var b=new H3();NQ(b,a);return b;}
function NQ(a,b){a.ki=b;P(a);}
function W_(a,b){return Hi(b);}
function De(){var a=this;C.call(a);a.hA=null;a.gB=null;a.gH=null;a.gu=null;a.i$=0;}
function S(a,b,c){var d=new De();QF(d,a,b,c);return d;}
function QF(a,b,c,d){M(a);a.hA=b;a.gB=c;a.gH=J().a(d).a(B(292)).e();}
function OV(a){return a.hA;}
function X5(a){return a.gB;}
function Oi(a){return a.gH;}
function So(a){return a.gu;}
function AAK(a,b){a.gu=b;}
function QM(a){return a.i$;}
function QW(a,b){a.i$=b;}
function CB(){}
function HM(){C.call(this);}
function ADM(){var a=new HM();AAz(a);return a;}
function AAz(a){M(a);}
function M1(a,b){if(G_())Ki();}
function Xx(a,b){M1(a,b);}
function MM(){C.call(this);}
function HO(){C.call(this);}
function AAY(){var a=new HO();T5(a);return a;}
function T5(a){M(a);}
function Lu(a,b){var c,d;if(!$rt_str(E3().value).bz($rt_str(E2().value))){c=E2();d=$rt_ustr($rt_str(E3().value));c.value=d;c=Ew();BQ();d=AFq.data.length;c.selectedIndex=d;}if(!$rt_str(Gf().value).bz($rt_str(Er().value))){c=Er();d=$rt_ustr($rt_str(Gf().value));c.value=d;c=Fr();BQ();d=AFr.data.length;c.selectedIndex=d;}Mc().click();Dm();CF(null);BJ(null);}
function AAJ(a,b){Lu(a,b);}
function Ho(){C.call(this);}
function ADR(){var a=new Ho();AAj(a);return a;}
function AAj(a){M(a);}
function JO(a,b){var c,d;c=Fr().selectedIndex;BQ();if(c<AFr.data.length){d=AFr.data[c];Dk(d.bH());Dm();CF(null);BJ(null);}}
function WK(a,b){JO(a,b);}
function GC(){var a=this;C.call(a);a.iC=null;a.iD=null;a.gw=null;}
function Rw(a,b,c){var d=new GC();V6(d,a,b,c);return d;}
function V6(a,b,c,d){M(a);a.iC=b;a.iD=c;a.gw=d;}
function Vn(a){return a.iC;}
function YY(a){return a.iD;}
function P4(a){return a.gw;}
function SW(b){var c,d,e,f,g,h;c=$rt_createDoubleArray(10);d=b.V();while(d.W()){e=d.U();f=e.cv().bd();g=e.dx().bd();if(Ik(f,g)){h=c.data;h[f]=h[f]+e.cw().bN();}}return c;}
function MQ(){I.call(this);this.kU=null;}
function ABR(a){var b=new MQ();V2(b,a);return b;}
function V2(a,b){a.kU=b;P(a);}
function VU(a,b){return 0;}
function L_(){BR.call(this);this.lX=null;}
function ADn(a){var b=new L_();Qy(b,a);return b;}
function Qy(a,b){C3(a);a.lX=b;}
function Hp(){C.call(this);}
function AB5(){var a=new Hp();TH(a);return a;}
function TH(a){M(a);}
function KT(a,b){var c,d;c=Ew().selectedIndex;BQ();if(c<AFq.data.length){d=AFq.data[c];if(!d.dl().H()){Gi(d.bH());L$(d.fs());Dm();CF(null);BJ(null);}}}
function UW(a,b){KT(a,b);}
function Lr(){I.call(this);this.lZ=null;}
function ACi(a){var b=new Lr();V9(b,a);return b;}
function V9(a,b){a.lZ=b;P(a);}
function TG(a,b){return Li(b);}
function J$(){R.call(this);this.ib=0;}
function Wd(a){var b=new J$();Za(b,a);return b;}
function Za(a,b){Bo(a);a.ib=b;}
function Re(a,b,c,d){var e,f,g,h,i;e=b<d.q()?c.d(b):32;f=!b?32:c.d(b-1|0);g=!d.df()?d.bw():0;h=e!=32&&!FM(a,e,b,g,c)?0:1;i=f!=32&&!FM(a,f,b-1|0,g,c)?0:1;return h^i^a.ib?(-1):a.f.b(b,c,d);}
function RC(a,b){return 0;}
function FM(a,b,c,d,e){var f;if(!F4(b)&&b!=95){a:{if(C_(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=e.d(c);if(F4(f))return 0;if(C_(f)!=6)return 1;}}return 1;}return 0;}
function KR(){R.call(this);this.dH=0;}
function AAZ(a){var b=new KR();Wt(b,a);return b;}
function Wt(a,b){Bo(a);a.dH=b;}
function ZW(a,b,c,d){var e;e=!d.cU()?c.g():d.q();if(b>=e){d.D(a.dH,0);return a.f.b(b,c,d);}if((e-b|0)==1&&c.d(b)==10){d.D(a.dH,1);return a.f.b(b+1|0,c,d);}return (-1);}
function Wm(a,b){var c;c=!b.bF(a.dH)?0:1;b.D(a.dH,(-1));return c;}
function Do(){L.call(this);}
function ACS(){var a=new Do();L7(a);return a;}
function L7(a){Q(a);}
function LX(a){return By().J(9,13).bg(32);}
function Hl(){var a=this;C.call(a);a.kB=null;a.i2=null;a.hg=null;a.h5=null;a.kv=0.0;a.hq=null;a.hp=null;a.jj=null;a.hL=null;}
function ADF(a,b,c,d,e,f,g,h,i){var j=new Hl();Qg(j,a,b,c,d,e,f,g,h,i);return j;}
function Qg(a,b,c,d,e,f,g,h,i,j){M(a);a.kB=b;a.i2=c;a.hg=d;a.h5=e;a.kv=f;a.hq=g;a.hp=h;a.jj=i;a.hL=j;}
function P0(a){return a.i2;}
function Vo(a){return a.hg;}
function WV(a){return a.h5;}
function PB(a){return a.hq;}
function Wa(a){return a.hp;}
function Uj(a){return a.hL;}
function LS(){Z.call(this);this.gx=0;}
function SQ(a){var b=new LS();Ph(b,a);return b;}
function Ph(a,b){BH(a);a.gx=BI(BA(b));}
function Nw(a,b,c){return a.gx!=BI(BA(c.d(b)))?(-1):1;}
function DQ(){BP.call(this);this.g1=0.0;}
var AF8=0.0;var AF9=null;function FG(){FG=Be(DQ);SM();}
function ACf(a){var b=new DQ();Lh(b,a);return b;}
function Lh(a,b){FG();F3(a);a.g1=b;}
function AAq(a){return a.g1;}
function FC(b){FG();return ACf(b);}
function DG(b){var c,d,e,f,g,h,i,j,k,l,m,n,o;FG();if(b.H())G(Ca());c=0;d=b.g();while(true){if(b.d(c)>32){while(b.d(d-1|0)<=32){d=d+(-1)|0;}e=0;if(b.d(c)==45){c=c+1|0;e=1;}else if(b.d(c)==43)c=c+1|0;if(c==d)G(Ca());a:{f=b.d(c);g=Long_ZERO;h=0;i=0;if(f!=46){i=1;if(f>=48&&f<=57){b:{while(c<d){if(b.d(c)!=48)break b;c=c+1|0;}}while(c<d){j=b.d(c);if(j<48)break a;if(j>57)break a;if(Long_toNumber(g)>=1.0E17)h=h+1|0;else g=Long_add(Long_mul(g,Long_fromInt(10)),Long_fromInt(j-48|0));c=c+1|0;}}else G(Ca());}}if(c<d&&b.d(c)
==46){c=c+1|0;c:{while(true){if(c>=d)break c;k=b.d(c);if(k<48)break c;if(k>57)break;if(Long_toNumber(g)<1.0E17){g=Long_add(Long_mul(g,Long_fromInt(10)),Long_fromInt(k-48|0));h=h+(-1)|0;}c=c+1|0;i=1;}}if(!i)G(Ca());}if(c<d){k=b.d(c);if(k!=101&&k!=69)G(Ca());l=c+1|0;m=0;if(l==d)G(Ca());if(b.d(l)==45){l=l+1|0;m=1;}else if(b.d(l)==43)l=l+1|0;n=0;k=0;d:{while(true){if(l>=d)break d;o=b.d(l);if(o<48)break d;if(o>57)break;n=(10*n|0)+(o-48|0)|0;k=1;l=l+1|0;}}if(!k)G(Ca());if(m)n= -n;h=h+n|0;}e:{j=B4(h,308);if(j<=0){if
(j)break e;if(Long_le(g,new Long(2133831477, 4185580)))break e;}return e?(-Infinity):Infinity;}if(e)g=Long_neg(g);return Long_toNumber(g)*K1(h);}c=c+1|0;if(c==d)break;}G(Ca());}
function K1(b){var c,d;FG();if(b>=0)c=10.0;else{c=0.1;b= -b;}d=1.0;while(b){if(b%2|0)d=d*c;c=c*c;b=b/2|0;}return d;}
function SM(){AF8=NaN;AF9=D($rt_doublecls());}
function Ey(){Bt.call(this);this.gW=0;}
function AF$(a){var b=new Ey();My(b,a);return b;}
function My(a,b){Ck(a,b);}
function Pq(a,b,c,d){var e;e=a.c_();d.D(e,b-d.bF(e)|0);a.gW=b;return b;}
function R0(a){return a.gW;}
function Rb(a,b){return 0;}
function Dp(){W.call(this);this.cI=0;}
function P7(a){var b=new Dp();R8(b,a);return b;}
function R8(a,b){BD(a);a.cI=b;}
function QP(a,b){a.f=b;}
function ST(a,b,c,d){var e,f,g;e=b+1|0;if(e>d.q()){d.by=1;return (-1);}f=c.d(b);if(b>d.bw()){g=c.d(b-1|0);if(Bm(g))return (-1);}if(a.cI!=f)return (-1);return a.f.b(e,c,d);}
function XK(a,b,c,d){var e,f,g,h,i;if(!(c instanceof Bk))return C7(a,b,c,d);e=c;f=d.bw();g=d.q();while(true){if(b>=g)return (-1);h=e.cG(a.cI,b);if(h<0)return (-1);if(h>f&&Bm(e.d(h-1|0))){b=h+1|0;continue;}i=a.f;b=h+1|0;if(i.b(b,c,d)>=0)break;}return h;}
function Uc(a,b,c,d,e){var f,g,h;if(!(d instanceof Bk))return Db(a,b,c,d,e);f=e.bw();g=d;a:{while(true){if(c<b)return (-1);h=g.es(a.cI,c);if(h<0)break a;if(h<b)break a;if(h>f&&Bm(g.d(h-1|0))){c=h+(-2)|0;continue;}if(a.f.b(h+1|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function O2(a,b){if(b instanceof B1)return 0;if(b instanceof B2)return 0;if(b instanceof BK)return 0;if(b instanceof B0)return 0;if(b instanceof DA)return 0;if(!(b instanceof Dp))return 1;return b.cI!=a.cI?0:1;}
function V3(a,b){return 1;}
function Fa(){}
function LR(){B9.call(this);}
function ACQ(a,b){var c=new LR();Ud(c,a,b);return c;}
function Ud(a,b,c){IH(a,b,c);}
function LL(){var a=this;C.call(a);a.iN=0;a.ca=0;a.cC=null;a.ez=0;a.iz=0.0;}
function ADj(a,b,c){var d=new LL();QO(d,a,b,c);return d;}
function QO(a,b,c,d){M(a);a.iN=b;a.ca=c;a.kV(d);a.ez=M$(a);}
function WY(a){return BA(a.cC.d(0));}
function AAh(a){return a.iN;}
function XF(a){return a.ca;}
function Ze(a){return a.ez>4?1:0;}
function Ue(a){return a.ez;}
function Rd(a,b){a.ez=b;}
function PK(a){return a.iz;}
function Uf(a,b){a.iz=b;}
function OL(a){return a.cC;}
function Pm(a,b){var c,d,e,f;c=a.cC.ch().data;d=c.length;e=0;while(e<d){f=c[e];if(f==BA(b))return 1;e=e+1|0;}return 0;}
function Tw(a,b){var c;if(b.g()!=1)a.cC=b;else{c=Zs(b.d(0));if(!c)a.cC=b;else a.cC=J().a(Gg(b.d(0))).bt(c).e();}}
function M$(a){if(a.ca<=3)return a.ca;if(a.ca==4)return 3;if(a.ca==5)return 6;if(a.ca>9)return 9;return a.ca;}
function Zs(b){if(Lz(b)){if(!Is(b))return BI(b);return BA(b);}a:{switch(b){case 39:break;case 40:case 41:case 42:case 43:case 58:case 60:case 62:case 63:case 64:case 65:case 66:case 67:case 68:case 69:case 70:case 71:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 80:case 81:case 82:case 83:case 84:case 85:case 86:case 87:case 88:case 89:case 90:case 92:break a;case 44:return 60;case 45:return 95;case 46:return 62;case 47:return 63;case 48:return 41;case 49:return 33;case 50:return 64;case 51:return 35;case 52:return 36;case 53:return 37;case 54:return 94;case 55:return 38;case 56:return 42;case 57:return 40;case 59:return 58;case 61:return 43;case 91:return 123;case 93:return 125;default:break a;}return 34;}return 0;}
function Ch(){var a=this;Bv.call(a);a.cr=null;a.bB=0;}
function AF_(a,b,c,d,e){var f=new Ch();Dr(f,a,b,c,d,e);return f;}
function Dr(a,b,c,d,e,f){CA(a,c,d,e);a.cr=b;a.bB=f;}
function AAB(a,b,c,d){var e,f,g,h;e=d.hT(a.bB);if(!a.w.x(d))return a.f.b(b,c,d);if(e>=a.cr.c3())return a.f.b(b,c,d);f=a.bB;g=e+1|0;d.b6(f,g);h=a.w.b(b,c,d);if(h>=0){d.b6(a.bB,0);return h;}f=a.bB;g=g+(-1)|0;d.b6(f,g);if(g>=a.cr.c1())return a.f.b(b,c,d);d.b6(a.bB,0);return (-1);}
function Fg(){Ch.call(this);}
function AGa(a,b,c,d,e){var f=new Fg();HI(f,a,b,c,d,e);return f;}
function HI(a,b,c,d,e,f){Dr(a,b,c,d,e,f);}
function Px(a,b,c,d){var e,f;e=d.hT(a.bB);if(!a.w.x(d))return a.f.b(b,c,d);if(e>=a.cr.c3()){d.b6(a.bB,0);return a.f.b(b,c,d);}if(e<a.cr.c1()){d.b6(a.bB,e+1|0);f=a.w.b(b,c,d);}else{f=a.f.b(b,c,d);if(f>=0){d.b6(a.bB,0);return f;}d.b6(a.bB,e+1|0);f=a.w.b(b,c,d);}return f;}
function EA(){}
function DD(){Dn.call(this);this.cc=0;}
function AGb(){var a=new DD();Me(a);return a;}
function Me(a){LA(a);}
function Vf(a){return ABw(a);}
function E0(){}
function Id(){var a=this;DD.call(a);a.bk=null;a.bo=0;}
function BN(){var a=new Id();V7(a);return a;}
function AGc(a){var b=new Id();GU(b,a);return b;}
function V7(a){GU(a,10);}
function GU(a,b){Me(a);a.bk=F(C,b);}
function PD(a,b){var c,d;if(a.bk.data.length<b){if(a.bk.data.length>=1073741823)c=2147483647;else{d=a.bk.data.length*2|0;c=Bq(b,Bq(d,5));}a.bk=Mb(a.bk,c);}}
function Te(a,b){Ex(a,b);return a.bk.data[b];}
function QU(a){return a.bo;}
function XT(a,b){var c,d;a.b3(a.bo+1|0);c=a.bk.data;d=a.bo;a.bo=d+1|0;c[d]=b;a.cc=a.cc+1|0;return 1;}
function YX(a,b,c){var d;JP(a,b);a.b3(a.bo+1|0);d=a.bo;while(d>b){a.bk.data[d]=a.bk.data[d-1|0];d=d+(-1)|0;}a.bk.data[b]=c;a.bo=a.bo+1|0;a.cc=a.cc+1|0;}
function TQ(a,b){var c,d,e,f;Ex(a,b);c=a.bk.data[b];a.bo=a.bo-1|0;while(b<a.bo){d=a.bk.data;e=a.bk.data;f=b+1|0;d[b]=e[f];b=f;}a.bk.data[a.bo]=null;a.cc=a.cc+1|0;return c;}
function Ex(a,b){if(b>=0&&b<a.bo)return;G(Cp());}
function JP(a,b){if(b>=0&&b<=a.bo)return;G(Cp());}
function E6(){}
function Ff(){}
function HL(){C.call(this);}
function NB(a,b,c){a.mE($rt_str(b),DB(c,"handleEvent"));}
function Oc(a,b,c){a.nX($rt_str(b),DB(c,"handleEvent"));}
function Qc(a,b){return a.nn(b);}
function QA(a,b,c,d){a.mK($rt_str(b),DB(c,"handleEvent"),d?1:0);}
function XY(a,b){return !!a.mJ(b);}
function Ss(a){return a.nh();}
function Of(a,b,c,d){a.oZ($rt_str(b),DB(c,"handleEvent"),d?1:0);}
function K_(){CN.call(this);}
function ACJ(a,b,c){var d=new K_();Rj(d,a,b,c);return d;}
function Rj(a,b,c,d){Ev(a,b,c,d);}
function R3(a,b,c,d){var e;if(!a.w.x(d))return a.f.b(b,c,d);e=a.f.b(b,c,d);if(e<0)e=a.w.b(b,c,d);return e;}
function HA(){C.call(this);}
function Bk(){var a=this;C.call(a);a.t=null;a.dL=0;}
var AGd=null;function CQ(){CQ=Be(Bk);WZ();}
function GE(a){var b=new Bk();Dt(b,a);return b;}
function Fb(a,b,c){var d=new Bk();Nb(d,a,b,c);return d;}
function ABT(a,b,c,d){var e=new Bk();Ia(e,a,b,c,d);return e;}
function AGe(a,b,c,d){var e=new Bk();F2(e,a,b,c,d);return e;}
function ADe(a,b,c){var d=new Bk();Gr(d,a,b,c);return d;}
function Dt(a,b){var c,d,e;CQ();c=b.data;M(a);d=c.length;a.t=$rt_createCharArray(d);e=0;while(e<d){a.t.data[e]=c[e];e=e+1|0;}}
function Nb(a,b,c,d){var e,f;CQ();M(a);a.t=$rt_createCharArray(d);e=0;while(e<d){f=b.data;a.t.data[e]=f[e+c|0];e=e+1|0;}}
function Ia(a,b,c,d,e){CQ();F2(a,b,c,d,OE(e.e()));}
function F2(a,b,c,d,e){CQ();M(a);I9(a,b,c,d,e);}
function Gr(a,b,c,d){var e,f,g,h,i,j,k;CQ();M(a);a.t=$rt_createCharArray(d*2|0);e=0;f=0;while(f<d){g=b.data;h=c+1|0;i=g[c];if(i<65536){g=a.t.data;j=e+1|0;g[e]=i&65535;}else{g=a.t.data;k=e+1|0;g[e]=CR(i);g=a.t.data;j=k+1|0;g[k]=CG(i);}f=f+1|0;c=h;e=j;}if(e<a.t.data.length)a.t=EM(a.t,e);}
function I9(a,b,c,d,e){var f;f=G1(e,Mk(b,c,d));if(IT(f)&&!BG(f)&&KF(f)==Ke(f))a.t=E$(f);else{a.t=$rt_createCharArray(X(f));f.kC(a.t);}}
function Qp(a,b){if(b>=0&&b<a.t.data.length)return a.t.data[b];G(Fh());}
function Wl(a){return a.t.data.length;}
function Zf(a){return a.t.data.length?0:1;}
function RI(a,b,c){var d,e,f;if((c+b.g()|0)>a.g())return 0;d=0;while(d<b.g()){e=b.d(d);f=c+1|0;if(e!=a.d(c))return 0;d=d+1|0;c=f;}return 1;}
function Zo(a,b){if(a===b)return 1;return a.it(b,0);}
function P1(a,b,c){var d,e,f,g;d=Bq(0,c);if(b<65536){e=b&65535;while(true){if(d>=a.t.data.length)return (-1);if(a.t.data[d]==e)break;d=d+1|0;}return d;}f=CR(b);g=CG(b);while(true){if(d>=(a.t.data.length-1|0))return (-1);if(a.t.data[d]==f&&a.t.data[d+1|0]==g)break;d=d+1|0;}return d;}
function U0(a,b){return a.cG(b,0);}
function QB(a,b,c){var d,e,f,g,h,i;d=V(c,a.g()-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.t.data[d]==e)break;d=d+(-1)|0;}return d;}f=CR(b);g=CG(b);while(true){if(d<1)return (-1);if(a.t.data[d]==g){h=a.t.data;i=d-1|0;if(h[i]==f)break;}d=d+(-1)|0;}return i;}
function Uw(a,b,c){var d,e,f;d=Bq(0,c);e=a.g()-b.g()|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=b.g())break a;if(a.d(d+f|0)!=b.d(f))break;f=f+1|0;}d=d+1|0;}return d;}
function UP(a,b,c){var d,e;d=V(c,a.g()-b.g()|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=b.g())break a;if(a.d(d+e|0)!=b.d(e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function OG(a,b,c){if(b>c)G(Cp());return Fb(a.t,b,c-b|0);}
function Yy(a,b){return a.cj(b,a.g());}
function Va(a,b,c){return a.cj(b,c);}
function Nl(a,b){var c,d,e;c=a.g()-b.g()|0;d=0;while(d<=c){e=0;while(true){if(e>=b.g())return 1;if(a.d(d+e|0)!=b.d(e))break;e=e+1|0;}d=d+1|0;}return 0;}
function ZU(a){var b,c;b=0;c=a.g()-1|0;a:{while(b<=c){if(a.d(b)>32)break a;b=b+1|0;}}while(b<=c&&a.d(c)<=32){c=c+(-1)|0;}return a.cj(b,c+1|0);}
function R6(a){return a;}
function Zm(a){var b,c,d;b=$rt_createCharArray(a.t.data.length);c=0;while(true){d=b.data;if(c>=d.length)break;d[c]=a.t.data[c];c=c+1|0;}return b;}
function Gg(b){var c,d;CQ();c=new Bk;d=$rt_createCharArray(1);d.data[0]=b;Dt(c,d);return c;}
function EL(b){CQ();return J().m(b).e();}
function XN(a,b){var c,d;if(a===b)return 1;if(!(b instanceof Bk))return 0;c=b;if(c.g()!=a.g())return 0;d=0;while(d<c.g()){if(a.d(d)!=c.d(d))return 0;d=d+1|0;}return 1;}
function X_(a,b){var c;if(a===b)return 1;if(b===null)return 0;if(a.g()!=b.g())return 0;c=0;while(c<a.g()){if(BI(a.d(c))!=BI(b.d(c)))return 0;c=c+1|0;}return 1;}
function Qa(a){var b,c,d,e;a:{if(!a.dL){b=a.t.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.dL=(31*a.dL|0)+e|0;d=d+1|0;}}}return a.dL;}
function O8(a){var b,c,d,e,f,g,h,i;if(a.H())return a;b=$rt_createIntArray(a.t.data.length);c=0;d=0;while(d<a.t.data.length){a:{if(d!=(a.t.data.length-1|0)&&Bm(a.t.data[d])){e=a.t.data;f=d+1|0;g=e[f];if(Bu(g)){h=b.data;i=c+1|0;h[c]=Cm(BU(a.t.data[d],a.t.data[f]));d=f;break a;}}h=b.data;i=c+1|0;h[c]=BA(a.t.data[d]);}d=d+1|0;c=i;}return ADe(b,0,c);}
function AAp(a,b){return HF(TS(b),a.e());}
function WZ(){AGd=ADr();}
function FV(){C.call(this);}
var AGf=null;function ADX(){ADX=Be(FV);Un();}
function Gq(){ADX();return AGf;}
function Un(){AGf=AAL();AGf.hG(B(293),X3());}
function Nd(){U.call(this);}
function ADu(){var a=new Nd();Q_(a);return a;}
function Q_(a){BB(a);}
function Ii(){Cb.call(this);}
function ACG(a,b,c){var d=new Ii();VQ(d,a,b,c);return d;}
function VQ(a,b,c,d){Eo(a,b,c,d);}
function PX(a,b,c,d){var e;e=a.f.b(b,c,d);if(e>=0)return e;return a.w.b(b,c,d);}
function Ef(){Dj.call(this);}
function AGg(a,b,c){var d=new Ef();Jg(d,a,b,c);return d;}
function Jg(a,b,c,d){Lc(a,b,c,d);}
function QG(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=$rt_createCharArray(V(X(b),512));e=0;f=0;g=$rt_createByteArray(V(X(c),512));a:{while(true){if((e+32|0)>f&&BT(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=V(X(b)+j|0,i.length);b.iG(d,j,f-j|0);e=0;}if(!BT(c)){if(!BT(b)&&e>=f){Bj();k=AEV;}else{Bj();k=AET;}break a;}i=g.data;l=V(X(c),i.length);m=ABQ(b,c);k=a.jK(d,e,f,g,0,l,m);e=m.hX;if(k===null&&0==m.f9){Bj();k=AEV;}j=m.f9;c.hY(g,0,j);if(k!==null)break;}}b.fd(BG(b)-(f-e|0)|0);return k;}
function JV(){Ef.call(this);}
function ACB(a){var b=new JV();U3(b,a);return b;}
function U3(a,b){Jg(a,b,2.0,4.0);}
function Z9(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(h.dE(2))break a;Bj();i=AET;break a;}k=e.data;n=f+1|0;k[f]=(192|l>>6)<<24>>24;m=n+1|0;k[n]=(128|l&63)<<24>>24;}else if(!D5(l)){if((f+3|0)>g){j=j+(-1)|0;if(h.dE(3))break a;Bj();i=AET;break a;}k=e.data;o=f+1|0;k[f]=(224|l>>12)<<24>>24;n=o+1|0;k[o]=(128|l>>6&63)<<24>>24;m=n+1|0;k[n]=(128|l&63)<<24>>24;}else{if
(!Bm(l)){i=BM(1);break a;}if(j>=d){if(h.dq())break a;Bj();i=AEV;break a;}n=j+1|0;p=k[j];if(!Bu(p)){j=n+(-2)|0;i=BM(1);break a;}if((f+4|0)>g){j=n+(-2)|0;if(h.dE(4))break a;Bj();i=AET;break a;}k=e.data;q=BU(l,p);j=f+1|0;k[f]=(240|q>>18)<<24>>24;o=j+1|0;k[j]=(128|q>>12&63)<<24>>24;j=o+1|0;k[o]=(128|q>>6&63)<<24>>24;m=j+1|0;k[j]=(128|q&63)<<24>>24;j=n;}c=j;f=m;}j=c;}h.gd(j);h.eM(f);return i;}
function Jc(){L.call(this);}
function AC_(){var a=new Jc();Rc(a);return a;}
function Rc(a){Q(a);}
function YC(a){return ACj(a);}
function Ir(){R.call(this);}
function AB$(){var a=new Ir();AAf(a);return a;}
function AAf(a){Bo(a);}
function ZM(a,b,c,d){return b;}
function Q2(a,b){return 0;}
function Cs(){BR.call(this);}
function Ca(){var a=new Cs();P9(a);return a;}
function BX(a){var b=new Cs();AAx(b,a);return b;}
function P9(a){C3(a);}
function AAx(a,b){M8(a,b);}
function EI(){Ch.call(this);}
function AGh(a,b,c,d,e){var f=new EI();HN(f,a,b,c,d,e);return f;}
function HN(a,b,c,d,e,f){Dr(a,b,c,d,e,f);Ec();c.s(AEW);}
function Yk(a,b,c,d){var e,f,g;e=0;f=a.cr.c3();a:{while(true){g=a.w.b(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.cr.c1())return (-1);return a.f.b(b,c,d);}
function MV(){Du.call(this);}
function X3(){var a=new MV();Yn(a);return a;}
function Yn(a){Jf(a,B(293),F(Bk,0));}
function UA(a){return ACb(a);}
function Yr(a){return ACB(a);}
function GH(){R.call(this);this.cs=0;}
function ABc(a){var b=new GH();AAF(b,a);return b;}
function AAF(a,b){Bo(a);a.cs=b;}
function Yv(a,b,c,d){var e,f,g;e=!d.cU()?c.g()-b|0:d.bw()-b|0;if(!e){d.D(a.cs,0);return a.f.b(b,c,d);}if(e<2){f=c.d(b);g=97;}else{f=c.d(b);g=c.d(b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:d.D(a.cs,0);return a.f.b(b,c,d);case 13:if(g!=10){d.D(a.cs,0);return a.f.b(b,c,d);}d.D(a.cs,0);return a.f.b(b,c,d);default:}return (-1);}
function SY(a,b){var c;c=!b.bF(a.cs)?0:1;b.D(a.cs,(-1));return c;}
function Il(){C.call(this);}
function Ht(){var a=this;Cy.call(a);a.dv=null;a.c0=null;a.b4=0;a.d5=0;a.eQ=0;a.hM=0;}
function AGi(a,b){var c=new Ht();J5(c,a,b);return c;}
function El(a){var b=new Ht();UC(b,a);return b;}
function J5(a,b,c){EN(a);a.hM=(-1);if(c<0)G(Cv());a.dv=b;a.c0=$rt_createCharArray(Bq(64,c));}
function UC(a,b){J5(a,b,1024);}
function AAk(a){FJ(a);a.dv.bK();a.dv=null;}
function Z6(a){var b,c,d,e;FJ(a);if(a.eQ&&a.b4>=a.d5)return null;b=J();a:{while(true){if(a.b4>=a.d5&&!Ez(a,0))break a;c=a.c0.data;d=a.b4;a.b4=d+1|0;e=c[d];if(e==10)break;if(e==13){if(a.b4>=a.d5&&!Ez(a,0))break a;if(a.c0.data[a.b4]!=10)break a;a.b4=a.b4+1|0;break a;}b.bt(e);}}return b.e();}
function Ez(a,b){var c;if(a.eQ)return 0;a:{while(true){if(b>=a.c0.data.length)break a;c=a.dv.kr(a.c0,b,a.c0.data.length-b|0);if(c==(-1)){a.eQ=1;break a;}if(!c)break;b=b+c|0;}}a.d5=b;a.b4=0;a.hM=(-1);return 1;}
function FJ(a){if(a.dv!==null)return;G(PJ());}
function Iv(){L.call(this);}
function ACE(){var a=new Iv();Op(a);return a;}
function Op(a){Q(a);}
function Tt(a){return ABR(a);}
function Je(){I.call(this);this.jX=null;}
function ABx(a){var b=new Je();NC(b,a);return b;}
function NC(a,b){a.jX=b;P(a);}
function XG(a,b){return MH(b);}
function Jm(){L.call(this);}
function ABW(){var a=new Jm();O1(a);return a;}
function O1(a){Q(a);}
function Nx(a){return ACi(a);}
function Hv(){Br.call(this);}
function C1(){var a=new Hv();U5(a);return a;}
function U5(a){C4(a);}
function DA(){W.call(this);this.cM=0;}
function YB(a){var b=new DA();Qm(b,a);return b;}
function Qm(a,b){BD(a);a.cM=b;}
function R$(a,b){a.f=b;}
function N9(a,b,c,d){var e,f,g,h,i;e=d.q();f=b+1|0;g=B4(f,e);if(g>0){d.by=1;return (-1);}h=c.d(b);if(g<0){i=c.d(f);if(Bu(i))return (-1);}if(a.cM!=h)return (-1);return a.f.b(f,c,d);}
function RA(a,b,c,d){var e,f,g;if(!(c instanceof Bk))return C7(a,b,c,d);e=c;f=d.q();while(true){if(b>=f)return (-1);g=e.cG(a.cM,b);if(g<0)return (-1);b=g+1|0;if(b<f&&Bu(e.d(b))){b=g+2|0;continue;}if(a.f.b(b,c,d)>=0)break;}return g;}
function Ul(a,b,c,d,e){var f,g,h,i;if(!(d instanceof Bk))return Db(a,b,c,d,e);f=d;g=e.q();a:{while(true){if(c<b)return (-1);h=f.es(a.cM,c);if(h<0)break a;if(h<b)break a;i=h+1|0;if(i<g&&Bu(f.d(i))){c=h+(-1)|0;continue;}if(a.f.b(i,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function TV(a,b){if(b instanceof B1)return 0;if(b instanceof B2)return 0;if(b instanceof BK)return 0;if(b instanceof B0)return 0;if(b instanceof Dp)return 0;if(!(b instanceof DA))return 1;return b.cM!=a.cM?0:1;}
function RZ(a,b){return 1;}
function LV(){Cd.call(this);}
function ADz(a,b,c,d){var e=new LV();Ry(e,a,b,c,d);return e;}
function Ry(a,b,c,d,e){Gl(a,b,c,d,e);}
function UM(a,b,c,d){var e,f,g,h,i;e=a.cq.c1();f=a.cq.c3();g=0;while(true){if(g>=e){a:{while(true){h=a.f.b(b,c,d);if(h>=0)break;if((b+a.B.bb()|0)<=d.q()){h=a.B.I(b,c);b=b+h|0;g=g+1|0;}if(h<1)break a;if(g>f)break a;}return h;}return (-1);}if((b+a.B.bb()|0)>d.q()){d.by=1;return (-1);}i=a.B.I(b,c);if(i<1)break;b=b+i|0;g=g+1|0;}return (-1);}
function GS(){U.call(this);}
function SV(a){var b=new GS();Vg(b,a);return b;}
function RK(){var a=new GS();SD(a);return a;}
function Vg(a,b){Df(a,b);}
function SD(a){BB(a);}
function LZ(){R.call(this);}
function Wy(){var a=new LZ();T$(a);return a;}
function T$(a){Bo(a);}
function AAH(a,b,c,d){if(b&&!(d.cU()&&b==d.bw()))return (-1);return a.f.b(b,c,d);}
function YH(a,b){return 0;}
function JY(){I.call(this);this.lk=null;}
function ADt(a){var b=new JY();Wv(b,a);return b;}
function Wv(a,b){a.lk=b;P(a);}
function Sz(a,b){return Fu(b);}
function Kv(){var a=this;C.call(a);a.dV=null;a.h0=null;}
function ABn(a,b){var c=new Kv();WX(c,a,b);return c;}
function WX(a,b,c){a.h0=b;a.dV=c;M(a);}
function Xb(a){if(a.dV.readyState==4&&a.dV.status==200)Q1(a.h0,$rt_str(a.dV.responseText));}
function SP(a){a.jJ();}
function LY(){C.call(this);}
function V(b,c){if(b<c)c=b;return c;}
function Bq(b,c){if(b>c)c=b;return c;}
function GK(b){if(b<=0)b= -b;return b;}
function Kr(){L.call(this);}
function ABV(){var a=new Kr();Tx(a);return a;}
function Tx(a){Q(a);}
function PC(a){var b;b=ABb(a);b.y=1;return b;}
function FQ(){var a=this;BR.call(a);a.hm=null;a.dO=null;a.dw=0;}
function Ba(a,b,c){var d=new FQ();HH(d,a,b,c);return d;}
function HH(a,b,c,d){C3(a);a.dw=(-1);a.hm=b;a.dO=c;a.dw=d;}
function YK(a){var b,c;b=B(25);if(a.dw>=1){c=$rt_createCharArray(a.dw);Sj(c,32);b=GE(c);}return J().a(a.hm).a(a.dO!==null&&a.dO.g()?J().m(a.dw).a(B(294)).a(a.dO).a(B(294)).a(b).e():B(25)).e();}
function GI(){C.call(this);}
function M9(b,c){var d,$$je;a:{try{Zz(b,EC(c));}catch($$e){$$je=Bb($$e);if($$je instanceof Br){d=$$je;break a;}else{throw $$e;}}return 1;}Cz().o(B(295));d.ev();return 0;}
function Zz(b,c){var d,e,f,g,h,i,j,$$je;d=El(c);a:{try{e=0;while(true){f=d.el();if(f===null)break;g=f.cA(35);if(g>=0)f=f.cj(0,g);f=f.fz();if(!f.g())continue;h=B8(f,32);i=0;while(i<h.T()){j=h.C(i);b.j5(e,i,j);i=i+1|0;}e=e+1|0;}}catch($$e){$$je=Bb($$e);f=$$je;break a;}d.bK();return;}d.bK();G(f);}
function Kw(){L.call(this);}
function AA1(){var a=new Kw();S8(a);return a;}
function S8(a){Q(a);}
function TA(a){var b;b=ADW(a);b.K.d7(0,2048);b.y=1;return b;}
function Di(){C.call(this);}
var AFq=null;var AFr=null;var AFp=null;function BQ(){BQ=Be(Di);Rn();}
function Rn(){var b,c;b=F(De,15);c=b.data;c[0]=S(B(296),B(297),B(298));c[1]=S(B(299),B(297),B(300));c[2]=S(B(301),B(302),B(303));c[3]=S(B(304),B(302),B(305));c[4]=S(B(306),B(302),B(307));c[5]=S(B(308),B(302),B(309));c[6]=S(B(310),B(302),B(311));c[7]=S(B(312),B(302),B(313));c[8]=S(B(314),B(315),B(316));c[9]=S(B(317),B(315),B(318));c[10]=S(B(319),B(302),B(320));c[11]=S(B(321),B(302),B(322));c[12]=S(B(323),B(302),B(324));c[13]=S(B(325),B(302),B(326));c[14]=S(B(327),B(302),B(328));AFq=b;b=F(De,4);c=b.data;c[0]=
S(B(302),B(329),B(330));c[1]=S(B(315),B(331),B(332));c[2]=S(B(297),B(333),B(334));c[3]=S(B(335),B(336),B(337));AFr=b;b=F(De,11);c=b.data;c[0]=S(B(253),B(338),B(339));c[1]=S(B(340),B(341),B(342));c[2]=S(B(343),B(344),B(345));c[3]=S(B(346),B(347),B(348));c[4]=S(B(349),B(350),B(351));c[5]=S(B(352),B(353),B(354));c[6]=S(B(355),B(356),B(357));c[7]=S(B(358),B(359),B(360));c[8]=S(B(361),B(362),B(363));c[9]=S(B(364),B(365),B(366));c[10]=S(B(367),B(368),B(369));AFp=b;}
function H$(){C.call(this);}
function ADr(){var a=new H$();Q3(a);return a;}
function Q3(a){M(a);}
function EW(){C.call(this);}
var AGj=null;function ACr(){ACr=Be(EW);On();}
function ABk(){var a=new EW();KK(a);return a;}
function KK(a){ACr();M(a);}
function UB(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=HB(a,b);f=Na(a,b,c);g=M3(a,b,c);h=Ne(a,b,d);i=If(a,b,d);j=Ek(a,b,d,0);k=Ek(a,b,d,1);l=F($rt_arraycls($rt_doublecls()),3);m=l.data;m[0]=I2(a,b,c);m[1]=Mt(a,b,i);n=MG(a,j,k);m[2]=IM(a,b,n);return ADF(b,e,f,g,h,i,j,k,l);}
function MG(a,b,c){var d;d=BN();d.ip(b);d.ip(c);return d;}
function HB(a,b){var c,d,e,f;c=BN();d=b.d9();if(b.co()>4)c.bm(B(370));e=65;while(e<=90){if(d.cA(e)<0)c.bm(J().a(B(371)).bt(e).a(B(372)).e());e=(e+1|0)&65535;}f=0;while(f<d.g()){e=d.d(f);f=f+1|0;if(d.cG(e,f)>=0)c.bm(J().a(B(371)).bt(e).a(B(373)).e());}return c;}
function Na(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=AAL();e=0;while(e<b.co()){f=0;while(f<b.iy()){g=b.dM(e,f);if(g!==null){h=FC(0.0);i=g.da().ch().data;j=i.length;k=0;while(k<j){l=i[k];m=JQ(l,c);if(m!==null)h=FC(h.dU()+m.bN());k=k+1|0;}d.hG(g,h);}f=f+1|0;}e=e+1|0;}return d;}
function M3(a,b,c){var d,e,f,g,h,i,j;d=$rt_createDoubleArray(10);e=c.V();while(e.W()){f=e.U();g=f.ck();h=b.cd(g);if(h!==null){i=d.data;j=h.bd();i[j]=i[j]+f.bN();}}return d;}
function Ne(a,b,c){var d,e,f,g,h,i,j;d=0.0;e=c.V();while(e.W()){f=e.U();g=f.c5().ch();h=g.data;i=b.cd(h[0]);j=b.cd(h[1]);if(i.gv()!=j.gv())d=d+f.bN();}return d;}
function If(a,b,c){var d,e,f,g,h,i,j,k;d=BN();e=c.V();while(e.W()){f=e.U();g=f.c5().ch();h=g.data;i=b.cd(h[0]);j=b.cd(h[1]);if(i!==null&&j!==null&&h[0]!=h[1]&&Ik(i.bd(),j.bd())){k=Rw(i,j,f);d.bm(k);}}return d;}
function Ek(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=BN();f=c.V();while(f.W()){g=f.U();h=g.c5().ch();i=h.data;j=b.cd(i[0]);k=b.cd(i[1]);if(j!==null&&k!==null&&TO(j.bd(),k.bd())){l=M5(j.bd(),k.bd());m=Rw(j,k,g);if(b.k_(l)!=d)e.bm(m);}}return e;}
function I2(a,b,c){var d,e,f,g,h,i,j,k,l;d=$rt_createDoubleArray(10);e=b.d9().ch().data;f=e.length;g=0;while(g<f){h=e[g];i=b.cd(h);j=JQ(h,c);if(j!==null){k=d.data;l=i.bd();k[l]=k[l]+i.iY()*j.bN();}g=g+1|0;}return d;}
function Mt(a,b,c){var d,e,f,g,h,i,j;d=$rt_createDoubleArray(10);e=c.V();while(e.W()){f=d.data;g=e.U();h=g.cv().bd();i=V(2,GK(g.cv().ce()-g.dx().ce()|0));j=b.la(i);f[h]=f[h]+g.cw().bN()*j;}return d;}
function IM(a,b,c){var d,e,f,g,h,i,j,k,l;d=$rt_createDoubleArray(10);e=c.V();while(e.W()){f=d.data;g=e.U();h=g.cv().bd();i=g.dx().bd();j=M5(h,i);k=V(2,GK(g.cv().ce()-g.dx().ce()|0));l=b.l3(j,k);f[j]=f[j]+g.cw().bN()*l;}return d;}
function On(){AGj=BN();}
function LO(){var a=this;C.call(a);a.c=null;a.bn=0;a.fl=null;a.g3=0;a.bW=0;a.b$=0;a.P=0;a.eJ=null;}
function ABe(){var a=new LO();Ok(a);return a;}
function Ld(a,b){return ACX(a,b);}
function HG(a,b,c){var d,e,f,g,h,i;d=BN();e=Ld(a,b);f=0;g=0;if(!b.g()){h=F(Bk,1);h.data[0]=B(25);return h;}while(K8(e)){i=f+1|0;if(i>=c&&c>0)break;d.bm(b.fr(g,Mj(e)).e());g=Kl(e);f=i;}a:{d.bm(b.fr(g,b.g()).e());i=f+1|0;if(!c)while(true){i=i+(-1)|0;if(i<0)break;if(d.C(i).e().g())break a;d.iH(i);}}if(i<0)i=0;return d.jr(F(Bk,i));}
function HF(a,b){return HG(a,b,0);}
function DM(a){return a.c.e();}
function UK(b,c){if(b===null)G(SV(B(374)));if(c&&(c|255)!=255)G(Bz(B(25)));Jj();AEB=1;return KA(ABe(),b,c);}
function KA(a,b,c){a.c=ACR(b,c);a.bn=c;a.eJ=Gh(a,(-1),a.bn,null);if(a.c.H()){Kn(a);return a;}G(Ba(B(25),a.c.e(),a.c.bu()));}
function L6(a,b){var c,d,e;c=ADh(Bd(a,2),Bd(a,64));while(!a.c.H()){d=a.c;if(!d.ct())break;d=a.c;if(d.bi()&&a.c.bi()!=(-536870788)){d=a.c;if(d.bi()!=(-536870871))break;}c.bg(a.c.n());if(a.c.R()!=(-536870788))continue;a.c.n();}e=Ee(a,c);e.s(b);return e;}
function Gh(a,b,c,d){var e,f,g,h,i,j;e=BN();f=a.bn;g=0;if(c!=a.bn)a.bn=c;a:{switch(b){case -1073741784:h=new Gb;i=a.P+1|0;a.P=i;Hb(h,i);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new Fy;i=a.P+1|0;a.P=i;Lo(h,i);break a;case -33554392:h=new Ey;i=a.P+1|0;a.P=i;My(h,i);break a;default:a.bW=a.bW+1|0;if(d!==null)h=ACm(a.bW);else{h=ADx();g=1;}if(a.bW<=(-1))break a;if(a.bW>=10)break a;a.fl.data[a.bW]=h;break a;}h=AA$();}while(true){if(a.c.ct()&&a.c.bi()==(-536870788))j=L6(a,h);else if
(a.c.R()==(-536870788)){j=Cu(h);a.c.n();}else{j=Fk(a,h);if(a.c.R()==(-536870788))a.c.n();}if(j!==null)e.bm(j);if(a.c.H())break;if(a.c.R()==(-536870871))break;}if(a.c.kW()==(-536870788))e.bm(Cu(h));if(a.bn!=f&&!g){a.bn=f;a.c.kH(a.bn);}switch(b){case -1073741784:break;case -536870872:return ACs(e,h);case -268435416:return AA5(e,h);case -134217688:return ACh(e,h);case -67108824:return AC4(e,h);case -33554392:return ABq(e,h);default:switch(e.T()){case 0:break;case 1:return ABK(e.C(0),h);default:return ADY(e,h);}return Cu(h);}return ADH(e,
h);}
function JM(a){var b,c,d;b=S0();while(!a.c.H()){c=a.c;if(!c.ct())break;c=a.c;if(c.hN())break;c=a.c;if(c.iZ())break;c=a.c;if(!(!c.fk()&&!a.c.bi())){c=a.c;if(!(!c.fk()&&DZ(a.c.bi()))){c=a.c;if(c.bi()!=(-536870871)){c=a.c;if((c.bi()&(-2147418113))!=(-2147483608)){c=a.c;if(c.bi()!=(-536870788)){c=a.c;if(c.bi()!=(-536870876))break;}}}}}d=a.c.n();if(!D1(d))b.g5(d&65535);else b.kE(CK(d));}if(!Bd(a,2))return ADE(b);if(Bd(a,64))return AD2(b);return AEb(b);}
function JX(a){var b,c,d,e,f,g,h,i,j,k;b=$rt_createIntArray(4);c=0;d=(-1);e=(-1);if(!a.c.H()&&a.c.ct()){f=b.data;d=a.c.n();f[c]=d;e=d-4352|0;}if(e>=0&&e<19){g=$rt_createCharArray(3);f=g.data;f[c]=d&65535;h=a.c.R();i=h-4449|0;if(i>=0&&i<21){f[1]=h&65535;a.c.n();j=a.c.R();h=j-4519|0;if(h>=0&&h<28){f[2]=j&65535;a.c.n();return WL(g,3);}return WL(g,2);}if(!Bd(a,2))return JW(f[0]);if(Bd(a,64))return SQ(f[0]);return Si(f[0]);}k=1;while(k<4&&!a.c.H()&&a.c.ct()){f=b.data;j=k+1|0;f[k]=a.c.n();k=j;}if(k==1){f=b.data;if
(!Nm(f[0]))return F9(a,f[0]);}if(!Bd(a,2))return AD7(b,k);if(Bd(a,64))return ADm(b,k);return AD0(b,k);}
function Fk(a,b){var c,d,e,f;if(a.c.ct()&&!a.c.fk()&&DZ(a.c.bi())){if(!Bd(a,128)){if(!a.c.hN()&&!a.c.iZ())c=JM(a);else{d=F5(a,b);c=D8(a,b,d);}}else{c=JX(a);if(!a.c.H()){e=a.c;if(!(e.R()==(-536870871)&&!(b instanceof Co))){e=a.c;if(e.R()!=(-536870788)&&!a.c.ct())c=D8(a,b,c);}}}}else if(a.c.R()!=(-536870871)){d=F5(a,b);c=D8(a,b,d);}else{if(b instanceof Co)G(Ba(B(25),a.c.e(),a.c.bu()));c=Cu(b);}a:{if(!a.c.H()){e=a.c;if(!(e.R()==(-536870871)&&!(b instanceof Co))){e=a.c;if(e.R()!=(-536870788)){f=Fk(a,b);if(c instanceof Bx
&&!(c instanceof Cd)&&!(c instanceof Bv)&&!(c instanceof Cb)){e=c;if(!f.ba(e.eg()))c=AB9(e);}if((f.cP()&65535)!=43)c.s(f);else c.s(f.eg());break a;}}}if(c===null)return null;c.s(b);}if((c.cP()&65535)!=43)return c;return c.eg();}
function D8(a,b,c){var d,e,f,g,h,i,j;d=a.c.R();if(c!==null&&!(c instanceof Z)){switch(d){case -2147483606:a.c.n();return ACD(c,b,d);case -2147483605:a.c.n();return ABf(c,b,(-2147483606));case -2147483585:a.c.n();return ABA(c,b,(-536870849));case -2147483525:e=new EI;f=a.c.cz();g=a.b$+1|0;a.b$=g;HN(e,f,c,b,(-536870849),g);return e;case -1073741782:case -1073741781:a.c.n();h=ACZ(c,b,d);c.s(h);return h;case -1073741761:a.c.n();h=ACJ(c,b,(-536870849));c.s(b);return h;case -1073741701:h=new Fg;e=a.c;e=e.cz();i=a.b$
+1|0;a.b$=i;HI(h,e,c,b,(-536870849),i);c.s(h);return h;case -536870870:case -536870869:a.c.n();h=c.cP()!=(-2147483602)?AB6(c,b,d):Bd(a,32)?AC9(c,b,d):ABU(c,b,d,Fq(a.bn));c.s(h);return h;case -536870849:a.c.n();h=ADL(c,b,(-536870849));c.s(b);return h;case -536870789:h=new Ch;e=a.c;e=e.cz();g=a.b$+1|0;a.b$=g;Dr(h,e,c,b,(-536870849),g);c.s(h);return h;default:}return c;}j=null;if(c!==null)j=c;switch(d){case -2147483606:case -2147483605:a.c.n();h=ACt(j,b,d);j.s(h);return h;case -2147483585:a.c.n();return ABg(j,
b,(-2147483585));case -2147483525:return ADk(a.c.cz(),j,b,(-2147483525));case -1073741782:case -1073741781:a.c.n();h=AC8(j,b,d);j.s(h);return h;case -1073741761:a.c.n();return ACG(j,b,(-1073741761));case -1073741701:return ADz(a.c.cz(),j,b,(-1073741701));case -536870870:case -536870869:a.c.n();h=AB4(j,b,d);j.s(h);return h;case -536870849:a.c.n();return AA_(j,b,(-536870849));case -536870789:return ACz(a.c.cz(),j,b,(-536870789));default:}return c;}
function F5(a,b){var c,d,e,f,g,h,i,j,k,l;c=null;while(true){a:{d=a.c.R();if((d&(-2147418113))==(-2147483608)){a.c.n();e=(d&16711680)>>16;d=d&(-16711681);if(d==(-16777176))a.bn=e;else{if(d!=(-1073741784))e=a.bn;c=Gh(a,d,e,b);if(a.c.R()!=(-536870871))G(Ba(B(25),a.c.e(),a.c.bu()));a.c.n();}}else{b:{c:{switch(d){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:f=(d&2147483647)-48|0;if(a.bW<f)G(Ba(B(25),a.c.e(),
a.c.bu()));a.c.n();a.P=a.P+1|0;c=!Bd(a,2)?ABo(f,a.P):Bd(a,64)?ADv(f,a.P):ADU(f,a.P);a.fl.data[f].fh=1;a.g3=1;break a;case -2147483583:break;case -2147483582:a.c.n();c=Wd(0);break a;case -2147483577:a.c.n();c=ACA();break a;case -2147483558:a.c.n();c=new FY;g=a.P+1|0;a.P=g;Ku(c,g);break a;case -2147483550:a.c.n();c=Wd(1);break a;case -2147483526:a.c.n();c=AC3();break a;case -536870876:break c;case -536870866:a.c.n();if(Bd(a,32)){c=ADA();break a;}c=ACe(Fq(a.bn));break a;case -536870821:a.c.n();h=0;if(a.c.R()==
(-536870818)){h=1;a.c.n();}c=HQ(a,h,b);if(a.c.R()!=(-536870819))G(Ba(B(25),a.c.e(),a.c.bu()));a.c.d6(1);a.c.n();break a;case -536870818:a.c.n();a.P=a.P+1|0;if(!Bd(a,8)){c=Wy();break a;}c=AC5(Fq(a.bn));break a;case 0:i=a.c.fj();if(i!==null)c=Ee(a,i);else{if(a.c.H()){c=Cu(b);break a;}c=JW(d&65535);}a.c.n();break a;default:break b;}a.c.n();c=Wy();break a;}a.c.n();a.P=a.P+1|0;if(Bd(a,8)){if(Bd(a,1)){c=ADw(a.P);break a;}c=ABc(a.P);break a;}if(Bd(a,1)){c=AAZ(a.P);break a;}c=ACx(a.P);break a;}if(d>=0&&!a.c.dj()){c
=F9(a,d);a.c.n();}else if(d==(-536870788))c=Cu(b);else{if(d!=(-536870871)){j=new FQ;k=a.c;if(!k.dj()){g=d&65535;k=FX(g);}else k=a.c.fj().e();l=a.c;HH(j,k,l.e(),a.c.bu());G(j);}if(b instanceof Co)G(Ba(B(25),a.c.e(),a.c.bu()));c=Cu(b);}}}if(d!=(-16777176))break;}return c;}
function HQ(a,b,c){var d,e;d=Cr(a,b);e=Ee(a,d);e.s(c);return e;}
function Cr(a,b){var c,d,e,f,g,h,i,j,k,$$je;c=ACW(b,Bd(a,2),Bd(a,64));d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(a.c.H())break a;f=a.c.R()==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(a.c.R()){case -536870874:if(d>=0)c.bg(d);d=a.c.n();if(a.c.R()!=(-536870874)){d=38;break d;}if(a.c.bi()==(-536870821)){a.c.n();e=1;d=(-1);break d;}a.c.n();if(g){c=Cr(a,0);break d;}if(a.c.R()==(-536870819))break d;c.gt(Cr(a,0));break d;case -536870867:if(!g&&a.c.bi()!=(-536870819)){h=a.c;if(h.bi()!=(-536870821)&&d>=0){a.c.n();i=
a.c.R();if(a.c.dj())break c;if(i<0){h=a.c;if(h.bi()!=(-536870819)){h=a.c;if(h.bi()!=(-536870821)&&d>=0)break c;}}e:{try{if(DZ(i))break e;i=i&65535;break e;}catch($$e){$$je=Bb($$e);if($$je instanceof Br){break b;}else{throw $$e;}}}try{c.J(d,i);}catch($$e){$$je=Bb($$e);if($$je instanceof Br){break b;}else{throw $$e;}}a.c.n();d=(-1);break d;}}if(d>=0)c.bg(d);d=45;a.c.n();break d;case -536870821:if(d>=0){c.bg(d);d=(-1);}a.c.n();j=0;if(a.c.R()==(-536870818)){a.c.n();j=1;}if(!e)c.jQ(Cr(a,j));else c.gt(Cr(a,j));e=
0;a.c.n();break d;case -536870819:if(d>=0)c.bg(d);d=93;a.c.n();break d;case -536870818:if(d>=0)c.bg(d);d=94;a.c.n();break d;case 0:if(d>=0)c.bg(d);k=a.c.fj();if(k===null)d=0;else{c.lP(k);d=(-1);}a.c.n();break d;default:}if(d>=0)c.bg(d);d=a.c.n();}g=0;}G(Ba(B(25),DM(a),a.c.bu()));}G(Ba(B(25),DM(a),a.c.bu()));}if(!f){if(d>=0)c.bg(d);return c;}G(Ba(B(25),DM(a),a.c.bu()-1|0));}
function F9(a,b){var c;c=D1(b);if(Bd(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return Si(b&65535);}if(Bd(a,64)&&b>128){if(c)return ABE(b);if(Fe(b))return P7(b&65535);if(!Em(b))return SQ(b&65535);return YB(b&65535);}}if(c)return ABM(b);if(Fe(b))return P7(b&65535);if(!Em(b))return JW(b&65535);return YB(b&65535);}
function Ee(a,b){var c,d;if(!b.jD()){if(!b.gA()){if(b.cm())return XB(b);return Wg(b);}if(b.cm())return Pw(b);return ZE(b);}c=b.jp();d=AA7(c);if(!b.gA()){if(b.cm())return E1(XB(b.dQ()),d);return E1(Wg(b.dQ()),d);}if(b.cm())return E1(Pw(b.dQ()),d);return E1(ZE(b.dQ()),d);}
function TS(b){return UK(b,0);}
function Kn(a){if(a.g3)a.eJ.bD();}
function ZK(b){var c,d,e,f;c=J().a(B(375));d=0;while(true){e=b.gO(B(376),d);if(e<0)break;f=e+2|0;c.a(b.cj(d,f)).a(B(377));d=f;}return c.a(b.e_(d)).a(B(376)).e();}
function Hd(a){return a.bW;}
function K5(a){return a.b$+1|0;}
function Ih(a){return a.P+1|0;}
function C6(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function Bd(a,b){return (a.bn&b)!=b?0:1;}
function Ok(a){M(a);a.fl=F(Bt,10);a.bW=(-1);a.b$=(-1);a.P=(-1);}
function Jz(){CN.call(this);}
function ABA(a,b,c){var d=new Jz();Wc(d,a,b,c);return d;}
function Wc(a,b,c,d){Ev(a,b,c,d);Ec();b.s(AEW);}
function Zn(a,b,c,d){var e;e=a.w.b(b,c,d);if(e<=0)e=b;return a.f.b(e,c,d);}
function PL(a,b){a.f=b;}
function Lw(){U.call(this);}
function I7(){var a=new Lw();Wr(a);return a;}
function Wr(a){BB(a);}
function Hh(){L.call(this);}
function AA2(){var a=new Hh();NG(a);return a;}
function NG(a){Q(a);}
function Yx(a){var b;b=ACY(a);b.y=1;return b;}
function MA(){var a=this;DI.call(a);a.dc=0;a.bp=null;a.et=0;a.i_=0.0;a.f$=0;}
function AAL(){var a=new MA();UE(a);return a;}
function AGk(a){var b=new MA();GB(b,a);return b;}
function AGl(a,b){var c=new MA();Md(c,a,b);return c;}
function Xc(a,b){return F(ED,b);}
function UE(a){GB(a,16);}
function GB(a,b){Md(a,b,0.75);}
function L0(b){var c,d;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;d=c|c>>1;d=d|d>>2;d=d|d>>4;d=d|d>>8;d=d|d>>16;return d+1|0;}
function Md(a,b,c){var d;J6(a);if(b>=0&&c>0.0){d=L0(b);a.dc=0;a.bp=a.hk(d);a.i_=c;Fc(a);return;}G(Cv());}
function Fc(a){a.f$=a.bp.data.length*a.i_|0;}
function Xn(a,b){var c;c=Hs(a,b);if(c===null)return null;return c.ef;}
function Hs(a,b){var c,d,e;if(b===null)c=Gm(a);else{d=I3(b);e=d&(a.bp.data.length-1|0);c=FF(a,b,e,d);}return c;}
function FF(a,b,c,d){var e,f;e=a.bp.data[c];while(e!==null){if(e.eW==d){f=e.fq;if(Qk(b,f))break;}e=e.dm;}return e;}
function Gm(a){var b;b=a.bp.data[0];while(b!==null&&b.fq!==null){b=b.dm;}return b;}
function Pj(a,b,c){return a.lz(b,c);}
function WN(a,b,c){var d,e,f,g,h;if(b===null){d=Gm(a);if(d===null){a.et=a.et+1|0;d=a.hE(null,0,0);e=a.dc+1|0;a.dc=e;if(e>a.f$)a.hD();}}else{f=I3(b);g=f&(a.bp.data.length-1|0);d=FF(a,b,g,f);if(d===null){a.et=a.et+1|0;d=a.hE(b,g,f);e=a.dc+1|0;a.dc=e;if(e>a.f$)a.hD();}}h=d.ef;d.ef=c;return h;}
function Sg(a,b,c,d){var e;e=ACI(b,d);e.dm=a.bp.data[c];a.bp.data[c]=e;return e;}
function WA(a,b){var c,d,e,f,g,h,i;c=L0(!b?1:b<<1);d=a.hk(c);e=0;while(e<a.bp.data.length){f=a.bp.data[e];a.bp.data[e]=null;while(f!==null){g=d.data;h=f.eW&(c-1|0);i=f.dm;f.dm=g[h];g[h]=f;f=i;}e=e+1|0;}a.bp=d;Fc(a);}
function S2(a){a.ks(a.bp.data.length);}
function I3(b){return b.hQ();}
function Qk(b,c){return b!==c&&!b.bz(c)?0:1;}
function G6(){R.call(this);this.c$=0;}
function ADw(a){var b=new G6();XC(b,a);return b;}
function XC(a,b){Bo(a);a.c$=b;}
function Qq(a,b,c,d){var e;e=!d.cU()?c.g()-b|0:d.q()-b|0;if(e<=0){d.D(a.c$,0);return a.f.b(b,c,d);}if(c.d(b)!=10)return (-1);d.D(a.c$,1);return a.f.b(b+1|0,c,d);}
function V0(a,b){var c;c=!b.bF(a.c$)?0:1;b.D(a.c$,(-1));return c;}
function H2(){C.call(this);}
function B8(b,c){var d,e,f;d=BN();e=S0();f=0;while(f<b.g()){if(b.d(f)!=c)e.g5(b.d(f));if(!(b.d(f)!=c&&f!=(b.g()-1|0))&&e.g()>0){d.bm(e.e());e.dS(0);}f=f+1|0;}return d;}
function Mq(){L.call(this);}
function ACH(){var a=new Mq();AAw(a);return a;}
function AAw(a){Q(a);}
function AAg(a){var b;b=ADI(a);b.y=1;return b;}
function EK(){var a=this;C.call(a);a.fO=0;a.gE=0;a.ih=null;}
function VT(a,b,c){var d=new EK();Vs(d,a,b,c);return d;}
function Vs(a,b,c,d){M(a);a.fO=b;a.gE=c;a.ih=d;}
function DU(){var a=this;C.call(a);a.cR=0;a.d1=0;}
var AEV=null;var AET=null;function Bj(){Bj=Be(DU);US();}
function Iq(a,b){var c=new DU();JA(c,a,b);return c;}
function JA(a,b,c){Bj();M(a);a.cR=b;a.d1=c;}
function O3(a){return a.cR?0:1;}
function Xi(a){return a.cR!=1?0:1;}
function Z4(a){return !a.hZ()&&!a.f5()?0:1;}
function Xl(a){return a.cR!=2?0:1;}
function XE(a){return a.cR!=3?0:1;}
function Vx(a){if(a.fW())return a.d1;G(ADd());}
function BM(b){Bj();return Iq(2,b);}
function Ub(a){switch(a.cR){case 0:G(ACU());case 1:G(ADQ());case 2:G(AB8(a.d1));case 3:G(ACV(a.d1));default:}}
function US(){AEV=Iq(0,0);AET=Iq(1,0);}
function FY(){R.call(this);this.cV=0;}
function ACx(a){var b=new FY();Ku(b,a);return b;}
function Ku(a,b){Bo(a);a.cV=b;}
function Sk(a,b,c,d){var e,f,g,h;e=!d.cU()?c.g():d.q();if(b>=e){d.D(a.cV,0);return a.f.b(b,c,d);}f=e-b|0;if(f==2&&c.d(b)==13){g=b+1|0;if(c.d(g)==10){d.D(a.cV,0);return a.f.b(b,c,d);}}a:{if(f==1){h=c.d(b);if(h==10)break a;if(h==13)break a;if(h==133)break a;if((h|1)==8233)break a;}return (-1);}d.D(a.cV,0);return a.f.b(b,c,d);}
function SU(a,b){var c;c=!b.bF(a.cV)?0:1;b.D(a.cV,(-1));return c;}
function JJ(){B_.call(this);}
function AC0(){var a=new JJ();XJ(a);return a;}
function XJ(a){Fm(a);}
function UR(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function YG(a,b,c){var d;a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}d=1;break a;}d=0;}return d;}
function JI(){B_.call(this);}
function AB3(){var a=new JI();QZ(a);return a;}
function QZ(a){Fm(a);}
function Sl(a,b){return b!=10?0:1;}
function Ta(a,b,c){return b!=10?0:1;}
function LH(){CP.call(this);}
function Nc(){L.call(this);}
function ACc(){var a=new Nc();XV(a);return a;}
function XV(a){Q(a);}
function TR(a){var b;b=AD5(a);b.y=1;return b;}
function CX(){var a=this;C.call(a);a.r=null;a.cS=0;a.bI=0;a.id=0;a.fN=0;a.bE=0;a.i=0;a.gL=0;a.cO=null;a.cg=null;a.k=0;a.dz=0;a.dJ=0;a.dy=0;a.hn=null;}
var AGm=null;var AGn=null;var AGo=0;function ACR(a,b){var c=new CX();W1(c,a,b);return c;}
function W1(a,b,c){M(a);a.bI=1;a.hn=b;if((c&16)>0)b=ZK(b);else if((c&128)>0)b=Tm(b);a.r=$rt_createCharArray(b.g()+2|0);Gt(b.ch(),0,a.r,0,b.g());a.r.data[a.r.data.length-1|0]=0;a.r.data[a.r.data.length-2|0]=0;a.gL=a.r.data.length;a.cS=c;Cc(a);Cc(a);}
function AAb(a){return a.bE;}
function Sn(a,b){if(b>0&&b<3)a.bI=b;if(b==1)Ln(a);}
function RT(a,b){a.cS=b;a.i=a.bE;a.cg=a.cO;a.k=a.dJ+1|0;a.dy=a.dJ;Cc(a);}
function T6(a){return a.cO;}
function R5(a){return a.cO===null?0:1;}
function RJ(a){return a.cg===null?0:1;}
function Ty(a){Cc(a);return a.fN;}
function S4(a){var b;b=a.cO;Cc(a);return b;}
function Qb(a){return a.i;}
function Vw(a){return a.fN;}
function Tm(b){return b;}
function Ln(a){a.i=a.bE;a.cg=a.cO;a.k=a.dy;a.dy=a.dJ;Cc(a);}
function Cc(a){var b,c,d,e,f,g,h,$$je;a.fN=a.bE;a.bE=a.i;a.cO=a.cg;a.dJ=a.dy;a.dy=a.k;while(true){b=0;a.i=a.k>=a.r.data.length?0:DL(a);a.cg=null;if(a.bI==4){if(a.i!=92)return;a.i=a.k>=a.r.data.length?0:a.r.data[Y(a)];switch(a.i){case 69:break;default:a.i=92;a.k=a.dz;return;}a.bI=a.id;a.i=a.k>(a.r.data.length-2|0)?0:DL(a);}a:{if(a.i!=92){if(a.bI==1)switch(a.i){case 36:a.i=(-536870876);break a;case 40:if(a.r.data[a.k]!=63){a.i=(-2147483608);break a;}Y(a);c=a.r.data[a.k];d=0;while(true){b:{if(d){d=0;switch(c){case 33:break;case 61:a.i
=(-134217688);Y(a);break b;default:G(Ba(B(25),a.e(),a.k));}a.i=(-67108824);Y(a);}else{switch(c){case 33:break;case 60:Y(a);c=a.r.data[a.k];d=1;break b;case 61:a.i=(-536870872);Y(a);break b;case 62:a.i=(-33554392);Y(a);break b;default:a.i=MN(a);if(a.i<256){a.cS=a.i;a.i=a.i<<16;a.i=(-1073741784)|a.i;break b;}a.i=a.i&255;a.cS=a.i;a.i=a.i<<16;a.i=(-16777176)|a.i;break b;}a.i=(-268435416);Y(a);}}if(!d)break;}break a;case 41:a.i=(-536870871);break a;case 42:case 43:case 63:e=a.k>=a.r.data.length?42:a.r.data[a.k];switch
(e){case 43:a.i=a.i|(-2147483648);Y(a);break a;case 63:a.i=a.i|(-1073741824);Y(a);break a;default:}a.i=a.i|(-536870912);break a;case 46:a.i=(-536870866);break a;case 91:a.i=(-536870821);a.d6(2);break a;case 93:if(a.bI!=2)break a;a.i=(-536870819);break a;case 94:a.i=(-536870818);break a;case 123:a.cg=Lp(a,a.i);break a;case 124:a.i=(-536870788);break a;default:}else if(a.bI==2)switch(a.i){case 38:a.i=(-536870874);break a;case 45:a.i=(-536870867);break a;case 91:a.i=(-536870821);break a;case 93:a.i=(-536870819);break a;case 94:a.i
=(-536870818);break a;default:}}else{f=a.k>=(a.r.data.length-2|0)?(-1):DL(a);c:{a.i=f;switch(a.i){case -1:G(Ba(B(25),a.e(),a.k));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.i
=HZ(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.bI!=1)break a;a.i=(-2147483648)|a.i;break a;case 65:a.i=(-2147483583);break a;case 66:a.i=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:G(Ba(B(25),a.e(),a.k));case 68:case 83:case 87:case 100:case 115:case 119:a.cg=Gj(Fb(a.r,
a.dz,1),0);a.i=0;break a;case 71:a.i=(-2147483577);break a;case 80:case 112:break c;case 81:a.id=a.bI;a.bI=4;b=1;break a;case 90:a.i=(-2147483558);break a;case 97:a.i=7;break a;case 98:a.i=(-2147483550);break a;case 99:if(a.k>=(a.r.data.length-2|0))G(Ba(B(25),a.e(),a.k));a.i=a.r.data[Y(a)]&31;break a;case 101:a.i=27;break a;case 102:a.i=12;break a;case 110:a.i=10;break a;case 114:a.i=13;break a;case 116:a.i=9;break a;case 117:a.i=Fx(a,4);break a;case 120:a.i=Fx(a,2);break a;case 122:a.i=(-2147483526);break a;default:}break a;}g
=Hx(a);h=0;if(a.i==80)h=1;try{a.cg=Gj(g,h);}catch($$e){$$je=Bb($$e);if($$je instanceof EE){G(Ba(B(25),a.e(),a.k));}else{throw $$e;}}a.i=0;}}if(b)continue;else break;}}
function Hx(a){var b,c,d;b=GX(10);if(a.k<(a.r.data.length-2|0)){if(a.r.data[a.k]!=123)return J().a(B(378)).a(Fb(a.r,Y(a),1)).e();Y(a);c=0;a:{while(a.k<(a.r.data.length-2|0)){c=a.r.data[Y(a)];if(c==125)break a;b.bt(c);}}if(c!=125)G(Ba(B(25),a.e(),a.k));}if(!b.g())G(Ba(B(25),a.e(),a.k));d=b.e();if(d.g()==1)return J().a(B(378)).a(d).e();b:{c:{if(d.g()>3){if(d.ek(B(378)))break c;if(d.ek(B(379)))break c;}break b;}d=d.e_(2);}return d;}
function Lp(a,b){var c,d,e,f,$$je;c=GX(4);d=(-1);e=2147483647;a:{while(true){if(a.k>=a.r.data.length)break a;b=a.r.data[Y(a)];if(b==125)break a;if(b==44&&d<0)try{d=CY(c.e(),10);c.j7(0,c.g());continue;}catch($$e){$$je=Bb($$e);if($$je instanceof Cs){break;}else{throw $$e;}}c.bt(b&65535);}G(Ba(B(25),a.e(),a.k));}if(b!=125)G(Ba(B(25),a.e(),a.k));if(c.g()>0)b:{try{e=CY(c.e(),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=Bb($$e);if($$je instanceof Cs){}else{throw $$e;}}G(Ba(B(25),a.e(),a.k));}else if(d<0)G(Ba(B(25),
a.e(),a.k));if((d|e|(e-d|0))<0)G(Ba(B(25),a.e(),a.k));f=a.k>=a.r.data.length?42:a.r.data[a.k];c:{switch(f){case 43:a.i=(-2147483525);Y(a);break c;case 63:a.i=(-1073741701);Y(a);break c;default:}a.i=(-536870789);}return AB0(d,e);}
function Ws(a){return a.hn;}
function Yb(a){return !a.bE&&!a.i&&a.k==a.gL&&!a.dj()?1:0;}
function DZ(b){return b<0?0:1;}
function YW(a){return !a.H()&&!a.dj()&&DZ(a.bE)?1:0;}
function Ro(a){return a.bE<=56319&&a.bE>=55296?1:0;}
function Ts(a){return a.bE<=57343&&a.bE>=56320?1:0;}
function Em(b){return b<=56319&&b>=55296?1:0;}
function Fe(b){return b<=57343&&b>=56320?1:0;}
function Fx(a,b){var c,d,e,f,$$je;c=GX(b);d=a.r.data.length-2|0;e=0;while(true){f=B4(e,b);if(f>=0)break;if(a.k>=d)break;c.bt(a.r.data[Y(a)]);e=e+1|0;}if(!f)a:{try{f=CY(c.e(),16);}catch($$e){$$je=Bb($$e);if($$je instanceof Cs){break a;}else{throw $$e;}}return f;}G(Ba(B(25),a.e(),a.k));}
function HZ(a){var b,c,d,e,f;b=3;c=1;d=a.r.data.length-2|0;e=E_(a.r.data[a.k],8);switch(e){case -1:break;default:if(e>3)b=2;Y(a);a:{while(true){if(c>=b)break a;if(a.k>=d)break a;f=E_(a.r.data[a.k],8);if(f<0)break;e=(e*8|0)+f|0;Y(a);c=c+1|0;}}return e;}G(Ba(B(25),a.e(),a.k));}
function MN(a){var b,c,d;b=1;c=a.cS;a:while(true){if(a.k>=a.r.data.length)G(Ba(B(25),a.e(),a.k));b:{c:{d=a.r.data[a.k];switch(d){case 41:Y(a);return c|256;case 45:if(!b)G(Ba(B(25),a.e(),a.k));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}Y(a);}Y(a);return c;}
function Y(a){a.dz=a.k;if(a.cS&4)HJ(a);else a.k=a.k+1|0;return a.dz;}
function HJ(a){var b;b=a.r.data.length-2|0;a.k=a.k+1|0;a:while(true){if(a.k<b&&I_(a.r.data[a.k])){a.k=a.k+1|0;continue;}if(a.k>=b)break;if(a.r.data[a.k]!=35)break;a.k=a.k+1|0;while(true){if(a.k>=b)continue a;if(K9(a,a.r.data[a.k]))continue a;a.k=a.k+1|0;}}return a.k;}
function K9(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function KW(b){return AGm.oI(b);}
function TP(b){var c,d,e,f,g,h,i;c=b-44032|0;if(c>=0&&c<11172){d=4352+(c/588|0)|0;e=4449+((c%588|0)/28|0)|0;f=c%28|0;if(!f){g=$rt_createIntArray(2);h=g.data;h[0]=d;h[1]=e;}else{i=4519+f|0;g=$rt_createIntArray(3);h=g.data;h[0]=d;h[1]=e;h[2]=i;}return g;}return null;}
function Nm(b){var c;c=AGn.fG(b);return c==AGo?0:1;}
function Rg(b){return (b!=832?0:1)|(b!=833?0:1)|(b!=835?0:1)|(b!=836?0:1);}
function DL(a){var b,c,d;b=a.r.data[Y(a)];if(Bm(b)){c=a.dz+1|0;if(c<a.r.data.length){d=a.r.data[c];if(Bu(d)){Y(a);return BU(b,d);}}}return b;}
function Rl(a){return a.dJ;}
function Kh(){L.call(this);}
function ABJ(){var a=new Kh();Y1(a);return a;}
function Y1(a){Q(a);}
function Yc(a){return By().J(65279,65279).J(65520,65533);}
function Jy(){var a=this;C.call(a);a.ho=null;a.iV=0;}
function ACo(a){var b=new Jy();T7(b,a);return b;}
function T7(a,b){M(a);a.ho=b;}
function MB(){Do.call(this);}
function AAX(){var a=new MB();XU(a);return a;}
function XU(a){L7(a);}
function QS(a){var b;b=LX(a).b9(1);b.y=1;return b;}
function Mn(){C.call(this);this.fH=0;}
function AD4(a){var b=new Mn();UF(b,a);return b;}
function UF(a,b){M(a);a.fH=b;}
function RM(a,b){var c,d;c=AA8();d=ADG(c);Ju(a,b,d);return c.kj(B(293));}
function Ju(a,b,c){Jo(a,b.kx(),c);GV(a,b.le(),c);Hj(a,b.hV(),c);c.bL(B(380));c.bL(B(381));Mh(a,b.hV(),a.fH,c);c.bL(B(382));c.bL(B(383));IU(a,b.jF(),a.fH,c);c.bL(B(382));c.bL(B(382));Lx(a,b.jE(),c);}
function Jo(a,b,c){var d,e;a:{if(b!==null){d=b.V();while(true){if(!d.W())break a;e=d.U();c.o(J().a(B(384)).a(e).a(B(385)).e());}}}}
function GV(a,b,c){var d,e,f,g,h,i,j;c.o(B(386));c.o(B(387));d=0.0;e=0.0;f=0;while(f<5){g=b.data;h=9-f|0;if(!(g[f]<=0.0&&g[h]<=0.0)){c.o(B(388));i=J().a(B(389)).m(f).a(B(390)).a(Bl(g[f]*100.0,2)).a(B(391)).m(h).a(B(390));j=g[h]*100.0;i=i.a(Bl(j,2)).a(B(392)).e();c.o(i);c.o(B(393));}d=d+g[f];e=e+g[h];f=f+1|0;}c.o(B(394));i=J().a(B(395)).a(Bl(d*100.0,2)).a(B(396));j=e*100.0;i=i.a(Bl(j,2)).a(B(392)).e();c.o(i);c.o(B(393));c.o(B(397));}
function Hj(a,b,c){var d,e,f,g,h,i,j;d=SW(b);c.o(B(398));c.o(B(387));e=0.0;f=0;while(f<5){g=d.data;h=9-f|0;if(!(g[f]<=0.0&&g[h]<=0.0)){c.o(B(388));i=J().a(B(389)).m(f).a(B(390)).a(Bl(g[f]*100.0,3)).a(B(391)).m(h).a(B(390));j=g[h]*100.0;i=i.a(Bl(j,3)).a(B(392)).e();c.o(i);c.o(B(393));j=e+g[f];e=j+g[h];}f=f+1|0;}c.o(B(394));i=J().a(B(399));j=e*100.0;i=i.a(Bl(j,3)).a(B(392)).e();c.o(i);c.o(B(393));c.o(B(397));}
function Mh(a,b,c,d){var e,f,g,h;d.o(B(400));d.o(B(387));e=0;f=b.V();a:{while(true){if(!f.W())break a;g=f.U();d.o(B(388));h=J().a(B(389)).m(g.cv().bd()).a(B(390));h=h.a(g.cw().c5()).a(B(390));h=h.a(Bl(g.cw().bN()*100.0,3)).a(B(392)).e();d.o(h);d.o(B(393));e=e+1|0;if(e>=c)break;}}d.o(B(397));}
function IU(a,b,c,d){var e,f,g,h;d.o(B(401));d.o(B(387));e=0;f=b.V();a:{while(true){if(!f.W())break a;g=f.U();d.o(B(388));h=J().a(B(389)).m(g.cv().bd()).a(B(402));h=h.m(g.dx().bd()).a(B(390));h=h.a(g.cw().c5()).a(B(390));h=h.a(Bl(g.cw().bN()*100.0,3)).a(B(392)).e();d.o(h);d.o(B(393));e=e+1|0;if(e>=c)break;}}d.o(B(397));}
function Lx(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;c.o(B(403));c.o(B(387));c.o(B(388));c.o(B(404));c.o(B(393));d=$rt_createDoubleArray(3);e=0;while(e<10){f=b.data;g=f[0].data[e]+f[1].data[e]+f[2].data[e];if(f[0].data[e]>0.0){h=d.data;c.o(B(388));i=J().a(B(389)).m(e).a(B(390)).a(Bl(f[0].data[e],5)).a(B(405));j=f[1].data[e];k=i.a(Bl(j,5)).a(B(405));j=f[2].data[e];i=k.a(Bl(j,5)).a(B(405));i=i.a(Bl(g,5)).a(B(406)).e();c.o(i);c.o(B(393));h[0]=h[0]+f[0].data[e];h[1]=h[1]+f[1].data[e];h[2]=h[2]+f[2].data[e];}e=e+1|0;}l=
d.data;m=l[1]+l[2];n=l[0]+m;c.o(B(394));i=J().a(B(407)).a(Bl(l[0],5)).a(B(408));j=l[1];i=i.a(Bl(j,5)).a(B(408));j=l[2];i=i.a(Bl(j,5)).a(B(408));i=i.a(Bl(n,5)).a(B(406)).e();c.o(i);c.o(B(393));c.o(B(397));}
function Bl(b,c){return $rt_str(b.toFixed(c));}
function B2(){var a=this;Z.call(a);a.cn=null;a.jU=0;}
function Wg(a){var b=new B2();R4(b,a);return b;}
function R4(a,b){BH(a);a.cn=b.c8();a.jU=b.G;}
function No(a,b,c){return !a.cn.j(c.d(b))?(-1):1;}
function Q6(a,b){if(b instanceof B1)return DW(a.cn,b.ck());if(b instanceof B2)return CW(a.cn,b.cn);if(b instanceof BK)return CW(a.cn,b.fe());if(!(b instanceof B0))return 1;return 0;}
function QH(a){return a.cn;}
function D9(){I.call(this);this.eX=0;}
function ADJ(a){var b=new D9();H0(b,a);return b;}
function H0(a,b){P(a);a.eX=b;}
function QN(a,b){return a.G^(a.eX!=C_(b&65535)?0:1);}
function MJ(){D9.call(this);}
function ABz(a){var b=new MJ();Pe(b,a);return b;}
function Pe(a,b){H0(a,b);}
function Vl(a,b){return a.G^(!(a.eX>>C_(b&65535)&1)?0:1);}
function Kq(){Cl.call(this);this.iq=0;}
function ACV(a){var b=new Kq();YA(b,a);return b;}
function YA(a,b){Fs(a);a.iq=b;}
function T_(a){return J().a(B(409)).m(a.iq).e();}
function Jd(){var a=this;I.call(a);a.eP=0;a.gV=0;a.dY=0;a.gb=0;a.bO=0;a.cx=0;a.v=null;a.F=null;}
function By(){var a=new Jd();AAm(a);return a;}
function ADh(a,b){var c=new Jd();Jl(c,a,b);return c;}
function ACW(a,b,c){var d=new Jd();OK(d,a,b,c);return d;}
function AAm(a){P(a);a.v=AAO();}
function Jl(a,b,c){P(a);a.v=AAO();a.eP=b;a.gV=c;}
function OK(a,b,c,d){Jl(a,c,d);a.b9(b);}
function Nj(a,b){a:{if(a.eP){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.bO){a.v.eV(C6(b&65535));break a;}a.v.gi(C6(b&65535));break a;}if(a.gV&&b>128){a.dY=1;b=Cn(Cm(b));}}}if(!(!Em(b)&&!Fe(b))){if(a.gb)a.K.eV(b-55296|0);else a.K.gi(b-55296|0);}if(a.bO)a.v.eV(b);else a.v.gi(b);if(!a.y&&D1(b))a.y=1;return a;}
function AAE(a,b){var c,d;if(!a.y&&b.y)a.y=1;if(a.gb){if(!b.X)a.K.cX(b.bc());else a.K.bv(b.bc());}else if(!b.X)a.K.cE(b.bc());else{a.K.cQ(b.bc());a.K.bv(b.bc());a.X=a.X?0:1;a.gb=1;}if(!a.cx&&b.M()!==null){if(a.bO){if(!b.c4())a.v.cX(b.M());else a.v.bv(b.M());}else if(!b.c4())a.v.cE(b.M());else{a.v.cQ(b.M());a.v.bv(b.M());a.G=a.G?0:1;a.bO=1;}}else{c=a.G;if(a.F!==null){d=a.F;if(!c)a.F=ADc(a,c,d,b);else a.F=AD9(a,c,d,b);}else{if(c&&!a.bO&&a.v.H())a.F=ACP(a,b);else if(!c)a.F=AA0(a,c,b);else a.F=ACq(a,c,b);a.cx=1;}}return a;}
function WU(a,b,c){if(b>c)G(Cv());a:{if(!a.eP&&!(c>=55296&&b<=57343)){if(a.bO)a.v.jL(b,c+1|0);else a.v.d7(b,c+1|0);}else while(true){if(b>=(c+1|0))break a;a.bg(b);b=b+1|0;}}return a;}
function NV(a,b){var c,d;if(!a.y&&b.y)a.y=1;if(b.cm())a.dY=1;if(!(a.X^b.X)){if(!a.X)a.K.cE(b.bc());else a.K.bv(b.bc());}else if(a.X)a.K.cX(b.bc());else{a.K.cQ(b.bc());a.K.bv(b.bc());a.X=1;}if(!a.cx&&b.M()!==null){if(!(a.G^b.c4())){if(!a.G)a.v.cE(b.M());else a.v.bv(b.M());}else if(a.G)a.v.cX(b.M());else{a.v.cQ(b.M());a.v.bv(b.M());a.G=1;}}else{c=a.G;if(a.F!==null){d=a.F;if(!c)a.F=ACF(a,c,d,b);else a.F=AD8(a,c,d,b);}else{if(!a.bO&&a.v.H()){if(!c)a.F=ACL(a,b);else a.F=ADo(a,b);}else if(!c)a.F=ABS(a,b,c);else a.F
=ABj(a,b,c);a.cx=1;}}}
function Xj(a,b){var c,d;if(!a.y&&b.y)a.y=1;if(b.cm())a.dY=1;if(!(a.X^b.X)){if(!a.X)a.K.bv(b.bc());else a.K.cE(b.bc());}else if(!a.X)a.K.cX(b.bc());else{a.K.cQ(b.bc());a.K.bv(b.bc());a.X=0;}if(!a.cx&&b.M()!==null){if(!(a.G^b.c4())){if(!a.G)a.v.bv(b.M());else a.v.cE(b.M());}else if(!a.G)a.v.cX(b.M());else{a.v.cQ(b.M());a.v.bv(b.M());a.G=0;}}else{c=a.G;if(a.F!==null){d=a.F;if(!c)a.F=AD1(a,c,d,b);else a.F=ACv(a,c,d,b);}else{if(!a.bO&&a.v.H()){if(!c)a.F=ABu(a,b);else a.F=ABX(a,b);}else if(!c)a.F=ABO(a,b,c);else a.F
=ADZ(a,b,c);a.cx=1;}}}
function SN(a,b){if(a.F!==null)return a.G^a.F.j(b);return a.G^a.v.bQ(b);}
function AAG(a){if(!a.cx)return a.v;return null;}
function Vc(a){return a.K;}
function Ww(a){var b,c;if(a.F!==null)return a;b=a.M();c=ACO(a,b);return c.b9(a.c4());}
function Pv(a){var b,c;b=J();c=a.v.dr(0);while(c>=0){b.fE(CK(c));b.bt(124);c=a.v.dr(c+1|0);}if(b.g()>0)b.iA(b.g()-1|0);return b.e();}
function VO(a){return a.dY;}
function KP(){U.call(this);}
function Yp(){var a=new KP();X2(a);return a;}
function X2(a){BB(a);}
function JF(){BW.call(this);}
function AC2(){var a=new JF();YN(a);return a;}
function YN(a){CS(a);}
function Xq(a,b){W2(b);}
function W2(b){$rt_putStderr(b);}
function J1(){var a=this;C.call(a);a.fV=0;a.ft=0;a.hb=0;}
function AC$(){var a=new J1();Ny(a);return a;}
function Ny(a){M(a);}
function Mg(){Ci.call(this);}
function ADm(a,b){var c=new Mg();Ya(c,a,b);return c;}
function Ya(a,b,c){EU(a,b,c);}
$rt_packages([-1,"java",0,"util",1,"regex",0,"nio",3,"charset",0,"io",0,"lang",-1,"io",7,"github",8,"colemakmods",9,"keyboard"]);
$rt_metadata([C,"Object",6,0,[],0,3,0,["n0",function(){return Cf(this);},"hQ",function(){return TB(this);},"bz",function(b){return N8(this,b);},"e",function(){return R7(this);},"l7",function(){return Es(this);},"dI",function(){return AAo(this);}],L,0,C,[],1,0,0,["k0",function(b){return Tv(this,b);}],M7,0,L,[],0,0,0,["u",function(){return TE(this);}],JZ,0,L,[],0,0,0,["u",function(){return Ol(this);}],CM,0,C,[],0,3,0,["ee",function(){return VH(this);},"dR",function(){return T1(this);},"j9",function(){return WM(this);
},"ev",function(){XQ(this);},"hu",function(b){ZS(this,b);}],Br,0,CM,[],0,3,0,0,U,0,Br,[],0,3,0,0,C5,"IndexOutOfBoundsException",6,U,[],0,3,0,0,Ct,0,C,[],1,0,0,0,I,0,Ct,[],1,0,E7,["M",function(){return Rm(this);},"bc",function(){return PR(this);},"jD",function(){return Ob(this);},"gA",function(){return Xz(this);},"c8",function(){return Vv(this);},"jp",function(){return Qj(this);},"dQ",function(){return Rx(this);},"cm",function(){return YM(this);},"b9",function(b){return WQ(this,b);},"c4",function(){return VM(this);
}],MR,"AbstractCharClass$LazyJavaWhitespace$1",2,I,[],0,0,0,["j",function(b){return PV(this,b);}],BY,"IOException",5,Br,[],0,3,0,0,Cl,0,BY,[],0,3,0,0,JC,"MalformedInputException",4,Cl,[],0,3,0,["dR",function(){return Vh(this);}],Ks,0,L,[],0,0,0,["u",function(){return UG(this);}],H1,0,C,[],0,3,0,["dq",function(){return UQ(this);},"dE",function(b){return UY(this,b);},"gd",function(b){We(this,b);},"eM",function(b){AAR(this,b);}],BS,0,C,[],3,3,0,0,BP,0,C,[BS],1,3,0,0,BE,0,C,[],3,3,0,0,C$,0,BP,[BE],0,3,B6,["e",function()
{return X7(this);}],Kc,"CloneNotSupportedException",6,Br,[],0,3,0,0,Cg,0,C,[],0,0,ACk,0,R,0,C,[],1,0,Jj,["bh",function(b,c,d){return C7(this,b,c,d);},"bf",function(b,c,d,e){return Db(this,b,c,d,e);},"gF",function(b){S6(this,b);},"cP",function(){return RQ(this);},"kk",function(){return UX(this);},"s",function(b){FN(this,b);},"ba",function(b){return WW(this,b);},"cl",function(){return YS(this);},"bD",function(){GN(this);}],W,0,R,[],0,0,0,["b",function(b,c,d){return W3(this,b,c,d);},"s",function(b){Q4(this,b);
},"ba",function(b){return AAP(this,b);},"x",function(b){return Sv(this,b);},"bD",function(){SB(this);}],CL,0,W,[],0,0,0,["b",function(b,c,d){return OF(this,b,c,d);},"bh",function(b,c,d){return NH(this,b,c,d);},"bf",function(b,c,d,e){return Ug(this,b,c,d,e);},"ba",function(b){return AAC(this,b);},"cl",function(){return Q9(this);},"bD",function(){Y0(this);}],BF,0,C,[],3,3,0,0,Dl,0,C,[BF],3,3,0,0,En,0,C,[Dl],3,3,0,0,BL,0,C,[BF],3,3,0,0,KE,0,C,[En,BL],3,3,0,0,Gk,0,BP,[BE],0,3,Vd,0,Gd,0,C,[BF],3,3,0,0,EB,0,C,[],
3,3,0,0,Jb,0,C,[],0,0,0,["i5",function(b,c){Yf(this,b,c);},"fG",function(b){return NW(this,b);}],Eg,0,L,[],0,0,0,["u",function(){return Jh(this);}],DO,0,L,[],0,0,0,["u",function(){return GA(this);}],Kk,0,DO,[],0,0,0,["u",function(){return Xk(this);}],Hm,0,CL,[],0,0,0,["bh",function(b,c,d){return VX(this,b,c,d);},"bf",function(b,c,d,e){return AAy(this,b,c,d,e);},"cl",function(){return SR(this);}],L8,"BufferOverflowException",4,U,[],0,3,0,0,CE,0,W,[],0,0,0,["b",function(b,c,d){return PM(this,b,c,d);},"s",function(b)
{SA(this,b);},"c6",function(b){return Tg(this,b);},"x",function(b){return Ti(this,b);}],Dw,0,L,[],0,0,0,["u",function(){return M_(this);}],KB,0,Dw,[],0,0,0,["u",function(){return O$(this);}],KV,"AbstractCharClass$1",2,I,[],0,0,0,["j",function(b){return Vb(this,b);}],KS,"AbstractCharClass$2",2,I,[],0,0,0,["j",function(b){return Oz(this,b);}],Kd,0,L,[],0,0,0,["u",function(){return PS(this);}],Z,0,R,[],1,0,0,["b",function(b,c,d){return Z2(this,b,c,d);},"bb",function(){return VL(this);},"x",function(b){return Y5(this,
b);}],Hz,0,Z,[],0,0,0,["I",function(b,c){return Uo(this,b,c);}],BO,0,R,[],1,0,0,["eg",function(){return AAi(this);},"ba",function(b){return Uh(this,b);},"x",function(b){return Xo(this,b);},"bD",function(){Oq(this);}],Bx,0,BO,[],0,0,0,["b",function(b,c,d){return N$(this,b,c,d);}],Cd,0,Bx,[],0,0,0,["b",function(b,c,d){return Qw(this,b,c,d);}]]);
$rt_metadata([Ji,0,Cd,[],0,0,0,["b",function(b,c,d){return Uk(this,b,c,d);}],Dg,0,C,[],3,3,0,0,B9,0,CM,[],0,3,0,0,CP,0,B9,[],0,3,0,0,Dy,0,C,[BL],3,3,0,0,Mp,"StringIndexOutOfBoundsException",6,C5,[],0,3,0,0,EE,"MissingResourceException",1,U,[],0,3,0,0,J3,0,C,[],0,3,0,0,JK,"AbstractCharClass$LazyJavaLetterOrDigit$1",2,I,[],0,0,0,["j",function(b){return Oe(this,b);}],ID,"CharClass$18",2,I,[],0,0,0,["j",function(b){return AAA(this,b);},"e",function(){return WR(this);}],D0,0,C,[],1,3,0,["mn",function(b){return La(this,
b);},"fZ",function(b){Xd(this,b);},"m8",function(b){return HS(this,b);},"fw",function(b){XH(this,b);},"nc",function(b,c,d){return FD(this,b,c,d);},"oT",function(b){return MD(this,b);},"oG",function(){return LE(this);},"lF",function(b){return I8(this,b);},"mx",function(b){return Ep(this,b);},"kO",function(b){return O_(this,b);},"kI",function(){UO(this);}],Bv,0,BO,[],0,0,0,["b",function(b,c,d){return OC(this,b,c,d);}],Nf,0,Bv,[],0,0,0,["b",function(b,c,d){return S_(this,b,c,d);}],LJ,0,CE,[],0,0,0,["b",function(b,
c,d){return NE(this,b,c,d);}],IA,0,I,[],0,0,0,["j",function(b){return Tc(this,b);}],D2,0,C,[],4,3,Y2,0,IB,0,I,[],0,0,0,["j",function(b){return Wi(this,b);}],IC,0,I,[],0,0,0,["j",function(b){return AAV(this,b);}],Lv,0,C,[],4,3,0,0,Ma,0,L,[],0,0,0,["u",function(){return VV(this);}],Jk,0,I,[],0,0,0,["j",function(b){return Xg(this,b);}],IE,0,I,[],0,0,0,["j",function(b){return Rt(this,b);}],GF,0,Z,[],0,0,0,["I",function(b,c){return NJ(this,b,c);}],IF,0,I,[],0,0,0,["j",function(b){return RW(this,b);}],Ms,0,BO,[],
0,0,0,["b",function(b,c,d){return AAd(this,b,c,d);},"bh",function(b,c,d){return VB(this,b,c,d);}],IG,0,I,[],0,0,0,["j",function(b){return Zb(this,b);}],Lq,"AbstractCharClass$LazyJavaDefined$1",2,I,[],0,0,0,["j",function(b){return YR(this,b);}],Iz,0,I,[],0,0,0,["j",function(b){return Wh(this,b);}],Bt,0,R,[],0,0,Ec,["b",function(b,c,d){return Qs(this,b,c,d);},"c_",function(){return Od(this);},"x",function(b){return Rs(this,b);}],Fy,0,Bt,[],0,0,0,["b",function(b,c,d){return RH(this,b,c,d);}],CH,0,C,[BS,Dg],0,0,
0,["o7",function(b){return ES(this,b);},"d_",function(b,c){return Fv(this,b,c);},"oH",function(b){return Io(this,b);},"g0",function(b,c){return PN(this,b,c);},"jI",function(b,c,d){return Yt(this,b,c,d);},"nV",function(b){return Kj(this,b);},"i3",function(b,c){return HE(this,b,c);},"mk",function(b){return F$(this,b);},"fS",function(b,c){return F6(this,b,c);},"oB",function(b){return L9(this,b);},"hR",function(b,c){return Ko(this,b,c);},"b3",function(b){ET(this,b);},"e",function(){return EF(this);},"g",function()
{return FT(this);},"d",function(b){return Hg(this,b);},"f2",function(b,c,d){return F1(this,b,c,d);},"e$",function(b,c,d,e){return EG(this,b,c,d,e);},"o2",function(b){return EV(this,b);},"g6",function(b,c,d,e){K6(this,b,c,d,e);},"dS",function(b){FH(this,b);},"nw",function(b){return Lf(this,b);},"nB",function(b,c){return LI(this,b,c);},"nT",function(b,c){BC(this,b,c);}],Dd,0,C,[],3,3,0,0,GW,0,CH,[Dd],0,3,0,["a",function(b){return Ov(this,b);},"m",function(b){return Pk(this,b);},"im",function(b){return Xp(this,
b);},"bt",function(b){return Og(this,b);},"jT",function(b,c,d){return Tq(this,b,c,d);},"fE",function(b){return U8(this,b);},"ie",function(b){return OD(this,b);},"lg",function(b,c){return Vz(this,b,c);},"l1",function(b,c,d,e){return S7(this,b,c,d,e);},"ka",function(b,c){return ZF(this,b,c);},"lt",function(b,c){return P$(this,b,c);},"j7",function(b,c){return XX(this,b,c);},"iA",function(b){return VS(this,b);},"j8",function(b,c){return ZY(this,b,c);},"dS",function(b){Z_(this,b);},"g6",function(b,c,d,e){UZ(this,
b,c,d,e);},"e$",function(b,c,d,e){return ZQ(this,b,c,d,e);},"f2",function(b,c,d){return Um(this,b,c,d);},"g",function(){return Ra(this);},"e",function(){return RL(this);},"b3",function(b){AAe(this,b);},"hR",function(b,c){return OA(this,b,c);},"fS",function(b,c){return NF(this,b,c);},"i3",function(b,c){return Xs(this,b,c);},"d_",function(b,c){return AAD(this,b,c);}],DH,0,Eg,[],0,0,0,["u",function(){return KM(this);}],K0,"ConcurrentModificationException",1,U,[],0,3,0,0,KN,0,W,[],0,0,0,["b",function(b,c,d){return Ql(this,
b,c,d);},"s",function(b){QC(this,b);},"x",function(b){return R1(this,b);},"ba",function(b){return Rk(this,b);}],Gc,0,C,[],3,3,0,0,Dv,0,C,[Gc],3,3,0,0,E9,0,C,[],3,3,0,0,BW,0,C,[Dv,E9],1,3,0,["di",function(b,c,d){OU(this,b,c,d);}],ME,0,BW,[],0,3,0,["e3",function(b){OT(this,b);},"di",function(b,c,d){Qf(this,b,c,d);},"b3",function(b){ER(this,b);},"kj",function(b){return Xe(this,b);}],GZ,0,W,[],0,0,0,["s",function(b){VE(this,b);},"b",function(b,c,d){return X8(this,b,c,d);}],Mr,0,Bv,[],0,0,0,["b",function(b,c,d){
return Zj(this,b,c,d);}],Co,0,Bt,[],0,0,0,["b",function(b,c,d){return XD(this,b,c,d);}],Ie,0,B9,[],0,3,0,0,J8,0,Bv,[],0,0,0,["b",function(b,c,d){return OS(this,b,c,d);}],Kt,0,Z,[],0,0,0,["I",function(b,c){return UJ(this,b,c);},"bh",function(b,c,d){return VC(this,b,c,d);},"bf",function(b,c,d,e){return SK(this,b,c,d,e);},"x",function(b){return Pg(this,b);}],Ip,0,CH,[Dd],0,3,0,["gC",function(b){return TW(this,b);},"g5",function(b){return VF(this,b);},"l2",function(b,c,d){return Zi(this,b,c,d);},"kE",function(b)
{return UN(this,b);},"jM",function(b,c,d,e){return Oo(this,b,c,d,e);},"lR",function(b,c){return XW(this,b,c);},"k5",function(b,c){return TZ(this,b,c);},"dS",function(b){OY(this,b);},"e$",function(b,c,d,e){return VR(this,b,c,d,e);},"f2",function(b,c,d){return Rp(this,b,c,d);},"d",function(b){return NZ(this,b);},"g",function(){return Z5(this);},"e",function(){return RF(this);},"b3",function(b){R_(this,b);},"fS",function(b,c){return VI(this,b,c);},"d_",function(b,c){return Om(this,b,c);}],CD,0,C,[],1,3,0,["mc",
function(){return Ke(this);},"oU",function(){return BG(this);},"mg",function(b){return FI(this,b);},"mw",function(){return KF(this);},"ng",function(){return IX(this);},"oP",function(){return MK(this);},"nM",function(){return X(this);},"nd",function(){return BT(this);}],Gw,"AbstractCharClass$LazyJavaUnicodeIdentifierPart$1",2,I,[],0,0,0,["j",function(b){return Y3(this,b);}]]);
$rt_metadata([Da,0,C,[],4,0,ACl,["o4",function(b){return LD(this,b);}],Gp,0,L,[],0,0,0,["u",function(){return WD(this);}],Ci,0,W,[],0,0,0,["s",function(b){YV(this,b);},"b",function(b,c,d){return QD(this,b,c,d);},"jl",function(){return FP(this);},"ge",function(b,c,d){return YJ(this,b,c,d);},"ba",function(b){return ZP(this,b);},"x",function(b){return SJ(this,b);}],H_,0,Ci,[],0,0,0,0,CO,0,C,[BE,BS],1,3,0,["md",function(){return MP(this);}],B$,"KeyboardLayout$KeyboardType",10,CO,[],12,3,DV,0,CC,0,CP,[],0,3,0,0,K7,
0,CC,[],0,3,0,0,MC,0,Bt,[],0,0,0,["b",function(b,c,d){return S1(this,b,c,d);}],J9,0,L,[],0,0,0,["u",function(){return U6(this);}],Ea,0,W,[],0,0,0,["b",function(b,c,d){return QE(this,b,c,d);},"x",function(b){return Th(this,b);}],BV,0,Ea,[],0,0,0,["b",function(b,c,d){return T4(this,b,c,d);},"s",function(b){SG(this,b);}],GP,0,BV,[],0,0,0,["b",function(b,c,d){return QQ(this,b,c,d);},"x",function(b){return W8(this,b);}],Cy,0,C,[Dv],1,3,0,0,M6,0,Cy,[],0,3,0,["kr",function(b,c,d){return TF(this,b,c,d);},"bK",function()
{Ns(this);},"n2",function(){MU(this);}],Kx,0,BV,[],0,0,0,["b",function(b,c,d){return Rf(this,b,c,d);},"x",function(b){return VY(this,b);}],Fp,0,C,[],3,3,0,0,HV,0,C,[Fp],0,0,0,["W",function(){return Pc(this);},"U",function(){return WF(this);},"mX",function(){Jn(this);}],Fl,0,C,[Dl],3,3,0,0,DK,0,C,[BL],3,3,0,0,D7,0,C,[BL],3,3,0,0,FA,0,C,[BL],3,3,0,0,D3,0,C,[BL],3,3,0,0,JL,0,C,[Fl,Gd,BL,DK,D7,FA,D3,Dy],3,3,0,0,I1,0,C,[],0,3,0,["c5",function(){return T2(this);},"dt",function(){return AAr(this);},"bN",function()
{return Yi(this);}],B5,0,C,[],3,3,0,0,He,"Quantifier",2,Ct,[B5],0,0,0,["c1",function(){return WP(this);},"c3",function(){return W9(this);},"e",function(){return PI(this);}],DX,"UnsupportedOperationException",6,U,[],0,3,0,0,MO,"ReadOnlyBufferException",3,DX,[],0,3,0,0,GT,"AbstractCharClass$LazyJavaUpperCase$1",2,I,[],0,0,0,["j",function(b){return QK(this,b);}],Hy,0,C,[],4,3,0,0,Im,0,C,[],0,3,0,0,G3,0,C,[],0,0,0,0,JR,0,C,[],4,0,0,0,D4,0,D0,[],1,3,0,["jB",function(b,c){return WT(this,b,c);}],HP,0,D4,[],0,3,0,["kw",
function(b,c,d,e,f,g,h){return Yo(this,b,c,d,e,f,g,h);},"mq",function(b){return Cj(this,b);}],H6,0,CC,[],0,3,0,0,H5,0,L,[],0,0,0,["u",function(){return Uq(this);}],FE,0,C,[],3,3,0,0,DC,0,C,[FE],3,3,0,0,Dn,0,C,[DC],1,3,0,["jr",function(b){return U7(this,b);},"ip",function(b){return QT(this,b);}],Nh,0,Bx,[],0,0,0,["b",function(b,c,d){return PG(this,b,c,d);}],Jq,0,C,[],0,3,0,["dq",function(){return Pn(this);},"dE",function(b){return Rq(this,b);},"gd",function(b){W7(this,b);},"eM",function(b){S$(this,b);}],JU,0,
C,[],4,3,0,0,Cb,0,Bx,[],0,0,0,["b",function(b,c,d){return NO(this,b,c,d);},"s",function(b){AAQ(this,b);}],KO,0,Cb,[],0,0,0,["b",function(b,c,d){return OR(this,b,c,d);}],In,"AbstractCharClass$LazyJavaIdentifierIgnorable$1",2,I,[],0,0,0,["j",function(b){return QI(this,b);}],Gn,0,C,[],3,3,0,0,H7,"AbstractCharClass$LazyJavaLetter$1",2,I,[],0,0,0,["j",function(b){return X6(this,b);}],K4,0,Bx,[],0,0,0,["b",function(b,c,d){return QV(this,b,c,d);}]]);
$rt_metadata([Jr,0,C,[],4,0,0,0,G9,"AbstractCharClass$LazyJavaUnicodeIdentifierStart$1",2,I,[],0,0,0,["j",function(b){return TC(this,b);}],IV,0,C,[],4,3,0,0,G2,0,C,[],0,3,0,["j5",function(b,c,d){R2(this,b,c,d);},"ll",function(){return AAl(this);},"cd",function(b){return Po(this,b);},"dM",function(b,c){return AAW(this,b,c);},"d9",function(){return ZB(this);},"iy",function(){return QR(this);},"co",function(){return Wu(this);},"la",function(b){return OW(this,b);},"jP",function(b,c){Zt(this,b,c);},"l3",function(b,
c){return YU(this,b,c);},"lK",function(b,c,d){Uy(this,b,c,d);},"k_",function(b){return RY(this,b);},"kA",function(){return Xt(this);},"kt",function(b){TU(this,b);}],Eh,0,DH,[],0,0,0,["u",function(){return Gv(this);}],Mv,0,Eh,[],0,0,0,["u",function(){return Os(this);}],JH,0,L,[],0,0,0,["u",function(){return WO(this);}],Ej,0,C,[],3,3,0,0,D$,0,C,[Ej,B5],0,0,0,0,ED,0,D$,[],0,0,0,0,LT,0,BV,[],0,0,0,["b",function(b,c,d){return Su(this,b,c,d);},"x",function(b){return AAI(this,b);}],Dj,0,C,[],1,3,0,["m7",function(b)
{LQ(this,b);},"mF",function(b){return Go(this,b);},"fZ",function(b){Zg(this,b);},"oW",function(b){return LW(this,b);},"fw",function(b){Yq(this,b);},"os",function(b,c,d){return Ic(this,b,c,d);},"mz",function(b){return G4(this,b);},"jz",function(b){return N5(this,b);}],Mx,0,Z,[],0,0,0,["I",function(b,c){return TT(this,b,c);},"bh",function(b,c,d){return Q5(this,b,c,d);},"bf",function(b,c,d,e){return Wx(this,b,c,d,e);},"ba",function(b){return XP(this,b);},"ju",function(b,c,d){return Xf(this,b,c,d);},"jG",function(b,
c,d){return VJ(this,b,c,d);},"fU",function(b,c){return X9(this,b,c);}],Lj,0,R,[],0,0,0,["b",function(b,c,d){return Qt(this,b,c,d);},"x",function(b){return Nt(this,b);}],Ll,"ArrayStoreException",6,U,[],0,3,0,0,CN,0,Bv,[],0,0,0,["b",function(b,c,d){return U$(this,b,c,d);},"s",function(b){XS(this,b);}],J4,0,L,[],0,0,0,["u",function(){return V5(this);}],DJ,0,CD,[BE],1,3,0,["lw",function(b,c,d){return Tp(this,b,c,d);},"hY",function(b,c,d){return XL(this,b,c,d);},"mZ",function(b){return KU(this,b);},"nN",function()
{return EX(this);},"er",function(b){return VK(this,b);}],Ly,0,DJ,[],0,0,0,["dN",function(){return Xh(this);}],DY,0,C,[],3,3,0,0,Fn,0,C,[DY],0,0,0,["D",function(b,c){Xw(this,b,c);},"bF",function(b){return AAU(this,b);},"ec",function(){return NT(this);},"gc",function(b){return Z7(this,b);},"bR",function(b,c){Tf(this,b,c);},"fC",function(b,c){Q7(this,b,c);},"cF",function(b){return Sm(this,b);},"eB",function(b){return SE(this,b);},"j2",function(b){return ZH(this,b);},"hH",function(){return Sq(this);},"e1",function(b)
{return SL(this,b);},"kN",function(){NR(this);},"hT",function(b){return Ou(this,b);},"b6",function(b,c){Sx(this,b,c);},"n4",function(b){Ga(this,b);},"jR",function(){XZ(this);},"jA",function(){return X1(this);},"h_",function(b,c,d){Zl(this,b,c,d);},"ku",function(){TD(this);},"o3",function(b,c){Lt(this,b,c);},"kG",function(b){T0(this,b);},"bw",function(){return RP(this);},"q",function(){return NP(this);},"d6",function(b){Ux(this,b);},"ij",function(){return Wn(this);},"cU",function(){return XM(this);},"df",function()
{return Ot(this);},"lG",function(){return P3(this);}],IZ,0,Z,[],0,0,0,["I",function(b,c){return ZN(this,b,c);}],GJ,0,C,[],0,3,0,["ck",function(){return O7(this);},"dt",function(){return OP(this);},"bN",function(){return OQ(this);}],GL,"AbstractCharClass$LazyJavaJavaIdentifierPart$1",2,I,[],0,0,0,["j",function(b){return ZR(this,b);}],Ib,0,C,[],0,3,0,["fn",function(){Xa(this);},"mo",function(b){Kg(this,b);}],IW,0,C,[],4,3,0,0,Du,0,C,[BE],1,3,0,["lF",function(b){return G1(this,b);}],C8,0,C,[],0,3,B7,0,Kz,"BufferUnderflowException",
4,U,[],0,3,0,0,BR,"IllegalArgumentException",6,U,[],0,3,0,0,JS,"IllegalCharsetNameException",4,BR,[],0,3,0,0,HD,0,R,[],0,0,0,["b",function(b,c,d){return Sy(this,b,c,d);},"x",function(b){return Wz(this,b);}],Ge,0,C,[BF],3,3,0,0,Kp,0,C,[BF],1,3,0,0,Dx,0,BW,[],0,3,0,0,K3,0,Dx,[],0,3,0,["di",function(b,c,d){PQ(this,b,c,d);},"m0",function(){return Kb(this);},"mU",function(b,c,d){EY(this,b,c,d);},"kl",function(b){Us(this,b);},"bL",function(b){YP(this,b);},"o",function(b){Sw(this,b);},"lA",function(b){ZA(this,b);},
"lH",function(){S3(this);},"l8",function(){Dz(this);}],FK,0,C,[],3,3,0,0,HR,0,BV,[],0,0,0,["b",function(b,c,d){return N7(this,b,c,d);},"x",function(b){return TI(this,b);}],K2,0,CE,[],0,0,0,["b",function(b,c,d){return S9(this,b,c,d);},"bh",function(b,c,d){return W0(this,b,c,d);},"bf",function(b,c,d,e){return Pb(this,b,c,d,e);},"ba",function(b){return Oy(this,b);}],I5,0,L,[],0,0,0,["u",function(){return T9(this);}],Iy,0,BO,[],0,0,0,["b",function(b,c,d){return Q$(this,b,c,d);},"bh",function(b,c,d){return NX(this,
b,c,d);},"nG",function(b,c,d){return Fi(this,b,c,d);},"oR",function(b,c,d){return K$(this,b,c,d);}],JN,0,L,[],0,0,0,["u",function(){return Z8(this);}],KC,0,C,[BF],1,3,0,0,DS,0,C,[],4,3,MF,0,LB,0,L,[],0,0,0,["u",function(){return Sb(this);}],DI,0,C,[EB],1,3,0,0,Iu,0,R,[],0,0,0,["b",function(b,c,d){return Y$(this,b,c,d);},"x",function(b){return AAu(this,b);}],KX,0,Bx,[],0,0,0,["b",function(b,c,d){return ZO(this,b,c,d);},"bh",function(b,c,d){return Pl(this,b,c,d);}],EH,0,C,[],3,3,0,0,KY,0,C,[EH],0,3,0,["lE",function()
{return QY(this);},"jV",function(b){return Ur(this,b);},"bZ",function(){return Z1(this);},"eq",function(){return W5(this);},"kP",function(){return Ri(this);},"eC",function(){return N2(this);},"kc",function(){return SC(this);}]]);
$rt_metadata([LC,0,C,[B5,BS],0,3,0,["gi",function(b){St(this,b);},"d7",function(b,c){XR(this,b,c);},"ni",function(b){return C9(this,b);},"mb",function(b){return CV(this,b);},"eV",function(b){AAM(this,b);},"jL",function(b,c){O6(this,b,c);},"bQ",function(b){return Pd(this,b);},"dr",function(b){return ZJ(this,b);},"li",function(b){return RR(this,b);},"b3",function(b){C2(this,b);},"nv",function(){CI(this);},"ke",function(b){return QX(this,b);},"bv",function(b){Yd(this,b);},"cX",function(b){Z3(this,b);},"cE",function(b)
{X0(this,b);},"cQ",function(b){AAc(this,b);},"H",function(){return Yl(this);}],F7,0,C,[],3,3,0,0,GR,"AbstractCharClass$LazyJavaJavaIdentifierStart$1",2,I,[],0,0,0,["j",function(b){return T8(this,b);}],Gb,0,Bt,[],0,0,0,["b",function(b,c,d){return O9(this,b,c,d);},"x",function(b){return Ua(this,b);}],Bf,0,C,[],0,3,Bh,0,D6,0,BP,[BE],0,3,AFS,0,H8,0,C,[],0,3,0,0,B1,0,Z,[],0,0,0,["bb",function(){return Zk(this);},"I",function(b,c){return Xu(this,b,c);},"bh",function(b,c,d){return UV(this,b,c,d);},"bf",function(b,
c,d,e){return Zx(this,b,c,d,e);},"ck",function(){return Rh(this);},"ba",function(b){return Wo(this,b);}],GD,0,Z,[],0,0,0,["I",function(b,c){return Uu(this,b,c);}],Ml,0,BW,[],0,0,0,["e3",function(b){N_(this,b);}],DF,0,C,[],4,3,0,0,II,0,I,[],0,0,0,["j",function(b){return Ut(this,b);}],IP,0,I,[],0,0,0,["j",function(b){return Nk(this,b);}],IK,0,I,[],0,0,0,["j",function(b){return Tr(this,b);}],IJ,0,I,[],0,0,0,["j",function(b){return NI(this,b);}],JE,0,L,[],0,0,0,["u",function(){return AAS(this);}],IL,0,I,[],0,0,
0,["j",function(b){return W6(this,b);}],Jv,0,L,[],0,0,0,["u",function(){return YL(this);}],IS,0,I,[],0,0,0,["j",function(b){return Td(this,b);}],IO,0,I,[],0,0,0,["j",function(b){return Uv(this,b);}],IN,0,I,[],0,0,0,["j",function(b){return NK(this,b);}],Ja,0,W,[],4,0,0,["b",function(b,c,d){return Qe(this,b,c,d);},"s",function(b){T3(this,b);},"cP",function(){return Ni(this);},"x",function(b){return ZZ(this,b);}],IQ,0,I,[],0,0,0,["j",function(b){return W$(this,b);}],Gu,0,C,[DY],4,3,0,["n5",function(b){return Et(this,
b);},"nz",function(b){return Jx(this,b);},"m1",function(){return K8(this);},"e1",function(b){return M0(this,b);},"gc",function(b){return Hn(this,b);},"hH",function(){return Mj(this);},"ec",function(){return Kl(this);},"df",function(){return HK(this);}],BZ,0,C,[BE],0,3,N,0,Lb,0,W,[],0,0,0,["b",function(b,c,d){return Zv(this,b,c,d);},"s",function(b){RG(this,b);},"cP",function(){return PW(this);},"x",function(b){return RD(this,b);}],GQ,0,Z,[],0,0,0,["I",function(b,c){return Or(this,b,c);}],B0,0,Z,[],0,0,0,["I",
function(b,c){return Tj(this,b,c);},"bh",function(b,c,d){return Py(this,b,c,d);},"bf",function(b,c,d,e){return R9(this,b,c,d,e);},"gk",function(){return Oa(this);},"ba",function(b){return SZ(this,b);}],Ha,"AbstractCharClass$LazyJavaLowerCase$1",2,I,[],0,0,0,["j",function(b){return XA(this,b);}],Mw,0,L,[],0,0,0,["u",function(){return Nz(this);}],BK,0,W,[],0,0,0,["b",function(b,c,d){return U2(this,b,c,d);},"j",function(b){return V8(this,b);},"ba",function(b){return P8(this,b);},"fe",function(){return Zq(this);
},"s",function(b){Vk(this,b);},"x",function(b){return Vm(this,b);}],G0,0,BK,[],0,0,0,["j",function(b){return Y6(this,b);}],Ng,0,L,[],0,0,0,["u",function(){return NU(this);}],B_,0,C,[],1,0,0,0,E8,0,W,[],0,0,0,["s",function(b){NM(this,b);},"jl",function(){return FL(this);},"b",function(b,c,d){return NN(this,b,c,d);},"ba",function(b){return RE(this,b);},"x",function(b){return WH(this,b);}],Ds,0,CD,[BE,Dd,Dg,Gn],1,3,0,["iG",function(b,c,d){return PP(this,b,c,d);},"kC",function(b){return SH(this,b);},"k7",function(b,
c,d){return AAt(this,b,c,d);},"ls",function(b,c,d){return QJ(this,b,c,d);},"oz",function(b){return DT(this,b);},"n6",function(){return IT(this);},"oF",function(){return E$(this);},"ob",function(){return G$(this);},"fd",function(b){return Nq(this,b);}],DR,0,Ds,[],1,0,0,["dN",function(){return ZG(this);}],L1,0,DR,[],0,0,0,["ly",function(b){return Qn(this,b);},"hi",function(b,c){Nn(this,b,c);},"jH",function(){return Qd(this);},"lJ",function(){return Wk(this);},"kY",function(){return Y_(this);}],M4,0,L,[],0,0,0,
["u",function(){return XI(this);}],EQ,0,C,[],0,3,ABa,["jh",function(b,c){return Tk(this,b,c);},"oa",function(b,c,d){return KZ(this,b,c,d);},"oM",function(b,c,d){return JB(this,b,c,d);}],B3,"KeyboardConfig$Section",10,CO,[],12,3,FZ,0,H3,"AbstractCharClass$LazyJavaTitleCase$1",2,I,[],0,0,0,["j",function(b){return W_(this,b);}],De,0,C,[],0,3,0,["bZ",function(){return OV(this);},"fs",function(){return X5(this);},"dl",function(){return Oi(this);},"bH",function(){return So(this);},"lV",function(b){AAK(this,b);},"e0",
function(){return QM(this);},"eK",function(b){QW(this,b);}],CB,0,C,[BF],3,3,0,0,HM,0,C,[CB],4,0,0,["fQ",function(b){M1(this,b);},"e2",function(b){return Xx(this,b);}],MM,0,C,[],0,3,0,0,HO,0,C,[CB],4,0,0,["fQ",function(b){Lu(this,b);},"e2",function(b){return AAJ(this,b);}],Ho,0,C,[CB],4,0,0,["fQ",function(b){JO(this,b);},"e2",function(b){return WK(this,b);}],GC,0,C,[],0,3,0,["cv",function(){return Vn(this);},"dx",function(){return YY(this);},"cw",function(){return P4(this);}],MQ,"AbstractCharClass$LazyJavaMirrored$1",
2,I,[],0,0,0,["j",function(b){return VU(this,b);}]]);
$rt_metadata([L_,"UnsupportedCharsetException",4,BR,[],0,3,0,0,Hp,0,C,[CB],4,0,0,["fQ",function(b){KT(this,b);},"e2",function(b){return UW(this,b);}],Lr,"AbstractCharClass$LazyJavaISOControl$1",2,I,[],0,0,0,["j",function(b){return TG(this,b);}],J$,0,R,[],0,0,0,["b",function(b,c,d){return Re(this,b,c,d);},"x",function(b){return RC(this,b);},"ms",function(b,c,d,e){return FM(this,b,c,d,e);}],KR,0,R,[],4,0,0,["b",function(b,c,d){return ZW(this,b,c,d);},"x",function(b){return Wm(this,b);}],Do,0,L,[],0,0,0,["u",function()
{return LX(this);}],Hl,0,C,[],0,3,0,["kx",function(){return P0(this);},"lu",function(){return Vo(this);},"le",function(){return WV(this);},"hV",function(){return PB(this);},"jF",function(){return Wa(this);},"jE",function(){return Uj(this);}],LS,0,Z,[],0,0,0,["I",function(b,c){return Nw(this,b,c);}],DQ,0,BP,[BE],0,3,FG,["dU",function(){return AAq(this);}],Ey,0,Bt,[],0,0,0,["b",function(b,c,d){return Pq(this,b,c,d);},"bu",function(){return R0(this);},"x",function(b){return Rb(this,b);}],Dp,0,W,[],0,0,0,["s",function(b)
{QP(this,b);},"b",function(b,c,d){return ST(this,b,c,d);},"bh",function(b,c,d){return XK(this,b,c,d);},"bf",function(b,c,d,e){return Uc(this,b,c,d,e);},"ba",function(b){return O2(this,b);},"x",function(b){return V3(this,b);}],Fa,0,C,[BL,DK,D7,D3,Dy],3,3,0,0,LR,0,B9,[],0,3,0,0,LL,0,C,[],0,3,0,["iS",function(){return WY(this);},"ce",function(){return AAh(this);},"em",function(){return XF(this);},"gv",function(){return Ze(this);},"bd",function(){return Ue(this);},"lI",function(b){Rd(this,b);},"iY",function(){return PK(this);
},"lN",function(b){Uf(this,b);},"da",function(){return OL(this);},"hd",function(b){return Pm(this,b);},"kV",function(b){Tw(this,b);},"n8",function(){return M$(this);}],Ch,0,Bv,[],0,0,0,["b",function(b,c,d){return AAB(this,b,c,d);}],Fg,0,Ch,[],0,0,0,["b",function(b,c,d){return Px(this,b,c,d);}],EA,0,C,[DC],3,3,0,0,DD,0,Dn,[EA],1,3,0,["V",function(){return Vf(this);}],E0,0,C,[],3,3,0,0,Id,0,DD,[B5,BS,E0],0,3,0,["b3",function(b){PD(this,b);},"C",function(b){return Te(this,b);},"T",function(){return QU(this);},
"bm",function(b){return XT(this,b);},"lS",function(b,c){YX(this,b,c);},"iH",function(b){return TQ(this,b);},"nj",function(b){Ex(this,b);},"mD",function(b){JP(this,b);}],E6,0,C,[],3,3,0,0,Ff,0,C,[BF],3,3,0,0,HL,0,C,[BF,Fa,E6,Ff],1,3,0,["m$",function(b,c){return NB(this,b,c);},"ox",function(b,c){return Oc(this,b,c);},"mh",function(b){return Qc(this,b);},"mp",function(b,c,d){return QA(this,b,c,d);},"n$",function(b){return XY(this,b);},"of",function(){return Ss(this);},"na",function(b,c,d){return Of(this,b,c,d);
}],K_,0,CN,[],0,0,0,["b",function(b,c,d){return R3(this,b,c,d);}],HA,0,C,[],0,0,0,0,Bk,0,C,[BS,BE,Dg],0,3,CQ,["oQ",function(b,c,d,e){I9(this,b,c,d,e);},"d",function(b){return Qp(this,b);},"g",function(){return Wl(this);},"H",function(){return Zf(this);},"it",function(b,c){return RI(this,b,c);},"ek",function(b){return Zo(this,b);},"cG",function(b,c){return P1(this,b,c);},"cA",function(b){return U0(this,b);},"es",function(b,c){return QB(this,b,c);},"gO",function(b,c){return Uw(this,b,c);},"lM",function(b,c){return UP(this,
b,c);},"cj",function(b,c){return OG(this,b,c);},"e_",function(b){return Yy(this,b);},"fr",function(b,c){return Va(this,b,c);},"fP",function(b){return Nl(this,b);},"fz",function(){return ZU(this);},"e",function(){return R6(this);},"ch",function(){return Zm(this);},"bz",function(b){return XN(this,b);},"jY",function(b){return X_(this,b);},"hQ",function(){return Qa(this);},"c7",function(){return O8(this);},"i6",function(b){return AAp(this,b);}],FV,0,C,[],0,0,ADX,0,Nd,"NegativeArraySizeException",6,U,[],0,3,0,0,Ii,
0,Cb,[],0,0,0,["b",function(b,c,d){return PX(this,b,c,d);}],Ef,0,Dj,[],1,3,0,["kb",function(b,c){return QG(this,b,c);}],JV,0,Ef,[],0,3,0,["jK",function(b,c,d,e,f,g,h){return Z9(this,b,c,d,e,f,g,h);}],Jc,0,L,[],0,0,0,["u",function(){return YC(this);}],Ir,0,R,[],0,0,0,["b",function(b,c,d){return ZM(this,b,c,d);},"x",function(b){return Q2(this,b);}],Cs,"NumberFormatException",6,BR,[],0,3,0,0,EI,0,Ch,[],0,0,0,["b",function(b,c,d){return Yk(this,b,c,d);}],MV,0,Du,[],0,3,0,["kg",function(){return UA(this);},"k2",
function(){return Yr(this);}],GH,0,R,[],0,0,0,["b",function(b,c,d){return Yv(this,b,c,d);},"x",function(b){return SY(this,b);}],Il,0,C,[],0,0,0,0,Ht,0,Cy,[],0,3,0,["bK",function(){AAk(this);},"el",function(){return Z6(this);},"ow",function(b){return Ez(this,b);},"nW",function(){FJ(this);}],Iv,0,L,[],0,0,0,["u",function(){return Tt(this);}],Je,"AbstractCharClass$LazyJavaDigit$1",2,I,[],0,0,0,["j",function(b){return XG(this,b);}],Jm,0,L,[],0,0,0,["u",function(){return Nx(this);}],Hv,"IllegalStateException",6,
Br,[],0,3,0,0,DA,0,W,[],0,0,0,["s",function(b){R$(this,b);},"b",function(b,c,d){return N9(this,b,c,d);},"bh",function(b,c,d){return RA(this,b,c,d);},"bf",function(b,c,d,e){return Ul(this,b,c,d,e);},"ba",function(b){return TV(this,b);},"x",function(b){return RZ(this,b);}],LV,0,Cd,[],0,0,0,["b",function(b,c,d){return UM(this,b,c,d);}],GS,"NullPointerException",6,U,[],0,3,0,0,LZ,0,R,[],4,0,0,["b",function(b,c,d){return AAH(this,b,c,d);},"x",function(b){return YH(this,b);}],JY,"AbstractCharClass$LazyJavaSpaceChar$1",
2,I,[],0,0,0,["j",function(b){return Sz(this,b);}],Kv,0,C,[Ge],0,0,0,["jJ",function(){Xb(this);},"oV",function(){return SP(this);}],LY,0,C,[],4,3,0,0]);
$rt_metadata([Kr,0,L,[],0,0,0,["u",function(){return PC(this);}],FQ,"PatternSyntaxException",2,BR,[],0,3,0,["dR",function(){return YK(this);}],GI,0,C,[],0,3,0,0,Kw,0,L,[],0,0,0,["u",function(){return TA(this);}],Di,0,C,[],0,3,BQ,0,H$,0,C,[F7],0,3,0,0,EW,0,C,[],0,3,ACr,["j1",function(b,c,d){return UB(this,b,c,d);},"mt",function(b,c){return MG(this,b,c);},"np",function(b){return HB(this,b);},"o6",function(b,c){return Na(this,b,c);},"or",function(b,c){return M3(this,b,c);},"nm",function(b,c){return Ne(this,b,c);
},"ot",function(b,c){return If(this,b,c);},"nJ",function(b,c,d){return Ek(this,b,c,d);},"oL",function(b,c){return I2(this,b,c);},"oe",function(b,c){return Mt(this,b,c);},"oO",function(b,c){return IM(this,b,c);}],LO,0,C,[BS],4,3,0,["nq",function(b){return Ld(this,b);},"mu",function(b,c){return HG(this,b,c);},"nC",function(b){return HF(this,b);},"oS",function(){return DM(this);},"ma",function(b,c){return KA(this,b,c);},"od",function(b){return L6(this,b);},"nA",function(b,c,d){return Gh(this,b,c,d);},"no",function()
{return JM(this);},"ol",function(){return JX(this);},"o1",function(b){return Fk(this,b);},"m9",function(b,c){return D8(this,b,c);},"ne",function(b){return F5(this,b);},"mR",function(b,c){return HQ(this,b,c);},"n3",function(b){return Cr(this,b);},"o5",function(b){return F9(this,b);},"mG",function(b){return Ee(this,b);},"l$",function(){Kn(this);},"mC",function(){return Hd(this);},"mQ",function(){return K5(this);},"nt",function(){return Ih(this);},"nQ",function(b){return Bd(this,b);}],Jz,0,CN,[],0,0,0,["b",function(b,
c,d){return Zn(this,b,c,d);},"s",function(b){PL(this,b);}],Lw,"BufferOverflowException",3,U,[],0,3,0,0,Hh,0,L,[],0,0,0,["u",function(){return Yx(this);}],MA,0,DI,[B5,BS],0,3,0,["hk",function(b){return Xc(this,b);},"oD",function(){Fc(this);},"gn",function(b){return Xn(this,b);},"oj",function(b){return Hs(this,b);},"ou",function(b,c,d){return FF(this,b,c,d);},"oJ",function(){return Gm(this);},"hG",function(b,c){return Pj(this,b,c);},"lz",function(b,c){return WN(this,b,c);},"hE",function(b,c,d){return Sg(this,
b,c,d);},"ks",function(b){WA(this,b);},"hD",function(){S2(this);}],G6,0,R,[],0,0,0,["b",function(b,c,d){return Qq(this,b,c,d);},"x",function(b){return V0(this,b);}],H2,0,C,[],0,3,0,0,Mq,0,L,[],0,0,0,["u",function(){return AAg(this);}],EK,0,C,[],0,3,0,0,DU,0,C,[],0,3,Bj,["dK",function(){return O3(this);},"dd",function(){return Xi(this);},"fW",function(){return Z4(this);},"hZ",function(){return Xl(this);},"f5",function(){return XE(this);},"g",function(){return Vx(this);},"g2",function(){Ub(this);}],FY,0,R,[],
4,0,0,["b",function(b,c,d){return Sk(this,b,c,d);},"x",function(b){return SU(this,b);}],JJ,0,B_,[],4,0,0,["dk",function(b){return UR(this,b);},"hh",function(b,c){return YG(this,b,c);}],JI,0,B_,[],4,0,0,["dk",function(b){return Sl(this,b);},"hh",function(b,c){return Ta(this,b,c);}],LH,0,CP,[],0,3,0,0,Nc,0,L,[],0,0,0,["u",function(){return TR(this);}],CX,0,C,[],0,0,0,["R",function(){return AAb(this);},"d6",function(b){Sn(this,b);},"kH",function(b){RT(this,b);},"fj",function(){return T6(this);},"dj",function()
{return R5(this);},"fk",function(){return RJ(this);},"n",function(){return Ty(this);},"cz",function(){return S4(this);},"bi",function(){return Qb(this);},"kW",function(){return Vw(this);},"nr",function(){Ln(this);},"o0",function(){Cc(this);},"nU",function(){return Hx(this);},"nb",function(b){return Lp(this,b);},"e",function(){return Ws(this);},"H",function(){return Yb(this);},"ct",function(){return YW(this);},"hN",function(){return Ro(this);},"iZ",function(){return Ts(this);},"mI",function(b){return Fx(this,
b);},"mS",function(){return HZ(this);},"oC",function(){return MN(this);},"l_",function(){return Y(this);},"nH",function(){return HJ(this);},"mW",function(b){return K9(this,b);},"nE",function(){return DL(this);},"bu",function(){return Rl(this);}],Kh,0,L,[],0,0,0,["u",function(){return Yc(this);}],Jy,0,C,[],0,3,0,0,MB,0,Do,[],0,0,0,["u",function(){return QS(this);}],Mn,0,C,[FK],0,3,0,["lr",function(b){return RM(this,b);},"oy",function(b,c){Ju(this,b,c);},"nI",function(b,c){Jo(this,b,c);},"mN",function(b,c){GV(this,
b,c);},"nZ",function(b,c){Hj(this,b,c);},"mA",function(b,c,d){Mh(this,b,c,d);},"mL",function(b,c,d){IU(this,b,c,d);},"m4",function(b,c){Lx(this,b,c);}],B2,0,Z,[],0,0,0,["I",function(b,c){return No(this,b,c);},"ba",function(b){return Q6(this,b);},"fe",function(){return QH(this);}],D9,"UnicodeCategory",2,I,[],0,0,0,["j",function(b){return QN(this,b);}],MJ,"UnicodeCategoryScope",2,D9,[],0,0,0,["j",function(b){return Vl(this,b);}],Kq,"UnmappableCharacterException",4,Cl,[],0,3,0,["dR",function(){return T_(this);
}],Jd,"CharClass",2,I,[],0,0,0,["bg",function(b){return Nj(this,b);},"lP",function(b){return AAE(this,b);},"J",function(b,c){return WU(this,b,c);},"jQ",function(b){NV(this,b);},"gt",function(b){Xj(this,b);},"j",function(b){return SN(this,b);},"M",function(){return AAG(this);},"bc",function(){return Vc(this);},"c8",function(){return Ww(this);},"e",function(){return Pv(this);},"cm",function(){return VO(this);}],KP,"BufferUnderflowException",3,U,[],0,3,0,0,JF,0,BW,[],0,0,0,["e3",function(b){Xq(this,b);}],J1,0,
C,[],0,3,0,0,Mg,0,Ci,[],0,0,0,0]);
function $rt_array(cls,data){this.rX=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["@",": ","    at ","Caused by: ","Malformed input of length ","String contains invalid digits: ","String contains digits out of radix ","The value is too big for int type: ","String is null or empty","Illegal radix: ","Unable to load finger key definitions file",":","Invalid section ","Invalid KeyboardType ","�","averageCharsPerByte must be positive. Actual value is ","maxCharsPerByte must be positive. Actual value is ",
"newAction must be non-null","BIG_ENDIAN","LITTLE_ENDIAN","null","Index out of bounds","New position "," is outside of range [0;","]","","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart",
"Space","w","W","s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics",
"Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics",
"BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo",
"HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks",
"CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","Class does not represent enum: ","Enum "," does not have the ","constant","STD","ANGLE","MATRIX","Unable to load bigram frequency string","#","{",",","}","0","Replacement preconditions do not hold","Action must be non-null",
"The last byte in dst "," is outside of array of size ","Length "," must be non-negative","Offset ",")","The last byte in src ","Unable to load char frequency string","resources/","loaded ","Loading...","%","charsetName is null","Should never been thrown","IGNORE","REPLACE","REPORT","Initializing...","en","?","&","=","freq","bigrams","Using frequency resource: ","\n[ An error occurred. Layout not correctly configured ]\n","\n[ An error occurred. Please check inputs ]\n","\n[ An error occurred. Frequency data was missing. ]\n",
"No frequency data found","Using frequency information: ","\n\nReady.","Either src or dest is null","Capacity is negative: ","The last char in dst ","The last char in src "," is outside of string of size ","Start "," must be before end ","rgb(","position:absolute;","left:","px;top:","px;","background-color:",";","Key ","  Effort: "," Usage: ","#80c4c4","#ca80ca","#80b780","#7a93c0","#8080ca","FINGERS","EFFORT","PENALTIES","TYPE","?20210306","UTF-8",", ","Unable to read layout data","Colemak-DH","Ergonomic",
"layout_full/colemak_dh.keyb","Colemak-DHk","layout_full/colemak_dhk.keyb","Colemak","Traditional","layout_full/colemak.keyb","Dvorak","layout_full/dvorak.keyb","Workman","layout_full/workman.keyb","MTGAP","layout_full/mtgap.keyb","qgmlwyfub","layout_full/qgmlwyfub.keyb","Halmak","layout_full/halmak.keyb","Soul","Alternative","layout_full/soul.keyb","Niro","layout_full/niro.keyb","Asset","layout_full/asset.keyb","Norman","layout_full/norman.keyb","Qwpr","layout_full/qwpr.keyb","Minimak-8","layout_full/minimak8.keyb",
"Qwerty","layout_full/qwerty.keyb","The traditional typing method","config/effort_traditional_config.dat","An alternative typing method","config/effort_alternative_config.dat","An ergonomic method using the Angle Mod","config/effort_ergonomic_config.dat","Matrix","A Matrix or ortholinear colemakmods","config/effort_matrix_config.dat","Default English data","freq/en_books.freq","en_norvig","English Data from\n  Peter Norvig, norvig.com/mayzner.html","freq/en_norvig.freq","en_wikipedia","Data from the 100 most popular\n  Wikipedia articles",
"freq/en_wikipedia.freq","linux_src","Data from the Linux source code","freq/linux_src.freq","da","Danish data","freq/practical_cryptography/da_pc.freq","de","German data","freq/practical_cryptography/de_pc.freq","es","Spanish data","freq/practical_cryptography/es_pc.freq","fi","Finnish data","freq/practical_cryptography/fi_pc.freq","fr","French data","freq/practical_cryptography/fr_pc.freq","pl","Polish data","freq/practical_cryptography/pl_pc.freq","sv","Swedish data","freq/practical_cryptography/sv_pc.freq",
"Warning: Too many rows","Warning: letter "," is missing from layout. "," appears more than once on layout. ","Patter is null","\\Q","\\E","\\\\E\\Q","Is","In","<div style=\"display: table-row\">","<div style=\"display: table-cell\">","</div>","<div style=\"display: table-cell;padding-left:2ex\">","<b style=\"color:red\">","</b>","<b><u>Finger Frequency</u></b>","<table>","<tr>","<td>finger "," </td><td>","%</td><td>&nbsp;finger ","%</td>","</tr>","<tr class=\"row_total\">","<td class=\"center\">total L </td><td>",
"%</td><td class=\"center\">total R </td><td>","</table>","<b><u>Finger Bigram Frequency</u></b>","<td class=\"center\" colspan=\"2\" style=\"text-align:right\">total</td><td class=\"center\" colspan=\"2\">","<b><u>Top Same-Finger Bigrams</u></b>","<b><u>Top Neighbour-Finger Bigrams</u></b>","-","<b><u>Finger Effort</u></b>","<th> </th><th>base</th><th>s-bigrams</th><th>n-bigrams</th><th>total</th>","</td><td>","</td>","<td>total * </td><td>","</td><td> ","Unmappable characters of length "]);
Bk.prototype.toString=function(){return $rt_ustr(this);};
Bk.prototype.valueOf=Bk.prototype.toString;C.prototype.toString=function(){return $rt_ustr(R7(this));};
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
=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}main=$rt_mainStarter(PZ);
(function(){var c;c=HM.prototype;c.handleEvent=c.e2;c=HO.prototype;c.handleEvent=c.e2;c=Ho.prototype;c.handleEvent=c.e2;c=Hp.prototype;c.handleEvent=c.e2;c=HL.prototype;c.dispatchEvent=c.n$;c.addEventListener=c.m$;c.removeEventListener=c.ox;c.getLength=c.of;c.get=c.mh;c.addEventListener=c.na;c.removeEventListener=c.mp;c=Kv.prototype;c.stateChanged=c.oV;})();
})();
