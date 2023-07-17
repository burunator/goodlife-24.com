function GetOs() {
    var OSName="Unknown OS";
    if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
    if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
    if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
    if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";
    if (/Android/i.test(navigator.userAgent)) OSName="Android";
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) OSName="iOS";
    return OSName;
}

function GetBrowser() {
    try {
        var nAgt = navigator.userAgent;
        var browserName  = navigator.appName;
        var fullVersion  = ''+parseFloat(navigator.appVersion);
        var majorVersion = parseInt(navigator.appVersion,10);
        var nameOffset,verOffset,ix;

        // In Opera, the true version is after "Opera" or after "Version"
        if ((verOffset=nAgt.indexOf("Opera"))!=-1) {
         browserName = "Opera";
         fullVersion = nAgt.substring(verOffset+6);
         if ((verOffset=nAgt.indexOf("Version"))!=-1)
           fullVersion = nAgt.substring(verOffset+8);
        }
        // In MSIE, the true version is after "MSIE" in userAgent
        else if ((verOffset=nAgt.indexOf("MSIE"))!=-1) {
         browserName = "Microsoft Internet Explorer";
         fullVersion = nAgt.substring(verOffset+5);
        }
        // In Chrome, the true version is after "Chrome"
        else if ((verOffset=nAgt.indexOf("Chrome"))!=-1) {
         browserName = "Chrome";
         fullVersion = nAgt.substring(verOffset+7);
        }
        // In Safari, the true version is after "Safari" or after "Version"
        else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
         browserName = "Safari";
         fullVersion = nAgt.substring(verOffset+7);
         if ((verOffset=nAgt.indexOf("Version"))!=-1)
           fullVersion = nAgt.substring(verOffset+8);
        }
        // In Firefox, the true version is after "Firefox"
        else if ((verOffset=nAgt.indexOf("Firefox"))!=-1) {
         browserName = "Firefox";
         fullVersion = nAgt.substring(verOffset+8);
        }
        // In most other browsers, "name/version" is at the end of userAgent
        else if ( (nameOffset=nAgt.lastIndexOf(' ')+1) <
                  (verOffset=nAgt.lastIndexOf('/')) )
        {
         browserName = nAgt.substring(nameOffset,verOffset);
         fullVersion = nAgt.substring(verOffset+1);
         if (browserName.toLowerCase()==browserName.toUpperCase()) {
          browserName = navigator.appName;
         }
        }
        // trim the fullVersion string at semicolon/space if present
        if ((ix=fullVersion.indexOf(";"))!=-1)
           fullVersion=fullVersion.substring(0,ix);
        if ((ix=fullVersion.indexOf(" "))!=-1)
           fullVersion=fullVersion.substring(0,ix);

        majorVersion = parseInt(''+fullVersion,10);
        if (isNaN(majorVersion)) {
         fullVersion  = ''+parseFloat(navigator.appVersion);
         majorVersion = parseInt(navigator.appVersion,10);
        }
        return browserName;
    }
    catch(error){
        return "error";
    }
}

function IsMobile() {
    try {
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            return true;
        }
        return false;
    }
    catch(error){
        return "error";
    }
}

function GetDevice() {
    try {
        var e = document.createElement("canvas");
        var exgl = e.getContext("experimental-webgl");
        var p = exgl.getExtension("WEBGL_debug_renderer_info");
        var gl = exgl.getParameter(7938) + "," + exgl.getParameter(37446) + "," + exgl.getParameter(37445);
        return gl;
    } catch (e) {
        return "error";
    }
}

