function ajax(method, url, data,fn) {
    let htp = null;
    try {
        htp = new XMLHttpRequest()
    }
    catch (err) {
        htp = new ActiveXObject("Microsoft.XMLHTTP")
    }
    if (method == "get") {
        htp.open(method, url +"?"+ data);
        htp.send()
    } else {
        htp.open(method, url);
        htp.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        htp.send(data)
    }
    htp.onreadystatechange = function () {
        if (htp.readyState == 4 && htp.status == 200) {
            fn(htp.responseText)
        }

    }
}