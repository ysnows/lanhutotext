var title;
var url;
// let img = document.getElementById('show_image');
// let btn = document.getElementById('show_btn');
// let lab = document.getElementById('show_lab');

/// document.getElementById('show_line');


// 监听来消息 getSource
chrome.runtime.onMessage.addListener(function (request, sender) {
    if (request.action === "getSource") {
        let contentStr = request.source;
        // message.innerText = contentStr;
        // copyStr(contentStr)
        // window.close()

        // if (url.includes('cnblogs.com')) {
        //   // 在博客完时，只是追加日期而，面板不用显示出来
        //   document.body.hidden = true
        // }
        // else if (url.includes('localhost')) {
        //   // 在博客完时，只是追加日期而，面板不用显示出来
        //   document.body.hidden = true
        // }
        // else if (url.includes('pgyer.com')) {
        //   document.body.hidden = true
        // }
        // else if (url.includes('csdn')) {
        //   // 在csdn里，只是移除登录框，不显示面板
        //   document.body.hidden = true
        // }
        // else if (url.includes('lanhuapp.com/web') ||
        //   url.includes('app.mockplus.cn')) {
        //   let strs = request.source;
        //   // 多行 拼接 变量 ${变量名} innerText
        //   let op = document.getElementById('op').value;
        //   if (op === 'swift_code') {
        //     if (lab.checked) {
        //       let colorStr = strs[3].replace('#', '')
        //       message.innerText =
        //         `\nlet lab: UILabel = {
        //         let lab = UILabel()
        //         lab.text = "${strs[0]}"
        //         lab.textColor = UIColor(rgb: 0x${colorStr})
        //         lab.font = UIFont.systemFont(ofSize: calculate(ipadfs: ${strs[2]}))
        //
        //         addSubview(lab)
        //         lab.snp.makeConstraints { (make) in
        //             make.centerX.equalToSuperview()
        //             make.top.equalToSuperview().offset(calculate(h: 28.0))
        //         }
        //
        //         return lab
        //     }()`
        //     }
        //     else if (btn.checked) {
        //       message.innerText =
        //         `\nUIButton *btn = ({
        //              UIButton *btn = [UIButton btn];
        //              btn.normalTitle = @"${strs[0]}";
        //              btn.titleLabel.font = [UIFont ${strs[1]}:  ${strs[2]}];
        //              btn.normalTitleColor = @"${strs[3]}".hexColor;
        //
        //              btn;
        //         });`
        //     } else if (showLine.checked) {
        //       // ["圆角矩形 750","systemFontOfSize","12","RGBA233, 236, 245, 1"]
        //
        //       message.innerText =
        //         `\nUIView *vLine = ({
        //         UIView *vLine = [UIView new];
        //         vLine.backgroundColor = @"${strs[3]}".hexColor;
        //         [contentView addSubview: vLine];
        //         [vLine mas_makeConstraints:^(MASConstraintMaker *make) {
        //           make.top.equalTo(superView).offset(0);
        //           make.leading.equalTo(superView).offset(0);
        //           // make.bottom.equalTo(superView.mas_bottom).offset(0);
        //           // make.trailing.equalTo(superView.mas_trailing).offset(0);
        //           make.width.equalTo(@1);
        //           // make.height.equalTo(@12);
        //           // make.size.mas_equalTo(CGSizeMake(30, 30));
        //           // make.centerX.equalTo(superView);
        //           // make.centerY.equalTo(superView);
        //         }];
        //     });`
        //     }
        //   }
        //   else if (op === 'oc_code') {
        //     // 类型判断 typeof strs === 'string'
        //     // 以字符串开始 startsWith
        //     if (img.checked) {
        //       // 返回来的就是UIImageView
        //       message.innerText = `\nUIImageView *imgV = ({
        //
        //         NSString *name = @"图片名";
        //         UIImage *img = [UIImage imageNamed:name];
        //         UIImageView *imgV = [[UIImageView alloc] initWithImage:img];
        //         imgV.backgroundColor = [UIColor redColor];
        //         UIView *superView = self.view;
        //         [superView addSubview: imgV];
        //         [imgV mas_makeConstraints:^(MASConstraintMaker *make) {
        //             make.top.equalTo(superView).offset(${strs[1]});
        //             make.leading.equalTo(superView).offset(${strs[0]});
        //             // make.bottom.equalTo(superView.mas_bottom).offset(0);
        //             // make.trailing.equalTo(superView.mas_trailing).offset(0);
        //             // make.width.equalTo(@1);
        //             // make.height.equalTo(@12);
        //             // make.size.mas_equalTo(CGSizeMake(30, 30));
        //             // make.centerX.equalTo(superView);
        //             // make.centerY.equalTo(superView);
        //         }];
        //
        //         imgV;
        //     });`
        //       return
        //     }
        //     if (lab.checked) {
        //       // 返回来的就是UILabel
        //       message.innerText = `\nUILabel *lab = ({
        //
        //         UILabel *lab = [UILabel new];
        //         lab.text = @"${strs[4]}";
        //         lab.font = [UIFont ${strs[5]}:  ${strs[6]}];
        //         lab.textColor = @\"${strs[7]}".hexColor;
        //
        //         UIView *superView = self.view;
        //         [superView addSubview: lab];
        //         [lab mas_makeConstraints:^(MASConstraintMaker *make) {
        //           make.top.equalTo(superView).offset(${strs[1]});
        //             make.leading.equalTo(superView).offset(${strs[0]});
        //             // make.bottom.equalTo(superView.mas_bottom).offset(0);
        //             // make.trailing.equalTo(superView.mas_trailing).offset(0);
        //             // make.width.equalTo(@1);
        //             // make.height.equalTo(@12);
        //             // make.size.mas_equalTo(CGSizeMake(30, 30));
        //             // make.centerX.equalTo(superView);
        //             // make.centerY.equalTo(superView);
        //         }];
        //
        //         lab;
        //     });`;
        //       return
        //     }
        //
        //     if (btn.checked) {
        //       if (strs.length == 2) {
        //         // 纯图片按钮
        //         message.innerText =
        //           `\nUIButton *btn = ({
        //              UIButton *btn = [UIButton buttonWithType: UIButtonTypeCustom];
        //              NSString *name = @"图片名";
        //               UIImage *img = [UIImage imageNamed:name];
        //              [btn setImage:img forState:UIControlStateNormal];
        //
        //             UIView *superView = self.view;
        //             [superView addSubview: btn];
        //             [btn mas_makeConstraints:^(MASConstraintMaker *make) {
        //               make.top.equalTo(superView).offset(${strs[1]});
        //               make.leading.equalTo(superView).offset(${strs[0]});
        //             // make.bottom.equalTo(superView.mas_bottom).offset(0);
        //             // make.trailing.equalTo(superView.mas_trailing).offset(0);
        //             // make.width.equalTo(@1);
        //             // make.height.equalTo(@12);
        //             // make.size.mas_equalTo(CGSizeMake(30, 30));
        //             // make.centerX.equalTo(superView);
        //             // make.centerY.equalTo(superView);
        //             }];
        //
        //              btn;
        //         });`
        //       }
        //       else if (strs.length == 6 || strs.length == 7) {
        //         // 纯背景色按钮 // 38,543,300,44,#9A2037,100,23
        //         let corner = (strs.length == 7) ? `btn.layer.cornerRadius = 23;` : ''
        //         let configBgColorStr = configBgColor('btn', strs[4], strs[5])
        //
        //         message.innerText =
        //           `\nUIButton *btn = ({
        //              UIButton *btn = [UIButton buttonWithType: UIButtonTypeCustom];
        //              ${configBgColorStr}
        //              ${corner}
        //
        //              UIView *superView = self.view;
        //              [superView addSubview: btn];
        //              [btn mas_makeConstraints:^(MASConstraintMaker *make) {
        //                make.top.equalTo(superView).offset(${strs[1]});
        //                make.leading.equalTo(superView).offset(${strs[0]});
        //                // make.bottom.equalTo(superView.mas_bottom).offset(0);
        //                // make.trailing.equalTo(superView.mas_trailing).offset(0);
        //                // make.width.equalTo(@1);
        //                // make.height.equalTo(@12);
        //                // make.size.mas_equalTo(CGSizeMake(30, 30));
        //                // make.centerX.equalTo(superView);
        //                // make.centerY.equalTo(superView);
        //              }];
        //
        //              btn;
        //         });`
        //       }
        //       else {
        //         // 纯文字按钮
        //         //  return [viewX, viewY, viewWidth, viewHeight, labStr, ocFontMethodName, labFontSizeStr, LabTextColorHexStr]
        //         message.innerText =
        //           `\nUIButton *btn = ({
        //              UIButton *btn = [UIButton buttonWithType: UIButtonTypeCustom];
        //              [btn setTitle: @"${strs[4]}" forState: UIControlStateNormal];
        //              btn.titleLabel.font = [UIFont ${strs[5]}:  ${strs[6]}];
        //              [btn setTitleColor: @\"${strs[7]}".hexColor forState: UIControlStateNormal];
        //
        //              UIView *superView = self.view;
        //              [superView addSubview: btn];
        //              [btn mas_makeConstraints:^(MASConstraintMaker *make) {
        //                make.top.equalTo(superView).offset(${strs[1]});
        //                make.leading.equalTo(superView).offset(${strs[0]});
        //             // make.bottom.equalTo(superView.mas_bottom).offset(0);
        //             // make.trailing.equalTo(superView.mas_trailing).offset(0);
        //             // make.width.equalTo(@1);
        //             // make.height.equalTo(@12);
        //             // make.size.mas_equalTo(CGSizeMake(30, 30));
        //             // make.centerX.equalTo(superView);
        //             // make.centerY.equalTo(superView);
        //              }];
        //
        //              btn;
        //         });`
        //       }
        //
        //     }
        //     else if (showLine.checked) {
        //       // 38,543,300,44,#9A2037,100,23
        //       let isVLine = strs[2] < 2
        //       let isHLine = strs[3] < 2
        //       let WHConst = ''
        //       if (isVLine || isHLine) {
        //         WHConst = isVLine ? `make.width.equalTo(@${strs[2]});` : `make.height.equalTo(@${strs[3]});`
        //       }
        //       // 圆角
        //       let cornerStgr = (strs.length >= 7) ? `line.layer.cornerRadius = ${strs[6]};` : ''
        //
        //       let configBgColorStr = configBgColor('line', strs[4], strs[5])
        //
        //
        //       message.innerText =
        //         `\nUIView *vLine = ({
        //
        //           CGRect frame = CGRectMake(${strs[0]}, ${strs[1]}, ${strs[2]}, ${strs[3]});
        //           UIView *line = [[UIView alloc] initWithFrame: frame];
        //           ${configBgColorStr}
        //           ${cornerStgr}
        //
        //           UIView *superView = self.view;
        //           [superView addSubview: line];
        //           [line mas_makeConstraints:^(MASConstraintMaker *make) {
        //             make.top.equalTo(superView.mas_bottom).offset(${strs[1]});
        //             make.leading.equalTo(superView).offset(${strs[0]});
        //             // make.bottom.equalTo(superView.mas_bottom).offset(0);
        //             // make.trailing.equalTo(superView.mas_trailing).offset(0);
        //             ${WHConst}
        //             // make.height.equalTo(@12);
        //             // make.size.mas_equalTo(CGSizeMake(30, 30));
        //             // make.centerX.equalTo(superView);
        //             // make.centerY.equalTo(superView);
        //           }];
        //
        //           line;
        //       });`
        //     }
        //   }
        //
        // }
        // else {
        //   message.innerText = request.source;
        // }
    }
});