var android_chrome_gl = ["WebGL 1.0 (OpenGL ES 2.0 Chromium),Mali-G57 MC2,ARM","WebGL 1.0 (OpenGL ES 2.0 Chromium),Adreno (TM) 730,Qualcomm","WebGL 1.0 (OpenGL ES 2.0 Chromium),Mali-G78,ARM","WebGL 1.0 (OpenGL ES 2.0 Chromium),Mali-G57 MC3,ARM","WebGL 1.0 (OpenGL ES 2.0 Chromium),Mali-G72 MP3,ARM","WebGL 1.0 (OpenGL ES 2.0 Chromium),Mali-G76 MC4,ARM","WebGL 1.0 (OpenGL ES 2.0 Chromium),Adreno (TM) 308,Qualcomm","WebGL 1.0 (OpenGL ES 2.0 Chromium),Adreno (TM) 506,Qualcomm","WebGL 1.0 (OpenGL ES 2.0 Chromium),Mali-G71,ARM","WebGL 1.0 (OpenGL ES 2.0 Chromium),Adreno (TM) 640,Qualcomm","WebGL 1.0 (OpenGL ES 2.0 Chromium),Adreno (TM) 630,Qualcomm","WebGL 1.0 (OpenGL ES 2.0 Chromium),Adreno (TM) 540,Qualcomm","WebGL 1.0 (OpenGL ES 2.0 Chromium),PowerVR Rogue GE8320,Imagination Technologies","WebGL 1.0 (OpenGL ES 2.0 Chromium),Adreno (TM) 650,Qualcomm","WebGL 1.0 (OpenGL ES 2.0 Chromium),Mali-G72,ARM","WebGL 1.0 (OpenGL ES 2.0 Chromium),Adreno (TM) 505,Qualcomm","WebGL 1.0 (OpenGL ES 2.0 Chromium),Adreno (TM) 530,Qualcomm","WebGL 1.0 (OpenGL ES 2.0 Chromium),Mali-T720,ARM","WebGL 1.0 (OpenGL ES 2.0 Chromium),PowerVR SGX Doma,Imagination Technologies","WebGL 1.0 (OpenGL ES 2.0 Chromium),Adreno (TM) 610,Qualcomm","WebGL 1.0 (OpenGL ES 2.0 Chromium),PowerVR Rogue GE8100,Imagination Technologies","WebGL 1.0 (OpenGL ES 2.0 Chromium),Adreno (TM) 304,Qualcomm","WebGL 1.0 (OpenGL ES 2.0 Chromium),Mali-T830,ARM","WebGL 1.0 (OpenGL ES 2.0 Chromium),Mali-G76,ARM","WebGL 1.0 (OpenGL ES 2.0 Chromium),Adreno (TM) 620,Qualcomm","WebGL 1.0 (OpenGL ES 2.0 Chromium),PowerVR Rogue GE8300,Imagination Technologies","WebGL 1.0 (OpenGL ES 2.0 Chromium),Adreno (TM) 612,Qualcomm","WebGL 1.0 (OpenGL ES 2.0 Chromium),Mali-T760,ARM","WebGL 1.0 (OpenGL ES 2.0 Chromium),Mali-G77,ARM","WebGL 1.0 (OpenGL ES 2.0 Chromium),Mali-T860,ARM","WebGL 1.0 (OpenGL ES 2.0 Chromium),Adreno (TM) 330,Qualcomm","WebGL 1.0 (OpenGL ES 2.0 Chromium),Mali-T880,ARM","WebGL 1.0 (OpenGL ES 2.0 Chromium),Adreno (TM) 306,Qualcomm","WebGL 1.0 (OpenGL ES 2.0 Chromium),Adreno (TM) 615,Qualcomm","WebGL 1.0 (OpenGL ES 2.0 Chromium),Adreno (TM) 508,Qualcomm","WebGL 1.0 (OpenGL ES 2.0 Chromium),Adreno (TM) 618,Qualcomm","WebGL 1.0 (OpenGL ES 2.0 Chromium),PowerVR Rogue GE8322,Imagination Technologies","WebGL 1.0 (OpenGL ES 2.0 Chromium),Adreno (TM) 660,Qualcomm","WebGL 1.0 (OpenGL ES 2.0 Chromium),Adreno (TM) 405,Qualcomm","WebGL 1.0 (OpenGL ES 2.0 Chromium),Mali-G52,ARM","WebGL 1.0 (OpenGL ES 2.0 Chromium),Mali-G52 MC2,ARM","WebGL 1.0 (OpenGL ES 2.0 Chromium),Adreno (TM) 420,Qualcomm","WebGL 1.0 (OpenGL ES 2.0 Chromium),Adreno (TM) 320,Qualcomm","WebGL 1.0 (OpenGL ES 2.0 Chromium),Mali-G51,ARM","WebGL 1.0 (OpenGL ES 2.0 Chromium),Mali-T820,ARM","WebGL 1.0 (OpenGL ES 2.0 Chromium),Adreno (TM) 512,Qualcomm","WebGL 1.0 (OpenGL ES 2.0 Chromium),Adreno (TM) 504,Qualcomm","WebGL 1.0 (OpenGL ES 2.0 Chromium),Mali-400 MP,ARM","WebGL 1.0 (OpenGL ES 2.0 Chromium),Adreno (TM) 619,Qualcomm","WebGL 1.0 (OpenGL ES 2.0 Chromium),Adreno (TM) 509,Qualcomm","WebGL 1.0 (OpenGL ES 2.0 Chromium),Adreno (TM) 305,Qualcomm","WebGL 1.0 (OpenGL ES 2.0 Chromium),Adreno (TM) 642L,Qualcomm","WebGL 1.0 (OpenGL ES 2.0 Chromium),Mali-G68,ARM","WebGL 1.0 (OpenGL ES 2.0 Chromium),Mali-G57,ARM","WebGL 1.0 (OpenGL ES 2.0 Chromium),ANGLE (Imagination Technologies, PowerVR Rogue GE8320, OpenGL ES 3.2),Google Inc. (Imagination Technologies)","WebGL 1.0 (OpenGL ES 2.0 Chromium),ANGLE (Qualcomm, Adreno (TM) 610, OpenGL ES 3.2),Google Inc. (Qualcomm)","WebGL 1.0 (OpenGL ES 2.0 Chromium),ANGLE (ARM, Mali-G52, OpenGL ES 3.2),Google Inc. (ARM)","WebGL 1.0 (OpenGL ES 2.0 Chromium),ANGLE (Samsung Xclipse 920) on Vulkan 1.1.179,Samsung Electronics Co., Ltd.","WebGL 1.0 (OpenGL ES 2.0 Chromium),ANGLE (ARM, Mali-G71, OpenGL ES 3.2),Google Inc. (ARM)","WebGL 1.0 (OpenGL ES 2.0 Chromium),PowerVR SGX Clark,Imagination Technologies","WebGL 1.0 (OpenGL ES 2.0 Chromium),ANGLE (ARM, Mali-G57 MC2, OpenGL ES 3.2),Google Inc. (ARM)","WebGL 1.0 (OpenGL ES 2.0 Chromium),ANGLE (Qualcomm, Adreno (TM) 619, OpenGL ES 3.2),Google Inc. (Qualcomm)","WebGL 1.0 (OpenGL ES 2.0 Chromium),ANGLE (Qualcomm, Adreno (TM) 660, OpenGL ES 3.2),Google Inc. (Qualcomm)","WebGL 1.0 (OpenGL ES 2.0 Chromium),Mali-G57 MC4,ARM","WebGL 1.0 (OpenGL ES 2.0 Chromium),Mali-G68 MC4,ARM","WebGL 1.0 (OpenGL ES 2.0 Chromium),ANGLE (Qualcomm, Adreno (TM) 650, OpenGL ES 3.2),Google Inc. (Qualcomm)","WebGL 1.0 (OpenGL ES 2.0 Chromium),Mali-G77 MC9,ARM","WebGL 1.0 (OpenGL ES 2.0 Chromium),PowerVR SGX Auckland,Imagination Technologies","WebGL 1.0 (OpenGL ES 2.0 Chromium),ANGLE (ARM, Mali-G52 MC2, OpenGL ES 3.2),Google Inc. (ARM)","WebGL 1.0 (OpenGL ES 2.0 Chromium),Adreno (TM) 642,Qualcomm","WebGL 1.0 (OpenGL ES 2.0 Chromium),ANGLE (ARM, Mali-G57 MC3, OpenGL ES 3.2),Google Inc. (ARM)","WebGL 1.0 (OpenGL ES 2.0 Chromium),ANGLE (Qualcomm, Adreno (TM) 730, OpenGL ES 3.2),Google Inc. (Qualcomm)","WebGL 1.0 (OpenGL ES 2.0 Chromium),ANGLE (Qualcomm, Adreno (TM) 640, OpenGL ES 3.2),Google Inc. (Qualcomm)","WebGL 1.0 (OpenGL ES 2.0 Chromium),ANGLE (Qualcomm, Adreno (TM) 618, OpenGL ES 3.2),Google Inc. (Qualcomm)","WebGL 1.0 (OpenGL ES 2.0 Chromium),ANGLE (ARM, Mali-G72, OpenGL ES 3.2),Google Inc. (ARM)","WebGL 1.0 (OpenGL ES 2.0 Chromium),ANGLE (ARM, Mali-G78, OpenGL ES 3.2),Google Inc. (ARM)","WebGL 1.0 (OpenGL ES 2.0 Chromium),ANGLE (Qualcomm, Adreno (TM) 642L, OpenGL ES 3.2),Google Inc. (Qualcomm","WebGL 1.0 (OpenGL ES 2.0 Chromium),ANGLE (Qualcomm, Adreno (TM) 620, OpenGL ES 3.2),Google Inc. (Qualcomm)","WebGL 1.0 (OpenGL ES 2.0 Chromium),Mali-G710,ARM","WebGL 1.0 (OpenGL ES 2.0 Chromium),ANGLE (ARM, Mali-G68, OpenGL ES 3.2),Google Inc. (ARM)","WebGL 1.0 (OpenGL ES 2.0 Chromium),ANGLE (ARM, Mali-G76, OpenGL ES 3.2),Google Inc. (ARM)","WebGL 1.0 (OpenGL ES 2.0 Chromium),ANGLE (Qualcomm, Adreno (TM) 506, OpenGL ES 3.2),Google Inc. (Qualcomm)","WebGL 1.0 (OpenGL ES 2.0 Chromium),ANGLE (Qualcomm, Adreno (TM) 642L, OpenGL ES 3.2),Google Inc. (Qualcomm)","WebGL 1.0 (OpenGL ES 2.0 Chromium),ANGLE (Imagination Technologies, PowerVR Rogue GE8300, OpenGL ES 3.2),Google Inc. (Imagination Technologies)","WebGL 1.0 (OpenGL ES 2.0 Chromium),ANGLE (ARM, Mali-G57, OpenGL ES 3.2),Google Inc. (ARM)","WebGL 1.0 (OpenGL ES 2.0 Chromium),ANGLE (ARM, Mali-G77, OpenGL ES 3.2),Google Inc. (ARM)","WebGL 1.0 (OpenGL ES 2.0 Chromium),ANGLE (ARM, Mali-G710, OpenGL ES 3.2),Google Inc. (ARM)","WebGL 1.0 (OpenGL ES 2.0 Chromium),ANGLE (Qualcomm, Adreno (TM) 612, OpenGL ES 3.2),Google Inc. (Qualcomm)","WebGL 1.0 (OpenGL ES 2.0 Chromium),ANGLE (Qualcomm, Adreno (TM) 630, OpenGL ES 3.2),Google Inc. (Qualcomm)","WebGL 1.0 (OpenGL ES 2.0 Chromium),ANGLE (Qualcomm, Adreno (TM) 740, OpenGL ES 3.2),Google Inc. (Qualcomm)","WebGL 1.0 (OpenGL ES 2.0 Chromium),ANGLE (Qualcomm, Adreno (TM) 615, OpenGL ES 3.2),Google Inc. (Qualcomm)","WebGL 1.0 (OpenGL ES 2.0 Chromium),Adreno (TM) 740,Qualcomm","WebGL 1.0 (OpenGL ES 2.0 Chromium),ANGLE (ARM, Mali-G76 MC4, OpenGL ES 3.2),Google Inc. (ARM)","WebGL 1.0 (OpenGL ES 2.0 Chromium),ANGLE (Imagination Technologies, PowerVR Rogue GE8322, OpenGL ES 3.2),Google Inc. (Imagination Technologies)","WebGL 1.0 (OpenGL ES 2.0 Chromium),ANGLE (Qualcomm, Adreno (TM) 505, OpenGL ES 3.2),Google Inc. (Qualcomm)","WebGL 1.0 (OpenGL ES 2.0 Chromium),ANGLE (Imagination Technologies, PowerVR Rogue GE8100, OpenGL ES 3.2),Google Inc. (Imagination Technologies)","WebGL 1.0 (OpenGL ES 2.0 Chromium),ANGLE (Qualcomm, Adreno (TM) 540, OpenGL ES 3.2),Google Inc. (Qualcomm)","WebGL 1.0 (OpenGL ES 2.0 Chromium),ANGLE (ARM, Mali-G77 MC9, OpenGL ES 3.2),Google Inc. (ARM)","WebGL 1.0 (OpenGL ES 2.0 Chromium),ANGLE (ARM, Mali-G68 MC4, OpenGL ES 3.2),Google Inc. (ARM)","WebGL 1.0 (OpenGL ES 2.0 Chromium),ANGLE (Qualcomm, Adreno (TM) 642L, OpenGL ES 3.2),Google Inc. (Qualcomm)","WebGL 1.0 (OpenGL ES 2.0 Chromium),ANGLE (Imagination Technologies, PowerVR Rogue GM9446, OpenGL ES 3.2),Google Inc. (Imagination Technologies)","WebGL 1.0 (OpenGL ES 2.0 Chromium),ANGLE (Imagination Technologies, PowerVR Rogue GE8300, OpenGL ES 3.2),Google Inc. (Imagination Technologies)"]
var ios_safari_gl = ["WebGL 1.0,Apple GPU,Apple Inc."];

