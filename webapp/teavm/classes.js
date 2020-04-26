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
function $rt_cls(cls){return HI(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return Em(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.t.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return C; }
function $rt_nullCheck(val) {if (val === null) {$rt_throw(Rv());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return ADV(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
var A=Object.create(null);
var G=$rt_throw;var BV=$rt_compare;var ADW=$rt_nullCheck;var D=$rt_cls;var E=$rt_createArray;var ACH=$rt_isInstance;var ADX=$rt_nativeThread;var ADY=$rt_suspending;var ADZ=$rt_resuming;var AD0=$rt_invalidPointer;var B=$rt_s;var Bc=$rt_eraseClinit;var Cd=$rt_imul;var Bd=$rt_wrapException;
function C(){this.$id$=0;}
function AB5(){var a=new C();L(a);return a;}
function L(a){return;}
function Ce(a){return HI(a.constructor);}
function Tn(a){return Eo(a);}
function NX(a,b){return a!==b?0:1;}
function RR(a){return J().a(Ce(a).bT()).a(B(0)).a(MR(Eo(a))).f();}
function Eo(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function Z4(a){var b,c,d;if(!ACH(a,B4)){b=a;if(b.constructor.$meta.item===null)G(AAZ());}c=N8(a);b=c;d=$rt_nextId();b.$id$=d;return c;}
function K(){var a=this;C.call(a);a.fb=null;a.fM=null;}
function AD1(){var a=new K();Q(a);return a;}
function Q(a){L(a);}
function Ti(a,b){if(!b&&a.fb===null)a.fb=a.u();else if(b&&a.fM===null)a.fM=a.u().b3(1);if(b)return a.fM;return a.fb;}
function MY(){K.call(this);}
function ABv(){var a=new MY();T$(a);return a;}
function T$(a){Q(a);}
function Tq(a){return Bw().be(32).be(9);}
function JQ(){K.call(this);}
function ACs(){var a=new JQ();X0(a);return a;}
function X0(a){Q(a);}
function Oa(a){return Bw().I(0,31).be(127);}
function CL(){var a=this;C.call(a);a.fo=null;a.dA=null;a.dZ=0;a.ey=0;a.hD=null;}
function AD2(){var a=new CL();K9(a);return a;}
function AD3(a){var b=new CL();FY(b,a);return b;}
function AD4(a,b){var c=new CL();MI(c,a,b);return c;}
function AD5(a){var b=new CL();K_(b,a);return b;}
function K9(a){a.dZ=1;a.ey=1;a.ee();}
function FY(a,b){a.dZ=1;a.ey=1;a.ee();a.fo=b;}
function MI(a,b,c){a.dZ=1;a.ey=1;a.ee();a.fo=b;a.dA=c;}
function K_(a,b){a.dZ=1;a.ey=1;a.ee();a.dA=b;}
function Vr(a){return a;}
function TL(a){return a.fo;}
function Wu(a){return a.dN();}
function Xz(a){a.hp(Ch());}
function Zx(a,b){var c,d,e,f,g;b.dP(Ce(a).bT());c=a.jZ();if(c!==null)b.dP(J().a(B(1)).a(c).f());a:{b.lu();if(a.hD!==null){d=a.hD.data;e=d.length;f=0;while(true){if(f>=e)break a;g=d[f];b.dP(B(2));b.ln(g);f=f+1|0;}}}if(a.dA!==null&&a.dA!==a){b.dP(B(3));a.dA.hp(b);}}
function Bo(){CL.call(this);}
function AD6(){var a=new Bo();C3(a);return a;}
function AD7(a){var b=new Bo();GJ(b,a);return b;}
function C3(a){K9(a);}
function GJ(a,b){FY(a,b);}
function T(){Bo.call(this);}
function AD8(){var a=new T();BA(a);return a;}
function ADV(a){var b=new T();Df(b,a);return b;}
function BA(a){C3(a);}
function Df(a,b){GJ(a,b);}
function C4(){T.call(this);}
function Cs(){var a=new C4();IU(a);return a;}
function Bk(a){var b=new C4();LW(b,a);return b;}
function IU(a){BA(a);}
function LW(a,b){Df(a,b);}
function Cv(){C.call(this);}
function AD9(){var a=new Cv();En(a);return a;}
function En(a){L(a);}
function I(){var a=this;Cv.call(a);a.G=0;a.T=0;a.J=null;a.dj=null;a.dV=null;a.y=0;}
var AD$=null;function EZ(){EZ=Bc(I);Ta();}
function AD_(){var a=new I();O(a);return a;}
function O(a){EZ();En(a);a.J=ABS(2048);}
function Q9(a){return null;}
function PE(a){return a.J;}
function N2(a){var b,c;if(!a.T){b=a.J;c=b.di(0)>=2048?0:1;}else c=a.J.k8(0)>=2048?0:1;return c;}
function Xi(a){return a.y;}
function Vf(a){return a;}
function P7(a){var b;if(a.dV===null){b=a.bb();a.dV=ADT(a,b);a.dV.b3(a.T);}return a.dV;}
function Ri(a){var b;if(a.dj===null){b=a.bb();a.dj=ADN(a,b,a);a.dj.b3(a.cY());a.dj.y=a.y;}return a.dj;}
function Yt(a){return 0;}
function Wz(a,b){if(a.G^b){a.G=a.G?0:1;a.T=a.T?0:1;}if(!a.y)a.y=1;return a;}
function Vw(a){return a.G;}
function DS(b,c){EZ();return b.j(c);}
function CU(b,c){EZ();if(b.L()!==null&&c.L()!==null)return b.L().j6(c.L());return 1;}
function F9(b,c){EZ();return Lx(AD$,b).kP(c);}
function Ta(){AD$=ADk();}
function MH(){I.call(this);this.k7=null;}
function AB0(a){var b=new MH();OZ(b,a);return b;}
function OZ(a,b){a.k7=b;O(a);}
function PI(a,b){return FQ(b);}
function BX(){Bo.call(this);}
function Pw(){var a=new BX();HL(a);return a;}
function HL(a){C3(a);}
function Cn(){BX.call(this);}
function AEa(){var a=new Cn();Fj(a);return a;}
function Fj(a){HL(a);}
function Js(){Cn.call(this);this.iD=0;}
function ABO(a){var b=new Js();Qd(b,a);return b;}
function Qd(a,b){Fj(a);a.iD=b;}
function U3(a){return J().a(B(4)).n(a.iD).f();}
function Kk(){K.call(this);}
function ABV(){var a=new Kk();O4(a);return a;}
function O4(a){Q(a);}
function Up(a){var b;b=ACa(a);b.y=1;return b;}
function HQ(){var a=this;C.call(a);a.gE=null;a.iz=null;a.hT=0;a.f3=0;}
function ABw(a,b){var c=new HQ();VL(c,a,b);return c;}
function VL(a,b,c){L(a);a.gE=b;a.iz=c;}
function UA(a){return BQ(a.gE);}
function UI(a,b){return W(a.iz)<b?0:1;}
function VZ(a,b){a.hT=b;}
function AAv(a,b){a.f3=b;}
function BO(){}
function BM(){C.call(this);}
function AEb(){var a=new BM();FT(a);return a;}
function FT(a){L(a);}
function BD(){}
function C$(){BM.call(this);this.iK=0;}
var AEc=null;function B5(){B5=Bc(C$);UT();}
function ACN(a){var b=new C$();DL(b,a);return b;}
function DL(a,b){B5();FT(a);a.iK=b;}
function Jt(b,c){B5();if(!(c>=2&&c<=36))c=10;return ADi(20).gW(b,c).f();}
function MR(b){B5();return N$(b,4);}
function Ik(b){B5();return Jt(b,10);}
function CW(b,c){var d,e,f,g,h;B5();if(c>=2&&c<=36){if(b!==null&&!b.Q()){a:{d=0;e=0;switch(b.d(0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=0;if(e==b.g())G(B_());while(e<b.g()){g=e+1|0;h=Ef(b.d(e));if(h<0)G(BU(J().a(B(5)).a(b).f()));if(h>=c)G(BU(J().a(B(6)).n(c).a(B(1)).a(b).f()));f=Cd(c,f)+h|0;if(f<0){if(g==b.g()&&f==(-2147483648)&&d)return (-2147483648);G(BU(J().a(B(7)).a(b).f()));}e=g;}if(d)f= -f;return f;}G(BU(B(8)));}G(BU(J().a(B(9)).n(c).f()));}
function JK(b){B5();return CW(b,10);}
function XP(a){return Ik(a.iK);}
function EK(b){var c,d,e;B5();if(!b)return 32;c=0;d=b>>>16;if(d)c=16;else d=b;e=d>>>8;if(!e)e=d;else c=c|8;d=e>>>4;if(!d)d=e;else c=c|4;e=d>>>2;if(!e)e=d;else c=c|2;if(e>>>1)c=c|1;return (32-c|0)-1|0;}
function CX(b){var c,d,e;B5();if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;e=d<<8;if(!e)e=d;else c=c|8;d=e<<4;if(!d)d=e;else c=c|4;e=d<<2;if(!e)e=d;else c=c|2;if(e<<1)c=c|1;return (32-c|0)-1|0;}
function KB(b,c){var d;B5();d=c&31;return b<<d|b>>>(32-d|0);}
function UT(){AEc=D($rt_intcls());}
function J6(){Bo.call(this);}
function AAZ(){var a=new J6();Ym(a);return a;}
function Ym(a){C3(a);}
function Cf(){C.call(this);}
var AEd=null;var AEe=null;var AEf=null;var AEg=null;var AEh=null;function AB1(){AB1=Bc(Cf);YG();}
function YG(){var b,c;b=$rt_createIntArray(10);c=b.data;c[0]=1;c[1]=10;c[2]=100;c[3]=1000;c[4]=10000;c[5]=100000;c[6]=1000000;c[7]=10000000;c[8]=100000000;c[9]=1000000000;AEd=b;b=$rt_createLongArray(19);c=b.data;c[0]=Long_fromInt(1);c[1]=Long_fromInt(10);c[2]=Long_fromInt(100);c[3]=Long_fromInt(1000);c[4]=Long_fromInt(10000);c[5]=Long_fromInt(100000);c[6]=Long_fromInt(1000000);c[7]=Long_fromInt(10000000);c[8]=Long_fromInt(100000000);c[9]=Long_fromInt(1000000000);c[10]=new Long(1410065408, 2);c[11]=new Long(1215752192, 23);c[12]
=new Long(3567587328, 232);c[13]=new Long(1316134912, 2328);c[14]=new Long(276447232, 23283);c[15]=new Long(2764472320, 232830);c[16]=new Long(1874919424, 2328306);c[17]=new Long(1569325056, 23283064);c[18]=new Long(2808348672, 232830643);AEe=b;b=$rt_createLongArray(6);c=b.data;c[0]=Long_fromInt(1);c[1]=Long_fromInt(10);c[2]=Long_fromInt(100);c[3]=Long_fromInt(10000);c[4]=Long_fromInt(100000000);c[5]=new Long(1874919424, 2328306);AEf=b;AEg=AA$();AEh=ACR();}
function R(){var a=this;C.call(a);a.e=null;a.bc=0;a.hJ=null;a.hw=0;}
var AEi=0;function Ja(){Ja=Bc(R);Zy();}
function AEj(){var a=new R();Bj(a);return a;}
function AEk(a){var b=new R();D_(b,a);return b;}
function Bj(a){var b,c;Ja();L(a);b=new C$;c=AEi;AEi=c+1|0;DL(b,c);a.hJ=b.f();}
function D_(a,b){var c,d;Ja();L(a);c=new C$;d=AEi;AEi=d+1|0;DL(c,d);a.hJ=c.f();a.e=b;}
function C6(a,b,c,d){var e;e=d.q();while(true){if(b>e)return (-1);if(a.b(b,c,d)>=0)break;b=b+1|0;}return b;}
function Db(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.b(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function SS(a,b){a.hw=b;}
function RB(a){return a.hw;}
function UH(a){return a.e;}
function FD(a,b){a.e=b;}
function WF(a,b){return 1;}
function Yz(a){return null;}
function Gz(a){var b;a.bc=1;if(a.e!==null){if(!a.e.bc){b=a.e.cd();if(b!==null){a.e.bc=1;a.e=b;}a.e.bB();}else if(a.e instanceof CK&&a.e.br.fh)a.e=a.e.e;}}
function Zy(){AEi=1;}
function V(){var a=this;R.call(a);a.N=null;a.br=null;a.A=0;}
function AEl(){var a=new V();BC(a);return a;}
function ADF(a,b){var c=new V();HV(c,a,b);return c;}
function BC(a){Bj(a);}
function HV(a,b,c){Bj(a);a.N=b;a.br=c;a.A=c.c5();}
function WM(a,b,c,d){var e,f,g,h,i;if(a.N===null)return (-1);e=d.cx(a.A);d.bK(a.A,b);f=a.N.U();g=0;while(true){if(g>=f){d.bK(a.A,e);return (-1);}h=a.N.E(g);i=h.b(b,c,d);if(i>=0)break;g=g+1|0;}return i;}
function QN(a,b){a.br.s(b);}
function AAt(a,b){var c;a:{if(a.N!==null){c=a.N.Y();while(true){if(!c.Z())break a;if(!c.V().X(b))continue;else return 1;}}}return 0;}
function Sg(a,b){var c,d;a:{if(b.eC(a.A)>=0){c=b.cx(a.A);d=a.A;if(c==b.eC(d)){c=0;break a;}}c=1;}return c;}
function Sm(a){var b,c,d,e;a.bc=1;if(a.br!==null&&!a.br.bc)a.br.bB();a:{if(a.N!==null){b=a.N.U();c=0;while(true){if(c>=b)break a;d=a.N.E(c);e=d.cd();if(e===null)e=d;else{d.bc=1;a.N.iC(c);a.N.lH(c,e);}if(!e.bc)e.bB();c=c+1|0;}}}if(a.e!==null)Gz(a);}
function CK(){V.call(this);this.bl=null;}
function ABp(a,b){var c=new CK();Jn(c,a,b);return c;}
function Jn(a,b,c){BC(a);a.bl=b;a.br=c;a.A=c.c5();}
function Ot(a,b,c,d){var e,f;e=d.cx(a.A);d.bK(a.A,b);f=a.bl.b(b,c,d);if(f>=0)return f;d.bK(a.A,e);return (-1);}
function Nx(a,b,c,d){var e;e=a.bl.bg(b,c,d);if(e>=0)d.bK(a.A,e);return e;}
function T2(a,b,c,d,e){var f;f=a.bl.bd(b,c,d,e);if(f>=0)e.bK(a.A,f);return f;}
function AAg(a,b){return a.bl.X(b);}
function QS(a){var b;b=ABn(a);a.e=b;return b;}
function YH(a){var b;a.bc=1;if(a.br!==null&&!a.br.bc)a.br.bB();if(a.bl!==null&&!a.bl.bc){b=a.bl.cd();if(b!==null){a.bl.bc=1;a.bl=b;}a.bl.bB();}}
function BE(){}
function VV(b){return b;}
function Dk(){}
function Ej(){}
function BI(){}
function Kw(){}
function Zd(){return window.document;}
function F$(){BM.call(this);}
var AEm=null;function UZ(){UZ=Bc(F$);W8();}
function Mf(b,c){var d,e,f,g,h;UZ();if(c>=2&&c<=36){if(b!==null&&!b.Q()){a:{d=0;e=0;switch(b.d(0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=Long_ZERO;while(e<b.g()){g=e+1|0;h=Ef(b.d(e));if(h<0)G(BU(J().a(B(5)).a(b).f()));if(h>=c)G(BU(J().a(B(6)).n(c).a(B(1)).a(b).f()));f=Long_add(Long_mul(Long_fromInt(c),f),Long_fromInt(h));if(Long_lt(f,Long_ZERO)){if(g==b.g()&&Long_eq(f,new Long(0, 2147483648))&&d)return new Long(0, 2147483648);G(BU(J().a(B(7)).a(b).f()));}e=g;}if(d)f=Long_neg(f);return f;}G(BU(B(8)));}G(BU(J().a(B(9)).n(c).f()));}
function FM(b){UZ();return Mf(b,10);}
function W8(){AEm=D($rt_longcls());}
function F5(){}
function Ew(){}
function I4(){var a=this;C.call(a);a.dz=null;a.eS=null;a.bq=0;a.iT=0;}
function PG(a){var b=new I4();YP(b,a);return b;}
function YP(a,b){L(a);while(b>=a.bq){a.bq=a.bq<<1|1;}a.bq=a.bq<<1|1;a.dz=$rt_createIntArray(a.bq+1|0);a.eS=$rt_createIntArray(a.bq+1|0);a.iT=b;}
function XY(a,b,c){var d,e,f;d=0;e=b&a.bq;while(a.dz.data[e]&&a.dz.data[e]!=b){f=d+1|0;d=f&a.bq;f=e+d|0;e=f&a.bq;}a.dz.data[e]=b;a.eS.data[e]=c;}
function NL(a,b){var c,d,e,f;c=b&a.bq;d=0;while(true){e=a.dz.data[c];if(!e)break;if(e==b)return a.eS.data[c];f=d+1|0;d=f&a.bq;f=c+d|0;c=f&a.bq;}return a.iT;}
function Ec(){K.call(this);}
function AC3(){var a=new Ec();Jg(a);return a;}
function Jg(a){Q(a);}
function I$(a){return Bw().I(97,122).I(65,90);}
function DK(){K.call(this);}
function ADC(){var a=new DK();Kq(a);return a;}
function Kq(a){Q(a);}
function Go(a){return Bw().I(48,57);}
function Kb(){DK.call(this);}
function ACT(){var a=new Kb();Zq(a);return a;}
function Zq(a){Kq(a);}
function W6(a){var b;b=Go(a).b3(1);b.y=1;return b;}
function G_(){CK.call(this);}
function ABn(a){var b=new G_();SZ(b,a);return b;}
function SZ(a,b){Jn(a,b.bl,b.br);}
function VH(a,b,c,d){var e,f,g;e=0;f=d.q();a:{while(true){if(b>f){b=e;break a;}g=d.cx(a.A);d.bK(a.A,b);e=a.bl.b(b,c,d);if(e>=0)break;d.bK(a.A,g);b=b+1|0;}}return b;}
function AAc(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=e.cx(a.A);e.bK(a.A,c);f=a.bl.b(c,d,e);if(f>=0)break;e.bK(a.A,g);c=c+(-1)|0;}}return c;}
function SC(a){return null;}
function L0(){T.call(this);}
function ADx(){var a=new L0();Pm(a);return a;}
function Pm(a){BA(a);}
function CE(){var a=this;V.call(a);a.gQ=0;a.cV=0;}
function ADB(a,b){var c=new CE();E7(c,a,b);return c;}
function E7(a,b,c){BC(a);a.gQ=b;a.cV=c;}
function Pz(a,b,c,d){var e,f,g,h;e=a.c0(d);if(e!==null&&(b+e.g()|0)<=d.q()){f=0;while(true){if(f>=e.g()){d.C(a.cV,e.g());return a.e.b(b+e.g()|0,c,d);}g=e.d(f);h=b+f|0;if(g!=c.d(h)&&C5(e.d(f))!=c.d(h))break;f=f+1|0;}return (-1);}return (-1);}
function Sl(a,b){a.e=b;}
function S5(a,b){var c;c=b.jT(a.gQ);return c;}
function S7(a,b){var c;c=!b.bD(a.cV)?0:1;b.C(a.cV,(-1));return c;}
function Dt(){K.call(this);}
function AA6(){var a=new Dt();J9(a);return a;}
function J9(a){Q(a);}
function M1(a){return Bw().I(97,122).I(65,90).I(48,57).be(95);}
function Kt(){Dt.call(this);}
function ABj(){var a=new Kt();XS(a);return a;}
function XS(a){J9(a);}
function OX(a){var b;b=M1(a).b3(1);b.y=1;return b;}
function KN(){var a=this;I.call(a);a.g7=null;a.kU=null;}
function ADT(a,b){var c=new KN();Z_(c,a,b);return c;}
function Z_(a,b,c){a.kU=b;a.g7=c;O(a);}
function UX(a,b){var c,d,e;c=b-55296|0;if(c>=0&&c<2048){d=a.T;e=a.g7;d=d^e.bJ(c);}else d=0;return d;}
function KK(){var a=this;I.call(a);a.hQ=null;a.ii=null;a.kf=null;}
function ADN(a,b,c){var d=new KK();PP(d,a,b,c);return d;}
function PP(a,b,c,d){a.kf=b;a.hQ=c;a.ii=d;O(a);}
function On(a,b){var c,d,e,f;c=b-55296|0;if(c>=0&&c<2048){d=a.T;e=a.hQ;f=d^e.bJ(c);}else f=0;return a.ii.j(b)&&!f?1:0;}
function J7(){K.call(this);}
function ABH(){var a=new J7();Qg(a);return a;}
function Qg(a){Q(a);}
function PF(a){var b;b=ABR(a);b.y=1;return b;}
function Y(){R.call(this);this.P=0;}
function AEn(a){var b=new Y();Hj(b,a);return b;}
function AEo(){var a=new Y();BG(a);return a;}
function Hj(a,b){D_(a,b);a.P=1;a.gz(1);}
function BG(a){Bj(a);a.P=1;}
function ZH(a,b,c,d){var e;if((b+a.ba()|0)>d.q()){d.by=1;return (-1);}e=a.H(b,c);if(e<0)return (-1);return a.e.b(b+e|0,c,d);}
function Vv(a){return a.P;}
function YM(a,b){return 1;}
function Hm(){Y.call(this);this.dx=null;}
function ADU(a){var b=new Hm();Xh(b,a);return b;}
function Xh(a,b){BG(a);a.dx=b.f();a.P=b.g();}
function T9(a,b,c){var d,e,f,g;d=0;while(true){if(d>=a.dx.g())return a.dx.g();e=a.dx.d(d);f=b+d|0;if(e!=c.d(f)){g=a.dx;if(C5(g.d(d))!=c.d(f))break;}d=d+1|0;}return (-1);}
function BL(){R.call(this);this.w=null;}
function AEp(a,b,c){var d=new BL();CY(d,a,b,c);return d;}
function CY(a,b,c,d){D_(a,c);a.w=b;a.gz(d);}
function ZZ(a){return a.w;}
function T3(a,b){return !a.w.X(b)&&!a.e.X(b)?0:1;}
function W$(a,b){return 1;}
function Oe(a){var b;a.bc=1;if(a.e!==null&&!a.e.bc){b=a.e.cd();if(b!==null){a.e.bc=1;a.e=b;}a.e.bB();}if(a.w!==null){if(!a.w.bc){b=a.w.cd();if(b!==null){a.w.bc=1;a.w=b;}a.w.bB();}else if(a.w instanceof CK&&a.w.br.fh)a.w=a.w.e;}}
function Bv(){BL.call(this);this.B=null;}
function ABK(a,b,c){var d=new Bv();Ct(d,a,b,c);return d;}
function Ct(a,b,c,d){CY(a,b,c,d);a.B=b;}
function NZ(a,b,c,d){var e,f;e=0;a:{while((b+a.B.ba()|0)<=d.q()){f=a.B.H(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.e.b(b,c,d);if(f>=0)break;b=b-a.B.ba()|0;e=e+(-1)|0;}return f;}
function Cc(){Bv.call(this);this.ci=null;}
function ACf(a,b,c,d){var e=new Cc();F_(e,a,b,c,d);return e;}
function F_(a,b,c,d,e){Ct(a,c,d,e);a.ci=b;}
function Qh(a,b,c,d){var e,f,g,h;e=a.ci.cU();f=a.ci.cX();g=0;while(true){if(g>=e){a:{while(g<f){if((b+a.B.ba()|0)>d.q())break a;h=a.B.H(b,c);if(h<1)break a;b=b+h|0;g=g+1|0;}}while(true){if(g<e)return (-1);h=a.e.b(b,c,d);if(h>=0)break;b=b-a.B.ba()|0;g=g+(-1)|0;}return h;}if((b+a.B.ba()|0)>d.q()){d.by=1;return (-1);}h=a.B.H(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}return (-1);}
function I_(){Cc.call(this);}
function AC2(a,b,c,d){var e=new I_();OA(e,a,b,c,d);return e;}
function OA(a,b,c,d,e){F_(a,b,c,d,e);}
function T5(a,b,c,d){var e,f,g,h;e=a.ci.cU();f=a.ci.cX();g=0;while(true){if(g>=e){a:{while(true){if(g>=f)break a;if((b+a.B.ba()|0)>d.q())break a;h=a.B.H(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}}return a.e.b(b,c,d);}if((b+a.B.ba()|0)>d.q()){d.by=1;return (-1);}h=a.B.H(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}return (-1);}
function Dg(){}
function B8(){CL.call(this);}
function AEq(a,b){var c=new B8();Iy(c,a,b);return c;}
function AEr(a){var b=new B8();JT(b,a);return b;}
function AEs(a){var b=new B8();Ib(b,a);return b;}
function Iy(a,b,c){MI(a,b,c);}
function JT(a,b){FY(a,b);}
function Ib(a,b){K_(a,b);}
function CO(){B8.call(this);}
function AEt(a){var b=new CO();GW(b,a);return b;}
function GW(a,b){JT(a,b);}
function Dv(){}
function Mg(){C4.call(this);}
function E_(){var a=new Mg();VG(a);return a;}
function VG(a){IU(a);}
function Ez(){var a=this;T.call(a);a.lk=null;a.k3=null;}
function AAY(a,b,c){var d=new Ez();Vk(d,a,b,c);return d;}
function Vk(a,b,c,d){Df(a,b);a.lk=c;a.k3=d;}
function JA(){I.call(this);this.k9=null;}
function ADp(a){var b=new JA();X_(b,a);return b;}
function X_(a,b){a.k9=b;O(a);}
function N5(a,b){return EJ(b);}
function Iu(){var a=this;I.call(a);a.ea=null;a.jp=null;}
function ACu(a,b){var c=new Iu();Yl(c,a,b);return c;}
function Yl(a,b,c){a.jp=b;a.ea=c;O(a);}
function AAe(a,b){return a.G^a.ea.bJ(b);}
function WA(a){var b,c;b=J();c=a.ea.di(0);while(c>=0){b.d_(CJ(c));b.bx(124);c=a.ea.di(c+1|0);}if(b.g()>0)b.iv(b.g()-1|0);return b.f();}
function DW(){var a=this;C.call(a);a.kO=null;a.gv=0.0;a.lp=0.0;a.ch=null;a.cD=null;a.d8=null;a.bM=0;}
function AEu(a,b,c){var d=new DW();MJ(d,a,b,c);return d;}
function MJ(a,b,c,d){L(a);a.ch=B(10);B6();a.cD=AEv;a.d8=AEv;if(c<=0.0)G(Bx(J().a(B(11)).ij(c).f()));if(d>0.0){a.kO=b;a.gv=c;a.lp=d;return;}G(Bx(J().a(B(12)).ij(d).f()));}
function K5(a,b){if(b!==null){a.cD=b;a.fT(b);return a;}G(Bx(B(13)));}
function WY(a,b){return;}
function HG(a,b){if(b!==null){a.d8=b;a.fv(b);return a;}G(Bx(B(13)));}
function Xq(a,b){return;}
function Fs(a,b,c,d){var e,f,g,$$je;if(!(a.bM==2&&!d)&&a.bM!=3){a.bM=d?2:1;while(true){try{e=a.js(b,c);}catch($$e){$$je=Bd($$e);if($$je instanceof T){f=$$je;G(Ty(f));}else{throw $$e;}}if(e.c8())return e;if(e.dE()){if(d&&BQ(b)){g=a.cD;B6();if(g===AEv)return BK(W(b));if(W(c)<=a.ch.g())return AEw;b.es(BF(b)+W(b)|0);if(a.cD===AEx)DP(c,a.ch);}return e;}if(e.hW()){g=a.cD;B6();if(g===AEv)return e;if(a.cD===AEx){if(W(c)<a.ch.g())return AEw;DP(c,a.ch);}b.es(BF(b)+e.g()|0);}else if(e.fZ()){g=a.d8;B6();if(g===AEv)break;if
(a.d8===AEx){if(W(c)<a.ch.g())return AEw;DP(c,a.ch);}b.es(BF(b)+e.g()|0);}}return e;}G(CZ());}
function Mt(a,b){if(a.bM!=3&&a.bM!=2)G(CZ());a.bM=3;return a.kE(b);}
function Ly(a){a.bM=0;a.ky();return a;}
function IZ(a,b){var c,d,e;if(a.bM&&a.bM!=3)G(CZ());if(!W(b))return Mp(0);if(a.bM)Ly(a);c=Mp(Bn(8,W(b)*a.gv|0));while(true){d=Fs(a,b,c,0);if(d.dE())break;if(d.c8())c=El(a,c);if(!d.fR())continue;d.gY();}e=Fs(a,b,c,1);if(e.fR())e.gY();while(true){e=Mt(a,c);if(e.dE())break;c=El(a,c);}GY(c);return c;}
function El(a,b){var c,d,e;c=E2(b);d=c.data;d=EH(c,Bn(8,d.length*2|0));e=OS(d);e.fd(BF(b));return e;}
function OY(a,b){Be();return AEy;}
function Uy(a){return;}
function Bs(){BL.call(this);}
function ABM(a,b,c){var d=new Bs();CB(d,a,b,c);return d;}
function CB(a,b,c,d){CY(a,b,c,d);}
function Oq(a,b,c,d){var e;if(!a.w.x(d))return a.e.b(b,c,d);e=a.w.b(b,c,d);if(e>=0)return e;return a.e.b(b,c,d);}
function M7(){Bs.call(this);}
function ACj(a,b,c){var d=new M7();VW(d,a,b,c);return d;}
function VW(a,b,c,d){CB(a,b,c,d);D$();b.s(AEz);}
function SX(a,b,c,d){var e;while(true){e=a.w.b(b,c,d);if(e<=0)break;b=e;}return a.e.b(b,c,d);}
function LC(){CE.call(this);}
function ADc(a,b){var c=new LC();V4(c,a,b);return c;}
function V4(a,b,c){E7(a,b,c);}
function Nu(a,b,c,d){var e,f,g,h;e=a.c0(d);if(e!==null&&(b+e.g()|0)<=d.q()){f=0;while(true){if(f>=e.g()){d.C(a.cV,e.g());return a.e.b(b+e.g()|0,c,d);}g=BP(By(e.d(f)));h=b+f|0;h=By(c.d(h));if(g!=BP(h))break;f=f+1|0;}return (-1);}return (-1);}
function Ir(){var a=this;I.call(a);a.h0=null;a.kH=null;}
function AA_(a,b){var c=new Ir();Tx(c,a,b);return c;}
function Tx(a,b,c){a.kH=b;a.h0=c;O(a);}
function S0(a,b){return a.h0.j(b);}
function DY(){C.call(this);this.j0=null;}
var AEA=null;var AEB=null;function YJ(){YJ=Bc(DY);Z3();}
function Uv(a){var b=new DY();Gg(b,a);return b;}
function Gg(a,b){YJ();L(a);a.j0=b;}
function Z3(){AEA=Uv(B(14));AEB=Uv(B(15));}
function Is(){var a=this;I.call(a);a.h5=null;a.lq=null;}
function ABD(a,b){var c=new Is();Op(c,a,b);return c;}
function Op(a,b,c){a.lq=b;a.h5=c;O(a);}
function V3(a,b){return a.h5.j(b)?0:1;}
function It(){var a=this;I.call(a);a.hs=0;a.h3=null;a.iq=null;a.jD=null;}
function ACl(a,b,c,d){var e=new It();Tb(e,a,b,c,d);return e;}
function Tb(a,b,c,d,e){a.jD=b;a.hs=c;a.h3=d;a.iq=e;O(a);}
function AAz(a,b){return !(a.hs^a.h3.j(b))&&!a.iq.j(b)?0:1;}
function Lp(){C.call(this);}
function RG(b){var c,d,e,f,g,h;c=0;d=1;while(true){e=b.hk.data;f=b.iO;b.iO=f+1|0;g=Qk(e[f]);h=(g%2|0)!=1?0:1;c=c+Cd(d,g/2|0)|0;d=d*46|0;if(!h)break;}return c;}
function Hd(b){var c,d;c=RG(b);d=c/2|0;if(c%2|0)d= -d;return d;}
function Qk(b){if(b<34)return b-32|0;if(b>=92)return (b-32|0)-2|0;return (b-32|0)-1|0;}
function L3(){var a=this;K.call(a);a.fB=0;a.eF=0;a.hK=0;}
function S(a,b){var c=new L3();SI(c,a,b);return c;}
function ADS(a,b,c){var d=new L3();Yd(d,a,b,c);return d;}
function SI(a,b,c){Q(a);a.eF=c;a.fB=b;}
function Yd(a,b,c,d){Q(a);a.hK=d;a.eF=c;a.fB=b;}
function VF(a){var b;b=ADq(a.fB);if(a.hK)b.J.d7(0,2048);b.y=a.eF;return b;}
function Jb(){var a=this;I.call(a);a.io=0;a.gH=null;a.gU=null;a.kv=null;}
function ADP(a,b,c,d){var e=new Jb();VU(e,a,b,c,d);return e;}
function VU(a,b,c,d,e){a.kv=b;a.io=c;a.gH=d;a.gU=e;O(a);}
function W1(a,b){return !(a.io^a.gH.j(b))&&!a.gU.j(b)?1:0;}
function Iv(){var a=this;I.call(a);a.hx=0;a.g5=null;a.i4=null;a.kd=null;}
function ADI(a,b,c,d){var e=new Iv();Um(e,a,b,c,d);return e;}
function Um(a,b,c,d,e){a.kd=b;a.hx=c;a.g5=d;a.i4=e;O(a);}
function Re(a,b){return a.hx^a.g5.j(b)&&a.i4.j(b)?1:0;}
function Gs(){Y.call(this);this.dL=null;}
function ADJ(a){var b=new Gs();V$(b,a);return b;}
function V$(a,b){var c,d;BG(a);c=J();d=0;while(d<b.g()){c.bx(BP(By(b.d(d))));d=d+1|0;}a.dL=c.f();a.P=c.g();}
function Nz(a,b,c){var d;d=0;while(true){if(d>=a.dL.g())return a.dL.g();if(a.dL.d(d)!=BP(By(c.d(b+d|0))))break;d=d+1|0;}return (-1);}
function Iw(){var a=this;I.call(a);a.g_=0;a.gD=null;a.hq=null;a.kM=null;}
function ACb(a,b,c,d){var e=new Iw();OR(e,a,b,c,d);return e;}
function OR(a,b,c,d,e){a.kM=b;a.g_=c;a.gD=d;a.hq=e;O(a);}
function RH(a,b){return a.g_^a.gD.j(b)&&a.hq.j(b)?0:1;}
function Mj(){BL.call(this);}
function ACQ(a,b,c){var d=new Mj();PL(d,a,b,c);return d;}
function PL(a,b,c,d){CY(a,b,c,d);}
function ZU(a,b,c,d){var e;e=d.q();if(e>b)return a.e.bd(b,e,c,d);return a.e.b(b,c,d);}
function Vl(a,b,c,d){var e;e=d.q();if(a.e.bd(b,e,c,d)>=0)return b;return (-1);}
function Ix(){var a=this;I.call(a);a.iA=null;a.gP=0;a.i9=null;}
function ABu(a,b,c){var d=new Ix();P6(d,a,b,c);return d;}
function P6(a,b,c,d){a.i9=b;a.iA=c;a.gP=d;O(a);}
function YU(a,b){return a.iA.j(b)&&a.gP^a.i9.v.bJ(b)?1:0;}
function Lj(){I.call(this);this.kS=null;}
function ADD(a){var b=new Lj();Nf(b,a);return b;}
function Nf(a,b){a.kS=b;O(a);}
function Yy(a,b){return MQ(b);}
function Iq(){var a=this;I.call(a);a.hg=null;a.i8=0;a.gO=null;}
function ADG(a,b,c){var d=new Iq();NN(d,a,b,c);return d;}
function NN(a,b,c,d){a.gO=b;a.hg=c;a.i8=d;O(a);}
function V2(a,b){return a.hg.j(b)&&a.i8^a.gO.v.bJ(b)?0:1;}
function Bp(){var a=this;R.call(a);a.fh=0;a.c3=0;}
var AEz=null;function D$(){D$=Bc(Bp);U0();}
function AB4(a){var b=new Bp();Cm(b,a);return b;}
function Cm(a,b){D$();Bj(a);a.c3=b;}
function Qe(a,b,c,d){var e,f;e=d.eC(a.c3);d.fA(a.c3,b);f=a.e.b(b,c,d);if(f<0)d.fA(a.c3,e);return f;}
function N4(a){return a.c3;}
function Rd(a,b){return 0;}
function U0(){AEz=ABQ();}
function Fm(){Bp.call(this);}
function AEC(a){var b=new Fm();Lh(b,a);return b;}
function Lh(a,b){Cm(a,b);}
function Rs(a,b,c,d){var e,f;e=a.c5();f=d.bD(e);if(f!=b)b=(-1);return b;}
function CG(){var a=this;C.call(a);a.m=null;a.D=0;}
function AED(){var a=new CG();EU(a);return a;}
function ADi(a){var b=new CG();EE(b,a);return b;}
function EU(a){EE(a,16);}
function EE(a,b){L(a);a.m=$rt_createCharArray(b);}
function H6(a,b){return a.fC(a.D,b);}
function JX(a,b,c){var d,e,f;if(b>=0&&b<=a.D){if(c===null)c=B(16);else if(c.Q())return a;a.bX(a.D+c.g()|0);d=a.D-1|0;while(d>=b){a.m.data[d+c.g()|0]=a.m.data[d];d=d+(-1)|0;}a.D=a.D+c.g()|0;d=0;while(d<c.g()){e=a.m.data;f=b+1|0;e[b]=c.d(d);d=d+1|0;b=f;}return a;}G(E_());}
function If(a,b){return a.gW(b,10);}
function PA(a,b,c){return a.jy(a.D,b,c);}
function Ya(a,b,c,d){var e,f,g,h,i,j,k,l;e=1;if(c<0){e=0;c= -c;}a:{if(c<d){if(e)BB(a,b,b+1|0);else{BB(a,b,b+2|0);f=a.m.data;g=b+1|0;f[b]=45;b=g;}a.m.data[b]=D9(c,d);}else{h=1;i=1;j=2147483647/d|0;b:{while(true){k=Cd(h,d);if(k>c){k=h;break b;}i=i+1|0;if(k>j)break;h=k;}}if(!e)i=i+1|0;BB(a,b,b+i|0);if(e)l=b;else{f=a.m.data;l=b+1|0;f[b]=45;}while(true){if(k<=0)break a;f=a.m.data;g=l+1|0;f[l]=D9(c/k|0,d);c=c%k|0;k=k/d|0;l=g;}}}return a;}
function Ka(a,b){return a.iV(a.D,b);}
function Hr(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=BV(c,0.0);if(!d){BB(a,b,b+3|0);e=a.m.data;d=b+1|0;e[b]=48;e=a.m.data;f=d+1|0;e[d]=46;a.m.data[f]=48;return a;}if(!d){BB(a,b,b+4|0);e=a.m.data;d=b+1|0;e[b]=45;e=a.m.data;f=d+1|0;e[d]=48;e=a.m.data;d=f+1|0;e[f]=46;a.m.data[d]=48;return a;}if(isNaN(c)?1:0){BB(a,b,b+3|0);e=a.m.data;d=b+1|0;e[b]=78;e=a.m.data;f=d+1|0;e[d]=97;a.m.data[f]=78;return a;}if(!isFinite(c)?1:0){if(d>0){BB(a,b,b+8|0);d=b;}else{BB(a,b,b+9|0);e=a.m.data;d=b+1|0;e[b]=45;}e=a.m.data;f=d+
1|0;e[d]=73;e=a.m.data;d=f+1|0;e[f]=110;e=a.m.data;f=d+1|0;e[d]=102;e=a.m.data;d=f+1|0;e[f]=105;e=a.m.data;f=d+1|0;e[d]=110;e=a.m.data;d=f+1|0;e[f]=105;e=a.m.data;f=d+1|0;e[d]=116;a.m.data[f]=121;return a;}AB1();g=AEh;G4(c,g);h=g.fQ;i=g.fs;j=g.g9;k=1;l=1;if(j){j=1;l=2;}m=9;n=Vx(h);if(n>0)m=m-n|0;if(i<7&&i>=(-3)){if(i>=0){k=i+1|0;m=Bn(m,k+1|0);i=0;}else if(i<0){h=h/AEd.data[ -i]|0;m=m-i|0;i=0;}}if(i){l=l+2|0;if(!(i>(-10)&&i<10))l=l+1|0;if(i<0)l=l+1|0;}if(i&&m==k)m=m+1|0;d=l+m|0;BB(a,b,b+d|0);if(!j)f=b;else{e
=a.m.data;f=b+1|0;e[b]=45;}o=100000000;p=0;while(p<m){if(o<=0)q=0;else{q=h/o|0;h=h%o|0;}e=a.m.data;d=f+1|0;e[f]=(48+q|0)&65535;k=k+(-1)|0;if(k)f=d;else{e=a.m.data;f=d+1|0;e[d]=46;}o=o/10|0;p=p+1|0;}if(i){e=a.m.data;d=f+1|0;e[f]=69;if(i>=0)f=d;else{i= -i;e=a.m.data;f=d+1|0;e[d]=45;}if(i<10)r=f;else{e=a.m.data;r=f+1|0;e[f]=(48+(i/10|0)|0)&65535;}a.m.data[r]=(48+(i%10|0)|0)&65535;}return a;}
function Vx(b){var c,d,e,f;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;f=e*100|0;if(b%f|0)f=e;else c=c|2;if(!(b%(f*10|0)|0))c=c|1;return c;}
function F0(a,b){return a.fN(a.D,b);}
function FW(a,b,c){BB(a,b,b+1|0);a.m.data[b]=c;return a;}
function L1(a,b){return a.hO(a.D,b);}
function Kf(a,b,c){return a.fC(b,c===null?B(16):c.f());}
function EO(a,b){var c,d;if(a.m.data.length>=b)return;if(a.m.data.length>=1073741823)c=2147483647;else{d=a.m.data.length*2|0;c=Bn(b,Bn(d,5));}a.m=EH(a.m,c);}
function EA(a){return E5(a.m,0,a.D);}
function FJ(a){return a.D;}
function G5(a,b){if(b>=0&&b<a.D)return a.m.data[b];G(Cs());}
function FR(a,b,c,d){return a.e_(a.D,b,c,d);}
function EB(a,b,c,d,e){var f,g,h,i,j;BB(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.m.data;i=b+1|0;j=d+1|0;h[b]=g[d];b=i;d=j;}return a;}
function EQ(a,b){return a.fW(b,0,b.data.length);}
function KY(a,b,c,d,e){var f,g,h,i;if(b>c)G(Bk(B(17)));while(b<c){f=d.data;g=e+1|0;h=a.m.data;i=b+1|0;f[e]=h[b];e=g;b=i;}}
function Fw(a,b){a.D=b;}
function K$(a,b){var c,d,e;if(b>=0&&b<a.D){a.D=a.D-1|0;while(b<a.D){c=a.m.data;d=a.m.data;e=b+1|0;c[b]=d[e];b=e;}return a;}G(E_());}
function LB(a,b,c){var d,e,f,g,h,i;d=BV(b,c);if(d<=0&&b<=a.D){if(!d)return a;e=a.D-c|0;a.D=a.D-(c-b|0)|0;f=0;while(f<e){g=a.m.data;d=b+1|0;h=a.m.data;i=c+1|0;g[b]=h[c];f=f+1|0;b=d;c=i;}return a;}G(E_());}
function BB(a,b,c){var d,e;d=a.D-b|0;a.bX((a.D+c|0)-b|0);e=d-1|0;while(e>=0){a.m.data[c+e|0]=a.m.data[b+e|0];e=e+(-1)|0;}a.D=a.D+(c-b|0)|0;}
function Dd(){}
function GK(){CG.call(this);}
function GL(a){var b=new GK();Zf(b,a);return b;}
function J(){var a=new GK();YA(a);return a;}
function Zf(a,b){EE(a,b);}
function YA(a){EU(a);}
function Oj(a,b){H6(a,b);return a;}
function O9(a,b){If(a,b);return a;}
function W_(a,b){Ka(a,b);return a;}
function N7(a,b){F0(a,b);return a;}
function Td(a,b,c,d){FR(a,b,c,d);return a;}
function US(a,b){EQ(a,b);return a;}
function Or(a,b){L1(a,b);return a;}
function Vj(a,b,c){Hr(a,b,c);return a;}
function ST(a,b,c,d,e){EB(a,b,c,d,e);return a;}
function Zk(a,b,c){Kf(a,b,c);return a;}
function PX(a,b,c){FW(a,b,c);return a;}
function XG(a,b,c){LB(a,b,c);return a;}
function VC(a,b){K$(a,b);return a;}
function ZD(a,b,c){JX(a,b,c);return a;}
function ZQ(a,b){Fw(a,b);}
function UJ(a,b,c,d,e){KY(a,b,c,d,e);}
function Zv(a,b,c,d,e){return a.lQ(b,c,d,e);}
function T7(a,b,c,d){return a.jJ(b,c,d);}
function QW(a){return FJ(a);}
function Rw(a){return EA(a);}
function ZV(a,b){EO(a,b);}
function Oo(a,b,c){return a.j2(b,c);}
function Nv(a,b,c){return a.lf(b,c);}
function Xc(a,b,c){return a.k6(b,c);}
function AAh(a,b,c){return a.jY(b,c);}
function DE(){Ec.call(this);}
function AAH(){var a=new DE();L8(a);return a;}
function L8(a){Jg(a);}
function KE(a){return I$(a).I(48,57);}
function KS(){T.call(this);}
function ABE(){var a=new KS();ZF(a);return a;}
function ZF(a){BA(a);}
function KF(){var a=this;V.call(a);a.fF=null;a.e9=null;}
function EW(a,b){var c=new KF();YQ(c,a,b);return c;}
function YQ(a,b,c){BC(a);a.fF=b;a.e9=c;}
function P9(a,b,c,d){var e;e=a.fF.b(b,c,d);if(e<0)e=a.e9.b(b,c,d);if(e>=0)return e;return (-1);}
function Qn(a,b){a.e=b;a.e9.s(b);a.fF.s(b);}
function RM(a,b){return 1;}
function Q7(a,b){return 1;}
function F4(){}
function Ds(){}
function E1(){}
function BT(){C.call(this);}
function AEE(){var a=new BT();CR(a);return a;}
function CR(a){L(a);}
function OH(a,b,c,d){var e,f,g;e=0;while(e<d){f=b.data;g=c+1|0;a.e2(f[c]);e=e+1|0;c=g;}}
function Mu(){var a=this;BT.call(a);a.b1=null;a.cm=0;}
function AAM(){var a=new Mu();ZP(a);return a;}
function AEF(a){var b=new Mu();H0(b,a);return b;}
function ZP(a){H0(a,32);}
function H0(a,b){CR(a);a.b1=$rt_createByteArray(b);}
function OG(a,b){var c,d;EM(a,a.cm+1|0);c=a.b1.data;d=a.cm;a.cm=d+1|0;c[d]=b<<24>>24;}
function P5(a,b,c,d){var e,f,g,h,i;EM(a,a.cm+d|0);e=0;while(e<d){f=b.data;g=a.b1.data;h=a.cm;a.cm=h+1|0;i=c+1|0;g[h]=f[c];e=e+1|0;c=i;}}
function EM(a,b){var c;if(a.b1.data.length<b){c=Bn(b,(a.b1.data.length*3|0)/2|0);a.b1=FI(a.b1,c);}}
function WZ(a,b){return ABz(a.b1,0,a.cm,b);}
function GO(){var a=this;V.call(a);a.h_=null;a.jo=0;}
function AAL(a){var b=new GO();Wq(b,a);return b;}
function Wq(a,b){BC(a);a.h_=b.c2();a.jo=b.G;}
function Vo(a,b){a.e=b;}
function XQ(a,b,c,d){var e,f,g,h,i,j,k;e=d.bv();f=d.q();g=b+1|0;h=BV(g,f);if(h>0){d.by=1;return (-1);}i=c.d(b);if(!a.h_.j(i))return (-1);if(Bh(i)){if(h<0){j=c.d(g);if(Bq(j))return (-1);}}else if(Bq(i)&&b>e){k=c.d(b-1|0);if(Bh(k))return (-1);}return a.e.b(g,c,d);}
function Mi(){Bs.call(this);}
function ACF(a,b,c){var d=new Mi();R1(d,a,b,c);return d;}
function R1(a,b,c,d){CB(a,b,c,d);}
function Y2(a,b,c,d){var e;if(!a.w.x(d))return a.e.b(b,c,d);e=a.e.b(b,c,d);if(e>=0)return e;return a.w.b(b,c,d);}
function Cr(){Bp.call(this);}
function ADe(){var a=new Cr();V_(a);return a;}
function V_(a){Cm(a,0);}
function Xm(a,b,c,d){if(d.ig()!=1&&b!=d.q())return (-1);d.jH();d.fA(0,b);return b;}
function H8(){B8.call(this);}
function Ty(a){var b=new H8();Ol(b,a);return b;}
function Ol(a,b){Ib(a,b);}
function J0(){Bs.call(this);}
function AAV(a,b,c){var d=new J0();Zi(d,a,b,c);return d;}
function Zi(a,b,c,d){CB(a,b,c,d);D$();b.s(AEz);}
function OF(a,b,c,d){var e,f;e=a.w.b(b,c,d);if(e<0)return (-1);if(e>b){while(true){f=a.w.b(e,c,d);if(f<=e)break;e=f;}b=e;}return a.e.b(b,c,d);}
function Kl(){Y.call(this);}
function Cw(a){var b=new Kl();Ok(b,a);return b;}
function Ok(a,b){Hj(a,b);a.P=0;}
function Ut(a,b,c){return 0;}
function Vm(a,b,c,d){var e,f,g,h,i;e=d.q();f=d.bv();while(true){g=BV(b,e);if(g>0)return (-1);if(g<0){h=c.d(b);if(Bq(h)&&b>f){i=c.d(b-1|0);if(Bh(i)){b=b+1|0;continue;}}}if(a.e.b(b,c,d)>=0)break;b=b+1|0;}return b;}
function Sv(a,b,c,d,e){var f,g,h,i;f=e.q();g=e.bv();while(true){if(c<b)return (-1);if(c<f){h=d.d(c);if(Bq(h)&&c>g){i=d.d(c-1|0);if(Bh(i)){c=c+(-1)|0;continue;}}}if(a.e.b(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function O5(a,b){return 0;}
function Ig(){CG.call(this);}
function SL(){var a=new Ig();Xx(a);return a;}
function Xx(a){EU(a);}
function Vp(a,b){F0(a,b);return a;}
function Y1(a,b,c,d){FR(a,b,c,d);return a;}
function Ux(a,b){EQ(a,b);return a;}
function Oc(a,b,c,d,e){EB(a,b,c,d,e);return a;}
function XF(a,b,c){FW(a,b,c);return a;}
function OL(a,b){Fw(a,b);}
function VB(a,b,c,d,e){return a.jC(b,c,d,e);}
function Ra(a,b,c,d){return a.lR(b,c,d);}
function NO(a,b){return G5(a,b);}
function ZK(a){return FJ(a);}
function Rq(a){return EA(a);}
function RV(a,b){EO(a,b);}
function Vs(a,b,c){return a.lG(b,c);}
function CD(){var a=this;C.call(a);a.fX=0;a.K=0;a.bH=0;a.c9=0;}
function AEG(a){var b=new CD();Fq(b,a);return b;}
function Fq(a,b){L(a);a.c9=(-1);a.fX=b;a.bH=b;}
function J8(a){return a.fX;}
function BF(a){return a.K;}
function Fx(a,b){if(b>=0&&b<=a.bH){a.K=b;if(b<a.c9)a.c9=0;return a;}G(Bx(J().a(B(18)).n(b).a(B(19)).n(a.bH).a(B(20)).f()));}
function Kx(a){return a.bH;}
function IN(a){a.K=0;a.bH=a.fX;a.c9=(-1);return a;}
function Mz(a){a.bH=a.K;a.K=0;a.c9=(-1);return a;}
function W(a){return a.bH-a.K|0;}
function BQ(a){return a.K>=a.bH?0:1;}
function Gk(){I.call(this);this.jk=null;}
function AAR(a){var b=new Gk();Y8(b,a);return b;}
function Y8(a,b){a.jk=b;O(a);}
function YK(a,b){return Ky(b);}
function Da(){C.call(this);}
var AEH=null;var AEI=null;var AEJ=null;function AB2(){AB2=Bc(Da);Ui();}
function ADk(){var a=new Da();KA(a);return a;}
function KA(a){AB2();L(a);}
function Lx(a,b){var c,d,e;c=0;while(true){if(c>=AEJ.data.length)G(AAY(B(21),B(21),b));d=AEJ.data[c];e=d.data;if(b.ca(e[0]))break;c=c+1|0;}return e[1];}
function Ui(){var b,c,d,e;AEH=ACy();AEI=ADC();b=E($rt_arraycls(C),194);c=b.data;d=E(C,2);e=d.data;e[0]=B(22);e[1]=ADA();c[0]=d;d=E(C,2);e=d.data;e[0]=B(23);e[1]=AAN();c[1]=d;d=E(C,2);e=d.data;e[0]=B(24);e[1]=ACq();c[2]=d;d=E(C,2);e=d.data;e[0]=B(25);e[1]=AC3();c[3]=d;d=E(C,2);e=d.data;e[0]=B(26);e[1]=AEI;c[4]=d;d=E(C,2);e=d.data;e[0]=B(27);e[1]=AAH();c[5]=d;d=E(C,2);e=d.data;e[0]=B(28);e[1]=ADu();c[6]=d;d=E(C,2);e=d.data;e[0]=B(29);e[1]=ABh();c[7]=d;d=E(C,2);e=d.data;e[0]=B(30);e[1]=AA2();c[8]=d;d=E(C,2);e=
d.data;e[0]=B(31);e[1]=ABv();c[9]=d;d=E(C,2);e=d.data;e[0]=B(32);e[1]=ACs();c[10]=d;d=E(C,2);e=d.data;e[0]=B(33);e[1]=ABm();c[11]=d;d=E(C,2);e=d.data;e[0]=B(34);e[1]=ABH();c[12]=d;d=E(C,2);e=d.data;e[0]=B(35);e[1]=AAI();c[13]=d;d=E(C,2);e=d.data;e[0]=B(36);e[1]=ACS();c[14]=d;d=E(C,2);e=d.data;e[0]=B(37);e[1]=ACk();c[15]=d;d=E(C,2);e=d.data;e[0]=B(38);e[1]=AAF();c[16]=d;d=E(C,2);e=d.data;e[0]=B(39);e[1]=ACe();c[17]=d;d=E(C,2);e=d.data;e[0]=B(40);e[1]=AAG();c[18]=d;d=E(C,2);e=d.data;e[0]=B(41);e[1]=ABC();c[19]
=d;d=E(C,2);e=d.data;e[0]=B(42);e[1]=ADf();c[20]=d;d=E(C,2);e=d.data;e[0]=B(43);e[1]=ABV();c[21]=d;d=E(C,2);e=d.data;e[0]=B(44);e[1]=AAT();c[22]=d;d=E(C,2);e=d.data;e[0]=B(45);e[1]=ACn();c[23]=d;d=E(C,2);e=d.data;e[0]=B(46);e[1]=ACc();c[24]=d;d=E(C,2);e=d.data;e[0]=B(47);e[1]=AC_();c[25]=d;d=E(C,2);e=d.data;e[0]=B(48);e[1]=ABB();c[26]=d;d=E(C,2);e=d.data;e[0]=B(49);e[1]=ABU();c[27]=d;d=E(C,2);e=d.data;e[0]=B(50);e[1]=AEH;c[28]=d;d=E(C,2);e=d.data;e[0]=B(51);e[1]=AA6();c[29]=d;d=E(C,2);e=d.data;e[0]=B(52);e[1]
=ABj();c[30]=d;d=E(C,2);e=d.data;e[0]=B(53);e[1]=AEH;c[31]=d;d=E(C,2);e=d.data;e[0]=B(54);e[1]=AAB();c[32]=d;d=E(C,2);e=d.data;e[0]=B(55);e[1]=AEI;c[33]=d;d=E(C,2);e=d.data;e[0]=B(56);e[1]=ACT();c[34]=d;d=E(C,2);e=d.data;e[0]=B(57);e[1]=H(0,127);c[35]=d;d=E(C,2);e=d.data;e[0]=B(58);e[1]=H(128,255);c[36]=d;d=E(C,2);e=d.data;e[0]=B(59);e[1]=H(256,383);c[37]=d;d=E(C,2);e=d.data;e[0]=B(60);e[1]=H(384,591);c[38]=d;d=E(C,2);e=d.data;e[0]=B(61);e[1]=H(592,687);c[39]=d;d=E(C,2);e=d.data;e[0]=B(62);e[1]=H(688,767);c[40]
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
=d;d=E(C,2);e=d.data;e[0]=B(172);e[1]=H(65056,65071);c[150]=d;d=E(C,2);e=d.data;e[0]=B(173);e[1]=H(65072,65103);c[151]=d;d=E(C,2);e=d.data;e[0]=B(174);e[1]=H(65104,65135);c[152]=d;d=E(C,2);e=d.data;e[0]=B(175);e[1]=H(65136,65279);c[153]=d;d=E(C,2);e=d.data;e[0]=B(176);e[1]=H(65280,65519);c[154]=d;d=E(C,2);e=d.data;e[0]=B(177);e[1]=H(0,1114111);c[155]=d;d=E(C,2);e=d.data;e[0]=B(178);e[1]=ABo();c[156]=d;d=E(C,2);e=d.data;e[0]=B(179);e[1]=S(0,1);c[157]=d;d=E(C,2);e=d.data;e[0]=B(180);e[1]=Dc(62,1);c[158]=d;d=E(C,
2);e=d.data;e[0]=B(181);e[1]=S(1,1);c[159]=d;d=E(C,2);e=d.data;e[0]=B(182);e[1]=S(2,1);c[160]=d;d=E(C,2);e=d.data;e[0]=B(183);e[1]=S(3,0);c[161]=d;d=E(C,2);e=d.data;e[0]=B(184);e[1]=S(4,0);c[162]=d;d=E(C,2);e=d.data;e[0]=B(185);e[1]=S(5,1);c[163]=d;d=E(C,2);e=d.data;e[0]=B(186);e[1]=Dc(448,1);c[164]=d;d=E(C,2);e=d.data;e[0]=B(187);e[1]=S(6,1);c[165]=d;d=E(C,2);e=d.data;e[0]=B(188);e[1]=S(7,0);c[166]=d;d=E(C,2);e=d.data;e[0]=B(189);e[1]=S(8,1);c[167]=d;d=E(C,2);e=d.data;e[0]=B(190);e[1]=Dc(3584,1);c[168]=d;d
=E(C,2);e=d.data;e[0]=B(191);e[1]=S(9,1);c[169]=d;d=E(C,2);e=d.data;e[0]=B(192);e[1]=S(10,1);c[170]=d;d=E(C,2);e=d.data;e[0]=B(193);e[1]=S(11,1);c[171]=d;d=E(C,2);e=d.data;e[0]=B(194);e[1]=Dc(28672,0);c[172]=d;d=E(C,2);e=d.data;e[0]=B(195);e[1]=S(12,0);c[173]=d;d=E(C,2);e=d.data;e[0]=B(196);e[1]=S(13,0);c[174]=d;d=E(C,2);e=d.data;e[0]=B(197);e[1]=S(14,0);c[175]=d;d=E(C,2);e=d.data;e[0]=B(198);e[1]=ADl(983040,1,1);c[176]=d;d=E(C,2);e=d.data;e[0]=B(199);e[1]=S(15,0);c[177]=d;d=E(C,2);e=d.data;e[0]=B(200);e[1]
=S(16,1);c[178]=d;d=E(C,2);e=d.data;e[0]=B(201);e[1]=S(18,1);c[179]=d;d=E(C,2);e=d.data;e[0]=B(202);e[1]=ADS(19,0,1);c[180]=d;d=E(C,2);e=d.data;e[0]=B(203);e[1]=Dc(1643118592,1);c[181]=d;d=E(C,2);e=d.data;e[0]=B(204);e[1]=S(20,0);c[182]=d;d=E(C,2);e=d.data;e[0]=B(205);e[1]=S(21,0);c[183]=d;d=E(C,2);e=d.data;e[0]=B(206);e[1]=S(22,0);c[184]=d;d=E(C,2);e=d.data;e[0]=B(207);e[1]=S(23,0);c[185]=d;d=E(C,2);e=d.data;e[0]=B(208);e[1]=S(24,1);c[186]=d;d=E(C,2);e=d.data;e[0]=B(209);e[1]=Dc(2113929216,1);c[187]=d;d=E(C,
2);e=d.data;e[0]=B(210);e[1]=S(25,1);c[188]=d;d=E(C,2);e=d.data;e[0]=B(211);e[1]=S(26,0);c[189]=d;d=E(C,2);e=d.data;e[0]=B(212);e[1]=S(27,0);c[190]=d;d=E(C,2);e=d.data;e[0]=B(213);e[1]=S(28,1);c[191]=d;d=E(C,2);e=d.data;e[0]=B(214);e[1]=S(29,0);c[192]=d;d=E(C,2);e=d.data;e[0]=B(215);e[1]=S(30,0);c[193]=d;AEJ=b;}
function CN(){var a=this;C.call(a);a.g6=null;a.kI=0;}
function AEK(a,b){var c=new CN();FK(c,a,b);return c;}
function FK(a,b,c){L(a);a.g6=b;a.kI=c;}
function MF(a){return a.g6;}
function JY(b,c){var d,e,f,g,h;d=b.j4();if(d===null)G(Bx(J().a(B(216)).a(b.bT()).f()));e=d.data;f=e.length;g=0;while(true){if(g>=f)G(Bx(J().a(B(217)).a(b.bT()).a(B(218)).ib(c).a(B(219)).f()));h=e[g];if(MF(h).ca(c))break;g=g+1|0;}return h;}
function B3(){CN.call(this);}
var AEL=null;var AEM=null;var AEN=null;var AEO=null;var AEP=null;function Fo(){Fo=Bc(B3);Sb();}
function FH(a,b){var c=new B3();HS(c,a,b);return c;}
function Ww(){Fo();return AEP.dC();}
function GT(b){Fo();return JY(D(B3),b);}
function HS(a,b,c){Fo();FK(a,b,c);}
function Sb(){var b,c;AEL=FH(B(220),0);AEM=FH(B(221),1);AEN=FH(B(222),2);AEO=FH(B(223),3);b=E(B3,4);c=b.data;c[0]=AEL;c[1]=AEM;c[2]=AEN;c[3]=AEO;AEP=b;}
function Gd(){K.call(this);}
function AAT(){var a=new Gd();Sc(a);return a;}
function Sc(a){Q(a);}
function Wl(a){var b;b=AB7(a);b.y=1;return b;}
function Ci(){var a=this;V.call(a);a.c6=0;a.fw=null;a.eO=null;a.eG=0;}
function ADO(a,b){var c=new Ci();EP(c,a,b);return c;}
function EP(a,b,c){BC(a);a.c6=1;a.eO=b;a.eG=c;}
function YC(a,b){a.e=b;}
function Qo(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;e=$rt_createIntArray(4);f=0;g=d.q();if(b>=g)return (-1);h=a.f$(b,c,g);i=b+a.c6|0;j=KO(h);if(j===null){k=e.data;l=1;k[f]=h;}else{l=j.data.length;Gh(j,0,e,0,l);l=f+l|0;}a:{if(i<g){m=a.f$(i,c,g);while(l<4){if(!Q3(m)){k=e.data;n=l+1|0;k[l]=m;}else{k=KO(m).data;if(k.length!=2){o=e.data;n=l+1|0;o[l]=k[0];}else{o=e.data;m=l+1|0;o[l]=k[0];n=m+1|0;o[m]=k[1];}}i=i+a.c6|0;if(i>=g){l=n;break a;}m=a.f$(i,c,g);l=n;}}}if(l!=a.eG)return (-1);p=0;while(true){if(p>=l)return a.e.b(i,
c,d);if(e.data[p]!=a.eO.data[p])break;p=p+1|0;}return (-1);}
function FF(a){var b,c;if(a.fw===null){b=J();c=0;while(c<a.eG){b.d_(CJ(a.eO.data[c]));c=c+1|0;}a.fw=b.f();}return a.fw;}
function Yq(a,b,c,d){var e,f,g,h,i;a.c6=1;if(b>=(d-1|0))e=c.d(b);else{f=b+1|0;e=c.d(b);g=c.d(f);if(CS(e,g)){h=$rt_createCharArray(2);i=h.data;i[0]=e;i[1]=g;e=Io(h,0);a.c6=2;}}return e;}
function Zu(a,b){var c,d;a:{if(b instanceof Ci){c=b;if(!FF(c).ca(FF(a))){d=0;break a;}}d=1;}return d;}
function Su(a,b){return 1;}
function H2(){Ci.call(this);}
function ADH(a,b){var c=new H2();RI(c,a,b);return c;}
function RI(a,b,c){EP(a,b,c);}
function B9(){CN.call(this);}
var AEQ=null;var AER=null;var AES=null;var AET=null;function DR(){DR=Bc(B9);Qa();}
function KD(a,b){var c=new B9();G9(c,a,b);return c;}
function Ry(){DR();return AET.dC();}
function Hh(b){DR();return JY(D(B9),b);}
function G9(a,b,c){DR();FK(a,b,c);}
function Qa(){var b,c;AEQ=KD(B(224),0);AER=KD(B(225),1);AES=KD(B(226),2);b=E(B9,3);c=b.data;c[0]=AEQ;c[1]=AER;c[2]=AES;AET=b;}
function CC(){CO.call(this);}
function AEU(a){var b=new CC();FE(b,a);return b;}
function FE(a,b){GW(a,b);}
function K0(){CC.call(this);}
function AEV(a){var b=new K0();St(b,a);return b;}
function St(a,b){FE(a,b);}
function Ms(){Bp.call(this);}
function AAO(){var a=new Ms();Nh(a);return a;}
function Nh(a){Cm(a,(-1));}
function SM(a,b,c,d){return b;}
function J1(){K.call(this);}
function ACq(){var a=new J1();QR(a);return a;}
function QR(a){Q(a);}
function UQ(a){return Bw().I(0,127);}
function D8(){V.call(this);}
function ADo(a,b){var c=new D8();HH(c,a,b);return c;}
function HH(a,b,c){HV(a,b,c);}
function Qp(a,b,c,d){var e,f,g,h,i;e=d.bD(a.A);d.C(a.A,b);f=a.N.U();g=0;while(true){if(g>=f){d.C(a.A,e);return (-1);}h=a.N.E(g);i=h.b(b,c,d);if(i>=0)break;g=g+1|0;}return i;}
function S6(a,b){var c;c=b.bD(a.A);return !c?0:1;}
function BS(){D8.call(this);}
function AA7(a,b){var c=new BS();Dh(c,a,b);return c;}
function Dh(a,b,c){HH(a,b,c);}
function TO(a,b,c,d){var e,f,g,h,i;e=d.bD(a.A);d.C(a.A,b);f=a.N.U();g=0;while(g<f){h=a.N.E(g);i=h.b(b,c,d);if(i>=0)return a.e.b(a.br.bt(),c,d);g=g+1|0;}d.C(a.A,e);return (-1);}
function Sr(a,b){a.e=b;}
function GB(){BS.call(this);}
function AB$(a,b){var c=new GB();Wr(c,a,b);return c;}
function Wr(a,b,c){Dh(a,b,c);}
function QA(a,b,c,d){var e,f,g,h;e=a.N.U();f=0;while(f<e){g=a.N.E(f);h=g.b(b,c,d);if(h>=0)return a.e.b(b,c,d);f=f+1|0;}return (-1);}
function WR(a,b){return 0;}
function CA(){C.call(this);this.k1=null;}
function AEW(){var a=new CA();EI(a);return a;}
function AEX(a){var b=new CA();Lm(b,a);return b;}
function EI(a){Lm(a,AB5());}
function Lm(a,b){L(a);a.k1=b;}
function MX(){var a=this;CA.call(a);a.cR=null;a.eB=0;}
function Ex(a){var b=new MX();Tv(b,a);return b;}
function Tv(a,b){EI(a);if(b!==null){a.cR=b;return;}G(Rv());}
function Tr(a,b,c,d){var e,f,g,h,i,j;MK(a);if(a.eB>=a.cR.g())return (-1);e=U(a.cR.g()-a.eB|0,d);f=0;while(f<e){g=b.data;h=c+1|0;i=a.cR;j=a.eB;a.eB=j+1|0;g[c]=i.d(j);f=f+1|0;c=h;}return e;}
function Ni(a){a.cR=null;}
function MK(a){if(a.cR!==null)return;G(Pw());}
function Kp(){BS.call(this);}
function AAK(a,b){var c=new Kp();Vi(c,a,b);return c;}
function Vi(a,b,c){Dh(a,b,c);}
function Q2(a,b,c,d){var e,f,g;e=a.N.U();f=0;while(true){if(f>=e)return a.e.b(b,c,d);g=a.N.E(f);if(g.b(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function VI(a,b){return 0;}
function Fh(){}
function HJ(){var a=this;C.call(a);a.ei=0;a.im=0;a.is=0;a.gI=0;a.c_=null;}
function ABb(a){var b=new HJ();Rc(b,a);return b;}
function Rc(a,b){a.c_=b;L(a);a.im=a.c_.b7;a.is=a.c_.U();a.gI=(-1);}
function O1(a){return a.ei>=a.is?0:1;}
function Wn(a){var b,c;Je(a);a.gI=a.ei;b=a.c_;c=a.ei;a.ei=c+1|0;return b.E(c);}
function Je(a){if(a.im>=a.c_.b7)return;G(ABE());}
function Fd(){}
function DH(){}
function D3(){}
function Fp(){}
function DZ(){}
function JB(){}
function L_(b){var c,d;c=b.lastChild;while(c!==null){d=c.previousSibling;if(c.nodeType!=2)b.removeChild(c);c=d;}return b;}
function IR(){var a=this;C.call(a);a.gN=null;a.iI=Long_ZERO;a.iM=0.0;}
function ABr(a,b){var c=new IR();X5(c,a,b);return c;}
function Pg(b,c){var d,e,$$je;a:{try{d=Yk(b,Ex(c));}catch($$e){$$je=Bd($$e);if($$je instanceof BX){e=$$je;break a;}else{throw $$e;}}return d;}Ch().o(B(227));e.ew();return null;}
function Yk(b,c){var d,e,f,g,h,i,$$je;d=BW();e=Eh(c);a:{while(true){try{f=e.em();if(f===null)break a;g=B7(f,32);if(!f.el(B(228))&&g.U()>=2){h=g.E(0).c1();if(h.g()==2&&b.cr(h.d(0))>=0&&b.cr(h.d(1))>=0){i=FM(g.E(1));d.bo(ABr(h,i));}}continue;}catch($$e){$$je=Bd($$e);f=$$je;}}e.bG();G(f);}e.bG();TJ(d);return d;}
function TJ(b){var c,d,e;c=Long_ZERO;d=b.Y();while(d.Z()){e=d.V();c=Long_add(c,e.dk());}d=b.Y();while(d.Z()){e=d.V();e.iM=Long_toNumber(e.dk())/Long_toNumber(c);}}
function X5(a,b,c){L(a);a.gN=b;a.iI=c;}
function TM(a){return a.gN;}
function Z7(a){return a.iI;}
function X1(a){return a.iM;}
function B4(){}
function G3(){var a=this;Cv.call(a);a.gl=0;a.eq=0;}
function ABG(a,b){var c=new G3();Yp(c,a,b);return c;}
function Yp(a,b,c){En(a);a.gl=b;a.eq=c;}
function Wy(a){return a.gl;}
function WS(a){return a.eq;}
function Pv(a){return J().a(B(229)).n(a.gl).a(B(230)).a(a.eq==2147483647?B(21):ACN(a.eq).f()).a(B(231)).f();}
function DT(){T.call(this);}
function ACW(){var a=new DT();GA(a);return a;}
function GA(a){BA(a);}
function ME(){DT.call(this);}
function Gm(){var a=new ME();YO(a);return a;}
function YO(a){GA(a);}
function GG(){I.call(this);this.jm=null;}
function AA9(a){var b=new GG();UV(b,a);return b;}
function UV(a,b){a.jm=b;O(a);}
function Qv(a,b){return Gl(b);}
function Hl(){C.call(this);}
function IQ(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(Cx());}return b.data.length;}
function IW(b,c){if(b===null)G(Rv());if(b===D($rt_voidcls()))G(Cx());if(c<0)G(ADb());return XZ(b.lr(),c);}
function XZ(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
function Id(){C.call(this);}
function AA$(){var a=new Id();Rz(a);return a;}
function Rz(a){L(a);}
function JI(){C.call(this);}
function D0(){DW.call(this);}
function AEY(a,b,c){var d=new D0();H$(d,a,b,c);return d;}
function H$(a,b,c,d){MJ(a,b,c,d);}
function WC(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=$rt_createByteArray(U(W(b),512));e=0;f=0;g=$rt_createCharArray(U(W(c),512));a:{while(true){if((e+32|0)>f&&BQ(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=U(W(b)+j|0,i.length);b.lj(d,j,f-j|0);e=0;}if(!BQ(c)){if(!BQ(b)&&e>=f){Be();k=AEy;}else{Be();k=AEw;}break a;}i=g.data;l=U(W(c),i.length);m=ABF(b,c);k=a.km(d,e,f,g,0,l,m);e=m.iN;if(k===null&&0==m.fc){Be();k=AEy;}j=m.fc;c.kV(g,0,j);if(k!==null)break;}}b.es(BF(b)-(f-e|0)|0);return k;}
function HD(){D0.call(this);}
function ABT(a){var b=new HD();ZR(b,a);return b;}
function ZR(a,b){H$(a,b,0.3333333432674408,0.5);}
function X7(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(h.dh())break a;Be();i=AEy;break a;}n=k+1|0;o=j[k];if(!Ck(a,o)){c=n+(-2)|0;i=BK(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|o&63)&65535;k=n;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(h.dh())break a;Be();i=AEy;break a;}p=k+1|0;o=j[k];k=p+1|0;q=j[p];if(!Ck(a,o))break b;if(!Ck(a,q))break b;r
=((l&15)<<12|(o&63)<<6|q&63)&65535;if(D1(r)){c=k+(-3)|0;i=BK(3);break a;}j=e.data;m=f+1|0;j[f]=r;}else{if((l&248)!=240){c=k+(-1)|0;i=BK(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(h.dh())break a;Be();i=AEy;break a;}if((f+2|0)>g){c=k+(-1)|0;if(h.dy(2))break a;Be();i=AEw;break a;}p=k+1|0;o=j[k];m=p+1|0;q=j[p];k=m+1|0;s=j[m];if(!Ck(a,o))break c;if(!Ck(a,q))break c;if(!Ck(a,s))break c;j=e.data;t=(l&7)<<18|(o&63)<<12|(q&63)<<6|s&63;p=f+1|0;j[f]=CQ(t);m=p+1|0;j[p]=CF(t);}c=k;f=m;}break a;}c=k+(-3)|0;i=BK(1);break a;}c
=k+(-3)|0;i=BK(1);}h.f9(c);h.eM(f);return i;}
function Ck(a,b){return (b&192)!=128?0:1;}
function HX(){CC.call(this);}
function AEZ(a){var b=new HX();RZ(b,a);return b;}
function RZ(a,b){FE(a,b);}
function HW(){K.call(this);}
function ACe(){var a=new HW();R0(a);return a;}
function R0(a){Q(a);}
function T_(a){var b;b=ABc(a);b.y=1;return b;}
function Ft(){}
function Dz(){}
function Dl(){C.call(this);}
function AE0(){var a=new Dl();Lu(a);return a;}
function Lu(a){L(a);}
function UR(a,b){var c,d,e,f;c=b.data;d=a.U();e=c.length;if(e<d)b=IW(Ce(b).eD(),d);else while(d<e){c[d]=null;d=d+1|0;}d=0;f=a.Y();while(f.Z()){c=b.data;e=d+1|0;c[d]=f.V();d=e;}return b;}
function M9(){Bv.call(this);}
function AB_(a,b,c){var d=new M9();SD(d,a,b,c);return d;}
function SD(a,b,c,d){Ct(a,b,c,d);}
function Pt(a,b,c,d){var e;a:{while(true){if((b+a.B.ba()|0)>d.q())break a;e=a.B.H(b,c);if(e<1)break;b=b+e|0;}}return a.e.b(b,c,d);}
function Jh(){var a=this;C.call(a);a.gx=null;a.hS=null;a.iN=0;a.fc=0;}
function ABF(a,b){var c=new Jh();Pf(c,a,b);return c;}
function Pf(a,b,c){L(a);a.gx=b;a.hS=c;}
function Pa(a){return BQ(a.gx);}
function Rb(a,b){return W(a.hS)<b?0:1;}
function WQ(a,b){a.iN=b;}
function SW(a,b){a.fc=b;}
function JL(){C.call(this);}
function N$(b,c){var d,e,f,g,h,i,j,k;if(!b)return B(232);d=1<<c;e=d-1|0;f=(((32-EK(b)|0)+c|0)-1|0)/c|0;g=$rt_createCharArray(f);h=Cd(f-1|0,c);i=0;while(h>=0){j=g.data;k=i+1|0;j[i]=D9(b>>>h&e,d);h=h-c|0;i=k;}return Em(g);}
function Ca(){Bv.call(this);}
function AAP(a,b,c){var d=new Ca();Ek(d,a,b,c);return d;}
function Ek(a,b,c,d){Ct(a,b,c,d);}
function NE(a,b,c,d){var e;e=a.w.b(b,c,d);if(e<0)e=a.e.b(b,c,d);return e;}
function AAu(a,b){FD(a,b);a.w.s(b);}
function KG(){Ca.call(this);}
function AAX(a,b,c){var d=new KG();YW(d,a,b,c);return d;}
function YW(a,b,c,d){Ek(a,b,c,d);}
function OE(a,b,c,d){var e;if((b+a.B.ba()|0)<=d.q()){e=a.B.H(b,c);if(e>=1)b=b+e|0;}return a.e.b(b,c,d);}
function Ie(){I.call(this);this.lo=null;}
function ACE(a){var b=new Ie();NQ(b,a);return b;}
function NQ(a,b){a.lo=b;O(a);}
function Qt(a,b){return CI(b);}
function Gb(){}
function HY(){I.call(this);this.kQ=null;}
function AB7(a){var b=new HY();Zn(b,a);return b;}
function Zn(a,b){a.kQ=b;O(a);}
function XO(a,b){return Lf(b);}
function KW(){Bv.call(this);}
function ACP(a,b,c){var d=new KW();AAx(d,a,b,c);return d;}
function AAx(a,b,c,d){Ct(a,b,c,d);}
function QE(a,b,c,d){var e;while(true){e=a.e.b(b,c,d);if(e>=0)break;if((b+a.B.ba()|0)<=d.q()){e=a.B.H(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
function Ji(){C.call(this);}
function Cq(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Dy(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
function GX(){I.call(this);this.lJ=null;}
function ADM(a){var b=new GX();S$(b,a);return b;}
function S$(a,b){a.lJ=b;O(a);}
function To(a,b){return LV(b);}
function IL(){C.call(this);}
function Th(b){var c,d,e,f;c=AB6(b.cn());d=Hd(c);e=$rt_createIntArray(d);f=0;while(f<d){e.data[f]=Hd(c);f=f+1|0;}return e;}
function D7(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function AAr(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;c=E(EF,16384);d=$rt_createByteArray(16384);e=0;f=0;g=0;h=0;while(h<b.g()){i=D7(b.d(h));if(i==64){h=h+1|0;i=D7(b.d(h));j=0;k=1;l=0;while(l<3){h=h+1|0;m=D7(b.d(h));j=j|Cd(k,m);k=k*64|0;l=l+1|0;}}else if(i<32)j=1;else{i=(i-32|0)<<24>>24;h=h+1|0;j=D7(b.d(h));}if(!i&&j>=128){if(e>0){n=c.data;o=f+1|0;n[f]=VD(g,g+e|0,FI(d,e));f=o;}g=g+(e+j|0)|0;e=0;}else{p=d.data;o=e+j|0;if(o<p.length)q=f;else{n=c.data;q=f+1|0;n[f]=VD(g,g+e|0,FI(d,e));g=g+o|0;e=0;}while(true){o=j
+(-1)|0;if(j<=0)break;r=e+1|0;p[e]=i;e=r;j=o;}f=q;}h=h+1|0;}return L4(c,f);}
function GR(){var a=this;C.call(a);a.lF=null;a.bR=null;a.fO=0;a.fp=0;a.ff=null;a.cP=null;a.fg=null;}
function AAW(){var a=new GR();SO(a);return a;}
function SO(a){L(a);a.bR=BW();a.ff=$rt_createDoubleArray(3);a.cP=$rt_createDoubleMultiArray([3,4]);DR();a.fg=AEQ;}
function TH(a,b,c){var d,e,$$je;a:{try{a.lF=c;HT(a,Ex(b));d=MM(a);}catch($$e){$$je=Bd($$e);if($$je instanceof Bo){e=$$je;break a;}else{throw $$e;}}return d;}Ch().o(B(233));e.ew();return 0;}
function HT(a,b){var c,d,e,f,g,h,i,$$je;c=Eh(b);a:{try{d=0;while(true){e=c.em();if(e===null)break;f=e.cr(35);if(f>=0)e=e.b$(0,f);e=e.hM();if(!e.g())continue;g=B7(e,32);h=0;while(h<g.U()){i=AB3(g.E(h),d,h);a.bR.bo(i);h=h+1|0;}if(g.U()>a.fO)a.fO=g.U();d=d+1|0;if(d>a.fp)a.fp=d;}}catch($$e){$$je=Bd($$e);e=$$je;break a;}c.bG();return;}c.bG();G(e);}
function MM(a){var b,c;b=0;while(b<a.bR.U()){c=0;while(c<a.bR.U()){if(b!=c&&a.bR.E(c).g$(a.bR.E(b).iL()))return 0;c=c+1|0;}b=b+1|0;}return 1;}
function Pb(a,b){var c,d;c=a.bR.Y();while(true){if(!c.Z())return null;d=c.V();if(d.g$(b))break;}return d;}
function AAA(a,b,c){var d,e;d=a.bR.Y();while(true){if(!d.Z())return null;e=d.V();if(e.dn()==b&&e.lh()==c)break;}return e;}
function Zh(a){var b,c,d;b=J();c=a.bR.Y();while(c.Z()){d=c.V();b.d_(d.e3());}return b.f();}
function QB(a){return a.fO;}
function Wd(a){return a.fp;}
function OJ(a,b){return a.ff.data[b];}
function Za(a,b,c){a.ff.data[b]=c;}
function YB(a,b,c){if(b>4)b=9-b|0;if(a.cP.data.length<=b)return 0.0;return a.cP.data[b].data[c];}
function Uh(a,b,c,d){a.cP.data[b].data[c]=d;}
function RJ(a,b){var c;if(b>4)b=9-b|0;if(a.cP.data.length<=b)return 0;c=0;while(c<3){if(a.cP.data[b].data[c]>0.0)return 1;c=c+1|0;}return 0;}
function Xd(a){return a.fg;}
function TF(a,b){a.fg=b;}
function Ed(){DE.call(this);}
function ABh(){var a=new Ed();I1(a);return a;}
function I1(a){L8(a);}
function Gj(a){return KE(a).I(33,64).I(91,96).I(123,126);}
function Ml(){Ed.call(this);}
function AA2(){var a=new Ml();Ve(a);return a;}
function Ve(a){I1(a);}
function Og(a){return Gj(a).be(32);}
function Jx(){K.call(this);}
function ACc(){var a=new Jx();Pu(a);return a;}
function Pu(a){Q(a);}
function Wx(a){return ADa(a);}
function Eg(){}
function D6(){var a=this;C.call(a);a.fq=null;a.ef=null;}
function AE1(a,b){var c=new D6();MN(c,a,b);return c;}
function MN(a,b,c){L(a);a.fq=b;a.ef=c;}
function Ey(){var a=this;D6.call(a);a.eW=0;a.de=null;}
function ACo(a,b){var c=new Ey();RD(c,a,b);return c;}
function RD(a,b,c){MN(a,b,null);a.eW=c;}
function LM(){BS.call(this);}
function ABY(a,b){var c=new LM();Vz(c,a,b);return c;}
function Vz(a,b,c){Dh(a,b,c);}
function Sf(a,b,c,d){var e,f,g,h,i;e=a.N.U();f=!d.c$()?d.bv():0;a:{g=a.e.b(b,c,d);if(g>=0){d.C(a.A,b);h=0;while(true){if(h>=e)break a;i=a.N.E(h);if(i.bd(f,b,c,d)>=0){d.C(a.A,(-1));return g;}h=h+1|0;}}}return (-1);}
function AAm(a,b){return 0;}
function Dj(){var a=this;C.call(a);a.jM=null;a.fV=null;a.jU=0.0;a.go=0.0;a.fi=null;a.f_=null;a.cM=0;}
function AE2(a,b,c,d){var e=new Dj();LX(e,a,b,c,d);return e;}
function AE3(a,b,c){var d=new Dj();K7(d,a,b,c);return d;}
function LX(a,b,c,d,e){L(a);B6();a.fi=AEv;a.f_=AEv;LJ(a,e);a.jM=b;a.fV=e.dC();a.jU=c;a.go=d;}
function K7(a,b,c,d){var e;e=$rt_createByteArray(1);e.data[0]=63;LX(a,b,c,d,e);}
function LJ(a,b){var c;if(b!==null){c=b.data.length;if(c&&c>=a.go)return;}G(Bx(B(234)));}
function Gc(a,b){if(b!==null){a.fi=b;a.fT(b);return a;}G(Bx(B(235)));}
function YZ(a,b){return;}
function LP(a,b){if(b!==null){a.f_=b;a.fv(b);return a;}G(Bx(B(235)));}
function X9(a,b){return;}
function H5(a,b,c,d){var e,f,g,h,$$je;a:{if(a.cM!=3){if(d)break a;if(a.cM!=2)break a;}G(CZ());}a.cM=!d?1:2;while(true){try{e=a.j3(b,c);}catch($$e){$$je=Bd($$e);if($$je instanceof T){f=$$je;G(Ty(f));}else{throw $$e;}}if(e.dE()){if(!d)return e;g=W(b);if(g<=0)return e;e=BK(g);}else if(e.c8())break;h=!e.fZ()?a.fi:a.f_;b:{B6();if(h!==AEx){if(h===AE4)break b;else return e;}if(W(c)<a.fV.data.length)return AEw;KM(c,a.fV);}b.fd(BF(b)+e.g()|0);}return e;}
function GS(a,b){var c;if(a.cM!=2&&a.cM!=4)G(CZ());c=a.jq(b);Be();if(c===AEy)a.cM=3;return c;}
function NU(a,b){Be();return AEy;}
function Mn(){var a=this;Y.call(a);a.bi=null;a.fD=null;a.eN=null;}
function ADm(a){var b=new Mn();Tw(b,a);return b;}
function Tw(a,b){var c;BG(a);a.bi=b.f();a.P=b.g();a.fD=PG(a.P);a.eN=PG(a.P);c=0;while(c<(a.P-1|0)){a.fD.iX(a.bi.d(c),(a.P-c|0)-1|0);a.eN.iX(a.bi.d((a.P-c|0)-1|0),(a.P-c|0)-1|0);c=c+1|0;}}
function TE(a,b,c){return !a.fP(c,b)?(-1):a.P;}
function QO(a,b,c,d){var e,f;e=d.q();while(true){if(b>e)return (-1);f=a.jl(c,b,e);if(f<0)return (-1);if(a.e.b(f+a.P|0,c,d)>=0)break;b=f+1|0;}return f;}
function Wg(a,b,c,d,e){var f;while(true){if(c<b)return (-1);f=a.jw(d,b,c);if(f<0)return (-1);if(a.e.b(f+a.P|0,d,e)>=0)break;c=f+(-1)|0;}return f;}
function Xy(a,b){var c,d,e,f,g;if(b instanceof B0)return b.b_()!=a.bi.d(0)?0:1;if(b instanceof B1)return b.H(0,a.bi.b$(0,1))<=0?0:1;if(!(b instanceof BH)){if(!(b instanceof BZ))return 1;a:{if(a.bi.g()>1){c=b;d=c.gf();e=a.bi.d(0);c=a.bi;f=c.d(1);if(d==BR(e,f)){e=1;break a;}}e=0;}return e;}b:{c:{c=b;if(!c.j(a.bi.d(0))){g=a.bi;if(g.g()<=1)break c;g=a.bi;e=BR(g.d(0),a.bi.d(1));if(!c.j(e))break c;}e=1;break b;}e=0;}return e;}
function W0(a,b,c,d){var e,f;e=a.bi.d(a.P-1|0);while(true){if(c>(d-a.P|0))return (-1);f=b.d((c+a.P|0)-1|0);if(f==e&&a.fP(b,c))break;c=c+a.fD.fE(f)|0;}return c;}
function Vt(a,b,c,d){var e,f,g,h;e=a.bi.d(0);f=b.g();g=(f-d|0)-a.P|0;if(g<=0)d=d+g|0;while(true){if(d<c)return (-1);h=b.d(d);if(h==e&&a.fP(b,d))break;d=d-a.eN.fE(h)|0;}return d;}
function XR(a,b,c){var d;d=0;while(d<a.P){if(b.d(d+c|0)!=a.bi.d(d))return 0;d=d+1|0;}return 1;}
function Lc(){R.call(this);}
function ACK(){var a=new Lc();Yv(a);return a;}
function Yv(a){Bj(a);}
function Qf(a,b,c,d){var e;e=!d.c$()?d.q():c.g();if(b<e)return (-1);d.by=1;d.kJ=1;return a.e.b(b,c,d);}
function Nj(a,b){return 0;}
function Le(){T.call(this);}
function J4(){var a=new Le();Vq(a);return a;}
function Vq(a){BA(a);}
function CM(){Bs.call(this);}
function ADs(a,b,c){var d=new CM();Er(d,a,b,c);return d;}
function Er(a,b,c,d){CB(a,b,c,d);}
function UU(a,b,c,d){var e;if(!a.w.x(d))return a.e.b(b,c,d);e=a.w.b(b,c,d);if(e>=0)return e;return a.e.b(b,c,d);}
function XB(a,b){FD(a,b);a.w.s(b);}
function JU(){K.call(this);}
function AAN(){var a=new JU();YV(a);return a;}
function YV(a){Q(a);}
function VP(a){return Bw().I(65,90);}
function DG(){var a=this;CD.call(a);a.f5=0;a.e$=null;a.lP=null;}
function AE5(a,b,c,d,e){var f=new DG();HK(f,a,b,c,d,e);return f;}
function HK(a,b,c,d,e,f){Fq(a,c);YJ();a.lP=AEA;a.f5=b;a.e$=d;a.K=e;a.bH=f;}
function Mb(b,c,d){return ACz(0,b.data.length,b,c,c+d|0,0,0);}
function Ur(b){return Mb(b,0,b.data.length);}
function Tc(a,b,c,d){var e,f,g,h,i,j;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Bk(J().a(B(236)).n(g).a(B(237)).n(f).f()));if(W(a)<d)G(X8());if(d<0)G(Bk(J().a(B(238)).n(d).a(B(239)).f()));h=a.K+a.f5|0;i=0;while(i<d){g=c+1|0;j=a.e$.data;f=h+1|0;e[c]=j[h];i=i+1|0;c=g;h=f;}a.K=a.K+d|0;return a;}}e=b.data;G(Bk(J().a(B(240)).n(c).a(B(19)).n(e.length).a(B(241)).f()));}
function Xu(a,b,c,d){var e,f,g,h,i,j;if(!d)return a;if(a.dJ())G(Gm());if(W(a)<d)G(IX());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Bk(J().a(B(242)).n(g).a(B(237)).n(f).f()));if(d<0)G(Bk(J().a(B(238)).n(d).a(B(239)).f()));h=a.K+a.f5|0;i=0;while(i<d){j=a.e$.data;g=h+1|0;f=c+1|0;j[h]=e[c];i=i+1|0;h=g;c=f;}a.K=a.K+d|0;return a;}}e=b.data;G(Bk(J().a(B(240)).n(c).a(B(19)).n(e.length).a(B(241)).f()));}
function KM(a,b){return a.hV(b,0,b.data.length);}
function ES(a){IN(a);return a;}
function Vu(a,b){Fx(a,b);return a;}
function Ls(){var a=this;DG.call(a);a.jh=0;a.gM=0;}
function ACz(a,b,c,d,e,f,g){var h=new Ls();OK(h,a,b,c,d,e,f,g);return h;}
function OK(a,b,c,d,e,f,g,h){HK(a,b,c,d,e,f);a.jh=g;a.gM=h;}
function W3(a){return a.gM;}
function DU(){}
function Ff(){var a=this;C.call(a);a.bs=null;a.dl=null;a.gb=null;a.gk=null;a.hF=0;a.ex=0;a.fm=0;a.i7=0;a.bA=0;a.je=0;a.jd=0;a.by=0;a.kJ=0;a.cF=0;a.fu=0;}
function AE6(a,b,c,d,e,f){var g=new Ff();Hp(g,a,b,c,d,e,f);return g;}
function Hp(a,b,c,d,e,f,g){var h;L(a);a.cF=(-1);h=e+1|0;a.hF=h;a.bs=$rt_createIntArray(h*2|0);a.dl=$rt_createIntArray(g);DB(a.dl,(-1));if(f>0)a.gb=$rt_createIntArray(f);DB(a.bs,(-1));a.h8(b,c,d);}
function Xf(a,b,c){a.dl.data[b]=c;}
function AAy(a,b){return a.dl.data[b];}
function NI(a){return a.f8(0);}
function ZM(a,b){F2(a,b);return a.bs.data[(b*2|0)+1|0];}
function S4(a,b,c){a.bs.data[b*2|0]=c;}
function QQ(a,b,c){a.bs.data[(b*2|0)+1|0]=c;}
function R8(a,b){return a.bs.data[b*2|0];}
function Sp(a,b){return a.bs.data[(b*2|0)+1|0];}
function Zm(a,b){var c,d;c=a.cx(b);d=a.eC(b);if((d|c|(d-c|0))>=0&&d<=a.gk.g())return a.gk.fr(c,d).f();return null;}
function Sa(a){return a.e1(0);}
function Sw(a,b){F2(a,b);return a.bs.data[b*2|0];}
function NH(a){if(a.bs.data[0]==(-1)){a.bs.data[0]=a.bA;a.bs.data[1]=a.bA;}a.cF=a.ec();}
function Oi(a,b){return a.gb.data[b];}
function Si(a,b,c){a.gb.data[b]=c;}
function F2(a,b){if(!a.ex)G(CZ());if(b>=0&&b<a.hF)return;G(Bk(EG(b)));}
function XI(a){a.ex=1;}
function XK(a){return a.ex;}
function Y4(a,b,c,d){a.ex=0;a.fu=2;DB(a.bs,(-1));DB(a.dl,(-1));if(b!==null)a.gk=b;if(c>=0)Ln(a,c,d);a.bA=a.fm;}
function Tp(a){a.h8(null,(-1),(-1));}
function Ln(a,b,c){a.fm=b;a.i7=c;}
function TK(a,b){a.bA=b;if(a.cF>=0)b=a.cF;a.cF=b;}
function RA(a){return a.fm;}
function NF(a){return a.i7;}
function Ug(a,b){a.fu=b;}
function V8(a){return a.fu;}
function Xv(a){return a.jd;}
function Oh(a){return a.je;}
function PQ(a){return a.cF;}
function IP(){var a=this;Y.call(a);a.iG=null;a.lc=0;}
function Xk(a){var b=new IP();PH(b,a);return b;}
function PH(a,b){BG(a);a.iG=b.c2();a.lc=b.G;}
function Zs(a,b,c){var d,e;d=a.iG;e=By(c.d(b));return !d.j(BP(e))?(-1):1;}
function Gv(){var a=this;C.call(a);a.g8=0;a.hZ=Long_ZERO;a.g0=0.0;}
function ACt(a,b){var c=new Gv();Pc(c,a,b);return c;}
function OB(b,c){var d,e,$$je;a:{try{d=U4(b,Ex(c));}catch($$e){$$je=Bd($$e);if($$je instanceof BX){e=$$je;break a;}else{throw $$e;}}return d;}Ch().o(B(243));e.ew();return null;}
function U4(b,c){var d,e,f,g,h,i,$$je;d=BW();e=Eh(c);a:{while(true){try{f=e.em();if(f===null)break a;g=B7(f,32);if(!f.el(B(228))&&g.U()>=2){h=g.E(0).c1();if(h.g()==1&&b.fL(h)){i=FM(g.E(1));d.bo(ACt(h.d(0),i));}}continue;}catch($$e){$$je=Bd($$e);f=$$je;}}e.bG();G(f);}e.bG();Wk(d);return d;}
function Wk(b){var c,d,e;c=Long_ZERO;d=b.Y();while(d.Z()){e=d.V();c=Long_add(c,e.dk());}d=b.Y();while(d.Z()){e=d.V();e.g0=Long_toNumber(e.dk())/Long_toNumber(c);}}
function JH(b,c){var d,e;d=c.Y();while(true){if(!d.Z())return null;e=d.V();if(b==e.b_())break;}return e;}
function Pc(a,b,c){L(a);a.g8=b;a.hZ=c;}
function OU(a){return a.g8;}
function OC(a){return a.hZ;}
function OD(a){return a.g0;}
function Gx(){I.call(this);this.ja=null;}
function ABi(a){var b=new Gx();Y$(b,a);return b;}
function Y$(a,b){a.ja=b;O(a);}
function Zw(a,b){return MA(b);}
function H4(){C.call(this);this.dY=null;}
function IO(a){var b=new H4();Qw(b,a);return b;}
function Pe(b){var c,d,e,f,g;Cj();c=AE7.data;d=c.length;e=0;while(e<d){f=c[e];if(b.jO(f.bT())){f.eK(1);g=IO(f);g.fn();return f;}e=e+1|0;}return null;}
function ZA(){var b,c,d,e,f;Cj();b=AE8.data;c=b.length;d=0;while(d<c){e=b[d];e.eK(1);f=IO(e);f.fn();d=d+1|0;}}
function Wo(){var b,c,d,e,f;Cj();b=AE9.data;c=b.length;d=0;while(d<c){e=b[d];e.eK(1);f=IO(e);f.fn();d=d+1|0;}}
function Qw(a,b){L(a);a.dY=b;}
function WV(a){var b,c,d;b=new XMLHttpRequest();c=Cq(AA4(a,b),"stateChanged");b.onreadystatechange=c;d=J().a(B(244)).a(a.dY.hr()).f();b.open("GET",$rt_ustr(d));b.send();}
function J$(a,b){a.dY.lK(b);EX().o(J().a(B(245)).a(a.dY.hr()).f());V0();}
function V0(){var b,c,d,e,f,g,h,i,j;b=0;c=0;Cj();d=AE7.data;e=d.length;f=0;while(f<e){g=d[f];if(g.e0())c=c+1|0;if(g.bN()!==null)b=b+1|0;f=f+1|0;}d=AE8.data;f=d.length;h=0;while(h<f){i=d[h];if(i.e0())c=c+1|0;if(i.bN()!==null)b=b+1|0;h=h+1|0;}d=AE9.data;e=d.length;f=0;while(f<e){j=d[f];if(j.e0())c=c+1|0;if(j.bN()!==null)b=b+1|0;f=f+1|0;}if(!c)c=1;if(b>=c){B2(null);LN(1);}else B2(J().a(B(246)).n((100*b|0)/c|0).a(B(247)).f());}
function QK(b,c){J$(b,c);}
function IM(){C.call(this);}
function N8(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function Ps(b,c){return b!==null&&!(typeof b.constructor.$meta==='undefined'?1:0)&&HN(b.constructor,c)?1:0;}
function HN(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(HN(d[e],c))return 1;e=e+1|0;}return 0;}
function PB(b){var c='$$enumConstants$$';B3[c]=Ww;B9[c]=Ry;PB=function(cls){if(!cls.hasOwnProperty(c)){return null;}if(typeof cls[c]==="function"){cls[c]=cls[c]();}return cls[c];};return PB(b);}
function JR(b){return VV(String.fromCharCode(b));}
function UO(b){return b.$meta.primitive?1:0;}
function Sq(b){return b.$meta.enum?1:0;}
function YL(b){return b.$meta.item;}
function UE(b){return $rt_str(b.$meta.name);}
function Dr(){var a=this;C.call(a);a.jf=null;a.k2=null;}
function AE$(a,b){var c=new Dr();I8(c,a,b);return c;}
function I8(a,b,c){var d,e,f,g;d=c.data;L(a);Fg(b);e=d.length;f=0;while(f<e){g=d[f];Fg(g);f=f+1|0;}a.jf=b;a.k2=c.dC();}
function Fg(b){var c,d;if(b.Q())G(KI(b));if(!Jw(b.d(0)))G(KI(b));c=1;while(c<b.g()){a:{d=b.d(c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(Jw(d))break a;else G(KI(b));}}c=c+1|0;}}
function Jw(b){return !(b>=48&&b<=57)&&!(b>=97&&b<=122)&&b<65&&b>90?0:1;}
function Os(b){var c;if(b===null)G(Bx(B(248)));Fg(b);c=Ge().gi(b.c1());if(c!==null)return c;G(AC5(b));}
function GQ(a,b){var c,d,e,$$je;a:{try{c=a.j8();B6();d=AEx;d=K5(c,d);c=AEx;d=HG(d,c);d=IZ(d,b);}catch($$e){$$je=Bd($$e);if($$je instanceof Cn){e=$$je;break a;}else{throw $$e;}}return d;}G(ACw(B(249),e));}
function C8(){C.call(this);this.kY=null;}
var AE4=null;var AEx=null;var AEv=null;function B6(){B6=Bc(C8);NT();}
function LH(a){var b=new C8();Jj(b,a);return b;}
function Jj(a,b){B6();L(a);a.kY=b;}
function NT(){AE4=LH(B(250));AEx=LH(B(251));AEv=LH(B(252));}
function Kr(){T.call(this);}
function ACA(){var a=new Kr();Yg(a);return a;}
function Yg(a){BA(a);}
function BN(){T.call(this);}
function Cx(){var a=new BN();C2(a);return a;}
function Bx(a){var b=new BN();MZ(b,a);return b;}
function C2(a){BA(a);}
function MZ(a,b){Df(a,b);}
function JJ(){BN.call(this);this.jV=null;}
function KI(a){var b=new JJ();VO(b,a);return b;}
function VO(a,b){C2(a);a.jV=b;}
function Hq(){R.call(this);this.gm=null;}
function ACM(a){var b=new Hq();R_(b,a);return b;}
function R_(a,b){Bj(a);a.gm=b;}
function Sj(a,b,c,d){var e,f;a:{if(b!=d.q()){if(!b)break a;if(d.cN()&&b==d.bv())break a;e=a.gm;f=b-1|0;if(e.hc(c.d(f),c.d(b)))break a;}return (-1);}return a.e.b(b,c,d);}
function Wi(a,b){return 0;}
function F6(){}
function Kg(){C.call(this);}
function Du(){BT.call(this);this.gh=null;}
function AE_(a){var b=new Du();G1(b,a);return b;}
function G1(a,b){CR(a);a.gh=b;}
function KV(){var a=this;Du.call(a);a.j7=0;a.f6=0;a.bL=null;a.dg=null;a.ht=null;}
function O7(a,b){var c=new KV();Ld(c,a,b);return c;}
function ADn(a){var b=new KV();Rf(b,a);return b;}
function Ld(a,b,c){G1(a,b);a.bL=J();a.dg=$rt_createCharArray(32);a.j7=c;a.ht=XM();}
function Rf(a,b){Ld(a,b,0);}
function PD(a,b,c,d){var $$je;if(!J5(a))return;a:{try{a.gh.db(b,c,d);break a;}catch($$e){$$je=Bd($$e);if($$je instanceof BX){}else{throw $$e;}}a.f6=1;}}
function J5(a){if(a.gh===null)a.f6=1;return a.f6?0:1;}
function ET(a,b,c,d){var e,f,g,h,i,j,k,l;e=b.data;f=Mx(b,c,d-c|0);g=$rt_createByteArray(Bn(16,U(e.length,1024)));h=Ur(g);i=a.ht.kR();B6();j=AEx;i=Gc(i,j);j=AEx;k=LP(i,j);while(true){l=H5(k,f,h,1).c8();a.db(g,0,BF(h));ES(h);if(!l)break;}while(true){l=GS(k,h).c8();a.db(g,0,BF(h));ES(h);if(!l)break;}}
function Ub(a,b){a.dg.data[0]=b;ET(a,a.dg,0,1);}
function Yw(a,b){a.bL.a(b);Dw(a);}
function Sh(a,b){a.bL.a(b).bx(10);Dw(a);}
function Zg(a,b){a.bL.ib(b).bx(10);Dw(a);}
function SP(a){a.kb(10);}
function Dw(a){var b;b=a.bL.g()<=a.dg.data.length?a.dg:$rt_createCharArray(a.bL.g());a.bL.g2(0,a.bL.g(),b,0);ET(a,b,0,a.bL.g());a.bL.dQ(0);}
function Fz(){}
function HF(){BS.call(this);}
function ACL(a,b){var c=new HF();OM(c,a,b);return c;}
function OM(a,b,c){Dh(a,b,c);}
function NW(a,b,c,d){var e,f,g,h;e=a.N.U();d.C(a.A,b);f=0;while(true){if(f>=e)return a.e.b(b,c,d);g=a.N.E(f);h=g.bd(0,b,c,d);if(h>=0)break;f=f+1|0;}return (-1);}
function Tu(a,b){return 0;}
function KU(){CE.call(this);}
function AA5(a,b){var c=new KU();Xb(c,a,b);return c;}
function Xb(a,b,c){E7(a,b,c);}
function SV(a,b,c,d){var e,f;e=a.c0(d);if(e!==null&&(b+e.g()|0)<=d.q()){f=!c.f().ip(e,b)?(-1):e.g();if(f<0)return (-1);d.C(a.cV,f);return a.e.b(b+f|0,c,d);}return (-1);}
function WJ(a,b,c,d){var e,f,g,h;e=a.c0(d);f=d.bv();if(e!==null&&(b+e.g()|0)<=f){g=c.f();while(true){if(b>f)return (-1);h=g.gJ(e,b);if(h<0)return (-1);if(a.e.b(h+e.g()|0,c,d)>=0)break;b=h+1|0;}return h;}return (-1);}
function O0(a,b,c,d,e){var f,g,h;f=a.c0(e);if(f===null)return (-1);g=d.f();a:{while(true){if(c<b)return (-1);h=g.lA(f,c);if(h<0)break a;if(h<b)break a;if(a.e.b(h+f.g()|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function Om(a,b){return 1;}
function IV(){K.call(this);}
function ADA(){var a=new IV();WN(a);return a;}
function WN(a){Q(a);}
function TT(a){return Bw().I(97,122);}
function Ip(){BL.call(this);this.fG=null;}
function ABA(a,b,c,d){var e=new Ip();RF(e,a,b,c,d);return e;}
function RF(a,b,c,d,e){CY(a,b,c,d);a.fG=e;}
function QT(a,b,c,d){var e,f;e=d.q();f=Fa(a,b,e,c);if(f>=0)e=f;if(e>b)return a.e.bd(b,e,c,d);return a.e.b(b,c,d);}
function NM(a,b,c,d){var e,f,g,h,i;e=d.q();f=a.e.bg(b,c,d);if(f<0)return (-1);g=Fa(a,f,e,c);if(g>=0)e=g;h=a.e.bd(f,e,c,d);if(f<h)f=h;i=f>0?K3(a,b,f-1|0,c):f?(-1):0;if(i>=b)b=i>=f?i:i+1|0;return b;}
function Fa(a,b,c,d){while(true){if(b>=c)return (-1);if(a.fG.dd(d.d(b)))break;b=b+1|0;}return b;}
function K3(a,b,c,d){while(true){if(c<b)return (-1);if(a.fG.dd(d.d(c)))break;c=c+(-1)|0;}return c;}
function JE(){K.call(this);}
function ADf(){var a=new JE();XN(a);return a;}
function XN(a){Q(a);}
function ZN(a){var b;b=ABi(a);b.y=1;return b;}
function Ku(){C.call(this);}
function DO(){C.call(this);}
var AFa=null;var AFb=null;function Mv(){Mv=Bc(DO);Vb();}
function G4(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;Mv();d=$rt_floatToIntBits(b);c.g9=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.fQ=0;c.fs=0;return;}g=0;if(f)h=e|8388608;else{h=e<<1;while(Long_eq(Long_and(Long_fromInt(h),Long_fromInt(8388608)),Long_ZERO)){h=h<<1;f=f+(-1)|0;g=g+1|0;}}i=Pl(AFb,f);if(i<0)i= -i-2|0;j=f-AFb.data[i]|0;k=9+j|0;l=Long_fromInt(h);m=Long_shru(Long_mul(l,Long_fromInt(AFa.data[i])),32-k|0).lo;if(m>=1000000000){i=i+1|0;n=f-AFb.data[i]|0;k=9+n|0;m=Long_shru(Long_mul(l,Long_fromInt(AFa.data[i])),
32-k|0).lo;}n=(31-k|0)-g|0;o=n>=0?AFa.data[i]>>>n:AFa.data[i]<< -n;p=(o+1|0)>>1;q=o>>1;if(h==4194304)q=q>>2;r=He(m,q);s=Kz(m,p);h=BV(r,s);h=h>0?Cd(m/r|0,r):h<0?Cd(m/s|0,s)+s|0:Cd((m+(s/2|0)|0)/s|0,s);if(h>=1000000000){i=i+1|0;h=h/10|0;}else if(h<100000000){i=i+(-1)|0;h=h*10|0;}c.fQ=h;c.fs=i-50|0;}
function He(b,c){var d,e;Mv();d=10;while(d<=c){d=d*10|0;}e=b%d|0;if(e>=(c/2|0))d=d/10|0;return d;}
function Kz(b,c){var d,e;Mv();d=10;while(d<=c){d=d*10|0;}e=b%d|0;if((d-e|0)>(c/2|0))d=d/10|0;return d;}
function Vb(){var b,c,d,e,f,g,h,i,j,k,l;AFa=$rt_createIntArray(100);AFb=$rt_createIntArray(100);b=2000000000;c=127;d=0;e=b;while(d<50){f=AFa.data;g=d+50|0;f[g]=$rt_udiv(e,20);AFb.data[g]=c;g=$rt_udiv(e,10);h=$rt_umod(g,10);while(g<=b&&!(g&(-2147483648))){g=g<<1;c=c+1|0;h=h<<1;}e=g+(h/10|0)|0;d=d+1|0;}i=214748364;e=127;d=0;while(d<50){j=0;k=b;while(k>i){k=k>>1;j=j+1|0;e=e+(-1)|0;}k=k*10|0;if(j<=0)b=k;else{l=Long_fromInt(b&((1<<j)-1|0));b=Long_add(Long_fromInt(k),Long_shr(Long_mul(l,Long_fromInt(10)),j)).lo;}f
=AFa.data;k=(50-d|0)-1|0;f[k]=$rt_udiv(b,20);AFb.data[k]=e;d=d+1|0;}}
function Lv(){K.call(this);}
function AC_(){var a=new Lv();R3(a);return a;}
function R3(a){Q(a);}
function RX(a){return ADw(a);}
function DF(){C.call(this);}
function AFc(){var a=new DF();JW(a);return a;}
function JW(a){L(a);}
function Il(){R.call(this);}
function ACg(){var a=new Il();Va(a);return a;}
function Va(a){Bj(a);}
function YR(a,b,c,d){if(b!=d.lt())return (-1);return a.e.b(b,c,d);}
function Z$(a,b){return 0;}
function KP(){Bv.call(this);}
function ABP(a){var b=new KP();Yx(b,a);return b;}
function Yx(a,b){Ct(a,b.eh(),b.ka(),b.cI());a.w.s(a);}
function Zt(a,b,c,d){var e;while((b+a.B.ba()|0)<=d.q()){e=a.B;if(e.H(b,c)<=0)break;b=b+a.B.ba()|0;}return a.e.b(b,c,d);}
function O$(a,b,c,d){var e,f,g;e=a.e.bg(b,c,d);if(e<0)return (-1);f=e-a.B.ba()|0;while(f>=b&&a.B.H(f,c)>0){g=f-a.B.ba()|0;e=f;f=g;}return e;}
function EC(){}
function KQ(){var a=this;C.call(a);a.fx=null;a.bS=null;}
function ABN(a){var b=new KQ();Vd(b,a);return b;}
function Vd(a,b){var c;L(a);a.bS=b;c=a;b.classObject=c;}
function HI(b){var c;if(b===null)return null;c=b.classObject;if(c===null)c=ABN(b);return c;}
function QH(a){return a.bS;}
function Ua(a,b){return Ps(b,a.bS);}
function ZG(a){if(a.fx===null)a.fx=UE(a.bS);return a.fx;}
function WO(a){return UO(a.bS);}
function Q5(a){return Sq(a.bS);}
function NR(a){return HI(YL(a.bS));}
function Sn(a){if(!a.kF())return null;a.bS.$clinit();return PB(a.bS).dC();}
function Lw(){var a=this;C.call(a);a.p=null;a.z=0;}
function AAs(){var a=new Lw();RY(a);return a;}
function ABS(a){var b=new Lw();Ov(b,a);return b;}
function RY(a){L(a);a.p=$rt_createIntArray(0);}
function Ov(a,b){L(a);a.p=$rt_createIntArray(((b+32|0)-1|0)/32|0);}
function Se(a,b){var c,d;c=b/32|0;if(b>=a.z){C1(a,c+1|0);a.z=b+1|0;}d=a.p.data;d[c]=d[c]|1<<(b%32|0);}
function XA(a,b,c){var d,e,f,g;if(b>c)G(Cs());d=b/32|0;e=c/32|0;if(c>a.z){C1(a,e+1|0);a.z=c;}if(d==e){f=a.p.data;f[d]=f[d]|C9(a,b)&CT(a,c);}else{f=a.p.data;f[d]=f[d]|C9(a,b);g=d+1|0;while(g<e){a.p.data[g]=(-1);g=g+1|0;}f=a.p.data;f[e]=f[e]|CT(a,c);}}
function C9(a,b){var c;c=b%32|0;return (-1)<<c;}
function CT(a,b){var c;c=b%32|0;return !c?0:(-1)>>>(32-c|0);}
function AAq(a,b){var c,d;c=b/32|0;if(c<a.p.data.length){d=a.p.data;d[c]=d[c]&KB((-2),b%32|0);if(b==(a.z-1|0))CH(a);}}
function OT(a,b,c){var d,e,f,g,h;if(b>c)G(Cs());if(b>=a.z)return;d=U(a.z,c);e=b/32|0;f=d/32|0;if(e==f){g=a.p.data;g[e]=g[e]&(CT(a,b)|C9(a,d));}else{g=a.p.data;g[e]=g[e]&CT(a,b);h=e+1|0;while(h<f){a.p.data[h]=0;h=h+1|0;}g=a.p.data;g[f]=g[f]&C9(a,d);}CH(a);}
function O2(a,b){var c;c=b/32|0;return c<a.p.data.length&&a.p.data[c]&1<<(b%32|0)?1:0;}
function Zo(a,b){var c,d,e,f,g;if(b>=a.z)return (-1);c=b/32|0;d=a.p.data[c];e=d>>>(b%32|0);if(e)return CX(e)+b|0;f=(a.z+31|0)/32|0;g=c+1|0;while(g<f){if(a.p.data[g])return (g*32|0)+CX(a.p.data[g])|0;g=g+1|0;}return (-1);}
function RC(a,b){var c,d,e,f,g;if(b>=a.z)return b;c=b/32|0;d=a.p.data[c]^(-1);e=d>>>(b%32|0);if(e)return CX(e)+b|0;f=(a.z+31|0)/32|0;g=c+1|0;while(g<f){if(a.p.data[g]!=(-1))return (g*32|0)+CX(a.p.data[g]^(-1))|0;g=g+1|0;}return a.z;}
function C1(a,b){var c;if(a.p.data.length>=b)return;c=Bn((b*3|0)/2|0,(a.p.data.length*2|0)+1|0);a.p=Zb(a.p,c);}
function CH(a){var b,c,d;b=(a.z+31|0)/32|0;a.z=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=EK(a.p.data[c]);if(d<32)break;c=c+(-1)|0;a.z=a.z-32|0;}a.z=a.z-d|0;}}
function QG(a,b){var c,d;c=U(a.p.data.length,b.p.data.length);d=0;while(d<c){if(a.p.data[d]&b.p.data[d])return 1;d=d+1|0;}return 0;}
function XX(a,b){var c,d,e;c=U(a.p.data.length,b.p.data.length);d=0;while(d<c){e=a.p.data;e[d]=e[d]&b.p.data[d];d=d+1|0;}while(c<a.p.data.length){a.p.data[c]=0;c=c+1|0;}a.z=U(a.z,b.z);CH(a);}
function ZI(a,b){var c,d,e;c=U(a.p.data.length,b.p.data.length);d=0;while(d<c){e=a.p.data;e[d]=e[d]&(b.p.data[d]^(-1));d=d+1|0;}CH(a);}
function XJ(a,b){var c,d,e;a.z=Bn(a.z,b.z);C1(a,(a.z+31|0)/32|0);c=U(a.p.data.length,b.z);d=0;while(d<c){e=a.p.data;e[d]=e[d]|b.p.data[d];d=d+1|0;}}
function ZT(a,b){var c,d,e;a.z=Bn(a.z,b.z);C1(a,(a.z+31|0)/32|0);c=U(a.p.data.length,b.z);d=0;while(d<c){e=a.p.data;e[d]=e[d]^b.p.data[d];d=d+1|0;}CH(a);}
function X3(a){return a.z?0:1;}
function FX(){}
function GE(){I.call(this);this.jW=null;}
function ACa(a){var b=new GE();Z8(b,a);return b;}
function Z8(a,b){a.jW=b;O(a);}
function TS(a,b){return Md(b);}
function F3(){Bp.call(this);}
function AFd(a){var b=new F3();G0(b,a);return b;}
function G0(a,b){Cm(a,b);}
function OW(a,b,c,d){var e;e=a.c5();d.C(e,b-d.bD(e)|0);return a.e.b(b,c,d);}
function TW(a,b){return 0;}
function Bg(){C.call(this);}
var AFe=null;var AFf=null;var AFg=null;var AFh=null;var AFi=null;var AFj=null;var AFk=null;var AFl=null;var AFm=null;var AFn=null;var AFo=null;var AFp=null;var AFq=null;var AFr=null;var AFs=0;var AFt=null;function Bz(){Bz=Bc(Bg);Wm();}
function PM(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;Bz();c=AFg;d="v1.22";c.innerHTML=d;B2(B(253));C7(null,null);e=B(254);f=$rt_str(AFe.location.href);if(f.fL(B(255))){g=f.fa(f.cr(63)+1|0);h=g.iY(B(256));i=h.data;j=i.length;k=0;while(k<j){l=i[k];m=l.iY(B(257));n=m.data;if(B(258).ca(n[0]))e=n[1];k=k+1|0;}}EX().o(J().a(B(259)).a(e).f());AFt=Pe(e);if(AFt!==null)EX().o(J().a(B(259)).a(AFt.bT()).f());ZA();Wo();o=AFf.getElementById("layoutOptionDummy");AFh.options.remove(0);Cj();i=AE8.data;j=i.length;k=0;while
(k<j){p=i[k];q=o.cloneNode(!!1);c=$rt_ustr(p.bT());q.text=c;AFh.options.add(q);k=k+1|0;}c=AFh;r=ABL();c.addEventListener("change",Cq(r,"handleEvent"));s=AFf.getElementById("configOptionDummy");AFi.options.remove(0);i=AE9.data;j=i.length;k=0;while(k<j){t=i[k];u=s.cloneNode(!!1);c=$rt_ustr(t.bT());u.text=c;c=$rt_ustr(t.i2());u.title=c;AFi.options.add(u);k=k+1|0;}c=AFi;d=2;c.selectedIndex=d;c=AFi;r=ADy();c.addEventListener("change",Cq(r,"handleEvent"));c=AFp;r=AAC();c.addEventListener("click",Cq(r,"handleEvent"));c
=AFq;r=ADt();c.addEventListener("click",Cq(r,"handleEvent"));c=AFl;r=ABq();c.addEventListener("click",Cq(r,"handleEvent"));}
function LN(b){var c,d;Bz();AFs=b;if(AFs){Cj();c=AE8.data[AFh.selectedIndex];F8(c.bN());d=AE9.data[AFi.selectedIndex];Ee(d.bN());}}
function Lz(){var b,c,d,e,f,g,h,i,j,$$je;Bz();b=AAW();b.lw($rt_str(AFj.value),B(21));c=AC$();c.jR(b,$rt_str(AFk.value));if(AFt!==null&&AFt.bN().g()){d=OB(b.d9(),AFt.bN());e=Pg(b.d9(),AFt.bN());f=AA1();g=f.jS(b,d,e);h=AAJ(b,g.lg());C7(h.i$(AFf,0),h.i$(AFf,1));a:{try{i=ADL(5);j=i.ld(g);B2(j);break a;}catch($$e){$$je=Bd($$e);if($$je instanceof BX){}else{throw $$e;}}B2(B(260));}return;}B2(B(261));}
function F8(b){var c,d;Bz();if(AFj.firstChild!==null){c=AFj;d=AFj.firstChild;c.removeChild(d);}d=AFj;c=AFf.createTextNode($rt_ustr(b));d.appendChild(c);c=AFj;d=$rt_ustr(b);c.value=d;}
function Ee(b){var c,d;Bz();if(AFk.firstChild!==null){c=AFk;d=AFk.firstChild;c.removeChild(d);}d=AFk;c=AFf.createTextNode($rt_ustr(b));d.appendChild(c);c=AFk;d=$rt_ustr(b);c.value=d;}
function C7(b,c){Bz();if(AFn.firstChild!==null)L_(AFn);if(AFo.firstChild!==null)L_(AFo);if(b!==null&&c!==null){AFn.appendChild(b);AFo.appendChild(c);AFm.setAttribute("style","display:block");}else AFm.setAttribute("style","display:none");}
function B2(b){var c,d;Bz();if(AFr.firstChild!==null){c=AFr;d=AFr.firstChild;c.removeChild(d);}if(b!==null){c=AFr;d=$rt_ustr(b);c.innerHTML=d;}else{c=AFt===null?B(262):J().a(B(263)).a(AFt.i2()).f();d=AFr;c=$rt_ustr(J().a(c).a(B(264)).f());d.innerHTML=c;}}
function GN(){Bz();return AFh;}
function GC(){Bz();return AFi;}
function EN(){Bz();return AFn;}
function FB(){Bz();return AFo;}
function IY(){Bz();return AFs;}
function MP(){Bz();Lz();}
function Wm(){AFe=window;AFf=Zd();AFg=AFf.getElementById("version-text");AFh=AFf.getElementById("layout-select");AFi=AFf.getElementById("config-select");AFj=AFf.getElementById("layout-input");AFk=AFf.getElementById("config-input");AFl=AFf.getElementById("analyze-button");AFm=AFf.getElementById("keyboard-panel");AFn=AFf.getElementById("keyboard-panel-fingers");AFo=AFf.getElementById("keyboard-panel-heatmap");AFp=AFf.getElementById("keyboard-option-fingers");AFq=AFf.getElementById("keyboard-option-heatmap");AFr
=AFf.getElementById("output-panel");AFs=0;}
function D2(){BM.call(this);}
var AFu=0.0;var AFv=null;function AFw(){AFw=Bc(D2);Rk();}
function Rk(){AFu=NaN;AFv=D($rt_floatcls());}
function HZ(){C.call(this);}
function EH(b,c){var d,e,f,g;d=b.data;e=$rt_createCharArray(c);f=U(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function FI(b,c){var d,e,f,g;d=b.data;e=$rt_createByteArray(c);f=U(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function Zb(b,c){var d,e,f,g;d=b.data;e=$rt_createIntArray(c);f=U(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function L4(b,c){var d,e,f,g;d=b.data;e=IW(Ce(b).eD(),c);f=U(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function U_(b,c,d,e){var f,g;if(c>d)G(Cx());while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function DB(b,c){U_(b,0,b.data.length,c);}
function UL(b,c,d,e){var f,g;if(c>d)G(Cx());while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function R5(b,c){UL(b,0,b.data.length,c);}
function Pl(b,c){return QJ(b,0,b.data.length,c);}
function QJ(b,c,d,e){var f,g,h,i;if(c>d)G(Cx());f=d-1|0;while(true){g=b.data;h=(c+f|0)/2|0;i=g[h];if(i==e)break;if(e>=i){c=h+1|0;if(c>f)return  -h-2|0;}else{f=h-1|0;if(f<c)return  -h-1|0;}}return h;}
function B0(){Y.call(this);this.b6=0;}
function JN(a){var b=new B0();RW(b,a);return b;}
function RW(a,b){BG(a);a.b6=b;}
function Y3(a){return 1;}
function Xe(a,b,c){return a.b6!=c.d(b)?(-1):1;}
function UF(a,b,c,d){var e,f,g,h;if(!(c instanceof Bf))return C6(a,b,c,d);e=c;f=d.q();while(true){if(b>=f)return (-1);g=e.cy(a.b6,b);if(g<0)return (-1);h=a.e;b=g+1|0;if(h.b(b,c,d)>=0)break;}return g;}
function Ze(a,b,c,d,e){var f,g;if(!(d instanceof Bf))return Db(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);g=f.et(a.b6,c);if(g<0)break a;if(g<b)break a;if(a.e.b(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function Q4(a){return a.b6;}
function V9(a,b){if(b instanceof B0)return b.b_()!=a.b6?0:1;if(!(b instanceof B1)){if(b instanceof BH)return b.j(a.b6);if(!(b instanceof BZ))return 1;return 0;}return b.H(0,FN(a.b6))<=0?0:1;}
function Gr(){Y.call(this);this.iP=0;}
function ABk(a){var b=new Gr();U5(b,a);return b;}
function U5(a,b){BG(a);a.P=2;a.iP=Cp(Co(b));}
function Ud(a,b,c){var d,e,f;d=b+1|0;e=c.d(b);f=c.d(d);return a.iP!=Cp(Co(BR(e,f)))?(-1):2;}
function Mc(){BT.call(this);}
function ACZ(){var a=new Mc();Ow(a);return a;}
function Ow(a){CR(a);}
function N0(a,b){$rt_putStdout(b);}
function DC(){C.call(this);}
var AFx=null;var AFy=null;function EX(){if(AFx===null)AFx=O7(ACZ(),0);return AFx;}
function Ch(){if(AFy===null)AFy=O7(ACJ(),0);return AFy;}
function Gh(b,c,d,e,f){var g,h,i,j,k,l,m,n;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=IQ(b)){g=e+f|0;if(g<=IQ(d)){a:{b:{if(b!==d){h=Ce(b).eD();i=Ce(d).eD();if(h!==null&&i!==null){if(h===i)break b;if(!h.er()&&!i.er()){j=b;k=0;g=c;while(k<f){l=j.data;m=g+1|0;n=l[g];if(!i.jL(n)){F1(b,c,d,e,k);G(J4());}k=k+1|0;g=m;}F1(b,c,d,e,f);return;}if(!h.er())break a;if(i.er())break b;else break a;}G(J4());}}F1(b,c,d,e,f);return;}G(J4());}}G(Cs());}G(SG(B(265)));}
function F1(b,c,d,e,f){if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}} else {c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function Iz(){var a=this;I.call(a);a.eH=0;a.hA=null;a.fS=null;}
function AAE(a,b,c){var d=new Iz();Y0(d,a,b,c);return d;}
function Y0(a,b,c,d){a.fS=b;a.eH=c;a.hA=d;O(a);}
function Uc(a,b){return !(a.eH^a.fS.v.bJ(b))&&!(a.eH^a.fS.bI^a.hA.j(b))?0:1;}
function IG(){var a=this;I.call(a);a.i5=0;a.iS=null;a.it=null;a.lz=null;}
function ADQ(a,b,c,d){var e=new IG();VJ(e,a,b,c,d);return e;}
function VJ(a,b,c,d,e){a.lz=b;a.i5=c;a.iS=d;a.it=e;O(a);}
function Na(a,b){return a.i5^(!a.iS.j(b)&&!a.it.j(b)?0:1)?0:1;}
function IB(){var a=this;I.call(a);a.iZ=null;a.jj=null;}
function ACv(a,b){var c=new IB();NB(c,a,b);return c;}
function NB(a,b,c){a.jj=b;a.iZ=c;O(a);}
function Te(a,b){return a.iZ.j(b);}
function IA(){var a=this;I.call(a);a.eU=0;a.h4=null;a.e7=null;}
function AB8(a,b,c){var d=new IA();NV(d,a,b,c);return d;}
function NV(a,b,c,d){a.e7=b;a.eU=c;a.h4=d;O(a);}
function Ny(a,b){return !(a.eU^a.e7.v.bJ(b))&&!(a.eU^a.e7.bI^a.h4.j(b))?1:0;}
function Ju(){var a=this;K.call(a);a.iJ=0;a.i_=0;}
function H(a,b){var c=new Ju();Yb(c,a,b);return c;}
function Yb(a,b,c){Q(a);a.iJ=b;a.i_=c;}
function AAw(a){var b;b=Bw().I(a.iJ,a.i_);return b;}
function IC(){var a=this;I.call(a);a.ih=null;a.lI=null;}
function ACr(a,b){var c=new IC();NP(c,a,b);return c;}
function NP(a,b,c){a.lI=b;a.ih=c;O(a);}
function WP(a,b){return a.ih.j(b);}
function Jm(){K.call(this);}
function ABm(){var a=new Jm();Rm(a);return a;}
function Rm(a){Q(a);}
function Ys(a){return Bw().I(48,57).I(97,102).I(65,70);}
function IJ(){var a=this;I.call(a);a.gV=null;a.g4=0;a.gK=null;}
function AA0(a,b,c){var d=new IJ();TI(d,a,b,c);return d;}
function TI(a,b,c,d){a.gK=b;a.gV=c;a.g4=d;O(a);}
function S1(a,b){return !a.gV.j(b)&&!(a.g4^a.gK.v.bJ(b))?1:0;}
function IF(){var a=this;I.call(a);a.iE=0;a.h9=null;a.h1=null;a.kg=null;}
function ACV(a,b,c,d){var e=new IF();Ox(e,a,b,c,d);return e;}
function Ox(a,b,c,d,e){a.kg=b;a.iE=c;a.h9=d;a.h1=e;O(a);}
function Ue(a,b){return a.iE^(!a.h9.j(b)&&!a.h1.j(b)?0:1);}
function IE(){var a=this;I.call(a);a.ie=null;a.kC=null;}
function AC6(a,b){var c=new IE();NS(c,a,b);return c;}
function NS(a,b,c){a.kC=b;a.ie=c;O(a);}
function NA(a,b){return a.ie.j(b)?0:1;}
function I3(){V.call(this);this.ge=null;}
function ABW(a){var b=new I3();Sz(b,a);return b;}
function Sz(a,b){BC(a);a.ge=b;}
function P4(a,b,c,d){var e,f,g,h,i;e=d.q();f=b+1|0;if(f>e){d.by=1;return (-1);}g=c.d(b);if(Bh(g)){h=b+2|0;if(h<=e){i=c.d(f);if(CS(g,i))return a.ge.dd(BR(g,i))?(-1):a.e.b(h,c,d);}}return a.ge.dd(g)?(-1):a.e.b(f,c,d);}
function TN(a,b){a.e=b;}
function M$(a){return (-2147483602);}
function ZE(a,b){return 1;}
function IH(){var a=this;I.call(a);a.gu=null;a.iW=0;a.hu=null;}
function ABy(a,b,c){var d=new IH();WB(d,a,b,c);return d;}
function WB(a,b,c,d){a.hu=b;a.gu=c;a.iW=d;O(a);}
function WT(a,b){return !a.gu.j(b)&&!(a.iW^a.hu.v.bJ(b))?0:1;}
function Gi(){var a=this;C.call(a);a.ko=null;a.h6=null;a.dv=null;a.S=null;a.eb=0;a.ed=0;}
function ACD(a,b){var c=new Gi();Nl(c,a,b);return c;}
function Ep(a,b){var c,d;c=a.dv.g();if(b>=0&&b<=c){d=Jo(a,b);if(d>=0&&a.S.jr()){a.S.kD();return 1;}a.S.bA=(-1);return 0;}G(Bk(EG(b)));}
function Jo(a,b){var c;a.S.kk();a.S.d6(1);a.S.kw(b);c=a.h6.bg(b,a.dv,a.S);if(c==(-1))a.S.by=1;return c;}
function K1(a){var b,c;b=a.dv.g();if(!Hx(a))b=a.ed;if(a.S.bA>=0&&a.S.ig()==1){a.S.bA=a.S.ec();if(a.S.ec()==a.S.hC()){c=a.S;c.bA=c.bA+1|0;}return a.S.bA<=b&&Ep(a,a.S.bA)?1:0;}return Ep(a,a.eb);}
function MS(a,b){return a.S.e1(b);}
function Ha(a,b){return a.S.f8(b);}
function Ma(a){return MS(a,0);}
function Kc(a){return Ha(a,0);}
function Hx(a){return a.S.c$();}
function Nl(a,b,c){var d,e,f,g,h;L(a);a.eb=(-1);a.ed=(-1);a.ko=b;a.h6=b.eJ;a.dv=c;a.eb=0;a.ed=a.dv.g();d=new Ff;e=a.eb;f=a.ed;g=G2(b);h=KX(b);Hp(d,c,e,f,g,h,H_(b));a.S=d;}
function BY(){C.call(this);}
var AFz=null;var AFA=null;var AFB=null;var AFC=null;var AFD=null;var AFE=null;function N(){N=Bc(BY);Pr();}
function FN(b){var c,d;N();c=new Bf;d=$rt_createCharArray(1);d.data[0]=b;Dq(c,d);return c;}
function GV(b){N();return b>0&&b<=65535?1:0;}
function DX(b){N();return b>=65536&&b<=1114111?1:0;}
function Bh(b){N();return (b&64512)!=55296?0:1;}
function Bq(b){N();return (b&64512)!=56320?0:1;}
function D1(b){N();return !Bh(b)&&!Bq(b)?0:1;}
function CS(b,c){N();return Bh(b)&&Bq(c)?1:0;}
function BR(b,c){N();return ((b&1023)<<10|c&1023)+65536|0;}
function Io(b,c){N();return II(b,c,b.data.length);}
function II(b,c,d){var e,f;N();if(c<(d-1|0)){e=b.data;if(Bh(e[c])){f=c+1|0;if(Bq(e[f]))return BR(e[c],e[f]);}}return b.data[c];}
function CQ(b){var c;N();c=b-65536|0;return (55296|c>>10&1023)&65535;}
function CF(b){N();return (56320|b&1023)&65535;}
function BP(b){N();return Cp(b)&65535;}
function Cp(b){N();return JR(b).toLowerCase().charCodeAt(0);}
function By(b){N();return Co(b)&65535;}
function Co(b){N();return JR(b).toUpperCase().charCodeAt(0);}
function E3(b,c){N();return J3(b,c);}
function J3(b,c){var d;N();if(c>=2&&c<=36){d=Fb(b);if(d>=c)d=(-1);return d;}return (-1);}
function Ef(b){N();return Fb(b);}
function Fb(b){var c,d,e,f,g,h,i,j;N();c=GM();d=c.data;e=0;f=(d.length/2|0)-1|0;while(f>=e){g=(e+f|0)/2|0;h=g*2|0;i=d[h];j=BV(b,i);if(j>0)e=g+1|0;else{if(j>=0)return d[h+1|0];f=g-1|0;}}return (-1);}
function D9(b,c){N();if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function Mw(b){N();return Bi(b)!=9?0:1;}
function GM(){N();if(AFA===null)AFA=Th((Gy().value!==null?$rt_str(Gy().value):null));return AFA;}
function Gy(){N();if(AFD===null)AFD=LD();return AFD;}
function LF(){N();if(AFB===null)AFB=AAr((Kv().value!==null?$rt_str(Kv().value):null));return AFB;}
function Kv(){N();if(AFE===null)AFE=MO();return AFE;}
function CJ(b){var c,d;N();if(b<65536){c=$rt_createCharArray(1);c.data[0]=b&65535;return c;}c=$rt_createCharArray(2);d=c.data;d[0]=CQ(b);d[1]=CF(b);return c;}
function Lb(b){var c;N();a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}c=1;break a;}c=0;}return c;}
function C_(b){N();return Bi(b);}
function Bi(b){var c,d,e,f,g,h;N();if(GV(b)&&D1(b&65535))return 19;c=LF();d=c.data;e=0;f=d.length-1|0;while(e<=f){g=(e+f|0)/2|0;h=d[g];if(b>=h.gy)e=g+1|0;else{if(b>=h.fK)return h.id.data[b-h.fK|0];f=g-1|0;}}return 0;}
function Lk(b){N();return Bi(b)!=2?0:1;}
function Gl(b){N();return Bi(b)!=1?0:1;}
function G7(b){N();return Bi(b)!=3?0:1;}
function MQ(b){N();return !Bi(b)?0:1;}
function Lf(b){N();switch(Bi(b)){case 1:case 2:case 3:case 4:case 5:break;default:return 0;}return 1;}
function FU(b){N();return EJ(b);}
function EJ(b){N();a:{switch(Bi(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function Md(b){N();a:{switch(Bi(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break a;default:break a;}return 1;}return CI(b);}
function MA(b){N();a:{switch(Bi(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break a;default:break a;}return 1;}return CI(b);}
function Lt(b){N();a:{switch(Bi(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break a;default:break a;}return 1;}return 0;}
function LV(b){N();a:{switch(Bi(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break a;default:break a;}return 1;}return CI(b);}
function Ky(b){N();a:{switch(Bi(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break a;default:break a;}return 1;}return CI(b);}
function CI(b){N();a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Bi(b)!=16?0:1;}
function Fk(b){N();switch(Bi(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function I2(b){N();return FQ(b);}
function FQ(b){N();switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return Fk(b);}return 1;}
function Pr(){AFz=D($rt_charcls());AFC=E(BY,128);}
function LD(){return {"value":"oD#*% .%%2%)6%-:%1>%5B%9F%=J%AN%Eo%Is%Mw%Q{%U!\'Y&\'^*\'b.\'f2\'j6\'n:\'r>\'vB\'zF\'!#J\'&#N\'*#R\'.#V\'2#Z\'6#_\':#c\'>#g\'B#k\'F#o\'J#s\'N#w\'R#6)I:)M>)QB)UF)YJ)^N)bR)fV)jZ)n_)rc)vg)zk)!#o)&#s)*#w).#{)2#!+6#&+:#*+>#.+B#2+F#6+J#:+N#>+R#{R# !T#%&T#)*T#-.T#12T#56T#9:T#=>T#ABT#E6a# :a#%>a#)Ba#-Fa#1Ja#5Na#9Ra#=Va#AZa#E:s# >s#%Bs#)Fs#-Js#1Ns#5Rs#9Vs#=Zs#A_s#EZ:% _:%%c:%)g:%-k:%1o:%5s:%9w:%={:%A!<%E2F% 6F%%:F%)>F%-BF%1FF%5JF%9NF%=RF%AVF%EgP% kP%%oP%)sP%-wP%1{P%5!R%9&R%=*R%A.R%E>]% B]%%F]%)J]%-N]%1R]%5V]%9Z]%=_]%Ac]%Esg% wg%%{g%)!i%-&"
+"i%1*i%5.i%92i%=6i%A:i%EJs% Ns%%Rs%)Vs%-Zs%1_s%5cs%9gs%=ks%Aos%E!!\' &!\'%*!\').!\'-2!\'16!\'5:!\'9>!\'=B!\'AF!\'EV,\' Z,\'%_,\')c,\'-g,\'1k,\'5o,\'9s,\'=w,\'A{,\'E.8\' 28\'%68\'):8\'->8\'1B8\'5F8\'9J8\'=N8\'AR8\'EcB\' gB\'%kB\')oB\'-sB\'1wB\'5{B\'9!D\'=&D\'A*D\'E>L\' BL\'%FL\')JL\'-NL\'1RL\'5VL\'9ZL\'=_L\'AcL\'EsV\' wV\'%{V\')!X\'-&X\'1*X\'5.X\'92X\'=6X\'A:X\'EB_\' F_\'%J_\')N_\'-R_\'1V_\'5Z_\'9__\'=c_\'Ag_\'Esw\' ww\'%{w\')!y\'-&y\'1*y\'5.y\'92y\'=6y\'A:y\'EB!) F!)%J!))N!)-R!)1V!)5Z!)9_!)=c!)Ag!)Egi+ ki+%oi+)si+-wi+1{i+5!k+9&k+=*k+A.k+Eom+ sm+%wm+){m+-!o+1&o+5*o+9.o+=2o+A6o+E>,- B,-%F"
+",-)J,--N,-1R,-5V,-9Z,-=_,-Ac,-E>8- B8-%F8-)J8--N8-1R8-5V8-9Z8-=_8-Ac8-E{F- !H-%&H-)*H--.H-12H-56H-9:H-=>H-ABH-E_H- cH-%gH-)kH--oH-1sH-5wH-9{H-=!J-A&J-E!Z- &Z-%*Z-).Z--2Z-16Z-5:Z-9>Z-=BZ-AFZ-E2c- 6c-%:c-)>c--Bc-1Fc-5Jc-9Nc-=Rc-AVc-EJo- No-%Ro-)Vo--Zo-1_o-5co-9go-=ko-Aoo-E.q- 2q-%6q-):q-->q-1Bq-5Fq-9Jq-=Nq-ARq-E&4r *4r%.4r)24r-64r1:4r5>4r9B4r=F4rAJ4rE{or !qr%&qr)*qr-.qr12qr56qr9:qr=>qrABqrE&ur *ur%.ur)2ur-6ur1:ur5>ur9Bur=FurAJurE**t .*t%2*t)6*t-:*t1>*t5B*t9F*t=J*tAN*tEN,t R,t%V,t)Z,t-_,t1c,t5g,t9k,t=o,tAs,tE_"
+"4t c4t%g4t)k4t-o4t1s4t5w4t9{4t=!6tA&6tEgXt kXt%oXt)sXt-wXt1{Xt5!Zt9&Zt=*ZtA.ZtE{c@# !e@#%&e@#)*e@#-.e@#12e@#56e@#9:e@#=>e@#ABe@#Ece@#Ige@#Mke@#Qoe@#Use@#Ywe@#^{e@#b!g@#f&g@#j*g@#n.g@#r2g@#v6g@#z:g@#!#>g@#&#Bg@#*#Fg@#.#Jg@#2#Ng@#6#Rg@#:#Vg@#>#Zg@#B#_g@#F#cg@#J#gg@#N#kg@#R#*i@#I.i@#M2i@#Q6i@#U:i@#Y>i@#^Bi@#bFi@#fJi@#jNi@#nRi@#rVi@#vZi@#z_i@#!#ci@#&#gi@#*#ki@#.#oi@#2#si@#6#wi@#:#{i@#>#!k@#B#&k@#F#*k@#J#.k@#N#2k@#R#s&D# w&D#%{&D#)!(D#-&(D#1*(D#5.(D#92(D#=6(D#A:(D#E2.H# 6.H#%:.H#)>.H#-B.H#1F.H#5J.H#9N.H#=R.H#AV."
+"H#EwuH# {uH#%!wH#)&wH#-*wH#1.wH#52wH#96wH#=:wH#A>wH#Ew$J# {$J#%!&J#)&&J#-*&J#1.&J#52&J#96&J#=:&J#A>&J#E{*J# !,J#%&,J#)*,J#-.,J#12,J#56,J#9:,J#=>,J#AB,J#E_8J# c8J#%g8J#)k8J#-o8J#1s8J#5w8J#9{8J#=!:J#A&:J#E2RJ# 6RJ#%:RJ#)>RJ#-BRJ#1FRJ#5JRJ#9NRJ#=RRJ#AVRJ#ENqJ# RqJ#%VqJ#)ZqJ#-_qJ#1cqJ#5gqJ#9kqJ#=oqJ#AsqJ#E&}J# *}J#%.}J#)2}J#-6}J#1:}J#5>}J#9B}J#=F}J#AJ}J#Eg@L# k@L#%o@L#)s@L#-w@L#1{@L#5!BL#9&BL#=*BL#A.BL#EZJL# _JL#%cJL#)gJL#-kJL#1oJL#5sJL#9wJL#={JL#A!LL#ENTL# RTL#%VTL#)ZTL#-_TL#1cTL#5gTL#9kTL#=oTL#AsTL#E:{L# >{L#"
+"%B{L#)F{L#-J{L#1N{L#5R{L#9V{L#=Z{L#A_{L#ERkN# VkN#%ZkN#)_kN#-ckN#1gkN#5kkN#9okN#=skN#AwkN#E_$P# c$P#%g$P#)k$P#-o$P#1s$P#5w$P#9{$P#=!&P#A&&P#E.,P# 2,P#%6,P#):,P#->,P#1B,P#5F,P#9J,P#=N,P#AR,P#EFau# Jau#%Nau#)Rau#-Vau#1Zau#5_au#9cau#=gau#Akau#Eouu# suu#%wuu#){uu#-!wu#1&wu#5*wu#9.wu#=2wu#A6wu#EF0N% J0N%%N0N%)R0N%-V0N%1Z0N%5_0N%9c0N%=g0N%Ak0N%Eo0N% s0N%%w0N%){0N%-!2N%1&2N%5*2N%9.2N%=22N%A62N%E:2N% >2N%%B2N%)F2N%-J2N%1N2N%5R2N%9V2N%=Z2N%A_2N%Ec2N% g2N%%k2N%)o2N%-s2N%1w2N%5{2N%9!4N%=&4N%A*4N%E.4N% 24N%%64N%):4N%->"
+"4N%1B4N%5F4N%9J4N%=N4N%AR4N%ERJR% VJR%%ZJR%)_JR%-cJR%1gJR%5kJR%9oJR%=sJR%AwJR%E>qR% BqR%%FqR%)JqR%-NqR%1RqR%5VqR%9ZqR%=_qR%AcqR%E:FV% >FV%%BFV%)FFV%-JFV%1NFV%5RFV%9VFV%=ZFV%A_FV%E"};}
function MO(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
function K6(){V.call(this);}
function ADh(){var a=new K6();PY(a);return a;}
function PY(a){BC(a);}
function Zc(a,b,c,d){var e,f,g,h,i;e=d.q();f=b+1|0;if(f>e){d.by=1;return (-1);}g=c.d(b);if(Bh(g)){h=b+2|0;if(h<=e){i=c.d(f);if(CS(g,i))return a.e.b(h,c,d);}}return a.e.b(f,c,d);}
function Rr(a,b){a.e=b;}
function PJ(a){return (-2147483602);}
function Ro(a,b){return 1;}
function GD(){var a=this;Y.call(a);a.iw=0;a.g3=0;}
function R4(a){var b=new GD();Tl(b,a);return b;}
function Tl(a,b){BG(a);a.iw=b;a.g3=C5(b);}
function Of(a,b,c){return a.iw!=c.d(b)&&a.g3!=c.d(b)?(-1):1;}
function BZ(){var a=this;Y.call(a);a.ev=0;a.d$=0;a.dW=0;}
function ABs(a){var b=new BZ();ZC(b,a);return b;}
function ZC(a,b){var c,d;BG(a);a.P=2;a.dW=b;c=CJ(b);d=c.data;a.ev=d[0];a.d$=d[1];}
function S8(a,b,c){var d,e,f;d=b+1|0;e=c.d(b);f=c.d(d);return a.ev==e&&a.d$==f?2:(-1);}
function Pk(a,b,c,d){var e,f,g,h;if(!(c instanceof Bf))return C6(a,b,c,d);e=c;f=d.q();while(b<f){g=e.cy(a.ev,b);if(g<0)return (-1);b=g+1|0;if(b>=f)continue;h=e.d(b);if(a.d$==h&&a.e.b(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function RT(a,b,c,d,e){var f,g,h;if(!(d instanceof Bf))return Db(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);g=f.et(a.d$,c);h=g+(-1)|0;if(h<0)break a;if(h<b)break a;if(a.ev==f.d(h)&&a.e.b(h+2|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function N1(a){return a.dW;}
function SK(a,b){if(b instanceof BZ)return b.gf()!=a.dW?0:1;if(b instanceof BH)return b.j(a.dW);if(b instanceof B0)return 0;if(!(b instanceof B1))return 1;return 0;}
function GZ(){I.call(this);this.lL=null;}
function ABR(a){var b=new GZ();UD(b,a);return b;}
function UD(a,b){a.lL=b;O(a);}
function Xj(a,b){return Lk(b);}
function Mm(){var a=this;K.call(a);a.fy=0;a.eY=0;a.gT=0;}
function Dc(a,b){var c=new Mm();Uq(c,a,b);return c;}
function ADl(a,b,c){var d=new Mm();Nq(d,a,b,c);return d;}
function Uq(a,b,c){Q(a);a.eY=c;a.fy=b;}
function Nq(a,b,c,d){Q(a);a.gT=d;a.eY=c;a.fy=b;}
function Np(a){var b;b=ABf(a.fy);if(a.gT)b.J.d7(0,2048);b.y=a.eY;return b;}
function BH(){var a=this;V.call(a);a.bV=null;a.lN=0;}
function Zj(a){var b=new BH();In(b,a);return b;}
function In(a,b){BC(a);a.bV=b.c2();a.lN=b.G;}
function UM(a,b,c,d){var e,f,g,h,i;e=d.q();if(b<e){f=b+1|0;g=c.d(b);if(a.j(g)){h=a.e.b(f,c,d);if(h>0)return h;}if(f<e){h=f+1|0;i=c.d(f);if(CS(g,i)&&a.j(BR(g,i)))return a.e.b(h,c,d);}}return (-1);}
function VS(a,b){return a.bV.j(b);}
function PV(a,b){if(b instanceof BZ)return DS(a.bV,b.gf());if(b instanceof B0)return DS(a.bV,b.b_());if(b instanceof BH)return CU(a.bV,b.bV);if(!(b instanceof B1))return 1;return CU(a.bV,b.fe());}
function Y9(a){return a.bV;}
function U6(a,b){a.e=b;}
function U8(a,b){return 1;}
function GP(){BH.call(this);}
function Pi(a){var b=new GP();Tz(b,a);return b;}
function Tz(a,b){In(a,b);}
function YN(a,b){return a.bV.j(Cp(Co(b)));}
function M8(){K.call(this);}
function AAI(){var a=new M8();SR(a);return a;}
function SR(a){Q(a);}
function NJ(a){var b;b=AA9(a);b.y=1;return b;}
function B$(){C.call(this);}
var AFF=null;var AFG=null;function AFH(){var a=new B$();Fe(a);return a;}
function Fe(a){L(a);}
function Fi(b){if(!(b&1)){if(AFG!==null)return AFG;AFG=ACG();return AFG;}if(AFF!==null)return AFF;AFF=ABJ();return AFF;}
function E0(){var a=this;V.call(a);a.bZ=null;a.ft=null;a.df=0;}
function Wt(a,b){var c=new E0();Oz(c,a,b);return c;}
function Oz(a,b,c){BC(a);a.bZ=b;a.df=c;}
function NC(a,b){a.e=b;}
function FA(a){if(a.ft===null)a.ft=Em(a.bZ);return a.ft;}
function ND(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;e=d.q();f=0;g=$rt_createIntArray(3);h=(-1);i=(-1);if(b>=e)return (-1);j=b+1|0;k=c.d(b);l=TA(k);if(l!==null){m=l.data;n=0;if(m.length!=a.df)return (-1);while(true){if(n>=a.df)return a.e.b(j,c,d);if(m[n]!=a.bZ.data[n])break;n=n+1|0;}return (-1);}o=g.data;o[f]=k;p=k-4352|0;if(p>=0&&p<19){if(j<e){k=c.d(j);h=k-4449|0;}if(h>=0&&h<21){q=j+1|0;o[1]=k;if(q<e){k=c.d(q);i=k-4519|0;}if(i>=0&&i<28){r=q+1|0;o[2]=k;if(a.df==3&&o[0]==a.bZ.data[0]&&o[1]==a.bZ.data[1]&&o[2]
==a.bZ.data[2]){s=a.e;r=s.b(r,c,d);}else r=(-1);return r;}if(a.df==2&&o[0]==a.bZ.data[0]&&o[1]==a.bZ.data[1]){s=a.e;r=s.b(q,c,d);}else r=(-1);return r;}return (-1);}return (-1);}
function Rp(a,b){var c,d;a:{if(b instanceof E0){c=b;if(!FA(c).ca(FA(a))){d=0;break a;}}d=1;}return d;}
function Wp(a,b){return 1;}
function Dp(){CD.call(this);}
function AFI(a,b,c){var d=new Dp();Gt(d,a,b,c);return d;}
function Gt(a,b,c,d){Fq(a,b);a.K=c;a.bH=d;}
function Mp(b){if(b>=0)return ABd(b);G(Bx(J().a(B(266)).n(b).f()));}
function Mx(b,c,d){return ABI(0,b.data.length,b,c,c+d|0,0);}
function OS(b){return Mx(b,0,b.data.length);}
function PC(a,b,c,d){var e,f,g,h,i;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Bk(J().a(B(267)).n(g).a(B(237)).n(f).f()));if(W(a)<d)G(X8());if(d<0)G(Bk(J().a(B(238)).n(d).a(B(239)).f()));h=a.K;i=0;while(i<d){g=c+1|0;f=h+1|0;e[c]=a.ll(h);i=i+1|0;c=g;h=f;}a.K=a.K+d|0;return a;}}e=b.data;G(Bk(J().a(B(240)).n(c).a(B(19)).n(e.length).a(B(241)).f()));}
function Ss(a,b){return a.iB(b,0,b.data.length);}
function Z9(a,b,c,d){var e,f,g,h,i;if(a.dJ())G(Gm());if(W(a)<d)G(IX());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Bk(J().a(B(268)).n(g).a(B(237)).n(f).f()));if(d<0)G(Bk(J().a(B(238)).n(d).a(B(239)).f()));h=a.K;i=0;while(i<d){g=h+1|0;f=c+1|0;a.hd(h,e[c]);i=i+1|0;h=g;c=f;}a.K=a.K+d|0;return a;}}e=b.data;G(Bk(J().a(B(240)).n(c).a(B(19)).n(e.length).a(B(241)).f()));}
function Qu(a,b,c,d){var e,f,g,h,i,j;if(a.dJ())G(Gm());e=d-c|0;if(W(a)<e)G(IX());if(c>=0&&c<b.g()){if(d>b.g()){f=new C4;g=J().a(B(268)).n(d).a(B(269));LW(f,g.n(b.g()).f());G(f);}if(c>d)G(Bk(J().a(B(270)).n(c).a(B(271)).n(d).f()));h=a.K;while(c<d){i=h+1|0;j=c+1|0;a.hd(h,b.d(c));h=i;c=j;}a.K=a.K+e|0;return a;}G(Bk(J().a(B(270)).n(c).a(B(19)).n(b.g()).a(B(241)).f()));}
function DP(a,b){return a.le(b,0,b.g());}
function IK(a){return a.jx();}
function E2(a){return a.lx();}
function GY(a){Mz(a);return a;}
function Ng(a,b){Fx(a,b);return a;}
function DN(){Dp.call(this);}
function AFJ(a,b,c){var d=new DN();Jk(d,a,b,c);return d;}
function Jk(a,b,c,d){Gt(a,b,c,d);}
function Zl(a){return a.kN();}
function LU(){var a=this;DN.call(a);a.iQ=0;a.fH=0;a.ez=null;}
function ABd(a){var b=new LU();Rg(b,a);return b;}
function ABI(a,b,c,d,e,f){var g=new LU();MU(g,a,b,c,d,e,f);return g;}
function Rg(a,b){MU(a,0,b,$rt_createCharArray(b),0,b,0);}
function MU(a,b,c,d,e,f,g){Jk(a,c,e,f);a.fH=b;a.iQ=g;a.ez=d;}
function P_(a,b){return a.ez.data[b+a.fH|0];}
function Nd(a,b,c){a.ez.data[b+a.fH|0]=c;}
function P3(a){return 1;}
function V5(a){return a.ez;}
function YS(a){return a.iQ;}
function MW(){K.call(this);}
function ADu(){var a=new MW();ON(a);return a;}
function ON(a){Q(a);}
function Xr(a){return Bw().I(33,64).I(91,96).I(123,126);}
function EL(){var a=this;C.call(a);a.cu=null;a.dG=null;}
var AFK=null;function AAQ(){AAQ=Bc(EL);Nk();}
function AAJ(a,b){var c=new EL();Gn(c,a,b);return c;}
function Gn(a,b,c){AAQ();L(a);a.cu=b;a.dG=c;}
function S9(a,b,c){var d,e,f,g,h,i,j,k,l;d=b.createElement("div");e=0;while(e<a.cu.d5()){f=0;while(f<a.cu.ej()){g=(5-a.cu.d5()|0)+e|0;h=LI(a,g,f);if(h>0){i=FO(a,b,h);d.appendChild(i);}j=a.cu.dI(e,f);if(j!==null){k=KR(a,b,j,c);d.appendChild(k);}else{i=FO(a,b,30);d.appendChild(i);}f=f+1|0;}l=b.createElement("br");d.appendChild(l);e=e+1|0;}return d;}
function KR(a,b,c,d){var e,f,g,h,i,j,k;e=b.createElement("span");e.setAttribute("class","key");f=null;if(!d)f=AFK.data[c.bj()];else{g=a.dG.gi(c);if(g!==null){h=U(255,160+(g.dS()*1000.0|0)|0);i=Bn(0,160-(g.dS()*1500.0|0)|0);f=J().a(B(272)).n(h).a(B(230)).n(i).a(B(230)).n(i).a(B(241)).f();}}if(f===null){j=!!1;e.hidden=j;}else{j=J().a(B(273)).a(f).f();e.setAttribute("style",$rt_ustr(j));}if(a.dG!==null){g=a.dG.gi(c);if(g!==null){k=J().a(B(274)).a(Em(c.e3())).a(B(275));k=k.a($rt_str((g.dS()*100.0).toFixed(2))).a(B(247)).f();e.setAttribute("title",
$rt_ustr(k));}}j=MB(c.iL());j=b.createTextNode($rt_ustr(j));e.appendChild(j);return e;}
function FO(a,b,c){var d,e;d=b.createElement("span");d.setAttribute("class","keygap");e=J().a(B(276)).n(c).a(B(277)).f();d.setAttribute("style",$rt_ustr(e));return d;}
function LI(a,b,c){var d,e;a:{d=a.cu.kq();DR();if(d===AEQ){if(b==1&&!c)return 0;if(b==2&&!c)return 15;if(b==3&&!c)return 22;if(b!=4)break a;if(c)break a;return 37;}if(d!==AER){if(d!==AES)break a;if(c&&c!=5)break a;return 15;}if(b==1&&!c)return 0;if(b==2&&!c)return 15;if(b==3&&!c)return 22;e=BV(b,4);if(!e&&!c)return 7;if(!e&&c==5)return 30;}return 0;}
function Nk(){var b,c;b=E(Bf,10);c=b.data;c[0]=B(278);c[1]=B(279);c[2]=B(280);c[3]=B(281);c[4]=null;c[5]=null;c[6]=B(282);c[7]=B(280);c[8]=B(279);c[9]=B(278);AFK=b;}
function HU(){I.call(this);this.j$=null;}
function ADw(a){var b=new HU();NG(b,a);return b;}
function NG(a,b){a.j$=b;O(a);}
function WU(a,b){return G7(b);}
function Cl(){}
function Hz(){C.call(this);}
function ABq(){var a=new Hz();QV(a);return a;}
function QV(a){L(a);}
function KZ(a,b){if(IY())MP();}
function S2(a,b){KZ(a,b);}
function De(){var a=this;C.call(a);a.hv=null;a.hj=null;a.gB=null;a.gq=null;a.i0=0;}
function Z(a,b,c){var d=new De();Qq(d,a,b,c);return d;}
function Qq(a,b,c,d){L(a);a.hv=b;a.hj=c;a.gB=d;}
function OI(a){return a.hv;}
function X4(a){return a.hj;}
function N9(a){return a.gB;}
function R$(a){return a.gq;}
function AAo(a,b){a.gq=b;}
function Qx(a){return a.i0;}
function QF(a,b){a.i0=b;}
function HA(){C.call(this);}
function ADt(){var a=new HA();AAd(a);return a;}
function AAd(a){L(a);}
function MT(a,b){EN().setAttribute("style","display:none");FB().setAttribute("style","display:block;font-size:125%;padding:0.5ex");}
function Xg(a,b){MT(a,b);}
function MC(){C.call(this);}
function HC(){C.call(this);}
function AAC(){var a=new HC();TP(a);return a;}
function TP(a){L(a);}
function Lo(a,b){EN().setAttribute("style","display:block;font-size:125%;padding:0.5ex");FB().setAttribute("style","display:none");}
function AAn(a,b){Lo(a,b);}
function Hb(){C.call(this);}
function ADy(){var a=new Hb();Z0(a);return a;}
function Z0(a){L(a);}
function JF(a,b){var c;Cj();c=AE9.data[GC().selectedIndex];Ee(c.bN());C7(null,null);B2(null);}
function Ws(a,b){JF(a,b);}
function Gq(){var a=this;C.call(a);a.ix=null;a.iy=null;a.gs=null;}
function Rh(a,b,c){var d=new Gq();VQ(d,a,b,c);return d;}
function VQ(a,b,c,d){L(a);a.ix=b;a.iy=c;a.gs=d;}
function U9(a){return a.ix;}
function YF(a){return a.iy;}
function PR(a){return a.gs;}
function SH(b){var c,d,e,f,g,h;c=$rt_createDoubleArray(10);d=b.Y();while(d.Z()){e=d.V();f=e.cW().bj();g=e.ep().bj();if(HM(f,g)){h=c.data;h[f]=h[f]+e.du().bO();}}return c;}
function MG(){I.call(this);this.kK=null;}
function ABx(a){var b=new MG();VM(b,a);return b;}
function VM(a,b){a.kK=b;O(a);}
function VE(a,b){return 0;}
function L2(){BN.call(this);this.lM=null;}
function AC5(a){var b=new L2();Qj(b,a);return b;}
function Qj(a,b){C2(a);a.lM=b;}
function Hc(){C.call(this);}
function ABL(){var a=new Hc();Tt(a);return a;}
function Tt(a){L(a);}
function KL(a,b){var c;Cj();c=AE8.data[GN().selectedIndex];F8(c.bN());C7(null,null);B2(null);}
function UG(a,b){KL(a,b);}
function Ll(){I.call(this);this.lO=null;}
function ABZ(a){var b=new Ll();VT(b,a);return b;}
function VT(a,b){a.lO=b;O(a);}
function Ts(a,b){return Lb(b);}
function J2(){R.call(this);this.h$=0;}
function VY(a){var b=new J2();YT(b,a);return b;}
function YT(a,b){Bj(a);a.h$=b;}
function Q1(a,b,c,d){var e,f,g,h,i;e=b<d.q()?c.d(b):32;f=!b?32:c.d(b-1|0);g=!d.c$()?d.bv():0;h=e!=32&&!FC(a,e,b,g,c)?0:1;i=f!=32&&!FC(a,f,b-1|0,g,c)?0:1;return h^i^a.h$?(-1):a.e.b(b,c,d);}
function Rn(a,b){return 0;}
function FC(a,b,c,d,e){var f;if(!FU(b)&&b!=95){a:{if(C_(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=e.d(c);if(FU(f))return 0;if(C_(f)!=6)return 1;}}return 1;}return 0;}
function KJ(){R.call(this);this.dB=0;}
function AAD(a){var b=new KJ();Wc(b,a);return b;}
function Wc(a,b){Bj(a);a.dB=b;}
function ZB(a,b,c,d){var e;e=!d.cN()?c.g():d.q();if(b>=e){d.C(a.dB,0);return a.e.b(b,c,d);}if((e-b|0)==1&&c.d(b)==10){d.C(a.dB,1);return a.e.b(b+1|0,c,d);}return (-1);}
function V7(a,b){var c;c=!b.bD(a.dB)?0:1;b.C(a.dB,(-1));return c;}
function Dm(){K.call(this);}
function ACy(){var a=new Dm();LZ(a);return a;}
function LZ(a){Q(a);}
function LQ(a){return Bw().I(9,13).be(32);}
function G$(){var a=this;C.call(a);a.kr=null;a.iU=null;a.hb=null;a.h2=null;a.kl=0.0;a.hl=null;a.jb=null;a.hG=null;}
function ACI(a,b,c,d,e,f,g,h){var i=new G$();Vn(i,a,b,c,d,e,f,g,h);return i;}
function Vn(a,b,c,d,e,f,g,h,i){L(a);a.kr=b;a.iU=c;a.hb=d;a.h2=e;a.kl=f;a.hl=g;a.jb=h;a.hG=i;}
function PN(a){return a.iU;}
function U$(a){return a.hb;}
function WE(a){return a.h2;}
function Po(a){return a.hl;}
function T4(a){return a.hG;}
function LL(){Y.call(this);this.gt=0;}
function SB(a){var b=new LL();O6(b,a);return b;}
function O6(a,b){BG(a);a.gt=BP(By(b));}
function Nm(a,b,c){return a.gt!=BP(By(c.d(b)))?(-1):1;}
function DM(){BM.call(this);this.gX=0.0;}
var AFL=0.0;var AFM=null;function Fv(){Fv=Bc(DM);Sx();}
function ABX(a){var b=new DM();La(b,a);return b;}
function La(a,b){Fv();FT(a);a.gX=b;}
function Z6(a){return a.gX;}
function Fr(b){Fv();return ABX(b);}
function DD(b){var c,d,e,f,g,h,i,j,k,l,m,n,o;Fv();if(b.Q())G(B_());c=0;d=b.g();while(true){if(b.d(c)>32){while(b.d(d-1|0)<=32){d=d+(-1)|0;}e=0;if(b.d(c)==45){c=c+1|0;e=1;}else if(b.d(c)==43)c=c+1|0;if(c==d)G(B_());a:{f=b.d(c);g=Long_ZERO;h=0;i=0;if(f!=46){i=1;if(f>=48&&f<=57){b:{while(c<d){if(b.d(c)!=48)break b;c=c+1|0;}}while(c<d){j=b.d(c);if(j<48)break a;if(j>57)break a;if(Long_toNumber(g)>=1.0E17)h=h+1|0;else g=Long_add(Long_mul(g,Long_fromInt(10)),Long_fromInt(j-48|0));c=c+1|0;}}else G(B_());}}if(c<d&&b.d(c)
==46){c=c+1|0;c:{while(true){if(c>=d)break c;k=b.d(c);if(k<48)break c;if(k>57)break;if(Long_toNumber(g)<1.0E17){g=Long_add(Long_mul(g,Long_fromInt(10)),Long_fromInt(k-48|0));h=h+(-1)|0;}c=c+1|0;i=1;}}if(!i)G(B_());}if(c<d){k=b.d(c);if(k!=101&&k!=69)G(B_());l=c+1|0;m=0;if(l==d)G(B_());if(b.d(l)==45){l=l+1|0;m=1;}else if(b.d(l)==43)l=l+1|0;n=0;k=0;d:{while(true){if(l>=d)break d;o=b.d(l);if(o<48)break d;if(o>57)break;n=(10*n|0)+(o-48|0)|0;k=1;l=l+1|0;}}if(!k)G(B_());if(m)n= -n;h=h+n|0;}e:{j=BV(h,308);if(j<=0){if
(j)break e;if(Long_le(g,new Long(2133831477, 4185580)))break e;}return e?(-Infinity):Infinity;}if(e)g=Long_neg(g);return Long_toNumber(g)*KT(h);}c=c+1|0;if(c==d)break;}G(B_());}
function KT(b){var c,d;Fv();if(b>=0)c=10.0;else{c=0.1;b= -b;}d=1.0;while(b){if(b%2|0)d=d*c;c=c*c;b=b/2|0;}return d;}
function Sx(){AFL=NaN;AFM=D($rt_doublecls());}
function Et(){Bp.call(this);this.gS=0;}
function AFN(a){var b=new Et();Mo(b,a);return b;}
function Mo(a,b){Cm(a,b);}
function Pd(a,b,c,d){var e;e=a.c5();d.C(e,b-d.bD(e)|0);a.gS=b;return b;}
function RL(a){return a.gS;}
function QX(a,b){return 0;}
function Dn(){V.call(this);this.cA=0;}
function PU(a){var b=new Dn();RS(b,a);return b;}
function RS(a,b){BC(a);a.cA=b;}
function Qz(a,b){a.e=b;}
function SE(a,b,c,d){var e,f,g;e=b+1|0;if(e>d.q()){d.by=1;return (-1);}f=c.d(b);if(b>d.bv()){g=c.d(b-1|0);if(Bh(g))return (-1);}if(a.cA!=f)return (-1);return a.e.b(e,c,d);}
function Xt(a,b,c,d){var e,f,g,h,i;if(!(c instanceof Bf))return C6(a,b,c,d);e=c;f=d.bv();g=d.q();while(true){if(b>=g)return (-1);h=e.cy(a.cA,b);if(h<0)return (-1);if(h>f&&Bh(e.d(h-1|0))){b=h+1|0;continue;}i=a.e;b=h+1|0;if(i.b(b,c,d)>=0)break;}return h;}
function TY(a,b,c,d,e){var f,g,h;if(!(d instanceof Bf))return Db(a,b,c,d,e);f=e.bv();g=d;a:{while(true){if(c<b)return (-1);h=g.et(a.cA,c);if(h<0)break a;if(h<b)break a;if(h>f&&Bh(g.d(h-1|0))){c=h+(-2)|0;continue;}if(a.e.b(h+1|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function OP(a,b){if(b instanceof B0)return 0;if(b instanceof B1)return 0;if(b instanceof BH)return 0;if(b instanceof BZ)return 0;if(b instanceof Dx)return 0;if(!(b instanceof Dn))return 1;return b.cA!=a.cA?0:1;}
function VN(a,b){return 1;}
function E4(){}
function LK(){B8.call(this);}
function ACw(a,b){var c=new LK();TZ(c,a,b);return c;}
function TZ(a,b,c){Iy(a,b,c);}
function LE(){var a=this;C.call(a);a.cs=null;a.iH=0;a.bQ=0;a.eA=0;a.iu=0.0;}
function AB3(a,b,c){var d=new LE();W2(d,a,b,c);return d;}
function W2(a,b,c,d){var e,f,g;L(a);if(b.g()!=1)a.cs=b.cn();else{e=Y_(b.d(0));if(!e){f=$rt_createCharArray(1);f.data[0]=b.d(0);a.cs=f;}else{f=$rt_createCharArray(2);g=f.data;g[0]=b.d(0);g[1]=e;a.cs=f;}}a.iH=c;a.bQ=d;a.eA=M0(a);}
function WH(a){return By(a.cs.data[0]);}
function ZY(a){return a.iH;}
function Xo(a){return a.bQ;}
function YX(a){return a.eA>4?1:0;}
function T0(a){return a.eA;}
function Q0(a,b){a.eA=b;}
function Px(a){return a.iu;}
function T1(a,b){a.iu=b;}
function QY(a){return a.cs;}
function O_(a,b){var c,d,e,f;c=a.cs.data;d=c.length;e=0;while(e<d){f=c[e];if(f==By(b))return 1;e=e+1|0;}return 0;}
function M0(a){if(a.bQ<=3)return a.bQ;if(a.bQ==4)return 3;if(a.bQ==5)return 6;if(a.bQ>=6&&a.bQ<=9)return a.bQ;return 9;}
function Y_(b){if(Lt(b))return By(b);a:{switch(b){case 39:break;case 40:case 41:case 42:case 43:case 58:case 60:case 62:case 63:case 64:case 65:case 66:case 67:case 68:case 69:case 70:case 71:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 80:case 81:case 82:case 83:case 84:case 85:case 86:case 87:case 88:case 89:case 90:case 92:break a;case 44:return 60;case 45:return 95;case 46:return 62;case 47:return 63;case 48:return 41;case 49:return 33;case 50:return 64;case 51:return 35;case 52:return 36;case 53:return 37;case 54:return 94;case 55:return 38;case 56:return 42;case 57:return 40;case 59:return 58;case 61:return 43;case 91:return 123;case 93:return 125;default:break a;}return 34;}return 0;}
function Cg(){var a=this;Bs.call(a);a.cj=null;a.bz=0;}
function AFO(a,b,c,d,e){var f=new Cg();Do(f,a,b,c,d,e);return f;}
function Do(a,b,c,d,e,f){CB(a,c,d,e);a.cj=b;a.bz=f;}
function AAf(a,b,c,d){var e,f,g,h;e=d.hP(a.bz);if(!a.w.x(d))return a.e.b(b,c,d);if(e>=a.cj.cX())return a.e.b(b,c,d);f=a.bz;g=e+1|0;d.b0(f,g);h=a.w.b(b,c,d);if(h>=0){d.b0(a.bz,0);return h;}f=a.bz;g=g+(-1)|0;d.b0(f,g);if(g>=a.cj.cU())return a.e.b(b,c,d);d.b0(a.bz,0);return (-1);}
function E$(){Cg.call(this);}
function AFP(a,b,c,d,e){var f=new E$();Hv(f,a,b,c,d,e);return f;}
function Hv(a,b,c,d,e,f){Do(a,b,c,d,e,f);}
function Pj(a,b,c,d){var e,f;e=d.hP(a.bz);if(!a.w.x(d))return a.e.b(b,c,d);if(e>=a.cj.cX()){d.b0(a.bz,0);return a.e.b(b,c,d);}if(e<a.cj.cU()){d.b0(a.bz,e+1|0);f=a.w.b(b,c,d);}else{f=a.e.b(b,c,d);if(f>=0){d.b0(a.bz,0);return f;}d.b0(a.bz,e+1|0);f=a.w.b(b,c,d);}return f;}
function Ev(){}
function DA(){Dl.call(this);this.b7=0;}
function AFQ(){var a=new DA();L7(a);return a;}
function L7(a){Lu(a);}
function U1(a){return ABb(a);}
function EV(){}
function H7(){var a=this;DA.call(a);a.bk=null;a.bn=0;}
function BW(){var a=new H7();VR(a);return a;}
function AFR(a){var b=new H7();GH(b,a);return b;}
function VR(a){GH(a,10);}
function GH(a,b){L7(a);a.bk=E(C,b);}
function Pq(a,b){var c,d;if(a.bk.data.length<b){if(a.bk.data.length>=1073741823)c=2147483647;else{d=a.bk.data.length*2|0;c=Bn(b,Bn(d,5));}a.bk=L4(a.bk,c);}}
function S3(a,b){Es(a,b);return a.bk.data[b];}
function QD(a){return a.bn;}
function XC(a,b){var c,d;a.bX(a.bn+1|0);c=a.bk.data;d=a.bn;a.bn=d+1|0;c[d]=b;a.b7=a.b7+1|0;return 1;}
function YE(a,b,c){var d;JG(a,b);a.bX(a.bn+1|0);d=a.bn;while(d>b){a.bk.data[d]=a.bk.data[d-1|0];d=d+(-1)|0;}a.bk.data[b]=c;a.bn=a.bn+1|0;a.b7=a.b7+1|0;}
function TB(a,b){var c,d,e,f;Es(a,b);c=a.bk.data[b];a.bn=a.bn-1|0;while(b<a.bn){d=a.bk.data;e=a.bk.data;f=b+1|0;d[b]=e[f];b=f;}a.bk.data[a.bn]=null;a.b7=a.b7+1|0;return c;}
function Es(a,b){if(b>=0&&b<a.bn)return;G(Cs());}
function JG(a,b){if(b>=0&&b<=a.bn)return;G(Cs());}
function EY(){}
function E9(){}
function Hy(){C.call(this);}
function Nr(a,b,c){a.ms($rt_str(b),Dy(c,"handleEvent"));}
function N3(a,b,c){a.nI($rt_str(b),Dy(c,"handleEvent"));}
function P2(a,b){return a.na(b);}
function Ql(a,b,c,d){a.my($rt_str(b),Dy(c,"handleEvent"),d?1:0);}
function XH(a,b){return !!a.mx(b);}
function Sd(a){return a.m6();}
function N6(a,b,c,d){a.oO($rt_str(b),Dy(c,"handleEvent"),d?1:0);}
function K4(){CM.call(this);}
function ACp(a,b,c){var d=new K4();Q6(d,a,b,c);return d;}
function Q6(a,b,c,d){Er(a,b,c,d);}
function RN(a,b,c,d){var e;if(!a.w.x(d))return a.e.b(b,c,d);e=a.e.b(b,c,d);if(e<0)e=a.w.b(b,c,d);return e;}
function Hn(){C.call(this);}
function Bf(){var a=this;C.call(a);a.t=null;a.dH=0;}
var AFS=null;function CP(){CP=Bc(Bf);WI();}
function Em(a){var b=new Bf();Dq(b,a);return b;}
function E5(a,b,c){var d=new Bf();M3(d,a,b,c);return d;}
function ABz(a,b,c,d){var e=new Bf();H3(e,a,b,c,d);return e;}
function AFT(a,b,c,d){var e=new Bf();FS(e,a,b,c,d);return e;}
function ACX(a,b,c){var d=new Bf();Gf(d,a,b,c);return d;}
function Dq(a,b){var c,d,e;CP();c=b.data;L(a);d=c.length;a.t=$rt_createCharArray(d);e=0;while(e<d){a.t.data[e]=c[e];e=e+1|0;}}
function M3(a,b,c,d){var e,f;CP();L(a);a.t=$rt_createCharArray(d);e=0;while(e<d){f=b.data;a.t.data[e]=f[e+c|0];e=e+1|0;}}
function H3(a,b,c,d,e){CP();FS(a,b,c,d,Os(e.f()));}
function FS(a,b,c,d,e){CP();L(a);I0(a,b,c,d,e);}
function Gf(a,b,c,d){var e,f,g,h,i,j,k;CP();L(a);a.t=$rt_createCharArray(d*2|0);e=0;f=0;while(f<d){g=b.data;h=c+1|0;i=g[c];if(i<65536){g=a.t.data;j=e+1|0;g[e]=i&65535;}else{g=a.t.data;k=e+1|0;g[e]=CQ(i);g=a.t.data;j=k+1|0;g[k]=CF(i);}f=f+1|0;c=h;e=j;}if(e<a.t.data.length)a.t=EH(a.t,e);}
function I0(a,b,c,d,e){var f;f=GQ(e,Mb(b,c,d));if(IK(f)&&!BF(f)&&Kx(f)==J8(f))a.t=E2(f);else{a.t=$rt_createCharArray(W(f));f.ks(a.t);}}
function Qb(a,b){if(b>=0&&b<a.t.data.length)return a.t.data[b];G(E_());}
function V6(a){return a.t.data.length;}
function YY(a){return a.t.data.length?0:1;}
function Rt(a,b,c){var d,e,f;if((c+b.g()|0)>a.g())return 0;d=0;while(d<b.g()){e=b.d(d);f=c+1|0;if(e!=a.d(c))return 0;d=d+1|0;c=f;}return 1;}
function Y7(a,b){if(a===b)return 1;return a.ip(b,0);}
function PO(a,b,c){var d,e,f,g;d=Bn(0,c);if(b<65536){e=b&65535;while(true){if(d>=a.t.data.length)return (-1);if(a.t.data[d]==e)break;d=d+1|0;}return d;}f=CQ(b);g=CF(b);while(true){if(d>=(a.t.data.length-1|0))return (-1);if(a.t.data[d]==f&&a.t.data[d+1|0]==g)break;d=d+1|0;}return d;}
function UK(a,b){return a.cy(b,0);}
function Qm(a,b,c){var d,e,f,g,h,i;d=U(c,a.g()-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.t.data[d]==e)break;d=d+(-1)|0;}return d;}f=CQ(b);g=CF(b);while(true){if(d<1)return (-1);if(a.t.data[d]==g){h=a.t.data;i=d-1|0;if(h[i]==f)break;}d=d+(-1)|0;}return i;}
function Uf(a,b,c){var d,e,f;d=Bn(0,c);e=a.g()-b.g()|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=b.g())break a;if(a.d(d+f|0)!=b.d(f))break;f=f+1|0;}d=d+1|0;}return d;}
function Uz(a,b,c){var d,e;d=U(c,a.g()-b.g()|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=b.g())break a;if(a.d(d+e|0)!=b.d(e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function Ou(a,b,c){if(b>c)G(Cs());return E5(a.t,b,c-b|0);}
function Yf(a,b){return a.b$(b,a.g());}
function UW(a,b,c){return a.b$(b,c);}
function Nb(a,b){var c,d,e;c=a.g()-b.g()|0;d=0;while(d<=c){e=0;while(true){if(e>=b.g())return 1;if(a.d(d+e|0)!=b.d(e))break;e=e+1|0;}d=d+1|0;}return 0;}
function Zz(a){var b,c;b=0;c=a.g()-1|0;a:{while(b<=c){if(a.d(b)>32)break a;b=b+1|0;}}while(b<=c&&a.d(c)<=32){c=c+(-1)|0;}return a.b$(b,c+1|0);}
function RQ(a){return a;}
function Y5(a){var b,c,d;b=$rt_createCharArray(a.t.data.length);c=0;while(true){d=b.data;if(c>=d.length)break;d[c]=a.t.data[c];c=c+1|0;}return b;}
function MB(b){var c,d;CP();c=new Bf;d=$rt_createCharArray(1);d.data[0]=b;Dq(c,d);return c;}
function EG(b){CP();return J().n(b).f();}
function Xw(a,b){var c,d;if(a===b)return 1;if(!(b instanceof Bf))return 0;c=b;if(c.g()!=a.g())return 0;d=0;while(d<c.g()){if(a.d(d)!=c.d(d))return 0;d=d+1|0;}return 1;}
function XT(a,b){var c;if(a===b)return 1;if(b===null)return 0;if(a.g()!=b.g())return 0;c=0;while(c<a.g()){if(BP(a.d(c))!=BP(b.d(c)))return 0;c=c+1|0;}return 1;}
function P0(a){var b,c,d,e;a:{if(!a.dH){b=a.t.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.dH=(31*a.dH|0)+e|0;d=d+1|0;}}}return a.dH;}
function OV(a){var b,c,d,e,f,g,h,i;if(a.Q())return a;b=$rt_createIntArray(a.t.data.length);c=0;d=0;while(d<a.t.data.length){a:{if(d!=(a.t.data.length-1|0)&&Bh(a.t.data[d])){e=a.t.data;f=d+1|0;g=e[f];if(Bq(g)){h=b.data;i=c+1|0;h[c]=Co(BR(a.t.data[d],a.t.data[f]));d=f;break a;}}h=b.data;i=c+1|0;h[c]=By(a.t.data[d]);}d=d+1|0;c=i;}return ACX(b,0,c);}
function Z5(a,b){return Hs(TD(b),a.f());}
function WI(){AFS=AC9();}
function FL(){C.call(this);}
var AFU=null;function ADE(){ADE=Bc(FL);T8();}
function Ge(){ADE();return AFU;}
function T8(){AFU=AAp();AFU.hB(B(283),XM());}
function M5(){T.call(this);}
function ADb(){var a=new M5();QU(a);return a;}
function QU(a){BA(a);}
function Ia(){Ca.call(this);}
function ACm(a,b,c){var d=new Ia();VA(d,a,b,c);return d;}
function VA(a,b,c,d){Ek(a,b,c,d);}
function PK(a,b,c,d){var e;e=a.e.b(b,c,d);if(e>=0)return e;return a.w.b(b,c,d);}
function Eb(){Dj.call(this);}
function AFV(a,b,c){var d=new Eb();I9(d,a,b,c);return d;}
function I9(a,b,c,d){K7(a,b,c,d);}
function Qr(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=$rt_createCharArray(U(W(b),512));e=0;f=0;g=$rt_createByteArray(U(W(c),512));a:{while(true){if((e+32|0)>f&&BQ(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=U(W(b)+j|0,i.length);b.iB(d,j,f-j|0);e=0;}if(!BQ(c)){if(!BQ(b)&&e>=f){Be();k=AEy;}else{Be();k=AEw;}break a;}i=g.data;l=U(W(c),i.length);m=ABw(b,c);k=a.jA(d,e,f,g,0,l,m);e=m.hT;if(k===null&&0==m.f3){Be();k=AEy;}j=m.f3;c.hV(g,0,j);if(k!==null)break;}}b.fd(BF(b)-(f-e|0)|0);return k;}
function JM(){Eb.call(this);}
function ACh(a){var b=new JM();UN(b,a);return b;}
function UN(a,b){I9(a,b,2.0,4.0);}
function ZO(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(h.dy(2))break a;Be();i=AEw;break a;}k=e.data;n=f+1|0;k[f]=(192|l>>6)<<24>>24;m=n+1|0;k[n]=(128|l&63)<<24>>24;}else if(!D1(l)){if((f+3|0)>g){j=j+(-1)|0;if(h.dy(3))break a;Be();i=AEw;break a;}k=e.data;o=f+1|0;k[f]=(224|l>>12)<<24>>24;n=o+1|0;k[o]=(128|l>>6&63)<<24>>24;m=n+1|0;k[n]=(128|l&63)<<24>>24;}else{if
(!Bh(l)){i=BK(1);break a;}if(j>=d){if(h.dh())break a;Be();i=AEy;break a;}n=j+1|0;p=k[j];if(!Bq(p)){j=n+(-2)|0;i=BK(1);break a;}if((f+4|0)>g){j=n+(-2)|0;if(h.dy(4))break a;Be();i=AEw;break a;}k=e.data;q=BR(l,p);j=f+1|0;k[f]=(240|q>>18)<<24>>24;o=j+1|0;k[j]=(128|q>>12&63)<<24>>24;j=o+1|0;k[o]=(128|q>>6&63)<<24>>24;m=j+1|0;k[j]=(128|q&63)<<24>>24;j=n;}c=j;f=m;}j=c;}h.f9(j);h.eM(f);return i;}
function I5(){K.call(this);}
function ACS(){var a=new I5();QZ(a);return a;}
function QZ(a){Q(a);}
function Yj(a){return AB0(a);}
function Ki(){C.call(this);}
function AC$(){var a=new Ki();PZ(a);return a;}
function PZ(a){L(a);}
function Pn(a,b,c){var d,e,$$je;a:{try{d=Ij(a,b,Ex(c));}catch($$e){$$je=Bd($$e);if($$je instanceof BX){e=$$je;break a;}else{throw $$e;}}return d;}Ch().o(B(284));e.ew();return 0;}
function Ij(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,$$je;Fo();d=AEL;e=Eh(c);a:{try{f=0;while(true){g=e.em();if(g===null)break;h=g.cr(35);if(h>=0)g=g.b$(0,h);i=g.hM();if(!i.g())continue;if(i.fL(B(285))){j=B7(i,58);try{g=GT(j.E(0).c1());d=g;k=0;f=k;d=g;f=k;continue;}catch($$e){$$je=Bd($$e);if($$je instanceof Bo){}else{throw $$e;}}Ch().o(J().a(B(286)).a(j.E(0)).f());continue;}if(d===AEL){j=B7(i,32);l=0;while(l<b.ej()){m=b.dI(f,l);if(m!==null)m.lv(JK(j.E(l)));l=l+1|0;}f=f+1|0;}else if(d===AEM){j=B7(i,32);l=0;while(l
<b.ej()){m=b.dI(f,l);if(m!==null)m.lB(DD(j.E(l)));l=l+1|0;}f=f+1|0;}else if(d===AEN){b:{j=B7(i,32);if(f){n=f-1|0;o=0;while(true){if(o>=j.U())break b;b.ly(n,o,DD(j.E(o)));o=o+1|0;}}o=0;while(o<j.U()){b.jF(o,DD(j.E(o)));o=o+1|0;}}f=f+1|0;}else if(d===AEO){j=B7(i,32);c:{try{b.kj(Hh(j.E(0).c1()));break c;}catch($$e){$$je=Bd($$e);if($$je instanceof Bo){}else{throw $$e;}}Ch().o(J().a(B(287)).a(j.E(0)).f());}f=f+1|0;}}break a;}catch($$e){$$je=Bd($$e);g=$$je;}e.bG();G(g);}e.bG();return 1;}
function HM(b,c){return b!=c?0:1;}
function Us(b,c){var d;d=b-c|0;return d!=1&&d!=(-1)?0:1;}
function L5(b,c){var d,e;d=b<=4?b:9-b|0;e=c<=4?c:9-c|0;if(d<e)c=b;return c;}
function Ii(){R.call(this);}
function ABQ(){var a=new Ii();ZW(a);return a;}
function ZW(a){Bj(a);}
function Zr(a,b,c,d){return b;}
function QL(a,b){return 0;}
function C0(){BN.call(this);}
function B_(){var a=new C0();PW(a);return a;}
function BU(a){var b=new C0();AAb(b,a);return b;}
function PW(a){C2(a);}
function AAb(a,b){MZ(a,b);}
function ED(){Cg.call(this);}
function AFW(a,b,c,d,e){var f=new ED();HB(f,a,b,c,d,e);return f;}
function HB(a,b,c,d,e,f){Do(a,b,c,d,e,f);D$();c.s(AEz);}
function X2(a,b,c,d){var e,f,g;e=0;f=a.cj.cX();a:{while(true){g=a.w.b(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.cj.cU())return (-1);return a.e.b(b,c,d);}
function ML(){Dr.call(this);}
function XM(){var a=new ML();X6(a);return a;}
function X6(a){I8(a,B(283),E(Bf,0));}
function Uj(a){return ABT(a);}
function X$(a){return ACh(a);}
function Gu(){R.call(this);this.ck=0;}
function AAS(a){var b=new Gu();AAj(b,a);return b;}
function AAj(a,b){Bj(a);a.ck=b;}
function Yc(a,b,c,d){var e,f,g;e=!d.cN()?c.g()-b|0:d.bv()-b|0;if(!e){d.C(a.ck,0);return a.e.b(b,c,d);}if(e<2){f=c.d(b);g=97;}else{f=c.d(b);g=c.d(b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:d.C(a.ck,0);return a.e.b(b,c,d);case 13:if(g!=10){d.C(a.ck,0);return a.e.b(b,c,d);}d.C(a.ck,0);return a.e.b(b,c,d);default:}return (-1);}
function SJ(a,b){var c;c=!b.bD(a.ck)?0:1;b.C(a.ck,(-1));return c;}
function Ic(){C.call(this);}
function Hg(){var a=this;CA.call(a);a.dp=null;a.cT=null;a.bY=0;a.d4=0;a.eQ=0;a.hH=0;}
function AFX(a,b){var c=new Hg();JV(c,a,b);return c;}
function Eh(a){var b=new Hg();Ul(b,a);return b;}
function JV(a,b,c){EI(a);a.hH=(-1);if(c<0)G(Cx());a.dp=b;a.cT=$rt_createCharArray(Bn(64,c));}
function Ul(a,b){JV(a,b,1024);}
function Z1(a){Fy(a);a.dp.bG();a.dp=null;}
function ZL(a){var b,c,d,e;Fy(a);if(a.eQ&&a.bY>=a.d4)return null;b=J();a:{while(true){if(a.bY>=a.d4&&!Eu(a,0))break a;c=a.cT.data;d=a.bY;a.bY=d+1|0;e=c[d];if(e==10)break;if(e==13){if(a.bY>=a.d4&&!Eu(a,0))break a;if(a.cT.data[a.bY]!=10)break a;a.bY=a.bY+1|0;break a;}b.bx(e);}}return b.f();}
function Eu(a,b){var c;if(a.eQ)return 0;a:{while(true){if(b>=a.cT.data.length)break a;c=a.dp.kh(a.cT,b,a.cT.data.length-b|0);if(c==(-1)){a.eQ=1;break a;}if(!c)break;b=b+c|0;}}a.d4=b;a.bY=0;a.hH=(-1);return 1;}
function Fy(a){if(a.dp!==null)return;G(Pw());}
function Im(){K.call(this);}
function ACk(){var a=new Im();Od(a);return a;}
function Od(a){Q(a);}
function Tg(a){return ABx(a);}
function I7(){I.call(this);this.jN=null;}
function ABc(a){var b=new I7();Ns(b,a);return b;}
function Ns(a,b){a.jN=b;O(a);}
function Xp(a,b){return Mw(b);}
function Jd(){K.call(this);}
function ABC(){var a=new Jd();OO(a);return a;}
function OO(a){Q(a);}
function Nn(a){return ABZ(a);}
function Hi(){Bo.call(this);}
function CZ(){var a=new Hi();UP(a);return a;}
function UP(a){C3(a);}
function Dx(){V.call(this);this.cE=0;}
function Yi(a){var b=new Dx();P$(b,a);return b;}
function P$(a,b){BC(a);a.cE=b;}
function RU(a,b){a.e=b;}
function NY(a,b,c,d){var e,f,g,h,i;e=d.q();f=b+1|0;g=BV(f,e);if(g>0){d.by=1;return (-1);}h=c.d(b);if(g<0){i=c.d(f);if(Bq(i))return (-1);}if(a.cE!=h)return (-1);return a.e.b(f,c,d);}
function Rl(a,b,c,d){var e,f,g;if(!(c instanceof Bf))return C6(a,b,c,d);e=c;f=d.q();while(true){if(b>=f)return (-1);g=e.cy(a.cE,b);if(g<0)return (-1);b=g+1|0;if(b<f&&Bq(e.d(b))){b=g+2|0;continue;}if(a.e.b(b,c,d)>=0)break;}return g;}
function T6(a,b,c,d,e){var f,g,h,i;if(!(d instanceof Bf))return Db(a,b,c,d,e);f=d;g=e.q();a:{while(true){if(c<b)return (-1);h=f.et(a.cE,c);if(h<0)break a;if(h<b)break a;i=h+1|0;if(i<g&&Bq(f.d(i))){c=h+(-1)|0;continue;}if(a.e.b(i,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function TG(a,b){if(b instanceof B0)return 0;if(b instanceof B1)return 0;if(b instanceof BH)return 0;if(b instanceof BZ)return 0;if(b instanceof Dn)return 0;if(!(b instanceof Dx))return 1;return b.cE!=a.cE?0:1;}
function RK(a,b){return 1;}
function LO(){Cc.call(this);}
function ADg(a,b,c,d){var e=new LO();Rj(e,a,b,c,d);return e;}
function Rj(a,b,c,d,e){F_(a,b,c,d,e);}
function Uw(a,b,c,d){var e,f,g,h,i;e=a.ci.cU();f=a.ci.cX();g=0;while(true){if(g>=e){a:{while(true){h=a.e.b(b,c,d);if(h>=0)break;if((b+a.B.ba()|0)<=d.q()){h=a.B.H(b,c);b=b+h|0;g=g+1|0;}if(h<1)break a;if(g>f)break a;}return h;}return (-1);}if((b+a.B.ba()|0)>d.q()){d.by=1;return (-1);}i=a.B.H(b,c);if(i<1)break;b=b+i|0;g=g+1|0;}return (-1);}
function GF(){T.call(this);}
function SG(a){var b=new GF();U2(b,a);return b;}
function Rv(){var a=new GF();So(a);return a;}
function U2(a,b){Df(a,b);}
function So(a){BA(a);}
function LS(){R.call(this);}
function Wh(){var a=new LS();TU(a);return a;}
function TU(a){Bj(a);}
function AAl(a,b,c,d){if(b&&!(d.cN()&&b==d.bv()))return (-1);return a.e.b(b,c,d);}
function Yo(a,b){return 0;}
function JP(){I.call(this);this.k$=null;}
function ADa(a){var b=new JP();We(b,a);return b;}
function We(a,b){a.k$=b;O(a);}
function Sk(a,b){return Fk(b);}
function Kn(){var a=this;C.call(a);a.dU=null;a.hX=null;}
function AA4(a,b){var c=new Kn();WG(c,a,b);return c;}
function WG(a,b,c){a.hX=b;a.dU=c;L(a);}
function WW(a){if(a.dU.readyState==4&&a.dU.status==200)QK(a.hX,$rt_str(a.dU.responseText));}
function SA(a){a.jz();}
function LR(){C.call(this);}
function U(b,c){if(b<c)c=b;return c;}
function Bn(b,c){if(b>c)c=b;return c;}
function Gw(b){if(b<=0)b= -b;return b;}
function Kj(){K.call(this);}
function ABB(){var a=new Kj();Tj(a);return a;}
function Tj(a){Q(a);}
function Pp(a){var b;b=AAR(a);b.y=1;return b;}
function FG(){var a=this;BN.call(a);a.hh=null;a.dK=null;a.dq=0;}
function Ba(a,b,c){var d=new FG();Hu(d,a,b,c);return d;}
function Hu(a,b,c,d){C2(a);a.dq=(-1);a.hh=b;a.dK=c;a.dq=d;}
function Yr(a){var b,c;b=B(21);if(a.dq>=1){c=$rt_createCharArray(a.dq);R5(c,32);b=Em(c);}return J().a(a.hh).a(a.dK!==null&&a.dK.g()?J().n(a.dq).a(B(288)).a(a.dK).a(B(288)).a(b).f():B(21)).f();}
function Ko(){K.call(this);}
function AAF(){var a=new Ko();SU(a);return a;}
function SU(a){Q(a);}
function Tm(a){var b;b=ADD(a);b.J.d7(0,2048);b.y=1;return b;}
function Di(){C.call(this);}
var AE8=null;var AE9=null;var AE7=null;function Cj(){Cj=Bc(Di);Q$();}
function Q$(){var b,c;b=E(De,11);c=b.data;c[0]=Z(B(289),B(21),B(290));c[1]=Z(B(291),B(21),B(292));c[2]=Z(B(293),B(21),B(294));c[3]=Z(B(295),B(21),B(296));c[4]=Z(B(297),B(21),B(298));c[5]=Z(B(299),B(21),B(300));c[6]=Z(B(301),B(21),B(302));c[7]=Z(B(303),B(21),B(304));c[8]=Z(B(305),B(21),B(306));c[9]=Z(B(307),B(21),B(308));c[10]=Z(B(309),B(21),B(310));AE8=b;b=E(De,4);c=b.data;c[0]=Z(B(311),B(312),B(313));c[1]=Z(B(314),B(315),B(316));c[2]=Z(B(317),B(318),B(319));c[3]=Z(B(320),B(321),B(322));AE9=b;b=E(De,10);c=b.data;c[0]
=Z(B(254),B(323),B(324));c[1]=Z(B(325),B(326),B(327));c[2]=Z(B(328),B(329),B(330));c[3]=Z(B(331),B(332),B(333));c[4]=Z(B(334),B(335),B(336));c[5]=Z(B(337),B(338),B(339));c[6]=Z(B(340),B(341),B(342));c[7]=Z(B(343),B(344),B(345));c[8]=Z(B(346),B(347),B(348));c[9]=Z(B(349),B(350),B(351));AE7=b;}
function H1(){C.call(this);}
function AC9(){var a=new H1();QM(a);return a;}
function QM(a){L(a);}
function ER(){C.call(this);}
var AFY=null;function AB9(){AB9=Bc(ER);Ob();}
function AA1(){var a=new ER();KC(a);return a;}
function KC(a){AB9();L(a);}
function Uk(a,b,c,d){var e,f,g,h,i,j,k,l;e=Ho(a,b);f=M2(a,b,c);g=MV(a,b,c);h=M6(a,b,d);i=H9(a,b,d);j=JD(a,b,d);k=E($rt_arraycls($rt_doublecls()),3);l=k.data;l[0]=IS(a,b,c);l[1]=Mk(a,b,i);l[2]=ID(a,b,j);return ACI(b,e,f,g,h,i,j,k);}
function Ho(a,b){var c,d,e,f;c=BW();d=b.d9();if(b.d5()>4)c.bo(B(352));e=65;while(e<=90){if(d.cr(e)<0)c.bo(J().a(B(353)).bx(e).a(B(354)).f());e=(e+1|0)&65535;}f=0;while(f<d.g()){e=d.d(f);f=f+1|0;if(d.cy(e,f)>=0)c.bo(J().a(B(353)).bx(e).a(B(355)).f());}return c;}
function M2(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=AAp();e=0;while(e<b.d5()){f=0;while(f<b.ej()){g=b.dI(e,f);if(g!==null){h=Fr(0.0);i=g.e3().data;j=i.length;k=0;while(k<j){l=i[k];m=JH(l,c);if(m!==null)h=Fr(h.dS()+m.bO());k=k+1|0;}d.hB(g,h);}f=f+1|0;}e=e+1|0;}return d;}
function MV(a,b,c){var d,e,f,g,h,i,j;d=$rt_createDoubleArray(10);e=c.Y();while(e.Z()){f=e.V();g=f.b_();h=b.b8(g);if(h!==null){i=d.data;j=h.bj();i[j]=i[j]+f.bO();}}return d;}
function M6(a,b,c){var d,e,f,g,h,i,j;d=0.0;e=c.Y();while(e.Z()){f=e.V();g=f.dF().cn();h=g.data;i=b.b8(h[0]);j=b.b8(h[1]);if(i.gr()!=j.gr())d=d+f.bO();}return d;}
function H9(a,b,c){var d,e,f,g,h,i,j,k;d=BW();e=c.Y();while(e.Z()){f=e.V();g=f.dF().cn();h=g.data;i=b.b8(h[0]);j=b.b8(h[1]);if(i!==null&&j!==null&&h[0]!=h[1]&&HM(i.bj(),j.bj())){k=Rh(i,j,f);d.bo(k);}}return d;}
function JD(a,b,c){var d,e,f,g,h,i,j,k,l;d=BW();e=c.Y();while(e.Z()){f=e.V();g=f.dF().cn();h=g.data;i=b.b8(h[0]);j=b.b8(h[1]);if(i!==null&&j!==null&&Us(i.bj(),j.bj())){k=L5(i.bj(),j.bj());if(b.kZ(k)){l=Rh(i,j,f);d.bo(l);}}}return d;}
function IS(a,b,c){var d,e,f,g,h,i,j,k,l;d=$rt_createDoubleArray(10);e=b.d9().cn().data;f=e.length;g=0;while(g<f){h=e[g];i=b.b8(h);j=JH(h,c);if(j!==null){k=d.data;l=i.bj();k[l]=k[l]+i.lC()*j.bO();}g=g+1|0;}return d;}
function Mk(a,b,c){var d,e,f,g,h,i,j;d=$rt_createDoubleArray(10);e=c.Y();while(e.Z()){f=d.data;g=e.V();h=g.cW().bj();i=U(2,Gw(g.cW().dn()-g.ep().dn()|0));j=b.k0(i);f[h]=f[h]+g.du().bO()*j;}return d;}
function ID(a,b,c){var d,e,f,g,h,i,j,k,l;d=$rt_createDoubleArray(10);e=c.Y();while(e.Z()){f=d.data;g=e.V();h=g.cW().bj();i=g.ep().bj();j=L5(h,i);k=U(2,Gw(g.cW().dn()-g.ep().dn()|0));l=b.lS(j,k);f[j]=f[j]+g.du().bO()*l;}return d;}
function Ob(){AFY=BW();}
function LG(){var a=this;C.call(a);a.c=null;a.bm=0;a.fl=null;a.gZ=0;a.bP=0;a.b4=0;a.O=0;a.eJ=null;}
function AAU(){var a=new LG();N_(a);return a;}
function K8(a,b){return ACD(a,b);}
function Ht(a,b,c){var d,e,f,g,h,i;d=BW();e=K8(a,b);f=0;g=0;if(!b.g()){h=E(Bf,1);h.data[0]=B(21);return h;}while(K1(e)){i=f+1|0;if(i>=c&&c>0)break;d.bo(b.fr(g,Ma(e)).f());g=Kc(e);f=i;}a:{d.bo(b.fr(g,b.g()).f());i=f+1|0;if(!c)while(true){i=i+(-1)|0;if(i<0)break;if(d.E(i).f().g())break a;d.iC(i);}}if(i<0)i=0;return d.ji(E(Bf,i));}
function Hs(a,b){return Ht(a,b,0);}
function DJ(a){return a.c.f();}
function Uu(b,c){if(b===null)G(SG(B(356)));if(c&&(c|255)!=255)G(Bx(B(21)));Ja();AEi=1;return Ks(AAU(),b,c);}
function Ks(a,b,c){a.c=ACx(b,c);a.bm=c;a.eJ=F7(a,(-1),a.bm,null);if(a.c.Q()){Ke(a);return a;}G(Ba(B(21),a.c.f(),a.c.bt()));}
function LY(a,b){var c,d,e;c=AC0(Bb(a,2),Bb(a,64));while(!a.c.Q()){d=a.c;if(!d.cl())break;d=a.c;if(d.bh()&&a.c.bh()!=(-536870788)){d=a.c;if(d.bh()!=(-536870871))break;}c.be(a.c.l());if(a.c.R()!=(-536870788))continue;a.c.l();}e=Ea(a,c);e.s(b);return e;}
function F7(a,b,c,d){var e,f,g,h,i,j;e=BW();f=a.bm;g=0;if(c!=a.bm)a.bm=c;a:{switch(b){case -1073741784:h=new F3;i=a.O+1|0;a.O=i;G0(h,i);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new Fm;i=a.O+1|0;a.O=i;Lh(h,i);break a;case -33554392:h=new Et;i=a.O+1|0;a.O=i;Mo(h,i);break a;default:a.bP=a.bP+1|0;if(d!==null)h=AB4(a.bP);else{h=ADe();g=1;}if(a.bP<=(-1))break a;if(a.bP>=10)break a;a.fl.data[a.bP]=h;break a;}h=AAO();}while(true){if(a.c.cl()&&a.c.bh()==(-536870788))j=LY(a,h);else if
(a.c.R()==(-536870788)){j=Cw(h);a.c.l();}else{j=Fc(a,h);if(a.c.R()==(-536870788))a.c.l();}if(j!==null)e.bo(j);if(a.c.Q())break;if(a.c.R()==(-536870871))break;}if(a.c.kL()==(-536870788))e.bo(Cw(h));if(a.bm!=f&&!g){a.bm=f;a.c.kx(a.bm);}switch(b){case -1073741784:break;case -536870872:return AB$(e,h);case -268435416:return AAK(e,h);case -134217688:return ABY(e,h);case -67108824:return ACL(e,h);case -33554392:return AA7(e,h);default:switch(e.U()){case 0:break;case 1:return ABp(e.E(0),h);default:return ADF(e,h);}return Cw(h);}return ADo(e,
h);}
function JC(a){var b,c,d;b=SL();while(!a.c.Q()){c=a.c;if(!c.cl())break;c=a.c;if(c.hI())break;c=a.c;if(c.iR())break;c=a.c;if(!(!c.fk()&&!a.c.bh())){c=a.c;if(!(!c.fk()&&DV(a.c.bh()))){c=a.c;if(c.bh()!=(-536870871)){c=a.c;if((c.bh()&(-2147418113))!=(-2147483608)){c=a.c;if(c.bh()!=(-536870788)){c=a.c;if(c.bh()!=(-536870876))break;}}}}}d=a.c.l();if(!DX(d))b.g1(d&65535);else b.ku(CJ(d));}if(!Bb(a,2))return ADm(b);if(Bb(a,64))return ADJ(b);return ADU(b);}
function JO(a){var b,c,d,e,f,g,h,i,j,k;b=$rt_createIntArray(4);c=0;d=(-1);e=(-1);if(!a.c.Q()&&a.c.cl()){f=b.data;d=a.c.l();f[c]=d;e=d-4352|0;}if(e>=0&&e<19){g=$rt_createCharArray(3);f=g.data;f[c]=d&65535;h=a.c.R();i=h-4449|0;if(i>=0&&i<21){f[1]=h&65535;a.c.l();j=a.c.R();h=j-4519|0;if(h>=0&&h<28){f[2]=j&65535;a.c.l();return Wt(g,3);}return Wt(g,2);}if(!Bb(a,2))return JN(f[0]);if(Bb(a,64))return SB(f[0]);return R4(f[0]);}k=1;while(k<4&&!a.c.Q()&&a.c.cl()){f=b.data;j=k+1|0;f[k]=a.c.l();k=j;}if(k==1){f=b.data;if
(!Nc(f[0]))return FZ(a,f[0]);}if(!Bb(a,2))return ADO(b,k);if(Bb(a,64))return AC4(b,k);return ADH(b,k);}
function Fc(a,b){var c,d,e,f;if(a.c.cl()&&!a.c.fk()&&DV(a.c.bh())){if(!Bb(a,128)){if(!a.c.hI()&&!a.c.iR())c=JC(a);else{d=FV(a,b);c=D4(a,b,d);}}else{c=JO(a);if(!a.c.Q()){e=a.c;if(!(e.R()==(-536870871)&&!(b instanceof Cr))){e=a.c;if(e.R()!=(-536870788)&&!a.c.cl())c=D4(a,b,c);}}}}else if(a.c.R()!=(-536870871)){d=FV(a,b);c=D4(a,b,d);}else{if(b instanceof Cr)G(Ba(B(21),a.c.f(),a.c.bt()));c=Cw(b);}a:{if(!a.c.Q()){e=a.c;if(!(e.R()==(-536870871)&&!(b instanceof Cr))){e=a.c;if(e.R()!=(-536870788)){f=Fc(a,b);if(c instanceof Bv
&&!(c instanceof Cc)&&!(c instanceof Bs)&&!(c instanceof Ca)){e=c;if(!f.X(e.eh()))c=ABP(e);}if((f.cI()&65535)!=43)c.s(f);else c.s(f.eh());break a;}}}if(c===null)return null;c.s(b);}if((c.cI()&65535)!=43)return c;return c.eh();}
function D4(a,b,c){var d,e,f,g,h,i,j;d=a.c.R();if(c!==null&&!(c instanceof Y)){switch(d){case -2147483606:a.c.l();return ACj(c,b,d);case -2147483605:a.c.l();return AAV(c,b,(-2147483606));case -2147483585:a.c.l();return ABg(c,b,(-536870849));case -2147483525:e=new ED;f=a.c.cq();g=a.b4+1|0;a.b4=g;HB(e,f,c,b,(-536870849),g);return e;case -1073741782:case -1073741781:a.c.l();h=ACF(c,b,d);c.s(h);return h;case -1073741761:a.c.l();h=ACp(c,b,(-536870849));c.s(b);return h;case -1073741701:h=new E$;e=a.c;e=e.cq();i=a.b4
+1|0;a.b4=i;Hv(h,e,c,b,(-536870849),i);c.s(h);return h;case -536870870:case -536870869:a.c.l();h=c.cI()!=(-2147483602)?ABM(c,b,d):Bb(a,32)?ACQ(c,b,d):ABA(c,b,d,Fi(a.bm));c.s(h);return h;case -536870849:a.c.l();h=ADs(c,b,(-536870849));c.s(b);return h;case -536870789:h=new Cg;e=a.c;e=e.cq();g=a.b4+1|0;a.b4=g;Do(h,e,c,b,(-536870849),g);c.s(h);return h;default:}return c;}j=null;if(c!==null)j=c;switch(d){case -2147483606:case -2147483605:a.c.l();h=AB_(j,b,d);j.s(h);return h;case -2147483585:a.c.l();return AAX(j,
b,(-2147483585));case -2147483525:return AC2(a.c.cq(),j,b,(-2147483525));case -1073741782:case -1073741781:a.c.l();h=ACP(j,b,d);j.s(h);return h;case -1073741761:a.c.l();return ACm(j,b,(-1073741761));case -1073741701:return ADg(a.c.cq(),j,b,(-1073741701));case -536870870:case -536870869:a.c.l();h=ABK(j,b,d);j.s(h);return h;case -536870849:a.c.l();return AAP(j,b,(-536870849));case -536870789:return ACf(a.c.cq(),j,b,(-536870789));default:}return c;}
function FV(a,b){var c,d,e,f,g,h,i,j,k,l;c=null;while(true){a:{d=a.c.R();if((d&(-2147418113))==(-2147483608)){a.c.l();e=(d&16711680)>>16;d=d&(-16711681);if(d==(-16777176))a.bm=e;else{if(d!=(-1073741784))e=a.bm;c=F7(a,d,e,b);if(a.c.R()!=(-536870871))G(Ba(B(21),a.c.f(),a.c.bt()));a.c.l();}}else{b:{c:{switch(d){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:f=(d&2147483647)-48|0;if(a.bP<f)G(Ba(B(21),a.c.f(),
a.c.bt()));a.c.l();a.O=a.O+1|0;c=!Bb(a,2)?AA5(f,a.O):Bb(a,64)?ADc(f,a.O):ADB(f,a.O);a.fl.data[f].fh=1;a.gZ=1;break a;case -2147483583:break;case -2147483582:a.c.l();c=VY(0);break a;case -2147483577:a.c.l();c=ACg();break a;case -2147483558:a.c.l();c=new FP;g=a.O+1|0;a.O=g;Km(c,g);break a;case -2147483550:a.c.l();c=VY(1);break a;case -2147483526:a.c.l();c=ACK();break a;case -536870876:break c;case -536870866:a.c.l();if(Bb(a,32)){c=ADh();break a;}c=ABW(Fi(a.bm));break a;case -536870821:a.c.l();h=0;if(a.c.R()==
(-536870818)){h=1;a.c.l();}c=HE(a,h,b);if(a.c.R()!=(-536870819))G(Ba(B(21),a.c.f(),a.c.bt()));a.c.d6(1);a.c.l();break a;case -536870818:a.c.l();a.O=a.O+1|0;if(!Bb(a,8)){c=Wh();break a;}c=ACM(Fi(a.bm));break a;case 0:i=a.c.fj();if(i!==null)c=Ea(a,i);else{if(a.c.Q()){c=Cw(b);break a;}c=JN(d&65535);}a.c.l();break a;default:break b;}a.c.l();c=Wh();break a;}a.c.l();a.O=a.O+1|0;if(Bb(a,8)){if(Bb(a,1)){c=ADd(a.O);break a;}c=AAS(a.O);break a;}if(Bb(a,1)){c=AAD(a.O);break a;}c=ACd(a.O);break a;}if(d>=0&&!a.c.dc()){c
=FZ(a,d);a.c.l();}else if(d==(-536870788))c=Cw(b);else{if(d!=(-536870871)){j=new FG;k=a.c;if(!k.dc()){g=d&65535;k=FN(g);}else k=a.c.fj().f();l=a.c;Hu(j,k,l.f(),a.c.bt());G(j);}if(b instanceof Cr)G(Ba(B(21),a.c.f(),a.c.bt()));c=Cw(b);}}}if(d!=(-16777176))break;}return c;}
function HE(a,b,c){var d,e;d=Cu(a,b);e=Ea(a,d);e.s(c);return e;}
function Cu(a,b){var c,d,e,f,g,h,i,j,k,$$je;c=ACC(b,Bb(a,2),Bb(a,64));d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(a.c.Q())break a;f=a.c.R()==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(a.c.R()){case -536870874:if(d>=0)c.be(d);d=a.c.l();if(a.c.R()!=(-536870874)){d=38;break d;}if(a.c.bh()==(-536870821)){a.c.l();e=1;d=(-1);break d;}a.c.l();if(g){c=Cu(a,0);break d;}if(a.c.R()==(-536870819))break d;c.gp(Cu(a,0));break d;case -536870867:if(!g&&a.c.bh()!=(-536870819)){h=a.c;if(h.bh()!=(-536870821)&&d>=0){a.c.l();i=
a.c.R();if(a.c.dc())break c;if(i<0){h=a.c;if(h.bh()!=(-536870819)){h=a.c;if(h.bh()!=(-536870821)&&d>=0)break c;}}e:{try{if(DV(i))break e;i=i&65535;break e;}catch($$e){$$je=Bd($$e);if($$je instanceof Bo){break b;}else{throw $$e;}}}try{c.I(d,i);}catch($$e){$$je=Bd($$e);if($$je instanceof Bo){break b;}else{throw $$e;}}a.c.l();d=(-1);break d;}}if(d>=0)c.be(d);d=45;a.c.l();break d;case -536870821:if(d>=0){c.be(d);d=(-1);}a.c.l();j=0;if(a.c.R()==(-536870818)){a.c.l();j=1;}if(!e)c.jG(Cu(a,j));else c.gp(Cu(a,j));e=
0;a.c.l();break d;case -536870819:if(d>=0)c.be(d);d=93;a.c.l();break d;case -536870818:if(d>=0)c.be(d);d=94;a.c.l();break d;case 0:if(d>=0)c.be(d);k=a.c.fj();if(k===null)d=0;else{c.lE(k);d=(-1);}a.c.l();break d;default:}if(d>=0)c.be(d);d=a.c.l();}g=0;}G(Ba(B(21),DJ(a),a.c.bt()));}G(Ba(B(21),DJ(a),a.c.bt()));}if(!f){if(d>=0)c.be(d);return c;}G(Ba(B(21),DJ(a),a.c.bt()-1|0));}
function FZ(a,b){var c;c=DX(b);if(Bb(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return R4(b&65535);}if(Bb(a,64)&&b>128){if(c)return ABk(b);if(E8(b))return PU(b&65535);if(!Ei(b))return SB(b&65535);return Yi(b&65535);}}if(c)return ABs(b);if(E8(b))return PU(b&65535);if(!Ei(b))return JN(b&65535);return Yi(b&65535);}
function Ea(a,b){var c,d;if(!b.ju()){if(!b.gw()){if(b.cf())return Xk(b);return V1(b);}if(b.cf())return Pi(b);return Zj(b);}c=b.jg();d=AAL(c);if(!b.gw()){if(b.cf())return EW(Xk(b.dM()),d);return EW(V1(b.dM()),d);}if(b.cf())return EW(Pi(b.dM()),d);return EW(Zj(b.dM()),d);}
function TD(b){return Uu(b,0);}
function Ke(a){if(a.gZ)a.eJ.bB();}
function Zp(b){var c,d,e,f;c=J().a(B(357));d=0;while(true){e=b.gJ(B(358),d);if(e<0)break;f=e+2|0;c.a(b.b$(d,f)).a(B(359));d=f;}return c.a(b.fa(d)).a(B(358)).f();}
function G2(a){return a.bP;}
function KX(a){return a.b4+1|0;}
function H_(a){return a.O+1|0;}
function C5(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function Bb(a,b){return (a.bm&b)!=b?0:1;}
function N_(a){L(a);a.fl=E(Bp,10);a.bP=(-1);a.b4=(-1);a.O=(-1);}
function Jq(){CM.call(this);}
function ABg(a,b,c){var d=new Jq();VX(d,a,b,c);return d;}
function VX(a,b,c,d){Er(a,b,c,d);D$();b.s(AEz);}
function Y6(a,b,c,d){var e;e=a.w.b(b,c,d);if(e<=0)e=b;return a.e.b(e,c,d);}
function Py(a,b){a.e=b;}
function Lq(){T.call(this);}
function IX(){var a=new Lq();Wa(a);return a;}
function Wa(a){BA(a);}
function G6(){K.call(this);}
function AAG(){var a=new G6();Nw(a);return a;}
function Nw(a){Q(a);}
function Ye(a){var b;b=ACE(a);b.y=1;return b;}
function Mq(){var a=this;DF.call(a);a.c7=0;a.bp=null;a.eu=0;a.i1=0.0;a.f4=0;}
function AAp(){var a=new Mq();Un(a);return a;}
function AFZ(a){var b=new Mq();Gp(b,a);return b;}
function AF0(a,b){var c=new Mq();L6(c,a,b);return c;}
function WX(a,b){return E(Ey,b);}
function Un(a){Gp(a,16);}
function Gp(a,b){L6(a,b,0.75);}
function LT(b){var c,d;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;d=c|c>>1;d=d|d>>2;d=d|d>>4;d=d|d>>8;d=d|d>>16;return d+1|0;}
function L6(a,b,c){var d;JW(a);if(b>=0&&c>0.0){d=LT(b);a.c7=0;a.bp=a.hf(d);a.i1=c;E6(a);return;}G(Cx());}
function E6(a){a.f4=a.bp.data.length*a.i1|0;}
function W9(a,b){var c;c=Hf(a,b);if(c===null)return null;return c.ef;}
function Hf(a,b){var c,d,e;if(b===null)c=Ga(a);else{d=IT(b);e=d&(a.bp.data.length-1|0);c=Fu(a,b,e,d);}return c;}
function Fu(a,b,c,d){var e,f;e=a.bp.data[c];while(e!==null){if(e.eW==d){f=e.fq;if(P8(b,f))break;}e=e.de;}return e;}
function Ga(a){var b;b=a.bp.data[0];while(b!==null&&b.fq!==null){b=b.de;}return b;}
function O8(a,b,c){return a.lm(b,c);}
function Wv(a,b,c){var d,e,f,g,h;if(b===null){d=Ga(a);if(d===null){a.eu=a.eu+1|0;d=a.hz(null,0,0);e=a.c7+1|0;a.c7=e;if(e>a.f4)a.hy();}}else{f=IT(b);g=f&(a.bp.data.length-1|0);d=Fu(a,b,g,f);if(d===null){a.eu=a.eu+1|0;d=a.hz(b,g,f);e=a.c7+1|0;a.c7=e;if(e>a.f4)a.hy();}}h=d.ef;d.ef=c;return h;}
function R2(a,b,c,d){var e;e=ACo(b,d);e.de=a.bp.data[c];a.bp.data[c]=e;return e;}
function Wj(a,b){var c,d,e,f,g,h,i;c=LT(!b?1:b<<1);d=a.hf(c);e=0;while(e<a.bp.data.length){f=a.bp.data[e];a.bp.data[e]=null;while(f!==null){g=d.data;h=f.eW&(c-1|0);i=f.de;f.de=g[h];g[h]=f;f=i;}e=e+1|0;}a.bp=d;E6(a);}
function SN(a){a.ki(a.bp.data.length);}
function IT(b){return b.hL();}
function P8(b,c){return b!==c&&!b.ca(c)?0:1;}
function GU(){R.call(this);this.c4=0;}
function ADd(a){var b=new GU();Xl(b,a);return b;}
function Xl(a,b){Bj(a);a.c4=b;}
function Qc(a,b,c,d){var e;e=!d.cN()?c.g()-b|0:d.q()-b|0;if(e<=0){d.C(a.c4,0);return a.e.b(b,c,d);}if(c.d(b)!=10)return (-1);d.C(a.c4,1);return a.e.b(b+1|0,c,d);}
function VK(a,b){var c;c=!b.bD(a.c4)?0:1;b.C(a.c4,(-1));return c;}
function HR(){C.call(this);}
function B7(b,c){var d,e,f;d=BW();e=SL();f=0;while(f<b.g()){if(b.d(f)!=c)e.g1(b.d(f));if(!(b.d(f)!=c&&f!=(b.g()-1|0))&&e.g()>0){d.bo(e.f());e.dQ(0);}f=f+1|0;}return d;}
function Mh(){K.call(this);}
function ACn(){var a=new Mh();AAa(a);return a;}
function AAa(a){Q(a);}
function ZX(a){var b;b=ADp(a);b.y=1;return b;}
function EF(){var a=this;C.call(a);a.fK=0;a.gy=0;a.id=null;}
function VD(a,b,c){var d=new EF();Vc(d,a,b,c);return d;}
function Vc(a,b,c,d){L(a);a.fK=b;a.gy=c;a.id=d;}
function DQ(){var a=this;C.call(a);a.cK=0;a.d0=0;}
var AEy=null;var AEw=null;function Be(){Be=Bc(DQ);UC();}
function Ih(a,b){var c=new DQ();Jr(c,a,b);return c;}
function Jr(a,b,c){Be();L(a);a.cK=b;a.d0=c;}
function OQ(a){return a.cK?0:1;}
function W4(a){return a.cK!=1?0:1;}
function ZJ(a){return !a.hW()&&!a.fZ()?0:1;}
function W7(a){return a.cK!=2?0:1;}
function Xn(a){return a.cK!=3?0:1;}
function Vh(a){if(a.fR())return a.d0;G(ACW());}
function BK(b){Be();return Ih(2,b);}
function TX(a){switch(a.cK){case 0:G(ACA());case 1:G(ADx());case 2:G(ABO(a.d0));case 3:G(ACB(a.d0));default:}}
function UC(){AEy=Ih(0,0);AEw=Ih(1,0);}
function FP(){R.call(this);this.cO=0;}
function ACd(a){var b=new FP();Km(b,a);return b;}
function Km(a,b){Bj(a);a.cO=b;}
function R6(a,b,c,d){var e,f,g,h;e=!d.cN()?c.g():d.q();if(b>=e){d.C(a.cO,0);return a.e.b(b,c,d);}f=e-b|0;if(f==2&&c.d(b)==13){g=b+1|0;if(c.d(g)==10){d.C(a.cO,0);return a.e.b(b,c,d);}}a:{if(f==1){h=c.d(b);if(h==10)break a;if(h==13)break a;if(h==133)break a;if((h|1)==8233)break a;}return (-1);}d.C(a.cO,0);return a.e.b(b,c,d);}
function SF(a,b){var c;c=!b.bD(a.cO)?0:1;b.C(a.cO,(-1));return c;}
function Jz(){B$.call(this);}
function ACG(){var a=new Jz();Xs(a);return a;}
function Xs(a){Fe(a);}
function UB(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function Yn(a,b,c){var d;a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}d=1;break a;}d=0;}return d;}
function Jy(){B$.call(this);}
function ABJ(){var a=new Jy();QI(a);return a;}
function QI(a){Fe(a);}
function R7(a,b){return b!=10?0:1;}
function SY(a,b,c){return b!=10?0:1;}
function LA(){CO.call(this);}
function M4(){K.call(this);}
function ABU(){var a=new M4();XE(a);return a;}
function XE(a){Q(a);}
function TC(a){var b;b=ADM(a);b.y=1;return b;}
function CV(){var a=this;C.call(a);a.r=null;a.cL=0;a.bF=0;a.ia=0;a.fJ=0;a.bC=0;a.i=0;a.gG=0;a.cG=null;a.b9=null;a.k=0;a.ds=0;a.dD=0;a.dr=0;a.hi=null;}
var AF1=null;var AF2=null;var AF3=0;function ACx(a,b){var c=new CV();WK(c,a,b);return c;}
function WK(a,b,c){L(a);a.bF=1;a.hi=b;if((c&16)>0)b=Zp(b);else if((c&128)>0)b=S_(b);a.r=$rt_createCharArray(b.g()+2|0);Gh(b.cn(),0,a.r,0,b.g());a.r.data[a.r.data.length-1|0]=0;a.r.data[a.r.data.length-2|0]=0;a.gG=a.r.data.length;a.cL=c;Cb(a);Cb(a);}
function ZS(a){return a.bC;}
function R9(a,b){if(b>0&&b<3)a.bF=b;if(b==1)Lg(a);}
function RE(a,b){a.cL=b;a.i=a.bC;a.b9=a.cG;a.k=a.dD+1|0;a.dr=a.dD;Cb(a);}
function TQ(a){return a.cG;}
function RP(a){return a.cG===null?0:1;}
function Ru(a){return a.b9===null?0:1;}
function Tk(a){Cb(a);return a.fJ;}
function SQ(a){var b;b=a.cG;Cb(a);return b;}
function P1(a){return a.i;}
function Vg(a){return a.fJ;}
function S_(b){return b;}
function Lg(a){a.i=a.bC;a.b9=a.cG;a.k=a.dr;a.dr=a.dD;Cb(a);}
function Cb(a){var b,c,d,e,f,g,h,$$je;a.fJ=a.bC;a.bC=a.i;a.cG=a.b9;a.dD=a.dr;a.dr=a.k;while(true){b=0;a.i=a.k>=a.r.data.length?0:DI(a);a.b9=null;if(a.bF==4){if(a.i!=92)return;a.i=a.k>=a.r.data.length?0:a.r.data[X(a)];switch(a.i){case 69:break;default:a.i=92;a.k=a.ds;return;}a.bF=a.ia;a.i=a.k>(a.r.data.length-2|0)?0:DI(a);}a:{if(a.i!=92){if(a.bF==1)switch(a.i){case 36:a.i=(-536870876);break a;case 40:if(a.r.data[a.k]!=63){a.i=(-2147483608);break a;}X(a);c=a.r.data[a.k];d=0;while(true){b:{if(d){d=0;switch(c){case 33:break;case 61:a.i
=(-134217688);X(a);break b;default:G(Ba(B(21),a.f(),a.k));}a.i=(-67108824);X(a);}else{switch(c){case 33:break;case 60:X(a);c=a.r.data[a.k];d=1;break b;case 61:a.i=(-536870872);X(a);break b;case 62:a.i=(-33554392);X(a);break b;default:a.i=MD(a);if(a.i<256){a.cL=a.i;a.i=a.i<<16;a.i=(-1073741784)|a.i;break b;}a.i=a.i&255;a.cL=a.i;a.i=a.i<<16;a.i=(-16777176)|a.i;break b;}a.i=(-268435416);X(a);}}if(!d)break;}break a;case 41:a.i=(-536870871);break a;case 42:case 43:case 63:e=a.k>=a.r.data.length?42:a.r.data[a.k];switch
(e){case 43:a.i=a.i|(-2147483648);X(a);break a;case 63:a.i=a.i|(-1073741824);X(a);break a;default:}a.i=a.i|(-536870912);break a;case 46:a.i=(-536870866);break a;case 91:a.i=(-536870821);a.d6(2);break a;case 93:if(a.bF!=2)break a;a.i=(-536870819);break a;case 94:a.i=(-536870818);break a;case 123:a.b9=Li(a,a.i);break a;case 124:a.i=(-536870788);break a;default:}else if(a.bF==2)switch(a.i){case 38:a.i=(-536870874);break a;case 45:a.i=(-536870867);break a;case 91:a.i=(-536870821);break a;case 93:a.i=(-536870819);break a;case 94:a.i
=(-536870818);break a;default:}}else{f=a.k>=(a.r.data.length-2|0)?(-1):DI(a);c:{a.i=f;switch(a.i){case -1:G(Ba(B(21),a.f(),a.k));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.i
=HO(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.bF!=1)break a;a.i=(-2147483648)|a.i;break a;case 65:a.i=(-2147483583);break a;case 66:a.i=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:G(Ba(B(21),a.f(),a.k));case 68:case 83:case 87:case 100:case 115:case 119:a.b9=F9(E5(a.r,
a.ds,1),0);a.i=0;break a;case 71:a.i=(-2147483577);break a;case 80:case 112:break c;case 81:a.ia=a.bF;a.bF=4;b=1;break a;case 90:a.i=(-2147483558);break a;case 97:a.i=7;break a;case 98:a.i=(-2147483550);break a;case 99:if(a.k>=(a.r.data.length-2|0))G(Ba(B(21),a.f(),a.k));a.i=a.r.data[X(a)]&31;break a;case 101:a.i=27;break a;case 102:a.i=12;break a;case 110:a.i=10;break a;case 114:a.i=13;break a;case 116:a.i=9;break a;case 117:a.i=Fl(a,4);break a;case 120:a.i=Fl(a,2);break a;case 122:a.i=(-2147483526);break a;default:}break a;}g
=Hk(a);h=0;if(a.i==80)h=1;try{a.b9=F9(g,h);}catch($$e){$$je=Bd($$e);if($$je instanceof Ez){G(Ba(B(21),a.f(),a.k));}else{throw $$e;}}a.i=0;}}if(b)continue;else break;}}
function Hk(a){var b,c,d;b=GL(10);if(a.k<(a.r.data.length-2|0)){if(a.r.data[a.k]!=123)return J().a(B(360)).a(E5(a.r,X(a),1)).f();X(a);c=0;a:{while(a.k<(a.r.data.length-2|0)){c=a.r.data[X(a)];if(c==125)break a;b.bx(c);}}if(c!=125)G(Ba(B(21),a.f(),a.k));}if(!b.g())G(Ba(B(21),a.f(),a.k));d=b.f();if(d.g()==1)return J().a(B(360)).a(d).f();b:{c:{if(d.g()>3){if(d.el(B(360)))break c;if(d.el(B(361)))break c;}break b;}d=d.fa(2);}return d;}
function Li(a,b){var c,d,e,f,$$je;c=GL(4);d=(-1);e=2147483647;a:{while(true){if(a.k>=a.r.data.length)break a;b=a.r.data[X(a)];if(b==125)break a;if(b==44&&d<0)try{d=CW(c.f(),10);c.jX(0,c.g());continue;}catch($$e){$$je=Bd($$e);if($$je instanceof C0){break;}else{throw $$e;}}c.bx(b&65535);}G(Ba(B(21),a.f(),a.k));}if(b!=125)G(Ba(B(21),a.f(),a.k));if(c.g()>0)b:{try{e=CW(c.f(),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=Bd($$e);if($$je instanceof C0){}else{throw $$e;}}G(Ba(B(21),a.f(),a.k));}else if(d<0)G(Ba(B(21),
a.f(),a.k));if((d|e|(e-d|0))<0)G(Ba(B(21),a.f(),a.k));f=a.k>=a.r.data.length?42:a.r.data[a.k];c:{switch(f){case 43:a.i=(-2147483525);X(a);break c;case 63:a.i=(-1073741701);X(a);break c;default:}a.i=(-536870789);}return ABG(d,e);}
function Wb(a){return a.hi;}
function XV(a){return !a.bC&&!a.i&&a.k==a.gG&&!a.dc()?1:0;}
function DV(b){return b<0?0:1;}
function YD(a){return !a.Q()&&!a.dc()&&DV(a.bC)?1:0;}
function Q_(a){return a.bC<=56319&&a.bC>=55296?1:0;}
function Tf(a){return a.bC<=57343&&a.bC>=56320?1:0;}
function Ei(b){return b<=56319&&b>=55296?1:0;}
function E8(b){return b<=57343&&b>=56320?1:0;}
function Fl(a,b){var c,d,e,f,$$je;c=GL(b);d=a.r.data.length-2|0;e=0;while(true){f=BV(e,b);if(f>=0)break;if(a.k>=d)break;c.bx(a.r.data[X(a)]);e=e+1|0;}if(!f)a:{try{f=CW(c.f(),16);}catch($$e){$$je=Bd($$e);if($$je instanceof C0){break a;}else{throw $$e;}}return f;}G(Ba(B(21),a.f(),a.k));}
function HO(a){var b,c,d,e,f;b=3;c=1;d=a.r.data.length-2|0;e=E3(a.r.data[a.k],8);switch(e){case -1:break;default:if(e>3)b=2;X(a);a:{while(true){if(c>=b)break a;if(a.k>=d)break a;f=E3(a.r.data[a.k],8);if(f<0)break;e=(e*8|0)+f|0;X(a);c=c+1|0;}}return e;}G(Ba(B(21),a.f(),a.k));}
function MD(a){var b,c,d;b=1;c=a.cL;a:while(true){if(a.k>=a.r.data.length)G(Ba(B(21),a.f(),a.k));b:{c:{d=a.r.data[a.k];switch(d){case 41:X(a);return c|256;case 45:if(!b)G(Ba(B(21),a.f(),a.k));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}X(a);}X(a);return c;}
function X(a){a.ds=a.k;if(a.cL&4)Hw(a);else a.k=a.k+1|0;return a.ds;}
function Hw(a){var b;b=a.r.data.length-2|0;a.k=a.k+1|0;a:while(true){if(a.k<b&&I2(a.r.data[a.k])){a.k=a.k+1|0;continue;}if(a.k>=b)break;if(a.r.data[a.k]!=35)break;a.k=a.k+1|0;while(true){if(a.k>=b)continue a;if(K2(a,a.r.data[a.k]))continue a;a.k=a.k+1|0;}}return a.k;}
function K2(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function KO(b){return AF1.oz(b);}
function TA(b){var c,d,e,f,g,h,i;c=b-44032|0;if(c>=0&&c<11172){d=4352+(c/588|0)|0;e=4449+((c%588|0)/28|0)|0;f=c%28|0;if(!f){g=$rt_createIntArray(2);h=g.data;h[0]=d;h[1]=e;}else{i=4519+f|0;g=$rt_createIntArray(3);h=g.data;h[0]=d;h[1]=e;h[2]=i;}return g;}return null;}
function Nc(b){var c;c=AF2.fE(b);return c==AF3?0:1;}
function Q3(b){return (b!=832?0:1)|(b!=833?0:1)|(b!=835?0:1)|(b!=836?0:1);}
function DI(a){var b,c,d;b=a.r.data[X(a)];if(Bh(b)){c=a.ds+1|0;if(c<a.r.data.length){d=a.r.data[c];if(Bq(d)){X(a);return BR(b,d);}}}return b;}
function Q8(a){return a.dD;}
function J_(){K.call(this);}
function ABo(){var a=new J_();YI(a);return a;}
function YI(a){Q(a);}
function XW(a){return Bw().I(65279,65279).I(65520,65533);}
function Jp(){var a=this;C.call(a);a.hk=null;a.iO=0;}
function AB6(a){var b=new Jp();TR(b,a);return b;}
function TR(a,b){L(a);a.hk=b;}
function Mr(){Dm.call(this);}
function AAB(){var a=new Mr();XD(a);return a;}
function XD(a){LZ(a);}
function QC(a){var b;b=LQ(a).b3(1);b.y=1;return b;}
function Me(){C.call(this);this.hU=0;}
function ADL(a){var b=new Me();Uo(b,a);return b;}
function Uo(a,b){L(a);a.hU=b;}
function Rx(a,b){var c,d;c=AAM();d=ADn(c);Jl(a,b,d);return c.j_(B(283));}
function Jl(a,b,c){Jf(a,b.kn(),c);GI(a,b.k4(),c);G8(a,b.hR(),c);L$(a,b.hR(),a.hU,c);Lr(a,b.jv(),c);}
function Jf(a,b,c){var d,e;a:{if(b!==null){d=b.Y();while(true){if(!d.Z())break a;e=d.V();c.o(J().a(B(362)).a(e).a(B(363)).f());}}}}
function GI(a,b,c){var d,e,f,g,h,i,j;c.o(B(364));c.o(B(365));d=0.0;e=0.0;f=0;while(f<5){g=b.data;h=9-f|0;if(!(g[f]<=0.0&&g[h]<=0.0)){c.o(B(366));i=J().a(B(367)).n(f).a(B(368)).a(Bm(g[f],5)).a(B(369)).n(h).a(B(368));j=g[h];i=i.a(Bm(j,5)).a(B(370)).f();c.o(i);c.o(B(371));}d=d+g[f];e=e+g[h];f=f+1|0;}c.o(B(372));i=J().a(B(373)).a(Bm(d,5)).a(B(374));i=i.a(Bm(e,5)).a(B(370)).f();c.o(i);c.o(B(371));c.o(B(375));}
function G8(a,b,c){var d,e,f,g,h,i,j;d=SH(b);c.o(B(376));c.o(B(365));e=0.0;f=0;while(f<5){g=d.data;h=9-f|0;if(!(g[f]<=0.0&&g[h]<=0.0)){c.o(B(366));i=J().a(B(367)).n(f).a(B(368)).a(Bm(g[f],5)).a(B(369)).n(h).a(B(368));j=g[h];i=i.a(Bm(j,5)).a(B(370)).f();c.o(i);c.o(B(371));j=e+g[f];e=j+g[h];}f=f+1|0;}c.o(B(372));i=J().a(B(377));i=i.a(Bm(e,5)).a(B(370)).f();c.o(i);c.o(B(371));c.o(B(375));}
function L$(a,b,c,d){var e,f,g,h;d.o(B(378));d.o(B(365));e=0;f=b.Y();a:{while(true){if(!f.Z())break a;g=f.V();d.o(B(366));h=J().a(B(367)).n(g.cW().bj()).a(B(368));h=h.a(g.du().dF()).a(B(368));h=h.a(Bm(g.du().bO(),6)).a(B(370)).f();d.o(h);d.o(B(371));e=e+1|0;if(e>=c)break;}}d.o(B(375));}
function Lr(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;c.o(B(379));c.o(B(365));c.o(B(366));c.o(B(380));c.o(B(371));d=$rt_createDoubleArray(3);e=0;while(e<10){f=b.data;g=f[0].data[e]+f[1].data[e]+f[2].data[e];if(f[0].data[e]>0.0){h=d.data;c.o(B(366));i=J().a(B(367)).n(e).a(B(368)).a(Bm(f[0].data[e],5)).a(B(368));j=f[1].data[e];k=i.a(Bm(j,5)).a(B(368));j=f[2].data[e];i=k.a(Bm(j,5)).a(B(368));i=i.a(Bm(g,5)).a(B(370)).f();c.o(i);c.o(B(371));h[0]=h[0]+f[0].data[e];h[1]=h[1]+f[1].data[e];h[2]=h[2]+f[2].data[e];}e=e+1|0;}l=
d.data;m=l[1]+l[2];n=l[0]+m;c.o(B(372));i=J().a(B(381)).a(Bm(l[0],5)).a(B(368));j=l[1];i=i.a(Bm(j,5)).a(B(368));j=l[2];i=i.a(Bm(j,5)).a(B(368));i=i.a(Bm(n,5)).a(B(370)).f();c.o(i);c.o(B(371));c.o(B(375));}
function Bm(b,c){return $rt_str(b.toFixed(c));}
function B1(){var a=this;Y.call(a);a.cg=null;a.jK=0;}
function V1(a){var b=new B1();RO(b,a);return b;}
function RO(a,b){BG(a);a.cg=b.c2();a.jK=b.G;}
function Ne(a,b,c){return !a.cg.j(c.d(b))?(-1):1;}
function QP(a,b){if(b instanceof B0)return DS(a.cg,b.b_());if(b instanceof B1)return CU(a.cg,b.cg);if(b instanceof BH)return CU(a.cg,b.fe());if(!(b instanceof BZ))return 1;return 0;}
function Qs(a){return a.cg;}
function D5(){I.call(this);this.eX=0;}
function ADq(a){var b=new D5();HP(b,a);return b;}
function HP(a,b){O(a);a.eX=b;}
function Qy(a,b){return a.G^(a.eX!=C_(b&65535)?0:1);}
function My(){D5.call(this);}
function ABf(a){var b=new My();O3(b,a);return b;}
function O3(a,b){HP(a,b);}
function U7(a,b){return a.G^(!(a.eX>>C_(b&65535)&1)?0:1);}
function Kh(){Cn.call(this);this.il=0;}
function ACB(a){var b=new Kh();Yh(b,a);return b;}
function Yh(a,b){Fj(a);a.il=b;}
function TV(a){return J().a(B(382)).n(a.il).f();}
function I6(){var a=this;I.call(a);a.eP=0;a.gR=0;a.dX=0;a.f7=0;a.bI=0;a.co=0;a.v=null;a.F=null;}
function Bw(){var a=new I6();Z2(a);return a;}
function AC0(a,b){var c=new I6();Jc(c,a,b);return c;}
function ACC(a,b,c){var d=new I6();Oy(d,a,b,c);return d;}
function Z2(a){O(a);a.v=AAs();}
function Jc(a,b,c){O(a);a.v=AAs();a.eP=b;a.gR=c;}
function Oy(a,b,c,d){Jc(a,c,d);a.b3(b);}
function M_(a,b){a:{if(a.eP){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.bI){a.v.eV(C5(b&65535));break a;}a.v.gd(C5(b&65535));break a;}if(a.gR&&b>128){a.dX=1;b=Cp(Co(b));}}}if(!(!Ei(b)&&!E8(b))){if(a.f7)a.J.eV(b-55296|0);else a.J.gd(b-55296|0);}if(a.bI)a.v.eV(b);else a.v.gd(b);if(!a.y&&DX(b))a.y=1;return a;}
function AAi(a,b){var c,d;if(!a.y&&b.y)a.y=1;if(a.f7){if(!b.T)a.J.cQ(b.bb());else a.J.bu(b.bb());}else if(!b.T)a.J.cw(b.bb());else{a.J.cJ(b.bb());a.J.bu(b.bb());a.T=a.T?0:1;a.f7=1;}if(!a.co&&b.L()!==null){if(a.bI){if(!b.cY())a.v.cQ(b.L());else a.v.bu(b.L());}else if(!b.cY())a.v.cw(b.L());else{a.v.cJ(b.L());a.v.bu(b.L());a.G=a.G?0:1;a.bI=1;}}else{c=a.G;if(a.F!==null){d=a.F;if(!c)a.F=ACV(a,c,d,b);else a.F=ADQ(a,c,d,b);}else{if(c&&!a.bI&&a.v.Q())a.F=ACv(a,b);else if(!c)a.F=AAE(a,c,b);else a.F=AB8(a,c,b);a.co=1;}}return a;}
function WD(a,b,c){if(b>c)G(Cx());a:{if(!a.eP&&!(c>=55296&&b<=57343)){if(a.bI)a.v.jB(b,c+1|0);else a.v.d7(b,c+1|0);}else while(true){if(b>=(c+1|0))break a;a.be(b);b=b+1|0;}}return a;}
function NK(a,b){var c,d;if(!a.y&&b.y)a.y=1;if(b.cf())a.dX=1;if(!(a.T^b.T)){if(!a.T)a.J.cw(b.bb());else a.J.bu(b.bb());}else if(a.T)a.J.cQ(b.bb());else{a.J.cJ(b.bb());a.J.bu(b.bb());a.T=1;}if(!a.co&&b.L()!==null){if(!(a.G^b.cY())){if(!a.G)a.v.cw(b.L());else a.v.bu(b.L());}else if(a.G)a.v.cQ(b.L());else{a.v.cJ(b.L());a.v.bu(b.L());a.G=1;}}else{c=a.G;if(a.F!==null){d=a.F;if(!c)a.F=ACl(a,c,d,b);else a.F=ADP(a,c,d,b);}else{if(!a.bI&&a.v.Q()){if(!c)a.F=ACr(a,b);else a.F=AC6(a,b);}else if(!c)a.F=ABy(a,b,c);else a.F
=AA0(a,b,c);a.co=1;}}}
function W5(a,b){var c,d;if(!a.y&&b.y)a.y=1;if(b.cf())a.dX=1;if(!(a.T^b.T)){if(!a.T)a.J.bu(b.bb());else a.J.cw(b.bb());}else if(!a.T)a.J.cQ(b.bb());else{a.J.cJ(b.bb());a.J.bu(b.bb());a.T=0;}if(!a.co&&b.L()!==null){if(!(a.G^b.cY())){if(!a.G)a.v.bu(b.L());else a.v.cw(b.L());}else if(!a.G)a.v.cQ(b.L());else{a.v.cJ(b.L());a.v.bu(b.L());a.G=0;}}else{c=a.G;if(a.F!==null){d=a.F;if(!c)a.F=ADI(a,c,d,b);else a.F=ACb(a,c,d,b);}else{if(!a.bI&&a.v.Q()){if(!c)a.F=AA_(a,b);else a.F=ABD(a,b);}else if(!c)a.F=ABu(a,b,c);else a.F
=ADG(a,b,c);a.co=1;}}}
function Sy(a,b){if(a.F!==null)return a.G^a.F.j(b);return a.G^a.v.bJ(b);}
function AAk(a){if(!a.co)return a.v;return null;}
function UY(a){return a.J;}
function Wf(a){var b,c;if(a.F!==null)return a;b=a.L();c=ACu(a,b);return c.b3(a.cY());}
function Ph(a){var b,c;b=J();c=a.v.di(0);while(c>=0){b.d_(CJ(c));b.bx(124);c=a.v.di(c+1|0);}if(b.g()>0)b.iv(b.g()-1|0);return b.f();}
function Vy(a){return a.dX;}
function KH(){T.call(this);}
function X8(){var a=new KH();XL(a);return a;}
function XL(a){BA(a);}
function Jv(){BT.call(this);}
function ACJ(){var a=new Jv();Yu(a);return a;}
function Yu(a){CR(a);}
function Xa(a,b){WL(b);}
function WL(b){$rt_putStderr(b);}
function JS(){var a=this;C.call(a);a.fQ=0;a.fs=0;a.g9=0;}
function ACR(){var a=new JS();No(a);return a;}
function No(a){L(a);}
function L9(){Ci.call(this);}
function AC4(a,b){var c=new L9();XU(c,a,b);return c;}
function XU(a,b,c){EP(a,b,c);}
$rt_packages([-1,"java",0,"util",1,"regex",0,"nio",3,"charset",0,"io",0,"lang",-1,"io",7,"github",8,"colemakmods",9,"keyboard"]);
$rt_metadata([C,"Object",6,0,[],0,3,0,["nL",function(){return Ce(this);},"hL",function(){return Tn(this);},"ca",function(b){return NX(this,b);},"f",function(){return RR(this);},"lW",function(){return Eo(this);},"dC",function(){return Z4(this);}],K,0,C,[],1,0,0,["kP",function(b){return Ti(this,b);}],MY,0,K,[],0,0,0,["u",function(){return Tq(this);}],JQ,0,K,[],0,0,0,["u",function(){return Oa(this);}],CL,0,C,[],0,3,0,["ee",function(){return Vr(this);},"dN",function(){return TL(this);},"jZ",function(){return Wu(this);
},"ew",function(){Xz(this);},"hp",function(b){Zx(this,b);}],Bo,0,CL,[],0,3,0,0,T,0,Bo,[],0,3,0,0,C4,"IndexOutOfBoundsException",6,T,[],0,3,0,0,Cv,0,C,[],1,0,0,0,I,0,Cv,[],1,0,EZ,["L",function(){return Q9(this);},"bb",function(){return PE(this);},"ju",function(){return N2(this);},"gw",function(){return Xi(this);},"c2",function(){return Vf(this);},"jg",function(){return P7(this);},"dM",function(){return Ri(this);},"cf",function(){return Yt(this);},"b3",function(b){return Wz(this,b);},"cY",function(){return Vw(this);
}],MH,"AbstractCharClass$LazyJavaWhitespace$1",2,I,[],0,0,0,["j",function(b){return PI(this,b);}],BX,"IOException",5,Bo,[],0,3,0,0,Cn,0,BX,[],0,3,0,0,Js,"MalformedInputException",4,Cn,[],0,3,0,["dN",function(){return U3(this);}],Kk,0,K,[],0,0,0,["u",function(){return Up(this);}],HQ,0,C,[],0,3,0,["dh",function(){return UA(this);},"dy",function(b){return UI(this,b);},"f9",function(b){VZ(this,b);},"eM",function(b){AAv(this,b);}],BO,0,C,[],3,3,0,0,BM,0,C,[BO],1,3,0,0,BD,0,C,[],3,3,0,0,C$,0,BM,[BD],0,3,B5,["f",function()
{return XP(this);}],J6,"CloneNotSupportedException",6,Bo,[],0,3,0,0,Cf,0,C,[],0,0,AB1,0,R,0,C,[],1,0,Ja,["bg",function(b,c,d){return C6(this,b,c,d);},"bd",function(b,c,d,e){return Db(this,b,c,d,e);},"gz",function(b){SS(this,b);},"cI",function(){return RB(this);},"ka",function(){return UH(this);},"s",function(b){FD(this,b);},"X",function(b){return WF(this,b);},"cd",function(){return Yz(this);},"bB",function(){Gz(this);}],V,0,R,[],0,0,0,["b",function(b,c,d){return WM(this,b,c,d);},"s",function(b){QN(this,b);},
"X",function(b){return AAt(this,b);},"x",function(b){return Sg(this,b);},"bB",function(){Sm(this);}],CK,0,V,[],0,0,0,["b",function(b,c,d){return Ot(this,b,c,d);},"bg",function(b,c,d){return Nx(this,b,c,d);},"bd",function(b,c,d,e){return T2(this,b,c,d,e);},"X",function(b){return AAg(this,b);},"cd",function(){return QS(this);},"bB",function(){YH(this);}],BE,0,C,[],3,3,0,0,Dk,0,C,[BE],3,3,0,0,Ej,0,C,[Dk],3,3,0,0,BI,0,C,[BE],3,3,0,0,Kw,0,C,[Ej,BI],3,3,0,0,F$,0,BM,[BD],0,3,UZ,0,F5,0,C,[BE],3,3,0,0,Ew,0,C,[],3,3,
0,0,I4,0,C,[],0,0,0,["iX",function(b,c){XY(this,b,c);},"fE",function(b){return NL(this,b);}],Ec,0,K,[],0,0,0,["u",function(){return I$(this);}],DK,0,K,[],0,0,0,["u",function(){return Go(this);}],Kb,0,DK,[],0,0,0,["u",function(){return W6(this);}],G_,0,CK,[],0,0,0,["bg",function(b,c,d){return VH(this,b,c,d);},"bd",function(b,c,d,e){return AAc(this,b,c,d,e);},"cd",function(){return SC(this);}],L0,"BufferOverflowException",4,T,[],0,3,0,0,CE,0,V,[],0,0,0,["b",function(b,c,d){return Pz(this,b,c,d);},"s",function(b)
{Sl(this,b);},"c0",function(b){return S5(this,b);},"x",function(b){return S7(this,b);}],Dt,0,K,[],0,0,0,["u",function(){return M1(this);}],Kt,0,Dt,[],0,0,0,["u",function(){return OX(this);}],KN,"AbstractCharClass$1",2,I,[],0,0,0,["j",function(b){return UX(this,b);}],KK,"AbstractCharClass$2",2,I,[],0,0,0,["j",function(b){return On(this,b);}],J7,0,K,[],0,0,0,["u",function(){return PF(this);}],Y,0,R,[],1,0,0,["b",function(b,c,d){return ZH(this,b,c,d);},"ba",function(){return Vv(this);},"x",function(b){return YM(this,
b);}],Hm,0,Y,[],0,0,0,["H",function(b,c){return T9(this,b,c);}],BL,0,R,[],1,0,0,["eh",function(){return ZZ(this);},"X",function(b){return T3(this,b);},"x",function(b){return W$(this,b);},"bB",function(){Oe(this);}],Bv,0,BL,[],0,0,0,["b",function(b,c,d){return NZ(this,b,c,d);}],Cc,0,Bv,[],0,0,0,["b",function(b,c,d){return Qh(this,b,c,d);}]]);
$rt_metadata([I_,0,Cc,[],0,0,0,["b",function(b,c,d){return T5(this,b,c,d);}],Dg,0,C,[],3,3,0,0,B8,0,CL,[],0,3,0,0,CO,0,B8,[],0,3,0,0,Dv,0,C,[BI],3,3,0,0,Mg,"StringIndexOutOfBoundsException",6,C4,[],0,3,0,0,Ez,"MissingResourceException",1,T,[],0,3,0,0,JA,"AbstractCharClass$LazyJavaLetterOrDigit$1",2,I,[],0,0,0,["j",function(b){return N5(this,b);}],Iu,"CharClass$18",2,I,[],0,0,0,["j",function(b){return AAe(this,b);},"f",function(){return WA(this);}],DW,0,C,[],1,3,0,["mc",function(b){return K5(this,b);},"fT",function(b)
{WY(this,b);},"mV",function(b){return HG(this,b);},"fv",function(b){Xq(this,b);},"m1",function(b,c,d){return Fs(this,b,c,d);},"oI",function(b){return Mt(this,b);},"ow",function(){return Ly(this);},"ls",function(b){return IZ(this,b);},"ml",function(b){return El(this,b);},"kE",function(b){return OY(this,b);},"ky",function(){Uy(this);}],Bs,0,BL,[],0,0,0,["b",function(b,c,d){return Oq(this,b,c,d);}],M7,0,Bs,[],0,0,0,["b",function(b,c,d){return SX(this,b,c,d);}],LC,0,CE,[],0,0,0,["b",function(b,c,d){return Nu(this,
b,c,d);}],Ir,0,I,[],0,0,0,["j",function(b){return S0(this,b);}],DY,0,C,[],4,3,YJ,0,Is,0,I,[],0,0,0,["j",function(b){return V3(this,b);}],It,0,I,[],0,0,0,["j",function(b){return AAz(this,b);}],Lp,0,C,[],4,3,0,0,L3,0,K,[],0,0,0,["u",function(){return VF(this);}],Jb,0,I,[],0,0,0,["j",function(b){return W1(this,b);}],Iv,0,I,[],0,0,0,["j",function(b){return Re(this,b);}],Gs,0,Y,[],0,0,0,["H",function(b,c){return Nz(this,b,c);}],Iw,0,I,[],0,0,0,["j",function(b){return RH(this,b);}],Mj,0,BL,[],0,0,0,["b",function(b,
c,d){return ZU(this,b,c,d);},"bg",function(b,c,d){return Vl(this,b,c,d);}],Ix,0,I,[],0,0,0,["j",function(b){return YU(this,b);}],Lj,"AbstractCharClass$LazyJavaDefined$1",2,I,[],0,0,0,["j",function(b){return Yy(this,b);}],Iq,0,I,[],0,0,0,["j",function(b){return V2(this,b);}],Bp,0,R,[],0,0,D$,["b",function(b,c,d){return Qe(this,b,c,d);},"c5",function(){return N4(this);},"x",function(b){return Rd(this,b);}],Fm,0,Bp,[],0,0,0,["b",function(b,c,d){return Rs(this,b,c,d);}],CG,0,C,[BO,Dg],0,0,0,["oW",function(b){return H6(this,
b);},"fC",function(b,c){return JX(this,b,c);},"ox",function(b){return If(this,b);},"gW",function(b,c){return PA(this,b,c);},"jy",function(b,c,d){return Ya(this,b,c,d);},"nG",function(b){return Ka(this,b);},"iV",function(b,c){return Hr(this,b,c);},"l_",function(b){return F0(this,b);},"fN",function(b,c){return FW(this,b,c);},"or",function(b){return L1(this,b);},"hO",function(b,c){return Kf(this,b,c);},"bX",function(b){EO(this,b);},"f",function(){return EA(this);},"g",function(){return FJ(this);},"d",function(b)
{return G5(this,b);},"fW",function(b,c,d){return FR(this,b,c,d);},"e_",function(b,c,d,e){return EB(this,b,c,d,e);},"oR",function(b){return EQ(this,b);},"g2",function(b,c,d,e){KY(this,b,c,d,e);},"dQ",function(b){Fw(this,b);},"nj",function(b){return K$(this,b);},"nn",function(b,c){return LB(this,b,c);},"nE",function(b,c){BB(this,b,c);}],Dd,0,C,[],3,3,0,0,GK,0,CG,[Dd],0,3,0,["a",function(b){return Oj(this,b);},"n",function(b){return O9(this,b);},"ij",function(b){return W_(this,b);},"bx",function(b){return N7(this,
b);},"jJ",function(b,c,d){return Td(this,b,c,d);},"d_",function(b){return US(this,b);},"ib",function(b){return Or(this,b);},"k6",function(b,c){return Vj(this,b,c);},"lQ",function(b,c,d,e){return ST(this,b,c,d,e);},"j2",function(b,c){return Zk(this,b,c);},"lf",function(b,c){return PX(this,b,c);},"jX",function(b,c){return XG(this,b,c);},"iv",function(b){return VC(this,b);},"jY",function(b,c){return ZD(this,b,c);},"dQ",function(b){ZQ(this,b);},"g2",function(b,c,d,e){UJ(this,b,c,d,e);},"e_",function(b,c,d,e){return Zv(this,
b,c,d,e);},"fW",function(b,c,d){return T7(this,b,c,d);},"g",function(){return QW(this);},"f",function(){return Rw(this);},"bX",function(b){ZV(this,b);},"hO",function(b,c){return Oo(this,b,c);},"fN",function(b,c){return Nv(this,b,c);},"iV",function(b,c){return Xc(this,b,c);},"fC",function(b,c){return AAh(this,b,c);}],DE,0,Ec,[],0,0,0,["u",function(){return KE(this);}],KS,"ConcurrentModificationException",1,T,[],0,3,0,0,KF,0,V,[],0,0,0,["b",function(b,c,d){return P9(this,b,c,d);},"s",function(b){Qn(this,b);},
"x",function(b){return RM(this,b);},"X",function(b){return Q7(this,b);}],F4,0,C,[],3,3,0,0,Ds,0,C,[F4],3,3,0,0,E1,0,C,[],3,3,0,0,BT,0,C,[Ds,E1],1,3,0,["db",function(b,c,d){OH(this,b,c,d);}],Mu,0,BT,[],0,3,0,["e2",function(b){OG(this,b);},"db",function(b,c,d){P5(this,b,c,d);},"bX",function(b){EM(this,b);},"j_",function(b){return WZ(this,b);}],GO,0,V,[],0,0,0,["s",function(b){Vo(this,b);},"b",function(b,c,d){return XQ(this,b,c,d);}],Mi,0,Bs,[],0,0,0,["b",function(b,c,d){return Y2(this,b,c,d);}],Cr,0,Bp,[],0,0,
0,["b",function(b,c,d){return Xm(this,b,c,d);}],H8,0,B8,[],0,3,0,0,J0,0,Bs,[],0,0,0,["b",function(b,c,d){return OF(this,b,c,d);}],Kl,0,Y,[],0,0,0,["H",function(b,c){return Ut(this,b,c);},"bg",function(b,c,d){return Vm(this,b,c,d);},"bd",function(b,c,d,e){return Sv(this,b,c,d,e);},"x",function(b){return O5(this,b);}],Ig,0,CG,[Dd],0,3,0,["g1",function(b){return Vp(this,b);},"lR",function(b,c,d){return Y1(this,b,c,d);},"ku",function(b){return Ux(this,b);},"jC",function(b,c,d,e){return Oc(this,b,c,d,e);},"lG",function(b,
c){return XF(this,b,c);},"dQ",function(b){OL(this,b);},"e_",function(b,c,d,e){return VB(this,b,c,d,e);},"fW",function(b,c,d){return Ra(this,b,c,d);},"d",function(b){return NO(this,b);},"g",function(){return ZK(this);},"f",function(){return Rq(this);},"bX",function(b){RV(this,b);},"fN",function(b,c){return Vs(this,b,c);}],CD,0,C,[],1,3,0,["l3",function(){return J8(this);},"oJ",function(){return BF(this);},"l7",function(b){return Fx(this,b);},"mk",function(){return Kx(this);},"m5",function(){return IN(this);},
"oE",function(){return Mz(this);},"ny",function(){return W(this);},"m2",function(){return BQ(this);}],Gk,"AbstractCharClass$LazyJavaUnicodeIdentifierPart$1",2,I,[],0,0,0,["j",function(b){return YK(this,b);}],Da,0,C,[],4,0,AB2,["oT",function(b){return Lx(this,b);}]]);
$rt_metadata([CN,0,C,[BD,BO],1,3,0,["l4",function(){return MF(this);}],B3,"FingerConfig$Section",10,CN,[],12,3,Fo,0,Gd,0,K,[],0,0,0,["u",function(){return Wl(this);}],Ci,0,V,[],0,0,0,["s",function(b){YC(this,b);},"b",function(b,c,d){return Qo(this,b,c,d);},"jc",function(){return FF(this);},"f$",function(b,c,d){return Yq(this,b,c,d);},"X",function(b){return Zu(this,b);},"x",function(b){return Su(this,b);}],H2,0,Ci,[],0,0,0,0,B9,"KeyboardLayout$KeyboardType",10,CN,[],12,3,DR,0,CC,0,CO,[],0,3,0,0,K0,0,CC,[],0,
3,0,0,Ms,0,Bp,[],0,0,0,["b",function(b,c,d){return SM(this,b,c,d);}],J1,0,K,[],0,0,0,["u",function(){return UQ(this);}],D8,0,V,[],0,0,0,["b",function(b,c,d){return Qp(this,b,c,d);},"x",function(b){return S6(this,b);}],BS,0,D8,[],0,0,0,["b",function(b,c,d){return TO(this,b,c,d);},"s",function(b){Sr(this,b);}],GB,0,BS,[],0,0,0,["b",function(b,c,d){return QA(this,b,c,d);},"x",function(b){return WR(this,b);}],CA,0,C,[Ds],1,3,0,0,MX,0,CA,[],0,3,0,["kh",function(b,c,d){return Tr(this,b,c,d);},"bG",function(){Ni(this);
},"nN",function(){MK(this);}],Kp,0,BS,[],0,0,0,["b",function(b,c,d){return Q2(this,b,c,d);},"x",function(b){return VI(this,b);}],Fh,0,C,[],3,3,0,0,HJ,0,C,[Fh],0,0,0,["Z",function(){return O1(this);},"V",function(){return Wn(this);},"mL",function(){Je(this);}],Fd,0,C,[Dk],3,3,0,0,DH,0,C,[BI],3,3,0,0,D3,0,C,[BI],3,3,0,0,Fp,0,C,[BI],3,3,0,0,DZ,0,C,[BI],3,3,0,0,JB,0,C,[Fd,F5,BI,DH,D3,Fp,DZ,Dv],3,3,0,0,IR,0,C,[],0,3,0,["dF",function(){return TM(this);},"dk",function(){return Z7(this);},"bO",function(){return X1(this);
}],B4,0,C,[],3,3,0,0,G3,"Quantifier",2,Cv,[B4],0,0,0,["cU",function(){return Wy(this);},"cX",function(){return WS(this);},"f",function(){return Pv(this);}],DT,"UnsupportedOperationException",6,T,[],0,3,0,0,ME,"ReadOnlyBufferException",3,DT,[],0,3,0,0,GG,"AbstractCharClass$LazyJavaUpperCase$1",2,I,[],0,0,0,["j",function(b){return Qv(this,b);}],Hl,0,C,[],4,3,0,0,Id,0,C,[],0,3,0,0,JI,0,C,[],4,0,0,0,D0,0,DW,[],1,3,0,["js",function(b,c){return WC(this,b,c);}],HD,0,D0,[],0,3,0,["km",function(b,c,d,e,f,g,h){return X7(this,
b,c,d,e,f,g,h);},"mf",function(b){return Ck(this,b);}],HX,0,CC,[],0,3,0,0,HW,0,K,[],0,0,0,["u",function(){return T_(this);}],Ft,0,C,[],3,3,0,0,Dz,0,C,[Ft],3,3,0,0,Dl,0,C,[Dz],1,3,0,["ji",function(b){return UR(this,b);}],M9,0,Bv,[],0,0,0,["b",function(b,c,d){return Pt(this,b,c,d);}],Jh,0,C,[],0,3,0,["dh",function(){return Pa(this);},"dy",function(b){return Rb(this,b);},"f9",function(b){WQ(this,b);},"eM",function(b){SW(this,b);}],JL,0,C,[],4,3,0,0,Ca,0,Bv,[],0,0,0,["b",function(b,c,d){return NE(this,b,c,d);},
"s",function(b){AAu(this,b);}],KG,0,Ca,[],0,0,0,["b",function(b,c,d){return OE(this,b,c,d);}],Ie,"AbstractCharClass$LazyJavaIdentifierIgnorable$1",2,I,[],0,0,0,["j",function(b){return Qt(this,b);}],Gb,0,C,[],3,3,0,0,HY,"AbstractCharClass$LazyJavaLetter$1",2,I,[],0,0,0,["j",function(b){return XO(this,b);}],KW,0,Bv,[],0,0,0,["b",function(b,c,d){return QE(this,b,c,d);}],Ji,0,C,[],4,0,0,0]);
$rt_metadata([GX,"AbstractCharClass$LazyJavaUnicodeIdentifierStart$1",2,I,[],0,0,0,["j",function(b){return To(this,b);}],IL,0,C,[],4,3,0,0,GR,0,C,[],0,3,0,["lw",function(b,c){return TH(this,b,c);},"on",function(b){HT(this,b);},"n2",function(){return MM(this);},"b8",function(b){return Pb(this,b);},"dI",function(b,c){return AAA(this,b,c);},"d9",function(){return Zh(this);},"ej",function(){return QB(this);},"d5",function(){return Wd(this);},"k0",function(b){return OJ(this,b);},"jF",function(b,c){Za(this,b,c);},
"lS",function(b,c){return YB(this,b,c);},"ly",function(b,c,d){Uh(this,b,c,d);},"kZ",function(b){return RJ(this,b);},"kq",function(){return Xd(this);},"kj",function(b){TF(this,b);}],Ed,0,DE,[],0,0,0,["u",function(){return Gj(this);}],Ml,0,Ed,[],0,0,0,["u",function(){return Og(this);}],Jx,0,K,[],0,0,0,["u",function(){return Wx(this);}],Eg,0,C,[],3,3,0,0,D6,0,C,[Eg,B4],0,0,0,0,Ey,0,D6,[],0,0,0,0,LM,0,BS,[],0,0,0,["b",function(b,c,d){return Sf(this,b,c,d);},"x",function(b){return AAm(this,b);}],Dj,0,C,[],1,3,0,
["mU",function(b){LJ(this,b);},"mt",function(b){return Gc(this,b);},"fT",function(b){YZ(this,b);},"oL",function(b){return LP(this,b);},"fv",function(b){X9(this,b);},"og",function(b,c,d){return H5(this,b,c,d);},"mn",function(b){return GS(this,b);},"jq",function(b){return NU(this,b);}],Mn,0,Y,[],0,0,0,["H",function(b,c){return TE(this,b,c);},"bg",function(b,c,d){return QO(this,b,c,d);},"bd",function(b,c,d,e){return Wg(this,b,c,d,e);},"X",function(b){return Xy(this,b);},"jl",function(b,c,d){return W0(this,b,c,
d);},"jw",function(b,c,d){return Vt(this,b,c,d);},"fP",function(b,c){return XR(this,b,c);}],Lc,0,R,[],0,0,0,["b",function(b,c,d){return Qf(this,b,c,d);},"x",function(b){return Nj(this,b);}],Le,"ArrayStoreException",6,T,[],0,3,0,0,CM,0,Bs,[],0,0,0,["b",function(b,c,d){return UU(this,b,c,d);},"s",function(b){XB(this,b);}],JU,0,K,[],0,0,0,["u",function(){return VP(this);}],DG,0,CD,[BD],1,3,0,["lj",function(b,c,d){return Tc(this,b,c,d);},"hV",function(b,c,d){return Xu(this,b,c,d);},"mN",function(b){return KM(this,
b);},"nz",function(){return ES(this);},"es",function(b){return Vu(this,b);}],Ls,0,DG,[],0,0,0,["dJ",function(){return W3(this);}],DU,0,C,[],3,3,0,0,Ff,0,C,[DU],0,0,0,["C",function(b,c){Xf(this,b,c);},"bD",function(b){return AAy(this,b);},"ec",function(){return NI(this);},"f8",function(b){return ZM(this,b);},"bK",function(b,c){S4(this,b,c);},"fA",function(b,c){QQ(this,b,c);},"cx",function(b){return R8(this,b);},"eC",function(b){return Sp(this,b);},"jT",function(b){return Zm(this,b);},"hC",function(){return Sa(this);
},"e1",function(b){return Sw(this,b);},"kD",function(){NH(this);},"hP",function(b){return Oi(this,b);},"b0",function(b,c){Si(this,b,c);},"nP",function(b){F2(this,b);},"jH",function(){XI(this);},"jr",function(){return XK(this);},"h8",function(b,c,d){Y4(this,b,c,d);},"kk",function(){Tp(this);},"oS",function(b,c){Ln(this,b,c);},"kw",function(b){TK(this,b);},"bv",function(){return RA(this);},"q",function(){return NF(this);},"d6",function(b){Ug(this,b);},"ig",function(){return V8(this);},"cN",function(){return Xv(this);
},"c$",function(){return Oh(this);},"lt",function(){return PQ(this);}],IP,0,Y,[],0,0,0,["H",function(b,c){return Zs(this,b,c);}],Gv,0,C,[],0,3,0,["b_",function(){return OU(this);},"dk",function(){return OC(this);},"bO",function(){return OD(this);}],Gx,"AbstractCharClass$LazyJavaJavaIdentifierPart$1",2,I,[],0,0,0,["j",function(b){return Zw(this,b);}],H4,0,C,[],0,3,0,["fn",function(){WV(this);},"md",function(b){J$(this,b);}],IM,0,C,[],4,3,0,0,Dr,0,C,[BD],1,3,0,["ls",function(b){return GQ(this,b);}],C8,0,C,[],
0,3,B6,0,Kr,"BufferUnderflowException",4,T,[],0,3,0,0,BN,"IllegalArgumentException",6,T,[],0,3,0,0,JJ,"IllegalCharsetNameException",4,BN,[],0,3,0,0,Hq,0,R,[],0,0,0,["b",function(b,c,d){return Sj(this,b,c,d);},"x",function(b){return Wi(this,b);}],F6,0,C,[BE],3,3,0,0,Kg,0,C,[BE],1,3,0,0,Du,0,BT,[],0,3,0,0,KV,0,Du,[],0,3,0,["db",function(b,c,d){PD(this,b,c,d);},"mO",function(){return J5(this);},"mI",function(b,c,d){ET(this,b,c,d);},"kb",function(b){Ub(this,b);},"dP",function(b){Yw(this,b);},"o",function(b){Sh(this,
b);},"ln",function(b){Zg(this,b);},"lu",function(){SP(this);},"lX",function(){Dw(this);}],Fz,0,C,[],3,3,0,0,HF,0,BS,[],0,0,0,["b",function(b,c,d){return NW(this,b,c,d);},"x",function(b){return Tu(this,b);}],KU,0,CE,[],0,0,0,["b",function(b,c,d){return SV(this,b,c,d);},"bg",function(b,c,d){return WJ(this,b,c,d);},"bd",function(b,c,d,e){return O0(this,b,c,d,e);},"X",function(b){return Om(this,b);}],IV,0,K,[],0,0,0,["u",function(){return TT(this);}],Ip,0,BL,[],0,0,0,["b",function(b,c,d){return QT(this,b,c,d);},
"bg",function(b,c,d){return NM(this,b,c,d);},"nt",function(b,c,d){return Fa(this,b,c,d);},"oG",function(b,c,d){return K3(this,b,c,d);}],JE,0,K,[],0,0,0,["u",function(){return ZN(this);}],Ku,0,C,[BE],1,3,0,0,DO,0,C,[],4,3,Mv,0,Lv,0,K,[],0,0,0,["u",function(){return RX(this);}],DF,0,C,[Ew],1,3,0,0,Il,0,R,[],0,0,0,["b",function(b,c,d){return YR(this,b,c,d);},"x",function(b){return Z$(this,b);}],KP,0,Bv,[],0,0,0,["b",function(b,c,d){return Zt(this,b,c,d);},"bg",function(b,c,d){return O$(this,b,c,d);}],EC,0,C,[],
3,3,0,0,KQ,0,C,[EC],0,3,0,["lr",function(){return QH(this);},"jL",function(b){return Ua(this,b);},"bT",function(){return ZG(this);},"er",function(){return WO(this);},"kF",function(){return Q5(this);},"eD",function(){return NR(this);},"j4",function(){return Sn(this);}],Lw,0,C,[B4,BO],0,3,0,["gd",function(b){Se(this,b);},"d7",function(b,c){XA(this,b,c);},"m7",function(b){return C9(this,b);},"l2",function(b){return CT(this,b);},"eV",function(b){AAq(this,b);},"jB",function(b,c){OT(this,b,c);},"bJ",function(b){return O2(this,
b);},"di",function(b){return Zo(this,b);},"k8",function(b){return RC(this,b);},"bX",function(b){C1(this,b);},"ni",function(){CH(this);},"j6",function(b){return QG(this,b);},"bu",function(b){XX(this,b);},"cQ",function(b){ZI(this,b);},"cw",function(b){XJ(this,b);},"cJ",function(b){ZT(this,b);},"Q",function(){return X3(this);}]]);
$rt_metadata([FX,0,C,[],3,3,0,0,GE,"AbstractCharClass$LazyJavaJavaIdentifierStart$1",2,I,[],0,0,0,["j",function(b){return TS(this,b);}],F3,0,Bp,[],0,0,0,["b",function(b,c,d){return OW(this,b,c,d);},"x",function(b){return TW(this,b);}],Bg,0,C,[],0,3,Bz,0,D2,0,BM,[BD],0,3,AFw,0,HZ,0,C,[],0,3,0,0,B0,0,Y,[],0,0,0,["ba",function(){return Y3(this);},"H",function(b,c){return Xe(this,b,c);},"bg",function(b,c,d){return UF(this,b,c,d);},"bd",function(b,c,d,e){return Ze(this,b,c,d,e);},"b_",function(){return Q4(this);
},"X",function(b){return V9(this,b);}],Gr,0,Y,[],0,0,0,["H",function(b,c){return Ud(this,b,c);}],Mc,0,BT,[],0,0,0,["e2",function(b){N0(this,b);}],DC,0,C,[],4,3,0,0,Iz,0,I,[],0,0,0,["j",function(b){return Uc(this,b);}],IG,0,I,[],0,0,0,["j",function(b){return Na(this,b);}],IB,0,I,[],0,0,0,["j",function(b){return Te(this,b);}],IA,0,I,[],0,0,0,["j",function(b){return Ny(this,b);}],Ju,0,K,[],0,0,0,["u",function(){return AAw(this);}],IC,0,I,[],0,0,0,["j",function(b){return WP(this,b);}],Jm,0,K,[],0,0,0,["u",function()
{return Ys(this);}],IJ,0,I,[],0,0,0,["j",function(b){return S1(this,b);}],IF,0,I,[],0,0,0,["j",function(b){return Ue(this,b);}],IE,0,I,[],0,0,0,["j",function(b){return NA(this,b);}],I3,0,V,[],4,0,0,["b",function(b,c,d){return P4(this,b,c,d);},"s",function(b){TN(this,b);},"cI",function(){return M$(this);},"x",function(b){return ZE(this,b);}],IH,0,I,[],0,0,0,["j",function(b){return WT(this,b);}],Gi,0,C,[DU],4,3,0,["nQ",function(b){return Ep(this,b);},"nl",function(b){return Jo(this,b);},"mP",function(){return K1(this);
},"e1",function(b){return MS(this,b);},"f8",function(b){return Ha(this,b);},"hC",function(){return Ma(this);},"ec",function(){return Kc(this);},"c$",function(){return Hx(this);}],BY,0,C,[BD],0,3,N,0,K6,0,V,[],0,0,0,["b",function(b,c,d){return Zc(this,b,c,d);},"s",function(b){Rr(this,b);},"cI",function(){return PJ(this);},"x",function(b){return Ro(this,b);}],GD,0,Y,[],0,0,0,["H",function(b,c){return Of(this,b,c);}],BZ,0,Y,[],0,0,0,["H",function(b,c){return S8(this,b,c);},"bg",function(b,c,d){return Pk(this,b,
c,d);},"bd",function(b,c,d,e){return RT(this,b,c,d,e);},"gf",function(){return N1(this);},"X",function(b){return SK(this,b);}],GZ,"AbstractCharClass$LazyJavaLowerCase$1",2,I,[],0,0,0,["j",function(b){return Xj(this,b);}],Mm,0,K,[],0,0,0,["u",function(){return Np(this);}],BH,0,V,[],0,0,0,["b",function(b,c,d){return UM(this,b,c,d);},"j",function(b){return VS(this,b);},"X",function(b){return PV(this,b);},"fe",function(){return Y9(this);},"s",function(b){U6(this,b);},"x",function(b){return U8(this,b);}],GP,0,BH,
[],0,0,0,["j",function(b){return YN(this,b);}],M8,0,K,[],0,0,0,["u",function(){return NJ(this);}],B$,0,C,[],1,0,0,0,E0,0,V,[],0,0,0,["s",function(b){NC(this,b);},"jc",function(){return FA(this);},"b",function(b,c,d){return ND(this,b,c,d);},"X",function(b){return Rp(this,b);},"x",function(b){return Wp(this,b);}],Dp,0,CD,[BD,Dd,Dg,Gb],1,3,0,["iB",function(b,c,d){return PC(this,b,c,d);},"ks",function(b){return Ss(this,b);},"kV",function(b,c,d){return Z9(this,b,c,d);},"le",function(b,c,d){return Qu(this,b,c,d);
},"op",function(b){return DP(this,b);},"nR",function(){return IK(this);},"ov",function(){return E2(this);},"nZ",function(){return GY(this);},"fd",function(b){return Ng(this,b);}],DN,0,Dp,[],1,0,0,["dJ",function(){return Zl(this);}],LU,0,DN,[],0,0,0,["ll",function(b){return P_(this,b);},"hd",function(b,c){Nd(this,b,c);},"jx",function(){return P3(this);},"lx",function(){return V5(this);},"kN",function(){return YS(this);}],MW,0,K,[],0,0,0,["u",function(){return Xr(this);}],EL,0,C,[],0,3,AAQ,["i$",function(b,c)
{return S9(this,b,c);},"nY",function(b,c,d){return KR(this,b,c,d);},"np",function(b,c){return FO(this,b,c);},"om",function(b,c){return LI(this,b,c);}],HU,"AbstractCharClass$LazyJavaTitleCase$1",2,I,[],0,0,0,["j",function(b){return WU(this,b);}],Cl,0,C,[BE],3,3,0,0,Hz,0,C,[Cl],4,0,0,["eg",function(b){KZ(this,b);},"dT",function(b){return S2(this,b);}],De,0,C,[],0,3,0,["bT",function(){return OI(this);},"i2",function(){return X4(this);},"hr",function(){return N9(this);},"bN",function(){return R$(this);},"lK",function(b)
{AAo(this,b);},"e0",function(){return Qx(this);},"eK",function(b){QF(this,b);}],HA,0,C,[Cl],4,0,0,["eg",function(b){MT(this,b);},"dT",function(b){return Xg(this,b);}],MC,0,C,[],0,3,0,0,HC,0,C,[Cl],4,0,0,["eg",function(b){Lo(this,b);},"dT",function(b){return AAn(this,b);}],Hb,0,C,[Cl],4,0,0,["eg",function(b){JF(this,b);},"dT",function(b){return Ws(this,b);}],Gq,0,C,[],0,3,0,["cW",function(){return U9(this);},"ep",function(){return YF(this);},"du",function(){return PR(this);}],MG,"AbstractCharClass$LazyJavaMirrored$1",
2,I,[],0,0,0,["j",function(b){return VE(this,b);}],L2,"UnsupportedCharsetException",4,BN,[],0,3,0,0]);
$rt_metadata([Hc,0,C,[Cl],4,0,0,["eg",function(b){KL(this,b);},"dT",function(b){return UG(this,b);}],Ll,"AbstractCharClass$LazyJavaISOControl$1",2,I,[],0,0,0,["j",function(b){return Ts(this,b);}],J2,0,R,[],0,0,0,["b",function(b,c,d){return Q1(this,b,c,d);},"x",function(b){return Rn(this,b);},"mh",function(b,c,d,e){return FC(this,b,c,d,e);}],KJ,0,R,[],4,0,0,["b",function(b,c,d){return ZB(this,b,c,d);},"x",function(b){return V7(this,b);}],Dm,0,K,[],0,0,0,["u",function(){return LQ(this);}],G$,0,C,[],0,3,0,["kn",
function(){return PN(this);},"lg",function(){return U$(this);},"k4",function(){return WE(this);},"hR",function(){return Po(this);},"jv",function(){return T4(this);}],LL,0,Y,[],0,0,0,["H",function(b,c){return Nm(this,b,c);}],DM,0,BM,[BD],0,3,Fv,["dS",function(){return Z6(this);}],Et,0,Bp,[],0,0,0,["b",function(b,c,d){return Pd(this,b,c,d);},"bt",function(){return RL(this);},"x",function(b){return QX(this,b);}],Dn,0,V,[],0,0,0,["s",function(b){Qz(this,b);},"b",function(b,c,d){return SE(this,b,c,d);},"bg",function(b,
c,d){return Xt(this,b,c,d);},"bd",function(b,c,d,e){return TY(this,b,c,d,e);},"X",function(b){return OP(this,b);},"x",function(b){return VN(this,b);}],E4,0,C,[BI,DH,D3,DZ,Dv],3,3,0,0,LK,0,B8,[],0,3,0,0,LE,0,C,[],0,3,0,["iL",function(){return WH(this);},"dn",function(){return ZY(this);},"lh",function(){return Xo(this);},"gr",function(){return YX(this);},"bj",function(){return T0(this);},"lv",function(b){Q0(this,b);},"lC",function(){return Px(this);},"lB",function(b){T1(this,b);},"e3",function(){return QY(this);
},"g$",function(b){return O_(this,b);},"nU",function(){return M0(this);}],Cg,0,Bs,[],0,0,0,["b",function(b,c,d){return AAf(this,b,c,d);}],E$,0,Cg,[],0,0,0,["b",function(b,c,d){return Pj(this,b,c,d);}],Ev,0,C,[Dz],3,3,0,0,DA,0,Dl,[Ev],1,3,0,["Y",function(){return U1(this);}],EV,0,C,[],3,3,0,0,H7,0,DA,[B4,BO,EV],0,3,0,["bX",function(b){Pq(this,b);},"E",function(b){return S3(this,b);},"U",function(){return QD(this);},"bo",function(b){return XC(this,b);},"lH",function(b,c){YE(this,b,c);},"iC",function(b){return TB(this,
b);},"m8",function(b){Es(this,b);},"mr",function(b){JG(this,b);}],EY,0,C,[],3,3,0,0,E9,0,C,[BE],3,3,0,0,Hy,0,C,[BE,E4,EY,E9],1,3,0,["mX",function(b,c){return Nr(this,b,c);},"ol",function(b,c){return N3(this,b,c);},"l8",function(b){return P2(this,b);},"me",function(b,c,d){return Ql(this,b,c,d);},"nW",function(b){return XH(this,b);},"n4",function(){return Sd(this);},"mZ",function(b,c,d){return N6(this,b,c,d);}],K4,0,CM,[],0,0,0,["b",function(b,c,d){return RN(this,b,c,d);}],Hn,0,C,[],0,0,0,0,Bf,0,C,[BO,BD,Dg],
0,3,CP,["oF",function(b,c,d,e){I0(this,b,c,d,e);},"d",function(b){return Qb(this,b);},"g",function(){return V6(this);},"Q",function(){return YY(this);},"ip",function(b,c){return Rt(this,b,c);},"el",function(b){return Y7(this,b);},"cy",function(b,c){return PO(this,b,c);},"cr",function(b){return UK(this,b);},"et",function(b,c){return Qm(this,b,c);},"gJ",function(b,c){return Uf(this,b,c);},"lA",function(b,c){return Uz(this,b,c);},"b$",function(b,c){return Ou(this,b,c);},"fa",function(b){return Yf(this,b);},"fr",
function(b,c){return UW(this,b,c);},"fL",function(b){return Nb(this,b);},"hM",function(){return Zz(this);},"f",function(){return RQ(this);},"cn",function(){return Y5(this);},"ca",function(b){return Xw(this,b);},"jO",function(b){return XT(this,b);},"hL",function(){return P0(this);},"c1",function(){return OV(this);},"iY",function(b){return Z5(this,b);}],FL,0,C,[],0,0,ADE,0,M5,"NegativeArraySizeException",6,T,[],0,3,0,0,Ia,0,Ca,[],0,0,0,["b",function(b,c,d){return PK(this,b,c,d);}],Eb,0,Dj,[],1,3,0,["j3",function(b,
c){return Qr(this,b,c);}],JM,0,Eb,[],0,3,0,["jA",function(b,c,d,e,f,g,h){return ZO(this,b,c,d,e,f,g,h);}],I5,0,K,[],0,0,0,["u",function(){return Yj(this);}],Ki,0,C,[],0,3,0,["jR",function(b,c){return Pn(this,b,c);},"mF",function(b,c){return Ij(this,b,c);}],Ii,0,R,[],0,0,0,["b",function(b,c,d){return Zr(this,b,c,d);},"x",function(b){return QL(this,b);}],C0,"NumberFormatException",6,BN,[],0,3,0,0,ED,0,Cg,[],0,0,0,["b",function(b,c,d){return X2(this,b,c,d);}],ML,0,Dr,[],0,3,0,["j8",function(){return Uj(this);},
"kR",function(){return X$(this);}],Gu,0,R,[],0,0,0,["b",function(b,c,d){return Yc(this,b,c,d);},"x",function(b){return SJ(this,b);}],Ic,0,C,[],0,0,0,0,Hg,0,CA,[],0,3,0,["bG",function(){Z1(this);},"em",function(){return ZL(this);},"ok",function(b){return Eu(this,b);},"nH",function(){Fy(this);}],Im,0,K,[],0,0,0,["u",function(){return Tg(this);}],I7,"AbstractCharClass$LazyJavaDigit$1",2,I,[],0,0,0,["j",function(b){return Xp(this,b);}],Jd,0,K,[],0,0,0,["u",function(){return Nn(this);}],Hi,"IllegalStateException",
6,Bo,[],0,3,0,0,Dx,0,V,[],0,0,0,["s",function(b){RU(this,b);},"b",function(b,c,d){return NY(this,b,c,d);},"bg",function(b,c,d){return Rl(this,b,c,d);},"bd",function(b,c,d,e){return T6(this,b,c,d,e);},"X",function(b){return TG(this,b);},"x",function(b){return RK(this,b);}],LO,0,Cc,[],0,0,0,["b",function(b,c,d){return Uw(this,b,c,d);}],GF,"NullPointerException",6,T,[],0,3,0,0,LS,0,R,[],4,0,0,["b",function(b,c,d){return AAl(this,b,c,d);},"x",function(b){return Yo(this,b);}],JP,"AbstractCharClass$LazyJavaSpaceChar$1",
2,I,[],0,0,0,["j",function(b){return Sk(this,b);}],Kn,0,C,[F6],0,0,0,["jz",function(){WW(this);},"oK",function(){return SA(this);}],LR,0,C,[],4,3,0,0]);
$rt_metadata([Kj,0,K,[],0,0,0,["u",function(){return Pp(this);}],FG,"PatternSyntaxException",2,BN,[],0,3,0,["dN",function(){return Yr(this);}],Ko,0,K,[],0,0,0,["u",function(){return Tm(this);}],Di,0,C,[],0,3,Cj,0,H1,0,C,[FX],0,3,0,0,ER,0,C,[],0,3,AB9,["jS",function(b,c,d){return Uk(this,b,c,d);},"nc",function(b){return Ho(this,b);},"oV",function(b,c){return M2(this,b,c);},"of",function(b,c){return MV(this,b,c);},"m_",function(b,c){return M6(this,b,c);},"oh",function(b,c){return H9(this,b,c);},"nS",function(b,
c){return JD(this,b,c);},"oB",function(b,c){return IS(this,b,c);},"n3",function(b,c){return Mk(this,b,c);},"oD",function(b,c){return ID(this,b,c);}],LG,0,C,[BO],4,3,0,["nd",function(b){return K8(this,b);},"mi",function(b,c){return Ht(this,b,c);},"no",function(b){return Hs(this,b);},"oH",function(){return DJ(this);},"l1",function(b,c){return Ks(this,b,c);},"n1",function(b){return LY(this,b);},"nm",function(b,c,d){return F7(this,b,c,d);},"nb",function(){return JC(this);},"n_",function(){return JO(this);},"oQ",
function(b){return Fc(this,b);},"mW",function(b,c){return D4(this,b,c);},"m3",function(b){return FV(this,b);},"mE",function(b,c){return HE(this,b,c);},"nO",function(b){return Cu(this,b);},"oU",function(b){return FZ(this,b);},"mu",function(b){return Ea(this,b);},"lZ",function(){Ke(this);},"mq",function(){return G2(this);},"mD",function(){return KX(this);},"ng",function(){return H_(this);},"nC",function(b){return Bb(this,b);}],Jq,0,CM,[],0,0,0,["b",function(b,c,d){return Y6(this,b,c,d);},"s",function(b){Py(this,
b);}],Lq,"BufferOverflowException",3,T,[],0,3,0,0,G6,0,K,[],0,0,0,["u",function(){return Ye(this);}],Mq,0,DF,[B4,BO],0,3,0,["hf",function(b){return WX(this,b);},"ot",function(){E6(this);},"gi",function(b){return W9(this,b);},"n9",function(b){return Hf(this,b);},"oi",function(b,c,d){return Fu(this,b,c,d);},"oA",function(){return Ga(this);},"hB",function(b,c){return O8(this,b,c);},"lm",function(b,c){return Wv(this,b,c);},"hz",function(b,c,d){return R2(this,b,c,d);},"ki",function(b){Wj(this,b);},"hy",function()
{SN(this);}],GU,0,R,[],0,0,0,["b",function(b,c,d){return Qc(this,b,c,d);},"x",function(b){return VK(this,b);}],HR,0,C,[],0,3,0,0,Mh,0,K,[],0,0,0,["u",function(){return ZX(this);}],EF,0,C,[],0,3,0,0,DQ,0,C,[],0,3,Be,["dE",function(){return OQ(this);},"c8",function(){return W4(this);},"fR",function(){return ZJ(this);},"hW",function(){return W7(this);},"fZ",function(){return Xn(this);},"g",function(){return Vh(this);},"gY",function(){TX(this);}],FP,0,R,[],4,0,0,["b",function(b,c,d){return R6(this,b,c,d);},"x",
function(b){return SF(this,b);}],Jz,0,B$,[],4,0,0,["dd",function(b){return UB(this,b);},"hc",function(b,c){return Yn(this,b,c);}],Jy,0,B$,[],4,0,0,["dd",function(b){return R7(this,b);},"hc",function(b,c){return SY(this,b,c);}],LA,0,CO,[],0,3,0,0,M4,0,K,[],0,0,0,["u",function(){return TC(this);}],CV,0,C,[],0,0,0,["R",function(){return ZS(this);},"d6",function(b){R9(this,b);},"kx",function(b){RE(this,b);},"fj",function(){return TQ(this);},"dc",function(){return RP(this);},"fk",function(){return Ru(this);},"l",
function(){return Tk(this);},"cq",function(){return SQ(this);},"bh",function(){return P1(this);},"kL",function(){return Vg(this);},"ne",function(){Lg(this);},"oP",function(){Cb(this);},"nF",function(){return Hk(this);},"m0",function(b){return Li(this,b);},"f",function(){return Wb(this);},"Q",function(){return XV(this);},"cl",function(){return YD(this);},"hI",function(){return Q_(this);},"iR",function(){return Tf(this);},"mw",function(b){return Fl(this,b);},"mG",function(){return HO(this);},"os",function(){return MD(this);
},"l0",function(){return X(this);},"nu",function(){return Hw(this);},"mK",function(b){return K2(this,b);},"nr",function(){return DI(this);},"bt",function(){return Q8(this);}],J_,0,K,[],0,0,0,["u",function(){return XW(this);}],Jp,0,C,[],0,3,0,0,Mr,0,Dm,[],0,0,0,["u",function(){return QC(this);}],Me,0,C,[Fz],0,3,0,["ld",function(b){return Rx(this,b);},"oo",function(b,c){Jl(this,b,c);},"nv",function(b,c){Jf(this,b,c);},"mA",function(b,c){GI(this,b,c);},"nK",function(b,c){G8(this,b,c);},"mo",function(b,c,d){L$(this,
b,c,d);},"mR",function(b,c){Lr(this,b,c);}],B1,0,Y,[],0,0,0,["H",function(b,c){return Ne(this,b,c);},"X",function(b){return QP(this,b);},"fe",function(){return Qs(this);}],D5,"UnicodeCategory",2,I,[],0,0,0,["j",function(b){return Qy(this,b);}],My,"UnicodeCategoryScope",2,D5,[],0,0,0,["j",function(b){return U7(this,b);}],Kh,"UnmappableCharacterException",4,Cn,[],0,3,0,["dN",function(){return TV(this);}],I6,"CharClass",2,I,[],0,0,0,["be",function(b){return M_(this,b);},"lE",function(b){return AAi(this,b);},"I",
function(b,c){return WD(this,b,c);},"jG",function(b){NK(this,b);},"gp",function(b){W5(this,b);},"j",function(b){return Sy(this,b);},"L",function(){return AAk(this);},"bb",function(){return UY(this);},"c2",function(){return Wf(this);},"f",function(){return Ph(this);},"cf",function(){return Vy(this);}],KH,"BufferUnderflowException",3,T,[],0,3,0,0,Jv,0,BT,[],0,0,0,["e2",function(b){Xa(this,b);}],JS,0,C,[],0,3,0,0,L9,0,Ci,[],0,0,0,0]);
function $rt_array(cls,data){this.rB=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["@",": ","    at ","Caused by: ","Malformed input of length ","String contains invalid digits: ","String contains digits out of radix ","The value is too big for int type: ","String is null or empty","Illegal radix: ","�","averageCharsPerByte must be positive. Actual value is ","maxCharsPerByte must be positive. Actual value is ","newAction must be non-null","BIG_ENDIAN","LITTLE_ENDIAN","null",
"Index out of bounds","New position "," is outside of range [0;","]","","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","W","s","S","d","D","BasicLatin",
"Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog","Hanunoo","Buhid",
"Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements","GeometricShapes",
"MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo","Kanbun","BopomofoExtended",
"CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms","SmallFormVariants",
"ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","Class does not represent enum: ","Enum "," does not have the ","constant","FINGERS","EFFORT","PENALTIES","TYPE","STD","ANGLE","MATRIX","Unable to load bigram frequency string","#","{",",","}","0","Unable to read layout data","Replacement preconditions do not hold",
"Action must be non-null","The last byte in dst "," is outside of array of size ","Length "," must be non-negative","Offset ",")","The last byte in src ","Unable to load char frequency string","resources/","loaded ","Loading...","%","charsetName is null","Should never been thrown","IGNORE","REPLACE","REPORT","Initializing...","en","?","&","=","freq","Using frequency resource: ","\n[ An error occurred. Please check inputs ]\n","\n[ An error occurred. Frequency data was missing. ]\n","No frequency data found",
"Using frequency information: ","\n\nReady.","Either src or dest is null","Capacity is negative: ","The last char in dst ","The last char in src "," is outside of string of size ","Start "," must be before end ","rgb(","background-color:","Key "," ","width:","px","#80c4c4","#ca80ca","#80b780","#7a93c0","#8080ca","UTF-8","Unable to load finger key definitions file",":","Invalid section ","Invalid KeyboardType ",", ","Mod-DH","layout/colemak_dh.keyb","Colemak","layout/colemak.keyb","Dvorak","layout/dvorak.keyb",
"Workman","layout/workman.keyb","MTGAP","layout/mtgap.keyb","qgmlwyfub","layout/qgmlwyfub.keyb","Asset","layout/asset.keyb","Norman","layout/norman.keyb","Qwpr","layout/qwpr.keyb","Minimak-8","layout/minimak8.keyb","Qwerty","layout/qwerty.keyb","Traditional","The traditional typing method","config/effort_traditional_config.dat","Alternative","An alternative typing method","config/effort_alternative_config.dat","Ergonomic","An ergonomic method using the Angle Mod","config/effort_ergonomic_config.dat","Matrix",
"A Matrix or ortholinear colemakmods","config/effort_matrix_config.dat","Default English data","freq/en_books.freq","en_norvig","English Data from\n  Peter Norvig, norvig.com/mayzner.html","freq/en_norvig.freq","en_wikipedia","Data from the 100 most popular\n  Wikipedia articles","freq/en_wikipedia.freq","linux_src","Data from the Linux source code","freq/linux_src.freq","da","Danish data","freq/practical_cryptography/da_pc.freq","de","German data","freq/practical_cryptography/de_pc.freq","es","Spanish data",
"freq/practical_cryptography/es_pc.freq","fr","French data","freq/practical_cryptography/fr_pc.freq","pl","Polish data","freq/practical_cryptography/pl_pc.freq","sv","Swedish data","freq/practical_cryptography/sv_pc.freq","Warning: Too many rows","Warning: letter "," is missing from layout. "," appears more than once on layout. ","Patter is null","\\Q","\\E","\\\\E\\Q","Is","In","<b style=\"color:red\">","</b>","<b><u>Finger Frequency</u></b>","<table>","<tr>","<td>finger ","</td><td>","</td><td>&nbsp;finger ",
"</td>","</tr>","<tr class=\"row_total\">","<td class=\"center\">total L</td><td>","</td><td class=\"center\">&nbsp;total R</td><td>","</table>","<b><u>Finger Bigram Frequency</u></b>","<td class=\"center\" colspan=\"2\">total</td><td class=\"center\" colspan=\"2\">","<b><u>Top Same-Finger Bigrams</u></b>","<b><u>Finger Effort</u></b>","<th> </th><th>base</th><th>s-bigrams</th><th>n-bigrams</th><th>total</th>","<td>total *</td><td>","Unmappable characters of length "]);
Bf.prototype.toString=function(){return $rt_ustr(this);};
Bf.prototype.valueOf=Bf.prototype.toString;C.prototype.toString=function(){return $rt_ustr(RR(this));};
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
=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}main=$rt_mainStarter(PM);
(function(){var c;c=Hz.prototype;c.handleEvent=c.dT;c=HA.prototype;c.handleEvent=c.dT;c=HC.prototype;c.handleEvent=c.dT;c=Hb.prototype;c.handleEvent=c.dT;c=Hc.prototype;c.handleEvent=c.dT;c=Hy.prototype;c.dispatchEvent=c.nW;c.addEventListener=c.mX;c.removeEventListener=c.ol;c.getLength=c.n4;c.get=c.l8;c.addEventListener=c.mZ;c.removeEventListener=c.me;c=Kn.prototype;c.stateChanged=c.oK;})();
})();
