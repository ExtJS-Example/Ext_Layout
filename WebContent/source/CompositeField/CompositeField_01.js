Ext.onReady(function() {
	var comPanel = new Ext.Panel({
		title: '测试compositeField',
		width: 500,
		height: 400,
		items: [{
			xtype: 'compositefield',
		    items: [
		        {
		            xtype     : 'button',
		            text: 'First'
		        },
		        {
		            xtype     : 'button',
		            text: 'Last'
		        }
		    ]
		}]
	});
	
	comPanel.render(Ext.getBody());
	
});
