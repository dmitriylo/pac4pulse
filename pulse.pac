function FindProxyForURL(url, host) {
if (shExpMatch(host,"*.telegram.org")) {
    return "SOCKS5 95.81.118.207:16235;";
 }  
 alert("DIRECT connection");
 return "DIRECT";
}
