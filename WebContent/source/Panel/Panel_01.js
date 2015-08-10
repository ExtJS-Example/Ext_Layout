Ext.onReady(function() {
	var panel = new Ext.Panel({
		title: '面板头部(header)',
		tbar: ['顶部工具栏(top toolbars)'],
		bbar: ['底部工具栏(bottom toolbars)'],
		width: 300,
		height: 200,
		frame: true,		// 使面板主体颜色与主题一致
		bodyStyle: 'background-color: #FFFFFF',
		html: '<div>面板体(body)</div>',
		tools: [
			{id: 'toggle'},
			{id: 'close'},
			{id: 'maximize'}
		],
		buttons: [
			new Ext.Button({
				text: '面板底部'
			})
		]
	});
	panel.render(Ext.getBody());
});
