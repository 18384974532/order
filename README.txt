该项目是一个在线点餐系统，有一个主页面首页index.html和两个子页面son.html和order.html，存储方式利用本地数据库。
本次项目的设计主要分为一个主页（首页），和两个子页（我的订单和订单统计），在首页中，将页面布局分为logo栏、导航栏、热卖菜品栏、今日菜品栏、推荐菜品栏、页脚栏，所有元素包含在container类里面来实现居中（宽度为1120px），logo栏背景采用渐变色1，导航栏为首页、我的订单、订单统计，分别有对应的链接入口以及对应反馈；热卖菜品中采用带有淡入淡出的轮播效果，可有四个菜品同时显示在页面上，但只有居中的菜品被点亮2，
今日菜品中提供10种带有价格的菜，分别有其对应的增添、删除符号，用于对菜品的增加和删除，同时显示出已点的数量，便于用户使用，对于菜品数据的存储使用了本地数据库3，每当添加菜品就往数据库中存入（菜品名称、数量、价格），便于对存入菜品的访问，推荐菜品中陈列了5种符合日常营养需求的菜品，页脚栏有对应中国消费者权益保护网入口和联系方式。
我的订单页中继承了首页的主题框架与logo栏、导航栏，在导航栏下方设置了对已点菜品的呈现，分别呈现出已点菜品的名称、已点菜品的数量、菜品的价格，这些数据从本地数据库中提取，同时为了便于用户操作，在我的订单页中增添了一个“清空订单”的按钮，可以将所有订单清空。
订单统计中，用chart.js中的图表显示了当天热卖前 3 的菜品统计结果。统计结果用多种类型的图表展示维度：价格、口味（酸甜苦辣）、食材等等。
img为图像库，需要注意图像路径的加载。
