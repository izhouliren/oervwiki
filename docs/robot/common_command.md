# ROS2 常用命令

## ros 基础工具相关功能

#### 1. ros2 pkg 工具

- ros2 pkg create
  
  执行 `ros2 pkg create riscv-ros-pkg`，创建了新的 ROS package。
  
  ![image-20231123211041770](./img/image-20231123211041770.png)
  
- ros2 pkg executables

  执行 `ros2 pkg executables turtlesim`，可以看到 turtlesim 下有哪些可执行的命令。
  
  ![image-20231123211113633](./img/image-20231123211113633.png)

-  ros2 pkg list

  执行 `ros2 pkg list`，可以看到目前已有的所有 ROS2 软件包

  ![image-20231123211144667](./img/image-20231123211144667.png)

- ros2 pkg prefix

  执行 `ros2 pkg prefix turtlesim`，可以看到 turtlesim 的前缀目录

  ![image-20231123211212529](./img/image-20231123211212529.png)

- ros2 pkg xml

  执行 `ros2 pkg xml turtlesim`，可以看到 turtlesim 的 xml 文件内容

  ![image-20231123211234318](./img/image-20231123211234318.png)


#### 2. ros2 run 工具

执行 `ros2 run demo_nodes_cpp talker`，我们执行了 demo_nodes_cpp 包下的 talker 指令。

![image-20231123211316586](./img/image-20231123211316586.png)

#### 3. ros2 topic 工具

- ros2 topic list

  执行  `ros2 topic list`，我们可以看到 ROS2 的 topic 的列表

  ![image-20231123211339270](./img/image-20231123211339270.png)
  
- ros2 topic info

  执行 `ros2  topic info /rosout`，我们可以看到 /rosout 这个 topic 的信息

  ![image-20231123211408235](./img/image-20231123211408235.png)

- ros2 topic type

  执行 `ros2 topic type /rosout`，我们可以看到 /rosout 这个 topic 的类型
  
  ![image-20231123211430761](./img/image-20231123211430761.png)


#### 4. ros2 param 工具

分别执行命令 `ros2 run demo_nodes_cpp talker`, `ros2 param list`，我们可以看到 demo_nodes_cpp talker 能够接收的参数。

![image-20231123212058791](./img/image-20231123212058791.png)

#### 5. ros2 service 工具

分别执行命令 `ros2 run demo_nodes_cpp talker`, `ros2 service list`，能够看到 demo_nodes_cpp talker 的 service 列表

![image-20231123212131019](./img/image-20231123212131019.png)

#### 6. ros2 node 工具

- ros2 node list

  分别执行命令 `ros2 run demo_nodes_cpp talker`, `ros2 node list`，我们能够看到节点列表中的 talker

  ![image-20231123212158772](./img/image-20231123212158772.png)

- ros2 node info

  分别执行命令 `ros2 run demo_nodes_cpp talker`, `ros2 node info /talker`，我们能够看到 talker 节点的信息

  ![image-20231123212237315](./img/image-20231123212237315.png)

#### 7. ros2 bag 工具

输入 `ros2 bag record -a`, 记录一个话题

![image-20231123214916097](./img/image-20231123214916097.png)

检查当前目录，如下，存在存储话题的文件

![image-20231123214948596](./img/image-20231123214948596.png)

ros2 bag info 工具



执行 `ros2 bag info rosbag2_2023_11_23-21_48_31/rosbag2_2023_11_23-21_48_31_0.db3 ` （文件由上一步骤生成）命令，能够读取该话题文件中保存的话题信息

![image-20231123215055356](./img/image-20231123215055356.png)

执行 `ros2 bag play rosbag2_2023_11_23-21_48_31/rosbag2_2023_11_23-21_48_31_0.db3` 命令，播放数据

![image-20231123215142744](./img/image-20231123215142744.png)


#### 8. ros2 launch 工具

输入 `ros2 launch demo_nodes_cpp talker_listener.launch.py`，执行一个 ROS2 软件包下的具体的文件

![image-20231123215316713](./img/image-20231123215316713.png)



#### 9. ros2 interface 工具

- ros2 interface list

  分类显示系统内所有的接口，包括消息（Messages）、服务（Services）、动作（Actions）。

  执行 `ros2 interface list` 

  ![image-20231123215338941](./img/image-20231123215338941.png)

- ros2 interface package

  显示指定接口包内的子接口。

  执行 `ros2 interface package action_msgs` 

  ![image-20231123215357624](./img/image-20231123215357624.png)

- ros2 interface packages

  显示指定接口包。

  执行 `ros2 interface packages` 

  ![image-20231123215419292](./img/image-20231123215419292.png)

- ros2 interface show

  显示指定接口的详细内容。

  用于消息类型 Messsage：执行 `ros2 interface show geometry_msgs/msg/TwistStamped` 

  ![image-20231123215439182](./img/image-20231123215439182.png)

  用于服务 Service：执行 `ros2 interface show action_msgs/srv/CancelGoal` ，

  ![image-20231123215505761](./img/image-20231123215505761.png)

  用于动作 Action：执行 `ros2 interface show action_tutorials_interfaces/action/Fibonacci` 

  ![image-20231123215523041](./img/image-20231123215523041.png)

- ros2 interface proto

  显示消息模板。

  执行 `ros2 interface proto geometry_msgs/msg/TwistStamped` 

  ![image-20231123215540538](./img/image-20231123215540538.png)



## ros 通信组件

### topic 通信

#### c++ 实现

分别执行 `ros2 run demo_nodes_cpp talker` 和 `ros2 run demo_nodes_cpp listener`，能够执行 c++ 实现的 topic 通信

![image-20231123214606210](./img/image-20231123214606210.png)

#### python 实现

分别执行 `ros2 run demo_nodes_py talker` 和 `ros2 run demo_nodes_py listener`，能够执行 python 实现的 topic 通信

![image-20231123214646173](./img/image-20231123214646173.png)

### service 通信

#### c++ 实现

分别执行 `ros2 run demo_nodes_cpp add_two_ints_server` 和 `ros2 run demo_nodes_cpp add_two_ints_client`，能够执行 c++ 实现的 service 通信

![image-20231123214710861](./img/image-20231123214710861.png)

#### python 实现

分别在两个终端执行 `ros2 run demo_nodes_py add_two_ints_server` 和 `ros2 run demo_nodes_py add_two_ints_client`，能够执行 python 实现的 service 通信

![image-20231123214748162](./img/image-20231123214748162.png)

## ros 坐标转换

### 坐标转换的发布和订阅

分别在两个终端执行 `ros2 run tf2_ros static_transform_publisher 1 1 1 0 0 0 /base_link /odom` 和 `ros2 run tf2_ros tf2_echo base_link odom`，一个发布坐标转换数据，另一个订阅接受数据。

![image-20231123220220493](./img/image-20231123220220493.png)

### tf_monitor 监控

分别在两个终端执行 `ros2 run tf2_ros static_transform_publisher 1 1 1 0 0 0 /base_link /odom` 和 `ros2 run tf2_ros tf2_monitor`，能够监控坐标转换的数据

![image-20231123220322646](./img/image-20231123220322646.png)

## view_frames 保存 pdf

分别在两个终端执行 `ros2 run tf2_ros static_transform_publisher 1 1 1 0 0 0 /base_link /odom` 和 `ros2 run tf2_tools view_frames`，输出如下，可见保存的 pdf 文件

![image-20231123220440481](./img/image-20231123220440481.png)