// Rongxin JSAPI
// for iOS and Android
// Version 0.9.9    20180312   Add support for PC

// Version 0.9.9.1 20180312    Add custom color for navigation.setMenu
// Version 0.9.9.2 20180320     Add common.showCommonList
// Version 0.9.9.3 20180403     Add common.pageSave
// Version 0.9.9.4 20180409     Add meeting.joinMeeting
// Version 0.9.9.5 20180516     Add contacts.searchContact, addFriend
// Version 0.9.9.6 20180516     Add util.open
// Version 0.9.9.7 20180522     Add appstore
// Version 0.9.9.8 20180530     exception handle
// Version 0.9.9.9 20200525     Add destroyNativeView
// Version 1.0.0.0 20200526     Add showNavMap


/*eslint-disable*/
var rx = {
  biz: {
    navigation: {
      // 设置标题文字
      setTitle: function(title, onSuccess, onFail) {
        var funcName = "rx.biz.navigation.setTitle";
        var params = {
          title: title
        };
        JKEventHandler.callNativeFunction(funcName, params, onSuccess, onFail);
      },

      // 设置icon
      setIcon: function(showIcon, iconIndex, onSuccess, onFail) {
        var funcName = "rx.biz.navigation.setIcon";
        var params = {
          showIcon: showIcon,
          iconIndex: iconIndex
        };
        JKEventHandler.callNativeFunction(funcName, params, onSuccess, onFail);
      },
      // 设置左侧按钮
      setLeft: function(control, text, onSuccess, onFail) {
        var funcName = "rx.biz.navigation.setLeft";
        var params = {
          control: control,
          text: text
        };
        JKEventHandler.callNativeFunction(funcName, params, onSuccess, onFail);
      },

      // 设置右侧文字
      setRight: function(show, control, text, onSuccess, onFail) {
        var funcName = "rx.biz.navigation.setRight";
        var params = {
          show: show,
          control: control,
          text: text
        };
        JKEventHandler.callNativeFunction(funcName, params, onSuccess, onFail);
      },
      // backgroundColor #ADD8E6
      // 设置菜单
      setMenu: function(backgroundColor, textColor, items, onSuccess, onFail) {
        var funcName = "rx.biz.navigation.setMenu";
        var params = {
          backgroundColor: backgroundColor,
          textColor: textColor,
          items: items
        };
        JKEventHandler.callNativeFunction(funcName, params, onSuccess, onFail);
      },
      // 退出
      close: function(onSuccess, onFail) {
        // tools.exitApp();
        //退出
        var funcName = "exitApp";
        JKEventHandler.callNativeFunction(funcName, onCallBack);
        onSuccess();
        // var funcName = 'rx.biz.navigation.close';
        // var params = {

        // };
        // JKEventHandler.callNativeFunction(funcName, params, onSuccess, onFail);
      },
      // 关闭
      goBack: function(onSuccess, onFail) {
        var funcName = "rx.biz.navigation.goBack";
        var params = {};
        JKEventHandler.callNativeFunction(funcName, params, onSuccess, onFail);
      }
    },
    telephone: {
      dialNumber: function(param, onCallBack) {
        //拨打普通电话
        var funcName = "dialNumber";
        var params = {
          phone: param
        };
        JKEventHandler.callNativeFunction(funcName, params, onCallBack);
      },
      // 拨打容信视频，users ['user1','users']
      callVideo: function(users, corpId, onSuccess, onFail) {
        var funcName = "rx.biz.telephone.callVideo";
        var params = {
          users: users,
          corpId: corpId
        };
        JKEventHandler.callNativeFunction(funcName, params, onSuccess, onFail);
      },
      // 拨打容信语音，users ['user1','users']
      call: function(users, corpId, onSuccess, onFail) {
        var funcName = "rx.biz.telephone.call";
        var params = {
          users: users,
          corpId: corpId
        };
        JKEventHandler.callNativeFunction(funcName, params, onSuccess, onFail);
      },
      // 通用电话拨打菜单，phoneNum-电话号码，code-国家代码，中国是+86，showRxCall-是否显示容信语音
      // 与钉钉存在一定兼容性问题，钉钉是指定电话号码，容信是指定用户账号，code在容信可能就不需要了，暂时先保留
      showCallMenu: function(userAccount, code, showRxCall, onSuccess, onFail) {
        var funcName = "rx.biz.telephone.showCallMenu";
        var params = {
          userAccount: userAccount,
          code: code,
          showRxCall: showRxCall
        };
        JKEventHandler.callNativeFunction(funcName, params, onSuccess, onFail);
      }
    },
    chat: {
      // 打开用户聊天界面
      openSingleChat: function(corpId, userId, onSuccess, onFail) {
        var funcName = "rx.biz.chat.openSingleChat";
        var params = {
          corpId: corpId,
          userId: userId
        };
        JKEventHandler.callNativeFunction(funcName, params, onSuccess, onFail);
      }
    },
    common: {
      // 打开一个原生列表，选择完成后返回选择的数据
      // funcCode代表要调用的列表类型，返回的数据一般是JSON对象，根据不同的funcCode由前端和原生代码约定
      showCommonList: function(funcCode, onSuccess, onFail) {
        var funcName = "rx.biz.common.showCommonList";
        var params = {
          funcCode: funcCode
        };
        JKEventHandler.callNativeFunction(funcName, params, onSuccess, onFail);
      },
      // 页面指示Native客户端保存当前页面，暂只需要PC端支持
      pageSave: function(onSuccess, onFail) {
        var funcName = "rx.biz.common.pageSave";
        var params = {};
        JKEventHandler.callNativeFunction(funcName, params, onSuccess, onFail);
      }
    },
    meeting: {
      // 加入会议
      joinMeeting: function(meetingId, onSuccess, onFail) {
        var funcName = "rx.biz.meeting.joinMeeting";
        var params = {
          meetingId: meetingId
        };
        JKEventHandler.callNativeFunction(funcName, params, onSuccess, onFail);
      }
    },
    contacts: {
      // 显示联系人列表
      showContacts: function(
        chooseContact,
        multiple,
        chooseUsers,
        isNeedSearch,
        title,
        onCallBack
      ) {
        var funcName = "showContacts";
        var params = {
          chooseContact: chooseContact,
          multiple: multiple,
          chooseUsers: chooseUsers,
          isNeedSearch: isNeedSearch,
          title: title
        };
        JKEventHandler.callNativeFunction(funcName, params, onCallBack);
      },
      searchContacts: function(pageIndex, keyword, onSuccess, onFail) {
        var funcName = "rx.biz.contacts.searchContacts";
        var params = {
          pageIndex: pageIndex,
          keyword: keyword
        };
        JKEventHandler.callNativeFunction(funcName, params, onSuccess, onFail);
      },
      addFriend: function(account, onSuccess, onFail) {
        var funcName = "rx.biz.contacts.addFriend";
        var params = {
          account: account
        };
        JKEventHandler.callNativeFunction(funcName, params, onSuccess, onFail);
      }
    },
    util: {
      // 打开原生页面, 通过name参数决定要打开的页面，目前只支持用户详情页，对应name=profile
      // param是字典对象，不同页面可能对应一个到多个参数，profile页面要传入{"account":""}
      open: function(name, params) {
        var funcName = "rx.biz.util.open";
        var params = {
          name: name,
          params: params
        };
        JKEventHandler.callNativeFunction(funcName, params, onSuccess, onFail);
      }
    }
  },
  appstore: {
    install: function(appid, onSuccess, onFail) {
      var funcName = "rx.appstore.install";
      var params = {
        appid: appid,
        params: params
      };
      JKEventHandler.callNativeFunction(funcName, params, onSuccess, onFail);
    },
    uninstall: function(appid, onSuccess, onFail) {
      var funcName = "rx.appstore.uninstall";
      var params = {
        appid: appid,
        params: params
      };
      JKEventHandler.callNativeFunction(funcName, params, onSuccess, onFail);
    },
    update: function(appid, onSuccess, onFail) {
      var funcName = "rx.appstore.update";
      var params = {
        appid: appid,
        params: params
      };
      JKEventHandler.callNativeFunction(funcName, params, onSuccess, onFail);
    }
  },
  security: {
    // 获取用户信息
    getUserInfo: function(callback) {
      var funcName = "getUserInfo";
      var params = {};
      JKEventHandler.callNativeFunction(funcName, params, callback);
    },
    //
    userConfirm: function(callback) {
      var funcName = "userConfirm";
      var params = {};
      JKEventHandler.callNativeFunction(funcName, params, callback);
    }
  },
  tools: {
    showMessageView: function(onCallBack) {
      //跳转到消息列表
      var funcName = "showMessageView";
      JKEventHandler.callNativeFunction(funcName, onCallBack);
    },
    playVideo: function(param, onCallBack) {
      //视频播放器
      var funcName = "playVideo";
      var params = {
        url: param
      };

      JKEventHandler.callNativeFunction(funcName, params, onCallBack);
    },

    switchSoftInputMode: function(funcName, onCallBack) {
      var funcName = "switchSoftInputMode";
      JKEventHandler.callNativeFunction(funcName, onCallBack);
    },
    exitApp: function(onCallBack) {
      //退出
      var funcName = "exitApp";
      JKEventHandler.callNativeFunction(funcName, onCallBack);
    },
    setTabView: function(param, onCallBack) {
      //底部导航显示隐藏
      var funcName = "setTabView";
      var params = {
        isShowTabView: param
      };
      JKEventHandler.callNativeFunction(funcName, params, onCallBack);
    },
    // 人脸识别
    faceRecognition: function(OaAccount, onCallBack) {
      var funcName = "faceRecognition";
      var params = {
        OaAccount: OaAccount
      };
      JKEventHandler.callNativeFunction(funcName, params, onCallBack);
    },
    // 根据文件信息打开文件预览
    showFile: function(fileName, fileUrl, fileId, allowedShare) {
      var funcName = "showFile";
      var params = {
        fileName: fileName,
        fileUrl: fileUrl,
        fileId: fileId,
        allowedShare: allowedShare
      };
      if (/\((iPhone|iPad|iPod)/i.test(navigator.userAgent) == true) {
        funcName = "getShowFile";
      }
      JKEventHandler.callNativeFunction(funcName, params);
    },
    // 文件上传
    uploadFile: function(fileName, url, header, onCallBack) {
      var funcName = "uploadFile";
      var params = {
        fileName: fileName,
        url: url,
        header: header
      };
      JKEventHandler.callNativeFunction(funcName, params, onCallBack);
    },
    // 下载文件
    downloadFile: function(fileName, fileUrl, fileSize, downLoadType) {
      var funcName = "downloadFile";
      var params = {
        fileName: fileName,
        fileUrl: fileUrl,
        fileSize: fileSize,
        downLoadType: downLoadType
      };
      JKEventHandler.callNativeFunction(funcName, params);
    },
    // 文件列表
    fileList: function(onCallBack) {
      var funcName = "fileList";
      var params = {};
      JKEventHandler.callNativeFunction(funcName, params, onCallBack);
    },
    // 分享
    share: function(url, thumbURL, title, shareType, onCallBack) {
      var funcName = "startShare";
      var params = {
        url: url,
        thumbURL: thumbURL,
        title: title,
        shareType: shareType
      };
      if (/\((iPhone|iPad|iPod)/i.test(navigator.userAgent) == true) {
        funcName = "getShare";
      }
      JKEventHandler.callNativeFunction(funcName, params, onCallBack);
    },
    // 扫描二维码
    scan: function(type, onCallBack) {
      var funcName = "scan";
      var params = {};
      JKEventHandler.callNativeFunction(funcName, params, onCallBack);
    },
    // 设置导航栏
    setNavigationBar: function(title, hide, viewTop, rBtnImg) {
      var funcName = "setNavigationBar";
      var params = {
        title: title,
        hide: hide,
        viewTop: viewTop,
        rBtnImg: rBtnImg
      };
      JKEventHandler.callNativeFunction(funcName, params, null);
    },
    // 退出应用
    // exitApp: function(data, url) {
    //   var funcName = "exitApp";
    //   var params = {
    //     data: data,
    //     url: url
    //   };
    //   JKEventHandler.callNativeFunction(funcName, params);
    // },
    // 打开另外一个H5应用，需要知道该应用的asappid，如果url不为空，跳转到url，否则跳转到该应用入口页面
    openApp: function(asappId, url, onCallBack) {
      var funcName = "exitApp";
      var params = {
        asappId: asappId,
        url: url
      };
      JKEventHandler.callNativeFunction(funcName, params, null);
    },
    // 获取状态栏信息
    getStatusBarInfo: function(onCallBack) {
      var funcName = "getStatusBarInfo";
      if (/\((iPhone|iPad|iPod)/i.test(navigator.userAgent) == true) {
        onCallBack('{"height":20}');
        return;
      }
      var params = {};
      JKEventHandler.callNativeFunction(funcName, params, onCallBack);
    },
    // 设置可旋转状态，rotation 0 - 随设备旋转，1 - 锁定竖屏，2 - 锁定横屏
    setDeviceRotation: function(rotation) {
      var funcName = "setDeviceRotation";
      var params = {
        rotation: rotation
      };
      JKEventHandler.callNativeFunction(funcName, params, null);
    },
    // 获取地理位置
    getGeoPosition: function(targetAccuracy, coordinate, callback) {
      var funcName = "getGeoPosition";
      var params = {
        targetAccuracy: targetAccuracy,
        coordinate: coordinate
      };
      JKEventHandler.callNativeFunction(funcName, params, callback);
    },
    /** type 地图的类型  0- 百度，1- 高德,value int类型 */
    showNavMap: function(type,sd_lng, sd_lat,gd_lng,gd_lat,destination, callback) {
      var funcName = "showNavMap";
      var params = {
        type: type,
        sd_lng: sd_lng,
        sd_lat: sd_lat,
        gd_lng: gd_lng,
        gd_lat: gd_lat,
        destination: destination
      };
      JKEventHandler.callNativeFunction(funcName, params, callback);
    },
    // 调用摄像头
    showCamera: function(type, count, callback) {
      var funcName = "showCamera";
      var params = {
        count: count,
        type: type
      };
      JKEventHandler.callNativeFunction(funcName, params, callback);
    },
    // 调用相册
    showPhotoAlbum: function(type, count, callback) {
      var funcName = "showPhotoAlbum";
      var params = {
        count: count,
        type: type
      };
      JKEventHandler.callNativeFunction(funcName, params, callback);
    },

    destroyNativeView: function(type, callback) {
      //页面销毁
      var funcName = "destroyNativeView";
      var params = {
        type: type
      };
      JKEventHandler.callNativeFunction(funcName,params, callback);
    },

    // 获取设备信息
    getDeviceInfo: function(callback) {
      var funcName = "getDeviceInfo";
      var params = {};
      JKEventHandler.callNativeFunction(funcName, params, callback);
    },
    // 网络状态读取
    getNetworkStatus: function(callback) {
      var funcName = "getNetworkStatus";
      var params = {};
      JKEventHandler.callNativeFunction(funcName, params, callback);
    },
    // 设置截屏状态
    setScreenCaptureStatus: function(status, callback) {
      var funcName = "setScreenCaptureStatus";
      var params = {
        status: status
      };
      JKEventHandler.callNativeFunction(funcName, params, callback);
    },
    // 文件存储
    fileSave: function(fileName, fileContent, callback) {
      var funcName = "fileSave";
      var params = {
        fileName: fileName,
        fileContent: fileContent
      };
      JKEventHandler.callNativeFunction(funcName, params, callback);
    },
    // 文件删除
    fileDelete: function(fileName, callback) {
      var funcName = "fileDelete";
      var params = {
        fileName: fileName
      };
      JKEventHandler.callNativeFunction(funcName, params, callback);
    }
  }
};

var JKEventHandler = {
  callNativeFunction: function(functionString, params, onSuccess, onFail) {
    var methodName = functionString.replace(/function\s?/im, "").split("(")[0];
    var onCallBackName = methodName + "CallBack";
    var onSuccessName = methodName + "onSuccess";
    var onFailName = methodName + "onFail";
    var message;
    if (!onSuccess) {
      message = {
        methodName: methodName,
        params: params
      };
      //alert('callNativeFunction, no callback, methodName=' + methodName + ', params=' + params);
    } else {
      message = {
        methodName: methodName,
        params: params,
        callBackName: onCallBackName,
        onSuccessName: onSuccessName,
        onFailName: onFailName
      };
      //alert('callNativeFunction, has callback, methodName=' + methodName + ', params=' + params + ',onSuccessName=' + onSuccessName + ',onFailName=' + onFailName);
      Event._listeners[onCallBackName] = [];
      if (Event._listeners[onCallBackName]) {
        Event.addEvent(onCallBackName, function(data) {
          onSuccess(data);
        });
      }
      Event._listeners[onSuccessName] = [];
      if (Event._listeners[onSuccessName]) {
        Event.addEvent(onSuccessName, function(data) {
          onSuccess(data);
        });
      }
      Event._listeners[onFailName] = [];
      if (Event._listeners[onFailName]) {
        Event.addEvent(onFailName, function(data) {
          onFail(data);
        });
      }
    }

    if (/\((iPhone|iPad|iPod)/i.test(navigator.userAgent) == false) {
      if (navigator.userAgent.indexOf("Android") > -1) {
        //Android
        var jsonParams = JSON.stringify(params);
        window.webkit.actionFromJs(methodName, jsonParams);
      } else {
        //pc
        var jsonParams = JSON.stringify(message);
        // QWebChannel *channel = new QWebChannel(this);
        // channel->registerObject(QStringLiteral("RxWebView"), &m_content);
        // page->setWebChannel(channel);
        // console.log(jsonParams);
        // RxWebView.callBackActionFromJs(methodName, jsonParams);
        new QWebChannel(qt.webChannelTransport, function(channel) {
          // make core object accessible globally
          var RxWebView = channel.objects.core;
          RxWebView.callBackActionFromJs(jsonParams);
        });
      }
      return;
    } else {
      // iOS
      window.webkit.messageHandlers.JKEventHandler.postMessage(message);
    }
  },

  callBack: function(callBackName, data) {
    Event.fireEvent(callBackName, data);
  },

  removeAllCallBacks: function(data) {
    Event._listeners = {};
  }
};

var Event = {
  _listeners: {},

  addEvent: function(type, fn) {
    if (typeof this._listeners[type] === "undefined") {
      this._listeners[type] = [];
    }
    if (typeof fn === "function") {
      this._listeners[type].push(fn);
    }

    return this;
  },

  fireEvent: function(type, param) {
    var arrayEvent = this._listeners[type];
    if (arrayEvent instanceof Array) {
      for (var i = 0, length = arrayEvent.length; i < length; i += 1) {
        if (typeof arrayEvent[i] === "function") {
          arrayEvent[i](param);
        }
      }
    }

    return this;
  },

  removeEvent: function(type, fn) {
    var arrayEvent = this._listeners[type];
    if (typeof type === "string" && arrayEvent instanceof Array) {
      if (typeof fn === "function") {
        for (var i = 0, length = arrayEvent.length; i < length; i += 1) {
          if (arrayEvent[i] === fn) {
            this._listeners[type].splice(i, 1);
            break;
          }
        }
      } else {
        delete this._listeners[type];
      }
    }

    return this;
  }
};
