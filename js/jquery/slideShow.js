/*
 * slideShow
 *
 * $Date: 2010-11-19 15:52:17 $
 * $editor: 杜习坤
 * $Rev: v2.0 $
 * $Description:
 * $1. 修正了没有title时，鼠标移动在图片上时显示"undefined" $
 * $2. 修正了没有src时，鼠标点击图片跳转链接为"undefined" $
 */

$.fn.slideShow = function(params){
    //要轮播显示的图片数组
    var _pics = params.pics;
    //图片总数
    var _piclen = (_pics||[]).length;
    //舞台的宽度
    var _width = params.width;
    //舞台的高度
    var _height = params.height;
    //当前第几张图
    var _currindx = 1;
    //是否要自动轮播切换
    var _autoshow = params.auto?params.auto:false;
    //设置自动切换的时间间隔
    var _interval = (params.interval?params.interval:3)*1000;
    //自动切换图片的速度，默认为2秒
    var _speed = (params.speed?params.speed:5)*1000;
    //btnwarp
    var _btnwarp = params.btnwarp?params.btnwarp:{"float":"right"};
    //show num
    var _shownum = params.shownum!=undefined?params.shownum:true;
    //按钮普通样式
    var _btnclass = params.btn?params.btn:{"display":"inline", "float":"left", "border":"1px solid #999", "height":20, "line-height":"20px", "width":20, "background":"#eee", "font-size":13, "color":"#000", "cursor":"pointer", "text-align":"center", "font-weight":"bold", "margin-left":3};
    //按钮当前样式
    var _btncurrclass = params.btnselected?params.btnselected:{"display":"inline", "float":"left", "border":"1px solid #f00", "height":20, "line-height":"20px", "width":20, "background":"#c00", "font-size":13, "color":"#fff", "text-align":"center", "font-weight":"bold", "margin-left":3};
    //是否显示底部按钮
    var _isshowbtn = params.showbutton!=undefined?params.showbutton:true;
    //是否显示底部的白底
    var _isshowbottom = params.showbottom!=undefined?params.showbottom:true;

    return this.each(function(){
        var panel = $(this);
        var autoobj;
        var seq = (new Date).getTime();
        function initialize(){
            //设置舞台的宽和高
            panel.css({"width":_width, "height":_height, "position":"relative"});

            //定义图片显示区并添加到舞台中
            var picwarp = $("<div id='_picwarp"+seq+"'></div>");
            picwarp.css({"width":_width, "height":_height, "position":"absolute", "z-index":1, "top":0, "left":0});
            panel.append(picwarp);

            //定义舞台的底，以供展示按钮和文本区
            var btnbottom = $("<div id='_btnbottom"+seq+"'></div>");
            btnbottom.css({width:_width-10, "position":"absolute", "z-index":2, bottom:4, left:5, "filter":"alpha(opacity=70)", "opacity":0.7});
            panel.append(btnbottom);

            //定义按钮区并添加到底中
            var btnwarp = $("<div id='_btnwarp"+seq+"'></div>");
            btnwarp.css(_btnwarp);
            btnbottom.append(btnwarp);

            for(var i=0; i<_piclen; i++){
                var indx = i + 1;
                //添加图片
                var picitem = $("<div id='_pic"+seq+"_" + indx + "'><img style='border:none;' src='" + _pics[i].src + "' width='" + _pics[i].width + "' height='" + _pics[i].height + "'/></div>");
                if(_pics[i].title!=undefined&&_pics[i].title!=""){
                    $("img",picitem).attr("title",_pics[i].title);
                }
                if(_pics[i].link!=undefined&&_pics[i].link!=""){
                    $(picitem).append("<a target='_blank' href='" + _pics[i].link + "'></a>");
                    $("img",picitem).appendTo($("a",picitem));
                }
                picitem.css({display:"none", "position":"absolute", top:0, left:0});
                picwarp.append(picitem);
                //添加按钮
                var btnitem = $("<div id='_btn"+seq+"_" + indx + "'>" + (_shownum?indx:"") + "</div>");
                btnitem.css(_btnclass);
                btnwarp.append(btnitem);
                //为按钮绑定单击事件
                $("#_btn"+seq+"_" + indx).bind("click",switchto(indx));
            }
            //设置第一张图片显示
            picwarp.children().eq(0).fadeIn();
            //设置第一个按钮为当前
            btnwarp.children().eq(0).css(_btncurrclass);
        }
        function switchto(indx){
            return function(){
                if(indx>_piclen||indx<1)indx=1;
                if(indx!=_currindx){
                    $("#_picwarp"+seq).children().eq(_currindx-1).fadeOut();
                    $("#_picwarp"+seq).children().eq(indx-1).fadeIn();
                    $("#_btnwarp"+seq).children().eq(_currindx-1).css(_btnclass);
                    $("#_btnwarp"+seq).children().eq(indx-1).css(_btncurrclass);
                    _currindx = indx;
                    if(autoobj){
                        clearInterval(autoobj);
                        autoobj = setInterval(autoshow,_interval);
                    }
                }
            }
        }
        function autoshow(){
            if(!_autoshow)return;
            switchto(_currindx+1)();
        }
        //初始化舞台中的图片和按钮
        initialize();
        //如果用户需要自动播放，则开始计时，每隔指定时长就播放下一张
        if(_autoshow&&_piclen>1)autoobj = setInterval(autoshow,_interval);
        //判断如果图片数量为1张时，不显示底部的按钮
        if(_piclen<=1)$("#_btnwarp"+seq).hide();
        //根据用户需要展示或不展示底部的白底
        if(!_isshowbottom)$("#_btnbottom"+seq).css("background","none");
        //根据用户需要展示或不展示底部的按钮
        if(!_isshowbtn)$("#_btnwarp"+seq).hide();
    });
}