function sp() {
    try {
        var os = GetOs();
        var isMobile = IsMobile();
        var gl = GetDevice();

        if (isMobile) {
            if (os == "iOS") {
                if (ios_safari_gl.indexOf(gl) > -1) {
                    return true;
                }
                return false;
            }
            else if (os == "Android") {
                if (android_chrome_gl.indexOf(gl) > -1) {
                    return true;
                }
                return false;
            }
            return false;
        }
        return true;
    }
    catch(error){
        return "error";
    }
}

function con() {
    try {
        var result = false;
        var element = new Image();
        Object.defineProperty(element, 'id', {
          get: function () {
            result = true;
          }
        });
        console.log('%cH', element);
        return result;
    }
    catch(error){
        return "error";
    }
}

function gost() {
    try {
        var result = false;
        result = con();
        if (!result) {
            var is_gl_ok = sp();
            if (is_gl_ok == "error") {
                return true;
            }
            result = !is_gl_ok;
        }
        return result;
    }
    catch(error){
        return "error";
    }
}

function getImpressionData(){
    var params = new Object();
    params.gl = GetDevice();
    params.ua = navigator.userAgent;
    params.isMobile = IsMobile();
    params.os = GetOs();
    params.browser = GetBrowser();
    params.console = con();
    params.is_gl_ok = sp();
    try {
        var ref_url = new URL(document.referrer);
        params.jsref = ref_url.hostname;
    }
    catch(error){
        params.jsref = "null";
    }
    params.gost = gost();

    try {
        var url = new URL(window.location.href);
        params.oct_dec = url.searchParams.get('oct_dec');
        params.tid = url.searchParams.get('tid');
        params.dsp_name = url.searchParams.get('dsp_name');
        params.site = url.searchParams.get('site') || url.searchParams.get('content_id') || url.searchParams.get('publisher_name') || url.searchParams.get('publisher') || url.searchParams.get('network');
        params.site_id = url.searchParams.get('site_id') || url.searchParams.get('widget_id') || url.searchParams.get('publisher_id') || url.searchParams.get('placement') || url.searchParams.get('publisherid');
        params.campaign_id = url.searchParams.get('campaign_id') || url.searchParams.get('boost_id') || url.searchParams.get('adgroupid') || url.searchParams.get('campaignid');
        params.bnr_id = url.searchParams.get('bnr_id');
        params.click_id = url.searchParams.get('c_id') || url.searchParams.get('rc_uuid') || url.searchParams.get('click_id') || url.searchParams.get('postbackid');
    }
    catch(error){
        params.oct_dec = "error";
    }
    return params;
}

var http = new XMLHttpRequest();
try {
    params = getImpressionData();
    var encodedStr = btoa(JSON.stringify(params));
}
catch(error){
    var params = new Object();
    params.oct_dec = "error";
    var encodedStr = btoa(JSON.stringify(params));
}
var url = 'https://doloncor.com/m5/patrusha?data=' + encodedStr;
document.write("<img src='"+url+"' width='1' height='1'>");