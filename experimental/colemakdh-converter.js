// Colemak to QWERTY Javascript converter
// 2006-10-08 Shai Coleman, http://colemak.com/ . Public domain. 

function convertColemakDHQwerty(txt, flag) {
    var qwerty  = "qwertyuiopasdfghjkl;zxcvbnmQWERTYUIOPASDFGHJKL:ZXCVBNM";
    var colemakdh = "qwfpbjluy;arstgkneioxcdvzmhQWFPBJLUY:ARSTGKNEIOXCDVZMH";
    var conv = (flag == true ? strtr(txt, colemakdh, qwerty) : strtr(txt, qwerty, colemakdh));
    return (conv);
}

function strtr(txt, strFrom, strTo) {
    var ret = "";
    for(var i = 0; i < txt.length; i++) {
        ret += (strTo.indexOf(txt.charAt(i)) >= 0 ? strFrom.charAt(strTo.indexOf(txt.charAt(i))) : 
                txt.charAt(i));
    }
    return (ret);
}

function addEventHandler(element, eventName, functionName) {  
    if (element.addEventListener) { element.addEventListener(eventName, functionName, false); } else {
        if (element.attachEvent) { element.attachEvent('on' + eventName, functionName); } }
}

function update1() {
    txt1converted = convertColemakDHQwerty(document.getElementById('txt1').value, true);
    if (document.getElementById('txt2').value != txt1converted) { document.getElementById('txt2').value = txt1converted; }
}
function update2() {
    txt2converted = convertColemakDHQwerty(document.getElementById('txt2').value, false);
    if (document.getElementById('txt1').value != txt2converted) { document.getElementById('txt1').value = txt2converted; }
}
function update1t() { setTimeout("update1()",0); }
function update2t() { setTimeout("update2()",0); }

addEventHandler(document.getElementById('txt1'), 'keydown',  update1t);
addEventHandler(document.getElementById('txt1'), 'change',   update1);
addEventHandler(document.getElementById('txt2'), 'keydown',  update2t);
addEventHandler(document.getElementById('txt2'), 'change',   update2);
