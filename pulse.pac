function FindProxyForURL(url, host)

{

 if (shExpMatch(host, "*.telegram.org))

  return "PROXY 95.81.118.207:16235; " +

   "PROXY 95.81.118.207:16235";

 else if (shExpMatch(host, "*.t.me"))

  return "PROXY 95.81.118.207:16235; "

}
