
//跑动的次数
var count = 0;
//动画的执行方向
var dir = false;
//定义计时器对象
var  timer;

var li_img = document.getElementsByClassName("li_img");
li_img[count].style.opacity = 0.5;
li_img[count+1].style.opacity = 0.5;
li_img[count+6].style.opacity = 0.5;
li_img[count+5].style.opacity = 0.5;


window.onload = function() {
    /*获取ul元素*/
    var ul_img = document.getElementsByClassName("ul_img")[0];
    //获取所有的li图片元素
    var li_img = document.getElementsByClassName("li_img");
    /*定义计时器，控制图片移动*/
    showtime();
    function showtime() {
        timer = setInterval(() => {
            if (dir == false) {
                ul_img.style.transform = "translate(" + -480 * count + "px)";
                li_img[count+1].style.opacity = 0.5;
                li_img[count+4].style.opacity = 1;
                count++;
                if (count >= 3) {
                    count = 3;
                    dir = true;
                }
            }
            else {
                count--;
                ul_img.style.transform = "translate(" + -480 * (count-1) + "px)";
                li_img[count+1].style.opacity = 1;
                li_img[count+4].style.opacity = 0.5;
                if (count <= -1) {
                    count = -1;
                    dir = false;
                }
            }

        }, 2000)
    }

}


//订单统计
var db =openDatabase('mydb4','1.0','order','1024*1024');
db.transaction(function(contex) {  //建立数据库表单
contex.executeSql('create table if not exists userinf(name,price,num)');
});


var obtn = document.getElementById('piaoxiang');
var obtn1 = document.getElementById('xiangjian');
var obtn2 = document.getElementById('zishu');
var obtn3 = document.getElementById('xiangcong');
var obtn4 = document.getElementById('xiangla');
var obtn5 = document.getElementById('xiangling');
var obtn6 = document.getElementById('shengchang');
var obtn7 = document.getElementById('jizhong');
var obtn8 = document.getElementById('yexiang');
var obtn9 = document.getElementById('taishi');
var obtn10 = document.getElementById('piaoxiangjian');
var obtn11 = document.getElementById('xiangjianjian');
var obtn12 = document.getElementById('zishujian');
var obtn13 = document.getElementById('xiangcongjian');
var obtn14 = document.getElementById('xianglajian');
var obtn15 = document.getElementById('xianglingjian');
var obtn16 = document.getElementById('shengchangjian');
var obtn17 = document.getElementById('jizhongjian');
var obtn18 = document.getElementById('yexiangjian');
var obtn19 = document.getElementById('taishijian');



obtn.onclick = function(){
    document.getElementById('jian1').innerHTML++;
    if(document.getElementById('jian1').innerHTML==1){
      db.transaction(function(contex){
        contex.executeSql('insert into userinf(name,price,num) values("飘香榴莲酥",10,0)');
      });
    }
    db.transaction(function(contex){
      contex.executeSql('update userinf set num=num+1 where name="飘香榴莲酥"');
    });
  alert('成功将飘香榴莲酥加入菜单');
}

obtn10.onclick = function(){
  if(document.getElementById('jian1').innerHTML==0)
  {
    alert('菜品不可为负值');
  }
  else {
    document.getElementById('jian1').innerHTML--;
    if (document.getElementById('jian1').innerHTML==0) {
      db.transaction(function(contex){
        contex.executeSql('delete from userinf where name="飘香榴莲酥"');
      });
    }
    if(document.getElementById('jian1').innerHTML>0)
    {
      db.transaction(function(contex){
        contex.executeSql('update userinf set num=num-1 where name="飘香榴莲酥"');
      });
    }
  alert('成功将飘香榴莲酥移除菜单');
  }
}

obtn1.onclick = function(){
    document.getElementById('jian2').innerHTML++;
    if(document.getElementById('jian2').innerHTML==1){
    db.transaction(function(contex){
    contex.executeSql('insert into userinf(name,price,num) values("香煎野菜饼",9,0)');
  });
}
db.transaction(function(contex){
  contex.executeSql('update userinf set num=num+1 where name="香煎野菜饼"');
});
  alert('成功将香煎野菜饼加入菜单');
}

obtn11.onclick = function(){
  if(document.getElementById('jian2').innerHTML==0)
  {
    alert('菜品不可为负值');
  }
  else {
    document.getElementById('jian2').innerHTML--;
    if(document.getElementById('jian2').innerHTML==0){
    db.transaction(function(contex){
    contex.executeSql('delete from userinf where name="香煎野菜饼"');
  });
}
  if(document.getElementById('jian2').innerHTML>0)
{
  db.transaction(function(contex){
    contex.executeSql('update userinf set num=num-1 where name="香煎野菜饼"');
  });
}
  alert('成功将香煎野菜饼移除菜单');
  }
}

