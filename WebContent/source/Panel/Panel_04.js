/**
 * 使用html配置项自定义面板内容
 */

Ext.onReady(function() {
	var htmlArray = [
		'<table border=1>',  
            '<tr><td colspan=2>员工列表</td></tr>',  
            '<tr><th width = 60>序号</th><th width = 80>姓名</th><tr>',  
            '<tr><td>1</td><td>张三</td></tr>',  
            '<tr><td>2</td><td>李四</td></tr>',  
            '<tr><td>3</td><td>王五</td></tr>',  
            '<tr><td>4</td><td>赵六</td></tr>',  
            '<tr><td>5</td><td>陈七</td></tr>',  
            '<tr><td>6</td><td>杨八</td></tr>',  
            '<tr><td>7</td><td>刘九</td></tr>',  
        '</table>'
	];
	
	var panel = new Ext.Panel({
		title: '使用html配置项自定义面板内容',
		width: 250,
		height: 150,
		frame: true,		// 渲染面板
		autoScroll: true,	// 自动显示滚动条
		collapsible: true,	// 允许展开和收缩
		html: htmlArray.join(''),
		bodyStyle: 'background-color: #FFFFFF'	// 设置面板体的背景色
		
	});
	panel.render(Ext.getBody());
});