/**
 * 设置背景色
 * @param {String} varName 变量名如, line btn lab
 * @param {String} hexColorStr 十六进制色的字符串如，#9A2037
 * @param {Number} alphaStr 透明度 100 70
 */
// function configBgColor(varName, hexColorStr, alphaStr) {
//     // 透明度
//     let returnCodeStr = `${varName}.backgroundColor = @"${hexColorStr}".hexColor;`
//     if (alphaStr / 100 != 1) {
//         // 透明度
//         returnCodeStr = `${varName}.backgroundColor = [@"${hexColorStr}".hexColor colorWithAlphaComponent: ${alphaStr / 100.0}];`
//     }
//     return returnCodeStr
// }

function onWindowLoad() {

    // 获取 popup.html里的元素进行字符串设定
    // var message = document.querySelector('#message');
    // 获取 当前选择的tab的title 和 url
    chrome.tabs.getSelected(null, function (tab) {//获取当前tab
        title = tab.title;
        url = tab.url;
    });
    // 注入脚本，接收错误回显
    chrome.tabs.executeScript(null, {
        file: "getPagesSource.js"
    }, function () {
        if (chrome.runtime.lastError) {
            message.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
        }
    });

}

// 窗口载入时使用自己的载入函数
window.onload = onWindowLoad;

