Ext.onReady(function() {
	
	var navHandler = function(direction){
		var layout = cardPanel.getLayout(),
			index = cardPanel.items.indexOf(layout.activeItem),
			count = cardPanel.items.getCount(),
			backBtn = Ext.getCmp('move-prev'),
			nextBtn = Ext.getCmp('move-next');
			
		if(direction==1) {
			index++;
			if(index>=count) {index = count-1; return false;}
		} else if(direction==-1) {
			index--;
			if(index<0) {index=0;}
		}
		
		if(index==0) {
			backBtn.setDisabled(true);
		} else {
			backBtn.setDisabled(false);
		}
		
		if(index==count-1) {
			nextBtn.setDisabled(true);
			nextBtn.setText('Complete');
		} else {
			nextBtn.setDisabled(false);
			nextBtn.setText('Next');
		}
		
		layout.setActiveItem(index);
	};
	
	var cardPanel = new Ext.Panel({
		title: 'Card样式测试',
		width: 400,
		height: 300,
		layout: 'card',
		activeItem: 0,
		bbar:[{
			id: 'move-prev',
            text: 'Back',
            handler: navHandler.createDelegate(this, [-1]),
            disabled: true
		}, '->', {
			id: 'move-next',
            text: 'Next',
            handler: navHandler.createDelegate(this, [1])
		}],
		items: [{
			id: 'card-0',
        	html: '<h1>Welcome to the Wizard!</h1><p>Step 1 of 3</p>'
		}, {
			id: 'card-1',
        html: '<p>Step 2 of 3</p>'
		},{
			id: 'card-2',
        html: '<h1>Congratulations!</h1><p>Step 3 of 3 - Complete</p>'
		}]
	});
	cardPanel.render(Ext.getBody());
	
});
