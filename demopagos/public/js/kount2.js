window.onload = () => {
    function getKountSessionId(){
        return Math.round((new Date()).getTime() / 1000);
    }

    var kountMerchantId = document.getElementById("kountScript").getAttribute("data-kountMerchantId");
    var kountHostUrl = document.getElementById("kountScript").getAttribute("data-kountHostUrl");
    var kountSessionId = getKountSessionId();

    var script1 = document.createElement('script');
    script1.onload = function () {

        var script2 = document.createElement('script');
        script2.setAttribute('type', 'text/javascript');
        script2.text = "var client = new ka.ClientSDK();client.setupCallback({'collect-begin':function(params){console.log('collection begins')}, 'collect-end':function(params){console.log('collection ends')}});client.autoLoadEvents();";

        document.body.appendChild(script2);
    };
    script1.setAttribute('type', 'text/javascript');
    script1.src = kountHostUrl+"/collect/sdk?m="+kountMerchantId+"&s="+kountSessionId;
    script1.setAttribute("id", "kountCollector");
    document.body.appendChild(script1);

    var img = document.createElement('img');
    img.src = kountHostUrl+"/logo.gif?m="+kountMerchantId+"&s="+kountSessionId;
    document.body.appendChild(img);

    document.addEventListener("DOMContentLoaded", function(event){
        
        document.getElementById("kountSessionId").value = kountSessionId;

    });
    document.getElementById("kountSessionId").value = kountSessionId;
    window.kountSessionId = kountSessionId
    window.kountHostUrl = kountHostUrl
    window.kountMerchantId = kountMerchantId
    window.kountSessionId2 = kountSessionId
}