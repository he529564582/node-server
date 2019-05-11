
---
title: js作用域
date: 2018-08-27 23:27:29   //在此处输入你编辑这篇文章的时间。
categories: Exercise   //在此处输入这篇文章的分类。
toc: true  //在此处设定是否开启目录，需要主题支持。
---
#### JavaScript的作用域是什么
作用域，在维基百科上解释是：在电脑程序设计中，作用域（scope，或译作有效范围）是名字（name）与实体（entity）的绑定（binding）保持有效的那部分计算机程序。
简单的说，作用域就是变量与函数的可访问范围，即作用域控制着变量与函数的可见性和生命周期。在JavaScript中，变量的作用域有全局作用域和局部作用域两种，局部作用域又称为函数作用域。

#### 全局作用域
在代码中任何地方都能访问到的对象拥有全局作用域，一般来说以下几种情形拥有全局作用域：

(1）程序最外层定义的函数或者变量
var a = "tsrot";
function hello(){
	alert(a);
}

function sayHello(){
	hello();
}

alert(a);     //能访问到tsrot
hello();      //能访问到tsrot
sayHello();   //能访问到hello函数，然后也能访问到tsrot
（2）所有末定义直接赋值的变量（不推荐）
function hello(){
	a = "tsrot";
	var b = "hello tsrot";
}

alert(a);  //能访问到tsrot
alert(b);  //error 不能访问
（3）所有window对象的属性和方法
一般情况下，window对象的内置属性都拥有全局作用域，例如window.name、window.location、window.top等等。

#### 局部作用域（函数作用域）
局部作用域在函数内创建，在函数内可访问，函数外不可访问。
function hello(){
	var a = "tsrot";
	alert(a);
}

hello(); //函数内可访问到tsrot
alert(a); //error not defined