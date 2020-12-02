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
function $rt_cls(cls){return HR(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return GC(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.s.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return C; }
function $rt_nullCheck(val) {if (val === null) {$rt_throw(RF());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return AD5(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
var A=Object.create(null);
var G=$rt_throw;var BX=$rt_compare;var AD6=$rt_nullCheck;var D=$rt_cls;var F=$rt_createArray;var ACS=$rt_isInstance;var AD7=$rt_nativeThread;var AD8=$rt_suspending;var AD9=$rt_resuming;var AD$=$rt_invalidPointer;var B=$rt_s;var Be=$rt_eraseClinit;var Ce=$rt_imul;var Bb=$rt_wrapException;
function C(){this.$id$=0;}
function ACe(){var a=new C();M(a);return a;}
function M(a){return;}
function Cf(a){return HR(a.constructor);}
function Tw(a){return Er(a);}
function N7(a,b){return a!==b?0:1;}
function R2(a){return J().a(Cf(a).bZ()).a(B(0)).a(MX(Er(a))).e();}
function Er(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AAh(a){var b,c,d;if(!ACS(a,B5)){b=a;if(b.constructor.$meta.item===null)G(ABa());}c=Og(a);b=c;d=$rt_nextId();b.$id$=d;return c;}
function L(){var a=this;C.call(a);a.e$=null;a.fQ=null;}
function AD_(){var a=new L();R(a);return a;}
function R(a){M(a);}
function Tq(a,b){if(!b&&a.e$===null)a.e$=a.u();else if(b&&a.fQ===null)a.fQ=a.u().b9(1);if(b)return a.fQ;return a.e$;}
function M5(){L.call(this);}
function ABH(){var a=new M5();Ui(a);return a;}
function Ui(a){R(a);}
function Tz(a){return By().bg(32).bg(9);}
function JW(){L.call(this);}
function ACD(){var a=new JW();Ya(a);return a;}
function Ya(a){R(a);}
function Ok(a){return By().J(0,31).bg(127);}
function CN(){var a=this;C.call(a);a.fm=null;a.dG=null;a.d0=0;a.ev=0;a.hH=null;}
function AEa(){var a=new CN();Lc(a);return a;}
function AEb(a){var b=new CN();F6(b,a);return b;}
function AEc(a,b){var c=new CN();MQ(c,a,b);return c;}
function AEd(a){var b=new CN();Le(b,a);return b;}
function Lc(a){a.d0=1;a.ev=1;a.ed();}
function F6(a,b){a.d0=1;a.ev=1;a.ed();a.fm=b;}
function MQ(a,b,c){a.d0=1;a.ev=1;a.ed();a.fm=b;a.dG=c;}
function Le(a,b){a.d0=1;a.ev=1;a.ed();a.dG=b;}
function VB(a){return a;}
function TU(a){return a.fm;}
function WF(a){return a.dR();}
function XJ(a){a.ht(CA());}
function ZL(a,b){var c,d,e,f,g;b.bL(Cf(a).bZ());c=a.j3();if(c!==null)b.bL(J().a(B(1)).a(c).e());a:{b.lz();if(a.hH!==null){d=a.hH.data;e=d.length;f=0;while(true){if(f>=e)break a;g=d[f];b.bL(B(2));b.ls(g);f=f+1|0;}}}if(a.dG!==null&&a.dG!==a){b.bL(B(3));a.dG.ht(b);}}
function Br(){CN.call(this);}
function AEe(){var a=new Br();C4(a);return a;}
function AEf(a){var b=new Br();Et(b,a);return b;}
function C4(a){Lc(a);}
function Et(a,b){F6(a,b);}
function U(){Br.call(this);}
function AEg(){var a=new U();BB(a);return a;}
function AD5(a){var b=new U();Df(b,a);return b;}
function BB(a){C4(a);}
function Df(a,b){Et(a,b);}
function C5(){U.call(this);}
function Cq(){var a=new C5();I2(a);return a;}
function Bp(a){var b=new C5();L3(b,a);return b;}
function I2(a){BB(a);}
function L3(a,b){Df(a,b);}
function Cu(){C.call(this);}
function AEh(){var a=new Cu();Ep(a);return a;}
function Ep(a){M(a);}
function I(){var a=this;Cu.call(a);a.G=0;a.U=0;a.K=null;a.ds=null;a.dW=null;a.y=0;}
var AEi=null;function E5(){E5=Be(I);Ti();}
function AEj(){var a=new I();Q(a);return a;}
function Q(a){E5();Ep(a);a.K=AB4(2048);}
function Rh(a){return null;}
function PO(a){return a.K;}
function Oa(a){var b,c;if(!a.U){b=a.K;c=b.dr(0)>=2048?0:1;}else c=a.K.lb(0)>=2048?0:1;return c;}
function Xs(a){return a.y;}
function Vo(a){return a;}
function Qf(a){var b;if(a.dW===null){b=a.bc();a.dW=AD3(a,b);a.dW.b9(a.U);}return a.dW;}
function Rs(a){var b;if(a.ds===null){b=a.bc();a.ds=ADX(a,b,a);a.ds.b9(a.c4());a.ds.y=a.y;}return a.ds;}
function YF(a){return 0;}
function WJ(a,b){if(a.G^b){a.G=a.G?0:1;a.U=a.U?0:1;}if(!a.y)a.y=1;return a;}
function VG(a){return a.G;}
function DW(b,c){E5();return b.j(c);}
function CW(b,c){E5();if(b.M()!==null&&c.M()!==null)return b.M().j$(c.M());return 1;}
function Gh(b,c){E5();return LC(AEi,b).kU(c);}
function Ti(){AEi=ADu();}
function MP(){I.call(this);this.la=null;}
function ACa(a){var b=new MP();O$(b,a);return b;}
function O$(a,b){a.la=b;Q(a);}
function PS(a,b){return FY(b);}
function BZ(){Br.call(this);}
function PG(){var a=new BZ();HU(a);return a;}
function ABy(a){var b=new BZ();Wu(b,a);return b;}
function HU(a){C4(a);}
function Wu(a,b){Et(a,b);}
function Cl(){BZ.call(this);}
function AEk(){var a=new Cl();Fq(a);return a;}
function Fq(a){HU(a);}
function Jz(){Cl.call(this);this.iG=0;}
function AB0(a){var b=new Jz();Qn(b,a);return b;}
function Qn(a,b){Fq(a);a.iG=b;}
function Va(a){return J().a(B(4)).m(a.iG).e();}
function Kq(){L.call(this);}
function AB7(){var a=new Kq();Pd(a);return a;}
function Pd(a){R(a);}
function Uz(a){var b;b=ACl(a);b.y=1;return b;}
function HY(){var a=this;C.call(a);a.gJ=null;a.iC=null;a.hW=0;a.f9=0;}
function ABI(a,b){var c=new HY();VV(c,a,b);return c;}
function VV(a,b,c){M(a);a.gJ=b;a.iC=c;}
function UJ(a){return BS(a.gJ);}
function UR(a,b){return X(a.iC)<b?0:1;}
function V9(a,b){a.hW=b;}
function AAK(a,b){a.f9=b;}
function BR(){}
function BO(){C.call(this);}
function AEl(){var a=new BO();F1(a);return a;}
function F1(a){M(a);}
function BE(){}
function C$(){BO.call(this);this.iP=0;}
var AEm=null;function B6(){B6=Be(C$);U2();}
function ACY(a){var b=new C$();DP(b,a);return b;}
function DP(a,b){B6();F1(a);a.iP=b;}
function JA(b,c){B6();if(!(c>=2&&c<=36))c=10;return ADt(20).g0(b,c).e();}
function MX(b){B6();return Oi(b,4);}
function Ir(b){B6();return JA(b,10);}
function CY(b,c){var d,e,f,g,h;B6();if(c>=2&&c<=36){if(b!==null&&!b.H()){a:{d=0;e=0;switch(b.d(0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=0;if(e==b.g())G(Ca());while(e<b.g()){g=e+1|0;h=Ei(b.d(e));if(h<0)G(BW(J().a(B(5)).a(b).e()));if(h>=c)G(BW(J().a(B(6)).m(c).a(B(1)).a(b).e()));f=Ce(c,f)+h|0;if(f<0){if(g==b.g()&&f==(-2147483648)&&d)return (-2147483648);G(BW(J().a(B(7)).a(b).e()));}e=g;}if(d)f= -f;return f;}G(BW(B(8)));}G(BW(J().a(B(9)).m(c).e()));}
function DN(b){B6();return CY(b,10);}
function X0(a){return Ir(a.iP);}
function EO(b){var c,d,e;B6();if(!b)return 32;c=0;d=b>>>16;if(d)c=16;else d=b;e=d>>>8;if(!e)e=d;else c=c|8;d=e>>>4;if(!d)d=e;else c=c|4;e=d>>>2;if(!e)e=d;else c=c|2;if(e>>>1)c=c|1;return (32-c|0)-1|0;}
function CZ(b){var c,d,e;B6();if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;e=d<<8;if(!e)e=d;else c=c|8;d=e<<4;if(!d)d=e;else c=c|4;e=d<<2;if(!e)e=d;else c=c|2;if(e<<1)c=c|1;return (32-c|0)-1|0;}
function KH(b,c){var d;B6();d=c&31;return b<<d|b>>>(32-d|0);}
function U2(){AEm=D($rt_intcls());}
function Ka(){Br.call(this);}
function ABa(){var a=new Ka();Yy(a);return a;}
function Yy(a){C4(a);}
function Cg(){C.call(this);}
var AEn=null;var AEo=null;var AEp=null;var AEq=null;var AEr=null;function ACb(){ACb=Be(Cg);YS();}
function YS(){var b,c;b=$rt_createIntArray(10);c=b.data;c[0]=1;c[1]=10;c[2]=100;c[3]=1000;c[4]=10000;c[5]=100000;c[6]=1000000;c[7]=10000000;c[8]=100000000;c[9]=1000000000;AEn=b;b=$rt_createLongArray(19);c=b.data;c[0]=Long_fromInt(1);c[1]=Long_fromInt(10);c[2]=Long_fromInt(100);c[3]=Long_fromInt(1000);c[4]=Long_fromInt(10000);c[5]=Long_fromInt(100000);c[6]=Long_fromInt(1000000);c[7]=Long_fromInt(10000000);c[8]=Long_fromInt(100000000);c[9]=Long_fromInt(1000000000);c[10]=new Long(1410065408, 2);c[11]=new Long(1215752192, 23);c[12]
=new Long(3567587328, 232);c[13]=new Long(1316134912, 2328);c[14]=new Long(276447232, 23283);c[15]=new Long(2764472320, 232830);c[16]=new Long(1874919424, 2328306);c[17]=new Long(1569325056, 23283064);c[18]=new Long(2808348672, 232830643);AEo=b;b=$rt_createLongArray(6);c=b.data;c[0]=Long_fromInt(1);c[1]=Long_fromInt(10);c[2]=Long_fromInt(100);c[3]=Long_fromInt(10000);c[4]=Long_fromInt(100000000);c[5]=new Long(1874919424, 2328306);AEp=b;AEq=ABl();AEr=AC2();}
function S(){var a=this;C.call(a);a.f=null;a.be=0;a.hN=null;a.hA=0;}
var AEs=0;function Jh(){Jh=Be(S);ZM();}
function AEt(){var a=new S();Bo(a);return a;}
function AEu(a){var b=new S();Ed(b,a);return b;}
function Bo(a){var b,c;Jh();M(a);b=new C$;c=AEs;AEs=c+1|0;DP(b,c);a.hN=b.e();}
function Ed(a,b){var c,d;Jh();M(a);c=new C$;d=AEs;AEs=d+1|0;DP(c,d);a.hN=c.e();a.f=b;}
function C7(a,b,c,d){var e;e=d.q();while(true){if(b>e)return (-1);if(a.b(b,c,d)>=0)break;b=b+1|0;}return b;}
function Db(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.b(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function S1(a,b){a.hA=b;}
function RL(a){return a.hA;}
function UQ(a){return a.f;}
function FK(a,b){a.f=b;}
function WP(a,b){return 1;}
function YL(a){return null;}
function GL(a){var b;a.be=1;if(a.f!==null){if(!a.f.be){b=a.f.cj();if(b!==null){a.f.be=1;a.f=b;}a.f.bD();}else if(a.f instanceof CM&&a.f.br.ff)a.f=a.f.f;}}
function ZM(){AEs=1;}
function W(){var a=this;S.call(a);a.O=null;a.br=null;a.A=0;}
function AEv(){var a=new W();BD(a);return a;}
function ADP(a,b){var c=new W();H1(c,a,b);return c;}
function BD(a){Bo(a);}
function H1(a,b,c){Bo(a);a.O=b;a.br=c;a.A=c.c_();}
function WW(a,b,c,d){var e,f,g,h,i;if(a.O===null)return (-1);e=d.cE(a.A);d.bR(a.A,b);f=a.O.T();g=0;while(true){if(g>=f){d.bR(a.A,e);return (-1);}h=a.O.C(g);i=h.b(b,c,d);if(i>=0)break;g=g+1|0;}return i;}
function QZ(a,b){a.br.t(b);}
function AAI(a,b){var c;a:{if(a.O!==null){c=a.O.X();while(true){if(!c.Y())break a;if(!c.V().Z(b))continue;else return 1;}}}return 0;}
function Sq(a,b){var c,d;a:{if(b.ez(a.A)>=0){c=b.cE(a.A);d=a.A;if(c==b.ez(d)){c=0;break a;}}c=1;}return c;}
function Sw(a){var b,c,d,e;a.be=1;if(a.br!==null&&!a.br.be)a.br.bD();a:{if(a.O!==null){b=a.O.T();c=0;while(true){if(c>=b)break a;d=a.O.C(c);e=d.cj();if(e===null)e=d;else{d.be=1;a.O.iF(c);a.O.lK(c,e);}if(!e.be)e.bD();c=c+1|0;}}}if(a.f!==null)GL(a);}
function CM(){W.call(this);this.bl=null;}
function ABC(a,b){var c=new CM();Ju(c,a,b);return c;}
function Ju(a,b,c){BD(a);a.bl=b;a.br=c;a.A=c.c_();}
function OD(a,b,c,d){var e,f;e=d.cE(a.A);d.bR(a.A,b);f=a.bl.b(b,c,d);if(f>=0)return f;d.bR(a.A,e);return (-1);}
function NG(a,b,c,d){var e;e=a.bl.bh(b,c,d);if(e>=0)d.bR(a.A,e);return e;}
function T_(a,b,c,d,e){var f;f=a.bl.bf(b,c,d,e);if(f>=0)e.bR(a.A,f);return f;}
function AAv(a,b){return a.bl.Z(b);}
function Q4(a){var b;b=ABA(a);a.f=b;return b;}
function YT(a){var b;a.be=1;if(a.br!==null&&!a.br.be)a.br.bD();if(a.bl!==null&&!a.bl.be){b=a.bl.cj();if(b!==null){a.bl.be=1;a.bl=b;}a.bl.bD();}}
function BF(){}
function V5(b){return b;}
function Dl(){}
function Em(){}
function BL(){}
function KC(){}
function Zq(){return window.document;}
function Gi(){BO.call(this);}
var AEw=null;function U8(){U8=Be(Gi);Xf();}
function Mo(b,c){var d,e,f,g,h;U8();if(c>=2&&c<=36){if(b!==null&&!b.H()){a:{d=0;e=0;switch(b.d(0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=Long_ZERO;while(e<b.g()){g=e+1|0;h=Ei(b.d(e));if(h<0)G(BW(J().a(B(5)).a(b).e()));if(h>=c)G(BW(J().a(B(6)).m(c).a(B(1)).a(b).e()));f=Long_add(Long_mul(Long_fromInt(c),f),Long_fromInt(h));if(Long_lt(f,Long_ZERO)){if(g==b.g()&&Long_eq(f,new Long(0, 2147483648))&&d)return new Long(0, 2147483648);G(BW(J().a(B(7)).a(b).e()));}e=g;}if(d)f=Long_neg(f);return f;}G(BW(B(8)));}G(BW(J().a(B(9)).m(c).e()));}
function FT(b){U8();return Mo(b,10);}
function Xf(){AEw=D($rt_longcls());}
function Gb(){}
function EA(){}
function I_(){var a=this;C.call(a);a.dF=null;a.eR=null;a.bq=0;a.iZ=0;}
function PQ(a){var b=new I_();Y2(b,a);return b;}
function Y2(a,b){M(a);while(b>=a.bq){a.bq=a.bq<<1|1;}a.bq=a.bq<<1|1;a.dF=$rt_createIntArray(a.bq+1|0);a.eR=$rt_createIntArray(a.bq+1|0);a.iZ=b;}
function X$(a,b,c){var d,e,f;d=0;e=b&a.bq;while(a.dF.data[e]&&a.dF.data[e]!=b){f=d+1|0;d=f&a.bq;f=e+d|0;e=f&a.bq;}a.dF.data[e]=b;a.eR.data[e]=c;}
function NV(a,b){var c,d,e,f;c=b&a.bq;d=0;while(true){e=a.dF.data[c];if(!e)break;if(e==b)return a.eR.data[c];f=d+1|0;d=f&a.bq;f=c+d|0;c=f&a.bq;}return a.iZ;}
function Eg(){L.call(this);}
function ADd(){var a=new Eg();Jn(a);return a;}
function Jn(a){R(a);}
function Jf(a){return By().J(97,122).J(65,90);}
function DO(){L.call(this);}
function ADM(){var a=new DO();Kw(a);return a;}
function Kw(a){R(a);}
function Gy(a){return By().J(48,57);}
function Ki(){DO.call(this);}
function AC4(){var a=new Ki();ZE(a);return a;}
function ZE(a){Kw(a);}
function Xd(a){var b;b=Gy(a).b9(1);b.y=1;return b;}
function Hj(){CM.call(this);}
function ABA(a){var b=new Hj();S8(b,a);return b;}
function S8(a,b){Ju(a,b.bl,b.br);}
function VR(a,b,c,d){var e,f,g;e=0;f=d.q();a:{while(true){if(b>f){b=e;break a;}g=d.cE(a.A);d.bR(a.A,b);e=a.bl.b(b,c,d);if(e>=0)break;d.bR(a.A,g);b=b+1|0;}}return b;}
function AAr(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=e.cE(a.A);e.bR(a.A,c);f=a.bl.b(c,d,e);if(f>=0)break;e.bR(a.A,g);c=c+(-1)|0;}}return c;}
function SM(a){return null;}
function L8(){U.call(this);}
function ADH(){var a=new L8();Px(a);return a;}
function Px(a){BB(a);}
function CF(){var a=this;W.call(a);a.gU=0;a.c2=0;}
function ADL(a,b){var c=new CF();Fb(c,a,b);return c;}
function Fb(a,b,c){BD(a);a.gU=b;a.c2=c;}
function PJ(a,b,c,d){var e,f,g,h;e=a.c6(d);if(e!==null&&(b+e.g()|0)<=d.q()){f=0;while(true){if(f>=e.g()){d.D(a.c2,e.g());return a.f.b(b+e.g()|0,c,d);}g=e.d(f);h=b+f|0;if(g!=c.d(h)&&C6(e.d(f))!=c.d(h))break;f=f+1|0;}return (-1);}return (-1);}
function Sv(a,b){a.f=b;}
function Tb(a,b){var c;c=b.jW(a.gU);return c;}
function Td(a,b){var c;c=!b.bF(a.c2)?0:1;b.D(a.c2,(-1));return c;}
function Dw(){L.call(this);}
function ABh(){var a=new Dw();Kd(a);return a;}
function Kd(a){R(a);}
function M9(a){return By().J(97,122).J(65,90).J(48,57).bg(95);}
function Kz(){Dw.call(this);}
function ABv(){var a=new Kz();X3(a);return a;}
function X3(a){Kd(a);}
function O8(a){var b;b=M9(a).b9(1);b.y=1;return b;}
function KT(){var a=this;I.call(a);a.g_=null;a.kZ=null;}
function AD3(a,b){var c=new KT();AAo(c,a,b);return c;}
function AAo(a,b,c){a.kZ=b;a.g_=c;Q(a);}
function U6(a,b){var c,d,e;c=b-55296|0;if(c>=0&&c<2048){d=a.U;e=a.g_;d=d^e.bQ(c);}else d=0;return d;}
function KQ(){var a=this;I.call(a);a.hT=null;a.ik=null;a.kj=null;}
function ADX(a,b,c){var d=new KQ();PZ(d,a,b,c);return d;}
function PZ(a,b,c,d){a.kj=b;a.hT=c;a.ik=d;Q(a);}
function Ox(a,b){var c,d,e,f;c=b-55296|0;if(c>=0&&c<2048){d=a.U;e=a.hT;f=d^e.bQ(c);}else f=0;return a.ik.j(b)&&!f?1:0;}
function Kb(){L.call(this);}
function ABT(){var a=new Kb();Qq(a);return a;}
function Qq(a){R(a);}
function PP(a){var b;b=AB3(a);b.y=1;return b;}
function Z(){S.call(this);this.Q=0;}
function AEx(a){var b=new Z();Ht(b,a);return b;}
function AEy(){var a=new Z();BH(a);return a;}
function Ht(a,b){Ed(a,b);a.Q=1;a.gF(1);}
function BH(a){Bo(a);a.Q=1;}
function ZV(a,b,c,d){var e;if((b+a.bb()|0)>d.q()){d.by=1;return (-1);}e=a.I(b,c);if(e<0)return (-1);return a.f.b(b+e|0,c,d);}
function VF(a){return a.Q;}
function YZ(a,b){return 1;}
function Hw(){Z.call(this);this.dD=null;}
function AD4(a){var b=new Hw();Xr(b,a);return b;}
function Xr(a,b){BH(a);a.dD=b.e();a.Q=b.g();}
function Uh(a,b,c){var d,e,f,g;d=0;while(true){if(d>=a.dD.g())return a.dD.g();e=a.dD.d(d);f=b+d|0;if(e!=c.d(f)){g=a.dD;if(C6(g.d(d))!=c.d(f))break;}d=d+1|0;}return (-1);}
function BN(){S.call(this);this.w=null;}
function AEz(a,b,c){var d=new BN();C0(d,a,b,c);return d;}
function C0(a,b,c,d){Ed(a,c);a.w=b;a.gF(d);}
function AAb(a){return a.w;}
function Ua(a,b){return !a.w.Z(b)&&!a.f.Z(b)?0:1;}
function Xh(a,b){return 1;}
function Oo(a){var b;a.be=1;if(a.f!==null&&!a.f.be){b=a.f.cj();if(b!==null){a.f.be=1;a.f=b;}a.f.bD();}if(a.w!==null){if(!a.w.be){b=a.w.cj();if(b!==null){a.w.be=1;a.w=b;}a.w.bD();}else if(a.w instanceof CM&&a.w.br.ff)a.w=a.w.f;}}
function Bx(){BN.call(this);this.B=null;}
function ABW(a,b,c){var d=new Bx();Cr(d,a,b,c);return d;}
function Cr(a,b,c,d){C0(a,b,c,d);a.B=b;}
function N9(a,b,c,d){var e,f;e=0;a:{while((b+a.B.bb()|0)<=d.q()){f=a.B.I(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.f.b(b,c,d);if(f>=0)break;b=b-a.B.bb()|0;e=e+(-1)|0;}return f;}
function Cd(){Bx.call(this);this.cn=null;}
function ACq(a,b,c,d){var e=new Cd();Gj(e,a,b,c,d);return e;}
function Gj(a,b,c,d,e){Cr(a,c,d,e);a.cn=b;}
function Qs(a,b,c,d){var e,f,g,h;e=a.cn.c1();f=a.cn.c3();g=0;while(true){if(g>=e){a:{while(g<f){if((b+a.B.bb()|0)>d.q())break a;h=a.B.I(b,c);if(h<1)break a;b=b+h|0;g=g+1|0;}}while(true){if(g<e)return (-1);h=a.f.b(b,c,d);if(h>=0)break;b=b-a.B.bb()|0;g=g+(-1)|0;}return h;}if((b+a.B.bb()|0)>d.q()){d.by=1;return (-1);}h=a.B.I(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}return (-1);}
function Jg(){Cd.call(this);}
function ADc(a,b,c,d){var e=new Jg();OL(e,a,b,c,d);return e;}
function OL(a,b,c,d,e){Gj(a,b,c,d,e);}
function Ud(a,b,c,d){var e,f,g,h;e=a.cn.c1();f=a.cn.c3();g=0;while(true){if(g>=e){a:{while(true){if(g>=f)break a;if((b+a.B.bb()|0)>d.q())break a;h=a.B.I(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}}return a.f.b(b,c,d);}if((b+a.B.bb()|0)>d.q()){d.by=1;return (-1);}h=a.B.I(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}return (-1);}
function Dg(){}
function B9(){CN.call(this);}
function AEA(a,b){var c=new B9();IF(c,a,b);return c;}
function AEB(a){var b=new B9();JZ(b,a);return b;}
function AEC(a){var b=new B9();Ih(b,a);return b;}
function IF(a,b,c){MQ(a,b,c);}
function JZ(a,b){F6(a,b);}
function Ih(a,b){Le(a,b);}
function CQ(){B9.call(this);}
function AED(a){var b=new CQ();G5(b,a);return b;}
function G5(a,b){JZ(a,b);}
function Dy(){}
function Mp(){C5.call(this);}
function Ff(){var a=new Mp();VQ(a);return a;}
function VQ(a){I2(a);}
function ED(){var a=this;U.call(a);a.lp=null;a.k8=null;}
function AA_(a,b,c){var d=new ED();Vt(d,a,b,c);return d;}
function Vt(a,b,c,d){Df(a,b);a.lp=c;a.k8=d;}
function J0(){C.call(this);}
function LL(b,c){var d,e,$$je;a:{try{d=Qr(b,EB(c));}catch($$e){$$je=Bb($$e);if($$je instanceof BZ){e=$$je;break a;}else{throw $$e;}}return d;}CA().n(B(10));e.et();return 0;}
function Qr(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,$$je;FX();d=AEE;e=3;f=Ek(c);a:{try{g=0;}catch($$e){$$je=Bb($$e);h=$$je;break a;}b:{try{while(true){h=f.ek();if(h===null)break;i=h.cy(35);if(i>=0)h=h.ch(0,i);h=h.fx();if(!h.g())continue;if(h.fO(B(11))){j=B8(h,58);try{k=e;l=g;h=L5(j.C(0).c7());d=h;if(j.T()<=1){d=h;k=e;l=g;e=3;k=e;}else{d=h;k=e;l=g;e=DN(j.C(1).fx());k=e;}d=h;l=g;k=e;g=0;l=g;d=h;continue;}catch($$e){$$je=Bb($$e);if($$je instanceof Br){}else{throw $$e;}}CA().n(J().a(B(12)).a(j.C(0)).e());g=l;e=k;continue;}if
(d===AEF){j=B8(h,32);m=0;while(m<j.T()){n=g+(b.cM()-e|0)|0;if(n>=0){o=b.dM(n,m);if(o!==null)o.lF(DG(j.C(m)));}m=m+1|0;}g=g+1|0;}else if(d===AEE){j=B8(h,32);m=0;while(m<j.T()){n=g+(b.cM()-e|0)|0;if(n>=0){o=b.dM(n,m);if(o!==null)o.lA(DN(j.C(m)));}m=m+1|0;}g=g+1|0;}else if(d===AEG){c:{j=B8(h,32);if(g){p=g-1|0;q=0;while(true){if(q>=j.T())break c;b.lC(p,q,DG(j.C(q)));q=q+1|0;}}q=0;while(q<j.T()){b.jJ(q,DG(j.C(q)));q=q+1|0;}}g=g+1|0;}else if(d===AEH){j=B8(h,32);try{b.kn(Hr(j.C(0).c7()));}catch($$e){$$je=Bb($$e);if
($$je instanceof Br){break b;}else{throw $$e;}}g=g+1|0;}}}catch($$e){$$je=Bb($$e);h=$$je;break a;}f.bK();return 1;}try{G(ABy(J().a(B(13)).a(j.C(0)).e()));}catch($$e){$$je=Bb($$e);h=$$je;}}f.bK();G(h);}
function Ii(b,c){return b!=c?0:1;}
function TJ(b,c){var d;d=b-c|0;return d!=1&&d!=(-1)?0:1;}
function M3(b,c){var d,e;d=b<=4?b:9-b|0;e=c<=4?c:9-c|0;if(d<e)c=b;return c;}
function JH(){I.call(this);this.lc=null;}
function ADz(a){var b=new JH();Yl(b,a);return b;}
function Yl(a,b){a.lc=b;Q(a);}
function Od(a,b){return EN(b);}
function IB(){var a=this;I.call(a);a.d_=null;a.jt=null;}
function ACF(a,b){var c=new IB();Yx(c,a,b);return c;}
function Yx(a,b,c){a.jt=b;a.d_=c;Q(a);}
function AAt(a,b){return a.G^a.d_.bQ(b);}
function WK(a){var b,c;b=J();c=a.d_.dr(0);while(c>=0){b.fD(CL(c));b.bt(124);c=a.d_.dr(c+1|0);}if(b.g()>0)b.iy(b.g()-1|0);return b.e();}
function D0(){var a=this;C.call(a);a.kT=null;a.gA=0.0;a.lu=0.0;a.cm=null;a.cK=null;a.d8=null;a.bT=0;}
function AEI(a,b,c){var d=new D0();MR(d,a,b,c);return d;}
function MR(a,b,c,d){M(a);a.cm=B(14);B7();a.cK=AEJ;a.d8=AEJ;if(c<=0.0)G(Bz(J().a(B(15)).il(c).e()));if(d>0.0){a.kT=b;a.gA=c;a.lu=d;return;}G(Bz(J().a(B(16)).il(d).e()));}
function K$(a,b){if(b!==null){a.cK=b;a.fY(b);return a;}G(Bz(B(17)));}
function W8(a,b){return;}
function HP(a,b){if(b!==null){a.d8=b;a.fu(b);return a;}G(Bz(B(17)));}
function XA(a,b){return;}
function FA(a,b,c,d){var e,f,g,$$je;if(!(a.bT==2&&!d)&&a.bT!=3){a.bT=d?2:1;while(true){try{e=a.jw(b,c);}catch($$e){$$je=Bb($$e);if($$je instanceof U){f=$$je;G(TH(f));}else{throw $$e;}}if(e.dd())return e;if(e.dK()){if(d&&BS(b)){g=a.cK;B7();if(g===AEJ)return BM(X(b));if(X(c)<=a.cm.g())return AEK;b.ep(BG(b)+X(b)|0);if(a.cK===AEL)DT(c,a.cm);}return e;}if(e.hY()){g=a.cK;B7();if(g===AEJ)return e;if(a.cK===AEL){if(X(c)<a.cm.g())return AEK;DT(c,a.cm);}b.ep(BG(b)+e.g()|0);}else if(e.f4()){g=a.d8;B7();if(g===AEJ)break;if
(a.d8===AEL){if(X(c)<a.cm.g())return AEK;DT(c,a.cm);}b.ep(BG(b)+e.g()|0);}}return e;}G(C1());}
function MC(a,b){if(a.bT!=3&&a.bT!=2)G(C1());a.bT=3;return a.kI(b);}
function LD(a){a.bT=0;a.kC();return a;}
function I6(a,b){var c,d,e;if(a.bT&&a.bT!=3)G(C1());if(!X(b))return My(0);if(a.bT)LD(a);c=My(Bq(8,X(b)*a.gA|0));while(true){d=FA(a,b,c,0);if(d.dK())break;if(d.dd())c=Eo(a,c);if(!d.fV())continue;d.g2();}e=FA(a,b,c,1);if(e.fV())e.g2();while(true){e=MC(a,c);if(e.dK())break;c=Eo(a,c);}G7(c);return c;}
function Eo(a,b){var c,d,e;c=E8(b);d=c.data;d=EL(c,Bq(8,d.length*2|0));e=O3(d);e.fb(BG(b));return e;}
function O9(a,b){Bj();return AEM;}
function UH(a){return;}
function Bw(){BN.call(this);}
function ABY(a,b,c){var d=new Bw();CB(d,a,b,c);return d;}
function CB(a,b,c,d){C0(a,b,c,d);}
function OA(a,b,c,d){var e;if(!a.w.x(d))return a.f.b(b,c,d);e=a.w.b(b,c,d);if(e>=0)return e;return a.f.b(b,c,d);}
function Nd(){Bw.call(this);}
function ACu(a,b,c){var d=new Nd();V6(d,a,b,c);return d;}
function V6(a,b,c,d){CB(a,b,c,d);Ec();b.t(AEN);}
function S6(a,b,c,d){var e;while(true){e=a.w.b(b,c,d);if(e<=0)break;b=e;}return a.f.b(b,c,d);}
function LI(){CF.call(this);}
function ADn(a,b){var c=new LI();Wc(c,a,b);return c;}
function Wc(a,b,c){Fb(a,b,c);}
function ND(a,b,c,d){var e,f,g,h;e=a.c6(d);if(e!==null&&(b+e.g()|0)<=d.q()){f=0;while(true){if(f>=e.g()){d.D(a.c2,e.g());return a.f.b(b+e.g()|0,c,d);}g=BI(BA(e.d(f)));h=b+f|0;h=BA(c.d(h));if(g!=BI(h))break;f=f+1|0;}return (-1);}return (-1);}
function Iy(){var a=this;I.call(a);a.h2=null;a.kL=null;}
function ABm(a,b){var c=new Iy();TG(c,a,b);return c;}
function TG(a,b,c){a.kL=b;a.h2=c;Q(a);}
function S9(a,b){return a.h2.j(b);}
function D2(){C.call(this);this.j4=null;}
var AEO=null;var AEP=null;function YV(){YV=Be(D2);AAg();}
function UE(a){var b=new D2();Gq(b,a);return b;}
function Gq(a,b){YV();M(a);a.j4=b;}
function AAg(){AEO=UE(B(18));AEP=UE(B(19));}
function Iz(){var a=this;I.call(a);a.h7=null;a.lv=null;}
function ABP(a,b){var c=new Iz();Oz(c,a,b);return c;}
function Oz(a,b,c){a.lv=b;a.h7=c;Q(a);}
function Wb(a,b){return a.h7.j(b)?0:1;}
function IA(){var a=this;I.call(a);a.hv=0;a.h5=null;a.is=null;a.jH=null;}
function ACw(a,b,c,d){var e=new IA();Tj(e,a,b,c,d);return e;}
function Tj(a,b,c,d,e){a.jH=b;a.hv=c;a.h5=d;a.is=e;Q(a);}
function AAO(a,b){return !(a.hv^a.h5.j(b))&&!a.is.j(b)?0:1;}
function Lu(){C.call(this);}
function RQ(b){var c,d,e,f,g,h;c=0;d=1;while(true){e=b.ho.data;f=b.iT;b.iT=f+1|0;g=Qv(e[f]);h=(g%2|0)!=1?0:1;c=c+Ce(d,g/2|0)|0;d=d*46|0;if(!h)break;}return c;}
function Hn(b){var c,d;c=RQ(b);d=c/2|0;if(c%2|0)d= -d;return d;}
function Qv(b){if(b<34)return b-32|0;if(b>=92)return (b-32|0)-2|0;return (b-32|0)-1|0;}
function Ma(){var a=this;L.call(a);a.fB=0;a.eC=0;a.hO=0;}
function T(a,b){var c=new Ma();SS(c,a,b);return c;}
function AD2(a,b,c){var d=new Ma();Yp(d,a,b,c);return d;}
function SS(a,b,c){R(a);a.eC=c;a.fB=b;}
function Yp(a,b,c,d){R(a);a.hO=d;a.eC=c;a.fB=b;}
function VP(a){var b;b=ADA(a.fB);if(a.hO)b.K.d7(0,2048);b.y=a.eC;return b;}
function Ji(){var a=this;I.call(a);a.iq=0;a.gM=null;a.gY=null;a.kz=null;}
function ADZ(a,b,c,d){var e=new Ji();V4(e,a,b,c,d);return e;}
function V4(a,b,c,d,e){a.kz=b;a.iq=c;a.gM=d;a.gY=e;Q(a);}
function W_(a,b){return !(a.iq^a.gM.j(b))&&!a.gY.j(b)?1:0;}
function IC(){var a=this;I.call(a);a.hB=0;a.g9=null;a.i9=null;a.kh=null;}
function ADS(a,b,c,d){var e=new IC();Uw(e,a,b,c,d);return e;}
function Uw(a,b,c,d,e){a.kh=b;a.hB=c;a.g9=d;a.i9=e;Q(a);}
function Ro(a,b){return a.hB^a.g9.j(b)&&a.i9.j(b)?1:0;}
function GD(){Z.call(this);this.dP=null;}
function ADT(a){var b=new GD();Wi(b,a);return b;}
function Wi(a,b){var c,d;BH(a);c=J();d=0;while(d<b.g()){c.bt(BI(BA(b.d(d))));d=d+1|0;}a.dP=c.e();a.Q=c.g();}
function NI(a,b,c){var d;d=0;while(true){if(d>=a.dP.g())return a.dP.g();if(a.dP.d(d)!=BI(BA(c.d(b+d|0))))break;d=d+1|0;}return (-1);}
function ID(){var a=this;I.call(a);a.he=0;a.gI=null;a.hu=null;a.kR=null;}
function ACm(a,b,c,d){var e=new ID();O2(e,a,b,c,d);return e;}
function O2(a,b,c,d,e){a.kR=b;a.he=c;a.gI=d;a.hu=e;Q(a);}
function RR(a,b){return a.he^a.gI.j(b)&&a.hu.j(b)?0:1;}
function Ms(){BN.call(this);}
function AC1(a,b,c){var d=new Ms();PV(d,a,b,c);return d;}
function PV(a,b,c,d){C0(a,b,c,d);}
function Z8(a,b,c,d){var e;e=d.q();if(e>b)return a.f.bf(b,e,c,d);return a.f.b(b,c,d);}
function Vu(a,b,c,d){var e;e=d.q();if(a.f.bf(b,e,c,d)>=0)return b;return (-1);}
function IE(){var a=this;I.call(a);a.iD=null;a.gT=0;a.jc=null;}
function ABG(a,b,c){var d=new IE();Qe(d,a,b,c);return d;}
function Qe(a,b,c,d){a.jc=b;a.iD=c;a.gT=d;Q(a);}
function Y7(a,b){return a.iD.j(b)&&a.gT^a.jc.v.bQ(b)?1:0;}
function Lo(){I.call(this);this.kX=null;}
function ADN(a){var b=new Lo();No(b,a);return b;}
function No(a,b){a.kX=b;Q(a);}
function YK(a,b){return MW(b);}
function Ix(){var a=this;I.call(a);a.hl=null;a.jb=0;a.gS=null;}
function ADQ(a,b,c){var d=new Ix();NX(d,a,b,c);return d;}
function NX(a,b,c,d){a.gS=b;a.hl=c;a.jb=d;Q(a);}
function Wa(a,b){return a.hl.j(b)&&a.jb^a.gS.v.bQ(b)?0:1;}
function Bt(){var a=this;S.call(a);a.ff=0;a.c9=0;}
var AEN=null;function Ec(){Ec=Be(Bt);U9();}
function ACd(a){var b=new Bt();Ck(b,a);return b;}
function Ck(a,b){Ec();Bo(a);a.c9=b;}
function Qo(a,b,c,d){var e,f;e=d.ez(a.c9);d.fA(a.c9,b);f=a.f.b(b,c,d);if(f<0)d.fA(a.c9,e);return f;}
function Oc(a){return a.c9;}
function Rn(a,b){return 0;}
function U9(){AEN=AB2();}
function Fv(){Bt.call(this);}
function AEQ(a){var b=new Fv();Lm(b,a);return b;}
function Lm(a,b){Ck(a,b);}
function RC(a,b,c,d){var e,f;e=a.c_();f=d.bF(e);if(f!=b)b=(-1);return b;}
function CI(){var a=this;C.call(a);a.o=null;a.E=0;}
function AER(){var a=new CI();EX(a);return a;}
function ADt(a){var b=new CI();EI(b,a);return b;}
function EX(a){EI(a,16);}
function EI(a,b){M(a);a.o=$rt_createCharArray(b);}
function Ia(a,b){return a.fC(a.E,b);}
function J4(a,b,c){var d,e,f;if(b>=0&&b<=a.E){if(c===null)c=B(20);else if(c.H())return a;a.b3(a.E+c.g()|0);d=a.E-1|0;while(d>=b){a.o.data[d+c.g()|0]=a.o.data[d];d=d+(-1)|0;}a.E=a.E+c.g()|0;d=0;while(d<c.g()){e=a.o.data;f=b+1|0;e[b]=c.d(d);d=d+1|0;b=f;}return a;}G(Ff());}
function Im(a,b){return a.g0(b,10);}
function PK(a,b,c){return a.jC(a.E,b,c);}
function Ym(a,b,c,d){var e,f,g,h,i,j,k,l;e=1;if(c<0){e=0;c= -c;}a:{if(c<d){if(e)BC(a,b,b+1|0);else{BC(a,b,b+2|0);f=a.o.data;g=b+1|0;f[b]=45;b=g;}a.o.data[b]=Eb(c,d);}else{h=1;i=1;j=2147483647/d|0;b:{while(true){k=Ce(h,d);if(k>c){k=h;break b;}i=i+1|0;if(k>j)break;h=k;}}if(!e)i=i+1|0;BC(a,b,b+i|0);if(e)l=b;else{f=a.o.data;l=b+1|0;f[b]=45;}while(true){if(k<=0)break a;f=a.o.data;g=l+1|0;f[l]=Eb(c/k|0,d);c=c%k|0;k=k/d|0;l=g;}}}return a;}
function Kh(a,b){return a.i1(a.E,b);}
function HB(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=BX(c,0.0);if(!d){BC(a,b,b+3|0);e=a.o.data;d=b+1|0;e[b]=48;e=a.o.data;f=d+1|0;e[d]=46;a.o.data[f]=48;return a;}if(!d){BC(a,b,b+4|0);e=a.o.data;d=b+1|0;e[b]=45;e=a.o.data;f=d+1|0;e[d]=48;e=a.o.data;d=f+1|0;e[f]=46;a.o.data[d]=48;return a;}if(isNaN(c)?1:0){BC(a,b,b+3|0);e=a.o.data;d=b+1|0;e[b]=78;e=a.o.data;f=d+1|0;e[d]=97;a.o.data[f]=78;return a;}if(!isFinite(c)?1:0){if(d>0){BC(a,b,b+8|0);d=b;}else{BC(a,b,b+9|0);e=a.o.data;d=b+1|0;e[b]=45;}e=a.o.data;f=d+
1|0;e[d]=73;e=a.o.data;d=f+1|0;e[f]=110;e=a.o.data;f=d+1|0;e[d]=102;e=a.o.data;d=f+1|0;e[f]=105;e=a.o.data;f=d+1|0;e[d]=110;e=a.o.data;d=f+1|0;e[f]=105;e=a.o.data;f=d+1|0;e[d]=116;a.o.data[f]=121;return a;}ACb();g=AEr;Hc(c,g);h=g.fU;i=g.fr;j=g.hb;k=1;l=1;if(j){j=1;l=2;}m=9;n=VH(h);if(n>0)m=m-n|0;if(i<7&&i>=(-3)){if(i>=0){k=i+1|0;m=Bq(m,k+1|0);i=0;}else if(i<0){h=h/AEn.data[ -i]|0;m=m-i|0;i=0;}}if(i){l=l+2|0;if(!(i>(-10)&&i<10))l=l+1|0;if(i<0)l=l+1|0;}if(i&&m==k)m=m+1|0;d=l+m|0;BC(a,b,b+d|0);if(!j)f=b;else{e
=a.o.data;f=b+1|0;e[b]=45;}o=100000000;p=0;while(p<m){if(o<=0)q=0;else{q=h/o|0;h=h%o|0;}e=a.o.data;d=f+1|0;e[f]=(48+q|0)&65535;k=k+(-1)|0;if(k)f=d;else{e=a.o.data;f=d+1|0;e[d]=46;}o=o/10|0;p=p+1|0;}if(i){e=a.o.data;d=f+1|0;e[f]=69;if(i>=0)f=d;else{i= -i;e=a.o.data;f=d+1|0;e[d]=45;}if(i<10)r=f;else{e=a.o.data;r=f+1|0;e[f]=(48+(i/10|0)|0)&65535;}a.o.data[r]=(48+(i%10|0)|0)&65535;}return a;}
function VH(b){var c,d,e,f;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;f=e*100|0;if(b%f|0)f=e;else c=c|2;if(!(b%(f*10|0)|0))c=c|1;return c;}
function F8(a,b){return a.fR(a.E,b);}
function F4(a,b,c){BC(a,b,b+1|0);a.o.data[b]=c;return a;}
function L9(a,b){return a.hQ(a.E,b);}
function Km(a,b,c){return a.fC(b,c===null?B(20):c.e());}
function ER(a,b){var c,d;if(a.o.data.length>=b)return;if(a.o.data.length>=1073741823)c=2147483647;else{d=a.o.data.length*2|0;c=Bq(b,Bq(d,5));}a.o=EL(a.o,c);}
function EE(a){return E_(a.o,0,a.E);}
function FQ(a){return a.E;}
function Hd(a,b){if(b>=0&&b<a.E)return a.o.data[b];G(Cq());}
function FZ(a,b,c,d){return a.e8(a.E,b,c,d);}
function EF(a,b,c,d,e){var f,g,h,i,j;BC(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.o.data;i=b+1|0;j=d+1|0;h[b]=g[d];b=i;d=j;}return a;}
function ET(a,b){return a.f1(b,0,b.data.length);}
function K4(a,b,c,d,e){var f,g,h,i;if(b>c)G(Bp(B(21)));while(b<c){f=d.data;g=e+1|0;h=a.o.data;i=b+1|0;f[e]=h[b];e=g;b=i;}}
function FE(a,b){a.E=b;}
function Ld(a,b){var c,d,e;if(b>=0&&b<a.E){a.E=a.E-1|0;while(b<a.E){c=a.o.data;d=a.o.data;e=b+1|0;c[b]=d[e];b=e;}return a;}G(Ff());}
function LH(a,b,c){var d,e,f,g,h,i;d=BX(b,c);if(d<=0&&b<=a.E){if(!d)return a;e=a.E-c|0;a.E=a.E-(c-b|0)|0;f=0;while(f<e){g=a.o.data;d=b+1|0;h=a.o.data;i=c+1|0;g[b]=h[c];f=f+1|0;b=d;c=i;}return a;}G(Ff());}
function BC(a,b,c){var d,e;d=a.E-b|0;a.b3((a.E+c|0)-b|0);e=d-1|0;while(e>=0){a.o.data[c+e|0]=a.o.data[b+e|0];e=e+(-1)|0;}a.E=a.E+(c-b|0)|0;}
function Dd(){}
function GU(){CI.call(this);}
function GV(a){var b=new GU();Zs(b,a);return b;}
function J(){var a=new GU();YM(a);return a;}
function Zs(a,b){EI(a,b);}
function YM(a){EX(a);}
function Ot(a,b){Ia(a,b);return a;}
function Pi(a,b){Im(a,b);return a;}
function Xi(a,b){Kh(a,b);return a;}
function Of(a,b){F8(a,b);return a;}
function Tl(a,b,c,d){FZ(a,b,c,d);return a;}
function U1(a,b){ET(a,b);return a;}
function OB(a,b){L9(a,b);return a;}
function Vs(a,b,c){HB(a,b,c);return a;}
function S2(a,b,c,d,e){EF(a,b,c,d,e);return a;}
function Zy(a,b,c){Km(a,b,c);return a;}
function P7(a,b,c){F4(a,b,c);return a;}
function XQ(a,b,c){LH(a,b,c);return a;}
function VM(a,b){Ld(a,b);return a;}
function ZR(a,b,c){J4(a,b,c);return a;}
function Z4(a,b){FE(a,b);}
function US(a,b,c,d,e){K4(a,b,c,d,e);}
function ZJ(a,b,c,d,e){return a.lU(b,c,d,e);}
function Uf(a,b,c,d){return a.jN(b,c,d);}
function Q7(a){return FQ(a);}
function RG(a){return EE(a);}
function Z9(a,b){ER(a,b);}
function Oy(a,b,c){return a.j6(b,c);}
function NE(a,b,c){return a.ll(b,c);}
function Xl(a,b,c){return a.k_(b,c);}
function AAw(a,b,c){return a.j2(b,c);}
function DH(){Eg.call(this);}
function AAW(){var a=new DH();Mf(a);return a;}
function Mf(a){Jn(a);}
function KK(a){return Jf(a).J(48,57);}
function KY(){U.call(this);}
function ABQ(){var a=new KY();ZT(a);return a;}
function ZT(a){BB(a);}
function KL(){var a=this;W.call(a);a.fI=null;a.e6=null;}
function EZ(a,b){var c=new KL();Y3(c,a,b);return c;}
function Y3(a,b,c){BD(a);a.fI=b;a.e6=c;}
function Qh(a,b,c,d){var e;e=a.fI.b(b,c,d);if(e<0)e=a.e6.b(b,c,d);if(e>=0)return e;return (-1);}
function Qy(a,b){a.f=b;a.e6.t(b);a.fI.t(b);}
function RW(a,b){return 1;}
function Rf(a,b){return 1;}
function Ga(){}
function Dv(){}
function E7(){}
function BV(){C.call(this);}
function AES(){var a=new BV();CS(a);return a;}
function CS(a){M(a);}
function OS(a,b,c,d){var e,f,g;e=0;while(e<d){f=b.data;g=c+1|0;a.e1(f[c]);e=e+1|0;c=g;}}
function MD(){var a=this;BV.call(a);a.b7=null;a.cs=0;}
function AA0(){var a=new MD();Z3(a);return a;}
function AET(a){var b=new MD();H6(b,a);return b;}
function Z3(a){H6(a,32);}
function H6(a,b){CS(a);a.b7=$rt_createByteArray(b);}
function OR(a,b){var c,d;EQ(a,a.cs+1|0);c=a.b7.data;d=a.cs;a.cs=d+1|0;c[d]=b<<24>>24;}
function Qc(a,b,c,d){var e,f,g,h,i;EQ(a,a.cs+d|0);e=0;while(e<d){f=b.data;g=a.b7.data;h=a.cs;a.cs=h+1|0;i=c+1|0;g[h]=f[c];e=e+1|0;c=i;}}
function EQ(a,b){var c;if(a.b7.data.length<b){c=Bq(b,(a.b7.data.length*3|0)/2|0);a.b7=FP(a.b7,c);}}
function W9(a,b){return ABL(a.b7,0,a.cs,b);}
function GX(){var a=this;W.call(a);a.ib=null;a.js=0;}
function AAZ(a){var b=new GX();WB(b,a);return b;}
function WB(a,b){BD(a);a.ib=b.c8();a.js=b.G;}
function Vy(a,b){a.f=b;}
function X1(a,b,c,d){var e,f,g,h,i,j,k;e=d.bw();f=d.q();g=b+1|0;h=BX(g,f);if(h>0){d.by=1;return (-1);}i=c.d(b);if(!a.ib.j(i))return (-1);if(Bm(i)){if(h<0){j=c.d(g);if(Bu(j))return (-1);}}else if(Bu(i)&&b>e){k=c.d(b-1|0);if(Bm(k))return (-1);}return a.f.b(g,c,d);}
function Mr(){Bw.call(this);}
function ACQ(a,b,c){var d=new Mr();Sa(d,a,b,c);return d;}
function Sa(a,b,c,d){CB(a,b,c,d);}
function Zd(a,b,c,d){var e;if(!a.w.x(d))return a.f.b(b,c,d);e=a.f.b(b,c,d);if(e>=0)return e;return a.w.b(b,c,d);}
function Cp(){Bt.call(this);}
function ADp(){var a=new Cp();Wj(a);return a;}
function Wj(a){Ck(a,0);}
function Xw(a,b,c,d){if(d.ii()!=1&&b!=d.q())return (-1);d.jL();d.fA(0,b);return b;}
function Ic(){B9.call(this);}
function TH(a){var b=new Ic();Ov(b,a);return b;}
function Ov(a,b){Ih(a,b);}
function J6(){Bw.call(this);}
function AA9(a,b,c){var d=new J6();Zw(d,a,b,c);return d;}
function Zw(a,b,c,d){CB(a,b,c,d);Ec();b.t(AEN);}
function OQ(a,b,c,d){var e,f;e=a.w.b(b,c,d);if(e<0)return (-1);if(e>b){while(true){f=a.w.b(e,c,d);if(f<=e)break;e=f;}b=e;}return a.f.b(b,c,d);}
function Kr(){Z.call(this);}
function Cv(a){var b=new Kr();Ou(b,a);return b;}
function Ou(a,b){Ht(a,b);a.Q=0;}
function UC(a,b,c){return 0;}
function Vv(a,b,c,d){var e,f,g,h,i;e=d.q();f=d.bw();while(true){g=BX(b,e);if(g>0)return (-1);if(g<0){h=c.d(b);if(Bu(h)&&b>f){i=c.d(b-1|0);if(Bm(i)){b=b+1|0;continue;}}}if(a.f.b(b,c,d)>=0)break;b=b+1|0;}return b;}
function SF(a,b,c,d,e){var f,g,h,i;f=e.q();g=e.bw();while(true){if(c<b)return (-1);if(c<f){h=d.d(c);if(Bu(h)&&c>g){i=d.d(c-1|0);if(Bm(i)){c=c+(-1)|0;continue;}}}if(a.f.b(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function Pe(a,b){return 0;}
function In(){CI.call(this);}
function SV(){var a=new In();XH(a);return a;}
function XH(a){EX(a);}
function Vz(a,b){F8(a,b);return a;}
function Zc(a,b,c,d){FZ(a,b,c,d);return a;}
function UG(a,b){ET(a,b);return a;}
function Om(a,b,c,d,e){EF(a,b,c,d,e);return a;}
function XP(a,b,c){F4(a,b,c);return a;}
function OW(a,b){FE(a,b);}
function VL(a,b,c,d,e){return a.jG(b,c,d,e);}
function Rk(a,b,c,d){return a.lV(b,c,d);}
function NY(a,b){return Hd(a,b);}
function ZY(a){return FQ(a);}
function RA(a){return EE(a);}
function R6(a,b){ER(a,b);}
function VC(a,b,c){return a.lJ(b,c);}
function CE(){var a=this;C.call(a);a.f2=0;a.L=0;a.bM=0;a.de=0;}
function AEU(a){var b=new CE();Fy(b,a);return b;}
function Fy(a,b){M(a);a.de=(-1);a.f2=b;a.bM=b;}
function Kc(a){return a.f2;}
function BG(a){return a.L;}
function FF(a,b){if(b>=0&&b<=a.bM){a.L=b;if(b<a.de)a.de=0;return a;}G(Bz(J().a(B(22)).m(b).a(B(23)).m(a.bM).a(B(24)).e()));}
function KD(a){return a.bM;}
function IV(a){a.L=0;a.bM=a.f2;a.de=(-1);return a;}
function MI(a){a.bM=a.L;a.L=0;a.de=(-1);return a;}
function X(a){return a.bM-a.L|0;}
function BS(a){return a.L>=a.bM?0:1;}
function Gu(){I.call(this);this.jo=null;}
function AA5(a){var b=new Gu();Zj(b,a);return b;}
function Zj(a,b){a.jo=b;Q(a);}
function YX(a,b){return KE(b);}
function Da(){C.call(this);}
var AEV=null;var AEW=null;var AEX=null;function ACc(){ACc=Be(Da);Us();}
function ADu(){var a=new Da();KG(a);return a;}
function KG(a){ACc();M(a);}
function LC(a,b){var c,d,e;c=0;while(true){if(c>=AEX.data.length)G(AA_(B(25),B(25),b));d=AEX.data[c];e=d.data;if(b.bz(e[0]))break;c=c+1|0;}return e[1];}
function Us(){var b,c,d,e;AEV=ACJ();AEW=ADM();b=F($rt_arraycls(C),194);c=b.data;d=F(C,2);e=d.data;e[0]=B(26);e[1]=ADK();c[0]=d;d=F(C,2);e=d.data;e[0]=B(27);e[1]=AA1();c[1]=d;d=F(C,2);e=d.data;e[0]=B(28);e[1]=ACB();c[2]=d;d=F(C,2);e=d.data;e[0]=B(29);e[1]=ADd();c[3]=d;d=F(C,2);e=d.data;e[0]=B(30);e[1]=AEW;c[4]=d;d=F(C,2);e=d.data;e[0]=B(31);e[1]=AAW();c[5]=d;d=F(C,2);e=d.data;e[0]=B(32);e[1]=ADE();c[6]=d;d=F(C,2);e=d.data;e[0]=B(33);e[1]=ABt();c[7]=d;d=F(C,2);e=d.data;e[0]=B(34);e[1]=ABd();c[8]=d;d=F(C,2);e=
d.data;e[0]=B(35);e[1]=ABH();c[9]=d;d=F(C,2);e=d.data;e[0]=B(36);e[1]=ACD();c[10]=d;d=F(C,2);e=d.data;e[0]=B(37);e[1]=ABz();c[11]=d;d=F(C,2);e=d.data;e[0]=B(38);e[1]=ABT();c[12]=d;d=F(C,2);e=d.data;e[0]=B(39);e[1]=AAX();c[13]=d;d=F(C,2);e=d.data;e[0]=B(40);e[1]=AC3();c[14]=d;d=F(C,2);e=d.data;e[0]=B(41);e[1]=ACv();c[15]=d;d=F(C,2);e=d.data;e[0]=B(42);e[1]=AAU();c[16]=d;d=F(C,2);e=d.data;e[0]=B(43);e[1]=ACp();c[17]=d;d=F(C,2);e=d.data;e[0]=B(44);e[1]=AAV();c[18]=d;d=F(C,2);e=d.data;e[0]=B(45);e[1]=ABO();c[19]
=d;d=F(C,2);e=d.data;e[0]=B(46);e[1]=ADq();c[20]=d;d=F(C,2);e=d.data;e[0]=B(47);e[1]=AB7();c[21]=d;d=F(C,2);e=d.data;e[0]=B(48);e[1]=AA7();c[22]=d;d=F(C,2);e=d.data;e[0]=B(49);e[1]=ACy();c[23]=d;d=F(C,2);e=d.data;e[0]=B(50);e[1]=ACn();c[24]=d;d=F(C,2);e=d.data;e[0]=B(51);e[1]=ADk();c[25]=d;d=F(C,2);e=d.data;e[0]=B(52);e[1]=ABN();c[26]=d;d=F(C,2);e=d.data;e[0]=B(53);e[1]=AB6();c[27]=d;d=F(C,2);e=d.data;e[0]=B(54);e[1]=AEV;c[28]=d;d=F(C,2);e=d.data;e[0]=B(55);e[1]=ABh();c[29]=d;d=F(C,2);e=d.data;e[0]=B(56);e[1]
=ABv();c[30]=d;d=F(C,2);e=d.data;e[0]=B(57);e[1]=AEV;c[31]=d;d=F(C,2);e=d.data;e[0]=B(58);e[1]=AAQ();c[32]=d;d=F(C,2);e=d.data;e[0]=B(59);e[1]=AEW;c[33]=d;d=F(C,2);e=d.data;e[0]=B(60);e[1]=AC4();c[34]=d;d=F(C,2);e=d.data;e[0]=B(61);e[1]=H(0,127);c[35]=d;d=F(C,2);e=d.data;e[0]=B(62);e[1]=H(128,255);c[36]=d;d=F(C,2);e=d.data;e[0]=B(63);e[1]=H(256,383);c[37]=d;d=F(C,2);e=d.data;e[0]=B(64);e[1]=H(384,591);c[38]=d;d=F(C,2);e=d.data;e[0]=B(65);e[1]=H(592,687);c[39]=d;d=F(C,2);e=d.data;e[0]=B(66);e[1]=H(688,767);c[40]
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
=d;d=F(C,2);e=d.data;e[0]=B(176);e[1]=H(65056,65071);c[150]=d;d=F(C,2);e=d.data;e[0]=B(177);e[1]=H(65072,65103);c[151]=d;d=F(C,2);e=d.data;e[0]=B(178);e[1]=H(65104,65135);c[152]=d;d=F(C,2);e=d.data;e[0]=B(179);e[1]=H(65136,65279);c[153]=d;d=F(C,2);e=d.data;e[0]=B(180);e[1]=H(65280,65519);c[154]=d;d=F(C,2);e=d.data;e[0]=B(181);e[1]=H(0,1114111);c[155]=d;d=F(C,2);e=d.data;e[0]=B(182);e[1]=ABB();c[156]=d;d=F(C,2);e=d.data;e[0]=B(183);e[1]=T(0,1);c[157]=d;d=F(C,2);e=d.data;e[0]=B(184);e[1]=Dc(62,1);c[158]=d;d=F(C,
2);e=d.data;e[0]=B(185);e[1]=T(1,1);c[159]=d;d=F(C,2);e=d.data;e[0]=B(186);e[1]=T(2,1);c[160]=d;d=F(C,2);e=d.data;e[0]=B(187);e[1]=T(3,0);c[161]=d;d=F(C,2);e=d.data;e[0]=B(188);e[1]=T(4,0);c[162]=d;d=F(C,2);e=d.data;e[0]=B(189);e[1]=T(5,1);c[163]=d;d=F(C,2);e=d.data;e[0]=B(190);e[1]=Dc(448,1);c[164]=d;d=F(C,2);e=d.data;e[0]=B(191);e[1]=T(6,1);c[165]=d;d=F(C,2);e=d.data;e[0]=B(192);e[1]=T(7,0);c[166]=d;d=F(C,2);e=d.data;e[0]=B(193);e[1]=T(8,1);c[167]=d;d=F(C,2);e=d.data;e[0]=B(194);e[1]=Dc(3584,1);c[168]=d;d
=F(C,2);e=d.data;e[0]=B(195);e[1]=T(9,1);c[169]=d;d=F(C,2);e=d.data;e[0]=B(196);e[1]=T(10,1);c[170]=d;d=F(C,2);e=d.data;e[0]=B(197);e[1]=T(11,1);c[171]=d;d=F(C,2);e=d.data;e[0]=B(198);e[1]=Dc(28672,0);c[172]=d;d=F(C,2);e=d.data;e[0]=B(199);e[1]=T(12,0);c[173]=d;d=F(C,2);e=d.data;e[0]=B(200);e[1]=T(13,0);c[174]=d;d=F(C,2);e=d.data;e[0]=B(201);e[1]=T(14,0);c[175]=d;d=F(C,2);e=d.data;e[0]=B(202);e[1]=ADv(983040,1,1);c[176]=d;d=F(C,2);e=d.data;e[0]=B(203);e[1]=T(15,0);c[177]=d;d=F(C,2);e=d.data;e[0]=B(204);e[1]
=T(16,1);c[178]=d;d=F(C,2);e=d.data;e[0]=B(205);e[1]=T(18,1);c[179]=d;d=F(C,2);e=d.data;e[0]=B(206);e[1]=AD2(19,0,1);c[180]=d;d=F(C,2);e=d.data;e[0]=B(207);e[1]=Dc(1643118592,1);c[181]=d;d=F(C,2);e=d.data;e[0]=B(208);e[1]=T(20,0);c[182]=d;d=F(C,2);e=d.data;e[0]=B(209);e[1]=T(21,0);c[183]=d;d=F(C,2);e=d.data;e[0]=B(210);e[1]=T(22,0);c[184]=d;d=F(C,2);e=d.data;e[0]=B(211);e[1]=T(23,0);c[185]=d;d=F(C,2);e=d.data;e[0]=B(212);e[1]=T(24,1);c[186]=d;d=F(C,2);e=d.data;e[0]=B(213);e[1]=Dc(2113929216,1);c[187]=d;d=F(C,
2);e=d.data;e[0]=B(214);e[1]=T(25,1);c[188]=d;d=F(C,2);e=d.data;e[0]=B(215);e[1]=T(26,0);c[189]=d;d=F(C,2);e=d.data;e[0]=B(216);e[1]=T(27,0);c[190]=d;d=F(C,2);e=d.data;e[0]=B(217);e[1]=T(28,1);c[191]=d;d=F(C,2);e=d.data;e[0]=B(218);e[1]=T(29,0);c[192]=d;d=F(C,2);e=d.data;e[0]=B(219);e[1]=T(30,0);c[193]=d;AEX=b;}
function Gn(){L.call(this);}
function AA7(){var a=new Gn();Sm(a);return a;}
function Sm(a){R(a);}
function Ww(a){var b;b=ACg(a);b.y=1;return b;}
function Ci(){var a=this;W.call(a);a.db=0;a.fv=null;a.eM=null;a.eD=0;}
function ADY(a,b){var c=new Ci();ES(c,a,b);return c;}
function ES(a,b,c){BD(a);a.db=1;a.eM=b;a.eD=c;}
function YO(a,b){a.f=b;}
function Qz(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;e=$rt_createIntArray(4);f=0;g=d.q();if(b>=g)return (-1);h=a.ge(b,c,g);i=b+a.db|0;j=KU(h);if(j===null){k=e.data;l=1;k[f]=h;}else{l=j.data.length;Gr(j,0,e,0,l);l=f+l|0;}a:{if(i<g){m=a.ge(i,c,g);while(l<4){if(!Rb(m)){k=e.data;n=l+1|0;k[l]=m;}else{k=KU(m).data;if(k.length!=2){o=e.data;n=l+1|0;o[l]=k[0];}else{o=e.data;m=l+1|0;o[l]=k[0];n=m+1|0;o[m]=k[1];}}i=i+a.db|0;if(i>=g){l=n;break a;}m=a.ge(i,c,g);l=n;}}}if(l!=a.eD)return (-1);p=0;while(true){if(p>=l)return a.f.b(i,
c,d);if(e.data[p]!=a.eM.data[p])break;p=p+1|0;}return (-1);}
function FM(a){var b,c;if(a.fv===null){b=J();c=0;while(c<a.eD){b.fD(CL(a.eM.data[c]));c=c+1|0;}a.fv=b.e();}return a.fv;}
function YC(a,b,c,d){var e,f,g,h,i;a.db=1;if(b>=(d-1|0))e=c.d(b);else{f=b+1|0;e=c.d(b);g=c.d(f);if(CU(e,g)){h=$rt_createCharArray(2);i=h.data;i[0]=e;i[1]=g;e=Iv(h,0);a.db=2;}}return e;}
function ZI(a,b){var c,d;a:{if(b instanceof Ci){c=b;if(!FM(c).bz(FM(a))){d=0;break a;}}d=1;}return d;}
function SE(a,b){return 1;}
function H8(){Ci.call(this);}
function ADR(a,b){var c=new H8();RS(c,a,b);return c;}
function RS(a,b,c){ES(a,b,c);}
function CP(){var a=this;C.call(a);a.g$=null;a.kM=0;}
function AEY(a,b){var c=new CP();FR(c,a,b);return c;}
function FR(a,b,c){M(a);a.g$=b;a.kM=c;}
function MN(a){return a.g$;}
function J5(b,c){var d,e,f,g,h;d=b.j8();if(d===null)G(Bz(J().a(B(220)).a(b.bZ()).e()));e=d.data;f=e.length;g=0;while(true){if(g>=f)G(Bz(J().a(B(221)).a(b.bZ()).a(B(222)).id(c).a(B(223)).e()));h=e[g];if(MN(h).bz(c))break;g=g+1|0;}return h;}
function B$(){CP.call(this);}
var AEZ=null;var AE0=null;var AE1=null;var AE2=null;function DV(){DV=Be(B$);Qk();}
function KJ(a,b){var c=new B$();Hh(c,a,b);return c;}
function RI(){DV();return AE2.dI();}
function Hr(b){DV();return J5(D(B$),b);}
function Hh(a,b,c){DV();FR(a,b,c);}
function Qk(){var b,c;AEZ=KJ(B(224),0);AE0=KJ(B(225),1);AE1=KJ(B(226),2);b=F(B$,3);c=b.data;c[0]=AEZ;c[1]=AE0;c[2]=AE1;AE2=b;}
function CD(){CQ.call(this);}
function AE3(a){var b=new CD();FL(b,a);return b;}
function FL(a,b){G5(a,b);}
function K5(){CD.call(this);}
function AE4(a){var b=new K5();SD(b,a);return b;}
function SD(a,b){FL(a,b);}
function MB(){Bt.call(this);}
function AA2(){var a=new MB();Nq(a);return a;}
function Nq(a){Ck(a,(-1));}
function SW(a,b,c,d){return b;}
function J7(){L.call(this);}
function ACB(){var a=new J7();Q3(a);return a;}
function Q3(a){R(a);}
function UZ(a){return By().J(0,127);}
function Ea(){W.call(this);}
function ADy(a,b){var c=new Ea();HQ(c,a,b);return c;}
function HQ(a,b,c){H1(a,b,c);}
function QA(a,b,c,d){var e,f,g,h,i;e=d.bF(a.A);d.D(a.A,b);f=a.O.T();g=0;while(true){if(g>=f){d.D(a.A,e);return (-1);}h=a.O.C(g);i=h.b(b,c,d);if(i>=0)break;g=g+1|0;}return i;}
function Tc(a,b){var c;c=b.bF(a.A);return !c?0:1;}
function BU(){Ea.call(this);}
function ABi(a,b){var c=new BU();Dh(c,a,b);return c;}
function Dh(a,b,c){HQ(a,b,c);}
function TX(a,b,c,d){var e,f,g,h,i;e=d.bF(a.A);d.D(a.A,b);f=a.O.T();g=0;while(g<f){h=a.O.C(g);i=h.b(b,c,d);if(i>=0)return a.f.b(a.br.bu(),c,d);g=g+1|0;}d.D(a.A,e);return (-1);}
function SB(a,b){a.f=b;}
function GN(){BU.call(this);}
function ACj(a,b){var c=new GN();WC(c,a,b);return c;}
function WC(a,b,c){Dh(a,b,c);}
function QM(a,b,c,d){var e,f,g,h;e=a.O.T();f=0;while(f<e){g=a.O.C(f);h=g.b(b,c,d);if(h>=0)return a.f.b(b,c,d);f=f+1|0;}return (-1);}
function W1(a,b){return 0;}
function Cz(){C.call(this);this.k6=null;}
function AE5(){var a=new Cz();EM(a);return a;}
function AE6(a){var b=new Cz();Lr(b,a);return b;}
function EM(a){Lr(a,ACe());}
function Lr(a,b){M(a);a.k6=b;}
function M4(){var a=this;Cz.call(a);a.cY=null;a.ey=0;}
function EB(a){var b=new M4();TE(b,a);return b;}
function TE(a,b){EM(a);if(b!==null){a.cY=b;return;}G(RF());}
function TA(a,b,c,d){var e,f,g,h,i,j;MS(a);if(a.ey>=a.cY.g())return (-1);e=V(a.cY.g()-a.ey|0,d);f=0;while(f<e){g=b.data;h=c+1|0;i=a.cY;j=a.ey;a.ey=j+1|0;g[c]=i.d(j);f=f+1|0;c=h;}return e;}
function Nr(a){a.cY=null;}
function MS(a){if(a.cY!==null)return;G(PG());}
function Kv(){BU.call(this);}
function AAY(a,b){var c=new Kv();Vr(c,a,b);return c;}
function Vr(a,b,c){Dh(a,b,c);}
function Ra(a,b,c,d){var e,f,g;e=a.O.T();f=0;while(true){if(f>=e)return a.f.b(b,c,d);g=a.O.C(f);if(g.b(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function VS(a,b){return 0;}
function Fn(){}
function HS(){var a=this;C.call(a);a.eh=0;a.ip=0;a.iu=0;a.gN=0;a.dg=null;}
function ABo(a){var b=new HS();Rm(b,a);return b;}
function Rm(a,b){a.dg=b;M(a);a.ip=a.dg.cc;a.iu=a.dg.T();a.gN=(-1);}
function Pa(a){return a.eh>=a.iu?0:1;}
function Wy(a){var b,c;Jl(a);a.gN=a.eh;b=a.dg;c=a.eh;a.eh=c+1|0;return b.C(c);}
function Jl(a){if(a.ip>=a.dg.cc)return;G(ABQ());}
function Fj(){}
function DK(){}
function D7(){}
function Fx(){}
function D3(){}
function JI(){}
function Mi(b){var c,d;c=b.lastChild;while(c!==null){d=c.previousSibling;if(c.nodeType!=2)b.removeChild(c);c=d;}return b;}
function IZ(){var a=this;C.call(a);a.gR=null;a.iN=Long_ZERO;a.iR=0.0;}
function ABD(a,b){var c=new IZ();Yf(c,a,b);return c;}
function Pr(b,c){var d,e,$$je;a:{try{d=Yw(b,EB(c));}catch($$e){$$je=Bb($$e);if($$je instanceof BZ){e=$$je;break a;}else{throw $$e;}}return d;}CA().n(B(227));e.et();return null;}
function Yw(b,c){var d,e,f,g,h,i,$$je;d=BY();e=Ek(c);a:{while(true){try{f=e.ek();if(f===null)break a;g=B8(f,32);if(!f.ej(B(228))&&g.T()>=2){h=g.C(0).c7();if(h.g()==2&&b.cy(h.d(0))>=0&&b.cy(h.d(1))>=0){i=FT(g.C(1));d.bo(ABD(h,i));}}continue;}catch($$e){$$je=Bb($$e);f=$$je;}}e.bK();G(f);}e.bK();TS(d);return d;}
function TS(b){var c,d,e;c=Long_ZERO;d=b.X();while(d.Y()){e=d.V();c=Long_add(c,e.dt());}d=b.X();while(d.Y()){e=d.V();e.iR=Long_toNumber(e.dt())/Long_toNumber(c);}}
function Yf(a,b,c){M(a);a.gR=b;a.iN=c;}
function TV(a){return a.gR;}
function AAk(a){return a.iN;}
function Yb(a){return a.iR;}
function B5(){}
function Hb(){var a=this;Cu.call(a);a.gp=0;a.en=0;}
function ABS(a,b){var c=new Hb();YB(c,a,b);return c;}
function YB(a,b,c){Ep(a);a.gp=b;a.en=c;}
function WI(a){return a.gp;}
function W2(a){return a.en;}
function PF(a){return J().a(B(229)).m(a.gp).a(B(230)).a(a.en==2147483647?B(25):ACY(a.en).e()).a(B(231)).e();}
function DX(){U.call(this);}
function AC7(){var a=new DX();GM(a);return a;}
function GM(a){BB(a);}
function MM(){DX.call(this);}
function Gw(){var a=new MM();Y1(a);return a;}
function Y1(a){GM(a);}
function GR(){I.call(this);this.jq=null;}
function ABk(a){var b=new GR();U4(b,a);return b;}
function U4(a,b){a.jq=b;Q(a);}
function QG(a,b){return Gv(b);}
function Hv(){C.call(this);}
function IY(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(Cw());}return b.data.length;}
function I4(b,c){if(b===null)G(RF());if(b===D($rt_voidcls()))G(Cw());if(c<0)G(ADm());return X_(b.lw(),c);}
function X_(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
function Ik(){C.call(this);}
function ABl(){var a=new Ik();RJ(a);return a;}
function RJ(a){M(a);}
function JP(){C.call(this);}
function D4(){D0.call(this);}
function AE7(a,b,c){var d=new D4();Ie(d,a,b,c);return d;}
function Ie(a,b,c,d){MR(a,b,c,d);}
function WM(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=$rt_createByteArray(V(X(b),512));e=0;f=0;g=$rt_createCharArray(V(X(c),512));a:{while(true){if((e+32|0)>f&&BS(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=V(X(b)+j|0,i.length);b.lo(d,j,f-j|0);e=0;}if(!BS(c)){if(!BS(b)&&e>=f){Bj();k=AEM;}else{Bj();k=AEK;}break a;}i=g.data;l=V(X(c),i.length);m=ABR(b,c);k=a.kq(d,e,f,g,0,l,m);e=m.iS;if(k===null&&0==m.fa){Bj();k=AEM;}j=m.fa;c.k0(g,0,j);if(k!==null)break;}}b.ep(BG(b)-(f-e|0)|0);return k;}
function HM(){D4.call(this);}
function AB5(a){var b=new HM();Z5(b,a);return b;}
function Z5(a,b){Ie(a,b,0.3333333432674408,0.5);}
function Yh(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(h.dq())break a;Bj();i=AEM;break a;}n=k+1|0;o=j[k];if(!Cj(a,o)){c=n+(-2)|0;i=BM(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|o&63)&65535;k=n;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(h.dq())break a;Bj();i=AEM;break a;}p=k+1|0;o=j[k];k=p+1|0;q=j[p];if(!Cj(a,o))break b;if(!Cj(a,q))break b;r
=((l&15)<<12|(o&63)<<6|q&63)&65535;if(D5(r)){c=k+(-3)|0;i=BM(3);break a;}j=e.data;m=f+1|0;j[f]=r;}else{if((l&248)!=240){c=k+(-1)|0;i=BM(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(h.dq())break a;Bj();i=AEM;break a;}if((f+2|0)>g){c=k+(-1)|0;if(h.dE(2))break a;Bj();i=AEK;break a;}p=k+1|0;o=j[k];m=p+1|0;q=j[p];k=m+1|0;s=j[m];if(!Cj(a,o))break c;if(!Cj(a,q))break c;if(!Cj(a,s))break c;j=e.data;t=(l&7)<<18|(o&63)<<12|(q&63)<<6|s&63;p=f+1|0;j[f]=CR(t);m=p+1|0;j[p]=CH(t);}c=k;f=m;}break a;}c=k+(-3)|0;i=BM(1);break a;}c
=k+(-3)|0;i=BM(1);}h.gd(c);h.eK(f);return i;}
function Cj(a,b){return (b&192)!=128?0:1;}
function H3(){CD.call(this);}
function AE8(a){var b=new H3();R$(b,a);return b;}
function R$(a,b){FL(a,b);}
function H2(){L.call(this);}
function ACp(){var a=new H2();R_(a);return a;}
function R_(a){R(a);}
function Uj(a){var b;b=ABp(a);b.y=1;return b;}
function FB(){}
function DC(){}
function Dn(){C.call(this);}
function AE9(){var a=new Dn();Lz(a);return a;}
function Lz(a){M(a);}
function U0(a,b){var c,d,e,f;c=b.data;d=a.T();e=c.length;if(e<d)b=I4(Cf(b).eA(),d);else while(d<e){c[d]=null;d=d+1|0;}d=0;f=a.X();while(f.Y()){c=b.data;e=d+1|0;c[d]=f.V();d=e;}return b;}
function Nf(){Bx.call(this);}
function ACk(a,b,c){var d=new Nf();SN(d,a,b,c);return d;}
function SN(a,b,c,d){Cr(a,b,c,d);}
function PD(a,b,c,d){var e;a:{while(true){if((b+a.B.bb()|0)>d.q())break a;e=a.B.I(b,c);if(e<1)break;b=b+e|0;}}return a.f.b(b,c,d);}
function Jo(){var a=this;C.call(a);a.gD=null;a.hV=null;a.iS=0;a.fa=0;}
function ABR(a,b){var c=new Jo();Pq(c,a,b);return c;}
function Pq(a,b,c){M(a);a.gD=b;a.hV=c;}
function Pl(a){return BS(a.gD);}
function Rl(a,b){return X(a.hV)<b?0:1;}
function W0(a,b){a.iS=b;}
function S5(a,b){a.fa=b;}
function JR(){C.call(this);}
function Oi(b,c){var d,e,f,g,h,i,j,k;if(!b)return B(232);d=1<<c;e=d-1|0;f=(((32-EO(b)|0)+c|0)-1|0)/c|0;g=$rt_createCharArray(f);h=Ce(f-1|0,c);i=0;while(h>=0){j=g.data;k=i+1|0;j[i]=Eb(b>>>h&e,d);h=h-c|0;i=k;}return GC(g);}
function Cb(){Bx.call(this);}
function AA3(a,b,c){var d=new Cb();En(d,a,b,c);return d;}
function En(a,b,c,d){Cr(a,b,c,d);}
function NN(a,b,c,d){var e;e=a.w.b(b,c,d);if(e<0)e=a.f.b(b,c,d);return e;}
function AAJ(a,b){FK(a,b);a.w.t(b);}
function KM(){Cb.call(this);}
function AA$(a,b,c){var d=new KM();Y9(d,a,b,c);return d;}
function Y9(a,b,c,d){En(a,b,c,d);}
function OP(a,b,c,d){var e;if((b+a.B.bb()|0)<=d.q()){e=a.B.I(b,c);if(e>=1)b=b+e|0;}return a.f.b(b,c,d);}
function Il(){I.call(this);this.lt=null;}
function ACP(a){var b=new Il();N0(b,a);return b;}
function N0(a,b){a.lt=b;Q(a);}
function QE(a,b){return CK(b);}
function Gl(){}
function H4(){I.call(this);this.kV=null;}
function ACg(a){var b=new H4();ZB(b,a);return b;}
function ZB(a,b){a.kV=b;Q(a);}
function XZ(a,b){return Lk(b);}
function K2(){Bx.call(this);}
function AC0(a,b,c){var d=new K2();AAM(d,a,b,c);return d;}
function AAM(a,b,c,d){Cr(a,b,c,d);}
function QQ(a,b,c,d){var e;while(true){e=a.f.b(b,c,d);if(e>=0)break;if((b+a.B.bb()|0)<=d.q()){e=a.B.I(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
function Jp(){C.call(this);}
function CT(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function DB(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
function G6(){I.call(this);this.lM=null;}
function ADW(a){var b=new G6();Tg(b,a);return b;}
function Tg(a,b){a.lM=b;Q(a);}
function Tx(a,b){return L2(b);}
function IT(){C.call(this);}
function Tp(b){var c,d,e,f;c=ACf(b.cg());d=Hn(c);e=$rt_createIntArray(d);f=0;while(f<d){e.data[f]=Hn(c);f=f+1|0;}return e;}
function D_(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function AAG(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;c=F(EJ,16384);d=$rt_createByteArray(16384);e=0;f=0;g=0;h=0;while(h<b.g()){i=D_(b.d(h));if(i==64){h=h+1|0;i=D_(b.d(h));j=0;k=1;l=0;while(l<3){h=h+1|0;m=D_(b.d(h));j=j|Ce(k,m);k=k*64|0;l=l+1|0;}}else if(i<32)j=1;else{i=(i-32|0)<<24>>24;h=h+1|0;j=D_(b.d(h));}if(!i&&j>=128){if(e>0){n=c.data;o=f+1|0;n[f]=VN(g,g+e|0,FP(d,e));f=o;}g=g+(e+j|0)|0;e=0;}else{p=d.data;o=e+j|0;if(o<p.length)q=f;else{n=c.data;q=f+1|0;n[f]=VN(g,g+e|0,FP(d,e));g=g+o|0;e=0;}while(true){o=j
+(-1)|0;if(j<=0)break;r=e+1|0;p[e]=i;e=r;j=o;}f=q;}h=h+1|0;}return Mb(c,f);}
function G0(){var a=this;C.call(a);a.lI=null;a.bP=null;a.fS=0;a.fn=0;a.fd=null;a.cW=null;a.fe=null;}
function Vx(a){var b=new G0();Xo(b,a);return b;}
function Xo(a,b){M(a);a.bP=BY();a.fd=$rt_createDoubleArray(3);a.cW=$rt_createDoubleMultiArray([3,4]);DV();a.fe=AEZ;a.lI=b;}
function RX(a,b,c,d){var e;e=ADb(b,c,d);a.bP.bo(e);if(a.fS<(e.f5()+1|0))a.fS=e.f5()+1|0;if(a.fn<(e.cr()+1|0))a.fn=e.cr()+1|0;}
function AAe(a){var b,c;b=0;while(b<a.bP.T()){if(a.bP.C(b).da()===null)return 0;c=0;while(c<a.bP.T()){if(b!=c&&a.bP.C(c).hd(a.bP.C(b).iQ()))return 0;c=c+1|0;}b=b+1|0;}return 1;}
function Pm(a,b){var c,d;c=a.bP.X();while(true){if(!c.Y())return null;d=c.V();if(d.hd(b))break;}return d;}
function AAP(a,b,c){var d,e;d=a.bP.X();while(true){if(!d.Y())return null;e=d.V();if(e.cr()==b&&e.f5()==c)break;}return e;}
function Zv(a){var b,c,d;b=J();c=a.bP.X();while(c.Y()){d=c.V();b.a(d.da());}return b.e();}
function QN(a){return a.fS;}
function Wn(a){return a.fn;}
function OU(a,b){return a.fd.data[b];}
function Zn(a,b,c){a.fd.data[b]=c;}
function YN(a,b,c){if(b>4)b=9-b|0;if(a.cW.data.length<=b)return 0.0;return a.cW.data[b].data[c];}
function Ur(a,b,c,d){a.cW.data[b].data[c]=d;}
function RT(a,b){var c;if(b>4)b=9-b|0;if(a.cW.data.length<=b)return 0;c=0;while(c<3){if(a.cW.data[b].data[c]>0.0)return 1;c=c+1|0;}return 0;}
function Xm(a){return a.fe;}
function TP(a,b){a.fe=b;}
function Eh(){DH.call(this);}
function ABt(){var a=new Eh();I8(a);return a;}
function I8(a){Mf(a);}
function Gt(a){return KK(a).J(33,64).J(91,96).J(123,126);}
function Mu(){Eh.call(this);}
function ABd(){var a=new Mu();Vn(a);return a;}
function Vn(a){I8(a);}
function Oq(a){return Gt(a).bg(32);}
function JE(){L.call(this);}
function ACn(){var a=new JE();PE(a);return a;}
function PE(a){R(a);}
function WH(a){return ADl(a);}
function Ej(){}
function D$(){var a=this;C.call(a);a.fo=null;a.ee=null;}
function AE$(a,b){var c=new D$();MU(c,a,b);return c;}
function MU(a,b,c){M(a);a.fo=b;a.ee=c;}
function EC(){var a=this;D$.call(a);a.eU=0;a.dm=null;}
function ACz(a,b){var c=new EC();RN(c,a,b);return c;}
function RN(a,b,c){MU(a,b,null);a.eU=c;}
function LT(){BU.call(this);}
function AB$(a,b){var c=new LT();VJ(c,a,b);return c;}
function VJ(a,b,c){Dh(a,b,c);}
function Sp(a,b,c,d){var e,f,g,h,i;e=a.O.T();f=!d.df()?d.bw():0;a:{g=a.f.b(b,c,d);if(g>=0){d.D(a.A,b);h=0;while(true){if(h>=e)break a;i=a.O.C(h);if(i.bf(f,b,c,d)>=0){d.D(a.A,(-1));return g;}h=h+1|0;}}}return (-1);}
function AAB(a,b){return 0;}
function Dj(){var a=this;C.call(a);a.jQ=null;a.f0=null;a.jX=0.0;a.gs=0.0;a.fg=null;a.gf=null;a.cT=0;}
function AE_(a,b,c,d){var e=new Dj();L4(e,a,b,c,d);return e;}
function AFa(a,b,c){var d=new Dj();La(d,a,b,c);return d;}
function L4(a,b,c,d,e){M(a);B7();a.fg=AEJ;a.gf=AEJ;LQ(a,e);a.jQ=b;a.f0=e.dI();a.jX=c;a.gs=d;}
function La(a,b,c,d){var e;e=$rt_createByteArray(1);e.data[0]=63;L4(a,b,c,d,e);}
function LQ(a,b){var c;if(b!==null){c=b.data.length;if(c&&c>=a.gs)return;}G(Bz(B(233)));}
function Gm(a,b){if(b!==null){a.fg=b;a.fY(b);return a;}G(Bz(B(234)));}
function Za(a,b){return;}
function LW(a,b){if(b!==null){a.gf=b;a.fu(b);return a;}G(Bz(B(234)));}
function Yj(a,b){return;}
function H_(a,b,c,d){var e,f,g,h,$$je;a:{if(a.cT!=3){if(d)break a;if(a.cT!=2)break a;}G(C1());}a.cT=!d?1:2;while(true){try{e=a.j7(b,c);}catch($$e){$$je=Bb($$e);if($$je instanceof U){f=$$je;G(TH(f));}else{throw $$e;}}if(e.dK()){if(!d)return e;g=X(b);if(g<=0)return e;e=BM(g);}else if(e.dd())break;h=!e.f4()?a.fg:a.gf;b:{B7();if(h!==AEL){if(h===AFb)break b;else return e;}if(X(c)<a.f0.data.length)return AEK;KS(c,a.f0);}b.fb(BG(b)+e.g()|0);}return e;}
function G1(a,b){var c;if(a.cT!=2&&a.cT!=4)G(C1());c=a.ju(b);Bj();if(c===AEM)a.cT=3;return c;}
function N4(a,b){Bj();return AEM;}
function Mw(){var a=this;Z.call(a);a.bj=null;a.fE=null;a.eL=null;}
function ADw(a){var b=new Mw();TF(b,a);return b;}
function TF(a,b){var c;BH(a);a.bj=b.e();a.Q=b.g();a.fE=PQ(a.Q);a.eL=PQ(a.Q);c=0;while(c<(a.Q-1|0)){a.fE.i3(a.bj.d(c),(a.Q-c|0)-1|0);a.eL.i3(a.bj.d((a.Q-c|0)-1|0),(a.Q-c|0)-1|0);c=c+1|0;}}
function TO(a,b,c){return !a.fT(c,b)?(-1):a.Q;}
function Q0(a,b,c,d){var e,f;e=d.q();while(true){if(b>e)return (-1);f=a.jp(c,b,e);if(f<0)return (-1);if(a.f.b(f+a.Q|0,c,d)>=0)break;b=f+1|0;}return f;}
function Wq(a,b,c,d,e){var f;while(true){if(c<b)return (-1);f=a.jA(d,b,c);if(f<0)return (-1);if(a.f.b(f+a.Q|0,d,e)>=0)break;c=f+(-1)|0;}return f;}
function XI(a,b){var c,d,e,f,g;if(b instanceof B2)return b.ci()!=a.bj.d(0)?0:1;if(b instanceof B3)return b.I(0,a.bj.ch(0,1))<=0?0:1;if(!(b instanceof BK)){if(!(b instanceof B1))return 1;a:{if(a.bj.g()>1){c=b;d=c.gk();e=a.bj.d(0);c=a.bj;f=c.d(1);if(d==BT(e,f)){e=1;break a;}}e=0;}return e;}b:{c:{c=b;if(!c.j(a.bj.d(0))){g=a.bj;if(g.g()<=1)break c;g=a.bj;e=BT(g.d(0),a.bj.d(1));if(!c.j(e))break c;}e=1;break b;}e=0;}return e;}
function W$(a,b,c,d){var e,f;e=a.bj.d(a.Q-1|0);while(true){if(c>(d-a.Q|0))return (-1);f=b.d((c+a.Q|0)-1|0);if(f==e&&a.fT(b,c))break;c=c+a.fE.fF(f)|0;}return c;}
function VD(a,b,c,d){var e,f,g,h;e=a.bj.d(0);f=b.g();g=(f-d|0)-a.Q|0;if(g<=0)d=d+g|0;while(true){if(d<c)return (-1);h=b.d(d);if(h==e&&a.fT(b,d))break;d=d-a.eL.fF(h)|0;}return d;}
function X2(a,b,c){var d;d=0;while(d<a.Q){if(b.d(d+c|0)!=a.bj.d(d))return 0;d=d+1|0;}return 1;}
function Lh(){S.call(this);}
function ACV(){var a=new Lh();YH(a);return a;}
function YH(a){Bo(a);}
function Qp(a,b,c,d){var e;e=!d.df()?d.q():c.g();if(b<e)return (-1);d.by=1;d.kN=1;return a.f.b(b,c,d);}
function Ns(a,b){return 0;}
function Lj(){U.call(this);}
function J$(){var a=new Lj();VA(a);return a;}
function VA(a){BB(a);}
function CO(){Bw.call(this);}
function ADC(a,b,c){var d=new CO();Eu(d,a,b,c);return d;}
function Eu(a,b,c,d){CB(a,b,c,d);}
function U3(a,b,c,d){var e;if(!a.w.x(d))return a.f.b(b,c,d);e=a.w.b(b,c,d);if(e>=0)return e;return a.f.b(b,c,d);}
function XL(a,b){FK(a,b);a.w.t(b);}
function J1(){L.call(this);}
function AA1(){var a=new J1();Y8(a);return a;}
function Y8(a){R(a);}
function VZ(a){return By().J(65,90);}
function DJ(){var a=this;CE.call(a);a.f_=0;a.e7=null;a.lT=null;}
function AFc(a,b,c,d,e){var f=new DJ();HT(f,a,b,c,d,e);return f;}
function HT(a,b,c,d,e,f){Fy(a,c);YV();a.lT=AEO;a.f_=b;a.e7=d;a.L=e;a.bM=f;}
function Mk(b,c,d){return ACK(0,b.data.length,b,c,c+d|0,0,0);}
function UB(b){return Mk(b,0,b.data.length);}
function Tk(a,b,c,d){var e,f,g,h,i,j;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Bp(J().a(B(235)).m(g).a(B(236)).m(f).e()));if(X(a)<d)G(Yi());if(d<0)G(Bp(J().a(B(237)).m(d).a(B(238)).e()));h=a.L+a.f_|0;i=0;while(i<d){g=c+1|0;j=a.e7.data;f=h+1|0;e[c]=j[h];i=i+1|0;c=g;h=f;}a.L=a.L+d|0;return a;}}e=b.data;G(Bp(J().a(B(239)).m(c).a(B(23)).m(e.length).a(B(240)).e()));}
function XE(a,b,c,d){var e,f,g,h,i,j;if(!d)return a;if(a.dN())G(Gw());if(X(a)<d)G(I5());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Bp(J().a(B(241)).m(g).a(B(236)).m(f).e()));if(d<0)G(Bp(J().a(B(237)).m(d).a(B(238)).e()));h=a.L+a.f_|0;i=0;while(i<d){j=a.e7.data;g=h+1|0;f=c+1|0;j[h]=e[c];i=i+1|0;h=g;c=f;}a.L=a.L+d|0;return a;}}e=b.data;G(Bp(J().a(B(239)).m(c).a(B(23)).m(e.length).a(B(240)).e()));}
function KS(a,b){return a.hX(b,0,b.data.length);}
function EV(a){IV(a);return a;}
function VE(a,b){FF(a,b);return a;}
function Lx(){var a=this;DJ.call(a);a.jl=0;a.gQ=0;}
function ACK(a,b,c,d,e,f,g){var h=new Lx();OV(h,a,b,c,d,e,f,g);return h;}
function OV(a,b,c,d,e,f,g,h){HT(a,b,c,d,e,f);a.jl=g;a.gQ=h;}
function Xa(a){return a.gQ;}
function DY(){}
function Fl(){var a=this;C.call(a);a.bs=null;a.du=null;a.gh=null;a.go=null;a.hJ=0;a.eu=0;a.fk=0;a.ja=0;a.bC=0;a.ji=0;a.jh=0;a.by=0;a.kN=0;a.cN=0;a.ft=0;}
function AFd(a,b,c,d,e,f){var g=new Fl();Hz(g,a,b,c,d,e,f);return g;}
function Hz(a,b,c,d,e,f,g){var h;M(a);a.cN=(-1);h=e+1|0;a.hJ=h;a.bs=$rt_createIntArray(h*2|0);a.du=$rt_createIntArray(g);DE(a.du,(-1));if(f>0)a.gh=$rt_createIntArray(f);DE(a.bs,(-1));a.h$(b,c,d);}
function Xp(a,b,c){a.du.data[b]=c;}
function AAN(a,b){return a.du.data[b];}
function NS(a){return a.gc(0);}
function Z0(a,b){F$(a,b);return a.bs.data[(b*2|0)+1|0];}
function Ta(a,b,c){a.bs.data[b*2|0]=c;}
function Q2(a,b,c){a.bs.data[(b*2|0)+1|0]=c;}
function Sh(a,b){return a.bs.data[b*2|0];}
function Sz(a,b){return a.bs.data[(b*2|0)+1|0];}
function ZA(a,b){var c,d;c=a.cE(b);d=a.ez(b);if((d|c|(d-c|0))>=0&&d<=a.go.g())return a.go.fp(c,d).e();return null;}
function Sl(a){return a.eZ(0);}
function SG(a,b){F$(a,b);return a.bs.data[b*2|0];}
function NQ(a){if(a.bs.data[0]==(-1)){a.bs.data[0]=a.bC;a.bs.data[1]=a.bC;}a.cN=a.eb();}
function Os(a,b){return a.gh.data[b];}
function Ss(a,b,c){a.gh.data[b]=c;}
function F$(a,b){if(!a.eu)G(C1());if(b>=0&&b<a.hJ)return;G(Bp(EK(b)));}
function XS(a){a.eu=1;}
function XU(a){return a.eu;}
function Zf(a,b,c,d){a.eu=0;a.ft=2;DE(a.bs,(-1));DE(a.du,(-1));if(b!==null)a.go=b;if(c>=0)Ls(a,c,d);a.bC=a.fk;}
function Ty(a){a.h$(null,(-1),(-1));}
function Ls(a,b,c){a.fk=b;a.ja=c;}
function TT(a,b){a.bC=b;if(a.cN>=0)b=a.cN;a.cN=b;}
function RK(a){return a.fk;}
function NO(a){return a.ja;}
function Uq(a,b){a.ft=b;}
function Wg(a){return a.ft;}
function XF(a){return a.jh;}
function Or(a){return a.ji;}
function P0(a){return a.cN;}
function IX(){var a=this;Z.call(a);a.iJ=null;a.li=0;}
function Xu(a){var b=new IX();PR(b,a);return b;}
function PR(a,b){BH(a);a.iJ=b.c8();a.li=b.G;}
function ZG(a,b,c){var d,e;d=a.iJ;e=BA(c.d(b));return !d.j(BI(e))?(-1):1;}
function GH(){var a=this;C.call(a);a.ha=0;a.h1=Long_ZERO;a.g4=0.0;}
function ACE(a,b){var c=new GH();Pn(c,a,b);return c;}
function OM(b,c){var d,e,$$je;a:{try{d=Vb(b,EB(c));}catch($$e){$$je=Bb($$e);if($$je instanceof BZ){e=$$je;break a;}else{throw $$e;}}return d;}CA().n(B(242));e.et();return null;}
function Vb(b,c){var d,e,f,g,h,i,$$je;d=BY();e=Ek(c);a:{while(true){try{f=e.ek();if(f===null)break a;g=B8(f,32);if(!f.ej(B(228))&&g.T()>=2){h=g.C(0).c7();if(h.g()==1&&b.fO(h)){i=FT(g.C(1));d.bo(ACE(h.d(0),i));}}continue;}catch($$e){$$je=Bb($$e);f=$$je;}}e.bK();G(f);}e.bK();Wv(d);return d;}
function Wv(b){var c,d,e;c=Long_ZERO;d=b.X();while(d.Y()){e=d.V();c=Long_add(c,e.dt());}d=b.X();while(d.Y()){e=d.V();e.g4=Long_toNumber(e.dt())/Long_toNumber(c);}}
function JO(b,c){var d,e;d=c.X();while(true){if(!d.Y())return null;e=d.V();if(b==e.ci())break;}return e;}
function Pn(a,b,c){M(a);a.ha=b;a.h1=c;}
function O5(a){return a.ha;}
function ON(a){return a.h1;}
function OO(a){return a.g4;}
function GJ(){I.call(this);this.jf=null;}
function ABu(a){var b=new GJ();Zl(b,a);return b;}
function Zl(a,b){a.jf=b;Q(a);}
function ZK(a,b){return MJ(b);}
function H$(){C.call(this);this.dZ=null;}
function IW(a){var b=new H$();QH(b,a);return b;}
function Pp(b){var c,d,e,f,g;BP();c=AFe.data;d=c.length;e=0;while(e<d){f=c[e];if(b.jS(f.bZ())){f.eI(1);g=IW(f);g.fl();return f;}e=e+1|0;}return null;}
function ZO(){var b,c,d,e,f;BP();b=AFf.data;c=b.length;d=0;while(d<c){e=b[d];if(!e.dl().H()){e.eI(1);f=IW(e);f.fl();}d=d+1|0;}}
function Wz(){var b,c,d,e,f;BP();b=AFg.data;c=b.length;d=0;while(d<c){e=b[d];e.eI(1);f=IW(e);f.fl();d=d+1|0;}}
function QH(a,b){M(a);a.dZ=b;}
function W5(a){var b,c,d;b=new XMLHttpRequest();c=CT(ABf(a,b),"stateChanged");b.onreadystatechange=c;d=J().a(B(243)).a(a.dZ.dl()).e();b.open("GET",$rt_ustr(d));b.send();}
function Ke(a,b){a.dZ.lO(b);E2().n(J().a(B(244)).a(a.dZ.dl()).e());V$();}
function V$(){var b,c,d,e,f,g,h,i,j;b=0;c=0;BP();d=AFe.data;e=d.length;f=0;while(f<e){g=d[f];if(g.eY())c=c+1|0;if(g.bH()!==null)b=b+1|0;f=f+1|0;}d=AFf.data;f=d.length;h=0;while(h<f){i=d[h];if(i.eY())c=c+1|0;if(i.bH()!==null)b=b+1|0;h=h+1|0;}d=AFg.data;e=d.length;f=0;while(f<e){j=d[f];if(j.eY())c=c+1|0;if(j.bH()!==null)b=b+1|0;f=f+1|0;}if(!c)c=1;if(b>=c){BJ(null);LU(1);}else BJ(J().a(B(245)).m((100*b|0)/c|0).a(B(246)).e());}
function QW(b,c){Ke(b,c);}
function IU(){C.call(this);}
function Og(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function PC(b,c){return b!==null&&!(typeof b.constructor.$meta==='undefined'?1:0)&&HV(b.constructor,c)?1:0;}
function HV(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(HV(d[e],c))return 1;e=e+1|0;}return 0;}
function PL(b){var c='$$enumConstants$$';B$[c]=RI;B4[c]=X9;PL=function(cls){if(!cls.hasOwnProperty(c)){return null;}if(typeof cls[c]==="function"){cls[c]=cls[c]();}return cls[c];};return PL(b);}
function JX(b){return V5(String.fromCharCode(b));}
function UX(b){return b.$meta.primitive?1:0;}
function SA(b){return b.$meta.enum?1:0;}
function YY(b){return b.$meta.item;}
function UN(b){return $rt_str(b.$meta.name);}
function Du(){var a=this;C.call(a);a.jj=null;a.k7=null;}
function AFh(a,b){var c=new Du();Jd(c,a,b);return c;}
function Jd(a,b,c){var d,e,f,g;d=c.data;M(a);Fm(b);e=d.length;f=0;while(f<e){g=d[f];Fm(g);f=f+1|0;}a.jj=b;a.k7=c.dI();}
function Fm(b){var c,d;if(b.H())G(KO(b));if(!JD(b.d(0)))G(KO(b));c=1;while(c<b.g()){a:{d=b.d(c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(JD(d))break a;else G(KO(b));}}c=c+1|0;}}
function JD(b){return !(b>=48&&b<=57)&&!(b>=97&&b<=122)&&b<65&&b>90?0:1;}
function OC(b){var c;if(b===null)G(Bz(B(247)));Fm(b);c=Go().gn(b.c7());if(c!==null)return c;G(ADf(b));}
function GZ(a,b){var c,d,e,$$je;a:{try{c=a.ka();B7();d=AEL;d=K$(c,d);c=AEL;d=HP(d,c);d=I6(d,b);}catch($$e){$$je=Bb($$e);if($$je instanceof Cl){e=$$je;break a;}else{throw $$e;}}return d;}G(ACH(B(248),e));}
function C8(){C.call(this);this.k3=null;}
var AFb=null;var AEL=null;var AEJ=null;function B7(){B7=Be(C8);N3();}
function LO(a){var b=new C8();Jq(b,a);return b;}
function Jq(a,b){B7();M(a);a.k3=b;}
function N3(){AFb=LO(B(249));AEL=LO(B(250));AEJ=LO(B(251));}
function Kx(){U.call(this);}
function ACL(){var a=new Kx();Ys(a);return a;}
function Ys(a){BB(a);}
function BQ(){U.call(this);}
function Cw(){var a=new BQ();C3(a);return a;}
function Bz(a){var b=new BQ();M6(b,a);return b;}
function C3(a){BB(a);}
function M6(a,b){Df(a,b);}
function JQ(){BQ.call(this);this.jY=null;}
function KO(a){var b=new JQ();VY(b,a);return b;}
function VY(a,b){C3(a);a.jY=b;}
function HA(){S.call(this);this.gq=null;}
function ACX(a){var b=new HA();Sk(b,a);return b;}
function Sk(a,b){Bo(a);a.gq=b;}
function St(a,b,c,d){var e,f;a:{if(b!=d.q()){if(!b)break a;if(d.cU()&&b==d.bw())break a;e=a.gq;f=b-1|0;if(e.hh(c.d(f),c.d(b)))break a;}return (-1);}return a.f.b(b,c,d);}
function Ws(a,b){return 0;}
function Gc(){}
function Kn(){C.call(this);}
function Dx(){BV.call(this);this.gm=null;}
function AFi(a){var b=new Dx();G_(b,a);return b;}
function G_(a,b){CS(a);a.gm=b;}
function K1(){var a=this;Dx.call(a);a.j_=0;a.ga=0;a.bS=null;a.dp=null;a.hx=null;}
function Pg(a,b){var c=new K1();Li(c,a,b);return c;}
function ADx(a){var b=new K1();Rp(b,a);return b;}
function Li(a,b,c){G_(a,b);a.bS=J();a.dp=$rt_createCharArray(32);a.j_=c;a.hx=XW();}
function Rp(a,b){Li(a,b,0);}
function PN(a,b,c,d){var $$je;if(!J_(a))return;a:{try{a.gm.di(b,c,d);break a;}catch($$e){$$je=Bb($$e);if($$je instanceof BZ){}else{throw $$e;}}a.ga=1;}}
function J_(a){if(a.gm===null)a.ga=1;return a.ga?0:1;}
function EW(a,b,c,d){var e,f,g,h,i,j,k,l;e=b.data;f=MG(b,c,d-c|0);g=$rt_createByteArray(Bq(16,V(e.length,1024)));h=UB(g);i=a.hx.kW();B7();j=AEL;i=Gm(i,j);j=AEL;k=LW(i,j);while(true){l=H_(k,f,h,1).dd();a.di(g,0,BG(h));EV(h);if(!l)break;}while(true){l=G1(k,h).dd();a.di(g,0,BG(h));EV(h);if(!l)break;}}
function Ul(a,b){a.dp.data[0]=b;EW(a,a.dp,0,1);}
function YI(a,b){a.bS.a(b);Dz(a);}
function Sr(a,b){a.bS.a(b).bt(10);Dz(a);}
function Zu(a,b){a.bS.id(b).bt(10);Dz(a);}
function SY(a){a.kf(10);}
function Dz(a){var b;b=a.bS.g()<=a.dp.data.length?a.dp:$rt_createCharArray(a.bS.g());a.bS.g6(0,a.bS.g(),b,0);EW(a,b,0,a.bS.g());a.bS.dS(0);}
function FH(){}
function HO(){BU.call(this);}
function ACW(a,b){var c=new HO();OX(c,a,b);return c;}
function OX(a,b,c){Dh(a,b,c);}
function N6(a,b,c,d){var e,f,g,h;e=a.O.T();d.D(a.A,b);f=0;while(true){if(f>=e)return a.f.b(b,c,d);g=a.O.C(f);h=g.bf(0,b,c,d);if(h>=0)break;f=f+1|0;}return (-1);}
function TD(a,b){return 0;}
function K0(){CF.call(this);}
function ABg(a,b){var c=new K0();Xk(c,a,b);return c;}
function Xk(a,b,c){Fb(a,b,c);}
function S4(a,b,c,d){var e,f;e=a.c6(d);if(e!==null&&(b+e.g()|0)<=d.q()){f=!c.e().ir(e,b)?(-1):e.g();if(f<0)return (-1);d.D(a.c2,f);return a.f.b(b+f|0,c,d);}return (-1);}
function WT(a,b,c,d){var e,f,g,h;e=a.c6(d);f=d.bw();if(e!==null&&(b+e.g()|0)<=f){g=c.e();while(true){if(b>f)return (-1);h=g.gO(e,b);if(h<0)return (-1);if(a.f.b(h+e.g()|0,c,d)>=0)break;b=h+1|0;}return h;}return (-1);}
function O_(a,b,c,d,e){var f,g,h;f=a.c6(e);if(f===null)return (-1);g=d.e();a:{while(true){if(c<b)return (-1);h=g.lE(f,c);if(h<0)break a;if(h<b)break a;if(a.f.b(h+f.g()|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function Ow(a,b){return 1;}
function I3(){L.call(this);}
function ADK(){var a=new I3();WX(a);return a;}
function WX(a){R(a);}
function T2(a){return By().J(97,122);}
function Iw(){BN.call(this);this.fJ=null;}
function ABM(a,b,c,d){var e=new Iw();RP(e,a,b,c,d);return e;}
function RP(a,b,c,d,e){C0(a,b,c,d);a.fJ=e;}
function Q5(a,b,c,d){var e,f;e=d.q();f=Fg(a,b,e,c);if(f>=0)e=f;if(e>b)return a.f.bf(b,e,c,d);return a.f.b(b,c,d);}
function NW(a,b,c,d){var e,f,g,h,i;e=d.q();f=a.f.bh(b,c,d);if(f<0)return (-1);g=Fg(a,f,e,c);if(g>=0)e=g;h=a.f.bf(f,e,c,d);if(f<h)f=h;i=f>0?K8(a,b,f-1|0,c):f?(-1):0;if(i>=b)b=i>=f?i:i+1|0;return b;}
function Fg(a,b,c,d){while(true){if(b>=c)return (-1);if(a.fJ.dk(d.d(b)))break;b=b+1|0;}return b;}
function K8(a,b,c,d){while(true){if(c<b)return (-1);if(a.fJ.dk(d.d(c)))break;c=c+(-1)|0;}return c;}
function JL(){L.call(this);}
function ADq(){var a=new JL();XX(a);return a;}
function XX(a){R(a);}
function Z1(a){var b;b=ABu(a);b.y=1;return b;}
function KA(){C.call(this);}
function DS(){C.call(this);}
var AFj=null;var AFk=null;function ME(){ME=Be(DS);Vk();}
function Hc(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;ME();d=$rt_floatToIntBits(b);c.hb=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.fU=0;c.fr=0;return;}g=0;if(f)h=e|8388608;else{h=e<<1;while(Long_eq(Long_and(Long_fromInt(h),Long_fromInt(8388608)),Long_ZERO)){h=h<<1;f=f+(-1)|0;g=g+1|0;}}i=Pw(AFk,f);if(i<0)i= -i-2|0;j=f-AFk.data[i]|0;k=9+j|0;l=Long_fromInt(h);m=Long_shru(Long_mul(l,Long_fromInt(AFj.data[i])),32-k|0).lo;if(m>=1000000000){i=i+1|0;n=f-AFk.data[i]|0;k=9+n|0;m=Long_shru(Long_mul(l,Long_fromInt(AFj.data[i])),
32-k|0).lo;}n=(31-k|0)-g|0;o=n>=0?AFj.data[i]>>>n:AFj.data[i]<< -n;p=(o+1|0)>>1;q=o>>1;if(h==4194304)q=q>>2;r=Ho(m,q);s=KF(m,p);h=BX(r,s);h=h>0?Ce(m/r|0,r):h<0?Ce(m/s|0,s)+s|0:Ce((m+(s/2|0)|0)/s|0,s);if(h>=1000000000){i=i+1|0;h=h/10|0;}else if(h<100000000){i=i+(-1)|0;h=h*10|0;}c.fU=h;c.fr=i-50|0;}
function Ho(b,c){var d,e;ME();d=10;while(d<=c){d=d*10|0;}e=b%d|0;if(e>=(c/2|0))d=d/10|0;return d;}
function KF(b,c){var d,e;ME();d=10;while(d<=c){d=d*10|0;}e=b%d|0;if((d-e|0)>(c/2|0))d=d/10|0;return d;}
function Vk(){var b,c,d,e,f,g,h,i,j,k,l;AFj=$rt_createIntArray(100);AFk=$rt_createIntArray(100);b=2000000000;c=127;d=0;e=b;while(d<50){f=AFj.data;g=d+50|0;f[g]=$rt_udiv(e,20);AFk.data[g]=c;g=$rt_udiv(e,10);h=$rt_umod(g,10);while(g<=b&&!(g&(-2147483648))){g=g<<1;c=c+1|0;h=h<<1;}e=g+(h/10|0)|0;d=d+1|0;}i=214748364;e=127;d=0;while(d<50){j=0;k=b;while(k>i){k=k>>1;j=j+1|0;e=e+(-1)|0;}k=k*10|0;if(j<=0)b=k;else{l=Long_fromInt(b&((1<<j)-1|0));b=Long_add(Long_fromInt(k),Long_shr(Long_mul(l,Long_fromInt(10)),j)).lo;}f
=AFj.data;k=(50-d|0)-1|0;f[k]=$rt_udiv(b,20);AFk.data[k]=e;d=d+1|0;}}
function LA(){L.call(this);}
function ADk(){var a=new LA();Sc(a);return a;}
function Sc(a){R(a);}
function R8(a){return ADG(a);}
function DI(){C.call(this);}
function AFl(){var a=new DI();J3(a);return a;}
function J3(a){M(a);}
function Is(){S.call(this);}
function ACr(){var a=new Is();Vj(a);return a;}
function Vj(a){Bo(a);}
function Y4(a,b,c,d){if(b!=d.ly())return (-1);return a.f.b(b,c,d);}
function AAn(a,b){return 0;}
function KV(){Bx.call(this);}
function AB1(a){var b=new KV();YJ(b,a);return b;}
function YJ(a,b){Cr(a,b.ef(),b.ke(),b.cP());a.w.t(a);}
function ZH(a,b,c,d){var e;while((b+a.B.bb()|0)<=d.q()){e=a.B;if(e.I(b,c)<=0)break;b=b+a.B.bb()|0;}return a.f.b(b,c,d);}
function Pj(a,b,c,d){var e,f,g;e=a.f.bh(b,c,d);if(e<0)return (-1);f=e-a.B.bb()|0;while(f>=b&&a.B.I(f,c)>0){g=f-a.B.bb()|0;e=f;f=g;}return e;}
function EG(){}
function KW(){var a=this;C.call(a);a.fw=null;a.bX=null;}
function ABZ(a){var b=new KW();Vm(b,a);return b;}
function Vm(a,b){var c;M(a);a.bX=b;c=a;b.classObject=c;}
function HR(b){var c;if(b===null)return null;c=b.classObject;if(c===null)c=ABZ(b);return c;}
function QT(a){return a.bX;}
function Uk(a,b){return PC(b,a.bX);}
function ZU(a){if(a.fw===null)a.fw=UN(a.bX);return a.fw;}
function WY(a){return UX(a.bX);}
function Rd(a){return SA(a.bX);}
function N1(a){return HR(YY(a.bX));}
function Sx(a){if(!a.kJ())return null;a.bX.$clinit();return PL(a.bX).dI();}
function LB(){var a=this;C.call(a);a.p=null;a.z=0;}
function AAH(){var a=new LB();R9(a);return a;}
function AB4(a){var b=new LB();OF(b,a);return b;}
function R9(a){M(a);a.p=$rt_createIntArray(0);}
function OF(a,b){M(a);a.p=$rt_createIntArray(((b+32|0)-1|0)/32|0);}
function So(a,b){var c,d;c=b/32|0;if(b>=a.z){C2(a,c+1|0);a.z=b+1|0;}d=a.p.data;d[c]=d[c]|1<<(b%32|0);}
function XK(a,b,c){var d,e,f,g;if(b>c)G(Cq());d=b/32|0;e=c/32|0;if(c>a.z){C2(a,e+1|0);a.z=c;}if(d==e){f=a.p.data;f[d]=f[d]|C9(a,b)&CV(a,c);}else{f=a.p.data;f[d]=f[d]|C9(a,b);g=d+1|0;while(g<e){a.p.data[g]=(-1);g=g+1|0;}f=a.p.data;f[e]=f[e]|CV(a,c);}}
function C9(a,b){var c;c=b%32|0;return (-1)<<c;}
function CV(a,b){var c;c=b%32|0;return !c?0:(-1)>>>(32-c|0);}
function AAF(a,b){var c,d;c=b/32|0;if(c<a.p.data.length){d=a.p.data;d[c]=d[c]&KH((-2),b%32|0);if(b==(a.z-1|0))CJ(a);}}
function O4(a,b,c){var d,e,f,g,h;if(b>c)G(Cq());if(b>=a.z)return;d=V(a.z,c);e=b/32|0;f=d/32|0;if(e==f){g=a.p.data;g[e]=g[e]&(CV(a,b)|C9(a,d));}else{g=a.p.data;g[e]=g[e]&CV(a,b);h=e+1|0;while(h<f){a.p.data[h]=0;h=h+1|0;}g=a.p.data;g[f]=g[f]&C9(a,d);}CJ(a);}
function Pb(a,b){var c;c=b/32|0;return c<a.p.data.length&&a.p.data[c]&1<<(b%32|0)?1:0;}
function ZC(a,b){var c,d,e,f,g;if(b>=a.z)return (-1);c=b/32|0;d=a.p.data[c];e=d>>>(b%32|0);if(e)return CZ(e)+b|0;f=(a.z+31|0)/32|0;g=c+1|0;while(g<f){if(a.p.data[g])return (g*32|0)+CZ(a.p.data[g])|0;g=g+1|0;}return (-1);}
function RM(a,b){var c,d,e,f,g;if(b>=a.z)return b;c=b/32|0;d=a.p.data[c]^(-1);e=d>>>(b%32|0);if(e)return CZ(e)+b|0;f=(a.z+31|0)/32|0;g=c+1|0;while(g<f){if(a.p.data[g]!=(-1))return (g*32|0)+CZ(a.p.data[g]^(-1))|0;g=g+1|0;}return a.z;}
function C2(a,b){var c;if(a.p.data.length>=b)return;c=Bq((b*3|0)/2|0,(a.p.data.length*2|0)+1|0);a.p=Zo(a.p,c);}
function CJ(a){var b,c,d;b=(a.z+31|0)/32|0;a.z=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=EO(a.p.data[c]);if(d<32)break;c=c+(-1)|0;a.z=a.z-32|0;}a.z=a.z-d|0;}}
function QS(a,b){var c,d;c=V(a.p.data.length,b.p.data.length);d=0;while(d<c){if(a.p.data[d]&b.p.data[d])return 1;d=d+1|0;}return 0;}
function X8(a,b){var c,d,e;c=V(a.p.data.length,b.p.data.length);d=0;while(d<c){e=a.p.data;e[d]=e[d]&b.p.data[d];d=d+1|0;}while(c<a.p.data.length){a.p.data[c]=0;c=c+1|0;}a.z=V(a.z,b.z);CJ(a);}
function ZW(a,b){var c,d,e;c=V(a.p.data.length,b.p.data.length);d=0;while(d<c){e=a.p.data;e[d]=e[d]&(b.p.data[d]^(-1));d=d+1|0;}CJ(a);}
function XT(a,b){var c,d,e;a.z=Bq(a.z,b.z);C2(a,(a.z+31|0)/32|0);c=V(a.p.data.length,b.z);d=0;while(d<c){e=a.p.data;e[d]=e[d]|b.p.data[d];d=d+1|0;}}
function Z7(a,b){var c,d,e;a.z=Bq(a.z,b.z);C2(a,(a.z+31|0)/32|0);c=V(a.p.data.length,b.z);d=0;while(d<c){e=a.p.data;e[d]=e[d]^b.p.data[d];d=d+1|0;}CJ(a);}
function Ye(a){return a.z?0:1;}
function F5(){}
function GP(){I.call(this);this.j0=null;}
function ACl(a){var b=new GP();AAl(b,a);return b;}
function AAl(a,b){a.j0=b;Q(a);}
function T1(a,b){return Mm(b);}
function F_(){Bt.call(this);}
function AFm(a){var b=new F_();G$(b,a);return b;}
function G$(a,b){Ck(a,b);}
function O7(a,b,c,d){var e;e=a.c_();d.D(e,b-d.bF(e)|0);return a.f.b(b,c,d);}
function T5(a,b){return 0;}
function Bf(){C.call(this);}
var AFn=null;var AFo=null;var AFp=null;var AFq=null;var AFr=null;var AFs=null;var AFt=null;var AFu=null;var AFv=null;var AFw=null;var AFx=null;var AFy=null;var AFz=null;var AFA=null;var AFB=null;var AFC=0;var AFD=null;var AFE=0;function Bh(){Bh=Be(Bf);Wx();}
function PW(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$$je;Bh();c=AFp;d="v1.27";c.innerHTML=d;BJ(B(252));CG(null);e=B(253);f=$rt_str(AFn.location.href);if(f.fO(B(254))){g=f.e9(f.cy(63)+1|0);h=g.i4(B(255));i=h.data;j=i.length;k=0;while(k<j){a:{l=i[k];m=l.i4(B(256));n=m.data;if(B(257).bz(n[0]))e=n[1];else if(B(258).bz(n[0]))try{AFE=DN(n[1]);break a;}catch($$e){$$je=Bb($$e);if($$je instanceof Ct){}else{throw $$e;}}}k=k+1|0;}}E2().n(J().a(B(259)).a(e).e());AFD=Pp(e);if(AFD!==null)E2().n(J().a(B(259)).a(AFD.bZ()).e());ZO();Wz();o
=AFo.getElementById("layout-option-custom");AFq.options.remove(0);BP();i=AFf.data;j=i.length;k=0;while(k<j){p=i[k];q=o.cloneNode(!!1);c=$rt_ustr(p.bZ());q.text=c;c=!!p.dl().H();q.disabled=c;AFq.options.add(q);k=k+1|0;}AFq.options.add(o);c=AFq;r=ABX();c.addEventListener("change",CT(r,"handleEvent"));s=AFo.getElementById("config-option-custom");AFr.options.remove(0);i=AFg.data;j=i.length;k=0;while(k<j){t=i[k];u=s.cloneNode(!!1);c=$rt_ustr(t.bZ());u.text=c;c=$rt_ustr(t.fq());u.title=c;AFr.options.add(u);k=k+1|
0;}AFr.options.add(s);c=AFr;r=ADI();c.addEventListener("change",CT(r,"handleEvent"));c=AFw;r=AAR();c.addEventListener("click",CT(r,"handleEvent"));c=AFy;r=ADD();c.addEventListener("click",CT(r,"handleEvent"));}
function G2(b){var c,d,e,f;Bh();c=0;a:{while(true){if(c>=AFr.options.length)break a;if(b.bz($rt_str(AFr.options.item(c).text)))break;c=c+1|0;}d=AFr;e=c;d.selectedIndex=e;BP();f=AFg.data[c];Dk(f.bH());}}
function Fr(){var b,c,d;Bh();b=Vx($rt_str(AFq.value));M7(b,$rt_str(AFs.value));LL(b,$rt_str(AFt.value));c=NR(b,null);if(AFz.firstChild!==null)Mi(AFz);d=c.jd(AFo,0);if(d===null)AFz.setAttribute("style","display:none");else{AFz.appendChild(d);AFz.setAttribute("style","display:block");}}
function LU(b){var c,d,e,f;Bh();AFC=b;if(AFC){c=AFq;d=1;c.selectedIndex=d;BP();e=AFf.data[AFq.selectedIndex];Gg(e.bH());c=AFr;d=2;c.selectedIndex=d;f=AFg.data[AFr.selectedIndex];Dk(f.bH());Fr();}}
function LE(){var b,c,d,e,f,g,h,i,$$je;Bh();b=Vx($rt_str(AFq.value));M7(b,$rt_str(AFs.value));LL(b,$rt_str(AFt.value));if(b!==null&&b.le()){if(AFD!==null&&AFD.bH().g()){c=OM(b.d9(),AFD.bH());d=Pr(b.d9(),AFD.bH());e=ABc();f=e.jV(b,c,d);g=NR(b,f.lm());CG(g.jd(AFo,1));a:{try{h=ADV(AFE);i=h.lj(f);BJ(i);break a;}catch($$e){$$je=Bb($$e);if($$je instanceof BZ){}else{throw $$e;}}BJ(B(260));}return;}BJ(B(261));return;}BJ(B(262));}
function Gg(b){var c,d;Bh();if(AFs.firstChild!==null){c=AFs;d=AFs.firstChild;c.removeChild(d);}d=AFs;c=AFo.createTextNode($rt_ustr(b));d.appendChild(c);c=AFs;d=$rt_ustr(b);c.value=d;}
function Dk(b){var c,d;Bh();if(AFt.firstChild!==null){c=AFt;d=AFt.firstChild;c.removeChild(d);}d=AFt;c=AFo.createTextNode($rt_ustr(b));d.appendChild(c);c=AFt;d=$rt_ustr(b);c.value=d;}
function CG(b){Bh();if(AFA.firstChild!==null)Mi(AFA);if(b===null)AFA.setAttribute("style","display:none");else{AFA.appendChild(b);AFA.setAttribute("style","display:block");}}
function BJ(b){var c,d;Bh();if(AFB.firstChild!==null){c=AFB;d=AFB.firstChild;c.removeChild(d);}if(b!==null){c=AFB;d=$rt_ustr(b);c.innerHTML=d;}else{c=AFD===null?B(263):J().a(B(264)).a(AFD.fq()).e();d=AFB;c=$rt_ustr(J().a(c).a(B(265)).e());d.innerHTML=c;}}
function Ev(){Bh();return AFq;}
function L$(b){Bh();G2(b);}
function Dm(){Bh();Fr();}
function Fp(){Bh();return AFr;}
function E0(){Bh();return AFs;}
function E1(){Bh();return AFu;}
function Eq(){Bh();return AFt;}
function Gd(){Bh();return AFv;}
function Mc(){Bh();return AFx;}
function G8(){Bh();return AFC;}
function Kg(){Bh();LE();}
function Wx(){AFn=window;AFo=Zq();AFp=AFo.getElementById("version-text");AFq=AFo.getElementById("layout-select");AFr=AFo.getElementById("config-select");AFs=AFo.getElementById("layout-input");AFt=AFo.getElementById("config-input");AFu=AFo.getElementById("modal-layout-input");AFv=AFo.getElementById("modal-config-input");AFw=AFo.getElementById("save-input-button");AFx=AFo.getElementById("close-input-button");AFy=AFo.getElementById("analyze-button");AFz=AFo.getElementById("keyboard-panel-fingers");AFA=AFo.getElementById("keyboard-panel-heatmap");AFB
=AFo.getElementById("output-panel");AFC=0;AFE=5;}
function D6(){BO.call(this);}
var AFF=0.0;var AFG=null;function AFH(){AFH=Be(D6);Ru();}
function Ru(){AFF=NaN;AFG=D($rt_floatcls());}
function H5(){C.call(this);}
function EL(b,c){var d,e,f,g;d=b.data;e=$rt_createCharArray(c);f=V(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function FP(b,c){var d,e,f,g;d=b.data;e=$rt_createByteArray(c);f=V(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function Zo(b,c){var d,e,f,g;d=b.data;e=$rt_createIntArray(c);f=V(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function Mb(b,c){var d,e,f,g;d=b.data;e=I4(Cf(b).eA(),c);f=V(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function Vi(b,c,d,e){var f,g;if(c>d)G(Cw());while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function DE(b,c){Vi(b,0,b.data.length,c);}
function UU(b,c,d,e){var f,g;if(c>d)G(Cw());while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function Se(b,c){UU(b,0,b.data.length,c);}
function Pw(b,c){return QV(b,0,b.data.length,c);}
function QV(b,c,d,e){var f,g,h,i;if(c>d)G(Cw());f=d-1|0;while(true){g=b.data;h=(c+f|0)/2|0;i=g[h];if(i==e)break;if(e>=i){c=h+1|0;if(c>f)return  -h-2|0;}else{f=h-1|0;if(f<c)return  -h-1|0;}}return h;}
function B2(){Z.call(this);this.cb=0;}
function JT(a){var b=new B2();R7(b,a);return b;}
function R7(a,b){BH(a);a.cb=b;}
function Ze(a){return 1;}
function Xn(a,b,c){return a.cb!=c.d(b)?(-1):1;}
function UO(a,b,c,d){var e,f,g,h;if(!(c instanceof Bk))return C7(a,b,c,d);e=c;f=d.q();while(true){if(b>=f)return (-1);g=e.cF(a.cb,b);if(g<0)return (-1);h=a.f;b=g+1|0;if(h.b(b,c,d)>=0)break;}return g;}
function Zr(a,b,c,d,e){var f,g;if(!(d instanceof Bk))return Db(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);g=f.eq(a.cb,c);if(g<0)break a;if(g<b)break a;if(a.f.b(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function Rc(a){return a.cb;}
function Wh(a,b){if(b instanceof B2)return b.ci()!=a.cb?0:1;if(!(b instanceof B3)){if(b instanceof BK)return b.j(a.cb);if(!(b instanceof B1))return 1;return 0;}return b.I(0,FU(a.cb))<=0?0:1;}
function GB(){Z.call(this);this.iU=0;}
function ABw(a){var b=new GB();Vc(b,a);return b;}
function Vc(a,b){BH(a);a.Q=2;a.iU=Co(Cn(b));}
function Un(a,b,c){var d,e,f;d=b+1|0;e=c.d(b);f=c.d(d);return a.iU!=Co(Cn(BT(e,f)))?(-1):2;}
function Ml(){BV.call(this);}
function AC$(){var a=new Ml();OG(a);return a;}
function OG(a){CS(a);}
function N$(a,b){$rt_putStdout(b);}
function DF(){C.call(this);}
var AFI=null;var AFJ=null;function E2(){if(AFI===null)AFI=Pg(AC$(),0);return AFI;}
function CA(){if(AFJ===null)AFJ=Pg(ACU(),0);return AFJ;}
function Gr(b,c,d,e,f){var g,h,i,j,k,l,m,n;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=IY(b)){g=e+f|0;if(g<=IY(d)){a:{b:{if(b!==d){h=Cf(b).eA();i=Cf(d).eA();if(h!==null&&i!==null){if(h===i)break b;if(!h.eo()&&!i.eo()){j=b;k=0;g=c;while(k<f){l=j.data;m=g+1|0;n=l[g];if(!i.jP(n)){F9(b,c,d,e,k);G(J$());}k=k+1|0;g=m;}F9(b,c,d,e,f);return;}if(!h.eo())break a;if(i.eo())break b;else break a;}G(J$());}}F9(b,c,d,e,f);return;}G(J$());}}G(Cq());}G(SQ(B(266)));}
function F9(b,c,d,e,f){if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}} else {c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function IG(){var a=this;I.call(a);a.eF=0;a.hE=null;a.fW=null;}
function AAT(a,b,c){var d=new IG();Zb(d,a,b,c);return d;}
function Zb(a,b,c,d){a.fW=b;a.eF=c;a.hE=d;Q(a);}
function Um(a,b){return !(a.eF^a.fW.v.bQ(b))&&!(a.eF^a.fW.bO^a.hE.j(b))?0:1;}
function IN(){var a=this;I.call(a);a.i$=0;a.iY=null;a.iv=null;a.lD=null;}
function AD0(a,b,c,d){var e=new IN();VT(e,a,b,c,d);return e;}
function VT(a,b,c,d,e){a.lD=b;a.i$=c;a.iY=d;a.iv=e;Q(a);}
function Ni(a,b){return a.i$^(!a.iY.j(b)&&!a.iv.j(b)?0:1)?0:1;}
function II(){var a=this;I.call(a);a.i5=null;a.jn=null;}
function ACG(a,b){var c=new II();NK(c,a,b);return c;}
function NK(a,b,c){a.jn=b;a.i5=c;Q(a);}
function Tm(a,b){return a.i5.j(b);}
function IH(){var a=this;I.call(a);a.eS=0;a.h6=null;a.e5=null;}
function ACh(a,b,c){var d=new IH();N5(d,a,b,c);return d;}
function N5(a,b,c,d){a.e5=b;a.eS=c;a.h6=d;Q(a);}
function NH(a,b){return !(a.eS^a.e5.v.bQ(b))&&!(a.eS^a.e5.bO^a.h6.j(b))?1:0;}
function JB(){var a=this;L.call(a);a.iO=0;a.je=0;}
function H(a,b){var c=new JB();Yn(c,a,b);return c;}
function Yn(a,b,c){R(a);a.iO=b;a.je=c;}
function AAL(a){var b;b=By().J(a.iO,a.je);return b;}
function IJ(){var a=this;I.call(a);a.ij=null;a.lL=null;}
function ACC(a,b){var c=new IJ();NZ(c,a,b);return c;}
function NZ(a,b,c){a.lL=b;a.ij=c;Q(a);}
function WZ(a,b){return a.ij.j(b);}
function Jt(){L.call(this);}
function ABz(){var a=new Jt();Rw(a);return a;}
function Rw(a){R(a);}
function YE(a){return By().J(48,57).J(97,102).J(65,70);}
function IQ(){var a=this;I.call(a);a.gZ=null;a.g8=0;a.gP=null;}
function ABb(a,b,c){var d=new IQ();TR(d,a,b,c);return d;}
function TR(a,b,c,d){a.gP=b;a.gZ=c;a.g8=d;Q(a);}
function S$(a,b){return !a.gZ.j(b)&&!(a.g8^a.gP.v.bQ(b))?1:0;}
function IM(){var a=this;I.call(a);a.iH=0;a.h_=null;a.h3=null;a.kk=null;}
function AC6(a,b,c,d){var e=new IM();OH(e,a,b,c,d);return e;}
function OH(a,b,c,d,e){a.kk=b;a.iH=c;a.h_=d;a.h3=e;Q(a);}
function Uo(a,b){return a.iH^(!a.h_.j(b)&&!a.h3.j(b)?0:1);}
function IL(){var a=this;I.call(a);a.ih=null;a.kG=null;}
function ADg(a,b){var c=new IL();N2(c,a,b);return c;}
function N2(a,b,c){a.kG=b;a.ih=c;Q(a);}
function NJ(a,b){return a.ih.j(b)?0:1;}
function I$(){W.call(this);this.gj=null;}
function AB8(a){var b=new I$();SJ(b,a);return b;}
function SJ(a,b){BD(a);a.gj=b;}
function Qb(a,b,c,d){var e,f,g,h,i;e=d.q();f=b+1|0;if(f>e){d.by=1;return (-1);}g=c.d(b);if(Bm(g)){h=b+2|0;if(h<=e){i=c.d(f);if(CU(g,i))return a.gj.dk(BT(g,i))?(-1):a.f.b(h,c,d);}}return a.gj.dk(g)?(-1):a.f.b(f,c,d);}
function TW(a,b){a.f=b;}
function Ng(a){return (-2147483602);}
function ZS(a,b){return 1;}
function IO(){var a=this;I.call(a);a.gz=null;a.i2=0;a.hy=null;}
function ABK(a,b,c){var d=new IO();WL(d,a,b,c);return d;}
function WL(a,b,c,d){a.hy=b;a.gz=c;a.i2=d;Q(a);}
function W3(a,b){return !a.gz.j(b)&&!(a.i2^a.hy.v.bQ(b))?0:1;}
function Gs(){var a=this;C.call(a);a.ks=null;a.h8=null;a.dB=null;a.S=null;a.ea=0;a.ec=0;}
function ACO(a,b){var c=new Gs();Nu(c,a,b);return c;}
function Es(a,b){var c,d;c=a.dB.g();if(b>=0&&b<=c){d=Jv(a,b);if(d>=0&&a.S.jv()){a.S.kH();return 1;}a.S.bC=(-1);return 0;}G(Bp(EK(b)));}
function Jv(a,b){var c;a.S.ko();a.S.d6(1);a.S.kA(b);c=a.h8.bh(b,a.dB,a.S);if(c==(-1))a.S.by=1;return c;}
function K6(a){var b,c;b=a.dB.g();if(!HH(a))b=a.ec;if(a.S.bC>=0&&a.S.ii()==1){a.S.bC=a.S.eb();if(a.S.eb()==a.S.hG()){c=a.S;c.bC=c.bC+1|0;}return a.S.bC<=b&&Es(a,a.S.bC)?1:0;}return Es(a,a.ea);}
function MY(a,b){return a.S.eZ(b);}
function Hk(a,b){return a.S.gc(b);}
function Mj(a){return MY(a,0);}
function Kj(a){return Hk(a,0);}
function HH(a){return a.S.df();}
function Nu(a,b,c){var d,e,f,g,h;M(a);a.ea=(-1);a.ec=(-1);a.ks=b;a.h8=b.eH;a.dB=c;a.ea=0;a.ec=a.dB.g();d=new Fl;e=a.ea;f=a.ec;g=Ha(b);h=K3(b);Hz(d,c,e,f,g,h,If(b));a.S=d;}
function B0(){C.call(this);}
var AFK=null;var AFL=null;var AFM=null;var AFN=null;var AFO=null;var AFP=null;function O(){O=Be(B0);PB();}
function FU(b){var c,d;O();c=new Bk;d=$rt_createCharArray(1);d.data[0]=b;Dt(c,d);return c;}
function G4(b){O();return b>0&&b<=65535?1:0;}
function D1(b){O();return b>=65536&&b<=1114111?1:0;}
function Bm(b){O();return (b&64512)!=55296?0:1;}
function Bu(b){O();return (b&64512)!=56320?0:1;}
function D5(b){O();return !Bm(b)&&!Bu(b)?0:1;}
function CU(b,c){O();return Bm(b)&&Bu(c)?1:0;}
function BT(b,c){O();return ((b&1023)<<10|c&1023)+65536|0;}
function Iv(b,c){O();return IP(b,c,b.data.length);}
function IP(b,c,d){var e,f;O();if(c<(d-1|0)){e=b.data;if(Bm(e[c])){f=c+1|0;if(Bu(e[f]))return BT(e[c],e[f]);}}return b.data[c];}
function CR(b){var c;O();c=b-65536|0;return (55296|c>>10&1023)&65535;}
function CH(b){O();return (56320|b&1023)&65535;}
function BI(b){O();return Co(b)&65535;}
function Co(b){O();return JX(b).toLowerCase().charCodeAt(0);}
function BA(b){O();return Cn(b)&65535;}
function Cn(b){O();return JX(b).toUpperCase().charCodeAt(0);}
function E9(b,c){O();return J9(b,c);}
function J9(b,c){var d;O();if(c>=2&&c<=36){d=Fh(b);if(d>=c)d=(-1);return d;}return (-1);}
function Ei(b){O();return Fh(b);}
function Fh(b){var c,d,e,f,g,h,i,j;O();c=GW();d=c.data;e=0;f=(d.length/2|0)-1|0;while(f>=e){g=(e+f|0)/2|0;h=g*2|0;i=d[h];j=BX(b,i);if(j>0)e=g+1|0;else{if(j>=0)return d[h+1|0];f=g-1|0;}}return (-1);}
function Eb(b,c){O();if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function MF(b){O();return Bn(b)!=9?0:1;}
function GW(){O();if(AFL===null)AFL=Tp((GK().value!==null?$rt_str(GK().value):null));return AFL;}
function GK(){O();if(AFO===null)AFO=LJ();return AFO;}
function LM(){O();if(AFM===null)AFM=AAG((KB().value!==null?$rt_str(KB().value):null));return AFM;}
function KB(){O();if(AFP===null)AFP=MV();return AFP;}
function CL(b){var c,d;O();if(b<65536){c=$rt_createCharArray(1);c.data[0]=b&65535;return c;}c=$rt_createCharArray(2);d=c.data;d[0]=CR(b);d[1]=CH(b);return c;}
function Lg(b){var c;O();a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}c=1;break a;}c=0;}return c;}
function C_(b){O();return Bn(b);}
function Bn(b){var c,d,e,f,g,h;O();if(G4(b)&&D5(b&65535))return 19;c=LM();d=c.data;e=0;f=d.length-1|0;while(e<=f){g=(e+f|0)/2|0;h=d[g];if(b>=h.gE)e=g+1|0;else{if(b>=h.fN)return h.ig.data[b-h.fN|0];f=g-1|0;}}return 0;}
function Iq(b){O();return FO(b);}
function FO(b){O();return Bn(b)!=2?0:1;}
function Gv(b){O();return Bn(b)!=1?0:1;}
function Hf(b){O();return Bn(b)!=3?0:1;}
function MW(b){O();return !Bn(b)?0:1;}
function Lk(b){O();switch(Bn(b)){case 1:case 2:case 3:case 4:case 5:break;default:return 0;}return 1;}
function F2(b){O();return EN(b);}
function EN(b){O();a:{switch(Bn(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function Mm(b){O();a:{switch(Bn(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break a;default:break a;}return 1;}return CK(b);}
function MJ(b){O();a:{switch(Bn(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break a;default:break a;}return 1;}return CK(b);}
function Ly(b){O();a:{switch(Bn(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break a;default:break a;}return 1;}return 0;}
function L2(b){O();a:{switch(Bn(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break a;default:break a;}return 1;}return CK(b);}
function KE(b){O();a:{switch(Bn(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break a;default:break a;}return 1;}return CK(b);}
function CK(b){O();a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Bn(b)!=16?0:1;}
function Fs(b){O();switch(Bn(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function I9(b){O();return FY(b);}
function FY(b){O();switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return Fs(b);}return 1;}
function PB(){AFK=D($rt_charcls());AFN=F(B0,128);}
function LJ(){return {"value":"oD#*% .%%2%)6%-:%1>%5B%9F%=J%AN%Eo%Is%Mw%Q{%U!\'Y&\'^*\'b.\'f2\'j6\'n:\'r>\'vB\'zF\'!#J\'&#N\'*#R\'.#V\'2#Z\'6#_\':#c\'>#g\'B#k\'F#o\'J#s\'N#w\'R#6)I:)M>)QB)UF)YJ)^N)bR)fV)jZ)n_)rc)vg)zk)!#o)&#s)*#w).#{)2#!+6#&+:#*+>#.+B#2+F#6+J#:+N#>+R#{R# !T#%&T#)*T#-.T#12T#56T#9:T#=>T#ABT#E6a# :a#%>a#)Ba#-Fa#1Ja#5Na#9Ra#=Va#AZa#E:s# >s#%Bs#)Fs#-Js#1Ns#5Rs#9Vs#=Zs#A_s#EZ:% _:%%c:%)g:%-k:%1o:%5s:%9w:%={:%A!<%E2F% 6F%%:F%)>F%-BF%1FF%5JF%9NF%=RF%AVF%EgP% kP%%oP%)sP%-wP%1{P%5!R%9&R%=*R%A.R%E>]% B]%%F]%)J]%-N]%1R]%5V]%9Z]%=_]%Ac]%Esg% wg%%{g%)!i%-&"
+"i%1*i%5.i%92i%=6i%A:i%EJs% Ns%%Rs%)Vs%-Zs%1_s%5cs%9gs%=ks%Aos%E!!\' &!\'%*!\').!\'-2!\'16!\'5:!\'9>!\'=B!\'AF!\'EV,\' Z,\'%_,\')c,\'-g,\'1k,\'5o,\'9s,\'=w,\'A{,\'E.8\' 28\'%68\'):8\'->8\'1B8\'5F8\'9J8\'=N8\'AR8\'EcB\' gB\'%kB\')oB\'-sB\'1wB\'5{B\'9!D\'=&D\'A*D\'E>L\' BL\'%FL\')JL\'-NL\'1RL\'5VL\'9ZL\'=_L\'AcL\'EsV\' wV\'%{V\')!X\'-&X\'1*X\'5.X\'92X\'=6X\'A:X\'EB_\' F_\'%J_\')N_\'-R_\'1V_\'5Z_\'9__\'=c_\'Ag_\'Esw\' ww\'%{w\')!y\'-&y\'1*y\'5.y\'92y\'=6y\'A:y\'EB!) F!)%J!))N!)-R!)1V!)5Z!)9_!)=c!)Ag!)Egi+ ki+%oi+)si+-wi+1{i+5!k+9&k+=*k+A.k+Eom+ sm+%wm+){m+-!o+1&o+5*o+9.o+=2o+A6o+E>,- B,-%F"
+",-)J,--N,-1R,-5V,-9Z,-=_,-Ac,-E>8- B8-%F8-)J8--N8-1R8-5V8-9Z8-=_8-Ac8-E{F- !H-%&H-)*H--.H-12H-56H-9:H-=>H-ABH-E_H- cH-%gH-)kH--oH-1sH-5wH-9{H-=!J-A&J-E!Z- &Z-%*Z-).Z--2Z-16Z-5:Z-9>Z-=BZ-AFZ-E2c- 6c-%:c-)>c--Bc-1Fc-5Jc-9Nc-=Rc-AVc-EJo- No-%Ro-)Vo--Zo-1_o-5co-9go-=ko-Aoo-E.q- 2q-%6q-):q-->q-1Bq-5Fq-9Jq-=Nq-ARq-E&4r *4r%.4r)24r-64r1:4r5>4r9B4r=F4rAJ4rE{or !qr%&qr)*qr-.qr12qr56qr9:qr=>qrABqrE&ur *ur%.ur)2ur-6ur1:ur5>ur9Bur=FurAJurE**t .*t%2*t)6*t-:*t1>*t5B*t9F*t=J*tAN*tEN,t R,t%V,t)Z,t-_,t1c,t5g,t9k,t=o,tAs,tE_"
+"4t c4t%g4t)k4t-o4t1s4t5w4t9{4t=!6tA&6tEgXt kXt%oXt)sXt-wXt1{Xt5!Zt9&Zt=*ZtA.ZtE{c@# !e@#%&e@#)*e@#-.e@#12e@#56e@#9:e@#=>e@#ABe@#Ece@#Ige@#Mke@#Qoe@#Use@#Ywe@#^{e@#b!g@#f&g@#j*g@#n.g@#r2g@#v6g@#z:g@#!#>g@#&#Bg@#*#Fg@#.#Jg@#2#Ng@#6#Rg@#:#Vg@#>#Zg@#B#_g@#F#cg@#J#gg@#N#kg@#R#*i@#I.i@#M2i@#Q6i@#U:i@#Y>i@#^Bi@#bFi@#fJi@#jNi@#nRi@#rVi@#vZi@#z_i@#!#ci@#&#gi@#*#ki@#.#oi@#2#si@#6#wi@#:#{i@#>#!k@#B#&k@#F#*k@#J#.k@#N#2k@#R#s&D# w&D#%{&D#)!(D#-&(D#1*(D#5.(D#92(D#=6(D#A:(D#E2.H# 6.H#%:.H#)>.H#-B.H#1F.H#5J.H#9N.H#=R.H#AV."
+"H#EwuH# {uH#%!wH#)&wH#-*wH#1.wH#52wH#96wH#=:wH#A>wH#Ew$J# {$J#%!&J#)&&J#-*&J#1.&J#52&J#96&J#=:&J#A>&J#E{*J# !,J#%&,J#)*,J#-.,J#12,J#56,J#9:,J#=>,J#AB,J#E_8J# c8J#%g8J#)k8J#-o8J#1s8J#5w8J#9{8J#=!:J#A&:J#E2RJ# 6RJ#%:RJ#)>RJ#-BRJ#1FRJ#5JRJ#9NRJ#=RRJ#AVRJ#ENqJ# RqJ#%VqJ#)ZqJ#-_qJ#1cqJ#5gqJ#9kqJ#=oqJ#AsqJ#E&}J# *}J#%.}J#)2}J#-6}J#1:}J#5>}J#9B}J#=F}J#AJ}J#Eg@L# k@L#%o@L#)s@L#-w@L#1{@L#5!BL#9&BL#=*BL#A.BL#EZJL# _JL#%cJL#)gJL#-kJL#1oJL#5sJL#9wJL#={JL#A!LL#ENTL# RTL#%VTL#)ZTL#-_TL#1cTL#5gTL#9kTL#=oTL#AsTL#E:{L# >{L#"
+"%B{L#)F{L#-J{L#1N{L#5R{L#9V{L#=Z{L#A_{L#ERkN# VkN#%ZkN#)_kN#-ckN#1gkN#5kkN#9okN#=skN#AwkN#E_$P# c$P#%g$P#)k$P#-o$P#1s$P#5w$P#9{$P#=!&P#A&&P#E.,P# 2,P#%6,P#):,P#->,P#1B,P#5F,P#9J,P#=N,P#AR,P#EFau# Jau#%Nau#)Rau#-Vau#1Zau#5_au#9cau#=gau#Akau#Eouu# suu#%wuu#){uu#-!wu#1&wu#5*wu#9.wu#=2wu#A6wu#EF0N% J0N%%N0N%)R0N%-V0N%1Z0N%5_0N%9c0N%=g0N%Ak0N%Eo0N% s0N%%w0N%){0N%-!2N%1&2N%5*2N%9.2N%=22N%A62N%E:2N% >2N%%B2N%)F2N%-J2N%1N2N%5R2N%9V2N%=Z2N%A_2N%Ec2N% g2N%%k2N%)o2N%-s2N%1w2N%5{2N%9!4N%=&4N%A*4N%E.4N% 24N%%64N%):4N%->"
+"4N%1B4N%5F4N%9J4N%=N4N%AR4N%ERJR% VJR%%ZJR%)_JR%-cJR%1gJR%5kJR%9oJR%=sJR%AwJR%E>qR% BqR%%FqR%)JqR%-NqR%1RqR%5VqR%9ZqR%=_qR%AcqR%E:FV% >FV%%BFV%)FFV%-JFV%1NFV%5RFV%9VFV%=ZFV%A_FV%E"};}
function MV(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
function ADs(){var a=new K_();P8(a);return a;}
function P8(a){BD(a);}
function Zp(a,b,c,d){var e,f,g,h,i;e=d.q();f=b+1|0;if(f>e){d.by=1;return (-1);}g=c.d(b);if(Bm(g)){h=b+2|0;if(h<=e){i=c.d(f);if(CU(g,i))return a.f.b(h,c,d);}}return a.f.b(f,c,d);}
function RB(a,b){a.f=b;}
function PT(a){return (-2147483602);}
function Ry(a,b){return 1;}
function GO(){var a=this;Z.call(a);a.iz=0;a.g7=0;}
function Sd(a){var b=new GO();Tu(b,a);return b;}
function Tu(a,b){BH(a);a.iz=b;a.g7=C6(b);}
function Op(a,b,c){return a.iz!=c.d(b)&&a.g7!=c.d(b)?(-1):1;}
function B1(){var a=this;Z.call(a);a.es=0;a.d$=0;a.dX=0;}
function ABE(a){var b=new B1();ZQ(b,a);return b;}
function ZQ(a,b){var c,d;BH(a);a.Q=2;a.dX=b;c=CL(b);d=c.data;a.es=d[0];a.d$=d[1];}
function Te(a,b,c){var d,e,f;d=b+1|0;e=c.d(b);f=c.d(d);return a.es==e&&a.d$==f?2:(-1);}
function Pv(a,b,c,d){var e,f,g,h;if(!(c instanceof Bk))return C7(a,b,c,d);e=c;f=d.q();while(b<f){g=e.cF(a.es,b);if(g<0)return (-1);b=g+1|0;if(b>=f)continue;h=e.d(b);if(a.d$==h&&a.f.b(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function R4(a,b,c,d,e){var f,g,h;if(!(d instanceof Bk))return Db(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);g=f.eq(a.d$,c);h=g+(-1)|0;if(h<0)break a;if(h<b)break a;if(a.es==f.d(h)&&a.f.b(h+2|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function N_(a){return a.dX;}
function SU(a,b){if(b instanceof B1)return b.gk()!=a.dX?0:1;if(b instanceof BK)return b.j(a.dX);if(b instanceof B2)return 0;if(!(b instanceof B3))return 1;return 0;}
function G9(){I.call(this);this.lP=null;}
function AB3(a){var b=new G9();UM(b,a);return b;}
function UM(a,b){a.lP=b;Q(a);}
function Xt(a,b){return FO(b);}
function Mv(){var a=this;L.call(a);a.fy=0;a.eW=0;a.gX=0;}
function Dc(a,b){var c=new Mv();UA(c,a,b);return c;}
function ADv(a,b,c){var d=new Mv();Nz(d,a,b,c);return d;}
function UA(a,b,c){R(a);a.eW=c;a.fy=b;}
function Nz(a,b,c,d){R(a);a.gX=d;a.eW=c;a.fy=b;}
function Ny(a){var b;b=ABr(a.fy);if(a.gX)b.K.d7(0,2048);b.y=a.eW;return b;}
function BK(){var a=this;W.call(a);a.b1=null;a.lR=0;}
function Zx(a){var b=new BK();Iu(b,a);return b;}
function Iu(a,b){BD(a);a.b1=b.c8();a.lR=b.G;}
function UV(a,b,c,d){var e,f,g,h,i;e=d.q();if(b<e){f=b+1|0;g=c.d(b);if(a.j(g)){h=a.f.b(f,c,d);if(h>0)return h;}if(f<e){h=f+1|0;i=c.d(f);if(CU(g,i)&&a.j(BT(g,i)))return a.f.b(h,c,d);}}return (-1);}
function V2(a,b){return a.b1.j(b);}
function P5(a,b){if(b instanceof B1)return DW(a.b1,b.gk());if(b instanceof B2)return DW(a.b1,b.ci());if(b instanceof BK)return CW(a.b1,b.b1);if(!(b instanceof B3))return 1;return CW(a.b1,b.fc());}
function Zk(a){return a.b1;}
function Vd(a,b){a.f=b;}
function Vf(a,b){return 1;}
function GY(){BK.call(this);}
function Pt(a){var b=new GY();TI(b,a);return b;}
function TI(a,b){Iu(a,b);}
function Y0(a,b){return a.b1.j(Co(Cn(b)));}
function Ne(){L.call(this);}
function AAX(){var a=new Ne();S0(a);return a;}
function S0(a){R(a);}
function NT(a){var b;b=ABk(a);b.y=1;return b;}
function B_(){C.call(this);}
var AFQ=null;var AFR=null;function AFS(){var a=new B_();Fk(a);return a;}
function Fk(a){M(a);}
function Fo(b){if(!(b&1)){if(AFR!==null)return AFR;AFR=ACR();return AFR;}if(AFQ!==null)return AFQ;AFQ=ABV();return AFQ;}
function E6(){var a=this;W.call(a);a.b5=null;a.fs=null;a.dn=0;}
function WE(a,b){var c=new E6();OK(c,a,b);return c;}
function OK(a,b,c){BD(a);a.b5=b;a.dn=c;}
function NL(a,b){a.f=b;}
function FI(a){if(a.fs===null)a.fs=GC(a.b5);return a.fs;}
function NM(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;e=d.q();f=0;g=$rt_createIntArray(3);h=(-1);i=(-1);if(b>=e)return (-1);j=b+1|0;k=c.d(b);l=TK(k);if(l!==null){m=l.data;n=0;if(m.length!=a.dn)return (-1);while(true){if(n>=a.dn)return a.f.b(j,c,d);if(m[n]!=a.b5.data[n])break;n=n+1|0;}return (-1);}o=g.data;o[f]=k;p=k-4352|0;if(p>=0&&p<19){if(j<e){k=c.d(j);h=k-4449|0;}if(h>=0&&h<21){q=j+1|0;o[1]=k;if(q<e){k=c.d(q);i=k-4519|0;}if(i>=0&&i<28){r=q+1|0;o[2]=k;if(a.dn==3&&o[0]==a.b5.data[0]&&o[1]==a.b5.data[1]&&o[2]
==a.b5.data[2]){s=a.f;r=s.b(r,c,d);}else r=(-1);return r;}if(a.dn==2&&o[0]==a.b5.data[0]&&o[1]==a.b5.data[1]){s=a.f;r=s.b(q,c,d);}else r=(-1);return r;}return (-1);}return (-1);}
function Rz(a,b){var c,d;a:{if(b instanceof E6){c=b;if(!FI(c).bz(FI(a))){d=0;break a;}}d=1;}return d;}
function WA(a,b){return 1;}
function Ds(){CE.call(this);}
function AFT(a,b,c){var d=new Ds();GE(d,a,b,c);return d;}
function GE(a,b,c,d){Fy(a,b);a.L=c;a.bM=d;}
function My(b){if(b>=0)return ABq(b);G(Bz(J().a(B(267)).m(b).e()));}
function MG(b,c,d){return ABU(0,b.data.length,b,c,c+d|0,0);}
function O3(b){return MG(b,0,b.data.length);}
function PM(a,b,c,d){var e,f,g,h,i;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Bp(J().a(B(268)).m(g).a(B(236)).m(f).e()));if(X(a)<d)G(Yi());if(d<0)G(Bp(J().a(B(237)).m(d).a(B(238)).e()));h=a.L;i=0;while(i<d){g=c+1|0;f=h+1|0;e[c]=a.lq(h);i=i+1|0;c=g;h=f;}a.L=a.L+d|0;return a;}}e=b.data;G(Bp(J().a(B(239)).m(c).a(B(23)).m(e.length).a(B(240)).e()));}
function SC(a,b){return a.iE(b,0,b.data.length);}
function AAm(a,b,c,d){var e,f,g,h,i;if(a.dN())G(Gw());if(X(a)<d)G(I5());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Bp(J().a(B(269)).m(g).a(B(236)).m(f).e()));if(d<0)G(Bp(J().a(B(237)).m(d).a(B(238)).e()));h=a.L;i=0;while(i<d){g=h+1|0;f=c+1|0;a.hi(h,e[c]);i=i+1|0;h=g;c=f;}a.L=a.L+d|0;return a;}}e=b.data;G(Bp(J().a(B(239)).m(c).a(B(23)).m(e.length).a(B(240)).e()));}
function QF(a,b,c,d){var e,f,g,h,i,j;if(a.dN())G(Gw());e=d-c|0;if(X(a)<e)G(I5());if(c>=0&&c<b.g()){if(d>b.g()){f=new C5;g=J().a(B(269)).m(d).a(B(270));L3(f,g.m(b.g()).e());G(f);}if(c>d)G(Bp(J().a(B(271)).m(c).a(B(272)).m(d).e()));h=a.L;while(c<d){i=h+1|0;j=c+1|0;a.hi(h,b.d(c));h=i;c=j;}a.L=a.L+e|0;return a;}G(Bp(J().a(B(271)).m(c).a(B(23)).m(b.g()).a(B(240)).e()));}
function DT(a,b){return a.lk(b,0,b.g());}
function IR(a){return a.jB();}
function E8(a){return a.lB();}
function G7(a){MI(a);return a;}
function Np(a,b){FF(a,b);return a;}
function DR(){Ds.call(this);}
function AFU(a,b,c){var d=new DR();Jr(d,a,b,c);return d;}
function Jr(a,b,c,d){GE(a,b,c,d);}
function Zz(a){return a.kS();}
function L1(){var a=this;DR.call(a);a.iV=0;a.fK=0;a.ew=null;}
function ABq(a){var b=new L1();Rq(b,a);return b;}
function ABU(a,b,c,d,e,f){var g=new L1();M0(g,a,b,c,d,e,f);return g;}
function Rq(a,b){M0(a,0,b,$rt_createCharArray(b),0,b,0);}
function M0(a,b,c,d,e,f,g){Jr(a,c,e,f);a.fK=b;a.iV=g;a.ew=d;}
function Qj(a,b){return a.ew.data[b+a.fK|0];}
function Nm(a,b,c){a.ew.data[b+a.fK|0]=c;}
function Qa(a){return 1;}
function Wd(a){return a.ew;}
function Y5(a){return a.iV;}
function M2(){L.call(this);}
function ADE(){var a=new M2();OY(a);return a;}
function OY(a){R(a);}
function XB(a){return By().J(33,64).J(91,96).J(123,126);}
function EP(){var a=this;C.call(a);a.cC=null;a.eE=null;}
var AFV=null;function AA4(){AA4=Be(EP);Nt();}
function NR(a,b){var c=new EP();Gx(c,a,b);return c;}
function Gx(a,b,c){AA4();M(a);a.cC=b;a.eE=c;}
function Tf(a,b,c){var d,e,f,g,h,i,j,k,l;d=b.createElement("div");e=0;while(e<a.cC.cM()){f=0;while(f<a.cC.iw()){g=(5-a.cC.cM()|0)+e|0;h=LP(a,g,f);if(h>0){i=FV(a,b,h);d.appendChild(i);}j=a.cC.dM(e,f);if(j!==null){k=KX(a,b,j,c);d.appendChild(k);}else{i=FV(a,b,30);d.appendChild(i);}f=f+1|0;}l=b.createElement("br");d.appendChild(l);e=e+1|0;}return d;}
function KX(a,b,c,d){var e,f,g,h,i,j,k,l;e=b.createElement("span");e.setAttribute("class","key");f=null;if(!d)f=AFV.data[c.bd()];else{g=a.eE.gn(c);if(g!==null){h=V(255,160+(g.dU()*1000.0|0)|0);i=Bq(0,160-(g.dU()*1500.0|0)|0);f=J().a(B(273)).m(h).a(B(230)).m(i).a(B(230)).m(i).a(B(240)).e();}}if(f===null){j=!!1;e.hidden=j;}else{k=J().a(B(274)).a(f).e();e.setAttribute("style",$rt_ustr(k));}if(!d){l=J().a(B(275)).a(Nj(c.da())).a(B(276));l=l.a($rt_str(c.iW().toFixed(1))).e();e.setAttribute("title",$rt_ustr(l));}
else{g=a.eE.gn(c);if(g!==null){j=J().a(B(275)).a(Nj(c.da())).a(B(277));j=j.a($rt_str((g.dU()*100.0).toFixed(2))).a(B(246)).e();e.setAttribute("title",$rt_ustr(j));}}j=Ge(c.iQ());j=b.createTextNode($rt_ustr(j));e.appendChild(j);return e;}
function FV(a,b,c){var d,e;d=b.createElement("span");d.setAttribute("class","keygap");e=J().a(B(278)).m(c).a(B(279)).e();d.setAttribute("style",$rt_ustr(e));return d;}
function LP(a,b,c){var d,e;a:{d=a.cC.ku();DV();if(d===AEZ){if(b==1&&!c)return 0;if(b==2&&!c)return 15;if(b==3&&!c)return 22;if(b!=4)break a;if(c)break a;return 37;}if(d!==AE0){if(d!==AE1)break a;if(c&&c!=5)break a;return 15;}if(b==1&&!c)return 0;if(b==2&&!c)return 15;if(b==3&&!c)return 22;e=BX(b,4);if(!e&&!c)return 7;if(!e&&c==5)return 30;}return 0;}
function Nt(){var b,c;b=F(Bk,10);c=b.data;c[0]=B(280);c[1]=B(281);c[2]=B(282);c[3]=B(283);c[4]=null;c[5]=null;c[6]=B(284);c[7]=B(282);c[8]=B(281);c[9]=B(280);AFV=b;}
function B4(){CP.call(this);}
var AEE=null;var AEF=null;var AEG=null;var AEH=null;var AFW=null;function FX(){FX=Be(B4);Ub();}
function E3(a,b){var c=new B4();LF(c,a,b);return c;}
function X9(){FX();return AFW.dI();}
function L5(b){FX();return J5(D(B4),b);}
function LF(a,b,c){FX();FR(a,b,c);}
function Ub(){var b,c;AEE=E3(B(285),0);AEF=E3(B(286),1);AEG=E3(B(287),2);AEH=E3(B(288),3);b=F(B4,4);c=b.data;c[0]=AEE;c[1]=AEF;c[2]=AEG;c[3]=AEH;AFW=b;}
function H0(){I.call(this);this.kc=null;}
function ADG(a){var b=new H0();NP(b,a);return b;}
function NP(a,b){a.kc=b;Q(a);}
function W4(a,b){return Hf(b);}
function De(){var a=this;C.call(a);a.hz=null;a.gC=null;a.gH=null;a.gv=null;a.i6=0;}
function N(a,b,c){var d=new De();QB(d,a,b,c);return d;}
function QB(a,b,c,d){M(a);a.hz=b;a.gC=c;a.gH=d;}
function OT(a){return a.hz;}
function XY(a){return a.gC;}
function Oh(a){return a.gH;}
function Sj(a){return a.gv;}
function AAD(a,b){a.gv=b;}
function QI(a){return a.i6;}
function QR(a,b){a.i6=b;}
function CC(){}
function HJ(){C.call(this);}
function ADD(){var a=new HJ();AAs(a);return a;}
function AAs(a){M(a);}
function MZ(a,b){if(G8())Kg();}
function Xq(a,b){MZ(a,b);}
function MK(){C.call(this);}
function HL(){C.call(this);}
function AAR(){var a=new HL();TY(a);return a;}
function TY(a){M(a);}
function Lt(a,b){var c,d;if(!$rt_str(E1().value).bz($rt_str(E0().value))){c=E0();d=$rt_ustr($rt_str(E1().value));c.value=d;c=Ev();BP();d=AFf.data.length;c.selectedIndex=d;}if(!$rt_str(Gd().value).bz($rt_str(Eq().value))){c=Eq();d=$rt_ustr($rt_str(Gd().value));c.value=d;c=Fp();BP();d=AFg.data.length;c.selectedIndex=d;}Mc().click();Dm();CG(null);BJ(null);}
function AAC(a,b){Lt(a,b);}
function Hl(){C.call(this);}
function ADI(){var a=new Hl();AAc(a);return a;}
function AAc(a){M(a);}
function JM(a,b){var c,d;c=Fp().selectedIndex;BP();if(c<AFg.data.length){d=AFg.data[c];Dk(d.bH());Dm();CG(null);BJ(null);}}
function WD(a,b){JM(a,b);}
function GA(){var a=this;C.call(a);a.iA=null;a.iB=null;a.gx=null;}
function Rr(a,b,c){var d=new GA();V0(d,a,b,c);return d;}
function V0(a,b,c,d){M(a);a.iA=b;a.iB=c;a.gx=d;}
function Vg(a){return a.iA;}
function YR(a){return a.iB;}
function P1(a){return a.gx;}
function SR(b){var c,d,e,f,g,h;c=$rt_createDoubleArray(10);d=b.X();while(d.Y()){e=d.V();f=e.ct().bd();g=e.dx().bd();if(Ii(f,g)){h=c.data;h[f]=h[f]+e.cu().bN();}}return c;}
function MO(){I.call(this);this.kO=null;}
function ABJ(a){var b=new MO();VW(b,a);return b;}
function VW(a,b){a.kO=b;Q(a);}
function VO(a,b){return 0;}
function L_(){BQ.call(this);this.lQ=null;}
function ADf(a){var b=new L_();Qu(b,a);return b;}
function Qu(a,b){C3(a);a.lQ=b;}
function Hm(){C.call(this);}
function ABX(){var a=new Hm();TC(a);return a;}
function TC(a){M(a);}
function KR(a,b){var c,d;c=Ev().selectedIndex;BP();if(c<AFf.data.length){d=AFf.data[c];if(!d.dl().H()){Gg(d.bH());L$(d.fq());Dm();CG(null);BJ(null);}}}
function UP(a,b){KR(a,b);}
function Lq(){I.call(this);this.lS=null;}
function AB_(a){var b=new Lq();V3(b,a);return b;}
function V3(a,b){a.lS=b;Q(a);}
function TB(a,b){return Lg(b);}
function J8(){S.call(this);this.ia=0;}
function V8(a){var b=new J8();Y6(b,a);return b;}
function Y6(a,b){Bo(a);a.ia=b;}
function Q_(a,b,c,d){var e,f,g,h,i;e=b<d.q()?c.d(b):32;f=!b?32:c.d(b-1|0);g=!d.df()?d.bw():0;h=e!=32&&!FJ(a,e,b,g,c)?0:1;i=f!=32&&!FJ(a,f,b-1|0,g,c)?0:1;return h^i^a.ia?(-1):a.f.b(b,c,d);}
function Rx(a,b){return 0;}
function FJ(a,b,c,d,e){var f;if(!F2(b)&&b!=95){a:{if(C_(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=e.d(c);if(F2(f))return 0;if(C_(f)!=6)return 1;}}return 1;}return 0;}
function KP(){S.call(this);this.dH=0;}
function AAS(a){var b=new KP();Wm(b,a);return b;}
function Wm(a,b){Bo(a);a.dH=b;}
function ZP(a,b,c,d){var e;e=!d.cU()?c.g():d.q();if(b>=e){d.D(a.dH,0);return a.f.b(b,c,d);}if((e-b|0)==1&&c.d(b)==10){d.D(a.dH,1);return a.f.b(b+1|0,c,d);}return (-1);}
function Wf(a,b){var c;c=!b.bF(a.dH)?0:1;b.D(a.dH,(-1));return c;}
function Do(){L.call(this);}
function ACJ(){var a=new Do();L7(a);return a;}
function L7(a){R(a);}
function LX(a){return By().J(9,13).bg(32);}
function Hi(){var a=this;C.call(a);a.kv=null;a.i0=null;a.hg=null;a.h4=null;a.kp=0.0;a.hp=null;a.gu=null;a.hK=null;}
function ACT(a,b,c,d,e,f,g,h){var i=new Hi();Vw(i,a,b,c,d,e,f,g,h);return i;}
function Vw(a,b,c,d,e,f,g,h,i){M(a);a.kv=b;a.i0=c;a.hg=d;a.h4=e;a.kp=f;a.hp=g;a.gu=h;a.hK=i;}
function PX(a){return a.i0;}
function Vh(a){return a.hg;}
function WO(a){return a.h4;}
function Py(a){return a.hp;}
function YW(a){return a.gu;}
function Uc(a){return a.hK;}
function LS(){Z.call(this);this.gy=0;}
function SL(a){var b=new LS();Pf(b,a);return b;}
function Pf(a,b){BH(a);a.gy=BI(BA(b));}
function Nv(a,b,c){return a.gy!=BI(BA(c.d(b)))?(-1):1;}
function DQ(){BO.call(this);this.g1=0.0;}
var AFX=0.0;var AFY=null;function FD(){FD=Be(DQ);SH();}
function AB9(a){var b=new DQ();Lf(b,a);return b;}
function Lf(a,b){FD();F1(a);a.g1=b;}
function AAj(a){return a.g1;}
function Fz(b){FD();return AB9(b);}
function DG(b){var c,d,e,f,g,h,i,j,k,l,m,n,o;FD();if(b.H())G(Ca());c=0;d=b.g();while(true){if(b.d(c)>32){while(b.d(d-1|0)<=32){d=d+(-1)|0;}e=0;if(b.d(c)==45){c=c+1|0;e=1;}else if(b.d(c)==43)c=c+1|0;if(c==d)G(Ca());a:{f=b.d(c);g=Long_ZERO;h=0;i=0;if(f!=46){i=1;if(f>=48&&f<=57){b:{while(c<d){if(b.d(c)!=48)break b;c=c+1|0;}}while(c<d){j=b.d(c);if(j<48)break a;if(j>57)break a;if(Long_toNumber(g)>=1.0E17)h=h+1|0;else g=Long_add(Long_mul(g,Long_fromInt(10)),Long_fromInt(j-48|0));c=c+1|0;}}else G(Ca());}}if(c<d&&b.d(c)
==46){c=c+1|0;c:{while(true){if(c>=d)break c;k=b.d(c);if(k<48)break c;if(k>57)break;if(Long_toNumber(g)<1.0E17){g=Long_add(Long_mul(g,Long_fromInt(10)),Long_fromInt(k-48|0));h=h+(-1)|0;}c=c+1|0;i=1;}}if(!i)G(Ca());}if(c<d){k=b.d(c);if(k!=101&&k!=69)G(Ca());l=c+1|0;m=0;if(l==d)G(Ca());if(b.d(l)==45){l=l+1|0;m=1;}else if(b.d(l)==43)l=l+1|0;n=0;k=0;d:{while(true){if(l>=d)break d;o=b.d(l);if(o<48)break d;if(o>57)break;n=(10*n|0)+(o-48|0)|0;k=1;l=l+1|0;}}if(!k)G(Ca());if(m)n= -n;h=h+n|0;}e:{j=BX(h,308);if(j<=0){if
(j)break e;if(Long_le(g,new Long(2133831477, 4185580)))break e;}return e?(-Infinity):Infinity;}if(e)g=Long_neg(g);return Long_toNumber(g)*KZ(h);}c=c+1|0;if(c==d)break;}G(Ca());}
function KZ(b){var c,d;FD();if(b>=0)c=10.0;else{c=0.1;b= -b;}d=1.0;while(b){if(b%2|0)d=d*c;c=c*c;b=b/2|0;}return d;}
function SH(){AFX=NaN;AFY=D($rt_doublecls());}
function Ex(){Bt.call(this);this.gW=0;}
function AFZ(a){var b=new Ex();Mx(b,a);return b;}
function Mx(a,b){Ck(a,b);}
function Po(a,b,c,d){var e;e=a.c_();d.D(e,b-d.bF(e)|0);a.gW=b;return b;}
function RV(a){return a.gW;}
function Q8(a,b){return 0;}
function Dp(){W.call(this);this.cH=0;}
function P4(a){var b=new Dp();R3(b,a);return b;}
function R3(a,b){BD(a);a.cH=b;}
function QL(a,b){a.f=b;}
function SO(a,b,c,d){var e,f,g;e=b+1|0;if(e>d.q()){d.by=1;return (-1);}f=c.d(b);if(b>d.bw()){g=c.d(b-1|0);if(Bm(g))return (-1);}if(a.cH!=f)return (-1);return a.f.b(e,c,d);}
function XD(a,b,c,d){var e,f,g,h,i;if(!(c instanceof Bk))return C7(a,b,c,d);e=c;f=d.bw();g=d.q();while(true){if(b>=g)return (-1);h=e.cF(a.cH,b);if(h<0)return (-1);if(h>f&&Bm(e.d(h-1|0))){b=h+1|0;continue;}i=a.f;b=h+1|0;if(i.b(b,c,d)>=0)break;}return h;}
function T7(a,b,c,d,e){var f,g,h;if(!(d instanceof Bk))return Db(a,b,c,d,e);f=e.bw();g=d;a:{while(true){if(c<b)return (-1);h=g.eq(a.cH,c);if(h<0)break a;if(h<b)break a;if(h>f&&Bm(g.d(h-1|0))){c=h+(-2)|0;continue;}if(a.f.b(h+1|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function O0(a,b){if(b instanceof B2)return 0;if(b instanceof B3)return 0;if(b instanceof BK)return 0;if(b instanceof B1)return 0;if(b instanceof DA)return 0;if(!(b instanceof Dp))return 1;return b.cH!=a.cH?0:1;}
function VX(a,b){return 1;}
function E$(){}
function LR(){B9.call(this);}
function ACH(a,b){var c=new LR();T8(c,a,b);return c;}
function T8(a,b,c){IF(a,b,c);}
function LK(){var a=this;C.call(a);a.iL=0;a.ca=0;a.cA=null;a.ex=0;a.ix=0.0;}
function ADb(a,b,c){var d=new LK();QK(d,a,b,c);return d;}
function QK(a,b,c,d){M(a);a.iL=b;a.ca=c;a.kP(d);a.ex=M8(a);}
function WR(a){return BA(a.cA.d(0));}
function AAa(a){return a.iL;}
function Xy(a){return a.ca;}
function Y$(a){return a.ex>4?1:0;}
function T9(a){return a.ex;}
function Q$(a,b){a.ex=b;}
function PH(a){return a.ix;}
function T$(a,b){a.ix=b;}
function OJ(a){return a.cA;}
function Pk(a,b){var c,d,e,f;c=a.cA.cg().data;d=c.length;e=0;while(e<d){f=c[e];if(f==BA(b))return 1;e=e+1|0;}return 0;}
function Tr(a,b){var c;if(b.g()!=1)a.cA=b;else{c=Zm(b.d(0));if(!c)a.cA=b;else a.cA=J().a(Ge(b.d(0))).bt(c).e();}}
function M8(a){if(a.ca<=3)return a.ca;if(a.ca==4)return 3;if(a.ca==5)return 6;if(a.ca>9)return 9;return a.ca;}
function Zm(b){if(Ly(b)){if(!Iq(b))return BI(b);return BA(b);}a:{switch(b){case 39:break;case 40:case 41:case 42:case 43:case 58:case 60:case 62:case 63:case 64:case 65:case 66:case 67:case 68:case 69:case 70:case 71:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 80:case 81:case 82:case 83:case 84:case 85:case 86:case 87:case 88:case 89:case 90:case 92:break a;case 44:return 60;case 45:return 95;case 46:return 62;case 47:return 63;case 48:return 41;case 49:return 33;case 50:return 64;case 51:return 35;case 52:return 36;case 53:return 37;case 54:return 94;case 55:return 38;case 56:return 42;case 57:return 40;case 59:return 58;case 61:return 43;case 91:return 123;case 93:return 125;default:break a;}return 34;}return 0;}
function Ch(){var a=this;Bw.call(a);a.co=null;a.bB=0;}
function AF0(a,b,c,d,e){var f=new Ch();Dr(f,a,b,c,d,e);return f;}
function Dr(a,b,c,d,e,f){CB(a,c,d,e);a.co=b;a.bB=f;}
function AAu(a,b,c,d){var e,f,g,h;e=d.hS(a.bB);if(!a.w.x(d))return a.f.b(b,c,d);if(e>=a.co.c3())return a.f.b(b,c,d);f=a.bB;g=e+1|0;d.b6(f,g);h=a.w.b(b,c,d);if(h>=0){d.b6(a.bB,0);return h;}f=a.bB;g=g+(-1)|0;d.b6(f,g);if(g>=a.co.c1())return a.f.b(b,c,d);d.b6(a.bB,0);return (-1);}
function Fe(){Ch.call(this);}
function AF1(a,b,c,d,e){var f=new Fe();HF(f,a,b,c,d,e);return f;}
function HF(a,b,c,d,e,f){Dr(a,b,c,d,e,f);}
function Pu(a,b,c,d){var e,f;e=d.hS(a.bB);if(!a.w.x(d))return a.f.b(b,c,d);if(e>=a.co.c3()){d.b6(a.bB,0);return a.f.b(b,c,d);}if(e<a.co.c1()){d.b6(a.bB,e+1|0);f=a.w.b(b,c,d);}else{f=a.f.b(b,c,d);if(f>=0){d.b6(a.bB,0);return f;}d.b6(a.bB,e+1|0);f=a.w.b(b,c,d);}return f;}
function Ez(){}
function DD(){Dn.call(this);this.cc=0;}
function AF2(){var a=new DD();Me(a);return a;}
function Me(a){Lz(a);}
function U$(a){return ABo(a);}
function EY(){}
function Ib(){var a=this;DD.call(a);a.bk=null;a.bn=0;}
function BY(){var a=new Ib();V1(a);return a;}
function AF3(a){var b=new Ib();GS(b,a);return b;}
function V1(a){GS(a,10);}
function GS(a,b){Me(a);a.bk=F(C,b);}
function PA(a,b){var c,d;if(a.bk.data.length<b){if(a.bk.data.length>=1073741823)c=2147483647;else{d=a.bk.data.length*2|0;c=Bq(b,Bq(d,5));}a.bk=Mb(a.bk,c);}}
function S_(a,b){Ew(a,b);return a.bk.data[b];}
function QP(a){return a.bn;}
function XM(a,b){var c,d;a.b3(a.bn+1|0);c=a.bk.data;d=a.bn;a.bn=d+1|0;c[d]=b;a.cc=a.cc+1|0;return 1;}
function YQ(a,b,c){var d;JN(a,b);a.b3(a.bn+1|0);d=a.bn;while(d>b){a.bk.data[d]=a.bk.data[d-1|0];d=d+(-1)|0;}a.bk.data[b]=c;a.bn=a.bn+1|0;a.cc=a.cc+1|0;}
function TL(a,b){var c,d,e,f;Ew(a,b);c=a.bk.data[b];a.bn=a.bn-1|0;while(b<a.bn){d=a.bk.data;e=a.bk.data;f=b+1|0;d[b]=e[f];b=f;}a.bk.data[a.bn]=null;a.cc=a.cc+1|0;return c;}
function Ew(a,b){if(b>=0&&b<a.bn)return;G(Cq());}
function JN(a,b){if(b>=0&&b<=a.bn)return;G(Cq());}
function E4(){}
function Fd(){}
function HI(){C.call(this);}
function NA(a,b,c){a.mw($rt_str(b),DB(c,"handleEvent"));}
function Ob(a,b,c){a.nN($rt_str(b),DB(c,"handleEvent"));}
function P_(a,b){return a.ne(b);}
function Qw(a,b,c,d){a.mC($rt_str(b),DB(c,"handleEvent"),d?1:0);}
function XR(a,b){return !!a.mB(b);}
function Sn(a){return a.m$();}
function Oe(a,b,c,d){a.oQ($rt_str(b),DB(c,"handleEvent"),d?1:0);}
function K9(){CO.call(this);}
function ACA(a,b,c){var d=new K9();Re(d,a,b,c);return d;}
function Re(a,b,c,d){Eu(a,b,c,d);}
function RY(a,b,c,d){var e;if(!a.w.x(d))return a.f.b(b,c,d);e=a.f.b(b,c,d);if(e<0)e=a.w.b(b,c,d);return e;}
function Hx(){C.call(this);}
function Bk(){var a=this;C.call(a);a.s=null;a.dL=0;}
var AF4=null;function Cm(){Cm=Be(Bk);WS();}
function Nj(a){var b=new Bk();Lp(b,a);return b;}
function GC(a){var b=new Bk();Dt(b,a);return b;}
function E_(a,b,c){var d=new Bk();M_(d,a,b,c);return d;}
function ABL(a,b,c,d){var e=new Bk();H9(e,a,b,c,d);return e;}
function AF5(a,b,c,d){var e=new Bk();F0(e,a,b,c,d);return e;}
function AC8(a,b,c){var d=new Bk();Gp(d,a,b,c);return d;}
function Lp(a,b){Cm();M(a);a.s=b.s;}
function Dt(a,b){var c,d,e;Cm();c=b.data;M(a);d=c.length;a.s=$rt_createCharArray(d);e=0;while(e<d){a.s.data[e]=c[e];e=e+1|0;}}
function M_(a,b,c,d){var e,f;Cm();M(a);a.s=$rt_createCharArray(d);e=0;while(e<d){f=b.data;a.s.data[e]=f[e+c|0];e=e+1|0;}}
function H9(a,b,c,d,e){Cm();F0(a,b,c,d,OC(e.e()));}
function F0(a,b,c,d,e){Cm();M(a);I7(a,b,c,d,e);}
function Gp(a,b,c,d){var e,f,g,h,i,j,k;Cm();M(a);a.s=$rt_createCharArray(d*2|0);e=0;f=0;while(f<d){g=b.data;h=c+1|0;i=g[c];if(i<65536){g=a.s.data;j=e+1|0;g[e]=i&65535;}else{g=a.s.data;k=e+1|0;g[e]=CR(i);g=a.s.data;j=k+1|0;g[k]=CH(i);}f=f+1|0;c=h;e=j;}if(e<a.s.data.length)a.s=EL(a.s,e);}
function I7(a,b,c,d,e){var f;f=GZ(e,Mk(b,c,d));if(IR(f)&&!BG(f)&&KD(f)==Kc(f))a.s=E8(f);else{a.s=$rt_createCharArray(X(f));f.kw(a.s);}}
function Ql(a,b){if(b>=0&&b<a.s.data.length)return a.s.data[b];G(Ff());}
function We(a){return a.s.data.length;}
function Y_(a){return a.s.data.length?0:1;}
function RD(a,b,c){var d,e,f;if((c+b.g()|0)>a.g())return 0;d=0;while(d<b.g()){e=b.d(d);f=c+1|0;if(e!=a.d(c))return 0;d=d+1|0;c=f;}return 1;}
function Zi(a,b){if(a===b)return 1;return a.ir(b,0);}
function PY(a,b,c){var d,e,f,g;d=Bq(0,c);if(b<65536){e=b&65535;while(true){if(d>=a.s.data.length)return (-1);if(a.s.data[d]==e)break;d=d+1|0;}return d;}f=CR(b);g=CH(b);while(true){if(d>=(a.s.data.length-1|0))return (-1);if(a.s.data[d]==f&&a.s.data[d+1|0]==g)break;d=d+1|0;}return d;}
function UT(a,b){return a.cF(b,0);}
function Qx(a,b,c){var d,e,f,g,h,i;d=V(c,a.g()-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.s.data[d]==e)break;d=d+(-1)|0;}return d;}f=CR(b);g=CH(b);while(true){if(d<1)return (-1);if(a.s.data[d]==g){h=a.s.data;i=d-1|0;if(h[i]==f)break;}d=d+(-1)|0;}return i;}
function Up(a,b,c){var d,e,f;d=Bq(0,c);e=a.g()-b.g()|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=b.g())break a;if(a.d(d+f|0)!=b.d(f))break;f=f+1|0;}d=d+1|0;}return d;}
function UI(a,b,c){var d,e;d=V(c,a.g()-b.g()|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=b.g())break a;if(a.d(d+e|0)!=b.d(e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function OE(a,b,c){if(b>c)G(Cq());return E_(a.s,b,c-b|0);}
function Yr(a,b){return a.ch(b,a.g());}
function U5(a,b,c){return a.ch(b,c);}
function Nk(a,b){var c,d,e;c=a.g()-b.g()|0;d=0;while(d<=c){e=0;while(true){if(e>=b.g())return 1;if(a.d(d+e|0)!=b.d(e))break;e=e+1|0;}d=d+1|0;}return 0;}
function ZN(a){var b,c;b=0;c=a.g()-1|0;a:{while(b<=c){if(a.d(b)>32)break a;b=b+1|0;}}while(b<=c&&a.d(c)<=32){c=c+(-1)|0;}return a.ch(b,c+1|0);}
function R1(a){return a;}
function Zg(a){var b,c,d;b=$rt_createCharArray(a.s.data.length);c=0;while(true){d=b.data;if(c>=d.length)break;d[c]=a.s.data[c];c=c+1|0;}return b;}
function Ge(b){var c,d;Cm();c=new Bk;d=$rt_createCharArray(1);d.data[0]=b;Dt(c,d);return c;}
function EK(b){Cm();return J().m(b).e();}
function XG(a,b){var c,d;if(a===b)return 1;if(!(b instanceof Bk))return 0;c=b;if(c.g()!=a.g())return 0;d=0;while(d<c.g()){if(a.d(d)!=c.d(d))return 0;d=d+1|0;}return 1;}
function X4(a,b){var c;if(a===b)return 1;if(b===null)return 0;if(a.g()!=b.g())return 0;c=0;while(c<a.g()){if(BI(a.d(c))!=BI(b.d(c)))return 0;c=c+1|0;}return 1;}
function P9(a){var b,c,d,e;a:{if(!a.dL){b=a.s.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.dL=(31*a.dL|0)+e|0;d=d+1|0;}}}return a.dL;}
function O6(a){var b,c,d,e,f,g,h,i;if(a.H())return a;b=$rt_createIntArray(a.s.data.length);c=0;d=0;while(d<a.s.data.length){a:{if(d!=(a.s.data.length-1|0)&&Bm(a.s.data[d])){e=a.s.data;f=d+1|0;g=e[f];if(Bu(g)){h=b.data;i=c+1|0;h[c]=Cn(BT(a.s.data[d],a.s.data[f]));d=f;break a;}}h=b.data;i=c+1|0;h[c]=BA(a.s.data[d]);}d=d+1|0;c=i;}return AC8(b,0,c);}
function AAi(a,b){return HC(TN(b),a.e());}
function WS(){AF4=ADj();}
function FS(){C.call(this);}
var AF6=null;function ADO(){ADO=Be(FS);Ug();}
function Go(){ADO();return AF6;}
function Ug(){AF6=AAE();AF6.hF(B(289),XW());}
function Nb(){U.call(this);}
function ADm(){var a=new Nb();Q6(a);return a;}
function Q6(a){BB(a);}
function Ig(){Cb.call(this);}
function ACx(a,b,c){var d=new Ig();VK(d,a,b,c);return d;}
function VK(a,b,c,d){En(a,b,c,d);}
function PU(a,b,c,d){var e;e=a.f.b(b,c,d);if(e>=0)return e;return a.w.b(b,c,d);}
function Ef(){Dj.call(this);}
function AF7(a,b,c){var d=new Ef();Je(d,a,b,c);return d;}
function Je(a,b,c,d){La(a,b,c,d);}
function QC(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=$rt_createCharArray(V(X(b),512));e=0;f=0;g=$rt_createByteArray(V(X(c),512));a:{while(true){if((e+32|0)>f&&BS(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=V(X(b)+j|0,i.length);b.iE(d,j,f-j|0);e=0;}if(!BS(c)){if(!BS(b)&&e>=f){Bj();k=AEM;}else{Bj();k=AEK;}break a;}i=g.data;l=V(X(c),i.length);m=ABI(b,c);k=a.jE(d,e,f,g,0,l,m);e=m.hW;if(k===null&&0==m.f9){Bj();k=AEM;}j=m.f9;c.hX(g,0,j);if(k!==null)break;}}b.fb(BG(b)-(f-e|0)|0);return k;}
function JS(){Ef.call(this);}
function ACs(a){var b=new JS();UW(b,a);return b;}
function UW(a,b){Je(a,b,2.0,4.0);}
function Z2(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(h.dE(2))break a;Bj();i=AEK;break a;}k=e.data;n=f+1|0;k[f]=(192|l>>6)<<24>>24;m=n+1|0;k[n]=(128|l&63)<<24>>24;}else if(!D5(l)){if((f+3|0)>g){j=j+(-1)|0;if(h.dE(3))break a;Bj();i=AEK;break a;}k=e.data;o=f+1|0;k[f]=(224|l>>12)<<24>>24;n=o+1|0;k[o]=(128|l>>6&63)<<24>>24;m=n+1|0;k[n]=(128|l&63)<<24>>24;}else{if
(!Bm(l)){i=BM(1);break a;}if(j>=d){if(h.dq())break a;Bj();i=AEM;break a;}n=j+1|0;p=k[j];if(!Bu(p)){j=n+(-2)|0;i=BM(1);break a;}if((f+4|0)>g){j=n+(-2)|0;if(h.dE(4))break a;Bj();i=AEK;break a;}k=e.data;q=BT(l,p);j=f+1|0;k[f]=(240|q>>18)<<24>>24;o=j+1|0;k[j]=(128|q>>12&63)<<24>>24;j=o+1|0;k[o]=(128|q>>6&63)<<24>>24;m=j+1|0;k[j]=(128|q&63)<<24>>24;j=n;}c=j;f=m;}j=c;}h.gd(j);h.eK(f);return i;}
function Ja(){L.call(this);}
function AC3(){var a=new Ja();Q9(a);return a;}
function Q9(a){R(a);}
function Yv(a){return ACa(a);}
function Ip(){S.call(this);}
function AB2(){var a=new Ip();Z$(a);return a;}
function Z$(a){Bo(a);}
function ZF(a,b,c,d){return b;}
function QX(a,b){return 0;}
function Ct(){BQ.call(this);}
function Ca(){var a=new Ct();P6(a);return a;}
function BW(a){var b=new Ct();AAq(b,a);return b;}
function P6(a){C3(a);}
function AAq(a,b){M6(a,b);}
function EH(){Ch.call(this);}
function AF8(a,b,c,d,e){var f=new EH();HK(f,a,b,c,d,e);return f;}
function HK(a,b,c,d,e,f){Dr(a,b,c,d,e,f);Ec();c.t(AEN);}
function Yd(a,b,c,d){var e,f,g;e=0;f=a.co.c3();a:{while(true){g=a.w.b(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.co.c1())return (-1);return a.f.b(b,c,d);}
function MT(){Du.call(this);}
function XW(){var a=new MT();Yg(a);return a;}
function Yg(a){Jd(a,B(289),F(Bk,0));}
function Ut(a){return AB5(a);}
function Yk(a){return ACs(a);}
function GF(){S.call(this);this.cp=0;}
function AA6(a){var b=new GF();AAy(b,a);return b;}
function AAy(a,b){Bo(a);a.cp=b;}
function Yo(a,b,c,d){var e,f,g;e=!d.cU()?c.g()-b|0:d.bw()-b|0;if(!e){d.D(a.cp,0);return a.f.b(b,c,d);}if(e<2){f=c.d(b);g=97;}else{f=c.d(b);g=c.d(b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:d.D(a.cp,0);return a.f.b(b,c,d);case 13:if(g!=10){d.D(a.cp,0);return a.f.b(b,c,d);}d.D(a.cp,0);return a.f.b(b,c,d);default:}return (-1);}
function ST(a,b){var c;c=!b.bF(a.cp)?0:1;b.D(a.cp,(-1));return c;}
function Ij(){C.call(this);}
function Hq(){var a=this;Cz.call(a);a.dv=null;a.c0=null;a.b4=0;a.d5=0;a.eO=0;a.hL=0;}
function AF9(a,b){var c=new Hq();J2(c,a,b);return c;}
function Ek(a){var b=new Hq();Uv(b,a);return b;}
function J2(a,b,c){EM(a);a.hL=(-1);if(c<0)G(Cw());a.dv=b;a.c0=$rt_createCharArray(Bq(64,c));}
function Uv(a,b){J2(a,b,1024);}
function AAd(a){FG(a);a.dv.bK();a.dv=null;}
function ZZ(a){var b,c,d,e;FG(a);if(a.eO&&a.b4>=a.d5)return null;b=J();a:{while(true){if(a.b4>=a.d5&&!Ey(a,0))break a;c=a.c0.data;d=a.b4;a.b4=d+1|0;e=c[d];if(e==10)break;if(e==13){if(a.b4>=a.d5&&!Ey(a,0))break a;if(a.c0.data[a.b4]!=10)break a;a.b4=a.b4+1|0;break a;}b.bt(e);}}return b.e();}
function Ey(a,b){var c;if(a.eO)return 0;a:{while(true){if(b>=a.c0.data.length)break a;c=a.dv.kl(a.c0,b,a.c0.data.length-b|0);if(c==(-1)){a.eO=1;break a;}if(!c)break;b=b+c|0;}}a.d5=b;a.b4=0;a.hL=(-1);return 1;}
function FG(a){if(a.dv!==null)return;G(PG());}
function It(){L.call(this);}
function ACv(){var a=new It();On(a);return a;}
function On(a){R(a);}
function To(a){return ABJ(a);}
function Jc(){I.call(this);this.jR=null;}
function ABp(a){var b=new Jc();NB(b,a);return b;}
function NB(a,b){a.jR=b;Q(a);}
function Xz(a,b){return MF(b);}
function Jk(){L.call(this);}
function ABO(){var a=new Jk();OZ(a);return a;}
function OZ(a){R(a);}
function Nw(a){return AB_(a);}
function Hs(){Br.call(this);}
function C1(){var a=new Hs();UY(a);return a;}
function UY(a){C4(a);}
function DA(){W.call(this);this.cL=0;}
function Yu(a){var b=new DA();Qi(b,a);return b;}
function Qi(a,b){BD(a);a.cL=b;}
function R5(a,b){a.f=b;}
function N8(a,b,c,d){var e,f,g,h,i;e=d.q();f=b+1|0;g=BX(f,e);if(g>0){d.by=1;return (-1);}h=c.d(b);if(g<0){i=c.d(f);if(Bu(i))return (-1);}if(a.cL!=h)return (-1);return a.f.b(f,c,d);}
function Rv(a,b,c,d){var e,f,g;if(!(c instanceof Bk))return C7(a,b,c,d);e=c;f=d.q();while(true){if(b>=f)return (-1);g=e.cF(a.cL,b);if(g<0)return (-1);b=g+1|0;if(b<f&&Bu(e.d(b))){b=g+2|0;continue;}if(a.f.b(b,c,d)>=0)break;}return g;}
function Ue(a,b,c,d,e){var f,g,h,i;if(!(d instanceof Bk))return Db(a,b,c,d,e);f=d;g=e.q();a:{while(true){if(c<b)return (-1);h=f.eq(a.cL,c);if(h<0)break a;if(h<b)break a;i=h+1|0;if(i<g&&Bu(f.d(i))){c=h+(-1)|0;continue;}if(a.f.b(i,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function TQ(a,b){if(b instanceof B2)return 0;if(b instanceof B3)return 0;if(b instanceof BK)return 0;if(b instanceof B1)return 0;if(b instanceof Dp)return 0;if(!(b instanceof DA))return 1;return b.cL!=a.cL?0:1;}
function RU(a,b){return 1;}
function LV(){Cd.call(this);}
function ADr(a,b,c,d){var e=new LV();Rt(e,a,b,c,d);return e;}
function Rt(a,b,c,d,e){Gj(a,b,c,d,e);}
function UF(a,b,c,d){var e,f,g,h,i;e=a.cn.c1();f=a.cn.c3();g=0;while(true){if(g>=e){a:{while(true){h=a.f.b(b,c,d);if(h>=0)break;if((b+a.B.bb()|0)<=d.q()){h=a.B.I(b,c);b=b+h|0;g=g+1|0;}if(h<1)break a;if(g>f)break a;}return h;}return (-1);}if((b+a.B.bb()|0)>d.q()){d.by=1;return (-1);}i=a.B.I(b,c);if(i<1)break;b=b+i|0;g=g+1|0;}return (-1);}
function GQ(){U.call(this);}
function SQ(a){var b=new GQ();U_(b,a);return b;}
function RF(){var a=new GQ();Sy(a);return a;}
function U_(a,b){Df(a,b);}
function Sy(a){BB(a);}
function LZ(){S.call(this);}
function Wr(){var a=new LZ();T3(a);return a;}
function T3(a){Bo(a);}
function AAA(a,b,c,d){if(b&&!(d.cU()&&b==d.bw()))return (-1);return a.f.b(b,c,d);}
function YA(a,b){return 0;}
function JV(){I.call(this);this.ld=null;}
function ADl(a){var b=new JV();Wo(b,a);return b;}
function Wo(a,b){a.ld=b;Q(a);}
function Su(a,b){return Fs(b);}
function Kt(){var a=this;C.call(a);a.dV=null;a.hZ=null;}
function ABf(a,b){var c=new Kt();WQ(c,a,b);return c;}
function WQ(a,b,c){a.hZ=b;a.dV=c;M(a);}
function W6(a){if(a.dV.readyState==4&&a.dV.status==200)QW(a.hZ,$rt_str(a.dV.responseText));}
function SK(a){a.jD();}
function LY(){C.call(this);}
function V(b,c){if(b<c)c=b;return c;}
function Bq(b,c){if(b>c)c=b;return c;}
function GI(b){if(b<=0)b= -b;return b;}
function Kp(){L.call(this);}
function ABN(){var a=new Kp();Ts(a);return a;}
function Ts(a){R(a);}
function Pz(a){var b;b=AA5(a);b.y=1;return b;}
function FN(){var a=this;BQ.call(a);a.hm=null;a.dO=null;a.dw=0;}
function Ba(a,b,c){var d=new FN();HE(d,a,b,c);return d;}
function HE(a,b,c,d){C3(a);a.dw=(-1);a.hm=b;a.dO=c;a.dw=d;}
function YD(a){var b,c;b=B(25);if(a.dw>=1){c=$rt_createCharArray(a.dw);Se(c,32);b=GC(c);}return J().a(a.hm).a(a.dO!==null&&a.dO.g()?J().m(a.dw).a(B(290)).a(a.dO).a(B(290)).a(b).e():B(25)).e();}
function GG(){C.call(this);}
function M7(b,c){var d,$$je;a:{try{Zt(b,EB(c));}catch($$e){$$je=Bb($$e);if($$je instanceof Br){d=$$je;break a;}else{throw $$e;}}return 1;}CA().n(B(291));d.et();return 0;}
function Zt(b,c){var d,e,f,g,h,i,j,$$je;d=Ek(c);a:{try{e=0;while(true){f=d.ek();if(f===null)break;g=f.cy(35);if(g>=0)f=f.ch(0,g);f=f.fx();if(!f.g())continue;h=B8(f,32);i=0;while(i<h.T()){j=h.C(i);b.jZ(e,i,j);i=i+1|0;}e=e+1|0;}}catch($$e){$$je=Bb($$e);f=$$je;break a;}d.bK();return;}d.bK();G(f);}
function Ku(){L.call(this);}
function AAU(){var a=new Ku();S3(a);return a;}
function S3(a){R(a);}
function Tv(a){var b;b=ADN(a);b.K.d7(0,2048);b.y=1;return b;}
function Di(){C.call(this);}
var AFf=null;var AFg=null;var AFe=null;function BP(){BP=Be(Di);Ri();}
function Ri(){var b,c;b=F(De,34);c=b.data;c[0]=N(B(292),B(25),B(25));c[1]=N(B(293),B(294),B(295));c[2]=N(B(296),B(294),B(297));c[3]=N(B(298),B(299),B(300));c[4]=N(B(301),B(299),B(302));c[5]=N(B(303),B(304),B(305));c[6]=N(B(306),B(299),B(307));c[7]=N(B(308),B(299),B(309));c[8]=N(B(310),B(299),B(311));c[9]=N(B(312),B(313),B(314));c[10]=N(B(315),B(313),B(316));c[11]=N(B(317),B(299),B(318));c[12]=N(B(319),B(299),B(320));c[13]=N(B(321),B(299),B(322));c[14]=N(B(323),B(299),B(324));c[15]=N(B(325),B(299),B(326));c[16]
=N(B(25),B(25),B(25));c[17]=N(B(327),B(25),B(25));c[18]=N(B(293),B(294),B(328));c[19]=N(B(296),B(294),B(329));c[20]=N(B(298),B(299),B(330));c[21]=N(B(301),B(299),B(331));c[22]=N(B(303),B(304),B(332));c[23]=N(B(306),B(299),B(333));c[24]=N(B(308),B(299),B(334));c[25]=N(B(310),B(299),B(335));c[26]=N(B(312),B(313),B(336));c[27]=N(B(315),B(313),B(337));c[28]=N(B(317),B(299),B(338));c[29]=N(B(319),B(299),B(339));c[30]=N(B(321),B(299),B(340));c[31]=N(B(323),B(299),B(341));c[32]=N(B(325),B(299),B(342));c[33]=N(B(25),
B(25),B(25));AFf=b;b=F(De,4);c=b.data;c[0]=N(B(299),B(343),B(344));c[1]=N(B(313),B(345),B(346));c[2]=N(B(294),B(347),B(348));c[3]=N(B(304),B(349),B(350));AFg=b;b=F(De,11);c=b.data;c[0]=N(B(253),B(351),B(352));c[1]=N(B(353),B(354),B(355));c[2]=N(B(356),B(357),B(358));c[3]=N(B(359),B(360),B(361));c[4]=N(B(362),B(363),B(364));c[5]=N(B(365),B(366),B(367));c[6]=N(B(368),B(369),B(370));c[7]=N(B(371),B(372),B(373));c[8]=N(B(374),B(375),B(376));c[9]=N(B(377),B(378),B(379));c[10]=N(B(380),B(381),B(382));AFe=b;}
function H7(){C.call(this);}
function ADj(){var a=new H7();QY(a);return a;}
function QY(a){M(a);}
function EU(){C.call(this);}
var AF$=null;function ACi(){ACi=Be(EU);Ol();}
function ABc(){var a=new EU();KI(a);return a;}
function KI(a){ACi();M(a);}
function Uu(a,b,c,d){var e,f,g,h,i,j,k,l;e=Hy(a,b);f=M$(a,b,c);g=M1(a,b,c);h=Nc(a,b,d);i=Id(a,b,d);j=JK(a,b,d);k=F($rt_arraycls($rt_doublecls()),3);l=k.data;l[0]=I0(a,b,c);l[1]=Mt(a,b,i);l[2]=IK(a,b,j);return ACT(b,e,f,g,h,i,j,k);}
function Hy(a,b){var c,d,e,f;c=BY();d=b.d9();if(b.cM()>4)c.bo(B(383));e=65;while(e<=90){if(d.cy(e)<0)c.bo(J().a(B(384)).bt(e).a(B(385)).e());e=(e+1|0)&65535;}f=0;while(f<d.g()){e=d.d(f);f=f+1|0;if(d.cF(e,f)>=0)c.bo(J().a(B(384)).bt(e).a(B(386)).e());}return c;}
function M$(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=AAE();e=0;while(e<b.cM()){f=0;while(f<b.iw()){g=b.dM(e,f);if(g!==null){h=Fz(0.0);i=g.da().cg().data;j=i.length;k=0;while(k<j){l=i[k];m=JO(l,c);if(m!==null)h=Fz(h.dU()+m.bN());k=k+1|0;}d.hF(g,h);}f=f+1|0;}e=e+1|0;}return d;}
function M1(a,b,c){var d,e,f,g,h,i,j;d=$rt_createDoubleArray(10);e=c.X();while(e.Y()){f=e.V();g=f.ci();h=b.cd(g);if(h!==null){i=d.data;j=h.bd();i[j]=i[j]+f.bN();}}return d;}
function Nc(a,b,c){var d,e,f,g,h,i,j;d=0.0;e=c.X();while(e.Y()){f=e.V();g=f.c5().cg();h=g.data;i=b.cd(h[0]);j=b.cd(h[1]);if(i.gw()!=j.gw())d=d+f.bN();}return d;}
function Id(a,b,c){var d,e,f,g,h,i,j,k;d=BY();e=c.X();while(e.Y()){f=e.V();g=f.c5().cg();h=g.data;i=b.cd(h[0]);j=b.cd(h[1]);if(i!==null&&j!==null&&h[0]!=h[1]&&Ii(i.bd(),j.bd())){k=Rr(i,j,f);d.bo(k);}}return d;}
function JK(a,b,c){var d,e,f,g,h,i,j,k,l;d=BY();e=c.X();while(e.Y()){f=e.V();g=f.c5().cg();h=g.data;i=b.cd(h[0]);j=b.cd(h[1]);if(i!==null&&j!==null&&TJ(i.bd(),j.bd())){k=M3(i.bd(),j.bd());if(b.k4(k)){l=Rr(i,j,f);d.bo(l);}}}return d;}
function I0(a,b,c){var d,e,f,g,h,i,j,k,l;d=$rt_createDoubleArray(10);e=b.d9().cg().data;f=e.length;g=0;while(g<f){h=e[g];i=b.cd(h);j=JO(h,c);if(j!==null){k=d.data;l=i.bd();k[l]=k[l]+i.iW()*j.bN();}g=g+1|0;}return d;}
function Mt(a,b,c){var d,e,f,g,h,i,j;d=$rt_createDoubleArray(10);e=c.X();while(e.Y()){f=d.data;g=e.V();h=g.ct().bd();i=V(2,GI(g.ct().cr()-g.dx().cr()|0));j=b.k5(i);f[h]=f[h]+g.cu().bN()*j;}return d;}
function IK(a,b,c){var d,e,f,g,h,i,j,k,l;d=$rt_createDoubleArray(10);e=c.X();while(e.Y()){f=d.data;g=e.V();h=g.ct().bd();i=g.dx().bd();j=M3(h,i);k=V(2,GI(g.ct().cr()-g.dx().cr()|0));l=b.lW(j,k);f[j]=f[j]+g.cu().bN()*l;}return d;}
function Ol(){AF$=BY();}
function LN(){var a=this;C.call(a);a.c=null;a.bm=0;a.fj=null;a.g3=0;a.bW=0;a.b$=0;a.P=0;a.eH=null;}
function AA8(){var a=new LN();Oj(a);return a;}
function Lb(a,b){return ACO(a,b);}
function HD(a,b,c){var d,e,f,g,h,i;d=BY();e=Lb(a,b);f=0;g=0;if(!b.g()){h=F(Bk,1);h.data[0]=B(25);return h;}while(K6(e)){i=f+1|0;if(i>=c&&c>0)break;d.bo(b.fp(g,Mj(e)).e());g=Kj(e);f=i;}a:{d.bo(b.fp(g,b.g()).e());i=f+1|0;if(!c)while(true){i=i+(-1)|0;if(i<0)break;if(d.C(i).e().g())break a;d.iF(i);}}if(i<0)i=0;return d.jm(F(Bk,i));}
function HC(a,b){return HD(a,b,0);}
function DM(a){return a.c.e();}
function UD(b,c){if(b===null)G(SQ(B(387)));if(c&&(c|255)!=255)G(Bz(B(25)));Jh();AEs=1;return Ky(AA8(),b,c);}
function Ky(a,b,c){a.c=ACI(b,c);a.bm=c;a.eH=Gf(a,(-1),a.bm,null);if(a.c.H()){Kl(a);return a;}G(Ba(B(25),a.c.e(),a.c.bu()));}
function L6(a,b){var c,d,e;c=AC_(Bd(a,2),Bd(a,64));while(!a.c.H()){d=a.c;if(!d.cq())break;d=a.c;if(d.bi()&&a.c.bi()!=(-536870788)){d=a.c;if(d.bi()!=(-536870871))break;}c.bg(a.c.l());if(a.c.R()!=(-536870788))continue;a.c.l();}e=Ee(a,c);e.t(b);return e;}
function Gf(a,b,c,d){var e,f,g,h,i,j;e=BY();f=a.bm;g=0;if(c!=a.bm)a.bm=c;a:{switch(b){case -1073741784:h=new F_;i=a.P+1|0;a.P=i;G$(h,i);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new Fv;i=a.P+1|0;a.P=i;Lm(h,i);break a;case -33554392:h=new Ex;i=a.P+1|0;a.P=i;Mx(h,i);break a;default:a.bW=a.bW+1|0;if(d!==null)h=ACd(a.bW);else{h=ADp();g=1;}if(a.bW<=(-1))break a;if(a.bW>=10)break a;a.fj.data[a.bW]=h;break a;}h=AA2();}while(true){if(a.c.cq()&&a.c.bi()==(-536870788))j=L6(a,h);else if
(a.c.R()==(-536870788)){j=Cv(h);a.c.l();}else{j=Fi(a,h);if(a.c.R()==(-536870788))a.c.l();}if(j!==null)e.bo(j);if(a.c.H())break;if(a.c.R()==(-536870871))break;}if(a.c.kQ()==(-536870788))e.bo(Cv(h));if(a.bm!=f&&!g){a.bm=f;a.c.kB(a.bm);}switch(b){case -1073741784:break;case -536870872:return ACj(e,h);case -268435416:return AAY(e,h);case -134217688:return AB$(e,h);case -67108824:return ACW(e,h);case -33554392:return ABi(e,h);default:switch(e.T()){case 0:break;case 1:return ABC(e.C(0),h);default:return ADP(e,h);}return Cv(h);}return ADy(e,
h);}
function JJ(a){var b,c,d;b=SV();while(!a.c.H()){c=a.c;if(!c.cq())break;c=a.c;if(c.hM())break;c=a.c;if(c.iX())break;c=a.c;if(!(!c.fi()&&!a.c.bi())){c=a.c;if(!(!c.fi()&&DZ(a.c.bi()))){c=a.c;if(c.bi()!=(-536870871)){c=a.c;if((c.bi()&(-2147418113))!=(-2147483608)){c=a.c;if(c.bi()!=(-536870788)){c=a.c;if(c.bi()!=(-536870876))break;}}}}}d=a.c.l();if(!D1(d))b.g5(d&65535);else b.ky(CL(d));}if(!Bd(a,2))return ADw(b);if(Bd(a,64))return ADT(b);return AD4(b);}
function JU(a){var b,c,d,e,f,g,h,i,j,k;b=$rt_createIntArray(4);c=0;d=(-1);e=(-1);if(!a.c.H()&&a.c.cq()){f=b.data;d=a.c.l();f[c]=d;e=d-4352|0;}if(e>=0&&e<19){g=$rt_createCharArray(3);f=g.data;f[c]=d&65535;h=a.c.R();i=h-4449|0;if(i>=0&&i<21){f[1]=h&65535;a.c.l();j=a.c.R();h=j-4519|0;if(h>=0&&h<28){f[2]=j&65535;a.c.l();return WE(g,3);}return WE(g,2);}if(!Bd(a,2))return JT(f[0]);if(Bd(a,64))return SL(f[0]);return Sd(f[0]);}k=1;while(k<4&&!a.c.H()&&a.c.cq()){f=b.data;j=k+1|0;f[k]=a.c.l();k=j;}if(k==1){f=b.data;if
(!Nl(f[0]))return F7(a,f[0]);}if(!Bd(a,2))return ADY(b,k);if(Bd(a,64))return ADe(b,k);return ADR(b,k);}
function Fi(a,b){var c,d,e,f;if(a.c.cq()&&!a.c.fi()&&DZ(a.c.bi())){if(!Bd(a,128)){if(!a.c.hM()&&!a.c.iX())c=JJ(a);else{d=F3(a,b);c=D8(a,b,d);}}else{c=JU(a);if(!a.c.H()){e=a.c;if(!(e.R()==(-536870871)&&!(b instanceof Cp))){e=a.c;if(e.R()!=(-536870788)&&!a.c.cq())c=D8(a,b,c);}}}}else if(a.c.R()!=(-536870871)){d=F3(a,b);c=D8(a,b,d);}else{if(b instanceof Cp)G(Ba(B(25),a.c.e(),a.c.bu()));c=Cv(b);}a:{if(!a.c.H()){e=a.c;if(!(e.R()==(-536870871)&&!(b instanceof Cp))){e=a.c;if(e.R()!=(-536870788)){f=Fi(a,b);if(c instanceof Bx
&&!(c instanceof Cd)&&!(c instanceof Bw)&&!(c instanceof Cb)){e=c;if(!f.Z(e.ef()))c=AB1(e);}if((f.cP()&65535)!=43)c.t(f);else c.t(f.ef());break a;}}}if(c===null)return null;c.t(b);}if((c.cP()&65535)!=43)return c;return c.ef();}
function D8(a,b,c){var d,e,f,g,h,i,j;d=a.c.R();if(c!==null&&!(c instanceof Z)){switch(d){case -2147483606:a.c.l();return ACu(c,b,d);case -2147483605:a.c.l();return AA9(c,b,(-2147483606));case -2147483585:a.c.l();return ABs(c,b,(-536870849));case -2147483525:e=new EH;f=a.c.cx();g=a.b$+1|0;a.b$=g;HK(e,f,c,b,(-536870849),g);return e;case -1073741782:case -1073741781:a.c.l();h=ACQ(c,b,d);c.t(h);return h;case -1073741761:a.c.l();h=ACA(c,b,(-536870849));c.t(b);return h;case -1073741701:h=new Fe;e=a.c;e=e.cx();i=a.b$
+1|0;a.b$=i;HF(h,e,c,b,(-536870849),i);c.t(h);return h;case -536870870:case -536870869:a.c.l();h=c.cP()!=(-2147483602)?ABY(c,b,d):Bd(a,32)?AC1(c,b,d):ABM(c,b,d,Fo(a.bm));c.t(h);return h;case -536870849:a.c.l();h=ADC(c,b,(-536870849));c.t(b);return h;case -536870789:h=new Ch;e=a.c;e=e.cx();g=a.b$+1|0;a.b$=g;Dr(h,e,c,b,(-536870849),g);c.t(h);return h;default:}return c;}j=null;if(c!==null)j=c;switch(d){case -2147483606:case -2147483605:a.c.l();h=ACk(j,b,d);j.t(h);return h;case -2147483585:a.c.l();return AA$(j,
b,(-2147483585));case -2147483525:return ADc(a.c.cx(),j,b,(-2147483525));case -1073741782:case -1073741781:a.c.l();h=AC0(j,b,d);j.t(h);return h;case -1073741761:a.c.l();return ACx(j,b,(-1073741761));case -1073741701:return ADr(a.c.cx(),j,b,(-1073741701));case -536870870:case -536870869:a.c.l();h=ABW(j,b,d);j.t(h);return h;case -536870849:a.c.l();return AA3(j,b,(-536870849));case -536870789:return ACq(a.c.cx(),j,b,(-536870789));default:}return c;}
function F3(a,b){var c,d,e,f,g,h,i,j,k,l;c=null;while(true){a:{d=a.c.R();if((d&(-2147418113))==(-2147483608)){a.c.l();e=(d&16711680)>>16;d=d&(-16711681);if(d==(-16777176))a.bm=e;else{if(d!=(-1073741784))e=a.bm;c=Gf(a,d,e,b);if(a.c.R()!=(-536870871))G(Ba(B(25),a.c.e(),a.c.bu()));a.c.l();}}else{b:{c:{switch(d){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:f=(d&2147483647)-48|0;if(a.bW<f)G(Ba(B(25),a.c.e(),
a.c.bu()));a.c.l();a.P=a.P+1|0;c=!Bd(a,2)?ABg(f,a.P):Bd(a,64)?ADn(f,a.P):ADL(f,a.P);a.fj.data[f].ff=1;a.g3=1;break a;case -2147483583:break;case -2147483582:a.c.l();c=V8(0);break a;case -2147483577:a.c.l();c=ACr();break a;case -2147483558:a.c.l();c=new FW;g=a.P+1|0;a.P=g;Ks(c,g);break a;case -2147483550:a.c.l();c=V8(1);break a;case -2147483526:a.c.l();c=ACV();break a;case -536870876:break c;case -536870866:a.c.l();if(Bd(a,32)){c=ADs();break a;}c=AB8(Fo(a.bm));break a;case -536870821:a.c.l();h=0;if(a.c.R()==
(-536870818)){h=1;a.c.l();}c=HN(a,h,b);if(a.c.R()!=(-536870819))G(Ba(B(25),a.c.e(),a.c.bu()));a.c.d6(1);a.c.l();break a;case -536870818:a.c.l();a.P=a.P+1|0;if(!Bd(a,8)){c=Wr();break a;}c=ACX(Fo(a.bm));break a;case 0:i=a.c.fh();if(i!==null)c=Ee(a,i);else{if(a.c.H()){c=Cv(b);break a;}c=JT(d&65535);}a.c.l();break a;default:break b;}a.c.l();c=Wr();break a;}a.c.l();a.P=a.P+1|0;if(Bd(a,8)){if(Bd(a,1)){c=ADo(a.P);break a;}c=AA6(a.P);break a;}if(Bd(a,1)){c=AAS(a.P);break a;}c=ACo(a.P);break a;}if(d>=0&&!a.c.dj()){c
=F7(a,d);a.c.l();}else if(d==(-536870788))c=Cv(b);else{if(d!=(-536870871)){j=new FN;k=a.c;if(!k.dj()){g=d&65535;k=FU(g);}else k=a.c.fh().e();l=a.c;HE(j,k,l.e(),a.c.bu());G(j);}if(b instanceof Cp)G(Ba(B(25),a.c.e(),a.c.bu()));c=Cv(b);}}}if(d!=(-16777176))break;}return c;}
function HN(a,b,c){var d,e;d=Cs(a,b);e=Ee(a,d);e.t(c);return e;}
function Cs(a,b){var c,d,e,f,g,h,i,j,k,$$je;c=ACN(b,Bd(a,2),Bd(a,64));d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(a.c.H())break a;f=a.c.R()==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(a.c.R()){case -536870874:if(d>=0)c.bg(d);d=a.c.l();if(a.c.R()!=(-536870874)){d=38;break d;}if(a.c.bi()==(-536870821)){a.c.l();e=1;d=(-1);break d;}a.c.l();if(g){c=Cs(a,0);break d;}if(a.c.R()==(-536870819))break d;c.gt(Cs(a,0));break d;case -536870867:if(!g&&a.c.bi()!=(-536870819)){h=a.c;if(h.bi()!=(-536870821)&&d>=0){a.c.l();i=
a.c.R();if(a.c.dj())break c;if(i<0){h=a.c;if(h.bi()!=(-536870819)){h=a.c;if(h.bi()!=(-536870821)&&d>=0)break c;}}e:{try{if(DZ(i))break e;i=i&65535;break e;}catch($$e){$$je=Bb($$e);if($$je instanceof Br){break b;}else{throw $$e;}}}try{c.J(d,i);}catch($$e){$$je=Bb($$e);if($$je instanceof Br){break b;}else{throw $$e;}}a.c.l();d=(-1);break d;}}if(d>=0)c.bg(d);d=45;a.c.l();break d;case -536870821:if(d>=0){c.bg(d);d=(-1);}a.c.l();j=0;if(a.c.R()==(-536870818)){a.c.l();j=1;}if(!e)c.jK(Cs(a,j));else c.gt(Cs(a,j));e=
0;a.c.l();break d;case -536870819:if(d>=0)c.bg(d);d=93;a.c.l();break d;case -536870818:if(d>=0)c.bg(d);d=94;a.c.l();break d;case 0:if(d>=0)c.bg(d);k=a.c.fh();if(k===null)d=0;else{c.lH(k);d=(-1);}a.c.l();break d;default:}if(d>=0)c.bg(d);d=a.c.l();}g=0;}G(Ba(B(25),DM(a),a.c.bu()));}G(Ba(B(25),DM(a),a.c.bu()));}if(!f){if(d>=0)c.bg(d);return c;}G(Ba(B(25),DM(a),a.c.bu()-1|0));}
function F7(a,b){var c;c=D1(b);if(Bd(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return Sd(b&65535);}if(Bd(a,64)&&b>128){if(c)return ABw(b);if(Fc(b))return P4(b&65535);if(!El(b))return SL(b&65535);return Yu(b&65535);}}if(c)return ABE(b);if(Fc(b))return P4(b&65535);if(!El(b))return JT(b&65535);return Yu(b&65535);}
function Ee(a,b){var c,d;if(!b.jy()){if(!b.gB()){if(b.ck())return Xu(b);return V_(b);}if(b.ck())return Pt(b);return Zx(b);}c=b.jk();d=AAZ(c);if(!b.gB()){if(b.ck())return EZ(Xu(b.dQ()),d);return EZ(V_(b.dQ()),d);}if(b.ck())return EZ(Pt(b.dQ()),d);return EZ(Zx(b.dQ()),d);}
function TN(b){return UD(b,0);}
function Kl(a){if(a.g3)a.eH.bD();}
function ZD(b){var c,d,e,f;c=J().a(B(388));d=0;while(true){e=b.gO(B(389),d);if(e<0)break;f=e+2|0;c.a(b.ch(d,f)).a(B(390));d=f;}return c.a(b.e9(d)).a(B(389)).e();}
function Ha(a){return a.bW;}
function K3(a){return a.b$+1|0;}
function If(a){return a.P+1|0;}
function C6(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function Bd(a,b){return (a.bm&b)!=b?0:1;}
function Oj(a){M(a);a.fj=F(Bt,10);a.bW=(-1);a.b$=(-1);a.P=(-1);}
function Jx(){CO.call(this);}
function ABs(a,b,c){var d=new Jx();V7(d,a,b,c);return d;}
function V7(a,b,c,d){Eu(a,b,c,d);Ec();b.t(AEN);}
function Zh(a,b,c,d){var e;e=a.w.b(b,c,d);if(e<=0)e=b;return a.f.b(e,c,d);}
function PI(a,b){a.f=b;}
function Lv(){U.call(this);}
function I5(){var a=new Lv();Wk(a);return a;}
function Wk(a){BB(a);}
function He(){L.call(this);}
function AAV(){var a=new He();NF(a);return a;}
function NF(a){R(a);}
function Yq(a){var b;b=ACP(a);b.y=1;return b;}
function Mz(){var a=this;DI.call(a);a.dc=0;a.bp=null;a.er=0;a.i7=0.0;a.f$=0;}
function AAE(){var a=new Mz();Ux(a);return a;}
function AF_(a){var b=new Mz();Gz(b,a);return b;}
function AGa(a,b){var c=new Mz();Md(c,a,b);return c;}
function W7(a,b){return F(EC,b);}
function Ux(a){Gz(a,16);}
function Gz(a,b){Md(a,b,0.75);}
function L0(b){var c,d;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;d=c|c>>1;d=d|d>>2;d=d|d>>4;d=d|d>>8;d=d|d>>16;return d+1|0;}
function Md(a,b,c){var d;J3(a);if(b>=0&&c>0.0){d=L0(b);a.dc=0;a.bp=a.hk(d);a.i7=c;Fa(a);return;}G(Cw());}
function Fa(a){a.f$=a.bp.data.length*a.i7|0;}
function Xg(a,b){var c;c=Hp(a,b);if(c===null)return null;return c.ee;}
function Hp(a,b){var c,d,e;if(b===null)c=Gk(a);else{d=I1(b);e=d&(a.bp.data.length-1|0);c=FC(a,b,e,d);}return c;}
function FC(a,b,c,d){var e,f;e=a.bp.data[c];while(e!==null){if(e.eU==d){f=e.fo;if(Qg(b,f))break;}e=e.dm;}return e;}
function Gk(a){var b;b=a.bp.data[0];while(b!==null&&b.fo!==null){b=b.dm;}return b;}
function Ph(a,b,c){return a.lr(b,c);}
function WG(a,b,c){var d,e,f,g,h;if(b===null){d=Gk(a);if(d===null){a.er=a.er+1|0;d=a.hD(null,0,0);e=a.dc+1|0;a.dc=e;if(e>a.f$)a.hC();}}else{f=I1(b);g=f&(a.bp.data.length-1|0);d=FC(a,b,g,f);if(d===null){a.er=a.er+1|0;d=a.hD(b,g,f);e=a.dc+1|0;a.dc=e;if(e>a.f$)a.hC();}}h=d.ee;d.ee=c;return h;}
function Sb(a,b,c,d){var e;e=ACz(b,d);e.dm=a.bp.data[c];a.bp.data[c]=e;return e;}
function Wt(a,b){var c,d,e,f,g,h,i;c=L0(!b?1:b<<1);d=a.hk(c);e=0;while(e<a.bp.data.length){f=a.bp.data[e];a.bp.data[e]=null;while(f!==null){g=d.data;h=f.eU&(c-1|0);i=f.dm;f.dm=g[h];g[h]=f;f=i;}e=e+1|0;}a.bp=d;Fa(a);}
function SX(a){a.km(a.bp.data.length);}
function I1(b){return b.hP();}
function Qg(b,c){return b!==c&&!b.bz(c)?0:1;}
function G3(){S.call(this);this.c$=0;}
function ADo(a){var b=new G3();Xv(b,a);return b;}
function Xv(a,b){Bo(a);a.c$=b;}
function Qm(a,b,c,d){var e;e=!d.cU()?c.g()-b|0:d.q()-b|0;if(e<=0){d.D(a.c$,0);return a.f.b(b,c,d);}if(c.d(b)!=10)return (-1);d.D(a.c$,1);return a.f.b(b+1|0,c,d);}
function VU(a,b){var c;c=!b.bF(a.c$)?0:1;b.D(a.c$,(-1));return c;}
function HZ(){C.call(this);}
function B8(b,c){var d,e,f;d=BY();e=SV();f=0;while(f<b.g()){if(b.d(f)!=c)e.g5(b.d(f));if(!(b.d(f)!=c&&f!=(b.g()-1|0))&&e.g()>0){d.bo(e.e());e.dS(0);}f=f+1|0;}return d;}
function Mq(){L.call(this);}
function ACy(){var a=new Mq();AAp(a);return a;}
function AAp(a){R(a);}
function Z_(a){var b;b=ADz(a);b.y=1;return b;}
function EJ(){var a=this;C.call(a);a.fN=0;a.gE=0;a.ig=null;}
function VN(a,b,c){var d=new EJ();Vl(d,a,b,c);return d;}
function Vl(a,b,c,d){M(a);a.fN=b;a.gE=c;a.ig=d;}
function DU(){var a=this;C.call(a);a.cR=0;a.d1=0;}
var AEM=null;var AEK=null;function Bj(){Bj=Be(DU);UL();}
function Io(a,b){var c=new DU();Jy(c,a,b);return c;}
function Jy(a,b,c){Bj();M(a);a.cR=b;a.d1=c;}
function O1(a){return a.cR?0:1;}
function Xb(a){return a.cR!=1?0:1;}
function ZX(a){return !a.hY()&&!a.f4()?0:1;}
function Xe(a){return a.cR!=2?0:1;}
function Xx(a){return a.cR!=3?0:1;}
function Vq(a){if(a.fV())return a.d1;G(AC7());}
function BM(b){Bj();return Io(2,b);}
function T6(a){switch(a.cR){case 0:G(ACL());case 1:G(ADH());case 2:G(AB0(a.d1));case 3:G(ACM(a.d1));default:}}
function UL(){AEM=Io(0,0);AEK=Io(1,0);}
function FW(){S.call(this);this.cV=0;}
function ACo(a){var b=new FW();Ks(b,a);return b;}
function Ks(a,b){Bo(a);a.cV=b;}
function Sf(a,b,c,d){var e,f,g,h;e=!d.cU()?c.g():d.q();if(b>=e){d.D(a.cV,0);return a.f.b(b,c,d);}f=e-b|0;if(f==2&&c.d(b)==13){g=b+1|0;if(c.d(g)==10){d.D(a.cV,0);return a.f.b(b,c,d);}}a:{if(f==1){h=c.d(b);if(h==10)break a;if(h==13)break a;if(h==133)break a;if((h|1)==8233)break a;}return (-1);}d.D(a.cV,0);return a.f.b(b,c,d);}
function SP(a,b){var c;c=!b.bF(a.cV)?0:1;b.D(a.cV,(-1));return c;}
function JG(){B_.call(this);}
function ACR(){var a=new JG();XC(a);return a;}
function XC(a){Fk(a);}
function UK(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function Yz(a,b,c){var d;a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}d=1;break a;}d=0;}return d;}
function JF(){B_.call(this);}
function ABV(){var a=new JF();QU(a);return a;}
function QU(a){Fk(a);}
function Sg(a,b){return b!=10?0:1;}
function S7(a,b,c){return b!=10?0:1;}
function LG(){CQ.call(this);}
function Na(){L.call(this);}
function AB6(){var a=new Na();XO(a);return a;}
function XO(a){R(a);}
function TM(a){var b;b=ADW(a);b.y=1;return b;}
function CX(){var a=this;C.call(a);a.r=null;a.cS=0;a.bI=0;a.ic=0;a.fM=0;a.bE=0;a.i=0;a.gL=0;a.cO=null;a.cf=null;a.k=0;a.dz=0;a.dJ=0;a.dy=0;a.hn=null;}
var AGb=null;var AGc=null;var AGd=0;function ACI(a,b){var c=new CX();WU(c,a,b);return c;}
function WU(a,b,c){M(a);a.bI=1;a.hn=b;if((c&16)>0)b=ZD(b);else if((c&128)>0)b=Th(b);a.r=$rt_createCharArray(b.g()+2|0);Gr(b.cg(),0,a.r,0,b.g());a.r.data[a.r.data.length-1|0]=0;a.r.data[a.r.data.length-2|0]=0;a.gL=a.r.data.length;a.cS=c;Cc(a);Cc(a);}
function Z6(a){return a.bE;}
function Si(a,b){if(b>0&&b<3)a.bI=b;if(b==1)Ll(a);}
function RO(a,b){a.cS=b;a.i=a.bE;a.cf=a.cO;a.k=a.dJ+1|0;a.dy=a.dJ;Cc(a);}
function TZ(a){return a.cO;}
function R0(a){return a.cO===null?0:1;}
function RE(a){return a.cf===null?0:1;}
function Tt(a){Cc(a);return a.fM;}
function SZ(a){var b;b=a.cO;Cc(a);return b;}
function P$(a){return a.i;}
function Vp(a){return a.fM;}
function Th(b){return b;}
function Ll(a){a.i=a.bE;a.cf=a.cO;a.k=a.dy;a.dy=a.dJ;Cc(a);}
function Cc(a){var b,c,d,e,f,g,h,$$je;a.fM=a.bE;a.bE=a.i;a.cO=a.cf;a.dJ=a.dy;a.dy=a.k;while(true){b=0;a.i=a.k>=a.r.data.length?0:DL(a);a.cf=null;if(a.bI==4){if(a.i!=92)return;a.i=a.k>=a.r.data.length?0:a.r.data[Y(a)];switch(a.i){case 69:break;default:a.i=92;a.k=a.dz;return;}a.bI=a.ic;a.i=a.k>(a.r.data.length-2|0)?0:DL(a);}a:{if(a.i!=92){if(a.bI==1)switch(a.i){case 36:a.i=(-536870876);break a;case 40:if(a.r.data[a.k]!=63){a.i=(-2147483608);break a;}Y(a);c=a.r.data[a.k];d=0;while(true){b:{if(d){d=0;switch(c){case 33:break;case 61:a.i
=(-134217688);Y(a);break b;default:G(Ba(B(25),a.e(),a.k));}a.i=(-67108824);Y(a);}else{switch(c){case 33:break;case 60:Y(a);c=a.r.data[a.k];d=1;break b;case 61:a.i=(-536870872);Y(a);break b;case 62:a.i=(-33554392);Y(a);break b;default:a.i=ML(a);if(a.i<256){a.cS=a.i;a.i=a.i<<16;a.i=(-1073741784)|a.i;break b;}a.i=a.i&255;a.cS=a.i;a.i=a.i<<16;a.i=(-16777176)|a.i;break b;}a.i=(-268435416);Y(a);}}if(!d)break;}break a;case 41:a.i=(-536870871);break a;case 42:case 43:case 63:e=a.k>=a.r.data.length?42:a.r.data[a.k];switch
(e){case 43:a.i=a.i|(-2147483648);Y(a);break a;case 63:a.i=a.i|(-1073741824);Y(a);break a;default:}a.i=a.i|(-536870912);break a;case 46:a.i=(-536870866);break a;case 91:a.i=(-536870821);a.d6(2);break a;case 93:if(a.bI!=2)break a;a.i=(-536870819);break a;case 94:a.i=(-536870818);break a;case 123:a.cf=Ln(a,a.i);break a;case 124:a.i=(-536870788);break a;default:}else if(a.bI==2)switch(a.i){case 38:a.i=(-536870874);break a;case 45:a.i=(-536870867);break a;case 91:a.i=(-536870821);break a;case 93:a.i=(-536870819);break a;case 94:a.i
=(-536870818);break a;default:}}else{f=a.k>=(a.r.data.length-2|0)?(-1):DL(a);c:{a.i=f;switch(a.i){case -1:G(Ba(B(25),a.e(),a.k));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.i
=HW(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.bI!=1)break a;a.i=(-2147483648)|a.i;break a;case 65:a.i=(-2147483583);break a;case 66:a.i=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:G(Ba(B(25),a.e(),a.k));case 68:case 83:case 87:case 100:case 115:case 119:a.cf=Gh(E_(a.r,
a.dz,1),0);a.i=0;break a;case 71:a.i=(-2147483577);break a;case 80:case 112:break c;case 81:a.ic=a.bI;a.bI=4;b=1;break a;case 90:a.i=(-2147483558);break a;case 97:a.i=7;break a;case 98:a.i=(-2147483550);break a;case 99:if(a.k>=(a.r.data.length-2|0))G(Ba(B(25),a.e(),a.k));a.i=a.r.data[Y(a)]&31;break a;case 101:a.i=27;break a;case 102:a.i=12;break a;case 110:a.i=10;break a;case 114:a.i=13;break a;case 116:a.i=9;break a;case 117:a.i=Fu(a,4);break a;case 120:a.i=Fu(a,2);break a;case 122:a.i=(-2147483526);break a;default:}break a;}g
=Hu(a);h=0;if(a.i==80)h=1;try{a.cf=Gh(g,h);}catch($$e){$$je=Bb($$e);if($$je instanceof ED){G(Ba(B(25),a.e(),a.k));}else{throw $$e;}}a.i=0;}}if(b)continue;else break;}}
function Hu(a){var b,c,d;b=GV(10);if(a.k<(a.r.data.length-2|0)){if(a.r.data[a.k]!=123)return J().a(B(391)).a(E_(a.r,Y(a),1)).e();Y(a);c=0;a:{while(a.k<(a.r.data.length-2|0)){c=a.r.data[Y(a)];if(c==125)break a;b.bt(c);}}if(c!=125)G(Ba(B(25),a.e(),a.k));}if(!b.g())G(Ba(B(25),a.e(),a.k));d=b.e();if(d.g()==1)return J().a(B(391)).a(d).e();b:{c:{if(d.g()>3){if(d.ej(B(391)))break c;if(d.ej(B(392)))break c;}break b;}d=d.e9(2);}return d;}
function Ln(a,b){var c,d,e,f,$$je;c=GV(4);d=(-1);e=2147483647;a:{while(true){if(a.k>=a.r.data.length)break a;b=a.r.data[Y(a)];if(b==125)break a;if(b==44&&d<0)try{d=CY(c.e(),10);c.j1(0,c.g());continue;}catch($$e){$$je=Bb($$e);if($$je instanceof Ct){break;}else{throw $$e;}}c.bt(b&65535);}G(Ba(B(25),a.e(),a.k));}if(b!=125)G(Ba(B(25),a.e(),a.k));if(c.g()>0)b:{try{e=CY(c.e(),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=Bb($$e);if($$je instanceof Ct){}else{throw $$e;}}G(Ba(B(25),a.e(),a.k));}else if(d<0)G(Ba(B(25),
a.e(),a.k));if((d|e|(e-d|0))<0)G(Ba(B(25),a.e(),a.k));f=a.k>=a.r.data.length?42:a.r.data[a.k];c:{switch(f){case 43:a.i=(-2147483525);Y(a);break c;case 63:a.i=(-1073741701);Y(a);break c;default:}a.i=(-536870789);}return ABS(d,e);}
function Wl(a){return a.hn;}
function X6(a){return !a.bE&&!a.i&&a.k==a.gL&&!a.dj()?1:0;}
function DZ(b){return b<0?0:1;}
function YP(a){return !a.H()&&!a.dj()&&DZ(a.bE)?1:0;}
function Rj(a){return a.bE<=56319&&a.bE>=55296?1:0;}
function Tn(a){return a.bE<=57343&&a.bE>=56320?1:0;}
function El(b){return b<=56319&&b>=55296?1:0;}
function Fc(b){return b<=57343&&b>=56320?1:0;}
function Fu(a,b){var c,d,e,f,$$je;c=GV(b);d=a.r.data.length-2|0;e=0;while(true){f=BX(e,b);if(f>=0)break;if(a.k>=d)break;c.bt(a.r.data[Y(a)]);e=e+1|0;}if(!f)a:{try{f=CY(c.e(),16);}catch($$e){$$je=Bb($$e);if($$je instanceof Ct){break a;}else{throw $$e;}}return f;}G(Ba(B(25),a.e(),a.k));}
function HW(a){var b,c,d,e,f;b=3;c=1;d=a.r.data.length-2|0;e=E9(a.r.data[a.k],8);switch(e){case -1:break;default:if(e>3)b=2;Y(a);a:{while(true){if(c>=b)break a;if(a.k>=d)break a;f=E9(a.r.data[a.k],8);if(f<0)break;e=(e*8|0)+f|0;Y(a);c=c+1|0;}}return e;}G(Ba(B(25),a.e(),a.k));}
function ML(a){var b,c,d;b=1;c=a.cS;a:while(true){if(a.k>=a.r.data.length)G(Ba(B(25),a.e(),a.k));b:{c:{d=a.r.data[a.k];switch(d){case 41:Y(a);return c|256;case 45:if(!b)G(Ba(B(25),a.e(),a.k));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}Y(a);}Y(a);return c;}
function Y(a){a.dz=a.k;if(a.cS&4)HG(a);else a.k=a.k+1|0;return a.dz;}
function HG(a){var b;b=a.r.data.length-2|0;a.k=a.k+1|0;a:while(true){if(a.k<b&&I9(a.r.data[a.k])){a.k=a.k+1|0;continue;}if(a.k>=b)break;if(a.r.data[a.k]!=35)break;a.k=a.k+1|0;while(true){if(a.k>=b)continue a;if(K7(a,a.r.data[a.k]))continue a;a.k=a.k+1|0;}}return a.k;}
function K7(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function KU(b){return AGb.oB(b);}
function TK(b){var c,d,e,f,g,h,i;c=b-44032|0;if(c>=0&&c<11172){d=4352+(c/588|0)|0;e=4449+((c%588|0)/28|0)|0;f=c%28|0;if(!f){g=$rt_createIntArray(2);h=g.data;h[0]=d;h[1]=e;}else{i=4519+f|0;g=$rt_createIntArray(3);h=g.data;h[0]=d;h[1]=e;h[2]=i;}return g;}return null;}
function Nl(b){var c;c=AGc.fF(b);return c==AGd?0:1;}
function Rb(b){return (b!=832?0:1)|(b!=833?0:1)|(b!=835?0:1)|(b!=836?0:1);}
function DL(a){var b,c,d;b=a.r.data[Y(a)];if(Bm(b)){c=a.dz+1|0;if(c<a.r.data.length){d=a.r.data[c];if(Bu(d)){Y(a);return BT(b,d);}}}return b;}
function Rg(a){return a.dJ;}
function Kf(){L.call(this);}
function ABB(){var a=new Kf();YU(a);return a;}
function YU(a){R(a);}
function X7(a){return By().J(65279,65279).J(65520,65533);}
function Jw(){var a=this;C.call(a);a.ho=null;a.iT=0;}
function ACf(a){var b=new Jw();T0(b,a);return b;}
function T0(a,b){M(a);a.ho=b;}
function MA(){Do.call(this);}
function AAQ(){var a=new MA();XN(a);return a;}
function XN(a){L7(a);}
function QO(a){var b;b=LX(a).b9(1);b.y=1;return b;}
function Mn(){C.call(this);this.fG=0;}
function ADV(a){var b=new Mn();Uy(b,a);return b;}
function Uy(a,b){M(a);a.fG=b;}
function RH(a,b){var c,d;c=AA0();d=ADx(c);Js(a,b,d);return c.kd(B(289));}
function Js(a,b,c){Jm(a,b.kr(),c);GT(a,b.k9(),c);Hg(a,b.hU(),c);c.bL(B(393));c.bL(B(394));Mh(a,b.hU(),a.fG,c);c.bL(B(395));c.bL(B(396));IS(a,b.lN(),a.fG,c);c.bL(B(395));c.bL(B(395));Lw(a,b.jz(),c);}
function Jm(a,b,c){var d,e;a:{if(b!==null){d=b.X();while(true){if(!d.Y())break a;e=d.V();c.n(J().a(B(397)).a(e).a(B(398)).e());}}}}
function GT(a,b,c){var d,e,f,g,h,i,j;c.n(B(399));c.n(B(400));d=0.0;e=0.0;f=0;while(f<5){g=b.data;h=9-f|0;if(!(g[f]<=0.0&&g[h]<=0.0)){c.n(B(401));i=J().a(B(402)).m(f).a(B(403)).a(Bl(g[f]*100.0,2)).a(B(404)).m(h).a(B(403));j=g[h]*100.0;i=i.a(Bl(j,2)).a(B(405)).e();c.n(i);c.n(B(406));}d=d+g[f];e=e+g[h];f=f+1|0;}c.n(B(407));i=J().a(B(408)).a(Bl(d*100.0,2)).a(B(409));j=e*100.0;i=i.a(Bl(j,2)).a(B(405)).e();c.n(i);c.n(B(406));c.n(B(410));}
function Hg(a,b,c){var d,e,f,g,h,i,j;d=SR(b);c.n(B(411));c.n(B(400));e=0.0;f=0;while(f<5){g=d.data;h=9-f|0;if(!(g[f]<=0.0&&g[h]<=0.0)){c.n(B(401));i=J().a(B(402)).m(f).a(B(403)).a(Bl(g[f]*100.0,3)).a(B(404)).m(h).a(B(403));j=g[h]*100.0;i=i.a(Bl(j,3)).a(B(405)).e();c.n(i);c.n(B(406));j=e+g[f];e=j+g[h];}f=f+1|0;}c.n(B(407));i=J().a(B(412));j=e*100.0;i=i.a(Bl(j,3)).a(B(405)).e();c.n(i);c.n(B(406));c.n(B(410));}
function Mh(a,b,c,d){var e,f,g,h;d.n(B(413));d.n(B(400));e=0;f=b.X();a:{while(true){if(!f.Y())break a;g=f.V();d.n(B(401));h=J().a(B(402)).m(g.ct().bd()).a(B(403));h=h.a(g.cu().c5()).a(B(403));h=h.a(Bl(g.cu().bN()*100.0,3)).a(B(405)).e();d.n(h);d.n(B(406));e=e+1|0;if(e>=c)break;}}d.n(B(410));}
function IS(a,b,c,d){var e,f,g,h;d.n(B(414));d.n(B(400));e=0;f=b.X();a:{while(true){if(!f.Y())break a;g=f.V();d.n(B(401));h=J().a(B(402)).m(g.ct().bd()).a(B(415));h=h.m(g.dx().bd()).a(B(403));h=h.a(g.cu().c5()).a(B(403));h=h.a(Bl(g.cu().bN()*100.0,3)).a(B(405)).e();d.n(h);d.n(B(406));e=e+1|0;if(e>=c)break;}}d.n(B(410));}
function Lw(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;c.n(B(416));c.n(B(400));c.n(B(401));c.n(B(417));c.n(B(406));d=$rt_createDoubleArray(3);e=0;while(e<10){f=b.data;g=f[0].data[e]+f[1].data[e]+f[2].data[e];if(f[0].data[e]>0.0){h=d.data;c.n(B(401));i=J().a(B(402)).m(e).a(B(403)).a(Bl(f[0].data[e],5)).a(B(418));j=f[1].data[e];k=i.a(Bl(j,5)).a(B(418));j=f[2].data[e];i=k.a(Bl(j,5)).a(B(418));i=i.a(Bl(g,5)).a(B(419)).e();c.n(i);c.n(B(406));h[0]=h[0]+f[0].data[e];h[1]=h[1]+f[1].data[e];h[2]=h[2]+f[2].data[e];}e=e+1|0;}l=
d.data;m=l[1]+l[2];n=l[0]+m;c.n(B(407));i=J().a(B(420)).a(Bl(l[0],5)).a(B(421));j=l[1];i=i.a(Bl(j,5)).a(B(421));j=l[2];i=i.a(Bl(j,5)).a(B(421));i=i.a(Bl(n,5)).a(B(419)).e();c.n(i);c.n(B(406));c.n(B(410));}
function Bl(b,c){return $rt_str(b.toFixed(c));}
function B3(){var a=this;Z.call(a);a.cl=null;a.jO=0;}
function V_(a){var b=new B3();RZ(b,a);return b;}
function RZ(a,b){BH(a);a.cl=b.c8();a.jO=b.G;}
function Nn(a,b,c){return !a.cl.j(c.d(b))?(-1):1;}
function Q1(a,b){if(b instanceof B2)return DW(a.cl,b.ci());if(b instanceof B3)return CW(a.cl,b.cl);if(b instanceof BK)return CW(a.cl,b.fc());if(!(b instanceof B1))return 1;return 0;}
function QD(a){return a.cl;}
function D9(){I.call(this);this.eV=0;}
function ADA(a){var b=new D9();HX(b,a);return b;}
function HX(a,b){Q(a);a.eV=b;}
function QJ(a,b){return a.G^(a.eV!=C_(b&65535)?0:1);}
function MH(){D9.call(this);}
function ABr(a){var b=new MH();Pc(b,a);return b;}
function Pc(a,b){HX(a,b);}
function Ve(a,b){return a.G^(!(a.eV>>C_(b&65535)&1)?0:1);}
function Ko(){Cl.call(this);this.io=0;}
function ACM(a){var b=new Ko();Yt(b,a);return b;}
function Yt(a,b){Fq(a);a.io=b;}
function T4(a){return J().a(B(422)).m(a.io).e();}
function Jb(){var a=this;I.call(a);a.eN=0;a.gV=0;a.dY=0;a.gb=0;a.bO=0;a.cv=0;a.v=null;a.F=null;}
function By(){var a=new Jb();AAf(a);return a;}
function AC_(a,b){var c=new Jb();Jj(c,a,b);return c;}
function ACN(a,b,c){var d=new Jb();OI(d,a,b,c);return d;}
function AAf(a){Q(a);a.v=AAH();}
function Jj(a,b,c){Q(a);a.v=AAH();a.eN=b;a.gV=c;}
function OI(a,b,c,d){Jj(a,c,d);a.b9(b);}
function Nh(a,b){a:{if(a.eN){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.bO){a.v.eT(C6(b&65535));break a;}a.v.gi(C6(b&65535));break a;}if(a.gV&&b>128){a.dY=1;b=Co(Cn(b));}}}if(!(!El(b)&&!Fc(b))){if(a.gb)a.K.eT(b-55296|0);else a.K.gi(b-55296|0);}if(a.bO)a.v.eT(b);else a.v.gi(b);if(!a.y&&D1(b))a.y=1;return a;}
function AAx(a,b){var c,d;if(!a.y&&b.y)a.y=1;if(a.gb){if(!b.U)a.K.cX(b.bc());else a.K.bv(b.bc());}else if(!b.U)a.K.cD(b.bc());else{a.K.cQ(b.bc());a.K.bv(b.bc());a.U=a.U?0:1;a.gb=1;}if(!a.cv&&b.M()!==null){if(a.bO){if(!b.c4())a.v.cX(b.M());else a.v.bv(b.M());}else if(!b.c4())a.v.cD(b.M());else{a.v.cQ(b.M());a.v.bv(b.M());a.G=a.G?0:1;a.bO=1;}}else{c=a.G;if(a.F!==null){d=a.F;if(!c)a.F=AC6(a,c,d,b);else a.F=AD0(a,c,d,b);}else{if(c&&!a.bO&&a.v.H())a.F=ACG(a,b);else if(!c)a.F=AAT(a,c,b);else a.F=ACh(a,c,b);a.cv=1;}}return a;}
function WN(a,b,c){if(b>c)G(Cw());a:{if(!a.eN&&!(c>=55296&&b<=57343)){if(a.bO)a.v.jF(b,c+1|0);else a.v.d7(b,c+1|0);}else while(true){if(b>=(c+1|0))break a;a.bg(b);b=b+1|0;}}return a;}
function NU(a,b){var c,d;if(!a.y&&b.y)a.y=1;if(b.ck())a.dY=1;if(!(a.U^b.U)){if(!a.U)a.K.cD(b.bc());else a.K.bv(b.bc());}else if(a.U)a.K.cX(b.bc());else{a.K.cQ(b.bc());a.K.bv(b.bc());a.U=1;}if(!a.cv&&b.M()!==null){if(!(a.G^b.c4())){if(!a.G)a.v.cD(b.M());else a.v.bv(b.M());}else if(a.G)a.v.cX(b.M());else{a.v.cQ(b.M());a.v.bv(b.M());a.G=1;}}else{c=a.G;if(a.F!==null){d=a.F;if(!c)a.F=ACw(a,c,d,b);else a.F=ADZ(a,c,d,b);}else{if(!a.bO&&a.v.H()){if(!c)a.F=ACC(a,b);else a.F=ADg(a,b);}else if(!c)a.F=ABK(a,b,c);else a.F
=ABb(a,b,c);a.cv=1;}}}
function Xc(a,b){var c,d;if(!a.y&&b.y)a.y=1;if(b.ck())a.dY=1;if(!(a.U^b.U)){if(!a.U)a.K.bv(b.bc());else a.K.cD(b.bc());}else if(!a.U)a.K.cX(b.bc());else{a.K.cQ(b.bc());a.K.bv(b.bc());a.U=0;}if(!a.cv&&b.M()!==null){if(!(a.G^b.c4())){if(!a.G)a.v.bv(b.M());else a.v.cD(b.M());}else if(!a.G)a.v.cX(b.M());else{a.v.cQ(b.M());a.v.bv(b.M());a.G=0;}}else{c=a.G;if(a.F!==null){d=a.F;if(!c)a.F=ADS(a,c,d,b);else a.F=ACm(a,c,d,b);}else{if(!a.bO&&a.v.H()){if(!c)a.F=ABm(a,b);else a.F=ABP(a,b);}else if(!c)a.F=ABG(a,b,c);else a.F
=ADQ(a,b,c);a.cv=1;}}}
function SI(a,b){if(a.F!==null)return a.G^a.F.j(b);return a.G^a.v.bQ(b);}
function AAz(a){if(!a.cv)return a.v;return null;}
function U7(a){return a.K;}
function Wp(a){var b,c;if(a.F!==null)return a;b=a.M();c=ACF(a,b);return c.b9(a.c4());}
function Ps(a){var b,c;b=J();c=a.v.dr(0);while(c>=0){b.fD(CL(c));b.bt(124);c=a.v.dr(c+1|0);}if(b.g()>0)b.iy(b.g()-1|0);return b.e();}
function VI(a){return a.dY;}
function KN(){U.call(this);}
function Yi(){var a=new KN();XV(a);return a;}
function XV(a){BB(a);}
function JC(){BV.call(this);}
function ACU(){var a=new JC();YG(a);return a;}
function YG(a){CS(a);}
function Xj(a,b){WV(b);}
function WV(b){$rt_putStderr(b);}
function JY(){var a=this;C.call(a);a.fU=0;a.fr=0;a.hb=0;}
function AC2(){var a=new JY();Nx(a);return a;}
function Nx(a){M(a);}
function Mg(){Ci.call(this);}
function ADe(a,b){var c=new Mg();X5(c,a,b);return c;}
function X5(a,b,c){ES(a,b,c);}
$rt_packages([-1,"java",0,"util",1,"regex",0,"nio",3,"charset",0,"io",0,"lang",-1,"io",7,"github",8,"colemakmods",9,"keyboard"]);
$rt_metadata([C,"Object",6,0,[],0,3,0,["nQ",function(){return Cf(this);},"hP",function(){return Tw(this);},"bz",function(b){return N7(this,b);},"e",function(){return R2(this);},"l0",function(){return Er(this);},"dI",function(){return AAh(this);}],L,0,C,[],1,0,0,["kU",function(b){return Tq(this,b);}],M5,0,L,[],0,0,0,["u",function(){return Tz(this);}],JW,0,L,[],0,0,0,["u",function(){return Ok(this);}],CN,0,C,[],0,3,0,["ed",function(){return VB(this);},"dR",function(){return TU(this);},"j3",function(){return WF(this);
},"et",function(){XJ(this);},"ht",function(b){ZL(this,b);}],Br,0,CN,[],0,3,0,0,U,0,Br,[],0,3,0,0,C5,"IndexOutOfBoundsException",6,U,[],0,3,0,0,Cu,0,C,[],1,0,0,0,I,0,Cu,[],1,0,E5,["M",function(){return Rh(this);},"bc",function(){return PO(this);},"jy",function(){return Oa(this);},"gB",function(){return Xs(this);},"c8",function(){return Vo(this);},"jk",function(){return Qf(this);},"dQ",function(){return Rs(this);},"ck",function(){return YF(this);},"b9",function(b){return WJ(this,b);},"c4",function(){return VG(this);
}],MP,"AbstractCharClass$LazyJavaWhitespace$1",2,I,[],0,0,0,["j",function(b){return PS(this,b);}],BZ,"IOException",5,Br,[],0,3,0,0,Cl,0,BZ,[],0,3,0,0,Jz,"MalformedInputException",4,Cl,[],0,3,0,["dR",function(){return Va(this);}],Kq,0,L,[],0,0,0,["u",function(){return Uz(this);}],HY,0,C,[],0,3,0,["dq",function(){return UJ(this);},"dE",function(b){return UR(this,b);},"gd",function(b){V9(this,b);},"eK",function(b){AAK(this,b);}],BR,0,C,[],3,3,0,0,BO,0,C,[BR],1,3,0,0,BE,0,C,[],3,3,0,0,C$,0,BO,[BE],0,3,B6,["e",function()
{return X0(this);}],Ka,"CloneNotSupportedException",6,Br,[],0,3,0,0,Cg,0,C,[],0,0,ACb,0,S,0,C,[],1,0,Jh,["bh",function(b,c,d){return C7(this,b,c,d);},"bf",function(b,c,d,e){return Db(this,b,c,d,e);},"gF",function(b){S1(this,b);},"cP",function(){return RL(this);},"ke",function(){return UQ(this);},"t",function(b){FK(this,b);},"Z",function(b){return WP(this,b);},"cj",function(){return YL(this);},"bD",function(){GL(this);}],W,0,S,[],0,0,0,["b",function(b,c,d){return WW(this,b,c,d);},"t",function(b){QZ(this,b);},
"Z",function(b){return AAI(this,b);},"x",function(b){return Sq(this,b);},"bD",function(){Sw(this);}],CM,0,W,[],0,0,0,["b",function(b,c,d){return OD(this,b,c,d);},"bh",function(b,c,d){return NG(this,b,c,d);},"bf",function(b,c,d,e){return T_(this,b,c,d,e);},"Z",function(b){return AAv(this,b);},"cj",function(){return Q4(this);},"bD",function(){YT(this);}],BF,0,C,[],3,3,0,0,Dl,0,C,[BF],3,3,0,0,Em,0,C,[Dl],3,3,0,0,BL,0,C,[BF],3,3,0,0,KC,0,C,[Em,BL],3,3,0,0,Gi,0,BO,[BE],0,3,U8,0,Gb,0,C,[BF],3,3,0,0,EA,0,C,[],3,3,
0,0,I_,0,C,[],0,0,0,["i3",function(b,c){X$(this,b,c);},"fF",function(b){return NV(this,b);}],Eg,0,L,[],0,0,0,["u",function(){return Jf(this);}],DO,0,L,[],0,0,0,["u",function(){return Gy(this);}],Ki,0,DO,[],0,0,0,["u",function(){return Xd(this);}],Hj,0,CM,[],0,0,0,["bh",function(b,c,d){return VR(this,b,c,d);},"bf",function(b,c,d,e){return AAr(this,b,c,d,e);},"cj",function(){return SM(this);}],L8,"BufferOverflowException",4,U,[],0,3,0,0,CF,0,W,[],0,0,0,["b",function(b,c,d){return PJ(this,b,c,d);},"t",function(b)
{Sv(this,b);},"c6",function(b){return Tb(this,b);},"x",function(b){return Td(this,b);}],Dw,0,L,[],0,0,0,["u",function(){return M9(this);}],Kz,0,Dw,[],0,0,0,["u",function(){return O8(this);}],KT,"AbstractCharClass$1",2,I,[],0,0,0,["j",function(b){return U6(this,b);}],KQ,"AbstractCharClass$2",2,I,[],0,0,0,["j",function(b){return Ox(this,b);}],Kb,0,L,[],0,0,0,["u",function(){return PP(this);}],Z,0,S,[],1,0,0,["b",function(b,c,d){return ZV(this,b,c,d);},"bb",function(){return VF(this);},"x",function(b){return YZ(this,
b);}],Hw,0,Z,[],0,0,0,["I",function(b,c){return Uh(this,b,c);}],BN,0,S,[],1,0,0,["ef",function(){return AAb(this);},"Z",function(b){return Ua(this,b);},"x",function(b){return Xh(this,b);},"bD",function(){Oo(this);}],Bx,0,BN,[],0,0,0,["b",function(b,c,d){return N9(this,b,c,d);}],Cd,0,Bx,[],0,0,0,["b",function(b,c,d){return Qs(this,b,c,d);}]]);
$rt_metadata([Jg,0,Cd,[],0,0,0,["b",function(b,c,d){return Ud(this,b,c,d);}],Dg,0,C,[],3,3,0,0,B9,0,CN,[],0,3,0,0,CQ,0,B9,[],0,3,0,0,Dy,0,C,[BL],3,3,0,0,Mp,"StringIndexOutOfBoundsException",6,C5,[],0,3,0,0,ED,"MissingResourceException",1,U,[],0,3,0,0,J0,0,C,[],0,3,0,0,JH,"AbstractCharClass$LazyJavaLetterOrDigit$1",2,I,[],0,0,0,["j",function(b){return Od(this,b);}],IB,"CharClass$18",2,I,[],0,0,0,["j",function(b){return AAt(this,b);},"e",function(){return WK(this);}],D0,0,C,[],1,3,0,["mg",function(b){return K$(this,
b);},"fY",function(b){W8(this,b);},"mZ",function(b){return HP(this,b);},"fu",function(b){XA(this,b);},"m5",function(b,c,d){return FA(this,b,c,d);},"oK",function(b){return MC(this,b);},"oy",function(){return LD(this);},"lx",function(b){return I6(this,b);},"mp",function(b){return Eo(this,b);},"kI",function(b){return O9(this,b);},"kC",function(){UH(this);}],Bw,0,BN,[],0,0,0,["b",function(b,c,d){return OA(this,b,c,d);}],Nd,0,Bw,[],0,0,0,["b",function(b,c,d){return S6(this,b,c,d);}],LI,0,CF,[],0,0,0,["b",function(b,
c,d){return ND(this,b,c,d);}],Iy,0,I,[],0,0,0,["j",function(b){return S9(this,b);}],D2,0,C,[],4,3,YV,0,Iz,0,I,[],0,0,0,["j",function(b){return Wb(this,b);}],IA,0,I,[],0,0,0,["j",function(b){return AAO(this,b);}],Lu,0,C,[],4,3,0,0,Ma,0,L,[],0,0,0,["u",function(){return VP(this);}],Ji,0,I,[],0,0,0,["j",function(b){return W_(this,b);}],IC,0,I,[],0,0,0,["j",function(b){return Ro(this,b);}],GD,0,Z,[],0,0,0,["I",function(b,c){return NI(this,b,c);}],ID,0,I,[],0,0,0,["j",function(b){return RR(this,b);}],Ms,0,BN,[],
0,0,0,["b",function(b,c,d){return Z8(this,b,c,d);},"bh",function(b,c,d){return Vu(this,b,c,d);}],IE,0,I,[],0,0,0,["j",function(b){return Y7(this,b);}],Lo,"AbstractCharClass$LazyJavaDefined$1",2,I,[],0,0,0,["j",function(b){return YK(this,b);}],Ix,0,I,[],0,0,0,["j",function(b){return Wa(this,b);}],Bt,0,S,[],0,0,Ec,["b",function(b,c,d){return Qo(this,b,c,d);},"c_",function(){return Oc(this);},"x",function(b){return Rn(this,b);}],Fv,0,Bt,[],0,0,0,["b",function(b,c,d){return RC(this,b,c,d);}],CI,0,C,[BR,Dg],0,0,
0,["oY",function(b){return Ia(this,b);},"fC",function(b,c){return J4(this,b,c);},"oz",function(b){return Im(this,b);},"g0",function(b,c){return PK(this,b,c);},"jC",function(b,c,d){return Ym(this,b,c,d);},"nL",function(b){return Kh(this,b);},"i1",function(b,c){return HB(this,b,c);},"md",function(b){return F8(this,b);},"fR",function(b,c){return F4(this,b,c);},"ot",function(b){return L9(this,b);},"hQ",function(b,c){return Km(this,b,c);},"b3",function(b){ER(this,b);},"e",function(){return EE(this);},"g",function()
{return FQ(this);},"d",function(b){return Hd(this,b);},"f1",function(b,c,d){return FZ(this,b,c,d);},"e8",function(b,c,d,e){return EF(this,b,c,d,e);},"oT",function(b){return ET(this,b);},"g6",function(b,c,d,e){K4(this,b,c,d,e);},"dS",function(b){FE(this,b);},"nn",function(b){return Ld(this,b);},"ns",function(b,c){return LH(this,b,c);},"nJ",function(b,c){BC(this,b,c);}],Dd,0,C,[],3,3,0,0,GU,0,CI,[Dd],0,3,0,["a",function(b){return Ot(this,b);},"m",function(b){return Pi(this,b);},"il",function(b){return Xi(this,
b);},"bt",function(b){return Of(this,b);},"jN",function(b,c,d){return Tl(this,b,c,d);},"fD",function(b){return U1(this,b);},"id",function(b){return OB(this,b);},"k_",function(b,c){return Vs(this,b,c);},"lU",function(b,c,d,e){return S2(this,b,c,d,e);},"j6",function(b,c){return Zy(this,b,c);},"ll",function(b,c){return P7(this,b,c);},"j1",function(b,c){return XQ(this,b,c);},"iy",function(b){return VM(this,b);},"j2",function(b,c){return ZR(this,b,c);},"dS",function(b){Z4(this,b);},"g6",function(b,c,d,e){US(this,
b,c,d,e);},"e8",function(b,c,d,e){return ZJ(this,b,c,d,e);},"f1",function(b,c,d){return Uf(this,b,c,d);},"g",function(){return Q7(this);},"e",function(){return RG(this);},"b3",function(b){Z9(this,b);},"hQ",function(b,c){return Oy(this,b,c);},"fR",function(b,c){return NE(this,b,c);},"i1",function(b,c){return Xl(this,b,c);},"fC",function(b,c){return AAw(this,b,c);}],DH,0,Eg,[],0,0,0,["u",function(){return KK(this);}],KY,"ConcurrentModificationException",1,U,[],0,3,0,0,KL,0,W,[],0,0,0,["b",function(b,c,d){return Qh(this,
b,c,d);},"t",function(b){Qy(this,b);},"x",function(b){return RW(this,b);},"Z",function(b){return Rf(this,b);}],Ga,0,C,[],3,3,0,0,Dv,0,C,[Ga],3,3,0,0,E7,0,C,[],3,3,0,0,BV,0,C,[Dv,E7],1,3,0,["di",function(b,c,d){OS(this,b,c,d);}],MD,0,BV,[],0,3,0,["e1",function(b){OR(this,b);},"di",function(b,c,d){Qc(this,b,c,d);},"b3",function(b){EQ(this,b);},"kd",function(b){return W9(this,b);}],GX,0,W,[],0,0,0,["t",function(b){Vy(this,b);},"b",function(b,c,d){return X1(this,b,c,d);}],Mr,0,Bw,[],0,0,0,["b",function(b,c,d){return Zd(this,
b,c,d);}],Cp,0,Bt,[],0,0,0,["b",function(b,c,d){return Xw(this,b,c,d);}],Ic,0,B9,[],0,3,0,0,J6,0,Bw,[],0,0,0,["b",function(b,c,d){return OQ(this,b,c,d);}],Kr,0,Z,[],0,0,0,["I",function(b,c){return UC(this,b,c);},"bh",function(b,c,d){return Vv(this,b,c,d);},"bf",function(b,c,d,e){return SF(this,b,c,d,e);},"x",function(b){return Pe(this,b);}],In,0,CI,[Dd],0,3,0,["g5",function(b){return Vz(this,b);},"lV",function(b,c,d){return Zc(this,b,c,d);},"ky",function(b){return UG(this,b);},"jG",function(b,c,d,e){return Om(this,
b,c,d,e);},"lJ",function(b,c){return XP(this,b,c);},"dS",function(b){OW(this,b);},"e8",function(b,c,d,e){return VL(this,b,c,d,e);},"f1",function(b,c,d){return Rk(this,b,c,d);},"d",function(b){return NY(this,b);},"g",function(){return ZY(this);},"e",function(){return RA(this);},"b3",function(b){R6(this,b);},"fR",function(b,c){return VC(this,b,c);}],CE,0,C,[],1,3,0,["l7",function(){return Kc(this);},"oL",function(){return BG(this);},"l_",function(b){return FF(this,b);},"mo",function(){return KD(this);},"m9",function()
{return IV(this);},"oG",function(){return MI(this);},"nD",function(){return X(this);},"m6",function(){return BS(this);}],Gu,"AbstractCharClass$LazyJavaUnicodeIdentifierPart$1",2,I,[],0,0,0,["j",function(b){return YX(this,b);}]]);
$rt_metadata([Da,0,C,[],4,0,ACc,["oV",function(b){return LC(this,b);}],Gn,0,L,[],0,0,0,["u",function(){return Ww(this);}],Ci,0,W,[],0,0,0,["t",function(b){YO(this,b);},"b",function(b,c,d){return Qz(this,b,c,d);},"jg",function(){return FM(this);},"ge",function(b,c,d){return YC(this,b,c,d);},"Z",function(b){return ZI(this,b);},"x",function(b){return SE(this,b);}],H8,0,Ci,[],0,0,0,0,CP,0,C,[BE,BR],1,3,0,["l8",function(){return MN(this);}],B$,"KeyboardLayout$KeyboardType",10,CP,[],12,3,DV,0,CD,0,CQ,[],0,3,0,0,K5,
0,CD,[],0,3,0,0,MB,0,Bt,[],0,0,0,["b",function(b,c,d){return SW(this,b,c,d);}],J7,0,L,[],0,0,0,["u",function(){return UZ(this);}],Ea,0,W,[],0,0,0,["b",function(b,c,d){return QA(this,b,c,d);},"x",function(b){return Tc(this,b);}],BU,0,Ea,[],0,0,0,["b",function(b,c,d){return TX(this,b,c,d);},"t",function(b){SB(this,b);}],GN,0,BU,[],0,0,0,["b",function(b,c,d){return QM(this,b,c,d);},"x",function(b){return W1(this,b);}],Cz,0,C,[Dv],1,3,0,0,M4,0,Cz,[],0,3,0,["kl",function(b,c,d){return TA(this,b,c,d);},"bK",function()
{Nr(this);},"nS",function(){MS(this);}],Kv,0,BU,[],0,0,0,["b",function(b,c,d){return Ra(this,b,c,d);},"x",function(b){return VS(this,b);}],Fn,0,C,[],3,3,0,0,HS,0,C,[Fn],0,0,0,["Y",function(){return Pa(this);},"V",function(){return Wy(this);},"mP",function(){Jl(this);}],Fj,0,C,[Dl],3,3,0,0,DK,0,C,[BL],3,3,0,0,D7,0,C,[BL],3,3,0,0,Fx,0,C,[BL],3,3,0,0,D3,0,C,[BL],3,3,0,0,JI,0,C,[Fj,Gb,BL,DK,D7,Fx,D3,Dy],3,3,0,0,IZ,0,C,[],0,3,0,["c5",function(){return TV(this);},"dt",function(){return AAk(this);},"bN",function()
{return Yb(this);}],B5,0,C,[],3,3,0,0,Hb,"Quantifier",2,Cu,[B5],0,0,0,["c1",function(){return WI(this);},"c3",function(){return W2(this);},"e",function(){return PF(this);}],DX,"UnsupportedOperationException",6,U,[],0,3,0,0,MM,"ReadOnlyBufferException",3,DX,[],0,3,0,0,GR,"AbstractCharClass$LazyJavaUpperCase$1",2,I,[],0,0,0,["j",function(b){return QG(this,b);}],Hv,0,C,[],4,3,0,0,Ik,0,C,[],0,3,0,0,JP,0,C,[],4,0,0,0,D4,0,D0,[],1,3,0,["jw",function(b,c){return WM(this,b,c);}],HM,0,D4,[],0,3,0,["kq",function(b,c,
d,e,f,g,h){return Yh(this,b,c,d,e,f,g,h);},"mj",function(b){return Cj(this,b);}],H3,0,CD,[],0,3,0,0,H2,0,L,[],0,0,0,["u",function(){return Uj(this);}],FB,0,C,[],3,3,0,0,DC,0,C,[FB],3,3,0,0,Dn,0,C,[DC],1,3,0,["jm",function(b){return U0(this,b);}],Nf,0,Bx,[],0,0,0,["b",function(b,c,d){return PD(this,b,c,d);}],Jo,0,C,[],0,3,0,["dq",function(){return Pl(this);},"dE",function(b){return Rl(this,b);},"gd",function(b){W0(this,b);},"eK",function(b){S5(this,b);}],JR,0,C,[],4,3,0,0,Cb,0,Bx,[],0,0,0,["b",function(b,c,d)
{return NN(this,b,c,d);},"t",function(b){AAJ(this,b);}],KM,0,Cb,[],0,0,0,["b",function(b,c,d){return OP(this,b,c,d);}],Il,"AbstractCharClass$LazyJavaIdentifierIgnorable$1",2,I,[],0,0,0,["j",function(b){return QE(this,b);}],Gl,0,C,[],3,3,0,0,H4,"AbstractCharClass$LazyJavaLetter$1",2,I,[],0,0,0,["j",function(b){return XZ(this,b);}],K2,0,Bx,[],0,0,0,["b",function(b,c,d){return QQ(this,b,c,d);}],Jp,0,C,[],4,0,0,0]);
$rt_metadata([G6,"AbstractCharClass$LazyJavaUnicodeIdentifierStart$1",2,I,[],0,0,0,["j",function(b){return Tx(this,b);}],IT,0,C,[],4,3,0,0,G0,0,C,[],0,3,0,["jZ",function(b,c,d){RX(this,b,c,d);},"le",function(){return AAe(this);},"cd",function(b){return Pm(this,b);},"dM",function(b,c){return AAP(this,b,c);},"d9",function(){return Zv(this);},"iw",function(){return QN(this);},"cM",function(){return Wn(this);},"k5",function(b){return OU(this,b);},"jJ",function(b,c){Zn(this,b,c);},"lW",function(b,c){return YN(this,
b,c);},"lC",function(b,c,d){Ur(this,b,c,d);},"k4",function(b){return RT(this,b);},"ku",function(){return Xm(this);},"kn",function(b){TP(this,b);}],Eh,0,DH,[],0,0,0,["u",function(){return Gt(this);}],Mu,0,Eh,[],0,0,0,["u",function(){return Oq(this);}],JE,0,L,[],0,0,0,["u",function(){return WH(this);}],Ej,0,C,[],3,3,0,0,D$,0,C,[Ej,B5],0,0,0,0,EC,0,D$,[],0,0,0,0,LT,0,BU,[],0,0,0,["b",function(b,c,d){return Sp(this,b,c,d);},"x",function(b){return AAB(this,b);}],Dj,0,C,[],1,3,0,["mY",function(b){LQ(this,b);},"mx",
function(b){return Gm(this,b);},"fY",function(b){Za(this,b);},"oN",function(b){return LW(this,b);},"fu",function(b){Yj(this,b);},"oj",function(b,c,d){return H_(this,b,c,d);},"mr",function(b){return G1(this,b);},"ju",function(b){return N4(this,b);}],Mw,0,Z,[],0,0,0,["I",function(b,c){return TO(this,b,c);},"bh",function(b,c,d){return Q0(this,b,c,d);},"bf",function(b,c,d,e){return Wq(this,b,c,d,e);},"Z",function(b){return XI(this,b);},"jp",function(b,c,d){return W$(this,b,c,d);},"jA",function(b,c,d){return VD(this,
b,c,d);},"fT",function(b,c){return X2(this,b,c);}],Lh,0,S,[],0,0,0,["b",function(b,c,d){return Qp(this,b,c,d);},"x",function(b){return Ns(this,b);}],Lj,"ArrayStoreException",6,U,[],0,3,0,0,CO,0,Bw,[],0,0,0,["b",function(b,c,d){return U3(this,b,c,d);},"t",function(b){XL(this,b);}],J1,0,L,[],0,0,0,["u",function(){return VZ(this);}],DJ,0,CE,[BE],1,3,0,["lo",function(b,c,d){return Tk(this,b,c,d);},"hX",function(b,c,d){return XE(this,b,c,d);},"mR",function(b){return KS(this,b);},"nE",function(){return EV(this);},
"ep",function(b){return VE(this,b);}],Lx,0,DJ,[],0,0,0,["dN",function(){return Xa(this);}],DY,0,C,[],3,3,0,0,Fl,0,C,[DY],0,0,0,["D",function(b,c){Xp(this,b,c);},"bF",function(b){return AAN(this,b);},"eb",function(){return NS(this);},"gc",function(b){return Z0(this,b);},"bR",function(b,c){Ta(this,b,c);},"fA",function(b,c){Q2(this,b,c);},"cE",function(b){return Sh(this,b);},"ez",function(b){return Sz(this,b);},"jW",function(b){return ZA(this,b);},"hG",function(){return Sl(this);},"eZ",function(b){return SG(this,
b);},"kH",function(){NQ(this);},"hS",function(b){return Os(this,b);},"b6",function(b,c){Ss(this,b,c);},"nU",function(b){F$(this,b);},"jL",function(){XS(this);},"jv",function(){return XU(this);},"h$",function(b,c,d){Zf(this,b,c,d);},"ko",function(){Ty(this);},"oU",function(b,c){Ls(this,b,c);},"kA",function(b){TT(this,b);},"bw",function(){return RK(this);},"q",function(){return NO(this);},"d6",function(b){Uq(this,b);},"ii",function(){return Wg(this);},"cU",function(){return XF(this);},"df",function(){return Or(this);
},"ly",function(){return P0(this);}],IX,0,Z,[],0,0,0,["I",function(b,c){return ZG(this,b,c);}],GH,0,C,[],0,3,0,["ci",function(){return O5(this);},"dt",function(){return ON(this);},"bN",function(){return OO(this);}],GJ,"AbstractCharClass$LazyJavaJavaIdentifierPart$1",2,I,[],0,0,0,["j",function(b){return ZK(this,b);}],H$,0,C,[],0,3,0,["fl",function(){W5(this);},"mh",function(b){Ke(this,b);}],IU,0,C,[],4,3,0,0,Du,0,C,[BE],1,3,0,["lx",function(b){return GZ(this,b);}],C8,0,C,[],0,3,B7,0,Kx,"BufferUnderflowException",
4,U,[],0,3,0,0,BQ,"IllegalArgumentException",6,U,[],0,3,0,0,JQ,"IllegalCharsetNameException",4,BQ,[],0,3,0,0,HA,0,S,[],0,0,0,["b",function(b,c,d){return St(this,b,c,d);},"x",function(b){return Ws(this,b);}],Gc,0,C,[BF],3,3,0,0,Kn,0,C,[BF],1,3,0,0,Dx,0,BV,[],0,3,0,0,K1,0,Dx,[],0,3,0,["di",function(b,c,d){PN(this,b,c,d);},"mS",function(){return J_(this);},"mM",function(b,c,d){EW(this,b,c,d);},"kf",function(b){Ul(this,b);},"bL",function(b){YI(this,b);},"n",function(b){Sr(this,b);},"ls",function(b){Zu(this,b);},
"lz",function(){SY(this);},"l1",function(){Dz(this);}],FH,0,C,[],3,3,0,0,HO,0,BU,[],0,0,0,["b",function(b,c,d){return N6(this,b,c,d);},"x",function(b){return TD(this,b);}],K0,0,CF,[],0,0,0,["b",function(b,c,d){return S4(this,b,c,d);},"bh",function(b,c,d){return WT(this,b,c,d);},"bf",function(b,c,d,e){return O_(this,b,c,d,e);},"Z",function(b){return Ow(this,b);}],I3,0,L,[],0,0,0,["u",function(){return T2(this);}],Iw,0,BN,[],0,0,0,["b",function(b,c,d){return Q5(this,b,c,d);},"bh",function(b,c,d){return NW(this,
b,c,d);},"ny",function(b,c,d){return Fg(this,b,c,d);},"oI",function(b,c,d){return K8(this,b,c,d);}],JL,0,L,[],0,0,0,["u",function(){return Z1(this);}],KA,0,C,[BF],1,3,0,0,DS,0,C,[],4,3,ME,0,LA,0,L,[],0,0,0,["u",function(){return R8(this);}],DI,0,C,[EA],1,3,0,0,Is,0,S,[],0,0,0,["b",function(b,c,d){return Y4(this,b,c,d);},"x",function(b){return AAn(this,b);}],KV,0,Bx,[],0,0,0,["b",function(b,c,d){return ZH(this,b,c,d);},"bh",function(b,c,d){return Pj(this,b,c,d);}],EG,0,C,[],3,3,0,0,KW,0,C,[EG],0,3,0,["lw",function()
{return QT(this);},"jP",function(b){return Uk(this,b);},"bZ",function(){return ZU(this);},"eo",function(){return WY(this);},"kJ",function(){return Rd(this);},"eA",function(){return N1(this);},"j8",function(){return Sx(this);}],LB,0,C,[B5,BR],0,3,0,["gi",function(b){So(this,b);},"d7",function(b,c){XK(this,b,c);},"m_",function(b){return C9(this,b);},"l6",function(b){return CV(this,b);},"eT",function(b){AAF(this,b);},"jF",function(b,c){O4(this,b,c);},"bQ",function(b){return Pb(this,b);},"dr",function(b){return ZC(this,
b);},"lb",function(b){return RM(this,b);},"b3",function(b){C2(this,b);},"nm",function(){CJ(this);},"j$",function(b){return QS(this,b);},"bv",function(b){X8(this,b);},"cX",function(b){ZW(this,b);},"cD",function(b){XT(this,b);},"cQ",function(b){Z7(this,b);},"H",function(){return Ye(this);}]]);
$rt_metadata([F5,0,C,[],3,3,0,0,GP,"AbstractCharClass$LazyJavaJavaIdentifierStart$1",2,I,[],0,0,0,["j",function(b){return T1(this,b);}],F_,0,Bt,[],0,0,0,["b",function(b,c,d){return O7(this,b,c,d);},"x",function(b){return T5(this,b);}],Bf,0,C,[],0,3,Bh,0,D6,0,BO,[BE],0,3,AFH,0,H5,0,C,[],0,3,0,0,B2,0,Z,[],0,0,0,["bb",function(){return Ze(this);},"I",function(b,c){return Xn(this,b,c);},"bh",function(b,c,d){return UO(this,b,c,d);},"bf",function(b,c,d,e){return Zr(this,b,c,d,e);},"ci",function(){return Rc(this);
},"Z",function(b){return Wh(this,b);}],GB,0,Z,[],0,0,0,["I",function(b,c){return Un(this,b,c);}],Ml,0,BV,[],0,0,0,["e1",function(b){N$(this,b);}],DF,0,C,[],4,3,0,0,IG,0,I,[],0,0,0,["j",function(b){return Um(this,b);}],IN,0,I,[],0,0,0,["j",function(b){return Ni(this,b);}],II,0,I,[],0,0,0,["j",function(b){return Tm(this,b);}],IH,0,I,[],0,0,0,["j",function(b){return NH(this,b);}],JB,0,L,[],0,0,0,["u",function(){return AAL(this);}],IJ,0,I,[],0,0,0,["j",function(b){return WZ(this,b);}],Jt,0,L,[],0,0,0,["u",function()
{return YE(this);}],IQ,0,I,[],0,0,0,["j",function(b){return S$(this,b);}],IM,0,I,[],0,0,0,["j",function(b){return Uo(this,b);}],IL,0,I,[],0,0,0,["j",function(b){return NJ(this,b);}],I$,0,W,[],4,0,0,["b",function(b,c,d){return Qb(this,b,c,d);},"t",function(b){TW(this,b);},"cP",function(){return Ng(this);},"x",function(b){return ZS(this,b);}],IO,0,I,[],0,0,0,["j",function(b){return W3(this,b);}],Gs,0,C,[DY],4,3,0,["nV",function(b){return Es(this,b);},"nq",function(b){return Jv(this,b);},"mT",function(){return K6(this);
},"eZ",function(b){return MY(this,b);},"gc",function(b){return Hk(this,b);},"hG",function(){return Mj(this);},"eb",function(){return Kj(this);},"df",function(){return HH(this);}],B0,0,C,[BE],0,3,O,0,K_,0,W,[],0,0,0,["b",function(b,c,d){return Zp(this,b,c,d);},"t",function(b){RB(this,b);},"cP",function(){return PT(this);},"x",function(b){return Ry(this,b);}],GO,0,Z,[],0,0,0,["I",function(b,c){return Op(this,b,c);}],B1,0,Z,[],0,0,0,["I",function(b,c){return Te(this,b,c);},"bh",function(b,c,d){return Pv(this,b,
c,d);},"bf",function(b,c,d,e){return R4(this,b,c,d,e);},"gk",function(){return N_(this);},"Z",function(b){return SU(this,b);}],G9,"AbstractCharClass$LazyJavaLowerCase$1",2,I,[],0,0,0,["j",function(b){return Xt(this,b);}],Mv,0,L,[],0,0,0,["u",function(){return Ny(this);}],BK,0,W,[],0,0,0,["b",function(b,c,d){return UV(this,b,c,d);},"j",function(b){return V2(this,b);},"Z",function(b){return P5(this,b);},"fc",function(){return Zk(this);},"t",function(b){Vd(this,b);},"x",function(b){return Vf(this,b);}],GY,0,BK,
[],0,0,0,["j",function(b){return Y0(this,b);}],Ne,0,L,[],0,0,0,["u",function(){return NT(this);}],B_,0,C,[],1,0,0,0,E6,0,W,[],0,0,0,["t",function(b){NL(this,b);},"jg",function(){return FI(this);},"b",function(b,c,d){return NM(this,b,c,d);},"Z",function(b){return Rz(this,b);},"x",function(b){return WA(this,b);}],Ds,0,CE,[BE,Dd,Dg,Gl],1,3,0,["iE",function(b,c,d){return PM(this,b,c,d);},"kw",function(b){return SC(this,b);},"k0",function(b,c,d){return AAm(this,b,c,d);},"lk",function(b,c,d){return QF(this,b,c,d);
},"or",function(b){return DT(this,b);},"nW",function(){return IR(this);},"ox",function(){return E8(this);},"n4",function(){return G7(this);},"fb",function(b){return Np(this,b);}],DR,0,Ds,[],1,0,0,["dN",function(){return Zz(this);}],L1,0,DR,[],0,0,0,["lq",function(b){return Qj(this,b);},"hi",function(b,c){Nm(this,b,c);},"jB",function(){return Qa(this);},"lB",function(){return Wd(this);},"kS",function(){return Y5(this);}],M2,0,L,[],0,0,0,["u",function(){return XB(this);}],EP,0,C,[],0,3,AA4,["jd",function(b,c)
{return Tf(this,b,c);},"n3",function(b,c,d){return KX(this,b,c,d);},"nu",function(b,c){return FV(this,b,c);},"op",function(b,c){return LP(this,b,c);}],B4,"KeyboardConfig$Section",10,CP,[],12,3,FX,0,H0,"AbstractCharClass$LazyJavaTitleCase$1",2,I,[],0,0,0,["j",function(b){return W4(this,b);}],De,0,C,[],0,3,0,["bZ",function(){return OT(this);},"fq",function(){return XY(this);},"dl",function(){return Oh(this);},"bH",function(){return Sj(this);},"lO",function(b){AAD(this,b);},"eY",function(){return QI(this);},"eI",
function(b){QR(this,b);}],CC,0,C,[BF],3,3,0,0,HJ,0,C,[CC],4,0,0,["fP",function(b){MZ(this,b);},"e0",function(b){return Xq(this,b);}],MK,0,C,[],0,3,0,0,HL,0,C,[CC],4,0,0,["fP",function(b){Lt(this,b);},"e0",function(b){return AAC(this,b);}],Hl,0,C,[CC],4,0,0,["fP",function(b){JM(this,b);},"e0",function(b){return WD(this,b);}],GA,0,C,[],0,3,0,["ct",function(){return Vg(this);},"dx",function(){return YR(this);},"cu",function(){return P1(this);}],MO,"AbstractCharClass$LazyJavaMirrored$1",2,I,[],0,0,0,["j",function(b)
{return VO(this,b);}],L_,"UnsupportedCharsetException",4,BQ,[],0,3,0,0]);
$rt_metadata([Hm,0,C,[CC],4,0,0,["fP",function(b){KR(this,b);},"e0",function(b){return UP(this,b);}],Lq,"AbstractCharClass$LazyJavaISOControl$1",2,I,[],0,0,0,["j",function(b){return TB(this,b);}],J8,0,S,[],0,0,0,["b",function(b,c,d){return Q_(this,b,c,d);},"x",function(b){return Rx(this,b);},"ml",function(b,c,d,e){return FJ(this,b,c,d,e);}],KP,0,S,[],4,0,0,["b",function(b,c,d){return ZP(this,b,c,d);},"x",function(b){return Wf(this,b);}],Do,0,L,[],0,0,0,["u",function(){return LX(this);}],Hi,0,C,[],0,3,0,["kr",
function(){return PX(this);},"lm",function(){return Vh(this);},"k9",function(){return WO(this);},"hU",function(){return Py(this);},"lN",function(){return YW(this);},"jz",function(){return Uc(this);}],LS,0,Z,[],0,0,0,["I",function(b,c){return Nv(this,b,c);}],DQ,0,BO,[BE],0,3,FD,["dU",function(){return AAj(this);}],Ex,0,Bt,[],0,0,0,["b",function(b,c,d){return Po(this,b,c,d);},"bu",function(){return RV(this);},"x",function(b){return Q8(this,b);}],Dp,0,W,[],0,0,0,["t",function(b){QL(this,b);},"b",function(b,c,d)
{return SO(this,b,c,d);},"bh",function(b,c,d){return XD(this,b,c,d);},"bf",function(b,c,d,e){return T7(this,b,c,d,e);},"Z",function(b){return O0(this,b);},"x",function(b){return VX(this,b);}],E$,0,C,[BL,DK,D7,D3,Dy],3,3,0,0,LR,0,B9,[],0,3,0,0,LK,0,C,[],0,3,0,["iQ",function(){return WR(this);},"cr",function(){return AAa(this);},"f5",function(){return Xy(this);},"gw",function(){return Y$(this);},"bd",function(){return T9(this);},"lA",function(b){Q$(this,b);},"iW",function(){return PH(this);},"lF",function(b){
T$(this,b);},"da",function(){return OJ(this);},"hd",function(b){return Pk(this,b);},"kP",function(b){Tr(this,b);},"nZ",function(){return M8(this);}],Ch,0,Bw,[],0,0,0,["b",function(b,c,d){return AAu(this,b,c,d);}],Fe,0,Ch,[],0,0,0,["b",function(b,c,d){return Pu(this,b,c,d);}],Ez,0,C,[DC],3,3,0,0,DD,0,Dn,[Ez],1,3,0,["X",function(){return U$(this);}],EY,0,C,[],3,3,0,0,Ib,0,DD,[B5,BR,EY],0,3,0,["b3",function(b){PA(this,b);},"C",function(b){return S_(this,b);},"T",function(){return QP(this);},"bo",function(b){return XM(this,
b);},"lK",function(b,c){YQ(this,b,c);},"iF",function(b){return TL(this,b);},"na",function(b){Ew(this,b);},"mv",function(b){JN(this,b);}],E4,0,C,[],3,3,0,0,Fd,0,C,[BF],3,3,0,0,HI,0,C,[BF,E$,E4,Fd],1,3,0,["m1",function(b,c){return NA(this,b,c);},"oo",function(b,c){return Ob(this,b,c);},"ma",function(b){return P_(this,b);},"mi",function(b,c,d){return Qw(this,b,c,d);},"n1",function(b){return XR(this,b);},"n8",function(){return Sn(this);},"m3",function(b,c,d){return Oe(this,b,c,d);}],K9,0,CO,[],0,0,0,["b",function(b,
c,d){return RY(this,b,c,d);}],Hx,0,C,[],0,0,0,0,Bk,0,C,[BR,BE,Dg],0,3,Cm,["oH",function(b,c,d,e){I7(this,b,c,d,e);},"d",function(b){return Ql(this,b);},"g",function(){return We(this);},"H",function(){return Y_(this);},"ir",function(b,c){return RD(this,b,c);},"ej",function(b){return Zi(this,b);},"cF",function(b,c){return PY(this,b,c);},"cy",function(b){return UT(this,b);},"eq",function(b,c){return Qx(this,b,c);},"gO",function(b,c){return Up(this,b,c);},"lE",function(b,c){return UI(this,b,c);},"ch",function(b,
c){return OE(this,b,c);},"e9",function(b){return Yr(this,b);},"fp",function(b,c){return U5(this,b,c);},"fO",function(b){return Nk(this,b);},"fx",function(){return ZN(this);},"e",function(){return R1(this);},"cg",function(){return Zg(this);},"bz",function(b){return XG(this,b);},"jS",function(b){return X4(this,b);},"hP",function(){return P9(this);},"c7",function(){return O6(this);},"i4",function(b){return AAi(this,b);}],FS,0,C,[],0,0,ADO,0,Nb,"NegativeArraySizeException",6,U,[],0,3,0,0,Ig,0,Cb,[],0,0,0,["b",function(b,
c,d){return PU(this,b,c,d);}],Ef,0,Dj,[],1,3,0,["j7",function(b,c){return QC(this,b,c);}],JS,0,Ef,[],0,3,0,["jE",function(b,c,d,e,f,g,h){return Z2(this,b,c,d,e,f,g,h);}],Ja,0,L,[],0,0,0,["u",function(){return Yv(this);}],Ip,0,S,[],0,0,0,["b",function(b,c,d){return ZF(this,b,c,d);},"x",function(b){return QX(this,b);}],Ct,"NumberFormatException",6,BQ,[],0,3,0,0,EH,0,Ch,[],0,0,0,["b",function(b,c,d){return Yd(this,b,c,d);}],MT,0,Du,[],0,3,0,["ka",function(){return Ut(this);},"kW",function(){return Yk(this);}],GF,
0,S,[],0,0,0,["b",function(b,c,d){return Yo(this,b,c,d);},"x",function(b){return ST(this,b);}],Ij,0,C,[],0,0,0,0,Hq,0,Cz,[],0,3,0,["bK",function(){AAd(this);},"ek",function(){return ZZ(this);},"on",function(b){return Ey(this,b);},"nM",function(){FG(this);}],It,0,L,[],0,0,0,["u",function(){return To(this);}],Jc,"AbstractCharClass$LazyJavaDigit$1",2,I,[],0,0,0,["j",function(b){return Xz(this,b);}],Jk,0,L,[],0,0,0,["u",function(){return Nw(this);}],Hs,"IllegalStateException",6,Br,[],0,3,0,0,DA,0,W,[],0,0,0,["t",
function(b){R5(this,b);},"b",function(b,c,d){return N8(this,b,c,d);},"bh",function(b,c,d){return Rv(this,b,c,d);},"bf",function(b,c,d,e){return Ue(this,b,c,d,e);},"Z",function(b){return TQ(this,b);},"x",function(b){return RU(this,b);}],LV,0,Cd,[],0,0,0,["b",function(b,c,d){return UF(this,b,c,d);}],GQ,"NullPointerException",6,U,[],0,3,0,0,LZ,0,S,[],4,0,0,["b",function(b,c,d){return AAA(this,b,c,d);},"x",function(b){return YA(this,b);}],JV,"AbstractCharClass$LazyJavaSpaceChar$1",2,I,[],0,0,0,["j",function(b){
return Su(this,b);}],Kt,0,C,[Gc],0,0,0,["jD",function(){W6(this);},"oM",function(){return SK(this);}],LY,0,C,[],4,3,0,0,Kp,0,L,[],0,0,0,["u",function(){return Pz(this);}]]);
$rt_metadata([FN,"PatternSyntaxException",2,BQ,[],0,3,0,["dR",function(){return YD(this);}],GG,0,C,[],0,3,0,0,Ku,0,L,[],0,0,0,["u",function(){return Tv(this);}],Di,0,C,[],0,3,BP,0,H7,0,C,[F5],0,3,0,0,EU,0,C,[],0,3,ACi,["jV",function(b,c,d){return Uu(this,b,c,d);},"ng",function(b){return Hy(this,b);},"oX",function(b,c){return M$(this,b,c);},"oi",function(b,c){return M1(this,b,c);},"nd",function(b,c){return Nc(this,b,c);},"ok",function(b,c){return Id(this,b,c);},"nX",function(b,c){return JK(this,b,c);},"oD",function(b,
c){return I0(this,b,c);},"n7",function(b,c){return Mt(this,b,c);},"oF",function(b,c){return IK(this,b,c);}],LN,0,C,[BR],4,3,0,["nh",function(b){return Lb(this,b);},"mm",function(b,c){return HD(this,b,c);},"nt",function(b){return HC(this,b);},"oJ",function(){return DM(this);},"l5",function(b,c){return Ky(this,b,c);},"n6",function(b){return L6(this,b);},"nr",function(b,c,d){return Gf(this,b,c,d);},"nf",function(){return JJ(this);},"oc",function(){return JU(this);},"oS",function(b){return Fi(this,b);},"m0",function(b,
c){return D8(this,b,c);},"m7",function(b){return F3(this,b);},"mJ",function(b,c){return HN(this,b,c);},"nT",function(b){return Cs(this,b);},"oW",function(b){return F7(this,b);},"my",function(b){return Ee(this,b);},"l3",function(){Kl(this);},"mu",function(){return Ha(this);},"mI",function(){return K3(this);},"nk",function(){return If(this);},"nH",function(b){return Bd(this,b);}],Jx,0,CO,[],0,0,0,["b",function(b,c,d){return Zh(this,b,c,d);},"t",function(b){PI(this,b);}],Lv,"BufferOverflowException",3,U,[],0,3,
0,0,He,0,L,[],0,0,0,["u",function(){return Yq(this);}],Mz,0,DI,[B5,BR],0,3,0,["hk",function(b){return W7(this,b);},"ov",function(){Fa(this);},"gn",function(b){return Xg(this,b);},"oa",function(b){return Hp(this,b);},"ol",function(b,c,d){return FC(this,b,c,d);},"oC",function(){return Gk(this);},"hF",function(b,c){return Ph(this,b,c);},"lr",function(b,c){return WG(this,b,c);},"hD",function(b,c,d){return Sb(this,b,c,d);},"km",function(b){Wt(this,b);},"hC",function(){SX(this);}],G3,0,S,[],0,0,0,["b",function(b,
c,d){return Qm(this,b,c,d);},"x",function(b){return VU(this,b);}],HZ,0,C,[],0,3,0,0,Mq,0,L,[],0,0,0,["u",function(){return Z_(this);}],EJ,0,C,[],0,3,0,0,DU,0,C,[],0,3,Bj,["dK",function(){return O1(this);},"dd",function(){return Xb(this);},"fV",function(){return ZX(this);},"hY",function(){return Xe(this);},"f4",function(){return Xx(this);},"g",function(){return Vq(this);},"g2",function(){T6(this);}],FW,0,S,[],4,0,0,["b",function(b,c,d){return Sf(this,b,c,d);},"x",function(b){return SP(this,b);}],JG,0,B_,[],4,
0,0,["dk",function(b){return UK(this,b);},"hh",function(b,c){return Yz(this,b,c);}],JF,0,B_,[],4,0,0,["dk",function(b){return Sg(this,b);},"hh",function(b,c){return S7(this,b,c);}],LG,0,CQ,[],0,3,0,0,Na,0,L,[],0,0,0,["u",function(){return TM(this);}],CX,0,C,[],0,0,0,["R",function(){return Z6(this);},"d6",function(b){Si(this,b);},"kB",function(b){RO(this,b);},"fh",function(){return TZ(this);},"dj",function(){return R0(this);},"fi",function(){return RE(this);},"l",function(){return Tt(this);},"cx",function(){
return SZ(this);},"bi",function(){return P$(this);},"kQ",function(){return Vp(this);},"ni",function(){Ll(this);},"oR",function(){Cc(this);},"nK",function(){return Hu(this);},"m4",function(b){return Ln(this,b);},"e",function(){return Wl(this);},"H",function(){return X6(this);},"cq",function(){return YP(this);},"hM",function(){return Rj(this);},"iX",function(){return Tn(this);},"mA",function(b){return Fu(this,b);},"mK",function(){return HW(this);},"ou",function(){return ML(this);},"l4",function(){return Y(this);
},"nz",function(){return HG(this);},"mO",function(b){return K7(this,b);},"nw",function(){return DL(this);},"bu",function(){return Rg(this);}],Kf,0,L,[],0,0,0,["u",function(){return X7(this);}],Jw,0,C,[],0,3,0,0,MA,0,Do,[],0,0,0,["u",function(){return QO(this);}],Mn,0,C,[FH],0,3,0,["lj",function(b){return RH(this,b);},"oq",function(b,c){Js(this,b,c);},"nA",function(b,c){Jm(this,b,c);},"mF",function(b,c){GT(this,b,c);},"nP",function(b,c){Hg(this,b,c);},"ms",function(b,c,d){Mh(this,b,c,d);},"mD",function(b,c,d)
{IS(this,b,c,d);},"mV",function(b,c){Lw(this,b,c);}],B3,0,Z,[],0,0,0,["I",function(b,c){return Nn(this,b,c);},"Z",function(b){return Q1(this,b);},"fc",function(){return QD(this);}],D9,"UnicodeCategory",2,I,[],0,0,0,["j",function(b){return QJ(this,b);}],MH,"UnicodeCategoryScope",2,D9,[],0,0,0,["j",function(b){return Ve(this,b);}],Ko,"UnmappableCharacterException",4,Cl,[],0,3,0,["dR",function(){return T4(this);}],Jb,"CharClass",2,I,[],0,0,0,["bg",function(b){return Nh(this,b);},"lH",function(b){return AAx(this,
b);},"J",function(b,c){return WN(this,b,c);},"jK",function(b){NU(this,b);},"gt",function(b){Xc(this,b);},"j",function(b){return SI(this,b);},"M",function(){return AAz(this);},"bc",function(){return U7(this);},"c8",function(){return Wp(this);},"e",function(){return Ps(this);},"ck",function(){return VI(this);}],KN,"BufferUnderflowException",3,U,[],0,3,0,0,JC,0,BV,[],0,0,0,["e1",function(b){Xj(this,b);}],JY,0,C,[],0,3,0,0,Mg,0,Ci,[],0,0,0,0]);
function $rt_array(cls,data){this.rO=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["@",": ","    at ","Caused by: ","Malformed input of length ","String contains invalid digits: ","String contains digits out of radix ","The value is too big for int type: ","String is null or empty","Illegal radix: ","Unable to load finger key definitions file",":","Invalid section ","Invalid KeyboardType ","�","averageCharsPerByte must be positive. Actual value is ","maxCharsPerByte must be positive. Actual value is ",
"newAction must be non-null","BIG_ENDIAN","LITTLE_ENDIAN","null","Index out of bounds","New position "," is outside of range [0;","]","","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart",
"Space","w","W","s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics",
"Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics",
"BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo",
"HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks",
"CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","Class does not represent enum: ","Enum "," does not have the ","constant","STD","ANGLE","MATRIX","Unable to load bigram frequency string","#","{",",","}","0","Replacement preconditions do not hold","Action must be non-null",
"The last byte in dst "," is outside of array of size ","Length "," must be non-negative","Offset ",")","The last byte in src ","Unable to load char frequency string","resources/","loaded ","Loading...","%","charsetName is null","Should never been thrown","IGNORE","REPLACE","REPORT","Initializing...","en","?","&","=","freq","bigrams","Using frequency resource: ","\n[ An error occurred. Please check inputs ]\n","\n[ An error occurred. Frequency data was missing. ]\n","\n[ An error occurred. Layout not correctly configured ]\n",
"No frequency data found","Using frequency information: ","\n\nReady.","Either src or dest is null","Capacity is negative: ","The last char in dst ","The last char in src "," is outside of string of size ","Start "," must be before end ","rgb(","background-color:","Key ","  Effort: "," Usage: ","width:","px","#80c4c4","#ca80ca","#80b780","#7a93c0","#8080ca","FINGERS","EFFORT","PENALTIES","TYPE","UTF-8",", ","Unable to read layout data","> Main Keys","Colemak-DH","Ergonomic","layout_main/colemak_dh.keyb","Colemak-DHk",
"layout_main/colemak_dhk.keyb","Colemak","Traditional","layout_main/colemak.keyb","Dvorak","layout_main/dvorak.keyb","Workman","Matrix","layout_main/workman.keyb","MTGAP","layout_main/mtgap.keyb","qgmlwyfub","layout_main/qgmlwyfub.keyb","Halmak","layout_main/halmak.keyb","Soul","Alternative","layout_main/soul.keyb","Niro","layout_main/niro.keyb","Asset","layout_main/asset.keyb","Norman","layout_main/norman.keyb","Qwpr","layout_main/qwpr.keyb","Minimak-8","layout_main/minimak8.keyb","Qwerty","layout_main/qwerty.keyb",
"> Full Keyboard","layout_full/colemak_dh.keyb","layout_full/colemak_dhk.keyb","layout_full/colemak.keyb","layout_full/dvorak.keyb","layout_full/workman.keyb","layout_full/mtgap.keyb","layout_full/qgmlwyfub.keyb","layout_full/halmak.keyb","layout_full/soul.keyb","layout_full/niro.keyb","layout_full/asset.keyb","layout_full/norman.keyb","layout_full/qwpr.keyb","layout_full/minimak8.keyb","layout_full/qwerty.keyb","The traditional typing method","config/effort_traditional_config.dat","An alternative typing method",
"config/effort_alternative_config.dat","An ergonomic method using the Angle Mod","config/effort_ergonomic_config.dat","A Matrix or ortholinear colemakmods","config/effort_matrix_config.dat","Default English data","freq/en_books.freq","en_norvig","English Data from\n  Peter Norvig, norvig.com/mayzner.html","freq/en_norvig.freq","en_wikipedia","Data from the 100 most popular\n  Wikipedia articles","freq/en_wikipedia.freq","linux_src","Data from the Linux source code","freq/linux_src.freq","da","Danish data","freq/practical_cryptography/da_pc.freq",
"de","German data","freq/practical_cryptography/de_pc.freq","es","Spanish data","freq/practical_cryptography/es_pc.freq","fi","Finnish data","freq/practical_cryptography/fi_pc.freq","fr","French data","freq/practical_cryptography/fr_pc.freq","pl","Polish data","freq/practical_cryptography/pl_pc.freq","sv","Swedish data","freq/practical_cryptography/sv_pc.freq","Warning: Too many rows","Warning: letter "," is missing from layout. "," appears more than once on layout. ","Patter is null","\\Q","\\E","\\\\E\\Q",
"Is","In","<div style=\"display: table-row\">","<div style=\"display: table-cell\">","</div>","<div style=\"display: table-cell;padding-left:2ex\">","<b style=\"color:red\">","</b>","<b><u>Finger Frequency</u></b>","<table>","<tr>","<td>finger "," </td><td>","%</td><td>&nbsp;finger ","%</td>","</tr>","<tr class=\"row_total\">","<td class=\"center\">total L </td><td>","%</td><td class=\"center\">total R </td><td>","</table>","<b><u>Finger Bigram Frequency</u></b>","<td class=\"center\" colspan=\"2\" style=\"text-align:right\">total</td><td class=\"center\" colspan=\"2\">",
"<b><u>Top Same-Finger Bigrams</u></b>","<b><u>Top Neighbour-Finger Bigrams</u></b>","-","<b><u>Finger Effort</u></b>","<th> </th><th>base</th><th>s-bigrams</th><th>n-bigrams</th><th>total</th>","</td><td>","</td>","<td>total * </td><td>","</td><td> ","Unmappable characters of length "]);
Bk.prototype.toString=function(){return $rt_ustr(this);};
Bk.prototype.valueOf=Bk.prototype.toString;C.prototype.toString=function(){return $rt_ustr(R2(this));};
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
=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}main=$rt_mainStarter(PW);
(function(){var c;c=HJ.prototype;c.handleEvent=c.e0;c=HL.prototype;c.handleEvent=c.e0;c=Hl.prototype;c.handleEvent=c.e0;c=Hm.prototype;c.handleEvent=c.e0;c=HI.prototype;c.dispatchEvent=c.n1;c.addEventListener=c.m1;c.removeEventListener=c.oo;c.getLength=c.n8;c.get=c.ma;c.addEventListener=c.m3;c.removeEventListener=c.mi;c=Kt.prototype;c.stateChanged=c.oM;})();
})();
