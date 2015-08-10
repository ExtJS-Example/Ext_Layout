/**
 * 面板加载本地页面
 */

Ext.onReady(function() {
	var panel = new Ext.Panel({
		title: '面板加载本地页面',
		width: 250,
		height: 150,
		frame: true,		// 渲染面板
		autoScroll: true,	// 自动显示滚动条
		collapsible: true,	// 允许展开和收缩
		contentEl: 'localElment',	// 加载本地资源
		bodyStyle: 'background-color: #FFFFFF'	// 设置面板体的背景色
		
	});
	panel.render(Ext.getBody());
});
