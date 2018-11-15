# Tips
基于jQuery的提示框插件
# BroadCast-3D
原生JS实现好玩的3D轮播图旋转特效。支持多参数注入。
唯一的不足点：由于开始写插件（轮子）吧，IE兼容性的做的不太好，后面会慢慢填补上这个坑。

**实例**：

![Dome演示](http://www.ctomorrow.top/Tips/demo/index.html)

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
     new Tips("success",'这是一个成功的提示',2000);
    })
  </script>
```

**第二个参数**

第二个参数为数组类型，是引用图片url地址的数组集合。
```javascript
  new Broadcast('#app', ["img/1.png","img/2.png","img/1.png","img/2.png","img/1.png","img/2.png","img/1.png", "img/2.png"]);
```  
**第三个参数**

可选，表示图片偏移半径。值为数字，默认值为250.
```javascript
  new Broadcast('#app', ["img/1.png","img/2.png","img/1.png","img/2.png","img/1.png","img/2.png","img/1.png", "img/2.png"],250);
```
    
**第四个参数**

可选，表示图片运动一次后所暂停的时间，值为数字（可为小数），以秒为单位，默认值为0
```javascript
  new Broadcast('#app', ["img/1.png","img/2.png","img/1.png","img/2.png","img/1.png","img/2.png","img/1.png", "img/2.png"],250,0);
``` 
**第五个参数**

可选，表示图片的宽度（为了防止图片变形，以图片的宽度定图片的大小），值为数值，以px为单位，默认值为100
```javascript
  new Broadcast('#app', ["img/1.png","img/2.png","img/1.png","img/2.png","img/1.png","img/2.png","img/1.png", "img/2.png"],250,0,100);
``` 
## 类名
  当文件加载到项目顶端的时候，会产生一个名为Broadcast的全局类名。




