function CutHover(Prefix, ItemIndex, ItemCount) {
    for (var i = 0; i < ItemCount; i++) {
        var NAValue = Prefix + "_N_" + i;
        var MEValue = Prefix + "_M_" + i;
        document.getElementById(NAValue).className = "";
        document.getElementById(MEValue).style.display = "none";
    }
    var NAValue = Prefix + "_N_" + ItemIndex;
    var MEValue = Prefix + "_M_" + ItemIndex;
    document.getElementById(NAValue).className = "check";
    document.getElementById(MEValue).style.display = "block";
}
function CutHover1(Prefix, ItemIndex, ItemCount) {
    for (var i = 0; i < ItemCount; i++) {
        var NAValue = Prefix + "_N_" + i;
        var MEValue = Prefix + "_M_" + i;
        document.getElementById(NAValue).className = "";
        document.getElementById(MEValue).style.display = "none";
    }
    var NAValue = Prefix + "_N_" + ItemIndex;
    var MEValue = Prefix + "_M_" + ItemIndex;
    document.getElementById(NAValue).className = "checks";
    document.getElementById(MEValue).style.display = "block";
}
function showdiv(targetid) {
    var target = document.getElementById(targetid);
    if (target.style.display == "block") {
        target.style.display = "none";
    } else {
        target.style.display = "block";
    }
}

function showdiv2(targetid) {
    var target = document.getElementById(targetid);
    if (target.style.display == "block") {
        target.style.display = "none";
    } else {
        target.style.display = "block";
    }
}
function showdiv13(targetid, allCount, Name) {

    var target = document.getElementById(Name + targetid);
    if (target.style.display == "block") {
        target.style.display = "none";
    } else {
        target.style.display = "block";
    }

    for (i = 0; i < allCount; i++) {
        if (i != targetid) {

            document.getElementById(Name + i).style.display = "none";
        }
    }
}

//验证函数
function isEmpty(str) { if (str != null && str.length > 0) { return true; } return false; }
function equals(str1, str2) { if (str1 == str2) { return true; } return false; }
function isChinese(str) { var str = str.replace(/(^\s*)|(\s*$)/g, ''); if (!(/^[\u4E00-\uFA29]*$/.test(str) && (!/^[\uE7C7-\uE7F3]*$/.test(str)))) { return false; } return true; }
function isEmail(str) { if (/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str)) { return true } return false; }
function isImg(str) { var objReg = new RegExp("[.]+(jpg|jpeg|swf|gif)$", "gi"); if (objReg.test(str)) { return true; } return false; }
function isInt(str) { if (/^-?\d+$/.test(str)) { return true; } return false; }
function isUserName(str) { if (/^[0-9A-Za-z]{6,16}$/.test(str)) { return true; } return false; }
function isFloat(str) { if (/^(-?\d+)(\.\d+)?$/.test(str)) { return true; } return false; }
function isPost(str) { if (/^\d{1,6}$/.test(str)) { return true; } return false; }
function isMobile(str) { if (/^1[358]\d{9}/.test(str)) { return true; } return false; }
function isPhone(str) { if (/^(0[1-9]\d{1,2}-)\d{7,8}(-\d{1,8})?/.test(str)) { return true; } return false; }
function isHttp(str) { if (/http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/.test(str)) { return true; } return false; }

function Duanxin(RegisterIndex, zy) {
    art.dialog.open('/PlugIn/duanxin/duanxin.aspx?RegisterIndexID=' + RegisterIndex + '&zy=' + zy + '', { title: "免费短信", width: '480px', height: '220px', id: 'thselect', lock: true, opacity: 0.5, resize: false, fixed: true, left: '50%', top: '50%'
    });
}
function Baoming(RegisterIndex, zy) {
    art.dialog.open('/PlugIn/Baoming/Baoming.aspx?RegisterIndexID=' + RegisterIndex + '&CourseName=' + zy + '', { title: "在线报名", width: '480px', height: '335px', id: 'thselect', lock: true, opacity: 0.5, resize: false, fixed: true, left: '50%', top: '50%'
    });
}