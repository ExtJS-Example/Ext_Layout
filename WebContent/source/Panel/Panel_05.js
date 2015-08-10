/**
 * 使用items配置项添加单一组件示例
 */

Ext.onReady(function() {
	var panel = new Ext.Panel({
		title: '日历',
		width: 200,
		autoHeight: true,	// 自动搞定
		frame: true,		// 渲染面板
		collapsible: true,	// 允许展开和收缩
		items: new Ext.DatePicker()	// 想面板中添加一个日期组件
//		items: [{
//			xtype: 'datepicker',
//			minDate: new Date()
//		}]
	});
	panel.render(Ext.getBody());
});
