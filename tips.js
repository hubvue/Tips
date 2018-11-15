/** 
 * @name 基于jQuery的消息提示框插件
 * @author wangchong 
 * @param type：提示框的类型（有四种：success、error、warning、message），默认值为message
 * @param content：提示框显示的内容，默认值“内容为空”,
 * @param time：提示框存在时长，默认为1000
 * @example new Tips('success','这是一个成功的提示',2000)
 * @
*/
$(function(w,undefined){
    var _self = typeof w == "object" && typeof w.window == "object" && w || this; 
    
    function Tips(type,content,time){
        if(this instanceof Tips) {
            this.type = typeof type == "string" ? type : "message";
            this.content = typeof content == "undefined" ? "内容为空" : content;
            this.time = typeof time == "number" ? time : 1000;
            this.init(this.type,this.content);
        } else{
            return new Tips(type,content,time);
        }

    }
    //判断提示框类型
    Tips.prototype.init = function(type,content){
        this.initStyle();
        switch(type) {
            case 'success' :
                this.successTip(content);
                break;
            case 'error' :
                this.errorTip(content);
                break;
            case 'warning' :
                this.warnTip(content);
                break;
            case 'message' : 
                this.messTip(content);
                break;
        }
    }
    //样式信息
    Tips.prototype.initStyle = function(){
        this.tipsStyle = {
            position: "fixed",
            width: "350px",
            top: "20px",
            left: "35%",
            padding: "0px 25px",
            boxSizing: "border-box",
        };
        this.tipStyle = {
            opacity: 0,
            width: "300px",
            minHeight: "30px",
            borderRadius: "5px",
            boxShadow: "0px 1px 3px 0 rgba(0, 0, 0, .5)",
            margin: "20px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            fontSize: "17px",
            padding: "10px 0"
        }
        this.iconStyle = {
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            color: "#fff",
            fontWeight: "bold",
            textAlign: "center",
        }
        this.closeStyle = {
            fontSize: "25px",
            cursor: "pointer"
        }
        this.successTipStyle = {
            backgroundColor: "#D4EDDA",
            color: "rgb(58, 134, 75)",
        }
        this.errorTipStyle = {
            backgroundColor: "#f8d7da",
            color: "#a75158"
        }
        this.errorIconStyle = {
            backgroundColor: "#721C24",
            fontSize: "18px",
            lineHeight: "18px"
        }
        this.warnTipStyle ={
            backgroundColor: "#FFF3CD",
            color: "rgb(160, 141, 81)",
        }
        this.warnIconStyle = {
            backgroundColor: "#856404",
            fontSize: "23px",
            lineHeight: "21px"
        }
        this.messTipStyle = {
            backgroundColor: "#D1ECF1",
            color: "rgb(69, 123, 133)"
        }
        this.messContentStyle = {
            width : "230px",
            textAlign : "center",
        }

    }
    // 正确提示框
    Tips.prototype.successTip = function(content){
        var succArr = this.initPublic();
        $(succArr[1]).css(this.successTipStyle);
        $(succArr[2]).html("√").css("backgroundColor"," #175926");
        $(succArr[3]).html(content);
        $(succArr[1]).append(succArr[2],succArr[3],succArr[4]);
        $(succArr[0]).append(succArr[1]);
        $(succArr[1]).animate({
            opacity : 1,
        },500);
        this.disTip(succArr[1]);

    };
    // 错误提示框
    Tips.prototype.errorTip = function(content){
        var errArr = this.initPublic();
        $(errArr[1]).css(this.errorTipStyle);
        $(errArr[2]).html("×").css(this.errorIconStyle);
        $(errArr[3]).html(content);
        $(errArr[1]).append(errArr[2], errArr[3], errArr[4]);
        $(errArr[0]).append(errArr[1]);
        $(errArr[1]).animate({
            opacity: 1,
        }, 500);
        this.disTip(errArr[1]);
    };
    //警告提示框
    Tips.prototype.warnTip = function(content){
        var warnArr = this.initPublic();
        $(warnArr[1]).css(this.warnTipStyle);
        $(warnArr[2]).html("¤").css(this.warnIconStyle);
        $(warnArr[3]).html(content);
        $(warnArr[1]).append(warnArr[2], warnArr[3], warnArr[4]);
        $(warnArr[0]).append(warnArr[1]);
        $(warnArr[1]).animate({
            opacity: 1,
        }, 500);
        this.disTip(warnArr[1]);
    };
    //消息提示框
    Tips.prototype.messTip = function(content){
        var messArr = this.initPublic();
        $(messArr[1]).css(this.messTipStyle);
        $(messArr[3]).html(content).css(this.messContentStyle);
        $(messArr[1]).append(messArr[3], messArr[4]);
        $(messArr[0]).append(messArr[1]);
        $(messArr[1]).animate({
            opacity: 1,
        }, 500);
        this.disTip(messArr[1]);
        
    };
    //创建提示框盒子
    Tips.prototype.createTips = function(){
        var tips = document.createElement("div");
        $(tips).attr("type",'tips');
        this.addTipsStyle(tips);
        $(document.body).append(tips);
        this.closeTip();
    }
    //提示框盒子添加样式
    Tips.prototype.addTipsStyle = function(tips){
        $(tips).css(this.tipsStyle);
    }
    //判断是否存在提示框
    Tips.prototype.isExistenceTips = function(){
        var drag = $("[type='tips']")[0] ? $("[type='tips']")[0] : false;
        if (drag) {
            return drag;
        } else {
            this.createTips();
            return $("[type='tips']")[0];
        }
    }
    //提示框添加公共样式
    Tips.prototype.addTipStyle = function(tip){
        $(tip).css(this.tipStyle);
    }
    //图标公共样式
    Tips.prototype.addIconStyle = function(icon){
        $(icon).css(this.iconStyle);
    }
    //关闭公共样式
    Tips.prototype.addCloseStyle = function(close){
        $(close).css(this.closeStyle);
    }
    //公共设置
    Tips.prototype.initPublic = function(){
        var initArr = [];
        var tips = this.isExistenceTips();
        initArr.push(tips);
        var tip = document.createElement("div");
        this.addTipStyle(tip);
        initArr.push(tip);
        for(var i = 0; i < 3; i ++) {
            var icon = document.createElement("span");
            initArr.push(icon);
        }
        this.addIconStyle(initArr[2]);
        $(initArr[4]).html("×").attr("id","close");
        this.addCloseStyle(initArr[4]);
        return initArr;
    }
    //提示框消失
    Tips.prototype.disTip = function(tip){
        $(tip).delay(this.time).fadeOut(500, function () {
            $(this).remove();
        });
        setTimeout(() => {
            this.disTips($("[type='tips']"));
        },this.time + 1500);
        
    }
    //点击close 提示框消失
    Tips.prototype.closeTip = function(){
        var tips = $("[type='tips']");
        var tipSelf = this;
        tips.on("click", 'span', function () {
            if($(this).attr("id") == "close"){
                $(this).parent().stop().fadeOut(500, function () {
                    $(this).remove();
                });
            }
            setTimeout(() => {
                tipSelf.disTips($("[type='tips']"));
            },2000);
        })
    }
    //判断提示框盒子是否为空，为空清楚
    Tips.prototype.disTips = function(tips){
        if (tips.children().length == 0) {
            $(tips).off("click").remove();
        }
    }
    _self.Tips = Tips;
}(window))

