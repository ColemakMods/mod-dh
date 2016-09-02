"use strict";
function $rt_cls(cls){return A(cls);}
function $rt_str(str) {if (str===null){return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return B(characters);}
function $rt_ustr(str) {var result = "";var sz = C(str);var array = $rt_createCharArray(sz);D(str, 0, sz, array, 0);for (var i = 0; i < sz; i = (i + 1) | 0) {result += String.fromCharCode(array.data[i]);}return result;}
function $rt_objcls() { return E; }
function $rt_nullCheck(val) {if (val === null) {$rt_throw(F());}return val;}
function $rt_intern(str) {return G(str);}
function $rt_getThread(){return H();}
function $rt_setThread(t){return I(t);}
var RZ=$rt_throw;var SZ=$rt_compare;var TZ=$rt_nullCheck;var UZ=$rt_cls;var VZ=$rt_createArray;var WZ=$rt_isInstance;var XZ=$rt_nativeThread;var YZ=$rt_suspending;var ZZ=$rt_resuming;var Aa=$rt_invalidPointer;
function E(){}
function RC(){E.call(this);}
RC.TC=null;function DB(){var a=this;E.call(a);a.iG=false;a.TH=false;a.yH=null;a.QH=null;}
function O(){DB.call(this);}
function J(){O.call(this);}
function FC(){J.call(this);}
function T(){E.call(this);}
function P(){E.call(this);}
function M(){E.call(this);}
function DC(){P.call(this);}
DC.HI=0.0;DC.ZH=null;function Q(){E.call(this);}
function LC(){E.call(this);}
function NC(){E.call(this);}
function AF(){E.call(this);}
function EC(){O.call(this);}
function AB(){EC.call(this);}
function RG(){AB.call(this);this.NF=0;}
function ID(){E.call(this);}
function KB(){E.call(this);}
function FD(){E.call(this);}
function N(){E.call(this);}
function UF(){N.call(this);}
function MB(){E.call(this);}
MB.sD=null;MB.BI=null;MB.XH=null;function VE(){var a=this;E.call(a);a.kC=null;a.cC=0;a.hG=0;a.xF=null;}
function OC(){P.call(this);}
OC.gE=null;function CF(){var a=this;E.call(a);a.kF=null;a.EF=null;a.lI=null;a.bF=0;a.XD=0;}
function TD(){O.call(this);}
function TE(){var a=this;E.call(a);a.ZB=0;a.uF=Long_ZERO;a.xG=0.0;}
function CB(){E.call(this);}
CB.iB=null;CB.SC=null;CB.VF=null;CB.ZC=null;function XD(){E.call(this);}
function R(){E.call(this);}
function FE(){E.call(this);}
function LD(){P.call(this);}
LD.BD=null;function YC(){E.call(this);}
function X(){var a=this;E.call(a);a.CH=null;a.jB=Long_ZERO;a.fC=null;a.XF=Long_ZERO;a.jF=null;}
X.yC=0;X.lH=null;X.xH=null;X.aC=Long_ZERO;function QC(){E.call(this);}
function PF(){J.call(this);}
function VC(){E.call(this);}
VC.zD=null;function DD(){E.call(this);}
function DG(){E.call(this);this.gI=0;}
function NB(){E.call(this);}
function U(){DB.call(this);}
function FB(){U.call(this);}
function Z(){var a=this;E.call(a);a.LC=0;a.cE=0;a.PD=0;a.IF=0;}
function LB(){E.call(this);}
function OD(){E.call(this);}
function UB(){Z.call(this);}
function SB(){UB.call(this);}
function MF(){var a=this;SB.call(a);a.jI=null;a.OC=0;a.mH=false;}
function XC(){E.call(this);}
function WF(){FC.call(this);}
function WB(){N.call(this);this.CI=null;}
function GB(){E.call(this);this.hD=null;}
function XB(){var a=this;E.call(a);a.sB=0.0;a.MB=null;a.P=null;a.zG=0.0;a.AF=0;a.PI=null;a.NH=null;}
function ZB(){E.call(this);this.fF=null;}
ZB.eE=null;ZB.DI=null;function WE(){E.call(this);}
function TG(){var a=this;E.call(a);a.W=null;a.Y=null;a.dB=null;}
function CD(){E.call(this);}
function HG(){E.call(this);}
function K(){var a=this;E.call(a);a.RD=0;a.lF=null;}
K.YF=null;K.oD=null;K.QG=null;K.LD=null;K.UB=null;K.KC=null;K.FF=null;function WD(){K.call(this);}
function S(){J.call(this);}
function QF(){S.call(this);this.FI=null;}
function NE(){J.call(this);}
function SC(){E.call(this);}
function EG(){var a=this;N.call(a);a.GB=null;a.EG=0;}
function QB(){P.call(this);}
QB.qD=0.0;QB.mD=null;function PD(){var a=this;E.call(a);a.UG=0.0;a.MC=null;a.fD=null;a.CE=null;a.BF=null;a.MI=null;a.aH=null;}
function BD(){E.call(this);}
function AD(){E.call(this);}
function ND(){E.call(this);}
function GD(){E.call(this);}
function IF(){U.call(this);}
function UC(){E.call(this);this.pD=null;}
UC.WG=null;function TC(){E.call(this);}
function YB(){E.call(this);}
function RB(){E.call(this);}
function PC(){E.call(this);}
function AC(){RB.call(this);this.xB=0;}
function OB(){E.call(this);}
function DF(){var a=this;AC.call(a);a.VE=0;a.PG=null;}
function EF(){U.call(this);}
function HD(){E.call(this);}
function ED(){E.call(this);}
function RE(){E.call(this);}
function ZC(){E.call(this);}
ZC.hE=null;function NF(){K.call(this);}
function JC(){var a=this;E.call(a);a.L=null;a.nB=0;}
JC.sF=null;JC.zI=null;function CH(){J.call(this);}
function PB(){var a=this;E.call(a);a.OD=null;a.tH=null;a.yE=0.0;a.T=0.0;a.RE=null;a.cH=null;a.iE=0;}
function KC(){PB.call(this);}
function ZG(){KC.call(this);}
function VB(){J.call(this);}
function MC(){E.call(this);}
function Y(){FB.call(this);}
function QE(){Y.call(this);}
function V(){E.call(this);}
function CG(){E.call(this);}
function HF(){S.call(this);}
function EB(){var a=this;E.call(a);a.EE=null;a.lB=0;}
function BB(){EB.call(this);}
BB.dH=null;BB.OE=null;BB.wB=null;BB.SG=null;function JB(){var a=this;E.call(a);a.iD=null;a.AB=null;}
JB.gB=null;function OG(){JB.call(this);}
function UG(){var a=this;GB.call(a);a.UF=null;a.uI=0;}
function MD(){E.call(this);}
function UE(){var a=this;E.call(a);a.uE=0;a.GE=0;a.OF=null;a.mE=0;a.BC=0;}
function GE(){var a=this;GB.call(a);a.tG=null;a.SH=0;a.tI=0;a.oG=null;a.tC=false;a.U=0;}
function JG(){VB.call(this);}
function AE(){var a=this;E.call(a);a.BB=null;a.wH=null;a.wF=false;a.vC=null;}
function HE(){O.call(this);}
function LE(){E.call(this);}
function VD(){J.call(this);}
function IC(){var a=this;Z.call(a);a.UE=null;a.wG=0;a.JI=null;}
function XG(){E.call(this);}
function BC(){XB.call(this);}
function SE(){BC.call(this);}
function XE(){Y.call(this);}
function BH(){E.call(this);}
function KG(){var a=this;E.call(a);a.NB=null;a.RG=0;a.AG=0;a.WB=null;}
function W(){EB.call(this);}
W.dE=null;W.ZF=null;W.ZE=null;W.bB=null;W.oC=null;function KF(){E.call(this);}
function L(){E.call(this);}
L.mF=null;L.QF=null;L.IC=null;L.sE=null;L.zH=null;L.zB=false;L.HH=null;L.yD=null;L.HE=null;L.FB=null;L.Z=null;function KD(){E.call(this);this.bE=null;}
KD.xE=null;function LG(){E.call(this);}
function PE(){E.call(this);}
function VF(){E.call(this);}
function GC(){var a=this;E.call(a);a.dD=null;a.hI=null;}
function BE(){var a=this;GC.call(a);a.UH=null;a.UC=0;}
function CC(){E.call(this);}
function JF(){CC.call(this);}
function FF(){var a=this;E.call(a);a.gH=0;a.OI=0;a.fE=0.0;a.eI=0;a.N=null;}
function ZE(){var a=this;IC.call(a);a.CB=false;a.VC=false;}
function IB(){E.call(this);}
function YE(){J.call(this);}
function IG(){var a=this;E.call(a);a.gC=null;a.HB=Long_ZERO;a.oE=0.0;}
function HC(){E.call(this);}
function YF(){var a=this;HC.call(a);a.qH=0;a.dI=0.0;a.dG=null;a.ED=0;a.lG=0;}
function TF(){E.call(this);}
function VG(){E.call(this);}
function FG(){E.call(this);}
function TB(){var a=this;E.call(a);a.CD=0;a.kG=0;}
TB.GH=null;TB.DE=null;function XF(){E.call(this);}
function HB(){E.call(this);this.bD=null;}
HB.eF=null;HB.wI=null;HB.wD=null;function CE(){J.call(this);}
function YG(){S.call(this);this.zE=null;}
function WG(){E.call(this);}
function GF(){FB.call(this);}
function JD(){E.call(this);}
function OE(){var a=this;WB.call(a);a.RH=null;a.WF=false;a.BG=false;a.KI=null;a.iF=null;}
function PG(){var a=this;E.call(a);a.ZG=null;a.eH=0;}
function EE(){E.call(this);}
function YD(){AB.call(this);this.nE=0;}
function BG(){E.call(this);}
function ZF(){E.call(this);}
function JE(){J.call(this);}
function AG(){E.call(this);}
function SG(){N.call(this);}
function SD(){var a=this;E.call(a);a.mI=null;a.qE=null;}
function ME(){var a=this;E.call(a);a.rC=null;a.IB=false;a.zC=null;a.tB=null;}
function WC(){E.call(this);}
WC.YE=null;function Ba(){var $r=new E();QJ($r);return $r;}
function RQ($t){return A($t.constructor);}
function NW($t){var a,b,c;if(WZ($t,OB)==0&&$t.constructor.$meta.item===null){RZ(Ca());}a=DY($t);b=a;c=EZ();b.$id=c;return a;}
function QJ($t){var a,b;a=$t;b=EZ();a.$id=b;return;}
function JZ(a){return a;}
function RC_$clinit(){RC_$clinit=function(){};
SH=function(a){var b;b=0;while(b<RC.TC.data.length){if(BR(MP(RC.TC.data[b]),a)!=0){return RC.TC.data[b];}b=b+1|0;}return null;};
OU=function(){var a,b;a=VZ(AE,3);b=a.data;b[0]=Da($rt_s(0),$rt_s(1));b[1]=Da($rt_s(2),$rt_s(3));b[2]=Da($rt_s(4),$rt_s(5));RC.TC=a;return;};
OU();}
function Ea(a,b){var $r=new DB();FW($r,a,b);return $r;}
function Fa(a){var $r=new DB();DT($r,a);return $r;}
function Ga(){var $r=new DB();ON($r);return $r;}
function Ha(a){var $r=new DB();PN($r,a);return $r;}
function NX($t){return $t.QH;}
function FW($t,a,b){$t.iG=1;$t.TH=1;SK($t);$t.QH=a;$t.yH=b;return;}
function BQ($t){MB_$clinit();KV($t,MB.sD);return;}
function DT($t,a){$t.iG=1;$t.TH=1;SK($t);$t.QH=a;return;}
function KV($t,a){JU(a,HU(QS(CK(CK(CK(Ia(),TV(RQ($t))),$rt_s(6)),NX($t)))));return;}
function SK($t){return $t;}
function ON($t){$t.iG=1;$t.TH=1;SK($t);return;}
function PN($t,a){$t.iG=1;$t.TH=1;SK($t);$t.yH=a;return;}
function Ja(a){var $r=new O();FJ($r,a);return $r;}
function Ka(){var $r=new O();PT($r);return $r;}
function FJ($t,a){DT($t,a);return;}
function PT($t){ON($t);return;}
function La(a){var $r=new J();TQ($r,a);return $r;}
function Ma(){var $r=new J();ML($r);return $r;}
function TQ($t,a){FJ($t,a);return;}
function ML($t){PT($t);return;}
function Na(a){var $r=new FC();QR($r,a);return $r;}
function Oa(){var $r=new FC();XT($r);return $r;}
function QR($t,a){TQ($t,a);return;}
function XT($t){ML($t);return;}
function DC_$clinit(){DC_$clinit=function(){};
AS=function(){DC.HI=NaN;DC.ZH=NY();return;};
AS();}
function OY(a,b){var c,d,e,f;c=a.data;d=$rt_createCharArray(b);e=KY(b,c.length);f=0;while(f<e){d.data[f]=c[f];f=f+1|0;}return d;}
function QY(a,b){var c,d;a=a.data;c=$rt_createByteArray(b);d=KY(b,a.length);b=0;while(b<d){c.data[b]=a[b];b=b+1|0;}return c;}
function YY(a,b){var c,d,e;c=a.data;a=IZ(RI(RQ(a)),b);d=KY(b,c.length);e=0;while(e<d){a.data[e]=c[e];e=e+1|0;}return a;}
function Pa(){var $r=new EC();HO($r);return $r;}
function HO($t){PT($t);return;}
function Qa(){var $r=new AB();HX($r);return $r;}
function HX($t){HO($t);return;}
function Ra(a){var $r=new RG();GP($r,a);return $r;}
function GP($t,a){HX($t);$t.NF=a;return;}
function Sa(){var $r=new N();EH($r);return $r;}
function ZK($t,a,b,c){var d,e,f;d=0;while(d<c){e=a.data;f=b+1|0;$t.l(e[b]);d=d+1|0;b=f;}return;}
function EH($t){QJ($t);return;}
function Ta(){var $r=new UF();NK($r);return $r;}
function ZI($t,a){MZ().$rt_putStdout(a);return;}
function NK($t){EH($t);return;}
function MB_$clinit(){MB_$clinit=function(){};
EI=function(){return Long_fromNumber(new Date().getTime());};
VU=function(){MB.XH=Ua(Ta(),0);MB.sD=Ua(Va(),0);MB.BI=Wa();return;};
VU();}
function Xa(a,b){var $r=new VE();UL($r,a,b);return $r;}
function SI($t,a){if(OM($t.xF)<a){a=0;}else{a=1;}return a;}
function NI($t){return FO($t.kC);}
function RX($t,a){$t.hG=a;return;}
function UL($t,a,b){QJ($t);$t.kC=a;$t.xF=b;return;}
function IM($t,a){$t.cC=a;return;}
function OC_$clinit(){OC_$clinit=function(){};
RP=function(a,b){var c,d,e,f,g;if(b>=2&&b<=36){if(a!==null&&BU(a)==0){$ba:{c=0;d=0;switch(EP(a,0)){case 43:d=1;break $ba;case 45:c=1;d=1;break $ba;default:}}e=0;if(d==C(a)){RZ(Ya());}while(true){if(d>=C(a)){if(c!=0){e= -e|0;}return e;}f=d+1|0;g=HH(EP(a,d));if(g<0){break;}if(g>=b){RZ(Za(HU(QS(IK(CK(CM(CK(Ia(),$rt_s(7)),b),$rt_s(6)),a)))));}e=(b*e|0)+g|0;if(e<0){if(f==C(a)&&e== -2147483648&&c!=0){return  -2147483648;}RZ(Za(HU(QS(IK(CK(Ia(),$rt_s(8)),a)))));}d=f;}RZ(Za(HU(QS(IK(CK(Ia(),$rt_s(9)),a)))));}RZ(Za(HU($rt_s(10))));}RZ(Za(HU(QS(CM(CK(Ia(),
$rt_s(11)),b)))));};
MX=function(a){return RP(a,10);};
IJ=function(){OC.gE=JY();return;};
IJ();}
function Ab(){var $r=new CF();JS($r);return $r;}
function UH($t,a){var b,$je;$ba:{try{PH($t,Bb(a));a=TT($t);}catch($e){$je=$e.$javaException;if($je&&$je instanceof O){b=$je;break $ba;}else {throw $e;}}return a;}MB_$clinit();JU(MB.sD,$rt_s(12));BQ(b);return 0;}
function FV($t){return $t.bF;}
function ZW($t,a){return $t.EF.data[a];}
function YK($t){return $t.kF;}
function AQ($t,a){$t.kF=a;return;}
function PH($t,a){var b,c,d,e,f,$je;b=Cb(a);$ba:{try{c=0;$bb:while(true){try{while(true){try{a=YV(b);if(a===null){break $bb;}$bc:{try{$bd:{try{d=YI(a,35);if(d>=0){break $bd;}}catch($e){$je=$e.$javaException;if($je){e=$je;break $ba;}else {throw $e;}}break $bc;}a=MK(a,0,d);break $bc;}catch($e){$je=$e.$javaException;if($je){e=$je;break $ba;}else {throw $e;}}}a=MV(a);if(C(a)==0){continue;}f=QZ(a,32);d=0;while(d<MQ(f)){a=Db(EW(f,d),c,d);JW($t.lI,a);d=d+1|0;}if(MQ(f)>$t.XD){$t.XD=MQ(f);}c=c+1|0;if(c>$t.bF){$t.bF=
c;}continue;}catch($e){$je=$e.$javaException;if($je){e=$je;break $ba;}else {throw $e;}}}}catch($e){$je=$e.$javaException;if($je){e=$je;break $ba;}else {throw $e;}}}}catch($e){$je=$e.$javaException;if($je){e=$je;break $ba;}else {throw $e;}}LW(b);return;}LW(b);RZ(e);}
function BS($t,a){var b,c;b=YJ($t.lI);while(TL(b)!=0){c=BN(b);if(NN(c,a)!=0){return c;}}return null;}
function GS($t,a,b){$t.EF.data[a]=b;return;}
function ZQ($t,a,b){var c,d;c=YJ($t.lI);while(TL(c)!=0){d=BN(c);if(TH(d)==a&&HI(d)==b){return d;}}return null;}
function LQ($t){return $t.XD;}
function JS($t){QJ($t);$t.lI=Eb();$t.EF=$rt_createDoubleArray(3);BB_$clinit();$t.kF=BB.OE;return;}
function TT($t){var a,b;a=0;$ba:while(true){if(a>=MQ($t.lI)){return 1;}b=0;while(b<MQ($t.lI)){if(a!=b&&NN(EW($t.lI,b),PV(EW($t.lI,a)))!=0){break $ba;}b=b+1|0;}a=a+1|0;}return 0;}
function CL($t){var a,b;a=Ia();b=YJ($t.lI);while(TL(b)!=0){GJ(a,LI(BN(b)));}return QS(a);}
function Ca(){var $r=new TD();RS($r);return $r;}
function RS($t){PT($t);return;}
function Fb(a,b){var $r=new TE();SL($r,a,b);return $r;}
function EO($t){return $t.xG;}
function TY(a,b){var c,d,$je;$ba:{try{c=PZ(a,Bb(b));}catch($e){$je=$e.$javaException;if($je&&$je instanceof EC){d=$je;break $ba;}else {throw $e;}}return c;}MB_$clinit();JU(MB.sD,$rt_s(13));BQ(d);return null;}
function SL($t,a,b){QJ($t);$t.ZB=a;$t.uF=b;return;}
function IY(a){var b,c,d,e;b=Long_ZERO;c=0;while(true){d=a.data;e=d.length;if(c>=e){break;}b=Long_add(b,EM(d[c]));c=c+1|0;}c=0;while(c<e){d[c].xG=Long_toNumber(EM(d[c]))/Long_toNumber(b);c=c+1|0;}return;}
function AU($t){return $t.ZB;}
function EM($t){return $t.uF;}
function PZ(a,b){var c,d,e,f,g,$je;c=Eb();d=Cb(b);$ba:{while(true){try{e=YV(d);if(e===null){break $ba;}f=QZ(e,32);if(KU(e,$rt_s(14))==0&&MQ(f)>=2){g=KL(EW(f,0));if(C(g)==1&&GQ(a,g)>=0){JW(c,Fb(EP(g,0),JQ(EW(f,1))));}}continue;}catch($e){$je=$e.$javaException;if($je){b=$je;}else {throw $e;}}}LW(d);RZ(b);}LW(d);a=EJ(c,VZ(TE,MQ(c)));IY(a);return a;}
function HY(a,b){var c,d;c=0;while(true){d=b.data;if(c>=d.length){break;}if(SJ(a)==AU(d[c])){return d[c];}c=c+1|0;}return null;}
function CB_$clinit(){CB_$clinit=function(){};
HH=function(a){return CV(a);};
JO=function(a,b){return ((a&1023)<<10|b&1023)+65536|0;};
KX=function(a){return YX(a).toUpperCase().charCodeAt(0);};
CV=function(a){var b,c,d,e,f;b=PJ().data;c=0;d=(b.length/2|0)-1|0;while(d>=c){e=(c+d|0)/2|0;f=SZ(a,b[e*2|0]);if(f>0){c=e+1|0;}else{if(f>=0){return b[(e*2|0)+1|0];}d=e-1|0;}}return  -1;};
SJ=function(a){return KX(a)&65535;};
WR=function(a){if(YN(a)==0&&PM(a)==0){a=0;}else{a=1;}return a;};
PM=function(a){if((a&64512)!=56320){a=0;}else{a=1;}return a;};
PI=function(){if(CB.VF===null){CB.VF=QQ();}return CB.VF;};
YN=function(a){if((a&64512)!=55296){a=0;}else{a=1;}return a;};
QQ=function(){return {"value":"&(#*% .%%2%)6%-:%1>%5B%9F%=J%AN%Eo%Is%Mw%Q{%U!'Y&'^*'b.'f2'j6'n:'r>'vB'zF'!#J'&#N'*#R'.#V'2#Z'6#_':#c'>#g'B#k'F#o'J#s'N#w'R#6)I:)M>)QB)UF)YJ)^N)bR)fV)jZ)n_)rc)vg)zk)!#o)&#s)*#w).#{)2#!+6#&+:#*+>#.+B#2+F#6+J#:+N#>+R#{R# !T#%&T#)*T#-.T#12T#56T#9:T#=>T#ABT#E6a# :a#%>a#)Ba#-Fa#1Ja#5Na#9Ra#=Va#AZa#E:s# >s#%Bs#)Fs#-Js#1Ns#5Rs#9Vs#=Zs#A_s#EZ:% _:%%c:%)g:%-k:%1o:%5s:%9w:%={:%A!<%E2F% 6F%%:F%)>F%-BF%1FF%5JF%9NF%=RF%AVF%EgP% kP%%oP%)sP%-wP%1{P%5!R%9&R%=*R%A.R%E>]% B]%%F]%)J]%-N]%1R]%5V]%9Z]%=_]%Ac]%Esg% wg%%{g%)!i%-&i%1*i%5.i%92i%=6i%A:i%EJs% Ns%%Rs%)Vs%-Zs%1_s%5cs%9gs%=ks%Aos%E!!' &!'%*!').!'-2!'16!'5:!'9>!'=B!'AF!'EV,' Z,'%_,')c,'-g,'1k,'5o,'9s,'=w,'A{,'E.8' 28'%68'):8'->8'1B8'5F8'9J8'=N8'AR8'E>L' BL'%FL')JL'-NL'1RL'5VL'9ZL'=_L'AcL'EsV' wV'%{V')!X'-&X'1*X'5.X'92X'=6X'A:X'EB_' F_'%J_')N_'-R_'1V_'5Z_'9__'=c_'Ag_'Esw' ww'%{w')!y'-&y'1*y'5.y'92y'=6y'A:y'EB!) F!)%J!))N!)-R!)1V!)5Z!)9_!)=c!)Ag!)Egi+ ki+%oi+)si+-wi+1{i+5!k+9&k+=*k+A.k+Eom+ sm+%wm+){m+-!o+1&o+5*o+9.o+=2o+A6o+E>,- B,-%F,-)J,--N,-1R,-5V,-9Z,-=_,-Ac,-E>8- B8-%F8-)J8--N8-1R8-5V8-9Z8-=_8-Ac8-E{F- !H-%&H-)*H--.H-12H-56H-9:H-=>H-ABH-E_H- cH-%gH-)kH--oH-1sH-5wH-9{H-=!J-A&J-E!Z- &Z-%*Z-).Z--2Z-16Z-5:Z-9>Z-=BZ-AFZ-E2c- 6c-%:c-)>c--Bc-1Fc-5Jc-9Nc-=Rc-AVc-EJo- No-%Ro-)Vo--Zo-1_o-5co-9go-=ko-Aoo-E.q- 2q-%6q-):q-->q-1Bq-5Fq-9Jq-=Nq-ARq-E&4r *4r%.4r)24r-64r1:4r5>4r9B4r=F4rAJ4rE{or !qr%&qr)*qr-.qr12qr56qr9:qr=>qrABqrE&ur *ur%.ur)2ur-6ur1:ur5>ur9Bur=FurAJurE**t .*t%2*t)6*t-:*t1>*t5B*t9F*t=J*tAN*tE_4t c4t%g4t)k4t-o4t1s4t5w4t9{4t=!6tA&6tEgXt kXt%oXt)sXt-wXt1{Xt5!Zt9&Zt=*ZtA.ZtE{c@# !e@#%&e@#)*e@#-.e@#12e@#56e@#9:e@#=>e@#ABe@#Ece@#Ige@#Mke@#Qoe@#Use@#Ywe@#^{e@#b!g@#f&g@#j*g@#n.g@#r2g@#v6g@#z:g@#!#>g@#&#Bg@#*#Fg@#.#Jg@#2#Ng@#6#Rg@#:#Vg@#>#Zg@#B#_g@#F#cg@#J#gg@#N#kg@#R#*i@#I.i@#M2i@#Q6i@#U:i@#Y>i@#^Bi@#bFi@#fJi@#jNi@#nRi@#rVi@#vZi@#z_i@#!#ci@#&#gi@#*#ki@#.#oi@#2#si@#6#wi@#:#{i@#>#!k@#B#&k@#F#*k@#J#.k@#N#2k@#R#s&D# w&D#%{&D#)!(D#-&(D#1*(D#5.(D#92(D#=6(D#A:(D#EwuH# {uH#%!wH#)&wH#-*wH#1.wH#52wH#96wH#=:wH#A>wH#Ew$J# {$J#%!&J#)&&J#-*&J#1.&J#52&J#96&J#=:&J#A>&J#E{*J# !,J#%&,J#)*,J#-.,J#12,J#56,J#9:,J#=>,J#AB,J#E_8J# c8J#%g8J#)k8J#-o8J#1s8J#5w8J#9{8J#=!:J#A&:J#EZJL# _JL#%cJL#)gJL#-kJL#1oJL#5sJL#9wJL#={JL#A!LL#EF0N% J0N%%N0N%)R0N%-V0N%1Z0N%5_0N%9c0N%=g0N%Ak0N%Eo0N% s0N%%w0N%){0N%-!2N%1&2N%5*2N%9.2N%=22N%A62N%E:2N% >2N%%B2N%)F2N%-J2N%1N2N%5R2N%9V2N%=Z2N%A_2N%Ec2N% g2N%%k2N%)o2N%-s2N%1w2N%5{2N%9!4N%=&4N%A*4N%E.4N% 24N%%64N%):4N%->4N%1B4N%5F4N%9J4N%=N4N%AR4N%E"}
;};
PJ=function(){if(CB.SC===null){CB.SC=NZ((PI().value!==null?$rt_str(PI().value):null));}return CB.SC;};
VI=function(a){return YX(a).toLowerCase().charCodeAt(0);};
JV=function(a,b){if(b>=2&&b<=36&&a<b){if(a<10){a=(48+a|0)&65535;}else{a=((97+a|0)-10|0)&65535;}return a;}return 0;};
UN=function(a){return (56320|a&1023)&65535;};
IX=function(a){return (55296|(a-65536|0)>>10&1023)&65535;};
XM=function(){CB.iB=UY();CB.ZC=VZ(CB,128);return;};
GM=function(a){return VI(a)&65535;};
XM();}
function Gb(){var $r=new XD();WM($r);return $r;}
function ZR($t,a,b){var c,d,e,f,g,h,i,j,k,m,n,$je;W_$clinit();c=W.ZF;d=Cb(b);$ba:{try{e=0;$bb:while(true){try{while(true){try{b=YV(d);if(b===null){break $bb;}$bc:{try{$bd:{try{f=YI(b,35);if(f>=0){break $bd;}}catch($e){$je=$e.$javaException;if($je){g=$je;break $ba;}else {throw $e;}}break $bc;}b=MK(b,0,f);break $bc;}catch($e){$je=$e.$javaException;if($je){g=$je;break $ba;}else {throw $e;}}}h=MV(b);if(C(h)==0){continue;}if(JH(h,$rt_s(15))!=0){i=QZ(h,58);try{j=LT(KL(EW(i,0)));k=0;c=j;e=k;}catch($e){$je=$e.$javaException;if
($je){g=$je;break $ba;}else {throw $e;}}e=k;c=j;continue;MB_$clinit();JU(MB.sD,QS(CK(CK(Ia(),$rt_s(16)),EW(i,0))));continue;}$be:{try{W_$clinit();if(c===W.ZF){m=QZ(h,32);k=0;while(k<LQ(a)){n=ZQ(a,e,k);if(n!==null){CT(n,MX(EW(m,k)));}k=k+1|0;}e=e+1|0;break $be;}W_$clinit();if(c===W.dE){f=QZ(h,32);k=0;while(k<LQ(a)){i=ZQ(a,e,k);if(i!==null){EX(i,QT(EW(f,k)));}k=k+1|0;}e=e+1|0;break $be;}W_$clinit();if(c===W.ZE){k=QZ(h,32);if(e<3){GS(a,e,QT(EW(k,0)));}e=e+1|0;break $be;}$bf:{try{W_$clinit();if(c===W.bB){break $bf;}}
catch($e){$je=$e.$javaException;if($je){g=$je;break $ba;}else {throw $e;}}break $be;}j=QZ(h,32);try{AQ(a,GU(KL(EW(j,0))));}catch($e){$je=$e.$javaException;if($je){g=$je;break $ba;}else {throw $e;}}e=e+1|0;break $be;}catch($e){$je=$e.$javaException;if($je){g=$je;break $ba;}else {throw $e;}}}continue;}catch($e){$je=$e.$javaException;if($je){g=$je;break $ba;}else {throw $e;}}}}catch($e){$je=$e.$javaException;if($je){g=$je;break $ba;}else {throw $e;}}}a=1;}catch($e){$je=$e.$javaException;if($je){g=$je;break $ba;}
else {throw $e;}}LW(d);return a;}LW(d);RZ(g);}
function PP($t,a,b){var c,$je;$ba:{try{b=ZR($t,a,Bb(b));}catch($e){$je=$e.$javaException;if($je&&$je instanceof EC){c=$je;break $ba;}else {throw $e;}}return b;}MB_$clinit();JU(MB.sD,$rt_s(17));BQ(c);return 0;}
function WM($t){QJ($t);return;}
function KZ(){return window.document;}
function LD_$clinit(){LD_$clinit=function(){};
JQ=function(a){return FT(a,10);};
FT=function(a,b){var c,d,e,f,g,h;if(b>=2&&b<=36){if(a!==null&&BU(a)==0){$ba:{c=0;d=0;switch(EP(a,0)){case 43:d=1;break $ba;case 45:c=1;d=1;break $ba;default:}}e=Long_ZERO;f=Long_fromInt(b);while(true){if(d>=C(a)){if(c!=0){e=Long_neg(e);}return e;}g=d+1|0;h=HH(EP(a,d));if(h<0){break;}if(h>=b){RZ(Za(HU(QS(IK(CK(CM(CK(Ia(),$rt_s(7)),b),$rt_s(6)),a)))));}e=Long_add(Long_mul(f,e),Long_fromInt(h));if(Long_compare(e,Long_ZERO)<0){if(g==C(a)&&Long_compare(e,new Long(0, 2147483648))==0&&c!=0){return new Long(0, 2147483648);}RZ(Za(HU(QS(IK(CK(Ia(),
$rt_s(8)),a)))));}d=g;}RZ(Za(HU(QS(IK(CK(Ia(),$rt_s(9)),a)))));}RZ(Za(HU($rt_s(10))));}RZ(Za(HU(QS(CM(CK(Ia(),$rt_s(11)),b)))));};
VO=function(){LD.BD=GY();return;};
VO();}
function X_$clinit(){X_$clinit=function(){};
H=function(){return X.xH;};
ZM=function(){return X.lH;};
NG=function($t,a,b){QJ($t);$t.jF=Ba();$t.fC=b;$t.CH=a;a=X.aC;X.aC=Long_add(a,Long_fromInt(1));$t.XF=a;return;};
I=function(a){if(X.xH!==a){X.xH=a;}X.xH.jB=EI();return;};
SF=function($t,a){NG($t,null,a);return;};
HQ=function(){X.lH=Hb(HU($rt_s(18)));X.xH=X.lH;X.aC=Long_fromInt(1);X.yC=1;return;};
HQ();}
function Ib(a,b){var $r=new X();NG($r,a,b);return $r;}
function Hb(a){var $r=new X();SF($r,a);return $r;}
function Jb(){var $r=new PF();TM($r);return $r;}
function TM($t){ML($t);return;}
function VC_$clinit(){VC_$clinit=function(){};
MS=function(){VC.zD=BZ();return;};
MS();}
function Kb(a){var $r=new DG();LV($r,a);return $r;}
function WL($t,a,b){var c,d,e,f;JU(b,$rt_s(19));JU(b,$rt_s(20));c=0.0;d=0;while(d<5){e=a.data;f=9-d|0;if(!(e[d]<=0.0&&e[f]<=0.0)){JU(b,$rt_s(21));JU(b,QS(CK(CK(CK(CM(CK(CK(CK(CM(CK(Ia(),$rt_s(22)),d),$rt_s(23)),SY(e[d],5)),$rt_s(24)),f),$rt_s(23)),SY(e[f],5)),$rt_s(25))));JU(b,$rt_s(26));c=c+e[d]+e[f];}d=d+1|0;}JU(b,$rt_s(27));JU(b,QS(CK(CK(CK(Ia(),$rt_s(28)),SY(c,5)),$rt_s(25))));JU(b,$rt_s(26));JU(b,$rt_s(29));return;}
function IN($t,a,b){a=YJ(a);while(TL(a)!=0){JU(b,QS(CK(CK(CK(Ia(),$rt_s(30)),BN(a)),$rt_s(31))));}return;}
function SY(a,b){return $rt_str(a.toFixed(b));}
function LV($t,a){QJ($t);$t.gI=a;return;}
function JJ($t,a,b,c,d,e,f,g){IN($t,a,g);TU($t,b,g);WL($t,d,g);BT($t,c,$t.gI,g);IH($t,e,f,g);return;}
function IH($t,a,b,c){var d,e,f,g,h,i,j,k,m;JU(c,$rt_s(32));JU(c,$rt_s(20));JU(c,$rt_s(21));JU(c,$rt_s(33));JU(c,$rt_s(26));d=$rt_createDoubleArray(3);e=0;while(e<10){f=a.data;g=b.data;h=f[e]+g[e];if(f[e]>0.0){i=d.data;JU(c,$rt_s(21));JU(c,QS(CK(CK(CK(CK(CK(CK(CK(CM(CK(Ia(),$rt_s(22)),e),$rt_s(23)),SY(f[e],5)),$rt_s(23)),SY(g[e],5)),$rt_s(23)),SY(h,5)),$rt_s(25))));JU(c,$rt_s(26));j=0;i[j]=i[j]+f[e];f=1;i[f]=i[f]+g[e];k=2;i[k]=i[k]+h;}e=e+1|0;}m=d.data;JU(c,$rt_s(27));JU(c,QS(CK(CK(CK(CK(CK(CK(CK(Ia(),$rt_s(34)),
SY(m[0],5)),$rt_s(23)),SY(m[1],5)),$rt_s(23)),SY(m[2],5)),$rt_s(25))));JU(c,$rt_s(26));JU(c,$rt_s(29));return;}
function BT($t,a,b,c){var d,e,f;JU(c,$rt_s(35));JU(c,$rt_s(20));d=0;e=YJ(a);$ba:{while(true){if(TL(e)==0){break $ba;}f=BN(e);JU(c,$rt_s(21));JU(c,QS(CK(CK(CK(CK(CK(CM(CK(Ia(),$rt_s(22)),OT(AI(f))),$rt_s(23)),HK(TK(f))),$rt_s(23)),SY(LJ(TK(f)),6)),$rt_s(25))));JU(c,$rt_s(26));d=d+1|0;if(d>=b){break;}}}JU(c,$rt_s(29));return;}
function TU($t,a,b){var c,d,e,f,g;JU(b,$rt_s(36));JU(b,$rt_s(20));c=0.0;d=0.0;e=0;while(e<5){f=a.data;g=9-e|0;if(!(f[e]<=0.0&&f[g]<=0.0)){JU(b,$rt_s(21));JU(b,QS(CK(CK(CK(CM(CK(CK(CK(CM(CK(Ia(),$rt_s(22)),e),$rt_s(23)),SY(f[e],5)),$rt_s(24)),g),$rt_s(23)),SY(f[g],5)),$rt_s(25))));JU(b,$rt_s(26));}c=c+f[e];d=d+f[g];e=e+1|0;}JU(b,$rt_s(27));JU(b,QS(CK(CK(CK(CK(CK(Ia(),$rt_s(37)),SY(c,5)),$rt_s(38)),SY(d,5)),$rt_s(25))));JU(b,$rt_s(26));JU(b,$rt_s(29));return;}
function MO($t,a){var b,c;b=Lb();c=Mb(b);JJ($t,WX(a),DK(a),DO(a),UM(a),PU(a),FL(a),c);return NO(b,$rt_s(39));}
function Nb(a){var $r=new U();GH($r,a);return $r;}
function Ob(a,b){var $r=new U();WS($r,a,b);return $r;}
function Pb(a){var $r=new U();YQ($r,a);return $r;}
function GH($t,a){DT($t,a);return;}
function WS($t,a,b){FW($t,a,b);return;}
function YQ($t,a){PN($t,a);return;}
function Qb(a){var $r=new FB();GK($r,a);return $r;}
function GK($t,a){GH($t,a);return;}
function Rb(a){var $r=new Z();LK($r,a);return $r;}
function LK($t,a){QJ($t);$t.PD= -1;$t.IF=a;$t.LC=a;return;}
function XL($t){return $t.LC;}
function HT($t){$t.cE=0;$t.LC=$t.IF;$t.PD= -1;return $t;}
function FO($t){var a;if($t.cE>=$t.LC){a=0;}else{a=1;}return a;}
function OM($t){return $t.LC-$t.cE|0;}
function DP($t){return $t.cE;}
function AV($t){$t.LC=$t.cE;$t.cE=0;$t.PD= -1;return $t;}
function KM($t,a){if(a>=0&&a<=$t.LC){$t.cE=a;if(a<$t.PD){$t.PD=0;}return $t;}RZ(Sb(QS(CK(CM(CK(CM(CK(Ia(),$rt_s(40)),a),$rt_s(41)),$t.LC),$rt_s(42)))));}
function JI($t){return $t.IF;}
function Tb(a,b,c){var $r=new UB();KI($r,a,b,c);return $r;}
function KI($t,a,b,c){LK($t,a);$t.cE=b;$t.LC=c;return;}
function HZ(a){if(a>=0){return Ub(a);}RZ(Sb(QS(CM(CK(Ia(),$rt_s(43)),a))));}
function EQ($t,a,b,c){var d,e,f,g;if(XU($t)!=0){RZ(Vb());}d=c-b|0;if(OM($t)<d){RZ(Wb());}if(b>=0&&b<C(a)){if(c>C(a)){RZ(Na(QS(CM(CK(CK(CM(CK(Ia(),$rt_s(44)),c),$rt_s(45)),$rt_s(46)),C(a)))));}if(b>c){RZ(Na(QS(CM(CK(CM(CK(Ia(),$rt_s(47)),b),$rt_s(48)),c))));}e=$t.cE;while(b<c){f=e+1|0;g=b+1|0;LH($t,e,EP(a,b));e=f;b=g;}$t.cE=$t.cE+d|0;return $t;}RZ(Na(QS(CK(CM(CK(CM(CK(Ia(),$rt_s(47)),b),$rt_s(41)),C(a)),$rt_s(49)))));}
function SU($t,a){return FN($t,a,0,a.data.length);}
function YT($t){return NM($t);}
function EY(a){return LZ(a,0,a.data.length);}
function LZ(a,b,c){return Xb(0,a.data.length,a,b,b+c|0,0);}
function UW($t,a,b,c){var d,e,f,g,h,i;if(XU($t)!=0){RZ(Vb());}if(OM($t)<c){RZ(Wb());}if(b>=0){d=a.data;e=d.length;if(b<e){f=b+c|0;if(f>e){RZ(Na(QS(CM(CK(CK(CM(CK(Ia(),$rt_s(44)),f),$rt_s(45)),$rt_s(50)),e))));}if(c<0){RZ(Na(QS(CK(CM(CK(Ia(),$rt_s(51)),c),$rt_s(52)))));}g=$t.cE;a=0;while(a<c){h=g+1|0;i=b+1|0;LH($t,g,d[b]);a=a+1|0;g=h;b=i;}$t.cE=$t.cE+c|0;return $t;}}RZ(Na(QS(CK(CM(CK(CM(CK(Ia(),$rt_s(53)),b),$rt_s(41)),a.data.length),$rt_s(49)))));}
function RJ($t,a){return EQ($t,a,0,C(a));}
function FN($t,a,b,c){var d,e,f,g,h,i,j;if(b>=0){d=a.data;e=d.length;if(b<e){f=b+c|0;if(f>e){RZ(Na(QS(CM(CK(CK(CM(CK(Ia(),$rt_s(54)),f),$rt_s(45)),$rt_s(50)),e))));}if(OM($t)<c){RZ(Yb());}if(c<0){RZ(Na(QS(CK(CM(CK(Ia(),$rt_s(51)),c),$rt_s(52)))));}g=$t.cE;h=0;while(h<c){i=b+1|0;j=g+1|0;d[b]=AP($t,g);h=h+1|0;b=i;g=j;}$t.cE=$t.cE+c|0;return $t;}}RZ(Na(QS(CK(CM(CK(CM(CK(Ia(),$rt_s(53)),b),$rt_s(41)),a.data.length),$rt_s(49)))));}
function AT($t){return SO($t);}
function Zb(a,b,c){var $r=new SB();DW($r,a,b,c);return $r;}
function DW($t,a,b,c){KI($t,a,b,c);return;}
function XU($t){return UT($t);}
function Ub(a){var $r=new MF();UR($r,a);return $r;}
function Xb(a,b,c,d,e,f){var $r=new MF();CX($r,a,b,c,d,e,f);return $r;}
function AP($t,a){return $t.jI.data[a+$t.OC|0];}
function NM($t){return $t.jI;}
function UR($t,a){CX($t,0,a,$rt_createCharArray(a),0,a,0);return;}
function SO($t){return 1;}
function CX($t,a,b,c,d,e,f){DW($t,b,d,e);$t.OC=a;$t.mH=f;$t.jI=c;return;}
function UT($t){return $t.mH;}
function LH($t,a,b){$t.jI.data[a+$t.OC|0]=b;return;}
function Ac(){var $r=new WF();JL($r);return $r;}
function JL($t){XT($t);return;}
function Bc(a){var $r=new WB();VK($r,a);return $r;}
function VK($t,a){EH($t);$t.CI=a;return;}
function Cc(a){var $r=new GB();BP($r,a);return $r;}
function Dc(){var $r=new GB();KO($r);return $r;}
function BP($t,a){QJ($t);$t.hD=a;return;}
function KO($t){BP($t,Ba());return;}
function Ec(a,b,c){var $r=new XB();HW($r,a,b,c);return $r;}
function NL($t,a){TB_$clinit();return TB.DE;}
function HW($t,a,b,c){QJ($t);$t.PI=$rt_s(55);HB_$clinit();$t.NH=HB.eF;HB_$clinit();$t.P=HB.eF;if(b<=0.0){RZ(Sb(QS(XO(CK(Ia(),$rt_s(56)),b))));}if(c>0.0){$t.MB=a;$t.sB=b;$t.zG=c;return;}RZ(Sb(QS(XO(CK(Ia(),$rt_s(57)),c))));}
function OP($t,a){return;}
function II($t,a){var b,c;b=YT(a);c=EY(OY(b,ZY(8,b.data.length*2|0)));KM(c,DP(a));return c;}
function NU($t,a){if($t.AF!=3&&$t.AF!=2){RZ(Fc());}$t.AF=3;return NL($t,a);}
function CU($t,a){var b,c;if($t.AF!=0&&$t.AF!=3){RZ(Fc());}if(OM(a)==0){return HZ(0);}if($t.AF!=0){IQ($t);}b=HZ(ZY(8,OM(a)*$t.sB|0));while(true){c=WK($t,a,b,0);if(IL(c)!=0){break;}if(QO(c)!=0){b=II($t,b);}if(VV(c)==0){continue;}SX(c);}a=WK($t,a,b,1);if(VV(a)!=0){SX(a);}while(IL(NU($t,b))==0){b=II($t,b);}AV(b);return b;}
function MI($t){return;}
function LN($t,a){if(a===null){RZ(Sb($rt_s(58)));}$t.P=a;OP($t,a);return $t;}
function WK($t,a,b,c){var d,e,f,g,$je;if(!($t.AF==2&&c==0)&&$t.AF!=3){if(c!=0){d=2;}else{d=1;}$t.AF=d;while(true){try{e=SN($t,a,b);}catch($e){$je=$e.$javaException;if($je&&$je instanceof J){f=$je;RZ(Gc(f));}else {throw $e;}}if(QO(e)!=0){return e;}if(IL(e)!=0){if(c!=0&&FO(a)!=0){c=$t.NH;HB_$clinit();if(c===HB.eF){return XP(OM(a));}if(OM(b)<=C($t.PI)){TB_$clinit();return TB.GH;}KM(a,DP(a)+OM(a)|0);a=$t.NH;HB_$clinit();if(a===HB.wD){RJ(b,$t.PI);}}return e;}if(UO(e)!=0){f=$t.NH;HB_$clinit();if(f===HB.eF){break;}f
=$t.NH;HB_$clinit();if(f===HB.wD){if(OM(b)<C($t.PI)){TB_$clinit();return TB.GH;}RJ(b,$t.PI);}KM(a,DP(a)+OK(e)|0);}else if(LP(e)!=0){g=$t.P;HB_$clinit();if(g===HB.eF){return e;}f=$t.P;HB_$clinit();if(f===HB.wD){if(OM(b)<C($t.PI)){TB_$clinit();return TB.GH;}RJ(b,$t.PI);}KM(a,DP(a)+OK(e)|0);}}return e;}RZ(Fc());}
function IQ($t){$t.AF=0;MI($t);return $t;}
function HN($t,a){if(a===null){RZ(Sb($rt_s(58)));}$t.NH=a;LO($t,a);return $t;}
function LO($t,a){return;}
function ZB_$clinit(){ZB_$clinit=function(){};
RD=function($t,a){QJ($t);$t.fF=a;return;};
MW=function(){ZB.eE=Hc($rt_s(59));ZB.DI=Hc($rt_s(60));return;};
MW();}
function Hc(a){var $r=new ZB();RD($r,a);return $r;}
function CZ(a){var b,c,d,e,f;b=0;c=1;while(true){d=a.ZG.data;e=a.eH;a.eH=e+1|0;e=RY(d[e]);if(e%2!=1){f=0;}else{f=1;}b=b+(c*(e/2|0)|0)|0;c=c*46|0;if(f==0){break;}}return b;}
function FY(a){var b;b=CZ(a);a=b/2|0;if(b%2!=0){a= -a|0;}return a;}
function RY(a){if(a<34){return a-32|0;}if(a>=92){return (a-32|0)-2|0;}return (a-32|0)-1|0;}
function Ic(a,b,c){var $r=new TG();PW($r,a,b,c);return $r;}
function AI($t){return $t.W;}
function TK($t){return $t.dB;}
function PW($t,a,b,c){QJ($t);$t.W=a;$t.Y=b;$t.dB=c;return;}
function WH($t){return $t.Y;}
function Jc(){var $r=new HG();FH($r);return $r;}
function FH($t){QJ($t);return;}
function K_$clinit(){K_$clinit=function(){};
LF=function($t){KE($t,16);return;};
KE=function($t,a){QJ($t);$t.lF=$rt_createCharArray(a);return;};
AL=function(a){var b,c;if(a%1000000000==0){return 9;}b=0;c=1;if(a%100000000==0){b=b|8;c=c*100000000|0;}if(a%(c*10000|0)==0){b=b|4;c=c*10000|0;}if(a%(c*100|0)==0){b=b|2;c=c*100|0;}if(a%(c*10|0)==0){b=b|1;}return b;};
KR=function(){var a,b,c,d,e,f,g,h;a=$rt_createFloatArray(6);b=a.data;b[0]=10.0;b[1]=100.0;b[2]=10000.0;b[3]=1.0E8;b[4]=1.00000003E16;b[5]=1.0E32;K.YF=a;c=$rt_createDoubleArray(9);d=c.data;d[0]=10.0;d[1]=100.0;d[2]=10000.0;d[3]=1.0E8;d[4]=1.0E16;d[5]=1.0E32;d[6]=1.0E64;d[7]=1.0E128;d[8]=1.0E256;K.oD=c;a=$rt_createFloatArray(6);b=a.data;b[0]=0.1;b[1]=0.01;b[2]=1.0E-4;b[3]=1.0E-8;b[4]=1.0E-16;b[5]=1.0E-32;K.LD=a;c=$rt_createDoubleArray(9);d=c.data;d[0]=0.1;d[1]=0.01;d[2]=1.0E-4;d[3]=1.0E-8;d[4]=1.0E-16;d[5]=1.0E-32;d[6]
=1.0E-64;d[7]=1.0E-128;d[8]=1.0E-256;K.UB=c;e=$rt_createIntArray(10);f=e.data;f[0]=1;f[1]=10;f[2]=100;f[3]=1000;f[4]=10000;f[5]=100000;f[6]=1000000;f[7]=10000000;f[8]=100000000;f[9]=1000000000;K.QG=e;g=$rt_createLongArray(19);h=g.data;h[0]=Long_fromInt(1);h[1]=Long_fromInt(10);h[2]=Long_fromInt(100);h[3]=Long_fromInt(1000);h[4]=Long_fromInt(10000);h[5]=Long_fromInt(100000);h[6]=Long_fromInt(1000000);h[7]=Long_fromInt(10000000);h[8]=Long_fromInt(100000000);h[9]=Long_fromInt(1000000000);h[10]=new Long(1410065408, 2);h[11]
=new Long(1215752192, 23);h[12]=new Long(3567587328, 232);h[13]=new Long(1316134912, 2328);h[14]=new Long(276447232, 23283);h[15]=new Long(2764472320, 232830);h[16]=new Long(1874919424, 2328306);h[17]=new Long(1569325056, 23283064);h[18]=new Long(2808348672, 232830643);K.KC=g;g=$rt_createLongArray(6);h=g.data;h[0]=Long_fromInt(1);h[1]=Long_fromInt(10);h[2]=Long_fromInt(100);h[3]=Long_fromInt(10000);h[4]=Long_fromInt(100000000);h[5]=new Long(1874919424, 2328306);K.FF=g;return;};
KR();}
function Kc(){var $r=new K();LF($r);return $r;}
function Lc(a){var $r=new K();KE($r,a);return $r;}
function MU($t,a){return $t.k($t.RD,a);}
function JR($t,a){return EN($t,a,10);}
function CS($t,a){return FK($t,$t.RD,a);}
function JM($t,a){$t.RD=a;return;}
function CN($t,a,b){var c,d;c=$t.RD-a|0;$t.e(($t.RD+b|0)-a|0);d=c-1|0;while(d>=0){$t.lF.data[b+d|0]=$t.lF.data[a+d|0];d=d+ -1|0;}$t.RD=$t.RD+(b-a|0)|0;return;}
function XS($t,a,b){CN($t,a,a+1|0);$t.lF.data[a]=b;return $t;}
function EN($t,a,b){return FS($t,$t.RD,a,b);}
function YM($t,a,b,c,d){var e,f,g,h;if(a>b){RZ(Na(HU($rt_s(61))));}while(a<b){e=c.data;f=d+1|0;g=$t.lF.data;h=a+1|0;e[d]=g[a];d=f;a=h;}return;}
function BL($t){return Mc($t.lF,0,$t.RD);}
function IP($t){return $t.RD;}
function FS($t,a,b,c){var d,e,f,g,h;d=1;if(b<0){d=0;b= -b|0;}if(b<c){if(d!=0){CN($t,a,a+1|0);}else{CN($t,a,a+2|0);e=$t.lF.data;d=a+1|0;e[a]=45;a=d;}$t.lF.data[a]=JV(b,c);}else{f=1;g=1;e=2147483647/c|0;$ba:{while(true){h=f*c|0;if(h>b){h=f;break $ba;}g=g+1|0;if(h>e){break;}f=h;}}if(d==0){g=g+1|0;}CN($t,a,a+g|0);if(d!=0){f=a;}else{g=$t.lF.data;f=a+1|0;g[a]=45;}while(h>0){d=$t.lF.data;g=f+1|0;d[f]=JV(b/h|0,c);b=b%h;h=h/c|0;f=g;}}return $t;}
function OH($t,a,b){var c,d,e;if(a>=0&&a<=$t.RD){if(b===null){b=HU($rt_s(62));}else if(BU(b)!=0){return $t;}GW($t,$t.RD+C(b)|0);c=$t.RD-1|0;while(c>=a){$t.lF.data[c+C(b)|0]=$t.lF.data[c];c=c+ -1|0;}$t.RD=$t.RD+C(b)|0;d=0;while(d<C(b)){c=$t.lF.data;e=a+1|0;c[a]=EP(b,d);d=d+1|0;a=e;}return $t;}RZ(Ac());}
function LR($t,a,b,c){return HV($t,$t.RD,a,b,c);}
function XQ($t,a){return MH($t,a,0,a.data.length);}
function RM($t,a,b){var c,d,e,f,g,h,i,j,k,m,n,o;if(b==0.0){CN($t,a,a+3|0);b=$t.lF.data;c=a+1|0;b[a]=48;b=$t.lF.data;a=c+1|0;b[c]=46;$t.lF.data[a]=48;return $t;}if(b==0.0){CN($t,a,a+4|0);b=$t.lF.data;c=a+1|0;b[a]=45;b=$t.lF.data;d=c+1|0;b[c]=48;b=$t.lF.data;c=d+1|0;b[d]=46;$t.lF.data[c]=48;return $t;}if((isNaN(b)?1:0)!=0){CN($t,a,a+3|0);b=$t.lF.data;c=a+1|0;b[a]=78;b=$t.lF.data;a=c+1|0;b[c]=97;$t.lF.data[a]=78;return $t;}if((!isFinite(b)?1:0)!=0){if(b>0.0){CN($t,a,a+8|0);e=a;}else{CN($t,a,a+9|0);d=$t.lF.data;e
=a+1|0;d[a]=45;}b=$t.lF.data;c=e+1|0;b[e]=73;b=$t.lF.data;a=c+1|0;b[c]=110;b=$t.lF.data;d=a+1|0;b[a]=102;b=$t.lF.data;c=d+1|0;b[d]=105;b=$t.lF.data;d=c+1|0;b[c]=110;b=$t.lF.data;c=d+1|0;b[d]=105;b=$t.lF.data;d=c+1|0;b[c]=116;$t.lF.data[d]=121;return $t;}f=0;g=1;if(b<0.0){f=1;b= -b;g=g+1|0;}h=1;if(b>=1.0){i=32;j=0;k=1.0;e=K.YF.data.length-1|0;while(e>=0){m=j|i;if(m<=38&&K.YF.data[e]*k<=b){k=k*K.YF.data[e];j=m;}i=i>>1;e=e+ -1|0;}k=b/(k/1000000.0)+0.5|0;}else{k=32;n=0;o=1.0;j=K.LD.data.length-1|0;while(j>=0){m
=n|k;if(m<=38&&K.LD.data[j]*o*10.0>b){o=o*K.LD.data[j];n=m;}k=k>>1;j=j+ -1|0;}j= -n|0;k=b*1000000.0/o+0.5|0;}m=7;c=AL(k);if(c>0){m=m-c|0;}if(j<7&&j>= -3){if(j>=0){h=j+1|0;m=ZY(m,h+1|0);j=0;}else if(j<0){k=k/K.QG.data[ -j|0]|0;m=m-j|0;j=0;}}if(j!=0){g=g+2|0;if(!(j> -10&&j<10)){g=g+1|0;}if(j<0){g=g+1|0;}}if(j!=0&&m==h){m=m+1|0;}CN($t,a,a+(g+m|0)|0);if(f==0){i=a;}else{b=$t.lF.data;i=a+1|0;b[a]=45;}f=1000000;g=0;while(g<m){if(f<=0){e=0;}else{e=k/f|0;k=k%f;}a=$t.lF.data;n=i+1|0;a[i]=(48+e|0)&65535;h=h+ -1|0;if(h
!=0){i=n;}else{b=$t.lF.data;i=n+1|0;b[n]=46;}f=f/10|0;g=g+1|0;}if(j!=0){a=$t.lF.data;e=i+1|0;a[i]=69;if(j>=0){k=e;}else{j= -j|0;a=$t.lF.data;k=e+1|0;a[e]=45;}if(j<10){f=k;}else{e=$t.lF.data;f=k+1|0;e[k]=(48+(j/10|0)|0)&65535;}$t.lF.data[f]=(48+j%10|0)&65535;}return $t;}
function DQ($t,a){return FX($t,$t.RD,a);}
function DL($t,a,b,c,d){var e,f,g,h,i;CN($t,a,a+d|0);e=d+c|0;while(c<e){f=b.data;g=$t.lF.data;h=a+1|0;i=c+1|0;g[a]=f[c];a=h;c=i;}return $t;}
function UQ($t,a){if($t.lF.data.length>=a){return;}$t.lF=OY($t.lF,(a*2|0)+1|0);return;}
function ZJ($t,a,b){var c;if(b===null){c=$rt_s(62);}else{c=GT(b);}return FX($t,a,HU(c));}
function BJ($t,a){return ZO($t,$t.RD,a);}
function Ia(){var $r=new WD();IT($r);return $r;}
function CO($t,a,b){XS($t,a,b);return $t;}
function CM($t,a){JR($t,a);return $t;}
function CK($t,a){DQ($t,a);return $t;}
function WU($t,a,b){ZJ($t,a,b);return $t;}
function OV($t,a,b){OH($t,a,b);return $t;}
function BW($t,a){JM($t,a);return;}
function DI($t,a,b){return CO($t,a,b);}
function XI($t,a,b,c,d){YM($t,a,b,c,d);return;}
function GJ($t,a){XQ($t,a);return $t;}
function QS($t){return BL($t);}
function CR($t){return IP($t);}
function IT($t){LF($t);return;}
function FX($t,a,b){return OV($t,a,b);}
function QK($t,a,b){RM($t,a,b);return $t;}
function MH($t,a,b,c){return TW($t,a,b,c);}
function XO($t,a){BJ($t,a);return $t;}
function NJ($t,a){MU($t,a);return $t;}
function IK($t,a){CS($t,a);return $t;}
function ZO($t,a,b){return QK($t,a,b);}
function HV($t,a,b,c,d){return NV($t,a,b,c,d);}
function GW($t,a){UQ($t,a);return;}
function FK($t,a,b){return WU($t,a,b);}
function TW($t,a,b,c){LR($t,a,b,c);return $t;}
function NV($t,a,b,c,d){DL($t,a,b,c,d);return $t;}
function Sb(a){var $r=new S();LX($r,a);return $r;}
function Nc(){var $r=new S();NS($r);return $r;}
function LX($t,a){TQ($t,a);return;}
function NS($t){ML($t);return;}
function Oc(a){var $r=new QF();KP($r,a);return $r;}
function KP($t,a){NS($t);$t.FI=a;return;}
function Pc(){var $r=new NE();RV($r);return $r;}
function RV($t){ML($t);return;}
function Qc(a){var $r=new EG();UP($r,a);return $r;}
function Lb(){var $r=new EG();AW($r);return $r;}
function NO($t,a){return Rc($t.GB,0,$t.EG,a);}
function NP($t,a){if($t.GB.data.length<a){$t.GB=QY($t.GB,ZY(a,($t.GB.data.length*3|0)/2|0));}return;}
function XK($t,a){var b,c;NP($t,$t.EG+1|0);b=$t.GB.data;c=$t.EG;$t.EG=c+1|0;b[c]=a<<24>>24;return;}
function UP($t,a){EH($t);$t.GB=$rt_createByteArray(a);return;}
function TO($t,a,b,c){var d,e,f,g,h;NP($t,$t.EG+c|0);d=0;while(d<c){e=a.data;f=$t.GB.data;g=$t.EG;$t.EG=g+1|0;h=b+1|0;f[g]=e[b];d=d+1|0;b=h;}return;}
function AW($t){UP($t,32);return;}
function QB_$clinit(){QB_$clinit=function(){};
QT=function(a){var b,c,d,e,f,g,h,i,j,k;b=MV(a);c=0;d=0;if(EP(b,d)==45){d=d+1|0;c=1;}else if(EP(b,d)==43){d=d+1|0;}e=EP(b,d);if(e>=48&&e<=57){f=Long_ZERO;g=0;while(true){if(EP(b,d)!=48){$ba:{while(true){if(d>=C(b)){break $ba;}h=EP(b,d);if(h<48){break $ba;}if(h>57){break;}if(Long_toNumber(f)>=1.0E17){g=g+1|0;}else{f=Long_add(Long_mul(f,Long_fromInt(10)),Long_fromInt(h-48|0));}d=d+1|0;}}if(d<C(b)&&EP(b,d)==46){d=d+1|0;i=0;$bb:{while(true){if(d>=C(b)){break $bb;}j=EP(b,d);if(j<48){break $bb;}if(j>57){break;}if(Long_toNumber(f)
<1.0E17){f=Long_add(Long_mul(f,Long_fromInt(10)),Long_fromInt(j-48|0));g=g+ -1|0;}d=d+1|0;i=1;}}if(i==0){RZ(Ya());}}if(d<C(b)){e=EP(b,d);if(e!=101&&e!=69){RZ(Ya());}i=d+1|0;k=0;if(EP(b,i)==45){i=i+1|0;k=1;}else if(EP(b,i)==43){i=i+1|0;}d=0;a=0;$bc:{while(true){if(i>=C(b)){break $bc;}j=EP(b,i);if(j<48){break $bc;}if(j>57){break;}d=(10*d|0)+(j-48|0)|0;a=1;i=i+1|0;}}if(a==0){RZ(Ya());}if(k!=0){d= -d|0;}g=g+d|0;}$bd:{if(g<=308){if(g!=308){break $bd;}if(Long_compare(f,new Long(2133831477, 4185580))<=0){break $bd;}}if
(c!=0){a= -Infinity;}else{a=Infinity;}return a;}if(c!=0){f=Long_neg(f);}return Long_toNumber(f)*SM(g);}d=d+1|0;if(d==C(b)){break;}}return 0.0;}RZ(Ya());};
DV=function(){QB.qD=NaN;QB.mD=AZ();return;};
SM=function(a){var b,c;if(a>=0){b=10.0;}else{b=0.1;a= -a|0;}c=1.0;while(a!=0){if(a%2!=0){c=c*b;}b=b*b;a=a/2|0;}return c;};
DV();}
function Sc(){var $r=new PD();MN($r);return $r;}
function FL($t){return $t.MC;}
function OX($t,a,b){var c,d,e,f,g,h,i;c=b.data;d=$rt_createDoubleArray(10);e=c.length;f=0;while(f<e){b=c[f];g=BS(a,AU(b));if(g!==null){h=d.data;i=OT(g);h[i]=h[i]+EO(b);}f=f+1|0;}return d;}
function DN($t,a){var b,c,d,e,f;b=$rt_createDoubleArray(10);c=YJ(a);while(TL(c)!=0){d=b.data;e=BN(c);f=OT(AI(e));d[f]=d[f]+LJ(TK(e));}return b;}
function VR($t,a,b){var c,d,e,f,g,h,i,j,k;c=$rt_createDoubleArray(10);d=IU(CL(a)).data;e=d.length;f=0;while(f<e){g=d[f];h=BS(a,g);i=HY(g,b);if(i!==null){j=c.data;k=OT(h);j[k]=j[k]+EU(h)*EO(i);}f=f+1|0;}return c;}
function KT($t,a,b){var c,d,e,f,g,h,i,j;c=b.data;d=Eb();e=c.length;f=0;while(f<e){g=c[f];h=IU(HK(g)).data;i=BS(a,h[0]);j=BS(a,h[1]);if(i!==null&&i!==j&&OT(i)==OT(j)){JW(d,Ic(i,j,g));}f=f+1|0;}return d;}
function HP($t,a){var b,c,d;b=CL(a);c=65;while(c<=90){if(YI(b,c)<0){JW($t.CE,QS(CK(NJ(CK(Ia(),$rt_s(63)),c),$rt_s(64))));}c=(c+1|0)&65535;}a=0;while(a<C(b)){d=EP(b,a);if(TN(b,d,a+1|0)>=0){JW($t.CE,QS(CK(NJ(CK(Ia(),$rt_s(63)),d),$rt_s(65))));}a=a+1|0;}return;}
function FQ($t,a,b){var c,d,e,f,g,h;c=b.data;d=0.0;e=c.length;f=0;while(f<e){g=c[f];h=IU(HK(g)).data;if(ER(BS(a,h[0]))!=ER(BS(a,h[1]))){d=d+LJ(g);}f=f+1|0;}return d;}
function WX($t){return $t.CE;}
function XX($t,a,b,c){HP($t,a);$t.fD=OX($t,a,b);$t.UG=FQ($t,a,c);$t.MI=KT($t,a,c);$t.BF=DN($t,$t.MI);$t.aH=VR($t,a,b);$t.MC=YL($t,a,$t.MI);return;}
function PU($t){return $t.aH;}
function DO($t){return $t.MI;}
function MN($t){QJ($t);$t.CE=Eb();return;}
function DK($t){return $t.fD;}
function UM($t){return $t.BF;}
function YL($t,a,b){var c,d,e,f,g;c=$rt_createDoubleArray(10);d=YJ(b);while(TL(d)!=0){e=c.data;f=BN(d);g=OT(AI(f));e[g]=e[g]+LJ(TK(f))*ZW(a,KY(2,BY(TH(AI(f))-TH(WH(f))|0)));}return c;}
function Tc(a,b){var $r=new IF();TX($r,a,b);return $r;}
function TX($t,a,b){WS($t,a,b);return;}
function UC_$clinit(){UC_$clinit=function(){};
DE=function($t,a){QJ($t);$t.pD=a;return;};
CP=function(){UC.WG=KZ();return;};
DM=function(a){var b,c,d,e,f,g,h;RC_$clinit();b=RC.TC.data;c=b.length;d=0;while(d<c){e=b[d];if(!(a!==null&&BR(a,MP(e))==0)){RW(e,1);DX(Uc(e));}d=d+1|0;}ZC_$clinit();c=ZC.hE.data;d=c.length;a=0;while(a<d){f=c[a];RW(f,1);DX(Uc(f));a=a+1|0;}WC_$clinit();a=WC.YE.data;g=a.length;e=0;while(e<g){h=a[e];RW(h,1);DX(Uc(h));e=e+1|0;}return;};
VW=function(a,b){AM(a,b);return;};
KW=function(){var a,b,c,d,e,f,g,h,i,j;a=0;b=0;RC_$clinit();c=RC.TC.data;d=c.length;e=0;while(e<d){f=c[e];if(KJ(f)!=0){b=b+1|0;}if(WV(f)!==null){a=a+1|0;}e=e+1|0;}ZC_$clinit();g=ZC.hE.data;d=g.length;e=0;while(e<d){h=g[e];if(KJ(h)!=0){b=b+1|0;}if(WV(h)!==null){a=a+1|0;}e=e+1|0;}WC_$clinit();h=WC.YE.data;f=h.length;i=0;while(i<f){j=h[i];if(KJ(j)!=0){b=b+1|0;}if(WV(j)!==null){a=a+1|0;}i=i+1|0;}if(b==0){b=1;}if(a>=b){RN(null);MT(1);}else{RN(QS(CK(CM(CK(Ia(),$rt_s(66)),(100*a|0)/b|0),$rt_s(67))));}return;};
CP();}
function Uc(a){var $r=new UC();DE($r,a);return $r;}
function AM($t,a){WT($t.pD,a);MB_$clinit();JU(MB.XH,QS(CK(CK(Ia(),$rt_s(68)),QX($t.pD))));KW();return;}
function DX($t){var a,b,c;a=new XMLHttpRequest();b=CY(Vc($t,a),"stateChanged");a.onreadystatechange=b;b=$rt_s(69);c=QS(CK(CK(Ia(),$rt_s(70)),QX($t.pD)));a.open($rt_ustr(b),$rt_ustr(c));a.send();return;}
function Wc(){var $r=new RB();VP($r);return $r;}
function EJ($t,a){var b,c,d,e,f,g;b=a.data;c=MQ($t);d=b.length;if(d<c){a=IZ(RI(RQ(a)),c);}else{while(c<d){b[c]=null;c=c+1|0;}}e=0;c=YJ($t);while(TL(c)!=0){f=a.data;g=e+1|0;f[e]=BN(c);e=g;}return a;}
function VP($t){QJ($t);return;}
function Xc(){var $r=new AC();SS($r);return $r;}
function YJ($t){return Yc($t);}
function JW($t,a){JT($t,MQ($t),a);return 1;}
function SS($t){VP($t);return;}
function Zc(a){var $r=new DF();WI($r,a);return $r;}
function Eb(){var $r=new DF();BM($r);return $r;}
function JX($t,a){if(a>=0&&a<=$t.VE){return;}RZ(Oa());}
function WI($t,a){SS($t);$t.PG=VZ(E,a);return;}
function TJ($t,a){if(a>=0&&a<$t.VE){return;}RZ(Oa());}
function VM($t,a){if($t.PG.data.length<a){$t.PG=YY($t.PG,$t.PG.data.length+KY(5,$t.PG.data.length/2|0)|0);}return;}
function JT($t,a,b){var c;JX($t,a);VM($t,$t.VE+1|0);c=$t.VE;while(c>a){$t.PG.data[c]=$t.PG.data[c-1|0];c=c+ -1|0;}$t.PG.data[a]=b;$t.VE=$t.VE+1|0;$t.xB=$t.xB+1|0;return;}
function EW($t,a){TJ($t,a);return $t.PG.data[a];}
function MQ($t){return $t.VE;}
function BM($t){WI($t,10);return;}
function Gc(a){var $r=new EF();EK($r,a);return $r;}
function EK($t,a){YQ($t,a);return;}
function ZC_$clinit(){ZC_$clinit=function(){};
TR=function(){var a,b;a=VZ(AE,11);b=a.data;b[0]=Da($rt_s(71),$rt_s(72));b[1]=Da($rt_s(73),$rt_s(74));b[2]=Da($rt_s(75),$rt_s(76));b[3]=Da($rt_s(77),$rt_s(78));b[4]=Da($rt_s(79),$rt_s(80));b[5]=Da($rt_s(81),$rt_s(82));b[6]=Da($rt_s(83),$rt_s(84));b[7]=Da($rt_s(85),$rt_s(86));b[8]=Da($rt_s(87),$rt_s(88));b[9]=Da($rt_s(89),$rt_s(90));b[10]=Da($rt_s(91),$rt_s(92));ZC.hE=a;return;};
TR();}
function Ad(){var $r=new NF();YP($r);return $r;}
function GL($t,a){JM($t,a);return;}
function KQ($t,a,b){XS($t,a,b);return $t;}
function UK($t,a,b){return KQ($t,a,b);}
function IS($t){return BL($t);}
function XV($t){return IP($t);}
function YP($t){LF($t);return;}
function RK($t,a){MU($t,a);return $t;}
function NT($t,a){UQ($t,a);return;}
function JC_$clinit(){JC_$clinit=function(){};
BF=function($t,a,b,c,d){OF($t,a,b,c,KK(GT(d)));return;};
GV=function(a){var b,c;b=new JC;c=$rt_createCharArray(1);c.data[0]=a;IE(b,c);return b;};
AH=function($t,a,b,c){var d,e;QJ($t);$t.L=$rt_createCharArray(c);d=0;while(d<c){e=a.data;$t.L.data[d]=e[d+b|0];d=d+1|0;}return;};
HU=function(a){return a;};
QD=function($t,a,b,c){var d,e,f,g,h,i,j,k,m;QJ($t);$t.L=$rt_createCharArray(c*2|0);d=0;e=0;while(e<c){f=a.data;g=b+1|0;h=f[b];if(h<65536){i=$t.L.data;j=d+1|0;i[d]=h&65535;}else{k=$t.L.data;m=d+1|0;k[d]=IX(h);i=$t.L.data;j=m+1|0;i[m]=UN(h);}e=e+1|0;b=g;d=j;}if(d<$t.L.data.length){$t.L=OY($t.L,d);}return;};
OF=function($t,a,b,c,d){QJ($t);FU($t,a,b,c,d);return;};
IE=function($t,a){var b,c,d;b=a.data;QJ($t);c=b.length;$t.L=$rt_createCharArray(c);d=0;while(d<c){$t.L.data[d]=b[d];d=d+1|0;}return;};
VN=function(){JC.sF=Jc();JC.zI=Bd();return;};
VN();}
function Rc(a,b,c,d){var $r=new JC();BF($r,a,b,c,d);return $r;}
function Mc(a,b,c){var $r=new JC();AH($r,a,b,c);return $r;}
function Cd(a,b,c){var $r=new JC();QD($r,a,b,c);return $r;}
function Dd(a,b,c,d){var $r=new JC();OF($r,a,b,c,d);return $r;}
function B(a){var $r=new JC();IE($r,a);return $r;}
function TN($t,a,b){var c,d,e;if(a<65536){c=a&65535;while(b<$t.L.data.length){if($t.L.data[b]==c){return b;}b=b+1|0;}return  -1;}d=IX(a);e=UN(a);while(b<($t.L.data.length-1|0)){if($t.L.data[b]==d&&$t.L.data[b+1|0]==e){return b;}b=b+1|0;}return  -1;}
function BU($t){var a;if($t.L.data.length!=0){a=0;}else{a=1;}return a;}
function KU($t,a){if($t===a){return 1;}return OS($t,a,0);}
function G($t){var a;a=WO(JC.zI,$t);if(a!==null){$t=a;}else{ZL(JC.zI,$t,$t);}return $t;}
function RO($t){var a,b,c;if($t.nB==0){a=$t.L.data;b=a.length;c=0;while(c<b){$t.nB=(31*$t.nB|0)+a[c]|0;c=c+1|0;}}return $t.nB;}
function MK($t,a,b){if(a>b){RZ(Oa());}return Mc($t.L,a,b-a|0);}
function IU($t){var a,b,c;a=$rt_createCharArray($t.L.data.length);b=0;while(true){c=a.data;if(b>=c.length){break;}c[b]=$t.L.data[b];b=b+1|0;}return a;}
function EP($t,a){if(a>=0&&a<$t.L.data.length){return $t.L.data[a];}RZ(Ac());}
function OS($t,a,b){var c,d,e;if((b+C(a)|0)>C($t)){return 0;}c=0;while(c<C(a)){d=EP(a,c);e=b+1|0;if(d!=EP($t,b)){return 0;}c=c+1|0;b=e;}return 1;}
function YI($t,a){return TN($t,a,0);}
function D($t,a,b,c,d){var e,f,g;if(a>=0&&a<=b&&b<=$t.d()&&d>=0){e=c.data;if((d+(b-a|0)|0)<=e.length){while(a<b){f=d+1|0;g=a+1|0;e[d]=$t.vH(a);d=f;a=g;}return;}}RZ(Oa());}
function GT($t){return $t;}
function C($t){return $t.L.data.length;}
function JH($t,a){var b,c;b=0;while(b<C($t)){c=0;while(true){if(c>=C(a)){return 1;}if(EP($t,b+c|0)!=EP(a,c)){break;}c=c+1|0;}b=b+1|0;}return 0;}
function BR($t,a){var b;if($t===a){return 1;}if(a===null){return 0;}if(C($t)!=C(a)){return 0;}b=0;while(b<C($t)){if(GM(EP($t,b))!=GM(EP(a,b))){return 0;}b=b+1|0;}return 1;}
function WP($t,a){var b,c;if($t===a){return 1;}if(a instanceof JC==0){return 0;}b=a;if(C(b)!=C($t)){return 0;}c=0;while(c<C(b)){if(EP($t,c)!=EP(b,c)){return 0;}c=c+1|0;}return 1;}
function FU($t,a,b,c,d){b=WJ(d,DZ(a,b,c));if(AT(b)!=0&&DP(b)==0&&XL(b)==JI(b)){$t.L=YT(b);}else{$t.L=$rt_createCharArray(OM(b));SU(b,$t.L);}return;}
function GQ($t,a){return VH($t,a,0);}
function VH($t,a,b){var c,d;c=C($t)-C(a)|0;while(b<=c){d=0;while(true){if(d>=C(a)){return b;}if(EP($t,b+d|0)!=EP(a,d)){break;}d=d+1|0;}b=b+1|0;}return  -1;}
function MV($t){var a,b;a=0;b=C($t)-1|0;$ba:{while(true){if(a>b){break $ba;}if(EP($t,a)>32){break;}a=a+1|0;}}while(a<=b&&EP($t,b)<=32){b=b+ -1|0;}return MK($t,a,b+1|0);}
function KL($t){var a,b,c,d,e,f;if(BU($t)!=0){return $t;}a=$rt_createIntArray($t.L.data.length);b=0;c=0;while(c<$t.L.data.length){if(c!=($t.L.data.length-1|0)&&YN($t.L.data[c])!=0&&PM($t.L.data[c+1|0])!=0){d=a.data;e=b+1|0;d[b]=KX(JO($t.L.data[c],$t.L.data[c+1|0]));c=c+1|0;}else{f=a.data;e=b+1|0;f[b]=SJ($t.L.data[c]);}c=c+1|0;b=e;}return Cd(a,0,b);}
function Ed(){var $r=new CH();AR($r);return $r;}
function AR($t){ML($t);return;}
function Fd(a,b,c){var $r=new PB();JN($r,a,b,c);return $r;}
function Gd(a,b,c,d){var $r=new PB();SR($r,a,b,c,d);return $r;}
function DR($t,a){if(a!==null){a=a.data.length;if(a!=0&&a>=$t.T){return;}}RZ(Sb($rt_s(93)));}
function JN($t,a,b,c){var d;d=$rt_createByteArray(1);d.data[0]=63;SR($t,a,b,c,d);return;}
function GR($t,a){if(a===null){RZ(Sb($rt_s(94)));}$t.tH=a;DS($t,a);return $t;}
function CQ($t,a,b,c){var d,e,f,g,$je;$ba:{if($t.iE!=3){if(c!=0){break $ba;}if($t.iE!=2){break $ba;}}RZ(Fc());}if(c==0){d=1;}else{d=2;}$t.iE=d;$bb:while(true){try{e=ZP($t,a,b);}catch($e){$je=$e.$javaException;if($je&&$je instanceof J){f=$je;RZ(Gc(f));}else {throw $e;}}if(IL(e)!=0){if(c==0){return e;}f=OM(a);if(f<=0){return e;}e=XP(f);}else if(QO(e)!=0){return e;}if(LP(e)==0){g=$t.cH;}else{g=$t.tH;}$bc:{HB_$clinit();if(g!==HB.wD){HB_$clinit();if(g===HB.wI){break $bc;}else{break $bb;}}if(OM(b)<$t.RE.data.length)
{TB_$clinit();return TB.GH;}HM(b,$t.RE);}KM(a,DP(a)+OK(e)|0);}return e;}
function SR($t,a,b,c,d){QJ($t);HB_$clinit();$t.cH=HB.eF;HB_$clinit();$t.tH=HB.eF;DR($t,d);$t.OD=a;$t.RE=d.aI();$t.yE=b;$t.T=c;return;}
function DU($t,a){return;}
function DH($t,a){if(a===null){RZ(Sb($rt_s(94)));}$t.cH=a;DU($t,a);return $t;}
function UI($t,a){TB_$clinit();return TB.DE;}
function DS($t,a){return;}
function AK($t,a){var b;if($t.iE!=2&&$t.iE!=4){RZ(Fc());}b=UI($t,a);TB_$clinit();if(b===TB.DE){$t.iE=3;}return b;}
function Hd(a,b,c){var $r=new KC();BV($r,a,b,c);return $r;}
function ZP($t,a,b){var c,d,e,f,g,h,i,j,k;c=$rt_createCharArray(KY(OM(a),512));d=0;e=0;f=$rt_createByteArray(KY(OM(b),512));$ba:{while(true){if((d+32|0)>e&&FO(a)!=0){g=d;while(g<e){h=c.data;h[g-d|0]=h[g];g=g+1|0;}i=c.data;j=e-d|0;e=KY(OM(a)+j|0,i.length);FN(a,c,j,e-j|0);d=0;}if(FO(b)==0){if(FO(a)==0&&d>=e){TB_$clinit();k=TB.DE;}else{TB_$clinit();k=TB.GH;}break $ba;}i=f.data;h=0;i=KY(OM(b),i.length);g=Xa(a,b);k=ZV($t,c,d,e,f,h,i,g);d=g.cC;if(k===null){if(h==g.hG){TB_$clinit();k=TB.DE;}}TP(b,f,0,g.hG);if(k!==
null){break;}}}KM(a,DP(a)-(e-d|0)|0);return k;}
function BV($t,a,b,c){JN($t,a,b,c);return;}
function Id(a){var $r=new ZG();AJ($r,a);return $r;}
function AJ($t,a){BV($t,a,2.0,4.0);return;}
function ZV($t,a,b,c,d,e,f,g){var h,i,j,k,m,n,o,p,q,r,s;h=null;$ba:{while(true){if(b>=c){i=b;break $ba;}if(e>=f){break;}j=a.data;i=b+1|0;k=j[b];if(k<128){j=d.data;m=e+1|0;j[e]=k<<24>>24;}else if(k<2048){if((e+2|0)>f){i=i+ -1|0;if(SI(g,2)!=0){break $ba;}TB_$clinit();h=TB.GH;break $ba;}n=d.data;o=e+1|0;n[e]=(192|k>>6)<<24>>24;m=o+1|0;n[o]=(128|k&63)<<24>>24;}else if(WR(k)==0){if((e+3|0)>f){i=i+ -1|0;if(SI(g,3)!=0){break $ba;}TB_$clinit();h=TB.GH;break $ba;}j=d.data;p=e+1|0;j[e]=(224|k>>12)<<24>>24;q=p+1|0;j[p]
=(128|k>>6&63)<<24>>24;m=q+1|0;j[q]=(128|k&63)<<24>>24;}else{if(YN(k)==0){h=XP(1);break $ba;}if(i>=c){if(NI(g)!=0){break $ba;}TB_$clinit();h=TB.DE;break $ba;}r=i+1|0;b=j[i];if(PM(b)==0){i=r+ -2|0;h=XP(1);break $ba;}if((e+4|0)>f){i=r+ -2|0;if(SI(g,4)!=0){break $ba;}TB_$clinit();h=TB.GH;break $ba;}p=d.data;j=JO(k,b);n=e+1|0;p[e]=(240|j>>18)<<24>>24;q=n+1|0;p[n]=(128|j>>12&63)<<24>>24;s=q+1|0;p[q]=(128|j>>6&63)<<24>>24;m=s+1|0;p[s]=(128|j&63)<<24>>24;i=r;}b=i;e=m;}i=b;}IM(g,i);RX(g,e);return h;}
function Jd(){var $r=new VB();QI($r);return $r;}
function QI($t){ML($t);return;}
function Kd(a){var $r=new Y();WN($r,a);return $r;}
function WN($t,a){GK($t,a);return;}
function Ld(a){var $r=new QE();YU($r,a);return $r;}
function YU($t,a){WN($t,a);return;}
function Za(a){var $r=new HF();YW($r,a);return $r;}
function Ya(){var $r=new HF();BO($r);return $r;}
function YW($t,a){LX($t,a);return;}
function BO($t){NS($t);return;}
function Md(a,b){var $r=new EB();SP($r,a,b);return $r;}
function UV($t){return $t.EE;}
function ZX(a,b){var c,d,e,f;c=QU(a);if(c===null){RZ(Sb(HU(QS(IK(CK(Ia(),$rt_s(95)),TV(a))))));}c=c.data;d=c.length;e=0;while(true){if(e>=d){RZ(Sb(HU(QS(CK(IK(CK(IK(CK(Ia(),$rt_s(96)),TV(a)),$rt_s(97)),b),$rt_s(98))))));}f=c[e];if(WP(UV(f),b)!=0){break;}e=e+1|0;}return f;}
function SP($t,a,b){QJ($t);$t.EE=a;$t.lB=b;return;}
function BB_$clinit(){BB_$clinit=function(){};
GU=function(a){return ZX(UZ(BB),a);};
TS=function(){var a,b;BB.OE=Nd($rt_s(99),0);BB.wB=Nd($rt_s(100),1);BB.dH=Nd($rt_s(101),2);a=VZ(BB,3);b=a.data;b[0]=BB.OE;b[1]=BB.wB;b[2]=BB.dH;BB.SG=a;return;};
RH=function(){return BB.SG.aI();};
UD=function($t,a,b){SP($t,a,b);return;};
TS();}
function Nd(a,b){var $r=new BB();UD($r,a,b);return $r;}
function JB_$clinit(){JB_$clinit=function(){};
XW=function(a){if(!(a>=48&&a<=57)&&!(a>=97&&a<=122)&&a<65&&a>90){a=0;}else{a=1;}return a;};
WW=function(a){var b,c;if(BU(a)!=0){RZ(Od(a));}if(XW(EP(a,0))==0){RZ(Od(a));}b=1;while(b<C(a)){$ba:{c=EP(a,b);switch(c){case 43:case 45:case 46:case 58:case 95:break;default:if(XW(c)!=0){break $ba;}else{RZ(Od(a));}}}b=b+1|0;}return;};
PL=function(){JB.gB=Bd();ZL(JB.gB,$rt_s(39),Pd());return;};
GG=function($t,a,b){var c,d,e;c=b.data;QJ($t);WW(a);d=c.length;e=0;while(e<d){WW(c[e]);e=e+1|0;}$t.AB=a;$t.iD=b.aI();return;};
KK=function(a){var b;if(a===null){RZ(Sb($rt_s(102)));}WW(a);b=WO(JB.gB,KL(a));if(b!==null){return b;}RZ(Oc(a));};
PL();}
function Qd(a,b){var $r=new JB();GG($r,a,b);return $r;}
function WJ($t,a){var b,c,d,$je;$ba:{try{b=YH($t);HB_$clinit();c=HN(b,HB.wD);HB_$clinit();d=CU(LN(c,HB.wD),a);}catch($e){$je=$e.$javaException;if($je&&$je instanceof AB){c=$je;break $ba;}else {throw $e;}}return d;}RZ(Tc($rt_s(103),c));}
function Pd(){var $r=new OG();XR($r);return $r;}
function YH($t){return Rd($t);}
function ES($t){return Id($t);}
function XR($t){GG($t,$rt_s(39),VZ(JC,0));return;}
function Bb(a){var $r=new UG();GX($r,a);return $r;}
function BX($t,a,b,c){var d,e,f,g,h;IW($t);if($t.uI>=C($t.UF)){return  -1;}d=KY(C($t.UF)-$t.uI|0,c);e=0;while(e<d){f=a.data;g=b+1|0;c=$t.UF;h=$t.uI;$t.uI=h+1|0;f[b]=EP(c,h);e=e+1|0;b=g;}return d;}
function GX($t,a){KO($t);if(a!==null){$t.UF=a;return;}RZ(F());}
function IW($t){if($t.UF!==null){return;}RZ(Pa());}
function QH($t){$t.UF=null;return;}
function Yc(a){var $r=new UE();OR($r,a);return $r;}
function TL($t){var a;if($t.mE>=$t.GE){a=0;}else{a=1;}return a;}
function BN($t){var a,b;SV($t);$t.BC=$t.mE;a=$t.OF;b=$t.mE;$t.mE=b+1|0;return EW(a,b);}
function SV($t){var a,b;a=$t.uE;b=$t.OF;if(a>=b.xB){return;}RZ(Pc());}
function OR($t,a){var b;$t.OF=a;QJ($t);b=$t.OF;$t.uE=b.xB;$t.GE=MQ($t.OF);$t.BC= -1;return;}
function Sd(a,b){var $r=new GE();KH($r,a,b);return $r;}
function Cb(a){var $r=new GE();ZH($r,a);return $r;}
function XJ($t,a){var b;if($t.tC!=0){return 0;}$ba:{while(true){if(a>=$t.oG.data.length){break $ba;}b=BX($t.tG,$t.oG,a,$t.oG.data.length-a|0);if(b== -1){$t.tC=1;break $ba;}if(b==0){break;}a=a+b|0;}}$t.SH=a;$t.tI=0;$t.U= -1;return 1;}
function MM($t){if($t.tG!==null){return;}RZ(Pa());}
function KH($t,a,b){KO($t);$t.U= -1;if(b<0){RZ(Nc());}$t.tG=a;$t.oG=$rt_createCharArray(ZY(64,b));return;}
function YV($t){var a,b,c,d;MM($t);if($t.tC!=0&&$t.tI>=$t.SH){return null;}a=Ia();$ba:{while(!($t.tI>=$t.SH&&XJ($t,0)==0)){b=$t.oG.data;c=$t.tI;$t.tI=c+1|0;d=b[c];if(d==10){break $ba;}if(d==13){if($t.tI>=$t.SH&&XJ($t,0)==0){break $ba;}if($t.oG.data[$t.tI]!=10){break $ba;}$t.tI=$t.tI+1|0;break $ba;}NJ(a,d);}}return HU(QS(a));}
function ZH($t,a){KH($t,a,1024);return;}
function LW($t){MM($t);QH($t.tG);$t.tG=null;return;}
function Vb(){var $r=new JG();ST($r);return $r;}
function ST($t){QI($t);return;}
function Da(a,b){var $r=new AE();LS($r,a,b);return $r;}
function RW($t,a){$t.wF=a;return;}
function KJ($t){return $t.wF;}
function MP($t){return $t.wH;}
function QX($t){return $t.BB;}
function LS($t,a,b){QJ($t);$t.wH=a;$t.BB=b;return;}
function WV($t){return $t.vC;}
function WT($t,a){$t.vC=a;return;}
function Fc(){var $r=new HE();DJ($r);return $r;}
function DJ($t){PT($t);return;}
function IZ(a,b){if(a===null){RZ(F());}VC_$clinit();if(a===JZ(VC.zD)){RZ(Nc());}if(b<0){RZ(Ed());}return XY(OQ(a),b);}
function XY(a,b){if (a.$meta.primitive) {if (a == $rt_bytecls()) {return $rt_createByteArray(b);}if (a == $rt_shortcls()) {return $rt_createShortArray(b);}if (a == $rt_charcls()) {return $rt_createCharArray(b);}if (a == $rt_intcls()) {return $rt_createIntArray(b);}if (a == $rt_longcls()) {return $rt_createLongArray(b);}if (a == $rt_floatcls()) {return $rt_createFloatArray(b);}if (a == $rt_doublecls()) {return $rt_createDoubleArray(b);}if (a == $rt_booleancls()) {return $rt_createBooleanArray(b);}} else {return $rt_createArray(a, b)}}
function F(){var $r=new VD();RU($r);return $r;}
function RU($t){ML($t);return;}
function Td(a,b,c,d,e){var $r=new IC();AO($r,a,b,c,d,e);return $r;}
function DZ(a,b,c){return Ud(0,a.data.length,a,b,b+c|0,0,0);}
function AY(a){return DZ(a,0,a.data.length);}
function HM($t,a){return TP($t,a,0,a.data.length);}
function TP($t,a,b,c){var d,e,f,g,h,i;if(c==0){return $t;}if(OO($t)!=0){RZ(Vb());}if(OM($t)<c){RZ(Wb());}if(b>=0){d=a.data;e=d.length;if(b<e){a=b+c|0;if(a>e){RZ(Na(QS(CM(CK(CK(CM(CK(Ia(),$rt_s(104)),a),$rt_s(45)),$rt_s(50)),e))));}if(c<0){RZ(Na(QS(CK(CM(CK(Ia(),$rt_s(51)),c),$rt_s(52)))));}f=$t.cE+$t.wG|0;g=0;while(g<c){e=$t.UE.data;h=f+1|0;i=b+1|0;e[f]=d[b];g=g+1|0;f=h;b=i;}$t.cE=$t.cE+c|0;return $t;}}RZ(Na(QS(CK(CM(CK(CM(CK(Ia(),$rt_s(53)),b),$rt_s(41)),a.data.length),$rt_s(49)))));}
function AO($t,a,b,c,d,e){LK($t,b);ZB_$clinit();$t.JI=ZB.eE;$t.wG=a;$t.UE=c;$t.cE=d;$t.LC=e;return;}
function SW($t,a,b,c){var d,e,f,g,h,i,j;if(b>=0){d=a.data;e=d.length;if(b<e){f=b+c|0;if(f>e){RZ(Na(QS(CM(CK(CK(CM(CK(Ia(),$rt_s(105)),f),$rt_s(45)),$rt_s(50)),e))));}if(OM($t)<c){RZ(Yb());}if(c<0){RZ(Na(QS(CK(CM(CK(Ia(),$rt_s(51)),c),$rt_s(52)))));}g=$t.cE+$t.wG|0;a=0;while(a<c){h=b+1|0;i=$t.UE.data;j=g+1|0;d[b]=i[g];a=a+1|0;b=h;g=j;}$t.cE=$t.cE+c|0;return $t;}}RZ(Na(QS(CK(CM(CK(CM(CK(Ia(),$rt_s(53)),b),$rt_s(41)),a.data.length),$rt_s(49)))));}
function Vd(a,b,c){var $r=new BC();NQ($r,a,b,c);return $r;}
function NQ($t,a,b,c){HW($t,a,b,c);return;}
function SN($t,a,b){var c,d,e,f,g,h,i,j,k;c=$rt_createByteArray(KY(OM(a),512));d=0;e=0;f=$rt_createCharArray(KY(OM(b),512));$ba:{while(true){if((d+32|0)>e&&FO(a)!=0){g=d;while(g<e){h=c.data;h[g-d|0]=h[g];g=g+1|0;}i=c.data;j=e-d|0;e=KY(OM(a)+j|0,i.length);SW(a,c,j,e-j|0);d=0;}if(FO(b)==0){if(FO(a)==0&&d>=e){TB_$clinit();k=TB.DE;}else{TB_$clinit();k=TB.GH;}break $ba;}g=f.data;h=0;i=KY(OM(b),g.length);g=Wd(a,b);k=YR($t,c,d,e,f,h,i,g);d=g.RG;if(k===null){if(h==g.AG){TB_$clinit();k=TB.DE;}}UW(b,f,0,g.AG);if(k!==
null){break;}}}KM(a,DP(a)-(e-d|0)|0);return k;}
function Rd(a){var $r=new SE();CW($r,a);return $r;}
function YR($t,a,b,c,d,e,f,g){var h,i,j,k,m,n,o,p,q,r,s;h=null;$ba:{$bb:{$bc:{while(true){if(b>=c){break $ba;}if(e>=f){break;}i=a.data;j=b+1|0;k=i[b]&255;if((k&128)==0){m=d.data;n=e+1|0;m[e]=k&65535;}else if((k&224)==192){if(j>=c){b=j+ -1|0;if(FM(g)!=0){break $ba;}TB_$clinit();h=TB.DE;break $ba;}o=j+1|0;m=i[j];if(PK($t,m)==0){b=o+ -2|0;h=XP(1);break $ba;}p=d.data;n=e+1|0;p[e]=((k&31)<<6|m&63)&65535;j=o;}else if((k&240)==224){if((j+2|0)>c){b=j+ -1|0;if(FM(g)!=0){break $ba;}TB_$clinit();h=TB.DE;break $ba;}p=j
+1|0;m=i[j];j=p+1|0;p=i[p];if(PK($t,m)==0){break $bb;}if(PK($t,p)==0){break $bb;}m=((k&15)<<12|(m&63)<<6|p&63)&65535;if(WR(m)!=0){b=j+ -3|0;h=XP(3);break $ba;}k=d.data;n=e+1|0;k[e]=m;}else{if((k&248)!=240){b=j+ -1|0;h=XP(1);break $ba;}if((j+3|0)>c){b=j+ -1|0;if(FM(g)!=0){break $ba;}TB_$clinit();h=TB.DE;break $ba;}if((e+2|0)>f){b=j+ -1|0;if(NR(g,2)!=0){break $ba;}TB_$clinit();h=TB.GH;break $ba;}p=j+1|0;m=i[j];b=p+1|0;q=i[p];j=b+1|0;p=i[b];if(PK($t,m)==0){break $bc;}if(PK($t,q)==0){break $bc;}if(PK($t,p)==0){break $bc;}r
=d.data;o=(k&7)<<18|(m&63)<<12|(q&63)<<6|p&63;s=e+1|0;r[e]=IX(o);n=s+1|0;r[s]=UN(o);}b=j;e=n;}break $ba;}b=j+ -3|0;h=XP(1);break $ba;}b=j+ -3|0;h=XP(1);}ZN(g,b);QV(g,e);return h;}
function CW($t,a){NQ($t,a,0.33333334,0.5);return;}
function PK($t,a){if((a&192)!=128){a=0;}else{a=1;}return a;}
function Xd(a){var $r=new XE();RT($r,a);return $r;}
function RT($t,a){WN($t,a);return;}
function Wd(a,b){var $r=new KG();LM($r,a,b);return $r;}
function NR($t,a){if(OM($t.WB)<a){a=0;}else{a=1;}return a;}
function FM($t){return FO($t.NB);}
function QV($t,a){$t.AG=a;return;}
function LM($t,a,b){QJ($t);$t.NB=a;$t.WB=b;return;}
function ZN($t,a){$t.RG=a;return;}
function W_$clinit(){W_$clinit=function(){};
LT=function(a){return ZX(UZ(W),a);};
PO=function(){var a,b;W.ZF=Yd($rt_s(106),0);W.dE=Yd($rt_s(107),1);W.ZE=Yd($rt_s(108),2);W.bB=Yd($rt_s(109),3);a=VZ(W,4);b=a.data;b[0]=W.ZF;b[1]=W.dE;b[2]=W.ZE;b[3]=W.bB;W.oC=a;return;};
ZS=function(){return W.oC.aI();};
ZD=function($t,a,b){SP($t,a,b);return;};
PO();}
function Yd(a,b){var $r=new W();ZD($r,a,b);return $r;}
function ZY(a,b){if(a>b){b=a;}return b;}
function KY(a,b){if(a<b){b=a;}return b;}
function BY(a){if(a<=0){a= -a|0;}return a;}
function L_$clinit(){L_$clinit=function(){};
MT=function(a){L.zB=a;if(L.zB!=0){ZC_$clinit();VX(WV(ZC.hE.data[L.HH.selectedIndex]));WC_$clinit();MR(WV(WC.YE.data[L.Z.selectedIndex]));}return;};
ET=function(){OW();return;};
MR=function(a){var b,c,d;if(L.yD.firstChild!==null){L.yD.removeChild(L.yD.firstChild);}b=L.yD;c=L.sE.createTextNode($rt_ustr(a));b.appendChild(c);d=L.yD;c=$rt_ustr(a);d.value=c;return;};
RN=function(a){if(L.QF.firstChild!==null){L.QF.removeChild(L.QF.firstChild);}if(a===null){L.QF.innerHTML="Ready.";}else{L.QF.innerHTML=$rt_ustr(a);}return;};
FR=function(){return L.Z;};
VX=function(a){var b,c,d;if(L.FB.firstChild!==null){L.FB.removeChild(L.FB.firstChild);}b=L.FB;c=L.sE.createTextNode($rt_ustr(a));b.appendChild(c);d=L.FB;a=$rt_ustr(a);d.value=a;return;};
QP=function(){return L.zB;};
OW=function(){var a,b,c,d,$je;a=Ab();UH(a,$rt_str(L.FB.value));PP(Gb(),a,$rt_str(L.yD.value));b=SH(L.IC);if(b!==null&&C(WV(b))!=0){c=TY(CL(a),WV(b));d=OZ(CL(a),WV(b));OL(US(Zd(a),L.sE));b=Sc();XX(b,a,c,d);$ba:{$bb:{try{RN(MO(Kb(5),b));}catch($e){$je=$e.$javaException;if($je&&$je instanceof EC){a=$je;break $bb;}else {throw $e;}}break $ba;}RN($rt_s(110));}return;}RN($rt_s(111));return;};
PR=function(){L.sE=KZ();L.zH=L.sE.getElementById("version-text");L.HH=L.sE.getElementById("layout-select");L.Z=L.sE.getElementById("config-select");L.FB=L.sE.getElementById("layout-input");L.yD=L.sE.getElementById("config-input");L.HE=L.sE.getElementById("analyze-button");L.mF=L.sE.getElementById("keyboard-panel");L.QF=L.sE.getElementById("output-panel");L.zB=0;L.IC=$rt_s(112);return;};
ZU=function(a){var b,c,d,e,f,g,h,i,j,k,m,n,o;b=L.zH;c="v1.14";b.innerHTML=c;RN($rt_s(113));OL(null);DM(L.IC);b=L.sE.getElementById("layoutOptionDummy");d=L.HH.options;e=0;d.remove(e);ZC_$clinit();f=ZC.hE.data;e=f.length;g=0;while(g<e){h=f[g];c=b.cloneNode(!!1);d=$rt_ustr(MP(h));c.text=d;L.HH.options.add(c);g=g+1|0;}b=L.HH;i=$rt_s(114);j=Ae();b.addEventListener($rt_ustr(i),CY(j,"handleEvent"));e=L.sE.getElementById("configOptionDummy");d=L.Z.options;f=0;d.remove(f);WC_$clinit();k=WC.YE.data;m=k.length;n=0;while
(n<m){d=k[n];o=e.cloneNode(!!1);d=$rt_ustr(MP(d));o.text=d;L.Z.options.add(o);n=n+1|0;}b=L.Z;c=2;b.selectedIndex=c;b=L.Z;c=$rt_s(114);j=Be();b.addEventListener($rt_ustr(c),CY(j,"handleEvent"));b=L.HE;d=$rt_s(115);j=Ce();b.addEventListener($rt_ustr(d),CY(j,"handleEvent"));return;};
WQ=function(){return L.HH;};
OL=function(a){if(L.mF.firstChild!==null){L.mF.removeChild(L.mF.firstChild);}if(a===null){L.mF.hidden=!!1;}else{L.mF.appendChild(a);L.mF.hidden=!!0;}return;};
PR();}
function KD_$clinit(){KD_$clinit=function(){};
GI=function(){var a,b;a=VZ(JC,10);b=a.data;b[0]=$rt_s(116);b[1]=$rt_s(117);b[2]=$rt_s(118);b[3]=$rt_s(119);b[4]=null;b[5]=null;b[6]=$rt_s(120);b[7]=$rt_s(118);b[8]=$rt_s(117);b[9]=$rt_s(116);KD.xE=a;return;};
RF=function($t,a){QJ($t);$t.bE=a;return;};
GI();}
function Zd(a){var $r=new KD();RF($r,a);return $r;}
function HL($t,a,b){var c,d,e;c=a.createElement("span");d=$rt_s(121);e=$rt_s(122);c.setAttribute($rt_ustr(d),$rt_ustr(e));a=$rt_s(123);b=QS(CK(CM(CK(Ia(),$rt_s(124)),b),$rt_s(125)));c.setAttribute($rt_ustr(a),$rt_ustr(b));return c;}
function GO($t,a,b){var c;$ba:{c=YK($t.bE);BB_$clinit();if(c===BB.OE){if(a==0&&b==0){return 12;}if(a==1&&b==0){return 18;}if(a!=2){break $ba;}if(b!=0){break $ba;}return 30;}BB_$clinit();if(c!==BB.wB){BB_$clinit();if(c!==BB.dH){break $ba;}if(b!=0&&b!=5){break $ba;}return 12;}if(a==0&&b==0){return 12;}if(a==1&&b==0){return 18;}if(a==2&&b==0){return 6;}if(a==2&&b==5){return 24;}}return 0;}
function UX($t,a,b){var c,d,e;c=a.createElement("span");c.setAttribute("class","key");d=KD.xE.data[OT(b)];if(d===null){c.hidden=!!1;}else{c.setAttribute("style",$rt_ustr(QS(CK(CK(Ia(),$rt_s(126)),d))));}e=a.createTextNode($rt_ustr(GV(PV(b))));c.appendChild(e);return c;}
function US($t,a){var b,c,d,e,f;b=a.createElement("div");c=0;while(c<FV($t.bE)){d=0;while(d<LQ($t.bE)){e=GO($t,c,d);if(e>0){b.appendChild(HL($t,a,e));}e=ZQ($t.bE,c,d);if(e===null){b.appendChild(HL($t,a,24));}else{b.appendChild(UX($t,a,e));}d=d+1|0;}f=a.createElement("br");b.appendChild(f);c=c+1|0;}return b;}
function CY(a,b){var name='jso$functor$'+b;if(!a[name]){var fn=function(){return a[b].apply(a,arguments);};a[name]=function(){return fn;};}return a[name]();}
function NZ(a){var b,c,d;b=De(IU(a));c=FY(b);d=$rt_createIntArray(c);a=0;while(a<c){d.data[a]=FY(b);a=a+1|0;}return d;}
function Ee(a,b){var $r=new GC();QW($r,a,b);return $r;}
function QW($t,a,b){QJ($t);$t.hI=a;$t.dD=b;return;}
function Fe(a,b){var $r=new BE();VS($r,a,b);return $r;}
function VS($t,a,b){QW($t,a,null);$t.UC=b;return;}
function Ge(){var $r=new CC();OJ($r);return $r;}
function OJ($t){QJ($t);return;}
function Wa(){var $r=new JF();PQ($r);return $r;}
function PQ($t){OJ($t);return;}
function Db(a,b,c){var $r=new FF();VJ($r,a,b,c);return $r;}
function VJ($t,a,b,c){QJ($t);$t.N=IU(KL(a));$t.eI=b;$t.OI=c;$t.gH=ZT($t);return;}
function ER($t){var a;if($t.gH>4){a=1;}else{a=0;}return a;}
function ZT($t){if($t.OI<=3){return $t.OI;}if($t.OI==4){return 3;}if($t.OI==5){return 6;}if($t.OI>=6&&$t.OI<=9){return $t.OI;}return 9;}
function TH($t){return $t.eI;}
function CT($t,a){$t.gH=a;return;}
function EU($t){return $t.fE;}
function OT($t){return $t.gH;}
function HI($t){return $t.OI;}
function LI($t){return $t.N;}
function EX($t,a){$t.fE=a;return;}
function NN($t,a){var b,c,d;b=$t.N.data;c=b.length;d=0;while(d<c){if(b[d]==SJ(a)){return 1;}d=d+1|0;}return 0;}
function PV($t){return $t.N.data[0];}
function Ud(a,b,c,d,e,f,g){var $r=new ZE();EL($r,a,b,c,d,e,f,g);return $r;}
function OO($t){return $t.VC;}
function EL($t,a,b,c,d,e,f,g){AO($t,a,b,c,d,e);$t.CB=f;$t.VC=g;return;}
function Wb(){var $r=new YE();QM($r);return $r;}
function QM($t){ML($t);return;}
function He(a,b){var $r=new IG();CJ($r,a,b);return $r;}
function LJ($t){return $t.oE;}
function MY(a){var b,c,d,e;b=Long_ZERO;c=0;while(true){d=a.data;e=d.length;if(c>=e){break;}b=Long_add(b,LL(d[c]));c=c+1|0;}a=0;while(a<e){d[a].oE=Long_toNumber(LL(d[a]))/Long_toNumber(b);a=a+1|0;}return;}
function FZ(a,b){var c,d,e,f,g,h,$je;c=Eb();d=Cb(b);$ba:{while(true){try{e=YV(d);if(e===null){break $ba;}f=QZ(e,32);if(KU(e,$rt_s(14))==0&&MQ(f)>=2){g=KL(EW(f,0));if(C(g)==2&&YI(a,EP(g,0))>=0&&YI(a,EP(g,1))>=0){JW(c,He(g,JQ(EW(f,1))));}}continue;}catch($e){$je=$e.$javaException;if($je){h=$je;}else {throw $e;}}}LW(d);RZ(h);}LW(d);a=EJ(c,VZ(IG,MQ(c)));MY(a);return a;}
function HK($t){return $t.gC;}
function LL($t){return $t.HB;}
function OZ(a,b){var c,$je;$ba:{try{a=FZ(a,Bb(b));}catch($e){$je=$e.$javaException;if($je&&$je instanceof EC){c=$je;break $ba;}else {throw $e;}}return a;}MB_$clinit();JU(MB.sD,$rt_s(127));BQ(c);return null;}
function CJ($t,a,b){QJ($t);$t.gC=a;$t.HB=b;return;}
function Ie(){var $r=new HC();NH($r);return $r;}
function NH($t){QJ($t);return;}
function Je(a){var $r=new YF();FI($r,a);return $r;}
function Ke(a,b){var $r=new YF();PS($r,a,b);return $r;}
function Bd(){var $r=new YF();BI($r);return $r;}
function PY(a,b){if(a!==b&&WP(a,b)==0){a=0;}else{a=1;}return a;}
function FI($t,a){PS($t,a,0.75);return;}
function QL($t,a,b,c){var d;d=$t.dG.data[b];while(d!==null){if(d.UC==c){if(PY(a,d.hI)!=0){break;}}d=d.UH;}return d;}
function WY(a){var b;if(a>=1073741824){return 1073741824;}if(a==0){return 16;}b=a-1|0;b=b|b>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function PS($t,a,b){var c;NH($t);if(a>=0&&b>0.0){c=WY(a);$t.ED=0;$t.dG=IO($t,c);$t.dI=b;LU($t);return;}RZ(Nc());}
function KN($t,a,b){var c,d,e,f,g;if(a===null){c=AX($t);if(c===null){$t.qH=$t.qH+1|0;c=VT($t,null,0,0);a=$t.ED+1|0;$t.ED=a;if(a>$t.lG){IV($t);}}}else{d=GZ(a);e=d&($t.dG.data.length-1|0);c=QL($t,a,e,d);if(c===null){$t.qH=$t.qH+1|0;c=VT($t,a,e,d);f=$t.ED+1|0;$t.ED=f;if(f>$t.lG){IV($t);}}}g=c.dD;c.dD=b;return g;}
function WO($t,a){var b;b=RL($t,a);if(b===null){return null;}return b.dD;}
function IO($t,a){return VZ(BE,a);}
function AN($t,a){var b,c,d,e,f,g,h;if(a==0){a=1;}else{a=a<<1;}b=WY(a);c=IO($t,b);d=0;e=b-1|0;while(d<$t.dG.data.length){f=$t.dG.data[d];$t.dG.data[d]=null;while(f!==null){g=c.data;h=f.UC&e;a=f.UH;f.UH=g[h];g[h]=f;f=a;}d=d+1|0;}$t.dG=c;LU($t);return;}
function RL($t,a){var b;if(a===null){a=AX($t);}else{b=GZ(a);a=QL($t,a,b&($t.dG.data.length-1|0),b);}return a;}
function LU($t){$t.lG=$t.dG.data.length*$t.dI|0;return;}
function ZL($t,a,b){return KN($t,a,b);}
function VT($t,a,b,c){var d;d=Fe(a,c);d.UH=$t.dG.data[b];$t.dG.data[b]=d;return d;}
function IV($t){AN($t,$t.dG.data.length);return;}
function GZ(a){return RO(a);}
function AX($t){var a;a=$t.dG.data[0];while(a!==null){if(a.hI===null){break;}a=a.UH;}return a;}
function BI($t){FI($t,16);return;}
function TB_$clinit(){TB_$clinit=function(){};
XP=function(a){return Le(2,a);};
QG=function($t,a,b){QJ($t);$t.CD=a;$t.kG=b;return;};
OI=function(){TB.DE=Le(0,0);TB.GH=Le(1,0);return;};
OI();}
function Le(a,b){var $r=new TB();QG($r,a,b);return $r;}
function VV($t){var a;if(UO($t)==0&&LP($t)==0){a=0;}else{a=1;}return a;}
function UO($t){var a;if($t.CD!=2){a=0;}else{a=1;}return a;}
function IL($t){var a;if($t.CD!=0){a=0;}else{a=1;}return a;}
function QO($t){var a;if($t.CD!=1){a=0;}else{a=1;}return a;}
function OK($t){if(VV($t)!=0){return $t.kG;}RZ(Jd());}
function SX($t){switch($t.CD){case 0:RZ(Me());case 1:RZ(Jb());case 2:RZ(Ra($t.kG));case 3:RZ(Ne($t.kG));default:}return;}
function LP($t){var a;if($t.CD!=3){a=0;}else{a=1;}return a;}
function EZ(){return window.$rt_nextId();}
function YX(a){return window.String.fromCharCode(a);}
function VY(){return window;}
function DY(a){var copy=new a.constructor();for(var field in a){if(!a.hasOwnProperty(field)){continue;}copy[field]=a[field];}return copy;}
function LY(a){var c='$$enumConstants$$';BB[c]=RH;W[c]=ZS;LY=function(cls){if(!cls.hasOwnProperty(c)){return null;}return cls[c]();};return LY(a);}
function MZ(){return window;}
function HB_$clinit(){HB_$clinit=function(){};
MG=function($t,a){QJ($t);$t.bD=a;return;};
TI=function(){HB.wI=Oe($rt_s(128));HB.wD=Oe($rt_s(129));HB.eF=Oe($rt_s(130));return;};
TI();}
function Oe(a){var $r=new HB();MG($r,a);return $r;}
function Me(){var $r=new CE();HS($r);return $r;}
function HS($t){ML($t);return;}
function Od(a){var $r=new YG();VL($r,a);return $r;}
function VL($t,a){NS($t);$t.zE=a;return;}
function QZ(a,b){var c,d,e;c=Eb();d=Ad();e=0;while(e<C(a)){if(EP(a,e)!=b){RK(d,EP(a,e));}if(!(EP(a,e)!=b&&e!=(C(a)-1|0))&&XV(d)>0){JW(c,IS(d));GL(d,0);}e=e+1|0;}return c;}
function Pe(a){var $r=new GF();EV($r,a);return $r;}
function EV($t,a){GK($t,a);return;}
function Mb(a){var $r=new OE();RR($r,a);return $r;}
function Ua(a,b){var $r=new OE();XN($r,a,b);return $r;}
function HR($t,a,b,c){var d,e,f,g,h,i;d=a.data;e=LZ(a,b,c-b|0);f=$rt_createByteArray(ZY(16,KY(d.length,1024)));g=AY(f);h=ES($t.RH);HB_$clinit();b=DH(h,HB.wD);HB_$clinit();b=GR(b,HB.wD);while(true){i=QO(CQ(b,e,g,1));GN($t,f,0,DP(g));HT(g);if(i==0){break;}}while(true){a=QO(AK(b,g));GN($t,f,0,DP(g));HT(g);if(a==0){break;}}return;}
function RR($t,a){XN($t,a,0);return;}
function XN($t,a,b){VK($t,a);$t.iF=Ia();$t.KI=$rt_createCharArray(32);$t.WF=b;$t.RH=Pd();return;}
function CI($t){var a;if($t.CI===null){$t.BG=1;}if($t.BG!=0){a=0;}else{a=1;}return a;}
function JU($t,a){NJ(CK($t.iF,a),10);QN($t);return;}
function GN($t,a,b,c){var $je;if(CI($t)==0){return;}$ba:{$bb:{try{$t.CI.p(a,b,c);}catch($e){$je=$e.$javaException;if($je&&$je instanceof EC){a=$je;break $bb;}else {throw $e;}}break $ba;}$t.BG=1;}return;}
function QN($t){var a;if(CR($t.iF)<=$t.KI.data.length){a=$t.KI;}else{a=$rt_createCharArray(CR($t.iF));}XI($t.iF,0,CR($t.iF),a,0);HR($t,a,0,CR($t.iF));BW($t.iF,0);return;}
function De(a){var $r=new PG();PX($r,a);return $r;}
function PX($t,a){QJ($t);$t.ZG=a;return;}
function Ne(a){var $r=new YD();KS($r,a);return $r;}
function KS($t,a){HX($t);$t.nE=a;return;}
function Be(){var $r=new BG();JP($r);return $r;}
function JP($t){QJ($t);return;}
function BK($t,a){WC_$clinit();MR(WV(WC.YE.data[FR().selectedIndex]));OL(null);RN(null);return;}
function Ce(){var $r=new ZF();FP($r);return $r;}
function FP($t){QJ($t);return;}
function MJ($t,a){if(QP()!=0){ET();}return;}
function Yb(){var $r=new JE();SQ($r);return $r;}
function SQ($t){ML($t);return;}
function Ae(){var $r=new AG();XH($r);return $r;}
function XH($t){QJ($t);return;}
function UJ($t,a){ZC_$clinit();VX(WV(ZC.hE.data[WQ().selectedIndex]));OL(null);RN(null);return;}
function Va(){var $r=new SG();YS($r);return $r;}
function YO($t,a){MZ().$rt_putStderr(a);return;}
function YS($t){EH($t);return;}
function Vc(a,b){var $r=new SD();HJ($r,a,b);return $r;}
function VQ($t){if($t.mI.readyState==4&&$t.mI.status==200){VW($t.qE,$rt_str($t.mI.responseText));}return;}
function HJ($t,a,b){$t.qE=a;$t.mI=b;QJ($t);return;}
function Qe(a){var $r=new ME();JK($r,a);return $r;}
function RI($t){var a;if($t.IB!=0){a=$t.zC.$meta.item;if(a===null){a=null;}else{a=A(a);}$t.rC=a;$t.IB=0;}return $t.rC;}
function GY(){return A(VY().$rt_longcls());}
function OQ($t){return $t.zC;}
function IR($t){return $t.zC.$meta.enum?1:0;}
function JY(){return A(VY().$rt_intcls());}
function AZ(){return A(VY().$rt_doublecls());}
function TV($t){if($t.tB===null){$t.tB=HU($rt_str($t.zC.$meta.name));}return $t.tB;}
function A(a){var b;if(a===null){return null;}b=a.classObject;if(b===null){b=Qe(a);}return b;}
function UY(){return A(VY().$rt_charcls());}
function JK($t,a){var b;QJ($t);$t.IB=1;$t.zC=a;b=$t;a.classObject=b;return;}
function NY(){return A(VY().$rt_floatcls());}
function QU($t){var a;if(IR($t)==0){a=null;}else{a=LY($t.zC);}return a;}
function BZ(){return A(VY().$rt_voidcls());}
function WC_$clinit(){WC_$clinit=function(){};
UU=function(){var a,b;a=VZ(AE,4);b=a.data;b[0]=Da($rt_s(131),$rt_s(132));b[1]=Da($rt_s(133),$rt_s(134));b[2]=Da($rt_s(135),$rt_s(136));b[3]=Da($rt_s(137),$rt_s(138));WC.YE=a;return;};
UU();}
$rt_metadata([E,"java.lang.Object",0,[],0,0,[],["CC",function(){return RQ(this);},"aI",function(){return NW(this);},"a",function(){QJ(this);}],RC,"com.spwebgames.keyboard.FreqResource",E,[],0,RC_$clinit,['SH','OU'],[],DB,"java.lang.Throwable",E,[],0,0,[],["PB",function(){return NX(this);},"o",function(a,b){FW(this,a,b);},"JH",function(){BQ(this);},"b",function(a){DT(this,a);},"uH",function(a){KV(this,a);},"HC",function(){return SK(this);},"a",function(){ON(this);},"h",function(a){PN(this,a);}],O,"java.lang.Exception",
DB,[],0,0,[],["b",function(a){FJ(this,a);},"a",function(){PT(this);}],J,"java.lang.RuntimeException",O,[],0,0,[],["b",function(a){TQ(this,a);},"a",function(){ML(this);}],FC,"java.lang.IndexOutOfBoundsException",J,[],0,0,[],["b",function(a){QR(this,a);},"a",function(){XT(this);}],T,"java.io.Serializable",E,[],0,0,[],[],P,"java.lang.Number",E,[T],0,0,[],[],M,"java.lang.Comparable",E,[],0,0,[],[],DC,"java.lang.Float",P,[M],0,DC_$clinit,'AS',[],Q,"org.teavm.jso.JSObject",E,[],0,0,[],[],LC,"org.teavm.jso.dom.xml.Node",
E,[Q],0,0,[],[],NC,"org.teavm.jso.dom.xml.Document",E,[LC],0,0,[],[],AF,"java.util.Arrays",E,[],0,0,[],[],EC,"java.io.IOException",O,[],0,0,[],["a",function(){HO(this);}],AB,"java.nio.charset.CharacterCodingException",EC,[],0,0,[],["a",function(){HX(this);}],RG,"java.nio.charset.MalformedInputException",AB,[],0,0,[],["c",function(a){GP(this,a);}],ID,"java.lang.AutoCloseable",E,[],0,0,[],[],KB,"java.io.Closeable",E,[ID],0,0,[],[],FD,"java.io.Flushable",E,[],0,0,[],[],N,"java.io.OutputStream",E,[KB,FD],0,0,[],
["p",function(a,b,c){ZK(this,a,b,c);},"a",function(){EH(this);}],UF,"java.lang.ConsoleOutputStreamStdout",N,[],0,0,[],["l",function(a){ZI(this,a);},"a",function(){NK(this);}],MB,"java.lang.System",E,[],0,MB_$clinit,['EI','VU'],[],VE,"java.nio.charset.impl.BufferedEncoder$Controller",E,[],0,0,[],["J",function(a){return SI(this,a);},"w",function(){return NI(this);},"t",function(a){RX(this,a);},"uB",function(a,b){UL(this,a,b);},"I",function(a){IM(this,a);}],OC,"java.lang.Integer",P,[M],0,OC_$clinit,['RP','MX',
'IJ'],[],CF,"com.spwebgames.keyboard.Keyboard",E,[],0,0,[],["eB",function(a){return UH(this,a);},"AI",function(){return FV(this);},"pH",function(a){return ZW(this,a);},"TD",function(){return YK(this);},"FE",function(a){AQ(this,a);},"SF",function(a){PH(this,a);},"RB",function(a){return BS(this,a);},"oI",function(a,b){GS(this,a,b);},"jE",function(a,b){return ZQ(this,a,b);},"IE",function(){return LQ(this);},"a",function(){JS(this);},"WD",function(){return TT(this);},"X",function(){return CL(this);}],TD,"java.lang.CloneNotSupportedException",
O,[],0,0,[],["a",function(){RS(this);}],TE,"com.spwebgames.charinfo.CharFreq",E,[],0,0,[],["y",function(){return EO(this);},"WE",function(a,b){SL(this,a,b);},"uD",function(){return AU(this);},"C",function(){return EM(this);}],CB,"java.lang.Character",E,[M],0,CB_$clinit,['HH','JO','KX','CV','SJ','WR','PM','PI','YN','QQ','PJ','VI','JV','UN','IX','XM','GM'],[],XD,"com.spwebgames.keyboard.FingerConfig",E,[],0,0,[],["jH",function(a,b){return ZR(this,a,b);},"JD",function(a,b){return PP(this,a,b);},"a",function(){
WM(this);}],R,"org.teavm.jso.dom.events.EventTarget",E,[Q],0,0,[],[],FE,"org.teavm.jso.dom.html.HTMLDocument",E,[NC,R],0,0,[],[],LD,"java.lang.Long",P,[M],0,LD_$clinit,['JQ','FT','VO'],[],YC,"java.lang.Runnable",E,[],0,0,[],[],X,"java.lang.Thread",E,[YC],0,X_$clinit,['H','ZM','NG','I','SF','HQ'],["dC",function(a,b){NG(this,a,b);},"b",function(a){SF(this,a);}],QC,"java.util.Map",E,[],0,0,[],[],PF,"java.nio.charset.BufferOverflowException",J,[],0,0,[],["a",function(){TM(this);}],VC,"java.lang.Void",E,[],0,VC_$clinit,
'MS',[],DD,"com.spwebgames.keyboard.KeyboardAnalysisReport",E,[],0,0,[],[],DG,"com.spwebgames.keyboard.web.KeyboardAnalysisWebHTMLReport",E,[DD],0,0,[],["kE",function(a,b){WL(this,a,b);},"yB",function(a,b){IN(this,a,b);},"c",function(a){LV(this,a);},"SB",function(a,b,c,d,e,f,g){JJ(this,a,b,c,d,e,f,g);},"NG",function(a,b,c){IH(this,a,b,c);},"qC",function(a,b,c){BT(this,a,b,c);},"tE",function(a,b){TU(this,a,b);},"rB",function(a){return MO(this,a);}],NB,"java.lang.CharSequence",E,[],0,0,[],[],U,"java.lang.Error",
DB,[],0,0,[],["b",function(a){GH(this,a);},"o",function(a,b){WS(this,a,b);},"h",function(a){YQ(this,a);}],FB,"java.lang.LinkageError",U,[],0,0,[],["b",function(a){GK(this,a);}],Z,"java.nio.Buffer",E,[],0,0,[],["c",function(a){LK(this,a);},"PC",function(){return XL(this);},"OG",function(){return HT(this);},"KG",function(){return FO(this);},"QB",function(){return OM(this);},"OH",function(){return DP(this);},"rH",function(){return AV(this);},"LB",function(a){return KM(this,a);},"mB",function(){return JI(this);
}],LB,"java.lang.Appendable",E,[],0,0,[],[],OD,"java.lang.Readable",E,[],0,0,[],[],UB,"java.nio.CharBuffer",Z,[NB,LB,OD,M],0,0,[],["H",function(a,b,c){KI(this,a,b,c);},"cF",function(a,b,c){return EQ(this,a,b,c);},"WH",function(a){return SU(this,a);},"JG",function(){return YT(this);},"XC",function(a,b,c){return UW(this,a,b,c);},"fG",function(a){return RJ(this,a);},"yF",function(a,b,c){return FN(this,a,b,c);},"xD",function(){return AT(this);}],SB,"java.nio.CharBufferImpl",UB,[],0,0,[],["H",function(a,b,c){DW(this,
a,b,c);},"r",function(){return XU(this);}],MF,"java.nio.CharBufferOverArray",SB,[],0,0,[],["gG",function(a){return AP(this,a);},"VG",function(){return NM(this);},"c",function(a){UR(this,a);},"EC",function(){return SO(this);},"eC",function(a,b,c,d,e,f){CX(this,a,b,c,d,e,f);},"KB",function(){return UT(this);},"mG",function(a,b){LH(this,a,b);}],XC,"org.teavm.jso.dom.events.LoadEventTarget",E,[R],0,0,[],[],WF,"java.lang.StringIndexOutOfBoundsException",FC,[],0,0,[],["a",function(){JL(this);}],WB,"java.io.FilterOutputStream",
N,[],0,0,[],["z",function(a){VK(this,a);}],GB,"java.io.Reader",E,[KB],0,0,[],["aD",function(a){BP(this,a);},"a",function(){KO(this);}],XB,"java.nio.charset.CharsetDecoder",E,[],0,0,[],["aB",function(a){return NL(this,a);},"g",function(a,b,c){HW(this,a,b,c);},"q",function(a){OP(this,a);},"YC",function(a){return II(this,a);},"FH",function(a){return NU(this,a);},"G",function(a){return CU(this,a);},"yI",function(){MI(this);},"vG",function(a){return LN(this,a);},"GG",function(a,b,c){return WK(this,a,b,c);},"LG",
function(){return IQ(this);},"YB",function(a){return HN(this,a);},"B",function(a){LO(this,a);}],ZB,"java.nio.ByteOrder",E,[],0,ZB_$clinit,['RD','MW'],["b",function(a){RD(this,a);}],WE,"org.teavm.classlib.impl.Base46",E,[],0,0,[],[],TG,"com.spwebgames.keyboard.FingerBigram",E,[],0,0,[],["QE",function(){return AI(this);},"rF",function(){return TK(this);},"AE",function(a,b,c){PW(this,a,b,c);},"pI",function(){return WH(this);}],CD,"java.util.Comparator",E,[],0,0,[],[],HG,"java.lang.String$1",E,[CD],0,0,[],["a",
function(){FH(this);}],K,"java.lang.AbstractStringBuilder",E,[NB,T],0,K_$clinit,['LF','KE','AL','KR'],["OB",function(a){return MU(this,a);},"XG",function(a){return JR(this,a);},"qG",function(a){return CS(this,a);},"i",function(a){JM(this,a);},"mC",function(a,b){CN(this,a,b);},"k",function(a,b){return XS(this,a,b);},"ND",function(a,b){return EN(this,a,b);},"m",function(a,b,c,d){YM(this,a,b,c,d);},"f",function(){return BL(this);},"d",function(){return IP(this);},"a",function(){LF(this);},"GC",function(a,b,c){
return FS(this,a,b,c);},"c",function(a){KE(this,a);},"u",function(a,b){return OH(this,a,b);},"D",function(a,b,c){return LR(this,a,b,c);},"rI",function(a){return XQ(this,a);},"K",function(a,b){return RM(this,a,b);},"GI",function(a){return DQ(this,a);},"E",function(a,b,c,d){return DL(this,a,b,c,d);},"e",function(a){UQ(this,a);},"s",function(a,b){return ZJ(this,a,b);},"wC",function(a){return BJ(this,a);}],WD,"java.lang.StringBuilder",K,[LB],0,0,[],["qF",function(a,b){return CO(this,a,b);},"sC",function(a){return CM(this,
a);},"nG",function(a){return CK(this,a);},"zF",function(a,b){return WU(this,a,b);},"KE",function(a,b){return OV(this,a,b);},"i",function(a){BW(this,a);},"k",function(a,b){return DI(this,a,b);},"m",function(a,b,c,d){XI(this,a,b,c,d);},"VB",function(a){return GJ(this,a);},"f",function(){return QS(this);},"d",function(){return CR(this);},"a",function(){IT(this);},"u",function(a,b){return FX(this,a,b);},"tD",function(a,b){return QK(this,a,b);},"D",function(a,b,c){return MH(this,a,b,c);},"YD",function(a){return XO(this,
a);},"FC",function(a){return NJ(this,a);},"nD",function(a){return IK(this,a);},"K",function(a,b){return ZO(this,a,b);},"E",function(a,b,c,d){return HV(this,a,b,c,d);},"e",function(a){GW(this,a);},"s",function(a,b){return FK(this,a,b);},"DD",function(a,b,c){return TW(this,a,b,c);},"LI",function(a,b,c,d){return NV(this,a,b,c,d);}],S,"java.lang.IllegalArgumentException",J,[],0,0,[],["b",function(a){LX(this,a);},"a",function(){NS(this);}],QF,"java.nio.charset.UnsupportedCharsetException",S,[],0,0,[],["b",function(a)
{KP(this,a);}],NE,"java.util.ConcurrentModificationException",J,[],0,0,[],["a",function(){RV(this);}],SC,"java.lang.reflect.AnnotatedElement",E,[],0,0,[],[],EG,"java.io.ByteArrayOutputStream",N,[],0,0,[],["CG",function(a){return NO(this,a);},"e",function(a){NP(this,a);},"l",function(a){XK(this,a);},"c",function(a){UP(this,a);},"p",function(a,b,c){TO(this,a,b,c);},"a",function(){AW(this);}],QB,"java.lang.Double",P,[M],0,QB_$clinit,['QT','DV','SM'],[],PD,"com.spwebgames.keyboard.KeyboardAnalysis",E,[],0,0,[],
["aF",function(){return FL(this);},"PH",function(a,b){return OX(this,a,b);},"SE",function(a){return DN(this,a);},"oF",function(a,b){return VR(this,a,b);},"JE",function(a,b){return KT(this,a,b);},"YG",function(a){HP(this,a);},"DG",function(a,b){return FQ(this,a,b);},"DH",function(){return WX(this);},"XB",function(a,b,c){XX(this,a,b,c);},"kH",function(){return PU(this);},"cI",function(){return DO(this);},"a",function(){MN(this);},"rD",function(){return DK(this);},"MG",function(){return UM(this);},"sI",function(a,
b){return YL(this,a,b);}],BD,"org.teavm.jso.dom.events.MouseEventTarget",E,[R],0,0,[],[],AD,"org.teavm.jso.dom.events.KeyboardEventTarget",E,[R],0,0,[],[],ND,"org.teavm.jso.dom.events.FocusEventTarget",E,[R],0,0,[],[],GD,"org.teavm.jso.browser.WindowEventTarget",E,[BD,AD,XC,R,ND],0,0,[],[],IF,"java.lang.AssertionError",U,[],0,0,[],["o",function(a,b){TX(this,a,b);}],UC,"com.spwebgames.keyboard.web.ResourceLoader",E,[],0,UC_$clinit,['DE','CP','DM','VW','KW'],["bC",function(a){AM(this,a);},"nI",function(a){DE(this,
a);},"AH",function(){DX(this);}],TC,"java.lang.Iterable",E,[],0,0,[],[],YB,"java.util.Collection",E,[TC],0,0,[],[],RB,"java.util.AbstractCollection",E,[YB],0,0,[],["DB",function(a){return EJ(this,a);},"a",function(){VP(this);}],PC,"java.util.List",E,[YB],0,0,[],[],AC,"java.util.AbstractList",RB,[PC],0,0,[],["YH",function(){return YJ(this);},"GD",function(a){return JW(this,a);},"a",function(){SS(this);}],OB,"java.lang.Cloneable",E,[],0,0,[],[],DF,"java.util.ArrayList",AC,[OB,T],0,0,[],["vD",function(a){JX(this,
a);},"c",function(a){WI(this,a);},"bH",function(a){TJ(this,a);},"e",function(a){VM(this,a);},"LH",function(a,b){JT(this,a,b);},"WC",function(a){return EW(this,a);},"NE",function(){return MQ(this);},"a",function(){BM(this);}],EF,"java.nio.charset.CoderMalfunctionError",U,[],0,0,[],["h",function(a){EK(this,a);}],HD,"org.teavm.jso.core.JSArrayReader",E,[Q],0,0,[],[],ED,"org.teavm.jso.browser.StorageProvider",E,[],0,0,[],[],RE,"org.teavm.jso.browser.Window",E,[Q,GD,HD,ED],0,0,[],[],ZC,"com.spwebgames.keyboard.KeyboardResource",
E,[],0,ZC_$clinit,'TR',[],NF,"java.lang.StringBuffer",K,[LB],0,0,[],["i",function(a){GL(this,a);},"EH",function(a,b){return KQ(this,a,b);},"k",function(a,b){return UK(this,a,b);},"f",function(){return IS(this);},"d",function(){return XV(this);},"a",function(){YP(this);},"aE",function(a){return RK(this,a);},"e",function(a){NT(this,a);}],JC,"java.lang.String",E,[NB,M,T],0,JC_$clinit,['BF','GV','AH','HU','QD','OF','IE','VN'],["lD",function(a,b){return TN(this,a,b);},"gD",function(a,b,c,d){BF(this,a,b,c,d);},"QD",
function(){return BU(this);},"gF",function(a){return KU(this,a);},"TE",function(){return G(this);},"oB",function(){return RO(this);},"JC",function(a,b){return MK(this,a,b);},"KH",function(){return IU(this);},"vH",function(a){return EP(this,a);},"BE",function(a,b){return OS(this,a,b);},"Q",function(a){return YI(this,a);},"m",function(a,b,c,d){D(this,a,b,c,d);},"f",function(){return GT(this);},"d",function(){return C(this);},"IG",function(a,b,c){AH(this,a,b,c);},"jD",function(a){return JH(this,a);},"ZD",function(a)
{return BR(this,a);},"UD",function(a){return WP(this,a);},"sH",function(a,b,c,d){FU(this,a,b,c,d);},"JB",function(a,b,c){QD(this,a,b,c);},"PF",function(a){return GQ(this,a);},"DC",function(a,b){return VH(this,a,b);},"lE",function(a,b,c,d){OF(this,a,b,c,d);},"F",function(a){IE(this,a);},"vB",function(){return MV(this);},"kB",function(){return KL(this);}],CH,"java.lang.NegativeArraySizeException",J,[],0,0,[],["a",function(){AR(this);}],PB,"java.nio.charset.CharsetEncoder",E,[],0,0,[],["jG",function(a){DR(this,
a);},"g",function(a,b,c){JN(this,a,b,c);},"VH",function(a){return GR(this,a);},"hF",function(a,b,c){return CQ(this,a,b,c);},"pG",function(a,b,c,d){SR(this,a,b,c,d);},"B",function(a){DU(this,a);},"AD",function(a){return DH(this,a);},"hC",function(a){return UI(this,a);},"q",function(a){DS(this,a);},"eD",function(a){return AK(this,a);}],KC,"java.nio.charset.impl.BufferedEncoder",PB,[],0,0,[],["HF",function(a,b){return ZP(this,a,b);},"g",function(a,b,c){BV(this,a,b,c);}],ZG,"java.nio.charset.impl.UTF8Encoder",KC,
[],0,0,[],["A",function(a){AJ(this,a);},"RC",function(a,b,c,d,e,f,g){return ZV(this,a,b,c,d,e,f,g);}],VB,"java.lang.UnsupportedOperationException",J,[],0,0,[],["a",function(){QI(this);}],MC,"java.util.Map$Entry",E,[],0,0,[],[],Y,"java.lang.IncompatibleClassChangeError",FB,[],0,0,[],["b",function(a){WN(this,a);}],QE,"java.lang.NoSuchMethodError",Y,[],0,0,[],["b",function(a){YU(this,a);}],V,"java.lang.annotation.Annotation",E,[],0,0,[],[],CG,"java.lang.annotation.Target",E,[V],0,0,[],[],HF,"java.lang.NumberFormatException",
S,[],0,0,[],["b",function(a){YW(this,a);},"a",function(){BO(this);}],EB,"java.lang.Enum",E,[M,T],0,0,[],["qB",function(){return UV(this);},"n",function(a,b){SP(this,a,b);}],BB,"com.spwebgames.keyboard.Keyboard$KeyboardType",EB,[],1,BB_$clinit,['GU','TS','RH','UD'],["n",function(a,b){UD(this,a,b);}],JB,"java.nio.charset.Charset",E,[M],0,JB_$clinit,['XW','WW','PL','GG','KK'],["G",function(a){return WJ(this,a);},"HD",function(a,b){GG(this,a,b);}],OG,"java.nio.charset.impl.UTF8Charset",JB,[],0,0,[],["bG",function()
{return YH(this);},"lC",function(){return ES(this);},"a",function(){XR(this);}],UG,"java.io.StringReader",GB,[],0,0,[],["fH",function(a,b,c){return BX(this,a,b,c);},"b",function(a){GX(this,a);},"cD",function(){IW(this);},"v",function(){QH(this);}],MD,"java.util.Iterator",E,[],0,0,[],[],UE,"java.util.AbstractList$1",E,[MD],0,0,[],["vI",function(){return TL(this);},"GF",function(){return BN(this);},"dF",function(){SV(this);},"MH",function(a){OR(this,a);}],GE,"java.io.BufferedReader",GB,[],0,0,[],["CF",function(a)
{return XJ(this,a);},"xC",function(){MM(this);},"ME",function(a,b){KH(this,a,b);},"DF",function(){return YV(this);},"XE",function(a){ZH(this,a);},"v",function(){LW(this);}],JG,"java.nio.ReadOnlyBufferException",VB,[],0,0,[],["a",function(){ST(this);}],AE,"com.spwebgames.keyboard.Resource",E,[],0,0,[],["EB",function(a){RW(this,a);},"kD",function(){return KJ(this);},"x",function(){return MP(this);},"IH",function(){return QX(this);},"AC",function(a,b){LS(this,a,b);},"NI",function(){return WV(this);},"EI",function(a)
{WT(this,a);}],HE,"java.lang.IllegalStateException",O,[],0,0,[],["a",function(){DJ(this);}],LE,"java.lang.reflect.Array",E,[],0,0,[],[],VD,"java.lang.NullPointerException",J,[],0,0,[],["a",function(){RU(this);}],IC,"java.nio.ByteBuffer",Z,[M],0,0,[],["tF",function(a){return HM(this,a);},"iC",function(a,b,c){return TP(this,a,b,c);},"M",function(a,b,c,d,e){AO(this,a,b,c,d,e);},"aG",function(a,b,c){return SW(this,a,b,c);}],XG,"org.teavm.platform.plugin.ResourceAccessor",E,[],0,0,[],[],BC,"java.nio.charset.impl.BufferedDecoder",
XB,[],0,0,[],["g",function(a,b,c){NQ(this,a,b,c);},"nC",function(a,b){return SN(this,a,b);}],SE,"java.nio.charset.impl.UTF8Decoder",BC,[],0,0,[],["BH",function(a,b,c,d,e,f,g){return YR(this,a,b,c,d,e,f,g);},"A",function(a){CW(this,a);},"pC",function(a){return PK(this,a);}],XE,"java.lang.NoSuchFieldError",Y,[],0,0,[],["b",function(a){RT(this,a);}],BH,"org.teavm.jso.impl.FunctorImpl",E,[V],0,0,[],[],KG,"java.nio.charset.impl.BufferedDecoder$Controller",E,[],0,0,[],["J",function(a){return NR(this,a);},"w",function()
{return FM(this);},"t",function(a){QV(this,a);},"fI",function(a,b){LM(this,a,b);},"I",function(a){ZN(this,a);}],W,"com.spwebgames.keyboard.FingerConfig$Section",EB,[],1,W_$clinit,['LT','PO','ZS','ZD'],["n",function(a,b){ZD(this,a,b);}],KF,"java.lang.Math",E,[],0,0,[],[],L,"com.spwebgames.keyboard.web.KeyboardClient",E,[],0,L_$clinit,['MT','ET','MR','RN','FR','VX','QP','OW','PR','ZU','WQ','OL'],[],KD,"com.spwebgames.keyboard.web.HTMLKeyboardRenderer",E,[],0,KD_$clinit,['GI','RF'],["S",function(a,b){return HL(this,
a,b);},"LF",function(a,b){return GO(this,a,b);},"RF",function(a,b){return UX(this,a,b);},"pF",function(a){RF(this,a);},"VD",function(a){return US(this,a);}],LG,"org.teavm.jso.impl.JS",E,[],0,0,[],[],PE,"org.teavm.jso.JSFunctor",E,[V],0,0,[],[],VF,"org.teavm.classlib.impl.unicode.UnicodeHelper",E,[],0,0,[],[],GC,"java.util.MapEntry",E,[OB,MC],0,0,[],["bI",function(a,b){QW(this,a,b);}],BE,"java.util.HashMap$HashEntry",GC,[],0,0,[],["eG",function(a,b){VS(this,a,b);}],CC,"java.io.InputStream",E,[KB],0,0,[],["a",
function(){OJ(this);}],JF,"java.lang.ConsoleInputStream",CC,[],0,0,[],["a",function(){PQ(this);}],FF,"com.spwebgames.keyboard.Key",E,[],0,0,[],["pE",function(a,b,c){VJ(this,a,b,c);},"hB",function(){return ER(this);},"ID",function(){return ZT(this);},"sG",function(){return TH(this);},"TG",function(a){CT(this,a);},"oH",function(){return EU(this);},"NC",function(){return OT(this);},"TF",function(){return HI(this);},"MD",function(){return LI(this);},"nH",function(a){EX(this,a);},"JF",function(a){return NN(this,
a);},"FG",function(){return PV(this);}],ZE,"java.nio.ByteBufferImpl",IC,[],0,0,[],["r",function(){return OO(this);},"uC",function(a,b,c,d,e,f,g){EL(this,a,b,c,d,e,f,g);}],IB,"org.teavm.jso.dom.events.EventListener",E,[Q],0,0,[],[],YE,"java.nio.BufferOverflowException",J,[],0,0,[],["a",function(){QM(this);}],IG,"com.spwebgames.charinfo.BigramFreq",E,[],0,0,[],["y",function(){return LJ(this);},"R",function(){return HK(this);},"C",function(){return LL(this);},"cB",function(a,b){CJ(this,a,b);}],HC,"java.util.AbstractMap",
E,[QC],0,0,[],["a",function(){NH(this);}],YF,"java.util.HashMap",HC,[OB,T],0,0,[],["c",function(a){FI(this,a);},"nF",function(a,b,c){return QL(this,a,b,c);},"pB",function(a,b){PS(this,a,b);},"rG",function(a,b){return KN(this,a,b);},"II",function(a){return WO(this,a);},"yG",function(a){return IO(this,a);},"hH",function(a){AN(this,a);},"rE",function(a){return RL(this,a);},"uG",function(){LU(this);},"qI",function(a,b){return ZL(this,a,b);},"kI",function(a,b,c){return VT(this,a,b,c);},"iI",function(){IV(this);},
"iH",function(){return AX(this);},"a",function(){BI(this);}],TF,"java.lang.annotation.Retention",E,[V],0,0,[],[],VG,"com.spwebgames.keyboard.web.teavm.JSFormatter",E,[],0,0,[],[],FG,"java.lang.FunctionalInterface",E,[V],0,0,[],[],TB,"java.nio.charset.CoderResult",E,[],0,TB_$clinit,['XP','QG','OI'],["PE",function(a,b){QG(this,a,b);},"FD",function(){return VV(this);},"jC",function(){return UO(this);},"O",function(){return IL(this);},"KD",function(){return QO(this);},"d",function(){return OK(this);},"SD",function()
{SX(this);},"MF",function(){return LP(this);}],XF,"org.teavm.platform.Platform",E,[],0,0,[],[],HB,"java.nio.charset.CodingErrorAction",E,[],0,HB_$clinit,['MG','TI'],["b",function(a){MG(this,a);}],CE,"java.nio.charset.BufferUnderflowException",J,[],0,0,[],["a",function(){HS(this);}],YG,"java.nio.charset.IllegalCharsetNameException",S,[],0,0,[],["b",function(a){VL(this,a);}],WG,"com.spwebgames.charinfo.StringSplitter",E,[],0,0,[],[],GF,"java.lang.NoClassDefFoundError",FB,[],0,0,[],["b",function(a){EV(this,a);
}],JD,"org.teavm.jso.ajax.ReadyStateChangeHandler",E,[Q],0,0,[],[],OE,"java.io.PrintStream",WB,[],0,0,[],["LE",function(a,b,c){HR(this,a,b,c);},"z",function(a){RR(this,a);},"wE",function(a,b){XN(this,a,b);},"vF",function(){return CI(this);},"TB",function(a){JU(this,a);},"p",function(a,b,c){GN(this,a,b,c);},"V",function(){QN(this);}],PG,"org.teavm.classlib.impl.CharFlow",E,[],0,0,[],["F",function(a){PX(this,a);}],EE,"org.teavm.jso.ajax.XMLHttpRequest",E,[Q],0,0,[],[],YD,"java.nio.charset.UnmappableCharacterException",
AB,[],0,0,[],["c",function(a){KS(this,a);}],BG,"com.spwebgames.keyboard.web.KeyboardClient$2",E,[IB],0,0,[],["a",function(){JP(this);},"j",function(a){BK(this,a);}],ZF,"com.spwebgames.keyboard.web.KeyboardClient$3",E,[IB],0,0,[],["a",function(){FP(this);},"j",function(a){MJ(this,a);}],JE,"java.nio.BufferUnderflowException",J,[],0,0,[],["a",function(){SQ(this);}],AG,"com.spwebgames.keyboard.web.KeyboardClient$1",E,[IB],0,0,[],["a",function(){XH(this);},"j",function(a){UJ(this,a);}],SG,"java.lang.ConsoleOutputStreamStderr",
N,[],0,0,[],["l",function(a){YO(this,a);},"a",function(){YS(this);}],SD,"com.spwebgames.keyboard.web.ResourceLoader$1",E,[JD],0,0,[],["QC",function(){VQ(this);},"vE",function(a,b){HJ(this,a,b);}],ME,"java.lang.Class",E,[SC],0,0,[],["xI",function(){return RI(this);},"HG",function(){return OQ(this);},"fB",function(){return IR(this);},"x",function(){return TV(this);},"cG",function(a){JK(this,a);},"KF",function(){return QU(this);}],WC,"com.spwebgames.keyboard.ConfigResource",E,[],0,WC_$clinit,'UU',[]]);
$rt_stringPool(["Books","freq/books.freq","Norvig","freq/norvig.freq","Java","freq/java.freq",": ","String contains digits out of radix ","The value is too big for int type: ","String contains invalid digits: ","String is null or empty","Illegal radix: ","Unable to read keyboard data","Unable to load char frequency string","#",":","Invalid section ","Unable to load finger key definitions file","main","<b><u>Finger Bigram Frequency</u></b>","<table>","<tr>","<td>finger ","</td><td>","</td><td>&nbsp;finger ",
"</td>","</tr>","<tr class=\"row_total\">","<td class=\"center\" colspan=\"2\">total</td><td class=\"center\" colspan=\"2\">","</table>","<b style=\"color:red\">","</b>","<b><u>Finger Effort</u></b>","<th></th><th>position</th><th>bigrams</th><th>total</th>","<td>total *</td><td>","<b><u>Top Finger Bigrams</u></b>","<b><u>Finger Frequency</u></b>","<td class=\"center\">total L</td><td>","</td><td class=\"center\">&nbsp;total R</td><td>","UTF-8","New position "," is outside of range [0;","]","Capacity is negative: ",
"The last char in src "," is outside ","of string of size ","Start "," must be before end ",")","of array of size ","Length "," must be non-negative","Offset ","The last char in dst ","�","averageCharsPerByte must be positive. Actual value is ","maxCharsPerByte must be positive. Actual value is ","newAction must be non-null","BIG_ENDIAN","LITTLE_ENDIAN","Index out of bounds","null","Warning: letter "," is missing from keyboard. "," appears more than once on keyboard. ","Loading...","%","loaded ","GET","resources/",
"Colemak Mod-DH (full)","colemak_dh.keyb","Colemak Mod-DH (left)","colemak_d.keyb","Colemak","colemak.keyb","Workman","workman.keyb","MTGAP","mtgap.keyb","Dvorak","dvorak.keyb","Asset","asset.keyb","Norman","norman.keyb","Qwpr","qwpr.keyb","Minimak-8","minimak8.keyb","Qwerty","qwerty.keyb","Replacement preconditions do not hold","Action must be non-null","Class does not represent enum: ","Enum "," does not have the ","constant","STD","ANGLE","MATRIX","charsetName is null","Should never been thrown","The last byte in src ",
"The last byte in dst ","FINGERS","EFFORT","PENALTIES","TYPE","\n[ An error occurred. Please check inputs ]\n","\n[ An error occurred. Frequency data was missing. ]\n","books","Initializing...","change","click","#80c4c4","#ca80ca","#80b780","#7a93c0","#8080ca","class","keygap","style","width:","px","background-color:","Unable to load bigram frequency string","IGNORE","REPLACE","REPORT","Traditional","config/effort_traditional_config.dat","Alternative","config/effort_alternative_config.dat","Ergonomic","config/effort_ergonomic_config.dat",
"Matrix","config/effort_matrix_config.dat"]);
var main=ZU;
(function(){var c;c=BG.prototype;c.handleEvent=c.j;c.jso$functor$handleEvent=function(){if(!this.EK){var self=this;this.EK=function(a){return self.j(a);};}return this.EK;};c=ZF.prototype;c.handleEvent=c.j;c.jso$functor$handleEvent=function(){if(!this.FK){var self=this;this.FK=function(a){return self.j(a);};}return this.FK;};c=AG.prototype;c.handleEvent=c.j;c.jso$functor$handleEvent=function(){if(!this.GK){var self=this;this.GK=function(a){return self.j(a);};}return this.GK;};c=SD.prototype;c.stateChanged=c.QC;c.jso$functor$stateChanged
=function(){if(!this.HK){var self=this;this.HK=function(){return self.QC();};}return this.HK;};})();
main = $rt_mainStarter(main);