/// 新加面板
document.addEventListener('DOMContentLoaded', function () {

    // 默认配置
    // var defaultConfig = {'op': 'oc_code', 'ocCode': 'btn'};
    // 读取数据，第一个参数是指定要读取的key以及设置默认值
    // chrome.storage.sync.get(defaultConfig, function (items) {
    //     document.getElementById('op').value = items.op;
    //     let ocCodeStr = items.ocCode;
    //     if (ocCodeStr === 'img') {
    //         img.checked = true;
    //     } else if (ocCodeStr === 'btn') {
    //         btn.checked = true;
    //     } else if (ocCodeStr === 'lab') {
    //         lab.checked = true;
    //     } else if (ocCodeStr === 'line') {
    //         showLine.checked = true;
    //     }
    // });
});
// 复制代码事件
// document.getElementById('copyCode').addEventListener('click', function () {
//
//     let codeStr = document.getElementById('message').innerText;
//     copyStr(codeStr)
//
// });

/// 复制字符串到粘贴板
function copyStr(str) {
    // 复制字符串到粘贴板 http://www.voidcn.com/article/p-effxpdwn-buc.html
    var input = document.createElement('textarea');
    document.body.appendChild(input);
    input.value = str;
    input.focus();
    input.select();
    document.execCommand('Copy');
    input.remove();
}

