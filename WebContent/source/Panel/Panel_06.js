/**
 * 使用items配置项添加多个组件示例
 */

Ext.onReady(function() {
	var panel = new Ext.Panel({
		title: '使用items进行面板嵌套',
		width: 250,
		height: 200,
		frame: true,		// 渲染面板
		collapsible: true,	// 允许展开和收缩
		defaults: {			// 设置默认属性
			bodyStyle: 'background-color: #FFFFFF',	// 设置面板提的背景色
			height: 80,				// 子面板高度为80
			collapsible: true,		// 允许展开和收缩
			autoScroll: true		// 自动显示滚动条
		},
		items: [{
			title: '面板1',
			contentEl: 'localElment'	// 加载本地资源
		}, {
			title: '面板2',
			autoLoad: {					// 加载远程页面
				url:'Panel_01.html'
//				scripts: true			// 已使用这句就报错
			}
		}]
	});
	panel.render(Ext.getBody());
});
