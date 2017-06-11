---
title: cocos2dx集成DragonBonesCPP骨骼动画库
date: 2017-06-09 13:53:34
categories:
- cocos2dx
tags:
- cocos2dx
- C++
- DragonBonesCPP
---

一直说写博客，但是一直没有写（主要是因为懒-.-!）。终于下定决心写了，就从公司最近cocos2dx项目用到的东西开始，给自己做一个知识的梳理和技术的备忘。

为什么使用骨骼动画呢？主要是公司的cocos2dx项目有很多需要使用动画展示的地方，那么实现细腻的动画效果，就需要使用很多帧动画。帧数多，图片大，移动端的性能开销过大，所以想要采用骨骼动画代替帧动画。骨骼动画将效果拆散为一个个骨骼，在资源占用上大大减少，并且通过编辑骨头、插槽等模块，能实现和帧动画差不多的效果，非常符合项目的需求。

制作骨骼动画需要使用骨骼编辑软件，目前比较成熟的编辑软件是DragonBones和spine，前者是免费的，后者收费的。当然是spine要专业一些，DragonBones功能也追赶上了spine的步伐，所以选择DragonBones（主要是买不起spine，哈哈）。接下来，搞起。

## 前期准备
* [cocos2dx](https://github.com/cocos2d/cocos2d-x)
* 下载[DragonBonesCPP](https://github.com/DragonBones/DragonBonesCPP)，目前支持5.0数据格式标准。
  

## 具体操作
### iOS平台

#### 1.生成cocos工程，并打开新建工程

`$ cocos new DragonBonesCPP -p com.DragonBonesCPP -l cpp -d ~/Desktop/`

#### 2.打开DragonBonesCPP-master
{% asset_img QQ20170609-142649.png  DragonBonesCPP-master%}

#### 3.将DragonBones/src/dragonBones文件夹 和 3rdParty/rapidjson、rapidxml 拷贝到Classes中，Cocos2DX_3.x/src/dragonBones/cocos2dx 和 proj.android 拷贝到 dragonBones文件夹下。添加文件时记得选择Create groups。
{% asset_img QQ20170609-145214.png  %} 

cocos2dx扩展库都在cocos2d/external/下，其中包括json，没错它就是rapidjson，所以可以不用添加rapidjson，直接按照第五步中的问题处理即可。

#### 4.删除Classes中的AppDelegate.cpp和HelloWord.cpp，将Cocos2DX_3.x/Demos中的Classes和Resources下的内容，添加到工程中。

{% asset_img QQ20170609-155958.png  最终目录结构%}

#### 5.没错不会这么顺利，正片环节开始，编译运行后，问题如下：

* **'dragonBones/DragonBonesHeaders.h' file not found**

>在TARGETS中选中DragonBonesCPP-mobile，选择Build Settings，找到Header Search Paths，在里面添加 $(SRCROOT)/../Classes，如下图：

{% asset_img QQ20170609-154334.png Header Search Paths %}

* **JSONDataParser.h中'rapidjson/document.h' file not found**

>将rapidjson/document.h改为json/document.h

### Win32平台

#### 1.用vs打开win32工程，将Classes中的c++类添加到解决方案src中，一定要添加Classes/dragonBones下所有的子目录中的cpp和h。

#### 2.当然也不会顺利，问题如下：

* **C2039	“GetFloat”: 不是“rapidjson::GenericValue<rapidjson::UTF8<char>,rapidjson::MemoryPoolAllocator<rapidjson::CrtAllocator>>”的成员**

>原因是cocos2d/external/中的json/document.h文件缺少了`GetFloat()`方法，这也是老版本cocos2dx中json版本落后导致的，最新版本3.15不会有这个问题，可以直接在document.h中实现`GetFloat()`或者用DragonBones/3rdParty/rapidjson替换。

在 `double GetDouble()`后面添加如下方法：

```
float GetFloat() const {
    return static_cast<float>(GetDouble());
}
```

### Android平台

#### 1.导入proj.android-studio工程到Android Studio

#### 2.配置好android.mk，在proj.android-studio/app/jni/下，贡献出我常用的万能模板。
```
LOCAL_PATH := $(call my-dir)

include $(CLEAR_VARS)

$(call import-add-path,$(LOCAL_PATH)/../../../cocos2d)
$(call import-add-path,$(LOCAL_PATH)/../../../cocos2d/external)
$(call import-add-path,$(LOCAL_PATH)/../../../cocos2d/cocos)

LOCAL_MODULE := cocos2dcpp_shared

LOCAL_MODULE_FILENAME := libcocos2dcpp

# 遍历目录及子目录的函数
define walk
    $(wildcard $(1)) $(foreach e, $(wildcard $(1)/*), $(call walk, $(e)))
endef

# 遍历Classes目录
ALLFILES = $(call walk, $(LOCAL_PATH)/../../../Classes)

MY_FILES_SUFFIX := %.cpp %.c

FILE_LIST := hellocpp/main.cpp
# 从所有文件中提取出所有.cpp文件
FILE_LIST += $(filter $(MY_FILES_SUFFIX), $(ALLFILES))

LOCAL_SRC_FILES := $(FILE_LIST:$(LOCAL_PATH)/%=%)
FILE_INCLUDES := $(shell find $(LOCAL_PATH)/../../../Classes -type d)
LOCAL_C_INCLUDES := $(FILE_INCLUDES)


# _COCOS_HEADER_ANDROID_BEGIN
# _COCOS_HEADER_ANDROID_END


LOCAL_STATIC_LIBRARIES := cocos2dx_static

# _COCOS_LIB_ANDROID_BEGIN
# _COCOS_LIB_ANDROID_END

include $(BUILD_SHARED_LIBRARY)

$(call import-module,.)

# _COCOS_LIB_IMPORT_ANDROID_BEGIN
# _COCOS_LIB_IMPORT_ANDROID_END
```

#### 3.运行cocos compile命令，编译打包apk
`$ cocos compile -p android --android-studio`

#### 4.安装apk到手机，运行。

这样，cocos2dx集成DragonBonesCPP库就完成了。大功告成！

## 参考
1. [DragonBones Cocos2d-x Library](https://github.com/DragonBones/DragonBonesCPP/tree/master/Cocos2DX_3.x)


 

