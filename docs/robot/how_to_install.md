# 如何安装 ROS2

## 环境信息

本章节介绍如何在 openEuler RISC-V 下安装 ROS2 环境，包括 openEuler RISC-V 的镜像地址与配置 ROS 软件源等，LicheePi 4A 开发板为例进行介绍。读者可自行选择合适的硬件平台或虚拟机进行配置。

#### 硬件信息
1. LicheePi 4A
2. 处理器 TH1520
3. 内存 16GB

#### 软件信息
1. OS 版本：openEuler-23.09-lpi4a
2. 镜像地址：https://mirror.iscas.ac.cn/openeuler-sig-riscv/openEuler-RISC-V/devel/20231123/v0.1/lpi4a_thead/
3. 软件源：https://mirror.iscas.ac.cn/openeuler-sig-riscv/openEuler-RISC-V/devel/20231123/v0.1/repo/

## 刷写镜像并启动

参考官方[烧录镜像](https://wiki.sipeed.com/hardware/zh/lichee/th1520/lpi4a/4_burn_image.html)教程，刷写成功后即可启动，openEuler 系统初始用户名：root/openeuler 密码：openEuler12#$。

## 测试安装和卸载

### 修改软件源

复制 [ROS.repo](./ROS.repo) 到  `/etc/yum.repos.d/ROS.repo`，**或者** 执行以下命令

```bash
bash -c 'cat << EOF > /etc/yum.repos.d/ROS.repo
[openEulerROS-humble]
name=openEulerROS-humble
baseurl=https://build-repo.tarsier-infra.com/openEuler:/ROS/23.09/
enabled=1
gpgcheck=0
EOF'
```

### 安装

```bash
dnf install ros-humble-xxx
```
如：```dnf install ros-humble-ros-base```

到这里，就可以在openEuler RISC-V 下安装 ROS2 相关的软件包了。
 