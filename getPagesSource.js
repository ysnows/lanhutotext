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


        // Medium|14|#2A2A2A,100%|142.5,14|计划有便，没时间消费|0
        let fontWeight = getProperty(strArr, "字重");
        let fontSize = getProperty(strArr, "字号", 1, 'pt');
        if (fontWeight === 'Medium' || fontWeight === 'Bold') {
            fontSize = 'b' + fontSize
        }

        let colorArr = [0, 0];
        let bgColorArr = [0, 0];
        let borderColorArr = [0, 0];
        if (strArr.indexOf("内边框") > -1) {
            borderColorArr = getProperty(strArr, "颜色", 1, null, 2);
        } else if (fontWeight === 0) {
            bgColorArr = getProperty(strArr, "颜色", 1, null, 2);
        } else {
            colorArr = getProperty(strArr, "颜色", 1, null, 2);
        }
        let widthHeightArr = getProperty(strArr, "大小", 1, 'pt', 2);
        let textContent = getProperty(strArr, "内容");
        let corner = getProperty(strArr, "圆角", 1, 'pt');
        let borderWidth = getProperty(strArr, "粗细", 1, 'pt');

        let res = [fontSize, colorArr, widthHeightArr, textContent, corner, bgColorArr, borderWidth, borderColorArr]
        return res.join('|')

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

});
