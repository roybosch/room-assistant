(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{311:function(t,a,s){t.exports=s.p+"assets/img/compilation-msgs.0260ae46.png"},397:function(t,a,s){"use strict";s.r(a);var e=s(49),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"raspberry-pi-3-or-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#raspberry-pi-3-or-4"}},[t._v("#")]),t._v(" Raspberry Pi 3 or 4")]),t._v(" "),e("p",[t._v("This page will guide you through setting up a Raspberry Pi 3 or 4 to run room-assistant.")]),t._v(" "),e("h2",{attrs:{id:"requirements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),e("h3",{attrs:{id:"hardware"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hardware"}},[t._v("#")]),t._v(" Hardware")]),t._v(" "),e("ul",[e("li",[t._v("Raspberry Pi 3 or 4 + Power Supply")]),t._v(" "),e("li",[t._v("Micro SD Card (ideally Application Class 1)")]),t._v(" "),e("li",[t._v("SD Card reader")])]),t._v(" "),e("h3",{attrs:{id:"software"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#software"}},[t._v("#")]),t._v(" Software")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.raspberrypi.org/software/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Raspberry Pi Imager"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"installing-raspbian"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installing-raspbian"}},[t._v("#")]),t._v(" Installing Raspbian")]),t._v(" "),e("ol",[e("li",[t._v("Put your microSD card into your card reader.")]),t._v(" "),e("li",[t._v("Open the "),e("a",{attrs:{href:"https://www.raspberrypi.org/software/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Raspberry Pi Imager"),e("OutboundLink")],1),t._v(" and select the following options:\n"),e("ol",[e("li",[t._v("OS -> Raspberry Pi OS (other) -> Raspberry Pi OS (Lite)")]),t._v(" "),e("li",[t._v("SD Card -> the SD card you put into your card reader")]),t._v(" "),e("li",[t._v("Open the advanced options (Windows: "),e("em",[t._v("Ctrl + Shift + X")]),t._v(", macOS: "),e("em",[t._v("Cmd + Shift + X")]),t._v(") and enable SSH. Optionally, you can configure WiFi credentials, the hostname to be something recognizable like "),e("code",[t._v("bedroom")]),t._v(' and more in this same menu. Hit "Save" on the bottom after you\'re done.')])])]),t._v(" "),e("li",[t._v("Write the image to the card from the main menu. Wait for it to be finished before removing the card from the reader.")]),t._v(" "),e("li",[t._v("Insert the SD card into your Raspberry Pi, then connect the power supply. Wait a minute for it to boot and connect to your network.")]),t._v(" "),e("li",[t._v("Open a SSH shell to "),e("code",[t._v("<hostname>.local")]),t._v(" (default: "),e("code",[t._v("raspberrypi.local")]),t._v(") with the user "),e("code",[t._v("pi")]),t._v(" and the password you configured (default: "),e("code",[t._v("raspberry")]),t._v("). On Windows you can use "),e("a",{attrs:{href:"https://www.putty.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Putty"),e("OutboundLink")],1),t._v(", with Linux and macOS you can just open the terminal and e.g. type "),e("code",[t._v("ssh pi@raspberrypi.local")]),t._v(". If the hostname is not found, use the IP of the Pi instead - it can be found in your router administration panel.")])]),t._v(" "),e("h2",{attrs:{id:"installing-room-assistant"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installing-room-assistant"}},[t._v("#")]),t._v(" Installing room-assistant")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Install NodeJS using the following commands.")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -sL https://deb.nodesource.com/setup_14.x "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" -E "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" -\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y nodejs\n")])])])]),t._v(" "),e("li",[e("p",[t._v("We need to install some other dependencies as well, do so by running "),e("code",[t._v("sudo apt-get update && sudo apt-get install build-essential libavahi-compat-libdnssd-dev libsystemd-dev bluetooth libbluetooth-dev libudev-dev libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev")]),t._v(".")])]),t._v(" "),e("li",[e("p",[t._v("Now let's get install room-assistant! Run "),e("code",[t._v("sudo npm i --global --unsafe-perm room-assistant")]),t._v(". You will see messages like the one shown below during the installation process. Don't worry about them - they're not errors!")]),t._v(" "),e("p",[e("img",{attrs:{src:s(311),alt:"compilation messages"}})])]),t._v(" "),e("li",[e("p",[e("em",[t._v("Optional:")]),t._v(" If you want to run Bluetooth related integrations, you should also grant some additional permissions by executing the commands below.")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" setcap cap_net_raw+eip "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("eval")]),t._v(" readlink -f `which node`"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" setcap cap_net_raw+eip "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("eval")]),t._v(" readlink -f `which hcitool`"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" setcap cap_net_admin+eip "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("eval")]),t._v(" readlink -f `which hciconfig`"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n")])])])])]),t._v(" "),e("h2",{attrs:{id:"configuring-room-assistant"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuring-room-assistant"}},[t._v("#")]),t._v(" Configuring room-assistant")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Create a config folder for room-assistant with "),e("code",[t._v("mkdir -p ~/room-assistant/config")]),t._v(".")])]),t._v(" "),e("li",[e("p",[t._v("Create a new config file with "),e("code",[t._v("nano ~/room-assistant/config/local.yml")]),t._v(" and put your room-assistant configuration in it. The example below configures the "),e("a",{attrs:{href:"/integrations/home-assistant"}},[t._v("Home Assistant Core")]),t._v(" and "),e("a",{attrs:{href:"/integrations/bluetooth-classic"}},[t._v("Bluetooth Classic")]),t._v(" integrations. If you want to use something else check out the "),e("a",{attrs:{href:"/integrations"}},[t._v("integrations")]),t._v(" section.")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("global")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("integrations")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" homeAssistant\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" bluetoothClassic\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("homeAssistant")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mqttUrl")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mqtt://homeassistant.local:1883'")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mqttOptions")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" youruser\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yourpass\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("bluetoothClassic")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("addresses")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" <bluetooth"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("mac"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("of"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("device"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("track"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n")])])])]),t._v(" "),e("li",[e("p",[t._v("Go to your room-assistant directory by executing "),e("code",[t._v("cd ~/room-assistant")]),t._v(".")])]),t._v(" "),e("li",[e("p",[t._v("Run room-assistant by executing "),e("code",[t._v("room-assistant")]),t._v(". Watch the logs - are all integrations are loaded correctly and is the MQTT connection succesful? The congratulations, you configured room-assistant correctly! 🎉 New entities should now be appearing under the MQTT integration in Home Assistant Core, which can be viewed in Settings > Integrations.")])])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("When starting room-assistant you will see warnings about the Apple Bonjour compatibility layer of Avahi. These won't impact the functionality at all and can just be ignored.")])]),t._v(" "),e("h2",{attrs:{id:"making-sure-it-always-runs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#making-sure-it-always-runs"}},[t._v("#")]),t._v(" Making sure it always runs")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("If room-assistant is still running from the previous step, stop it by hitting Ctrl + C on your keyboard.")])]),t._v(" "),e("li",[e("p",[t._v("Create a file using "),e("code",[t._v("sudo nano /etc/systemd/system/room-assistant.service")]),t._v(" with the following contents:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[Unit]\nDescription=room-assistant service\n\n[Service]\nType=notify\nExecStart=/usr/bin/room-assistant\nWorkingDirectory=/home/pi/room-assistant\nTimeoutStartSec=120\nTimeoutStopSec=30\nRestart=always\nRestartSec=10\nWatchdogSec=60\nUser=pi\n\n[Install]\nWantedBy=multi-user.target\n")])])])]),t._v(" "),e("li",[e("p",[t._v("Enable and start your service by executing the commands below.")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" room-assistant.service\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl start room-assistant.service\n")])])])]),t._v(" "),e("li",[e("p",[t._v("Congratulations, you are done! 🎊 You may check the status of the service at any time with "),e("code",[t._v("sudo systemctl status room-assistant")]),t._v(". room-assistant will now be started when the Pi boots.")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);