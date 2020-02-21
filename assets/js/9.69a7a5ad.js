(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{214:function(e,t,s){"use strict";s.r(t);var r=s(3),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"cluster"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cluster"}},[e._v("#")]),e._v(" Cluster")]),e._v(" "),s("p",[s("strong",[e._v("Config Key:")]),e._v(" "),s("code",[e._v("cluster")])]),e._v(" "),s("p",[e._v("If you are running multiple room-assistant instances they come together in a cluster. By default, the instances discover each other using mDNS. This requires all of them live in the same subnet. You can also specify the adresses of other instances and tweak some other things manually.")]),e._v(" "),s("h2",{attrs:{id:"usage-tips"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage-tips"}},[e._v("#")]),e._v(" Usage tips")]),e._v(" "),s("h3",{attrs:{id:"preferred-leaders"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#preferred-leaders"}},[e._v("#")]),e._v(" Preferred leaders")]),e._v(" "),s("p",[e._v("In some situations you may want some instances of room-assistant to be the leading ones more than others. This could for example be the case if you have instances that are connected to the network better than others. To accomplish this you can configure custom weights that are then used during the leader election process. The "),s("code",[e._v("weight")]),e._v(" option should ideally be configured on every instance of room-assistant that you run to achieve consistent behavior. The preferred leader instances need to have the largest weight numbers.")]),e._v(" "),s("h2",{attrs:{id:"troubleshooting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),s("h3",{attrs:{id:"some-nodes-not-appearing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#some-nodes-not-appearing"}},[e._v("#")]),e._v(" Some nodes not appearing")]),e._v(" "),s("p",[e._v("If the auto discovery does not seem to pick up all (or any) nodes for your cluster you can approach the problem from two different directions:")]),e._v(" "),s("ol",[s("li",[e._v("Make sure your router and network settings are compatible with mDNS/Bonjour. An easy way to test this is pinging your devices by their hostname, e.g. "),s("code",[e._v("ping raspberrypi.local")]),e._v(".")]),e._v(" "),s("li",[e._v("Disable "),s("code",[e._v("autoDiscovery")]),e._v(" and provide the "),s("code",[e._v("peerAddresses")]),e._v(" manually. Make sure to give your devices DHCP reservations or static IPs.")])]),e._v(" "),s("p",[e._v("Should the other nodes not appear in your cluster even after configuring it manually you should make sure that the devices can communication with each other via UDP on the port you configured, by default "),s("code",[e._v("6425")]),e._v(".")]),e._v(" "),s("h3",{attrs:{id:"mdns-errors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mdns-errors"}},[e._v("#")]),e._v(" MDNS errors")]),e._v(" "),s("p",[e._v("If you're seeing errors relating to MDNS discovery in your logs there is no need to worry - room-assistant will function fine even without it. In this case you can just specify the "),s("code",[e._v("peerAddresses")]),e._v(" of your other room-assistant instances manually.")]),e._v(" "),s("p",[e._v("If you want to fix the discovery issues you need to take a look at "),s("a",{attrs:{href:"http://avahi.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Avahi"),s("OutboundLink")],1),e._v(" on Linux or the equivalent Bonjour responder on other operating systems. It needs to be installed and available to room-assistant.")]),e._v(" "),s("p",[e._v("As for Docker, the auto discovery will only work if you're running the container on a Linux machine and have mapped the "),s("code",[e._v("/var/run/dbus")]),e._v(" volume.")]),e._v(" "),s("h3",{attrs:{id:"getaddrinfo-errors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getaddrinfo-errors"}},[e._v("#")]),e._v(" getaddrinfo errors")]),e._v(" "),s("p",[e._v("This error correlates to your machine not being able to resolve "),s("code",[e._v(".local")]),e._v(" hostnames correctly. On Linux systems you need to have "),s("a",{attrs:{href:"http://0pointer.de/lennart/projects/nss-mdns/",target:"_blank",rel:"noopener noreferrer"}},[e._v("nss-mdns"),s("OutboundLink")],1),e._v(" installed and configured for this to work. Alternatively you can use the "),s("code",[e._v("--digResolver")]),e._v(" CLI option when starting room-assistant to use the "),s("code",[e._v("dig")]),e._v(" command for resolving hostnames.")]),e._v(" "),s("h3",{attrs:{id:"rivalling-clusters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rivalling-clusters"}},[e._v("#")]),e._v(" Rivalling clusters")]),e._v(" "),s("p",[e._v("If you're seeing multiple clusters form on your network that are both trying to take control of the distributed entities you can set the "),s("code",[e._v("quorum")]),e._v(" option. This ensures that only a cluster that contains the majority of instances can update the values. Set this number so that it represents the smallest instance count to constitute a majority in your setup. For example: if you have 3 instances of the software at home you would set "),s("code",[e._v("quorum")]),e._v(" to 2, for 6 overall instances it should be 4.")]),e._v(" "),s("h2",{attrs:{id:"settings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#settings"}},[e._v("#")]),e._v(" Settings")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Name")]),e._v(" "),s("th",[e._v("Type")]),e._v(" "),s("th",[e._v("Default")]),e._v(" "),s("th",[e._v("Description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[s("code",[e._v("networkInterface")])]),e._v(" "),s("td",[e._v("String")]),e._v(" "),s("td"),e._v(" "),s("td",[e._v("The specific network interface that room-assistant should advertise its presence on, e.g. "),s("code",[e._v("eth0")]),e._v(".")])]),e._v(" "),s("tr",[s("td",[s("code",[e._v("port")])]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td",[s("code",[e._v("6425")])]),e._v(" "),s("td",[e._v("The UDP port that room-assistant should use for internal communication.")])]),e._v(" "),s("tr",[s("td",[s("code",[e._v("timeout")])]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td",[s("code",[e._v("60")])]),e._v(" "),s("td",[e._v("Number of seconds that an instance can go without sending a heartbeat and not be dropped from the cluster.")])]),e._v(" "),s("tr",[s("td",[s("code",[e._v("weight")])]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td",[e._v("Random")]),e._v(" "),s("td",[e._v("Value used to sort when electing a leading instance. The instance with the highest weight in the cluster becomes the leader.")])]),e._v(" "),s("tr",[s("td",[s("code",[e._v("quorum")])]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td"),e._v(" "),s("td",[e._v("Minimum amount of nodes required for the cluster to represent the majority.")])]),e._v(" "),s("tr",[s("td",[s("code",[e._v("autoDiscovery")])]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[s("code",[e._v("true")])]),e._v(" "),s("td",[e._v("Allows mDNS-based auto discovery of other room-assistant instances to be turned off.")])]),e._v(" "),s("tr",[s("td",[s("code",[e._v("peerAddresses")])]),e._v(" "),s("td",[e._v("Array")]),e._v(" "),s("td"),e._v(" "),s("td",[e._v("A list of endpoint addresses (IP + port) of other room-assistant instances.")])])])]),e._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[e._v("Example Config")]),e._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("cluster")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("networkInterface")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" wlan0\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("port")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("6425")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("peerAddresses")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" 192.168.1.10"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("6425")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" 192.168.1.11"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("6425")]),e._v("\n")])])])])])}),[],!1,null,null,null);t.default=o.exports}}]);