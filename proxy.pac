function FindProxyForURL(url, host) 
{
    if (dnsDomainIs(host, "japantaxfree.com")) {
        return "DIRECT";
    } else {
        return "PROXY 192.168.1.103:9090";
    }
}
