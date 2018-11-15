$("#success").click(function(){
    new Tips("success",'这是一个成功的提示',2000);
})
$("#error").click(function () {
    new Tips("error", '这是一个失败的提示', 2000);
})
$("#warning").click(function () {
    new Tips("warning", '这是一个警告的提示', 2000);
})
$("#message").click(function () {
    new Tips("message", '这是一个消息的提示', 2000);
})