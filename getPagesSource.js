function getProperty(strArr, property, step = 1, replace = null, want = 1) {
    let index = strArr.indexOf(property);
    let hasProperty = index > -1
    if (!hasProperty) {
        return 0;
    }

    let elementOne = replace ? strArr[index + step].replace(replace, '') : strArr[index + step];
    if (want === 1) {
        return elementOne;
    } else {
        let elementTwo = replace ? strArr[index + step + 1].replace(replace, '') : strArr[index + step + 1];
        return [elementOne, elementTwo];
    }
}

/// 通过 domcument 拼接相应 字符串
function DOMtoString(document_root) {
    var loadUrl = document.URL;
    if (loadUrl.includes('csdn')) {
        removeCodeImg()
    } else if (loadUrl.includes('cnblogs.com')) {
        moveReleaseDataToTop()
    } else if (loadUrl.includes('91hiwork')) {
        return 'fix ' + document.getElementsByClassName('editable-field inactive')[0].innerText + ' ' + loadUrl
    } else if (loadUrl.includes('pgyer.com')) {

        let div = document.getElementsByClassName('span12 app-title')[1]
        let versionDiv = document.getElementsByTagName('li')[0]
        versionDiv.innerText = versionDiv.innerText.split('(')[0]
        div.append(versionDiv)
        let desDiv = document.getElementsByClassName('tag-box margin-bottom-40')[0]
        div.append(desDiv)
    } else if (loadUrl.includes('lanhuapp.com/web') || loadUrl.includes('localhost')) {
        // 图片 文字 bgview

        // frame面板
        let annotationArr = document.getElementsByClassName('annotation_item');
        let inerContent = '';
        for (let i = 0; i < annotationArr.length; i++) {
            inerContent += annotationArr[i].innerText + '\n'
        }
        let strArr = inerContent.split('\n');

        // let frameDiv = annotationArr[0]
        // // 属性面板
        // let propertyDiv = annotationArr[1]
        // // 代码面板
        // let codeDiv = annotationArr[3]
        // codeStr = annotationArr[4]
        // let codeStr = codeDiv.innerText

        // let codeStrs = codeStr.split('\n')
        // let frameStrs = frameDiv.innerText.split('\n')
        // let propertyStrs = propertyDiv.innerText.split('\n')

        // let inerContent = frameDiv.innerText + '\n' + propertyDiv.innerText + '\n' + codeDiv.innerText;

        // // x y 始终以右上角来
        // let viewX = frameStrs[3].replace('pt', '')
        // let viewY = frameStrs[4].replace('pt', '')
        //
        // // 宽高
        // let viewWidth = frameStrs[6].replace('pt', '')
        // let viewHeight = frameStrs[7].replace('pt', '')

        let fontWeight = getProperty(strArr, "字重");
        let fontSize = getProperty(strArr, "字号", 1, 'pt');
        let colorArr = getProperty(strArr, "颜色", 1, null, 2);
        let widthHeightArr = getProperty(strArr, "大小", 1, 'pt', 2);
        let textContent = getProperty(strArr, "内容");
        let corner = getProperty(strArr, "圆角", 1, 'pt');

        return [fontWeight, fontSize, colorArr, widthHeightArr, textContent, corner];

        // if (!codeStr.startsWith('代码')) {
        //     // UIImageView
        //     return [viewX, viewY]
        // } else {
        //     if (codeStr.includes('UILabel')) {
        //         // UILabel
        //         //字重
        //         let fontWeight = propertyStrs[3]
        //         if (propertyStrs[4] === '对齐') {
        //             //对齐方式
        //             // let fontWeight = getOCFontMethodName(propertyStrs[3])
        //         }
        //         //字体大小
        //         let fontSize = propertyStrs[23].replace('pt', '')
        //         //文字内容
        //         let contentStr = propertyStrs[32]
        //         // document.getElementsByClassName('item_one item_content')[0].textContent
        //         //文字颜色
        //         let textColorHex = propertyStrs[8]
        //         //文字颜色透明度
        //         let textColorAlpha = propertyStrs[9]
        //         return [viewX, viewY, viewWidth, viewHeight, contentStr, fontWeight, fontSize, textColorHex, textColorAlpha]
        //     } else if (codeStr.includes('UIView')) {
        //         // UIView
        //         // 背景颜色 #9A2037
        //         let bgColorHex = propertyStrs[1]
        //         // 颜色透明度 100
        //         let bgColorAlpha = propertyStrs[2].replace('%', '')
        //
        //         return [viewX, viewY, viewWidth, viewHeight, bgColorHex, bgColorAlpha, corner]
        //
        //     } else {
        //         alert('未知类型' + codeStr)
        //     }
        // }
    }

    return "未处理的url";
}


function injectDom() {
    var elementsByClassName = document.getElementsByClassName("layers_item");

    for (let i = 0; i < elementsByClassName.length; i++) {
        elementsByClassName[i].addEventListener('click', function () {
            // 注入脚本时，自动发送消息getSource，调用DOMtoString方法给返回值
            var doMtoString = DOMtoString(document);
            copyStr(doMtoString)
            // chrome.runtime.sendMessage({
            //     action: "getSource",
            //     source: doMtoString
            // });
        })
    }
}


// 注入脚本时，自动发送消息getSource，调用DOMtoString方法给返回值
// chrome.runtime.sendMessage({
//     action: "getSource",
//     source: DOMtoString(document)
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

function onWindowLoad() {
    var observer = new MutationObserver(function (mutations, observer) {
        injectDom()
    });
    var el = document.querySelector('.detail_box');
    var options = {
        'childList': true,
        'attributes': true
    };
    observer.observe(el, options);
// 创建并返回一个 MutationObserver 实例， 并侦听el元素的变动。


}

// 窗口载入时使用自己的载入函数
window.onload = onWindowLoad;
injectDom()

/// 新加面板
document.addEventListener('DOMContentLoaded', function () {

    // injectDom();
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