obtn2.onclick = function(){
  document.getElementById('jian3').innerHTML++;
  if (document.getElementById('jian3').innerHTML==1) {
  db.transaction(function(contex){
    contex.executeSql('insert into userinf(name,price,num) values("紫薯流沙球",10,0)');
  });
}
db.transaction(function(contex){
  contex.executeSql('update userinf set num=num+1 where name="紫薯流沙球"');
});
  alert('成功将紫薯流沙球加入菜单');
}

obtn12.onclick = function(){
  if(document.getElementById('jian3').innerHTML==0)
  {
    alert('菜品不可为负值');
  }
  else {
    document.getElementById('jian3').innerHTML--;
    if (document.getElementById('jian3').innerHTML==0) {
    db.transaction(function(contex){
      contex.executeSql('delete from userinf where name="紫薯流沙球"');
    });
  }
  if(document.getElementById('jian3').innerHTML>0)
{
  db.transaction(function(contex){
    contex.executeSql('update userinf set num=num-1 where name="紫薯流沙球"');
  });
}
    alert('成功将紫薯流沙球移除菜单');
  }
}

obtn3.onclick = function(){
    document.getElementById('jian4').innerHTML++;
    if (document.getElementById('jian4').innerHTML==1) {
  db.transaction(function(contex){
    contex.executeSql('insert into userinf(name,price,num) values("香葱爆肥羊",13,0)');
  });
}
db.transaction(function(contex){
  contex.executeSql('update userinf set num=num+1 where name="香葱爆肥羊"');
});
  alert('成功将香葱爆肥羊加入菜单');
}

obtn13.onclick = function(){
  if(document.getElementById('jian4').innerHTML==0)
  {
    alert('菜品不可为负值');
  }
  else {
    document.getElementById('jian4').innerHTML--;
    if (document.getElementById('jian4').innerHTML==1) {
  db.transaction(function(contex){
    contex.executeSql('delete from userinf where name="香葱爆肥羊"');
  });
}
if(document.getElementById('jian4').innerHTML>0)
{
db.transaction(function(contex){
  contex.executeSql('update userinf set num=num-1 where name="香葱爆肥羊"');
});
}
  alert('成功将香葱爆肥羊移除菜单');
  }
}


obtn4.onclick = function(){
  document.getElementById('jian5').innerHTML++;
  if (document.getElementById('jian5').innerHTML==1) {
  db.transaction(function(contex){
    contex.executeSql('insert into userinf(name,price,num) values("香辣牛肉",17,0)');
  });
}
db.transaction(function(contex){
  contex.executeSql('update userinf set num=num+1 where name="香辣牛肉"');
});
  alert('成功将香辣牛肉加入菜单');
}

obtn14.onclick = function(){
  if(document.getElementById('jian5').innerHTML==0)
  {
    alert('菜品不可为负值');
  }
  else {
    document.getElementById('jian5').innerHTML--;
    if (document.getElementById('jian5').innerHTML==1) {
      db.transaction(function(contex){
        contex.executeSql('delete from userinf where name="香辣牛肉"');
          });
        }
        if(document.getElementById('jian5').innerHTML>0)
        {
        db.transaction(function(contex){
          contex.executeSql('update userinf set num=num-1 where name="香辣牛肉"');
        });
        }
          alert('成功将香辣牛肉移除菜单');
  }
}

obtn5.onclick = function(){
  document.getElementById('jian6').innerHTML++;
  if (document.getElementById('jian6').innerHTML==1) {
  db.transaction(function(contex){
    contex.executeSql('insert into userinf(name,price,num) values("响铃三文鱼",18,0)');
  });
}
db.transaction(function(contex){
  contex.executeSql('update userinf set num=num+1 where name="响铃三文鱼"');
});
  alert('成功将响铃三文鱼加入菜单');
}

obtn15.onclick = function(){
  if(document.getElementById('jian6').innerHTML==0)
  {
    alert('菜品不可为负值');
  }
  else {
    document.getElementById('jian6').innerHTML--;
    if (document.getElementById('jian6').innerHTML==1) {
      db.transaction(function(contex){
        contex.executeSql('delete from userinf where name="响铃三文鱼"');
          });
        }
        if(document.getElementById('jian6').innerHTML>0)
        {
        db.transaction(function(contex){
          contex.executeSql('update userinf set num=num-1 where name="响铃三文鱼"');
        });
        }
          alert('成功将响铃三文鱼移除菜单');
  }
}

