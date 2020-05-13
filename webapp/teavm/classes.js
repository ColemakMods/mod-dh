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
(b<0){b+=0x100000000;}return a%b|0;};function $rt_setCloneMethod(target, f){target.dC=f;}
function $rt_cls(cls){return HO(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return Dn(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.t.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return C; }
function $rt_nullCheck(val) {if (val === null) {$rt_throw(RB());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return ADW(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
var A=Object.create(null);
var G=$rt_throw;var BW=$rt_compare;var ADX=$rt_nullCheck;var D=$rt_cls;var E=$rt_createArray;var ACK=$rt_isInstance;var ADY=$rt_nativeThread;var ADZ=$rt_suspending;var AD0=$rt_resuming;var AD1=$rt_invalidPointer;var B=$rt_s;var Bc=$rt_eraseClinit;var Ce=$rt_imul;var Bd=$rt_wrapException;
function C(){this.$id$=0;}
function AB8(){var a=new C();L(a);return a;}
function L(a){return;}
function Cf(a){return HO(a.constructor);}
function Ts(a){return Er(a);}
function N2(a,b){return a!==b?0:1;}
function RX(a){return J().a(Cf(a).bV()).a(B(0)).a(MU(Er(a))).f();}
function Er(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function Z_(a){var b,c,d;if(!ACK(a,B5)){b=a;if(b.constructor.$meta.item===null)G(AA4());}c=Ob(a);b=c;d=$rt_nextId();b.$id$=d;return c;}
function K(){var a=this;C.call(a);a.e_=null;a.fL=null;}
function AD2(){var a=new K();Q(a);return a;}
function Q(a){L(a);}
function Tn(a,b){if(!b&&a.e_===null)a.e_=a.u();else if(b&&a.fL===null)a.fL=a.u().b5(1);if(b)return a.fL;return a.e_;}
function M1(){K.call(this);}
function ABy(){var a=new M1();Ud(a);return a;}
function Ud(a){Q(a);}
function Tv(a){return Bx().be(32).be(9);}
function JX(){K.call(this);}
function ACv(){var a=new JX();X6(a);return a;}
function X6(a){Q(a);}
function Of(a){return Bx().I(0,31).be(127);}
function CL(){var a=this;C.call(a);a.fm=null;a.dA=null;a.dY=0;a.ew=0;a.hD=null;}
function AD3(){var a=new CL();Lc(a);return a;}
function AD4(a){var b=new CL();F6(b,a);return b;}
function AD5(a,b){var c=new CL();MM(c,a,b);return c;}
function AD6(a){var b=new CL();Le(b,a);return b;}
function Lc(a){a.dY=1;a.ew=1;a.ed();}
function F6(a,b){a.dY=1;a.ew=1;a.ed();a.fm=b;}
function MM(a,b,c){a.dY=1;a.ew=1;a.ed();a.fm=b;a.dA=c;}
function Le(a,b){a.dY=1;a.ew=1;a.ed();a.dA=b;}
function Vw(a){return a;}
function TQ(a){return a.fm;}
function Wz(a){return a.dM();}
function XE(a){a.ho(Ci());}
function ZE(a,b){var c,d,e,f,g;b.dO(Cf(a).bV());c=a.j2();if(c!==null)b.dO(J().a(B(1)).a(c).f());a:{b.lx();if(a.hD!==null){d=a.hD.data;e=d.length;f=0;while(true){if(f>=e)break a;g=d[f];b.dO(B(2));b.lq(g);f=f+1|0;}}}if(a.dA!==null&&a.dA!==a){b.dO(B(3));a.dA.ho(b);}}
function Br(){CL.call(this);}
function AD7(){var a=new Br();C4(a);return a;}
function AD8(a){var b=new Br();GQ(b,a);return b;}
function C4(a){Lc(a);}
function GQ(a,b){F6(a,b);}
function T(){Br.call(this);}
function AD9(){var a=new T();BA(a);return a;}
function ADW(a){var b=new T();Df(b,a);return b;}
function BA(a){C4(a);}
function Df(a,b){GQ(a,b);}
function C5(){T.call(this);}
function Cq(){var a=new C5();I2(a);return a;}
function Bo(a){var b=new C5();L0(b,a);return b;}
function I2(a){BA(a);}
function L0(a,b){Df(a,b);}
function Ct(){C.call(this);}
function AD$(){var a=new Ct();Eo(a);return a;}
function Eo(a){L(a);}
function I(){var a=this;Ct.call(a);a.G=0;a.T=0;a.J=null;a.dk=null;a.dU=null;a.y=0;}
var AD_=null;function E5(){E5=Bc(I);Tf();}
function AEa(){var a=new I();P(a);return a;}
function P(a){E5();Eo(a);a.J=ABV(2048);}
function Rd(a){return null;}
function PK(a){return a.J;}
function N7(a){var b,c;if(!a.T){b=a.J;c=b.dj(0)>=2048?0:1;}else c=a.J.k_(0)>=2048?0:1;return c;}
function Xn(a){return a.y;}
function Vk(a){return a;}
function Qc(a){var b;if(a.dU===null){b=a.bb();a.dU=ADU(a,b);a.dU.b5(a.T);}return a.dU;}
function Ro(a){var b;if(a.dk===null){b=a.bb();a.dk=ADO(a,b,a);a.dk.b5(a.c0());a.dk.y=a.y;}return a.dk;}
function YA(a){return 0;}
function WE(a,b){if(a.G^b){a.G=a.G?0:1;a.T=a.T?0:1;}if(!a.y)a.y=1;return a;}
function VB(a){return a.G;}
function DU(b,c){E5();return b.j(c);}
function CV(b,c){E5();if(b.L()!==null&&c.L()!==null)return b.L().j9(c.L());return 1;}
function Gf(b,c){E5();return LB(AD_,b).kS(c);}
function Tf(){AD_=ADl();}
function ML(){I.call(this);this.k$=null;}
function AB3(a){var b=new ML();O5(b,a);return b;}
function O5(a,b){a.k$=b;P(a);}
function PO(a,b){return FY(b);}
function BY(){Br.call(this);}
function PC(){var a=new BY();HR(a);return a;}
function HR(a){C4(a);}
function Cm(){BY.call(this);}
function AEb(){var a=new Cm();Fp(a);return a;}
function Fp(a){HR(a);}
function Jz(){Cm.call(this);this.iD=0;}
function ABR(a){var b=new Jz();Qk(b,a);return b;}
function Qk(a,b){Fp(a);a.iD=b;}
function U8(a){return J().a(B(4)).n(a.iD).f();}
function Kq(){K.call(this);}
function ABY(){var a=new Kq();O$(a);return a;}
function O$(a){Q(a);}
function Uu(a){var b;b=ACd(a);b.y=1;return b;}
function HW(){var a=this;C.call(a);a.gD=null;a.iz=null;a.hT=0;a.f2=0;}
function ABz(a,b){var c=new HW();VQ(c,a,b);return c;}
function VQ(a,b,c){L(a);a.gD=b;a.iz=c;}
function UF(a){return BR(a.gD);}
function UN(a,b){return W(a.iz)<b?0:1;}
function V4(a,b){a.hT=b;}
function AAC(a,b){a.f2=b;}
function BP(){}
function BN(){C.call(this);}
function AEc(){var a=new BN();F1(a);return a;}
function F1(a){L(a);}
function BE(){}
function C$(){BN.call(this);this.iM=0;}
var AEd=null;function B6(){B6=Bc(C$);UY();}
function ACQ(a){var b=new C$();DN(b,a);return b;}
function DN(a,b){B6();F1(a);a.iM=b;}
function JA(b,c){B6();if(!(c>=2&&c<=36))c=10;return ADk(20).gU(b,c).f();}
function MU(b){B6();return Od(b,4);}
function Ir(b){B6();return JA(b,10);}
function CX(b,c){var d,e,f,g,h;B6();if(c>=2&&c<=36){if(b!==null&&!b.Q()){a:{d=0;e=0;switch(b.d(0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=0;if(e==b.g())G(Ca());while(e<b.g()){g=e+1|0;h=Eh(b.d(e));if(h<0)G(BV(J().a(B(5)).a(b).f()));if(h>=c)G(BV(J().a(B(6)).n(c).a(B(1)).a(b).f()));f=Ce(c,f)+h|0;if(f<0){if(g==b.g()&&f==(-2147483648)&&d)return (-2147483648);G(BV(J().a(B(7)).a(b).f()));}e=g;}if(d)f= -f;return f;}G(BV(B(8)));}G(BV(J().a(B(9)).n(c).f()));}
function JR(b){B6();return CX(b,10);}
function XV(a){return Ir(a.iM);}
function EP(b){var c,d,e;B6();if(!b)return 32;c=0;d=b>>>16;if(d)c=16;else d=b;e=d>>>8;if(!e)e=d;else c=c|8;d=e>>>4;if(!d)d=e;else c=c|4;e=d>>>2;if(!e)e=d;else c=c|2;if(e>>>1)c=c|1;return (32-c|0)-1|0;}
function CY(b){var c,d,e;B6();if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;e=d<<8;if(!e)e=d;else c=c|8;d=e<<4;if(!d)d=e;else c=c|4;e=d<<2;if(!e)e=d;else c=c|2;if(e<<1)c=c|1;return (32-c|0)-1|0;}
function KH(b,c){var d;B6();d=c&31;return b<<d|b>>>(32-d|0);}
function UY(){AEd=D($rt_intcls());}
function Ka(){Br.call(this);}
function AA4(){var a=new Ka();Yt(a);return a;}
function Yt(a){C4(a);}
function Cg(){C.call(this);}
var AEe=null;var AEf=null;var AEg=null;var AEh=null;var AEi=null;function AB4(){AB4=Bc(Cg);YN();}
function YN(){var b,c;b=$rt_createIntArray(10);c=b.data;c[0]=1;c[1]=10;c[2]=100;c[3]=1000;c[4]=10000;c[5]=100000;c[6]=1000000;c[7]=10000000;c[8]=100000000;c[9]=1000000000;AEe=b;b=$rt_createLongArray(19);c=b.data;c[0]=Long_fromInt(1);c[1]=Long_fromInt(10);c[2]=Long_fromInt(100);c[3]=Long_fromInt(1000);c[4]=Long_fromInt(10000);c[5]=Long_fromInt(100000);c[6]=Long_fromInt(1000000);c[7]=Long_fromInt(10000000);c[8]=Long_fromInt(100000000);c[9]=Long_fromInt(1000000000);c[10]=new Long(1410065408, 2);c[11]=new Long(1215752192, 23);c[12]
=new Long(3567587328, 232);c[13]=new Long(1316134912, 2328);c[14]=new Long(276447232, 23283);c[15]=new Long(2764472320, 232830);c[16]=new Long(1874919424, 2328306);c[17]=new Long(1569325056, 23283064);c[18]=new Long(2808348672, 232830643);AEf=b;b=$rt_createLongArray(6);c=b.data;c[0]=Long_fromInt(1);c[1]=Long_fromInt(10);c[2]=Long_fromInt(100);c[3]=Long_fromInt(10000);c[4]=Long_fromInt(100000000);c[5]=new Long(1874919424, 2328306);AEg=b;AEh=ABd();AEi=ACU();}
function R(){var a=this;C.call(a);a.e=null;a.bc=0;a.hJ=null;a.hw=0;}
var AEj=0;function Jh(){Jh=Bc(R);ZF();}
function AEk(){var a=new R();Bn(a);return a;}
function AEl(a){var b=new R();Eb(b,a);return b;}
function Bn(a){var b,c;Jh();L(a);b=new C$;c=AEj;AEj=c+1|0;DN(b,c);a.hJ=b.f();}
function Eb(a,b){var c,d;Jh();L(a);c=new C$;d=AEj;AEj=d+1|0;DN(c,d);a.hJ=c.f();a.e=b;}
function C7(a,b,c,d){var e;e=d.q();while(true){if(b>e)return (-1);if(a.b(b,c,d)>=0)break;b=b+1|0;}return b;}
function Db(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.b(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function SY(a,b){a.hw=b;}
function RH(a){return a.hw;}
function UM(a){return a.e;}
function FK(a,b){a.e=b;}
function WK(a,b){return 1;}
function YG(a){return null;}
function GH(a){var b;a.bc=1;if(a.e!==null){if(!a.e.bc){b=a.e.cg();if(b!==null){a.e.bc=1;a.e=b;}a.e.bB();}else if(a.e instanceof CK&&a.e.br.ff)a.e=a.e.e;}}
function ZF(){AEj=1;}
function V(){var a=this;R.call(a);a.N=null;a.br=null;a.A=0;}
function AEm(){var a=new V();BC(a);return a;}
function ADG(a,b){var c=new V();H1(c,a,b);return c;}
function BC(a){Bn(a);}
function H1(a,b,c){Bn(a);a.N=b;a.br=c;a.A=c.c6();}
function WR(a,b,c,d){var e,f,g,h,i;if(a.N===null)return (-1);e=d.cA(a.A);d.bK(a.A,b);f=a.N.U();g=0;while(true){if(g>=f){d.bK(a.A,e);return (-1);}h=a.N.E(g);i=h.b(b,c,d);if(i>=0)break;g=g+1|0;}return i;}
function QU(a,b){a.br.s(b);}
function AAA(a,b){var c;a:{if(a.N!==null){c=a.N.Y();while(true){if(!c.Z())break a;if(!c.W().X(b))continue;else return 1;}}}return 0;}
function Sm(a,b){var c,d;a:{if(b.eA(a.A)>=0){c=b.cA(a.A);d=a.A;if(c==b.eA(d)){c=0;break a;}}c=1;}return c;}
function Ss(a){var b,c,d,e;a.bc=1;if(a.br!==null&&!a.br.bc)a.br.bB();a:{if(a.N!==null){b=a.N.U();c=0;while(true){if(c>=b)break a;d=a.N.E(c);e=d.cg();if(e===null)e=d;else{d.bc=1;a.N.iC(c);a.N.lI(c,e);}if(!e.bc)e.bB();c=c+1|0;}}}if(a.e!==null)GH(a);}
function CK(){V.call(this);this.bl=null;}
function ABt(a,b){var c=new CK();Ju(c,a,b);return c;}
function Ju(a,b,c){BC(a);a.bl=b;a.br=c;a.A=c.c6();}
function Oy(a,b,c,d){var e,f;e=d.cA(a.A);d.bK(a.A,b);f=a.bl.b(b,c,d);if(f>=0)return f;d.bK(a.A,e);return (-1);}
function NB(a,b,c,d){var e;e=a.bl.bg(b,c,d);if(e>=0)d.bK(a.A,e);return e;}
function T7(a,b,c,d,e){var f;f=a.bl.bd(b,c,d,e);if(f>=0)e.bK(a.A,f);return f;}
function AAn(a,b){return a.bl.X(b);}
function QZ(a){var b;b=ABr(a);a.e=b;return b;}
function YO(a){var b;a.bc=1;if(a.br!==null&&!a.br.bc)a.br.bB();if(a.bl!==null&&!a.bl.bc){b=a.bl.cg();if(b!==null){a.bl.bc=1;a.bl=b;}a.bl.bB();}}
function BF(){}
function V0(b){return b;}
function Dk(){}
function El(){}
function BK(){}
function KC(){}
function Zk(){return window.document;}
function Gg(){BN.call(this);}
var AEn=null;function U4(){U4=Bc(Gg);Xb();}
function Mj(b,c){var d,e,f,g,h;U4();if(c>=2&&c<=36){if(b!==null&&!b.Q()){a:{d=0;e=0;switch(b.d(0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=Long_ZERO;while(e<b.g()){g=e+1|0;h=Eh(b.d(e));if(h<0)G(BV(J().a(B(5)).a(b).f()));if(h>=c)G(BV(J().a(B(6)).n(c).a(B(1)).a(b).f()));f=Long_add(Long_mul(Long_fromInt(c),f),Long_fromInt(h));if(Long_lt(f,Long_ZERO)){if(g==b.g()&&Long_eq(f,new Long(0, 2147483648))&&d)return new Long(0, 2147483648);G(BV(J().a(B(7)).a(b).f()));}e=g;}if(d)f=Long_neg(f);return f;}G(BV(B(8)));}G(BV(J().a(B(9)).n(c).f()));}
function FU(b){U4();return Mj(b,10);}
function Xb(){AEn=D($rt_longcls());}
function Gb(){}
function EB(){}
function I_(){var a=this;C.call(a);a.dz=null;a.eR=null;a.bq=0;a.iX=0;}
function PM(a){var b=new I_();YW(b,a);return b;}
function YW(a,b){L(a);while(b>=a.bq){a.bq=a.bq<<1|1;}a.bq=a.bq<<1|1;a.dz=$rt_createIntArray(a.bq+1|0);a.eR=$rt_createIntArray(a.bq+1|0);a.iX=b;}
function X4(a,b,c){var d,e,f;d=0;e=b&a.bq;while(a.dz.data[e]&&a.dz.data[e]!=b){f=d+1|0;d=f&a.bq;f=e+d|0;e=f&a.bq;}a.dz.data[e]=b;a.eR.data[e]=c;}
function NQ(a,b){var c,d,e,f;c=b&a.bq;d=0;while(true){e=a.dz.data[c];if(!e)break;if(e==b)return a.eR.data[c];f=d+1|0;d=f&a.bq;f=c+d|0;c=f&a.bq;}return a.iX;}
function Ee(){K.call(this);}
function AC6(){var a=new Ee();Jn(a);return a;}
function Jn(a){Q(a);}
function Jf(a){return Bx().I(97,122).I(65,90);}
function DM(){K.call(this);}
function ADD(){var a=new DM();Kw(a);return a;}
function Kw(a){Q(a);}
function Gw(a){return Bx().I(48,57);}
function Kh(){DM.call(this);}
function ACW(){var a=new Kh();Zx(a);return a;}
function Zx(a){Kw(a);}
function W_(a){var b;b=Gw(a).b5(1);b.y=1;return b;}
function Hg(){CK.call(this);}
function ABr(a){var b=new Hg();S5(b,a);return b;}
function S5(a,b){Ju(a,b.bl,b.br);}
function VM(a,b,c,d){var e,f,g;e=0;f=d.q();a:{while(true){if(b>f){b=e;break a;}g=d.cA(a.A);d.bK(a.A,b);e=a.bl.b(b,c,d);if(e>=0)break;d.bK(a.A,g);b=b+1|0;}}return b;}
function AAj(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=e.cA(a.A);e.bK(a.A,c);f=a.bl.b(c,d,e);if(f>=0)break;e.bK(a.A,g);c=c+(-1)|0;}}return c;}
function SI(a){return null;}
function L4(){T.call(this);}
function ADy(){var a=new L4();Ps(a);return a;}
function Ps(a){BA(a);}
function CD(){var a=this;V.call(a);a.gO=0;a.cX=0;}
function ADC(a,b){var c=new CD();Fb(c,a,b);return c;}
function Fb(a,b,c){BC(a);a.gO=b;a.cX=c;}
function PF(a,b,c,d){var e,f,g,h;e=a.c1(d);if(e!==null&&(b+e.g()|0)<=d.q()){f=0;while(true){if(f>=e.g()){d.C(a.cX,e.g());return a.e.b(b+e.g()|0,c,d);}g=e.d(f);h=b+f|0;if(g!=c.d(h)&&C6(e.d(f))!=c.d(h))break;f=f+1|0;}return (-1);}return (-1);}
function Sr(a,b){a.e=b;}
function S$(a,b){var c;c=b.jW(a.gO);return c;}
function Ta(a,b){var c;c=!b.bD(a.cX)?0:1;b.C(a.cX,(-1));return c;}
function Du(){K.call(this);}
function AA_(){var a=new Du();Kd(a);return a;}
function Kd(a){Q(a);}
function M5(a){return Bx().I(97,122).I(65,90).I(48,57).be(95);}
function Kz(){Du.call(this);}
function ABn(){var a=new Kz();XY(a);return a;}
function XY(a){Kd(a);}
function O3(a){var b;b=M5(a).b5(1);b.y=1;return b;}
function KT(){var a=this;I.call(a);a.g6=null;a.kX=null;}
function ADU(a,b){var c=new KT();AAg(c,a,b);return c;}
function AAg(a,b,c){a.kX=b;a.g6=c;P(a);}
function U2(a,b){var c,d,e;c=b-55296|0;if(c>=0&&c<2048){d=a.T;e=a.g6;d=d^e.bJ(c);}else d=0;return d;}
function KQ(){var a=this;I.call(a);a.hQ=null;a.ii=null;a.ki=null;}
function ADO(a,b,c){var d=new KQ();PV(d,a,b,c);return d;}
function PV(a,b,c,d){a.ki=b;a.hQ=c;a.ii=d;P(a);}
function Os(a,b){var c,d,e,f;c=b-55296|0;if(c>=0&&c<2048){d=a.T;e=a.hQ;f=d^e.bJ(c);}else f=0;return a.ii.j(b)&&!f?1:0;}
function Kb(){K.call(this);}
function ABK(){var a=new Kb();Qn(a);return a;}
function Qn(a){Q(a);}
function PL(a){var b;b=ABU(a);b.y=1;return b;}
function Y(){R.call(this);this.P=0;}
function AEo(a){var b=new Y();Hq(b,a);return b;}
function AEp(){var a=new Y();BH(a);return a;}
function Hq(a,b){Eb(a,b);a.P=1;a.gy(1);}
function BH(a){Bn(a);a.P=1;}
function ZO(a,b,c,d){var e;if((b+a.ba()|0)>d.q()){d.by=1;return (-1);}e=a.H(b,c);if(e<0)return (-1);return a.e.b(b+e|0,c,d);}
function VA(a){return a.P;}
function YT(a,b){return 1;}
function Ht(){Y.call(this);this.dx=null;}
function ADV(a){var b=new Ht();Xm(b,a);return b;}
function Xm(a,b){BH(a);a.dx=b.f();a.P=b.g();}
function Uc(a,b,c){var d,e,f,g;d=0;while(true){if(d>=a.dx.g())return a.dx.g();e=a.dx.d(d);f=b+d|0;if(e!=c.d(f)){g=a.dx;if(C6(g.d(d))!=c.d(f))break;}d=d+1|0;}return (-1);}
function BM(){R.call(this);this.w=null;}
function AEq(a,b,c){var d=new BM();CZ(d,a,b,c);return d;}
function CZ(a,b,c,d){Eb(a,c);a.w=b;a.gy(d);}
function Z6(a){return a.w;}
function T8(a,b){return !a.w.X(b)&&!a.e.X(b)?0:1;}
function Xd(a,b){return 1;}
function Oj(a){var b;a.bc=1;if(a.e!==null&&!a.e.bc){b=a.e.cg();if(b!==null){a.e.bc=1;a.e=b;}a.e.bB();}if(a.w!==null){if(!a.w.bc){b=a.w.cg();if(b!==null){a.w.bc=1;a.w=b;}a.w.bB();}else if(a.w instanceof CK&&a.w.br.ff)a.w=a.w.e;}}
function Bw(){BM.call(this);this.B=null;}
function ABN(a,b,c){var d=new Bw();Cr(d,a,b,c);return d;}
function Cr(a,b,c,d){CZ(a,b,c,d);a.B=b;}
function N4(a,b,c,d){var e,f;e=0;a:{while((b+a.B.ba()|0)<=d.q()){f=a.B.H(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.e.b(b,c,d);if(f>=0)break;b=b-a.B.ba()|0;e=e+(-1)|0;}return f;}
function Cd(){Bw.call(this);this.cl=null;}
function ACi(a,b,c,d){var e=new Cd();Gh(e,a,b,c,d);return e;}
function Gh(a,b,c,d,e){Cr(a,c,d,e);a.cl=b;}
function Qo(a,b,c,d){var e,f,g,h;e=a.cl.cW();f=a.cl.cZ();g=0;while(true){if(g>=e){a:{while(g<f){if((b+a.B.ba()|0)>d.q())break a;h=a.B.H(b,c);if(h<1)break a;b=b+h|0;g=g+1|0;}}while(true){if(g<e)return (-1);h=a.e.b(b,c,d);if(h>=0)break;b=b-a.B.ba()|0;g=g+(-1)|0;}return h;}if((b+a.B.ba()|0)>d.q()){d.by=1;return (-1);}h=a.B.H(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}return (-1);}
function Jg(){Cd.call(this);}
function AC5(a,b,c,d){var e=new Jg();OF(e,a,b,c,d);return e;}
function OF(a,b,c,d,e){Gh(a,b,c,d,e);}
function T$(a,b,c,d){var e,f,g,h;e=a.cl.cW();f=a.cl.cZ();g=0;while(true){if(g>=e){a:{while(true){if(g>=f)break a;if((b+a.B.ba()|0)>d.q())break a;h=a.B.H(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}}return a.e.b(b,c,d);}if((b+a.B.ba()|0)>d.q()){d.by=1;return (-1);}h=a.B.H(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}return (-1);}
function Dg(){}
function B9(){CL.call(this);}
function AEr(a,b){var c=new B9();IF(c,a,b);return c;}
function AEs(a){var b=new B9();J0(b,a);return b;}
function AEt(a){var b=new B9();Ih(b,a);return b;}
function IF(a,b,c){MM(a,b,c);}
function J0(a,b){F6(a,b);}
function Ih(a,b){Le(a,b);}
function CO(){B9.call(this);}
function AEu(a){var b=new CO();G2(b,a);return b;}
function G2(a,b){J0(a,b);}
function Dw(){}
function Mk(){C5.call(this);}
function Ff(){var a=new Mk();VL(a);return a;}
function VL(a){I2(a);}
function EE(){var a=this;T.call(a);a.ln=null;a.k6=null;}
function AA3(a,b,c){var d=new EE();Vp(d,a,b,c);return d;}
function Vp(a,b,c,d){Df(a,b);a.ln=c;a.k6=d;}
function JH(){I.call(this);this.la=null;}
function ADq(a){var b=new JH();Yg(b,a);return b;}
function Yg(a,b){a.la=b;P(a);}
function N$(a,b){return EO(b);}
function IB(){var a=this;I.call(a);a.d_=null;a.jt=null;}
function ACx(a,b){var c=new IB();Ys(c,a,b);return c;}
function Ys(a,b,c){a.jt=b;a.d_=c;P(a);}
function AAl(a,b){return a.G^a.d_.bJ(b);}
function WF(a){var b,c;b=J();c=a.d_.dj(0);while(c>=0){b.d$(CJ(c));b.bx(124);c=a.d_.dj(c+1|0);}if(b.g()>0)b.iv(b.g()-1|0);return b.f();}
function DY(){var a=this;C.call(a);a.kR=null;a.gu=0.0;a.ls=0.0;a.ck=null;a.cG=null;a.d7=null;a.bM=0;}
function AEv(a,b,c){var d=new DY();MN(d,a,b,c);return d;}
function MN(a,b,c,d){L(a);a.ck=B(10);B7();a.cG=AEw;a.d7=AEw;if(c<=0.0)G(By(J().a(B(11)).ij(c).f()));if(d>0.0){a.kR=b;a.gu=c;a.ls=d;return;}G(By(J().a(B(12)).ij(d).f()));}
function K$(a,b){if(b!==null){a.cG=b;a.fS(b);return a;}G(By(B(13)));}
function W3(a,b){return;}
function HM(a,b){if(b!==null){a.d7=b;a.ft(b);return a;}G(By(B(13)));}
function Xv(a,b){return;}
function FA(a,b,c,d){var e,f,g,$$je;if(!(a.bM==2&&!d)&&a.bM!=3){a.bM=d?2:1;while(true){try{e=a.jw(b,c);}catch($$e){$$je=Bd($$e);if($$je instanceof T){f=$$je;G(TD(f));}else{throw $$e;}}if(e.c9())return e;if(e.dE()){if(d&&BR(b)){g=a.cG;B7();if(g===AEw)return BL(W(b));if(W(c)<=a.ck.g())return AEx;b.eq(BG(b)+W(b)|0);if(a.cG===AEy)DR(c,a.ck);}return e;}if(e.hW()){g=a.cG;B7();if(g===AEw)return e;if(a.cG===AEy){if(W(c)<a.ck.g())return AEx;DR(c,a.ck);}b.eq(BG(b)+e.g()|0);}else if(e.fY()){g=a.d7;B7();if(g===AEw)break;if
(a.d7===AEy){if(W(c)<a.ck.g())return AEx;DR(c,a.ck);}b.eq(BG(b)+e.g()|0);}}return e;}G(C0());}
function Mx(a,b){if(a.bM!=3&&a.bM!=2)G(C0());a.bM=3;return a.kH(b);}
function LC(a){a.bM=0;a.kB();return a;}
function I6(a,b){var c,d,e;if(a.bM&&a.bM!=3)G(C0());if(!W(b))return Mt(0);if(a.bM)LC(a);c=Mt(Bq(8,W(b)*a.gu|0));while(true){d=FA(a,b,c,0);if(d.dE())break;if(d.c9())c=En(a,c);if(!d.fQ())continue;d.gW();}e=FA(a,b,c,1);if(e.fQ())e.gW();while(true){e=Mx(a,c);if(e.dE())break;c=En(a,c);}G4(c);return c;}
function En(a,b){var c,d,e;c=E8(b);d=c.data;d=EM(c,Bq(8,d.length*2|0));e=OY(d);e.fb(BG(b));return e;}
function O4(a,b){Bg();return AEz;}
function UD(a){return;}
function Bv(){BM.call(this);}
function ABP(a,b,c){var d=new Bv();Cz(d,a,b,c);return d;}
function Cz(a,b,c,d){CZ(a,b,c,d);}
function Ov(a,b,c,d){var e;if(!a.w.x(d))return a.e.b(b,c,d);e=a.w.b(b,c,d);if(e>=0)return e;return a.e.b(b,c,d);}
function M_(){Bv.call(this);}
function ACm(a,b,c){var d=new M_();V1(d,a,b,c);return d;}
function V1(a,b,c,d){Cz(a,b,c,d);Ea();b.s(AEA);}
function S3(a,b,c,d){var e;while(true){e=a.w.b(b,c,d);if(e<=0)break;b=e;}return a.e.b(b,c,d);}
function LG(){CD.call(this);}
function ADe(a,b){var c=new LG();V9(c,a,b);return c;}
function V9(a,b,c){Fb(a,b,c);}
function Ny(a,b,c,d){var e,f,g,h;e=a.c1(d);if(e!==null&&(b+e.g()|0)<=d.q()){f=0;while(true){if(f>=e.g()){d.C(a.cX,e.g());return a.e.b(b+e.g()|0,c,d);}g=BI(Bz(e.d(f)));h=b+f|0;h=Bz(c.d(h));if(g!=BI(h))break;f=f+1|0;}return (-1);}return (-1);}
function Iy(){var a=this;I.call(a);a.h0=null;a.kK=null;}
function ABe(a,b){var c=new Iy();TC(c,a,b);return c;}
function TC(a,b,c){a.kK=b;a.h0=c;P(a);}
function S6(a,b){return a.h0.j(b);}
function D0(){C.call(this);this.j3=null;}
var AEB=null;var AEC=null;function YQ(){YQ=Bc(D0);Z$();}
function UA(a){var b=new D0();Go(b,a);return b;}
function Go(a,b){YQ();L(a);a.j3=b;}
function Z$(){AEB=UA(B(14));AEC=UA(B(15));}
function Iz(){var a=this;I.call(a);a.h5=null;a.lt=null;}
function ABG(a,b){var c=new Iz();Ou(c,a,b);return c;}
function Ou(a,b,c){a.lt=b;a.h5=c;P(a);}
function V8(a,b){return a.h5.j(b)?0:1;}
function IA(){var a=this;I.call(a);a.hr=0;a.h3=null;a.iq=null;a.jH=null;}
function ACo(a,b,c,d){var e=new IA();Tg(e,a,b,c,d);return e;}
function Tg(a,b,c,d,e){a.jH=b;a.hr=c;a.h3=d;a.iq=e;P(a);}
function AAG(a,b){return !(a.hr^a.h3.j(b))&&!a.iq.j(b)?0:1;}
function Lt(){C.call(this);}
function RM(b){var c,d,e,f,g,h;c=0;d=1;while(true){e=b.hj.data;f=b.iR;b.iR=f+1|0;g=Qr(e[f]);h=(g%2|0)!=1?0:1;c=c+Ce(d,g/2|0)|0;d=d*46|0;if(!h)break;}return c;}
function Hk(b){var c,d;c=RM(b);d=c/2|0;if(c%2|0)d= -d;return d;}
function Qr(b){if(b<34)return b-32|0;if(b>=92)return (b-32|0)-2|0;return (b-32|0)-1|0;}
function L7(){var a=this;K.call(a);a.fz=0;a.eD=0;a.hK=0;}
function S(a,b){var c=new L7();SO(c,a,b);return c;}
function ADT(a,b,c){var d=new L7();Yk(d,a,b,c);return d;}
function SO(a,b,c){Q(a);a.eD=c;a.fz=b;}
function Yk(a,b,c,d){Q(a);a.hK=d;a.eD=c;a.fz=b;}
function VK(a){var b;b=ADr(a.fz);if(a.hK)b.J.d6(0,2048);b.y=a.eD;return b;}
function Ji(){var a=this;I.call(a);a.io=0;a.gG=null;a.gS=null;a.ky=null;}
function ADQ(a,b,c,d){var e=new Ji();VZ(e,a,b,c,d);return e;}
function VZ(a,b,c,d,e){a.ky=b;a.io=c;a.gG=d;a.gS=e;P(a);}
function W6(a,b){return !(a.io^a.gG.j(b))&&!a.gS.j(b)?1:0;}
function IC(){var a=this;I.call(a);a.hx=0;a.g4=null;a.i8=null;a.kg=null;}
function ADJ(a,b,c,d){var e=new IC();Ur(e,a,b,c,d);return e;}
function Ur(a,b,c,d,e){a.kg=b;a.hx=c;a.g4=d;a.i8=e;P(a);}
function Rk(a,b){return a.hx^a.g4.j(b)&&a.i8.j(b)?1:0;}
function GA(){Y.call(this);this.dK=null;}
function ADK(a){var b=new GA();Wd(b,a);return b;}
function Wd(a,b){var c,d;BH(a);c=J();d=0;while(d<b.g()){c.bx(BI(Bz(b.d(d))));d=d+1|0;}a.dK=c.f();a.P=c.g();}
function ND(a,b,c){var d;d=0;while(true){if(d>=a.dK.g())return a.dK.g();if(a.dK.d(d)!=BI(Bz(c.d(b+d|0))))break;d=d+1|0;}return (-1);}
function ID(){var a=this;I.call(a);a.g$=0;a.gC=null;a.hp=null;a.kP=null;}
function ACe(a,b,c,d){var e=new ID();OX(e,a,b,c,d);return e;}
function OX(a,b,c,d,e){a.kP=b;a.g$=c;a.gC=d;a.hp=e;P(a);}
function RN(a,b){return a.g$^a.gC.j(b)&&a.hp.j(b)?0:1;}
function Mn(){BM.call(this);}
function ACT(a,b,c){var d=new Mn();PR(d,a,b,c);return d;}
function PR(a,b,c,d){CZ(a,b,c,d);}
function Z1(a,b,c,d){var e;e=d.q();if(e>b)return a.e.bd(b,e,c,d);return a.e.b(b,c,d);}
function Vq(a,b,c,d){var e;e=d.q();if(a.e.bd(b,e,c,d)>=0)return b;return (-1);}
function IE(){var a=this;I.call(a);a.iA=null;a.gN=0;a.jb=null;}
function ABx(a,b,c){var d=new IE();Qb(d,a,b,c);return d;}
function Qb(a,b,c,d){a.jb=b;a.iA=c;a.gN=d;P(a);}
function Y1(a,b){return a.iA.j(b)&&a.gN^a.jb.v.bJ(b)?1:0;}
function Lo(){I.call(this);this.kV=null;}
function ADE(a){var b=new Lo();Nj(b,a);return b;}
function Nj(a,b){a.kV=b;P(a);}
function YF(a,b){return MT(b);}
function Ix(){var a=this;I.call(a);a.hf=null;a.ja=0;a.gM=null;}
function ADH(a,b,c){var d=new Ix();NS(d,a,b,c);return d;}
function NS(a,b,c,d){a.gM=b;a.hf=c;a.ja=d;P(a);}
function V7(a,b){return a.hf.j(b)&&a.ja^a.gM.v.bJ(b)?0:1;}
function Bs(){var a=this;R.call(a);a.ff=0;a.c4=0;}
var AEA=null;function Ea(){Ea=Bc(Bs);U5();}
function AB7(a){var b=new Bs();Cl(b,a);return b;}
function Cl(a,b){Ea();Bn(a);a.c4=b;}
function Ql(a,b,c,d){var e,f;e=d.eA(a.c4);d.fy(a.c4,b);f=a.e.b(b,c,d);if(f<0)d.fy(a.c4,e);return f;}
function N9(a){return a.c4;}
function Rj(a,b){return 0;}
function U5(){AEA=ABT();}
function Fu(){Bs.call(this);}
function AED(a){var b=new Fu();Lm(b,a);return b;}
function Lm(a,b){Cl(a,b);}
function Ry(a,b,c,d){var e,f;e=a.c6();f=d.bD(e);if(f!=b)b=(-1);return b;}
function CG(){var a=this;C.call(a);a.m=null;a.D=0;}
function AEE(){var a=new CG();EY(a);return a;}
function ADk(a){var b=new CG();EJ(b,a);return b;}
function EY(a){EJ(a,16);}
function EJ(a,b){L(a);a.m=$rt_createCharArray(b);}
function Ia(a,b){return a.fA(a.D,b);}
function J4(a,b,c){var d,e,f;if(b>=0&&b<=a.D){if(c===null)c=B(16);else if(c.Q())return a;a.bZ(a.D+c.g()|0);d=a.D-1|0;while(d>=b){a.m.data[d+c.g()|0]=a.m.data[d];d=d+(-1)|0;}a.D=a.D+c.g()|0;d=0;while(d<c.g()){e=a.m.data;f=b+1|0;e[b]=c.d(d);d=d+1|0;b=f;}return a;}G(Ff());}
function Il(a,b){return a.gU(b,10);}
function PG(a,b,c){return a.jC(a.D,b,c);}
function Yh(a,b,c,d){var e,f,g,h,i,j,k,l;e=1;if(c<0){e=0;c= -c;}a:{if(c<d){if(e)BB(a,b,b+1|0);else{BB(a,b,b+2|0);f=a.m.data;g=b+1|0;f[b]=45;b=g;}a.m.data[b]=D_(c,d);}else{h=1;i=1;j=2147483647/d|0;b:{while(true){k=Ce(h,d);if(k>c){k=h;break b;}i=i+1|0;if(k>j)break;h=k;}}if(!e)i=i+1|0;BB(a,b,b+i|0);if(e)l=b;else{f=a.m.data;l=b+1|0;f[b]=45;}while(true){if(k<=0)break a;f=a.m.data;g=l+1|0;f[l]=D_(c/k|0,d);c=c%k|0;k=k/d|0;l=g;}}}return a;}
function Kg(a,b){return a.iZ(a.D,b);}
function Hy(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=BW(c,0.0);if(!d){BB(a,b,b+3|0);e=a.m.data;d=b+1|0;e[b]=48;e=a.m.data;f=d+1|0;e[d]=46;a.m.data[f]=48;return a;}if(!d){BB(a,b,b+4|0);e=a.m.data;d=b+1|0;e[b]=45;e=a.m.data;f=d+1|0;e[d]=48;e=a.m.data;d=f+1|0;e[f]=46;a.m.data[d]=48;return a;}if(isNaN(c)?1:0){BB(a,b,b+3|0);e=a.m.data;d=b+1|0;e[b]=78;e=a.m.data;f=d+1|0;e[d]=97;a.m.data[f]=78;return a;}if(!isFinite(c)?1:0){if(d>0){BB(a,b,b+8|0);d=b;}else{BB(a,b,b+9|0);e=a.m.data;d=b+1|0;e[b]=45;}e=a.m.data;f=d+
1|0;e[d]=73;e=a.m.data;d=f+1|0;e[f]=110;e=a.m.data;f=d+1|0;e[d]=102;e=a.m.data;d=f+1|0;e[f]=105;e=a.m.data;f=d+1|0;e[d]=110;e=a.m.data;d=f+1|0;e[f]=105;e=a.m.data;f=d+1|0;e[d]=116;a.m.data[f]=121;return a;}AB4();g=AEi;G_(c,g);h=g.fP;i=g.fq;j=g.g8;k=1;l=1;if(j){j=1;l=2;}m=9;n=VC(h);if(n>0)m=m-n|0;if(i<7&&i>=(-3)){if(i>=0){k=i+1|0;m=Bq(m,k+1|0);i=0;}else if(i<0){h=h/AEe.data[ -i]|0;m=m-i|0;i=0;}}if(i){l=l+2|0;if(!(i>(-10)&&i<10))l=l+1|0;if(i<0)l=l+1|0;}if(i&&m==k)m=m+1|0;d=l+m|0;BB(a,b,b+d|0);if(!j)f=b;else{e
=a.m.data;f=b+1|0;e[b]=45;}o=100000000;p=0;while(p<m){if(o<=0)q=0;else{q=h/o|0;h=h%o|0;}e=a.m.data;d=f+1|0;e[f]=(48+q|0)&65535;k=k+(-1)|0;if(k)f=d;else{e=a.m.data;f=d+1|0;e[d]=46;}o=o/10|0;p=p+1|0;}if(i){e=a.m.data;d=f+1|0;e[f]=69;if(i>=0)f=d;else{i= -i;e=a.m.data;f=d+1|0;e[d]=45;}if(i<10)r=f;else{e=a.m.data;r=f+1|0;e[f]=(48+(i/10|0)|0)&65535;}a.m.data[r]=(48+(i%10|0)|0)&65535;}return a;}
function VC(b){var c,d,e,f;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;f=e*100|0;if(b%f|0)f=e;else c=c|2;if(!(b%(f*10|0)|0))c=c|1;return c;}
function F8(a,b){return a.fM(a.D,b);}
function F4(a,b,c){BB(a,b,b+1|0);a.m.data[b]=c;return a;}
function L5(a,b){return a.hN(a.D,b);}
function Kl(a,b,c){return a.fA(b,c===null?B(16):c.f());}
function ES(a,b){var c,d;if(a.m.data.length>=b)return;if(a.m.data.length>=1073741823)c=2147483647;else{d=a.m.data.length*2|0;c=Bq(b,Bq(d,5));}a.m=EM(a.m,c);}
function EF(a){return E_(a.m,0,a.D);}
function FR(a){return a.D;}
function Ha(a,b){if(b>=0&&b<a.D)return a.m.data[b];G(Cq());}
function FZ(a,b,c,d){return a.e9(a.D,b,c,d);}
function EG(a,b,c,d,e){var f,g,h,i,j;BB(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.m.data;i=b+1|0;j=d+1|0;h[b]=g[d];b=i;d=j;}return a;}
function EU(a,b){return a.fV(b,0,b.data.length);}
function K4(a,b,c,d,e){var f,g,h,i;if(b>c)G(Bo(B(17)));while(b<c){f=d.data;g=e+1|0;h=a.m.data;i=b+1|0;f[e]=h[b];e=g;b=i;}}
function FE(a,b){a.D=b;}
function Ld(a,b){var c,d,e;if(b>=0&&b<a.D){a.D=a.D-1|0;while(b<a.D){c=a.m.data;d=a.m.data;e=b+1|0;c[b]=d[e];b=e;}return a;}G(Ff());}
function LF(a,b,c){var d,e,f,g,h,i;d=BW(b,c);if(d<=0&&b<=a.D){if(!d)return a;e=a.D-c|0;a.D=a.D-(c-b|0)|0;f=0;while(f<e){g=a.m.data;d=b+1|0;h=a.m.data;i=c+1|0;g[b]=h[c];f=f+1|0;b=d;c=i;}return a;}G(Ff());}
function BB(a,b,c){var d,e;d=a.D-b|0;a.bZ((a.D+c|0)-b|0);e=d-1|0;while(e>=0){a.m.data[c+e|0]=a.m.data[b+e|0];e=e+(-1)|0;}a.D=a.D+(c-b|0)|0;}
function Dd(){}
function GR(){CG.call(this);}
function GS(a){var b=new GR();Zm(b,a);return b;}
function J(){var a=new GR();YH(a);return a;}
function Zm(a,b){EJ(a,b);}
function YH(a){EY(a);}
function Oo(a,b){Ia(a,b);return a;}
function Pd(a,b){Il(a,b);return a;}
function Xe(a,b){Kg(a,b);return a;}
function Oa(a,b){F8(a,b);return a;}
function Ti(a,b,c,d){FZ(a,b,c,d);return a;}
function UX(a,b){EU(a,b);return a;}
function Ow(a,b){L5(a,b);return a;}
function Vo(a,b,c){Hy(a,b,c);return a;}
function SZ(a,b,c,d,e){EG(a,b,c,d,e);return a;}
function Zr(a,b,c){Kl(a,b,c);return a;}
function P3(a,b,c){F4(a,b,c);return a;}
function XM(a,b,c){LF(a,b,c);return a;}
function VH(a,b){Ld(a,b);return a;}
function ZK(a,b,c){J4(a,b,c);return a;}
function ZX(a,b){FE(a,b);}
function UO(a,b,c,d,e){K4(a,b,c,d,e);}
function ZC(a,b,c,d,e){return a.lR(b,c,d,e);}
function Ua(a,b,c,d){return a.jN(b,c,d);}
function Q2(a){return FR(a);}
function RC(a){return EF(a);}
function Z2(a,b){ES(a,b);}
function Ot(a,b,c){return a.j5(b,c);}
function Nz(a,b,c){return a.li(b,c);}
function Xh(a,b,c){return a.k9(b,c);}
function AAo(a,b,c){return a.j1(b,c);}
function DF(){Ee.call(this);}
function AAO(){var a=new DF();Ma(a);return a;}
function Ma(a){Jn(a);}
function KK(a){return Jf(a).I(48,57);}
function KY(){T.call(this);}
function ABH(){var a=new KY();ZM(a);return a;}
function ZM(a){BA(a);}
function KL(){var a=this;V.call(a);a.fD=null;a.e7=null;}
function E0(a,b){var c=new KL();YX(c,a,b);return c;}
function YX(a,b,c){BC(a);a.fD=b;a.e7=c;}
function Qe(a,b,c,d){var e;e=a.fD.b(b,c,d);if(e<0)e=a.e7.b(b,c,d);if(e>=0)return e;return (-1);}
function Qu(a,b){a.e=b;a.e7.s(b);a.fD.s(b);}
function RS(a,b){return 1;}
function Rb(a,b){return 1;}
function Ga(){}
function Dt(){}
function E7(){}
function BU(){C.call(this);}
function AEF(){var a=new BU();CR(a);return a;}
function CR(a){L(a);}
function ON(a,b,c,d){var e,f,g;e=0;while(e<d){f=b.data;g=c+1|0;a.e1(f[c]);e=e+1|0;c=g;}}
function My(){var a=this;BU.call(a);a.b3=null;a.cp=0;}
function AAS(){var a=new My();ZW(a);return a;}
function AEG(a){var b=new My();H6(b,a);return b;}
function ZW(a){H6(a,32);}
function H6(a,b){CR(a);a.b3=$rt_createByteArray(b);}
function OL(a,b){var c,d;ER(a,a.cp+1|0);c=a.b3.data;d=a.cp;a.cp=d+1|0;c[d]=b<<24>>24;}
function P_(a,b,c,d){var e,f,g,h,i;ER(a,a.cp+d|0);e=0;while(e<d){f=b.data;g=a.b3.data;h=a.cp;a.cp=h+1|0;i=c+1|0;g[h]=f[c];e=e+1|0;c=i;}}
function ER(a,b){var c;if(a.b3.data.length<b){c=Bq(b,(a.b3.data.length*3|0)/2|0);a.b3=FQ(a.b3,c);}}
function W4(a,b){return ABC(a.b3,0,a.cp,b);}
function GU(){var a=this;V.call(a);a.h_=null;a.js=0;}
function AAR(a){var b=new GU();Wv(b,a);return b;}
function Wv(a,b){BC(a);a.h_=b.c3();a.js=b.G;}
function Vt(a,b){a.e=b;}
function XW(a,b,c,d){var e,f,g,h,i,j,k;e=d.bv();f=d.q();g=b+1|0;h=BW(g,f);if(h>0){d.by=1;return (-1);}i=c.d(b);if(!a.h_.j(i))return (-1);if(Bl(i)){if(h<0){j=c.d(g);if(Bt(j))return (-1);}}else if(Bt(i)&&b>e){k=c.d(b-1|0);if(Bl(k))return (-1);}return a.e.b(g,c,d);}
function Mm(){Bv.call(this);}
function ACI(a,b,c){var d=new Mm();R7(d,a,b,c);return d;}
function R7(a,b,c,d){Cz(a,b,c,d);}
function Y9(a,b,c,d){var e;if(!a.w.x(d))return a.e.b(b,c,d);e=a.e.b(b,c,d);if(e>=0)return e;return a.w.b(b,c,d);}
function Cp(){Bs.call(this);}
function ADg(){var a=new Cp();We(a);return a;}
function We(a){Cl(a,0);}
function Xr(a,b,c,d){if(d.ig()!=1&&b!=d.q())return (-1);d.jL();d.fy(0,b);return b;}
function Ic(){B9.call(this);}
function TD(a){var b=new Ic();Oq(b,a);return b;}
function Oq(a,b){Ih(a,b);}
function J6(){Bv.call(this);}
function AA1(a,b,c){var d=new J6();Zp(d,a,b,c);return d;}
function Zp(a,b,c,d){Cz(a,b,c,d);Ea();b.s(AEA);}
function OK(a,b,c,d){var e,f;e=a.w.b(b,c,d);if(e<0)return (-1);if(e>b){while(true){f=a.w.b(e,c,d);if(f<=e)break;e=f;}b=e;}return a.e.b(b,c,d);}
function Kr(){Y.call(this);}
function Cu(a){var b=new Kr();Op(b,a);return b;}
function Op(a,b){Hq(a,b);a.P=0;}
function Uy(a,b,c){return 0;}
function Vr(a,b,c,d){var e,f,g,h,i;e=d.q();f=d.bv();while(true){g=BW(b,e);if(g>0)return (-1);if(g<0){h=c.d(b);if(Bt(h)&&b>f){i=c.d(b-1|0);if(Bl(i)){b=b+1|0;continue;}}}if(a.e.b(b,c,d)>=0)break;b=b+1|0;}return b;}
function SB(a,b,c,d,e){var f,g,h,i;f=e.q();g=e.bv();while(true){if(c<b)return (-1);if(c<f){h=d.d(c);if(Bt(h)&&c>g){i=d.d(c-1|0);if(Bl(i)){c=c+(-1)|0;continue;}}}if(a.e.b(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function O_(a,b){return 0;}
function Im(){CG.call(this);}
function SR(){var a=new Im();XC(a);return a;}
function XC(a){EY(a);}
function Vu(a,b){F8(a,b);return a;}
function Y8(a,b,c,d){FZ(a,b,c,d);return a;}
function UC(a,b){EU(a,b);return a;}
function Oh(a,b,c,d,e){EG(a,b,c,d,e);return a;}
function XL(a,b,c){F4(a,b,c);return a;}
function OR(a,b){FE(a,b);}
function VG(a,b,c,d,e){return a.jG(b,c,d,e);}
function Rg(a,b,c,d){return a.lS(b,c,d);}
function NT(a,b){return Ha(a,b);}
function ZR(a){return FR(a);}
function Rw(a){return EF(a);}
function R1(a,b){ES(a,b);}
function Vx(a,b,c){return a.lH(b,c);}
function CC(){var a=this;C.call(a);a.fW=0;a.K=0;a.bH=0;a.c$=0;}
function AEH(a){var b=new CC();Fy(b,a);return b;}
function Fy(a,b){L(a);a.c$=(-1);a.fW=b;a.bH=b;}
function Kc(a){return a.fW;}
function BG(a){return a.K;}
function FF(a,b){if(b>=0&&b<=a.bH){a.K=b;if(b<a.c$)a.c$=0;return a;}G(By(J().a(B(18)).n(b).a(B(19)).n(a.bH).a(B(20)).f()));}
function KD(a){return a.bH;}
function IV(a){a.K=0;a.bH=a.fW;a.c$=(-1);return a;}
function MD(a){a.bH=a.K;a.K=0;a.c$=(-1);return a;}
function W(a){return a.bH-a.K|0;}
function BR(a){return a.K>=a.bH?0:1;}
function Gs(){I.call(this);this.jo=null;}
function AAX(a){var b=new Gs();Zd(b,a);return b;}
function Zd(a,b){a.jo=b;P(a);}
function YR(a,b){return KE(b);}
function Da(){C.call(this);}
var AEI=null;var AEJ=null;var AEK=null;function AB5(){AB5=Bc(Da);Un();}
function ADl(){var a=new Da();KG(a);return a;}
function KG(a){AB5();L(a);}
function LB(a,b){var c,d,e;c=0;while(true){if(c>=AEK.data.length)G(AA3(B(21),B(21),b));d=AEK.data[c];e=d.data;if(b.bO(e[0]))break;c=c+1|0;}return e[1];}
function Un(){var b,c,d,e;AEI=ACB();AEJ=ADD();b=E($rt_arraycls(C),194);c=b.data;d=E(C,2);e=d.data;e[0]=B(22);e[1]=ADB();c[0]=d;d=E(C,2);e=d.data;e[0]=B(23);e[1]=AAT();c[1]=d;d=E(C,2);e=d.data;e[0]=B(24);e[1]=ACt();c[2]=d;d=E(C,2);e=d.data;e[0]=B(25);e[1]=AC6();c[3]=d;d=E(C,2);e=d.data;e[0]=B(26);e[1]=AEJ;c[4]=d;d=E(C,2);e=d.data;e[0]=B(27);e[1]=AAO();c[5]=d;d=E(C,2);e=d.data;e[0]=B(28);e[1]=ADv();c[6]=d;d=E(C,2);e=d.data;e[0]=B(29);e[1]=ABl();c[7]=d;d=E(C,2);e=d.data;e[0]=B(30);e[1]=AA7();c[8]=d;d=E(C,2);e=
d.data;e[0]=B(31);e[1]=ABy();c[9]=d;d=E(C,2);e=d.data;e[0]=B(32);e[1]=ACv();c[10]=d;d=E(C,2);e=d.data;e[0]=B(33);e[1]=ABq();c[11]=d;d=E(C,2);e=d.data;e[0]=B(34);e[1]=ABK();c[12]=d;d=E(C,2);e=d.data;e[0]=B(35);e[1]=AAP();c[13]=d;d=E(C,2);e=d.data;e[0]=B(36);e[1]=ACV();c[14]=d;d=E(C,2);e=d.data;e[0]=B(37);e[1]=ACn();c[15]=d;d=E(C,2);e=d.data;e[0]=B(38);e[1]=AAM();c[16]=d;d=E(C,2);e=d.data;e[0]=B(39);e[1]=ACh();c[17]=d;d=E(C,2);e=d.data;e[0]=B(40);e[1]=AAN();c[18]=d;d=E(C,2);e=d.data;e[0]=B(41);e[1]=ABF();c[19]
=d;d=E(C,2);e=d.data;e[0]=B(42);e[1]=ADh();c[20]=d;d=E(C,2);e=d.data;e[0]=B(43);e[1]=ABY();c[21]=d;d=E(C,2);e=d.data;e[0]=B(44);e[1]=AAZ();c[22]=d;d=E(C,2);e=d.data;e[0]=B(45);e[1]=ACq();c[23]=d;d=E(C,2);e=d.data;e[0]=B(46);e[1]=ACf();c[24]=d;d=E(C,2);e=d.data;e[0]=B(47);e[1]=ADb();c[25]=d;d=E(C,2);e=d.data;e[0]=B(48);e[1]=ABE();c[26]=d;d=E(C,2);e=d.data;e[0]=B(49);e[1]=ABX();c[27]=d;d=E(C,2);e=d.data;e[0]=B(50);e[1]=AEI;c[28]=d;d=E(C,2);e=d.data;e[0]=B(51);e[1]=AA_();c[29]=d;d=E(C,2);e=d.data;e[0]=B(52);e[1]
=ABn();c[30]=d;d=E(C,2);e=d.data;e[0]=B(53);e[1]=AEI;c[31]=d;d=E(C,2);e=d.data;e[0]=B(54);e[1]=AAI();c[32]=d;d=E(C,2);e=d.data;e[0]=B(55);e[1]=AEJ;c[33]=d;d=E(C,2);e=d.data;e[0]=B(56);e[1]=ACW();c[34]=d;d=E(C,2);e=d.data;e[0]=B(57);e[1]=H(0,127);c[35]=d;d=E(C,2);e=d.data;e[0]=B(58);e[1]=H(128,255);c[36]=d;d=E(C,2);e=d.data;e[0]=B(59);e[1]=H(256,383);c[37]=d;d=E(C,2);e=d.data;e[0]=B(60);e[1]=H(384,591);c[38]=d;d=E(C,2);e=d.data;e[0]=B(61);e[1]=H(592,687);c[39]=d;d=E(C,2);e=d.data;e[0]=B(62);e[1]=H(688,767);c[40]
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
=d;d=E(C,2);e=d.data;e[0]=B(172);e[1]=H(65056,65071);c[150]=d;d=E(C,2);e=d.data;e[0]=B(173);e[1]=H(65072,65103);c[151]=d;d=E(C,2);e=d.data;e[0]=B(174);e[1]=H(65104,65135);c[152]=d;d=E(C,2);e=d.data;e[0]=B(175);e[1]=H(65136,65279);c[153]=d;d=E(C,2);e=d.data;e[0]=B(176);e[1]=H(65280,65519);c[154]=d;d=E(C,2);e=d.data;e[0]=B(177);e[1]=H(0,1114111);c[155]=d;d=E(C,2);e=d.data;e[0]=B(178);e[1]=ABs();c[156]=d;d=E(C,2);e=d.data;e[0]=B(179);e[1]=S(0,1);c[157]=d;d=E(C,2);e=d.data;e[0]=B(180);e[1]=Dc(62,1);c[158]=d;d=E(C,
2);e=d.data;e[0]=B(181);e[1]=S(1,1);c[159]=d;d=E(C,2);e=d.data;e[0]=B(182);e[1]=S(2,1);c[160]=d;d=E(C,2);e=d.data;e[0]=B(183);e[1]=S(3,0);c[161]=d;d=E(C,2);e=d.data;e[0]=B(184);e[1]=S(4,0);c[162]=d;d=E(C,2);e=d.data;e[0]=B(185);e[1]=S(5,1);c[163]=d;d=E(C,2);e=d.data;e[0]=B(186);e[1]=Dc(448,1);c[164]=d;d=E(C,2);e=d.data;e[0]=B(187);e[1]=S(6,1);c[165]=d;d=E(C,2);e=d.data;e[0]=B(188);e[1]=S(7,0);c[166]=d;d=E(C,2);e=d.data;e[0]=B(189);e[1]=S(8,1);c[167]=d;d=E(C,2);e=d.data;e[0]=B(190);e[1]=Dc(3584,1);c[168]=d;d
=E(C,2);e=d.data;e[0]=B(191);e[1]=S(9,1);c[169]=d;d=E(C,2);e=d.data;e[0]=B(192);e[1]=S(10,1);c[170]=d;d=E(C,2);e=d.data;e[0]=B(193);e[1]=S(11,1);c[171]=d;d=E(C,2);e=d.data;e[0]=B(194);e[1]=Dc(28672,0);c[172]=d;d=E(C,2);e=d.data;e[0]=B(195);e[1]=S(12,0);c[173]=d;d=E(C,2);e=d.data;e[0]=B(196);e[1]=S(13,0);c[174]=d;d=E(C,2);e=d.data;e[0]=B(197);e[1]=S(14,0);c[175]=d;d=E(C,2);e=d.data;e[0]=B(198);e[1]=ADm(983040,1,1);c[176]=d;d=E(C,2);e=d.data;e[0]=B(199);e[1]=S(15,0);c[177]=d;d=E(C,2);e=d.data;e[0]=B(200);e[1]
=S(16,1);c[178]=d;d=E(C,2);e=d.data;e[0]=B(201);e[1]=S(18,1);c[179]=d;d=E(C,2);e=d.data;e[0]=B(202);e[1]=ADT(19,0,1);c[180]=d;d=E(C,2);e=d.data;e[0]=B(203);e[1]=Dc(1643118592,1);c[181]=d;d=E(C,2);e=d.data;e[0]=B(204);e[1]=S(20,0);c[182]=d;d=E(C,2);e=d.data;e[0]=B(205);e[1]=S(21,0);c[183]=d;d=E(C,2);e=d.data;e[0]=B(206);e[1]=S(22,0);c[184]=d;d=E(C,2);e=d.data;e[0]=B(207);e[1]=S(23,0);c[185]=d;d=E(C,2);e=d.data;e[0]=B(208);e[1]=S(24,1);c[186]=d;d=E(C,2);e=d.data;e[0]=B(209);e[1]=Dc(2113929216,1);c[187]=d;d=E(C,
2);e=d.data;e[0]=B(210);e[1]=S(25,1);c[188]=d;d=E(C,2);e=d.data;e[0]=B(211);e[1]=S(26,0);c[189]=d;d=E(C,2);e=d.data;e[0]=B(212);e[1]=S(27,0);c[190]=d;d=E(C,2);e=d.data;e[0]=B(213);e[1]=S(28,1);c[191]=d;d=E(C,2);e=d.data;e[0]=B(214);e[1]=S(29,0);c[192]=d;d=E(C,2);e=d.data;e[0]=B(215);e[1]=S(30,0);c[193]=d;AEK=b;}
function CN(){var a=this;C.call(a);a.g5=null;a.kL=0;}
function AEL(a,b){var c=new CN();FS(c,a,b);return c;}
function FS(a,b,c){L(a);a.g5=b;a.kL=c;}
function MJ(a){return a.g5;}
function J5(b,c){var d,e,f,g,h;d=b.j7();if(d===null)G(By(J().a(B(216)).a(b.bV()).f()));e=d.data;f=e.length;g=0;while(true){if(g>=f)G(By(J().a(B(217)).a(b.bV()).a(B(218)).ib(c).a(B(219)).f()));h=e[g];if(MJ(h).bO(c))break;g=g+1|0;}return h;}
function B4(){CN.call(this);}
var AEM=null;var AEN=null;var AEO=null;var AEP=null;var AEQ=null;function Fw(){Fw=Bc(B4);Sh();}
function FO(a,b){var c=new B4();HY(c,a,b);return c;}
function WB(){Fw();return AEQ.dC();}
function GZ(b){Fw();return J5(D(B4),b);}
function HY(a,b,c){Fw();FS(a,b,c);}
function Sh(){var b,c;AEM=FO(B(220),0);AEN=FO(B(221),1);AEO=FO(B(222),2);AEP=FO(B(223),3);b=E(B4,4);c=b.data;c[0]=AEM;c[1]=AEN;c[2]=AEO;c[3]=AEP;AEQ=b;}
function Gl(){K.call(this);}
function AAZ(){var a=new Gl();Si(a);return a;}
function Si(a){Q(a);}
function Wq(a){var b;b=AB$(a);b.y=1;return b;}
function Cj(){var a=this;V.call(a);a.c7=0;a.fu=null;a.eN=null;a.eE=0;}
function ADP(a,b){var c=new Cj();ET(c,a,b);return c;}
function ET(a,b,c){BC(a);a.c7=1;a.eN=b;a.eE=c;}
function YJ(a,b){a.e=b;}
function Qv(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;e=$rt_createIntArray(4);f=0;g=d.q();if(b>=g)return (-1);h=a.f9(b,c,g);i=b+a.c7|0;j=KU(h);if(j===null){k=e.data;l=1;k[f]=h;}else{l=j.data.length;Gp(j,0,e,0,l);l=f+l|0;}a:{if(i<g){m=a.f9(i,c,g);while(l<4){if(!Q9(m)){k=e.data;n=l+1|0;k[l]=m;}else{k=KU(m).data;if(k.length!=2){o=e.data;n=l+1|0;o[l]=k[0];}else{o=e.data;m=l+1|0;o[l]=k[0];n=m+1|0;o[m]=k[1];}}i=i+a.c7|0;if(i>=g){l=n;break a;}m=a.f9(i,c,g);l=n;}}}if(l!=a.eE)return (-1);p=0;while(true){if(p>=l)return a.e.b(i,
c,d);if(e.data[p]!=a.eN.data[p])break;p=p+1|0;}return (-1);}
function FM(a){var b,c;if(a.fu===null){b=J();c=0;while(c<a.eE){b.d$(CJ(a.eN.data[c]));c=c+1|0;}a.fu=b.f();}return a.fu;}
function Yx(a,b,c,d){var e,f,g,h,i;a.c7=1;if(b>=(d-1|0))e=c.d(b);else{f=b+1|0;e=c.d(b);g=c.d(f);if(CT(e,g)){h=$rt_createCharArray(2);i=h.data;i[0]=e;i[1]=g;e=Iv(h,0);a.c7=2;}}return e;}
function ZB(a,b){var c,d;a:{if(b instanceof Cj){c=b;if(!FM(c).bO(FM(a))){d=0;break a;}}d=1;}return d;}
function SA(a,b){return 1;}
function H8(){Cj.call(this);}
function ADI(a,b){var c=new H8();RO(c,a,b);return c;}
function RO(a,b,c){ET(a,b,c);}
function B$(){CN.call(this);}
var AER=null;var AES=null;var AET=null;var AEU=null;function DT(){DT=Bc(B$);Qh();}
function KJ(a,b){var c=new B$();He(c,a,b);return c;}
function RE(){DT();return AEU.dC();}
function Ho(b){DT();return J5(D(B$),b);}
function He(a,b,c){DT();FS(a,b,c);}
function Qh(){var b,c;AER=KJ(B(224),0);AES=KJ(B(225),1);AET=KJ(B(226),2);b=E(B$,3);c=b.data;c[0]=AER;c[1]=AES;c[2]=AET;AEU=b;}
function CB(){CO.call(this);}
function AEV(a){var b=new CB();FL(b,a);return b;}
function FL(a,b){G2(a,b);}
function K5(){CB.call(this);}
function AEW(a){var b=new K5();Sz(b,a);return b;}
function Sz(a,b){FL(a,b);}
function Mw(){Bs.call(this);}
function AAU(){var a=new Mw();Nl(a);return a;}
function Nl(a){Cl(a,(-1));}
function SS(a,b,c,d){return b;}
function J7(){K.call(this);}
function ACt(){var a=new J7();QY(a);return a;}
function QY(a){Q(a);}
function UV(a){return Bx().I(0,127);}
function D$(){V.call(this);}
function ADp(a,b){var c=new D$();HN(c,a,b);return c;}
function HN(a,b,c){H1(a,b,c);}
function Qw(a,b,c,d){var e,f,g,h,i;e=d.bD(a.A);d.C(a.A,b);f=a.N.U();g=0;while(true){if(g>=f){d.C(a.A,e);return (-1);}h=a.N.E(g);i=h.b(b,c,d);if(i>=0)break;g=g+1|0;}return i;}
function S_(a,b){var c;c=b.bD(a.A);return !c?0:1;}
function BT(){D$.call(this);}
function ABa(a,b){var c=new BT();Dh(c,a,b);return c;}
function Dh(a,b,c){HN(a,b,c);}
function TT(a,b,c,d){var e,f,g,h,i;e=d.bD(a.A);d.C(a.A,b);f=a.N.U();g=0;while(g<f){h=a.N.E(g);i=h.b(b,c,d);if(i>=0)return a.e.b(a.br.bt(),c,d);g=g+1|0;}d.C(a.A,e);return (-1);}
function Sx(a,b){a.e=b;}
function GJ(){BT.call(this);}
function ACb(a,b){var c=new GJ();Ww(c,a,b);return c;}
function Ww(a,b,c){Dh(a,b,c);}
function QH(a,b,c,d){var e,f,g,h;e=a.N.U();f=0;while(f<e){g=a.N.E(f);h=g.b(b,c,d);if(h>=0)return a.e.b(b,c,d);f=f+1|0;}return (-1);}
function WW(a,b){return 0;}
function Cy(){C.call(this);this.k4=null;}
function AEX(){var a=new Cy();EN(a);return a;}
function AEY(a){var b=new Cy();Lq(b,a);return b;}
function EN(a){Lq(a,AB8());}
function Lq(a,b){L(a);a.k4=b;}
function M0(){var a=this;Cy.call(a);a.cT=null;a.ez=0;}
function EC(a){var b=new M0();TA(b,a);return b;}
function TA(a,b){EN(a);if(b!==null){a.cT=b;return;}G(RB());}
function Tw(a,b,c,d){var e,f,g,h,i,j;MO(a);if(a.ez>=a.cT.g())return (-1);e=U(a.cT.g()-a.ez|0,d);f=0;while(f<e){g=b.data;h=c+1|0;i=a.cT;j=a.ez;a.ez=j+1|0;g[c]=i.d(j);f=f+1|0;c=h;}return e;}
function Nm(a){a.cT=null;}
function MO(a){if(a.cT!==null)return;G(PC());}
function Kv(){BT.call(this);}
function AAQ(a,b){var c=new Kv();Vn(c,a,b);return c;}
function Vn(a,b,c){Dh(a,b,c);}
function Q8(a,b,c,d){var e,f,g;e=a.N.U();f=0;while(true){if(f>=e)return a.e.b(b,c,d);g=a.N.E(f);if(g.b(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function VN(a,b){return 0;}
function Fn(){}
function HP(){var a=this;C.call(a);a.eg=0;a.im=0;a.is=0;a.gH=0;a.da=null;}
function ABg(a){var b=new HP();Ri(b,a);return b;}
function Ri(a,b){a.da=b;L(a);a.im=a.da.b$;a.is=a.da.U();a.gH=(-1);}
function O7(a){return a.eg>=a.is?0:1;}
function Ws(a){var b,c;Jl(a);a.gH=a.eg;b=a.da;c=a.eg;a.eg=c+1|0;return b.E(c);}
function Jl(a){if(a.im>=a.da.b$)return;G(ABH());}
function Fj(){}
function DJ(){}
function D5(){}
function Fx(){}
function D1(){}
function JI(){}
function Md(b){var c,d;c=b.lastChild;while(c!==null){d=c.previousSibling;if(c.nodeType!=2)b.removeChild(c);c=d;}return b;}
function IZ(){var a=this;C.call(a);a.gL=null;a.iK=Long_ZERO;a.iO=0.0;}
function ABu(a,b){var c=new IZ();Ya(c,a,b);return c;}
function Pm(b,c){var d,e,$$je;a:{try{d=Yr(b,EC(c));}catch($$e){$$je=Bd($$e);if($$je instanceof BY){e=$$je;break a;}else{throw $$e;}}return d;}Ci().o(B(227));e.eu();return null;}
function Yr(b,c){var d,e,f,g,h,i,$$je;d=BX();e=Ej(c);a:{while(true){try{f=e.ek();if(f===null)break a;g=B8(f,32);if(!f.ej(B(228))&&g.U()>=2){h=g.E(0).c2();if(h.g()==2&&b.cu(h.d(0))>=0&&b.cu(h.d(1))>=0){i=FU(g.E(1));d.bo(ABu(h,i));}}continue;}catch($$e){$$je=Bd($$e);f=$$je;}}e.bG();G(f);}e.bG();TO(d);return d;}
function TO(b){var c,d,e;c=Long_ZERO;d=b.Y();while(d.Z()){e=d.W();c=Long_add(c,e.dl());}d=b.Y();while(d.Z()){e=d.W();e.iO=Long_toNumber(e.dl())/Long_toNumber(c);}}
function Ya(a,b,c){L(a);a.gL=b;a.iK=c;}
function TR(a){return a.gL;}
function AAc(a){return a.iK;}
function X7(a){return a.iO;}
function B5(){}
function G$(){var a=this;Ct.call(a);a.gk=0;a.eo=0;}
function ABJ(a,b){var c=new G$();Yw(c,a,b);return c;}
function Yw(a,b,c){Eo(a);a.gk=b;a.eo=c;}
function WD(a){return a.gk;}
function WX(a){return a.eo;}
function PB(a){return J().a(B(229)).n(a.gk).a(B(230)).a(a.eo==2147483647?B(21):ACQ(a.eo).f()).a(B(231)).f();}
function DV(){T.call(this);}
function ACZ(){var a=new DV();GI(a);return a;}
function GI(a){BA(a);}
function MI(){DV.call(this);}
function Gu(){var a=new MI();YV(a);return a;}
function YV(a){GI(a);}
function GN(){I.call(this);this.jq=null;}
function ABc(a){var b=new GN();U0(b,a);return b;}
function U0(a,b){a.jq=b;P(a);}
function QC(a,b){return Gt(b);}
function Hs(){C.call(this);}
function IY(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(Cv());}return b.data.length;}
function I4(b,c){if(b===null)G(RB());if(b===D($rt_voidcls()))G(Cv());if(c<0)G(ADd());return X5(b.lu(),c);}
function X5(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
function Ij(){C.call(this);}
function ABd(){var a=new Ij();RF(a);return a;}
function RF(a){L(a);}
function JP(){C.call(this);}
function D2(){DY.call(this);}
function AEZ(a,b,c){var d=new D2();Ie(d,a,b,c);return d;}
function Ie(a,b,c,d){MN(a,b,c,d);}
function WH(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=$rt_createByteArray(U(W(b),512));e=0;f=0;g=$rt_createCharArray(U(W(c),512));a:{while(true){if((e+32|0)>f&&BR(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=U(W(b)+j|0,i.length);b.lm(d,j,f-j|0);e=0;}if(!BR(c)){if(!BR(b)&&e>=f){Bg();k=AEz;}else{Bg();k=AEx;}break a;}i=g.data;l=U(W(c),i.length);m=ABI(b,c);k=a.kp(d,e,f,g,0,l,m);e=m.iP;if(k===null&&0==m.fa){Bg();k=AEz;}j=m.fa;c.kY(g,0,j);if(k!==null)break;}}b.eq(BG(b)-(f-e|0)|0);return k;}
function HJ(){D2.call(this);}
function ABW(a){var b=new HJ();ZY(b,a);return b;}
function ZY(a,b){Ie(a,b,0.3333333432674408,0.5);}
function Yc(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(h.di())break a;Bg();i=AEz;break a;}n=k+1|0;o=j[k];if(!Ck(a,o)){c=n+(-2)|0;i=BL(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|o&63)&65535;k=n;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(h.di())break a;Bg();i=AEz;break a;}p=k+1|0;o=j[k];k=p+1|0;q=j[p];if(!Ck(a,o))break b;if(!Ck(a,q))break b;r
=((l&15)<<12|(o&63)<<6|q&63)&65535;if(D3(r)){c=k+(-3)|0;i=BL(3);break a;}j=e.data;m=f+1|0;j[f]=r;}else{if((l&248)!=240){c=k+(-1)|0;i=BL(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(h.di())break a;Bg();i=AEz;break a;}if((f+2|0)>g){c=k+(-1)|0;if(h.dy(2))break a;Bg();i=AEx;break a;}p=k+1|0;o=j[k];m=p+1|0;q=j[p];k=m+1|0;s=j[m];if(!Ck(a,o))break c;if(!Ck(a,q))break c;if(!Ck(a,s))break c;j=e.data;t=(l&7)<<18|(o&63)<<12|(q&63)<<6|s&63;p=f+1|0;j[f]=CQ(t);m=p+1|0;j[p]=CF(t);}c=k;f=m;}break a;}c=k+(-3)|0;i=BL(1);break a;}c
=k+(-3)|0;i=BL(1);}h.f8(c);h.eL(f);return i;}
function Ck(a,b){return (b&192)!=128?0:1;}
function H3(){CB.call(this);}
function AE0(a){var b=new H3();R5(b,a);return b;}
function R5(a,b){FL(a,b);}
function H2(){K.call(this);}
function ACh(){var a=new H2();R6(a);return a;}
function R6(a){Q(a);}
function Ue(a){var b;b=ABh(a);b.y=1;return b;}
function FB(){}
function DA(){}
function Dl(){C.call(this);}
function AE1(){var a=new Dl();Ly(a);return a;}
function Ly(a){L(a);}
function UW(a,b){var c,d,e,f;c=b.data;d=a.U();e=c.length;if(e<d)b=I4(Cf(b).eB(),d);else while(d<e){c[d]=null;d=d+1|0;}d=0;f=a.Y();while(f.Z()){c=b.data;e=d+1|0;c[d]=f.W();d=e;}return b;}
function Nb(){Bw.call(this);}
function ACc(a,b,c){var d=new Nb();SJ(d,a,b,c);return d;}
function SJ(a,b,c,d){Cr(a,b,c,d);}
function Pz(a,b,c,d){var e;a:{while(true){if((b+a.B.ba()|0)>d.q())break a;e=a.B.H(b,c);if(e<1)break;b=b+e|0;}}return a.e.b(b,c,d);}
function Jo(){var a=this;C.call(a);a.gw=null;a.hS=null;a.iP=0;a.fa=0;}
function ABI(a,b){var c=new Jo();Pl(c,a,b);return c;}
function Pl(a,b,c){L(a);a.gw=b;a.hS=c;}
function Pg(a){return BR(a.gw);}
function Rh(a,b){return W(a.hS)<b?0:1;}
function WV(a,b){a.iP=b;}
function S2(a,b){a.fa=b;}
function JS(){C.call(this);}
function Od(b,c){var d,e,f,g,h,i,j,k;if(!b)return B(232);d=1<<c;e=d-1|0;f=(((32-EP(b)|0)+c|0)-1|0)/c|0;g=$rt_createCharArray(f);h=Ce(f-1|0,c);i=0;while(h>=0){j=g.data;k=i+1|0;j[i]=D_(b>>>h&e,d);h=h-c|0;i=k;}return Dn(g);}
function Cb(){Bw.call(this);}
function AAV(a,b,c){var d=new Cb();Em(d,a,b,c);return d;}
function Em(a,b,c,d){Cr(a,b,c,d);}
function NI(a,b,c,d){var e;e=a.w.b(b,c,d);if(e<0)e=a.e.b(b,c,d);return e;}
function AAB(a,b){FK(a,b);a.w.s(b);}
function KM(){Cb.call(this);}
function AA2(a,b,c){var d=new KM();Y3(d,a,b,c);return d;}
function Y3(a,b,c,d){Em(a,b,c,d);}
function OJ(a,b,c,d){var e;if((b+a.B.ba()|0)<=d.q()){e=a.B.H(b,c);if(e>=1)b=b+e|0;}return a.e.b(b,c,d);}
function Ik(){I.call(this);this.lr=null;}
function ACH(a){var b=new Ik();NV(b,a);return b;}
function NV(a,b){a.lr=b;P(a);}
function QA(a,b){return CI(b);}
function Gj(){}
function H4(){I.call(this);this.kT=null;}
function AB$(a){var b=new H4();Zu(b,a);return b;}
function Zu(a,b){a.kT=b;P(a);}
function XU(a,b){return Lk(b);}
function K2(){Bw.call(this);}
function ACS(a,b,c){var d=new K2();AAE(d,a,b,c);return d;}
function AAE(a,b,c,d){Cr(a,b,c,d);}
function QL(a,b,c,d){var e;while(true){e=a.e.b(b,c,d);if(e>=0)break;if((b+a.B.ba()|0)<=d.q()){e=a.B.H(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
function Jp(){C.call(this);}
function CS(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Dz(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
function G3(){I.call(this);this.lK=null;}
function ADN(a){var b=new G3();Td(b,a);return b;}
function Td(a,b){a.lK=b;P(a);}
function Tt(a,b){return LZ(b);}
function IS(){C.call(this);}
function Tm(b){var c,d,e,f;c=AB9(b.cq());d=Hk(c);e=$rt_createIntArray(d);f=0;while(f<d){e.data[f]=Hk(c);f=f+1|0;}return e;}
function D9(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function AAy(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;c=E(EK,16384);d=$rt_createByteArray(16384);e=0;f=0;g=0;h=0;while(h<b.g()){i=D9(b.d(h));if(i==64){h=h+1|0;i=D9(b.d(h));j=0;k=1;l=0;while(l<3){h=h+1|0;m=D9(b.d(h));j=j|Ce(k,m);k=k*64|0;l=l+1|0;}}else if(i<32)j=1;else{i=(i-32|0)<<24>>24;h=h+1|0;j=D9(b.d(h));}if(!i&&j>=128){if(e>0){n=c.data;o=f+1|0;n[f]=VI(g,g+e|0,FQ(d,e));f=o;}g=g+(e+j|0)|0;e=0;}else{p=d.data;o=e+j|0;if(o<p.length)q=f;else{n=c.data;q=f+1|0;n[f]=VI(g,g+e|0,FQ(d,e));g=g+o|0;e=0;}while(true){o=j
+(-1)|0;if(j<=0)break;r=e+1|0;p[e]=i;e=r;j=o;}f=q;}h=h+1|0;}return L8(c,f);}
function GX(){var a=this;C.call(a);a.lG=null;a.bT=null;a.fN=0;a.fn=0;a.fd=null;a.cR=null;a.fe=null;}
function OM(){var a=new GX();SU(a);return a;}
function SU(a){L(a);a.bT=BX();a.fd=$rt_createDoubleArray(3);a.cR=$rt_createDoubleMultiArray([3,4]);DT();a.fe=AER;}
function TM(a,b,c){var d,e,$$je;a:{try{a.lG=c;HZ(a,EC(b));d=MQ(a);}catch($$e){$$je=Bd($$e);if($$je instanceof Br){e=$$je;break a;}else{throw $$e;}}return d;}Ci().o(B(233));e.eu();return 0;}
function HZ(a,b){var c,d,e,f,g,h,i,$$je;c=Ej(b);a:{try{d=0;while(true){e=c.ek();if(e===null)break;f=e.cu(35);if(f>=0)e=e.ce(0,f);e=e.hM();if(!e.g())continue;g=B8(e,32);h=0;while(h<g.U()){i=AB6(g.E(h),d,h);a.bT.bo(i);h=h+1|0;}if(g.U()>a.fN)a.fN=g.U();d=d+1|0;if(d>a.fn)a.fn=d;}}catch($$e){$$je=Bd($$e);e=$$je;break a;}c.bG();return;}c.bG();G(e);}
function MQ(a){var b,c;b=0;while(b<a.bT.U()){c=0;while(c<a.bT.U()){if(b!=c&&a.bT.E(c).g9(a.bT.E(b).iN()))return 0;c=c+1|0;}b=b+1|0;}return 1;}
function Ph(a,b){var c,d;c=a.bT.Y();while(true){if(!c.Z())return null;d=c.W();if(d.g9(b))break;}return d;}
function AAH(a,b,c){var d,e;d=a.bT.Y();while(true){if(!d.Z())return null;e=d.W();if(e.dn()==b&&e.lk()==c)break;}return e;}
function Zo(a){var b,c,d;b=J();c=a.bT.Y();while(c.Z()){d=c.W();b.d$(d.dS());}return b.f();}
function QI(a){return a.fN;}
function Wi(a){return a.fn;}
function OP(a,b){return a.fd.data[b];}
function Zh(a,b,c){a.fd.data[b]=c;}
function YI(a,b,c){if(b>4)b=9-b|0;if(a.cR.data.length<=b)return 0.0;return a.cR.data[b].data[c];}
function Um(a,b,c,d){a.cR.data[b].data[c]=d;}
function RP(a,b){var c;if(b>4)b=9-b|0;if(a.cR.data.length<=b)return 0;c=0;while(c<3){if(a.cR.data[b].data[c]>0.0)return 1;c=c+1|0;}return 0;}
function Xi(a){return a.fe;}
function TK(a,b){a.fe=b;}
function Ef(){DF.call(this);}
function ABl(){var a=new Ef();I8(a);return a;}
function I8(a){Ma(a);}
function Gr(a){return KK(a).I(33,64).I(91,96).I(123,126);}
function Mp(){Ef.call(this);}
function AA7(){var a=new Mp();Vj(a);return a;}
function Vj(a){I8(a);}
function Ol(a){return Gr(a).be(32);}
function JE(){K.call(this);}
function ACf(){var a=new JE();PA(a);return a;}
function PA(a){Q(a);}
function WC(a){return ADc(a);}
function Ei(){}
function D8(){var a=this;C.call(a);a.fo=null;a.ee=null;}
function AE2(a,b){var c=new D8();MR(c,a,b);return c;}
function MR(a,b,c){L(a);a.fo=b;a.ee=c;}
function ED(){var a=this;D8.call(a);a.eU=0;a.df=null;}
function ACr(a,b){var c=new ED();RJ(c,a,b);return c;}
function RJ(a,b,c){MR(a,b,null);a.eU=c;}
function LQ(){BT.call(this);}
function AB1(a,b){var c=new LQ();VE(c,a,b);return c;}
function VE(a,b,c){Dh(a,b,c);}
function Sl(a,b,c,d){var e,f,g,h,i;e=a.N.U();f=!d.c_()?d.bv():0;a:{g=a.e.b(b,c,d);if(g>=0){d.C(a.A,b);h=0;while(true){if(h>=e)break a;i=a.N.E(h);if(i.bd(f,b,c,d)>=0){d.C(a.A,(-1));return g;}h=h+1|0;}}}return (-1);}
function AAt(a,b){return 0;}
function Dj(){var a=this;C.call(a);a.jQ=null;a.fU=null;a.jX=0.0;a.gn=0.0;a.fg=null;a.f$=null;a.cO=0;}
function AE3(a,b,c,d){var e=new Dj();L1(e,a,b,c,d);return e;}
function AE4(a,b,c){var d=new Dj();La(d,a,b,c);return d;}
function L1(a,b,c,d,e){L(a);B7();a.fg=AEw;a.f$=AEw;LN(a,e);a.jQ=b;a.fU=e.dC();a.jX=c;a.gn=d;}
function La(a,b,c,d){var e;e=$rt_createByteArray(1);e.data[0]=63;L1(a,b,c,d,e);}
function LN(a,b){var c;if(b!==null){c=b.data.length;if(c&&c>=a.gn)return;}G(By(B(234)));}
function Gk(a,b){if(b!==null){a.fg=b;a.fS(b);return a;}G(By(B(235)));}
function Y6(a,b){return;}
function LT(a,b){if(b!==null){a.f$=b;a.ft(b);return a;}G(By(B(235)));}
function Ye(a,b){return;}
function H_(a,b,c,d){var e,f,g,h,$$je;a:{if(a.cO!=3){if(d)break a;if(a.cO!=2)break a;}G(C0());}a.cO=!d?1:2;while(true){try{e=a.j6(b,c);}catch($$e){$$je=Bd($$e);if($$je instanceof T){f=$$je;G(TD(f));}else{throw $$e;}}if(e.dE()){if(!d)return e;g=W(b);if(g<=0)return e;e=BL(g);}else if(e.c9())break;h=!e.fY()?a.fg:a.f$;b:{B7();if(h!==AEy){if(h===AE5)break b;else return e;}if(W(c)<a.fU.data.length)return AEx;KS(c,a.fU);}b.fb(BG(b)+e.g()|0);}return e;}
function GY(a,b){var c;if(a.cO!=2&&a.cO!=4)G(C0());c=a.ju(b);Bg();if(c===AEz)a.cO=3;return c;}
function NZ(a,b){Bg();return AEz;}
function Mr(){var a=this;Y.call(a);a.bi=null;a.fB=null;a.eM=null;}
function ADn(a){var b=new Mr();TB(b,a);return b;}
function TB(a,b){var c;BH(a);a.bi=b.f();a.P=b.g();a.fB=PM(a.P);a.eM=PM(a.P);c=0;while(c<(a.P-1|0)){a.fB.i1(a.bi.d(c),(a.P-c|0)-1|0);a.eM.i1(a.bi.d((a.P-c|0)-1|0),(a.P-c|0)-1|0);c=c+1|0;}}
function TJ(a,b,c){return !a.fO(c,b)?(-1):a.P;}
function QV(a,b,c,d){var e,f;e=d.q();while(true){if(b>e)return (-1);f=a.jp(c,b,e);if(f<0)return (-1);if(a.e.b(f+a.P|0,c,d)>=0)break;b=f+1|0;}return f;}
function Wl(a,b,c,d,e){var f;while(true){if(c<b)return (-1);f=a.jA(d,b,c);if(f<0)return (-1);if(a.e.b(f+a.P|0,d,e)>=0)break;c=f+(-1)|0;}return f;}
function XD(a,b){var c,d,e,f,g;if(b instanceof B1)return b.cf()!=a.bi.d(0)?0:1;if(b instanceof B3)return b.H(0,a.bi.ce(0,1))<=0?0:1;if(!(b instanceof BJ)){if(!(b instanceof B0))return 1;a:{if(a.bi.g()>1){c=b;d=c.ge();e=a.bi.d(0);c=a.bi;f=c.d(1);if(d==BS(e,f)){e=1;break a;}}e=0;}return e;}b:{c:{c=b;if(!c.j(a.bi.d(0))){g=a.bi;if(g.g()<=1)break c;g=a.bi;e=BS(g.d(0),a.bi.d(1));if(!c.j(e))break c;}e=1;break b;}e=0;}return e;}
function W5(a,b,c,d){var e,f;e=a.bi.d(a.P-1|0);while(true){if(c>(d-a.P|0))return (-1);f=b.d((c+a.P|0)-1|0);if(f==e&&a.fO(b,c))break;c=c+a.fB.fC(f)|0;}return c;}
function Vy(a,b,c,d){var e,f,g,h;e=a.bi.d(0);f=b.g();g=(f-d|0)-a.P|0;if(g<=0)d=d+g|0;while(true){if(d<c)return (-1);h=b.d(d);if(h==e&&a.fO(b,d))break;d=d-a.eM.fC(h)|0;}return d;}
function XX(a,b,c){var d;d=0;while(d<a.P){if(b.d(d+c|0)!=a.bi.d(d))return 0;d=d+1|0;}return 1;}
function Lh(){R.call(this);}
function ACN(){var a=new Lh();YC(a);return a;}
function YC(a){Bn(a);}
function Qm(a,b,c,d){var e;e=!d.c_()?d.q():c.g();if(b<e)return (-1);d.by=1;d.kM=1;return a.e.b(b,c,d);}
function Nn(a,b){return 0;}
function Lj(){T.call(this);}
function J$(){var a=new Lj();Vv(a);return a;}
function Vv(a){BA(a);}
function CM(){Bv.call(this);}
function ADt(a,b,c){var d=new CM();Eu(d,a,b,c);return d;}
function Eu(a,b,c,d){Cz(a,b,c,d);}
function UZ(a,b,c,d){var e;if(!a.w.x(d))return a.e.b(b,c,d);e=a.w.b(b,c,d);if(e>=0)return e;return a.e.b(b,c,d);}
function XG(a,b){FK(a,b);a.w.s(b);}
function J1(){K.call(this);}
function AAT(){var a=new J1();Y2(a);return a;}
function Y2(a){Q(a);}
function VU(a){return Bx().I(65,90);}
function DH(){var a=this;CC.call(a);a.f4=0;a.e8=null;a.lQ=null;}
function AE6(a,b,c,d,e){var f=new DH();HQ(f,a,b,c,d,e);return f;}
function HQ(a,b,c,d,e,f){Fy(a,c);YQ();a.lQ=AEB;a.f4=b;a.e8=d;a.K=e;a.bH=f;}
function Mf(b,c,d){return ACC(0,b.data.length,b,c,c+d|0,0,0);}
function Uw(b){return Mf(b,0,b.data.length);}
function Th(a,b,c,d){var e,f,g,h,i,j;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Bo(J().a(B(236)).n(g).a(B(237)).n(f).f()));if(W(a)<d)G(Yd());if(d<0)G(Bo(J().a(B(238)).n(d).a(B(239)).f()));h=a.K+a.f4|0;i=0;while(i<d){g=c+1|0;j=a.e8.data;f=h+1|0;e[c]=j[h];i=i+1|0;c=g;h=f;}a.K=a.K+d|0;return a;}}e=b.data;G(Bo(J().a(B(240)).n(c).a(B(19)).n(e.length).a(B(241)).f()));}
function Xz(a,b,c,d){var e,f,g,h,i,j;if(!d)return a;if(a.dI())G(Gu());if(W(a)<d)G(I5());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Bo(J().a(B(242)).n(g).a(B(237)).n(f).f()));if(d<0)G(Bo(J().a(B(238)).n(d).a(B(239)).f()));h=a.K+a.f4|0;i=0;while(i<d){j=a.e8.data;g=h+1|0;f=c+1|0;j[h]=e[c];i=i+1|0;h=g;c=f;}a.K=a.K+d|0;return a;}}e=b.data;G(Bo(J().a(B(240)).n(c).a(B(19)).n(e.length).a(B(241)).f()));}
function KS(a,b){return a.hV(b,0,b.data.length);}
function EW(a){IV(a);return a;}
function Vz(a,b){FF(a,b);return a;}
function Lw(){var a=this;DH.call(a);a.jl=0;a.gK=0;}
function ACC(a,b,c,d,e,f,g){var h=new Lw();OQ(h,a,b,c,d,e,f,g);return h;}
function OQ(a,b,c,d,e,f,g,h){HQ(a,b,c,d,e,f);a.jl=g;a.gK=h;}
function W8(a){return a.gK;}
function DW(){}
function Fl(){var a=this;C.call(a);a.bs=null;a.dm=null;a.ga=null;a.gj=null;a.hF=0;a.ev=0;a.fk=0;a.i_=0;a.bA=0;a.ji=0;a.jh=0;a.by=0;a.kM=0;a.cI=0;a.fs=0;}
function AE7(a,b,c,d,e,f){var g=new Fl();Hw(g,a,b,c,d,e,f);return g;}
function Hw(a,b,c,d,e,f,g){var h;L(a);a.cI=(-1);h=e+1|0;a.hF=h;a.bs=$rt_createIntArray(h*2|0);a.dm=$rt_createIntArray(g);DC(a.dm,(-1));if(f>0)a.ga=$rt_createIntArray(f);DC(a.bs,(-1));a.h8(b,c,d);}
function Xk(a,b,c){a.dm.data[b]=c;}
function AAF(a,b){return a.dm.data[b];}
function NN(a){return a.f7(0);}
function ZT(a,b){F$(a,b);return a.bs.data[(b*2|0)+1|0];}
function S9(a,b,c){a.bs.data[b*2|0]=c;}
function QX(a,b,c){a.bs.data[(b*2|0)+1|0]=c;}
function Sc(a,b){return a.bs.data[b*2|0];}
function Sv(a,b){return a.bs.data[(b*2|0)+1|0];}
function Zt(a,b){var c,d;c=a.cA(b);d=a.eA(b);if((d|c|(d-c|0))>=0&&d<=a.gj.g())return a.gj.fp(c,d).f();return null;}
function Sg(a){return a.eZ(0);}
function SC(a,b){F$(a,b);return a.bs.data[b*2|0];}
function NL(a){if(a.bs.data[0]==(-1)){a.bs.data[0]=a.bA;a.bs.data[1]=a.bA;}a.cI=a.eb();}
function On(a,b){return a.ga.data[b];}
function So(a,b,c){a.ga.data[b]=c;}
function F$(a,b){if(!a.ev)G(C0());if(b>=0&&b<a.hF)return;G(Bo(EL(b)));}
function XO(a){a.ev=1;}
function XQ(a){return a.ev;}
function Y_(a,b,c,d){a.ev=0;a.fs=2;DC(a.bs,(-1));DC(a.dm,(-1));if(b!==null)a.gj=b;if(c>=0)Lr(a,c,d);a.bA=a.fk;}
function Tu(a){a.h8(null,(-1),(-1));}
function Lr(a,b,c){a.fk=b;a.i_=c;}
function TP(a,b){a.bA=b;if(a.cI>=0)b=a.cI;a.cI=b;}
function RG(a){return a.fk;}
function NJ(a){return a.i_;}
function Ul(a,b){a.fs=b;}
function Wb(a){return a.fs;}
function XA(a){return a.jh;}
function Om(a){return a.ji;}
function PW(a){return a.cI;}
function IX(){var a=this;Y.call(a);a.iG=null;a.lf=0;}
function Xp(a){var b=new IX();PN(b,a);return b;}
function PN(a,b){BH(a);a.iG=b.c3();a.lf=b.G;}
function Zz(a,b,c){var d,e;d=a.iG;e=Bz(c.d(b));return !d.j(BI(e))?(-1):1;}
function GD(){var a=this;C.call(a);a.g7=0;a.hZ=Long_ZERO;a.gY=0.0;}
function ACw(a,b){var c=new GD();Pi(c,a,b);return c;}
function OG(b,c){var d,e,$$je;a:{try{d=U9(b,EC(c));}catch($$e){$$je=Bd($$e);if($$je instanceof BY){e=$$je;break a;}else{throw $$e;}}return d;}Ci().o(B(243));e.eu();return null;}
function U9(b,c){var d,e,f,g,h,i,$$je;d=BX();e=Ej(c);a:{while(true){try{f=e.ek();if(f===null)break a;g=B8(f,32);if(!f.ej(B(228))&&g.U()>=2){h=g.E(0).c2();if(h.g()==1&&b.fJ(h)){i=FU(g.E(1));d.bo(ACw(h.d(0),i));}}continue;}catch($$e){$$je=Bd($$e);f=$$je;}}e.bG();G(f);}e.bG();Wp(d);return d;}
function Wp(b){var c,d,e;c=Long_ZERO;d=b.Y();while(d.Z()){e=d.W();c=Long_add(c,e.dl());}d=b.Y();while(d.Z()){e=d.W();e.gY=Long_toNumber(e.dl())/Long_toNumber(c);}}
function JO(b,c){var d,e;d=c.Y();while(true){if(!d.Z())return null;e=d.W();if(b==e.cf())break;}return e;}
function Pi(a,b,c){L(a);a.g7=b;a.hZ=c;}
function O0(a){return a.g7;}
function OH(a){return a.hZ;}
function OI(a){return a.gY;}
function GF(){I.call(this);this.je=null;}
function ABm(a){var b=new GF();Zf(b,a);return b;}
function Zf(a,b){a.je=b;P(a);}
function ZD(a,b){return ME(b);}
function H$(){C.call(this);this.dX=null;}
function IW(a){var b=new H$();QD(b,a);return b;}
function Pk(b){var c,d,e,f,g;B2();c=AE8.data;d=c.length;e=0;while(e<d){f=c[e];if(b.jS(f.bV())){f.eJ(1);g=IW(f);g.fl();return f;}e=e+1|0;}return null;}
function ZH(){var b,c,d,e,f;B2();b=AE9.data;c=b.length;d=0;while(d<c){e=b[d];e.eJ(1);f=IW(e);f.fl();d=d+1|0;}}
function Wt(){var b,c,d,e,f;B2();b=AE$.data;c=b.length;d=0;while(d<c){e=b[d];e.eJ(1);f=IW(e);f.fl();d=d+1|0;}}
function QD(a,b){L(a);a.dX=b;}
function W0(a){var b,c,d;b=new XMLHttpRequest();c=CS(AA9(a,b),"stateChanged");b.onreadystatechange=c;d=J().a(B(244)).a(a.dX.hq()).f();b.open("GET",$rt_ustr(d));b.send();}
function Ke(a,b){a.dX.lL(b);E3().o(J().a(B(245)).a(a.dX.hq()).f());V5();}
function V5(){var b,c,d,e,f,g,h,i,j;b=0;c=0;B2();d=AE8.data;e=d.length;f=0;while(f<e){g=d[f];if(g.eY())c=c+1|0;if(g.bN()!==null)b=b+1|0;f=f+1|0;}d=AE9.data;f=d.length;h=0;while(h<f){i=d[h];if(i.eY())c=c+1|0;if(i.bN()!==null)b=b+1|0;h=h+1|0;}d=AE$.data;e=d.length;f=0;while(f<e){j=d[f];if(j.eY())c=c+1|0;if(j.bN()!==null)b=b+1|0;f=f+1|0;}if(!c)c=1;if(b>=c){BQ(null);LR(1);}else BQ(J().a(B(246)).n((100*b|0)/c|0).a(B(247)).f());}
function QR(b,c){Ke(b,c);}
function IT(){C.call(this);}
function Ob(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function Py(b,c){return b!==null&&!(typeof b.constructor.$meta==='undefined'?1:0)&&HT(b.constructor,c)?1:0;}
function HT(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(HT(d[e],c))return 1;e=e+1|0;}return 0;}
function PH(b){var c='$$enumConstants$$';B4[c]=WB;B$[c]=RE;PH=function(cls){if(!cls.hasOwnProperty(c)){return null;}if(typeof cls[c]==="function"){cls[c]=cls[c]();}return cls[c];};return PH(b);}
function JY(b){return V0(String.fromCharCode(b));}
function UT(b){return b.$meta.primitive?1:0;}
function Sw(b){return b.$meta.enum?1:0;}
function YS(b){return b.$meta.item;}
function UJ(b){return $rt_str(b.$meta.name);}
function Ds(){var a=this;C.call(a);a.jj=null;a.k5=null;}
function AE_(a,b){var c=new Ds();Jd(c,a,b);return c;}
function Jd(a,b,c){var d,e,f,g;d=c.data;L(a);Fm(b);e=d.length;f=0;while(f<e){g=d[f];Fm(g);f=f+1|0;}a.jj=b;a.k5=c.dC();}
function Fm(b){var c,d;if(b.Q())G(KO(b));if(!JD(b.d(0)))G(KO(b));c=1;while(c<b.g()){a:{d=b.d(c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(JD(d))break a;else G(KO(b));}}c=c+1|0;}}
function JD(b){return !(b>=48&&b<=57)&&!(b>=97&&b<=122)&&b<65&&b>90?0:1;}
function Ox(b){var c;if(b===null)G(By(B(248)));Fm(b);c=Gm().gh(b.c2());if(c!==null)return c;G(AC8(b));}
function GW(a,b){var c,d,e,$$je;a:{try{c=a.j_();B7();d=AEy;d=K$(c,d);c=AEy;d=HM(d,c);d=I6(d,b);}catch($$e){$$je=Bd($$e);if($$je instanceof Cm){e=$$je;break a;}else{throw $$e;}}return d;}G(ACz(B(249),e));}
function C8(){C.call(this);this.k1=null;}
var AE5=null;var AEy=null;var AEw=null;function B7(){B7=Bc(C8);NY();}
function LL(a){var b=new C8();Jq(b,a);return b;}
function Jq(a,b){B7();L(a);a.k1=b;}
function NY(){AE5=LL(B(250));AEy=LL(B(251));AEw=LL(B(252));}
function Kx(){T.call(this);}
function ACD(){var a=new Kx();Yn(a);return a;}
function Yn(a){BA(a);}
function BO(){T.call(this);}
function Cv(){var a=new BO();C3(a);return a;}
function By(a){var b=new BO();M2(b,a);return b;}
function C3(a){BA(a);}
function M2(a,b){Df(a,b);}
function JQ(){BO.call(this);this.jY=null;}
function KO(a){var b=new JQ();VT(b,a);return b;}
function VT(a,b){C3(a);a.jY=b;}
function Hx(){R.call(this);this.gl=null;}
function ACP(a){var b=new Hx();Sf(b,a);return b;}
function Sf(a,b){Bn(a);a.gl=b;}
function Sp(a,b,c,d){var e,f;a:{if(b!=d.q()){if(!b)break a;if(d.cP()&&b==d.bv())break a;e=a.gl;f=b-1|0;if(e.hb(c.d(f),c.d(b)))break a;}return (-1);}return a.e.b(b,c,d);}
function Wn(a,b){return 0;}
function Gc(){}
function Km(){C.call(this);}
function Dv(){BU.call(this);this.gg=null;}
function AFa(a){var b=new Dv();G8(b,a);return b;}
function G8(a,b){CR(a);a.gg=b;}
function K1(){var a=this;Dv.call(a);a.j$=0;a.f5=0;a.bL=null;a.dh=null;a.ht=null;}
function Pb(a,b){var c=new K1();Li(c,a,b);return c;}
function ADo(a){var b=new K1();Rl(b,a);return b;}
function Li(a,b,c){G8(a,b);a.bL=J();a.dh=$rt_createCharArray(32);a.j$=c;a.ht=XS();}
function Rl(a,b){Li(a,b,0);}
function PJ(a,b,c,d){var $$je;if(!J_(a))return;a:{try{a.gg.dc(b,c,d);break a;}catch($$e){$$je=Bd($$e);if($$je instanceof BY){}else{throw $$e;}}a.f5=1;}}
function J_(a){if(a.gg===null)a.f5=1;return a.f5?0:1;}
function EX(a,b,c,d){var e,f,g,h,i,j,k,l;e=b.data;f=MB(b,c,d-c|0);g=$rt_createByteArray(Bq(16,U(e.length,1024)));h=Uw(g);i=a.ht.kU();B7();j=AEy;i=Gk(i,j);j=AEy;k=LT(i,j);while(true){l=H_(k,f,h,1).c9();a.dc(g,0,BG(h));EW(h);if(!l)break;}while(true){l=GY(k,h).c9();a.dc(g,0,BG(h));EW(h);if(!l)break;}}
function Ug(a,b){a.dh.data[0]=b;EX(a,a.dh,0,1);}
function YD(a,b){a.bL.a(b);Dx(a);}
function Sn(a,b){a.bL.a(b).bx(10);Dx(a);}
function Zn(a,b){a.bL.ib(b).bx(10);Dx(a);}
function SV(a){a.ke(10);}
function Dx(a){var b;b=a.bL.g()<=a.dh.data.length?a.dh:$rt_createCharArray(a.bL.g());a.bL.g0(0,a.bL.g(),b,0);EX(a,b,0,a.bL.g());a.bL.dP(0);}
function FH(){}
function HL(){BT.call(this);}
function ACO(a,b){var c=new HL();OS(c,a,b);return c;}
function OS(a,b,c){Dh(a,b,c);}
function N1(a,b,c,d){var e,f,g,h;e=a.N.U();d.C(a.A,b);f=0;while(true){if(f>=e)return a.e.b(b,c,d);g=a.N.E(f);h=g.bd(0,b,c,d);if(h>=0)break;f=f+1|0;}return (-1);}
function Tz(a,b){return 0;}
function K0(){CD.call(this);}
function AA$(a,b){var c=new K0();Xg(c,a,b);return c;}
function Xg(a,b,c){Fb(a,b,c);}
function S1(a,b,c,d){var e,f;e=a.c1(d);if(e!==null&&(b+e.g()|0)<=d.q()){f=!c.f().ip(e,b)?(-1):e.g();if(f<0)return (-1);d.C(a.cX,f);return a.e.b(b+f|0,c,d);}return (-1);}
function WO(a,b,c,d){var e,f,g,h;e=a.c1(d);f=d.bv();if(e!==null&&(b+e.g()|0)<=f){g=c.f();while(true){if(b>f)return (-1);h=g.gI(e,b);if(h<0)return (-1);if(a.e.b(h+e.g()|0,c,d)>=0)break;b=h+1|0;}return h;}return (-1);}
function O6(a,b,c,d,e){var f,g,h;f=a.c1(e);if(f===null)return (-1);g=d.f();a:{while(true){if(c<b)return (-1);h=g.lC(f,c);if(h<0)break a;if(h<b)break a;if(a.e.b(h+f.g()|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function Or(a,b){return 1;}
function I3(){K.call(this);}
function ADB(){var a=new I3();WS(a);return a;}
function WS(a){Q(a);}
function TY(a){return Bx().I(97,122);}
function Iw(){BM.call(this);this.fE=null;}
function ABD(a,b,c,d){var e=new Iw();RL(e,a,b,c,d);return e;}
function RL(a,b,c,d,e){CZ(a,b,c,d);a.fE=e;}
function Q0(a,b,c,d){var e,f;e=d.q();f=Fg(a,b,e,c);if(f>=0)e=f;if(e>b)return a.e.bd(b,e,c,d);return a.e.b(b,c,d);}
function NR(a,b,c,d){var e,f,g,h,i;e=d.q();f=a.e.bg(b,c,d);if(f<0)return (-1);g=Fg(a,f,e,c);if(g>=0)e=g;h=a.e.bd(f,e,c,d);if(f<h)f=h;i=f>0?K8(a,b,f-1|0,c):f?(-1):0;if(i>=b)b=i>=f?i:i+1|0;return b;}
function Fg(a,b,c,d){while(true){if(b>=c)return (-1);if(a.fE.de(d.d(b)))break;b=b+1|0;}return b;}
function K8(a,b,c,d){while(true){if(c<b)return (-1);if(a.fE.de(d.d(c)))break;c=c+(-1)|0;}return c;}
function JL(){K.call(this);}
function ADh(){var a=new JL();XT(a);return a;}
function XT(a){Q(a);}
function ZU(a){var b;b=ABm(a);b.y=1;return b;}
function KA(){C.call(this);}
function DQ(){C.call(this);}
var AFb=null;var AFc=null;function Mz(){Mz=Bc(DQ);Vg();}
function G_(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;Mz();d=$rt_floatToIntBits(b);c.g8=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.fP=0;c.fq=0;return;}g=0;if(f)h=e|8388608;else{h=e<<1;while(Long_eq(Long_and(Long_fromInt(h),Long_fromInt(8388608)),Long_ZERO)){h=h<<1;f=f+(-1)|0;g=g+1|0;}}i=Pr(AFc,f);if(i<0)i= -i-2|0;j=f-AFc.data[i]|0;k=9+j|0;l=Long_fromInt(h);m=Long_shru(Long_mul(l,Long_fromInt(AFb.data[i])),32-k|0).lo;if(m>=1000000000){i=i+1|0;n=f-AFc.data[i]|0;k=9+n|0;m=Long_shru(Long_mul(l,Long_fromInt(AFb.data[i])),
32-k|0).lo;}n=(31-k|0)-g|0;o=n>=0?AFb.data[i]>>>n:AFb.data[i]<< -n;p=(o+1|0)>>1;q=o>>1;if(h==4194304)q=q>>2;r=Hl(m,q);s=KF(m,p);h=BW(r,s);h=h>0?Ce(m/r|0,r):h<0?Ce(m/s|0,s)+s|0:Ce((m+(s/2|0)|0)/s|0,s);if(h>=1000000000){i=i+1|0;h=h/10|0;}else if(h<100000000){i=i+(-1)|0;h=h*10|0;}c.fP=h;c.fq=i-50|0;}
function Hl(b,c){var d,e;Mz();d=10;while(d<=c){d=d*10|0;}e=b%d|0;if(e>=(c/2|0))d=d/10|0;return d;}
function KF(b,c){var d,e;Mz();d=10;while(d<=c){d=d*10|0;}e=b%d|0;if((d-e|0)>(c/2|0))d=d/10|0;return d;}
function Vg(){var b,c,d,e,f,g,h,i,j,k,l;AFb=$rt_createIntArray(100);AFc=$rt_createIntArray(100);b=2000000000;c=127;d=0;e=b;while(d<50){f=AFb.data;g=d+50|0;f[g]=$rt_udiv(e,20);AFc.data[g]=c;g=$rt_udiv(e,10);h=$rt_umod(g,10);while(g<=b&&!(g&(-2147483648))){g=g<<1;c=c+1|0;h=h<<1;}e=g+(h/10|0)|0;d=d+1|0;}i=214748364;e=127;d=0;while(d<50){j=0;k=b;while(k>i){k=k>>1;j=j+1|0;e=e+(-1)|0;}k=k*10|0;if(j<=0)b=k;else{l=Long_fromInt(b&((1<<j)-1|0));b=Long_add(Long_fromInt(k),Long_shr(Long_mul(l,Long_fromInt(10)),j)).lo;}f
=AFb.data;k=(50-d|0)-1|0;f[k]=$rt_udiv(b,20);AFc.data[k]=e;d=d+1|0;}}
function Lz(){K.call(this);}
function ADb(){var a=new Lz();R9(a);return a;}
function R9(a){Q(a);}
function R3(a){return ADx(a);}
function DG(){C.call(this);}
function AFd(){var a=new DG();J3(a);return a;}
function J3(a){L(a);}
function Is(){R.call(this);}
function ACj(){var a=new Is();Vf(a);return a;}
function Vf(a){Bn(a);}
function YY(a,b,c,d){if(b!=d.lw())return (-1);return a.e.b(b,c,d);}
function AAf(a,b){return 0;}
function KV(){Bw.call(this);}
function ABS(a){var b=new KV();YE(b,a);return b;}
function YE(a,b){Cr(a,b.ef(),b.kd(),b.cK());a.w.s(a);}
function ZA(a,b,c,d){var e;while((b+a.B.ba()|0)<=d.q()){e=a.B;if(e.H(b,c)<=0)break;b=b+a.B.ba()|0;}return a.e.b(b,c,d);}
function Pe(a,b,c,d){var e,f,g;e=a.e.bg(b,c,d);if(e<0)return (-1);f=e-a.B.ba()|0;while(f>=b&&a.B.H(f,c)>0){g=f-a.B.ba()|0;e=f;f=g;}return e;}
function EH(){}
function KW(){var a=this;C.call(a);a.fv=null;a.bU=null;}
function ABQ(a){var b=new KW();Vi(b,a);return b;}
function Vi(a,b){var c;L(a);a.bU=b;c=a;b.classObject=c;}
function HO(b){var c;if(b===null)return null;c=b.classObject;if(c===null)c=ABQ(b);return c;}
function QO(a){return a.bU;}
function Uf(a,b){return Py(b,a.bU);}
function ZN(a){if(a.fv===null)a.fv=UJ(a.bU);return a.fv;}
function WT(a){return UT(a.bU);}
function Q_(a){return Sw(a.bU);}
function NW(a){return HO(YS(a.bU));}
function St(a){if(!a.kI())return null;a.bU.$clinit();return PH(a.bU).dC();}
function LA(){var a=this;C.call(a);a.p=null;a.z=0;}
function AAz(){var a=new LA();R4(a);return a;}
function ABV(a){var b=new LA();OA(b,a);return b;}
function R4(a){L(a);a.p=$rt_createIntArray(0);}
function OA(a,b){L(a);a.p=$rt_createIntArray(((b+32|0)-1|0)/32|0);}
function Sk(a,b){var c,d;c=b/32|0;if(b>=a.z){C2(a,c+1|0);a.z=b+1|0;}d=a.p.data;d[c]=d[c]|1<<(b%32|0);}
function XF(a,b,c){var d,e,f,g;if(b>c)G(Cq());d=b/32|0;e=c/32|0;if(c>a.z){C2(a,e+1|0);a.z=c;}if(d==e){f=a.p.data;f[d]=f[d]|C9(a,b)&CU(a,c);}else{f=a.p.data;f[d]=f[d]|C9(a,b);g=d+1|0;while(g<e){a.p.data[g]=(-1);g=g+1|0;}f=a.p.data;f[e]=f[e]|CU(a,c);}}
function C9(a,b){var c;c=b%32|0;return (-1)<<c;}
function CU(a,b){var c;c=b%32|0;return !c?0:(-1)>>>(32-c|0);}
function AAx(a,b){var c,d;c=b/32|0;if(c<a.p.data.length){d=a.p.data;d[c]=d[c]&KH((-2),b%32|0);if(b==(a.z-1|0))CH(a);}}
function OZ(a,b,c){var d,e,f,g,h;if(b>c)G(Cq());if(b>=a.z)return;d=U(a.z,c);e=b/32|0;f=d/32|0;if(e==f){g=a.p.data;g[e]=g[e]&(CU(a,b)|C9(a,d));}else{g=a.p.data;g[e]=g[e]&CU(a,b);h=e+1|0;while(h<f){a.p.data[h]=0;h=h+1|0;}g=a.p.data;g[f]=g[f]&C9(a,d);}CH(a);}
function O8(a,b){var c;c=b/32|0;return c<a.p.data.length&&a.p.data[c]&1<<(b%32|0)?1:0;}
function Zv(a,b){var c,d,e,f,g;if(b>=a.z)return (-1);c=b/32|0;d=a.p.data[c];e=d>>>(b%32|0);if(e)return CY(e)+b|0;f=(a.z+31|0)/32|0;g=c+1|0;while(g<f){if(a.p.data[g])return (g*32|0)+CY(a.p.data[g])|0;g=g+1|0;}return (-1);}
function RI(a,b){var c,d,e,f,g;if(b>=a.z)return b;c=b/32|0;d=a.p.data[c]^(-1);e=d>>>(b%32|0);if(e)return CY(e)+b|0;f=(a.z+31|0)/32|0;g=c+1|0;while(g<f){if(a.p.data[g]!=(-1))return (g*32|0)+CY(a.p.data[g]^(-1))|0;g=g+1|0;}return a.z;}
function C2(a,b){var c;if(a.p.data.length>=b)return;c=Bq((b*3|0)/2|0,(a.p.data.length*2|0)+1|0);a.p=Zi(a.p,c);}
function CH(a){var b,c,d;b=(a.z+31|0)/32|0;a.z=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=EP(a.p.data[c]);if(d<32)break;c=c+(-1)|0;a.z=a.z-32|0;}a.z=a.z-d|0;}}
function QN(a,b){var c,d;c=U(a.p.data.length,b.p.data.length);d=0;while(d<c){if(a.p.data[d]&b.p.data[d])return 1;d=d+1|0;}return 0;}
function X3(a,b){var c,d,e;c=U(a.p.data.length,b.p.data.length);d=0;while(d<c){e=a.p.data;e[d]=e[d]&b.p.data[d];d=d+1|0;}while(c<a.p.data.length){a.p.data[c]=0;c=c+1|0;}a.z=U(a.z,b.z);CH(a);}
function ZP(a,b){var c,d,e;c=U(a.p.data.length,b.p.data.length);d=0;while(d<c){e=a.p.data;e[d]=e[d]&(b.p.data[d]^(-1));d=d+1|0;}CH(a);}
function XP(a,b){var c,d,e;a.z=Bq(a.z,b.z);C2(a,(a.z+31|0)/32|0);c=U(a.p.data.length,b.z);d=0;while(d<c){e=a.p.data;e[d]=e[d]|b.p.data[d];d=d+1|0;}}
function Z0(a,b){var c,d,e;a.z=Bq(a.z,b.z);C2(a,(a.z+31|0)/32|0);c=U(a.p.data.length,b.z);d=0;while(d<c){e=a.p.data;e[d]=e[d]^b.p.data[d];d=d+1|0;}CH(a);}
function X$(a){return a.z?0:1;}
function F5(){}
function GL(){I.call(this);this.jZ=null;}
function ACd(a){var b=new GL();AAd(b,a);return b;}
function AAd(a,b){a.jZ=b;P(a);}
function TX(a,b){return Mh(b);}
function F_(){Bs.call(this);}
function AFe(a){var b=new F_();G7(b,a);return b;}
function G7(a,b){Cl(a,b);}
function O2(a,b,c,d){var e;e=a.c6();d.C(e,b-d.bD(e)|0);return a.e.b(b,c,d);}
function T1(a,b){return 0;}
function Bf(){C.call(this);}
var AFf=null;var AFg=null;var AFh=null;var AFi=null;var AFj=null;var AFk=null;var AFl=null;var AFm=null;var AFn=null;var AFo=null;var AFp=null;var AFq=null;var AFr=null;var AFs=null;var AFt=null;var AFu=0;var AFv=null;function Bj(){Bj=Bc(Bf);Wr();}
function PS(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;Bj();c=AFh;d="v1.23";c.innerHTML=d;BQ(B(253));CE(null);e=B(254);f=$rt_str(AFf.location.href);if(f.fJ(B(255))){g=f.e$(f.cu(63)+1|0);h=g.i2(B(256));i=h.data;j=i.length;k=0;while(k<j){l=i[k];m=l.i2(B(257));n=m.data;if(B(258).bO(n[0]))e=n[1];k=k+1|0;}}E3().o(J().a(B(259)).a(e).f());AFv=Pk(e);if(AFv!==null)E3().o(J().a(B(259)).a(AFv.bV()).f());ZH();Wt();o=AFg.getElementById("layoutOptionCustom");AFi.options.remove(0);B2();i=AE9.data;j=i.length;k=0;while(k<
j){p=i[k];q=o.cloneNode(!!1);c=$rt_ustr(p.bV());q.text=c;AFi.options.add(q);k=k+1|0;}AFi.options.add(o);c=AFi;r=ABO();c.addEventListener("change",CS(r,"handleEvent"));s=AFg.getElementById("configOptionCustom");AFj.options.remove(0);i=AE$.data;j=i.length;k=0;while(k<j){t=i[k];u=s.cloneNode(!!1);c=$rt_ustr(t.bV());u.text=c;c=$rt_ustr(t.i6());u.title=c;AFj.options.add(u);k=k+1|0;}AFj.options.add(s);c=AFj;r=ADz();c.addEventListener("change",CS(r,"handleEvent"));c=AFo;r=AAJ();c.addEventListener("click",CS(r,"handleEvent"));c
=AFq;r=ADu();c.addEventListener("click",CS(r,"handleEvent"));}
function Fq(){var b,c,d,e;Bj();b=OM();b.iQ($rt_str(AFk.value),B(21));c=XI();c.g2(b,$rt_str(AFl.value));d=NM(b,null);if(AFr.firstChild!==null)Md(AFr);e=d.jc(AFg,0);if(e===null)AFr.setAttribute("style","display:none");else{AFr.appendChild(e);AFr.setAttribute("style","display:block");}}
function LR(b){var c,d,e,f;Bj();AFu=b;if(AFu){c=AFi;d=0;c.selectedIndex=d;B2();e=AE9.data[0];Ge(e.bN());c=AFj;d=2;c.selectedIndex=d;f=AE$.data[2];Eg(f.bN());Fq();}}
function LD(){var b,c,d,e,f,g,h,i,j,$$je;Bj();b=OM();b.iQ($rt_str(AFk.value),B(21));c=XI();c.g2(b,$rt_str(AFl.value));if(AFv!==null&&AFv.bN().g()){d=OG(b.d8(),AFv.bN());e=Pm(b.d8(),AFv.bN());f=AA6();g=f.jV(b,d,e);h=NM(b,g.lj());CE(h.jc(AFg,1));a:{try{i=ADM(5);j=i.lg(g);BQ(j);break a;}catch($$e){$$je=Bd($$e);if($$je instanceof BY){}else{throw $$e;}}BQ(B(260));}return;}BQ(B(261));}
function Ge(b){var c,d;Bj();if(AFk.firstChild!==null){c=AFk;d=AFk.firstChild;c.removeChild(d);}d=AFk;c=AFg.createTextNode($rt_ustr(b));d.appendChild(c);c=AFk;d=$rt_ustr(b);c.value=d;}
function Eg(b){var c,d;Bj();if(AFl.firstChild!==null){c=AFl;d=AFl.firstChild;c.removeChild(d);}d=AFl;c=AFg.createTextNode($rt_ustr(b));d.appendChild(c);c=AFl;d=$rt_ustr(b);c.value=d;}
function CE(b){Bj();if(AFs.firstChild!==null)Md(AFs);if(b===null)AFs.setAttribute("style","display:none");else{AFs.appendChild(b);AFs.setAttribute("style","display:block");}}
function BQ(b){var c,d;Bj();if(AFt.firstChild!==null){c=AFt;d=AFt.firstChild;c.removeChild(d);}if(b!==null){c=AFt;d=$rt_ustr(b);c.innerHTML=d;}else{c=AFv===null?B(262):J().a(B(263)).a(AFv.i6()).f();d=AFt;c=$rt_ustr(J().a(c).a(B(264)).f());d.innerHTML=c;}}
function Ev(){Bj();return AFi;}
function DI(){Bj();Fq();}
function Eq(){Bj();return AFj;}
function Ew(){Bj();return AFk;}
function E1(){Bj();return AFm;}
function E2(){Bj();return AFl;}
function Ep(){Bj();return AFn;}
function IU(){Bj();return AFp;}
function M3(){Bj();return AFu;}
function G5(){Bj();LD();}
function Wr(){AFf=window;AFg=Zk();AFh=AFg.getElementById("version-text");AFi=AFg.getElementById("layout-select");AFj=AFg.getElementById("config-select");AFk=AFg.getElementById("layout-input");AFl=AFg.getElementById("config-input");AFm=AFg.getElementById("modal-layout-input");AFn=AFg.getElementById("modal-config-input");AFo=AFg.getElementById("save-input-button");AFp=AFg.getElementById("close-input-button");AFq=AFg.getElementById("analyze-button");AFr=AFg.getElementById("keyboard-panel-fingers");AFs=AFg.getElementById("keyboard-panel-heatmap");AFt
=AFg.getElementById("output-panel");AFu=0;}
function D4(){BN.call(this);}
var AFw=0.0;var AFx=null;function AFy(){AFy=Bc(D4);Rq();}
function Rq(){AFw=NaN;AFx=D($rt_floatcls());}
function H5(){C.call(this);}
function EM(b,c){var d,e,f,g;d=b.data;e=$rt_createCharArray(c);f=U(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function FQ(b,c){var d,e,f,g;d=b.data;e=$rt_createByteArray(c);f=U(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function Zi(b,c){var d,e,f,g;d=b.data;e=$rt_createIntArray(c);f=U(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function L8(b,c){var d,e,f,g;d=b.data;e=I4(Cf(b).eB(),c);f=U(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function Ve(b,c,d,e){var f,g;if(c>d)G(Cv());while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function DC(b,c){Ve(b,0,b.data.length,c);}
function UQ(b,c,d,e){var f,g;if(c>d)G(Cv());while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function R_(b,c){UQ(b,0,b.data.length,c);}
function Pr(b,c){return QQ(b,0,b.data.length,c);}
function QQ(b,c,d,e){var f,g,h,i;if(c>d)G(Cv());f=d-1|0;while(true){g=b.data;h=(c+f|0)/2|0;i=g[h];if(i==e)break;if(e>=i){c=h+1|0;if(c>f)return  -h-2|0;}else{f=h-1|0;if(f<c)return  -h-1|0;}}return h;}
function B1(){Y.call(this);this.b9=0;}
function JU(a){var b=new B1();R2(b,a);return b;}
function R2(a,b){BH(a);a.b9=b;}
function Y$(a){return 1;}
function Xj(a,b,c){return a.b9!=c.d(b)?(-1):1;}
function UK(a,b,c,d){var e,f,g,h;if(!(c instanceof Bh))return C7(a,b,c,d);e=c;f=d.q();while(true){if(b>=f)return (-1);g=e.cB(a.b9,b);if(g<0)return (-1);h=a.e;b=g+1|0;if(h.b(b,c,d)>=0)break;}return g;}
function Zl(a,b,c,d,e){var f,g;if(!(d instanceof Bh))return Db(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);g=f.er(a.b9,c);if(g<0)break a;if(g<b)break a;if(a.e.b(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function Q$(a){return a.b9;}
function Wc(a,b){if(b instanceof B1)return b.cf()!=a.b9?0:1;if(!(b instanceof B3)){if(b instanceof BJ)return b.j(a.b9);if(!(b instanceof B0))return 1;return 0;}return b.H(0,FV(a.b9))<=0?0:1;}
function Gz(){Y.call(this);this.iS=0;}
function ABo(a){var b=new Gz();U$(b,a);return b;}
function U$(a,b){BH(a);a.P=2;a.iS=Co(Cn(b));}
function Ui(a,b,c){var d,e,f;d=b+1|0;e=c.d(b);f=c.d(d);return a.iS!=Co(Cn(BS(e,f)))?(-1):2;}
function Mg(){BU.call(this);}
function AC2(){var a=new Mg();OB(a);return a;}
function OB(a){CR(a);}
function N5(a,b){$rt_putStdout(b);}
function DD(){C.call(this);}
var AFz=null;var AFA=null;function E3(){if(AFz===null)AFz=Pb(AC2(),0);return AFz;}
function Ci(){if(AFA===null)AFA=Pb(ACM(),0);return AFA;}
function Gp(b,c,d,e,f){var g,h,i,j,k,l,m,n;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=IY(b)){g=e+f|0;if(g<=IY(d)){a:{b:{if(b!==d){h=Cf(b).eB();i=Cf(d).eB();if(h!==null&&i!==null){if(h===i)break b;if(!h.ep()&&!i.ep()){j=b;k=0;g=c;while(k<f){l=j.data;m=g+1|0;n=l[g];if(!i.jP(n)){F9(b,c,d,e,k);G(J$());}k=k+1|0;g=m;}F9(b,c,d,e,f);return;}if(!h.ep())break a;if(i.ep())break b;else break a;}G(J$());}}F9(b,c,d,e,f);return;}G(J$());}}G(Cq());}G(SM(B(265)));}
function F9(b,c,d,e,f){if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}} else {c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function IG(){var a=this;I.call(a);a.eG=0;a.hA=null;a.fR=null;}
function AAL(a,b,c){var d=new IG();Y7(d,a,b,c);return d;}
function Y7(a,b,c,d){a.fR=b;a.eG=c;a.hA=d;P(a);}
function Uh(a,b){return !(a.eG^a.fR.v.bJ(b))&&!(a.eG^a.fR.bI^a.hA.j(b))?0:1;}
function IN(){var a=this;I.call(a);a.i9=0;a.iW=null;a.it=null;a.lB=null;}
function ADR(a,b,c,d){var e=new IN();VO(e,a,b,c,d);return e;}
function VO(a,b,c,d,e){a.lB=b;a.i9=c;a.iW=d;a.it=e;P(a);}
function Ne(a,b){return a.i9^(!a.iW.j(b)&&!a.it.j(b)?0:1)?0:1;}
function II(){var a=this;I.call(a);a.i3=null;a.jn=null;}
function ACy(a,b){var c=new II();NF(c,a,b);return c;}
function NF(a,b,c){a.jn=b;a.i3=c;P(a);}
function Tj(a,b){return a.i3.j(b);}
function IH(){var a=this;I.call(a);a.eS=0;a.h4=null;a.e5=null;}
function AB_(a,b,c){var d=new IH();N0(d,a,b,c);return d;}
function N0(a,b,c,d){a.e5=b;a.eS=c;a.h4=d;P(a);}
function NC(a,b){return !(a.eS^a.e5.v.bJ(b))&&!(a.eS^a.e5.bI^a.h4.j(b))?1:0;}
function JB(){var a=this;K.call(a);a.iL=0;a.jd=0;}
function H(a,b){var c=new JB();Yi(c,a,b);return c;}
function Yi(a,b,c){Q(a);a.iL=b;a.jd=c;}
function AAD(a){var b;b=Bx().I(a.iL,a.jd);return b;}
function IJ(){var a=this;I.call(a);a.ih=null;a.lJ=null;}
function ACu(a,b){var c=new IJ();NU(c,a,b);return c;}
function NU(a,b,c){a.lJ=b;a.ih=c;P(a);}
function WU(a,b){return a.ih.j(b);}
function Jt(){K.call(this);}
function ABq(){var a=new Jt();Rs(a);return a;}
function Rs(a){Q(a);}
function Yz(a){return Bx().I(48,57).I(97,102).I(65,70);}
function IQ(){var a=this;I.call(a);a.gT=null;a.g3=0;a.gJ=null;}
function AA5(a,b,c){var d=new IQ();TN(d,a,b,c);return d;}
function TN(a,b,c,d){a.gJ=b;a.gT=c;a.g3=d;P(a);}
function S7(a,b){return !a.gT.j(b)&&!(a.g3^a.gJ.v.bJ(b))?1:0;}
function IM(){var a=this;I.call(a);a.iE=0;a.h9=null;a.h1=null;a.kj=null;}
function ACY(a,b,c,d){var e=new IM();OC(e,a,b,c,d);return e;}
function OC(a,b,c,d,e){a.kj=b;a.iE=c;a.h9=d;a.h1=e;P(a);}
function Uj(a,b){return a.iE^(!a.h9.j(b)&&!a.h1.j(b)?0:1);}
function IL(){var a=this;I.call(a);a.ie=null;a.kF=null;}
function AC9(a,b){var c=new IL();NX(c,a,b);return c;}
function NX(a,b,c){a.kF=b;a.ie=c;P(a);}
function NE(a,b){return a.ie.j(b)?0:1;}
function I$(){V.call(this);this.gd=null;}
function ABZ(a){var b=new I$();SF(b,a);return b;}
function SF(a,b){BC(a);a.gd=b;}
function P$(a,b,c,d){var e,f,g,h,i;e=d.q();f=b+1|0;if(f>e){d.by=1;return (-1);}g=c.d(b);if(Bl(g)){h=b+2|0;if(h<=e){i=c.d(f);if(CT(g,i))return a.gd.de(BS(g,i))?(-1):a.e.b(h,c,d);}}return a.gd.de(g)?(-1):a.e.b(f,c,d);}
function TS(a,b){a.e=b;}
function Nc(a){return (-2147483602);}
function ZL(a,b){return 1;}
function IO(){var a=this;I.call(a);a.gt=null;a.i0=0;a.hu=null;}
function ABB(a,b,c){var d=new IO();WG(d,a,b,c);return d;}
function WG(a,b,c,d){a.hu=b;a.gt=c;a.i0=d;P(a);}
function WY(a,b){return !a.gt.j(b)&&!(a.i0^a.hu.v.bJ(b))?0:1;}
function Gq(){var a=this;C.call(a);a.kr=null;a.h6=null;a.dv=null;a.S=null;a.ea=0;a.ec=0;}
function ACG(a,b){var c=new Gq();Np(c,a,b);return c;}
function Es(a,b){var c,d;c=a.dv.g();if(b>=0&&b<=c){d=Jv(a,b);if(d>=0&&a.S.jv()){a.S.kG();return 1;}a.S.bA=(-1);return 0;}G(Bo(EL(b)));}
function Jv(a,b){var c;a.S.kn();a.S.d5(1);a.S.kz(b);c=a.h6.bg(b,a.dv,a.S);if(c==(-1))a.S.by=1;return c;}
function K6(a){var b,c;b=a.dv.g();if(!HE(a))b=a.ec;if(a.S.bA>=0&&a.S.ig()==1){a.S.bA=a.S.eb();if(a.S.eb()==a.S.hC()){c=a.S;c.bA=c.bA+1|0;}return a.S.bA<=b&&Es(a,a.S.bA)?1:0;}return Es(a,a.ea);}
function MV(a,b){return a.S.eZ(b);}
function Hh(a,b){return a.S.f7(b);}
function Me(a){return MV(a,0);}
function Ki(a){return Hh(a,0);}
function HE(a){return a.S.c_();}
function Np(a,b,c){var d,e,f,g,h;L(a);a.ea=(-1);a.ec=(-1);a.kr=b;a.h6=b.eI;a.dv=c;a.ea=0;a.ec=a.dv.g();d=new Fl;e=a.ea;f=a.ec;g=G9(b);h=K3(b);Hw(d,c,e,f,g,h,If(b));a.S=d;}
function BZ(){C.call(this);}
var AFB=null;var AFC=null;var AFD=null;var AFE=null;var AFF=null;var AFG=null;function N(){N=Bc(BZ);Px();}
function FV(b){var c,d;N();c=new Bh;d=$rt_createCharArray(1);d.data[0]=b;Dr(c,d);return c;}
function G1(b){N();return b>0&&b<=65535?1:0;}
function DZ(b){N();return b>=65536&&b<=1114111?1:0;}
function Bl(b){N();return (b&64512)!=55296?0:1;}
function Bt(b){N();return (b&64512)!=56320?0:1;}
function D3(b){N();return !Bl(b)&&!Bt(b)?0:1;}
function CT(b,c){N();return Bl(b)&&Bt(c)?1:0;}
function BS(b,c){N();return ((b&1023)<<10|c&1023)+65536|0;}
function Iv(b,c){N();return IP(b,c,b.data.length);}
function IP(b,c,d){var e,f;N();if(c<(d-1|0)){e=b.data;if(Bl(e[c])){f=c+1|0;if(Bt(e[f]))return BS(e[c],e[f]);}}return b.data[c];}
function CQ(b){var c;N();c=b-65536|0;return (55296|c>>10&1023)&65535;}
function CF(b){N();return (56320|b&1023)&65535;}
function BI(b){N();return Co(b)&65535;}
function Co(b){N();return JY(b).toLowerCase().charCodeAt(0);}
function Bz(b){N();return Cn(b)&65535;}
function Cn(b){N();return JY(b).toUpperCase().charCodeAt(0);}
function E9(b,c){N();return J9(b,c);}
function J9(b,c){var d;N();if(c>=2&&c<=36){d=Fh(b);if(d>=c)d=(-1);return d;}return (-1);}
function Eh(b){N();return Fh(b);}
function Fh(b){var c,d,e,f,g,h,i,j;N();c=GT();d=c.data;e=0;f=(d.length/2|0)-1|0;while(f>=e){g=(e+f|0)/2|0;h=g*2|0;i=d[h];j=BW(b,i);if(j>0)e=g+1|0;else{if(j>=0)return d[h+1|0];f=g-1|0;}}return (-1);}
function D_(b,c){N();if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function MA(b){N();return Bm(b)!=9?0:1;}
function GT(){N();if(AFC===null)AFC=Tm((GG().value!==null?$rt_str(GG().value):null));return AFC;}
function GG(){N();if(AFF===null)AFF=LH();return AFF;}
function LJ(){N();if(AFD===null)AFD=AAy((KB().value!==null?$rt_str(KB().value):null));return AFD;}
function KB(){N();if(AFG===null)AFG=MS();return AFG;}
function CJ(b){var c,d;N();if(b<65536){c=$rt_createCharArray(1);c.data[0]=b&65535;return c;}c=$rt_createCharArray(2);d=c.data;d[0]=CQ(b);d[1]=CF(b);return c;}
function Lg(b){var c;N();a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}c=1;break a;}c=0;}return c;}
function C_(b){N();return Bm(b);}
function Bm(b){var c,d,e,f,g,h;N();if(G1(b)&&D3(b&65535))return 19;c=LJ();d=c.data;e=0;f=d.length-1|0;while(e<=f){g=(e+f|0)/2|0;h=d[g];if(b>=h.gx)e=g+1|0;else{if(b>=h.fI)return h.id.data[b-h.fI|0];f=g-1|0;}}return 0;}
function Iq(b){N();return FP(b);}
function FP(b){N();return Bm(b)!=2?0:1;}
function Gt(b){N();return Bm(b)!=1?0:1;}
function Hc(b){N();return Bm(b)!=3?0:1;}
function MT(b){N();return !Bm(b)?0:1;}
function Lk(b){N();switch(Bm(b)){case 1:case 2:case 3:case 4:case 5:break;default:return 0;}return 1;}
function F2(b){N();return EO(b);}
function EO(b){N();a:{switch(Bm(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function Mh(b){N();a:{switch(Bm(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break a;default:break a;}return 1;}return CI(b);}
function ME(b){N();a:{switch(Bm(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break a;default:break a;}return 1;}return CI(b);}
function Lx(b){N();a:{switch(Bm(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break a;default:break a;}return 1;}return 0;}
function LZ(b){N();a:{switch(Bm(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break a;default:break a;}return 1;}return CI(b);}
function KE(b){N();a:{switch(Bm(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break a;default:break a;}return 1;}return CI(b);}
function CI(b){N();a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Bm(b)!=16?0:1;}
function Fr(b){N();switch(Bm(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function I9(b){N();return FY(b);}
function FY(b){N();switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return Fr(b);}return 1;}
function Px(){AFB=D($rt_charcls());AFE=E(BZ,128);}
function LH(){return {"value":"oD#*% .%%2%)6%-:%1>%5B%9F%=J%AN%Eo%Is%Mw%Q{%U!\'Y&\'^*\'b.\'f2\'j6\'n:\'r>\'vB\'zF\'!#J\'&#N\'*#R\'.#V\'2#Z\'6#_\':#c\'>#g\'B#k\'F#o\'J#s\'N#w\'R#6)I:)M>)QB)UF)YJ)^N)bR)fV)jZ)n_)rc)vg)zk)!#o)&#s)*#w).#{)2#!+6#&+:#*+>#.+B#2+F#6+J#:+N#>+R#{R# !T#%&T#)*T#-.T#12T#56T#9:T#=>T#ABT#E6a# :a#%>a#)Ba#-Fa#1Ja#5Na#9Ra#=Va#AZa#E:s# >s#%Bs#)Fs#-Js#1Ns#5Rs#9Vs#=Zs#A_s#EZ:% _:%%c:%)g:%-k:%1o:%5s:%9w:%={:%A!<%E2F% 6F%%:F%)>F%-BF%1FF%5JF%9NF%=RF%AVF%EgP% kP%%oP%)sP%-wP%1{P%5!R%9&R%=*R%A.R%E>]% B]%%F]%)J]%-N]%1R]%5V]%9Z]%=_]%Ac]%Esg% wg%%{g%)!i%-&"
+"i%1*i%5.i%92i%=6i%A:i%EJs% Ns%%Rs%)Vs%-Zs%1_s%5cs%9gs%=ks%Aos%E!!\' &!\'%*!\').!\'-2!\'16!\'5:!\'9>!\'=B!\'AF!\'EV,\' Z,\'%_,\')c,\'-g,\'1k,\'5o,\'9s,\'=w,\'A{,\'E.8\' 28\'%68\'):8\'->8\'1B8\'5F8\'9J8\'=N8\'AR8\'EcB\' gB\'%kB\')oB\'-sB\'1wB\'5{B\'9!D\'=&D\'A*D\'E>L\' BL\'%FL\')JL\'-NL\'1RL\'5VL\'9ZL\'=_L\'AcL\'EsV\' wV\'%{V\')!X\'-&X\'1*X\'5.X\'92X\'=6X\'A:X\'EB_\' F_\'%J_\')N_\'-R_\'1V_\'5Z_\'9__\'=c_\'Ag_\'Esw\' ww\'%{w\')!y\'-&y\'1*y\'5.y\'92y\'=6y\'A:y\'EB!) F!)%J!))N!)-R!)1V!)5Z!)9_!)=c!)Ag!)Egi+ ki+%oi+)si+-wi+1{i+5!k+9&k+=*k+A.k+Eom+ sm+%wm+){m+-!o+1&o+5*o+9.o+=2o+A6o+E>,- B,-%F"
+",-)J,--N,-1R,-5V,-9Z,-=_,-Ac,-E>8- B8-%F8-)J8--N8-1R8-5V8-9Z8-=_8-Ac8-E{F- !H-%&H-)*H--.H-12H-56H-9:H-=>H-ABH-E_H- cH-%gH-)kH--oH-1sH-5wH-9{H-=!J-A&J-E!Z- &Z-%*Z-).Z--2Z-16Z-5:Z-9>Z-=BZ-AFZ-E2c- 6c-%:c-)>c--Bc-1Fc-5Jc-9Nc-=Rc-AVc-EJo- No-%Ro-)Vo--Zo-1_o-5co-9go-=ko-Aoo-E.q- 2q-%6q-):q-->q-1Bq-5Fq-9Jq-=Nq-ARq-E&4r *4r%.4r)24r-64r1:4r5>4r9B4r=F4rAJ4rE{or !qr%&qr)*qr-.qr12qr56qr9:qr=>qrABqrE&ur *ur%.ur)2ur-6ur1:ur5>ur9Bur=FurAJurE**t .*t%2*t)6*t-:*t1>*t5B*t9F*t=J*tAN*tEN,t R,t%V,t)Z,t-_,t1c,t5g,t9k,t=o,tAs,tE_"
+"4t c4t%g4t)k4t-o4t1s4t5w4t9{4t=!6tA&6tEgXt kXt%oXt)sXt-wXt1{Xt5!Zt9&Zt=*ZtA.ZtE{c@# !e@#%&e@#)*e@#-.e@#12e@#56e@#9:e@#=>e@#ABe@#Ece@#Ige@#Mke@#Qoe@#Use@#Ywe@#^{e@#b!g@#f&g@#j*g@#n.g@#r2g@#v6g@#z:g@#!#>g@#&#Bg@#*#Fg@#.#Jg@#2#Ng@#6#Rg@#:#Vg@#>#Zg@#B#_g@#F#cg@#J#gg@#N#kg@#R#*i@#I.i@#M2i@#Q6i@#U:i@#Y>i@#^Bi@#bFi@#fJi@#jNi@#nRi@#rVi@#vZi@#z_i@#!#ci@#&#gi@#*#ki@#.#oi@#2#si@#6#wi@#:#{i@#>#!k@#B#&k@#F#*k@#J#.k@#N#2k@#R#s&D# w&D#%{&D#)!(D#-&(D#1*(D#5.(D#92(D#=6(D#A:(D#E2.H# 6.H#%:.H#)>.H#-B.H#1F.H#5J.H#9N.H#=R.H#AV."
+"H#EwuH# {uH#%!wH#)&wH#-*wH#1.wH#52wH#96wH#=:wH#A>wH#Ew$J# {$J#%!&J#)&&J#-*&J#1.&J#52&J#96&J#=:&J#A>&J#E{*J# !,J#%&,J#)*,J#-.,J#12,J#56,J#9:,J#=>,J#AB,J#E_8J# c8J#%g8J#)k8J#-o8J#1s8J#5w8J#9{8J#=!:J#A&:J#E2RJ# 6RJ#%:RJ#)>RJ#-BRJ#1FRJ#5JRJ#9NRJ#=RRJ#AVRJ#ENqJ# RqJ#%VqJ#)ZqJ#-_qJ#1cqJ#5gqJ#9kqJ#=oqJ#AsqJ#E&}J# *}J#%.}J#)2}J#-6}J#1:}J#5>}J#9B}J#=F}J#AJ}J#Eg@L# k@L#%o@L#)s@L#-w@L#1{@L#5!BL#9&BL#=*BL#A.BL#EZJL# _JL#%cJL#)gJL#-kJL#1oJL#5sJL#9wJL#={JL#A!LL#ENTL# RTL#%VTL#)ZTL#-_TL#1cTL#5gTL#9kTL#=oTL#AsTL#E:{L# >{L#"
+"%B{L#)F{L#-J{L#1N{L#5R{L#9V{L#=Z{L#A_{L#ERkN# VkN#%ZkN#)_kN#-ckN#1gkN#5kkN#9okN#=skN#AwkN#E_$P# c$P#%g$P#)k$P#-o$P#1s$P#5w$P#9{$P#=!&P#A&&P#E.,P# 2,P#%6,P#):,P#->,P#1B,P#5F,P#9J,P#=N,P#AR,P#EFau# Jau#%Nau#)Rau#-Vau#1Zau#5_au#9cau#=gau#Akau#Eouu# suu#%wuu#){uu#-!wu#1&wu#5*wu#9.wu#=2wu#A6wu#EF0N% J0N%%N0N%)R0N%-V0N%1Z0N%5_0N%9c0N%=g0N%Ak0N%Eo0N% s0N%%w0N%){0N%-!2N%1&2N%5*2N%9.2N%=22N%A62N%E:2N% >2N%%B2N%)F2N%-J2N%1N2N%5R2N%9V2N%=Z2N%A_2N%Ec2N% g2N%%k2N%)o2N%-s2N%1w2N%5{2N%9!4N%=&4N%A*4N%E.4N% 24N%%64N%):4N%->"
+"4N%1B4N%5F4N%9J4N%=N4N%AR4N%ERJR% VJR%%ZJR%)_JR%-cJR%1gJR%5kJR%9oJR%=sJR%AwJR%E>qR% BqR%%FqR%)JqR%-NqR%1RqR%5VqR%9ZqR%=_qR%AcqR%E:FV% >FV%%BFV%)FFV%-JFV%1NFV%5RFV%9VFV%=ZFV%A_FV%E"};}
function MS(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
function K_(){V.call(this);}
function ADj(){var a=new K_();P4(a);return a;}
function P4(a){BC(a);}
function Zj(a,b,c,d){var e,f,g,h,i;e=d.q();f=b+1|0;if(f>e){d.by=1;return (-1);}g=c.d(b);if(Bl(g)){h=b+2|0;if(h<=e){i=c.d(f);if(CT(g,i))return a.e.b(h,c,d);}}return a.e.b(f,c,d);}
function Rx(a,b){a.e=b;}
function PP(a){return (-2147483602);}
function Ru(a,b){return 1;}
function GK(){var a=this;Y.call(a);a.iw=0;a.g1=0;}
function R$(a){var b=new GK();Tq(b,a);return b;}
function Tq(a,b){BH(a);a.iw=b;a.g1=C6(b);}
function Ok(a,b,c){return a.iw!=c.d(b)&&a.g1!=c.d(b)?(-1):1;}
function B0(){var a=this;Y.call(a);a.et=0;a.d9=0;a.dV=0;}
function ABv(a){var b=new B0();ZJ(b,a);return b;}
function ZJ(a,b){var c,d;BH(a);a.P=2;a.dV=b;c=CJ(b);d=c.data;a.et=d[0];a.d9=d[1];}
function Tb(a,b,c){var d,e,f;d=b+1|0;e=c.d(b);f=c.d(d);return a.et==e&&a.d9==f?2:(-1);}
function Pq(a,b,c,d){var e,f,g,h;if(!(c instanceof Bh))return C7(a,b,c,d);e=c;f=d.q();while(b<f){g=e.cB(a.et,b);if(g<0)return (-1);b=g+1|0;if(b>=f)continue;h=e.d(b);if(a.d9==h&&a.e.b(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function RZ(a,b,c,d,e){var f,g,h;if(!(d instanceof Bh))return Db(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);g=f.er(a.d9,c);h=g+(-1)|0;if(h<0)break a;if(h<b)break a;if(a.et==f.d(h)&&a.e.b(h+2|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function N6(a){return a.dV;}
function SQ(a,b){if(b instanceof B0)return b.ge()!=a.dV?0:1;if(b instanceof BJ)return b.j(a.dV);if(b instanceof B1)return 0;if(!(b instanceof B3))return 1;return 0;}
function G6(){I.call(this);this.lM=null;}
function ABU(a){var b=new G6();UI(b,a);return b;}
function UI(a,b){a.lM=b;P(a);}
function Xo(a,b){return FP(b);}
function Mq(){var a=this;K.call(a);a.fw=0;a.eW=0;a.gR=0;}
function Dc(a,b){var c=new Mq();Uv(c,a,b);return c;}
function ADm(a,b,c){var d=new Mq();Nu(d,a,b,c);return d;}
function Uv(a,b,c){Q(a);a.eW=c;a.fw=b;}
function Nu(a,b,c,d){Q(a);a.gR=d;a.eW=c;a.fw=b;}
function Nt(a){var b;b=ABj(a.fw);if(a.gR)b.J.d6(0,2048);b.y=a.eW;return b;}
function BJ(){var a=this;V.call(a);a.bX=null;a.lO=0;}
function Zq(a){var b=new BJ();Iu(b,a);return b;}
function Iu(a,b){BC(a);a.bX=b.c3();a.lO=b.G;}
function UR(a,b,c,d){var e,f,g,h,i;e=d.q();if(b<e){f=b+1|0;g=c.d(b);if(a.j(g)){h=a.e.b(f,c,d);if(h>0)return h;}if(f<e){h=f+1|0;i=c.d(f);if(CT(g,i)&&a.j(BS(g,i)))return a.e.b(h,c,d);}}return (-1);}
function VX(a,b){return a.bX.j(b);}
function P1(a,b){if(b instanceof B0)return DU(a.bX,b.ge());if(b instanceof B1)return DU(a.bX,b.cf());if(b instanceof BJ)return CV(a.bX,b.bX);if(!(b instanceof B3))return 1;return CV(a.bX,b.fc());}
function Ze(a){return a.bX;}
function U_(a,b){a.e=b;}
function Vb(a,b){return 1;}
function GV(){BJ.call(this);}
function Po(a){var b=new GV();TE(b,a);return b;}
function TE(a,b){Iu(a,b);}
function YU(a,b){return a.bX.j(Co(Cn(b)));}
function Na(){K.call(this);}
function AAP(){var a=new Na();SX(a);return a;}
function SX(a){Q(a);}
function NO(a){var b;b=ABc(a);b.y=1;return b;}
function B_(){C.call(this);}
var AFH=null;var AFI=null;function AFJ(){var a=new B_();Fk(a);return a;}
function Fk(a){L(a);}
function Fo(b){if(!(b&1)){if(AFI!==null)return AFI;AFI=ACJ();return AFI;}if(AFH!==null)return AFH;AFH=ABM();return AFH;}
function E6(){var a=this;V.call(a);a.b1=null;a.fr=null;a.dg=0;}
function Wy(a,b){var c=new E6();OE(c,a,b);return c;}
function OE(a,b,c){BC(a);a.b1=b;a.dg=c;}
function NG(a,b){a.e=b;}
function FI(a){if(a.fr===null)a.fr=Dn(a.b1);return a.fr;}
function NH(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;e=d.q();f=0;g=$rt_createIntArray(3);h=(-1);i=(-1);if(b>=e)return (-1);j=b+1|0;k=c.d(b);l=TF(k);if(l!==null){m=l.data;n=0;if(m.length!=a.dg)return (-1);while(true){if(n>=a.dg)return a.e.b(j,c,d);if(m[n]!=a.b1.data[n])break;n=n+1|0;}return (-1);}o=g.data;o[f]=k;p=k-4352|0;if(p>=0&&p<19){if(j<e){k=c.d(j);h=k-4449|0;}if(h>=0&&h<21){q=j+1|0;o[1]=k;if(q<e){k=c.d(q);i=k-4519|0;}if(i>=0&&i<28){r=q+1|0;o[2]=k;if(a.dg==3&&o[0]==a.b1.data[0]&&o[1]==a.b1.data[1]&&o[2]
==a.b1.data[2]){s=a.e;r=s.b(r,c,d);}else r=(-1);return r;}if(a.dg==2&&o[0]==a.b1.data[0]&&o[1]==a.b1.data[1]){s=a.e;r=s.b(q,c,d);}else r=(-1);return r;}return (-1);}return (-1);}
function Rv(a,b){var c,d;a:{if(b instanceof E6){c=b;if(!FI(c).bO(FI(a))){d=0;break a;}}d=1;}return d;}
function Wu(a,b){return 1;}
function Dq(){CC.call(this);}
function AFK(a,b,c){var d=new Dq();GB(d,a,b,c);return d;}
function GB(a,b,c,d){Fy(a,b);a.K=c;a.bH=d;}
function Mt(b){if(b>=0)return ABi(b);G(By(J().a(B(266)).n(b).f()));}
function MB(b,c,d){return ABL(0,b.data.length,b,c,c+d|0,0);}
function OY(b){return MB(b,0,b.data.length);}
function PI(a,b,c,d){var e,f,g,h,i;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Bo(J().a(B(267)).n(g).a(B(237)).n(f).f()));if(W(a)<d)G(Yd());if(d<0)G(Bo(J().a(B(238)).n(d).a(B(239)).f()));h=a.K;i=0;while(i<d){g=c+1|0;f=h+1|0;e[c]=a.lo(h);i=i+1|0;c=g;h=f;}a.K=a.K+d|0;return a;}}e=b.data;G(Bo(J().a(B(240)).n(c).a(B(19)).n(e.length).a(B(241)).f()));}
function Sy(a,b){return a.iB(b,0,b.data.length);}
function AAe(a,b,c,d){var e,f,g,h,i;if(a.dI())G(Gu());if(W(a)<d)G(I5());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Bo(J().a(B(268)).n(g).a(B(237)).n(f).f()));if(d<0)G(Bo(J().a(B(238)).n(d).a(B(239)).f()));h=a.K;i=0;while(i<d){g=h+1|0;f=c+1|0;a.hc(h,e[c]);i=i+1|0;h=g;c=f;}a.K=a.K+d|0;return a;}}e=b.data;G(Bo(J().a(B(240)).n(c).a(B(19)).n(e.length).a(B(241)).f()));}
function QB(a,b,c,d){var e,f,g,h,i,j;if(a.dI())G(Gu());e=d-c|0;if(W(a)<e)G(I5());if(c>=0&&c<b.g()){if(d>b.g()){f=new C5;g=J().a(B(268)).n(d).a(B(269));L0(f,g.n(b.g()).f());G(f);}if(c>d)G(Bo(J().a(B(270)).n(c).a(B(271)).n(d).f()));h=a.K;while(c<d){i=h+1|0;j=c+1|0;a.hc(h,b.d(c));h=i;c=j;}a.K=a.K+e|0;return a;}G(Bo(J().a(B(270)).n(c).a(B(19)).n(b.g()).a(B(241)).f()));}
function DR(a,b){return a.lh(b,0,b.g());}
function IR(a){return a.jB();}
function E8(a){return a.lz();}
function G4(a){MD(a);return a;}
function Nk(a,b){FF(a,b);return a;}
function DP(){Dq.call(this);}
function AFL(a,b,c){var d=new DP();Jr(d,a,b,c);return d;}
function Jr(a,b,c,d){GB(a,b,c,d);}
function Zs(a){return a.kQ();}
function LY(){var a=this;DP.call(a);a.iT=0;a.fF=0;a.ex=null;}
function ABi(a){var b=new LY();Rm(b,a);return b;}
function ABL(a,b,c,d,e,f){var g=new LY();MX(g,a,b,c,d,e,f);return g;}
function Rm(a,b){MX(a,0,b,$rt_createCharArray(b),0,b,0);}
function MX(a,b,c,d,e,f,g){Jr(a,c,e,f);a.fF=b;a.iT=g;a.ex=d;}
function Qg(a,b){return a.ex.data[b+a.fF|0];}
function Nh(a,b,c){a.ex.data[b+a.fF|0]=c;}
function P9(a){return 1;}
function V$(a){return a.ex;}
function YZ(a){return a.iT;}
function MZ(){K.call(this);}
function ADv(){var a=new MZ();OT(a);return a;}
function OT(a){Q(a);}
function Xw(a){return Bx().I(33,64).I(91,96).I(123,126);}
function EQ(){var a=this;C.call(a);a.cy=null;a.eF=null;}
var AFM=null;function AAW(){AAW=Bc(EQ);No();}
function NM(a,b){var c=new EQ();Gv(c,a,b);return c;}
function Gv(a,b,c){AAW();L(a);a.cy=b;a.eF=c;}
function Tc(a,b,c){var d,e,f,g,h,i,j,k,l;d=b.createElement("div");e=0;while(e<a.cy.d4()){f=0;while(f<a.cy.eh()){g=(5-a.cy.d4()|0)+e|0;h=LM(a,g,f);if(h>0){i=FW(a,b,h);d.appendChild(i);}j=a.cy.dH(e,f);if(j!==null){k=KX(a,b,j,c);d.appendChild(k);}else{i=FW(a,b,30);d.appendChild(i);}f=f+1|0;}l=b.createElement("br");d.appendChild(l);e=e+1|0;}return d;}
function KX(a,b,c,d){var e,f,g,h,i,j,k,l;e=b.createElement("span");e.setAttribute("class","key");f=null;if(!d)f=AFM.data[c.bj()];else{g=a.eF.gh(c);if(g!==null){h=U(255,160+(g.dR()*1000.0|0)|0);i=Bq(0,160-(g.dR()*1500.0|0)|0);f=J().a(B(272)).n(h).a(B(230)).n(i).a(B(230)).n(i).a(B(241)).f();}}if(f===null){j=!!1;e.hidden=j;}else{k=J().a(B(273)).a(f).f();e.setAttribute("style",$rt_ustr(k));}if(!d){l=J().a(B(274)).a(Dn(c.dS())).a(B(275));l=l.a($rt_str(c.iU().toFixed(1))).f();e.setAttribute("title",$rt_ustr(l));}
else{g=a.eF.gh(c);if(g!==null){j=J().a(B(274)).a(Dn(c.dS())).a(B(276));j=j.a($rt_str((g.dR()*100.0).toFixed(2))).a(B(247)).f();e.setAttribute("title",$rt_ustr(j));}}j=MF(c.iN());j=b.createTextNode($rt_ustr(j));e.appendChild(j);return e;}
function FW(a,b,c){var d,e;d=b.createElement("span");d.setAttribute("class","keygap");e=J().a(B(277)).n(c).a(B(278)).f();d.setAttribute("style",$rt_ustr(e));return d;}
function LM(a,b,c){var d,e;a:{d=a.cy.kt();DT();if(d===AER){if(b==1&&!c)return 0;if(b==2&&!c)return 15;if(b==3&&!c)return 22;if(b!=4)break a;if(c)break a;return 37;}if(d!==AES){if(d!==AET)break a;if(c&&c!=5)break a;return 15;}if(b==1&&!c)return 0;if(b==2&&!c)return 15;if(b==3&&!c)return 22;e=BW(b,4);if(!e&&!c)return 7;if(!e&&c==5)return 30;}return 0;}
function No(){var b,c;b=E(Bh,10);c=b.data;c[0]=B(279);c[1]=B(280);c[2]=B(281);c[3]=B(282);c[4]=null;c[5]=null;c[6]=B(283);c[7]=B(281);c[8]=B(280);c[9]=B(279);AFM=b;}
function H0(){I.call(this);this.kb=null;}
function ADx(a){var b=new H0();NK(b,a);return b;}
function NK(a,b){a.kb=b;P(a);}
function WZ(a,b){return Hc(b);}
function De(){var a=this;C.call(a);a.hv=null;a.hi=null;a.gA=null;a.gp=null;a.i4=0;}
function Z(a,b,c){var d=new De();Qx(d,a,b,c);return d;}
function Qx(a,b,c,d){L(a);a.hv=b;a.hi=c;a.gA=d;}
function OO(a){return a.hv;}
function X_(a){return a.hi;}
function Oc(a){return a.gA;}
function Se(a){return a.gp;}
function AAv(a,b){a.gp=b;}
function QE(a){return a.i4;}
function QM(a,b){a.i4=b;}
function CA(){}
function HG(){C.call(this);}
function ADu(){var a=new HG();AAk(a);return a;}
function AAk(a){L(a);}
function MW(a,b){if(M3())G5();}
function Xl(a,b){MW(a,b);}
function MG(){C.call(this);}
function HI(){C.call(this);}
function AAJ(){var a=new HI();TU(a);return a;}
function TU(a){L(a);}
function Ls(a,b){var c,d;if(!$rt_str(E1().value).bO($rt_str(Ew().value))){c=Ew();d=$rt_ustr($rt_str(E1().value));c.value=d;c=Ev();B2();d=AE9.data.length;c.selectedIndex=d;}if(!$rt_str(Ep().value).bO($rt_str(E2().value))){c=E2();d=$rt_ustr($rt_str(Ep().value));c.value=d;c=Eq();B2();d=AE$.data.length;c.selectedIndex=d;}IU().click();DI();CE(null);BQ(null);}
function AAu(a,b){Ls(a,b);}
function Hi(){C.call(this);}
function ADz(){var a=new Hi();Z7(a);return a;}
function Z7(a){L(a);}
function JM(a,b){var c,d;c=Eq().selectedIndex;B2();if(c<AE$.data.length){d=AE$.data[c];Eg(d.bN());DI();CE(null);BQ(null);}}
function Wx(a,b){JM(a,b);}
function Gy(){var a=this;C.call(a);a.ix=null;a.iy=null;a.gr=null;}
function Rn(a,b,c){var d=new Gy();VV(d,a,b,c);return d;}
function VV(a,b,c,d){L(a);a.ix=b;a.iy=c;a.gr=d;}
function Vc(a){return a.ix;}
function YM(a){return a.iy;}
function PX(a){return a.gr;}
function SN(b){var c,d,e,f,g,h;c=$rt_createDoubleArray(10);d=b.Y();while(d.Z()){e=d.W();f=e.cY().bj();g=e.en().bj();if(HS(f,g)){h=c.data;h[f]=h[f]+e.du().bP();}}return c;}
function MK(){I.call(this);this.kN=null;}
function ABA(a){var b=new MK();VR(b,a);return b;}
function VR(a,b){a.kN=b;P(a);}
function VJ(a,b){return 0;}
function L6(){BO.call(this);this.lN=null;}
function AC8(a){var b=new L6();Qq(b,a);return b;}
function Qq(a,b){C3(a);a.lN=b;}
function Hj(){C.call(this);}
function ABO(){var a=new Hj();Ty(a);return a;}
function Ty(a){L(a);}
function KR(a,b){var c,d;c=Ev().selectedIndex;B2();if(c<AE9.data.length){d=AE9.data[c];Ge(d.bN());DI();CE(null);BQ(null);}}
function UL(a,b){KR(a,b);}
function Lp(){I.call(this);this.lP=null;}
function AB2(a){var b=new Lp();VY(b,a);return b;}
function VY(a,b){a.lP=b;P(a);}
function Tx(a,b){return Lg(b);}
function J8(){R.call(this);this.h$=0;}
function V3(a){var b=new J8();Y0(b,a);return b;}
function Y0(a,b){Bn(a);a.h$=b;}
function Q7(a,b,c,d){var e,f,g,h,i;e=b<d.q()?c.d(b):32;f=!b?32:c.d(b-1|0);g=!d.c_()?d.bv():0;h=e!=32&&!FJ(a,e,b,g,c)?0:1;i=f!=32&&!FJ(a,f,b-1|0,g,c)?0:1;return h^i^a.h$?(-1):a.e.b(b,c,d);}
function Rt(a,b){return 0;}
function FJ(a,b,c,d,e){var f;if(!F2(b)&&b!=95){a:{if(C_(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=e.d(c);if(F2(f))return 0;if(C_(f)!=6)return 1;}}return 1;}return 0;}
function KP(){R.call(this);this.dB=0;}
function AAK(a){var b=new KP();Wh(b,a);return b;}
function Wh(a,b){Bn(a);a.dB=b;}
function ZI(a,b,c,d){var e;e=!d.cP()?c.g():d.q();if(b>=e){d.C(a.dB,0);return a.e.b(b,c,d);}if((e-b|0)==1&&c.d(b)==10){d.C(a.dB,1);return a.e.b(b+1|0,c,d);}return (-1);}
function Wa(a,b){var c;c=!b.bD(a.dB)?0:1;b.C(a.dB,(-1));return c;}
function Dm(){K.call(this);}
function ACB(){var a=new Dm();L3(a);return a;}
function L3(a){Q(a);}
function LU(a){return Bx().I(9,13).be(32);}
function Hf(){var a=this;C.call(a);a.ku=null;a.iY=null;a.ha=null;a.h2=null;a.ko=0.0;a.hk=null;a.jf=null;a.hG=null;}
function ACL(a,b,c,d,e,f,g,h){var i=new Hf();Vs(i,a,b,c,d,e,f,g,h);return i;}
function Vs(a,b,c,d,e,f,g,h,i){L(a);a.ku=b;a.iY=c;a.ha=d;a.h2=e;a.ko=f;a.hk=g;a.jf=h;a.hG=i;}
function PT(a){return a.iY;}
function Vd(a){return a.ha;}
function WJ(a){return a.h2;}
function Pu(a){return a.hk;}
function T9(a){return a.hG;}
function LP(){Y.call(this);this.gs=0;}
function SH(a){var b=new LP();Pa(b,a);return b;}
function Pa(a,b){BH(a);a.gs=BI(Bz(b));}
function Nq(a,b,c){return a.gs!=BI(Bz(c.d(b)))?(-1):1;}
function DO(){BN.call(this);this.gV=0.0;}
var AFN=0.0;var AFO=null;function FD(){FD=Bc(DO);SD();}
function AB0(a){var b=new DO();Lf(b,a);return b;}
function Lf(a,b){FD();F1(a);a.gV=b;}
function AAb(a){return a.gV;}
function Fz(b){FD();return AB0(b);}
function DE(b){var c,d,e,f,g,h,i,j,k,l,m,n,o;FD();if(b.Q())G(Ca());c=0;d=b.g();while(true){if(b.d(c)>32){while(b.d(d-1|0)<=32){d=d+(-1)|0;}e=0;if(b.d(c)==45){c=c+1|0;e=1;}else if(b.d(c)==43)c=c+1|0;if(c==d)G(Ca());a:{f=b.d(c);g=Long_ZERO;h=0;i=0;if(f!=46){i=1;if(f>=48&&f<=57){b:{while(c<d){if(b.d(c)!=48)break b;c=c+1|0;}}while(c<d){j=b.d(c);if(j<48)break a;if(j>57)break a;if(Long_toNumber(g)>=1.0E17)h=h+1|0;else g=Long_add(Long_mul(g,Long_fromInt(10)),Long_fromInt(j-48|0));c=c+1|0;}}else G(Ca());}}if(c<d&&b.d(c)
==46){c=c+1|0;c:{while(true){if(c>=d)break c;k=b.d(c);if(k<48)break c;if(k>57)break;if(Long_toNumber(g)<1.0E17){g=Long_add(Long_mul(g,Long_fromInt(10)),Long_fromInt(k-48|0));h=h+(-1)|0;}c=c+1|0;i=1;}}if(!i)G(Ca());}if(c<d){k=b.d(c);if(k!=101&&k!=69)G(Ca());l=c+1|0;m=0;if(l==d)G(Ca());if(b.d(l)==45){l=l+1|0;m=1;}else if(b.d(l)==43)l=l+1|0;n=0;k=0;d:{while(true){if(l>=d)break d;o=b.d(l);if(o<48)break d;if(o>57)break;n=(10*n|0)+(o-48|0)|0;k=1;l=l+1|0;}}if(!k)G(Ca());if(m)n= -n;h=h+n|0;}e:{j=BW(h,308);if(j<=0){if
(j)break e;if(Long_le(g,new Long(2133831477, 4185580)))break e;}return e?(-Infinity):Infinity;}if(e)g=Long_neg(g);return Long_toNumber(g)*KZ(h);}c=c+1|0;if(c==d)break;}G(Ca());}
function KZ(b){var c,d;FD();if(b>=0)c=10.0;else{c=0.1;b= -b;}d=1.0;while(b){if(b%2|0)d=d*c;c=c*c;b=b/2|0;}return d;}
function SD(){AFN=NaN;AFO=D($rt_doublecls());}
function Ey(){Bs.call(this);this.gQ=0;}
function AFP(a){var b=new Ey();Ms(b,a);return b;}
function Ms(a,b){Cl(a,b);}
function Pj(a,b,c,d){var e;e=a.c6();d.C(e,b-d.bD(e)|0);a.gQ=b;return b;}
function RR(a){return a.gQ;}
function Q3(a,b){return 0;}
function Do(){V.call(this);this.cD=0;}
function P0(a){var b=new Do();RY(b,a);return b;}
function RY(a,b){BC(a);a.cD=b;}
function QG(a,b){a.e=b;}
function SK(a,b,c,d){var e,f,g;e=b+1|0;if(e>d.q()){d.by=1;return (-1);}f=c.d(b);if(b>d.bv()){g=c.d(b-1|0);if(Bl(g))return (-1);}if(a.cD!=f)return (-1);return a.e.b(e,c,d);}
function Xy(a,b,c,d){var e,f,g,h,i;if(!(c instanceof Bh))return C7(a,b,c,d);e=c;f=d.bv();g=d.q();while(true){if(b>=g)return (-1);h=e.cB(a.cD,b);if(h<0)return (-1);if(h>f&&Bl(e.d(h-1|0))){b=h+1|0;continue;}i=a.e;b=h+1|0;if(i.b(b,c,d)>=0)break;}return h;}
function T3(a,b,c,d,e){var f,g,h;if(!(d instanceof Bh))return Db(a,b,c,d,e);f=e.bv();g=d;a:{while(true){if(c<b)return (-1);h=g.er(a.cD,c);if(h<0)break a;if(h<b)break a;if(h>f&&Bl(g.d(h-1|0))){c=h+(-2)|0;continue;}if(a.e.b(h+1|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function OV(a,b){if(b instanceof B1)return 0;if(b instanceof B3)return 0;if(b instanceof BJ)return 0;if(b instanceof B0)return 0;if(b instanceof Dy)return 0;if(!(b instanceof Do))return 1;return b.cD!=a.cD?0:1;}
function VS(a,b){return 1;}
function E$(){}
function LO(){B9.call(this);}
function ACz(a,b){var c=new LO();T4(c,a,b);return c;}
function T4(a,b,c){IF(a,b,c);}
function LI(){var a=this;C.call(a);a.cw=null;a.iI=0;a.b8=0;a.ey=0;a.iu=0.0;}
function AB6(a,b,c){var d=new LI();W7(d,a,b,c);return d;}
function W7(a,b,c,d){var e,f,g;L(a);if(b.g()!=1)a.cw=b.cq();else{e=Zg(b.d(0));if(!e){f=$rt_createCharArray(1);f.data[0]=b.d(0);a.cw=f;}else{f=$rt_createCharArray(2);g=f.data;g[0]=b.d(0);g[1]=e;a.cw=f;}}a.iI=c;a.b8=d;a.ey=M4(a);}
function WM(a){return Bz(a.cw.data[0]);}
function Z5(a){return a.iI;}
function Xt(a){return a.b8;}
function Y4(a){return a.ey>4?1:0;}
function T5(a){return a.ey;}
function Q6(a,b){a.ey=b;}
function PD(a){return a.iu;}
function T6(a,b){a.iu=b;}
function Q4(a){return a.cw;}
function Pf(a,b){var c,d,e,f;c=a.cw.data;d=c.length;e=0;while(e<d){f=c[e];if(f==Bz(b))return 1;e=e+1|0;}return 0;}
function M4(a){if(a.b8<=3)return a.b8;if(a.b8==4)return 3;if(a.b8==5)return 6;if(a.b8>9)return 9;return a.b8;}
function Zg(b){if(Lx(b)){if(!Iq(b))return BI(b);return Bz(b);}a:{switch(b){case 39:break;case 40:case 41:case 42:case 43:case 58:case 60:case 62:case 63:case 64:case 65:case 66:case 67:case 68:case 69:case 70:case 71:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 80:case 81:case 82:case 83:case 84:case 85:case 86:case 87:case 88:case 89:case 90:case 92:break a;case 44:return 60;case 45:return 95;case 46:return 62;case 47:return 63;case 48:return 41;case 49:return 33;case 50:return 64;case 51:return 35;case 52:return 36;case 53:return 37;case 54:return 94;case 55:return 38;case 56:return 42;case 57:return 40;case 59:return 58;case 61:return 43;case 91:return 123;case 93:return 125;default:break a;}return 34;}return 0;}
function Ch(){var a=this;Bv.call(a);a.cm=null;a.bz=0;}
function AFQ(a,b,c,d,e){var f=new Ch();Dp(f,a,b,c,d,e);return f;}
function Dp(a,b,c,d,e,f){Cz(a,c,d,e);a.cm=b;a.bz=f;}
function AAm(a,b,c,d){var e,f,g,h;e=d.hP(a.bz);if(!a.w.x(d))return a.e.b(b,c,d);if(e>=a.cm.cZ())return a.e.b(b,c,d);f=a.bz;g=e+1|0;d.b2(f,g);h=a.w.b(b,c,d);if(h>=0){d.b2(a.bz,0);return h;}f=a.bz;g=g+(-1)|0;d.b2(f,g);if(g>=a.cm.cW())return a.e.b(b,c,d);d.b2(a.bz,0);return (-1);}
function Fe(){Ch.call(this);}
function AFR(a,b,c,d,e){var f=new Fe();HC(f,a,b,c,d,e);return f;}
function HC(a,b,c,d,e,f){Dp(a,b,c,d,e,f);}
function Pp(a,b,c,d){var e,f;e=d.hP(a.bz);if(!a.w.x(d))return a.e.b(b,c,d);if(e>=a.cm.cZ()){d.b2(a.bz,0);return a.e.b(b,c,d);}if(e<a.cm.cW()){d.b2(a.bz,e+1|0);f=a.w.b(b,c,d);}else{f=a.e.b(b,c,d);if(f>=0){d.b2(a.bz,0);return f;}d.b2(a.bz,e+1|0);f=a.w.b(b,c,d);}return f;}
function EA(){}
function DB(){Dl.call(this);this.b$=0;}
function AFS(){var a=new DB();L_(a);return a;}
function L_(a){Ly(a);}
function U6(a){return ABg(a);}
function EZ(){}
function Ib(){var a=this;DB.call(a);a.bk=null;a.bn=0;}
function BX(){var a=new Ib();VW(a);return a;}
function AFT(a){var b=new Ib();GO(b,a);return b;}
function VW(a){GO(a,10);}
function GO(a,b){L_(a);a.bk=E(C,b);}
function Pw(a,b){var c,d;if(a.bk.data.length<b){if(a.bk.data.length>=1073741823)c=2147483647;else{d=a.bk.data.length*2|0;c=Bq(b,Bq(d,5));}a.bk=L8(a.bk,c);}}
function S8(a,b){Ex(a,b);return a.bk.data[b];}
function QK(a){return a.bn;}
function XH(a,b){var c,d;a.bZ(a.bn+1|0);c=a.bk.data;d=a.bn;a.bn=d+1|0;c[d]=b;a.b$=a.b$+1|0;return 1;}
function YL(a,b,c){var d;JN(a,b);a.bZ(a.bn+1|0);d=a.bn;while(d>b){a.bk.data[d]=a.bk.data[d-1|0];d=d+(-1)|0;}a.bk.data[b]=c;a.bn=a.bn+1|0;a.b$=a.b$+1|0;}
function TG(a,b){var c,d,e,f;Ex(a,b);c=a.bk.data[b];a.bn=a.bn-1|0;while(b<a.bn){d=a.bk.data;e=a.bk.data;f=b+1|0;d[b]=e[f];b=f;}a.bk.data[a.bn]=null;a.b$=a.b$+1|0;return c;}
function Ex(a,b){if(b>=0&&b<a.bn)return;G(Cq());}
function JN(a,b){if(b>=0&&b<=a.bn)return;G(Cq());}
function E4(){}
function Fd(){}
function HF(){C.call(this);}
function Nv(a,b,c){a.mt($rt_str(b),Dz(c,"handleEvent"));}
function N8(a,b,c){a.nJ($rt_str(b),Dz(c,"handleEvent"));}
function P8(a,b){return a.nb(b);}
function Qs(a,b,c,d){a.mz($rt_str(b),Dz(c,"handleEvent"),d?1:0);}
function XN(a,b){return !!a.my(b);}
function Sj(a){return a.m7();}
function N_(a,b,c,d){a.oP($rt_str(b),Dz(c,"handleEvent"),d?1:0);}
function K9(){CM.call(this);}
function ACs(a,b,c){var d=new K9();Ra(d,a,b,c);return d;}
function Ra(a,b,c,d){Eu(a,b,c,d);}
function RT(a,b,c,d){var e;if(!a.w.x(d))return a.e.b(b,c,d);e=a.e.b(b,c,d);if(e<0)e=a.w.b(b,c,d);return e;}
function Hu(){C.call(this);}
function Bh(){var a=this;C.call(a);a.t=null;a.dG=0;}
var AFU=null;function CP(){CP=Bc(Bh);WN();}
function Dn(a){var b=new Bh();Dr(b,a);return b;}
function E_(a,b,c){var d=new Bh();M7(d,a,b,c);return d;}
function ABC(a,b,c,d){var e=new Bh();H9(e,a,b,c,d);return e;}
function AFV(a,b,c,d){var e=new Bh();F0(e,a,b,c,d);return e;}
function AC0(a,b,c){var d=new Bh();Gn(d,a,b,c);return d;}
function Dr(a,b){var c,d,e;CP();c=b.data;L(a);d=c.length;a.t=$rt_createCharArray(d);e=0;while(e<d){a.t.data[e]=c[e];e=e+1|0;}}
function M7(a,b,c,d){var e,f;CP();L(a);a.t=$rt_createCharArray(d);e=0;while(e<d){f=b.data;a.t.data[e]=f[e+c|0];e=e+1|0;}}
function H9(a,b,c,d,e){CP();F0(a,b,c,d,Ox(e.f()));}
function F0(a,b,c,d,e){CP();L(a);I7(a,b,c,d,e);}
function Gn(a,b,c,d){var e,f,g,h,i,j,k;CP();L(a);a.t=$rt_createCharArray(d*2|0);e=0;f=0;while(f<d){g=b.data;h=c+1|0;i=g[c];if(i<65536){g=a.t.data;j=e+1|0;g[e]=i&65535;}else{g=a.t.data;k=e+1|0;g[e]=CQ(i);g=a.t.data;j=k+1|0;g[k]=CF(i);}f=f+1|0;c=h;e=j;}if(e<a.t.data.length)a.t=EM(a.t,e);}
function I7(a,b,c,d,e){var f;f=GW(e,Mf(b,c,d));if(IR(f)&&!BG(f)&&KD(f)==Kc(f))a.t=E8(f);else{a.t=$rt_createCharArray(W(f));f.kv(a.t);}}
function Qi(a,b){if(b>=0&&b<a.t.data.length)return a.t.data[b];G(Ff());}
function V_(a){return a.t.data.length;}
function Y5(a){return a.t.data.length?0:1;}
function Rz(a,b,c){var d,e,f;if((c+b.g()|0)>a.g())return 0;d=0;while(d<b.g()){e=b.d(d);f=c+1|0;if(e!=a.d(c))return 0;d=d+1|0;c=f;}return 1;}
function Zc(a,b){if(a===b)return 1;return a.ip(b,0);}
function PU(a,b,c){var d,e,f,g;d=Bq(0,c);if(b<65536){e=b&65535;while(true){if(d>=a.t.data.length)return (-1);if(a.t.data[d]==e)break;d=d+1|0;}return d;}f=CQ(b);g=CF(b);while(true){if(d>=(a.t.data.length-1|0))return (-1);if(a.t.data[d]==f&&a.t.data[d+1|0]==g)break;d=d+1|0;}return d;}
function UP(a,b){return a.cB(b,0);}
function Qt(a,b,c){var d,e,f,g,h,i;d=U(c,a.g()-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.t.data[d]==e)break;d=d+(-1)|0;}return d;}f=CQ(b);g=CF(b);while(true){if(d<1)return (-1);if(a.t.data[d]==g){h=a.t.data;i=d-1|0;if(h[i]==f)break;}d=d+(-1)|0;}return i;}
function Uk(a,b,c){var d,e,f;d=Bq(0,c);e=a.g()-b.g()|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=b.g())break a;if(a.d(d+f|0)!=b.d(f))break;f=f+1|0;}d=d+1|0;}return d;}
function UE(a,b,c){var d,e;d=U(c,a.g()-b.g()|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=b.g())break a;if(a.d(d+e|0)!=b.d(e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function Oz(a,b,c){if(b>c)G(Cq());return E_(a.t,b,c-b|0);}
function Ym(a,b){return a.ce(b,a.g());}
function U1(a,b,c){return a.ce(b,c);}
function Nf(a,b){var c,d,e;c=a.g()-b.g()|0;d=0;while(d<=c){e=0;while(true){if(e>=b.g())return 1;if(a.d(d+e|0)!=b.d(e))break;e=e+1|0;}d=d+1|0;}return 0;}
function ZG(a){var b,c;b=0;c=a.g()-1|0;a:{while(b<=c){if(a.d(b)>32)break a;b=b+1|0;}}while(b<=c&&a.d(c)<=32){c=c+(-1)|0;}return a.ce(b,c+1|0);}
function RW(a){return a;}
function Za(a){var b,c,d;b=$rt_createCharArray(a.t.data.length);c=0;while(true){d=b.data;if(c>=d.length)break;d[c]=a.t.data[c];c=c+1|0;}return b;}
function MF(b){var c,d;CP();c=new Bh;d=$rt_createCharArray(1);d.data[0]=b;Dr(c,d);return c;}
function EL(b){CP();return J().n(b).f();}
function XB(a,b){var c,d;if(a===b)return 1;if(!(b instanceof Bh))return 0;c=b;if(c.g()!=a.g())return 0;d=0;while(d<c.g()){if(a.d(d)!=c.d(d))return 0;d=d+1|0;}return 1;}
function XZ(a,b){var c;if(a===b)return 1;if(b===null)return 0;if(a.g()!=b.g())return 0;c=0;while(c<a.g()){if(BI(a.d(c))!=BI(b.d(c)))return 0;c=c+1|0;}return 1;}
function P6(a){var b,c,d,e;a:{if(!a.dG){b=a.t.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.dG=(31*a.dG|0)+e|0;d=d+1|0;}}}return a.dG;}
function O1(a){var b,c,d,e,f,g,h,i;if(a.Q())return a;b=$rt_createIntArray(a.t.data.length);c=0;d=0;while(d<a.t.data.length){a:{if(d!=(a.t.data.length-1|0)&&Bl(a.t.data[d])){e=a.t.data;f=d+1|0;g=e[f];if(Bt(g)){h=b.data;i=c+1|0;h[c]=Cn(BS(a.t.data[d],a.t.data[f]));d=f;break a;}}h=b.data;i=c+1|0;h[c]=Bz(a.t.data[d]);}d=d+1|0;c=i;}return AC0(b,0,c);}
function AAa(a,b){return Hz(TI(b),a.f());}
function WN(){AFU=ADa();}
function FT(){C.call(this);}
var AFW=null;function ADF(){ADF=Bc(FT);Ub();}
function Gm(){ADF();return AFW;}
function Ub(){AFW=AAw();AFW.hB(B(284),XS());}
function M9(){T.call(this);}
function ADd(){var a=new M9();Q1(a);return a;}
function Q1(a){BA(a);}
function Ig(){Cb.call(this);}
function ACp(a,b,c){var d=new Ig();VF(d,a,b,c);return d;}
function VF(a,b,c,d){Em(a,b,c,d);}
function PQ(a,b,c,d){var e;e=a.e.b(b,c,d);if(e>=0)return e;return a.w.b(b,c,d);}
function Ed(){Dj.call(this);}
function AFX(a,b,c){var d=new Ed();Je(d,a,b,c);return d;}
function Je(a,b,c,d){La(a,b,c,d);}
function Qy(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=$rt_createCharArray(U(W(b),512));e=0;f=0;g=$rt_createByteArray(U(W(c),512));a:{while(true){if((e+32|0)>f&&BR(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=U(W(b)+j|0,i.length);b.iB(d,j,f-j|0);e=0;}if(!BR(c)){if(!BR(b)&&e>=f){Bg();k=AEz;}else{Bg();k=AEx;}break a;}i=g.data;l=U(W(c),i.length);m=ABz(b,c);k=a.jE(d,e,f,g,0,l,m);e=m.hT;if(k===null&&0==m.f2){Bg();k=AEz;}j=m.f2;c.hV(g,0,j);if(k!==null)break;}}b.fb(BG(b)-(f-e|0)|0);return k;}
function JT(){Ed.call(this);}
function ACk(a){var b=new JT();US(b,a);return b;}
function US(a,b){Je(a,b,2.0,4.0);}
function ZV(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(h.dy(2))break a;Bg();i=AEx;break a;}k=e.data;n=f+1|0;k[f]=(192|l>>6)<<24>>24;m=n+1|0;k[n]=(128|l&63)<<24>>24;}else if(!D3(l)){if((f+3|0)>g){j=j+(-1)|0;if(h.dy(3))break a;Bg();i=AEx;break a;}k=e.data;o=f+1|0;k[f]=(224|l>>12)<<24>>24;n=o+1|0;k[o]=(128|l>>6&63)<<24>>24;m=n+1|0;k[n]=(128|l&63)<<24>>24;}else{if
(!Bl(l)){i=BL(1);break a;}if(j>=d){if(h.di())break a;Bg();i=AEz;break a;}n=j+1|0;p=k[j];if(!Bt(p)){j=n+(-2)|0;i=BL(1);break a;}if((f+4|0)>g){j=n+(-2)|0;if(h.dy(4))break a;Bg();i=AEx;break a;}k=e.data;q=BS(l,p);j=f+1|0;k[f]=(240|q>>18)<<24>>24;o=j+1|0;k[j]=(128|q>>12&63)<<24>>24;j=o+1|0;k[o]=(128|q>>6&63)<<24>>24;m=j+1|0;k[j]=(128|q&63)<<24>>24;j=n;}c=j;f=m;}j=c;}h.f8(j);h.eL(f);return i;}
function Ja(){K.call(this);}
function ACV(){var a=new Ja();Q5(a);return a;}
function Q5(a){Q(a);}
function Yq(a){return AB3(a);}
function Ko(){C.call(this);}
function XI(){var a=new Ko();P5(a);return a;}
function P5(a){L(a);}
function Pt(a,b,c){var d,e,$$je;a:{try{d=Ip(a,b,EC(c));}catch($$e){$$je=Bd($$e);if($$je instanceof BY){e=$$je;break a;}else{throw $$e;}}return d;}Ci().o(B(285));e.eu();return 0;}
function Ip(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,$$je;Fw();d=AEM;e=Ej(c);a:{try{f=0;while(true){g=e.ek();if(g===null)break;h=g.cu(35);if(h>=0)g=g.ce(0,h);i=g.hM();if(!i.g())continue;if(i.fJ(B(286))){j=B8(i,58);try{g=GZ(j.E(0).c2());d=g;k=0;f=k;d=g;f=k;continue;}catch($$e){$$je=Bd($$e);if($$je instanceof Br){}else{throw $$e;}}Ci().o(J().a(B(287)).a(j.E(0)).f());continue;}if(d===AEM){j=B8(i,32);l=0;while(l<b.eh()){m=b.dH(f,l);if(m!==null)m.ly(JR(j.E(l)));l=l+1|0;}f=f+1|0;}else if(d===AEN){j=B8(i,32);l=0;while(l
<b.eh()){m=b.dH(f,l);if(m!==null)m.lD(DE(j.E(l)));l=l+1|0;}f=f+1|0;}else if(d===AEO){b:{j=B8(i,32);if(f){n=f-1|0;o=0;while(true){if(o>=j.U())break b;b.lA(n,o,DE(j.E(o)));o=o+1|0;}}o=0;while(o<j.U()){b.jJ(o,DE(j.E(o)));o=o+1|0;}}f=f+1|0;}else if(d===AEP){j=B8(i,32);c:{try{b.km(Ho(j.E(0).c2()));break c;}catch($$e){$$je=Bd($$e);if($$je instanceof Br){}else{throw $$e;}}Ci().o(J().a(B(288)).a(j.E(0)).f());}f=f+1|0;}}break a;}catch($$e){$$je=Bd($$e);g=$$je;}e.bG();G(g);}e.bG();return 1;}
function HS(b,c){return b!=c?0:1;}
function Ux(b,c){var d;d=b-c|0;return d!=1&&d!=(-1)?0:1;}
function L9(b,c){var d,e;d=b<=4?b:9-b|0;e=c<=4?c:9-c|0;if(d<e)c=b;return c;}
function Io(){R.call(this);}
function ABT(){var a=new Io();Z3(a);return a;}
function Z3(a){Bn(a);}
function Zy(a,b,c,d){return b;}
function QS(a,b){return 0;}
function C1(){BO.call(this);}
function Ca(){var a=new C1();P2(a);return a;}
function BV(a){var b=new C1();AAi(b,a);return b;}
function P2(a){C3(a);}
function AAi(a,b){M2(a,b);}
function EI(){Ch.call(this);}
function AFY(a,b,c,d,e){var f=new EI();HH(f,a,b,c,d,e);return f;}
function HH(a,b,c,d,e,f){Dp(a,b,c,d,e,f);Ea();c.s(AEA);}
function X9(a,b,c,d){var e,f,g;e=0;f=a.cm.cZ();a:{while(true){g=a.w.b(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.cm.cW())return (-1);return a.e.b(b,c,d);}
function MP(){Ds.call(this);}
function XS(){var a=new MP();Yb(a);return a;}
function Yb(a){Jd(a,B(284),E(Bh,0));}
function Uo(a){return ABW(a);}
function Yf(a){return ACk(a);}
function GC(){R.call(this);this.cn=0;}
function AAY(a){var b=new GC();AAq(b,a);return b;}
function AAq(a,b){Bn(a);a.cn=b;}
function Yj(a,b,c,d){var e,f,g;e=!d.cP()?c.g()-b|0:d.bv()-b|0;if(!e){d.C(a.cn,0);return a.e.b(b,c,d);}if(e<2){f=c.d(b);g=97;}else{f=c.d(b);g=c.d(b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:d.C(a.cn,0);return a.e.b(b,c,d);case 13:if(g!=10){d.C(a.cn,0);return a.e.b(b,c,d);}d.C(a.cn,0);return a.e.b(b,c,d);default:}return (-1);}
function SP(a,b){var c;c=!b.bD(a.cn)?0:1;b.C(a.cn,(-1));return c;}
function Ii(){C.call(this);}
function Hn(){var a=this;Cy.call(a);a.dp=null;a.cV=null;a.b0=0;a.d3=0;a.eP=0;a.hH=0;}
function AFZ(a,b){var c=new Hn();J2(c,a,b);return c;}
function Ej(a){var b=new Hn();Uq(b,a);return b;}
function J2(a,b,c){EN(a);a.hH=(-1);if(c<0)G(Cv());a.dp=b;a.cV=$rt_createCharArray(Bq(64,c));}
function Uq(a,b){J2(a,b,1024);}
function Z8(a){FG(a);a.dp.bG();a.dp=null;}
function ZS(a){var b,c,d,e;FG(a);if(a.eP&&a.b0>=a.d3)return null;b=J();a:{while(true){if(a.b0>=a.d3&&!Ez(a,0))break a;c=a.cV.data;d=a.b0;a.b0=d+1|0;e=c[d];if(e==10)break;if(e==13){if(a.b0>=a.d3&&!Ez(a,0))break a;if(a.cV.data[a.b0]!=10)break a;a.b0=a.b0+1|0;break a;}b.bx(e);}}return b.f();}
function Ez(a,b){var c;if(a.eP)return 0;a:{while(true){if(b>=a.cV.data.length)break a;c=a.dp.kk(a.cV,b,a.cV.data.length-b|0);if(c==(-1)){a.eP=1;break a;}if(!c)break;b=b+c|0;}}a.d3=b;a.b0=0;a.hH=(-1);return 1;}
function FG(a){if(a.dp!==null)return;G(PC());}
function It(){K.call(this);}
function ACn(){var a=new It();Oi(a);return a;}
function Oi(a){Q(a);}
function Tl(a){return ABA(a);}
function Jc(){I.call(this);this.jR=null;}
function ABh(a){var b=new Jc();Nw(b,a);return b;}
function Nw(a,b){a.jR=b;P(a);}
function Xu(a,b){return MA(b);}
function Jk(){K.call(this);}
function ABF(){var a=new Jk();OU(a);return a;}
function OU(a){Q(a);}
function Nr(a){return AB2(a);}
function Hp(){Br.call(this);}
function C0(){var a=new Hp();UU(a);return a;}
function UU(a){C4(a);}
function Dy(){V.call(this);this.cH=0;}
function Yp(a){var b=new Dy();Qf(b,a);return b;}
function Qf(a,b){BC(a);a.cH=b;}
function R0(a,b){a.e=b;}
function N3(a,b,c,d){var e,f,g,h,i;e=d.q();f=b+1|0;g=BW(f,e);if(g>0){d.by=1;return (-1);}h=c.d(b);if(g<0){i=c.d(f);if(Bt(i))return (-1);}if(a.cH!=h)return (-1);return a.e.b(f,c,d);}
function Rr(a,b,c,d){var e,f,g;if(!(c instanceof Bh))return C7(a,b,c,d);e=c;f=d.q();while(true){if(b>=f)return (-1);g=e.cB(a.cH,b);if(g<0)return (-1);b=g+1|0;if(b<f&&Bt(e.d(b))){b=g+2|0;continue;}if(a.e.b(b,c,d)>=0)break;}return g;}
function T_(a,b,c,d,e){var f,g,h,i;if(!(d instanceof Bh))return Db(a,b,c,d,e);f=d;g=e.q();a:{while(true){if(c<b)return (-1);h=f.er(a.cH,c);if(h<0)break a;if(h<b)break a;i=h+1|0;if(i<g&&Bt(f.d(i))){c=h+(-1)|0;continue;}if(a.e.b(i,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function TL(a,b){if(b instanceof B1)return 0;if(b instanceof B3)return 0;if(b instanceof BJ)return 0;if(b instanceof B0)return 0;if(b instanceof Do)return 0;if(!(b instanceof Dy))return 1;return b.cH!=a.cH?0:1;}
function RQ(a,b){return 1;}
function LS(){Cd.call(this);}
function ADi(a,b,c,d){var e=new LS();Rp(e,a,b,c,d);return e;}
function Rp(a,b,c,d,e){Gh(a,b,c,d,e);}
function UB(a,b,c,d){var e,f,g,h,i;e=a.cl.cW();f=a.cl.cZ();g=0;while(true){if(g>=e){a:{while(true){h=a.e.b(b,c,d);if(h>=0)break;if((b+a.B.ba()|0)<=d.q()){h=a.B.H(b,c);b=b+h|0;g=g+1|0;}if(h<1)break a;if(g>f)break a;}return h;}return (-1);}if((b+a.B.ba()|0)>d.q()){d.by=1;return (-1);}i=a.B.H(b,c);if(i<1)break;b=b+i|0;g=g+1|0;}return (-1);}
function GM(){T.call(this);}
function SM(a){var b=new GM();U7(b,a);return b;}
function RB(){var a=new GM();Su(a);return a;}
function U7(a,b){Df(a,b);}
function Su(a){BA(a);}
function LW(){R.call(this);}
function Wm(){var a=new LW();TZ(a);return a;}
function TZ(a){Bn(a);}
function AAs(a,b,c,d){if(b&&!(d.cP()&&b==d.bv()))return (-1);return a.e.b(b,c,d);}
function Yv(a,b){return 0;}
function JW(){I.call(this);this.lb=null;}
function ADc(a){var b=new JW();Wj(b,a);return b;}
function Wj(a,b){a.lb=b;P(a);}
function Sq(a,b){return Fr(b);}
function Kt(){var a=this;C.call(a);a.dT=null;a.hX=null;}
function AA9(a,b){var c=new Kt();WL(c,a,b);return c;}
function WL(a,b,c){a.hX=b;a.dT=c;L(a);}
function W1(a){if(a.dT.readyState==4&&a.dT.status==200)QR(a.hX,$rt_str(a.dT.responseText));}
function SG(a){a.jD();}
function LV(){C.call(this);}
function U(b,c){if(b<c)c=b;return c;}
function Bq(b,c){if(b>c)c=b;return c;}
function GE(b){if(b<=0)b= -b;return b;}
function Kp(){K.call(this);}
function ABE(){var a=new Kp();To(a);return a;}
function To(a){Q(a);}
function Pv(a){var b;b=AAX(a);b.y=1;return b;}
function FN(){var a=this;BO.call(a);a.hg=null;a.dJ=null;a.dq=0;}
function Ba(a,b,c){var d=new FN();HB(d,a,b,c);return d;}
function HB(a,b,c,d){C3(a);a.dq=(-1);a.hg=b;a.dJ=c;a.dq=d;}
function Yy(a){var b,c;b=B(21);if(a.dq>=1){c=$rt_createCharArray(a.dq);R_(c,32);b=Dn(c);}return J().a(a.hg).a(a.dJ!==null&&a.dJ.g()?J().n(a.dq).a(B(289)).a(a.dJ).a(B(289)).a(b).f():B(21)).f();}
function Ku(){K.call(this);}
function AAM(){var a=new Ku();S0(a);return a;}
function S0(a){Q(a);}
function Tr(a){var b;b=ADE(a);b.J.d6(0,2048);b.y=1;return b;}
function Di(){C.call(this);}
var AE9=null;var AE$=null;var AE8=null;function B2(){B2=Bc(Di);Re();}
function Re(){var b,c;b=E(De,11);c=b.data;c[0]=Z(B(290),B(21),B(291));c[1]=Z(B(292),B(21),B(293));c[2]=Z(B(294),B(21),B(295));c[3]=Z(B(296),B(21),B(297));c[4]=Z(B(298),B(21),B(299));c[5]=Z(B(300),B(21),B(301));c[6]=Z(B(302),B(21),B(303));c[7]=Z(B(304),B(21),B(305));c[8]=Z(B(306),B(21),B(307));c[9]=Z(B(308),B(21),B(309));c[10]=Z(B(310),B(21),B(311));AE9=b;b=E(De,4);c=b.data;c[0]=Z(B(312),B(313),B(314));c[1]=Z(B(315),B(316),B(317));c[2]=Z(B(318),B(319),B(320));c[3]=Z(B(321),B(322),B(323));AE$=b;b=E(De,10);c=b.data;c[0]
=Z(B(254),B(324),B(325));c[1]=Z(B(326),B(327),B(328));c[2]=Z(B(329),B(330),B(331));c[3]=Z(B(332),B(333),B(334));c[4]=Z(B(335),B(336),B(337));c[5]=Z(B(338),B(339),B(340));c[6]=Z(B(341),B(342),B(343));c[7]=Z(B(344),B(345),B(346));c[8]=Z(B(347),B(348),B(349));c[9]=Z(B(350),B(351),B(352));AE8=b;}
function H7(){C.call(this);}
function ADa(){var a=new H7();QT(a);return a;}
function QT(a){L(a);}
function EV(){C.call(this);}
var AF0=null;function ACa(){ACa=Bc(EV);Og();}
function AA6(){var a=new EV();KI(a);return a;}
function KI(a){ACa();L(a);}
function Up(a,b,c,d){var e,f,g,h,i,j,k,l;e=Hv(a,b);f=M6(a,b,c);g=MY(a,b,c);h=M$(a,b,d);i=Id(a,b,d);j=JK(a,b,d);k=E($rt_arraycls($rt_doublecls()),3);l=k.data;l[0]=I0(a,b,c);l[1]=Mo(a,b,i);l[2]=IK(a,b,j);return ACL(b,e,f,g,h,i,j,k);}
function Hv(a,b){var c,d,e,f;c=BX();d=b.d8();if(b.d4()>4)c.bo(B(353));e=65;while(e<=90){if(d.cu(e)<0)c.bo(J().a(B(354)).bx(e).a(B(355)).f());e=(e+1|0)&65535;}f=0;while(f<d.g()){e=d.d(f);f=f+1|0;if(d.cB(e,f)>=0)c.bo(J().a(B(354)).bx(e).a(B(356)).f());}return c;}
function M6(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=AAw();e=0;while(e<b.d4()){f=0;while(f<b.eh()){g=b.dH(e,f);if(g!==null){h=Fz(0.0);i=g.dS().data;j=i.length;k=0;while(k<j){l=i[k];m=JO(l,c);if(m!==null)h=Fz(h.dR()+m.bP());k=k+1|0;}d.hB(g,h);}f=f+1|0;}e=e+1|0;}return d;}
function MY(a,b,c){var d,e,f,g,h,i,j;d=$rt_createDoubleArray(10);e=c.Y();while(e.Z()){f=e.W();g=f.cf();h=b.ca(g);if(h!==null){i=d.data;j=h.bj();i[j]=i[j]+f.bP();}}return d;}
function M$(a,b,c){var d,e,f,g,h,i,j;d=0.0;e=c.Y();while(e.Z()){f=e.W();g=f.dF().cq();h=g.data;i=b.ca(h[0]);j=b.ca(h[1]);if(i.gq()!=j.gq())d=d+f.bP();}return d;}
function Id(a,b,c){var d,e,f,g,h,i,j,k;d=BX();e=c.Y();while(e.Z()){f=e.W();g=f.dF().cq();h=g.data;i=b.ca(h[0]);j=b.ca(h[1]);if(i!==null&&j!==null&&h[0]!=h[1]&&HS(i.bj(),j.bj())){k=Rn(i,j,f);d.bo(k);}}return d;}
function JK(a,b,c){var d,e,f,g,h,i,j,k,l;d=BX();e=c.Y();while(e.Z()){f=e.W();g=f.dF().cq();h=g.data;i=b.ca(h[0]);j=b.ca(h[1]);if(i!==null&&j!==null&&Ux(i.bj(),j.bj())){k=L9(i.bj(),j.bj());if(b.k2(k)){l=Rn(i,j,f);d.bo(l);}}}return d;}
function I0(a,b,c){var d,e,f,g,h,i,j,k,l;d=$rt_createDoubleArray(10);e=b.d8().cq().data;f=e.length;g=0;while(g<f){h=e[g];i=b.ca(h);j=JO(h,c);if(j!==null){k=d.data;l=i.bj();k[l]=k[l]+i.iU()*j.bP();}g=g+1|0;}return d;}
function Mo(a,b,c){var d,e,f,g,h,i,j;d=$rt_createDoubleArray(10);e=c.Y();while(e.Z()){f=d.data;g=e.W();h=g.cY().bj();i=U(2,GE(g.cY().dn()-g.en().dn()|0));j=b.k3(i);f[h]=f[h]+g.du().bP()*j;}return d;}
function IK(a,b,c){var d,e,f,g,h,i,j,k,l;d=$rt_createDoubleArray(10);e=c.Y();while(e.Z()){f=d.data;g=e.W();h=g.cY().bj();i=g.en().bj();j=L9(h,i);k=U(2,GE(g.cY().dn()-g.en().dn()|0));l=b.lT(j,k);f[j]=f[j]+g.du().bP()*l;}return d;}
function Og(){AF0=BX();}
function LK(){var a=this;C.call(a);a.c=null;a.bm=0;a.fj=null;a.gX=0;a.bS=0;a.b6=0;a.O=0;a.eI=null;}
function AA0(){var a=new LK();Oe(a);return a;}
function Lb(a,b){return ACG(a,b);}
function HA(a,b,c){var d,e,f,g,h,i;d=BX();e=Lb(a,b);f=0;g=0;if(!b.g()){h=E(Bh,1);h.data[0]=B(21);return h;}while(K6(e)){i=f+1|0;if(i>=c&&c>0)break;d.bo(b.fp(g,Me(e)).f());g=Ki(e);f=i;}a:{d.bo(b.fp(g,b.g()).f());i=f+1|0;if(!c)while(true){i=i+(-1)|0;if(i<0)break;if(d.E(i).f().g())break a;d.iC(i);}}if(i<0)i=0;return d.jm(E(Bh,i));}
function Hz(a,b){return HA(a,b,0);}
function DL(a){return a.c.f();}
function Uz(b,c){if(b===null)G(SM(B(357)));if(c&&(c|255)!=255)G(By(B(21)));Jh();AEj=1;return Ky(AA0(),b,c);}
function Ky(a,b,c){a.c=ACA(b,c);a.bm=c;a.eI=Gd(a,(-1),a.bm,null);if(a.c.Q()){Kk(a);return a;}G(Ba(B(21),a.c.f(),a.c.bt()));}
function L2(a,b){var c,d,e;c=AC3(Bb(a,2),Bb(a,64));while(!a.c.Q()){d=a.c;if(!d.co())break;d=a.c;if(d.bh()&&a.c.bh()!=(-536870788)){d=a.c;if(d.bh()!=(-536870871))break;}c.be(a.c.l());if(a.c.R()!=(-536870788))continue;a.c.l();}e=Ec(a,c);e.s(b);return e;}
function Gd(a,b,c,d){var e,f,g,h,i,j;e=BX();f=a.bm;g=0;if(c!=a.bm)a.bm=c;a:{switch(b){case -1073741784:h=new F_;i=a.O+1|0;a.O=i;G7(h,i);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new Fu;i=a.O+1|0;a.O=i;Lm(h,i);break a;case -33554392:h=new Ey;i=a.O+1|0;a.O=i;Ms(h,i);break a;default:a.bS=a.bS+1|0;if(d!==null)h=AB7(a.bS);else{h=ADg();g=1;}if(a.bS<=(-1))break a;if(a.bS>=10)break a;a.fj.data[a.bS]=h;break a;}h=AAU();}while(true){if(a.c.co()&&a.c.bh()==(-536870788))j=L2(a,h);else if
(a.c.R()==(-536870788)){j=Cu(h);a.c.l();}else{j=Fi(a,h);if(a.c.R()==(-536870788))a.c.l();}if(j!==null)e.bo(j);if(a.c.Q())break;if(a.c.R()==(-536870871))break;}if(a.c.kO()==(-536870788))e.bo(Cu(h));if(a.bm!=f&&!g){a.bm=f;a.c.kA(a.bm);}switch(b){case -1073741784:break;case -536870872:return ACb(e,h);case -268435416:return AAQ(e,h);case -134217688:return AB1(e,h);case -67108824:return ACO(e,h);case -33554392:return ABa(e,h);default:switch(e.U()){case 0:break;case 1:return ABt(e.E(0),h);default:return ADG(e,h);}return Cu(h);}return ADp(e,
h);}
function JJ(a){var b,c,d;b=SR();while(!a.c.Q()){c=a.c;if(!c.co())break;c=a.c;if(c.hI())break;c=a.c;if(c.iV())break;c=a.c;if(!(!c.fi()&&!a.c.bh())){c=a.c;if(!(!c.fi()&&DX(a.c.bh()))){c=a.c;if(c.bh()!=(-536870871)){c=a.c;if((c.bh()&(-2147418113))!=(-2147483608)){c=a.c;if(c.bh()!=(-536870788)){c=a.c;if(c.bh()!=(-536870876))break;}}}}}d=a.c.l();if(!DZ(d))b.gZ(d&65535);else b.kx(CJ(d));}if(!Bb(a,2))return ADn(b);if(Bb(a,64))return ADK(b);return ADV(b);}
function JV(a){var b,c,d,e,f,g,h,i,j,k;b=$rt_createIntArray(4);c=0;d=(-1);e=(-1);if(!a.c.Q()&&a.c.co()){f=b.data;d=a.c.l();f[c]=d;e=d-4352|0;}if(e>=0&&e<19){g=$rt_createCharArray(3);f=g.data;f[c]=d&65535;h=a.c.R();i=h-4449|0;if(i>=0&&i<21){f[1]=h&65535;a.c.l();j=a.c.R();h=j-4519|0;if(h>=0&&h<28){f[2]=j&65535;a.c.l();return Wy(g,3);}return Wy(g,2);}if(!Bb(a,2))return JU(f[0]);if(Bb(a,64))return SH(f[0]);return R$(f[0]);}k=1;while(k<4&&!a.c.Q()&&a.c.co()){f=b.data;j=k+1|0;f[k]=a.c.l();k=j;}if(k==1){f=b.data;if
(!Ng(f[0]))return F7(a,f[0]);}if(!Bb(a,2))return ADP(b,k);if(Bb(a,64))return AC7(b,k);return ADI(b,k);}
function Fi(a,b){var c,d,e,f;if(a.c.co()&&!a.c.fi()&&DX(a.c.bh())){if(!Bb(a,128)){if(!a.c.hI()&&!a.c.iV())c=JJ(a);else{d=F3(a,b);c=D6(a,b,d);}}else{c=JV(a);if(!a.c.Q()){e=a.c;if(!(e.R()==(-536870871)&&!(b instanceof Cp))){e=a.c;if(e.R()!=(-536870788)&&!a.c.co())c=D6(a,b,c);}}}}else if(a.c.R()!=(-536870871)){d=F3(a,b);c=D6(a,b,d);}else{if(b instanceof Cp)G(Ba(B(21),a.c.f(),a.c.bt()));c=Cu(b);}a:{if(!a.c.Q()){e=a.c;if(!(e.R()==(-536870871)&&!(b instanceof Cp))){e=a.c;if(e.R()!=(-536870788)){f=Fi(a,b);if(c instanceof Bw
&&!(c instanceof Cd)&&!(c instanceof Bv)&&!(c instanceof Cb)){e=c;if(!f.X(e.ef()))c=ABS(e);}if((f.cK()&65535)!=43)c.s(f);else c.s(f.ef());break a;}}}if(c===null)return null;c.s(b);}if((c.cK()&65535)!=43)return c;return c.ef();}
function D6(a,b,c){var d,e,f,g,h,i,j;d=a.c.R();if(c!==null&&!(c instanceof Y)){switch(d){case -2147483606:a.c.l();return ACm(c,b,d);case -2147483605:a.c.l();return AA1(c,b,(-2147483606));case -2147483585:a.c.l();return ABk(c,b,(-536870849));case -2147483525:e=new EI;f=a.c.ct();g=a.b6+1|0;a.b6=g;HH(e,f,c,b,(-536870849),g);return e;case -1073741782:case -1073741781:a.c.l();h=ACI(c,b,d);c.s(h);return h;case -1073741761:a.c.l();h=ACs(c,b,(-536870849));c.s(b);return h;case -1073741701:h=new Fe;e=a.c;e=e.ct();i=a.b6
+1|0;a.b6=i;HC(h,e,c,b,(-536870849),i);c.s(h);return h;case -536870870:case -536870869:a.c.l();h=c.cK()!=(-2147483602)?ABP(c,b,d):Bb(a,32)?ACT(c,b,d):ABD(c,b,d,Fo(a.bm));c.s(h);return h;case -536870849:a.c.l();h=ADt(c,b,(-536870849));c.s(b);return h;case -536870789:h=new Ch;e=a.c;e=e.ct();g=a.b6+1|0;a.b6=g;Dp(h,e,c,b,(-536870849),g);c.s(h);return h;default:}return c;}j=null;if(c!==null)j=c;switch(d){case -2147483606:case -2147483605:a.c.l();h=ACc(j,b,d);j.s(h);return h;case -2147483585:a.c.l();return AA2(j,
b,(-2147483585));case -2147483525:return AC5(a.c.ct(),j,b,(-2147483525));case -1073741782:case -1073741781:a.c.l();h=ACS(j,b,d);j.s(h);return h;case -1073741761:a.c.l();return ACp(j,b,(-1073741761));case -1073741701:return ADi(a.c.ct(),j,b,(-1073741701));case -536870870:case -536870869:a.c.l();h=ABN(j,b,d);j.s(h);return h;case -536870849:a.c.l();return AAV(j,b,(-536870849));case -536870789:return ACi(a.c.ct(),j,b,(-536870789));default:}return c;}
function F3(a,b){var c,d,e,f,g,h,i,j,k,l;c=null;while(true){a:{d=a.c.R();if((d&(-2147418113))==(-2147483608)){a.c.l();e=(d&16711680)>>16;d=d&(-16711681);if(d==(-16777176))a.bm=e;else{if(d!=(-1073741784))e=a.bm;c=Gd(a,d,e,b);if(a.c.R()!=(-536870871))G(Ba(B(21),a.c.f(),a.c.bt()));a.c.l();}}else{b:{c:{switch(d){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:f=(d&2147483647)-48|0;if(a.bS<f)G(Ba(B(21),a.c.f(),
a.c.bt()));a.c.l();a.O=a.O+1|0;c=!Bb(a,2)?AA$(f,a.O):Bb(a,64)?ADe(f,a.O):ADC(f,a.O);a.fj.data[f].ff=1;a.gX=1;break a;case -2147483583:break;case -2147483582:a.c.l();c=V3(0);break a;case -2147483577:a.c.l();c=ACj();break a;case -2147483558:a.c.l();c=new FX;g=a.O+1|0;a.O=g;Ks(c,g);break a;case -2147483550:a.c.l();c=V3(1);break a;case -2147483526:a.c.l();c=ACN();break a;case -536870876:break c;case -536870866:a.c.l();if(Bb(a,32)){c=ADj();break a;}c=ABZ(Fo(a.bm));break a;case -536870821:a.c.l();h=0;if(a.c.R()==
(-536870818)){h=1;a.c.l();}c=HK(a,h,b);if(a.c.R()!=(-536870819))G(Ba(B(21),a.c.f(),a.c.bt()));a.c.d5(1);a.c.l();break a;case -536870818:a.c.l();a.O=a.O+1|0;if(!Bb(a,8)){c=Wm();break a;}c=ACP(Fo(a.bm));break a;case 0:i=a.c.fh();if(i!==null)c=Ec(a,i);else{if(a.c.Q()){c=Cu(b);break a;}c=JU(d&65535);}a.c.l();break a;default:break b;}a.c.l();c=Wm();break a;}a.c.l();a.O=a.O+1|0;if(Bb(a,8)){if(Bb(a,1)){c=ADf(a.O);break a;}c=AAY(a.O);break a;}if(Bb(a,1)){c=AAK(a.O);break a;}c=ACg(a.O);break a;}if(d>=0&&!a.c.dd()){c
=F7(a,d);a.c.l();}else if(d==(-536870788))c=Cu(b);else{if(d!=(-536870871)){j=new FN;k=a.c;if(!k.dd()){g=d&65535;k=FV(g);}else k=a.c.fh().f();l=a.c;HB(j,k,l.f(),a.c.bt());G(j);}if(b instanceof Cp)G(Ba(B(21),a.c.f(),a.c.bt()));c=Cu(b);}}}if(d!=(-16777176))break;}return c;}
function HK(a,b,c){var d,e;d=Cs(a,b);e=Ec(a,d);e.s(c);return e;}
function Cs(a,b){var c,d,e,f,g,h,i,j,k,$$je;c=ACF(b,Bb(a,2),Bb(a,64));d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(a.c.Q())break a;f=a.c.R()==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(a.c.R()){case -536870874:if(d>=0)c.be(d);d=a.c.l();if(a.c.R()!=(-536870874)){d=38;break d;}if(a.c.bh()==(-536870821)){a.c.l();e=1;d=(-1);break d;}a.c.l();if(g){c=Cs(a,0);break d;}if(a.c.R()==(-536870819))break d;c.go(Cs(a,0));break d;case -536870867:if(!g&&a.c.bh()!=(-536870819)){h=a.c;if(h.bh()!=(-536870821)&&d>=0){a.c.l();i=
a.c.R();if(a.c.dd())break c;if(i<0){h=a.c;if(h.bh()!=(-536870819)){h=a.c;if(h.bh()!=(-536870821)&&d>=0)break c;}}e:{try{if(DX(i))break e;i=i&65535;break e;}catch($$e){$$je=Bd($$e);if($$je instanceof Br){break b;}else{throw $$e;}}}try{c.I(d,i);}catch($$e){$$je=Bd($$e);if($$je instanceof Br){break b;}else{throw $$e;}}a.c.l();d=(-1);break d;}}if(d>=0)c.be(d);d=45;a.c.l();break d;case -536870821:if(d>=0){c.be(d);d=(-1);}a.c.l();j=0;if(a.c.R()==(-536870818)){a.c.l();j=1;}if(!e)c.jK(Cs(a,j));else c.go(Cs(a,j));e=
0;a.c.l();break d;case -536870819:if(d>=0)c.be(d);d=93;a.c.l();break d;case -536870818:if(d>=0)c.be(d);d=94;a.c.l();break d;case 0:if(d>=0)c.be(d);k=a.c.fh();if(k===null)d=0;else{c.lF(k);d=(-1);}a.c.l();break d;default:}if(d>=0)c.be(d);d=a.c.l();}g=0;}G(Ba(B(21),DL(a),a.c.bt()));}G(Ba(B(21),DL(a),a.c.bt()));}if(!f){if(d>=0)c.be(d);return c;}G(Ba(B(21),DL(a),a.c.bt()-1|0));}
function F7(a,b){var c;c=DZ(b);if(Bb(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return R$(b&65535);}if(Bb(a,64)&&b>128){if(c)return ABo(b);if(Fc(b))return P0(b&65535);if(!Ek(b))return SH(b&65535);return Yp(b&65535);}}if(c)return ABv(b);if(Fc(b))return P0(b&65535);if(!Ek(b))return JU(b&65535);return Yp(b&65535);}
function Ec(a,b){var c,d;if(!b.jy()){if(!b.gv()){if(b.ci())return Xp(b);return V6(b);}if(b.ci())return Po(b);return Zq(b);}c=b.jk();d=AAR(c);if(!b.gv()){if(b.ci())return E0(Xp(b.dL()),d);return E0(V6(b.dL()),d);}if(b.ci())return E0(Po(b.dL()),d);return E0(Zq(b.dL()),d);}
function TI(b){return Uz(b,0);}
function Kk(a){if(a.gX)a.eI.bB();}
function Zw(b){var c,d,e,f;c=J().a(B(358));d=0;while(true){e=b.gI(B(359),d);if(e<0)break;f=e+2|0;c.a(b.ce(d,f)).a(B(360));d=f;}return c.a(b.e$(d)).a(B(359)).f();}
function G9(a){return a.bS;}
function K3(a){return a.b6+1|0;}
function If(a){return a.O+1|0;}
function C6(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function Bb(a,b){return (a.bm&b)!=b?0:1;}
function Oe(a){L(a);a.fj=E(Bs,10);a.bS=(-1);a.b6=(-1);a.O=(-1);}
function Jx(){CM.call(this);}
function ABk(a,b,c){var d=new Jx();V2(d,a,b,c);return d;}
function V2(a,b,c,d){Eu(a,b,c,d);Ea();b.s(AEA);}
function Zb(a,b,c,d){var e;e=a.w.b(b,c,d);if(e<=0)e=b;return a.e.b(e,c,d);}
function PE(a,b){a.e=b;}
function Lu(){T.call(this);}
function I5(){var a=new Lu();Wf(a);return a;}
function Wf(a){BA(a);}
function Hb(){K.call(this);}
function AAN(){var a=new Hb();NA(a);return a;}
function NA(a){Q(a);}
function Yl(a){var b;b=ACH(a);b.y=1;return b;}
function Mu(){var a=this;DG.call(a);a.c8=0;a.bp=null;a.es=0;a.i5=0.0;a.f3=0;}
function AAw(){var a=new Mu();Us(a);return a;}
function AF1(a){var b=new Mu();Gx(b,a);return b;}
function AF2(a,b){var c=new Mu();L$(c,a,b);return c;}
function W2(a,b){return E(ED,b);}
function Us(a){Gx(a,16);}
function Gx(a,b){L$(a,b,0.75);}
function LX(b){var c,d;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;d=c|c>>1;d=d|d>>2;d=d|d>>4;d=d|d>>8;d=d|d>>16;return d+1|0;}
function L$(a,b,c){var d;J3(a);if(b>=0&&c>0.0){d=LX(b);a.c8=0;a.bp=a.he(d);a.i5=c;Fa(a);return;}G(Cv());}
function Fa(a){a.f3=a.bp.data.length*a.i5|0;}
function Xc(a,b){var c;c=Hm(a,b);if(c===null)return null;return c.ee;}
function Hm(a,b){var c,d,e;if(b===null)c=Gi(a);else{d=I1(b);e=d&(a.bp.data.length-1|0);c=FC(a,b,e,d);}return c;}
function FC(a,b,c,d){var e,f;e=a.bp.data[c];while(e!==null){if(e.eU==d){f=e.fo;if(Qd(b,f))break;}e=e.df;}return e;}
function Gi(a){var b;b=a.bp.data[0];while(b!==null&&b.fo!==null){b=b.df;}return b;}
function Pc(a,b,c){return a.lp(b,c);}
function WA(a,b,c){var d,e,f,g,h;if(b===null){d=Gi(a);if(d===null){a.es=a.es+1|0;d=a.hz(null,0,0);e=a.c8+1|0;a.c8=e;if(e>a.f3)a.hy();}}else{f=I1(b);g=f&(a.bp.data.length-1|0);d=FC(a,b,g,f);if(d===null){a.es=a.es+1|0;d=a.hz(b,g,f);e=a.c8+1|0;a.c8=e;if(e>a.f3)a.hy();}}h=d.ee;d.ee=c;return h;}
function R8(a,b,c,d){var e;e=ACr(b,d);e.df=a.bp.data[c];a.bp.data[c]=e;return e;}
function Wo(a,b){var c,d,e,f,g,h,i;c=LX(!b?1:b<<1);d=a.he(c);e=0;while(e<a.bp.data.length){f=a.bp.data[e];a.bp.data[e]=null;while(f!==null){g=d.data;h=f.eU&(c-1|0);i=f.df;f.df=g[h];g[h]=f;f=i;}e=e+1|0;}a.bp=d;Fa(a);}
function ST(a){a.kl(a.bp.data.length);}
function I1(b){return b.hL();}
function Qd(b,c){return b!==c&&!b.bO(c)?0:1;}
function G0(){R.call(this);this.c5=0;}
function ADf(a){var b=new G0();Xq(b,a);return b;}
function Xq(a,b){Bn(a);a.c5=b;}
function Qj(a,b,c,d){var e;e=!d.cP()?c.g()-b|0:d.q()-b|0;if(e<=0){d.C(a.c5,0);return a.e.b(b,c,d);}if(c.d(b)!=10)return (-1);d.C(a.c5,1);return a.e.b(b+1|0,c,d);}
function VP(a,b){var c;c=!b.bD(a.c5)?0:1;b.C(a.c5,(-1));return c;}
function HX(){C.call(this);}
function B8(b,c){var d,e,f;d=BX();e=SR();f=0;while(f<b.g()){if(b.d(f)!=c)e.gZ(b.d(f));if(!(b.d(f)!=c&&f!=(b.g()-1|0))&&e.g()>0){d.bo(e.f());e.dP(0);}f=f+1|0;}return d;}
function Ml(){K.call(this);}
function ACq(){var a=new Ml();AAh(a);return a;}
function AAh(a){Q(a);}
function Z4(a){var b;b=ADq(a);b.y=1;return b;}
function EK(){var a=this;C.call(a);a.fI=0;a.gx=0;a.id=null;}
function VI(a,b,c){var d=new EK();Vh(d,a,b,c);return d;}
function Vh(a,b,c,d){L(a);a.fI=b;a.gx=c;a.id=d;}
function DS(){var a=this;C.call(a);a.cM=0;a.dZ=0;}
var AEz=null;var AEx=null;function Bg(){Bg=Bc(DS);UH();}
function In(a,b){var c=new DS();Jy(c,a,b);return c;}
function Jy(a,b,c){Bg();L(a);a.cM=b;a.dZ=c;}
function OW(a){return a.cM?0:1;}
function W9(a){return a.cM!=1?0:1;}
function ZQ(a){return !a.hW()&&!a.fY()?0:1;}
function Xa(a){return a.cM!=2?0:1;}
function Xs(a){return a.cM!=3?0:1;}
function Vm(a){if(a.fQ())return a.dZ;G(ACZ());}
function BL(b){Bg();return In(2,b);}
function T2(a){switch(a.cM){case 0:G(ACD());case 1:G(ADy());case 2:G(ABR(a.dZ));case 3:G(ACE(a.dZ));default:}}
function UH(){AEz=In(0,0);AEx=In(1,0);}
function FX(){R.call(this);this.cQ=0;}
function ACg(a){var b=new FX();Ks(b,a);return b;}
function Ks(a,b){Bn(a);a.cQ=b;}
function Sa(a,b,c,d){var e,f,g,h;e=!d.cP()?c.g():d.q();if(b>=e){d.C(a.cQ,0);return a.e.b(b,c,d);}f=e-b|0;if(f==2&&c.d(b)==13){g=b+1|0;if(c.d(g)==10){d.C(a.cQ,0);return a.e.b(b,c,d);}}a:{if(f==1){h=c.d(b);if(h==10)break a;if(h==13)break a;if(h==133)break a;if((h|1)==8233)break a;}return (-1);}d.C(a.cQ,0);return a.e.b(b,c,d);}
function SL(a,b){var c;c=!b.bD(a.cQ)?0:1;b.C(a.cQ,(-1));return c;}
function JG(){B_.call(this);}
function ACJ(){var a=new JG();Xx(a);return a;}
function Xx(a){Fk(a);}
function UG(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function Yu(a,b,c){var d;a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}d=1;break a;}d=0;}return d;}
function JF(){B_.call(this);}
function ABM(){var a=new JF();QP(a);return a;}
function QP(a){Fk(a);}
function Sb(a,b){return b!=10?0:1;}
function S4(a,b,c){return b!=10?0:1;}
function LE(){CO.call(this);}
function M8(){K.call(this);}
function ABX(){var a=new M8();XK(a);return a;}
function XK(a){Q(a);}
function TH(a){var b;b=ADN(a);b.y=1;return b;}
function CW(){var a=this;C.call(a);a.r=null;a.cN=0;a.bF=0;a.ia=0;a.fH=0;a.bC=0;a.i=0;a.gF=0;a.cJ=null;a.cc=null;a.k=0;a.ds=0;a.dD=0;a.dr=0;a.hh=null;}
var AF3=null;var AF4=null;var AF5=0;function ACA(a,b){var c=new CW();WP(c,a,b);return c;}
function WP(a,b,c){L(a);a.bF=1;a.hh=b;if((c&16)>0)b=Zw(b);else if((c&128)>0)b=Te(b);a.r=$rt_createCharArray(b.g()+2|0);Gp(b.cq(),0,a.r,0,b.g());a.r.data[a.r.data.length-1|0]=0;a.r.data[a.r.data.length-2|0]=0;a.gF=a.r.data.length;a.cN=c;Cc(a);Cc(a);}
function ZZ(a){return a.bC;}
function Sd(a,b){if(b>0&&b<3)a.bF=b;if(b==1)Ll(a);}
function RK(a,b){a.cN=b;a.i=a.bC;a.cc=a.cJ;a.k=a.dD+1|0;a.dr=a.dD;Cc(a);}
function TV(a){return a.cJ;}
function RV(a){return a.cJ===null?0:1;}
function RA(a){return a.cc===null?0:1;}
function Tp(a){Cc(a);return a.fH;}
function SW(a){var b;b=a.cJ;Cc(a);return b;}
function P7(a){return a.i;}
function Vl(a){return a.fH;}
function Te(b){return b;}
function Ll(a){a.i=a.bC;a.cc=a.cJ;a.k=a.dr;a.dr=a.dD;Cc(a);}
function Cc(a){var b,c,d,e,f,g,h,$$je;a.fH=a.bC;a.bC=a.i;a.cJ=a.cc;a.dD=a.dr;a.dr=a.k;while(true){b=0;a.i=a.k>=a.r.data.length?0:DK(a);a.cc=null;if(a.bF==4){if(a.i!=92)return;a.i=a.k>=a.r.data.length?0:a.r.data[X(a)];switch(a.i){case 69:break;default:a.i=92;a.k=a.ds;return;}a.bF=a.ia;a.i=a.k>(a.r.data.length-2|0)?0:DK(a);}a:{if(a.i!=92){if(a.bF==1)switch(a.i){case 36:a.i=(-536870876);break a;case 40:if(a.r.data[a.k]!=63){a.i=(-2147483608);break a;}X(a);c=a.r.data[a.k];d=0;while(true){b:{if(d){d=0;switch(c){case 33:break;case 61:a.i
=(-134217688);X(a);break b;default:G(Ba(B(21),a.f(),a.k));}a.i=(-67108824);X(a);}else{switch(c){case 33:break;case 60:X(a);c=a.r.data[a.k];d=1;break b;case 61:a.i=(-536870872);X(a);break b;case 62:a.i=(-33554392);X(a);break b;default:a.i=MH(a);if(a.i<256){a.cN=a.i;a.i=a.i<<16;a.i=(-1073741784)|a.i;break b;}a.i=a.i&255;a.cN=a.i;a.i=a.i<<16;a.i=(-16777176)|a.i;break b;}a.i=(-268435416);X(a);}}if(!d)break;}break a;case 41:a.i=(-536870871);break a;case 42:case 43:case 63:e=a.k>=a.r.data.length?42:a.r.data[a.k];switch
(e){case 43:a.i=a.i|(-2147483648);X(a);break a;case 63:a.i=a.i|(-1073741824);X(a);break a;default:}a.i=a.i|(-536870912);break a;case 46:a.i=(-536870866);break a;case 91:a.i=(-536870821);a.d5(2);break a;case 93:if(a.bF!=2)break a;a.i=(-536870819);break a;case 94:a.i=(-536870818);break a;case 123:a.cc=Ln(a,a.i);break a;case 124:a.i=(-536870788);break a;default:}else if(a.bF==2)switch(a.i){case 38:a.i=(-536870874);break a;case 45:a.i=(-536870867);break a;case 91:a.i=(-536870821);break a;case 93:a.i=(-536870819);break a;case 94:a.i
=(-536870818);break a;default:}}else{f=a.k>=(a.r.data.length-2|0)?(-1):DK(a);c:{a.i=f;switch(a.i){case -1:G(Ba(B(21),a.f(),a.k));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.i
=HU(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.bF!=1)break a;a.i=(-2147483648)|a.i;break a;case 65:a.i=(-2147483583);break a;case 66:a.i=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:G(Ba(B(21),a.f(),a.k));case 68:case 83:case 87:case 100:case 115:case 119:a.cc=Gf(E_(a.r,
a.ds,1),0);a.i=0;break a;case 71:a.i=(-2147483577);break a;case 80:case 112:break c;case 81:a.ia=a.bF;a.bF=4;b=1;break a;case 90:a.i=(-2147483558);break a;case 97:a.i=7;break a;case 98:a.i=(-2147483550);break a;case 99:if(a.k>=(a.r.data.length-2|0))G(Ba(B(21),a.f(),a.k));a.i=a.r.data[X(a)]&31;break a;case 101:a.i=27;break a;case 102:a.i=12;break a;case 110:a.i=10;break a;case 114:a.i=13;break a;case 116:a.i=9;break a;case 117:a.i=Ft(a,4);break a;case 120:a.i=Ft(a,2);break a;case 122:a.i=(-2147483526);break a;default:}break a;}g
=Hr(a);h=0;if(a.i==80)h=1;try{a.cc=Gf(g,h);}catch($$e){$$je=Bd($$e);if($$je instanceof EE){G(Ba(B(21),a.f(),a.k));}else{throw $$e;}}a.i=0;}}if(b)continue;else break;}}
function Hr(a){var b,c,d;b=GS(10);if(a.k<(a.r.data.length-2|0)){if(a.r.data[a.k]!=123)return J().a(B(361)).a(E_(a.r,X(a),1)).f();X(a);c=0;a:{while(a.k<(a.r.data.length-2|0)){c=a.r.data[X(a)];if(c==125)break a;b.bx(c);}}if(c!=125)G(Ba(B(21),a.f(),a.k));}if(!b.g())G(Ba(B(21),a.f(),a.k));d=b.f();if(d.g()==1)return J().a(B(361)).a(d).f();b:{c:{if(d.g()>3){if(d.ej(B(361)))break c;if(d.ej(B(362)))break c;}break b;}d=d.e$(2);}return d;}
function Ln(a,b){var c,d,e,f,$$je;c=GS(4);d=(-1);e=2147483647;a:{while(true){if(a.k>=a.r.data.length)break a;b=a.r.data[X(a)];if(b==125)break a;if(b==44&&d<0)try{d=CX(c.f(),10);c.j0(0,c.g());continue;}catch($$e){$$je=Bd($$e);if($$je instanceof C1){break;}else{throw $$e;}}c.bx(b&65535);}G(Ba(B(21),a.f(),a.k));}if(b!=125)G(Ba(B(21),a.f(),a.k));if(c.g()>0)b:{try{e=CX(c.f(),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=Bd($$e);if($$je instanceof C1){}else{throw $$e;}}G(Ba(B(21),a.f(),a.k));}else if(d<0)G(Ba(B(21),
a.f(),a.k));if((d|e|(e-d|0))<0)G(Ba(B(21),a.f(),a.k));f=a.k>=a.r.data.length?42:a.r.data[a.k];c:{switch(f){case 43:a.i=(-2147483525);X(a);break c;case 63:a.i=(-1073741701);X(a);break c;default:}a.i=(-536870789);}return ABJ(d,e);}
function Wg(a){return a.hh;}
function X1(a){return !a.bC&&!a.i&&a.k==a.gF&&!a.dd()?1:0;}
function DX(b){return b<0?0:1;}
function YK(a){return !a.Q()&&!a.dd()&&DX(a.bC)?1:0;}
function Rf(a){return a.bC<=56319&&a.bC>=55296?1:0;}
function Tk(a){return a.bC<=57343&&a.bC>=56320?1:0;}
function Ek(b){return b<=56319&&b>=55296?1:0;}
function Fc(b){return b<=57343&&b>=56320?1:0;}
function Ft(a,b){var c,d,e,f,$$je;c=GS(b);d=a.r.data.length-2|0;e=0;while(true){f=BW(e,b);if(f>=0)break;if(a.k>=d)break;c.bx(a.r.data[X(a)]);e=e+1|0;}if(!f)a:{try{f=CX(c.f(),16);}catch($$e){$$je=Bd($$e);if($$je instanceof C1){break a;}else{throw $$e;}}return f;}G(Ba(B(21),a.f(),a.k));}
function HU(a){var b,c,d,e,f;b=3;c=1;d=a.r.data.length-2|0;e=E9(a.r.data[a.k],8);switch(e){case -1:break;default:if(e>3)b=2;X(a);a:{while(true){if(c>=b)break a;if(a.k>=d)break a;f=E9(a.r.data[a.k],8);if(f<0)break;e=(e*8|0)+f|0;X(a);c=c+1|0;}}return e;}G(Ba(B(21),a.f(),a.k));}
function MH(a){var b,c,d;b=1;c=a.cN;a:while(true){if(a.k>=a.r.data.length)G(Ba(B(21),a.f(),a.k));b:{c:{d=a.r.data[a.k];switch(d){case 41:X(a);return c|256;case 45:if(!b)G(Ba(B(21),a.f(),a.k));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}X(a);}X(a);return c;}
function X(a){a.ds=a.k;if(a.cN&4)HD(a);else a.k=a.k+1|0;return a.ds;}
function HD(a){var b;b=a.r.data.length-2|0;a.k=a.k+1|0;a:while(true){if(a.k<b&&I9(a.r.data[a.k])){a.k=a.k+1|0;continue;}if(a.k>=b)break;if(a.r.data[a.k]!=35)break;a.k=a.k+1|0;while(true){if(a.k>=b)continue a;if(K7(a,a.r.data[a.k]))continue a;a.k=a.k+1|0;}}return a.k;}
function K7(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function KU(b){return AF3.oA(b);}
function TF(b){var c,d,e,f,g,h,i;c=b-44032|0;if(c>=0&&c<11172){d=4352+(c/588|0)|0;e=4449+((c%588|0)/28|0)|0;f=c%28|0;if(!f){g=$rt_createIntArray(2);h=g.data;h[0]=d;h[1]=e;}else{i=4519+f|0;g=$rt_createIntArray(3);h=g.data;h[0]=d;h[1]=e;h[2]=i;}return g;}return null;}
function Ng(b){var c;c=AF4.fC(b);return c==AF5?0:1;}
function Q9(b){return (b!=832?0:1)|(b!=833?0:1)|(b!=835?0:1)|(b!=836?0:1);}
function DK(a){var b,c,d;b=a.r.data[X(a)];if(Bl(b)){c=a.ds+1|0;if(c<a.r.data.length){d=a.r.data[c];if(Bt(d)){X(a);return BS(b,d);}}}return b;}
function Rc(a){return a.dD;}
function Kf(){K.call(this);}
function ABs(){var a=new Kf();YP(a);return a;}
function YP(a){Q(a);}
function X2(a){return Bx().I(65279,65279).I(65520,65533);}
function Jw(){var a=this;C.call(a);a.hj=null;a.iR=0;}
function AB9(a){var b=new Jw();TW(b,a);return b;}
function TW(a,b){L(a);a.hj=b;}
function Mv(){Dm.call(this);}
function AAI(){var a=new Mv();XJ(a);return a;}
function XJ(a){L3(a);}
function QJ(a){var b;b=LU(a).b5(1);b.y=1;return b;}
function Mi(){C.call(this);this.hU=0;}
function ADM(a){var b=new Mi();Ut(b,a);return b;}
function Ut(a,b){L(a);a.hU=b;}
function RD(a,b){var c,d;c=AAS();d=ADo(c);Js(a,b,d);return c.kc(B(284));}
function Js(a,b,c){Jm(a,b.kq(),c);GP(a,b.k7(),c);Hd(a,b.hR(),c);Mc(a,b.hR(),a.hU,c);Lv(a,b.jz(),c);}
function Jm(a,b,c){var d,e;a:{if(b!==null){d=b.Y();while(true){if(!d.Z())break a;e=d.W();c.o(J().a(B(363)).a(e).a(B(364)).f());}}}}
function GP(a,b,c){var d,e,f,g,h,i,j;c.o(B(365));c.o(B(366));d=0.0;e=0.0;f=0;while(f<5){g=b.data;h=9-f|0;if(!(g[f]<=0.0&&g[h]<=0.0)){c.o(B(367));i=J().a(B(368)).n(f).a(B(369)).a(Bp(g[f],5)).a(B(370)).n(h).a(B(369));j=g[h];i=i.a(Bp(j,5)).a(B(371)).f();c.o(i);c.o(B(372));}d=d+g[f];e=e+g[h];f=f+1|0;}c.o(B(373));i=J().a(B(374)).a(Bp(d,5)).a(B(375));i=i.a(Bp(e,5)).a(B(371)).f();c.o(i);c.o(B(372));c.o(B(376));}
function Hd(a,b,c){var d,e,f,g,h,i,j;d=SN(b);c.o(B(377));c.o(B(366));e=0.0;f=0;while(f<5){g=d.data;h=9-f|0;if(!(g[f]<=0.0&&g[h]<=0.0)){c.o(B(367));i=J().a(B(368)).n(f).a(B(369)).a(Bp(g[f],5)).a(B(370)).n(h).a(B(369));j=g[h];i=i.a(Bp(j,5)).a(B(371)).f();c.o(i);c.o(B(372));j=e+g[f];e=j+g[h];}f=f+1|0;}c.o(B(373));i=J().a(B(378));i=i.a(Bp(e,5)).a(B(371)).f();c.o(i);c.o(B(372));c.o(B(376));}
function Mc(a,b,c,d){var e,f,g,h;d.o(B(379));d.o(B(366));e=0;f=b.Y();a:{while(true){if(!f.Z())break a;g=f.W();d.o(B(367));h=J().a(B(368)).n(g.cY().bj()).a(B(369));h=h.a(g.du().dF()).a(B(369));h=h.a(Bp(g.du().bP(),6)).a(B(371)).f();d.o(h);d.o(B(372));e=e+1|0;if(e>=c)break;}}d.o(B(376));}
function Lv(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;c.o(B(380));c.o(B(366));c.o(B(367));c.o(B(381));c.o(B(372));d=$rt_createDoubleArray(3);e=0;while(e<10){f=b.data;g=f[0].data[e]+f[1].data[e]+f[2].data[e];if(f[0].data[e]>0.0){h=d.data;c.o(B(367));i=J().a(B(368)).n(e).a(B(369)).a(Bp(f[0].data[e],5)).a(B(369));j=f[1].data[e];k=i.a(Bp(j,5)).a(B(369));j=f[2].data[e];i=k.a(Bp(j,5)).a(B(369));i=i.a(Bp(g,5)).a(B(371)).f();c.o(i);c.o(B(372));h[0]=h[0]+f[0].data[e];h[1]=h[1]+f[1].data[e];h[2]=h[2]+f[2].data[e];}e=e+1|0;}l=
d.data;m=l[1]+l[2];n=l[0]+m;c.o(B(373));i=J().a(B(382)).a(Bp(l[0],5)).a(B(369));j=l[1];i=i.a(Bp(j,5)).a(B(369));j=l[2];i=i.a(Bp(j,5)).a(B(369));i=i.a(Bp(n,5)).a(B(371)).f();c.o(i);c.o(B(372));c.o(B(376));}
function Bp(b,c){return $rt_str(b.toFixed(c));}
function B3(){var a=this;Y.call(a);a.cj=null;a.jO=0;}
function V6(a){var b=new B3();RU(b,a);return b;}
function RU(a,b){BH(a);a.cj=b.c3();a.jO=b.G;}
function Ni(a,b,c){return !a.cj.j(c.d(b))?(-1):1;}
function QW(a,b){if(b instanceof B1)return DU(a.cj,b.cf());if(b instanceof B3)return CV(a.cj,b.cj);if(b instanceof BJ)return CV(a.cj,b.fc());if(!(b instanceof B0))return 1;return 0;}
function Qz(a){return a.cj;}
function D7(){I.call(this);this.eV=0;}
function ADr(a){var b=new D7();HV(b,a);return b;}
function HV(a,b){P(a);a.eV=b;}
function QF(a,b){return a.G^(a.eV!=C_(b&65535)?0:1);}
function MC(){D7.call(this);}
function ABj(a){var b=new MC();O9(b,a);return b;}
function O9(a,b){HV(a,b);}
function Va(a,b){return a.G^(!(a.eV>>C_(b&65535)&1)?0:1);}
function Kn(){Cm.call(this);this.il=0;}
function ACE(a){var b=new Kn();Yo(b,a);return b;}
function Yo(a,b){Fp(a);a.il=b;}
function T0(a){return J().a(B(383)).n(a.il).f();}
function Jb(){var a=this;I.call(a);a.eO=0;a.gP=0;a.dW=0;a.f6=0;a.bI=0;a.cr=0;a.v=null;a.F=null;}
function Bx(){var a=new Jb();Z9(a);return a;}
function AC3(a,b){var c=new Jb();Jj(c,a,b);return c;}
function ACF(a,b,c){var d=new Jb();OD(d,a,b,c);return d;}
function Z9(a){P(a);a.v=AAz();}
function Jj(a,b,c){P(a);a.v=AAz();a.eO=b;a.gP=c;}
function OD(a,b,c,d){Jj(a,c,d);a.b5(b);}
function Nd(a,b){a:{if(a.eO){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.bI){a.v.eT(C6(b&65535));break a;}a.v.gc(C6(b&65535));break a;}if(a.gP&&b>128){a.dW=1;b=Co(Cn(b));}}}if(!(!Ek(b)&&!Fc(b))){if(a.f6)a.J.eT(b-55296|0);else a.J.gc(b-55296|0);}if(a.bI)a.v.eT(b);else a.v.gc(b);if(!a.y&&DZ(b))a.y=1;return a;}
function AAp(a,b){var c,d;if(!a.y&&b.y)a.y=1;if(a.f6){if(!b.T)a.J.cS(b.bb());else a.J.bu(b.bb());}else if(!b.T)a.J.cz(b.bb());else{a.J.cL(b.bb());a.J.bu(b.bb());a.T=a.T?0:1;a.f6=1;}if(!a.cr&&b.L()!==null){if(a.bI){if(!b.c0())a.v.cS(b.L());else a.v.bu(b.L());}else if(!b.c0())a.v.cz(b.L());else{a.v.cL(b.L());a.v.bu(b.L());a.G=a.G?0:1;a.bI=1;}}else{c=a.G;if(a.F!==null){d=a.F;if(!c)a.F=ACY(a,c,d,b);else a.F=ADR(a,c,d,b);}else{if(c&&!a.bI&&a.v.Q())a.F=ACy(a,b);else if(!c)a.F=AAL(a,c,b);else a.F=AB_(a,c,b);a.cr=1;}}return a;}
function WI(a,b,c){if(b>c)G(Cv());a:{if(!a.eO&&!(c>=55296&&b<=57343)){if(a.bI)a.v.jF(b,c+1|0);else a.v.d6(b,c+1|0);}else while(true){if(b>=(c+1|0))break a;a.be(b);b=b+1|0;}}return a;}
function NP(a,b){var c,d;if(!a.y&&b.y)a.y=1;if(b.ci())a.dW=1;if(!(a.T^b.T)){if(!a.T)a.J.cz(b.bb());else a.J.bu(b.bb());}else if(a.T)a.J.cS(b.bb());else{a.J.cL(b.bb());a.J.bu(b.bb());a.T=1;}if(!a.cr&&b.L()!==null){if(!(a.G^b.c0())){if(!a.G)a.v.cz(b.L());else a.v.bu(b.L());}else if(a.G)a.v.cS(b.L());else{a.v.cL(b.L());a.v.bu(b.L());a.G=1;}}else{c=a.G;if(a.F!==null){d=a.F;if(!c)a.F=ACo(a,c,d,b);else a.F=ADQ(a,c,d,b);}else{if(!a.bI&&a.v.Q()){if(!c)a.F=ACu(a,b);else a.F=AC9(a,b);}else if(!c)a.F=ABB(a,b,c);else a.F
=AA5(a,b,c);a.cr=1;}}}
function W$(a,b){var c,d;if(!a.y&&b.y)a.y=1;if(b.ci())a.dW=1;if(!(a.T^b.T)){if(!a.T)a.J.bu(b.bb());else a.J.cz(b.bb());}else if(!a.T)a.J.cS(b.bb());else{a.J.cL(b.bb());a.J.bu(b.bb());a.T=0;}if(!a.cr&&b.L()!==null){if(!(a.G^b.c0())){if(!a.G)a.v.bu(b.L());else a.v.cz(b.L());}else if(!a.G)a.v.cS(b.L());else{a.v.cL(b.L());a.v.bu(b.L());a.G=0;}}else{c=a.G;if(a.F!==null){d=a.F;if(!c)a.F=ADJ(a,c,d,b);else a.F=ACe(a,c,d,b);}else{if(!a.bI&&a.v.Q()){if(!c)a.F=ABe(a,b);else a.F=ABG(a,b);}else if(!c)a.F=ABx(a,b,c);else a.F
=ADH(a,b,c);a.cr=1;}}}
function SE(a,b){if(a.F!==null)return a.G^a.F.j(b);return a.G^a.v.bJ(b);}
function AAr(a){if(!a.cr)return a.v;return null;}
function U3(a){return a.J;}
function Wk(a){var b,c;if(a.F!==null)return a;b=a.L();c=ACx(a,b);return c.b5(a.c0());}
function Pn(a){var b,c;b=J();c=a.v.dj(0);while(c>=0){b.d$(CJ(c));b.bx(124);c=a.v.dj(c+1|0);}if(b.g()>0)b.iv(b.g()-1|0);return b.f();}
function VD(a){return a.dW;}
function KN(){T.call(this);}
function Yd(){var a=new KN();XR(a);return a;}
function XR(a){BA(a);}
function JC(){BU.call(this);}
function ACM(){var a=new JC();YB(a);return a;}
function YB(a){CR(a);}
function Xf(a,b){WQ(b);}
function WQ(b){$rt_putStderr(b);}
function JZ(){var a=this;C.call(a);a.fP=0;a.fq=0;a.g8=0;}
function ACU(){var a=new JZ();Ns(a);return a;}
function Ns(a){L(a);}
function Mb(){Cj.call(this);}
function AC7(a,b){var c=new Mb();X0(c,a,b);return c;}
function X0(a,b,c){ET(a,b,c);}
$rt_packages([-1,"java",0,"util",1,"regex",0,"nio",3,"charset",0,"io",0,"lang",-1,"io",7,"github",8,"colemakmods",9,"keyboard"]);
$rt_metadata([C,"Object",6,0,[],0,3,0,["nM",function(){return Cf(this);},"hL",function(){return Ts(this);},"bO",function(b){return N2(this,b);},"f",function(){return RX(this);},"lX",function(){return Er(this);},"dC",function(){return Z_(this);}],K,0,C,[],1,0,0,["kS",function(b){return Tn(this,b);}],M1,0,K,[],0,0,0,["u",function(){return Tv(this);}],JX,0,K,[],0,0,0,["u",function(){return Of(this);}],CL,0,C,[],0,3,0,["ed",function(){return Vw(this);},"dM",function(){return TQ(this);},"j2",function(){return Wz(this);
},"eu",function(){XE(this);},"ho",function(b){ZE(this,b);}],Br,0,CL,[],0,3,0,0,T,0,Br,[],0,3,0,0,C5,"IndexOutOfBoundsException",6,T,[],0,3,0,0,Ct,0,C,[],1,0,0,0,I,0,Ct,[],1,0,E5,["L",function(){return Rd(this);},"bb",function(){return PK(this);},"jy",function(){return N7(this);},"gv",function(){return Xn(this);},"c3",function(){return Vk(this);},"jk",function(){return Qc(this);},"dL",function(){return Ro(this);},"ci",function(){return YA(this);},"b5",function(b){return WE(this,b);},"c0",function(){return VB(this);
}],ML,"AbstractCharClass$LazyJavaWhitespace$1",2,I,[],0,0,0,["j",function(b){return PO(this,b);}],BY,"IOException",5,Br,[],0,3,0,0,Cm,0,BY,[],0,3,0,0,Jz,"MalformedInputException",4,Cm,[],0,3,0,["dM",function(){return U8(this);}],Kq,0,K,[],0,0,0,["u",function(){return Uu(this);}],HW,0,C,[],0,3,0,["di",function(){return UF(this);},"dy",function(b){return UN(this,b);},"f8",function(b){V4(this,b);},"eL",function(b){AAC(this,b);}],BP,0,C,[],3,3,0,0,BN,0,C,[BP],1,3,0,0,BE,0,C,[],3,3,0,0,C$,0,BN,[BE],0,3,B6,["f",function()
{return XV(this);}],Ka,"CloneNotSupportedException",6,Br,[],0,3,0,0,Cg,0,C,[],0,0,AB4,0,R,0,C,[],1,0,Jh,["bg",function(b,c,d){return C7(this,b,c,d);},"bd",function(b,c,d,e){return Db(this,b,c,d,e);},"gy",function(b){SY(this,b);},"cK",function(){return RH(this);},"kd",function(){return UM(this);},"s",function(b){FK(this,b);},"X",function(b){return WK(this,b);},"cg",function(){return YG(this);},"bB",function(){GH(this);}],V,0,R,[],0,0,0,["b",function(b,c,d){return WR(this,b,c,d);},"s",function(b){QU(this,b);},
"X",function(b){return AAA(this,b);},"x",function(b){return Sm(this,b);},"bB",function(){Ss(this);}],CK,0,V,[],0,0,0,["b",function(b,c,d){return Oy(this,b,c,d);},"bg",function(b,c,d){return NB(this,b,c,d);},"bd",function(b,c,d,e){return T7(this,b,c,d,e);},"X",function(b){return AAn(this,b);},"cg",function(){return QZ(this);},"bB",function(){YO(this);}],BF,0,C,[],3,3,0,0,Dk,0,C,[BF],3,3,0,0,El,0,C,[Dk],3,3,0,0,BK,0,C,[BF],3,3,0,0,KC,0,C,[El,BK],3,3,0,0,Gg,0,BN,[BE],0,3,U4,0,Gb,0,C,[BF],3,3,0,0,EB,0,C,[],3,3,
0,0,I_,0,C,[],0,0,0,["i1",function(b,c){X4(this,b,c);},"fC",function(b){return NQ(this,b);}],Ee,0,K,[],0,0,0,["u",function(){return Jf(this);}],DM,0,K,[],0,0,0,["u",function(){return Gw(this);}],Kh,0,DM,[],0,0,0,["u",function(){return W_(this);}],Hg,0,CK,[],0,0,0,["bg",function(b,c,d){return VM(this,b,c,d);},"bd",function(b,c,d,e){return AAj(this,b,c,d,e);},"cg",function(){return SI(this);}],L4,"BufferOverflowException",4,T,[],0,3,0,0,CD,0,V,[],0,0,0,["b",function(b,c,d){return PF(this,b,c,d);},"s",function(b)
{Sr(this,b);},"c1",function(b){return S$(this,b);},"x",function(b){return Ta(this,b);}],Du,0,K,[],0,0,0,["u",function(){return M5(this);}],Kz,0,Du,[],0,0,0,["u",function(){return O3(this);}],KT,"AbstractCharClass$1",2,I,[],0,0,0,["j",function(b){return U2(this,b);}],KQ,"AbstractCharClass$2",2,I,[],0,0,0,["j",function(b){return Os(this,b);}],Kb,0,K,[],0,0,0,["u",function(){return PL(this);}],Y,0,R,[],1,0,0,["b",function(b,c,d){return ZO(this,b,c,d);},"ba",function(){return VA(this);},"x",function(b){return YT(this,
b);}],Ht,0,Y,[],0,0,0,["H",function(b,c){return Uc(this,b,c);}],BM,0,R,[],1,0,0,["ef",function(){return Z6(this);},"X",function(b){return T8(this,b);},"x",function(b){return Xd(this,b);},"bB",function(){Oj(this);}],Bw,0,BM,[],0,0,0,["b",function(b,c,d){return N4(this,b,c,d);}],Cd,0,Bw,[],0,0,0,["b",function(b,c,d){return Qo(this,b,c,d);}]]);
$rt_metadata([Jg,0,Cd,[],0,0,0,["b",function(b,c,d){return T$(this,b,c,d);}],Dg,0,C,[],3,3,0,0,B9,0,CL,[],0,3,0,0,CO,0,B9,[],0,3,0,0,Dw,0,C,[BK],3,3,0,0,Mk,"StringIndexOutOfBoundsException",6,C5,[],0,3,0,0,EE,"MissingResourceException",1,T,[],0,3,0,0,JH,"AbstractCharClass$LazyJavaLetterOrDigit$1",2,I,[],0,0,0,["j",function(b){return N$(this,b);}],IB,"CharClass$18",2,I,[],0,0,0,["j",function(b){return AAl(this,b);},"f",function(){return WF(this);}],DY,0,C,[],1,3,0,["md",function(b){return K$(this,b);},"fS",function(b)
{W3(this,b);},"mW",function(b){return HM(this,b);},"ft",function(b){Xv(this,b);},"m2",function(b,c,d){return FA(this,b,c,d);},"oJ",function(b){return Mx(this,b);},"ox",function(){return LC(this);},"lv",function(b){return I6(this,b);},"mm",function(b){return En(this,b);},"kH",function(b){return O4(this,b);},"kB",function(){UD(this);}],Bv,0,BM,[],0,0,0,["b",function(b,c,d){return Ov(this,b,c,d);}],M_,0,Bv,[],0,0,0,["b",function(b,c,d){return S3(this,b,c,d);}],LG,0,CD,[],0,0,0,["b",function(b,c,d){return Ny(this,
b,c,d);}],Iy,0,I,[],0,0,0,["j",function(b){return S6(this,b);}],D0,0,C,[],4,3,YQ,0,Iz,0,I,[],0,0,0,["j",function(b){return V8(this,b);}],IA,0,I,[],0,0,0,["j",function(b){return AAG(this,b);}],Lt,0,C,[],4,3,0,0,L7,0,K,[],0,0,0,["u",function(){return VK(this);}],Ji,0,I,[],0,0,0,["j",function(b){return W6(this,b);}],IC,0,I,[],0,0,0,["j",function(b){return Rk(this,b);}],GA,0,Y,[],0,0,0,["H",function(b,c){return ND(this,b,c);}],ID,0,I,[],0,0,0,["j",function(b){return RN(this,b);}],Mn,0,BM,[],0,0,0,["b",function(b,
c,d){return Z1(this,b,c,d);},"bg",function(b,c,d){return Vq(this,b,c,d);}],IE,0,I,[],0,0,0,["j",function(b){return Y1(this,b);}],Lo,"AbstractCharClass$LazyJavaDefined$1",2,I,[],0,0,0,["j",function(b){return YF(this,b);}],Ix,0,I,[],0,0,0,["j",function(b){return V7(this,b);}],Bs,0,R,[],0,0,Ea,["b",function(b,c,d){return Ql(this,b,c,d);},"c6",function(){return N9(this);},"x",function(b){return Rj(this,b);}],Fu,0,Bs,[],0,0,0,["b",function(b,c,d){return Ry(this,b,c,d);}],CG,0,C,[BP,Dg],0,0,0,["oX",function(b){return Ia(this,
b);},"fA",function(b,c){return J4(this,b,c);},"oy",function(b){return Il(this,b);},"gU",function(b,c){return PG(this,b,c);},"jC",function(b,c,d){return Yh(this,b,c,d);},"nH",function(b){return Kg(this,b);},"iZ",function(b,c){return Hy(this,b,c);},"ma",function(b){return F8(this,b);},"fM",function(b,c){return F4(this,b,c);},"os",function(b){return L5(this,b);},"hN",function(b,c){return Kl(this,b,c);},"bZ",function(b){ES(this,b);},"f",function(){return EF(this);},"g",function(){return FR(this);},"d",function(b)
{return Ha(this,b);},"fV",function(b,c,d){return FZ(this,b,c,d);},"e9",function(b,c,d,e){return EG(this,b,c,d,e);},"oS",function(b){return EU(this,b);},"g0",function(b,c,d,e){K4(this,b,c,d,e);},"dP",function(b){FE(this,b);},"nk",function(b){return Ld(this,b);},"no",function(b,c){return LF(this,b,c);},"nF",function(b,c){BB(this,b,c);}],Dd,0,C,[],3,3,0,0,GR,0,CG,[Dd],0,3,0,["a",function(b){return Oo(this,b);},"n",function(b){return Pd(this,b);},"ij",function(b){return Xe(this,b);},"bx",function(b){return Oa(this,
b);},"jN",function(b,c,d){return Ti(this,b,c,d);},"d$",function(b){return UX(this,b);},"ib",function(b){return Ow(this,b);},"k9",function(b,c){return Vo(this,b,c);},"lR",function(b,c,d,e){return SZ(this,b,c,d,e);},"j5",function(b,c){return Zr(this,b,c);},"li",function(b,c){return P3(this,b,c);},"j0",function(b,c){return XM(this,b,c);},"iv",function(b){return VH(this,b);},"j1",function(b,c){return ZK(this,b,c);},"dP",function(b){ZX(this,b);},"g0",function(b,c,d,e){UO(this,b,c,d,e);},"e9",function(b,c,d,e){return ZC(this,
b,c,d,e);},"fV",function(b,c,d){return Ua(this,b,c,d);},"g",function(){return Q2(this);},"f",function(){return RC(this);},"bZ",function(b){Z2(this,b);},"hN",function(b,c){return Ot(this,b,c);},"fM",function(b,c){return Nz(this,b,c);},"iZ",function(b,c){return Xh(this,b,c);},"fA",function(b,c){return AAo(this,b,c);}],DF,0,Ee,[],0,0,0,["u",function(){return KK(this);}],KY,"ConcurrentModificationException",1,T,[],0,3,0,0,KL,0,V,[],0,0,0,["b",function(b,c,d){return Qe(this,b,c,d);},"s",function(b){Qu(this,b);},
"x",function(b){return RS(this,b);},"X",function(b){return Rb(this,b);}],Ga,0,C,[],3,3,0,0,Dt,0,C,[Ga],3,3,0,0,E7,0,C,[],3,3,0,0,BU,0,C,[Dt,E7],1,3,0,["dc",function(b,c,d){ON(this,b,c,d);}],My,0,BU,[],0,3,0,["e1",function(b){OL(this,b);},"dc",function(b,c,d){P_(this,b,c,d);},"bZ",function(b){ER(this,b);},"kc",function(b){return W4(this,b);}],GU,0,V,[],0,0,0,["s",function(b){Vt(this,b);},"b",function(b,c,d){return XW(this,b,c,d);}],Mm,0,Bv,[],0,0,0,["b",function(b,c,d){return Y9(this,b,c,d);}],Cp,0,Bs,[],0,0,
0,["b",function(b,c,d){return Xr(this,b,c,d);}],Ic,0,B9,[],0,3,0,0,J6,0,Bv,[],0,0,0,["b",function(b,c,d){return OK(this,b,c,d);}],Kr,0,Y,[],0,0,0,["H",function(b,c){return Uy(this,b,c);},"bg",function(b,c,d){return Vr(this,b,c,d);},"bd",function(b,c,d,e){return SB(this,b,c,d,e);},"x",function(b){return O_(this,b);}],Im,0,CG,[Dd],0,3,0,["gZ",function(b){return Vu(this,b);},"lS",function(b,c,d){return Y8(this,b,c,d);},"kx",function(b){return UC(this,b);},"jG",function(b,c,d,e){return Oh(this,b,c,d,e);},"lH",function(b,
c){return XL(this,b,c);},"dP",function(b){OR(this,b);},"e9",function(b,c,d,e){return VG(this,b,c,d,e);},"fV",function(b,c,d){return Rg(this,b,c,d);},"d",function(b){return NT(this,b);},"g",function(){return ZR(this);},"f",function(){return Rw(this);},"bZ",function(b){R1(this,b);},"fM",function(b,c){return Vx(this,b,c);}],CC,0,C,[],1,3,0,["l4",function(){return Kc(this);},"oK",function(){return BG(this);},"l8",function(b){return FF(this,b);},"ml",function(){return KD(this);},"m6",function(){return IV(this);},
"oF",function(){return MD(this);},"nz",function(){return W(this);},"m3",function(){return BR(this);}],Gs,"AbstractCharClass$LazyJavaUnicodeIdentifierPart$1",2,I,[],0,0,0,["j",function(b){return YR(this,b);}],Da,0,C,[],4,0,AB5,["oU",function(b){return LB(this,b);}]]);
$rt_metadata([CN,0,C,[BE,BP],1,3,0,["l5",function(){return MJ(this);}],B4,"FingerConfig$Section",10,CN,[],12,3,Fw,0,Gl,0,K,[],0,0,0,["u",function(){return Wq(this);}],Cj,0,V,[],0,0,0,["s",function(b){YJ(this,b);},"b",function(b,c,d){return Qv(this,b,c,d);},"jg",function(){return FM(this);},"f9",function(b,c,d){return Yx(this,b,c,d);},"X",function(b){return ZB(this,b);},"x",function(b){return SA(this,b);}],H8,0,Cj,[],0,0,0,0,B$,"KeyboardLayout$KeyboardType",10,CN,[],12,3,DT,0,CB,0,CO,[],0,3,0,0,K5,0,CB,[],0,
3,0,0,Mw,0,Bs,[],0,0,0,["b",function(b,c,d){return SS(this,b,c,d);}],J7,0,K,[],0,0,0,["u",function(){return UV(this);}],D$,0,V,[],0,0,0,["b",function(b,c,d){return Qw(this,b,c,d);},"x",function(b){return S_(this,b);}],BT,0,D$,[],0,0,0,["b",function(b,c,d){return TT(this,b,c,d);},"s",function(b){Sx(this,b);}],GJ,0,BT,[],0,0,0,["b",function(b,c,d){return QH(this,b,c,d);},"x",function(b){return WW(this,b);}],Cy,0,C,[Dt],1,3,0,0,M0,0,Cy,[],0,3,0,["kk",function(b,c,d){return Tw(this,b,c,d);},"bG",function(){Nm(this);
},"nO",function(){MO(this);}],Kv,0,BT,[],0,0,0,["b",function(b,c,d){return Q8(this,b,c,d);},"x",function(b){return VN(this,b);}],Fn,0,C,[],3,3,0,0,HP,0,C,[Fn],0,0,0,["Z",function(){return O7(this);},"W",function(){return Ws(this);},"mM",function(){Jl(this);}],Fj,0,C,[Dk],3,3,0,0,DJ,0,C,[BK],3,3,0,0,D5,0,C,[BK],3,3,0,0,Fx,0,C,[BK],3,3,0,0,D1,0,C,[BK],3,3,0,0,JI,0,C,[Fj,Gb,BK,DJ,D5,Fx,D1,Dw],3,3,0,0,IZ,0,C,[],0,3,0,["dF",function(){return TR(this);},"dl",function(){return AAc(this);},"bP",function(){return X7(this);
}],B5,0,C,[],3,3,0,0,G$,"Quantifier",2,Ct,[B5],0,0,0,["cW",function(){return WD(this);},"cZ",function(){return WX(this);},"f",function(){return PB(this);}],DV,"UnsupportedOperationException",6,T,[],0,3,0,0,MI,"ReadOnlyBufferException",3,DV,[],0,3,0,0,GN,"AbstractCharClass$LazyJavaUpperCase$1",2,I,[],0,0,0,["j",function(b){return QC(this,b);}],Hs,0,C,[],4,3,0,0,Ij,0,C,[],0,3,0,0,JP,0,C,[],4,0,0,0,D2,0,DY,[],1,3,0,["jw",function(b,c){return WH(this,b,c);}],HJ,0,D2,[],0,3,0,["kp",function(b,c,d,e,f,g,h){return Yc(this,
b,c,d,e,f,g,h);},"mg",function(b){return Ck(this,b);}],H3,0,CB,[],0,3,0,0,H2,0,K,[],0,0,0,["u",function(){return Ue(this);}],FB,0,C,[],3,3,0,0,DA,0,C,[FB],3,3,0,0,Dl,0,C,[DA],1,3,0,["jm",function(b){return UW(this,b);}],Nb,0,Bw,[],0,0,0,["b",function(b,c,d){return Pz(this,b,c,d);}],Jo,0,C,[],0,3,0,["di",function(){return Pg(this);},"dy",function(b){return Rh(this,b);},"f8",function(b){WV(this,b);},"eL",function(b){S2(this,b);}],JS,0,C,[],4,3,0,0,Cb,0,Bw,[],0,0,0,["b",function(b,c,d){return NI(this,b,c,d);},
"s",function(b){AAB(this,b);}],KM,0,Cb,[],0,0,0,["b",function(b,c,d){return OJ(this,b,c,d);}],Ik,"AbstractCharClass$LazyJavaIdentifierIgnorable$1",2,I,[],0,0,0,["j",function(b){return QA(this,b);}],Gj,0,C,[],3,3,0,0,H4,"AbstractCharClass$LazyJavaLetter$1",2,I,[],0,0,0,["j",function(b){return XU(this,b);}],K2,0,Bw,[],0,0,0,["b",function(b,c,d){return QL(this,b,c,d);}],Jp,0,C,[],4,0,0,0]);
$rt_metadata([G3,"AbstractCharClass$LazyJavaUnicodeIdentifierStart$1",2,I,[],0,0,0,["j",function(b){return Tt(this,b);}],IS,0,C,[],4,3,0,0,GX,0,C,[],0,3,0,["iQ",function(b,c){return TM(this,b,c);},"oo",function(b){HZ(this,b);},"n3",function(){return MQ(this);},"ca",function(b){return Ph(this,b);},"dH",function(b,c){return AAH(this,b,c);},"d8",function(){return Zo(this);},"eh",function(){return QI(this);},"d4",function(){return Wi(this);},"k3",function(b){return OP(this,b);},"jJ",function(b,c){Zh(this,b,c);},
"lT",function(b,c){return YI(this,b,c);},"lA",function(b,c,d){Um(this,b,c,d);},"k2",function(b){return RP(this,b);},"kt",function(){return Xi(this);},"km",function(b){TK(this,b);}],Ef,0,DF,[],0,0,0,["u",function(){return Gr(this);}],Mp,0,Ef,[],0,0,0,["u",function(){return Ol(this);}],JE,0,K,[],0,0,0,["u",function(){return WC(this);}],Ei,0,C,[],3,3,0,0,D8,0,C,[Ei,B5],0,0,0,0,ED,0,D8,[],0,0,0,0,LQ,0,BT,[],0,0,0,["b",function(b,c,d){return Sl(this,b,c,d);},"x",function(b){return AAt(this,b);}],Dj,0,C,[],1,3,0,
["mV",function(b){LN(this,b);},"mu",function(b){return Gk(this,b);},"fS",function(b){Y6(this,b);},"oM",function(b){return LT(this,b);},"ft",function(b){Ye(this,b);},"oh",function(b,c,d){return H_(this,b,c,d);},"mo",function(b){return GY(this,b);},"ju",function(b){return NZ(this,b);}],Mr,0,Y,[],0,0,0,["H",function(b,c){return TJ(this,b,c);},"bg",function(b,c,d){return QV(this,b,c,d);},"bd",function(b,c,d,e){return Wl(this,b,c,d,e);},"X",function(b){return XD(this,b);},"jp",function(b,c,d){return W5(this,b,c,
d);},"jA",function(b,c,d){return Vy(this,b,c,d);},"fO",function(b,c){return XX(this,b,c);}],Lh,0,R,[],0,0,0,["b",function(b,c,d){return Qm(this,b,c,d);},"x",function(b){return Nn(this,b);}],Lj,"ArrayStoreException",6,T,[],0,3,0,0,CM,0,Bv,[],0,0,0,["b",function(b,c,d){return UZ(this,b,c,d);},"s",function(b){XG(this,b);}],J1,0,K,[],0,0,0,["u",function(){return VU(this);}],DH,0,CC,[BE],1,3,0,["lm",function(b,c,d){return Th(this,b,c,d);},"hV",function(b,c,d){return Xz(this,b,c,d);},"mO",function(b){return KS(this,
b);},"nA",function(){return EW(this);},"eq",function(b){return Vz(this,b);}],Lw,0,DH,[],0,0,0,["dI",function(){return W8(this);}],DW,0,C,[],3,3,0,0,Fl,0,C,[DW],0,0,0,["C",function(b,c){Xk(this,b,c);},"bD",function(b){return AAF(this,b);},"eb",function(){return NN(this);},"f7",function(b){return ZT(this,b);},"bK",function(b,c){S9(this,b,c);},"fy",function(b,c){QX(this,b,c);},"cA",function(b){return Sc(this,b);},"eA",function(b){return Sv(this,b);},"jW",function(b){return Zt(this,b);},"hC",function(){return Sg(this);
},"eZ",function(b){return SC(this,b);},"kG",function(){NL(this);},"hP",function(b){return On(this,b);},"b2",function(b,c){So(this,b,c);},"nQ",function(b){F$(this,b);},"jL",function(){XO(this);},"jv",function(){return XQ(this);},"h8",function(b,c,d){Y_(this,b,c,d);},"kn",function(){Tu(this);},"oT",function(b,c){Lr(this,b,c);},"kz",function(b){TP(this,b);},"bv",function(){return RG(this);},"q",function(){return NJ(this);},"d5",function(b){Ul(this,b);},"ig",function(){return Wb(this);},"cP",function(){return XA(this);
},"c_",function(){return Om(this);},"lw",function(){return PW(this);}],IX,0,Y,[],0,0,0,["H",function(b,c){return Zz(this,b,c);}],GD,0,C,[],0,3,0,["cf",function(){return O0(this);},"dl",function(){return OH(this);},"bP",function(){return OI(this);}],GF,"AbstractCharClass$LazyJavaJavaIdentifierPart$1",2,I,[],0,0,0,["j",function(b){return ZD(this,b);}],H$,0,C,[],0,3,0,["fl",function(){W0(this);},"me",function(b){Ke(this,b);}],IT,0,C,[],4,3,0,0,Ds,0,C,[BE],1,3,0,["lv",function(b){return GW(this,b);}],C8,0,C,[],
0,3,B7,0,Kx,"BufferUnderflowException",4,T,[],0,3,0,0,BO,"IllegalArgumentException",6,T,[],0,3,0,0,JQ,"IllegalCharsetNameException",4,BO,[],0,3,0,0,Hx,0,R,[],0,0,0,["b",function(b,c,d){return Sp(this,b,c,d);},"x",function(b){return Wn(this,b);}],Gc,0,C,[BF],3,3,0,0,Km,0,C,[BF],1,3,0,0,Dv,0,BU,[],0,3,0,0,K1,0,Dv,[],0,3,0,["dc",function(b,c,d){PJ(this,b,c,d);},"mP",function(){return J_(this);},"mJ",function(b,c,d){EX(this,b,c,d);},"ke",function(b){Ug(this,b);},"dO",function(b){YD(this,b);},"o",function(b){Sn(this,
b);},"lq",function(b){Zn(this,b);},"lx",function(){SV(this);},"lY",function(){Dx(this);}],FH,0,C,[],3,3,0,0,HL,0,BT,[],0,0,0,["b",function(b,c,d){return N1(this,b,c,d);},"x",function(b){return Tz(this,b);}],K0,0,CD,[],0,0,0,["b",function(b,c,d){return S1(this,b,c,d);},"bg",function(b,c,d){return WO(this,b,c,d);},"bd",function(b,c,d,e){return O6(this,b,c,d,e);},"X",function(b){return Or(this,b);}],I3,0,K,[],0,0,0,["u",function(){return TY(this);}],Iw,0,BM,[],0,0,0,["b",function(b,c,d){return Q0(this,b,c,d);},
"bg",function(b,c,d){return NR(this,b,c,d);},"nu",function(b,c,d){return Fg(this,b,c,d);},"oH",function(b,c,d){return K8(this,b,c,d);}],JL,0,K,[],0,0,0,["u",function(){return ZU(this);}],KA,0,C,[BF],1,3,0,0,DQ,0,C,[],4,3,Mz,0,Lz,0,K,[],0,0,0,["u",function(){return R3(this);}],DG,0,C,[EB],1,3,0,0,Is,0,R,[],0,0,0,["b",function(b,c,d){return YY(this,b,c,d);},"x",function(b){return AAf(this,b);}],KV,0,Bw,[],0,0,0,["b",function(b,c,d){return ZA(this,b,c,d);},"bg",function(b,c,d){return Pe(this,b,c,d);}],EH,0,C,[],
3,3,0,0,KW,0,C,[EH],0,3,0,["lu",function(){return QO(this);},"jP",function(b){return Uf(this,b);},"bV",function(){return ZN(this);},"ep",function(){return WT(this);},"kI",function(){return Q_(this);},"eB",function(){return NW(this);},"j7",function(){return St(this);}],LA,0,C,[B5,BP],0,3,0,["gc",function(b){Sk(this,b);},"d6",function(b,c){XF(this,b,c);},"m8",function(b){return C9(this,b);},"l3",function(b){return CU(this,b);},"eT",function(b){AAx(this,b);},"jF",function(b,c){OZ(this,b,c);},"bJ",function(b){return O8(this,
b);},"dj",function(b){return Zv(this,b);},"k_",function(b){return RI(this,b);},"bZ",function(b){C2(this,b);},"nj",function(){CH(this);},"j9",function(b){return QN(this,b);},"bu",function(b){X3(this,b);},"cS",function(b){ZP(this,b);},"cz",function(b){XP(this,b);},"cL",function(b){Z0(this,b);},"Q",function(){return X$(this);}]]);
$rt_metadata([F5,0,C,[],3,3,0,0,GL,"AbstractCharClass$LazyJavaJavaIdentifierStart$1",2,I,[],0,0,0,["j",function(b){return TX(this,b);}],F_,0,Bs,[],0,0,0,["b",function(b,c,d){return O2(this,b,c,d);},"x",function(b){return T1(this,b);}],Bf,0,C,[],0,3,Bj,0,D4,0,BN,[BE],0,3,AFy,0,H5,0,C,[],0,3,0,0,B1,0,Y,[],0,0,0,["ba",function(){return Y$(this);},"H",function(b,c){return Xj(this,b,c);},"bg",function(b,c,d){return UK(this,b,c,d);},"bd",function(b,c,d,e){return Zl(this,b,c,d,e);},"cf",function(){return Q$(this);
},"X",function(b){return Wc(this,b);}],Gz,0,Y,[],0,0,0,["H",function(b,c){return Ui(this,b,c);}],Mg,0,BU,[],0,0,0,["e1",function(b){N5(this,b);}],DD,0,C,[],4,3,0,0,IG,0,I,[],0,0,0,["j",function(b){return Uh(this,b);}],IN,0,I,[],0,0,0,["j",function(b){return Ne(this,b);}],II,0,I,[],0,0,0,["j",function(b){return Tj(this,b);}],IH,0,I,[],0,0,0,["j",function(b){return NC(this,b);}],JB,0,K,[],0,0,0,["u",function(){return AAD(this);}],IJ,0,I,[],0,0,0,["j",function(b){return WU(this,b);}],Jt,0,K,[],0,0,0,["u",function()
{return Yz(this);}],IQ,0,I,[],0,0,0,["j",function(b){return S7(this,b);}],IM,0,I,[],0,0,0,["j",function(b){return Uj(this,b);}],IL,0,I,[],0,0,0,["j",function(b){return NE(this,b);}],I$,0,V,[],4,0,0,["b",function(b,c,d){return P$(this,b,c,d);},"s",function(b){TS(this,b);},"cK",function(){return Nc(this);},"x",function(b){return ZL(this,b);}],IO,0,I,[],0,0,0,["j",function(b){return WY(this,b);}],Gq,0,C,[DW],4,3,0,["nR",function(b){return Es(this,b);},"nm",function(b){return Jv(this,b);},"mQ",function(){return K6(this);
},"eZ",function(b){return MV(this,b);},"f7",function(b){return Hh(this,b);},"hC",function(){return Me(this);},"eb",function(){return Ki(this);},"c_",function(){return HE(this);}],BZ,0,C,[BE],0,3,N,0,K_,0,V,[],0,0,0,["b",function(b,c,d){return Zj(this,b,c,d);},"s",function(b){Rx(this,b);},"cK",function(){return PP(this);},"x",function(b){return Ru(this,b);}],GK,0,Y,[],0,0,0,["H",function(b,c){return Ok(this,b,c);}],B0,0,Y,[],0,0,0,["H",function(b,c){return Tb(this,b,c);},"bg",function(b,c,d){return Pq(this,b,
c,d);},"bd",function(b,c,d,e){return RZ(this,b,c,d,e);},"ge",function(){return N6(this);},"X",function(b){return SQ(this,b);}],G6,"AbstractCharClass$LazyJavaLowerCase$1",2,I,[],0,0,0,["j",function(b){return Xo(this,b);}],Mq,0,K,[],0,0,0,["u",function(){return Nt(this);}],BJ,0,V,[],0,0,0,["b",function(b,c,d){return UR(this,b,c,d);},"j",function(b){return VX(this,b);},"X",function(b){return P1(this,b);},"fc",function(){return Ze(this);},"s",function(b){U_(this,b);},"x",function(b){return Vb(this,b);}],GV,0,BJ,
[],0,0,0,["j",function(b){return YU(this,b);}],Na,0,K,[],0,0,0,["u",function(){return NO(this);}],B_,0,C,[],1,0,0,0,E6,0,V,[],0,0,0,["s",function(b){NG(this,b);},"jg",function(){return FI(this);},"b",function(b,c,d){return NH(this,b,c,d);},"X",function(b){return Rv(this,b);},"x",function(b){return Wu(this,b);}],Dq,0,CC,[BE,Dd,Dg,Gj],1,3,0,["iB",function(b,c,d){return PI(this,b,c,d);},"kv",function(b){return Sy(this,b);},"kY",function(b,c,d){return AAe(this,b,c,d);},"lh",function(b,c,d){return QB(this,b,c,d);
},"oq",function(b){return DR(this,b);},"nS",function(){return IR(this);},"ow",function(){return E8(this);},"n0",function(){return G4(this);},"fb",function(b){return Nk(this,b);}],DP,0,Dq,[],1,0,0,["dI",function(){return Zs(this);}],LY,0,DP,[],0,0,0,["lo",function(b){return Qg(this,b);},"hc",function(b,c){Nh(this,b,c);},"jB",function(){return P9(this);},"lz",function(){return V$(this);},"kQ",function(){return YZ(this);}],MZ,0,K,[],0,0,0,["u",function(){return Xw(this);}],EQ,0,C,[],0,3,AAW,["jc",function(b,c)
{return Tc(this,b,c);},"nZ",function(b,c,d){return KX(this,b,c,d);},"nq",function(b,c){return FW(this,b,c);},"on",function(b,c){return LM(this,b,c);}],H0,"AbstractCharClass$LazyJavaTitleCase$1",2,I,[],0,0,0,["j",function(b){return WZ(this,b);}],De,0,C,[],0,3,0,["bV",function(){return OO(this);},"i6",function(){return X_(this);},"hq",function(){return Oc(this);},"bN",function(){return Se(this);},"lL",function(b){AAv(this,b);},"eY",function(){return QE(this);},"eJ",function(b){QM(this,b);}],CA,0,C,[BF],3,3,0,
0,HG,0,C,[CA],4,0,0,["fK",function(b){MW(this,b);},"e0",function(b){return Xl(this,b);}],MG,0,C,[],0,3,0,0,HI,0,C,[CA],4,0,0,["fK",function(b){Ls(this,b);},"e0",function(b){return AAu(this,b);}],Hi,0,C,[CA],4,0,0,["fK",function(b){JM(this,b);},"e0",function(b){return Wx(this,b);}],Gy,0,C,[],0,3,0,["cY",function(){return Vc(this);},"en",function(){return YM(this);},"du",function(){return PX(this);}],MK,"AbstractCharClass$LazyJavaMirrored$1",2,I,[],0,0,0,["j",function(b){return VJ(this,b);}],L6,"UnsupportedCharsetException",
4,BO,[],0,3,0,0,Hj,0,C,[CA],4,0,0,["fK",function(b){KR(this,b);},"e0",function(b){return UL(this,b);}]]);
$rt_metadata([Lp,"AbstractCharClass$LazyJavaISOControl$1",2,I,[],0,0,0,["j",function(b){return Tx(this,b);}],J8,0,R,[],0,0,0,["b",function(b,c,d){return Q7(this,b,c,d);},"x",function(b){return Rt(this,b);},"mi",function(b,c,d,e){return FJ(this,b,c,d,e);}],KP,0,R,[],4,0,0,["b",function(b,c,d){return ZI(this,b,c,d);},"x",function(b){return Wa(this,b);}],Dm,0,K,[],0,0,0,["u",function(){return LU(this);}],Hf,0,C,[],0,3,0,["kq",function(){return PT(this);},"lj",function(){return Vd(this);},"k7",function(){return WJ(this);
},"hR",function(){return Pu(this);},"jz",function(){return T9(this);}],LP,0,Y,[],0,0,0,["H",function(b,c){return Nq(this,b,c);}],DO,0,BN,[BE],0,3,FD,["dR",function(){return AAb(this);}],Ey,0,Bs,[],0,0,0,["b",function(b,c,d){return Pj(this,b,c,d);},"bt",function(){return RR(this);},"x",function(b){return Q3(this,b);}],Do,0,V,[],0,0,0,["s",function(b){QG(this,b);},"b",function(b,c,d){return SK(this,b,c,d);},"bg",function(b,c,d){return Xy(this,b,c,d);},"bd",function(b,c,d,e){return T3(this,b,c,d,e);},"X",function(b)
{return OV(this,b);},"x",function(b){return VS(this,b);}],E$,0,C,[BK,DJ,D5,D1,Dw],3,3,0,0,LO,0,B9,[],0,3,0,0,LI,0,C,[],0,3,0,["iN",function(){return WM(this);},"dn",function(){return Z5(this);},"lk",function(){return Xt(this);},"gq",function(){return Y4(this);},"bj",function(){return T5(this);},"ly",function(b){Q6(this,b);},"iU",function(){return PD(this);},"lD",function(b){T6(this,b);},"dS",function(){return Q4(this);},"g9",function(b){return Pf(this,b);},"nV",function(){return M4(this);}],Ch,0,Bv,[],0,0,0,
["b",function(b,c,d){return AAm(this,b,c,d);}],Fe,0,Ch,[],0,0,0,["b",function(b,c,d){return Pp(this,b,c,d);}],EA,0,C,[DA],3,3,0,0,DB,0,Dl,[EA],1,3,0,["Y",function(){return U6(this);}],EZ,0,C,[],3,3,0,0,Ib,0,DB,[B5,BP,EZ],0,3,0,["bZ",function(b){Pw(this,b);},"E",function(b){return S8(this,b);},"U",function(){return QK(this);},"bo",function(b){return XH(this,b);},"lI",function(b,c){YL(this,b,c);},"iC",function(b){return TG(this,b);},"m9",function(b){Ex(this,b);},"ms",function(b){JN(this,b);}],E4,0,C,[],3,3,0,
0,Fd,0,C,[BF],3,3,0,0,HF,0,C,[BF,E$,E4,Fd],1,3,0,["mY",function(b,c){return Nv(this,b,c);},"om",function(b,c){return N8(this,b,c);},"l9",function(b){return P8(this,b);},"mf",function(b,c,d){return Qs(this,b,c,d);},"nX",function(b){return XN(this,b);},"n5",function(){return Sj(this);},"m0",function(b,c,d){return N_(this,b,c,d);}],K9,0,CM,[],0,0,0,["b",function(b,c,d){return RT(this,b,c,d);}],Hu,0,C,[],0,0,0,0,Bh,0,C,[BP,BE,Dg],0,3,CP,["oG",function(b,c,d,e){I7(this,b,c,d,e);},"d",function(b){return Qi(this,b);
},"g",function(){return V_(this);},"Q",function(){return Y5(this);},"ip",function(b,c){return Rz(this,b,c);},"ej",function(b){return Zc(this,b);},"cB",function(b,c){return PU(this,b,c);},"cu",function(b){return UP(this,b);},"er",function(b,c){return Qt(this,b,c);},"gI",function(b,c){return Uk(this,b,c);},"lC",function(b,c){return UE(this,b,c);},"ce",function(b,c){return Oz(this,b,c);},"e$",function(b){return Ym(this,b);},"fp",function(b,c){return U1(this,b,c);},"fJ",function(b){return Nf(this,b);},"hM",function()
{return ZG(this);},"f",function(){return RW(this);},"cq",function(){return Za(this);},"bO",function(b){return XB(this,b);},"jS",function(b){return XZ(this,b);},"hL",function(){return P6(this);},"c2",function(){return O1(this);},"i2",function(b){return AAa(this,b);}],FT,0,C,[],0,0,ADF,0,M9,"NegativeArraySizeException",6,T,[],0,3,0,0,Ig,0,Cb,[],0,0,0,["b",function(b,c,d){return PQ(this,b,c,d);}],Ed,0,Dj,[],1,3,0,["j6",function(b,c){return Qy(this,b,c);}],JT,0,Ed,[],0,3,0,["jE",function(b,c,d,e,f,g,h){return ZV(this,
b,c,d,e,f,g,h);}],Ja,0,K,[],0,0,0,["u",function(){return Yq(this);}],Ko,0,C,[],0,3,0,["g2",function(b,c){return Pt(this,b,c);},"mG",function(b,c){return Ip(this,b,c);}],Io,0,R,[],0,0,0,["b",function(b,c,d){return Zy(this,b,c,d);},"x",function(b){return QS(this,b);}],C1,"NumberFormatException",6,BO,[],0,3,0,0,EI,0,Ch,[],0,0,0,["b",function(b,c,d){return X9(this,b,c,d);}],MP,0,Ds,[],0,3,0,["j_",function(){return Uo(this);},"kU",function(){return Yf(this);}],GC,0,R,[],0,0,0,["b",function(b,c,d){return Yj(this,
b,c,d);},"x",function(b){return SP(this,b);}],Ii,0,C,[],0,0,0,0,Hn,0,Cy,[],0,3,0,["bG",function(){Z8(this);},"ek",function(){return ZS(this);},"ol",function(b){return Ez(this,b);},"nI",function(){FG(this);}],It,0,K,[],0,0,0,["u",function(){return Tl(this);}],Jc,"AbstractCharClass$LazyJavaDigit$1",2,I,[],0,0,0,["j",function(b){return Xu(this,b);}],Jk,0,K,[],0,0,0,["u",function(){return Nr(this);}],Hp,"IllegalStateException",6,Br,[],0,3,0,0,Dy,0,V,[],0,0,0,["s",function(b){R0(this,b);},"b",function(b,c,d){return N3(this,
b,c,d);},"bg",function(b,c,d){return Rr(this,b,c,d);},"bd",function(b,c,d,e){return T_(this,b,c,d,e);},"X",function(b){return TL(this,b);},"x",function(b){return RQ(this,b);}],LS,0,Cd,[],0,0,0,["b",function(b,c,d){return UB(this,b,c,d);}],GM,"NullPointerException",6,T,[],0,3,0,0,LW,0,R,[],4,0,0,["b",function(b,c,d){return AAs(this,b,c,d);},"x",function(b){return Yv(this,b);}],JW,"AbstractCharClass$LazyJavaSpaceChar$1",2,I,[],0,0,0,["j",function(b){return Sq(this,b);}],Kt,0,C,[Gc],0,0,0,["jD",function(){W1(this);
},"oL",function(){return SG(this);}],LV,0,C,[],4,3,0,0,Kp,0,K,[],0,0,0,["u",function(){return Pv(this);}]]);
$rt_metadata([FN,"PatternSyntaxException",2,BO,[],0,3,0,["dM",function(){return Yy(this);}],Ku,0,K,[],0,0,0,["u",function(){return Tr(this);}],Di,0,C,[],0,3,B2,0,H7,0,C,[F5],0,3,0,0,EV,0,C,[],0,3,ACa,["jV",function(b,c,d){return Up(this,b,c,d);},"nd",function(b){return Hv(this,b);},"oW",function(b,c){return M6(this,b,c);},"og",function(b,c){return MY(this,b,c);},"na",function(b,c){return M$(this,b,c);},"oi",function(b,c){return Id(this,b,c);},"nT",function(b,c){return JK(this,b,c);},"oC",function(b,c){return I0(this,
b,c);},"n4",function(b,c){return Mo(this,b,c);},"oE",function(b,c){return IK(this,b,c);}],LK,0,C,[BP],4,3,0,["ne",function(b){return Lb(this,b);},"mj",function(b,c){return HA(this,b,c);},"np",function(b){return Hz(this,b);},"oI",function(){return DL(this);},"l2",function(b,c){return Ky(this,b,c);},"n2",function(b){return L2(this,b);},"nn",function(b,c,d){return Gd(this,b,c,d);},"nc",function(){return JJ(this);},"oa",function(){return JV(this);},"oR",function(b){return Fi(this,b);},"mX",function(b,c){return D6(this,
b,c);},"m4",function(b){return F3(this,b);},"mF",function(b,c){return HK(this,b,c);},"nP",function(b){return Cs(this,b);},"oV",function(b){return F7(this,b);},"mv",function(b){return Ec(this,b);},"l0",function(){Kk(this);},"mr",function(){return G9(this);},"mE",function(){return K3(this);},"nh",function(){return If(this);},"nD",function(b){return Bb(this,b);}],Jx,0,CM,[],0,0,0,["b",function(b,c,d){return Zb(this,b,c,d);},"s",function(b){PE(this,b);}],Lu,"BufferOverflowException",3,T,[],0,3,0,0,Hb,0,K,[],0,0,
0,["u",function(){return Yl(this);}],Mu,0,DG,[B5,BP],0,3,0,["he",function(b){return W2(this,b);},"ou",function(){Fa(this);},"gh",function(b){return Xc(this,b);},"n$",function(b){return Hm(this,b);},"oj",function(b,c,d){return FC(this,b,c,d);},"oB",function(){return Gi(this);},"hB",function(b,c){return Pc(this,b,c);},"lp",function(b,c){return WA(this,b,c);},"hz",function(b,c,d){return R8(this,b,c,d);},"kl",function(b){Wo(this,b);},"hy",function(){ST(this);}],G0,0,R,[],0,0,0,["b",function(b,c,d){return Qj(this,
b,c,d);},"x",function(b){return VP(this,b);}],HX,0,C,[],0,3,0,0,Ml,0,K,[],0,0,0,["u",function(){return Z4(this);}],EK,0,C,[],0,3,0,0,DS,0,C,[],0,3,Bg,["dE",function(){return OW(this);},"c9",function(){return W9(this);},"fQ",function(){return ZQ(this);},"hW",function(){return Xa(this);},"fY",function(){return Xs(this);},"g",function(){return Vm(this);},"gW",function(){T2(this);}],FX,0,R,[],4,0,0,["b",function(b,c,d){return Sa(this,b,c,d);},"x",function(b){return SL(this,b);}],JG,0,B_,[],4,0,0,["de",function(b)
{return UG(this,b);},"hb",function(b,c){return Yu(this,b,c);}],JF,0,B_,[],4,0,0,["de",function(b){return Sb(this,b);},"hb",function(b,c){return S4(this,b,c);}],LE,0,CO,[],0,3,0,0,M8,0,K,[],0,0,0,["u",function(){return TH(this);}],CW,0,C,[],0,0,0,["R",function(){return ZZ(this);},"d5",function(b){Sd(this,b);},"kA",function(b){RK(this,b);},"fh",function(){return TV(this);},"dd",function(){return RV(this);},"fi",function(){return RA(this);},"l",function(){return Tp(this);},"ct",function(){return SW(this);},"bh",
function(){return P7(this);},"kO",function(){return Vl(this);},"nf",function(){Ll(this);},"oQ",function(){Cc(this);},"nG",function(){return Hr(this);},"m1",function(b){return Ln(this,b);},"f",function(){return Wg(this);},"Q",function(){return X1(this);},"co",function(){return YK(this);},"hI",function(){return Rf(this);},"iV",function(){return Tk(this);},"mx",function(b){return Ft(this,b);},"mH",function(){return HU(this);},"ot",function(){return MH(this);},"l1",function(){return X(this);},"nv",function(){return HD(this);
},"mL",function(b){return K7(this,b);},"ns",function(){return DK(this);},"bt",function(){return Rc(this);}],Kf,0,K,[],0,0,0,["u",function(){return X2(this);}],Jw,0,C,[],0,3,0,0,Mv,0,Dm,[],0,0,0,["u",function(){return QJ(this);}],Mi,0,C,[FH],0,3,0,["lg",function(b){return RD(this,b);},"op",function(b,c){Js(this,b,c);},"nw",function(b,c){Jm(this,b,c);},"mB",function(b,c){GP(this,b,c);},"nL",function(b,c){Hd(this,b,c);},"mp",function(b,c,d){Mc(this,b,c,d);},"mS",function(b,c){Lv(this,b,c);}],B3,0,Y,[],0,0,0,["H",
function(b,c){return Ni(this,b,c);},"X",function(b){return QW(this,b);},"fc",function(){return Qz(this);}],D7,"UnicodeCategory",2,I,[],0,0,0,["j",function(b){return QF(this,b);}],MC,"UnicodeCategoryScope",2,D7,[],0,0,0,["j",function(b){return Va(this,b);}],Kn,"UnmappableCharacterException",4,Cm,[],0,3,0,["dM",function(){return T0(this);}],Jb,"CharClass",2,I,[],0,0,0,["be",function(b){return Nd(this,b);},"lF",function(b){return AAp(this,b);},"I",function(b,c){return WI(this,b,c);},"jK",function(b){NP(this,b);
},"go",function(b){W$(this,b);},"j",function(b){return SE(this,b);},"L",function(){return AAr(this);},"bb",function(){return U3(this);},"c3",function(){return Wk(this);},"f",function(){return Pn(this);},"ci",function(){return VD(this);}],KN,"BufferUnderflowException",3,T,[],0,3,0,0,JC,0,BU,[],0,0,0,["e1",function(b){Xf(this,b);}],JZ,0,C,[],0,3,0,0,Mb,0,Cj,[],0,0,0,0]);
function $rt_array(cls,data){this.rI=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
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
"freq/practical_cryptography/es_pc.freq","fr","French data","freq/practical_cryptography/fr_pc.freq","pl","Polish data","freq/practical_cryptography/pl_pc.freq","sv","Swedish data","freq/practical_cryptography/sv_pc.freq","Warning: Too many rows","Warning: letter "," is missing from layout. "," appears more than once on layout. ","Patter is null","\\Q","\\E","\\\\E\\Q","Is","In","<b style=\"color:red\">","</b>","<b><u>Finger Frequency</u></b>","<table>","<tr>","<td>finger ","</td><td>","</td><td>&nbsp;finger ",
"</td>","</tr>","<tr class=\"row_total\">","<td class=\"center\">total L</td><td>","</td><td class=\"center\">&nbsp;total R</td><td>","</table>","<b><u>Finger Bigram Frequency</u></b>","<td class=\"center\" colspan=\"2\">total</td><td class=\"center\" colspan=\"2\">","<b><u>Top Same-Finger Bigrams</u></b>","<b><u>Finger Effort</u></b>","<th> </th><th>base</th><th>s-bigrams</th><th>n-bigrams</th><th>total</th>","<td>total *</td><td>","Unmappable characters of length "]);
Bh.prototype.toString=function(){return $rt_ustr(this);};
Bh.prototype.valueOf=Bh.prototype.toString;C.prototype.toString=function(){return $rt_ustr(RX(this));};
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
=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}main=$rt_mainStarter(PS);
(function(){var c;c=HG.prototype;c.handleEvent=c.e0;c=HI.prototype;c.handleEvent=c.e0;c=Hi.prototype;c.handleEvent=c.e0;c=Hj.prototype;c.handleEvent=c.e0;c=HF.prototype;c.dispatchEvent=c.nX;c.addEventListener=c.mY;c.removeEventListener=c.om;c.getLength=c.n5;c.get=c.l9;c.addEventListener=c.m0;c.removeEventListener=c.mf;c=Kt.prototype;c.stateChanged=c.oL;})();
})();
