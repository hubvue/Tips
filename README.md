# Tips
基于jQuery的提示框插件，可自动消失可手动消失。

**实例**：

[Dome演示](http://www.ctomorrow.top/Tips/demo/index.html)

## 依赖
基于jQuery，使用需首先在项目里添加jQuery
## 下载
```git
  https://github.com/hubvue/Tips.git
```
或者点击上方 Clone or download
## 使用
```HTML
  <script src="Tips/tips.js"> </script>
```
## 实例
HTML文件
```HTML
   <div class="box">
        <button id="success">success</button>
        <button id="error">error</button>
        <button id="warning">warning</button>
        <button id="message">message</button>
   </div>
```
JavaScript文件
```javascript
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
```
或者
```javascript
  $("#success").click(function(){
      Tips("success",'这是一个成功的提示',2000);
  })
  $("#error").click(function () {
      Tips("error", '这是一个失败的提示', 2000);
  })
  $("#warning").click(function () {
      Tips("warning", '这是一个警告的提示', 2000);
  })
  $("#message").click(function () {
      Tips("message", '这是一个消息的提示', 2000);
  })
```
## API
  多参数注入
  
**第一个参数 type**
第一个参数为提示框类型，四种类型可选。
参数的值：success、error、warning、message
默认值：message
```HTML
  <button id="success">success</button>
  <script>
    $("#success").click(function(){
     new Tips("success");
    })
  </script>
```

**第二个参数**

第二个参数为提示框中的内容，指向性提示（success，error、warning）内容最多12个字，非指向性提示文字可多可少。
默认值：“内容为空”
```javascript
  $("#success").click(function(){
     new Tips("success",'这是一个成功的提示');
    })
```  
**第三个参数**

第三个参数为提示框存在时长（当提示框存在指定时间后，自动消失）
默认值：1000ms
```javascript
  $("#success").click(function(){
     new Tips("success",'这是一个成功的提示',2000);
    })
```
     
## 类名
  当文件加载到项目顶端的时候，会产生一个名为Tips的全局类名。




