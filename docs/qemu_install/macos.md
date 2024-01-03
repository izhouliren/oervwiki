# 在 macOS QEMU 中安装 openEuler RISC-V

::: warning 请预先安装

- [Homebrew](https://brew.sh/)

:::

## 安装 QEMU 和 zstd

```bash
brew install qemu
brew install zstd
```

## 下载系统镜像和启动脚本

[中科院软件所镜像站](https://mirror.iscas.ac.cn/openeuler-sig-riscv/openEuler-RISC-V/preview/openEuler-22.03-V2-riscv64/QEMU/)已经提供 openEuler RISC-V 22.03 QEMU 镜像和启动脚本，文档以 openEuler RISC-V 22.03 为例。

::: info 说明

- openEuler-22.03-V2-base-qemu-preview.qcow2.tar.zst：未安装桌面环境镜像
- openEuler-22.03-V2-xfce-qemu-preview.qcow2.tar.zst：已安装 xfce 桌面环境镜像
- start_vm.sh：未安装桌面环境镜像的启动脚本
- start_vm_xfce.sh：已安装 xfce 桌面环境镜像的启动脚本
- fw_payload_oe_qemuvirt.elf：系统启动时用的文件
  :::

## 未安装桌面环境镜像安装

1. 下载 `openEuler-22.03-V2-base-qemu-preview.qcow2.tar.zst`、`start_vm.sh` 和 `fw_payload_oe_qemuvirt.elf` 三个文件，放到同一个文件夹中。
2. 解压 `openEuler-22.03-V2-base-qemu-preview.qcow2.tar.zst`。

```bash
unzstd openEuler-22.03-V2-base-qemu-preview.qcow2.tar.zst
tar -xvf openEuler-22.03-V2-base-qemu-preview.qcow2.tar
```

3. 默认的 `start_vm.sh` 在 macOS 上运行会报错，你可以选择根据错误自行修改，或者复制以下内容到 `start_vm.sh`。

```bash
#!/usr/bin/env bash

# The script is created for starting a riscv64 qemu
# virtual machine with specific parameters.

RESTORE=$(echo -en '\001\033[0m\002')
YELLOW=$(echo -en '\001\033[00;33m\002')

## Configuration
vcpu=8
memory=8
memory_append=`expr $memory \* 1024`
drive="openEuler-22.03-V2-base-qemu-preview.qcow2"
fw="fw_payload_oe_qemuvirt.elf"
ssh_port=12055

cmd="qemu-system-riscv64 \
  -nographic -machine virt \
  -smp "$vcpu" -m "$memory"G \
  -kernel "$fw" \
  -bios none \
  -drive file="$drive",format=qcow2,id=hd0 \
  -object rng-random,filename=/dev/urandom,id=rng0 \
  -device virtio-vga \
  -device virtio-rng-device,rng=rng0 \
  -device virtio-blk-device,drive=hd0 \
  -device virtio-net-device,netdev=usernet \
  -netdev user,id=usernet,hostfwd=tcp::"$ssh_port"-:22 \
  -device qemu-xhci -usb -device usb-kbd -device usb-tablet \
  -append 'root=/dev/vda1 rw console=ttyS0 swiotlb=1 loglevel=3 systemd.default_timeout_start_sec=600 selinux=0 highres=off mem="$memory_append"M earlycon' "

echo ${YELLOW}:: Starting VM...${RESTORE}
echo ${YELLOW}:: Using following configuration${RESTORE}
echo ""
echo ${YELLOW}vCPU Cores: "$vcpu"${RESTORE}
echo ${YELLOW}Memory: "$memory"G${RESTORE}
echo ${YELLOW}Disk: "$drive"${RESTORE}
echo ${YELLOW}SSH Port: "$ssh_port"${RESTORE}
echo ""

sleep 2

eval $cmd
```

4. 启动虚拟机

```bash
bash start_vm.sh
```

5. 输入用户名和密码进入系统。

   - root 用户密码：openEuler12#\$
   - openeuler 用户密码：openEuler12#\$

## 已安装 xfce 桌面环境镜像安装

1. 下载 `openEuler-22.03-V2-xfce-qemu-preview.qcow2.tar.zst`、`start_vm_xfce.sh` 和 `fw_payload_oe_qemuvirt.elf`。
2. 解压 `openEuler-22.03-V2-xfce-qemu-preview.qcow2.tar.zst`。

```bash
unzstd openEuler-22.03-V2-xfce-qemu-preview.qcow2.tar.zst
tar -xvf openEuler-22.03-V2-xfce-qemu-preview.qcow2.tar
```

3. 默认的 `start_vm_xfce.sh` 在 macOS 上运行会报错，你可以选择根据错误自行修改，或者复制以下内容到 `start_vm_xfce.sh`。

```bash
#!/usr/bin/env bash

# The script is created for starting a riscv64 qemu
# virtual machine with specific parameters.

RESTORE=$(echo -en '\001\033[0m\002')
YELLOW=$(echo -en '\001\033[00;33m\002')

## Configuration
vcpu=8
memory=8
memory_append=`expr $memory \* 1024`
drive="openEuler-22.03-V2-xfce-qemu-preview.qcow2"
fw="fw_payload_oe_qemuvirt.elf"
ssh_port=12055

cmd="qemu-system-riscv64 \
  -nographic -machine virt \
  -smp "$vcpu" -m "$memory"G \
  -display cocoa,show-cursor=on \
  -kernel "$fw" \
  -bios none \
  -drive file="$drive",format=qcow2,id=hd0 \
  -object rng-random,filename=/dev/urandom,id=rng0 \
  -device virtio-vga \
  -device virtio-rng-device,rng=rng0 \
  -device virtio-blk-device,drive=hd0 \
  -device virtio-net-device,netdev=usernet \
  -netdev user,id=usernet,hostfwd=tcp::"$ssh_port"-:22 \
  -device qemu-xhci -usb -device usb-kbd -device usb-tablet -device usb-audio\
  -append 'root=/dev/vda1 rw console=ttyS0 swiotlb=1 loglevel=3 systemd.default_timeout_start_sec=600 selinux=0 highres=off mem="$memory_append"M earlycon' "

echo ${YELLOW}:: Starting VM...${RESTORE}
echo ${YELLOW}:: Using following configuration${RESTORE}
echo ""
echo ${YELLOW}vCPU Cores: "$vcpu"${RESTORE}
echo ${YELLOW}Memory: "$memory"G${RESTORE}
echo ${YELLOW}Disk: "$drive"${RESTORE}
echo ${YELLOW}SSH Port: "$ssh_port"${RESTORE}
echo ""

sleep 2

eval $cmd
```

4. 启动虚拟机

```bash
bash start_vm_xfce.sh
```

5. 输入用户名和密码进入系统。

   - root 用户密码：openEuler12#\$
   - openeuler 用户密码：openEuler12#\$