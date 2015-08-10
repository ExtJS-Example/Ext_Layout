/**
 * 这个没有搞定, 不明觉厉啊
 * 启动服务器后, 通过网页访问, 还是不明觉厉啊
 */

Ext.onReady(function() {
	var panel = new Ext.Panel({
		title: '面板加载远程页面',
		width: 250,
		height: 150,
		frame: true,		// 渲染面板
		autoScroll: true,	// 自动显示滚动条
		collapsible: true,	// 允许展开和收缩
		autoLoad: 'Panel_01.html',	// 自动加载面板体的默认链接
		bodyStyle: 'background-color: #FFFFFF'	// 设置面板体的背景色
		
	});
	panel.render(Ext.getBody());
});
