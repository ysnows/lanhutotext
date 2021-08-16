// 监听来消息 getSource
chrome.runtime.onMessage.addListener(function (request, sender) {
    if (request.action === "getSource") {
        let contentStr = request.source;
        // message.innerText = contentStr;
        copyStr(contentStr)

    }
});


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