// 保存配置事件
// document.getElementById('save').addEventListener('click', function () {
//     let op = document.getElementById('op').value;
//     let ocCodeStr = '';
//     if (img.checked) {
//         ocCodeStr = 'img';
//     } else if (btn.checked) {
//         ocCodeStr = 'btn';
//     } else if (lab.checked) {
//         ocCodeStr = 'lab';
//     } else if (showLine.checked) {
//         ocCodeStr = 'line';
//     }
//     let showImage = img.checked;
//     let saveDict = {
//         op: op,
//         ocCode: ocCodeStr
//     };
//     chrome.storage.sync.set(saveDict, function () {
//         document.getElementById('status').textContent = '保存成功！';
//         setTimeout(() => {
//             document.getElementById('status').textContent = '';
//         }, 800);
//     });
// });

// checked 事件互斥

// img.addEventListener('change', function () {
//     btn.checked = false;
//     lab.checked = false;
//     showLine.checked = false;
// });
// document.getElementById('show_btn').addEventListener('change', function () {
//     img.checked = false;
//     lab.checked = false;
//     showLine.checked = false;
// });
// document.getElementById('show_lab').addEventListener('change', function () {
//     img.checked = false;
//     btn.checked = false;
//     showLine.checked = false;
// });
// document.getElementById('show_line').addEventListener('change', function () {
//     img.checked = false;
//     btn.checked = false;
//     lab.checked = false;
// });
