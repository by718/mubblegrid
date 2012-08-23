function ScanWindow() {
	var win = Ti.UI.createWindow({
		title: 'Scan',
		backgroundColor: '#ccc',
		tabBarHidden: 'true'
	});
	
    var btnNav = Ti.UI.createButton({
    	title: 'Use',
    	color: '#000',
    	right: 10,
    	bottom: 10
    })
    
    btnNav.addEventListener('click',function(e) 
    {
		tabGroup.setActiveTab(3);
	});
    
    win.add(btnNav);

    return win;
}
module.exports = ScanWindow;
