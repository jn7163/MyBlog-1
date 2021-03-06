---
title: 为终端使用 SS 代理
type: categories
categories: 分享境
tags:
  - 代理
copyright: true
date: 2017/06/04 20:31:10
updated: 2017/06/12 16:32:18
abbrlink: 39613bbd
thumbnail: https://res.cloudinary.com/wincer/image/upload/v1530859499/blog/terminal_proxy/cover.png
---

Shadowsocks 是我们最常用的代理工具，它使用 socks 协议，而我们目前使用的终端只支持 http、https 协议，所以我们需要用软件来将 socks 协议转化为 http 等协议，我采用的是 Proxychains 软件（SS 的安装和配置自行谷歌）

#### Proxychains 安装

```bash
git clone https://github.com/rof10r/proxychains-ng.git
cd proxychains-ng
./config
make && make install
cp ./src/proxychains.conf /etc/proxychains.conf
cd .. && rm -rf proxychains-ng
```

#### 编辑 Proxychains 配置

```bash
vim /etc/proxychains.conf
```

<!-- more  -->

将最后一行

```
socks4 127.0.0.1 9095
```

改成：

```
socks5 127.0.0.1 1080
```

#### 使用方法

在需要代理的命令前加上 `proxychains`，可用 `curl ip.gs` 命令测试一下



![未使用](https://res.cloudinary.com/wincer/image/upload/v1530861827/blog/terminal_proxy/before.png)


![已使用](https://res.cloudinary.com/wincer/image/upload/v1530861842/blog/terminal_proxy/after.png)
