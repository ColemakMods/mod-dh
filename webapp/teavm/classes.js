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
function $rt_cls(cls){return HQ(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return GC(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.s.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return C; }
function $rt_nullCheck(val) {if (val === null) {$rt_throw(RD());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return AD3(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
var A=Object.create(null);
var G=$rt_throw;var BW=$rt_compare;var AD4=$rt_nullCheck;var D=$rt_cls;var F=$rt_createArray;var ACQ=$rt_isInstance;var AD5=$rt_nativeThread;var AD6=$rt_suspending;var AD7=$rt_resuming;var AD8=$rt_invalidPointer;var B=$rt_s;var Be=$rt_eraseClinit;var Ce=$rt_imul;var Bc=$rt_wrapException;
function C(){this.$id$=0;}
function ACc(){var a=new C();M(a);return a;}
function M(a){return;}
function Cf(a){return HQ(a.constructor);}
function Tu(a){return Er(a);}
function N5(a,b){return a!==b?0:1;}
function R0(a){return J().a(Cf(a).bX()).a(B(0)).a(MU(Er(a))).e();}
function Er(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AAf(a){var b,c,d;if(!ACQ(a,B5)){b=a;if(b.constructor.$meta.item===null)G(AA$());}c=Oe(a);b=c;d=$rt_nextId();b.$id$=d;return c;}
function K(){var a=this;C.call(a);a.e$=null;a.fP=null;}
function AD9(){var a=new K();R(a);return a;}
function R(a){M(a);}
function To(a,b){if(!b&&a.e$===null)a.e$=a.u();else if(b&&a.fP===null)a.fP=a.u().b7(1);if(b)return a.fP;return a.e$;}
function M2(){K.call(this);}
function ABF(){var a=new M2();Ug(a);return a;}
function Ug(a){R(a);}
function Tx(a){return By().bg(32).bg(9);}
function JW(){K.call(this);}
function ACB(){var a=new JW();X9(a);return a;}
function X9(a){R(a);}
function Oi(a){return By().J(0,31).bg(127);}
function CM(){var a=this;C.call(a);a.fm=null;a.dG=null;a.d0=0;a.ev=0;a.hF=null;}
function AD$(){var a=new CM();Lb(a);return a;}
function AD_(a){var b=new CM();F7(b,a);return b;}
function AEa(a,b){var c=new CM();MN(c,a,b);return c;}
function AEb(a){var b=new CM();Ld(b,a);return b;}
function Lb(a){a.d0=1;a.ev=1;a.ed();}
function F7(a,b){a.d0=1;a.ev=1;a.ed();a.fm=b;}
function MN(a,b,c){a.d0=1;a.ev=1;a.ed();a.fm=b;a.dG=c;}
function Ld(a,b){a.d0=1;a.ev=1;a.ed();a.dG=b;}
function Vz(a){return a;}
function TS(a){return a.fm;}
function WD(a){return a.dR();}
function XH(a){a.hr(Cz());}
function ZJ(a,b){var c,d,e,f,g;b.bI(Cf(a).bX());c=a.j2();if(c!==null)b.bI(J().a(B(1)).a(c).e());a:{b.ly();if(a.hF!==null){d=a.hF.data;e=d.length;f=0;while(true){if(f>=e)break a;g=d[f];b.bI(B(2));b.lr(g);f=f+1|0;}}}if(a.dG!==null&&a.dG!==a){b.bI(B(3));a.dG.hr(b);}}
function Br(){CM.call(this);}
function AEc(){var a=new Br();C4(a);return a;}
function AEd(a){var b=new Br();Et(b,a);return b;}
function C4(a){Lb(a);}
function Et(a,b){F7(a,b);}
function U(){Br.call(this);}
function AEe(){var a=new U();BB(a);return a;}
function AD3(a){var b=new U();Df(b,a);return b;}
function BB(a){C4(a);}
function Df(a,b){Et(a,b);}
function C5(){U.call(this);}
function Cq(){var a=new C5();I2(a);return a;}
function Bp(a){var b=new C5();L2(b,a);return b;}
function I2(a){BB(a);}
function L2(a,b){Df(a,b);}
function Ct(){C.call(this);}
function AEf(){var a=new Ct();Eo(a);return a;}
function Eo(a){M(a);}
function I(){var a=this;Ct.call(a);a.G=0;a.U=0;a.K=null;a.ds=null;a.dW=null;a.y=0;}
var AEg=null;function E6(){E6=Be(I);Tg();}
function AEh(){var a=new I();Q(a);return a;}
function Q(a){E6();Eo(a);a.K=AB2(2048);}
function Rf(a){return null;}
function PM(a){return a.K;}
function N$(a){var b,c;if(!a.U){b=a.K;c=b.dr(0)>=2048?0:1;}else c=a.K.la(0)>=2048?0:1;return c;}
function Xq(a){return a.y;}
function Vm(a){return a;}
function Qd(a){var b;if(a.dW===null){b=a.bc();a.dW=AD1(a,b);a.dW.b7(a.U);}return a.dW;}
function Rq(a){var b;if(a.ds===null){b=a.bc();a.ds=ADV(a,b,a);a.ds.b7(a.c4());a.ds.y=a.y;}return a.ds;}
function YD(a){return 0;}
function WH(a,b){if(a.G^b){a.G=a.G?0:1;a.U=a.U?0:1;}if(!a.y)a.y=1;return a;}
function VE(a){return a.G;}
function DU(b,c){E6();return b.j(c);}
function CV(b,c){E6();if(b.M()!==null&&c.M()!==null)return b.M().j9(c.M());return 1;}
function Gh(b,c){E6();return LB(AEg,b).kT(c);}
function Tg(){AEg=ADs();}
function MM(){I.call(this);this.k_=null;}
function AB$(a){var b=new MM();O8(b,a);return b;}
function O8(a,b){a.k_=b;Q(a);}
function PQ(a,b){return FZ(b);}
function BY(){Br.call(this);}
function PE(){var a=new BY();HT(a);return a;}
function ABw(a){var b=new BY();Ws(b,a);return b;}
function HT(a){C4(a);}
function Ws(a,b){Et(a,b);}
function Cl(){BY.call(this);}
function AEi(){var a=new Cl();Fq(a);return a;}
function Fq(a){HT(a);}
function Jz(){Cl.call(this);this.iE=0;}
function ABY(a){var b=new Jz();Ql(b,a);return b;}
function Ql(a,b){Fq(a);a.iE=b;}
function U$(a){return J().a(B(4)).m(a.iE).e();}
function Kp(){K.call(this);}
function AB5(){var a=new Kp();Pb(a);return a;}
function Pb(a){R(a);}
function Ux(a){var b;b=ACj(a);b.y=1;return b;}
function HX(){var a=this;C.call(a);a.gG=null;a.iA=null;a.hU=0;a.f7=0;}
function ABG(a,b){var c=new HX();VT(c,a,b);return c;}
function VT(a,b,c){M(a);a.gG=b;a.iA=c;}
function UH(a){return BR(a.gG);}
function UP(a,b){return X(a.iA)<b?0:1;}
function V7(a,b){a.hU=b;}
function AAI(a,b){a.f7=b;}
function BQ(){}
function BO(){C.call(this);}
function AEj(){var a=new BO();F2(a);return a;}
function F2(a){M(a);}
function BE(){}
function C$(){BO.call(this);this.iN=0;}
var AEk=null;function B6(){B6=Be(C$);U0();}
function ACW(a){var b=new C$();DN(b,a);return b;}
function DN(a,b){B6();F2(a);a.iN=b;}
function JA(b,c){B6();if(!(c>=2&&c<=36))c=10;return ADr(20).gX(b,c).e();}
function MU(b){B6();return Og(b,4);}
function Iq(b){B6();return JA(b,10);}
function CX(b,c){var d,e,f,g,h;B6();if(c>=2&&c<=36){if(b!==null&&!b.H()){a:{d=0;e=0;switch(b.d(0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=0;if(e==b.g())G(Ca());while(e<b.g()){g=e+1|0;h=Eh(b.d(e));if(h<0)G(BV(J().a(B(5)).a(b).e()));if(h>=c)G(BV(J().a(B(6)).m(c).a(B(1)).a(b).e()));f=Ce(c,f)+h|0;if(f<0){if(g==b.g()&&f==(-2147483648)&&d)return (-2147483648);G(BV(J().a(B(7)).a(b).e()));}e=g;}if(d)f= -f;return f;}G(BV(B(8)));}G(BV(J().a(B(9)).m(c).e()));}
function Fs(b){B6();return CX(b,10);}
function XX(a){return Iq(a.iN);}
function EP(b){var c,d,e;B6();if(!b)return 32;c=0;d=b>>>16;if(d)c=16;else d=b;e=d>>>8;if(!e)e=d;else c=c|8;d=e>>>4;if(!d)d=e;else c=c|4;e=d>>>2;if(!e)e=d;else c=c|2;if(e>>>1)c=c|1;return (32-c|0)-1|0;}
function CY(b){var c,d,e;B6();if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;e=d<<8;if(!e)e=d;else c=c|8;d=e<<4;if(!d)d=e;else c=c|4;e=d<<2;if(!e)e=d;else c=c|2;if(e<<1)c=c|1;return (32-c|0)-1|0;}
function KG(b,c){var d;B6();d=c&31;return b<<d|b>>>(32-d|0);}
function U0(){AEk=D($rt_intcls());}
function Ka(){Br.call(this);}
function AA$(){var a=new Ka();Yw(a);return a;}
function Yw(a){C4(a);}
function Cg(){C.call(this);}
var AEl=null;var AEm=null;var AEn=null;var AEo=null;var AEp=null;function AB_(){AB_=Be(Cg);YQ();}
function YQ(){var b,c;b=$rt_createIntArray(10);c=b.data;c[0]=1;c[1]=10;c[2]=100;c[3]=1000;c[4]=10000;c[5]=100000;c[6]=1000000;c[7]=10000000;c[8]=100000000;c[9]=1000000000;AEl=b;b=$rt_createLongArray(19);c=b.data;c[0]=Long_fromInt(1);c[1]=Long_fromInt(10);c[2]=Long_fromInt(100);c[3]=Long_fromInt(1000);c[4]=Long_fromInt(10000);c[5]=Long_fromInt(100000);c[6]=Long_fromInt(1000000);c[7]=Long_fromInt(10000000);c[8]=Long_fromInt(100000000);c[9]=Long_fromInt(1000000000);c[10]=new Long(1410065408, 2);c[11]=new Long(1215752192, 23);c[12]
=new Long(3567587328, 232);c[13]=new Long(1316134912, 2328);c[14]=new Long(276447232, 23283);c[15]=new Long(2764472320, 232830);c[16]=new Long(1874919424, 2328306);c[17]=new Long(1569325056, 23283064);c[18]=new Long(2808348672, 232830643);AEm=b;b=$rt_createLongArray(6);c=b.data;c[0]=Long_fromInt(1);c[1]=Long_fromInt(10);c[2]=Long_fromInt(100);c[3]=Long_fromInt(10000);c[4]=Long_fromInt(100000000);c[5]=new Long(1874919424, 2328306);AEn=b;AEo=ABj();AEp=AC0();}
function S(){var a=this;C.call(a);a.f=null;a.be=0;a.hL=null;a.hy=0;}
var AEq=0;function Jh(){Jh=Be(S);ZK();}
function AEr(){var a=new S();Bo(a);return a;}
function AEs(a){var b=new S();Eb(b,a);return b;}
function Bo(a){var b,c;Jh();M(a);b=new C$;c=AEq;AEq=c+1|0;DN(b,c);a.hL=b.e();}
function Eb(a,b){var c,d;Jh();M(a);c=new C$;d=AEq;AEq=d+1|0;DN(c,d);a.hL=c.e();a.f=b;}
function C7(a,b,c,d){var e;e=d.q();while(true){if(b>e)return (-1);if(a.b(b,c,d)>=0)break;b=b+1|0;}return b;}
function Db(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.b(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function SZ(a,b){a.hy=b;}
function RJ(a){return a.hy;}
function UO(a){return a.f;}
function FL(a,b){a.f=b;}
function WN(a,b){return 1;}
function YJ(a){return null;}
function GL(a){var b;a.be=1;if(a.f!==null){if(!a.f.be){b=a.f.cj();if(b!==null){a.f.be=1;a.f=b;}a.f.bB();}else if(a.f instanceof CL&&a.f.br.ff)a.f=a.f.f;}}
function ZK(){AEq=1;}
function W(){var a=this;S.call(a);a.O=null;a.br=null;a.A=0;}
function AEt(){var a=new W();BD(a);return a;}
function ADN(a,b){var c=new W();H0(c,a,b);return c;}
function BD(a){Bo(a);}
function H0(a,b,c){Bo(a);a.O=b;a.br=c;a.A=c.c_();}
function WU(a,b,c,d){var e,f,g,h,i;if(a.O===null)return (-1);e=d.cE(a.A);d.bO(a.A,b);f=a.O.T();g=0;while(true){if(g>=f){d.bO(a.A,e);return (-1);}h=a.O.C(g);i=h.b(b,c,d);if(i>=0)break;g=g+1|0;}return i;}
function QX(a,b){a.br.t(b);}
function AAG(a,b){var c;a:{if(a.O!==null){c=a.O.X();while(true){if(!c.Y())break a;if(!c.V().Z(b))continue;else return 1;}}}return 0;}
function So(a,b){var c,d;a:{if(b.ez(a.A)>=0){c=b.cE(a.A);d=a.A;if(c==b.ez(d)){c=0;break a;}}c=1;}return c;}
function Su(a){var b,c,d,e;a.be=1;if(a.br!==null&&!a.br.be)a.br.bB();a:{if(a.O!==null){b=a.O.T();c=0;while(true){if(c>=b)break a;d=a.O.C(c);e=d.cj();if(e===null)e=d;else{d.be=1;a.O.iD(c);a.O.lJ(c,e);}if(!e.be)e.bB();c=c+1|0;}}}if(a.f!==null)GL(a);}
function CL(){W.call(this);this.bl=null;}
function ABA(a,b){var c=new CL();Ju(c,a,b);return c;}
function Ju(a,b,c){BD(a);a.bl=b;a.br=c;a.A=c.c_();}
function OB(a,b,c,d){var e,f;e=d.cE(a.A);d.bO(a.A,b);f=a.bl.b(b,c,d);if(f>=0)return f;d.bO(a.A,e);return (-1);}
function NE(a,b,c,d){var e;e=a.bl.bh(b,c,d);if(e>=0)d.bO(a.A,e);return e;}
function T9(a,b,c,d,e){var f;f=a.bl.bf(b,c,d,e);if(f>=0)e.bO(a.A,f);return f;}
function AAt(a,b){return a.bl.Z(b);}
function Q2(a){var b;b=ABy(a);a.f=b;return b;}
function YR(a){var b;a.be=1;if(a.br!==null&&!a.br.be)a.br.bB();if(a.bl!==null&&!a.bl.be){b=a.bl.cj();if(b!==null){a.bl.be=1;a.bl=b;}a.bl.bB();}}
function BF(){}
function V3(b){return b;}
function Dk(){}
function El(){}
function BL(){}
function KB(){}
function Zo(){return window.document;}
function Gi(){BO.call(this);}
var AEu=null;function U6(){U6=Be(Gi);Xd();}
function Ml(b,c){var d,e,f,g,h;U6();if(c>=2&&c<=36){if(b!==null&&!b.H()){a:{d=0;e=0;switch(b.d(0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=Long_ZERO;while(e<b.g()){g=e+1|0;h=Eh(b.d(e));if(h<0)G(BV(J().a(B(5)).a(b).e()));if(h>=c)G(BV(J().a(B(6)).m(c).a(B(1)).a(b).e()));f=Long_add(Long_mul(Long_fromInt(c),f),Long_fromInt(h));if(Long_lt(f,Long_ZERO)){if(g==b.g()&&Long_eq(f,new Long(0, 2147483648))&&d)return new Long(0, 2147483648);G(BV(J().a(B(7)).a(b).e()));}e=g;}if(d)f=Long_neg(f);return f;}G(BV(B(8)));}G(BV(J().a(B(9)).m(c).e()));}
function FU(b){U6();return Ml(b,10);}
function Xd(){AEu=D($rt_longcls());}
function Gc(){}
function EB(){}
function I_(){var a=this;C.call(a);a.dF=null;a.eR=null;a.bq=0;a.iX=0;}
function PO(a){var b=new I_();Y0(b,a);return b;}
function Y0(a,b){M(a);while(b>=a.bq){a.bq=a.bq<<1|1;}a.bq=a.bq<<1|1;a.dF=$rt_createIntArray(a.bq+1|0);a.eR=$rt_createIntArray(a.bq+1|0);a.iX=b;}
function X7(a,b,c){var d,e,f;d=0;e=b&a.bq;while(a.dF.data[e]&&a.dF.data[e]!=b){f=d+1|0;d=f&a.bq;f=e+d|0;e=f&a.bq;}a.dF.data[e]=b;a.eR.data[e]=c;}
function NT(a,b){var c,d,e,f;c=b&a.bq;d=0;while(true){e=a.dF.data[c];if(!e)break;if(e==b)return a.eR.data[c];f=d+1|0;d=f&a.bq;f=c+d|0;c=f&a.bq;}return a.iX;}
function Ee(){K.call(this);}
function ADb(){var a=new Ee();Jn(a);return a;}
function Jn(a){R(a);}
function Jf(a){return By().J(97,122).J(65,90);}
function DM(){K.call(this);}
function ADK(){var a=new DM();Kv(a);return a;}
function Kv(a){R(a);}
function Gy(a){return By().J(48,57);}
function Kh(){DM.call(this);}
function AC2(){var a=new Kh();ZC(a);return a;}
function ZC(a){Kv(a);}
function Xb(a){var b;b=Gy(a).b7(1);b.y=1;return b;}
function Hi(){CL.call(this);}
function ABy(a){var b=new Hi();S6(b,a);return b;}
function S6(a,b){Ju(a,b.bl,b.br);}
function VP(a,b,c,d){var e,f,g;e=0;f=d.q();a:{while(true){if(b>f){b=e;break a;}g=d.cE(a.A);d.bO(a.A,b);e=a.bl.b(b,c,d);if(e>=0)break;d.bO(a.A,g);b=b+1|0;}}return b;}
function AAp(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=e.cE(a.A);e.bO(a.A,c);f=a.bl.b(c,d,e);if(f>=0)break;e.bO(a.A,g);c=c+(-1)|0;}}return c;}
function SK(a){return null;}
function L7(){U.call(this);}
function ADF(){var a=new L7();Pv(a);return a;}
function Pv(a){BB(a);}
function CE(){var a=this;W.call(a);a.gR=0;a.c2=0;}
function ADJ(a,b){var c=new CE();Fc(c,a,b);return c;}
function Fc(a,b,c){BD(a);a.gR=b;a.c2=c;}
function PH(a,b,c,d){var e,f,g,h;e=a.c6(d);if(e!==null&&(b+e.g()|0)<=d.q()){f=0;while(true){if(f>=e.g()){d.D(a.c2,e.g());return a.f.b(b+e.g()|0,c,d);}g=e.d(f);h=b+f|0;if(g!=c.d(h)&&C6(e.d(f))!=c.d(h))break;f=f+1|0;}return (-1);}return (-1);}
function St(a,b){a.f=b;}
function S_(a,b){var c;c=b.jV(a.gR);return c;}
function Tb(a,b){var c;c=!b.bD(a.c2)?0:1;b.D(a.c2,(-1));return c;}
function Du(){K.call(this);}
function ABf(){var a=new Du();Kd(a);return a;}
function Kd(a){R(a);}
function M7(a){return By().J(97,122).J(65,90).J(48,57).bg(95);}
function Ky(){Du.call(this);}
function ABt(){var a=new Ky();X0(a);return a;}
function X0(a){Kd(a);}
function O6(a){var b;b=M7(a).b7(1);b.y=1;return b;}
function KS(){var a=this;I.call(a);a.g8=null;a.kY=null;}
function AD1(a,b){var c=new KS();AAm(c,a,b);return c;}
function AAm(a,b,c){a.kY=b;a.g8=c;Q(a);}
function U4(a,b){var c,d,e;c=b-55296|0;if(c>=0&&c<2048){d=a.U;e=a.g8;d=d^e.bN(c);}else d=0;return d;}
function KP(){var a=this;I.call(a);a.hR=null;a.ii=null;a.ki=null;}
function ADV(a,b,c){var d=new KP();PX(d,a,b,c);return d;}
function PX(a,b,c,d){a.ki=b;a.hR=c;a.ii=d;Q(a);}
function Ov(a,b){var c,d,e,f;c=b-55296|0;if(c>=0&&c<2048){d=a.U;e=a.hR;f=d^e.bN(c);}else f=0;return a.ii.j(b)&&!f?1:0;}
function Kb(){K.call(this);}
function ABR(){var a=new Kb();Qo(a);return a;}
function Qo(a){R(a);}
function PN(a){var b;b=AB1(a);b.y=1;return b;}
function Z(){S.call(this);this.Q=0;}
function AEv(a){var b=new Z();Hs(b,a);return b;}
function AEw(){var a=new Z();BH(a);return a;}
function Hs(a,b){Eb(a,b);a.Q=1;a.gC(1);}
function BH(a){Bo(a);a.Q=1;}
function ZT(a,b,c,d){var e;if((b+a.bb()|0)>d.q()){d.by=1;return (-1);}e=a.I(b,c);if(e<0)return (-1);return a.f.b(b+e|0,c,d);}
function VD(a){return a.Q;}
function YX(a,b){return 1;}
function Hv(){Z.call(this);this.dD=null;}
function AD2(a){var b=new Hv();Xp(b,a);return b;}
function Xp(a,b){BH(a);a.dD=b.e();a.Q=b.g();}
function Uf(a,b,c){var d,e,f,g;d=0;while(true){if(d>=a.dD.g())return a.dD.g();e=a.dD.d(d);f=b+d|0;if(e!=c.d(f)){g=a.dD;if(C6(g.d(d))!=c.d(f))break;}d=d+1|0;}return (-1);}
function BN(){S.call(this);this.w=null;}
function AEx(a,b,c){var d=new BN();CZ(d,a,b,c);return d;}
function CZ(a,b,c,d){Eb(a,c);a.w=b;a.gC(d);}
function Z_(a){return a.w;}
function T$(a,b){return !a.w.Z(b)&&!a.f.Z(b)?0:1;}
function Xf(a,b){return 1;}
function Om(a){var b;a.be=1;if(a.f!==null&&!a.f.be){b=a.f.cj();if(b!==null){a.f.be=1;a.f=b;}a.f.bB();}if(a.w!==null){if(!a.w.be){b=a.w.cj();if(b!==null){a.w.be=1;a.w=b;}a.w.bB();}else if(a.w instanceof CL&&a.w.br.ff)a.w=a.w.f;}}
function Bx(){BN.call(this);this.B=null;}
function ABU(a,b,c){var d=new Bx();Cr(d,a,b,c);return d;}
function Cr(a,b,c,d){CZ(a,b,c,d);a.B=b;}
function N7(a,b,c,d){var e,f;e=0;a:{while((b+a.B.bb()|0)<=d.q()){f=a.B.I(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.f.b(b,c,d);if(f>=0)break;b=b-a.B.bb()|0;e=e+(-1)|0;}return f;}
function Cd(){Bx.call(this);this.cn=null;}
function ACo(a,b,c,d){var e=new Cd();Gj(e,a,b,c,d);return e;}
function Gj(a,b,c,d,e){Cr(a,c,d,e);a.cn=b;}
function Qq(a,b,c,d){var e,f,g,h;e=a.cn.c1();f=a.cn.c3();g=0;while(true){if(g>=e){a:{while(g<f){if((b+a.B.bb()|0)>d.q())break a;h=a.B.I(b,c);if(h<1)break a;b=b+h|0;g=g+1|0;}}while(true){if(g<e)return (-1);h=a.f.b(b,c,d);if(h>=0)break;b=b-a.B.bb()|0;g=g+(-1)|0;}return h;}if((b+a.B.bb()|0)>d.q()){d.by=1;return (-1);}h=a.B.I(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}return (-1);}
function Jg(){Cd.call(this);}
function ADa(a,b,c,d){var e=new Jg();OJ(e,a,b,c,d);return e;}
function OJ(a,b,c,d,e){Gj(a,b,c,d,e);}
function Ub(a,b,c,d){var e,f,g,h;e=a.cn.c1();f=a.cn.c3();g=0;while(true){if(g>=e){a:{while(true){if(g>=f)break a;if((b+a.B.bb()|0)>d.q())break a;h=a.B.I(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}}return a.f.b(b,c,d);}if((b+a.B.bb()|0)>d.q()){d.by=1;return (-1);}h=a.B.I(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}return (-1);}
function Dg(){}
function B9(){CM.call(this);}
function AEy(a,b){var c=new B9();IE(c,a,b);return c;}
function AEz(a){var b=new B9();JZ(b,a);return b;}
function AEA(a){var b=new B9();Ig(b,a);return b;}
function IE(a,b,c){MN(a,b,c);}
function JZ(a,b){F7(a,b);}
function Ig(a,b){Ld(a,b);}
function CP(){B9.call(this);}
function AEB(a){var b=new CP();G4(b,a);return b;}
function G4(a,b){JZ(a,b);}
function Dw(){}
function Mm(){C5.call(this);}
function Fg(){var a=new Mm();VO(a);return a;}
function VO(a){I2(a);}
function EE(){var a=this;U.call(a);a.lo=null;a.k7=null;}
function AA9(a,b,c){var d=new EE();Vr(d,a,b,c);return d;}
function Vr(a,b,c,d){Df(a,b);a.lo=c;a.k7=d;}
function J0(){C.call(this);}
function LK(b,c){var d,e,$$je;a:{try{d=Qp(b,EC(c));}catch($$e){$$je=Bc($$e);if($$je instanceof BY){e=$$je;break a;}else{throw $$e;}}return d;}Cz().n(B(10));e.et();return 0;}
function Qp(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,$$je;FY();d=AEC;e=3;f=Ej(c);a:{try{g=0;}catch($$e){$$je=Bc($$e);h=$$je;break a;}b:{try{while(true){h=f.ek();if(h===null)break;i=h.cy(35);if(i>=0)h=h.ch(0,i);h=h.fw();if(!h.g())continue;if(h.fN(B(11))){j=B8(h,58);try{k=e;l=g;h=L4(j.C(0).c7());d=h;if(j.T()<=1){d=h;k=e;l=g;e=3;k=e;}else{d=h;k=e;l=g;e=Fs(j.C(1).fw());k=e;}d=h;l=g;k=e;g=0;l=g;d=h;continue;}catch($$e){$$je=Bc($$e);if($$je instanceof Br){}else{throw $$e;}}Cz().n(J().a(B(12)).a(j.C(0)).e());g=l;e=k;continue;}if
(d===AED){j=B8(h,32);m=0;while(m<j.T()){n=g+(b.cM()-e|0)|0;if(n>=0){o=b.dM(n,m);if(o!==null)o.lE(DE(j.C(m)));}m=m+1|0;}g=g+1|0;}else if(d===AEC){j=B8(h,32);m=0;while(m<j.T()){n=g+(b.cM()-e|0)|0;if(n>=0){o=b.dM(n,m);if(o!==null)o.lz(Fs(j.C(m)));}m=m+1|0;}g=g+1|0;}else if(d===AEE){c:{j=B8(h,32);if(g){p=g-1|0;q=0;while(true){if(q>=j.T())break c;b.lB(p,q,DE(j.C(q)));q=q+1|0;}}q=0;while(q<j.T()){b.jI(q,DE(j.C(q)));q=q+1|0;}}g=g+1|0;}else if(d===AEF){j=B8(h,32);try{b.km(Hq(j.C(0).c7()));}catch($$e){$$je=Bc($$e);if
($$je instanceof Br){break b;}else{throw $$e;}}g=g+1|0;}}}catch($$e){$$je=Bc($$e);h=$$je;break a;}f.bH();return 1;}try{G(ABw(J().a(B(13)).a(j.C(0)).e()));}catch($$e){$$je=Bc($$e);h=$$je;}}f.bH();G(h);}
function Ih(b,c){return b!=c?0:1;}
function TH(b,c){var d;d=b-c|0;return d!=1&&d!=(-1)?0:1;}
function M0(b,c){var d,e;d=b<=4?b:9-b|0;e=c<=4?c:9-c|0;if(d<e)c=b;return c;}
function JH(){I.call(this);this.lb=null;}
function ADx(a){var b=new JH();Yj(b,a);return b;}
function Yj(a,b){a.lb=b;Q(a);}
function Ob(a,b){return EO(b);}
function IA(){var a=this;I.call(a);a.d_=null;a.js=null;}
function ACD(a,b){var c=new IA();Yv(c,a,b);return c;}
function Yv(a,b,c){a.js=b;a.d_=c;Q(a);}
function AAr(a,b){return a.G^a.d_.bN(b);}
function WI(a){var b,c;b=J();c=a.d_.dr(0);while(c>=0){b.fC(CK(c));b.bt(124);c=a.d_.dr(c+1|0);}if(b.g()>0)b.iw(b.g()-1|0);return b.e();}
function DY(){var a=this;C.call(a);a.kS=null;a.gy=0.0;a.lt=0.0;a.cm=null;a.cK=null;a.d8=null;a.bQ=0;}
function AEG(a,b,c){var d=new DY();MO(d,a,b,c);return d;}
function MO(a,b,c,d){M(a);a.cm=B(14);B7();a.cK=AEH;a.d8=AEH;if(c<=0.0)G(Bz(J().a(B(15)).ij(c).e()));if(d>0.0){a.kS=b;a.gy=c;a.lt=d;return;}G(Bz(J().a(B(16)).ij(d).e()));}
function K9(a,b){if(b!==null){a.cK=b;a.fW(b);return a;}G(Bz(B(17)));}
function W6(a,b){return;}
function HO(a,b){if(b!==null){a.d8=b;a.ft(b);return a;}G(Bz(B(17)));}
function Xy(a,b){return;}
function FB(a,b,c,d){var e,f,g,$$je;if(!(a.bQ==2&&!d)&&a.bQ!=3){a.bQ=d?2:1;while(true){try{e=a.jv(b,c);}catch($$e){$$je=Bc($$e);if($$je instanceof U){f=$$je;G(TF(f));}else{throw $$e;}}if(e.dd())return e;if(e.dK()){if(d&&BR(b)){g=a.cK;B7();if(g===AEH)return BM(X(b));if(X(c)<=a.cm.g())return AEI;b.ep(BG(b)+X(b)|0);if(a.cK===AEJ)DR(c,a.cm);}return e;}if(e.hW()){g=a.cK;B7();if(g===AEH)return e;if(a.cK===AEJ){if(X(c)<a.cm.g())return AEI;DR(c,a.cm);}b.ep(BG(b)+e.g()|0);}else if(e.f2()){g=a.d8;B7();if(g===AEH)break;if
(a.d8===AEJ){if(X(c)<a.cm.g())return AEI;DR(c,a.cm);}b.ep(BG(b)+e.g()|0);}}return e;}G(C0());}
function Mz(a,b){if(a.bQ!=3&&a.bQ!=2)G(C0());a.bQ=3;return a.kH(b);}
function LC(a){a.bQ=0;a.kB();return a;}
function I6(a,b){var c,d,e;if(a.bQ&&a.bQ!=3)G(C0());if(!X(b))return Mv(0);if(a.bQ)LC(a);c=Mv(Bq(8,X(b)*a.gy|0));while(true){d=FB(a,b,c,0);if(d.dK())break;if(d.dd())c=En(a,c);if(!d.fU())continue;d.gZ();}e=FB(a,b,c,1);if(e.fU())e.gZ();while(true){e=Mz(a,c);if(e.dK())break;c=En(a,c);}G6(c);return c;}
function En(a,b){var c,d,e;c=E9(b);d=c.data;d=EM(c,Bq(8,d.length*2|0));e=O1(d);e.fb(BG(b));return e;}
function O7(a,b){Bh();return AEK;}
function UF(a){return;}
function Bw(){BN.call(this);}
function ABW(a,b,c){var d=new Bw();CA(d,a,b,c);return d;}
function CA(a,b,c,d){CZ(a,b,c,d);}
function Oy(a,b,c,d){var e;if(!a.w.x(d))return a.f.b(b,c,d);e=a.w.b(b,c,d);if(e>=0)return e;return a.f.b(b,c,d);}
function Nb(){Bw.call(this);}
function ACs(a,b,c){var d=new Nb();V4(d,a,b,c);return d;}
function V4(a,b,c,d){CA(a,b,c,d);Ea();b.t(AEL);}
function S4(a,b,c,d){var e;while(true){e=a.w.b(b,c,d);if(e<=0)break;b=e;}return a.f.b(b,c,d);}
function LH(){CE.call(this);}
function ADl(a,b){var c=new LH();Wa(c,a,b);return c;}
function Wa(a,b,c){Fc(a,b,c);}
function NB(a,b,c,d){var e,f,g,h;e=a.c6(d);if(e!==null&&(b+e.g()|0)<=d.q()){f=0;while(true){if(f>=e.g()){d.D(a.c2,e.g());return a.f.b(b+e.g()|0,c,d);}g=BI(BA(e.d(f)));h=b+f|0;h=BA(c.d(h));if(g!=BI(h))break;f=f+1|0;}return (-1);}return (-1);}
function Ix(){var a=this;I.call(a);a.h0=null;a.kK=null;}
function ABk(a,b){var c=new Ix();TE(c,a,b);return c;}
function TE(a,b,c){a.kK=b;a.h0=c;Q(a);}
function S7(a,b){return a.h0.j(b);}
function D0(){C.call(this);this.j3=null;}
var AEM=null;var AEN=null;function YT(){YT=Be(D0);AAe();}
function UC(a){var b=new D0();Gq(b,a);return b;}
function Gq(a,b){YT();M(a);a.j3=b;}
function AAe(){AEM=UC(B(18));AEN=UC(B(19));}
function Iy(){var a=this;I.call(a);a.h5=null;a.lu=null;}
function ABN(a,b){var c=new Iy();Ox(c,a,b);return c;}
function Ox(a,b,c){a.lu=b;a.h5=c;Q(a);}
function V_(a,b){return a.h5.j(b)?0:1;}
function Iz(){var a=this;I.call(a);a.ht=0;a.h3=null;a.iq=null;a.jG=null;}
function ACu(a,b,c,d){var e=new Iz();Th(e,a,b,c,d);return e;}
function Th(a,b,c,d,e){a.jG=b;a.ht=c;a.h3=d;a.iq=e;Q(a);}
function AAM(a,b){return !(a.ht^a.h3.j(b))&&!a.iq.j(b)?0:1;}
function Lt(){C.call(this);}
function RO(b){var c,d,e,f,g,h;c=0;d=1;while(true){e=b.hm.data;f=b.iR;b.iR=f+1|0;g=Qt(e[f]);h=(g%2|0)!=1?0:1;c=c+Ce(d,g/2|0)|0;d=d*46|0;if(!h)break;}return c;}
function Hm(b){var c,d;c=RO(b);d=c/2|0;if(c%2|0)d= -d;return d;}
function Qt(b){if(b<34)return b-32|0;if(b>=92)return (b-32|0)-2|0;return (b-32|0)-1|0;}
function L$(){var a=this;K.call(a);a.fA=0;a.eC=0;a.hM=0;}
function T(a,b){var c=new L$();SQ(c,a,b);return c;}
function AD0(a,b,c){var d=new L$();Yn(d,a,b,c);return d;}
function SQ(a,b,c){R(a);a.eC=c;a.fA=b;}
function Yn(a,b,c,d){R(a);a.hM=d;a.eC=c;a.fA=b;}
function VN(a){var b;b=ADy(a.fA);if(a.hM)b.K.d7(0,2048);b.y=a.eC;return b;}
function Ji(){var a=this;I.call(a);a.io=0;a.gJ=null;a.gV=null;a.ky=null;}
function ADX(a,b,c,d){var e=new Ji();V2(e,a,b,c,d);return e;}
function V2(a,b,c,d,e){a.ky=b;a.io=c;a.gJ=d;a.gV=e;Q(a);}
function W9(a,b){return !(a.io^a.gJ.j(b))&&!a.gV.j(b)?1:0;}
function IB(){var a=this;I.call(a);a.hz=0;a.g6=null;a.i8=null;a.kg=null;}
function ADQ(a,b,c,d){var e=new IB();Uu(e,a,b,c,d);return e;}
function Uu(a,b,c,d,e){a.kg=b;a.hz=c;a.g6=d;a.i8=e;Q(a);}
function Rm(a,b){return a.hz^a.g6.j(b)&&a.i8.j(b)?1:0;}
function GD(){Z.call(this);this.dP=null;}
function ADR(a){var b=new GD();Wg(b,a);return b;}
function Wg(a,b){var c,d;BH(a);c=J();d=0;while(d<b.g()){c.bt(BI(BA(b.d(d))));d=d+1|0;}a.dP=c.e();a.Q=c.g();}
function NG(a,b,c){var d;d=0;while(true){if(d>=a.dP.g())return a.dP.g();if(a.dP.d(d)!=BI(BA(c.d(b+d|0))))break;d=d+1|0;}return (-1);}
function IC(){var a=this;I.call(a);a.hb=0;a.gF=null;a.hs=null;a.kQ=null;}
function ACk(a,b,c,d){var e=new IC();O0(e,a,b,c,d);return e;}
function O0(a,b,c,d,e){a.kQ=b;a.hb=c;a.gF=d;a.hs=e;Q(a);}
function RP(a,b){return a.hb^a.gF.j(b)&&a.hs.j(b)?0:1;}
function Mp(){BN.call(this);}
function ACZ(a,b,c){var d=new Mp();PT(d,a,b,c);return d;}
function PT(a,b,c,d){CZ(a,b,c,d);}
function Z6(a,b,c,d){var e;e=d.q();if(e>b)return a.f.bf(b,e,c,d);return a.f.b(b,c,d);}
function Vs(a,b,c,d){var e;e=d.q();if(a.f.bf(b,e,c,d)>=0)return b;return (-1);}
function ID(){var a=this;I.call(a);a.iB=null;a.gQ=0;a.jb=null;}
function ABE(a,b,c){var d=new ID();Qc(d,a,b,c);return d;}
function Qc(a,b,c,d){a.jb=b;a.iB=c;a.gQ=d;Q(a);}
function Y5(a,b){return a.iB.j(b)&&a.gQ^a.jb.v.bN(b)?1:0;}
function Ln(){I.call(this);this.kW=null;}
function ADL(a){var b=new Ln();Nm(b,a);return b;}
function Nm(a,b){a.kW=b;Q(a);}
function YI(a,b){return MT(b);}
function Iw(){var a=this;I.call(a);a.hi=null;a.ja=0;a.gP=null;}
function ADO(a,b,c){var d=new Iw();NV(d,a,b,c);return d;}
function NV(a,b,c,d){a.gP=b;a.hi=c;a.ja=d;Q(a);}
function V$(a,b){return a.hi.j(b)&&a.ja^a.gP.v.bN(b)?0:1;}
function Bs(){var a=this;S.call(a);a.ff=0;a.c9=0;}
var AEL=null;function Ea(){Ea=Be(Bs);U7();}
function ACb(a){var b=new Bs();Ck(b,a);return b;}
function Ck(a,b){Ea();Bo(a);a.c9=b;}
function Qm(a,b,c,d){var e,f;e=d.ez(a.c9);d.fz(a.c9,b);f=a.f.b(b,c,d);if(f<0)d.fz(a.c9,e);return f;}
function Oa(a){return a.c9;}
function Rl(a,b){return 0;}
function U7(){AEL=AB0();}
function Fw(){Bs.call(this);}
function AEO(a){var b=new Fw();Ll(b,a);return b;}
function Ll(a,b){Ck(a,b);}
function RA(a,b,c,d){var e,f;e=a.c_();f=d.bD(e);if(f!=b)b=(-1);return b;}
function CH(){var a=this;C.call(a);a.o=null;a.E=0;}
function AEP(){var a=new CH();EY(a);return a;}
function ADr(a){var b=new CH();EJ(b,a);return b;}
function EY(a){EJ(a,16);}
function EJ(a,b){M(a);a.o=$rt_createCharArray(b);}
function H_(a,b){return a.fB(a.E,b);}
function J4(a,b,c){var d,e,f;if(b>=0&&b<=a.E){if(c===null)c=B(20);else if(c.H())return a;a.b1(a.E+c.g()|0);d=a.E-1|0;while(d>=b){a.o.data[d+c.g()|0]=a.o.data[d];d=d+(-1)|0;}a.E=a.E+c.g()|0;d=0;while(d<c.g()){e=a.o.data;f=b+1|0;e[b]=c.d(d);d=d+1|0;b=f;}return a;}G(Fg());}
function Il(a,b){return a.gX(b,10);}
function PI(a,b,c){return a.jB(a.E,b,c);}
function Yk(a,b,c,d){var e,f,g,h,i,j,k,l;e=1;if(c<0){e=0;c= -c;}a:{if(c<d){if(e)BC(a,b,b+1|0);else{BC(a,b,b+2|0);f=a.o.data;g=b+1|0;f[b]=45;b=g;}a.o.data[b]=D_(c,d);}else{h=1;i=1;j=2147483647/d|0;b:{while(true){k=Ce(h,d);if(k>c){k=h;break b;}i=i+1|0;if(k>j)break;h=k;}}if(!e)i=i+1|0;BC(a,b,b+i|0);if(e)l=b;else{f=a.o.data;l=b+1|0;f[b]=45;}while(true){if(k<=0)break a;f=a.o.data;g=l+1|0;f[l]=D_(c/k|0,d);c=c%k|0;k=k/d|0;l=g;}}}return a;}
function Kg(a,b){return a.iZ(a.E,b);}
function HA(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=BW(c,0.0);if(!d){BC(a,b,b+3|0);e=a.o.data;d=b+1|0;e[b]=48;e=a.o.data;f=d+1|0;e[d]=46;a.o.data[f]=48;return a;}if(!d){BC(a,b,b+4|0);e=a.o.data;d=b+1|0;e[b]=45;e=a.o.data;f=d+1|0;e[d]=48;e=a.o.data;d=f+1|0;e[f]=46;a.o.data[d]=48;return a;}if(isNaN(c)?1:0){BC(a,b,b+3|0);e=a.o.data;d=b+1|0;e[b]=78;e=a.o.data;f=d+1|0;e[d]=97;a.o.data[f]=78;return a;}if(!isFinite(c)?1:0){if(d>0){BC(a,b,b+8|0);d=b;}else{BC(a,b,b+9|0);e=a.o.data;d=b+1|0;e[b]=45;}e=a.o.data;f=d+
1|0;e[d]=73;e=a.o.data;d=f+1|0;e[f]=110;e=a.o.data;f=d+1|0;e[d]=102;e=a.o.data;d=f+1|0;e[f]=105;e=a.o.data;f=d+1|0;e[d]=110;e=a.o.data;d=f+1|0;e[f]=105;e=a.o.data;f=d+1|0;e[d]=116;a.o.data[f]=121;return a;}AB_();g=AEp;Hb(c,g);h=g.fT;i=g.fq;j=g.g$;k=1;l=1;if(j){j=1;l=2;}m=9;n=VF(h);if(n>0)m=m-n|0;if(i<7&&i>=(-3)){if(i>=0){k=i+1|0;m=Bq(m,k+1|0);i=0;}else if(i<0){h=h/AEl.data[ -i]|0;m=m-i|0;i=0;}}if(i){l=l+2|0;if(!(i>(-10)&&i<10))l=l+1|0;if(i<0)l=l+1|0;}if(i&&m==k)m=m+1|0;d=l+m|0;BC(a,b,b+d|0);if(!j)f=b;else{e
=a.o.data;f=b+1|0;e[b]=45;}o=100000000;p=0;while(p<m){if(o<=0)q=0;else{q=h/o|0;h=h%o|0;}e=a.o.data;d=f+1|0;e[f]=(48+q|0)&65535;k=k+(-1)|0;if(k)f=d;else{e=a.o.data;f=d+1|0;e[d]=46;}o=o/10|0;p=p+1|0;}if(i){e=a.o.data;d=f+1|0;e[f]=69;if(i>=0)f=d;else{i= -i;e=a.o.data;f=d+1|0;e[d]=45;}if(i<10)r=f;else{e=a.o.data;r=f+1|0;e[f]=(48+(i/10|0)|0)&65535;}a.o.data[r]=(48+(i%10|0)|0)&65535;}return a;}
function VF(b){var c,d,e,f;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;f=e*100|0;if(b%f|0)f=e;else c=c|2;if(!(b%(f*10|0)|0))c=c|1;return c;}
function F9(a,b){return a.fQ(a.E,b);}
function F5(a,b,c){BC(a,b,b+1|0);a.o.data[b]=c;return a;}
function L8(a,b){return a.hO(a.E,b);}
function Kl(a,b,c){return a.fB(b,c===null?B(20):c.e());}
function ES(a,b){var c,d;if(a.o.data.length>=b)return;if(a.o.data.length>=1073741823)c=2147483647;else{d=a.o.data.length*2|0;c=Bq(b,Bq(d,5));}a.o=EM(a.o,c);}
function EF(a){return Fa(a.o,0,a.E);}
function FR(a){return a.E;}
function Hc(a,b){if(b>=0&&b<a.E)return a.o.data[b];G(Cq());}
function F0(a,b,c,d){return a.e8(a.E,b,c,d);}
function EG(a,b,c,d,e){var f,g,h,i,j;BC(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.o.data;i=b+1|0;j=d+1|0;h[b]=g[d];b=i;d=j;}return a;}
function EU(a,b){return a.fZ(b,0,b.data.length);}
function K3(a,b,c,d,e){var f,g,h,i;if(b>c)G(Bp(B(21)));while(b<c){f=d.data;g=e+1|0;h=a.o.data;i=b+1|0;f[e]=h[b];e=g;b=i;}}
function FF(a,b){a.E=b;}
function Lc(a,b){var c,d,e;if(b>=0&&b<a.E){a.E=a.E-1|0;while(b<a.E){c=a.o.data;d=a.o.data;e=b+1|0;c[b]=d[e];b=e;}return a;}G(Fg());}
function LG(a,b,c){var d,e,f,g,h,i;d=BW(b,c);if(d<=0&&b<=a.E){if(!d)return a;e=a.E-c|0;a.E=a.E-(c-b|0)|0;f=0;while(f<e){g=a.o.data;d=b+1|0;h=a.o.data;i=c+1|0;g[b]=h[c];f=f+1|0;b=d;c=i;}return a;}G(Fg());}
function BC(a,b,c){var d,e;d=a.E-b|0;a.b1((a.E+c|0)-b|0);e=d-1|0;while(e>=0){a.o.data[c+e|0]=a.o.data[b+e|0];e=e+(-1)|0;}a.E=a.E+(c-b|0)|0;}
function Dd(){}
function GU(){CH.call(this);}
function GV(a){var b=new GU();Zq(b,a);return b;}
function J(){var a=new GU();YK(a);return a;}
function Zq(a,b){EJ(a,b);}
function YK(a){EY(a);}
function Or(a,b){H_(a,b);return a;}
function Pg(a,b){Il(a,b);return a;}
function Xg(a,b){Kg(a,b);return a;}
function Od(a,b){F9(a,b);return a;}
function Tj(a,b,c,d){F0(a,b,c,d);return a;}
function UZ(a,b){EU(a,b);return a;}
function Oz(a,b){L8(a,b);return a;}
function Vq(a,b,c){HA(a,b,c);return a;}
function S0(a,b,c,d,e){EG(a,b,c,d,e);return a;}
function Zw(a,b,c){Kl(a,b,c);return a;}
function P5(a,b,c){F5(a,b,c);return a;}
function XO(a,b,c){LG(a,b,c);return a;}
function VK(a,b){Lc(a,b);return a;}
function ZP(a,b,c){J4(a,b,c);return a;}
function Z2(a,b){FF(a,b);}
function UQ(a,b,c,d,e){K3(a,b,c,d,e);}
function ZH(a,b,c,d,e){return a.lT(b,c,d,e);}
function Ud(a,b,c,d){return a.jM(b,c,d);}
function Q5(a){return FR(a);}
function RE(a){return EF(a);}
function Z7(a,b){ES(a,b);}
function Ow(a,b,c){return a.j5(b,c);}
function NC(a,b,c){return a.lk(b,c);}
function Xj(a,b,c){return a.k$(b,c);}
function AAu(a,b,c){return a.j1(b,c);}
function DF(){Ee.call(this);}
function AAU(){var a=new DF();Mc(a);return a;}
function Mc(a){Jn(a);}
function KJ(a){return Jf(a).J(48,57);}
function KX(){U.call(this);}
function ABO(){var a=new KX();ZR(a);return a;}
function ZR(a){BB(a);}
function KK(){var a=this;W.call(a);a.fH=null;a.e6=null;}
function E0(a,b){var c=new KK();Y1(c,a,b);return c;}
function Y1(a,b,c){BD(a);a.fH=b;a.e6=c;}
function Qf(a,b,c,d){var e;e=a.fH.b(b,c,d);if(e<0)e=a.e6.b(b,c,d);if(e>=0)return e;return (-1);}
function Qw(a,b){a.f=b;a.e6.t(b);a.fH.t(b);}
function RU(a,b){return 1;}
function Rd(a,b){return 1;}
function Gb(){}
function Dt(){}
function E8(){}
function BU(){C.call(this);}
function AEQ(){var a=new BU();CR(a);return a;}
function CR(a){M(a);}
function OQ(a,b,c,d){var e,f,g;e=0;while(e<d){f=b.data;g=c+1|0;a.e1(f[c]);e=e+1|0;c=g;}}
function MA(){var a=this;BU.call(a);a.b5=null;a.cs=0;}
function AAY(){var a=new MA();Z1(a);return a;}
function AER(a){var b=new MA();H5(b,a);return b;}
function Z1(a){H5(a,32);}
function H5(a,b){CR(a);a.b5=$rt_createByteArray(b);}
function OP(a,b){var c,d;ER(a,a.cs+1|0);c=a.b5.data;d=a.cs;a.cs=d+1|0;c[d]=b<<24>>24;}
function Qa(a,b,c,d){var e,f,g,h,i;ER(a,a.cs+d|0);e=0;while(e<d){f=b.data;g=a.b5.data;h=a.cs;a.cs=h+1|0;i=c+1|0;g[h]=f[c];e=e+1|0;c=i;}}
function ER(a,b){var c;if(a.b5.data.length<b){c=Bq(b,(a.b5.data.length*3|0)/2|0);a.b5=FQ(a.b5,c);}}
function W7(a,b){return ABJ(a.b5,0,a.cs,b);}
function GX(){var a=this;W.call(a);a.h_=null;a.jr=0;}
function AAX(a){var b=new GX();Wz(b,a);return b;}
function Wz(a,b){BD(a);a.h_=b.c8();a.jr=b.G;}
function Vw(a,b){a.f=b;}
function XY(a,b,c,d){var e,f,g,h,i,j,k;e=d.bw();f=d.q();g=b+1|0;h=BW(g,f);if(h>0){d.by=1;return (-1);}i=c.d(b);if(!a.h_.j(i))return (-1);if(Bm(i)){if(h<0){j=c.d(g);if(Bt(j))return (-1);}}else if(Bt(i)&&b>e){k=c.d(b-1|0);if(Bm(k))return (-1);}return a.f.b(g,c,d);}
function Mo(){Bw.call(this);}
function ACO(a,b,c){var d=new Mo();R$(d,a,b,c);return d;}
function R$(a,b,c,d){CA(a,b,c,d);}
function Zb(a,b,c,d){var e;if(!a.w.x(d))return a.f.b(b,c,d);e=a.f.b(b,c,d);if(e>=0)return e;return a.w.b(b,c,d);}
function Cp(){Bs.call(this);}
function ADn(){var a=new Cp();Wh(a);return a;}
function Wh(a){Ck(a,0);}
function Xu(a,b,c,d){if(d.ig()!=1&&b!=d.q())return (-1);d.jK();d.fz(0,b);return b;}
function Ib(){B9.call(this);}
function TF(a){var b=new Ib();Ot(b,a);return b;}
function Ot(a,b){Ig(a,b);}
function J6(){Bw.call(this);}
function AA7(a,b,c){var d=new J6();Zu(d,a,b,c);return d;}
function Zu(a,b,c,d){CA(a,b,c,d);Ea();b.t(AEL);}
function OO(a,b,c,d){var e,f;e=a.w.b(b,c,d);if(e<0)return (-1);if(e>b){while(true){f=a.w.b(e,c,d);if(f<=e)break;e=f;}b=e;}return a.f.b(b,c,d);}
function Kq(){Z.call(this);}
function Cu(a){var b=new Kq();Os(b,a);return b;}
function Os(a,b){Hs(a,b);a.Q=0;}
function UA(a,b,c){return 0;}
function Vt(a,b,c,d){var e,f,g,h,i;e=d.q();f=d.bw();while(true){g=BW(b,e);if(g>0)return (-1);if(g<0){h=c.d(b);if(Bt(h)&&b>f){i=c.d(b-1|0);if(Bm(i)){b=b+1|0;continue;}}}if(a.f.b(b,c,d)>=0)break;b=b+1|0;}return b;}
function SD(a,b,c,d,e){var f,g,h,i;f=e.q();g=e.bw();while(true){if(c<b)return (-1);if(c<f){h=d.d(c);if(Bt(h)&&c>g){i=d.d(c-1|0);if(Bm(i)){c=c+(-1)|0;continue;}}}if(a.f.b(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function Pc(a,b){return 0;}
function Im(){CH.call(this);}
function ST(){var a=new Im();XF(a);return a;}
function XF(a){EY(a);}
function Vx(a,b){F9(a,b);return a;}
function Za(a,b,c,d){F0(a,b,c,d);return a;}
function UE(a,b){EU(a,b);return a;}
function Ok(a,b,c,d,e){EG(a,b,c,d,e);return a;}
function XN(a,b,c){F5(a,b,c);return a;}
function OU(a,b){FF(a,b);}
function VJ(a,b,c,d,e){return a.jF(b,c,d,e);}
function Ri(a,b,c,d){return a.lU(b,c,d);}
function NW(a,b){return Hc(a,b);}
function ZW(a){return FR(a);}
function Ry(a){return EF(a);}
function R4(a,b){ES(a,b);}
function VA(a,b,c){return a.lI(b,c);}
function CD(){var a=this;C.call(a);a.f0=0;a.L=0;a.bJ=0;a.de=0;}
function AES(a){var b=new CD();Fz(b,a);return b;}
function Fz(a,b){M(a);a.de=(-1);a.f0=b;a.bJ=b;}
function Kc(a){return a.f0;}
function BG(a){return a.L;}
function FG(a,b){if(b>=0&&b<=a.bJ){a.L=b;if(b<a.de)a.de=0;return a;}G(Bz(J().a(B(22)).m(b).a(B(23)).m(a.bJ).a(B(24)).e()));}
function KC(a){return a.bJ;}
function IV(a){a.L=0;a.bJ=a.f0;a.de=(-1);return a;}
function MF(a){a.bJ=a.L;a.L=0;a.de=(-1);return a;}
function X(a){return a.bJ-a.L|0;}
function BR(a){return a.L>=a.bJ?0:1;}
function Gu(){I.call(this);this.jn=null;}
function AA3(a){var b=new Gu();Zh(b,a);return b;}
function Zh(a,b){a.jn=b;Q(a);}
function YV(a,b){return KD(b);}
function Da(){C.call(this);}
var AET=null;var AEU=null;var AEV=null;function ACa(){ACa=Be(Da);Uq();}
function ADs(){var a=new Da();KF(a);return a;}
function KF(a){ACa();M(a);}
function LB(a,b){var c,d,e;c=0;while(true){if(c>=AEV.data.length)G(AA9(B(25),B(25),b));d=AEV.data[c];e=d.data;if(b.bS(e[0]))break;c=c+1|0;}return e[1];}
function Uq(){var b,c,d,e;AET=ACH();AEU=ADK();b=F($rt_arraycls(C),194);c=b.data;d=F(C,2);e=d.data;e[0]=B(26);e[1]=ADI();c[0]=d;d=F(C,2);e=d.data;e[0]=B(27);e[1]=AAZ();c[1]=d;d=F(C,2);e=d.data;e[0]=B(28);e[1]=ACz();c[2]=d;d=F(C,2);e=d.data;e[0]=B(29);e[1]=ADb();c[3]=d;d=F(C,2);e=d.data;e[0]=B(30);e[1]=AEU;c[4]=d;d=F(C,2);e=d.data;e[0]=B(31);e[1]=AAU();c[5]=d;d=F(C,2);e=d.data;e[0]=B(32);e[1]=ADC();c[6]=d;d=F(C,2);e=d.data;e[0]=B(33);e[1]=ABr();c[7]=d;d=F(C,2);e=d.data;e[0]=B(34);e[1]=ABb();c[8]=d;d=F(C,2);e=
d.data;e[0]=B(35);e[1]=ABF();c[9]=d;d=F(C,2);e=d.data;e[0]=B(36);e[1]=ACB();c[10]=d;d=F(C,2);e=d.data;e[0]=B(37);e[1]=ABx();c[11]=d;d=F(C,2);e=d.data;e[0]=B(38);e[1]=ABR();c[12]=d;d=F(C,2);e=d.data;e[0]=B(39);e[1]=AAV();c[13]=d;d=F(C,2);e=d.data;e[0]=B(40);e[1]=AC1();c[14]=d;d=F(C,2);e=d.data;e[0]=B(41);e[1]=ACt();c[15]=d;d=F(C,2);e=d.data;e[0]=B(42);e[1]=AAS();c[16]=d;d=F(C,2);e=d.data;e[0]=B(43);e[1]=ACn();c[17]=d;d=F(C,2);e=d.data;e[0]=B(44);e[1]=AAT();c[18]=d;d=F(C,2);e=d.data;e[0]=B(45);e[1]=ABM();c[19]
=d;d=F(C,2);e=d.data;e[0]=B(46);e[1]=ADo();c[20]=d;d=F(C,2);e=d.data;e[0]=B(47);e[1]=AB5();c[21]=d;d=F(C,2);e=d.data;e[0]=B(48);e[1]=AA5();c[22]=d;d=F(C,2);e=d.data;e[0]=B(49);e[1]=ACw();c[23]=d;d=F(C,2);e=d.data;e[0]=B(50);e[1]=ACl();c[24]=d;d=F(C,2);e=d.data;e[0]=B(51);e[1]=ADi();c[25]=d;d=F(C,2);e=d.data;e[0]=B(52);e[1]=ABL();c[26]=d;d=F(C,2);e=d.data;e[0]=B(53);e[1]=AB4();c[27]=d;d=F(C,2);e=d.data;e[0]=B(54);e[1]=AET;c[28]=d;d=F(C,2);e=d.data;e[0]=B(55);e[1]=ABf();c[29]=d;d=F(C,2);e=d.data;e[0]=B(56);e[1]
=ABt();c[30]=d;d=F(C,2);e=d.data;e[0]=B(57);e[1]=AET;c[31]=d;d=F(C,2);e=d.data;e[0]=B(58);e[1]=AAO();c[32]=d;d=F(C,2);e=d.data;e[0]=B(59);e[1]=AEU;c[33]=d;d=F(C,2);e=d.data;e[0]=B(60);e[1]=AC2();c[34]=d;d=F(C,2);e=d.data;e[0]=B(61);e[1]=H(0,127);c[35]=d;d=F(C,2);e=d.data;e[0]=B(62);e[1]=H(128,255);c[36]=d;d=F(C,2);e=d.data;e[0]=B(63);e[1]=H(256,383);c[37]=d;d=F(C,2);e=d.data;e[0]=B(64);e[1]=H(384,591);c[38]=d;d=F(C,2);e=d.data;e[0]=B(65);e[1]=H(592,687);c[39]=d;d=F(C,2);e=d.data;e[0]=B(66);e[1]=H(688,767);c[40]
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
=d;d=F(C,2);e=d.data;e[0]=B(176);e[1]=H(65056,65071);c[150]=d;d=F(C,2);e=d.data;e[0]=B(177);e[1]=H(65072,65103);c[151]=d;d=F(C,2);e=d.data;e[0]=B(178);e[1]=H(65104,65135);c[152]=d;d=F(C,2);e=d.data;e[0]=B(179);e[1]=H(65136,65279);c[153]=d;d=F(C,2);e=d.data;e[0]=B(180);e[1]=H(65280,65519);c[154]=d;d=F(C,2);e=d.data;e[0]=B(181);e[1]=H(0,1114111);c[155]=d;d=F(C,2);e=d.data;e[0]=B(182);e[1]=ABz();c[156]=d;d=F(C,2);e=d.data;e[0]=B(183);e[1]=T(0,1);c[157]=d;d=F(C,2);e=d.data;e[0]=B(184);e[1]=Dc(62,1);c[158]=d;d=F(C,
2);e=d.data;e[0]=B(185);e[1]=T(1,1);c[159]=d;d=F(C,2);e=d.data;e[0]=B(186);e[1]=T(2,1);c[160]=d;d=F(C,2);e=d.data;e[0]=B(187);e[1]=T(3,0);c[161]=d;d=F(C,2);e=d.data;e[0]=B(188);e[1]=T(4,0);c[162]=d;d=F(C,2);e=d.data;e[0]=B(189);e[1]=T(5,1);c[163]=d;d=F(C,2);e=d.data;e[0]=B(190);e[1]=Dc(448,1);c[164]=d;d=F(C,2);e=d.data;e[0]=B(191);e[1]=T(6,1);c[165]=d;d=F(C,2);e=d.data;e[0]=B(192);e[1]=T(7,0);c[166]=d;d=F(C,2);e=d.data;e[0]=B(193);e[1]=T(8,1);c[167]=d;d=F(C,2);e=d.data;e[0]=B(194);e[1]=Dc(3584,1);c[168]=d;d
=F(C,2);e=d.data;e[0]=B(195);e[1]=T(9,1);c[169]=d;d=F(C,2);e=d.data;e[0]=B(196);e[1]=T(10,1);c[170]=d;d=F(C,2);e=d.data;e[0]=B(197);e[1]=T(11,1);c[171]=d;d=F(C,2);e=d.data;e[0]=B(198);e[1]=Dc(28672,0);c[172]=d;d=F(C,2);e=d.data;e[0]=B(199);e[1]=T(12,0);c[173]=d;d=F(C,2);e=d.data;e[0]=B(200);e[1]=T(13,0);c[174]=d;d=F(C,2);e=d.data;e[0]=B(201);e[1]=T(14,0);c[175]=d;d=F(C,2);e=d.data;e[0]=B(202);e[1]=ADt(983040,1,1);c[176]=d;d=F(C,2);e=d.data;e[0]=B(203);e[1]=T(15,0);c[177]=d;d=F(C,2);e=d.data;e[0]=B(204);e[1]
=T(16,1);c[178]=d;d=F(C,2);e=d.data;e[0]=B(205);e[1]=T(18,1);c[179]=d;d=F(C,2);e=d.data;e[0]=B(206);e[1]=AD0(19,0,1);c[180]=d;d=F(C,2);e=d.data;e[0]=B(207);e[1]=Dc(1643118592,1);c[181]=d;d=F(C,2);e=d.data;e[0]=B(208);e[1]=T(20,0);c[182]=d;d=F(C,2);e=d.data;e[0]=B(209);e[1]=T(21,0);c[183]=d;d=F(C,2);e=d.data;e[0]=B(210);e[1]=T(22,0);c[184]=d;d=F(C,2);e=d.data;e[0]=B(211);e[1]=T(23,0);c[185]=d;d=F(C,2);e=d.data;e[0]=B(212);e[1]=T(24,1);c[186]=d;d=F(C,2);e=d.data;e[0]=B(213);e[1]=Dc(2113929216,1);c[187]=d;d=F(C,
2);e=d.data;e[0]=B(214);e[1]=T(25,1);c[188]=d;d=F(C,2);e=d.data;e[0]=B(215);e[1]=T(26,0);c[189]=d;d=F(C,2);e=d.data;e[0]=B(216);e[1]=T(27,0);c[190]=d;d=F(C,2);e=d.data;e[0]=B(217);e[1]=T(28,1);c[191]=d;d=F(C,2);e=d.data;e[0]=B(218);e[1]=T(29,0);c[192]=d;d=F(C,2);e=d.data;e[0]=B(219);e[1]=T(30,0);c[193]=d;AEV=b;}
function Gn(){K.call(this);}
function AA5(){var a=new Gn();Sk(a);return a;}
function Sk(a){R(a);}
function Wu(a){var b;b=ACe(a);b.y=1;return b;}
function Ci(){var a=this;W.call(a);a.db=0;a.fu=null;a.eM=null;a.eD=0;}
function ADW(a,b){var c=new Ci();ET(c,a,b);return c;}
function ET(a,b,c){BD(a);a.db=1;a.eM=b;a.eD=c;}
function YM(a,b){a.f=b;}
function Qx(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;e=$rt_createIntArray(4);f=0;g=d.q();if(b>=g)return (-1);h=a.gc(b,c,g);i=b+a.db|0;j=KT(h);if(j===null){k=e.data;l=1;k[f]=h;}else{l=j.data.length;Gr(j,0,e,0,l);l=f+l|0;}a:{if(i<g){m=a.gc(i,c,g);while(l<4){if(!Q_(m)){k=e.data;n=l+1|0;k[l]=m;}else{k=KT(m).data;if(k.length!=2){o=e.data;n=l+1|0;o[l]=k[0];}else{o=e.data;m=l+1|0;o[l]=k[0];n=m+1|0;o[m]=k[1];}}i=i+a.db|0;if(i>=g){l=n;break a;}m=a.gc(i,c,g);l=n;}}}if(l!=a.eD)return (-1);p=0;while(true){if(p>=l)return a.f.b(i,
c,d);if(e.data[p]!=a.eM.data[p])break;p=p+1|0;}return (-1);}
function FN(a){var b,c;if(a.fu===null){b=J();c=0;while(c<a.eD){b.fC(CK(a.eM.data[c]));c=c+1|0;}a.fu=b.e();}return a.fu;}
function YA(a,b,c,d){var e,f,g,h,i;a.db=1;if(b>=(d-1|0))e=c.d(b);else{f=b+1|0;e=c.d(b);g=c.d(f);if(CT(e,g)){h=$rt_createCharArray(2);i=h.data;i[0]=e;i[1]=g;e=Iu(h,0);a.db=2;}}return e;}
function ZG(a,b){var c,d;a:{if(b instanceof Ci){c=b;if(!FN(c).bS(FN(a))){d=0;break a;}}d=1;}return d;}
function SC(a,b){return 1;}
function H7(){Ci.call(this);}
function ADP(a,b){var c=new H7();RQ(c,a,b);return c;}
function RQ(a,b,c){ET(a,b,c);}
function CO(){var a=this;C.call(a);a.g7=null;a.kL=0;}
function AEW(a,b){var c=new CO();FS(c,a,b);return c;}
function FS(a,b,c){M(a);a.g7=b;a.kL=c;}
function MK(a){return a.g7;}
function J5(b,c){var d,e,f,g,h;d=b.j7();if(d===null)G(Bz(J().a(B(220)).a(b.bX()).e()));e=d.data;f=e.length;g=0;while(true){if(g>=f)G(Bz(J().a(B(221)).a(b.bX()).a(B(222)).ib(c).a(B(223)).e()));h=e[g];if(MK(h).bS(c))break;g=g+1|0;}return h;}
function B$(){CO.call(this);}
var AEX=null;var AEY=null;var AEZ=null;var AE0=null;function DT(){DT=Be(B$);Qi();}
function KI(a,b){var c=new B$();Hg(c,a,b);return c;}
function RG(){DT();return AE0.dI();}
function Hq(b){DT();return J5(D(B$),b);}
function Hg(a,b,c){DT();FS(a,b,c);}
function Qi(){var b,c;AEX=KI(B(224),0);AEY=KI(B(225),1);AEZ=KI(B(226),2);b=F(B$,3);c=b.data;c[0]=AEX;c[1]=AEY;c[2]=AEZ;AE0=b;}
function CC(){CP.call(this);}
function AE1(a){var b=new CC();FM(b,a);return b;}
function FM(a,b){G4(a,b);}
function K4(){CC.call(this);}
function AE2(a){var b=new K4();SB(b,a);return b;}
function SB(a,b){FM(a,b);}
function My(){Bs.call(this);}
function AA0(){var a=new My();No(a);return a;}
function No(a){Ck(a,(-1));}
function SU(a,b,c,d){return b;}
function J7(){K.call(this);}
function ACz(){var a=new J7();Q1(a);return a;}
function Q1(a){R(a);}
function UX(a){return By().J(0,127);}
function D$(){W.call(this);}
function ADw(a,b){var c=new D$();HP(c,a,b);return c;}
function HP(a,b,c){H0(a,b,c);}
function Qy(a,b,c,d){var e,f,g,h,i;e=d.bD(a.A);d.D(a.A,b);f=a.O.T();g=0;while(true){if(g>=f){d.D(a.A,e);return (-1);}h=a.O.C(g);i=h.b(b,c,d);if(i>=0)break;g=g+1|0;}return i;}
function Ta(a,b){var c;c=b.bD(a.A);return !c?0:1;}
function BT(){D$.call(this);}
function ABg(a,b){var c=new BT();Dh(c,a,b);return c;}
function Dh(a,b,c){HP(a,b,c);}
function TV(a,b,c,d){var e,f,g,h,i;e=d.bD(a.A);d.D(a.A,b);f=a.O.T();g=0;while(g<f){h=a.O.C(g);i=h.b(b,c,d);if(i>=0)return a.f.b(a.br.bu(),c,d);g=g+1|0;}d.D(a.A,e);return (-1);}
function Sz(a,b){a.f=b;}
function GN(){BT.call(this);}
function ACh(a,b){var c=new GN();WA(c,a,b);return c;}
function WA(a,b,c){Dh(a,b,c);}
function QK(a,b,c,d){var e,f,g,h;e=a.O.T();f=0;while(f<e){g=a.O.C(f);h=g.b(b,c,d);if(h>=0)return a.f.b(b,c,d);f=f+1|0;}return (-1);}
function WZ(a,b){return 0;}
function Cy(){C.call(this);this.k5=null;}
function AE3(){var a=new Cy();EN(a);return a;}
function AE4(a){var b=new Cy();Lq(b,a);return b;}
function EN(a){Lq(a,ACc());}
function Lq(a,b){M(a);a.k5=b;}
function M1(){var a=this;Cy.call(a);a.cY=null;a.ey=0;}
function EC(a){var b=new M1();TC(b,a);return b;}
function TC(a,b){EN(a);if(b!==null){a.cY=b;return;}G(RD());}
function Ty(a,b,c,d){var e,f,g,h,i,j;MP(a);if(a.ey>=a.cY.g())return (-1);e=V(a.cY.g()-a.ey|0,d);f=0;while(f<e){g=b.data;h=c+1|0;i=a.cY;j=a.ey;a.ey=j+1|0;g[c]=i.d(j);f=f+1|0;c=h;}return e;}
function Np(a){a.cY=null;}
function MP(a){if(a.cY!==null)return;G(PE());}
function Ku(){BT.call(this);}
function AAW(a,b){var c=new Ku();Vp(c,a,b);return c;}
function Vp(a,b,c){Dh(a,b,c);}
function Q$(a,b,c,d){var e,f,g;e=a.O.T();f=0;while(true){if(f>=e)return a.f.b(b,c,d);g=a.O.C(f);if(g.b(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function VQ(a,b){return 0;}
function Fo(){}
function HR(){var a=this;C.call(a);a.eh=0;a.im=0;a.is=0;a.gK=0;a.dg=null;}
function ABm(a){var b=new HR();Rk(b,a);return b;}
function Rk(a,b){a.dg=b;M(a);a.im=a.dg.cb;a.is=a.dg.T();a.gK=(-1);}
function O$(a){return a.eh>=a.is?0:1;}
function Ww(a){var b,c;Jl(a);a.gK=a.eh;b=a.dg;c=a.eh;a.eh=c+1|0;return b.C(c);}
function Jl(a){if(a.im>=a.dg.cb)return;G(ABO());}
function Fk(){}
function DJ(){}
function D5(){}
function Fy(){}
function D1(){}
function JI(){}
function Mf(b){var c,d;c=b.lastChild;while(c!==null){d=c.previousSibling;if(c.nodeType!=2)b.removeChild(c);c=d;}return b;}
function IZ(){var a=this;C.call(a);a.gO=null;a.iL=Long_ZERO;a.iP=0.0;}
function ABB(a,b){var c=new IZ();Yd(c,a,b);return c;}
function Pp(b,c){var d,e,$$je;a:{try{d=Yu(b,EC(c));}catch($$e){$$je=Bc($$e);if($$je instanceof BY){e=$$je;break a;}else{throw $$e;}}return d;}Cz().n(B(227));e.et();return null;}
function Yu(b,c){var d,e,f,g,h,i,$$je;d=BX();e=Ej(c);a:{while(true){try{f=e.ek();if(f===null)break a;g=B8(f,32);if(!f.ej(B(228))&&g.T()>=2){h=g.C(0).c7();if(h.g()==2&&b.cy(h.d(0))>=0&&b.cy(h.d(1))>=0){i=FU(g.C(1));d.bo(ABB(h,i));}}continue;}catch($$e){$$je=Bc($$e);f=$$je;}}e.bH();G(f);}e.bH();TQ(d);return d;}
function TQ(b){var c,d,e;c=Long_ZERO;d=b.X();while(d.Y()){e=d.V();c=Long_add(c,e.dt());}d=b.X();while(d.Y()){e=d.V();e.iP=Long_toNumber(e.dt())/Long_toNumber(c);}}
function Yd(a,b,c){M(a);a.gO=b;a.iL=c;}
function TT(a){return a.gO;}
function AAi(a){return a.iL;}
function X$(a){return a.iP;}
function B5(){}
function Ha(){var a=this;Ct.call(a);a.gn=0;a.en=0;}
function ABQ(a,b){var c=new Ha();Yz(c,a,b);return c;}
function Yz(a,b,c){Eo(a);a.gn=b;a.en=c;}
function WG(a){return a.gn;}
function W0(a){return a.en;}
function PD(a){return J().a(B(229)).m(a.gn).a(B(230)).a(a.en==2147483647?B(25):ACW(a.en).e()).a(B(231)).e();}
function DV(){U.call(this);}
function AC5(){var a=new DV();GM(a);return a;}
function GM(a){BB(a);}
function MJ(){DV.call(this);}
function Gw(){var a=new MJ();YZ(a);return a;}
function YZ(a){GM(a);}
function GR(){I.call(this);this.jp=null;}
function ABi(a){var b=new GR();U2(b,a);return b;}
function U2(a,b){a.jp=b;Q(a);}
function QE(a,b){return Gv(b);}
function Hu(){C.call(this);}
function IY(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(Cv());}return b.data.length;}
function I4(b,c){if(b===null)G(RD());if(b===D($rt_voidcls()))G(Cv());if(c<0)G(ADk());return X8(b.lv(),c);}
function X8(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
function Ij(){C.call(this);}
function ABj(){var a=new Ij();RH(a);return a;}
function RH(a){M(a);}
function JP(){C.call(this);}
function D2(){DY.call(this);}
function AE5(a,b,c){var d=new D2();Id(d,a,b,c);return d;}
function Id(a,b,c,d){MO(a,b,c,d);}
function WK(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=$rt_createByteArray(V(X(b),512));e=0;f=0;g=$rt_createCharArray(V(X(c),512));a:{while(true){if((e+32|0)>f&&BR(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=V(X(b)+j|0,i.length);b.ln(d,j,f-j|0);e=0;}if(!BR(c)){if(!BR(b)&&e>=f){Bh();k=AEK;}else{Bh();k=AEI;}break a;}i=g.data;l=V(X(c),i.length);m=ABP(b,c);k=a.kp(d,e,f,g,0,l,m);e=m.iQ;if(k===null&&0==m.fa){Bh();k=AEK;}j=m.fa;c.kZ(g,0,j);if(k!==null)break;}}b.ep(BG(b)-(f-e|0)|0);return k;}
function HL(){D2.call(this);}
function AB3(a){var b=new HL();Z3(b,a);return b;}
function Z3(a,b){Id(a,b,0.3333333432674408,0.5);}
function Yf(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(h.dq())break a;Bh();i=AEK;break a;}n=k+1|0;o=j[k];if(!Cj(a,o)){c=n+(-2)|0;i=BM(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|o&63)&65535;k=n;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(h.dq())break a;Bh();i=AEK;break a;}p=k+1|0;o=j[k];k=p+1|0;q=j[p];if(!Cj(a,o))break b;if(!Cj(a,q))break b;r
=((l&15)<<12|(o&63)<<6|q&63)&65535;if(D3(r)){c=k+(-3)|0;i=BM(3);break a;}j=e.data;m=f+1|0;j[f]=r;}else{if((l&248)!=240){c=k+(-1)|0;i=BM(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(h.dq())break a;Bh();i=AEK;break a;}if((f+2|0)>g){c=k+(-1)|0;if(h.dE(2))break a;Bh();i=AEI;break a;}p=k+1|0;o=j[k];m=p+1|0;q=j[p];k=m+1|0;s=j[m];if(!Cj(a,o))break c;if(!Cj(a,q))break c;if(!Cj(a,s))break c;j=e.data;t=(l&7)<<18|(o&63)<<12|(q&63)<<6|s&63;p=f+1|0;j[f]=CQ(t);m=p+1|0;j[p]=CG(t);}c=k;f=m;}break a;}c=k+(-3)|0;i=BM(1);break a;}c
=k+(-3)|0;i=BM(1);}h.gb(c);h.eK(f);return i;}
function Cj(a,b){return (b&192)!=128?0:1;}
function H2(){CC.call(this);}
function AE6(a){var b=new H2();R8(b,a);return b;}
function R8(a,b){FM(a,b);}
function H1(){K.call(this);}
function ACn(){var a=new H1();R9(a);return a;}
function R9(a){R(a);}
function Uh(a){var b;b=ABn(a);b.y=1;return b;}
function FC(){}
function DA(){}
function Dl(){C.call(this);}
function AE7(){var a=new Dl();Ly(a);return a;}
function Ly(a){M(a);}
function UY(a,b){var c,d,e,f;c=b.data;d=a.T();e=c.length;if(e<d)b=I4(Cf(b).eA(),d);else while(d<e){c[d]=null;d=d+1|0;}d=0;f=a.X();while(f.Y()){c=b.data;e=d+1|0;c[d]=f.V();d=e;}return b;}
function Nd(){Bx.call(this);}
function ACi(a,b,c){var d=new Nd();SL(d,a,b,c);return d;}
function SL(a,b,c,d){Cr(a,b,c,d);}
function PB(a,b,c,d){var e;a:{while(true){if((b+a.B.bb()|0)>d.q())break a;e=a.B.I(b,c);if(e<1)break;b=b+e|0;}}return a.f.b(b,c,d);}
function Jo(){var a=this;C.call(a);a.gA=null;a.hT=null;a.iQ=0;a.fa=0;}
function ABP(a,b){var c=new Jo();Po(c,a,b);return c;}
function Po(a,b,c){M(a);a.gA=b;a.hT=c;}
function Pj(a){return BR(a.gA);}
function Rj(a,b){return X(a.hT)<b?0:1;}
function WY(a,b){a.iQ=b;}
function S3(a,b){a.fa=b;}
function JR(){C.call(this);}
function Og(b,c){var d,e,f,g,h,i,j,k;if(!b)return B(232);d=1<<c;e=d-1|0;f=(((32-EP(b)|0)+c|0)-1|0)/c|0;g=$rt_createCharArray(f);h=Ce(f-1|0,c);i=0;while(h>=0){j=g.data;k=i+1|0;j[i]=D_(b>>>h&e,d);h=h-c|0;i=k;}return GC(g);}
function Cb(){Bx.call(this);}
function AA1(a,b,c){var d=new Cb();Em(d,a,b,c);return d;}
function Em(a,b,c,d){Cr(a,b,c,d);}
function NL(a,b,c,d){var e;e=a.w.b(b,c,d);if(e<0)e=a.f.b(b,c,d);return e;}
function AAH(a,b){FL(a,b);a.w.t(b);}
function KL(){Cb.call(this);}
function AA8(a,b,c){var d=new KL();Y7(d,a,b,c);return d;}
function Y7(a,b,c,d){Em(a,b,c,d);}
function ON(a,b,c,d){var e;if((b+a.B.bb()|0)<=d.q()){e=a.B.I(b,c);if(e>=1)b=b+e|0;}return a.f.b(b,c,d);}
function Ik(){I.call(this);this.ls=null;}
function ACN(a){var b=new Ik();NY(b,a);return b;}
function NY(a,b){a.ls=b;Q(a);}
function QC(a,b){return CJ(b);}
function Gl(){}
function H3(){I.call(this);this.kU=null;}
function ACe(a){var b=new H3();Zz(b,a);return b;}
function Zz(a,b){a.kU=b;Q(a);}
function XW(a,b){return Lj(b);}
function K1(){Bx.call(this);}
function ACY(a,b,c){var d=new K1();AAK(d,a,b,c);return d;}
function AAK(a,b,c,d){Cr(a,b,c,d);}
function QO(a,b,c,d){var e;while(true){e=a.f.b(b,c,d);if(e>=0)break;if((b+a.B.bb()|0)<=d.q()){e=a.B.I(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
function Jp(){C.call(this);}
function CS(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Dz(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
function G5(){I.call(this);this.lL=null;}
function ADU(a){var b=new G5();Te(b,a);return b;}
function Te(a,b){a.lL=b;Q(a);}
function Tv(a,b){return L1(b);}
function IS(){C.call(this);}
function Tn(b){var c,d,e,f;c=ACd(b.cg());d=Hm(c);e=$rt_createIntArray(d);f=0;while(f<d){e.data[f]=Hm(c);f=f+1|0;}return e;}
function D9(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function AAE(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;c=F(EK,16384);d=$rt_createByteArray(16384);e=0;f=0;g=0;h=0;while(h<b.g()){i=D9(b.d(h));if(i==64){h=h+1|0;i=D9(b.d(h));j=0;k=1;l=0;while(l<3){h=h+1|0;m=D9(b.d(h));j=j|Ce(k,m);k=k*64|0;l=l+1|0;}}else if(i<32)j=1;else{i=(i-32|0)<<24>>24;h=h+1|0;j=D9(b.d(h));}if(!i&&j>=128){if(e>0){n=c.data;o=f+1|0;n[f]=VL(g,g+e|0,FQ(d,e));f=o;}g=g+(e+j|0)|0;e=0;}else{p=d.data;o=e+j|0;if(o<p.length)q=f;else{n=c.data;q=f+1|0;n[f]=VL(g,g+e|0,FQ(d,e));g=g+o|0;e=0;}while(true){o=j
+(-1)|0;if(j<=0)break;r=e+1|0;p[e]=i;e=r;j=o;}f=q;}h=h+1|0;}return L_(c,f);}
function G0(){var a=this;C.call(a);a.lH=null;a.bM=null;a.fR=0;a.fn=0;a.fd=null;a.cW=null;a.fe=null;}
function Vv(a){var b=new G0();Xm(b,a);return b;}
function Xm(a,b){M(a);a.bM=BX();a.fd=$rt_createDoubleArray(3);a.cW=$rt_createDoubleMultiArray([3,4]);DT();a.fe=AEX;a.lH=b;}
function RV(a,b,c,d){var e;e=AC_(b,c,d);a.bM.bo(e);if(a.fR<(e.f3()+1|0))a.fR=e.f3()+1|0;if(a.fn<(e.cr()+1|0))a.fn=e.cr()+1|0;}
function AAc(a){var b,c;b=0;while(b<a.bM.T()){if(a.bM.C(b).da()===null)return 0;c=0;while(c<a.bM.T()){if(b!=c&&a.bM.C(c).ha(a.bM.C(b).iO()))return 0;c=c+1|0;}b=b+1|0;}return 1;}
function Pk(a,b){var c,d;c=a.bM.X();while(true){if(!c.Y())return null;d=c.V();if(d.ha(b))break;}return d;}
function AAN(a,b,c){var d,e;d=a.bM.X();while(true){if(!d.Y())return null;e=d.V();if(e.cr()==b&&e.f3()==c)break;}return e;}
function Zt(a){var b,c,d;b=J();c=a.bM.X();while(c.Y()){d=c.V();b.a(d.da());}return b.e();}
function QL(a){return a.fR;}
function Wl(a){return a.fn;}
function OS(a,b){return a.fd.data[b];}
function Zl(a,b,c){a.fd.data[b]=c;}
function YL(a,b,c){if(b>4)b=9-b|0;if(a.cW.data.length<=b)return 0.0;return a.cW.data[b].data[c];}
function Up(a,b,c,d){a.cW.data[b].data[c]=d;}
function RR(a,b){var c;if(b>4)b=9-b|0;if(a.cW.data.length<=b)return 0;c=0;while(c<3){if(a.cW.data[b].data[c]>0.0)return 1;c=c+1|0;}return 0;}
function Xk(a){return a.fe;}
function TN(a,b){a.fe=b;}
function Ef(){DF.call(this);}
function ABr(){var a=new Ef();I8(a);return a;}
function I8(a){Mc(a);}
function Gt(a){return KJ(a).J(33,64).J(91,96).J(123,126);}
function Mr(){Ef.call(this);}
function ABb(){var a=new Mr();Vl(a);return a;}
function Vl(a){I8(a);}
function Oo(a){return Gt(a).bg(32);}
function JE(){K.call(this);}
function ACl(){var a=new JE();PC(a);return a;}
function PC(a){R(a);}
function WF(a){return ADj(a);}
function Ei(){}
function D8(){var a=this;C.call(a);a.fo=null;a.ee=null;}
function AE8(a,b){var c=new D8();MR(c,a,b);return c;}
function MR(a,b,c){M(a);a.fo=b;a.ee=c;}
function ED(){var a=this;D8.call(a);a.eU=0;a.dm=null;}
function ACx(a,b){var c=new ED();RL(c,a,b);return c;}
function RL(a,b,c){MR(a,b,null);a.eU=c;}
function LS(){BT.call(this);}
function AB8(a,b){var c=new LS();VH(c,a,b);return c;}
function VH(a,b,c){Dh(a,b,c);}
function Sn(a,b,c,d){var e,f,g,h,i;e=a.O.T();f=!d.df()?d.bw():0;a:{g=a.f.b(b,c,d);if(g>=0){d.D(a.A,b);h=0;while(true){if(h>=e)break a;i=a.O.C(h);if(i.bf(f,b,c,d)>=0){d.D(a.A,(-1));return g;}h=h+1|0;}}}return (-1);}
function AAz(a,b){return 0;}
function Dj(){var a=this;C.call(a);a.jP=null;a.fY=null;a.jW=0.0;a.gq=0.0;a.fg=null;a.gd=null;a.cT=0;}
function AE9(a,b,c,d){var e=new Dj();L3(e,a,b,c,d);return e;}
function AE$(a,b,c){var d=new Dj();K_(d,a,b,c);return d;}
function L3(a,b,c,d,e){M(a);B7();a.fg=AEH;a.gd=AEH;LP(a,e);a.jP=b;a.fY=e.dI();a.jW=c;a.gq=d;}
function K_(a,b,c,d){var e;e=$rt_createByteArray(1);e.data[0]=63;L3(a,b,c,d,e);}
function LP(a,b){var c;if(b!==null){c=b.data.length;if(c&&c>=a.gq)return;}G(Bz(B(233)));}
function Gm(a,b){if(b!==null){a.fg=b;a.fW(b);return a;}G(Bz(B(234)));}
function Y$(a,b){return;}
function LV(a,b){if(b!==null){a.gd=b;a.ft(b);return a;}G(Bz(B(234)));}
function Yh(a,b){return;}
function H$(a,b,c,d){var e,f,g,h,$$je;a:{if(a.cT!=3){if(d)break a;if(a.cT!=2)break a;}G(C0());}a.cT=!d?1:2;while(true){try{e=a.j6(b,c);}catch($$e){$$je=Bc($$e);if($$je instanceof U){f=$$je;G(TF(f));}else{throw $$e;}}if(e.dK()){if(!d)return e;g=X(b);if(g<=0)return e;e=BM(g);}else if(e.dd())break;h=!e.f2()?a.fg:a.gd;b:{B7();if(h!==AEJ){if(h===AE_)break b;else return e;}if(X(c)<a.fY.data.length)return AEI;KR(c,a.fY);}b.fb(BG(b)+e.g()|0);}return e;}
function G1(a,b){var c;if(a.cT!=2&&a.cT!=4)G(C0());c=a.jt(b);Bh();if(c===AEK)a.cT=3;return c;}
function N2(a,b){Bh();return AEK;}
function Mt(){var a=this;Z.call(a);a.bj=null;a.fD=null;a.eL=null;}
function ADu(a){var b=new Mt();TD(b,a);return b;}
function TD(a,b){var c;BH(a);a.bj=b.e();a.Q=b.g();a.fD=PO(a.Q);a.eL=PO(a.Q);c=0;while(c<(a.Q-1|0)){a.fD.i1(a.bj.d(c),(a.Q-c|0)-1|0);a.eL.i1(a.bj.d((a.Q-c|0)-1|0),(a.Q-c|0)-1|0);c=c+1|0;}}
function TM(a,b,c){return !a.fS(c,b)?(-1):a.Q;}
function QY(a,b,c,d){var e,f;e=d.q();while(true){if(b>e)return (-1);f=a.jo(c,b,e);if(f<0)return (-1);if(a.f.b(f+a.Q|0,c,d)>=0)break;b=f+1|0;}return f;}
function Wo(a,b,c,d,e){var f;while(true){if(c<b)return (-1);f=a.jz(d,b,c);if(f<0)return (-1);if(a.f.b(f+a.Q|0,d,e)>=0)break;c=f+(-1)|0;}return f;}
function XG(a,b){var c,d,e,f,g;if(b instanceof B1)return b.ci()!=a.bj.d(0)?0:1;if(b instanceof B3)return b.I(0,a.bj.ch(0,1))<=0?0:1;if(!(b instanceof BK)){if(!(b instanceof B0))return 1;a:{if(a.bj.g()>1){c=b;d=c.gi();e=a.bj.d(0);c=a.bj;f=c.d(1);if(d==BS(e,f)){e=1;break a;}}e=0;}return e;}b:{c:{c=b;if(!c.j(a.bj.d(0))){g=a.bj;if(g.g()<=1)break c;g=a.bj;e=BS(g.d(0),a.bj.d(1));if(!c.j(e))break c;}e=1;break b;}e=0;}return e;}
function W8(a,b,c,d){var e,f;e=a.bj.d(a.Q-1|0);while(true){if(c>(d-a.Q|0))return (-1);f=b.d((c+a.Q|0)-1|0);if(f==e&&a.fS(b,c))break;c=c+a.fD.fE(f)|0;}return c;}
function VB(a,b,c,d){var e,f,g,h;e=a.bj.d(0);f=b.g();g=(f-d|0)-a.Q|0;if(g<=0)d=d+g|0;while(true){if(d<c)return (-1);h=b.d(d);if(h==e&&a.fS(b,d))break;d=d-a.eL.fE(h)|0;}return d;}
function XZ(a,b,c){var d;d=0;while(d<a.Q){if(b.d(d+c|0)!=a.bj.d(d))return 0;d=d+1|0;}return 1;}
function Lg(){S.call(this);}
function ACT(){var a=new Lg();YF(a);return a;}
function YF(a){Bo(a);}
function Qn(a,b,c,d){var e;e=!d.df()?d.q():c.g();if(b<e)return (-1);d.by=1;d.kM=1;return a.f.b(b,c,d);}
function Nq(a,b){return 0;}
function Li(){U.call(this);}
function J$(){var a=new Li();Vy(a);return a;}
function Vy(a){BB(a);}
function CN(){Bw.call(this);}
function ADA(a,b,c){var d=new CN();Eu(d,a,b,c);return d;}
function Eu(a,b,c,d){CA(a,b,c,d);}
function U1(a,b,c,d){var e;if(!a.w.x(d))return a.f.b(b,c,d);e=a.w.b(b,c,d);if(e>=0)return e;return a.f.b(b,c,d);}
function XJ(a,b){FL(a,b);a.w.t(b);}
function J1(){K.call(this);}
function AAZ(){var a=new J1();Y6(a);return a;}
function Y6(a){R(a);}
function VX(a){return By().J(65,90);}
function DH(){var a=this;CD.call(a);a.f9=0;a.e7=null;a.lS=null;}
function AFa(a,b,c,d,e){var f=new DH();HS(f,a,b,c,d,e);return f;}
function HS(a,b,c,d,e,f){Fz(a,c);YT();a.lS=AEM;a.f9=b;a.e7=d;a.L=e;a.bJ=f;}
function Mh(b,c,d){return ACI(0,b.data.length,b,c,c+d|0,0,0);}
function Uz(b){return Mh(b,0,b.data.length);}
function Ti(a,b,c,d){var e,f,g,h,i,j;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Bp(J().a(B(235)).m(g).a(B(236)).m(f).e()));if(X(a)<d)G(Yg());if(d<0)G(Bp(J().a(B(237)).m(d).a(B(238)).e()));h=a.L+a.f9|0;i=0;while(i<d){g=c+1|0;j=a.e7.data;f=h+1|0;e[c]=j[h];i=i+1|0;c=g;h=f;}a.L=a.L+d|0;return a;}}e=b.data;G(Bp(J().a(B(239)).m(c).a(B(23)).m(e.length).a(B(240)).e()));}
function XC(a,b,c,d){var e,f,g,h,i,j;if(!d)return a;if(a.dN())G(Gw());if(X(a)<d)G(I5());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Bp(J().a(B(241)).m(g).a(B(236)).m(f).e()));if(d<0)G(Bp(J().a(B(237)).m(d).a(B(238)).e()));h=a.L+a.f9|0;i=0;while(i<d){j=a.e7.data;g=h+1|0;f=c+1|0;j[h]=e[c];i=i+1|0;h=g;c=f;}a.L=a.L+d|0;return a;}}e=b.data;G(Bp(J().a(B(239)).m(c).a(B(23)).m(e.length).a(B(240)).e()));}
function KR(a,b){return a.hV(b,0,b.data.length);}
function EW(a){IV(a);return a;}
function VC(a,b){FG(a,b);return a;}
function Lw(){var a=this;DH.call(a);a.jk=0;a.gN=0;}
function ACI(a,b,c,d,e,f,g){var h=new Lw();OT(h,a,b,c,d,e,f,g);return h;}
function OT(a,b,c,d,e,f,g,h){HS(a,b,c,d,e,f);a.jk=g;a.gN=h;}
function W$(a){return a.gN;}
function DW(){}
function Fm(){var a=this;C.call(a);a.bs=null;a.du=null;a.gf=null;a.gm=null;a.hH=0;a.eu=0;a.fk=0;a.i_=0;a.bA=0;a.jh=0;a.jg=0;a.by=0;a.kM=0;a.cN=0;a.fs=0;}
function AFb(a,b,c,d,e,f){var g=new Fm();Hy(g,a,b,c,d,e,f);return g;}
function Hy(a,b,c,d,e,f,g){var h;M(a);a.cN=(-1);h=e+1|0;a.hH=h;a.bs=$rt_createIntArray(h*2|0);a.du=$rt_createIntArray(g);DC(a.du,(-1));if(f>0)a.gf=$rt_createIntArray(f);DC(a.bs,(-1));a.h8(b,c,d);}
function Xn(a,b,c){a.du.data[b]=c;}
function AAL(a,b){return a.du.data[b];}
function NQ(a){return a.ga(0);}
function ZY(a,b){F_(a,b);return a.bs.data[(b*2|0)+1|0];}
function S$(a,b,c){a.bs.data[b*2|0]=c;}
function Q0(a,b,c){a.bs.data[(b*2|0)+1|0]=c;}
function Sf(a,b){return a.bs.data[b*2|0];}
function Sx(a,b){return a.bs.data[(b*2|0)+1|0];}
function Zy(a,b){var c,d;c=a.cE(b);d=a.ez(b);if((d|c|(d-c|0))>=0&&d<=a.gm.g())return a.gm.fp(c,d).e();return null;}
function Sj(a){return a.eZ(0);}
function SE(a,b){F_(a,b);return a.bs.data[b*2|0];}
function NO(a){if(a.bs.data[0]==(-1)){a.bs.data[0]=a.bA;a.bs.data[1]=a.bA;}a.cN=a.eb();}
function Oq(a,b){return a.gf.data[b];}
function Sq(a,b,c){a.gf.data[b]=c;}
function F_(a,b){if(!a.eu)G(C0());if(b>=0&&b<a.hH)return;G(Bp(EL(b)));}
function XQ(a){a.eu=1;}
function XS(a){return a.eu;}
function Zd(a,b,c,d){a.eu=0;a.fs=2;DC(a.bs,(-1));DC(a.du,(-1));if(b!==null)a.gm=b;if(c>=0)Lr(a,c,d);a.bA=a.fk;}
function Tw(a){a.h8(null,(-1),(-1));}
function Lr(a,b,c){a.fk=b;a.i_=c;}
function TR(a,b){a.bA=b;if(a.cN>=0)b=a.cN;a.cN=b;}
function RI(a){return a.fk;}
function NM(a){return a.i_;}
function Uo(a,b){a.fs=b;}
function We(a){return a.fs;}
function XD(a){return a.jg;}
function Op(a){return a.jh;}
function PY(a){return a.cN;}
function IX(){var a=this;Z.call(a);a.iH=null;a.lh=0;}
function Xs(a){var b=new IX();PP(b,a);return b;}
function PP(a,b){BH(a);a.iH=b.c8();a.lh=b.G;}
function ZE(a,b,c){var d,e;d=a.iH;e=BA(c.d(b));return !d.j(BI(e))?(-1):1;}
function GH(){var a=this;C.call(a);a.g9=0;a.hZ=Long_ZERO;a.g1=0.0;}
function ACC(a,b){var c=new GH();Pl(c,a,b);return c;}
function OK(b,c){var d,e,$$je;a:{try{d=U_(b,EC(c));}catch($$e){$$je=Bc($$e);if($$je instanceof BY){e=$$je;break a;}else{throw $$e;}}return d;}Cz().n(B(242));e.et();return null;}
function U_(b,c){var d,e,f,g,h,i,$$je;d=BX();e=Ej(c);a:{while(true){try{f=e.ek();if(f===null)break a;g=B8(f,32);if(!f.ej(B(228))&&g.T()>=2){h=g.C(0).c7();if(h.g()==1&&b.fN(h)){i=FU(g.C(1));d.bo(ACC(h.d(0),i));}}continue;}catch($$e){$$je=Bc($$e);f=$$je;}}e.bH();G(f);}e.bH();Wt(d);return d;}
function Wt(b){var c,d,e;c=Long_ZERO;d=b.X();while(d.Y()){e=d.V();c=Long_add(c,e.dt());}d=b.X();while(d.Y()){e=d.V();e.g1=Long_toNumber(e.dt())/Long_toNumber(c);}}
function JO(b,c){var d,e;d=c.X();while(true){if(!d.Y())return null;e=d.V();if(b==e.ci())break;}return e;}
function Pl(a,b,c){M(a);a.g9=b;a.hZ=c;}
function O3(a){return a.g9;}
function OL(a){return a.hZ;}
function OM(a){return a.g1;}
function GJ(){I.call(this);this.je=null;}
function ABs(a){var b=new GJ();Zj(b,a);return b;}
function Zj(a,b){a.je=b;Q(a);}
function ZI(a,b){return MG(b);}
function H9(){C.call(this);this.dZ=null;}
function IW(a){var b=new H9();QF(b,a);return b;}
function Pn(b){var c,d,e,f,g;B2();c=AFc.data;d=c.length;e=0;while(e<d){f=c[e];if(b.jR(f.bX())){f.eI(1);g=IW(f);g.fl();return f;}e=e+1|0;}return null;}
function ZM(){var b,c,d,e,f;B2();b=AFd.data;c=b.length;d=0;while(d<c){e=b[d];if(!e.dl().H()){e.eI(1);f=IW(e);f.fl();}d=d+1|0;}}
function Wx(){var b,c,d,e,f;B2();b=AFe.data;c=b.length;d=0;while(d<c){e=b[d];e.eI(1);f=IW(e);f.fl();d=d+1|0;}}
function QF(a,b){M(a);a.dZ=b;}
function W3(a){var b,c,d;b=new XMLHttpRequest();c=CS(ABd(a,b),"stateChanged");b.onreadystatechange=c;d=J().a(B(243)).a(a.dZ.dl()).e();b.open("GET",$rt_ustr(d));b.send();}
function Ke(a,b){a.dZ.lN(b);E3().n(J().a(B(244)).a(a.dZ.dl()).e());V8();}
function V8(){var b,c,d,e,f,g,h,i,j;b=0;c=0;B2();d=AFc.data;e=d.length;f=0;while(f<e){g=d[f];if(g.eY())c=c+1|0;if(g.bR()!==null)b=b+1|0;f=f+1|0;}d=AFd.data;f=d.length;h=0;while(h<f){i=d[h];if(i.eY())c=c+1|0;if(i.bR()!==null)b=b+1|0;h=h+1|0;}d=AFe.data;e=d.length;f=0;while(f<e){j=d[f];if(j.eY())c=c+1|0;if(j.bR()!==null)b=b+1|0;f=f+1|0;}if(!c)c=1;if(b>=c){BJ(null);LT(1);}else BJ(J().a(B(245)).m((100*b|0)/c|0).a(B(246)).e());}
function QU(b,c){Ke(b,c);}
function IT(){C.call(this);}
function Oe(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function PA(b,c){return b!==null&&!(typeof b.constructor.$meta==='undefined'?1:0)&&HU(b.constructor,c)?1:0;}
function HU(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(HU(d[e],c))return 1;e=e+1|0;}return 0;}
function PJ(b){var c='$$enumConstants$$';B$[c]=RG;B4[c]=X6;PJ=function(cls){if(!cls.hasOwnProperty(c)){return null;}if(typeof cls[c]==="function"){cls[c]=cls[c]();}return cls[c];};return PJ(b);}
function JX(b){return V3(String.fromCharCode(b));}
function UV(b){return b.$meta.primitive?1:0;}
function Sy(b){return b.$meta.enum?1:0;}
function YW(b){return b.$meta.item;}
function UL(b){return $rt_str(b.$meta.name);}
function Ds(){var a=this;C.call(a);a.ji=null;a.k6=null;}
function AFf(a,b){var c=new Ds();Jd(c,a,b);return c;}
function Jd(a,b,c){var d,e,f,g;d=c.data;M(a);Fn(b);e=d.length;f=0;while(f<e){g=d[f];Fn(g);f=f+1|0;}a.ji=b;a.k6=c.dI();}
function Fn(b){var c,d;if(b.H())G(KN(b));if(!JD(b.d(0)))G(KN(b));c=1;while(c<b.g()){a:{d=b.d(c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(JD(d))break a;else G(KN(b));}}c=c+1|0;}}
function JD(b){return !(b>=48&&b<=57)&&!(b>=97&&b<=122)&&b<65&&b>90?0:1;}
function OA(b){var c;if(b===null)G(Bz(B(247)));Fn(b);c=Go().gl(b.c7());if(c!==null)return c;G(ADd(b));}
function GZ(a,b){var c,d,e,$$je;a:{try{c=a.j_();B7();d=AEJ;d=K9(c,d);c=AEJ;d=HO(d,c);d=I6(d,b);}catch($$e){$$je=Bc($$e);if($$je instanceof Cl){e=$$je;break a;}else{throw $$e;}}return d;}G(ACF(B(248),e));}
function C8(){C.call(this);this.k2=null;}
var AE_=null;var AEJ=null;var AEH=null;function B7(){B7=Be(C8);N1();}
function LN(a){var b=new C8();Jq(b,a);return b;}
function Jq(a,b){B7();M(a);a.k2=b;}
function N1(){AE_=LN(B(249));AEJ=LN(B(250));AEH=LN(B(251));}
function Kw(){U.call(this);}
function ACJ(){var a=new Kw();Yq(a);return a;}
function Yq(a){BB(a);}
function BP(){U.call(this);}
function Cv(){var a=new BP();C3(a);return a;}
function Bz(a){var b=new BP();M3(b,a);return b;}
function C3(a){BB(a);}
function M3(a,b){Df(a,b);}
function JQ(){BP.call(this);this.jX=null;}
function KN(a){var b=new JQ();VW(b,a);return b;}
function VW(a,b){C3(a);a.jX=b;}
function Hz(){S.call(this);this.go=null;}
function ACV(a){var b=new Hz();Si(b,a);return b;}
function Si(a,b){Bo(a);a.go=b;}
function Sr(a,b,c,d){var e,f;a:{if(b!=d.q()){if(!b)break a;if(d.cU()&&b==d.bw())break a;e=a.go;f=b-1|0;if(e.he(c.d(f),c.d(b)))break a;}return (-1);}return a.f.b(b,c,d);}
function Wq(a,b){return 0;}
function Gd(){}
function Km(){C.call(this);}
function Dv(){BU.call(this);this.gk=null;}
function AFg(a){var b=new Dv();G$(b,a);return b;}
function G$(a,b){CR(a);a.gk=b;}
function K0(){var a=this;Dv.call(a);a.j$=0;a.f$=0;a.bP=null;a.dp=null;a.hv=null;}
function Pe(a,b){var c=new K0();Lh(c,a,b);return c;}
function ADv(a){var b=new K0();Rn(b,a);return b;}
function Lh(a,b,c){G$(a,b);a.bP=J();a.dp=$rt_createCharArray(32);a.j$=c;a.hv=XU();}
function Rn(a,b){Lh(a,b,0);}
function PL(a,b,c,d){var $$je;if(!J_(a))return;a:{try{a.gk.di(b,c,d);break a;}catch($$e){$$je=Bc($$e);if($$je instanceof BY){}else{throw $$e;}}a.f$=1;}}
function J_(a){if(a.gk===null)a.f$=1;return a.f$?0:1;}
function EX(a,b,c,d){var e,f,g,h,i,j,k,l;e=b.data;f=MD(b,c,d-c|0);g=$rt_createByteArray(Bq(16,V(e.length,1024)));h=Uz(g);i=a.hv.kV();B7();j=AEJ;i=Gm(i,j);j=AEJ;k=LV(i,j);while(true){l=H$(k,f,h,1).dd();a.di(g,0,BG(h));EW(h);if(!l)break;}while(true){l=G1(k,h).dd();a.di(g,0,BG(h));EW(h);if(!l)break;}}
function Uj(a,b){a.dp.data[0]=b;EX(a,a.dp,0,1);}
function YG(a,b){a.bP.a(b);Dx(a);}
function Sp(a,b){a.bP.a(b).bt(10);Dx(a);}
function Zs(a,b){a.bP.ib(b).bt(10);Dx(a);}
function SW(a){a.ke(10);}
function Dx(a){var b;b=a.bP.g()<=a.dp.data.length?a.dp:$rt_createCharArray(a.bP.g());a.bP.g3(0,a.bP.g(),b,0);EX(a,b,0,a.bP.g());a.bP.dS(0);}
function FI(){}
function HN(){BT.call(this);}
function ACU(a,b){var c=new HN();OV(c,a,b);return c;}
function OV(a,b,c){Dh(a,b,c);}
function N4(a,b,c,d){var e,f,g,h;e=a.O.T();d.D(a.A,b);f=0;while(true){if(f>=e)return a.f.b(b,c,d);g=a.O.C(f);h=g.bf(0,b,c,d);if(h>=0)break;f=f+1|0;}return (-1);}
function TB(a,b){return 0;}
function KZ(){CE.call(this);}
function ABe(a,b){var c=new KZ();Xi(c,a,b);return c;}
function Xi(a,b,c){Fc(a,b,c);}
function S2(a,b,c,d){var e,f;e=a.c6(d);if(e!==null&&(b+e.g()|0)<=d.q()){f=!c.e().ip(e,b)?(-1):e.g();if(f<0)return (-1);d.D(a.c2,f);return a.f.b(b+f|0,c,d);}return (-1);}
function WR(a,b,c,d){var e,f,g,h;e=a.c6(d);f=d.bw();if(e!==null&&(b+e.g()|0)<=f){g=c.e();while(true){if(b>f)return (-1);h=g.gL(e,b);if(h<0)return (-1);if(a.f.b(h+e.g()|0,c,d)>=0)break;b=h+1|0;}return h;}return (-1);}
function O9(a,b,c,d,e){var f,g,h;f=a.c6(e);if(f===null)return (-1);g=d.e();a:{while(true){if(c<b)return (-1);h=g.lD(f,c);if(h<0)break a;if(h<b)break a;if(a.f.b(h+f.g()|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function Ou(a,b){return 1;}
function I3(){K.call(this);}
function ADI(){var a=new I3();WV(a);return a;}
function WV(a){R(a);}
function T0(a){return By().J(97,122);}
function Iv(){BN.call(this);this.fI=null;}
function ABK(a,b,c,d){var e=new Iv();RN(e,a,b,c,d);return e;}
function RN(a,b,c,d,e){CZ(a,b,c,d);a.fI=e;}
function Q3(a,b,c,d){var e,f;e=d.q();f=Fh(a,b,e,c);if(f>=0)e=f;if(e>b)return a.f.bf(b,e,c,d);return a.f.b(b,c,d);}
function NU(a,b,c,d){var e,f,g,h,i;e=d.q();f=a.f.bh(b,c,d);if(f<0)return (-1);g=Fh(a,f,e,c);if(g>=0)e=g;h=a.f.bf(f,e,c,d);if(f<h)f=h;i=f>0?K7(a,b,f-1|0,c):f?(-1):0;if(i>=b)b=i>=f?i:i+1|0;return b;}
function Fh(a,b,c,d){while(true){if(b>=c)return (-1);if(a.fI.dk(d.d(b)))break;b=b+1|0;}return b;}
function K7(a,b,c,d){while(true){if(c<b)return (-1);if(a.fI.dk(d.d(c)))break;c=c+(-1)|0;}return c;}
function JL(){K.call(this);}
function ADo(){var a=new JL();XV(a);return a;}
function XV(a){R(a);}
function ZZ(a){var b;b=ABs(a);b.y=1;return b;}
function Kz(){C.call(this);}
function DQ(){C.call(this);}
var AFh=null;var AFi=null;function MB(){MB=Be(DQ);Vi();}
function Hb(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;MB();d=$rt_floatToIntBits(b);c.g$=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.fT=0;c.fq=0;return;}g=0;if(f)h=e|8388608;else{h=e<<1;while(Long_eq(Long_and(Long_fromInt(h),Long_fromInt(8388608)),Long_ZERO)){h=h<<1;f=f+(-1)|0;g=g+1|0;}}i=Pu(AFi,f);if(i<0)i= -i-2|0;j=f-AFi.data[i]|0;k=9+j|0;l=Long_fromInt(h);m=Long_shru(Long_mul(l,Long_fromInt(AFh.data[i])),32-k|0).lo;if(m>=1000000000){i=i+1|0;n=f-AFi.data[i]|0;k=9+n|0;m=Long_shru(Long_mul(l,Long_fromInt(AFh.data[i])),
32-k|0).lo;}n=(31-k|0)-g|0;o=n>=0?AFh.data[i]>>>n:AFh.data[i]<< -n;p=(o+1|0)>>1;q=o>>1;if(h==4194304)q=q>>2;r=Hn(m,q);s=KE(m,p);h=BW(r,s);h=h>0?Ce(m/r|0,r):h<0?Ce(m/s|0,s)+s|0:Ce((m+(s/2|0)|0)/s|0,s);if(h>=1000000000){i=i+1|0;h=h/10|0;}else if(h<100000000){i=i+(-1)|0;h=h*10|0;}c.fT=h;c.fq=i-50|0;}
function Hn(b,c){var d,e;MB();d=10;while(d<=c){d=d*10|0;}e=b%d|0;if(e>=(c/2|0))d=d/10|0;return d;}
function KE(b,c){var d,e;MB();d=10;while(d<=c){d=d*10|0;}e=b%d|0;if((d-e|0)>(c/2|0))d=d/10|0;return d;}
function Vi(){var b,c,d,e,f,g,h,i,j,k,l;AFh=$rt_createIntArray(100);AFi=$rt_createIntArray(100);b=2000000000;c=127;d=0;e=b;while(d<50){f=AFh.data;g=d+50|0;f[g]=$rt_udiv(e,20);AFi.data[g]=c;g=$rt_udiv(e,10);h=$rt_umod(g,10);while(g<=b&&!(g&(-2147483648))){g=g<<1;c=c+1|0;h=h<<1;}e=g+(h/10|0)|0;d=d+1|0;}i=214748364;e=127;d=0;while(d<50){j=0;k=b;while(k>i){k=k>>1;j=j+1|0;e=e+(-1)|0;}k=k*10|0;if(j<=0)b=k;else{l=Long_fromInt(b&((1<<j)-1|0));b=Long_add(Long_fromInt(k),Long_shr(Long_mul(l,Long_fromInt(10)),j)).lo;}f
=AFh.data;k=(50-d|0)-1|0;f[k]=$rt_udiv(b,20);AFi.data[k]=e;d=d+1|0;}}
function Lz(){K.call(this);}
function ADi(){var a=new Lz();Sa(a);return a;}
function Sa(a){R(a);}
function R6(a){return ADE(a);}
function DG(){C.call(this);}
function AFj(){var a=new DG();J3(a);return a;}
function J3(a){M(a);}
function Ir(){S.call(this);}
function ACp(){var a=new Ir();Vh(a);return a;}
function Vh(a){Bo(a);}
function Y2(a,b,c,d){if(b!=d.lx())return (-1);return a.f.b(b,c,d);}
function AAl(a,b){return 0;}
function KU(){Bx.call(this);}
function ABZ(a){var b=new KU();YH(b,a);return b;}
function YH(a,b){Cr(a,b.ef(),b.kd(),b.cP());a.w.t(a);}
function ZF(a,b,c,d){var e;while((b+a.B.bb()|0)<=d.q()){e=a.B;if(e.I(b,c)<=0)break;b=b+a.B.bb()|0;}return a.f.b(b,c,d);}
function Ph(a,b,c,d){var e,f,g;e=a.f.bh(b,c,d);if(e<0)return (-1);f=e-a.B.bb()|0;while(f>=b&&a.B.I(f,c)>0){g=f-a.B.bb()|0;e=f;f=g;}return e;}
function EH(){}
function KV(){var a=this;C.call(a);a.fv=null;a.bW=null;}
function ABX(a){var b=new KV();Vk(b,a);return b;}
function Vk(a,b){var c;M(a);a.bW=b;c=a;b.classObject=c;}
function HQ(b){var c;if(b===null)return null;c=b.classObject;if(c===null)c=ABX(b);return c;}
function QR(a){return a.bW;}
function Ui(a,b){return PA(b,a.bW);}
function ZS(a){if(a.fv===null)a.fv=UL(a.bW);return a.fv;}
function WW(a){return UV(a.bW);}
function Rb(a){return Sy(a.bW);}
function NZ(a){return HQ(YW(a.bW));}
function Sv(a){if(!a.kI())return null;a.bW.$clinit();return PJ(a.bW).dI();}
function LA(){var a=this;C.call(a);a.p=null;a.z=0;}
function AAF(){var a=new LA();R7(a);return a;}
function AB2(a){var b=new LA();OD(b,a);return b;}
function R7(a){M(a);a.p=$rt_createIntArray(0);}
function OD(a,b){M(a);a.p=$rt_createIntArray(((b+32|0)-1|0)/32|0);}
function Sm(a,b){var c,d;c=b/32|0;if(b>=a.z){C2(a,c+1|0);a.z=b+1|0;}d=a.p.data;d[c]=d[c]|1<<(b%32|0);}
function XI(a,b,c){var d,e,f,g;if(b>c)G(Cq());d=b/32|0;e=c/32|0;if(c>a.z){C2(a,e+1|0);a.z=c;}if(d==e){f=a.p.data;f[d]=f[d]|C9(a,b)&CU(a,c);}else{f=a.p.data;f[d]=f[d]|C9(a,b);g=d+1|0;while(g<e){a.p.data[g]=(-1);g=g+1|0;}f=a.p.data;f[e]=f[e]|CU(a,c);}}
function C9(a,b){var c;c=b%32|0;return (-1)<<c;}
function CU(a,b){var c;c=b%32|0;return !c?0:(-1)>>>(32-c|0);}
function AAD(a,b){var c,d;c=b/32|0;if(c<a.p.data.length){d=a.p.data;d[c]=d[c]&KG((-2),b%32|0);if(b==(a.z-1|0))CI(a);}}
function O2(a,b,c){var d,e,f,g,h;if(b>c)G(Cq());if(b>=a.z)return;d=V(a.z,c);e=b/32|0;f=d/32|0;if(e==f){g=a.p.data;g[e]=g[e]&(CU(a,b)|C9(a,d));}else{g=a.p.data;g[e]=g[e]&CU(a,b);h=e+1|0;while(h<f){a.p.data[h]=0;h=h+1|0;}g=a.p.data;g[f]=g[f]&C9(a,d);}CI(a);}
function O_(a,b){var c;c=b/32|0;return c<a.p.data.length&&a.p.data[c]&1<<(b%32|0)?1:0;}
function ZA(a,b){var c,d,e,f,g;if(b>=a.z)return (-1);c=b/32|0;d=a.p.data[c];e=d>>>(b%32|0);if(e)return CY(e)+b|0;f=(a.z+31|0)/32|0;g=c+1|0;while(g<f){if(a.p.data[g])return (g*32|0)+CY(a.p.data[g])|0;g=g+1|0;}return (-1);}
function RK(a,b){var c,d,e,f,g;if(b>=a.z)return b;c=b/32|0;d=a.p.data[c]^(-1);e=d>>>(b%32|0);if(e)return CY(e)+b|0;f=(a.z+31|0)/32|0;g=c+1|0;while(g<f){if(a.p.data[g]!=(-1))return (g*32|0)+CY(a.p.data[g]^(-1))|0;g=g+1|0;}return a.z;}
function C2(a,b){var c;if(a.p.data.length>=b)return;c=Bq((b*3|0)/2|0,(a.p.data.length*2|0)+1|0);a.p=Zm(a.p,c);}
function CI(a){var b,c,d;b=(a.z+31|0)/32|0;a.z=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=EP(a.p.data[c]);if(d<32)break;c=c+(-1)|0;a.z=a.z-32|0;}a.z=a.z-d|0;}}
function QQ(a,b){var c,d;c=V(a.p.data.length,b.p.data.length);d=0;while(d<c){if(a.p.data[d]&b.p.data[d])return 1;d=d+1|0;}return 0;}
function X5(a,b){var c,d,e;c=V(a.p.data.length,b.p.data.length);d=0;while(d<c){e=a.p.data;e[d]=e[d]&b.p.data[d];d=d+1|0;}while(c<a.p.data.length){a.p.data[c]=0;c=c+1|0;}a.z=V(a.z,b.z);CI(a);}
function ZU(a,b){var c,d,e;c=V(a.p.data.length,b.p.data.length);d=0;while(d<c){e=a.p.data;e[d]=e[d]&(b.p.data[d]^(-1));d=d+1|0;}CI(a);}
function XR(a,b){var c,d,e;a.z=Bq(a.z,b.z);C2(a,(a.z+31|0)/32|0);c=V(a.p.data.length,b.z);d=0;while(d<c){e=a.p.data;e[d]=e[d]|b.p.data[d];d=d+1|0;}}
function Z5(a,b){var c,d,e;a.z=Bq(a.z,b.z);C2(a,(a.z+31|0)/32|0);c=V(a.p.data.length,b.z);d=0;while(d<c){e=a.p.data;e[d]=e[d]^b.p.data[d];d=d+1|0;}CI(a);}
function Yb(a){return a.z?0:1;}
function F6(){}
function GP(){I.call(this);this.jZ=null;}
function ACj(a){var b=new GP();AAj(b,a);return b;}
function AAj(a,b){a.jZ=b;Q(a);}
function TZ(a,b){return Mj(b);}
function Ga(){Bs.call(this);}
function AFk(a){var b=new Ga();G9(b,a);return b;}
function G9(a,b){Ck(a,b);}
function O5(a,b,c,d){var e;e=a.c_();d.D(e,b-d.bD(e)|0);return a.f.b(b,c,d);}
function T3(a,b){return 0;}
function Bf(){C.call(this);}
var AFl=null;var AFm=null;var AFn=null;var AFo=null;var AFp=null;var AFq=null;var AFr=null;var AFs=null;var AFt=null;var AFu=null;var AFv=null;var AFw=null;var AFx=null;var AFy=null;var AFz=null;var AFA=0;var AFB=null;function Bj(){Bj=Be(Bf);Wv();}
function PU(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;Bj();c=AFn;d="v1.26";c.innerHTML=d;BJ(B(252));CF(null);e=B(253);f=$rt_str(AFl.location.href);if(f.fN(B(254))){g=f.e9(f.cy(63)+1|0);h=g.i2(B(255));i=h.data;j=i.length;k=0;while(k<j){l=i[k];m=l.i2(B(256));n=m.data;if(B(257).bS(n[0]))e=n[1];k=k+1|0;}}E3().n(J().a(B(258)).a(e).e());AFB=Pn(e);if(AFB!==null)E3().n(J().a(B(258)).a(AFB.bX()).e());ZM();Wx();o=AFm.getElementById("layout-option-custom");AFo.options.remove(0);B2();i=AFd.data;j=i.length;k=0;while(k
<j){p=i[k];q=o.cloneNode(!!1);c=$rt_ustr(p.bX());q.text=c;c=!!p.dl().H();q.disabled=c;AFo.options.add(q);k=k+1|0;}AFo.options.add(o);c=AFo;r=ABV();c.addEventListener("change",CS(r,"handleEvent"));s=AFm.getElementById("config-option-custom");AFp.options.remove(0);i=AFe.data;j=i.length;k=0;while(k<j){t=i[k];u=s.cloneNode(!!1);c=$rt_ustr(t.bX());u.text=c;c=$rt_ustr(t.i6());u.title=c;AFp.options.add(u);k=k+1|0;}AFp.options.add(s);c=AFp;r=ADG();c.addEventListener("change",CS(r,"handleEvent"));c=AFu;r=AAP();c.addEventListener("click",
CS(r,"handleEvent"));c=AFw;r=ADB();c.addEventListener("click",CS(r,"handleEvent"));}
function Fr(){var b,c,d;Bj();b=Vv($rt_str(AFo.value));M5(b,$rt_str(AFq.value));LK(b,$rt_str(AFr.value));c=NP(b,null);if(AFx.firstChild!==null)Mf(AFx);d=c.jc(AFm,0);if(d===null)AFx.setAttribute("style","display:none");else{AFx.appendChild(d);AFx.setAttribute("style","display:block");}}
function LT(b){var c,d,e,f;Bj();AFA=b;if(AFA){c=AFo;d=1;c.selectedIndex=d;B2();e=AFd.data[AFo.selectedIndex];Gg(e.bR());c=AFp;d=2;c.selectedIndex=d;f=AFe.data[AFp.selectedIndex];Eg(f.bR());Fr();}}
function LD(){var b,c,d,e,f,g,h,i,$$je;Bj();b=Vv($rt_str(AFo.value));M5(b,$rt_str(AFq.value));LK(b,$rt_str(AFr.value));if(b!==null&&b.ld()){if(AFB!==null&&AFB.bR().g()){c=OK(b.d9(),AFB.bR());d=Pp(b.d9(),AFB.bR());e=ABa();f=e.jU(b,c,d);g=NP(b,f.ll());CF(g.jc(AFm,1));a:{try{h=ADT(5);i=h.li(f);BJ(i);break a;}catch($$e){$$je=Bc($$e);if($$je instanceof BY){}else{throw $$e;}}BJ(B(259));}return;}BJ(B(260));return;}BJ(B(261));}
function Gg(b){var c,d;Bj();if(AFq.firstChild!==null){c=AFq;d=AFq.firstChild;c.removeChild(d);}d=AFq;c=AFm.createTextNode($rt_ustr(b));d.appendChild(c);c=AFq;d=$rt_ustr(b);c.value=d;}
function Eg(b){var c,d;Bj();if(AFr.firstChild!==null){c=AFr;d=AFr.firstChild;c.removeChild(d);}d=AFr;c=AFm.createTextNode($rt_ustr(b));d.appendChild(c);c=AFr;d=$rt_ustr(b);c.value=d;}
function CF(b){Bj();if(AFy.firstChild!==null)Mf(AFy);if(b===null)AFy.setAttribute("style","display:none");else{AFy.appendChild(b);AFy.setAttribute("style","display:block");}}
function BJ(b){var c,d;Bj();if(AFz.firstChild!==null){c=AFz;d=AFz.firstChild;c.removeChild(d);}if(b!==null){c=AFz;d=$rt_ustr(b);c.innerHTML=d;}else{c=AFB===null?B(262):J().a(B(263)).a(AFB.i6()).e();d=AFz;c=$rt_ustr(J().a(c).a(B(264)).e());d.innerHTML=c;}}
function Ev(){Bj();return AFo;}
function DI(){Bj();Fr();}
function Eq(){Bj();return AFp;}
function Ew(){Bj();return AFq;}
function E1(){Bj();return AFs;}
function E2(){Bj();return AFr;}
function Ep(){Bj();return AFt;}
function IU(){Bj();return AFv;}
function M4(){Bj();return AFA;}
function G7(){Bj();LD();}
function Wv(){AFl=window;AFm=Zo();AFn=AFm.getElementById("version-text");AFo=AFm.getElementById("layout-select");AFp=AFm.getElementById("config-select");AFq=AFm.getElementById("layout-input");AFr=AFm.getElementById("config-input");AFs=AFm.getElementById("modal-layout-input");AFt=AFm.getElementById("modal-config-input");AFu=AFm.getElementById("save-input-button");AFv=AFm.getElementById("close-input-button");AFw=AFm.getElementById("analyze-button");AFx=AFm.getElementById("keyboard-panel-fingers");AFy=AFm.getElementById("keyboard-panel-heatmap");AFz
=AFm.getElementById("output-panel");AFA=0;}
function D4(){BO.call(this);}
var AFC=0.0;var AFD=null;function AFE(){AFE=Be(D4);Rs();}
function Rs(){AFC=NaN;AFD=D($rt_floatcls());}
function H4(){C.call(this);}
function EM(b,c){var d,e,f,g;d=b.data;e=$rt_createCharArray(c);f=V(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function FQ(b,c){var d,e,f,g;d=b.data;e=$rt_createByteArray(c);f=V(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function Zm(b,c){var d,e,f,g;d=b.data;e=$rt_createIntArray(c);f=V(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function L_(b,c){var d,e,f,g;d=b.data;e=I4(Cf(b).eA(),c);f=V(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function Vg(b,c,d,e){var f,g;if(c>d)G(Cv());while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function DC(b,c){Vg(b,0,b.data.length,c);}
function US(b,c,d,e){var f,g;if(c>d)G(Cv());while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function Sc(b,c){US(b,0,b.data.length,c);}
function Pu(b,c){return QT(b,0,b.data.length,c);}
function QT(b,c,d,e){var f,g,h,i;if(c>d)G(Cv());f=d-1|0;while(true){g=b.data;h=(c+f|0)/2|0;i=g[h];if(i==e)break;if(e>=i){c=h+1|0;if(c>f)return  -h-2|0;}else{f=h-1|0;if(f<c)return  -h-1|0;}}return h;}
function B1(){Z.call(this);this.b_=0;}
function JT(a){var b=new B1();R5(b,a);return b;}
function R5(a,b){BH(a);a.b_=b;}
function Zc(a){return 1;}
function Xl(a,b,c){return a.b_!=c.d(b)?(-1):1;}
function UM(a,b,c,d){var e,f,g,h;if(!(c instanceof Bi))return C7(a,b,c,d);e=c;f=d.q();while(true){if(b>=f)return (-1);g=e.cF(a.b_,b);if(g<0)return (-1);h=a.f;b=g+1|0;if(h.b(b,c,d)>=0)break;}return g;}
function Zp(a,b,c,d,e){var f,g;if(!(d instanceof Bi))return Db(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);g=f.eq(a.b_,c);if(g<0)break a;if(g<b)break a;if(a.f.b(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function Ra(a){return a.b_;}
function Wf(a,b){if(b instanceof B1)return b.ci()!=a.b_?0:1;if(!(b instanceof B3)){if(b instanceof BK)return b.j(a.b_);if(!(b instanceof B0))return 1;return 0;}return b.I(0,FV(a.b_))<=0?0:1;}
function GB(){Z.call(this);this.iS=0;}
function ABu(a){var b=new GB();Va(b,a);return b;}
function Va(a,b){BH(a);a.Q=2;a.iS=Co(Cn(b));}
function Ul(a,b,c){var d,e,f;d=b+1|0;e=c.d(b);f=c.d(d);return a.iS!=Co(Cn(BS(e,f)))?(-1):2;}
function Mi(){BU.call(this);}
function AC8(){var a=new Mi();OE(a);return a;}
function OE(a){CR(a);}
function N8(a,b){$rt_putStdout(b);}
function DD(){C.call(this);}
var AFF=null;var AFG=null;function E3(){if(AFF===null)AFF=Pe(AC8(),0);return AFF;}
function Cz(){if(AFG===null)AFG=Pe(ACS(),0);return AFG;}
function Gr(b,c,d,e,f){var g,h,i,j,k,l,m,n;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=IY(b)){g=e+f|0;if(g<=IY(d)){a:{b:{if(b!==d){h=Cf(b).eA();i=Cf(d).eA();if(h!==null&&i!==null){if(h===i)break b;if(!h.eo()&&!i.eo()){j=b;k=0;g=c;while(k<f){l=j.data;m=g+1|0;n=l[g];if(!i.jO(n)){F$(b,c,d,e,k);G(J$());}k=k+1|0;g=m;}F$(b,c,d,e,f);return;}if(!h.eo())break a;if(i.eo())break b;else break a;}G(J$());}}F$(b,c,d,e,f);return;}G(J$());}}G(Cq());}G(SO(B(265)));}
function F$(b,c,d,e,f){if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}} else {c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function IF(){var a=this;I.call(a);a.eF=0;a.hC=null;a.fV=null;}
function AAR(a,b,c){var d=new IF();Y_(d,a,b,c);return d;}
function Y_(a,b,c,d){a.fV=b;a.eF=c;a.hC=d;Q(a);}
function Uk(a,b){return !(a.eF^a.fV.v.bN(b))&&!(a.eF^a.fV.bL^a.hC.j(b))?0:1;}
function IM(){var a=this;I.call(a);a.i9=0;a.iW=null;a.it=null;a.lC=null;}
function ADY(a,b,c,d){var e=new IM();VR(e,a,b,c,d);return e;}
function VR(a,b,c,d,e){a.lC=b;a.i9=c;a.iW=d;a.it=e;Q(a);}
function Ng(a,b){return a.i9^(!a.iW.j(b)&&!a.it.j(b)?0:1)?0:1;}
function IH(){var a=this;I.call(a);a.i3=null;a.jm=null;}
function ACE(a,b){var c=new IH();NI(c,a,b);return c;}
function NI(a,b,c){a.jm=b;a.i3=c;Q(a);}
function Tk(a,b){return a.i3.j(b);}
function IG(){var a=this;I.call(a);a.eS=0;a.h4=null;a.e5=null;}
function ACf(a,b,c){var d=new IG();N3(d,a,b,c);return d;}
function N3(a,b,c,d){a.e5=b;a.eS=c;a.h4=d;Q(a);}
function NF(a,b){return !(a.eS^a.e5.v.bN(b))&&!(a.eS^a.e5.bL^a.h4.j(b))?1:0;}
function JB(){var a=this;K.call(a);a.iM=0;a.jd=0;}
function H(a,b){var c=new JB();Yl(c,a,b);return c;}
function Yl(a,b,c){R(a);a.iM=b;a.jd=c;}
function AAJ(a){var b;b=By().J(a.iM,a.jd);return b;}
function II(){var a=this;I.call(a);a.ih=null;a.lK=null;}
function ACA(a,b){var c=new II();NX(c,a,b);return c;}
function NX(a,b,c){a.lK=b;a.ih=c;Q(a);}
function WX(a,b){return a.ih.j(b);}
function Jt(){K.call(this);}
function ABx(){var a=new Jt();Ru(a);return a;}
function Ru(a){R(a);}
function YC(a){return By().J(48,57).J(97,102).J(65,70);}
function IP(){var a=this;I.call(a);a.gW=null;a.g5=0;a.gM=null;}
function AA_(a,b,c){var d=new IP();TP(d,a,b,c);return d;}
function TP(a,b,c,d){a.gM=b;a.gW=c;a.g5=d;Q(a);}
function S8(a,b){return !a.gW.j(b)&&!(a.g5^a.gM.v.bN(b))?1:0;}
function IL(){var a=this;I.call(a);a.iF=0;a.h9=null;a.h1=null;a.kj=null;}
function AC4(a,b,c,d){var e=new IL();OF(e,a,b,c,d);return e;}
function OF(a,b,c,d,e){a.kj=b;a.iF=c;a.h9=d;a.h1=e;Q(a);}
function Um(a,b){return a.iF^(!a.h9.j(b)&&!a.h1.j(b)?0:1);}
function IK(){var a=this;I.call(a);a.ie=null;a.kF=null;}
function ADe(a,b){var c=new IK();N0(c,a,b);return c;}
function N0(a,b,c){a.kF=b;a.ie=c;Q(a);}
function NH(a,b){return a.ie.j(b)?0:1;}
function I$(){W.call(this);this.gh=null;}
function AB6(a){var b=new I$();SH(b,a);return b;}
function SH(a,b){BD(a);a.gh=b;}
function P_(a,b,c,d){var e,f,g,h,i;e=d.q();f=b+1|0;if(f>e){d.by=1;return (-1);}g=c.d(b);if(Bm(g)){h=b+2|0;if(h<=e){i=c.d(f);if(CT(g,i))return a.gh.dk(BS(g,i))?(-1):a.f.b(h,c,d);}}return a.gh.dk(g)?(-1):a.f.b(f,c,d);}
function TU(a,b){a.f=b;}
function Ne(a){return (-2147483602);}
function ZQ(a,b){return 1;}
function IN(){var a=this;I.call(a);a.gx=null;a.i0=0;a.hw=null;}
function ABI(a,b,c){var d=new IN();WJ(d,a,b,c);return d;}
function WJ(a,b,c,d){a.hw=b;a.gx=c;a.i0=d;Q(a);}
function W1(a,b){return !a.gx.j(b)&&!(a.i0^a.hw.v.bN(b))?0:1;}
function Gs(){var a=this;C.call(a);a.kr=null;a.h6=null;a.dB=null;a.S=null;a.ea=0;a.ec=0;}
function ACM(a,b){var c=new Gs();Ns(c,a,b);return c;}
function Es(a,b){var c,d;c=a.dB.g();if(b>=0&&b<=c){d=Jv(a,b);if(d>=0&&a.S.ju()){a.S.kG();return 1;}a.S.bA=(-1);return 0;}G(Bp(EL(b)));}
function Jv(a,b){var c;a.S.kn();a.S.d6(1);a.S.kz(b);c=a.h6.bh(b,a.dB,a.S);if(c==(-1))a.S.by=1;return c;}
function K5(a){var b,c;b=a.dB.g();if(!HG(a))b=a.ec;if(a.S.bA>=0&&a.S.ig()==1){a.S.bA=a.S.eb();if(a.S.eb()==a.S.hE()){c=a.S;c.bA=c.bA+1|0;}return a.S.bA<=b&&Es(a,a.S.bA)?1:0;}return Es(a,a.ea);}
function MV(a,b){return a.S.eZ(b);}
function Hj(a,b){return a.S.ga(b);}
function Mg(a){return MV(a,0);}
function Ki(a){return Hj(a,0);}
function HG(a){return a.S.df();}
function Ns(a,b,c){var d,e,f,g,h;M(a);a.ea=(-1);a.ec=(-1);a.kr=b;a.h6=b.eH;a.dB=c;a.ea=0;a.ec=a.dB.g();d=new Fm;e=a.ea;f=a.ec;g=G_(b);h=K2(b);Hy(d,c,e,f,g,h,Ie(b));a.S=d;}
function BZ(){C.call(this);}
var AFH=null;var AFI=null;var AFJ=null;var AFK=null;var AFL=null;var AFM=null;function N(){N=Be(BZ);Pz();}
function FV(b){var c,d;N();c=new Bi;d=$rt_createCharArray(1);d.data[0]=b;Dr(c,d);return c;}
function G3(b){N();return b>0&&b<=65535?1:0;}
function DZ(b){N();return b>=65536&&b<=1114111?1:0;}
function Bm(b){N();return (b&64512)!=55296?0:1;}
function Bt(b){N();return (b&64512)!=56320?0:1;}
function D3(b){N();return !Bm(b)&&!Bt(b)?0:1;}
function CT(b,c){N();return Bm(b)&&Bt(c)?1:0;}
function BS(b,c){N();return ((b&1023)<<10|c&1023)+65536|0;}
function Iu(b,c){N();return IO(b,c,b.data.length);}
function IO(b,c,d){var e,f;N();if(c<(d-1|0)){e=b.data;if(Bm(e[c])){f=c+1|0;if(Bt(e[f]))return BS(e[c],e[f]);}}return b.data[c];}
function CQ(b){var c;N();c=b-65536|0;return (55296|c>>10&1023)&65535;}
function CG(b){N();return (56320|b&1023)&65535;}
function BI(b){N();return Co(b)&65535;}
function Co(b){N();return JX(b).toLowerCase().charCodeAt(0);}
function BA(b){N();return Cn(b)&65535;}
function Cn(b){N();return JX(b).toUpperCase().charCodeAt(0);}
function E$(b,c){N();return J9(b,c);}
function J9(b,c){var d;N();if(c>=2&&c<=36){d=Fi(b);if(d>=c)d=(-1);return d;}return (-1);}
function Eh(b){N();return Fi(b);}
function Fi(b){var c,d,e,f,g,h,i,j;N();c=GW();d=c.data;e=0;f=(d.length/2|0)-1|0;while(f>=e){g=(e+f|0)/2|0;h=g*2|0;i=d[h];j=BW(b,i);if(j>0)e=g+1|0;else{if(j>=0)return d[h+1|0];f=g-1|0;}}return (-1);}
function D_(b,c){N();if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function MC(b){N();return Bn(b)!=9?0:1;}
function GW(){N();if(AFI===null)AFI=Tn((GK().value!==null?$rt_str(GK().value):null));return AFI;}
function GK(){N();if(AFL===null)AFL=LI();return AFL;}
function LL(){N();if(AFJ===null)AFJ=AAE((KA().value!==null?$rt_str(KA().value):null));return AFJ;}
function KA(){N();if(AFM===null)AFM=MS();return AFM;}
function CK(b){var c,d;N();if(b<65536){c=$rt_createCharArray(1);c.data[0]=b&65535;return c;}c=$rt_createCharArray(2);d=c.data;d[0]=CQ(b);d[1]=CG(b);return c;}
function Lf(b){var c;N();a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}c=1;break a;}c=0;}return c;}
function C_(b){N();return Bn(b);}
function Bn(b){var c,d,e,f,g,h;N();if(G3(b)&&D3(b&65535))return 19;c=LL();d=c.data;e=0;f=d.length-1|0;while(e<=f){g=(e+f|0)/2|0;h=d[g];if(b>=h.gB)e=g+1|0;else{if(b>=h.fM)return h.id.data[b-h.fM|0];f=g-1|0;}}return 0;}
function Ip(b){N();return FP(b);}
function FP(b){N();return Bn(b)!=2?0:1;}
function Gv(b){N();return Bn(b)!=1?0:1;}
function He(b){N();return Bn(b)!=3?0:1;}
function MT(b){N();return !Bn(b)?0:1;}
function Lj(b){N();switch(Bn(b)){case 1:case 2:case 3:case 4:case 5:break;default:return 0;}return 1;}
function F3(b){N();return EO(b);}
function EO(b){N();a:{switch(Bn(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function Mj(b){N();a:{switch(Bn(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break a;default:break a;}return 1;}return CJ(b);}
function MG(b){N();a:{switch(Bn(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break a;default:break a;}return 1;}return CJ(b);}
function Lx(b){N();a:{switch(Bn(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break a;default:break a;}return 1;}return 0;}
function L1(b){N();a:{switch(Bn(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break a;default:break a;}return 1;}return CJ(b);}
function KD(b){N();a:{switch(Bn(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break a;default:break a;}return 1;}return CJ(b);}
function CJ(b){N();a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Bn(b)!=16?0:1;}
function Ft(b){N();switch(Bn(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function I9(b){N();return FZ(b);}
function FZ(b){N();switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return Ft(b);}return 1;}
function Pz(){AFH=D($rt_charcls());AFK=F(BZ,128);}
function LI(){return {"value":"oD#*% .%%2%)6%-:%1>%5B%9F%=J%AN%Eo%Is%Mw%Q{%U!\'Y&\'^*\'b.\'f2\'j6\'n:\'r>\'vB\'zF\'!#J\'&#N\'*#R\'.#V\'2#Z\'6#_\':#c\'>#g\'B#k\'F#o\'J#s\'N#w\'R#6)I:)M>)QB)UF)YJ)^N)bR)fV)jZ)n_)rc)vg)zk)!#o)&#s)*#w).#{)2#!+6#&+:#*+>#.+B#2+F#6+J#:+N#>+R#{R# !T#%&T#)*T#-.T#12T#56T#9:T#=>T#ABT#E6a# :a#%>a#)Ba#-Fa#1Ja#5Na#9Ra#=Va#AZa#E:s# >s#%Bs#)Fs#-Js#1Ns#5Rs#9Vs#=Zs#A_s#EZ:% _:%%c:%)g:%-k:%1o:%5s:%9w:%={:%A!<%E2F% 6F%%:F%)>F%-BF%1FF%5JF%9NF%=RF%AVF%EgP% kP%%oP%)sP%-wP%1{P%5!R%9&R%=*R%A.R%E>]% B]%%F]%)J]%-N]%1R]%5V]%9Z]%=_]%Ac]%Esg% wg%%{g%)!i%-&"
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
function K$(){W.call(this);}
function ADq(){var a=new K$();P6(a);return a;}
function P6(a){BD(a);}
function Zn(a,b,c,d){var e,f,g,h,i;e=d.q();f=b+1|0;if(f>e){d.by=1;return (-1);}g=c.d(b);if(Bm(g)){h=b+2|0;if(h<=e){i=c.d(f);if(CT(g,i))return a.f.b(h,c,d);}}return a.f.b(f,c,d);}
function Rz(a,b){a.f=b;}
function PR(a){return (-2147483602);}
function Rw(a,b){return 1;}
function GO(){var a=this;Z.call(a);a.ix=0;a.g4=0;}
function Sb(a){var b=new GO();Ts(b,a);return b;}
function Ts(a,b){BH(a);a.ix=b;a.g4=C6(b);}
function On(a,b,c){return a.ix!=c.d(b)&&a.g4!=c.d(b)?(-1):1;}
function B0(){var a=this;Z.call(a);a.es=0;a.d$=0;a.dX=0;}
function ABC(a){var b=new B0();ZO(b,a);return b;}
function ZO(a,b){var c,d;BH(a);a.Q=2;a.dX=b;c=CK(b);d=c.data;a.es=d[0];a.d$=d[1];}
function Tc(a,b,c){var d,e,f;d=b+1|0;e=c.d(b);f=c.d(d);return a.es==e&&a.d$==f?2:(-1);}
function Pt(a,b,c,d){var e,f,g,h;if(!(c instanceof Bi))return C7(a,b,c,d);e=c;f=d.q();while(b<f){g=e.cF(a.es,b);if(g<0)return (-1);b=g+1|0;if(b>=f)continue;h=e.d(b);if(a.d$==h&&a.f.b(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function R2(a,b,c,d,e){var f,g,h;if(!(d instanceof Bi))return Db(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);g=f.eq(a.d$,c);h=g+(-1)|0;if(h<0)break a;if(h<b)break a;if(a.es==f.d(h)&&a.f.b(h+2|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function N9(a){return a.dX;}
function SS(a,b){if(b instanceof B0)return b.gi()!=a.dX?0:1;if(b instanceof BK)return b.j(a.dX);if(b instanceof B1)return 0;if(!(b instanceof B3))return 1;return 0;}
function G8(){I.call(this);this.lO=null;}
function AB1(a){var b=new G8();UK(b,a);return b;}
function UK(a,b){a.lO=b;Q(a);}
function Xr(a,b){return FP(b);}
function Ms(){var a=this;K.call(a);a.fx=0;a.eW=0;a.gU=0;}
function Dc(a,b){var c=new Ms();Uy(c,a,b);return c;}
function ADt(a,b,c){var d=new Ms();Nx(d,a,b,c);return d;}
function Uy(a,b,c){R(a);a.eW=c;a.fx=b;}
function Nx(a,b,c,d){R(a);a.gU=d;a.eW=c;a.fx=b;}
function Nw(a){var b;b=ABp(a.fx);if(a.gU)b.K.d7(0,2048);b.y=a.eW;return b;}
function BK(){var a=this;W.call(a);a.bZ=null;a.lQ=0;}
function Zv(a){var b=new BK();It(b,a);return b;}
function It(a,b){BD(a);a.bZ=b.c8();a.lQ=b.G;}
function UT(a,b,c,d){var e,f,g,h,i;e=d.q();if(b<e){f=b+1|0;g=c.d(b);if(a.j(g)){h=a.f.b(f,c,d);if(h>0)return h;}if(f<e){h=f+1|0;i=c.d(f);if(CT(g,i)&&a.j(BS(g,i)))return a.f.b(h,c,d);}}return (-1);}
function V0(a,b){return a.bZ.j(b);}
function P3(a,b){if(b instanceof B0)return DU(a.bZ,b.gi());if(b instanceof B1)return DU(a.bZ,b.ci());if(b instanceof BK)return CV(a.bZ,b.bZ);if(!(b instanceof B3))return 1;return CV(a.bZ,b.fc());}
function Zi(a){return a.bZ;}
function Vb(a,b){a.f=b;}
function Vd(a,b){return 1;}
function GY(){BK.call(this);}
function Pr(a){var b=new GY();TG(b,a);return b;}
function TG(a,b){It(a,b);}
function YY(a,b){return a.bZ.j(Co(Cn(b)));}
function Nc(){K.call(this);}
function AAV(){var a=new Nc();SY(a);return a;}
function SY(a){R(a);}
function NR(a){var b;b=ABi(a);b.y=1;return b;}
function B_(){C.call(this);}
var AFN=null;var AFO=null;function AFP(){var a=new B_();Fl(a);return a;}
function Fl(a){M(a);}
function Fp(b){if(!(b&1)){if(AFO!==null)return AFO;AFO=ACP();return AFO;}if(AFN!==null)return AFN;AFN=ABT();return AFN;}
function E7(){var a=this;W.call(a);a.b3=null;a.fr=null;a.dn=0;}
function WC(a,b){var c=new E7();OI(c,a,b);return c;}
function OI(a,b,c){BD(a);a.b3=b;a.dn=c;}
function NJ(a,b){a.f=b;}
function FJ(a){if(a.fr===null)a.fr=GC(a.b3);return a.fr;}
function NK(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;e=d.q();f=0;g=$rt_createIntArray(3);h=(-1);i=(-1);if(b>=e)return (-1);j=b+1|0;k=c.d(b);l=TI(k);if(l!==null){m=l.data;n=0;if(m.length!=a.dn)return (-1);while(true){if(n>=a.dn)return a.f.b(j,c,d);if(m[n]!=a.b3.data[n])break;n=n+1|0;}return (-1);}o=g.data;o[f]=k;p=k-4352|0;if(p>=0&&p<19){if(j<e){k=c.d(j);h=k-4449|0;}if(h>=0&&h<21){q=j+1|0;o[1]=k;if(q<e){k=c.d(q);i=k-4519|0;}if(i>=0&&i<28){r=q+1|0;o[2]=k;if(a.dn==3&&o[0]==a.b3.data[0]&&o[1]==a.b3.data[1]&&o[2]
==a.b3.data[2]){s=a.f;r=s.b(r,c,d);}else r=(-1);return r;}if(a.dn==2&&o[0]==a.b3.data[0]&&o[1]==a.b3.data[1]){s=a.f;r=s.b(q,c,d);}else r=(-1);return r;}return (-1);}return (-1);}
function Rx(a,b){var c,d;a:{if(b instanceof E7){c=b;if(!FJ(c).bS(FJ(a))){d=0;break a;}}d=1;}return d;}
function Wy(a,b){return 1;}
function Dq(){CD.call(this);}
function AFQ(a,b,c){var d=new Dq();GE(d,a,b,c);return d;}
function GE(a,b,c,d){Fz(a,b);a.L=c;a.bJ=d;}
function Mv(b){if(b>=0)return ABo(b);G(Bz(J().a(B(266)).m(b).e()));}
function MD(b,c,d){return ABS(0,b.data.length,b,c,c+d|0,0);}
function O1(b){return MD(b,0,b.data.length);}
function PK(a,b,c,d){var e,f,g,h,i;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Bp(J().a(B(267)).m(g).a(B(236)).m(f).e()));if(X(a)<d)G(Yg());if(d<0)G(Bp(J().a(B(237)).m(d).a(B(238)).e()));h=a.L;i=0;while(i<d){g=c+1|0;f=h+1|0;e[c]=a.lp(h);i=i+1|0;c=g;h=f;}a.L=a.L+d|0;return a;}}e=b.data;G(Bp(J().a(B(239)).m(c).a(B(23)).m(e.length).a(B(240)).e()));}
function SA(a,b){return a.iC(b,0,b.data.length);}
function AAk(a,b,c,d){var e,f,g,h,i;if(a.dN())G(Gw());if(X(a)<d)G(I5());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Bp(J().a(B(268)).m(g).a(B(236)).m(f).e()));if(d<0)G(Bp(J().a(B(237)).m(d).a(B(238)).e()));h=a.L;i=0;while(i<d){g=h+1|0;f=c+1|0;a.hf(h,e[c]);i=i+1|0;h=g;c=f;}a.L=a.L+d|0;return a;}}e=b.data;G(Bp(J().a(B(239)).m(c).a(B(23)).m(e.length).a(B(240)).e()));}
function QD(a,b,c,d){var e,f,g,h,i,j;if(a.dN())G(Gw());e=d-c|0;if(X(a)<e)G(I5());if(c>=0&&c<b.g()){if(d>b.g()){f=new C5;g=J().a(B(268)).m(d).a(B(269));L2(f,g.m(b.g()).e());G(f);}if(c>d)G(Bp(J().a(B(270)).m(c).a(B(271)).m(d).e()));h=a.L;while(c<d){i=h+1|0;j=c+1|0;a.hf(h,b.d(c));h=i;c=j;}a.L=a.L+e|0;return a;}G(Bp(J().a(B(270)).m(c).a(B(23)).m(b.g()).a(B(240)).e()));}
function DR(a,b){return a.lj(b,0,b.g());}
function IQ(a){return a.jA();}
function E9(a){return a.lA();}
function G6(a){MF(a);return a;}
function Nn(a,b){FG(a,b);return a;}
function DP(){Dq.call(this);}
function AFR(a,b,c){var d=new DP();Jr(d,a,b,c);return d;}
function Jr(a,b,c,d){GE(a,b,c,d);}
function Zx(a){return a.kR();}
function L0(){var a=this;DP.call(a);a.iT=0;a.fJ=0;a.ew=null;}
function ABo(a){var b=new L0();Ro(b,a);return b;}
function ABS(a,b,c,d,e,f){var g=new L0();MX(g,a,b,c,d,e,f);return g;}
function Ro(a,b){MX(a,0,b,$rt_createCharArray(b),0,b,0);}
function MX(a,b,c,d,e,f,g){Jr(a,c,e,f);a.fJ=b;a.iT=g;a.ew=d;}
function Qh(a,b){return a.ew.data[b+a.fJ|0];}
function Nk(a,b,c){a.ew.data[b+a.fJ|0]=c;}
function P$(a){return 1;}
function Wb(a){return a.ew;}
function Y3(a){return a.iT;}
function MZ(){K.call(this);}
function ADC(){var a=new MZ();OW(a);return a;}
function OW(a){R(a);}
function Xz(a){return By().J(33,64).J(91,96).J(123,126);}
function EQ(){var a=this;C.call(a);a.cC=null;a.eE=null;}
var AFS=null;function AA2(){AA2=Be(EQ);Nr();}
function NP(a,b){var c=new EQ();Gx(c,a,b);return c;}
function Gx(a,b,c){AA2();M(a);a.cC=b;a.eE=c;}
function Td(a,b,c){var d,e,f,g,h,i,j,k,l;d=b.createElement("div");e=0;while(e<a.cC.cM()){f=0;while(f<a.cC.iu()){g=(5-a.cC.cM()|0)+e|0;h=LO(a,g,f);if(h>0){i=FW(a,b,h);d.appendChild(i);}j=a.cC.dM(e,f);if(j!==null){k=KW(a,b,j,c);d.appendChild(k);}else{i=FW(a,b,30);d.appendChild(i);}f=f+1|0;}l=b.createElement("br");d.appendChild(l);e=e+1|0;}return d;}
function KW(a,b,c,d){var e,f,g,h,i,j,k,l;e=b.createElement("span");e.setAttribute("class","key");f=null;if(!d)f=AFS.data[c.bd()];else{g=a.eE.gl(c);if(g!==null){h=V(255,160+(g.dU()*1000.0|0)|0);i=Bq(0,160-(g.dU()*1500.0|0)|0);f=J().a(B(272)).m(h).a(B(230)).m(i).a(B(230)).m(i).a(B(240)).e();}}if(f===null){j=!!1;e.hidden=j;}else{k=J().a(B(273)).a(f).e();e.setAttribute("style",$rt_ustr(k));}if(!d){l=J().a(B(274)).a(Nh(c.da())).a(B(275));l=l.a($rt_str(c.iU().toFixed(1))).e();e.setAttribute("title",$rt_ustr(l));}
else{g=a.eE.gl(c);if(g!==null){j=J().a(B(274)).a(Nh(c.da())).a(B(276));j=j.a($rt_str((g.dU()*100.0).toFixed(2))).a(B(246)).e();e.setAttribute("title",$rt_ustr(j));}}j=Ge(c.iO());j=b.createTextNode($rt_ustr(j));e.appendChild(j);return e;}
function FW(a,b,c){var d,e;d=b.createElement("span");d.setAttribute("class","keygap");e=J().a(B(277)).m(c).a(B(278)).e();d.setAttribute("style",$rt_ustr(e));return d;}
function LO(a,b,c){var d,e;a:{d=a.cC.kt();DT();if(d===AEX){if(b==1&&!c)return 0;if(b==2&&!c)return 15;if(b==3&&!c)return 22;if(b!=4)break a;if(c)break a;return 37;}if(d!==AEY){if(d!==AEZ)break a;if(c&&c!=5)break a;return 15;}if(b==1&&!c)return 0;if(b==2&&!c)return 15;if(b==3&&!c)return 22;e=BW(b,4);if(!e&&!c)return 7;if(!e&&c==5)return 30;}return 0;}
function Nr(){var b,c;b=F(Bi,10);c=b.data;c[0]=B(279);c[1]=B(280);c[2]=B(281);c[3]=B(282);c[4]=null;c[5]=null;c[6]=B(283);c[7]=B(281);c[8]=B(280);c[9]=B(279);AFS=b;}
function B4(){CO.call(this);}
var AEC=null;var AED=null;var AEE=null;var AEF=null;var AFT=null;function FY(){FY=Be(B4);T_();}
function E4(a,b){var c=new B4();LE(c,a,b);return c;}
function X6(){FY();return AFT.dI();}
function L4(b){FY();return J5(D(B4),b);}
function LE(a,b,c){FY();FS(a,b,c);}
function T_(){var b,c;AEC=E4(B(284),0);AED=E4(B(285),1);AEE=E4(B(286),2);AEF=E4(B(287),3);b=F(B4,4);c=b.data;c[0]=AEC;c[1]=AED;c[2]=AEE;c[3]=AEF;AFT=b;}
function HZ(){I.call(this);this.kb=null;}
function ADE(a){var b=new HZ();NN(b,a);return b;}
function NN(a,b){a.kb=b;Q(a);}
function W2(a,b){return He(b);}
function De(){var a=this;C.call(a);a.hx=null;a.hl=null;a.gE=null;a.gt=null;a.i4=0;}
function P(a,b,c){var d=new De();Qz(d,a,b,c);return d;}
function Qz(a,b,c,d){M(a);a.hx=b;a.hl=c;a.gE=d;}
function OR(a){return a.hx;}
function Yc(a){return a.hl;}
function Of(a){return a.gE;}
function Sh(a){return a.gt;}
function AAB(a,b){a.gt=b;}
function QG(a){return a.i4;}
function QP(a,b){a.i4=b;}
function CB(){}
function HI(){C.call(this);}
function ADB(){var a=new HI();AAq(a);return a;}
function AAq(a){M(a);}
function MW(a,b){if(M4())G7();}
function Xo(a,b){MW(a,b);}
function MH(){C.call(this);}
function HK(){C.call(this);}
function AAP(){var a=new HK();TW(a);return a;}
function TW(a){M(a);}
function Ls(a,b){var c,d;if(!$rt_str(E1().value).bS($rt_str(Ew().value))){c=Ew();d=$rt_ustr($rt_str(E1().value));c.value=d;c=Ev();B2();d=AFd.data.length;c.selectedIndex=d;}if(!$rt_str(Ep().value).bS($rt_str(E2().value))){c=E2();d=$rt_ustr($rt_str(Ep().value));c.value=d;c=Eq();B2();d=AFe.data.length;c.selectedIndex=d;}IU().click();DI();CF(null);BJ(null);}
function AAA(a,b){Ls(a,b);}
function Hk(){C.call(this);}
function ADG(){var a=new Hk();AAa(a);return a;}
function AAa(a){M(a);}
function JM(a,b){var c,d;c=Eq().selectedIndex;B2();if(c<AFe.data.length){d=AFe.data[c];Eg(d.bR());DI();CF(null);BJ(null);}}
function WB(a,b){JM(a,b);}
function GA(){var a=this;C.call(a);a.iy=null;a.iz=null;a.gv=null;}
function Rp(a,b,c){var d=new GA();VY(d,a,b,c);return d;}
function VY(a,b,c,d){M(a);a.iy=b;a.iz=c;a.gv=d;}
function Ve(a){return a.iy;}
function YP(a){return a.iz;}
function PZ(a){return a.gv;}
function SP(b){var c,d,e,f,g,h;c=$rt_createDoubleArray(10);d=b.X();while(d.Y()){e=d.V();f=e.ct().bd();g=e.dx().bd();if(Ih(f,g)){h=c.data;h[f]=h[f]+e.cu().bK();}}return c;}
function ML(){I.call(this);this.kN=null;}
function ABH(a){var b=new ML();VU(b,a);return b;}
function VU(a,b){a.kN=b;Q(a);}
function VM(a,b){return 0;}
function L9(){BP.call(this);this.lP=null;}
function ADd(a){var b=new L9();Qs(b,a);return b;}
function Qs(a,b){C3(a);a.lP=b;}
function Hl(){C.call(this);}
function ABV(){var a=new Hl();TA(a);return a;}
function TA(a){M(a);}
function KQ(a,b){var c,d;c=Ev().selectedIndex;B2();if(c<AFd.data.length){d=AFd.data[c];if(!d.dl().H()){Gg(d.bR());DI();CF(null);BJ(null);}}}
function UN(a,b){KQ(a,b);}
function Lp(){I.call(this);this.lR=null;}
function AB9(a){var b=new Lp();V1(b,a);return b;}
function V1(a,b){a.lR=b;Q(a);}
function Tz(a,b){return Lf(b);}
function J8(){S.call(this);this.h$=0;}
function V6(a){var b=new J8();Y4(b,a);return b;}
function Y4(a,b){Bo(a);a.h$=b;}
function Q9(a,b,c,d){var e,f,g,h,i;e=b<d.q()?c.d(b):32;f=!b?32:c.d(b-1|0);g=!d.df()?d.bw():0;h=e!=32&&!FK(a,e,b,g,c)?0:1;i=f!=32&&!FK(a,f,b-1|0,g,c)?0:1;return h^i^a.h$?(-1):a.f.b(b,c,d);}
function Rv(a,b){return 0;}
function FK(a,b,c,d,e){var f;if(!F3(b)&&b!=95){a:{if(C_(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=e.d(c);if(F3(f))return 0;if(C_(f)!=6)return 1;}}return 1;}return 0;}
function KO(){S.call(this);this.dH=0;}
function AAQ(a){var b=new KO();Wk(b,a);return b;}
function Wk(a,b){Bo(a);a.dH=b;}
function ZN(a,b,c,d){var e;e=!d.cU()?c.g():d.q();if(b>=e){d.D(a.dH,0);return a.f.b(b,c,d);}if((e-b|0)==1&&c.d(b)==10){d.D(a.dH,1);return a.f.b(b+1|0,c,d);}return (-1);}
function Wd(a,b){var c;c=!b.bD(a.dH)?0:1;b.D(a.dH,(-1));return c;}
function Dm(){K.call(this);}
function ACH(){var a=new Dm();L6(a);return a;}
function L6(a){R(a);}
function LW(a){return By().J(9,13).bg(32);}
function Hh(){var a=this;C.call(a);a.ku=null;a.iY=null;a.hd=null;a.h2=null;a.ko=0.0;a.hn=null;a.gs=null;a.hI=null;}
function ACR(a,b,c,d,e,f,g,h){var i=new Hh();Vu(i,a,b,c,d,e,f,g,h);return i;}
function Vu(a,b,c,d,e,f,g,h,i){M(a);a.ku=b;a.iY=c;a.hd=d;a.h2=e;a.ko=f;a.hn=g;a.gs=h;a.hI=i;}
function PV(a){return a.iY;}
function Vf(a){return a.hd;}
function WM(a){return a.h2;}
function Pw(a){return a.hn;}
function YU(a){return a.gs;}
function Ua(a){return a.hI;}
function LR(){Z.call(this);this.gw=0;}
function SJ(a){var b=new LR();Pd(b,a);return b;}
function Pd(a,b){BH(a);a.gw=BI(BA(b));}
function Nt(a,b,c){return a.gw!=BI(BA(c.d(b)))?(-1):1;}
function DO(){BO.call(this);this.gY=0.0;}
var AFU=0.0;var AFV=null;function FE(){FE=Be(DO);SF();}
function AB7(a){var b=new DO();Le(b,a);return b;}
function Le(a,b){FE();F2(a);a.gY=b;}
function AAh(a){return a.gY;}
function FA(b){FE();return AB7(b);}
function DE(b){var c,d,e,f,g,h,i,j,k,l,m,n,o;FE();if(b.H())G(Ca());c=0;d=b.g();while(true){if(b.d(c)>32){while(b.d(d-1|0)<=32){d=d+(-1)|0;}e=0;if(b.d(c)==45){c=c+1|0;e=1;}else if(b.d(c)==43)c=c+1|0;if(c==d)G(Ca());a:{f=b.d(c);g=Long_ZERO;h=0;i=0;if(f!=46){i=1;if(f>=48&&f<=57){b:{while(c<d){if(b.d(c)!=48)break b;c=c+1|0;}}while(c<d){j=b.d(c);if(j<48)break a;if(j>57)break a;if(Long_toNumber(g)>=1.0E17)h=h+1|0;else g=Long_add(Long_mul(g,Long_fromInt(10)),Long_fromInt(j-48|0));c=c+1|0;}}else G(Ca());}}if(c<d&&b.d(c)
==46){c=c+1|0;c:{while(true){if(c>=d)break c;k=b.d(c);if(k<48)break c;if(k>57)break;if(Long_toNumber(g)<1.0E17){g=Long_add(Long_mul(g,Long_fromInt(10)),Long_fromInt(k-48|0));h=h+(-1)|0;}c=c+1|0;i=1;}}if(!i)G(Ca());}if(c<d){k=b.d(c);if(k!=101&&k!=69)G(Ca());l=c+1|0;m=0;if(l==d)G(Ca());if(b.d(l)==45){l=l+1|0;m=1;}else if(b.d(l)==43)l=l+1|0;n=0;k=0;d:{while(true){if(l>=d)break d;o=b.d(l);if(o<48)break d;if(o>57)break;n=(10*n|0)+(o-48|0)|0;k=1;l=l+1|0;}}if(!k)G(Ca());if(m)n= -n;h=h+n|0;}e:{j=BW(h,308);if(j<=0){if
(j)break e;if(Long_le(g,new Long(2133831477, 4185580)))break e;}return e?(-Infinity):Infinity;}if(e)g=Long_neg(g);return Long_toNumber(g)*KY(h);}c=c+1|0;if(c==d)break;}G(Ca());}
function KY(b){var c,d;FE();if(b>=0)c=10.0;else{c=0.1;b= -b;}d=1.0;while(b){if(b%2|0)d=d*c;c=c*c;b=b/2|0;}return d;}
function SF(){AFU=NaN;AFV=D($rt_doublecls());}
function Ey(){Bs.call(this);this.gT=0;}
function AFW(a){var b=new Ey();Mu(b,a);return b;}
function Mu(a,b){Ck(a,b);}
function Pm(a,b,c,d){var e;e=a.c_();d.D(e,b-d.bD(e)|0);a.gT=b;return b;}
function RT(a){return a.gT;}
function Q6(a,b){return 0;}
function Dn(){W.call(this);this.cH=0;}
function P2(a){var b=new Dn();R1(b,a);return b;}
function R1(a,b){BD(a);a.cH=b;}
function QJ(a,b){a.f=b;}
function SM(a,b,c,d){var e,f,g;e=b+1|0;if(e>d.q()){d.by=1;return (-1);}f=c.d(b);if(b>d.bw()){g=c.d(b-1|0);if(Bm(g))return (-1);}if(a.cH!=f)return (-1);return a.f.b(e,c,d);}
function XB(a,b,c,d){var e,f,g,h,i;if(!(c instanceof Bi))return C7(a,b,c,d);e=c;f=d.bw();g=d.q();while(true){if(b>=g)return (-1);h=e.cF(a.cH,b);if(h<0)return (-1);if(h>f&&Bm(e.d(h-1|0))){b=h+1|0;continue;}i=a.f;b=h+1|0;if(i.b(b,c,d)>=0)break;}return h;}
function T5(a,b,c,d,e){var f,g,h;if(!(d instanceof Bi))return Db(a,b,c,d,e);f=e.bw();g=d;a:{while(true){if(c<b)return (-1);h=g.eq(a.cH,c);if(h<0)break a;if(h<b)break a;if(h>f&&Bm(g.d(h-1|0))){c=h+(-2)|0;continue;}if(a.f.b(h+1|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function OY(a,b){if(b instanceof B1)return 0;if(b instanceof B3)return 0;if(b instanceof BK)return 0;if(b instanceof B0)return 0;if(b instanceof Dy)return 0;if(!(b instanceof Dn))return 1;return b.cH!=a.cH?0:1;}
function VV(a,b){return 1;}
function E_(){}
function LQ(){B9.call(this);}
function ACF(a,b){var c=new LQ();T6(c,a,b);return c;}
function T6(a,b,c){IE(a,b,c);}
function LJ(){var a=this;C.call(a);a.iJ=0;a.b$=0;a.cA=null;a.ex=0;a.iv=0.0;}
function AC_(a,b,c){var d=new LJ();QI(d,a,b,c);return d;}
function QI(a,b,c,d){M(a);a.iJ=b;a.b$=c;a.kO(d);a.ex=M6(a);}
function WP(a){return BA(a.cA.d(0));}
function Z$(a){return a.iJ;}
function Xw(a){return a.b$;}
function Y8(a){return a.ex>4?1:0;}
function T7(a){return a.ex;}
function Q8(a,b){a.ex=b;}
function PF(a){return a.iv;}
function T8(a,b){a.iv=b;}
function OH(a){return a.cA;}
function Pi(a,b){var c,d,e,f;c=a.cA.cg().data;d=c.length;e=0;while(e<d){f=c[e];if(f==BA(b))return 1;e=e+1|0;}return 0;}
function Tp(a,b){var c;if(b.g()!=1)a.cA=b;else{c=Zk(b.d(0));if(!c)a.cA=b;else a.cA=J().a(Ge(b.d(0))).bt(c).e();}}
function M6(a){if(a.b$<=3)return a.b$;if(a.b$==4)return 3;if(a.b$==5)return 6;if(a.b$>9)return 9;return a.b$;}
function Zk(b){if(Lx(b)){if(!Ip(b))return BI(b);return BA(b);}a:{switch(b){case 39:break;case 40:case 41:case 42:case 43:case 58:case 60:case 62:case 63:case 64:case 65:case 66:case 67:case 68:case 69:case 70:case 71:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 80:case 81:case 82:case 83:case 84:case 85:case 86:case 87:case 88:case 89:case 90:case 92:break a;case 44:return 60;case 45:return 95;case 46:return 62;case 47:return 63;case 48:return 41;case 49:return 33;case 50:return 64;case 51:return 35;case 52:return 36;case 53:return 37;case 54:return 94;case 55:return 38;case 56:return 42;case 57:return 40;case 59:return 58;case 61:return 43;case 91:return 123;case 93:return 125;default:break a;}return 34;}return 0;}
function Ch(){var a=this;Bw.call(a);a.co=null;a.bz=0;}
function AFX(a,b,c,d,e){var f=new Ch();Dp(f,a,b,c,d,e);return f;}
function Dp(a,b,c,d,e,f){CA(a,c,d,e);a.co=b;a.bz=f;}
function AAs(a,b,c,d){var e,f,g,h;e=d.hQ(a.bz);if(!a.w.x(d))return a.f.b(b,c,d);if(e>=a.co.c3())return a.f.b(b,c,d);f=a.bz;g=e+1|0;d.b4(f,g);h=a.w.b(b,c,d);if(h>=0){d.b4(a.bz,0);return h;}f=a.bz;g=g+(-1)|0;d.b4(f,g);if(g>=a.co.c1())return a.f.b(b,c,d);d.b4(a.bz,0);return (-1);}
function Ff(){Ch.call(this);}
function AFY(a,b,c,d,e){var f=new Ff();HE(f,a,b,c,d,e);return f;}
function HE(a,b,c,d,e,f){Dp(a,b,c,d,e,f);}
function Ps(a,b,c,d){var e,f;e=d.hQ(a.bz);if(!a.w.x(d))return a.f.b(b,c,d);if(e>=a.co.c3()){d.b4(a.bz,0);return a.f.b(b,c,d);}if(e<a.co.c1()){d.b4(a.bz,e+1|0);f=a.w.b(b,c,d);}else{f=a.f.b(b,c,d);if(f>=0){d.b4(a.bz,0);return f;}d.b4(a.bz,e+1|0);f=a.w.b(b,c,d);}return f;}
function EA(){}
function DB(){Dl.call(this);this.cb=0;}
function AFZ(){var a=new DB();Mb(a);return a;}
function Mb(a){Ly(a);}
function U8(a){return ABm(a);}
function EZ(){}
function Ia(){var a=this;DB.call(a);a.bk=null;a.bn=0;}
function BX(){var a=new Ia();VZ(a);return a;}
function AF0(a){var b=new Ia();GS(b,a);return b;}
function VZ(a){GS(a,10);}
function GS(a,b){Mb(a);a.bk=F(C,b);}
function Py(a,b){var c,d;if(a.bk.data.length<b){if(a.bk.data.length>=1073741823)c=2147483647;else{d=a.bk.data.length*2|0;c=Bq(b,Bq(d,5));}a.bk=L_(a.bk,c);}}
function S9(a,b){Ex(a,b);return a.bk.data[b];}
function QN(a){return a.bn;}
function XK(a,b){var c,d;a.b1(a.bn+1|0);c=a.bk.data;d=a.bn;a.bn=d+1|0;c[d]=b;a.cb=a.cb+1|0;return 1;}
function YO(a,b,c){var d;JN(a,b);a.b1(a.bn+1|0);d=a.bn;while(d>b){a.bk.data[d]=a.bk.data[d-1|0];d=d+(-1)|0;}a.bk.data[b]=c;a.bn=a.bn+1|0;a.cb=a.cb+1|0;}
function TJ(a,b){var c,d,e,f;Ex(a,b);c=a.bk.data[b];a.bn=a.bn-1|0;while(b<a.bn){d=a.bk.data;e=a.bk.data;f=b+1|0;d[b]=e[f];b=f;}a.bk.data[a.bn]=null;a.cb=a.cb+1|0;return c;}
function Ex(a,b){if(b>=0&&b<a.bn)return;G(Cq());}
function JN(a,b){if(b>=0&&b<=a.bn)return;G(Cq());}
function E5(){}
function Fe(){}
function HH(){C.call(this);}
function Ny(a,b,c){a.mv($rt_str(b),Dz(c,"handleEvent"));}
function N_(a,b,c){a.nM($rt_str(b),Dz(c,"handleEvent"));}
function P9(a,b){return a.nd(b);}
function Qu(a,b,c,d){a.mB($rt_str(b),Dz(c,"handleEvent"),d?1:0);}
function XP(a,b){return !!a.mA(b);}
function Sl(a){return a.m9();}
function Oc(a,b,c,d){a.oP($rt_str(b),Dz(c,"handleEvent"),d?1:0);}
function K8(){CN.call(this);}
function ACy(a,b,c){var d=new K8();Rc(d,a,b,c);return d;}
function Rc(a,b,c,d){Eu(a,b,c,d);}
function RW(a,b,c,d){var e;if(!a.w.x(d))return a.f.b(b,c,d);e=a.f.b(b,c,d);if(e<0)e=a.w.b(b,c,d);return e;}
function Hw(){C.call(this);}
function Bi(){var a=this;C.call(a);a.s=null;a.dL=0;}
var AF1=null;function Cm(){Cm=Be(Bi);WQ();}
function Nh(a){var b=new Bi();Lo(b,a);return b;}
function GC(a){var b=new Bi();Dr(b,a);return b;}
function Fa(a,b,c){var d=new Bi();M9(d,a,b,c);return d;}
function ABJ(a,b,c,d){var e=new Bi();H8(e,a,b,c,d);return e;}
function AF2(a,b,c,d){var e=new Bi();F1(e,a,b,c,d);return e;}
function AC6(a,b,c){var d=new Bi();Gp(d,a,b,c);return d;}
function Lo(a,b){Cm();M(a);a.s=b.s;}
function Dr(a,b){var c,d,e;Cm();c=b.data;M(a);d=c.length;a.s=$rt_createCharArray(d);e=0;while(e<d){a.s.data[e]=c[e];e=e+1|0;}}
function M9(a,b,c,d){var e,f;Cm();M(a);a.s=$rt_createCharArray(d);e=0;while(e<d){f=b.data;a.s.data[e]=f[e+c|0];e=e+1|0;}}
function H8(a,b,c,d,e){Cm();F1(a,b,c,d,OA(e.e()));}
function F1(a,b,c,d,e){Cm();M(a);I7(a,b,c,d,e);}
function Gp(a,b,c,d){var e,f,g,h,i,j,k;Cm();M(a);a.s=$rt_createCharArray(d*2|0);e=0;f=0;while(f<d){g=b.data;h=c+1|0;i=g[c];if(i<65536){g=a.s.data;j=e+1|0;g[e]=i&65535;}else{g=a.s.data;k=e+1|0;g[e]=CQ(i);g=a.s.data;j=k+1|0;g[k]=CG(i);}f=f+1|0;c=h;e=j;}if(e<a.s.data.length)a.s=EM(a.s,e);}
function I7(a,b,c,d,e){var f;f=GZ(e,Mh(b,c,d));if(IQ(f)&&!BG(f)&&KC(f)==Kc(f))a.s=E9(f);else{a.s=$rt_createCharArray(X(f));f.kv(a.s);}}
function Qj(a,b){if(b>=0&&b<a.s.data.length)return a.s.data[b];G(Fg());}
function Wc(a){return a.s.data.length;}
function Y9(a){return a.s.data.length?0:1;}
function RB(a,b,c){var d,e,f;if((c+b.g()|0)>a.g())return 0;d=0;while(d<b.g()){e=b.d(d);f=c+1|0;if(e!=a.d(c))return 0;d=d+1|0;c=f;}return 1;}
function Zg(a,b){if(a===b)return 1;return a.ip(b,0);}
function PW(a,b,c){var d,e,f,g;d=Bq(0,c);if(b<65536){e=b&65535;while(true){if(d>=a.s.data.length)return (-1);if(a.s.data[d]==e)break;d=d+1|0;}return d;}f=CQ(b);g=CG(b);while(true){if(d>=(a.s.data.length-1|0))return (-1);if(a.s.data[d]==f&&a.s.data[d+1|0]==g)break;d=d+1|0;}return d;}
function UR(a,b){return a.cF(b,0);}
function Qv(a,b,c){var d,e,f,g,h,i;d=V(c,a.g()-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.s.data[d]==e)break;d=d+(-1)|0;}return d;}f=CQ(b);g=CG(b);while(true){if(d<1)return (-1);if(a.s.data[d]==g){h=a.s.data;i=d-1|0;if(h[i]==f)break;}d=d+(-1)|0;}return i;}
function Un(a,b,c){var d,e,f;d=Bq(0,c);e=a.g()-b.g()|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=b.g())break a;if(a.d(d+f|0)!=b.d(f))break;f=f+1|0;}d=d+1|0;}return d;}
function UG(a,b,c){var d,e;d=V(c,a.g()-b.g()|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=b.g())break a;if(a.d(d+e|0)!=b.d(e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function OC(a,b,c){if(b>c)G(Cq());return Fa(a.s,b,c-b|0);}
function Yp(a,b){return a.ch(b,a.g());}
function U3(a,b,c){return a.ch(b,c);}
function Ni(a,b){var c,d,e;c=a.g()-b.g()|0;d=0;while(d<=c){e=0;while(true){if(e>=b.g())return 1;if(a.d(d+e|0)!=b.d(e))break;e=e+1|0;}d=d+1|0;}return 0;}
function ZL(a){var b,c;b=0;c=a.g()-1|0;a:{while(b<=c){if(a.d(b)>32)break a;b=b+1|0;}}while(b<=c&&a.d(c)<=32){c=c+(-1)|0;}return a.ch(b,c+1|0);}
function RZ(a){return a;}
function Ze(a){var b,c,d;b=$rt_createCharArray(a.s.data.length);c=0;while(true){d=b.data;if(c>=d.length)break;d[c]=a.s.data[c];c=c+1|0;}return b;}
function Ge(b){var c,d;Cm();c=new Bi;d=$rt_createCharArray(1);d.data[0]=b;Dr(c,d);return c;}
function EL(b){Cm();return J().m(b).e();}
function XE(a,b){var c,d;if(a===b)return 1;if(!(b instanceof Bi))return 0;c=b;if(c.g()!=a.g())return 0;d=0;while(d<c.g()){if(a.d(d)!=c.d(d))return 0;d=d+1|0;}return 1;}
function X1(a,b){var c;if(a===b)return 1;if(b===null)return 0;if(a.g()!=b.g())return 0;c=0;while(c<a.g()){if(BI(a.d(c))!=BI(b.d(c)))return 0;c=c+1|0;}return 1;}
function P7(a){var b,c,d,e;a:{if(!a.dL){b=a.s.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.dL=(31*a.dL|0)+e|0;d=d+1|0;}}}return a.dL;}
function O4(a){var b,c,d,e,f,g,h,i;if(a.H())return a;b=$rt_createIntArray(a.s.data.length);c=0;d=0;while(d<a.s.data.length){a:{if(d!=(a.s.data.length-1|0)&&Bm(a.s.data[d])){e=a.s.data;f=d+1|0;g=e[f];if(Bt(g)){h=b.data;i=c+1|0;h[c]=Cn(BS(a.s.data[d],a.s.data[f]));d=f;break a;}}h=b.data;i=c+1|0;h[c]=BA(a.s.data[d]);}d=d+1|0;c=i;}return AC6(b,0,c);}
function AAg(a,b){return HB(TL(b),a.e());}
function WQ(){AF1=ADh();}
function FT(){C.call(this);}
var AF3=null;function ADM(){ADM=Be(FT);Ue();}
function Go(){ADM();return AF3;}
function Ue(){AF3=AAC();AF3.hD(B(288),XU());}
function M_(){U.call(this);}
function ADk(){var a=new M_();Q4(a);return a;}
function Q4(a){BB(a);}
function If(){Cb.call(this);}
function ACv(a,b,c){var d=new If();VI(d,a,b,c);return d;}
function VI(a,b,c,d){Em(a,b,c,d);}
function PS(a,b,c,d){var e;e=a.f.b(b,c,d);if(e>=0)return e;return a.w.b(b,c,d);}
function Ed(){Dj.call(this);}
function AF4(a,b,c){var d=new Ed();Je(d,a,b,c);return d;}
function Je(a,b,c,d){K_(a,b,c,d);}
function QA(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=$rt_createCharArray(V(X(b),512));e=0;f=0;g=$rt_createByteArray(V(X(c),512));a:{while(true){if((e+32|0)>f&&BR(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=V(X(b)+j|0,i.length);b.iC(d,j,f-j|0);e=0;}if(!BR(c)){if(!BR(b)&&e>=f){Bh();k=AEK;}else{Bh();k=AEI;}break a;}i=g.data;l=V(X(c),i.length);m=ABG(b,c);k=a.jD(d,e,f,g,0,l,m);e=m.hU;if(k===null&&0==m.f7){Bh();k=AEK;}j=m.f7;c.hV(g,0,j);if(k!==null)break;}}b.fb(BG(b)-(f-e|0)|0);return k;}
function JS(){Ed.call(this);}
function ACq(a){var b=new JS();UU(b,a);return b;}
function UU(a,b){Je(a,b,2.0,4.0);}
function Z0(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(h.dE(2))break a;Bh();i=AEI;break a;}k=e.data;n=f+1|0;k[f]=(192|l>>6)<<24>>24;m=n+1|0;k[n]=(128|l&63)<<24>>24;}else if(!D3(l)){if((f+3|0)>g){j=j+(-1)|0;if(h.dE(3))break a;Bh();i=AEI;break a;}k=e.data;o=f+1|0;k[f]=(224|l>>12)<<24>>24;n=o+1|0;k[o]=(128|l>>6&63)<<24>>24;m=n+1|0;k[n]=(128|l&63)<<24>>24;}else{if
(!Bm(l)){i=BM(1);break a;}if(j>=d){if(h.dq())break a;Bh();i=AEK;break a;}n=j+1|0;p=k[j];if(!Bt(p)){j=n+(-2)|0;i=BM(1);break a;}if((f+4|0)>g){j=n+(-2)|0;if(h.dE(4))break a;Bh();i=AEI;break a;}k=e.data;q=BS(l,p);j=f+1|0;k[f]=(240|q>>18)<<24>>24;o=j+1|0;k[j]=(128|q>>12&63)<<24>>24;j=o+1|0;k[o]=(128|q>>6&63)<<24>>24;m=j+1|0;k[j]=(128|q&63)<<24>>24;j=n;}c=j;f=m;}j=c;}h.gb(j);h.eK(f);return i;}
function Ja(){K.call(this);}
function AC1(){var a=new Ja();Q7(a);return a;}
function Q7(a){R(a);}
function Yt(a){return AB$(a);}
function Io(){S.call(this);}
function AB0(){var a=new Io();Z8(a);return a;}
function Z8(a){Bo(a);}
function ZD(a,b,c,d){return b;}
function QV(a,b){return 0;}
function C1(){BP.call(this);}
function Ca(){var a=new C1();P4(a);return a;}
function BV(a){var b=new C1();AAo(b,a);return b;}
function P4(a){C3(a);}
function AAo(a,b){M3(a,b);}
function EI(){Ch.call(this);}
function AF5(a,b,c,d,e){var f=new EI();HJ(f,a,b,c,d,e);return f;}
function HJ(a,b,c,d,e,f){Dp(a,b,c,d,e,f);Ea();c.t(AEL);}
function Ya(a,b,c,d){var e,f,g;e=0;f=a.co.c3();a:{while(true){g=a.w.b(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.co.c1())return (-1);return a.f.b(b,c,d);}
function MQ(){Ds.call(this);}
function XU(){var a=new MQ();Ye(a);return a;}
function Ye(a){Jd(a,B(288),F(Bi,0));}
function Ur(a){return AB3(a);}
function Yi(a){return ACq(a);}
function GF(){S.call(this);this.cp=0;}
function AA4(a){var b=new GF();AAw(b,a);return b;}
function AAw(a,b){Bo(a);a.cp=b;}
function Ym(a,b,c,d){var e,f,g;e=!d.cU()?c.g()-b|0:d.bw()-b|0;if(!e){d.D(a.cp,0);return a.f.b(b,c,d);}if(e<2){f=c.d(b);g=97;}else{f=c.d(b);g=c.d(b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:d.D(a.cp,0);return a.f.b(b,c,d);case 13:if(g!=10){d.D(a.cp,0);return a.f.b(b,c,d);}d.D(a.cp,0);return a.f.b(b,c,d);default:}return (-1);}
function SR(a,b){var c;c=!b.bD(a.cp)?0:1;b.D(a.cp,(-1));return c;}
function Ii(){C.call(this);}
function Hp(){var a=this;Cy.call(a);a.dv=null;a.c0=null;a.b2=0;a.d5=0;a.eO=0;a.hJ=0;}
function AF6(a,b){var c=new Hp();J2(c,a,b);return c;}
function Ej(a){var b=new Hp();Ut(b,a);return b;}
function J2(a,b,c){EN(a);a.hJ=(-1);if(c<0)G(Cv());a.dv=b;a.c0=$rt_createCharArray(Bq(64,c));}
function Ut(a,b){J2(a,b,1024);}
function AAb(a){FH(a);a.dv.bH();a.dv=null;}
function ZX(a){var b,c,d,e;FH(a);if(a.eO&&a.b2>=a.d5)return null;b=J();a:{while(true){if(a.b2>=a.d5&&!Ez(a,0))break a;c=a.c0.data;d=a.b2;a.b2=d+1|0;e=c[d];if(e==10)break;if(e==13){if(a.b2>=a.d5&&!Ez(a,0))break a;if(a.c0.data[a.b2]!=10)break a;a.b2=a.b2+1|0;break a;}b.bt(e);}}return b.e();}
function Ez(a,b){var c;if(a.eO)return 0;a:{while(true){if(b>=a.c0.data.length)break a;c=a.dv.kk(a.c0,b,a.c0.data.length-b|0);if(c==(-1)){a.eO=1;break a;}if(!c)break;b=b+c|0;}}a.d5=b;a.b2=0;a.hJ=(-1);return 1;}
function FH(a){if(a.dv!==null)return;G(PE());}
function Is(){K.call(this);}
function ACt(){var a=new Is();Ol(a);return a;}
function Ol(a){R(a);}
function Tm(a){return ABH(a);}
function Jc(){I.call(this);this.jQ=null;}
function ABn(a){var b=new Jc();Nz(b,a);return b;}
function Nz(a,b){a.jQ=b;Q(a);}
function Xx(a,b){return MC(b);}
function Jk(){K.call(this);}
function ABM(){var a=new Jk();OX(a);return a;}
function OX(a){R(a);}
function Nu(a){return AB9(a);}
function Hr(){Br.call(this);}
function C0(){var a=new Hr();UW(a);return a;}
function UW(a){C4(a);}
function Dy(){W.call(this);this.cL=0;}
function Ys(a){var b=new Dy();Qg(b,a);return b;}
function Qg(a,b){BD(a);a.cL=b;}
function R3(a,b){a.f=b;}
function N6(a,b,c,d){var e,f,g,h,i;e=d.q();f=b+1|0;g=BW(f,e);if(g>0){d.by=1;return (-1);}h=c.d(b);if(g<0){i=c.d(f);if(Bt(i))return (-1);}if(a.cL!=h)return (-1);return a.f.b(f,c,d);}
function Rt(a,b,c,d){var e,f,g;if(!(c instanceof Bi))return C7(a,b,c,d);e=c;f=d.q();while(true){if(b>=f)return (-1);g=e.cF(a.cL,b);if(g<0)return (-1);b=g+1|0;if(b<f&&Bt(e.d(b))){b=g+2|0;continue;}if(a.f.b(b,c,d)>=0)break;}return g;}
function Uc(a,b,c,d,e){var f,g,h,i;if(!(d instanceof Bi))return Db(a,b,c,d,e);f=d;g=e.q();a:{while(true){if(c<b)return (-1);h=f.eq(a.cL,c);if(h<0)break a;if(h<b)break a;i=h+1|0;if(i<g&&Bt(f.d(i))){c=h+(-1)|0;continue;}if(a.f.b(i,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function TO(a,b){if(b instanceof B1)return 0;if(b instanceof B3)return 0;if(b instanceof BK)return 0;if(b instanceof B0)return 0;if(b instanceof Dn)return 0;if(!(b instanceof Dy))return 1;return b.cL!=a.cL?0:1;}
function RS(a,b){return 1;}
function LU(){Cd.call(this);}
function ADp(a,b,c,d){var e=new LU();Rr(e,a,b,c,d);return e;}
function Rr(a,b,c,d,e){Gj(a,b,c,d,e);}
function UD(a,b,c,d){var e,f,g,h,i;e=a.cn.c1();f=a.cn.c3();g=0;while(true){if(g>=e){a:{while(true){h=a.f.b(b,c,d);if(h>=0)break;if((b+a.B.bb()|0)<=d.q()){h=a.B.I(b,c);b=b+h|0;g=g+1|0;}if(h<1)break a;if(g>f)break a;}return h;}return (-1);}if((b+a.B.bb()|0)>d.q()){d.by=1;return (-1);}i=a.B.I(b,c);if(i<1)break;b=b+i|0;g=g+1|0;}return (-1);}
function GQ(){U.call(this);}
function SO(a){var b=new GQ();U9(b,a);return b;}
function RD(){var a=new GQ();Sw(a);return a;}
function U9(a,b){Df(a,b);}
function Sw(a){BB(a);}
function LY(){S.call(this);}
function Wp(){var a=new LY();T1(a);return a;}
function T1(a){Bo(a);}
function AAy(a,b,c,d){if(b&&!(d.cU()&&b==d.bw()))return (-1);return a.f.b(b,c,d);}
function Yy(a,b){return 0;}
function JV(){I.call(this);this.lc=null;}
function ADj(a){var b=new JV();Wm(b,a);return b;}
function Wm(a,b){a.lc=b;Q(a);}
function Ss(a,b){return Ft(b);}
function Ks(){var a=this;C.call(a);a.dV=null;a.hX=null;}
function ABd(a,b){var c=new Ks();WO(c,a,b);return c;}
function WO(a,b,c){a.hX=b;a.dV=c;M(a);}
function W4(a){if(a.dV.readyState==4&&a.dV.status==200)QU(a.hX,$rt_str(a.dV.responseText));}
function SI(a){a.jC();}
function LX(){C.call(this);}
function V(b,c){if(b<c)c=b;return c;}
function Bq(b,c){if(b>c)c=b;return c;}
function GI(b){if(b<=0)b= -b;return b;}
function Ko(){K.call(this);}
function ABL(){var a=new Ko();Tq(a);return a;}
function Tq(a){R(a);}
function Px(a){var b;b=AA3(a);b.y=1;return b;}
function FO(){var a=this;BP.call(a);a.hj=null;a.dO=null;a.dw=0;}
function Ba(a,b,c){var d=new FO();HD(d,a,b,c);return d;}
function HD(a,b,c,d){C3(a);a.dw=(-1);a.hj=b;a.dO=c;a.dw=d;}
function YB(a){var b,c;b=B(25);if(a.dw>=1){c=$rt_createCharArray(a.dw);Sc(c,32);b=GC(c);}return J().a(a.hj).a(a.dO!==null&&a.dO.g()?J().m(a.dw).a(B(289)).a(a.dO).a(B(289)).a(b).e():B(25)).e();}
function GG(){C.call(this);}
function M5(b,c){var d,$$je;a:{try{Zr(b,EC(c));}catch($$e){$$je=Bc($$e);if($$je instanceof Br){d=$$je;break a;}else{throw $$e;}}return 1;}Cz().n(B(290));d.et();return 0;}
function Zr(b,c){var d,e,f,g,h,i,j,$$je;d=Ej(c);a:{try{e=0;while(true){f=d.ek();if(f===null)break;g=f.cy(35);if(g>=0)f=f.ch(0,g);f=f.fw();if(!f.g())continue;h=B8(f,32);i=0;while(i<h.T()){j=h.C(i);b.jY(e,i,j);i=i+1|0;}e=e+1|0;}}catch($$e){$$je=Bc($$e);f=$$je;break a;}d.bH();return;}d.bH();G(f);}
function Kt(){K.call(this);}
function AAS(){var a=new Kt();S1(a);return a;}
function S1(a){R(a);}
function Tt(a){var b;b=ADL(a);b.K.d7(0,2048);b.y=1;return b;}
function Di(){C.call(this);}
var AFd=null;var AFe=null;var AFc=null;function B2(){B2=Be(Di);Rg();}
function Rg(){var b,c;b=F(De,28);c=b.data;c[0]=P(B(291),B(25),B(25));c[1]=P(B(292),B(25),B(293));c[2]=P(B(294),B(25),B(295));c[3]=P(B(296),B(25),B(297));c[4]=P(B(298),B(25),B(299));c[5]=P(B(300),B(25),B(301));c[6]=P(B(302),B(25),B(303));c[7]=P(B(304),B(25),B(305));c[8]=P(B(306),B(25),B(307));c[9]=P(B(308),B(25),B(309));c[10]=P(B(310),B(25),B(311));c[11]=P(B(312),B(25),B(313));c[12]=P(B(314),B(25),B(315));c[13]=P(B(25),B(25),B(25));c[14]=P(B(316),B(25),B(25));c[15]=P(B(292),B(25),B(317));c[16]=P(B(294),B(25),
B(318));c[17]=P(B(296),B(25),B(319));c[18]=P(B(298),B(25),B(320));c[19]=P(B(300),B(25),B(321));c[20]=P(B(302),B(25),B(322));c[21]=P(B(304),B(25),B(323));c[22]=P(B(306),B(25),B(324));c[23]=P(B(308),B(25),B(325));c[24]=P(B(310),B(25),B(326));c[25]=P(B(312),B(25),B(327));c[26]=P(B(314),B(25),B(328));c[27]=P(B(25),B(25),B(25));AFd=b;b=F(De,4);c=b.data;c[0]=P(B(329),B(330),B(331));c[1]=P(B(332),B(333),B(334));c[2]=P(B(335),B(336),B(337));c[3]=P(B(338),B(339),B(340));AFe=b;b=F(De,11);c=b.data;c[0]=P(B(253),B(341),
B(342));c[1]=P(B(343),B(344),B(345));c[2]=P(B(346),B(347),B(348));c[3]=P(B(349),B(350),B(351));c[4]=P(B(352),B(353),B(354));c[5]=P(B(355),B(356),B(357));c[6]=P(B(358),B(359),B(360));c[7]=P(B(361),B(362),B(363));c[8]=P(B(364),B(365),B(366));c[9]=P(B(367),B(368),B(369));c[10]=P(B(370),B(371),B(372));AFc=b;}
function H6(){C.call(this);}
function ADh(){var a=new H6();QW(a);return a;}
function QW(a){M(a);}
function EV(){C.call(this);}
var AF7=null;function ACg(){ACg=Be(EV);Oj();}
function ABa(){var a=new EV();KH(a);return a;}
function KH(a){ACg();M(a);}
function Us(a,b,c,d){var e,f,g,h,i,j,k,l;e=Hx(a,b);f=M8(a,b,c);g=MY(a,b,c);h=Na(a,b,d);i=Ic(a,b,d);j=JK(a,b,d);k=F($rt_arraycls($rt_doublecls()),3);l=k.data;l[0]=I0(a,b,c);l[1]=Mq(a,b,i);l[2]=IJ(a,b,j);return ACR(b,e,f,g,h,i,j,k);}
function Hx(a,b){var c,d,e,f;c=BX();d=b.d9();if(b.cM()>4)c.bo(B(373));e=65;while(e<=90){if(d.cy(e)<0)c.bo(J().a(B(374)).bt(e).a(B(375)).e());e=(e+1|0)&65535;}f=0;while(f<d.g()){e=d.d(f);f=f+1|0;if(d.cF(e,f)>=0)c.bo(J().a(B(374)).bt(e).a(B(376)).e());}return c;}
function M8(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=AAC();e=0;while(e<b.cM()){f=0;while(f<b.iu()){g=b.dM(e,f);if(g!==null){h=FA(0.0);i=g.da().cg().data;j=i.length;k=0;while(k<j){l=i[k];m=JO(l,c);if(m!==null)h=FA(h.dU()+m.bK());k=k+1|0;}d.hD(g,h);}f=f+1|0;}e=e+1|0;}return d;}
function MY(a,b,c){var d,e,f,g,h,i,j;d=$rt_createDoubleArray(10);e=c.X();while(e.Y()){f=e.V();g=f.ci();h=b.cd(g);if(h!==null){i=d.data;j=h.bd();i[j]=i[j]+f.bK();}}return d;}
function Na(a,b,c){var d,e,f,g,h,i,j;d=0.0;e=c.X();while(e.Y()){f=e.V();g=f.c5().cg();h=g.data;i=b.cd(h[0]);j=b.cd(h[1]);if(i.gu()!=j.gu())d=d+f.bK();}return d;}
function Ic(a,b,c){var d,e,f,g,h,i,j,k;d=BX();e=c.X();while(e.Y()){f=e.V();g=f.c5().cg();h=g.data;i=b.cd(h[0]);j=b.cd(h[1]);if(i!==null&&j!==null&&h[0]!=h[1]&&Ih(i.bd(),j.bd())){k=Rp(i,j,f);d.bo(k);}}return d;}
function JK(a,b,c){var d,e,f,g,h,i,j,k,l;d=BX();e=c.X();while(e.Y()){f=e.V();g=f.c5().cg();h=g.data;i=b.cd(h[0]);j=b.cd(h[1]);if(i!==null&&j!==null&&TH(i.bd(),j.bd())){k=M0(i.bd(),j.bd());if(b.k3(k)){l=Rp(i,j,f);d.bo(l);}}}return d;}
function I0(a,b,c){var d,e,f,g,h,i,j,k,l;d=$rt_createDoubleArray(10);e=b.d9().cg().data;f=e.length;g=0;while(g<f){h=e[g];i=b.cd(h);j=JO(h,c);if(j!==null){k=d.data;l=i.bd();k[l]=k[l]+i.iU()*j.bK();}g=g+1|0;}return d;}
function Mq(a,b,c){var d,e,f,g,h,i,j;d=$rt_createDoubleArray(10);e=c.X();while(e.Y()){f=d.data;g=e.V();h=g.ct().bd();i=V(2,GI(g.ct().cr()-g.dx().cr()|0));j=b.k4(i);f[h]=f[h]+g.cu().bK()*j;}return d;}
function IJ(a,b,c){var d,e,f,g,h,i,j,k,l;d=$rt_createDoubleArray(10);e=c.X();while(e.Y()){f=d.data;g=e.V();h=g.ct().bd();i=g.dx().bd();j=M0(h,i);k=V(2,GI(g.ct().cr()-g.dx().cr()|0));l=b.lV(j,k);f[j]=f[j]+g.cu().bK()*l;}return d;}
function Oj(){AF7=BX();}
function LM(){var a=this;C.call(a);a.c=null;a.bm=0;a.fj=null;a.g0=0;a.bV=0;a.b8=0;a.P=0;a.eH=null;}
function AA6(){var a=new LM();Oh(a);return a;}
function La(a,b){return ACM(a,b);}
function HC(a,b,c){var d,e,f,g,h,i;d=BX();e=La(a,b);f=0;g=0;if(!b.g()){h=F(Bi,1);h.data[0]=B(25);return h;}while(K5(e)){i=f+1|0;if(i>=c&&c>0)break;d.bo(b.fp(g,Mg(e)).e());g=Ki(e);f=i;}a:{d.bo(b.fp(g,b.g()).e());i=f+1|0;if(!c)while(true){i=i+(-1)|0;if(i<0)break;if(d.C(i).e().g())break a;d.iD(i);}}if(i<0)i=0;return d.jl(F(Bi,i));}
function HB(a,b){return HC(a,b,0);}
function DL(a){return a.c.e();}
function UB(b,c){if(b===null)G(SO(B(377)));if(c&&(c|255)!=255)G(Bz(B(25)));Jh();AEq=1;return Kx(AA6(),b,c);}
function Kx(a,b,c){a.c=ACG(b,c);a.bm=c;a.eH=Gf(a,(-1),a.bm,null);if(a.c.H()){Kk(a);return a;}G(Ba(B(25),a.c.e(),a.c.bu()));}
function L5(a,b){var c,d,e;c=AC9(Bb(a,2),Bb(a,64));while(!a.c.H()){d=a.c;if(!d.cq())break;d=a.c;if(d.bi()&&a.c.bi()!=(-536870788)){d=a.c;if(d.bi()!=(-536870871))break;}c.bg(a.c.l());if(a.c.R()!=(-536870788))continue;a.c.l();}e=Ec(a,c);e.t(b);return e;}
function Gf(a,b,c,d){var e,f,g,h,i,j;e=BX();f=a.bm;g=0;if(c!=a.bm)a.bm=c;a:{switch(b){case -1073741784:h=new Ga;i=a.P+1|0;a.P=i;G9(h,i);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new Fw;i=a.P+1|0;a.P=i;Ll(h,i);break a;case -33554392:h=new Ey;i=a.P+1|0;a.P=i;Mu(h,i);break a;default:a.bV=a.bV+1|0;if(d!==null)h=ACb(a.bV);else{h=ADn();g=1;}if(a.bV<=(-1))break a;if(a.bV>=10)break a;a.fj.data[a.bV]=h;break a;}h=AA0();}while(true){if(a.c.cq()&&a.c.bi()==(-536870788))j=L5(a,h);else if
(a.c.R()==(-536870788)){j=Cu(h);a.c.l();}else{j=Fj(a,h);if(a.c.R()==(-536870788))a.c.l();}if(j!==null)e.bo(j);if(a.c.H())break;if(a.c.R()==(-536870871))break;}if(a.c.kP()==(-536870788))e.bo(Cu(h));if(a.bm!=f&&!g){a.bm=f;a.c.kA(a.bm);}switch(b){case -1073741784:break;case -536870872:return ACh(e,h);case -268435416:return AAW(e,h);case -134217688:return AB8(e,h);case -67108824:return ACU(e,h);case -33554392:return ABg(e,h);default:switch(e.T()){case 0:break;case 1:return ABA(e.C(0),h);default:return ADN(e,h);}return Cu(h);}return ADw(e,
h);}
function JJ(a){var b,c,d;b=ST();while(!a.c.H()){c=a.c;if(!c.cq())break;c=a.c;if(c.hK())break;c=a.c;if(c.iV())break;c=a.c;if(!(!c.fi()&&!a.c.bi())){c=a.c;if(!(!c.fi()&&DX(a.c.bi()))){c=a.c;if(c.bi()!=(-536870871)){c=a.c;if((c.bi()&(-2147418113))!=(-2147483608)){c=a.c;if(c.bi()!=(-536870788)){c=a.c;if(c.bi()!=(-536870876))break;}}}}}d=a.c.l();if(!DZ(d))b.g2(d&65535);else b.kx(CK(d));}if(!Bb(a,2))return ADu(b);if(Bb(a,64))return ADR(b);return AD2(b);}
function JU(a){var b,c,d,e,f,g,h,i,j,k;b=$rt_createIntArray(4);c=0;d=(-1);e=(-1);if(!a.c.H()&&a.c.cq()){f=b.data;d=a.c.l();f[c]=d;e=d-4352|0;}if(e>=0&&e<19){g=$rt_createCharArray(3);f=g.data;f[c]=d&65535;h=a.c.R();i=h-4449|0;if(i>=0&&i<21){f[1]=h&65535;a.c.l();j=a.c.R();h=j-4519|0;if(h>=0&&h<28){f[2]=j&65535;a.c.l();return WC(g,3);}return WC(g,2);}if(!Bb(a,2))return JT(f[0]);if(Bb(a,64))return SJ(f[0]);return Sb(f[0]);}k=1;while(k<4&&!a.c.H()&&a.c.cq()){f=b.data;j=k+1|0;f[k]=a.c.l();k=j;}if(k==1){f=b.data;if
(!Nj(f[0]))return F8(a,f[0]);}if(!Bb(a,2))return ADW(b,k);if(Bb(a,64))return ADc(b,k);return ADP(b,k);}
function Fj(a,b){var c,d,e,f;if(a.c.cq()&&!a.c.fi()&&DX(a.c.bi())){if(!Bb(a,128)){if(!a.c.hK()&&!a.c.iV())c=JJ(a);else{d=F4(a,b);c=D6(a,b,d);}}else{c=JU(a);if(!a.c.H()){e=a.c;if(!(e.R()==(-536870871)&&!(b instanceof Cp))){e=a.c;if(e.R()!=(-536870788)&&!a.c.cq())c=D6(a,b,c);}}}}else if(a.c.R()!=(-536870871)){d=F4(a,b);c=D6(a,b,d);}else{if(b instanceof Cp)G(Ba(B(25),a.c.e(),a.c.bu()));c=Cu(b);}a:{if(!a.c.H()){e=a.c;if(!(e.R()==(-536870871)&&!(b instanceof Cp))){e=a.c;if(e.R()!=(-536870788)){f=Fj(a,b);if(c instanceof Bx
&&!(c instanceof Cd)&&!(c instanceof Bw)&&!(c instanceof Cb)){e=c;if(!f.Z(e.ef()))c=ABZ(e);}if((f.cP()&65535)!=43)c.t(f);else c.t(f.ef());break a;}}}if(c===null)return null;c.t(b);}if((c.cP()&65535)!=43)return c;return c.ef();}
function D6(a,b,c){var d,e,f,g,h,i,j;d=a.c.R();if(c!==null&&!(c instanceof Z)){switch(d){case -2147483606:a.c.l();return ACs(c,b,d);case -2147483605:a.c.l();return AA7(c,b,(-2147483606));case -2147483585:a.c.l();return ABq(c,b,(-536870849));case -2147483525:e=new EI;f=a.c.cx();g=a.b8+1|0;a.b8=g;HJ(e,f,c,b,(-536870849),g);return e;case -1073741782:case -1073741781:a.c.l();h=ACO(c,b,d);c.t(h);return h;case -1073741761:a.c.l();h=ACy(c,b,(-536870849));c.t(b);return h;case -1073741701:h=new Ff;e=a.c;e=e.cx();i=a.b8
+1|0;a.b8=i;HE(h,e,c,b,(-536870849),i);c.t(h);return h;case -536870870:case -536870869:a.c.l();h=c.cP()!=(-2147483602)?ABW(c,b,d):Bb(a,32)?ACZ(c,b,d):ABK(c,b,d,Fp(a.bm));c.t(h);return h;case -536870849:a.c.l();h=ADA(c,b,(-536870849));c.t(b);return h;case -536870789:h=new Ch;e=a.c;e=e.cx();g=a.b8+1|0;a.b8=g;Dp(h,e,c,b,(-536870849),g);c.t(h);return h;default:}return c;}j=null;if(c!==null)j=c;switch(d){case -2147483606:case -2147483605:a.c.l();h=ACi(j,b,d);j.t(h);return h;case -2147483585:a.c.l();return AA8(j,
b,(-2147483585));case -2147483525:return ADa(a.c.cx(),j,b,(-2147483525));case -1073741782:case -1073741781:a.c.l();h=ACY(j,b,d);j.t(h);return h;case -1073741761:a.c.l();return ACv(j,b,(-1073741761));case -1073741701:return ADp(a.c.cx(),j,b,(-1073741701));case -536870870:case -536870869:a.c.l();h=ABU(j,b,d);j.t(h);return h;case -536870849:a.c.l();return AA1(j,b,(-536870849));case -536870789:return ACo(a.c.cx(),j,b,(-536870789));default:}return c;}
function F4(a,b){var c,d,e,f,g,h,i,j,k,l;c=null;while(true){a:{d=a.c.R();if((d&(-2147418113))==(-2147483608)){a.c.l();e=(d&16711680)>>16;d=d&(-16711681);if(d==(-16777176))a.bm=e;else{if(d!=(-1073741784))e=a.bm;c=Gf(a,d,e,b);if(a.c.R()!=(-536870871))G(Ba(B(25),a.c.e(),a.c.bu()));a.c.l();}}else{b:{c:{switch(d){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:f=(d&2147483647)-48|0;if(a.bV<f)G(Ba(B(25),a.c.e(),
a.c.bu()));a.c.l();a.P=a.P+1|0;c=!Bb(a,2)?ABe(f,a.P):Bb(a,64)?ADl(f,a.P):ADJ(f,a.P);a.fj.data[f].ff=1;a.g0=1;break a;case -2147483583:break;case -2147483582:a.c.l();c=V6(0);break a;case -2147483577:a.c.l();c=ACp();break a;case -2147483558:a.c.l();c=new FX;g=a.P+1|0;a.P=g;Kr(c,g);break a;case -2147483550:a.c.l();c=V6(1);break a;case -2147483526:a.c.l();c=ACT();break a;case -536870876:break c;case -536870866:a.c.l();if(Bb(a,32)){c=ADq();break a;}c=AB6(Fp(a.bm));break a;case -536870821:a.c.l();h=0;if(a.c.R()==
(-536870818)){h=1;a.c.l();}c=HM(a,h,b);if(a.c.R()!=(-536870819))G(Ba(B(25),a.c.e(),a.c.bu()));a.c.d6(1);a.c.l();break a;case -536870818:a.c.l();a.P=a.P+1|0;if(!Bb(a,8)){c=Wp();break a;}c=ACV(Fp(a.bm));break a;case 0:i=a.c.fh();if(i!==null)c=Ec(a,i);else{if(a.c.H()){c=Cu(b);break a;}c=JT(d&65535);}a.c.l();break a;default:break b;}a.c.l();c=Wp();break a;}a.c.l();a.P=a.P+1|0;if(Bb(a,8)){if(Bb(a,1)){c=ADm(a.P);break a;}c=AA4(a.P);break a;}if(Bb(a,1)){c=AAQ(a.P);break a;}c=ACm(a.P);break a;}if(d>=0&&!a.c.dj()){c
=F8(a,d);a.c.l();}else if(d==(-536870788))c=Cu(b);else{if(d!=(-536870871)){j=new FO;k=a.c;if(!k.dj()){g=d&65535;k=FV(g);}else k=a.c.fh().e();l=a.c;HD(j,k,l.e(),a.c.bu());G(j);}if(b instanceof Cp)G(Ba(B(25),a.c.e(),a.c.bu()));c=Cu(b);}}}if(d!=(-16777176))break;}return c;}
function HM(a,b,c){var d,e;d=Cs(a,b);e=Ec(a,d);e.t(c);return e;}
function Cs(a,b){var c,d,e,f,g,h,i,j,k,$$je;c=ACL(b,Bb(a,2),Bb(a,64));d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(a.c.H())break a;f=a.c.R()==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(a.c.R()){case -536870874:if(d>=0)c.bg(d);d=a.c.l();if(a.c.R()!=(-536870874)){d=38;break d;}if(a.c.bi()==(-536870821)){a.c.l();e=1;d=(-1);break d;}a.c.l();if(g){c=Cs(a,0);break d;}if(a.c.R()==(-536870819))break d;c.gr(Cs(a,0));break d;case -536870867:if(!g&&a.c.bi()!=(-536870819)){h=a.c;if(h.bi()!=(-536870821)&&d>=0){a.c.l();i=
a.c.R();if(a.c.dj())break c;if(i<0){h=a.c;if(h.bi()!=(-536870819)){h=a.c;if(h.bi()!=(-536870821)&&d>=0)break c;}}e:{try{if(DX(i))break e;i=i&65535;break e;}catch($$e){$$je=Bc($$e);if($$je instanceof Br){break b;}else{throw $$e;}}}try{c.J(d,i);}catch($$e){$$je=Bc($$e);if($$je instanceof Br){break b;}else{throw $$e;}}a.c.l();d=(-1);break d;}}if(d>=0)c.bg(d);d=45;a.c.l();break d;case -536870821:if(d>=0){c.bg(d);d=(-1);}a.c.l();j=0;if(a.c.R()==(-536870818)){a.c.l();j=1;}if(!e)c.jJ(Cs(a,j));else c.gr(Cs(a,j));e=
0;a.c.l();break d;case -536870819:if(d>=0)c.bg(d);d=93;a.c.l();break d;case -536870818:if(d>=0)c.bg(d);d=94;a.c.l();break d;case 0:if(d>=0)c.bg(d);k=a.c.fh();if(k===null)d=0;else{c.lG(k);d=(-1);}a.c.l();break d;default:}if(d>=0)c.bg(d);d=a.c.l();}g=0;}G(Ba(B(25),DL(a),a.c.bu()));}G(Ba(B(25),DL(a),a.c.bu()));}if(!f){if(d>=0)c.bg(d);return c;}G(Ba(B(25),DL(a),a.c.bu()-1|0));}
function F8(a,b){var c;c=DZ(b);if(Bb(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return Sb(b&65535);}if(Bb(a,64)&&b>128){if(c)return ABu(b);if(Fd(b))return P2(b&65535);if(!Ek(b))return SJ(b&65535);return Ys(b&65535);}}if(c)return ABC(b);if(Fd(b))return P2(b&65535);if(!Ek(b))return JT(b&65535);return Ys(b&65535);}
function Ec(a,b){var c,d;if(!b.jx()){if(!b.gz()){if(b.ck())return Xs(b);return V9(b);}if(b.ck())return Pr(b);return Zv(b);}c=b.jj();d=AAX(c);if(!b.gz()){if(b.ck())return E0(Xs(b.dQ()),d);return E0(V9(b.dQ()),d);}if(b.ck())return E0(Pr(b.dQ()),d);return E0(Zv(b.dQ()),d);}
function TL(b){return UB(b,0);}
function Kk(a){if(a.g0)a.eH.bB();}
function ZB(b){var c,d,e,f;c=J().a(B(378));d=0;while(true){e=b.gL(B(379),d);if(e<0)break;f=e+2|0;c.a(b.ch(d,f)).a(B(380));d=f;}return c.a(b.e9(d)).a(B(379)).e();}
function G_(a){return a.bV;}
function K2(a){return a.b8+1|0;}
function Ie(a){return a.P+1|0;}
function C6(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function Bb(a,b){return (a.bm&b)!=b?0:1;}
function Oh(a){M(a);a.fj=F(Bs,10);a.bV=(-1);a.b8=(-1);a.P=(-1);}
function Jx(){CN.call(this);}
function ABq(a,b,c){var d=new Jx();V5(d,a,b,c);return d;}
function V5(a,b,c,d){Eu(a,b,c,d);Ea();b.t(AEL);}
function Zf(a,b,c,d){var e;e=a.w.b(b,c,d);if(e<=0)e=b;return a.f.b(e,c,d);}
function PG(a,b){a.f=b;}
function Lu(){U.call(this);}
function I5(){var a=new Lu();Wi(a);return a;}
function Wi(a){BB(a);}
function Hd(){K.call(this);}
function AAT(){var a=new Hd();ND(a);return a;}
function ND(a){R(a);}
function Yo(a){var b;b=ACN(a);b.y=1;return b;}
function Mw(){var a=this;DG.call(a);a.dc=0;a.bp=null;a.er=0;a.i5=0.0;a.f8=0;}
function AAC(){var a=new Mw();Uv(a);return a;}
function AF8(a){var b=new Mw();Gz(b,a);return b;}
function AF9(a,b){var c=new Mw();Ma(c,a,b);return c;}
function W5(a,b){return F(ED,b);}
function Uv(a){Gz(a,16);}
function Gz(a,b){Ma(a,b,0.75);}
function LZ(b){var c,d;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;d=c|c>>1;d=d|d>>2;d=d|d>>4;d=d|d>>8;d=d|d>>16;return d+1|0;}
function Ma(a,b,c){var d;J3(a);if(b>=0&&c>0.0){d=LZ(b);a.dc=0;a.bp=a.hh(d);a.i5=c;Fb(a);return;}G(Cv());}
function Fb(a){a.f8=a.bp.data.length*a.i5|0;}
function Xe(a,b){var c;c=Ho(a,b);if(c===null)return null;return c.ee;}
function Ho(a,b){var c,d,e;if(b===null)c=Gk(a);else{d=I1(b);e=d&(a.bp.data.length-1|0);c=FD(a,b,e,d);}return c;}
function FD(a,b,c,d){var e,f;e=a.bp.data[c];while(e!==null){if(e.eU==d){f=e.fo;if(Qe(b,f))break;}e=e.dm;}return e;}
function Gk(a){var b;b=a.bp.data[0];while(b!==null&&b.fo!==null){b=b.dm;}return b;}
function Pf(a,b,c){return a.lq(b,c);}
function WE(a,b,c){var d,e,f,g,h;if(b===null){d=Gk(a);if(d===null){a.er=a.er+1|0;d=a.hB(null,0,0);e=a.dc+1|0;a.dc=e;if(e>a.f8)a.hA();}}else{f=I1(b);g=f&(a.bp.data.length-1|0);d=FD(a,b,g,f);if(d===null){a.er=a.er+1|0;d=a.hB(b,g,f);e=a.dc+1|0;a.dc=e;if(e>a.f8)a.hA();}}h=d.ee;d.ee=c;return h;}
function R_(a,b,c,d){var e;e=ACx(b,d);e.dm=a.bp.data[c];a.bp.data[c]=e;return e;}
function Wr(a,b){var c,d,e,f,g,h,i;c=LZ(!b?1:b<<1);d=a.hh(c);e=0;while(e<a.bp.data.length){f=a.bp.data[e];a.bp.data[e]=null;while(f!==null){g=d.data;h=f.eU&(c-1|0);i=f.dm;f.dm=g[h];g[h]=f;f=i;}e=e+1|0;}a.bp=d;Fb(a);}
function SV(a){a.kl(a.bp.data.length);}
function I1(b){return b.hN();}
function Qe(b,c){return b!==c&&!b.bS(c)?0:1;}
function G2(){S.call(this);this.c$=0;}
function ADm(a){var b=new G2();Xt(b,a);return b;}
function Xt(a,b){Bo(a);a.c$=b;}
function Qk(a,b,c,d){var e;e=!d.cU()?c.g()-b|0:d.q()-b|0;if(e<=0){d.D(a.c$,0);return a.f.b(b,c,d);}if(c.d(b)!=10)return (-1);d.D(a.c$,1);return a.f.b(b+1|0,c,d);}
function VS(a,b){var c;c=!b.bD(a.c$)?0:1;b.D(a.c$,(-1));return c;}
function HY(){C.call(this);}
function B8(b,c){var d,e,f;d=BX();e=ST();f=0;while(f<b.g()){if(b.d(f)!=c)e.g2(b.d(f));if(!(b.d(f)!=c&&f!=(b.g()-1|0))&&e.g()>0){d.bo(e.e());e.dS(0);}f=f+1|0;}return d;}
function Mn(){K.call(this);}
function ACw(){var a=new Mn();AAn(a);return a;}
function AAn(a){R(a);}
function Z9(a){var b;b=ADx(a);b.y=1;return b;}
function EK(){var a=this;C.call(a);a.fM=0;a.gB=0;a.id=null;}
function VL(a,b,c){var d=new EK();Vj(d,a,b,c);return d;}
function Vj(a,b,c,d){M(a);a.fM=b;a.gB=c;a.id=d;}
function DS(){var a=this;C.call(a);a.cR=0;a.d1=0;}
var AEK=null;var AEI=null;function Bh(){Bh=Be(DS);UJ();}
function In(a,b){var c=new DS();Jy(c,a,b);return c;}
function Jy(a,b,c){Bh();M(a);a.cR=b;a.d1=c;}
function OZ(a){return a.cR?0:1;}
function W_(a){return a.cR!=1?0:1;}
function ZV(a){return !a.hW()&&!a.f2()?0:1;}
function Xc(a){return a.cR!=2?0:1;}
function Xv(a){return a.cR!=3?0:1;}
function Vo(a){if(a.fU())return a.d1;G(AC5());}
function BM(b){Bh();return In(2,b);}
function T4(a){switch(a.cR){case 0:G(ACJ());case 1:G(ADF());case 2:G(ABY(a.d1));case 3:G(ACK(a.d1));default:}}
function UJ(){AEK=In(0,0);AEI=In(1,0);}
function FX(){S.call(this);this.cV=0;}
function ACm(a){var b=new FX();Kr(b,a);return b;}
function Kr(a,b){Bo(a);a.cV=b;}
function Sd(a,b,c,d){var e,f,g,h;e=!d.cU()?c.g():d.q();if(b>=e){d.D(a.cV,0);return a.f.b(b,c,d);}f=e-b|0;if(f==2&&c.d(b)==13){g=b+1|0;if(c.d(g)==10){d.D(a.cV,0);return a.f.b(b,c,d);}}a:{if(f==1){h=c.d(b);if(h==10)break a;if(h==13)break a;if(h==133)break a;if((h|1)==8233)break a;}return (-1);}d.D(a.cV,0);return a.f.b(b,c,d);}
function SN(a,b){var c;c=!b.bD(a.cV)?0:1;b.D(a.cV,(-1));return c;}
function JG(){B_.call(this);}
function ACP(){var a=new JG();XA(a);return a;}
function XA(a){Fl(a);}
function UI(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function Yx(a,b,c){var d;a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}d=1;break a;}d=0;}return d;}
function JF(){B_.call(this);}
function ABT(){var a=new JF();QS(a);return a;}
function QS(a){Fl(a);}
function Se(a,b){return b!=10?0:1;}
function S5(a,b,c){return b!=10?0:1;}
function LF(){CP.call(this);}
function M$(){K.call(this);}
function AB4(){var a=new M$();XM(a);return a;}
function XM(a){R(a);}
function TK(a){var b;b=ADU(a);b.y=1;return b;}
function CW(){var a=this;C.call(a);a.r=null;a.cS=0;a.bF=0;a.ia=0;a.fL=0;a.bC=0;a.i=0;a.gI=0;a.cO=null;a.cf=null;a.k=0;a.dz=0;a.dJ=0;a.dy=0;a.hk=null;}
var AF$=null;var AF_=null;var AGa=0;function ACG(a,b){var c=new CW();WS(c,a,b);return c;}
function WS(a,b,c){M(a);a.bF=1;a.hk=b;if((c&16)>0)b=ZB(b);else if((c&128)>0)b=Tf(b);a.r=$rt_createCharArray(b.g()+2|0);Gr(b.cg(),0,a.r,0,b.g());a.r.data[a.r.data.length-1|0]=0;a.r.data[a.r.data.length-2|0]=0;a.gI=a.r.data.length;a.cS=c;Cc(a);Cc(a);}
function Z4(a){return a.bC;}
function Sg(a,b){if(b>0&&b<3)a.bF=b;if(b==1)Lk(a);}
function RM(a,b){a.cS=b;a.i=a.bC;a.cf=a.cO;a.k=a.dJ+1|0;a.dy=a.dJ;Cc(a);}
function TX(a){return a.cO;}
function RY(a){return a.cO===null?0:1;}
function RC(a){return a.cf===null?0:1;}
function Tr(a){Cc(a);return a.fL;}
function SX(a){var b;b=a.cO;Cc(a);return b;}
function P8(a){return a.i;}
function Vn(a){return a.fL;}
function Tf(b){return b;}
function Lk(a){a.i=a.bC;a.cf=a.cO;a.k=a.dy;a.dy=a.dJ;Cc(a);}
function Cc(a){var b,c,d,e,f,g,h,$$je;a.fL=a.bC;a.bC=a.i;a.cO=a.cf;a.dJ=a.dy;a.dy=a.k;while(true){b=0;a.i=a.k>=a.r.data.length?0:DK(a);a.cf=null;if(a.bF==4){if(a.i!=92)return;a.i=a.k>=a.r.data.length?0:a.r.data[Y(a)];switch(a.i){case 69:break;default:a.i=92;a.k=a.dz;return;}a.bF=a.ia;a.i=a.k>(a.r.data.length-2|0)?0:DK(a);}a:{if(a.i!=92){if(a.bF==1)switch(a.i){case 36:a.i=(-536870876);break a;case 40:if(a.r.data[a.k]!=63){a.i=(-2147483608);break a;}Y(a);c=a.r.data[a.k];d=0;while(true){b:{if(d){d=0;switch(c){case 33:break;case 61:a.i
=(-134217688);Y(a);break b;default:G(Ba(B(25),a.e(),a.k));}a.i=(-67108824);Y(a);}else{switch(c){case 33:break;case 60:Y(a);c=a.r.data[a.k];d=1;break b;case 61:a.i=(-536870872);Y(a);break b;case 62:a.i=(-33554392);Y(a);break b;default:a.i=MI(a);if(a.i<256){a.cS=a.i;a.i=a.i<<16;a.i=(-1073741784)|a.i;break b;}a.i=a.i&255;a.cS=a.i;a.i=a.i<<16;a.i=(-16777176)|a.i;break b;}a.i=(-268435416);Y(a);}}if(!d)break;}break a;case 41:a.i=(-536870871);break a;case 42:case 43:case 63:e=a.k>=a.r.data.length?42:a.r.data[a.k];switch
(e){case 43:a.i=a.i|(-2147483648);Y(a);break a;case 63:a.i=a.i|(-1073741824);Y(a);break a;default:}a.i=a.i|(-536870912);break a;case 46:a.i=(-536870866);break a;case 91:a.i=(-536870821);a.d6(2);break a;case 93:if(a.bF!=2)break a;a.i=(-536870819);break a;case 94:a.i=(-536870818);break a;case 123:a.cf=Lm(a,a.i);break a;case 124:a.i=(-536870788);break a;default:}else if(a.bF==2)switch(a.i){case 38:a.i=(-536870874);break a;case 45:a.i=(-536870867);break a;case 91:a.i=(-536870821);break a;case 93:a.i=(-536870819);break a;case 94:a.i
=(-536870818);break a;default:}}else{f=a.k>=(a.r.data.length-2|0)?(-1):DK(a);c:{a.i=f;switch(a.i){case -1:G(Ba(B(25),a.e(),a.k));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.i
=HV(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.bF!=1)break a;a.i=(-2147483648)|a.i;break a;case 65:a.i=(-2147483583);break a;case 66:a.i=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:G(Ba(B(25),a.e(),a.k));case 68:case 83:case 87:case 100:case 115:case 119:a.cf=Gh(Fa(a.r,
a.dz,1),0);a.i=0;break a;case 71:a.i=(-2147483577);break a;case 80:case 112:break c;case 81:a.ia=a.bF;a.bF=4;b=1;break a;case 90:a.i=(-2147483558);break a;case 97:a.i=7;break a;case 98:a.i=(-2147483550);break a;case 99:if(a.k>=(a.r.data.length-2|0))G(Ba(B(25),a.e(),a.k));a.i=a.r.data[Y(a)]&31;break a;case 101:a.i=27;break a;case 102:a.i=12;break a;case 110:a.i=10;break a;case 114:a.i=13;break a;case 116:a.i=9;break a;case 117:a.i=Fv(a,4);break a;case 120:a.i=Fv(a,2);break a;case 122:a.i=(-2147483526);break a;default:}break a;}g
=Ht(a);h=0;if(a.i==80)h=1;try{a.cf=Gh(g,h);}catch($$e){$$je=Bc($$e);if($$je instanceof EE){G(Ba(B(25),a.e(),a.k));}else{throw $$e;}}a.i=0;}}if(b)continue;else break;}}
function Ht(a){var b,c,d;b=GV(10);if(a.k<(a.r.data.length-2|0)){if(a.r.data[a.k]!=123)return J().a(B(381)).a(Fa(a.r,Y(a),1)).e();Y(a);c=0;a:{while(a.k<(a.r.data.length-2|0)){c=a.r.data[Y(a)];if(c==125)break a;b.bt(c);}}if(c!=125)G(Ba(B(25),a.e(),a.k));}if(!b.g())G(Ba(B(25),a.e(),a.k));d=b.e();if(d.g()==1)return J().a(B(381)).a(d).e();b:{c:{if(d.g()>3){if(d.ej(B(381)))break c;if(d.ej(B(382)))break c;}break b;}d=d.e9(2);}return d;}
function Lm(a,b){var c,d,e,f,$$je;c=GV(4);d=(-1);e=2147483647;a:{while(true){if(a.k>=a.r.data.length)break a;b=a.r.data[Y(a)];if(b==125)break a;if(b==44&&d<0)try{d=CX(c.e(),10);c.j0(0,c.g());continue;}catch($$e){$$je=Bc($$e);if($$je instanceof C1){break;}else{throw $$e;}}c.bt(b&65535);}G(Ba(B(25),a.e(),a.k));}if(b!=125)G(Ba(B(25),a.e(),a.k));if(c.g()>0)b:{try{e=CX(c.e(),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=Bc($$e);if($$je instanceof C1){}else{throw $$e;}}G(Ba(B(25),a.e(),a.k));}else if(d<0)G(Ba(B(25),
a.e(),a.k));if((d|e|(e-d|0))<0)G(Ba(B(25),a.e(),a.k));f=a.k>=a.r.data.length?42:a.r.data[a.k];c:{switch(f){case 43:a.i=(-2147483525);Y(a);break c;case 63:a.i=(-1073741701);Y(a);break c;default:}a.i=(-536870789);}return ABQ(d,e);}
function Wj(a){return a.hk;}
function X3(a){return !a.bC&&!a.i&&a.k==a.gI&&!a.dj()?1:0;}
function DX(b){return b<0?0:1;}
function YN(a){return !a.H()&&!a.dj()&&DX(a.bC)?1:0;}
function Rh(a){return a.bC<=56319&&a.bC>=55296?1:0;}
function Tl(a){return a.bC<=57343&&a.bC>=56320?1:0;}
function Ek(b){return b<=56319&&b>=55296?1:0;}
function Fd(b){return b<=57343&&b>=56320?1:0;}
function Fv(a,b){var c,d,e,f,$$je;c=GV(b);d=a.r.data.length-2|0;e=0;while(true){f=BW(e,b);if(f>=0)break;if(a.k>=d)break;c.bt(a.r.data[Y(a)]);e=e+1|0;}if(!f)a:{try{f=CX(c.e(),16);}catch($$e){$$je=Bc($$e);if($$je instanceof C1){break a;}else{throw $$e;}}return f;}G(Ba(B(25),a.e(),a.k));}
function HV(a){var b,c,d,e,f;b=3;c=1;d=a.r.data.length-2|0;e=E$(a.r.data[a.k],8);switch(e){case -1:break;default:if(e>3)b=2;Y(a);a:{while(true){if(c>=b)break a;if(a.k>=d)break a;f=E$(a.r.data[a.k],8);if(f<0)break;e=(e*8|0)+f|0;Y(a);c=c+1|0;}}return e;}G(Ba(B(25),a.e(),a.k));}
function MI(a){var b,c,d;b=1;c=a.cS;a:while(true){if(a.k>=a.r.data.length)G(Ba(B(25),a.e(),a.k));b:{c:{d=a.r.data[a.k];switch(d){case 41:Y(a);return c|256;case 45:if(!b)G(Ba(B(25),a.e(),a.k));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}Y(a);}Y(a);return c;}
function Y(a){a.dz=a.k;if(a.cS&4)HF(a);else a.k=a.k+1|0;return a.dz;}
function HF(a){var b;b=a.r.data.length-2|0;a.k=a.k+1|0;a:while(true){if(a.k<b&&I9(a.r.data[a.k])){a.k=a.k+1|0;continue;}if(a.k>=b)break;if(a.r.data[a.k]!=35)break;a.k=a.k+1|0;while(true){if(a.k>=b)continue a;if(K6(a,a.r.data[a.k]))continue a;a.k=a.k+1|0;}}return a.k;}
function K6(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function KT(b){return AF$.oA(b);}
function TI(b){var c,d,e,f,g,h,i;c=b-44032|0;if(c>=0&&c<11172){d=4352+(c/588|0)|0;e=4449+((c%588|0)/28|0)|0;f=c%28|0;if(!f){g=$rt_createIntArray(2);h=g.data;h[0]=d;h[1]=e;}else{i=4519+f|0;g=$rt_createIntArray(3);h=g.data;h[0]=d;h[1]=e;h[2]=i;}return g;}return null;}
function Nj(b){var c;c=AF_.fE(b);return c==AGa?0:1;}
function Q_(b){return (b!=832?0:1)|(b!=833?0:1)|(b!=835?0:1)|(b!=836?0:1);}
function DK(a){var b,c,d;b=a.r.data[Y(a)];if(Bm(b)){c=a.dz+1|0;if(c<a.r.data.length){d=a.r.data[c];if(Bt(d)){Y(a);return BS(b,d);}}}return b;}
function Re(a){return a.dJ;}
function Kf(){K.call(this);}
function ABz(){var a=new Kf();YS(a);return a;}
function YS(a){R(a);}
function X4(a){return By().J(65279,65279).J(65520,65533);}
function Jw(){var a=this;C.call(a);a.hm=null;a.iR=0;}
function ACd(a){var b=new Jw();TY(b,a);return b;}
function TY(a,b){M(a);a.hm=b;}
function Mx(){Dm.call(this);}
function AAO(){var a=new Mx();XL(a);return a;}
function XL(a){L6(a);}
function QM(a){var b;b=LW(a).b7(1);b.y=1;return b;}
function Mk(){C.call(this);this.fF=0;}
function ADT(a){var b=new Mk();Uw(b,a);return b;}
function Uw(a,b){M(a);a.fF=b;}
function RF(a,b){var c,d;c=AAY();d=ADv(c);Js(a,b,d);return c.kc(B(288));}
function Js(a,b,c){Jm(a,b.kq(),c);GT(a,b.k8(),c);Hf(a,b.hS(),c);c.bI(B(383));c.bI(B(384));Me(a,b.hS(),a.fF,c);c.bI(B(385));c.bI(B(386));IR(a,b.lM(),a.fF,c);c.bI(B(385));c.bI(B(385));Lv(a,b.jy(),c);}
function Jm(a,b,c){var d,e;a:{if(b!==null){d=b.X();while(true){if(!d.Y())break a;e=d.V();c.n(J().a(B(387)).a(e).a(B(388)).e());}}}}
function GT(a,b,c){var d,e,f,g,h,i,j;c.n(B(389));c.n(B(390));d=0.0;e=0.0;f=0;while(f<5){g=b.data;h=9-f|0;if(!(g[f]<=0.0&&g[h]<=0.0)){c.n(B(391));i=J().a(B(392)).m(f).a(B(393)).a(Bl(g[f]*100.0,2)).a(B(394)).m(h).a(B(393));j=g[h]*100.0;i=i.a(Bl(j,2)).a(B(395)).e();c.n(i);c.n(B(396));}d=d+g[f];e=e+g[h];f=f+1|0;}c.n(B(397));i=J().a(B(398)).a(Bl(d*100.0,2)).a(B(399));j=e*100.0;i=i.a(Bl(j,2)).a(B(395)).e();c.n(i);c.n(B(396));c.n(B(400));}
function Hf(a,b,c){var d,e,f,g,h,i,j;d=SP(b);c.n(B(401));c.n(B(390));e=0.0;f=0;while(f<5){g=d.data;h=9-f|0;if(!(g[f]<=0.0&&g[h]<=0.0)){c.n(B(391));i=J().a(B(392)).m(f).a(B(393)).a(Bl(g[f]*100.0,3)).a(B(394)).m(h).a(B(393));j=g[h]*100.0;i=i.a(Bl(j,3)).a(B(395)).e();c.n(i);c.n(B(396));j=e+g[f];e=j+g[h];}f=f+1|0;}c.n(B(397));i=J().a(B(402));j=e*100.0;i=i.a(Bl(j,3)).a(B(395)).e();c.n(i);c.n(B(396));c.n(B(400));}
function Me(a,b,c,d){var e,f,g,h;d.n(B(403));d.n(B(390));e=0;f=b.X();a:{while(true){if(!f.Y())break a;g=f.V();d.n(B(391));h=J().a(B(392)).m(g.ct().bd()).a(B(393));h=h.a(g.cu().c5()).a(B(393));h=h.a(Bl(g.cu().bK()*100.0,3)).a(B(395)).e();d.n(h);d.n(B(396));e=e+1|0;if(e>=c)break;}}d.n(B(400));}
function IR(a,b,c,d){var e,f,g,h;d.n(B(404));d.n(B(390));e=0;f=b.X();a:{while(true){if(!f.Y())break a;g=f.V();d.n(B(391));h=J().a(B(392)).m(g.ct().bd()).a(B(405));h=h.m(g.dx().bd()).a(B(393));h=h.a(g.cu().c5()).a(B(393));h=h.a(Bl(g.cu().bK()*100.0,3)).a(B(395)).e();d.n(h);d.n(B(396));e=e+1|0;if(e>=c)break;}}d.n(B(400));}
function Lv(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;c.n(B(406));c.n(B(390));c.n(B(391));c.n(B(407));c.n(B(396));d=$rt_createDoubleArray(3);e=0;while(e<10){f=b.data;g=f[0].data[e]+f[1].data[e]+f[2].data[e];if(f[0].data[e]>0.0){h=d.data;c.n(B(391));i=J().a(B(392)).m(e).a(B(393)).a(Bl(f[0].data[e],5)).a(B(408));j=f[1].data[e];k=i.a(Bl(j,5)).a(B(408));j=f[2].data[e];i=k.a(Bl(j,5)).a(B(408));i=i.a(Bl(g,5)).a(B(409)).e();c.n(i);c.n(B(396));h[0]=h[0]+f[0].data[e];h[1]=h[1]+f[1].data[e];h[2]=h[2]+f[2].data[e];}e=e+1|0;}l=
d.data;m=l[1]+l[2];n=l[0]+m;c.n(B(397));i=J().a(B(410)).a(Bl(l[0],5)).a(B(411));j=l[1];i=i.a(Bl(j,5)).a(B(411));j=l[2];i=i.a(Bl(j,5)).a(B(411));i=i.a(Bl(n,5)).a(B(409)).e();c.n(i);c.n(B(396));c.n(B(400));}
function Bl(b,c){return $rt_str(b.toFixed(c));}
function B3(){var a=this;Z.call(a);a.cl=null;a.jN=0;}
function V9(a){var b=new B3();RX(b,a);return b;}
function RX(a,b){BH(a);a.cl=b.c8();a.jN=b.G;}
function Nl(a,b,c){return !a.cl.j(c.d(b))?(-1):1;}
function QZ(a,b){if(b instanceof B1)return DU(a.cl,b.ci());if(b instanceof B3)return CV(a.cl,b.cl);if(b instanceof BK)return CV(a.cl,b.fc());if(!(b instanceof B0))return 1;return 0;}
function QB(a){return a.cl;}
function D7(){I.call(this);this.eV=0;}
function ADy(a){var b=new D7();HW(b,a);return b;}
function HW(a,b){Q(a);a.eV=b;}
function QH(a,b){return a.G^(a.eV!=C_(b&65535)?0:1);}
function ME(){D7.call(this);}
function ABp(a){var b=new ME();Pa(b,a);return b;}
function Pa(a,b){HW(a,b);}
function Vc(a,b){return a.G^(!(a.eV>>C_(b&65535)&1)?0:1);}
function Kn(){Cl.call(this);this.il=0;}
function ACK(a){var b=new Kn();Yr(b,a);return b;}
function Yr(a,b){Fq(a);a.il=b;}
function T2(a){return J().a(B(412)).m(a.il).e();}
function Jb(){var a=this;I.call(a);a.eN=0;a.gS=0;a.dY=0;a.f_=0;a.bL=0;a.cv=0;a.v=null;a.F=null;}
function By(){var a=new Jb();AAd(a);return a;}
function AC9(a,b){var c=new Jb();Jj(c,a,b);return c;}
function ACL(a,b,c){var d=new Jb();OG(d,a,b,c);return d;}
function AAd(a){Q(a);a.v=AAF();}
function Jj(a,b,c){Q(a);a.v=AAF();a.eN=b;a.gS=c;}
function OG(a,b,c,d){Jj(a,c,d);a.b7(b);}
function Nf(a,b){a:{if(a.eN){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.bL){a.v.eT(C6(b&65535));break a;}a.v.gg(C6(b&65535));break a;}if(a.gS&&b>128){a.dY=1;b=Co(Cn(b));}}}if(!(!Ek(b)&&!Fd(b))){if(a.f_)a.K.eT(b-55296|0);else a.K.gg(b-55296|0);}if(a.bL)a.v.eT(b);else a.v.gg(b);if(!a.y&&DZ(b))a.y=1;return a;}
function AAv(a,b){var c,d;if(!a.y&&b.y)a.y=1;if(a.f_){if(!b.U)a.K.cX(b.bc());else a.K.bv(b.bc());}else if(!b.U)a.K.cD(b.bc());else{a.K.cQ(b.bc());a.K.bv(b.bc());a.U=a.U?0:1;a.f_=1;}if(!a.cv&&b.M()!==null){if(a.bL){if(!b.c4())a.v.cX(b.M());else a.v.bv(b.M());}else if(!b.c4())a.v.cD(b.M());else{a.v.cQ(b.M());a.v.bv(b.M());a.G=a.G?0:1;a.bL=1;}}else{c=a.G;if(a.F!==null){d=a.F;if(!c)a.F=AC4(a,c,d,b);else a.F=ADY(a,c,d,b);}else{if(c&&!a.bL&&a.v.H())a.F=ACE(a,b);else if(!c)a.F=AAR(a,c,b);else a.F=ACf(a,c,b);a.cv=1;}}return a;}
function WL(a,b,c){if(b>c)G(Cv());a:{if(!a.eN&&!(c>=55296&&b<=57343)){if(a.bL)a.v.jE(b,c+1|0);else a.v.d7(b,c+1|0);}else while(true){if(b>=(c+1|0))break a;a.bg(b);b=b+1|0;}}return a;}
function NS(a,b){var c,d;if(!a.y&&b.y)a.y=1;if(b.ck())a.dY=1;if(!(a.U^b.U)){if(!a.U)a.K.cD(b.bc());else a.K.bv(b.bc());}else if(a.U)a.K.cX(b.bc());else{a.K.cQ(b.bc());a.K.bv(b.bc());a.U=1;}if(!a.cv&&b.M()!==null){if(!(a.G^b.c4())){if(!a.G)a.v.cD(b.M());else a.v.bv(b.M());}else if(a.G)a.v.cX(b.M());else{a.v.cQ(b.M());a.v.bv(b.M());a.G=1;}}else{c=a.G;if(a.F!==null){d=a.F;if(!c)a.F=ACu(a,c,d,b);else a.F=ADX(a,c,d,b);}else{if(!a.bL&&a.v.H()){if(!c)a.F=ACA(a,b);else a.F=ADe(a,b);}else if(!c)a.F=ABI(a,b,c);else a.F
=AA_(a,b,c);a.cv=1;}}}
function Xa(a,b){var c,d;if(!a.y&&b.y)a.y=1;if(b.ck())a.dY=1;if(!(a.U^b.U)){if(!a.U)a.K.bv(b.bc());else a.K.cD(b.bc());}else if(!a.U)a.K.cX(b.bc());else{a.K.cQ(b.bc());a.K.bv(b.bc());a.U=0;}if(!a.cv&&b.M()!==null){if(!(a.G^b.c4())){if(!a.G)a.v.bv(b.M());else a.v.cD(b.M());}else if(!a.G)a.v.cX(b.M());else{a.v.cQ(b.M());a.v.bv(b.M());a.G=0;}}else{c=a.G;if(a.F!==null){d=a.F;if(!c)a.F=ADQ(a,c,d,b);else a.F=ACk(a,c,d,b);}else{if(!a.bL&&a.v.H()){if(!c)a.F=ABk(a,b);else a.F=ABN(a,b);}else if(!c)a.F=ABE(a,b,c);else a.F
=ADO(a,b,c);a.cv=1;}}}
function SG(a,b){if(a.F!==null)return a.G^a.F.j(b);return a.G^a.v.bN(b);}
function AAx(a){if(!a.cv)return a.v;return null;}
function U5(a){return a.K;}
function Wn(a){var b,c;if(a.F!==null)return a;b=a.M();c=ACD(a,b);return c.b7(a.c4());}
function Pq(a){var b,c;b=J();c=a.v.dr(0);while(c>=0){b.fC(CK(c));b.bt(124);c=a.v.dr(c+1|0);}if(b.g()>0)b.iw(b.g()-1|0);return b.e();}
function VG(a){return a.dY;}
function KM(){U.call(this);}
function Yg(){var a=new KM();XT(a);return a;}
function XT(a){BB(a);}
function JC(){BU.call(this);}
function ACS(){var a=new JC();YE(a);return a;}
function YE(a){CR(a);}
function Xh(a,b){WT(b);}
function WT(b){$rt_putStderr(b);}
function JY(){var a=this;C.call(a);a.fT=0;a.fq=0;a.g$=0;}
function AC0(){var a=new JY();Nv(a);return a;}
function Nv(a){M(a);}
function Md(){Ci.call(this);}
function ADc(a,b){var c=new Md();X2(c,a,b);return c;}
function X2(a,b,c){ET(a,b,c);}
$rt_packages([-1,"java",0,"util",1,"regex",0,"nio",3,"charset",0,"io",0,"lang",-1,"io",7,"github",8,"colemakmods",9,"keyboard"]);
$rt_metadata([C,"Object",6,0,[],0,3,0,["nP",function(){return Cf(this);},"hN",function(){return Tu(this);},"bS",function(b){return N5(this,b);},"e",function(){return R0(this);},"lZ",function(){return Er(this);},"dI",function(){return AAf(this);}],K,0,C,[],1,0,0,["kT",function(b){return To(this,b);}],M2,0,K,[],0,0,0,["u",function(){return Tx(this);}],JW,0,K,[],0,0,0,["u",function(){return Oi(this);}],CM,0,C,[],0,3,0,["ed",function(){return Vz(this);},"dR",function(){return TS(this);},"j2",function(){return WD(this);
},"et",function(){XH(this);},"hr",function(b){ZJ(this,b);}],Br,0,CM,[],0,3,0,0,U,0,Br,[],0,3,0,0,C5,"IndexOutOfBoundsException",6,U,[],0,3,0,0,Ct,0,C,[],1,0,0,0,I,0,Ct,[],1,0,E6,["M",function(){return Rf(this);},"bc",function(){return PM(this);},"jx",function(){return N$(this);},"gz",function(){return Xq(this);},"c8",function(){return Vm(this);},"jj",function(){return Qd(this);},"dQ",function(){return Rq(this);},"ck",function(){return YD(this);},"b7",function(b){return WH(this,b);},"c4",function(){return VE(this);
}],MM,"AbstractCharClass$LazyJavaWhitespace$1",2,I,[],0,0,0,["j",function(b){return PQ(this,b);}],BY,"IOException",5,Br,[],0,3,0,0,Cl,0,BY,[],0,3,0,0,Jz,"MalformedInputException",4,Cl,[],0,3,0,["dR",function(){return U$(this);}],Kp,0,K,[],0,0,0,["u",function(){return Ux(this);}],HX,0,C,[],0,3,0,["dq",function(){return UH(this);},"dE",function(b){return UP(this,b);},"gb",function(b){V7(this,b);},"eK",function(b){AAI(this,b);}],BQ,0,C,[],3,3,0,0,BO,0,C,[BQ],1,3,0,0,BE,0,C,[],3,3,0,0,C$,0,BO,[BE],0,3,B6,["e",function()
{return XX(this);}],Ka,"CloneNotSupportedException",6,Br,[],0,3,0,0,Cg,0,C,[],0,0,AB_,0,S,0,C,[],1,0,Jh,["bh",function(b,c,d){return C7(this,b,c,d);},"bf",function(b,c,d,e){return Db(this,b,c,d,e);},"gC",function(b){SZ(this,b);},"cP",function(){return RJ(this);},"kd",function(){return UO(this);},"t",function(b){FL(this,b);},"Z",function(b){return WN(this,b);},"cj",function(){return YJ(this);},"bB",function(){GL(this);}],W,0,S,[],0,0,0,["b",function(b,c,d){return WU(this,b,c,d);},"t",function(b){QX(this,b);},
"Z",function(b){return AAG(this,b);},"x",function(b){return So(this,b);},"bB",function(){Su(this);}],CL,0,W,[],0,0,0,["b",function(b,c,d){return OB(this,b,c,d);},"bh",function(b,c,d){return NE(this,b,c,d);},"bf",function(b,c,d,e){return T9(this,b,c,d,e);},"Z",function(b){return AAt(this,b);},"cj",function(){return Q2(this);},"bB",function(){YR(this);}],BF,0,C,[],3,3,0,0,Dk,0,C,[BF],3,3,0,0,El,0,C,[Dk],3,3,0,0,BL,0,C,[BF],3,3,0,0,KB,0,C,[El,BL],3,3,0,0,Gi,0,BO,[BE],0,3,U6,0,Gc,0,C,[BF],3,3,0,0,EB,0,C,[],3,3,
0,0,I_,0,C,[],0,0,0,["i1",function(b,c){X7(this,b,c);},"fE",function(b){return NT(this,b);}],Ee,0,K,[],0,0,0,["u",function(){return Jf(this);}],DM,0,K,[],0,0,0,["u",function(){return Gy(this);}],Kh,0,DM,[],0,0,0,["u",function(){return Xb(this);}],Hi,0,CL,[],0,0,0,["bh",function(b,c,d){return VP(this,b,c,d);},"bf",function(b,c,d,e){return AAp(this,b,c,d,e);},"cj",function(){return SK(this);}],L7,"BufferOverflowException",4,U,[],0,3,0,0,CE,0,W,[],0,0,0,["b",function(b,c,d){return PH(this,b,c,d);},"t",function(b)
{St(this,b);},"c6",function(b){return S_(this,b);},"x",function(b){return Tb(this,b);}],Du,0,K,[],0,0,0,["u",function(){return M7(this);}],Ky,0,Du,[],0,0,0,["u",function(){return O6(this);}],KS,"AbstractCharClass$1",2,I,[],0,0,0,["j",function(b){return U4(this,b);}],KP,"AbstractCharClass$2",2,I,[],0,0,0,["j",function(b){return Ov(this,b);}],Kb,0,K,[],0,0,0,["u",function(){return PN(this);}],Z,0,S,[],1,0,0,["b",function(b,c,d){return ZT(this,b,c,d);},"bb",function(){return VD(this);},"x",function(b){return YX(this,
b);}],Hv,0,Z,[],0,0,0,["I",function(b,c){return Uf(this,b,c);}],BN,0,S,[],1,0,0,["ef",function(){return Z_(this);},"Z",function(b){return T$(this,b);},"x",function(b){return Xf(this,b);},"bB",function(){Om(this);}],Bx,0,BN,[],0,0,0,["b",function(b,c,d){return N7(this,b,c,d);}],Cd,0,Bx,[],0,0,0,["b",function(b,c,d){return Qq(this,b,c,d);}]]);
$rt_metadata([Jg,0,Cd,[],0,0,0,["b",function(b,c,d){return Ub(this,b,c,d);}],Dg,0,C,[],3,3,0,0,B9,0,CM,[],0,3,0,0,CP,0,B9,[],0,3,0,0,Dw,0,C,[BL],3,3,0,0,Mm,"StringIndexOutOfBoundsException",6,C5,[],0,3,0,0,EE,"MissingResourceException",1,U,[],0,3,0,0,J0,0,C,[],0,3,0,0,JH,"AbstractCharClass$LazyJavaLetterOrDigit$1",2,I,[],0,0,0,["j",function(b){return Ob(this,b);}],IA,"CharClass$18",2,I,[],0,0,0,["j",function(b){return AAr(this,b);},"e",function(){return WI(this);}],DY,0,C,[],1,3,0,["mf",function(b){return K9(this,
b);},"fW",function(b){W6(this,b);},"mY",function(b){return HO(this,b);},"ft",function(b){Xy(this,b);},"m4",function(b,c,d){return FB(this,b,c,d);},"oJ",function(b){return Mz(this,b);},"ox",function(){return LC(this);},"lw",function(b){return I6(this,b);},"mo",function(b){return En(this,b);},"kH",function(b){return O7(this,b);},"kB",function(){UF(this);}],Bw,0,BN,[],0,0,0,["b",function(b,c,d){return Oy(this,b,c,d);}],Nb,0,Bw,[],0,0,0,["b",function(b,c,d){return S4(this,b,c,d);}],LH,0,CE,[],0,0,0,["b",function(b,
c,d){return NB(this,b,c,d);}],Ix,0,I,[],0,0,0,["j",function(b){return S7(this,b);}],D0,0,C,[],4,3,YT,0,Iy,0,I,[],0,0,0,["j",function(b){return V_(this,b);}],Iz,0,I,[],0,0,0,["j",function(b){return AAM(this,b);}],Lt,0,C,[],4,3,0,0,L$,0,K,[],0,0,0,["u",function(){return VN(this);}],Ji,0,I,[],0,0,0,["j",function(b){return W9(this,b);}],IB,0,I,[],0,0,0,["j",function(b){return Rm(this,b);}],GD,0,Z,[],0,0,0,["I",function(b,c){return NG(this,b,c);}],IC,0,I,[],0,0,0,["j",function(b){return RP(this,b);}],Mp,0,BN,[],
0,0,0,["b",function(b,c,d){return Z6(this,b,c,d);},"bh",function(b,c,d){return Vs(this,b,c,d);}],ID,0,I,[],0,0,0,["j",function(b){return Y5(this,b);}],Ln,"AbstractCharClass$LazyJavaDefined$1",2,I,[],0,0,0,["j",function(b){return YI(this,b);}],Iw,0,I,[],0,0,0,["j",function(b){return V$(this,b);}],Bs,0,S,[],0,0,Ea,["b",function(b,c,d){return Qm(this,b,c,d);},"c_",function(){return Oa(this);},"x",function(b){return Rl(this,b);}],Fw,0,Bs,[],0,0,0,["b",function(b,c,d){return RA(this,b,c,d);}],CH,0,C,[BQ,Dg],0,0,
0,["oX",function(b){return H_(this,b);},"fB",function(b,c){return J4(this,b,c);},"oy",function(b){return Il(this,b);},"gX",function(b,c){return PI(this,b,c);},"jB",function(b,c,d){return Yk(this,b,c,d);},"nK",function(b){return Kg(this,b);},"iZ",function(b,c){return HA(this,b,c);},"mc",function(b){return F9(this,b);},"fQ",function(b,c){return F5(this,b,c);},"os",function(b){return L8(this,b);},"hO",function(b,c){return Kl(this,b,c);},"b1",function(b){ES(this,b);},"e",function(){return EF(this);},"g",function()
{return FR(this);},"d",function(b){return Hc(this,b);},"fZ",function(b,c,d){return F0(this,b,c,d);},"e8",function(b,c,d,e){return EG(this,b,c,d,e);},"oS",function(b){return EU(this,b);},"g3",function(b,c,d,e){K3(this,b,c,d,e);},"dS",function(b){FF(this,b);},"nm",function(b){return Lc(this,b);},"nr",function(b,c){return LG(this,b,c);},"nI",function(b,c){BC(this,b,c);}],Dd,0,C,[],3,3,0,0,GU,0,CH,[Dd],0,3,0,["a",function(b){return Or(this,b);},"m",function(b){return Pg(this,b);},"ij",function(b){return Xg(this,
b);},"bt",function(b){return Od(this,b);},"jM",function(b,c,d){return Tj(this,b,c,d);},"fC",function(b){return UZ(this,b);},"ib",function(b){return Oz(this,b);},"k$",function(b,c){return Vq(this,b,c);},"lT",function(b,c,d,e){return S0(this,b,c,d,e);},"j5",function(b,c){return Zw(this,b,c);},"lk",function(b,c){return P5(this,b,c);},"j0",function(b,c){return XO(this,b,c);},"iw",function(b){return VK(this,b);},"j1",function(b,c){return ZP(this,b,c);},"dS",function(b){Z2(this,b);},"g3",function(b,c,d,e){UQ(this,
b,c,d,e);},"e8",function(b,c,d,e){return ZH(this,b,c,d,e);},"fZ",function(b,c,d){return Ud(this,b,c,d);},"g",function(){return Q5(this);},"e",function(){return RE(this);},"b1",function(b){Z7(this,b);},"hO",function(b,c){return Ow(this,b,c);},"fQ",function(b,c){return NC(this,b,c);},"iZ",function(b,c){return Xj(this,b,c);},"fB",function(b,c){return AAu(this,b,c);}],DF,0,Ee,[],0,0,0,["u",function(){return KJ(this);}],KX,"ConcurrentModificationException",1,U,[],0,3,0,0,KK,0,W,[],0,0,0,["b",function(b,c,d){return Qf(this,
b,c,d);},"t",function(b){Qw(this,b);},"x",function(b){return RU(this,b);},"Z",function(b){return Rd(this,b);}],Gb,0,C,[],3,3,0,0,Dt,0,C,[Gb],3,3,0,0,E8,0,C,[],3,3,0,0,BU,0,C,[Dt,E8],1,3,0,["di",function(b,c,d){OQ(this,b,c,d);}],MA,0,BU,[],0,3,0,["e1",function(b){OP(this,b);},"di",function(b,c,d){Qa(this,b,c,d);},"b1",function(b){ER(this,b);},"kc",function(b){return W7(this,b);}],GX,0,W,[],0,0,0,["t",function(b){Vw(this,b);},"b",function(b,c,d){return XY(this,b,c,d);}],Mo,0,Bw,[],0,0,0,["b",function(b,c,d){return Zb(this,
b,c,d);}],Cp,0,Bs,[],0,0,0,["b",function(b,c,d){return Xu(this,b,c,d);}],Ib,0,B9,[],0,3,0,0,J6,0,Bw,[],0,0,0,["b",function(b,c,d){return OO(this,b,c,d);}],Kq,0,Z,[],0,0,0,["I",function(b,c){return UA(this,b,c);},"bh",function(b,c,d){return Vt(this,b,c,d);},"bf",function(b,c,d,e){return SD(this,b,c,d,e);},"x",function(b){return Pc(this,b);}],Im,0,CH,[Dd],0,3,0,["g2",function(b){return Vx(this,b);},"lU",function(b,c,d){return Za(this,b,c,d);},"kx",function(b){return UE(this,b);},"jF",function(b,c,d,e){return Ok(this,
b,c,d,e);},"lI",function(b,c){return XN(this,b,c);},"dS",function(b){OU(this,b);},"e8",function(b,c,d,e){return VJ(this,b,c,d,e);},"fZ",function(b,c,d){return Ri(this,b,c,d);},"d",function(b){return NW(this,b);},"g",function(){return ZW(this);},"e",function(){return Ry(this);},"b1",function(b){R4(this,b);},"fQ",function(b,c){return VA(this,b,c);}],CD,0,C,[],1,3,0,["l6",function(){return Kc(this);},"oK",function(){return BG(this);},"l$",function(b){return FG(this,b);},"mn",function(){return KC(this);},"m8",function()
{return IV(this);},"oF",function(){return MF(this);},"nC",function(){return X(this);},"m5",function(){return BR(this);}],Gu,"AbstractCharClass$LazyJavaUnicodeIdentifierPart$1",2,I,[],0,0,0,["j",function(b){return YV(this,b);}]]);
$rt_metadata([Da,0,C,[],4,0,ACa,["oU",function(b){return LB(this,b);}],Gn,0,K,[],0,0,0,["u",function(){return Wu(this);}],Ci,0,W,[],0,0,0,["t",function(b){YM(this,b);},"b",function(b,c,d){return Qx(this,b,c,d);},"jf",function(){return FN(this);},"gc",function(b,c,d){return YA(this,b,c,d);},"Z",function(b){return ZG(this,b);},"x",function(b){return SC(this,b);}],H7,0,Ci,[],0,0,0,0,CO,0,C,[BE,BQ],1,3,0,["l7",function(){return MK(this);}],B$,"KeyboardLayout$KeyboardType",10,CO,[],12,3,DT,0,CC,0,CP,[],0,3,0,0,K4,
0,CC,[],0,3,0,0,My,0,Bs,[],0,0,0,["b",function(b,c,d){return SU(this,b,c,d);}],J7,0,K,[],0,0,0,["u",function(){return UX(this);}],D$,0,W,[],0,0,0,["b",function(b,c,d){return Qy(this,b,c,d);},"x",function(b){return Ta(this,b);}],BT,0,D$,[],0,0,0,["b",function(b,c,d){return TV(this,b,c,d);},"t",function(b){Sz(this,b);}],GN,0,BT,[],0,0,0,["b",function(b,c,d){return QK(this,b,c,d);},"x",function(b){return WZ(this,b);}],Cy,0,C,[Dt],1,3,0,0,M1,0,Cy,[],0,3,0,["kk",function(b,c,d){return Ty(this,b,c,d);},"bH",function()
{Np(this);},"nR",function(){MP(this);}],Ku,0,BT,[],0,0,0,["b",function(b,c,d){return Q$(this,b,c,d);},"x",function(b){return VQ(this,b);}],Fo,0,C,[],3,3,0,0,HR,0,C,[Fo],0,0,0,["Y",function(){return O$(this);},"V",function(){return Ww(this);},"mO",function(){Jl(this);}],Fk,0,C,[Dk],3,3,0,0,DJ,0,C,[BL],3,3,0,0,D5,0,C,[BL],3,3,0,0,Fy,0,C,[BL],3,3,0,0,D1,0,C,[BL],3,3,0,0,JI,0,C,[Fk,Gc,BL,DJ,D5,Fy,D1,Dw],3,3,0,0,IZ,0,C,[],0,3,0,["c5",function(){return TT(this);},"dt",function(){return AAi(this);},"bK",function()
{return X$(this);}],B5,0,C,[],3,3,0,0,Ha,"Quantifier",2,Ct,[B5],0,0,0,["c1",function(){return WG(this);},"c3",function(){return W0(this);},"e",function(){return PD(this);}],DV,"UnsupportedOperationException",6,U,[],0,3,0,0,MJ,"ReadOnlyBufferException",3,DV,[],0,3,0,0,GR,"AbstractCharClass$LazyJavaUpperCase$1",2,I,[],0,0,0,["j",function(b){return QE(this,b);}],Hu,0,C,[],4,3,0,0,Ij,0,C,[],0,3,0,0,JP,0,C,[],4,0,0,0,D2,0,DY,[],1,3,0,["jv",function(b,c){return WK(this,b,c);}],HL,0,D2,[],0,3,0,["kp",function(b,c,
d,e,f,g,h){return Yf(this,b,c,d,e,f,g,h);},"mi",function(b){return Cj(this,b);}],H2,0,CC,[],0,3,0,0,H1,0,K,[],0,0,0,["u",function(){return Uh(this);}],FC,0,C,[],3,3,0,0,DA,0,C,[FC],3,3,0,0,Dl,0,C,[DA],1,3,0,["jl",function(b){return UY(this,b);}],Nd,0,Bx,[],0,0,0,["b",function(b,c,d){return PB(this,b,c,d);}],Jo,0,C,[],0,3,0,["dq",function(){return Pj(this);},"dE",function(b){return Rj(this,b);},"gb",function(b){WY(this,b);},"eK",function(b){S3(this,b);}],JR,0,C,[],4,3,0,0,Cb,0,Bx,[],0,0,0,["b",function(b,c,d)
{return NL(this,b,c,d);},"t",function(b){AAH(this,b);}],KL,0,Cb,[],0,0,0,["b",function(b,c,d){return ON(this,b,c,d);}],Ik,"AbstractCharClass$LazyJavaIdentifierIgnorable$1",2,I,[],0,0,0,["j",function(b){return QC(this,b);}],Gl,0,C,[],3,3,0,0,H3,"AbstractCharClass$LazyJavaLetter$1",2,I,[],0,0,0,["j",function(b){return XW(this,b);}],K1,0,Bx,[],0,0,0,["b",function(b,c,d){return QO(this,b,c,d);}],Jp,0,C,[],4,0,0,0]);
$rt_metadata([G5,"AbstractCharClass$LazyJavaUnicodeIdentifierStart$1",2,I,[],0,0,0,["j",function(b){return Tv(this,b);}],IS,0,C,[],4,3,0,0,G0,0,C,[],0,3,0,["jY",function(b,c,d){RV(this,b,c,d);},"ld",function(){return AAc(this);},"cd",function(b){return Pk(this,b);},"dM",function(b,c){return AAN(this,b,c);},"d9",function(){return Zt(this);},"iu",function(){return QL(this);},"cM",function(){return Wl(this);},"k4",function(b){return OS(this,b);},"jI",function(b,c){Zl(this,b,c);},"lV",function(b,c){return YL(this,
b,c);},"lB",function(b,c,d){Up(this,b,c,d);},"k3",function(b){return RR(this,b);},"kt",function(){return Xk(this);},"km",function(b){TN(this,b);}],Ef,0,DF,[],0,0,0,["u",function(){return Gt(this);}],Mr,0,Ef,[],0,0,0,["u",function(){return Oo(this);}],JE,0,K,[],0,0,0,["u",function(){return WF(this);}],Ei,0,C,[],3,3,0,0,D8,0,C,[Ei,B5],0,0,0,0,ED,0,D8,[],0,0,0,0,LS,0,BT,[],0,0,0,["b",function(b,c,d){return Sn(this,b,c,d);},"x",function(b){return AAz(this,b);}],Dj,0,C,[],1,3,0,["mX",function(b){LP(this,b);},"mw",
function(b){return Gm(this,b);},"fW",function(b){Y$(this,b);},"oM",function(b){return LV(this,b);},"ft",function(b){Yh(this,b);},"oi",function(b,c,d){return H$(this,b,c,d);},"mq",function(b){return G1(this,b);},"jt",function(b){return N2(this,b);}],Mt,0,Z,[],0,0,0,["I",function(b,c){return TM(this,b,c);},"bh",function(b,c,d){return QY(this,b,c,d);},"bf",function(b,c,d,e){return Wo(this,b,c,d,e);},"Z",function(b){return XG(this,b);},"jo",function(b,c,d){return W8(this,b,c,d);},"jz",function(b,c,d){return VB(this,
b,c,d);},"fS",function(b,c){return XZ(this,b,c);}],Lg,0,S,[],0,0,0,["b",function(b,c,d){return Qn(this,b,c,d);},"x",function(b){return Nq(this,b);}],Li,"ArrayStoreException",6,U,[],0,3,0,0,CN,0,Bw,[],0,0,0,["b",function(b,c,d){return U1(this,b,c,d);},"t",function(b){XJ(this,b);}],J1,0,K,[],0,0,0,["u",function(){return VX(this);}],DH,0,CD,[BE],1,3,0,["ln",function(b,c,d){return Ti(this,b,c,d);},"hV",function(b,c,d){return XC(this,b,c,d);},"mQ",function(b){return KR(this,b);},"nD",function(){return EW(this);},
"ep",function(b){return VC(this,b);}],Lw,0,DH,[],0,0,0,["dN",function(){return W$(this);}],DW,0,C,[],3,3,0,0,Fm,0,C,[DW],0,0,0,["D",function(b,c){Xn(this,b,c);},"bD",function(b){return AAL(this,b);},"eb",function(){return NQ(this);},"ga",function(b){return ZY(this,b);},"bO",function(b,c){S$(this,b,c);},"fz",function(b,c){Q0(this,b,c);},"cE",function(b){return Sf(this,b);},"ez",function(b){return Sx(this,b);},"jV",function(b){return Zy(this,b);},"hE",function(){return Sj(this);},"eZ",function(b){return SE(this,
b);},"kG",function(){NO(this);},"hQ",function(b){return Oq(this,b);},"b4",function(b,c){Sq(this,b,c);},"nT",function(b){F_(this,b);},"jK",function(){XQ(this);},"ju",function(){return XS(this);},"h8",function(b,c,d){Zd(this,b,c,d);},"kn",function(){Tw(this);},"oT",function(b,c){Lr(this,b,c);},"kz",function(b){TR(this,b);},"bw",function(){return RI(this);},"q",function(){return NM(this);},"d6",function(b){Uo(this,b);},"ig",function(){return We(this);},"cU",function(){return XD(this);},"df",function(){return Op(this);
},"lx",function(){return PY(this);}],IX,0,Z,[],0,0,0,["I",function(b,c){return ZE(this,b,c);}],GH,0,C,[],0,3,0,["ci",function(){return O3(this);},"dt",function(){return OL(this);},"bK",function(){return OM(this);}],GJ,"AbstractCharClass$LazyJavaJavaIdentifierPart$1",2,I,[],0,0,0,["j",function(b){return ZI(this,b);}],H9,0,C,[],0,3,0,["fl",function(){W3(this);},"mg",function(b){Ke(this,b);}],IT,0,C,[],4,3,0,0,Ds,0,C,[BE],1,3,0,["lw",function(b){return GZ(this,b);}],C8,0,C,[],0,3,B7,0,Kw,"BufferUnderflowException",
4,U,[],0,3,0,0,BP,"IllegalArgumentException",6,U,[],0,3,0,0,JQ,"IllegalCharsetNameException",4,BP,[],0,3,0,0,Hz,0,S,[],0,0,0,["b",function(b,c,d){return Sr(this,b,c,d);},"x",function(b){return Wq(this,b);}],Gd,0,C,[BF],3,3,0,0,Km,0,C,[BF],1,3,0,0,Dv,0,BU,[],0,3,0,0,K0,0,Dv,[],0,3,0,["di",function(b,c,d){PL(this,b,c,d);},"mR",function(){return J_(this);},"mL",function(b,c,d){EX(this,b,c,d);},"ke",function(b){Uj(this,b);},"bI",function(b){YG(this,b);},"n",function(b){Sp(this,b);},"lr",function(b){Zs(this,b);},
"ly",function(){SW(this);},"l0",function(){Dx(this);}],FI,0,C,[],3,3,0,0,HN,0,BT,[],0,0,0,["b",function(b,c,d){return N4(this,b,c,d);},"x",function(b){return TB(this,b);}],KZ,0,CE,[],0,0,0,["b",function(b,c,d){return S2(this,b,c,d);},"bh",function(b,c,d){return WR(this,b,c,d);},"bf",function(b,c,d,e){return O9(this,b,c,d,e);},"Z",function(b){return Ou(this,b);}],I3,0,K,[],0,0,0,["u",function(){return T0(this);}],Iv,0,BN,[],0,0,0,["b",function(b,c,d){return Q3(this,b,c,d);},"bh",function(b,c,d){return NU(this,
b,c,d);},"nx",function(b,c,d){return Fh(this,b,c,d);},"oH",function(b,c,d){return K7(this,b,c,d);}],JL,0,K,[],0,0,0,["u",function(){return ZZ(this);}],Kz,0,C,[BF],1,3,0,0,DQ,0,C,[],4,3,MB,0,Lz,0,K,[],0,0,0,["u",function(){return R6(this);}],DG,0,C,[EB],1,3,0,0,Ir,0,S,[],0,0,0,["b",function(b,c,d){return Y2(this,b,c,d);},"x",function(b){return AAl(this,b);}],KU,0,Bx,[],0,0,0,["b",function(b,c,d){return ZF(this,b,c,d);},"bh",function(b,c,d){return Ph(this,b,c,d);}],EH,0,C,[],3,3,0,0,KV,0,C,[EH],0,3,0,["lv",function()
{return QR(this);},"jO",function(b){return Ui(this,b);},"bX",function(){return ZS(this);},"eo",function(){return WW(this);},"kI",function(){return Rb(this);},"eA",function(){return NZ(this);},"j7",function(){return Sv(this);}],LA,0,C,[B5,BQ],0,3,0,["gg",function(b){Sm(this,b);},"d7",function(b,c){XI(this,b,c);},"m$",function(b){return C9(this,b);},"l5",function(b){return CU(this,b);},"eT",function(b){AAD(this,b);},"jE",function(b,c){O2(this,b,c);},"bN",function(b){return O_(this,b);},"dr",function(b){return ZA(this,
b);},"la",function(b){return RK(this,b);},"b1",function(b){C2(this,b);},"nl",function(){CI(this);},"j9",function(b){return QQ(this,b);},"bv",function(b){X5(this,b);},"cX",function(b){ZU(this,b);},"cD",function(b){XR(this,b);},"cQ",function(b){Z5(this,b);},"H",function(){return Yb(this);}]]);
$rt_metadata([F6,0,C,[],3,3,0,0,GP,"AbstractCharClass$LazyJavaJavaIdentifierStart$1",2,I,[],0,0,0,["j",function(b){return TZ(this,b);}],Ga,0,Bs,[],0,0,0,["b",function(b,c,d){return O5(this,b,c,d);},"x",function(b){return T3(this,b);}],Bf,0,C,[],0,3,Bj,0,D4,0,BO,[BE],0,3,AFE,0,H4,0,C,[],0,3,0,0,B1,0,Z,[],0,0,0,["bb",function(){return Zc(this);},"I",function(b,c){return Xl(this,b,c);},"bh",function(b,c,d){return UM(this,b,c,d);},"bf",function(b,c,d,e){return Zp(this,b,c,d,e);},"ci",function(){return Ra(this);
},"Z",function(b){return Wf(this,b);}],GB,0,Z,[],0,0,0,["I",function(b,c){return Ul(this,b,c);}],Mi,0,BU,[],0,0,0,["e1",function(b){N8(this,b);}],DD,0,C,[],4,3,0,0,IF,0,I,[],0,0,0,["j",function(b){return Uk(this,b);}],IM,0,I,[],0,0,0,["j",function(b){return Ng(this,b);}],IH,0,I,[],0,0,0,["j",function(b){return Tk(this,b);}],IG,0,I,[],0,0,0,["j",function(b){return NF(this,b);}],JB,0,K,[],0,0,0,["u",function(){return AAJ(this);}],II,0,I,[],0,0,0,["j",function(b){return WX(this,b);}],Jt,0,K,[],0,0,0,["u",function()
{return YC(this);}],IP,0,I,[],0,0,0,["j",function(b){return S8(this,b);}],IL,0,I,[],0,0,0,["j",function(b){return Um(this,b);}],IK,0,I,[],0,0,0,["j",function(b){return NH(this,b);}],I$,0,W,[],4,0,0,["b",function(b,c,d){return P_(this,b,c,d);},"t",function(b){TU(this,b);},"cP",function(){return Ne(this);},"x",function(b){return ZQ(this,b);}],IN,0,I,[],0,0,0,["j",function(b){return W1(this,b);}],Gs,0,C,[DW],4,3,0,["nU",function(b){return Es(this,b);},"np",function(b){return Jv(this,b);},"mS",function(){return K5(this);
},"eZ",function(b){return MV(this,b);},"ga",function(b){return Hj(this,b);},"hE",function(){return Mg(this);},"eb",function(){return Ki(this);},"df",function(){return HG(this);}],BZ,0,C,[BE],0,3,N,0,K$,0,W,[],0,0,0,["b",function(b,c,d){return Zn(this,b,c,d);},"t",function(b){Rz(this,b);},"cP",function(){return PR(this);},"x",function(b){return Rw(this,b);}],GO,0,Z,[],0,0,0,["I",function(b,c){return On(this,b,c);}],B0,0,Z,[],0,0,0,["I",function(b,c){return Tc(this,b,c);},"bh",function(b,c,d){return Pt(this,b,
c,d);},"bf",function(b,c,d,e){return R2(this,b,c,d,e);},"gi",function(){return N9(this);},"Z",function(b){return SS(this,b);}],G8,"AbstractCharClass$LazyJavaLowerCase$1",2,I,[],0,0,0,["j",function(b){return Xr(this,b);}],Ms,0,K,[],0,0,0,["u",function(){return Nw(this);}],BK,0,W,[],0,0,0,["b",function(b,c,d){return UT(this,b,c,d);},"j",function(b){return V0(this,b);},"Z",function(b){return P3(this,b);},"fc",function(){return Zi(this);},"t",function(b){Vb(this,b);},"x",function(b){return Vd(this,b);}],GY,0,BK,
[],0,0,0,["j",function(b){return YY(this,b);}],Nc,0,K,[],0,0,0,["u",function(){return NR(this);}],B_,0,C,[],1,0,0,0,E7,0,W,[],0,0,0,["t",function(b){NJ(this,b);},"jf",function(){return FJ(this);},"b",function(b,c,d){return NK(this,b,c,d);},"Z",function(b){return Rx(this,b);},"x",function(b){return Wy(this,b);}],Dq,0,CD,[BE,Dd,Dg,Gl],1,3,0,["iC",function(b,c,d){return PK(this,b,c,d);},"kv",function(b){return SA(this,b);},"kZ",function(b,c,d){return AAk(this,b,c,d);},"lj",function(b,c,d){return QD(this,b,c,d);
},"oq",function(b){return DR(this,b);},"nV",function(){return IQ(this);},"ow",function(){return E9(this);},"n3",function(){return G6(this);},"fb",function(b){return Nn(this,b);}],DP,0,Dq,[],1,0,0,["dN",function(){return Zx(this);}],L0,0,DP,[],0,0,0,["lp",function(b){return Qh(this,b);},"hf",function(b,c){Nk(this,b,c);},"jA",function(){return P$(this);},"lA",function(){return Wb(this);},"kR",function(){return Y3(this);}],MZ,0,K,[],0,0,0,["u",function(){return Xz(this);}],EQ,0,C,[],0,3,AA2,["jc",function(b,c)
{return Td(this,b,c);},"n2",function(b,c,d){return KW(this,b,c,d);},"nt",function(b,c){return FW(this,b,c);},"oo",function(b,c){return LO(this,b,c);}],B4,"KeyboardConfig$Section",10,CO,[],12,3,FY,0,HZ,"AbstractCharClass$LazyJavaTitleCase$1",2,I,[],0,0,0,["j",function(b){return W2(this,b);}],De,0,C,[],0,3,0,["bX",function(){return OR(this);},"i6",function(){return Yc(this);},"dl",function(){return Of(this);},"bR",function(){return Sh(this);},"lN",function(b){AAB(this,b);},"eY",function(){return QG(this);},"eI",
function(b){QP(this,b);}],CB,0,C,[BF],3,3,0,0,HI,0,C,[CB],4,0,0,["fO",function(b){MW(this,b);},"e0",function(b){return Xo(this,b);}],MH,0,C,[],0,3,0,0,HK,0,C,[CB],4,0,0,["fO",function(b){Ls(this,b);},"e0",function(b){return AAA(this,b);}],Hk,0,C,[CB],4,0,0,["fO",function(b){JM(this,b);},"e0",function(b){return WB(this,b);}],GA,0,C,[],0,3,0,["ct",function(){return Ve(this);},"dx",function(){return YP(this);},"cu",function(){return PZ(this);}],ML,"AbstractCharClass$LazyJavaMirrored$1",2,I,[],0,0,0,["j",function(b)
{return VM(this,b);}],L9,"UnsupportedCharsetException",4,BP,[],0,3,0,0]);
$rt_metadata([Hl,0,C,[CB],4,0,0,["fO",function(b){KQ(this,b);},"e0",function(b){return UN(this,b);}],Lp,"AbstractCharClass$LazyJavaISOControl$1",2,I,[],0,0,0,["j",function(b){return Tz(this,b);}],J8,0,S,[],0,0,0,["b",function(b,c,d){return Q9(this,b,c,d);},"x",function(b){return Rv(this,b);},"mk",function(b,c,d,e){return FK(this,b,c,d,e);}],KO,0,S,[],4,0,0,["b",function(b,c,d){return ZN(this,b,c,d);},"x",function(b){return Wd(this,b);}],Dm,0,K,[],0,0,0,["u",function(){return LW(this);}],Hh,0,C,[],0,3,0,["kq",
function(){return PV(this);},"ll",function(){return Vf(this);},"k8",function(){return WM(this);},"hS",function(){return Pw(this);},"lM",function(){return YU(this);},"jy",function(){return Ua(this);}],LR,0,Z,[],0,0,0,["I",function(b,c){return Nt(this,b,c);}],DO,0,BO,[BE],0,3,FE,["dU",function(){return AAh(this);}],Ey,0,Bs,[],0,0,0,["b",function(b,c,d){return Pm(this,b,c,d);},"bu",function(){return RT(this);},"x",function(b){return Q6(this,b);}],Dn,0,W,[],0,0,0,["t",function(b){QJ(this,b);},"b",function(b,c,d)
{return SM(this,b,c,d);},"bh",function(b,c,d){return XB(this,b,c,d);},"bf",function(b,c,d,e){return T5(this,b,c,d,e);},"Z",function(b){return OY(this,b);},"x",function(b){return VV(this,b);}],E_,0,C,[BL,DJ,D5,D1,Dw],3,3,0,0,LQ,0,B9,[],0,3,0,0,LJ,0,C,[],0,3,0,["iO",function(){return WP(this);},"cr",function(){return Z$(this);},"f3",function(){return Xw(this);},"gu",function(){return Y8(this);},"bd",function(){return T7(this);},"lz",function(b){Q8(this,b);},"iU",function(){return PF(this);},"lE",function(b){T8(this,
b);},"da",function(){return OH(this);},"ha",function(b){return Pi(this,b);},"kO",function(b){Tp(this,b);},"nY",function(){return M6(this);}],Ch,0,Bw,[],0,0,0,["b",function(b,c,d){return AAs(this,b,c,d);}],Ff,0,Ch,[],0,0,0,["b",function(b,c,d){return Ps(this,b,c,d);}],EA,0,C,[DA],3,3,0,0,DB,0,Dl,[EA],1,3,0,["X",function(){return U8(this);}],EZ,0,C,[],3,3,0,0,Ia,0,DB,[B5,BQ,EZ],0,3,0,["b1",function(b){Py(this,b);},"C",function(b){return S9(this,b);},"T",function(){return QN(this);},"bo",function(b){return XK(this,
b);},"lJ",function(b,c){YO(this,b,c);},"iD",function(b){return TJ(this,b);},"m_",function(b){Ex(this,b);},"mu",function(b){JN(this,b);}],E5,0,C,[],3,3,0,0,Fe,0,C,[BF],3,3,0,0,HH,0,C,[BF,E_,E5,Fe],1,3,0,["m0",function(b,c){return Ny(this,b,c);},"on",function(b,c){return N_(this,b,c);},"l_",function(b){return P9(this,b);},"mh",function(b,c,d){return Qu(this,b,c,d);},"n0",function(b){return XP(this,b);},"n7",function(){return Sl(this);},"m2",function(b,c,d){return Oc(this,b,c,d);}],K8,0,CN,[],0,0,0,["b",function(b,
c,d){return RW(this,b,c,d);}],Hw,0,C,[],0,0,0,0,Bi,0,C,[BQ,BE,Dg],0,3,Cm,["oG",function(b,c,d,e){I7(this,b,c,d,e);},"d",function(b){return Qj(this,b);},"g",function(){return Wc(this);},"H",function(){return Y9(this);},"ip",function(b,c){return RB(this,b,c);},"ej",function(b){return Zg(this,b);},"cF",function(b,c){return PW(this,b,c);},"cy",function(b){return UR(this,b);},"eq",function(b,c){return Qv(this,b,c);},"gL",function(b,c){return Un(this,b,c);},"lD",function(b,c){return UG(this,b,c);},"ch",function(b,
c){return OC(this,b,c);},"e9",function(b){return Yp(this,b);},"fp",function(b,c){return U3(this,b,c);},"fN",function(b){return Ni(this,b);},"fw",function(){return ZL(this);},"e",function(){return RZ(this);},"cg",function(){return Ze(this);},"bS",function(b){return XE(this,b);},"jR",function(b){return X1(this,b);},"hN",function(){return P7(this);},"c7",function(){return O4(this);},"i2",function(b){return AAg(this,b);}],FT,0,C,[],0,0,ADM,0,M_,"NegativeArraySizeException",6,U,[],0,3,0,0,If,0,Cb,[],0,0,0,["b",function(b,
c,d){return PS(this,b,c,d);}],Ed,0,Dj,[],1,3,0,["j6",function(b,c){return QA(this,b,c);}],JS,0,Ed,[],0,3,0,["jD",function(b,c,d,e,f,g,h){return Z0(this,b,c,d,e,f,g,h);}],Ja,0,K,[],0,0,0,["u",function(){return Yt(this);}],Io,0,S,[],0,0,0,["b",function(b,c,d){return ZD(this,b,c,d);},"x",function(b){return QV(this,b);}],C1,"NumberFormatException",6,BP,[],0,3,0,0,EI,0,Ch,[],0,0,0,["b",function(b,c,d){return Ya(this,b,c,d);}],MQ,0,Ds,[],0,3,0,["j_",function(){return Ur(this);},"kV",function(){return Yi(this);}],GF,
0,S,[],0,0,0,["b",function(b,c,d){return Ym(this,b,c,d);},"x",function(b){return SR(this,b);}],Ii,0,C,[],0,0,0,0,Hp,0,Cy,[],0,3,0,["bH",function(){AAb(this);},"ek",function(){return ZX(this);},"om",function(b){return Ez(this,b);},"nL",function(){FH(this);}],Is,0,K,[],0,0,0,["u",function(){return Tm(this);}],Jc,"AbstractCharClass$LazyJavaDigit$1",2,I,[],0,0,0,["j",function(b){return Xx(this,b);}],Jk,0,K,[],0,0,0,["u",function(){return Nu(this);}],Hr,"IllegalStateException",6,Br,[],0,3,0,0,Dy,0,W,[],0,0,0,["t",
function(b){R3(this,b);},"b",function(b,c,d){return N6(this,b,c,d);},"bh",function(b,c,d){return Rt(this,b,c,d);},"bf",function(b,c,d,e){return Uc(this,b,c,d,e);},"Z",function(b){return TO(this,b);},"x",function(b){return RS(this,b);}],LU,0,Cd,[],0,0,0,["b",function(b,c,d){return UD(this,b,c,d);}],GQ,"NullPointerException",6,U,[],0,3,0,0,LY,0,S,[],4,0,0,["b",function(b,c,d){return AAy(this,b,c,d);},"x",function(b){return Yy(this,b);}],JV,"AbstractCharClass$LazyJavaSpaceChar$1",2,I,[],0,0,0,["j",function(b){
return Ss(this,b);}],Ks,0,C,[Gd],0,0,0,["jC",function(){W4(this);},"oL",function(){return SI(this);}],LX,0,C,[],4,3,0,0,Ko,0,K,[],0,0,0,["u",function(){return Px(this);}]]);
$rt_metadata([FO,"PatternSyntaxException",2,BP,[],0,3,0,["dR",function(){return YB(this);}],GG,0,C,[],0,3,0,0,Kt,0,K,[],0,0,0,["u",function(){return Tt(this);}],Di,0,C,[],0,3,B2,0,H6,0,C,[F6],0,3,0,0,EV,0,C,[],0,3,ACg,["jU",function(b,c,d){return Us(this,b,c,d);},"nf",function(b){return Hx(this,b);},"oW",function(b,c){return M8(this,b,c);},"oh",function(b,c){return MY(this,b,c);},"nc",function(b,c){return Na(this,b,c);},"oj",function(b,c){return Ic(this,b,c);},"nW",function(b,c){return JK(this,b,c);},"oC",function(b,
c){return I0(this,b,c);},"n6",function(b,c){return Mq(this,b,c);},"oE",function(b,c){return IJ(this,b,c);}],LM,0,C,[BQ],4,3,0,["ng",function(b){return La(this,b);},"ml",function(b,c){return HC(this,b,c);},"ns",function(b){return HB(this,b);},"oI",function(){return DL(this);},"l4",function(b,c){return Kx(this,b,c);},"n5",function(b){return L5(this,b);},"nq",function(b,c,d){return Gf(this,b,c,d);},"ne",function(){return JJ(this);},"ob",function(){return JU(this);},"oR",function(b){return Fj(this,b);},"mZ",function(b,
c){return D6(this,b,c);},"m6",function(b){return F4(this,b);},"mI",function(b,c){return HM(this,b,c);},"nS",function(b){return Cs(this,b);},"oV",function(b){return F8(this,b);},"mx",function(b){return Ec(this,b);},"l2",function(){Kk(this);},"mt",function(){return G_(this);},"mH",function(){return K2(this);},"nj",function(){return Ie(this);},"nG",function(b){return Bb(this,b);}],Jx,0,CN,[],0,0,0,["b",function(b,c,d){return Zf(this,b,c,d);},"t",function(b){PG(this,b);}],Lu,"BufferOverflowException",3,U,[],0,3,
0,0,Hd,0,K,[],0,0,0,["u",function(){return Yo(this);}],Mw,0,DG,[B5,BQ],0,3,0,["hh",function(b){return W5(this,b);},"ou",function(){Fb(this);},"gl",function(b){return Xe(this,b);},"n_",function(b){return Ho(this,b);},"ok",function(b,c,d){return FD(this,b,c,d);},"oB",function(){return Gk(this);},"hD",function(b,c){return Pf(this,b,c);},"lq",function(b,c){return WE(this,b,c);},"hB",function(b,c,d){return R_(this,b,c,d);},"kl",function(b){Wr(this,b);},"hA",function(){SV(this);}],G2,0,S,[],0,0,0,["b",function(b,
c,d){return Qk(this,b,c,d);},"x",function(b){return VS(this,b);}],HY,0,C,[],0,3,0,0,Mn,0,K,[],0,0,0,["u",function(){return Z9(this);}],EK,0,C,[],0,3,0,0,DS,0,C,[],0,3,Bh,["dK",function(){return OZ(this);},"dd",function(){return W_(this);},"fU",function(){return ZV(this);},"hW",function(){return Xc(this);},"f2",function(){return Xv(this);},"g",function(){return Vo(this);},"gZ",function(){T4(this);}],FX,0,S,[],4,0,0,["b",function(b,c,d){return Sd(this,b,c,d);},"x",function(b){return SN(this,b);}],JG,0,B_,[],4,
0,0,["dk",function(b){return UI(this,b);},"he",function(b,c){return Yx(this,b,c);}],JF,0,B_,[],4,0,0,["dk",function(b){return Se(this,b);},"he",function(b,c){return S5(this,b,c);}],LF,0,CP,[],0,3,0,0,M$,0,K,[],0,0,0,["u",function(){return TK(this);}],CW,0,C,[],0,0,0,["R",function(){return Z4(this);},"d6",function(b){Sg(this,b);},"kA",function(b){RM(this,b);},"fh",function(){return TX(this);},"dj",function(){return RY(this);},"fi",function(){return RC(this);},"l",function(){return Tr(this);},"cx",function(){
return SX(this);},"bi",function(){return P8(this);},"kP",function(){return Vn(this);},"nh",function(){Lk(this);},"oQ",function(){Cc(this);},"nJ",function(){return Ht(this);},"m3",function(b){return Lm(this,b);},"e",function(){return Wj(this);},"H",function(){return X3(this);},"cq",function(){return YN(this);},"hK",function(){return Rh(this);},"iV",function(){return Tl(this);},"mz",function(b){return Fv(this,b);},"mJ",function(){return HV(this);},"ot",function(){return MI(this);},"l3",function(){return Y(this);
},"ny",function(){return HF(this);},"mN",function(b){return K6(this,b);},"nv",function(){return DK(this);},"bu",function(){return Re(this);}],Kf,0,K,[],0,0,0,["u",function(){return X4(this);}],Jw,0,C,[],0,3,0,0,Mx,0,Dm,[],0,0,0,["u",function(){return QM(this);}],Mk,0,C,[FI],0,3,0,["li",function(b){return RF(this,b);},"op",function(b,c){Js(this,b,c);},"nz",function(b,c){Jm(this,b,c);},"mE",function(b,c){GT(this,b,c);},"nO",function(b,c){Hf(this,b,c);},"mr",function(b,c,d){Me(this,b,c,d);},"mC",function(b,c,d)
{IR(this,b,c,d);},"mU",function(b,c){Lv(this,b,c);}],B3,0,Z,[],0,0,0,["I",function(b,c){return Nl(this,b,c);},"Z",function(b){return QZ(this,b);},"fc",function(){return QB(this);}],D7,"UnicodeCategory",2,I,[],0,0,0,["j",function(b){return QH(this,b);}],ME,"UnicodeCategoryScope",2,D7,[],0,0,0,["j",function(b){return Vc(this,b);}],Kn,"UnmappableCharacterException",4,Cl,[],0,3,0,["dR",function(){return T2(this);}],Jb,"CharClass",2,I,[],0,0,0,["bg",function(b){return Nf(this,b);},"lG",function(b){return AAv(this,
b);},"J",function(b,c){return WL(this,b,c);},"jJ",function(b){NS(this,b);},"gr",function(b){Xa(this,b);},"j",function(b){return SG(this,b);},"M",function(){return AAx(this);},"bc",function(){return U5(this);},"c8",function(){return Wn(this);},"e",function(){return Pq(this);},"ck",function(){return VG(this);}],KM,"BufferUnderflowException",3,U,[],0,3,0,0,JC,0,BU,[],0,0,0,["e1",function(b){Xh(this,b);}],JY,0,C,[],0,3,0,0,Md,0,Ci,[],0,0,0,0]);
function $rt_array(cls,data){this.rL=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["@",": ","    at ","Caused by: ","Malformed input of length ","String contains invalid digits: ","String contains digits out of radix ","The value is too big for int type: ","String is null or empty","Illegal radix: ","Unable to load finger key definitions file",":","Invalid section ","Invalid KeyboardType ","�","averageCharsPerByte must be positive. Actual value is ","maxCharsPerByte must be positive. Actual value is ",
"newAction must be non-null","BIG_ENDIAN","LITTLE_ENDIAN","null","Index out of bounds","New position "," is outside of range [0;","]","","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart",
"Space","w","W","s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics",
"Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics",
"BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo",
"HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks",
"CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","Class does not represent enum: ","Enum "," does not have the ","constant","STD","ANGLE","MATRIX","Unable to load bigram frequency string","#","{",",","}","0","Replacement preconditions do not hold","Action must be non-null",
"The last byte in dst "," is outside of array of size ","Length "," must be non-negative","Offset ",")","The last byte in src ","Unable to load char frequency string","resources/","loaded ","Loading...","%","charsetName is null","Should never been thrown","IGNORE","REPLACE","REPORT","Initializing...","en","?","&","=","freq","Using frequency resource: ","\n[ An error occurred. Please check inputs ]\n","\n[ An error occurred. Frequency data was missing. ]\n","\n[ An error occurred. Layout not correctly configured ]\n",
"No frequency data found","Using frequency information: ","\n\nReady.","Either src or dest is null","Capacity is negative: ","The last char in dst ","The last char in src "," is outside of string of size ","Start "," must be before end ","rgb(","background-color:","Key ","  Effort: "," Usage: ","width:","px","#80c4c4","#ca80ca","#80b780","#7a93c0","#8080ca","FINGERS","EFFORT","PENALTIES","TYPE","UTF-8",", ","Unable to read layout data","> Main Keys","Colemak-DH","layout_main/colemak_dh.keyb","Colemak-DHm","layout_main/colemak_dhm.keyb",
"Colemak","layout_main/colemak.keyb","Dvorak","layout_main/dvorak.keyb","Workman","layout_main/workman.keyb","MTGAP","layout_main/mtgap.keyb","qgmlwyfub","layout_main/qgmlwyfub.keyb","Asset","layout_main/asset.keyb","Norman","layout_main/norman.keyb","Qwpr","layout_main/qwpr.keyb","Minimak-8","layout_main/minimak8.keyb","Qwerty","layout_main/qwerty.keyb","> Full Keyboard","layout_full/colemak_dh.keyb","layout_full/colemak_dhm.keyb","layout_full/colemak.keyb","layout_full/dvorak.keyb","layout_full/workman.keyb",
"layout_full/mtgap.keyb","layout_full/qgmlwyfub.keyb","layout_full/asset.keyb","layout_full/norman.keyb","layout_full/qwpr.keyb","layout_full/minimak8.keyb","layout_full/qwerty.keyb","Traditional","The traditional typing method","config/effort_traditional_config.dat","Alternative","An alternative typing method","config/effort_alternative_config.dat","Ergonomic","An ergonomic method using the Angle Mod","config/effort_ergonomic_config.dat","Matrix","A Matrix or ortholinear colemakmods","config/effort_matrix_config.dat",
"Default English data","freq/en_books.freq","en_norvig","English Data from\n  Peter Norvig, norvig.com/mayzner.html","freq/en_norvig.freq","en_wikipedia","Data from the 100 most popular\n  Wikipedia articles","freq/en_wikipedia.freq","linux_src","Data from the Linux source code","freq/linux_src.freq","da","Danish data","freq/practical_cryptography/da_pc.freq","de","German data","freq/practical_cryptography/de_pc.freq","es","Spanish data","freq/practical_cryptography/es_pc.freq","fi","Finnish data","freq/practical_cryptography/fi_pc.freq",
"fr","French data","freq/practical_cryptography/fr_pc.freq","pl","Polish data","freq/practical_cryptography/pl_pc.freq","sv","Swedish data","freq/practical_cryptography/sv_pc.freq","Warning: Too many rows","Warning: letter "," is missing from layout. "," appears more than once on layout. ","Patter is null","\\Q","\\E","\\\\E\\Q","Is","In","<div style=\"display: table-row\">","<div style=\"display: table-cell\">","</div>","<div style=\"display: table-cell;padding-left:2ex\">","<b style=\"color:red\">","</b>",
"<b><u>Finger Frequency</u></b>","<table>","<tr>","<td>finger "," </td><td>","%</td><td>&nbsp;finger ","%</td>","</tr>","<tr class=\"row_total\">","<td class=\"center\">total L </td><td>","%</td><td class=\"center\">total R </td><td>","</table>","<b><u>Finger Bigram Frequency</u></b>","<td class=\"center\" colspan=\"2\" style=\"text-align:right\">total</td><td class=\"center\" colspan=\"2\">","<b><u>Top Same-Finger Bigrams</u></b>","<b><u>Top Neighbour-Finger Bigrams</u></b>","-","<b><u>Finger Effort</u></b>",
"<th> </th><th>base</th><th>s-bigrams</th><th>n-bigrams</th><th>total</th>","</td><td>","</td>","<td>total * </td><td>","</td><td> ","Unmappable characters of length "]);
Bi.prototype.toString=function(){return $rt_ustr(this);};
Bi.prototype.valueOf=Bi.prototype.toString;C.prototype.toString=function(){return $rt_ustr(R0(this));};
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
=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}main=$rt_mainStarter(PU);
(function(){var c;c=HI.prototype;c.handleEvent=c.e0;c=HK.prototype;c.handleEvent=c.e0;c=Hk.prototype;c.handleEvent=c.e0;c=Hl.prototype;c.handleEvent=c.e0;c=HH.prototype;c.dispatchEvent=c.n0;c.addEventListener=c.m0;c.removeEventListener=c.on;c.getLength=c.n7;c.get=c.l_;c.addEventListener=c.m2;c.removeEventListener=c.mh;c=Ks.prototype;c.stateChanged=c.oL;})();
})();