obtn6.onclick = function(){
  document.getElementById('jian7').innerHTML++;
  if (document.getElementById('jian7').innerHTML==1) {
  db.transaction(function(contex){
    contex.executeSql('insert into userinf(name,price,num) values("啫啫生肠",15,0)');
  });
}
db.transaction(function(contex){
  contex.executeSql('update userinf set num=num+1 where name="啫啫生肠"');
});
  alert('成功将啫啫生肠加入菜单');
}

obtn16.onclick = function(){
  if(document.getElementById('jian7').innerHTML==0)
  {
    alert('菜品不可为负值');
  }
  else {
    document.getElementById('jian7').innerHTML--;
    if (document.getElementById('jian7').innerHTML==1) {
      db.transaction(function(contex){
        contex.executeSql('delete from userinf where name="啫啫生肠"');
          });
        }
        if(document.getElementById('jian7').innerHTML>0)
        {
        db.transaction(function(contex){
          contex.executeSql('update userinf set num=num-1 where name="啫啫生肠"');
        });
        }
          alert('成功将啫啫生肠移除菜单');
  }
}

obtn7.onclick = function(){
  document.getElementById('jian8').innerHTML++;
  if (document.getElementById('jian8').innerHTML==1) {
  db.transaction(function(contex){
    contex.executeSql('insert into userinf(name,price,num) values("啫啫鸡中宝",17,0)');
  });
}
db.transaction(function(contex){
  contex.executeSql('update userinf set num=num+1 where name="啫啫鸡中宝"');
});
  alert('成功将啫啫鸡中宝加入菜单');
}

obtn17.onclick = function(){
  if(document.getElementById('jian8').innerHTML==0)
  {
    alert('菜品不可为负值');
  }
  else {
    document.getElementById('jian8').innerHTML--;
    if (document.getElementById('jian8').innerHTML==1) {
      db.transaction(function(contex){
        contex.executeSql('delete from userinf where name="啫啫鸡中宝"');
          });
        }
        if(document.getElementById('jian8').innerHTML>0)
        {
        db.transaction(function(contex){
          contex.executeSql('update userinf set num=num-1 where name="啫啫鸡中宝"');
        });
        }
          alert('成功将啫啫鸡中宝移除菜单');
  }
}

obtn8.onclick = function(){
  document.getElementById('jian9').innerHTML++;
  if (document.getElementById('jian9').innerHTML==1) {
  db.transaction(function(contex){
    contex.executeSql('insert into userinf(name,price,num) values("椰香糖藕",11,0)');
  });
}
db.transaction(function(contex){
  contex.executeSql('update userinf set num=num+1 where name="椰香糖藕"');
});
  alert('成功将椰香糖藕加入菜单');
}

obtn18.onclick = function(){
  if(document.getElementById('jian9').innerHTML==0)
  {
    alert('菜品不可为负值');
  }
  else {
    document.getElementById('jian9').innerHTML--;
    if (document.getElementById('jian9').innerHTML==1) {
      db.transaction(function(contex){
        contex.executeSql('delete from userinf where name="椰香糖藕"');
          });
        }
        if(document.getElementById('jian9').innerHTML>0)
        {
        db.transaction(function(contex){
          contex.executeSql('update userinf set num=num-1 where name="椰香糖藕"');
        });
        }
          alert('成功将椰香糖藕移除菜单');
  }
}

obtn9.onclick = function(){
  document.getElementById('jian10').innerHTML++;
  if (document.getElementById('jian10').innerHTML==1) {
  db.transaction(function(contex){
    contex.executeSql('insert into userinf(name,price,num) values("泰式凤爪",19,0)');
  });
}
db.transaction(function(contex){
  contex.executeSql('update userinf set num=num+1 where name="泰式凤爪"');
});
  alert('成功将泰式凤爪加入菜单');
}

obtn19.onclick = function(){
  if(document.getElementById('jian10').innerHTML==0)
  {
    alert('菜品不可为负值');
  }
  else {
    document.getElementById('jian10').innerHTML--;
    if (document.getElementById('jian10').innerHTML==1) {
      db.transaction(function(contex){
        contex.executeSql('delete from userinf where name="泰式凤爪"');
          });
        }
        if(document.getElementById('jian10').innerHTML>0)
        {
        db.transaction(function(contex){
          contex.executeSql('update userinf set num=num-1 where name="泰式凤爪"');
        });
        }
          alert('成功将泰式凤爪移除菜单');
  }
}

db.transaction(function(contex){
contex.executeSql('select * from userinf',[],function(con,data){
//console.log(data);
var rows=data.rows.length,i;
console.log('总共行数是：'+rows);
for(var i=0;i<rows;i++){
console.log(data.rows.item(i).name);
console.log(data);
}
});
});
